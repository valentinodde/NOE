# Verdict du contrôleur : PREST_FRL_013 (Aquassay), premier passage

Contrôle du 2026-09-25, agent `controleur-fiche`.

| Champ | Verdict | Justification |
|---|---|---|
| nom | confirmé | API : « AQUASSAY » |
| type (bureau_etudes) | confirmé | « Initialement bureau d'études au service des sites industriels » ; NAF 71.12B ; se présente aujourd'hui aussi comme éditeur SaaS |
| siret 81099872400019 | confirmé | siège Limoges, actif |
| departements [] (national) | confirmé | « Plus de 200 sites accompagnés », « 140 sites connectés dans 23 pays » |
| expertises (4) | confirmé | audit et cartographie, campagnes de mesure, suivi en temps réel, Water Master Plan |
| categories | confirmé | |
| secteurs | confirmé par extension | clients « Industrie agroalimentaire et embouteillage » (Danone, Nestlé Waters...), aucun client fruits et légumes |
| mesures ACT_AGR_002 conseil_etude | confirmé | « audit du cycle de l'eau sur un site » |
| mesures ACT_AGR_001 conseil_etude | confirmé | « installation de points de mesure quantitative et qualitative » |
| mesures ACT_AGR_001 materiel | introuvable | seule une pose temporaire de capteurs pour une campagne est décrite |
| mesures ACT_FRL_002 conseil_etude | introuvable | « Co-conception d'indicateurs de suivi adaptés », aucun ratio rapporté à la production |
| contacts (site, tel, mail, adresse) | confirmé | adresse des bureaux, pas du siège qui porte le SIRET |
| contact linkedin | confirmé avec réserve | deux URL différentes entre l'accueil et la page contact |

SOURCES : 10 citées, 10 accessibles

VERDICT : incomplet

À sourcer ou corriger :
1. Lien ACT_FRL_002 : sourcer un suivi rapporté à la production, sinon retirer.
2. Rôle `materiel` sur ACT_AGR_001 : sourcer la fourniture de compteurs, sinon garder `conseil_etude` seul.
3. LinkedIn : choisir l'URL de la page contact ou de l'accueil (mineur).

## Second passage (2026-09-25), après correction

Lien ACT_FRL_002 retiré, rôle `materiel` retiré (ACT_AGR_001 et ACT_AGR_002 en `conseil_etude`),
une seule URL LinkedIn. Tous les champs confirmés.

Remarques : le rattachement au secteur est une inférence (clients cités : embouteilleurs et agroalimentaire
général, aucun fruits et légumes) ; catégorie agir_rejets_qualite sans mesure liée ; code postal du siège
87000 (site) ou 87100 (API).

SOURCES : 10 citées (9 URL distinctes), 10 accessibles

VERDICT : conforme
