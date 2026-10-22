# Simulation du référentiel "Brasserie et boissons sans alcool" (industrie_boissons)

Source : staging + publié · 12 questions · 13 mesures visibles · 200 profils aléatoires (graine 1) · 9 personas

## Alertes (1)

- mesure jamais proposée : ACT_AGR_006 (Récupération d'eau de pluie)

## Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 1, médiane 5, max 9
- Plans vides : 0 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

## Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 79 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 55 % |
| ACT_BOI_001 | Ratio eau par hectolitre | suivre_comprendre_maitriser | 47 % |
| ACT_BOI_007 | Coproduits et rejets | agir_rejets_qualite | 47 % |
| ACT_BOI_004 | Pasteurisateur en boucle | ameliorer_efficacite_hydrique | 44 % |
| ACT_BOI_005 | Refroidissement économe | ameliorer_efficacite_hydrique | 41 % |
| ACT_BOI_006 | Eau du refroidisseur de moût | valoriser_reut_eaux_non_conventionnelles | 41 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 37 % |
| ACT_BOI_002 | Nettoyage manuel économe | sensibiliser_former | 37 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 29 % |
| ACT_BOI_008 | Protection de l'impluvium | agir_grand_cycle | 28 % |
| ACT_BOI_003 | Optimisation de la NEP | changer_process_pratiques | 18 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 0 % |

## Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 8 % | | faible | 1 % |
| intermediaire | 88 % | | moyen | 69 % |
| avance | 5 % | | eleve | 31 % |

## Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_absent | answer | add | 45 % |
| f_suivi_inconnu | answer | add | 10 % |
| f_ratio_absent | answer | add | 47 % |
| f_preleve_forage | class | add | 35 % |
| f_source_embouteillage | class | add | 36 % |
| f_conso_icpe | numeric | add | 38 % |
| f_petit_volume | numeric | remove | 40 % |
| f_pas_audit | answer | add | 70 % |
| f_audit_inconnu | answer | add | 9 % |
| f_nettoyage_tuyau | answer | add | 22 % |
| f_nep_duree_fixe | answer | add | 18 % |
| f_sans_consignes | answer | add | 45 % |
| f_nep_pas_manuel | answer | remove | 40 % |
| f_pasteurisateur_ouvert | answer | add | 44 % |
| f_froid_consommateur | answer | add | 41 % |
| f_eau_mout_perdue | answer | add | 41 % |
| f_rejets_bruts | answer | add | 47 % |
| f_risque_non_analyse | answer | add | 45 % |
| f_plan_deja_formalise | answer | remove | 22 % |
| f_deja_collectif | answer | remove | 49 % |
| f_impluvium_deja | answer | remove | 20 % |

## Personas

### Brasserie régionale, rien de formalisé (brasserie_novice)

Brasserie de douze salariés, 8 000 hl par an, eau du réseau uniquement, environ 4 000 m³ par an. Bouteilles pasteurisées dans un tunnel en appoint d'eau continu, cuves nettoyées au tuyau, groupe froid sur une petite tour dont personne ne suit les purges, eau du refroidisseur de moût à l'égout, levures et lavages rejetés ensemble au réseau. Aucun audit, aucune consigne, les restrictions n'ont jamais été regardées.

Maturité 8 % (novice) · concernement 11 % · axes : nettoyage, comptage, audit, pasteurisation, refroidissement, reutilisation, effluents, risque_reglementaire, territoire

- Compteur par usage (ACT_AGR_001, immediat)
- Ratio eau par hectolitre (ACT_BOI_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage manuel économe (ACT_BOI_002, immediat)
- Eau du refroidisseur de moût (ACT_BOI_006, court_terme)
- Pasteurisateur en boucle (ACT_BOI_004, court_terme)
- Coproduits et rejets (ACT_BOI_007, court_terme)
- Refroidissement économe (ACT_BOI_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Brasserie industrielle équipée, sans plan (brasserie_equipee)

Brasserie de quarante salariés, 150 000 hl par an, alimentée par un forage et le réseau, 60 000 m³ par an relevés chaque mois mais jamais rapportés à la production. Elle a investi dans une NEP pilotée par conductimètre, un pasteurisateur flash et la récupération de l'eau du moût en cuve. Ses tours aéroréfrigérantes ne sont pas suivies, ses drêches partent chez un éleveur mais les lavages sont rejetés sans prétraitement. Audit de plus de cinq ans, consignes écrites, informée des restrictions sans plan.

Maturité 50 % (intermediaire) · concernement 61 % · axes : audit, refroidissement, effluents, risque_reglementaire, territoire

- Ratio eau par hectolitre (ACT_BOI_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Démarche collective (ACT_AGR_010, court_terme)
- Coproduits et rejets (ACT_BOI_007, court_terme)
- Refroidissement économe (ACT_BOI_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Embouteilleur d'eau de source, sans brassage (eau_de_source)

Site d'embouteillage d'eau de source de trente salariés, 150 000 m³ prélevés par an dans sa nappe, plus le réseau pour les sanitaires. Ni brassage, ni pasteurisation, ni coproduit : l'eau sort du sol et part en bouteille. Les lignes sont nettoyées par une NEP à durée fixe, les consignes sont orales, le froid se limite à des groupes à air. Relevés réguliers, audit de plus de cinq ans, risques sécheresse évalués, suit les travaux du SAGE sans y siéger.

Maturité 50 % (intermediaire) · concernement 64 % · axes : nettoyage, audit, territoire

- Ratio eau par hectolitre (ACT_BOI_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Optimisation de la NEP (ACT_BOI_003, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Protection de l'impluvium (ACT_BOI_008, moyen_terme)

### Brasserie exemplaire (brasserie_avancee)

Grande brasserie qui suit son ratio d'eau par hectolitre par atelier, alimentée par forage, eau de pluie et rinçages réutilisés, 80 000 m³ par an. NEP pilotée, pasteurisation flash, froid adiabatique, eau du moût récupérée, bassin tampon et prétraitement, audit récent, procédure sécheresse écrite, conventions avec les agriculteurs autour de son captage.

Maturité 94 % (avance) · concernement 97 % · axes : aucun

Plan vide.

### Assistante qui répond pour le gérant (ne_sait_pas)

Personne de l'administration d'une microbrasserie qui remplit le questionnaire pour le gérant. Elle sait seulement que l'eau vient du réseau et que la bière n'est pas pasteurisée ; elle ne connaît ni le suivi, ni les volumes, ni les pratiques de nettoyage.

Maturité 33 % (intermediaire) · concernement 33 % · axes : aucun

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Malterie, gros consommateur sur forage (malterie)

Malterie de cinquante salariés, 250 000 m³ par an pompés dans ses puits, dont l'essentiel part à la trempe de l'orge. Ni brassage ni pasteurisation. Relevés réguliers, audit ancien, nettoyage à la moyenne pression avec consignes écrites, tours aéroréfrigérantes sans suivi des purges, radicelles collectées mais eaux de trempe rejetées à la station voisine sans prétraitement. Risques sécheresse évalués après les restrictions de 2022, pas de participation aux instances de bassin.

Maturité 44 % (intermediaire) · concernement 56 % · axes : audit, refroidissement, effluents, territoire

- Ratio eau par hectolitre (ACT_BOI_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Démarche collective (ACT_AGR_010, court_terme)
- Coproduits et rejets (ACT_BOI_007, court_terme)
- Refroidissement économe (ACT_BOI_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Limonaderie tout réseau (limonaderie_reseau)

Fabricant de limonades et de sirops de quinze salariés, uniquement sur le réseau public, 5 000 m³ par an lus sur un compteur général. NEP à durée fixe, consignes orales, pasteurisation en tunnel avec un recyclage partiel, refroidissement à l'eau perdue, sirops déclassés et lavages envoyés ensemble à l'égout. Aucun audit, restrictions jamais regardées.

Maturité 19 % (novice) · concernement 22 % · axes : nettoyage, comptage, audit, pasteurisation, refroidissement, effluents, risque_reglementaire, territoire

- Compteur par usage (ACT_AGR_001, immediat)
- Ratio eau par hectolitre (ACT_BOI_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Optimisation de la NEP (ACT_BOI_003, court_terme)
- Pasteurisateur en boucle (ACT_BOI_004, court_terme)
- Coproduits et rejets (ACT_BOI_007, court_terme)
- Refroidissement économe (ACT_BOI_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Microbrasserie artisanale (microbrasserie)

Brasseur seul avec un salarié, 300 hl par an, 150 m³ d'eau du réseau par an, sans compteur propre. Nettoyage avec une lance moyenne pression, habitudes transmises à l'oral, bière non pasteurisée, petit groupe froid à air. L'eau du refroidisseur de moût part à l'égout, les levures aussi ; les drêches vont à un éleveur voisin. A pensé à un diagnostic sans le faire, suit les arrêtés sécheresse sans analyse.

Maturité 31 % (novice) · concernement 42 % · axes : comptage, audit, nettoyage, reutilisation, effluents, risque_reglementaire, territoire

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage manuel économe (ACT_BOI_002, immediat)
- Eau du refroidisseur de moût (ACT_BOI_006, court_terme)
- Coproduits et rejets (ACT_BOI_007, court_terme)

### Réponses contradictoires (reponses_incoherentes)

Brasserie qui déclare suivre un ratio par hectolitre avec des compteurs par usage mais n'avoir jamais fait de diagnostic, nettoyer au tuyau tout en ayant des consignes suivies avec les relevés, et récupérer l'eau du moût alors qu'elle dit ne pas brasser ailleurs dans ses réponses. Source d'embouteillage cochée par erreur.

Maturité 58 % (intermediaire) · concernement 64 % · axes : audit, nettoyage, refroidissement

- Audit eau (ACT_AGR_002, immediat)
- Nettoyage manuel économe (ACT_BOI_002, immediat)
- Refroidissement économe (ACT_BOI_005, moyen_terme)

