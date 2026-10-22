# Périmètre du secteur : vins et spiritueux

Note de périmètre, étape 1 du skill `nouveau-secteur`. Code NAF de départ : **11** (division entière).
Statut : brouillon. Périmètre validé le 2026-09-28.

## 1. Résolution du code de départ

Source : nomenclature NAF rév. 2 du skill (`outils_fiches.py naf 11`, notes explicatives INSEE).

| Niveau | Code | Libellé INSEE |
|---|---|---|
| Section | C | Industrie manufacturière |
| Division | **11** | **Fabrication de boissons** |

La division compte neuf sous-classes. **Aucune n'est couverte** par un questionnaire publié
ou en staging (`couvert_par` vide pour les neuf).

## 2. Découpage de la division 11

La division regroupe deux familles dont les usages de l'eau diffèrent. Le guide (section 2)
demande de séparer en cas de doute, et la note de périmètre `industrie_laitiere` (section 5,
2026-09-22) prévoyait déjà un secteur vin à part.

| Famille | Codes | Établ. en base | Profil eau |
|---|---|---|---|
| **Vins et spiritueux** (cette session) | 11.01Z, 11.02A, 11.02B, 11.03Z, 11.04Z | 4 550 | Activité saisonnière (vendanges, pressurage, campagne de distillation), effluents vinicoles et vinasses concentrés sur quelques semaines, adossement fréquent à une exploitation viticole ou cidricole. |
| Brasserie et boissons (session ultérieure) | 11.05Z, 11.06Z, 11.07A, 11.07B | 3 757 | Production continue, eau ingrédient du produit, nettoyage en place et lavage des contenants toute l'année. Proposition : `industrie_boissons`, préfixe `BOI`. |

Arbitrage rendu au point d'arrêt : on construit ici **vins et spiritueux**.

## 3. Identité du secteur

| Champ | Valeur |
|---|---|
| `sector_id` | `vins_spiritueux` |
| `sector_label` | Vins et spiritueux |
| Préfixe des mesures | `VIN`, soit `ACT_VIN_001` et suivants |
| Préfixe des questions | `vin_q01` et suivants |
| Préfixe des fiches | `PREST_VIN_NNN`, `AIDE_VIN_NNN` |

Vérifié : aucune mesure `ACT_VIN_*` ni aucun `sector_id` `vins_spiritueux` ou `filiere_vin`
dans `api/seeds/` et le staging. Préfixes déjà pris : AGR, FRL, HOT, HUI, LAI, VIA.

Le slug `vins_spiritueux` remplace le `filiere_vin` évoqué le 22/09 : le périmètre comprend
aussi le cidre et les eaux-de-vie, et le libellé doit le laisser entendre.

## 4. Codes NAF retenus

| Code | Libellé INSEE | Établ. | Dont employeurs |
|---|---|---|---|
| 11.01Z | Production de boissons alcooliques distillées | 1 982 | 505 |
| 11.02A | Fabrication de vins effervescents | 507 | 248 |
| 11.02B | Vinification | 1 621 | 695 |
| 11.03Z | Fabrication de cidre et de vins de fruits | 276 | 49 |
| 11.04Z | Production d'autres boissons fermentées non distillées | 164 | 25 |
| **Total** | | **4 550** | **1 522** |

Ce que ces cinq activités partagent, et qui fonde le questionnaire :

1. **Une pointe saisonnière** : vendanges et pressurage (vin, champagne, cidre), campagne de
   distillation hivernale (cognac, armagnac, calvados). Le dimensionnement du stockage et du
   traitement des effluents se joue sur ces quelques semaines.
2. **Le lavage du matériel et des cuves** est le premier poste d'eau hors refroidissement :
   pressoirs, cuves, barriques, sols de chai, tireuse.
3. **Le froid** : maîtrise des températures de fermentation, stabilisation tartrique, et pour
   la distillation, le refroidissement des serpentins d'alambic.
4. **Des effluents organiques** (effluents vinicoles, vinasses de distillation) avec des
   filières de traitement propres à la filière : épandage, stockage aéré, évaporation
   naturelle, distilleries vinicoles pour les lies et marcs.
5. **Des apporteurs et des aides communs** : IFV, BNIC et interprofessions, oenologues
   conseil, équipementiers de chai, agences de l'eau.

Les liqueurs, apéritifs et spiritueux obtenus par simple assemblage (11.01Z, 11.04Z) n'ont
ni vendange ni distillation : c'est le persona « non concerné par l'usage principal », traité
par des options « sans objet » et des filtres `remove`.

## 5. Codes limites écartés

| Code | Libellé INSEE | Établ. | Raison |
|---|---|---|---|
| 01.21Z | Culture de la vigne | 112 001 | Déjà couvert par `agriculture`. La note INSEE renvoie la production de vin en 11.02, mais un domaine qui vinifie sa propre récolte reste souvent déclaré en 01.21Z (activité principale). |
| 20.14Z | Fabrication d'autres produits chimiques organiques de base | 488 | Comprend l'alcool éthylique de fermentation (cf. note de 11.01Z) : les distilleries industrielles d'alcool neutre et de valorisation des marcs et lies y relèvent de la chimie, avec des volumes et une réglementation sans commune mesure. |
| 46.34Z | Commerce de gros de boissons | 13 235 | Négoce sans élaboration ; l'embouteillage simple y est renvoyé par l'INSEE. |
| 82.92Z | Activités de conditionnement | 2 141 | Embouteillage pour compte de tiers, prestation de service sans vinification. |
| 52.10B | Entreposage et stockage non frigorifique | 10 589 | Vieillissement pour compte de tiers ; population très majoritairement hors filière. |
| 11.05Z à 11.07B | Brasserie, malt, eaux, boissons rafraîchissantes | 3 757 | Secteur à part (section 2). |

**Le cas du vigneron qui vinifie.** Comme la fromagerie fermière côté lait, un domaine qui
cultive et vinifie est le plus souvent déclaré en 01.21Z et sera dirigé vers le questionnaire
`agriculture`, qui ne l'interroge pas sur son chai. Le questionnaire `vins_spiritueux` vise
les caves coopératives, maisons de négoce élaboratrices, maisons de champagne, distilleries
et cidreries dont la transformation est l'activité principale. Limite du routage par code NAF
unique, à reverser au chantier « double activité ».

## 6. Couverture des catégories du plan d'action

Six catégories sur sept portent au moins une mesure visible :
- `agir_rejets_qualite` est centrale (effluents vinicoles, vinasses, régime ICPE des caves et distilleries) : ACT_VIN_006, ACT_VIN_007.
- `ameliorer_efficacite_hydrique` : raclage, nettoyage des cuves, refroidissement en circuit fermé (ACT_VIN_002 à 004).
- `valoriser_reut_eaux_non_conventionnelles` : réutilisation en cascade (ACT_VIN_005) et eau de pluie (ACT_AGR_006).
- `agir_grand_cycle` : démarche collective, reprise de la transversale ACT_AGR_010.

**`changer_process_pratiques` reste vide, choix validé au point d'arrêt de l'étape 2.** Le seul
levier de cette catégorie dans le profil (L6, concevoir un chai qui se nettoie avec peu d'eau) a
été fusionné dans ACT_VIN_003, parce qu'il ne s'applique qu'au moment d'un renouvellement de
matériel et qu'il conditionne les mêmes gains que la modernisation du nettoyage. Le garder à part
aurait porté la bibliothèque à 13 mesures visibles, au-delà de la cible du guide.

## 7. Mesures transversales disponibles

Cinq mesures publiées sont transversales (`secteurs: []`) : ACT_AGR_001 compteur par usage,
ACT_AGR_002 audit eau, ACT_AGR_006 récupération d'eau de pluie, ACT_AGR_009 plan de gestion
de l'eau, ACT_AGR_010 démarche collective. Elles seront réutilisées à l'étape 3 sans
équivalent `ACT_VIN_*`.

## 8. Erreur de vérification attendue à l'étape 3, levée à l'étape 4

`ingest_referentiel.py --verifier --staging vins_spiritueux` échoue à l'issue de l'étape 3
avec sept erreurs `mesure ACT_VIN_00N : secteurs inconnus ['vins_spiritueux']`. Le vérificateur
tire la liste des `sector_id` des questionnaires, et `questionnaire_vins_spiritueux.json` n'est
écrit qu'à l'étape 4. Rien d'autre n'est signalé sur les sept mesures. Si l'erreur persiste à
l'étape 4, c'est un vrai défaut.

Les sources des mesures ne portent une `date` que lorsqu'un jour précis est connu : une année
seule (« 2019 ») n'est pas acceptée par le vérificateur, et la compléter en « 2019-01-01 »
inventerait une précision. L'année reste lisible dans `01_profil.md`.
