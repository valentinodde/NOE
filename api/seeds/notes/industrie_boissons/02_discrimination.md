# Table de discrimination : brasserie et boissons sans alcool

Étape 4 du skill `nouveau-secteur`. Écrite avant les filtres (guide, section 6). Chaque ligne
devient un filtre de `action_plan_config`.
Statut : brouillon. Date : 2026-10-15.

## Principe de construction

Douze questions, quatre thèmes. Le fil suit le profil eau : ce que le site sait de sa
consommation et d'où vient son eau, puis les postes hors ingrédient du plus partagé au plus
spécifique (nettoyage, pasteurisation, froid, eau du refroidisseur de moût), les rejets, et on
termine par l'anticipation des restrictions et le territoire de la ressource.

Trois principes :

1. **Quatre métiers, aucune question d'activité.** Brasserie, malterie, embouteillage d'eau,
   boissons rafraîchissantes. Une question « que produisez-vous ? » ne porterait aucun score.
   Les métiers se distinguent par les options « sans objet » des questions d'équipement,
   notées 2 en maturité comme le demande le guide : pas de pasteurisation (q07), pas de
   brassage (q09), pas de rejet chargé (q10). Ces options n'ajoutent rien, et comme chaque
   mesure de ces postes n'est ajoutée que par une seule question, l'absence d'ajout suffit :
   aucun filtre `remove` n'est nécessaire sur q07, q09 et q10.
2. **La microbrasserie est le cas majoritaire** (89 % des brasseries à effectif connu ont moins
   de dix salariés). Les options faibles décrivent ses pratiques réelles (nettoyage au tuyau,
   eau du moût à l'égout) sans jugement, et les mesures lourdes (refroidissement, pasteurisateur)
   ne sortent que si l'équipement correspondant existe.
3. **Un seuil réglementaire plutôt qu'un seuil arbitraire.** q03 déclenche à 10 000 m³ par an,
   seuil de l'arrêté du 30 juin 2023 qui impose aux ICPE de réduire leurs prélèvements en
   sécheresse, comme pour `vins_spiritueux`.

## Les douze questions

| Id | Thème | Type | Question |
|---|---|---|---|
| boi_q01 | Connaissance et mesure | single | Comment suivez-vous aujourd'hui la consommation d'eau de votre site ? |
| boi_q02 | Connaissance et mesure | multi (`source_eau`) | D'où provient l'eau que vous utilisez sur le site ? |
| boi_q03 | Connaissance et mesure | numeric | Quelle est votre consommation d'eau annuelle, tous usages confondus ? |
| boi_q04 | Connaissance et mesure | single | Avez-vous réalisé un audit eau ou un diagnostic de vos consommations ? |
| boi_q05 | Nettoyage, pasteurisation et froid | single | Comment nettoyez-vous vos cuves et vos lignes ? |
| boi_q06 | Nettoyage, pasteurisation et froid | single | Vos équipes ont-elles des consignes de nettoyage économe ? |
| boi_q07 | Nettoyage, pasteurisation et froid | single | Comment vos produits sont-ils pasteurisés ? |
| boi_q08 | Nettoyage, pasteurisation et froid | single | Comment évacuez-vous la chaleur de vos groupes froids et installations ? |
| boi_q09 | Réutilisation et rejets | single | Que devient l'eau réchauffée en sortie du refroidisseur de moût ? |
| boi_q10 | Réutilisation et rejets | single | Que deviennent vos coproduits et vos eaux de lavage ? |
| boi_q11 | Gouvernance et anticipation | single | Avez-vous analysé votre exposition aux restrictions d'eau ? |
| boi_q12 | Gouvernance et anticipation | single | Agissez-vous avec les autres usagers de la ressource de votre territoire ? |

## Table de discrimination

| Question | Option(s) | Mesures ajoutées | Mesures retirées |
|---|---|---|---|
| boi_q01 | `aucun_compteur`, `compteur_general` | ACT_AGR_001 | |
| boi_q01 | sans réponse (`not_answered`) | ACT_AGR_001 | |
| boi_q01 | `compteur_general`, `releves_reguliers` | ACT_BOI_001 | |
| boi_q02 | classe contient `forage` | ACT_AGR_010 | |
| boi_q02 | classe contient `source_embouteillage` | ACT_AGR_010, ACT_BOI_008 | |
| boi_q03 | ≥ 10 000 m³ par an | ACT_AGR_009 | |
| boi_q03 | < 1 000 m³ par an | | ACT_AGR_009 |
| boi_q04 | `jamais`, `envisage`, `ancien` | ACT_AGR_002 | |
| boi_q04 | sans réponse (`not_answered`) | ACT_AGR_002 | |
| boi_q05 | `manuel_tuyau` | ACT_BOI_002 | |
| boi_q05 | `nep_duree_fixe` | ACT_BOI_003 | |
| boi_q05 | `nep_duree_fixe`, `nep_optimisee` | | ACT_BOI_002 |
| boi_q06 | `aucune`, `orales` | ACT_BOI_002 | |
| boi_q07 | `tunnel_appoint`, `tunnel_partiel` | ACT_BOI_004 | |
| boi_q08 | `eau_perdue`, `tours_non_suivies` | ACT_BOI_005 | |
| boi_q09 | `rejetee`, `en_partie` | ACT_BOI_006 | |
| boi_q10 | `tout_egout`, `coproduits_separes` | ACT_BOI_007 | |
| boi_q11 | `non_analyse`, `informe` | ACT_AGR_009 | |
| boi_q11 | `plan_formalise` | | ACT_AGR_009 |
| boi_q12 | `participe`, `protection_ressource` | | ACT_AGR_010 |
| boi_q12 | `protection_ressource` | | ACT_BOI_008 |

Les douze mesures visibles apparaissent toutes au moins une fois. `always_include` et
`never_include` restent vides : aucune mesure n'est un point d'entrée obligé.

## Justification ligne par ligne

**boi_q01.** Ni compteur, ni compteur général seul : le site ne sait pas quel poste consomme,
d'où le compteur par usage. Le ratio par hectolitre est proposé à qui a déjà une mesure
(compteur général, relevés réguliers) mais ne la rapporte pas encore à sa production ; à qui
n'a aucun compteur, on propose d'abord de compter. L'option la plus mûre (`ratio_hl`) ne
déclenche rien. Sans réponse : compteur par usage, pour que le persona « je ne sais pas »
reçoive une mesure d'entrée.

**boi_q02, deux filtres de classe.** Un prélèvement propre en nappe (forage) ou une source
exploitée pour l'embouteillage rend la démarche collective pertinente (SAGE, PTGE, contrat de
nappe, cas de la nappe des grès du Trias inférieur à Vittel). La source d'embouteillage
déclenche en plus la protection de l'impluvium, levier propre aux eaux de table. Un site sur le
seul réseau public ne reçoit pas la démarche collective : c'est la leçon du second passage du
juge sur `vins_spiritueux`. Pluie et eaux réutilisées ne servent qu'au score.

**boi_q03.** Au-delà de 10 000 m³ par an, une ICPE doit réduire de 5 à 25 % ses prélèvements
selon le niveau de restriction et tenir une procédure écrite dès la vigilance : le plan de
gestion devient nécessaire. Retiré si q11 dit qu'il existe déjà. Sous 1 000 m³ par an
(une microbrasserie documentée consomme 170 m³), il est retiré : un document de gestion est
disproportionné, les consignes sécheresse portées par ACT_BOI_002 suffisent. Ajouté après le
premier passage du juge (persona `microbrasserie`).

**boi_q04.** Pas d'audit, audit envisagé ou de plus de cinq ans : diagnostic. Sans réponse, ne
pas savoir est le motif même du diagnostic.

**boi_q05.** Nettoyage à la main au tuyau : nettoyage manuel économe (raclage, moyenne
pression), le levier des microbrasseries. NEP automatique à durée fixe : optimisation de la NEP
(phases, conductimètre, récupération du dernier rinçage). Le nettoyage manuel déjà équipé
(moyenne pression, boules de lavage) et la NEP pilotée ne déclenchent rien. Un site en NEP
(durée fixe ou pilotée) ne reçoit pas le nettoyage manuel économe, même sans consignes : retrait
prioritaire, ajouté après le premier passage du juge (personas `eau_de_source`,
`limonaderie_reseau`).

**boi_q06.** Pas de consignes, ou seulement orales : la même mesure ACT_BOI_002, qui porte
aussi la formation des équipes et les consignes de sécheresse. Retirée aux sites en NEP (q05).

**boi_q07.** Pasteurisateur tunnel en appoint continu ou en recyclage partiel : pasteurisateur
en boucle. Pasteurisation flash ou tunnel déjà régulé en boucle : rien. Pas de pasteurisation
(bière non pasteurisée, eau, malt) : rien, et aucune autre question n'ajoute ACT_BOI_004.

**boi_q08.** Eau perdue ou tours aux purges non mesurées : refroidissement économe. Tours
pilotées ou groupes froids à air ou adiabatiques : rien. Le guide demande une option « sans
objet » à 2 ; ici l'option sans tour est la plus mûre (le profil la cite comme le levier
lui-même), elle est notée 3.

**boi_q09.** Eau du refroidisseur de moût rejetée, ou réutilisée en partie seulement : la
récupérer en cuve. Pas de brassage sur le site : rien.

**boi_q10.** Coproduits et lavages mêlés à l'égout, ou coproduits séparés mais lavages rejetés
sans bassin tampon ni prétraitement : ACT_BOI_007. Pas de rejet chargé (embouteillage d'eau
seule) : rien.

**boi_q11.** Exposition non analysée ou connue sans formalisation : plan de gestion. Plan écrit
existant : retrait, même au-dessus du seuil de q03.

**boi_q12.** Participe déjà à une instance de bassin, ou a des conventions de protection de sa
ressource : retrait de la démarche collective. Conventions de protection : retrait de la
protection de l'impluvium.

## Exceptions de barème

**boi_q02 (inventaire des sources).** Réseau, forage et source d'embouteillage à 0 en maturité
(0 ou 1 en concernement), pluie et eaux réutilisées à 2 (3 en concernement). Aucune option
seule n'atteint 3 : c'est la combinaison qui l'atteint (somme plafonnée à 3), comme pour
`vins_spiritueux`. Posséder un forage n'est pas une maturité.

**boi_q03 (volume).** Réponse renseignée : 1 en maturité, 2 en concernement. Connaître son
volume annuel est un début de suivi, pas une pratique structurée.

**boi_q08.** L'option sans tour est notée 3 et non 2 (voir plus haut).

## Corrections après le premier passage du juge

Voir `03_jugement.md`. Trois mesures indues corrigées par deux filtres de retrait (q03 sous
1 000 m³, q05 en NEP). Ordre : ACT_BOI_001 (ratio) passe de 1 à 2 en impact, comme ACT_LAI_002,
puisque le suivi du ratio fait repérer les fuites (15 % de la consommation dans le cas du
profil) ; il remonte de la septième à la deuxième place du persona novice. Points du juge non
retenus, écrits ici pour la revue :

- **Ordre global.** Le tri du moteur est commun à tous (impact × facilité, puis horizon) : il ne
  peut pas faire passer le plan de gestion en tête pour un gros site et en queue pour un petit,
  ni le refroidissement (3 × 1, investissement lourd) devant l'audit. Noter le refroidissement
  plus facile serait inexact.
- **Pas de mesure sur la trempe du malt.** Le profil ne donne aucun levier sourcé propre à la
  trempe (37 établissements). La malterie reçoit le ratio, l'audit, le froid et les rejets.
  À combler si une source acceptée est trouvée.
- **Concernement qui suit la maturité.** Choix du guide (section 5.4) : les deux scores sont
  souvent égaux et ne divergent que sur « on y a réfléchi ». Le concernement mesure ce que
  l'entreprise perçoit, pas son exposition, qui est l'objet des autres onglets.
- **« Je ne sais pas » noté au-dessus du microbrasseur.** Les réponses sautées ne comptent pas
  dans le score : effet du moteur, commun à tous les secteurs.

## Résultats de simulation

Après corrections (200 profils, graine 1) : une alerte (eau de pluie, justifiée plus bas),
médiane 5 mesures (1 à 9), aucun plan vide, ACT_BOI_002 ramenée de 58 % à 37 %, les 21 filtres
déclenchés, maturité inchangée (novice 8 %, avancé 5 %).

Premier passage (200 profils, graine 1) : une alerte, médiane 5 mesures (2 à 10), aucun plan
vide, fréquences des mesures sectorielles et transversales citées entre 18 % (NEP) et 79 %
(audit), les 19 filtres déclenchés entre 9 % et 70 %, maturité **novice 8 %, intermédiaire
88 %, avancé 5 %**. Contrôle sur trois graines de 1 000 profils : novice 8 à 9 %, avancé 5 à
6 %, stable.

Écart assumé : novices et avancés sous le repère de 10 % du guide, au-dessus du plancher de
5 %. Même situation que `vins_spiritueux` (9 % et 7 %), `hotellerie` et
`industrie_fruits_legumes`. Les trois options « sans objet » notées 2 (q07, q09, q10) tirent
vers le milieu ; les descendre rendrait artificiellement novice un embouteilleur d'eau ou une
malterie.

## Alertes de simulation gardées et justifiées

**« mesure jamais proposée : ACT_AGR_006 (Récupération d'eau de pluie) ».** La mesure est
transversale (`secteurs: []`), donc visible pour tous les secteurs que l'on veuille ou non, mais
aucun filtre ne la cite : choix validé au point d'arrêt de l'étape 2 (voir `00_perimetre.md`,
section 8). L'eau d'ingrédient doit être potable, les usages sans contact (sols, extérieurs)
pèsent peu face au nettoyage et au refroidissement, et la réutilisation est portée par
ACT_BOI_006. Le vérificateur l'avertit aussi (« mesures transversales jamais citées »). Si le
relecteur préfère la proposer, le filtre naturel est celui de `vins_spiritueux` : réseau parmi
les sources, sauf niveau novice et sauf pluie déjà cochée.
