# Périmètre du secteur : grandes cultures

Note de périmètre, étape 1 du skill `nouveau-secteur`. Code NAF de départ : **01.11Z**.
Statut : brouillon. Périmètre validé le 2026-10-15.

## 1. Résolution du code de départ

Source : nomenclature NAF rév. 2 du skill (`outils_fiches.py naf 01.11Z --notes`, notes explicatives INSEE).

| Niveau | Code | Libellé INSEE |
|---|---|---|
| Section | A | Agriculture, sylviculture et pêche |
| Division | 01 | Culture et production animale, chasse et services annexes |
| Groupe | 01.1 | Cultures non permanentes |
| Sous-classe | **01.11Z** | **Culture de céréales (à l'exception du riz), de légumineuses et de graines oléagineuses** |

Comprend : blé, maïs grain, orge, sorgho et autres céréales, légumineuses (pois, féveroles,
lentilles, pois chiches), oléagineux (colza, tournesol, soja, lin graine).
Ne comprend pas : riz (01.12Z), maïs doux (01.13Z), maïs fourrager (01.19Z), fruits
oléagineux (01.26Z).

Aucune sous-classe de la division 01 n'est couverte par un questionnaire publié ou en staging
(`couvert_par` vide partout). L'ancien questionnaire `agriculture`, qui couvrait les 29
sous-classes de la division, est archivé dans `api/seeds/archives/agriculture_placeholders/`.

## 2. Découpage de la division 01

Arbitrage du 2026-10-15 : la division est découpée en six questionnaires, parce que les postes
d'eau et les leviers diffèrent d'une famille à l'autre (guide, section 2).

| Questionnaire | Codes | Premier poste d'eau |
|---|---|---|
| **`grandes_cultures`** (cette session) | 01.11Z, 01.12Z, 01.14Z, 01.15Z, 01.16Z, 01.19Z | Irrigation de cultures annuelles en rotation, souvent absente |
| `viticulture` | 01.21Z | Cave quand le domaine vinifie, irrigation émergente |
| `elevage_herbivores` | 01.41Z à 01.45Z, 01.50Z | Abreuvement, traite, fourrages |
| `maraichage_horticulture` | 01.13Z, 01.28Z, 01.30Z | Irrigation localisée, serres, lavage des légumes |
| `arboriculture` | 01.22Z à 01.27Z, 01.29Z | Irrigation localisée, aspersion antigel, station fruitière |
| `elevage_hors_sol` | 01.46Z, 01.47Z, 01.49Z | Abreuvement, lavage des bâtiments, brumisation |

## 3. Identité du secteur

| Champ | Valeur |
|---|---|
| `sector_id` | `grandes_cultures` |
| `sector_label` | Grandes cultures |
| Préfixe des mesures | `GCU`, soit `ACT_GCU_001` et suivants |
| Préfixe des questions | `gcu_q01` et suivants |
| Préfixe des fiches | `PREST_GCU_NNN`, `AIDE_GCU_NNN` |

Vérifié : aucune mesure `ACT_GCU_*` ni aucun `sector_id` `grandes_cultures` dans `api/seeds/`
et le staging. Préfixes déjà pris : AGR (mesures transversales historiques), ART, BOI, FRL,
HOP, HOT, HUI, LAI, VIA, VIN.

## 4. Codes NAF retenus

Établissements actifs dans `insee_entreprises` (France entière), employeurs selon
`caractereemployeuretablissement`.

| Code | Libellé INSEE | Établ. | Dont employeurs | Dont outre-mer |
|---|---|---|---|---|
| 01.11Z | Culture de céréales, de légumineuses et de graines oléagineuses | 141 381 | 10 361 | 244 |
| 01.12Z | Culture du riz | 123 | 34 | 3 |
| 01.14Z | Culture de la canne à sucre | 5 705 | 544 | 5 702 |
| 01.15Z | Culture du tabac | 170 | 31 | 0 |
| 01.16Z | Culture de plantes à fibres | 267 | 11 | 13 |
| 01.19Z | Autres cultures non permanentes | 9 321 | 746 | 521 |
| **Total** | | **156 967** | **11 727** | **6 483** |

Ce que ces activités partagent, et qui fonde le questionnaire :

1. **Des cultures annuelles en rotation**, sur des surfaces grandes (dizaines à centaines
   d'hectares), où le choix de l'assolement, des variétés et des dates de semis est le
   premier levier sur le besoin en eau.
2. **Une irrigation par aspersion** (enrouleur, pivot, couverture intégrale) quand elle
   existe, sur une partie seulement des exploitations et des surfaces. Une grande part du
   secteur cultive en sec : c'est le persona « sans l'usage principal », traité par une option
   « je n'irrigue pas » et des filtres `remove`.
3. **Un prélèvement encadré** : autorisation ou déclaration, volume attribué par l'organisme
   unique de gestion collective (OUGC) dans les bassins en déficit, compteur obligatoire,
   arrêtés sécheresse qui coupent l'irrigation par tours d'eau ou en totalité.
4. **Une ressource souvent partagée** : forage individuel, prise en rivière, réseau collectif
   d'irrigation (ASA, compagnies d'aménagement), retenues de substitution ou collinaires.
5. **Des sols** dont la réserve utile, l'enrichissement en matière organique et la couverture
   conditionnent la résistance à la sécheresse, cultures irriguées ou non.
6. **Les mêmes apporteurs** : chambres d'agriculture, Arvalis et Terres Inovia, coopératives,
   installateurs d'irrigation, fabricants de sondes et d'outils de pilotage, agences de l'eau.

### Cas particuliers dans le périmètre

- **01.12Z, riz** : la riziculture de Camargue (90 établissements sur 123 dans les
  Bouches-du-Rhône) irrigue par submersion avec l'eau du Rhône, un mode sans équivalent dans le
  reste du secteur. Population trop faible pour un questionnaire propre, elle répondra « autre
  mode d'irrigation ».
- **01.14Z, canne à sucre** : la quasi-totalité des établissements est outre-mer (La Réunion,
  Guadeloupe, Martinique). Les indicateurs de l'onglet Constat ne couvrent que la métropole,
  mais le questionnaire reste pertinent (irrigation de la canne sur la côte ouest de La Réunion).
- **01.19Z** réunit les fourrages (maïs fourrager, luzerne, betteraves fourragères) et les
  **fleurs coupées**. Les fourrages relèvent des grandes cultures, les fleurs de l'horticulture.
  Le code ne peut être scindé, on le rattache ici parce que les fourrages y dominent
  (luzerne déshydratée de Champagne, producteurs spécialisés). Les floriculteurs recevront un
  questionnaire peu adapté : limite connue du routage par code NAF.

## 5. Codes limites écartés

| Code | Libellé INSEE | Établ. | Raison |
|---|---|---|---|
| 01.13Z | Culture de légumes, de melons, de racines et de tubercules | 31 104 | Prévu dans `maraichage_horticulture`. Il comprend pourtant les betteraves sucrières et les pommes de terre, cultures de rotation des grandes cultures. Une exploitation céréalière qui en cultive reste le plus souvent en 01.11Z et sera interrogée ici sur l'irrigation de ces cultures. |
| 01.50Z | Culture et élevage associés | 56 364 | Prévu dans `elevage_herbivores` : l'élevage (bâtiments, abreuvement, traite) organise l'eau de l'exploitation. |
| 01.26Z | Culture de fruits oléagineux | | Olives : culture pérenne, prévue en `arboriculture`. |
| 01.61Z | Activités de soutien aux cultures | 31 390 | Travaux pour le compte de tiers (entreprises de travaux agricoles, CUMA). Comprend l'exploitation de systèmes d'irrigation pour autrui, mais l'eau consommée est celle des clients. |
| 01.63Z, 01.64Z | Traitement primaire des récoltes, traitement des semences | 62 (01.64Z) | Opérations de conditionnement sans culture, plus proches de l'industrie. |
| 36.00Z | Captage, traitement et distribution d'eau | 2 817 | Comprend l'exploitation des canaux d'irrigation : distributeurs d'eau, pas irrigants. Les ASA et compagnies d'aménagement seront des prestataires ou partenaires, pas des répondants. |
| 46.21Z | Commerce de gros de céréales, tabac non manufacturé, semences et aliments pour le bétail | 8 018 | Coopératives et négoces de collecte : silos et séchage, peu d'eau. Ce sont des apporteurs de conseil pour le secteur, pas des répondants. |
| 10.61A | Meunerie | | Industrie de première transformation. |

## 6. Couverture prévisible des catégories du plan d'action

À confirmer à l'étape 3 après le profil eau.
- `suivre_comprendre_maitriser` : compteur et suivi des volumes, pilotage de l'irrigation (sondes, bilans hydriques, outils d'aide à la décision).
- `ameliorer_efficacite_hydrique` : matériel d'irrigation (régulation des enrouleurs, pivots basse pression, entretien et réglage).
- `changer_process_pratiques` : assolement et variétés moins exigeants en eau, couverts et sols (réserve utile, matière organique).
- `valoriser_reut_eaux_non_conventionnelles` : stockage hivernal, réutilisation d'eaux usées traitées (REUT) en irrigation.
- `agir_rejets_qualite` : probablement réduite (fuites d'azote et de produits phytosanitaires vers les nappes, aires de lavage du pulvérisateur). À trancher au profil.
- `agir_grand_cycle` : gestion collective (OUGC, projet de territoire), haies et infiltration.
- `sensibiliser_former` : formation au pilotage de l'irrigation.

## 7. Mesures transversales disponibles

Cinq mesures publiées sont transversales (`secteurs: []`) : ACT_AGR_001 compteur par usage,
ACT_AGR_002 audit eau, ACT_AGR_006 récupération d'eau de pluie, ACT_AGR_009 plan sécheresse
gradué, ACT_AGR_010 démarche collective. Leur réutilisation sera examinée à l'étape 3. Le
compteur et la récupération des eaux de toiture ont peu de sens tels quels pour un irrigant
(compteur déjà obligatoire sur le prélèvement, eau de toiture marginale face aux volumes
d'irrigation) : leur pertinence sera vérifiée sur le profil.

## 8. Référence de forme

Le guide cite `questionnaire_agriculture.json` comme exemple de référence, mais ce fichier est
archivé (`api/seeds/archives/agriculture_placeholders/`). On s'appuie sur lui pour les
questions d'irrigation et sur `questionnaire_hotellerie.json` (publié, à jour des contrôles)
pour la forme. Demande d'évolution : mettre à jour la référence dans `guide_conception.md` et
dans le skill.

## 9. Bibliothèque retenue (étape 3) et erreur de vérification attendue

Validé au point d'arrêt de l'étape 2 : douze mesures visibles, dix sectorielles (ACT_GCU_001 à
010) et deux transversales réutilisées telles quelles, ACT_AGR_009 (plan sécheresse gradué, qui
absorbe le levier L7 du profil) et ACT_AGR_010 (démarche collective, levier L15). Les sept
catégories portent au moins une mesure.

Transversales non retenues, qui resteront visibles mais jamais citées par un filtre
(avertissement du vérificateur, assumé) : ACT_AGR_001 compteur (déjà obligatoire pour un
irrigant, son relevé passe dans ACT_GCU_001), ACT_AGR_002 audit eau (remplacé par le diagnostic
du matériel ACT_GCU_002), ACT_AGR_006 eau de pluie de toiture (marginale face aux volumes
d'irrigation). Leviers du profil écartés : L12 réutilisation des eaux usées traitées (moins de
1 % des volumes, projets portés par les collectivités, devenu une info d'ACT_GCU_008) et L14
fuites d'azote et de phytosanitaires (obligation réglementaire, trop vague pour être portée
par un prestataire).

`ingest_referentiel.py --verifier --staging grandes_cultures` échoue à l'issue de l'étape 3 avec
dix erreurs `mesure ACT_GCU_0NN : secteurs inconnus ['grandes_cultures']` : le vérificateur
tire la liste des `sector_id` des questionnaires, écrits à l'étape 4. Rien d'autre n'est
signalé sur les dix mesures.

Plusieurs sources de mesures (ACT_GCU_002, 003, 004, 009) sont des PDF lus par extrait au
profil : leur `extrait` le signale, ils sont à relire avant publication.
