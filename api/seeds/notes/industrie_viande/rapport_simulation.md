# Simulation du référentiel "Industrie de la viande et des produits de la mer" (industrie_viande)

Source : staging + publié · 12 questions · 13 mesures visibles · 200 profils aléatoires (graine 1) · 9 personas

## Alertes (0)

Aucune.

## Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 2, médiane 6, max 11
- Plans vides : 0 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

## Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 76 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 55 % |
| ACT_VIA_001 | Nettoyage économe | sensibiliser_former | 50 % |
| ACT_VIA_003 | Stérilisateurs à couteaux | ameliorer_efficacite_hydrique | 47 % |
| ACT_VIA_007 | Sang et saumures à part | agir_rejets_qualite | 47 % |
| ACT_VIA_008 | Prétraitement des effluents | agir_rejets_qualite | 46 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 46 % |
| ACT_VIA_002 | Ratio eau par kilo | suivre_comprendre_maitriser | 45 % |
| ACT_VIA_004 | Circuits de froid fermés | ameliorer_efficacite_hydrique | 42 % |
| ACT_VIA_005 | Transport à sec des déchets | changer_process_pratiques | 41 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 29 % |
| ACT_VIA_006 | Réutilisation des rinçages | valoriser_reut_eaux_non_conventionnelles | 29 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 24 % |

## Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 11 % | | faible | 5 % |
| intermediaire | 87 % | | moyen | 89 % |
| avance | 3 % | | eleve | 7 % |

## Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_absent | answer | add | 46 % |
| f_pas_de_ratio | answer | add | 45 % |
| f_conso_icpe | numeric | add | 37 % |
| f_pas_audit | answer | add | 65 % |
| f_audit_inconnu | answer | add | 11 % |
| f_nettoyage_perfectible | answer | add | 50 % |
| f_couteaux_debordement | answer | add | 47 % |
| f_dechets_a_l_eau | answer | add | 41 % |
| f_froid_ouvert | answer | add | 42 % |
| f_pas_de_reutilisation | answer | add | 72 % |
| f_pas_d_eau_de_pluie | answer | add | 40 % |
| f_coproduits_a_l_egout | answer | add | 47 % |
| f_effluents_fragiles | answer | add | 46 % |
| f_risque_non_analyse | answer | add | 42 % |
| f_plan_deja_formalise | answer | remove | 22 % |
| f_petit_volume_sans_reutilisation | numeric | remove | 47 % |
| f_reutiliser_sans_mesurer | answer | remove | 25 % |
| f_petit_site_hors_collectif | numeric | remove | 47 % |
| f_hors_collectif | answer | add | 47 % |

## Personas

### Abattoir de porcs, rien de formalisé (abattoir_novice)

Abattoir-découpe de porcs de 25 salariés, eau du réseau, environ 18 000 m³ par an. Salles lavées au jet sans raclage, stérilisateurs à couteaux à 82 °C qui débordent en continu, viscères entraînés à l'eau vers la grille, refroidissement à l'eau perdue. Le sang est collecté en partie seulement, raccordement au réseau sans convention à jour. Aucun audit, aucun suivi, restrictions jamais regardées.

Maturité 8 % (novice) · concernement 8 % · axes : nettoyage, comptage, audit, dechets_a_sec, froid, reutilisation, coproduits, effluents, risque_reglementaire, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage économe (ACT_VIA_001, immediat)
- Stérilisateurs à couteaux (ACT_VIA_003, court_terme)
- Transport à sec des déchets (ACT_VIA_005, court_terme)
- Sang et saumures à part (ACT_VIA_007, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Circuits de froid fermés (ACT_VIA_004, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Prétraitement des effluents (ACT_VIA_008, moyen_terme)

### Abattoir de volailles équipé, en réflexion sur la suite (volailles_equipe)

Abattoir de volailles de 120 salariés, 60 000 m³ par an. Raclage à sec partout, désinfection des couteaux par aspersion validée, évacuation des plumes et viscères à sec, sang collecté en totalité. Refroidissement par tour aéroréfrigérante, rinçages réutilisés ponctuellement pour les quais. Compteurs par atelier sans ratio, audit de plus de cinq ans, informé des restrictions sans analyse formelle.

Maturité 58 % (intermediaire) · concernement 64 % · axes : audit, froid, reutilisation, risque_reglementaire, collectif

- Audit eau (ACT_AGR_002, immediat)
- Réutilisation des rinçages (ACT_VIA_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Ratio eau par kilo (ACT_VIA_002, immediat)
- Circuits de froid fermés (ACT_VIA_004, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Salaisonnerie de jambons secs, sans process humide (salaisonnerie_seche)

Salaisonnerie de 12 salariés qui reçoit des jambons frais parés et les sale à sec puis les sèche en séchoirs ventilés. Pas de découpe au couteau sur stérilisateur, pas de flux de déchets, pas de saumure ni de cuisson, froid produit par des groupes à air. Environ 2 500 m³ par an, surtout pour le lavage des salles, déjà raclées à sec partout avec des lances à pistolet, sans consignes écrites. Compteur général, pas d'audit, informée des restrictions sans analyse.

Maturité 42 % (intermediaire) · concernement 44 % · axes : comptage, audit, reutilisation, risque_reglementaire, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Ratio eau par kilo (ACT_VIA_002, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Site exemplaire, charcuterie industrielle (site_avance)

Charcuterie industrielle de 200 salariés, 80 000 m³ par an. Ratio d'eau par kilo suivi par atelier, audit récent, consignes de lavage écrites et volumes suivis, couteaux désinfectés par méthode alternative, déchets évacués à sec, circuits de froid fermés. Réutilisation déclarée des rinçages, saumures collectées, station d'épuration avec autosurveillance, plan sécheresse écrit, engagée dans le contrat de nappe.

Maturité 94 % (avance) · concernement 94 % · axes : aucun

Plan vide.

### Assistante de direction qui répond pour le gérant (ne_sait_pas)

Atelier de découpe de viande. La personne qui répond connaît la facture d'eau (environ 6 000 m³ par an) et sait que le site est raccordé au réseau avec une convention, mais ne sait rien du reste et répond « je ne sais pas » partout ailleurs.

Maturité 50 % (intermediaire) · concernement 50 % · axes : aucun

- Audit eau (ACT_AGR_002, immediat)

### Gros abattoir multi-espèces, intermédiaire (gros_abattoir)

Abattoir de bovins et de porcs de 400 salariés, 250 000 m³ par an, réseau doublé d'un forage, rubrique ICPE 3641. Raclage partiel, bacs à couteaux temporisés, déchets évacués à sec sur une partie des lignes, tour aéroréfrigérante. Station d'épuration propre, sang collecté en totalité. Compteurs par atelier, audit récent, sait ce qui s'arrêterait en sécheresse sans plan écrit, participe aux réunions de la commission locale de l'eau.

Maturité 58 % (intermediaire) · concernement 58 % · axes : nettoyage, dechets_a_sec, froid, reutilisation

- Nettoyage économe (ACT_VIA_001, immediat)
- Réutilisation des rinçages (ACT_VIA_006, court_terme)
- Stérilisateurs à couteaux (ACT_VIA_003, court_terme)
- Transport à sec des déchets (ACT_VIA_005, court_terme)
- Ratio eau par kilo (ACT_VIA_002, immediat)
- Circuits de froid fermés (ACT_VIA_004, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Atelier de filetage et fumage de poisson, littoral (saurisserie_littorale)

Atelier de 30 salariés sur le littoral : décongélation, filetage, saumurage et fumage de saumon et de hareng. Environ 9 000 m³ par an, eau du réseau. Lavage partiellement raclé, pas de stérilisateur à couteaux, déchets de filetage entraînés à l'eau, froid par groupes à air, saumures usées rejetées à l'égout, raccordement sans convention à jour. Compteur général, aucun audit, pas d'analyse des restrictions.

Maturité 22 % (novice) · concernement 22 % · axes : comptage, audit, nettoyage, dechets_a_sec, reutilisation, coproduits, effluents, risque_reglementaire, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage économe (ACT_VIA_001, immediat)
- Réutilisation des rinçages (ACT_VIA_006, court_terme)
- Transport à sec des déchets (ACT_VIA_005, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Sang et saumures à part (ACT_VIA_007, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Ratio eau par kilo (ACT_VIA_002, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Prétraitement des effluents (ACT_VIA_008, moyen_terme)

### Charcuterie industrielle en enregistrement, conforme (charcuterie_icpe_conforme)

Fabricant de jambons cuits et de pâtés de 90 salariés, ICPE 2221 en enregistrement, 40 000 m³ par an. En conformité sur tout ce que l'arrêté impose : raclage à sec, circuits de refroidissement fermés, prétraitement et station avec autosurveillance, jus de cuisson et saumures collectés. Pièces reçues prêtes, pas de stérilisateur. Compteurs par atelier sans ratio, audit récent, sait ce qui s'arrêterait sans plan écrit, réutilisation ponctuelle.

Maturité 72 % (avance) · concernement 72 % · axes : reutilisation

- Réutilisation des rinçages (ACT_VIA_006, court_terme)
- Ratio eau par kilo (ACT_VIA_002, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Réponses contradictoires (reponses_incoherentes)

Atelier de découpe dont les réponses se contredisent : ratio par kilo suivi mais jamais d'audit ni de compteur divisionnaire évoqué, lavage au jet sans raclage mais déchets évacués à sec, réutilisation déclarée des rinçages mais jus rejetés à l'égout et rejet sans traitement.

Maturité 44 % (intermediaire) · concernement 44 % · axes : nettoyage, audit, coproduits, effluents, collectif

- Audit eau (ACT_AGR_002, immediat)
- Nettoyage économe (ACT_VIA_001, immediat)
- Stérilisateurs à couteaux (ACT_VIA_003, court_terme)
- Sang et saumures à part (ACT_VIA_007, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Prétraitement des effluents (ACT_VIA_008, moyen_terme)

