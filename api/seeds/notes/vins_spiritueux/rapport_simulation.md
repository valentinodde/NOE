# Simulation du référentiel "Vins et spiritueux" (vins_spiritueux)

Source : staging + publié · 12 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 9 personas

## Alertes (0)

Aucune.

## Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 2, médiane 5, max 9
- Plans vides : 0 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

## Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 79 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 56 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 55 % |
| ACT_VIN_006 | Effluents vinicoles | agir_rejets_qualite | 52 % |
| ACT_VIN_003 | Nettoyage des cuves | ameliorer_efficacite_hydrique | 45 % |
| ACT_VIN_001 | Nettoyages économes | sensibiliser_former | 44 % |
| ACT_VIN_005 | Réutilisation en cascade | valoriser_reut_eaux_non_conventionnelles | 43 % |
| ACT_VIN_004 | Refroidissement en circuit fermé | ameliorer_efficacite_hydrique | 41 % |
| ACT_VIN_002 | Raclage des canalisations | ameliorer_efficacite_hydrique | 40 % |
| ACT_VIN_007 | Filière des vinasses | agir_rejets_qualite | 39 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 29 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 22 % |

## Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 9 % | | faible | 1 % |
| intermediaire | 85 % | | moyen | 75 % |
| avance | 7 % | | eleve | 25 % |

## Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_absent | answer | add | 45 % |
| f_suivi_inconnu | answer | add | 10 % |
| f_pluie_sans_suivi | answer | remove | 10 % |
| f_sur_reseau | class | add | 39 % |
| f_pluie_pas_novice | maturity | remove | 9 % |
| f_pluie_deja | class | remove | 33 % |
| f_cascade_deja | class | remove | 37 % |
| f_conso_icpe | numeric | add | 35 % |
| f_pas_audit | answer | add | 70 % |
| f_audit_inconnu | answer | add | 9 % |
| f_pousse_eau | answer | add | 40 % |
| f_sans_reseau | answer | remove | 22 % |
| f_nettoyage_basique | answer | add | 45 % |
| f_rincage_perdu | answer | add | 67 % |
| f_sans_consignes | answer | add | 44 % |
| f_froid_ouvert | answer | add | 41 % |
| f_froid_sans_eau | answer | remove | 25 % |
| f_effluents_fragiles | answer | add | 52 % |
| f_sans_vendange | answer | remove | 18 % |
| f_vinasses_fragiles | answer | add | 39 % |
| f_sans_distillation | answer | remove | 14 % |
| f_risque_non_analyse | answer | add | 45 % |
| f_plan_deja_formalise | answer | remove | 22 % |
| f_preleve_forage | class | add | 35 % |
| f_preleve_surface | class | add | 36 % |
| f_deja_collectif | answer | remove | 49 % |

## Personas

### Petite cave de négoce, rien de formalisé (cave_novice)

Négociant vinificateur de six salariés, 3 000 hl par an, eau du réseau uniquement, environ 2 500 m³ par an. Le vin est poussé à l'eau dans les tuyaux, les cuves sont lavées au jet froid, les cuves sont refroidies par ruissellement d'eau perdue, les effluents partent à la station communale sans autorisation écrite. Pas de distillation. Aucun audit, aucune consigne, le sujet des restrictions n'a jamais été regardé.

Maturité 11 % (novice) · concernement 14 % · axes : nettoyage, comptage, diversification_sources, audit, gestes, refroidissement, effluents, restrictions, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyages économes (ACT_VIN_001, immediat)
- Raclage des canalisations (ACT_VIN_002, court_terme)
- Refroidissement en circuit fermé (ACT_VIN_004, court_terme)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Nettoyage des cuves (ACT_VIN_003, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Effluents vinicoles (ACT_VIN_006, moyen_terme)

### Maison de champagne équipée, en réflexion sur la suite (maison_equipee)

Maison de champagne de 40 salariés, 18 000 m³ par an, réseau public doublé d'un forage. Raclage des canalisations, centrale de nettoyage avec récupération du dernier rinçage, froid en circuit fermé, consignes écrites, station d'effluents dimensionnée sur les vendanges. Relevés réguliers sans ratio, audit de plus de cinq ans, informée des restrictions sans plan écrit, pas engagée dans une démarche collective.

Maturité 61 % (intermediaire) · concernement 72 % · axes : diversification_sources, audit, restrictions, collectif

- Audit eau (ACT_AGR_002, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Liquoriste par assemblage, sans vendange ni distillation (liquoriste_assemblage)

Fabricant de liqueurs et d'apéritifs de huit salariés qui achète ses alcools et ses vins de base : ni pressurage, ni distillation, ni besoin de refroidissement. Eau du réseau, 600 m³ par an, compteur général. Des tuyaux souples courts, les cuves lavées au nettoyeur haute pression, des habitudes orales. Aucun audit, restrictions jamais regardées, pas de démarche collective.

Maturité 33 % (intermediaire) · concernement 36 % · axes : comptage, diversification_sources, audit, nettoyage, gestes, restrictions, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyages économes (ACT_VIN_001, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Nettoyage des cuves (ACT_VIN_003, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Cave coopérative exemplaire (cave_avancee)

Grande cave coopérative de 30 000 m³ par an, forage et eau de pluie, eaux de rinçage réutilisées. Ratio d'eau par hectolitre suivi, audit récent, raclage, centrale de nettoyage, formation à chaque campagne, circuit fermé, filière d'effluents dimensionnée, vinasses de sa petite unité de distillation apportées à un traitement collectif. Plan écrit par niveau de restriction, engagements chiffrés dans la démarche de bassin.

Maturité 94 % (avance) · concernement 97 % · axes : aucun

Plan vide.

### Assistante administrative qui répond pour le dirigeant (ne_sait_pas)

Une personne du bureau remplit le questionnaire pour une maison de vins. Elle sait que l'eau vient du réseau et que l'entreprise ne distille pas, et ne sait rien du reste : elle répond « je ne sais pas » partout ailleurs.

Maturité 33 % (intermediaire) · concernement 33 % · axes : diversification_sources

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Grande cave coopérative, gros consommateur à mi-chemin (grande_cave_cooperative)

Cave coopérative de 120 000 hl, 45 000 m³ par an, réseau et forage. Relevés réguliers, audit ancien, vin poussé au gaz sans obus, têtes de lavage rotatives sans récupération du rinçage, consignes écrites, tour aéroréfrigérante. Le stockage des effluents sature chaque année en pleine vendange. Pas de distillation. Sait ce qui s'arrêterait en restriction sans plan écrit, participe aux réunions de la démarche de bassin.

Maturité 47 % (intermediaire) · concernement 58 % · axes : diversification_sources, audit, nettoyage, refroidissement, effluents

- Audit eau (ACT_AGR_002, immediat)
- Raclage des canalisations (ACT_VIN_002, court_terme)
- Refroidissement en circuit fermé (ACT_VIN_004, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Effluents vinicoles (ACT_VIN_006, moyen_terme)

### Distillerie charentaise en conformité, rien au-delà (distillerie_enregistree)

Distillerie de cognac à quatre alambics de 25 hl, ICPE à enregistrement, 12 000 m³ par an sur forage. Le refroidissement est en circuit fermé et les vinasses sont stockées et épandues selon le plan réglementaire : c'est l'obligation, elle est tenue. Le vin arrive par citerne et circule en tuyaux souples, cuves au nettoyeur haute pression, habitudes orales, effluents de chai traités par une filière dimensionnée. Jamais d'audit, informée des restrictions sans plan, participe aux réunions de l'interprofession.

Maturité 50 % (intermediaire) · concernement 58 % · axes : audit, nettoyage, gestes, restrictions

- Audit eau (ACT_AGR_002, immediat)
- Nettoyages économes (ACT_VIN_001, immediat)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Nettoyage des cuves (ACT_VIN_003, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Cidrerie qui distille son calvados, activité saisonnière (cidrerie_saisonniere)

Cidrerie normande de cinq salariés, brassage des pommes d'octobre à janvier puis distillation du calvados en hiver. Eau du réseau, 1 500 m³ par an, compteur général. Tuyaux souples, nettoyeur haute pression, habitudes orales, pas de refroidissement hors alambic qui tourne sur un groupe à air. Le stockage des effluents sature pendant le brassage, les vinasses sont épandues sans plan à jour. Aucun audit, restrictions non regardées, pas de démarche collective.

Maturité 25 % (novice) · concernement 31 % · axes : comptage, diversification_sources, audit, nettoyage, gestes, effluents, vinasses, restrictions, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyages économes (ACT_VIN_001, immediat)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Nettoyage des cuves (ACT_VIN_003, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Effluents vinicoles (ACT_VIN_006, moyen_terme)
- Filière des vinasses (ACT_VIN_007, moyen_terme)

### Réponses contradictoires (reponses_incoherentes)

Déclare un ratio d'eau par hectolitre mais aucun audit et une consommation nulle, un raclage des canalisations mais des cuves lavées au jet froid, aucun refroidissement mais des vinasses épandues sans plan, pas de pressurage, un plan écrit de restriction mais aucune démarche collective. Le plan ne doit pas être absurde.

Maturité 53 % (intermediaire) · concernement 58 % · axes : audit, nettoyage, vinasses, collectif

- Audit eau (ACT_AGR_002, immediat)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Nettoyage des cuves (ACT_VIN_003, moyen_terme)
- Filière des vinasses (ACT_VIN_007, moyen_terme)

