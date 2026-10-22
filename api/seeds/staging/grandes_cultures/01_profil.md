# Profil eau du secteur : grandes cultures

Note de profil, étape 2 du skill `nouveau-secteur`. Statut : brouillon, à valider par un consultant.
Date de rédaction : 2026-10-15.

| Champ | Valeur |
|---|---|
| `sector_id` | `grandes_cultures` |
| Libellé | Grandes cultures |
| Préfixe des mesures | `GCU` (`ACT_GCU_001` et suivants) |
| Codes NAF | 01.11Z, 01.12Z, 01.14Z, 01.15Z, 01.16Z, 01.19Z (156 967 établissements, dont 11 727 employeurs, d'après `00_perimetre.md`) |

Cette note prolonge `00_perimetre.md` et confirme son idée centrale : le secteur se partage entre
des irrigants, pour qui l'irrigation par aspersion est de très loin le premier poste d'eau, et une
majorité d'exploitations en sec, qui ne prélèvent presque rien mais dont le rendement dépend de la
pluie et de la réserve utile du sol. Le questionnaire devra donc traiter les deux publics sans
pénaliser le second.

Avertissement de méthode. Les statistiques nationales portent sur toute l'agriculture, pas sur les
seules grandes cultures : aucune source trouvée ne donne la part d'exploitations irrigantes parmi les
exploitations spécialisées en grandes cultures (la table Agreste RA2020_0053 la contient, mais n'a
pas pu être lue). Plusieurs documents PDF (chambres d'agriculture, Agreste régional, agences de
l'eau) n'ont été lus qu'au travers d'extraits de recherche : ils sont signalés « (extrait) » dans la
liste des sources, et leurs chiffres sont à relire dans le document avant publication d'une fiche.
Conversion utilisée dans toute la note : 1 mm d'eau sur un hectare vaut 10 m3.

## 1. Usages de l'eau, du plus gros au plus petit

**1. Irrigation des cultures, quand elle existe.** C'est le seul poste qui compte en volume.

*Combien irriguent.* En 2020, 1,8 million d'hectares ont été irrigués en France métropolitaine, soit
6,8 % de la surface agricole utile, en hausse de 15 % depuis 2010, et les surfaces équipées pour
l'irrigation atteignent 2,8 millions d'hectares (11 % de la SAU, +23 %)
[INRAE, Sciences Eaux & Territoires, 2024](https://revue-set.fr/article/view/8246). Plus de
71 000 exploitations ont irrigué, soit 18 % des exploitations, et 13 % étaient équipées sans irriguer
cette année-là (même source). Huit régions concentrent 94 % des surfaces irriguées, Nouvelle-Aquitaine,
Centre-Val de Loire et Occitanie en tête (même source). Autrement dit, plus de huit exploitations sur
dix n'irriguent pas, et la part dans les seules grandes cultures reste à établir (à confirmer).

*Quelles cultures.* Le maïs, fourrage compris, couvre 38 % de la surface irriguée et le blé 12 %
[SDES, 2024](https://www.statistiques.developpement-durable.gouv.fr/lirrigation-des-surfaces-agricoles-evolution-entre-2010-et-2020).
Le maïs grain et semence ne pèse plus que 33 % des surfaces irriguées en 2020 contre 49 % en 2000, et
34 % de ses surfaces sont irriguées ; les surfaces irriguées en soja ont progressé de 181 % et en pomme
de terre de 37 % entre 2010 et 2020, le maïs fourrage représentant 5 % des surfaces irriguées
[INRAE, Sciences Eaux & Territoires, 2024](https://revue-set.fr/article/view/8246).

*Quels volumes.* Les prélèvements agricoles sont en moyenne de 3 milliards de m3 par an sur 2010 à
2020, dont plus de 90 % pour l'irrigation, soit 1 902 m3 par hectare irrigué en 2020 contre 1 924 en
2010 [Insee, d'après SDES, OFB-BNPE et Agreste, 2024](https://www.insee.fr/fr/statistiques/7728881).
En 2022, année sèche, ils ont atteint 3,5 milliards de m3, soit 12,2 % des prélèvements de métropole,
un milliard de plus qu'en 2021, puisés surtout d'avril à septembre
[SDES, 2025](https://www.statistiques.developpement-durable.gouv.fr/les-prelevements-deau-douce-par-usage-en-france-en-2022).
Le poids réel est dans la consommation (eau prélevée et non restituée au milieu) : l'agriculture en
représente 58 %, et de juin à août la consommation atteint environ 60 % du total annuel, surtout à
cause de l'irrigation [SDES, 2025](https://www.statistiques.developpement-durable.gouv.fr/leau-en-france-ressource-et-utilisation-extrait-du-bilan-environnemental-2024).

*Besoins par culture.* Arvalis calcule, sans stress hydrique, une consommation totale sur le cycle de
500 mm pour le maïs (450 à 600), 435 mm pour le blé tendre et le blé dur (350 à 500), 415 mm pour le
sorgho, 360 mm pour la pomme de terre et 280 mm pour l'orge de printemps
[Arvalis, Perspectives agricoles, 2024](https://www.perspectives-agricoles.com/conduite-de-cultures/modelisation-des-besoins-en-eau-combien-consomment-les-cultures).
La pluie et la réserve du sol en couvrent une partie : pour une année sèche, Terres Inovia retient
des apports d'irrigation de 240 mm pour le maïs, 200 mm pour le soja, 140 mm pour le sorgho et 100 mm
pour le tournesol et le pois [Terres Inovia, 2022](https://www.terre-net.fr/terres-inovia/article/173461/evaluer-la-rentabilite-du-tournesol-pour-mieux-saisir-son-interet-et-sa-robustes),
soit de l'ordre de 2 400 m3 par hectare pour le maïs (calcul de la présente note). L'eau d'irrigation
rapporte 3 à 4 q/ha par tranche de 10 mm sur maïs, 2,5 q/ha sur blé tendre et 0,6 à 0,8 t/ha sur
pomme de terre [Arvalis, Perspectives agricoles, 2024](https://www.perspectives-agricoles.com/conduite-de-cultures/modelisation-des-besoins-en-eau-combien-consomment-les-cultures).

**2. Submersion des rizières (01.12Z).** En Camargue, une rizière recevrait en moyenne de l'ordre de
23 000 m3 par hectare et par an (25 000 à 30 000 selon un autre document du même organisme), et 350 à
400 millions de m3 d'eau du Rhône seraient introduits chaque année dans l'île de Camargue, à 85 %
pour les rizières [Parc naturel régional de Camargue](https://www.parc-camargue.fr/parc-camargue/201100114/0001/Le_riz_en_Camargue.pdf)
(extrait, chiffres à confirmer). La surface en riz est stable autour de 15 000 hectares depuis 2014
[Assemblée nationale, réponse ministérielle n° 43401](https://www.assemblee-nationale.fr/dyn/15/questions/QANR5L15QE43401.pdf)
(extrait). La submersion d'avril à septembre maintient la salinité des sols à un niveau acceptable
[GREC-SUD](https://www.grec-sud.fr/article-cahier/les-articles-du-cahier-agriculture-et-foret/lagriculture-regionale-face-au-defi-climatique/des-scenarios-pour-anticiper-ladaptation-des-systemes-rizicoles-camarguais/) :
l'eau n'y sert pas seulement la plante.

**3. Irrigation de la canne à sucre outre-mer (01.14Z).** À La Réunion, près de 17 000 hectares sont
irrigués, soit la moitié des terres agricoles, dont près de 6 000 dans l'ouest grâce au transfert
d'eau de l'est vers l'ouest [Sénat, 2023](https://www.senat.fr/rap/r22-799/r22-7995.html). Le projet
d'irrigation du littoral ouest prévoyait à terme 7 300 hectares de canne irriguée
[TCO, 2014](https://www.tco.re/wp-content/uploads/2014/06/Projet-dIrrigation-du-Litorral-Ouest.pdf) (extrait).

**4. Préparation des bouillies et lavage du pulvérisateur.** Volume faible au regard de l'irrigation
(non chiffré, à confirmer), mais c'est le principal point de contact entre l'exploitation en sec et la
qualité de l'eau (section 4).

**5. Usages annexes** : lavage du matériel, sanitaires, serres pour les fleurs coupées de 01.19Z.
Marginaux, non chiffrés.

**L'exploitation en sec** ne prélève presque rien, mais elle consomme l'eau du sol : son exposition
passe par la réserve utile et le rendement (section 3).

## 2. Sources d'approvisionnement

Pour les exploitations à accès individuel ou mixte, l'eau vient exclusivement de forages dans 44 % des
cas, d'eaux de surface dans 20 %, de retenues dans 16 %, et d'origines multiples dans 20 % ; environ
12 800 exploitations possèdent au moins une retenue individuelle, contre 15 800 en 2010
[INRAE, Sciences Eaux & Territoires, 2024](https://revue-set.fr/article/view/8246). L'accès
individuel exclusif couvre 63 % des surfaces équipées et l'accès collectif exclusif 22 %, la part du
collectif, exclusif ou mixte, étant estimée entre 22 et 37 % (même source).

En volume, 58 % de l'eau d'irrigation provenait des rivières, canaux et lacs en 2020, avec un contraste
fort : plus de 85 % d'eaux de surface dans le Sud, plus de 85 % d'eaux souterraines dans les bassins du
Centre et de l'Ouest [Insee, d'après SDES, 2024](https://www.insee.fr/fr/statistiques/7728881).

Les réseaux collectifs sont portés par des associations syndicales autorisées (ASA) et par les
sociétés d'aménagement régional (BRL en Languedoc, Société du canal de Provence, Rives & Eaux du
Sud-Ouest, ex-CACG, dont l'agrément a été transféré en 2025 [AIDA, Ineris, 2025](https://aida.ineris.fr/reglementation/arrete-180825-portant-agrement-direction-lingenierie-societe-rives-eaux-sud-ouest)).
La réutilisation des eaux usées traitées reste marginale : moins de 1 % du volume total des eaux
traitées, selon une estimation du Cerema de 2020 [Eaufrance, 2025](https://www.services.eaufrance.fr/REUT).
L'eau de pluie de toiture ne pèse rien face à ces volumes et ne servirait qu'aux bouillies (à confirmer).

## 3. Dépendances critiques

**Pour l'irrigant, l'arrêté sécheresse coupe le premier poste au pire moment.** Le cadre national
prévoit, pour l'aspersion, une interdiction entre 11 h et 18 h en alerte, entre 9 h et 20 h en alerte
renforcée, et totale en crise ; l'irrigation localisée (goutte-à-goutte) reste autorisée jusqu'à
l'alerte renforcée et n'est interdite en crise que hors semences et plants
[ministère de la Transition écologique, 2024](https://www.ecologie.gouv.fr/politiques-publiques/origine-gestion-secheresse).
Les arrêtés-cadres départementaux déclinent ce schéma en tours d'eau ou en jours d'interdiction (même
source). Le maïs est le plus exposé : la période à protéger en priorité va du stade 15 feuilles à
environ 10 à 15 jours après la floraison femelle
[Arvalis, 2023](https://www.arvalis.fr/infos-techniques/mais-comment-adapter-lirrigation-en-cas-de-ressources-en-eau-limitees),
c'est-à-dire juillet, en pleine période de restrictions. Les cultures sous contrat (maïs semence,
pomme de terre) cumuleraient perte de rendement et pénalités contractuelles (à confirmer).

**Pour l'exploitation en sec, la sécheresse passe directement dans le rendement.** En 2022, le maïs
grain du Centre-Val de Loire a donné 109 q/ha en irrigué contre 56 q/ha en non irrigué
[DRAAF Centre-Val de Loire, Agreste, 2023](https://draaf.centre-val-de-loire.agriculture.gouv.fr/IMG/pdf/no3_bimestrielle_fevrier_2023.pdf)
(extrait). En 2025, Arvalis estime le rendement national du maïs grain à 88,5 q/ha, celui du maïs
pluvial proche de 77 q/ha, avec des baisses de 20 à 30 % en Poitou-Charentes, Pays de la Loire,
Limousin, Bourgogne et Sud-Ouest
[Arvalis, 2025](https://www.arvalis.fr/infos-techniques/mais-grain-une-campagne-2025-entre-secheresse-et-canicules).
Aucun arrêté ne s'applique à elle, aucun levier d'irrigation non plus : ses leviers sont l'assolement,
les variétés et le sol.

**Une ressource partagée.** Quand l'eau vient d'un réseau collectif ou d'un volume attribué par un
organisme unique de gestion collective, la décision de coupure ou de réduction ne dépend pas de
l'exploitant. Dans les zones de répartition des eaux, le volume autorisé peut être dégressif pour
rejoindre le volume prélevable du périmètre
[ministère de l'Environnement, note du 3 mai 2016, AIDA](https://aida.ineris.fr/reglementation/note-030516-fin-autorisations-temporaires-prelevements-eau-lirrigation-agricole-zone) :
la disponibilité future peut baisser indépendamment des arrêtés sécheresse.

**Riz.** La riziculture dépend entièrement du Rhône. Le changement climatique y réduirait la
ressource en eau douce, accroîtrait la salinisation et ferait remonter la langue d'eau salée dans le
cours inférieur du fleuve [GREC-SUD](https://www.grec-sud.fr/article-cahier/les-articles-du-cahier-agriculture-et-foret/lagriculture-regionale-face-au-defi-climatique/des-scenarios-pour-anticiper-ladaptation-des-systemes-rizicoles-camarguais/).

## 4. Risques et contraintes réglementaires

**Autorisation et déclaration.** Un forage hors nappe d'accompagnement relève de la déclaration
au-delà de 10 000 m3 par an et de l'autorisation à partir de 200 000 m3 ; en zone de répartition des
eaux, tout prélèvement d'une capacité d'au moins 8 m3/h est soumis à autorisation, les autres à
déclaration [AIDA, Ineris, nomenclature IOTA, rubriques 1.1.2.0 et 1.3.1.0](https://aida.ineris.fr/node/39225).
Les zones de répartition des eaux sont celles où les ressources sont insuffisantes par rapport aux
besoins de façon non exceptionnelle [DREAL Poitou-Charentes, data.gouv, 2015](https://www.data.gouv.fr/datasets/zones-de-repartition-des-eaux-souterraines-surface).

**Compteur.** Le compteur volumétrique est obligatoire en cas de pompage, ceux à remise à zéro sont
interdits, et l'absence de moyen de mesure approprié est contrôlée au titre de la conditionnalité des
aides de la PAC [ministère de l'Agriculture, Telepac, 2023](https://www1.telepac.agriculture.gouv.fr/telepac/pdf/conditionnalite/2023/technique/Conditionnalite-2023_fiche-technique_environnement-1_directive_cadre_eau.pdf)
(extrait).

**Gestion collective.** L'organisme unique de gestion collective (OUGC) détient l'autorisation unique
pluriannuelle de tous les prélèvements d'irrigation d'un périmètre, pour quinze ans au plus ; il
recueille les besoins, répartit les volumes, fait un rapport de fin de saison et peut proposer des
adaptations des règles de restriction [ministère de l'Environnement, note du 3 mai 2016, AIDA](https://aida.ineris.fr/reglementation/note-030516-fin-autorisations-temporaires-prelevements-eau-lirrigation-agricole-zone).
Cette note a été abrogée par une instruction du 14 décembre 2023 (même source), à relire avant de
rédiger les fiches. Dans le Gers, l'irrigant transmet à son OUGC ses volumes et son assolement
prévisionnel [chambre d'agriculture du Gers](https://gers.chambres-agriculture.fr/sinformer/produire-et-innover/irrigation).

**Projets de territoire et retenues.** Le projet de territoire pour la gestion de l'eau (PTGE)
comprend obligatoirement un volet de sobriété ; le stockage n'y est pas systématique, et les agences
de l'eau ne financent, pour l'irrigation, que la part des ouvrages qui substitue des prélèvements
d'étiage [instruction du 7 mai 2019, AIDA](https://aida.ineris.fr/reglementation/instruction-gouvernement-070519-relative-projet-territoire-gestion-leau).
La Cour des comptes relève que les projets de stockage (Sivens, Sainte-Soline, Caussade) sont contestés
pour leurs effets sur la recharge des nappes, et recommande de conditionner le financement public de
la sécurisation de l'irrigation à des engagements de réduction des prélèvements
[Cour des comptes, 2023](https://www.ccomptes.fr/fr/documents/65540).

**Plan eau.** Il vise 10 % d'eau prélevée en moins d'ici 2030 et 1 000 projets de réutilisation
d'ici 2027 [ministère de la Transition écologique, 2026](https://www.ecologie.gouv.fr/politiques-publiques/plan-daction-gestion-resiliente-concertee-leau).
Pour l'agriculture, l'objectif est de ne pas augmenter les prélèvements d'ici 2030, ce qui autorise
plus de surfaces irriguées au prix d'une baisse de la consommation moyenne par hectare irrigué
[ministère de l'Agriculture, réponse au Sénat, 2024](https://www.senat.fr/questions/base/2023/qSEQ230808238.html).

**Réutilisation des eaux usées traitées.** Le décret du 29 août 2023 a codifié la procédure
d'autorisation, et l'arrêté sur l'irrigation fixe la qualité requise selon l'usage et admet une eau
de qualité moindre derrière des « barrières » (goutte-à-goutte, par exemple)
[ministère de l'Agriculture, 2023](https://agriculture.gouv.fr/publication-de-larrete-reut-irrigation-relatif-aux-conditions-de-production-et-dutilisation-des).
Chaque projet demande une autorisation préfectorale, et l'eau est classée de A à D
[Eaufrance, 2025](https://www.services.eaufrance.fr/REUT).

**Qualité.** 73 % de la SAU est en zone vulnérable aux nitrates, soumise au programme d'actions
national (le septième, publié le 10 février 2023, en vigueur depuis le 1er janvier 2024) et aux
programmes régionaux [ministère de la Transition écologique](https://www.ecologie.gouv.fr/politiques-publiques/lutte-contre-pollutions-leau).
Autour des captages prioritaires, la démarche délimite l'aire d'alimentation puis met en œuvre un plan
d'action [Eaufrance Rhône-Méditerranée, 2024](https://www.rhone-mediterranee.eaufrance.fr/preservation-de-la-qualite-et-lutte-contre-les-pollutionscaptages-prioritaires/contexte-et-demarche),
d'abord volontaire, que le préfet peut rendre obligatoire (à confirmer dans le texte en vigueur).
L'arrêté du 4 mai 2017 encadre les effluents phytosanitaires (fonds de cuve, eaux de rinçage), et
impose de sécuriser le remplissage contre les retours et les débordements
[chambre d'agriculture de Nouvelle-Aquitaine, 2023](https://cmds.chambre-agriculture.fr/fileadmin/user_upload/Nouvelle-Aquitaine/208_Inst-cmds/Actualites/2023/Documents/Guide_technique_platforme_230412.pdf)
(extrait).

## 5. Leviers connus, par catégorie du plan d'action

Seize leviers. Les mesures transversales existantes à réutiliser sont signalées dans les leviers
concernés : compteur par usage (`ACT_AGR_001`), plan sécheresse gradué (`ACT_AGR_009`), démarche
collective (`ACT_AGR_010`). L'audit eau (`ACT_AGR_002`) a peu de prise ici : le diagnostic du matériel
(L4) le remplace pour l'irrigant. La récupération d'eau de pluie (`ACT_AGR_006`) n'est pas retenue (voir
section 2). Sauf mention, les leviers d'irrigation ne concernent que les irrigants.

### Sensibiliser et former (`sensibiliser_former`)

**L1. Suivre les bulletins irrigation de la chambre et se former au pilotage.** Les chambres publient
des bulletins hebdomadaires fondés sur des parcelles de référence équipées de sondes : 15 parcelles
en maïs ou soja dans le Gers, avec un découpage par bassin [chambre d'agriculture du Gers](https://gers.chambres-agriculture.fr/sinformer/produire-et-innover/irrigation),
six zones hydroclimatiques de fin mai à mi-septembre en Haute-Garonne, où un réseau de fermes
(programme Ogaya) est commun à une quinzaine de chambres du Sud-Ouest
[chambre d'agriculture de Haute-Garonne](https://hautegaronne.chambres-agriculture.fr/sinformer/environnement-et-agroecologie/gestion-de-leau-et-irrigation/gestion-de-lirrigation).
Gain non chiffré en propre (à confirmer). Tous les irrigants. Titre proposé : « Se former au pilotage
de l'irrigation et suivre les bulletins de sa chambre ».

### Suivre, comprendre et maîtriser ses consommations (`suivre_comprendre_maitriser`)

**L2. Relever le compteur et suivre ses volumes par îlot et par culture.** Le compteur est déjà
obligatoire (section 4) : le levier est de le relever pendant la campagne et de rapporter les volumes
aux hectares, pour se situer face au repère national de 1 902 m3 par hectare irrigué
[Insee, d'après SDES, 2024](https://www.insee.fr/fr/statistiques/7728881) et préparer la déclaration
à l'OUGC. Gain indirect. Déclinaison de `ACT_AGR_001`. Titre proposé : « Relever ses compteurs et suivre
ses volumes d'irrigation par îlot ».

**L3. Piloter l'irrigation avec un bilan hydrique et des sondes.** Le modèle Irré-LIS d'Arvalis,
disponible pour le maïs, les blés, la pomme de terre, le sorgho, le tabac et le soja, économise 20 à
60 mm d'eau sans baisse de rendement d'après les résultats obtenus depuis 2007
[Arvalis](https://www.arvalis.fr/outils-et-services/outils-et-fiches/modeles-bilan-hydrique),
soit environ 20 euros par hectare [Arvalis, 2022](https://www.arvalis.fr/espace-presse/communique-de-presse-irre-lisr-integre-de-nouvelles-cultures-pour-la-campagne-2022).
Arvalis recommande de coupler bilan hydrique et sondes avec la méthode Irrinov
[Arvalis, 2023](https://www.arvalis.fr/infos-techniques/mais-comment-adapter-lirrigation-en-cas-de-ressources-en-eau-limitees).
Un accompagnement global (conseil, matériel, sondes) aurait permis d'économiser 30 à 40 % des volumes
dans le Gard [chambre d'agriculture du Gard, 2023](https://gard.chambre-agriculture.fr/fileadmin/user_upload/Occitanie/066_Inst-Gard/Documents/11_Infolettres/Numero_5_octobre_2023/Fiche_synthese_pilotage_irrigation_2022.pdf)
(extrait, à confirmer). Tous les irrigants, levier probablement noté 3 en impact. Titre proposé :
« Piloter l'irrigation avec des sondes et un outil de bilan hydrique ».

### Améliorer l'efficacité hydrique de ses équipements (`ameliorer_efficacite_hydrique`)

**L4. Diagnostiquer et régler son matériel, et irriguer hors vent.** Un enrouleur est déréglé au-delà
de 15 % d'écart de vitesse en régulation mécanique et de 5 % en régulation électronique ; l'écartement
entre passages se réduit avec le vent (1,6 fois la portée sans vent, 1,4 en vent régulier) et
l'irrigation est déconseillée au-delà de 30 km/h [chambre d'agriculture de la Vienne](https://vienne.chambres-agriculture.fr/fileadmin/user_upload/Nouvelle-Aquitaine/Medias_Externes/Fiche_technique_n11_Maitriser_l_irrigation_par_enrouleur.pdf)
(extrait). La dérive pourrait atteindre 25 % par vent fort sur canon enrouleur
[Arvalis, Perspectives agricoles n° 415](https://www.perspectives-agricoles.com/file/galleryelement/pj/81/f3/34/85/415_992172363062006706.pdf)
(extrait, à confirmer). Irriguer la nuit anticipe en outre les plages d'interdiction des arrêtés
(section 3). La chambre du Gers diffuse une fiche d'autodiagnostic de l'enrouleur
[chambre d'agriculture du Gers](https://gers.chambres-agriculture.fr/sinformer/produire-et-innover/irrigation).
Irrigants en aspersion. Titre proposé : « Diagnostiquer et régler son matériel d'irrigation avant
chaque campagne ».

**L5. Équiper les enrouleurs d'une régulation électronique ou passer au pivot basse pression.** La
régulation électronique limite la variation de vitesse d'enroulement à moins de 5 % et rend la dose
plus homogène si la pression au canon est stable
[chambre d'agriculture du Lot, 2025](https://lot.chambres-agriculture.fr/fileadmin/user_upload/282_chambre_dagriculture_-_lot/Documents/Bulletins/Irrigation/Newsletter1.pub.pdf)
(extrait). Les asperseurs basse pression des pivots et rampes produisent des gouttes moins sensibles
au vent et à l'évaporation (synthèse de l'agence de l'eau Adour-Garonne, à confirmer, document non
lu). Gain en volume non chiffré (à confirmer). Irrigants en enrouleur. Titre proposé : « Moderniser
ses enrouleurs ou passer au pivot basse pression ».

**L6. Convertir une partie de la sole au goutte-à-goutte.** Sur maïs, le goutte-à-goutte enterré
suivi par la chambre des Landes a économisé plus de 25 % d'eau en moyenne sur cinq ans, avec des
baisses de rendement, et a reçu 2 000 m3/ha en 2018 contre 2 380 pour le pivot témoin
[chambre d'agriculture des Landes, 2018](https://cmds.chambre-agriculture.fr/fileadmin/user_upload/National/FAL_commun/publications/Nouvelle-Aquitaine/40_experimentations2018_essai_goutte_goutte.pdf)
(extrait). L'irrigation localisée échappe aux interdictions jusqu'à l'alerte renforcée
[ministère de la Transition écologique, 2024](https://www.ecologie.gouv.fr/politiques-publiques/origine-gestion-secheresse),
ce qui réduit la dépendance autant que le volume, et le Plan eau prévoit des moyens pour la soutenir
[ministère de l'Agriculture, réponse au Sénat, 2024](https://www.senat.fr/questions/base/2023/qSEQ230808238.html).
Coût par hectare non trouvé dans une source acceptée (à confirmer). Irrigants à forte valeur ajoutée
(semences, pomme de terre, tabac) ou en zone de restrictions fréquentes. Titre proposé : « Convertir
une partie de la sole irriguée au goutte-à-goutte ».

### Changer ses process ou pratiques (`changer_process_pratiques`)

**L7. Établir une stratégie d'irrigation adaptée au volume disponible.** Arvalis recommande d'estimer
d'abord le volume disponible par hectare, de donner un à deux tours d'eau de plus aux sols à faible
réserve utile, de concentrer l'eau du stade 15 feuilles à la limite d'avortement des grains, et de
fractionner (« six irrigations de 25 mm valent mieux que cinq irrigations de 30 mm »)
[Arvalis, 2023](https://www.arvalis.fr/infos-techniques/mais-comment-adapter-lirrigation-en-cas-de-ressources-en-eau-limitees).
Effet : rendement préservé à volume réduit, non chiffré. Irrigants sous volume attribué. Déclinaison
de `ACT_AGR_009`, fusionnable avec elle. Titre proposé : « Établir son plan de campagne d'irrigation
selon le volume disponible ».

**L8. Introduire dans l'assolement des cultures moins exigeantes en eau.** Pour une année sèche, le
sorgho demande 140 mm d'irrigation et le tournesol 100 mm, contre 240 mm pour le maïs ; le tournesol
s'est montré robuste en 2019 et 2020, deux années très sèches, et il faut 20 q/ha de tournesol contre
57 q/ha de maïs ou de sorgho pour dégager 500 euros de marge brute en sec
[Terres Inovia, 2022](https://www.terre-net.fr/terres-inovia/article/173461/evaluer-la-rentabilite-du-tournesol-pour-mieux-saisir-son-interet-et-sa-robustes).
Irrigants et exploitations en sec. Levier à fort effet, mais changement de modèle (débouchés,
matériel). Titre proposé : « Remplacer une partie du maïs par du sorgho, du tournesol ou des cultures
d'hiver ».

**L9. Esquiver la sécheresse par la précocité des variétés et la date de semis.** Choisir des
variétés plus précoces avance les stades sensibles, pour un enjeu estimé entre 0 et 30 mm d'eau selon
les années, au prix d'un renoncement aux rendements des variétés tardives en année pluvieuse
[Arvalis, 2012](https://www.arvalis.fr/infos-techniques/adapter-les-pratiques-culturales-au-changement-climatique).
L'expertise collective de l'INRA analyse ces leviers à l'échelle de la plante, de la culture et du
système de culture [INRAE, 2006](https://www.inrae.fr/en/news/drought-and-agriculture-collective-scientific-expert-report).
Irrigants et exploitations en sec. Titre proposé : « Choisir variétés et dates de semis pour esquiver
la sécheresse estivale ».

**L10. Gérer les couverts et la matière organique pour préserver la réserve utile.** Sur maïs, Arvalis
juge difficile de conclure à une économie d'eau d'irrigation grâce à un couvert, et recommande un
compromis entre biomasse du couvert et levée du maïs, avec une destruction trois à quatre semaines
avant le semis [Arvalis, 2022](https://www.arvalis.fr/infos-techniques/quel-est-leffet-des-couverts-sur-la-teneur-en-eau-des-sols) ;
une interculture détruite tardivement réduit la réserve du sol au départ
[Arvalis, 2023](https://www.arvalis.fr/infos-techniques/mais-comment-adapter-lirrigation-en-cas-de-ressources-en-eau-limitees).
L'effet de la matière organique et de l'agriculture de conservation sur la réserve utile n'a pas été
chiffré par une source acceptée (à confirmer). Toutes exploitations, d'abord celles en sec. Titre
proposé : « Gérer couverts et matière organique pour préserver la réserve en eau du sol ».

### Valoriser ou réutiliser les eaux non conventionnelles (`valoriser_reut_eaux_non_conventionnelles`)

**L11. Substituer les prélèvements d'été par un stockage rempli en hiver.** Les retenues sont la seule
ressource de 16 % des exploitations à accès individuel ou mixte
[INRAE, Sciences Eaux & Territoires, 2024](https://revue-set.fr/article/view/8246). Les agences de
l'eau ne financent que la part de substitution, dans un PTGE
[instruction du 7 mai 2019, AIDA](https://aida.ineris.fr/reglementation/instruction-gouvernement-070519-relative-projet-territoire-gestion-leau),
et la Cour des comptes demande de conditionner les aides à des réductions de prélèvements
[Cour des comptes, 2023](https://www.ccomptes.fr/fr/documents/65540). Effet : sécurisation et baisse
des prélèvements d'étiage, non chiffrée. Autorisation loi sur l'eau. Irrigants en zone de répartition.
Titre proposé : « Substituer ses prélèvements d'été par une retenue remplie en hiver ».

**L12. Irriguer avec des eaux usées traitées dans un projet collectif.** Cadre simplifié en 2023
[ministère de l'Agriculture, 2023](https://agriculture.gouv.fr/publication-de-larrete-reut-irrigation-relatif-aux-conditions-de-production-et-dutilisation-des),
autorisation préfectorale [Eaufrance, 2025](https://www.services.eaufrance.fr/REUT). Exemple cité par
la presse agricole : une ASA de Limagne irriguerait 750 hectares de maïs, blé, tournesol et semences
avec les eaux traitées de Clermont-Ferrand depuis 1996
[Terre-net](https://www.terre-net.fr/irrigation/article/149564/eaux-usees-de-clermont-ferrand-pour-irriguer-750-ha-de-cultures)
(source hors liste, à confirmer). Irrigants proches d'une station d'épuration. Titre proposé :
« Irriguer avec des eaux usées traitées dans un projet collectif ».

### Agir sur ses rejets et la qualité de l'eau (`agir_rejets_qualite`)

**L13. Aménager une aire de remplissage et de lavage du pulvérisateur.** L'aire équipée d'un procédé
de traitement limite les fuites vers les rivières et les nappes, et l'agence de l'eau
Rhône-Méditerranée-Corse en a aidé 185 entre 2009 et 2012
[agence de l'eau RMC, 2014](https://www.eaurmc.fr/upload/docs/application/pdf/2017-05/2014-synth-c-aire-de-lavage.pdf)
(extrait). Ce n'est pas une obligation, l'obligation étant de résultat
[chambre d'agriculture de Nouvelle-Aquitaine, 2023](https://cmds.chambre-agriculture.fr/fileadmin/user_upload/Nouvelle-Aquitaine/208_Inst-cmds/Actualites/2023/Documents/Guide_technique_platforme_230412.pdf)
(extrait). Toutes exploitations, irriguées ou non. Titre proposé : « Aménager une aire de remplissage
et de lavage du pulvérisateur ».

**L14. Limiter les fuites d'azote et de produits phytosanitaires vers les captages.** Respect du
programme d'actions nitrates en zone vulnérable (73 % de la SAU)
[ministère de la Transition écologique](https://www.ecologie.gouv.fr/politiques-publiques/lutte-contre-pollutions-leau),
couverture des sols en interculture (obligation exacte à confirmer dans le PAN7) et participation au
plan d'action de l'aire d'alimentation de captage quand l'exploitation y est. Effet non chiffré.
Titre proposé : « Réduire les fuites d'azote et de phytosanitaires sur les aires de captage ».

### Agir sur le grand cycle de l'eau (`agir_grand_cycle`)

**L15. S'engager dans la gestion collective de son bassin.** Adhérer aux règles de l'OUGC, participer
au PTGE, dont le volet sobriété est obligatoire
[instruction du 7 mai 2019, AIDA](https://aida.ineris.fr/reglementation/instruction-gouvernement-070519-relative-projet-territoire-gestion-leau).
Sur les réseaux réalimentés du Gers, la coordination des lâchers d'eau ferait gagner jusqu'à un tour
d'irrigation [chambre d'agriculture du Gers](https://gers.chambres-agriculture.fr/sinformer/produire-et-innover/irrigation).
Déclinaison de `ACT_AGR_010`. Titre proposé : « Participer à la gestion collective de l'eau de son
bassin (OUGC, PTGE) ».

**L16. Planter des haies brise-vent.** Les haies réduisent l'érosion et ont un effet brise-vent et
anti-sécheresse en limitant l'évaporation ; le pacte national vise un gain net de 50 000 km d'ici 2030
[ministère de la Transition écologique, 2023](https://www.ecologie.gouv.fr/presse/presentation-sarah-el-hairy-marc-fesneau-du-pacte-faveur-haie-dote-dun-budget-110-meur-2024).
Effet sur l'infiltration non chiffré (à confirmer). Toutes exploitations. Titre proposé : « Planter des
haies brise-vent pour limiter l'évaporation et l'érosion ».

## 6. Codes limites au sein du périmètre

**01.11Z, céréales et oléoprotéagineux en sec.** Cœur du secteur, mais la majorité des exploitations
n'irriguent pas (section 1) : c'est le persona « sans l'usage principal », qui ne doit recevoir que
L8, L9, L10, L13, L14 et L16.

**01.12Z, riz.** L'eau sert à submerger et à dessaler, pas à couvrir un besoin de la plante : sondes
(L3), matériel d'aspersion (L4 à L6) et esquive (L9) n'ont pas de sens. Pompage collectif dans le
Rhône, dépendance totale au fleuve.

**01.14Z, canne à sucre.** Quasi exclusivement outre-mer, irriguée par de grands réseaux publics comme
celui du littoral ouest de La Réunion (section 1). L'OUGC et les zones de répartition, notions de
métropole, ne s'y appliqueraient pas telles quelles (à confirmer).

**01.15Z, tabac.** Culture irriguée et séchée. Le plan de filière prévoyait de développer le
goutte-à-goutte pour l'irrigation, pour une filière d'environ 700 exploitations en 2017
[FranceAgriMer, 2017](https://www-rec.franceagrimer.fr/content/download/30042/document/Plan_strategique_filiere_Tabac.pdf)
(extrait) : L6 y est plus pertinent qu'ailleurs.

**01.16Z, plantes à fibres.** Le lin textile ne nécessite aucune irrigation
[ministère de la Culture](https://www.culture.gouv.fr/Media/Les-savoir-faire-du-lin-textile) (extrait) :
profil en sec, comme le chanvre (à confirmer par Arvalis).

**01.19Z, fourrages et fleurs coupées.** Les fourrages (maïs fourrage, 5 % des surfaces irriguées
[INRAE, Sciences Eaux & Territoires, 2024](https://revue-set.fr/article/view/8246), luzerne) suivent le
profil. Les fleurs coupées s'en écartent : serres, irrigation localisée, recyclage des solutions
nutritives, aucun des leviers L7 à L11 ne leur convient. Limite connue du routage par code NAF.

## 7. Sources

| Organisme | Titre | Année | URL |
|---|---|---|---|
| INRAE (A. Scotti, S. Loubier), Sciences Eaux & Territoires n° 45 | Vers une augmentation structurelle de l'irrigation ? Enseignements du recensement agricole de 2020 | 2024 | https://revue-set.fr/article/view/8246 |
| SDES | L'irrigation des surfaces agricoles : évolution entre 2010 et 2020 | 2024 | https://www.statistiques.developpement-durable.gouv.fr/lirrigation-des-surfaces-agricoles-evolution-entre-2010-et-2020 |
| Insee (données SDES, OFB-BNPE, agences de l'eau, Agreste) | Agriculture et prélèvements d'eau douce, Insee Références L'agriculture | 2024 | https://www.insee.fr/fr/statistiques/7728881 |
| SDES | Les prélèvements d'eau douce par usage en France en 2022 | 2025 | https://www.statistiques.developpement-durable.gouv.fr/les-prelevements-deau-douce-par-usage-en-france-en-2022 |
| SDES | L'eau en France : ressource et utilisation (bilan environnemental 2024) | 2025 | https://www.statistiques.developpement-durable.gouv.fr/leau-en-france-ressource-et-utilisation-extrait-du-bilan-environnemental-2024 |
| Arvalis (S. Gendre), Perspectives agricoles n° 520 | Quels besoins en eau pour les cultures ? | 2024 | https://www.perspectives-agricoles.com/conduite-de-cultures/modelisation-des-besoins-en-eau-combien-consomment-les-cultures |
| Terres Inovia (article partenaire sur Terre-net) | Évaluer la rentabilité du tournesol pour mieux saisir son intérêt et sa robustesse | 2020, maj 2022 | https://www.terre-net.fr/terres-inovia/article/173461/evaluer-la-rentabilite-du-tournesol-pour-mieux-saisir-son-interet-et-sa-robustes |
| Arvalis (S. Gendre, J. Boyer) | Maïs : comment adapter l'irrigation en cas de ressources en eau limitées ? | 2023 | https://www.arvalis.fr/infos-techniques/mais-comment-adapter-lirrigation-en-cas-de-ressources-en-eau-limitees |
| Arvalis | Modèles bilan hydrique Irré-LIS | consulté 2026 | https://www.arvalis.fr/outils-et-services/outils-et-fiches/modeles-bilan-hydrique |
| Arvalis | Communiqué : Irré-LIS intègre de nouvelles cultures pour la campagne 2022 | 2022 | https://www.arvalis.fr/espace-presse/communique-de-presse-irre-lisr-integre-de-nouvelles-cultures-pour-la-campagne-2022 |
| Arvalis | L'itinéraire technique du maïs évolue avec le changement climatique | 2012 | https://www.arvalis.fr/infos-techniques/adapter-les-pratiques-culturales-au-changement-climatique |
| Arvalis | Quel est l'effet des couverts avant maïs sur la teneur en eau du sol ? | 2022 | https://www.arvalis.fr/infos-techniques/quel-est-leffet-des-couverts-sur-la-teneur-en-eau-des-sols |
| Arvalis | Bilan de campagne maïs grain : comment expliquer les rendements 2025 | 2025 | https://www.arvalis.fr/infos-techniques/mais-grain-une-campagne-2025-entre-secheresse-et-canicules |
| Arvalis, Perspectives agricoles n° 415 (extrait) | Irrigation : répondre aux nouveaux défis | vers 2014, à confirmer | https://www.perspectives-agricoles.com/file/galleryelement/pj/81/f3/34/85/415_992172363062006706.pdf |
| INRAE | Sécheresse et agriculture, expertise scientifique collective | 2006 | https://www.inrae.fr/en/news/drought-and-agriculture-collective-scientific-expert-report |
| DRAAF Centre-Val de Loire, Agreste (extrait) | Conjoncture bimestrielle n° 3, février 2023 | 2023 | https://draaf.centre-val-de-loire.agriculture.gouv.fr/IMG/pdf/no3_bimestrielle_fevrier_2023.pdf |
| Ministère de la Transition écologique | Origine et gestion de la sécheresse | maj 2024 | https://www.ecologie.gouv.fr/politiques-publiques/origine-gestion-secheresse |
| Ministère de la Transition écologique | Plan d'action pour une gestion résiliente et concertée de l'eau | 2023, maj 2026 | https://www.ecologie.gouv.fr/politiques-publiques/plan-daction-gestion-resiliente-concertee-leau |
| Ministère de l'Agriculture | Réponse à la question écrite n° 08238 (Sénat) sur le Plan eau | 2024 | https://www.senat.fr/questions/base/2023/qSEQ230808238.html |
| Cour des comptes | La gestion quantitative de l'eau en période de changement climatique, synthèse | 2023 | https://www.ccomptes.fr/fr/documents/65540 |
| Ministère de l'Environnement, AIDA (Ineris) | Note du 3 mai 2016 sur la fin des autorisations temporaires en ZRE (abrogée le 14 décembre 2023) | 2016 | https://aida.ineris.fr/reglementation/note-030516-fin-autorisations-temporaires-prelevements-eau-lirrigation-agricole-zone |
| Gouvernement, AIDA (Ineris) | Instruction du 7 mai 2019 relative au projet de territoire pour la gestion de l'eau | 2019 | https://aida.ineris.fr/reglementation/instruction-gouvernement-070519-relative-projet-territoire-gestion-leau |
| AIDA (Ineris) | Nomenclature IOTA, rubriques 1.1.2.0 et 1.3.1.0 | en vigueur | https://aida.ineris.fr/node/39225 |
| DREAL Poitou-Charentes, data.gouv | Zones de répartition des eaux souterraines | 2015 | https://www.data.gouv.fr/datasets/zones-de-repartition-des-eaux-souterraines-surface |
| AIDA (Ineris) | Arrêté du 18 août 2025 portant agrément de Rives & Eaux du Sud-Ouest | 2025 | https://aida.ineris.fr/reglementation/arrete-180825-portant-agrement-direction-lingenierie-societe-rives-eaux-sud-ouest |
| Ministère de l'Agriculture, Telepac (extrait) | Conditionnalité 2023, fiche environnement 1, directive cadre sur l'eau | 2023 | https://www1.telepac.agriculture.gouv.fr/telepac/pdf/conditionnalite/2023/technique/Conditionnalite-2023_fiche-technique_environnement-1_directive_cadre_eau.pdf |
| Eaufrance, services publics d'eau | La réutilisation des eaux usées traitées (REUT) | maj 2025 | https://www.services.eaufrance.fr/REUT |
| Ministère de l'Agriculture | Publication de l'arrêté « REUT irrigation » | 2023 | https://agriculture.gouv.fr/publication-de-larrete-reut-irrigation-relatif-aux-conditions-de-production-et-dutilisation-des |
| Ministère de la Transition écologique | Lutte contre les pollutions de l'eau | 2020 | https://www.ecologie.gouv.fr/politiques-publiques/lutte-contre-pollutions-leau |
| Eaufrance, bassin Rhône-Méditerranée | Captages prioritaires : contexte et démarche | 2024 | https://www.rhone-mediterranee.eaufrance.fr/preservation-de-la-qualite-et-lutte-contre-les-pollutionscaptages-prioritaires/contexte-et-demarche |
| Ministère de la Transition écologique | Présentation du pacte en faveur de la haie | 2023 | https://www.ecologie.gouv.fr/presse/presentation-sarah-el-hairy-marc-fesneau-du-pacte-faveur-haie-dote-dun-budget-110-meur-2024 |
| Chambre d'agriculture du Gers | Irrigation (bulletins, OUGC, autodiagnostic) | consulté 2026 | https://gers.chambres-agriculture.fr/sinformer/produire-et-innover/irrigation |
| Chambre d'agriculture de Haute-Garonne | Gestion de l'irrigation | consulté 2026 | https://hautegaronne.chambres-agriculture.fr/sinformer/environnement-et-agroecologie/gestion-de-leau-et-irrigation/gestion-de-lirrigation |
| Chambre d'agriculture du Gard (extrait) | Fiche synthèse pilotage de l'irrigation 2022 | 2023 | https://gard.chambre-agriculture.fr/fileadmin/user_upload/Occitanie/066_Inst-Gard/Documents/11_Infolettres/Numero_5_octobre_2023/Fiche_synthese_pilotage_irrigation_2022.pdf |
| Chambre d'agriculture de la Vienne (extrait) | Fiche technique n° 11 : maîtriser l'irrigation par enrouleur | sans date | https://vienne.chambres-agriculture.fr/fileadmin/user_upload/Nouvelle-Aquitaine/Medias_Externes/Fiche_technique_n11_Maitriser_l_irrigation_par_enrouleur.pdf |
| Chambre d'agriculture du Lot (extrait) | Lettre irrigation n° 1 : choisir le bon diamètre de buse | 2025 | https://lot.chambres-agriculture.fr/fileadmin/user_upload/282_chambre_dagriculture_-_lot/Documents/Bulletins/Irrigation/Newsletter1.pub.pdf |
| Chambre d'agriculture des Landes, publié par les chambres de Nouvelle-Aquitaine (extrait) | Expérimentations 2018 : essai goutte-à-goutte enterré sur maïs | 2018 | https://cmds.chambre-agriculture.fr/fileadmin/user_upload/National/FAL_commun/publications/Nouvelle-Aquitaine/40_experimentations2018_essai_goutte_goutte.pdf |
| Chambres d'agriculture de Nouvelle-Aquitaine (extrait) | Guide technique : plateforme de remplissage et de lavage | 2023 | https://cmds.chambre-agriculture.fr/fileadmin/user_upload/Nouvelle-Aquitaine/208_Inst-cmds/Actualites/2023/Documents/Guide_technique_platforme_230412.pdf |
| Agence de l'eau Rhône-Méditerranée-Corse (extrait) | Synthèse des coûts des aires de lavage aidées | 2014 | https://www.eaurmc.fr/upload/docs/application/pdf/2017-05/2014-synth-c-aire-de-lavage.pdf |
| Parc naturel régional de Camargue (extrait) | Le riz en Camargue | sans date | https://www.parc-camargue.fr/parc-camargue/201100114/0001/Le_riz_en_Camargue.pdf |
| Assemblée nationale, réponse ministérielle (extrait) | Question écrite n° 43401 sur la riziculture camarguaise | 15e législature | https://www.assemblee-nationale.fr/dyn/15/questions/QANR5L15QE43401.pdf |
| GREC-SUD | Des scénarios pour anticiper l'adaptation des systèmes rizicoles camarguais | vers 2018, à confirmer | https://www.grec-sud.fr/article-cahier/les-articles-du-cahier-agriculture-et-foret/lagriculture-regionale-face-au-defi-climatique/des-scenarios-pour-anticiper-ladaptation-des-systemes-rizicoles-camarguais/ |
| Sénat | Rapport d'information n° 799, Foncier agricole outre-mer | 2023 | https://www.senat.fr/rap/r22-799/r22-7995.html |
| Territoire de la Côte Ouest (TCO) (extrait) | Projet d'irrigation du littoral ouest | 2014 | https://www.tco.re/wp-content/uploads/2014/06/Projet-dIrrigation-du-Litorral-Ouest.pdf |
| FranceAgriMer (extrait) | Plan stratégique de la filière tabac | 2017 | https://www-rec.franceagrimer.fr/content/download/30042/document/Plan_strategique_filiere_Tabac.pdf |
| Ministère de la Culture (extrait) | Fiche d'inventaire du patrimoine culturel immatériel : les savoir-faire du lin textile | sans date | https://www.culture.gouv.fr/Media/Les-savoir-faire-du-lin-textile |
| Terre-net (presse, hors liste des sources acceptées) | Les eaux usées de Clermont-Ferrand recyclées pour irriguer 750 ha | sans date | https://www.terre-net.fr/irrigation/article/149564/eaux-usees-de-clermont-ferrand-pour-irriguer-750-ha-de-cultures |

Note sur les liens. Les documents marqués « (extrait) » sont des PDF que l'outil de lecture n'a pas
pu ouvrir : leurs chiffres viennent d'extraits restitués par la recherche et doivent être relus dans
le document avant de servir dans une fiche. L'article de Terres Inovia est publié comme contenu
partenaire sur Terre-net, signé par l'institut. L'Insee reprend les traitements du SDES sur la BNPE et
les recensements agricoles. La note ministérielle de 2016 sur les OUGC est abrogée : l'instruction du
14 décembre 2023 qui la remplace n'a pas été lue.

### Ce qui n'a pas pu être sourcé

Restent au conditionnel ou absents : la part d'exploitations irrigantes parmi les exploitations
spécialisées en grandes cultures (table Agreste RA2020_0053 non lue) ; des besoins d'irrigation
mesurés par culture en m3/ha (seules la moyenne nationale de 1 902 m3/ha et les doses simulées de
Terres Inovia sont sourcées) ; le volume d'eau des bouillies et du lavage du matériel ; le gain en
volume de la régulation électronique et de la basse pression ; le coût à l'hectare du goutte-à-goutte
enterré (seul un chiffre de fabricant a été trouvé, écarté) ; l'effet chiffré de la matière organique
et de l'agriculture de conservation sur la réserve utile ; l'effet des haies sur l'infiltration ; les
obligations exactes de couverture des sols du septième programme d'actions nitrates ; le nombre
national de captages prioritaires ; le volume de réutilisation pour l'irrigation et le cas de Limagne
(presse seulement) ; les besoins en eau de la luzerne, du chanvre et de la canne en m3/ha ; le régime
de gestion collective outre-mer. Les volumes de la BNPE publiés en infographie par Eaufrance (5,7
milliards de m3 pour l'irrigation en 2022, d'après un extrait) ne concordent pas avec ceux du SDES
(3,5 milliards de m3 en métropole) : la différence de périmètre n'a pas été élucidée, la note retient
le SDES.
