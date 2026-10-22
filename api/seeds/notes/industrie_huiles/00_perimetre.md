# Périmètre du secteur : huiles et corps gras

Note de périmètre, étape 1 du skill `nouveau-secteur`. Code NAF de départ : **10.4**.
Statut : brouillon. Périmètre validé le 2026-09-27.

## 1. Résolution du code de départ

Source : nomenclature NAF rév. 2 de l'INSEE (fichier du skill, `outils_fiches.py naf 10.4`).

| Niveau | Code | Libellé INSEE |
|---|---|---|
| Section | C | Industrie manufacturière |
| Division | 10 | Industries alimentaires |
| Groupe | **10.4** | **Fabrication d'huiles et graisses végétales et animales** |
| Classe | 10.41 | Fabrication d'huiles et graisses |
| Classe | 10.42 | Fabrication de margarine et graisses comestibles similaires |

10.4 est un groupe, pas une sous-classe : il se résout en trois sous-classes.

**Aucun questionnaire ne couvre l'une d'elles**, ni dans `api/seeds/` (agriculture,
hôtellerie, industrie laitière, industrie de la viande, industrie des fruits et légumes),
ni dans le staging.

## 2. Identité du secteur

| Champ | Valeur proposée |
|---|---|
| `sector_id` | `industrie_huiles` |
| `sector_label` | Huiles et corps gras |
| Préfixe des mesures | `HUI`, soit `ACT_HUI_001` et suivants |
| Préfixe des questions | `hui_q01` et suivants |

Vérifié : aucune mesure `ACT_HUI_*` n'existe, ni dans les seeds publiés, ni dans le
staging, ni dans la table `actions`.

« Corps gras » est le terme de la filière (l'institut technique de branche est l'ITERG,
institut des corps gras) et couvre à la fois les huiles, les graisses animales et les
margarines, ce que « huiles » seul ne dit pas.

## 3. Codes NAF retenus

Le groupe 10.4 en entier : 3 sous-classes, 428 établissements en base (`insee_entreprises`).

| Code | Libellé INSEE | Établissements | Dont 20 salariés et plus |
|---|---|---|---|
| 10.41A | Fabrication d'huiles et graisses brutes | 298 | 23 |
| 10.41B | Fabrication d'huiles et graisses raffinées | 121 | 12 |
| 10.42Z | Fabrication de margarine et graisses comestibles similaires | 9 | 2 |

Ce que 10.41A comprend selon l'INSEE : huiles végétales brutes (olive, colza, tournesol,
soja, lin, noix...), farines d'oléagineux non déshuilées, et aussi les huiles et graisses
animales non comestibles, les huiles de poisson, les tourteaux. 10.41B : raffinage et
traitements physiques des huiles (hydrogénation, soufflage...). 10.42Z : margarines,
pâtes à tartiner végétales, graisses de cuisson composées.

### Trois populations très différentes sous un même groupe

La base montre que le groupe réunit trois métiers dont les postes d'eau ne se ressemblent
pas. C'est le point à arbitrer.

1. **Moulins et huileries artisanales** (la majorité en nombre) : moulins à huile d'olive
   (13, 83, 30, 06, 84 en tête des départements), huileries de noix et de colza par
   pression à froid (24, 26, 38). Une à dix personnes, activité souvent saisonnière. Eau :
   lavage des olives, eau de process du décanteur, et surtout les **margines** (eaux de
   végétation, effluent très chargé), ou presque pas d'eau pour la pression à froid.
2. **Trituration et raffinage industriels** (Saipol, Bunge, Cargill, Lesieur, Olvea,
   Huilerie Moog...) et margarinerie (St Hubert) : vapeur, extraction au solvant,
   refroidissement, désodorisation sous vide avec condenseurs, eaux acides de
   neutralisation, nettoyage. Peu de sites, mais l'essentiel des volumes.
3. **Fonte de graisses animales non comestibles** (Sarval, Soleval, fondoirs) : cuisson de
   sous-produits animaux, buées et condensats, effluents chargés. Rattachée à 10.41A par
   la note INSEE, mais métier de l'équarrissage.

Ce qu'ils partagent malgré tout : un effluent gras et organique à traiter avant rejet
(séparation huile et eau), un poste nettoyage, et pour les deux derniers, un poste vapeur et
refroidissement. Le questionnaire devrait donc commencer par une question de profil
(pression à froid, moulin à olive, trituration ou raffinage, fonte animale) qui retire les
mesures sans objet, comme « Je n'irrigue pas » le fait en agriculture.

## 4. Codes limites écartés

| Code | Libellé INSEE | Établissements | Raison |
|---|---|---|---|
| 10.11Z | Transformation et conservation de la viande de boucherie | 3 044 | Reçoit le saindoux et les graisses animales comestibles (renvoi de 10.41A). Déjà couvert par `industrie_viande`. |
| 10.62Z | Fabrication de produits amylacés | 25 | Reçoit l'huile de maïs (renvoi de 10.41A), mais le procédé dominant est l'amidonnerie par voie humide : autres postes d'eau. Non couvert, à traiter avec l'amidonnerie. |
| 20.53Z | Fabrication d'huiles essentielles | 412 | Distillation à la vapeur de plantes aromatiques, produits non alimentaires, acteurs de la parfumerie. Renvoi de 10.41A. |
| 20.59Z | Fabrication d'autres produits chimiques n.c.a. | 523 | Oléochimie et traitement chimique des huiles (renvoi de 10.41A et 10.41B), dont biodiesel : industrie chimique. |
| 01.26Z | Culture de fruits oléagineux | | Oléiculture : amont, couvert par `agriculture`. Un oléiculteur qui presse lui-même reste sous son code agricole s'il est son activité principale. |
| 10.51B | Fabrication de beurre | | Pâtes à tartiner laitières (renvoi de 10.42Z). Couvert par `industrie_laitiere`. |
| 10.82Z | Fabrication de cacao, chocolat et de produits de confiserie | | Pâtes à tartiner au cacao (renvoi de 10.42Z). Autre procédé. |
| 10.91Z | Fabrication d'aliments pour animaux de ferme | 676 | Premier débouché des tourteaux, mais procédé sec (broyage, granulation). |
| 46.33Z | Commerce de gros de produits laitiers, œufs, huiles et matières grasses comestibles | 1 113 | Commerce, pas de transformation. |

## 5. Décisions prises au point d'arrêt de l'étape 1

Validé le 2026-09-27 : secteur, libellé, préfixe et les trois codes tels que proposés.
Les deux points ci-dessous ont été tranchés dans le sens de la proposition.

1. **Garder la fonte de graisses animales dans le questionnaire ?** On ne peut pas scinder
   un code NAF : les fondoirs en 10.41A recevront ce questionnaire quoi qu'il arrive.
   Proposition : les garder comme profil à part entière (option de la question de profil,
   mesures vapeur, condensats et effluents qui leur parlent), plutôt que de rédiger un
   questionnaire qui les ignore.
2. **Le moulin à huile d'olive comme cas central.** Il domine en nombre. Proposition : une
   mesure sectorielle dédiée aux margines (épandage encadré, bassin d'évaporation,
   passage au décanteur deux phases qui supprime l'eau de process) et des questions
   formulées pour qu'un moulin de trois personnes s'y retrouve.

## 6. Couverture des catégories du plan d'action

Aucune catégorie ne devrait rester vide. `agir_rejets_qualite` sera centrale (margines,
eaux acides de raffinage, effluents gras). `valoriser_reut_eaux_non_conventionnelles`
portera les condensats et la boucle fermée de refroidissement ou de vide.

## 7. Mesures transversales et demande d'évolution

Réutilisées telles quelles, sans équivalent `ACT_HUI_*` : ACT_AGR_001 (compteur par usage),
ACT_AGR_002 (audit eau), ACT_AGR_006 (récupération d'eau de pluie), ACT_AGR_009 (plan de
gestion de l'eau), ACT_AGR_010 (démarche collective, qui porte aussi le levier L11 du profil,
mutualisation territoriale). Le levier L2 du profil (ratio d'eau et d'effluent par tonne
traitée) est porté par la question du compteur et par ACT_AGR_001, sans mesure propre.

**Demande d'évolution, à trancher hors de cette session : une mesure transversale « ratio
d'eau par unité produite ».** Trois secteurs publiés ont chacun écrit la leur : ACT_FRL_002
(ratio eau par tonne), ACT_LAI_002 (ratio eau sur lait), ACT_VIA_002 (ratio eau par kilo).
Au sens du guide (section 4.1), on peut retirer le mot du secteur de leur description sans
la fausser : c'est une transversale. La créer une fois, avec `secteurs: []`, dans la
catégorie `suivre_comprendre_maitriser`, éviterait une quatrième copie ici. Même remarque,
plus faible, pour « Nettoyage économe » (ACT_LAI_001, ACT_VIA_001). Aucun seed publié n'est
modifié par cette session.

## 8. Erreur de vérification attendue à l'étape 3, levée à l'étape 4

`ingest_referentiel.py --verifier --staging industrie_huiles` échoue à l'issue de l'étape 3
avec sept erreurs `mesure ACT_HUI_00N : secteurs inconnus ['industrie_huiles']`. Le
vérificateur construit la liste des `sector_id` à partir des questionnaires ; tant que
`questionnaire_industrie_huiles.json` n'existe pas, aucune mesure ne peut s'y rattacher.
Aucune autre erreur ne concerne les mesures du secteur. Les avertissements restants
(fiches `PREST_AGR_*` et `AIDE_AGR_*` publiées sans source, ACT_AGR_006 jamais citée par
l'industrie laitière) portent sur les seeds publiés d'autres secteurs.
