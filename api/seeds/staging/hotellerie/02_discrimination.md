# Table de discrimination : hôtellerie

Étape 4 du skill `nouveau-secteur`. Écrite avant les filtres, comme le demande la section 6
du guide de conception. Chaque ligne devient un filtre de `action_plan_config`.
Statut : brouillon. Date : 2026-09-24.

## Principe de construction

Onze questions, quatre thèmes. Le fil suit le profil eau : les usages présents dans
l'établissement, ce que l'hôtel sait de sa consommation, puis le premier poste (la salle de bains et son entretien : équipements,
fuites, linge), les machines, les deux usages qui n'existent que dans une partie des
établissements (piscine, jardin), et on termine par l'anticipation des restrictions et le
territoire.

Trois principes ont guidé le découpage :

1. **L'hôtel urbain sans piscine ni jardin n'est pas un mauvais élève.** Les trois questions
   d'usages secondaires (hot_q07 machines, hot_q08 piscine, hot_q09 jardin) portent une
   option « sans objet » notée 2 en maturité et 2 en concernement, qui retire les mesures
   correspondantes par un filtre `remove` (priorité 2).
2. **Un inventaire d'entrée, pour le seul compteur par usage.** hot_q01 (choix multiple,
   classe `usage_eau`) liste les usages en dehors des chambres. Il a été ajouté après le
   second passage du juge, sur décision du 2026-09-24, pour retirer le compteur par usage
   aux établissements qui n'ont que des chambres : ce retrait demande de savoir qu'il n'y a
   ni machine, ni piscine, ni jardin, ce qu'un filtre sur une seule question à choix unique
   ne sait pas exprimer. Les options « sans objet » de hot_q07 à hot_q09 restent, car le
   moteur n'évalue pas une condition d'affichage sur une réponse multiple : on ne peut pas
   masquer la question piscine à qui n'a pas coché la piscine. **Barème de l'inventaire :
   0 pour toutes les options.** Un inventaire ne mesure pas une maturité ; noter chaque
   usage 1 (plafonné à 3) faisait tomber les profils novices à 3 % en simulation, parce que
   les coches s'additionnent. À 0 partout, la question retire le même poids à tous les
   profils et ne change pas leur classement. C'est une exception assumée à la règle « une
   option à 0 et une à 3 » du guide (section 5.4).
3. **Pas de question numérique.** Aucun seuil de volume réglementaire ou technique ne
   déclenche une mesure en hôtellerie (le seuil de 10 000 m3 de l'arrêté sécheresse ICPE ne
   concerne pas un hôtel, qui n'est pas ICPE sauf tour aéroréfrigérante). Le volume
   rapporté aux nuitées est traité par la question de suivi.

## Les onze questions

| Id | Thème | Type | Question |
|---|---|---|---|
| hot_q01 | Connaissance et mesure | multi (`usage_eau`) | Quels usages de l'eau votre établissement a-t-il en plus des chambres ? |
| hot_q02 | Connaissance et mesure | single | Comment suivez-vous la consommation d'eau de votre établissement ? |
| hot_q03 | Connaissance et mesure | single | Avez-vous fait réaliser un diagnostic eau de votre établissement ? |
| hot_q04 | Chambres et linge | single | Quels équipements économes équipent les salles de bains de vos chambres ? |
| hot_q05 | Chambres et linge | single | Comment les fuites dans les chambres sont-elles repérées et réparées ? |
| hot_q06 | Chambres et linge | single | À quelle fréquence changez-vous draps et serviettes pendant un séjour ? |
| hot_q07 | Chambres et linge | single | Comment choisissez-vous vos lave-linge et lave-vaisselle professionnels ? |
| hot_q08 | Piscine et extérieurs | single | Comment limitez-vous l'eau consommée par votre piscine ou votre spa ? |
| hot_q09 | Piscine et extérieurs | single | Comment entretenez-vous vos espaces verts ? |
| hot_q10 | Gouvernance et anticipation | single | Savez-vous ce que vous devrez réduire ou arrêter en cas d'arrêté sécheresse ? |
| hot_q11 | Gouvernance et anticipation | single | Participez-vous à une démarche collective sur l'eau dans votre territoire ? |

## Table de discrimination

| Question | Option(s) | Mesures ajoutées | Mesures retirées |
|---|---|---|---|
| hot_q02 | `facture`, `releve_occasionnel` | ACT_HOT_007 | |
| hot_q02 | `releve_occasionnel`, `ratio_general` | ACT_AGR_001 | |
| hot_q01 | classe contient `chambres_seules` | | ACT_AGR_001 |
| hot_q03 | `jamais`, `envisage`, `ancien` | ACT_AGR_002 | |
| hot_q03 | sans réponse (`not_answered`) | ACT_AGR_002 | |
| hot_q04 | `origine`, `partiel` | ACT_HOT_001 | |
| hot_q05 | `signalement_client`, `consigne_orale` | ACT_HOT_002 | |
| hot_q06 | `chaque_jour`, `refus_non_suivi` | ACT_HOT_003 | |
| hot_q07 | `sans_critere_eau` | ACT_HOT_004 | |
| hot_q07 | `sans_machine` | | ACT_HOT_004 |
| hot_q08 | `aucune_mesure`, `couverture` | ACT_HOT_005 | |
| hot_q08 | `sans_piscine` | | ACT_HOT_005 |
| hot_q09 | `arrosage_classique` | ACT_HOT_006, ACT_AGR_006 | |
| hot_q09 | `jardin_sobre` | ACT_AGR_006 | |
| hot_q09 | `sans_jardin` | | ACT_HOT_006, ACT_AGR_006 |
| hot_q10 | `jamais_regarde`, `informe`, `consignes` | ACT_AGR_009 | |
| hot_q11 | `informe` | ACT_AGR_010 | |

Chaque mesure du secteur apparaît au moins une fois : ACT_HOT_001 (q04), 002 (q05),
003 (q06), 004 (q07), 005 (q08), 006 (q09), 007 (q02) ; transversales ACT_AGR_001 (q02,
retirée par q01), 002 (q03), 006 (q09), 009 (q10), 010 (q11).

`always_include` et `never_include` restent vides.

## Justification ligne par ligne

**hot_q02, deux filtres en escalier.** Celui qui s'en remet à la facture reçoit le seul
ratio litres par nuitée : il faut d'abord savoir combien on consomme avant de savoir où, et
le persona « je ne sais pas » doit rester à deux mesures. Celui qui relève de temps en
temps reçoit le ratio et les compteurs par usage. Celui qui suit déjà un ratio mensuel
sans sous-compteur reçoit les compteurs seuls. Pour un hôtel sans piscine ni restaurant, le
compteur par usage se lit comme un compteur sur la production d'eau chaude ou par
bâtiment. (Corrigé après le premier passage du juge, qui signalait le compteur manquant
pour le village de vacances.)

**hot_q01, inventaire.** L'établissement qui n'a que des chambres n'a pas de poste à
isoler : le compteur par usage est retiré (priorité 2), même s'il relève son compteur
de temps en temps. Relevé par le juge au second passage sur l'hôtel urbain.

**hot_q03, audit.** Comme dans les autres secteurs, ne pas savoir si un audit a été fait
est en soi le motif de le recommander (`not_answered`). Un audit de plus de cinq ans ne
compte plus.

**hot_q04, équipements de salle de bains.** Premier poste de l'hôtel (80 % selon le
SMEGREG). Les deux options faibles (équipement d'origine, quelques chambres seulement)
déclenchent la mesure en tête de plan.

**hot_q05, fuites.** Tant que la fuite n'est connue que par le client ou par une consigne
orale non suivie, la formation du personnel d'étage s'impose.

**hot_q06, linge.** « Le client peut refuser mais ce n'est pas toujours respecté » garde la
mesure : le levier est autant dans la consigne donnée aux équipes que dans l'affichage
(94 % des hôtels sensibilisent déjà, DGE 2024).

**hot_q07, machines.** Seul le choix sans critère eau déclenche la mesure. Linge et
vaisselle entièrement externalisés la retirent : le levier devient un critère d'achat du
prestataire, trop indirect pour une mesure.

**hot_q08, piscine.** Sans mesure ou avec la seule couverture, le lavage des filtres (40 à
50 % de l'eau de l'espace aquatique) reste à traiter. Sans piscine ni spa, la mesure est
retirée.

**hot_q09, jardin.** L'arrosage classique reçoit les deux mesures (plantations et goutte à
goutte, eau de pluie). Un jardin déjà sobre mais sans eau de pluie ne reçoit que l'eau de
pluie. Sans jardin, l'eau de pluie est aussi retirée : pour les seules chasses d'eau, elle
suppose un double réseau dans un bâtiment existant, travaux rarement justifiés pour un
hôtel sans espace extérieur (SMEGREG : intérêt limité pour les espaces verts seuls, a
fortiori pour les chasses seules). Choix de conception assumé, à revoir si une aide
dédiée change l'équation.

**hot_q10, restrictions.** Ne rien avoir regardé, seulement suivre les alertes, ou n'avoir
que des consignes informelles appelle le plan de gestion écrit, qui couvre toutes les
saisons (le juge a relevé l'hôtel de montagne, dont les consignes d'été ignorent l'étiage
hivernal). Seul le plan écrit et révisé l'écarte.

**hot_q11, démarche collective.** Seul l'établissement qui connaît une démarche sans y
participer reçoit la mesure. Le juge a jugé indue la proposition faite à de petits hôtels
qui ne connaissent aucune démarche : pour eux la mesure n'a pas de porte d'entrée
concrète. « Non » ne déclenche donc rien.

## Simulation et écarts aux cibles

Simulation du 2026-09-24 après l'ajout de l'inventaire (200 profils aléatoires, graine 1) :
**zéro alerte**. Médiane de 5 mesures par plan (de 1 à 10), aucun plan vide ; mesure la
plus fréquente l'audit (79 %), la moins fréquente la démarche collective (22 %) ; niveaux
novice 9 %, intermédiaire 86 %, avancé 6 %. Tous les filtres se déclenchent, dont
`f_chambres_seules` à 36 %.

**Écart conservé : 9 % de novices et 6 % d'avancés**, sous le repère de 10 % du guide
(section 7) mais au-dessus du seuil de 5 %. Causes voulues : les options « sans objet »
notées 2 (hot_q07, hot_q08, hot_q09) tirent vers le niveau intermédiaire, et l'inventaire
noté 0 abaisse légèrement le plafond (le persona avancé passe de 100 % à 91 %). Baisser les
options « sans objet » ferait chuter l'hôtel urbain sans piscine ni jardin, ce que le
principe 1 exclut.
