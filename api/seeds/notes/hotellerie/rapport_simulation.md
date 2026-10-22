# Simulation du référentiel "Hôtellerie" (hotellerie)

Source : staging + publié · 11 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 7 personas

## Alertes (0)

Aucune.

## Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 1, médiane 5, max 10
- Plans vides : 0 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

## Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 79 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 70 % |
| ACT_HOT_003 | Linge à la demande | changer_process_pratiques | 48 % |
| ACT_HOT_002 | Chasse aux fuites | sensibiliser_former | 47 % |
| ACT_HOT_007 | Ratio litres par nuitée | suivre_comprendre_maitriser | 44 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 43 % |
| ACT_HOT_001 | Équipements hydro-économes | ameliorer_efficacite_hydrique | 41 % |
| ACT_HOT_005 | Piscine économe | ameliorer_efficacite_hydrique | 40 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 29 % |
| ACT_HOT_004 | Lavage économe | ameliorer_efficacite_hydrique | 25 % |
| ACT_HOT_006 | Espaces verts sobres | changer_process_pratiques | 22 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 22 % |

## Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 9 % | | faible | 4 % |
| intermediaire | 86 % | | moyen | 85 % |
| avance | 6 % | | eleve | 12 % |

## Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_facture | answer | add | 44 % |
| f_sans_sous_compteur | answer | add | 44 % |
| f_chambres_seules | class | remove | 36 % |
| f_pas_audit | answer | add | 67 % |
| f_audit_inconnu | answer | add | 12 % |
| f_sdb_non_equipees | answer | add | 41 % |
| f_fuites_subies | answer | add | 47 % |
| f_linge_quotidien | answer | add | 48 % |
| f_machines_sans_critere | answer | add | 25 % |
| f_sans_machine | answer | remove | 27 % |
| f_piscine_non_optimisee | answer | add | 40 % |
| f_sans_piscine | answer | remove | 18 % |
| f_arrosage_classique | answer | add | 22 % |
| f_jardin_sans_pluie | answer | add | 43 % |
| f_sans_jardin | answer | remove | 20 % |
| f_restrictions_non_anticipees | answer | add | 70 % |
| f_hors_collectif | answer | add | 22 % |

## Personas

### Hôtel indépendant 2 étoiles, rien de formalisé (hotel_novice)

Hôtel familial de 35 chambres en zone littorale, restaurant et petite blanchisserie sur place, jardin arrosé au jet l'été. Robinetterie d'origine, linge changé chaque jour, fuites découvertes par les clients, machines achetées au prix. Aucun suivi autre que la facture, jamais d'audit, restrictions jamais regardées, pas de piscine.

Maturité 6 % (novice) · concernement 6 % · axes : equipements, comptage, audit, fuites, linge, exterieurs, anticipation

- Équipements hydro-économes (ACT_HOT_001, immediat)
- Ratio litres par nuitée (ACT_HOT_007, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Chasse aux fuites (ACT_HOT_002, immediat)
- Linge à la demande (ACT_HOT_003, immediat)
- Lavage économe (ACT_HOT_004, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Espaces verts sobres (ACT_HOT_006, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Hôtel 4 étoiles équipé, en réflexion sur la suite (hotel_equipe)

Hôtel de 90 chambres avec piscine extérieure et restaurant. Toutes les salles de bains ont été équipées en hydro-économes lors de la rénovation, fiche de signalement des fuites suivie, linge à la demande, machines choisies sur leur consommation. Relevé mensuel avec ratio par nuitée mais sans sous-compteur, audit de plus de cinq ans, piscine couverte la nuit mais filtres lavés à heure fixe, jardin déjà en goutte-à-goutte. Suit les alertes sécheresse sans plan.

Maturité 48 % (intermediaire) · concernement 55 % · axes : audit, piscine, anticipation, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Piscine économe (ACT_HOT_005, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Hôtel urbain sans piscine, jardin ni machines (hotel_urbain_chambres_seules)

Hôtel de 50 chambres en centre-ville, petit-déjeuner livré en plateaux préparés à l'extérieur, linge entièrement confié à une blanchisserie. Ni piscine, ni spa, ni espace vert. Relève le compteur de temps en temps, quelques chambres équipées de mousseurs, consigne orale sur les fuites, linge changé chaque jour. Jamais d'audit, jamais regardé les restrictions.

Maturité 27 % (novice) · concernement 30 % · axes : comptage, audit, equipements, fuites, linge, anticipation

- Équipements hydro-économes (ACT_HOT_001, immediat)
- Ratio litres par nuitée (ACT_HOT_007, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Chasse aux fuites (ACT_HOT_002, immediat)
- Linge à la demande (ACT_HOT_003, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Hôtel écolabellisé, pratiques pilotées (hotel_avance)

Hôtel de 120 chambres titulaire de l'Écolabel européen, piscine et jardin. Sous-compteurs par usage et ratio par nuitée, audit récent, toutes les salles de bains équipées et contrôlées, linge à la demande suivi, machines économes avec dosage automatique, eau de lavage des filtres réutilisée, jardin sobre à l'eau de pluie, plan sécheresse écrit, pilote d'une démarche de territoire.

Maturité 91 % (avance) · concernement 91 % · axes : aucun

Plan vide.

### Réceptionniste qui répond pour la direction (hotel_ne_sait_pas)

Réceptionniste d'un hôtel de 40 chambres, qui remplit le questionnaire à la place de la direction. Sait seulement que la consommation est suivie à la facture et que l'hôtel n'a pas de piscine ; ne connaît ni l'équipement des chambres, ni les pratiques de linge, ni les démarches engagées.

Maturité 33 % (intermediaire) · concernement 33 % · axes : comptage

- Ratio litres par nuitée (ACT_HOT_007, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Village de vacances saisonnier avec espace aquatique (village_vacances)

Village de vacances de 150 logements avec service de chambre quotidien, ouvert d'avril à octobre en zone méditerranéenne. Espace aquatique sans mesure particulière, vastes espaces verts arrosés par aspersion, restauration collective et blanchisserie intégrées avec des machines renouvelées sur critère eau. Mousseurs dans une partie des logements, linge laissé au choix du client mais consigne mal suivie, relevés de compteur occasionnels, audit envisagé. Informé des arrêtés sécheresse, participe à une démarche de l'office de tourisme.

Maturité 27 % (novice) · concernement 42 % · axes : comptage, audit, equipements, fuites, linge, piscine, exterieurs, anticipation

- Équipements hydro-économes (ACT_HOT_001, immediat)
- Ratio litres par nuitée (ACT_HOT_007, immediat)
- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Chasse aux fuites (ACT_HOT_002, immediat)
- Linge à la demande (ACT_HOT_003, immediat)
- Piscine économe (ACT_HOT_005, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Espaces verts sobres (ACT_HOT_006, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Hôtel de station avec spa, tension hivernale (hotel_montagne_spa)

Hôtel 4 étoiles de 60 chambres en station de ski, ouvert l'hiver et l'été, spa avec bassin intérieur non couvert. Salles de bains toutes équipées, linge à la demande, fiche de signalement des fuites. Ratio mensuel sans sous-compteur, pas d'audit, pas de jardin arrosé. A des consignes pour les restrictions d'été mais rien pour l'étiage hivernal ; pas de démarche collective.

Maturité 42 % (intermediaire) · concernement 42 % · axes : audit, piscine

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Piscine économe (ACT_HOT_005, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

