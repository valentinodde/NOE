# Table de discrimination : huiles et corps gras

Étape 4 du skill `nouveau-secteur`, écrite avant les filtres (guide, section 6). Statut : brouillon, 2026-09-27.

## 1. Architecture du questionnaire

Le secteur réunit trois métiers (voir `00_perimetre.md`, section 3). La première question
fixe le profil du site, et trois questions propres à chaque métier ne s'affichent que pour
lui :

| Profil (`hui_q01`) | Questions communes | Questions propres | Questions vues |
|---|---|---|---|
| `moulin_olive` | q02 à q06, q13, q14 | q07 lavage, q08 décanteur, q09 margines | 11 |
| `pression_froid` | q02 à q06, q13, q14 | aucune | 8 |
| `trituration_raffinage` | q02 à q06, q13, q14 | q10 refroidissement, q11 réutilisation, q12 effluents | 11 |
| `fonte_animale` | q02 à q06, q13, q14 | q10, q11, q12 | 11 |

Le fichier compte donc quatorze questions, mais aucun répondant n'en voit plus de onze,
ce qui respecte la cible de huit à douze du guide. C'est un usage plus large des
conditions que « avec parcimonie » (guide 5.5) : c'est assumé, car sans elles un moulin
de trois personnes répondrait sur l'hexane et un fondoir sur les margines. Une question
masquée ne compte pas dans le score, ce qui est ici le comportement voulu.

**Exception de barème, `hui_q01`.** La question de profil est factuelle : ses quatre
options portent le même score, 0 en maturité et en concernement, comme la question
d'usages de l'hôtellerie. Elle n'offre donc pas d'option à 3, par construction. Un
premier essai à 2 (le score des options « sans objet ») donnait 3 % de novices et
classait « avancé » le persona qui ne répond qu'au profil et au volume : le score
constant de 0 décale tout le monde de la même façon et corrige les deux.
Le vérificateur signale que `hui_q01` n'alimente aucun filtre : elle agit par les
conditions d'affichage de six questions, ce qui est son seul rôle.
Si le profil est sauté (« je ne sais pas »), aucune question propre ne s'affiche et le
plan se limite aux mesures transversales et au nettoyage.

## 2. Table

| Question | Option(s) | Mesures ajoutées | Mesures retirées |
|---|---|---|---|
| hui_q02 suivi | `aucun_compteur`, `compteur_general` | ACT_AGR_001 | |
| hui_q02 suivi | sans réponse (priorité 3) | ACT_AGR_001 | |
| hui_q01 profil | `moulin_olive` | | ACT_AGR_006 |
| hui_q03 sources (classe `source_eau`) | `pluie` absente | ACT_AGR_006 | |
| hui_q04 volume | 10 000 m3/an ou plus | ACT_AGR_009 | |
| hui_q04 volume | moins de 10 000 m3/an | | ACT_HUI_005 |
| hui_q04 volume | 100 000 m3/an ou plus | | ACT_AGR_006 |
| hui_q04 volume | moins de 500 m3/an | | ACT_AGR_001, ACT_AGR_002 |
| hui_q05 audit | `jamais`, `envisage`, `ancien` | ACT_AGR_002 | |
| hui_q05 audit | sans réponse (priorité 3) | ACT_AGR_002 | |
| hui_q06 nettoyage | `jet_sans_raclage`, `raclage_partiel` | ACT_HUI_004 | |
| hui_q07 lavage des olives | `eau_courante`, `vidange_journaliere` | ACT_HUI_001 | |
| hui_q08 procédé du moulin | `trois_phases` | ACT_HUI_003 | |
| hui_q09 margines et grignons | `rejet_reseau_milieu`, `sans_plan` | ACT_HUI_006 | |
| hui_q10 refroidissement | `eau_perdue`, `mixte` | ACT_HUI_002 | |
| hui_q11 réutilisation | `non`, `envisage`, `ponctuel` | ACT_HUI_005 | |
| hui_q12 effluents | `aucun_traitement`, `separateur_seul` | ACT_HUI_007 | |
| hui_q13 restrictions | `non_analyse`, `informe` | ACT_AGR_009 | |
| hui_q13 restrictions | `plan_formalise` | | ACT_AGR_009 |
| hui_q14 collectif | `non`, `informe` | ACT_AGR_010 | |

Chaque mesure du secteur apparaît au moins une fois : ACT_HUI_001 à 007, et les cinq
transversales ACT_AGR_001, 002, 006, 009, 010.

## 3. Choix de conception

- **Un seul filtre `remove` sur le profil**, ajouté après le premier passage du juge : l'eau de pluie retirée aux moulins (eau potable obligatoire). Pour le reste, les mesures propres à un métier ne sont
  ajoutées que par des questions qui ne s'affichent que pour lui : un moulin ne peut pas
  recevoir ACT_HUI_002, 005 ou 007, un site industriel ne peut pas recevoir ACT_HUI_001,
  003 ou 006. Un filtre `remove` sur `hui_q01` serait redondant.
- **Le décanteur (q08) n'ajoute ACT_HUI_003 qu'au trois phases.** La presse
  traditionnelle produit peu de margines (0,4 à 0,5 m3 par tonne contre jusqu'à 2 en
  continu, Hamdi 1991) : passer de la presse au deux phases est un changement de modèle
  que l'on ne propose pas au titre de l'eau. L'option `presse` est notée 2.
- **Refroidissement (q10) : la tour aéroréfrigérante compte comme circuit fermé**, car
  ACT_HUI_002 vise l'eau perdue, pas la tour (différence avec l'industrie laitière).
- **Seuil de 10 000 m3 par an** (q04) : seuil de l'arrêté sécheresse ICPE du 30 juin
  2023, au-delà duquel un plan de réduction par niveau de gravité devient nécessaire.
  Le même seuil écarte la réutilisation (ACT_HUI_005), dont l'étude et la procédure
  préfectorale ne s'amortissent pas sur de petits volumes.
- **ACT_AGR_006 (eau de pluie)** est ajoutée à tout site qui ne récupère pas encore
  d'eau de pluie, sauf les moulins (eau potable obligatoire pour tous leurs usages) et
  les sites de 100 000 m3 par an ou plus (volume récupérable négligeable). Elle vise les
  usages sans contact (sols, aires, camions, eau d'incendie, appoint des tours).
- **Seuil de 500 m3 par an pour le compteur par usage et l'audit** : en dessous, un seul
  usage réel (nettoyage, sanitaires), relever le compteur général suffit et un audit
  externe coûterait plus que la facture. Exception : si le suivi ou l'audit est laissé
  sans réponse, les filtres `not_answered` (priorité 3) l'emportent sur ce retrait, pour
  que le répondant qui ne sait rien garde ses mesures d'entrée.
- **Le volume annuel (`hui_q04`) vaut 1 en maturité**, et non 2 comme dans les secteurs
  voisins : connaître sa facture est un minimum, et à 2 un répondant qui ne connaît que
  ce chiffre se retrouvait mieux classé qu'un novice qui répond à tout.

## 4. Alertes de simulation conservées

Simulation sur 200 profils aléatoires, graine 1 (`rapport_simulation.md`) : zéro alerte.
Version finale : médiane de 3 mesures par plan, 1 % de plans vides (un profil incohérent,
voir `03_jugement.md`), mesure la plus fréquente à 57 % (plan de gestion), tous les
filtres déclenchés, maturité novice 19 %, intermédiaire 77 %, avancé 5 %.

Écarts aux cibles du guide (section 7), conservés :

- **ACT_HUI_003 (décanteur deux phases) à 3 %, sous la cible de 10 %, et
  `f_trois_phases` à 3 %, sous 5 %.** C'est un effet de la structure : `hui_q08` n'est
  visible que pour les moulins (23 % des profils aléatoires, un profil sur quatre), et
  une seule de ses quatre options déclenche la mesure. Parmi les moulins simulés, la
  fréquence est d'environ 13 %. Élargir le déclencheur à la presse ou au deux phases et
  demie proposerait un changement de procédé sans gain d'eau (section 3).
- **ACT_HUI_005 et ACT_HUI_006 à 11 %**, juste au-dessus de la cible, pour la même raison
  (questions propres à un métier).
- **Avancé à 5 %**, au plancher de 5 % et sous les 10 % souhaités. Les
  profils aléatoires cochent en moyenne peu de sources alternatives et la question de
  profil pèse 0 pour tous ; relever un barème pour gonfler ce chiffre dégraderait le
  classement des personas, qui est juste.
