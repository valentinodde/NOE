# Table de discrimination : industrie de la viande et des produits de la mer

Étape 4 du skill `nouveau-secteur`. Écrite avant les filtres, comme le demande la section 6
du guide de conception. Chaque ligne devient un filtre de `action_plan_config`.
Statut : brouillon. Date : 2026-09-24.

## Principe de construction

Douze questions, quatre thèmes. Le fil suit le profil eau : ce que le site sait de sa
consommation, puis le premier poste réel (le nettoyage des salles et la désinfection des
couteaux), le process (évacuation des déchets, froid), la réutilisation et les rejets, et
l'anticipation pour finir.

Trois principes :

1. **Pas de question d'activité en entrée.** La note de périmètre prévoyait de séparer
   abattage, transformation et produits de la mer par une question d'entrée. Deux limites
   du moteur l'écartent : toute question répondue entre dans le score sur 3 points, donc
   une question d'activité notée arbitrairement fausserait la maturité ; et une condition
   d'affichage ne sait pas tester une réponse à choix multiples (un site qui abat et
   découpe). La sous-population est donc lue **question par question** : chaque question
   de pratique propre à une activité (couteaux, déchets, sang et saumures, froid) porte une
   option « sans objet » notée 2 en maturité, qui n'ajoute pas la mesure correspondante.
2. **Ne pas confondre la taille et la maturité** (repris de la laiterie). Une option
   « sans objet » vaut 2, pas 0 : ne pas avoir l'usage n'est pas une faiblesse.
3. **Un seuil chiffré qui vient du droit.** 10 000 m3 par an, seuil de l'arrêté du
   30 juin 2023 au-dessus duquel une installation classée doit réduire son prélèvement en
   sécheresse.

## Les douze questions

| Id | Thème | Type | Question | Sous-populations |
|---|---|---|---|---|
| via_q01 | Connaissance et mesure | single | Comment suivez-vous la consommation d'eau du site ? | toutes |
| via_q02 | Connaissance et mesure | numeric | Quelle est votre consommation d'eau annuelle ? | toutes |
| via_q03 | Connaissance et mesure | single | Avez-vous réalisé un audit eau ? | toutes |
| via_q04 | Nettoyage et process | single | Comment sont nettoyées les salles en fin de production ? | toutes |
| via_q05 | Nettoyage et process | single | Comment désinfectez-vous les couteaux aux postes de travail ? | abattage, découpe (sans objet ailleurs) |
| via_q06 | Nettoyage et process | single | Comment évacuez-vous viscères, peaux, parures et déchets des lignes ? | abattage, produits de la mer, découpe |
| via_q07 | Nettoyage et process | single | Comment refroidissez-vous vos produits et vos installations ? | toutes |
| via_q08 | Réutilisation et rejets | single | Réutilisez-vous vos eaux de rinçage ou de refroidissement ? | toutes |
| via_q09 | Réutilisation et rejets | single | Que deviennent le sang, les saumures usées et les jus de cuisson ? | abattage (sang), transformation et mer (saumures, jus) |
| via_q10 | Réutilisation et rejets | single | Comment vos effluents sont-ils traités avant rejet ? | toutes |
| via_q11 | Gouvernance et anticipation | single | Avez-vous analysé votre exposition aux restrictions d'eau ? | toutes |
| via_q12 | Gouvernance et anticipation | single | Participez-vous à une démarche collective sur l'eau ? | toutes |

## Table de discrimination

| Question | Option(s) | Mesures ajoutées | Mesures retirées |
|---|---|---|---|
| via_q01 | `aucun_compteur`, `compteur_general` | ACT_AGR_001 | |
| via_q01 | `compteur_general`, `par_atelier` | ACT_VIA_002 | |
| via_q01 | `aucun_compteur` | | ACT_VIA_006, ACT_AGR_006 |
| via_q02 | ≥ 10 000 m3 par an | ACT_AGR_009 | |
| via_q02 | < 5 000 m3 par an | | ACT_VIA_006, ACT_AGR_010 |
| via_q03 | `jamais`, `envisage`, `ancien` | ACT_AGR_002 | |
| via_q03 | sans réponse (`not_answered`) | ACT_AGR_002 | |
| via_q04 | `jet_sans_raclage`, `raclage_partiel` | ACT_VIA_001 | |
| via_q05 | `debordement_continu`, `remplissage_temporise` | ACT_VIA_003 | |
| via_q06 | `entraine_a_l_eau`, `mixte` | ACT_VIA_005 | |
| via_q07 | `eau_perdue`, `tour_aero` | ACT_VIA_004 | |
| via_q08 | `non`, `envisage`, `ponctuel` | ACT_VIA_006 | |
| via_q08 | `non`, `envisage` | ACT_AGR_006 | |
| via_q09 | `egout`, `collecte_partielle` | ACT_VIA_007 | |
| via_q10 | `aucun_traitement`, `raccorde_sans_convention` | ACT_VIA_008 | |
| via_q11 | `non_analyse`, `informe` | ACT_AGR_009 | |
| via_q11 | `plan_formalise` | | ACT_AGR_009 |
| via_q12 | `non`, `informe` | ACT_AGR_010 | |

`always_include` et `never_include` restent vides.

## Justification ligne par ligne

**via_q01, deux filtres en escalier et un retrait.** Sans aucun compteur : le comptage par
usage seul, car un ratio sans compteur n'a pas de sens et la réutilisation des rinçages
(retirée) viendra après la mesure. Avec le seul compteur général : le comptage par usage et
le ratio par kilo, calculable tout de suite sur la facture. Avec des compteurs par atelier
mais sans ratio : le ratio seul. Le ratio par kilo est le repère de la réglementation des abattoirs (6 litres
par kilo de carcasse) et la preuve exigée pour l'exclusion « réduction de 20 % depuis
2018 » de l'arrêté sécheresse.

**via_q02, le seuil ICPE.** Au-dessus de 10 000 m3 par an, un plan de gestion écrit est
nécessaire (arrêté du 30 juin 2023). Le `remove` de q11 empêche de le proposer à qui l'a
déjà écrit.

**via_q02, le plancher de la réutilisation.** Sous 5 000 m3 par an, un projet déclaré au
préfet et intégré au plan de maîtrise sanitaire ne se justifie pas au regard du gain
(ajouté après le premier passage du juge, persona salaisonnerie). Seuil de conception, à
revoir sur des réponses réelles. La question est notée 1 si elle est remplie : connaître sa
facture est une information qui existe sans être structurée.

**via_q04, le premier poste.** Lavage au jet sans raclage ou raclage partiel : former les
équipes et écrire les consignes. Le niveau 3 (consignes écrites et volumes suivis par
salle) ne reçoit rien. Pas de mention de la NEP : les salles de viande se nettoient à la
main, sur des surfaces ouvertes.

**via_q05, les couteaux.** Seuls les sites qui ont des stérilisateurs à couteaux sont
concernés ; l'option `sans_objet` couvre la charcuterie sans découpe et la plupart des
ateliers de produits de la mer. Le bac à remplissage temporisé est noté 1 : il limite le
débordement sans changer de méthode.

**via_q06, le transport des déchets.** Transport hydraulique ou mixte : proposer le
transport à sec. `sans_objet` pour les ateliers qui reçoivent des pièces prêtes à cuire et
ne produisent pas de flux continu de déchets.

**via_q07, le froid.** Même logique que la laiterie. `sans_eau` (groupes à air) n'ajoute
rien. En enregistrement 2221, `eau_perdue` est une non-conformité, ce que dit
l'avertissement de la mesure.

**via_q08, la réutilisation.** « Quelques usages ponctuels » est noté 1 (existant mais
informel, guide 5.4) et reçoit encore la mesure : la réutilisation organisée et déclarée
est justement ce qu'elle propose.

**via_q09, le sang et les saumures.** La question regroupe les trois liquides les plus
chargés des trois sous-populations, pour ne pas poser trois questions. `sans_objet` couvre
le site qui ne produit aucun des trois (découpe seule, fumage à sec).

**via_q10, la convention de rejet.** `raccorde_sans_convention` noté 1 et non 2 : un site
raccordé sans autorisation de déversement à jour est en infraction.

**via_q11 et via_q12.** Repris de la laiterie, qui les a calibrés : plan de gestion ajouté
si l'exposition n'est pas analysée, retiré si le plan est écrit ; démarche collective
proposée directement, sans filtre de maturité (qui l'avait rendue inévitable côté laitier).

## Couverture des mesures

| Mesure | Filtres qui l'ajoutent | Filtres qui la retirent |
|---|---|---|
| ACT_AGR_001 Compteur par usage | q01 | |
| ACT_AGR_002 Audit eau | q03, q03 sans réponse | |
| ACT_AGR_009 Plan de gestion de l'eau | q02, q11 | q11 |
| ACT_AGR_010 Démarche collective | q12 | q02 |
| ACT_AGR_006 Récupération d'eau de pluie | q08 | q01 |
| ACT_VIA_001 Nettoyage économe | q04 | |
| ACT_VIA_002 Ratio eau par kilo | q01 | |
| ACT_VIA_003 Stérilisateurs à couteaux | q05 | |
| ACT_VIA_004 Circuits de froid fermés | q07 | |
| ACT_VIA_005 Transport à sec des déchets | q06 | |
| ACT_VIA_006 Réutilisation des rinçages | q08 | q01, q02 |
| ACT_VIA_007 Sang et saumures à part | q09 | |
| ACT_VIA_008 Prétraitement des effluents | q10 | |

Les options « sans objet » n'ont pas besoin de filtre `remove` : aucune autre question
n'ajoute la mesure concernée, donc ne pas l'ajouter suffit.

## Topics

| Topic | Libellé | Questions porteuses |
|---|---|---|
| `comptage` | Comptage et suivi des volumes | q01 |
| `audit` | Audit eau | q03 |
| `nettoyage` | Nettoyage et désinfection | q04, q05 |
| `dechets_a_sec` | Évacuation des déchets à sec | q06 |
| `froid` | Refroidissement et circuits | q07 |
| `reutilisation` | Réutilisation des eaux | q08 |
| `coproduits` | Sang, saumures et jus de cuisson | q09 |
| `effluents` | Traitement des effluents | q10 |
| `risque_reglementaire` | Anticipation des restrictions | q11 |
| `collectif` | Démarche collective | q12 |

## Calibrage

Premier passage de la simulation : aucune alerte, médiane 6, 4 % de novices. Après le
premier passage du juge (voir `03_jugement.md`), trois filtres et un barème ont changé.

Simulation retenue (200 profils aléatoires, graine 1, 9 personas) :

- Aucune alerte, code de sortie 0.
- Mesures par plan : minimum 2, médiane 5, maximum 11. Aucun plan vide.
- Fréquence des mesures entre 24 % (démarche collective) et 76 % (audit eau).
- Les dix-huit filtres se déclenchent tous, entre 11 % et 72 %.
- Maturité : 11 % novices, 87 % intermédiaires, **3 % avancés** ; concernement : 5 %
  faible, 89 % moyen, 7 % élevé.

**Écart assumé : 3 % de profils avancés, sous la cible de 5 %.** Il vient du passage de la
question du volume de 2 à 1, qui corrige un défaut plus grave repéré par le juge : un
répondant qui ne sait presque rien était classé avancé. Les profils aléatoires tirent en
outre les options « sans objet » (notées 2) sans cohérence, ce qui concentre les scores au
milieu, comme pour la laiterie. Les personas couvrent toute l'échelle, de 8 % (abattoir
novice) à 94 % (site exemplaire), en passant par 22, 42, 44, 50, 58 et 72 %.

## Décisions du point d'arrêt de l'étape 4 (2026-09-24)

- **Démarche collective retirée sous 5 000 m3 par an** (filtre `f_petit_site_hors_collectif`,
  `remove` en priorité 2), à la demande du juge au second passage. Écart assumé avec la
  laiterie, qui la propose sans condition de taille.
- **ACT_VIA_002 garde un impact de 1** : mesure de connaissance au sens de la grille 4.2.
  Le défaut d'ordre relevé par le juge sur les sites équipés reste documenté dans
  `03_jugement.md`.
- Questionnaire validé.

## Ajout de l'étape 6 : récupération d'eau de pluie (2026-09-24)

La session hôtellerie a publié le 2026-09-24 à 15 h 17 des seeds où ACT_AGR_006 devient
transversale, ce que demandait la section 8 de `00_perimetre.md`. La mesure est alors visible
pour le secteur, et la simulation a levé l'alerte « mesure jamais proposée ».

Décision du point d'arrêt de l'étape 6 : l'intégrer par un filtre. `f_pas_d_eau_de_pluie`
l'ajoute aux sites qui ne réutilisent rien ou l'envisagent seulement (via_q08 `non`,
`envisage`) : les eaux de toiture servent au lavage des quais, des camions et des cages,
usage sans contact que le décret n° 2025-239 ouvre aux ICPE. `f_reutiliser_sans_mesurer`
la retire aussi sans aucun compteur, comme la réutilisation des rinçages.

**Écart assumé : treize mesures visibles au lieu de douze au plus** (guide, section 4.1). La
treizième est imposée par la bascule transversale, pas par un choix de ce secteur.

**Écart assumé : la saurisserie littorale reçoit onze mesures** (cible du novice : sept à
dix). Elle cumule toutes les faiblesses et n'a qu'un compteur général ; l'abattoir novice
reste à dix. Le second passage du juge n'a pas vu cet ajout.
