# Cibles de fiches : hôtellerie

Étape 5 du skill `nouveau-secteur`. Statut : brouillon. Liste validée le 2026-09-24.

**Décision au point d'arrêt** : retirer PREST_HOT_013 (Abriblue) et PREST_HOT_016 (Solem),
fabricants sans référence hôtelière, et AIDE_HOT_005 (Bourgogne-Franche-Comté), où l'eau
n'est qu'une éco-condition. Ces ids ne sont pas réattribués. Restent **17 prestataires
et 8 aides**. ECODO PRO (AIDE_HOT_007) et Ressourc'Eau (AIDE_HOT_008) sont rédigés en
fiches aide ; la CCI de région Bretagne reste prestataire (PREST_HOT_019) pour la
réalisation.

**Décision au point d'arrêt de l'étape 6 (2026-09-24)** : PREST_HOT_004 (Hydrao) et PREST_HOT_012 (CCEI) sont retirés des listes assemblées (ni fabrication française ni pose sourcées pour Hydrao, aucune référence hôtelière pour CCEI) ; leurs fiches et verdicts restent dans `fiches/`. Les huit autres fiches non conformes sont gardées avec leur verdict et listées dans la revue.

Le rapport de couverture (`rapport_couverture.md`) montre que sur les douze mesures
visibles, seule l'eau de pluie (ACT_AGR_006) a un prestataire (EcoRecup) et une aide
(Prêt vert Bpifrance), et l'audit (ACT_AGR_002) une aide (Diag Eco-Flux). Tout le reste
est à couvrir.

Ce document propose **19 prestataires** (18 entreprises privées, 1 institutionnel) et
**9 aides**, plus trois demandes d'évolution sur des aides existantes. Les recherches ont
été menées le 2026-09-24 ; chaque SIRET a été lu avec `outils_fiches.py
rechercher-entreprise`, sauf mention. Les URL marquées « vue en résultat de recherche »
n'ont pas été ouvertes : le rédacteur de fiche doit les ouvrir avant de les citer.

## Synthèse par mesure

| Mesure | Prestataires privés | Institutionnel | Aides |
|---|---|---|---|
| ACT_HOT_001 Équipements hydro-économes | EcoTechniques, Delabie, Presto, Hydrao | | Région Sud, CAP Tourisme CVL, AGIR Tourisme PDL, BFC hôtellerie, Fonds Oise |
| ACT_HOT_002 Chasse aux fuites | FairMoove, FHOR, Osmozis | | Fonds Oise, AKTO |
| ACT_HOT_003 Linge à la demande | FairMoove, Hôtel Vert (SIRET non trouvé) | | AKTO |
| ACT_HOT_004 Lavage économe | Danube (fabrication française non prouvée), Winterhalter (filiale allemande) | | Région Sud, CVL, PDL, Fonds Oise |
| ACT_HOT_005 Piscine économe | Syclope, Ocene, CCEI, Abriblue | | Région Sud, CVL, PDL, Occitanie (à confirmer) |
| ACT_HOT_006 Espaces verts sobres | idverde, Sénariz, Solem | | Région Sud, CVL, PDL, Occitanie (végétalisation) |
| ACT_HOT_007 Ratio litres par nuitée | FairMoove, Osmozis, Odalie | | aucune en propre |
| ACT_AGR_001 Compteur par usage | Osmozis, Odalie | | Fonds Oise |
| ACT_AGR_002 Audit eau | EcoTechniques, FairMoove | CCI Bretagne | Diag Eco-Flux (existante), ECODO PRO, Ressourc'Eau |
| ACT_AGR_006 Eau de pluie | EcoRecup (existant) | | Prêt vert (existant), AGIR Tourisme, Occitanie, Fonds Oise |
| ACT_AGR_009 Plan de gestion | FairMoove | CCI Bretagne | ECODO PRO, Ressourc'Eau |
| ACT_AGR_010 Démarche collective | aucun | CCI Bretagne | aucune |

**Décompte** : 18 privés, 1 institutionnel, sous le plafond d'un tiers.

**Points faibles** :
- ACT_HOT_003 : une seule entreprise entièrement vérifiée (Hôtel Vert sans SIRET trouvé).
- ACT_HOT_004 : aucun fabricant français prouvé de lave-linge ou lave-vaisselle professionnel.
- ACT_AGR_010 : aucune entreprise privée, ce qui est cohérent avec la nature de la mesure.
- ACT_HOT_007 : aucune aide propre.
- Couverture territoriale des aides : six régions métropolitaines sans aide régionale trouvée
  (Île-de-France, Grand Est, Normandie, Nouvelle-Aquitaine, Auvergne-Rhône-Alpes, Corse).

## Demandes d'évolution sur des aides existantes

1. **Aides des agences de l'eau** (AIDE_LAI_001, 005 à 009) : `secteurs: ["industrie_laitiere"]`,
   donc aucune aide d'agence n'est visible pour un hôtel. Proposition : ajouter `hotellerie`
   et les lier à ACT_HOT_001, 004, 005, 006, après vérification de l'éligibilité par agence
   (AEAP, AESN, AELB : hôtels éligibles ; AEAG, AERMC : seuils de volume ; AERM : probablement
   hors champ).
2. **Prêt vert Bpifrance en double** : AIDE_AGR_004 et AIDE_LAI_004 sont toutes deux
   transversales. Un hôtelier verrait le même prêt deux fois. Fusionner.
3. **Diag Eco-Flux** (AIDE_LAI_003) : ajouter le lien ACT_HOT_007 ; limite de 20 à 250
   salariés, qui exclut la plupart des hôtels.

Ces fiches sont publiées ou dans le staging laitier : non modifiées ici.

---

#### Prestataires cibles : hôtellerie (NAF 55.10Z)

Recherche du 2026-09-24. Ce sont des cibles, pas des fiches. Chaque SIRET a été lu avec `outils_fiches.py rechercher-entreprise` (état A sauf mention contraire). Les URL marquées « lue » ont été ouvertes. Celles marquées « vue en résultat de recherche » n'ont été vues que dans un moteur de recherche : le rédacteur de fiche doit les ouvrir avant de les citer.

### Cibles

#### PREST_HOT_001 : EcoTechniques
- Type : `bureau_etudes` (conçoit aussi et pose ses propres dispositifs ; `equipementier` possible, voir la note)
- SIRET : 40767775600048 (siège, Longvic 21), état A, NAF 28.14Z
- Échelle : nationale (« partout en France », d'après la page d'audit)
- URL officielle : https://eco-techniques.fr/
- Pertinence hôtellerie (lue) : https://eco-techniques.fr/a-propos/ : « Hôtellerie & tourisme : Accor, B&B, Méridien Caraïbes, CroisiEurope »
- Fabrication française (lue, même page) : « Nos dispositifs français à 98 % sont certifiés et garantis 10 ans » ; audit : https://eco-techniques.fr/audit-diagnostic-deconomie-deau/ (lue)
- Mesures : ACT_HOT_001 [conseil_etude, travaux, materiel] ; ACT_AGR_002 [conseil_etude]
- Pourquoi : spécialiste de l'hydro-économie depuis 1996 qui mesure les débits point par point, pose ses propres réducteurs et vérifie l'économie, avec des références hôtelières nommées.
- Note : « 98 % français » ne dit pas où se fait l'assemblage. Si `equipementier`, chercher une page usine.

#### PREST_HOT_002 : Delabie
- Type : `equipementier`
- SIRET : 61568008900013 (siège et site de production, Friville-Escarbotin 80), état A, NAF 28.14Z
- Échelle : nationale
- URL officielle : https://www.delabie.fr/
- Pertinence hôtellerie (vue en résultat de recherche, PDF) : https://www.delabie.fr/ftp/case-studies/mama-shelter-lille.pdf (hôtel Mama Shelter Lille, mitigeurs temporisés TEMPOMIX 3). Autre page vue : https://www.delabie.fr/nos-services/notre-expertise/nos-inspirations/hotel9
- Fabrication française (vue en résultat de recherche) : https://www.delabie.com/our-group/about-us/our-history (fonderie de Friville-Escarbotin reprise en 1928). La page d'accueil (lue) cite un « head office & production site » sans le situer ; la preuve de l'usine en France est à confirmer sur une page officielle.
- Mesures : ACT_HOT_001 [materiel]
- Pourquoi : fabricant familial français de robinetterie temporisée et de chasses pour lieux recevant du public, avec un calculateur d'économie d'eau et une référence hôtelière documentée.
- Réserve : une source secondaire le dit leader européen « sauf en hôtellerie ». Sa présence dans le secteur est donc réelle mais pas dominante.

#### PREST_HOT_003 : Les Robinets Presto
- Type : `equipementier`
- SIRET : 54209143400010 (SA LES ROBINETS PRESTO, siège à Montrouge 92), état A, NAF 28.14Z. Le SIRET de l'usine de Saint-Georges-de-Didonne (17) n'a pas été retrouvé.
- Échelle : nationale
- URL officielle : https://presto.fr/
- Pertinence hôtellerie (lue) : https://presto.fr/en/projet/hospitality/ : Hôtel Bedford Paris, Hôtel Disneyland Paris, Mercure Porte de Versailles
- Fabrication française (lue, même page) : site de production « 4 rue Lavoisier, 17110 Saint Georges de Didonne »
- Mesures : ACT_HOT_001 [materiel]
- Pourquoi : inventeur français du robinet temporisé, fabriqué en Charente-Maritime, avec des références hôtelières nommées.

#### PREST_HOT_004 : Hydrao (Smart and Blue)
- Type : `equipementier`
- SIRET : 81412714800017 (SMART AND BLUE, siège à Moirans 38), état A
- Échelle : nationale
- URL officielle : https://www.hydrao.com/ (offre pro : https://pro.hydrao.com/)
- Pertinence hôtellerie (vue en résultat de recherche) : https://hr-infos.fr/hydrao-eclaire-le-client-sur-le-volume-deau-quil-depense-sous-la-douche-2/ et https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/22778-article/l-hotel-waterfront-a-malte-reduit-sa-consommation-d-eau-et-d-energie-avec-les-pommeaux-de-douche-et-ciels-de-pluie-connectes-hydrao (90 hébergements de Villages Nature Paris équipés en 2018, selon le résumé de recherche)
- Fabrication française (vue en résultat de recherche) : https://pro.hydrao.com/blog/hydrao-s-engage-pour-le-made-in-france-avec-eolane (fabrication confiée à éolane, dans la même région)
- Mesures : ACT_HOT_001 [materiel]
- Pourquoi : pommeaux de douche à bas débit qui changent de couleur selon le volume consommé, conçus pour agir sur le comportement du client en chambre, fabriqués en France.

#### PREST_HOT_005 : FairMoove Solutions (ex-Betterfly Tourism)
- Type : `bureau_etudes` (également organisme de formation certifié Qualiopi)
- SIRET : 53356378900049 (siège, Nantes 44), état A, NAF 70.22Z
- Échelle : nationale
- URL officielle : https://www.fairmoove-solutions.com/
- Pertinence hôtellerie (lue) : https://www.fairmoove-solutions.com/conseil-rse-hospitality (conseil aux hébergements : diagnostic, visite sur site, plan d'action ; l'eau fait partie des domaines couverts) ; https://www.fairmoove-solutions.com/academy (lue) : module « Écogestion responsable de l'eau dans les hébergements touristiques » et module de 3 h 30 « gestion économe de l'énergie, mesures d'économie d'eau et gestion des déchets » (critère 237 du classement hôtelier)
- Linge (article de presse, lu) : https://leshorizons.net/betterfly-tourism-solution-tourisme-responsable/ (audits sur site, puis réducteurs d'eau et « gestion du linge » dans les hôtels partenaires)
- Mesures : ACT_HOT_002 [formation] ; ACT_HOT_003 [conseil_etude, formation] ; ACT_HOT_007 [conseil_etude] ; ACT_AGR_002 [conseil_etude] ; ACT_AGR_009 [conseil_etude]
- Pourquoi : cabinet et éditeur spécialisé dans l'hébergement touristique. Il fait le diagnostic, suit les consommations (logiciel FairScore, notation environnementale qui inclut l'eau) et forme le personnel au critère eau du classement.

#### PREST_HOT_006 : FHOR (Formation Hôtellerie Restauration)
- Type : `organisme_formation`
- SIRET : 98143541500014 (SIREN 981435415 donné par le site, fiche SIRENE non diffusible), état A, NAF 85.59A
- Échelle : nationale (« toute la France et pays francophones »)
- URL officielle : https://www.fhor.fr/
- Pertinence hôtellerie (lue) : https://www.fhor.fr/hotellerie/formation-classement-hotelier-ecogestes-et-handicap/ : « Gestion de l'eau : Sensibiliser à la consommation d'eau (robinets, douches, toilettes), à la détection des fuites » ; Qualiopi
- Mesures : ACT_HOT_002 [formation]
- Pourquoi : formation courte qui répond à l'obligation du classement hôtelier et traite explicitement du repérage des fuites par le personnel.
- Note : le nom est non diffusible dans SIRENE. Le rattachement du SIREN à FHOR repose sur la page https://www.fhor.fr/nous-connaitre/ (lue).

#### PREST_HOT_007 : Hôtel Vert
- Type : `bureau_etudes` (conseil, formation, accompagnement aux labels)
- SIRET : **non trouvé**. Ni la recherche par nom ni la page de mentions légales n'ont donné d'entité. À confirmer avant toute fiche.
- Échelle : nationale a priori (siège annoncé Tour Part-Dieu, Lyon 69003), non vérifiée
- URL officielle : https://www.hotelvert.com/
- Pertinence hôtellerie (lue) : https://www.hotelvert.com/la-reutilisation-des-draps-et-serviettes/ (affichage en chambre, lavage des draps et serviettes uniquement à la demande)
- Mesures : ACT_HOT_003 [conseil_etude, formation]
- Pourquoi : seul acteur privé trouvé qui publie une méthode de mise en place du linge à la demande (communication client, supports en chambre).

#### PREST_HOT_008 : Danube International (Onnera Laundry France)
- Type : `equipementier` sous réserve (voir la note), sinon `installateur`
- SIRET : 34222275900058 (ONNERA LAUNDRY FRANCE, Lamotte-Beuvron 41), état A, NAF 28.94Z (fabrication de machines)
- Échelle : nationale
- URL officielle : https://www.danube-international.com/
- Pertinence hôtellerie (lue) : https://www.danube-international.com/secteurs/hotellerie-restauration/ : gamme hôtellerie (lave-linge de 11 à 120 kg) et bacs de récupération AQUABAC (« jusqu'à 70 % d'économie d'eau »)
- Fabrication : la page entreprise (lue, https://www.danube-international.com/entreprise/) indique l'adresse de Lamotte-Beuvron sans dire explicitement « fabriqué en France ». Des sources tierces (Kompass) parlent de conception et de fabrication, et le code NAF est industriel. La société appartient au groupe Onnera (espagnol). **Preuve de fabrication française à obtenir** avant de la typer `equipementier`.
- Mesures : ACT_HOT_004 [materiel]
- Pourquoi : seul fabricant de laverie professionnelle implanté en France trouvé, avec une offre hôtelière et un dispositif de récupération d'eau de rinçage.

#### PREST_HOT_009 : Winterhalter France
- Type : `installateur` (filiale commerciale d'un fabricant allemand, retenue à défaut de fabricant français de lave-vaisselle)
- SIRET : 34314790600055 (WINTERHALTER FRANCE SAS, Chaponost 69), état A
- Échelle : nationale
- URL officielle : https://www.winterhalter.com/fr-fr/
- Pertinence hôtellerie (lue) : https://www.winterhalter.com/fr-fr/secteurs/hotellerie/ ; consommation (vue en résultat de recherche) : https://www.winterhalter.com/fr-fr/produits/lave-vaisselle-a-capot/gamme-pt/ (2,2 litres d'eau de rinçage par cycle)
- Mesures : ACT_HOT_004 [materiel, travaux]
- Pourquoi : couvre la moitié « lave-vaisselle » de la mesure, qu'aucun fabricant français trouvé ne couvre. La description devra dire qu'il s'agit d'une filiale.

#### PREST_HOT_010 : Syclope Electronique
- Type : `equipementier`
- SIRET : 38361200900035 (siège et usine, Sauvagnon 64), état A, NAF 26.51B
- Échelle : nationale
- URL officielle : https://www.syclope.fr/
- Pertinence hôtellerie (lue) : https://www.syclope.fr/en/applications/swimming-pools/hotels-campsites-spas/ : régulation, pompes doseuses, électrolyse, unité UFPOOL de recyclage des eaux de lavage des filtres, supervision à distance
- Fabrication française (vue en résultat de recherche) : https://www.syclope.fr/societe/ (« étudie, développe et fabrique […] dans son usine de Sauvagnon », selon le résumé de recherche)
- Mesures : ACT_HOT_005 [materiel]
- Pourquoi : fabricant béarnais qui couvre deux volets de la mesure, le dosage automatique du chlore et le recyclage des eaux de lavage des filtres (UFPOOL), avec une page dédiée aux hôtels.

#### PREST_HOT_011 : Ocene (Ocène Industrie)
- Type : `installateur` (conçoit et installe ; fabrication d'équipements non prouvée)
- SIRET : 31312579100027 (OCENE, Louvigné-du-Désert 35), état A, NAF 46.69B
- Échelle : non précisée par le site, nationale à confirmer
- URL officielle : https://www.ocene-industrie.fr/
- Pertinence (lue) : https://www.ocene-industrie.fr/metiers/traitement-de-l-eau/eau-recyclee-reuse-recyclage-industrie/146-ekoswim-recyclage-des-eaux-de-lavage-des-filtres-de-piscine.html (EKOSWIM, recyclage des eaux de lavage de filtres pour campings et hôtellerie de plein air) ; https://www.ocene-industrie.fr/actualites/126-optimiser-la-rentabilite-de-votre-camping-grace-au-traitement-de-leau.html (lue)
- Mesures : ACT_HOT_005 [conseil_etude, travaux]
- Pourquoi : intégrateur de traitement de l'eau qui dimensionne et installe la boucle de recyclage des eaux de lavage.
- Réserve : les références citées sont en hôtellerie de plein air, pas en hôtel. C'est un procédé voisin, mais la preuve est indirecte.

#### PREST_HOT_012 : CCEI
- Type : `equipementier`
- SIRET : 40352169300032 (CCEI, Marseille 13016), état A, NAF 27.12Z. Il existe aussi CCEI POOL FRANCE, 92772444300019, à la même adresse ; l'entité qui porte l'activité reste à trancher.
- Échelle : nationale
- URL officielle : https://www.ccei-pool.com/
- Pertinence (vue en résultat de recherche) : https://www.eurospapoolnews.com/nouveautes_piscines_spas-fr/75444-ccei,offre,sur,mesure,piscines,collectives.htm (offre pour piscines collectives) ; https://www.ccei-pool.com/fr/categorie/traitement-de-l-eau. **Aucune page trouvée qui cite nommément l'hôtellerie.**
- Fabrication française (vue en résultat de recherche) : produits « pensés, développés et assemblés en France, dans les ateliers de l'entreprise à Marseille » (article Eurospapoolnews sur les 50 ans de CCEI)
- Mesures : ACT_HOT_005 [materiel]
- Pourquoi : électrolyseurs et régulation automatique du chlore et du pH, fabriqués à Marseille. Sa preuve hôtelière est plus faible que celle de Syclope : à garder en second choix.

#### PREST_HOT_013 : Abriblue (A.S. Pool, groupe Nextpool)
- Type : `equipementier`
- SIRET : 40091697900034 (A.S. POOL, Spay 72), état A, NAF 22.23Z
- Échelle : nationale
- URL officielle : https://www.abriblue.com/
- Fabrication française (lue) : https://www.abriblue.com/en/about-us/ (11 400 m² d'ateliers à Spay, membre de la French Fab, gamme pour piscines publiques)
- Pertinence hôtellerie : **aucune référence hôtelière trouvée**, seulement une gamme pour piscines publiques et collectives
- Mesures : ACT_HOT_005 [materiel] (volet de la couverture de bassin)
- Pourquoi : seul fabricant français de couvertures pour bassins collectifs trouvé. Sans lui, le volet « couvrir la piscine » n'a pas de fabricant. Optionnel tant qu'une référence hôtelière manque.

#### PREST_HOT_014 : idverde
- Type : `installateur`
- SIRET : 33960966101806 (siège, Courbevoie 92), état A, NAF 81.30Z
- Échelle : nationale
- URL officielle : https://idverde.fr/
- Pertinence (lue) : https://idverde.fr/expertises/creation/arrosage-et-fontainerie/ (conception et pose de systèmes d'arrosage économes, filiale Arrosage System). La référence Pierre et Vacances Premium Deauville (résidence de tourisme, arrosage automatique) n'a été vue qu'en résultat de recherche, rattachée à https://idverde.fr/nos-projets/amenagement-et-entretien-espaces-verts/, et n'apparaît pas dans la page lue. **À confirmer.**
- Mesures : ACT_HOT_006 [conseil_etude, travaux]
- Pourquoi : paysagiste national qui conçoit, installe et entretient l'arrosage (goutte-à-goutte, paillage), et peut donc porter la mesure partout.

#### PREST_HOT_015 : Sénariz
- Type : `installateur`
- SIRET : 43125957100013 (Plaisir 78), état A, NAF 81.30Z
- Échelle : départements 75, 77, 78, 91, 92, 93, 94, 95 (Paris et Île-de-France)
- URL officielle : https://www.senariz.fr/
- Pertinence hôtellerie (lue) : https://www.senariz.fr/jardiniers-paysagistes-pour-hotels-a-paris-et-en-ile-de-france/ (plus de 20 ans au service des hôtels : conception, création, entretien)
- Mesures : ACT_HOT_006 [travaux]
- Pourquoi : PME paysagiste dédiée aux hôtels. La page ne parle pas d'arrosage économe : le lien avec le goutte-à-goutte reste à confirmer.

#### PREST_HOT_016 : Solem
- Type : `equipementier`
- SIRET : 32960576000035 (Clapiers 34), état A, NAF 26.12Z
- Échelle : nationale
- URL officielle : https://solem-irrigation.com/
- Fabrication française (vue en résultat de recherche) : https://usinedefrance.fr/usine/solem-solem-clapiers.html (conçoit et fabrique à Clapiers depuis 1984, plus de 300 000 produits par an, de l'injection à l'assemblage). La page d'accueil officielle (lue) ne le dit pas.
- Pertinence hôtellerie : **aucune référence hôtelière trouvée** ; gamme espaces verts urbains et programmation selon la météo
- Mesures : ACT_HOT_006 [materiel]
- Pourquoi : fabricant français de programmateurs et d'électrovannes de goutte-à-goutte pilotés selon la météo. Optionnel faute de preuve dans le secteur.

#### PREST_HOT_017 : Osmozis (OsmoWater)
- Type : `installateur` (conçoit la solution et déploie son réseau LoRaWAN ; lieu de fabrication des compteurs inconnu)
- SIRET : 48515641800058 (siège, Clapiers 34), état A, NAF 61.20Z
- Échelle : nationale
- URL officielle : https://www.osmozis.com/
- Pertinence hôtellerie (lue) : https://www.osmozis.com/blog/alerte-fuite-deau-hotel-hpa-le-bon-reflexe-pour-faire-des-economies-deau/ (alerte SMS ou courriel au personnel de l'hôtel en cas de surconsommation) ; https://www.osmozis.com/en/our-solutions/osmowater/ (lue : témoignage de camping seulement)
- Mesures : ACT_HOT_007 [materiel, travaux] ; ACT_AGR_001 [materiel, travaux] ; ACT_HOT_002 [materiel]
- Pourquoi : sous-comptage connecté conçu pour l'hébergement touristique, avec télérelève et alertes de fuite. Le ratio mensuel et le repérage des fuites deviennent automatiques.
- Réserve : les références nommées sont surtout des campings.

#### PREST_HOT_018 : Odalie (groupe Saur)
- Type : `installateur`
- SIRET : 33937998405975 (SAUR, Issy-les-Moulineaux 92, établissement qui porte l'adresse d'Odalie), état A. Odalie est une marque de Saur (SIREN 339379984, page de mentions légales https://odalie.eu/mentions-legales/, lue), pas une société distincte.
- Échelle : nationale
- URL officielle : https://odalie.eu/
- Pertinence hôtellerie (lue) : https://odalie.eu/vos-projets/vos-projets-hotellerie/ (Mira : suivi des consommations sans travaux, détection des fuites et surconsommations, tableaux de bord ; Aquapod : recyclage des eaux grises)
- Mesures : ACT_HOT_007 [materiel] ; ACT_AGR_001 [materiel, travaux]
- Pourquoi : offre de télésuivi présentée spécifiquement pour les hôtels, adossée à un exploitant d'eau national.
- Note : le prestataire est Saur, un grand groupe. Aquapod (eaux grises) ne relève pas d'ACT_AGR_006, qui porte sur l'eau de pluie.

#### PREST_HOT_019 : CCI de région Bretagne (programme ECOD'O Pro), institutionnel
- Type : `chambre_consulaire`
- SIRET : 18350004000310 (CCIR Bretagne, Saint-Jacques-de-la-Lande 35), état A. Établissement lu, siège non vérifié. La CCI du Morbihan, à l'origine du programme, a le SIRET 18560005300010 (état A).
- Échelle : départements 22, 29, 35, 56
- URL officielle : https://www.bretagne.cci.fr/
- Pertinence (lue) : https://www.bretagne-economique.com/actualites/gestion-de-leau-le-programme-deconomie-ecodo-3-setend-au-niveau-regional/ (diagnostics fins et plans d'action pour entreprises industrielles et touristiques). Vues en résultat de recherche, non ouvertes (le site de la CCI renvoie une erreur 403) : https://www.bretagne.cci.fr/actualite/developpement-durable-appel-candidatures-ecodo-pro-2026-entreprises-bretonnes-reduisez-votre-consommation-eau (appel 2026) et https://www.bretagne.cci.fr/actualite/developpement-durable-ecodo-devient-ecodopro-et-vise-100-entreprises-accompagnees-en-2025 (99 entreprises en 2025 : prédiagnostic, accompagnement ciblé, accompagnement collectif ; tourisme parmi les secteurs les plus représentés)
- Mesures : ACT_AGR_002 [conseil_etude] ; ACT_AGR_009 [conseil_etude] ; ACT_AGR_010 [conseil_etude]
- Pourquoi : la CCI réalise elle-même les prédiagnostics et anime un volet collectif, avec des hébergeurs touristiques parmi les bénéficiaires.
- Réserve : la déclinaison hôtelière, le guide « Petites gouttes » pour les hôtels, n'a été vue qu'en résumé de recherche.

### Couverture par mesure (entreprises privées, hors institutionnel)

| Mesure | Privés | Rôles |
|---|---|---|
| ACT_HOT_001 | EcoTechniques, Delabie, Presto, Hydrao | conseil_etude, travaux, materiel |
| ACT_HOT_002 | FairMoove, FHOR, Osmozis | formation, materiel |
| ACT_HOT_003 | FairMoove, Hôtel Vert (SIRET non trouvé) | conseil_etude, formation |
| ACT_HOT_004 | Danube/Onnera, Winterhalter France | materiel, travaux |
| ACT_HOT_005 | Syclope, Ocene, CCEI, Abriblue | materiel, conseil_etude, travaux |
| ACT_HOT_006 | idverde, Sénariz, Solem | conseil_etude, travaux, materiel |
| ACT_HOT_007 | Osmozis, Odalie/Saur, FairMoove | materiel, travaux, conseil_etude |
| ACT_AGR_001 | Osmozis, Odalie/Saur | materiel, travaux |
| ACT_AGR_002 | EcoTechniques, FairMoove (+ CCI Bretagne) | conseil_etude |
| ACT_AGR_009 | FairMoove (+ CCI Bretagne) | conseil_etude |
| ACT_AGR_010 | aucun privé (CCI Bretagne seule) | conseil_etude |
| ACT_AGR_006 | EcoRecup existant, aucun second trouvé | |

### Décompte

19 cibles : 18 privées, 1 institutionnelle (CCI de région Bretagne), soit bien moins d'un tiers.
Pour rester dans la fourchette de 12 à 18, Abriblue et Solem (fabricants français sans référence hôtelière) peuvent tomber en premier ; chaque mesure garde alors au moins deux privés, sauf ACT_HOT_003.

### Mesures sous le seuil de deux privés solides

- **ACT_HOT_003 (linge à la demande)** : un seul privé pleinement vérifié, FairMoove. Hôtel Vert a une page de méthode pertinente, mais aucun SIRET trouvé (recherche par nom et mentions légales vides). Autres essais écartés : Elis (location et entretien de linge, 27 % du marché hôtelier, mais rien sur la fréquence de change ; c'est plutôt un levier d'externalisation), FTC Consulting (conseil Clef Verte et Ecolabel ; entité ambiguë : François Tourisme Consultants est fermée, FRANCOIS-TOURISME-CONSULTANTS TRAINING & AUDITING, 52219926400030, est active à Bordeaux ; aucune page sur le linge lue), Kaba Impact (formation écogestes, sans référence hôtelière ni SIRET cherché), Eco-One (centrale d'achat et place de marché, exclue). Piste suivante : obtenir le SIREN d'Hôtel Vert ou vérifier FTC Training & Auditing.
- **ACT_HOT_004 (lavage économe)** : deux privés, mais aucun fabricant français prouvé. Danube est implanté et industriel en France mais appartient au groupe espagnol Onnera, sans mention « fabriqué en France » lue. Winterhalter est une filiale allemande. Aucun fabricant français de lave-vaisselle professionnel trouvé (Colged, Hobart et Meiko sont étrangers). Rien trouvé non plus pour le dosage automatique des lessives par un acteur français.
- **ACT_HOT_006 (espaces verts)** : trois privés, mais les preuves hôtelières sont partielles. Sénariz (hôtels, mais pas d'arrosage économe explicite), idverde (référence résidence de tourisme non confirmée sur la page), Solem (aucune référence hôtelière).
- **ACT_HOT_005** : pour la couverture de bassin, aucun fabricant français avec une référence hôtelière. Oré (Nextpool) est fabriqué en France mais vise le résidentiel.
- **ACT_AGR_010** : aucun privé. Seule la CCI Bretagne a un volet collectif.
- **ACT_AGR_006** : pas de seconde entreprise trouvée. BH&L Services (Charente) cite la récupération d'eau de pluie dans ses audits hôteliers, mais son seul SIRET trouvé (88191689400010, Angoulême) est **fermé**, alors que le site affiche une adresse à Puymoyen. Écarté faute d'établissement actif.

#### Pistes écartées

- BH&L Services : audit eau hôtel, mais SIRET fermé (voir plus haut).
- reutilisationeau.fr : diagnostic eau du Grand Hôtel du Parc à Florac (48), mais exploitant introuvable (pas de mentions légales accessibles). Il se présente aussi comme mise en relation avec des professionnels agréés.
- Hydrelis (disjoncteurs d'eau, conçus en France, SIRET 45223105300029 actif) : aucune mention d'hôtel sur les pages lues.
- Elis : voir ACT_HOT_003.
- Oré : voir ACT_HOT_005.
- Eco-One : centrale d'achat et place de marché.

---

#### Aides cibles : hôtellerie (NAF 55.10Z)

Préparé le 2026-09-24. Liste de cibles vérifiées, pas des fiches. Chaque statut vient d'une page lue ce jour (sources citées). Les taux indiqués sont ceux lus sur la page ; en cas d'écart entre deux sources, l'écart est signalé.

Codes départements utilisés :
- PACA : 04, 05, 06, 13, 83, 84
- Occitanie : 09, 11, 12, 30, 31, 32, 34, 46, 48, 65, 66, 81, 82
- Centre-Val de Loire : 18, 28, 36, 37, 41, 45
- Pays de la Loire : 44, 49, 53, 72, 85
- Bourgogne-Franche-Comté : 21, 25, 39, 58, 70, 71, 89, 90
- Bretagne : 22, 29, 35, 56
- Oise : 60

#### A. Nouvelles cibles

#### AIDE_HOT_001 : Soutien à l'hébergement touristique (Région Sud)
- Porteur : Région Provence-Alpes-Côte d'Azur
- Échelle : région, `departements` PACA
- URL : https://www.maregionsud.fr/vos-aides/detail/soutien-a-lhebergement-touristique
- Statut 2026 : ouvert, dépôt toute l'année, instruction par ordre d'arrivée ; page « mis à jour le 17 avril 2026 » ; Mission Transition Écologique indique « Aide disponible ».
- Ce que dit la page : volet performance environnementale, travaux ayant trait à « la gestion environnementale et la réduction des consommations de fluides » ; subvention de 50 % des dépenses éligibles, plafond 100 000 €, dépenses minimales 15 000 € ; prime Développement durable de 5 000 € ou 10 000 € si label (Clef verte, Écolabel européen...). Hôtellerie traditionnelle indépendante éligible. Dépôt avant démarrage des travaux.
- Écart : Mission Transition Écologique affiche « jusqu'à 60 % » ; la page de la Région dit 50 %. Retenir la Région.
- Mesures : ACT_HOT_001, ACT_HOT_004, ACT_HOT_005, ACT_HOT_006
- Pourquoi : c'est l'aide régionale la plus directe pour un hôtel qui veut réduire ses consommations d'eau, dans la région la plus exposée aux restrictions estivales.

#### AIDE_HOT_002 : CAP Tourisme, aide aux projets d'hébergements touristiques (Région Centre-Val de Loire)
- Porteur : Région Centre-Val de Loire
- Échelle : région, `departements` CVL
- URL : https://www.centre-valdeloire.fr/le-guide-des-aides-de-la-region-centre-val-de-loire/aide-aux-projets-dhebergements-touristiques
- Statut 2026 : dispositif en vigueur (page du guide des aides en ligne, référencé « aide disponible » sur Mission Transition Écologique) ; pas de date de clôture publiée.
- Ce que dit la page : volet « travaux relatifs à une démarche écoresponsable » préconisés par un diagnostic environnemental (non financé par le dispositif), thèmes cités dont « économie d'eau » ; subvention de 20 % du coût éligible, plafond 20 000 € ; bonification de 7 000 € pour adhésion à un écolabel. Hôtellerie classée (après travaux), TPE/PME hors micro-entreprise.
- Mesures : ACT_HOT_001, ACT_HOT_004, ACT_HOT_005, ACT_HOT_006
- Pourquoi : cite explicitement l'économie d'eau dans les travaux aidés ; attention, le diagnostic préalable est un prérequis.

#### AIDE_HOT_003 : Pays de la Loire AGIR Tourisme (Région Pays de la Loire)
- Porteur : Région Pays de la Loire
- Échelle : région, `departements` PDL
- URL : https://www.paysdelaloire.fr/les-aides/pays-de-la-loire-agir-tourisme
- Statut 2026 : ouvert (page en ligne, flyer 2025, dépôt au fil de l'eau avant engagement des dépenses).
- Ce que dit la page : soutien prioritairement par prêts ; prêt bonifié à 1,2 % TEG (24 à 120 mois) et subvention liée possibles pour un « projet de nature à réduire de manière substantielle les consommations en eau » ; prêt standard à 2,4 % TEG ; plancher de dépenses 30 000 € pour l'hôtellerie ; études de faisabilité « transition écologique » : subvention 30 %, 15 k€ max si expertise extérieure.
- Écart : Mission Transition Écologique affiche 3,3 % TEG ; la page de la Région dit 2,4 % et 1,2 %. Retenir la Région.
- Mesures : ACT_HOT_001, ACT_HOT_004, ACT_HOT_005, ACT_HOT_006, ACT_AGR_006
- Pourquoi : seul dispositif régional trouvé qui bonifie explicitement un projet parce qu'il réduit les consommations d'eau.

#### AIDE_HOT_004 : Pass Transformation Écologique (Région Occitanie)
- Porteur : Région Occitanie
- Échelle : région, `departements` Occitanie
- URL : https://www.laregion.fr/Pass-Transformation-Ecologique (fiche détaillée : https://hubentreprendre.laregion.fr/financement/pass-transformation-ecologique, non lisible sans JavaScript)
- Statut 2026 : ouvert (page de la Région en ligne ; fiche les-aides.fr « mise à jour le 16 septembre 2026 »).
- Ce que dit la source : entreprises touristiques de 1 à 49 salariés, hors métropoles et hors zones d'activités ; dépenses eau : « système de récupération des eaux de pluie, système de réutilisation des eaux usées », étanchéité des réseaux ; dépenses propres au tourisme : végétalisation et désimperméabilisation. Exclus : hôtels non classés ou 1 étoile, hôtels de chaînes intégrées et franchisés. Montant unitaire minimal 1 000 € HT par dépense (les mousseurs ne passent pas). Justificatif des économies d'eau attendues en m3.
- Écart à trancher : les-aides.fr (16/09/2026) donne 35 % plafonné à 8 000 €, assiette minimale 5 000 € ; Mission Transition Écologique donne 50 % plafonné à 10 000 €, assiette 10 000 €. Le rédacteur doit lire la fiche HubEntreprendre ou appeler le 3010.
- Mesures : ACT_AGR_006, ACT_HOT_005 (réutilisation de l'eau de lavage des filtres, à confirmer comme « réutilisation des eaux usées ») ; ACT_HOT_006 seulement pour la végétalisation, pas pour le goutte-à-goutte (non cité).
- Pourquoi : petit montant mais seul guichet régional Occitanie qui vise l'eau pour les hôtels indépendants.

#### AIDE_HOT_005 : Aide à l'hôtellerie indépendante (Région Bourgogne-Franche-Comté)
- Porteur : Région Bourgogne-Franche-Comté
- Échelle : région, `departements` BFC
- URL : https://www.bourgognefranchecomte.fr/node/3856
- Statut 2026 : ouvert ; Mission Transition Écologique donne une validité du 22/03/2024 au 31/12/2028.
- Ce que dit la page : hôtels indépendants 3 étoiles (ou visant ce classement), hors Dijon et Besançon ; conseil 50 % (plafond 20 000 €), investissement de rénovation 30 % (plafond 180 000 €, minimum 40 000 €). Les projets doivent atteindre le niveau socle des éco-conditions régionales « énergie, déchets de chantier, eau », bonification de 5 000 € ou 10 000 € si niveau 1 ou 2 atteint dans une thématique.
- Mesures : ACT_HOT_001 (à confirmer dans le règlement d'intervention : l'eau y est une éco-condition, pas une dépense ciblée)
- Pourquoi : aide de rénovation lourde où l'eau pèse via l'éco-condition et la bonification ; à ne pas surpromettre.

#### AIDE_HOT_006 : Financement d'équipements pour des économies d'eau (Fonds mutualisé départemental de revitalisation de l'Oise, CCI Oise)
- Porteur : CCI de l'Oise et Préfecture de l'Oise
- Échelle : département, `departements: ["60"]`
- URL : https://hautsdefrance.cci.fr/solutions/fonds-mutualise-revitalisation-oise/ (détail : https://les-aides.fr/aide/cYSP3w/cci-oise/financement-d-equipements-pour-des-economies-d-eau.html)
- Statut 2026 : ouvert ; convention FMDRO renouvelée « pour la période 2024-2027 » (page CCI), fiche les-aides.fr mise à jour le 7 août 2026.
- Ce que dit la source : diagnostic eau CCI (subvention 600 € HT), puis jusqu'à 70 % des dépenses, plafond 5 000 € HT (2 lignes max) : petits équipements (mousseurs < 7 L/min, douchettes < 8 L/min, chasses double flux, compteur divisionnaire, 1 000 € max), détection et réparation de fuites (3 000 € max), eaux de pluie (2 000 € max), équipements moins consommateurs (5 000 € max). TPE/PME de moins de 30 salariés et 3,5 M€ de CA. Le projet ne doit être éligible à aucune autre aide (Région, ADEME, État).
- Mesures : ACT_HOT_001, ACT_HOT_002, ACT_HOT_004, ACT_AGR_001, ACT_AGR_006
- Pourquoi : la seule aide trouvée qui finance nommément les mousseurs, douchettes, chasses et la recherche de fuites, cœur du plan hôtelier. Portée locale mais exemplaire.

#### AIDE_HOT_007 : ECODO PRO, accompagnement aux économies d'eau (CCI Bretagne et Bretagne Compétitivité)
- Porteur : CCI de Bretagne, animé par Bretagne Compétitivité, soutien financier de l'agence de l'eau Loire-Bretagne
- Échelle : région, `departements` Bretagne
- URL : https://www.bretagne-competitivite.fr/ecodopro/ (appel 2026 : https://www.bretagne.cci.fr/actualite/developpement-durable-appel-candidatures-ecodo-pro-2026-entreprises-bretonnes-reduisez-votre-consommation-eau, protégé contre les robots, non lu en entier)
- Statut 2026 : ouvert, appel à candidatures ECOD'O PRO 2026 publié par la CCI de Bretagne (objectif 100 entreprises).
- Ce que dit la page : toutes entreprises bretonnes, tourisme compris ; diagnostic et recommandations, accompagnement individuel (réglementation, financements, solutions), ateliers collectifs ; 1 à 4 jours ; reste à charge 90 € HT par jour (moins de 50 salariés), 180 € (50 à 250), 240 € (plus de 250). Fiche pratique « Hydro-économies pour les hôtels » et guide piscine publiés.
- Mesures : ACT_AGR_002, ACT_AGR_009
- Pourquoi : accompagnement subventionné, avec des outils propres aux hôtels ; c'est un prestataire autant qu'une aide, à arbitrer (fiche aide ou fiche prestataire avec rôle `financement`).

#### AIDE_HOT_008 : Ressourc'Eau, programme de gestion durable de l'eau (CCI Pays de la Loire)
- Porteur : CCI des Pays de la Loire, cofinancé par l'agence de l'eau Loire-Bretagne et le FEDER
- Échelle : région, `departements` PDL
- URL : https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/entreprise/transition-ecologique/programme-ressourceau
- Statut 2026 : ouvert, appel à candidatures Ressourc'Eau publié le 30/01/2026 (article lié sur la même page) ; Mission Transition Écologique donne une validité jusqu'au 31/12/2027.
- Ce que dit la page : 3 à 5 jours, tarif 675 à 1 125 € HT, « prise en charge CCI, AELB et FEDER selon éligibilité » ; analyse, plan d'action priorisé, appui à la mise en œuvre, suivi à 6 mois ou un an.
- Écart : Mission Transition Écologique réserve le dispositif aux entreprises consommant entre 10 000 et 100 000 m3 par an, seuil absent de la page CCI. À confirmer : ce seuil exclurait la plupart des hôtels.
- Mesures : ACT_AGR_002, ACT_AGR_009
- Pourquoi : pendant ligérien d'ECODO PRO pour le diagnostic et le plan de gestion de l'eau.

#### AIDE_HOT_009 : Prise en charge des formations par AKTO, branche Hôtels, cafés, restaurants
- Porteur : AKTO (OPCO de la branche HCR)
- Échelle : nationale, listes vides
- URL : https://www.akto.fr/regles-de-prise-en-charge-hotels-cafes-restaurants/ (catalogue : https://espaceformation.akto.fr/)
- Statut 2026 : ouvert, « dispositions en vigueur à compter du 02/01/2026 », page mise à jour le 17/09/2026.
- Ce que dit la page : sur Espace Formation, coûts pédagogiques entièrement pris en charge ; hors catalogue, plafonds annuels par taille (2 000 € sous 11 salariés, 3 000 € de 11 à 25, 6 000 € de 26 à 49), intra 1 000 €/jour, inter 25 €/h. Mission Transition Écologique référence « Formations AKTO » avec les démarches écoresponsables.
- Mesures : ACT_HOT_002, ACT_HOT_003
- Pourquoi : la seule source de financement réaliste pour former le personnel d'étage (fuites, linge à la demande). À vérifier par le rédacteur : existence d'un module eau ou éco-gestes dans Espace Formation 2026.

### B. Demandes d'évolution sur des fiches existantes (pas de doublon)

1. **Aides des agences de l'eau (AIDE_LAI_001, 005, 006, 007, 008, 009)** : aujourd'hui `secteurs: ["industrie_laitiere"]`, donc invisibles pour l'hôtellerie. Plutôt que six fiches AIDE_HOT par agence, élargir `secteurs` (ajouter `hotellerie`, ou passer à `[]` si elles doivent servir tous les secteurs non agricoles) et ajouter les liens ACT_HOT_001, ACT_HOT_004, ACT_HOT_005, ACT_HOT_006. Éligibilité des hôtels selon les textes déjà cités dans les fiches :
   - AEAP (001) : « activité économique industrielle, commerciale ou artisanale », les hôtels entrent. Liens existants ACT_AGR_001 et ACT_AGR_002 déjà utiles.
   - AESN (006) : « entreprises et artisans du bassin », les hôtels entrent.
   - AELB QUA_1 (007) : « maîtres d'ouvrage publics ou privés, hors activité économique agricole », les hôtels entrent ; attention, les bâtiments neufs sont exclus et un plafond de 60 € par m3 économisé s'applique à partir du 1er janvier 2027.
   - AEAG (008) : activités « à caractère industriel, commercial et artisanal », mais économie d'au moins 10 % exigée si prélèvement supérieur à 5 000 m3 par an : seuls les gros hôtels passent.
   - AERMC ECO3 (009) : acteurs économiques non agricoles, économie supérieure à 2 000 m3 par an en cadre individuel : seuls les gros hôtels passent, sinon démarche collective.
   - AERM (005) : fiche écrite pour les « activités économiques industrielles et artisanales ». Hôtels probablement hors champ : à vérifier dans le 12e programme avant d'élargir.
   Aucun appel à projets d'agence ciblant le tourisme n'est ouvert en 2026 (pages AAP d'AESN, AERM, AERMC lues ; l'AAP « économies et efficience de l'eau » d'Adour-Garonne a couru du 10 mai 2023 au 30 août 2024).
2. **Prêt Vert Bpifrance** : deux fiches transversales coexistent (AIDE_AGR_004 « Prêt Vert BPI : Transition écologique » et AIDE_LAI_004 « Prêt Vert (Bpifrance) »), toutes deux avec `secteurs: []`, donc un hôtelier verra le même prêt deux fois. En fusionner une, puis ajouter les liens ACT_HOT_001, ACT_HOT_004, ACT_HOT_005 (plancher 50 000 €, microentreprises exclues).
3. **Diag Eco-Flux (AIDE_LAI_003)** : déjà lié à ACT_AGR_002, qui fait partie du plan hôtelier, donc visible. On peut ajouter ACT_HOT_007 (le diagnostic installe le suivi des flux). Rappel : 20 à 250 salariés, ce qui exclut la majorité des hôtels (16 135 employeurs sur 36 797 établissements).

### C. Pistes écartées

- **Fonds Tourisme Durable (ADEME)** : clos. Mission Transition Écologique : « Disponible jusqu'au 31/07/2024 » (https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/fonds-tourisme-durable). Les pages commerciales qui titrent « Fonds tourisme durable 2026 » sont trompeuses.
- **AMI Atout France « Gestion des ressources en eau dans le tourisme »** : édition 2024-2025, 25 lauréats désignés fin 2024 ; aucune nouvelle édition trouvée en 2026.
- **Res'Eau (CCI, PACA)** : clos, « Disponible jusqu'au 30/04/2026 » (Mission Transition Écologique).
- **Aide à l'investissement des transitions TPE (Région Nouvelle-Aquitaine)** : hébergements touristiques exclus.
- **Créer, rénover ou moderniser mon hébergement touristique (Région Auvergne-Rhône-Alpes)** : ouvert (20 à 30 %, plancher 50 000 €), mais aucune dépense eau citée sur les pages lues (page Région non lisible, fiche Infogreffe du 13/01/2026). À reprendre seulement si le règlement « Hôtellerie indépendante » cite l'eau.
- **Priorités régionales d'interventions touristiques (Hauts-de-France)** : ouvert, mais l'eau n'apparaît que dans les mots-clés de Mission Transition Écologique ; page de la Région non lisible.
- **PASS Transitions (Région Bretagne)** : investissements pour « le suivi et la réduction des consommations en énergie, eau et déchets », 20 000 à 50 000 €. Sources contradictoires sur l'éligibilité des hôtels (les-aides.fr, 2024 : secteurs de production uniquement ; un résumé de recherche cite les hôtels indépendants classés). Page de la Région protégée, non lue. À vérifier avant d'en faire une cible : ce serait une bonne aide pour ACT_HOT_001 et ACT_HOT_007.
- **Fonds ECODO d'Eau du Bassin Rennais** : subvention de 30 % pour les professionnels, plafond 75 000 € pour les piscines, sous-compteurs éligibles. Mais la zone est le syndicat (environ 76 communes d'Ille-et-Vilaine), impossible à saisir au département sans l'ouvrir à tout le 35. Écarté pour la granularité.
- **Label Clef Verte (CCI)** : un label accompagné, pas un financement.

### D. Couverture par mesure après ces cibles

| Mesure | Aides proposées |
|---|---|
| ACT_HOT_001 hydro-économes | 001 Sud, 002 CVL, 003 PDL, 005 BFC, 006 Oise, agences (évolution) |
| ACT_HOT_002 fuites | 006 Oise (détection de fuites), 009 AKTO |
| ACT_HOT_003 linge à la demande | 009 AKTO uniquement |
| ACT_HOT_004 lavage économe | 001, 002, 003, 006, agences, Prêt Vert (évolution) |
| ACT_HOT_005 piscine | 001, 002, 003, 004 Occitanie, agences, Prêt Vert |
| ACT_HOT_006 espaces verts | 001, 002, 003, 004 (végétalisation seule), agences AELB et AESN |
| ACT_HOT_007 litres par nuitée | aucune aide dédiée (voir ci-dessous) |
| ACT_AGR_001 compteurs | 006 Oise, AEAP et AELB une fois élargies |
| ACT_AGR_009 plan de gestion | 007 ECODO PRO, 008 Ressourc'Eau |
| ACT_AGR_010 démarche collective | aucune |

### E. Mesures sans aide trouvée

- **ACT_HOT_007 (télérelève, ratio par nuitée)** : aucun dispositif ne finance la télérelève pour un hôtel. Essayé : Mission Transition Écologique (API, 208 dispositifs filtrés sur eau et tourisme), agences (les lignes « moyens de mesure et de contrôle » de Rhin-Meuse visent l'industrie ; AELB exige le comptage comme condition, sans le financer seul), services d'eau (le fonds d'Eau du Bassin Rennais finance des sous-compteurs, zone trop étroite). Couverture partielle possible via Diag Eco-Flux (évolution 3) et le compteur divisionnaire de l'Oise.
- **ACT_AGR_010 (démarche collective)** : pas d'aide ouverte à un hôtel isolé. Les opérations collectives des agences (AEAP jusqu'à 50 %, AERMC via appel à projets de branche, AERM pour les microentreprises) sont portées par une CCI, une fédération ou une collectivité, pas par l'hôtel. L'AMI Atout France est clos. Piste à signaler au consultant : une démarche collective portée par l'UMIH ou le GNI départemental auprès de l'agence.
- **ACT_HOT_003** : seule la formation (AKTO) le couvre ; aucune aide à l'investissement n'a de sens pour cette mesure.

### Sources principales lues le 2026-09-24

- Mission Transition Écologique, API publique des dispositifs : https://mission-transition-ecologique.beta.gouv.fr/api/programs
- Pages officielles citées pour chaque cible ci-dessus.
- Fonds Tourisme Durable clos : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/fonds-tourisme-durable ; https://aides-territoires.beta.gouv.fr/aides/3e91-fonds-tourisme-durable-restaurateurs-hebergeu/
- AMI Atout France : https://www.atout-france.fr/fr/informations/gestion-de-leau
