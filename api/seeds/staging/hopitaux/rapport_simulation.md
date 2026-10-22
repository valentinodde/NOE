# Simulation du référentiel "Hôpitaux et cliniques" (hopitaux)

Source : staging + publié · 12 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 9 personas

## Alertes (1)

- plans vides : 18 % des profils

## Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 0, médiane 3, max 10
- Plans vides : 18 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

## Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 57 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 41 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 36 % |
| ACT_HOP_002 | Recherche de fuites | suivre_comprendre_maitriser | 26 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 26 % |
| ACT_HOP_001 | Bras morts et purges | changer_process_pratiques | 25 % |
| ACT_HOP_003 | Robinetterie adaptée | ameliorer_efficacite_hydrique | 25 % |
| ACT_HOP_006 | Réutilisation des rejets d'osmose | valoriser_reut_eaux_non_conventionnelles | 25 % |
| ACT_HOP_007 | Rejets réduits à la source | agir_rejets_qualite | 18 % |
| ACT_HOP_005 | Blanchisserie et stérilisation | ameliorer_efficacite_hydrique | 16 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 16 % |
| ACT_HOP_004 | Traitement d'eau de dialyse | ameliorer_efficacite_hydrique | 13 % |

## Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 24 % | | faible | 10 % |
| intermediaire | 67 % | | moyen | 72 % |
| avance | 10 % | | eleve | 18 % |

## Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_global | answer | add | 31 % |
| f_pas_audit | answer | add | 41 % |
| f_audit_inconnu | answer | add | 46 % |
| f_fuites_non_recherchees | answer | add | 26 % |
| f_purges_non_maitrisees | answer | add | 25 % |
| f_robinetterie | answer | add | 25 % |
| f_dialyse_ancienne | answer | add | 13 % |
| f_osmose_rejetee | answer | add | 12 % |
| f_sans_dialyse | answer | remove | 16 % |
| f_blanchisserie_sans_critere | answer | add | 16 % |
| f_sans_blanchisserie | answer | remove | 11 % |
| f_reseau_seul | answer | add | 26 % |
| f_effluents | answer | add | 18 % |
| f_continuite | answer | add | 41 % |
| f_collectif | answer | add | 23 % |
| f_avance_collectif | maturity | add | 10 % |
| f_deja_collectif | answer | remove | 44 % |
| f_sans_hebergement | answer | remove | 31 % |

## Questions conditionnelles

- hop_q02 : visible pour 59 % des profils
- hop_q03 : visible pour 59 % des profils
- hop_q04 : visible pour 59 % des profils
- hop_q05 : visible pour 59 % des profils
- hop_q06 : visible pour 59 % des profils
- hop_q07 : visible pour 59 % des profils
- hop_q08 : visible pour 59 % des profils
- hop_q09 : visible pour 59 % des profils
- hop_q10 : visible pour 25 % des profils

## Personas

### Centre hospitalier de 300 lits, rien de formalisé (hop_novice)

Centre hospitalier public de 300 lits avec urgences, blocs et imagerie, sans unité d'hémodialyse. Blanchisserie et stérilisation sur place, machines achetées sans regarder l'eau. Seule la facture d'eau est suivie, jamais d'audit, les fuites ne sont pas recherchées, les purges anti-légionelles se font au cas par cas, robinetterie d'origine, tout vient du réseau. Les effluents n'ont jamais été caractérisés, le plan blanc ne prévoit pas de coupure d'eau, aucune démarche de territoire.

Maturité 6 % (novice) · concernement 6 % · axes : equipements, comptage, audit, fuites, legionelles, autres_eaux, rejets, continuite, territoire

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Recherche de fuites (ACT_HOP_002, court_terme)
- Bras morts et purges (ACT_HOP_001, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Robinetterie adaptée (ACT_HOP_003, moyen_terme)
- Blanchisserie et stérilisation (ACT_HOP_005, moyen_terme)
- Rejets réduits à la source (ACT_HOP_007, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Clinique MCO équipée, en réflexion sur la suite (hop_equipe)

Clinique privée de court séjour (180 lits) avec une unité d'hémodialyse dont le traitement d'eau a été remplacé il y a deux ans, mais dont les rejets d'osmose partent à l'égout. Sous-compteurs par bâtiment, campagne de recherche de fuites déjà menée, bras morts supprimés et purges tracées, robinetterie renouvelée avec l'équipe d'hygiène, critère d'eau dans le marché de blanchisserie, eau de pluie pour l'arrosage, convention de déversement suivie. Audit de plus de cinq ans, risque de coupure connu sans procédure écrite, connaît les démarches locales sans y participer.

Maturité 58 % (intermediaire) · concernement 67 % · axes : audit, dialyse, continuite, territoire

- Audit eau (ACT_AGR_002, immediat)
- Démarche collective (ACT_AGR_010, court_terme)
- Rejets réduits à la source (ACT_HOP_007, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Réutilisation des rejets d'osmose (ACT_HOP_006, moyen_terme)

### Hospitalisation à domicile, sans lits sur site (hop_had)

Structure d'hospitalisation à domicile qui coordonne les soins de 80 patients depuis des bureaux. Aucun lit, aucun plateau technique, aucune blanchisserie sur site. La continuité des soins en cas de coupure d'eau chez les patients est connue comme un risque, sans procédure écrite. Aucune démarche de territoire.

Maturité 11 % (novice) · concernement 22 % · axes : continuite, territoire

- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### CHU exemplaire, démarche eau pilotée (hop_avance)

CHU de 1 200 lits avec dialyse, blanchisserie industrielle et stérilisation centrale. Télérelève et alertes de surconsommation, audit de moins de trois ans, recherche régulière des fuites, bras morts supprimés, robinetterie validée par l'hygiène, traitement d'eau de dialyse récent dont les rejets d'osmose sont réutilisés, tunnel de lavage à recyclage, plusieurs eaux non potables utilisées, réduction des rejets à la source engagée. Plan blanc avec procédure de coupure d'eau exercée chaque année, et le CHU anime une démarche territoriale sur l'eau.

Maturité 92 % (avance) · concernement 92 % · axes : aucun

Plan vide.

### Assistante de direction qui répond pour le directeur (hop_ne_sait_pas)

Une assistante de direction d'un centre hospitalier de 200 lits avec urgences remplit le questionnaire. Elle sait que l'établissement a un plateau technique et que la consommation d'eau n'est suivie que sur la facture. Elle ne sait rien du reste et répond « je ne sais pas » à toutes les autres questions.

Maturité 0 % (novice) · concernement 0 % · axes : comptage

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Hôpital psychiatrique pavillonnaire avec parc (hop_psychiatrie_pavillonnaire)

Établissement public de santé mentale de 250 lits répartis dans quinze pavillons anciens sur un parc arboré de 20 hectares, sans bloc, sans imagerie lourde, sans dialyse. Blanchisserie confiée à un groupement hospitalier sans critère d'eau dans le marché. Relevé mensuel du compteur général, audit envisagé, des écarts de facture font réagir sans recherche de fuites, purges longues sur tous les points, réducteurs de débit posés dans les chambres il y a trois ans, tout vient du réseau. Plan blanc sans volet eau, aucune démarche de territoire.

Maturité 18 % (novice) · concernement 27 % · axes : equipements, comptage, audit, fuites, legionelles, autres_eaux, continuite, territoire

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Recherche de fuites (ACT_HOP_002, court_terme)
- Bras morts et purges (ACT_HOP_001, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Robinetterie adaptée (ACT_HOP_003, moyen_terme)
- Blanchisserie et stérilisation (ACT_HOP_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### CHU avec grande unité de dialyse vieillissante (hop_gros_dialyseur)

CHU de 900 lits, gros consommateur, avec un centre d'hémodialyse de 40 postes dont l'osmoseur a quinze ans et dont personne ne connaît la consommation par séance. Sous-compteurs par bâtiment relevés chaque mois, audit de plus de cinq ans, une campagne de recherche de fuites a eu lieu, points peu utilisés recensés et purgés selon un protocole, critère d'économie au renouvellement de la robinetterie, critère d'eau exigé à l'achat pour la stérilisation. Projet d'eau de pluie étudié, convention de déversement suivie, procédure écrite de coupure d'eau, participe au contrat de nappe local.

Maturité 47 % (intermediaire) · concernement 58 % · axes : audit, dialyse, autres_eaux

- Audit eau (ACT_AGR_002, immediat)
- Compteur par usage (ACT_AGR_001, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Traitement d'eau de dialyse (ACT_HOP_004, moyen_terme)
- Rejets réduits à la source (ACT_HOP_007, court_terme)
- Réutilisation des rejets d'osmose (ACT_HOP_006, moyen_terme)

### Clinique en conformité, rien au-delà (hop_contraint_reglementaire)

Clinique chirurgicale de 120 lits avec imagerie et médecine nucléaire, sans dialyse. Elle fait ce que la réglementation impose : autorisation de déversement en règle, suivi des légionelles et purges selon un protocole sur les points recensés, mais rien au-delà. Relevé régulier du compteur général, jamais d'audit, fuites traitées quand la facture augmente, robinetterie d'origine, stérilisation sur place sans critère d'eau, réseau seul. Le plan blanc traite la coupure d'eau par une procédure écrite, aucune démarche de territoire.

Maturité 25 % (novice) · concernement 25 % · axes : equipements, comptage, audit, fuites, autres_eaux, rejets, territoire

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Recherche de fuites (ACT_HOP_002, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Robinetterie adaptée (ACT_HOP_003, moyen_terme)
- Blanchisserie et stérilisation (ACT_HOP_005, moyen_terme)
- Rejets réduits à la source (ACT_HOP_007, court_terme)

### Réponses contradictoires (hop_incoherent)

Hôpital local de 90 lits de soins de suite, sans plateau technique. Déclare une télérelève avec alertes mais ne recherche jamais les fuites, des bras morts supprimés mais une robinetterie d'origine, une unité de dialyse au traitement ancien alors qu'il n'a pas de plateau technique, et ni blanchisserie ni stérilisation. Audit récent, tout vient du réseau, procédure de coupure d'eau exercée, participe à une démarche collective.

Maturité 48 % (intermediaire) · concernement 52 % · axes : fuites, equipements, dialyse, autres_eaux

- Compteur par usage (ACT_AGR_001, immediat)
- Recherche de fuites (ACT_HOP_002, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Robinetterie adaptée (ACT_HOP_003, moyen_terme)
- Traitement d'eau de dialyse (ACT_HOP_004, moyen_terme)
- Réutilisation des rejets d'osmose (ACT_HOP_006, moyen_terme)

