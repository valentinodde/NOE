# Cibles de fiches : huiles et corps gras

Étape 5 du skill `nouveau-secteur`. Statut : brouillon. Liste validée le 2026-09-27, GreenFlex compris ; les fiches publiées à ouvrir restent une demande d'évolution, sans copie en staging.

Le rapport de couverture (`rapport_couverture.md`) part presque de zéro : onze mesures sur
douze sans prestataire, dix sans aide. Seules les fiches transversales sont visibles
(Diag Eco-Flux et Ressourc'Eau sur l'audit, Prêt Vert et EcoRecup sur l'eau de pluie).

Candidats trouvés par trois recherches parallèles (moulins ; trituration, raffinage et
fondoirs ; transversal et aides). Chaque SIRET a été contrôlé avec
`outils_fiches.py rechercher-entreprise` (état administratif A) et chaque URL de départ
avec `verifier-url`. Les rédacteurs revérifient tout.

**Département de test proposé : 13 (Bouches-du-Rhône).** Premier département du secteur
avec la Var (20 établissements en 10.41A, 13 en 10.41B), moulins d'olive et sites
industriels (Lesieur et Provence Huiles à Vitrolles), agence de l'eau Rhône Méditerranée
Corse, Région Sud.

## 0. Constat de marché, à lire avant la liste

- **Moulins : pas de fabricant français.** Laveuses et décanteurs viennent de groupes
  étrangers (Alfa Laval, Pieralisi, Flottweg, GEA, Mori-TEM), souvent achetés en direct en
  Italie ; Pieralisi France et Hiller France sont fermés. Aucune grignonnerie ni collecteur
  de grignons en France, et aucun bureau d'études privé ne cite les plans d'épandage de
  moulins : ce travail passe par les chambres d'agriculture (référent dédié dans le Var) et
  par France Olive.
- **Usines : les preuves « huiles » sont rares.** Aucune des neuf fiches publiées que l'on
  pouvait reprendre (Jacir, Ecofilae, Aquaprox, Veolia, EMO, Atlantique Industrie, UVRER,
  ADRIA, Aquassay) n'a de référence dans les huiles ou les corps gras. Les références
  trouvées sont chez des ensembliers et des filiales de groupes étrangers.
- Conséquence : la règle « deux privés par mesure sectorielle » n'est pas tenue pour
  ACT_HUI_001, 004, 005 et 006 (voir section 4).

## 1. Prestataires

### 1.1 Nouvelles fiches

| Id | Structure | Type | Rôles | Mesures | Échelle | SIRET vérifié |
|---|---|---|---|---|---|---|
| PREST_HUI_001 | Alfa Laval France & North West Africa, Saint-Priest (69) | installateur (filiale d'un groupe suédois) | materiel, conseil_etude | HUI_001, HUI_003, HUI_002, HUI_006 | nationale | 78826245900175 |
| PREST_HUI_002 | OleaTech (OleaShop), Chaponnay (69) | installateur | travaux, formation | HUI_003 | nationale | 99949569000011 (lien société et site à confirmer) |
| PREST_HUI_003 | Biotechna (Eaux de Marseille), Ensuès-la-Redonne (13) | installateur | travaux | HUI_006 | 13 | 32653268600051 |
| PREST_HUI_004 | France Olive (AFIDOL), Aix-en-Provence (13) | association | conseil_etude, formation | HUI_006, AGR_010 | nationale | 43402717300013 |
| PREST_HUI_005 | John Cockerill Proserpol, Thionville (57) | installateur (filiale d'un groupe belge) | conseil_etude, travaux | HUI_007, HUI_005 | nationale | 30231665800111 |
| PREST_HUI_006 | SIMOP France, Sainte-Mère-Église (50) | equipementier | materiel | HUI_007 | nationale | 75404070700012 |
| PREST_HUI_007 | Delho, Lège-Cap-Ferret (33) | equipementier | materiel | HUI_007 | nationale | 80763728500022 |
| PREST_HUI_008 | GEA Process Engineering, Montigny-le-Bretonneux (78) | installateur (filiale d'un groupe allemand) | conseil_etude, materiel | HUI_002 | nationale | 42085622100015 |
| PREST_HUI_009 | ITERG, institut des corps gras, Canéjan (33) | organisme_technique | conseil_etude | HUI_005, HUI_002, AGR_002 | nationale | 77566488100122 |
| PREST_HUI_010 | CRITT Agroalimentaire Sud, Avignon (84) | organisme_technique | conseil_etude | AGR_001, AGR_002, HUI_004, HUI_007 | 04, 05, 06, 13, 83, 84 | 37763131200057 |
| PREST_HUI_011 | OID Consultants, Lyon (69) | bureau_etudes | conseil_etude, materiel | AGR_001 | nationale | 53227788600042 |
| PREST_HUI_012 | GreenFlex (groupe TotalEnergies), Paris (75) | bureau_etudes | conseil_etude, travaux | HUI_002 | nationale | 51184084500149 (en réserve, preuve faible) |

### 1.2 Fiches publiées à ouvrir au secteur (demande d'évolution)

À ajouter à leurs `secteurs` et à leurs `mesures`, par la personne qui promeut : cette
session ne modifie pas les seeds publiés.

| Id existant | Structure | Rôles | Mesures à lier | Preuve dans le secteur |
|---|---|---|---|---|
| PREST_FRL_013 (brouillon, staging FRL) | Aquassay | conseil_etude | AGR_001, AGR_002, AGR_009 | générique agroalimentaire, plans directeurs de l'eau industriels |
| PREST_VIA_013 | Energiency by EPSA | conseil_etude | AGR_001 | générique agroalimentaire |
| PREST_VIA_009 | JACIR | materiel | HUI_002 | fabricant français de tours et de circuits fermés, aucune référence huiles (seul fabricant français disponible pour cette mesure) |
| PREST_VIA_010 | Ecofilae | conseil_etude | HUI_005 | spécialiste de la réutilisation, références IAA et chimie du végétal, aucune référence huiles |

### Pourquoi chacune, en une phrase

- **Alfa Laval** : laveuses à olives à eau recyclée après décantation avec douche d'eau propre, décanteur deux phases Sigma pour petits et moyens moulins (« ne produit pas d'eaux noires »), BlueVap qui traite les margines, et systèmes de vide optimisés en boucle fermée pour le raffinage ; cité par France Olive comme fournisseur. Filiale étrangère, retenue faute de fabricant français, à dire dans la fiche.
- **OleaTech** : seule PME française trouvée qui installe, entretient et forme sur les moulins ; aucune page ne cite l'eau ni le deux phases, preuve faible, et le lien entre la société (créée en 2026) et le site OleaShop est à confirmer par le rédacteur.
- **Biotechna** : sa plateforme de Salon-de-Provence a servi à l'étude France Olive de 2007 sur le co-compostage grignons et déchets verts ; cet établissement est fermé, la plateforme d'Ensuès ne cite que boues et déchets verts : accepter les grignons est à confirmer.
- **France Olive** : laboratoire accrédité qui analyse grignons et margines, dossier type de déclaration ICPE du moulin, contact effluents, journée technique TECHNOHUILE ; porteur naturel des démarches collectives de la filière. Institutionnel retenu pour ACT_HUI_006 et ACT_AGR_010.
- **John Cockerill Proserpol** : a conçu en 2015 la station des effluents huileux de trituration et de raffinage de Saipol au Mériot (cassage acide, aéroflottation, biologie, DCO de 50 000 à moins de 100 mg/L) ; recyclage membranaire des eaux usées en IAA.
- **SIMOP** : séparateurs à graisses produits en France pour « les graisses et les huiles d'origine animale et végétale » des IAA ; pas de référence nommée en huilerie.
- **Delho** : séparateurs et bacs à graisses fabriqués en région bordelaise, dont la page cite explicitement les huileries ; taille adaptée aux petits sites.
- **GEA** : système de vide à condensation sèche pour la désodorisation des huiles, « 0,1 % de l'eau d'un système humide » : c'est le remplacement du condenseur barométrique. Filiale étrangère, conçu en Allemagne.
- **ITERG** : institut technique des corps gras, prestations payantes et diagnostics sur site (« optimisez vos consommations d'énergie, d'eau »), projet MINIMEAU sur la minimisation de l'eau en IAA ; aucun module de formation eau trouvé.
- **CRITT Agroalimentaire Sud** : pré-diagnostics eau sur site, plans de comptage, économie d'eau et traitement des effluents, référencé comme expert CEDRE en Région Sud.
- **OID Consultants** : plans de comptage eau et effluents avec télérelève, références agroalimentaires, référencé CEDRE en Région Sud.
- **GreenFlex** : a renouvelé en clé en main le refroidissement de process de Lesieur à Coudekerque-Branche, présenté sous l'angle énergie ; en réserve, à rédiger seulement si le rédacteur trouve un volet eau.

### Écartés

Pieralisi France, Hiller France, JPM Vintec (fermés) ; GEA Westfalia et Flottweg France (actifs, deux phases non prouvé) ; Chayoux (laveuse française en circuit fermé, mais rien sur l'olive) ; Desmet Ballestra (aucun établissement en France) ; Olexa (presses d'huilerie françaises, pas de volet eau) ; Saint Dizier Environnement, Aqualter, Exocell (rien sur les huiles) ; Groupe Ovalt (n'intervient pas dans le 13) ; Odalie (bâtiment seulement) ; CCI Aix-Marseille-Provence (autodiagnostic en ligne, pas de diagnostic réalisé par elle) ; Chambre d'agriculture du Var (référent épandage oléicole, mais hors département de test, et France Olive tient déjà la place institutionnelle sur ACT_HUI_006).

## 2. Aides

### 2.1 Nouvelles fiches

| Id | Dispositif | Porteur | Mesures | Échelle | Réserve |
|---|---|---|---|---|---|
| AIDE_HUI_001 | CEDRE Premiers pas | Région Sud | AGR_002, AGR_009 | 04, 05, 06, 13, 83, 84 | CA de 2 M€ au plus, forfait de 3 000 € ; un moulin rattaché à une exploitation agricole est exclu |
| AIDE_HUI_002 | CEDRE Investissement | Région Sud | HUI_001, HUI_002, HUI_005, AGR_001 | 04, 05, 06, 13, 83, 84 | suppose d'être passé par CEDRE Premiers pas ou Ambition |
| AIDE_HUI_003 | Sud Prêt Climat | Région Sud et Bpifrance | HUI_007, AGR_009 | 04, 05, 06, 13, 83, 84 | page contradictoire sur les investissements matériels : lien aux équipements à confirmer |
| AIDE_HUI_004 | DECARB FLASH 2025-2027 | ADEME | HUI_005 (retour des condensats) | nationale | refroidissement en circuit fermé non listé ; clôture le 15/02/2027 |

### 2.2 Fiches publiées à ouvrir au secteur (demande d'évolution)

| Id existant | Dispositif | Mesures à lier | Réserve |
|---|---|---|---|
| AIDE_LAI_009 | ECO3, AERMC | HUI_001, HUI_002, HUI_003, HUI_005, AGR_002 | économie de plus de 2 000 m3/an en individuel : un moulin artisanal passe rarement le seuil |
| AIDE_VIA_006 | IND1, AERMC | HUI_007, HUI_003, HUI_006 | page non relue (site de l'agence inaccessible) ; coût de plus de 50 000 € |
| AIDE_LAI_001, 005 à 008 | Économies d'eau, cinq autres agences | HUI_001, HUI_002, HUI_003, HUI_005, AGR_002 | grands sites hors bassin RMC |
| AIDE_VIA_001 à 005 | Pollution, cinq autres agences | HUI_007 ; HUI_006 pour Artois-Picardie seulement | |
| AIDE_LAI_003 | Diag Eco-Flux | AGR_002 | 20 à 250 salariés : la plupart des moulins en sont exclus |
| AIDE_LAI_004 | Prêt Vert | HUI_001, HUI_002, HUI_003, HUI_005 | prêt de 50 k€ au moins |
| AIDE_FRL_001 | AAP PAM 2026, FranceAgriMer | AGR_010, AGR_002 | appel étiqueté huile d'olive ; projet collectif de 100 k€ au moins |
| AIDE_VIA_007 | OCAPIAT | AGR_009, HUI_004 | couvre les coopératives, branche des corps gras non trouvée |

À signaler au relecteur : AIDE_AGR_004 (Prêt Vert, ancienne fiche agricole) doublonne AIDE_LAI_004, sans source et avec une éligibilité fausse ; à fusionner ou retirer.

### Écartées

PO oléicole FranceAgriMer (réservé aux associations d'organisations de producteurs), FEDER investissements productifs Région Sud (200 000 € minimum, rien sur l'eau), Sud IAA+ (disparu), ReS'Eau (tourisme, clos), aide régionale à la ressource en eau (structures publiques), FEADER transformation Région Sud (session 2026 close, à reprendre en 2027), AMI opérations groupées sectorielles AERMC (vagues 2025 closes ; à citer en info dans la fiche ECO3, c'est le seul chemin pour un moulin sous 2 000 m3/an).

## 3. Décompte

- Prestataires proposés : 12 nouveaux (dont 1 en réserve) et 4 ouvertures, soit 16.
- Institutionnels : France Olive, ITERG, CRITT Agroalimentaire Sud, soit **3 sur 16 (19 %)**, sous le plafond d'un tiers.
- Privés : 13, dont 3 filiales de groupes étrangers typées installateur (Alfa Laval, GEA, Proserpol).
- Aides : 4 nouvelles, 14 ouvertures.

## 4. Mesures sous la cible du guide (deux privés par mesure sectorielle)

| Mesure | Privés crédibles | Manque |
|---|---|---|
| ACT_HUI_001 lavage des olives | Alfa Laval (preuve forte), OleaTech (faible) | un second privé solide ; aucun fabricant français |
| ACT_HUI_002 refroidissement | Alfa Laval, GEA, Jacir (sans preuve huiles), GreenFlex (réserve) | un installateur français avec référence huiles |
| ACT_HUI_003 décanteur deux phases | Alfa Laval, OleaTech (faible) | un second privé solide |
| ACT_HUI_004 nettoyage à sec | aucun | seul le CRITT (institutionnel) le porte |
| ACT_HUI_005 réutilisation | Proserpol, Ecofilae (sans preuve huiles) | une référence huiles hors Proserpol |
| ACT_HUI_006 margines et grignons | Biotechna (à confirmer) | le marché n'existe pas en privé : chambres et France Olive |
| ACT_HUI_007 effluents gras | Proserpol, SIMOP, Delho, Alfa Laval | aucun |

Proposition : accepter ces manques en l'état et les signaler à la revue, plutôt que
d'ajouter des généralistes sans référence dans la filière, ce qui contredirait le même
guide (8.1, « un généraliste sans référence passe après un spécialiste »).
