# Table de discrimination : élevage d'herbivores

Étape 4 du skill `nouveau-secteur`. Écrite avant les filtres (guide, section 6). Chaque ligne
devient un filtre de `action_plan_config`.
Statut : brouillon. Date : 2026-10-15.

## Principe de construction

Onze questions, quatre thèmes. Le fil suit le profil eau : d'abord ce que l'éleveur sait de son
eau (suivi, sources, diagnostic), puis l'abreuvement, premier poste pour tous (bâtiment, puis
pâturage), puis la traite pour ceux qui traient, et on termine par l'anticipation (fourrage,
plan sécheresse, collectif).

Trois principes :

1. **L'abreuvement ne se rationne pas.** Aucune question ne demande combien boivent les animaux
   et aucune mesure ne propose d'en donner moins (profil, section 1.2). Les questions portent
   sur les pertes, la source et le secours.
2. **Une seule porte pour la traite.** La question q06 dit si l'éleveur trait et comment le
   lavage est réglé. Les deux questions laitières suivantes (prérefroidisseur, eaux blanches et
   vertes) ne s'affichent qu'à ceux qui traient, et l'option `sans_traite` retire les trois
   mesures laitières par un filtre `remove`. Un allaitant, un éleveur d'équidés ou d'ovins viande
   répond à neuf questions, un laitier à onze.
3. **Ne pas avoir l'usage n'est pas une faiblesse.** `sans_traite`, `sans_batiment` (animaux
   toujours dehors) et `pas_de_paturage` (animaux toujours en bâtiment) valent 2 en maturité,
   comme une option « sans objet ».

## Les onze questions

| Id | Thème | Type | Question | Visible |
|---|---|---|---|---|
| hrb_q01 | Connaissance et mesure | single | Comment suivez-vous la consommation d'eau de votre élevage ? | tous |
| hrb_q02 | Connaissance et mesure | multi (`source_eau`) | D'où vient l'eau de votre élevage ? | tous |
| hrb_q03 | Connaissance et mesure | single | Avez-vous fait faire un diagnostic eau de votre élevage ? | tous |
| hrb_q04 | Abreuvement | single | Comment entretenez-vous les abreuvoirs et le réseau d'eau des bâtiments ? | tous |
| hrb_q05 | Abreuvement | single | Comment vos animaux boivent-ils au pâturage ? | tous |
| hrb_q06 | Traite | single | Trayez-vous vos animaux, et comment est réglé le lavage de l'installation ? | tous |
| hrb_q07 | Traite | single | Que devient l'eau de votre prérefroidisseur de lait ? | qui trait |
| hrb_q08 | Traite | single | Où partent les eaux de lavage de la salle de traite (eaux blanches et vertes) ? | qui trait |
| hrb_q09 | Fourrages et anticipation | single | Comment sécurisez-vous l'alimentation du troupeau face aux sécheresses d'été ? | tous |
| hrb_q10 | Fourrages et anticipation | single | Savez-vous comment abreuver et nourrir le troupeau si l'eau vient à manquer ? | tous |
| hrb_q11 | Fourrages et anticipation | single | Participez-vous à une démarche collective sur l'eau de votre territoire ? | tous |

## Table

| Question | Option(s) | Mesures ajoutées | Mesures retirées | Filtre |
|---|---|---|---|---|
| hrb_q01 | `aucun_suivi`, `compteur_general`, `releve_regulier` | ACT_AGR_001 | | f_suivi_global |
| hrb_q01 | non répondue | ACT_AGR_001 | | f_suivi_inconnu |
| hrb_q02 | ne contient pas `pluie` | ACT_AGR_006 | | f_sans_eau_de_pluie |
| hrb_q03 | `jamais`, `envisage`, `ancien` | ACT_AGR_002 | | f_sans_diagnostic |
| hrb_q03 | non répondue | ACT_AGR_002 | | f_diagnostic_inconnu |
| hrb_q04 | `reparation_a_vue`, `controle_occasionnel` | ACT_HRB_001 | | f_abreuvoirs_non_entretenus |
| hrb_q04 | `sans_batiment` | | ACT_HRB_001, ACT_AGR_006, ACT_AGR_001, ACT_AGR_002 | f_sans_batiment (priorité 2) |
| hrb_q04 | non répondue | | ACT_AGR_006 | f_batiment_inconnu (priorité 2) |
| hrb_q05 | `acces_direct` | ACT_HRB_003, ACT_HRB_007 | | f_abreuvement_au_ruisseau |
| hrb_q05 | `tonne_ou_partiel` | ACT_HRB_003 | | f_paturage_sans_reseau |
| hrb_q05 | `pas_de_paturage` | | ACT_HRB_003, ACT_HRB_007 | f_sans_paturage (priorité 2) |
| hrb_q06 | `reglages_origine`, `controle_annuel` | ACT_HRB_002 | | f_lavage_non_optimise |
| hrb_q06 | `sans_traite` | | ACT_HRB_002, ACT_HRB_005, ACT_HRB_006, ACT_AGR_001 | f_sans_traite (priorité 2) |
| hrb_q07 | `a_l_egout` | ACT_HRB_005 | | f_prerefroidisseur_perdu |
| hrb_q08 | `rejet_direct`, `avec_lisier` | ACT_HRB_006 | | f_eaux_blanches_melangees |
| hrb_q09 | `achat_si_besoin`, `stock_annuel` | ACT_HRB_004 | | f_fourrage_sans_marge |
| hrb_q10 | `pas_regarde`, `sur_le_moment` | ACT_AGR_009 | | f_secheresse_non_anticipee |
| hrb_q11 | `non`, `informe` | ACT_AGR_010 | | f_hors_collectif |
| niveau | `novice` | | ACT_AGR_010 | f_novice_sans_collectif (priorité 2) |

Chaque mesure du secteur apparaît au moins une fois en ajout :
ACT_AGR_001 (q01), ACT_AGR_002 (q03), ACT_AGR_006 (q02), ACT_AGR_009 (q10), ACT_AGR_010 (q11),
ACT_HRB_001 (q04), 002 (q06), 003 (q05), 004 (q09), 005 (q07), 006 (q08), 007 (q05).

## Choix de conception

- **Le sous-comptage avant l'audit.** Qui ne suit que la facture ou un compteur général reçoit
  le sous-comptage (ACT_AGR_001) : distinguer abreuvement et traite, et lire le compteur la nuit,
  est le premier geste que recommandent les fiches lues (profil, section 5, levier 1). L'audit
  (ACT_AGR_002) vient de q03, indépendamment.
- **Les non-réponses sur la connaissance ajoutent les mesures d'entrée.** Qui ne sait pas comment
  l'eau est suivie (q01) ou si un diagnostic a été fait (q03) reçoit le sous-comptage et l'audit.
  C'est le plan attendu du persona « je ne sais pas ». Aucune autre non-réponse n'ajoute rien.
- **Eau de pluie : qui ne la récupère pas déjà, sauf sans bâtiment.** Les stabulations offrent
  les toitures (profil, levier 11). Un élevage sans bâtiment n'a pas de toiture à valoriser :
  `sans_batiment` retire ACT_AGR_006 en plus des abreuvoirs.
- **Sans bâtiment, ni sous-comptage ni eau de toiture.** Un élevage toujours dehors n'a qu'un
  usage, l'abreuvement au pré : des sous-compteurs par usage n'ont pas d'objet, l'eau de toiture
  non plus. Quand la personne ne sait pas comment sont tenus les bâtiments (q04 sautée), on ne
  propose pas l'eau de toiture sans savoir s'il y a une toiture : c'est ce qui ramène le persona
  « je ne sais pas » à ses deux mesures d'entrée.
- **Pas de démarche collective pour un novice.** Un élevage au niveau novice commence par
  mesurer, réparer et sécuriser son abreuvement. La démarche de territoire est retirée de son
  plan, ce qui ramène le persona novice de onze à dix mesures.
- **Pâturage : deux mesures distinctes.** L'abreuvement direct au ruisseau ou à la mare ajoute à
  la fois le réseau d'abreuvement (le point d'eau tarit l'été, profil 3.1) et l'aménagement hors
  du cours d'eau (obligation ICPE et conditionnalité, profil section 4). La tonne ou un réseau
  partiel n'ajoute que le réseau.
- **Lavage de la traite : le contrôle annuel ne suffit pas.** Le contrôle réglementaire de la
  machine à traire vérifie son fonctionnement, pas les volumes de lavage : `controle_annuel`
  ajoute encore ACT_HRB_002. Seul `volumes_mesures` l'écarte.
- **Prérefroidisseur : sans équipement ou eau perdue.** L'éleveur sans prérefroidisseur reçoit
  la mesure, qui s'appuie sur l'équipement (profil, levier 9). Une réutilisation partielle
  l'écarte.
- **Eaux blanches et vertes mélangées au lisier.** Le mélange est légal mais grossit le volume à
  stocker et à épandre ; le rejet direct ne l'est pas pour un élevage classé (profil, section 4).
  Les deux ajoutent ACT_HRB_006.
- **Fourrage : sans marge d'été.** Acheter quand l'herbe manque ou n'avoir que le stock d'hiver
  ajoute le système fourrager résilient. Le stock de sécurité seul l'écarte : la mesure reste
  un changement de modèle (facilité 1), on ne la pousse pas à qui a déjà la marge.
- **Pas de question sur l'irrigation des fourrages.** La note de périmètre l'envisageait pour
  01.50Z. Aucune mesure de la bibliothèque validée ne porte sur l'irrigation : une question
  n'aurait rien à discriminer (guide, principe 1). L'irrigation reste traitée par le système
  fourrager (cultures moins exigeantes, ACT_HRB_004) et par le plan sécheresse, et l'irrigation
  fine relève de `grandes_cultures`. Limite connue pour les polyculteurs-éleveurs irrigants.
- **Pas d'option pour la transformation à la ferme.** Le chiffre de la fromagerie fermière reste
  à confirmer (profil, section 1.4) et aucune mesure ne la vise. Limite du routage par code NAF,
  déjà signalée par la filière laitière.

## Simulation (200 profils, graine 1)

Passage 1 : zéro alerte. Médiane de 5 mesures par plan (min 1, max 11), 0 % de plans vides,
mesure la plus fréquente à 76 % (audit eau), la moins fréquente à 25 % (berges protégées), tous
les filtres déclenchés à 10 % ou plus. Maturité : 14 % novices, 75 % intermédiaires, 12 %
avancés.

Corrections avant le juge, sur lecture des plans des personas : retrait de la démarche
collective pour les novices (novice à onze mesures), de l'eau de toiture quand q04 est sautée
(« je ne sais pas » à trois mesures), du sous-comptage sans bâtiment (proposé à un élevage de
chevaux sans réseau). Le persona laitier robotisé sortait avancé à 67 %, juste au-dessus du
seuil : son profil était trop complet pour l'archétype « équipé en réflexion », ses génisses
sont désormais abreuvées à la tonne (61 %, intermédiaire).

Aucune alerte à justifier.

## Corrections après le passage 1 du juge

- **Sous-comptage réservé aux élevages qui traient** (allaitant : mesure indue ; ICPE laitier :
  mesure manquante). Sous-compter « par usage » suppose deux usages à séparer, l'abreuvement et
  la traite. `sans_traite` retire donc ACT_AGR_001, et un compteur unique relevé chaque mois
  (`releve_regulier`) l'ajoute désormais : relever un seul compteur ne dit pas ce que consomme
  le bloc traite.
- **Ni audit ni sous-comptage sans bâtiment** (équidés en plein air : audit indu). Sans réseau
  de bâtiment, l'audit usage par usage n'a rien à examiner.
- **Eau de la laiterie seulement si le prérefroidisseur existe** (chevrier : mesure indue). La
  mesure repose sur l'eau du prérefroidisseur ; `sans_prerefroidisseur` ne l'ajoute plus. Le
  chevrier et le laitier novice n'ont plus le même plan.

## Désaccords sur l'ordre, conservés

Le moteur trie par impact × facilité puis horizon ; les notes des cinq transversales sont
publiées et partagées par tous les secteurs, on ne les modifie pas pour celui-ci.
- **Lavage de la traite avant le sous-comptage chez le novice laitier** : seule mesure 3 et 3
  (validée à l'étape 3), gain de 320 m³/an par simple réglage. Commencer par ce geste immédiat
  se défend autant que commencer par compter.
- **Plan sécheresse et système fourrager en fin de plan** : ACT_AGR_009 est notée 1 et 2
  (transversale), ACT_HRB_004 3 et 1 (changement de modèle, moyen terme). Ce sont les leviers
  de fond, pas les premiers gestes. La remarque du juge est reportée à la revue : si l'on veut
  qu'ils remontent pour l'élevage, il faut une règle de tri par secteur, pas des notes faussées.
- **Eaux blanches et vertes en dernier chez le chevrier qui rejette au fossé** : même cause
  (impact 2, facilité 1). Un rejet direct d'effluent est une non-conformité, le plan devrait la
  signaler en tête ; c'est une évolution du moteur (priorité réglementaire) à trancher en revue.

## Alertes et écarts conservés

- **2 % de plans vides** après les corrections : profils aléatoires sans traite, sans pâturage
  ou sans bâtiment qui donnent la meilleure réponse à toutes les autres questions. Leur plan vide
  est celui du persona avancé, conforme à l'archétype (zéro à trois mesures).
- **Pas de mesure pour la fromagerie fermière** (relevé par le juge pour le chevrier) : limite
  connue, voir plus haut. L'audit en tient lieu.

## Arbitrage du point d'arrêt de l'étape 4 (2026-10-15)

Questionnaire validé. ACT_HRB_005 (eau de la laiterie réutilisée) passe de facilité 2 à 3 :
raccorder la sortie du prérefroidisseur à une cuve ou aux abreuvoirs se fait en quelques
semaines. Elle devient la seconde mesure notée 3 et 3 (le guide en admet deux) et remonte en
deuxième position des plans laitiers où l'eau du prérefroidisseur est perdue, comme le juge le
demandait aux deux passages. Simulation rejouée : zéro alerte, indicateurs inchangés.
