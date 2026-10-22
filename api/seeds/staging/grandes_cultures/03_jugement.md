# Jugement des personas : grandes cultures

Étape 4 du skill `nouveau-secteur`, agent `juge-personas`. Statut : brouillon. Date : 2026-10-15.

## Passage 1

Verdict : à revoir, 3 personas avec une mesure indue (gcu_sec, gcu_ne_sait_pas, gcu_incoherent).

| Persona | Mesure indue | Mesure manquante | Ordre des trois premières |
|---|---|---|---|
| gcu_novice_irrigant | aucune | aucune | non : pilotage d'abord, puis réglage et plan sécheresse (arrivé 8e sur 10) |
| gcu_equipe_reflexion | aucune | aucune | non : stockage hivernal en tête, attendu plan sécheresse, assolement, aire de lavage |
| gcu_sec | ACT_AGR_010, démarche collective (aucun volume à défendre) | aucune | non : esquive, sols et couverts, aire de lavage |
| gcu_avance | aucune (plan vide) | aucune | sans objet |
| gcu_ne_sait_pas | ACT_GCU_006, esquive (on ne conseille pas de changer de variétés sans savoir ce qui est semé) | aucune | pilotage seul |
| gcu_riziculteur | aucune | aucune dans la bibliothèque : rien sur la gestion des lames d'eau en submersion | oui |
| gcu_reseau_collectif | aucune | aucune | à retoucher : pilotage d'abord |
| gcu_incoherent | ACT_GCU_002, réglage rédigé pour l'aspersion alors que le matériel est en goutte-à-goutte | aucune | non : pilotage d'abord |

Vue d'ensemble du juge : les trois transversales jamais proposées sont cohérentes avec le profil ;
démarche collective et esquive sortent trop souvent (52 %) ; le plan sécheresse arrive tard chez
les irrigants sans stratégie ; le persona « je ne sais pas » est classé intermédiaire à 33 %.

### Corrections appliquées

1. `f_culture_en_sec` retire aussi ACT_AGR_010, et q12 ne s'affiche qu'aux irrigants.
2. `f_adaptation_inconnue` supprimé : la non-réponse sur l'adaptation n'ajoute plus l'esquive.
3. `f_deja_localise` retire aussi ACT_GCU_002.
4. ACT_GCU_001 passe en facilité 3 (pilotage en tête des plans irrigants), ACT_GCU_008 en impact 2
   (barème « sécurisation d'une source »).

### Non corrigé, et pourquoi

- **Plan sécheresse dans les trois premières mesures.** ACT_AGR_009 est une transversale publiée
  notée 1 en impact et 2 en facilité : son rang ne se règle pas dans le staging. Il remonte de la
  1re à la 3e place chez l'irrigant équipé (devant le stockage hivernal), reste 8e chez le novice
  irrigant. Demande d'évolution : passer ACT_AGR_009 en impact 2 (anticiper un arrêté sécurise la
  ressource au sens du guide), ce qui le placerait à 4 et le ferait remonter dans tous les secteurs.
- **Aucune mesure pour la submersion du riz.** La population (123 établissements) ne justifie pas
  une mesure propre à ce stade. Limite écrite dans le périmètre.
- **Persona « je ne sais pas » à 33 %, intermédiaire.** Une seule réponse (relevé en fin de
  campagne, 1 sur 3) tombe pile sur le seuil : effet du calcul sur les seules questions répondues,
  commun à tous les secteurs.

## Passage 2

Verdict : à revoir, 2 personas avec une mesure indue ou manquante (riziculteur, incohérent), 2
personas dont l'ordre est à corriger (équipé en réflexion, céréalier en sec).

| Persona | Mesure indue | Mesure manquante | Ordre des trois premières |
|---|---|---|---|
| gcu_novice_irrigant | aucune | aucune | correct (pilotage, réglage, esquive), plan sécheresse encore trop bas |
| gcu_equipe_reflexion | aucune | aucune | non : plan sécheresse attendu en tête |
| gcu_sec | aucune (le texte de l'assolement parlait du seul maïs) | aucune | non : sols et couverts attendu en 2e |
| gcu_avance | aucune | aucune | sans objet |
| gcu_ne_sait_pas | aucune | aucune | correct, une mesure |
| gcu_riziculteur | ACT_GCU_007, sols et couverts (sans objet sur une rizière submergée) | aucune dans la bibliothèque | acceptable une fois 007 retirée |
| gcu_reseau_collectif | aucune | aucune | correct |
| gcu_incoherent | aucune | ACT_GCU_002 pour un goutte-à-goutte jamais contrôlé | non : pilotage, contrôle du matériel, esquive |

### Corrections appliquées

1. `f_submersion` retire aussi ACT_GCU_007.
2. Description d'ACT_GCU_005 réécrite pour parler aussi des cultures d'hiver, et plus seulement du
   remplacement du maïs : elle se lit désormais pour une exploitation en sec sans maïs.

### Désaccords documentés (deux passages atteints)

- **Réglage du matériel et goutte-à-goutte.** Le passage 1 jugeait ACT_GCU_002 indue pour un
  irrigant en goutte-à-goutte (texte rédigé pour l'aspersion), le passage 2 la juge manquante pour
  un goutte-à-goutte jamais contrôlé. Les deux tiennent au même défaut : le texte de la mesure ne
  couvre pas l'irrigation localisée (filtres, goutteurs, pression). On garde le retrait. À trancher
  par le relecteur : élargir la mesure à l'irrigation localisée (il faudra une source) puis
  supprimer le retrait.
- **Rang du plan sécheresse.** Demandé en tête chez l'irrigant équipé, plus haut chez le novice. Il
  dépend de la notation d'ACT_AGR_009, transversale publiée (impact 1, facilité 2). Demande
  d'évolution déjà écrite au passage 1.
- **Sols et couverts chez le céréalier en sec.** Demandé en 2e, il sort 4e parce qu'il est noté 1
  en impact : le profil ne trouve aucune source qui chiffre son effet sur la réserve utile, et
  Arvalis juge difficile de conclure à une économie d'eau. On garde la note tant qu'aucune source
  ne la relève.
- **Axes prioritaires sans mesure en face** (riziculteur, incohérent) : les topics viennent des
  réponses faibles et s'affichent même quand un filtre `remove` a retiré la mesure correspondante.
  Comportement commun à tous les secteurs.
