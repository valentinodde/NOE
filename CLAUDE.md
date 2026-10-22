# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Writing Conventions

**Never use em dashes (—) or en dashes (–) in any text.** This applies to user-facing UI copy, comments, docstrings, commit messages, and documentation. They read as AI-generated. Use a comma, a colon, parentheses, or split the sentence instead.

(The `// ─── Section ───` comment separators use a box-drawing character, not a dash, and remain the convention in the frontend components.)

## Project Overview

A water risk analysis tool ("Analyse des Risques Eau") that assesses water-related risks for French companies by SIRET number. It shows scarcity alerts, vulnerability scores across time horizons (2025, 2030, 2050), and water dependencies.

## Development Commands

### Frontend (React)
```bash
cd front
npm install        # Install dependencies
npm start          # Dev server at http://localhost:3000
npm run build      # Production build
npm test           # Run tests
```

### Backend (Flask)

**All Python work happens in the `noe-env` conda environment — never in `base` or the system Python.**

```bash
conda activate noe-env
cd api
python app.py      # Runs at http://127.0.0.1:5000
```

Non-interactive / one-off commands (no activation needed — **use this form for scripts, tests and checks**):
```bash
conda run -n noe-env python api/app.py
conda run -n noe-env python -c "import pandas; print(pandas.__version__)"
```

Ingestion de l'historique des restrictions sécheresse (à relancer une fois par an, ou dès qu'on veut rafraîchir l'année en cours) :
```bash
conda run -n noe-env python api/ingest_restrictions_histo.py   # télécharge la source et remplit arretes_communes_histo
```

Ingestion du référentiel questionnaire / plan d'action (à relancer après chaque correction d'un seed) :
```bash
conda run -n noe-env python api/ingest_referentiel.py             # crée les tables et ingère api/seeds/
conda run -n noe-env python api/ingest_referentiel.py --verifier  # contrôle les références croisées, sans écriture
```

Recreate or update the environment:
```bash
conda env create -f api/environment.yml          # first time
conda env update -f api/environment.yml --prune  # after editing api/requirements.txt
```

- Interpreter path: `/opt/homebrew/Caskroom/miniforge/base/envs/noe-env/bin/python` (Python 3.13, matching `api/runtime.txt`)
- `api/environment.yml` pins Python and delegates package pins to `api/requirements.txt` — **add new dependencies to `requirements.txt`**, not to `environment.yml`.
- VS Code auto-activates `noe-env` via `.vscode/settings.json` (`python.defaultInterpreterPath` + `python.terminal.activateEnvironment`). If a terminal opens on the wrong env, run `conda activate noe-env` or reload the window.

Frontend communicates with backend via `REACT_APP_API_URL` defined in `front/.env` (defaults to `http://127.0.0.1:5000`).

## Architecture

### Data Flow
1. User enters a 14-digit SIRET on `HomePage`
2. Navigation to `/etablissement/:siret`
3. `CompanyPage` calls `fetchEntreprise(siret)` → `GET /siret/<siret>` on the Flask API
4. Flask looks up the SIRET in a Pandas DataFrame loaded from `api/test_data.xlsx` at startup
5. Returns a JSON record; components render risk data

### Frontend (`front/src/`)
- **Routing:** React Router v7 — two routes: `/` (HomePage) and `/etablissement/:siret` (CompanyPage)
- **Pages:** `pages/HomePage.js` (search), `pages/CompanyPage.js` (analysis dashboard)
- **Components:** `ScoreCards`, `ScoreTimeline` (Recharts), `WaterAlertCard` (groundwater/surface), `DirectDependencies`, `CompanyMap` (react-leaflet), `VulnerabilityBadge`
- **Utils:** `utils/api.js` (fetch calls), `utils/riskHelpers.js` (score interpretation)
- **Styling:** Tailwind CSS v4 via PostCSS

### Backend (`api/`)
- **`app.py`:** Flask app with CORS enabled for all origins. Loads `test_data.xlsx` into a Pandas DataFrame at startup. Two routes: `GET /home` (health check), `GET /siret/<id>` (company lookup)
- **`DB_processor.py`:** MongoDB integration (prepared but not active) — intended future replacement for the Excel data source. Uses `python-dotenv` for credentials and `certifi` for SSL.

### Historique des restrictions sécheresse
`arretes_communes_histo` : une ligne par commune (34 943), colonne `data` JSONB contenant les **points de bascule** du niveau de gravité par ressource (SUP, SOU, AEP), couverture 2010-05-01 à aujourd'hui, 35 Mo au total.

```json
{"SUP": [["2025-06-02", 2], ["2025-07-11", 4], ["2025-10-20", 0]], "SOU": [...]}
```
Niveaux : 0 aucune, 1 vigilance, 2 alerte, 3 alerte renforcée, 4 crise. Le niveau vaut 0 avant la première bascule et reste constant entre deux bascules, ce qui permet de recalculer à la volée n'importe quelle granularité (annuelle, mensuelle, journalière) sans réingérer. Lecture via `DB_processor.load_restrictions_history()`.

L'ancienne table `arretes_communes_jours` (agrégat annuel, 92 Mo) a été supprimée au profit de celle-ci.

La route `GET /restrictions/historique/<code_commune>` renvoie en une fois les deux vues du composant `DroughtRestrictions` : `points` (jours par niveau et par an) et `mois` (niveau maximal de chaque mois, 12 codes par année).

### Retours d'expérience : aides des agences de l'eau
`aides_agences_eau` (source brute, 139 591 aides engagées 2019-2024, 6 agences) n'a pas de code NAF, et seules AELB et AESN publient le SIRET. Le script `api/ingest_aides_exemples.py` construit `aides_exemples`, une copie enrichie :
- `naf` / `naf_source` : secteur du bénéficiaire résolu via `insee_entreprises` (SIRET), sinon via l'API Recherche d'entreprises par SIRET puis par nom + département (`sirene_siret`, `sirene_nom`). Les appels API sont mis en cache dans `aides_resolution`, échecs compris, donc une relance ne refait que les nouvelles requêtes.
- `themes` : catégories du plan d'action détectées par regex dans `objet_operation`.
- `exemplaire` : dossier montrable (montant, objet assez long, pas une annuité ni une prime automatique).
- `personne_physique` : impose l'anonymisation à l'affichage (exploitants et entrepreneurs en nom propre).

```bash
conda run -n noe-env python api/ingest_aides_exemples.py              # résolution API puis construction (long, reprise possible)
conda run -n noe-env python api/ingest_aides_exemples.py --construire # reconstruit la table depuis le cache (rapide)
```

`type_beneficiaire` de la source est trompeur ("autres" cache beaucoup d'entreprises) : se fier au NAF. Les montants ne se comparent qu'au sein d'une même agence, chacune ayant ses programmes et ses règles de publication.

La route `GET /aides/exemples?naf=&lat=&lon=&dept=&categories=` renvoie des exemples par cercles de proximité (même NAF puis même division, agence de l'établissement d'abord, thème du plan d'action en repli) et des médianes par agence. Composant `AidesExemples` dans l'onglet Avancer.

### Vision territoriale
Page `/territoires` (lien « Vision territoriale » du header), à part du parcours entreprise : les 1 140 bassins versants de métropole sur une carte MapLibre, un indicateur à la fois, aux horizons 2025, 2030 et 2050. Panneau de droite : synthèse du territoire choisi (France, région, département) ou fiche du bassin cliqué. Sous la carte : classement des bassins du territoire. L'état (territoire, indicateur, horizon, bassin) vit dans l'URL.

- `api/territoires_processor.py` : indicateurs comparables calculés depuis `bassins.data`, contours simplifiés (`ST_SimplifyPreserveTopology`, 0,004°), départements touchés par chaque bassin (centroïdes de `communes_centroid`). Calculé une fois par processus (préchauffé au démarrage de `app.py`, quelques secondes) et servi en gzip.
- `bassins_activite` : établissements et emplois salariés estimés (milieu de la tranche d'effectif INSEE) par bassin et par code NAF. La dépendance d'un secteur est le score `operations.quantity.final_score` de `sectors`, lu à la volée : 3 = forte (indicateur de carte), 2 = significative.
- Routes : `GET /territoires/bassins` (FeatureCollection), `GET /territoires/communes?q=` (recherche, avec le bassin de la commune), `GET /territoires/activite?bassins=` (emplois et activités dépendantes, tous les bassins sans paramètre).
- Front : définitions, classes et couleurs des indicateurs dans `utils/territoiresIndicateurs.js` (classes fixes d'un horizon à l'autre, rampe orange pour les aléas, bleue pour les grandeurs descriptives), régions et départements dans `utils/territoiresFrance.js`, composants dans `components/territoires/`.
- Indicateurs à réglages : « Prélèvements » se décline par usage (tous, agriculture, eau potable, industrie) et par mesure (volume rapporté à la surface, part de l'eau produite par le bassin, évolution), via `indicateurPrelevements()` et les paramètres d'URL `usage` et `mesure`. « Ressource disponible » est l'eau produite par le bassin (ruissellement et infiltration de `cycle_eau`, sans l'amont), même définition que l'offre de l'onglet Constat.

```bash
conda run -n noe-env python api/ingest_activite_bassins.py   # environ une minute, à relancer après chaque rechargement de insee_entreprises
```

### Référentiel questionnaire / plan d'action
Tables PostgreSQL alimentées par `api/ingest_referentiel.py` depuis les seeds JSON de `api/seeds/` :

| Table | Contenu |
|-------|---------|
| `categories` | les 7 catégories canoniques du plan d'action (libellé, description, icône, couleur, ordre) |
| `questionnaires` | un par secteur, résolu par `naf_codes`. Colonnes JSONB `themes`, `topics_labels`, `action_plan_config` (les filtres du constructeur) |
| `questions` | les questions d'un questionnaire, colonnes JSONB `options`, `condition`, `input`, `scoring` |
| `actions` | la bibliothèque de mesures : `titre_court`, `categorie` (clé étrangère vers `categories`), `secteurs`, `infos_complementaires` |
| `prestataires` | les apporteurs de solutions : `type`, `logo_url`, `siret`, `contacts`, `categories`, `secteurs`, `departements` |
| `aides` | le catalogue des dispositifs d'aide : `logo_url`, `infos_complementaires`, `categories`, `secteurs`, `departements`, `agences` |
| `prestataires_actions` (avec `roles`), `aides_actions` | liens explicites fiche vers mesure (champ `mesures` des seeds) |

Rattachements, mêmes règles pour mesures, prestataires et aides :
- `secteurs` : liste de `sector_id` de questionnaires. **Vide = transversal**, visible pour tous les secteurs.
- `departements` (prestataires, aides) : codes INSEE (`"01"` à `"95"`, `"2A"`, `"2B"`, `"971"` à `"976"`), même format que `insee_entreprises.departement`. **Vide = national.** Pas de notion de région : une couverture régionale se saisit comme la liste de ses départements.
- `agences` (aides) : codes des agences de l'eau (`AEAP`, `AERM`, `AESN`, `AELB`, `AEAG`, `AERMC`), ceux de `institutional_actors.data.code`. **Vide = toutes.** L'agence de l'établissement est résolue par point dans polygone.
- `mesures` (prestataires, aides) : mesures explicitement couvertes. Pour un prestataire, chaque entrée porte ses `roles` : `{"id": "ACT_AGR_005", "roles": ["conseil_etude", "financement"]}`.

Vocabulaires fermés, définis et validés dans `ingest_referentiel.py` (toute valeur en base a son libellé dans le front) :
- `type` de prestataire : `chambre_consulaire`, `bureau_etudes`, `organisme_technique`, `organisme_formation`, `cooperative`, `syndicat_professionnel`, `collectivite`, `agence_publique`, `equipementier` (fabricant), `installateur` (entreprise de travaux ou intégrateur qui ne fabrique pas), `solution_numerique` (capteurs et plateforme de suivi, de télérelève ou d'alerte, que le client exploite lui-même), `association`.
- `roles` d'un lien prestataire-mesure : `conseil_etude`, `travaux`, `materiel`, `formation`, `financement`.
- `infos_complementaires` (mesures, aides) : liste de `{type, texte, lien?, lien_label?}`, type parmi `info`, `avertissement`, `retour_experience`, `ressource`. Composant `InfosComplementaires`.
- `contacts` (prestataires) : liste de `{type, value}`, type parmi `site_internet`, `mail`, `tel`, `adresse`, `linkedin`.
- `logo_url` remplace les emojis ; le composant `Logo` affiche les initiales quand il manque ou ne charge pas. Les logos sont hébergés sur Cloudinary (`Noe assets/logos/<id de la fiche>.png`), déposés par `api/outils_fiches.py logo <ID> <url>` avec `CLOUDINARY_URL` dans `api/.env`. Jamais de lien direct vers le site de la structure.

Cycle de vie (mesures, prestataires, aides) : `statut` (`brouillon` par défaut, `publie` : seul statut servi par l'API), `sources` (liste de `{champ, url, date?, extrait?}`, d'où vient chaque information), `date_maj` (AAAA-MM-JJ). Une fiche publiée sans source est signalée.

Les seeds sont la source de vérité tant qu'il n'y a pas de back-office : on corrige le JSON dans `api/seeds/`, on relance le script. L'ingestion est idempotente (UPSERT puis suppression des lignes absentes des seeds, tables de liaison réécrites) et refuse d'écrire si un contrôle échoue. Les contrôles et les vocabulaires vivent dans `api/referentiel_verif.py` : références croisées (catégorie, secteur, mesure, NAF unique), formats (département, agence, SIRET, contacts, dates), et logique du questionnaire (types et barèmes des questions, conditions sur des questions et options existantes, filtres dont l'opérateur, la question, les options ou les niveaux de maturité sont ceux du moteur, mesures propres au secteur toutes atteignables par un filtre). Les colonnes ajoutées ou retirées après coup passent par des `ALTER TABLE ... IF EXISTS` dans le bloc DDL, puisque `CREATE TABLE IF NOT EXISTS` ne modifie jamais une table existante.

**Staging.** `api/seeds/staging/<secteur>/` reçoit le travail en cours (un agent, une relecture) : `--staging <secteur>` lit ces fichiers par-dessus les seeds publiés (même nom = remplacement) et ne fait que vérifier, jamais écrire. La promotion vers `api/seeds/` est un geste humain.

```bash
conda run -n noe-env python api/ingest_referentiel.py --verifier --staging industrie_agro
```

**Construction d'un secteur par agent.** Le skill `/nouveau-secteur <code NAF>` (`.claude/skills/nouveau-secteur/`) orchestre sept étapes avec validation humaine à chacune : périmètre, profil eau (agent `profil-eau`), mesures, questions et filtres (vérificateur, simulation, agent `juge-personas`), couverture, fiches (agents `redacteur-fiche` puis `controleur-fiche`, un par fiche, contexte vierge), revue. Le savoir-faire est dans `guide_conception.md`, `personas.md` et les deux modèles de fiche du même dossier : c'est là qu'on corrige quand une sortie ne convient pas, pas dans le skill. Un hook (`.claude/hooks/garde_seeds.py`, déclaré dans `.claude/settings.json`) refuse toute écriture directe dans `api/seeds/*.json` hors staging et personas.

Outils en ligne de commande pour ces étapes :
- `api/outils_fiches.py` : `lister-mesures`, `rechercher-entreprise` (API Recherche d'entreprises), `verifier-url`, `logo` (dépôt Cloudinary), `verifier-fiche` (une fiche JSON dans le contexte seeds + staging), `naf` (nomenclature NAF rév. 2 : hiérarchie, notes explicatives INSEE, voisins et questionnaire qui couvre déjà chaque code, recherche par mots).
- `api/construire_nomenclature_naf.py` : régénère `nomenclature_naf.json` et `.md` dans le dossier du skill depuis insee.fr (732 pages, quelques minutes). À relancer seulement si l'INSEE révise la nomenclature.
- `api/rapport_couverture.py <secteur> [--staging]` : prestataires et aides liés à chaque mesure, et ce qui manque.
- `api/revue_staging.py <secteur>` : assemble `revue.md` dans le staging pour la relecture.
- `api/promouvoir_staging.py <secteur> [--publier ids | --publier-tout]` : contrôles, copie vers `api/seeds/`, statuts, ingestion, archivage des notes dans `api/seeds/notes/<secteur>/`. Pas de commit git.

**Simulation.** `front_vite/scripts/simuler_referentiel.mjs` fait tourner le vrai moteur (scoring et plan d'action, importés depuis `src/utils/`) sur des profils aléatoires et sur les personas de `api/seeds/personas/<secteur>.json`, puis rend un rapport Markdown : distribution des plans, fréquence de chaque mesure, niveaux atteints, filtres jamais déclenchés, plan de chaque persona. Code de sortie 1 en cas d'alerte (mesure toujours ou jamais proposée, niveau inatteignable, filtre mort, plans vides). C'est le test à faire passer avant de publier un questionnaire.

```bash
cd front_vite && node scripts/simuler_referentiel.mjs hotellerie             # seeds publiés
cd front_vite && node scripts/simuler_referentiel.mjs industrie_agro --staging --json rapport.json
```

Les colonnes sont en français, les clés renvoyées au front gardent le vocabulaire des composants (`order`, `class`, `text`, `image`) : la traduction se fait dans `DB_processor`.

Deux routes :
- `GET /questionnaire/<naf>` : le référentiel de secteur (questionnaire, questions, catégories, mesures visibles par le secteur, configuration du plan). Stable pour un NAF donné.
- `GET /solutions?naf=&dept=&lat=&lon=` : prestataires et aides visibles pour le secteur, le département et l'agence de l'eau, chacun avec sa liste `mesures` (`[{id, roles}]`). Sans `dept`, seules les fiches nationales sortent ; sans point, seules les aides valables dans toutes les agences.

Les deux renvoient 404 si aucun questionnaire ne couvre le code NAF. `CompanyPage` les appelle une fois chacune et passe `referentiel` et `solutions` en props aux onglets.

Côté front, `utils/solutionsMatching.js` apparie les fiches aux mesures du plan d'action : lien explicite d'abord, catégorie de la mesure en repli quand aucune fiche liée n'est disponible dans le territoire. Les prestataires transversaux (`secteurs` vide) sont exclus du repli et ne sortent que par leurs liens explicites (une fiche générale porte donc des liens vers les mesures de chaque secteur). Les aides transversales gardent le repli tant qu'elles ne sont pas toutes liées. Chaque fiche retenue porte `couverture` (mesures couvertes, origine du rapprochement, rôles), affichée dans l'onglet Avancer ; la Synthèse affiche sur chaque mesure les prestataires qui lui sont explicitement liés avec leurs rôles. Le tri du plan d'action est impact × facilité puis horizon (plus de bonus par tags).

Le scoring (`computeScores`, `evaluateCondition`, seuils de maturité et de concernement) est dans `utils/questionnaireScoring.js`, sans React, partagé par les trois onglets et la simulation. Les réponses "je ne sais pas" (`__skip__`) sont retirées par `cleanAnswers` avant le scoring, les conditions et le plan d'action, et le moteur ne déclenche aucun filtre sur une question sans réponse (sauf `not_answered`).

À ne pas confondre avec la table `aides_exemples`, qui contient les aides réellement accordées par les agences.

**Explorateur des fiches.** Page `/fiches` (lien « Fiches solutions » du header), trois onglets : les mesures, les prestataires et les aides, filtrables par secteur, catégorie, type ou horizon, territoire et état de rédaction, avec un panneau de détail (contenu, liens, sources, verdict du contrôleur, contrôles de `referentiel_verif`, fichiers où vit la fiche). Une mesure affiche ses déclencheurs (filtres des questionnaires qui l'ajoutent au plan ou l'en retirent) et ses apporteurs et aides liés. Une mesure et ses solutions s'ouvrent l'une depuis l'autre. Elle lit les fichiers, pas la base : `api/fiches_processor.py` réunit seeds publiés, fichiers de secteur du staging et fiches unitaires (`staging/<secteur>/fiches/`), relus à chaque appel de `GET /fiches`. Quand une fiche existe à plusieurs endroits, la version la plus récente (`date_maj`) est affichée, et une copie de staging qui ne diffère que par le statut (changé à la promotion) n'est pas une modification. Composants dans `components/fiches/`, filtres dans `utils/fichesExplorateur.js`, état dans l'URL.

### Key Data Fields
Risk scores per company: `score_croise_2025/2030/2050`, normalized water scores (`score_eau_*_norm`), `vulnerability_2025/2030/2050`, water alert days (`SOU_*/SUP_*`), and direct dependency flags.

## Tech Stack
| Layer | Key Libraries |
|-------|--------------|
| Frontend | React 19, React Router 7, Tailwind CSS 4, Recharts, react-leaflet |
| Backend | Flask 2.3, Flask-CORS, Pandas, openpyxl |
| Future DB | MongoDB (pymongo 4.4, python-dotenv, certifi) |

## Current Limitations
- Backend data source is `api/test_data.xlsx` — not a live database
- Flask runs with `debug=True`; CORS allows all origins
- No custom tests exist yet (test infrastructure from CRA is present)
