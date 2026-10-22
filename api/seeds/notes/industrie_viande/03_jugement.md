# Jugement des personas : industrie de la viande et des produits de la mer

Étape 4 du skill `nouveau-secteur`, agent `juge-personas`. Statut : brouillon. Date : 2026-09-24.

## Premier passage

Verdict du juge : **à revoir**. Une persona avec une mesure indue ou manquante
(`salaisonnerie_seche`), un niveau aberrant (`ne_sait_pas` classé avancé à 67 %), un défaut
d'ordre récurrent sur quatre personas.

### Constats du juge, résumés

| Persona | Constat |
|---|---|
| abattoir_novice | Aucune mesure indue, mais les douze mesures sortent (cible 7 à 10). « Sang et saumures à part » et « Prétraitement des effluents » trop bas pour des non-conformités. |
| volailles_equipe | Plan juste. Démarche collective en 3e position, avant ratio et plan de gestion. |
| salaisonnerie_seche | Réutilisation des rinçages indue (2 500 m3, pas de rinçage de process). Nettoyage économe manquant si les bonnes pratiques ne sont pas déclarées. Filtres `remove` de l'usage principal : test réussi. |
| site_avance | Plan vide, conforme. |
| ne_sait_pas | Plan juste (audit seul), niveau faux : avancé à 67 %. |
| gros_abattoir | Plan juste. Plan de gestion en dernier alors qu'il est obligatoire en 3641 à partir de décembre 2027. |
| saurisserie_littorale | Plan juste. Saumures à l'égout sans convention : « Sang et saumures à part » devrait monter. Aucune mesure propre aux produits de la mer. |
| charcuterie_icpe_conforme | Aucune obligation reproposée, test réussi. Réutilisation avant plan de gestion et ratio. |
| reponses_incoherentes | Plan non absurde, audit en tête. Sang et saumures devraient passer avant les couteaux. |

Vue d'ensemble du juge : ratio par kilo (impact 1) et plan de gestion (impact 1) finissent
derrière la démarche collective ; les mesures de rejet qui répondent à une non-conformité
sont triées comme de simples gains d'eau ; maturité et concernement presque identiques ;
pas de mesure propre aux produits de la mer.

### Corrections apportées

| Constat | Correction | Où |
|---|---|---|
| Réutilisation indue pour un petit site | Filtre `f_petit_volume_sans_reutilisation` : sous 5 000 m3 par an, `remove` ACT_VIA_006 en priorité 2 | via_q02 |
| Douze mesures pour le novice | Filtre `f_reutiliser_sans_mesurer` : sans aucun compteur, `remove` ACT_VIA_006 ; `f_pas_de_ratio` ne vise plus `aucun_compteur` (le comptage par usage passe d'abord). Plan ramené à dix mesures. | via_q01 |
| Nettoyage économe manquant (salaisonnerie) | Pas de changement de filtre : la persona déclare raclage systématique et pistolets (niveau 2). Sa description ne le disait pas, elle est complétée. | persona |
| « Je ne sais pas » classé avancé | Question numérique du volume notée 1 au lieu de 2 : connaître sa facture est une information qui existe sans être structurée (niveau 1 du guide). La persona passe à 50 %, intermédiaire. | via_q02 |

### Constats laissés en l'état, et pourquoi

1. **Ordre du plan de gestion (ACT_AGR_009).** Mesure transversale publiée, notée 1 × 2 :
   elle trie mécaniquement en fin de plan dans tous les secteurs. La corriger suppose de
   modifier `api/seeds/actions_agriculture.json`, hors du périmètre de la session. Proposée
   comme demande d'évolution.
2. **Priorité aux non-conformités (sang, saumures, convention).** Le moteur trie par
   `impact_eau × facilite` puis horizon, sans notion de conformité réglementaire. Surnoter
   l'impact eau de ACT_VIA_007 ou ACT_VIA_008 pour les faire monter fausserait la grille.
   Évolution du moteur à discuter (par exemple un tag `obligation` qui donne un bonus de tri).
3. **ACT_VIA_008 regroupe travaux lourds et mise à jour de la convention.** Scinder
   ferait une treizième mesure, au-delà de la cible. Laissé en l'état.
4. **Concernement égal à la maturité.** Conforme à la section 5.4 du guide, qui fait
   diverger les deux scores seulement sur les réponses « on y a réfléchi ». Le juge suggère
   un concernement fondé sur l'exposition (volume, ICPE) : c'est une évolution du modèle de
   scoring, commune à tous les secteurs.
5. **Pas de mesure propre aux produits de la mer.** Choix validé à l'étape 2 (L10 eau de
   mer propre en réserve). À rouvrir si la saurisserie reste jugée mal servie.
6. **Ordre du ratio par kilo (ACT_VIA_002, impact 1).** Passer l'impact à 2, comme la
   mesure laitière équivalente, le ferait remonter en tête des plans des sites équipés.
   Écarté au point d'arrêt de l'étape 3 ; soumis de nouveau au point d'arrêt de l'étape 4.

## Second passage

Verdict du juge : **à revoir, une persona en défaut de contenu, quatre en défaut d'ordre.**

| Persona | Contenu | Ordre |
|---|---|---|
| abattoir_novice | juste (dix mesures) | juste |
| volailles_equipe | juste | démarche collective avant le ratio |
| salaisonnerie_seche | **démarche collective indue** (12 salariés, 2 500 m3, rien à porter dans une instance de territoire) | ratio à monter en deuxième |
| site_avance | plan vide, juste | sans objet |
| ne_sait_pas | juste (audit seul) | sans objet ; niveau 50 %, jugé encore haut |
| gros_abattoir | juste | plan de gestion dernier alors qu'il est dû (3641, arrêté sécheresse) |
| saurisserie_littorale | juste | réutilisation avant transport à sec et saumures |
| charcuterie_icpe_conforme | juste | réutilisation avant ratio et plan de gestion |
| reponses_incoherentes | juste | juste |

Les corrections du premier passage sont confirmées : réutilisation retirée de la
salaisonnerie, plan du novice ramené à dix mesures, « je ne sais pas » sorti du niveau
avancé.

### Désaccords documentés (limite de deux passages atteinte)

1. **Défauts d'ordre (quatre personas).** Ils ont tous la même cause : ACT_AGR_009
   (1 × 2) et ACT_VIA_002 (1 × 3) trient derrière des mesures notées 2 × 2 ou 3 × 2. Le
   premier relève d'une mesure transversale publiée, le second d'un choix de l'étape 3. Voir
   les décisions soumises au point d'arrêt.
2. **Démarche collective pour un petit site.** Correction possible par un filtre `remove`
   sous un seuil de volume ; soumise au point d'arrêt, car elle s'écarte du questionnaire
   laitier, qui la propose sans condition de taille.
3. **« Je ne sais pas » à 50 %.** Le moteur calcule la maturité sur les seules questions
   répondues : deux réponses moyennes donnent un score moyen. Corriger demande de compter
   les non-réponses dans le dénominateur, ce qui touche le moteur commun à tous les secteurs.
4. **3 % de profils avancés, concernement égal à la maturité.** Voir `02_discrimination.md`
   et le premier passage, point 4.

## Suite donnée au point d'arrêt (2026-09-24)

- Démarche collective pour les petits sites : **corrigée** (retrait sous 5 000 m3 par an).
  La salaisonnerie reçoit désormais compteur, audit, ratio, plan de gestion.
- Ratio par kilo à impact 2 : **refusé**, l'impact 1 est conservé. Les défauts d'ordre
  restent un désaccord documenté, avec la demande d'évolution sur ACT_AGR_009 et sur le
  critère de tri du moteur.
