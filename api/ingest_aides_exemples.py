"""
Construction de la table aides_exemples : les aides des agences de l'eau
enrichies du secteur (code NAF) du bénéficiaire, d'un thème et d'un flag
"exemplaire", pour proposer des retours d'expérience dans l'onglet Avancer.

Source : la table aides_agences_eau (une ligne par aide, 6 agences, 2019-2024).
Elle ne contient pas le code NAF, et seules AELB et AESN publient le SIRET.
Le secteur est donc résolu en trois temps, du plus sûr au moins sûr :

  1. SIRET présent et connu dans insee_entreprises        -> naf_source = 'insee'
  2. SIRET présent mais inconnu localement (collectivités,
     établissements fermés) : API Recherche d'entreprises  -> naf_source = 'sirene_siret'
  3. Pas de SIRET : API Recherche d'entreprises par nom et
     département, correspondance acceptée au-dessus d'un
     score de similarité                                    -> naf_source = 'sirene_nom'

Les appels à l'API sont mis en cache dans aides_resolution, y compris les
échecs, pour qu'une relance ne refasse pas les mêmes requêtes.

Usage :
    conda run -n noe-env python api/ingest_aides_exemples.py              # résolution puis construction
    conda run -n noe-env python api/ingest_aides_exemples.py --resoudre   # appels API seulement (reprise possible)
    conda run -n noe-env python api/ingest_aides_exemples.py --construire # reconstruit la table depuis le cache
"""

import re
import sys
import time
import unicodedata
from difflib import SequenceMatcher

import pandas as pd
import requests
from psycopg2.extras import execute_values

import DB_processor as DBP


SOURCE = "aides_agences_eau"
TABLE = "aides_exemples"
CACHE = "aides_resolution"

API_URL = "https://recherche-entreprises.api.gouv.fr/search"
API_PAUSE = 0.16       # la limite publique est de 7 appels par seconde
SCORE_MIN = 0.80       # similarité minimale pour accepter une correspondance par nom

# Types de bénéficiaires dont on cherche le secteur. Les collectivités, l'État
# et les associations ne servent pas d'exemple à une entreprise.
TYPES_RESOLUS = ("entreprise", "agriculture", "autres")

BATCH = 2000


# ─── Thèmes ──────────────────────────────────────────────────────────────────
# Les clés sont les catégories du plan d'action (questionnaires/actions_*.json),
# ce qui permet de proposer des exemples cohérents avec le profil de maturité.
THEMES = {
    "suivre_comprendre_maitriser": (
        r"[ée]tude|diagnostic|audit|compteur|sectorisation|suivi|mesure|cartograph|"
        r"inventaire|sch[ée]ma directeur|t[ée]l[ée]gestion|m[ée]trologie"
    ),
    "ameliorer_efficacite_hydrique": (
        r"[ée]conom\w* d.eau|r[ée]duction (de la |des |du )?(consommation|pr[ée]l[èe]vement)|"
        r"pertes? en eau|circuit ferm[ée]|sobri[ée]t[ée]|recyclage|optimisation de la consommation|"
        r"fuites?|performance hydrique|goutte.à.goutte|irrigation de pr[ée]cision"
    ),
    "valoriser_reut_eaux_non_conventionnelles": (
        r"r[ée]utilisation|\breut\b|eaux? non conventionnelle|r[ée]cup[ée]ration d.eau|"
        r"r[ée]cup[ée]ration des eaux|eaux? de pluie|stockage d.eau|"
        r"bassin de (r[ée]cup[ée]ration|stockage)|retenue"
    ),
    "changer_process_pratiques": (
        r"conversion ab|\bcab\b|agro.[ée]colog|d[ée]sherbage|bineuse|mat[ée]riel|[ée]quipement|"
        r"ecophyto|proc[ée]d[ée]|process|changement de pratique|rotation|couverts?|"
        r"modernisation|nouvelle ligne|nouvel atelier"
    ),
    "agir_rejets_qualite": (
        r"rejets?|effluents?|[ée]puration|\bstep\b|pollution|pr[ée]traitement|substances?|"
        r"toxique|micropolluant|phyto|pesticide|nitrate|azot|fertilis|boues|assainissement|"
        r"eaux us[ée]es|eaux r[ée]siduaires|qualit[ée] de l.eau"
    ),
    "agir_grand_cycle": (
        r"pluvial|infiltration|d[ée]simperm[ée]abilis|continuit[ée] [ée]cologique|zones? humides?|"
        r"haies?|milieux? (aquatique|naturel|alluvia)|biodiversit[ée]|restauration|renaturation|"
        r"\bpse\b|services environnementaux|cours d.eau|rivi[èe]re|ripisylve|mares?|couverts? v[ée]g[ée]ta"
    ),
    "sensibiliser_former": (
        r"formation|sensibilisation|communication|animation|accompagnement|conseil"
    ),
}
THEMES_RE = {k: re.compile(v, re.IGNORECASE) for k, v in THEMES.items()}

# Dossiers qui ne racontent rien : primes automatiques, annuités, régularisations.
NON_EXEMPLAIRE = re.compile(
    r"annuit[ée]|performance [ée]puratoire|\bprime\b|\bsolde\b|avenant|compl[ée]ment de|"
    r"r[ée]gularisation|indemnit[ée]|redevance",
    re.IGNORECASE,
)
MONTANT_MIN = 5000
OBJET_LEN_MIN = 25

# Formes juridiques et mots vides retirés avant de comparer deux noms.
FORMES = {
    "SAS", "SASU", "SARL", "EURL", "SA", "SNC", "SCI", "SCEA", "EARL", "GAEC", "CUMA",
    "SCA", "SICA", "GIE", "STE", "SOC", "SOCIETE", "ETS", "ETABLISSEMENTS", "CIE", "COMPAGNIE",
    "SCOP", "SEM", "SEMOP", "SCOOP", "COOP", "COOPERATIVE", "SELARL", "SCM", "SCP",
}

# Forme juridique lue dans le nom source -> préfixes de nature juridique INSEE
# admis pour le résultat de l'API. Sans ce garde-fou, "EARL DE LA GOUPILLERE"
# s'apparie avec la SCI "LA GOUPILLERE" une fois les formes retirées.
FORMES_NJ = {
    "EARL": ("6598",),
    "GAEC": ("6533",),
    "SCEA": ("6597", "6599"),
    "CUMA": ("6316", "6317"),
    "SCI":  ("6540",),
    "SNC":  ("5202",),
    "GIE":  ("6220",),
    # Sociétés commerciales : une SARL devenue SAS reste la même entreprise.
    "SAS":  ("54", "55", "56", "57"),
    "SASU": ("54", "55", "56", "57"),
    "SARL": ("54", "55", "56", "57"),
    "EURL": ("54", "55", "56", "57"),
    "SA":   ("54", "55", "56", "57"),
}
MOTS_VIDES = {"DE", "DU", "DES", "LA", "LE", "LES", "L", "D", "ET", "A", "AU", "AUX", "EN"}
CIVILITES = re.compile(r"^(M\.?|MR|MME|MLLE|MONSIEUR|MADAME|MADEMOISELLE|MELLE)\b")


# ─── Tables ──────────────────────────────────────────────────────────────────

DDL = f"""
CREATE TABLE IF NOT EXISTS {CACHE} (
    cle              text PRIMARY KEY,
    siret            text,
    siren            text,
    naf              text,
    nature_juridique text,
    code_commune     text,
    nom_officiel     text,
    score            real,
    source           text NOT NULL,
    resolved_at      timestamptz NOT NULL DEFAULT now()
);
COMMENT ON TABLE {CACHE} IS
    'Cache des appels à l''API Recherche d''entreprises. cle = siret:<14 chiffres> ou nom:<dept>:<nom normalisé>. '
    'source = sirene (trouvé) ou aucun (échec conservé pour ne pas rappeler l''API).';

CREATE TABLE IF NOT EXISTS {TABLE} (
    id                serial PRIMARY KEY,
    agence            text NOT NULL,
    annee             integer,
    dept_num          text,
    dept_nom          text,
    numero_dossier    text,
    beneficiaire      text,
    type_beneficiaire text,
    objet_operation   text,
    type_financement  text,
    montant_aide      numeric,
    montant_travaux   numeric,
    taux_aide         numeric,
    siret             text,
    siren             text,
    naf               text,
    naf_division      text,
    nature_juridique  text,
    code_commune      text,
    naf_source        text,
    personne_physique boolean NOT NULL DEFAULT false,
    themes            text[]  NOT NULL DEFAULT '{{}}',
    exemplaire        boolean NOT NULL DEFAULT false,
    ingested_at       timestamptz NOT NULL DEFAULT now()
);
COMMENT ON TABLE {TABLE} IS
    'Copie de aides_agences_eau enrichie du NAF du bénéficiaire (naf_source = insee, sirene_siret, sirene_nom ou NULL), '
    'de thèmes alignés sur les catégories du plan d''action et d''un flag exemplaire (dossier montrable comme retour d''expérience). '
    'personne_physique impose l''anonymisation à l''affichage.';

CREATE INDEX IF NOT EXISTS idx_{TABLE}_naf_agence
    ON {TABLE} (naf, agence) WHERE exemplaire;
CREATE INDEX IF NOT EXISTS idx_{TABLE}_division_agence
    ON {TABLE} (naf_division, agence) WHERE exemplaire;
CREATE INDEX IF NOT EXISTS idx_{TABLE}_themes
    ON {TABLE} USING gin (themes) WHERE exemplaire;
CREATE INDEX IF NOT EXISTS idx_{TABLE}_agence_dept
    ON {TABLE} (agence, dept_num) WHERE exemplaire;
"""


def creer_tables():
    conn = DBP.get_conn()
    cur = conn.cursor()
    cur.execute(DDL)
    conn.commit()
    cur.close()
    conn.close()
    print(f"Tables {CACHE} et {TABLE} prêtes.")


# ─── Normalisation des noms ──────────────────────────────────────────────────

def normaliser(nom):
    """Majuscules sans accents ni ponctuation, formes juridiques et mots vides retirés."""
    if not nom:
        return ""
    s = unicodedata.normalize("NFKD", str(nom)).encode("ascii", "ignore").decode()
    s = s.upper()
    s = re.sub(r"\b([A-Z])\.(?=[A-Z]\.)", r"\1", s)   # E.A.R.L. -> EARL
    s = re.sub(r"[^A-Z0-9]+", " ", s)
    # "ST DENIS" -> "SAINT DENIS". "STE" est laissé tel quel : c'est aussi "société".
    s = re.sub(r"\bST\b(?= [A-Z])", "SAINT", s)
    tokens = [t for t in s.split() if t not in FORMES and t not in MOTS_VIDES]
    return " ".join(tokens)


def similarite(a, b):
    """Max entre ratio de caractères et Jaccard des mots : tolère l'ordre (NOM PRENOM / PRENOM NOM)."""
    na, nb = normaliser(a), normaliser(b)
    if not na or not nb:
        return 0.0
    ratio = SequenceMatcher(None, na, nb).ratio()
    ta, tb = set(na.split()), set(nb.split())
    jaccard = len(ta & tb) / len(ta | tb)
    return max(ratio, jaccard)


def formes_de(nom):
    s = unicodedata.normalize("NFKD", str(nom or "")).encode("ascii", "ignore").decode().upper()
    s = re.sub(r"\b([A-Z])\.(?=[A-Z]\.)", r"\1", s)
    return {t for t in re.sub(r"[^A-Z0-9]+", " ", s).split() if t in FORMES_NJ}


def forme_compatible(nom, nature_juridique):
    """Faux si le nom annonce une forme juridique incompatible avec celle de l'API."""
    formes = formes_de(nom)
    if not formes or not nature_juridique:
        return True
    nj = str(nature_juridique)
    return any(nj.startswith(p) for f in formes for p in FORMES_NJ[f])


def candidats_noms(resultat):
    """Noms sous lesquels comparer un résultat : raison sociale, sigle, alias entre parenthèses."""
    noms = [resultat.get("nom_raison_sociale"), resultat.get("sigle")]
    complet = resultat.get("nom_complet") or ""
    noms.append(re.sub(r"\(.*?\)", " ", complet))
    for alias in re.findall(r"\(([^)]*)\)", complet):
        noms.extend(alias.split(","))
    return [n.strip() for n in noms if n and n.strip()]


def cle_nom(nom, dept):
    return f"nom:{dept}:{normaliser(nom)}"


# ─── API Recherche d'entreprises ─────────────────────────────────────────────

_session = requests.Session()
_session.headers["User-Agent"] = "noe-aides-exemples (hydros-consulting)"


def appeler_api(params, essais=4):
    for tentative in range(essais):
        try:
            r = _session.get(API_URL, params=params, timeout=20)
        except requests.RequestException:
            time.sleep(2 * (tentative + 1))
            continue
        if r.status_code == 200:
            time.sleep(API_PAUSE)
            return r.json()
        if r.status_code == 429 or r.status_code >= 500:
            time.sleep(3 * (tentative + 1))
            continue
        # 400 : requête invalide (nom trop court, caractères refusés), inutile d'insister.
        return {"results": []}
    return None


def etablissement_dans_dept(resultat, dept):
    """L'établissement du département demandé, sinon le siège."""
    for e in resultat.get("matching_etablissements") or []:
        cp = e.get("code_postal") or ""
        commune = e.get("commune") or ""
        if (e.get("departement") or commune[:2] or cp[:2]) == dept:
            return e
    return resultat.get("siege") or {}


def fiche(resultat, etab, score):
    return {
        "siret":            etab.get("siret") or (resultat.get("siege") or {}).get("siret"),
        "siren":            resultat.get("siren"),
        "naf":              etab.get("activite_principale") or resultat.get("activite_principale"),
        "nature_juridique": resultat.get("nature_juridique"),
        "code_commune":     etab.get("commune"),
        "nom_officiel":     resultat.get("nom_complet"),
        "score":            score,
        "source":           "sirene",
    }


def resoudre_siret(siret):
    data = appeler_api({"q": siret, "per_page": 1})
    if data is None:
        return None  # API injoignable, on réessaiera à la prochaine exécution
    for r in data.get("results") or []:
        for e in r.get("matching_etablissements") or []:
            if e.get("siret") == siret:
                return fiche(r, e, 1.0)
        if (r.get("siege") or {}).get("siret") == siret:
            return fiche(r, r["siege"], 1.0)
    return {"source": "aucun"}


def resoudre_nom(nom, dept):
    q = re.sub(r"\s+", " ", normaliser(nom)).strip()
    if len(q) < 3:
        return {"source": "aucun"}
    data = appeler_api({"q": q, "departement": dept, "per_page": 5})
    if data is None:
        return None

    meilleur, meilleur_score = None, 0.0
    for r in data.get("results") or []:
        if not forme_compatible(nom, r.get("nature_juridique")):
            continue
        candidats = candidats_noms(r)
        score = max((similarite(nom, c) for c in candidats), default=0.0)
        if score > meilleur_score:
            meilleur, meilleur_score = r, score

    if meilleur is None or meilleur_score < SCORE_MIN:
        return {"source": "aucun", "score": meilleur_score}
    return fiche(meilleur, etablissement_dans_dept(meilleur, dept), meilleur_score)


# ─── Étape 1 : résolution ────────────────────────────────────────────────────

def a_resoudre(conn):
    """Clés à résoudre, SIRET d'abord (exacts), puis noms, sans celles déjà en cache."""
    sirets = pd.read_sql(f"""
        SELECT DISTINCT a.siret
        FROM {SOURCE} a
        LEFT JOIN insee_entreprises e ON e.siret = a.siret
        LEFT JOIN {CACHE} c ON c.cle = 'siret:' || a.siret
        WHERE a.siret IS NOT NULL AND length(a.siret) = 14
          AND e.siret IS NULL AND c.cle IS NULL
    """, conn)["siret"].tolist()

    noms = pd.read_sql(f"""
        SELECT DISTINCT a.beneficiaire, a.dept_num
        FROM {SOURCE} a
        WHERE a.siret IS NULL
          AND a.type_beneficiaire = ANY(%s)
          AND a.beneficiaire IS NOT NULL AND a.dept_num IS NOT NULL
    """, conn, params=(list(TYPES_RESOLUS),))
    deja = set(pd.read_sql(f"SELECT cle FROM {CACHE} WHERE cle LIKE 'nom:%%'", conn)["cle"])
    paires = {}
    for nom, dept in noms.itertuples(index=False):
        cle = cle_nom(nom, dept)
        if cle not in deja and cle not in paires:
            paires[cle] = (nom, dept)

    return sirets, paires


def ecrire_cache(cur, lignes):
    execute_values(
        cur,
        f"""INSERT INTO {CACHE} (cle, siret, siren, naf, nature_juridique, code_commune, nom_officiel, score, source)
            VALUES %s ON CONFLICT (cle) DO NOTHING""",
        lignes,
    )


def resoudre():
    creer_tables()
    conn = DBP.get_conn()
    cur = conn.cursor()

    sirets, paires = a_resoudre(conn)
    total = len(sirets) + len(paires)
    print(f"À résoudre : {len(sirets):,} SIRET et {len(paires):,} noms "
          f"(environ {total * API_PAUSE / 60:.0f} min)")

    debut = time.time()
    fait = trouves = 0
    lot = []

    def vider():
        nonlocal lot
        if lot:
            ecrire_cache(cur, lot)
            conn.commit()
            lot = []

    def enregistrer(cle, res):
        nonlocal fait, trouves
        fait += 1
        if res is None:
            return
        if res.get("source") == "sirene":
            trouves += 1
        lot.append((cle, res.get("siret"), res.get("siren"), res.get("naf"),
                    res.get("nature_juridique"), res.get("code_commune"),
                    res.get("nom_officiel"), res.get("score"), res["source"]))
        if len(lot) >= 200:
            vider()
        if fait % 50 == 0:
            minutes = (time.time() - debut) / 60
            print(f"\r  {fait:>6,}/{total:,}   trouvés {trouves:,}   {minutes:5.1f} min", end="", flush=True)

    for siret in sirets:
        enregistrer(f"siret:{siret}", resoudre_siret(siret))
    for cle, (nom, dept) in paires.items():
        enregistrer(cle, resoudre_nom(nom, dept))

    vider()
    print()
    cur.close()
    conn.close()
    print(f"Résolution terminée : {trouves:,} correspondances sur {fait:,} requêtes.")


# ─── Étape 2 : construction ──────────────────────────────────────────────────

def themes_de(objet):
    if not objet:
        return []
    return [k for k, rx in THEMES_RE.items() if rx.search(objet)]


def est_personne_physique(row):
    nj = row.get("nature_juridique")
    if nj:
        return str(nj).startswith("1")
    if row.get("naf_source"):
        return False
    nom = str(row.get("beneficiaire") or "").strip().upper()
    if CIVILITES.match(nom):
        return True
    # Sans résolution, un nom court sans forme juridique dans les catégories
    # agricoles est très probablement un exploitant en nom propre. On préfère
    # anonymiser à tort qu'exposer une personne.
    if row.get("type_beneficiaire") in ("agriculture", "autres"):
        tokens = re.sub(r"[^A-Z0-9 ]", " ", unicodedata.normalize("NFKD", nom).encode("ascii", "ignore").decode()).split()
        if 0 < len(tokens) <= 3 and not (set(tokens) & FORMES):
            return True
    return False


def est_exemplaire(row):
    objet = row.get("objet_operation") or ""
    montant = row.get("montant_aide")
    return bool(
        montant is not None and not pd.isna(montant) and float(montant) >= MONTANT_MIN
        and len(objet) >= OBJET_LEN_MIN
        and not NON_EXEMPLAIRE.search(objet)
        and row["themes"]
    )


def construire():
    creer_tables()
    conn = DBP.get_conn()

    print("Lecture de la source et des résolutions…")
    df = pd.read_sql(f"""
        SELECT a.agence, a.annee, a.dept_num, a.dept_nom, a.numero_dossier, a.beneficiaire,
               a.type_beneficiaire, a.objet_operation, a.type_financement,
               a.montant_aide, a.montant_travaux,
               a.siret AS siret_src, a.siren AS siren_src,
               e.activiteprincipaleetablissement AS naf_insee,
               e.categoriejuridiqueunitelegale   AS nj_insee,
               e.codecommuneetablissement        AS commune_insee,
               cs.siret AS siret_cs, cs.siren AS siren_cs, cs.naf AS naf_cs,
               cs.nature_juridique AS nj_cs, cs.code_commune AS commune_cs, cs.source AS source_cs
        FROM {SOURCE} a
        LEFT JOIN insee_entreprises e ON e.siret = a.siret
        LEFT JOIN {CACHE} cs ON cs.cle = 'siret:' || a.siret
    """, conn)
    cache_noms = pd.read_sql(
        f"SELECT cle, siret, siren, naf, nature_juridique, code_commune, source FROM {CACHE} WHERE cle LIKE 'nom:%%'",
        conn,
    ).set_index("cle")
    # pandas remplace les NULL texte par NaN, on revient à None pour les tests de vérité.
    df = df.astype(object).where(pd.notna(df), None)
    cache_noms = cache_noms.astype(object).where(pd.notna(cache_noms), None)
    print(f"  {len(df):,} aides, {len(cache_noms):,} noms en cache")

    lignes = []
    compte = {"insee": 0, "sirene_siret": 0, "sirene_nom": 0, None: 0}
    for row in df.to_dict(orient="records"):
        siret = siren = naf = nj = commune = source = None

        if row["naf_insee"]:
            siret, siren, naf, nj, commune, source = (
                row["siret_src"], row["siren_src"], row["naf_insee"], row["nj_insee"], row["commune_insee"], "insee")
        elif row["source_cs"] == "sirene":
            siret, siren, naf, nj, commune, source = (
                row["siret_cs"] or row["siret_src"], row["siren_cs"] or row["siren_src"],
                row["naf_cs"], row["nj_cs"], row["commune_cs"], "sirene_siret")
        elif not row["siret_src"] and row["type_beneficiaire"] in TYPES_RESOLUS:
            cle = cle_nom(row["beneficiaire"], row["dept_num"])
            if cle in cache_noms.index:
                c = cache_noms.loc[cle]
                if c["source"] == "sirene":
                    siret, siren, naf, nj, commune, source = (
                        c["siret"], c["siren"], c["naf"], c["nature_juridique"], c["code_commune"], "sirene_nom")
        elif row["siret_src"]:
            siret, siren = row["siret_src"], row["siren_src"]

        compte[source] += 1
        row.update(naf_source=source, nature_juridique=nj)
        themes = themes_de(row["objet_operation"])
        row["themes"] = themes

        montant_aide = row["montant_aide"]
        montant_travaux = row["montant_travaux"]
        taux = None
        if montant_travaux and not pd.isna(montant_travaux) and float(montant_travaux) > 0 \
                and montant_aide is not None and not pd.isna(montant_aide):
            taux = round(float(montant_aide) / float(montant_travaux), 3)

        lignes.append((
            row["agence"], row["annee"], row["dept_num"], row["dept_nom"], row["numero_dossier"],
            row["beneficiaire"], row["type_beneficiaire"], row["objet_operation"], row["type_financement"],
            None if pd.isna(montant_aide) else float(montant_aide),
            None if montant_travaux is None or pd.isna(montant_travaux) else float(montant_travaux),
            taux,
            siret, siren, naf, naf[:2] if naf else None, nj, commune, source,
            est_personne_physique(row), themes, est_exemplaire(row),
        ))

    print("Écriture…")
    cur = conn.cursor()
    cur.execute(f"TRUNCATE {TABLE} RESTART IDENTITY")
    for i in range(0, len(lignes), BATCH):
        execute_values(
            cur,
            f"""INSERT INTO {TABLE} (agence, annee, dept_num, dept_nom, numero_dossier, beneficiaire,
                    type_beneficiaire, objet_operation, type_financement, montant_aide, montant_travaux,
                    taux_aide, siret, siren, naf, naf_division, nature_juridique, code_commune, naf_source,
                    personne_physique, themes, exemplaire)
                VALUES %s""",
            lignes[i:i + BATCH],
        )
    conn.commit()

    cur.execute(f"SELECT count(*) FILTER (WHERE exemplaire), count(*) FILTER (WHERE exemplaire AND naf IS NOT NULL) FROM {TABLE}")
    n_ex, n_ex_naf = cur.fetchone()
    cur.close()
    conn.close()

    print(f"Table {TABLE} reconstruite : {len(lignes):,} aides")
    print(f"  NAF résolu : insee {compte['insee']:,}, sirene_siret {compte['sirene_siret']:,}, "
          f"sirene_nom {compte['sirene_nom']:,}, sans {compte[None]:,}")
    print(f"  exemplaires : {n_ex:,}, dont {n_ex_naf:,} avec secteur")


if __name__ == "__main__":
    args = sys.argv[1:]
    if "--construire" in args:
        construire()
    elif "--resoudre" in args:
        resoudre()
    else:
        resoudre()
        construire()
