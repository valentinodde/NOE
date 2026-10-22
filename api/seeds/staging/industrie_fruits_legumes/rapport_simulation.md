# Simulation du référentiel "Transformation de fruits et légumes" (industrie_fruits_legumes)

Source : staging + publié · 12 questions · 13 mesures visibles · 200 profils aléatoires (graine 1) · 8 personas

## Alertes (0)

Aucune.

## Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 1, médiane 5, max 9
- Plans vides : 0 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

## Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 82 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 54 % |
| ACT_FRL_006 | Recyclage en cascade | valoriser_reut_eaux_non_conventionnelles | 50 % |
| ACT_FRL_005 | Épluchage et blanchiment | changer_process_pratiques | 49 % |
| ACT_FRL_001 | Gestes économes des équipes | sensibiliser_former | 48 % |
| ACT_FRL_003 | Lavage d'entrée économe | ameliorer_efficacite_hydrique | 45 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 44 % |
| ACT_FRL_004 | Refroidissement en boucle | ameliorer_efficacite_hydrique | 42 % |
| ACT_FRL_007 | Eau de végétation | valoriser_reut_eaux_non_conventionnelles | 42 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 30 % |
| ACT_FRL_008 | Effluents de campagne | agir_rejets_qualite | 19 % |
| ACT_FRL_002 | Ratio eau par tonne | suivre_comprendre_maitriser | 12 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 10 % |

## Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 6 % | | faible | 2 % |
| intermediaire | 85 % | | moyen | 75 % |
| avance | 10 % | | eleve | 24 % |

## Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_pas_de_compteur_par_usage | answer | add | 50 % |
| f_pas_de_ratio | answer | add | 16 % |
| f_pluie_deja_recuperee | class | remove | 39 % |
| f_conso_icpe | numeric | add | 41 % |
| f_petit_volume | numeric | remove | 40 % |
| f_gros_preleveur | numeric | add | 25 % |
| f_pas_audit | answer | add | 73 % |
| f_audit_inconnu | answer | add | 10 % |
| f_lavage_perfectible | answer | add | 45 % |
| f_sans_matiere_terreuse | answer | remove | 27 % |
| f_epluchage_perfectible | answer | add | 49 % |
| f_refroidissement_ouvert | answer | add | 42 % |
| f_pas_de_consignes | answer | add | 48 % |
| f_pas_de_cascade | answer | add | 68 % |
| f_pluie_sans_process | answer | add | 27 % |
| f_condensats_perdus | answer | add | 42 % |
| f_effluents_non_separes | answer | add | 19 % |
| f_restrictions_non_analysees | answer | add | 40 % |
| f_plan_deja_ecrit | answer | remove | 27 % |
| f_restrictions_planifiees | answer | add | 27 % |

## Personas

### Conserverie de légumes, rien de formalisé (conserverie_novice)

Conserverie familiale de légumes (10.39A), 25 salariés en campagne dont une moitié de saisonniers, eau du réseau uniquement, environ 40 000 m³ par an concentrés de juin à octobre. Légumes lavés directement à l'eau à réception, eau d'épluchage et de blanchiment rejetée, boîtes refroidies à l'eau perdue en sortie d'autoclave. Aucune consigne aux équipes, aucun rinçage réutilisé, pas d'évaporateur, eaux et déchets partent ensemble au réseau. Aucun compteur hormis celui du distributeur, jamais d'audit, restrictions jamais regardées.

Maturité 11 % (novice) · concernement 14 % · axes : comptage, audit, lavage, epluchage, refroidissement, formation, reutilisation, effluents, anticipation

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Lavage d'entrée économe (ACT_FRL_003, court_terme)
- Recyclage en cascade (ACT_FRL_006, court_terme)
- Effluents de campagne (ACT_FRL_008, court_terme)
- Refroidissement en boucle (ACT_FRL_004, moyen_terme)
- Gestes économes des équipes (ACT_FRL_001, immediat)
- Épluchage et blanchiment (ACT_FRL_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Usine de légumes surgelés équipée, en réflexion (surgelation_equipee)

Site de surgélation de légumes (10.39A) de 150 salariés, 250 000 m³ par an, réseau public doublé d'un forage. Terre retirée à sec et débits des laveuses régulés, épluchage vapeur avec eau des blancheurs recyclée, prérefroidissement en circuit fermé, consignes écrites rappelées à chaque campagne. Dernier rinçage réutilisé sur une ligne seulement, pas d'évaporateur, déchets collectés à part et rejets sous convention. Compteurs par ligne sans ratio à la tonne, audit de plus de cinq ans, informé des restrictions sans analyse formelle.

Maturité 61 % (intermediaire) · concernement 75 % · axes : audit, anticipation

- Audit eau (ACT_AGR_002, immediat)
- Recyclage en cascade (ACT_FRL_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Ratio eau par tonne (ACT_FRL_002, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Transformateur de fruits à coque, sans process humide (fruits_a_coque)

Atelier de cassage, tri et grillage de noix et noisettes (10.39B), 8 salariés, 800 m³ par an d'eau du réseau pour le nettoyage des locaux et les sanitaires. Aucun produit terreux lavé, ni épluchage ni blanchiment, aucun traitement thermique à refroidir, pas de séchoir. Consignes orales, rien n'est réutilisé, déchets collectés à part et rejets sous convention. Compteur général relevé de temps en temps, jamais d'audit, restrictions jamais regardées.

Maturité 39 % (intermediaire) · concernement 42 % · axes : comptage, audit, formation, reutilisation, anticipation

- Audit eau (ACT_AGR_002, immediat)
- Gestes économes des équipes (ACT_FRL_001, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Site de transformation avancé, tout est en place (site_avance)

Site industriel de conserves et de surgelés (10.39A) de 300 000 m³ par an, alimenté par forage, par ses eaux de lavage recyclées et par les condensats de son concentrateur de purées. Compteurs par ligne avec ratio à la tonne, audit récent, terre retirée à sec et laveuses régulées, épluchage vapeur, circuits de refroidissement fermés, formation à chaque campagne. Rinçages réutilisés en cascade et condensats réutilisés, tous deux déclarés au préfet, station dimensionnée pour la campagne, plan écrit par niveau d'alerte.

Maturité 97 % (avance) · concernement 97 % · axes : aucun

- Démarche collective (ACT_AGR_010, court_terme)

### Assistant qui répond pour le gérant (ne_sait_pas)

Personne qui remplit le questionnaire à la place du dirigeant absent. Elle sait qu'il y a un compteur général en entrée de site, relevé de temps en temps, et rien de plus. Elle préfère répondre qu'elle ne sait pas plutôt que d'inventer.

Maturité 33 % (intermediaire) · concernement 33 % · axes : comptage

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Gros site de jus et concentrés, condensats perdus (jus_concentres)

Site de production de jus et de concentrés de pommes (10.32Z), 600 000 m³ par an, réseau public et captage en rivière. Fruits lavés avec terre retirée en partie à sec, pas d'épluchage, pasteurisateurs refroidis en circuit fermé, consignes écrites. Dernier rinçage réutilisé sur une ligne, mais les condensats de l'évaporateur partent intégralement aux effluents. Station sur site dimensionnée pour la campagne. Compteurs par ligne, audit récent, exposition aux restrictions évaluée.

Maturité 58 % (intermediaire) · concernement 67 % · axes : lavage, eau_vegetation

- Lavage d'entrée économe (ACT_FRL_003, court_terme)
- Recyclage en cascade (ACT_FRL_006, court_terme)
- Eau de végétation (ACT_FRL_007, moyen_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Ratio eau par tonne (ACT_FRL_002, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Atelier de 4e gamme, lavage intensif sans cuisson (quatrieme_gamme)

Atelier de salades et légumes crus prêts à l'emploi (10.39A), 40 salariés, 18 000 m³ par an d'eau du réseau, activité toute l'année. Légumes lavés directement en bacs à débit constant, parage à la main sans épluchage industriel ni blanchiment, aucun traitement thermique. Consignes orales, rinçages non réutilisés mais le sujet a été évoqué, pas de séchoir, dégrillage avant rejet au réseau. Compteur général, audit envisagé, informé des restrictions.

Maturité 33 % (intermediaire) · concernement 50 % · axes : comptage, audit, lavage, formation, reutilisation, effluents, anticipation

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Lavage d'entrée économe (ACT_FRL_003, court_terme)
- Recyclage en cascade (ACT_FRL_006, court_terme)
- Gestes économes des équipes (ACT_FRL_001, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Légumerie enregistrée ICPE, en conformité et rien au-delà (icpe_conforme)

Légumerie de pommes de terre épluchées (10.31Z) enregistrée au titre de la rubrique 2220, 90 000 m³ par an de réseau et de forage. Relevé quotidien du compteur par ligne comme l'impose l'arrêté, refroidissement en circuit fermé comme l'exige l'enregistrement, déchets collectés à part et rejets sous convention. Terre retirée en partie à sec, eau d'épluchage en partie décantée, consignes écrites, aucun rinçage réutilisé, pas de séchoir. Audit de plus de cinq ans, exposition aux restrictions évaluée.

Maturité 50 % (intermediaire) · concernement 58 % · axes : audit, lavage, epluchage, reutilisation

- Audit eau (ACT_AGR_002, immediat)
- Lavage d'entrée économe (ACT_FRL_003, court_terme)
- Recyclage en cascade (ACT_FRL_006, court_terme)
- Ratio eau par tonne (ACT_FRL_002, immediat)
- Épluchage et blanchiment (ACT_FRL_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

