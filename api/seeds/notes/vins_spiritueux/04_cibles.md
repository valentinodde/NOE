# Cibles de fiches : vins et spiritueux

Étape 5 du skill `nouveau-secteur`. Statut : brouillon. Liste validée en entier le 2026-09-28 (Hydrosol, Fourage-CTI et OCAPIAT compris, avec leurs réserves).

Le rapport de couverture (`rapport_couverture.md`) part de presque rien : onze mesures sur douze
sans prestataire, dix sans aide. Seules les fiches transversales sont visibles (EcoRecup et Prêt
Vert sur l'eau de pluie, Diag Eco-Flux et Ressourc'Eau sur l'audit).

Candidats trouvés par trois recherches parallèles (nettoyage et transferts ; effluents et
vinasses ; froid, comptage, démarche collective et aides). Chaque SIRET a été lu avec
`outils_fiches.py rechercher-entreprise` (état A) et chaque URL de départ avec `verifier-url`.
Les rédacteurs revérifient tout. Notes brutes des recherches : scratchpad de la session.

**Département de test : 51 (Marne).** Premier département du secteur (451 établissements, dont
217 employeurs, 422 en vin), agence de l'eau Seine-Normandie, région Grand Est.
**Exception assumée pour la distillation** : 11.01Z est concentré en Charente (177
établissements) et Charente-Maritime (87). Les acteurs des vinasses sont charentais et gardent
leur échelle (16, 17), hors département de test.

## 0. Constat de marché

- **Aucun constructeur privé de stations d'effluents vinicoles implanté en Champagne** n'a de
  preuve en ligne ; les spécialistes retenus sont nationaux (Normandie, Gironde, Isère). Syntea,
  le plus gros référencé, est en redressement judiciaire et son site est hors ligne.
- **Raclage des canalisations** : fabricants français identifiés (Servinox, Chalvignac), mais
  la meilleure référence de cave (16 caves testées avec l'IFV, projet Winenvironment) est celle
  d'Inoxpa, filiale d'un groupe espagnol, retenue à défaut comme installateur.
- **Réutilisation en cascade** : aucun installateur ne montre un montage de récupération du
  dernier rinçage en cave. Les candidats sont des fabricants de NEP et de bacs qui le
  permettent, sans référence nommée.
- **Diagnostic eau en cave (ACT_AGR_001, 002, 009)** : aucun bureau d'études privé avec une
  référence de cave et une intervention couvrant la Marne. La chambre d'agriculture de la Marne
  et la CCI Marne ne réalisent pas ce diagnostic. Seul Hydrosol, dans le sud, a une référence.
- **Région Grand Est** : l'appel à projets 2026 pour l'agroalimentaire exclut explicitement
  les secteurs viticoles et vinicoles.

## 1. Prestataires, nouvelles fiches

| Id | Structure | Type | Échelle | Mesures (rôles) | SIRET |
|---|---|---|---|---|---|
| PREST_VIN_001 | Station Oenotechnique de Champagne (Sofralab), Magenta (51) | bureau_etudes | 51, 10 | VIN_001 (formation, conseil_etude) | 57222486300041 |
| PREST_VIN_002 | Alimpex, Bennwihr (68) | bureau_etudes | nationale | VIN_001 (formation, conseil_etude), VIN_003 (conseil_etude, materiel), VIN_005 (conseil_etude) | 33321148000038 |
| PREST_VIN_003 | Servinox (SVX), Trappes (78) | equipementier | nationale | VIN_002 (materiel) | 39343379200040 |
| PREST_VIN_004 | Groupe Chalvignac, Jarnac-Champagne (17) | equipementier | nationale | VIN_002 (materiel, travaux), VIN_003 (materiel), VIN_004 (materiel, travaux, conseil_etude) | 41419230200019 (holding) |
| PREST_VIN_005 | Inoxpa France, Chambly (60) | installateur (filiale d'un groupe espagnol) | nationale | VIN_002 (materiel) | 49110397400078 |
| PREST_VIN_006 | ACI Entreprise, Mardeuil (51) | equipementier | 51, 10, 02 | VIN_003 (materiel, travaux) | 49101109400050 |
| PREST_VIN_007 | Heric Distribution, Oiry (51) | installateur | 51, 10, 02 | VIN_003 (travaux), VIN_006 (travaux) | 47922964300032 |
| PREST_VIN_008 | Bio-Inox, Lamonzie-Saint-Martin (24) | equipementier | nationale | VIN_003 (materiel), VIN_005 (materiel) | 40061311300010 |
| PREST_VIN_009 | Fourage-CTI, La Haie-Fouassière (44) | equipementier | à établir par le rédacteur | VIN_005 (materiel) | 50478086700017 |
| PREST_VIN_010 | Lamouroux SA, Beychac-et-Caillau (33) | equipementier | nationale | VIN_004 (materiel, travaux) | 34755597100030 |
| PREST_VIN_011 | FORGEL SA, Bezannes (51) | installateur | 51, 10, 02 | VIN_004 (travaux, conseil_etude) | 33558002300059 |
| PREST_VIN_012 | A2P Industrie, Saint-Fons (69) | installateur | nationale | VIN_004 (materiel, travaux) | 41948899400049 |
| PREST_VIN_013 | Vision Ingénierie, Bezannes (51) | bureau_etudes | 51 | VIN_004 (conseil_etude) | 85131544000020 |
| PREST_VIN_014 | IFB Environnement, Fresles (76) | bureau_etudes | nationale | VIN_006 (conseil_etude, travaux), VIN_007 (conseil_etude, travaux) | 48274039600015 |
| PREST_VIN_015 | Clairéo, Bordeaux (33) | installateur | nationale | VIN_006 (conseil_etude, travaux) | 84100036700018 |
| PREST_VIN_016 | Labaronne-Citaf, Pont-Évêque (38) | equipementier | nationale | VIN_006 (materiel) | 34464380400042 |
| PREST_VIN_017 | Revico, Saint-Laurent-de-Cognac (16) | cooperative | 16, 17 | VIN_007 (travaux) | 90693002900010 |
| PREST_VIN_018 | Hydrosol Ingénierie, Cheval-Blanc (84) | bureau_etudes | départements de ses agences (sud) | AGR_001, AGR_002, AGR_009 (conseil_etude) | 35127557300050 |
| PREST_VIN_019 | Comité Champagne (CIVC), Épernay (51) | syndicat_professionnel | 51, 10, 02, 52, 77 | VIN_006 (conseil_etude), AGR_010 (conseil_etude) | 78038582900012 |
| PREST_VIN_020 | Chambre d'agriculture de la Charente, Angoulême (16) | chambre_consulaire | 16 | VIN_007 (conseil_etude) | 18160001600024 |

### Pourquoi chacune

- **001 Station Oenotechnique de Champagne.** Laboratoire et conseil oenologique de la Marne qui réalise des audits d'hygiène (méthode HACCP) et forme les équipes de cave. Réserve : le volet économie d'eau n'est pas écrit sur la page, le rédacteur doit le trouver ou restreindre la fiche à la formation hygiène.
- **002 Alimpex.** Page dédiée « hygiène en cave et gestion de l'eau » : audit, masterclass, baisse des consommations, canon à mousse. Aussi distributeur (NAF 46.69B) : typé bureau_etudes si l'audit domine, installateur si le matériel domine.
- **003 Servinox.** Système de raclage XSR, « conception et fabrication française ». La brochure cite les vins et spiritueux ; référence Moët à confirmer.
- **004 Groupe Chalvignac.** Cuverie inox vinicole, gares de raclage réversibles (Process Thermiques, références vin et cognac), alambics et groupes froids Cryoflex conçus et construits en Charente, récupération de chaleur sur le refroidissement des alambics avec Martell (2023). Une fiche groupe, les filiales citées dans la description.
- **005 Inoxpa France.** Raclage testé dans 16 caves (IFV, Winenvironment). Filiale d'un groupe espagnol, retenue à défaut de référence de cave chez les fabricants français ; la description le dit.
- **006 ACI Entreprise.** Fabrique des cuves inox sur mesure pour la Champagne, habille les cuves béton, pose la tuyauterie. Établissement de l'atelier (Œuilly) à vérifier.
- **007 Heric Distribution.** Pose cuverie, têtes de lavage et tuyauterie inox en Champagne ; distribue aussi des cuves d'effluents (fabricant inconnu, la fiche doit dire qu'il distribue). Ne pas confondre avec Heric Distribution Services, fermée.
- **008 Bio-Inox.** Station de nettoyage en place mobile BIO-CIP et cuves vinicoles. Aucune référence en Champagne.
- **009 Fourage-CTI.** Bac multifonction de nettoyage en place qui récupère et réinjecte les mélanges vin et eau. Zone d'intervention et part de fabrication à établir.
- **010 Lamouroux.** Groupes froids et 4 tubes « conçus et fabriqués dans nos ateliers en Gironde », pour la thermorégulation vinicole, avec récupération de chaleur.
- **011 FORGEL.** Frigoriste de la Marne, thermorégulation des maisons de champagne à Reims, Épernay, Châlons.
- **012 A2P Industrie.** Refroidisseurs et aéroréfrigérants, trois installations en Champagne en 2024. Fabrication française non prouvée, d'où le type installateur.
- **013 Vision Ingénierie.** Bureau d'études de la Marne qui dimensionne fluides et froid des cuveries champenoises.
- **014 IFB Environnement.** Seule PME avec des références nommées à la fois en effluents de chai et en vinasses (distillerie d'Argeliers, Lassalle de Batz).
- **015 Clairéo.** Spécialiste de l'effluent de chai (aération, lit planté, gamme pour petites caves), plus de 100 propriétés équipées.
- **016 Labaronne-Citaf.** Citernes souples « 100 % made in France » pour le stockage tampon des effluents vinicoles sur la pointe des vendanges.
- **017 Revico.** Traitement collectif d'environ 55 % des vinasses charentaises. Nature juridique 5202 et non coopérative au sens juridique : le type `cooperative` est le plus proche du vocabulaire, la fiche le précise.
- **018 Hydrosol Ingénierie.** Diagnostic poste par poste des consommations d'une cave coopérative ICPE de plus de 150 000 hl (Terres Valdèze, 2024). Seule référence privée trouvée pour l'audit en cave ; n'intervient pas dans la Marne.
- **019 Comité Champagne.** Anime le contrat « vigne, vin et qualité de l'eau » avec l'agence Seine-Normandie, fait lui-même le conseil individuel sur les effluents et porte les dossiers d'aide (libellés « CIVC » dans les aides signées en 2025).
- **020 Chambre d'agriculture de la Charente.** Réalise elle-même les plans d'épandage des effluents vinicoles et des vinasses, prélèvements compris.

## 2. Fiches publiées à ouvrir au secteur (demande d'évolution, pas de copie en staging)

| Fiche publiée | Secteur actuel | Mesures à ajouter | Raison |
|---|---|---|---|
| PREST_VIA_010 Ecofilae | industrie_viande | VIN_005 (conseil_etude) | Travaux publiés sur la réutilisation de l'eau dans la filière viti-vinicole (avec l'IFV). |
| PREST_VIA_008 Dalkia Froid Solutions | industrie_viande | VIN_004 (travaux, conseil_etude) | Page dédiée à la vini-viticulture, plus de 170 domaines, récupération de chaleur. |
| AIDE_LAI_006 AESN économies d'eau | industrie_laitiere | VIN_003, VIN_004, VIN_005 | Bassin de la Marne. |
| AIDE_LAI_008 AEAG économies d'eau | industrie_laitiere | VIN_004, VIN_005 | Charentes, Bordelais. |
| AIDE_LAI_009 AERMC ECO3 | industrie_laitiere | VIN_003, VIN_004, VIN_005 | Languedoc, Vaucluse (seuil de 2 000 m3 économisés par an). |
| AIDE_VIA_006 AERMC IND1 | industrie_viande | VIN_006, VIN_007 | Pollution industrielle, bassin RMC. |

Ces extensions se font dans `api/seeds/` par un humain. Tant qu'elles ne sont pas faites, les
rattachements de ces fiches n'apparaissent pas dans le rapport de couverture du secteur.

## 3. Aides, nouvelles fiches

| Id | Dispositif | Porteur | Échelle | Mesures | Taux |
|---|---|---|---|---|---|
| AIDE_VIN_001 | Aide aux investissements vitivinicoles, appel à projets annuel (intervention sectorielle vin) | FranceAgriMer | nationale | VIN_002, VIN_003, VIN_004, VIN_005, VIN_006 | 30 % PME, 15 % ETI, 7,5 % GE, plus 5, 2,5, 1,25 points de bonification environnementale |
| AIDE_VIN_002 | Aides aux effluents vinicoles, programme Eau, climat et biodiversité 2025-2030 | Agence de l'eau Seine-Normandie | AESN | VIN_006, AGR_010 | non publié |
| AIDE_VIN_003 | Dispositif « Activité vinicole / distillation », 12e programme | Agence de l'eau Adour-Garonne | AEAG | VIN_006, VIN_007 | 30 % macropolluants, 40 à 60 % selon enjeux, études 60 à 80 % |
| AIDE_VIN_004 | Financement de la formation des salariés | OCAPIAT (opérateur de compétences) | nationale | VIN_001 | à établir |

Réserves :
- **AIDE_VIN_001** : dépôts 2026 clos depuis le 3 avril 2026, édition 2027 non publiée ; la
  fiche décrit un appel annuel. Couvre de la réception des vendanges à la commercialisation :
  une distillerie n'est a priori pas éligible (pas de lien vers VIN_007). L'obus de raclage
  n'est pas cité, seules les canalisations le sont : lien vers VIN_002 à confirmer.
- **AIDE_VIN_003** : `verifier-url` renvoie une erreur de certificat sur les sites de l'agence
  Adour-Garonne ; prévoir une source de secours lisible.
- **AIDE_VIN_004** : non vérifiée par la recherche. Le rédacteur la retient seulement si une
  page OCAPIAT couvre les salariés des caves et distilleries ; sinon ACT_VIN_001 reste sans aide.

## 4. Ce qui reste non couvert après ces fiches

- **ACT_AGR_001, ACT_AGR_002, ACT_AGR_009 dans la Marne** : seul Hydrosol (sud) porte l'audit
  en cave. Les fiches publiées Diag Eco-Flux et Ressourc'Eau restent les seules aides à l'audit.
  Aucune aide ne finance explicitement les compteurs ni le plan de gestion.
- **ACT_VIN_005** : trois fabricants et un bureau d'études, sans référence de montage nommée.
- **Aucune fiche n'est proposée pour ACT_AGR_006** (eau de pluie), déjà portée par EcoRecup et
  Prêt Vert.

## 5. Décompte

| | Nombre | Part |
|---|---|---|
| Prestataires, nouvelles fiches | 20 | |
| dont entreprises privées (bureaux d'études, installateurs, fabricants, Revico) | 18 | 90 % |
| dont institutionnels (Comité Champagne, chambre d'agriculture de la Charente) | 2 | 10 % |
| Aides, nouvelles fiches | 4 | |
| Fiches publiées à ouvrir (demande d'évolution) | 2 prestataires, 4 aides | |

Les institutionnels restent sous le tiers des prestataires. Par mesure sectorielle, au moins deux
entreprises privées :

| Mesure | Privés | Institutionnel | Aide |
|---|---|---|---|
| VIN_001 Nettoyages économes | 001, 002 | | 004 (à vérifier) |
| VIN_002 Raclage | 003, 004, 005 | | 001 (à confirmer) |
| VIN_003 Nettoyage des cuves | 002, 004, 006, 007, 008 | | 001, LAI_006, LAI_009 |
| VIN_004 Circuit fermé | 004, 010, 011, 012, 013 (+ Dalkia) | | 001, LAI_006, LAI_008, LAI_009 |
| VIN_005 Cascade | 002, 008, 009 (+ Ecofilae) | | 001, LAI_006, LAI_008, LAI_009 |
| VIN_006 Effluents | 007, 014, 015, 016 | 019 | 001, 002, 003, VIA_006 |
| VIN_007 Vinasses | 014, 017 | 020 | 003, VIA_006 |

## 6. Écartés (principaux)

Syntea (redressement judiciaire, site hors ligne) ; Aderbio, Environnement XO (fermés) ;
Egretier (redressement) ; MVD Vinicole, Matévi, Kompass, Agryco (revendeurs, annuaires) ;
Guarato Tuyauterie Service, Brunet Ertia, Groupe Palombi, Alliance Environnement (zones sans la
Marne) ; Definox, Apsis, KWI France (pas de référence vin) ; Chaudronnerie Cognaçaise (reprise
possible en juillet 2026, entité à clarifier) ; Michael Paetzold, Adequabio (réserve, doublons
sans référence nommée) ; chambre d'agriculture de la Marne, CCI Marne (aucune prestation eau en
cave réalisée par elles) ; IFV (formation eau de 2021 seulement) ; Région Grand Est (exclut la
filière).
