# Périmètre du secteur : élevage d'herbivores

Note de périmètre, étape 1 du skill `nouveau-secteur`. Demande de départ : **élevage**.
Statut : brouillon. Périmètre validé le 2026-10-15.

## 1. Résolution de la demande

« Élevage » ne désigne pas une sous-classe mais le groupe **01.4 Production animale** de la
nomenclature NAF rév. 2 (huit sous-classes), auquel s'ajoute 01.50Z, culture et élevage
associés. Source : nomenclature du skill (`outils_fiches.py naf 01.4`, notes explicatives INSEE).

| Niveau | Code | Libellé INSEE |
|---|---|---|
| Section | A | Agriculture, sylviculture et pêche |
| Division | 01 | Culture et production animale, chasse et services annexes |
| Groupe | 01.4 | Production animale |
| Groupe | 01.5 | Culture et élevage associés |

Aucune sous-classe du groupe 01.4 ni 01.50Z n'est couverte par un questionnaire publié ou en
staging (`couvert_par` vide partout). L'ancien questionnaire `agriculture`, qui couvrait toute
la division 01, est archivé dans `api/seeds/archives/agriculture_placeholders/`.

Le découpage de la division 01 arbitré le 2026-10-15 (note de périmètre de `grandes_cultures`,
section 2) répartit l'élevage entre deux questionnaires :

| Questionnaire | Codes | Établ. actifs | Dont employeurs |
|---|---|---|---|
| **`elevage_herbivores`** (cette session, choix du 2026-10-15) | 01.41Z à 01.45Z, 01.50Z | 228 828 | 19 457 |
| `elevage_hors_sol` (plus tard) | 01.46Z, 01.47Z, 01.49Z | 86 554 | 4 309 |

On commence par les herbivores : population près de trois fois plus large, et l'élevage le plus
exposé à la sécheresse (abreuvement au pré, pousse de l'herbe, stocks de fourrage).

## 2. Identité du secteur

| Champ | Valeur |
|---|---|
| `sector_id` | `elevage_herbivores` |
| `sector_label` | Élevage d'herbivores |
| Préfixe des mesures | `HRB`, soit `ACT_HRB_001` et suivants |
| Préfixe des questions | `hrb_q01` et suivants |
| Préfixe des fiches | `PREST_HRB_NNN`, `AIDE_HRB_NNN` |

Vérifié : aucune mesure `ACT_HRB_*`, aucune question `hrb_q*` ni aucun `sector_id`
`elevage_herbivores` dans `api/seeds/` et le staging. Préfixes déjà pris : AGR (mesures
transversales historiques), ART, BOI, FRL, GCU, HOP, HOT, HUI, LAI, VIA, VIN.

## 3. Codes NAF retenus

Établissements actifs dans `insee_entreprises` (France entière), employeurs selon
`caractereemployeuretablissement`, outre-mer pour les départements 971 à 976.

| Code | Libellé INSEE | Établ. | Dont employeurs | Dont outre-mer |
|---|---|---|---|---|
| 01.41Z | Élevage de vaches laitières | 48 735 | 5 553 | 280 |
| 01.42Z | Élevage d'autres bovins et de buffles | 73 916 | 4 123 | 1 701 |
| 01.43Z | Élevage de chevaux et d'autres équidés | 21 417 | 1 570 | 133 |
| 01.44Z | Élevage de chameaux et d'autres camélidés | 154 | 1 | 0 |
| 01.45Z | Élevage d'ovins et de caprins | 28 242 | 1 240 | 387 |
| 01.50Z | Culture et élevage associés | 56 364 | 6 970 | 7 248 |
| **Total** | | **228 828** | **19 457** | **9 749** |

Les employeurs sont presque tous de très petits établissements : sur 19 457, plus de 12 000
déclarent un ou deux salariés et moins de 200 en ont dix ou plus.

Ce que ces activités partagent, et qui fonde le questionnaire :

1. **L'abreuvement est le premier poste d'eau**, au bâtiment et au pré, et il ne se réduit pas :
   un animal qui boit moins produit moins. Les leviers portent sur les pertes (abreuvoirs qui
   fuient ou débordent), la sécurisation de la source et le stockage, pas sur la sobriété de
   l'animal.
2. **Une alimentation à base d'herbe et de fourrages**, dont la sécheresse réduit la pousse et
   oblige à entamer les stocks d'hiver en été. Le système fourrager (prairies, stocks, cultures
   fourragères parfois irriguées) est un levier d'adaptation majeur, propre à ces élevages.
3. **Des sources d'eau mixtes** : réseau public, forage ou puits, source, mare, et accès direct
   des animaux aux cours d'eau au pâturage. Les arrêtés sécheresse peuvent viser les forages et
   les prises en rivière, l'abreuvement restant en général un usage prioritaire.
4. **Pour les laitiers** (01.41Z, une partie de 01.45Z et 01.50Z), un second poste : le
   nettoyage de la machine à traire, du tank et de la salle de traite, avec des eaux blanches et
   vertes à gérer, et le prérefroidissement du lait, qui produit une eau claire réutilisable.
5. **Des bâtiments à grande toiture** (stabulations, hangars), qui rendent la récupération
   d'eau de pluie plus utile qu'ailleurs, et dont le confort thermique en été devient un enjeu.
6. **Des effets sur les milieux** : piétinement des berges, effluents d'élevage, mais aussi
   prairies permanentes et haies qui stockent l'eau dans les sols.
7. **Les mêmes apporteurs** : chambres d'agriculture, Institut de l'Élevage (Idele), contrôles
   laitiers et entreprises de conseil en élevage, fabricants d'abreuvoirs et de matériel de
   traite, installateurs de traitement d'eau, agences de l'eau.

### Cas particuliers dans le périmètre

- **Le laitier et l'allaitant** n'ont pas les mêmes postes : salle de traite d'un côté, pâturage
  extensif de l'autre. On les garde ensemble (même abreuvement, mêmes fourrages, mêmes sources)
  et une question d'entrée sur la traite servira de filtre `remove` pour les mesures laitières.
  C'est le persona « sans l'usage principal » du lait, et non de l'élevage.
- **01.43Z, équidés** : élevage au pré, sans traite, comparable à un allaitant. Les écuries de
  course, centres équestres et haras sont ailleurs (voir section 4).
- **01.44Z, camélidés** : 154 établissements, un seul employeur. Gardé pour ne pas laisser un
  code orphelin, sans question propre.
- **01.50Z, culture et élevage associés** : la polyculture-élevage. L'élevage organise l'eau de
  l'exploitation, mais une partie des répondants irrigue des cultures. Une question sur
  l'irrigation des fourrages ou des cultures est prévue, avec une option « je n'irrigue pas » ;
  l'irrigation fine des grandes cultures reste le sujet de `grandes_cultures`. 13 % des
  établissements sont outre-mer, où les indicateurs de l'onglet Constat ne couvrent pas le
  territoire.
- **Transformation à la ferme** (fromagerie, découpe) : l'éleveur qui transforme son lait reste
  déclaré sous son code d'élevage (voir `api/seeds/notes/industrie_laitiere/00_perimetre.md`).
  Il arrivera ici. Le nettoyage de l'atelier de transformation n'est pas au coeur du
  questionnaire ; on examinera au profil s'il mérite une option ou une mesure. Limite connue du
  routage par code NAF unique, déjà signalée par la filière laitière.

## 4. Codes limites écartés

| Code | Libellé INSEE | Établ. | Raison |
|---|---|---|---|
| 01.46Z | Élevage de porcins | 6 372 | Prévu dans `elevage_hors_sol` : animaux en bâtiment, lavage des salles, lisier, brumisation. Pas de pâturage ni de fourrage. |
| 01.47Z | Élevage de volailles | 14 481 | Prévu dans `elevage_hors_sol`, même raison, plus les couvoirs. |
| 01.49Z | Élevage d'autres animaux | 65 701 | Prévu dans `elevage_hors_sol`. Le code comprend des herbivores (cervidés, bisons, lapins) mais aussi l'apiculture, l'héliciculture, les insectes et les animaux de compagnie : il ne peut être scindé, et ses procédés n'ont rien de commun avec le pâturage. |
| 01.62Z | Activités de soutien à la production animale | 6 935 | Services pour compte de tiers (insémination, tonte, maréchaux-ferrants, haras, pension d'animaux de ferme). L'eau consommée est le plus souvent celle de l'éleveur client. |
| 93.19Z | Autres activités liées au sport | 17 942 | Comprend écuries de course et écoles d'équitation (renvoi de 01.43Z). Usages proches (abreuvement, douches, arrosage des carrières) mais activité de loisir, au sein d'un code dominé par d'autres sports. À reconsidérer pour un futur questionnaire équestre. |
| 01.11Z, 01.19Z | Céréales, autres cultures non permanentes (dont fourrages) | | Couverts par `grandes_cultures` (staging). Un producteur de foin ou de luzerne sans troupeau relève de lui. |
| 10.51C, 10.11Z | Fabrication de fromage, transformation de la viande | | Couverts par `industrie_laitiere` et `industrie_viande` (publiés). |
| 46.23Z | Commerce de gros d'animaux vivants | 2 906 | Négociants et centres d'allotement : séjour court des animaux, lavage des camions. Commerce, pas élevage. |
| 75.00Z | Activités vétérinaires | 14 875 | Prestataires de l'éleveur, pas répondants. |
| 01.70Z | Chasse, piégeage et services annexes | | Sans rapport avec l'élevage. |
| 03.21Z, 03.22Z | Aquaculture | | Élevage en eau, procédés sans rapport. |

## 5. Couverture prévisible des catégories du plan d'action

À confirmer à l'étape 3 après le profil eau.
- `suivre_comprendre_maitriser` : compteur sur l'abreuvement et la salle de traite, détection
  des fuites, diagnostic eau de l'exploitation.
- `ameliorer_efficacite_hydrique` : abreuvoirs économes et entretenus, réglage du lavage de la
  machine à traire et du tank.
- `changer_process_pratiques` : système fourrager résilient (prairies multi-espèces, pâturage
  tournant, stocks de sécurité, cultures fourragères moins exigeantes), confort thermique des
  bâtiments.
- `valoriser_reut_eaux_non_conventionnelles` : récupération des eaux de toiture, réutilisation
  de l'eau du prérefroidisseur de lait, stockage.
- `agir_rejets_qualite` : gestion des eaux blanches et vertes de la salle de traite, points
  d'abreuvement aménagés hors du cours d'eau.
- `agir_grand_cycle` : haies et prairies permanentes, démarche collective de territoire.
- `sensibiliser_former` : plan sécheresse de l'exploitation (abreuvement de secours, stocks).

## 6. Mesures transversales disponibles

Cinq mesures publiées sont transversales (`secteurs: []`) : ACT_AGR_001 sous-comptage par usage,
ACT_AGR_002 audit eau, ACT_AGR_006 récupération d'eau de pluie, ACT_AGR_009 plan sécheresse,
ACT_AGR_010 démarche collective. Toutes pertinentes ici, contrairement aux grandes cultures :
le sous-comptage distingue abreuvement et traite, et l'eau de toiture est à la mesure des
besoins d'abreuvement (environ 600 m³/an pour 1 000 m² de toiture, profil section 5).

**Demande d'évolution, ACT_AGR_006.** La description publiée ne cite plus l'abreuvement
(« chasses d'eau, lavage des sols hors zones alimentaires, nettoyage des extérieurs et
arrosage »), alors que la version archivée le faisait et que c'est l'usage principal de l'eau
de pluie en élevage. Proposition : ajouter « abreuvement des animaux » à la liste des usages,
avec en info la source du décret 2023-835 (usage non domestique libre) et le conseil de
filtration et d'analyse annuelle de la chambre d'agriculture de Bretagne (profil, section 4).
On réutilise la mesure telle quelle en attendant, sans la dupliquer en sectoriel.

**Demande d'évolution, ACT_AGR_001** (relevée par le juge, passage 2). La description cite
« production, nettoyage, cuisine, blanchisserie, chaufferie » : un éleveur n'y reconnaît pas
ses deux postes. Proposition : ajouter « abreuvement, traite » à la liste des exemples.

## 7. Bibliothèque retenue (étape 3) et erreur de vérification attendue

Validé au point d'arrêt de l'étape 2 : douze mesures visibles, sept sectorielles (ACT_HRB_001 à
007) et les cinq transversales réutilisées telles quelles. Les sept catégories portent au moins
une mesure.

Leviers du profil fusionnés : lavage économe et formation des trayeurs (ACT_HRB_002),
prérefroidisseur et recyclage des derniers rinçages (ACT_HRB_005), herbe pâturée et système
fourrager (ACT_HRB_004). Leviers écartés : confort thermique et ombrage (effet sur l'eau
indirect), haies et prairies autour du captage (aucun volume sourcé, le grand cycle est porté
par ACT_AGR_010), réglage des rétrolavages du traitement d'eau (devenu une info d'ACT_HRB_001).

`ingest_referentiel.py --verifier --staging elevage_herbivores` échoue à l'issue de l'étape 3
avec sept erreurs `mesure ACT_HRB_00N : secteurs inconnus ['elevage_herbivores']` : le
vérificateur tire la liste des `sector_id` des questionnaires, écrits à l'étape 4. Rien d'autre
n'est signalé sur les sept mesures.

## 8. Référence de forme

Comme pour `grandes_cultures` : `questionnaire_agriculture.json` est archivé, on s'appuie sur
lui pour les questions agricoles et sur `questionnaire_hotellerie.json` (publié) pour la forme.
Demande d'évolution déjà notée par `grandes_cultures` : mettre à jour la référence dans
`guide_conception.md` et dans le skill.
