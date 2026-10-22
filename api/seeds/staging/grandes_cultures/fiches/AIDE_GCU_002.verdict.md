# Verdict du contrôleur : AIDE_GCU_002 (Aides directes AEAG aux agriculteurs, investissements), passage 1

Agent `controleur-fiche`, 2026-10-15. Premier contrôle impossible (certificat refusé) ; contrôle refait sur copies locales téléchargées par curl le 2026-10-15 (fiche bénéficiaire 8 pages, délibération gestion quantitative 19 pages, deux pages HTML en texte). Favicon non lisible par l'outil.

| Champ | Verdict | Justification |
|---|---|---|
| nom, financeur, agences, departements | confirmé | « programme Eau 2025-2030 », aides directes |
| type subvention | introuvable | le mot n'apparaît pour aucune source de cette aide |
| taux 50 % | confirmé | « Taux d'aide : 50% » (fiche bénéficiaire) ; la délibération parle de taux maximum et place les matériels hydro-économes au « Taux PSN » |
| plafond null | confirmé (absence) | |
| eligibilite (projet individuel, liste des matériels) | confirmé | réserve : la délibération réserve sondes et stations météo à l'achat collectif (10 % d'économie) |
| ACT_GCU_001 | confirmé avec réserve | « piloter l'irrigation : dispositifs hydro économes (stations météo, sondes…) » |
| ACT_GCU_007 | introuvable | aucune dépense liée aux couverts ou à la matière organique ; seul « semis direct » |
| ACT_GCU_010 | confirmé | « Cela inclut la plantation de haies » |
| infos 1 à 7 (exclusion du matériel d'irrigation, taux PSN, délégations et téléphones, CAB, MAEC, PSE, ressources, Rivage) | confirmé | |

SOURCES : 5 citées, 4 accessibles (sur copie locale)

VERDICT : incomplet

À corriger : (1) préciser la condition d'achat collectif pour le pilotage dans `eligibilite` ou un avertissement, et écrire « 50 % maximum » ; (2) sourcer ACT_GCU_007 (liste des matériels éligibles, délibération pollutions agricoles) ou le retirer ; (3) sourcer `type`. Hors périmètre : la délibération cite les « systèmes de régulation électronique », qui recoupent ACT_GCU_003 sous condition d'achat collectif.
