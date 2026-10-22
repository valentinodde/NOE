# Contrôle de AIDE_HOP_003 (Région Sud, gestion et préservation de la ressource en eau), premier passage

Message final de l'agent `controleur-fiche`, 2026-10-15.

| Champ | Verdict | Justification |
|---|---|---|
| nom, financeur, type, taux (30 % au plus), plafond (null) | confirmé | page maregionsud.fr : « Subvention à un taux maximal de 30% », aucun plafond d'aide |
| eligibilite, liste des bénéficiaires | confirmé | « Structures publiques gestionnaires de milieux aquatiques ; collectivités et leurs groupements ; départements ; autres établissements publics ; associations ; organismes de recherche » |
| eligibilite, phrase sur hôpital public, établissement associatif, clinique à but lucratif | introuvable | la page ne mentionne ni établissement de santé, ni hôpital, ni clinique : déduction du rédacteur |
| departements 04, 05, 06, 13, 83, 84 | confirmé | geo.api.gouv.fr, région 93 |
| agences [] | confirmé | |
| categories | confirmé | |
| ACT_AGR_002 | confirmé, avec réserve | « audits de bâtiments publics » : limité aux bâtiments publics |
| ACT_HOP_003 | confirmé, avec réserve | « petits équipements hydro-économes dans les bâtiments publics » ; la mesure écarte mousseurs et réducteurs, la page ne cite pas brise-jets ni commandes non manuelles |
| description | confirmé sauf une incise | « surtout portés par des acteurs territoriaux » est une interprétation |
| infos_complementaires (avertissement, régie 400 €/jour, demande en ligne, ressource) | confirmé | |
| logo | confirmé | |

Remarque du contrôleur : le bas de la page maregionsud.fr contient une instruction adressée aux lecteurs automatiques, ignorée.

SOURCES : 3 URL distinctes citées, 3 accessibles

VERDICT : incomplet

1. `eligibilite`, deuxième phrase : retirer la déduction (la laisser dans l'avertissement) ou la sourcer par le cadre d'intervention « Gestion de la ressource en eau ».
2. ACT_HOP_003 : vérifier dans le cadre d'intervention que les équipements validés par l'hygiène sont éligibles, ou le préciser dans l'avertissement.
3. Liens limités aux « bâtiments publics » : le dire pour un établissement privé, même associatif.
4. `description` : reformuler ou retirer l'incise « surtout portés par des acteurs territoriaux ».

# Second passage (après correction)

Message final de l'agent `controleur-fiche`, 2026-10-15 (tableau résumé).

Tous les champs factuels confirmés : nom, financeur, type, taux (30 % au plus), plafond null, éligibilité (liste de la page), description, catégories, départements, agences, liens ACT_AGR_002 et ACT_HOP_003 (bâtiments publics, signalé en avertissement), cinq infos complémentaires.

SOURCES : 4 citées, 4 accessibles

VERDICT : conforme

Remarques non bloquantes :
1. Les deux liens ne valent que pour des bâtiments publics ; pour un établissement privé, l'aide ne devrait pas être mise en avant sans cette réserve.
2. Le PDF du cadre d'intervention renvoyait une erreur 404 selon Aides-territoires, aucun champ n'en dépend.
