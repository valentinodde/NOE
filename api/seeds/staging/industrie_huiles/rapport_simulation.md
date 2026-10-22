# Simulation du référentiel "Huiles et corps gras" (industrie_huiles)

Source : staging + publié · 14 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 8 personas

## Alertes (0)

Aucune.

## Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 0, médiane 3, max 8
- Plans vides : 1 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

## Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 57 % |
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 53 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 42 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 41 % |
| ACT_HUI_004 | Nettoyage à sec d'abord | changer_process_pratiques | 41 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 32 % |
| ACT_HUI_007 | Effluents gras prétraités | agir_rejets_qualite | 18 % |
| ACT_HUI_002 | Refroidissement en boucle | ameliorer_efficacite_hydrique | 17 % |
| ACT_HUI_001 | Lavage des olives en boucle | ameliorer_efficacite_hydrique | 14 % |
| ACT_HUI_005 | Eaux réutilisées | valoriser_reut_eaux_non_conventionnelles | 11 % |
| ACT_HUI_006 | Filière margines et grignons | agir_rejets_qualite | 11 % |
| ACT_HUI_003 | Décanteur deux phases | changer_process_pratiques | 3 % |

## Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 19 % | | faible | 7 % |
| intermediaire | 77 % | | moyen | 86 % |
| avance | 5 % | | eleve | 8 % |

## Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_absent | answer | add | 43 % |
| f_suivi_inconnu | answer | add | 14 % |
| f_sans_pluie | class | add | 57 % |
| f_pluie_moulin | answer | remove | 23 % |
| f_pluie_gros_site | numeric | remove | 27 % |
| f_petit_site_compteur | numeric | remove | 35 % |
| f_petit_site_audit | numeric | remove | 35 % |
| f_conso_icpe | numeric | add | 37 % |
| f_volume_faible_reut | numeric | remove | 54 % |
| f_pas_audit | answer | add | 69 % |
| f_audit_inconnu | answer | add | 8 % |
| f_nettoyage_au_jet | answer | add | 41 % |
| f_lavage_olives_ouvert | answer | add | 14 % |
| f_trois_phases | answer | add | 3 % |
| f_margines_hors_filiere | answer | add | 11 % |
| f_refroidissement_ouvert | answer | add | 17 % |
| f_pas_de_reut | answer | add | 25 % |
| f_effluents_fragiles | answer | add | 18 % |
| f_risque_non_analyse | answer | add | 43 % |
| f_plan_deja_formalise | answer | remove | 22 % |
| f_hors_collectif | answer | add | 42 % |

## Questions conditionnelles

- hui_q07 : visible pour 23 % des profils
- hui_q08 : visible pour 23 % des profils
- hui_q09 : visible pour 23 % des profils
- hui_q10 : visible pour 38 % des profils
- hui_q11 : visible pour 38 % des profils
- hui_q12 : visible pour 38 % des profils

## Personas

### Moulin à huile d'olive, rien de formalisé (moulin_novice)

Moulin familial de trois personnes dans le Var, 900 m³ d'eau du réseau par an concentrés sur la campagne d'hiver. Laveuse à olives en eau courante, décanteur trois phases, margines épandues chez un voisin sans plan d'épandage, nettoyage au jet. Un compteur général jamais relevé, aucun audit, restrictions et démarches locales jamais regardées.

Maturité 9 % (novice) · concernement 9 % · axes : eau_moulin, comptage, sources_alternatives, audit, nettoyage, margines, risque_reglementaire, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage à sec d'abord (ACT_HUI_004, immediat)
- Lavage des olives en boucle (ACT_HUI_001, court_terme)
- Filière margines et grignons (ACT_HUI_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Décanteur deux phases (ACT_HUI_003, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Usine de trituration et raffinage équipée, en réflexion (raffinerie_equipee)

Site de trituration de colza et de raffinage de 80 salariés, 250 000 m³ par an entre réseau public et prise en rivière. Condenseurs en boucle fermée sur tours, prétraitement des effluents avec convention de rejet à jour, compteurs par atelier. Raclage à sec sur une partie des postes seulement, réutilisation des condensats envisagée sans suite, audit de plus de cinq ans, informé des restrictions sans analyse formelle.

Maturité 36 % (intermediaire) · concernement 52 % · axes : sources_alternatives, audit, nettoyage, risque_reglementaire, collectif

- Audit eau (ACT_AGR_002, immediat)
- Nettoyage à sec d'abord (ACT_HUI_004, immediat)
- Démarche collective (ACT_AGR_010, court_terme)
- Eaux réutilisées (ACT_HUI_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Huilerie de noix par pression à froid, sans eau de process (huilerie_pression_froid)

Huilerie artisanale de deux personnes en Dordogne, pression à froid de noix et de noisettes, 150 m³ d'eau du réseau par an pour le nettoyage et les sanitaires. Pas de lavage de matière première, pas de refroidissement ni d'effluent de process. Raclage à sec systématique, compteur général, jamais d'audit, restrictions non regardées.

Maturité 17 % (novice) · concernement 17 % · axes : comptage, sources_alternatives, audit, risque_reglementaire, collectif

- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Site de trituration avancé, tout est en place (site_avance)

Grand site de trituration et de raffinage, 400 000 m³ par an entre forage, eau de pluie et eaux usées traitées de la collectivité. Compteurs par poste et ratio par tonne suivis, audit récent, consignes de nettoyage écrites, condenseurs en boucle fermée, réutilisation déclarée des condensats, station sur site avec rétentions. Plan de restriction écrit, engagements chiffrés dans le contrat de nappe.

Maturité 85 % (avance) · concernement 85 % · axes : aucun

Plan vide.

### Moulin, réponses de la secrétaire qui ne sait presque rien (moulin_ne_sait_pas)

La comptable d'un moulin coopératif répond à la place du responsable de production. Elle sait que le site est un moulin à huile d'olive et que la facture d'eau tourne autour de 3 000 m³ par an, et ne connaît rien d'autre : compteurs, procédé, margines, audit, restrictions.

Maturité 17 % (novice) · concernement 17 % · axes : aucun

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Fondoir sous autorisation, conforme mais sans rien au-delà (fondoir_contraint)

Fondoir de graisses animales de 40 salariés, soumis à autorisation, 120 000 m³ par an entre forage et prise en rivière. Refroidissement en boucle fermée et station d'épuration avec rétentions, comme l'exige l'arrêté, compteurs par atelier, raclage systématique. Aucune réutilisation des condensats, audit de plus de cinq ans, sait ce qui s'arrêterait en crise sans plan écrit, hors de toute démarche collective.

Maturité 42 % (intermediaire) · concernement 52 % · axes : audit, sources_alternatives, collectif

- Audit eau (ACT_AGR_002, immediat)
- Démarche collective (ACT_AGR_010, court_terme)
- Eaux réutilisées (ACT_HUI_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Moulin coopératif saisonnier déjà en deux phases (moulin_cooperatif_deux_phases)

Moulin coopératif des Alpilles, 2 500 m³ du réseau par an sur trois mois de campagne, décanteur deux phases, laveuse en recirculation avec douche finale, grignons épandus selon un plan à jour. Un compteur général, raclage à sec sur certains postes seulement, audit envisagé, informé des restrictions, participe aux réunions du contrat de rivière.

Maturité 42 % (intermediaire) · concernement 52 % · axes : comptage, sources_alternatives, audit, nettoyage, risque_reglementaire

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage à sec d'abord (ACT_HUI_004, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Margarinerie tout réseau, refroidissement à l'eau perdue (margarinerie_tout_reseau)

Margarinerie de 30 salariés alimentée uniquement par le réseau public, 60 000 m³ par an. Refroidissement de la cristallisation en partie à l'eau perdue, séparateur à graisses seul avant le réseau communal, aucune réutilisation. Compteur général, jamais d'audit, raclage partiel, restrictions non analysées.

Maturité 15 % (novice) · concernement 15 % · axes : sources_alternatives, comptage, audit, nettoyage, refroidissement, effluents, risque_reglementaire, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage à sec d'abord (ACT_HUI_004, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Eaux réutilisées (ACT_HUI_005, moyen_terme)
- Refroidissement en boucle (ACT_HUI_002, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Effluents gras prétraités (ACT_HUI_007, moyen_terme)

