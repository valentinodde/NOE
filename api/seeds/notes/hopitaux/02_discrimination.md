# Table de discrimination : hôpitaux et cliniques

Étape 4 du skill `nouveau-secteur`. Écrite avant les filtres, comme le demande la section 6
du guide de conception. Chaque ligne devient un filtre de `action_plan_config`.
Statut : brouillon. Date : 2026-10-15.

## Principe de construction

Douze questions, quatre thèmes. Le fil suit le profil eau : le type d'établissement, ce
qu'il sait de sa consommation et de ses fuites (le premier gisement), les réseaux et
équipements propres à l'hôpital (purges anti-légionelles, robinetterie, dialyse,
blanchisserie et stérilisation), les autres eaux et les rejets, puis la continuité
d'approvisionnement et le territoire.

Trois principes ont guidé le découpage :

1. **Une question de profil en entrée, à choix unique.** hop_q01 distingue l'établissement
   sans hébergement (hospitalisation à domicile, siège), l'hospitalisation sans plateau
   technique lourd (soins de suite, psychiatrie, hôpital local) et le court séjour avec
   blocs, imagerie ou urgences. Elle est à choix unique parce que le moteur n'évalue une
   condition d'affichage que sur une réponse unique. Elle sert à deux choses :
   - masquer les questions de bâtiment (hop_q02 à hop_q09) à l'établissement sans
     hébergement, et retirer les mesures correspondantes par un filtre `remove`
     (priorité 2), car une question masquée déclencherait sinon le filtre `not_answered`
     de l'audit ;
   - ne montrer la question des effluents (hop_q10) qu'au court séjour, seul concerné
     par les rejets de médicaments, de produits de contraste et de gadolinium (profil,
     section 4).
   **Barème de hop_q01 : 0 partout.** Un profil ne mesure pas une maturité. Même choix
   que l'inventaire de l'hôtellerie (hot_q01) : la question retire le même poids à tous
   et ne change pas le classement. Exception assumée à la règle « une option à 0 et une
   à 3 » du guide (section 5.4).
2. **Les postes présents ou non ont leur option « sans objet »** (hop_q07 dialyse, hop_q08
   blanchisserie et stérilisation), notée 2 en maturité et en concernement, qui retire la
   mesure correspondante.
3. **Pas de question numérique.** Aucun seuil de volume ne déclenche une mesure à
   l'hôpital, et le ratio par lit (400 à 1 200 litres par jour) varie d'un facteur trois
   selon le plateau technique : un seuil unique ne discriminerait rien.

## Les douze questions

| Id | Thème | Type | Condition | Question |
|---|---|---|---|---|
| hop_q01 | Connaissance et mesure | single | | Quel type d'activité votre établissement accueille-t-il sur son site ? |
| hop_q02 | Connaissance et mesure | single | q01 ≠ sans hébergement | Comment suivez-vous la consommation d'eau de l'établissement ? |
| hop_q03 | Connaissance et mesure | single | q01 ≠ sans hébergement | Avez-vous fait réaliser un audit ou diagnostic eau de votre établissement ? |
| hop_q04 | Connaissance et mesure | single | q01 ≠ sans hébergement | Comment les fuites des réseaux enterrés et des locaux techniques sont-elles recherchées ? |
| hop_q05 | Réseaux et équipements | single | q01 ≠ sans hébergement | Comment gérez-vous les points d'eau peu utilisés et leurs purges anti-légionelles ? |
| hop_q06 | Réseaux et équipements | single | q01 ≠ sans hébergement | Quels équipements économes équipent vos chambres et vos lave-mains ? |
| hop_q07 | Réseaux et équipements | single | q01 ≠ sans hébergement | Pratiquez-vous l'hémodialyse, et où en est son traitement d'eau ? |
| hop_q08 | Réseaux et équipements | single | q01 ≠ sans hébergement | Comment l'eau compte-t-elle dans vos choix de blanchisserie et de stérilisation ? |
| hop_q09 | Autres eaux et rejets | single | q01 ≠ sans hébergement | Utilisez-vous une autre eau que celle du réseau pour l'arrosage, le nettoyage ou les chasses ? |
| hop_q10 | Autres eaux et rejets | single | q01 = plateau technique | Où en êtes-vous de la connaissance et de la maîtrise de vos effluents ? |
| hop_q11 | Continuité et anticipation | single | | Votre plan blanc prévoit-il une rupture d'approvisionnement en eau ? |
| hop_q12 | Continuité et anticipation | single | | Participez-vous à une démarche collective sur l'eau dans votre territoire ? |

## Table de discrimination

| Question | Option(s) | Mesures ajoutées | Mesures retirées |
|---|---|---|---|
| hop_q01 | `sans_hebergement` | | ACT_AGR_001, ACT_AGR_002, ACT_AGR_006, ACT_AGR_010, ACT_HOP_001 à ACT_HOP_007 |
| hop_q02 | `facture`, `releve_general` | ACT_AGR_001 | |
| hop_q03 | `jamais`, `envisage`, `ancien` | ACT_AGR_002 | |
| hop_q03 | sans réponse (`not_answered`) | ACT_AGR_002 | |
| hop_q04 | `non_recherchees`, `ecarts_facture` | ACT_HOP_002 | |
| hop_q05 | `sans_protocole`, `purges_systematiques` | ACT_HOP_001 | |
| hop_q06 | `origine`, `reducteurs_debit` | ACT_HOP_003 | |
| hop_q07 | `traitement_ancien` | ACT_AGR_001, ACT_HOP_004, ACT_HOP_006 | |
| hop_q07 | `traitement_recent` | ACT_HOP_006 | |
| hop_q07 | `sans_dialyse` | | ACT_HOP_004 |
| hop_q08 | `sans_critere` | ACT_HOP_005 | |
| hop_q08 | `sans_objet` | | ACT_HOP_005 |
| hop_q09 | `reseau_seul`, `projet_etudie` | ACT_AGR_006 | |
| hop_q10 | `non_caracterises`, `autorisation_seule`, `convention_suivie` | ACT_HOP_007 | |
| hop_q11 | `non_traite`, `connu_sans_procedure` | ACT_AGR_009 | |
| hop_q12 | `informe` | ACT_AGR_010 | |
| niveau | `avance` | ACT_AGR_010 | |
| hop_q12 | `participe`, `porteur` | | ACT_AGR_010 |

Chaque mesure du secteur apparaît au moins une fois : ACT_HOP_001 (q05), 002 (q04),
003 (q06), 004 (q07), 005 (q08), 006 (q07), 007 (q10) ; transversales ACT_AGR_001 (q02),
002 (q03), 006 (q09), 009 (q11), 010 (q12 et niveau).

## Choix à relire

- **Réducteurs de débit notés 1, pas 2.** L'option `reducteurs_debit` de hop_q06 décrit un
  établissement qui a agi, mais avec un dispositif que le réseau des CPias classe comme un
  faux pas (profil, section 4). Elle ajoute la robinetterie validée par l'hygiène.
- **La réutilisation des rejets d'osmose ne vient que par la dialyse.** La stérilisation
  produit aussi de l'eau osmosée, mais la seule réutilisation documentée (AURAL, Lyon) est
  en dialyse, et la mesure est notée 1 en facilité (expérimentation déclarée à la DGS).
  Ne la proposer qu'aux établissements qui dialysent garde le plan sobre.
- **Démarche collective proposée à ceux qui n'y sont pas** (`non`, `informe`) et à tout
  établissement avancé, retirée à ceux qui y participent déjà (`remove`, priorité 2).
- **ACT_AGR_009 porte la continuité.** hop_q11 parle du plan blanc, pas des arrêtés
  sécheresse : pour un établissement de santé, usager prioritaire, le risque premier est
  la rupture (DGS, 2023). La description de la mesure transversale ne le dit pas encore
  (demande d'évolution 3 de `00_perimetre.md`).

## Corrections après le premier passage du juge (2026-10-15)

| Remarque du juge | Correction |
|---|---|
| hop_had : démarche collective indue | `f_sans_hebergement` retire aussi ACT_AGR_010. Le plan de l'HAD se réduit au plan de gestion de l'eau. |
| hop_gros_dialyseur : compteur par usage manquant | `f_dialyse_ancienne` ajoute ACT_AGR_001 : l'option dit « eau par séance inconnue », le premier geste est de compter l'eau de la dialyse. |
| hop_contraint_reglementaire : effluents indus (ce qu'il fait par obligation) | ACT_HOP_007 recentrée sur la réduction à la source (« Réduire à la source les rejets de médicaments et de désinfectants »), qui va au-delà de l'autorisation de déversement. Le filtre l'ajoute donc à tout établissement qui ne l'a pas engagée, y compris `convention_suivie`. |
| Démarche collective trop fréquente (46 %) | `f_collectif` ne vise plus que `informe`, comme en hôtellerie. Un établissement qui ne connaît aucune démarche locale ne la reçoit qu'au niveau avancé. Fréquence : 16 %. |

**Remarques d'ordre non corrigées.** Le moteur trie le plan par impact × facilité puis
horizon, sans réglage par secteur. Le juge demande de faire remonter le plan de gestion de
l'eau (transversale notée 1 × 2) et les mesures de dialyse (3 × 1) devant l'eau de pluie
(2 × 2). Corriger demanderait soit de modifier une mesure transversale publiée, soit de
fausser la grille de notation du guide (section 4.2). Désaccord documenté, proposé au
relecteur : une notation `impact_eau` à 2 pour ACT_AGR_009 (sécurisation d'une source,
au sens de la grille) ferait remonter le plan de gestion dans tous les secteurs.

## Alertes de simulation justifiées

Simulation du 2026-10-15 après corrections (200 profils, graine 1) : une seule alerte,
**plans vides 18 %**. Elle est gardée, pour deux raisons.

1. **Environ 17 points viennent de la branche sans hébergement, et ces plans doivent être
   vides.** Les profils aléatoires tirent `sans_hebergement` une fois sur trois. Le
   filtre `f_sans_hebergement` retire alors toutes les mesures de bâtiment et la
   démarche collective (demande du juge), et il ne reste que le plan de gestion (hop_q11).
   Une structure d'hospitalisation à domicile qui a déjà une procédure écrite de coupure
   d'eau n'a plus rien à recevoir de la bibliothèque : 1/3 × 1/2, soit 16,7 % des
   profils. Dans la population réelle, l'HAD pèse bien moins d'un tiers des
   établissements de 86.10Z.
2. **Le reste vient de profils avec hébergement qui répondent au mieux partout** (même cas
   que le persona avancé, dont le plan vide est attendu par le guide, section 7).

Les autres indicateurs sont dans les cibles : médiane de 3 mesures par plan, mesure la
plus fréquente à 57 % (audit eau), la moins fréquente à 13 % (traitement d'eau de
dialyse), niveaux novice 24 %, intermédiaire 67 %, avancé 10 %, chaque filtre déclenché
pour au moins 10 % des profils.

`f_audit_inconnu` se déclenche pour 46 % des profils parce qu'une question masquée compte
comme sans réponse : sur la branche sans hébergement, l'audit ajouté est aussitôt retiré
par `f_sans_hebergement` (priorité 2). Effet net nul, voulu.
