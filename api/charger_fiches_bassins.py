"""Remplace le contenu de la table `bassins` par les fiches NOE générées dans hydrosrefactos.

    conda run -n noe-env python api/charger_fiches_bassins.py                 # vérification seule (défaut, aucune écriture)
    conda run -n noe-env python api/charger_fiches_bassins.py --charger       # sauvegarde puis remplacement
    conda run -n noe-env python api/charger_fiches_bassins.py --restaurer temp_files/sauvegarde_bassins/<fichier>.jsonl.gz

Fiches : `bassin_<gid>.json` produites par `python -m src.modeles.fiches_noe` (hydrosrefactos), dossier
`results/FRANCE/donnees/json_par_bassin/`. Déjà en WGS84 : aucune reprojection.

Règles :
- les lignes existantes sont mises à jour (UPDATE par `bassin_id`), la table n'est ni supprimée ni recréée :
  index et droits restent en place ; tout se fait dans une seule transaction, annulée si le nombre de lignes
  mises à jour n'est pas exactement celui des fiches ;
- `bassin_id` = `_id` de la fiche (`b_N`, numérotation d'avril 2026) : `insee_entreprises.bassin_id` n'est
  pas touché et reste valable ;
- `geom` = `bassin.geojson_complet` (toutes les parties) quand la fiche en a un, sinon `bassin.geojson`,
  passé par ST_MakeValid et ST_Multi comme au chargement d'avril ;
- `--charger` écrit d'abord une sauvegarde de la table (`temp_files/sauvegarde_bassins/`, une ligne JSON par
  bassin : bassin_id, data, geom) ; `--restaurer` remet une sauvegarde en place.
"""

from __future__ import annotations

import argparse
import gzip
import json
import re
import sys
from datetime import datetime
from pathlib import Path

ICI = Path(__file__).resolve().parent
sys.path.insert(0, str(ICI))
import DB_processor as DBP  # noqa: E402

FICHES = Path.home() / "Desktop" / "hydrosrefactos" / "results" / "FRANCE" / "donnees" / "json_par_bassin"
SAUVEGARDES = ICI / "temp_files" / "sauvegarde_bassins"
MISE_A_JOUR = """
    UPDATE bassins SET data = %s::jsonb, geom = ST_SetSRID(ST_Multi(ST_MakeValid(ST_GeomFromGeoJSON(%s))), 4326)
    WHERE bassin_id = %s
"""


def lire_fiches(dossier: Path) -> dict[str, dict]:
    fiches = {}
    for f in sorted(dossier.glob("bassin_*.json")):
        d = json.loads(f.read_text(encoding="utf-8"))
        fiches[d["_id"]] = d
    return fiches


def geometrie(d: dict) -> dict:
    return d["bassin"].get("geojson_complet") or d["bassin"]["geojson"]["geometry"]


def _nom(s: str) -> str:
    return re.sub(r"\s*\((c|nc|inclus|incluse|exclu|exclue)\)", "", (s or "").lower()).replace("  ", " ").strip()


def sauvegarder(cur) -> Path:
    SAUVEGARDES.mkdir(parents=True, exist_ok=True)
    f = SAUVEGARDES / f"bassins_{datetime.now():%Y-%m-%d_%H%M%S}.jsonl.gz"
    cur.execute("SELECT bassin_id, data, ST_AsGeoJSON(geom) FROM bassins ORDER BY bassin_id")
    n = 0
    with gzip.open(f, "wt", encoding="utf-8") as out:
        for bid, data, geom in cur:
            out.write(json.dumps({"bassin_id": bid, "data": data, "geom": json.loads(geom)}, ensure_ascii=False) + "\n")
            n += 1
    print(f"sauvegarde : {n} lignes dans {f}")
    return f


def verifier(cur, fiches: dict[str, dict]) -> bool:
    """Contrôles sans écriture : mêmes bassin_id, mêmes bassins (nom, recouvrement des géométries), tailles."""
    cur.execute("SELECT bassin_id, data->'bassin'->>'nom' FROM bassins")
    base = dict(cur.fetchall())
    manquants, en_trop = sorted(set(base) - set(fiches)), sorted(set(fiches) - set(base))
    print(f"table : {len(base)} bassins ; fiches : {len(fiches)} ; absents des fiches : {len(manquants)} ; absents de la table : {len(en_trop)}")
    noms_diff = [k for k in fiches if k in base and _nom(base[k]) != _nom(fiches[k]["bassin"]["nom"])]
    print(f"nom de bassin différent (annotations (c)/(nc)/(inclus) ignorées) : {len(noms_diff)}")
    for k in noms_diff[:10]:
        print(f"   {k} : « {base[k]} » → « {fiches[k]['bassin']['nom']} »")
    cur.execute("CREATE TEMP TABLE _geom_nouvelles (bassin_id text, g text) ON COMMIT DROP")
    for k, d in fiches.items():
        cur.execute("INSERT INTO _geom_nouvelles VALUES (%s, %s)", (k, json.dumps(geometrie(d))))
    cur.execute("""
        SELECT b.bassin_id,
               ST_Area(ST_Intersection(b.geom, n.g2)::geography) / NULLIF(ST_Area(ST_Union(b.geom, n.g2)::geography), 0)
        FROM bassins b JOIN (SELECT bassin_id, ST_MakeValid(ST_SetSRID(ST_GeomFromGeoJSON(g), 4326)) AS g2 FROM _geom_nouvelles) n
        USING (bassin_id)""")
    rec = dict(cur.fetchall())
    faibles = sorted((v, k) for k, v in rec.items() if v is not None and v < 0.95)
    print(f"recouvrement ancienne / nouvelle géométrie : médiane {sorted(rec.values())[len(rec) // 2]:.3f} ; sous 0,95 : {len(faibles)}")
    for v, k in faibles[:10]:
        print(f"   {k} : {v:.2f} ({fiches[k]['bassin']['nom'][:60]})")
    cur.execute("SELECT pg_size_pretty(sum(pg_column_size(data))) FROM bassins")
    print(f"taille des données : table actuelle {cur.fetchone()[0]} ; fiches {sum(len(json.dumps(d)) for d in fiches.values()) / 1e6:.0f} Mo (JSON brut)")
    cur.execute("SELECT count(*), count(bassin_id) FROM insee_entreprises")
    n, avec = cur.fetchone()
    print(f"entreprises : {n} dont {avec} rattachées à un bassin (non modifiées par ce script)")
    ok = not manquants and not en_trop
    print("→ prêt pour --charger" if ok else "→ NON : les identifiants ne correspondent pas, rien ne sera chargé")
    return ok


def charger(conn, fiches: dict[str, dict]) -> None:
    cur = conn.cursor()
    if not verifier(cur, fiches):
        conn.rollback()
        raise SystemExit(1)
    conn.rollback()                                                 # la vérification a créé une table temporaire
    sauvegarder(cur)
    n = 0
    for k, d in fiches.items():
        cur.execute(MISE_A_JOUR, (json.dumps(d, ensure_ascii=False, allow_nan=False), json.dumps(geometrie(d), allow_nan=False), k))
        n += cur.rowcount
    if n != len(fiches):
        conn.rollback()
        raise SystemExit(f"{n} lignes mises à jour pour {len(fiches)} fiches : transaction annulée, rien n'est changé")
    conn.commit()
    print(f"{n} bassins remplacés")


def restaurer(conn, fichier: Path) -> None:
    cur = conn.cursor()
    n = 0
    with gzip.open(fichier, "rt", encoding="utf-8") as f:
        for ligne in f:
            r = json.loads(ligne)
            cur.execute("UPDATE bassins SET data = %s::jsonb, geom = ST_SetSRID(ST_GeomFromGeoJSON(%s), 4326) WHERE bassin_id = %s",
                        (json.dumps(r["data"], ensure_ascii=False), json.dumps(r["geom"]), r["bassin_id"]))
            n += cur.rowcount
    conn.commit()
    print(f"{n} bassins restaurés depuis {fichier}")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--dossier", type=Path, default=FICHES, help="dossier des fiches bassin_<gid>.json")
    mode = ap.add_mutually_exclusive_group()
    mode.add_argument("--charger", action="store_true", help="sauvegarder puis remplacer la table")
    mode.add_argument("--restaurer", type=Path, help="remettre en place une sauvegarde (.jsonl.gz)")
    args = ap.parse_args()
    conn = DBP.get_conn()
    try:
        if args.restaurer:
            restaurer(conn, args.restaurer)
            return
        fiches = lire_fiches(args.dossier)
        if args.charger:
            charger(conn, fiches)
        else:
            verifier(conn.cursor(), fiches)
            conn.rollback()                                         # rien n'est écrit
    finally:
        conn.close()


if __name__ == "__main__":
    main()
