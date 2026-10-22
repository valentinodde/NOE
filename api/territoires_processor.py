"""
Données de la page Vision territoriale : les 1 140 bassins versants de
France métropolitaine sur une carte, avec pour chacun les indicateurs
comparables d'un bassin à l'autre, aux horizons actuel, 2030 et 2050.

Tout est calculé une fois par processus puis gardé en mémoire (les fiches
des bassins ne changent qu'à leur régénération) :
- la carte : contours simplifiés et indicateurs, servie compressée ;
- les communes, rattachées à leur bassin par leur centroïde, pour la
  recherche et pour savoir quels départements chaque bassin touche.

L'activité économique vient de bassins_activite (ingest_activite_bassins.py).
La dépendance d'un secteur à l'eau est le score final opérations / quantité
du référentiel sectoriel (0 à 3).
"""

import gzip
import json
import threading
import unicodedata
from functools import lru_cache

import DB_processor as DBP

# Tolérance de simplification des contours, en degrés (environ 300 m) :
# invisible à l'échelle de la France ou d'une région, 1 Mo de géométrie au
# lieu de 10.
TOLERANCE_CONTOURS = 0.004

# Scores opérations / quantité du référentiel sectoriel : 3 = dépendance
# forte à l'eau (hôpitaux, pharmacie, agroalimentaire, sidérurgie...),
# 2 = significative (elle inclut des activités très répandues comme la
# boulangerie ou l'hôtellerie, d'où un indicateur de carte sur le seul 3).
SCORE_FORTE = 3
SCORE_SIGNIFICATIVE = 2

# Score de chaque secteur, au format NAF de insee_entreprises (« 01.11Z »).
# Joindre sur cette table de 732 lignes, plutôt que d'extraire le JSON pour
# chaque ligne de bassins_activite, divise le temps de calcul par quarante.
SCORES_SECTEURS = """
    scores AS MATERIALIZED (
        SELECT REPLACE(sector_id, '_', '.') AS naf,
               data->>'label' AS libelle,
               (data->'operations'->'quantity'->>'final_score')::int AS score
        FROM sectors
    )
"""

# Sous ce volume (Mm³/an), les prélèvements du bassin sont négligeables : même
# seuil que l'onglet Constat (SEUIL_PRELEVEMENTS_MM3)
SEUIL_PRELEVEMENTS_MM3 = 0.05

HORIZONS = ("actuel", "2030", "2050")
USAGES = ("agriculture", "aep", "industrie")

_verrou = threading.Lock()


def _g(d, *chemin):
    for cle in chemin:
        if not isinstance(d, dict):
            return None
        d = d.get(cle)
    return d


def _arrondi(v, decimales=1):
    return None if v is None else round(float(v), decimales)


def _evolution_pct(valeur, reference):
    if valeur is None or not reference:
        return None
    return round((valeur - reference) / abs(reference) * 100, 1)


def _par_horizon(source, decimales=1, horizons=HORIZONS):
    if not isinstance(source, dict):
        return {}
    return {h: _arrondi(source.get(h), decimales) for h in horizons if source.get(h) is not None}


def _indicateurs(d):
    """Indicateurs cartographiables d'un bassin, chacun par horizon."""
    pc = d.get("projections_climatiques") or {}
    prel = d.get("prelevements") or {}

    restrictions = dict(_par_horizon(_g(d, "arretes_secheresse", "projection_eaux_superficielles"), 0))
    if "actuel" not in restrictions:
        moyenne = _g(d, "arretes_secheresse", "moyenne_2012_2025", "eaux_superficielles")
        if moyenne is not None:
            restrictions["actuel"] = moyenne

    recharge = _g(d, "nappes", "recharge_mm") or {}
    pluie_ete = pc.get("precip_estivales_mm") or {}

    # Les prélèvements par usage (volume, part de la ressource, évolution) se
    # calculent côté page depuis x.prelevements_mm3 et la surface : ici,
    # seul l'usage dominant
    usage = {}
    for h in HORIZONS:
        p = prel.get(h)
        if p and sum(p.get(u) or 0 for u in USAGES) >= SEUIL_PRELEVEMENTS_MM3:
            usage[h] = max(USAGES, key=lambda u: p.get(u) or 0)

    # Eau produite par le bassin lui-même, sans les apports de l'amont :
    # ruissellement et infiltration, en mm par an (même définition que
    # l'offre de l'onglet Constat)
    disponibilite = {}
    for h in HORIZONS:
        cycle = _g(d, "cycle_eau", h)
        if cycle and (cycle.get("ruissellement_mm") is not None or cycle.get("infiltration_mm") is not None):
            disponibilite[h] = round((cycle.get("ruissellement_mm") or 0) + (cycle.get("infiltration_mm") or 0))

    prix = _g(d, "water_price", "evolution") or {}

    return {
        "stress": {h: c for h, c in (_g(d, "stress_hydrique", "classe") or {}).items() if c and h in HORIZONS},
        "restrictions": restrictions,
        "etiage": _par_horizon(pc.get("debit_etiage_pct"), 0, ("2030", "2050")),
        "recharge": {h: _evolution_pct(recharge.get(h), recharge.get("ref")) for h in HORIZONS
                     if _evolution_pct(recharge.get(h), recharge.get("ref")) is not None},
        "sols_secs": _par_horizon(pc.get("jours_sols_secs"), 0),
        "temperature": _par_horizon(pc.get("temperature_delta_c"), 1),
        "pluie_ete": {h: _evolution_pct(pluie_ete.get(h), pluie_ete.get("ref")) for h in HORIZONS
                      if _evolution_pct(pluie_ete.get(h), pluie_ete.get("ref")) is not None},
        "disponibilite": disponibilite,
        "usage": usage,
        "prix": {h: _arrondi(prix.get(cle), 2) for h, cle in (("actuel", "2024"), ("2030", "2030"), ("2050", "2050"))
                 if prix.get(cle) is not None},
    }


def _complements(d):
    """Valeurs de détail du panneau d'un bassin, hors carte."""
    prel = d.get("prelevements") or {}
    arretes = d.get("arretes_secheresse") or {}
    return {
        "prelevements_mm3": {
            h: {u: _arrondi(prel[h].get(u), 3) for u in USAGES} for h in HORIZONS if prel.get(h)
        },
        # Évolution observée (BNPE) entre le début et la fin de la période,
        # par usage : {usage: {evolution_pct, periode_debut, periode_fin}}
        "prelevements_historique": {
            u: {k: e.get(k) for k in ("evolution_pct", "periode_debut", "periode_fin")}
            for u, e in (_g(d, "historique_prelevements", "evolution") or {}).items()
            if u in USAGES and isinstance(e, dict) and e.get("evolution_pct") is not None
        },
        "restrictions_souterraines": _g(arretes, "moyenne_2012_2025", "eaux_souterraines"),
        "pire_annee": _g(arretes, "pire_annee", "eaux_superficielles"),
        "sols_secs_ref": _g(d, "projections_climatiques", "jours_sols_secs", "ref"),
        "temperature_ref": _g(d, "projections_climatiques", "mean_temperature", "ref"),
        "milieu_nappes": _g(d, "nappes", "milieu_dominant"),
    }


def _activite_par_bassin(cur):
    cur.execute(
        f"""
        WITH {SCORES_SECTEURS}
        SELECT a.bassin_id,
               sum(a.emplois_estimes),
               sum(a.emplois_estimes) FILTER (WHERE s.score = %s),
               sum(a.emplois_estimes) FILTER (WHERE s.score = %s),
               sum(a.etablissements_employeurs)
        FROM bassins_activite a
        LEFT JOIN scores s ON s.naf = a.naf
        GROUP BY a.bassin_id
        """,
        (SCORE_FORTE, SCORE_SIGNIFICATIVE),
    )
    return {
        bid: {"emplois": round(total or 0), "forte": round(forte or 0), "significative": round(sig or 0),
              "employeurs": int(employeurs or 0)}
        for bid, total, forte, sig, employeurs in cur.fetchall()
    }


def _sans_accents(texte):
    return "".join(c for c in unicodedata.normalize("NFD", texte or "") if unicodedata.category(c) != "Mn").lower()


def _departement_de(code_commune):
    return code_commune[:3] if code_commune.startswith("97") else code_commune[:2]


@lru_cache(maxsize=1)
def _communes():
    """Communes de métropole rattachées au bassin qui contient leur centroïde."""
    conn = DBP.get_conn()
    try:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT c.code_commune, c.nom_commune, c.longitude, c.latitude, b.bassin_id
                FROM communes_centroid c
                JOIN bassins b ON ST_Contains(b.geom, ST_SetSRID(ST_MakePoint(c.longitude, c.latitude), 4326))
                """
            )
            rows = cur.fetchall()
    finally:
        conn.close()
    return [
        {"code": code, "nom": nom, "dep": _departement_de(code), "lon": round(lon, 4), "lat": round(lat, 4),
         "bassin_id": bid, "_cle": _sans_accents(nom)}
        for code, nom, lon, lat, bid in rows
    ]


@lru_cache(maxsize=1)
def _carte():
    conn = DBP.get_conn()
    try:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT bassin_id, data,
                       ST_AsGeoJSON(ST_SimplifyPreserveTopology(geom, %s), 4),
                       ST_XMin(geom), ST_YMin(geom), ST_XMax(geom), ST_YMax(geom)
                FROM bassins
                """,
                (TOLERANCE_CONTOURS,),
            )
            bassins = cur.fetchall()
            activite = _activite_par_bassin(cur)
    finally:
        conn.close()

    departements = {}
    for c in _communes():
        departements.setdefault(c["bassin_id"], set()).add(c["dep"])

    features = []
    for bid, d, geometrie, xmin, ymin, xmax, ymax in bassins:
        d = json.loads(d) if isinstance(d, str) else (d or {})
        b = d.get("bassin") or {}
        principal = b.get("departement")
        deps = sorted(departements.get(bid, set()) | ({principal} if principal else set()))
        features.append({
            "type": "Feature",
            "id": bid,
            "geometry": json.loads(geometrie),
            "properties": {
                "id": bid,
                "nom": b.get("nom"),
                "cours_eau": b.get("cours_eau_principal"),
                "region_hydro": b.get("region_hydrographique"),
                "dep": principal,
                "deps": deps,
                "population": b.get("population"),
                "surface": b.get("surface_km2"),
                "bbox": [round(xmin, 3), round(ymin, 3), round(xmax, 3), round(ymax, 3)],
                "v": _indicateurs(d),
                "x": _complements(d),
                "activite": activite.get(bid),
            },
        })

    corps = json.dumps({"type": "FeatureCollection", "features": features}, ensure_ascii=False, separators=(",", ":"))
    return gzip.compress(corps.encode("utf-8"), compresslevel=6)


def carte_bassins_gzip():
    """FeatureCollection des bassins, compressée (gzip), calculée une fois."""
    with _verrou:
        return _carte()


def prechauffer():
    """Calcule la carte en tâche de fond au démarrage (quelques secondes),
    pour que le premier visiteur n'attende pas."""
    def calcul():
        try:
            carte_bassins_gzip()
        except Exception as e:  # la route recommencera et renverra l'erreur
            print(f"Préchauffage de la carte des bassins impossible : {e}")
    threading.Thread(target=calcul, daemon=True).start()


def rechercher_communes(q, limite=8):
    """Communes dont le nom commence par `q` (puis le contient), ou par code INSEE / postal partiel."""
    cle = _sans_accents(q).strip()
    if len(cle) < 2:
        return []
    with _verrou:
        communes = _communes()
    if cle.isdigit():
        trouvees = [c for c in communes if c["code"].startswith(cle)]
    else:
        debut = [c for c in communes if c["_cle"].startswith(cle)]
        dedans = [c for c in communes if cle in c["_cle"] and not c["_cle"].startswith(cle)]
        trouvees = sorted(debut, key=lambda c: len(c["nom"])) + dedans
    return [{k: v for k, v in c.items() if k != "_cle"} for c in trouvees[:limite]]


def load_activite(bassin_ids=None, limite=8):
    """
    Emplois salariés estimés d'un ensemble de bassins (tous si None) et
    activités dépendantes de l'eau qui en pèsent le plus : dépendance forte
    d'abord, puis significative, chacune par emplois décroissants.
    """
    filtre, params = "", []
    if bassin_ids:
        filtre = "WHERE bassin_id = ANY(%s)"
        params.append(list(bassin_ids))

    conn = DBP.get_conn()
    try:
        with conn.cursor() as cur:
            cur.execute(
                f"""
                WITH {SCORES_SECTEURS},
                agregat AS (
                    SELECT naf, sum(emplois_estimes) AS emplois, sum(etablissements_employeurs) AS employeurs
                    FROM bassins_activite
                    {filtre}
                    GROUP BY naf
                )
                SELECT a.naf, s.libelle, s.score, a.emplois, a.employeurs
                FROM agregat a
                LEFT JOIN scores s ON s.naf = a.naf
                """,
                params,
            )
            rows = cur.fetchall()
    finally:
        conn.close()

    def total(score):
        return round(sum(r[3] or 0 for r in rows if r[2] == score))

    dependants = [r for r in rows if r[2] is not None and r[2] >= SCORE_SIGNIFICATIVE and (r[3] or 0) > 0]
    dependants.sort(key=lambda r: (r[2], r[3] or 0), reverse=True)
    return {
        "emplois": round(sum(r[3] or 0 for r in rows)),
        "forte": total(SCORE_FORTE),
        "significative": total(SCORE_SIGNIFICATIVE),
        "employeurs": int(sum(r[4] or 0 for r in rows)),
        "secteurs": [
            {"naf": naf, "libelle": libelle, "score": score, "emplois": round(e or 0), "employeurs": int(n or 0)}
            for naf, libelle, score, e, n in dependants[:limite]
        ],
    }
