# Verdict du contrôleur : PREST_GCU_025 (CG Irrigation), passage 1

Agent `controleur-fiche`, 2026-10-15. Le site est une application JavaScript : WebFetch n'en voit que le titre, pas le JSON-LD ni le texte. Seule l'API Recherche d'entreprises est lisible.

| Champ | Verdict |
|---|---|
| nom, siret 38754367100011, adresse Aiguillon, seconde agence Saint-Romain-le-Noble | confirmé (API) |
| type installateur, departements, expertises, tel, mail, ACT_GCU_002 et ACT_GCU_003, reste de la description | introuvable (non visible par WebFetch) |
| description « depuis 1991 » | contredit en partie (API : création le 1992-03-01) |
| logo_url (source) | confirmé |

SOURCES : 6 citées, 6 accessibles (4 lisibles en titre seul)

VERDICT : à corriger

À corriger : confirmer dans le bundle /assets/index-*.js les liens ACT_GCU_002 (une prestation de réglage ou de diagnostic avant campagne doit être décrite) et ACT_GCU_003, la zone areaServed, le type, les contacts et les expertises ; corriger ou sourcer 1991.

Vérification de l'orchestrateur (curl sur https://www.cg-irrigation.com/ et /assets/index-BNIAT4My.js, 2026-10-15) : areaServed « Lot-et-Garonne, Gironde, Dordogne, Tarn-et-Garonne, Gers, Landes » présent dans le HTML ; le bundle porte « au service des agriculteurs depuis 1991 » et foundingDate « 1991 » (date revendiquée par le site, la société actuelle est créée en 1992), « Partenaire OCMIS (enrouleurs et pivots) », « Automatisme et télégestion à distance », « l'entretien, le dépannage ou l'optimisation de vos réseaux », « stations de filtration ». La phrase « réglage précis de la vitesse et de la dose » n'a pas été retrouvée telle quelle dans le bundle.

## Passage 2 (après reprise)

Agent `controleur-fiche`, 2026-10-15. Sources citant directement le bundle JavaScript (lu en ligne) et le JSON-LD de l'accueil (lu sur la copie locale index.html de l'orchestrateur). ACT_GCU_002 retiré par le rédacteur (aucune prestation de réglage décrite), « depuis 1991 selon l'entreprise ». Tous les champs confirmés, zone 47, 33, 24, 82, 32, 40 comprise.

SOURCES : 8 citées (4 URL distinctes), 4 accessibles

VERDICT : conforme

Remarques : ACT_GCU_003 ne vaut que pour le volet pivot et rampe, pas pour la pose de régulations sur enrouleurs existants. ACT_GCU_002 n'a plus de lien `travaux` venant de CG Irrigation.
