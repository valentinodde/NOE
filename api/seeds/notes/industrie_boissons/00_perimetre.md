# Périmètre du secteur : brasserie et boissons sans alcool

Note de périmètre, étape 1 du skill `nouveau-secteur`. Demande de départ : **boissons hors vins
et spiritueux**. Statut : brouillon. Périmètre validé le 2026-10-15 (quatre codes, malt compris).

## 1. Résolution du code de départ

Source : nomenclature NAF rév. 2 du skill (`outils_fiches.py naf 11`, notes explicatives INSEE).

| Niveau | Code | Libellé INSEE |
|---|---|---|
| Section | C | Industrie manufacturière |
| Division | 11 | Fabrication de boissons |
| Groupe | 11.0 | Fabrication de boissons |

La division compte neuf sous-classes. Cinq sont déjà couvertes par `vins_spiritueux`
(11.01Z à 11.04Z, publié). **Les quatre autres ne sont couvertes par aucun questionnaire**,
publié ou en staging : 11.05Z, 11.06Z, 11.07A, 11.07B (`couvert_par` vide).

La note de périmètre `vins_spiritueux` (section 2, 2026-09-28) réservait déjà ces quatre codes
à une session ultérieure, sous le nom `industrie_boissons` et le préfixe `BOI`.

## 2. Identité du secteur

| Champ | Valeur |
|---|---|
| `sector_id` | `industrie_boissons` |
| `sector_label` | Brasserie et boissons sans alcool |
| Préfixe des mesures | `BOI`, soit `ACT_BOI_001` et suivants |
| Préfixe des questions | `boi_q01` et suivants |
| Préfixe des fiches | `PREST_BOI_NNN`, `AIDE_BOI_NNN` |

Vérifié : aucune mesure `ACT_BOI_*` ni aucun `sector_id` `industrie_boissons` dans
`api/seeds/` et le staging. Préfixes déjà pris : AGR, ART, FRL, HOT, HUI, LAI, VIA, VIN.

Le libellé dit ce que l'utilisateur reconnaîtra : la bière (et le malt qui la précède), les eaux
embouteillées et les sodas, sirops et autres boissons sans alcool. « Industrie des boissons »
serait trompeur, puisque le vin et les spiritueux ont leur propre questionnaire.

## 3. Codes NAF retenus

| Code | Libellé INSEE | Établ. en base | Dont employeurs |
|---|---|---|---|
| 11.05Z | Fabrication de bière | 3 050 | 966 |
| 11.06Z | Fabrication de malt | 37 | 20 |
| 11.07A | Industrie des eaux de table | 166 | 105 |
| 11.07B | Production de boissons rafraîchissantes | 504 | 135 |
| **Total** | | **3 757** | **1 226** |

Comptes tirés de `insee_entreprises` le 2026-10-15.

**La population est d'abord artisanale.** 81 % des établissements sont des brasseries, et parmi
celles dont la tranche d'effectif est connue, 89 % ont moins de 10 salariés (814 sur 910). Les
eaux de table sont l'inverse : peu de sites, souvent de 20 à plus de 1 000 salariés (Vittel,
Contrexéville, Volvic, Évian). Le questionnaire doit parler aux deux : une microbrasserie qui
lave ses fûts à la main et une usine d'embouteillage avec NEP automatisée.

Ce que ces quatre activités partagent, et qui fonde le questionnaire :

1. **L'eau est un ingrédient**, voire le produit entier (eaux de table). La qualité de la source
   conditionne le produit, ce qui rend la dépendance à la ressource plus directe que dans le
   reste de l'agroalimentaire.
2. **Le ratio eau consommée par volume produit** (hl d'eau par hl de bière ou de boisson) est
   l'indicateur de la filière, connu et comparé entre sites.
3. **Le nettoyage en place (NEP), le lavage et le rinçage des contenants** (bouteilles, fûts,
   canettes) sont les premiers postes hors ingrédient.
4. **Le traitement thermique et le froid** : brassage et refroidissement du moût, pasteurisation
   en tunnel ou flash, fermentation et garde au froid, tours aéroréfrigérantes.
5. **Des effluents organiques sucrés** (bière, moût, sirops, levures, drêches), rejetés le plus
   souvent au réseau avec convention de rejet.
6. **Des apporteurs communs** : l'IFBM (Institut français des boissons, de la brasserie et de la
   malterie) couvre la bière et le malt, les équipementiers de NEP, de soutirage et de
   pasteurisation sont les mêmes pour la bière et les sodas.

**Le cas du malt (11.06Z) est le plus discutable.** Le maltage n'est pas un brassage : son
premier poste d'eau est la trempe de l'orge, et il n'a ni soutirage ni contenant à laver. Je
propose de le garder, pour trois raisons : 37 établissements seulement, trop peu pour un
questionnaire à part ; un apporteur technique commun (IFBM) ; des leviers qui recoupent ceux de
la brasserie (réutilisation des eaux de process, refroidissement, effluents organiques). Une
option « sans objet » sur les questions de conditionnement et un filtre `remove` traiteront le
maltage comme le persona « non concerné par l'usage principal ». S'il est écarté, 11.06Z reste
sans questionnaire.

**Les eaux de table (11.07A)** n'ont ni brassage ni sirop, mais elles ont le conditionnement,
la NEP, le rinçage des bouteilles, et surtout une dépendance totale à une seule ressource
souterraine protégée. Elles appellent un levier propre (protection de l'impluvium), qui relève
de `agir_grand_cycle` et ne concerne qu'elles.

## 4. Codes limites écartés

| Code | Libellé INSEE | Établ. | Raison |
|---|---|---|---|
| 11.01Z à 11.04Z | Spiritueux, vins, cidres, autres boissons fermentées | 4 550 | Déjà couverts par `vins_spiritueux`, non repris. |
| 10.32Z | Préparation de jus de fruits et légumes | | Renvoyé par la note de 11.07B ; déjà couvert par `industrie_fruits_legumes`. |
| 10.51A | Fabrication de lait liquide et de produits frais | | Renvoyé par la note de 11.07B (boissons à base de lait) ; déjà couvert par `industrie_laitiere`. Les laits aromatisés restent en 11.07B selon l'INSEE. |
| 10.83Z | Transformation du thé et du café | 1 347 | Renvoyé par la note de 11.07B. Procédés surtout secs (torréfaction, conditionnement), sans NEP ni soutirage de liquide. |
| 10.89Z | Fabrication d'autres produits alimentaires n.c.a. | 2 167 | Comprend les levures (renvoi de 11.05Z), mais c'est le fourre-tout du groupe 10.8, sans process dominant commun. |
| 35.30Z | Production et distribution de vapeur et d'air conditionné | 3 244 | Renvoyé par la note de 11.07A pour la fabrication de glace : activité énergétique, hors boissons. |
| 46.34Z | Commerce de gros de boissons | 13 235 | Négoce ; l'INSEE y renvoie l'embouteillage simple sans élaboration. |
| 82.92Z | Activités de conditionnement | 2 141 | Embouteillage pour compte de tiers, prestation de service. |
| 56.30Z | Débits de boissons | | Un bar-brasserie qui brasse sur place est déclaré sous son activité principale de débit de boissons. Limite du routage par code NAF unique. |
| 01.11Z | Culture de céréales (orge de brasserie) ; 01.28Z (houblon) | | Amont agricole, déjà couvert par `agriculture`. |

## 5. Couverture des catégories du plan d'action

À confirmer à l'étape 3 avec le profil eau. Pressenti :
- `suivre_comprendre_maitriser` : compteur par usage (transversal), audit (transversal), ratio hl/hl.
- `ameliorer_efficacite_hydrique` : NEP, rinceuses et laveuses de bouteilles, pasteurisateur en boucle, refroidissement en circuit fermé.
- `changer_process_pratiques` : changements de procédé (par exemple récupération de l'eau chaude de refroidissement du moût pour le brassin suivant).
- `valoriser_reut_eaux_non_conventionnelles` : réutilisation des eaux de rinçage et de pasteurisation, eau de pluie (transversal).
- `agir_rejets_qualite` : effluents sucrés, levures et drêches hors réseau.
- `sensibiliser_former` : plan de gestion de l'eau (transversal), gestes de nettoyage.
- `agir_grand_cycle` : démarche collective (transversal), protection de l'impluvium (eaux de table).

## 6. Mesures transversales disponibles

Cinq mesures publiées sont transversales (`secteurs: []`) : ACT_AGR_001 compteur par usage,
ACT_AGR_002 audit eau, ACT_AGR_006 récupération d'eau de pluie, ACT_AGR_009 plan de gestion de
l'eau, ACT_AGR_010 démarche collective. Elles seront réutilisées à l'étape 3 sans équivalent
`ACT_BOI_*`.

**Constat à reprendre à l'étape 3 (demande d'évolution, pas de modification des seeds publiés).**
Trois mesures sectorielles ont déjà été réécrites quatre ou cinq fois avec un vocabulaire de
filière : les gestes de nettoyage des équipes (ACT_LAI_001, ACT_VIA_001, ACT_VIN_001,
ACT_FRL_001), le ratio eau par unité produite (ACT_LAI_002, ACT_VIA_002, ACT_FRL_002,
ACT_HOT_007) et les circuits de froid fermés (ACT_LAI_004, ACT_VIA_004, ACT_VIN_004,
ACT_FRL_004, ACT_HUI_002). Le test du guide (section 4.1) sera appliqué à chacune avant d'en
créer une cinquième version `ACT_BOI_*`.

## 7. Erreur de vérification attendue à l'étape 3, levée à l'étape 4

Comme pour les secteurs précédents, `ingest_referentiel.py --verifier --staging
industrie_boissons` signalera à l'issue de l'étape 3 des erreurs `secteurs inconnus
['industrie_boissons']` et des mesures « jamais citée par un filtre », tant que
`questionnaire_industrie_boissons.json` n'est pas écrit. Elles doivent disparaître à l'étape 4.

## 8. Décisions de l'étape 3 (bibliothèque de mesures)

Douze mesures visibles, le plafond du guide : quatre transversales (ACT_AGR_001 compteur par
usage, ACT_AGR_002 audit eau, ACT_AGR_009 plan de gestion de l'eau, ACT_AGR_010 démarche
collective) et huit mesures ACT_BOI_001 à 008. Les sept catégories sont couvertes.

- **ACT_AGR_006 (eau de pluie) n'est pas reprise**, choix validé au point d'arrêt de l'étape 2 :
  l'eau d'ingrédient doit être potable, les usages sans contact sont secondaires, et la
  réutilisation est portée par ACT_BOI_006 (eau du refroidisseur de moût). Précédent :
  `industrie_laitiere`. Le vérificateur avertira « mesures transversales jamais citées » si un
  filtre ne la cite pas : c'est attendu.
- **L'optimisation de la NEP (ACT_BOI_003) est classée `changer_process_pratiques`** : son geste
  principal est la réduction du nombre de phases du cycle, un changement de procédé, plutôt
  qu'un équipement (MTD 7, cas Licorne du profil).
- Les deux leviers rejets du profil (tri des levures et drêches, prétraitement) sont fusionnés
  dans ACT_BOI_007.
- Les rinceuses et laveuses de bouteilles ne deviennent pas une mesure : aucun gain chiffré par
  une source acceptée.

**Demande d'évolution des seeds publiés, à trancher hors de cette session.** Le test du guide
(section 4.1) appliqué aux trois familles de copies sectorielles :

| Famille | Copies existantes | Nouvelle copie ici | Avis |
|---|---|---|---|
| Ratio eau par unité produite | ACT_LAI_002, ACT_VIA_002, ACT_FRL_002, ACT_HOT_007 | ACT_BOI_001 | Transversale par nature : retirer le mot du secteur ne fausse pas la description, seule l'unité change (hl, kg, tonne, nuitée). Proposition : une mesure transversale « Suivre un ratio de consommation par unité produite », l'unité étant donnée par la question qui la déclenche. |
| Gestes de nettoyage des équipes | ACT_LAI_001, ACT_VIA_001, ACT_VIN_001, ACT_FRL_001 | ACT_BOI_002 | Transversale pour l'agroalimentaire : candidate à `secteurs` multiple ou à `[]`. Rejoint la piste « équipement de nettoyage économe » notée lors de la revue des solutions transversales. |
| Circuits de froid fermés | ACT_LAI_004, ACT_VIA_004, ACT_VIN_004, ACT_FRL_004, ACT_HUI_002 | ACT_BOI_005 | Proche mais pas identique : ACT_BOI_005 vise les purges des tours et l'adiabatique, pas seulement la boucle fermée. À fusionner seulement si les copies existantes sont réécrites ensemble. |

En attendant cet arbitrage, la bibliothèque crée des mesures ACT_BOI, comme les secteurs précédents.
