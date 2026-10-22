# Table de discrimination : industrie laitière

Étape 4 du skill `nouveau-secteur`. Écrite avant les filtres, comme le demande la section 6
du guide de conception. Chaque ligne devient un filtre de `action_plan_config`.
Statut : brouillon. Date : 2026-09-22.

## Principe de construction

Douze questions, quatre thèmes. Le fil est celui du profil eau : on part de ce que
l'entreprise sait de sa consommation, on passe au premier poste réel (le nettoyage) puis
au deuxième (le froid), on aborde ensuite les deux gisements propres à la filière
(le lactosérum et les eaux issues du lait), les rejets, et on termine par l'anticipation.

Trois principes ont guidé le découpage :

1. **Ne jamais confondre la taille et la maturité.** Un atelier fermier ne sera jamais
   équipé d'une NEP automatisée, et cela ne fait pas de lui un mauvais élève. Les
   questions d'équipement (q05, q07, q09) portent donc une option « sans objet » ou
   « non équipé » notée 2 en maturité, pas 0, et déclenchent un filtre `remove` plutôt
   que de faire chuter le score.
2. **Le lactosérum n'existe pas partout.** 10.52Z (glaces et sorbets) n'en produit pas.
   q08 et q09 portent chacune une option d'exclusion structurelle.
3. **Un seuil chiffré vaut mieux qu'une appréciation.** Le seuil de q03 est 10 000 m3 par
   an, qui n'est pas un chiffre arbitraire : c'est celui à partir duquel l'arrêté du
   30 juin 2023 impose à une ICPE de réduire son prélèvement en période de sécheresse.

## Les douze questions

| Id | Thème | Type | Question |
|---|---|---|---|
| lait_q01 | Connaissance et mesure | single | Comment suivez-vous votre consommation d'eau ? |
| lait_q02 | Connaissance et mesure | multi (`source_eau`) | D'où provient l'eau que vous utilisez sur le site ? |
| lait_q03 | Connaissance et mesure | numeric | Quelle est votre consommation d'eau annuelle ? |
| lait_q04 | Connaissance et mesure | single | Avez-vous réalisé un audit eau ou un diagnostic de vos consommations ? |
| lait_q05 | Nettoyage et froid | single | Comment sont nettoyés vos circuits et vos équipements de production ? |
| lait_q06 | Nettoyage et froid | single | Pratiquez-vous le prénettoyage à sec avant de rincer à l'eau ? |
| lait_q07 | Nettoyage et froid | single | Comment refroidissez-vous vos produits et vos installations ? |
| lait_q08 | Valorisation et rejets | single | Que devient votre lactosérum (ou votre babeurre) ? |
| lait_q09 | Valorisation et rejets | single | Votre site produit-il des condensats ou des perméats, et qu'en faites-vous ? |
| lait_q10 | Valorisation et rejets | single | Comment sont traités vos effluents avant rejet ? |
| lait_q11 | Gouvernance et anticipation | single | Avez-vous analysé votre exposition aux restrictions d'eau ? |
| lait_q12 | Gouvernance et anticipation | single | Participez-vous à une démarche collective sur l'eau à l'échelle du territoire ? |

## Table de discrimination

| Question | Option(s) | Mesures ajoutées | Mesures retirées |
|---|---|---|---|
| lait_q01 | `aucun_compteur`, `compteur_general` | ACT_AGR_001 | |
| lait_q01 | `aucun_compteur`, `compteur_general`, `par_atelier` | ACT_LAI_002 | |
| lait_q02 | classe ne contient pas `recyclage_process` | ACT_LAI_003 | |
| lait_q03 | ≥ 10 000 m3 par an | ACT_AGR_009 | |
| lait_q03 | < 10 000 m3 par an | | ACT_LAI_005 |
| lait_q04 | `jamais`, `envisage`, `ancien` | ACT_AGR_002 | |
| lait_q04 | sans réponse (`not_answered`) | ACT_AGR_002 | |
| lait_q05 | `nep_temps` | ACT_LAI_003 | |
| lait_q05 | `manuel_seul` | ACT_LAI_001 | ACT_LAI_003 |
| lait_q06 | `jamais`, `parfois` | ACT_LAI_001 | |
| lait_q07 | `eau_perdue`, `tour_aero` | ACT_LAI_004 | |
| lait_q07 | `sans_eau` | | ACT_LAI_004 |
| lait_q08 | `reseau_effluents`, `epandage` | ACT_LAI_007 | |
| lait_q08 | `reseau_effluents`, `epandage`, `valorise_brut` | ACT_LAI_005 | |
| lait_q08 | `sans_objet` | | ACT_LAI_005, ACT_LAI_007 |
| lait_q09 | `equipe_non_valorise`, `valorise_partiel` | ACT_LAI_006 | |
| lait_q09 | `non_equipe` | | ACT_LAI_006 |
| lait_q10 | `aucun_traitement`, `raccorde_sans_convention` | ACT_LAI_008 | |
| lait_q11 | `non_analyse`, `informe` | ACT_AGR_009 | |
| lait_q11 | `plan_formalise` | | ACT_AGR_009 |
| lait_q12 | `non`, `informe` | ACT_AGR_010 | |

`always_include` et `never_include` restent vides. Le guide déconseille la première, et
aucune mesure de ce secteur n'est un point d'entrée obligé : l'audit lui-même n'a de sens
que si l'entreprise n'en a pas déjà un.

## Justification ligne par ligne

**lait_q01, deux filtres en escalier sur la même question.** Celui qui n'a aucun compteur
ou seulement le compteur général reçoit la mesure « compteur par usage » et la mesure
« ratio eau sur lait ». Celui qui compte déjà par atelier n'a plus besoin de la première,
mais il lui manque encore l'indicateur rapporté au lait traité, donc il reçoit la seconde
seule. Une seule question produit ainsi deux plans différents, ce qui évite d'en poser une
de plus sur le même sujet.

**lait_q02, le seul filtre de classe.** Un site dont les sources d'eau ne comprennent
aucune eau de process recyclée ne pratique pas la cascade de rinçages, qui fait partie de
la mesure d'optimisation de la NEP. Le filtre est redondant avec celui de q05 pour les
sites mal équipés, mais il rattrape le cas du site équipé d'une NEP pilotée qui ne
récupère pourtant rien.

**lait_q03, un seuil qui vient du droit.** 10 000 m3 par an est le seuil de l'arrêté du
30 juin 2023 : au-dessus, une installation classée doit réduire son prélèvement de 5, 10
puis 25 % selon le niveau de gravité, et rendre compte chaque semaine à l'inspection en
alerte renforcée. Un site au-dessus de ce seuil a besoin d'un plan de gestion écrit qui dit
à l'avance ce qu'il coupera. En dessous, il relève des arrêtés préfectoraux généraux, où
l'enjeu est moindre.

**lait_q05 et lait_q06, deux questions plutôt qu'une.** Il aurait été tentant de n'en faire
qu'une seule, graduée du lavage au jet à la NEP pilotée par sondes. C'est le piège décrit
en principe 1 : cette échelle mesurerait la taille du site, pas sa maturité. Le
prénettoyage à sec, lui, est à la portée de tous, du fermier au site industriel, et c'est
le geste qui allège à la fois le volume d'eau et la charge organique. Il mérite sa question.

**lait_q07, l'exclusion du froid.** Un petit atelier refroidi par un groupe à air ne
consomme pas d'eau pour son froid. Lui proposer de fermer ses circuits serait absurde,
d'où le filtre `remove` en priorité 2.

**lait_q08 et lait_q09, les deux gisements de la filière, et leur articulation.** Ces deux
questions ne font pas doublon. q08 porte sur le lactosérum, que produit toute fromagerie
et dont la mesure ACT_LAI_005 propose la concentration sur site. q09 porte sur l'équipement
d'évaporation ou d'osmose et sur les eaux qu'il libère, objet de la mesure ACT_LAI_006.

L'articulation est volontaire : un site non équipé ne reçoit pas ACT_LAI_006, parce qu'on
ne valorise pas des condensats qu'on ne produit pas, mais il reçoit ACT_LAI_005, dont
l'objet est précisément d'acquérir cet équipement. Les deux mesures se suivent dans le
temps, elles ne se concurrencent pas.

L'option `sans_objet` de q08 vise les fabricants de glaces et sorbets (10.52Z), qui n'ont
ni lactosérum ni babeurre. Sans elle, ils répondraient « part aux effluents » par défaut et
recevraient deux mesures hors sujet.

**lait_q10, la convention de rejet.** L'option `raccorde_sans_convention` mérite d'être
notée 1 et non 2 : un site raccordé sans autorisation de déversement à jour est en
infraction, même si personne ne le lui a encore dit. C'est cette situation, plus que
l'absence totale de traitement, que la mesure ACT_LAI_008 vise en pratique.

**lait_q11, pourquoi un `remove` en plus.** Le filtre de seuil de q03 ajoute le plan de
gestion à tout site dépassant 10 000 m3, sans rien savoir de ce qu'il a déjà fait. Sans
correctif, un site irréprochable qui a écrit son plan se verrait proposer de l'écrire. Le
`remove` en priorité 2 sur `plan_formalise` corrige ce croisement entre deux questions,
que la mécanique des filtres, qui ne regarde qu'une question à la fois, ne peut pas voir
autrement. Le défaut a été repéré en construisant le persona « site avancé », ce qui est
exactement l'usage attendu des personas.

**Pas de filtre de maturité sur la démarche collective.** Le questionnaire agriculture en
porte un, qui propose la démarche collective à toute entreprise intermédiaire ou avancée.
Repris ici, il rendait la mesure inévitable, elle sortait pour 100 % des profils, y compris
pour ceux qui pilotent déjà une démarche de bassin. Il a été retiré au calibrage : q12 pose
la question directement et suffit à discriminer. Voir la section sur le calibrage.

## Couverture des mesures

Les douze mesures visibles du secteur sont toutes citées par au moins un filtre.

| Mesure | Filtres qui l'ajoutent | Filtres qui la retirent |
|---|---|---|
| ACT_AGR_001 Compteur par usage | q01 | |
| ACT_AGR_002 Audit eau | q04, q04 sans réponse | |
| ACT_AGR_009 Plan de gestion de l'eau | q03, q11 | q11 |
| ACT_AGR_010 Démarche collective | q12 | |
| ACT_LAI_001 Nettoyage économe | q05, q06 | |
| ACT_LAI_002 Ratio eau sur lait | q01 | |
| ACT_LAI_003 Optimisation de la NEP | q02, q05 | q05 |
| ACT_LAI_004 Circuits de froid fermés | q07 | q07 |
| ACT_LAI_005 Concentration du lactosérum | q08 | q03, q08 |
| ACT_LAI_006 Eaux issues du lait | q09 | q09 |
| ACT_LAI_007 Lactosérum hors effluents | q08 | q08 |
| ACT_LAI_008 Traitement des effluents | q10 | |

Vingt-trois filtres au total. Les cinq derniers, tous des `remove` sauf un, ont été
ajoutés après les deux passages du juge des personas : voir `03_jugement.md`, qui dit
quelle critique chacun corrige.

## Topics

Dix topics, portés uniquement par des options de maturité 0 ou 1, conformément à la
section 5.4 du guide. Ils deviennent les axes prioritaires affichés dans la Synthèse.

| Topic | Libellé | Questions porteuses |
|---|---|---|
| `comptage` | Comptage et suivi des volumes | q01 |
| `diversification_sources` | Diversification des sources d'eau | q02 |
| `audit` | Audit eau | q04 |
| `nettoyage` | Nettoyage et NEP | q05, q06 |
| `froid` | Refroidissement et circuits | q07 |
| `lactoserum` | Valorisation du lactosérum | q08 |
| `eaux_du_lait` | Eaux issues du lait | q09 |
| `effluents` | Traitement des effluents | q10 |
| `risque_reglementaire` | Anticipation des restrictions | q11 |
| `collectif` | Démarche collective | q12 |

## Calibrage : ce que la simulation a corrigé

`simuler_referentiel.mjs` a signalé deux alertes au premier passage. Les deux ont été
corrigées, pas justifiées.

**ACT_AGR_010 proposée à 100 % des profils.** Le filtre de maturité `f_mature_collectif`,
repris du questionnaire agriculture, ajoutait la démarche collective à toute entreprise
intermédiaire ou avancée, soit 98 % des profils. Cumulé au filtre de q12, il rendait la
mesure inévitable, y compris pour une entreprise qui pilote déjà une démarche de bassin.
Le filtre a été retiré : q12 pose la question directement, elle suffit à discriminer. La
mesure est retombée à 44 %.

**Niveau de concernement « faible » jamais atteint.** Six options portaient un score de
concernement supérieur à leur score de maturité sans que la divergence soit justifiée
(une source d'eau, un lactosérum valorisé, une participation à des réunions). Le guide
réserve cet écart aux réponses du type « on y a réfléchi mais pas encore fait ». Les six
ont été ramenées au niveau de leur maturité. Les trois écarts conservés sont q04
`envisage` (0 en maturité, 2 en concernement), q04 `ancien` et q11 `informe`.

Un second passage a corrigé deux barèmes défectueux sur le fond, non signalés par la
simulation mais repérés en relisant la gradation :

- **lait_q09 n'offrait aucune option à 1** (2, 0, 2, 3). Or « ces eaux servent à quelques
  usages sans contact », sans déclaration ni surveillance, correspond exactement à la
  définition du niveau 1 donnée par le guide : quelque chose existe, mais de façon
  informelle. Ramené à 1.
- **lait_q02 notait le forage 2**, au même rang qu'une pratique de sobriété. Disposer d'un
  forage relève du contexte géographique du site, pas de sa maturité sur l'eau. Ramené à 1,
  comme le captage de surface.

## Écart résiduel assumé : la distribution des niveaux sur profils aléatoires

Après correction, la simulation ne lève plus aucune alerte, mais deux indicateurs restent
sous la cible de 5 % fixée par la section 7 du guide : 3 % de profils novices et 2 % de
concernement faible, contre 83 % d'intermédiaires.

Cet écart est assumé, pour une raison qui tient à la conception même de ce questionnaire.
Trois questions portent une option d'exclusion structurelle notée 2 en maturité, par
application du principe 1 énoncé en tête de ce document : ne pas confondre la taille et la
maturité. Un site sans froid à eau (q07), sans lactosérum (q08) ou sans évaporateur (q09)
n'est pas un mauvais élève, il fait un autre métier.

Or le tirage aléatoire uniforme combine ces trois options sans cohérence : il produit des
profils qui cochent simultanément « je n'ai pas de lactosérum » et « je concentre mon
lactosérum sur site ». Chaque exclusion ainsi tirée au hasard rapporte 2 points de
maturité sans contrepartie, ce qui remonte mécaniquement le plancher. Deux autres
mécanismes vont dans le même sens : le multi-choix des sources plafonne à 3 dès que deux
options valorisantes sont cochées, et la question numérique accorde 2 au seul fait d'être
remplie.

Le test qui compte est celui des personas, et il est concluant : ils parcourent toute
l'échelle, de 14 % pour la fromagerie artisanale à 97 % pour le site exemplaire, en
passant par 33, 42, 50, 64 et 75 %. Le questionnaire discrimine donc bien les profils
réels. Ce sont les profils aléatoires qui sont irréalistes, pas le barème.

**Corriger cet écart supposerait de noter 0 ou 1 les options d'exclusion**, c'est-à-dire
de pénaliser un glacier parce qu'il ne produit pas de lactosérum. Le remède serait pire
que le mal. À rediscuter si l'on observe la même concentration sur des réponses réelles,
où elle n'aurait alors pas la même cause.

## Résultats de la simulation retenue

- 200 profils aléatoires, 8 personas, aucune alerte, code de sortie 0.
- Mesures par plan : minimum 2, médiane 7, maximum 12. Aucun plan vide.
- Fréquence des mesures comprise entre 31 % (lactosérum hors effluents) et 73 %
  (optimisation de la NEP), donc dans la fourchette de 10 à 90 % du guide.
- Les vingt filtres se déclenchent tous, entre 20 % et 72 %.
