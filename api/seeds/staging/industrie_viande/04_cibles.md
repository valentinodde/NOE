# Cibles de fiches : industrie de la viande et des produits de la mer

Étape 5 du skill `nouveau-secteur`. Statut : brouillon. Liste validée le 2026-09-24.
Date : 2026-09-24.

Le rapport de couverture (`rapport_couverture.md`) part de zéro : aucune des douze mesures
visibles n'a de prestataire, une seule a une aide (Diag Eco-Flux sur l'audit). Les fiches
laitières portent `secteurs: ["industrie_laitiere"]` et restent invisibles ici.

Candidats trouvés par quatre recherches parallèles (nettoyage, couteaux et déchets ; froid et
réutilisation ; effluents, comptage et audit ; aides). Chaque SIRET a été contrôlé avec
`outils_fiches.py rechercher-entreprise --nom`, état administratif A. Les URL sont des points
de départ pour les rédacteurs, qui revérifient tout.

## 1. Prestataires

Quinze entreprises privées, deux organismes techniques. Institutionnels : 2 sur 17, sous le
plafond d'un tiers. Ateliers d'Occitanie (entité créée en 2023, à confirmer) et l'IFIP (offre
de prestation non datée) ont été retirés au point d'arrêt de l'étape 5.

| Id | Structure | Type | Rôles | Mesures | Échelle | SIRET vérifié |
|---|---|---|---|---|---|---|
| PREST_VIA_001 | Hypred (Kersia), Dinard (35) | equipementier | conseil_etude, formation | VIA_001 | nationale | 33050741900050 |
| PREST_VIA_002 | REGELAV, Nantes (44) | equipementier | materiel, travaux | VIA_001, VIA_006 | nationale | 42087469500018 |
| PREST_VIA_003 | Facomia, Sainte-Blandine (38) | equipementier | materiel | VIA_003, VIA_007 | nationale | 30227989800035 |
| PREST_VIA_004 | Termet, Champagné (72) | installateur | materiel, travaux, conseil_etude | VIA_003, VIA_005, VIA_007 | nationale | 35371092400039 (à confirmer) |
| PREST_VIA_005 | Couédic Madoré Équipement, Plémet (22) | equipementier | materiel, travaux | VIA_005, VIA_007 | nationale | 34866581100025 |
| PREST_VIA_006 | CM2A, Rostrenen (22) | equipementier | materiel, travaux | VIA_005 | nationale | 48760026400021 |
| PREST_VIA_007 | Axima Réfrigération France (Equans) | installateur | conseil_etude, travaux | VIA_004 | nationale | 44026717700028 |
| PREST_VIA_008 | Dalkia Froid Solutions (EDF) | installateur | conseil_etude, travaux | VIA_004 | nationale | 06620112000848 |
| PREST_VIA_009 | JACIR, Pontault-Combault (77) | equipementier | materiel | VIA_004 | nationale | 78625049800015 |
| PREST_VIA_010 | Ecofilae, Montpellier (34) | bureau_etudes | conseil_etude | VIA_006, AGR_009 | nationale | 80193537000032 |
| PREST_VIA_011 | Atlantique Industrie, Ancenis (44) | installateur | conseil_etude, travaux, materiel | VIA_008, VIA_006, AGR_009 | nationale | 37994658500021 |
| PREST_VIA_012 | Step Concept, Villematier (31) | installateur | conseil_etude, travaux | VIA_008 | régionale (Occitanie) | 80149798300032 |
| PREST_VIA_013 | Energiency (EPSA), Rennes (35) | bureau_etudes | conseil_etude, materiel | VIA_002, AGR_001 | nationale | 79263909800062 |
| PREST_VIA_014 | Ovalt, Betton (35) | installateur | travaux | VIA_002, AGR_001 | régionale (Grand Ouest) | 82464676400020 |
| PREST_VIA_015 | Essor Ingénierie, Lons (64) | bureau_etudes | conseil_etude | AGR_002, AGR_009 | nationale | 43806811600054 |
| PREST_VIA_016 | ADIV, Clermont-Ferrand | organisme_technique | conseil_etude | AGR_002, AGR_009, VIA_003, VIA_008 | nationale | 31126177000078 |
| PREST_VIA_017 | ADRIA, Quimper (29) | organisme_technique | conseil_etude, formation | VIA_006, VIA_001 | nationale | 30696427100036 |

### Pourquoi chacune, en une phrase

- **Hypred (Kersia)** : fabricant de produits d'hygiène qui propose, pour l'abattage et la découpe, audit, formation et « optimisation de l'eau » ; est intervenu sur le nettoyage à la journée IFIP consacrée à l'eau en abattoir.
- **REGELAV** : fabricant nantais de nettoyeurs haute pression et de machines spéciales (laveurs de crochets d'abattage, laveuses de caisses) avec modules de recyclage de l'eau.
- **Facomia** : constructeur français de chaînes d'abattage, fabrique des stérilisateurs à couteaux à aspersion et historiquement des ensembles de saignée à récupération du sang.
- **Termet** : vend et installe un stérilisateur à couteaux par aspersion déclenché par capteur (« économies d'eau et d'énergie importantes »), des systèmes de récupération du sang et des circuits de déchets à sec ; distributeur du même groupe que Facomia (Bobet).
- **Couédic Madoré** : fabrique à Plémet le transport pneumatique et par aspiration des matières stercoraires, têtes, pattes et cuirs, et les tables de saignée à récupération du sang.
- **CM2A** : conçoit et fabrique à Rostrenen le transport sous vide et le stockage des coproduits d'abattage de volaille.
- **Axima Réfrigération** : installations frigorifiques d'abattoirs (abattoir de volailles Siebert), met en avant la condensation adiabatique pour réduire l'eau.
- **Dalkia Froid Solutions** : froid et eau glacée pour la charcuterie (Charcuterie du Moulin), compare tours et dry coolers selon leur consommation d'eau.
- **JACIR** : premier fabricant français de tours et de refroidisseurs adiabatiques, fabrication en France ; références agroalimentaires mais pas viande (retenu faute de fabricant français référencé en viande).
- **Ecofilae** : bureau d'études spécialisé en réutilisation des eaux, étude de faisabilité pour l'abattoir-conserverie Maison Lafitte (40).
- **Atlantique Industrie** : a réalisé la station complète de l'abattoir Bokail (dégrillage, flottation, SBR) et y a engagé la réutilisation, et le prétraitement d'une salaison.
- **Step Concept** : stations SBR pour des abattoirs de volailles et de porcs en Aveyron et dans le Tarn.
- **Energiency** : comptage connecté en temps réel présenté à la journée IFIP eau et énergie en abattage-découpe ; offre surtout énergie.
- **Ovalt** : automatismes et supervision pour abattoirs et salaisons, gestion des utilités et des effluents, réutilisation des eaux de lavage.
- **Essor Ingénierie** : auteur du dossier ICPE de l'abattoir public du Faou (29), bilan hydrique compris.
- **ADIV** : audits MTD payants en abattoir (eau, effluents, coproduits, énergie) et co-validation des méthodes alternatives au 82 °C.
- **ADRIA** : prestation payante de montage des dossiers de réutilisation (décret 2024-33) et d'intégration au plan de maîtrise sanitaire ; formation au nettoyage-désinfection en IAA.

### Couverture par mesure

| Mesure | Privés | Institutionnel | Rôles couverts |
|---|---|---|---|
| ACT_VIA_001 Nettoyage économe | Hypred, REGELAV | ADRIA | formation, conseil, matériel |
| ACT_VIA_002 Ratio eau par kilo | Energiency, Ovalt | | conseil, matériel, travaux |
| ACT_VIA_003 Stérilisateurs à couteaux | Facomia, Termet | ADIV | matériel, conseil |
| ACT_VIA_004 Circuits de froid fermés | Axima, Dalkia, JACIR | | conseil, travaux, matériel |
| ACT_VIA_005 Transport à sec | Couédic Madoré, CM2A, Termet | | matériel, travaux |
| ACT_VIA_006 Réutilisation des rinçages | REGELAV, Ecofilae, Atlantique Industrie | ADRIA | conseil, travaux, matériel |
| ACT_VIA_007 Sang et saumures à part | Couédic Madoré, Facomia, Termet | | matériel |
| ACT_VIA_008 Prétraitement des effluents | Atlantique Industrie, Step Concept | ADIV | conseil, travaux, matériel |
| ACT_AGR_001 Compteur par usage | Energiency, Ovalt | | conseil, matériel, travaux |
| ACT_AGR_002 Audit eau | Essor Ingénierie | ADIV | conseil |
| ACT_AGR_009 Plan de gestion | Essor, Ecofilae, Atlantique Industrie | ADIV | conseil |
| ACT_AGR_010 Démarche collective | aucun | | voir aides collectives des agences |

Chaque mesure sectorielle a au moins deux entreprises privées.

### Faiblesses connues

1. **Stérilisateurs à couteaux** : les deux privés appartiennent au même groupe (Bobet). À
   diversifier si un second fabricant apparaît.
2. **Sang et saumures** : couverture limitée au sang en abattoir. Aucun prestataire trouvé
   pour les saumures usées et les jus de cuisson de la charcuterie ni pour le poisson.
3. **Comptage** : aucun fabricant de compteurs avec une référence viande publique ; les deux
   candidats sont des intégrateurs de supervision, surtout orientés énergie.
4. **Produits de la mer** : aucun prestataire propre au mareyage ou à la transformation du
   poisson (convoyage des déchets, saumures).
5. **Démarche collective** : pas de prestataire, comme en laiterie ; les volets « opérations
   collectives » des aides d'agence la couvrent.

### Écartés

Plateformes et revendeurs (Burdis, Bobet Matériel, Hellopro, Techni-Contact, e-commerce
avicole) ; Argonn Équipements (NAF commerce, aucune preuve viande) ; AMOS Industrie (usine
annoncée dans le Lot-et-Garonne introuvable dans SIRENE, en réserve) ; A2P Industrie (NAF
commerce, fabrication non démontrée) ; Hydranet (entité fermée, probablement absorbée par
Atlantique Industrie) ; Établissements Joseph (rayon de 150 km autour de Bourg-en-Bresse) ;
Marel, Frontmatec, Huber, Alfa Laval, MITA (étrangers) ; Akiolis (équarrisseur, aucun type du
vocabulaire ne convient) ; JC France, Serinol, EMO (fabrication en France ou référence
française non démontrée, en réserve pour le prétraitement).

## 2. Aides

### 2.1 Aides existantes à ouvrir au secteur (demande d'évolution)

Les six aides « économies d'eau » des agences de l'eau, écrites pour la laiterie, ont des
textes qui visent toutes les activités économiques non agricoles : abattoirs et
transformation de la viande et du poisson y sont éligibles sans changement de contenu.

| Id existant | Agence | Action demandée |
|---|---|---|
| AIDE_LAI_001 | AEAP | `secteurs` : ajouter `industrie_viande` ; lier VIA_002, VIA_004, VIA_006 |
| AIDE_LAI_005 | AERM | idem |
| AIDE_LAI_006 | AESN | idem |
| AIDE_LAI_007 | AELB | idem |
| AIDE_LAI_008 | AEAG | idem |
| AIDE_LAI_009 | AERMC | idem |

Pour le poisson (10.20Z), la réglementation européenne limite les aides aux PME et à 50 %
hors de minimis : à ajouter en info de chaque fiche. Ces fiches vivent dans
`aides_industrie_laitiere.json` ; deux voies possibles, à trancher au point d'arrêt :
(a) déposer une copie modifiée de ce fichier dans le staging `industrie_viande`, qui le
remplacera à la promotion ; (b) laisser la modification à un humain hors session.

### 2.2 Nouvelles fiches

| Id | Dispositif | Porteur | Échelle | Mesures | Statut 2026 |
|---|---|---|---|---|---|
| AIDE_VIA_001 | Lutte contre les pollutions des activités hors agriculture (délibération 25-A-036, section 2) | Agence de l'eau Artois-Picardie | agence AEAP | VIA_007, VIA_008, VIA_005, AGR_010 | ouvert depuis le 1er novembre 2025 |
| AIDE_VIA_002 | Activités industrielles et artisanales, volet pollution (délibération 2025/21) | Agence de l'eau Rhin-Meuse | agence AERM | VIA_007, VIA_008, VIA_002, AGR_001 | ouvert |
| AIDE_VIA_003 | Réduction des pollutions des entreprises (programme 2025-2030) | Agence de l'eau Seine-Normandie | agence AESN | VIA_007, VIA_008 | ouvert, dépôt avant le 30 septembre pour l'année suivante |
| AIDE_VIA_004 | IND_1, maîtriser et réduire les pollutions des activités économiques | Agence de l'eau Loire-Bretagne | agence AELB | VIA_007, VIA_008, VIA_005 | ouvert |
| AIDE_VIA_005 | Activités industrielles et artisanat : réduction des pollutions | Agence de l'eau Adour-Garonne | agence AEAG | VIA_007, VIA_008, VIA_005 | ouvert |
| AIDE_VIA_006 | IND1, réduction des pollutions de nature industrielle | Agence de l'eau Rhône Méditerranée Corse | agence AERMC | VIA_007, VIA_008 | ouvert |
| AIDE_VIA_007 | Formations financées par OCAPIAT (OPCO de l'agroalimentaire) | OCAPIAT | nationale | VIA_001, AGR_009 | ouvert ; 100 % sous 50 salariés |
| AIDE_VIA_008 | FEAMPA, investissements dans la transformation des produits de la pêche | Région Nouvelle-Aquitaine | départements 16, 17, 19, 23, 24, 33, 40, 47, 64, 79, 86, 87 | VIA_004, VIA_005, VIA_006 | ouvert jusqu'au 30 juin 2027 ; poisson seulement, moins de 10 ETP |
| AIDE_VIA_009 | Innovations et pratiques sobres en eau en entreprise agroalimentaire | Région Pays de la Loire | départements 44, 49, 53, 72, 85 | VIA_006, VIA_002, AGR_009 | ouvert jusqu'au 31 décembre 2027 |
| AIDE_VIA_010 | PASS Compétitivité IAA 2026 | Région Bretagne | départements 22, 29, 35, 56 | VIA_003, VIA_004, VIA_005, VIA_006 | ouvert ; viande éligible, produits de la mer exclus |

Aides transversales déjà publiées et visibles : Diag Eco-Flux (AIDE_LAI_003, audit) et Prêt
Vert Bpifrance (AIDE_LAI_004, sans lien vers une mesure du secteur).

### Couverture des mesures par les aides, après validation

| Mesure | Aides |
|---|---|
| VIA_001 Nettoyage économe | OCAPIAT |
| VIA_002 Ratio eau par kilo | AERM pollution (moyens de mesure), PdL sobriété, six aides eau (après ouverture) |
| VIA_003 Stérilisateurs | PASS IAA Bretagne, six aides eau (après ouverture) |
| VIA_004 Froid fermé | six aides eau, PASS IAA, FEAMPA |
| VIA_005 Transport à sec | AEAP, AELB, AEAG pollution, PASS IAA, FEAMPA |
| VIA_006 Réutilisation | six aides eau, PdL sobriété, PASS IAA, FEAMPA |
| VIA_007 Sang et saumures | six aides pollution |
| VIA_008 Prétraitement | six aides pollution |
| AGR_001, AGR_002, AGR_009, AGR_010 | AERM pollution, Diag Eco-Flux, OCAPIAT et PdL, AEAP opérations collectives |

### Écartées

Plan de modernisation des abattoirs FranceAgriMer (France Relance, clos) ; France 2030
Résilience et capacités agroalimentaires (dernière relève le 11 mars 2026) ; ADEME Innov'Eau
(clos en 2025) ; ARIAA-FEADER Pays de la Loire (investissement de modernisation sans critère
eau, en réserve) ; ECOD'O PRO de la CCI Bretagne (accompagnement gratuit, plutôt prestataire,
page non lue, en réserve) ; FEAMPA des autres régions côtières (fiches non lisibles, une seule
région retenue pour commencer).

## 3. Décompte

- Prestataires : 17 fiches, 15 privées (88 %), 2 institutionnelles (12 %).
- Aides : 10 nouvelles fiches, plus 6 fiches d'agence à ouvrir au secteur.
- Échelle : prestataires nationaux sauf deux régionaux (Step Concept en Occitanie,
  Ovalt dans le Grand Ouest) ; aides régionales en Bretagne,
  Pays de la Loire et Nouvelle-Aquitaine ; aides d'agence par agence.

## 4. Décisions du point d'arrêt (2026-09-24)

- Cibles fragiles retirées : Ateliers d'Occitanie, IFIP. Ids renumérotés (aucun n'était publié).
- Aides d'agence « économies d'eau » : copie modifiée de `aides_industrie_laitiere.json`
  déposée dans ce staging (voie a), à relire à la revue. Attention : le staging
  `industrie_laitiere` contient encore sa propre copie de ce fichier ; celle qui sera promue
  en dernier l'emportera.
- Étape 6 en deux lots. Lot test : PREST_VIA_005 (Couédic Madoré, fabricant), PREST_VIA_007
  (Axima, installateur), PREST_VIA_010 (Ecofilae, bureau d'études), PREST_VIA_016 (ADIV,
  organisme technique), AIDE_VIA_004 (AELB IND_1, aide d'agence), AIDE_VIA_010 (PASS IAA
  Bretagne, aide régionale).
