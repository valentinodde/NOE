# Cibles de fiches : élevage d'herbivores

Étape 5 du skill `nouveau-secteur`. Statut : brouillon. Liste validée le 2026-10-15 telle quelle.

Le rapport de couverture (`rapport_couverture.md`) part de rien pour le secteur : les sept
mesures ACT_HRB n'ont ni prestataire ni aide. Seules les fiches transversales sont visibles
(Hydros sur le plan sécheresse et l'audit, Willie sur le sous-comptage, Fontaine Ingénierie sur
l'eau de pluie, Diag Eco-Flux et Ressourc'Eau sur l'audit). La démarche collective n'a rien.

Candidats trouvés par trois recherches parallèles (traite et laiterie ; abreuvement, pâturage,
berges et fourrage ; aides et collectif). Chaque SIRET a été lu avec `outils_fiches.py
rechercher-entreprise` (état A) et chaque URL avec `verifier-url` (200), sauf mention. Les
rédacteurs revérifient tout. Notes brutes : scratchpad de la session (`cibles_traite.md`,
`cibles_abreuvement.md`, `cibles_aides.md`).

**Département de test : 50 (Manche).** Premier département du secteur (9 874 établissements,
dont 4 563 en 01.41Z et 710 employeurs), région Normandie, agence de l'eau Seine-Normandie
(AESN). La ferme expérimentale de La Blanche Maison, citée au profil, y est installée.

## 0. Constat de marché

- **Traite** : deux fabricants de tanks et de prérefroidisseurs (Serap, français ; DeLaval,
  suédois) écrivent noir sur blanc que l'eau du prérefroidisseur va aux abreuvoirs. Aucun
  installateur ni bureau d'études ne vend le raccordement en tant que tel.
- **Eaux blanches et vertes** : marché de niche, porté par des guides techniques (chambres,
  Idele) qui ne nomment aucune entreprise. Deux candidats fragiles, aucun normand.
- **Abreuvement et clôture** : fabricants français solides (La Buvette, Lacmé, CTH). Aucun
  installateur privé de pompage solaire ou de réseau au pré trouvé avec une preuve.
- **Berges dans la Manche** : les travaux sont faits sous maîtrise d'ouvrage des collectivités
  (programmes de restauration de cours d'eau de l'agglomération du Cotentin, financés par
  l'AESN), par des associations d'insertion. Ce sont des aides, pas des prestataires à démarcher.
- **Chambre d'agriculture** : la chambre départementale de la Manche est fermée sous son SIRET,
  c'est la chambre de région Normandie qui porte les prestations.
- **Aides AESN** : dépôts suspendus du 30/09/2026 à mi-janvier 2027 (changement de plateforme).

## 1. Prestataires nouveaux

| Id | Structure | SIRET | Type | Mesures et rôles | Échelle | URL de départ | Preuve sectorielle | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| PREST_HRB_001 | Serap Industries | 38975842600024 (Gorron, 53) | equipementier | ACT_HRB_005 materiel ; ACT_HRB_002 materiel | nationale (par concessionnaires) | https://www.groupeserap.fr/ | Page prérefroidissement : « L'eau tiédie est dirigée vers les abreuvoirs en sortie de salle de traite » (https://www.groupeserap.fr/tank-a-lait_refroidissement-du-lait_economies-d-energie-pour-le-refroidissement-du-lait_pre-refroidissement-du-lait.phtml) ; meuble de lavage du tank Rainbow ; fabrication à Gorron (Le Journal des entreprises) | Fabricant français de tanks et de prérefroidisseurs, qui décrit exactement la mesure. |
| PREST_HRB_002 | DeLaval (filiale du groupe suédois) | 67203880900022 | installateur | ACT_HRB_002 materiel ; ACT_HRB_005 materiel | nationale | https://www.delaval.com/ | Programmateur de lavage C100E qui « permet de réguler la consommation d'eau et de détergents » ; catalogue 2024 p. 83 : eau du prérefroidisseur « idéale pour l'abreuvement des vaches » | Grand constructeur de machines à traire, preuve écrite sur les deux mesures. Fabrication étrangère, à dire dans la fiche. |
| PREST_HRB_003 | Groupe Lacta-Traite | 38514092600036 (Isigny-le-Buat, 50) | installateur | ACT_HRB_002 travaux | départementale (50), zone à préciser | https://www.lactatraite.fr/ | Installation de salles de traite et de robots (partenaire BouMatic), service maintenance et dépannage. Le lavage n'est pas cité explicitement. | Installateur et dépanneur de traite de la Manche, la PME locale face aux constructeurs. |
| PREST_HRB_004 | Chambre d'agriculture de Normandie | 13003150300076 | chambre_consulaire | ACT_HRB_002 conseil_etude | régionale (14, 27, 50, 61, 76) | https://normandie.chambres-agriculture.fr/etre-accompagne/pour-agriculteurs-et-agricultrices/detail-de-la-prestation/certitraite-normandie | Prestation payante Certi'Traite, protocoles Opti'Traite et Net'Traite, « contrôle des paramètres de lavage ». Retour d'expérience à citer : EARL de la Landerie, eau du prérefroidisseur stockée pour laver les quais, 365 m³/an économisés pour 13 233 € | Réalise elle-même le contrôle du lavage. Seul institutionnel sur ACT_HRB_002. |
| PREST_HRB_005 | Aquatiris (SASKIT) | 49903606900056 | bureau_etudes | ACT_HRB_006 conseil_etude, travaux | nationale, réseau de franchisés (couverture de la Manche à confirmer) | https://www.aquatiris.com/agricole-et-agroalimentaire/ | Réalisation « traitement d'effluents agricoles (eaux blanches) et domestiques en mélange » dans le Finistère | Seule entreprise de filtres plantés qui montre une réalisation sur eaux blanches agricoles. |
| PREST_HRB_006 | Alistep (enseigne d'INEAUTEC) | 80521574600035 (Couzeix, 87) | installateur | ACT_HRB_006 materiel | nationale (sur devis) | http://www.alistep.com/materiels-assainissement-agricole/ (https invalide) | Fosse toutes eaux et cuve à chasse pour filtres plantés d'effluents de traite, distingue eaux blanches et vertes | Matériel dédié aux filtres plantés de salle de traite. SIRET à confirmer : les mentions légales citent INWANT (45290342000019). |
| PREST_HRB_007 | La Buvette | 78572001200042 (Tournes, 08) | equipementier | ACT_HRB_001 materiel ; ACT_HRB_003 materiel ; ACT_HRB_007 materiel | nationale | https://www.labuvette.fr/conseils/entreprise | « Conçoit et fabrique en grande série tous types d'abreuvoirs », usine à Charleville-Mézières ; pompes de prairie Aquamat, pompage solaire Solar-Flow | Fabricant français de référence de l'abreuvement, en bâtiment comme au pré. |
| PREST_HRB_008 | Lacmé | 45123447000016 (La Flèche, 72) | equipementier | ACT_HRB_007 materiel | nationale | https://lacme.com/decouvrez-lacme/ | « Fabricant français depuis 1956 », production à La Flèche ; clôture électrique pour bovins | Clôtures pour la mise en défens des berges. |
| PREST_HRB_009 | Premier Tech Eau et Environnement (groupe canadien Premier Tech) | 41964609600018 | equipementier | ACT_HRB_001 materiel ; ACT_HRB_003 materiel | nationale | https://www.premiertechaqua.com/sites/ptwe/files/PDF/FR/Calona_Doc-Pro-Materiel-Elevage_0521_FR-FR.pdf | Gamme Calona « conçu et fabriqué en France », bacs et cuves pour l'abreuvement des bovins, ovins et caprins | Fabrique en France (cinq sites) : type `equipementier` proposé malgré l'actionnaire étranger, à dire dans la fiche. |
| PREST_HRB_010 | CTH, Centre technique d'hygiène | 32542171700076 (Romans-sur-Isère, 26) | equipementier | ACT_HRB_001 materiel | nationale | https://www.cth.fr/produits/traitement-eau | Gamme de traitement de l'eau de boisson des animaux, quatre sites de production en France ; cité par Réussir Lait (2020) sur la chloration de l'eau d'abreuvement | Traitement de l'eau de forage, dont le profil cite les rétrolavages et la corrosion. |
| PREST_HRB_011 | RAGT Semences | 43189975600016 (Rodez, 12) | equipementier | ACT_HRB_004 materiel | nationale | https://ragt-seeds.com/fr/semis-de-prairie-sous-couvert-de-meteil-la-solution-pour-securiser-vos-stocks-fourragers/ | Prairie sous couvert de méteil « pour sécuriser vos stocks fourragers » face aux épisodes climatiques | Semencier français : prairies, méteils, sorgho, luzerne. |
| PREST_HRB_012 | Cérience (ex Jouffray-Drillaud et Terrena Semences) | 82247815200017 (Beaufort-en-Anjou, 49) | equipementier | ACT_HRB_004 materiel | nationale | https://www.cerience.fr/sites/default/files/2023-05/16mai2023-CP-Cerience-m-valo.pdf | Essais de prairie sous couvert en stress hydrique (lu par résumé, site 403 aux robots) | Second semencier français fourrager, preuve à relire par le rédacteur. |
| PREST_HRB_013 | PâtureSens (GMB) | 83073352300021 (Ouville, 50) | bureau_etudes | ACT_HRB_004 conseil_etude, formation | régionale (50, 61, 14), interventions nationales | https://www.paturesens.com/ | Cabinet de conseil en pâturage, « plus de 2 000 éleveurs formés », plans de pâturage bovins et ovins (Réussir Pâtre) | Cabinet privé de la Manche qui vend le conseil et la formation au pâturage. |
| PREST_HRB_014 | ESPACE Basse-Normandie | 43380993600019 (Cahagnes, 14) | association | ACT_HRB_007 travaux | régionale (14, 50) | https://parc-cotentin-bessin.fr/sites/default/files/inline-files/CP_20250409_SOUTIEN_ELEVAGE_CAC_CA50_PNR_V01.pdf | Chantier sur la Sinope (50) : 12 abreuvoirs, 2 bacs, 7 franchissements, 1 500 m de clôture | A réalisé les aménagements de berges dans la Manche. Association d'insertion, alternative : Astre Environnement (38975860800043). |
| PREST_HRB_015 | Syndicat mixte du Parc naturel régional des Marais du Cotentin et du Bessin | 25500255200032 | collectivite | ACT_AGR_010 conseil_etude | 50, 14 | https://parc-cotentin-bessin.fr/sites/default/files/inline-files/07bis_CP_RDV_14JUIN26_0.pdf | Anime avec la chambre d'agriculture le programme « Élevage & Marais » depuis 2019 (paiements pour services environnementaux AESN, 19 fermes sur le Merderet) | Seul collectif d'éleveurs de la Manche qui touche à l'eau, plutôt qualité et zones humides que quantité. |

## 2. Prestataires existants à étendre (demandes d'évolution)

| Fiche | Où | Évolution | Preuve |
|---|---|---|---|
| PREST_HOT_011 Ocène (SIRET 31312579100027, Louvigné-du-Désert, 35) | publiée, `prestataires_hotellerie.json` | ajouter `elevage_herbivores` aux secteurs ; lien ACT_HRB_001 travaux, conseil_etude | https://www.ocene.fr/metiers/traitement-de-l-eau/ : eau de boisson « consommée par les animaux », contaminations par le puits, le forage, les canalisations et les abreuvoirs ; maintenance. À 15 km de la Manche. |

Comme pour les hôpitaux, on ne recopie pas le fichier publié dans ce staging : la promotion le
recopierait en entier. Sans cette extension, ACT_HRB_001 garde trois fabricants et aucun
installateur.

## 3. Aides nouvelles

| Id | Dispositif | Porteur | Échelle | Bénéficiaires (selon la source) | Mesures | État | URL |
|---|---|---|---|---|---|---|---|
| AIDE_HRB_001 | Aides aux agriculteurs, programme Eau, climat et biodiversité 2025-2030, volet sobriété en eau | agence de l'eau Seine-Normandie | `agences: ["AESN"]` | agriculteurs du bassin ; jusqu'à 80 % pour les investissements économes recommandés par un diagnostic en territoire en tension | ACT_AGR_006 (eau de pluie « ex. élevage : lavage, process, abreuvement »), ACT_HRB_005, ACT_AGR_001 (« systèmes et sondes de mesure », à confirmer) | en cours, dépôts suspendus jusqu'à mi-janvier 2027 | https://www.eau-seine-normandie.fr/agriculteurs/aides-financieres-du-programme-eau-climat-biodiversite |
| AIDE_HRB_002 | Accompagner la transition agricole pour l'eau (chapitre C) | agence de l'eau Seine-Normandie | `agences: ["AESN"]` | exploitations du bassin, la plupart des lignes en territoire à enjeu | ACT_HRB_004 (prairies, haies, matériel de gestion de l'herbe), ACT_AGR_010 (diagnostics et conseil en démarche territoriale) | comme ci-dessus | https://www.eau-seine-normandie.fr/aides/Accompagner-la-transition-agricole-pour-l-eau |
| AIDE_HRB_003 | Programmes de restauration des cours d'eau du Cotentin (Merderet, Sinope, Douve, Divette, côtiers) | Communauté d'agglomération du Cotentin, financés à 80 % par l'AESN | `departements: ["50"]` (bassins du Cotentin) | exploitants et propriétaires riverains, par convention ; travaux sous maîtrise d'ouvrage de la collectivité, sans reste à charge selon le communiqué | ACT_HRB_007 (pompes de prairie, abreuvoirs, clôtures, passerelles), ACT_HRB_003 | actif (communiqué du 09/04/2025) | https://parc-cotentin-bessin.fr/sites/default/files/inline-files/CP_20250409_SOUTIEN_ELEVAGE_CAC_CA50_PNR_V01.pdf |
| AIDE_HRB_004 | Aide sur les petits investissements des exploitations agricoles | Département de la Manche | `departements: ["50"]` | exploitants à titre principal et sociétés agricoles installés depuis plus de trois ans ; 40 %, aide plafonnée à 3 000 € (60 % et 5 000 € pour les jeunes agriculteurs et les CUMA) | ACT_HRB_004 (clôtures pour paddock), ACT_HRB_005 (prérefroidisseur, financé au titre de l'énergie : à dire) | ouvert au fil de l'eau | https://www.manche.fr/actions/economie-et-filieres-porteuses/politique-agricole/lien-aux-exploitants/ |
| AIDE_HRB_005 | Petits investissements de la filière équine (plan Manche Cheval) | Département de la Manche | `departements: ["50"]` | exploitations équines dont le siège est dans la Manche | ACT_HRB_003 (abreuvoir à adduction), ACT_HRB_004 (clôtures de pâturage tournant) | règlement 2024 en ligne, version 2025 en 404 : état à confirmer | https://www.manche.fr/wp-content/uploads/2024/02/reglement-politique-dep-inv-exploitatio-2.pdf |
| AIDE_HRB_006 | Soutien aux investissements des entreprises équines de demain (FEADER) | Région Normandie | `departements: ["14","27","50","61","76"]` | exploitants équins affiliés à la MSA à titre principal ; 20 % (25 % labellisé EquuRES) | ACT_AGR_006 (eaux de pluie, de douche et d'aire de lavage), ACT_HRB_001 (abreuvoirs automatiques) | ouvert, fiche mise à jour le 30/09/2026 | https://les-aides.fr/aide/cEAf3w/region-normandie/soutien-aux-investissements-des-entreprises-equines-de-demain.html (normandie.fr en 403) |
| AIDE_HRB_007 | Normandie Agriculture Investissement (NAI, FEADER) | Région Normandie | `departements: ["14","27","50","61","76"]` | agriculteurs, élevage en priorité 1, de 15 à plus de 40 % | ACT_HRB_002 et ACT_HRB_001, à confirmer (bâtiments et équipements d'élevage, matériel de traite ; liste des dépenses eau non lue) | ouvert, règles révisées au 04/05/2026 | https://normandie.chambres-agriculture.fr/dossiers-1/detail-du-dossier/normandie-agriculture-investissement |
| AIDE_HRB_008 | MAEC Autonomie fourragère des élevages d'herbivores (PSN, intervention 70.09) | État et FEADER, cofinancée par l'AESN en Normandie | territoires à projet agro-environnemental ; notice trouvée pour l'Orne, Manche à confirmer | éleveurs d'herbivores engagés cinq ans ; 233 €/ha/an au niveau 3 | ACT_HRB_004 | campagne 2026 | https://draaf.normandie.agriculture.gouv.fr/IMG/pdf/43-anda-hbv3.pdf |
| AIDE_HRB_009 | ECO2, sobriété en eau de l'agriculture (12e programme) | agence de l'eau Rhône Méditerranée Corse | `agences: ["AERMC"]` | agriculteurs et groupements ; 70 % en secteur prioritaire, 50 % ailleurs | ACT_AGR_006, ACT_HRB_001 (fuites et dispositifs économes, hors irrigation à confirmer), ACT_AGR_010 (animation) | adoptée le 19/12/2024 | https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/recueil-fiches.pdf |
| AIDE_HRB_010 | Optimiser l'usage de l'eau en élevage | Région Auvergne-Rhône-Alpes | `departements` des douze départements de la région | élevages d'herbivores d'au moins 20 UGB ou 50 brebis ou chèvres ; 40 %, aide maximale de 4 000 € | ACT_HRB_003 (forage, pompes solaires, canalisations, cuves, abreuvoirs au pré), ACT_AGR_006, ACT_AGR_001 | ouvert, sans date limite | https://les-aides.fr/aide/ZgJf3w/region-auvergne-rhone-alpes/optimiser-l-usage-de-l-eau-en-elevage.html (site régional protégé) |

## 4. Aides existantes

- **AIDE_GCU_002** (agence Adour-Garonne, aides directes aux agriculteurs, staging
  `grandes_cultures`) : couvre les points d'abreuvement et les haies. Demande d'évolution :
  ajouter `elevage_herbivores` à ses secteurs et des liens vers ACT_HRB_003, ACT_HRB_004,
  ACT_HRB_007, au moment de sa promotion.
- **AIDE_LAI_006** (AESN, économies d'eau des entreprises) : à ne pas lier, l'agence oriente
  les agriculteurs vers un parcours séparé (AIDE_HRB_001 et 002).
- **AIDE_LAI_003** (Diag Eco-Flux) : entreprises de 20 à 250 salariés, presque aucun élevage.
- **AIDE_HOT_008** (Ressourc'Eau) : CCI Pays de la Loire, hors Manche et hors agriculture.

## 5. Trous restants

- **ACT_HRB_002, lavage de la traite** : aucun privé en formation des trayeurs ni en diagnostic
  des volumes ; aide seulement possible via le NAI, à confirmer.
- **ACT_HRB_003, réseau au pâturage** : deux fabricants, aucun installateur de pompage solaire
  ou de canalisations au pré.
- **ACT_HRB_005, eau de la laiterie** : deux fabricants, aucun installateur ; aide AESN sous
  conditions, prérefroidisseur financé dans la Manche au titre de l'énergie.
- **ACT_HRB_006, eaux blanches et vertes** : deux candidats fragiles, aucune aide explicite
  (effluents AESN réservés aux nouvelles zones vulnérables).
- **ACT_HRB_007, berges** : deux fabricants et une association ; pas d'entreprise de travaux
  privée. Piste : avis d'attribution BOAMP des programmes de rivière du Cotentin et de Saint-Lô.
- **ACT_AGR_009, plan sécheresse** : aucune aide.
- Écartés : FranceAgriMer protection contre la sécheresse (goutte-à-goutte obligatoire),
  Écod'eau Mayenne (sensibilisation, sans financement), appel à projets Loire-Bretagne élevages
  de 2022 (clos), Artois-Picardie 2021 (non confirmé au 12e programme), calamités agricoles
  (pas une aide à une mesure). Prestataires écartés : Gallagher, Suevia, Patura, Lorentz
  (étrangers), Polymoule (fabrication non prouvée), Epur Nature (fermé), Syntea (site en
  erreur), Littoral Normand et Seenovia (aucune prestation eau payante trouvée), GEA, Manche
  Traite Système, Lely Center (sans preuve).

## 6. Décompte

Quinze prestataires nouveaux : **douze entreprises privées** (Serap, DeLaval, Lacta-Traite,
Aquatiris, Alistep, La Buvette, Lacmé, Premier Tech, CTH, RAGT, Cérience, PâtureSens) et **trois
non privés** (chambre d'agriculture de Normandie, ESPACE Basse-Normandie, PNR des Marais du
Cotentin et du Bessin), soit 20 %, sous le plafond d'un tiers. Plus une extension (Ocène, privé).

Par mesure sectorielle, entreprises privées : ACT_HRB_001 quatre avec Ocène, 002 trois, 003
deux, 004 trois, 005 deux, 006 deux (fragiles), 007 deux. Aucune mesure n'a une seule
entreprise. Aides : toutes les mesures sectorielles en ont au moins une sauf ACT_HRB_006 ;
ACT_HRB_002 n'a que le NAI à confirmer.

Dix aides nouvelles, une extension (AIDE_GCU_002).
