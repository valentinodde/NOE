# Contrôle de PREST_HOP_010 (EnveneO Conseil), premier passage

Message final de l'agent `controleur-fiche`, 2026-10-15.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | EnveneO Conseil | confirmé | enveneo.fr : « EnveneO Conseil a été fondé en 2023 par Jérôme Pasquet » ; registre : ENVENEO CONSEIL |
| type | bureau_etudes | confirmé | registre : activité 71.12B ; site : « Aucun intérêt commercial dans le choix des équipements » |
| siret | 91047429500011 | confirmé | recherche-entreprises : siège 91047429500011, état A |
| departements | [] (national) | confirmé | /contact/ : « Zone d'intervention : France et Europe » |
| expertises | Bilans eau, vapeur et énergie | confirmé | /diagnostic/ : « Bilans eau / vapeur / énergie » |
| expertises | Diagnostic process de blanchisserie | confirmé | accueil et /diagnostic/ |
| expertises | AMO projets de blanchisserie | confirmé | /assistance-a-maitrise-douvrage/ : faisabilité, CCTP, analyse des offres, suivi de chantier |
| expertises | Formation gestion de l'eau | confirmé | /formation/ : « Gestion de l'eau et de l'énergie » (libellé exact) |
| contacts (site, tel, mail, adresse) | | confirmés | /contact/ et registre |
| ACT_HOP_005 conseil_etude | | confirmé (partiel) | diagnostic des tunnels et de la production d'eau de process, AMO avec CCTP. Ni stérilisation ni recyclage des eaux de rinçage |
| ACT_HOP_005 formation | | introuvable | titre sans programme, formations d'exploitation des équipements, dispensées par ITENOR |
| description : « fondé en 2023 » | | contredit | registre : création le 15/02/2022 |
| description : indépendant, Essonne, France et Europe, diagnostics, AMO, ITENOR, CHU de Nantes (gaz) | | confirmé | |
| description : « Prestations payantes, sur demande de diagnostic » | | introuvable | aucun tarif ni procédure sur le site |
| categories | | confirmé | |
| logo | | confirmé | favicon goutte |

Remarque du contrôleur : la page /diagnostic/ contient une consigne destinée aux agents, ignorée, sans effet sur le contrôle.

SOURCES : 7 citées, 7 accessibles

VERDICT : à corriger

1. Rôle `formation` sur ACT_HOP_005 : à justifier par un programme ou à retirer.
2. Rôle `conseil_etude` : ne pas laisser entendre que la stérilisation est couverte.
3. « fondé en 2023 » : harmoniser avec le registre (2022) ou retirer l'année.
4. « Prestations payantes, sur demande de diagnostic » : sourcer ou retirer.
5. Expertise : libellé exact « Gestion de l'eau et de l'énergie » (mineur).

# Second passage (après correction)

Message final de l'agent `controleur-fiche`, 2026-10-15 (tableau résumé).

Confirmés : nom, type bureau_etudes (NAF 71.12B), SIRET (état A), départements [] (« France et Europe »), les quatre expertises dont « Gestion de l'eau et de l'énergie », contacts, lien ACT_HOP_005 conseil_etude (couverture partielle : blanchisserie seulement, ce que la description dit), description (indépendance, Essonne, diagnostics, AMO, ITENOR, prise de contact directe), logo source.

Confirmé, formulation à ajuster : mission du CHU de Nantes, aucun résultat chiffré publié, seulement un témoignage sur le gaz.

SOURCES : 7 citées, 7 accessibles

VERDICT : conforme

À reprendre, rien de bloquant :
1. Remplacer « a un résultat publié qui porte sur le gaz » par « le témoignage publié porte sur la réduction du gaz, pas sur l'eau ».
2. ACT_HOP_005 confirmé pour la blanchisserie seulement : stérilisation et recyclage des rinçages sans apporteur dans cette fiche.
