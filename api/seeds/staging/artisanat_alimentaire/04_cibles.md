# Cibles de fiches : artisanat alimentaire

Étape 5 du skill `nouveau-secteur`. Statut : brouillon. Recherches du 2026-10-15. Liste validée le 2026-10-15.

**Décisions au point d'arrêt** : pas de fiche PREST_ART_008 (Métropole de Lyon), dont la compétence ne
couvre que les 58 communes de la Métropole alors que la fiche serait visible dans tout le 69 ;
AIDE_ART_004 (Région, point de vente) écartée, l'eau n'y étant pas citée (même règle que l'aide
Bourgogne-Franche-Comté de l'hôtellerie) ; pas de lien d'Atelier Compte-Gouttes (PREST_TRA_005) vers
ACT_ART_001. Ces ids ne sont pas réattribués. Les cibles à preuve faible (INBP, Pharaon, Odréo,
Sorema) partent au rédacteur : la fiche tombe si la preuve manque. Restent **7 prestataires et 5
aides** à rédiger, plus les liens sur fiches existantes.

Département de test : 69 (Rhône), région Auvergne-Rhône-Alpes, agence de l'eau Rhône Méditerranée
Corse (AERMC). Codes NAF : 10.13B, 10.71C, 10.71D.

Le rapport de couverture (`rapport_couverture.md`) montre que sur les douze mesures visibles, seules
les mesures transversales sont couvertes : l'audit (ACT_AGR_002 : Hydros, Ressourc'Eau, Diag
Eco-Flux), le plan de gestion (ACT_AGR_009 : Hydros, Atelier Compte-Gouttes), le compteur
(ACT_AGR_001 : Willie) et l'eau de pluie (ACT_AGR_006 : EcoRecup, Fontaine Ingénierie, Prêt vert).
Les sept mesures du secteur (ACT_ART_001 à 007) et la démarche collective (ACT_AGR_010) n'ont rien.

Ce document propose **8 nouveaux prestataires** (6 entreprises ou organismes privés, 2
institutionnels), **6 nouvelles aides**, et **des liens sur 9 fiches prestataires et 3 fiches aides
existantes** plutôt que des doublons. Chaque SIRET a été lu avec `outils_fiches.py
rechercher-entreprise` (état A sauf mention). Les URL marquées « lue » ont été ouvertes ; celles
marquées « vue en résultat de recherche » ne l'ont pas été : le rédacteur de fiche doit les ouvrir
avant de les citer.

## Synthèse par mesure

Entre crochets, les fiches existantes à relier (voir « Liens à ajouter sur des fiches existantes »).

| Mesure | Prestataires privés | Institutionnel | Aides |
|---|---|---|---|
| ACT_ART_001 Gestes économes | INBP, [Atelier Compte-Gouttes] | CMA AURA | OPCO EP, FAFCEA |
| ACT_ART_002 Relevés et fuites | Odréo, [Willie] | | IND2 AERMC (volet fuites, collectif seulement) |
| ACT_ART_003 Réducteurs de débit | [Delabie], [Presto], [Treval France] | | IND2 AERMC (collectif seulement) |
| ACT_ART_004 Froid sans eau perdue | Sorema, Lyon Froid Cuisines, [Cemafroid] en option | | IND2 AERMC (collectif), Région AURA point de vente (à arbitrer), [Prêt vert] |
| ACT_ART_005 Nettoyage à sec | Pharaon, INBP | | Subvention Prévention « Poussières de farine » |
| ACT_ART_006 Séparateur à graisses | [Simop], [Delho], Chefneux Assainissement | | aucune |
| ACT_ART_007 Autorisation de déversement | [Delho], Chefneux Assainissement (preuves faibles) | Métropole de Lyon | aucune |
| ACT_AGR_001 Compteur par usage | [Willie] (lien existant) | | aucune |
| ACT_AGR_002 Audit eau | [Hydros] (lien existant) | CMA AURA | Diagnostic eau CMA AURA, [Diag Eco-Flux] (existant) |
| ACT_AGR_009 Plan de gestion | [Hydros], [Atelier Compte-Gouttes] (liens existants) | CMA AURA | Diagnostic eau CMA AURA |
| ACT_AGR_010 Démarche collective | aucun | CMA AURA | IND2 AERMC |
| ACT_AGR_006 Eau de pluie | [EcoRecup], [Fontaine Ingénierie] (existants) | | [Prêt vert] (existant) |

**Décompte** (nouvelles fiches) : 6 privés, 2 institutionnels (CMA Auvergne-Rhône-Alpes, Métropole de
Lyon), soit 25 %. Avec les 8 fiches existantes reliées (toutes privées), le secteur verrait 16
prestataires dont 2 institutionnels (12,5 %), sous le plafond d'un tiers.

**Points faibles** (détail en fin de document) :
- ACT_ART_001, 004, 005 et 007 ont deux privés, mais leurs preuves de pertinence sont partielles.
- ACT_ART_007 : aucun bureau d'études trouvé pour la démarche d'autorisation.
- ACT_ART_006, ACT_ART_007 et ACT_AGR_001 : aucune aide trouvée.
- Les aides de l'agence de l'eau ne sont accessibles à un artisan que par une opération collective.

---

## Prestataires cibles

### PREST_ART_001 : Chambre de métiers et de l'artisanat de région Auvergne-Rhône-Alpes, institutionnel
- Type : `chambre_consulaire`
- SIRET : 13002795600015 (CMAR Auvergne-Rhône-Alpes, siège 10 rue Paul Montrochet, Lyon 2e), état A.
  L'ancienne CRMA (13002197500037) est fermée.
- Échelle : régionale, `departements` 01, 03, 07, 15, 26, 38, 42, 43, 63, 69, 73, 74
- URL officielle : https://www.cma-auvergnerhonealpes.fr/
- Pertinence (lue) : https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/
  (visite de 4 heures au plus, diagnostic par poste, plan d'action visant au moins 20 % d'économie,
  suivi à un an par téléphone, 0 € TTC, logos des agences RMC et Loire-Bretagne) ;
  https://www.cma-auvergnerhonealpes.fr/actualites/reduisez-vos-factures-deau-avec-la-cma/ (lue,
  21 avril 2025 : métiers visés « salons de coiffure, métiers de bouche, brasseries, marbrerie, services
  de soin et de nettoyage », diagnostic réalisé par un conseiller de la CMA, financé avec l'agence RMC)
- Mesures : ACT_AGR_002 [conseil_etude] ; ACT_AGR_009 [conseil_etude] ; ACT_AGR_010 [conseil_etude] ;
  ACT_ART_001 [conseil_etude]
- Pourquoi : la CMA réalise elle-même le diagnostic eau, gratuit, en ciblant nommément les métiers de
  bouche, et c'est le relais naturel d'une opération collective auprès de l'agence.
- Réserves : le volet collectif (ACT_AGR_010) n'est pas décrit sur les pages lues ; il repose sur le
  fait que la CMA porte le programme avec l'agence. Le lien ACT_ART_001 tient aux « pratiques
  quotidiennes » analysées par le diagnostic, pas à une formation dédiée. Aucune page lue ne montre la
  CMA accompagner les rejets ou le séparateur à graisses (d'où son absence sur ACT_ART_006 et 007).

### PREST_ART_002 : Chefneux Assainissement
- Type : `installateur`
- SIRET : 33100471300037 (THIERRY CHEFNEUX ASSAINISSEMENT, ZAC du Baconnet, 69700 Montagny), état A,
  NAF 37.00Z. SIREN lu sur les mentions légales du site (https://www.chefneux.com/mentions-legales,
  lue), le site étant édité par une agence (MCORIA).
- Échelle : départements 01, 38, 42, 69
- URL officielle : https://www.chefneux.com/
- Pertinence (lue) : https://www.chefneux.com/services/bac-graisse : clients cités « Boulangeries et
  pâtisseries », « Boucheries et charcuteries », « Hôtels et traiteurs » ; « Contrats d'entretien
  personnalisés », fréquence « Mensuel à trimestriel », « Bordereau de suivi des déchets (BSD) » à
  chaque intervention ; Rhône (69) parmi les départements d'intervention
- Mesures : ACT_ART_006 [travaux] ; ACT_ART_007 [conseil_etude] (voir réserve)
- Pourquoi : entreprise de vidange implantée dans le Rhône qui signe le contrat d'entretien demandé par
  la mesure et remet le bordereau que le service d'assainissement peut exiger.
- Réserves : ne pose pas de bacs (vidange, entretien et contrôle seulement). Le lien ACT_ART_007 se
  limite au bordereau et au contrat, pièces du dossier de conformité : à retirer si le consultant le juge
  trop indirect.

### PREST_ART_003 : Sorema
- Type : `equipementier` sous réserve (voir la note), sinon `installateur`
- SIRET : 34032792300041 (SOREMA, 5 rue de l'Aujardière, 49280 Saint-Christophe-du-Bois), état A,
  NAF 28.25Z (fabrication d'équipements aérauliques et frigorifiques industriels)
- Échelle : nationale
- URL officielle : https://www.sorema.com/
- Pertinence (lue) : https://www.sorema.com/materiel-boulangerie/ (« refroidisseurs d'eau, doseurs
  d'eau et machines à glace pour la boulangerie artisanale et industrielle ») ;
  https://www.sorema.com/gamme/materiel-de-boulangerie/condenseurs-a-buee-de-four-sorema/ (lue :
  condenseur Buée'no Ecologic « Econome en énergie et sans consommation d'eau »). Catalogue vu en
  résultat de recherche : https://pdf.directindustry.com/pdf/sorema/bueeno/68450-990900.html
  (groupe frigorifique avec condenseur à air et ventilateur hélicoïde, R290).
- Fabrication française : non dite sur les pages lues. Le code NAF est industriel et le siège est en
  France ; preuve d'usine à obtenir avant de typer `equipementier`.
- Mesures : ACT_ART_004 [materiel]
- Pourquoi : constructeur spécialiste de l'eau du fournil (refroidisseurs, doseurs, condenseurs de
  buée), seul acteur trouvé qui annonce un équipement de fournil « sans consommation d'eau » refroidi
  par un groupe à air, à la place d'un condenseur de buée à eau courante.
- Réserve : les pages des refroidisseurs d'eau ne disent pas leur mode de condensation (air ou eau).
  La preuve porte sur le condenseur de buée, procédé voisin de la mesure.

### PREST_ART_004 : Lyon Froid Cuisines
- Type : `installateur`
- SIRET : 89490464800025 (LYON FROID CUISINES, ZI de Taffignon, route des Aqueducs, 69630 Chaponost),
  état A, NAF 33.12Z
- Échelle : départementale, `departements: ["69"]` (zone exacte à confirmer)
- URL officielle : https://lyon-froid-cuisines.fr/
- Pertinence (lue) : https://lyon-froid-cuisines.fr/froid-commercial/ : clients cités « boucherie,
  charcuterie, fromagerie, traiteur, boulangerie, pâtisserie » ; chambres froides, « chambres de
  fermentation ou de pousse », renouvellement de matériel réfrigéré, maintenance et dépannage 7j/7
- Mesures : ACT_ART_004 [conseil_etude, travaux]
- Pourquoi : frigoriste du Rhône qui installe et entretient le froid des boulangeries et charcuteries,
  donc l'interlocuteur qui peut vérifier le mode de condensation et remplacer un groupe à eau perdue.
- Réserve : la page ne parle ni de condensation à air ni d'eau perdue. Preuve de secteur solide, preuve
  de mesure absente.

### PREST_ART_005 : Odréo
- Type : `installateur`
- SIRET : 91241457000016 (ODREO, 322 Grande Rue, 69770 Montrottier), état A, NAF 71.20B. Le site dit
  la société « située à Lyon » ; l'adresse SIRENE est dans les monts du Lyonnais.
- Échelle : régions Auvergne-Rhône-Alpes et Bourgogne-Franche-Comté, `departements` à saisir (69 inclus)
- URL officielle : https://odreo.fr/
- Pertinence (lue) : https://odreo.fr/ : « une entreprise spécialisée dans la recherche de fuites
  d'eau », intervention « à Lyon, dans les régions Rhône-Alpes-Auvergne et Bourgogne-Franche-Comté »
- Mesures : ACT_ART_002 [travaux]
- Pourquoi : quand le relevé du soir et du matin montre un compteur qui tourne, l'artisan a besoin de
  quelqu'un qui localise la fuite sans casser ; c'est l'offre d'Odréo, basée dans le Rhône.
- Réserve : **aucune référence commerce ou métiers de bouche** ; les clients cités sont particuliers,
  assureurs, syndics, entreprises du bâtiment, pisciniers.

### PREST_ART_006 : INBP, Institut national de la boulangerie pâtisserie
- Type : `organisme_formation`
- SIRET : 31504294500032 (établissement de Rouen, 150 boulevard de l'Europe), donné par les mentions
  légales (https://www.inbp.com/mentions-legales, lue). L'unité légale 315042945 (« FONDAT FORMAT
  PROMOT PROFES BOULANGERIE », fondation reconnue d'utilité publique) est active, siège à Paris
  (31504294500016) ; l'établissement de Rouen n'a pas été lu directement. Les anciens SIRET
  53326535100015 et 51484923100014 sont fermés.
- Échelle : nationale
- URL officielle : https://www.inbp.com/
- Pertinence (vue en résultat de recherche) : https://www.inbp.com/wp-content/uploads/RSE_Les-fondamentaux-à-appliquer-en-BP.pdf
  (formation « Responsabilité sociétale des entreprises : les fondamentaux à appliquer en
  boulangerie-pâtisserie », sur les sept questions centrales de l'ISO 26000 ; le lien renvoie une
  erreur 404 à l'ouverture). L'INBP a aussi diagnostiqué l'eau et l'énergie de sept boulangeries en 2007
  (source citée dans `01_profil.md`).
- Mesures : ACT_ART_001 [formation] ; ACT_ART_005 [formation]
- Pourquoi : organisme de formation de la profession, le seul trouvé qui propose un module
  environnemental propre à la boulangerie-pâtisserie.
- Réserves : l'eau n'est pas citée dans le programme résumé ; le rédacteur doit trouver une page qui
  parle d'eau, d'éco-gestes ou de nettoyage, sinon retirer la fiche. Pas de pendant trouvé pour la
  charcuterie (voir CEPROC dans les pistes écartées).

### PREST_ART_007 : Pharaon
- Type : `equipementier` sous réserve, sinon `installateur`
- SIRET : 32129060300034 (PHARAON, PAE Sars et Rosières, rue des 9 Bonniers, 59178 Brillon), état A,
  NAF 46.69C (commerce de gros)
- Échelle : nationale
- URL officielle : https://www.pharaon.fr/
- Pertinence (lue, page d'accueil) : catégories https://www.pharaon.fr/aspirateur-boulangerie-c23 et
  https://www.pharaon.fr/aspirateur-farine-c60 ; modèle MTL202ACD EPI
  (https://www.pharaon.fr/aspirateur-industriel-mtl202acd-epi-pour-boulangerie-p157) « reconnu par le
  LEMPA comme équipement à faible émission de farine », éligible à « 70 % de subvention » (voir
  AIDE_ART_001)
- Fabrication française : seule mention « 100% fait en France » dans le bandeau du matériel
  reconditionné ; le code NAF est celui d'un grossiste. **À trancher** : fabricant ou distributeur. Le
  site vend en ligne : vérifier que ce n'est pas seulement un revendeur.
- Mesures : ACT_ART_005 [materiel]
- Pourquoi : aspirateur de fournil conçu pour la farine, qui remplace le balayage humide ou le jet d'eau
  par l'aspiration, et qui ouvre droit à la subvention prévention.

### PREST_ART_008 : Métropole de Lyon, service Rejets non domestiques, institutionnel
- Type : `collectivite`
- SIRET : 20004697700019 (Métropole de Lyon, 20 rue du Lac, Lyon 3e), état A
- Échelle : `departements: ["69"]`, mais la compétence ne couvre que les 58 communes de la Métropole,
  pas le nouveau Rhône (voir réserve)
- URL officielle : https://www.grandlyon.com/
- Pertinence (vue en résultat de recherche, PDF) :
  https://www.grandlyon.com/fileadmin/user_upload/media/pdf/eau/assainissement/reglement-assainissement-collectif.pdf
  (règlement du 24 juin 2024 : « Tout rejet d'eaux usées non domestiques issues d'activités
  industrielles, commerciales, artisanales ou agricoles doit faire l'objet d'une autorisation préalable
  de la Métropole de Lyon » ; prétraitement condition du raccordement sauf dérogation) ;
  https://www.grandlyon.com/fileadmin/user_upload/media/pdf/eau/assainissement/referentiel-ouvrages-eaux-usees-pluviales.pdf
  (« 2026, guide pour les professionnels », vu en résultat de recherche)
- Mesures : ACT_ART_007 [conseil_etude]
- Pourquoi : c'est le service qui instruit et délivre l'autorisation de déversement ; il demande à être
  contacté en amont de tout projet de travaux.
- Réserves : la fiche serait visible dans tout le 69 alors qu'elle ne vaut que pour la Métropole ; à
  l'écrire en le disant, ou à garder comme exemple en ressource d'une mesure plutôt qu'en fiche.
  Aucune page web dédiée aux professionnels n'a été trouvée, seulement les PDF.

---

## Liens à ajouter sur des fiches existantes

Pas de doublon : ces fiches existent déjà et couvrent des mesures du secteur. Pour les fiches
sectorielles, il faut ajouter `artisanat_alimentaire` à `secteurs` en plus du lien.

| Fiche | Statut, fichier | Lien proposé | Preuve pour le secteur |
|---|---|---|---|
| PREST_HUI_006 SIMOP France (SIRET 75404070700012, état A) | publiée, `prestataires_industrie_huiles.json` | ACT_ART_006 [materiel] | La fiche dit déjà que « sa seule réalisation agroalimentaire publiée est un atelier de pâtisserie » ; rubriques « Boulangerie » et « Boucherie - charcuterie » vues sur https://www.simop.fr/l-fc/applications/industrie/agro-alimentaire-agriculture/agro-alimentaire-et-agriculture-166 (lue). Fabrication dans la Manche et la Somme, déjà sourcée. |
| PREST_HUI_007 Delho (SIRET 80763728500022, état A) | publiée, `prestataires_industrie_huiles.json` | ACT_ART_006 [materiel, conseil_etude] ; ACT_ART_007 [conseil_etude] en option | https://delho.fr/ (lue) : « Restaurateurs, traiteurs, charcutiers, pâtissiers » et « boulangers, pâtissiers, charcutiers, traiteurs » ; bac sous plonge https://delho.fr/bac-a-graisses-sous-plonge-delho-gt-m/ ; fabrication en Gironde déjà sourcée ; diagnostic technique gratuit. Le lien ACT_ART_007 repose sur ce diagnostic, sans page qui parle d'autorisation : à confirmer. |
| PREST_HOT_002 Delabie | publiée, `prestataires_hotellerie.json` | ACT_ART_003 [materiel] | Catalogue « robinetterie cuisines professionnelles » vu en résultat de recherche (https://www.delabie.fr/ftp/documents/fre-FR/nos-services/nos-catalogues/robinetterie-cuisines-professionnelles.pdf, trop lourd pour être ouvert) : douchettes de prélavage à 9 ou 10 l/min. Aucune page qui cite les métiers de bouche. |
| PREST_HOT_003 Les Robinets Presto | publiée, `prestataires_hotellerie.json` | ACT_ART_003 [materiel] | Gamme PRESTO CHEF pour cuisine professionnelle, douchette de prélavage régulée à environ 12 l/min (vue en résultat de recherche : https://www.batiweb.com/actualites/publi-redactionnels/presto-chef-la-nouvelle-generation-de-robinets-grande-cuisine-36885, 2020). Page officielle à trouver sur presto.fr. |
| PREST_TRA_001 Willie (SIRET 92957050500016, Lyon 2e, état A) | publiée, `prestataires_transversal.json` | ACT_ART_002 [materiel, conseil_etude] (ACT_AGR_001 déjà lié) | Télérelève sur compteur existant, alertes de fuite ; entreprise lyonnaise ; cible « retail » (vue en résultat de recherche : https://lespepitestech.com/startup-de-la-french-tech/willie). Pas de référence de commerce alimentaire. |
| PREST_TRA_005 Atelier Compte-Gouttes (Hydros) | publiée, `prestataires_transversal.json` | ACT_ART_001 [formation] | Atelier de sensibilisation à l'eau pour entreprises ; aucune référence métiers de bouche. Hydros est l'éditeur de Noé : à arbitrer pour l'équilibre de la liste. |
| PREST_TRA_007 Treval France | brouillon, `staging/transversal/prestataires_transversal.json` | ACT_ART_003 [travaux] | La fiche cite les « commerces » parmi les clients ; aucune page trouvée qui cite la restauration ou les métiers de bouche. |
| PREST_LAI_007 Cemafroid (en option) | publiée, `prestataires_industrie_laitiere.json` | ACT_ART_004 [conseil_etude] | Audit froid dans son offre (déjà sourcé) ; aucune référence artisanale. Seul bureau d'études froid identifié ; à garder seulement si le consultant veut un acteur qui étudie. |
| PREST_TRA_004 Hydros | publiée | aucun nouveau lien | Déjà lié à ACT_AGR_002 et ACT_AGR_009, transversal, donc déjà visible. |

Aides existantes :
1. **Prêt Vert Bpifrance** (AIDE_AGR_004 et AIDE_LAI_004, toutes deux transversales) : lier
   ACT_ART_004 [financement] sur la fiche conservée, après la fusion déjà demandée par l'hôtellerie.
   Plancher de 50 000 € et micro-entreprises exclues : utile seulement aux plus gros laboratoires.
2. **Diag Eco-Flux** (AIDE_LAI_003) : déjà lié à ACT_AGR_002 et visible. Aucun lien à ajouter ; il
   s'adresse aux établissements de 20 à 250 salariés, ce qui exclut neuf artisans sur dix.
3. **ECO3 AERMC** (AIDE_LAI_009) et **IND1 AERMC** (AIDE_VIA_006) : **ne pas étendre au secteur**.
   ECO3 exige plus de 2 000 m3 économisés par an en cadre individuel ; IND1 exige plus de 50 000 € de
   projet pour les macropolluants (les graisses en sont). Un artisan n'y entre pas : la voie est IND2
   (AIDE_ART_002).

Ces fiches n'ont pas été modifiées ici.

---

## Aides cibles

Codes départements Auvergne-Rhône-Alpes : 01, 03, 07, 15, 26, 38, 42, 43, 63, 69, 73, 74.

### AIDE_ART_001 : Subvention Prévention « Poussières de farine » (Assurance Maladie, risques professionnels)
- Porteur : Assurance Maladie, risques professionnels (Carsat Rhône-Alpes pour le 69)
- Échelle : nationale, listes vides
- URL : https://www.ameli.fr/entreprise/sante-travail/prevention/aides-financieres/subventions-1-50-salaries/subventions-risques-chimiques/poussieres-de-farine
  (vue en résultat de recherche) ; détail lu sur https://les-aides.fr/aide/dUcf3w/carsat/subvention-prevention-poussieres-de-farine.html
  (mis à jour le 24 juin 2026)
- Statut 2026 : ouverte d'après les-aides.fr (24 juin 2026), date limite non indiquée. Budget limité,
  traitement par ordre d'arrivée.
- Ce que dit la source : équipements éligibles dont « aspirateurs de boulangerie / pâtisserie adapté aux
  poussières de farine et ses accessoires », pétrins et batteurs à capot plein, diviseuses à faible
  émission, farineurs ; « 70% du montant HT des sommes engagées », minimum de subvention 500 € ;
  effectif national de 49 salariés au plus. Le résumé de recherche de la page ameli cite un plafond de
  25 000 €, absent de les-aides.fr : à trancher sur la page ameli. Demande sur net-entreprises.fr.
- Mesures : ACT_ART_005 [financement]
- Pourquoi : finance à 70 % l'aspirateur de fournil, l'équipement qui permet de nettoyer la farine à sec
  avant tout lavage. C'est une aide santé au travail, pas une aide eau : la fiche doit le dire.
- Réserve : réservée aux entreprises qui ont des salariés ; un boulanger seul n'y a pas droit.

### AIDE_ART_002 : IND2, opérations groupées sectorielles (agence de l'eau Rhône Méditerranée Corse, 12e programme)
- Porteur : agence de l'eau Rhône Méditerranée Corse
- Échelle : agence, `agences: ["AERMC"]`
- URL : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf
  (lue, fiche version 1, délibération 2024-59) ; règlement de l'AMI :
  https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf
  (lu, version du 07/11/2025)
- Statut 2026 : **à vérifier**. L'AMI 2025 avait deux vagues (lettres d'intention au 5 septembre et au
  5 novembre 2025) ; le règlement annonce d'autres AMI « courant 2026 ou 2027 ». Aucun AMI 2026 ni
  aucune liste de lauréats n'a été trouvé.
- Ce que disent les sources : « Lorsque [...] l'économie d'eau potentielle est inférieure à 2000 m3/an
  par site, l'agence accompagne les projets sous forme d'opérations groupées » ; porteurs : fédérations,
  syndicats, chambres consulaires, associations, en ciblant « prioritairement les petites et moyennes
  entreprises industrielles et artisanales ». Travaux d'économie d'eau aidés en entreprise : réduction
  des fuites, technologies économes, « dispositifs hydro-économes et des compteurs ». Taux : 70 % pour
  l'animation, travaux à 70 % pour les PME (de minimis). Exclus : macropolluants (donc les graisses),
  « Pose de compteurs et vannes de sectorisation, outils fixes de détection de fuite, outils de
  pilotage/télégestion seuls », renouvellement à l'identique.
- Mesures : ACT_AGR_010 [financement] ; ACT_ART_003 [financement] ; ACT_ART_004 [financement] ;
  ACT_ART_002 [financement] (réparation des fuites seulement, pas le compteur seul)
- Pourquoi : c'est la seule porte d'entrée vers les aides de l'agence pour un artisan, dont les
  économies n'atteignent jamais 2 000 m3. Elle suppose qu'une CMA ou une fédération porte l'opération :
  la fiche doit le dire clairement.

### AIDE_ART_003 : Diagnostic eau gratuit des artisans (CMA Auvergne-Rhône-Alpes et agence de l'eau RMC)
- Porteur : CMA Auvergne-Rhône-Alpes, financement de l'agence de l'eau Rhône Méditerranée Corse
  (partenariat Loire-Bretagne pour la partie du territoire concernée)
- Échelle : région, `departements` Auvergne-Rhône-Alpes
- URL : https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/ (lue)
- Statut 2026 : en ligne dans le catalogue ; date de fin non publiée. Article de lancement du
  21 avril 2025 (lu).
- Ce que dit la page : 4 heures sur site, « 0 € TTC », plan d'action visant au moins 20 % d'économie,
  suivi à un an ; métiers de bouche visés (article).
- Mesures : ACT_AGR_002 [financement] ; ACT_AGR_009 [financement]
- Pourquoi : même logique qu'ECODO PRO pour l'hôtellerie : la CMA est prestataire (PREST_ART_001) et le
  financement de l'agence fait du diagnostic une aide de fait. À arbitrer : fiche aide, ou seulement
  rôle `financement` sur la fiche prestataire.

### AIDE_ART_004 : Financer l'investissement de mon point de vente (Région Auvergne-Rhône-Alpes), à arbitrer
- Porteur : Région Auvergne-Rhône-Alpes
- Échelle : région, `departements` Auvergne-Rhône-Alpes
- URL : page « Financer l'investissement de mon point de vente » sur le site de la Région (non ouverte) ;
  fiche lue : https://les-aides.fr/aide/SVYP3w/region-auvergne-rhone-alpes.aide-au-developpement-des-entreprises-commerciales-et-artisanales-avec-point-de-vente.pdf
  (PDF généré le 15 octobre 2026, règlement révisé en CP de décembre 2024)
- Statut 2026 : ouvert d'après la fiche, dépôt sur le portail des aides de la Région.
- Ce que dit la source : « commerces alimentaires spécialisés (boulangeries-pâtisseries, boucheries
  charcuteries...) » et traiteurs éligibles ; moins de 10 salariés, point de vente de moins de 150 m² ;
  subvention de 20 % de dépenses comprises entre 10 000 et 50 000 € HT, avec cofinancement local d'au
  moins 10 % ; dépenses éligibles : « investissements d'économie d'énergies [...] acquisition de
  matériels et équipements en remplacement de matériels très consommateurs d'énergie » et « matériels
  professionnels spécifiques ». **L'eau n'est pas citée.** Communes de moins de 100 000 habitants et QPV
  seulement : Lyon et Villeurbanne exclues hors QPV.
- Mesures : ACT_ART_004 [financement] (le refroidisseur ou le groupe à eau perdue est aussi un gros
  consommateur d'énergie)
- Pourquoi : la seule aide régionale ouverte aux boulangers et charcutiers pour du matériel. Comme
  l'aide Bourgogne-Franche-Comté écartée pour l'hôtellerie, l'eau n'y est qu'indirecte : à retirer si le
  consultant applique la même règle.

### AIDE_ART_005 : Prise en charge des formations par OPCO EP (branches boulangerie et charcuterie de détail)
- Porteur : OPCO EP
- Échelle : nationale, listes vides
- URL : https://www.opcoep.fr/ (pages de branche non ouvertes)
- Statut 2026 : dispositif « Entreprises, soutien à la formation » pour les moins de 50 salariés sans
  financement depuis le 1er janvier 2023, formation chez un prestataire Qualiopi en 2026, demande au plus
  tard le 30 novembre 2026 (vu en résultat de recherche, source tierce). Barème boulangerie (IDCC 843)
  de 3 500 € HT pour les moins de 50 salariés cité par une source tierce, non confirmé.
- Mesures : ACT_ART_001 [financement]
- Pourquoi : finance la formation des salariés et apprentis aux gestes économes.
- À vérifier par le rédacteur : rattachement de la charcuterie de détail (IDCC 953) et de la pâtisserie
  (IDCC 1267) à OPCO EP, barèmes 2026 sur opcoep.fr, et existence d'une formation éligible qui parle
  d'eau.

### AIDE_ART_006 : Aide à la formation des chefs d'entreprises artisanales (FAFCEA)
- Porteur : FAFCEA
- Échelle : nationale, listes vides
- URL : https://www.fafcea.com/ (non ouverte) ; résumé vu en résultat de recherche sur
  https://les-aides.fr/aide/IVJP3w/fafcea/aide-a-la-formation-des-chefs-d-entreprises-artisanales.html
  (mis à jour le 23 septembre 2026)
- Statut 2026 : ouvert ; demande déposée au plus tard le jour du début de la formation.
- Ce que dit la source : finance les formations des chefs d'entreprise artisanale, conjoints
  collaborateurs et auxiliaires familiaux ; une ligne « développement durable » figurait parmi les
  stages pris en charge sur les pages de 2023, non confirmée sur la version 2026.
- Mesures : ACT_ART_001 [financement]
- Pourquoi : neuf entreprises sur dix ont moins de dix salariés ; le patron est souvent le seul à
  former, et OPCO EP ne couvre pas les non-salariés.

### Couverture par mesure après ces cibles

| Mesure | Aides |
|---|---|
| ACT_ART_001 | AIDE_ART_005 OPCO EP, AIDE_ART_006 FAFCEA |
| ACT_ART_002 | AIDE_ART_002 IND2 (réparation des fuites, en collectif) |
| ACT_ART_003 | AIDE_ART_002 IND2 (en collectif) |
| ACT_ART_004 | AIDE_ART_002 IND2, AIDE_ART_004 Région (à arbitrer), Prêt vert (lien) |
| ACT_ART_005 | AIDE_ART_001 Poussières de farine |
| ACT_ART_006 | **aucune** |
| ACT_ART_007 | **aucune** (démarche administrative, rien à financer) |
| ACT_AGR_001 | **aucune** (IND2 exclut les compteurs seuls) |
| ACT_AGR_002 | AIDE_ART_003 CMA, Diag Eco-Flux (existant) |
| ACT_AGR_009 | AIDE_ART_003 CMA |
| ACT_AGR_010 | AIDE_ART_002 IND2 |

---

## Points faibles

- **ACT_ART_001 (gestes économes)** : deux privés (INBP, Atelier Compte-Gouttes), tous deux en
  formation, et aucun ne cite l'eau dans une formation pour les métiers de bouche. Le contenu eau du
  module RSE de l'INBP reste à trouver. Pas d'organisme de formation trouvé pour la charcuterie.
- **ACT_ART_002 (relevés et fuites)** : Willie et Odréo sont dans le Rhône, mais aucun n'a de référence
  dans le commerce alimentaire.
- **ACT_ART_003 (réducteurs de débit)** : bons fabricants (Delabie, Presto), mais preuves cuisine pro vues
  seulement en résultat de recherche et sans mention des métiers de bouche. Pas d'installateur du 69
  trouvé ; Treval France est national, sans référence commerce alimentaire.
- **ACT_ART_004 (froid sans eau perdue)** : aucune page ne propose explicitement de remplacer un groupe
  à eau perdue. Sorema prouve un équipement de fournil sans eau (condenseur de buée), pas un
  refroidisseur à air ; Lyon Froid Cuisines a les bons clients mais rien sur la condensation.
  Fabrication française de Sorema non prouvée. Bongard, Panimatic, Hengel et CFI (fabricants français
  de froid de boulangerie) n'ont aucune page trouvée sur le mode de condensation.
- **ACT_ART_005 (nettoyage à sec)** : Pharaon a une preuve boulangerie solide, mais son statut de
  fabricant ou de revendeur est à trancher ; INBP est faible (voir plus haut). Aucun fabricant français
  d'aspirateur de fournil prouvé.
- **ACT_ART_006 (séparateur à graisses)** : bien couvert (deux fabricants français et un vidangeur du
  69), mais aucune aide : IND1 est hors de portée (plancher de 50 000 €) et IND2 exclut les
  macropolluants. Aucun installateur qui pose les bacs dans le 69 retenu.
- **ACT_ART_007 (autorisation de déversement)** : aucun bureau d'études trouvé pour accompagner un
  artisan dans la démarche. Delho et Chefneux n'y contribuent qu'indirectement. La Métropole de Lyon ne
  couvre pas tout le 69.
- **ACT_AGR_010 (démarche collective)** : aucune entreprise privée, ce qui est cohérent avec la mesure.
  Aucune opération groupée IND2 en cours dans le Rhône n'a été trouvée.
- **Aides** : les seules aides de l'agence accessibles à un artisan passent par une opération
  collective dont l'existence en 2026 n'est pas vérifiée. Pas d'aide trouvée de la Métropole de Lyon ni
  d'Eau du Grand Lyon pour les économies d'eau des professionnels.

## Pistes écartées

Prestataires :
- **SARL Développement Durable** (bacs à graisses « Lyon et région Rhône-Alpes ») : siège à Toulouse,
  pages par ville, boutique en ligne, aucune fabrication dite. Revendeur en ligne.
- **PVFS Assainissement** : cite boulangeries et traiteurs, mais intervient en Île-de-France seulement.
- **TVC Assainissement** (SIRET 91146493100011, Châtonnay 38, état A, vidangeur agréé) : couvre Lyon,
  mais ne cite aucun métier de bouche. Second choix si Chefneux tombe.
- **Noveax** (Beynost) : aucun métier de bouche, aucune identité légale sur la page. **Techinter** :
  aucune identité légale, page incohérente (délais contradictoires, villes de l'Aude).
- **Sarp Centre Est** (Veolia) : nettoie des bacs à graisses à Lyon d'après un avis de marché public,
  mais aucune page pour les commerces ou artisans.
- **Hydrelis** (disjoncteurs d'eau, Isques 62) : cible bâtiments tertiaires et retail, aucun métier de
  bouche, fabrication française non dite.
- **Bongard, Panimatic, Hengel, CFI** : fabricants français de froid de boulangerie, sans page sur le
  mode de condensation. À reprendre si une fiche technique « condensation à air » est trouvée.
- **Axima Réfrigération, Dalkia Froid Solutions** (fiches viande existantes) : froid industriel, hors
  de l'échelle d'un artisan.
- **EcoTechniques** (fiche hôtellerie) : audit et pose de réducteurs, mais aucune référence restaurant
  ou commerce alimentaire trouvée.
- **CEPROC** (SIRET 77569235300037, Paris, état A) : centre de formation de la charcuterie ; programmes
  d'hygiène et de nettoyage, mais aucun module eau ou éco-responsable trouvé.
- **Kärcher, Nilfisk** (aspirateurs de boulangerie) : fabricants étrangers. **GEDO France** :
  distributeur de séparateurs (Simop, Saint-Dizier), pas fabricant.
- **Fastnaet** (fiche transversale) : nettoyage air et eau, pas du nettoyage à sec ; ne correspond pas
  à ACT_ART_005.

Aides :
- **ECO3 AERMC** en cadre individuel (plus de 2 000 m3 économisés) et **IND1 AERMC** (plus de 50 000 €
  pour les macropolluants) : hors de portée d'un artisan.
- **AAP « sobriété » des acteurs économiques AERMC 2023** : clos le 30 septembre 2024, seuil de
  5 000 m3.
- **Prêt Artisan et Commerçant** (Région AURA et Banque Populaire, prêt à taux zéro de 3 000 à
  20 000 €) : prêt de développement général, l'eau n'est pas citée.
- **Diagnostics métiers de bouche Métropole de Lyon et CMA Lyon Rhône** (communiqué de 2024) : portent
  sur les déchets et le gaspillage ; le volet eau visait coiffeurs, nettoyage et mécanique.
- **Opération « Eau sans toxiques »** (Métropole de Lyon et AERMC) : vise les substances toxiques, pas
  les métiers de bouche.
- **Tremplin (ADEME)** : non vérifié pendant cette recherche.

## Ce qui n'a pas pu être vérifié

- Le statut 2026 de l'AMI IND2 et l'existence d'une opération collective portée par la CMA AURA.
- Le contenu eau des formations INBP, les barèmes 2026 d'OPCO EP et de FAFCEA.
- La fabrication en France de Sorema et de Pharaon.
- Le plafond de la subvention « Poussières de farine » (25 000 € selon le résumé ameli, absent de
  les-aides.fr).
- Les pages Delabie et Presto pour la cuisine professionnelle (vues en résultat de recherche seulement).
- La page web du service Rejets non domestiques de la Métropole de Lyon (seuls les PDF ont été trouvés).

## Sources principales consultées le 2026-10-15

- CMA Auvergne-Rhône-Alpes : https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/
  et https://www.cma-auvergnerhonealpes.fr/actualites/reduisez-vos-factures-deau-avec-la-cma/
- Agence de l'eau RMC, fiche IND2 et règlement de l'AMI opérations groupées sectorielles (URL plus haut)
- Région Auvergne-Rhône-Alpes, fiche « Financer l'investissement de mon point de vente » (via les-aides.fr)
- Assurance Maladie, subvention « Poussières de farine » (via les-aides.fr et ameli.fr)
- Pages officielles citées pour chaque cible ci-dessus

---

## Décisions au point d'arrêt de l'étape 6 (2026-10-15)

- **Assemblées** : PREST_ART_001, 002, 003, 005, 007 ; AIDE_ART_001, 002, 003, 005.
- **Écartées** (fiches et verdicts gardés dans `fiches/`, ids non réattribués) : PREST_ART_004 (Lyon
  Froid Cuisines, aucune source sur l'eau perdue), PREST_ART_006 (INBP, aucun contenu eau),
  AIDE_ART_006 (FAFCEA, aucun stage eau, plus de lien de mesure).
- **Gardées malgré un verdict incomplet**, signalées à la revue : PREST_ART_007 (Pharaon, couverture
  nationale non sourcée, distributeur) et AIDE_ART_002 (IND2, exclusion du séparateur présentée comme
  une lecture).
- **Liens posés sur des fiches existantes**, copies dans ce staging : PREST_HUI_006 Simop et
  PREST_HUI_007 Delho vers ACT_ART_006 (`prestataires_industrie_huiles.json`), PREST_HOT_002 Delabie
  et PREST_HOT_003 Presto vers ACT_ART_003 (`prestataires_hotellerie.json`, preuves vues en résultat de
  recherche seulement), AIDE_AGR_004 Prêt vert vers ACT_ART_004 (`aides_agriculture.json`). Non posés :
  Delho vers ACT_ART_007 (aucune source), Cemafroid (option non retenue).
- **Demandes pour la prochaine passe transversale** (fichier en cours dans `staging/transversal/`, non
  touché ici) : PREST_TRA_001 Willie vers ACT_ART_002 [materiel, conseil_etude] ; PREST_TRA_007
  Treval France vers ACT_ART_003 [travaux].

**Promotion : ne pas utiliser `--publier-tout`.** La copie de `prestataires_industrie_huiles.json`
contient trois fiches huiles en brouillon (PREST_HUI_003, 008, 010) que `--publier-tout` publierait.
Utiliser `--publier` avec la liste explicite des ids du secteur. Les trois copies de fichiers d'autres
secteurs (`prestataires_industrie_huiles.json`, `prestataires_hotellerie.json`,
`aides_agriculture.json`) ont été prises sur les seeds publiés du 2026-10-15 : si ces seeds changent
avant la promotion, refaire les copies, sinon la promotion écraserait les changements.
