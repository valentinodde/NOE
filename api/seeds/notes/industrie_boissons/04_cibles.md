# Cibles de fiches : brasserie et boissons sans alcool

Étape 5 du skill `nouveau-secteur`. Statut : brouillon. Liste validée le 2026-10-15 : 17 prestataires (001 à 017) et 5 aides, sans les réserves KHS France et Sidel (018, 019 écartées) ; ACT_BOI_004 reste sans prestataire.

Le rapport de couverture (`rapport_couverture.md`) part de presque rien : neuf mesures sur
treize sans prestataire ni aide. Seules les fiches transversales sont visibles (Hydros et
Willie sur le comptage, l'audit et le plan de gestion ; Diag Eco-Flux et Ressourc'Eau sur
l'audit ; EcoRecup, Fontaine Ingénierie et Prêt Vert sur l'eau de pluie).

Candidats trouvés par trois recherches parallèles (nettoyage, NEP et pasteurisation ;
refroidissement, eau du moût et coproduits ; impluvium, démarche collective, audit et aides).
Chaque SIRET a été lu avec `outils_fiches.py rechercher-entreprise` (état A) et chaque URL de
départ et de preuve avec `verifier-url`. Les rédacteurs revérifient tout.

**Département de test : 59 (Nord).** Premier département du secteur (164 établissements, dont
69 employeurs), agence de l'eau Artois-Picardie (AEAP), région Hauts-de-France. Site Heineken
de Mons-en-Barœul cité par le profil.

**Limite de la recherche.** Le quota de recherches web de la session (200 appels, partagés
entre agents) a été épuisé par les trois recherches. Les dernières vérifications se sont
faites par lecture directe des pages. Les rédacteurs de l'étape 6 n'auront peut-être que la
lecture de pages (WebFetch) : les URL de départ et de preuve ci-dessous sont donc à donner
telles quelles.

## 0. Constat de marché

- **Pasteurisateur tunnel (ACT_BOI_004) : aucune cible recevable.** Aucun fabricant français ;
  le marché est allemand (Krones, KHS), italien (Sidel Parme, Co.Mac.) ou tchèque. Aucun bureau
  d'études français n'affiche un rétrofit. Licorne a obtenu ses gains sans nommer le
  prestataire. Seule issue : une filiale française d'un constructeur étranger en type
  installateur (KHS France, SIRET 73207180800081, actif, page Innopas SX sans mention d'eau ;
  Sidel Blowing & Services, SIRET 42462375900018, tunnel annoncé à 10 % d'eau en moins, site
  injoignable). Proposé en réserve, section 1 bis.
- **Aucun prestataire qualifié n'est implanté dans le Nord**, sauf Eloy Water France
  (Tourcoing, filiale belge). Les autres sont nationaux.
- **Fabrication française rarement prouvée** : seule ETA (cuves et station NEP, Cher) a une
  activité de fabrication établie par son NAF. Clauger, EWK France, BrewFactory, Eloy, ATB
  sont typés installateurs.
- **Impluvium (ACT_BOI_008)** : le marché est internalisé par les minéraliers (Agrivair chez
  Nestlé Waters, APIEME et CEPIV chez Danone). Une seule référence minéralier vérifiée (Antea,
  dossier d'autorisation d'une eau minérale) ; Géonord et Solagro portent le volet animation
  agricole et paiements pour services environnementaux (PSE), par analogie avec les captages
  publics.
- **Démarche collective dans le Nord (ACT_AGR_010)** : aucun bureau d'études privé n'accompagne
  les industriels dans les SAGE du Nord ; aucun syndicat brassicole n'a d'action eau
  documentée. Seule Ecopal (Dunkerque) a une preuve.
- **Malteries et sodas** : aucune référence nommée sur les mesures de froid, d'eau du moût et
  de rejets. Les références hors bière sont des eaux minérales (EWK France) et des boissons
  sucrées (Elodys : Orangina, Coca-Cola, Monin).

## 1. Prestataires, nouvelles fiches

| Id | Structure | Type | Échelle | Mesures (rôles) | SIRET |
|---|---|---|---|---|---|
| PREST_BOI_001 | IFBM, Institut français des boissons, de la brasserie et de la malterie, Vandœuvre-lès-Nancy (54) | organisme_technique | nationale | BOI_002 (formation, conseil_etude), BOI_003 (formation), BOI_001 (formation) | 78332837000029 |
| PREST_BOI_002 | Elodys International, Soulaines-sur-Aubance (49) | bureau_etudes | nationale | BOI_003 (conseil_etude, formation), BOI_001 (conseil_etude) | 50467451600035 |
| PREST_BOI_003 | BrewFactory et Brew Society (TBS Distribution), Mont-Saint-Aignan (76) | installateur | nationale | BOI_003 (travaux, conseil_etude), BOI_006 (materiel, travaux), BOI_002 (formation, conseil_etude), BOI_001 (conseil_etude) | 83924479500010 |
| PREST_BOI_004 | Société ETA, Rians (18) | equipementier | nationale | BOI_003 (materiel) | 60372026900019 |
| PREST_BOI_005 | Christeyns France, Vertou (44) | installateur (groupe belge) | nationale | BOI_002 (formation, materiel), BOI_003 (conseil_etude) | 32130268900013 |
| PREST_BOI_006 | Newasys (Strane Innovation), Massy (91) | bureau_etudes | nationale | AGR_002 (conseil_etude), BOI_001 (conseil_etude), BOI_003 (conseil_etude) | 79222817300045 |
| PREST_BOI_007 | INGETECH Solutions, Arcachon (33) | bureau_etudes | nationale | BOI_007 (conseil_etude), AGR_002 (conseil_etude) | 80320494000057 |
| PREST_BOI_008 | Clauger, Brignais (69) | installateur | nationale | BOI_005 (conseil_etude, travaux), BOI_006 (conseil_etude, travaux) | 97150619100024 |
| PREST_BOI_009 | EWK France, Neyron (01) | installateur | nationale | BOI_005 (materiel, travaux, conseil_etude) | 44511981100021 |
| PREST_BOI_010 | Eloy Water France, Tourcoing (59) | installateur (groupe belge) | nationale | BOI_007 (materiel, travaux) | 51540925800032 |
| PREST_BOI_011 | ATB France, Ballots (53) | installateur (groupe allemand) | nationale | BOI_007 (materiel, travaux) | 50284179400030 |
| PREST_BOI_012 | Géonord, Anzin-Saint-Aubin (62) | bureau_etudes | 02, 59, 60, 62, 80 | BOI_008 (conseil_etude) | 50379114700021 |
| PREST_BOI_013 | Solagro, Toulouse (31) | bureau_etudes (association) | nationale | BOI_008 (conseil_etude) | 32451090800050 |
| PREST_BOI_014 | Antea Group (Antea France), Olivet (45) | bureau_etudes | nationale | BOI_008 (conseil_etude) | 39320673500598 |
| PREST_BOI_015 | CCI de région Hauts-de-France, Lille (59) | chambre_consulaire | 02, 59, 60, 62, 80 | AGR_002 (conseil_etude) | 13002271800014 |
| PREST_BOI_016 | Ecopal, Dunkerque (59) | association | 59, 62 | AGR_002 (conseil_etude), AGR_010 (conseil_etude) | 43878369800048 |
| PREST_BOI_017 | Chambre d'agriculture du Nord-Pas de Calais, Lille (59) | chambre_consulaire | 59, 62 | BOI_008 (conseil_etude) | 13001354300033 |

### Pourquoi chacune (URL de départ, URL de preuve)

- **001 IFBM.** Vend lui-même la formation « Maîtrise de la qualité en microbrasserie » (3 jours,
  1 170 € TTC) dont le programme comprend « conception d'un équipement CIP et optimisation des
  consommations d'eau », et un séminaire sur la consommation d'eau ; audits d'hygiène et plans
  de nettoyage. https://ifbm.fr/fr ; https://ifbm.fr/fr/services/formation-brasserie/qualite-microbrasserie ;
  https://ifbm.fr/fr/services/consulting
- **002 Elodys International.** Spécialiste de l'audit de NEP (eau, lessives, énergie), capteur
  OptiClean (35 000 m³ par an économisés dans une siroperie), formation NEP, références Orangina
  Suntory, Coca-Cola, AB InBev, Asahi, Refresco, Monin. Fabrication du capteur en France non
  prouvée : pas de rôle `materiel`. https://www.elodys.eu ; https://www.elodys.eu/references ;
  https://www.elodys.eu/audit
- **003 BrewFactory.** Équipementier brassicole qui pose des stations CIP (références La Chaloupe,
  359BrewSquare), des échangeurs à plaques et des cuves d'eau chaude de 5 à 40 hl qui récupèrent
  l'eau du refroidisseur de moût ; audit de brasserie (nettoyage, consommations d'eau) et
  centre de formation (protocoles d'hygiène). Cuves « à notre cahier des charges » sans lieu de
  fabrication : installateur. https://www.brewfactory.fr/ ; https://www.brewfactory.fr/cip/ ;
  https://www.brewfactory.fr/gamme/echangeurs-a-plaques/ ; https://www.brewfactory.fr/audit-de-brasserie/
- **004 ETA.** Fabricant de réservoirs (NAF 25.29Z, site de Rians) dont la station NEP vise la
  brasserie, avec un compartiment d'eau réutilisée. Clients cités : Danone, Monin, aucune
  brasserie. https://eta.fr/ ; https://eta.fr/the-cup-cleaning-station/?lang=en
- **005 Christeyns France.** Page « Boissons et brasserie » : Christeyns Academy (formation
  hygiène), systèmes de nettoyage centralisés et décentralisés, outil de suivi des NEP. Filiale
  d'un groupe belge, la description le dit.
  https://www.christeyns.com/fr-fr/secteurs-dactivites/industrie-agroalimentaire-vente-au-detail/boissons-et-brasserie/
- **006 Newasys.** Audit eau publié chez Bio Brasseurs (lavage des cuves, refroidissement,
  préparation), jusqu'à 30 % d'eau en moins par recyclage. Rattachement de la marque à Strane
  Innovation à confirmer par les mentions légales. https://newasys.com/ ;
  https://newasys.com/reference-bio-brasseurs
- **007 INGETECH Solutions.** Bureau d'études des rejets aqueux d'installations classées (OPQIBI
  0803) avec une page brasserie : dimensionnement du prétraitement, égalisation, comptage par
  usage, échange avec la collectivité. Cas type sans client nommé.
  https://www.ingetech-solutions.com/traitement-eaux-usees-brasserie/
- **008 Clauger.** Page brasserie : audite, conçoit, installe et maintient l'eau glacée et
  glycolée du refroidissement du moût et de la fermentation, récupération de chaleur et eau
  chaude de brassage. Aucun client nommé. https://www.clauger.com/fr/sector/brasserie/
- **009 EWK France.** Deux tours fermées EWK-I dans une usine d'eaux minérales (2021) pour passer
  le process en circuit fermé ; aéroréfrigérant adiabatique ; audit et rénovation de tours.
  Se dit fabricant sans lieu de production, NAF de commerce : installateur.
  https://www.ewkfrance.com/projects/tours-aerorefrigerantes-fermees-ewk-i/
- **010 Eloy Water France.** Filière brasserie complète : tamis rotatif pour les drêches,
  décanteur pour les levures, tampon aéré (suffisant si raccordé), réacteur biologique ;
  référence Brasserie Lupulus (Belgique, 2025). Seul candidat implanté dans le 59.
  https://www.eloywater.com/fr/blog/traitement-des-eaux-de-brasserie/
- **011 ATB France.** Micro-station biologique pour brasseries non raccordées, référence Brasserie
  La Gaultoise (51). https://www.micro-station-atb.fr/effluents-speciaux/brasserie
- **012 Géonord.** Agronomes régionaux : vulnérabilité des aires d'alimentation de captage, plans
  d'actions agricoles, déploiement des PSE de l'AEAP sur les captages prioritaires (2026-2027).
  Références de collectivités, aucune chez un minéralier. https://www.geonord.fr/agronomie ;
  https://solagro.org/fiche-pdf-reference-346
- **013 Solagro.** Conçoit des PSE sur aires d'alimentation de captage (Saône-et-Loire) et les
  déploie pour l'AEAP. Association qui vend des études.
  https://solagro.org/travaux-et-productions/references/etude-de-prefiguration-de-paiements-pour-services-environnementaux-pse-sur-les-aires-dalimentation-de-captage-en-plan-deau-de-louest-saone-et-loire
- **014 Antea Group.** Seule référence minéralier vérifiée : demande d'autorisation d'exploiter
  l'eau minérale naturelle de Cilaos (2018). Service « eaux minérales, eaux embouteillées » et
  périmètres de protection. Grand groupe, équilibré par Géonord.
  https://www.anteagroup.fr/services/exploitation-valorisation-eaux-souterraines-surface
- **015 CCI de région Hauts-de-France.** Réalise elle-même un diagnostic de la gestion de l'eau
  sur site, par un conseiller spécialisé. Aucune mention de la brasserie. Institutionnel local
  unique sur l'audit. https://hautsdefrance.cci.fr/solutions/accompagnement-gestion-eau/
- **016 Ecopal.** Diagnostic eau gratuit dans la campagne de l'AEAP et ateliers de synergies
  entre entreprises du Dunkerquois : seule preuve de démarche collective dans le Nord. Réservé
  aux adhérents. https://www.ecopal.org/fr/services/diagnostics-dechets-et-eau/
- **017 Chambre d'agriculture du Nord-Pas de Calais.** Membre du groupement PSE de l'AEAP
  (accompagnement individuel des agriculteurs). **Réserve : aucune page propre à la chambre
  trouvée** ; le rédacteur la retient seulement s'il en trouve une, sinon la fiche est abandonnée.

### 1 bis. Réserves pour ACT_BOI_004 (à valider ou à écarter)

| Id | Structure | Type | Mesure | SIRET | Réserve |
|---|---|---|---|---|---|
| PREST_BOI_018 | KHS France, Noisy-le-Grand (93) | installateur (groupe allemand) | BOI_004 (materiel, travaux) | 73207180800081 | Page Innopas SX (régulation, rétrofit), aucune mention d'eau trouvée. |
| PREST_BOI_019 | Sidel Blowing & Services, Octeville-sur-Mer (76) | installateur (groupe italien et suédois) | BOI_004 (materiel) | 42462375900018 | Tunnel Swing Evo annoncé à 10 % d'eau en moins, site injoignable au contrôle. |

Si les deux sont écartées, ACT_BOI_004 reste sans prestataire et la revue le signale.

## 2. Fiches publiées à ouvrir au secteur (demande d'évolution, pas de copie en staging)

| Fiche publiée | Secteur actuel | Mesures à ajouter | Preuve |
|---|---|---|---|
| PREST_HUI_001 Alfa Laval France | industrie_huiles | BOI_003 (materiel), BOI_006 (materiel) | Brasserie à 17 % d'eau de NEP en moins (têtes rotatives) ; récupération d'énergie du moût par échangeurs. |
| PREST_HUI_008 GEA Process Engineering (brouillon) | industrie_huiles | BOI_003 (materiel) | Station NEP de la Klosterbrauerei Neuzelle (Allemagne). |
| PREST_FRL_010 BWT France (brouillon) | industrie_fruits_legumes | BOI_005 (materiel) | Brasserie Licorne, osmoseur de chaudière, purges réduites (25 à 10 m³ par jour) ; Volvic en référence. |
| PREST_VIN_009 Fourage-CTI | vins_spiritueux | BOI_006 (materiel) | Page micro-brasserie, bâche à eau chaude inox, « fabrication en bonne partie française ». |
| PREST_LAI_003 Réseau des ENIL | industrie_laitiere | BOI_002 (formation), BOI_007 (conseil_etude) | ENIL Mamirolle, rédacteur de l'étude effluents de Brasseurs de France (guide BEER). |
| AIDE_LAI_001 AEAP économies d'eau | laitier, viande, fruits et légumes | BOI_002, BOI_003, BOI_004, BOI_005, BOI_006 | Activités économiques hors agricoles du bassin du Nord. |
| AIDE_VIA_001 AEAP pollutions | viande, fruits et légumes | BOI_007 | Même bassin. |
| AIDE_HUI_004 DECARB FLASH (ADEME) | industrie_huiles | BOI_005, BOI_006 | Froid et récupération de chaleur. |

Ces extensions se font dans `api/seeds/` par un humain (ajout de `industrie_boissons` à
`secteurs` et des liens `mesures`). Tant qu'elles ne sont pas faites, ces fiches n'apparaissent
pas dans le rapport de couverture du secteur. Les fiches transversales (Hydros, Willie,
Fontaine Ingénierie, Diag Eco-Flux, Prêt Vert) restent à relier aux mesures BOI lors de la
passe transversale (option A).

## 3. Aides, nouvelles fiches

| Id | Dispositif | Porteur | Échelle | Mesures | Taux publiés |
|---|---|---|---|---|---|
| AIDE_BOI_001 | Parcours de transition écologique des brasseries artisanales (appel à manifestation d'intérêt) | CMA Grand Est et Région Grand Est | 08, 10, 51, 52, 54, 55, 57, 67, 68, 88 | AGR_002, BOI_001, BOI_003, BOI_005, BOI_006, BOI_007, AGR_009 | Diagnostic intégralement financé ; investissement jusqu'à 40 % (plafond 40 000 €) sous 100 k€, 30 % au-delà ; 11.05Z, moins de 20 salariés, 150 à 10 000 hl par an |
| AIDE_BOI_002 | Booster transition écologique | CCI Hauts-de-France, Région, FEDER | 02, 59, 60, 62, 80 | AGR_002, BOI_001, AGR_009 | Accompagnement de 1 200 € HT présenté comme pris en charge, montant résiduel affiché ambigu (150 € HT) ; jusqu'au 31/12/2026 ; 20 salariés au plus |
| AIDE_BOI_003 | Booster Transformation Rev3 (BTR3) | Région Hauts-de-France | 02, 59, 60, 62, 80 | AGR_009, BOI_001 | 50 %, plafond 10 000 € ; l'eau n'est pas nommée (« préservation des ressources ») |
| AIDE_BOI_004 | Gestion quantitative de la ressource, valorisation des eaux non conventionnelles (12e programme) | Agence de l'eau Artois-Picardie | AEAP | BOI_007, AGR_009 | Études 50 %, travaux 30 % plus avance remboursable de 35 % ; plan d'économie d'eau obligatoire |
| AIDE_BOI_005 | Appel à manifestation d'intérêt 2026 pour protéger durablement les captages (contrats CARE) | Agence de l'eau Artois-Picardie | AEAP | AGR_010, BOI_008 | Aucun taux publié ; entreprises éligibles dans les territoires CARE ; date limite 2 novembre 2026 |

Réserves :
- **AIDE_BOI_001** : hors département de test, mais le seul dispositif propre aux brasseries.
  Session ouverte du 5 au 30 octobre 2026 : la fiche décrit le dispositif, pas la session.
- **AIDE_BOI_002** : le rédacteur tranche le reste à charge sur la page ou le dit tel quel.
- **AIDE_BOI_003** : l'eau n'est pas citée. Retenue seulement si le rédacteur trouve que le
  conseil financé peut porter sur l'eau ; sinon abandonnée.
- **AIDE_BOI_004** : le fichier porte le numéro 25-A-006, l'agent citait 26-A-006 : à confirmer.
  URL https://www.eau-artois-picardie.fr/sites/default/files/009_25-a-006_gestion_ressource_en_eau_web.pdf
- **AIDE_BOI_005** : appel daté ; ACT_BOI_008 seulement si l'impluvium recoupe un CARE.
- Écartée de justesse : aide régionale aux TPE (DACS2, 20 %, plafond 26 000 €), générique, l'eau
  n'y est pas citée.

## 4. Ce qui reste non couvert après ces fiches

- **ACT_BOI_004 Pasteurisateur en boucle** : aucun prestataire hors réserves 018 et 019 ; aide
  seulement par AIDE_LAI_001 si elle est ouverte.
- **ACT_AGR_010 Démarche collective** : un seul prestataire (Ecopal, institutionnel) dans le Nord.
- **ACT_BOI_008 Impluvium** : prestataires par analogie avec les captages publics ; aide
  conditionnelle (AIDE_BOI_005).
- **ACT_BOI_002 et ACT_BOI_006** : aucune aide propre dans le Nord en dehors des aides AEAP à
  ouvrir (section 2).
- **Pistes non explorées faute de quota** : constructeur de la station de la Brasserie des
  3 Monts (59, dossier ICPE de 2020), exposants de Bière Expo et du Salon Brassicole,
  frigoristes du Nord avec référence brasserie, appel FranceAgriMer brassicole.

## 5. Décompte

| | Nombre | Part |
|---|---|---|
| Prestataires, nouvelles fiches (hors réserves 018, 019) | 17 | |
| dont entreprises et bureaux d'études privés (002 à 014) | 13 | 76 % |
| dont institutionnels et associatifs (IFBM, CCI, Ecopal, chambre d'agriculture) | 4 | 24 % |
| Aides, nouvelles fiches | 5 | |
| Fiches publiées à ouvrir (demande d'évolution) | 5 prestataires, 3 aides | |

Les institutionnels restent sous le tiers des prestataires. Par mesure sectorielle :

| Mesure | Privés | Institutionnel | Aide |
|---|---|---|---|
| BOI_001 Ratio | 002, 003, 006 | 001 | 001, 002, 003 |
| BOI_002 Nettoyage manuel | 003, 005 (+ ENIL) | 001 | LAI_001 (à ouvrir) |
| BOI_003 NEP | 002, 003, 004, 005, 006 (+ Alfa Laval, GEA) | 001 | 001, LAI_001 |
| BOI_004 Pasteurisateur | aucun (réserves 018, 019) | | LAI_001 |
| BOI_005 Refroidissement | 008, 009 (+ BWT) | | 001, LAI_001, HUI_004 |
| BOI_006 Eau du moût | 003, 008 (+ Fourage-CTI, Alfa Laval) | | 001, LAI_001, HUI_004 |
| BOI_007 Coproduits et rejets | 007, 010, 011 | | 001, 004, VIA_001 |
| BOI_008 Impluvium | 012, 013, 014 | 017 | 005 (conditionnel) |
| AGR_002 Audit (transversale) | 006, 007 (+ Hydros) | 015, 016 | 001, 002 (+ Diag Eco-Flux) |
| AGR_010 Démarche collective (transversale) | aucun | 016 | 005 |

## 6. Écartés (principaux)

Agrivair, APIEME, CEPIV (structures internes des minéraliers) ; Biosphères (site signalé comme
dangereux au contrôle) ; Epiterre, Agrosolutions, hydrogéologues sans référence d'embouteilleur ;
Il était une brasserie (eau traitée seulement par l'énergie et les effluents) ; Brewing Tekniks
(59, rien sur l'eau) ; Pantarein, Anatis (belges sans entité française) ; Agriopale (exploitant) ;
Enerpro Biogaz (activité arrêtée) ; Valbio, Aqua Corp., DMB Brasserie, ITB Colmar (sites
injoignables ou SIRET introuvable) ; revendeurs en ligne (Matériel du brasseur, Microbrasseur.com) ;
logiciels brassicoles sans suivi de l'eau ; Argonn, LAMA, Makinnox, Vit Vinif (pas de référence
brasserie ou fabrication non établie) ; Krones (entité française introuvable) ; KROHNE (filiale
allemande, site en erreur) ; CMA Hauts-de-France (diagnostic sans volet eau) ; Brasseurs de
France et syndicat régional (aucune prestation eau documentée).
