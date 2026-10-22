# Périmètre du secteur : artisanat alimentaire

Note de périmètre, étape 1 du skill `nouveau-secteur`. Code demandé : **10.13B** (charcuterie).
Statut : brouillon. Périmètre validé le 2026-10-15.

## 1. Point de départ

10.13B a été écarté de `industrie_viande` le 2026-09-24 (voir `staging/industrie_viande/00_perimetre.md`,
section 5) : charcuterie artisanale associée à la vente au détail, alors que le questionnaire viande vise
des sites industriels (ICPE, prétraitement des effluents, station d'épuration). La note proposait déjà un
futur secteur « artisanat alimentaire » réunissant charcuterie et boulangerie. C'est ce secteur qu'on
construit ici.

Source des libellés et notes : nomenclature NAF rév. 2 embarquée dans le skill (`outils_fiches.py naf`).
Comptes : table `insee_entreprises` (tranche d'effectif de l'établissement), emplois estimés de
`bassins_activite`. Dépendance à l'eau : score `operations.quantity.final_score` de `sectors`.

## 2. Taille des établissements

| Code | Libellé INSEE | Établissements | Sans salarié | 1 à 9 | 10 à 49 | 50 et plus | Dépendance |
|---|---|---|---|---|---|---|---|
| 10.13A | Préparation industrielle de produits à base de viande (couvert par `industrie_viande`) | 1 037 | 443 | 209 | 260 | 125 | 3 |
| **10.13B** | Charcuterie | 3 076 | 1 570 | 1 229 | 274 | 3 | 2 |
| **10.71C** | Boulangerie et boulangerie-pâtisserie | 41 764 | 18 345 | 17 638 | 5 756 | 25 | 2 |
| **10.71D** | Pâtisserie | 9 493 | 6 867 | 2 138 | 470 | 18 | 2 |

10.13B a le profil de la boulangerie, pas celui de 10.13A : neuf établissements sur dix ont moins de dix
salariés, trois seulement dépassent cinquante. Les notes INSEE des trois codes disent la même chose :
« fabrication à caractère artisanal associée à la vente au détail ».

## 3. Identité du secteur

| Champ | Valeur |
|---|---|
| `sector_id` | `artisanat_alimentaire` |
| `sector_label` | Artisanat alimentaire |
| Préfixe des mesures | `ART`, soit `ACT_ART_001` et suivants |
| Préfixe des questions | `art_q01` et suivants |
| Préfixe des fiches | `PREST_ART_NNN`, `AIDE_ART_NNN` |

Vérifié : aucune mesure `ACT_ART_*` ni aucun `sector_id` `artisanat_alimentaire` dans `api/seeds/` et le
staging (préfixes existants : `AGR`, `FRL`, `HOT`, `HUI`, `LAI`, `VIA`, `VIN`).

## 4. Codes NAF retenus

**10.13B, 10.71C, 10.71D**, soit 54 333 établissements, dont environ 26 700 employeurs et 207 000
emplois salariés estimés.

Ce qu'ils partagent, à confirmer par le profil eau (étape 2) :

1. **Un laboratoire de fabrication attenant à une boutique**, alimenté presque toujours par le réseau
   public, avec un seul compteur pour le laboratoire, la boutique et souvent le logement.
2. **Le nettoyage du laboratoire et la plonge** (bacs, ustensiles, plaques, cuves, machines) comme
   poste d'eau régulier, chaque jour de production.
3. **Le froid** (chambres froides, cellules de refroidissement, chambres de pousse contrôlée en
   boulangerie) et la question des équipements refroidis par eau perdue.
4. **Des rejets gras et chargés vers le réseau d'assainissement**, avec séparateur à graisses et,
   selon la collectivité, une autorisation ou une convention de déversement.
5. **Des interlocuteurs communs** : chambres de métiers et de l'artisanat, organisations
   professionnelles de la boulangerie et de la charcuterie, installateurs en froid et en équipement de
   laboratoire. À confirmer à l'étape 5.

Deux sous-populations que le questionnaire distinguera par une question d'entrée :
**charcuterie** (cuisson des jambons et pâtés en cuve, saumurage, fumage, refroidissement après
cuisson) et **boulangerie-pâtisserie** (eau de pétrissage refroidie, plonge, lave-batterie, froid et
pousse). Les mesures propres à une sous-population seront retirées pour l'autre par un filtre `remove`.

**Conséquence pour la conception** : des entreprises de une à dix personnes, sans responsable
environnement. Questions courtes, vocabulaire du métier, mesures à faible investissement en majorité,
et un plan d'action qui ne suppose ni ICPE ni station d'épuration.

## 5. Codes limites écartés

| Code | Libellé INSEE | Établissements | Raison |
|---|---|---|---|
| 10.71A | Fabrication industrielle de pain et de pâtisserie fraîche | 1 497 | Caractère industriel explicite dans la note INSEE (156 sites de 50 salariés et plus). À traiter avec la biscuiterie (10.72Z) et les autres produits céréaliers. |
| 10.71B | Cuisson de produits de boulangerie | 2 865 | Terminaux de cuisson à partir de pâtons surgelés : pas de fabrication, pas de pétrissage, peu de nettoyage. Dépendance à l'eau faible (score 1). |
| 10.82Z | Cacao, chocolat et confiserie | 2 599 | Contient les chocolatiers et confiseurs artisanaux (la note de 47.24Z y renvoie la vente auto-produite), mais aussi 73 sites industriels de 50 salariés et plus et la transformation du cacao. À décider avec le groupe 10.8. |
| 10.52Z | Glaces et sorbets | | Les glaciers artisanaux y sont, mais le code est déjà couvert par `industrie_laitiere`. |
| 10.13A | Préparation industrielle de produits à base de viande | 1 037 | Déjà couvert par `industrie_viande`. |
| 47.22Z | Commerce de détail de viandes (boucheries, boucheries-charcuteries) | 19 080 | Commerce de détail. Beaucoup de boucheries fabriquent de la charcuterie en laboratoire, mais l'activité principale est la vente de viande. Dépendance faible (score 1). Candidat à un ajout ultérieur si le questionnaire leur parle. |
| 47.24Z | Commerce de détail de pain, pâtisserie et confiserie | 6 814 | Vente de produits non auto-produits (note INSEE), sans fabrication. |
| 10.85Z | Plats préparés | 2 575 | Traiteurs industriels et fabricants de plats cuisinés, profil différent. À traiter avec le groupe 10.8. |
| 56.10A, 56.21Z | Restauration traditionnelle, traiteurs organisateurs de réceptions | | Services de restauration, hors industrie alimentaire. |

## 6. Suite du chantier agroalimentaire

Ce qui reste sans questionnaire dans les divisions 10 et 11 après ce secteur, pour mémoire :

| Groupe | Codes | Remarque |
|---|---|---|
| Produits céréaliers industriels | 10.61A, 10.61B, 10.62Z, 10.71A, 10.72Z, 10.73Z | Meunerie à sec, amidonnerie très consommatrice (10.62Z, score 3). |
| Groupe 10.8 | 10.81Z, 10.82Z, 10.83Z, 10.84Z, 10.85Z, 10.86Z, 10.89Z | Sucrerie, chocolat, café, condiments, plats préparés : plusieurs profils, découpage à faire. |
| Aliments pour animaux | 10.91Z, 10.92Z | Procédés surtout secs. |
| Boissons hors vins et spiritueux | 11.05Z, 11.06Z, 11.07A, 11.07B | Brasserie, malterie, eaux, sodas : forte dépendance (score 3). |

## 7. Couverture des catégories du plan d'action

Aucune catégorie ne devrait rester vide, avec deux réserves à vérifier au profil eau :
`valoriser_reut_eaux_non_conventionnelles` sera étroite (eau potable au contact des denrées, peu de
surface de toiture exploitable en centre-ville) et `agir_rejets_qualite` portera surtout sur le
séparateur à graisses et la convention de déversement, pas sur un prétraitement industriel.

## 8. Décisions prises au point d'arrêt de l'étape 2

Profil validé le 2026-10-15. Bibliothèque arrêtée à douze mesures visibles : les cinq transversales
(ACT_AGR_001 compteur par usage, ACT_AGR_002 audit eau, ACT_AGR_006 eau de pluie, ACT_AGR_009 plan de
gestion de l'eau, relié au risque de coupure d'eau potable, ACT_AGR_010 démarche collective) et sept
mesures sectorielles (leviers L1, L2, L4, L5, L7, L10, L11 du profil). Mis en réserve : L6 (osmose
inverse, peu de boulangeries concernées, gain non chiffré) et L8 (refroidissement des produits cuits à
l'eau courante, pratique non documentée chez les artisans). L3, L9 et L12 sont portés par les mesures
transversales.

## 9. Demande d'évolution des seeds publiés, à appliquer hors de cette session

Le levier L2 (relever son compteur et réparer les fuites) passe le test du guide (section 4.1) : on peut
retirer le mot du secteur sans fausser la description. Il est écrit ici en mesure sectorielle
(ACT_ART_002), comme l'hôtellerie l'a fait avec ACT_HOT_002, faute de mesure transversale équivalente.
Demande : créer une mesure transversale « relevé du compteur et recherche de fuites » et y rattacher les
deux. Même remarque pour la formation aux gestes économes, réécrite par chaque secteur (ACT_LAI_001,
ACT_VIA_001, ACT_FRL_001, ACT_VIN_001, ACT_ART_001).

Troisième demande, issue du jugement des personas (étape 4) : la description de ACT_AGR_010
(démarche collective) ne cite que des dispositifs de grande échelle (PTGE, contrat de nappe,
commission locale de l'eau, association syndicale). Pour les artisans, ajouter les opérations des
chambres de métiers (éco-défis, opérations collectives avec une agence de l'eau), sans
vocabulaire sectoriel.
