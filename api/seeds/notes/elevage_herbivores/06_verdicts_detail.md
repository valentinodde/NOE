# Verdicts détaillés des fiches : élevage d'herbivores

Copie des fichiers fiches/<ID>.verdict.md (dernier passage du contrôleur), regroupés avant la promotion qui supprime le dossier fiches/. Synthèse dans 05_verdicts.md.


## AIDE_HRB_001

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/AIDE_HRB_001.json (aide, elevage_herbivores, 2026-10-15)

J'ai ouvert les quatre URL citées. La page aides agriculteurs de l'AESN a été lue deux fois, la seconde avec des questions ciblées. Le communiqué CPagri2025.pdf a été lu en entier depuis le fichier téléchargé, le pdf n'étant pas lisible directement par WebFetch. J'ai aussi lu la page RIVAGE et l'icône fav-icon-3.png. Les deux mesures liées sont décrites dans /Users/valentin/Desktop/Noé/api/seeds/actions_transversal.json.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Aides à la sobriété en eau des agriculteurs (programme Eau, climat et biodiversité 2025-2030, Seine-Normandie) | confirmé | Page aides agriculteurs : programme « Eau, climat & biodiversité » 2025-2030, section « Se mobiliser vers plus de sobriété en eau ». |
| financeur | Agence de l'eau Seine-Normandie | confirmé | Page eau-seine-normandie.fr, et le PDF : « l'agence de l'eau Seine-Normandie aux côtés des agriculteurs ». |
| type | subvention | confirmé | Le mot « subvention » n'apparaît pas. La page parle d'« aides financières » avec « Taux d'aides financières : jusqu'à 80 % », donc une aide en pourcentage de la dépense. |
| taux (80 %) | Jusqu'à 80 % selon les actions pour les investissements hydro-économes | confirmé | Page aides : « Taux d'aides financières : jusqu'à 80 % selon les actions », pour le bloc qui contient les investissements hydro-économes. |
| taux (eau de pluie) | Taux non précisé pour la récupération d'eau de pluie | confirmé | La page ne donne aucun taux chiffré pour la REUT ni pour l'eau de pluie. Elle dit seulement qu'elle finance « les études, la maîtrise d'œuvre et les travaux ». |
| taux (plafonnement UE) | Taux plafonnables par l'encadrement européen | confirmé | « Ces taux peuvent être plafonnés dans certaines situations par l'encadrement européen des aides aux activités économiques. » |
| plafond | null | confirmé | La page ne donne aucun plafond chiffré. |
| eligibilite (public, conditions) | Agriculteurs du bassin Seine-Normandie, sous conditions de zonage, de gouvernance et de démarche territoriale de sobriété | confirmé | « lorsque certaines conditions sont respectées (notamment de zonage, de gouvernance, de démarche territoriale de sobriété) ». La page est adressée aux agriculteurs. |
| eligibilite (hydro-économes) | Doivent améliorer une installation existante et être préconisés par un diagnostic de l'exploitation ou un conseil en sobriété sur un territoire en tension quantitative | confirmé (nuance) | « s'il s'agit de l'amélioration d'une installation existante et si les actions sont préconisées dans le cadre de diagnostics de l'exploitation et de conseils en sobriété en eau et en irrigation sur les territoires en tension quantitative ». La source écrit « et », la fiche « ou ». |
| departements | [] (national) | confirmé | Cohérent : le périmètre est porté par le champ agences (bassin AESN). La source ne restreint à aucun département. |
| agences | AESN | confirmé | Aide du programme de l'agence de l'eau Seine-Normandie, réservée à son bassin. |
| mesures : ACT_AGR_006 (récupération d'eau de pluie) | lien | confirmé | « la récupération des eaux de pluies notamment des exploitations d'élevage pour des usages divers [...] (lavage, eaux de process voire abreuvement...) [...] L'agence de l'eau finance les études, la maîtrise d'œuvre et les travaux. » Le PDF le confirme aussi. |
| mesures : ACT_AGR_001 (sous-comptage par usage) | lien | confirmé (réserve) | Dépenses éligibles : « investissements hydro-économes (notamment les systèmes de mesure, sondes de mesure, outils d'aide à la décision, matériel d'irrigation) ». Le PDF dit « outils de mesure ». La source ne parle ni de compteurs ni de sous-compteurs, et le contexte est surtout l'irrigation. Le lien tient sur « systèmes de mesure », sous les conditions de la ligne hydro-économes. |
| infos_complementaires 1 (RIVAGE, avertissement) | Dépôts suspendus du 30/09/2026 à mi-janvier 2027, ouverture prévue le 11/01/2027, dépôt possible sur Démarche Numérique qui vaut autorisation de démarrage, redépôt sur RIVAGE | confirmé | Page RIVAGE : « mise en place pour l'agence de l'eau Seine-Normandie à partir du 11 janvier 2027 », « les dépôts de demandes d'aides sont suspendus entre le 30 septembre 2026 et mi-janvier 2027 », « il reste possible de déposer une demande d'aide sur Démarche Numérique au-delà du 30 septembre ». La date vaut autorisation de démarrage, avec redépôt sur RIVAGE. |
| infos_complementaires 2 (eau de pluie, info) | Collecte, stockage, traitement, transfert, pas la distribution. Pas d'augmentation des volumes pour l'irrigation | confirmé | « finance la collecte, le stockage, le traitement, le transfert, à l'exclusion de la distribution » et « ne pas créer une augmentation des volumes d'eau utilisés à des fins d'irrigation ». |
| infos_complementaires 3 (directions territoriales, info) | Contacter la direction territoriale, avec un lien | confirmé | « Prenez contact avec la direction de l'agence de l'eau de votre territoire ». La page pointe bien vers https://www.eau-seine-normandie.fr/agence-de-leau/directions_territoriales |
| infos_complementaires 4 (ressource) | Page des aides financières aux agriculteurs | confirmé | L'URL répond et correspond au titre donné. |
| logo_url (hors liste) | Icône AESN | confirmé | fav-icon-3.png montre le navire blanc sur fond bleu de l'agence, le même emblème que sur le logo du communiqué PDF. |

Hors grille, la description est elle aussi conforme : « 12è programme » figure sur la page, et les éléments sur les hydro-économes et l'eau de pluie sont confirmés plus haut.

SOURCES : 4 citées, 4 accessibles

VERDICT : conforme

Aucun champ n'est à corriger. Trois points de vigilance, par ordre d'importance :
1. Lien ACT_AGR_001 : il repose sur la seule mention « systèmes de mesure, sondes de mesure », dans un contexte surtout tourné vers l'irrigation. Aucune source citée ne dit que des sous-compteurs sur les usages d'élevage (abreuvement, traite) sont éligibles. Le lien reste lié aux conditions « installation existante, préconisée par un diagnostic, territoire en tension ». Une confirmation de l'agence ou une source plus précise renforcerait ce lien.
2. eligibilite : la source écrit « diagnostics de l'exploitation et de conseils en sobriété », la fiche « un diagnostic ou un conseil ». Mieux vaut reprendre le « et » de la source, ou une formulation neutre.
3. type : « subvention » est déduit de l'aide en taux, le mot n'est pas sur la page. Rien à corriger, c'est seulement à savoir.


## AIDE_HRB_002

## Contrôle de la fiche AIDE_HRB_002

J'ai contrôlé `/Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/AIDE_HRB_002.json` contre ses sources. Un seul champ est faux : le `taux`. La mention « sans pourcentage publié » est contredite par la page agriculteurs de l'agence. Tout le reste est confirmé, avec une réserve sur le lien vers la mesure.

Pages citées :
- P1 : /aides/Accompagner-la-transition-agricole-pour-l-eau
- P2 : /agriculteurs/aides-financieres-du-programme-eau-climat-biodiversite
- P3 : /formulaires_aides

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Accompagner la transition agricole pour l'eau (AESN, programme Eau, climat et biodiversité 2025-2030, chapitre C) | confirmé | P1 : « Chapitre C- Accompagner la transition agricole pour l'eau », « 12e programme d'intervention de l'agence de l'eau Seine Normandie 2025-2030 » |
| financeur | Agence de l'eau Seine-Normandie | confirmé | P1 et P2 sont des pages de l'agence, qui finance les aides de son programme |
| type | subvention | confirmé | P2 : « Taux d'aides financières » par levier. Réserve : MAEC et PSE sont des indemnisations ou paiements, pas des subventions au sens strict |
| taux : jusqu'à 80 % (diagnostics, accompagnement technique, études, expérimentations) | idem | confirmé | P2 : animation territoriale, accompagnement technique, études et expérimentations, « Taux d'aides financières : Jusqu'à 80 % » |
| taux : 80 à 100 % (PSE, MAEC, conversion bio) | idem | confirmé | P2 : « Taux d'aides financières pour PSE, MAEC et CAB : de 80 % à 100% » |
| taux : matériel de gestion de l'herbe, haies, agroforesterie « plafonnés par l'encadrement européen, sans pourcentage publié » | idem | contredit | P2, volet solutions fondées sur la nature : « plafonnés par l'encadrement européen des aides aux activités économiques » (confirmé). Mais P2, volet sobriété en eau : solutions fondées sur la nature (agroforesterie, prairies, haies) « jusqu'à 80 % selon les actions », sous conditions « de zonage, de gouvernance, de démarche territoriale de sobriété ». Un pourcentage est donc publié |
| plafond | null | confirmé | P1 et P2 ne publient aucun plafond en euros |
| description : objectifs (eau, milieux, biodiversité, résilience) | idem | confirmé | P1 : « accompagner les exploitations dans leur transition vers une agriculture plus résiliente aux changements climatiques » |
| description : matériel de gestion de l'herbe, haies hydrauliques, agroforesterie | idem | confirmé | P1 : « matériel de gestion des surfaces en herbe », « implantation de haies à vocation hydraulique et de systèmes agroforestiers » |
| description : diagnostics, conseil individuel dans un cadre collectif | idem | confirmé | P1 : « Les démarches de conseil individuel dans un cadre collectif (CICC) sont éligibles » |
| description : indemnisations (MAEC, bio, PSE) | idem | confirmé | P1 : indemnisations pour changement ou maintien de systèmes, PSE, agriculture biologique. MAEC absent de P1, mais présent dans P2 (« PSE, MAEC et CAB ») |
| description : effluents d'élevage sous conditions de zonage | idem | confirmé | P1 : éligibles en commune nouvellement classée en zone vulnérable, ou hors zone vulnérable et en territoire à enjeu |
| description : volet filières à bas niveau d'intrants (transformation et commercialisation) | idem | confirmé | P1 : liste des productions BNI (« herbe/prairie », « bois de haies », « luzerne et sainfoin »…). P2 : « Les outils de transformation et de commercialisation peuvent aussi être financés » |
| eligibilite : exploitations du bassin, Écophyto pour tout siège sur le bassin avec diminution pérenne des phytosanitaires ou des rejets | idem | confirmé | P1 : « dont le siège se situe sur le bassin », « une diminution pérenne de l'utilisation des produits phytosanitaires et/ou une diminution des rejets dans le milieu naturel » |
| eligibilite : diagnostics, conseil, la plupart des indemnisations et les investissements en démarche territoriale réservés aux territoires à enjeu | idem | confirmé | P1 : exploitations « situées en tout ou partie sur un territoire à enjeu bénéficiant d'une démarche territoriale ». Pour la bio, éligibilité à l'échelle du bassin, ce que « la plupart » couvre |
| departements | [] | confirmé | Aide d'agence, le périmètre est donné par `agences` |
| agences | AESN | confirmé | Pages du site eau-seine-normandie.fr, aides réservées au bassin |
| mesures : ACT_HRB_004 (système fourrager résilient) | lien simple | confirmé, avec réserve | P2 : « le maintien des prairies en finançant du matériel de gestion de l'herbe, ou d'accompagnement financier via les MAEC ou PSE ». Cela couvre le volet herbe et pâturage de la mesure. Aucune source ne rend éligibles le semis de prairies multi-espèces, la luzerne, le sorgho, les méteils ni les stocks fourragers. Le matériel n'est aidé qu'à condition de réduire les phytosanitaires ou les rejets, pas pour résister à la sécheresse |
| infos 1 : pas de démarrage avant dépôt, présenter le projet au chargé d'opérations | idem | confirmé | P3 : « aucun commencement d'exécution du projet » avant le dépôt d'une demande formelle (ordre de service, bon de commande) ; « Prendre contact avec le chargé d'opérations de la direction territoriale dont vous dépendez ». P3 prévoit deux exceptions que la fiche omet : renouvellement d'actions reconduites et aides d'urgence |
| infos 2 : conditions effluents ; eaux blanches et vertes non citées | idem | confirmé | P1 : conditions de zonage ci-dessus. Aucune mention des eaux blanches, des eaux vertes ni de la salle de traite dans P1 |
| infos 3 : conseil individuel conditionné à un engagement et à la transmission des données | idem | confirmé | P1 : engagement signé listant mesures et objectifs, transmission des données techniques à la structure d'animation |
| infos 4 : dépôts suspendus du 30/09/2026 à mi-janvier 2027 (Rivage), sauf démarrage avant le 20 janvier | idem | confirmé | Bandeau de P1 et de P3 : « entre le 30 septembre 2026 et mi-janvier 2027 », « sauf opérations devant démarrer avant le 20 janvier ». P3 nomme la plateforme RIVAGE |
| infos 5 : territoires à enjeu, direction territoriale, siège et téléphone | idem | confirmé | P2 : « Certaines actions ne sont éligibles qu'à l'échelle de territoires à enjeux » (aires d'alimentation de captages, érosion-ruissellement…) ; « 12 rue de l'Industrie », CS 80148, 92416 Courbevoie Cedex, 01 41 20 16 00 |
| infos 6 : ressource P1 | lien | confirmé | URL accessible, c'est bien la page du chapitre C |
| infos 7 : ressource P2 « avec les taux par levier » | lien | confirmé | URL accessible, taux présentés par levier |
| infos 8 : ressource P3 formulaires | lien | confirmé | URL accessible, formulaires « agriculture » et « filière BNI » présents |
| logo_url (source favicon) | fav-icon-3.png | confirmé | PNG accessible (10,5 Ko) |

SOURCES : 4 citées (12 entrées sur 4 URL distinctes), 4 accessibles

VERDICT : à corriger

Champs à corriger ou à préciser, par ordre d'importance :
1. **`taux`** : supprimer « sans pourcentage publié ». P2 annonce « jusqu'à 80 % selon les actions » pour les solutions fondées sur la nature (agroforesterie, prairies, haies) dans le volet sobriété en eau, sous conditions de zonage, de gouvernance et de démarche territoriale de sobriété. Hors de ce volet, les taux restent plafonnés par l'encadrement européen.
2. **`mesures` ACT_HRB_004** : le lien ne tient que par le matériel de gestion de l'herbe et par les MAEC ou PSE de maintien des prairies. Aucune source citée ne couvre le semis d'espèces résistantes à la sécheresse ni les stocks fourragers, et le matériel n'est aidé que s'il réduit les phytosanitaires ou les rejets. La couverture est donc partielle, et c'est à la fiche de le dire.
3. **`infos_complementaires` 1** (facultatif) : ajouter les deux exceptions de P3 à l'interdiction de démarrage anticipé (renouvellement d'actions reconduites, aides d'urgence).
4. **`type`** (mineur) : « subvention » ne décrit pas exactement les indemnisations MAEC et PSE, qui sont des paiements contractuels.


## AIDE_HRB_003

## Contrôle de AIDE_HRB_003

Fiche contrôlée : `/Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/AIDE_HRB_003.json`

Sources utilisées :
- **Page Cotentin** : https://www.lecotentin.fr/mes-services/cycle-de-leau/entretien-des-cours-deau-et-des-milieux-naturels/
- **CP** : communiqué de presse CAC, CA50 et PnrMCB, https://parc-cotentin-bessin.fr/sites/default/files/inline-files/CP_20250409_SOUTIEN_ELEVAGE_CAC_CA50_PNR_V01.pdf
- **RSMDD** : rapport développement durable 2024 du Cotentin, https://www.lecotentin.fr/wp-content/uploads/2025/08/RSMDD_Cotentin_2024.pdf

Les deux PDF ne pouvaient pas être analysés par WebFetch, mais le fichier a bien été téléchargé : je les ai lus en entier. Je les compte donc comme accessibles.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Aménagements d'abreuvement et de clôture des programmes de restauration des cours d'eau (agglomération du Cotentin) | confirmé | CP : « plusieurs programmes pluriannuel de restauration de cours d'eau [...] aménagements pour l'abreuvement [...] ainsi que des clôtures » |
| financeur | Communauté d'agglomération du Cotentin et agence de l'eau Seine-Normandie | confirmé | CP : « Le financement est assuré par l'Agence de l'Eau Seine Normandie à hauteur de 80% et de la CA le Cotentin sur les 20% restants » |
| type | accompagnement | confirmé | Valeur autorisée (TYPES_AIDE dans referentiel_verif.py). Elle est cohérente avec le CP : « travaux sont effectués par une entreprise sous maîtrise d'ouvrage de la collectivité ». La collectivité fait réaliser les travaux, elle ne verse pas de subvention à l'exploitant. |
| taux | 80 % agence de l'eau Seine-Normandie, 20 % agglomération | confirmé | Même passage du CP que pour le financeur |
| plafond | null | confirmé | Aucune source ne mentionne de plafond. La valeur vide est cohérente. |
| eligibilite : exploitants et propriétaires riverains | Exploitants et propriétaires de parcelles riveraines | confirmé | CP : « il est proposé aux exploitants ». RSMDD p. 5 : « accompagne les propriétaires riverains de cours d'eau » |
| eligibilite : bassin versant couvert par un programme | bassin versant du Cotentin où l'agglomération conduit un programme | confirmé | CP : « Ces programmes sont toujours réalisés à l'échelle d'un bassin versant » |
| eligibilite : DIG et accord du propriétaire | déclaré d'intérêt général par le préfet, accord du propriétaire | confirmé | Page Cotentin : « sous réserve de déclaration d'Intérêt Général par le Préfet et avec l'accord du propriétaire » |
| eligibilite : convention | convention collectivité, propriétaire, exploitant | confirmé | CP : « convention tripartite entre la Collectivité, le Propriétaire et l'Exploitant » |
| departements | ["50"] | confirmé | RSMDD, dernière page : « 8 rue des Vindits, 50130 Cherbourg-en-Cotentin ». Le CP mentionne aussi la « Chambre d'agriculture de la Manche » et la CA50. |
| agences | ["AESN"] | confirmé | CP : « Agence de l'Eau Seine Normandie à hauteur de 80% » |
| mesures : ACT_HRB_007 (berges protégées, abreuvement hors du cours d'eau) | lien | confirmé | Page Cotentin : « Accompagner les activités d'élevage à proximité des cours d'eau, par exemple avec la mise en place de clôtures ou d'abreuvoirs ». CP : les programmes « visent à préserver la qualité de l'eau des rivières ». La dépense éligible correspond exactement à la mesure. |
| mesures : ACT_HRB_003 (réseau d'abreuvement au pâturage et réserve de secours) | lien | confirmé, mais seulement en partie | CP : « aménagements pour l'abreuvement (bac, pompe de prairie, abreuvoir) » et, dans l'exemple, « 2 bacs avec raccordement au réseau ». Les abreuvoirs et la pompe à museau figurent dans la mesure. En revanche, aucune source ne décrit le réseau enterré ni la réserve de secours, qui sont l'objet principal de la mesure (sécurité d'approvisionnement). |
| description : programmes pluriannuels menés par bassin versant | | confirmé | CP : « programmes pluriannuel », « à l'échelle d'un bassin versant » |
| description : au titre de la GEMAPI | | confirmé | Page Cotentin : « GEMAPI (Gestion des milieux aquatiques et prévention des inondations) » |
| description : bac, pompe de prairie, abreuvoir, passerelle pour le bétail ou le tracteur, clôtures, entreprise sous maîtrise d'ouvrage | | confirmé | CP, passage cité ci-dessus |
| description : « seuls les abreuvoirs, les pompes de prairie et les bacs raccordés au réseau sont pris en charge, pas une réserve de secours ni des canalisations enterrées » | | introuvable | Aucune source n'exclut la réserve ni les canalisations. Le CP introduit sa liste par « Entre autres », ce qui laisse penser qu'elle n'est pas exhaustive. Le raccordement au réseau n'apparaît que dans l'exemple, pas comme une règle. |
| description : bassins cités (Merderet et son affluent la Sinope, Douve, Divette, Saire, côtiers ouest) | | confirmé | CP : « le programme est mené sur le Merderet et ses affluents », « la Sinope, (affluent du Merderet ». RSMDD p. 5 : « bassins versants de la Divette, de la Sinope, de la Saire, de la Douve et des Côtiers Ouest » |
| infos_complementaires #1 (info) : visite des parcelles, convention tripartite | | confirmé | CP : « La nature et la localisation des d'aménagements se fait en concertation avec l'exploitant lors de visites de ses parcelles » |
| infos_complementaires #1 (info) : téléphone et mail | 02 50 79 16 10, contact@lecotentin.fr | confirmé | Page Cotentin : « Tél. : 02.50.79.16.10 ; contact@lecotentin.fr » |
| infos_complementaires #2 (avertissement) : DIG, accord du propriétaire, cas du fermage | | confirmé | Page Cotentin, passage DIG et accord du propriétaire. La phrase sur le fermage en est une déduction directe. |
| infos_complementaires #3 (retour_experience) : chiffres | 12 abreuvoirs, 2 bacs raccordés, 7 franchissements, 1 500 m de clôture, 42 000 € TTC | confirmé | CP : « 12 abreuvoirs, 2 bacs avec raccordement au réseau, 7 franchissements et 1500m de clôture pour un montant s'élevant à 42 000 € TTC » |
| infos_complementaires #3 : lieu et effets | exploitation de Saint-Cyr-Bocage, parcelles le long de la Sinope, parcellaire sectorisé, déplacements facilités | confirmé | CP : « parcelles [...] sur la commune de Saint-Cyr-Bocage et longent le cours d'eau de la Sinope », « sectoriser le parcellaire de faciliter les déplacements ». Le CP indique aussi « siège d'exploitations est à Hémévez », ce qui rend « exploitation de Saint-Cyr-Bocage » un peu approximatif. Le CP écrit lui-même « chez Fanny DURUEL à Saint-Cyr-Bocage ». |
| infos_complementaires #3 : lien et lien_label | CP, « Communiqué de presse de l'agglomération, de la chambre d'agriculture et du Parc » | confirmé | PDF accessible. Logos et texte : « La CAC, la CA50 et le Parc naturel régional vous convient » |
| infos_complementaires #4 (ressource) | Page de l'agglomération sur l'entretien et la restauration des cours d'eau | confirmé | Page accessible, titre « L'entretien des cours d'eau et des milieux naturels » |
| logo_url (hors champs à contrôler) | Cloudinary, depuis icon.png de lecotentin.fr | confirmé | L'image source est bien le symbole de l'agglomération du Cotentin |

SOURCES : 6 citées (4 URL distinctes), 6 accessibles

VERDICT : incomplet

### À corriger ou à sourcer, par ordre d'importance

1. **Phrase restrictive de la description** (« seuls les abreuvoirs, les pompes de prairie et les bacs raccordés au réseau sont pris en charge, pas une réserve de secours ni des canalisations enterrées ») : aucune source ne la justifie. Le CP présente sa liste par « Entre autres ». Il faut soit trouver une source qui exclut la réserve et les canalisations, soit écrire seulement ce que dit le CP (bac, pompe de prairie, abreuvoir, franchissements, clôtures) sans affirmer d'exclusion.
2. **Lien ACT_HRB_003** : il ne repose que sur les abreuvoirs, les pompes de prairie et les bacs, alors que la mesure porte sur un réseau d'abreuvement et une réserve de secours contre le tarissement. Rien dans les sources ne couvre ces deux éléments. Le lien tient tant que le texte explique ce qu'il couvre. Si le point 1 est retiré sans autre source, il faut rouvrir la question de garder ce lien.
3. **Retour d'expérience, point mineur** : écrire « des parcelles situées à Saint-Cyr-Bocage » plutôt que « une exploitation de Saint-Cyr-Bocage », puisque le CP situe le siège à Hémévez.


## AIDE_HRB_004

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/AIDE_HRB_004.json (aide, elevage_herbivores, 2026-10-15)

Les deux PDF (règlement et formulaire 2025) n'ont pas pu être lus directement par WebFetch. Je les ai lus en entier dans leur copie téléchargée par l'outil, les citations ci-dessous en viennent.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Aide sur les petits investissements des exploitations agricoles (Département de la Manche) | confirmé | Page de démarche : « Aide sur les petits investissements des exploitations agricoles ». Règlement : « Règlement relatif à l'aide du conseil départemental sur les petits investissements des exploitations agricoles » |
| financeur | Département de la Manche | confirmé | Règlement : « L'aide départementale aux petits investissements est réservée aux exploitations agricoles dont le siège social est situé dans la Manche » |
| type | subvention | confirmé | manche.fr : « la subvention est de 40 % du montant HT de l'investissement » |
| taux, base 40 % HT | 40 % du montant HT | confirmé | manche.fr : « la subvention est de 40 % du montant HT de l'investissement et plafonnée à 3 000 € » |
| taux, 60 % pour jeunes installés, copropriété, CUMA et collectifs | 60 % | confirmé | manche.fr : « Elle passe à 60 % plafonné à 5 000 € pour les achats en copropriétés, les jeunes installés (moins de 3 ans) ou les CUMA ». Règlement : « les investissements collectifs » |
| taux, 60 % en zone à contraintes naturelles | 60 % | confirmé avec réserve | Règlement : « Le régime du cadre européen (SA.39618 - 2014/N) [...] prévoit un taux de soutien de 40 % [...] pouvant être majoré de 20 points. Pour autant, le soutien combiné ne doit pas représenter plus de 90 %, pour les jeunes agriculteurs [...] et autres situations spécifiques (investissements dans les zones soumises à des contraintes naturelles…) ». La phrase décrit ce que le cadre européen permet, pas ce que le Département applique. La page manche.fr ne cite que copropriété, jeunes installés et CUMA. L'extrait cité dans la fiche coupe la mention des 90 % par « [...] ». |
| plafond | 3 000 € à 40 %, 5 000 € à 60 %, projet entre 1 500 € HT et 10 000 € HT | confirmé | Règlement : « 3 000 € pour les projets soutenus au taux de 40 % et 5 000 € pour les projets soutenus à 60 % ». « Le montant subventionnable minimum est fixé à 1 500 € HT et la dépense maximale à 10 000 € HT » |
| eligibilite, siège et bénéficiaires | Siège dans la Manche : exploitants à titre principal en individuel, GAEC, EARL, SCEA, CUMA, GIEE, groupements et associations de producteurs | confirmé | Règlement : « exploitants agricoles à titre principal exerçant en exploitation individuelle ; personnes morales dont l'objet est agricole (sociétés agricoles : EARL, SCEA, GAEC, etc.) ; groupements d'agriculteurs : [...] CUMA, [...] GIEE, groupements et associations de producteurs » |
| eligibilite, installés depuis plus de 3 ans au taux de base | condition au taux de base | confirmé | manche.fr : « Les exploitants doivent être installés depuis plus de 3 ans. » (suivi de la majoration pour les jeunes installés) |
| eligibilite, un projet sur trois ans, sans transparence GAEC | un seul projet par exploitation sur trois ans | confirmé | Règlement : « Un seul projet par exploitation [...] et sur une période de trois ans [...] (la transparence pour les GAEC ne sera pas activée) » |
| departements | ["50"] | confirmé | Règlement : « siège social est situé dans la Manche » |
| agences | [] (toutes) | confirmé | Aucun critère d'agence de l'eau dans le règlement. L'aide est départementale, la restriction passe par le département. |
| mesures | ACT_HRB_004 (Système fourrager résilient) | confirmé, couverture partielle | Règlement : « Équipements favorisant le pâturage (clôtures pour paddock, andaineur...), travaux d'amélioration parcellaire (chemins d'accès aux parcelles…) ». Cela correspond à « Allongez la saison de pâturage » dans la mesure. Le règlement ne mentionne ni les semences de prairies multi-espèces ni les cultures de luzerne ou de sorgho. |
| description | matériel neuf, clôtures pour paddock, andaineur, chemins d'accès, transformation et vente à la ferme, prérefroidisseurs, récupérateurs de chaleur, contention, niches à veau | confirmé | Règlement : « uniquement valable sur du matériel neuf » ; « Équipements de transformation et vente à la ferme » ; « Équipements de réduction des consommations énergétiques [...] (pré-refroidisseurs de lait, récupérateurs de chaleur…), matériel de contention, niche à veau individuelle » |
| infos_complementaires 1 (avertissement, achat avant dépôt, matériel neuf, conservation 2 ans) | texte | confirmé | Règlement : « l'acquisition du matériel ne doit pas être effectuée avant le dépôt du dossier » ; « un courrier attestant la recevabilité du dossier et l'autorisant à engager la dépense » ; « conserver le matériel subventionné a minima 2 ans après la date de notification » |
| infos_complementaires 2 (avertissement, pas de cumul) | texte | confirmé | Formulaire 2025 : « Certifient qu'aucune autre demande d'aide publique n'est sollicitée pour le projet susvisé » |
| infos_complementaires 3 (info, prérefroidisseur au titre de l'énergie, cuve et raccordement non cités) | texte | confirmé | Règlement : « Équipements de réduction des consommations énergétiques conforme à la valorisation des certificats d'économie d'énergie (pré-refroidisseurs de lait…) ». J'ai lu le règlement en entier : il ne mentionne ni cuve ni réutilisation de l'eau. |
| infos_complementaires 4, envoi (agriculture@manche.fr ou courrier à Saint-Lô) | texte | confirmé | Formulaire : « avant de l'envoyer à agriculture@manche.fr ». Démarche : envoi « par courrier à la Direction des nouvelles ruralités, 50050 Saint-Lô Cedex » (la page de démarche indique pour l'e-mail le formulaire de contact de manche.fr, le formulaire PDF et le règlement donnent l'adresse agriculture@manche.fr) |
| infos_complementaires 4, pièces | devis, RIB, attestation MSA, récapitulatif PAC, justificatif jeune agriculteur, Kbis, plan pour paddocks ou chemins | confirmé | Formulaire : « Le document PAC : tableau récapitulatif des assolements » ; « Un justificatif "jeune agriculteur" [...] Un extrait k-bis (pour les GAEC et les Sociétés) » ; « Un plan (pour les travaux d'aménagement de chemins d'accès aux pâturages et la création des paddocks) » |
| infos_complementaires 4, vote et versement | commission permanente, facture acquittée | confirmé | Règlement : « soumise au vote de la commission permanente » ; « sera versée sur la production de facture(s) acquittée(s) » |
| infos_complementaires 4, contact | 02 33 05 97 79 | confirmé | Règlement : « Direction des nouvelles ruralités [...] Tél. : 02 33 05 97 79 », repris sur la page de démarche |
| infos_complementaires 5 (ressource, démarche) | https://demarches-manche.fr/demarches-particulier/detail/33/ | confirmé | URL accessible, page de la démarche « Aide sur les petits investissements des exploitations agricoles » |
| infos_complementaires 6 (ressource, règlement) | https://www.manche.fr/wp-content/uploads/2023/10/reglement-2-2.pdf | confirmé | URL accessible, PDF du règlement (2 pages) |
| infos_complementaires 7 (ressource, formulaire 2025) | https://www.manche.fr/wp-content/uploads/2025/01/Formulaire-de-demande-daide-PI-2025.pdf | confirmé | URL accessible, « Formulaire de demande d'aide », politique départementale en faveur des petits investissements |

Hors liste des champs à contrôler : la source du logo (PNG de manche.fr) est accessible et montre bien l'emblème du Département de la Manche.

SOURCES : 5 citées, 5 accessibles

VERDICT : conforme

Points de vigilance, par ordre d'importance (aucun champ n'est contredit ni introuvable) :
1. `taux`, zones à contraintes naturelles. La seule source est la phrase du règlement qui décrit le cadre européen (« prévoit [...] autres situations spécifiques »), et elle est mal construite : elle rattache la liste au plafond de 90 % d'aide cumulée. La page du Département ne cite que copropriété, jeunes installés et CUMA. Mieux vaut écrire que cette majoration est prévue par le cadre et la faire confirmer, ou la retirer du taux. Il faudrait aussi rétablir dans l'extrait de source la phrase coupée par « [...] ».
2. Cadre juridique à vérifier, sans effet sur un champ. Le règlement (2023) se rattache au régime SA.39618 (2014/N), alors que le formulaire 2025 cite le régime SA.107520 (2023/N). Le règlement en ligne n'est peut-être plus à jour pour les taux.
3. `mesures` ACT_HRB_004. Le lien tient par le volet pâturage (clôtures de paddock, chemins d'accès). Le règlement ne couvre ni les semences ni les cultures fourragères mises en avant par la mesure.
4. `infos_complementaires` 4, deux compléments possibles à partir des mêmes sources :
   - la pièce « conseil technique contention » de la MSA pour un projet de contention, que la description cite ;
   - le délai de caducité : dépense à réaliser dans les 2 ans suivant la notification, paiement à demander dans les 3 ans (formulaire).


## AIDE_HRB_005

## Contrôle de AIDE_HRB_005 (Plan Cheval Manche)

Fiche : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/AIDE_HRB_005.json

Tout ce qui est écrit est confirmé par les deux sources citées. Aucun champ n'est contredit ni introuvable. Deux remarques ci-dessous n'empêchent pas la conformité.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Aide aux petits investissements des exploitations agricoles de la filière équine (Plan Cheval Manche) | confirmé | La page de démarche donne « Aide aux petits investissements des exploitations agricoles de la filière équine (Plan Cheval 2023-2027) ». Le règlement parle du « plan Manche Cheval ». |
| financeur | Département de la Manche | confirmé | Règlement, p. 1 : « Règlement relatif à l'aide du conseil départemental sur les petits investissements ». |
| type | subvention | confirmé | Règlement : « Taux de la subvention départementale ». |
| taux | 40 % des dépenses éligibles, 60 % pour les projets bonifiés | confirmé | Page de démarche : « 40 % des dépenses éligibles […] porté à 60 % dans le cas des projets bonifiés ». Règlement : « 40 % […] pouvant être majoré de 20 points ». |
| plafond | 3 000 € (5 000 € bonifié), projet entre 1 500 € HT et 10 000 € HT | confirmé | Règlement : « 3 000 € pour les projets soutenus au taux de 40 % et 5 000 € pour les projets soutenus à 60 % » et « minimum […] 1 500 € HT et la dépense maximale à 10 000 € HT ». |
| eligibilite (bénéficiaires) | Filière équine, siège social dans la Manche, exploitants à titre principal, EARL, SCEA, GAEC, associations d'éleveurs d'équidés, CUMA | confirmé | Règlement : « réservée aux exploitations agricoles de la filière équine dont le siège social est situé dans la Manche » et la liste des trois catégories de bénéficiaires. Le règlement précise « exerçant en exploitation individuelle », ce que la fiche omet sans le contredire. |
| eligibilite (un dossier sur trois ans) | Un seul dossier par porteur de projet (même siège social) sur trois ans | confirmé | Page de démarche : « délai de 3 ans entre deux dépôts » pour un même siège social. Règlement : « Un seul projet par exploitation […] sur une période de trois ans ». |
| eligibilite (bonification) | Label EquuRES, installés depuis moins de trois ans, investissements collectifs | confirmé | Page de démarche : bonification pour « Label EquuRES », « installés depuis moins de 3 ans », « investissements collectifs ». |
| description (périmètre et thématique) | Filière équine seulement, élevages bovins, ovins et caprins exclus, une seule thématique, pâturage (clôture, abreuvoirs, abris, entretien des prairies), matériel neuf | confirmé | Règlement : « réservée aux exploitations agricoles de la filière équine » (l'exclusion des autres élevages en découle), « répond à une seule thématique », « uniquement valable sur du matériel neuf », « matériel de clôture, abreuvoir à adduction, abri de prairies mobile… ». |
| departements | ["50"] | confirmé | Règlement : « siège social est situé dans la Manche ». |
| agences | [] | confirmé (sans objet) | L'aide est financée par le Département et non par une agence de l'eau. La restriction territoriale passe par `departements`. |
| categories | ameliorer_efficacite_hydrique | cohérent | Même catégorie que ACT_HRB_003. |
| mesures ACT_HRB_003 (Abreuvement au pâturage) | lien | confirmé, avec réserve | Règlement : « Investissements permettant le pâturage tournant des équidés (matériel de clôture, abreuvoir à adduction, abri de prairies mobile...) ». Les abreuvoirs alimentés au pâturage sont donc éligibles. Canalisation enterrée, pompe solaire ou à museau et réserve de secours, qui font aussi partie de la mesure, ne sont pas cités. |
| infos_complementaires[0] (avertissement) | Pas d'achat avant le dépôt, attendre le courrier de recevabilité, matériel neuf conservé deux ans | confirmé | Règlement, p. 2 : « l'acquisition du matériel ne doit pas être effectuée avant le dépôt du dossier », « courrier attestant la recevabilité du dossier et l'autorisant à engager la dépense », « conserver le matériel subventionné à minima 2 ans après la date de notification ». |
| infos_complementaires[1] (avertissement) | Plan 2023-2027, page en ligne sans date de clôture, ouverture en 2026 non confirmée | confirmé | Page de démarche : « Plan Cheval 2023-2027 ». La page n'indique ni date d'ouverture ni date de clôture, et sa seule date est le 4 avril 2025 (bonification EquuRES). |
| infos_complementaires[2] (info) | Direction des nouvelles ruralités, 02 33 05 97 68 ; formulaire, devis, RIB, attestation MSA, plan ; vote en commission permanente ; versement sur factures acquittées | confirmé | Règlement, p. 2 : liste des pièces (dossier signé, devis détaillés, RIB, attestation MSA, « un plan (pour les aménagements liés aux pâturages) »), « soumise au vote de la commission permanente », « versée sur la production de facture(s) acquittée(s) », « Tél. : 02 33 05 97 68 ». |
| infos_complementaires[3] (ressource) | Lien vers demarches-manche.fr/…/detail/15/ | confirmé | La page répond, et elle propose le règlement et le formulaire en téléchargement. |
| logo_url (provenance) | Icône du site manche.fr | confirmé | L'image source répond : c'est l'emblème du Département (Mont-Saint-Michel stylisé). |

SOURCES : 3 citées, 3 accessibles

Le PDF du règlement est arrivé en binaire non converti. Je l'ai lu dans la copie enregistrée par WebFetch, deux pages, texte complet.

VERDICT : conforme

### Points à surveiller (rien n'est à corriger)

1. **Lien ACT_HRB_003, couverture partielle.** La source ne finance que les abreuvoirs « à adduction » posés dans le cadre du pâturage tournant des équidés. Le réseau enterré, la pompe et la réserve de secours n'y figurent pas. Le lien tient, mais un éleveur ne doit pas croire que toute la mesure est financée.
2. **Public plus étroit que le secteur.** Seule la filière équine est éligible (NAF 01.43Z et les centres équestres), alors que la fiche sera montrée à tout élevage d'herbivores de la Manche (01.41Z à 01.50Z). La description le dit clairement, mais le moteur ne peut pas filtrer par code NAF à l'intérieur d'un secteur.
3. **Validité dans le temps.** Le règlement est un PDF de février 2024 et la page n'a pas de date de clôture. L'avertissement de la fiche le dit déjà. Il faudra revérifier la page avant de publier si la promotion tarde.

Je n'ai pas eu à ouvrir /Users/valentin/Desktop/Noé/api/seeds/actions_transversal.json, puisque la fiche n'est liée à aucune mesure ACT_AGR_*. Les codes NAF du secteur viennent de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/questionnaire_elevage_herbivores.json.


## AIDE_HRB_006

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/AIDE_HRB_006.json

Deux des sources officielles citées (la page normandie.fr et la fiche dispositif PDF) renvoient une erreur HTTP 403 à WebFetch, comme l'URL du favicon. Seuls les-aides.fr et chevaux-normandie.com ont pu être lus. Tout ce que la fiche tire uniquement de normandie.fr ou du PDF est donc classé « introuvable ».

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Soutien aux investissements des entreprises équines de demain (Région Normandie, FEADER) | confirmé | Titre identique sur les-aides.fr et chevaux-normandie.com. les-aides.fr : « Dispositif cofinancé par l'Union européenne avec le [...] FEADER ». |
| financeur | Région Normandie (crédits régionaux et FEADER) | confirmé | les-aides.fr : dispositif de la région Normandie « cofinancé par l'Union européenne avec le [...] FEADER ». |
| type | subvention | introuvable | Les deux sources citées pour ce champ (PDF et normandie.fr) renvoient 403. les-aides.fr ne précise pas la nature de l'aide. chevaux-normandie.com ne la nomme pas non plus. |
| taux (20 % / 25 %) | 20 %, 25 % si structure EquuRES ou membre du Réseau des Clubs d'Excellence | confirmé | les-aides.fr : « 20% : taux d'aide de base, 25% : taux d'aide si structure labellisée EquuRES, et/ou membre du Réseau des Clubs d'Excellence en Normandie ». chevaux-normandie.com donne les mêmes taux. |
| taux (précision « environnement et bien-être animal ou bien-être au travail ») | entre parenthèses dans le taux | introuvable | Cette précision ne figure que dans les extraits du PDF et de normandie.fr (403). les-aides.fr ne la donne pas. |
| plafond (plancher) | 10 000 € | confirmé | les-aides.fr : « Le plancher des dépenses éligibles est fixé à 10 000 € ». chevaux-normandie.com : 10 000 € HT. |
| plafond (plafond) | 150 000 € sur 2023-2027 | contredit | les-aides.fr : « le plafond des dépenses éligibles à 300 000 € sur la durée totale de la programmation (2023-2027) ». chevaux-normandie.com dit 150 000 € HT. Les sources officielles (PDF et normandie.fr) sont inaccessibles, je ne peux donc pas trancher. |
| plafond (un seul dossier par bénéficiaire) | un seul dossier par bénéficiaire | introuvable | Seul le PDF (403) le dit. les-aides.fr ne le mentionne pas, chevaux-normandie.com non plus. |
| eligibilite (MSA à titre principal, personnes morales dont le dirigeant l'est) | exploitants individuels ou personnes morales agricoles, MSA à titre principal | confirmé | les-aides.fr : « exploitants agricoles individuels affiliés à la MSA, à titre principal [...] personnes morales [...] dont le dirigeant est affilié à la MSA à titre principal ». Divergence : chevaux-normandie.com indique « à titre principal ou secondaire » et ajoute les micro-entreprises et les établissements d'enseignement. |
| eligibilite (diplôme, plus de 80 % du CA, EBE de 10 000 à 100 000 €) | idem | confirmé | les-aides.fr : « Justifier d'un diplôme agricole équin », « plus de 80% de son CA via l'activité équine », EBE moyen sur 3 exercices entre 10 000 € et 100 000 €. chevaux-normandie.com confirme le CA et l'EBE. |
| eligibilite (exclusions : SAS, SCI, micro-BA, cotisants solidaires) | exclus | confirmé | les-aides.fr : « Les structures relevant du régime du micro-bénéfice agricole ; ainsi que les exploitants agricoles cotisants solidaires [...] Les SAS et SCI ». |
| eligibilite (associations exclues) | exclues | introuvable | Seul le PDF (403) le dit. les-aides.fr ne mentionne pas les associations. |
| eligibilite (projet et entreprise en Normandie) | les deux en Normandie | introuvable | Seul le PDF (403) le dit. les-aides.fr ne pose aucune condition de localisation explicite. |
| description (quatre enjeux) | adaptation climatique, bien-être animal, pénibilité, numérique et risques sanitaires | confirmé | les-aides.fr : « adaptation aux enjeux environnementaux et climatiques, meilleure prise en compte du bien-être animal, baisse de la pénibilité du travail, innovation numérique et anticipation des risques sanitaires ». |
| description (récupération des eaux de douches, des aires de lavage et des eaux pluviales) | éligible | confirmé | les-aides.fr : « les systèmes de récupération des eaux de douches, des aires de lavage, des eaux pluviales ». |
| description (arrosage par aspersion, par citerne ou par subirrigation) | éligible | confirmé | les-aides.fr : « les systèmes d'arrosage des sols par aspersion, par citerne, par subirrigation ». |
| description (manèges, carrières, pistes avec subirrigation ou récupération des eaux) | éligibles sous condition | confirmé | les-aides.fr : « les manèges, carrières, ronds d'havrincourt et de longe, pistes, si et seulement s'ils remplissent » une condition, dont la subirrigation ou la récupération des eaux. |
| description (boxes avec abreuvoirs automatiques) | boxes financés seulement s'ils sont équipés d'abreuvoirs automatiques | confirmé | les-aides.fr : « barn et boxes financés si et seulement si : taille minimale 12 m², contacts sociaux entre chevaux, équipement en abreuvoirs eau automatique ». Ce n'est qu'une condition parmi plusieurs. |
| description (forages exclus) | exclus | confirmé | les-aides.fr, dans la liste des dépenses inéligibles : « les forages, ». |
| categories | valoriser_reut_eaux_non_conventionnelles | confirmé | Cohérent avec les dépenses éligibles de récupération des eaux pluviales, des douches et des aires de lavage (les-aides.fr). |
| departements | 14, 27, 50, 61, 76 | confirmé | Dispositif de la Région Normandie (les-aides.fr, chevaux-normandie.com). La liste des 5 départements est déduite du périmètre régional, aucune source ne l'énumère. |
| agences | [] (toutes) | confirmé | Aucune restriction par agence de l'eau dans les sources. Le filtrage territorial passe par les départements. |
| mesures : ACT_AGR_006 (récupération d'eau de pluie des toitures) | lien | confirmé | les-aides.fr cite explicitement parmi les dépenses éligibles « les systèmes de récupération des eaux [...] des eaux pluviales ». |
| infos_complementaires 1 (avertissement : non-commencement avant le dépôt) | devis signé, bon de commande ou acompte avant le dépôt font rejeter la dépense | introuvable | Seul le PDF (403) le dit. les-aides.fr n'en parle pas. |
| infos_complementaires 2 (avertissement : non-cumul) | non cumulable avec une autre aide publique | introuvable | Seul le PDF (403) le dit. |
| infos_complementaires 2 (forages inéligibles) | inéligibles | confirmé | les-aides.fr : « les forages, ». |
| infos_complementaires 2 (entretien courant et renouvellement de matériel inéligibles) | inéligibles | introuvable | Seule la page normandie.fr (403) le dit. Ces dépenses ne figurent pas dans la liste des inéligibles de les-aides.fr. |
| infos_complementaires 3 (dépôt sur Mon Espace Aides Normandie, par la structure elle-même) | idem | confirmé | les-aides.fr : « Le dossier de demande d'aide doit être déposé par la structure potentiellement bénéficiaire de l'aide », sur Mon Espace Aides Normandie. |
| infos_complementaires 3 (dépôt à tout moment, dossier d'un tiers irrecevable, justificatif EquuRES ou Clubs d'Excellence dès le dépôt) | idem | introuvable | Seul le PDF (403) le dit. les-aides.fr ne mentionne aucun de ces trois points. |
| infos_complementaires 3 (lien vers monespace-aides.normandie.fr) | lien de dépôt | introuvable | La page répond, mais n'affiche que « Espace Usagers » : rien n'y identifie le dispositif. La page normandie.fr qui donne ce lien renvoie 403. |
| infos_complementaires 4 (contact) | Service Économie Équine, DARM, 02 31 15 13 80, economieequine@normandie.fr | confirmé | les-aides.fr : « Direction de l'Agriculture et des Ressources Marines - Service Économie Équine au 02 31 15 13 80 ou à economieequine@normandie.fr ». |
| infos_complementaires 5 (ressource : page normandie.fr) | lien | confirmé | La page renvoie 403 à WebFetch, mais chevaux-normandie.com donne cette URL comme lien « En savoir plus » du dispositif. |
| infos_complementaires 6 (ressource : PDF fiche dispositif) | lien | introuvable | L'URL renvoie 403 et aucune source accessible ne la cite. |
| logo_url (source favicon normandie.fr) | logo Cloudinary | introuvable | L'URL source renvoie 403. Ce champ n'est pas factuel. |

SOURCES : 5 citées, 2 accessibles (les-aides.fr et chevaux-normandie.com, lus normalement ; normandie.fr, le PDF de la fiche dispositif et le favicon renvoient HTTP 403).

VERDICT : à corriger

Champs à corriger ou à sourcer, par ordre d'importance :
1. **plafond** : les-aides.fr donne un plafond de 300 000 € de dépenses éligibles, chevaux-normandie.com et l'extrait recopié du PDF donnent 150 000 €. Il faut trancher avec le PDF officiel de la Région (version 2026-09), consulté à la main puisqu'il renvoie 403 à WebFetch. Si la Région a révisé le plafond, ajouter dans les sources une mention qui explique l'écart avec les-aides.fr.
2. **eligibilite** : les associations exclues et la localisation en Normandie du projet et de l'entreprise ne s'appuient que sur le PDF (403). Autre point à vérifier : chevaux-normandie.com indique « à titre principal ou secondaire » et cite les micro-entreprises et les établissements d'enseignement parmi les bénéficiaires, alors que les-aides.fr exclut ces établissements. Confirmer sur le PDF officiel.
3. **infos_complementaires 1 et 2** (non-commencement, non-cumul, entretien et renouvellement inéligibles) : à sourcer sur une page accessible ou à vérifier à la main sur le PDF et sur normandie.fr.
4. **infos_complementaires 3** : le dépôt à tout moment, l'irrecevabilité d'un dossier déposé par un tiers et le justificatif EquuRES exigé au dépôt sont à vérifier sur le PDF.
5. **type** (subvention) : à confirmer sur le PDF ou sur normandie.fr, aucune source accessible ne le dit.
6. **taux** : la précision « environnement et bien-être animal ou bien-être au travail » est à vérifier sur le PDF. Les taux eux-mêmes (20 % et 25 %) sont confirmés.
7. **plafond** : la mention « un seul dossier par bénéficiaire » est à vérifier sur le PDF.
8. **infos_complementaires 6** (lien vers le PDF) et **logo_url** : à vérifier à la main, inaccessibles depuis WebFetch.


## AIDE_HRB_007

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/AIDE_HRB_007.json (aide, elevage_herbivores, 2026-10-15)

Point de méthode : le PDF du webinaire de la Chambre d'agriculture (20260507_WEBINAIRE_NAI4_ChambreAgriNormandie.pdf) répond (PDF de 1,3 Mo, 20 pages), mais WebFetch n'en extrait aucun texte (flux compressés et images), et le Read local échoue faute de pdftoppm. Je n'ai donc pas pu vérifier les extraits que la fiche attribue à ce PDF. Tout ce qui ne repose que sur lui est classé « introuvable ». Les deux pages HTML citées ont pu être lues.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Normandie Agriculture Investissement (NAI), aide aux investissements des exploitations de la Région Normandie | confirmé | Page dossier : titre « Normandie Agriculture Investissement ». Page prestation : « Accompagnement demande de subvention (NAI) » |
| financeur | Région Normandie | confirmé | Page dossier : « piloté par la Région, vous accompagne jusqu'à 40 % d'aides », renvoi vers normandie.fr |
| type | subvention | confirmé | Page prestation : « Accompagnement demande de subvention (NAI) » |
| taux P1 et P2 | 40 % | confirmé | Page dossier : « > 40 % d'aides » pour les deux, le chapeau dit « jusqu'à 40 % d'aides » (le « > » sert de puce) |
| taux P3 | 30 % (projet conquérant) | confirmé | Page dossier : « > 30 % d'aides », projet « conquérant » |
| taux P4 | 15 % (« projet d'adaptation ») | confirmé (libellé différent) | Page dossier : « > 15 % d'aides », catégorie intitulée « PROJET D'AMELIORATION, des conditions de travail et d'adaptation du système ». Le libellé « projet d'adaptation » ne vient que du PDF, illisible |
| plafond : minimum | 10 000 € de dépenses éligibles | confirmé | Page dossier : « Entre 10 000 et 200 000 € d'investissements éligibles sur 2023-2027 » |
| plafond P1 | 200 000 €, 400 000 € pour les CUMA | confirmé | Page dossier : « (400 000 € pour les projets déposés par les CUMA) » |
| plafond P2 | 150 000 € | confirmé | Page dossier : investissements de 10 000 à 150 000 € |
| plafond P3 | 85 000 €, 170 000 € pour les CUMA | confirmé | Page dossier : « Entre 10 000 et 85 000 € [...] (170 000 € pour les projets déposés par les CUMA) » |
| plafond P4 | 75 000 €, CUMA 140 000 € (page dossier) ou 150 000 € (PDF) | 75 000 et 140 000 confirmés, 150 000 introuvable | Page dossier : « Entre 10000 et 75 000 € HT [...] (140 000 € pour les projets déposés par les CUMA) ». Le chiffre de 150 000 € attribué au PDF n'a pas pu être lu. La fiche signale déjà l'écart |
| plafond : « par exploitation » | par exploitation, période 2023-2027 | 2023-2027 confirmé, « par exploitation » introuvable | La page dit « d'investissements éligibles sur 2023-2027 », sans préciser « par exploitation » |
| eligibilite : exploitants individuels (à titre principal ou secondaire), sociétés agricoles | idem | partiellement confirmé | Page dossier : « Agriculteurs seuls ou regroupés, sociétés avec activité agricole ». La mention « à titre principal ou secondaire ou justifiant que leur activité principale est agricole » ne vient que du PDF : introuvable |
| eligibilite : CUMA | éligibles | confirmé | Page dossier : « pour les projets déposés par les CUMA » |
| eligibilite : condition P1 | au moins 50 % du coût du projet sur une filière stratégique | confirmé (nuance) | Page dossier : « Si au moins 50% des dépenses éligibles concernent une ou plusieurs filières suivantes ». La page parle de dépenses éligibles, pas de coût du projet |
| eligibilite : omission | (absent) | à noter | La page dossier cite aussi « structures de transformation de produits agricoles ou de commercialisation en circuits courts ». Ce n'est pas une contradiction, mais un oubli |
| departements | 14, 27, 50, 61, 76 | confirmé | Dispositif de la Région Normandie (page dossier). Ce sont les cinq départements normands |
| agences | [] (toutes) | confirmé (cohérent) | Aucune source ne limite l'aide à une agence de l'eau. Le filtre se fait par département |
| mesures ACT_HRB_003 (abreuvement au pâturage, réserve) | lien | introuvable | Abreuvoirs, aménagement des pâtures et réserve d'eau ne figurent que dans l'extrait attribué au PDF, illisible. La page dossier ne les mentionne pas (réponse de l'outil : « Abreuvoirs : non mentionnés. Réserve d'eau : non mentionnée ») |
| mesures ACT_HRB_007 (points d'abreuvement hors du cours d'eau, recul de clôture en berge) | lien | introuvable | Seule source, le PDF, illisible. Même à le supposer exact, l'extrait (« Aménagement des pâtures (chemins d'accès, clôtures, abreuvoirs) ») ne décrit pas explicitement la protection des berges ni l'abreuvement hors du lit : le lien serait faible |
| mesures ACT_AGR_006 (récupération des eaux de pluie des toitures) | lien | introuvable | La réserve « alimentée par récupération des eaux de pluie » ne figure que dans l'extrait du PDF, illisible. La page dossier ne parle ni d'eau de pluie ni de réserve |
| infos 1 (avertissement) | pas de cumul sur le même objet, renouvellement exclu si l'achat neuf date de moins de 7 ans | introuvable | PDF seul. La page dossier ne parle ni de cumul ni des 7 ans |
| infos 2 | début des travaux possible depuis le 1er janvier 2023, réalisation à partir du dépôt, prévenir la Région de tout changement | introuvable | PDF seul (frise de procédure) |
| infos 3 | P1 : bovins viande, ovins/caprins, AB, transformation à la ferme et circuit court, races normandes (au moins 90 % de vaches normandes, ou contrat avec une entreprise), bovins lait absents en tant que tels | confirmé sauf « ou contrat avec une entreprise » (introuvable) | Page dossier : « Filière bovins viande (naisseurs, engraisseurs) », « Filière ovine/caprine (élevage) », « Agriculture Biologique », « Transformation à la ferme en circuit court », « dont les élevage laitiers avec au moins 90% de vaches de race normande ». Pas de filière bovins lait. L'alternative du contrat ne vient que du PDF |
| infos 4 | réserve individuelle, déconnectée, alimentée par l'eau de pluie, effluents aidés seulement au-delà du minimum réglementaire | introuvable | PDF seul. La page dossier ne cite les effluents qu'à propos du matériel d'épandage, réservé aux CUMA |
| infos 5 | version 4, commission permanente du 27 avril 2026, dossiers déposés depuis le 4 mai 2026 | introuvable (4 mai seulement évoqué) | La page dossier cite le 4 mai 2026 pour un autre point (« les silos de stockage "verticaux" d'aliments sont à nouveau éligibles »). Version 4 et commission du 27 avril : PDF seul |
| infos 6 : téléprocédure, compte personnel | idem | confirmé | Page dossier : « Demander les aides : téléprocédure exclusive », « compte créé gratuitement » |
| infos 6 : téléphone 02 79 18 33 46, mail investissement-agri-agro@normandie.fr, lien monespace-aides.normandie.fr | idem | introuvable | PDF seul. La page dossier ne donne aucun contact de la Région (seulement le 02 31 47 22 47 de la Chambre) |
| infos 6 : accompagnement des Chambres sur devis | idem | confirmé | Page prestation : « Le MONTAGE du dossier », « Tarifs et devis sur demande » |
| infos 7 (ressource) | normandie.fr/normandie-agriculture-investissement | confirmé | La page dossier renvoie à ce site pour les conditions détaillées |
| infos 8 (ressource) | PDF du webinaire du 7 mai 2026 | confirmé (le lien répond), contenu non vérifiable | L'URL renvoie bien un PDF de 20 pages, mais son texte n'a pas pu être extrait |
| description (hors grille) | bâtiments, bloc de traite, effluents, pâtures, réserve d'eau de pluie | partiellement confirmé | Page dossier : « les dépenses éligibles se concentrent en filières d'élevage : bâtiments d'élevage ainsi que leurs équipements fixes (traite et autres) ». Le reste vient du PDF seul |

SOURCES : 3 citées, 2 accessibles (le PDF du webinaire répond, mais son contenu n'a pas pu être lu par l'outil. Les deux pages HTML de normandie.chambres-agriculture.fr ont été lues)

VERDICT : incomplet

Aucun champ n'est contredit, mais une grande partie de la fiche repose sur le seul PDF, que je n'ai pas pu lire.

Champs à sourcer ou à corriger, par ordre d'importance :
1. Les trois liens `mesures` (ACT_HRB_003, ACT_HRB_007, ACT_AGR_006) : leur seule justification est le PDF, illisible. Il faut une source lisible (par exemple la page normandie.fr du dispositif, ou une transcription vérifiée du PDF) qui cite les abreuvoirs et l'aménagement des pâtures, ainsi que la réserve alimentée par l'eau de pluie. Pour ACT_HRB_007, même l'extrait revendiqué ne décrit pas explicitement l'aménagement de l'abreuvement hors du cours d'eau ni la protection des berges : le lien est à reconsidérer.
2. Plafond CUMA en priorité 4 : 140 000 € est confirmé par la page dossier, 150 000 € n'est pas vérifiable. Il faut trancher avec une source de la Région. Les mots « par exploitation » sont à sourcer.
3. infos_complementaires 1 (non-cumul, règle des 7 ans) et 2 (début des travaux au 1er janvier 2023, procédure) : avertissements à portée pratique, sourcés uniquement par le PDF.
4. Contacts de la Région (téléphone, mail, lien monespace-aides.normandie.fr) et éléments de version (version 4, commission permanente du 27 avril 2026, application au 4 mai 2026) : PDF seul.
5. infos 4 (réserve individuelle et déconnectée, effluents au-delà du minimum réglementaire) : PDF seul.
6. Eligibilite : la mention « à titre principal ou secondaire » est à sourcer. La condition P1 porte sur « 50 % des dépenses éligibles » selon la page dossier, et non sur le « coût du projet ». Il manque les structures de transformation et de circuits courts citées par la page.
7. Libellé de la priorité 4 : la page dossier dit « projet d'amélioration, des conditions de travail et d'adaptation du système », la fiche dit « projet d'adaptation ».
8. infos 3 : l'alternative « ou contrat avec une entreprise » pour les races normandes est à sourcer.

Remarque pratique : pour lever la plupart de ces points, il suffit de citer en complément la page de la Région (https://www.normandie.fr/normandie-agriculture-investissement, déjà citée en ressource), à condition qu'elle reprenne ces éléments, ou de faire extraire le texte du PDF par un outil OCR avant de recontrôler.


## AIDE_HRB_008

## Contrôle de AIDE_HRB_008 (MAEC Autonomie fourragère HBV, Normandie)

Fiche contrôlée : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/AIDE_HRB_008.json

Aucun champ n'est contredit. Les montants, plafonds, seuils et délais correspondent mot pour mot aux notices DRAAF 2026. Le verdict est donc conforme, avec trois réserves listées en fin de rapport.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | MAEC « Autonomie fourragère, élevages d'herbivores » (PAC 2023-2027, territoires PAEC de Normandie) | confirmé | 43-anda-hbv3 : « Notice de la mesure « Autonomie fourragère - Élevages d'herbivores » - Niveau 3 ». Fiche de liaison : « plan stratégique national (PSN) 2023 - 2027 ». |
| financeur | UE (FEADER) et cofinanceur national, mise en œuvre DRAAF et DDT(M) de Normandie | confirmé | Notices : « Montants annuels plafonnés à l'exploitation (total FEADER/Cofinanceur national) ». Fiche de liaison : « à adresser, par l'opérateur, à la DRAAF et à la DDT(M) ». Le diagnostic est transmis « à la DDT(M) ». |
| type | subvention | confirmé | « une aide de 233 € par hectare et par an sera versée pendant la durée de l'engagement » |
| taux, niveau 3 | 233 €/ha/an | confirmé | Même montant dans les quatre notices HBV3 ouvertes (ANDA, SPAU, VSEP, SEIP) : « une aide de 233 € par hectare et par an » |
| taux, niveau 2 | 177 €/ha/an | confirmé | 43-anda-hbv2 : « une aide de 177 € par hectare et par an ». Une seule notice de niveau 2 est citée. |
| taux, niveau 1 | 121 €/ha/an | confirmé | 1-bfva-hbv1 : « une aide de 121 € par hectare et par an ». Une seule notice de niveau 1 est citée. |
| taux, restriction du niveau 1 | ouvert seulement dans les PAEC de l'Eure et de la Seine-Maritime | confirmé | « La MAEC HBV de niveau 1 est ouverte uniquement pour les surfaces situées dans les PAEC des départements 27 et 76 » |
| plafond, barème | 6 000 € (sortante ou maintien), 8 000 / 10 000 / 12 000 € (évolution, niveaux 1 à 3) | confirmé | Tableau des notices : « Exploitation sortante » 6 000 €, « en maintien » 6 000 €, puis « en évolution » 8 000, 10 000 et 12 000 € |
| plafond, rang 2.2 | niveau 3 plafonné à 6 000 €, par exemple au rang 2.2 des PAEC à enjeu biodiversité | confirmé | « 2.2 - MAEC HBV de niveau 3 [...] 6 000 € 1 ». Note 1 : « Le plafond est de 6 000€ (maintien) car le taux d'herbe exigé ne permet pas à l'exploitation d'être en évolution » |
| plafond, agence de l'eau | dans certains PAEC, plafond hors financement additionnel éventuel de l'AESN | confirmé | 3-spau-hbv3 et 1-bfva-hbv1 : « hors financement additionnel éventuel de l'Agence de l'Eau Seine Normandie ». La mention est absente des notices ANDA, VSEP et SEIP, d'où le « certains PAEC ». |
| description, objectifs | plus d'herbe, moins de maïs, moins de concentrés, valorisation de l'herbe par le pâturage | confirmé | « introduire davantage d'herbe dans l'assolement, à réduire la part du maïs [...] notamment par le pâturage » |
| description, intervention | intervention 70.09 du PSN de la PAC | confirmé | « Intervention 70.09 : Mesure agroenvironnementale et climatique (MAEC) ». PSN cité dans la fiche de liaison. |
| description, seuils du niveau 3 | 75 % d'herbe dans la SAU, 10 % de maïs ensilage au plus, à partir du 15 mai 2028 | confirmé | « part minimale de 75 % de surface en herbe dans la SAU » et « part maximale de 10 % de surface en maïs [...] Récolte ensilage ». Période pour les deux : « À partir du 15 mai 2028 ». |
| description, concentrés | 800 kg par UGB bovine ou équine | confirmé | « 800 kg/UGB bovine ou équine, 1000 kg/UGB ovine, 1600 kg/UGB caprine », également à partir du 15 mai 2028 |
| description, azote et phytosanitaires | limites d'azote minéral et de phytosanitaires sur les prairies | confirmé | « Limiter les apports de fertilisants azotés minéraux sur au moins 90 % des prairies [...] à 50 kg N/ha/an ». « Ne pas utiliser de produits phytosanitaires sur au moins 90% des prairies permanentes » |
| description, variantes territoriales | 55 % de prairies permanentes et 1,6 UGB/ha (ANDA, SPAU, VSEP), contre 45 % et 1,8 UGB/ha (Seine amont) | confirmé | ANDA, SPAU, VSEP : « maximal de 1,6 UGB/hectare » et « part minimale de 55 % ». SEIP : « 1,8 UGB/hectare » et « part minimale de 45 % » |
| eligibilite | agriculteurs actifs (GAEC compris), une parcelle dans un PAEC, 90 % des terres engagées, chargement non nul, diagnostic agro-écologique | confirmé | « Les bénéficiaires éligibles sont les agriculteurs actifs [...] Les GAEC sont éligibles ». « Engager au moins 90 % [...] Avoir au moins une parcelle éligible dans le PAEC [...] Réaliser un diagnostic agro-écologique [...] non nul » |
| departements | 14, 27, 50, 61, 76 | confirmé | Page des cartes individualisées : « 3 - NO SPAU [...] calvados », « 5 - NO SEI2 SEIO SEIP [...] eure », « 4 - NO VSEP [...] manche », « 43 - NO ANDA [...] orne », « 1 - NO BFVA [...] seine-maritime ». Chacun de ces PAEC a une notice HBV de campagne 2026. |
| agences | [] (toutes) | confirmé | Mesure FEADER et cofinancement national. L'AESN n'apparaît que comme « financement additionnel éventuel ». Rien ne justifie de restreindre à une agence. |
| mesures | ACT_HRB_004 | confirmé | La mesure (allonger le pâturage, prairies, stock fourrager) correspond à la dépense rémunérée : « accroître l'autonomie alimentaire de l'exploitation en valorisant au mieux la production d'herbe, notamment par le pâturage et en développant des nouvelles cultures » |
| infos_complementaires[0], avertissement | ouverte seulement dans certains PAEC, vérifier la synthèse DRAAF, contacter la structure animatrice | confirmé | Page a3118 : « Cartes des PAEC ouverts pour la campagne 2026 » et lien « Synthese maec par PAEC 2026 ». Notices : « Pour toute information complémentaire, contacter la structure animatrice de la mesure » |
| infos_complementaires[1], avertissement | diagnostic transmis à la DDT(M) au 15 septembre ; non cumulable avec un PSE public | confirmé | « doit être transmis à la DDT(M) au plus tard au 15 septembre de la première année d'engagement. En cas de non-transmission, le dossier ne pourra pas être engagé ». Fiche de liaison : « Les PSE financés sur des fonds publics [...] ne sont pas cumulables avec : [...] les MAEC systèmes surfaciques » |
| infos_complementaires[2], info, durée du contrat | de la date limite PAC de l'année d'engagement, puis 3 ans | confirmé | « à partir de la date limite de dépôt des dossiers PAC de l'année d'engagement et durant les 3 années suivantes » |
| infos_complementaires[2], info, priorisation | rang 1 : fiche de liaison conforme et agriculteur à titre principal ; puis type de PAEC, 10 UGB, taux d'herbe | confirmé | « Pour toutes les MAEC, avoir déposé une fiche de liaison conforme Et, pour les MAEC systèmes, être agriculteur à titre principal ». Les rangs suivants exigent « au moins 10 UGB » et priorisent « par ordre décroissant du taux d'herbe ». Fiche de liaison : « annexe 4 de l'arrêté préfectoral du 23 octobre 2025 » |
| infos_complementaires[2], info, fiche de liaison 2026 | signée par l'exploitant et l'opérateur, à envoyer avant le 26 mai 2026 | confirmé | « à dater et à signer par le demandeur et l'opérateur ». « à adresser, par l'opérateur, à la DRAAF et à la DDT(M) [...] avant le 26 mai 2026 » |
| infos_complementaires[3], ressource | Notices des territoires des MAEC et des PAEC 2026 | confirmé | Titre de la page r1631 : « Notices des territoires des MAEC et des PAEC 2026 \| DRAAF Normandie » |
| infos_complementaires[4], ressource | exemple de notice de niveau 3, Andainette (Orne), 2026 | confirmé | « NO_ANDA_HBV3 Territoire « 43 - Bassin versant de l'Andainette - Périmètre global » Campagne 2026 », structure animatrice à 61320 Carrouges |

SOURCES : 12 citées, 12 accessibles

VERDICT : conforme

### Réserves, par ordre d'importance

1. **Montants des niveaux 2 et 1 (taux).** 177 € et 121 € ne sont vérifiés que sur une notice chacun : ANDA pour le niveau 2, BFVA pour le niveau 1. Le niveau 3 est constant sur quatre territoires, ce qui laisse penser que le barème est régional, mais aucune source citée ne le dit explicitement. Pour lever le doute, il suffit d'ajouter une deuxième notice HBV2 et une deuxième notice HBV1.
2. **Synthèse xlsx (champ departements).** Le fichier 20260415-synthese_maec_2026.xlsx répond, mais je n'ai pas pu en lire le contenu : c'est un binaire et je n'avais pas d'outil pour l'ouvrir. L'extrait de la fiche (lignes HBV3 et HBV1 cochées) n'est donc pas vérifié. Le champ departements reste confirmé par la page des cartes individualisées et par les cinq notices.
3. **Concentrés (description, formulation).** La parenthèse « (à partir du 15 mai 2028) » est placée après le maïs ensilage. Elle s'applique aussi au plafond de concentrés, qui a la même période d'application. Ce n'est pas faux, mais une reformulation éviterait de laisser croire que le plafond s'applique dès 2026.

Remarque mineure : sur la page a3118, les fichiers de cartes à télécharger sont libellés « campagnes 23 à 25 » alors que la page est titrée 2026. Le lien de l'avertissement reste valable puisque la page porte aussi la synthèse 2026.

Les fichiers téléchargés par WebFetch sont dans /Users/valentin/.claude/projects/-Users-valentin-Desktop-No-/60ac4223-afa5-4f8d-a21b-f94073de0b00/tool-results/.


## AIDE_HRB_009

## Contrôle de AIDE_HRB_009 (fiche ECO2, sobriété en eau de l'agriculture, agence de l'eau RMC)

**Verdict : conforme.** Aucun champ n'est contredit ni introuvable. Il reste quatre retouches facultatives, listées en fin de rapport.

Fiche contrôlée : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/AIDE_HRB_009.json

WebFetch n'a pas su lire le texte des PDF. J'ai donc lu les deux PDF principaux dans leur intégralité à partir des copies téléchargées par WebFetch : la fiche ECO2 (5 pages) et les conditions générales (26 pages). J'ai aussi vérifié l'image du logo.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Sobriété en eau de l'agriculture, fiche ECO2 (12e programme 2025-2030, Rhône Méditerranée Corse) | confirmé | ECO2 p.1 : « FICHE AIDE 12e programme 2025-2030 » et « ECO2 - Sobriété en eau de l'agriculture », bandeaux « Bassin Rhône-Méditerranée » et « Bassin de Corse ». |
| financeur | Agence de l'eau Rhône Méditerranée Corse | confirmé | Logo de l'agence sur chaque page d'ECO2, et dans les conditions générales : « L'AGENCE DE L'EAU RHONE MEDITERRANEE CORSE, … DECIDE Une subvention de … ». |
| type | subvention | confirmé | Conditions générales §1 : « Les aides sont attribuées sous forme de subventions, soit proportionnelles à l'assiette retenue pour le projet… » |
| taux (volet équipements) | jusqu'à 70 % en secteur prioritaire du SDAGE pour la gestion quantitative, 50 % ailleurs | confirmé | ECO2 p.2 : « Études et travaux d'économie d'eau > Sur les secteurs prioritaires des SDAGE pour la gestion quantitative 70% … > Hors secteurs prioritaires … 50% ». |
| taux (volet pratiques) | diagnostic territorial, communication et sensibilisation : jusqu'à 70 % | confirmé | ECO2 p.4 : « Diagnostic territorial 70 % » et « Actions de communication et sensibilisation associées aux projets de changement de pratiques et de réduction des besoins en eau 70 % ». La fiche Noé omet le qualificatif « associées aux projets… ». |
| taux (limite) | dans la limite de l'encadrement européen des aides d'État et du dispositif régional de la PAC | confirmé | ECO2 p.3 et p.5 : « appliquées dans la limite du respect de l'encadrement européen des aides d'Etat et le cas échant du respect des modalités du dispositif régional de la PAC ». |
| plafond | null | confirmé | ECO2 ne fixe aucun plafond de montant. Les conditions générales ne plafonnent que le coût journalier des réalisations en régie (550 €/jour, §4.3), ce qui n'est pas un plafond d'aide. |
| eligibilite (volet équipements, bénéficiaires) | agriculteurs et groupements (associations syndicales), gestionnaires de réseaux d'eau brute | confirmé | ECO2 p.2 : « Agriculteurs et groupements d'agriculteurs (associations syndicales…) ; Acteurs économiques non agricoles gestionnaires de réseaux d'alimentation d'eau brute… ; Etablissements publics gestionnaires… » |
| eligibilite (volet équipements, territoire) | bassins Rhône-Méditerranée et de Corse | confirmé | ECO2 p.2 : « Tous les territoires des bassins Rhône Méditerranée et de Corse. » |
| eligibilite (volet équipements, conditions) | usage existant, prélèvement autorisé, baisse effective des prélèvements au point de prélèvement | confirmé | ECO2 p.3 : « doivent se traduire par une diminution effective des prélèvements dans le milieu, au point de prélèvement » et « concerner un usage existant et pour lequel le prélèvement est autorisé ». |
| eligibilite (volet pratiques) | ouvert aussi aux entreprises, coopératives, organismes consulaires, collectivités, associations, sans condition d'aide particulière | confirmé | ECO2 p.4 : « Acteurs économiques non agricoles (sociétés, entreprises, coopératives…) ; Etablissements publics (organismes consulaires…) ; Collectivités… ; Associations. » ECO2 p.5 : « CONDITIONS D'AIDES • Sans objet. » |
| departements | [] (national, filtré par l'agence) | confirmé | Cohérent avec « Tous les territoires des bassins Rhône Méditerranée et de Corse », territoire qui correspond au périmètre de l'agence. |
| agences | AERMC | confirmé | Fiche de l'agence de l'eau Rhône Méditerranée Corse (voir financeur). |
| mesures : ACT_AGR_006 (récupération d'eau de pluie des toitures) | lien | confirmé | ECO2 p.3, actions et dépenses éligibles : « Dispositifs de récupération d'eau de pluie issue de bâtiments agricoles. » La dépense éligible correspond à la mesure. |
| categories | valoriser_reut_eaux_non_conventionnelles, ameliorer_efficacite_hydrique | confirmé | ECO2 p.3 : eau de pluie, « réparation de fuites, … dispositifs hydroéconomes ». |
| description | volet équipements et volet changement de pratiques | confirmé | ECO2 p.3 et p.5, presque mot pour mot. Elle omet deux postes éligibles : « mise sous pression/régulateurs » et « Aménagements de prises d'eau en vue de relever les débits réservés ». |
| infos 1 (avertissement) | demande avant l'engagement du projet, rejet sinon, exceptions (accord écrit préalable, actions préalables) | confirmé | Conditions générales §1.2 : « Une demande d'aide doit être formellement transmise à l'agence avant l'engagement du projet considéré. Le non-respect de cette disposition entraîne le rejet… » |
| infos 2 (avertissement) | non éligibles : compteurs à la parcelle, travaux augmentant l'usage de la ressource, travaux déjà aidés dans les dix dernières années | confirmé | ECO2 p.3 : « Travaux visant une utilisation plus importante de la ressource en eau. Compteurs à la parcelle. » Conditions générales §1.5 : « travaux ayant déjà bénéficiés d'une aide au cours des dix dernières années ne sont pas éligibles ». |
| infos 3 (info) | coût prévisionnel supérieur à 10 000 €, taux selon le territoire du point de prélèvement, définitions des secteurs prioritaires en Rhône-Méditerranée et en Corse | confirmé | Conditions générales §1.4 : « doit être supérieur à 10 000 € ». ECO2 p.2 : « le territoire considéré est celui de la ressource prélevée, au point de prélèvement », puis les définitions Rhône-Méditerranée et Corse, mot pour mot. |
| infos 4 (info) | fuites et dispositifs hydroéconomes portent sur les réseaux d'irrigation ; pratiques agricoles renvoyées aux fiches AGRI1 à AGRI5 | confirmé | ECO2 p.3 : « Travaux de modernisation et d'optimisation de réseau d'irrigation : réparation de fuites… » ECO2 p.4 : « cf fiches AGRI1, AGRI2, AGRI3, AGRI4, AGRI5 ». |
| infos 5 (info) | eau de pluie : baisse effective et prélèvement autorisé exigés ; ECO2 ne dit pas si remplacer l'eau du réseau public suffit | confirmé | Les conditions citées figurent en ECO2 p.3. J'ai vérifié l'absence de précision sur le réseau public sur les 5 pages : le constat de la fiche est exact. |
| infos 6 (ressource) | fiche ECO2, version 1 adoptée le 19 décembre 2024, lien eco2-sobriete-agriculture.pdf | confirmé | Pied de page ECO2 : « Version 1 adoptée par le conseil d'administration du 19 décembre 2024 - Délibération 2024-37 ». Le lien répond. |
| infos 7 (ressource) | conditions générales d'attribution et de versement, lien conditions-generales.pdf | confirmé | Titre du PDF : « Conditions générales d'attribution et de versement des aides ». Le lien répond. |
| logo_url | Cloudinary AIDE_HRB_009.png | confirmé | L'image source (logo_ae_aout2020_web.png) est bien le logo « agence de l'eau Rhône Méditerranée Corse ». Le fichier Cloudinary lui-même n'a pas été ouvert. |

SOURCES : 4 citées, 4 accessibles

Les 4 sources citées sont : la fiche ECO2, les conditions générales, le recueil des fiches et l'image du logo. Toutes répondent. Je n'ai pas lu le recueil de fiches (PDF de 3,1 Mo que WebFetch n'a pas su décoder). Son extrait sert pour le nom, le taux et la description, qui sont tous confirmés directement par la fiche ECO2 : ce n'est donc pas bloquant.

VERDICT : conforme

Retouches facultatives, par ordre d'importance :
1. **taux** : préciser que le 70 % pour la communication et la sensibilisation vaut pour les actions « associées aux projets de changement de pratiques et de réduction des besoins en eau », comme le dit ECO2.
2. **taux** et **eligibilite** : on pourrait indiquer que l'animation (conseil agronomique) suit les modalités des conditions générales. ECO2 ne lui donne pas de taux propre, et la ligne « changement de pratiques » de son tableau renvoie aux fiches AGRI1 à AGRI5.
3. **description** : on peut ajouter les deux postes éligibles omis (mise sous pression et régulateurs, aménagement de prises d'eau pour relever les débits réservés). C'est une omission, pas une erreur.
4. **sources** : l'extrait attribué au recueil de fiches (recueil-fiches.pdf) n'a pas pu être relu. Pour le nom, on peut citer la page 1 d'ECO2, qui porte les mêmes mentions (12e programme 2025-2030, version 1 du 19 décembre 2024, délibération 2024-37).


## AIDE_HRB_010

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/AIDE_HRB_010.json (aide, elevage_herbivores, 2026-10-15)

Rien n'est contredit. Un seul point reste introuvable : la page de la Région, citée en source, n'a renvoyé aucun texte. Les sources désignées ci-dessous par « Ardèche » et « les-aides » sont la page de la chambre d'agriculture de l'Ardèche et la fiche les-aides.fr.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Optimiser l'usage de l'eau en élevage (Région Auvergne-Rhône-Alpes) | confirmé | les-aides, titre : « Optimiser l'usage de l'eau en élevage », financeur Région Auvergne-Rhône-Alpes. |
| financeur | Région Auvergne-Rhône-Alpes | confirmé | Ardèche : « Aide de la Région Auvergne-Rhône-Alpes pour acheter des équipements et réaliser des aménagements ». |
| type | subvention | confirmé | Ardèche : « Taux de subvention : 40% du coût HT de l'investissement éligible ». |
| taux | 40 % du coût HT de l'investissement éligible, compris entre 1 500 € et 10 000 € HT | confirmé (nuance mineure) | Ardèche : « Investissement minimum = 1 500 € HT / Investissement maximum : 10 000 € ». La page ne précise pas « HT » pour le maximum. |
| plafond | 4 000 € par élevage et par dossier, quelle que soit la forme juridique | confirmé | Ardèche : « Plafond de subvention : 4 000 € par élevage et par dossier quelle que soit la forme juridique ». les-aides donne aussi 4 000 € au maximum. |
| eligibilite : herbivores, dont veaux de boucherie, 20 UGB | idem | confirmé | les-aides : « les exploitations agricoles d'élevage d'herbivores (dont veaux de boucherie) d'au moins 20 Unités de Gros Bétail ». Ardèche : « Avoir un cheptel minimum de 20 UGB ». |
| eligibilite : aide régionale antérieure | pas d'aide régionale pour l'abreuvement (plans de filière bovin lait ou allaitant, Pacte Cantal), ou aide de plus de 3 ans | confirmé | Ardèche : « n'a pas déjà bénéficié d'une aide régionale pour l'abreuvement (plans de filière bovin lait ou bovin allaitant ou du Pacte Cantal) ou [...] il y a plus de 3 ans ». les-aides dit la même chose. |
| departements | 01, 03, 07, 15, 26, 38, 42, 43, 63, 69, 73, 74 | confirmé | les-aides : zone géographique « région Auvergne-Rhône-Alpes ». Ce sont bien les 12 départements de la région, selon la règle de saisie d'une couverture régionale. |
| agences | [] (toutes) | confirmé | Aucune source ne pose de condition liée à une agence de l'eau. L'aide est régionale. |
| mesures : ACT_HRB_003 (abreuvement au pâturage, réserve de secours) | lien | confirmé | Ardèche : « Abreuvement au pâturage », « Pompe électrique, solaire, éolienne, Pompe à museau », « Cuve, citerne souple (dimensionnement préconisé de 2 mois d'autonomie) », « Abreuvoirs ». |
| mesures : ACT_AGR_006 (récupération de l'eau de pluie des toitures) | lien | confirmé | Ardèche : « Récupération des eaux de toiture y compris chenaux », « Cuve, citerne souple ». L'usage financé est l'abreuvement et le nettoyage des bâtiments. La mesure parle plutôt des sanitaires et des sols, mais la dépense éligible correspond. |
| mesures : ACT_AGR_001 (sous-comptage par usage) | lien | confirmé | Ardèche : « Installation de compteurs d'eau » (projet éligible) et « Compteur » (investissement éligible). |
| infos_complementaires 1 (avertissement) : seuil petits ruminants, sources divergentes | 50 brebis ou 50 chèvres d'après la Région et les-aides, 20 UGB seulement d'après la chambre de l'Ardèche | confirmé en partie, introuvable pour la page de la Région | les-aides : « Pour les petits ruminants, l'exploitation devra détenir au moins 50 brebis ou 50 chèvres. » La page de l'Ardèche ne mentionne ni brebis ni chèvres, ce qui est exact. En revanche, la page de la Région n'a renvoyé aucun texte : la phrase qui lui attribue ce seuil n'est pas vérifiable. |
| infos_complementaires 2 (avertissement) : au-delà de 10 000 €, renvoi vers FEADER 201 | idem | confirmé (nuance) | Ardèche : « Les projets dont le montant de dépense subventionnable excède 10 000 € ne sont pas éligibles au présent dispositif, et seront orientés vers la mesure FEADER 201 du PSN 2023-27 ». les-aides parle seulement d'une « dépense subventionnable plafonnée à 10 000 € », ce qui est moins net sans être contraire. |
| infos_complementaires 3 (info) : dépenses exclues, travaux faits par l'exploitant | idem | confirmé | Ardèche : « Si les travaux sont réalisés par l'exploitant, seuls les coûts de matériaux seront pris en compte. Investissements non-éligibles : Stockage et réserve de surface ouverte, Drainage au-delà de 100m, [...] Investissements à l'intérieur du bâtiment d'élevage ». |
| infos_complementaires 4 (info) : dépôt sur le portail, mail, lien | portail des aides, abreuvement@auvergnerhonealpes.fr, URL F_AGRI_ABREUV | confirmé | les-aides : « déposent (directement ou via un intermédiaire) leur demande sur le téléservice du Portail des Aides de la Région ». Le lien de la page pointe exactement vers l'URL de la fiche, et le mail est le même. |
| infos_complementaires 5 (ressource) : page de la Région | https://www.auvergnerhonealpes.fr/aides/optimiser-lusage-de-leau-en-elevage | confirmé (URL), contenu introuvable | Cette URL est bien le lien vers la Région sur la page de l'Ardèche et sur les-aides. Récupérée directement, elle renvoie une page vide. |
| infos_complementaires 6 (ressource) : synthèse de la chambre d'agriculture de l'Ardèche | URL Ardèche | confirmé | La page est accessible et décrit bien le dispositif. |
| logo_url (source : SVG de la Région) | recadrage du logo de la Région | confirmé | Le SVG est accessible : texte « La Région / Auvergne-Rhône-Alpes » avec un disque bleu à gauche. |

Hors champs obligatoires, la description est conforme à l'Ardèche et à les-aides : prélèvement, stockage avec 2 mois d'autonomie, pompes, terrassement, canalisations, abreuvoirs et stabilisation de leurs abords, filtration, compteurs, objectifs.

SOURCES : 4 citées, 3 accessibles. La page Région (https://www.auvergnerhonealpes.fr/aides/optimiser-lusage-de-leau-en-elevage) renvoie un contenu vide, sans doute une protection contre les robots, comme le signale la fiche elle-même.

VERDICT : incomplet

Champs à sourcer ou à préciser, par ordre d'importance :
1. infos_complementaires 1 (seuil des petits ruminants) : la phrase « la page de la Région [...] admet[tent] les élevages de petits ruminants à partir de 50 brebis ou 50 chèvres » repose sur une page illisible pour le contrôle. L'extrait de la Région cité dans les sources (« Pour les bovins, l'exploitation devra détenir au moins 20 UGB ») limiterait même le seuil de 20 UGB aux bovins, alors que les-aides l'applique à tous les herbivores. Il faut soit s'appuyer seulement sur les-aides, soit joindre une copie lisible de la page de la Région.
2. eligibilite : le champ ne mentionne que le seuil de 20 UGB. L'autre seuil, 50 brebis ou 50 chèvres, est donné par les-aides mais n'apparaît que dans l'avertissement. Ce n'est pas une contradiction, mais un éleveur ovin ou caprin lisant ce seul champ se croirait exclu en dessous de 20 UGB.
3. taux : la page de l'Ardèche ne mentionne « HT » que pour le minimum (1 500 € HT) et donne le maximum (10 000 €) sans HT. C'est une nuance de libellé.
4. Facultatif : les-aides indique « aide accordée une seule fois » et une possible dérogation pour un raccordement au réseau potable. Ni l'un ni l'autre n'est repris dans la fiche.


## PREST_HRB_001

## Contrôle de PREST_HRB_001 (Serap Industries), secteur elevage_herbivores

Fiche contrôlée : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_001.json
Mesure liée, vérifiée dans : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/actions_elevage_herbivores.json (ACT_HRB_005)

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Serap Industries | confirmé | API Recherche d'entreprises : « nom_complet : SERAP INDUSTRIES ». Page Gorron : « SERAP Industries 245, route de Fougères ». |
| type | equipementier | confirmé | Page Gorron : « Activités : conception, fabrication et vente » de « refroidisseurs de lait en vrac », avec 3 ateliers de fabrication. |
| siret | 38975842600024 | confirmé | API : « siret du siège 38975842600024, ROUTE DE FOUGERES 53120 GORRON, 28.25Z, etat_administratif A ». L'autre résultat (SIREN 322440876) est fermé (état C), le bon établissement a donc été retenu. |
| departements | [] (national) | confirmé | Page À propos : « leader en France et dans plusieurs pays étrangers ». Assistance technique : « à tous ses clients installateurs et dépanneurs, dans le monde entier ». Le réseau de distribution n'est détaillé sur aucune page citée. |
| expertises : Tanks à lait | Tanks à lait | confirmé | À propos : « développe, fabrique et commercialise, des refroidisseurs de lait » ; titre des pages : « SERAP Fabricant Tank à lait ». |
| expertises : Prérefroidisseurs de lait | Prérefroidisseurs de lait | confirmé | Page pré-refroidissement : « échangeur coaxial tubulaire [...] échangeur à plaques », pour la « diminution de la température d'arrivée du lait dans le refroidisseur ». |
| expertises : Meuble de lavage du tank | Meuble de lavage du tank | confirmé | Page Rainbow : « Un nettoyage efficace de la cuve pour une qualité de lait irréprochable. » |
| expertises : Récupération de chaleur du tank | Récupération de chaleur du tank | confirmé | Page Opticool : « la récupération de la chaleur via ce système, permet une économie de 50% sur le chauffage de l'eau ». La page d'accueil cite aussi la gamme HRU. |
| mesures : ACT_HRB_005, roles [materiel] | prérefroidisseur dont l'eau va aux abreuvoirs | confirmé | Page pré-refroidissement : « L'eau tiédie est dirigée vers les abreuvoirs en sortie de salle de traite ». Le matériel est fabriqué par Serap, donc le rôle materiel est justifié. Réserve : la source couvre la moitié prérefroidisseur de la mesure, pas le stockage des eaux de fin de lavage. Elle ne parle pas non plus d'économie d'eau : l'argument mis en avant est énergétique. |
| contact site_internet | https://www.groupeserap.fr | confirmé | URL citée et accessible ; c'est le site d'où viennent toutes les autres pages. |
| contact tel | 02 43 08 49 49 | confirmé | Page Gorron : « +33 (0)2 43 08 49 49 ». Même numéro en pied de page de l'accueil. |
| contact mail | serap-industries@serapgroup.com | confirmé | Page Gorron : « serap-industries@serapgroup.com ». |
| contact adresse | 245 route de Fougères, 53120 Gorron | confirmé | Page Gorron et accueil : « 245 route de Fougères, 53120 Gorron ». |
| contact linkedin | https://www.linkedin.com/company/groupe-serap/ | confirmé | Lien présent en pied de page de l'accueil : « https://www.linkedin.com/company/groupe-serap/ ». |
| description : fabrication à Gorron (Mayenne) | ateliers de Gorron en Mayenne | confirmé | Gorron : « 3 ateliers de fabrication » ; À propos : « implantée en Mayenne ». |
| description : eau tiédie vers les abreuvoirs | prérefroidisseur, eau vers les abreuvoirs | confirmé | Même passage que pour la mesure. |
| description : installé par les distributeurs partenaires, assistance technique de Serap | installation par les distributeurs | confirmé | Opticool : « son installation est assurée par un partenaire distributeur SERAP ». Assistance : « accompagnement des techniciens de ses distributeurs sur le terrain ». Réserve : la mention explicite de l'installation ne figure que sur la page Opticool, la fiche l'étend à tout le matériel. |
| categories | valoriser_reut_eaux_non_conventionnelles | confirmé | C'est la catégorie de ACT_HRB_005, cohérente avec la réutilisation de l'eau du prérefroidisseur décrite par la source. |
| logo (source) | logo-serap-vertic.png | confirmé | Image accessible, PNG de 16 Ko : logo « SERAP GROUP ». Le dépôt Cloudinary n'a pas été vérifié, il ne relève pas des sources. |

SOURCES : 9 citées, 9 accessibles

VERDICT : conforme

Aucun champ n'est contredit ni introuvable. Deux points mineurs pour la relecture humaine, sans correction obligatoire :
1. Mesure ACT_HRB_005 : Serap ne couvre que la partie prérefroidisseur et abreuvoirs. Le stockage des eaux de fin de lavage pour laver les quais, l'autre moitié de la mesure, n'est pas couvert par la source. Les pages Serap mettent en avant l'économie d'énergie, pas l'économie d'eau. Le lien reste justifié pour le rôle materiel.
2. Description : « installé par les distributeurs partenaires » n'est écrit explicitement que pour Opticool. La généralisation à toute la gamme est plausible (assistance aux « clients installateurs » et aux distributeurs), mais elle n'est pas dite mot pour mot.


## PREST_HRB_002

## Contrôle de PREST_HRB_002 (DeLaval France)

Fiche contrôlée : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_002.json

Les 6 URL ont répondu. WebFetch ne savait pas lire les PDF compressés, je les ai donc lus en entier à partir de la copie téléchargée. Le favicon (.ico, 14,7 Ko) répond, mais son contenu ne peut pas être affiché.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | DeLaval France | introuvable | L'API Recherche d'entreprises donne « DELAVAL ». Le communiqué 2022 dit « DeLaval », la brochure C100E « DeLaval snc ». Aucune source ne contient le libellé « DeLaval France » (seule trace : le domaine www.delavalfrance.fr dans la brochure C100E). |
| type | installateur | **contredit** | Le vocabulaire définit `installateur` comme une entreprise qui ne fabrique pas. Brochure refroidissement p. 12 : « Nous concevons, fabriquons, installons et entretenons des systèmes complets ». p. 3 : « nous concevons et produisons des solutions complètes ». Communiqué 2023 : usine de production de Tumba. La valeur conforme aux sources est `equipementier`. En plus, la fiche dit elle-même que l'installation est faite par les concessions, pas par l'entité française. |
| siret | 40949500900030 | confirmé | API : « DELAVAL, siren 409495009, siret 40949500900030, siège, 46.61Z, état A ». |
| departements | [] (national) | introuvable | Aucune source ne dit que l'entité couvre tout le territoire. Le communiqué 2022 cite seulement des directeurs « Région Sud et Est » et une concession pour l'Est (54, 57, 67, 88). |
| expertises : Programmateur de lavage de traite | | confirmé | Brochure C100E : « nettoyage de qualité et une hygiène irréprochable de votre machine à traire grâce au programmateur de lavage C100E DeLaval ». |
| expertises : Prérefroidisseur de lait à plaques | | confirmé (réserve) | Brochure refroidissement p. 11 : « Les échangeurs à plaques offrent le meilleur rendement de tous les types de pré-refroidisseurs ». Réserve : c'est l'édition belge (DeLaval S.A., Gand), rien ne prouve que la gamme est vendue en France. |
| contact site_internet | https://www.delaval.com/fr/ | introuvable | Le chemin /fr/ n'apparaît dans aucune source. Les sources donnent « www.delaval.com » et « www.delavalfrance.fr » (brochure C100E). |
| contact tel | 01 30 81 81 82 | confirmé | Communiqué 2022 : « Téléphone 01 30 81 81 82 ». Brochure C100E : « Téléphone : 01.30.81.81.82 ». |
| contact adresse | Omega Parc, bâtiment 5, 3 boulevard Jean Moulin, 78990 Élancourt | confirmé | API : « BAT 5 Omega Parc, 3 Boulevard Jean Moulin, 78990 Elancourt ». Brochure C100E : « OMEGA PARC, Bât. 5, CS 40504, 3 Boulevard Jean Moulin, F-78990 Elancourt ». |
| mesures ACT_HRB_002 (materiel) | Lavage de la traite | confirmé | Brochure C100E p. 2 : « Le C100E DeLaval permet également de réguler la consommation d'eau et de détergents ». Le matériel sert bien au lavage de la machine à traire, ce que vise la mesure. |
| mesures ACT_HRB_005 (materiel) | Eau de la laiterie réutilisée | confirmé (réserve) | Brochure refroidissement p. 11 : « Après le processus de pré-refroidissement, l'eau tiède peut être réutilisée comme eau potable pour vos animaux ». Réserves : édition belge, et DeLaval fournit le prérefroidisseur, pas la cuve tampon ni le raccordement aux abreuvoirs. |
| categories | ameliorer_efficacite_hydrique, valoriser_reut_eaux_non_conventionnelles | confirmé | Ce sont les catégories des deux mesures liées (ACT_HRB_002 et ACT_HRB_005 dans actions_elevage_herbivores.json). |
| description : APE 4661Z, commerce de gros | | confirmé | Communiqué 2022 : « R.C.S. Versailles 409 495 009 code APE 4661Z ». API : « 46.61Z ». |
| description : fondé en Suède, groupe Tetra Laval | | confirmé | Communiqué 2022 : « DeLaval fut fondée il y a plus de 135 ans en Suède… fait partie du groupe Tetra Laval ». |
| description : robots de traite fabriqués à Tumba | | confirmé | Communiqué 2023 : « L'usine de Tumba, en Suède, sera davantage orientée vers le VMS ». |
| description : C100E régule eau et détergents | | confirmé | Brochure C100E p. 2, passage cité plus haut. |
| description : eau tiède du PHE pour abreuver | | confirmé (réserve) | Brochure refroidissement p. 11, même réserve d'édition belge. |
| description : vente et installation par des concessions DeLaval | | confirmé (partiel) | Communiqué 2022 : « La concession MPES… réalisait les activités de vente et d'installation des équipements d'élevage et matériels de traite DeLaval dans l'Est ». C'est un seul exemple (concession reprise en 2022 par NIESS MAE, groupe Ackermann). La généralisation à tout le réseau n'est appuyée que par la brochure belge : « Notre réseau de concessionnaires est votre support pour l'achat et l'entretien ». |
| logo_url (source favicon) | | introuvable | L'URL répond (image/x-icon, 14,7 Ko), mais le contenu n'a pas pu être affiché. Je ne peux donc vérifier ni la description de l'extrait (« triangle bleu et alpha orange, 48 x 48 px ») ni la correspondance avec le logo Cloudinary. |

SOURCES : 6 citées, 6 accessibles

VERDICT : à corriger

### Champs à corriger ou à sourcer, par ordre d'importance
1. **type** : `installateur` est contredit. Les sources décrivent un fabricant (`equipementier`), et la fiche attribue elle-même l'installation aux concessions.
2. **departements** : aucune source ne confirme une couverture nationale. Il faut une source sur le réseau de concessions en France, ou une restriction.
3. **mesures ACT_HRB_005** et **expertise « Prérefroidisseur de lait à plaques »** : elles ne reposent que sur une brochure belge. Il faut une source française (catalogue ou page delaval.com/fr) montrant que les PHE sont vendus en France.
4. **contact site_internet** : l'URL https://www.delaval.com/fr/ n'est dans aucune source. Il faut la sourcer, ou reprendre www.delavalfrance.fr ou www.delaval.com, qui sont attestés.
5. **nom** : le libellé « DeLaval France » n'apparaît nulle part. Les sources disent « DELAVAL » (raison sociale) ou « DeLaval ».
6. **description, concessions** : la phrase généralise à partir d'un seul exemple (MPES, concession cédée en 2022). Elle est à appuyer par une source française sur le réseau.
7. **logo_url** : la source favicon n'a pas pu être vérifiée visuellement.


## PREST_HRB_003

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_003.json (Groupe Lacta-Traite, prestataire, elevage_herbivores)

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Groupe Lacta-Traite | confirmé | Page contact : « Groupe LACTA-TRAITE ». API Recherche d'entreprises : « GROUPE LACTA-TRAITE » |
| type | installateur | confirmé | Page offre d'emploi : « Lacta Traite, concessionnaire BouMatic, accompagne les éleveurs laitiers dans l'installation, l'entretien et le dépannage ». Revendeur qui installe sans fabriquer (NAF 46.61Z, commerce de gros de matériel agricole) |
| siret | 38514092600036 | confirmé | API : SIRET du siège 38514092600036, état A, 50540 Isigny-le-Buat |
| departements | 14, 22, 35, 50, 53, 61 | confirmé (lecture de carte) | Carte « zone d'intervention » de /about : zone ombrée qui couvre le sud de la Manche (Granville, Avranches), le Calvados (Vire, Condé-sur-Noireau, jusqu'à Caen), l'Orne (Flers, Tinchebray, Alençon), l'Ille-et-Vilaine (Saint-Malo, Pleurtuit, nord de Fougères), les Côtes-d'Armor (Dinan, Collinée) et le nord de la Mayenne. Les réalisations citent aussi des clients en 50, 53 et 35. C'est une déduction d'après la position des villes : la carte ne nomme pas les départements et ne couvre chacun qu'en partie (le nord de la Manche, Coutances et Saint-Lô, est hors zone) |
| expertises[0] | Installation d'équipements de traite | confirmé | Offre d'emploi : « l'installation, l'entretien et le dépannage de leurs équipements de traite et d'élevage ». Réalisations : installation de robots Gemini Up |
| expertises[1] | Maintenance de machines à traire | confirmé | SAV : « Les techniciens sont habilités à faire les contrôles Opti'traite et peuvent faire la maintenance de votre machine ». Le SAV se divise en deux spécialités, robots et machines à traire |
| expertises[2] | Contrôles Opti'Traite et Certi'traite | confirmé | SAV : « Il est possible de faire réaliser un certi'traite (contrôle de la conformité de votre installation de traite) » et « habilités à faire les contrôles Opti'traite » |
| expertises[3] | Réglage du matériel d'hygiène de traite | confirmé | Sani-Star : « Réglage : Ils règlent vos matériels d'hygiène de traite » |
| description | concessionnaire BouMatic, entreprise familiale de la Manche, robots, SAV, Opti'Traite, Certi'traite, Sani-Star, Service Star | confirmé | /about : « Concessionnaire BouMatic », « Entreprise familiale créée il y a plus de 30 ans ». Siège et agence dans la Manche (50). SAV : déplacement sur demande. Le programme Service Star prévoit les dates de maintenance à l'avance |
| contact site_internet | https://www.lactatraite.fr/ | confirmé | Domaine de toutes les pages citées, qui répondent |
| contact tel | 02 33 48 75 17 | confirmé | Page contact : « Bureaux : 02 33 48 75 17 » |
| contact mail | contact@lactatraite.fr | confirmé | Page contact : « contact@lactatraite.fr » |
| contact adresse 1 | 7 rue des Artisans, 50540 Isigny-le-Buat | confirmé | Page contact, au siège. SIRENE donne « ZA du Carrefour des Biards, 7 rue, 50540 Isigny-le-Buat » : même lieu, pas une contradiction |
| contact adresse 2 | 41 route de Granville, 50800 Fleury | confirmé | Page contact, agence secondaire. SIRENE : établissement 38514092600044, actif, même adresse |
| mesures | [] (aucun lien) | sans objet | Rien à vérifier |

SOURCES : 9 citées, 9 accessibles (la carte JPEG a été lue directement. Le favicon .ico répond, mais son contenu n'est pas lisible, et il ne justifie que logo_url, qui n'est pas un champ factuel contrôlé.)

VERDICT : conforme

Champs à corriger ou à sourcer, par ordre d'importance :
1. Rattachement (point à trancher, pas une erreur factuelle) : `mesures` et `categories` sont vides tous les deux. D'après la règle de `solutionsMatching.js` décrite dans CLAUDE.md, une fiche de secteur sans lien explicite ne sort que par le repli sur la catégorie. Ici il n'y a ni l'un ni l'autre, donc la fiche ne serait associée à aucune mesure du plan d'action. La candidate naturelle est ACT_HRB_002 (« Régler le lavage de la machine à traire, du tank et des quais »). Mais aucune source citée ne décrit le réglage des programmes de lavage ni la consommation d'eau. La page Sani-Star ne mentionne que des produits détergents « pour le matériel de traite, les tank à lait et les robots de traite », et le SAV ne parle pas de lavage. Avec les sources actuelles, ce lien ne serait donc pas confirmé. Il faut une source explicite, ou laisser la fiche sans lien en assumant qu'elle reste invisible.
2. `departements` : la liste vient d'une lecture de carte, sans texte. Elle tient (les six départements sont touchés, et les réalisations confirment 50, 53 et 35). On peut l'annoter (couverture partielle) ou la garder telle quelle.
3. `contacts` (facultatif) : la page contact donne aussi deux numéros d'astreinte, absents de la fiche : 02 33 70 80 87 (matériel de traite conventionnel) et 0 826 96 00 96 (robots, service payant).


## PREST_HRB_004

## Contrôle de PREST_HRB_004 (Chambre d'agriculture de Normandie)

Fiche : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_004.json

Tous les champs structurés sont confirmés par les sources citées. Le seul point contredit est une phrase de la `description` (le siège), et une autre affirmation de la `description` n'est appuyée par aucune source.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Chambre d'agriculture de Normandie | confirmé | Le site signe « Chambres d'agriculture de Normandie ». SIRENE donne « CHAMBRE D'AGRICULTURE DE REGION NORMANDIE ». Le nom d'usage est cohérent. |
| type | chambre_consulaire | confirmé | Recherche d'entreprises : « nature juridique 7381 », et le nom de la structure. |
| siret | 13003150300076 | confirmé | Recherche d'entreprises : « SIRET du siège : 13003150300076 », état A. |
| departements | 14, 27, 50, 61, 76 | confirmé | Page contact : chambres de l'« Eure, Orne, Manche, Seine-Maritime, Calvados ». La page Certi'Traite ne précise aucun département. |
| expertises[0] | Certification Certi'Traite | confirmé | Page Certi'Traite : « Attestation de conformité au référentiel Certi'Traite, accompagnée d'une plaque ». |
| expertises[1] | Diagnostic Opti'Traite et Net'Traite | confirmé | « Diagnostic du fonctionnement hors traite, selon les protocoles Opti'Traite et Net'Traite ». |
| expertises[2] | Contrôle des paramètres de lavage | confirmé | « Contrôle des paramètres de lavage ». |
| mesures ACT_HRB_002, rôle conseil_etude | Régler le lavage de la machine à traire, du tank et des quais | confirmé, avec réserve | La prestation contient « Contrôle des paramètres de lavage », ce qui répond à « Faites vérifier les programmes de lavage de la machine à traire et du tank ». Réserve : elle vise les installations neuves, d'occasion, rénovées ou robotisées, et son objectif est la qualité du lait. La page ne parle pas d'eau. Elle ne couvre ni le tank ni les quais. |
| contact site_internet | https://normandie.chambres-agriculture.fr | confirmé | Domaine des trois pages citées. |
| contact tel | 02 31 47 22 47 | confirmé | Page contact : « Tél. : 02 31 47 22 47 ». Le même numéro figure sur la page Certi'Traite. |
| contact mail | accueil@normandie.chambagri.fr | confirmé | Page contact : « Email : accueil@normandie.chambagri.fr ». |
| contact adresse | 6 rue des Roquemonts, CS 45346, 14053 Caen Cedex 4 | confirmé | Page contact : « 6 rue des Roquemonts - CS 45346, 14053 Caen Cedex 4 ». |
| infos_complementaires[0] : suivi d'un an publié par les Chambres | EARL de la Landerie | confirmé | « Un suivi d'1 an à l'EARL de la Landerie », page publiée par les Chambres d'agriculture de Normandie. |
| infos_complementaires[0] : salle 2 x 6, 60 à 120 vaches | | confirmé | « salle de traite 2 × 6 postes », « 60 à 120 vaches traites selon les périodes ». |
| infos_complementaires[0] : surplus du prérefroidisseur, cuve de 1 000 L, lavage des quais et du parc d'attente | | confirmé | Le surplus est « stocké dans une cuve de 1000 L et réemployé pour le nettoyage des quais de traite et du parc d'attente ». |
| infos_complementaires[0] : 365 m³ par an | | confirmé | « L'économie annuelle est estimée à 365 m³ d'eau par an ». Le chiffre figure dans la partie sur le prérefroidisseur. Les eaux de rinçage sont comptées à part (29,2 m³/an). |
| infos_complementaires[0] : 13 233 € en comptant la récupération des eaux de rinçage | | confirmé | 13 233 €, « principalement consacré à l'installation de la réserve de stockage et aux aménagements associés ». Le montant couvre le prérefroidisseur et l'eau de rinçage. |
| infos_complementaires[0] : lien et libellé | URL de l'article | confirmé | La page répond, le titre correspond. |
| description : « Établissement public consulaire » | | introuvable | Aucune source citée ne dit « établissement public ». SIRENE donne seulement le code 7381. |
| description : « siège régional à Caen » | | contredit | SIRENE : « Adresse du siège : CITIS 2 10 RUE D'ATALANTE 14200 HEROUVILLE-SAINT-CLAIR ». Le site ne fait que donner l'adresse de Caen pour l'entité régionale, sans parler de siège. |
| description : une chambre dans chacun des cinq départements | | confirmé | Page contact, cinq chambres départementales. |
| description : contenu de Certi'Traite (montage, Opti'Traite et Net'Traite, lavage, bilan avec l'installateur, attestation), lieu, tarifs sur demande | | confirmé | Page Certi'Traite : « À la Chambre d'agriculture ou sur l'exploitation », tarifs « sur demande ». |
| logo (source) | csm_CSA_NORMANDIE_V_NOIR_405d035fb9.webp | confirmé | L'image ouverte est bien le logo vertical noir « Chambres d'agriculture Normandie ». |

SOURCES : 5 citées, 5 accessibles

VERDICT : à corriger

### Champs à corriger ou à sourcer, par ordre d'importance

1. **description, siège.** « avec un siège régional à Caen » contredit SIRENE, qui place le siège à Hérouville-Saint-Clair (10 rue d'Atalante). Deux corrections possibles : parler d'adresse régionale à Caen sans dire « siège », ou aligner sur SIRENE. Le contact `adresse` à Caen reste juste, puisque la page contact le donne.
2. **description, statut.** « Établissement public consulaire » n'est écrit dans aucune source citée. Il faut une source qui le dise, ou écrire simplement « organisme consulaire ».
3. **mesures ACT_HRB_002, portée.** Le lien `conseil_etude` est justifié par le contrôle des paramètres de lavage, mais la source est étroite :
   - la prestation porte sur les installations neuves, rénovées ou robotisées ;
   - elle vise la qualité du lait, pas l'économie d'eau ;
   - elle ne couvre ni le tank ni les quais.

   Ce n'est pas une contradiction. Le rédacteur pourrait le préciser, ou ajouter une source sur un conseil en économie d'eau à la traite de cette chambre.
4. **Remarque hors verdict.** Le retour d'expérience (prérefroidisseur, eaux de rinçage) illustre la réutilisation d'eau, c'est-à-dire ACT_HRB_005, alors que la fiche ne lie que ACT_HRB_002. Aucune source citée ne montre une prestation de la Chambre sur ACT_HRB_005, donc il ne faut pas ajouter ce lien sans source. La page Certi'Traite parle aussi d'une aide CAS2E pouvant financer à 80 %, que la fiche n'exploite pas.


## PREST_HRB_005

## Contrôle de PREST_HRB_005 (Aquatiris)

Fiche contrôlée : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_005.json
Mesure liée lue dans : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/actions_elevage_herbivores.json

Aucun champ n'est contredit. Le seul vrai manque concerne les départements : la liste n'est confirmée que pour 14 et 50.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Aquatiris | confirmé | mentions-legales : « Aquatiris, SAS au capital de 18 540€ » |
| type | installateur | confirmé | etapes : « Travaux de réalisation, Qui ? L'expert Aquatiris avec son équipe et/ou son réseau d'installateurs formés ». API Recherche d'entreprises : activité 42.21Z. Aucune source ne dit qu'Aquatiris fabrique du matériel. |
| siret | 49903606900056 | confirmé | recherche-entreprises : « AQUATIRIS (SASKIT) », siege.siret 49903606900056, état A |
| departements (14, 50) | inclus | confirmé | expert/aquatiris-calvados-manche : « Expert en phytoépuration dans la Manche et le Calvados » |
| departements (10 exclu) | absent de la liste | confirmé | expert/10 : « Aucun expert en phytoépuration disponible dans l'Aube » |
| departements (les 81 autres codes) | 01 à 95, liste partielle | introuvable | expert/ dit seulement « Aquatiris fonctionne en réseau, sur toute la France et Outre-Mer », sans préciser où se trouvent les experts. Les pages expert/<code>/ consultées par le rédacteur ne sont pas citées une à une. Le site renvoie aussi à Fécamp (76) dans la page Calvados Manche, mais sans le présenter comme une couverture du département. |
| expertises | Traitement des eaux blanches | confirmé | jardin-assainissement-osier : « Traitement d'effluents agricoles (eaux blanches) et domestiques en mélange » |
| expertises | Jardin d'assainissement Osier | confirmé | jardin-assainissement-osier : titre « Jardin d'Assainissement Osier », « Gamme Osier » |
| expertises | Étude de conception | confirmé | etapes : « Étude de conception, Qui ? Étude pouvant être réalisée directement par l'expert Aquatiris » |
| expertises | Pose et entretien | confirmé | etapes : « Travaux de réalisation [...] L'expert Aquatiris avec son équipe ». « Et après les travaux ? [...] par l'expert Aquatiris ». sur-mesure-agricole : « services d'entretien et de maintenance » |
| contact site_internet | https://www.aquatiris.com/agricole-et-agroalimentaire/ | confirmé | La page répond et traite des fermes, laiteries et effluents agricoles. |
| contact tel | 0800 300 325 | confirmé | mentions-legales : « 0800 300 325 (appel et service gratuits) » |
| contact mail | contact@aquatiris.fr | confirmé | mentions-legales : « contact@aquatiris.fr » |
| contact adresse | 7 rue des Artisans, 35310 Bréal-sous-Montfort | confirmé | mentions-legales : « 7 rue des artisans, 35310 BRÉAL-SOUS-MONTFORT ». Même adresse de siège dans recherche-entreprises. |
| mesures ACT_HRB_006, rôle conseil_etude | conseil_etude | confirmé | etapes (étude de conception par l'expert). agricole-et-agroalimentaire : « nos experts sont à votre disposition pour concevoir une solution unique [...] du diagnostic initial à l'installation ». La dépense éligible correspond : traitement des eaux blanches d'élevage par une filière adaptée. |
| mesures ACT_HRB_006, rôle travaux | travaux | confirmé | Mention explicite dans sur-mesure-agricole : « nos équipes qualifiées installent le système ». Calvados Manche : « nous intervenons lors de la conception et la mise en place ». |
| mesures ACT_HRB_006 (périmètre) | lien complet | confirmé avec réserve | La source couvre les eaux blanches seulement. Les eaux vertes, la salle de traite et la séparation des eaux pluviales ne sont citées nulle part (jardin-assainissement-osier : aucune mention des eaux vertes ni de la traite). |
| description : « réseau de franchisés » | | introuvable | Les pages n'ont que des liens « Devenir franchisé » et « Nous rejoindre », plus « experts et installateurs de proximité ». Aucune page ne dit que les experts sont des franchisés. |
| description : « tête de réseau (société SASKIT) conçoit les filières » | | confirmé en partie | SASKIT : recherche-entreprises, « AQUATIRIS (SASKIT) ». Conception : jardin-assainissement-osier, « notre R&D interne ». Le mot « tête de réseau » n'apparaît pas. |
| description : eaux blanches traitées « seules ou en mélange » avec les eaux de la maison | « seules » | introuvable | jardin-assainissement-osier : « traiter conjointement les eaux usées domestiques de la maison et les effluents agricoles ». Aucune page ne mentionne le traitement des eaux blanches seules. |
| description : rejets conformes (ICPE, RSD), sur devis | | confirmé | jardin-assainissement-osier : « conformes à la réglementation [...] ICPE, RSD… », « Demander un devis » |
| logo_url (source) | apple-touch-icon.png | confirmé | Le fichier PNG répond (5 Ko). |
| infos_complementaires | aucune | sans objet | |

SOURCES : 10 citées, 10 accessibles

VERDICT : incomplet

### À corriger ou à sourcer, par ordre d'importance

1. **departements** : 81 codes sur 83 ne s'appuient sur aucune URL citée. Il faut citer les pages expert/<code>/ (ou une page expert par département). À défaut, il faut réduire la liste aux départements dont une source citée confirme la présence d'un expert.
2. **mesures ACT_HRB_006** : le lien est valable pour le traitement des eaux blanches. Il faudrait sourcer le traitement des eaux vertes, ou préciser dans la description et les expertises que la prestation se limite aux eaux blanches.
3. **description, « seules ou en mélange »** : le traitement des eaux blanches seules n'est pas sourcé. La source ne parle que du mélange avec les eaux usées de la maison.
4. **description, « réseau de franchisés » et « tête de réseau »** : les termes sont plausibles mais aucune source ne les dit. Il faut citer une page qui décrit le réseau de franchise, ou reformuler.


## PREST_HRB_006

## Contrôle de PREST_HRB_006 (Alistep, INEAUTEC)

Fiche contrôlée : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_006.json

Les 5 URL du site alistep.com n'ont pas pu être lues : WebFetch force le passage en https et le certificat ne couvre pas www.alistep.com (le certificat présenté est celui de cluster110.hosting.ovh.net). Seules les deux requêtes à l'API Recherche d'entreprises ont répondu. Tout ce qui ne repose que sur le site est donc classé introuvable.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Alistep (INEAUTEC) | confirmé | API (q=ALISTEP) : « nom_complet : INEAUTEC [...] liste_enseignes : ["ALISTEP"] » |
| type | installateur | introuvable | Aucune source accessible ne décrit le métier. L'API donne `activite_principale : 71.12B` (ingénierie, études techniques), ce qui ne correspond pas à « installateur ». Voir aussi la remarque 1. |
| siret | 80521574600035 | confirmé | API : « siret : 80521574600035 \| [...] COUZEIX \| etat_administratif : A \| liste_enseignes : ["ALISTEP"] » (siège, unité légale active) |
| siret, société écartée (INWANT) | cessée le 2019-11-12 | confirmé | API (q=452903420) : « etat_administratif (unité légale) : C, date_fermeture : 2019-11-12 » |
| departements | [] (national) | introuvable | Le seul appui cité (accueil alistep.com, « plus de 500 références en France ») est inaccessible |
| expertises : Fosses toutes eaux de 3 à 10 m³ | | introuvable | Source unique (page matériels-assainissement-agricole) inaccessible |
| expertises : Cuves d'alimentation à chasse inox | | introuvable | Même page, inaccessible |
| expertises : Matériel pour filtres plantés de roseaux | | introuvable | Pages eaux-usees et matériels-assainissement-agricole inaccessibles |
| mesures : ACT_HRB_006, rôle materiel | | introuvable | La mesure (eaux blanches et vertes traitées par filtre planté de roseaux) correspond bien à l'extrait cité, mais la page source est inaccessible. Aucune source accessible ne décrit la fourniture de matériel. |
| contact site_internet | http://www.alistep.com/ | introuvable | L'URL ne répond pas (erreur de certificat). L'API ne donne pas de site web. |
| contact adresse | ZA Océalim, 13 rue Charles Lindbergh, 87270 Couzeix | confirmé | API : « ZONE D'ACTIVITE OCEALIM 13 RUE CHARLES LINDBERGH 87270 COUZEIX » |
| description : enseigne d'INEAUTEC, à Couzeix | | confirmé | API, siège à Couzeix (87) avec l'enseigne ALISTEP |
| description : conçoit et vend du matériel pour filtres plantés, eaux blanches de traite et eaux vertes de quai, devis gratuit, projet validé par la Chambre d'agriculture | | introuvable | Pages alistep.com inaccessibles |
| logo_url (source citée) | icones-Favcion-01.png | introuvable | URL inaccessible (même erreur de certificat) |

**Remarques**

1. La fiche se contredit sur le type. La description dit que la structure « conçoit et vend le matériel, aucune source vérifiable ne situant sa fabrication ». Or la source citée pour ce passage (alistep.com/eaux-usees) a pour extrait « Conception, fabrication et vente de matériels ». Si cet extrait est exact, il plaide pour `equipementier`. À l'inverse, `installateur` est défini comme une entreprise de travaux ou un intégrateur qui ne fabrique pas, et rien dans la fiche ne décrit de pose ni de travaux. Je n'ai pas pu vérifier l'extrait.
2. La fiche dit que le siège d'INWANT a le SIRET 45290342000019 (d'après les mentions légales, inaccessibles). Pour le siège d'INWANT, l'API renvoie le SIRET 45290342000027. C'est sans effet sur la fiche, puisque cette société est écartée.
3. INEAUTEC a pour code NAF 71.12B (ingénierie). L'activité de vente de matériel n'est donc établie que par le site.

SOURCES : 7 citées, 2 accessibles

VERDICT : incomplet

**Champs à corriger ou à sourcer, par ordre d'importance**

1. `mesures` ACT_HRB_006 (rôle `materiel`) : il faut une source lisible qui décrit le matériel fourni pour traiter les eaux blanches et vertes. On peut joindre la page en http par un autre moyen (copie archivée ou capture datée), ou trouver une autre page du fabricant.
2. `type` : choisir entre `installateur` et `equipementier` d'après une source accessible, et accorder la description avec l'extrait cité (« fabrication »).
3. `departements` (national) : il faut une source accessible sur la zone de vente ou d'intervention.
4. `expertises` (les trois libellés) : à sourcer sur une page accessible.
5. `contacts` site_internet : à vérifier. Le site n'est servi qu'en http avec un certificat invalide, ce qui pose problème pour un lien affiché aux utilisateurs.
6. `logo_url` : source inaccessible, la provenance du logo est à confirmer.


## PREST_HRB_007

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_007.json (La Buvette, prestataire, elevage_herbivores). J'ai comparé la fiche aux 8 URL qu'elle cite et au catalogue /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/actions_elevage_herbivores.json.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | La Buvette | confirmé | API Recherche d'entreprises : « LA BUVETTE » |
| type | equipementier | confirmé | /conseils/entreprise : « conçoit et fabrique en grande série tous types d'abreuvoirs » |
| siret | 78572001200042 | confirmé | API : siège 78572001200042, ZI rue Maurice Perin 08090 Tournes, NAF 28.30Z, état A |
| departements | [] (national) | confirmé | /conseils/entreprise : « plusieurs milliers de distributeurs en France et dans plus de 50 pays étrangers » |
| expertises : Abreuvoirs en bâtiment | | confirmé | /conseils/abreuvement-bovins-en-batiment : conseils d'installation (hauteur, « lapage (donc le gaspillage) », nettoyage, réducteur A406) |
| expertises : Pompes de prairie | | confirmé | aquamat-2.html : « Pompe de prairie au mécanisme très doux. Convient aux chevaux et aux bovins » |
| expertises : Pompage solaire au pâturage | | confirmé | /conseils/abreuvement-solaire-des-bovins : « abreuvoirs et stations de pompage autonomes SOLAR-FLOW » |
| expertises : Conseil technique d'installation | | confirmé | même page : techniciens-conseils pour « vous aider à choisir la meilleure installation [...] et accompagner sa mise en marche » (cela ne vaut que pour le solaire) |
| contact site_internet | https://www.labuvette.fr/ | confirmé | c'est le domaine de toutes les pages citées, et le logo vient de ce site |
| contact tel | 03 24 52 37 20 | confirmé | /conseils/entreprise : « +33 (0)3 24 52 37 20 ». La page solaire donne un autre numéro pour les techniciens-conseils : 03 24 52 37 27 |
| contact adresse | Rue Maurice Périn, Parc d'Activités Ardennes Emeraude, CS50749 Tournes, 08013 Charleville-Mézières Cedex | confirmé | /conseils/entreprise : « Rue Maurice Périn / Parc d'Activités Ardennes Emeraude / CS50749 Tournes / F-08013 CHARLEVILLE-MEZIERES Cedex » |
| mesures ACT_HRB_001 [materiel] | Abreuvoirs entretenus | confirmé (lien le plus faible) | La page bâtiment décrit l'abreuvoir lui-même, le filtre A446 et le réducteur de pression A406 (« éviter les surpressions qui sont néfastes au bon fonctionnement des robinetteries »). Elle ne parle ni de fuites, ni de vannes d'arrêt, ni de flotteurs, ni d'économie d'eau. |
| mesures ACT_HRB_003 [materiel] | Abreuvement au pâturage | confirmé | Page solaire : pompage « jusqu'à 50 m verticalement », « stocker l'eau dans une citerne et redistribuer l'eau dans différents bacs éloignés ». La page catalogue liste le kit SOLAR SUPERFLOW et les pompes SOLAR-FLOW « STOCKAGE ». |
| mesures ACT_HRB_007 [materiel] | Berges protégées | confirmé | aquamat-2.html : pompe à poussée (pompe à museau de la mesure), « jusqu'à 7 m de profondeur ou 70 m en longueur », approvisionnement « Puits, cours d'eau ». La page catalogue AQUAMAT liste 10 références. |
| categories | ameliorer_efficacite_hydrique, agir_rejets_qualite | confirmé | Ce sont les catégories des mesures liées (HRB_001 et HRB_003 en efficacité, HRB_007 en rejets et qualité) |
| description | fabricant multi-espèces, usine à Charleville-Mézières, pompes de prairie, SOLAR-FLOW avec citerne, distributeurs, techniciens-conseils | confirmé | Chaque élément se retrouve dans les pages entreprise, solaire et aquamat-2. La source cite aussi les porcins, absents de la fiche. C'est une simple omission, sans conséquence pour le secteur. |
| logo_url (source) | logo du site labuvette.fr | confirmé | L'image téléchargée est bien le logo « LA BUVETTE, Le spécialiste de l'abreuvement », avec le symbole carré tête de vache sur fond jaune à droite. Je n'ai pas vérifié le recadrage déposé sur Cloudinary. |

SOURCES : 8 citées, 8 accessibles

VERDICT : conforme

Aucun champ n'est contredit ni introuvable. Deux remarques, par ordre d'importance :
1. Lien ACT_HRB_001 (materiel) : c'est le plus fragile. La source établit que La Buvette fabrique des abreuvoirs de bâtiment et la robinetterie qui va avec (réducteur, filtre). Elle ne dit rien des fuites, des vannes d'arrêt ni des flotteurs, qui sont au cœur de la mesure. Si le relecteur veut un rattachement plus solide, il faut citer une page produit où ces éléments apparaissent (abreuvoir à niveau constant avec flotteur, robinet d'arrêt).
2. Téléphone : la fiche donne le standard (37 20), mais le conseil solaire passe par le 03 24 52 37 27. On peut ajouter ce second numéro si l'on veut orienter vers l'accompagnement technique. Ce n'est pas une erreur.


## PREST_HRB_008

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_008.json (Lacmé, prestataire)

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Lacmé | confirmé | API Recherche d'entreprises : « nom_complet : LACME ». Le site écrit « LACMÉ ». |
| type | equipementier | confirmé | decouvrez-lacme : « Fabricant Français Depuis 1956 » et « De la recherche et développement en passant par la fabrication jusqu'aux services d'accompagnement technique ». |
| siret | 45123447000016 | confirmé | API : « siege.siret : 45123447000016 », siège LES PELOUSES ROUTE DU LUDE 72200 LA FLECHE, état A, NAF 28.13Z (UL) et 27.11Z (siège). |
| departements | [] (national) | confirmé | decouvrez-lacme : « Un distributeur à moins de 30 min de chez vous en France ». |
| expertises : Clôture électrique permanente | idem | confirmé | page bovins : « Pour créer une clôture permanente traditionnelle, on utilisera du piquet en bois » et le système Protensile. |
| expertises : Électrificateurs secteur et solaires | idem | confirmé | decouvrez-lacme : « Électrificateurs Secteur 230 V, Électrificateurs Autonomes 12 V, 9 V, solaires ». |
| expertises : Fils et conducteurs de clôture | idem | confirmé | decouvrez-lacme : « Conducteurs : fils, cordons, rubans, filets ». |
| expertises : Passages de barrière électrifiés | idem | confirmé | page bovins : « Fisol Galva (100 m, réf. 664 250) » dans la liste « Matériel PASSAGE BARRIÈRE » du système de clôture électrique. La page ne dit pas « électrifiés » en toutes lettres, mais le contexte de la clôture électrique l'implique. |
| mesures : ACT_HRB_007, roles [materiel] | Aménager les points d'abreuvement des pâtures hors du cours d'eau | introuvable | La page bovins décrit la clôture électrique pour « la contention d'un troupeau ». Aucune source ne parle de cours d'eau, de berge, de mise en défens ni d'abreuvement : la page vérifiée ne contient pas ces termes, et le mot « eau » n'y apparaît que pour des séparateurs eau/huile. Le lien avec le recul de clôture en haut de berge est une déduction du rédacteur, pas une prestation décrite par la source. |
| contact site_internet | https://lacme.com | confirmé | Domaine des pages citées (lacme.com/decouvrez-lacme/). |
| contact tel | 02 43 94 13 45 | confirmé | decouvrez-lacme : « Bureaux et SAV Siège et Usines [...] 02 43 94 13 45 ». |
| contact mail | contact@lacme.com | confirmé | decouvrez-lacme : « contact@lacme.com ». |
| contact adresse | Les Pelouses, Route du Lude, 72200 La Flèche | confirmé | decouvrez-lacme : « Les Pelouses Route du Lude 72200 La Flèche ». L'API donne la même adresse pour le siège. |
| description : fondé en 1956, R&D, fabrication et accompagnement à La Flèche | idem | confirmé | « En 1956, Philippe Hamm crée LACMÉ » et « localise en son site de La Flèche [...] l'intégralité de ses équipes et de ses moyens industriels ». |
| description : fil acier High-Tensile du système Protensile, fil aluminium Forceflex | idem | confirmé | page bovins : « Basé sur un réseau de fil d'acier High-Tensile Sécurgal » et fil Forceflex « en alliage d'aluminium ». |
| description : gammes chevaux, moutons, chèvres | idem | confirmé | Ces espèces figurent comme rubriques « Élevage » de la clôture électrique. Elles n'apparaissent que dans la navigation, sans contenu. |
| description : ne fournit ni aménagement ni matériel d'abreuvement | idem | confirmé | Rien ne le contredit : aucune des pages citées ne mentionne l'abreuvement ou les abreuvoirs. Cette phrase contredit d'ailleurs l'argument du lien avec ACT_HRB_007. |
| description : distributeur, garantie jusqu'à trois ans, SAV à La Flèche | idem | confirmé | « Des produits garantis jusqu'à 3 ans », « Un distributeur à moins de 30 min », « Bureaux et SAV [...] La Flèche ». |
| logo_url (hors champs factuels) | Cloudinary PREST_HRB_008.png | introuvable | Le fichier source https://lacme.com/media/logo-lacme.svg répond, mais c'est un tracé bleu (#0059a6) sans texte. Son contenu ne permet donc pas de le rattacher à Lacmé, même s'il est hébergé sur lacme.com. |
| categories (dérivé) | agir_rejets_qualite | introuvable | Cette catégorie découle uniquement du lien avec ACT_HRB_007, qui n'est pas sourcé. |

SOURCES : 6 citées (4 URL distinctes), 6 accessibles (4 URL sur 4)

VERDICT : incomplet

Champs à corriger ou à sourcer, par ordre d'importance :
1. mesures ACT_HRB_007 (rôle materiel) : c'est le seul lien de la fiche, et aucune source citée ne relie le matériel Lacmé à la protection des berges ou au recul de clôture le long d'un cours d'eau. Il faut une source qui décrit cet usage (page Lacmé sur la mise en défens des berges, guide technique citant du matériel de clôture pour cet aménagement) ou retirer le lien. Sans ce lien, la catégorie agir_rejets_qualite et la présence de la fiche dans le secteur n'ont plus de fondement.
2. categories agir_rejets_qualite : à revoir en même temps que le point 1.
3. logo_url : le SVG source ne permet pas de vérifier qu'il s'agit du logo Lacmé. Une vérification visuelle humaine suffit.
4. expertises « Passages de barrière électrifiés » : la source dit seulement « passage barrière ». Le qualificatif est raisonnable mais n'est pas écrit.

Remarque : l'API mentionne un second établissement actif de LACME (45123447000024, Le Champ, Route du Lude, La Flèche). Le SIRET du siège retenu dans la fiche reste correct.


## PREST_HRB_009

## Contrôle de PREST_HRB_009 (Premier Tech Eau et Environnement)

Fiche contrôlée : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_009.json

Presque tout est confirmé par les sources citées. Il n'y a aucun champ contredit. Un seul champ n'est justifié par aucune source : `departements` (vide, donc national).

Les deux PDF n'étaient pas lisibles par WebFetch. Ils ont été téléchargés depuis les URL citées, puis lus en entier : 2 pages pour Calona, 7 pour Rewatec.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Premier Tech Eau et Environnement | confirmé | API : « nom_complet : PREMIER TECH EAU ET ENVIRONNEMENT ». PDF Rewatec : « © 2025 Premier Tech Eau et Environnement S.A.S.U. » |
| type | equipementier | confirmé | Calona : « Concepteur et fabricant français de solutions locales durables pour le traitement et la valorisation de l'eau », « 5 sites de production », « CONÇU ET FABRIQUÉ EN FRANCE » |
| siret | 41964609600018 | confirmé | API : « siret du siège : 41964609600018 », etat_administratif A, activité 22.23Z |
| departements | [] (national) | introuvable | Aucune source ne dit où l'entreprise vend ou livre. Calona indique seulement « 6 SITES EN FRANCE » (départements 34, 35, 42, 49, 71, 89), ce qui va dans le sens d'une présence nationale sans l'affirmer. |
| expertises : Bacs à niveau constant | idem | confirmé | Calona : « BAC À NIVEAU CONSTANT 8 À 1 100 L » |
| expertises : Bacs d'herbage | idem | confirmé | Calona : « BAC D'HERBAGE 200 À 1600 L » |
| expertises : Cuves aériennes d'eau de pluie | idem | confirmé | Rewatec : « Cuves aériennes de stockage des liquides et de récupération d'eau de pluie » |
| contact site_internet | https://www.pt-eauenvironnement.fr | confirmé | Les deux PDF : « PT-EauEnvironnement.fr ». La forme exacte de l'URL (https, www) n'a pas été vérifiée. |
| contact tel | 02 99 58 45 55 | confirmé | Rewatec p. 7 et Calona p. 1 : « T. + 33 (0)2 99 58 45 55 » |
| contact adresse | Z.A. de Doslet BP11, 35430 Châteauneuf-d'Ille-et-Vilaine | confirmé | Calona p. 1 : « PT Eau et Environnement Z.A. de Doslet BP11 35430 Châteauneuf-d'Ille-et-Vilaine ». L'API donne aussi « ZONE D'ACTIVITE DE DOSLET 35430 » |
| mesures ACT_HRB_001 (materiel) | Abreuvoirs entretenus | confirmé | Calona : bacs à niveau constant avec « Robinet flotteur incorrodable », « Bouchon avec joint torique en partie basse, pour vidange rapide », accessoire « 330218 Robinet Flotteur Mécanique ». Cela correspond au matériel de la mesure (flotteurs, vidange). Les vannes d'arrêt ne figurent pas dans la plaquette. |
| mesures ACT_HRB_003 (materiel) | Abreuvement au pâturage | confirmé | Calona : « BAC D'HERBAGE 200 À 1600 L », « Solutions d'abreuvement [...] pour l'élevage agricole (bovins, ovins, caprins) ». Le lien ne couvre que les abreuvoirs : rien sur les canalisations, les pompes solaires ou à museau, ni sur les réserves de pâture. |
| mesures ACT_AGR_006 (materiel) | Récupération d'eau de pluie | confirmé | Rewatec p. 3 : « Une gamme complète de cuves aériennes et d'accessoires pour le stockage des liquides et la réutilisation de l'eau de pluie ». Kits filtre (grille 0,6 mm), pompage et aspiration. |
| description : filiale française d'un groupe canadien basé à Rivière-du-Loup | idem | confirmé | Newswire : « RIVIÈRE-DU-LOUP, QC [...] Premier Tech, a Canadian group based in Rivière-du-Loup ». Rewatec : « Premier Tech Ltée et ses compagnies affiliées » |
| description : installée à Châteauneuf-d'Ille-et-Vilaine | idem | confirmé | API : siège « 35430 CHATEAUNEUF-D'ILLE-ET-VILAINE » |
| description : gamme Calona, conçue et fabriquée en France, abreuvoirs bovins, ovins et caprins | idem | confirmé | Calona p. 2 : « Solutions en polyéthylène conçues pour l'abreuvement des bovins, ovins et caprins » |
| description : bacs à niveau constant de 8 à 1 100 L, robinet flotteur, bouchon de vidange | idem | confirmé | Calona p. 2 : modèles de 8 L à 1 100 L, « Robinet flotteur incorrodable », « Bouchon avec joint torique » |
| description : bacs d'herbage de 250 à 1 600 L | idem | confirmé | Le tableau de Calona va de 250 L à 1 600 L. Le titre annonce « 200 À 1600 L » : la fiche suit le tableau, ce qui est cohérent. |
| description : plaquette de 2020 | idem | confirmé | Calona : « © Premier Tech France S.A.S.U., 2020 » |
| description : Rewatec, cuves aériennes de 5 à 20 m³, kits de filtration et de pompage | idem | confirmé | Rewatec p. 1 : « Capacité 5 à 20m3 ». P. 2 : « Kits Pompage, Kits Aspiration, Kits Filtre » |
| logo_url | Cloudinary PREST_HRB_009.png | confirmé | Le apple-touch-icon de premiertechaqua.com montre le symbole « P » de Premier Tech, le même que sur les deux PDF. Le dépôt sur Cloudinary n'a pas été vérifié. |

SOURCES : 5 citées, 5 accessibles

VERDICT : incomplet

À sourcer, par ordre d'importance :
1. `departements` (vide, donc national) : citer une page du fabricant qui montre une couverture nationale (réseau de distributeurs, points de vente, livraison France entière). Sinon, restreindre la fiche aux départements documentés.

Remarques mineures, sans effet sur le verdict :
- **ACT_HRB_003** : le lien ne repose que sur les bacs d'herbage. Il est valable en rôle `materiel`, mais il ne couvre ni le réseau d'adduction ni la réserve de secours.
- **Raison sociale de la plaquette Calona** : la plaquette de 2020 est signée « Premier Tech France S.A.S.U. ». L'adresse et le nom commercial « PT Eau et Environnement » sont les mêmes que ceux de l'entité dont le SIRET est cité. Ce n'est pas une contradiction, mais l'écart de raison sociale est à connaître.
- **Champs de sources** : les champs déclarés sont exacts, à un détail près. Le téléphone figure aussi dans la plaquette Calona, alors qu'il n'est attribué qu'à la source Rewatec.


## PREST_HRB_010

## Contrôle de PREST_HRB_010 (CTH, Centre technique d'hygiène)

J'ai ouvert les 10 sources citées et toutes ont répondu. Je n'ai trouvé aucun champ contredit ni introuvable. Il reste un défaut de rattachement : la fiche ne sortira dans aucun plan d'action, voir la remarque 1 sous le tableau.

Fiche : /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_010.json

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | CTH (Centre technique d'hygiène) | confirmé | API Recherche d'entreprises : « CENTRE TECHNIQUE D'HYGIENE ». Le logo du site cth.fr affiche « CTH AGRI ». |
| type | equipementier | confirmé | cth.fr : « FABRICANT FRANÇAIS DE SOLUTIONS D'HYGIÈNE GLOBALE », « 4 sites de production sur le territoire français ». Page SAV : « conçu, assemblé, testé et installé par nos soins sur notre site drômois ». Le code NAF au registre est 46.75Z (commerce de gros), mais ce n'est pas une contradiction. |
| siret | 32542171700076 | confirmé | API : SIRET du siège 32542171700076, état administratif A, 128 AVENUE CHATEAU FLEURY 26100 ROMANS-SUR-ISERE. |
| departements | [] (national) | confirmé | Page SAV : « Notre équipe de techniciens itinérants, au nombre de 6, intervient sur site sur l'ensemble du territoire français. » |
| expertises : Chloration de l'eau de boisson | idem | confirmé | Page DOSACHLOR : « équipement de potabilisation de l'eau », solution chlorée, pompe doseuse, témoignages d'élevages (GAEC de la Bouchauderie, EARL Caussetières). Réussir Lait cite L. Girard (CTH) : « La chloration est le traitement bactériologique de l'eau de boisson le moins coûteux ». |
| expertises : Filtration et désinfection UV | idem | confirmé | Page TRIO UV : « Panneau complet pour le traitement ultra-violet de l'eau » (filtration, purification, stérilisation). |
| expertises : Détartrage des abreuvoirs et canalisations | idem | confirmé | Page DECAP TARTRE : produit détartrant « pour le détartrage des bacs, canalisations et abreuvoirs », pour bovins, ovins, caprins et autres espèces. |
| expertises : Installation et maintenance sur site | idem | confirmé | Page SAV : « contrats de maintenance par typologie de matériel », maintenance faite sur site par les techniciens. |
| contact site_internet | https://www.cth.fr | confirmé | Le site répond et c'est bien celui de CTH Agri. |
| contact tel | 04 75 70 71 72 | confirmé | Page nous-contacter : « 04 75 70 71 72 ». |
| contact mail | info@cth.fr | confirmé | Page nous-contacter : « info@cth.fr ». |
| contact adresse | 128 avenue Château Fleury, 26100 Romans-sur-Isère | confirmé | Page nous-contacter : « 128, avenue Château Fleury, 26100 Romans sur Isère ». Même adresse dans l'API. |
| mesures | [] | sans objet | Aucun lien à contrôler. Le catalogue du secteur (ACT_HRB_001 à 007) ne contient aucune mesure sur le traitement de l'eau d'abreuvement, donc l'absence de lien est cohérente. |
| description (pour information) | fabricant drômois, 4 sites, matériel sur devis, techniciens itinérants partout en France | confirmé | Page d'accueil : 4 sites de production, bovins, ovins, caprins. Page SAV : « chaque projet est validé au stade du devis », site drômois, 6 techniciens itinérants. Le passage « pas sur les fuites ni les débordements » est une déduction du rédacteur : aucune source ne parle de fuites, mais rien ne le contredit. |

SOURCES : 10 citées, 10 accessibles

VERDICT : conforme

### Points à corriger ou à sourcer, par ordre d'importance
1. **Rattachement (fonctionnel, pas factuel)** : `categories` et `mesures` sont vides alors que `secteurs` n'est pas vide. Un prestataire de secteur ne peut être rapproché d'une mesure que par un lien explicite ou, à défaut, par la catégorie de la mesure. Avec les deux champs vides, la fiche ne sera jamais proposée dans un plan d'action. Il faut choisir entre ajouter une catégorie, créer une mesure « qualité de l'eau d'abreuvement » ou ne pas publier la fiche.
2. **Type `equipementier`** : au registre SIRENE, l'entreprise a le code NAF 46.75Z (commerce de gros de produits chimiques). Le site, lui, la présente comme fabricant avec 4 sites de production, et c'est sur cette base que je confirme le type. Une relecture humaine peut trancher si besoin.
3. **Extraits à vérifier** :
   - Je n'ai pas retrouvé mot pour mot la phrase de la page DOSACHLOR « La pompe doseuse injecte une solution chlorée dans le bac... ». Le fond est confirmé, seule la formulation de l'extrait ne l'est pas.
   - Dans l'article Réussir, rien n'indique que la phrase « Sachant que les vaches ont tendance à boire en même temps » vient de CTH. Elle ne justifie rien de propre à CTH dans la fiche.
4. **Source sans contenu probant** : la page https://www.cth.fr/produits/traitement-eau ne contient que le texte d'introduction, les produits ne s'y affichent pas. Elle est redondante avec les trois pages produits, qui suffisent.


## PREST_HRB_011

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_011.json (RAGT Semences, prestataire, elevage_herbivores)

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | RAGT Semences | confirmé | recherche-entreprises : « RAGT SEMENCES », SIREN 431899756 |
| siret | 43189975600016 | confirmé | recherche-entreprises : siret du siège « 43189975600016 », etat_administratif « A », 7 établissements ouverts |
| type | equipementier | confirmé | ragt-seeds.com/fr/societe/ : « RAGT sélectionne, produit et vend des semences dans le monde entier » (fabricant de l'intrant, pas installateur). La source Géorisques citée en appui est illisible (voir plus bas), ce qui ne change pas le verdict |
| secteurs | elevage_herbivores | confirmé | fiches produit : « Bovin lait, Bovin viande, Ovin, Caprin » (RGT MULTI PRES), « Equin » en plus (RGT STOX LUZ TRIO) |
| categories | changer_process_pratiques | confirmé | même catégorie que ACT_HRB_004, la seule mesure liée |
| departements | [] (national, outre-mer compris) | contredit | page contacts : la liste va de « 01 - Ain » à « 95 - Val-D'Oise », 2A et 2B compris, sans aucun département d'outre-mer. L'extrait du rédacteur le dit lui-même. La source décrit une couverture métropolitaine (96 départements), pas nationale |
| expertises : Mélanges prairiaux multi-espèces | idem | confirmé | RGT MULTI PRES : dix espèces de graminées et légumineuses, « Teneur totale en légumineuses : 34% » |
| expertises : Semences de luzerne | idem | confirmé | RGT STOX LUZ TRIO : trois variétés de luzerne, 100 % légumineuses, « Sol sain, Sol séchant » |
| expertises : Sorgho fourrager et ensilage | idem | confirmé | page sorgho : débouchés « Ensilage, Fourrager » ; RGT PORTHOS « Sorgho multicoupe » |
| expertises : Prairie sous couvert de méteil | idem | confirmé | article méteil : « le semis de prairie sous couvert de méteil ou de céréales, qui reste un levier efficace » |
| mesures : ACT_HRB_004, rôle materiel | idem | confirmé | la mesure prévoit de semer « des prairies multi-espèces et des fourrages qui supportent la chaleur (luzerne, sorgho, méteils) » et un stock de sécurité. RAGT vend ces semences (RGT MULTI PRES, RGT STOX LUZ TRIO, sorghos, RGT STOX METEIL) et écrit qu'une prairie sous couvert de méteil est « une option fiable pour sécuriser durablement le potentiel fourrager ». Un rôle materiel ne demande pas de mention explicite, contrairement à travaux ou financement |
| contact site_internet | https://ragt-seeds.com/fr/ | confirmé | domaine des sept pages citées, qui répondent toutes |
| contact tel | 05 65 73 41 00 | confirmé | page contacts : « Bureau : 05 65 73 41 00 » |
| contact adresse | Site de Bourran, rue Emile Singla, 12000 Rodez | confirmé | recherche-entreprises : « SITE DE BOURRAN RUE EMILE SINGLA 12000 RODEZ » ; page contacts : « Rue Emile Singla 12000 RODEZ » |
| description : semencier aveyronnais qui sélectionne, produit et vend des semences | idem | confirmé | page société (phrase citée plus haut) ; siège à Rodez (12) selon recherche-entreprises |
| description : gamme fourragère (mélanges multi-espèces, luzernes, sorghos fourragers, méteils) | idem | confirmé | page société : « fourragères » ; pages produit et article méteil (RGT STOX METEIL, RGT COVER HIVER, etc.) |
| description : prairies adaptées aux sols séchants | idem | confirmé | RGT STOX LUZ TRIO : « Sol séchant » ; RGT MULTI PRES : fétuque élevée « adaptée à différentes conditions séchantes », lotier « Tolérant au sec » |
| description : sécuriser les stocks en semant une prairie sous couvert de méteil | idem | confirmé | article méteil : « sécuriser durablement le potentiel fourrager » |
| description : publie des guides techniques sur ces implantations | idem | introuvable | l'article méteil renvoie au « Guide Semis d'Automne 2026 : Colza, Blé Tendre, Couverts, Céréales à paille et Protéagineux » et à un guide sur les dérobées fourragères. Aucun guide ne porte sur l'implantation des prairies elles-mêmes |
| description : expert local à contacter par département | idem | confirmé | page contacts : « Contactez votre expert local », choix du département |
| description : expert consulté pour des conseils sur le choix des semences | idem | introuvable | la page contacts ne précise pas l'objet du contact |
| source Géorisques (type, production en France) | site des Molinières, séchage, tri, conditionnement | introuvable | l'URL répond (PDF de 148 Ko) mais le texte est compressé et ne peut pas être extrait. L'extrait cité n'a pas pu être vérifié |

Hors champs factuels, le favicon cité pour logo_url répond (PNG de 12,6 Ko). L'URL Cloudinary n'a pas été vérifiée.

SOURCES : 9 citées, 9 accessibles (le PDF Géorisques répond mais son contenu n'a pas pu être lu)

VERDICT : à corriger

Champs à corriger ou à sourcer, par ordre d'importance :
1. departements : la seule source de couverture décrit la métropole, 96 départements, 2A et 2B compris, sans outre-mer. Soit on saisit cette liste, soit on cite une source qui montre une présence outre-mer avant de garder [].
2. description, « publie des guides techniques sur ces implantations » : les guides cités portent sur les semis d'automne (couverts, céréales, protéagineux) et sur les dérobées, pas sur l'implantation des prairies. Il faut reformuler, ou citer un guide prairies.
3. description, « pour des conseils sur le choix des semences » : la page contacts ne dit rien de l'objet du contact. À sourcer ou à retirer.
4. source Géorisques : illisible par WebFetch. Le type equipementier reste justifié par la page société, mais l'extrait sur le site des Molinières n'est pas vérifié. À remplacer par une page HTML, ou à retirer.


## PREST_HRB_012

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_012.json (Cérience, prestataire, elevage_herbivores)

Une seule source répond : l'API Recherche d'entreprises. Les six autres URL pointent vers web.archive.org, et WebFetch refuse ce domaine (« unable to fetch from web.archive.org »). J'ai appliqué la règle : tout ce qui ne repose que sur ces copies archivées est « introuvable », même quand l'extrait recopié dans la fiche irait dans le même sens. Je n'ai pas consulté le site en ligne cerience.fr, qui n'est pas une source citée.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Cérience | confirmé | API : « nom_complet : CERIENCE » (seul l'accent diffère) |
| siret | 82247815200017 | confirmé | API : « siege.siret : 82247815200017 », etat_administratif A |
| type | equipementier | introuvable | La source qui doit le justifier (chiffres-cles-implantations, archive) ne répond pas. L'API donne seulement les codes NAF : activité principale 01.11Z et siège 46.21Z. Ce sont des codes de culture et de commerce de gros de semences, pas de fabrication de matériel. Le type est donc à faire valider |
| departements | [] (national) | introuvable | Source archivée inaccessible (extrait annoncé : « présents sur l'ensemble du territoire national ») |
| expertises : Mélanges prairiaux multi-espèces | | introuvable | Archive inaccessible (les-melanges-fourragers-multi-especes...) |
| expertises : Variétés de luzerne | | introuvable | Archive inaccessible (la-luzerne-une-cuture-fourragere...) |
| expertises : Prairie semée sous couvert | | introuvable | Archives inaccessibles (CP de mai 2023, article implanter-ses-prairies-sous-couvert) |
| expertises : Dérobées fourragères hivernales | | introuvable | Archives inaccessibles. De plus, aucun des extraits recopiés dans la fiche ne parle de dérobées |
| mesures : ACT_HRB_004, rôle materiel | materiel | introuvable | Les sources censées décrire l'offre de semences (prairies multi-espèces, luzerne) sont toutes archivées et inaccessibles. La mesure ACT_HRB_004 (prairies multi-espèces, luzerne, sorgho, méteils) correspondrait si ces sources étaient confirmées |
| contact site_internet | https://www.cerience.fr | introuvable | Aucune source accessible ne le donne. La valeur est cohérente avec le domaine des URL archivées citées |
| contact tel | 02 41 79 63 20 | introuvable | Seule source : la page archivée implanter-ses-prairies..., inaccessible. L'API ne donne pas de téléphone |
| contact adresse | 2, route de la Ménitré, Beaufort-en-Vallée, 49250 Beaufort-en-Anjou | confirmé en partie | API : « BEAUFORT EN VALLEE RTE DE LA MENITRE 49250 BEAUFORT-EN-ANJOU ». Le numéro « 2 » n'y figure pas : il n'est sourcé que par la page archivée inaccessible |
| description : fusion Terrena Semences et Jouffray-Drillaud | | introuvable | CP archivé de mai 2023 inaccessible |
| description : usines du Maine-et-Loire et de la Vienne, réseau commercial national | | introuvable | Page archivée chiffres-cles-implantations inaccessible |
| description : semis sous couvert décalé à l'automne dans ses stations | | introuvable | Archives inaccessibles |
| logo_url | Cloudinary PREST_HRB_012.png | introuvable | La source du favicon est elle aussi sur web.archive.org, inaccessible |

SOURCES : 7 citées (8 entrées, une même URL citée deux fois), 1 accessible

VERDICT : incomplet

Champs à sourcer, par ordre d'importance :
1. Lien mesures ACT_HRB_004 (rôle materiel) : il faut une source accessible qui décrive l'offre de semences fourragères (mélanges multi-espèces, luzerne).
2. type equipementier : à justifier par une source qui dise que l'entreprise produit et conditionne. Le NAF de l'API (01.11Z et 46.21Z) ne le montre pas.
3. departements [] (couverture nationale) : il faut une source accessible qui l'atteste.
4. Contact tel (02 41 79 63 20) et numéro « 2 » de l'adresse : aujourd'hui sourcés seulement par l'archive.
5. Expertises : « Dérobées fourragères hivernales » d'abord, car aucun extrait recopié n'en parle. Puis les trois autres.
6. Description (fusion, usines 49 et 86, réseau commercial, stations d'essai), site internet et logo_url.

Remarque : toutes les sources de contenu sont des copies web.archive.org, que l'outil de contrôle ne peut pas lire. Il faudrait au moins une source accessible par point clé (mesure, type, couverture), par exemple une page d'un autre domaine, pour que la fiche puisse être confirmée.


## PREST_HRB_013

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_013.json (PâtureSens, prestataire, secteur elevage_herbivores), fait le 2026-10-15

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | PâtureSens | confirmé | Accueil : « PâtureSens est une entreprise indépendante et spécialisée qui diffuse les techniques d'un pâturage de précision. » |
| type | bureau_etudes | confirmé | Accueil : « Consultants spécialisés en pâturage et production bovine ». Il s'agit d'un cabinet de conseil (et d'un organisme de formation, activité secondaire). NAF 01.62Z dans l'API. |
| siret | 83073352300021 | confirmé | API Recherche d'entreprises : « GMB (PATURESENS), siret siège 83073352300021, état A » |
| departements 50, 61 | Manche, Orne | confirmé | Accueil : consultants « Orne » (A. Guérin) et « Manche » (A. Gesnouin) |
| departements 22, 29, 35, 56, 44, 49, 53, 72, 85 | Bretagne et Pays de la Loire | confirmé | Accueil : « Simon Bécherie : Bretagne et Pays de Loire » |
| departements 14 | Calvados | confirmé par déduction | Accueil : « Suisse normande ». Cette zone s'étend sur le Calvados et l'Orne, le 14 en est déduit. |
| departements 59 | Nord | confirmé, avec une réserve | Accueil : « Tom Przeszlo : Nord ». On ne sait pas si c'est le département 59 ou le nord de la France au sens large. |
| (remarque departements) | liste de 13 départements | sans objet | L'accueil dit aussi « accompagne les éleveurs de France et de Belgique ». La liste reprend les zones des consultants, ce qui est défendable, mais le prestataire revendique une couverture nationale. |
| expertises : Pâturage tournant dynamique | | confirmé | Contact : « Soyez accompagné pour passer au pâturage tournant dynamique. » |
| expertises : Organisation du parcellaire | | confirmé | Accompagnement, étape 1 : « Parcellaire adapté [...] on organise le parcellaire selon les objectifs » |
| expertises : Clôtures et abreuvement au pâturage | | confirmé | Accompagnement, étape 2 : « Chemins, clôtures et abreuvement », avec un accompagnement au choix de ces équipements |
| expertises : Pilotage de la saison de pâturage | | confirmé | Accompagnement, étape 3 : « Mesurer, observer, s'adapter » (mesurer l'herbe, ajuster la conduite). Formations automne et mise à l'herbe. |
| mesures ACT_HRB_003, rôle conseil_etude | réseau d'abreuvement au pâturage | confirmé | Accompagnement : un accompagnement au choix de « chemins, clôtures et abreuvement » est proposé. La source ne parle pas de la partie « réserve de secours » de la mesure. |
| mesures ACT_HRB_003, rôle formation | | confirmé | Le Pâturage 3.0 : « Développer les compétences pratiques pour la pose de clôtures et de réseaux d'eau. » Le programme détaillé (modules 1 à 5) ne traite cependant que de la clôture. |
| mesures ACT_HRB_004, rôle conseil_etude | système fourrager résilient | confirmé, avec une réserve | Accompagnement, étape 3 : mesurer l'herbe, les stocks et la croissance, puis ajuster la conduite. Cela couvre le levier « plus d'herbe pâturée, saison allongée » de la mesure. La source ne dit rien de la sécheresse, des prairies multi-espèces, des fourrages tolérants à la chaleur ni du stock de sécurité d'une année sur l'autre. |
| mesures ACT_HRB_004, rôle formation | | confirmé, avec une réserve | Organiser sa mise à l'herbe : « décider d'augmenter la part du pâturage dans la ration », face aux « conditions climatiques adverses ». Automne : planifier la saison selon la pousse et les stocks « sur pied ou en fourrage ». Les deux pages ne parlent ni de sécheresse ni d'eau. |
| contact site_internet | https://www.paturesens.com/ | confirmé | L'URL répond, c'est le site de la structure |
| contact tel | 02 79 65 32 75 | confirmé | Accueil et page contact : « 02 79 65 32 75 » |
| contact mail | contact@paturesens.com | confirmé | Page contact : « contact@paturesens.com » |
| contact adresse | 10 route de l'Abbaye, 50210 Ouville | confirmé | Accueil : « 10 route de l'Abbaye, 50210 Ouville ». API : « 10 ROUTE DE L'ABBAYE 50210 OUVILLE ». |
| description : basé à Ouville, organisme de formation GMB | | confirmé | Page formations : « Organisme de Formation GMB PâtureSens » |
| description : conseil individuel ou en groupe, sur rendez-vous | | confirmé | Accompagnement : « conseil individuel ou en groupe d'éleveurs », rendez-vous de 30 minutes |
| description : VIVEA, 210 euros la journée pour les salariés | | confirmé | Formations : « Les ressortissant(e)s Vivea à jour de leur cotisation MSA peuvent prétendre à la prise en charge des coûts pédagogiques » et « le tarif est de 210 euros la journée » (sauf mention contraire dans la présentation de la formation) |
| logo_url (source favicon) | Cloudinary | URL source accessible | Le favicon est bien un PNG (16,1 Ko). La taille annoncée dans l'extrait (« 512 x 512 px ») n'a pas pu être lue. |

SOURCES : 10 citées (9 URL distinctes, l'accueil est cité deux fois), 10 accessibles

VERDICT : conforme

Aucun champ n'est contredit ni introuvable. Points à revoir, du plus important au moins important :
1. Lien ACT_HRB_004 (conseil_etude, formation) : il ne s'appuie que sur le levier pâturage (plus d'herbe pâturée, saison mieux conduite). Les sources ne parlent jamais de sécheresse, d'espèces fourragères tolérantes ni de stock de sécurité. À garder si on accepte une couverture partielle de la mesure. Sinon, il faut une source qui relie explicitement l'offre à l'adaptation à la sécheresse.
2. Lien ACT_HRB_003 : le conseil et la formation portent sur le réseau d'abreuvement au pâturage, pas sur la réserve de secours. Le programme détaillé du Pâturage 3.0 ne traite que de la clôture. Seul l'objectif général mentionne les réseaux d'eau.
3. departements : le 59 (« Nord ») et le 14 (« Suisse normande ») sont des interprétations. Le site dit aussi accompagner « les éleveurs de France et de Belgique », ce qui pourrait justifier une fiche nationale (liste vide). C'est une décision de périmètre à trancher.
4. Description : le tarif de 210 euros la journée vaut « sauf mention contraire » dans la présentation de chaque formation. Ce détail mineur pourrait être précisé.
5. Extrait de la source logo_url : la taille « 512 x 512 px » n'a pas pu être vérifiée.


## PREST_HRB_014

## Contrôle de PREST_HRB_014 (ESPACE Basse-Normandie)

Fiche contrôlée : `/Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_014.json`

**Verdict : incomplet.** Aucun champ n'est contredit par les sources. Un seul point de la description n'est pas sourcé : les pompes de prairie.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | ESPACE Basse-Normandie | confirmé | DECP : `denominationsocialeetablissement` « ESPACE Basse Normandie ». PDF du PNR : « Les prestataires sont ESPACE Basse-normandie et Astre-Environnement ». La dénomination légale est « ENTRET SAUVEG PATRIM AMENAG COURS EAU BN ». |
| type | association | confirmé | Recherche d'entreprises : siren 438063216, nature juridique 9220 (association déclarée), NAF 91.04Z. |
| siret | 43806321600032 | confirmé | Recherche d'entreprises : siège 43806321600032, « LES BRUYERES 14240 CAHAGNES », état A. C'est aussi le titulaire des 36 marchés DECP. |
| departements | 14, 50, 61 | confirmé | DECP : acheteurs dans le 14 (Intercom de la Vire au Noireau, CC Pré-Bocage Intercom), le 50 (CA du Cotentin, Saint-Lô Agglo, CA Mont-Saint-Michel-Normandie, CC Coutances Mer et Bocage, CC Côte Ouest Centre Manche) et le 61 (Flers Agglo, CU d'Alençon). Marchés notifiés de 2019 à 2023. |
| expertises : Clôtures de berges | | confirmé | DECP, Flers Agglo : « Tvx Entente Noireau-Fourniture et mise en place de clôtures, d'abreuvoirs, d'hydrotubes, de passerelles ». PDF : « 1500m de clôture » le long de la Sinope. |
| expertises : Points d'abreuvement au pâturage | | confirmé | DECP, CC Pré-Bocage : « Lot 2: Fourniture et mise en place d abreuvoirs ». PDF : « 12 abreuvoirs, 2 bacs avec raccordement au réseau ». |
| expertises : Franchissements de cours d'eau | | confirmé | DECP, CA du Cotentin : « REALISATION D OUVRAGES DE FRANCHISSEMENT DE LA SAIRE A VOCATION AGRICOLE ». PDF : « 7 franchissements ». |
| expertises : Restauration de cours d'eau | | confirmé | DECP : « Travaux de restauration des cours d'eau du bassin de la Sarthe Alençonnaise », « ... de la Vire Amont », « LOT 8 MERDERET », etc. |
| description : association déclarée basée à Cahagnes, titulaire de marchés d'intercommunalités du 14, du 50 et du 61 | | confirmé | Mêmes passages que pour type, siret et departements. |
| description : clôtures, abreuvoirs, bacs raccordés au réseau, passerelles et franchissements | | confirmé | DECP Flers Agglo : clôtures, abreuvoirs, hydrotubes, passerelles. PDF : 12 abreuvoirs, 2 bacs raccordés, 7 franchissements, 1500 m de clôture. Nuance : sur la ferme décrite, ces travaux ont été faits par deux prestataires (« ESPACE Basse-normandie et Astre-Environnement »), sans répartition entre eux. |
| description : « des pompes de prairie » | | introuvable | Le PDF cite « pompe de prairie » parmi les aménagements proposés par le programme, faits « par une entreprise », sans dire laquelle. Les travaux attribués à ESPACE sur la ferme Duruel n'en comprennent pas, et aucun marché DECP n'en mentionne. |
| description : travaux sous maîtrise d'ouvrage de la collectivité, financés à 80 % par l'AESN et à 20 % par l'agglomération dans le Cotentin | | confirmé | PDF : « Ces différents travaux sont effectués par une entreprise sous maîtrise d'ouvrage de la collectivité » et « Le financement est assuré par l'Agence de l'Eau Seine Normandie à hauteur de 80% et de la CA le Cotentin sur les 20% restants ». |
| description : homonyme ESPACE BASSE NORMANDIE, SIRET 43380993600019, Le Bas Canteloup, Cahagnes | | confirmé | Recherche d'entreprises : siren 433809936, siège 43380993600019, « LE BAS CANTELOUP 14240 CAHAGNES », 94.99Z. Attention : ESPACE avait aussi un établissement à « LE BAS CANTELOUP », aujourd'hui fermé (43806321600016). La même adresse figure donc pour les deux structures. |
| contact tel | 02 31 77 37 96 | confirmé | cahagnes.fr : « Tél : 02.31.77.37.96 » |
| contact adresse | Les Bruyères, 14240 Cahagnes | confirmé | cahagnes.fr : « Les Bruyères » 14240 Cahagnes. L'adresse du siège dans la Recherche d'entreprises est la même. |
| mesures : ACT_HRB_007, rôle travaux | travaux | confirmé | La mesure prévoit une clôture reculée de la berge et un abreuvement hors du lit. PDF : aménagements pour l'abreuvement et clôtures, « Ces différents travaux sont effectués par une entreprise [...] Les prestataires sont ESPACE Basse-normandie ». DECP : « Fourniture et mise en place de clôtures, d'abreuvoirs » dans des marchés de restauration de cours d'eau. Le rôle travaux est donc écrit explicitement. Comme le dit la fiche, l'éleveur passe par la collectivité et ne contracte pas en direct. |
| infos_complementaires | (absent) | sans objet | |

Les catégories (`agir_rejets_qualite`, `agir_grand_cycle`) ne sont pas dans la liste des champs à contrôler. Elles concordent avec la catégorie de ACT_HRB_007 et avec les marchés de restauration de cours d'eau.

SOURCES : 4 citées, 4 accessibles. WebFetch n'a pas lu le texte du PDF du PNR. Le fichier téléchargé se lit bien, et l'extrait cité dans la fiche y figure mot pour mot.

VERDICT : incomplet

### À corriger ou à sourcer, par ordre d'importance
1. **Description, « pompes de prairie »** : aucune source ne dit qu'ESPACE en installe. Il faut retirer le terme ou citer une source qui l'attribue à ESPACE.
2. **Description, bacs raccordés au réseau** : la seule source est le chantier Duruel, réalisé avec Astre-Environnement. Mieux vaut le présenter comme une réalisation partagée, ou trouver une source propre à ESPACE.
3. **Homonyme** : le Bas Canteloup est aussi une ancienne adresse d'ESPACE (établissement 43806321600016, fermé). Le préciser éviterait qu'un relecteur prenne les deux structures l'une pour l'autre, ou les croie sans lien.


## PREST_HRB_015

Contrôle de /Users/valentin/Desktop/Noé/api/seeds/staging/elevage_herbivores/fiches/PREST_HRB_015.json (prestataire, élevage d'herbivores, 2026-10-15)

Toutes les URL citées répondent. WebFetch ne savait pas lire les cinq PDF, je les ai donc lus en entier dans leur version téléchargée.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Parc naturel régional des Marais du Cotentin et du Bessin | confirmé | Statuts, art. 1 : « usuellement appelé "Parc naturel régional des Marais du Cotentin et du Bessin" » |
| type | collectivite | confirmé | Statuts, art. 1 : « syndicat mixte ouvert [...] formé des collectivités territoriales ci-dessous ». API Recherche d'entreprises : nature juridique 7355 |
| siret | 25500255200032 | confirmé | API Recherche d'entreprises : « SYND MIXTE GESTION PARC NATUREL REGIONAL », SIRET du siège 25500255200032, état A |
| departements | 50, 14 | confirmé | Statuts, art. 1 : « les Conseils Départementaux de la Manche et du Calvados [...] Manche (93) [...] Calvados (21) » |
| expertises : Animation Élevage & Marais | idem | confirmé | Communiqué de 2025 : « Depuis 2019, le Parc naturel régional [...] et la Chambre d'agriculture de la Manche animent le projet "Elevage & Marais" » |
| expertises : Paiements pour services environnementaux | idem | confirmé | Communiqué de 2025 : « le Parc naturel régional porte une expérimentation de Paiements pour Services Environnementaux, financée par l'Agence de l'Eau Seine-Normandie » |
| expertises : Animation du SAGE Douve Taute | idem | confirmé | Page marais-et-eau : « celui du bassin versant de la Douve et de la Taute animé par le Parc » |
| expertises : Appui aux syndicats de marais | idem | confirmé | Page marais-et-eau : « la gestion des niveaux d'eau par les syndicats de marais est un enjeu particulier [...] C'est pourquoi le Parc accompagne ces syndicats. » |
| contact site_internet | https://parc-cotentin-bessin.fr | confirmé | Toutes les sources sont hébergées sur ce domaine. Pied de page des PDF : « www.parc-cotentin-bessin.fr » |
| contact tel | 02 33 71 61 90 | confirmé | Page contact : « Contact administratif : 02 33 71 61 90 » |
| contact mail | info@parc-cotentin-bessin.fr | confirmé | Page contact : « Contact administratif : info@parc-cotentin-bessin.fr » |
| contact adresse | Maison du Parc, 3 village Ponts d'Ouve, Saint-Côme-du-Mont, 50500 Carentan-les-Marais | confirmé (voir remarque 1) | Pied de page de la page contact, bloc Maison du Parc : « 3 village Ponts d'Ouve / Saint-Côme-du-Mont / 50500 CARENTAN-LES-MARAIS ». Statuts, art. 4 : « 3 village "Ponts d'Ouve" - Saint-Côme-du-Mont, 50500 CARENTAN-LES-MARAIS » |
| mesures : ACT_AGR_010 (Démarche collective), rôle conseil_etude | idem | confirmé | Page marais-et-eau : le Parc anime le SAGE Douve-Taute et mène « un travail partenarial avec les acteurs locaux (syndicats d'eau, profession agricole, collectivités...) ». Note Élevage & Marais, p. 2 : « programme agricole sur le SAGE Douve Taute », « démarches opérationnelles de concertation ». C'est bien l'objet de la mesure (SAGE, faire valoir ses besoins). Le rôle conseil_etude n'exige pas de mention explicite de travaux ni de financement. |

Champs hors de la liste de contrôle, relus par cohérence :
- **description** : chaque affirmation est retrouvée dans une source citée (syndicat mixte, Manche et Calvados, Élevage & Marais depuis 2019 avec la Chambre, Patur'Ajuste, MAE et PSE financés par l'AESN, SAGE, syndicats de marais). La dernière phrase (« pas la réduction des volumes ») est une interprétation du rédacteur. Elle est cohérente avec les sources, qui ne parlent jamais de réduction des volumes.
- **logo_url** : la source pointe vers le logo SVG officiel du site (emblème vert, texte rouge au nom du Parc).
- **categories** : `agir_grand_cycle` correspond à la catégorie de ACT_AGR_010.

SOURCES : 9 citées, 9 accessibles

VERDICT : conforme

Rien à corriger ni à sourcer. Trois remarques, sans effet sur le verdict, par ordre d'importance :
1. **Adresse** : la page contact donne deux adresses pour la Maison du Parc. Le corps de page indique « 2071 route de Saint-Côme, Saint-Côme-du-Mont, 50500 CARENTAN-LES-MARAIS », le pied de page indique « 3 village Ponts d'Ouve ». La fiche reprend la seconde, qui est aussi le siège statutaire (art. 4). L'adresse du corps de page semble être l'adresse d'accueil actuelle : à trancher par un humain si l'on veut l'adresse de visite plutôt que celle du siège. Par ailleurs, SIRENE donne le code postal 50480, alors que la fiche, le site et les statuts donnent 50500.
2. **Lien vers ACT_AGR_010** : l'extrait cité pour la note Élevage & Marais porte sur les MAEc collectives, pas sur la gestion collective de l'eau. Le lien tient surtout grâce à la page marais-et-eau (animation du SAGE). On pourrait remplacer l'extrait par « programme agricole sur le SAGE Douve Taute », qui figure dans la même note.
3. **Partenaire du programme** : le communiqué de juin 2026 parle des « Chambres d'Agriculture de Normandie », celui de 2025 et la délibération de 2024 de la « Chambre d'agriculture de la Manche ». La description écrit « la Chambre d'agriculture » sans préciser, ce qui reste exact.
