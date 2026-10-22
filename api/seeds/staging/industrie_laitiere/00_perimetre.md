# Périmètre du secteur : industrie laitière

Note de périmètre, étape 1 du skill `nouveau-secteur`. Code NAF de départ : **10.51C**.
Statut : brouillon. Périmètre validé le 2026-09-22.

## 1. Résolution du code de départ

Sources : fiche INSEE de la sous-classe 10.51C (nomenclature NAF rév. 2) et fichier
officiel `naf2008_liste_n5.xls`, liste des sous-classes de niveau 5.

| Niveau | Code | Libellé INSEE |
|---|---|---|
| Section | C | Industrie manufacturière |
| Division | 10 | Industries alimentaires |
| Groupe | 10.5 | Fabrication de produits laitiers |
| Classe | 10.51 | Exploitation de laiteries et fabrication de fromage |
| Sous-classe | **10.51C** | **Fabrication de fromage** |

Contenu de 10.51C : fromages frais et caillebotte, pâtes molles, pressées et persillées,
fromages fondus, râpés ou en poudre, affinage pour compte propre. Exclut l'affinage pour
compte de tiers, que la fiche INSEE renvoie en 52.10B.

**Aucun questionnaire existant ne couvre 10.51C.** Le seul questionnaire publié est
`agriculture` (29 codes, tous en division 01) et le staging était vide.

La base `insee_entreprises` stocke les codes au format NAF rév. 2 avec le point
(`10.51C`), donc le même format que `naf_codes` dans les seeds.

## 2. Identité du secteur

| Champ | Valeur |
|---|---|
| `sector_id` | `industrie_laitiere` |
| `sector_label` | Industrie laitière |
| Préfixe des mesures | `LAI`, soit `ACT_LAI_001` et suivants |
| Préfixe des questions | `lait_q01` et suivants |

Vérifié : aucune mesure `ACT_LAI_*` n'existe, ni dans `api/seeds/`, ni en base, où seules
les dix mesures `ACT_AGR_*` sont enregistrées. Aucun `sector_id` `industrie_laitiere`
en base non plus.

Réserve sur le libellé : « Industrie laitière » est le nom que la filière se donne, mais
il ne recouvre pas exactement 10.52Z, où les sorbets purs fruits n'ont pas d'ingrédient
laitier. L'alternative serait le libellé INSEE du groupe, « Fabrication de produits
laitiers », plus exact mais moins parlant. Choix assumé : « Industrie laitière », avec
des questions rédigées pour qu'un glacier s'y retrouve.

## 3. Codes NAF retenus

Le groupe 10.5 en entier, soit 5 sous-classes et 2 651 établissements en base.

| Code | Libellé INSEE | Établissements |
|---|---|---|
| 10.51A | Fabrication de lait liquide et de produits frais | 298 |
| 10.51B | Fabrication de beurre | 27 |
| **10.51C** | **Fabrication de fromage** | **1 202** |
| 10.51D | Fabrication d'autres produits laitiers | 156 |
| 10.52Z | Fabrication de glaces et sorbets | 968 |

Ce que ces cinq activités partagent, et qui fonde le questionnaire :

1. **Le nettoyage en place (NEP) est le premier poste d'eau**, devant le process
   lui-même. C'est la conséquence directe du plan de maîtrise sanitaire : circuits
   fermés à rincer, prérinçage, détergent alcalin, rinçage, acide, rinçage final.
2. **Le froid est partout** : réception du lait, maturation, stockage, surgélation
   pour les glaces. Donc des condenseurs et souvent des tours aéroréfrigérantes.
3. **Les eaux non conventionnelles disponibles sont les mêmes** : les condensats
   d'évaporation et de séchage, appelés eaux blanches ou eaux de vache, que la
   réglementation française autorise désormais à réutiliser sous conditions. C'est le
   levier propre à cette filière, et il n'existe nulle part ailleurs dans l'agroalimentaire.
4. **Les effluents sont lactés** : charge organique très élevée, lactosérum à valoriser
   plutôt qu'à rejeter, autorisation de rejet et redevance pollution.
5. **Les apporteurs de solutions et les aides sont les mêmes** : CNIEL et interprofessions
   laitières, Actalia, les ENIL, les équipementiers de NEP et de séchage.

10.52Z (glaces et sorbets) est rattaché au groupe 10.5 par l'INSEE, et la plupart des
fabricants partent d'un mix lait ou crème. Le process, pasteurisation, maturation, NEP,
froid, est celui d'une laiterie. Il reste dans le périmètre.

## 4. Codes limites écartés

| Code | Libellé INSEE | Établissements | Raison |
|---|---|---|---|
| 01.41Z | Élevage de vaches laitières | 48 735 | Amont de la filière, déjà couvert par le questionnaire `agriculture`. |
| 01.45Z | Élevage d'ovins et de caprins | 28 242 | Même raison. |
| 52.10B | Entreposage et stockage non frigorifique | 10 589 | Code de rattachement de l'affinage pour compte de tiers selon la fiche INSEE de 10.51C. Activité de service, dont la population est très majoritairement étrangère au lait. |
| 46.33Z | Commerce de gros de produits laitiers, œufs, huiles et matières grasses comestibles | 1 113 | Commerce, pas de transformation, donc pas de NEP de process. |
| 10.86Z | Fabrication d'aliments homogénéisés et diététiques | 236 | Comprend des laits infantiles, mais le code couvre surtout la diététique non laitière. |
| 10.89Z | Fabrication d'autres produits alimentaires n.c.a. | 2 167 | Fourre-tout du groupe 10.8, sans process dominant commun. |

**Le cas de la fromagerie fermière.** C'est la frontière la plus délicate du périmètre.
Un éleveur qui transforme son lait à la ferme est, dans la plupart des cas, déclaré sous
son code d'élevage (01.41Z, 01.45Z) et non en 10.51C, parce que l'INSEE retient l'activité
principale. Il sera donc dirigé vers le questionnaire `agriculture`, qui l'interrogera sur
l'irrigation et les cultures, et pas sur son atelier de transformation. Le questionnaire
laitier vise les établissements dont la transformation est l'activité principale.

Ce n'est pas un défaut de ce périmètre, mais une limite du routage par code NAF unique.
À reverser au chantier « double activité » si la question se pose sur d'autres filières.

## 5. Décisions prises au point d'arrêt de l'étape 1

Trois arbitrages ont été rendus. Les deux premiers dessinent la suite du chantier.

**Un périmètre resserré plutôt qu'un secteur agroalimentaire large.** L'option d'un
questionnaire couvrant les 25 sous-classes à procédés humides des divisions 10 et 11
(environ 20 976 établissements : viande, poisson, légumes, corps gras, sucre, plats
préparés, brasserie) a été écartée au profit du seul groupe laitier. Le questionnaire
gagne en précision, il peut nommer la NEP, le lactosérum et les eaux blanches sans
périphrase. En contrepartie, les autres familles agroalimentaires restent sans
questionnaire et demanderont chacune leur session.

**La filière vins et spiritueux reste un secteur à part.** 11.01Z à 11.04Z, 4 550
établissements. Trois raisons : une activité concentrée sur quelques semaines par an, ce
qui change la question du stockage et du dimensionnement du traitement des effluents ;
un adossement fréquent à l'exploitation viticole déjà couverte par `agriculture` (01.21Z),
donc un risque de doublon de parcours ; des apporteurs de solutions et des aides propres
(IFV, œnologues, interprofessions) sans recouvrement avec le reste de l'agroalimentaire.
**Secteur `filiere_vin` à construire dans une session ultérieure.**

## 6. Couverture des catégories du plan d'action

Les sept catégories sont fixes. Aucune ne devrait rester vide ici, et deux changent de
poids par rapport à l'agriculture :

- `agir_rejets_qualite` devient centrale (effluents lactés, lactosérum, autorisation de
  rejet, redevance pollution), alors qu'elle n'a aucune mesure côté agriculture.
- `valoriser_reut_eaux_non_conventionnelles` porte ici les condensats et le recyclage des
  eaux de rinçage, pas la retenue de stockage.

## 7. Demande d'évolution des seeds publiés, à appliquer hors de cette session

Les dix mesures `ACT_AGR_*` portent toutes `secteurs: ["agriculture"]` : **aucune mesure
transversale (`secteurs: []`) n'existe aujourd'hui**. Or le guide (section 4.1) désigne
cinq mesures comme transversales par nature, et quatre d'entre elles existent déjà sous
une forme agricole.

**Option A retenue : basculer ces quatre mesures en transversales.** Dans
`api/seeds/actions_agriculture.json`, passer `secteurs` à `[]` et réécrire les
descriptions pour en retirer le vocabulaire agricole.

| Mesure | Action demandée |
|---|---|
| ACT_AGR_001 Compteur par usage | `secteurs: []`. La description cite « irrigation, process, usage sanitaire et nettoyage » : remplacer par une formulation neutre, du type « par usage et par atelier ». |
| ACT_AGR_002 Audit eau | `secteurs: []`. Le titre dit « de l'exploitation » et la description « la chambre d'agriculture » : neutraliser les deux. |
| ACT_AGR_009 Plan de gestion de l'eau | `secteurs: []`. Description déjà presque neutre, seule la mention des zones de répartition des eaux est à garder comme exemple et non comme cas général. |
| ACT_AGR_010 Démarche collective (PTGE, ASA) | `secteurs: []`. L'ASA est un dispositif agricole : la garder en exemple, ajouter les contrats de nappe et les démarches de bassin versant côté industrie. |

**Fait le 2026-09-22.** Le propriétaire du dépôt a autorisé explicitement l'exception et
le basculement a été appliqué dans `api/seeds/actions_agriculture.json` : les quatre
mesures portent désormais `secteurs: []`, leurs descriptions sont neutralisées et les deux
ressources restées propres au monde agricole (chambre d'agriculture, FranceAgriMer) sont
annotées comme telles plutôt que supprimées. Le diff porte sur 34 lignes et rien d'autre.
Sauvegarde du fichier d'origine dans le scratchpad de la session, `api/seeds/` n'étant pas
suivi par git. `ingest_referentiel.py --verifier` passe sans nouvel avertissement.

L'ingestion en base n'a pas été relancée : à faire par une personne après relecture, avec
`conda run -n noe-env python api/ingest_referentiel.py`.

En conséquence, la bibliothèque `actions_industrie_laitiere.json` ne recrée **pas**
d'équivalent `ACT_LAI_*` de ces quatre mesures : elle s'appuie sur les transversales.

## 8. Erreur de vérification attendue à l'étape 3, levée à l'étape 4

`ingest_referentiel.py --verifier --staging industrie_laitiere` échoue à l'issue de
l'étape 3 avec huit erreurs de la forme :

```
mesure ACT_LAI_001 : secteurs inconnus ['industrie_laitiere']
```

C'est une conséquence mécanique de l'ordre des étapes voulu par le guide, qui fait écrire
les mesures avant les questions. Le vérificateur construit la liste des `sector_id`
valides à partir des questionnaires. Tant que `questionnaire_industrie_laitiere.json`
n'existe pas, aucune mesure ne peut déclarer appartenir à ce secteur.

Rien d'autre n'est signalé : format, efforts, horizons, catégories, infos complémentaires
et sources des huit mesures passent les contrôles, et l'avertissement « categories sans
aucune mesure ['agir_rejets_qualite'] » a disparu, cette catégorie étant désormais
couverte par ACT_LAI_007 et ACT_LAI_008.

Cette erreur doit disparaître dès la première exécution du vérificateur à l'étape 4. Si
elle persiste alors, c'est un vrai défaut et non plus un effet d'ordre.
