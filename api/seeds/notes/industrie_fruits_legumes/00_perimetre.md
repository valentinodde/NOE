# Périmètre du secteur : transformation de fruits et légumes

Note de périmètre, étape 1 du skill `nouveau-secteur`. Code NAF de départ : **10.3**.
Statut : brouillon. Périmètre validé le 2026-09-25.

## 1. Résolution du code de départ

Source : nomenclature NAF rév. 2 embarquée dans le skill (`outils_fiches.py naf 10.3`).

| Niveau | Code | Libellé INSEE |
|---|---|---|
| Section | C | Industrie manufacturière |
| Division | 10 | Industries alimentaires |
| Groupe | **10.3** | **Transformation et conservation de fruits et légumes** |

10.3 est un groupe : il porte quatre sous-classes, dont aucune n'est couverte par un
questionnaire publié (`agriculture`, `hotellerie`, `industrie_laitiere`,
`industrie_viande`) ni par un questionnaire en staging.

## 2. Identité du secteur

| Champ | Valeur |
|---|---|
| `sector_id` | `industrie_fruits_legumes` |
| `sector_label` | Transformation de fruits et légumes |
| Préfixe des mesures | `FRL`, soit `ACT_FRL_001` et suivants |
| Préfixe des questions | `frl_q01` et suivants |

Vérifié : aucune mesure `ACT_FRL_*` dans `api/seeds/` ni dans le staging (préfixes
existants : `AGR`, `HOT`, `LAI`, `VIA`).

## 3. Codes NAF retenus

Le groupe 10.3 en entier, soit 4 sous-classes et 3 243 établissements en base
(`insee_entreprises`).

| Code | Libellé INSEE | Établissements |
|---|---|---|
| 10.31Z | Transformation et conservation de pommes de terre (frites surgelées, purées déshydratées, chips, épluchage industriel) | 163 |
| 10.32Z | Préparation de jus de fruits et légumes (y compris concentrés et nectars) | 541 |
| 10.39A | Autre transformation et conservation de légumes (conserve, surgelé, déshydraté, 4e gamme, tofu) | 774 |
| 10.39B | Transformation et conservation de fruits (conserve, surgelé, séché, confitures, compotes, fruits à coque) | 1 765 |

Ce que ces quatre activités partagent, et qui fonde un questionnaire commun :

1. **Le lavage de la matière première brute est le premier poste d'eau.** Les fruits et
   légumes arrivent des champs avec terre, cailloux et résidus : lavage, transport
   hydraulique (goulottes), épierrage, puis lavage après épluchage ou découpe. C'est ce
   qui distingue le secteur des laiteries et des abattoirs, où la matière arrive propre.
2. **Les traitements thermiques consomment de l'eau de refroidissement** : blanchiment,
   épluchage à la vapeur, appertisation (refroidissement des boîtes et bocaux),
   pasteurisation des jus et compotes, surgélation.
3. **Une production saisonnière** : les campagnes de légumes de conserve et de fruits
   tombent de juin à octobre, c'est-à-dire en pleine période d'arrêtés sécheresse. Le
   risque de restriction pèse sur le pic d'activité, pas sur une moyenne annuelle.
4. **Des effluents chargés en terre, amidon et sucres**, et des coproduits (épluchures,
   pulpes, marcs) valorisables en alimentation animale ou méthanisation.
5. **Des eaux non conventionnelles propres au secteur** : l'eau de végétation des fruits
   et légumes, récupérable lors de la concentration des jus et de la déshydratation
   (condensats d'évaporation), et les eaux de lavage recyclables en cascade (dernier
   rinçage vers le prélavage).
6. **Les mêmes apporteurs de solutions et les mêmes relais** : le CTCPA (centre technique
   de la conservation des produits agricoles), l'ADEPALE et ses syndicats (légumes,
   fruits, pomme de terre), l'UNIJUS pour les jus, les équipementiers de lavage,
   blanchiment et évaporation.

Les jus (10.32Z) et la pomme de terre (10.31Z) ont été examinés à part : les deux
partagent le lavage d'entrée, le traitement thermique et les effluents chargés ; les jus
ajoutent la concentration, dont les condensats sont un levier de réutilisation que les
conserveries de légumes n'ont pas toujours. Les questions devront donc prévoir une option
« sans concentration ni évaporation ». Rien ne justifie de les séparer.

## 4. Codes limites écartés

| Code | Libellé INSEE | Établissements | Raison |
|---|---|---|---|
| 01.13Z | Culture de légumes, de melons, de racines et de tubercules | 31 104 | Amont de la filière, couvert par `agriculture`. |
| 01.63Z | Traitement primaire des récoltes | 95 | Couvert par `agriculture`. Renvoyé par la note de 10.39A et 10.39B (« préparation en vue de la commercialisation primaire ») : lavage et tri sans transformation. |
| 10.85Z | Fabrication de plats préparés | 2 575 | Renvoyé par 10.31Z, 10.39A et 10.39B. Mélange viande, poisson, pâtes et légumes : pas de lavage de matière brute dominant, et un process de cuisine assemblée. Secteur à part. |
| 10.82Z | Fabrication de cacao, chocolat et de produits de confiserie | 2 599 | Renvoyé par 10.39B pour les fruits confits au sucre, mais le code est dominé par le chocolat et la confiserie, procédés secs. |
| 10.84Z | Fabrication de condiments et assaisonnements | 438 | Vinaigre, moutarde, sauces : procédés de mélange sans lavage de légumes bruts. Les olives et cornichons sont, eux, en 10.39A et restent dans le périmètre. |
| 10.89Z | Fabrication d'autres produits alimentaires n.c.a. | 2 167 | Renvoyé pour les concentrés artificiels. Fourre-tout sans procédé dominant, déjà écarté par `industrie_laitiere`. |
| 10.62Z | Fabrication de produits amylacés | 25 | Comprend la féculerie de pomme de terre, grosse consommatrice d'eau, mais c'est une industrie lourde (amidonnerie par voie humide, hydrolyse) dont les leviers et les ordres de grandeur sont ceux de la chimie du végétal. 25 établissements. |
| 11.07B | Production de boissons rafraîchissantes | 504 | Renvoyé par 10.32Z. L'eau y est un ingrédient (sirops, sodas), sans lavage de fruits frais. Relève d'un futur secteur boissons. |
| 11.03Z | Fabrication de cidre et de vins de fruits | 276 | Pressurage de pommes proche des jus, mais fermentation alcoolique : réservé au secteur `filiere_vin` décidé lors de la session `industrie_laitiere`. |
| 46.31Z | Commerce de gros de fruits et légumes | 5 815 | Commerce et mûrisserie, sans transformation. |

## 5. Couverture des catégories du plan d'action

Aucune catégorie ne devrait rester vide :

- `agir_rejets_qualite` est centrale (terre, amidon, sucres, pH des eaux de blanchiment
  et de soude d'épluchage chimique).
- `valoriser_reut_eaux_non_conventionnelles` porte le recyclage des eaux de lavage en
  cascade et les condensats d'évaporation.
- La gouvernance porte l'anticipation des restrictions pendant la campagne.

## 6. Mesures transversales

À vérifier à l'étape 3 : les quatre mesures `ACT_AGR_001`, `002`, `009`, `010` ont été
basculées en transversales le 2026-09-22 (voir la note de périmètre de
`industrie_laitiere`). La bibliothèque de ce secteur les réutilisera sans les réécrire.

Vérifié à l'étape 3 (2026-09-25) : les cinq transversales du guide existent (`ACT_AGR_001`,
`002`, `006`, `009`, `010`, toutes `secteurs: []`). **Aucune demande d'évolution.**
`ACT_AGR_007` (diversifier les sources) a été examinée et écartée pour ce secteur : l'eau au
contact des denrées doit être potable (règlement 852/2004), la diversification y passe par la
réutilisation (`ACT_FRL_006`, `ACT_FRL_007`) et non par un nouveau prélèvement.

La récupération d'eau de pluie (`ACT_AGR_006`) reste visible, mais ne vaut ici que pour les
usages sans contact avec le produit.

## 7. Erreur de vérification attendue à l'étape 3, levée à l'étape 4

`ingest_referentiel.py --verifier --staging industrie_fruits_legumes` renvoie huit erreurs
« mesure ACT_FRL_00N : secteurs inconnus ['industrie_fruits_legumes'] » tant que
`questionnaire_industrie_fruits_legumes.json` n'existe pas. Rien d'autre n'est signalé pour
les mesures FRL.
