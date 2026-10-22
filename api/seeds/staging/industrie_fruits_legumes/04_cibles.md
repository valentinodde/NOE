# Cibles de fiches : transformation de fruits et légumes

Étape 5 du skill `nouveau-secteur`. Statut : brouillon, en attente de validation.
Date : 2026-09-25.

Le rapport de couverture (`rapport_couverture.md`) part presque de zéro : douze mesures sur
treize sans prestataire, onze sans aide. Seules les fiches transversales sont visibles
(Diag Eco-Flux et Ressourc'Eau sur l'audit, Prêt Vert et EcoRecup sur l'eau de pluie).

Candidats trouvés par trois recherches parallèles (lavage, épluchage et formation ; froid et
condensats ; recyclage, effluents, mesure et aides). Chaque SIRET nouveau a été contrôlé avec
`outils_fiches.py rechercher-entreprise`, état administratif A. Les URL sont des points de
départ pour les rédacteurs, qui revérifient tout.

**Département de test proposé : 56 (Morbihan).** Les deux retours d'expérience du profil
(ARDO Gourin, d'aucy Le Faouët) y sont, et la CCI de Bretagne y réalise elle-même le
diagnostic eau.

## 1. Prestataires

### 1.1 Nouvelles fiches

| Id | Structure | Type | Rôles | Mesures | Échelle | SIRET vérifié |
|---|---|---|---|---|---|---|
| PREST_FRL_001 | FEMIA Industrie, usine à Hallennes-lez-Haubourdin (59) | equipementier | materiel, conseil_etude | FRL_003, FRL_005 | nationale | 33334484400043 (usine), siège 33334484400092 |
| PREST_FRL_002 | Hubert Process, Laval (53) | equipementier | materiel | FRL_003 | nationale | 34088523500036 |
| PREST_FRL_003 | Mulot Agroalimentaire, La Tremblade (17) | equipementier | materiel | FRL_003 | nationale | 33244100500029 (à confirmer, deux entités MULOT) |
| PREST_FRL_004 | Établissements Aubert et Cie, Coulounieix-Chamiers (24) | equipementier | materiel | FRL_005 | nationale | 58198015800017 |
| PREST_FRL_005 | TOMRA Sorting, Salon-de-Provence (13) | installateur (filiale d'un groupe norvégien) | materiel | FRL_005 | nationale | 53770946100041 |
| PREST_FRL_006 | Steriflow, Roanne (42) | equipementier | materiel, conseil_etude | FRL_004 | nationale | 35296070200012 |
| PREST_FRL_007 | Lagarde Autoclaves, Malataverne (26) | equipementier | materiel | FRL_004 | nationale | 32837600900036 |
| PREST_FRL_008 | UVRER (Réalisation Énergie Rationnelle), Saint-Genis-Laval (69) | equipementier | materiel | FRL_007 | nationale | 32404546700051 |
| PREST_FRL_009 | Aquaprox I-Tech, Saint-Ouen-l'Aumône (95) | installateur | conseil_etude, travaux | FRL_007, FRL_006 | nationale | 34792633900040 |
| PREST_FRL_010 | BWT France, Saint-Denis (93) | installateur (filiale d'un groupe autrichien) | materiel, travaux | FRL_006 | nationale | 56211061900342 |
| PREST_FRL_011 | EMO (Équipements et Machines de l'Ouest), Noyal-sur-Vilaine (35) | equipementier | materiel, conseil_etude, travaux | FRL_008 | nationale | 39180565200032 |
| PREST_FRL_012 | Veolia Water Technologies (VWTS), Saint-Maurice (94) | installateur | conseil_etude, travaux | FRL_008 | nationale | 43350398400075 (entité à confirmer) |
| PREST_FRL_013 | Aquassay, Limoges (87) | bureau_etudes | conseil_etude, materiel | FRL_002, AGR_001, AGR_002 | nationale | 81099872400019 |
| PREST_FRL_014 | CTCPA, centre technique de la conservation des produits agricoles | organisme_technique | conseil_etude, formation | FRL_001, FRL_003, FRL_004, FRL_005, FRL_006, FRL_007, AGR_002 | nationale | 77569174400038 |

### 1.2 Fiches publiées à ouvrir au secteur (demande d'évolution)

| Id existant | Structure | Rôles | Mesures à lier | Preuve sectorielle |
|---|---|---|---|---|
| PREST_HOT_011 | Ocène Industrie, Louvigné-du-Désert (35) | travaux, materiel | FRL_006, FRL_003, FRL_007 | cas client : eau de lavage recyclée pour le prélavage chez un transformateur de fruits et légumes du Grand Ouest |
| PREST_VIA_014 | Groupe Ovalt, Betton (35) | conseil_etude, travaux | FRL_002, AGR_001 | page sous-marché « Fruits et légumes », gestion de l'eau et supervision |
| PREST_VIA_011 | Atlantique Industrie, Ancenis (44) | conseil_etude, travaux | FRL_008, FRL_006 | conserveries citées parmi ses spécialités, sans référence nommée (faible) |
| PREST_VIA_001 | Hypred (Kersia), Dinard (35) | formation | FRL_001 | audit et formation au nettoyage économe, sans référence fruits et légumes (fragile, site en 403) |
| PREST_VIA_017 | ADRIA, Quimper (29) | conseil_etude | FRL_007, FRL_006 | montage des dossiers de réutilisation (décret 2024-33) ; aucune référence fruits et légumes, service indépendant du produit |
| PREST_HOT_019 | CCI de région Bretagne (ECOD'O PRO) | conseil_etude | AGR_002, AGR_009 | pré-diagnostic de 4 jours réalisé par ses conseillers ; d'aucy Le Faouët citée en bonne pratique ; 41 % d'IAA parmi les inscrits |

### Pourquoi chacune, en une phrase

- **FEMIA** : fabrique en France des lignes de conserve et de surgelé, dont le tambour nettoyeur et le séparateur à air (nettoyage à sec), des laveurs à eau recyclée et filtrée, et des blancheurs à filtration de l'eau.
- **Hubert Process** : concepteur de laveurs de légumes (1re et 4e gamme, pommes de terre, carottes) avec contrôle du débit et filtration pour réutiliser l'eau.
- **Mulot** : laveuses pour légumes racines fabriquées en Charente-Maritime ; références Gelifruit, Label'Frite, Fresh Frites. Correction de l'étape 6 : aucune brosseuse à sec au catalogue (la seule brosseuse lustre des châtaignes après lavage), aucune régulation de débit décrite ; la fiche ne porte aucun lien de mesure.
- **Aubert** : cuiseurs-blancheurs en continu (cuisson dans l'eau chauffée par injection de vapeur) et décortiqueuses de châtaignes par brûlage (crème de marrons, 10.39B). Correction de l'étape 6 : aucune source ne dit que le pelage se fait sans eau, la fiche ne porte aucun lien de mesure.
- **TOMRA Sorting** : éplucheurs vapeur à séparation des pelures à sec (« la consommation d'eau à ce stade est éliminée ») ; groupe étranger, retenu faute de fabricant français d'éplucheurs vapeur, à dire dans la fiche.
- **Steriflow** : autoclaves conçus et fabriqués à Roanne, page légumes appertisés, eau de refroidissement renvoyée en tour ou stockée pour préchauffer le cycle suivant, phase de conseil de deux à quatre jours.
- **Lagarde** : autoclaves à refroidissement par les condensats de cuisson (Green Cooling), sans appoint d'eau à chaque cycle ; secteur fruits et légumes cité. Mécanisme différent d'une boucle à tour, à décrire tel quel.
- **UVRER** : skid UV « FTU REUSE » conçu pour les condensats végétaux des fruits et légumes et des jus, fabriqué en France depuis 1982.
- **Aquaprox I-Tech** : unités d'ultrafiltration et d'osmose inverse, installation de réutilisation chez Materne (compotes, Boué) : de 7 à 3,5 litres d'eau par kilo de pommes.
- **BWT France** : osmoseur de la réutilisation des eaux usées traitées de d'aucy Le Faouët, l'exemple cité dans la mesure ; groupe étranger, retenu pour cette seule référence.
- **EMO** : conçoit et fabrique tamis rotatifs et flottateurs, référence dans une conserverie de tomates (tamisage, flottation, épaississement des boues).
- **Veolia Water Technologies** : méthanisation des effluents de La Compagnie des Pruneaux (47).
- **Aquassay** : cartographie des réseaux d'eau et capteurs posés sans travaux, logiciel de suivi ; Bonduelle cité comme client par des sources secondaires, à confirmer.
- **CTCPA** : centre technique de la conserve ; diagnostic Pinch Eau issu de Minimeau, expert Diag Eco-Flux, blancheur pilote à Amiens, formation eau éligible OCAPIAT, cas Provence Chips (épierrage et transport hydraulique alimentés en eau recyclée).

### Écartées

- **JACIR, Axima, Dalkia, Ecofilae** (publiées pour la viande) : aucune référence en fruits,
  légumes, conserverie ou jus.
- **Step Concept, Energiency, Essor Ingénierie** (publiées pour la viande) : idem.
- **Dewaele-Briche** (59) : déterreurs à sec fabriqués en France, mais clientèle de producteurs
  et non d'usines. Repêchable sur une référence industrielle.
- **SOREMA / Hitema** : groupes froid de marque tierce, lieu de fabrication non établi.
- **Abiotec, DELMA Engineering** : distributeurs. **Kiremko, Kronen, SiccaDania, Waterleau** :
  étrangers sans filiale française vérifiée.
- **Bailly Constructeur, MAF Roda, FEMAG** : clientèle maraîchère ou conditionnement, ou rien
  sur l'eau.

### Couverture des mesures sectorielles

| Mesure | Privés | Autres | Écart à la règle |
|---|---|---|---|
| FRL_001 Gestes économes | Hypred (fragile) | CTCPA | **une seule entreprise privée** |
| FRL_002 Ratio par tonne | Ovalt, Aquassay | | |
| FRL_003 Lavage d'entrée | FEMIA, Hubert Process, Mulot, Ocène | CTCPA | |
| FRL_004 Refroidissement | Steriflow, Lagarde | CTCPA | aucun installateur (rôle travaux) |
| FRL_005 Épluchage et blanchiment | FEMIA, Aubert, TOMRA | CTCPA | |
| FRL_006 Recyclage en cascade | Ocène, BWT, Aquaprox, Atlantique | CTCPA, ADRIA | |
| FRL_007 Eau de végétation | UVRER, Aquaprox, Ocène | CTCPA, ADRIA | aucun fabricant d'évaporateur |
| FRL_008 Effluents | EMO, Veolia WT, Atlantique | | récupération d'amidon : aucun fabricant français |
| AGR_001, AGR_002, AGR_009 | Aquassay, Ovalt | CTCPA, CCI Bretagne | |
| AGR_010 Démarche collective | | | aucun prestataire |

**Décompte : 20 prestataires, 17 privés et 3 institutionnels ou techniques (CTCPA, ADRIA,
CCI Bretagne), soit 15 %**, sous le plafond d'un tiers. Deux filiales de groupes étrangers
(TOMRA, BWT), signalées.

## 2. Aides

### 2.1 Aides publiées à ouvrir au secteur (demande d'évolution)

Aucun de ces textes n'exclut la transformation de fruits et légumes.

| Id existant | Dispositif | Mesures à lier |
|---|---|---|
| AIDE_LAI_001, 005, 006, 007, 008, 009 | Six aides « économies d'eau » des agences (AEAP, AERM, AESN, AELB, AEAG, AERMC) | FRL_002, FRL_003, FRL_004, FRL_005, FRL_006, FRL_007 |
| AIDE_VIA_001 à 006 | Six aides « réduction des pollutions » des agences | FRL_008 |
| AIDE_VIA_007 | OCAPIAT, formations | FRL_001, AGR_009 ; ajouter à l'éligibilité les branches Industries alimentaires diverses, Produits alimentaires élaborés, Boissons, Coopératives fleurs, fruits et légumes (IDCC 7003) |
| AIDE_VIA_009 | AAP « Innovations et pratiques sobres en eau en entreprise agroalimentaire », Pays de la Loire | FRL_006, FRL_002, AGR_009 |
| AIDE_VIA_010 | PASS Compétitivité IAA, Bretagne | FRL_003, FRL_004, FRL_005, FRL_006 ; remplacer l'URL archive.org par https://www.bretagne.bzh/aides/fiches/pass-iaa-2026/ ; édition 2026, dépôt au plus tard le 9 avril 2027 |

Nuance AEAG (AIDE_LAI_008) : le secteur agricole est exclu, ce qui ne touche pas une
conserverie mais pourrait toucher une station portée par une organisation de producteurs.

### 2.2 Nouvelles fiches

| Id | Dispositif | Porteur | Échelle | Mesures | Statut 2026 |
|---|---|---|---|---|---|
| AIDE_FRL_001 | AAP « Structuration de filières », AAP PAM 2026 (Plan Agriculture Climat Méditerranée) | FranceAgriMer | 04, 06, 07, 11, 13, 2A, 2B, 26, 30, 31, 32, 34, 47, 66, 81, 82, 83, 84 | FRL_003, FRL_004, FRL_006, FRL_008, AGR_002 | ouvert, prochaine relève le 19 octobre 2026 ; projet d'au moins 100 000 € ; condition d'inscription dans une démarche AARC à vérifier |
| AIDE_FRL_002 | Guichet maturation des projets de filières 2026 | FranceAgriMer | nationale, projets liés à une « aire agricole de résilience climatique » | AGR_010, AGR_002 | ouvert jusqu'au 31 octobre 2026 ; études et animation, 80 % plafonné à 50 000 € |
| AIDE_FRL_003 | Aide aux investissements productifs dans l'agroalimentaire (FEADER) | Région Nouvelle-Aquitaine | 16, 17, 19, 23, 24, 33, 40, 47, 64, 79, 86, 87 | FRL_003, FRL_004, FRL_005, FRL_006 | ouvert au fil de l'eau, projets de 120 000 € à 3 M€, optimisation des ressources dont l'eau |

Aides transversales déjà visibles : Diag Eco-Flux, Ressourc'Eau (Pays de la Loire), Prêt Vert
(deux fiches), méthanisation ADEME (sans lien de mesure).

### Écartées

- **ARIAA-FEADER Pays de la Loire, Normandie Entreprises Industries** : modernisation sans
  critère eau, comme pour la viande (Normandie : date limite illisible).
- **Clos** : Sud IAA+ 2026 (30 avril 2026), AAP IAA FEADER Grand Est (1er juin 2026), plan de
  structuration FranceAgriMer (2022), AAP IAA Bourgogne-Franche-Comté (2021).
- **Innov'Eau (ADEME)** : statut 2026 non confirmé (page en 403).
- **Non trouvées** : aide régionale IAA ouverte en Hauts-de-France et en Centre-Val de Loire,
  aide nationale propre aux fruits et légumes transformés.

### Couverture des mesures par les aides, après validation et ouverture

| Mesure | Aides |
|---|---|
| FRL_001 | OCAPIAT |
| FRL_002 | six aides eau, PdL sobriété |
| FRL_003, FRL_004, FRL_005 | six aides eau, PASS IAA, Nouvelle-Aquitaine, PAM (003, 004) |
| FRL_006, FRL_007 | six aides eau, PdL (006), PASS IAA (006), Nouvelle-Aquitaine (006), PAM (006) |
| FRL_008 | six aides pollution, PAM |
| AGR_001, AGR_002, AGR_009 | Diag Eco-Flux, Ressourc'Eau, OCAPIAT, PAM (002) |
| AGR_010 | guichet maturation FranceAgriMer |

## 3. Question à trancher au point d'arrêt : ouvrir les fiches publiées

Six prestataires et quinze aides publiés doivent recevoir `industrie_fruits_legumes` dans
`secteurs` et de nouveaux liens `mesures`. Le hook interdit de modifier `api/seeds/` depuis
la session. Deux voies, comme pour la viande :
(a) déposer dans ce staging des copies modifiées de `prestataires_hotellerie.json`,
`prestataires_industrie_viande.json`, `aides_industrie_laitiere.json` et
`aides_industrie_viande.json`, qui remplaceront les publiés à la promotion ;
(b) laisser la modification à une personne, hors session, liste ci-dessus à l'appui.

## 4. Décisions du point d'arrêt de l'étape 5 (2026-09-25)

- Liste des cibles validée telle quelle : 14 prestataires et 3 aides à rédiger.
- Ouverture des fiches publiées : voie (a), copies modifiées dans ce staging.
- Département de test : 56 (Morbihan).

## 5. Ouverture des fiches publiées, faite à l'étape 6 (2026-09-25)

Copies modifiées déposées dans ce staging, à partir des fichiers publiés du jour :
`prestataires_hotellerie.json`, `prestataires_industrie_viande.json`, `aides_industrie_laitiere.json`,
`aides_industrie_viande.json`. Chaque fiche touchée reçoit `industrie_fruits_legumes` dans `secteurs`,
`date_maj` 2026-09-25 et, pour les prestataires, une entrée `sources` qui justifie le nouveau lien.

| Fiche | Ajout |
|---|---|
| PREST_HOT_011 Ocène | ACT_FRL_006 [travaux, materiel] |
| PREST_HOT_019 CCI Bretagne | secteur seul (lien ACT_AGR_002 déjà publié) |
| PREST_VIA_014 Ovalt | ACT_FRL_002 [conseil_etude, travaux], ACT_AGR_001 [travaux] |
| PREST_VIA_011 Atlantique Industrie | ACT_FRL_008, ACT_FRL_006 [conseil_etude, travaux] |
| PREST_VIA_017 ADRIA | ACT_FRL_007, ACT_FRL_006 [conseil_etude] |
| AIDE_LAI_001, 005 à 009 | ACT_FRL_002 à ACT_FRL_007 |
| AIDE_VIA_001 à 006 | ACT_FRL_008 |
| AIDE_VIA_007 OCAPIAT | ACT_FRL_001, ACT_AGR_009 ; éligibilité complétée des branches fruits et légumes, boissons, produits élaborés |
| AIDE_VIA_009 Pays de la Loire | ACT_FRL_006 |
| AIDE_VIA_010 PASS IAA Bretagne | secteur seul, aucun lien (publiée sans lien pour la viande) |

Non fait : **Hypred (PREST_VIA_001)** n'est pas ouvert, sa seule source (kersia-group.com) répond 403 et
ne cite pas les fruits et légumes ; l'URL archive.org du PASS IAA n'est pas remplacée (la nouvelle URL
répond 403 aux robots, non vérifiable). **Ces ajouts n'ont pas été passés au contrôleur** : les liens
reposent sur les pages repérées à l'étape 5, à relire.

**Risque de collision à la promotion** : `api/seeds/staging/industrie_viande/` contient encore sa propre
copie de `aides_industrie_laitiere.json` (du 2026-09-24, identique au publié à la mise en forme près).
Si ce staging viande est promu après celui-ci, il effacera l'ouverture des six aides eau aux fruits et
légumes. À nettoyer avant toute promotion.
- Fiches et verdicts validés le 2026-09-25 au point d'arrêt de l'étape 6.
