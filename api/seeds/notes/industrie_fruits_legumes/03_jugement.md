# Jugement des personas : transformation de fruits et légumes

Agent `juge-personas`, étape 4. Contexte vierge : rapport de simulation, mesures, profil,
personas.md. Le juge n'a pas vu la table de discrimination.

## Premier passage (2026-09-25)

**conserverie_novice (novice, 10 mesures).** Indue : récupération d'eau de pluie (eau au
contact du produit, levier marginal selon le profil, placée devant le refroidissement en eau
perdue). Manquante : aucune. Ordre : acceptable (compteur, audit, lavage d'entrée), mais les
gestes économes arrivent huitièmes alors que c'est la mesure immédiate la moins chère pour un
site sans consignes avec moitié de saisonniers.

**surgelation_equipee (intermédiaire, 5 mesures).** Indue : aucune. Manquante : aucune.
Ordre : le ratio par tonne (compteurs par ligne déjà là) devrait précéder, et le plan de
gestion devrait précéder la démarche collective. Ordre conseillé : audit, ratio, recyclage en
cascade, plan de gestion, démarche collective.

**fruits_a_coque (intermédiaire, 6 mesures).** Indue : ratio par tonne (800 m³ pour locaux
et sanitaires, sans lien avec le tonnage) ; compteur par usage peu sensé à ce volume ; audit
externe plus cher que la facture. Manquante : aucune. Ordre conseillé : gestes économes, plan
de gestion, eau de pluie. Test du « non concerné » réussi : aucune mesure de procédé humide.

**site_avance (avancé, 1 mesure).** Démarche collective seule. Correct.

**ne_sait_pas (intermédiaire, 3 mesures).** Pas d'indue au sens strict, mais le ratio par tonne
est prématuré et porte le plan à trois mesures au lieu d'une ou deux. Ordre conseillé : audit,
puis compteur par usage.

**jus_concentres (intermédiaire, 6 mesures).** Indue : aucune (lavage d'entrée défendable).
Manquante : aucune. Ordre : l'eau de végétation, constat principal du site, devrait être
première, puis recyclage en cascade, puis lavage d'entrée.

**quatrieme_gamme (intermédiaire, 9 mesures).** Indue : récupération d'eau de pluie (produit
consommé cru). À un degré moindre, « effluents de campagne » (pas de campagne ni d'amidon,
dégrillage déjà fait). Ordre conseillé : audit, lavage d'entrée, recyclage en cascade.

**icpe_conforme (intermédiaire, 8 mesures).** Indue : récupération d'eau de pluie (anecdotique
à 90 000 m³ sur forage). Bon point : ni compteur ni refroidissement, déjà faits par
obligation. Ordre : épluchage (poste central en pomme de terre) arrive septième ; ordre
conseillé : recyclage en cascade, épluchage et blanchiment, lavage d'entrée, audit en parallèle.

**Vue d'ensemble.** Eau de pluie trop fréquente (quatre personas sur huit, pertinente pour
un seul) ; démarche collective (58 %) et audit (82 %) fréquents pour un secteur de petits
ateliers ; les mesures lourdes à fort gain passent derrière les mesures faciles même quand
elles sont le constat principal ; niveaux tassés sur l'intermédiaire, le « je ne sais pas »
et l'atelier sans rien de formalisé sortent intermédiaires.

**VERDICT : à revoir** (conserverie_novice, fruits_a_coque, quatrieme_gamme, icpe_conforme).

## Second passage (2026-09-25), après corrections

Novice à 9 mesures avec connaissance en tête, avancé à la seule démarche collective, « je ne
sais pas » à deux mesures d'entrée : les trois archétypes les plus exposés tiennent.

- **conserverie_novice** : ni indue ni manquante. Gestes économes à remonter dans les quatre
  premières.
- **surgelation_equipee** : ni indue ni manquante. Démarche collective troisième, devant le
  ratio ; ordre conseillé : audit, ratio, recyclage en cascade.
- **fruits_a_coque** : indue, récupération d'eau de pluie (cuve disproportionnée à 800 m³,
  hygiène en zone de production) ; audit externe disproportionné sans être absurde. Test de
  retrait réussi.
- **site_avance** : correct.
- **ne_sait_pas** : ni indue ni manquante ; l'audit avant le compteur serait préférable, non
  bloquant.
- **jus_concentres** : ni indue ni manquante ; eau de végétation à mettre en tête.
- **quatrieme_gamme** : indue, effluents de campagne (pas de campagne ni d'amidon, dégrillage
  fait) ; titre court « en campagne » décalé.
- **icpe_conforme** : ni indue ni manquante ; épluchage et blanchiment à placer devant le ratio.

**Vue d'ensemble** : le plan de gestion sort toujours en dernier alors que le pic de campagne
coïncide avec l'étiage ; l'horizon relègue la mesure phare quand elle est à moyen terme ;
fréquences cohérentes, aucune mesure morte ; niveaux des personas crédibles (de 11 % à 97 %).

**VERDICT : à revoir** (fruits_a_coque, quatrieme_gamme).

## Suite donnée

Les deux mesures indues sont corrigées (voir `02_discrimination.md`, section « Corrections
après le second passage ») et vérifiées par la simulation : fruits_a_coque reçoit audit,
gestes économes, plan de gestion ; quatrieme_gamme ne reçoit plus les effluents. Les
remarques d'ordre restent un désaccord documenté, qui relève du tri global du moteur.
