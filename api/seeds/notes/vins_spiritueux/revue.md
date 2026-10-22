# Revue du référentiel : Vins et spiritueux

Document assemblé automatiquement depuis le staging. Tout est en statut brouillon tant que la promotion n'a pas eu lieu.

## Périmètre

- Secteur : `vins_spiritueux` (Vins et spiritueux)
- Codes NAF (5) : 11.01Z, 11.02A, 11.02B, 11.03Z, 11.04Z

## Profil eau du secteur

# Profil eau du secteur : vins et spiritueux

Note de profil, étape 2 du skill `nouveau-secteur`. Statut : brouillon, à valider par un consultant.
Date de rédaction : 2026-09-28.

| Champ | Valeur |
|---|---|
| `sector_id` | `vins_spiritueux` |
| Libellé | Vins et spiritueux |
| Préfixe des mesures | `VIN` (`ACT_VIN_001` et suivants) |
| Codes NAF | 11.01Z, 11.02A, 11.02B, 11.03Z, 11.04Z (4 550 établissements, dont 1 522 employeurs) |

Cette note prolonge `00_perimetre.md` et ne la contredit pas. Elle vise la cave coopérative, la
maison de négoce élaboratrice, la maison de champagne, la distillerie et la cidrerie dont la
transformation est l'activité principale. Le vigneron qui vinifie sa propre récolte reste le plus
souvent en 01.21Z et relève du questionnaire `agriculture`.

Avertissement de méthode : la filière vin dispose de ratios publics de consommation, issus de
l'IFV, des chambres d'agriculture et des interprofessions. Il n'en existe presque pas pour la
distillation, le cidre et les liqueurs. Ce que les sources ne donnent pas est écrit au conditionnel
avec la mention « à confirmer », et la fin de la note liste ce qui reste non sourcé.

## 1. Usages de l'eau, du plus gros au plus petit

**Ordre de grandeur global.** D'après des relevés de l'IFV et des chambres d'agriculture du
Languedoc et de Bourgogne sur une centaine de sites, une cave consomme en moyenne de l'ordre de
2 litres d'eau par litre de vin produit hors embouteillage, avec des extrêmes de 0,5 à plus de
10 litres [IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf).
L'effet de taille domine : de 0,5 à 1 litre par litre pour les caves élaborant plus de 100 000 hl,
de 2 à 4 litres pour celles qui vinifient moins de 4 000 hl (même source). Une enquête sur
46 caves de Bourgogne donne 6,4 litres d'eau par litre de vin rouge et 2,3 litres par litre de vin
blanc [BIVB, Chambre régionale d'agriculture de Bourgogne et ADEME, étude 2011-2012](https://extranet.bivb.com/technique-et-innovation/developpement-durable/energie-et-dechets/consommation-d-eau-et-d-energie-dans-les-chais,3121,13957.html).
Les caves coopératives du Vaucluse retiennent une fourchette de 2 à 4 litres par litre en moyenne,
de 1 litre pour les installations optimisées à 10 litres pour les moins équipées
[Fédération des caves coopératives du Vaucluse, projet Vin'Eau, 2024-2026](https://projetvineau.fr/economies-deau-dans-les-caves-vinicoles-enjeux-et-solutions/).

Aucun ratio public par hectolitre d'alcool pur n'a été trouvé pour la distillation (à confirmer,
voir la fin de la note).

**1. L'hygiène des équipements et des locaux.** C'est de loin le premier poste : de 70 à 90 % de
l'eau d'une cave [IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf).
Le prélavage à fort débit et en eau perdue est l'opération la plus gourmande ; la pousse à l'eau,
qui sert à récupérer le vin dans les canalisations et les filtres, peut représenter à elle seule
plus de 30 % des volumes dans certaines caves ; s'y ajoutent les rinçages après détergent et la
stérilisation à l'eau chaude ou à la vapeur des filtres et des tireuses (même source). Sont
concernés pressoirs, conquets, cuves, barriques, tuyaux, pompes, filtres, sols de chai.

**2. Le conditionnement.** L'embouteillage consomme de l'ordre de 0,6 à 0,7 litre d'eau par col,
avec de fortes disparités entre sites
[IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf).
C'est le poste principal des établissements sans vendange (voir section 6).

**3. Le refroidissement.** Trois usages distincts :
- le froid de vinification (maîtrise des températures de fermentation, stabilisation), qui passe
  par des groupes froids, des tours aéroréfrigérantes ou, là où c'est autorisé, le ruissellement
  d'eau sur les cuves (même source) ;
- le refroidissement des pompes à vide à anneau liquide des filtres rotatifs, poste qui peut être
  très consommateur s'il n'est pas recyclé (même source) ;
- le refroidissement des serpentins d'alambic, qui condense le distillat. Dans la distillation
  charentaise, l'eau chauffée dans le refroidisseur est de plus en plus récupérée pour préchauffer
  le vin par un échangeur [INAO, Commission scientifique et technique, 2021](https://extranet.inao.gouv.fr/fichier/COMNAT-CST-20210118-Projet-Rapport-distillation-Cognac.pdf).
  Le volume d'eau de refroidissement par hectolitre distillé n'est pas publié (à confirmer).

**4. Les eaux de process au contact du produit.** Encollage à l'eau de certains filtres,
affranchissement des plaques et cartouches, rinçages des filtres tangentiels, eau de chasse des
centrifugeuses [IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf).
En cidrerie s'ajoute le lavage des pommes, que le guide de bonnes pratiques d'hygiène identifie
comme une étape à part entière [IFPC, guide de bonnes pratiques d'hygiène du cidre](https://www.ifpc.eu/wp-content/uploads/2024/12/GBPH-cidre_modifie-180228.pdf) ;
son volume n'est pas publié (à confirmer).

**5. Les usages sanitaires** du personnel, et en saison ceux des vendangeurs et saisonniers,
derniers en volume.

**La saisonnalité, trait structurant du secteur.** Les effluents d'une cave représentent de 30 à
250 litres par hectolitre de vin élaboré, dont 40 à 60 % pendant les vendanges
[ITV France (IFV), 2007](https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/01-Activitevinicole/bibliographie/01.03.ITVfrance2007_GestionGlobaledesEffluentsVinicoles.pdf).
La consommation d'eau suit le même profil, puisque l'hygiène en est le premier poste. La
distillation prend le relais en hiver : pour le cognac, la campagne est limitée au 31 mars et un
cycle de chauffe dure environ 24 heures [INAO, 2021](https://extranet.inao.gouv.fr/fichier/COMNAT-CST-20210118-Projet-Rapport-distillation-Cognac.pdf) ;
dans une distillerie charentaise étudiée par la chambre d'agriculture, les vinasses sont produites
à un rythme régulier sur cinq mois, de novembre à mars, et les effluents de chai culminent en
octobre [Chambre d'agriculture de la Charente, 2018](https://www.charente.gouv.fr/content/download/33178/206116/file/DOSSIER%20PLAN%20EPANDAGE.pdf).
En cidrerie, le brassage des pommes s'étale de l'automne jusqu'à décembre ou janvier pour les
variétés tardives (document de 1977 du Comité des fruits à cidre repris par
[IFPC, 2023](https://www.ifpc.eu/wp-content/uploads/2024/12/Pres-Hygiene-en-cidrerie-diagnostics-essais-et-pistes-damelioration-2023.pdf)).
Conséquence pour tout le reste de la note : le stockage et le traitement des effluents se
dimensionnent sur quelques semaines de pointe, pas sur la moyenne annuelle.

## 2. Sources d'approvisionnement

Le réseau public d'eau potable et le forage privé sont les deux sources déclarées d'une distillerie,
comme le montre le formulaire de déclaration ICPE de la préfecture de la Charente-Maritime, qui ne
prévoit que ces deux cases en plus d'une case « autre »
[Préfecture de la Charente-Maritime, 2013](https://www.charente-maritime.gouv.fr/content/download/5653/31219/file/d%C3%A9claration%20distillerie%202250-3.pdf).
L'IFV rappelle que les forages de cave doivent être équipés de compteurs
[IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf).
La part respective du réseau et du forage selon la taille de l'établissement n'est pas publiée
(à confirmer ; une cave coopérative ou une distillerie rurale serait plus souvent sur forage, une
maison urbaine sur réseau).

Un forage devient redevable à l'agence de l'eau au-delà de 10 000 m3 prélevés par an, ou de
7 000 m3 en zone de répartition des eaux, et tous les usagers non domestiques du réseau paient
depuis 2025 la redevance sur la consommation d'eau potable sans plafonnement
[Les agences de l'eau, 2026](https://www.lesagencesdeleau.fr/actualites/tout-comprendre-de-la-reforme-des-redevances).

L'eau de pluie des toitures de chai est encouragée par la profession champenoise pour les centres
de pressurage [La Champagne Viticole et Comité Champagne, 2024](https://lachampagneviticole.fr/en/gestion-de-leau-les-bonnes-pratiques-pour-les-centres-de-pressurage/),
et l'IFV y voit un appoint possible pour les usages viticoles couplés au recyclage
[IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf).
Son usage dans un bâtiment relève d'une déclaration au préfet depuis 2024, pour des usages qui
n'incluent pas le contact avec le produit
[Services de l'État, bassin Adour-Garonne, 2024](https://bonnespratiques-eau.fr/2024/07/18/textes-du-12-juillet-2024-relatifs-utilisations-deaux-impropres-a-la-consommation-humaine/).

## 3. Dépendances critiques

**La vendange ne se reporte pas.** Le raisin (et la pomme mûre) arrive au rythme de la récolte ;
pressoirs, conquets et cuves doivent être lavés entre les lots. Une coupure ou une restriction
pendant les vendanges se traduirait donc d'abord par un arbitrage entre hygiène et cadence, puis
par un risque qualité sur les vins (flores d'altération, que l'IFV cite comme raison du souci
croissant de nettoyabilité [IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf)).
La vendange tombe en fin d'été, période où les arrêtés de restriction sont fréquemment en vigueur
(à confirmer département par département, par exemple avec l'historique des restrictions de Noé).

**Sans eau de refroidissement, pas de distillation.** Le serpentin ne condense plus. Pour le cognac,
la date butoir du 31 mars [INAO, 2021](https://extranet.inao.gouv.fr/fichier/COMNAT-CST-20210118-Projet-Rapport-distillation-Cognac.pdf)
interdit de rattraper des jours perdus au-delà. La campagne hivernale se situe hors de la période
habituelle d'étiage, ce qui réduit le risque de restriction sans l'annuler (à confirmer).

**Le froid de vinification.** Une tour aéroréfrigérante privée d'appoint perd sa capacité, au
moment même où les vendanges précoces et chaudes rendent le contrôle des fermentations plus
exigeant (à confirmer par une source de filière sur l'évolution des besoins en froid).

**Les effluents deviennent une contrainte d'exploitation.** Si le stockage est plein ou si
l'épandage est impossible (sol détrempé, calendrier de la directive nitrates), l'activité
génératrice doit ralentir. Le dossier d'épandage d'une distillerie charentaise déconseille par
exemple l'épandage des vinasses de novembre à janvier sur vigne
[Chambre d'agriculture de la Charente, 2018](https://www.charente.gouv.fr/content/download/33178/206116/file/DOSSIER%20PLAN%20EPANDAGE.pdf).

**Ce que change un arrêté sécheresse.** Les ICPE soumises à autorisation ou à enregistrement dont
le prélèvement annuel dépasse 10 000 m3 doivent réduire leur prélèvement de 5 % en alerte, 10 % en
alerte renforcée et 25 % en crise, après une sensibilisation du personnel au niveau de vigilance
[arrêté du 30 juin 2023, AIDA](https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement).
Avec les ratios de l'IFV, 10 000 m3 correspondent à une production de l'ordre de 100 000 à
200 000 hl pour une grande cave à 0,5 à 1 litre par litre (calcul de la présente note) : seules
les plus grosses caves coopératives, maisons et distilleries sont concernées. Le même arrêté exclut
la transformation en flux poussé de matières premières périssables à l'état frais (même source) ;
savoir si le pressurage et la vinification de la vendange fraîche y entrent reste à faire confirmer
par l'inspection (à confirmer). Les autres établissements relèvent des arrêtés préfectoraux, dont
les restrictions sur le lavage des surfaces et des véhicules les touchent directement (à confirmer
par département).

## 4. Risques et contraintes réglementaires

**Caves : rubrique ICPE 2251.** La préparation et le conditionnement de vins relèvent de la
déclaration au-delà de 500 hl par an et de l'enregistrement au-delà de 20 000 hl par an, le vin en
vieillissement non conditionnable dans l'année n'étant pas compté
[AIDA, rubrique 2251](https://aida.ineris.fr/consultation_document/10571). L'ancien régime
d'autorisation au-delà de 20 000 hl, encore cité par des fiches techniques plus anciennes, a
disparu avec l'abrogation de son arrêté au 14 octobre 2023 (même source). L'arrêté
d'enregistrement impose un suivi de la consommation par activité (vinification, conditionnement),
un relevé du totalisateur hebdomadaire au-delà de 100 m3 par jour, et interdit la réfrigération en
circuit ouvert ; en rejet au milieu, la DCO est limitée à 300 mg/l jusqu'à 50 kg/j et 125 mg/l
au-delà ; un cahier d'épandage est obligatoire en cas d'épandage
[arrêté du 26 novembre 2012 modifié, AIDA](https://aida.ineris.fr/reglementation/arrete-261112-relatif-prescriptions-generales-applicables-installations-relevant-0).
En Champagne, la profession rappelle que les centres de pressurage au-delà de 500 hl relèvent de
ce régime et que la pollution des effluents doit être mesurée tous les trois ans
[La Champagne Viticole et Comité Champagne, 2024](https://lachampagneviticole.fr/en/gestion-de-leau-les-bonnes-pratiques-pour-les-centres-de-pressurage/).

**Distilleries : rubrique ICPE 2250.** Déclaration de 0,5 à 30 hl d'alcool pur par jour,
enregistrement de 30 à 1 300 hl par jour, autorisation au-delà ; pour la distillation discontinue,
le seuil de 30 hl par jour est remplacé par 50 hl de capacité totale de charge des alambics
[AIDA, rubrique 2250](https://aida.ineris.fr/consultation_document/10569). L'alambic charentais
de 25 hl est le modèle le plus répandu [INAO, 2021](https://extranet.inao.gouv.fr/fichier/COMNAT-CST-20210118-Projet-Rapport-distillation-Cognac.pdf) :
au-delà de deux alambics de ce type, une distillerie charentaise passe donc en enregistrement. En
déclaration, le refroidissement en circuit ouvert est interdit au-delà de 10 m3 par jour (30 m3 pour
une installation fonctionnant moins de six mois par an), les rejets sont limités à 30 °C, et le
stockage des vinasses destinées à l'épandage doit couvrir 50 % du vin distillé dans la campagne
[arrêté du 25 mai 2012, AIDA](https://aida.ineris.fr/reglementation/arrete-250512-relatif-prescriptions-generales-applicables-installations-classees).
La même règle de 50 % s'applique en enregistrement (article 58 de l'arrêté du 14 janvier 2011,
cité par [Chambre d'agriculture de la Charente, 2018](https://www.charente.gouv.fr/content/download/33178/206116/file/DOSSIER%20PLAN%20EPANDAGE.pdf)).

**Effluents vinicoles : une charge très variable et saisonnière.** DCO de 3 000 à 20 000 mg
d'O2/l, pH de 4,1 à 6 mais de 10 à 13 en période de détartrage, MES de 1 000 à 2 000 mg/l
[ITV France (IFV), 2007](https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/01-Activitevinicole/bibliographie/01.03.ITVfrance2007_GestionGlobaledesEffluentsVinicoles.pdf).
Rejetés sans adaptation dans une station communale, ils en déséquilibrent le fonctionnement pendant
plusieurs semaines, voire plusieurs mois (même source). Le retard de traitement a longtemps été
important : en 2013, seuls 27 % des 6 000 chais girondins disposaient d'un système de traitement
[Agence de l'eau Adour-Garonne](http://www.eau-adour-garonne.fr/fr/eau-et-activites-economiques/industrie/les-rejets-industriels/zoom-sur-les-rejets-de-quelques-secteurs-industriels.html),
et dans les Charentes 63 % des volumes d'effluents étaient traités, pour un objectif de 80 % en
2018 [Préfecture de la Charente, 2015](https://www.charente.gouv.fr/Actualites/Un-accord-pour-accelerer-la-gestion-des-effluents-viti-vinicoles).

**Vinasses : un volume presque égal à celui du vin distillé.** Dans le procédé charentais, un
hectolitre de vin distillé donne 0,9 hl de vinasses, soit 0,6 hl de vinasses de vin à la première
chauffe et 0,3 hl de « petites eaux » à la bonne chauffe ; ces vinasses sont très acides (pH de
l'ordre de 3,4) et peu chargées en matière sèche (1 %)
[Chambre d'agriculture de la Charente, 2018](https://www.charente.gouv.fr/content/download/33178/206116/file/DOSSIER%20PLAN%20EPANDAGE.pdf).
L'accord Lamorlette de 1981 entre les bouilleurs de cru et l'agence de bassin Adour-Garonne limite
l'épandage à 600 hl de vinasses par hectare et par an (même source). La filière cognac s'appuie
aussi sur un traitement collectif : Revico traite 6 millions d'hectolitres de vinasses par an, soit
55 % des vinasses des deux Charentes, en restituant l'eau épurée à la Charente
[Agence de l'eau Adour-Garonne](https://eau-grandsudouest.fr/revico-voie-economie-circulaire-pour-eau)
(page inaccessible au moment de la rédaction pour une erreur de certificat, chiffres relevés dans
son extrait, à revérifier).

**Redevances.** Avant 2025, la redevance pollution d'une cave était le plus souvent calculée au
forfait, entre 0,4 et 1,2 € par hectolitre produit et par an
[IFV Occitanie](https://www.vignevin-occitanie.com/fiches-pratiques/la-gestion-des-effluents-vinicoles/).
Depuis la réforme de 2025, la redevance pour pollution d'origine non domestique ne vise plus que
les rejets directs au milieu naturel ; les flux envoyés à une station collective ne sont plus
comptés, et à défaut de mesure agréée la pollution théorique de l'activité est diminuée de la
pollution éliminée par le dispositif d'épuration
[Agence de l'eau Seine-Normandie, 2025](https://www.eau-seine-normandie.fr/les-redevances/redevance-pollution-de-l-eau-d-origine-non-domestique).
Le raccordement reste encadré par l'autorisation de déversement de la collectivité (à confirmer
sur les conditions propres aux effluents vinicoles).

**Tours aéroréfrigérantes.** Les installations de refroidissement évaporatif relèvent de la
rubrique 2921 et de ses obligations de prévention des légionelles
[AIDA, rubrique 2921](https://aida.ineris.fr/reglementation/2921-refroidissement-evaporatif-dispersion-deau-flux-dair-genere-ventilation).

**Réutilisation : ce que le droit permet.** Le décret n° 2024-33 et l'arrêté du 8 juillet 2024 ont
ouvert aux entreprises du secteur alimentaire la réutilisation des eaux de processus recyclées
(déclaration au préfet) et des eaux usées traitées (autorisation), avec intégration au plan de
maîtrise sanitaire et analyses par laboratoire accrédité
[Légifrance, décret n° 2024-33](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414),
[Légifrance, arrêté du 8 juillet 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908820).
L'IFV souligne que toute eau de nettoyage potentiellement en contact avec le vin doit rester de
qualité suffisante pour éviter les contaminations croisées
[IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf).

**Aides.** L'agence de l'eau Adour-Garonne a financé jusqu'à 60 % le traitement des effluents
organiques des Charentes dans l'accord-cadre 2015-2018, pour une enveloppe de 4 millions d'euros
[Préfecture de la Charente, 2015](https://www.charente.gouv.fr/Actualites/Un-accord-pour-accelerer-la-gestion-des-effluents-viti-vinicoles).
L'agence Rhône Méditerranée Corse soutient le projet Vin'Eau des caves coopératives du Vaucluse
(26 caves, 3 000 vignerons, objectif de 20 à 40 % de prélèvements en moins, mars 2024 à février
2026) [projet Vin'Eau](https://projetvineau.fr/). L'agence Seine-Normandie et l'interprofession
champenoise ont conduit un contrat « vigne, vin et qualité de l'eau » de 2013 à 2018, avec près de
350 conseils individuels sur les effluents
[Comité Champagne](https://levigneronchampenois.comitechampagne.fr/environnement/effluents-vinicoles).
Les programmes 2025-2030 de chaque agence restent à consulter pour les taux en vigueur (à
confirmer).

## 5. Leviers connus, par catégorie du plan d'action

Onze leviers sectoriels, classés selon les sept catégories de `api/seeds/categories.json`. Cinq
mesures transversales existantes seront réutilisées telles quelles : ACT_AGR_001 compteur par usage
et ACT_AGR_002 audit eau (`suivre_comprendre_maitriser`), ACT_AGR_006 récupération d'eau de pluie
(`valoriser_reut_eaux_non_conventionnelles`), ACT_AGR_009 plan de gestion de l'eau et anticipation
des restrictions (`sensibiliser_former`), ACT_AGR_010 démarche collective (`agir_grand_cycle`).
Onze plus cinq dépassent la cible de six à douze mesures : les leviers marqués « fusionnable » sont
les premiers candidats au regroupement, pour atterrir autour de sept ou huit mesures `ACT_VIN_*`.

### Sensibiliser et former (`sensibiliser_former`)

**L1. Former les équipes de chai, saisonniers compris, aux nettoyages économes.** Raclettes et
balais plutôt que la pousse à l'eau des déchets au sol, robinets fermés, rinçage rapide des cuves
après usage pour éviter l'adhésion des souillures, procédures d'hygiène écrites dont l'efficacité
de rinçage est contrôlée (pH). Ces gestes limitent à eux seuls la consommation de 10 à 20 %
[IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf) ;
combinés au nettoyage à sec, à l'eau chaude et aux canons à mousse, de 20 à 30 % sans
investissement lourd [projet Vin'Eau, 2024-2026](https://projetvineau.fr/economies-deau-dans-les-caves-vinicoles-enjeux-et-solutions/).
Concerne toutes les tailles, et tous les codes, y compris les établissements sans vendange. Le
renfort saisonnier des vendanges rend la formation à renouveler chaque année (choix de conception).
Titre proposé : « Former les équipes de chai aux nettoyages économes en eau ».

Transversale associée : ACT_AGR_009, plan de gestion de l'eau et anticipation des restrictions, qui
couvre la procédure écrite demandée au niveau de vigilance par l'arrêté du 30 juin 2023.

### Suivre, comprendre et maîtriser ses consommations (`suivre_comprendre_maitriser`)

**L2. Suivre un ratio d'eau par hectolitre produit, avec des relevés serrés en campagne.** Un
compteur propre à la cave quand le compteur général dessert aussi la vigne, le caveau ou
l'habitation, et des relevés quotidiens ou hebdomadaires en vinification, reliés aux opérations du
jour [IFV, projet Vineco, 2014](https://www.vignevin.com/wp-content/uploads/2019/03/AE45_Vineco_2014.pdf).
Le ratio se compare aux repères de la filière (0,5 à 1 litre par litre au-delà de 100 000 hl, 2 à
4 litres sous 4 000 hl [IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf))
et répond à l'obligation de suivi par activité des caves enregistrées
[arrêté du 26 novembre 2012, AIDA](https://aida.ineris.fr/reglementation/arrete-261112-relatif-prescriptions-generales-applicables-installations-relevant-0).
En Champagne, la profession recommande de relever les compteurs avant et après les nettoyages de fin
de vendanges, et constate une consommation réduite d'un quart en vingt ans
[La Champagne Viticole et Comité Champagne, 2024](https://lachampagneviticole.fr/en/gestion-de-leau-les-bonnes-pratiques-pour-les-centres-de-pressurage/).
Concerne toutes les tailles. Fusionnable avec ACT_AGR_001. Titre proposé : « Suivre le ratio d'eau
par hectolitre produit, campagne par campagne ».

Transversales associées : ACT_AGR_001 compteur par usage, ACT_AGR_002 audit eau (l'IFV note que les
bilans par atelier sont complexes et justifient souvent un prestataire sur les grands sites, même
source 2019).

### Améliorer l'efficacité hydrique de ses équipements (`ameliorer_efficacite_hydrique`)

**L3. Équiper les transferts d'un raclage des canalisations (pousse à l'obus).** Un obus en
silicone ou en mousse, poussé par un gaz, vide les canalisations de vendange, de moût et de vin
avant nettoyage. Les essais de l'IFV donnent 50 à 80 % d'eau en moins lors des transferts de vin
[IFV, projet Vineco, 2014](https://www.vignevin.com/wp-content/uploads/2019/03/AE45_Vineco_2014.pdf),
et de l'ordre de 80 % avec une forte baisse de la charge des effluents
[IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf).
Il faut des installations adaptées (vannes à passage intégral, gares d'introduction et de
récupération), mais la récupération de produit accélère le retour sur investissement (même source).
Concerne les caves à réseau de transfert fixe, donc surtout les caves coopératives et les maisons.
Titre proposé : « Équiper les transferts de vin d'un système de raclage des canalisations ».

**L4. Moderniser le nettoyage des cuves et du matériel.** Centrale de nettoyage en place, action
mécanique (moyenne ou haute pression), eau chaude, canon à mousse, fin de pousse à l'eau pilotée par
conductivité ; à la conception, l'inox recuit brillant réduit de plus de 50 % l'eau de nettoyage des
cuves par rapport à un état de surface 2B
[IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf).
En cidrerie, l'IFPC recommande un ballon d'eau chaude, des boules ou têtes de lavage rotatives et le
nettoyage en boucle des tuyaux, pompes, filtres et tireuses
[IFPC, 2023](https://www.ifpc.eu/wp-content/uploads/2024/12/Pres-Hygiene-en-cidrerie-diagnostics-essais-et-pistes-damelioration-2023.pdf).
Concerne toutes les tailles et tous les codes. Titre proposé : « Moderniser les équipements de
nettoyage des cuves et du matériel ».

**L5. Passer le refroidissement des alambics, des cuves et des pompes à vide en circuit fermé.**
Boucle fermée avec aéroréfrigérant ou groupe froid, recyclage de l'eau des pompes à vide
[IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf),
suppression du refroidissement des moûts en circuit ouvert
[ITV France (IFV), 2007](https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/01-Activitevinicole/bibliographie/01.03.ITVfrance2007_GestionGlobaledesEffluentsVinicoles.pdf).
C'est aussi une obligation : interdiction du circuit ouvert pour les caves enregistrées, plafond de
10 m3 par jour pour les distilleries déclarées (section 4). La boucle permet en outre de récupérer
la chaleur de l'eau du refroidisseur pour préchauffer le vin
[INAO, 2021](https://extranet.inao.gouv.fr/fichier/COMNAT-CST-20210118-Projet-Rapport-distillation-Cognac.pdf).
L'économie d'eau propre à ce passage n'est pas chiffrée par une source de la filière (à confirmer).
Concerne les distilleries et les caves à froid par eau perdue ou par ruissellement. Titre proposé :
« Passer le refroidissement des alambics et des cuves en circuit fermé ».

### Changer ses process ou pratiques (`changer_process_pratiques`)

**L6. Concevoir ou réorganiser le chai pour qu'il se nettoie avec peu d'eau.** Matériel et surfaces
nettoyables (surfaces lisses, vidange totale, sans points morts), procédés continus qui réduisent le
nombre de manipulations, par exemple le collage à la bentonite en ligne couplé à la filtration
tangentielle [IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf) ;
pente de 2 à 3 % en fond de cuve pour une vidange totale, marche en avant dans l'organisation des
nettoyages [IFPC, 2023](https://www.ifpc.eu/wp-content/uploads/2024/12/Pres-Hygiene-en-cidrerie-diagnostics-essais-et-pistes-damelioration-2023.pdf).
L'IFV a outillé l'éco-conception des caves [IFV, projet Vineco, 2014](https://www.vignevin.com/wp-content/uploads/2019/03/AE45_Vineco_2014.pdf).
Effet non chiffré globalement (à confirmer), mais il conditionne les gains de L3 et L4. Concerne
surtout les établissements qui construisent, agrandissent ou renouvellent leur matériel.
Fusionnable avec L4. Titre proposé : « Intégrer la sobriété en eau à la conception du chai ».

### Valoriser ou réutiliser les eaux non conventionnelles (`valoriser_reut_eaux_non_conventionnelles`)

**L7. Réutiliser en cascade les eaux de rinçage et de refroidissement.** Dernier rinçage d'une cuve
réemployé en prérinçage de la suivante ou pour le premier nettoyage d'un filtre, eau des pompes à
vide et eau de refroidissement propre renvoyées vers le lavage des sols ou des extérieurs
[IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf),
utilisation de l'eau et des produits en cascade dans l'organisation quotidienne des nettoyages
[IFPC, 2023](https://www.ifpc.eu/wp-content/uploads/2024/12/Pres-Hygiene-en-cidrerie-diagnostics-essais-et-pistes-damelioration-2023.pdf).
Le programme de recherche Minimeau, lancé en 2018 avec l'IFV, étudie les traitements nécessaires
selon l'usage, de la filtration frontale à l'osmose inverse (IFV, 2019, même source). Ces eaux
relèvent des eaux de processus recyclées, soumises à déclaration
[Légifrance, décret n° 2024-33](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414).
Gain chiffré non trouvé dans une source acceptée (à confirmer ; la presse professionnelle cite des
chiffres attribués à l'IFV, à retrouver dans une publication de l'institut). Concerne toutes les
tailles. Titre proposé : « Réutiliser en cascade les eaux de rinçage et de refroidissement ».

Transversale associée : ACT_AGR_006 récupération d'eau de pluie, pour les sols, les extérieurs et le
lavage du matériel viticole, hors contact avec le produit.

### Agir sur ses rejets et la qualité de l'eau (`agir_rejets_qualite`)

**L8. Retirer bourbes, lies, tartre et jus de détartrage du circuit des effluents.** Valoriser les
sous-produits de la vinification, récupérer les médias filtrants et les solutions de détartrage
plutôt que les envoyer au caniveau : c'est le premier levier de réduction de la charge polluante
[ITV France (IFV), 2007](https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/01-Activitevinicole/bibliographie/01.03.ITVfrance2007_GestionGlobaledesEffluentsVinicoles.pdf).
La profession champenoise en fait une bonne pratique du pressurage
[La Champagne Viticole et Comité Champagne, 2024](https://lachampagneviticole.fr/en/gestion-de-leau-les-bonnes-pratiques-pour-les-centres-de-pressurage/).
Moins de charge, c'est un traitement plus petit et, pour les rejets directs, moins de redevance.
Concerne toutes les tailles avec vinification. Titre proposé : « Retirer les sous-produits du vin du
circuit des effluents ».

**L9. Dimensionner le stockage et le traitement des effluents sur la pointe des vendanges.** Choisir
une filière adaptée à la saisonnalité : stockage aéré (environ 15 jours de traitement avant rejet au
réseau, 30 à 40 jours avant rejet au milieu), épandage raisonné après étude préalable, évaporation
naturelle en climat méditerranéen, lit planté, ou raccordement à une station communale avec bassin de
stockage déstocké sur 6 à 10 mois
[ITV France (IFV), 2007](https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/01-Activitevinicole/bibliographie/01.03.ITVfrance2007_GestionGlobaledesEffluentsVinicoles.pdf).
Le coût du stockage varie de 30 à 75 € par m3 en géomembrane à 300 à 450 € par m3 en béton enterré
[IFV Occitanie](https://www.vignevin-occitanie.com/fiches-pratiques/la-gestion-des-effluents-vinicoles/).
Concerne toutes les caves avec vendange ; les petites relèvent plutôt d'une solution collective.
Titre proposé : « Dimensionner le stockage et le traitement des effluents sur les vendanges ».

**L10. Sécuriser la filière des vinasses.** Stockage étanche couvrant au moins 50 % du vin distillé
dans la campagne, plan et cahier d'épandage dans la limite de 600 hl par hectare et par an, filière
de secours en cas d'épandage impossible
[Chambre d'agriculture de la Charente, 2018](https://www.charente.gouv.fr/content/download/33178/206116/file/DOSSIER%20PLAN%20EPANDAGE.pdf),
ou apport à un traitement collectif qui concentre les vinasses, en valorise le tartre et restitue
l'eau épurée [Agence de l'eau Adour-Garonne](https://eau-grandsudouest.fr/revico-voie-economie-circulaire-pour-eau).
Concerne les distilleries (11.01Z) et les cidreries qui distillent. Titre proposé : « Sécuriser le
stockage et la filière de traitement des vinasses ».

### Agir sur le grand cycle de l'eau (`agir_grand_cycle`)

**L11. Rejoindre la démarche collective de sa filière ou de son bassin.** Les exemples ne manquent
pas : Vin'Eau pour 26 caves coopératives du Vaucluse avec l'agence Rhône Méditerranée Corse
[projet Vin'Eau](https://projetvineau.fr/), l'accord-cadre des Charentes sur les effluents
[Préfecture de la Charente, 2015](https://www.charente.gouv.fr/Actualites/Un-accord-pour-accelerer-la-gestion-des-effluents-viti-vinicoles),
le contrat entre l'agence Seine-Normandie et l'interprofession champenoise
[Comité Champagne](https://levigneronchampenois.comitechampagne.fr/environnement/effluents-vinicoles).
Le collectif porte les solutions que la petite structure ne peut pas porter seule (traitement
mutualisé, diagnostics groupés) et donne accès aux aides des agences. Concerne surtout les caves
coopératives et les petites structures. Fusionnable avec ACT_AGR_010, qui devrait suffire : le
levier sert surtout à rédiger la question qui la déclenche. Pas de titre `ACT_VIN_*` proposé.

## 6. Codes limites au sein du périmètre

**11.01Z, boissons alcooliques distillées (1 982 établissements).** Le code le plus hétérogène. Il
réunit des distilleries (cognac, armagnac, calvados, whisky) où le refroidissement et les vinasses
dominent, et des producteurs de liqueurs et spiritueux par assemblage, sans vendange ni distillation.
Pour ces derniers, les usages se réduisent au lavage des cuves et du matériel et au conditionnement
(repère de 0,6 à 0,7 litre par col pour l'embouteillage du vin
[IFV, 2019](https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf),
transposition aux spiritueux à confirmer). Les leviers L1, L2, L4 et L7 les concernent ; L3 dans une
moindre mesure ; L5, L9 et L10 pas du tout. Le questionnaire devra leur offrir des options « sans
objet » (vendange, distillation, vinasses) à score moyen. Deux autres nuances : dans la filière
cognac, une large part des volumes est distillée par les bouilleurs de cru eux-mêmes (40,5 % en 2019)
[INAO, 2021](https://extranet.inao.gouv.fr/fichier/COMNAT-CST-20210118-Projet-Rapport-distillation-Cognac.pdf),
viticulteurs le plus souvent en 01.21Z et donc hors de ce questionnaire ; et la distillerie de whisky
comporte une étape de brassage proche de la brasserie (eau ingrédient, empâtage), non documentée ici
(à confirmer).

**11.04Z, autres boissons fermentées non distillées (164 établissements).** Vermouths et vins
aromatisés élaborés à partir de vins achetés : pas de vendange, donc pas de pointe d'effluents. Même
profil que les liqueurs par assemblage (lavage et conditionnement), mêmes options « sans objet ».

**11.03Z, cidre et vins de fruits (276 établissements).** Profil proche du vin, avec deux écarts : le
lavage des pommes, usage propre sans volume publié, et une campagne de brassage étalée jusqu'en
décembre ou janvier [IFPC, 2023](https://www.ifpc.eu/wp-content/uploads/2024/12/Pres-Hygiene-en-cidrerie-diagnostics-essais-et-pistes-damelioration-2023.pdf).
Aucun ratio d'eau par hectolitre de cidre n'a été trouvé (à confirmer auprès de l'IFPC, qui annonce un
projet CasDAR incluant le contrôle de la consommation d'eau, même source). Les cidreries qui
distillent (calvados, pommeau) rejoignent le profil de 11.01Z.

**11.02A, vins effervescents (507 établissements).** Maisons de champagne et élaborateurs de
crémants : pressurage concentré sur les vendanges, puis prise de mousse et dégorgement qui ajoutent
des étapes de conditionnement et de lavage (volume non publié, à confirmer). Filière très structurée
sur les effluents depuis le milieu des années 1990
[Comité Champagne, champagne.fr](https://www.champagne.fr/en/en/the-commitments-in-champagne/our-commitments/water-footprint).

**11.02B, vinification (1 621 établissements).** Cœur de cible : caves coopératives et négociants
vinificateurs, pour lesquels tous les ratios IFV de la section 1 ont été établis.

## 7. Sources

| Organisme | Titre | Année | URL |
|---|---|---|---|
| IFV (J.-M. Desseigne) | Optimisation de l'utilisation de l'eau au chai et nettoyabilité des équipements | 2019 | https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf |
| IFV | Optimisation de l'utilisation de l'eau au chai (page de présentation) | 2020 | https://www.vignevin.com/article/optimisation-de-lutilisation-de-leau-au-chai-2/ |
| IFV Occitanie | La gestion des effluents vinicoles (fiche pratique) | sans date | https://www.vignevin-occitanie.com/fiches-pratiques/la-gestion-des-effluents-vinicoles/ |
| ITV France (IFV), J. Rochard et coll. | La gestion des effluents viti-vinicoles : approche globale | 2007 | https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/01-Activitevinicole/bibliographie/01.03.ITVfrance2007_GestionGlobaledesEffluentsVinicoles.pdf |
| IFV et partenaires, projet Vineco | Exemples de bonnes pratiques pour une utilisation durable des ressources dans la filière vitivinicole | 2014 | https://www.vignevin.com/wp-content/uploads/2019/03/AE45_Vineco_2014.pdf |
| BIVB, Chambre régionale d'agriculture de Bourgogne, ADEME | Consommation d'eau et d'énergie dans les chais | étude 2011-2012 | https://extranet.bivb.com/technique-et-innovation/developpement-durable/energie-et-dechets/consommation-d-eau-et-d-energie-dans-les-chais,3121,13957.html |
| Fédération des caves des vignerons coopérateurs de Vaucluse, avec l'agence de l'eau RMC | Projet Vin'Eau (page d'accueil) | 2024-2026 | https://projetvineau.fr/ |
| Fédération des caves des vignerons coopérateurs de Vaucluse | Économies d'eau dans les caves vinicoles : enjeux et solutions | 2024-2026 | https://projetvineau.fr/economies-deau-dans-les-caves-vinicoles-enjeux-et-solutions/ |
| La Champagne Viticole (SGV), avec le Comité Champagne | Gestion de l'eau : les bonnes pratiques pour les centres de pressurage | 2024 | https://lachampagneviticole.fr/en/gestion-de-leau-les-bonnes-pratiques-pour-les-centres-de-pressurage/ |
| Comité Champagne | Effluents vinicoles (Le Vigneron champenois) | sans date | https://levigneronchampenois.comitechampagne.fr/environnement/effluents-vinicoles |
| Comité Champagne | Empreinte eau (champagne.fr) | sans date | https://www.champagne.fr/en/en/the-commitments-in-champagne/our-commitments/water-footprint |
| INAO, Commission scientifique et technique | Expérimentation de la distillation comparée (AOC Cognac), rapport d'étapes | 2021 | https://extranet.inao.gouv.fr/fichier/COMNAT-CST-20210118-Projet-Rapport-distillation-Cognac.pdf |
| Chambre d'agriculture de la Charente (dossier publié par la préfecture) | Plan d'épandage, recyclage agricole des effluents de distillerie et de chai | 2018 | https://www.charente.gouv.fr/content/download/33178/206116/file/DOSSIER%20PLAN%20EPANDAGE.pdf |
| Préfecture de la Charente-Maritime | Dossier de déclaration d'installation classée, distillerie, rubrique 2250 | 2013 | https://www.charente-maritime.gouv.fr/content/download/5653/31219/file/d%C3%A9claration%20distillerie%202250-3.pdf |
| Préfecture de la Charente | Un accord pour accélérer la gestion des effluents viti-vinicoles | 2015 | https://www.charente.gouv.fr/Actualites/Un-accord-pour-accelerer-la-gestion-des-effluents-viti-vinicoles |
| Agence de l'eau Adour-Garonne | Revico : la voie de l'économie circulaire pour l'eau | sans date | https://eau-grandsudouest.fr/revico-voie-economie-circulaire-pour-eau |
| Agence de l'eau Adour-Garonne | Zoom sur les rejets de quelques secteurs industriels | sans date | http://www.eau-adour-garonne.fr/fr/eau-et-activites-economiques/industrie/les-rejets-industriels/zoom-sur-les-rejets-de-quelques-secteurs-industriels.html |
| IFPC (H. Guichard) | Hygiène en cidrerie : diagnostic, essais et pistes d'amélioration | 2023 | https://www.ifpc.eu/wp-content/uploads/2024/12/Pres-Hygiene-en-cidrerie-diagnostics-essais-et-pistes-damelioration-2023.pdf |
| IFPC | Guide de bonnes pratiques d'hygiène du cidre | 2018 | https://www.ifpc.eu/wp-content/uploads/2024/12/GBPH-cidre_modifie-180228.pdf |
| AIDA, Ineris | Rubrique ICPE 2251, préparation et conditionnement de vins | en vigueur | https://aida.ineris.fr/consultation_document/10571 |
| AIDA, Ineris | Rubrique ICPE 2250, distillation d'alcools de bouche d'origine agricole | en vigueur | https://aida.ineris.fr/consultation_document/10569 |
| AIDA, Ineris | Arrêté du 26 novembre 2012 (2251, enregistrement), modifié le 27 janvier 2025 | 2012-2025 | https://aida.ineris.fr/reglementation/arrete-261112-relatif-prescriptions-generales-applicables-installations-relevant-0 |
| AIDA, Ineris | Arrêté du 25 mai 2012 (2250, déclaration) | 2012 | https://aida.ineris.fr/reglementation/arrete-250512-relatif-prescriptions-generales-applicables-installations-classees |
| AIDA, Ineris | Arrêté du 30 juin 2023, restrictions en période de sécheresse pour les ICPE | 2023 | https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement |
| AIDA, Ineris | Rubrique ICPE 2921, refroidissement évaporatif | en vigueur | https://aida.ineris.fr/reglementation/2921-refroidissement-evaporatif-dispersion-deau-flux-dair-genere-ventilation |
| Agence de l'eau Seine-Normandie | Redevance pollution de l'eau d'origine non domestique, 2025 | 2025 | https://www.eau-seine-normandie.fr/les-redevances/redevance-pollution-de-l-eau-d-origine-non-domestique |
| Les agences de l'eau | Tout comprendre de la réforme des redevances | 2026 | https://www.lesagencesdeleau.fr/actualites/tout-comprendre-de-la-reforme-des-redevances |
| Légifrance | Décret n° 2024-33 du 24 janvier 2024, eaux réutilisées dans les entreprises du secteur alimentaire | 2024 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414 |
| Légifrance | Arrêté du 8 juillet 2024, eaux réutilisées dans les entreprises du secteur alimentaire | 2024 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908820 |
| Services de l'État, bassin Adour-Garonne | Textes du 12 juillet 2024 relatifs aux utilisations d'eaux impropres à la consommation humaine | 2024 | https://bonnespratiques-eau.fr/2024/07/18/textes-du-12-juillet-2024-relatifs-utilisations-deaux-impropres-a-la-consommation-humaine/ |

Notes sur les liens : la page Revico de l'agence Adour-Garonne renvoyait une erreur de certificat
au moment de la rédaction, ses chiffres ont été relevés dans l'extrait publié par le moteur de
recherche et sont à revérifier. Les pages Légifrance et la rubrique 2921 sont reprises de la note
`industrie_laitiere`, où elles ont été vérifiées. Le dossier d'épandage de la chambre d'agriculture
de la Charente porte sur une distillerie particulière : ses ratios (0,9 hl de vinasses par hectolitre
distillé, 20 % du vin en effluents de chai) sont des valeurs d'un cas, pas des moyennes de filière.
Le guide d'hygiène de l'IFPC n'a été consulté que par extrait (mention de l'étape de lavage des
pommes).

### Ce qui n'a pas pu être sourcé

1. Un ratio d'eau par hectolitre d'alcool pur, et le volume d'eau de refroidissement d'un alambic
   par hectolitre distillé, en circuit ouvert comme en circuit fermé (ni BNIC, ni IFV, ni chambre
   d'agriculture n'en publient ; l'enquête BNIC 2023 sur les consommations en distillerie n'a pas
   de résultats publics).
2. Un ratio d'eau par hectolitre de cidre et le volume du lavage des pommes (IFPC).
3. Le volume d'eau propre aux vins effervescents (tirage, dégorgement, lavage des bouteilles) ; le
   chiffre de 2 litres d'eau par bouteille expédiée, repris par des sites tiers au nom de la filière
   champenoise, n'a pas été retrouvé sur une page du Comité Champagne.
4. La transposition du repère d'embouteillage (0,6 à 0,7 litre par col) aux spiritueux et liqueurs.
5. Le gain chiffré de la réutilisation en cascade des eaux de rinçage (L7) et du passage en circuit
   fermé (L5).
6. La part réseau et forage selon la taille des établissements.
7. L'applicabilité de l'exclusion « flux poussé » de l'arrêté sécheresse ICPE au pressurage des
   vendanges, et la coïncidence entre vendanges et restrictions, à objectiver avec l'historique des
   arrêtés de Noé.
8. Les taux d'aide des programmes 2025-2030 des agences de l'eau pour les caves et distilleries.

## Questions

### 1. Comment suivez-vous aujourd'hui la consommation d'eau de votre site ?

`vin_q01` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Je n'ai pas de compteur, je m'en remets à la facture | `aucun_compteur` | 0 | 0 | comptage |
| Un compteur général, partagé avec la vigne ou l'habitation | `compteur_general` | 1 | 1 | comptage |
| Des relevés réguliers, plus serrés pendant la campagne | `releves_campagne` | 2 | 2 |  |
| Des compteurs par usage et un ratio d'eau par hectolitre | `ratio_hl` | 3 | 3 |  |

### 2. D'où provient l'eau que vous utilisez sur le site ? (plusieurs réponses possibles)

`vin_q02` · multi_choice · Connaissance & mesure · classe `source_eau`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Réseau public d'eau potable | `reseau` | 0 | 0 | diversification_sources |
| Forage ou captage d'eau souterraine | `forage` | 0 | 1 |  |
| Captage en rivière, canal ou retenue | `surface` | 0 | 1 |  |
| Eau de pluie récupérée sur les toitures | `pluie` | 2 | 3 |  |
| Eaux de rinçage ou de refroidissement réutilisées | `recyclage` | 2 | 3 |  |

### 3. Quelle est votre consommation d'eau annuelle, tous usages du site confondus ?

`vin_q03` · numeric · Connaissance & mesure

- Saisie en m³/an, de 0 à 5000000 · si renseignée : maturité 1, concernement 2, topics []

### 4. Avez-vous réalisé un audit eau ou un diagnostic de vos consommations ?

`vin_q04` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, jamais | `jamais` | 0 | 0 | audit |
| On y a réfléchi, sans le faire | `envisage` | 0 | 2 | audit |
| Oui, il y a plus de cinq ans | `ancien` | 1 | 2 | audit |
| Oui, il y a moins de trois ans | `recent` | 3 | 3 |  |

### 5. Comment videz-vous les tuyaux de vendange, de moût ou de vin avant de les rincer ?

`vin_q05` · single_choice · Nettoyage & refroidissement

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| On pousse le produit à l'eau | `pousse_eau` | 0 | 0 | nettoyage |
| On pousse au gaz ou à l'air, sans obus | `pousse_gaz` | 1 | 1 | nettoyage |
| Par raclage avec un obus, sur un réseau adapté | `raclage_obus` | 3 | 3 |  |
| Pas de réseau fixe, seulement des tuyaux souples courts | `sans_reseau` | 2 | 2 |  |

### 6. Comment nettoyez-vous vos cuves et votre matériel de chai ?

`vin_q06` · single_choice · Nettoyage & refroidissement

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Au jet d'eau froide, en eau perdue | `jet_froid` | 0 | 0 | nettoyage |
| Au nettoyeur haute pression ou à l'eau chaude | `haute_pression` | 1 | 1 | nettoyage |
| Avec des têtes de lavage rotatives ou un canon à mousse | `tetes_lavage` | 2 | 2 |  |
| Centrale de nettoyage, avec récupération du dernier rinçage | `centrale_recup` | 3 | 3 |  |

### 7. Vos équipes, saisonniers compris, ont-elles des consignes de nettoyage économe ?

`vin_q07` · single_choice · Nettoyage & refroidissement

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, chacun fait à sa façon | `aucune` | 0 | 0 | gestes |
| Des habitudes transmises à l'oral | `orales` | 1 | 1 | gestes |
| Des consignes écrites, affichées au chai | `ecrites` | 2 | 2 |  |
| Consignes écrites et formation à chaque campagne | `ecrites_formees` | 3 | 3 |  |

### 8. Comment refroidissez-vous vos cuves, vos pompes à vide ou vos alambics ?

`vin_q08` · single_choice · Nettoyage & refroidissement

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| À l'eau perdue ou par ruissellement sur les cuves | `eau_perdue` | 0 | 0 | refroidissement |
| Tour aéroréfrigérante, avec appoint et purges | `tour_aero` | 1 | 1 | refroidissement |
| En circuit fermé, avec récupération de la chaleur | `circuit_ferme` | 3 | 3 |  |
| Groupe froid à air, ou pas de refroidissement | `sans_eau` | 2 | 2 |  |

### 9. Comment sont traités les effluents de votre chai, pressurage compris ?

`vin_q09` · single_choice · Effluents & vinasses

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Rejetés sans traitement, au réseau ou au milieu | `sans_traitement` | 0 | 0 | effluents |
| Envoyés à la station communale, sans autorisation écrite | `raccorde_sans_autorisation` | 1 | 1 | effluents |
| Traités, mais le stockage sature en pleine campagne | `deborde_vendanges` | 1 | 2 | effluents |
| Traités par une filière dimensionnée sur la pointe de campagne | `filiere_dimensionnee` | 3 | 3 |  |
| Pas de pressurage sur le site, seulement des eaux de lavage | `sans_vendange` | 2 | 2 |  |

### 10. Que deviennent vos vinasses de distillation ?

`vin_q10` · single_choice · Effluents & vinasses

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Épandues sans plan d'épandage à jour | `epandage_sans_plan` | 0 | 0 | vinasses |
| Épandues avec un plan, mais le stockage est trop juste | `stockage_insuffisant` | 1 | 2 | vinasses |
| Stockage suffisant et plan d'épandage suivi | `epandage_maitrise` | 2 | 2 |  |
| Apportées à un traitement collectif ou valorisées | `traitement_collectif` | 3 | 3 |  |
| Je ne distille pas | `sans_distillation` | 2 | 2 |  |

### 11. Avez-vous analysé votre exposition aux restrictions d'eau en période de sécheresse ?

`vin_q11` · single_choice · Gouvernance & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, ce n'est pas un sujet que j'ai regardé | `non_analyse` | 0 | 0 | restrictions |
| Je suis informé, sans analyse formelle | `informe` | 1 | 2 | restrictions |
| Oui, je sais ce qui s'arrêterait, vendanges comprises | `evalue` | 2 | 2 |  |
| Oui, et un plan écrit dit quoi réduire à chaque niveau | `plan_formalise` | 3 | 3 |  |

### 12. Participez-vous à une démarche collective sur l'eau (filière, cave, bassin) ?

`vin_q12` · single_choice · Gouvernance & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, aucune | `non` | 0 | 0 | collectif |
| J'en ai entendu parler, sans y prendre part | `informe` | 1 | 1 | collectif |
| Oui, je participe aux réunions ou aux diagnostics groupés | `participe` | 2 | 2 |  |
| Oui, et j'y porte des engagements chiffrés | `pilote` | 3 | 3 |  |

## Filtres du plan d'action

| Filtre | Règle | Type | Effet | Priorité | Mesures |
|---|---|---|---|---|---|
| `f_suivi_absent` | Pas de compteur ou compteur général seul : recommander le comptage par usage | answer | add | 1 | ACT_AGR_001 |
| `f_suivi_inconnu` | Suivi de la consommation inconnu : commencer par le compteur par usage | answer | add | 1 | ACT_AGR_001 |
| `f_pluie_sans_suivi` | Suivi de la consommation inconnu : sans volumes connus on ne dimensionne pas une cuve, retirer l'eau de pluie | answer | remove | 2 | ACT_AGR_006 |
| `f_sur_reseau` | Eau du réseau public parmi les sources : l'eau de pluie des toitures peut la remplacer pour les sols et les extérieurs | class | add | 1 | ACT_AGR_006 |
| `f_pluie_pas_novice` | Niveau novice : les premiers gestes sont le comptage et le nettoyage, la récupération d'eau de pluie vient après | maturity | remove | 2 | ACT_AGR_006 |
| `f_pluie_deja` | Eau de pluie déjà récupérée : ne pas la proposer | class | remove | 2 | ACT_AGR_006 |
| `f_cascade_deja` | Eaux de rinçage ou de refroidissement déjà réutilisées parmi les sources : retirer la cascade | class | remove | 2 | ACT_VIN_005 |
| `f_conso_icpe` | Consommation annuelle d'au moins 10 000 m3, seuil de l'arrêté sécheresse ICPE du 30 juin 2023 : un plan de gestion écrit devient nécessaire | numeric | add | 1 | ACT_AGR_009 |
| `f_pas_audit` | Pas d'audit, audit seulement envisagé ou de plus de cinq ans : recommander le diagnostic | answer | add | 1 | ACT_AGR_002 |
| `f_audit_inconnu` | Question de l'audit laissée sans réponse : ne pas savoir est le motif même de recommander le diagnostic | answer | add | 1 | ACT_AGR_002 |
| `f_pousse_eau` | Produit poussé à l'eau ou au gaz sans obus : recommander le raclage des canalisations | answer | add | 1 | ACT_VIN_002 |
| `f_sans_reseau` | Pas de réseau de transfert fixe : le raclage ne s'installe pas, retirer la mesure | answer | remove | 2 | ACT_VIN_002 |
| `f_nettoyage_basique` | Cuves lavées au jet froid ou au nettoyeur haute pression : recommander la modernisation du nettoyage | answer | add | 1 | ACT_VIN_003 |
| `f_rincage_perdu` | Dernier rinçage non récupéré (jet, haute pression, têtes de lavage) : proposer la réutilisation en cascade | answer | add | 1 | ACT_VIN_005 |
| `f_sans_consignes` | Pas de consignes de nettoyage, ou seulement orales : recommander la formation des équipes | answer | add | 1 | ACT_VIN_001 |
| `f_froid_ouvert` | Refroidissement à l'eau perdue ou par tour aéroréfrigérante : recommander le circuit fermé | answer | add | 1 | ACT_VIN_004 |
| `f_froid_sans_eau` | Froid sans eau ou pas de refroidissement : retirer la mesure sur le circuit fermé | answer | remove | 2 | ACT_VIN_004 |
| `f_effluents_fragiles` | Effluents rejetés sans traitement, sans autorisation de déversement, ou stockage saturé en campagne : fiabiliser la filière | answer | add | 1 | ACT_VIN_006 |
| `f_sans_vendange` | Pas de pressurage sur le site : ni pointe à absorber ni bourbes à retirer, retirer la mesure sur les effluents vinicoles | answer | remove | 2 | ACT_VIN_006 |
| `f_vinasses_fragiles` | Vinasses épandues sans plan à jour ou avec un stockage trop juste : sécuriser la filière | answer | add | 1 | ACT_VIN_007 |
| `f_sans_distillation` | Pas de distillation sur le site : retirer la mesure sur les vinasses | answer | remove | 2 | ACT_VIN_007 |
| `f_risque_non_analyse` | Exposition aux restrictions non analysée ou connue sans formalisation : recommander le plan de gestion | answer | add | 1 | ACT_AGR_009 |
| `f_plan_deja_formalise` | Plan de gestion de l'eau déjà écrit : ne pas le proposer, même au-dessus du seuil de 10 000 m3 | answer | remove | 2 | ACT_AGR_009 |
| `f_preleve_forage` | Prélèvement propre en nappe : la démarche collective de partage de la ressource (PTGE, contrat de nappe, SAGE) le concerne directement | class | add | 1 | ACT_AGR_010 |
| `f_preleve_surface` | Prélèvement propre en rivière ou en retenue : la démarche collective de partage de la ressource le concerne directement | class | add | 1 | ACT_AGR_010 |
| `f_deja_collectif` | Participe déjà à une démarche collective, ou la pilote : ne pas la proposer | answer | remove | 2 | ACT_AGR_010 |

## Mesures

### ACT_VIN_001 · Former les équipes de chai aux nettoyages économes en eau

*Nettoyages économes* · sensibiliser_former · secteurs ['vins_spiritueux'] · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut brouillon

Former chaque année l'équipe et les saisonniers aux gestes économes : raclette avant le jet, rinçage des cuves aussitôt vidées, robinets fermés, procédure écrite avec contrôle du rinçage au pH. Ces gestes réduisent de 10 à 20 % l'eau de nettoyage sans aucun investissement.

- **info** : L'hygiène des équipements et des locaux représente 70 à 90 % de l'eau consommée par une cave : c'est là que se jouent les économies. (https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf)
- **retour_experience** : Dans le projet Vin'Eau, les caves coopératives du Vaucluse visent 20 à 30 % d'économie sans investissement lourd en combinant ces gestes, le nettoyage à sec, l'eau chaude et les canons à mousse. (https://projetvineau.fr/economies-deau-dans-les-caves-vinicoles-enjeux-et-solutions/)
- **info** : Le renfort saisonnier des vendanges change l'équipe chaque année : prévoyez une courte session au démarrage de la campagne plutôt qu'une formation unique.
- Sources :
  - description : https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf (sans date) · « Ces gestes limitent à eux seuls la consommation de 10 à 20 %. »
  - infos_complementaires : https://projetvineau.fr/economies-deau-dans-les-caves-vinicoles-enjeux-et-solutions/ (sans date) · « 20 à 30 % d'économie sans investissement lourd. »

### ACT_VIN_002 · Équiper les transferts de vin d'un système de raclage des canalisations

*Raclage des canalisations* · ameliorer_efficacite_hydrique · secteurs ['vins_spiritueux'] · impact 3 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "faible", "humain": "faible"} · statut brouillon

Vider les canalisations de vendange, de moût et de vin avec un obus poussé au gaz avant de les rincer, plutôt que de pousser le produit à l'eau. Vous récupérez du vin, vous économisez 50 à 80 % de l'eau des transferts et vous allégez nettement la charge des effluents.

- **info** : La pousse à l'eau peut représenter à elle seule plus de 30 % des volumes consommés dans certaines caves. (https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf)
- **avertissement** : Le raclage demande un réseau adapté : vannes à passage intégral, gares d'introduction et de récupération de l'obus. Faites vérifier le réseau existant avant de commander.
- **ressource** : Bonnes pratiques pour une utilisation durable des ressources (IFV, projet Vineco) (https://www.vignevin.com/wp-content/uploads/2019/03/AE45_Vineco_2014.pdf)
- Sources :
  - description : https://www.vignevin.com/wp-content/uploads/2019/03/AE45_Vineco_2014.pdf (sans date) · « 50 à 80 % d'eau en moins lors des transferts de vin. »
  - infos_complementaires : https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf (sans date) · « La pousse à l'eau peut représenter plus de 30 % des volumes ; installations adaptées nécessaires (vannes à passage intégral, gares). »

### ACT_VIN_003 · Moderniser le nettoyage des cuves et concevoir un chai facile à nettoyer

*Nettoyage des cuves* · ameliorer_efficacite_hydrique · secteurs ['vins_spiritueux'] · impact 3 · facilité 1 · moyen_terme · effort {"capex": "important", "opex": "faible", "humain": "moyen"} · statut brouillon

Équiper le chai d'une centrale de nettoyage, de têtes de lavage rotatives, d'eau chaude et d'un canon à mousse, et choisir des cuves et des surfaces qui se vidangent totalement lors de chaque renouvellement. Le nettoyage des cuves, premier poste d'une cave, peut baisser de moitié.

- **info** : À la conception, un inox recuit brillant réduit de plus de 50 % l'eau de nettoyage des cuves par rapport à un état de surface standard (2B). (https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf)
- **info** : Une pente de 2 à 3 % en fond de cuve permet une vidange totale et limite l'eau nécessaire au rinçage. (https://www.ifpc.eu/wp-content/uploads/2024/12/Pres-Hygiene-en-cidrerie-diagnostics-essais-et-pistes-damelioration-2023.pdf)
- **avertissement** : Tout changement de procédure de nettoyage doit rester conforme à votre plan d'hygiène : vérifiez l'efficacité du nouveau cycle avant de l'adopter en routine.
- Sources :
  - description : https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf (sans date) · « L'inox recuit brillant réduit de plus de 50 % l'eau de nettoyage des cuves par rapport à un état de surface 2B. »
  - infos_complementaires : https://www.ifpc.eu/wp-content/uploads/2024/12/Pres-Hygiene-en-cidrerie-diagnostics-essais-et-pistes-damelioration-2023.pdf (sans date) · « Boules ou têtes de lavage rotatives, ballon d'eau chaude, pente de 2 à 3 % en fond de cuve. »

### ACT_VIN_004 · Passer le refroidissement des alambics et des cuves en circuit fermé

*Refroidissement en circuit fermé* · ameliorer_efficacite_hydrique · secteurs ['vins_spiritueux'] · impact 3 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "moyen", "humain": "faible"} · statut brouillon

Remplacer l'eau perdue qui refroidit les serpentins d'alambic, les cuves ou les pompes à vide par une boucle fermée avec aéroréfrigérant ou groupe froid, et récupérer la chaleur pour préchauffer le vin. Pour une distillerie, c'est souvent le premier poste d'eau qui disparaît.

- **avertissement** : Le circuit ouvert est interdit pour les caves soumises à enregistrement (rubrique 2251) et plafonné à 10 m3 par jour pour les distilleries déclarées (30 m3 si elles fonctionnent moins de six mois par an). (https://aida.ineris.fr/reglementation/arrete-250512-relatif-prescriptions-generales-applicables-installations-classees)
- **avertissement** : Une tour aéroréfrigérante relève de la rubrique ICPE 2921 et de ses obligations de prévention des légionelles : un aéroréfrigérant sec ou un groupe froid l'évite. (https://aida.ineris.fr/reglementation/2921-refroidissement-evaporatif-dispersion-deau-flux-dair-genere-ventilation)
- **info** : Dans la distillation charentaise, l'eau chauffée dans le refroidisseur sert de plus en plus à préchauffer le vin par un échangeur. (https://extranet.inao.gouv.fr/fichier/COMNAT-CST-20210118-Projet-Rapport-distillation-Cognac.pdf)
- Sources :
  - description : https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf (sans date) · « Refroidissement des pompes à vide très consommateur s'il n'est pas recyclé ; boucle fermée recommandée. »
  - infos_complementaires : https://aida.ineris.fr/reglementation/arrete-250512-relatif-prescriptions-generales-applicables-installations-classees (sans date) · « Refroidissement en circuit ouvert interdit au-delà de 10 m3 par jour (30 m3 pour une installation fonctionnant moins de six mois par an). »
  - infos_complementaires : https://aida.ineris.fr/reglementation/arrete-261112-relatif-prescriptions-generales-applicables-installations-relevant-0 (sans date) · « Réfrigération en circuit ouvert interdite pour les installations enregistrées sous la rubrique 2251. »
  - infos_complementaires : https://extranet.inao.gouv.fr/fichier/COMNAT-CST-20210118-Projet-Rapport-distillation-Cognac.pdf (sans date) · « Récupération de l'eau chaude du refroidisseur pour préchauffer le vin. »

### ACT_VIN_005 · Réutiliser en cascade les eaux de rinçage et de refroidissement

*Réutilisation en cascade* · valoriser_reut_eaux_non_conventionnelles · secteurs ['vins_spiritueux'] · impact 2 · facilité 2 · court_terme · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut brouillon

Garder le dernier rinçage d'une cuve pour le prérinçage de la suivante, et renvoyer l'eau propre des pompes à vide ou du refroidissement vers le lavage des sols et des extérieurs. La même eau sert deux fois, sans traitement lourd, dans toutes les tailles de cave.

- **avertissement** : Depuis 2024, réutiliser des eaux de processus recyclées dans une entreprise alimentaire relève d'une déclaration au préfet et doit être intégré au plan de maîtrise sanitaire. (https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414)
- **info** : Toute eau de nettoyage susceptible d'entrer en contact avec le vin doit rester d'une qualité suffisante pour éviter les contaminations croisées : réservez les eaux les moins propres aux sols et aux extérieurs. (https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf)
- Sources :
  - description : https://www.vignevin-occitanie.com/wp-content/uploads/2019/10/Optimisation-de-lutilisation-de-leau-au-chai.pdf (sans date) · « Dernier rinçage réemployé en prérinçage ; eau des pompes à vide et de refroidissement renvoyée vers le lavage des sols. »
  - infos_complementaires : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414 (2024-01-24) · « Eaux de processus recyclées dans les entreprises du secteur alimentaire : déclaration. »

### ACT_VIN_006 · Réduire la charge des effluents et dimensionner leur traitement sur les vendanges

*Effluents vinicoles* · agir_rejets_qualite · secteurs ['vins_spiritueux'] · impact 2 · facilité 1 · moyen_terme · effort {"capex": "important", "opex": "moyen", "humain": "moyen"} · statut brouillon

Retirer bourbes, lies, tartre et solutions de détartrage du caniveau, puis choisir un stockage et une filière de traitement (stockage aéré, épandage, évaporation, station communale) calés sur la pointe des vendanges. Vous évitez les rejets non conformes et un ouvrage surdimensionné.

- **info** : Une cave rejette 30 à 250 litres d'effluents par hectolitre de vin élaboré, dont 40 à 60 % pendant les vendanges, avec une DCO de 3 000 à 20 000 mg/l. (https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/01-Activitevinicole/bibliographie/01.03.ITVfrance2007_GestionGlobaledesEffluentsVinicoles.pdf)
- **info** : Le coût du stockage va de 30 à 75 € par m3 en géomembrane à 300 à 450 € par m3 en béton enterré. (https://www.vignevin-occitanie.com/fiches-pratiques/la-gestion-des-effluents-vinicoles/)
- **avertissement** : Rejetés sans adaptation dans une station communale, les effluents vinicoles en déséquilibrent le fonctionnement pendant des semaines : le raccordement passe par une autorisation de déversement de la collectivité.
- **retour_experience** : En Champagne, un contrat entre l'agence de l'eau Seine-Normandie et l'interprofession a permis près de 350 conseils individuels sur les effluents entre 2013 et 2018. (https://levigneronchampenois.comitechampagne.fr/environnement/effluents-vinicoles)
- Sources :
  - description : https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/01-Activitevinicole/bibliographie/01.03.ITVfrance2007_GestionGlobaledesEffluentsVinicoles.pdf (sans date) · « Retrait des sous-produits, premier levier de réduction de la charge ; filières stockage aéré, épandage, évaporation naturelle, station communale. »
  - infos_complementaires : https://www.vignevin-occitanie.com/fiches-pratiques/la-gestion-des-effluents-vinicoles/ (sans date) · « Stockage : 30 à 75 € par m3 en géomembrane, 300 à 450 € par m3 en béton enterré. »
  - infos_complementaires : https://levigneronchampenois.comitechampagne.fr/environnement/effluents-vinicoles (sans date) · « Contrat vigne, vin et qualité de l'eau 2013-2018, près de 350 conseils individuels. »

### ACT_VIN_007 · Sécuriser le stockage et la filière de traitement des vinasses

*Filière des vinasses* · agir_rejets_qualite · secteurs ['vins_spiritueux'] · impact 2 · facilité 1 · moyen_terme · effort {"capex": "important", "opex": "moyen", "humain": "moyen"} · statut brouillon

Disposer d'un stockage étanche d'au moins la moitié du vin distillé dans la campagne, d'un plan d'épandage tenu à jour et d'une filière de secours, ou apporter les vinasses à un traitement collectif. La campagne de distillation n'est plus suspendue à la météo ou à un épandage refusé.

- **info** : Dans le procédé charentais, un hectolitre de vin distillé donne environ 0,9 hl de vinasses, très acides (pH proche de 3,4) : le volume à gérer est presque celui du vin. (https://www.charente.gouv.fr/content/download/33178/206116/file/DOSSIER%20PLAN%20EPANDAGE.pdf)
- **avertissement** : Pour les distilleries déclarées ou enregistrées (rubrique 2250), le stockage des vinasses destinées à l'épandage doit couvrir 50 % du vin distillé dans la campagne. (https://aida.ineris.fr/reglementation/arrete-250512-relatif-prescriptions-generales-applicables-installations-classees)
- **info** : En Charentes, l'épandage des vinasses est limité à 600 hl par hectare et par an, et déconseillé sur vigne de novembre à janvier.
- Sources :
  - description : https://aida.ineris.fr/reglementation/arrete-250512-relatif-prescriptions-generales-applicables-installations-classees (sans date) · « Stockage des vinasses destinées à l'épandage couvrant 50 % du vin distillé dans la campagne. »
  - infos_complementaires : https://www.charente.gouv.fr/content/download/33178/206116/file/DOSSIER%20PLAN%20EPANDAGE.pdf (sans date) · « 0,9 hl de vinasses par hl de vin distillé ; pH de l'ordre de 3,4 ; 600 hl par hectare et par an (accord Lamorlette) ; épandage déconseillé de novembre à janvier sur vigne. »

## Simulation

# Simulation du référentiel "Vins et spiritueux" (vins_spiritueux)

Source : staging + publié · 12 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 9 personas

### Alertes (0)

Aucune.

### Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 2, médiane 5, max 9
- Plans vides : 0 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

### Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 79 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 56 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 55 % |
| ACT_VIN_006 | Effluents vinicoles | agir_rejets_qualite | 52 % |
| ACT_VIN_003 | Nettoyage des cuves | ameliorer_efficacite_hydrique | 45 % |
| ACT_VIN_001 | Nettoyages économes | sensibiliser_former | 44 % |
| ACT_VIN_005 | Réutilisation en cascade | valoriser_reut_eaux_non_conventionnelles | 43 % |
| ACT_VIN_004 | Refroidissement en circuit fermé | ameliorer_efficacite_hydrique | 41 % |
| ACT_VIN_002 | Raclage des canalisations | ameliorer_efficacite_hydrique | 40 % |
| ACT_VIN_007 | Filière des vinasses | agir_rejets_qualite | 39 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 29 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 22 % |

### Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 9 % | | faible | 1 % |
| intermediaire | 85 % | | moyen | 75 % |
| avance | 7 % | | eleve | 25 % |

### Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_absent | answer | add | 45 % |
| f_suivi_inconnu | answer | add | 10 % |
| f_pluie_sans_suivi | answer | remove | 10 % |
| f_sur_reseau | class | add | 39 % |
| f_pluie_pas_novice | maturity | remove | 9 % |
| f_pluie_deja | class | remove | 33 % |
| f_cascade_deja | class | remove | 37 % |
| f_conso_icpe | numeric | add | 35 % |
| f_pas_audit | answer | add | 70 % |
| f_audit_inconnu | answer | add | 9 % |
| f_pousse_eau | answer | add | 40 % |
| f_sans_reseau | answer | remove | 22 % |
| f_nettoyage_basique | answer | add | 45 % |
| f_rincage_perdu | answer | add | 67 % |
| f_sans_consignes | answer | add | 44 % |
| f_froid_ouvert | answer | add | 41 % |
| f_froid_sans_eau | answer | remove | 25 % |
| f_effluents_fragiles | answer | add | 52 % |
| f_sans_vendange | answer | remove | 18 % |
| f_vinasses_fragiles | answer | add | 39 % |
| f_sans_distillation | answer | remove | 14 % |
| f_risque_non_analyse | answer | add | 45 % |
| f_plan_deja_formalise | answer | remove | 22 % |
| f_preleve_forage | class | add | 35 % |
| f_preleve_surface | class | add | 36 % |
| f_deja_collectif | answer | remove | 49 % |

### Personas

### Petite cave de négoce, rien de formalisé (cave_novice)

Négociant vinificateur de six salariés, 3 000 hl par an, eau du réseau uniquement, environ 2 500 m³ par an. Le vin est poussé à l'eau dans les tuyaux, les cuves sont lavées au jet froid, les cuves sont refroidies par ruissellement d'eau perdue, les effluents partent à la station communale sans autorisation écrite. Pas de distillation. Aucun audit, aucune consigne, le sujet des restrictions n'a jamais été regardé.

Maturité 11 % (novice) · concernement 14 % · axes : nettoyage, comptage, diversification_sources, audit, gestes, refroidissement, effluents, restrictions, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyages économes (ACT_VIN_001, immediat)
- Raclage des canalisations (ACT_VIN_002, court_terme)
- Refroidissement en circuit fermé (ACT_VIN_004, court_terme)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Nettoyage des cuves (ACT_VIN_003, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Effluents vinicoles (ACT_VIN_006, moyen_terme)

### Maison de champagne équipée, en réflexion sur la suite (maison_equipee)

Maison de champagne de 40 salariés, 18 000 m³ par an, réseau public doublé d'un forage. Raclage des canalisations, centrale de nettoyage avec récupération du dernier rinçage, froid en circuit fermé, consignes écrites, station d'effluents dimensionnée sur les vendanges. Relevés réguliers sans ratio, audit de plus de cinq ans, informée des restrictions sans plan écrit, pas engagée dans une démarche collective.

Maturité 61 % (intermediaire) · concernement 72 % · axes : diversification_sources, audit, restrictions, collectif

- Audit eau (ACT_AGR_002, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Liquoriste par assemblage, sans vendange ni distillation (liquoriste_assemblage)

Fabricant de liqueurs et d'apéritifs de huit salariés qui achète ses alcools et ses vins de base : ni pressurage, ni distillation, ni besoin de refroidissement. Eau du réseau, 600 m³ par an, compteur général. Des tuyaux souples courts, les cuves lavées au nettoyeur haute pression, des habitudes orales. Aucun audit, restrictions jamais regardées, pas de démarche collective.

Maturité 33 % (intermediaire) · concernement 36 % · axes : comptage, diversification_sources, audit, nettoyage, gestes, restrictions, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyages économes (ACT_VIN_001, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Nettoyage des cuves (ACT_VIN_003, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Cave coopérative exemplaire (cave_avancee)

Grande cave coopérative de 30 000 m³ par an, forage et eau de pluie, eaux de rinçage réutilisées. Ratio d'eau par hectolitre suivi, audit récent, raclage, centrale de nettoyage, formation à chaque campagne, circuit fermé, filière d'effluents dimensionnée, vinasses de sa petite unité de distillation apportées à un traitement collectif. Plan écrit par niveau de restriction, engagements chiffrés dans la démarche de bassin.

Maturité 94 % (avance) · concernement 97 % · axes : aucun

Plan vide.

### Assistante administrative qui répond pour le dirigeant (ne_sait_pas)

Une personne du bureau remplit le questionnaire pour une maison de vins. Elle sait que l'eau vient du réseau et que l'entreprise ne distille pas, et ne sait rien du reste : elle répond « je ne sais pas » partout ailleurs.

Maturité 33 % (intermediaire) · concernement 33 % · axes : diversification_sources

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Grande cave coopérative, gros consommateur à mi-chemin (grande_cave_cooperative)

Cave coopérative de 120 000 hl, 45 000 m³ par an, réseau et forage. Relevés réguliers, audit ancien, vin poussé au gaz sans obus, têtes de lavage rotatives sans récupération du rinçage, consignes écrites, tour aéroréfrigérante. Le stockage des effluents sature chaque année en pleine vendange. Pas de distillation. Sait ce qui s'arrêterait en restriction sans plan écrit, participe aux réunions de la démarche de bassin.

Maturité 47 % (intermediaire) · concernement 58 % · axes : diversification_sources, audit, nettoyage, refroidissement, effluents

- Audit eau (ACT_AGR_002, immediat)
- Raclage des canalisations (ACT_VIN_002, court_terme)
- Refroidissement en circuit fermé (ACT_VIN_004, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Effluents vinicoles (ACT_VIN_006, moyen_terme)

### Distillerie charentaise en conformité, rien au-delà (distillerie_enregistree)

Distillerie de cognac à quatre alambics de 25 hl, ICPE à enregistrement, 12 000 m³ par an sur forage. Le refroidissement est en circuit fermé et les vinasses sont stockées et épandues selon le plan réglementaire : c'est l'obligation, elle est tenue. Le vin arrive par citerne et circule en tuyaux souples, cuves au nettoyeur haute pression, habitudes orales, effluents de chai traités par une filière dimensionnée. Jamais d'audit, informée des restrictions sans plan, participe aux réunions de l'interprofession.

Maturité 50 % (intermediaire) · concernement 58 % · axes : audit, nettoyage, gestes, restrictions

- Audit eau (ACT_AGR_002, immediat)
- Nettoyages économes (ACT_VIN_001, immediat)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Nettoyage des cuves (ACT_VIN_003, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Cidrerie qui distille son calvados, activité saisonnière (cidrerie_saisonniere)

Cidrerie normande de cinq salariés, brassage des pommes d'octobre à janvier puis distillation du calvados en hiver. Eau du réseau, 1 500 m³ par an, compteur général. Tuyaux souples, nettoyeur haute pression, habitudes orales, pas de refroidissement hors alambic qui tourne sur un groupe à air. Le stockage des effluents sature pendant le brassage, les vinasses sont épandues sans plan à jour. Aucun audit, restrictions non regardées, pas de démarche collective.

Maturité 25 % (novice) · concernement 31 % · axes : comptage, diversification_sources, audit, nettoyage, gestes, effluents, vinasses, restrictions, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyages économes (ACT_VIN_001, immediat)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Nettoyage des cuves (ACT_VIN_003, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Effluents vinicoles (ACT_VIN_006, moyen_terme)
- Filière des vinasses (ACT_VIN_007, moyen_terme)

### Réponses contradictoires (reponses_incoherentes)

Déclare un ratio d'eau par hectolitre mais aucun audit et une consommation nulle, un raclage des canalisations mais des cuves lavées au jet froid, aucun refroidissement mais des vinasses épandues sans plan, pas de pressurage, un plan écrit de restriction mais aucune démarche collective. Le plan ne doit pas être absurde.

Maturité 53 % (intermediaire) · concernement 58 % · axes : audit, nettoyage, vinasses, collectif

- Audit eau (ACT_AGR_002, immediat)
- Réutilisation en cascade (ACT_VIN_005, court_terme)
- Nettoyage des cuves (ACT_VIN_003, moyen_terme)
- Filière des vinasses (ACT_VIN_007, moyen_terme)

## Couverture par les solutions

# Couverture des mesures : vins_spiritueux (seeds + staging)

12 mesures visibles · 4 sans prestataire · 5 sans aide · 4 sans rien

| Mesure | Catégorie | Prestataires liés | Aides liées |
|---|---|---|---|
| ACT_AGR_009 Plan de gestion de l'eau | Sensibiliser et former | aucun | aucune |
| ACT_VIN_001 Nettoyages économes | Sensibiliser et former | Alimpex [formation+conseil_etude] | Financement de la formation des salariés par OCAPIAT au titre du plan de développement des compétences : catalogue régional et offre Boost Compétences |
| ACT_AGR_001 Compteur par usage | Suivre, comprendre et maîtriser ses consommations | aucun | aucune |
| ACT_AGR_002 Audit eau | Suivre, comprendre et maîtriser ses consommations | Alimpex [conseil_etude], Fourage-CTI [conseil_etude], Hydrosol Ingénierie [conseil_etude] | Ressourc'Eau, programme de gestion durable de l'eau (CCI Pays de la Loire et agence de l'eau Loire-Bretagne), Diag Eco-Flux, diagnostic des flux énergie, eau, matières et déchets (ADEME et Bpifrance) |
| ACT_VIN_002 Raclage des canalisations | Améliorer l'efficacité hydrique de ses équipements | Servinox [materiel], Groupe Chalvignac [materiel+travaux], INOXPA France [materiel], Fourage-CTI [materiel+travaux] | aucune |
| ACT_VIN_003 Nettoyage des cuves | Améliorer l'efficacité hydrique de ses équipements | Alimpex [materiel], ACI Entreprise (ACIE, Assistance Champagne Inox Entreprise) [materiel+travaux], HERIC Distribution [materiel+travaux], Bio-Inox [materiel], Fourage-CTI [materiel] | Aide aux investissements des entreprises vitivinicoles (appel à projets FranceAgriMer) |
| ACT_VIN_004 Refroidissement en circuit fermé | Améliorer l'efficacité hydrique de ses équipements | Groupe Chalvignac [materiel+travaux+conseil_etude], Lamouroux [materiel+travaux], A2P Industrie [materiel+travaux] | Aide aux investissements des entreprises vitivinicoles (appel à projets FranceAgriMer) |
| ACT_AGR_006 Récupération d'eau de pluie | Valoriser ou réutiliser les eaux non conventionnelles | EcoRecup (récupération eaux pluviales) [conseil_etude+travaux], Labaronne-Citaf [materiel] | Prêt Vert BPI : Transition écologique |
| ACT_VIN_005 Réutilisation en cascade | Valoriser ou réutiliser les eaux non conventionnelles | aucun | aucune |
| ACT_VIN_006 Effluents vinicoles | Agir sur ses rejets et la qualité de l'eau | HERIC Distribution [materiel+travaux], IFB Environnement [conseil_etude+travaux], Clairéo [conseil_etude+travaux], Labaronne-Citaf [materiel], REVICO [travaux], Comité Champagne (Comité interprofessionnel du vin de Champagne, CIVC) [conseil_etude], Chambre d'agriculture de la Charente [conseil_etude] | Aide aux investissements des entreprises vitivinicoles (appel à projets FranceAgriMer), Aide au traitement des effluents vinicoles (agence de l'eau Seine-Normandie, programme Eau, climat et biodiversité 2025-2030), Mise aux normes des entreprises vinicoles et de distillation : dispositif « Activité vinicole/distillation » (agence de l'eau Adour-Garonne, 12e programme) |
| ACT_VIN_007 Filière des vinasses | Agir sur ses rejets et la qualité de l'eau | IFB Environnement [conseil_etude+travaux], REVICO [travaux], Chambre d'agriculture de la Charente [conseil_etude] | Mise aux normes des entreprises vinicoles et de distillation : dispositif « Activité vinicole/distillation » (agence de l'eau Adour-Garonne, 12e programme) |
| ACT_AGR_010 Démarche collective | Agir sur le grand cycle de l'eau | aucun | aucune |

### Fiches à rédiger

- prestataire pour ACT_AGR_009 (Plan de gestion de l'eau, Sensibiliser et former)
- prestataire pour ACT_AGR_001 (Compteur par usage, Suivre, comprendre et maîtriser ses consommations)
- prestataire pour ACT_VIN_005 (Réutilisation en cascade, Valoriser ou réutiliser les eaux non conventionnelles)
- prestataire pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)
- aide pour ACT_AGR_009 (Plan de gestion de l'eau, Sensibiliser et former)
- aide pour ACT_AGR_001 (Compteur par usage, Suivre, comprendre et maîtriser ses consommations)
- aide pour ACT_VIN_002 (Raclage des canalisations, Améliorer l'efficacité hydrique de ses équipements)
- aide pour ACT_VIN_005 (Réutilisation en cascade, Valoriser ou réutiliser les eaux non conventionnelles)
- aide pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)

### Fiches sans lien vers une mesure du secteur (visibles seulement par repli de catégorie)

- prestataire PREST_VIN_001
- prestataire PREST_VIN_011
- prestataire PREST_VIN_013
- aide AIDE_LAI_002
- aide AIDE_LAI_004

## Prestataires

### PREST_VIN_001 · Station Oenotechnique de Champagne (Sofralab)

bureau_etudes · secteurs ['vins_spiritueux'] · départements ['51', '10'] · statut brouillon

Laboratoire d'analyses et service de conseil oenologique, nom commercial de la société Sofralab, implanté à Magenta et Cormontreuil (Marne) et à Bar-sur-Seine (Aube). Ses oenologues-conseil suivent les vins de la vendange à la mise en bouteille et auditent l'exploitation ; la station vérifie les plans HACCP et l'application des bonnes pratiques d'hygiène, et forme le groupe HACCP de l'entreprise. Prestations sur contrat de conseil ; le site ne présente pas de prestation dédiée aux économies d'eau.

- site_internet : https://www.oenotechnic.com/
- tel : 03 26 51 56 45
- adresse : 79 avenue A. A. Thévenet, 51530 Magenta
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Sofralab&departement=51 (2026-09-28) · « SOFRALAB, siret 57222486300041, siège, 79 AV A A THEVENET 51530 MAGENTA, activité 70.10Z, état administratif A »
  - nom, siret : https://www.oenotechnic.com/mentions-legales-soec/ (2026-09-28) · « SOFRALAB, 79 av, A.A. Thévenet, CS 11031, 51530 MAGENTA. N° SIRET 572 224 863 00041. Nom commercial : Station Oenotechnique de Champagne »
  - contacts, departements : https://www.oenotechnic.com/contact-station-oenotechnique-de-champagne/ (2026-09-28) · « Magenta : 79 avenue A. A. Thévenet 51530 Magenta, +33 3 26 51 56 45. Bar-sur-Seine : 1 bis avenue Paul Portier BP46 10110 Bar-sur-Seine. Cormontreuil : 55, rue du Commerce 51350 Cormontreuil »
  - expertises, description (audit et formation HACCP) : https://www.oenotechnic.com/oenologie-conseil/methode-haccp-oenologie/ (2026-09-28) · « Vérification de l'application de l'hygiène sur l'exploitation en conformité avec le guide des bonnes pratiques. Formation : Découvrir et comprendre la méthode HACCP en oenologie par le groupe HACCP de l'entreprise »
  - expertises, description (conseil oenologique, accès) : https://www.oenotechnic.com/oenologie-conseil/oenologie-conseil/ (2026-09-28) · « nos œnologues-conseil accompagnent les producteurs dans l'élaboration de leurs vins. Les contrats de conseil peuvent inclure : audit de l'exploitation et des vins déjà mis sur le marché »
  - expertises (analyses) : https://www.oenotechnic.com/oenologie-conseil/laboratoires-analyses-oenologiques-soec-champagne/ (2026-09-28) · « plus de 100 000 analyses vinicoles, suivi analytique des vins et conseil technique personnalisé »

### PREST_VIN_002 · Alimpex

bureau_etudes · secteurs ['vins_spiritueux'] · départements ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '2A', '2B', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95'] · statut brouillon

Société alsacienne créée en 1985 pour distribuer des produits d'hygiène aux industries des boissons (distributeur exclusif en France des produits WIGOL), qui accompagne depuis 2022 les industriels dans le pilotage du risque microbiologique et travaille avec le Groupe ICV sur l'hygiène et l'eau en cave. Elle réalise des diagnostics hygiène et eau en cave, anime sur site une masterclass d'une journée qui forme les équipes à l'hygiène et au pilotage des consommations d'eau de nettoyage, et fournit du matériel de nettoyage et de désinfection : canons à mousse, station Olimpe de désinfection par électrolyse sans rinçage (cuves, pressoirs, NEP). Diagnostic et masterclass sur rendez-vous ou sur demande, tarifs non publiés.

- Mesures : ACT_VIN_001 [formation+conseil_etude], ACT_VIN_003 [materiel], ACT_AGR_002 [conseil_etude]
- site_internet : https://www.alimpex.fr
- tel : 03 89 79 89 67
- mail : contact@alimpex.fr
- adresse : 3 rue du Transformateur, 68126 Bennwihr-Gare
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Alimpex&departement=68 (2026-09-28) · « ALIMPEX, siret 33321148000038, siege, 3 RUE DU TRANSFORMATEUR 68126 BENNWIHR, activite 46.69B, etat_administratif A, 1 etablissement ouvert. Écart : les mentions légales du site (https://www.alimpex.fr/mentions-legales/) affichent l'ancien SIRET n°33321148000020 »
  - contacts : https://www.alimpex.fr/nous-contacter/ (2026-09-28) · « 03 89 79 89 67. 3 rue du Transformateur 68126 Bennwihr-Gare. »
  - contacts (mail) : https://www.alimpex.fr/hygiene-en-cave-et-gestion-de-leau/ (2026-09-28) · « NOUS CONTACTER 03 89 79 89 67 contact@alimpex.fr 3 rue du Transformateur 68126 Bennwihr-Gare »
  - description, type, categories, mesures (ACT_AGR_002) : https://www.alimpex.fr/qui-sommes-nous/ (2026-09-28) · « 1985, Mathias HEILWECK fonde Alimpex avec une ambition simple : distribuer des produits d'hygiène de qualité pour les professionnels de l'industrie des boissons. [...] Alimpex distributeur exclusif des produits WIGOL® en France. [...] Des formations techniques, masterclass et accompagnements terrain (audits hygiène, diagnostics eau…) sont également proposés [...] 2022 marque un tournant… Alimpex prend un nouvel élan : celui d'une entreprise qui ne se contente plus de distribuer, mais qui accompagne les industriels dans le pilotage du risque microbiologique. »
  - expertises, mesures (ACT_VIN_001) : https://www.alimpex.fr/nos-solutions/accompagnement-personnalise/masterclass-hygiene-et-management-du-risque/ (2026-09-28) · « La Masterclass Hygiène et management du risque permet de former vos équipes pour mieux maîtriser l'hygiène, le risque microbiologique et les consommations d'eau. [...] Audit des points critiques d'hygiène. Analyses des consommations d'eau [...] Piloter les consommations d'eau liées aux opérations d'hygiène [...] Notre équipe organise une masterclass adaptée à votre activité »
  - expertises, mesures (ACT_VIN_001, ACT_AGR_002), description : https://www.alimpex.fr/partenariat-icv-alimpex-nouvelle-approche-de-lhygiene-oenologique/ (2026-09-28) · « Ce partenariat se traduit par des actions concrètes auprès des caves, domaines et négoces [...] Les équipes Alimpex et ICV pourront intervenir conjointement pour : Audits hygiène et microbiologie, Diagnostic des consommations d'eau, Optimisation des protocoles de nettoyage, Mise en place de plans d'action personnalisés »
  - expertises, description : https://www.alimpex.fr/nos-solutions/outils-daide-a-la-decision/le-diag-conseil-hygiene-et-contamination/ (2026-09-28) · « Le Diag' est un diagnostic hygiène et risque microbiologique réalisé avec un expert Alimpex. [...] Surconsommation d'eau ou de produits [...] PRENDRE RDV »
  - mesures (ACT_VIN_003), description : https://www.alimpex.fr/le-canon-a-mousse-on-valide/ (2026-09-28) · « Le débit d'eau est contrôlé grâce au mousseurs [...] on utilise la juste quantité d'eau nécessaire et pas plus. [...] Gamme de canons à mousse destinés à usage professionnel : Plusieurs modèles disponibles de 24 et 50L »
  - mesures (ACT_VIN_003), expertises, description : https://www.alimpex.fr/la-station-delectrolyse-olimpe-une-desinfection-de-chai-sans-rincage-et-a-volonte/ (2026-09-28) · « La station de désinfection Olimpe, distribuée par Alimpex [...] Cet acide s'emploie [...] sur des sols ou encore des matériels (cuves, pressoirs, tireuses, etc.) et du nettoyage en place (NEP). [...] ne nécessite pas de rinçage »
  - mesures (ACT_VIN_003) : https://www.alimpex.fr/desinfection-sans-intrants-viticulture-olimpe/ (2026-09-28) · « Jusqu'à 30 % d'économies d'eau : La suppression des étapes de rinçage après désinfection permet de réduire significativement la consommation d'eau »
  - description : https://www.alimpex.fr/presentation-dalimpex-par-le-point-eco-alsace/ (2026-09-28) · « Nous touchons divers secteurs tels que les maisons viticoles, la grande distribution, les hôpitaux, en France, Suisse et bientôt en Autriche et Slovénie. »
  - departements, siret (écart) : https://www.alimpex.fr/mentions-legales/ (2026-09-28) · « Les produits et/ou services présentés sur ce site sont ceux distribués en France métropolitaine. [...] SIRET n°33321148000020 »

### PREST_VIN_003 · Servinox

equipementier · secteurs ['vins_spiritueux'] · départements national · statut brouillon

Fabricant d'équipements en acier inoxydable pour l'agroalimentaire, la brasserie, la cosmétique et la chimie, installé à Trappes (Yvelines) avec bureau d'études et atelier de production, qui cite les vins et spiritueux parmi les produits traités en agroalimentaire. Son système de raclage XSR vide les lignes de transfert avec un obus propulsé au gaz ou au liquide, supprime la dilution due à la pousse à l'eau et réduit les volumes d'effluents et les cycles de lavage ; il se complète de vannes multivoies et d'une régulation de vitesse d'obus. Matériel vendu en direct depuis Trappes ou par un réseau de distributeurs en France et à l'international.

- Mesures : ACT_VIN_002 [materiel]
- site_internet : https://www.servinox.com/
- tel : 01 30 16 15 00
- adresse : 34-36 avenue Roger Hennequin, 78190 Trappes
- linkedin : https://www.linkedin.com/company/1286290
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Servinox&departement=78 (2026-09-28) · « SVX (SERVINOX - HPROCESS), siret 39343379200040, siège, 34 AVENUE ROGER HENNEQUIN 78190 TRAPPES, activité 28.14Z, état administratif A »
  - nom, siret, contacts (tel, adresse) : https://www.servinox.com/mentions (2026-09-28) · « Éditeur du site : SERVINOX Adresse : 34-36 avenue Roger Hennequin 78190 Trappes | FRANCE Tél. : +33 (0)1.30.16.15.00 [...] immatriculée au RCS de Versailles sous le numéro B 393 433 792 »
  - type (fabrication française), expertises, mesures (ACT_VIN_002, materiel), contacts (linkedin) : https://www.servinox.com/produit/systeme-de-raclage-xsr (2026-09-28) · « Conception et fabrication française de solutions et équipements en acier inoxydable. [...] destiné à valoriser la masse résiduelle récupérée dans la tuyauterie au moyen d'un obus de raclage. L'obus est [...] propulsé dans la tuyauterie par un fluide de pousse (gaz ou liquide) »
  - description, expertises, mesures (ACT_VIN_002) : https://www.servinox.com/FICHIERS/produit/2/SERVINOX-Environnement-XSR-systeme%20de%20raclage-23.pdf (2026-09-28) · « Suppression du phénomène de dilution induit par la pousse à l'eau sans obus. Réduction des volumes d'effluents à traiter. Réduction de la consommation d'agents nettoyants et des cycles de lavage. [...] complété par des vannes multivoies à passage intégral (MV) [...] platine de régulation de vitesse d'obus (RVO) »
  - type (atelier de production), description : https://www.servinox.com/fabricant-solution-raclage (2026-09-28) · « Elle dispose d'une structure en région parisienne, regroupant un service technico-commercial, une équipe d'ingénieurs au bureau d'études, un atelier de production »
  - secteurs (vins et spiritueux), expertises (soupapes) : https://www.servinox.com/secteurs-activite-agroalimentaire-cosmetique-pharmaceutique-brasserie-chimie/materiel-equipement-industrie-agroalimentaire (2026-09-28) · « définir, concevoir et fabriquer des solutions de raclage, des obus de raclage, des vannes multivoies, [...] des soupapes de protection de cuves pression/dépression [...] lait, yaourts, crème, glaces, fromages, vins & spiritueux »
  - secteurs (références clients du secteur) : https://www.servinox.com/systeme-raclage-industrie (2026-09-28) · « Les entreprises qui nous font confiance : logos nicolas-feuillatte, moet-chandon, hennessy (parmi d'autres) »
  - departements (couverture nationale), description (distribution) : https://www.servinox.com/reseau-service-mondial (2026-09-28) · « Notre réseau distributeurs en France et à l'international »

### PREST_VIN_004 · Groupe Chalvignac

equipementier · secteurs ['vins_spiritueux'] · départements national · statut brouillon

Groupe industriel charentais, siège à Jarnac-Champagne (17), qui conçoit, fabrique et installe du matériel pour le vin, le cognac et les spiritueux à travers ses filiales : Chalvignac Cuves Inox (cuves viticoles inox thermorégulées), Chalvignac Process Distillation (alambics et distilleries, fabriqués dans ses locaux selon son site), Chalvignac Process Thermiques (groupes froids Cryoflex à condenseur à air, conçus et construits par son équipe, thermorégulation et installations sur mesure), ainsi que Sodipia (cuves en fibres polyester) et Metalinox (distribution de matériel viticole). Process Thermiques a réalisé des gares de raclage réversibles qui vident à l'obus une tuyauterie de transfert entre cuves sans perte de produit, le refroidissement des eaux de distillation de plusieurs distilleries et la thermorégulation d'un chai de 32 cuves ; en 2023, Martell a présenté avec le groupe un système de distillation qui récupère l'énergie disponible au niveau du réfrigérant des alambics charentais. Le groupe intervient de l'étude thermique d'une installation à la fabrication, la pose et la maintenance, en France et à l'export.

- Mesures : ACT_VIN_002 [materiel+travaux], ACT_VIN_004 [materiel+travaux+conseil_etude]
- site_internet : https://www.groupe-chalvignac.fr/
- tel : 05 46 49 53 42
- adresse : 49 route de Cognac, 17520 Jarnac-Champagne
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Chalvignac&departement=16 (2026-09-28) · « GROUPE CHALVIGNAC, siren 414192302, siret 41419230200019, siège, LA POUYADE 49 ROUTE DE COGNAC 17520 JARNAC-CHAMPAGNE, activite_principale 25.62B, etat_administratif A, 3 établissements ouverts »
  - contacts (tel, adresse) : https://www.groupe-chalvignac.fr/contactez-nous (2026-09-28) · « CONTACTEZ LE GROUPE CHALVIGNAC. GROUPE CHALVIGNAC 49 Route de Cognac 17520 JARNAC CHAMPAGNE [...] Tel : 05 46 49 53 42 »
  - contacts (site_internet), logo_url, description (filiales) : https://www.groupe-chalvignac.fr/ (2026-09-28) · « SOCIETES DU GROUPE : Cuves inox, Sodipia, Process distillation, Process thermiques, Industries, Simonneau, Maître, Metalinox [...] CUVES INOX VITICOLES, DISTRIBUTION MATERIELS VITICOLES, CUVES FIBRES [...] <img src="https://www.groupe-chalvignac.fr/images/logo.png"> »
  - description (Chalvignac Cuves Inox), expertises (cuves inox thermorégulées), type : https://www.groupe-chalvignac.fr/filiale/1/cuves-inox-thermoregulees (2026-09-28) · « CUVES INOX THERMOREGULEES VITICOLES - INDUSTRIELLES. CONCEPTION, FABRICATION, INSTALLATION. Chalvignac Cuves Inox est aujourd'hui le leader Français des fabricants de cuves viticoles inox. Notre prestation s'étend du conseil à la réalisation. [...] 49 route de Cognac BP 10013 17520 Jarnac-Champagne »
  - description (Chalvignac Process Distillation), expertises (alambics et distilleries) : https://www.groupe-chalvignac.fr/filiale/3/process-de-distillation (2026-09-28) · « CHALVIGNAC PROCESS DISTILLATION. Nous concevons, réalisons, installons et assurons la maintenance de tous systèmes de production de spiritueux haut de gamme : Cognac, Brandy, Armagnac, Whisky, Calvados, Rhum et autres. En France et à l'export. Chalvignac Distillation, ZAC du Mas de la Cour 16100 Chateaubernard »
  - type (fabrication des alambics en France) : http://www.chalvignac-prulho-distillation.fr/fr/alambic-charentais-armagnacais,2.html (2026-09-28) · « Nos alambics sont fabriqués suivant des procédés précis dans nos locaux. Nous réalisons tous types d'alambics en fonction de vos besoins et de votre souhait de production. »
  - mesures (ACT_VIN_004 conseil_etude, travaux, materiel), description (étude thermique, maintenance) : http://www.chalvignac-prulho-distillation.fr/fr/alambics,7.html (2026-09-28) · « Process thermiques : Etude thermique de votre installation et proposition d'amélioration de votre système. Réchauffage et refroidissement des moûts. [...] Thermorégulation. [...] Développement de groupe froid. Conduite et suivi de travaux par nos équipes : Tuyauteurs, frigoristes qualifiés. »
  - description (Chalvignac Process Thermiques à Châteaubernard) : https://www.groupe-chalvignac.fr/filiale/4/process-thermiques (2026-09-28) · « TRAITEMENT THERMIQUE DES LIQUIDES. CONCEPTION, FABRICATION INSTALLATION, MAINTENANCE. CHALVIGNAC PROCESS THERMIQUES [...] mise au point d'un groupe froid totalement innovant [...] ZAC du Mas de la Cour 16100 Chateaubernard »
  - type (fabrication), description (conception, fabrication, installation, maintenance) : http://www.chalvignac-process-thermiques.fr/ (2026-09-28) · « Chalvignac Process Thermiques, concepteur et fabricant d'appareillages de traitement thermique des liquides et d'installation sur mesure [...] Modélisation 3D et fabrication 100% Process Thermique [...] Nos équipes conçoivent, fabriquent et installent vos solutions de traitement thermique des liquides. »
  - expertises (groupes froids Cryoflex), mesures (ACT_VIN_004 materiel), description (groupe froid à condenseur à air) : http://www.chalvignac-process-thermiques.fr/groupes-froids.html (2026-09-28) · « La gamme de groupes froids CRYOFLEX est entièrement conçue et construite par l'équipe Chalvignac Process Thermique. [...] Ventilateur électronique à variation de vitesse intégré. [...] Condenseur avec batterie à ailettes réversible [...] Utilisation pour toutes les conditions ambiantes grâce à un pilotage de la vitesse de ventilation. [...] Proximité et écoute d'un constructeur voué au monde viticole. »
  - mesures (ACT_VIN_002 materiel, travaux ; ACT_VIN_004 materiel, travaux), expertises (raclage), description (références) : http://www.chalvignac-process-thermiques.fr/realisations.html (2026-09-28) · « Etude de cas raclage par obus, LA FINANCIERE, FRANCE. Conseil, Conception - Fabrication - Déploiement et formation sur site [...] transfert de l'intégralité du produit d'une cuve de stockage vers une cuve de traitement [...] sans perte de produit liée au nettoyage de la tuyauterie [...] un jeu de gares de raclage réversibles envoie un obus dans la tuyauterie [...] CARDARELLI, Région bordelaise [...] le groupe froid a permis de finir le traitement. Ceci permettant d'affecter la puissance du groupe froid au maintien en température des cuves de vinification. [...] Thermorégulation d'un chai de 32 cuves en chaud et en froid en Bulgarie. Refroidissement des eaux de distillation de la distillerie Arménia Wine en Arménie. Refroidissement des eaux de distillation de la distillerie Pernod Ricard à Armavir en Arménie. »
  - departements (couverture nationale et export) : https://www.groupe-chalvignac.fr/page/3/international (2026-09-28) · « Le Groupe CHALVIGNAC est présent à l'international dans tous ses domaines d'activités, la distillation et le process thermiques étant cependant les deux secteurs les plus exportés. [...] la construction de cuves inox sur site nous amène à travailler partout dans le monde. »
  - description (retour d'expérience Martell, 2023) : https://www.journalduluxe.fr/fr/lifestyle/cognac-martell-innovation-distillation-bas-carbone (2026-09-28) · « 17 mars 2023. Après plusieurs années de recherche, Martell - associé au groupe Chalvignac spécialisé dans la fabrication de cuves viticoles et alambics - dévoile aujourd'hui un système de distillation qui permet de récupérer et valoriser l'énergie disponible au niveau de l'organe réfrigérant des alambics charentais. »

### PREST_VIN_005 · INOXPA France

installateur · secteurs ['vins_spiritueux'] · départements ['60', '69', '61'] · statut brouillon

Filiale française du fabricant espagnol INOXPA (Banyoles), avec des agences à Chambly (Oise), Villefranche-sur-Saône (Rhône) et Alençon (Orne). Le groupe propose des équipements pour les procédés du vin et des boissons alcoolisées, dont des systèmes de raclage de tuyauterie (SilPig) qui récupèrent le produit restant dans les canalisations avant le nettoyage ; il fabrique aussi des systèmes de nettoyage en place (NEP) et en assure l'installation. Une technique de récupération de produit d'INOXPA a été testée dans 16 caves européennes par le projet Winenvironment coordonné par l'IFV.

- Mesures : ACT_VIN_002 [materiel]
- site_internet : https://www.inoxpa.fr
- tel : 01 30 28 91 00
- mail : isf@inoxpa.com
- adresse : ZAE Les Pointes, Route de Gisors, D105, 60230 Chambly
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Inoxpa%20France&departement=60 (2026-09-28) · « INOXPA FRANCE, siret 49110397400078, siège, D 105 ZAE LES POINTES ROUTE DE GISORS 60230 CHAMBLY, activité 28.29B, état administratif A, 3 établissements ouverts »
  - contacts, departements (agences de Chambly, Villefranche-sur-Saône, Alençon) : https://www.inoxpa.fr/entreprise/reseau/france (2026-09-28) · « Agences commerciales. INOXPA France SAS - Paris, ZAE Les Pointes Route de Gisors - D105 60230 Chambly France Tel.+33 130289100 isf@inoxpa.com. INOXPA France SAS - Lyon, 60 Avenue Théodore Braun 69400 Villefranche sur Saône. INOXPA FRANCE SAS - ALENÇON, CCI Work Alençon 37 rue Demées 61000 Alençon »
  - description (fabricant espagnol) : https://www.inoxpa.fr/entreprise/contact (2026-09-28) · « INOXPA S.A.U., Telers, 60, 17820 Banyoles, Spain, +34 972 57 52 00 »
  - description (secteur du vin, fabrication et installation par le groupe), expertises (NEP), mesures (ACT_VIN_002, SilPig présenté pour les boissons) : https://www.inoxpa.fr/secteurs/boissons (2026-09-28) · « Qu'il s'agisse d'une usine complète, d'un équipement ou de la rénovation d'une installation existante, INOXPA propose des solutions pour la plupart des procédés dans le secteur du vin, de la bière et des autres boissons alcoolisées. SilPig Récupération de Produit : Le système SIL PIG est idéal afin de récupérer un produit restant. Outre la fabrication de ces équipements, INOXPA peut offrir le système de nettoyage NEP ainsi que son installation, son automatisation et sa mise en marche. »
  - expertises, mesures (ACT_VIN_002) : https://www.inoxpa.fr/produits/equipements/recuperation-de-produit (2026-09-28) · « Les systèmes de récupération de produit par raclage sont idéaux pour recycler le produit restant dans une tuyauterie suite au process de pompage. INOXPA propose des solutions de récupération de produit par raclage de tuyauterie pour les industries alimentaire, chimique et pharmaceutique. »
  - mesures (ACT_VIN_002, économie d'eau) : https://www.inoxpa.fr/entreprise/actualite/systemes-pig-de-recuperation-de-produit-des-economies-durables (2026-09-28) · « Le PIG est fabriqué à partir de différents matériaux élastiques (silicone, NBR et EPDM), ce qui lui permet de s'adapter parfaitement à l'intérieur des tuyauteries et de récupérer jusqu'à 98 % du produit excédentaire. Une diminution drastique du volume d'eau et de produits de nettoyage. »
  - description (Winenvironment, 16 caves, IFV) : https://www.vignevin.com/en/european-projects/completed-european-projects/ (2026-09-28) · « 3 eco-innovations tools are tested in 16 cellars: a specific environmental management system, Qualenvi, developed and implemented by the Vignerons Indépendants de France (VIF), a product recovery system technique developed by INOXPA, and an innovative filtration technology by BEGEROW. Coordination: IFV »

### PREST_VIN_006 · ACI Entreprise (ACIE, Assistance Champagne Inox Entreprise)

equipementier · secteurs ['vins_spiritueux'] · départements ['08', '10', '51', '52'] · statut brouillon

Chaudronnerie créée en 1989 (groupe Univitech), dont l'usine d'Œuilly, près d'Épernay, conçoit et fabrique des cuves inox parallélépipédiques sur mesure pour les caves, dans la région Champagne-Ardenne, avec assemblage sur site quand l'accès à la cuverie l'impose. Elle réhabilite aussi les cuves béton par un habillage en inox 316L qui limite l'adhérence du tartre et facilite le nettoyage, réalise des tuyauteries inox de transfert de vin, d'eau et de gaz de l'étude à la mise en service, et assure la maintenance des pompes, agitateurs et matériels de cuverie. Contact par téléphone ou par courriel.

- Mesures : ACT_VIN_003 [materiel+travaux]
- site_internet : https://www.aci-entreprise.fr
- tel : 03 26 58 28 11
- mail : accueil@aci-entreprise.fr
- adresse : La Pierre Qui Tourne, 51480 Œuilly
- Sources :
  - siret (établissement d'Œuilly) : https://recherche-entreprises.api.gouv.fr/search?q=assistance%20champagne%20inox&departement=51&code_postal=51480 (2026-09-28) · « ASSISTANCE CHAMPAGNE INOX ENTREPRISE (A C I E), siren 491011094, établissement 49101109400043, LA PIERRE QUI TOURNE 51480 ŒUILLY, état administratif A, activité 25.29Z, non siège »
  - siret (siège, pour mémoire) : https://recherche-entreprises.api.gouv.fr/search?q=Assistance%20Champagne%20Inox%20Entreprise&departement=51 (2026-09-28) · « ASSISTANCE CHAMPAGNE INOX ENTREPRISE, siret 49101109400050, siège, 1 RUE DE LA NOUE SAINT-NICOLAS 51530 MARDEUIL, état administratif A, 2 établissements ouverts »
  - contacts (adresse, tel) : https://www.aci-entreprise.fr/contact (2026-09-28) · « ACI Entreprise, La Pierre Qui Tourne, 51480 Œuilly, France. Téléphone 03 26 58 28 11 »
  - contacts (mail) : https://www.aci-entreprise.fr/magasin (2026-09-28) · « Notre magasin ACI Inox Entreprise est fermé. Nous vous invitons à nous contacter par mail à accueil@aci-entreprise.fr. »
  - description (création, groupe, usine d'Œuilly), departements (région Champagne-Ardenne) : https://www.aci-entreprise.fr/ (2026-09-28) · « Spécialisée dans la Chaudronnerie Industrielle depuis 1989 dans la région Champagne-Ardenne, la société ACI Entreprise vous propose tout son Savoir-faire dans la conception et la fabrication de Cuve en Inox. Créée en 1989, ACIE, Assistance Champagne Inox Entreprise, groupe Univitech. Situés à Oeuilly, près d'Epernay. Notre usine vous propose tout son savoir-faire dans la conception et la fabrication de cuve inox parallélépipédique sur-mesure. »
  - expertises (cuves inox sur mesure), mesures (ACT_VIN_003, materiel, travaux) : https://www.aci-entreprise.fr/cuve-inox (2026-09-28) · « Fabricant champenois de cuves inox, ACIE vous propose toute une gamme de cuves parallélépipédiques sur-mesure. Pour répondre aux problématiques d'accès en cuverie, nous proposons l'assemblage de vos cuves directement sur site. Spécialisé dans le secteur Vinicole. »
  - expertises (habillage de cuves béton), mesures (ACT_VIN_003, materiel, travaux) : https://www.aci-entreprise.fr/habillage-cuve-beton (2026-09-28) · « Nous vous proposons la réhabilitation complète de vos cuves béton. L'habillage est réalisé à partir de tôle inox 316L. Les cuves en inox sont faciles à nettoyer. Habillage en inox de vos cuves béton [...] limitant l'adhérence des tartres et facilitant le nettoyage. »
  - expertises (tuyauterie inox) : https://www.aci-entreprise.fr/tuyauterie (2026-09-28) · « Nous réalisons tout type de tuyauterie inox, tout diamètre et toute longueur sur transfert de vin, eau et gaz. Nous vous assistons depuis la conception jusqu'à la mise en service. »
  - expertises (maintenance) : https://www.aci-entreprise.fr/maintenance (2026-09-28) · « Nos services techniques prennent en charge vos pompes, agitateurs et matériels de cuverie quelle que soit leur marque. »

### PREST_VIN_007 · HERIC Distribution

installateur · secteurs ['vins_spiritueux'] · départements ['51'] · statut brouillon

Distributeur de matériel vinicole installé à Oiry, dans la Marne, qui équipe les caves en cuverie inox (marques CHALVIGNAC, METALINOX, INOXESS), en cuves de stockage d'effluents en fibre de verre ou PEHD et en matériel de nettoyage et de détartrage (têtes de lavage GEA, centrales de nettoyage Diversey). Pour la cuverie, il établit le cahier des charges, la livre et la met en place, et son équipe de tuyauteurs pose la tuyauterie inox d'eau et de vin des cuveries. Son atelier fabrique aussi des cuves de petit volume (belons, cuves tampon, cuves à liqueur).

- Mesures : ACT_VIN_003 [materiel+travaux], ACT_VIN_006 [materiel+travaux]
- site_internet : https://www.hericdistribution.com
- tel : 03 26 32 37 67
- mail : contact@hericdistribution.com
- adresse : ZI de Oiry, Avenue Pierre et Marie Curie, 51530 Oiry
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Heric%20Distribution&departement=51 (2026-09-28) · « HERIC DISTRIBUTION, siret 47922964300032, siege, ZI DE OIRY 977 AVENUE PIERRE ET MARIE CURIE 51530 OIRY, activite 46.61Z, etat_administratif A »
  - contacts : https://www.hericdistribution.com/contactez-nous (2026-09-28) · « par mail : contact@hericdistribution.com. HERIC Distribution, ZI de Oiry, Avenue Pierre et Marie Curie, 51530 OIRY, Tél. 03 26 32 37 67 »
  - description, expertises, mesures (ACT_VIN_003), logo_url, departements : https://www.hericdistribution.com/cuves/cuves-inox (2026-09-28) · « HERIC Distribution, cuves inox. Etude sur mesure. Chaudronnerie. Marne. Champagne. Ambonnay [...] Etude sur mesure toutes cuves inox, CHALVIGNAC, METALINOX, INOXESS. [...] Un cahier des charges est établi pour définir précisément le descriptif technique qui correspond à vos besoins. »
  - departements, description : https://www.hericdistribution.com/references/cuverie-de-stockage-et-vinification-avize (2026-09-28) · « Cuverie de stockage et vinification à AVIZE. Livraison et mise en place d'une cuverie paralélépipédique à flancs galbés compartimentées et mono compartiment pour stockage et vinification. »
  - expertises, mesures (ACT_VIN_003) : https://www.hericdistribution.com/produits/mat%C3%A9riel-vinicole/d%C3%A9tartrage/t%C3%AAte (2026-09-28) · « Tête de lavage GEA. Tête de lavage rotative : pour un lavage 360°. [...] Nos têtes sont dimensionnées spécifiquement en fonction du dimensionnel de la cuve »
  - mesures (ACT_VIN_003) : https://www.hericdistribution.com/produits/mat%C3%A9riel-vinicole/materiel-de-nettoyage-diversey (2026-09-28) · « Centrale de Nettoyage moyenne pression VOYAGER : autonome pompe intégrée [...] Économie d'eau occasionnée par le gain de temps »
  - expertises, description, mesures (ACT_VIN_003) : https://www.hericdistribution.com/produits/pr%C3%A9station-inox/tuyauterie/tuyauterie-inox (2026-09-28) · « Nos tuyauteries réalisées par notre équipe de tuyauteurs, sont toutes soudées tig sous gaz inerte [...] Applications : induction d'eau, pluvial, vinaire, transfert ou quai de dépotage »
  - mesures (ACT_VIN_003) : https://www.hericdistribution.com/prestation-inox/modification-de-cuves (2026-09-28) · « Nous assurons la fourntiture et pose de tous les équipements sur cuves inox : boitard, piquage de vidande totale »
  - description : https://www.hericdistribution.com/produits/pr%C3%A9station-inox/fabrication-de-cuves (2026-09-28) · « Fabrication en atelier de cuves petits volume, faible série ou unitaire. Dimensionnement sur mesure. belon, bac de soutirage, de decuvage ou de vidange, cuve à liqueur, cuve tampon »
  - expertises, mesures (ACT_VIN_006) : https://www.hericdistribution.com/cuves/cuves-effluents (2026-09-28) · « Construites en fibre de verre ou PEHD qualité alimentaire [...] pour les unités vinicoles ayant l'obligation de stocker leurs rejets pour traitement. Nous assurons la définition technique des produits, le transport et la mise en place. »

### PREST_VIN_008 · Bio-Inox

equipementier · secteurs ['vins_spiritueux'] · départements national · statut brouillon

Fabricant de cuves en acier inoxydable créé en 1995, avec une usine de 10 000 m² et son bureau d'études à Lamonzie-Saint-Martin (Dordogne). Pour les caves, il fabrique des cuves de vinification et de stockage à fond plat en pente ou conique, des cuves autovidantes et une station mobile de nettoyage en place (BIO-CIP, en solution perdue) pour rincer, laver et détartrer cuves et tuyauteries ; il présente sa finition intérieure recuit brillant comme limitant l'adhérence du tartre, donc l'eau et les produits de lavage. Il assure aussi la livraison et l'installation des cuves sur site, la maintenance et la modernisation de cuves existantes.

- Mesures : ACT_VIN_003 [materiel]
- site_internet : https://bio-inox.fr
- tel : 05 53 24 08 47
- mail : contact@bio-inox.com
- adresse : ZA Les Planques, 8 route des Pascarelles, 24680 Lamonzie-Saint-Martin
- linkedin : https://www.linkedin.com/company/bio-inox/
- Sources :
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=Bio-Inox&departement=24 (2026-09-28) · « BIO-INOX, siret 40061311300010, siège, 24680 LAMONZIE-SAINT-MARTIN, activité 25.29Z, etat_administratif A »
  - type, description, departements : https://bio-inox.fr/l-entreprise/ (2026-09-28) · « Depuis 1995, BIO-INOX transforme l'acier inoxydable pour concevoir et fabriquer des cuves [...] Une usine de 10 000 m² [...] Siège social, Services Généraux, Commerciaux, Bureau d'Études regroupés sur un même site au plus près de la production. [...] présents, sur les marchés européens et dans le reste du monde, dans les secteurs : Laitier, Vin & Spiritueux »
  - description, expertises, mesures, departements : https://bio-inox.fr/nos-cuves-vinicoles/ (2026-09-28) · « un acteur connu et reconnu sur l'ensemble des régions vinicoles [...] ces cuves à fond plat en pente ou à fond conique, permettent le décuvage (vin rouge) ou l'écoulement des lies [...] La finition intérieure, Recuit Brillant, réduit l'adhérence des dépôts tartriques sur les parois ce qui génère des économies d'eau, de produits de lavage [...] Station de lavage mobile BIO-INOX a développé une gamme de stations de nettoyage en place (NEP) en solution perdue appelée BIO-CIP® [...] Rincer, Laver, Passiver, Désinfecter, Détartrer, à chaud ou à froid, les cuves et réseaux de tuyauteries »
  - description, expertises : https://bio-inox.fr/services/ (2026-09-28) · « prestations clés-en-main complémentaires à la fabrication des équipements : conditionnement, transport, déchargement, grutage, mise en place des cuves [...] maintenance préventive, de réparation, d'adaptation et de modernisation [...] Adaptations, rénovation, modernisation de cuves existantes »
  - contacts (adresse, tel, mail, linkedin), logo_url : https://bio-inox.fr/situation-contact/ (2026-09-28) · « Adresse : ZA Les Planques 8 route des Pascarelles F-24680 Lamonzie Saint-Martin Tél. : +33 (0)5 53 24 08 47 Email : contact@bio-inox.com ; lien LinkedIn https://www.linkedin.com/company/bio-inox/ »

### PREST_VIN_009 · Fourage-CTI

equipementier · secteurs ['vins_spiritueux'] · départements national · statut brouillon

PME de La Haie-Fouassière (Loire-Atlantique) qui fabrique dans son atelier, représente et distribue du matériel de cave, de process et de conditionnement pour les viticulteurs, négociants et distilleries. Elle fournit, fabrique et monte des réseaux de tuyauterie inox avec épuisement des canalisations par obus de raclage ou balle mousse, fabrique des cuves process dont un bac multifonction NEP/CIP qui récupère et réinjecte les mélanges vin et eau des lignes de filtration et de tirage, et commercialise du matériel de nettoyage (centrales de lavage, canon à mousse, nettoyeur haute pression eau chaude). Son service eau process propose audit sur site, préconisations chiffrées, installation et suivi ; prestations sur devis.

- Mesures : ACT_VIN_002 [materiel+travaux], ACT_VIN_003 [materiel], ACT_AGR_002 [conseil_etude]
- site_internet : https://www.fourage-cti.fr
- tel : 02 40 54 80 70
- mail : contact@fourage-cti.fr
- adresse : Tournebride, BP 37, 44690 La Haie-Fouassière
- linkedin : https://www.linkedin.com/company/fourage-cti-sas/
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Fourage%20CTI&departement=44 (2026-09-28) · « FOURAGE - CTI, siret 50478086700017, siege, TOURNEBRIDE 44690 HAIE-FOUASSIERE (LA), activite 46.69C, etat_administratif A »
  - type, description, departements : https://www.fourage-cti.fr/qui-sommes-nous/ (2026-09-28) · « s'installe alors à la Haie Fouassière afin d'aménager un atelier [...] La société Fourage-CTI fabrique, représente, distribue des matériels [...] L'industrie de la boisson : les négociants, les viticulteurs, les cidriculteurs, les brasseries, les distilleries [...] SECTEUR GÉOGRAPHIQUE [...] National : France métropolitaine et France hors métropole. »
  - type, description : https://www.fourage-cti.fr/atelier/ (2026-09-28) · « Équipés d'un atelier de 800m² [...] Nous effectuons la fabrication des matériels Process et brasserie. [...] Nous effectuons sur site l'installation de nos matériels grâce à nos équipes de techniciens. »
  - type, description, expertises : https://www.fourage-cti.fr/materiel-process/ (2026-09-28) · « La société FOURAGE-CTI est spécialisée dans la fabrication de solutions de process et filtration des liquides alimentaires [...] L'étude, La conception, La fabrication, L'intégration, L'installation sur site [...] CUVES PROCESS Cuve tampon, Bac d'avinage, NEP & CIP »
  - mesures (ACT_VIN_002), expertises, description : https://www.fourage-cti.fr/reseaux/ (2026-09-28) · « Notre activité principale consiste à fournir, fabriquer, monter et tester des réseaux de tuyauterie en acier inoxydable de gamme alimentaire. [...] nous sommes spécialisés dans l'épuisement des canalisations en fin de transfert ou de production. Selon votre exigence qualitative, l'opération peut être effectuée avec un obus de raclage ou une balle mousse. »
  - description, expertises : https://www.fourage-cti.fr/cuve-process/ (2026-09-28) · « Bac multifonction NEP/CIP [...] Sa fonction principale est de recevoir les volumes de vin, ou des mélanges vin/eau, provenant des médiats filtrants, des purges et de la tireuse / remplisseuse. [...] Les réinjections : automatiques des volumes collectés. »
  - mesures (ACT_VIN_003), expertises, description : https://www.fourage-cti.fr/hygiene-accessoires/ (2026-09-28) · « Gamme de matériels d'hygiène : Adoucisseur, Skid sécurisation de l'eau, Centrales de lavage et de désinfection, Centrale de dosage, Centrale mini-mousse, [...] Canon à mousse, [...] Nettoyeur haute pression eau chaude ou eau froide [...] Nous commercialisons tous les matériels associés »
  - mesures (ACT_AGR_002), expertises, description : https://www.fourage-cti.fr/eau-process/ (2026-09-28) · « Eau nécessaire au nettoyage des équipements [...] Comment économiser l'eau? [...] AUDIT (Diagnostic & ANALYSE) Identification des besoins [...] Visite sur site (quantification et qualification) [...] Formulation des pistes d'amélioration CONSEIL (Préconisation & chiffrage) »
  - contacts, logo_url : https://www.fourage-cti.fr/contact/ (2026-09-28) · « Fourage-Cti Tournebride, BP 37, F-44690 LA HAYE FOUASSIERE Tél : +33 (0)2 40 54 80 70 [...] e-mail : contact@fourage-cti.fr ; lien linkedin.com/company/fourage-cti-sas/ ; logo Logo-Fourage-CTI.png »

### PREST_VIN_010 · Lamouroux

equipementier · secteurs ['vins_spiritueux'] · départements ['16', '17', '18', '19', '21', '32', '33', '34', '44', '49', '68', '71', '84', '89', '91'] · statut brouillon

Fabricant girondin de systèmes de thermorégulation vinicole depuis 1988, installé à Beychac-et-Caillau, qui fabrique dans ses ateliers ses armoires de régulation et ses échangeurs serpentins, et propose des modules hydrauliques de distribution des fluides de thermorégulation. Son offre porte sur la thermorégulation des cuves : il fournit et installe des groupes de froid 4 tubes (dont une version glycolée), des kits de production d'eau chaude et froide couplés au groupe d'eau glacée, les réseaux de thermorégulation (dont un réseau froid glycolé) et le raccordement des cuves par vannes pneumatiques. On le contacte directement par son service commercial ou par ses revendeurs partenaires dans d'autres régions viticoles.

- Mesures : ACT_VIN_004 [materiel+travaux]
- site_internet : https://lamouroux.com
- tel : 05 57 80 89 00
- mail : lamouroux@lamouroux.com
- adresse : Z.A. du Bos Plan, 1 route de Canteloup, 33750 Beychac-et-Caillau
- linkedin : https://fr.linkedin.com/company/lamouroux
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Lamouroux&departement=33 (2026-09-28) · « LAMOUROUX SA (MAUMY), siret 34755597100030, siège, ZA DU BOS PLAN 1 ROUTE DE CANTELOUP 33750 BEYCHAC-ET-CAILLAU, activité 43.22B, etat_administratif A »
  - type, description, logo_url, contacts : https://lamouroux.com/ (2026-09-28) · « Depuis 1988, LAMOUROUX propose des solutions de thermorégulation vinicole [...] Chaque produit LAMOUROUX est conçu et fabriqué dans nos ateliers en Gironde, avant d'être installé chez nos clients. ; logo logo_lamouroux_444.png ; lien https://fr.linkedin.com/company/lamouroux »
  - type, description, expertises : https://lamouroux.com/la-societe-lamouroux/ (2026-09-28) · « la conception, la fabrication et l'installation de systèmes de contrôle et de régulation thermique automatisés, dédiés au milieu vinicole [...] seule société française de process de vinification à concevoir, fabriquer, assembler et tester ses armoires de thermorégulation [...] Depuis 1988 Lamouroux fabrique dans ses ateliers des échangeurs [...] Les modules hydrauliques servent à la distribution des fluides de thermorégulation »
  - description, expertises, mesures : https://lamouroux.com/groupe-4-tubes/ (2026-09-28) · « L'intérêt des groupes de froid à 4 tubes réside dans leur capacité à fournir simultanément du froid et du chaud pour la production du process vinicole et la climatisation [...] Groupe 4 tubes glycolé »
  - description, mesures : https://lamouroux.com/locaux-techniques/ (2026-09-28) · « Conception et fabrication dans notre atelier de chaudronnerie inox, de kits pour la production d'eau chaude et froide. [...] LAMOUROUX assure l'installation de ces kits et le couplage avec la chaudière et le groupe d'eau glacée, vers la tuyauterie de thermorégulation. »
  - description, expertises, mesures : https://lamouroux.com/reseau-de-thermoregulation/ (2026-09-28) · « LAMOUROUX conçoit et installe tout type de tuyauterie inox [...] Réseau de thermorégulation + fluides sur cuvier [...] Réseau froid isolé, glycolé »
  - description, expertises, mesures : https://lamouroux.com/raccordement-sur-les-cuves/ (2026-09-28) · « Une installation de maîtrise des températures (froid et chaud) exige l'utilisation de composants fiables. La société LAMOUROUX propose une gamme de vannes pneumatiques capables de contrôler parfaitement l'arrivée d'eau froide ou chaude »
  - contacts, departements : https://lamouroux.com/contact/ (2026-09-28) · « LAMOUROUX S.A.S. Z.A. du Bos Plan 1 route de Canteloup 33750 BEYCHAC-ET-CAILLAU [...] +33 (0)5 57 808 900 lamouroux@lamouroux.com [...] Service commercial thermorégulation Gironde / France [...] Nos partenaires et revendeurs : LIATECH (Charente), PRO METAL INDUSTRIE (Charente-Maritime), CLIMAVIN (Cher), FOUDRERIE FRANCOIS (Corrèze), TONNELLERIE ROUSSEAU (Côte-d'Or), LIATECH EAUZE (Gers), BELLOT (Gironde), TECHNO FROID (Haut-Rhin), HURTHEMEL (Hérault), ACT VINICOLE (Hérault), BUTROT (Loire-Atlantique), BUTROT (Maine-et-Loire), SARL HELIOS GENIE CLIMATIQUE (Saône-et-Loire), FCS 84 (Vaucluse), FROID SERVICE (Yonne), LIATECH (Essonne), GROUPE PALOMBI (Vaucluse) »

### PREST_VIN_011 · FORGEL SA

installateur · secteurs ['vins_spiritueux'] · départements ['51'] · statut brouillon

Entreprise de froid, climatisation et chauffage installée à Bezannes, qui accompagne les domaines de Champagne et de vins effervescents dans leur thermorégulation (fermentations alcoolique et malolactique, débourbage à froid, conservation des vins). Son bureau d'études conçoit le système de thermorégulation des cuveries, du process et des celliers, ses équipes le fournissent, l'installent et le mettent en service, puis en assurent la maintenance sous contrat d'entretien, avec une intervention 24h/24 en période de vendange. Prestations sur devis.

- site_internet : https://www.forgel.com
- tel : 03 26 48 41 41
- mail : message@forgel.fr
- adresse : 16 rue Pierre Salmon, 51430 Bezannes
- linkedin : https://www.linkedin.com/company/forgel
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=FORGEL&departement=51 (2026-09-28) · « FORGEL SA, siret 33558002300059, siege, 16 RUE PIERRE SALMON 51430 BEZANNES, activite 33.20B, etat_administratif A »
  - description, expertises, departements : https://www.forgel.com/le-froid-la-clim-le-chaud/thermoregulation-vinicole/ (2026-09-28) · « Nous accompagnons notamment les domaines de Champagne et de vins effervescents sur Reims, Epernay, Châlons-en-Champagne [...] Nous sommes capables de concevoir un système pour vos cuveries et également pour le process [...] notre travail d'installation se compose de la mise en place des équipements, de leur mise en marche et d'essais [...] différentes options, sous forme de contrats d'entretien. »
  - expertises, description : https://www.forgel.com/wp-content/uploads/2026/05/Flyer_vinicole.pdf (2026-09-28) · « Co-conception de votre équipement de thermorégulation ; Contrôle thermique des fermentations ; Climatisation de cellier ; Intervention & maintenance 24h/24h en période vendange »
  - contacts (site, tel, adresse, linkedin), logo_url : https://www.forgel.com/le-froid-la-clim-le-chaud/thermoregulation-vinicole/ (2026-09-28) · « FORGEL SA, 16 rue Pierre Salmon, 51430 BEZANNES (FRANCE), Tél. : 03 26 48 41 41 ; lien linkedin.com/company/forgel ; logo FORGEL-logo-FORGEL.png »
  - contacts (mail) : https://www.forgel.com/contact/ (2026-09-28) · « Bloc coordonnées de la page contact, lien mail en clair dans le code de la page : title="message@forgel.fr" »

### PREST_VIN_012 · A2P Industrie

installateur · secteurs ['vins_spiritueux'] · départements ['02', '51', '69'] · statut brouillon

Entreprise de froid industriel implantée à Saint-Fons (Rhône), qui conçoit sur mesure des refroidisseurs au propane, des pompes à chaleur et des aéroréfrigérants, les fait construire en Europe par des constructeurs partenaires, puis les installe, les met en service et les entretient. Pour les caves, elle a équipé en 2024 des sites champenois (Épernay, Château-Thierry, Reims) en refroidisseurs et pompe à chaleur pour la thermorégulation de la fermentation, des étapes de production et du dégorgement. Chiffrage et fiche technique par son bureau d'études sur consultation, installation clé en main, contrats de maintenance et location de refroidisseurs.

- Mesures : ACT_VIN_004 [materiel+travaux]
- site_internet : https://a2p.com/
- tel : 04 37 43 20 00
- mail : info@a2p.com
- adresse : Parc d'Activités Lyon Sud, 61 rue Mathieu Dussurgey, 69190 Saint-Fons
- linkedin : https://www.linkedin.com/company/a2p-industrie/
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=A2P%20Industrie&departement=69 (2026-09-28) · « A2P INDUSTRIE, siret 41948899400049, siège, 61 RUE MATHIEU DUSSURGEY 69190 SAINT-FONS, activité 46.69B, état administratif A »
  - contacts : https://a2p.com/contact/ (2026-09-28) · « Parc d'Activités Lyon Sud, 61, rue Mathieu Dussurgey, 69190 Saint Fons, France. Téléphone : 04 37 43 20 00 »
  - contacts (mail, linkedin) : https://a2p.com/ (2026-09-28) · « info@a2p.com ; 04 37 43 20 00 ; Suivez notre actualité sur Linkedin (lien vers linkedin.com/company/a2p-industrie) »
  - type, description : https://a2p.com/a2p-presentation/ (2026-09-28) · « A2P INDUSTRIE distribue et installe des équipements qu'elle conçoit sur-mesure et fait construire exclusivement en Europe par des partenaires certifiés. [...] elle assure la préconisation, la vente, la mise en service et la maintenance d'installations de froid industriel et de thermorégulation. »
  - description, expertises, mesures, secteurs : https://a2p.com/la-thermoregulation-vinicole-en-champagne-un-vrai-savoir-faire/ (2026-09-28) · « 3 exemples de réalisations 2024. 1. Equipement à EPERNAY : Processus de fermentation, 2 refroidisseurs A2P QUARTZ au propane (R290). 2. Equipement à Château-Thierry : Thermorégulation, 1 pompe à chaleur réversible SILEX 375kW. 3. Equipement à Reims : Dégorgement, 1 refroidisseur A2P QUARTZ au propane (R290) »
  - expertises, mesures (materiel) : https://a2p.com/aerorefrigerants-zephir/ (2026-09-28) · « Intégrés dans des systèmes de freecooling accouplés à un refroidisseur A2P QUARTZ, ils permettent de maintenir une température de consigne [...] Les aéroréfrigérants A2P apportent des solutions éco-responsables, économiques et fiables pour la production d'eau froide. »
  - expertises, mesures (materiel) : https://a2p.com/refroidisseurs-r290-condenses-a-air/ (2026-09-28) · « Récupération de chaleur totale ou partielle (condensation à eau montée en série) [...] Module hydraulique complet : pompes avec basculement automatique, cuve intégrée, vase d'expansion, remplissage. Free-cooling intégré ou séparé »
  - description, expertises, mesures (travaux) : https://a2p.com/prestation-globale/ (2026-09-28) · « A2P propose une maîtrise d'œuvre complète d'installations de froid de process [...] l'installation et la mise en service de l'installation de froid, de façon échelonnée pour ne pas arrêter la production [...] Maintenance de l'installation [...] Prêt ou la location de refroidisseurs »
  - departements : https://a2p.com/la-thermoregulation-vinicole-en-champagne-un-vrai-savoir-faire/ (2026-09-28) · « 1. Equipement à EPERNAY : Processus de fermentation [...] 2. Equipement à Château-Thierry : Thermorégulation [...] 3. Equipement à Reims : Dégorgement [...] Depuis 1990, A2P INDUSTRIE implantée à Saint-Fons (69) »

### PREST_VIN_013 · Vision Ingénierie

bureau_etudes · secteurs ['vins_spiritueux'] · départements ['51', '89'] · statut brouillon

Société d'ingénierie et de maîtrise d'oeuvre du bâtiment installée à Bezannes, qui conçoit et suit la construction, l'extension ou la rénovation de cuveries, centres de pressurage, caves et bâtiments de stockage pour des maisons de Champagne et des coopératives. Son ingénierie des fluides intègre le passage du vin au froid et les calculs frigorifiques de la production et du stockage, avec le choix des équipements, et la conception place les points d'eau et les systèmes de récupération des effluents. Mission complète ou par lots séparés, offre personnalisée sans engagement de frais.

- site_internet : https://visioningenierie.fr
- mail : contact@visioningenierie.fr
- adresse : 6 rue Jules Méline, 51430 Bezannes
- linkedin : https://www.linkedin.com/company/vision-ingenierie/
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Vision%20Ingenierie&departement=51 (2026-09-28) · « VISION INGENIERIE, siret 85131544000020, siege, 6 RUE JULES MELINE 51430 BEZANNES, activite 71.12B, etat_administratif A »
  - siret, type : https://visioningenierie.fr/mentions-legales/ (2026-09-28) · « Société spécialisée dans la maitrise d'œuvre et ingénierie du bâtiment tous corps d'état séparés. Contact : contact@visioningenierie.fr Siret : 85131544000020 »
  - description, expertises, departements : https://visioningenierie.fr/ingenierie-viticole-marne/ (2026-09-28) · « Ayant travaillé pour plusieurs Maisons de Champagne et coopératives [...] il convient de tenir compte de différentes données relatives au passage du vin au froid, à la macération, au pressurage, au stockage [...] Nous procéderons également aux calculs frigorifiques nécessaires pour assurer le maintien d'une température adéquate à la production et au stockage de champagne [...] sélectionnera les bons matériaux et équipements de climatisation [...] La disposition des points énergétiques et des points d'eau et des systèmes de récupération des effluents »
  - description : https://visioningenierie.fr/activites/ (2026-09-28) · « Commercial : Offre sans engagement de frais, Mission personnalisée [...] Consultations : Par corps d'états séparés »
  - departements, description : https://visioningenierie.fr/champagne-lallier-2/ (2026-09-28) · « Maîtrise d'Œuvre complète, Lieu OGER (Côtes des Blancs) [...] Construction d'une nouvelle cuverie 2.0 (Extension capacitaire), d'un chai écrin de la marque, rénovation cuverie tirage »
  - departements : https://visioningenierie.fr/domaine-laroche/ (2026-09-28) · « Vins de Chablis DOMAINE LAROCHE, Maîtrise d'Œuvre complète, Lieu CHABLIS (89800), Extension du site de production par la conception et réalisation d'un bâtiment stockage-expéditions »
  - contacts : https://visioningenierie.fr/ (2026-09-28) · « 6 rue Jules Méline, 51430 BEZANNES - contact@visioningenierie.fr ; lien https://www.linkedin.com/company/vision-ingenierie/ »
  - logo_url : https://visioningenierie.fr/ (2026-09-28) · « Logo de l'en-tête chargé en différé, visible dans le code HTML de la page et non dans le texte : <img data-src="https://visioningenierie.fr/wp-content/uploads/2024/02/logo-vision-ingenierie.svg" alt="logo-svg" class="svg logo-img logo-svg lazyload"> »

### PREST_VIN_014 · IFB Environnement

bureau_etudes · secteurs ['vins_spiritueux'] · départements national · statut brouillon

Société d'ingénierie du traitement de l'eau créée en 2005 à Fresles (Seine-Maritime), avec des implantations à Salon-de-Provence et Toulouse, qui intervient notamment dans le secteur viticole. Elle conçoit et réalise des stations de traitement d'effluents clés en main, de l'étude de dimensionnement à la mise en route, puis en assure l'assistance à l'exploitation et la maintenance ; elle a par exemple installé un traitement biologique de vinasses concentrées à la distillerie d'Argeliers et un traitement des effluents de chais et de distillerie à Lassale de Batz (Gers). Elle accompagne aussi le montage des dossiers d'aide de l'agence de l'eau ; prestations sur devis.

- Mesures : ACT_VIN_006 [conseil_etude+travaux], ACT_VIN_007 [conseil_etude+travaux]
- site_internet : https://ifbenvironnement.fr
- tel : 02 35 93 98 91
- adresse : 891 rue du Beau Soleil, 76270 Fresles
- linkedin : https://www.linkedin.com/company/ifb-environnement/
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=IFB%20Environnement&departement=76 (2026-09-28) · « IFB ENVIRONNEMENT, siret 48274039600015, siege, LE BEAU SOLEIL 76270 FRESLES, activite 71.12B, etat_administratif A »
  - description, expertises, type : https://ifbenvironnement.fr/nous-connaitre/ (2026-09-28) · « IFB environnement est une société d'ingénierie [...] la société a naturellement développé ses activités dans le domaine industriel mais également dans les secteurs agroalimentaire, viticole et agricole [...] capable de proposer des installations « clés en main » depuis l'étude de dimensionnement jusqu'à la mise en route du procédé, son exploitation et sa maintenance [...] vous accompagne pour l'élaboration des dossiers type « Aide de l'agence de l'eau ». »
  - mesures (ACT_VIN_007), expertises : https://ifbenvironnement.fr/realisations/traitement-des-effluents-vinicoles-de-la-distillerie-dargeliers/ (2026-09-28) · « La mise en place de notre système Végébio® : traitement biologique par boues activées, nous permet de traiter 22000 m3 de vinasses concentrées par voie biologique. »
  - mesures (ACT_VIN_006), expertises : https://ifbenvironnement.fr/realisations/distillerie-lassale-de-batz-groupe-vivadour-32-projet-2/ (2026-09-28) · « Traitement des effluent vinicoles. Maître d'ouvrage : Ets MAO JB - Lassale de Batz (32). Type d'installation : VégéBio ® - Effluent de chais + distillerie. Capacité : 10 000 m³ / an »
  - departements, contacts, description : https://ifbenvironnement.fr/contact/ (2026-09-28) · « Un déploiement géographique permettant une action sur l'ensemble du territoire national. Fresles (76) Siège social, 891 rue du Beau Soleil 76270 Fresles, 02 35 93 98 91. Salon de Provence (13). Toulouse (31). »
  - logo_url, contacts : https://ifbenvironnement.fr/ (2026-09-28) · « logo-IFB-200.png ; lien linkedin.com/company/ifb-environnement/ ; Siège social 891 rue du Beau Soleil 76270 Fresles 02 35 93 98 91 »

### PREST_VIN_015 · Clairéo

installateur · secteurs ['vins_spiritueux'] · départements national · statut brouillon

Entreprise bordelaise spécialisée dans le traitement des effluents vinicoles, de distillerie et de brasserie par stockage aéré par micro-bullage (lagune, cuves enterrées ou aériennes) puis filtres plantés de roseaux avant rejet au milieu naturel. Elle conçoit le système selon la propriété, le réalise avec sa propre équipe, propose une supervision à distance et des contrats de maintenance annuels ou pluriannuels, et a codéveloppé avec Adequabio l'Effluchai, version modulaire hors sol pour les domaines produisant 150 à 200 m3 d'effluents par an. Contact direct par téléphone, courriel ou formulaire ; une visite gratuite avec rapport d'état est proposée aux caves déjà équipées d'une station, de Clairéo ou d'un autre constructeur.

- Mesures : ACT_VIN_006 [conseil_etude+travaux]
- site_internet : https://www.claireo.io/
- tel : +33 5 35 54 71 60
- mail : contact@claireo.io
- adresse : 39 rue Marceau, 33000 Bordeaux
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Claireo&departement=33 (2026-09-28) · « CLAIREO, siret 84100036700018, siège, 39 RUE MARCEAU 33000 BORDEAUX, etat_administratif A »
  - contacts : https://www.claireo.io/nous-contacter/ (2026-09-28) · « Adresse 39 rue Marceau 33000 Bordeaux France. Téléphone +33 (0)5 35 54 71 60. Email contact@claireo.io »
  - description, expertises, mesures, type : https://www.claireo.io/traitement-des-effluents-vinicoles/ (2026-09-28) · « Systèmes de traitement des effluents Vinicoles, de Distillerie et de Brasserie. Conception, mise en oeuvre, assistance à l’exploitation, maintenance. Nous assurons la conception de votre système de traitement des effluents. Nous réalisons entièrement le système de traitement grâce à notre équipe. »
  - departements : https://www.claireo.io/traitement-des-effluents-vinicoles/ (2026-09-28) · « Le système de traitement des effluents Clairéo est aujourd’hui exploité en France à l’international par plus de 100 propriétés viticoles. »
  - departements : https://www.claireo.io/2022/08/22/derniere-station-de-traitement-des-effluents-vinicoles-mise-en-service-dans-le-vaucluse/ (2026-09-28) · « Clairéo a récemment mis en service une nouvelle station de traitement des effluents vinicoles au sein du Domaine du Coulet Rouge, dans le Vaucluse. »
  - description, expertises : https://www.claireo.io/2026/01/20/nouvelle-station-efflu-chai-2025/ (2026-09-28) · « Déjà partenaires sur les projets de traitement de l’eau, les entreprises Clairéo et Adequabio ont codéveloppé cette solution. « Effluchai est étudié pour des domaines produisant entre 150 et 200 m’ d’effluents vinicoles par an » »
  - description : https://www.claireo.io/traitement-des-effluents-vinicoles/ (2026-09-28) · « Si vous possedez déjà un système de traitement des effluents Clairéo ou d’un autre constructeur, bénéficiez gratuitement d’une visite pour établir un rapport détaillé sur l’état de votre système. »

### PREST_VIN_016 · Labaronne-Citaf

equipementier · secteurs ['vins_spiritueux'] · départements national · statut brouillon

Fabricant de citernes souples installé à Pont-Évêque (Isère), où il produit ses solutions de stockage. Il propose des citernes souples fermées ou semi-enterrées pour stocker les effluents agricoles et vinicoles, ainsi que des citernes de récupération des eaux de pluie raccordées aux gouttières. Accès sur demande de devis auprès de l'entreprise.

- Mesures : ACT_VIN_006 [materiel], ACT_AGR_006 [materiel]
- site_internet : https://www.labaronne-citaf.fr/
- tel : 04 74 31 40 40
- mail : contact@citaf.eu
- adresse : ZI Monplaisir, Rue du Champ de Courses, 38780 Pont-Évêque
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Labaronne-Citaf&departement=38 (2026-09-28) · « LABARONNE-CITAF, siret 34464380400042, siège, ZI DE MONTPLAISIR RUE DU CHAMP DE COURSES 38780 PONT-EVEQUE, activité 22.23Z, état administratif A »
  - contacts : https://www.labaronne-citaf.fr/notre-expertise/ (2026-09-28) · « +33(0)4 74 31 40 40, contact@citaf.eu, ZI Monplaisir, Rue du Champ de Courses, 38780 Pont-Évêque, France »
  - type, description (fabrication en France) : https://www.labaronne-citaf.fr/notre-expertise/ (2026-09-28) · « nous fabriquons nos solutions de stockage souple, dont la principale reste la citerne souple, dans nos locaux situés en région Auvergne Rhône-Alpes, plus précisément à Pont-Évêque, en Isère. Une fabrication 100% Française »
  - expertises, mesures (ACT_VIN_006), description : https://www.labaronne-citaf.fr/vos-besoins-en-stockage/stockage-effluents-agricoles/ (2026-09-28) · « Les citernes souples effluents Labaronne-Citaf a été développée pour répondre aux contraintes réglementaires de stockage d'effluents fermiers et vinicoles sur le long terme. Stockez vos effluents agricoles ou vinicoles. Citerne souple semi-enterrée : jusqu'à 10 000 m3 »
  - expertises, mesures (ACT_AGR_006), description : https://www.labaronne-citaf.fr/vos-besoins-en-stockage/stockage-eau-de-pluie/ (2026-09-28) · « Grâce à un simple système de collecte attaché aux gouttières, vous pourrez stocker l'eau de pluie s'écoulant des toitures ... le nettoyage extérieur »
  - departements : https://www.labaronne-citaf.fr/ (2026-09-28) · « Labaronne-Citaf est représenté dans plus de 40 pays. Nos solutions de stockage souple ont convaincu plus de 55 000 utilisateurs dans le monde. »

### PREST_VIN_017 · REVICO

organisme_technique · secteurs ['vins_spiritueux'] · départements ['16', '17'] · statut brouillon

Centre de traitement des vinasses de la filière Cognac, créé en 1969 par les acteurs de la distillation et détenu par ses actionnaires : c'est une société commerciale (SARL selon ses mentions légales, nature juridique 5202 en SIRENE), pas une coopérative ni un bureau d'études. Les distilleries lui apportent leurs vinasses, qu'il traite dans sa propre usine de Saint-Laurent-de-Cognac (concentration, extraction du tartrate de calcium, méthanisation puis traitement biologique aérobie avant rejet) : il reçoit près de 6 millions d'hectolitres par an, soit 55 % des vinasses de Charente et de Charente-Maritime, et traite aussi, en volumes moindres, des eaux de lavage de chais et des vinasses d'autres spiritueux. Sa prestation est ce service de traitement dans son usine, et non des travaux chez l'exploitant. Le traitement est un service payant, dont l'Agence de l'eau Adour-Garonne situe le coût, rapporté à la bouteille, près de celui d'une étiquette.

- Mesures : ACT_VIN_007 [travaux], ACT_VIN_006 [travaux]
- site_internet : https://www.revico.fr/
- tel : 05 45 82 49 99
- adresse : 2, rue des Fosses de Jarnouzeau, 16100 Saint-Laurent-de-Cognac
- linkedin : https://fr.linkedin.com/company/revico-snc
- Sources :
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=Revico&departement=16 (2026-09-28) · « REVICO, siren 906930029, siret 90693002900010, siège, LD LE BUISSON 16100 SAINT-LAURENT-DE-COGNAC, nature juridique 5202, activité 38.21Z, état administratif A »
  - siret, description (forme juridique) : https://www.revico.fr/mentions-legales/ (2026-09-28) · « REVICO, SARL immatriculée au Registre du Commerce et des Sociétés d'Angoulême sous le numéro 906930029, ayant son siège social au 2 rue des Fosses de Jarnouzeau 16100 Saint-Laurent-de-Cognac »
  - contacts (tel, adresse) : https://www.revico.fr/contact/ (2026-09-28) · « appeler notre standard : +33 (0)5 45 82 49 99. 2, rue des Fosses de Jarnouzeau 16100 Saint-Laurent-de-Cognac »
  - contacts (linkedin) : https://www.revico.fr/ (2026-09-28) · « Suivez notre actualité Linkedin (lien https://fr.linkedin.com/company/revico-snc en pied de page) »
  - description (origine, volumes, actionnaires), mesures (ACT_VIN_007) : https://www.revico.fr/qui-sommes-nous/ (2026-09-28) · « les distillateurs de la filière Cognac [...] décident de créer une entité de traitement exclusivement dédiée à cet effluent. [...] l'entreprise reçoit annuellement près de 6 millions d'hectolitres de vinasses, soit 55% du volume total des vinasses charentaises produites. »
  - expertises, description (procédé), mesures (ACT_VIN_007, ACT_VIN_006) : https://www.revico.fr/expertise/traitement/ (2026-09-28) · « Le couplage méthanisation + traitements biologiques aérobies permet une élimination des polluants organiques de la vinasse à hauteur de 99% avant le rejet en milieu naturel. [...] REVICO dépollue également, dans des volumes moindres, les eaux de lavage des chais de vinification, les vinasses de whisky, les vinasses de rhum »
  - departements, description (création, volumes, service payant), mesures (ACT_VIN_007) : https://eau-grandsudouest.fr/revico-voie-economie-circulaire-pour-eau (2026-09-28) · « Fondée en 1969, la société n'a qu'un seul objectif : traiter les vinasses de la filière Cognac [...] en traitant 55 % des vinasses du territoire Charente et Charente-Maritime [...] pour les exploitants, le coût du service à la bouteille est proche de celui d'une étiquette. »
  - type (laboratoire et R&D propres), description (usine) : https://www.revico.fr/recherche-developpement/ (2026-09-28) · « REVICO est un centre de valorisation des vinasses charentaises [...] Chaque année, l'équipe R&D teste au laboratoire, à l'échelle pilote ou à l'échelle semi-industrielle des procédés innovants. »
  - departements, description (distillateurs charentais) : https://www.charente-maritime.gouv.fr/content/download/36834/232955/file/Note%20synth%C3%A9se_17.pdf (2026-09-28) · « distillateurs de l'aire d'appellation d'origine contrôlée Cognac exploitants en Charente et en Charente-Maritime [...] REVICO, installation de retraitement via la méthanisation située à St Laurent de Cognac, qui reçoit environ la moitié des vinasses charentaises en volume. »

### PREST_VIN_018 · Hydrosol Ingénierie

bureau_etudes · secteurs ['vins_spiritueux'] · départements ['84', '30'] · statut brouillon

Bureau d'études en hydrogéologie, hydraulique et environnement créé en 1989 à Cavaillon, dont le siège est à Cheval-Blanc (Vaucluse). Pour les caves, il a réalisé le diagnostic des consommations d'eau de la cave coopérative Terres Valdèze (ICPE), bâtiment par bâtiment et machine par machine pendant les vendanges (article publié en septembre 2024), avec comparaison aux Meilleures Techniques Disponibles et plan d'action de réduction ; il monte aussi les dossiers ICPE (régime de classement, déclaration, enregistrement, autorisation) et assure la veille réglementaire environnementale. Intervention sur demande, par téléphone, par mail ou par le formulaire de contact du site.

- Mesures : ACT_AGR_002 [conseil_etude]
- site_internet : https://www.hydrosol.fr/
- tel : 04 90 71 33 26
- mail : hydrosol.paca@hydrosol.fr
- adresse : 373 B route de Cavaillon, 84460 Cheval-Blanc
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Hydrosol%20Ingenierie&departement=84 (2026-09-28) · « HYDROSOL INGENIERIE, siret 35127557300050, siège, 373 B ROUTE DE CAVAILLON 84460 CHEVAL-BLANC, activité 71.12B, état administratif A, 1 établissement ouvert »
  - nom, siret, contacts (tel, mail, adresse) : https://www.hydrosol.fr/mentions-legales/ (2026-09-28) · « Hydrosol Ingénierie, 373 B route de Cavaillon, 84460 CHEVAL BLANC. SIRET 351275573 000 50. Adresse électronique : hydrosol.paca@hydrosol.fr. Téléphone : 04 90 71 33 26 »
  - mesures (ACT_AGR_002 conseil_etude), expertises (diagnostic), description : https://www.hydrosol.fr/economies-deau-en-cave-vinicole-classee-icpe/ (2026-09-28) · « la cave coopérative TERRES VALDEZE est une ICPE. HYDROSOL est intervenu sur site, pendant les vendanges, afin d'identifier les points de consommation d'eau dans les différents process de vinification. Après étude des consommations d'eau dans chaque bâtiment et au niveau des différentes machines, nous avons comparé leur consommation à celles usuellement rencontrées dans le secteur et leurs pratiques aux Meilleures Techniques Disponibles. Cette étude détaillée a permis de dresser un plan d'action. Article daté du 2024-09-06 »
  - expertises (ICPE, veille), description, departements : https://www.hydrosol.fr/nos-competences/environnement/ (2026-09-28) · « Que vous soyez en Occitanie proche de notre agence du Gard ou en PACA à proximité de notre agence de Cavaillon en Vaucluse, HYDROSOL Ingénierie vous accompagne dans votre veille réglementaire environnementale, vous aide à monter vos dossiers administratifs »
  - expertises (ICPE), description : https://www.hydrosol.fr/entreprises-2/ (2026-09-28) · « HYDROSOL Ingénierie aide les entreprises à mettre en place la réglementation des ICPE. Réaliser vos dossiers de demande d'autorisation au titre des ICPE ; réalisation de vos dossiers de déclaration ou de demande d'enregistrement ; comparaison de vos pratiques aux meilleures techniques disponibles »
  - expertises (hydrogéologie, forages), description (création 1989, Cavaillon) : https://www.hydrosol.fr/accueil/le-bureau-d-etudes/ (2026-09-28) · « Depuis sa création en Vaucluse à Cavaillon dans la région PACA en 1989. Un bureau a été créé en 2015 à Nîmes dans le Gard. Le bureau d'études intervient pour les études techniques et réglementaires dans la réalisation de forages et le suivi de nappes phréatiques »
  - logo_url : https://www.hydrosol.fr/ (2026-09-28) · « hydrosol-logotype-2015-horizontal.png (logo affiché dans l'en-tête du site) »

### PREST_VIN_019 · Comité Champagne (Comité interprofessionnel du vin de Champagne, CIVC)

organisme_technique · secteurs ['vins_spiritueux'] · départements ['51', '10', '02', '52', '77'] · statut brouillon

Interprofession de la filière Champagne, active depuis 1941, qui réunit vignerons et maisons de l'aire d'appellation (Marne, Aube, Aisne, Haute-Marne, Seine-et-Marne). Le Comité conseille lui-même les établissements vinicoles sur la collecte et le traitement des effluents, la gestion des résidus de vinification, le fonctionnement des stockages aérés et la réglementation, et, dans le cadre du contrat « vigne, vin et qualité de l'eau en Champagne » passé avec l'agence de l'eau Seine-Normandie pour 2013-2018, il a aussi assisté les élaborateurs dans la constitution de leurs dossiers d'aide (assistance documentée pour ce seul contrat) ; dans le bilan des aides signées par l'agence en juin 2025, plusieurs aides à des établissements vinicoles pour la collecte et le stockage des effluents ont un intitulé commençant par « CIVC - ». Les modalités d'accès au conseil ne sont pas publiées en accès libre, la revue technique qui les détaille étant réservée aux vignerons et maisons ressortissants du Comité.

- Mesures : ACT_VIN_006 [conseil_etude]
- site_internet : https://www.champagne.fr
- tel : 03 26 51 19 30
- adresse : 5, rue Henri Martin, CS 30 135, 51204 Épernay
- Sources :
  - siret, type : https://recherche-entreprises.api.gouv.fr/search?q=Comite%20interprofessionnel%20du%20vin%20de%20Champagne&departement=51 (2026-09-28) · « COMITE INTERPROFESSIONNEL DU VIN DE CHAMPAGNE (CIVC), siret 78038582900012, siège, 5 RUE HENRI MARTIN 51200 EPERNAY, nature juridique 8470, activité 94.11Z, état administratif A »
  - type : https://xml.insee.fr/schema/cj-enum.html (2026-09-28) · « 8470 : Centre technique industriel ou comité professionnel du développement économique »
  - contacts, siret : https://www.champagne.fr/fr/mentionslegales (2026-09-28) · « Éditeur Comité interprofessionnel du vin de Champagne (Comité Champagne) 5, rue Henri Martin CS 30 135 51204 Épernay Tél. : +33 (0)3 26 51 19 30 [...] SIRET : 78038582900012 »
  - description : https://www.champagne.fr/fr/approfondir/filiere-champagne/comite-champagne (2026-09-28) · « Le Comité Champagne est l’interprofession de la filière Champagne. C’est l’une des premières interprofessions viticoles à avoir été créée. Depuis 1941, il assure l’intérêt commun des Vignerons et Maisons de Champagne »
  - departements : https://www.champagne.fr/en/about-champagne/a-great-blended-wine/the-champagne-region (2026-09-28) · « The area under vine extends across five départements: Marne (66% of the area under vine), Aube (23% of the area under vine), Aisne (10% of the area under vine), Haute-Marne, Seine-et-Marne. »
  - description, expertises, mesures (dossiers d'aide : contrat 2013-2018) : https://levigneronchampenois.comitechampagne.fr/environnement/effluents-vinicoles (2026-09-28) · « L'objet du nouveau contrat (2013-2018) a donc été orienté vers l'accompagnement des élaborateurs dans la gestion des effluents vinicoles [...] au travers de missions de conseil et d'assistances techniques, mais aussi administratives, pour la constitution des dossiers de demande d'aides financières. [...] Depuis une trentaine d'années, le Comité Champagne accompagne les professionnels désireux d'avoir un conseil technique sur la gestion des effluents. [...] Collecte et traitement des effluents, gestion des résidus de vinification, optimisation du fonctionnement des stockages aérés, et contexte réglementaire font partie du conseil dispensé auprès des établissements vinicoles. »
  - description : https://www.eau-seine-normandie.fr/sites/public_file/deliberations-commission-des-aides/2025/Bilan_des_aides_signees_juin_2025.pdf (2026-09-28) · « Texte extrait du PDF (pages 2, 3, 13, 14, 32) : « 2025 1110449-1 13 110 217,00 110 217,00 0030479E SOCIETE CHAMPENOISE DES BARONS ET ASSO 44830720700028 CIVC - Réseaux collecte effluents vinicoles DVM 51 » ; « 2025 1111573-1 13 53 436,00 53 436,00 0031032F CHAMPAGNE ROGER POUILLON & FILS 40148426600028 CIVC - Amélioration collecte effluents vinicoles DVM 51 » ; « 2025 1112972-1 13 11 386,00 11 386,00 0030917F BCT DE REKENEIRE 90164690100016 CIVC - Amélioration stockage-épandage vinicole DVM 02 » ; « 2025 1112978-1 13 123 395,00 123 395,00 0030929U SOCIETE AGRO-VITICOLE CHARBAUT 42337337200014 CIVC - Amélioration gestion effluents vinicoles DVM 51 » ; « 2025 1114325-1 13 66 656,00 66 656,00 0033072Y SCV DES VIGNERONS DE BOUZY AU BOUQUET 78036319800018 CIVC - Amélioration collecte effluents vinicoles DVM 51 » »

### PREST_VIN_020 · Chambre d'agriculture de la Charente

chambre_consulaire · secteurs ['vins_spiritueux'] · départements ['16'] · statut brouillon

Établissement public consulaire au service des exploitants de la Charente. Pour les viticulteurs, il réalise le plan d'épandage des effluents viti-vinicoles : rendez-vous sur l'exploitation pour recueillir volumes d'effluents, parcellaire et assolement, prélèvements de sol ou de vinasses si nécessaire, puis remise du plan avec les cartes des îlots épandables. Prestation d'environ un mois, sur devis.

- Mesures : ACT_VIN_006 [conseil_etude], ACT_VIN_007 [conseil_etude]
- site_internet : https://charente.chambres-agriculture.fr/
- tel : 05 45 24 49 49
- adresse : ZE Ma campagne, 66 impasse Niépce, 16016 Angoulême Cedex
- Sources :
  - description, expertises, mesures, categories : https://charente.chambres-agriculture.fr/etre-accompagne-1/nos-prestations/detail-de-la-prestation/plan-depandage-des-effluents-vinicoles (2026-09-28) · « Être aux normes vis-à-vis des contraintes d'épandages des effluents viti-vinicoles [...] Rendez-vous préalable pour recueillir les informations nécessaires à la réalisation du plan (volume d'effluents, parcellaire, assolement, prélèvement de sol et/ou vinasses si nécessaire) [...] Durée : un mois. Tarif : Sur devis »
  - contacts, departements : https://charente.chambres-agriculture.fr/etre-accompagne-1/nos-prestations/detail-de-la-prestation/plan-depandage-des-effluents-vinicoles (2026-09-28) · « Chambre d'agriculture de la Charente. ZE Ma campagne - 66 impasse Niépce 16016 Angoulême Cedex. Tél. 05 45 24 49 49 »
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=181600016 (2026-09-28) · « CHAMBRE DEPARTEMENTALE D'AGRICULTURE, siret 18160001600024, siège, MA CAMPAGNE ALLEE DES CHAUMES DE CRAGE 16000 ANGOULEME, nature juridique 7381, etat_administratif A »

## Aides

### AIDE_VIN_001 · Aide aux investissements des entreprises vitivinicoles (appel à projets FranceAgriMer)

subvention · secteurs ['vins_spiritueux'] · départements national · agences toutes · statut brouillon

Financeur : FranceAgriMer (plan stratégique national de la PAC, FEAGA) · 30 % des dépenses éligibles pour une PME, 15 % pour une ETI, 7,5 % pour une grande entreprise, bonifiés de 5, 2,5 ou 1,25 points pour les investissements environnementaux (bonifications non cumulables), soit au plus 35 %, 17,5 % ou 8,75 % · plafond Dépenses éligibles d'au moins 10 000 € par demande. Plafonds par poste : 800 €/m² en construction, 400 €/m² en rénovation, 40 000 € pour l'aménagement du caveau et de la salle de dégustation, études limitées à 10 % des dépenses

Subvention européenne gérée par FranceAgriMer pour moderniser l'outil de vinification, de la réception des vendanges à la commercialisation des vins, conditionnement et stockage compris. Plusieurs équipements classés « économie d'eau » y reçoivent la bonification « investissements environnementaux » : nettoyage en place (NEP), cuves inox à finition recuit brillant, électropolie ou polimiroir, cuves béton à revêtement époxy et rénovation de leur revêtement, pressoirs à lavage intégré, équipements de traitement de l'eau par UV, ultrafiltration, nanofiltration ou osmose inverse, et aménagement des sols associant forme de pente, caniveaux et revêtement. Le dégrilleur automatique, classé « réduction des déchets », est aussi bonifié : il retient les matières organiques avant les eaux usées. Les groupes de froid, la maîtrise des températures et les systèmes de récupération de chaleur sont également éligibles.

Éligibilité : Entreprises vitivinicoles, individuelles ou sociétaires, qui produisent ou commercialisent des produits de la vigne (vins, vins de liqueur, mousseux, moûts), ainsi que les organisations de producteurs, associations de producteurs à activité lucrative et organisations interprofessionnelles. Il faut un numéro CVI ou un agrément d'entrepositaire agréé, un SIRET actif et des obligations sociales à jour au 31 décembre 2025 ; un exploitant individuel doit être agriculteur à titre principal et inscrit à l'AMEXA. Sont notamment exclus les SCI et GFA non exploitants, les syndicats, les indivisions, les œnothèques et bars à vin, les commerces de détail de boissons en magasin spécialisé, les producteurs de raisins qui ne vinifient pas et les entreprises en difficulté. Les investissements doivent être neufs, réalisés en France, et ne pas renouveler à l'identique un équipement existant.

- Mesures : ACT_VIN_003, ACT_VIN_004, ACT_VIN_006
- **info** : L'appel à projets 2026 est clos : les dépôts étaient ouverts du 10 février au 24 mars 2026 à midi, avec une période supplémentaire du 27 mars au 3 avril 2026 à midi après une panne du téléservice. Un appel à projets avait déjà été ouvert en 2025 : surveillez la page de FranceAgriMer pour le prochain (situation au 28 septembre 2026).
- **avertissement** : L'aide ne concerne que les produits de la vigne (vins, vins de liqueur, mousseux, moûts, vinaigre de vin) et les investissements spécifiques à leur production, de la réception des vendanges à la commercialisation. Les eaux-de-vie ne figurent pas dans cette liste : les alambics et le refroidissement d'une distillerie ne sont pas finançables par ce dispositif. Pour le refroidissement, seuls les groupes de froid et la maîtrise des températures des vendanges, moûts et vins en cave sont éligibles.
- **avertissement** : Tout début d'exécution avant la date d'ouverture de l'appel à projets (arrhes, acompte, avance, facture payée) rend le devis ou la facture concerné inéligible. Les études préalables et les devis payants ne comptent pas comme début d'exécution.
- **avertissement** : Pour les effluents, seul le dégrilleur automatique est finançable (avec le broyeur de rafles) : les équipements de stockage et de traitement des effluents sont exclus, tout comme les surfaces de bâtiment dédiées au stockage de marc ou d'autres déchets et les aires de lavage extérieures. Sont aussi exclus les adoucisseurs et systèmes de filtration d'eau qui ne sont pas accessoires d'un investissement éligible, les réseaux d'eau hors projet de construction, et les nettoyeurs autres que les nettoyeurs à eau ou à vapeur spécifiques aux fûts et aux cuves et le NEP.
- **avertissement** : La construction et la rénovation de bâtiments, dont l'aménagement des sols en pente avec caniveaux, ne sont éligibles que pour les demandeurs bénéficiant de la bonification « nouvel installé » ou « projet structurant ». Cette restriction ne vise pas la création ou la rénovation d'un caveau de vente de vin, qui relève de règles propres.
- **avertissement** : Si les demandes dépassent l'enveloppe (95 millions d'euros en 2026), un coefficient stabilisateur réduit toutes les aides, sauf celles des nouveaux installés. En 2025, ce coefficient a été de 65,32 %. Aucune autre aide financée par l'Union européenne ne peut compléter le projet, sous peine de rejet.
- **info** : La demande se dépose sur le téléservice Viti-investissement après inscription au portail des téléservices de FranceAgriMer, qui demande un délai de validation. Une demande restée en statut provisoire n'est pas déposée. Pour l'appel 2026, la demande de paiement est à déposer avant le 15 mai 2028. Pour bénéficier de la bonification, les dépenses environnementales doivent être isolées sur les devis et factures.
- **ressource** : Page de l'appel à projets 2026 sur le site de FranceAgriMer (https://www.franceagrimer.fr/aides/investissement-vitivinicole-appel-projets-2026)
- **ressource** : Décision INTV-GPASV-2026-06 et ses annexes (liste des dépenses éligibles, dépenses inéligibles, investissements environnementaux) (https://www.franceagrimer.fr/sites/default/files/2026-02/INTV-GPASV-2026-06_AAP26%20aide%20aux%20investissements%20vitivinicole%20et%20annexes.pdf)
- **ressource** : Téléservice Viti-investissement (https://www.franceagrimer.fr/e-services/viti-investissement)
- **ressource** : Annuaire des services territoriaux de FranceAgriMer pour l'investissement vitivinicole (https://www.franceagrimer.fr/sites/default/files/2026-02/Annuaire%20_Services%20Territoriaux%20FAM_investissement%20viti.pdf)
- Sources :
  - financeur : https://www.franceagrimer.fr/sites/default/files/2026-02/INTV-GPASV-2026-06_AAP26%20aide%20aux%20investissements%20vitivinicole%20et%20annexes.pdf (2026-09-28) · « Objet : programme de soutien aux investissements des entreprises du secteur vitivinicole dans le cadre du plan stratégique national. Article 1 : Cette aide financée par le Fonds européen agricole de garantie (FEAGA) ... FranceAgriMer, en tant qu'organisme payeur des aides FEAGA. »
  - taux : https://www.franceagrimer.fr/sites/default/files/2026-02/INTV-GPASV-2026-06_AAP26%20aide%20aux%20investissements%20vitivinicole%20et%20annexes.pdf (2026-09-28) · « Article 3, tableau 2 : PME 30% +5% ... 35% ; ETI 15% +2,5 ... 17,5% ; GE 7,5% +1,25% ... 8,75%. Les bonifications ne sont pas cumulables. »
  - plafond : https://www.franceagrimer.fr/sites/default/files/2026-02/INTV-GPASV-2026-06_AAP26%20aide%20aux%20investissements%20vitivinicole%20et%20annexes.pdf (2026-09-28) · « Article 2.2.3 : Le montant total de dépenses éligibles au sein de la demande d'aide doit être supérieur ou égal à 10 000 €. Tableau 1 : construction 800 €/m², rénovation 400 €/m². Article 2.2.2 : aménagement des caveaux plafonné à 40 000 € ; frais d'études plafonnés à 10 %. »
  - description, eligibilite : https://www.franceagrimer.fr/sites/default/files/2026-02/INTV-GPASV-2026-06_AAP26%20aide%20aux%20investissements%20vitivinicole%20et%20annexes.pdf (2026-09-28) · « Article 2.1.1 : entreprises vitivinicoles ... produisant ou commercialisant les produits visés à l'annexe VII, partie II ... disposer d'un numéro CVI ou d'un agrément EA ; disposer d'un numéro SIRET actif ; être à jour de leurs obligations sociales ... au 31 décembre 2025 ; exploitants à titre individuel : être agriculteur à titre principal, être inscrit à l'AMEXA. Article 2.1.2 : ne sont pas éligibles les SCI non exploitantes et GFA non exploitants, les syndicats, les indivisions, les œnothèques et bars à vin, les commerçants de détail de boissons en magasin spécialisé, les producteurs de raisins qui ne vinifient pas, les entreprises en difficulté. Article 2.2.1 : biens neufs, ne pas renouveler à l'identique. »
  - mesures (ACT_VIN_003, ACT_VIN_004, ACT_VIN_006), description : https://www.franceagrimer.fr/sites/default/files/2026-02/INTV-GPASV-2026-06_AAP26%20aide%20aux%20investissements%20vitivinicole%20et%20annexes.pdf (2026-09-28) · « Annexe 5 : NEP ... Economie d'énergie et économie d'eau ... permet d'optimiser les consommations en eau ; Cuves inox recuit brillant, électropolies ou polimiroir ... économies d'eau ; Cuves béton avec revêtement epoxy ; Equipement de traitement de l'eau par UV, ultrafiltration, nanofiltration ou osmose inverse ... Economie d'eau ; Dégrilleur automatique Réduction des déchets : Permet d'éliminer les déchets des eaux usées ; Aménagement du sol (forme de pente, caniveaux, couverture) ... réduction de la consommation d'eau ; Système de récupération d'énergie ou de chaleur. Annexe 1 : Groupes de froid ; Maîtrise des températures des vendanges, moûts et vins. »
  - infos_complementaires (exclusions) : https://www.franceagrimer.fr/sites/default/files/2026-02/INTV-GPASV-2026-06_AAP26%20aide%20aux%20investissements%20vitivinicole%20et%20annexes.pdf (2026-09-28) · « Annexe 2, point 20 : Les réseaux (eau, oxygène, azote, SO2...) non inclus dans un projet de construction de bien immeuble ; point 26 g : Les équipements de traitement des déchets et effluents ... hors broyeurs à rafles et dégrilleurs automatiques ; p : adoucisseurs et systèmes de filtration d'eau ; q : nettoyeurs et laveurs hors Nettoyeurs à eau ou à vapeur spécifiques aux fûts et aux cuves et Nettoyage en place. Annexe 2bis : 8. Stockage de marc ou autres déchets ; 10. Aire de lavage extérieure. »
  - infos_complementaires (début d'exécution, bâtiments, enveloppe, cumul, démarche) : https://www.franceagrimer.fr/sites/default/files/2026-02/INTV-GPASV-2026-06_AAP26%20aide%20aux%20investissements%20vitivinicole%20et%20annexes.pdf (2026-09-28) · « 5.3 : Tout début d'exécution du projet antérieur à cette date rend tout le devis ou la facture concerné inéligible. 2.2.2 a) Construction de biens immeubles (hors création ou rénovation d'un caveau de vente de vin) et b) Rénovation de biens immeubles (hors création ou rénovation d'un caveau de vente de vin) : éligibilité restreinte aux demandeurs bénéficiant des bonifications définies aux articles 3.2.1 et 3.2.2. 5.2 : enveloppe fixée à 95 millions d'euros ... coefficient stabilisateur ... à l'exception des demandes avec bonification nouvel installé. Article 4 : Aucune autre aide financée par l'Union européenne ne peut compléter le financement. 6.1 : demandes de paiement avant le 15 mai 2028. »
  - infos_complementaires (calendrier 2026, appel clos) : https://www.franceagrimer.fr/aides/investissement-vitivinicole-appel-projets-2026 (2026-09-28) · « Une période supplémentaire de dépôt des demandes d'aide est ouverte du vendredi 27 mars 2026 midi au vendredi 3 avril 2026 midi. / La date limite de dépôt des demandes d'aide accompagnées de toutes les pièces justificatives est fixée au 24 mars 2026 à 12h00 (midi). »
  - infos_complementaires (appel 2025, coefficient stabilisateur) : https://www.franceagrimer.fr/aides/investissement-vitivinicole-appel-projets-2025 (2026-09-28) · « L'aide estimée s'est éleve à 161 M€ (AAP 2024 : 179 M€) => un coefficient stabilisateur de 65,322423% a été appliqué pour respecter l'enveloppe fixée à 110 M€ »
  - infos_complementaires (distillation hors champ) : https://www.franceagrimer.fr/sites/default/files/2026-02/INTV-GPASV-2026-06_AAP26%20aide%20aux%20investissements%20vitivinicole%20et%20annexes.pdf (2026-09-28) · « Article 2.2.1 a) : Les investissements éligibles sont utilisés pour la production de vin, pour les étapes allant de la réception des vendanges à la commercialisation. Annexe 6 : Les catégories de produits de la vigne sont celles figurant aux points 1) à 17) (vin ... vinaigre de vin). Annexe 2, point 26 : Les investissements non spécifiques à la production des produits visés à l'annexe VII, partie II. »

### AIDE_VIN_002 · Aide au traitement des effluents vinicoles (agence de l'eau Seine-Normandie, programme Eau, climat et biodiversité 2025-2030)

subvention · secteurs ['vins_spiritueux'] · départements national · agences ['AESN'] · statut brouillon

Financeur : Agence de l'eau Seine-Normandie · Taux maximaux autorisés par l'encadrement européen des aides d'État, règle du chapitre B du programme (dépollution des acteurs économiques). Aucun taux propre aux effluents vinicoles n'est publié. · plafond Assiette limitée par un prix de référence calculé sur les flux de pollution concernés par le projet (MES, DBO5, DCO, azote, phosphore) ; pour la réduction des pollutions, ce prix de référence ne s'applique pas aux projets zéro rejet. Si l'aide est accordée au titre du régime de minimis : 300 000 € d'aides publiques au maximum sur les trois derniers exercices fiscaux, toutes aides publiques cumulées. Projets de moins de 10 000 € TTC non aidés (3 500 € TTC pour les études des acteurs économiques).

L'agence de l'eau Seine-Normandie finance, au titre du chapitre B de son 12e programme et avec un formulaire de demande propre à la viniculture, les projets de traitement des rejets d'un établissement vinicole : traitement autonome par stockage et épandage agricole, traitement autonome par stockage aéré individuel, prétraitement et raccordement au réseau d'assainissement de la collectivité, ou travaux d'aménagement en vue d'une épuration hors site sur un dispositif de traitement collectif. Le formulaire détaille les travaux de collecte, le prétraitement (dégrillage, tamisage, neutralisation), les capacités de stockage étanches et le matériel d'aération, et chiffre la modification du réseau de collecte interne, les raccordements, le relevage et le prétraitement, ainsi que les études, honoraires et la maîtrise d'œuvre.

Éligibilité : Entreprises vinicoles du bassin Seine-Normandie, pour le traitement des rejets de leur établissement : simple mise en conformité, mise aux normes lors d'une restructuration ou d'une extension, transfert d'activité ou création d'un nouveau site. Ne sont pas éligibles les projets faisant l'objet d'un arrêté de mise en demeure ; le demandeur certifie que l'entreprise n'est pas en difficulté au sens européen.

- Mesures : ACT_VIN_006
- **avertissement** : Aucun commencement d'exécution (ordre de service, bon de commande, devis signé) ne doit avoir lieu avant le dépôt d'une demande d'aide formelle auprès de l'agence, sauf autorisation de démarrage anticipé. L'accusé de réception de la demande ne vaut pas décision d'attribution.
- **info** : Le formulaire l'exige : au terme du projet, la collecte des eaux usées vinicoles doit être exhaustive et séparée de la collecte des eaux pluviales, et les écoulements liés notamment au stockage du marc doivent être maîtrisés.
- **avertissement** : Création d'un site (installation nouvelle, soit une nouvelle implantation géographique depuis moins de 2 années) : seules les études et les travaux d'épuration qui vont au-delà des exigences de la réglementation applicable sont éligibles, et l'assiette se limite à ces dépenses.
- **info** : Pièces demandées selon la filière : pour l'épandage, le cas échéant, le contrat de prestation d'épandage, de mise à disposition des parcelles et une attestation que les terrains utilisés sont validés par une étude préalable ; pour un établissement raccordé au réseau communal, l'autorisation ou la convention de rejet ; pour une entreprise soumise à un arrêté ICPE, l'arrêté préfectoral ou l'attestation de déclaration. Le formulaire demande aussi la consommation d'eau totale annuelle et celle liée à l'activité pressurage.
- **info** : Démarche en trois étapes : présenter le projet au chargé d'opérations de votre direction territoriale, télécharger le formulaire de demande d'aide vinicole, puis déposer le dossier complet sur Démarche Numérique. En septembre 2026, l'agence indiquait : « Pour avoir l'assurance d'une instruction en 2026, vous devez déposer vos dossiers complets de demande d'aide sur Démarche Numérique avant le 30 septembre. » Vérifiez la date de l'année en cours.
- **info** : En Champagne, le Comité Champagne conseille les établissements sur la collecte et le traitement des effluents ; dans le contrat d'animation 2013-2018 passé avec l'agence, il les assistait aussi pour constituer les dossiers de demande d'aide. Dans le bilan des aides signées en 2025, les dossiers de la Marne et de l'Aisne portent le libellé « CIVC », ceux de l'Yonne non.
- **retour_experience** : Le bilan des aides signées publié par l'agence au 10 juillet 2025 compte dix subventions portant explicitement sur les effluents vinicoles, de 11 386 € à 123 395 €, pour l'amélioration de la collecte, les réseaux de collecte et le stockage-épandage, attribuées à des entreprises vinicoles de la Marne, de l'Aisne et de l'Yonne. (https://www.eau-seine-normandie.fr/sites/public_file/deliberations-commission-des-aides/2025/Bilan_des_aides_signees_juin_2025.pdf)
- **ressource** : Formulaire de demande d'aide VINICULTURE (chapitre B du programme 2025-2030) (https://www.eau-seine-normandie.fr/sites/public_file/12e-programme/FORMULAIRES/12eme_Formulaire_aide_INDUSTRIE_specifique_VINICOLE_VF.docx)
- **ressource** : Formulaires de demande d'aide et conditions générales d'attribution (https://www.eau-seine-normandie.fr/formulaires_aides)
- **ressource** : Les aides financières destinées aux entreprises, programme Eau, climat et biodiversité 2025-2030 (https://www.eau-seine-normandie.fr/entreprises/aides-financieres-du-programme-eau-climat-biodiversite)
- **ressource** : 12e programme 2025-2030 de l'agence de l'eau Seine-Normandie (chapitre B, pages 63 à 71) (https://economie.eaufrance.fr/sites/default/files/2024-11/doc577-12e_programme_aesn_vf.pdf)
- Sources :
  - nom, description (chapitre B, filières), eligibilite (cadre du projet), mesures (ACT_VIN_006) : https://www.eau-seine-normandie.fr/sites/public_file/12e-programme/FORMULAIRES/12eme_Formulaire_aide_INDUSTRIE_specifique_VINICOLE_VF.docx (2026-09-28) · « Chapitre B du programme "Eau, climat & biodiversité" 2025-2030 [...] Dans quel cadre s’inscrit votre projet ? [...] Simple mise en conformité pour le traitement des rejets de l’établissement [...] Mise aux normes de votre établissement dans le cadre de travaux de restructuration ou d’extension à préciser [...] Transfert de votre activité sur un autre site [...] Création d’un nouveau site [...] En quoi consiste votre projet ? [...] Mise en place d’un traitement autonome par stockage et épandage agricole [...] Mise en place d’un traitement autonome par stockage aéré individuel [...] Prétraitement, raccordement au réseau d’assainissement de la collectivité [...] Travaux d’aménagement en vue d’une épuration hors site sur un dispositif de traitement collectif »
  - description (travaux et dépenses) : https://www.eau-seine-normandie.fr/sites/public_file/12e-programme/FORMULAIRES/12eme_Formulaire_aide_INDUSTRIE_specifique_VINICOLE_VF.docx (2026-09-28) · « Dispositifs(s) de prétraitement des rejets envisagé(s) (dégrillage, tamisage, neutralisation, ...) : [...] Mise en place de capacités de stockage étanches pour les rejets vinicoles [...] Matériel d’aération des rejets [...] Modification du réseau de collecte interne [...] Raccordements principaux [...] Relevage, prétraitement des rejets [...] Études, honoraires, maîtrise d’œuvre »
  - plafond (de minimis), eligibilite (mise en demeure, entreprise en difficulté) : https://www.eau-seine-normandie.fr/sites/public_file/12e-programme/FORMULAIRES/12eme_Formulaire_aide_INDUSTRIE_specifique_VINICOLE_VF.docx (2026-09-28) · « Pour une demande d’aides sollicitée au titre d’un régime dit “de minimis”, précisez si vous avez perçu des aides publiques dit « de minimis » (règlement européen n° 1407/2013 modifié par le règlement n°2023/2391) permettant de recevoir au maximum 300 000 € d’aides publiques durant les 3 derniers exercices fiscaux dont celui en cours à la date de signature de la présente déclaration, toutes aides publiques cumulées, en complétant le tableau ci-dessous : [...] certifie ne pas présenter un projet faisant l’objet d’un arrêté préfectoral de mise en demeure, [...] certifie que l’entreprise bénéficiaire n’est pas en difficulté au sens européen, en référence au règlement (UE) n°651/2014 de la Commission européenne du 17 juin 2014, et notamment qu’elle ne fait pas l’objet d’une procédure collective d’insolvabilité (procédure de sauvegarde, procédure de redressement judiciaire, procédure de liquidation judiciaire), »
  - infos_complementaires (collecte exhaustive, marc, pièces, consommations) : https://www.eau-seine-normandie.fr/sites/public_file/12e-programme/FORMULAIRES/12eme_Formulaire_aide_INDUSTRIE_specifique_VINICOLE_VF.docx (2026-09-28) · « Au terme du projet, la collecte des eaux usées vinicoles devra être exhaustive et séparée de la collecte des eaux pluviales. [...] Les écoulements liés notamment au stockage du marc devront être maîtrisés. [...] ☐ Pour l’épandage, le cas échéant, contrat de prestation d’épandage, de mise à disposition des parcelles et attestation certifiant que les terrains utilisés sont validés par une étude préalable [...] ☐ Pour les établissements raccordés à un réseau d’assainissement communal, fournir une copie de l’autorisation ou la convention de rejet [...] ☐ Si l’entreprise est soumise à un ou plusieurs arrêtés ICPE, joindre une copie de l’arrêté préfectoral d’autorisation d’exercer ou de l’attestation de déclaration d’activité en préfecture [...] Consommation d’eau totale annuelle [...] Consommation d’eau liée à l’activité pressurage (existence d’un compteur spécifique ?) »
  - infos_complementaires (démarche, date de dépôt, commencement d'exécution), ressources (formulaire VINICULTURE) : https://www.eau-seine-normandie.fr/formulaires_aides (2026-09-28) · « Pour avoir l'assurance d'une instruction en 2026, vous devez déposer vos dossiers complets de demande d'aide sur Démarche Numérique avant le 30 septembre. [...] Prendre contact avec le chargé d'opérations de la direction territoriale dont vous dépendez [...] aucun commencement d'exécution du projet (émission d'ordre de service ou de bon de commande par exemple) ne peut avoir lieu avant le dépôt d'une demande d'aide formelle [...] Industrie, Artisanat, Activités économiques et assimilés domestiques [...] Formulaire de demande d'aide VINICULTURE »
  - taux : https://economie.eaufrance.fr/sites/default/files/2024-11/doc577-12e_programme_aesn_vf.pdf (2026-09-28) · « Tableau Niveaux d'aide du chapitre B : Réduction des pollutions / Taux maximaux autorisés par l'encadrement européen / Oui / a = 1,5 et b = 3 / 1311 ; Mesures d'accompagnement [...] Taux maximaux autorisés par l'encadrement européen (pages 69 et 70 du fichier) »
  - plafond (prix de référence, zéro rejet, seuils plancher), type : https://economie.eaufrance.fr/sites/default/files/2024-11/doc577-12e_programme_aesn_vf.pdf (2026-09-28) · « Le prix de référence (PR) est déterminé en fonction des assiettes de pollution [...] PR = a. [A + PR(MES).(MES) + PR(DB05).(DB05) + PR(DCO).(DCO) + PR(NR).(NR) + PR(P).(P) ...] (page 71) ; Les aides sont accordées par l'agence de l'eau sous forme de subventions ou d'avances remboursables à taux zéro. [...] ne sont pas aidés les projets dont le coût est inférieur à 10 000 €TTC. Par exception, ce seuil est ramené à 3 500 €TTC pour : les études des acteurs économiques (page 29) ; tableau Niveaux d'aide : Réduction des pollutions / Taux maximaux autorisés par l’encadrement européen / Oui / Non si zéro rejet / a = 1,5 et b = 3 / 1311 (page 70) »
  - infos_complementaires (démarrage anticipé, devis, accusé de réception) : https://economie.eaufrance.fr/sites/default/files/2024-11/doc577-12e_programme_aesn_vf.pdf (2026-09-28) · « Sauf autorisation de démarrage anticipé accordée par l'agence, l'attributaire ne peut pas démarrer l'exécution de l'opération avant le dépôt à l'agence de l'eau d'une demande d'aide formelle. L'agence en accuse réception. Cet accusé de réception ne vaut pas décision d'attribution de l'aide. [...] En cas de contractualisation par acceptation d'un devis, la date de signature du devis. (pages 28 et 29 du fichier) »
  - description (travaux d'épuration du chapitre B), mesures (ACT_VIN_006) : https://www.eau-seine-normandie.fr/entreprises/aides-financieres-du-programme-eau-climat-biodiversite (2026-09-28) · « L'agence de l'eau consacre 218 millions d'euros (soit 6 % du montant des aides du 12è programme) à la dépollution industrielle pour : [...] les travaux d'épuration : la réduction des pollutions chroniques par la mise en place de dispositifs de collecte, épuration ou prétraitement des effluents pollués et de leurs sous-produits »
  - infos_complementaires (retour d'expérience, libellés CIVC), mesures (ACT_VIN_006) : https://www.eau-seine-normandie.fr/sites/public_file/deliberations-commission-des-aides/2025/Bilan_des_aides_signees_juin_2025.pdf (2026-09-28) · « BILAN DES AIDES SIGNEES AU 10 JUILLET 2025 [...] SOCIETE CHAMPENOISE DES BARONS ET ASSO [...] CIVC - Réseaux collecte effluents vinicoles DVM 51 (110 217,00) ; SCEV DOMAINE GAUTHERON ALAIN ET CYRIL [...] Stockage épandage effluents vinicoles DSAM 89 (65 623,00) ; BCT DE REKENEIRE [...] CIVC - Amélioration stockage-épandage vinicole DVM 02 (11 386,00) ; SOCIETE AGRO-VITICOLE CHARBAUT [...] CIVC - Amélioration gestion effluents vinicoles DVM 51 (123 395,00) »
  - infos_complementaires (Comité Champagne, assistance aux dossiers) : https://levigneronchampenois.comitechampagne.fr/environnement/effluents-vinicoles (2026-09-28) · « En 2013, l'agence de l'eau Seine- Normandie et l'Interprofession signaient le contrat d'animation "vigne, vin et qualité de l'eau en Champagne". [...] L'objet du nouveau contrat (2013-2018) a donc été orienté vers l'accompagnement des élaborateurs dans la gestion des effluents vinicoles [...] au travers de missions de conseil et d'assistances techniques, mais aussi administratives, pour la constitution des dossiers de demande d'aides financières. [...] Depuis une trentaine d'années, le Comité Champagne accompagne les professionnels désireux d'avoir un conseil technique sur la gestion des effluents. [...] Collecte et traitement des effluents, gestion des résidus de vinification, optimisation du fonctionnement des stockages aérés, et contexte réglementaire font partie du conseil dispensé auprès des établissements vinicoles. »
  - infos_complementaires (installations nouvelles) : https://economie.eaufrance.fr/sites/default/files/2024-11/doc577-12e_programme_aesn_vf.pdf (2026-09-28) · « B.2.2.9. Les installations nouvelles Une installation nouvelle correspond à la création d’une nouvelle implantation géographique depuis moins de 2 années. [...] Pour les installations nouvelles, sont éligibles les études et les travaux liés aux dispositifs d’épuration et aux technologies propres permettant d’aller au-delà des exigences de la règlementation applicable. [...] Le montant des dépenses éligibles correspond aux dépenses qui permettent d’aller au-delà des exigences de la réglementation applicable. (page 68 du fichier) »
  - eligibilite (entreprises vinicoles) : https://levigneronchampenois.comitechampagne.fr/environnement/programme-eau-climat-biodiversite-de-lagence-de-leau-seine-normandie (2026-09-28) · « Partenaire historique de la filière vinicole, l’agence de l’eau reconduit son programme d’intervention auprès des entreprises vinicoles. [...] L’agence de l’eau Seine-Normandie peut vous accompagner financièrement dans vos actions. »

### AIDE_VIN_003 · Mise aux normes des entreprises vinicoles et de distillation : dispositif « Activité vinicole/distillation » (agence de l'eau Adour-Garonne, 12e programme)

subvention · secteurs ['vins_spiritueux'] · départements national · agences ['AEAG'] · statut brouillon

Financeur : Agence de l'eau Adour-Garonne · Traitement des macropolluants : 30 %. Traitement des micropolluants, ou des macropolluants rejetés dans une masse d'eau subissant une pression significative des activités économiques ou domestique (ou dans une zone à enjeux « usages » du SDAGE) : 40 à 60 % selon le statut. Aménagements internes (technologies propres) et travaux combinés avec des travaux d'économie d'eau : 40 à 60 % selon le statut. Études, y compris préalables aux travaux : 60 à 80 % selon le statut. · plafond Pour la mise aux normes des entreprises vinicoles ou de distillation (hors structures de type coopératives, CUMA), le montant retenu est calculé à partir de la production en hectolitres selon une formule propre à chaque type d'ouvrage (stockage épandage, prétraitement avant adhésion à une structure collective ou traitement par prestataire, traitement biologique in situ), plafonné au montant prévisionnel des dépenses.

Aide de l'agence de l'eau Adour-Garonne à la mise aux normes des entreprises vinicoles et de distillation, déposée sur la plateforme Rivage au titre du dispositif « Activité vinicole/distillation ». Les actions citées par l'agence sont l'aire de lavage, le stockage, la station de traitement in situ et la mise en circuit fermé. Le dispositif relève de la ligne « Réduction des pollutions liées aux activités économiques industrielles et artisanales » du 12e programme, applicable du 1er janvier 2025 au 31 décembre 2030, qui finance aussi les études préalables aux travaux.

Éligibilité : Personnes publiques ou privées (entreprise, collectivité, association, syndicat) exerçant une activité économique à caractère industriel, commercial et artisanal, hors secteur agricole et élevage (ou assimilé) traité dans la politique de lutte contre les pollutions agricoles. Le projet doit être porté par une structure créée depuis plus de 2 ans (sauf continuité d'activité), s'inscrire dans un programme global de dépollution comprenant une réflexion en termes d'économie d'eau à l'échelle de l'établissement, et aboutir à une réduction de la pression du rejet sur la masse d'eau.

- Mesures : ACT_VIN_006, ACT_VIN_007
- **avertissement** : La mise aux normes d'une entreprise vinicole ou de distillation n'est aidée que dans la limite d'une seule demande par bénéficiaire sur tout le 12e programme (2025-2030) : regroupez les travaux dans un même projet.
- **avertissement** : Ne sont pas éligibles les projets concernant des pollutions nouvelles (par exemple la création d'une entreprise), des travaux de renouvellement à l'identique, des activités de prestation de service (transport ou traitement d'effluents de tiers) et des études réglementaires.
- **info** : Le secteur agricole est exclu de cette ligne d'aide, car traité dans la politique de lutte contre les pollutions agricoles de l'agence. Si votre structure est une exploitation viticole, vérifiez auprès de l'agence de quelle ligne relève votre projet avant de déposer.
- **info** : Les travaux doivent s'inscrire dans un programme global de dépollution précédé d'une étude de définition. Un établissement raccordé à une station d'épuration collective doit disposer d'une étude montrant que le réseau et la station peuvent accepter sa charge de pollution, et d'une autorisation de rejet au réseau de la collectivité.
- **info** : La demande se dépose sur la plateforme Rivage : thématique « Lutte contre les pressions des activités économiques hors agriculture (réduction des pollutions, économies d'eau et eaux pluviales) », puis dispositif « Activité vinicole/distillation ». Pour l'agroalimentaire, l'interlocuteur indiqué par l'agence est Marc Pinel, chargé d'intervention industries, 05 61 36 82 19, marc.pinel@eau-adour-garonne.fr.
- **ressource** : Délibération du 12e programme sur la réduction des pollutions des activités industrielles et artisanales (PDF) (https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf)
- **ressource** : Fiche de l'aide sur Aides-territoires (https://aides-territoires.beta.gouv.fr/aides/collecter-et-traiter-les-eaux-usees-et-les-eaux-pluviales-1/)
- **ressource** : Plateforme de dépôt des demandes d'aide Rivage (https://rivage.eau-adour-garonne.fr/appli/)
- Sources :
  - nom, description (dispositif Rivage, actions) : https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf (2026-09-28) · « Annexe 2 : Liste (non exhaustive) des actions pouvant être financées [...] Mise aux normes des entreprises vinicoles et/ou distillation | Aire de lavage, stockage, station de traitement in situ, mise en circuit fermé »
  - nom, description (12e programme, période) : https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf (2026-09-28) · « 12EME PROGRAMME PLURIANNUEL D'INTERVENTION MODALITES ET CONDITIONS D'ATTRIBUTION DES AIDES REDUCTION DES POLLUTIONS LIEES AUX ACTIVITES ECONOMIQUES INDUSTRIELLES ET ARTISANALES LIGNE 13 POUR LA PERIODE DU 1ER JANVIER 2025 AU 31 DECEMBRE 2030 »
  - nom, infos_complementaires (dispositif Rivage « Activité vinicole/distillation ») : https://eau-grandsudouest.fr/aides-financieres/activites-industrielles-artisanat (2026-09-28) · « Sur quels thématiques et dispositifs Rivage déposer votre demande : Thématique : Lutte contre les pressions économiques hors agriculture (réduction des pollutions, économies d'eau et eaux pluviales) Dispositifs : Technologie propre / aménagements internes Ouvrage épuratoire - Gestion des boues d'épuration - autosurveillance Travaux de lutte contre le risque de pollution accidentelle ou par temps de pluie Activité vinicole/distillation »
  - taux : https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf (2026-09-28) · « Article 7 [...] 30% | Traitement des macropolluants. 40 à 60% selon statut | Traitement des micropolluants, aménagements internes (technologie propres), prévention des pollutions accidentelles, opérations collectives partenariales Ou Traitement des macropolluants rejetés dans une masse d'eau subissant une pression significative des activités économiques ou domestique (et/ou dans une des zones à enjeux « usages » du SDAGE) Ou Travaux combinés avec des travaux d'économie d'eau ou faisant appel à des SFN. 60 à 80% selon statut | Etudes (y compris études préalables aux travaux) »
  - taux (fiche thématique, ligne du dispositif Activité vinicole/distillation) : https://eau-grandsudouest.fr/sites/default/files/2025-11/fiche-thematique_industries_reduction-des-pollutions_hd_bureau.pdf (2026-09-28) · « Traitement des macropolluants et micropolluants | Ouvrage épuratoire - Gestion des boues d'épuration - Autosurveillance Activité vinicole/distillation | 30 % : traitement des macropolluants 40 à 60 % selon le statut : traitement des micropolluants & traitement des macropolluants rejetés dans une masse d'eau subissant une pression significative des activités économiques ou domestique (et/ou dans une des zones à enjeux « usages » du SDAGE). Études | Études | 60 à 80 % selon statut. Aménagements internes (technologies propres) | Technologie propre / aménagements internes | 40 à 60 % selon statut. [...] Version de novembre 2025 »
  - taux (version de février 2025 de la même fiche, contenu identique) : https://eau-grandsudouest.fr/sites/default/files/2025-02/FICHE-THEMATIQUE_Industries_Pollutions.pdf (2026-09-28) · « Traitement des macropolluants et micropolluants | Ouvrage épuratoire - Gestion des boues d'épuration - Autosurveillance Activité vinicole/distillation | 30 % : traitement des macropolluants 40 à 60 % selon le statut : traitement des micropolluants [...] »
  - plafond, infos_complementaires (une seule demande par bénéficiaire) : https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf (2026-09-28) · « L'accompagnement de la mise aux normes des entreprises vinicoles et/ou de distillation (hors structures de type coopératives, CUMA ...) présente les modalités d'aides particulières ci-dessous et est aidé dans la limite d'une seule demande par bénéficiaire au cours du 12ème programme. Stockage épandage | Montant retenu (en €) = Production (hl) x (800 x hl vin (-0.5)) plafonné au montant prévisionnel des dépenses. Prétraitement avant adhésion à une structure collective ou traitement par prestataire de service | Production (hl) x (7500 x hl vin (-0.75)) plafonné au montant prévisionnel des dépenses. Traitement biologique in situ | Production (hl) x (20000 x hl vin (-0.75)) plafonné au montant prévisionnel des dépenses »
  - eligibilite, infos_complementaires (secteur agricole exclu) : https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf (2026-09-28) · « Article 4 - Bénéficiaires : Peuvent bénéficier des aides de l'Agence, toute personne publique ou privée (à titre d'exemple : entreprise, collectivité, association, syndicat) exerçant une activité économique à caractère industriel, commercial et artisanal ou en lien avec de telles activités (hors secteur agricole et élevage (ou assimilé) traité dans la politique de lutte contre les pollutions agricoles). »
  - eligibilite, infos_complementaires (programme global, étude de définition, établissements raccordés) : https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf (2026-09-28) · « Article 5 - Conditions d'éligibilité : Les travaux éligibles doivent : s'inscrire dans un programme global de dépollution, précédé d'une étude de définition [...] s'inscrire dans une réflexion en termes d'économie d'eau à l'échelle de l'établissement [...] être portés par une structure créée depuis plus de 2 ans (sauf s'il y a continuité d'activité) [...] aboutir à une réduction de la pression du rejet sur la masse d'eau [...] pour les établissements raccordés à une station collective de traitement des eaux usées, disposer d'une étude démontrant que le réseau et la station d'épuration peuvent accepter la charge et le type de pollution générée par cet établissement, et disposer d'une autorisation de rejet au réseau de la collectivité. »
  - eligibilite (source de secours lisible) : https://aides-territoires.beta.gouv.fr/aides/collecter-et-traiter-les-eaux-usees-et-les-eaux-pluviales-1/ (2026-09-28) · « Réduire les pollutions des activités industrielles et artisanales [...] Les bénéficiaires sont des personnes publiques ou privées (à titre d'exemple : entreprise, collectivité, association, syndicat) exerçant une activité économique à caractère industriel, commercial et artisanal ou en lien avec de telles activités (hors secteur agricole et élevage (ou assimilé) traité dans la politique de lutte contre les pollutions agricoles). [...] Subvention (min : 30% - max : 80%) [...] Du 1 janvier 2025 au 31 décembre 2030 »
  - infos_complementaires (opérations non éligibles) : https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf (2026-09-28) · « Article 6 - Opérations non éligibles [...] des pollutions nouvelles (exemple : création d'une entreprise) - des travaux de renouvellement à l'identique [...] - les activités de prestation de service (transport et/ou traitement d'effluents de tiers) - les études réglementaires »
  - infos_complementaires (dépôt Rivage, contact) : https://eau-grandsudouest.fr/sites/default/files/2025-11/fiche-thematique_industries_reduction-des-pollutions_hd_bureau.pdf (2026-09-28) · « COMMENT DÉPOSER UNE AIDE ? 1. Sélectionner la thématique « Lutte contre les pressions des activités économiques hors agriculture (réduction des pollutions, économies d'eau et eaux pluviales) ». 2. Sélectionner l'un des dispositifs d'aide associé présenté dans le tableau ci-dessous. Lien vers la plateforme Rivage : rivage.eau-adour-garonne.fr/appli/ [...] Secteurs d'activités : Agro-Alimentaires / Golf / Activités commerciales Marc PINEL - Chargé d'intervention industries Tel direct : 05 61 36 82 19 marc.pinel@eau-adour-garonne.fr »
  - mesures (ACT_VIN_006 : stockage et traitement des effluents vinicoles) : https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf (2026-09-28) · « Mise aux normes des entreprises vinicoles et/ou distillation | Aire de lavage, stockage, station de traitement in situ, mise en circuit fermé [...] Stockage épandage [...] Prétraitement avant adhésion à une structure collective ou traitement par prestataire de service [...] Traitement biologique in situ »
  - mesures (ACT_VIN_007 : stockage et filière des effluents de distillation) : https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf (2026-09-28) · « L'accompagnement de la mise aux normes des entreprises vinicoles et/ou de distillation [...] Stockage épandage [...] Prétraitement avant adhésion à une structure collective ou traitement par prestataire de service »
  - nom, infos_complementaires (dispositif Rivage « Activité vinicole/distillation » ; copie d'archive lisible de la page de l'agence, certificat valide) : https://web.archive.org/web/20260611033615/https://eau-grandsudouest.fr/aides-financieres/activites-industrielles-artisanat (2026-09-28) · « Sur quels thématiques et dispositifs Rivage déposer votre demande : Thématique : Lutte contre les pressions économiques hors agriculture (réduction des pollutions, économies d'eau et eaux pluviales) Dispositifs : Technologie propre / aménagements internes Ouvrage épuratoire - Gestion des boues d'épuration - autosurveillance Travaux de lutte contre le risque de pollution accidentelle ou par temps de pluie Activité vinicole/distillation Communication - sensibilisation thématique Animation thématique Études »
  - taux, nom (copie d'archive lisible de la fiche thématique de novembre 2025, fichier identique à l'original) : https://web.archive.org/web/20251213194057/https://eau-grandsudouest.fr/sites/default/files/2025-11/fiche-thematique_industries_reduction-des-pollutions_hd_bureau.pdf (2026-09-28) · « NATURE DE L'OPÉRATION | DISPOSITIF RIVAGE CORRESPONDANT | TAUX D'AIDE MAXIMUM. Études | Études | 60 à 80 % selon statut. Traitement des macropolluants et micropolluants | Ouvrage épuratoire - Gestion des boues d'épuration - Autosurveillance Activité vinicole/distillation | 30 % : traitement des macropolluants 40 à 60 % selon le statut : traitement des micropolluants & traitement des macropolluants rejetés dans une masse d'eau subissant une pression significative des activités économiques ou domestique (et/ou dans une des zones à enjeux « usages » du SDAGE). Aménagements internes (technologies propres) | Technologie propre / aménagements internes | 40 à 60 % selon statut. »
  - infos_complementaires (opérations non éligibles, dépôt Rivage, contact ; copie d'archive lisible de la fiche thématique) : https://web.archive.org/web/20251213194057/https://eau-grandsudouest.fr/sites/default/files/2025-11/fiche-thematique_industries_reduction-des-pollutions_hd_bureau.pdf (2026-09-28) · « OPÉRATIONS NON ÉLIGIBLES Ne sont pas éligibles aux aides de l'Agence les projets concernant : des pollutions nouvelles (exemple : création d'une entreprise) des travaux de renouvellement à l'identique des sites et sols pollués (site orphelin, fermé ou en post-exploitation) des activités de prestation de service (transport et/ou traitement d'effluents de tiers) des études réglementaires [...] COMMENT DÉPOSER UNE AIDE ? 1. Sélectionner la thématique « Lutte contre les pressions des activités économiques hors agriculture (réduction des pollutions, économies d'eau et eaux pluviales) ». 2. Sélectionner l'un des dispositifs d'aide associé présenté dans le tableau ci-dessous. [...] Secteurs d'activités : Agro-Alimentaires / Golf / Activités commerciales Marc PINEL - Chargé d'intervention industries Tel direct : 05 61 36 82 19 marc.pinel@eau-adour-garonne.fr »
  - mesures (ACT_VIN_006, ACT_VIN_007 : le dispositif « Activité vinicole/distillation » est rangé sous le traitement des effluents ; copie d'archive lisible de la fiche thématique) : https://web.archive.org/web/20251213194057/https://eau-grandsudouest.fr/sites/default/files/2025-11/fiche-thematique_industries_reduction-des-pollutions_hd_bureau.pdf (2026-09-28) · « Traiter les effluents [...] Traitement des macropolluants et micropolluants | Ouvrage épuratoire - Gestion des boues d'épuration - Autosurveillance Activité vinicole/distillation | 30 % : traitement des macropolluants »
  - plafond, taux (travaux combinés avec économies d'eau), infos_complementaires (une seule demande, étude de définition, établissements raccordés), description (actions citées) : copie d'archive de la délibération, fichier identique à l'original, PDF scanné sans couche texte : https://web.archive.org/web/20250625081133/https://eau-grandsudouest.fr/sites/default/files/2025-01/53-24-Re%CC%81duction%20pollutions%20industries_0.pdf (2026-09-28) · « L'accompagnement de la mise aux normes des entreprises vinicoles et/ou de distillation (hors structures de type coopératives, CUMA ...) présente les modalités d'aides particulières ci-dessous et est aidé dans la limite d'une seule demande par bénéficiaire au cours du 12ème programme [...] Mise aux normes des entreprises vinicoles et/ou distillation | Aire de lavage, stockage, station de traitement in situ, mise en circuit fermé »

### AIDE_VIN_004 · Financement de la formation des salariés par OCAPIAT au titre du plan de développement des compétences : catalogue régional et offre Boost Compétences

subvention · secteurs ['vins_spiritueux'] · départements national · agences toutes · statut brouillon

Financeur : OCAPIAT, opérateur de compétences (OPCO) de la coopération agricole, de l'agriculture, de la pêche, de l'industrie agroalimentaire et des territoires · Catalogue régional : 100 % des coûts pédagogiques pour les entreprises de moins de 50 salariés. Formation hors catalogue (Boost Compétences) : 50 % des coûts pédagogiques · plafond Boost Compétences : coûts pédagogiques éligibles retenus dans la limite de 1 500 € HT par stagiaire et par dossier, soit une prise en charge de 750 € HT au plus par stagiaire et par dossier ; coût pédagogique horaire plafonné à 40 €/h. Catalogue régional : pas de plafond indiqué sur la page du dispositif

OCAPIAT finance sur ses fonds mutualisés, au titre du plan de développement des compétences, la formation des salariés des entreprises de son périmètre, dont les entreprises des vins et spiritueux et les caves coopératives vinicoles. Deux voies : le catalogue de l'offre régionale (plus de 3 500 formations courtes, dont une formation « Raisonner et maîtriser ses opérations d'hygiène en cave » qui traite des techniques de nettoyage des chais et de la gestion de l'eau), et l'offre Boost Compétences, qui cofinance pour les entreprises de moins de 50 salariés une formation externe choisie librement (thème, organisme certifié Qualiopi, calendrier) quand le catalogue n'y répond pas. OCAPIAT présente la formation des salariés comme un levier des plans de réduction des flux d'énergie, de matières, d'eau et de déchets.

Éligibilité : Entreprises relevant du champ d'OCAPIAT, déterminé par la convention collective (IDCC) : notamment la convention nationale des vins, cidres, jus de fruits, sirops, spiritueux et liqueurs (IDCC 0493), les caves coopératives vinicoles (IDCC 7005), les distilleries viticoles coopératives (IDCC 7503) et la production agricole. Le catalogue est ouvert prioritairement aux entreprises de moins de 50 salariés, et sur contribution volontaire à celles de 50 salariés et plus ; Boost Compétences est réservé aux entreprises de moins de 50 salariés.

- Mesures : ACT_VIN_001
- **avertissement** : Boost Compétences : la demande de prise en charge se dépose sur votre espace en ligne OCAPIAT avant le démarrage de la formation, au plus tôt 2 mois avant et au plus tard le premier jour. Une demande déposée après ce délai est refusée. Les justificatifs (convention ou devis, facture, certificat de réalisation) sont à déposer au plus tard 3 mois après la fin de la formation, sinon l'accord devient caduc. (https://www.ocapiat.fr/financement-sur-mesure-par-lopco-simulateur-boost-competences/)
- **avertissement** : Ces financements ne sont ouverts qu'aux entreprises du périmètre d'OCAPIAT. Vérifiez le code IDCC de votre convention collective sur le site d'OCAPIAT avant d'engager une formation. (https://www.ocapiat.fr/verifier-par-secteur-lappartenance-dune-entreprise-a-ocapiat/)
- **info** : Au catalogue, la formation « Raisonner et maîtriser ses opérations d'hygiène en cave » de l'EPLEFPA de Nîmes-Rodilhan (7 heures) vise la maîtrise des techniques de nettoyage et de désinfection des chais et aborde les matières actives et la gestion de l'eau ; elle s'adresse à tout public travaillant en cave coopérative ou individuelle. Elle n'est proposée qu'en Occitanie et, au 28 septembre 2026, aucune session n'y était ouverte. Hors Occitanie, ou faute de session, une formation équivalente auprès d'un organisme certifié Qualiopi se finance par Boost Compétences (formation hors catalogue).
- **info** : Catalogue régional : vous recherchez la formation sur le portail de l'offre régionale, puis vous inscrivez en ligne votre salarié, ou vous mandatez un centre de formation référencé, sous réserve de son accord. Si la formation n'existe pas au catalogue, OCAPIAT oriente vers l'action de formation hors catalogue (Boost Compétences).
- **info** : Boost Compétences fonctionne en remboursement : l'entreprise règle l'organisme de formation, puis OCAPIAT lui rembourse par virement les coûts accordés après réception des justificatifs. La formation doit être externe, délivrée par un organisme certifié Qualiopi, d'une durée minimale de 3 h 30 en continu. Plusieurs demandes sont possibles dans l'année, dans la limite des fonds disponibles. Les formations internes relèvent d'une offre distincte, « Formations internes ».
- **info** : Pour les salariés de 50 ans et plus des entreprises de moins de 50 salariés, OCAPIAT prend aussi en charge la rémunération à hauteur du SMIC horaire brut chargé fixé à 12 € de l'heure, pour les formations du catalogue comme pour Boost Compétences, dans la limite du montant des coûts pédagogiques pris en charge.
- **ressource** : Page du catalogue de formations et de son financement sur le site d'OCAPIAT (https://www.ocapiat.fr/catalogue-de-formations-et-financement/)
- **ressource** : Portail de recherche et d'inscription de l'offre régionale OCAPIAT (https://offredeformation.ocapiat.fr/catalogui/#/home)
- **ressource** : Page de l'offre Boost Compétences (formations hors catalogue) sur le site d'OCAPIAT (https://www.ocapiat.fr/financement-sur-mesure-par-lopco-simulateur-boost-competences/)
- **ressource** : Page d'OCAPIAT sur le plan de développement des compétences des entreprises de moins de 50 salariés (https://www.ocapiat.fr/plan-developpement-competences/)
- Sources :
  - financeur : https://www.ocapiat.fr/catalogue-de-formations-et-financement/ (2026-09-28) · « OCAPIAT est l'Opérateur de Compétences (OPCO) pour la Coopération agricole, l'Agriculture, la Pêche, l'Industrie Agroalimentaire et les Territoires. »
  - eligibilite : https://www.ocapiat.fr/verifier-par-secteur-lappartenance-dune-entreprise-a-ocapiat/ (2026-09-28) · « Toute entreprise, salarié, association, syndicat… appartenant à nos branches professionnelles adhérentes peut bénéficier des services d'OCAPIAT. Liste des secteurs adhérents [...] Production agricole et CUMA [...] Vins, cidres, jus de fruits, sirops, spiritueux et liqueurs [...] Coopératives Vinicoles »
  - eligibilite (codes IDCC) : https://www.legifrance.gouv.fr/conv_coll/article/KALIARTI000038908043 (2026-09-28) · « Accord professionnel du 18 décembre 2018 relatif à l'OPCO (OCAPIAT), article 2, champ d'application professionnel : IDCC 0493. Les entreprises relevant de la convention collective nationale des vins, cidres jus de fruits, sirop, spiritueux et liqueurs. [...] IDCC 7005. Caves coopératives vinicoles. [...] IDCC 7503. Distilleries viticoles (coopératives et unions) et distillation (SICA). »
  - eligibilite : https://www.ocapiat.fr/catalogue-de-formations-et-financement/ (2026-09-28) · « Le catalogue de formation de l'offre régionale est accessible : Uniquement aux entreprises du périmètre d'OCAPIAT. Prioritairement aux entreprises < 50 salariés. Sur contribution volontaire, aux entreprises de 50 salariés et plus. »
  - type, taux, description : https://www.ocapiat.fr/catalogue-de-formations-et-financement/ (2026-09-28) · « Financement sur fonds mutualisés d'OCAPIAT au titre du dispositif plan de développement des compétences. Coûts pédagogiques financés à 100 % pour les entreprises de moins de 50 salariés. »
  - description, infos_complementaires : https://www.ocapiat.fr/catalogue-de-formations-et-financement/ (2026-09-28) · « D'accéder à plus de 3 500 formations de courte durée sélectionnées par OCAPIAT. [...] J'inscris en ligne mon salarié via le portail de l'offre régionale ou j'ai la possibilité de mandater un centre de formation référencé sur l'offre régionale sous réserve de son accord. [...] La formation recherchée n'existe pas dans le catalogue ? Action de formation hors catalogue »
  - infos_complementaires (portail) : https://www.ocapiat.fr/catalogue-de-formations-et-financement/ (2026-09-28) · « Via le portail de recherche en ligne : accédez à toutes les formations disponibles grâce à un moteur de recherche performant. Accéder au portail (lien vers https://offredeformation.ocapiat.fr/catalogui/#/home) »
  - infos_complementaires : https://www.ocapiat.fr/catalogue-de-formations-et-financement/ (2026-09-28) · « Prise en charge de la rémunération pour les salariés expérimentés (50 ans et plus) à hauteur de 12€ stagiaire. Prise en charge des salaires plafonnée au montant des coûts pédagogiques pris en charge par l'OPCO. »
  - taux, plafond, description, eligibilite : https://www.ocapiat.fr/financement-sur-mesure-par-lopco-simulateur-boost-competences/ (2026-09-28) · « BOOST Compétences permet aux entreprises de moins de 50 salariés de se faire financer en partie les formations de leur choix concernant le thème, l'intervenant, le lieu et le calendrier de mise en oeuvre. [...] Prise en charge des coûts pédagogiques : 50 % des coûts pédagogiques demandés plafonnés à 750 € par stagiaire. Coût pédagogique horaire plafonné à 40 € /h »
  - infos_complementaires : https://www.ocapiat.fr/financement-sur-mesure-par-lopco-simulateur-boost-competences/ (2026-09-28) · « Ma demande est à réaliser impérativement via mon service en ligne Mon Compte et au préalable du démarrage de l'action : au plus tôt dans les 2 mois précédant l'action et au plus tard le 1er jour de la formation [...] au plus tard 3 mois après la date de fin de ma formation externe (sinon l'accord de prise en charge devient caduc) »
  - infos_complementaires : https://www.ocapiat.fr/financement-sur-mesure-par-lopco-simulateur-boost-competences/ (2026-09-28) · « Soutenir l'investissement des entreprises de moins de 50 salariés lorsqu'elles réalisent librement une action de formation externe d'une durée minimale de 3h30 en continu. [...] OCAPIAT me rembourse directement par virement les coûts pédagogiques [...] Plusieurs demandes préalables de prise en charge sont possibles dans l'année dans la limite des fonds disponibles. [...] pour la prise en charge des formations et AFEST internes, se reporter désormais à la nouvelle offre dédiée « Formations internes » »
  - infos_complementaires : https://www.ocapiat.fr/financement-sur-mesure-par-lopco-simulateur-boost-competences/ (2026-09-28) · « Prise en charge des salaires : Prise en charge de 12 €/h pour les salariés expérimentés de 50 ans et plus. Prise en charge des salaires plafonnée au montant des coûts pédagogiques pris en charge par l'OPCO. »
  - description, mesures (ACT_VIN_001) : https://www.ocapiat.fr/transition-ecologique-adaptez-votre-entreprise/ (2026-09-28) · « Pourquoi vouloir développer ou renforcer les compétences de vos salariés dans le cadre d'un plan d'action et de réduction de flux d'énergie, matières, eau et déchets »
  - description, infos_complementaires, mesures (ACT_VIN_001) : https://wspub.ocapiat.fr/wsapicatalog/api/Formations/40829 (2026-09-28) · « "objectif":"Maitriser les techniques de nettoyage et de désinfection des chais","contenu":"Distinction entre nettoyage et désinfection , Les techniques mises en ¿uvre , Les matières actives et la gestion de l'eau","publicVise":"Tout public travaillant ou souhaitant travailler en cave coopérative ou individuelle" [...] "libelle":"Raisonner et maîtriser ses opérations d'hygiène en cave" [...] "libelle":"EPLEFPA DE NÎMES RODILHAN" [...] "libelle":"Occitanie" [...] "duree":7.0 [...] "nombreSessionsOuvertes":0 »
  - plafond : https://www.ocapiat.fr/formations-hors-catalogue/ (2026-09-28) · « 50 % des coûts pédagogiques/"pédagogiques divers" (coût du formateur) (éligibles sur la base de 1 500 € HT / stagiaire / dossier). Les 50% correspondent donc à une prise en charge nette d'OCAPIAT d'un montant maximum de 750 € HT / stagiaire / dossier) Et dans la limite des fonds disponibles »
  - infos_complementaires (rémunération 12 €/h) : https://www.ocapiat.fr/plan-developpement-competences/ (2026-09-28) · « Pour tous les secteurs, un soutien au départ en formation des salariés de 50 ans et plus. Prise en charge de la rémunération, à hauteur du SMIC horaire brut chargé fixé à 12 €/h, pour les salariés de 50 ans et plus des entreprises de moins de 50 salarié. Cette mesure financière s'applique aux dispositifs Boost compétences et du catalogue de formations "offre régionale". »

