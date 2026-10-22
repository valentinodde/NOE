
from dotenv import load_dotenv
import os
import io
from datetime import date, datetime, timedelta
from collections import defaultdict
import pandas as pd
import json
import html
import re


import psycopg2
from psycopg2.extras import execute_values
import math


load_dotenv()
# tz = pytz.timezone("Europe/Paris")
# utc_tz = pytz.timezone("UTC")


host = os.getenv("DB_PG_HOST")
user = os.getenv("DB_PG_USERNAME")
password = os.getenv("DB_PG_PASSWORD")
port = os.getenv("DB_PG_PORT")
name = os.getenv("DB_PG_NAME")


# Construction de l'URL de connexion
DATABASE_URL = f"postgresql://{user}:{password}@{host}:{port}/{name}"


# Historique des restrictions sécheresse (table arretes_communes_histo, alimentée
# par ingest_restrictions_histo.py depuis l'open data VigiEau).
HISTORIQUE_TABLE = "arretes_communes_histo"

# Historique des restrictions sécheresse.
# La table couvre 2013 à aujourd'hui, mais la couverture avant 2016 est très
# partielle (428 communes en SOU sur 2013) : ces années se liraient comme
# "pas de sécheresse" alors qu'elles signifient "pas de donnée".
HISTORIQUE_ANNEE_DEBUT = 2016

HISTORIQUE_RESSOURCES = {
    "SUP": "Eaux superficielles",
    "SOU": "Eaux souterraines",
}

HISTORIQUE_NIVEAUX = {
    "vigilance":        "Vigilance",
    "alerte":           "Alerte",
    "alerte_renforcee": "Alerte renforcée",
    "crise":            "Crise",
}

# Codes stockés dans le JSONB de arretes_communes_histo. 0 signifie "aucune
# restriction" et n'apparaît donc jamais dans les décomptes.
HISTORIQUE_NIVEAUX_PAR_CODE = {
    1: "vigilance",
    2: "alerte",
    3: "alerte_renforcee",
    4: "crise",
}


def get_conn():
    conn = psycopg2.connect(
        host=host,
        dbname=name,
        user=user,
        password=password,
        port=port
    )
    return conn



def load_entreprise_data_by_departments(departments):
    conn = get_conn()
    query = """
        SELECT *
        FROM insee_entreprises
        WHERE departement = ANY(%s)
    """

    # Chargement avec pandas
    df = pd.read_sql(query, conn, params=(departments,))
    conn.close()

    return df

def load_entreprise_data_by_siret(siret):
    conn = get_conn()
    query = """
        SELECT *
        FROM insee_entreprises
        WHERE siret = '%s'
    """

    # Chargement avec pandas
    js = pd.read_sql(query, conn, params=(siret,)).to_dict(orient='records')
    conn.close()

    return js

def load_bassin_data(bassin_id):
    conn = get_conn()
    cur = conn.cursor()
    
    query = "SELECT data FROM bassins WHERE bassin_id = %s"
    
    cur.execute(query, (bassin_id,))
    row = cur.fetchone()
    
    cur.close()
    conn.close()

    if row:
        return json.loads(row[0]) if isinstance(row[0], str) else row[0]
    
    return None



def load_sector_data(sector_id):
    """
    Récupère le contenu de la colonne 'data' pour un secteur donné.
    """
    conn = get_conn()
    cur = conn.cursor()

    # On sélectionne la colonne 'data' filtrée par 'sector_id'
    query = "SELECT data FROM sectors WHERE sector_id = %s"

    try:
        cur.execute(query, (sector_id,))
        row = cur.fetchone()
    except Exception as e:
        print(f"Erreur lors de la lecture du secteur {sector_id} : {e}")
        row = None
    finally:
        cur.close()
        conn.close()

    if row:
        return json.loads(row[0]) if isinstance(row[0], str) else row[0]

    return None


def _segments(bascules, debut, fin):
    """
    Développe une liste de points de bascule [[date, niveau], ...] en segments
    (date_debut, date_fin_exclue, niveau) couvrant la période [debut, fin].

    Le niveau vaut 0 avant la première bascule et reste constant jusqu'à la
    suivante, ce qui suffit à reconstituer l'historique jour par jour.
    """
    segments = []
    courant = 0
    curseur = debut

    for jour, niveau in bascules:
        jour = datetime.strptime(jour, "%Y-%m-%d").date()
        if jour > curseur:
            segments.append((curseur, jour, courant))
        curseur, courant = jour, niveau

    if curseur <= fin:
        segments.append((curseur, fin + timedelta(days=1), courant))

    return segments


def _jours_par_annee(bascules, debut, fin):
    """Nombre de jours passés à chaque niveau, par année : {annee: {niveau: jours}}."""
    compte = defaultdict(lambda: defaultdict(int))

    for d1, d2, niveau in _segments(bascules, debut, fin):
        if not niveau:
            continue
        libelle = HISTORIQUE_NIVEAUX_PAR_CODE.get(niveau)
        if libelle is None:
            continue

        # Un segment peut chevaucher plusieurs années, on le découpe.
        curseur = d1
        while curseur < d2:
            borne = min(d2, date(curseur.year + 1, 1, 1))
            compte[curseur.year][libelle] += (borne - curseur).days
            curseur = borne

    return compte


def _mois_suivant(jour):
    return date(jour.year + 1, 1, 1) if jour.month == 12 else date(jour.year, jour.month + 1, 1)


def _niveau_max_par_mois(bascules, debut, fin):
    """
    Niveau le plus sévère atteint dans chaque mois : {(annee, mois): niveau}.

    On retient le maximum plutôt que le niveau dominant : pour une lecture du
    risque, une semaine de crise dans un mois par ailleurs calme reste
    l'information à faire ressortir.
    """
    grille = defaultdict(int)

    for d1, d2, niveau in _segments(bascules, debut, fin):
        if not niveau:
            continue
        curseur = d1
        while curseur < d2:
            cle = (curseur.year, curseur.month)
            grille[cle] = max(grille[cle], niveau)
            curseur = min(d2, _mois_suivant(curseur))

    return grille


def load_restrictions_history(code_commune, annee_debut=None):
    """
    Historique annuel des restrictions sécheresse d'une commune, reconstruit
    depuis les points de bascule stockés dans arretes_communes_histo.

    Ne renvoie que SUP et SOU : la ressource AEP n'est renseignée qu'à partir de
    2024, l'inclure ferait apparaître une aggravation qui n'est qu'un ajout de
    source. S'arrête à la dernière année civile complète, l'année en cours étant
    couverte par le bloc temps réel issu de l'API VigiEau.
    """
    conn = get_conn()
    cur = conn.cursor()

    query = f"""
        SELECT data, date_debut, date_fin
        FROM {HISTORIQUE_TABLE}
        WHERE code_commune = %s
    """

    try:
        cur.execute(query, (str(code_commune),))
        row = cur.fetchone()
    except Exception as e:
        print(f"Erreur load_restrictions_history({code_commune}) : {e}")
        row = None
    finally:
        cur.close()
        conn.close()

    data, couverture_debut, couverture_fin = row if row else ({}, None, None)
    if isinstance(data, str):
        data = json.loads(data)

    annee_debut = annee_debut or HISTORIQUE_ANNEE_DEBUT
    if couverture_fin:
        # Dernière année civile entièrement couverte par la source.
        complete = couverture_fin >= date(couverture_fin.year, 12, 31)
        annee_fin = couverture_fin.year if complete else couverture_fin.year - 1
        annee_debut = max(annee_debut, couverture_debut.year)
    else:
        annee_fin = datetime.now().year - 1

    ressources = []
    concerne = False

    for code, label in HISTORIQUE_RESSOURCES.items():
        bascules = data.get(code) or []
        compte = grille_mois = {}
        if bascules:
            compte = _jours_par_annee(bascules, couverture_debut, couverture_fin)
            grille_mois = _niveau_max_par_mois(bascules, couverture_debut, couverture_fin)

        points = []
        mois = []
        for annee in range(annee_debut, annee_fin + 1):
            niveaux = {n: compte.get(annee, {}).get(n, 0) for n in HISTORIQUE_NIVEAUX}
            total = sum(niveaux.values())
            concerne = concerne or total > 0
            points.append({"annee": annee, **niveaux, "total": total})
            # 12 codes de niveau, de janvier à décembre.
            mois.append({
                "annee":   annee,
                "niveaux": [grille_mois.get((annee, m), 0) for m in range(1, 13)],
            })

        ressources.append({"code": code, "label": label, "points": points, "mois": mois})

    return {
        "code_commune":  str(code_commune),
        "annee_debut":   annee_debut,
        "annee_fin":     annee_fin,
        "donnees_jusqu_au": couverture_fin.isoformat() if couverture_fin else None,
        "concerne":      concerne,
        # "valeur" est le code numérique utilisé par la grille mensuelle.
        "niveaux":       [
            {"valeur": v, "code": c, "label": HISTORIQUE_NIVEAUX[c]}
            for v, c in sorted(HISTORIQUE_NIVEAUX_PAR_CODE.items())
        ],
        "ressources":    ressources,
    }


def load_institutional_actors_by_point(lat, lon, actor_type=None):
    """
    Retourne les acteurs institutionnels dont la géométrie contient le point (lat, lon).
    Filtre optionnel par type (ex: 'agence_eau').
    """
    conn = get_conn()
    cur = conn.cursor()

    if actor_type:
        query = """
            SELECT id, type, data, ST_AsGeoJSON(geom) AS geojson
            FROM institutional_actors
            WHERE ST_Contains(geom, ST_SetSRID(ST_MakePoint(%s, %s), 4326))
              AND type = %s
        """
        cur.execute(query, (lon, lat, actor_type))
    else:
        query = """
            SELECT id, type, data, ST_AsGeoJSON(geom) AS geojson
            FROM institutional_actors
            WHERE ST_Contains(geom, ST_SetSRID(ST_MakePoint(%s, %s), 4326))
        """
        cur.execute(query, (lon, lat))

    rows = cur.fetchall()
    columns = [desc[0] for desc in cur.description]
    cur.close()
    conn.close()

    result = []
    for row in rows:
        record = dict(zip(columns, row))
        record['geojson'] = json.loads(record['geojson']) if record['geojson'] else None
        result.append(record)

    return result


# ─── Retours d'expérience : aides des agences de l'eau ───────────────────────
# Table aides_exemples, construite par ingest_aides_exemples.py.

AIDES_TABLE = "aides_exemples"

# Cercles de proximité, du plus pertinent au plus large. Le libellé est affiché
# tel quel sur chaque exemple pour dire à l'utilisateur pourquoi on le lui montre.
AIDES_NIVEAUX = {
    1: "Même activité, même agence de l'eau",
    2: "Même activité, autre agence de l'eau",
    3: "Secteur proche, même agence de l'eau",
    4: "Secteur proche, autre agence de l'eau",
    5: "Même type d'action, même agence de l'eau",
}

AIDES_FINANCEMENT = {
    "Subvention":           "subvention",
    "Avance":               "avance",
    "Avance et Subvention": "mixte",
}


_CONTOURS_AGENCES = None


def load_contours_agences():
    """
    Contours simplifiés des six bassins des agences de l'eau (environ 25 Ko au
    total), pour le fond de carte des retours d'expérience. Gardés en mémoire :
    ils ne changent pas.
    """
    global _CONTOURS_AGENCES
    if _CONTOURS_AGENCES is None:
        conn = get_conn()
        cur = conn.cursor()
        try:
            cur.execute("""
                SELECT data->>'code', data->>'nom',
                       ST_AsGeoJSON(ST_SimplifyPreserveTopology(geom, 0.02), 3)
                FROM institutional_actors
                WHERE type = 'agence_eau'
                ORDER BY data->>'code'
            """)
            _CONTOURS_AGENCES = [
                {"code": code, "nom": nom, "geojson": json.loads(geo)}
                for code, nom, geo in cur.fetchall()
            ]
        finally:
            cur.close()
            conn.close()
    return _CONTOURS_AGENCES


def _agence_au_point(lat, lon):
    if lat is None or lon is None:
        return None
    acteurs = load_institutional_actors_by_point(lat, lon, "agence_eau")
    if not acteurs:
        return None
    data = acteurs[0]["data"]
    return {"code": data.get("code"), "nom": data.get("nom")}


def _stats_aides(cur, agence, **filtre):
    """Effectifs et médianes sur toutes les aides (pas seulement les exemplaires) d'un périmètre."""
    if not agence or not filtre:
        return None
    colonne, valeur = next(iter(filtre.items()))
    cur.execute(f"""
        SELECT count(*), count(DISTINCT coalesce(siret, beneficiaire)),
               percentile_cont(0.5) WITHIN GROUP (ORDER BY montant_aide),
               percentile_cont(0.5) WITHIN GROUP (ORDER BY taux_aide),
               sum(montant_aide), min(annee), max(annee)
        FROM {AIDES_TABLE}
        WHERE {colonne} = %s AND agence = %s AND montant_aide > 0
    """, (valeur, agence))
    n, n_benef, med_aide, med_taux, total, a_min, a_max = cur.fetchone()
    if not n:
        return None
    return {
        "nb_aides":         n,
        "nb_beneficiaires": n_benef,
        "mediane_aide":     round(float(med_aide)) if med_aide is not None else None,
        "mediane_taux":     round(float(med_taux), 2) if med_taux is not None else None,
        "total_aide":       round(float(total)) if total is not None else None,
        "annee_min":        a_min,
        "annee_max":        a_max,
    }


# Préfixes de gestion que certaines agences mettent devant l'objet
# ("EA I-22-2020-n°105 - Matériel...", "FV P113 16402067 - REPIC 2024 : ...").
_PREFIXE_DOSSIER = re.compile(
    r"^(EA I-\d+-\d{4}-n°\s?\d+|FV P\d+ \d+|AAP\s?[A-Z]*\d{4})\s*[-:]\s*",
    re.IGNORECASE,
)


def _objet_affiche(objet):
    """
    Objet du dossier tel qu'on l'affiche : entités HTML décodées, guillemets
    doublés de l'export CSV (AAP ""SOBRIETE"") ramenés à un seul, préfixes de
    gestion retirés, et texte tout en majuscules passé en minuscules avec une
    capitale initiale.
    """
    if not objet:
        return objet
    texte = html.unescape(objet).strip()
    if len(texte) > 1 and texte[0] == texte[-1] == '"':
        texte = texte[1:-1]
    texte = texte.replace('""', '"').strip()
    texte = _PREFIXE_DOSSIER.sub("", texte)
    lettres = [c for c in texte if c.isalpha()]
    if lettres and sum(c.isupper() for c in lettres) / len(lettres) > 0.8:
        texte = texte.lower()
    return texte[:1].upper() + texte[1:]


# Nature du dossier, lue dans son objet : une étude, un diagnostic ou un
# accompagnement (animation, formation), sinon des travaux ou des équipements.
# Sert à expliquer l'écart des montants.
_NATURE_ETUDE = re.compile(
    r"\b(études?|etudes?|audits?|diagnostics?|schémas? directeurs?|bilans?|"
    r"faisabilité|expertises?|accompagnements?|animations?|sensibilisation|formations?|itinéraires? tech)",
    re.IGNORECASE,
)


def _nature(objet):
    return "etude" if objet and _NATURE_ETUDE.search(objet) else "travaux"


def _nom_affiche(row):
    """Raison sociale, sauf pour les personnes physiques qui sont anonymisées."""
    if not row["personne_physique"]:
        return row["beneficiaire"], False
    agricole = row["type_beneficiaire"] == "agriculture" or (row["naf"] or "").startswith("01")
    generique = "Exploitation agricole" if agricole else "Entreprise individuelle"
    if row["dept_nom"]:
        generique += f" ({row['dept_nom']})"
    return generique, True


def load_aides_exemples(naf, lat=None, lon=None, dept=None, categories=None, limit=6, siren=None):
    """
    Exemples d'aides accordées par les agences de l'eau à des bénéficiaires
    comparables : même code NAF d'abord, puis même division NAF, puis même type
    d'action que le plan d'action de l'entreprise. À chaque niveau, l'agence de
    l'eau de l'établissement passe avant les autres et son département avant
    le reste du bassin.

    Un bénéficiaire n'apparaît qu'une fois par niveau pour éviter de montrer
    cinq tranches du même chantier. Les aides de l'entreprise elle-même
    (même SIREN) sont renvoyées à part dans "propres", pas comme exemples.
    """
    naf = (naf or "").strip() or None
    division = naf[:2] if naf else None
    categories = [c for c in (categories or []) if c]
    agence = _agence_au_point(lat, lon)
    code_agence = agence["code"] if agence else None

    conn = get_conn()
    cur = conn.cursor()

    try:
        # Les coordonnées (centre de la commune du bénéficiaire) sont jointes
        # après le tri et la limite, sur 300 lignes au plus.
        cur.execute(f"""
          SELECT q.*, cc.nom_commune, cc.latitude, cc.longitude
          FROM (
            SELECT a.id, a.agence, a.annee, a.dept_num, a.dept_nom, a.beneficiaire, a.type_beneficiaire,
                   COALESCE(a.code_commune, e.codecommuneetablissement) AS code_commune,
                   a.objet_operation, a.type_financement, a.montant_aide, a.montant_travaux, a.taux_aide,
                   a.naf, a.naf_source, a.personne_physique, a.themes,
                   (a.siren = %(siren)s) AS propre,
                   s.data->>'label' AS naf_label,
                   CASE
                     WHEN a.naf = %(naf)s          AND a.agence = %(agence)s THEN 1
                     WHEN a.naf = %(naf)s                                    THEN 2
                     WHEN a.naf_division = %(div)s AND a.agence = %(agence)s THEN 3
                     WHEN a.naf_division = %(div)s                           THEN 4
                     ELSE 5
                   END AS niveau,
                   (a.dept_num = %(dept)s) AS meme_departement
            FROM {AIDES_TABLE} a
            LEFT JOIN sectors s ON s.sector_id = REPLACE(a.naf, '.', '_')
            LEFT JOIN insee_entreprises e ON e.siret = a.siret
            WHERE a.exemplaire
              AND (
                    a.naf = %(naf)s
                 OR a.naf_division = %(div)s
                 OR (a.agence = %(agence)s AND a.themes && %(cats)s::text[])
                 OR a.siren = %(siren)s
              )
            ORDER BY niveau, meme_departement DESC NULLS LAST, a.annee DESC, a.montant_aide DESC
            LIMIT 300
          ) q
          LEFT JOIN communes_centroid cc ON cc.code_commune = q.code_commune
          ORDER BY q.niveau, q.meme_departement DESC NULLS LAST, q.annee DESC, q.montant_aide DESC
        """, {"naf": naf, "div": division, "agence": code_agence, "dept": dept,
              "cats": categories, "siren": siren or ""})
        rows = cur.fetchall()
        colonnes = [d[0] for d in cur.description]

        stats = {
            "secteur_agence":  _stats_aides(cur, code_agence, naf=naf) if naf else None,
            "division_agence": _stats_aides(cur, code_agence, naf_division=division) if division else None,
        }
    finally:
        cur.close()
        conn.close()

    exemples = []
    propres = []
    vus = set()
    for r in rows:
        row = dict(zip(colonnes, r))
        if row["propre"]:
            if len(propres) < 5:
                propres.append(_exemple(row))
            continue
        # On ne s'arrête pas à la limite : les aides propres à l'entreprise
        # peuvent être plus loin dans le tri (années antérieures).
        if len(exemples) >= limit:
            continue
        cle = (row["niveau"], (row["beneficiaire"] or "").strip().upper())
        if cle in vus:
            continue
        vus.add(cle)
        exemples.append(_exemple(row))

    return {
        "naf":          naf,
        "naf_division": division,
        "agence":       agence,
        "stats":        stats,
        "niveaux":      AIDES_NIVEAUX,
        "propres":      propres,
        "exemples":     exemples,
    }


def _exemple(row):
    nom, anonymise = _nom_affiche(row)
    objet = _objet_affiche(row["objet_operation"])
    return {
            "id":               row["id"],
            "niveau":           row["niveau"],
            "niveau_label":     AIDES_NIVEAUX[row["niveau"]],
            "meme_departement": bool(row["meme_departement"]),
            "agence":           row["agence"],
            "annee":            row["annee"],
            "dept_num":         row["dept_num"],
            "dept_nom":         row["dept_nom"],
            "beneficiaire":     nom,
            "anonymise":        anonymise,
            "naf":              row["naf"],
            "naf_label":        row["naf_label"],
            "naf_source":       row["naf_source"],
            "objet":            objet,
            "nature":           _nature(objet),
            # Centre de la commune, pas l'adresse. Le nom de la commune n'est
            # pas donné pour les bénéficiaires anonymisés.
            "commune":          None if anonymise else row.get("nom_commune"),
            "latitude":         float(row["latitude"]) if row.get("latitude") is not None else None,
            "longitude":        float(row["longitude"]) if row.get("longitude") is not None else None,
            "financement":      AIDES_FINANCEMENT.get(row["type_financement"], "inconnu"),
            "montant_aide":     float(row["montant_aide"]) if row["montant_aide"] is not None else None,
            "montant_travaux":  float(row["montant_travaux"]) if row["montant_travaux"] is not None else None,
            "taux_aide":        float(row["taux_aide"]) if row["taux_aide"] is not None else None,
            "themes":           list(row["themes"] or []),
        }


def load_full_data_by_siret(siret):
    """
    Charge en une seule requête l'entreprise, son bassin et son secteur.
    Le sector_id est dérivé de activiteprincipaleetablissement en remplaçant '.' par '_'.
    """
    conn = get_conn()
    cur = conn.cursor()

    query = """
        SELECT
            e.*,
            b.data  AS bassin_data,
            s.data  AS sector_data
        FROM insee_entreprises e
        LEFT JOIN bassins  b ON b.bassin_id  = e.bassin_id
        LEFT JOIN sectors  s ON s.sector_id  = REPLACE(e.activiteprincipaleetablissement, '.', '_')
        WHERE e.siret = %s
    """

    try:
        cur.execute(query, (siret,))
        row = cur.fetchone()
        columns = [desc[0] for desc in cur.description]
    except Exception as e:
        print(f"Erreur load_full_data_by_siret({siret}) : {e}")
        row = None
        columns = []
    finally:
        cur.close()
        conn.close()

    if not row:
        return None

    record = dict(zip(columns, row))

    raw_bassin  = record.pop("bassin_data",  None)
    raw_sector  = record.pop("sector_data",  None)

    bassin_data  = (json.loads(raw_bassin)  if isinstance(raw_bassin,  str) else raw_bassin)
    sector_data  = (json.loads(raw_sector)  if isinstance(raw_sector,  str) else raw_sector)

    return {
        "entreprise": record,
        "bassin":     bassin_data,
        "secteur":    sector_data,
    }


# ─── Référentiel questionnaire / plan d'action ────────────────────────────
# Tables alimentées par ingest_referentiel.py depuis api/seeds/.
# Les noms de colonnes sont en français, les clés renvoyées au front gardent
# le vocabulaire des composants (order, class, text, image, icon).

def _question_json(row):
    (qid, ordre, theme, qtype, classe, texte, condition, options, inp, scoring) = row
    return {
        "id":        qid,
        "order":     ordre,
        "theme":     theme,
        "type":      qtype,
        "class":     classe,
        "text":      texte,
        "condition": condition,
        "options":   options or [],
        "input":     inp,
        "scoring":   scoring,
    }


def _questionnaire_by_naf(cur, naf):
    cur.execute("""
        SELECT id, sector_id, sector_label, themes, topics_labels, action_plan_config
        FROM questionnaires
        WHERE %s = ANY(naf_codes)
        LIMIT 1
    """, (naf,))
    return cur.fetchone()


def load_referentiel_by_naf(naf):
    """
    Le référentiel de secteur pour un code NAF : le questionnaire, ses
    questions, les catégories du plan d'action et les mesures visibles par ce
    secteur (sectorisées pour lui ou transversales). Les prestataires et les
    aides dépendent du lieu et sont servis par load_solutions.

    Retourne None si aucun questionnaire ne couvre ce code NAF.
    """
    conn = get_conn()
    cur = conn.cursor()

    try:
        questionnaire = _questionnaire_by_naf(cur, naf)
        if not questionnaire:
            return None

        qid, sector_id, sector_label, themes, topics_labels, plan_config = questionnaire

        cur.execute("""
            SELECT id, ordre, theme, type, classe, texte, condition, options, input, scoring
            FROM questions
            WHERE questionnaire_id = %s
            ORDER BY ordre
        """, (qid,))
        questions = [_question_json(r) for r in cur.fetchall()]

        cur.execute("""
            SELECT id, label, description, icone, couleur
            FROM categories
            ORDER BY ordre
        """)
        categories = [
            {"id": r[0], "label": r[1], "description": r[2], "icon": r[3], "accentColor": r[4]}
            for r in cur.fetchall()
        ]

        cur.execute("""
            SELECT id, titre, titre_court, description, categorie, effort,
                   impact_eau, facilite, horizon, image_url, infos_complementaires, secteurs
            FROM actions
            WHERE (secteurs = '{}' OR %s = ANY(secteurs))
              AND statut = 'publie'
            ORDER BY id
        """, (sector_id,))
        actions = [
            {
                "id": r[0], "titre": r[1], "titre_court": r[2] or r[1], "description": r[3],
                "categorie": r[4], "effort": r[5], "impact_eau": r[6], "facilite": r[7],
                "horizon": r[8], "image": r[9], "infos_complementaires": r[10],
                "secteurs": r[11],
            }
            for r in cur.fetchall()
        ]
    finally:
        cur.close()
        conn.close()

    return {
        "questionnaire_id":   qid,
        "sector_id":          sector_id,
        "sector_label":       sector_label,
        "naf_code":           naf,
        "themes":             themes,
        "topics_labels":      topics_labels,
        "questions":          questions,
        "categories":         categories,
        "actions":            actions,
        "action_plan_config": plan_config,
    }


# Filtre commun aux prestataires et aux aides : publié, visible pour le
# secteur (sectorisé pour lui ou transversal) et pour le département (couvert
# ou national). Sans département connu, on ne renvoie que les fiches nationales.
_FILTRE_SOLUTIONS = """
    WHERE t.statut = 'publie'
      AND (t.secteurs = '{}' OR %(secteur)s = ANY(t.secteurs))
      AND (t.departements = '{}' OR %(dept)s = ANY(t.departements))
"""

# Les mesures liées à une fiche, avec les rôles du lien quand la table en a.
_MESURES_LIEES = """
    COALESCE(json_agg(json_build_object('id', l.action_id, 'roles', {roles})
                      ORDER BY l.action_id)
             FILTER (WHERE l.action_id IS NOT NULL), '[]')
"""


def load_solutions(naf, dept=None, lat=None, lon=None):
    """
    Prestataires et aides visibles pour un secteur (via le code NAF), un
    département et une agence de l'eau (résolue par le point lat/lon), chacun
    avec les mesures auxquelles il est explicitement lié. Sans point connu,
    seules les aides valables dans toutes les agences sont renvoyées.

    Retourne None si aucun questionnaire ne couvre ce code NAF.
    """
    agence = _agence_au_point(lat, lon)
    conn = get_conn()
    cur = conn.cursor()
    params = {
        "secteur": None,
        "dept":    dept or "",
        "agence":  agence["code"] if agence else "",
    }

    try:
        questionnaire = _questionnaire_by_naf(cur, naf)
        if not questionnaire:
            return None
        params["secteur"] = questionnaire[1]

        cur.execute(f"""
            SELECT t.id, t.nom, t.type, t.logo_url, t.siret, t.description, t.expertises,
                   t.categories, t.secteurs, t.departements, t.contacts,
                   {_MESURES_LIEES.format(roles="l.roles")}
            FROM prestataires t
            LEFT JOIN prestataires_actions l ON l.prestataire_id = t.id
            {_FILTRE_SOLUTIONS}
            GROUP BY t.id
            ORDER BY t.id
        """, params)
        prestataires = [
            {
                "id": r[0], "nom": r[1], "type": r[2], "logo_url": r[3], "siret": r[4],
                "description": r[5], "expertises": r[6], "categories": r[7],
                "secteurs": r[8], "departements": r[9], "contacts": r[10], "mesures": r[11],
            }
            for r in cur.fetchall()
        ]

        cur.execute(f"""
            SELECT t.id, t.nom, t.financeur, t.logo_url, t.type, t.taux, t.plafond,
                   t.description, t.eligibilite, t.infos_complementaires, t.categories,
                   t.secteurs, t.departements, t.agences,
                   {_MESURES_LIEES.format(roles="'{}'::text[]")}
            FROM aides t
            LEFT JOIN aides_actions l ON l.aide_id = t.id
            {_FILTRE_SOLUTIONS}
              AND (t.agences = '{{}}' OR %(agence)s = ANY(t.agences))
            GROUP BY t.id
            ORDER BY t.id
        """, params)
        aides = [
            {
                "id": r[0], "nom": r[1], "financeur": r[2], "logo_url": r[3], "type": r[4],
                "taux": r[5], "plafond": r[6], "description": r[7], "eligibilite": r[8],
                "infos_complementaires": r[9], "categories": r[10], "secteurs": r[11],
                "departements": r[12], "agences": r[13], "mesures": r[14],
            }
            for r in cur.fetchall()
        ]
    finally:
        cur.close()
        conn.close()

    return {
        "sector_id":    params["secteur"],
        "departement":  dept,
        "agence":       agence,
        "prestataires": prestataires,
        "aides":        aides,
    }