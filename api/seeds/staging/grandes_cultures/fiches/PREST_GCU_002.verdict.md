# Verdict du contrôleur : PREST_GCU_002 (Sencrop), passage 1

Agent `controleur-fiche`, 2026-10-15. Les 7 pages sencrop.com citées sont chargées par JavaScript : seul leur titre est lisible par l'outil. Le communiqué Lur Berri (PDF) et l'API Recherche d'entreprises ont été lus en entier.

| Champ | Verdict | Justification |
|---|---|---|
| nom, type solution_numerique, siret 81779128800050, adresse Tillé | confirmé | API (siège, état A), PDF Lur Berri |
| departements [] (national) | confirmé | PDF : « plus de 40 000 stations météo actives [...] dans 35 pays » |
| secteurs, categories | confirmé | Titre /fr/cereale, catégorie d'ACT_GCU_001 |
| expertises : stations, sonde d'humidité, bilan hydrique | confirmé | PDF : Soilcrop, Solarcrop « bilan hydrique de la culture » |
| expertise : alertes de stress hydrique | introuvable (titre seul) | |
| ACT_GCU_001, materiel | confirmé | PDF : Soilcrop « permettant ainsi de déclencher les irrigations au bon moment » |
| contact tel 09 72 60 64 40, mail contact@sencrop.com | introuvable (titre seul) | /fr/contact illisible |
| logo_url (source) | confirmé | |
| description : entreprise française, application | confirmé | PDF : « Sencrop, acteur français de l'agritech » |
| description : Soilcrop 10, 20, 40, 60 cm | confirmé en partie | PDF : « 4 capteurs à des profondeurs allant de 10 à 60 cm » |
| description : pack Irricrop | introuvable | le PDF attribue l'évapotranspiration et le bilan hydrique à Solarcrop |
| description : alerte sur seuil, modèle d'abonnement | introuvable (titre seul) | |
| description : Lur Berri « coopérative maïsicole » | contredit | PDF : « coopérative agricole rayonnant sur le quart Sud-Ouest » |
| description : déploiement Lur Berri 2025 | confirmé | PDF du 20 mai 2025 |

SOURCES : 10 citées, 10 accessibles (dont 7 lisibles en titre seul)

VERDICT : à corriger

Corrections demandées : Irricrop (reprendre la formulation du communiqué ou une source lisible), alertes de stress hydrique et seuil, contacts, modèle d'abonnement, « coopérative maïsicole » à remplacer par « coopérative agricole du Sud-Ouest », profondeurs intermédiaires. Le communiqué indique aussi « Sencrop, nouvelle filiale d'ISAGRI au sein de Groupe ISAGRI ».

## Passage 2 (après reprise)

Agent `controleur-fiche`, 2026-10-15. Pages sencrop.com illisibles retirées, remplacées par le communiqué Lur Berri et quatre articles lisibles de faq.sencrop.com.

Tous les champs sont confirmés (nom, type, siret, national, expertises dont l'alerte d'humidité sourcée par la FAQ Soilcrop, ACT_GCU_001 materiel, adresse Tillé, filiale Isagri, Soilcrop de 10 à 60 cm, Solarcrop, Lur Berri « coopérative agricole du quart Sud-Ouest »), sauf :
- description « L'application s'utilise par abonnement, avec ou sans achat de station » : introuvable en partie, seul le cas sans station est sourcé ;
- contact site_internet https://www.sencrop.com/fr : domaine établi, page /fr non citée en source (mineur).

SOURCES : 7 citées, 7 accessibles

VERDICT : incomplet

Second passage atteint : la fiche garde ce verdict et sera signalée à la revue (corriger la phrase d'abonnement et citer /fr).
