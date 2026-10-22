# Cibles de fiches : hôpitaux et cliniques

Étape 5 du skill `nouveau-secteur`. Statut : brouillon. Liste validée le 2026-10-15 telle quelle,
extensions des fiches publiées traitées en demandes d'évolution (section 2 et 4).

Le rapport de couverture (`rapport_couverture.md`) montre que sur les douze mesures
visibles, seules les transversales ont des fiches : audit eau (Hydros, Diag Eco-Flux,
Ressourc'Eau), plan de gestion (Hydros, Atelier Compte-Gouttes), compteur par usage
(Willie), eau de pluie (EcoRecup, Fontaine Ingénierie, Prêt Vert). Les sept mesures
`ACT_HOP_*` et la démarche collective n'ont ni prestataire ni aide.

Recherches menées le 2026-10-15 par trois agents. Chaque SIRET a été lu avec
`outils_fiches.py rechercher-entreprise` (état A), sauf mention. Une partie des preuves
hospitalières vient des marchés publics : données essentielles de la commande publique
(DECP consolidées, data.gouv, jeu `608c055b35eb4e6ee20eb325`, identifiant `uid` cité) et
avis d'attribution du BOAMP. Le rédacteur de fiche doit rouvrir chaque URL avant de la
citer. Département de test : 13.

## 1. Prestataires nouveaux

| Id | Structure | SIRET | Type | Mesures et rôles | Échelle | URL de départ | Preuve hospitalière | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| PREST_HOP_001 | OFIS, Office d'ingénierie sanitaire (groupe Veolia) | 42102587500186 (siège), 42102587500152 (Aix-en-Provence) | bureau_etudes | ACT_HOP_001 conseil_etude, formation ; ACT_AGR_001 conseil_etude | nationale, établissement dans le 13 | https://www.ofis.veolia.com (403 aux robots) | DECP : CHU de Saint-Étienne 2022, « diagnostic, expertise technique et hydraulique des réseaux d'eau sanitaire pour la maîtrise du risque légionelle » (uid 2642003040001420222022S2623500_71321300) ; GHT Vosges 2025, audit des réseaux ECS et EF (uid 2000294450010925-1089333_71321300) ; CHR Metz-Thionville 2025, cartographie des usages de l'eau (uid 2657028030051020250000000445_71354100) | Diagnostic hydraulique des réseaux sanitaires et cartographie des usages, réalisés pour des hôpitaux. |
| PREST_HOP_002 | Aquafluence | 48416655800052 | bureau_etudes | ACT_HOP_001 conseil_etude, formation | nationale | https://www.aquafluence.fr/ | https://www.aquafluence.fr/nos-références : CH de Beauvais, Clermont, Noyon, Méru, cliniques, formations pour l'ARS PACA | Audit légionelles avec modélisation hydraulique du bouclage, références hospitalières nommées. |
| PREST_HOP_003 | Provence Maintenance Services (Vinci Facilities) | 43389978800072 | installateur | ACT_HOP_001 travaux ; ACT_HOP_003 travaux | régionale, couvre le 13 | à trouver par le rédacteur (site Vinci Facilities) | DECP : AP-HM 2021, 48 mois, « conduite, entretien et maintenance des installations d'eau sanitaire à l'intérieur des bâtiments hospitaliers » (uid 26130008100484201977_71800000) | Exploitant qui exécute purges, suppression des bras morts et remplacement de robinetterie à l'AP-HM. |
| PREST_HOP_004 | Société des Eaux de Marseille (groupe Eaux de Marseille) | 05780615000488 | bureau_etudes | ACT_HOP_002 conseil_etude ; ACT_HOP_006 conseil_etude ; ACT_HOP_007 conseil_etude | régionale (13) | https://www.eauxdemarseille.fr/nos-offres/recherche-et-detection-de-fuites/ | Page recherche de fuites qui cite les hôpitaux parmi les clients ; étude 2025 de réutilisation des eaux de dialyse de l'hôpital de la Conception (AP-HM), avec la Société du Canal de Provence, qui a aussi analysé les médicaments de ces effluents : https://www.reset-bfc.fr/fileadmin/mediatheque_reset/actualites/20251113-3eme_rencontre_regionale/20251113_presentation_recuperation_eau_dialyse.pdf | Prestataire local de recherche de fuites sur réseaux privés, et auteur de la seule étude française nommée de réutilisation des rejets d'osmose d'un hôpital. Le lien à ACT_HOP_007 est fragile (pas d'offre publiée de caractérisation d'effluents). |
| PREST_HOP_005 | SADE, Compagnie générale de travaux hydrauliques (groupe Veolia) | 56207750302584 (siège ; établissement du 13 fermé) | installateur | ACT_HOP_002 travaux | nationale | https://www.sade-cgth.fr/ | DECP : AP-HP 2024, renouvellement des canalisations d'eau potable du site Tenon, 699 518 € (uid 267500452005242539453_45232410) | Réparation et renouvellement des réseaux enterrés d'un grand site hospitalier. |
| PREST_HOP_006 | Adeunis | 43019049600025 | equipementier | ACT_AGR_001 materiel ; ACT_HOP_002 materiel | nationale | https://www.adeunis.com/ | https://www.adeunis.com/cas-client-iot-energie-hopital/ (CHU de Clermont-Ferrand, capteurs sur compteurs d'eau remontés à la GTC) | Capteurs conçus et fabriqués en France (communiqués AMF 2023, pas de page usine : à confirmer par le rédacteur) pour suivre les index et les débits de nuit. |
| PREST_HOP_007 | Ubigreen | 78891923100076 | solution_numerique | ACT_AGR_001 materiel, conseil_etude ; ACT_HOP_002 conseil_etude | nationale | https://www.ubigreen.com/ | https://www.ubigreen.com/management-energetique-sante/ (AP-HP depuis 2018, 38 hôpitaux, sous-comptage et alertes de consommation d'eau inhabituelle) | Plateforme de suivi multi-fluides avec alertes de surconsommation, déployée en hôpital. |
| PREST_HOP_008 | Hemotech (Pollet Medical Group, Belgique) | 34821460200024 | installateur | ACT_HOP_004 conseil_etude, travaux, formation | nationale | https://hemotech.fr/ | https://hemotech.fr/bureau-detudes-traitement-deau/ (réhabilitation de CHU de plus de 40 postes) et https://hemotech.fr/le-100eme/ | Bureau d'études intégré qui dimensionne, installe et maintient les osmoseurs de dialyse. Osmoseurs fabriqués en Allemagne (HERCO), à dire dans la fiche. |
| PREST_HOP_009 | Fresenius Medical Care France (filiale d'un groupe allemand) | 65202528900099 | installateur | ACT_HOP_004 materiel, travaux | nationale | https://freseniusmedicalcare.com/fr-fr/ | Titulaire de l'accord-cadre UniHA 2024-2028 sur les centrales de traitement d'eau d'hémodialyse : https://www.uniha.org/marche/traitement-deau-dialyse-m-2937 | Fournisseur retenu par la centrale d'achat des CHU pour remplacer des chaînes complètes. Alternative : Vantive SAS (97817958800014), co-titulaire. |
| PREST_HOP_010 | EnveneO Conseil | 91047429500011 | bureau_etudes | ACT_HOP_005 conseil_etude, formation | nationale | https://www.enveneo.fr/ | Accompagnement de la blanchisserie du CHU de Nantes (même site) | Cabinet spécialisé dans les procédés de blanchisserie (diagnostic, assistance à maîtrise d'ouvrage, réglages). Références surtout chiffrées sur le gaz : le volet eau est à confirmer. |
| PREST_HOP_011 | JENSEN France (filiale du groupe belge Jensen) | 63200026100057 | installateur | ACT_HOP_005 materiel, travaux | nationale | https://www.jensen-group.com/fr | Tunnels de lavage du CHU de Besançon et du CH de Cambrai : https://www.entretien-textile.fr/index.php/actualite/blanchisseries-industrielles-hospitalieres/le-chu-de-besancon-retient-jensen-pour-son-train-de-lavage | Constructeur de tunnels de lavage installés en blanchisserie hospitalière, baisse d'eau constatée à Besançon. |
| PREST_HOP_012 | Ecolab (groupe américain) | 38174333500220 | installateur | ACT_HOP_005 materiel | nationale | https://www.ecolab.com/fr-fr/ (403 aux robots) | Water Optimizer Ultimate à la blanchisserie hospitalière GCS Santalys (La Garde, 83) : de 5,82 à 3,25 L/kg, environ 11 700 m³ par an, évaluation présentée par le CTTN : https://achat-logistique.info/logistique/blanchisseries-la-reutilisation-des-eaux-petit-eldorado/ | Recyclage des eaux de rinçage de tunnel, référence hospitalière chiffrée dans la région Sud. |
| PREST_HOP_013 | Matachana France (filiale du groupe espagnol Matachana) | 34172237900045 | installateur | ACT_HOP_005 materiel, travaux | nationale | https://www.matachana.com/fr/ | Poster SF2S 2024, stérilisation du CHU de Rennes : laveurs-désinfecteurs de 225 à 124,5 L par cycle : https://www.sf2s-sterilisation.fr/wp-content/uploads/2024/11/PO-53.pdf | Seule référence chiffrée trouvée pour l'eau en stérilisation. |
| PREST_HOP_014 | Sanivap (groupe Oxypharm) | 39956733800062 (production, Lozanne), siège 39956733800054 | equipementier | ACT_HOP_007 materiel | nationale | fiche technique : https://frenchhealthcare.fr/wp-content/uploads/2025/04/FT-SP400-Juillet-2019.pdf (sanivap.fr en erreur SSL) | CH Compiègne-Noyon (vapeur à la place du détergent-désinfectant, achat aidé par l'agence de l'eau) : https://www.cpias.chu-lille.fr/wp-content/uploads/sites/15/2023/10/231017-Dr-Boris-JOLIBOIS-Topo_Sanivap.pdf ; clinique Saint-Augustin de Bordeaux (Elsan) | Bionettoyage vapeur fabriqué en France, qui réduit les désinfectants envoyés à l'égout. Le retour de Compiègne signale des limites (formation, réservoirs) : à dire dans la fiche. |
| PREST_HOP_015 | EnvirobatBDM (association) | 48051220100033 | association | ACT_HOP_007 conseil_etude, formation ; ACT_AGR_010 conseil_etude ; ACT_AGR_002 conseil_etude | régionale (04, 05, 06, 13, 83, 84) | https://envirobatbdm.eu/ | https://envirobatbdm.eu/sites/default/files/2026-05/2026_EvBDM_Conseiller-CTEES_V2.pdf ; lauréat avec l'ARS PACA de l'AMI de l'agence RMC : http://fhf-paca.fr/storage/app/uploads/public/69c/fbe/2f5/69cfbe2f513bc140611411.pdf | Réalise lui-même diagnostics et accompagnement des établissements de santé de la région Sud sur la sobriété hydrique et les micropolluants, et anime le réseau (environ 650 établissements). Seul institutionnel de la liste. Source principale : une offre d'emploi de mai 2026, dispositif qui démarre. |

## 2. Prestataires existants à étendre (demandes d'évolution sur les seeds publiés)

Ces fiches sont publiées dans les fichiers d'autres secteurs. Les modifier depuis ce
staging obligerait à y recopier `prestataires_hotellerie.json` ou
`prestataires_industrie_viande.json`, que la promotion recopierait ensuite en entier
(fiches brouillon comprises). Elles sont donc proposées en évolution, à appliquer à la main
ou lors d'une passe transversale.

| Fiche | Évolution | Preuve |
|---|---|---|
| PREST_HOT_002 Delabie (fabricant, Friville-Escarbotin) | ajouter `hopitaux` aux secteurs ; liens ACT_HOP_001 materiel (robinetterie électronique à purge automatique, rinçage d'environ 60 s toutes les 24 h) et ACT_HOP_003 materiel | https://www.delabie.fr/nos-produits/robinetterie-pour-hopitaux ; références santé dont l'AP-HM et la clinique chirurgicale de La Ciotat : https://www.delabie.fr/le-groupe/delabie-dans-le-monde/nos-realisations/sante |
| PREST_HOT_003 Les Robinets Presto (fabricant, Saint-Georges-de-Didonne) | ajouter `hopitaux` ; lien ACT_HOP_003 materiel | https://presto.fr/fr/projet/soin/ (CHU de Bordeaux, CH de Grasse) ; gamme Sanifirst Hoptim, commande au coude, brise-jet : https://presto.fr/fr/robinetteries/presto-sanifirst-hoptim/ |
| PREST_VIA_010 Ecofilae (bureau d'études, Montpellier) | ajouter `hopitaux` ; lien ACT_HOP_006 conseil_etude | spécialiste des eaux non conventionnelles et des dossiers réglementaires ; aucune référence santé trouvée |

Sans ces extensions, ACT_HOP_003 n'a qu'un installateur (PREST_HOP_003) et ACT_HOP_006 une
seule entreprise (PREST_HOP_004) : la couverture affichée au relecteur en tiendra compte.

## 3. Aides nouvelles

| Id | Dispositif | Porteur | Échelle | Bénéficiaires (selon la source) | Mesures | État | URL |
|---|---|---|---|---|---|---|---|
| AIDE_HOP_001 | IND2, opérations groupées sectorielles « Établissements de santé et médico-sociaux » | agence de l'eau RMC ; porteurs d'opération lauréats : ARS PACA, ARS Auvergne-Rhône-Alpes, Envirobat Occitanie, Pôle énergie BFC | `agences: ["AERMC"]`, départements des quatre régions lauréates (PACA 04, 05, 06, 13, 83, 84 ; AURA 01, 03, 07, 15, 26, 38, 42, 43, 63, 69, 73, 74 ; Occitanie 09, 11, 12, 30, 31, 32, 34, 46, 48, 65, 66, 81, 82 ; BFC 21, 25, 39, 58, 70, 71, 89, 90) | « acteurs économiques non agricoles » pour les travaux ; secteur lauréat nommé « Établissements de santé et médico-sociaux ». Taux à confirmer pour un hôpital public | ACT_AGR_002, ACT_AGR_006, ACT_AGR_010, ACT_HOP_002 à 007 ; ACT_HOP_001 si l'agence confirme. Pas ACT_AGR_001 (« pose de compteurs seuls » inéligible) | AMI clos (lettres d'intention 2025), dépôt des demandes de travaux jusqu'au 31/12/2028, nouvel AMI annoncé 2026 ou 2027 | https://www.eaurmc.fr/jcms/pro_131706/fr/ami-operations-groupees-sectorielles-reduction-des-emissions-dispersees-de-micropolluants-et/ou-realisation-d-economies-d-eau ; lauréats : https://www.eaurmc.fr/upload/docs/application/pdf/2026-03/liste_des_laureats_ami_sectoriel.pdf ; fiche IND2 : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf |
| AIDE_HOP_002 | PLUV, gestion intégrée des eaux pluviales en zone urbaine | agence de l'eau RMC | AERMC | « Acteurs économiques non agricoles (industries, commerces, bailleurs sociaux, établissements de soins…) » et établissements publics | ACT_AGR_006 (stockage pour réutilisation avec surverse vers un ouvrage d'infiltration) | ouvert (programme 2025-2030) | https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/recueil-fiches.pdf (fiche PLUV, version du 10/12/2025) |
| AIDE_HOP_003 | Gestion et préservation de la ressource en eau | Région Sud | 04, 05, 06, 13, 83, 84 | « autres établissements publics ; associations » : hôpital public et ESPIC associatif possibles, clinique privée exclue. Éligibilité d'un établissement de santé à confirmer auprès de la Région | ACT_AGR_002 (audits de bâtiments publics), ACT_HOP_003 (petits équipements hydro-économes) | ouvert | https://www.maregionsud.fr/vos-aides/detail/gestion-et-preservation-de-la-ressource-en-eau |

`AIDE_ART_002` (IND2 artisanat) porte le même guichet, avec un texte tourné vers les
artisans : une fiche propre aux établissements de santé est préférable à son extension.

## 4. Aides existantes : demandes d'évolution

| Aide | Évolution proposée | Source |
|---|---|---|
| AIDE_LAI_009 ECO3 (AERMC) | ajouter `hopitaux` ; liens ACT_AGR_002, ACT_AGR_006, ACT_HOP_002 à 006 (ACT_HOP_001 à confirmer). Seuil : plus de 2 000 m³ par an économisés, au-delà la voie individuelle, en dessous l'opération groupée | « acteurs économiques non agricoles », catégorie où la fiche PLUV de la même agence range les établissements de soins |
| AIDE_LAI_006 (AESN) | ajouter `hopitaux` ; liens ACT_AGR_002, ACT_AGR_006, ACT_HOP_003 à 006. **Pas ACT_HOP_002** : la lutte contre les fuites est inéligible (programme AESN, § E.4.2.2) | page ARS Normandie du 31/07/2025 : établissements sanitaires et médico-sociaux concernés |
| AIDE_LAI_007 QUA_1 (AELB) | ajouter `hopitaux` ; liens ACT_AGR_001 (« y compris matériel de comptage »), ACT_AGR_002, ACT_AGR_006, ACT_HOP_003 à 006. Avertissements : aides suspendues ou plafonnées selon le conseil d'administration du 12/03/2026, plafond de 60 € par m³ économisé au 1er janvier 2027 | « Public ou privé hors activité économique agricole » |
| AIDE_LAI_001 (AEAP) | ajouter `hopitaux` avec réserve : cliniques et ESPIC associatifs éligibles, hôpital public non selon la lettre du texte | entreprises au RCS, collectivités, associations |
| AIDE_LAI_004 Prêt Vert (Bpifrance) | liens explicites ACT_HOP_003 à 006 et ACT_AGR_006 ; à dire : cliniques privées éligibles, hôpital public non | page Bpifrance (« économiseur d'eau », « eau de pluie ») |
| AIDE_AGR_004 Prêt Vert BPI | doublon de AIDE_LAI_004, sans source, éligibilité fausse : à fusionner ou retirer (déjà signalé par l'hôtellerie) | |

Non retenues : AIDE_LAI_005 (AERM) et AIDE_LAI_008 (AEAG), dont les textes visent les
seules activités industrielles, commerciales ou artisanales (à confirmer avec les
agences) ; AIDE_VIA_001 à 006 (réduction des pollutions), qui excluent les pollutions
dispersées raccordées au réseau, renvoyées vers les opérations groupées (AIDE_HOP_001).

## 5. Écartés

**Prestataires** :
- Equans : SIRET de l'attributaire AP-HM non confirmé, et PREST_HOP_003 tient déjà le rôle.
- Ax'eau : spécialiste national de la recherche de fuites, aucune référence santé sur 123 pages. En réserve si ACT_HOP_002 manque de prestataires.
- Dyese, Capsis : pas d'hôpital nommé ou zone d'intervention non précisée.
- Kannegiesser : doublon de Jensen.
- Vantive : alternative à Fresenius.
- Soluscope : laveurs d'endoscopes, gain faible.
- C2DS : programme ARS PACA terminé en 2024. Remplaçant d'EnvirobatBDM si besoin.
- Société du Canal de Provence : société d'économie mixte, site injoignable.
- ACQUA (cessé), AMS (revendeur en ligne), KEN, Steritech, Lopez Medical, Primum Non Nocere, CARSO, Apave, Socotec, Ascaudit (fermé), Régétherm, Enertech, SA Innov, Advizeo, BETSO (hors 13), Indigua, Proges Plus, Plug and Track, Pellet ASC, Hydreka, Hydrelis, Sewerin, Gutermann, Qualineo, Mérieux NutriSciences : sans preuve hospitalière, hors périmètre, hors zone, distributeurs ou établissements fermés.

**Aides** :
- Postes de conseillers CTEES : l'AMI national (DGOS, DGCS, CNSA, ANAP) finance des postes sur l'énergie et l'air, sans volet eau.
- Ségur investissement (instruction du 11/05/2026), Fonds vert 2026, AMI énergie de l'ARS PACA, FIR : aucune enveloppe eau.
- ANFH, OPCO Santé : développement durable général, aucun module eau. Lien trop faible vers ACT_AGR_009.

## 6. Synthèse par mesure

| Mesure | Prestataires privés | Institutionnel | Aides |
|---|---|---|---|
| ACT_HOP_001 Bras morts et purges | OFIS, Aquafluence (étude), Provence Maintenance Services (travaux), Delabie (matériel, extension) | | IND2 santé (à confirmer), ECO3 (évolution, à confirmer) |
| ACT_HOP_002 Recherche de fuites | Eaux de Marseille (étude), SADE (travaux), Adeunis (matériel), Ubigreen (suivi) | | IND2 santé, ECO3 (évolution) |
| ACT_HOP_003 Robinetterie adaptée | Provence Maintenance Services (travaux), Delabie et Presto (matériel, extensions) | | IND2 santé, Région Sud, ECO3, AESN, AELB, Prêt Vert (évolutions) |
| ACT_HOP_004 Traitement d'eau de dialyse | Hemotech (étude et travaux), Fresenius (matériel) : deux filiales de groupes étrangers | | IND2 santé, évolutions des agences |
| ACT_HOP_005 Blanchisserie et stérilisation | EnveneO (étude), Jensen, Ecolab, Matachana (matériel) : fabricants étrangers | | IND2 santé, évolutions des agences |
| ACT_HOP_006 Rejets d'osmose | Eaux de Marseille (étude), Ecofilae (extension) | | IND2 santé, évolutions des agences |
| ACT_HOP_007 Rejets réduits à la source | Sanivap (matériel), Eaux de Marseille (lien fragile) | EnvirobatBDM | IND2 santé |
| ACT_AGR_001 Compteur par usage | OFIS, Adeunis, Ubigreen (plus Willie existant) | | AELB (évolution) |
| ACT_AGR_002 Audit eau | (Hydros existant) | EnvirobatBDM | IND2 santé, Région Sud (plus Diag Eco-Flux existant, cliniques seulement) |
| ACT_AGR_006 Eau de pluie | (EcoRecup, Fontaine Ingénierie existants) | | PLUV, IND2 santé (plus Prêt Vert existant) |
| ACT_AGR_009 Plan de gestion | (Hydros, Atelier Compte-Gouttes existants) | | aucune |
| ACT_AGR_010 Démarche collective | | EnvirobatBDM | IND2 santé |

**Décompte des prestataires nouveaux** : 14 entreprises privées, 1 institutionnel
(EnvirobatBDM), soit 7 % d'institutionnels, sous le plafond d'un tiers.

**Points faibles** :
- Aucun fabricant français pour la dialyse, la blanchisserie ou la stérilisation : le
  marché est tenu par des filiales de groupes étrangers. Le guide l'admet à défaut, chaque
  fiche le dira.
- ACT_HOP_002 : aucun spécialiste de la recherche de fuites ne cite d'hôpital nommé.
- ACT_HOP_007 : une seule entreprise sans réserve (Sanivap), le lien d'Eaux de Marseille
  est fragile.
- Le groupe Veolia apparaît deux fois (OFIS ; Eaux de Marseille, filiale de Veolia).
  Correction de l'étape 6 : SADE a été cédée par Veolia au groupe NGE en mars 2024
  (communiqué Veolia du 4 mars 2024, cité dans sa fiche).
- Les aides reposent presque entièrement sur l'agence RMC. Hors de ce bassin, un hôpital
  public ne trouvera d'aide eau que si les évolutions AESN et AELB sont appliquées.
- ACT_AGR_009 reste sans aide.

## 7. Bilan après l'étape 6 (2026-10-15)

Les rédacteurs et contrôleurs ont retiré les liens que les sources ne justifiaient pas :
- PREST_HOP_002 (Aquafluence) et PREST_HOP_003 (Provence Maintenance Services) n'ont plus
  aucune mesure liée : aucune source ne cite bras morts, purges ou robinetterie.
- PREST_HOP_006 (Adeunis) et PREST_HOP_007 (Ubigreen) ne portent plus ACT_HOP_002 : ils
  détectent une fuite sans la localiser.
- PREST_HOP_015 (EnvirobatBDM) et AIDE_HOP_001 ne portent plus ACT_AGR_010 : une opération
  groupée par filière n'est pas une démarche territoriale de partage de l'eau.
- PREST_HOP_004 (Eaux de Marseille) ne porte pas ACT_HOP_007.

Conséquence : ACT_HOP_003 (robinetterie) n'a plus de prestataire tant que les extensions
de Delabie et Presto (section 2) ne sont pas appliquées ; ACT_AGR_010 n'a ni prestataire
ni aide.
