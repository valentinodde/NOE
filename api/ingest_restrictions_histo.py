"""
Ingestion de l'historique des restrictions sécheresse par commune.

Source : jeu "Donnée Sécheresse - VigiEau" sur data.gouv.fr, ressource
historique-communes.zip, qui contient un unique historique_communes.json
listant pour chaque commune le niveau de gravité de chaque jour depuis
2010, par ressource (SUP, SOU, AEP).

Le fichier fait environ 45 Go décompressés. Il est lu en streaming, commune
par commune, et seuls les points de bascule sont conservés : une commune
change rarement de niveau, donc quelques dizaines de dates suffisent à
décrire 16 ans d'historique. On passe ainsi de 8 millions de lignes par an
à une ligne par commune.

Usage :
    conda run -n noe-env python api/ingest_restrictions_histo.py                 # télécharge la source
    conda run -n noe-env python api/ingest_restrictions_histo.py chemin/vers.zip # fichier déjà téléchargé
    conda run -n noe-env python api/ingest_restrictions_histo.py --table-only    # crée la table et sort
"""

import codecs
import json
import re
import sys
import time
import zipfile

from psycopg2.extras import execute_values

import DB_processor as DBP


# Ressource data.gouv (identifiant stable, redirige vers la dernière publication)
SOURCE_URL = "https://www.data.gouv.fr/api/1/datasets/r/4322064e-cfb4-4c8a-8200-7620f491ccdb"

TABLE = "arretes_communes_histo"

# Codes numériques stockés dans le JSONB, pour que les bascules restent compactes.
NIVEAU_CODES = {
    None:               0,
    "vigilance":        1,
    "alerte":           2,
    "alerte_renforcee": 3,
    "crise":            4,
}

RESSOURCES = ("SUP", "SOU", "AEP")

BATCH = 1000  # communes par INSERT

DEBUT_COMMUNE = re.compile(r'\{"commune":\{"code":"([\w]+)","nom":"((?:[^"\\]|\\.)*)"\}')
JOUR = re.compile(
    r'\{"AEP":(null|"\w+"),"SOU":(null|"\w+"),"SUP":(null|"\w+"),"date":"(\d{4}-\d{2}-\d{2})"\}'
)


DDL = f"""
CREATE TABLE IF NOT EXISTS {TABLE} (
    code_commune  varchar(10) PRIMARY KEY,
    nom_commune   text,
    date_debut    date  NOT NULL,
    date_fin      date  NOT NULL,
    data          jsonb NOT NULL,
    ingested_at   timestamptz NOT NULL DEFAULT now()
);

COMMENT ON COLUMN {TABLE}.data IS
    'Points de bascule par ressource : {{"SUP": [["2025-06-02", 2], ...]}}. '
    'Niveaux : 0 aucune, 1 vigilance, 2 alerte, 3 alerte renforcée, 4 crise. '
    'Le niveau est 0 avant la première bascule et reste constant entre deux bascules.';
"""


def creer_table():
    conn = DBP.get_conn()
    cur = conn.cursor()
    cur.execute(DDL)
    conn.commit()
    cur.close()
    conn.close()
    print(f"Table {TABLE} prête.")


def telecharger():
    """Télécharge la source dans un fichier temporaire et renvoie son chemin."""
    import tempfile
    import requests

    chemin = f"{tempfile.gettempdir()}/historique-communes.zip"
    print(f"Téléchargement de la source vers {chemin}")

    with requests.get(SOURCE_URL, stream=True, timeout=60) as r:
        r.raise_for_status()
        total = int(r.headers.get("Content-Length", 0))
        recu = 0
        with open(chemin, "wb") as f:
            for morceau in r.iter_content(chunk_size=1 << 20):
                f.write(morceau)
                recu += len(morceau)
                if total:
                    print(f"\r  {100 * recu / total:5.1f} %", end="", flush=True)
    print()
    return chemin


def bascules(bloc):
    """
    Extrait les points de bascule d'un bloc JSON correspondant à une commune.

    Renvoie (data, date_min, date_max) où data ne contient que les ressources
    ayant connu au moins une restriction.
    """
    precedent = {r: 0 for r in RESSOURCES}
    points = {r: [] for r in RESSOURCES}
    date_min = date_max = None

    for m in JOUR.finditer(bloc):
        aep, sou, sup, date = m.groups()
        if date_min is None:
            date_min = date
        date_max = date

        for ressource, brut in (("AEP", aep), ("SOU", sou), ("SUP", sup)):
            niveau = 0 if brut == "null" else NIVEAU_CODES[brut.strip('"')]
            if niveau != precedent[ressource]:
                points[ressource].append([date, niveau])
                precedent[ressource] = niveau

    data = {r: p for r, p in points.items() if p}
    return data, date_min, date_max


def preparer(match, bloc):
    """Transforme un bloc JSON de commune en ligne prête à insérer, ou None."""
    data, date_min, date_max = bascules(bloc)
    if date_min is None:
        return None  # bloc sans aucune date exploitable
    nom = json.loads(f'"{match.group(2)}"')
    return (match.group(1), nom, date_min, date_max, json.dumps(data))


def ingerer(chemin_zip):
    creer_table()

    conn = DBP.get_conn()
    cur = conn.cursor()
    cur.execute(f"TRUNCATE {TABLE}")

    debut = time.time()
    lot = []
    total_communes = 0
    total_bascules = 0
    ignorees = 0
    octets = 0

    def vider():
        nonlocal lot, total_communes
        if not lot:
            return
        ecrire(cur, lot)
        conn.commit()
        total_communes += len(lot)
        lot = []
        secondes = max(time.time() - debut, 1)
        print(f"\r  {total_communes:>6,} communes   {octets / 1e9:6.1f} Go lus   "
              f"{octets / 1e6 / secondes:5.0f} Mo/s", end="", flush=True)

    def enregistrer(match, bloc):
        nonlocal total_bascules, ignorees
        ligne = preparer(match, bloc)
        if ligne is None:
            ignorees += 1
            return
        total_bascules += sum(len(v) for v in json.loads(ligne[4]).values())
        lot.append(ligne)

    with zipfile.ZipFile(chemin_zip) as z:
        nom_fichier = z.namelist()[0]
        print(f"Lecture de {nom_fichier} en streaming")

        # Décodeur incrémental : un caractère multi-octets peut être coupé
        # entre deux morceaux de lecture.
        decodeur = codecs.getincrementaldecoder("utf-8")()

        with z.open(nom_fichier) as flux:
            tampon = ""

            while True:
                morceau = flux.read(1 << 22)
                if not morceau:
                    break
                octets += len(morceau)
                tampon += decodeur.decode(morceau)

                bornes = list(DEBUT_COMMUNE.finditer(tampon))
                if len(bornes) < 2:
                    continue

                # Entre deux débuts de commune, le bloc est forcément complet.
                for i in range(len(bornes) - 1):
                    enregistrer(bornes[i], tampon[bornes[i].start():bornes[i + 1].start()])
                    if len(lot) >= BATCH:
                        vider()

                tampon = tampon[bornes[-1].start():]

            # Le tampon contient la dernière commune, close par le "]" du tableau.
            tampon += decodeur.decode(b"", final=True)
            dernier = DEBUT_COMMUNE.match(tampon)
            if dernier:
                enregistrer(dernier, tampon)

    vider()
    print()
    if ignorees:
        print(f"  {ignorees} commune(s) sans date exploitable, ignorée(s)")
    cur.execute(f"SELECT pg_size_pretty(pg_total_relation_size('{TABLE}'))")
    taille = cur.fetchone()[0]
    cur.execute(f"SELECT min(date_debut), max(date_fin) FROM {TABLE}")
    couverture = cur.fetchone()

    cur.close()
    conn.close()

    minutes = (time.time() - debut) / 60
    print(f"Terminé en {minutes:.1f} min")
    print(f"  communes    : {total_communes:,}")
    print(f"  bascules    : {total_bascules:,}")
    print(f"  couverture  : {couverture[0]} à {couverture[1]}")
    print(f"  taille table: {taille}")


def ecrire(cur, lot):
    execute_values(
        cur,
        f"""INSERT INTO {TABLE} (code_commune, nom_commune, date_debut, date_fin, data)
            VALUES %s
            ON CONFLICT (code_commune) DO UPDATE SET
                nom_commune = EXCLUDED.nom_commune,
                date_debut  = EXCLUDED.date_debut,
                date_fin    = EXCLUDED.date_fin,
                data        = EXCLUDED.data,
                ingested_at = now()""",
        lot,
    )


if __name__ == "__main__":
    args = [a for a in sys.argv[1:]]

    if "--table-only" in args:
        creer_table()
        sys.exit(0)

    chemin = args[0] if args else telecharger()
    ingerer(chemin)
