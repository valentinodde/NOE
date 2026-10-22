# Cibles de fiches : grandes cultures

Étape 5 du skill `nouveau-secteur`. Statut : brouillon. Liste validée le 2026-10-15, avec Otech, sous réserve d'une recherche complémentaire sur les trous (section 4).

Le rapport de couverture (`rapport_couverture.md`) part de rien pour le secteur : les dix mesures
ACT_GCU et la démarche collective n'ont ni prestataire ni aide. Seules les fiches transversales
sont visibles (Hydros sur le plan sécheresse, Willie sur le comptage, Fontaine Ingénierie sur
l'eau de pluie, Diag Eco-Flux et Ressourc'Eau sur l'audit), sur des mesures que le questionnaire
ne propose pas, sauf le plan sécheresse.

Candidats trouvés par trois recherches parallèles (irrigation ; pratiques culturales et haies ;
stockage, aire de lavage, collectif et aides). Chaque SIRET a été lu avec `outils_fiches.py
rechercher-entreprise` (état A, siège sauf mention) et chaque URL avec `verifier-url` (200 ; le
site de l'agence Adour-Garonne renvoie une erreur de chaîne de certificats en Python mais 200 en
curl). Les rédacteurs revérifient tout. Notes brutes : scratchpad de la session
(`cibles_irrigation.md`, `cibles_pratiques.md`, `cibles_stockage_aides.md`).

**Département de test : 32 (Gers).** Premier département du secteur (5 860 établissements en
01.11Z, 01.12Z, 01.15Z, 01.16Z et 01.19Z, dont 178 employeurs), maïs et semences irrigués, agence
de l'eau Adour-Garonne, région Occitanie, organisme unique Neste et rivières de Gascogne porté par
la chambre d'agriculture.

## 0. Constat de marché

- **Irrigation : un groupe dominant.** Irrifrance (Paulhan, 34) est le seul fabricant français
  d'enrouleurs, de pivots et de rampes, et a racheté France Pivots en octobre 2025, qui détient
  lui-même Challenge Agriculture (tensiométrie). Trois fiches sur les mesures 001 à 003 relèvent
  donc d'un même groupe. Le seul autre fabricant de pivots, Otech (64), appartient à un groupe
  italien contrôlé par un fonds américain.
- **Réglage du matériel (ACT_GCU_002)** : comblé en `travaux` par CG Irrigation (réglage et
  entretien d'enrouleurs dans le Sud-Ouest). Personne ne vend un diagnostic en `conseil_etude` à un
  exploitant seul : Rives & Eaux ne fait d'audits qu'aux collectifs.
- **Goutte-à-goutte en grandes cultures (ACT_GCU_004)** : aucun installateur du Sud-Ouest avec une
  référence en grandes cultures (Modern'irrigation 82, seul cité par la presse, est fermé). Netafim
  France, filiale d'un groupe israélien, reste l'installateur de référence, à défaut ; Rives & Eaux
  fournit et installe du goutte-à-goutte pour les irrigants individuels.
- **Assolement et variétés (ACT_GCU_005, 006)** : aucun bureau d'études ne vend un conseil
  d'assolement fondé sur l'eau ; sur l'esquive, seuls des semenciers ont une page dédiée.
- **Haies (ACT_GCU_010)** : aucune entreprise privée de plantation agricole dans le Gers. L'offre
  locale est associative (Arbre et Paysage 32, l'agriculteur plante lui-même).
- **Aire de lavage (ACT_GCU_009)** : la liste officielle des procédés est l'avis du 30 août 2018
  (BO du ministère n° 2018/9), toujours en vigueur ; huit procédés y valent en grandes cultures.
  Trois entreprises privées retenues (Adequabio et Axe Environnement, détenteurs de procédés
  reconnus, et Vento-Sol, hors liste), aucune implantée dans le Sud-Ouest. Aucune aide 2026 ne
  finance l'aire dans le Gers : le Dispositif unique de la Région l'exclut (annexes de l'appel
  2026), l'agence Adour-Garonne ne la cite pas (seule piste, à demander à la délégation : le taux
  Ecophyto de 70 % en captage ou démarche territoriale).
- **Stockage (ACT_GCU_008)** : bien couvert en bureaux d'études, terrassiers et étancheurs locaux,
  aucun fabricant français de géomembrane avec une référence agricole.

## 1. Prestataires, nouvelles fiches

| Id | Structure | Type | Échelle | Mesures (rôles) | SIRET |
|---|---|---|---|---|---|
| PREST_GCU_001 | Weenat, Nantes (44) | solution_numerique | nationale | GCU_001 (materiel), GCU_004 (materiel) | 80345028700047 |
| PREST_GCU_002 | Sencrop (groupe Isagri), Tillé (60) | solution_numerique | nationale | GCU_001 (materiel) | 81779128800050 |
| PREST_GCU_003 | Challenge Agriculture (groupe Irrifrance), Sabres (40) | solution_numerique | nationale | GCU_001 (materiel, conseil_etude, formation), GCU_004 (conseil_etude) | 33920572600062 |
| PREST_GCU_004 | Chambre d'agriculture du Gers, Auch (32) | chambre_consulaire | 32 | GCU_001 (conseil_etude), GCU_005 (conseil_etude), AGR_010 (conseil_etude) | 18320002100016 |
| PREST_GCU_005 | Irrifrance Groupe, Paulhan (34) | equipementier | nationale | GCU_003 (materiel), GCU_002 (materiel) | 42188559100048, à revérifier |
| PREST_GCU_006 | France Pivots (groupe Irrifrance), Sabres (40) | equipementier | nationale | GCU_003 (materiel, travaux), GCU_002 (travaux) | 39506690500013 |
| PREST_GCU_007 | Netafim France, Gardanne (13) | installateur (filiale d'un groupe israélien) | nationale | GCU_004 (materiel, travaux) | 37955519600078 |
| PREST_GCU_008 | Agro d'Oc, union des CETA d'Oc, Monferran-Savès (32) | cooperative | 32 | GCU_007 (conseil_etude, formation), GCU_005 (conseil_etude), GCU_006 (conseil_etude) | 44198615500014 |
| PREST_GCU_009 | Lucile Pérès, conseillère indépendante, Vic-Fezensac (32) | bureau_etudes | Occitanie | GCU_005, GCU_007 (conseil_etude) | 89092656100014 |
| PREST_GCU_010 | RAGT Semences, Rodez (12) | equipementier | nationale | GCU_005, GCU_006 (materiel, conseil_etude) | 43189975600016 |
| PREST_GCU_011 | Lidea France, Lescar (64) | equipementier | nationale | GCU_006 (materiel, conseil_etude) | 42329625000016 |
| PREST_GCU_012 | Agrisem (semoirs Boss), Ancenis (44) | equipementier | nationale | GCU_007 (materiel) | 38999673700026, entité à trancher |
| PREST_GCU_013 | Ver de Terre Production, Mesnils-sur-Iton (27) | organisme_formation | nationale, en ligne | GCU_007 (formation) | 82497837300028 |
| PREST_GCU_014 | MyTree, Paris (75) | bureau_etudes | nationale | GCU_010 (conseil_etude, materiel) | 79455488100035 |
| PREST_GCU_015 | Agroof (SCOP), Boisset-et-Gaujac (30) | bureau_etudes | Occitanie, PACA | GCU_010 (conseil_etude, formation) | 51024427000045 |
| PREST_GCU_016 | Arbre et Paysage 32, Auch (32) | association | 32 | GCU_010 (conseil_etude, materiel, formation) | 39860589900044 |
| PREST_GCU_017 | Rives & Eaux du Sud-Ouest (ex-CACG, SEM), Tarbes (65) | bureau_etudes | Sud-Ouest | GCU_008 (conseil_etude, travaux), GCU_004 (materiel, travaux), AGR_010 (conseil_etude) | 59278023300017 |
| PREST_GCU_018 | Occi PRO Environnement, Grisolles (82) | installateur | 82, 31, 32, 81 | GCU_008 (travaux) | 83399724000019 |
| PREST_GCU_019 | TPF 32, Armous-et-Cau (32) | installateur | 32 et 50 km | GCU_008 (travaux) | 94881320900012 |
| PREST_GCU_020 | Tagliaferi et Fils, Lectoure (32) | installateur | 32 | GCU_008 (travaux) | 43988301800012 |
| PREST_GCU_021 | Vento-Sol (procédé Ecobang), Castres (81) | equipementier, fabrication à confirmer | nationale | GCU_009 (materiel) | 81377683800019 |
| PREST_GCU_022 | Otech (groupe Farmfront), Puyoô (64) | equipementier | nationale | GCU_003 (materiel) | 39053006100048 |
| PREST_GCU_023 | Adequabio, Pertuis (84) | bureau_etudes | nationale | GCU_009 (conseil_etude, travaux, materiel) | 83760857900012 |
| PREST_GCU_024 | Axe Environnement, Romilly-sur-Seine (10) | installateur | nationale | GCU_009 (materiel, travaux) | 44422505600043 |
| PREST_GCU_025 | CG Irrigation, Aiguillon (47) | installateur | Sud-Ouest, Gers compris | GCU_002 (travaux), GCU_003 (materiel, travaux) | 38754367100011 |

Pourquoi chacun, en une phrase :
- **001 Weenat** : tensiomètres et sondes capacitives reliés à un bilan hydrique, exploités par l'irrigant, « fabrication 100 % française », a repris CoRHIZE (Agen), page goutte-à-goutte enterré sur maïs.
- **002 Sencrop** : stations météo et sonde Soilcrop qui calculent le bilan hydrique, déployées en 2025 par Lur Berri, coopérative maïsicole du Sud-Ouest.
- **003 Challenge Agriculture** : tensiométrie Watermark posée chez l'irrigant avec conseil hebdomadaire d'un expert, page maïs (« 1,5 tour d'eau » économisé).
- **004 Chambre du Gers** : pose de sondes et bulletin individuel (programme Ogaya), prestation payante « Top cultures » sur l'assolement, porte l'organisme unique Neste et rivières de Gascogne.
- **005 Irrifrance** : enrouleurs, pivots et rampes conçus et fabriqués à Paulhan, régulation électronique de la vitesse (Irridoseur, Irricontrol), deux revendeurs agréés dans le Gers.
- **006 France Pivots** : fabrique et pose des pivots basse pression, dépannage en saison.
- **007 Netafim France** : a fourni et monté le goutte-à-goutte enterré sur maïs de l'essai 2024 de la chambre des Landes. Retenu à défaut de français.
- **008 Agro d'Oc** : union de CETA en grandes cultures du Gers, 25 ans d'essais en agriculture de conservation, projet « SD EAU » cofinancé par l'agence Adour-Garonne, Qualiopi.
- **009 Lucile Pérès** : seul conseil agronomique privé indépendant de la vente trouvé dans le Gers, page de prestations sur l'assolement et les couverts.
- **010 RAGT Semences** : sélection du sorgho sur la tolérance au stress hydrique, variétés classées par précocité avec conseils de dates de semis par zone, siège et sélection à Rodez.
- **011 Lidea France** : gamme maïs choisie selon le bilan hydrique de la parcelle (« Hydro profil »), cinq conseillers terrain dans le Sud-Ouest.
- **012 Agrisem** : concepteur et constructeur de semoirs de semis direct sous couvert (Boss HD), y compris en conditions très sèches.
- **013 Ver de Terre Production** : formation en ligne pour les grandes cultures (couverts, semis direct, matière organique), finançable par VIVEA.
- **014 MyTree** : conçoit des haies brise-vent pour grandes cultures, fournit plants et protections, encadre le chantier et suit trois ans.
- **015 Agroof** : bureau d'études agroforestier occitan, conception de projets et formation.
- **016 Arbre et Paysage 32** : visite-conseil, plants locaux, paillage posé à la dérouleuse, formation « agroforesterie en grandes cultures » face aux sécheresses.
- **017 Rives & Eaux du Sud-Ouest** : études et suivi de retenues de substitution, contrats d'accès à l'eau et conseil aux irrigants individuels, fourniture et installation de goutte-à-goutte, gestion du système Neste.
- **018 Occi PRO Environnement** : étancheur certifié Asqual, cite le stockage de l'eau d'irrigation et les bassins collinaires, intervient dans le Gers.
- **019 TPF 32** : terrassier pour agriculteurs, création de bassins d'irrigation et curage de lacs.
- **020 Tagliaferi et Fils** : création et curage de réserves d'eau et de lacs collinaires (preuve moyenne : pas de client agricole cité).
- **022 Otech** : fabricant de pivots à Puyoô (64), groupe Farmfront (Milan) ; ajouté pour que GCU_003 ne repose pas sur le seul groupe Irrifrance.
- **023 Adequabio** : conçoit et installe des aires de lavage sur mesure (grandes cultures citées), détient le procédé PhytoBarre reconnu par l'avis du 30 août 2018 ; références surtout viticoles, aucune dans le Sud-Ouest.
- **024 Axe Environnement** : détient deux procédés reconnus en grandes cultures (BF Bulles, Phytosec), a réalisé la station collective de Teuillac (33) financée par Adour-Garonne. Son site est en partie une boutique : la fiche le présente comme concepteur, pas comme revendeur.
- **025 CG Irrigation** : pose et entretient enrouleurs et pivots (marque italienne Ocmis) chez des producteurs de maïs et de céréales du Sud-Ouest, réglage de la vitesse et de la dose. Site en JavaScript, à lire dans un navigateur.
- **021 Vento-Sol** : plus de 500 dispositifs de traitement des effluents phytosanitaires installés, adaptables à une aire existante.

### Lien à ajouter sur une fiche existante

- **PREST_VIA_012 Step Concept** (Villematier, 31), fiche publiée dans `prestataires_industrie_viande.json` : ajouter GCU_008 (travaux) et le secteur `grandes_cultures` (« étanchéité d'un bassin d'irrigation 8 000 m3 », EPDM certifié Asqual). Une fiche publiée ne se modifie pas depuis ce staging : demande d'évolution, à faire au moment de la promotion.

### En réserve, non rédigés sauf décision contraire

- **Agralis** (47, 44508858600026) : distributeur et poseur de sondes Sentek (australiennes), installations dans le Gers. Pour GCU_001.
- **Irrigadour** : organisme unique de l'Adour, pour un établissement du bassin de l'Adour (AGR_010).

### Décompte

25 nouvelles fiches prestataires : 22 entreprises privées (dont une entrepreneuse individuelle et
une SEM), une coopérative, une chambre consulaire et une association. Institutionnels : 2 sur 25,
sous le tiers. Couverture par mesure sectorielle :

| Mesure | Privés | Autres | Rôles couverts |
|---|---|---|---|
| GCU_001 Pilotage | Weenat, Sencrop, Challenge | Chambre | materiel, conseil_etude, formation |
| GCU_002 Réglage | Irrifrance, France Pivots, CG Irrigation | | materiel, travaux (pas de conseil_etude) |
| GCU_003 Modernisation | Irrifrance, France Pivots, Otech, CG Irrigation | | materiel, travaux |
| GCU_004 Goutte-à-goutte | Netafim, Rives & Eaux, Weenat, Challenge | | materiel, travaux, conseil_etude |
| GCU_005 Assolement | Lucile Pérès, RAGT | Agro d'Oc, Chambre | conseil_etude, materiel |
| GCU_006 Esquive | RAGT, Lidea | Agro d'Oc | materiel, conseil_etude |
| GCU_007 Sols et couverts | Lucile Pérès, Agrisem, Ver de Terre | Agro d'Oc | conseil_etude, materiel, formation |
| GCU_008 Stockage | Rives & Eaux, Occi PRO, TPF 32, Tagliaferi (+ Step Concept) | | conseil_etude, travaux |
| GCU_009 Aire de lavage | Adequabio, Axe Environnement, Vento-Sol | | conseil_etude, travaux, materiel |
| GCU_010 Haies | MyTree, Agroof | Arbre et Paysage 32 | conseil_etude, materiel, formation |
| AGR_010 Collectif | Rives & Eaux | Chambre | conseil_etude |

## 2. Aides, nouvelles fiches

| Id | Dispositif | Porteur, échelle | Mesures | État |
|---|---|---|---|---|
| AIDE_GCU_001 | Sobriété et économies d'eau en agriculture | agence Adour-Garonne (AEAG) | GCU_001, 002, 003, 008, AGR_009, AGR_010 | ouvert, programme 2025-2030 |
| AIDE_GCU_002 | Aides directes aux agriculteurs (pilotage, matériel agroécologique, haies) | AEAG | GCU_001, 007, 010 | ouvert |
| AIDE_GCU_003 | Préservation des captages et des milieux | AEAG | GCU_005, 007, 010, GCU_009 à confirmer | ouvert |
| AIDE_GCU_004 | Déconnexion des retenues (délibération 26-18) | AEAG | GCU_008 | ouvert |
| AIDE_GCU_005 | Dispositif unique, investissements dans les exploitations (FEADER 73.01) | Région Occitanie, FEADER, agences | GCU_001, 003, 007 | ouvert, dépôt jusqu'au 30/10/2026 |
| AIDE_GCU_006 | Pass petits investissements, volet agroéquipements | Région Occitanie, cofinancé AEAG | GCU_001, 003, 007 | ouvert jusqu'au 30/11/2026 |
| AIDE_GCU_007 | Aide aux infrastructures hydrauliques, volet individuel (FEADER) | Région Occitanie, FEADER | GCU_008, GCU_003 à confirmer | appel annuel, clôture 23/10/2026 |
| AIDE_GCU_008 | Intervention régionale pour la gestion de l'eau agricole | Région Occitanie | GCU_008, AGR_010 | permanent (règlement 2021) |
| AIDE_GCU_009 | Investissements en exploitation pour la protection contre la sécheresse | FranceAgriMer, nationale | GCU_004, GCU_001 | ouvert jusqu'au 31/12/2026 |
| AIDE_GCU_010 | Fonds hydraulique agricole (Plan eau) | État, DRAAF Occitanie | GCU_008 | appel annuel, session 2026 close le 30/06 |
| AIDE_GCU_011 | Contrat agriculture durable | Région Occitanie | GCU_002, 005, 006, 007, AGR_009 | permanent |
| AIDE_GCU_012 | MAEC, dont « eau, gestion quantitative, grandes cultures » | État, FEADER, dans les territoires de projet (PAEC) | GCU_005, 007, 001 | annuel, avec la déclaration PAC |
| AIDE_GCU_013 | FOSTER, garantie gratuite d'emprunt | Région Occitanie, FEADER | GCU_003, 004, 008, 009, 010 | ouvert |

Écartées : investissement plantation du Pacte en faveur de la haie et « Plantons des haies »
(clos), appel régional 2022 aux aires de lavage collectives (clos), agroforesterie
intraparcellaire de la Région (arbres dans la parcelle, pas de haies de bordure), guichets
FranceAgriMer vergers et fruits et légumes (hors filière).

Mesures sans aide dédiée : **GCU_006 Esquive** et **GCU_002 Réglage** (accompagnement seulement,
par le contrat agriculture durable), **GCU_009 Aire de lavage** (aucune aide 2026 confirmée, seule
la garantie FOSTER et la piste « captages » de l'agence).

## 3. Réserves à trancher avant rédaction

1. **Groupe Irrifrance** : Irrifrance, France Pivots et Challenge Agriculture sont un seul groupe.
   Proposition : garder les trois (fabricant, poseur, tensiométrie ne font pas le même métier) et
   ajouter Otech sur GCU_003 pour qu'une mesure ne repose pas sur un seul groupe.
2. **SIRET d'Irrifrance** : une société IRRIFRANCE (10808550700011) a été créée le 2026-07-22 à la
   même adresse avec les mêmes dirigeants. Le rédacteur choisit l'établissement actif qui porte
   l'activité.
3. **Lucile Pérès** est une entrepreneuse individuelle : la fiche porte le nom d'une personne.
4. **Agrisem** : l'entité d'Ancenis est en commerce de gros ; les semoirs seraient fabriqués par
   Agrisem Conservation Farming à Bournel (47, 53214790700010), d'après des sources secondaires.
5. **MyTree** : modèle en partie financé par des entreprises, à vérifier que ce n'est pas d'abord
   une plateforme de financement ; aucun projet visible en Occitanie.
6. **Vento-Sol** : procédé hors de la liste officielle des procédés de traitement des effluents
   phytosanitaires, fabrication en France non établie. À retenir seulement si la fiche le dit.
7. **Trous restants après la recherche complémentaire** : aucune aide pour GCU_009, aucun
   installateur local de goutte-à-goutte en grandes cultures, aucun `conseil_etude` pour GCU_002.
   Signalés à la revue.
8. **Liste officielle des procédés** : l'annexe I de l'avis du 30 août 2018 est un tableau scanné,
   à relire par les rédacteurs d'Adequabio, d'Axe Environnement et de Vento-Sol.

## 4. Recherche complémentaire (validée en principe le 2026-10-15)

Trois fiches ajoutées (023 à 025) et un lien GCU_004 sur Rives & Eaux. Écartés : Oceania
Environment, Xpertus, Pantek, Aubépure, Paetzold (procédés hors grandes cultures ou sans site),
irrigants du 47 et du 40 sans site, Verdier Irrigation (65, sans site), Rivulis Irrigation
(Lespinasse, 31 : groupe étranger sans référence maïs, en réserve). Notes : `cibles_trous.md`
du scratchpad. Liste officielle des procédés : avis du 30 août 2018,
https://aida.ineris.fr/reglementation/avis-300818-relatif-a-liste-procedes-traitement-effluents-phytopharmaceutiques
