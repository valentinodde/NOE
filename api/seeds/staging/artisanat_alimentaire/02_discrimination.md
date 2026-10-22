# Table de discrimination : artisanat alimentaire

Étape 4 du skill `nouveau-secteur`. Écrite avant les filtres, comme le demande la section 6
du guide de conception. Chaque ligne devient un filtre de `action_plan_config`.
Statut : brouillon. Date : 2026-10-15.

## Principe de construction

Douze questions, cinq thèmes. Le fil suit le profil eau : ce que l'artisan sait de sa
consommation, puis le premier poste (nettoyage du laboratoire et plonge) et les équipements,
les rejets, les usages extérieurs, et on termine par l'anticipation des coupures et le
territoire.

Trois principes ont guidé le découpage :

1. **Pas de question d'entrée charcuterie ou boulangerie.** La note de périmètre prévoyait de
   séparer les deux sous-populations par une question d'entrée et des filtres `remove`. La
   bibliothèque validée à l'étape 3 ne contient aucune mesure propre à l'une seulement : L6
   (osmose, boulangerie) et L8 (refroidissement des produits cuits, charcuterie) ont été mis en
   réserve. Les différences passent donc par le texte des options (« graisses raclées, farine
   aspirée », « bacs, moules et ustensiles »), et la question d'entrée aurait été une question
   de plus sans effet sur le plan. À rouvrir si L6 ou L8 entrent dans la bibliothèque.
2. **Ne pas consommer n'est pas une faiblesse.** Les options « sans objet » (art_q08
   `non_exige`, art_q10 `non_concerne`, `station`) sont notées 2 et ne déclenchent rien. Une
   conformité vérifiée auprès du service d'assainissement (art_q09 `pas_exige`) vaut autant
   qu'une autorisation obtenue (3).
3. **Pas de question numérique.** Aucune source ne donne de consommation de référence d'un
   artisan (profil, section 1), donc aucun seuil de volume ne peut déclencher une mesure.

## Les douze questions

| Id | Thème | Type | Question |
|---|---|---|---|
| art_q01 | Connaissance et mesure | single | Comment suivez-vous aujourd'hui la consommation d'eau de votre entreprise ? |
| art_q02 | Connaissance et mesure | single | Votre compteur d'eau dessert-il aussi votre logement ou un autre local ? |
| art_q03 | Connaissance et mesure | single | Avez-vous fait réaliser un diagnostic eau de votre laboratoire ? |
| art_q04 | Laboratoire et nettoyage | single | Avant de laver sols, plans de travail et ustensiles, que retirez-vous à sec ? |
| art_q05 | Laboratoire et nettoyage | single | Comment l'équipe lave-t-elle bacs, moules et ustensiles à la plonge ? |
| art_q06 | Laboratoire et nettoyage | single | Vos robinets et votre plonge sont-ils équipés pour limiter le débit d'eau ? |
| art_q07 | Laboratoire et nettoyage | single | Vos équipements de froid ou votre refroidisseur d'eau sont-ils refroidis par de l'eau rejetée à l'égout ? |
| art_q08 | Eaux usées | single | Les eaux de votre laboratoire passent-elles par un séparateur à graisses ? |
| art_q09 | Eaux usées | single | Avez-vous fait le point avec le service d'assainissement sur le rejet de vos eaux usées ? |
| art_q10 | Usages extérieurs | single | Lavez-vous un véhicule de livraison ou une cour, un quai, une devanture ? |
| art_q11 | Gouvernance et anticipation | single | Savez-vous comment vous continueriez à produire en cas de coupure d'eau ou de restrictions ? |
| art_q12 | Gouvernance et anticipation | single | Participez-vous à une démarche collective sur l'eau ? |

## Table de discrimination

| Question | Option(s) | Mesures ajoutées | Mesures retirées |
|---|---|---|---|
| art_q01 | `facture`, `releve_occasionnel` | ACT_ART_002 | |
| art_q02 | `compteur_partage` | ACT_AGR_001 | |
| art_q03 | `jamais`, `envisage`, `ancien` | ACT_AGR_002 | |
| art_q03 | sans réponse (`not_answered`) | ACT_AGR_002 | |
| art_q04 | `jet_direct`, `parfois` | ACT_ART_005 | |
| art_q05 | `eau_courante`, `variable` | ACT_ART_001 | |
| art_q06 | `aucun`, `partiel` | ACT_ART_003 | |
| art_q07 | `eau_perdue`, `jamais_verifie` | ACT_ART_004 | |
| art_q08 | `aucun`, `sans_entretien` | ACT_ART_006 | |
| art_q09 | `jamais`, `renseigne` | ACT_ART_007 | |
| art_q09 | `jamais` | | ACT_ART_006 |
| art_q10 | `reseau` | ACT_AGR_006 | |
| art_q11 | `jamais_pense`, `informe` | ACT_AGR_009 | |
| art_q12 | `informe` | ACT_AGR_010 | |

Chaque mesure du secteur apparaît une fois : ACT_ART_001 (q05), 002 (q01), 003 (q06),
004 (q07), 005 (q04), 006 (q08), 007 (q09) ; transversales ACT_AGR_001 (q02), 002 (q03),
006 (q10), 009 (q11), 010 (q12).

Un seul filtre `remove` (`f_reglement_inconnu`, priorité 2), ajouté après le premier passage du
juge : voir art_q09. Les autres mesures ne sont ajoutées que par la question qui les concerne, et
les options « sans objet » ne les ajoutent pas. `always_include` et `never_include` restent vides.

## Justification ligne par ligne

**art_q01, suivi.** S'en remettre à la facture ou relever de temps en temps appelle le relevé
hebdomadaire et le test de fuite du soir au matin. Celui qui relève chaque semaine sans
contrôle des fuites ne reçoit rien : le pas restant est petit et la mesure décrit d'abord le
relevé.

**art_q02, compteur partagé.** Seul l'artisan dont le compteur dessert aussi son logement ou
un autre local reçoit le compteur par usage, sous la forme d'un sous-compteur sur le
laboratoire. Avec un compteur propre à l'entreprise, le laboratoire et la boutique d'un artisan
ne justifient pas de sous-comptage. L'option partagée est notée 1 et non 0 : le partage n'est
pas une pratique, mais il empêche de connaître sa consommation.

**art_q03, diagnostic.** Comme dans les autres secteurs, ne pas savoir si un diagnostic a été
fait est en soi le motif de le recommander (`not_answered`). La question cite la chambre de
métiers, qui le propose gratuitement dans certaines régions (profil, L3).

**art_q04, nettoyage à sec.** Premier poste du laboratoire. Laver directement à l'eau ou
racler seulement quand on y pense déclenche la seule mesure notée 3 et 3, qui sort en tête.

**art_q05, plonge et gestes.** Laver sous l'eau courante, ou laisser chacun faire à sa façon,
appelle la formation de l'équipe, apprentis compris.

**art_q06, réducteurs de débit.** Robinetterie d'origine ou quelques mousseurs sans douchette
à gâchette à la plonge : équiper tous les points d'eau.

**art_q07, froid à eau perdue.** Le profil n'a pas pu dire quelle part du parc artisanal est
refroidie par eau perdue. « Jamais vérifié » déclenche donc la mesure au même titre que « oui »,
puisqu'elle commence par la vérification par le frigoriste. C'est la mesure la plus fréquente
après l'audit en simulation (58 %), effet attendu de cette incertitude. Si le juge ou le
relecteur la trouve trop présente, la piste est de réserver la mesure à `eau_perdue` et de
porter la vérification dans le diagnostic.

**art_q08, séparateur à graisses.** Pas de séparateur, ou un séparateur vidé seulement quand il
déborde. L'option `non_exige` (la collectivité ne le demande pas pour cette activité, cas
fréquent d'une pâtisserie) ne déclenche rien.

**art_q09, rejet.** Ne pas savoir ce que le règlement demande, ou s'être renseigné sans avoir
fait la démarche, appelle la mesure. Le statut varie selon la collectivité (profil, section 4) :
la mesure commence par se renseigner. **Corrigé après le premier passage du juge** : qui ne sait
pas ce que le règlement demande (`jamais`) ne reçoit plus le séparateur à graisses, retiré en
priorité 2. Le juge le jugeait indu pour la boulangerie novice : on ne fait pas acheter un bac et
signer un contrat de vidange avant de savoir si la collectivité l'exige. La démarche auprès du
service vient d'abord ; le séparateur reviendra au questionnaire suivant si le règlement l'impose.
Effet assumé : un charcutier sans séparateur qui ne connaît pas son règlement ne reçoit lui aussi
que la démarche, dont les infos complémentaires citent le séparateur exigé par certaines villes.

**art_q10, usages extérieurs.** Seul le lavage d'un véhicule ou de surfaces extérieures à l'eau
du réseau ouvre la récupération d'eau de pluie, seul usage autorisé pour une entreprise
alimentaire (profil, L9). Passer en station de lavage ou n'avoir rien à laver ne déclenche rien.

**art_q11, coupure et restrictions.** Le risque principal du secteur est la coupure d'eau
potable, pas l'arrêté sécheresse (profil, section 3). Ne jamais y avoir pensé ou seulement
suivre les alertes appelle le plan de gestion. Contrairement à l'hôtellerie, savoir quoi arrêter
et qui prévenir (`consignes`) suffit : un plan écrit et révisé est disproportionné pour une
entreprise de quelques personnes.

**art_q12, démarche collective.** Comme en hôtellerie, seul l'artisan qui connaît une démarche
sans y participer reçoit la mesure. « Non » ne déclenche rien, faute de porte d'entrée concrète.

## Simulation et écarts aux cibles

Simulation du 2026-10-15 après la correction du juge (200 profils aléatoires, graine 1) : **zéro
alerte**. Médiane de 5 mesures par plan (de 1 à 10), aucun plan vide ni complet ; mesure la plus
fréquente l'audit (76 %), la moins fréquente l'eau de pluie (19 %), le séparateur passe de 34 à
24 % ; niveaux novice 8 %, intermédiaire 80 %, avancé 13 %. Tous les filtres se déclenchent, de
11 % (`f_audit_inconnu`) à 65 %, dont `f_reglement_inconnu` à 26 %. Le persona novice passe de
onze à dix mesures, dans la fourchette du guide.

**Écart conservé : 8 % de novices**, sous le repère de 10 % du guide (section 7) mais au-dessus
du seuil de 5 %. Causes voulues : les options « sans objet » notées 2 (art_q08, art_q10) et
l'option partagée de art_q02 notée 1 tirent vers le niveau intermédiaire. Le juge trouve l'échelle
trop resserrée au centre pour un secteur peu outillé ; les profils aléatoires tirent les options
uniformément, ce qui surestime le centre (guide, section 7), et le persona novice tombe bien à 3 %.

## Désaccords avec le juge, documentés

Le juge conteste l'ordre des trois premières mesures pour quatre personas. Ces ordres découlent du
tri du moteur (impact × facilité, puis horizon), commun à tous les secteurs, et non des filtres :

- **Nettoyage à sec avant les mesures de connaissance** (novice, pâtissier) : choix assumé à
  l'étape 3, c'est la seule mesure notée 3 et 3, gratuite et sur le premier poste.
- **Compteur par usage avant l'audit** (novice) et **audit avant les gestes économes**
  (pâtissier) : égalités de score (2 × 3, immédiat), départagées par l'ordre de la bibliothèque.
- **Audit avant le froid à eau perdue** (charcuterie urbaine) : le froid est noté 3 × 2 en moyen
  terme, l'audit 2 × 3 en immédiat. Remonter le froid demanderait de surnoter sa facilité.
- **Démarche collective avant l'autorisation de déversement** (charcutier équipé) : 2 × 2 contre
  1 × 3. Le juge note aussi que la description de ACT_AGR_010 (PTGE, commission locale de l'eau)
  ne parle pas à un artisan. C'est une mesure transversale publiée, qu'on ne modifie pas ici :
  demande d'évolution ajoutée à la note de périmètre (section 9).

Pas de second passage du juge : la correction ne touche qu'un filtre et son effet se lit
directement sur les plans.
