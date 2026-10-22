# Jugement des personas : vins et spiritueux

Étape 4 du skill `nouveau-secteur`, agent `juge-personas`. Date : 2026-09-28.

## Passage 1 : verdict « à revoir »

Message final du juge, résumé fidèle persona par persona (mesure indue / manquante / ordre) :

| Persona | Indue | Manquante | Ordre des trois premières |
|---|---|---|---|
| cave_novice | aucune | aucune | Non : effluents raccordés sans autorisation (non-conformité) classés 10e. Conseillé : audit, nettoyages économes, effluents. |
| maison_equipee | aucune | aucune | Non : 18 000 m3, plan de gestion à monter avant l'eau de pluie. Conseillé : audit, plan de gestion, démarche collective. |
| liquoriste_assemblage | Démarche collective (600 m3 sur réseau, disproportionné) | aucune | Non : conseillé nettoyages économes, compteur, audit. |
| cave_avancee | aucune | aucune | Sans objet (plan vide, niveau avancé : attendu). |
| ne_sait_pas | Récupération d'eau de pluie (sortie sur le seul fait « réseau ») | aucune | Oui, audit en tête. |
| grande_cave_cooperative | aucune | aucune | Non : effluents saturés en vendange classés 7e, plan de gestion 6e malgré 45 000 m3. Conseillé : effluents, audit, raclage. |
| distillerie_enregistree | aucune | aucune | Non : plan de gestion à monter (ICPE, 12 000 m3). Conseillé : audit, plan de gestion, nettoyages économes. |
| cidrerie_saisonniere | aucune | aucune | Non : vinasses sans plan d'épandage et effluents saturés classés 8e et 9e. Conseillé : vinasses, effluents, audit. |
| reponses_incoherentes | aucune | aucune | Oui. |

Constats de fond du juge :
1. Les mesures de rejets (facilité 1) et le plan de gestion (impact 1) finissent toujours en fin
   de plan, même quand le persona déclare une non-conformité ou dépasse 10 000 m3 en ICPE.
2. Niveaux trop resserrés (85 % d'intermédiaires) ; les options « sans objet » portent au
   niveau intermédiaire des profils qui n'ont rien formalisé.

## Suites données

**Corrigé (deux mesures indues).**
- ne_sait_pas : nouveaux filtres `f_suivi_inconnu` (q01 sans réponse : ajouter ACT_AGR_001) et
  `f_pluie_sans_suivi` (q01 sans réponse : retirer ACT_AGR_006, priorité 2). Plan obtenu :
  compteur par usage, audit eau. Deux mesures d'entrée, conforme à l'archétype.
- liquoriste_assemblage : nouveau filtre `f_collectif_sans_pressurage` (q09 `sans_vendange` :
  retirer ACT_AGR_010). Remplacé après le second passage, voir plus bas.

**Désaccord documenté : l'ordre du plan.** Cinq remarques sur neuf portent sur l'ordre. Le
moteur trie toutes les mesures par `impact_eau × facilite` puis horizon, une fois pour toutes :
un filtre ne peut pas faire remonter une mesure parce que la réponse révèle une non-conformité.
Les notes des mesures ont été validées à l'étape 3 selon la grille du guide (4.2), et les
tordre pour faire remonter les effluents ou le plan de gestion fausserait le tri pour tous les
autres profils. Même constat que pour `industrie_fruits_legumes`. **Évolution du moteur
proposée** : un attribut de filtre (par exemple `urgence: true`) qui placerait en tête les
mesures ajoutées sur une réponse de non-conformité (rejet sans autorisation, épandage sans
plan, ICPE au-dessus de 10 000 m3 sans plan). Hors du périmètre de cette session.

**Désaccord documenté : répartition des niveaux.** Les options « sans objet » sont notées 2
par la règle du guide (5.3) : ne pas avoir l'usage n'est pas une faiblesse. Le liquoriste
reste donc intermédiaire (33 %, à la limite du seuil). La part de novices (9 %) est au-dessus
du plancher de 5 % ; voir `02_discrimination.md`.

## Passage 2 : verdict « à revoir »

| Persona | Indue | Manquante | Ordre |
|---|---|---|---|
| cave_novice | Démarche collective : négociant sur le seul réseau, ne prélève rien | aucune | Non : effluents 10e (conseillé : audit, effluents, raclage) |
| maison_equipee | aucune | aucune (compteur en remarque secondaire) | Non : plan de gestion avant l'eau de pluie |
| liquoriste_assemblage | aucune (nettoyage des cuves « à la limite » pour 600 m3) | aucune | Acceptable |
| cave_avancee | aucune | aucune | Sans objet |
| ne_sait_pas | aucune | aucune | Acceptable (compteur et audit) |
| grande_cave_cooperative | aucune | aucune | Non : effluents 7e |
| distillerie_enregistree | aucune | aucune | À nuancer : plan de gestion en 2e |
| cidrerie_saisonniere | Démarche collective : même raison que cave_novice | aucune | Non : vinasses et effluents 8e et 9e |
| reponses_incoherentes | aucune | aucune | Acceptable |

Autres constats : `ne_sait_pas` classé intermédiaire (33 %) sur deux réponses ; le concernement
suit presque exactement la maturité.

## Suites données au passage 2

**Corrigé.** ACT_AGR_010 décrit un partage de la ressource (PTGE, contrat de nappe, SAGE) : elle
n'est plus déclenchée par q12 mais par un prélèvement propre (q02 contient `forage` ou
`surface`), et retirée si q12 vaut `participe` ou `pilote`. Le filtre
`f_collectif_sans_pressurage` du passage 1 devient inutile et est supprimé. Vérifié par la
simulation, sans troisième passage du juge (plafond de deux) : cave_novice passe à 9 mesures et
cidrerie_saisonniere à 8, sans démarche collective ; maison_equipee (forage, pas engagée) la
garde ; grande cave et distillerie (forage, participent déjà) ne la reçoivent pas.

**Désaccords maintenus, documentés.**
1. *Ordre* (effluents, vinasses, plan de gestion en fin de plan) : tri fixe du moteur, voir
   passage 1. C'est la remarque dominante des deux passages ; l'évolution `urgence` du moteur
   est à arbitrer hors de cette session.
2. *Niveau de ne_sait_pas* : le moteur ne score que les questions répondues, donc deux réponses
   moyennes donnent un niveau moyen. Comportement général du scoring, identique dans tous les
   secteurs ; non modifiable depuis le questionnaire.
3. *Concernement calqué sur la maturité* : conforme à la règle du guide (5.4), les deux scores
   ne divergent que sur les options « envisagé, pas fait ». Le concernement mesure l'intention,
   pas l'exposition, qui est déjà donnée par les scores de risque de Noé.
4. *Nettoyage des cuves pour le liquoriste* : jugé « à la limite », pas indu. La mesure couvre
   aussi les têtes de lavage et l'eau chaude, accessibles à une petite structure ; gardée.
