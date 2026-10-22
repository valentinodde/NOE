"""
Ingestion du référentiel questionnaire / plan d'action dans PostgreSQL.

Alimente les tables suivantes à partir des seeds JSON de api/seeds/ :

    categories            les 7 catégories canoniques du plan d'action
    questionnaires        un questionnaire par secteur, résolu par code NAF
    questions             les questions d'un questionnaire
    actions               la bibliothèque de mesures
    prestataires          les apporteurs de solutions
    aides                 le catalogue des dispositifs d'aide
    prestataires_actions  liens explicites prestataire -> mesure
    aides_actions         liens explicites aide -> mesure

Secteurs et territoire :
    - `secteurs` (mesures, prestataires, aides) : liste de sector_id des
      questionnaires. Liste vide = transversal, visible pour tous les secteurs.
    - `departements` (prestataires, aides) : codes INSEE de département
      ("01" à "95", "2A", "2B", "971" à "976"). Liste vide = national.
    - `agences` (aides) : codes des agences de l'eau (AEAP, AERM, AESN, AELB,
      AEAG, AERMC). Liste vide = toutes.
    - `mesures` (prestataires, aides) : mesures auxquelles la fiche est
      explicitement rattachée, déversées dans les tables de liaison. Pour un
      prestataire, chaque entrée porte ses `roles` sur la mesure
      ({"id": "ACT_...", "roles": ["conseil_etude"]}) ; une simple chaîne vaut
      un lien sans rôle.

Cycle de vie (mesures, prestataires, aides) :
    - `statut` : brouillon (défaut) ou publie. Seul `publie` est servi au front.
    - `sources` : [{champ, url, date?, extrait?}], d'où vient chaque information.
    - `date_maj` : AAAA-MM-JJ.

Vocabulaires fermés et contrôles : voir referentiel_verif.py.

Staging : `--staging <secteur>` lit api/seeds/staging/<secteur>/ par-dessus
api/seeds/ (un fichier de staging remplace le fichier publié du même nom) et
ne fait que vérifier, jamais écrire. C'est le mode de travail des agents de
construction, la promotion vers api/seeds/ étant une décision humaine.

Le script est idempotent : chaque table est remplie en UPSERT sur la clé
primaire, et les lignes absentes des seeds sont supprimées. On peut donc le
relancer autant de fois que nécessaire après une correction de contenu.

Les seeds restent la source de vérité tant qu'il n'y a pas de back-office :
on corrige le JSON, on relance le script.

Usage :
    conda run -n noe-env python api/ingest_referentiel.py              # crée les tables et ingère
    conda run -n noe-env python api/ingest_referentiel.py --table-only # crée les tables et sort
    conda run -n noe-env python api/ingest_referentiel.py --verifier   # contrôles seuls, sans écriture
    conda run -n noe-env python api/ingest_referentiel.py --verifier --staging industrie_agro
"""

import glob
import json
import os
import sys

from psycopg2.extras import Json, execute_values

import DB_processor as DBP
from referentiel_verif import liens_mesures, statut_de, verifier


SEEDS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "seeds")

# Les CREATE TABLE IF NOT EXISTS ne modifient jamais une table existante :
# les colonnes ajoutées après coup passent par des ALTER TABLE idempotents.
DDL = """
CREATE TABLE IF NOT EXISTS categories (
    id          text PRIMARY KEY,
    label       text NOT NULL,
    description text,
    icone       text,
    couleur     text,
    ordre       int  NOT NULL
);

CREATE TABLE IF NOT EXISTS questionnaires (
    id                 text   PRIMARY KEY,
    sector_id          text   NOT NULL,
    sector_label       text   NOT NULL,
    naf_codes          text[] NOT NULL DEFAULT '{}',
    themes             jsonb  NOT NULL DEFAULT '[]',
    topics_labels      jsonb  NOT NULL DEFAULT '{}',
    action_plan_config jsonb  NOT NULL DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_questionnaires_naf
    ON questionnaires USING GIN (naf_codes);

CREATE TABLE IF NOT EXISTS questions (
    id               text PRIMARY KEY,
    questionnaire_id text NOT NULL REFERENCES questionnaires(id) ON DELETE CASCADE,
    ordre            int  NOT NULL,
    theme            text,
    type             text NOT NULL
                     CHECK (type IN ('single_choice', 'multi_choice', 'numeric')),
    classe           text,
    texte            text NOT NULL,
    condition        jsonb,
    options          jsonb NOT NULL DEFAULT '[]',
    input            jsonb,
    scoring          jsonb,
    UNIQUE (questionnaire_id, ordre)
);

CREATE INDEX IF NOT EXISTS idx_questions_questionnaire
    ON questions (questionnaire_id, ordre);

CREATE TABLE IF NOT EXISTS actions (
    id                    text PRIMARY KEY,
    categorie             text NOT NULL REFERENCES categories(id),
    titre                 text NOT NULL,
    titre_court           text,
    description           text NOT NULL,
    horizon               text NOT NULL
                          CHECK (horizon IN ('immediat', 'court_terme', 'moyen_terme')),
    impact_eau            int  NOT NULL CHECK (impact_eau BETWEEN 1 AND 3),
    facilite              int  NOT NULL CHECK (facilite   BETWEEN 1 AND 3),
    effort                jsonb NOT NULL DEFAULT '{}',
    infos_complementaires jsonb NOT NULL DEFAULT '[]',
    image_url             text,
    secteurs              text[] NOT NULL DEFAULT '{}',
    statut                text  NOT NULL DEFAULT 'brouillon'
                          CHECK (statut IN ('brouillon', 'publie')),
    sources               jsonb NOT NULL DEFAULT '[]',
    date_maj              date
);

ALTER TABLE actions ADD COLUMN IF NOT EXISTS secteurs    text[] NOT NULL DEFAULT '{}';
ALTER TABLE actions ADD COLUMN IF NOT EXISTS titre_court text;
ALTER TABLE actions ADD COLUMN IF NOT EXISTS infos_complementaires jsonb NOT NULL DEFAULT '[]';
ALTER TABLE actions ADD COLUMN IF NOT EXISTS statut   text  NOT NULL DEFAULT 'brouillon';
ALTER TABLE actions ADD COLUMN IF NOT EXISTS sources  jsonb NOT NULL DEFAULT '[]';
ALTER TABLE actions ADD COLUMN IF NOT EXISTS date_maj date;
ALTER TABLE actions DROP COLUMN IF EXISTS tags;
ALTER TABLE actions DROP COLUMN IF EXISTS ressources;

CREATE INDEX IF NOT EXISTS idx_actions_categorie ON actions (categorie);
CREATE INDEX IF NOT EXISTS idx_actions_secteurs  ON actions USING GIN (secteurs);
CREATE INDEX IF NOT EXISTS idx_actions_statut    ON actions (statut);

CREATE TABLE IF NOT EXISTS prestataires (
    id           text PRIMARY KEY,
    nom          text NOT NULL,
    type         text NOT NULL,
    logo_url     text,
    siret        text,
    description  text,
    expertises   text[] NOT NULL DEFAULT '{}',
    categories   text[] NOT NULL DEFAULT '{}',
    secteurs     text[] NOT NULL DEFAULT '{}',
    departements text[] NOT NULL DEFAULT '{}',
    contacts     jsonb  NOT NULL DEFAULT '[]',
    statut       text   NOT NULL DEFAULT 'brouillon'
                 CHECK (statut IN ('brouillon', 'publie')),
    sources      jsonb  NOT NULL DEFAULT '[]',
    date_maj     date
);

ALTER TABLE prestataires ADD COLUMN IF NOT EXISTS secteurs     text[] NOT NULL DEFAULT '{}';
ALTER TABLE prestataires ADD COLUMN IF NOT EXISTS departements text[] NOT NULL DEFAULT '{}';
ALTER TABLE prestataires ADD COLUMN IF NOT EXISTS logo_url     text;
ALTER TABLE prestataires ADD COLUMN IF NOT EXISTS siret        text;
ALTER TABLE prestataires ADD COLUMN IF NOT EXISTS contacts     jsonb NOT NULL DEFAULT '[]';
ALTER TABLE prestataires ADD COLUMN IF NOT EXISTS statut       text  NOT NULL DEFAULT 'brouillon';
ALTER TABLE prestataires ADD COLUMN IF NOT EXISTS sources      jsonb NOT NULL DEFAULT '[]';
ALTER TABLE prestataires ADD COLUMN IF NOT EXISTS date_maj     date;
ALTER TABLE prestataires DROP COLUMN IF EXISTS territoire;
ALTER TABLE prestataires DROP COLUMN IF EXISTS icone;
ALTER TABLE prestataires DROP COLUMN IF EXISTS url;
ALTER TABLE prestataires DROP COLUMN IF EXISTS url_label;

CREATE INDEX IF NOT EXISTS idx_prestataires_categories
    ON prestataires USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_prestataires_secteurs
    ON prestataires USING GIN (secteurs);
CREATE INDEX IF NOT EXISTS idx_prestataires_departements
    ON prestataires USING GIN (departements);

CREATE TABLE IF NOT EXISTS aides (
    id                    text PRIMARY KEY,
    nom                   text NOT NULL,
    financeur             text NOT NULL,
    logo_url              text,
    type                  text NOT NULL
                          CHECK (type IN ('subvention', 'pret', 'credit_impot', 'accompagnement')),
    taux                  text,
    plafond               text,
    description           text,
    eligibilite           text,
    infos_complementaires jsonb  NOT NULL DEFAULT '[]',
    categories            text[] NOT NULL DEFAULT '{}',
    secteurs              text[] NOT NULL DEFAULT '{}',
    departements          text[] NOT NULL DEFAULT '{}',
    agences               text[] NOT NULL DEFAULT '{}',
    statut                text   NOT NULL DEFAULT 'brouillon'
                          CHECK (statut IN ('brouillon', 'publie')),
    sources               jsonb  NOT NULL DEFAULT '[]',
    date_maj              date
);

ALTER TABLE aides ADD COLUMN IF NOT EXISTS logo_url text;
ALTER TABLE aides ADD COLUMN IF NOT EXISTS agences  text[] NOT NULL DEFAULT '{}';
ALTER TABLE aides ADD COLUMN IF NOT EXISTS infos_complementaires jsonb NOT NULL DEFAULT '[]';
ALTER TABLE aides ADD COLUMN IF NOT EXISTS statut   text  NOT NULL DEFAULT 'brouillon';
ALTER TABLE aides ADD COLUMN IF NOT EXISTS sources  jsonb NOT NULL DEFAULT '[]';
ALTER TABLE aides ADD COLUMN IF NOT EXISTS date_maj date;
ALTER TABLE aides DROP COLUMN IF EXISTS financeur_icone;
ALTER TABLE aides DROP COLUMN IF EXISTS url;
ALTER TABLE aides DROP COLUMN IF EXISTS url_label;

CREATE INDEX IF NOT EXISTS idx_aides_categories   ON aides USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_aides_secteurs     ON aides USING GIN (secteurs);
CREATE INDEX IF NOT EXISTS idx_aides_departements ON aides USING GIN (departements);
CREATE INDEX IF NOT EXISTS idx_aides_agences      ON aides USING GIN (agences);

CREATE TABLE IF NOT EXISTS prestataires_actions (
    prestataire_id text NOT NULL REFERENCES prestataires(id) ON DELETE CASCADE,
    action_id      text NOT NULL REFERENCES actions(id)      ON DELETE CASCADE,
    roles          text[] NOT NULL DEFAULT '{}',
    PRIMARY KEY (prestataire_id, action_id)
);

ALTER TABLE prestataires_actions ADD COLUMN IF NOT EXISTS roles text[] NOT NULL DEFAULT '{}';

CREATE INDEX IF NOT EXISTS idx_prestataires_actions_action
    ON prestataires_actions (action_id);

CREATE TABLE IF NOT EXISTS aides_actions (
    aide_id   text NOT NULL REFERENCES aides(id)   ON DELETE CASCADE,
    action_id text NOT NULL REFERENCES actions(id) ON DELETE CASCADE,
    PRIMARY KEY (aide_id, action_id)
);

CREATE INDEX IF NOT EXISTS idx_aides_actions_action
    ON aides_actions (action_id);
"""


# ─── Lecture des seeds ────────────────────────────────────────────────────

def dossier_staging(secteur):
    return os.path.join(SEEDS, "staging", secteur)


def lire(nom):
    with open(os.path.join(SEEDS, nom), encoding="utf-8") as f:
        return json.load(f)


def lire_motif(motif, staging=None):
    """
    Tous les seeds correspondant à un motif, triés par nom de fichier. Avec un
    dossier de staging, un fichier qui y porte le même nom remplace le fichier
    publié, et les fichiers propres au staging s'ajoutent.
    """
    fichiers = {os.path.basename(f): f for f in glob.glob(os.path.join(SEEDS, motif))}
    if staging:
        fichiers.update({os.path.basename(f): f for f in glob.glob(os.path.join(staging, motif))})
    return [(nom, json.load(open(fichiers[nom], encoding="utf-8"))) for nom in sorted(fichiers)]


def charger_seeds(staging=None):
    categories    = lire("categories.json")
    questionnaires = [q for _, q in lire_motif("questionnaire_*.json", staging)]

    actions = []
    for _, contenu in lire_motif("actions_*.json", staging):
        actions.extend(contenu)

    prestataires = []
    for _, contenu in lire_motif("prestataires_*.json", staging):
        prestataires.extend(contenu)

    aides = []
    for _, contenu in lire_motif("aides_*.json", staging):
        aides.extend(contenu)

    return categories, questionnaires, actions, prestataires, aides


# ─── Écriture ─────────────────────────────────────────────────────────────

def remplacer(cur, table, colonnes, lignes, cle="id"):
    """
    UPSERT des lignes puis suppression de tout ce qui n'est plus dans les seeds.
    Une liste vide vide la table : les seeds restent la source de vérité.
    """
    if lignes:
        cols = ", ".join(colonnes)
        maj = ", ".join(f"{c} = EXCLUDED.{c}" for c in colonnes if c != cle)
        execute_values(
            cur,
            f"INSERT INTO {table} ({cols}) VALUES %s "
            f"ON CONFLICT ({cle}) DO UPDATE SET {maj}",
            lignes,
        )

    cur.execute(
        f"DELETE FROM {table} WHERE {cle} <> ALL(%s)",
        ([l[colonnes.index(cle)] for l in lignes],),
    )
    return len(lignes)


def remplacer_liens(cur, table, colonnes, lignes):
    """
    Table de liaison entièrement dérivée des seeds : on la vide et on la
    réécrit dans la même transaction.
    """
    cur.execute(f"DELETE FROM {table}")
    if lignes:
        execute_values(cur, f"INSERT INTO {table} ({', '.join(colonnes)}) VALUES %s", lignes)
    return len(lignes)


def ingerer(categories, questionnaires, actions, prestataires, aides):
    conn = DBP.get_conn()
    cur = conn.cursor()

    try:
        n_cat = remplacer(
            cur, "categories",
            ["id", "label", "description", "icone", "couleur", "ordre"],
            [(c["id"], c["label"], c.get("description"), c.get("icone"),
              c.get("couleur"), c["ordre"]) for c in categories],
        )

        n_qst = remplacer(
            cur, "questionnaires",
            ["id", "sector_id", "sector_label", "naf_codes", "themes",
             "topics_labels", "action_plan_config"],
            [(q["sector_id"], q["sector_id"], q["sector_label"], q.get("naf_codes", []),
              Json(q.get("themes", [])), Json(q.get("topics_labels", {})),
              Json(q.get("action_plan_config", {}))) for q in questionnaires],
        )

        lignes_questions = [
            (question["id"], q["sector_id"], question["order"], question.get("theme"),
             question["type"], question.get("class"), question["text"],
             Json(question["condition"]) if question.get("condition") else None,
             Json(question.get("options", [])),
             Json(question["input"])   if question.get("input")   else None,
             Json(question["scoring"]) if question.get("scoring") else None)
            for q in questionnaires for question in q["questions"]
        ]
        n_que = remplacer(
            cur, "questions",
            ["id", "questionnaire_id", "ordre", "theme", "type", "classe",
             "texte", "condition", "options", "input", "scoring"],
            lignes_questions,
        )

        cycle = lambda f: (statut_de(f), Json(f.get("sources", [])), f.get("date_maj"))

        n_act = remplacer(
            cur, "actions",
            ["id", "categorie", "titre", "titre_court", "description", "horizon",
             "impact_eau", "facilite", "effort", "infos_complementaires", "image_url",
             "secteurs", "statut", "sources", "date_maj"],
            [(a["id"], a["categorie"], a["titre"], a.get("titre_court"), a["description"],
              a["horizon"], a["impact_eau"], a["facilite"], Json(a.get("effort", {})),
              Json(a.get("infos_complementaires", [])), a.get("image"), a.get("secteurs", []),
              *cycle(a))
             for a in actions],
        )

        n_pre = remplacer(
            cur, "prestataires",
            ["id", "nom", "type", "logo_url", "siret", "description", "expertises",
             "categories", "secteurs", "departements", "contacts",
             "statut", "sources", "date_maj"],
            [(p["id"], p["nom"], p["type"], p.get("logo_url"), p.get("siret"),
              p.get("description"), p.get("expertises", []), p.get("categories", []),
              p.get("secteurs", []), p.get("departements", []), Json(p.get("contacts", [])),
              *cycle(p))
             for p in prestataires],
        )

        n_aid = remplacer(
            cur, "aides",
            ["id", "nom", "financeur", "logo_url", "type", "taux", "plafond",
             "description", "eligibilite", "infos_complementaires", "categories",
             "secteurs", "departements", "agences", "statut", "sources", "date_maj"],
            [(a["id"], a["nom"], a["financeur"], a.get("logo_url"), a["type"],
              a.get("taux"), a.get("plafond"), a.get("description"), a.get("eligibilite"),
              Json(a.get("infos_complementaires", [])), a.get("categories", []),
              a.get("secteurs", []), a.get("departements", []), a.get("agences", []),
              *cycle(a))
             for a in aides],
        )

        n_lp = remplacer_liens(
            cur, "prestataires_actions", ["prestataire_id", "action_id", "roles"],
            [(p["id"], m, roles) for p in prestataires for m, roles in liens_mesures(p)],
        )
        n_la = remplacer_liens(
            cur, "aides_actions", ["aide_id", "action_id"],
            [(a["id"], m) for a in aides for m, _ in liens_mesures(a)],
        )

        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        conn.close()

    return n_cat, n_qst, n_que, n_act, n_pre, n_aid, n_lp, n_la


def creer_tables():
    conn = DBP.get_conn()
    cur = conn.cursor()
    try:
        cur.execute(DDL)
        conn.commit()
    finally:
        cur.close()
        conn.close()


def main():
    args = sys.argv[1:]

    if "--table-only" in args:
        creer_tables()
        print("Tables créées.")
        return

    staging = None
    if "--staging" in args:
        i = args.index("--staging")
        if i + 1 >= len(args):
            print("--staging attend le nom d'un secteur (dossier api/seeds/staging/<secteur>)")
            sys.exit(2)
        staging = dossier_staging(args[i + 1])
        if not os.path.isdir(staging):
            print(f"Dossier de staging introuvable : {staging}")
            sys.exit(2)
        print(f"Staging : {staging}")

    categories, questionnaires, actions, prestataires, aides = charger_seeds(staging)
    print(f"Seeds : {len(categories)} catégories, {len(questionnaires)} questionnaire(s), "
          f"{len(actions)} mesures, {len(prestataires)} prestataires, {len(aides)} aides")

    erreurs, avertissements = verifier(categories, questionnaires, actions, prestataires, aides)
    for w in avertissements:
        print(f"  avertissement : {w}")
    if erreurs:
        print(f"\n{len(erreurs)} référence(s) invalide(s), ingestion annulée :")
        for e in erreurs:
            print(f"  - {e}")
        sys.exit(1)

    if "--verifier" in args or staging:
        print("\nContrôles passés, aucune écriture"
              + (" (staging : jamais d'écriture)." if staging else " (--verifier)."))
        return

    creer_tables()
    n_cat, n_qst, n_que, n_act, n_pre, n_aid, n_lp, n_la = ingerer(
        categories, questionnaires, actions, prestataires, aides
    )
    print(f"\nIngéré : {n_cat} catégories, {n_qst} questionnaires, {n_que} questions, "
          f"{n_act} mesures, {n_pre} prestataires, {n_aid} aides, "
          f"{n_lp} liens prestataire-mesure, {n_la} liens aide-mesure")


if __name__ == "__main__":
    main()
