# Table de discrimination : vins et spiritueux

Étape 4 du skill `nouveau-secteur`. Écrite avant les filtres (guide, section 6). Chaque ligne
devient un filtre de `action_plan_config`.
Statut : brouillon. Date : 2026-09-28.

## Principe de construction

Douze questions, quatre thèmes. Le fil suit le profil eau : ce que l'établissement sait de sa
consommation, puis le premier poste (le nettoyage : transferts, cuves, gestes), le
refroidissement, les deux rejets propres à la filière (effluents de vendange, vinasses), et on
termine par l'anticipation des restrictions et le collectif.

Trois principes :

1. **La taille n'est pas la maturité.** Une petite cave sans réseau de transfert fixe ne sera
   jamais équipée d'un raclage, un liquoriste n'a ni vendange ni vinasses. Les questions
   d'équipement portent une option « sans objet » notée 2 en maturité, qui déclenche un filtre
   `remove` au lieu de faire chuter le score (q05, q08, q09, q10).
2. **Trois profils dans un même code.** Cave (vendange, vinification), distillerie (alambics,
   vinasses), élaborateur par assemblage (liqueurs, vermouths : lavage et conditionnement
   seulement). Les options « sans objet » de q08 à q10 suffisent à les distinguer sans question
   d'activité, qui ne porterait pas de score.
3. **Un seuil réglementaire plutôt qu'un seuil arbitraire.** q03 déclenche à 10 000 m3 par an,
   seuil de l'arrêté du 30 juin 2023 qui impose aux ICPE de réduire leurs prélèvements en
   sécheresse.

## Les douze questions

| Id | Thème | Type | Question |
|---|---|---|---|
| vin_q01 | Connaissance et mesure | single | Comment suivez-vous la consommation d'eau de votre site ? |
| vin_q02 | Connaissance et mesure | multi (`source_eau`) | D'où provient l'eau que vous utilisez ? |
| vin_q03 | Connaissance et mesure | numeric | Quelle est votre consommation d'eau annuelle ? |
| vin_q04 | Connaissance et mesure | single | Avez-vous réalisé un audit eau ou un diagnostic de vos consommations ? |
| vin_q05 | Nettoyage et refroidissement | single | Comment videz-vous les tuyaux avant de les rincer ? |
| vin_q06 | Nettoyage et refroidissement | single | Comment nettoyez-vous vos cuves et votre matériel ? |
| vin_q07 | Nettoyage et refroidissement | single | Vos équipes ont-elles des consignes de nettoyage économe ? |
| vin_q08 | Nettoyage et refroidissement | single | Comment refroidissez-vous vos cuves, pompes à vide ou alambics ? |
| vin_q09 | Effluents et vinasses | single | Comment sont traités les effluents de votre chai, pressurage compris ? |
| vin_q10 | Effluents et vinasses | single | Que deviennent vos vinasses de distillation ? |
| vin_q11 | Gouvernance et anticipation | single | Avez-vous analysé votre exposition aux restrictions d'eau ? |
| vin_q12 | Gouvernance et anticipation | single | Participez-vous à une démarche collective sur l'eau ? |

## Table de discrimination

| Question | Option(s) | Mesures ajoutées | Mesures retirées |
|---|---|---|---|
| vin_q01 | `aucun_compteur`, `compteur_general` | ACT_AGR_001 | |
| vin_q01 | sans réponse (`not_answered`) | ACT_AGR_001 | ACT_AGR_006 |
| vin_q02 | classe contient `reseau` | ACT_AGR_006 | |
| vin_q02 | classe contient `pluie` | | ACT_AGR_006 |
| niveau de maturité | `novice` | | ACT_AGR_006 |
| vin_q02 | classe contient `recyclage` | | ACT_VIN_005 |
| vin_q02 | classe contient `forage` | ACT_AGR_010 | |
| vin_q02 | classe contient `surface` | ACT_AGR_010 | |
| vin_q03 | ≥ 10 000 m3 par an | ACT_AGR_009 | |
| vin_q04 | `jamais`, `envisage`, `ancien` | ACT_AGR_002 | |
| vin_q04 | sans réponse (`not_answered`) | ACT_AGR_002 | |
| vin_q05 | `pousse_eau`, `pousse_gaz` | ACT_VIN_002 | |
| vin_q05 | `sans_reseau` | | ACT_VIN_002 |
| vin_q06 | `jet_froid`, `haute_pression` | ACT_VIN_003 | |
| vin_q06 | `jet_froid`, `haute_pression`, `tetes_lavage` | ACT_VIN_005 | |
| vin_q07 | `aucune`, `orales` | ACT_VIN_001 | |
| vin_q08 | `eau_perdue`, `tour_aero` | ACT_VIN_004 | |
| vin_q08 | `sans_eau` | | ACT_VIN_004 |
| vin_q09 | `sans_traitement`, `raccorde_sans_autorisation`, `deborde_vendanges` | ACT_VIN_006 | |
| vin_q09 | `sans_vendange` | | ACT_VIN_006 |
| vin_q10 | `epandage_sans_plan`, `stockage_insuffisant` | ACT_VIN_007 | |
| vin_q10 | `sans_distillation` | | ACT_VIN_007 |
| vin_q11 | `non_analyse`, `informe` | ACT_AGR_009 | |
| vin_q11 | `plan_formalise` | | ACT_AGR_009 |
| vin_q12 | `participe`, `pilote` | | ACT_AGR_010 |

Les douze mesures visibles apparaissent toutes au moins une fois. `always_include` et
`never_include` restent vides : aucune mesure n'est un point d'entrée obligé.

## Justification ligne par ligne

**vin_q01.** Ni compteur, ni compteur général seul : l'établissement ne sait pas quel poste
consomme, d'où le compteur par usage. L'IFV note qu'en cave le compteur général dessert souvent
aussi la vigne, le caveau ou l'habitation. Le ratio par hectolitre est l'option la plus mûre,
il n'est pas une mesure à part (fusion validée à l'étape 2).

**vin_q02, trois filtres de classe.** Sur réseau public, l'eau de pluie des toitures de chai
peut remplacer l'eau potable pour les sols et les extérieurs : on la propose, sauf si la pluie
figure déjà parmi les sources (retrait prioritaire). Si des eaux de rinçage ou de refroidissement
réutilisées figurent parmi les sources, la cascade est déjà pratiquée : retrait prioritaire.
(Première version : la cascade était ajoutée par l'absence de `recyclage`. Abandonné avant la
première simulation, car peu d'établissements pensent à citer une eau réutilisée comme
« source » : l'inférence était trop faible, et elle donnait trois mesures au persona qui ne
connaît que sa source d'eau.)

**vin_q03.** Au-delà de 10 000 m3 par an, une ICPE doit réduire de 5 à 25 % ses prélèvements
selon le niveau de restriction : le plan de gestion écrit devient nécessaire. Retiré si q11
dit qu'il existe déjà.

**vin_q04.** Pas d'audit, audit envisagé ou de plus de cinq ans : diagnostic. Sans réponse, ne
pas savoir est le motif même du diagnostic (`not_answered`), ce qui garantit une mesure au
persona « je ne sais pas ».

**vin_q05.** La pousse à l'eau peut représenter plus de 30 % des volumes d'une cave (IFV) :
raclage. La poussée au gaz sans obus est une étape intermédiaire (maturité 1), qui laisse du
produit dans les points bas et justifie encore la mesure. Sans réseau de transfert fixe
(tuyaux souples, petits volumes), le raclage ne s'installe pas : retrait.

**vin_q06.** Jet d'eau froide ou nettoyeur haute pression : modernisation du nettoyage des
cuves. Tant que le dernier rinçage n'est pas récupéré (jet,
haute pression, têtes de lavage), la réutilisation en cascade est proposée. La centrale avec
récupération la pratique déjà et ne la déclenche pas.

**vin_q07.** Pas de consignes, ou des habitudes seulement orales : formation aux nettoyages
économes, gain de 10 à 20 % sans investissement (IFV).

**vin_q08.** Eau perdue ou tour aéroréfrigérante : circuit fermé (interdiction du circuit
ouvert pour les caves enregistrées, plafond pour les distilleries déclarées). Groupe froid à
air, ou aucun besoin de refroidissement : retrait.

**vin_q09.** Rejet sans traitement, raccordement sans autorisation de déversement, ou stockage
qui sature en pleine campagne : ACT_VIN_006. Sans pressurage sur le site (assemblage,
conditionnement), les eaux de lavage restent mais le dimensionnement sur la pointe et le
retrait des bourbes et lies n'ont pas d'objet : retrait.

**vin_q10.** Épandage sans plan ou stockage sous la moitié du vin distillé (obligation des
arrêtés 2250) : ACT_VIN_007. Pas de distillation : retrait.

**vin_q11.** Exposition non analysée ou connue sans formalisation : plan de gestion. Plan écrit
existant : retrait, même au-dessus du seuil de q03.

**vin_q12 et prélèvement propre.** ACT_AGR_010 décrit une démarche de partage de la
ressource (PTGE, contrat de nappe, commission locale de l'eau). Elle est proposée à qui prélève
lui-même, en nappe ou en surface (classe `source_eau`), et retirée à qui participe déjà ou
pilote une démarche. Un établissement alimenté par le seul réseau public ne la reçoit pas.
Première version : ajout sur q12 `non`, `informe`, jugé indu par le second passage du juge
pour les petites caves sur réseau (voir `03_jugement.md`).

**Filtre de niveau `f_pluie_pas_novice`.** Un établissement novice doit d'abord compter,
auditer et nettoyer mieux ; l'eau de pluie, qui ne remplace que les usages sans contact avec le
produit, vient ensuite. Ce retrait ramenait le persona novice de 11 à 10 mesures, dans la cible
de sept à dix.

**Filtres ajoutés après le premier passage du juge** (voir `03_jugement.md`) : q01 sans
réponse ajoute le compteur et retire l'eau de pluie (on ne dimensionne pas une cuve sans
connaître ses volumes) ; le retrait de la démarche collective pour les sites sans pressurage,
ajouté après le premier passage, a été remplacé après le second par la règle de prélèvement
propre (ci-dessus, vin_q12).

## Exceptions de barème

**vin_q02 (inventaire des sources).** Réseau 0, forage et surface 0 en maturité (1 en
concernement), pluie et recyclage 2 en maturité (3 en concernement). Aucune option seule
n'atteint 3 : c'est la combinaison pluie et recyclage qui l'atteint (somme plafonnée à 3).
Première version : forage et surface à 1, pluie et recyclage à 3. Les coches s'additionnent
et le tirage aléatoire en coche 40 %, d'où 3 % de novices seulement en simulation (même
constat qu'en hôtellerie). Posséder un forage n'est de toute façon pas une maturité.

**vin_q03 (volume).** Réponse renseignée : 1 en maturité au lieu de 2. Connaître son volume
annuel est un début de suivi, pas une pratique structurée ; à 2, la question tirait tous les
profils vers le niveau intermédiaire.

## Résultats de simulation

Premier passage : zéro alerte, médiane 6 mesures, mais 3 % de novices et 11 mesures pour le
persona novice. Après les deux corrections de barème : zéro alerte, 9 % de novices. Version finale, après les
corrections issues des deux passages du juge : **zéro alerte**, médiane 5 mesures (2 à 9),
aucun plan vide, fréquences des mesures entre 22 % (eau de pluie) et 79 % (audit), les 25
filtres déclenchés entre 9 % et 70 %, maturité **novice 9 %, intermédiaire 85 %, avancé 7 %**.

Écart assumé : novices et avancés restent sous le repère de 10 % que le guide donne comme
signe d'un bon calibrage, mais au-dessus du plancher de 5 %. Même situation que les secteurs
hôtellerie et fruits et légumes. Descendre plus bas les options « sans objet » (notées 2 par
le guide) rendrait la catégorie liquoriste ou cave sans distillation artificiellement novice.

## Alertes de simulation gardées et justifiées

Aucune alerte.
