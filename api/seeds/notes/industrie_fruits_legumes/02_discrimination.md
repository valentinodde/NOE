# Table de discrimination : transformation de fruits et légumes

Étape 4 du skill `nouveau-secteur`. Écrite avant les filtres (guide, section 6). Chaque ligne
devient un filtre de `action_plan_config`.
Statut : brouillon. Date : 2026-09-25.

## Principe de construction

Douze questions, quatre thèmes. Le fil suit le profil eau : ce que l'entreprise sait de sa
consommation, puis la matière première dans l'ordre où elle traverse l'usine (réception et
lavage, épluchage et blanchiment, refroidissement après traitement thermique), les équipes de
campagne, les deux gisements de réutilisation (rinçages, condensats), les rejets, et enfin
l'anticipation des restrictions pendant la campagne.

Trois principes :

1. **Le secteur est hétérogène, donc chaque question de procédé a son option « sans objet ».**
   Un transformateur de fruits à coque ne lave pas de produits terreux, un atelier de 4e gamme
   ne refroidit pas d'autoclave, une conserverie de légumes n'a pas d'évaporateur. Ces options
   valent 2 en maturité (ne pas avoir l'usage n'est pas une faiblesse) et ne déclenchent pas
   la mesure correspondante.
2. **Un filtre `remove` seulement quand une autre question pourrait ajouter la mesure.** Les
   mesures d'épluchage, de refroidissement et de condensats ne sont ajoutées que par leur
   propre question : l'option « sans objet » suffit à ne pas les proposer, un `remove` y
   serait un filtre sans effet. Les `remove` servent là où deux questions se croisent
   (q05 et q09 pour le recyclage, q03 et q12 pour le plan de gestion, q02 et q09 pour l'eau
   de pluie).
3. **Deux seuils chiffrés, tous deux réglementaires ou d'échelle.** 10 000 m3 par an est le
   seuil de l'arrêté du 30 juin 2023 à partir duquel une ICPE doit réduire ses prélèvements en
   sécheresse (profil, section 3). 100 000 m3 par an marque un site dont le prélèvement pèse
   dans l'équilibre local de la ressource : ARDO Gourin et d'aucy du Faouët sont entre 350 000
   et 500 000 m3 (profil, section 1). C'est un choix de conception, pas un seuil légal.

## Les douze questions

| Id | Thème | Type | Question |
|---|---|---|---|
| frl_q01 | Connaissance et mesure | single | Comment suivez-vous aujourd'hui la consommation d'eau de votre site ? |
| frl_q02 | Connaissance et mesure | multi (`source_eau`) | D'où provient l'eau que vous utilisez sur le site ? |
| frl_q03 | Connaissance et mesure | numeric | Quelle est votre consommation d'eau annuelle, tous usages confondus ? |
| frl_q04 | Connaissance et mesure | single | Avez-vous réalisé un audit eau ou un diagnostic de vos consommations ? |
| frl_q05 | Lavage et traitements thermiques | single | Comment la matière première est-elle débarrassée de sa terre et lavée à réception ? |
| frl_q06 | Lavage et traitements thermiques | single | Que devient l'eau de vos lignes d'épluchage et de blanchiment ? |
| frl_q07 | Lavage et traitements thermiques | single | Comment refroidissez-vous vos produits après cuisson, appertisation ou pasteurisation ? |
| frl_q08 | Lavage et traitements thermiques | single | Vos équipes, saisonniers compris, ont-elles des consignes d'économie d'eau ? |
| frl_q09 | Réutilisation et rejets | single | Réutilisez-vous l'eau de vos derniers rinçages pour les lavages en amont ? |
| frl_q10 | Réutilisation et rejets | single | Votre site concentre-t-il ou sèche-t-il des produits, et que deviennent les condensats ? |
| frl_q11 | Réutilisation et rejets | single | Comment gérez-vous vos eaux usées et vos déchets de préparation ? |
| frl_q12 | Gouvernance et anticipation | single | Avez-vous analysé votre exposition aux restrictions d'eau pendant votre campagne ? |

## Table de discrimination

| Question | Option(s) | Mesures ajoutées | Mesures retirées |
|---|---|---|---|
| frl_q01 | `aucun_compteur`, `compteur_general` | ACT_AGR_001 | |
| frl_q01 | `par_ligne` | ACT_FRL_002 | |
| frl_q02 | classe contient `pluie` | | ACT_AGR_006 |
| frl_q03 | ≥ 10 000 m3 par an | ACT_AGR_009 | |
| frl_q03 | < 2 000 m3 par an | | ACT_AGR_001, ACT_FRL_002, ACT_AGR_006 |
| frl_q03 | ≥ 100 000 m3 par an | ACT_AGR_010 | |
| frl_q04 | `jamais`, `envisage`, `ancien` | ACT_AGR_002 | |
| frl_q04 | sans réponse (`not_answered`) | ACT_AGR_002 | |
| frl_q05 | `lavage_direct`, `prenettoyage_partiel` | ACT_FRL_003 | |
| frl_q05 | `sans_lavage_brut` | ACT_AGR_006 | ACT_FRL_003, ACT_FRL_006 |
| frl_q06 | `rejetee`, `decantee_partiel` | ACT_FRL_005 | |
| frl_q07 | `eau_perdue`, `reutilisee_partiel` | ACT_FRL_004 | |
| frl_q08 | `aucune`, `orales` | ACT_FRL_001 | |
| frl_q09 | `aucun`, `envisage`, `partiel` | ACT_FRL_006 | |
| frl_q10 | `condensats_perdus`, `valorise_partiel` | ACT_FRL_007 | |
| frl_q11 | `sans_separation` | ACT_FRL_008 | |
| frl_q12 | `non_analyse`, `informe` | ACT_AGR_009 | |
| frl_q12 | `plan_formalise` | | ACT_AGR_009 |
| frl_q12 | `plan_formalise` | ACT_AGR_010 | |

`always_include` et `never_include` restent vides.

## Justification ligne par ligne

**frl_q01, escalier sur la même question.** Sans compteur ou avec le seul compteur général,
le premier geste est le compteur par usage. Le ratio par tonne se calcule dès qu'un compteur
est relevé : il est proposé au compteur général et à celui qui compte déjà par ligne. Celui
qui n'a aucun compteur ne le reçoit pas encore, on ne rapporte pas à la tonne un volume
qu'on ne mesure pas.

**frl_q02, l'eau de pluie déjà récupérée retire la mesure correspondante.** La question sert
surtout au score et au contexte ; aucune option n'y ajoute de mesure, car l'eau du réseau est
imposée au contact des denrées (règlement 852/2004) et ne signale donc pas une faiblesse.

**frl_q03, deux seuils.** Voir le principe 3. Le plan de gestion vient au-delà de 10 000 m3,
la démarche collective au-delà de 100 000 m3 (c'est là que se loge le levier L14 du profil :
faire reconnaître son calendrier de campagne dans la gestion locale).

**frl_q04, audit.** Comme en laiterie et en viande : jamais, envisagé ou ancien, et aussi
« je ne sais pas », car celui qui ignore s'il y a eu un audit est le premier à qui il sert.

**frl_q05, lavage d'entrée.** Lavage direct ou prénettoyage partiel : ACT_FRL_003. Sans
produits terreux (jus reconstitués, fruits secs et à coque, produits reçus prélavés), le lavage
d'entrée et la cascade des eaux de lavage n'ont pas d'objet : `remove` en priorité 2, qui
l'emporte sur l'ajout de q09.

**frl_q06, frl_q07, frl_q10 : une mesure par question, « sans objet » neutre.** Épluchage et
blanchiment, refroidissement, condensats. L'option partielle déclenche encore la mesure :
décanter une partie, réutiliser l'eau de refroidissement pour d'autres usages ou valoriser les
condensats sans déclaration laisse le levier ouvert.

**frl_q08, consignes des équipes.** Aucune consigne ou consignes orales : formation de
campagne. Les consignes écrites rappelées en début de campagne suffisent à ne plus la
proposer.

**frl_q09, recyclage en cascade et eau de pluie.** Tant que la cascade n'est pas généralisée,
ACT_FRL_006. L'eau de pluie n'est proposée qu'à celui qui ne réutilise rien du tout : c'est
un complément pour les usages sans contact (sols, quais, extérieurs), pas le premier levier
de ce secteur (profil, section 2). Même rattachement que la viande (`via_q08`).

**frl_q11, effluents.** Pas de séparation ou prétraitement sommaire : ACT_FRL_008. La
convention à jour avec déchets collectés à part suffit à ne plus la proposer.

**frl_q12, restrictions.** Non analysé ou informé : plan de gestion. Plan écrit : `remove` du
plan de gestion, qui l'emporte sur le seuil de q03. Évalué ou planifié : l'étape suivante
est collective, ACT_AGR_010.

## Couverture des mesures

| Mesure | Ajoutée par | Retirée par |
|---|---|---|
| ACT_FRL_001 Gestes économes en campagne | q08 | |
| ACT_FRL_002 Ratio eau par tonne | q01 | q03 |
| ACT_FRL_003 Lavage d'entrée économe | q05 | q05 |
| ACT_FRL_004 Refroidissement en boucle | q07 | |
| ACT_FRL_005 Épluchage et blanchiment | q06 | |
| ACT_FRL_006 Recyclage en cascade | q09 | q05 |
| ACT_FRL_007 Eau de végétation | q10 | |
| ACT_FRL_008 Effluents de campagne | q11 | |
| ACT_AGR_001 Compteur par usage | q01 | q03 |
| ACT_AGR_002 Audit eau | q04 | |
| ACT_AGR_006 Récupération d'eau de pluie | q05 | q02, q03 |
| ACT_AGR_009 Plan de gestion de l'eau | q03, q12 | q12 |
| ACT_AGR_010 Démarche collective | q03, q12 | |

Treize mesures visibles, une de plus que la borne du guide : même écart que la laiterie et
la viande, imposé par les cinq transversales.

## Calibrage (2026-09-25)

Premier passage : zéro alerte, mais 4 % de novices seulement (cible : aucun niveau sous 5 %).
Cause : la question à choix multiples frl_q02 additionne ses scores (plafond 3), si bien que
deux sources quelconques suffisaient à y obtenir 2 ou 3. Corrections :

- frl_q02 : forage et captage en rivière passent à 0 en maturité (1 en concernement) ; eau de
  pluie à 1 ; eaux recyclées et condensats à 2. Le 3 reste atteignable en combinant les deux
  ressources internes, ce qui est bien le signe d'un site piloté.
- frl_q09 : `partiel` (une ligne ou un poste) passe de 2 à 1 en maturité, puisque la pratique
  n'est pas généralisée.

Second passage : zéro alerte, médiane de 6 mesures par plan (min 2, max 11), aucun plan vide,
maturité novice 6 %, intermédiaire 85 %, avancé 10 %. Fréquences des mesures entre 29 %
(eau de pluie) et 82 % (audit), tous les filtres déclenchés au-dessus de 10 %.

Écart assumé : les novices restent sous les 10 % que le guide donne comme repère de bon
calibrage (section 7), mais au-dessus du plancher de 5 %. Les quatre options « sans objet »
à 2, voulues par le principe 1, tirent mécaniquement vers l'intermédiaire.

## Corrections après le premier passage du juge (2026-09-25)

Voir `03_jugement.md`. Ce qui a changé dans la table ci-dessus (déjà corrigée) :

- **Eau de pluie** (indue chez trois personas où l'eau touche le produit) : elle n'est plus
  ajoutée par frl_q09 (rien de réutilisé) mais par frl_q05 `sans_lavage_brut` : sans produits
  terreux, l'eau sert surtout aux locaux et aux sanitaires, usages sans contact. Fréquence
  aléatoire de 29 % à 16 %.
- **Ratio par tonne** : proposé seulement à qui a déjà des compteurs par ligne (`par_ligne`),
  plus au compteur général. Le « je ne sais pas » passe de trois à deux mesures (compteur,
  audit).
- **Petits volumes** : sous 2 000 m3 par an, `remove` du compteur par usage et du ratio par
  tonne (choix de conception : à ce niveau l'eau sert aux locaux et aux sanitaires, sans lien
  avec la production). L'audit reste : c'est la mesure d'entrée, et elle peut être légère.
- **Démarche collective** : frl_q12 ne l'ajoute plus qu'avec un plan écrit (`plan_formalise`),
  plus sur `evalue`. Fréquence de 58 % à 44 %.
- **ACT_FRL_007 Eau de végétation** : impact de 2 à 3. Pour un site qui concentre, c'est une
  substitution de source (grille 4.2, « changement de dépendance »), comme les eaux issues
  du lait en laiterie. Elle remonte de la quatrième à la troisième place chez jus_concentres.

**Remarques du juge non suivies, et pourquoi :**

- *Ordre des mesures* (gestes économes huitièmes chez le novice, épluchage cinquième chez
  icpe_conforme, plan de gestion après démarche collective chez surgelation_equipee) : le tri
  est global, impact × facilité puis horizon, et ne dépend pas du persona. Relever la
  formation à 2 en impact contredirait la grille (formation = 1) ; baisser la facilité de
  l'épluchage est déjà 1 (investissement lourd). Écart documenté, pas de correction.
- *Effluents de campagne chez quatrieme_gamme* : le dégrillage est fait, mais les déchets
  restent en partie mêlés aux eaux ; la mesure garde son objet. Le mot « campagne » du titre
  court est un léger décalage pour un site qui tourne toute l'année, accepté.
- *Audit à 82 %* : trois options sur quatre de frl_q04 sont des faiblesses, et c'est la
  mesure d'entrée du secteur. Accepté.
- *Niveaux tassés, « je ne sais pas » intermédiaire* : le score ne porte que sur les questions
  répondues, et le « je ne sais pas » répond `compteur_general` (1 sur 3, soit 33 %, borne
  basse de l'intermédiaire). Effet du moteur de scoring commun à tous les secteurs, hors
  périmètre de cette session.

## Corrections après le second passage du juge (2026-09-25)

- **Eau de pluie retirée sous 2 000 m3 par an** (indue chez fruits_a_coque : une cuve pour
  quelques dizaines de m3 économisables). Le premier passage la jugeait au contraire
  pertinente pour cet atelier ; le second passage tranche, en cohérence avec le retrait du
  compteur et du ratio au même seuil. Fréquence aléatoire : 10 %, à la limite basse de la
  cible, assumée pour une mesure marginale dans ce secteur.
- **Effluents de campagne réservés à `sans_separation`** (indue chez quatrieme_gamme, qui
  dégrille déjà et tourne toute l'année). Fréquence : 19 %.
- **Titre court de ACT_FRL_001** : « Gestes économes des équipes » au lieu de « Gestes
  économes en campagne », pour les sites qui tournent toute l'année.

Simulation finale : zéro alerte, médiane de 5 mesures (min 1, max 9), aucun plan vide,
novice 6 %, intermédiaire 85 %, avancé 10 %, fréquences entre 10 % et 82 %, tous les filtres
déclenchés à 10 % ou plus. Pas de troisième passage du juge (deux au plus).

**Désaccord documenté, non corrigé** : l'ordre des mesures. Le juge demande aux deux passages
que la mesure phare d'un profil passe en tête (eau de végétation chez jus_concentres,
épluchage chez icpe_conforme, gestes économes chez le novice, plan de gestion avant démarche
collective). Le tri est global (impact × facilité, puis horizon) et ne peut pas suivre le
constat principal de chaque persona sans fausser la grille 4.2. Question à porter au
relecteur : faut-il un bonus de tri pour les mesures qui répondent au premier axe prioritaire
de la Synthèse ? C'est une évolution du moteur, commune à tous les secteurs.
- Questionnaire validé le 2026-09-25 au point d'arrêt de l'étape 4.
