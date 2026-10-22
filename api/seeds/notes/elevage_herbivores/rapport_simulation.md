# Simulation du référentiel "Élevage d'herbivores" (elevage_herbivores)

Source : staging + publié · 11 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 9 personas

## Alertes (0)

Aucune.

## Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 0, médiane 5, max 11
- Plans vides : 2 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

## Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 59 % |
| ACT_HRB_003 | Abreuvement au pâturage | ameliorer_efficacite_hydrique | 54 % |
| ACT_HRB_001 | Abreuvoirs entretenus | ameliorer_efficacite_hydrique | 48 % |
| ACT_AGR_009 | Plan sécheresse | sensibiliser_former | 47 % |
| ACT_AGR_001 | Sous-comptage par usage | suivre_comprendre_maitriser | 46 % |
| ACT_HRB_002 | Lavage de la traite | ameliorer_efficacite_hydrique | 46 % |
| ACT_HRB_004 | Système fourrager résilient | changer_process_pratiques | 41 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 40 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 33 % |
| ACT_HRB_006 | Eaux blanches et vertes | agir_rejets_qualite | 27 % |
| ACT_HRB_007 | Berges protégées | agir_rejets_qualite | 25 % |
| ACT_HRB_005 | Eau de la laiterie réutilisée | valoriser_reut_eaux_non_conventionnelles | 16 % |

## Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 14 % | | faible | 10 % |
| intermediaire | 75 % | | moyen | 76 % |
| avance | 12 % | | eleve | 15 % |

## Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_global | answer | add | 68 % |
| f_suivi_inconnu | answer | add | 11 % |
| f_sans_eau_de_pluie | class | add | 53 % |
| f_sans_diagnostic | answer | add | 66 % |
| f_diagnostic_inconnu | answer | add | 10 % |
| f_abreuvoirs_non_entretenus | answer | add | 48 % |
| f_sans_batiment | answer | remove | 23 % |
| f_batiment_inconnu | answer | remove | 10 % |
| f_abreuvement_au_ruisseau | answer | add | 25 % |
| f_paturage_sans_reseau | answer | add | 29 % |
| f_sans_paturage | answer | remove | 20 % |
| f_lavage_non_optimise | answer | add | 46 % |
| f_sans_traite | answer | remove | 23 % |
| f_prerefroidisseur_perdu | answer | add | 16 % |
| f_eaux_blanches_melangees | answer | add | 27 % |
| f_fourrage_sans_marge | answer | add | 41 % |
| f_secheresse_non_anticipee | answer | add | 47 % |
| f_novice_sans_collectif | maturity | remove | 14 % |
| f_hors_collectif | answer | add | 47 % |

## Questions conditionnelles

- hrb_q07 : visible pour 68 % des profils
- hrb_q08 : visible pour 68 % des profils

## Personas

### Élevage laitier de 60 vaches, rien de formalisé (laitier_novice)

Exploitation laitière de 60 vaches en Mayenne, salle de traite 2 x 5, vaches au pâturage de mars à novembre. Eau du réseau et d'un vieux puits, compteur général relevé de temps en temps, jamais de diagnostic. Abreuvoirs réparés quand ils fuient, génisses abreuvées à la tonne sur les parcelles éloignées, lavage de la traite aux réglages d'origine, eau du prérefroidisseur à l'égout, eaux de la salle de traite dans la fosse à lisier. Achète du foin quand l'herbe manque l'été, n'a jamais regardé les arrêtés sécheresse, ne connaît pas le SAGE.

Maturité 15 % (novice) · concernement 18 % · axes : connaissance, ressources, abreuvement, paturage, traite, effluents, fourrage, anticipation, collectif

- Lavage de la traite (ACT_HRB_002, immediat)
- Eau de la laiterie réutilisée (ACT_HRB_005, court_terme)
- Sous-comptage par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Abreuvoirs entretenus (ACT_HRB_001, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Abreuvement au pâturage (ACT_HRB_003, court_terme)
- Système fourrager résilient (ACT_HRB_004, moyen_terme)
- Plan sécheresse (ACT_AGR_009, court_terme)
- Eaux blanches et vertes (ACT_HRB_006, moyen_terme)

### Élevage laitier robotisé équipé, en réflexion sur la suite (laitier_robot_equipe)

Élevage de 120 vaches avec deux robots de traite, installé il y a quatre ans. Compteurs séparés pour l'abreuvement et le bloc traite, volumes de lavage suivis avec le conseiller robot, prérefroidisseur raccordé à une partie des abreuvoirs, eaux blanches et vertes stockées à part et épandues. Eau du forage seulement, abreuvoirs avec vannes et contrôlés chaque semaine, vaches en bâtiment, génisses au pré abreuvées à la tonne. Diagnostic eau de plus de cinq ans, stock de fourrage d'hiver sans marge, sait à peu près quoi faire en cas d'arrêté sans plan écrit, informé du PTGE sans y participer.

Maturité 61 % (intermediaire) · concernement 64 % · axes : connaissance, paturage, fourrage, collectif

- Audit eau (ACT_AGR_002, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Abreuvement au pâturage (ACT_HRB_003, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Système fourrager résilient (ACT_HRB_004, moyen_terme)

### Naisseur allaitant de 80 vaches charolaises (allaitant_sans_traite)

Élevage allaitant de 80 vaches en Saône-et-Loire, stabulation l'hiver, pâturage d'avril à novembre. Les vaches boivent au ruisseau sur la moitié des parcelles et aux sources sur les autres, réseau public au bâtiment. Ne trait pas. Relève le compteur de temps en temps, jamais de diagnostic, abreuvoirs du bâtiment contrôlés de temps en temps. A gardé un stock de foin de sécurité depuis 2022, s'organise sur le moment quand une source tarit, informé du contrat de rivière.

Maturité 30 % (novice) · concernement 33 % · axes : connaissance, ressources, abreuvement, paturage, anticipation, collectif

- Audit eau (ACT_AGR_002, immediat)
- Abreuvoirs entretenus (ACT_HRB_001, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Abreuvement au pâturage (ACT_HRB_003, court_terme)
- Berges protégées (ACT_HRB_007, court_terme)
- Plan sécheresse (ACT_AGR_009, court_terme)

### GAEC laitier engagé, tout en place (laitier_avance)

GAEC de 90 vaches laitières en Bretagne, accompagné depuis trois ans dans une opération Écod'eau. Compteurs par poste, eau de forage et eau de pluie des stabulations, diagnostic eau récent. Abreuvoirs avec vannes, réseau d'abreuvement et réserve sur toutes les parcelles, volumes de lavage mesurés, eau du prérefroidisseur stockée et entièrement réutilisée, eaux blanches traitées par filtre planté. Stock de sécurité et prairies multi-espèces, plan sécheresse écrit, membre de la commission locale de l'eau.

Maturité 100 % (avance) · concernement 100 % · axes : aucun

Plan vide.

### Conjointe qui répond pour l'exploitant, sans connaître l'eau (ne_sait_pas)

La conjointe du chef d'exploitation, qui tient la comptabilité, répond à sa place. Elle sait que l'élevage est raccordé au réseau public et paie une facture d'eau, mais ne connaît ni le suivi, ni les abreuvoirs, ni la traite, ni les stocks. Elle passe presque toutes les questions.

Maturité 0 % (novice) · concernement 33 % · axes : ressources

- Sous-comptage par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Élevage de chevaux de selle en plein air (equides_plein_air)

Éleveur de 25 juments poulinières en Normandie, chevaux dehors toute l'année avec des abris naturels, sans bâtiment d'élevage. Les chevaux boivent au ruisseau qui borde les prairies, sans compteur ni diagnostic. Ne trait pas. Achète du foin quand l'herbe manque, n'a pas réfléchi aux sécheresses, ne participe à aucune démarche.

Maturité 15 % (novice) · concernement 7 % · axes : connaissance, paturage, fourrage, anticipation, collectif

- Abreuvement au pâturage (ACT_HRB_003, court_terme)
- Système fourrager résilient (ACT_HRB_004, moyen_terme)
- Berges protégées (ACT_HRB_007, court_terme)
- Plan sécheresse (ACT_AGR_009, court_terme)

### Atelier d'engraissement de jeunes bovins, tout réseau (engraisseur_tout_reseau)

Engraisseur de 400 jeunes bovins en bâtiment toute l'année, ration à base de maïs ensilage, alimenté uniquement par le réseau public. Relève son compteur chaque mois et vérifie la nuit, abreuvoirs contrôlés de temps en temps. Ni pâturage ni traite. Diagnostic envisagé mais pas fait, stocks d'hiver sans marge, sait qu'en cas de coupure il n'a aucune solution de secours mais n'a rien écrit, informé du SAGE.

Maturité 37 % (intermediaire) · concernement 44 % · axes : ressources, connaissance, abreuvement, fourrage, anticipation, collectif

- Audit eau (ACT_AGR_002, immediat)
- Abreuvoirs entretenus (ACT_HRB_001, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Système fourrager résilient (ACT_HRB_004, moyen_terme)
- Plan sécheresse (ACT_AGR_009, court_terme)

### Élevage laitier de 250 vaches sous enregistrement ICPE, conforme (laitier_icpe_conforme)

Élevage de 250 vaches sous enregistrement ICPE, en zone de répartition des eaux. Compteur sur le forage relevé chaque mois comme l'exige l'arrêté, eaux blanches et vertes stockées à part et épandues selon les prescriptions, diagnostic eau réalisé il y a deux ans pour un dossier d'aide. Rien au-delà : lavage contrôlé seulement au contrôle annuel de la machine, eau du prérefroidisseur à l'égout, abreuvoirs contrôlés de temps en temps, vaches en bâtiment toute l'année. Stock de sécurité, solutions de secours repérées, représenté au PTGE par la chambre.

Maturité 58 % (intermediaire) · concernement 58 % · axes : ressources, abreuvement, traite

- Lavage de la traite (ACT_HRB_002, immediat)
- Eau de la laiterie réutilisée (ACT_HRB_005, court_terme)
- Sous-comptage par usage (ACT_AGR_001, immediat)
- Abreuvoirs entretenus (ACT_HRB_001, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)

### Chevrier fromager fermier de 80 chèvres (chevrier_fromager)

Élevage de 80 chèvres laitières en Poitou, lait transformé en fromages à la ferme. Chèvres en chèvrerie avec sortie sur parcours, abreuvées par des abreuvoirs raccordés sur une partie du parcours. Réseau public seulement, compteur relevé de temps en temps. Lavage de la petite salle de traite aux réglages d'origine, pas de prérefroidisseur, eaux de lavage au fossé. Jamais de diagnostic, achète du foin de luzerne quand il manque, s'organise sur le moment, ne participe à aucune démarche.

Maturité 12 % (novice) · concernement 18 % · axes : connaissance, ressources, abreuvement, paturage, traite, effluents, fourrage, anticipation, collectif

- Lavage de la traite (ACT_HRB_002, immediat)
- Sous-comptage par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Abreuvoirs entretenus (ACT_HRB_001, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Abreuvement au pâturage (ACT_HRB_003, court_terme)
- Système fourrager résilient (ACT_HRB_004, moyen_terme)
- Plan sécheresse (ACT_AGR_009, court_terme)
- Eaux blanches et vertes (ACT_HRB_006, moyen_terme)

