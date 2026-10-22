# Verdict du contrôleur : PREST_FRL_006 (Steriflow), premier passage

Contrôle du 2026-09-25, agent `controleur-fiche`.

| Champ | Verdict | Justification |
|---|---|---|
| nom | confirmé | API : « STERIFLOW » |
| type (equipementier) | confirmé | « Notre atelier de fabrication sur le site Barriquand à Roanne » ; « design and manufacturing teams are located directly in our French plant, in Roanne » |
| siret 35296070200012 | confirmé | siège, actif, NAF 28.93Z |
| departements [] (national) | confirmé | « Très présente en France et dans toute l'Europe » |
| secteurs | confirmé | « Les légumes en boîtes métalliques et bocaux verre se stérilisent facilement en autoclave Steriflow » |
| categories | confirmé | |
| expertises (4) | confirmé | ruissellement d'eau surchauffée, bilan de 2 à 4 jours, eau renvoyée en tour ou stockée pour préchauffer, refroidissement étagé |
| contacts site, tel, adresse | confirmé | code postal 42334 (CEDEX probable) contre 42300 dans SIRENE, mineur |
| mesures ACT_FRL_004 conseil_etude | confirmé | « La phase de conseil a pour principal objectif de trouver la fonction optimale pour la réutilisation de l'eau » |
| mesures ACT_FRL_004 materiel | confirmé avec réserve | échangeur Platulaire et autoclave nommés ; aucune page ne dit que Steriflow fournit cuves ou tour ; mise en place « réalisée par l'utilisateur » |
| description, « pasteurisation » | introuvable | seule la stérilisation est citée |
| description, « sur devis » | introuvable | |

SOURCES : 8 citées, 8 accessibles

VERDICT : incomplet

À sourcer ou corriger :
1. Rôle `materiel` : sourcer la fourniture de l'équipement de boucle, sinon garder `conseil_etude` seul.
2. Retirer ou sourcer « pasteurisation ».
3. Retirer ou sourcer « sur devis ».
4. Code postal 42334 ou 42300 (mineur).

## Second passage (2026-09-25), après correction

Le rédacteur a retiré le rôle `materiel` (ACT_FRL_004 en `conseil_etude` seul), sourcé « pasteurisation »
(services énergie), retiré « sur devis », aligné le code postal sur SIRENE (42300) et ajouté la page
de l'échangeur Platulaire (breveté par Barriquand Echangeur, société sœur, fabriqué à Roanne).

Tous les champs confirmés. Point mineur de rédaction : « sur le site » (phase de conseil) n'est dit
par aucune source.

SOURCES : 8 citées (7 URL distinctes), 8 accessibles

VERDICT : conforme
