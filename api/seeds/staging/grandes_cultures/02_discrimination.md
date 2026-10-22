# Table de discrimination : grandes cultures

Étape 4 du skill `nouveau-secteur`. Écrite avant les filtres (guide, section 6). Chaque ligne
devient un filtre de `action_plan_config`.
Statut : brouillon. Date : 2026-10-15.

## Principe de construction

Douze questions, quatre thèmes. Le fil suit le profil eau : d'abord savoir si l'exploitation
irrigue et comment elle suit ses volumes, puis le coeur irrigant (ressource, cultures, pilotage,
matériel, réglage, anticipation), puis ce qui vaut pour toutes les exploitations (assolement et
variétés, sols, pulvérisateur, haies), et on termine par le collectif.

Trois principes :

1. **L'exploitation en sec n'est pas en retard.** Plus de huit exploitations sur dix n'irriguent
   pas (profil, section 1). La première question combine le fait (irriguez-vous ?) et le suivi des
   volumes : l'option « je n'irrigue pas » vaut 2 en maturité, comme une option « sans objet ».
2. **Une condition plutôt que six options « sans objet ».** Les six questions propres à
   l'irrigation (q02 à q06 et q11) ne s'affichent qu'aux irrigants, par une condition sur q01. Le
   guide demande la parcimonie : ici une seule condition, partagée, et elle épargne six questions
   à la majorité du secteur. Un filtre `remove` sur `q01 = sec` double la condition, pour que les
   mesures d'irrigation ne sortent jamais pour une exploitation en sec, même si une réponse
   cachée traînait.
3. **Le riz à part dans le matériel.** La submersion des rizières (q05) retire le pilotage par
   sondes, le matériel d'aspersion, le changement d'assolement, l'esquive variétale et le
   stockage hivernal, qui n'ont pas de
   sens pour une rizière alimentée par le Rhône (profil, section 6).

## Les douze questions

| Id | Thème | Type | Question | Visible |
|---|---|---|---|---|
| gcu_q01 | Connaissance et mesure | single | Irriguez-vous une partie de vos cultures, et comment suivez-vous les volumes ? | tous |
| gcu_q02 | Connaissance et mesure | multi (`source_eau`) | D'où vient l'eau que vous utilisez pour irriguer ? | irrigants |
| gcu_q03 | Connaissance et mesure | multi (`culture_irriguee`) | Quelles cultures irriguez-vous ? | irrigants |
| gcu_q04 | Irrigation | single | Comment décidez-vous de déclencher un tour d'eau ? | irrigants |
| gcu_q05 | Irrigation | single | Quel matériel d'irrigation utilisez-vous principalement ? | irrigants |
| gcu_q06 | Irrigation | single | Quand votre matériel a-t-il été contrôlé et réglé pour la dernière fois ? | irrigants |
| gcu_q07 | Cultures et sols | single | Avez-vous adapté votre assolement ou vos variétés aux sécheresses ? | tous |
| gcu_q08 | Cultures et sols | single | Comment gérez-vous vos sols entre deux cultures ? | tous |
| gcu_q09 | Cultures et sols | single | Où remplissez-vous et lavez-vous votre pulvérisateur ? | tous |
| gcu_q10 | Cultures et sols | single | Vos parcelles sont-elles protégées par des haies ? | tous |
| gcu_q11 | Gouvernance et anticipation | single | Savez-vous comment conduire votre campagne en cas de restriction ou de volume réduit ? | irrigants |
| gcu_q12 | Gouvernance et anticipation | single | Participez-vous à une démarche collective de gestion de l'eau sur votre territoire ? | irrigants |

Un irrigant répond à douze questions, une exploitation en sec à cinq.

## Table

| Question | Option(s) | Mesures ajoutées | Mesures retirées | Filtre |
|---|---|---|---|---|
| gcu_q01 | `sans_suivi`, `releve_fin_campagne` | ACT_GCU_001 | | f_volumes_non_suivis |
| gcu_q01 | `sec` | | ACT_GCU_001, 002, 003, 004, 008, ACT_AGR_009, ACT_AGR_010 | f_culture_en_sec (priorité 2) |
| gcu_q02 | contient `forage` | ACT_GCU_008 | | f_source_forage |
| gcu_q02 | contient `riviere` | ACT_GCU_008 | | f_source_riviere |
| gcu_q02 | contient `retenue` | | ACT_GCU_008 | f_retenue_existante (priorité 2) |
| gcu_q03 | contient `mais` | ACT_GCU_005 | | f_mais_irrigue |
| gcu_q03 | contient `forte_valeur` | ACT_GCU_004 | | f_cultures_forte_valeur |
| gcu_q04 | `calendrier`, `bulletin` | ACT_GCU_001 | | f_pilotage_sans_mesure |
| gcu_q04 | non répondue | ACT_GCU_001 | | f_pilotage_inconnu |
| gcu_q05 | `enrouleur_mecanique` | ACT_GCU_003 | | f_enrouleur_mecanique |
| gcu_q05 | `localise` | | ACT_GCU_002, 004 | f_deja_localise (priorité 2) |
| gcu_q05 | `submersion` | | ACT_GCU_001, 002, 003, 004, 005, 006, 007, 008 | f_submersion (priorité 2) |
| gcu_q06 | `jamais`, `en_panne` | ACT_GCU_002 | | f_materiel_non_regle |
| gcu_q07 | `inchange`, `varietes` | ACT_GCU_005 | | f_assolement_inchange |
| gcu_q07 | `inchange`, `assolement` | ACT_GCU_006 | | f_varietes_inchangees |
| gcu_q08 | `sol_nu`, `couverts_obligatoires` | ACT_GCU_007 | | f_sols_peu_couverts |
| gcu_q09 | `sans_amenagement`, `aire_sans_traitement` | ACT_GCU_009 | | f_pulverisateur_non_equipe |
| gcu_q09 | `sans_pulverisateur` | | ACT_GCU_009 | f_sans_pulverisateur (priorité 2) |
| gcu_q10 | `aucune`, `quelques_haies` | ACT_GCU_010 | | f_peu_de_haies |
| gcu_q11 | `subit`, `informe` | ACT_AGR_009 | | f_campagne_non_anticipee |
| gcu_q12 | `non`, `informe` | ACT_AGR_010 | | f_hors_collectif |
| niveau | `novice` | | ACT_GCU_008 | f_novice_sans_retenue (priorité 2) |

Chaque mesure du secteur apparaît au moins une fois en ajout :
ACT_GCU_001 (q01, q04), 002 (q06), 003 (q05), 004 (q03), 005 (q03, q07), 006 (q07), 007 (q08),
008 (q02), 009 (q09), 010 (q10), ACT_AGR_009 (q11), ACT_AGR_010 (q12).

## Choix de conception

- **q01 fusionne deux faits.** Savoir si l'on irrigue et comment l'on suit ses volumes tient en
  une question de dix secondes, et l'option `sec` porte la condition des questions d'irrigation.
  Le relevé du compteur (levier L2) déclenche le pilotage ACT_GCU_001, qui l'inclut, plutôt que
  la transversale ACT_AGR_001 (compteur déjà obligatoire, section 9 du périmètre).
- **Stockage hivernal (ACT_GCU_008) seulement pour qui pompe lui-même.** Un irrigant en réseau
  collectif ne construit pas de retenue : c'est le gestionnaire du réseau qui le fait. Un
  irrigant qui a déjà une retenue ne la reçoit pas non plus.
- **Goutte-à-goutte (ACT_GCU_004) réservé aux cultures à forte valeur** (semences, pomme de
  terre, tabac, légumes de plein champ), où le profil le juge pertinent, et retiré à qui l'a déjà.
- **Assolement et variétés se croisent.** Qui a déjà changé de variétés reçoit l'assolement, qui
  a déjà changé d'assolement reçoit les variétés, qui n'a rien changé reçoit les deux. Le maïs
  irrigué ajoute l'assolement, puisque c'est la culture qui demande le plus d'eau en été.
- **Le plan sécheresse ne vaut que pour les irrigants.** Aucun arrêté ne s'applique à une
  exploitation en sec (profil, section 3) : q11 est conditionnelle et ACT_AGR_009 est retirée sur
  `sec`.
- **Non-réponses.** Une non-réponse sur le pilotage (q04) ajoute le pilotage. Une non-réponse sur
  l'adaptation (q07) n'ajoute rien : on ne conseille pas de changer de variétés sans savoir ce qui
  est semé (jugement, passage 1). Si q01 est
  sautée, les questions d'irrigation restent masquées et le plan ne contient que ce qui vaut pour
  toutes les exploitations.

- **Pas de retenue pour un novice.** Une exploitation au niveau novice commence par mesurer,
  piloter et régler son matériel : le stockage hivernal (investissement lourd, autorisation loi
  sur l'eau, projet de territoire) est retiré de son plan, ce qui ramène le persona novice à dix
  mesures.
- **Riz et assolement.** En Camargue, la submersion du riz sert aussi à dessaler les sols : proposer
  de remplacer le riz par du sorgho n'aurait pas de sens, l'assolement est retiré avec le reste.

- **Démarche collective et plan sécheresse réservés aux irrigants** (jugement, passage 1). ACT_AGR_010
  sert à peser sur le partage des prélèvements, une exploitation qui ne prélève rien n'a pas de
  volume à défendre : q12 est conditionnelle comme q11, et `sec` retire les deux transversales.
- **Le réglage du matériel est rédigé pour l'aspersion** (vitesse d'enroulement, buses, plages
  d'interdiction) : il est retiré quand le goutte-à-goutte est le matériel principal.
- **Ordre des plans** (jugement, passage 1). Le pilotage passe en facilité 3 (outil d'aide à la
  décision et sondes s'engagent en quelques semaines) et devient la seule mesure notée 3 et 3, en
  tête de tout plan irrigant qui la reçoit. Le stockage hivernal passe en impact 2, qui est le
  barème du guide pour la « sécurisation d'une source », et ne coiffe plus le plan sécheresse.
- **Barèmes resserrés** après ces changements (la conditionnelle q12 faisait tomber les novices à
  5 %) : retenue et eaux usées traitées (q02) à 1 et 2, sorgho ou tournesol (q03) à 1, couverts
  seulement obligatoires (q08) à 0 en maturité et 1 en concernement.

## Simulation (200 profils, graine 1)

Après le passage 2 du juge : médiane de 4 mesures par plan (min 0, max 8), 2 % de plans vides,
mesure la plus fréquente à 54 % (pilotage), la moins fréquente des mesures sectorielles à 8 %
(modernisation de l'aspersion), tous les filtres déclenchés à 8 % ou plus. Maturité : 9 %
novices, 77 % intermédiaires, 14 % avancés.

## Alertes conservées

- **ACT_AGR_001, ACT_AGR_002, ACT_AGR_006 jamais proposées.** Choix validé à l'étape 2 et écrit en
  section 9 du périmètre : le compteur est déjà obligatoire pour l'irrigant et son relevé passe
  dans ACT_GCU_001, l'audit eau est remplacé par le diagnostic du matériel (ACT_GCU_002), l'eau de
  toiture est marginale face aux volumes d'irrigation. Ces trois transversales restent visibles
  du secteur sans être citées par un filtre. C'est la seule cause du code de sortie 1 de la
  simulation.
- **2 % de plans vides** : profils aléatoires qui donnent la meilleure réponse partout où un
  filtre ajoute, comme le persona avancé, dont le plan vide est conforme à l'archétype (zéro à
  trois mesures).
- **Modernisation de l'aspersion à 8 %** : elle ne vise que les enrouleurs à régulation
  mécanique, une option sur cinq d'une question réservée aux irrigants. Au-dessus du seuil de 5 %
  des filtres, sous la cible indicative de 10 % pour une mesure, assumé.
- **Novices à 9 %**, sous la cible indicative de 10 % mais au-dessus du plancher de 5 % : l'option
  « je n'irrigue pas » vaut 2 en maturité par principe, ce qui relève mécaniquement le score des
  profils en sec.
