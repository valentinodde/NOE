---
name: nouveau-secteur
description: Construit le référentiel complet d'un secteur d'activité pour Noé (questionnaire de maturité, mesures, prestataires, aides) à partir d'un code NAF, en staging, avec validation humaine à chaque étape.
arguments: [naf]
argument-hint: <code NAF, ex. 10.51C>
disable-model-invocation: true
---

Code NAF de départ : **$naf**

Tu orchestres la construction du référentiel d'un secteur. Le savoir-faire est dans les documents de ce dossier, pas ici : lis d'abord [guide_conception.md](guide_conception.md) en entier, puis `api/seeds/questionnaire_agriculture.json` et `api/seeds/actions_agriculture.json`, l'exemple de référence. Le CLAUDE.md du projet fixe les conventions d'écriture (jamais de tirets longs ni demi-cadratins).

## Règles de la session

- Tout s'écrit dans `api/seeds/staging/<secteur>/`. Jamais dans `api/seeds/` directement : un hook le refuse, et la promotion est un geste humain (`api/promouvoir_staging.py`).
- Tout ce que tu produis est en `statut: brouillon` avec `date_maj` du jour.
- Chaque étape se termine par un **point d'arrêt** : tu présentes le livrable et tu poses la question avec AskUserQuestion. Tu ne passes pas à l'étape suivante sans réponse. Une demande de correction relance l'étape, pas la suivante.
- Tu ne passes jamais à l'étape suivante tant que le vérificateur ou la simulation signale une erreur ou une alerte non justifiée par écrit.
- Les commandes Python passent par `conda run -n noe-env python ...`, depuis la racine du dépôt ; la simulation passe par `node` depuis `front_vite/`.
- Quand une étape est déléguée à un agent, tu lui donnes tout le contexte dans son message de lancement (secteur, chemins, ids) : il ne voit rien d'autre.

## Étape 1 : périmètre

1. Vérifie que $naf n'est couvert par aucun questionnaire : cherche-le dans les `naf_codes` de `api/seeds/questionnaire_*.json` et de `api/seeds/staging/*/questionnaire_*.json`. S'il l'est, arrête-toi et dis lequel.
2. Résous le code avec la nomenclature NAF rév. 2 du skill (libellés des cinq niveaux et notes explicatives INSEE, hors ligne, ne va pas la chercher sur le web) : `conda run -n noe-env python api/outils_fiches.py naf $naf`. La sortie donne la hiérarchie, ce que le code comprend et ne comprend pas, et les sous-classes de la même division avec le questionnaire qui les couvre déjà (`couvert_par`). Pour aller plus loin : `naf <code> --notes` (notes des voisins), `naf <code> --voisins section` (hors division), `naf 10.5` (tout un préfixe), `naf --chercher <mots>` (activités apparentées ailleurs dans la nomenclature, par exemple le commerce de gros ou l'élevage correspondant). Les renvois « (cf. XX.XXX) » des notes « ne comprend pas » sont les premiers codes limites à examiner. Le texte intégral est aussi dans `nomenclature_naf.md` du même dossier, cherchable par Grep.
3. Propose `sector_id` (slug), `sector_label`, le préfixe d'ids à trois lettres (vérifie qu'aucune mesure `ACT_<PREFIXE>_` n'existe), et la liste des codes NAF voisins à couvrir ensemble, avec les codes limites écartés et la raison (guide, section 2). Un code déjà `couvert_par` un autre questionnaire ne peut pas être repris.
4. Crée `api/seeds/staging/<secteur>/` et écris `00_perimetre.md`.
5. **Arrêt** : fais valider le périmètre (secteur, préfixe, liste NAF).

## Étape 2 : profil eau

1. Lance l'agent `profil-eau` avec : sector_id, libellé, liste NAF validée, chemin du staging. Il écrit `01_profil.md`.
2. Relis la note : chaque chiffre a-t-il une source acceptée par le guide ? Sinon renvoie à l'agent la liste des passages à sourcer ou à passer au conditionnel.
3. **Arrêt** : fais valider la note, en signalant les leviers que tu proposes de retenir comme mesures.

## Étape 3 : bibliothèque de mesures

1. Liste les mesures transversales existantes : `conda run -n noe-env python api/outils_fiches.py lister-mesures hotellerie` et repère celles avec `"transversale": true`. Si une mesure agricole devrait devenir transversale (le guide, section 4.1, dit comment le reconnaître), note-le dans `00_perimetre.md` comme demande d'évolution : tu ne modifies pas les seeds publiés.
2. Écris `actions_<secteur>.json` selon la section 4 du guide : six à douze mesures visibles, transversales comprises, ids `ACT_<PREFIXE>_NNN`, sources reprises du profil.
3. Contrôle : `conda run -n noe-env python api/ingest_referentiel.py --verifier --staging <secteur>`. À ce stade, l'absence de questionnaire fait échouer la couverture : ignore uniquement les messages « jamais citée par un filtre » jusqu'à l'étape 4.
4. **Arrêt** : présente la bibliothèque sous forme de tableau (id, titre court, catégorie, impact, facilité, horizon) et fais valider.

## Étape 4 : questions et filtres

1. Écris d'abord `02_discrimination.md` : la table question, options, mesures ajoutées, mesures retirées (guide, section 6). Chaque mesure du secteur doit y apparaître au moins une fois.
2. Écris `questionnaire_<secteur>.json` : thèmes, questions, options avec barèmes et topics, `topics_labels`, puis `action_plan_config` dérivé de la table.
3. Écris `api/seeds/personas/<secteur>.json` : les cinq archétypes obligatoires de [personas.md](personas.md), plus ceux que le secteur appelle.
4. Boucle jusqu'à propre :
   - `conda run -n noe-env python api/ingest_referentiel.py --verifier --staging <secteur>` : zéro erreur.
   - `cd front_vite && node scripts/simuler_referentiel.mjs <secteur> --staging > ../api/seeds/staging/<secteur>/rapport_simulation.md` : zéro alerte, indicateurs dans les cibles de la section 7 du guide. Chaque alerte que tu choisis de garder est justifiée dans `02_discrimination.md`.
5. Lance l'agent `juge-personas` avec le chemin du staging. Écris son message final dans `03_jugement.md`. Pour chaque mesure indue ou manquante, corrige la table de discrimination et les filtres, puis rejoue le point 4. Deux passages du juge au plus ; au-delà, tu documentes le désaccord.
6. **Arrêt** : présente les plans des personas et le verdict du juge, et fais valider le questionnaire.

## Étape 5 : couverture et cibles

1. `conda run -n noe-env python api/rapport_couverture.py <secteur> --staging > api/seeds/staging/<secteur>/rapport_couverture.md`
2. Pour chaque mesure sans prestataire ou sans aide, propose des cibles : nom de la structure ou du dispositif, URL officielle de départ, échelle (nationale, département de test, agence), et en une phrase pourquoi elle porte cette mesure. Vise, par mesure sectorielle, au moins deux entreprises privées françaises et une aide. Les prestataires se choisissent selon la section 8.1 du guide : bureaux d'études, installateurs et fabricants d'abord, un acteur consulaire local (CCI, chambre d'agriculture, CMA du département de test) seulement s'il réalise lui-même la prestation. Pour trouver les entreprises : pages références ou cas clients qui citent le secteur, annuaires d'adhérents des syndicats professionnels et des pôles de compétitivité, exposants des salons de la filière, puis `outils_fiches.py rechercher-entreprise` pour vérifier qu'elles sont actives en France. Écris la liste dans `04_cibles.md` avec, pour chaque cible, l'id que tu lui attribues (`PREST_<PREFIXE>_NNN`, `AIDE_<PREFIXE>_NNN`), son type et le rôle qu'elle tiendrait. Termine par le décompte privés / institutionnels ; si les institutionnels dépassent un tiers des prestataires, complète avant l'arrêt.
3. **Arrêt** : fais valider la liste de cibles.

## Étape 6 : fiches

1. Crée `api/seeds/staging/<secteur>/fiches/`.
2. Pour chaque cible validée, lance un agent `redacteur-fiche` (plusieurs en parallèle) avec : type, cible et URL, secteur, id attribué, chemin du staging. Chaque agent écrit `fiches/<ID>.json`.
3. Pour chaque fiche écrite, lance un agent `controleur-fiche` avec le chemin de la fiche. Écris son message final dans `fiches/<ID>.verdict.md`.
4. Une fiche `à corriger` retourne une fois au rédacteur avec le verdict. Une fiche encore `à corriger` ou `incomplet` après ce second passage garde son verdict et sera signalée à la revue ; tu ne la retouches pas toi-même.
5. Assemble `prestataires_<secteur>.json` et `aides_<secteur>.json` (listes) à partir de `fiches/*.json`, puis :
   `conda run -n noe-env python api/ingest_referentiel.py --verifier --staging <secteur>` : zéro erreur.
6. Rejoue le rapport de couverture et **arrêt** : présente les fiches avec leur verdict et fais valider.

## Étape 7 : revue

1. `conda run -n noe-env python api/revue_staging.py <secteur>` produit `revue.md` dans le staging.
2. Résume en dix lignes ce qui reste à trancher par le relecteur : alertes justifiées, fiches à verdict non conforme, catégories sans mesure, mesures agricoles proposées en transversal.
3. Propose de publier `revue.md` en page partageable (Artifact) si le relecteur n'est pas dans la session.
4. Dis comment promouvoir, sans le faire :
   `conda run -n noe-env python api/promouvoir_staging.py <secteur> --publier-tout` (ou `--publier <ids>` pour une publication partielle).

Ton dernier message récapitule les fichiers du staging, les points d'arrêt validés, et ce qui a été laissé de côté et pourquoi.
