# Périmètre du secteur : industrie de la viande et des produits de la mer

Note de périmètre, étape 1 du skill `nouveau-secteur`. Codes demandés : **10.1, 10.2, 10.3, 10.4**.
Statut : brouillon. Périmètre validé le 2026-09-24.

## 1. Résolution des codes demandés

Source : nomenclature NAF rév. 2 embarquée dans le skill (`outils_fiches.py naf`), notes
explicatives INSEE. Comptes d'établissements : table `insee_entreprises`.

| Groupe | Sous-classe | Libellé INSEE | Établissements |
|---|---|---|---|
| 10.1 | 10.11Z | Transformation et conservation de la viande de boucherie | 3 044 |
| 10.1 | 10.12Z | Transformation et conservation de la viande de volaille | 538 |
| 10.1 | 10.13A | Préparation industrielle de produits à base de viande | 1 037 |
| 10.1 | 10.13B | Charcuterie | 3 076 |
| 10.2 | 10.20Z | Transformation et conservation de poisson, de crustacés et de mollusques | 751 |
| 10.3 | 10.31Z | Transformation et conservation de pommes de terre | 163 |
| 10.3 | 10.32Z | Préparation de jus de fruits et légumes | 541 |
| 10.3 | 10.39A | Autre transformation et conservation de légumes | 774 |
| 10.3 | 10.39B | Transformation et conservation de fruits | 1 765 |
| 10.4 | 10.41A | Fabrication d'huiles et graisses brutes | 298 |
| 10.4 | 10.41B | Fabrication d'huiles et graisses raffinées | 121 |
| 10.4 | 10.42Z | Fabrication de margarine et graisses comestibles similaires | 9 |

**Aucun questionnaire ne couvre ces douze codes** (publiés : `agriculture`, division 01 ;
`industrie_laitiere`, 10.51A à 10.52Z ; staging : `industrie_laitiere` seulement).

## 2. Découpage retenu

Le guide (section 2) regroupe deux activités si elles partagent les mêmes postes d'eau et
les mêmes leviers. Les quatre groupes n'ont pas le même premier poste d'eau :

| Groupe | Premier poste d'eau | Leviers propres | Contrainte dominante |
|---|---|---|---|
| 10.1 viande | Nettoyage et désinfection quotidiens des salles, lavage des carcasses, échaudage (porc, volaille) | Raclage et collecte à sec avant lavage, nettoyage basse pression et mousse, recyclage de l'eau d'échaudage ou de refroidissement, collecte du sang | Eau potable imposée au contact des denrées, effluents très chargés (sang, graisses), ICPE abattoirs |
| 10.2 poisson | Lavage, décongélation, glace, saumure | Décongélation économe, recyclage de la glace et de la saumure, eau de mer propre | Effluents salés et azotés, sites littoraux |
| 10.3 fruits et légumes | Lavage, transport hydraulique, blanchiment, épluchage | Recyclage en cascade des eaux de lavage, eau de végétation et condensats (jus), épandage | Pointe saisonnière, terre et matières en suspension |
| 10.4 corps gras | Refroidissement et condensation, vapeur | Circuits fermés de refroidissement, condenseurs, purges de tours | Faible part de nettoyage, peu de sites industriels |

**Décision : viande et produits de la mer dans un même secteur**, fruits et légumes et corps
gras dans des sessions ultérieures. La viande et le poisson partagent le nettoyage sanitaire
de surfaces ouvertes, l'exigence d'eau potable au contact des denrées, le froid et des
effluents protéinés et graisseux. Les postes propres au poisson (décongélation, glace,
saumure, eau de mer) seront traités par des questions conditionnelles et des filtres
`remove`, comme l'abattage côté viande.

## 3. Identité du secteur

| Champ | Valeur |
|---|---|
| `sector_id` | `industrie_viande` |
| `sector_label` | Industrie de la viande et des produits de la mer |
| Préfixe des mesures | `VIA`, soit `ACT_VIA_001` et suivants |
| Préfixe des questions | `via_q01` et suivants |
| Préfixe des fiches | `PREST_VIA_NNN`, `AIDE_VIA_NNN` |

Vérifié : aucune mesure `ACT_VIA_*` ni aucun `sector_id` `industrie_viande` dans
`api/seeds/` et le staging (préfixes existants : `AGR`, `LAI`). Le slug garde « viande »
seul par concision ; c'est le libellé, affiché, qui nomme les deux filières.

## 4. Codes NAF retenus

**10.11Z, 10.12Z, 10.13A, 10.20Z**, soit 5 370 établissements.

Ce qu'ils partagent :

1. **Le nettoyage et la désinfection sont un poste d'eau majeur**, à chaque fin de
   production, sur des surfaces ouvertes (sols, murs, convoyeurs), et non en circuit fermé
   comme la NEP laitière. D'où des leviers de nettoyage propres : raclage à sec, basse
   pression, mousse, formation des équipes.
2. **Le contact eau et denrée impose de l'eau potable** (ou de l'eau de mer propre pour
   certains produits de la mer), ce qui borne la réutilisation.
3. **Les effluents sont très chargés** en sang, graisses et matières protéiques, salés en
   plus pour le poisson ; le prétraitement (dégrillage, dégraissage, flottation) et la
   collecte séparée des coproduits sont des leviers propres.
4. **Le froid est partout** : ressuage des carcasses, glace, stockage, surgélation,
   refroidissement des produits cuits.
5. **Des apporteurs de solutions en partie communs** : centres techniques de la viande et
   des produits de la mer, bureaux d'études en traitement des effluents d'abattoir et de
   mareyage, équipementiers de nettoyage et de froid. À confirmer à l'étape 5.

Trois sous-populations que le questionnaire distinguera par une question d'entrée :
**abattage** (boucherie et volaille : échaudage, lavage des carcasses, sang),
**transformation de viande sans abattage** (découpe, salaisons, charcuterie industrielle :
cuisson, saumurage, refroidissement) et **produits de la mer** (filetage, décongélation,
cuisson des crustacés, fumage, conserve). Les mesures propres à une sous-population seront
retirées pour les autres par un filtre `remove`.

## 5. Codes limites écartés

| Code | Libellé INSEE | Établissements | Raison |
|---|---|---|---|
| 10.13B | Charcuterie | 3 076 | **Décision du 2026-09-24** : charcuterie artisanale associée à la vente au détail (note INSEE), ateliers de quelques personnes. Le questionnaire vise les sites industriels ; 10.13B reste sans questionnaire pour l'instant. |
| 47.22Z | Commerce de détail de viandes et de produits à base de viande | 19 080 | Commerce de détail, sans atelier de transformation dominant. |
| 46.32A | Commerce de gros de viandes de boucherie | 1 087 | Renvoyé par les notes de 10.11Z pour le conditionnement : commerce et logistique frigorifique. |
| 46.32B | Commerce de gros de produits à base de viande | 338 | Même raison. |
| 46.38A | Commerce de gros de poissons, crustacés et mollusques | 1 385 | Mareyage : renvoyé par les notes de 10.20Z pour le conditionnement par les mareyeurs. Usage d'eau réel (glace, lavage) mais activité de commerce ; à reconsidérer si les mareyeurs le demandent. |
| 03.11Z | Pêche en mer | | La transformation à bord des navires de pêche y est rattachée (note de 10.20Z). |
| 10.41A | Fabrication d'huiles et graisses brutes | 298 | Y sont rangées les huiles de poisson (note de 10.20Z), mais le code relève du futur secteur corps gras. |
| 82.92Z | Activités de conditionnement | 2 141 | Conditionnement pour compte de tiers, tous produits confondus. |
| 10.85Z | Fabrication de plats préparés | 2 575 | Exclu de 10.13 et de 10.20 par l'INSEE ; cuisine multi-ingrédients, à traiter avec le groupe 10.8. |
| 10.89Z | Autres produits alimentaires n.c.a. | 2 167 | Fourre-tout (extraits et jus de viande et de poisson, potages). |
| 38.21Z | Traitement des déchets non dangereux | 2 273 | Contient l'équarrissage, mais la population est très majoritairement étrangère à la filière. |
| 15.11Z | Apprêt et tannage des cuirs | 149 | Aval des peaux d'abattoir, procédé chimique sans rapport. |
| 10.91Z, 10.92Z | Aliments pour animaux | 948 | Utilisent des coproduits, procédés secs. |
| 01.4x, 03.2x | Élevages, aquaculture | | Amont ; l'élevage est couvert par `agriculture`. |

## 6. Suite du chantier : les autres groupes demandés

| Secteur à venir | Codes | Établissements | Remarque |
|---|---|---|---|
| `fruits_legumes` (préfixe `FEL` proposé) | 10.31Z, 10.32Z, 10.39A, 10.39B | 3 243 | Lavage, transport hydraulique, campagnes. 10.32Z (jus) partage avec la laiterie les condensats de concentration. |
| `corps_gras` (préfixe `HUI` proposé) | 10.41A, 10.41B, 10.42Z | 428 | Profil refroidissement et vapeur ; 10.41A mêle huileries industrielles et moulins artisanaux. Faible effectif : à confronter à 10.62Z (amidonnerie) avant de lancer. |
| Aucun pour l'instant | 10.13B | 3 076 | Écarté ci-dessus ; candidat à un futur secteur artisanat alimentaire (avec 47.22Z, boulangerie, etc.). |

## 7. Couverture des catégories du plan d'action

Aucune catégorie ne devrait rester vide. Comme pour la laiterie, `agir_rejets_qualite` est
centrale (sang, graisses, sel, prétraitement). `valoriser_reut_eaux_non_conventionnelles`
sera étroite, bornée par l'exigence d'eau potable au contact des denrées : eaux de
refroidissement, dernier rinçage réutilisé en prélavage, eaux pluviales pour le lavage des
camions, des cages et des quais.

## 8. Demande d'évolution des seeds publiés, à appliquer hors de cette session

Les mesures ACT_AGR_001 (compteur par usage), ACT_AGR_002 (audit eau), ACT_AGR_009 (plan de
gestion de l'eau) et ACT_AGR_010 (démarche collective) sont déjà transversales depuis la session
laitière : la bibliothèque `industrie_viande` les réutilise telles quelles.

**ACT_AGR_006, récupération des eaux pluviales, reste agricole** (`secteurs: ["agriculture"]`,
description qui cite les bâtiments agricoles et l'abreuvement). Le guide (section 4.1) la range
parmi les transversales par nature, et le test « retirer le mot du secteur sans fausser la
description » est passé. Demande : passer `secteurs` à `[]` et neutraliser la description
(« eaux de toitures pour les usages sans contact : lavage des sols extérieurs, des véhicules,
appoint »). Pour la viande, le décret n° 2025-239 ouvre aux ICPE l'usage d'eaux impropres à la
consommation pour le lavage des sols et des surfaces extérieures, ce qui rendrait cette mesure
pertinente pour le lavage des quais et des aires de réception. Elle n'est pas intégrée à la
bibliothèque du secteur tant que la bascule n'est pas faite, la cible de douze mesures visibles
étant atteinte.

## 9. Décisions prises au point d'arrêt de l'étape 2

Profil validé le 2026-09-24. Bibliothèque arrêtée à douze mesures visibles : les quatre
transversales et huit mesures sectorielles (leviers L1, L2, L3, L4, L6, L8 fusionné avec L5,
L11, L12). Mis en réserve : L9 (réutilisation des eaux usées traitées de la station, gros sites
sous autorisation préfectorale) et L10 (eau de mer propre, produits de la mer seulement, gain non
chiffré). Écartés : L7 (décongélation sans eau courante, effet non sourcé) et L13 (absorbé par la
mesure transversale de démarche collective).
