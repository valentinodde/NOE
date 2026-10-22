# Revue du référentiel : Industrie laitière

Document assemblé automatiquement depuis le staging. Tout est en statut brouillon tant que la promotion n'a pas eu lieu.

## Périmètre

- Secteur : `industrie_laitiere` (Industrie laitière)
- Codes NAF (5) : 10.51A, 10.51B, 10.51C, 10.51D, 10.52Z

## Profil eau du secteur

# Profil eau du secteur : industrie laitière

Note de profil, étape 2 du skill `nouveau-secteur`. Statut : brouillon, à valider par un consultant.
Date de rédaction : 2026-09-22. Révision après relecture : 2026-09-22.

| Champ | Valeur |
|---|---|
| `sector_id` | `industrie_laitiere` |
| Libellé | Industrie laitière |
| Préfixe des mesures | `LAI` (`ACT_LAI_001` et suivants) |
| Codes NAF | 10.51A, 10.51B, 10.51C, 10.51D, 10.52Z (2 651 établissements) |

Cette note prolonge `00_perimetre.md` et ne la contredit pas. Elle couvre aussi bien l'atelier
fromager de quelques salariés que le site de séchage de plusieurs centaines de milliers de litres
par jour, en signalant à chaque fois ce qui change avec la taille.

Avertissement de méthode : la filière dispose de peu de ratios publics consolidés. Les chiffres
retenus proviennent d'interprofessions, de centres techniques, des agences de l'eau et de textes
réglementaires. Les valeurs que ces sources ne donnent pas sont écrites au conditionnel avec la
mention « à confirmer », et la fin de la note liste ce qui reste non sourcé.

## 1. Usages de l'eau, du plus gros au plus petit

**1. Le nettoyage, et d'abord le nettoyage en place (NEP).** C'est le premier poste, devant le
process. Dans les industries alimentaires, les opérations de nettoyage et de désinfection
représentent environ 43 % de l'eau utilisée, contre 33 % pour le process, la part du nettoyage
pouvant atteindre 80 à 85 % selon les productions
[ARIA Auvergne-Rhône-Alpes, 2024](https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/).
Ce poids est la conséquence directe du plan de maîtrise sanitaire : la sécurité sanitaire est
identifiée comme le premier facteur de consommation d'eau de la filière agroalimentaire
[ANIA, Adépale et La Coopération Agricole, 2024](https://www.ania.net/developpement-durable/les-entreprises-agroalimentaires-sengagent-et-presentent-un-plan-de-sobriete-hydrique).
Un cycle de NEP enchaîne prérinçage, détergent alcalin, rinçage intermédiaire, passage acide et
rinçage final, sur des circuits fermés (tanks, échangeurs, lignes de conditionnement) qui doivent
être remplis puis vidangés à chaque étape.

**2. Le process de fabrication.** Eau de dilution et de standardisation, saumurage des fromages,
eau de délactosage et de lavage du caillé, eau d'entraînement des produits en fin de ligne, eau de
la chaufferie pour la vapeur. L'ordre de grandeur global est de l'ordre du litre d'eau par litre de
lait travaillé : une fromagerie de la filière Comté consomme en moyenne 1 litre d'eau par litre de
lait lorsqu'elle ne fabrique que du comté, 1,4 litre en ajoutant du morbier, 1,7 litre en ajoutant
du bleu de Gex ou du mont d'or
[CIGC, 2025](https://www.comte.com/articles/les-economies-deau-dans-la-filiere-comte/).
Les fabrications de poudres et d'ingrédients (10.51D) se situent plus haut, faute de ratio public
consolidé (à confirmer). Ce ratio de transformation ne doit pas être confondu avec l'empreinte eau
de l'amont : à la ferme, il faut environ 10 litres d'eau par litre de lait, dont l'essentiel pour
l'abreuvement et les cultures
[Cniel et Institut de l'Élevage, 2022](https://www.produits-laitiers.com/la-consommation-deau-dans-les-fermes-laitieres/).

**3. Le froid.** Réception et stockage du lait cru, refroidissement après pasteurisation, caves
d'affinage, surgélation des glaces. Le froid mobilise de l'eau par les condenseurs et, sur les sites
équipés, par les tours aéroréfrigérantes, dont l'eau d'appoint compense l'évaporation et les purges.
Quand ce refroidissement se fait encore en eau perdue, il devient très vite le deuxième poste du
site (à confirmer par le comptage, c'est précisément ce que révèle un audit).

**4. Le lavage des extérieurs et des véhicules.** Camions de collecte, citernes, quais, sols et
caniveaux. Poste souvent sous-estimé, presque toujours alimenté en eau potable alors qu'il ne le
nécessite pas.

**5. L'eau de la chaufferie et des utilités**, puis **l'eau sanitaire** du personnel (vestiaires,
sanitaires, lave-mains), dernier poste en volume mais incompressible.

## 2. Sources d'approvisionnement

Le réseau public d'eau potable domine, parce que le règlement sanitaire impose une eau destinée à
la consommation humaine pour tout ce qui touche au produit. Les sites importants doublent
fréquemment ce réseau par un ou plusieurs forages privés, déclarés et traités sur place pour
atteindre la qualité requise, ce qui les soumet à la redevance pour prélèvement de l'agence de
l'eau. L'eau de surface est marginale dans cette filière.

La nouveauté tient aux ressources internes. Le lait est constitué d'environ 88 % d'eau, les 12 %
d'extrait sec se répartissant entre lactose (38 %), matière grasse (30 %), matière azotée (25 %) et
minéraux (7 %)
[ACTALIA, projet AQUAREL, 2018](http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf).
Une partie de cette eau est déjà extraite par les procédés sous forme de condensats d'évaporation,
appelés eaux blanches ou eaux de vache, et de perméats d'osmose inverse
[Assemblée nationale, réponse ministérielle à la question n° 12522, 2024](https://questions.assemblee-nationale.fr/q16/16-12522QE.htm).

Les volumes en jeu à l'échelle d'un site sont importants. Dans le panel français suivi par AQUAREL,
un site multi-activités comportant une activité poudres produit en moyenne 269 000 m3 d'eaux issues
du lait par an, dans un intervalle de 29 000 à 710 000 m3, et un site dédié à la production de
poudres 145 000 m3 par an, dans un intervalle de 50 000 à 365 000 m3
[ACTALIA, projet AQUAREL, 2018](http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf).
À l'échelle nationale, la profession estime le gisement d'eaux de concentration de la matière
laitière à 16 millions de m3 par an, dont 5 millions déjà valorisés, soit 11 millions de m3 encore
disponibles [FNIL, sans date](https://fnil.fr/actions/filiere-laitiere/eau-du-lait). La
récupération d'eau de pluie reste anecdotique en transformation, et ne conviendrait de toute façon
qu'aux usages sans contact.

Enfin, 80 % des entreprises laitières disposeraient de leur propre station d'épuration ou de
prétraitement selon l'interprofession (à confirmer, chiffre repris de plusieurs reprises de presse
professionnelle et non d'une publication directe du Cniel). C'est important pour la suite : le site
maîtrise souvent son rejet, donc le gisement d'eaux usées traitées recyclables.

## 3. Dépendances critiques

**L'eau de nettoyage n'est pas compressible.** Sans NEP conforme, la ligne ne redémarre pas : la
fabrication s'arrête, pas seulement le nettoyage. Dans une fromagerie, une coupure ou une
restriction sévère se traduit donc, dans l'ordre, par l'allongement des cycles de production entre
deux nettoyages (au prix d'un risque sanitaire et d'une négociation avec le service qualité), puis
par l'arrêt d'une ligne secondaire, puis par le refus de collecte.

**Le refus de collecte est le vrai point de rupture.** Le lait cru ne se stocke pas : il arrive tous
les jours, y compris le jour où l'usine ne peut pas le traiter. Un arrêt de quelques jours remonte
immédiatement sur les exploitations livrantes, qui n'ont que deux à trois jours de tank, et sur les
autres sites du groupe qui doivent absorber le volume. C'est la dépendance la plus coûteuse du
secteur, et elle est asymétrique : l'amont subit un arrêt décidé à l'aval.

**Le froid s'arrête avant le process.** Une tour aéroréfrigérante privée d'appoint perd sa capacité
d'échange, ce qui dégrade la chaîne du froid, les caves et, pour les glaces, la surgélation. Le
risque produit arrive avant le risque process.

**Ce que change un arrêté sécheresse.** Les installations classées soumises à autorisation ou à
enregistrement dont le prélèvement annuel dépasse 10 000 m3 doivent réduire leur prélèvement de 5 %
au niveau d'alerte, de 10 % en alerte renforcée et de 25 % en crise, réduction atteinte au plus tard
trois jours après le déclenchement du niveau, et transmettre chaque semaine à l'inspection les
volumes prélevés et consommés en alerte renforcée et en crise
[arrêté du 30 juin 2023, AIDA](https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement).

L'article 3 du même arrêté exclut plusieurs catégories de ces obligations, dont la « transformation
agroalimentaire en flux poussé : transformation ou conditionnement en produits et ingrédients
destinés à l'alimentation humaine et animale de matières premières périssables à l'état frais », les
exploitants ayant réduit leur prélèvement d'au moins 20 % depuis le 1er janvier 2018, ceux utilisant
au minimum 20 % d'eaux réutilisées, et les installations autorisées ou enregistrées depuis le
1er janvier 2023 (même source). Tirez-en la conséquence, elle est décisive ici : le lait cru est
exactement une matière première périssable à l'état frais traitée en flux poussé, donc une laiterie
entre dans le champ de cette exclusion. Encore faut-il que l'exploitant le sache, l'ait formalisé et
puisse l'opposer à l'inspection le jour venu, ce qui fera l'objet d'une question du questionnaire.
Le deuxième et le troisième cas d'exclusion disent la même chose autrement : une entreprise
laitière qui a déjà investi dans la sobriété ou dans la réutilisation, et qui sait le prouver par des
relevés, n'est pas dans la même position, au moment de la crise, que celle qui ne compte pas. Les
établissements sous le seuil de 10 000 m3 ou non classés, ce qui vise la plupart des TPE fromagères
et des glaciers, relèvent des arrêtés préfectoraux de restriction, dont les dispositions sur les
lavages, les nettoyages de véhicules et de surfaces les touchent directement.

Enfin, la sécheresse frappe aussi par l'amont : en août 2022, la production de l'AOP salers a été
suspendue faute d'herbe, le cahier des charges n'étant plus respectable, ce qui prive la fromagerie
de matière première sans qu'aucune restriction ne vise son propre compteur (fait rapporté par la
presse professionnelle, à confirmer par une source interprofessionnelle si la mesure en dépend).

## 4. Risques et contraintes réglementaires

**Statut ICPE.** La rubrique 2230 vise le traitement et la transformation du lait ou des produits
issus du lait. Une installation d'une capacité journalière supérieure à 7 000 litres et inférieure
ou égale à 70 000 litres relève de la déclaration avec contrôle périodique, au-delà de 70 000 litres
par jour de l'enregistrement
[AIDA, Ineris](https://aida.ineris.fr/reglementation/2230-traitement-transformation-lait-produits-issus-lait).
Les plus gros sites basculent en autorisation au titre de la directive sur les émissions
industrielles quand la quantité de lait reçue dépasse 200 tonnes par jour en moyenne annuelle
(rubrique 3643), et se voient alors appliquer les meilleures techniques disponibles du secteur
agroalimentaire [AIDA, Ineris](https://aida.ineris.fr/reglementation/3643-traitement-transformation-lait).
Concrètement, 7 000 litres par jour, c'est la collecte de quelques exploitations : beaucoup de
fromageries artisanales sont juste sous le seuil et basculent avec un simple atelier supplémentaire.
Le statut ICPE conditionne l'autosurveillance des rejets, le comptage des prélèvements, les
prescriptions de l'arrêté d'enregistrement
[arrêté du 24 avril 2017, AIDA](https://aida.ineris.fr/reglementation/arrete-240417-relatif-prescriptions-generales-applicables-installations-relevant-0)
et l'applicabilité de l'arrêté sécheresse ICPE cité plus haut.

**Tours aéroréfrigérantes et légionelles.** Les installations de refroidissement évaporatif par
dispersion d'eau dans un flux d'air relèvent de la rubrique 2921 : enregistrement au-delà de
3 000 kW de puissance thermique évacuée, déclaration avec contrôle en dessous
[AIDA, Ineris](https://aida.ineris.fr/reglementation/2921-refroidissement-evaporatif-dispersion-deau-flux-dair-genere-ventilation).
L'exploitant doit maintenir la concentration en légionelles pneumophila sous 1 000 unités formant
colonie par litre, avec analyses périodiques, plan d'entretien et procédure de gestion en cas de
dépassement [AIDA, Ineris](https://aida.ineris.fr/inspection-icpe/air/prevention-legionnellose/tours-aerorefrigerantes).
Cette contrainte pèse dans les deux sens : elle impose des purges et des appoints, donc de l'eau,
et elle rend attractive la suppression pure et simple de la tour.

**Rejets et redevance.** Les effluents laitiers sont très chargés en matière organique. En
fromagerie fermière, un litre de lait transformé génère de l'ordre de 4 à 5 litres d'effluents, et
le lactosérum concentre à lui seul environ 70 % de la charge polluante
[Institut de l'Élevage, 2013](https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere).
La redevance pour pollution de l'eau d'origine non domestique est assise sur les flux de polluants
rejetés au-delà de seuils de redevabilité, l'assiette étant diminuée de la pollution éliminée par un
dispositif d'épuration
[code de l'environnement, articles L213-10-1 à L213-10-3, Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074220/LEGISCTA000006195228/),
[Agence de l'eau Seine-Normandie](https://www.eau-seine-normandie.fr/les-redevances/redevance-pollution-de-l-eau-d-origine-non-domestique).
Autrement dit, toute matière organique détournée du réseau d'effluents se lit deux fois : moins de
charge à traiter, moins de redevance. Les sites raccordés à une station collective sont en outre
tenus par une convention de rejet et une autorisation de déversement, qui plafonne débit et charge.

**Réutilisation : ce que le droit permet vraiment.** C'est le point à ne pas surestimer. Jusqu'en
2024, les eaux de concentration ne pouvaient pas être réutilisées dans le process, le code de la
santé publique n'admettant que l'eau destinée à la consommation humaine
[Assemblée nationale, 2024](https://questions.assemblee-nationale.fr/q16/16-12522QE.htm). Le décret
n° 2024-33 du 24 janvier 2024 a ouvert la porte en définissant trois catégories : les eaux recyclées
issues de la matière première (les eaux de vache et condensats), les eaux de processus recyclées et
les eaux usées traitées recyclées
[Légifrance, 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414). Le décret
n° 2024-769 et l'arrêté du 8 juillet 2024 ont complété le dispositif en autorisant certaines de ces
eaux comme ingrédient des denrées finales et en permettant leur circulation dans un réseau connecté
à celui de l'eau destinée à la consommation humaine
[Légifrance, 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908702),
[Légifrance, 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908820).
Quatre limites doivent être dites au client :

1. Les eaux usées traitées recyclées (sortie de station) exigent une **autorisation préfectorale**
   avec évaluation des risques sanitaires et environnementaux ; les eaux issues de la matière
   première et les eaux de processus relèvent d'une **déclaration** au préfet.
2. Dans tous les cas, l'exploitant doit intégrer la réutilisation à son analyse des dangers et à son
   plan de maîtrise sanitaire, définir une surveillance des procédés de traitement et faire réaliser
   des vérifications périodiques par un laboratoire accrédité
   [arrêté du 8 juillet 2024, Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908820).
3. Les exigences de qualité dépendent de l'usage : contact direct sans étape ultérieure de maîtrise
   des risques, contact indirect, usage sans contact, usage comme ingrédient (même source).
4. Le texte autorise, il n'exonère de rien : le projet reste un projet d'investissement, de
   traitement et de documentation, pas un simple raccordement de tuyau.

## 5. Leviers connus, par catégorie du plan d'action

Douze leviers, classés selon les sept catégories de `api/seeds/categories.json`. Quatre mesures
transversales existantes (compteur par usage, audit eau, plan de gestion de l'eau et anticipation
des restrictions, démarche collective de territoire) seront réutilisées telles quelles et ne sont
pas reprises ici. Arbitrage à rendre à l'étape 3 : douze leviers plus quatre transversales dépassent
la cible de six à douze mesures du guide. Les leviers marqués « fusionnable » sont les premiers
candidats au regroupement, pour atterrir autour de huit mesures `ACT_LAI_*`.

### Sensibiliser et former (`sensibiliser_former`)

**L1. Former les équipes de nettoyage et de production aux gestes économes.** Consignes écrites de
NEP, prénettoyage à sec, pistolets à gâchette, arrêt des lavages au jet continu, lecture des
compteurs par l'équipe. L'effet est indirect mais s'applique au premier poste de consommation, le
nettoyage et la désinfection pesant environ 43 % de l'eau utilisée en industrie alimentaire
[ARIA Auvergne-Rhône-Alpes, 2024](https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/).
C'est aussi la première exigence de l'arrêté sécheresse ICPE au niveau de vigilance, qui demande une
sensibilisation du personnel selon une procédure écrite affichée sur site
[AIDA, 2023](https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement).
Concerne toutes les tailles. Titre proposé : « Former les équipes au nettoyage économe en eau ».

### Suivre, comprendre et maîtriser ses consommations (`suivre_comprendre_maitriser`)

**L2. Suivre un ratio litres d'eau par litre de lait traité, par atelier et par cycle de NEP.** Au
delà du compteur général (mesure transversale), l'indicateur sectoriel est le ratio eau sur lait,
comparable dans le temps et entre ateliers, et connu de la filière : environ 1 litre par litre en
fromagerie de comté, 1,7 avec des fabrications multiples
[CIGC, 2025](https://www.comte.com/articles/les-economies-deau-dans-la-filiere-comte/).
Il permet de savoir si la dérive vient du mix produit ou des pratiques. Il est aussi la donnée qui
justifiera une exclusion ou une adaptation en période de restriction, notamment pour démontrer une
réduction d'au moins 20 % du prélèvement depuis le 1er janvier 2018
[AIDA, 2023](https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement).
Concerne toutes les tailles, y compris l'atelier fermier. Titre proposé : « Suivre le ratio d'eau
par litre de lait traité ».

### Améliorer l'efficacité hydrique de ses équipements (`ameliorer_efficacite_hydrique`)

**L3. Optimiser les cycles de nettoyage en place.** Piloter la fin de rinçage par conductimétrie ou
turbidimétrie plutôt qu'au temps, récupérer le dernier rinçage dans une bâche pour servir de
prérinçage au cycle suivant, pousser le produit en fin de ligne à l'air ou au racleur avant de
rincer, contrôler la position des vannes pour éviter les rinçages inutiles. Le poste visé est le
premier du site (même source qu'en L1), et c'est le levier structurant pour les sites à lignes
multiples. Concerne les sites disposant d'une NEP automatisée. Titre proposé : « Optimiser les
cycles de nettoyage en place ».

**L4. Fermer les circuits de froid et supprimer le refroidissement en eau perdue.** Boucles fermées
avec échangeur, remplacement des tours aéroréfrigérantes par des condenseurs secs ou adiabatiques.
Une usine agroalimentaire ayant mené ce type de programme consomme 25 % d'eau en moins qu'il y a six
ans et vise 30 %, la suppression des tours écartant en prime le risque légionelles
[Les agences de l'eau, 2023](https://www.lesagencesdeleau.fr/ressources/comment-une-grande-usine-agro-alimentaire-peut-elle-economiser-leau).
Concerne les sites équipés de tours ou de refroidissement ouvert, donc plutôt les PME et ETI.
Titre proposé : « Fermer les circuits de refroidissement et supprimer les tours ouvertes ».

### Changer ses process ou pratiques (`changer_process_pratiques`)

**L5. Généraliser le prénettoyage à sec avant tout lavage à l'eau.** Raclage des sols et des cuves,
récupération des égouttures et des fonds de ligne avant rinçage, raclette plutôt que jet. Le geste
réduit à la fois le volume d'eau du prérinçage et la charge organique envoyée à la station, donc la
redevance. Concerne toutes les tailles, en premier lieu les petits ateliers où la NEP automatisée
n'existe pas. Fusionnable avec L1. Titre proposé : « Généraliser le prénettoyage à sec des
équipements ».

**L6. Concentrer le lactosérum sur site par osmose inverse ou évaporation.** L'opération sépare une
fraction concentrée valorisable d'une eau récupérable : dans la filière Comté, quatre litres de
lactosérum donnent trois litres d'eau et un litre de concentré, et une fromagerie équipée est
descendue à environ 0,9 litre d'eau de réseau par litre de lait, tout en divisant par deux à quatre
le transport de petit-lait
[CIGC, 2025](https://www.comte.com/articles/les-economies-deau-dans-la-filiere-comte/).
Les taux de récupération sont documentés : l'osmose inverse appliquée au lactosérum récupère de
l'ordre de 75 % de l'eau, et jusqu'à 95 % dans les meilleurs cas (Vourch et al., 2008, cité par
[ACTALIA, 2018](http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf)) ;
en évapo-concentration, dix tonnes de lait écrémé à 9 % d'extrait sec concentrées à 50 % de matière
sèche libèrent 8 200 kilogrammes d'eau, soit 90,1 % de la masse initiale (Sloth et al., 1990, cité
par la même source). La promesse s'arrête toutefois à la concentration : l'eau qui part en phase gaz
lors du séchage, de 50 à 96 % de matière sèche, n'est aujourd'hui pas récupérée, faute de
rentabilité technique (même source). Concerne les fromageries à volume suffisant pour amortir
l'installation, pas l'atelier fermier. Titre proposé : « Concentrer le lactosérum sur site pour en
récupérer l'eau ».

### Valoriser ou réutiliser les eaux non conventionnelles (`valoriser_reut_eaux_non_conventionnelles`)

**L7. Déclarer et valoriser les eaux issues du lait (condensats d'évaporation, perméats).** Le
gisement national est estimé à 16 millions de m3 par an, dont 5 déjà valorisés et 11 encore
disponibles [FNIL, sans date](https://fnil.fr/actions/filiere-laitiere/eau-du-lait), et un site
multi-activités avec une activité poudres en produit en moyenne 269 000 m3 par an
[ACTALIA, 2018](http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf).
Une entreprise qui produit et valorise ses eaux de concentration de la matière laitière économiserait
en moyenne de l'ordre de 210 000 m3 par an
[ANIA, Adépale et La Coopération Agricole, Plan de sobriété hydrique, 2024](https://www.lacooperationagricole.coop/sites/default/files/2024-09/PSH_Plan%20de%20sobri%C3%A9t%C3%A9%20hydrique%20-%20AgroAlimentaire.pdf),
et une fromagerie moyenne consommant 300 000 m3 par an pourrait en économiser 60 000 à 90 000
[Assemblée nationale, 2024](https://questions.assemblee-nationale.fr/q16/16-12522QE.htm).

Ce que font réellement les sites français, d'après l'enquête AQUAREL menée auprès d'une trentaine de
sites valorisant leurs eaux issues du lait : 68 % les utilisent pour des opérations de lavage
standard (prérinçages, rinçages intermédiaires, préparation des solutions, lavage des sols), 58 % en
alimentation de chaudières, 26 % dans les tours aéroréfrigérantes et 19 % pour le lavage extérieur
des camions ; côté traitement préalable, 52 % des sites n'en appliquent aucun, 29 % désinfectent au
chlore, 10 % utilisent les ultraviolets, 6 % filtrent et 3 % recourent à l'ozone
[ACTALIA, 2018](http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf).
Attention à la date : cette enquête est de 2018, donc antérieure aux décrets de 2024. Ces pratiques
ont été constatées sous un régime juridique différent, et le fait que la moitié des sites ne
traitaient alors pas leurs eaux ne dit rien de ce qui est permis aujourd'hui. Le BREF européen de
2006 recensait pour sa part des réutilisations au contact des aliments, dernier rinçage de NEP et
pousse à l'eau des lignes, en distinguant la réutilisation directe de la réutilisation après
traitement évolué par séparation membranaire ou désinfection (même source).

La qualité de ces eaux varie d'un facteur mille selon leur origine, ce qui interdit de décider d'un
traitement sans analyse préalable. Valeurs relevées sur les eaux issues du lait, en mgO2/L : perméat
de lactosérum acide, DCO de 6 000 à 10 000 et DBO5 de 3 000 à 6 000, pour une conductivité de 5 000
à 8 000 µS/cm ; perméat de lactosérum doux, DCO de 100 à 400 ; condensat d'évapo-concentration du
lait, DCO de 2 à 720 selon l'effet de l'évaporateur ; condensat d'évapo-concentration du lactosérum,
DCO de 50 à 300
[ACTALIA, 2018](http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf).
Ces valeurs portent sur les eaux issues du lait, et non sur le lactosérum brut, beaucoup plus chargé.

Usages classiques par ordre d'exigence croissante : lavage extérieur des camions, alimentation de
chaudière, prérinçage de lignes, puis usages en contact après traitement et vérification. Le régime
applicable est la déclaration au préfet pour les eaux issues de la matière première, avec intégration
au plan de maîtrise sanitaire et analyses par laboratoire accrédité
[Légifrance, arrêté du 8 juillet 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908820).
Concerne les sites dotés d'un évaporateur, d'un séchoir ou d'une osmose inverse, donc 10.51D, une
partie de 10.51C et les gros 10.51A. Titre proposé : « Valoriser les eaux issues du lait sur le
site ».

**L8. Recycler les eaux de rinçage en cascade.** Réemploi du dernier rinçage NEP, des eaux de
refroidissement propres et des eaux de saumure filtrées vers des usages moins exigeants (lavage de
quais, de caniveaux, de bacs, appoint d'utilités). Ces eaux relèvent de la catégorie des eaux de
processus recyclées, soumise à déclaration
[Légifrance, décret n° 2024-33](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414).
Une machine de lavage de bacs passée en circuit quasi fermé atteint 90 % d'économie sur ce poste
[Les agences de l'eau, 2023](https://www.lesagencesdeleau.fr/ressources/comment-une-grande-usine-agro-alimentaire-peut-elle-economiser-leau).
Concerne toutes les tailles, avec des montages plus simples en petite structure. Fusionnable avec
L3. Titre proposé : « Recycler les eaux de rinçage vers les usages sans contact ».

### Agir sur ses rejets et la qualité de l'eau (`agir_rejets_qualite`)

**L9. Sortir le lactosérum et les pertes de lait du réseau d'effluents.** Collecte séparée du
lactosérum et des égouttures, valorisation en alimentation animale, en ingrédient ou en
méthanisation, détection des pertes de produit sur les lignes et les NEP, bacs de rétention sous les
points de purge. Le lactosérum représentant de l'ordre de 70 % de la charge polluante des effluents
de fromagerie [Institut de l'Élevage, 2013](https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere),
le levier agit à la fois sur le dimensionnement du traitement et sur l'assiette de la redevance
pollution [Légifrance, code de l'environnement](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074220/LEGISCTA000006195228/).
Concerne toutes les tailles. Titre proposé : « Sortir le lactosérum et les pertes de lait des
effluents ».

**L10. Dimensionner et piloter le traitement des effluents lactés.** Dégrillage, dégraissage, bassin
tampon pour absorber les à-coups de NEP, traitement biologique, autosurveillance de la charge
rejetée, convention de rejet tenue à jour avec la collectivité quand le site est raccordé. Un
effluent laitier représente de l'ordre de 4 à 5 litres par litre de lait transformé en fromagerie
fermière [Institut de l'Élevage, 2013](https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere).
Concerne les sites rejetant au milieu comme les sites raccordés. Titre proposé : « Fiabiliser le
traitement des effluents lactés ».

**L11. Pour les petits ateliers, installer une filière de traitement rustique adaptée.** Lit
d'infiltration, filtre planté, épandage encadré des eaux blanches, plutôt qu'un rejet au réseau
communal ou au fossé. Les solutions industrielles ne sont pas transposables à la taille d'un atelier
fermier ou artisanal, ce que l'Institut de l'Élevage souligne explicitement
[Institut de l'Élevage, 2013](https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere).
Concerne les TPE de 10.51C et les glaciers artisans. Fusionnable avec L10. Titre proposé :
« Traiter les effluents de l'atelier par une filière adaptée à sa taille ».

### Agir sur le grand cycle de l'eau (`agir_grand_cycle`)

**L12. Porter la contrainte sanitaire du site dans les instances locales de l'eau.** Participation à
la commission locale de l'eau du SAGE, au comité sécheresse départemental, aux échanges avec le
service d'eau potable et la DREAL, pour faire reconnaître le caractère incompressible des volumes de
nettoyage, documenter les efforts déjà consentis et sécuriser la lecture de l'exclusion « flux
poussé » de l'arrêté sécheresse ICPE
[AIDA, 2023](https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement).
L'anticipation de ce dialogue a un effet direct sur ce qui sera exigé le jour de la crise.
Concerne surtout les sites ICPE, mais une coopérative fromagère peut porter le sujet collectivement.
Fusionnable avec la mesure transversale de démarche collective. Titre proposé : « Faire valoir les
besoins du site dans les instances locales de l'eau ».

## 6. Codes limites au sein du périmètre

**10.52Z, fabrication de glaces et sorbets (968 établissements).** C'est le code dont le profil
s'écarte le plus, sur quatre points. Il n'y a ni évaporation ni séchage, donc **pas d'eaux issues du
lait** : le levier L7, le plus emblématique du secteur, ne le concerne pas. Il n'y a **pas de
lactosérum**, donc une charge organique différente, plutôt sucrée et grasse, et les leviers L9 et
L11 se lisent autrement. L'activité est **saisonnière**, concentrée sur quelques mois, ce qui change
le dimensionnement du traitement des effluents et fait coïncider le pic de production avec le pic de
tension sur la ressource, point d'attention réel pour ce code. Enfin, le froid y est plus intense
(surgélation) et la population est majoritairement composée de très petites unités artisanales, le
plus souvent sous le seuil ICPE de 7 000 litres par jour.

Ce qui reste commun justifie le maintien dans le périmètre : nettoyage en place et nettoyage manuel
comme premier poste, pasteurisation et maturation d'un mix laitier, froid partout, effluents
chargés. Conséquence pour l'étape 4 : le questionnaire devra offrir des options « sans objet » sur
les condensats et le lactosérum, faute de quoi un glacier répondra par défaut et fera chuter son
score sur des sujets qui ne le concernent pas. Aucune source publique consolidée n'a été trouvée sur
la consommation d'eau spécifique de ce code (à confirmer).

**10.51D, fabrication d'autres produits laitiers (156 établissements).** Profil inverse : poudres,
caséines, lactosérum transformé, ingrédients. C'est là que l'évaporation et le séchage dominent,
donc le plus gros gisement de condensats, confirmé par les volumes du panel AQUAREL (145 000 m3 par
an en moyenne pour un site de production de poudres), et les ratios d'eau par tonne les plus élevés.
Les leviers L6 et L7 y sont centraux, et ces sites relèvent plus souvent de l'enregistrement ou de
l'autorisation.

**10.51B, fabrication de beurre (27 établissements).** Effectif marginal. Le babeurre y joue le rôle
du lactosérum, avec une charge organique élevée et une valorisation possible. Pas de divergence de
profil justifiant une sortie du périmètre.

**10.51A, fabrication de lait liquide et de produits frais (298 établissements).** Cœur de cible :
NEP très fréquente (changements de format et de recette sur les lignes de conditionnement),
pasteurisation, froid, et volumes suffisants pour que le recyclage des rinçages soit rentable.

## 7. Sources

| Organisme | Titre | Année | URL |
|---|---|---|---|
| ARIA Auvergne-Rhône-Alpes | Des solutions pour réduire les tensions sur l'eau dans l'agroalimentaire | 2024 | https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/ |
| ANIA, Adépale, La Coopération Agricole | Les entreprises agroalimentaires présentent un plan de sobriété hydrique | 2024 | https://www.ania.net/developpement-durable/les-entreprises-agroalimentaires-sengagent-et-presentent-un-plan-de-sobriete-hydrique |
| ANIA, Adépale, La Coopération Agricole | Plan de sobriété hydrique de la filière agroalimentaire | 2024 | https://www.lacooperationagricole.coop/sites/default/files/2024-09/PSH_Plan%20de%20sobri%C3%A9t%C3%A9%20hydrique%20-%20AgroAlimentaire.pdf |
| CIGC (interprofession du Comté) | Les économies d'eau dans la filière Comté | 2025 | https://www.comte.com/articles/les-economies-deau-dans-la-filiere-comte/ |
| Cniel et Institut de l'Élevage | La consommation d'eau dans les fermes laitières | 2022 | https://www.produits-laitiers.com/la-consommation-deau-dans-les-fermes-laitieres/ |
| Institut de l'Élevage (Idele) | Dossier : effluents de fromagerie fermière | 2013 | https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere |
| ACTALIA, Cniel, agences de l'eau Loire-Bretagne et Seine-Normandie | Projet AQUAREL, réutilisation des eaux issues du lait, document général (composition du lait, volumes par site, taux de récupération, qualité des eaux, enquête sur les pratiques) | 2018 | http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf |
| ACTALIA, Cniel, agences de l'eau Loire-Bretagne et Seine-Normandie | Projet AQUAREL, synthèse : réutilisation de l'eau en transformation laitière | 2018 | http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_Synth%C3%A8se_r%C3%A9utilisation-de-leau-en-transformation-laiti%C3%A8re.pdf |
| ACTALIA | Publication des livrables du projet AQUAREL (enquête sur 58 sites, synthèses et fiches techniques) | 2018 | https://www.actalia.eu/reutilisation-des-eaux-issues-du-lait-publication-des-livrables-du-projet-aquarel/ |
| FNIL | Eau du lait | sans date | https://fnil.fr/actions/filiere-laitiere/eau-du-lait |
| Les agences de l'eau | Comment une grande usine agroalimentaire peut-elle économiser l'eau ? | 2023 | https://www.lesagencesdeleau.fr/ressources/comment-une-grande-usine-agro-alimentaire-peut-elle-economiser-leau |
| Les agences de l'eau | Comment réduire la consommation d'eau d'une usine agroalimentaire ? | 2024 | https://www.lesagencesdeleau.fr/ressources/comment-reduire-la-consommation-deau-dune-usine-agroalimentaire |
| Assemblée nationale et ministère de la Santé | Question écrite n° 12522 et réponse, valorisation de l'eau récupérée lors de la fabrication du fromage | 2023-2024 | https://questions.assemblee-nationale.fr/q16/16-12522QE.htm |
| Légifrance | Décret n° 2024-33 du 24 janvier 2024 relatif aux eaux réutilisées dans les entreprises du secteur alimentaire | 2024 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414 |
| Légifrance | Décret n° 2024-769 du 8 juillet 2024 autorisant certaines eaux recyclées comme ingrédient | 2024 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908702 |
| Légifrance | Arrêté du 8 juillet 2024 relatif aux eaux réutilisées dans les entreprises du secteur alimentaire | 2024 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908820 |
| AIDA, Ineris | Arrêté du 30 juin 2023 relatif aux mesures de restriction en période de sécheresse pour les ICPE | 2023 | https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement |
| Légifrance | Code de l'environnement, articles L213-10-1 à L213-10-3 (redevances pour pollution de l'eau) | en vigueur | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074220/LEGISCTA000006195228/ |
| Agence de l'eau Seine-Normandie | Redevance pollution de l'eau d'origine non domestique | 2025 | https://www.eau-seine-normandie.fr/les-redevances/redevance-pollution-de-l-eau-d-origine-non-domestique |
| AIDA, Ineris | Rubrique ICPE 2230, traitement et transformation du lait | en vigueur | https://aida.ineris.fr/reglementation/2230-traitement-transformation-lait-produits-issus-lait |
| AIDA, Ineris | Rubrique ICPE 3643, traitement et transformation du lait (IED) | en vigueur | https://aida.ineris.fr/reglementation/3643-traitement-transformation-lait |
| AIDA, Ineris | Arrêté du 24 avril 2017, prescriptions générales, rubrique 2230 en enregistrement | 2017 | https://aida.ineris.fr/reglementation/arrete-240417-relatif-prescriptions-generales-applicables-installations-relevant-0 |
| AIDA, Ineris | Rubrique ICPE 2921, refroidissement évaporatif | en vigueur | https://aida.ineris.fr/reglementation/2921-refroidissement-evaporatif-dispersion-deau-flux-dair-genere-ventilation |
| AIDA, Ineris | Tours aéroréfrigérantes et prévention de la légionellose | en vigueur | https://aida.ineris.fr/inspection-icpe/air/prevention-legionnellose/tours-aerorefrigerantes |

Note sur les liens : les pages Légifrance renvoient un code 403 aux robots, sans que les références
en soient fausses. Les textes ont été vérifiés un par un (numéros, dates, titres, contenus), et
l'arrêté sécheresse du 30 juin 2023 est cité dans sa reprise AIDA, accessible.

### Ce qui n'a pas pu être sourcé

Trois points restent au conditionnel et mériteraient une vérification avant la rédaction des
mesures : le ratio d'eau par litre de lait propre aux fabrications de poudres et d'ingrédients
(10.51D) ; la consommation d'eau spécifique de la fabrication de glaces et sorbets (10.52Z) ; la
part exacte du nettoyage en place dans la consommation d'une laiterie française, que les livrables
du projet AQUAREL ne donnent pas et dont les seules valeurs publiques disponibles portent sur
l'agroalimentaire dans son ensemble. S'y ajoute, de moindre portée, la part des entreprises
laitières équipées d'une station d'épuration ou d'un prétraitement, reprise de la presse
professionnelle et non d'une publication directe du Cniel.

## Questions

### 1. Comment suivez-vous aujourd'hui la consommation d'eau de votre site ?

`lait_q01` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Je n'ai pas de compteur, je m'en remets à la facture | `aucun_compteur` | 0 | 0 | comptage |
| Un compteur général en entrée de site, relevé de temps en temps | `compteur_general` | 1 | 1 | comptage |
| Des compteurs par atelier ou par usage, relevés régulièrement | `par_atelier` | 2 | 2 |  |
| Des compteurs par usage, et un ratio rapporté au lait traité | `ratio_lait` | 3 | 3 |  |

### 2. D'où provient l'eau que vous utilisez sur le site ? (plusieurs réponses possibles)

`lait_q02` · multi_choice · Connaissance & mesure · classe `source_eau`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Réseau public d'eau potable | `aep` | 0 | 0 | diversification_sources |
| Forage ou captage d'eau souterraine | `forage` | 1 | 1 |  |
| Captage d'eau de surface (rivière, canal) | `surface` | 1 | 1 |  |
| Eaux issues du lait (condensats, perméats) | `eaux_du_lait` | 3 | 3 |  |
| Eaux de process recyclées (rinçages réutilisés) | `recyclage_process` | 3 | 3 |  |

### 3. Quelle est votre consommation d'eau annuelle, tous usages confondus ?

`lait_q03` · numeric · Connaissance & mesure

- Saisie en m³/an, de 0 à 10000000 · si renseignée : maturité 2, concernement 2, topics []

### 4. Avez-vous réalisé un audit eau ou un diagnostic de vos consommations ?

`lait_q04` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, jamais | `jamais` | 0 | 0 | audit |
| On y a réfléchi, sans le faire | `envisage` | 0 | 2 | audit |
| Oui, il y a plus de cinq ans | `ancien` | 1 | 2 | audit |
| Oui, il y a moins de trois ans | `recent` | 3 | 3 |  |

### 5. Comment sont nettoyés vos circuits et vos équipements de production ?

`lait_q05` · single_choice · Nettoyage & froid

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Démontage et lavage manuel au jet | `manuel_seul` | 0 | 0 | nettoyage |
| Nettoyage en place automatisé, cycles réglés sur des durées fixes | `nep_temps` | 1 | 1 | nettoyage |
| Nettoyage en place piloté par sondes de conductivité | `nep_pilotee` | 2 | 2 |  |
| Nettoyage piloté, avec récupération du dernier rinçage | `nep_recyclage` | 3 | 3 |  |

### 6. Pratiquez-vous le prénettoyage à sec (raclage, récupération) avant de rincer ?

`lait_q06` · single_choice · Nettoyage & froid

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, on passe directement à l'eau | `jamais` | 0 | 0 | nettoyage |
| Sur certains postes seulement | `parfois` | 1 | 1 | nettoyage |
| Oui, partout, avec des consignes écrites | `systematique` | 3 | 3 |  |

### 7. Comment refroidissez-vous vos produits et vos installations ?

`lait_q07` · single_choice · Nettoyage & froid

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| À l'eau perdue, rejetée après usage | `eau_perdue` | 0 | 0 | froid |
| Tour aéroréfrigérante, avec appoint et purges | `tour_aero` | 1 | 1 | froid |
| Circuits fermés avec échangeur, ou condenseurs secs | `circuit_ferme` | 3 | 3 |  |
| Groupes froid à air, sans consommation d'eau | `sans_eau` | 2 | 2 |  |

### 8. Que devient le lactosérum (ou le babeurre) produit par votre site ?

`lait_q08` · single_choice · Valorisation & rejets

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Il part avec les effluents | `reseau_effluents` | 0 | 0 | lactoserum |
| Il est épandu ou cédé sans contrat suivi | `epandage` | 1 | 1 | lactoserum |
| Il est collecté et valorisé (alimentation animale, méthanisation) | `valorise_brut` | 2 | 2 |  |
| Il est concentré sur site, et l'eau en est récupérée | `concentre_sur_site` | 3 | 3 |  |
| Mon activité n'en produit pas | `sans_objet` | 2 | 2 |  |

### 9. Votre site produit-il des condensats d'évaporation ou des perméats d'osmose ?

`lait_q09` · single_choice · Valorisation & rejets

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, ni évaporateur, ni séchoir, ni osmose inverse | `non_equipe` | 2 | 2 |  |
| Oui, mais ces eaux partent aux effluents | `equipe_non_valorise` | 0 | 0 | eaux_du_lait |
| Oui, et elles servent à quelques usages sans contact | `valorise_partiel` | 1 | 2 |  |
| Oui, réutilisation en place et déclarée au préfet | `valorise_declare` | 3 | 3 |  |

### 10. Comment vos effluents sont-ils traités avant d'être rejetés ?

`lait_q10` · single_choice · Valorisation & rejets

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Aucun traitement, rejet direct | `aucun_traitement` | 0 | 0 | effluents |
| Raccordés au réseau collectif, sans convention à jour | `raccorde_sans_convention` | 1 | 1 | effluents |
| Raccordés, avec une convention de rejet à jour | `raccorde_convention` | 2 | 2 |  |
| Station de traitement sur site, avec autosurveillance | `station_propre` | 3 | 3 |  |

### 11. Avez-vous analysé votre exposition aux restrictions d'eau en période de sécheresse ?

`lait_q11` · single_choice · Gouvernance & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, ce n'est pas un sujet que j'ai regardé | `non_analyse` | 0 | 0 | risque_reglementaire |
| Je suis informé, sans analyse formelle | `informe` | 1 | 2 | risque_reglementaire |
| Oui, je sais ce qui s'arrêterait et dans quel ordre | `evalue` | 2 | 2 |  |
| Oui, et un plan écrit dit quoi réduire à chaque niveau | `plan_formalise` | 3 | 3 |  |

### 12. Participez-vous à une démarche collective sur l'eau à l'échelle du territoire ?

`lait_q12` · single_choice · Gouvernance & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, aucune | `non` | 0 | 0 | collectif |
| J'en ai entendu parler, sans y prendre part | `informe` | 1 | 1 | collectif |
| Oui, je participe aux réunions | `participe` | 2 | 2 |  |
| Oui, et j'y porte des engagements chiffrés | `pilote` | 3 | 3 |  |

## Filtres du plan d'action

| Filtre | Règle | Type | Effet | Priorité | Mesures |
|---|---|---|---|---|---|
| `f_suivi_absent` | Pas de compteur ou compteur général seul : recommander le comptage par usage | answer | add | 1 | ACT_AGR_001 |
| `f_pas_de_ratio` | Pas d'indicateur rapporté au lait traité : recommander le ratio eau sur lait | answer | add | 1 | ACT_LAI_002 |
| `f_pas_de_recyclage` | Aucune eau de process recyclée parmi les sources : la cascade de rinçages n'est pas pratiquée | class | add | 1 | ACT_LAI_003 |
| `f_conso_icpe` | Prélèvement annuel au-dessus de 10 000 m3, seuil de l'arrêté sécheresse ICPE du 30 juin 2023 : un plan de gestion écrit devient nécessaire | numeric | add | 1 | ACT_AGR_009 |
| `f_pas_audit` | Pas d'audit, audit seulement envisagé ou de plus de cinq ans : recommander le diagnostic | answer | add | 1 | ACT_AGR_002 |
| `f_nep_perfectible` | Lavage manuel ou NEP réglée au temps : recommander l'optimisation des cycles de nettoyage | answer | add | 1 | ACT_LAI_003 |
| `f_nettoyage_manuel` | Nettoyage entièrement manuel au jet : le levier immédiat est le geste et la consigne | answer | add | 1 | ACT_LAI_001 |
| `f_pas_prenettoyage` | Prénettoyage à sec absent ou partiel : recommander la formation et les consignes de nettoyage | answer | add | 1 | ACT_LAI_001 |
| `f_froid_ouvert` | Refroidissement à l'eau perdue ou par tour aéroréfrigérante : recommander la fermeture des circuits | answer | add | 1 | ACT_LAI_004 |
| `f_froid_sans_eau` | Froid produit sans eau : retirer la mesure sur les circuits de refroidissement | answer | remove | 2 | ACT_LAI_004 |
| `f_lactoserum_perdu` | Lactosérum aux effluents ou épandu sans contrat : le sortir du réseau d'effluents | answer | add | 1 | ACT_LAI_007 |
| `f_lactoserum_non_concentre` | Lactosérum non concentré sur site : proposer l'osmose inverse ou l'évaporation | answer | add | 1 | ACT_LAI_005 |
| `f_sans_lactoserum` | Activité sans lactosérum ni babeurre, cas des glaces et sorbets : retirer les deux mesures du lactosérum | answer | remove | 2 | ACT_LAI_005, ACT_LAI_007 |
| `f_eaux_du_lait_perdues` | Condensats ou perméats produits mais non valorisés, ou valorisés partiellement : recommander la valorisation déclarée | answer | add | 1 | ACT_LAI_006 |
| `f_sans_evaporation` | Site sans évaporateur ni osmose : on ne valorise pas des eaux que l'on ne produit pas | answer | remove | 2 | ACT_LAI_006 |
| `f_effluents_fragiles` | Rejet sans traitement, ou raccordement sans convention à jour : fiabiliser la filière de traitement | answer | add | 1 | ACT_LAI_008 |
| `f_risque_non_analyse` | Exposition aux restrictions non analysée ou connue sans formalisation : recommander le plan de gestion | answer | add | 1 | ACT_AGR_009 |
| `f_plan_deja_formalise` | Plan de gestion de l'eau déjà écrit : ne pas le proposer, même au-dessus du seuil de 10 000 m3 | answer | remove | 2 | ACT_AGR_009 |
| `f_hors_collectif` | Hors de toute démarche collective de territoire : proposer d'y entrer | answer | add | 1 | ACT_AGR_010 |
| `f_sans_nep` | Nettoyage entièrement manuel : pas de cycle de NEP à optimiser, la mesure ne s'applique pas | answer | remove | 2 | ACT_LAI_003 |
| `f_volume_insuffisant` | Sous 10 000 m3 par an, une osmose inverse ou un évaporateur ne s'amortit pas : écarter la concentration du lactosérum | numeric | remove | 2 | ACT_LAI_005 |
| `f_audit_inconnu` | Question de l'audit laissée sans réponse : ne pas savoir est le motif même de recommander le diagnostic | answer | add | 1 | ACT_AGR_002 |

## Mesures

### ACT_LAI_001 · Former les équipes au nettoyage économe en eau

*Nettoyage économe* · sensibiliser_former · secteurs ['industrie_laitiere'] · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut brouillon

Écrire les consignes de nettoyage poste par poste, équiper les lances de pistolets à gâchette et généraliser le prénettoyage à sec avant tout passage à l'eau. Vous agissez sur le premier poste de consommation du site, et vous réduisez du même coup la charge organique envoyée à la station.

- **info** : Le nettoyage et la désinfection représentent environ 43 % de l'eau utilisée en industrie alimentaire, et jusqu'à 80 à 85 % selon les productions.
- **avertissement** : Dès le niveau de vigilance sécheresse, l'arrêté du 30 juin 2023 exige une sensibilisation du personnel selon une procédure écrite affichée sur le site. Formaliser les consignes n'est donc pas seulement une bonne pratique. (https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement)
- **ressource** : Réduire les tensions sur l'eau dans l'agroalimentaire (https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/)
- Sources :
  - description : https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/ (sans date) · « Les opérations de nettoyage et de désinfection représentent environ 43 % de l'eau utilisée en industries alimentaires, contre 33 % pour le process. »
  - infos_complementaires : https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement (2023-06-30) · « Au niveau de vigilance, sensibilisation du personnel selon une procédure écrite affichée sur site. »

### ACT_LAI_002 · Suivre le ratio d'eau par litre de lait traité

*Ratio eau sur lait* · suivre_comprendre_maitriser · secteurs ['industrie_laitiere'] · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut brouillon

Rapporter chaque mois les volumes d'eau consommés aux litres de lait travaillés, atelier par atelier et cycle de nettoyage par cycle de nettoyage. Vous distinguez alors une dérive de pratique d'un simple changement de mix produit, et vous disposez de la preuve chiffrée qu'attend l'inspection en période de restriction.

- **info** : Repère de filière : environ 1 litre d'eau par litre de lait en fromagerie de comté, 1,4 litre en ajoutant du morbier, 1,7 litre en ajoutant du bleu de Gex ou du mont d'or. Le ratio dit autant le mix produit que la pratique.
- **avertissement** : Sans historique de relevés, impossible de démontrer la réduction d'au moins 20 % du prélèvement depuis le 1er janvier 2018 qui exclut un établissement des restrictions sécheresse. (https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement)
- Sources :
  - infos_complementaires : https://www.comte.com/articles/les-economies-deau-dans-la-filiere-comte/ (sans date) · « 1 litre d'eau par litre de lait pour le seul comté, 1,4 avec le morbier, 1,7 avec le bleu de Gex ou le mont d'or. »
  - infos_complementaires : https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement (2023-06-30) · « Exploitants des établissements ayant réduit leur prélèvement d'eau d'au moins 20 % depuis le 1er janvier 2018. »

### ACT_LAI_003 · Optimiser les cycles de nettoyage en place (NEP)

*Optimisation de la NEP* · ameliorer_efficacite_hydrique · secteurs ['industrie_laitiere'] · impact 3 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "faible", "humain": "moyen"} · statut brouillon

Piloter la fin de rinçage par conductimétrie plutôt qu'à la durée, pousser le produit à l'air ou au racleur avant de rincer, et récupérer le dernier rinçage pour servir de prérinçage au cycle suivant. Vous réduisez le premier poste d'eau du site sans rien céder sur le résultat sanitaire.

- **info** : La récupération du dernier rinçage dans une bâche tampon est le geste le moins coûteux de la liste : cette eau est déjà propre, elle ne demande aucun traitement pour redevenir un prérinçage.
- **avertissement** : Toute modification d'un cycle de nettoyage relève du plan de maîtrise sanitaire : la validation du nettoyage doit être refaite et documentée avant de passer en routine.
- **retour_experience** : Une machine de lavage de bacs passée en circuit quasi fermé atteint 90 % d'économie sur ce poste. (https://www.lesagencesdeleau.fr/ressources/comment-une-grande-usine-agro-alimentaire-peut-elle-economiser-leau)
- Sources :
  - description : https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/ (sans date) · « Le nettoyage est le premier poste de consommation d'eau des industries alimentaires. »
  - infos_complementaires : https://www.lesagencesdeleau.fr/ressources/comment-une-grande-usine-agro-alimentaire-peut-elle-economiser-leau (sans date) · « Machine de lavage de bacs en circuit quasi fermé : 90 % d'économie sur le poste. »

### ACT_LAI_004 · Fermer les circuits de refroidissement et supprimer les tours ouvertes

*Circuits de froid fermés* · ameliorer_efficacite_hydrique · secteurs ['industrie_laitiere'] · impact 3 · facilité 1 · moyen_terme · effort {"capex": "important", "opex": "faible", "humain": "moyen"} · statut brouillon

Remplacer le refroidissement en eau perdue par des boucles fermées avec échangeur, et les tours aéroréfrigérantes par des condenseurs secs ou adiabatiques. Vous supprimez un poste entier de consommation et, avec les tours, l'obligation de surveillance des légionelles qui va avec.

- **info** : Une tour aéroréfrigérante relève de la rubrique ICPE 2921 et impose de maintenir les légionelles pneumophila sous 1 000 unités formant colonie par litre, avec analyses périodiques et plan d'entretien. La supprimer fait disparaître cette obligation. (https://aida.ineris.fr/inspection-icpe/air/prevention-legionnellose/tours-aerorefrigerantes)
- **retour_experience** : Une usine agroalimentaire ayant mené ce type de programme consomme 25 % d'eau en moins qu'il y a six ans et vise 30 %. (https://www.lesagencesdeleau.fr/ressources/comment-une-grande-usine-agro-alimentaire-peut-elle-economiser-leau)
- **avertissement** : Un condenseur sec perd en efficacité quand la température extérieure monte, c'est-à-dire au moment précis où la ressource est tendue. Le dimensionnement se fait sur les pics d'été, pas sur la moyenne annuelle.
- Sources :
  - infos_complementaires : https://aida.ineris.fr/inspection-icpe/air/prevention-legionnellose/tours-aerorefrigerantes (sans date) · « Concentration en légionelles pneumophila maintenue sous 1 000 UFC/L, analyses périodiques, plan d'entretien. »
  - infos_complementaires : https://www.lesagencesdeleau.fr/ressources/comment-une-grande-usine-agro-alimentaire-peut-elle-economiser-leau (sans date) · « 25 % d'eau en moins qu'il y a six ans, objectif 30 %, suppression des tours aéroréfrigérantes. »

### ACT_LAI_005 · Concentrer le lactosérum sur site pour en récupérer l'eau

*Concentration du lactosérum* · changer_process_pratiques · secteurs ['industrie_laitiere'] · impact 3 · facilité 1 · moyen_terme · effort {"capex": "important", "opex": "moyen", "humain": "moyen"} · statut brouillon

Installer une osmose inverse ou un évaporateur pour séparer le lactosérum en un concentré valorisable et une eau récupérable. Vous récupérez de l'ordre des trois quarts de l'eau contenue dans le lactosérum, et vous divisez d'autant les camions de petit-lait à transporter.

- **info** : Ordres de grandeur : l'osmose inverse appliquée au lactosérum récupère environ 75 % de l'eau, jusqu'à 95 % dans les meilleurs cas. En évapo-concentration, dix tonnes de lait écrémé concentrées à 50 % de matière sèche libèrent 8 200 kilogrammes d'eau. (http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf)
- **retour_experience** : Dans la filière Comté, quatre litres de lactosérum donnent trois litres d'eau et un litre de concentré. Une fromagerie équipée est descendue à environ 0,9 litre d'eau de réseau par litre de lait, tout en divisant par deux à quatre le transport de petit-lait. (https://www.comte.com/articles/les-economies-deau-dans-la-filiere-comte/)
- **avertissement** : La récupération s'arrête à la concentration. L'eau qui part en phase gaz lors du séchage, de 50 à 96 % de matière sèche, n'est pas récupérée aujourd'hui, faute de rentabilité technique.
- **avertissement** : L'eau séparée du lactosérum n'est pas réutilisable d'office : sa réutilisation relève de la déclaration au préfet et doit entrer dans le plan de maîtrise sanitaire. Portez les deux volets dans le même projet, sans quoi il ne reste que l'économie de transport.
- Sources :
  - description : https://www.comte.com/articles/les-economies-deau-dans-la-filiere-comte/ (sans date) · « Quatre litres de lactosérum donnent trois litres d'eau et un litre de concentré ; environ 0,9 litre d'eau de réseau par litre de lait. »
  - infos_complementaires : http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf (sans date) · « Récupération d'eau de l'ordre de 75 %, pouvant atteindre 95 % ; évapo-concentration de dix tonnes de lait écrémé produisant 8 200 kg d'eau, soit 90,1 %. »

### ACT_LAI_006 · Déclarer et valoriser les eaux issues du lait sur le site

*Eaux issues du lait* · valoriser_reut_eaux_non_conventionnelles · secteurs ['industrie_laitiere'] · impact 3 · facilité 2 · moyen_terme · effort {"capex": "important", "opex": "moyen", "humain": "important"} · statut brouillon

Réutiliser les condensats d'évaporation et les perméats d'osmose inverse pour le lavage des camions, l'alimentation des chaudières ou le prérinçage des lignes, après déclaration au préfet. Vous substituez à l'eau de réseau une ressource déjà contenue dans le lait, sur des volumes qui se comptent en dizaines de milliers de mètres cubes.

- **avertissement** : Depuis le décret n° 2024-33, les eaux recyclées issues de la matière première et les eaux de processus relèvent d'une déclaration au préfet, mais les eaux usées traitées exigent une autorisation préfectorale. Dans tous les cas, la réutilisation entre dans le plan de maîtrise sanitaire et les vérifications passent par un laboratoire accrédité. (https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908820)
- **info** : La qualité de ces eaux varie d'un facteur mille selon leur origine, d'une DCO de 2 mgO2/L pour un condensat de lait à 10 000 pour un perméat de lactosérum acide. Aucun choix de traitement ne se fait sans analyse préalable.
- **info** : Ordre de grandeur du gisement : un site multi-activités avec une activité poudres produit en moyenne 269 000 m3 par an d'eaux issues du lait, dans une fourchette de 29 000 à 710 000. (http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf)
- **retour_experience** : Enquête menée en 2018 auprès d'une trentaine de sites français valorisant leurs eaux issues du lait : 68 % les emploient au lavage standard, 58 % en alimentation de chaudières, 26 % dans les tours aéroréfrigérantes, 19 % au lavage extérieur des camions. Constat antérieur aux décrets de 2024, qui ne vaut pas autorisation. (http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf)
- Sources :
  - description : https://fnil.fr/actions/filiere-laitiere/eau-du-lait (sans date) · « Gisement national d'eaux de concentration de la matière laitière estimé à 16 millions de m3 par an, dont 11 encore disponibles. »
  - infos_complementaires : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414 (2024-01-24) · « Décret n° 2024-33 : eaux recyclées issues des matières premières et eaux de processus sous déclaration, eaux usées traitées sous autorisation préfectorale. »
  - infos_complementaires : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908820 (2024-07-08) · « Intégration au plan de maîtrise sanitaire, programme de surveillance, vérifications par un laboratoire accrédité COFRAC. »
  - infos_complementaires : http://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf (sans date) · « Volumes par site, composition des eaux issues du lait, usages constatés sur une trentaine de sites. »

### ACT_LAI_007 · Sortir le lactosérum et les pertes de lait des effluents

*Lactosérum hors effluents* · agir_rejets_qualite · secteurs ['industrie_laitiere'] · impact 2 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "faible", "humain": "moyen"} · statut brouillon

Collecter séparément le lactosérum et les égouttures pour les valoriser en alimentation animale, en ingrédient ou en méthanisation, et traquer les pertes de produit sur les lignes et les nettoyages. Le lactosérum portant l'essentiel de la charge polluante, vous allégez d'un coup le traitement et la redevance.

- **info** : En fromagerie fermière, le lactosérum concentre à lui seul de l'ordre de 70 % de la charge polluante des effluents. (https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere)
- **info** : L'assiette de la redevance pour pollution d'origine non domestique est diminuée de la pollution éliminée. Toute matière organique détournée du réseau d'effluents se lit donc deux fois : moins de charge à traiter, moins de redevance.
- **avertissement** : La valorisation en alimentation animale et la méthanisation ont leurs propres règles de traçabilité et de transport. Un lactosérum collecté séparément est un coproduit à gérer, pas un déchet dont on se débarrasse.
- Sources :
  - description : https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere (2013-01-01) · « Le lactosérum concentre environ 70 % de la charge polluante des effluents de fromagerie fermière. »
  - infos_complementaires : https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074220/LEGISCTA000006195228/ (sans date) · « Code de l'environnement, articles L213-10-1 à L213-10-3, redevances pour pollution de l'eau. »

### ACT_LAI_008 · Traiter les effluents lactés par une filière adaptée à l'atelier

*Traitement des effluents* · agir_rejets_qualite · secteurs ['industrie_laitiere'] · impact 2 · facilité 1 · moyen_terme · effort {"capex": "important", "opex": "moyen", "humain": "moyen"} · statut brouillon

Dimensionner le traitement selon la taille réelle : bassin tampon, dégraissage et traitement biologique avec autosurveillance sur un site industriel, filtre planté ou lit d'infiltration pour un atelier fermier. Vous évitez le double écueil du rejet non conforme et de l'installation surdimensionnée que personne ne fait tourner.

- **info** : En fromagerie fermière, un litre de lait transformé génère de l'ordre de 4 à 5 litres d'effluents. Le bassin tampon est souvent le premier maillon manquant, car les nettoyages arrivent par à-coups. (https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere)
- **avertissement** : Les solutions industrielles ne se transposent pas à l'échelle d'un atelier fermier ou artisanal. Un traitement surdimensionné et mal exploité ne protège pas mieux le milieu qu'une absence de traitement.
- **avertissement** : Un site raccordé au réseau collectif est tenu par une autorisation de déversement et une convention de rejet qui plafonnent débit et charge. Une hausse de production sans avenant met le site en infraction.
- Sources :
  - description : https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere (2013-01-01) · « Un litre de lait transformé génère 4 à 5 litres d'effluents ; les filières industrielles ne sont pas transposables aux ateliers fermiers. »

## Simulation

# Simulation du référentiel "Industrie laitière" (industrie_laitiere)

Source : staging + publié · 12 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 8 personas

### Alertes (0)

Aucune.

### Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 2, médiane 6, max 11
- Plans vides : 0 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

### Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 79 % |
| ACT_LAI_002 | Ratio eau sur lait | suivre_comprendre_maitriser | 72 % |
| ACT_LAI_001 | Nettoyage économe | sensibiliser_former | 68 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 57 % |
| ACT_LAI_003 | Optimisation de la NEP | ameliorer_efficacite_hydrique | 51 % |
| ACT_LAI_008 | Traitement des effluents | agir_rejets_qualite | 47 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 45 % |
| ACT_LAI_004 | Circuits de froid fermés | ameliorer_efficacite_hydrique | 44 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 44 % |
| ACT_LAI_006 | Eaux issues du lait | valoriser_reut_eaux_non_conventionnelles | 42 % |
| ACT_LAI_007 | Lactosérum hors effluents | agir_rejets_qualite | 31 % |
| ACT_LAI_005 | Concentration du lactosérum | changer_process_pratiques | 25 % |

### Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 3 % | | faible | 2 % |
| intermediaire | 83 % | | moyen | 74 % |
| avance | 15 % | | eleve | 25 % |

### Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_absent | answer | add | 45 % |
| f_pas_de_ratio | answer | add | 72 % |
| f_pas_de_recyclage | class | add | 54 % |
| f_conso_icpe | numeric | add | 38 % |
| f_pas_audit | answer | add | 70 % |
| f_nep_perfectible | answer | add | 18 % |
| f_nettoyage_manuel | answer | add | 22 % |
| f_pas_prenettoyage | answer | add | 59 % |
| f_froid_ouvert | answer | add | 44 % |
| f_froid_sans_eau | answer | remove | 20 % |
| f_lactoserum_perdu | answer | add | 31 % |
| f_lactoserum_non_concentre | answer | add | 52 % |
| f_sans_lactoserum | answer | remove | 20 % |
| f_eaux_du_lait_perdues | answer | add | 42 % |
| f_sans_evaporation | answer | remove | 24 % |
| f_effluents_fragiles | answer | add | 47 % |
| f_risque_non_analyse | answer | add | 45 % |
| f_plan_deja_formalise | answer | remove | 22 % |
| f_hors_collectif | answer | add | 44 % |
| f_sans_nep | answer | remove | 22 % |
| f_volume_insuffisant | numeric | remove | 52 % |
| f_audit_inconnu | answer | add | 9 % |

### Personas

### Fromagerie artisanale, rien de formalisé (fromagerie_novice)

Fromagerie de sept salariés, eau du réseau uniquement, environ 3 000 m³ par an. Lavage manuel au jet sans raclage préalable, refroidissement à l'eau perdue, lactosérum qui part avec les effluents, raccordement au réseau communal sans convention à jour. Aucun audit, aucun suivi, le sujet des restrictions n'a jamais été regardé.

Maturité 14 % (novice) · concernement 14 % · axes : nettoyage, comptage, diversification_sources, audit, froid, lactoserum, effluents, risque_reglementaire, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Ratio eau sur lait (ACT_LAI_002, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage économe (ACT_LAI_001, immediat)
- Lactosérum hors effluents (ACT_LAI_007, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Circuits de froid fermés (ACT_LAI_004, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Traitement des effluents (ACT_LAI_008, moyen_terme)

### Laiterie équipée, en réflexion sur la suite (laiterie_equipee)

PME laitière de 45 salariés, 45 000 m³ par an, réseau public doublé d'un forage. Nettoyage en place piloté par sondes, prénettoyage à sec sur une partie des postes seulement, tour aéroréfrigérante, lactosérum collecté et valorisé en alimentation animale. Convention de rejet à jour, audit de plus de cinq ans, informée des restrictions sans analyse formelle.

Maturité 50 % (intermediaire) · concernement 56 % · axes : diversification_sources, audit, nettoyage, froid, risque_reglementaire, collectif

- Ratio eau sur lait (ACT_LAI_002, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage économe (ACT_LAI_001, immediat)
- Optimisation de la NEP (ACT_LAI_003, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Circuits de froid fermés (ACT_LAI_004, moyen_terme)
- Concentration du lactosérum (ACT_LAI_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Glacier artisan, sans lactosérum ni froid à eau (glacier_artisan)

Fabricant de glaces et sorbets, quatre salariés, 1 200 m³ par an, activité concentrée d'avril à septembre. Pas de lactosérum ni de babeurre, aucun évaporateur, froid produit par des groupes à air sans consommation d'eau. Lavage manuel, prénettoyage à sec sur certains postes, raccordement avec convention à jour. Jamais d'audit, restrictions non regardées.

Maturité 33 % (intermediaire) · concernement 33 % · axes : nettoyage, comptage, diversification_sources, audit, risque_reglementaire, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Ratio eau sur lait (ACT_LAI_002, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage économe (ACT_LAI_001, immediat)
- Démarche collective (ACT_AGR_010, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Site laitier avancé, tout est en place (site_avance)

Site industriel de 280 000 m³ par an, alimenté par forage, par ses eaux issues du lait et par ses eaux de process recyclées. Nettoyage en place piloté avec récupération du dernier rinçage, prénettoyage à sec généralisé et consigné, circuits de froid fermés, lactosérum concentré sur site, condensats réutilisés et déclarés au préfet, station de traitement avec autosurveillance, plan de gestion écrit et engagements portés dans une démarche de territoire.

Maturité 97 % (avance) · concernement 97 % · axes : aucun

Plan vide.

### Assistante qui répond pour le gérant (ne_sait_pas)

Personne qui remplit le questionnaire à la place du dirigeant absent. Elle sait qu'il y a un compteur d'eau en entrée de site, relevé de temps en temps, et rien de plus. Elle préfère répondre qu'elle ne sait pas plutôt que d'inventer.

Maturité 33 % (intermediaire) · concernement 33 % · axes : comptage

- Compteur par usage (ACT_AGR_001, immediat)
- Ratio eau sur lait (ACT_LAI_002, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Site de poudres, gros volumes, condensats perdus (gros_consommateur_poudres)

Site multi-activités avec atelier de séchage, 450 000 m³ par an, réseau public et forage. Bien tenu sur le nettoyage et le prénettoyage, mais refroidissement encore sur tour aéroréfrigérante, lactosérum valorisé en l'état sans concentration, et surtout condensats d'évaporation qui partent intégralement aux effluents. Audit récent, exposition aux restrictions évaluée, participation aux réunions de territoire.

Maturité 64 % (intermediaire) · concernement 64 % · axes : diversification_sources, froid, eaux_du_lait

- Ratio eau sur lait (ACT_LAI_002, immediat)
- Optimisation de la NEP (ACT_LAI_003, court_terme)
- Eaux issues du lait (ACT_LAI_006, moyen_terme)
- Circuits de froid fermés (ACT_LAI_004, moyen_terme)
- Concentration du lactosérum (ACT_LAI_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Site classé, conforme mais rien au-delà (icpe_conforme)

Fromagerie industrielle soumise à enregistrement, 90 000 m³ par an prélevés sur forage. Tout ce que la réglementation impose est fait et bien fait : station de traitement avec autosurveillance, plan de gestion de l'eau écrit, audit récent, circuits de froid fermés. Mais rien n'a été entrepris au-delà de l'obligation, et l'entreprise n'a pas rejoint la démarche collective de son bassin.

Maturité 75 % (avance) · concernement 75 % · axes : collectif

- Ratio eau sur lait (ACT_LAI_002, immediat)
- Optimisation de la NEP (ACT_LAI_003, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Concentration du lactosérum (ACT_LAI_005, moyen_terme)

### Réponses contradictoires (reponses_incoherentes)

Profil volontairement incohérent, pour vérifier que le moteur ne produit pas un plan absurde et pour repérer les questions qui se recouvrent. Déclare suivre un ratio rapporté au lait traité mais n'avoir jamais fait d'audit, récupérer le dernier rinçage de nettoyage mais ne jamais pratiquer le prénettoyage à sec, concentrer son lactosérum sur site mais ne posséder ni évaporateur ni osmose inverse, et rejeter sans aucun traitement tout en ayant un plan de gestion écrit.

Maturité 42 % (intermediaire) · concernement 42 % · axes : diversification_sources, audit, nettoyage, froid, effluents, collectif

- Audit eau (ACT_AGR_002, immediat)
- Nettoyage économe (ACT_LAI_001, immediat)
- Optimisation de la NEP (ACT_LAI_003, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Circuits de froid fermés (ACT_LAI_004, moyen_terme)
- Traitement des effluents (ACT_LAI_008, moyen_terme)

## Couverture par les solutions

ERROR conda.cli.main_run:execute(142): `conda run python api/rapport_couverture.py industrie_laitiere --staging` failed. (See above for error)
### Couverture des mesures : industrie_laitiere (seeds + staging)

12 mesures visibles · 4 sans prestataire · 5 sans aide · 2 sans rien

| Mesure | Catégorie | Prestataires liés | Aides liées |
|---|---|---|---|
| ACT_AGR_009 Plan de gestion de l'eau | Sensibiliser et former | aucun | aucune |
| ACT_LAI_001 Nettoyage économe | Sensibiliser et former | Actalia [conseil_etude+formation] | aucune |
| ACT_AGR_001 Compteur par usage | Suivre, comprendre et maîtriser ses consommations | aucun | Aide aux économies d'eau des activités économiques hors agricoles (agence de l'eau Artois-Picardie, 12e programme), Aide aux économies d'eau et à la réutilisation des activités industrielles et artisanales (agence de l'eau Rhin-Meuse, 12e programme), QUA_1, accélérer les économies d'eau et réduire les prélèvements (agence de l'eau Loire-Bretagne, 12e programme) |
| ACT_AGR_002 Audit eau | Suivre, comprendre et maîtriser ses consommations | CCI France (réseau des chambres de commerce et d'industrie) [conseil_etude] | Aide aux économies d'eau des activités économiques hors agricoles (agence de l'eau Artois-Picardie, 12e programme), Diag Eco-Flux, diagnostic des flux énergie, eau, matières et déchets (ADEME et Bpifrance), Aide aux économies d'eau et à la réutilisation des activités industrielles et artisanales (agence de l'eau Rhin-Meuse, 12e programme), Aide aux économies d'eau et à la réutilisation des eaux non conventionnelles pour les entreprises (agence de l'eau Seine-Normandie, programme Eau, climat et biodiversité 2025-2030), QUA_1, accélérer les économies d'eau et réduire les prélèvements (agence de l'eau Loire-Bretagne, 12e programme), Économiser et recycler l'eau des activités industrielles et de l'artisanat (agence de l'eau Adour-Garonne, programme Eau 2025-2030), ECO3, sobriété en eau des activités industrielles et économiques (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_LAI_002 Ratio eau sur lait | Suivre, comprendre et maîtriser ses consommations | aucun | aucune |
| ACT_LAI_003 Optimisation de la NEP | Améliorer l'efficacité hydrique de ses équipements | Actalia [conseil_etude] | Aide aux économies d'eau des activités économiques hors agricoles (agence de l'eau Artois-Picardie, 12e programme), Aide aux économies d'eau et à la réutilisation des activités industrielles et artisanales (agence de l'eau Rhin-Meuse, 12e programme), Aide aux économies d'eau et à la réutilisation des eaux non conventionnelles pour les entreprises (agence de l'eau Seine-Normandie, programme Eau, climat et biodiversité 2025-2030), QUA_1, accélérer les économies d'eau et réduire les prélèvements (agence de l'eau Loire-Bretagne, 12e programme), Économiser et recycler l'eau des activités industrielles et de l'artisanat (agence de l'eau Adour-Garonne, programme Eau 2025-2030), ECO3, sobriété en eau des activités industrielles et économiques (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_LAI_004 Circuits de froid fermés | Améliorer l'efficacité hydrique de ses équipements | aucun | Aide aux économies d'eau des activités économiques hors agricoles (agence de l'eau Artois-Picardie, 12e programme), Prêt Vert (Bpifrance), Aide aux économies d'eau et à la réutilisation des activités industrielles et artisanales (agence de l'eau Rhin-Meuse, 12e programme), Aide aux économies d'eau et à la réutilisation des eaux non conventionnelles pour les entreprises (agence de l'eau Seine-Normandie, programme Eau, climat et biodiversité 2025-2030), QUA_1, accélérer les économies d'eau et réduire les prélèvements (agence de l'eau Loire-Bretagne, 12e programme), Économiser et recycler l'eau des activités industrielles et de l'artisanat (agence de l'eau Adour-Garonne, programme Eau 2025-2030), ECO3, sobriété en eau des activités industrielles et économiques (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_LAI_005 Concentration du lactosérum | Changer ses process ou pratiques | Actalia [conseil_etude], Plateforme Lait de l'UMR STLO (INRAE, Institut Agro Rennes-Angers) [conseil_etude] | Prêt Vert (Bpifrance) |
| ACT_LAI_006 Eaux issues du lait | Valoriser ou réutiliser les eaux non conventionnelles | Actalia [conseil_etude], Cniel (Centre national interprofessionnel de l'économie laitière) [conseil_etude] | Aide aux économies d'eau des activités économiques hors agricoles (agence de l'eau Artois-Picardie, 12e programme), Prêt Vert (Bpifrance), Aide aux économies d'eau et à la réutilisation des activités industrielles et artisanales (agence de l'eau Rhin-Meuse, 12e programme), Aide aux économies d'eau et à la réutilisation des eaux non conventionnelles pour les entreprises (agence de l'eau Seine-Normandie, programme Eau, climat et biodiversité 2025-2030), QUA_1, accélérer les économies d'eau et réduire les prélèvements (agence de l'eau Loire-Bretagne, 12e programme), Économiser et recycler l'eau des activités industrielles et de l'artisanat (agence de l'eau Adour-Garonne, programme Eau 2025-2030), ECO3, sobriété en eau des activités industrielles et économiques (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_LAI_007 Lactosérum hors effluents | Agir sur ses rejets et la qualité de l'eau | Actalia [conseil_etude] | Réalisation d'installations de méthanisation (ADEME, dispositif 2026) |
| ACT_LAI_008 Traitement des effluents | Agir sur ses rejets et la qualité de l'eau | Actalia [conseil_etude], Réseau des ENIL - ANFOPEIL [formation] | aucune |
| ACT_AGR_010 Démarche collective | Agir sur le grand cycle de l'eau | Les agences de l'eau (six établissements publics de bassin) [conseil_etude] | aucune |

### Fiches à rédiger

- prestataire pour ACT_AGR_009 (Plan de gestion de l'eau, Sensibiliser et former)
- prestataire pour ACT_AGR_001 (Compteur par usage, Suivre, comprendre et maîtriser ses consommations)
- prestataire pour ACT_LAI_002 (Ratio eau sur lait, Suivre, comprendre et maîtriser ses consommations)
- prestataire pour ACT_LAI_004 (Circuits de froid fermés, Améliorer l'efficacité hydrique de ses équipements)
- aide pour ACT_AGR_009 (Plan de gestion de l'eau, Sensibiliser et former)
- aide pour ACT_LAI_001 (Nettoyage économe, Sensibiliser et former)
- aide pour ACT_LAI_002 (Ratio eau sur lait, Suivre, comprendre et maîtriser ses consommations)
- aide pour ACT_LAI_008 (Traitement des effluents, Agir sur ses rejets et la qualité de l'eau)
- aide pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)

### Fiches sans lien vers une mesure du secteur (visibles seulement par repli de catégorie)

- prestataire PREST_AGR_007
- prestataire PREST_LAI_004
- prestataire PREST_LAI_005
- prestataire PREST_LAI_007
- aide AIDE_AGR_004

## Prestataires

### PREST_LAI_001 · Actalia

organisme_technique · secteurs ['industrie_laitiere'] · départements national · statut brouillon

Actalia est un centre technique labellisé Institut Technique Agro-Industriel par le ministère de l'Alimentation, de l'Agriculture et de la Pêche, organisé en pôles d'expertise dont un pôle Produits laitiers de 22 collaborateurs réparti sur quatre sites. Pour les transformateurs laitiers, industriels comme artisanaux ou fermiers, il réalise des prestations sur mesure de technologie et d'environnement (ingénierie de procédés, traitement et valorisation du lactosérum, évaluation de l'efficacité des procédures de nettoyage et de désinfection avec audit et formation sur site, analyses de laboratoire), et il a mené pour le Cniel le projet AQUAREL sur la réutilisation des eaux issues du lait, le traitement des effluents laitiers et les bonnes pratiques de gestion de l'eau. Ces prestations sont confidentielles, personnalisées et encadrées par des conditions générales de vente, à demander aux experts du pôle concerné, tandis que les livrables du projet AQUAREL sont téléchargeables librement sur la page Téléchargements du site.

- Mesures : ACT_LAI_001 [conseil_etude+formation], ACT_LAI_003 [conseil_etude], ACT_LAI_005 [conseil_etude], ACT_LAI_006 [conseil_etude], ACT_LAI_007 [conseil_etude], ACT_LAI_008 [conseil_etude]
- site_internet : https://www.actalia.eu
- mail : information@actalia.eu
- tel : 02 33 06 71 71
- adresse : 310 rue Popielujko, 50000 Saint-Lô
- linkedin : https://fr.linkedin.com/company/actalia-centretechnique
- Sources :
  - nom, type, description : https://www.actalia.eu/ (2026-09-22) · « Centre technique expertise agroalimentaire. Audit - Conseil - Etude - Analyse - Formation - Recherche - Veille. ACTALIA est labellisé Institut Technique Agro-Industriel par le ministère de l'Alimentation, de l'Agriculture et de la Pêche. »
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=ACTALIA (2026-09-22) · « ACTALIA, siren 325346542, siret du siège 32534654200153, 310 RUE POPIELUJKO 50000 SAINT-LO, departement 50, nature juridique 9220, activité principale 72.11Z, 11 établissements ouverts. »
  - contacts, departements : https://www.actalia.eu/contact/ (2026-09-22) · « ACTALIA Siège social, 310 rue Popielujko, 50 000 SAINT-LÔ, Tél. : +33 (02) 33 06 71 71. La carte des localisations porte treize implantations : Saint-Lô, Villers-Bocage, Le Chaffaut-Saint-Jurson, La Roche-sur-Foron, Bourg-en-Bresse, Poligny, Mamirolle, Maisons-Alfort, Rennes (trois adresses), Surgères et Paris. »
  - contacts : https://www.actalia.eu/actalia/nous-retrouver/ (2026-09-22) · « Sur notre page Linkedin : https://fr.linkedin.com/company/actalia-centretechnique »
  - description, expertises, mesures : https://www.actalia.eu/poles-d-expertise/pole-produits-laitiers/prestations/ (2026-09-22) · « Avec une équipe pluridisciplinaire de 22 collaborateurs répartie sur 4 sites, ACTALIA Produits laitiers développe et propose des compétences uniques en technologie laitière et fromagère. ACTALIA intègre dans ses travaux la dimension environnementale pour les ateliers et industries laitières. Que vous soyez transformateurs laitiers (groupe industriel, PME, TPE, fermiers) [...] ACTALIA Produits laitiers vous accompagne [...] Diagnostics et solutions des problèmes technologiques dans vos ateliers de fabrication (industriels, artisanaux, fermiers) ; Ingénierie de procédés ; Transfert de technologies ; [...] Traitement et valorisation du lactosérum ; Valorisation des protéines laitières. [...] Les formations « sur-mesure » intra-entreprise : à la demande du client nous proposons un programme exclusif sur-mesure, sur un ou plusieurs jours, en mobilisant un seul ou plusieurs de nos spécialistes ACTALIA. »
  - description, mesures : https://www.actalia.eu/poles-d-expertise/pole-produits-laitiers/recherche/ (2026-09-22) · « La mission principale de l'Unité ACTALIA Produits laitiers est de mettre en oeuvre des projets de recherche appliquée, et des prestations sur mesure, portant depuis le lait de traite (vache et petits ruminants) jusqu'à la transformation du lait ainsi qu'à l'affinage, jusqu'au consommateur, en incluant les problématiques de la sécurité sanitaire du lait et des produits laitiers ainsi que celles de l'environnement. »
  - expertises, mesures, categories : https://www.actalia.eu/reutilisation-des-eaux-issues-du-lait-publication-des-livrables-du-projet-aquarel/ (2026-09-22) · « Lancé en 2015 par l'interprofession laitière (CNIEL) et soutenu financièrement par les agences de l'eau Loire-Bretagne et Seine-Normandie, le projet AQUAREL avait pour principaux objectifs d'établir un état des lieux des pratiques de gestion de l'eau et des effluents dans les usines laitières et de mettre en évidence les technologies permettant de traiter et de valoriser sur site les eaux issues du lait (perméats d'osmose inverse et condensats d'évapo-concentrateurs). [...] des synthèses bibliographiques portant respectivement sur la réutilisation des eaux issues du lait, les réglementations liées à l'eau utilisée dans l'usine laitière, les bonnes pratiques de gestion de la ressource et le traitement des effluents laitiers ; une synthèse de l'enquête sectorielle menée auprès de 58 sites ; une synthèse de recommandations générales pour traiter et réutiliser les eaux issues du lait ; un recueil de fiches techniques sur les technologies de traitement des eaux issues du lait et des effluents. Tous les documents sont consultables sur notre page Téléchargements. »
  - mesures : https://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_Synth%C3%A8se_bonnes-pratiques-de-gestion-de-leau.pdf (2026-09-22) · « AQUAREL, Bonnes pratiques de gestion de l'eau en transformation laitière, Février 2018, Brice Bourbon, ACTALIA. Optimiser l'exploitation des unités NEP de façon à favoriser les récupérations et les recyclages d'eau et de détergents et donc à limiter leur consommation. [...] Munir les flexibles de poignée pistolet pour augmenter l'action mécanique du jet tout en diminuant le débit d'eau. [...] Récupérer et valoriser le lactosérum. [...] Récupérer le condensat généré par les systèmes de production de vapeur et le réutiliser. »
  - expertises, mesures : https://www.actalia.eu/poles-d-expertise/pole-securite-des-aliments/offre-et-services/ (2026-09-22) · « Hygiène des équipements : [...] Caractérisation de la nettoyabilité des équipements de conception ouverte (piètements, caniveaux, visserie...). Évaluation de l'efficacité de traitements (formulations, procédés, procédures de nettoyage & désinfection). Audit et formation sur site. Prestations confidentielles et sur mesure : offres personnalisées et adaptées à vos besoins et vos problématiques. Contactez nos experts. »
  - expertises, mesures : https://www.actalia.eu/poles-d-expertise/pole-controle-et-qualite/prestations/ (2026-09-22) · « ACTALIA Contrôle et qualité associe des laboratoires d'analyses et des compétences en management [...] Validation du plan de nettoyage. »
  - mesures : https://www.actalia.eu/environnement-effluent-industrie-laitiere-actalia/ (2026-09-22) · « L'expertise et les travaux menés par le service Environnement d'ACTALIA Produits Laitiers ont été présentés par Pierre Barrucand. Lors d'une conférence dédiée aux solutions de réduction de la pollution environnementale, il a présenté, en particulier, les travaux menés au niveau de la gestion des effluents de l'industrie laitière. »
  - description : https://www.actalia.eu/cgv/ (2026-09-22) · « Conditions générales de vente. Consultez nos Conditions générales de vente (CGV) en téléchargeant le fichier. »

### PREST_LAI_002 · Cniel (Centre national interprofessionnel de l'économie laitière)

association · secteurs ['industrie_laitiere'] · départements national · statut brouillon

Le Cniel est l'association interprofessionnelle de la filière laitière, qui regroupe les organisations de producteurs de lait de vache, les entreprises laitières privées, les coopératives et les acteurs du commerce et de la distribution. Sur l'eau, il produit des références collectives pour les sites de transformation plutôt qu'un accompagnement individuel : il a initié et cofinancé avec les agences de l'eau Loire-Bretagne et Seine-Normandie le projet AQUAREL, mené avec Actalia, qui a documenté la réutilisation des eaux issues du lait, les bonnes pratiques de gestion de l'eau et le traitement des effluents à partir d'une enquête auprès des sites laitiers, et il porte auprès des pouvoirs publics l'évolution de la réglementation sur la réutilisation de ces eaux. L'accès se fait par ses publications : livrables d'AQUAREL téléchargeables chez Actalia, portail documentaire cniel-infos.com en accès libre, documents réservés et veille sectorielle pour les professionnels identifiés.

- Mesures : ACT_LAI_006 [conseil_etude]
- site_internet : https://www.cniel.com
- tel : 01 49 70 71 11
- adresse : Maison du lait, 42 rue de Châteaudun, 75314 Paris Cedex 9
- Sources :
  - nom, type, description : https://www.cniel.com/ (2026-09-22) · « Le Centre national interprofessionnel de l'économie laitière est l'association qui regroupe les organisations représentant les producteurs de lait de vache, les entreprises laitières privées, les coopératives laitières, et les acteurs du commerce, de la distribution et de la restauration collective. »
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=CNIEL (2026-09-22) · « CENTRE NAT INTERPRO ECONOMIE LAITIERE (CNIEL), siret 30081795400062, siege, 42 RUE DE CHATEAUDUN 75009 PARIS, nature juridique 9220, activite principale 94.99Z »
  - contacts : https://www.cniel.com/contacter-le-cniel (2026-09-22) · « Maison du lait, 42 rue de Châteaudun, 75314 Paris Cedex 9. +33(1) 49 70 71 11. Ouverte de 9h à 18h du lundi au jeudi, et de 9h à 17h le vendredi »
  - description, expertises, mesures, categories : https://www.actalia.eu/wp-content/uploads/2018/10/AQUAREL_2018_R%C3%A9utilisation-des-eaux-issues-du-lait_document-g%C3%A9n%C3%A9ral.pdf (2026-09-22) · « Les informations contenues dans cette publication ont été obtenues dans le cadre d'un Projet de recherche initié par le CNIEL, mené conjointement avec ACTALIA, grâce au soutien financier du CNIEL et des Agences de l'Eau Seine-Normandie et Loire-Bretagne. »
  - description, mesures : https://franceterredelait.fr/pierre-barrucand-il-existe-encore-un-gros-potentiel-de-valorisation-de-leau-disponible-dans-les-laiteries (2026-09-22) · « Le Cniel s'était engagé dans son plan de filière 2017 à accompagner la mise en oeuvre d'ici 5 ans des recommandations issues du programme AQUAREL dans les laiteries, programme portant sur les économies d'eau à la source et la possibilité de réutiliser l'eau sur les sites de transformation du lait. Site édité par le Cniel (mentions légales franceterredelait.fr). »
  - description, expertises : https://cniel-infos.com/main.htm (2026-09-22) · « Le portail documentaire de référence de la filière laitière française. Il regroupe l'ensemble des publications, études, indicateurs économiques et contenus techniques du Cniel. Accès libre à l'ensemble des ressources accessibles à tous, et aux professionnels identifiés un accès à des documents réservés ainsi qu'à la veille sectorielle. »
  - expertises : https://www.cniel.com/le-cniel-en-actions/qualite-du-lait-et-des-produits-laitiers/sciences-et-technologies-laitieres (2026-09-22) · « Grâce à une veille approfondie du Cniel, les professionnels de la filière laitière reçoivent tous les mois une synthèse de l'actualité scientifique et technologique. »
  - departements : https://www.cniel.com/le-cniel-en-region (2026-09-22) · « Véritable ancrage interprofessionel dans les territoires français, les Criel mettent en oeuvre et déploient la stratégie nationale dans les régions. »

### PREST_LAI_003 · Réseau des ENIL - ANFOPEIL

organisme_formation · secteurs ['industrie_laitiere'] · départements national · statut brouillon

L'ANFOPEIL est l'association qui porte la formation continue du réseau des ENIL : elle regroupe les écoles nationales d'industrie laitière et leurs amicales d'anciens élèves, le centre technique Actalia et la profession laitière, s'appuie sur six centres de formation (Aurillac, La Roche-sur-Foron, Mamirolle, Poligny, Saint-Lô et Surgères) et sur plus de cinquante formateurs, et est certifiée Qualiopi au titre des actions de formation. Pour un transformateur laitier, elle organise une soixantaine de formations courtes inter-entreprises réparties en dix domaines dont l'environnement, où trois stages portent sur la conduite d'une station d'épuration d'effluents laitiers et alimentaires (caractéristiques des effluents, principes du traitement biologique, indicateurs et paramètres de suivi, traitement des dysfonctionnements), ainsi que des formations intra-entreprise sur mesure dans vos locaux ou dans ses écoles, des CQP de la branche laitière et des modules en ligne. Chaque stage se pré-réserve sur le site au tarif hors taxes affiché par participant, son ouverture est soumise à un nombre minimum de stagiaires, et les chargés d'ingénierie de chaque centre construisent une réponse sur mesure, la demande passant par accueil@anfopeil-enil.fr.

- Mesures : ACT_LAI_008 [formation]
- site_internet : https://anfopeil-enil.fr
- mail : accueil@anfopeil-enil.fr
- adresse : BP 10025, Place du Champ de Foire, 39801 Poligny Cedex
- Sources :
  - nom, type, description, logo_url : https://anfopeil-enil.fr/lanfopeil/ (2026-09-22) · « Votre partenaire de formation en transformation laitière. Depuis plus de 50 ans, l'ANFOPEIL s'est imposée comme la référence incontestée en matière de formation dans le secteur de la transformation laitière. Notre association, regroupant les Ecoles Nationales d'Industrie Laitière (ENIL), leurs amicales d'anciens élèves, ACTALIA et la profession laitière, s'engage à promouvoir, coordonner et harmoniser la formation professionnelle dans ce domaine. Notre réseau de plus de 50 formateurs spécialisés offre une couverture nationale. 2070 stagiaires formés en 2024. Le logo retenu est celui de l'en-tête du site. »
  - type, contacts, description : https://anfopeil-enil.fr/wp-content/uploads/2025/08/928099-40507-Certificat-Qualiopi-renouvellement-ANFOPEIL.pdf (2026-09-22) · « Certificat Apave n° 928099/r3 : Apave Certification certifie que le processus mis en place par ANFOPEIL, sur le site suivant BP 10025 Place du Champ de Foire, 39801 Poligny Cédex France, n° de déclaration d'activité 27390109139, n° SIREN 778413161, pour les activités suivantes : Actions de formation, a été évalué conforme. Valable du 23/07/2024 au 22/07/2027. Certificat téléchargeable depuis la page L'ANFOPEIL. »
  - siret, contacts : https://anfopeil-enil.fr/mentions-legales/ (2026-09-22) · « Propriétaire : ANFOPEIL - 77841316100010 - BP 100025 39801 POLIGNY. Responsable publication : Jehan MOREAU, Président de l'ANFOPEIL - accueil@anfopeil-enil.fr »
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=ANFOPEIL&departement=39 (2026-09-22) · « RESEAU DES ENIL - ANFOPEIL (ANFOPEIL-ENILS), siren 778413161, siret du siège 77841316100010, RUE DU CHAMP DE FOIRE 39800 POLIGNY, departement 39, nature juridique 9220, activité principale 85.59B, 1 établissement ouvert. »
  - contacts : https://anfopeil-enil.fr/nous-contacter/ (2026-09-22) · « Nous contacter : accueil@anfopeil-enil.fr. La page ne donne aucun numéro de téléphone ni adresse postale, le courriel est le seul canal proposé. »
  - departements, description, expertises : https://anfopeil-enil.fr/les-actions-intra-entreprise/ (2026-09-22) · « Formation intra-entreprise : des formations sur mesure, directement dans votre entreprise ou dans nos écoles. Formation inter-entreprise : nos formations courtes sont organisées tout au long de l'année dans les ENIL. 60 formations courtes. Des domaines variés : lait et préparation des laits, auxiliaires technologiques, fromage, produits frais, crèmes glacées, produits secs, laboratoire, hygiène et qualité, environnement, outils et installations. 6 centres de formation : Aurillac, La Roche sur Foron, Mamirolle, Poligny, Saint-Lô, Surgères. »
  - description : https://anfopeil-enil.fr/centres-de-formation/ (2026-09-22) · « Dans chacun de nos centres de formation, vous pouvez accéder à l'ensemble de notre offre : formations courtes, en intra ou CQP, en présentiel ou en ligne. Chaque site dispose de ses propres infrastructures ainsi que de chargés d'ingénierie pour construire avec vous la réponse la plus adaptée à vos besoins. »
  - description : https://anfopeil-enil.fr/distanciel/ (2026-09-22) · « Se former en ligne. Formation courte en ligne : formations en visio, animées en direct par nos formateurs experts du secteur laitier et agroalimentaire. Webalim : plateforme en ligne pour se former à son rythme, plus de 100 modules de formation. »
  - expertises, mesures ACT_LAI_008 : https://anfopeil-enil.fr/categorie-produit/environnement/ (2026-09-22) · « Domaine L. Environnement, 7 stages, dont N°49 Station d'épuration dans la transformation laitière et alimentaire 1350 euros, N°50 Fonctionnement d'une station d'épuration (NIVEAU 1) : principes de base 1160 euros, N°51 Fonctionnement d'une station d'épuration (NIVEAU 2) : les dysfonctionnements 1160 euros. »
  - mesures ACT_LAI_008, expertises : https://anfopeil-enil.fr/produit/n50-fonctionnement-dune-station-depuration-niveau-1-principes-de-base-2026-mamirolle/ (2026-09-22) · « N°50/ Fonctionnement d'une station d'épuration (NIVEAU 1) : principes de base/ 2026 (Mamirolle). Description du stage, contenu général : caractéristiques des effluents alimentaires ; principes de fonctionnement des systèmes de traitement biologique ; indicateurs et paramètres de suivi ; analyse des principaux types de dysfonctionnements, visites techniques. Publics ciblés : salariés avec expérience (personnel de production, techniciens qualité / laboratoire). 1160 euros HT, tarif TTC 1 392 euros. Date : S13 - 24/03/2026 au 26/03/2026, session déjà passée au 22/09/2026. »
  - mesures ACT_LAI_008 : https://anfopeil-enil.fr/produit/n51-fonctionnement-dune-station-depuration-niveau-2-les-dysfonctionnements-2026-mamirolle/ (2026-09-22) · « N°51/ Fonctionnement d'une station d'épuration (NIVEAU 2) : les dysfonctionnements/ 2026 (Mamirolle). Contenu général : rappels caractéristiques effluents, principes de pilotage de station ; clef de détermination des dysfonctionnements d'origine hydraulique ou biologique, départs de boues, bactéries filamenteuses ; prévention des dysfonctionnements. Publics ciblés : responsables techniques, techniciens R&D, responsables qualité. 1160 euros HT. Date : S41 - 07/10/2026 (8h00) au 08/10/2026 (17h00), session à venir. L'ouverture des stages est soumise à un nombre minimum de stagiaire. »
  - mesures ACT_LAI_008 : https://anfopeil-enil.fr/produit/n58-station-depuration-dans-la-transformation-laitiere-et-alimentaire-2026-mamirolle/ (2026-09-22) · « N°49/ Station d'épuration dans la transformation laitière et alimentaire/ 2026 (Mamirolle). Contenu général : fonctionnement d'une station de traitement des effluents de type biologiques ; paramètre de conduite ; adaptation en fonction des effluents ; gestion des dysfonctionnements. Publics ciblés : responsables qualité, environnement, maintenance, conducteurs de station d'épuration. 1350 euros HT, tarif TTC 1 620 euros. Dates : semaine 21 à 24, 1 jour de formation par semaine ; semaine 45 à 48, 1 jour de formation par semaine, session à venir. »
  - point de verification, stage n°46 non retenu : https://anfopeil-enil.fr/produit/n46-optimisation-des-nettoyage-2026/ (2026-09-22) · « N°46/ Optimisation des nettoyages dans la transformation laitière et alimentaire/ 2026, 460 euros, 2 x 0,5 jour, sessions du 23 au 24 avril 2026 et du 26 au 27 novembre 2026. Mais la description du stage sur cette page ne porte pas sur le nettoyage : contenu général, l'analyse du Cycle de Vie et son application au secteur laitier ; réglementation ; principes et outils de calcul de score. Publics ciblés : responsables environnement, RSE, développement durable, personnel encadrant, ou avoir suivi le module 1 L'Analyse du cycle de vie. Le titre et le programme de cette page se contredisent : aucun lien de mesure n'est fondé dessus. »

### PREST_LAI_004 · Institut de l'Élevage (Idele)

organisme_technique · secteurs ['industrie_laitiere'] · départements national · statut brouillon

Institut technique des filières d'élevage d'herbivores, qualifié comme tel par le ministère chargé de l'agriculture et membre du réseau ACTA. Il anime depuis 1994 le réseau des techniciens Produits laitiers fermiers, près de 300 personnes dont une vingtaine de spécialistes de la transformation fromagère fermière, et bâtit à partir de leurs remontées des programmes d'étude qui portent notamment sur la gestion des effluents ; il est à ce titre co-auteur, avec la Chambre d'agriculture du Jura, du dossier « Effluents de fromagerie fermière » (16/01/2013) et de l'ouvrage du même nom (28/10/2004), qui comparent les voies de valorisation du lactosérum et les filières de traitement réalisables à l'échelle d'une exploitation. Sur ce sujet son apport est documentaire et gratuit, et non opérationnel : aucune source consultée ne décrit d'étude, de conseil ni d'appui technique qu'un atelier de transformation pourrait lui commander sur les effluents ou le lactosérum, l'accompagnement des producteurs étant assuré par les techniciens du réseau, qui appartiennent à d'autres structures. Son catalogue de près de 200 formations vise les responsables et techniciens des organismes de l'amont et de l'aval des filières d'élevage, un seul module étant ouvert aux industries agroalimentaires (conception hygiénique, nettoyage et désinfection) et sans session programmée à ce jour.

- site_internet : https://idele.fr
- site_internet : https://formations.idele.fr
- mail : idele.webmestre@idele.fr
- adresse : Maison Nationale des Éleveurs, 149 rue de Bercy, 75595 Paris Cedex 12
- **ressource** : Dossier « Effluents de fromagerie fermière », publié le 16/01/2013 : caractérisation des effluents, point réglementaire, valorisation du lactosérum et filières de traitement des effluents en mélange dimensionnées pour un atelier fermier (alimentation animale, épuration par le sol, procédés autonomes). (https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere)
- **avertissement** : Ces publications datent de 2013 et de 2004 et traitent de l'échelle fermière : leur point sur la réglementation en vigueur est à revérifier, et les filières décrites ne sont pas transposables à un site industriel, la source précisant elle-même que les solutions industrielles ne conviennent pas aux ateliers fermiers et inversement.
- Sources :
  - type, description, departements : https://idele.fr/qui-sommes-nous/idele-institut-de-lelevage (2026-09-22) · « Un Institut de recherche appliquée indépendant, reconnu et soutenu par les pouvoirs publics, membre du réseau ACTA. [...] Cette charte, qui s'intègre dans notre qualification d'Institut technique attribuée par le ministère en charge de l'Agriculture [...] Nous sommes localisés sur l'ensemble des territoires d'élevage »
  - siret, contacts : https://idele.fr/mentions-legales (2026-09-22) · « Institut de l'Elevage (idele) SIRET 30298415800022 [...] Siège social : Maison Nationale des Eleveurs 149 rue de Bercy 75595 PARIS CEDEX 12 [...] Email: idele.webmestre(at)idele.fr »
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=Institut%20de%20l%27Elevage (2026-09-22) · « INSTITUT DE L'ELEVAGE, siren 302984158, siret du siège 30298415800022, 149 RUE DE BERCY 75012 PARIS, 30 établissements ouverts »
  - description, expertises, infos_complementaires : https://idele.fr/detail-dossier/dossier-effluents-de-fromagerie-fermiere (2026-09-22) · « Dossier : Effluents de fromagerie fermière. Publié le 16/01/2013 par Jacques Capdeville (Institut de l'Elevage), Yves Lefrileux, Cécile Laithier (Institut de l'Elevage), Jean-Luc Ménard, Jean-Yves Blanchin, Aurore Charpiot (C.A. Jura (39)). La fabrication fromagère génère des effluents chargés en matière organique, composés du lactosérum et des eaux de lavage. [...] Les solutions techniques pour gérer ces produits à l'échelle industrielle ne sont pas adaptées à la taille des ateliers fermiers. C'est l'objet de ce dossier qui, au-delà de la caractérisation des effluents et d'un point sur la réglementation en vigueur, vise à inventorier et analyser les possibilités de valorisation du lactosérum et de traitement des effluents en mélange. »
  - description, infos_complementaires : https://idele.fr/detail-ouvrage/les-effluents-de-fromagerie-fermiere (2026-09-22) · « Les effluents de fromagerie fermière. Publié le 28/10/2004. Ce document décrit, analyse et compare, d'un point de vue technique et économique, les différentes filières de traitement et gestion qui peuvent être mises en place à l'échelle d'une exploitation agricole. On aborde successivement : la valorisation en alimentation animale ; les procédés d'épuration par le sol [...] ; les procédés autonomes : procédés Le Pradel, station d'épuration SBR, filtres biologiques avec compost »
  - description, expertises : https://idele.fr/detail-article/le-reseau-technique-des-produits-laitiers-fermiers (2026-09-22) · « Publié le 06/06/2023. Animé depuis 1994 par l'Institut de l'Élevage, le réseau des techniciens « Produits Laitiers Fermiers » [...] Incluant près de 300 personnes [...] les centres techniques fromagers fermiers et d'une vingtaine de techniciens spécialisés en transformation fromagère fermière [...] C'est par la remontée, à travers le réseau, des besoins de terrain en matière de références que des programmes d'études et de R&D sont bâtis [...] tels que la qualité des produits laitiers fermiers, l'organisation du travail en atelier de transformation, l'économie des exploitations, la gestion des effluents »
  - description, expertises, contacts : https://formations.idele.fr (2026-09-22) · « L'Institut de l'Elevage - Idele vous propose près de 200 formations sur tous les thèmes de l'élevage des bovins, ovins et caprins. Destinées aux responsables et techniciens des organismes de l'amont et de l'aval des filières d'élevage »
  - description : https://formations.idele.fr/formation/244/conception-hygienique-des-equipements-et-installations-pour-les-iaa (2026-09-22) · « Public : Industries agro-alimentaires (responsable qualité, responsable de production, travaux neufs, responsable maintenance), fabricants de machines [...] Principes et techniques de nettoyage et désinfection appliqué aux : surfaces ouvertes/fermées, sèches/humides [...] Cette formation n'est pas programmée pour le moment. Si vous êtes responsable formation, vous pouvez faire une requête pour l'organiser en INTRA dans votre entreprise. »

### PREST_LAI_005 · ADEME - Agence de la transition écologique

agence_publique · secteurs ['industrie_laitiere'] · départements national · statut brouillon

Établissement public de l'État chargé de la transition écologique et énergétique, avec un siège à Angers et une trentaine d'établissements ouverts en région. Les recherches menées sur le catalogue de ses aides recensé par Aides-territoires, sur le portail d'État Mission Transition écologique et sur sa librairie n'ont pas permis de trouver de dispositif ADEME couvrant l'eau pour une entreprise privée : l'appel à projets Innov Eau réserve ses bénéficiaires aux collectivités et aux entreprises publiques locales, et les aides aux économies d'eau dans l'industrie sont portées par les agences de l'eau. La seule prestation ADEME touchant l'eau identifiée est le diagnostic multiflux Diag Eco-Flux, dont la source écarte un rôle opérationnel de l'agence : Bpifrance en est l'opérateur et verse la subvention de 50 pour cent, l'ADEME n'ayant coécrit que la méthodologie.

- site_internet : https://www.ademe.fr/
- tel : 02 41 20 41 20
- adresse : 20 avenue du Grésillé, BP 90406, 49004 Angers Cedex 01
- Sources :
  - siret, type, departements : https://recherche-entreprises.api.gouv.fr/search?q=ADEME (2026-09-22) · « AGENCE DE L ENVIRONNEMENT ET DE LA MAITRISE DE L ENERGIE (ADEME), siren 385290309, siret 38529030900454, 20 AVENUE DU GRESILLE 49000 ANGERS, nature_juridique 4110, activite_principale 84.13Z, nombre_etablissements_ouverts 30 »
  - nom, contacts : https://lannuaire.service-public.gouv.fr/gouvernement/98505403-46c6-4d6c-9766-6c58bce9a221 (2026-09-22) · « ADEME - Agence de la transition écologique. 20, avenue du Grésillé, BP 90406, 49004 Angers Cedex 01. Téléphone : 02 41 20 41 20. Site internet : https://www.ademe.fr/ »
  - description, expertises, categories, mesures : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/diag-eco-flux (2026-09-22) · « Vous êtes accompagné par un expert référencé par Bpifrance, selon une méthodologie élaborée avec l'ADEME. Diagnostic des flux d'énergie, d'eau, de matières premières et de déchets. Opérateur affiché Bpifrance, subvention de 50 % versée par Bpifrance, reste à charge 3 000 € HT par site, sites de 20 à 250 salariés. L'ADEME n'est citée que pour la méthodologie, ni comme opérateur ni comme financeur. »
  - description, mesures : https://aides-territoires.beta.gouv.fr/aides/c2c4-innov-eau/ (2026-09-22) · « Innov Eau, porteur ADEME. Bénéficiaires : Commune, Intercommunalité / Pays, Département, Etablissement public dont services de l'Etat, Entreprise publique locale (Sem, Spl, SemOp). Les entreprises privées ne figurent pas parmi les bénéficiaires. »
  - description : https://aides-territoires.beta.gouv.fr/partenaires/22-ademe/ (2026-09-22) · « Page du partenaire ADEME sur Aides-territoires, 122 aides listées. Titres visibles en tête de liste : Intégrer le rafraîchissement urbain ; Réaliser des économies d'énergie sur l'éclairage public ; Accélérer la rénovation énergétique des bâtiments publics ; Accompagner les maîtrises d'ouvrage publiques ; Conseil en énergie partagée (CEP). »
  - description : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/economies-recyclage-eau-activites-industrielles-artisanat (2026-09-22) · « Économiser et recycler l'eau dans l'industrie et l'artisanat : opérateur Agence de l'eau, 30 à 80 % de l'étude ou de l'investissement selon projet (mise en circuit fermé, recyclage, économies d'eau). »
  - expertises : https://librairie.ademe.fr/ (2026-09-22) · « Rubriques de la librairie ADEME : Guides grand public, Retours d'expérience (Les acteurs témoignent de leurs expériences et partagent leur savoir-faire), Magazines, Études. »

### PREST_LAI_006 · CCI France (réseau des chambres de commerce et d'industrie)

chambre_consulaire · secteurs ['industrie_laitiere'] · départements ['02', '21', '25', '39', '44', '49', '53', '58', '59', '60', '62', '70', '71', '72', '80', '85', '89', '90'] · statut brouillon

CCI France fédère et anime les 126 chambres de commerce et d'industrie, établissements publics nationaux, régionaux et locaux. Sur l'eau, l'intervention est portée par la chambre territoriale : un conseiller environnement réalise une visite du site et un diagnostic de la gestion de l'eau, propose un plan d'actions à court, moyen et long terme, identifie les aides financières mobilisables et accompagne le dépôt du dossier de demande auprès de l'agence de l'eau du bassin. Cette fiche ne couvre que les territoires où un programme eau a été trouvé et sourcé, et les modalités y diffèrent : visite eau et montage de dossier entièrement pris en charge en Bourgogne-Franche-Comté, pré-diagnostic gratuit dans l'Yonne avec l'agence de l'eau Seine-Normandie, accompagnement sur devis en Hauts-de-France, programme Ressourc'Eau sur appel à candidature et de 675 à 1 125 euros hors taxes en Pays de la Loire. Vous vous adressez à la chambre de votre département, l'offre eau étant délivrée localement. Le réseau porte par ailleurs ClimaDiag Expert, programme national soutenu par l'ADEME, un diagnostic de vulnérabilité aux aléas climatiques dont la sécheresse, restitué sous forme de plan d'actions hiérarchisé.

- Mesures : ACT_AGR_002 [conseil_etude]
- site_internet : https://www.cci.fr
- adresse : 8-10 rue Pierre Brossolette, 92300 Levallois-Perret
- Sources :
  - nom, type, description, contacts (site internet uniquement) : https://lannuaire.service-public.gouv.fr/gouvernement/f0d4fc00-c3c4-4a8c-8c31-5b01fc8fd556 (2026-09-22) · « CCI France (Chambres de Commerce et d'Industrie). CCI France est l'établissement national fédérateur et animateur des 126 Chambres de Commerce et d'Industrie, établissements publics nationaux, régionaux et locaux. Site internet : https://www.cci.fr [note de saisie : l'adresse postale et le téléphone portés par cette fiche annuaire, 46 avenue de la Grande-Armée 75858 Paris Cedex 17 et 01 40 69 37 00, ne sont pas retenus, la base Sirene situant le siège à Levallois-Perret ; cette source ne justifie que le site internet] »
  - siret, contacts (adresse) : https://recherche-entreprises.api.gouv.fr/search?q=CCI%20France (2026-09-22) · « CCI FRANCE, siret 18750002000073, siege, 8-10 8 RUE PIERRE BROSSOLETTE 92300 LEVALLOIS-PERRET, departement 92, nature juridique 7381, activite principale 94.11Z, etat administratif A »
  - description, expertises, mesures, departements : https://environnement.bfc.cci.fr/accompagnement_eau/ (2026-09-22) · « Un conseiller expert réalise une visite pour identifier les usages de l'eau dans votre activité et détecter des pistes d'amélioration. La CCI identifie pour vous les aides financières disponibles pour vos projets de gestion durable de l'eau. La CCI vous accompagne également dans le dépôt de dossier de demande d'aide auprès de l'agence de l'eau. La Visite eau et le montage de dossier d'aides sont totalement pris en charge par les agences de l'eau et les CCI de Bourgogne Franche-Comté. Formulaire de contact, champ Département : 21 - Côte-d'Or, 25 - Doubs, 39 - Jura, 58 - Nièvre, 70 - Haute-Saône, 71 - Saône-et-Loire, 89 - Yonne, 90 - Territoire de Belfort »
  - description, expertises, mesures, departements : https://hautsdefrance.cci.fr/solutions/accompagnement-gestion-eau/ (2026-09-22) · « Visite de l'entreprise et diagnostic de la gestion de l'eau. Identification des aides et financements existants. Toute entreprise régionale, plus particulièrement celles des secteurs industrie et services à l'industrie. Sur devis. Contacts : Raphaël Zaïtzev (Hauts-de-France), Badr Chamseddine El Idrissi (Aisne), Denis Weiss (Grand Hainaut), Oriane Guidot (Grand Lille) »
  - description, mesures, departements : https://www.cci89.fr/developper-son-entreprise/developpement-durable/eau/ (2026-09-22) · « Votre conseiller environnement effectue un pré-diagnostic gratuit (la visite eau), sur site. En partenariat avec l'agence de l'eau de Seine-Normandie (AESN), la CCI de l'Yonne vous accompagne afin de mener à bien vos projets ou vous mettre en conformité réglementaire. »
  - description, mesures, departements : https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/entreprise/transition-ecologique/programme-ressourceau (2026-09-22) · « Une analyse détaillée de votre gestion de l'eau. Un plan d'action priorisé et personnalisé à court, moyen et long terme. Un appui à la mise en place des actions identifiées. Un échange après 6 mois/1 an pour suivre les actions engagées. Destiné à toutes les entreprises des Pays de la Loire pour qui l'eau constitue un enjeu de fonctionnement. Programme cofinancé par la CCI des Pays de la Loire et l'Agence de l'Eau Loire-Bretagne, avec le soutien du FEDER. 675 à 1125 euros HT. »
  - description, expertises : https://www.cote-azur.cci.fr/solutions/climadiag-expert/ (2026-09-22) · « ClimaDiag Expert s'inscrit dans le programme national porté par le réseau des CCI avec le soutien de l'ADEME. Canicules, inondations, sécheresses, épisodes méditerranéens intenses. Un plan d'actions opérationnel et hiérarchisé. Suivi à 6 mois. »

### PREST_LAI_007 · Cemafroid

organisme_technique · secteurs ['industrie_laitiere'] · départements national · statut brouillon

Société d'expertise indépendante de la chaîne du froid, implantée à Fresnes, dont les missions affichées sont de « tester, vérifier, évaluer, qualifier et certifier les équipements et les solutions, former les femmes et les hommes et garantir la conformité », et qui, « depuis 2009, dans le cadre d'une délégation de service public, délivre, pour le compte du Ministère en charge de l'agriculture, les attestations de conformité technique des engins de transport sous température dirigée ». Son offre ne se limite pas au contrôle réglementaire : la rubrique Expertise liste l'audit froid, l'audit CVC, l'audit énergétique, les études énergétiques, la modélisation, l'assistance à maîtrise d'ouvrage et le contrôle des installations ICPE pour les métiers du froid et du conditionnement d'air ; la société Cemafroid Formation, qui déclare la même adresse à Fresnes, propose le module FE6 « Réglementation ICPE appliquée aux installations de froid ». En revanche, aucune des pages consultées, expertise, essais et étalonnages, inspection, délégation de service public et catalogue de formation, ne mentionne les tours aéroréfrigérantes, les condenseurs refroidis à l'eau, la consommation d'eau de refroidissement ni les légionelles : dans le groupe, le contrôle périodique de la rubrique ICPE 2921 relève de Tecnea Inspection, personne morale distincte, seule inscrite à ce titre sur la liste des organismes agréés du ministère. Le volet eau du refroidissement n'étant pas affiché dans l'offre de Cemafroid, la mesure sur la fermeture des circuits de froid n'est pas rattachée à cette fiche. Le site ne publie ni tarif ni adresse mail générale : une demande passe par le formulaire de contact ou par le téléphone.

- site_internet : https://www.cemafroid.fr/contact
- site_internet : https://www.cemafroid-formation.com/formations
- tel : +33 (0)1 49 84 84 84
- adresse : 5 avenue des Prés, CS 20029, 94266 Fresnes
- **avertissement** : Les prestations publiées par Cemafroid portent sur la performance thermique et énergétique des installations frigorifiques, pas sur leur consommation d'eau : ni les tours aéroréfrigérantes, ni les condenseurs à eau, ni les légionelles n'apparaissent dans ses pages d'expertise, d'essais, d'inspection ou de formation. Avant de l'engager sur un projet de passage en boucle fermée ou en condenseur sec, faites préciser par écrit si l'étude couvre bien le circuit de refroidissement et son appoint en eau.
- **info** : Pour le contrôle périodique réglementaire d'une tour aéroréfrigérante existante (rubrique ICPE 2921, groupe légionelle), l'organisme agréé du groupe est Tecnea Inspection, société distincte de Cemafroid. Elle figure sur la liste des organismes agréés du ministère pour cette rubrique, aux côtés d'Apave, de Bureau Veritas Exploitation, de Capsis, de Dekra Industrial et de Socotec. (https://aida.ineris.fr/reglementation/liste-organismes-agrees-rubriques-icpe-voir-point-4)
- **ressource** : Liste des prestations d'expertise : audit froid, audit CVC, audit énergétique, études énergétiques, modélisation, assistance à maîtrise d'ouvrage, contrôle des installations ICPE pour les métiers du froid et du conditionnement d'air. (https://www.cemafroid.fr/prestations/expertise-et-innovation)
- Sources :
  - description, expertises, infos_complementaires, mesures : https://www.cemafroid.fr/prestations/expertise-et-innovation (2026-09-22) · « Réalisation de l'audit froid ; Réalisation de l'audit CVC ; Évaluation du respect de la chaîne du froid alimentaire ; Audit d'installations de traitement d'air dans les établissements de santé ; Mise en conformité de votre parc d'équipements frigorifiques sous pression ESP ; Contrôle des installations ICPE pour les métiers du froid et du conditionnement d'air ; Audit énergétique ; Étanchéité des installations frigorifiques et climatiques ; Assistance à Maîtrise d'Ouvrage (AMO) ; Etudes énergétiques ; Modélisation. Aucune des lignes de cette liste ne nomme les tours aéroréfrigérantes, les condenseurs à eau, la consommation d'eau ni les légionelles, et aucune ne renvoie vers une page de détail. »
  - nom, type, description : https://www.cemafroid.fr/ (2026-09-22) · « Cemafroid Groupe Tecnea, « L'expert indépendant de la chaîne du froid ». Prestations : essais et étalonnages, expertise, certification, inspection, délégation de service public, formation. »
  - type, description, departements : https://www.cemafroid.fr/qui-sommes-nous (2026-09-22) · « Nos missions : tester, vérifier, évaluer, qualifier et certifier les équipements et les solutions, former les femmes et les hommes et garantir la conformité. Plus de 8.000 clients dans plus de 40 pays du monde. »
  - description : https://www.cemafroid.fr/prestations/service-public (2026-09-22) · « Depuis 2009, dans le cadre d'une délégation de service public, le Cemafroid délivre, pour le compte du Ministère en charge de l'agriculture, les attestations de conformité technique des engins de transport sous température dirigée. »
  - mesures : https://www.cemafroid.fr/prestations/inspection (2026-09-22) · « Le Cemafroid et le groupe Tecnea, à travers la filiale Tecnea Inspection, proposent des prestations d'inspection en relation avec les réglementations en vigueur : ESP (Équipements Sous Pression), Vérification des appareils de levage avec la marque Hydrotest, etc. Ni la rubrique ICPE 2921, ni les tours aéroréfrigérantes, ni les légionelles ne sont citées. »
  - mesures : https://www.cemafroid.fr/prestations/essais-et-etalonnages/prestations (2026-09-22) · « Essais ATP et coefficient K, caractérisations d'enceintes climatiques, essais d'emballages isothermes, étalonnages de thermomètres, mesure de puissance frigorifique et de consommation, mesures aérauliques, essais de meubles frigorifiques, essais acoustiques, essais de consommation en gasoil, en électricité, en fluides frigorigènes. Aucun essai portant sur un condenseur à eau, une tour aéroréfrigérante ou une consommation d'eau. »
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Cemafroid (2026-09-22) · « CEMAFROID, siren 432511897, siret du siège 43251189700048, 5-13 5 AVENUE DES PRES 94260 FRESNES, nature juridique 5710 (SAS), activité principale de l'unité légale 71.12B (ingénierie, études techniques) et de l'établissement siège 82.99Z, 5 établissements ouverts. CEMAFROID FORMATION est une unité légale distincte, siren 529307985. »
  - contacts : https://www.cemafroid.fr/contact (2026-09-22) · « Cemafroid - Groupe Tecnea, 5 Avenue des Prés, CS 20029, 94266 - Fresnes, France. +33 (0) 1 49 84 84 84. Formulaire de contact en ligne. Aucune adresse mail générale ni mention de devis ou de tarif. »
  - description, contacts : https://www.cemafroid-formation.com/formations (2026-09-22) · « Modules classés en six familles (MG maîtrise générale de la chaîne du froid, CF chaîne du froid et hygiène alimentaire, PS produits de santé, ME métrologie, FE froid et environnement, CH vérification des appareils de levage). FE2 - Amélioration de l'efficacité énergétique des installations de froid et de climatisation. Aucun module sur les tours aéroréfrigérantes, les condenseurs, l'eau ou les légionelles. »
  - description, mesures : https://www.cemafroid.fr/media/c21e861e-786e-11ec-abe5-0242ac130008/a20382ee-69d5-11ee-9192-0242ac14000d/fe6.pdf (2026-09-22) · « FE6 Règlementation ICPE appliquée aux installations de froid. Objectifs : connaître la règlementation ICPE applicable aux installations de froid ; être capable de constituer et mettre à jour le dossier ICPE de votre installation pour les rubriques concernées ; connaître le périmètre des inspections pour les installations soumises au régime de déclaration avec contrôle périodique. Le programme ne nomme aucune rubrique, ni les tours aéroréfrigérantes, ni les légionelles. Organisme de formation : CEMAFROID FORMATION SAS, 5 avenue des Prés 94266 Fresnes Cedex. »
  - mesures, infos_complementaires : https://aida.ineris.fr/sites/default/files/2025-12/Liste%20OA%20version%20%202025_2.pdf (2026-09-22) · « MTE - DGPR - BEI, version 2025, liste des organismes agréés par rubrique ICPE. Ligne « 8 Tours aéroréfrigérantes 2921 » : organismes cochés APAVE, BUREAU VERITAS EXPLOITATION, CAPSIS, DEKRA IND., SOCOTEC, TECNEA INSPECTION. CEMAFROID ne figure pas dans la liste. »

### PREST_LAI_008 · Plateforme Lait de l'UMR STLO (INRAE, Institut Agro Rennes-Angers)

organisme_technique · secteurs ['industrie_laitiere'] · départements national · statut brouillon

La Plateforme Lait est l'installation expérimentale de 1 000 m² adossée à l'UMR 1253 STLO, unité mixte de recherche INRAE et Institut Agro Rennes-Angers implantée 65 rue de Saint-Brieuc à Rennes, qui met en oeuvre à l'échelle pilote les opérations de transformation du lait et de ses coproduits : séparation membranaire de la microfiltration à l'osmose inverse, concentration par évaporation sous vide, séchage par atomisation, traitements thermiques et séparation centrifuge. Sa mission affichée est de mettre ses compétences et ses équipements à disposition des entreprises, des centres techniques et des organismes de recherche ou d'enseignement dans le cadre de projets de recherche, de prestations de services ou de formation, avec un système d'information qui met les données des équipements instrumentés à disposition des utilisateurs en toute confidentialité. Ce n'est pas un prestataire commercial ordinaire : on s'adresse à la responsable de la plateforme pour toute demande de collaboration de recherche, de prestation ou de formation, et ce qu'elle réalise est un essai pilote dans ses locaux de Rennes, en amont d'un investissement, pas un diagnostic ni une installation sur votre site.

- Mesures : ACT_LAI_005 [conseil_etude]
- site_internet : https://stlo.rennes.hub.inrae.fr/plateformes/plateforme-lait
- mail : gaelle.tanguy@inrae.fr
- tel : 02 23 48 53 29
- adresse : UMR 1253 INRAE Institut Agro STLO, 65 rue de Saint-Brieuc, 35042 Rennes Cedex
- Sources :
  - nom, type, description, expertises, departements, categories, mesure ACT_LAI_005 : https://stlo.rennes.hub.inrae.fr/plateformes/plateforme-lait (2026-09-22) · « C'est une installation unique de 1000m² dédiée au lait et à ses dérivés. Elle permet la conduite d'essais jusqu'à l'échelle pilote, étape indispensable à la validation et au transfert. Elle dispose d'un système d'information qui stocke les données produites par les équipements instrumentés et les met à disposition des utilisateurs en toute confidentialité. La plateforme est adossée à l'unité mixte de recherche Science et Technologie du Lait et de l'Oeuf INRAE / Institut Agro Rennes-Angers (UMR STLO). Missions : mettre ses compétences et ses équipements à disposition des entreprises, des centres techniques, des organismes de recherche ou d'enseignement dans le cadre de projets de recherche, de prestations de services ou de formation. Quatre procédés font l'objet d'études spécifiques au sein de la plateforme : Séparation membranaire, Technologies laitières et fromagères, Concentration par évaporation sous vide, Séchage par atomisation. Quelques exemples de projets menés sur la plateforme : Préparation de concentrés et de poudres ; Valorisation de coproduits du lait (sérums, babeurres, perméats, ...). »
  - expertises, mesure ACT_LAI_005 : https://stlo.rennes.hub.inrae.fr/plateformes/plateforme-lait/separation-membranaire (2026-09-22) · « De la microfiltration à l'osmose inverse. Microfiltration, 0,1 µm : concentration des caséines, obtention de phosphocaséine natif (PPCN), délipidation des lactosérums. Ultrafiltration, 5 - 8 - 10 kDa : concentration totale des protéines du lait, de microfiltrat (0,1 µm) et des lactosérums (protéines sériques incluses). »
  - expertises, mesure ACT_LAI_005 : https://stlo.rennes.hub.inrae.fr/plateformes/plateforme-lait/concentration-par-evaporation-sous-vide (2026-09-22) · « Pilote Évaporateur à flot tombant. Caractéristiques du pilote : flot tombant sans recirculation forcée ; capacité évaporatoire : 27 kg d'eau/heure ; débit : 60-80 kg/heure. »
  - contacts : https://stlo.rennes.hub.inrae.fr/plateformes/plateforme-lait (2026-09-22) · « Nous contacter pour tout renseignement complémentaire ou toute demande de collaboration de recherche, prestation, formation. Gaëlle Tanguy, gaelle.tanguy@inrae.fr, 02 23 48 53 29. »
  - contacts : https://stlo.rennes.hub.inrae.fr/contact (2026-09-22) · « UMR 1253 INRAE - INSTITUT AGRO, STLO Science et Technologie du Lait et de l'Oeuf, 65 rue de Saint-Brieuc, 35042 Rennes Cedex. »
  - nom, description : https://stlo.rennes.hub.inrae.fr/umr-stlo/presentation (2026-09-22) · « L'UMR STLO a pour objectif de produire des connaissances sur les constituants du lait et de l'oeuf, puis sur leur transformation en ingrédients ou produits finis pour l'alimentation humaine. Organisation : 78 permanents dont 35 scientifiques, 4000 m² de laboratoires. Deux plateformes sont au coeur de notre dispositif : la Plateforme Lait, dédiée au lait et à ses multiples transformations ; le CIRM - Bactéries d'Intérêt Alimentaire. »
  - nom, type : https://annuaire.inrae.fr/structure/1253 (2026-09-22) · « UMR 1253 STLO | Science et Technologie du Lait et de l'Oeuf, laboratoire. Directeur : Yves Le Loir. INRAE - Rennes - Agrocampus Ouest, 65 rue de Saint-Brieuc, Bâtiment 32, 35042 Rennes Cedex. »
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=INRAE&code_postal=35000 (2026-09-22) · « INSTITUT NATIONAL DE RECHERCHE POUR L'AGRICULTURE L'ALIMENTATION ET L'ENVIRONNEMENT (INRAE), siren 180070039, nature juridique 7389. Établissement correspondant : siret 18007003902033, enseigne INRAE BRETAGNE-NORMANDIE RENNES, 65 RUE DE SAINT-BRIEUC 35000 RENNES, état administratif A. »

### PREST_LAI_009 · Les agences de l'eau (six établissements publics de bassin)

agence_publique · secteurs ['industrie_laitiere'] · départements ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '2A', '2B', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95'] · statut brouillon

Les agences de l'eau sont six établissements publics de l'État, un par grand bassin hydrographique de métropole, financés par les redevances qu'elles perçoivent auprès des usagers selon les principes de préleveur-payeur et de pollueur-payeur. Pour un site laitier, l'agence n'est pas un bureau d'études et ne réalise pas de diagnostic dans vos ateliers : elle est d'abord votre interlocuteur pour les redevances, avec la déclaration annuelle des volumes prélevés, l'obligation de comptage et de registre des index, et l'agrément du dispositif de suivi régulier de vos rejets qui sert d'assiette à la redevance pollution. Ses délégations régionales apportent ensuite un appui technique et financier aux projets d'économie d'eau et de réduction des rejets, jusqu'au contrat d'entreprise pluriannuel négocié avec les sites industriels les plus concernés. Elle accompagne et finance enfin les démarches collectives du bassin, SAGE, PTGE et contrats de territoire, dont elle publie la liste et la carte, l'animation restant portée par la structure porteuse locale. L'autorisation de déversement dans un réseau collectif, elle, est délivrée par le maire ou le président de l'EPCI, pas par l'agence, et en outre-mer ce sont les offices de l'eau départementaux qui tiennent ce rôle. On entre en relation avec l'agence de son bassin depuis le site commun aux six agences.

- Mesures : ACT_AGR_010 [conseil_etude]
- site_internet : https://www.lesagencesdeleau.fr
- Sources :
  - nom, type, description : https://www.lesagencesdeleau.fr/les-agences-de-leau/priorites-et-missions (2026-09-22) · « Les agences de l'eau sont des établissements publics de l'État. Elles assurent une mission d'intérêt général visant à gérer et à préserver les ressources en eau et les milieux aquatiques. Un savoir-faire dans l'accompagnement de proximité des collectivités et des acteurs économiques et non économiques. »
  - nom, description : https://www.lesagencesdeleau.fr/les-agences-de-leau/organisation-et-fonctionnement (2026-09-22) · « Il y a ainsi en France 6 agences de l'eau : Adour-Garonne, Artois-Picardie, Loire-Bretagne, Rhin-Meuse, Rhône Méditerranée Corse, Seine-Normandie. Les comités de bassin rassemblent toutes les parties prenantes (collectivités locales, industriels, agriculteurs, État, consommateurs, ONG) et fixent la stratégie de l'eau et des milieux aquatiques du bassin. »
  - contacts : https://www.lesagencesdeleau.fr/les-agences-de-leau-vos-cotes (2026-09-22) · « Pour toute demande concernant les politiques d'intervention des agences de l'eau, nous vous invitons à prendre contact avec l'agence de l'eau de votre territoire. La page liste les six agences et renvoie vers le formulaire de contact de chacune. »
  - description, expertises : https://www.lesagencesdeleau.fr/services-en-ligne (2026-09-22) · « Portail de télédéclaration des redevances et des primes. Dossiers de demande d'habilitation des organismes réalisant les diagnostics des installations de mesure des prélèvements d'eau et des dispositifs industriels de suivi des rejets. »
  - description, expertises : https://aides-redevances.eau-loire-bretagne.fr/home/redevances/entreprises/prelevement-de-leau-pour-lindustrie.html (2026-09-22) · « Redevance pour prélèvement, industries : redevable à partir de 7 000 m3 prélevés par an dans la ressource. Les volumes prélevés doivent être mesurés ; le registre mentionne la localisation des installations de prélèvement, leurs caractéristiques techniques, les incidents et les volumes d'eau mesurés (relevés mensuels d'index). Déclaration en ligne jusqu'au 31 mars pour les volumes de l'année précédente. »
  - description, expertises : https://aides-redevances.eau-loire-bretagne.fr/home/redevances/entreprises/pollution-de-leau-dorigine-non-domestique.html (2026-09-22) · « La méthode normale de calcul de la redevance repose sur le suivi régulier des rejets, qui nécessite l'agrément de l'agence de l'eau et la transmission des résultats d'analyse via le portail GIDAF. Déclaration en ligne avant le 31 mars. »
  - description, expertises : https://aides-redevances.eau-loire-bretagne.fr/home/aides/acteurs-eonomiques/aides-pour-les-acteurs-economiques.html (2026-09-22) · « Contrat avec l'industriel : l'agence et l'industriel définissent ensemble un programme d'actions sur mesure d'une durée limite de 3 ans. Opérations collectives : les petites entreprises et les artisans peuvent être accompagnés techniquement et financièrement dans ce cadre. Contact 02 38 51 73 73. »
  - description, expertises : https://www.eau-loire-bretagne.fr/sites/agence/home/bassin-loire-bretagne/nos-dossiers-enjeux-et-actions/entreprises-vos-solutions-pour-leau.html (2026-09-22) · « Accompagnement technique et financier apporté par les services de l'agence de l'eau pour réduire simultanément leurs consommations, leurs pollutions. Vos interlocuteurs de proximité : l'agence de l'eau vous invite à vous rapprocher de ses délégations régionales. »
  - mesures, expertises : https://www.rhone-mediterranee.eaufrance.fr/sobriete-des-usages-et-partage-de-la-ressource/projet-de-territoire-pour-la-gestion-de-leau-ptge (2026-09-22) · « Ces démarches territoriales sont accompagnées tout au long de leur mise en place par un préfet référent et ses services, ainsi que par l'agence de l'eau et ses délégations régionales concernées. Le comité de pilotage réunit l'ensemble des acteurs de l'eau du territoire, usagers économiques compris. »
  - mesures, expertises : https://www.eau-rhin-meuse.fr/les-sage-du-bassin-rhin-meuse (2026-09-22) · « L'agence publie la liste des 11 SAGE du bassin avec leur état d'avancement, la carte des SAGE du bassin Rhin-Meuse et les liens vers les structures porteuses. Les partenaires institutionnels (dont l'agence de l'eau) apportent leur concours technique et financier ; les maîtres d'ouvrage du territoire déclinent de manière opérationnelle les orientations du SAGE. »
  - mesures, expertises : https://www.eau-seine-normandie.fr/domaines-d-action/politique-territoriale (2026-09-22) · « L'agence de l'eau Seine-Normandie accompagne des animations pour l'élaboration et la mise en oeuvre d'un SAGE. Les animateurs constituent des relais de terrain importants pour l'agence de l'eau. »
  - description : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006686518 (2026-09-22) · « Article L1331-10 du code de la santé publique : tout déversement d'eaux usées autres que domestiques dans le réseau public de collecte doit être préalablement autorisé par le maire ou, lorsque la compétence en matière de collecte a été transférée, par le président de l'établissement public compétent. L'agence de l'eau n'est pas l'autorité qui délivre cette autorisation. »
  - departements, description : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033033679 (2026-09-22) · « Article L213-13 du code de l'environnement : il est créé, dans chacun des départements d'outre-mer, un office de l'eau, établissement public local à caractère administratif, rattaché au département. »
  - departements : https://www.eau-artois-picardie.fr/sites/default/files/4p-agencedeleau-france_v2.pdf (2026-09-22) · « Une mission commune pour l'eau, la biodiversité, le littoral, 6 agences de l'eau. Document commun listant les six agences et leurs sièges : Artois-Picardie (Douai), Rhin-Meuse (Moulins-lès-Metz), Seine-Normandie, Loire-Bretagne (Orléans), Rhône Méditerranée Corse (Lyon), Adour-Garonne (Toulouse), soit une couverture des bassins hydrographiques de la métropole. »
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=agence%20de%20l%27eau (2026-09-22) · « Six personnes morales distinctes, nature juridique 7385 : Seine-Normandie siren 187500095, Loire-Bretagne 184503019, Adour-Garonne 183100064, Rhône-Méditerranée-Corse 186901559, Rhin-Meuse 185703014, Artois-Picardie 185911781. Aucune entité unique ne regroupe les six agences, donc pas de SIRET pour cette fiche. »

## Aides

### AIDE_LAI_001 · Aide aux économies d'eau des activités économiques hors agricoles (agence de l'eau Artois-Picardie, 12e programme)

subvention · secteurs ['industrie_laitiere'] · départements national · agences ['AEAP'] · statut brouillon

Financeur : Agence de l'eau Artois-Picardie · Subvention, aux taux maximaux suivants : jusqu'à 50 % pour les études, jusqu'à 40 % pour les travaux d'économie d'eau, et jusqu'à 50 % pour les opérations collectives visant des économies d'eau au sein des petites et très petites entreprises. · plafond Travaux : plafond de 6 600 € par m3 d'eau économisé chaque jour. Pour les opérations collectives, le coût moyen journée des actions d'animation réalisées en régie est plafonné à 500 € par jour.

Volet économies d'eau de la délibération 25-A-036 du 12e programme d'intervention 2025-2030 de l'agence de l'eau Artois-Picardie. L'agence finance côté études les analyses technico-économiques d'optimisation de la gestion globale de l'eau (réduction des consommations à la source, recyclage interne et externe, réutilisation des eaux usées traitées, substitution par une eau non conventionnelle ou de moindre qualité), la mise en place de dispositifs de mesure quantitatifs et qualitatifs ou de recherche de fuite, et les études préalables aux investissements. Côté travaux, elle finance les travaux d'économie d'eau (changement de procédés, réutilisation d'eau de process, recyclage des eaux pluviales ou des eaux usées traitées) ainsi que les ouvrages de réseaux, de stockage et de traitement nécessaires à l'utilisation d'eaux non conventionnelles.

Éligibilité : Entreprises immatriculées au registre du commerce et des sociétés, chambres consulaires ou tout autre organisme représentatif d'une activité économique industrielle, commerciale ou artisanale, ainsi que collectivités territoriales et associations pour les projets qu'elles portent. Seules sont éligibles les opérations qui permettent d'aller au-delà des normes de portée européenne ou nationale en vigueur et d'améliorer la protection de l'environnement par rapport à l'état initial.

- Mesures : ACT_AGR_001, ACT_AGR_002, ACT_LAI_003, ACT_LAI_004, ACT_LAI_006
- **avertissement** : Trois situations rendent l'opération inéligible : l'entreprise en difficulté, sauf si l'aide est apportée dans le cadre du régime de minimis, le renouvellement à l'identique des ouvrages, et l'existence d'une mise en demeure réglementaire au titre de la police de l'eau ou des installations classées.
- **avertissement** : Les travaux visant à réutiliser les eaux usées traitées ne sont éligibles que si une étude réalisée au préalable démontre l'absence d'impact du projet sur les milieux naturels, en particulier les cours d'eau et les zones humides.
- **info** : Le volet économies d'eau de la délibération ne fixe pas de seuil de volume économisé, et un dispositif d'opérations collectives d'économies d'eau au sein des petites et très petites entreprises est subventionné à 50 %. Un petit atelier n'est donc pas écarté d'emblée sur ce bassin.
- **info** : En cas d'augmentation de la capacité de production, les volumes d'eau économisés ne sont pris en compte dans les dépenses finançables que pour la part correspondant aux économies se rapportant à la production initiale.
- **ressource** : Délibération 25-A-036, modalités et conditions d'attribution des aides pour la lutte contre la pollution des activités économiques hors agricoles (partie 4, économies d'eau) (https://www.eau-artois-picardie.fr/sites/default/files/013_25-a-036_lutte_poll_act_hors_agri.pdf)
- **ressource** : Présentation du 12e programme d'intervention 2025-2030 de l'agence de l'eau Artois-Picardie (https://www.eau-artois-picardie.fr/12eme-programme-dintervention-2025-2030)
- Sources :
  - taux, plafond : https://www.eau-artois-picardie.fr/sites/default/files/013_25-a-036_lutte_poll_act_hors_agri.pdf (2026-09-22) · « 4-2. Taux d'intervention et assiette. Etudes : Subvention de 50%. Travaux : Subvention de 40%, Plafond de 6 600 € par m3 d'eau économisé chaque jour. Opérations collectives visant des économies d'eau au sein des petites et très petites entreprises : Subvention de 50%, Le « coût moyen journée » des actions d'animation réalisées en régie est plafonné à 500 € par jour. »
  - description, mesures : https://www.eau-artois-picardie.fr/sites/default/files/013_25-a-036_lutte_poll_act_hors_agri.pdf (2026-09-22) · « 4-1. Actions éligibles. Pour les études : Les études technico-économiques d'optimisation de la gestion globale de l'eau (réduction des consommations à la source, recyclage interne et externe, réutilisation des eaux usées traitées, substitution par une eau non conventionnelle ou de moindre qualité...) ; La mise en place de dispositifs de mesure (quantitatif et qualitatif) ou de recherche de fuite ; Les études préalables aux investissements. Pour les travaux : Les travaux d'économie d'eau (changement de procédés, réutilisation d'eau de process, recyclage des eaux pluviales ou des eaux usées traitées...) ; Les ouvrages (réseaux, stockage, traitement) nécessaires à l'utilisation d'eaux non conventionnelles. »
  - eligibilite : https://www.eau-artois-picardie.fr/sites/default/files/013_25-a-036_lutte_poll_act_hors_agri.pdf (2026-09-22) · « 1-1. Etablissements et opérations éligibles. L'Agence de l'Eau peut apporter une participation financière aux maîtres d'ouvrage des activités économiques hors agricoles suivants : Entreprises immatriculées au registre du commerce et des sociétés, Chambres consulaires ou tout autre organisme représentatif d'une activité économique industrielle, commerciale ou artisanale, Collectivités territoriales et associations, pour les projets qu'elles portent [...] Sont éligibles aux aides de l'Agence de l'Eau les opérations qui permettent aux entreprises d'aller au-delà des normes de portée européenne ou nationale en vigueur, et d'améliorer la protection de l'environnement par rapport à l'état initial. »
  - infos_complementaires (critères d'exclusion, augmentation de capacité) : https://www.eau-artois-picardie.fr/sites/default/files/013_25-a-036_lutte_poll_act_hors_agri.pdf (2026-09-22) · « 1-2. Critères d'exclusion. Les opérations réunissant au moins l'un des critères suivants ne sont pas éligibles aux aides de l'Agence de l'Eau : Entreprises en difficulté, sauf si l'aide de l'Agence de l'Eau est apportée dans le cadre du régime de minimis, Renouvellement à l'identique des ouvrages, Existence d'une mise en demeure réglementaire au titre de la police de l'eau ou des installations classées pour la protection de l'environnement. [...] Les volumes d'eau économisés seront pris en compte dans les dépenses finançables pour la part correspondant aux économies d'eau se rapportant à la production initiale. »
  - infos_complementaires (condition REUT) : https://www.eau-artois-picardie.fr/sites/default/files/013_25-a-036_lutte_poll_act_hors_agri.pdf (2026-09-22) · « 4-3. Conditions particulières. Les travaux visant à réutiliser les eaux usées traitées sont éligibles aux aides de l'Agence de l'Eau si une étude réalisée au préalable démontre l'absence d'impact du projet sur les milieux naturels, en particulier les cours d'eau et les zones humides. »
  - nom, description (programme et date de publication) : https://www.eau-artois-picardie.fr/12eme-programme-dintervention-2025-2030 (2026-09-22) · « 12ème programme d'intervention 2025-2030, adopté le 15 octobre 2024 par le conseil d'administration et le comité de bassin, 1,279 milliard d'euros sur six ans. Le programme soutient les actions des industriels pour maîtriser leur consommation hydrique, réutiliser les eaux de process et recycler les eaux pluviales. »

### AIDE_LAI_002 · Réalisation d'installations de méthanisation (ADEME, dispositif 2026)

subvention · secteurs tous · départements ['01', '02', '03', '07', '09', '11', '12', '14', '15', '16', '17', '18', '19', '21', '23', '24', '25', '26', '27', '28', '30', '31', '32', '33', '34', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '53', '58', '59', '60', '61', '62', '63', '64', '65', '66', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '85', '86', '87', '89', '90', '91', '92', '93', '94', '95', '2A', '2B', '971', '972', '973', '974', '976'] · agences toutes · statut brouillon

Financeur : ADEME · Forfait de subvention par unité de capacité de production annuelle : 45 €/MWh PCS (pouvoir calorifique supérieur) pour l'injection de biométhane. D'autres modalités de calcul s'appliquent aux projets atypiques ou innovants et aux stations d'épuration urbaines. Aucun montant 2026 n'est publié pour la cogénération. · plafond 700 000 € pour un projet d'injection.

Dispositif ouvert du 1er janvier au 31 décembre 2026. L'ADEME finance l'investissement dans une unité de méthanisation, après une étude de faisabilité favorable. Les équipements soutenus sont les unités de méthanisation avec injection de biométhane (production de biogaz, production de chaleur seule, épuration du biogaz en biométhane, injection dans le réseau public) et la valorisation énergétique du biogaz des stations d'épuration urbaines. La fiche entreprise du dispositif ajoute les unités avec cogénération de moins de 500 kWe. Pour une laiterie ou une fromagerie, c'est le guichet qui finance l'unité de méthanisation valorisant le lactosérum et les pertes de lait détournés du réseau d'effluents, à condition d'être maître d'ouvrage de cette unité.

Éligibilité : Entreprises, dont les entreprises des secteurs agricole et agroalimentaire, et associations. La fiche entreprise du dispositif indique toutes tailles d'entreprise, micro-entreprises comprises, et tous secteurs d'activité. Les particuliers et les porteurs de projets pouvant bénéficier du crédit d'impôt sont exclus. La réalisation d'une étude de faisabilité préalable est une condition d'éligibilité, et l'opération ne doit pas avoir commencé ni avoir donné lieu à un engagement ferme au moment du dépôt.

- Mesures : ACT_LAI_007
- **avertissement** : Le dispositif ferme le 31 décembre 2026. Un projet qui ne serait pas déposé avant cette date devra attendre la publication du dispositif de l'année suivante, dont les taux et les plafonds peuvent changer.
- **avertissement** : L'opération ne doit pas avoir commencé ni avoir donné lieu à des engagements fermes, sous quelque forme que ce soit : marché signé, commande signée, devis accepté. Un devis accepté avant le dépôt du dossier fait perdre l'aide.
- **avertissement** : Toutes les régions ne proposent pas ce dispositif : la Bretagne, le Grand Est et la Provence-Alpes-Côte d'Azur ne figurent pas dans la liste 2026, et les départements de ces trois régions sont donc exclus de cette fiche. Un projet qui s'y situe relève d'un autre guichet de l'ADEME : prenez contact avec la direction régionale avant d'engager le montage.
- **avertissement** : Aucune des sources consultées ne dit qui perçoit l'aide lorsque l'unité de méthanisation et le producteur du substrat sont deux entreprises différentes. Lecture à confirmer auprès de la direction régionale de l'ADEME : l'aide portant sur les équipements de l'unité, elle reviendrait au maître d'ouvrage de l'installation, et un atelier laitier qui se contente de livrer son lactosérum à une unité appartenant à un tiers ne toucherait rien, même s'il tire le bénéfice de l'opération sur ses effluents et sa redevance.
- **avertissement** : Les sources 2026 ne publient de forfait que pour l'injection de biométhane. Une fromagerie qui viserait une cogénération ne trouve aucun montant 2026 : les 95 €/MWh PCI plafonnés à 200 000 € que l'on lit encore en ligne se rattachent à une version antérieure du dispositif, qui affichait aussi 40 €/MWh PCS et 600 000 € pour l'injection. À faire confirmer avant tout chiffrage.
- **info** : Les sources divergent sur les bénéficiaires. La fiche Aides-territoires du dispositif 2026 ne liste que des personnes publiques (commune, intercommunalité, département, établissement public, entreprise publique locale), mais cette plateforme s'adresse aux collectivités et affiche la même liste sur d'autres dispositifs ADEME ouverts aux entreprises. Les sources destinées aux entreprises sont concordantes : l'aide est à destination des entreprises, dont agricole et agroalimentaire. Le point est donc tranché en faveur de l'éligibilité des entreprises privées. La situation des collectivités, elle, reste incertaine : une source les cite comme bénéficiaires, une autre renvoie celles qui disposent d'un dispositif spécifique vers ce dernier.
- **info** : L'étude de faisabilité préalable est une condition d'éligibilité, et l'ADEME la finance par un dispositif distinct : Études préalables à la construction d'une installation de méthanisation, jusqu'à 70 % du coût de l'étude dans la limite de 100 000 €, ouvert aux entreprises du secteur agricole et des industries agroalimentaires. Sa liste de régions est plus large que celle de l'aide à l'investissement et inclut la Bretagne. Les études de faisabilité doivent être réalisées par un bureau d'études certifié Qualimétha ou équivalent. (https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/etude-methanisation)
- **info** : La démarche commence par une vérification d'éligibilité à partir du numéro SIRET, puis par la création d'un compte ADEME pour déposer le dossier (informations administratives, description du projet, détails techniques et financiers). Si la demande est acceptée, l'ADEME adresse un contrat de financement précisant le montant maximal, les conditions et les modalités de versement. La liste de pièces publiée pour une version antérieure du dispositif, à prendre comme indicative, comprenait l'étude de faisabilité ou le prédiagnostic, le devis du constructeur, la situation géographique du site et de la zone d'épandage, le récépissé de demande ICPE ou le permis de construire, le schéma de concept de l'unité, le bilan gaz à effet de serre et un RIB.
- **ressource** : Fiche du dispositif Investissement Méthanisation sur Mission Transition écologique, le service public de l'ADEME pour les aides aux entreprises (vérification d'éligibilité par SIRET) (https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/investissement-methanisation)
- **ressource** : Fiche du dispositif sur Aides-territoires : taux, plafond, équipements soutenus et régions proposant l'aide en 2026 (https://aides-territoires.beta.gouv.fr/aides/realisation-d-installations-de-methanisation/)
- Sources :
  - nom, taux, plafond, description (équipements soutenus, calendrier 2026) : https://aides-territoires.beta.gouv.fr/aides/realisation-d-installations-de-methanisation/ (2026-09-22) · « Nom initial de l'aide : « Réalisation d'installations de méthanisation ». L'aide de l'ADEME est apportée principalement sous forme de forfait de subvention par unité de capacité de production annuelle (€/MWh) : 45 €/MWh PCS (pouvoir calorifique supérieur) pour l'injection, avec une aide plafonnée à 700 000 €. Pour les projets atypiques et innovants et les projets de station d'épuration urbaine, d'autres modalités de calcul de l'aide sont utilisées. Les équipements soutenus par l'ADEME sont les suivants : unités de méthanisation avec injection de biométhane : production de biogaz ; valorisation énergétique du biogaz : production de chaleur seule, épuration du biogaz en biométhane, injection dans le réseau public ; stations d'épuration urbaines (STEU) : valorisation énergétique du biogaz comprenant l'épuration en biométhane et l'injection dans le réseau public. Porteur(s) d'aide : ADEME. Subvention. Calendrier : Du 1 janvier 2026 au 31 décembre 2026. »
  - departements (régions proposant le dispositif en 2026), infos_complementaires (régions exclues) : https://aides-territoires.beta.gouv.fr/aides/realisation-d-installations-de-methanisation/ (2026-09-22) · « Zone géographique couverte par l'aide : Auvergne-Rhône-Alpes, Bourgogne-Franche-Comté, Centre-Val de Loire, Corse, Guadeloupe, Guyane, Hauts-de-France, Île-de-France, La Réunion, Martinique, Mayotte, Normandie, Nouvelle-Aquitaine, Occitanie, Pays de la Loire »
  - infos_complementaires (bénéficiaires listés par Aides-territoires, à l'origine de la divergence) : https://aides-territoires.beta.gouv.fr/aides/realisation-d-installations-de-methanisation/ (2026-09-22) · « Bénéficiaires : Commune, Intercommunalité / Pays, Département, Etablissement public dont services de l'Etat, Entreprise publique locale (Sem, Spl, SemOp) »
  - eligibilite (entreprises de toutes tailles et tous secteurs), description (cogénération de moins de 500 kWe), infos_complementaires (opération non commencée, démarche et SIRET), departements : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/investissement-methanisation (2026-09-22) · « Investissement « Méthanisation ». Taille de l'entreprise : Toutes tailles, Éligible aux micro-entreprises. Secteur d'activité : Tous secteurs d'activité. Secteur géographique : Auvergne-Rhône-Alpes, Bourgogne-Franche-Comté, Centre-Val de Loire, Corse, Guadeloupe, Guyane, Hauts-de-France, Île-de-France, La Réunion, Martinique, Mayotte, Normandie, Nouvelle-Aquitaine, Nouvelle-Calédonie, Occitanie, Pays de la Loire, Polynésie française, Saint-Barthélemy, Saint-Martin. Autres critères d'éligibilité : L'opération pour laquelle vous sollicitez une aide financière ne doit pas avoir commencé ou ne doit pas avoir donné lieu à des engagements fermes (sous quelque forme que ce soit : marché signé, commande signée, devis accepté…). Les équipements financés sont les suivants : Unités de méthanisation avec cogénération (< 500 kWe) ou injection de biométhane [...] La réalisation d'une étude de faisabilité préalable est une condition d'éligibilité. Vérifiez automatiquement l'éligibilité de votre entreprise à l'aide de votre SIRET. Créez un compte ADEME pour pouvoir déposer votre dossier. Date de fin de l'aide : Disponible jusqu'au 31/12/2026. »
  - eligibilite (entreprises dont agricole et agroalimentaire, exclusion des particuliers et du crédit d'impôt), infos_complementaires (date de clôture) : https://mesaidespubliques.infogreffe.fr/aides/realisation-installations-methanisation-injection-cogeneration-chaleur (2026-09-22) · « Réalisation d'installations de méthanisation. Bénéficiaires : Cette aide est à destination des entreprises (dont agricole, agroalimentaire), des collectivités et des associations. Elle ne concerne pas les particuliers, porteurs de projets bénéficiant du crédit d'impôt. Date de clôture : 31/12/2026. Précisions : Installations de méthanisation - Conditions d'éligibilité et de financement - 2026. Source : nos données proviennent de la base officielle de l'État disponible sur aides-entreprises.fr, aides-territoires.beta.gouv.fr, la base les-aides.fr ainsi que les sites officiels des financeurs publics. »
  - eligibilite (entreprises agroalimentaires, cas des collectivités), infos_complementaires (pièces du dossier, version antérieure du dispositif et ses montants) : https://aides-territoires.beta.gouv.fr/aides/24b3-methaniser-installations-de-methanisation-inj/ (2026-09-22) · « Dispositif hors périmètre : ce dispositif ne s'adresse pas aux collectivités locales et établissements publics. Bénéficiaires : Toutes entreprises dont le secteur agricole, agroalimentaire et les associations... Sauf projet bénéficiant du crédit d'impôt ainsi que les collectivités qui disposent d'un dispositif spécifique. 95 €/MWh PCI pour la cogénération, avec une aide plafonnée à 200 000 €, 40 €/MWh PCS pour l'injection, avec une aide plafonnée à 600 000 €. [...] assurez-vous de joindre également les pièces suivantes : Etude de faisabilité ou pré-diagnostic, Devis du constructeur, Situation géographique de l'exploitation et zone d'épandage, Récépissé de demande ICPE ou permis de construire, Schéma de concept de l'unité, Bilan gaz à effet de serre, RIB. »
  - infos_complementaires (aide aux études préalables, régions de ce dispositif, certification Qualimétha) : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/etude-methanisation (2026-09-22) · « Étude « Méthanisation ». Montant du financement : Jusqu'à 70% du coût de l'étude, dans un maximum de 100 000 €. Secteur d'activité : Activité agricole ou industries agro-alimentaires. Secteur géographique : Auvergne-Rhône-Alpes, Bourgogne-Franche-Comté, Bretagne, Centre-Val de Loire, Corse [...]. Les études de faisabilité devront être réalisées par un bureau d'étude certifié Qualimétha ou équivalent. Date de fin de l'aide : Disponible jusqu'au 31/12/2026. »
  - infos_complementaires (même liste de bénéficiaires publics affichée par Aides-territoires sur un dispositif ADEME ouvert aux entreprises agroalimentaires) : https://aides-territoires.beta.gouv.fr/aides/etudes-de-diagnostic-et-d-accompagnement-de-projet-d-une-installation-de-methanisation/ (2026-09-22) · « Études de diagnostic et d'accompagnement de projet d'une installation de méthanisation. Bénéficiaires : Commune, Intercommunalité / Pays, Département, Etablissement public dont services de l'Etat, Entreprise publique locale (Sem, Spl, SemOp) »

### AIDE_LAI_003 · Diag Eco-Flux, diagnostic des flux énergie, eau, matières et déchets (ADEME et Bpifrance)

accompagnement · secteurs tous · départements national · agences toutes · statut brouillon

Financeur : ADEME et Bpifrance · Subvention de 50 % du coût de la prestation · plafond Reste à charge de 3 000 € HT par site

Diagnostic réalisé sur le site par un consultant indépendant agréé et sélectionné par Bpifrance, selon une méthodologie élaborée avec l'ADEME. Il analyse quatre flux, l'énergie, l'eau, les matières premières et les déchets, repère les pertes et les leviers d'action prioritaires, aboutit à un plan d'action ciblé, puis accompagne le lancement des premières actions de réduction. Le périmètre, la méthode et le calendrier sont définis avec l'expert au cadrage. Le portail Mission Transition écologique annonce 6 à 8 jours de prestation répartis sur 15 à 18 mois.

Éligibilité : Entreprises de tous secteurs d'activité dont l'établissement compte entre 20 et 250 salariés, en France et dans les territoires d'outre-mer, avec au moins un an d'activité. Les micro-entreprises ne sont pas éligibles.

- Mesures : ACT_AGR_002
- **avertissement** : Le dispositif s'adresse aux établissements de 20 à 250 salariés et n'est pas ouvert aux micro-entreprises : les ateliers fromagers de quelques salariés en sont écartés.
- **avertissement** : Ce diagnostic ne remplace pas un audit eau dédié. L'eau n'est qu'un des quatre flux analysés, aux côtés de l'énergie, des matières et des déchets, sur une prestation de 6 à 8 jours au total. Il donne un état des lieux des pertes et des leviers prioritaires. Un site dont l'eau est l'enjeu central a intérêt à faire porter explicitement le cadrage sur ce poste, puis à engager ensuite une étude eau plus approfondie.
- **avertissement** : La durée annoncée diffère selon les pages officielles : 6 à 8 jours répartis sur 15 à 18 mois sur le portail Mission Transition écologique, 7 jours répartis sur 10 mois sur la page du catalogue Bpifrance, qui n'a pas pu être relue au contrôle. À faire préciser par le conseiller Bpifrance avant de s'engager.
- **info** : Les diagnostics du partenariat ADEME et Bpifrance sont financés par l'ADEME et, depuis 2025, par des financements reposant sur les Certificats d'Économies d'Énergie. Le reste à charge de l'entreprise est de 3 000 € HT par site après la subvention de 50 %. Les deux partenaires annoncent viser environ 3 000 entreprises accompagnées par an et au moins 10 000 à l'horizon 2028 : il ne s'agit pas d'un appel à projets ponctuel.
- **info** : La démarche se fait auprès de Bpifrance : vérification de l'éligibilité à partir du SIRET, formulaire d'intérêt, rappel par un conseiller, puis définition en commun du périmètre du diagnostic, de la méthode et du calendrier avant le lancement avec l'expert.
- **retour_experience** : Depuis le lancement du dispositif en septembre 2020, les actions recommandées dans le cadre du Diag Eco-Flux ont permis à plus de 1 500 sites accompagnés d'économiser chaque année 2,6 millions de mètres cubes d'eau et 578 GWh d'énergie, et de générer en moyenne plus de 60 000 € d'économies annuelles par site, tous flux confondus.
- **ressource** : Fiche du dispositif sur le portail Mission Transition écologique, avec vérification d'éligibilité par SIRET (https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/diag-eco-flux)
- **ressource** : Communiqué de presse ADEME et Bpifrance du 25 juin 2025 sur les diagnostics et leur financement (https://presse.bpifrance.fr/bpifrance-et-lademe-renforcent-leur-partenariat-a-travers-leurs-diagnostics-dedies-a-la-transition-energetique-et-ecologique-des-entreprises)
- **ressource** : Page du dispositif sur le catalogue d'offres de Bpifrance (https://www.bpifrance.fr/catalogue-offres/diagnostic-eco-flux)
- Sources :
  - nom, description, categories, mesures : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/diag-eco-flux (2026-09-22) · « Vous êtes accompagné par un expert référencé par Bpifrance, selon une méthodologie élaborée avec l'ADEME. Analysez vos flux d'énergie, d'eau, de matières premières et de déchets. Repérez les pertes et les leviers d'action prioritaires. Définissez un plan d'action ciblé, simple à mettre en oeuvre. Lancez vos premières actions de réduction des pertes. »
  - taux, plafond, type, durée de la prestation : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/diag-eco-flux (2026-09-22) · « Coût restant à charge : 3 000 € HT après subvention de 50%. Prestation : 6 à 8 jours de prestation répartis sur 15 à 18 mois. [...] Lancez le diagnostic avec l'expert, consultant indépendant agréé et sélectionné par Bpifrance. »
  - eligibilite, departements, secteurs, dispositif en vigueur : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/diag-eco-flux (2026-09-22) · « Date de fin de l'aide : Aide disponible. Taille de l'entreprise : Entre 20 et 250 salariés, Non éligible aux micro-entreprises. Secteur géographique : France et territoires d'outre-mer. Nombre d'années d'activité : Au moins 1 an d'activité. Secteur d'activité : Tous secteurs d'activité »
  - infos_complementaires (démarche et cadrage) : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/diag-eco-flux (2026-09-22) · « Vérifiez automatiquement l'éligibilité de votre entreprise à l'aide de votre SIRET. [...] Un conseiller vous rappelle pour répondre à vos questions et vous guider dans la constitution de votre demande. Définissez ensemble le périmètre du diagnostic, la méthode et le calendrier. »
  - financeur, mesures, infos_complementaires (financement ADEME et CEE, pérennité) : https://presse.bpifrance.fr/bpifrance-et-lademe-renforcent-leur-partenariat-a-travers-leurs-diagnostics-dedies-a-la-transition-energetique-et-ecologique-des-entreprises (2026-09-22) · « Communiqué du 25 juin 2025 : Le Diag Eco-Flux : réaliser des économies rapides sur ses flux matière, énergie, déchets et eau [...] À partir de 2025, en complément des financements de l'ADEME, il bénéficiera de financements reposant sur les Certificats d'Économies d'Énergie (CEE). [...] Ces diagnostics sont financés par l'ADEME, notamment par le dispositif des CEE. [...] l'ADEME et Bpifrance ambitionnent d'accompagner environ 3 000 entreprises chaque année. À l'horizon 2028, l'objectif fixé est d'atteindre un minimum de 10 000 entreprises accompagnées »
  - infos_complementaires (retour d'expérience) : https://presse.bpifrance.fr/bpifrance-et-lademe-renforcent-leur-partenariat-a-travers-leurs-diagnostics-dedies-a-la-transition-energetique-et-ecologique-des-entreprises (2026-09-22) · « Depuis le lancement du dispositif en septembre 2020, les actions recommandées dans le cadre du Diag Eco-Flux ont permis à plus de 1 500 sites accompagnés de réaliser des économies annuelles de 578 GWh d'énergie, 2,6 millions de mètres cubes d'eau et plus de 856 000 tonnes de matières et déchets et de générer en moyenne plus de 60 000 euros d'économies annuelles par site. »
  - infos_complementaires (durée annoncée par l'opérateur). Page lue en navigateur mais renvoyant HTTP 403 à l'outil de contrôle : citée uniquement pour signaler la divergence, aucun autre champ ne repose sur elle. : https://www.bpifrance.fr/catalogue-offres/diagnostic-eco-flux (2026-09-22) · « Une démarche simple, 7 jours homme d'intervention sur 10 mois [...] Le reste à charge pour l'entreprise, après subvention, est de : 3 000€ HT par site »

### AIDE_LAI_004 · Prêt Vert (Bpifrance)

pret · secteurs tous · départements national · agences toutes · statut brouillon

Financeur : Bpifrance · Prêt à taux fixe, avec des frais de dossier de 0,40 % du montant du prêt (ces deux conditions financières ne figurent que sur la page du catalogue de Bpifrance et sur le portail Mes Aides Publiques Infogreffe qui la reprend : faites-les confirmer par le chargé d'affaires avant tout plan de financement). Aucune garantie n'est prise sur les actifs de l'entreprise ni sur le patrimoine du dirigeant : seule une retenue de garantie de 5 % du montant du prêt est prélevée, restituée après complet remboursement et augmentée des intérêts qu'elle a produits. Une assurance décès et perte totale et irréversible d'autonomie sur la tête du dirigeant peut être requise. · plafond De 50 000 € à 5 000 000 €, sur une durée de 2 à 10 ans incluant un différé d'amortissement en capital de 2 ans maximum.

Prêt de Bpifrance destiné à financer un plan d'actions de transition écologique et énergétique. Le dispositif nomme explicitement l'eau parmi les performances visées, dans la première des quatre puces qui définissent les dépenses soutenues : il finance les investissements qui visent à optimiser les procédés, ou à améliorer la performance en énergie, en eau et en matière, afin de mieux maîtriser ou de diminuer les impacts sur l'environnement, y compris les procédés d'économie circulaire. L'eau revient dans la puce consacrée à l'innovation, parmi les ressources dont la consommation doit baisser. Les deux autres volets portent sur la mobilité zéro carbone et sur l'intégration d'énergies renouvelables. Pour une entreprise laitière, ce prêt s'adresse aux investissements lourds de sobriété hydrique : fermeture des circuits de refroidissement et suppression des tours aéroréfrigérantes, concentration du lactosérum sur site, récupération et réutilisation des eaux issues du lait.

Éligibilité : Bpifrance décrit la cible comme les TPE, PME et ETI indépendantes de plus de 3 ans d'activité ; le portail d'État précise moins de 5 000 salariés, une implantation en France métropolitaine ou dans les territoires d'outre-mer, et l'inéligibilité des micro-entreprises. Tous les secteurs d'activité sont admis, à l'exception de l'intermédiation financière, de la promotion immobilière et du négoce de biens, des entreprises agricoles de la section NAF A01, et de celles de la section A02 dont le chiffre d'affaires est inférieur à 750 000 €, les codes NAF 02.20Z et 02.40Z des entreprises forestières restant éligibles. Les entreprises en difficulté au sens de la définition européenne sont exclues. Le prêt est obligatoirement associé à un concours bancaire du même montant.

- Mesures : ACT_LAI_004, ACT_LAI_005, ACT_LAI_006
- **avertissement** : Le Prêt Vert ne finance jamais seul un projet : il est obligatoirement associé à un partenariat financier, à raison de 1 pour 1, soit un concours bancaire du même montant. Sans accord préalable d'une banque sur la moitié du plan de financement, le dossier ne peut pas aboutir.
- **avertissement** : Le taux fixe et les frais de dossier de 0,40 % ne sont publiés que sur la page du catalogue de Bpifrance, que certains outils de consultation automatique ne parviennent pas à ouvrir, et sur le portail Mes Aides Publiques Infogreffe qui la reprend. Le portail d'État Mission Transition écologique et la fiche des chambres de commerce confirment les montants, la durée, le différé et les garanties, mais pas ces deux éléments de coût. Demandez-les par écrit au chargé d'affaires avant d'arbitrer.
- **info** : Contrairement aux dispositifs strictement orientés énergie et carbone, le Prêt Vert cite l'eau au même rang que l'énergie et la matière dans la définition même des dépenses soutenues. Un investissement dont le bénéfice principal est hydrique, comme la concentration du lactosérum ou la fermeture d'un circuit de refroidissement, entre donc dans le champ du dispositif au titre de l'optimisation des procédés.
- **info** : Au-delà de 500 000 €, un site industriel peut regarder le Prêt Industrie Verte, ouvert aux TPE, PME et ETI indépendantes des secteurs de l'industrie (codes NAF 10 à 33, qui couvrent la fabrication de produits laitiers) et des services à l'industrie : de 500 000 € à 10 000 000 €, sur 8 à 12 ans avec un différé d'amortissement en capital de 2 ans maximum, à taux fixe bonifié selon le barème en vigueur, avec les mêmes dépenses éligibles en énergie, eau et matière. La page du catalogue de Bpifrance mentionne en outre une prise de sûreté réelle obligatoire, condition que la fiche régionale ne reprend pas : faites préciser ce point, car il distingue nettement ce prêt du Prêt Vert.
- **avertissement** : Le Prêt Économies d'Énergies de Bpifrance n'est plus proposé : sa page au catalogue des offres affiche « Désolé, cette offre n'est plus disponible », constaté le 22 septembre 2026. Cette page fait partie de celles que certains outils de consultation automatique n'ouvrent pas, et aucune autre source consultée ne confirme la clôture : vérifiez auprès de Bpifrance avant de renoncer à ce dispositif. Ne pas confondre non plus avec le Prêt Vert ADEME, variante conditionnée à un Diag Eco-Flux, affichée comme close depuis le 16 juin 2024.
- **info** : La démarche passe par une vérification automatique d'éligibilité à partir du SIRET sur le portail Mission Transition écologique, puis un formulaire d'expression d'intérêt adressé à Bpifrance, puis un rendez-vous de financement avec un chargé d'affaires qui instruit la demande.
- **ressource** : Fiche du Prêt Vert sur le portail d'État Mission Transition écologique, avec le test d'éligibilité par SIRET (https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/pret-vert)
- **ressource** : Fiche du Prêt Vert sur les-aides.fr, la base des chambres de commerce et d'industrie (montant, durée, garanties, dépenses éligibles) (https://les-aides.fr/aide/cmUv3w/bpifrance/pret-vert.html)
- **ressource** : Page du Prêt Vert au catalogue des offres de Bpifrance (https://www.bpifrance.fr/catalogue-offres/pret-vert)
- **ressource** : Fiche du Prêt Industrie Verte publiée par la Région Occitanie, avec les modalités et les coordonnées des chargés de coordination Climat de Bpifrance (https://www.laregion.fr/Pret-Industrie-Verte-Bpifrance)
- Sources :
  - plafond, description, mesures (dépenses éligibles nommant l'eau), disponibilité du dispositif : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/pret-vert (2026-09-22) · « Montant du prêt : De 50 000 € à 5 000 000 €. Durée du prêt : de 2 à 10 ans, avec un différé d'amortissement en capital de 2 ans maximum. Date de fin de l'aide : Aide disponible. [...] En co-financement avec une banque privée, le prêt Vert soutient les projets visant à : optimiser les procédés, ou améliorer la performance (énergie, eau, matière,) afin de mieux maîtriser ou de diminuer les impacts sur l'environnement, en ce compris des procédés d'économie circulaire ; [...] innover pour mettre sur le marché des produits ou des services en matière de protection de l'environnement, d'économie circulaire et/ou permettant une réduction de la consommation de ressources, renouvelables ou non, (énergie, matières premières, eau, etc. [...]) »
  - eligibilite (taille, ancienneté, secteurs exclus, concours bancaire), infos_complementaires (démarche en trois étapes) : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/pret-vert (2026-09-22) · « Taille de l'entreprise : Moins de 5000 salariés. Non éligible aux micro-entreprises. Secteur géographique : France et territoires d'outre-mer. Nombre d'années d'activité : Au moins 3 ans d'activité. Secteur d'activité : Tous secteurs d'activité. Sont exclus : les activités d'intermédiation financière (NAF : section K64 sauf 64-2 pour les achats d'entreprises) ; les activités de promotion immobilière et marchand de biens (NAF : section L68-1, L68-2 et F41-1) ; les entreprises des secteurs agricoles identifiées par les code NAF section A01, et section A02 dont le chiffre d'affaires est inférieur à 750 000 €, à l'exception des codes NAF 02.20Z et 02.40Z (entreprises forestières). Autres critères d'éligibilité : Ce prêt est obligatoirement associé à un concours bancaire du même montant. Sont exclues les entreprises en difficulté au sens de la définition européenne. [...] Vérifiez automatiquement l'éligibilité de votre entreprise à l'aide de votre SIRET. [...] Exprimez votre intérêt pour ce prêt à Bpifrance grâce au formulaire ci-dessous. Obtenez un rendez-vous de financement auprès d'un chargé d'affaires Bpifrance. »
  - taux (partie garanties), plafond, eligibilite (TPE, PME, ETI indépendantes de plus de 3 ans), description, mesures. Page ouvrable, base des chambres de commerce et d'industrie, mise à jour le 12 mai 2026 : https://les-aides.fr/aide/cmUv3w/bpifrance/pret-vert.html (2026-09-22) · « Prêt Vert. Investissement − Transition écologique. BPIFRANCE. Mise à jour le 12 mai 2026. [...] Il s'adresse aux TPE, PME ou une ETI indépendantes de plus de 3 ans. [...] Le Prêt Vert finance la mise en œuvre d'un plan d'actions visant à : optimiser les procédés, ou améliorer la performance (énergie, eau, matière) afin de mieux maîtriser ou de diminuer les impacts sur l'environnement, [...] Le montant du prêt peut aller de 50 000 € à 5 M€. Obligatoirement associé à un partenariat financier, à raison de 1 pour 1. Aucune garantie sur les actifs de l'entreprise, ni sur le patrimoine du dirigeant. Seule une retenue de garantie de 5 % du montant du prêt est prélevée. Elle est restituée après complet remboursement du prêt, augmentée des intérêts qu'elle a produit. Une assurance décès/perte totale et irréversible d'autonomie sur la tête du dirigeant peut être requise. La durée du prêt est de 2 à 10 ans. »
  - taux (taux fixe et frais de dossier de 0,40 %, seule page ouvrable qui les publie, en reprise du catalogue de Bpifrance ; réserve signalée dans le champ taux et dans un avertissement). Portail Mes Aides Publiques Infogreffe, mise à jour du 07/09/2025 : https://mesaidespubliques.infogreffe.fr/aides/pret-vert (2026-09-22) · « Durée : De 2 à 10 ans. Conditions financières : Taux fixe. Frais de dossier : 0,40% du montant du prêt. Garanties : Aucune garantie sur les actifs de l'entreprise, ni sur le patrimoine du dirigeant. Seule une retenue de garantie de 5 % du montant du prêt est prélevée. Elle est restituée après complet remboursement du prêt, augmentée des intérêts qu'elle a produit. Une assurance décès/perte totale et irréversible d'autonomie sur la tête du dirigeant peut être requise. Partenariats financiers : Obligatoirement associé à un partenariat financier, à raison de 1 pour 1. [...] Date de mise à jour : 07/09/2025 »
  - taux, nom, financeur, description (source d'origine ; attention, www.bpifrance.fr répond 200 à verifier-url et à un navigateur, mais 403 aux récupérateurs de pages sans en-tête de navigateur : le taux fixe et les frais de dossier sont donc doublés sur mesaidespubliques.infogreffe.fr et assortis d'une réserve dans la fiche) : https://www.bpifrance.fr/catalogue-offres/pret-vert (2026-09-22) · « Prêt Vert. Financer le développement d'un projet de transition écologique et énergétique. [...] Votre profil : TPE, PME ou une ETI indépendantes de plus de 3 ans. Modalités : Le Prêt Vert finance la mise en œuvre d'un plan d'actions visant à : optimiser les procédés, ou améliorer la performance (énergie, eau, matière) afin de mieux maîtriser ou de diminuer les impacts sur l'environnement ; [...] Montant : De 50 K€ à 5 000 K€. Durée : De 2 à 10 ans. Conditions financières : Taux fixe. Frais de dossier : 0,40% du montant du prêt. Garanties : Aucune garantie sur les actifs de l'entreprise, ni sur le patrimoine du dirigeant. [...] Partenariats financiers : Obligatoirement associé à un partenariat financier, à raison de 1 pour 1. »
  - infos_complementaires (Prêt Industrie Verte : montant, durée, différé, taux fixe bonifié, codes NAF 10 à 33). Page ouvrable, fiche de la Région Occitanie : https://www.laregion.fr/Pret-Industrie-Verte-Bpifrance (2026-09-22) · « L'offre : Prêt de 500k€ à 10 000k€ permettant de financer les projets de Transition Ecologique et Energétique des PME et ETI industrielles. Le Prêt Industrie Verte finance les dépenses immatérielles, matérielles et le besoin en fonds de roulement généré par la mise en œuvre de plans d'actions visant à : Optimiser les procédés ou améliorer la performance (énergie, eau, matière) pour mieux maîtriser ou diminuer les impacts sur l'environnement, [...] Les modalités : Durée de l'accompagnement : 8 à 12 ans avec un différé d'amortissement en capital de 2 ans max. Public : TPE, PME, ETI indépendante des secteurs « Industrie » (Code NAF 10 à 33) et « Services à l'Industrie (Code NAF 49 à 52). Coût : Taux fixe bonifié selon le barème en vigueur. »
  - infos_complementaires (Prêt Industrie Verte : sûreté réelle obligatoire, condition non reprise par la fiche régionale, réserve signalée dans l'info ; www.bpifrance.fr répond 403 aux récupérateurs sans en-tête de navigateur) : https://www.bpifrance.fr/catalogue-offres/pret-industrie-verte (2026-09-22) · « Prêt Industrie Verte. Prêt de 500 000 € à 10 000 000 € pour financer les projets de Transition Ecologique et Energétique des PME et ETI industrielles. [...] Durée : De 8 à 12 ans incluant un différé d'amortissement en capital de 24 mois maximum. [...] Garanties : Prise d'une sûreté réelle obligatoire. Retenue de garantie de 5% du montant total du prêt, restituée après complet remboursement du prêt et augmentée des intérêts produits. »
  - infos_complementaires (Prêt Économies d'Énergies clos ; seule source, page 403 pour les récupérateurs sans en-tête de navigateur, réserve signalée dans l'avertissement) : https://www.bpifrance.fr/catalogue-offres/pret-economies-denergies (2026-09-22) · « Catalogue des offres / Transition Ecologique et Energétique / Prêt Économies d'Énergies. Désolé, cette offre n'est plus disponible. Consultez nos autres offres. »
  - infos_complementaires (Prêt Vert ADEME, homonyme clos, à ne pas confondre avec le dispositif de cette fiche) : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/pret-vert-ademe (2026-09-22) · « Prêt Vert - Ademe. Montant du prêt : De 10 000 € à 1 000 000 €. [...] Disponible jusqu'au 16/06/2024. [...] avoir bénéficié d'un Diag Eco-Flux ou d'une aide de l'ADEME depuis moins de 3 ans. »

### AIDE_LAI_005 · Aide aux économies d'eau et à la réutilisation des activités industrielles et artisanales (agence de l'eau Rhin-Meuse, 12e programme)

subvention · secteurs ['industrie_laitiere'] · départements national · agences ['AERM'] · statut brouillon

Financeur : Agence de l'eau Rhin-Meuse · Subvention, à des taux de référence que l'agence peut adapter en fonction de l'impact ou de l'ambition du projet. Études hors innovation : jusqu'à 60 % pour une grande entreprise, 70 % pour une moyenne entreprise, 80 % pour une petite entreprise ou une microentreprise. Travaux d'économie d'eau, technologies propres et moyens de mesure et de contrôle : jusqu'à 40 %, 50 % et 60 % selon la même échelle de taille hors zone d'aide à finalité régionale, et jusqu'à 45 %, 55 % et 65 % en zone d'aide à finalité régionale. · plafond La fiche thématique n'affiche pas de montant plafond pour les économies d'eau : l'assiette est retenue en fonction de l'apport environnemental du projet.

Volet économies d'eau et réutilisation de la fiche thématique sur les pressions générées par les activités économiques industrielles et artisanales, approuvée par la délibération 2025/21 du 12e programme d'intervention 2025-2030 de l'agence de l'eau Rhin-Meuse. Sont éligibles les travaux qui réduisent significativement, directement ou indirectement, les volumes d'eau prélevés dans le milieu naturel, volumes appréciés en m3 rapportés à la production avant et après investissement. Ces projets peuvent porter sur la réutilisation des eaux usées traitées et des eaux non conventionnelles, catégorie qui inclut les eaux issues de process industriels. Les dispositifs de mesure et de suivi des eaux prélevées et des eaux de process, ainsi que les technologies propres faisant partie intégrante de la chaîne de production, relèvent du même barème. L'agence vise 6 millions de m3 d'eau prélevée économisée sur la durée du programme.

Éligibilité : Activités économiques industrielles et artisanales du bassin Rhin-Meuse. Les investissements doivent respecter le principe de non-dégradation de l'état des eaux, apporter un haut niveau de protection environnementale, et s'inscrire dans les trajectoires de sobriété en eau définies par les démarches de gouvernance de l'eau du territoire lorsqu'une structure porteuse existe. Les microentreprises sont aidées de façon privilégiée dans le cadre d'opérations groupées, territoriales ou sectorielles, qui doivent être portées par une collectivité territoriale, un organisme consulaire ou professionnel ou un autre organisme représentatif des activités économiques.

- Mesures : ACT_AGR_001, ACT_AGR_002, ACT_LAI_003, ACT_LAI_004, ACT_LAI_006
- **avertissement** : L'agence n'apporte pas d'aide à un projet destiné à répondre à une mise en demeure réglementaire, sauf si la demande d'aide est antérieure à la date de l'arrêté de mise en demeure, ou s'il s'agit d'une étude rendue obligatoire par cet arrêté. Si la mise en demeure porte une échéance, l'établissement est inéligible quelle que soit cette échéance.
- **avertissement** : Un atelier de taille microentreprise n'est pas exclu mais passe rarement par le guichet individuel : l'agence l'aide de façon privilégiée dans le cadre d'une opération groupée portée par une collectivité, une chambre consulaire ou une organisation professionnelle. Pour la pollution classique, l'accompagnement des microentreprises est même exclusivement groupé sur les secteurs à enjeu.
- **avertissement** : Pour une activité industrielle soumise au régime de Suivi Régulier des Rejets, l'attribution d'une aide financière est conditionnée à l'obtention de l'agrément, sauf impossibilité technique. Seule fait exception l'aide destinée à mettre en place les moyens nécessaires à cet agrément.
- **info** : Les taux affichés sont des taux de référence, pas des taux acquis : l'agence est susceptible de proposer une adaptation de l'assiette ou du taux d'aide en fonction de l'impact ou de l'ambition du projet au regard des enjeux environnementaux.
- **info** : L'aide prend la forme d'une subvention dont le taux de référence est celui permis par le règlement communautaire en vigueur. L'agence se réserve le droit, au cas par cas, de mobiliser des aides sous forme d'avances remboursables.
- **info** : Les taux gagnent 5 points en zone d'aide à finalité régionale. Ces zones, dites zones c non prédéfinies en France métropolitaine, sont délimitées par l'État : vérifiez le classement de votre commune avant d'estimer le taux applicable.
- **info** : Les demandes d'aide se formulent sur la plateforme Rivage, accessible du lundi au samedi de 7h30 à 20h. Les équipes de l'agence répondent du lundi au vendredi de 9h à 12h et de 13h30 à 16h30 au numéro vert gratuit 0 800 710 325.
- **ressource** : Fiche thématique du 12e programme sur les pressions générées par les activités économiques industrielles et artisanales (délibération 2025/21) (https://cdi.eau-rhin-meuse.fr/GEIDEFile/Interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales_-_FICHE_THEMATIQUE.pdf?Archive=264992408217&File=interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales___FicHe_THeMaTiQue_pdf)
- **ressource** : Page Nos aides de l'agence de l'eau Rhin-Meuse, avec le guide des aides aux industriels et l'accès à la plateforme Rivage (https://www.eau-rhin-meuse.fr/nos-aides)
- **ressource** : Les délibérations et fiches thématiques du 12e programme d'intervention Rhin-Meuse (https://www.eau-rhin-meuse.fr/nos-deliberations)
- Sources :
  - taux, plafond, type : https://cdi.eau-rhin-meuse.fr/GEIDEFile/Interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales_-_FICHE_THEMATIQUE.pdf?Archive=264992408217&File=interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales___FicHe_THeMaTiQue_pdf (2026-09-22) · « ÉCONOMIES D'EAU. Assiette : En fonction de l'apport environnemental. Taux d'aide de référence : Hors zones d'Aides à Finalité Régionale (AFR) : Grandes entreprises : 40 %, Moyennes entreprises : 50 %, Petites et microentreprises : 60 %. En zones AFR (c) : Grandes entreprises : 45 %, Moyennes entreprises : 55 %, Petites et microentreprises : 65 %. [...] ÉTUDES, hors études d'innovation : Grandes entreprises : 60 %, Moyennes entreprises : 70 %, Petites et microentreprises : 80 %. [...] 3 - NATURE DES AIDES : L'Agence de l'eau intervient sous la forme d'une subvention dont le taux de référence est basé sur les taux d'aides permis par le règlement communautaire en vigueur. L'Agence de l'eau se réserve le droit, au cas par cas, de mobiliser des aides sous forme d'avances remboursables. »
  - description, mesures (économies d'eau, réutilisation) : https://cdi.eau-rhin-meuse.fr/GEIDEFile/Interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales_-_FICHE_THEMATIQUE.pdf?Archive=264992408217&File=interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales___FicHe_THeMaTiQue_pdf (2026-09-22) · « Sont éligibles les travaux permettant de réduire significativement, directement ou indirectement, les volumes d'eau prélevés dans le milieu naturel. Ces volumes d'eau s'apprécient en m3 rapportés à la production avant et après investissement. [...] Ces projets économies d'eau peuvent notamment concerner la Réutilisation des Eaux Usées Traitées (REUT) et des eaux non conventionnelles dans le respect des conditions édictées dans la fiche thématique gestion quantitative de la ressource en eau et de la réglementation afférente en vigueur. [...] L'Agence de l'eau se fixe pour objectif d'atteindre 6 millions de m3 d'eau prélevée économisée au cours du 12e Programme d'intervention. »
  - mesures (compteurs, technologies propres, études) : https://cdi.eau-rhin-meuse.fr/GEIDEFile/Interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales_-_FICHE_THEMATIQUE.pdf?Archive=264992408217&File=interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales___FicHe_THeMaTiQue_pdf (2026-09-22) · « 4.3.5. Moyens de mesure et de contrôle : Les travaux éligibles sont les dispositifs permettant la mesure et le suivi des eaux prélevées, des eaux de process et des flux polluants et les dispositifs permettant la surveillance des eaux souterraines. [...] 4.3.3. Technologies propres : Est considéré comme une technologie propre éligible, un investissement de lutte contre la pollution ou contribuant à l'adaptation ou l'atténuation au changement climatique, faisant partie intégrante de la chaine de production. [...] Les études sont éligibles dès lors qu'elles sont nécessaires à la définition, à l'analyse de la faisabilité ou d'opportunité ou à la préparation des investissements ou actions éligibles. »
  - mesures (eaux non conventionnelles) : https://cdi.eau-rhin-meuse.fr/GEIDEFile/Interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales_-_FICHE_THEMATIQUE.pdf?Archive=264992408217&File=interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales___FicHe_THeMaTiQue_pdf (2026-09-22) · « EAUX NON CONVENTIONNELLES : Eaux de pluie récupérées en aval des toitures, eaux grises sortant des douches, lave-linge et lavabo, eaux pluviales ruisselant sur les voiries et surfaces urbaines autres que les toitures, eaux d'exhaure pompées en permanence pour mettre hors d'eau des infrastructures souterraines (parking, stations de métro, ...), eaux issues de process industriels. »
  - eligibilite, infos_complementaires (microentreprises, mise en demeure, SRR) : https://cdi.eau-rhin-meuse.fr/GEIDEFile/Interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales_-_FICHE_THEMATIQUE.pdf?Archive=264992408217&File=interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales___FicHe_THeMaTiQue_pdf (2026-09-22) · « les microentreprises sont aidées de façon privilégiée dans le cadre d'opérations groupées (territoriales ou sectorielles) qui requièrent le portage par des collectivités territoriales, des organismes consulaires et professionnels ou tout autre organisme représentatif des activités économiques industrielles, commerciales ou artisanales. Sur les secteurs où un enjeu relatif à la pollution classique a été démontré, les microentreprises sont exclusivement accompagnées dans le cadre d'opérations groupées. [...] Les investissements doivent [...] Respecter le principe de non-dégradation de l'état des eaux [...] S'inscrire dans les trajectoires de sobriété en eau définies dans le cadre des démarches de gouvernance de l'eau à l'échelle de territoires cohérents [...] Pour une activité industrielle soumise réglementairement au régime de Suivi Régulier des Rejets (SRR), l'attribution d'une aide financière (autre que pour la mise en place des moyens nécessaires à l'obtention de l'agrément SRR) est conditionnée à l'obtention de l'agrément, sauf cas d'impossibilité technique. L'Agence de l'eau n'apportera pas d'aide lorsqu'elle est sollicitée pour accompagner un projet permettant de répondre à une mise en demeure réglementaire, sauf si la demande d'aide relative à ce projet est antérieure à la date de l'arrêté de mise en demeure »
  - infos_complementaires (zones AFR) : https://cdi.eau-rhin-meuse.fr/GEIDEFile/Interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales_-_FICHE_THEMATIQUE.pdf?Archive=264992408217&File=interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales___FicHe_THeMaTiQue_pdf (2026-09-22) · « ZONES D'AIDES A FINALITE REGIONALE - AFR (C) : les AFR sont des aides qui contribuent au développement économique et social des régions européennes les plus désavantagées. Elles peuvent être octroyées par l'État ou les collectivités territoriales et leurs groupements [...] En France, les zones c non prédéfinies sont situées en métropole (Corse comprise). »
  - infos_complementaires (dépôt, contact) : https://www.eau-rhin-meuse.fr/nos-aides (2026-09-22) · « Les demandes d'aides sont à formuler sur la plateforme Rivage. La plateforme Rivage est accessible du lundi au samedi de 7h30 à 20h. [...] Les équipes de l'agence de l'eau Rhin-Meuse répondent aux sollicitations du lundi au vendredi de 9h à 12h et de 13h30 à 16h30 au numéro vert gratuit (0 800 710 325). »
  - taux (caractère adaptable du taux de référence) : https://cdi.eau-rhin-meuse.fr/GEIDEFile/Interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales_-_FICHE_THEMATIQUE.pdf?Archive=264992408217&File=interventions_en_matiere_d%E2%80%99actions_de_lutte_contre_les_pressions_generees_par_les_activites_economiques_industrielles_et_artisanales___FicHe_THeMaTiQue_pdf (2026-09-22) · « 5 - CONDITIONS D'APPRÉCIATION DES TAUX D'AIDE. L'Agence de l'eau est susceptible de proposer une adaptation de l'assiette ou/et du taux d'aide de référence affichés en fonction de l'impact ou de l'ambition du projet par rapport aux enjeux environnementaux. »

### AIDE_LAI_006 · Aide aux économies d'eau et à la réutilisation des eaux non conventionnelles pour les entreprises (agence de l'eau Seine-Normandie, programme Eau, climat et biodiversité 2025-2030)

subvention · secteurs ['industrie_laitiere'] · départements national · agences ['AESN'] · statut brouillon

Financeur : Agence de l'eau Seine-Normandie · Taux d'aide au maximum autorisé par l'encadrement européen, pour les économies d'eau comme pour les projets de réutilisation des eaux usées traitées et des eaux non conventionnelles. L'agence ne publie pas de pourcentage sur sa page destinée aux entreprises. · plafond ?

Volet économies d'eau du programme Eau, climat et biodiversité 2025-2030 de l'agence de l'eau Seine-Normandie, qui met l'accent sur les efforts de sobriété en eau pour contribuer à l'objectif de réduction de 10 % des prélèvements du bassin d'ici 2030. L'agence finance les études et les travaux permettant la réduction significative des prélèvements sur la ressource en eau ou l'amélioration significative du ratio de consommation d'eau par unité de production, ainsi que les études et travaux portant sur la modification des approvisionnements par une ressource de qualité moindre lorsque plusieurs acteurs sont concernés. Sur le volet réutilisation, elle finance les diagnostics, les études de faisabilité technico-économiques et les travaux de traitement, de stockage, de transfert et de distribution. Les eaux non conventionnelles retenues par l'agence incluent explicitement les eaux issues de la matière première, ce qui vise directement les condensats et perméats d'un site laitier.

Éligibilité : Entreprises et artisans du bassin Seine-Normandie. La réutilisation des eaux usées traitées doit constituer un moyen de substitution aux prélèvements dans le milieu naturel et être associée à des mesures visant à réduire la consommation d'eau : elle ne peut se concevoir que dans une démarche plus globale de sobriété.

- Mesures : ACT_AGR_002, ACT_LAI_003, ACT_LAI_004, ACT_LAI_006
- **avertissement** : Un projet de réutilisation présenté seul a peu de chances d'aboutir : l'agence pose comme condition que le recours aux eaux non conventionnelles ou aux eaux usées traitées ne saurait constituer la seule réponse au changement climatique et ne peut se concevoir que dans une démarche plus globale de sobriété, associée à des mesures de réduction de la consommation.
- **avertissement** : L'agence ne chiffre pas ses taux sur sa page entreprises : elle annonce le taux maximum autorisé par l'encadrement européen, qui dépend de la taille de l'entreprise et du régime d'aide d'État mobilisé. Le taux applicable à votre projet se confirme auprès de la direction territoriale avant tout montage financier.
- **info** : L'agence applique une date limite annuelle de dépôt pour garantir l'instruction dans l'année. Pour l'instruction 2026, le dossier complet devait être déposé sur Démarche Numérique avant le 30 septembre. Vérifiez la date de l'année en cours avant de caler votre calendrier de travaux.
- **info** : Le point d'entrée est la direction territoriale de l'agence pour votre secteur. Siège : 12 rue de l'Industrie, CS 80148, 92416 Courbevoie Cedex, téléphone 01 41 20 16 00.
- **ressource** : Les aides financières destinées aux entreprises, programme Eau, climat et biodiversité 2025-2030 (https://www.eau-seine-normandie.fr/entreprises/aides-financieres-du-programme-eau-climat-biodiversite)
- **ressource** : Formulaires de demande d'aide 2025-2030 de l'agence de l'eau Seine-Normandie (https://www.eau-seine-normandie.fr/formulaires_aides)
- Sources :
  - nom, description, taux, mesures : https://www.eau-seine-normandie.fr/entreprises/aides-financieres-du-programme-eau-climat-biodiversite (2026-09-22) · « Le 12e programme Eau, climat & biodiversité de l'agence de l'eau met l'accent sur les efforts de sobriété en eau. L'agence de l'eau encourage donc les entreprises à s'engager dans des démarches volontaires de réduction de leur consommation d'eau et favorise la réutilisation des eaux non conventionnelles et des eaux usées traitées (REUT). L'agence de l'eau finance : les études et les travaux permettant la réduction significative des prélèvements sur la ressource en eau ou l'amélioration significative du ratio de consommation d'eau par unité de production ; les études et les travaux portant sur la modification des approvisionnements par une ressource de qualité moindre lorsque plusieurs acteurs sont concernés (collectivité, industriel tiers, agriculteur). Taux d'aide au maximum autorisé par l'encadrement européen »
  - eligibilite, mesures (eaux issues de la matière première), infos_complementaires : https://www.eau-seine-normandie.fr/entreprises/aides-financieres-du-programme-eau-climat-biodiversite (2026-09-22) · « Le recours aux eaux non conventionnelles ou aux eaux usées traitées ne saurait constituer la seule réponse au changement climatique et ne peut se concevoir que dans une démarche plus globale de sobriété. Les eaux non conventionnelles incluent les eaux qui n'ont pas fait l'objet d'un traitement comme les eaux issues de la matière première, les eaux de pluie issues des toitures non accessibles, les eaux pluviales issues d'un ruissellement, les eaux d'exhaures... La réutilisation des eaux usées traitées (REUT) issues des stations d'épuration urbaines et de stations d'épuration industrielles [...] doit constituer un moyen de substitution aux prélèvements dans le milieu naturel, et associé à des mesures visant à réduire la consommation d'eau. L'agence de l'eau finance les diagnostics, les études de faisabilité qui prennent en compte les aspects technico-économiques [...] ainsi que les travaux à savoir le traitement, le stockage, le transfert et la distribution »
  - description (objectif du bassin), infos_complementaires (dépôt, contact) : https://www.eau-seine-normandie.fr/entreprises/aides-financieres-du-programme-eau-climat-biodiversite (2026-09-22) · « L'objectif est de réduire globalement de 10 % les prélèvements d'eau d'ici 2030, sur le bassin tous les secteurs confondus [...] Pour avoir l'assurance d'une instruction en 2026, vous devez déposer vos dossiers complets de demande d'aide sur Démarche Numérique avant le 30 septembre. [...] Prenez contact avec la direction de l'agence de l'eau de votre territoire [...] 01 41 20 16 00 [...] 12 rue de l'Industrie CS 80148 92416 Courbevoie Cedex »

### AIDE_LAI_007 · QUA_1, accélérer les économies d'eau et réduire les prélèvements (agence de l'eau Loire-Bretagne, 12e programme)

subvention · secteurs ['industrie_laitiere'] · départements national · agences ['AELB'] · statut brouillon

Financeur : Agence de l'eau Loire-Bretagne · Subvention, à des taux maximaux qui peuvent être limités par l'encadrement européen des aides publiques en tenant compte des zones d'aide à finalité régionale. Jusqu'à 70 % pour les études et travaux de réduction des besoins en eau. Jusqu'à 50 % pour les études et travaux de réduction des prélèvements existants, branche qui porte le recyclage d'eau de process, la réutilisation des eaux usées traitées et la récupération d'eau de pluie. Les études préalables aux travaux sont des dépenses éligibles de ces deux mêmes lignes de QUA_1 : elles ne relèvent pas du dispositif IND_1, qui porte à 50 % maximum sur les études de réduction des pollutions et des pressions, un autre sujet. · plafond Travaux d'utilisation ou de réutilisation d'eaux non conventionnelles : coût plafond de 60 € par m3 d'eau substituée annuellement. À compter du 1er janvier 2027, un coût plafond de 60 € par m3 d'eau économisée s'appliquera à toutes les décisions d'aide relatives à des travaux de réduction des besoins en eau pour les industries et les collectivités, sur les demandes déjà déposées comme sur celles à venir, seules les opérations programmées dans des accords de territoire signés en 2025 n'étant pas concernées.

Dispositif QUA_1 du 12e programme d'intervention 2025-2030 de l'agence de l'eau Loire-Bretagne, fiche action version 1 applicable au 1er janvier 2025. Il se décline en deux branches. La première, la réduction des besoins en eau, vise à abaisser la dépendance du site par un changement de process ou de pratiques et du matériel plus économe en eau. La seconde, la réduction des prélèvements existants, passe par la récupération d'eau de pluie, le recyclage d'eau de process et la réutilisation des eaux usées traitées, dans le cadre d'une approche globale d'économie d'eau. Les dépenses éligibles couvrent le coût des études préalables ou du diagnostic réalisés par un prestataire externe, le coût des études de réduction des prélèvements et des études préalables aux travaux, le coût des travaux avec la maîtrise d'oeuvre, l'assistance à maîtrise d'ouvrage et les équipements dédiés, y compris le matériel de comptage, ainsi que les travaux de traitement, d'équipement de suivi et de comptage et de stockage nécessaires à l'utilisation d'eaux non conventionnelles.

Éligibilité : Maîtres d'ouvrage publics ou privés, hors activité économique agricole et hors délégataire de service public. Les travaux doivent avoir fait l'objet d'une étude préalable ou d'un diagnostic faisant état d'une réflexion globale sur la réduction potentielle des besoins et des prélèvements en eau, détaillant l'objectif de réduction visé en volume et en ratio de consommation d'eau par tonne de produits finis, et doivent inclure les moyens de contrôle et de suivi des performances, notamment le comptage. Sont exclus les projets de création ou de transfert d'établissement et ceux portant sur des bâtiments neufs. La demande d'aide formelle et complète doit être déposée avant le démarrage du projet, faute de quoi elle est irrecevable.

- Mesures : ACT_AGR_001, ACT_AGR_002, ACT_LAI_003, ACT_LAI_004, ACT_LAI_006
- **avertissement** : La demande formelle et complète doit être déposée avant le démarrage du projet, sinon elle est irrecevable. Le démarrage s'entend du premier acte juridique qui rend la réalisation irréversible, c'est-à-dire la notification d'un marché ou d'un bon de commande. En revanche, les prestations nécessaires à la faisabilité du projet (études, marché de maîtrise d'oeuvre, sondages de sol, assistance à maîtrise d'ouvrage) ne constituent pas un démarrage.
- **avertissement** : Le taux dépend de la branche du dispositif : un projet de réutilisation, de recyclage d'eau de process ou de récupération d'eau de pluie relève de la réduction des prélèvements existants, plafonnée à 50 %, et non des 70 % de la réduction des besoins en eau. Ne bâtissez pas un prévisionnel de réutilisation à 70 %.
- **avertissement** : Le coût plafond de 60 € par m3 d'eau économisée, applicable au 1er janvier 2027, vise aussi les demandes déjà déposées : un dossier déposé en 2026 et décidé en 2027 y sera soumis.
- **avertissement** : En 2026, la capacité d'intervention de l'agence est annoncée insuffisante face aux demandes de financement. Le conseil d'administration du 12 mars 2026 a décidé de prioriser encore davantage ses interventions, ce qui se traduit par la mise en suspens de certains dispositifs d'aide ou l'application d'un plafond d'aide. Vérifiez l'état du dispositif avant de bâtir un plan de financement.
- **avertissement** : Les travaux ne sont pas aidés sans étude préalable ou diagnostic amont chiffrant l'objectif de réduction, en volume et en ratio de consommation d'eau par tonne de produits finis. Un an après la réception des travaux, un bilan global des réductions doit être fourni pour démontrer la conformité aux objectifs fixés.
- **avertissement** : Un projet de réutilisation des eaux usées traitées doit faire l'objet d'une étude d'impact environnemental démontrant l'impact positif sur les masses d'eau, en s'appuyant sur le guide de préconisations de l'agence. Le bilan à un an doit détailler les volumes réutilisés et leurs usages.
- **info** : Le comptage n'est pas un supplément facultatif : les travaux doivent inclure les moyens nécessaires au contrôle et au suivi des performances, et le matériel de comptage fait partie des dépenses éligibles. Pour la télérelève des plus gros consommateurs, la dépense retenue est le surcoût lié à l'enregistrement automatique et à la télétransmission, ou à défaut 50 % du coût du compteur intelligent.
- **info** : Les aides de l'agence n'ont pas un caractère systématique : leur attribution dépend des disponibilités financières et de la priorisation des projets, et l'accusé de réception du dépôt ne vaut pas engagement d'attribution. La priorité va aux projets les plus efficients, en euros par mètre cube d'eau économisée, et aux territoires classés en zone de répartition des eaux.
- **info** : Le dépôt s'effectue sur le téléservice Rivage, thématique « Lutte contre les pressions des activités économiques hors agriculture », dispositifs « Études » et « Travaux d'économie d'eau et de réduction des prélèvements ». L'agence recommande de prendre contact avec sa délégation territoriale avant de déposer.
- **ressource** : Fiche dispositif QUA_1, études et travaux de réduction des besoins en eau (jusqu'à 70 %) (https://aides-redevances.eau-loire-bretagne.fr/home/aides/fiches-dispositif-12e-programme/qua/qua1-etudes-et-travaux-de-reduction-des-besoins-en-eau.html)
- **ressource** : Fiche dispositif QUA_1, études et travaux de réduction des prélèvements existants (jusqu'à 50 %) (https://aides-redevances.eau-loire-bretagne.fr/home/aides/fiches-dispositif-12e-programme/qua/qua1-etudes-et-travaux-de-reduction-des-prelevements-existants.html)
- **ressource** : Fiche action QUA_1, accélérer les économies d'eau et réduire les prélèvements (version 1, applicable au 1er janvier 2025) (https://aides-redevances.eau-loire-bretagne.fr/files/live/sites/aides-redevances/files/Aides-12prog/Fiches-actions/QUA_1.pdf)
- **ressource** : Fiche dispositif IND_1, études de réduction des pollutions et des pressions (autre ligne d'aide, jusqu'à 50 %) (https://aides-redevances.eau-loire-bretagne.fr/home/aides/fiches-dispositif-12e-programme/ind/ind1-etudes-de-reduction-des-pollutions-et-des-pressions-et-etud.html)
- **ressource** : Aides, mode d'emploi : dépôt sur Rivage et contact avec la délégation territoriale (https://aides-redevances.eau-loire-bretagne.fr/home/aides/lessentiel-des-aides---12e-programme/aides-mode-demploi.html)
- Sources :
  - taux (réduction des besoins en eau), plafond, eligibilite, infos_complementaires (priorisation 2026, dépôt) : https://aides-redevances.eau-loire-bretagne.fr/home/aides/fiches-dispositif-12e-programme/qua/qua1-etudes-et-travaux-de-reduction-des-besoins-en-eau.html (2026-09-22) · « QUA_1 Études et travaux de réduction des besoins en eau. Taux d'aide 70 %. Le taux d'aide est un taux maximum. Il peut être limité par l'encadrement européen des aides publiques en tenant compte des zones d'aide à finalité régionales. Les aides de l'agence de l'eau n'ont pas un caractère systématique. Leur attribution est fonction d'une part des disponibilités financières de l'agence de l'eau et d'autre part de la priorisation des projets [...] En 2026, la capacité d'intervention de l'agence de l'eau est insuffisante pour faire face aux demandes inédites de financement. Le conseil d'administration du 12 mars 2026 a décidé de prioriser encore davantage ses interventions. Cela se traduit par l'adoption de mesures, dont la mise en suspens de certains dispositifs d'aide ou l'application d'un plafond d'aide [...] À compter du 1er janvier 2027, un coût plafond de 60 euros par m3 d'eau économisée sera appliqué à toutes les décisions d'aides prises sur les demandes déjà déposées et à venir relatives à des travaux de réduction des besoins en eau pour les industries et les collectivités. Seules les opérations programmées dans des accords de territoire signés en 2025 ne sont pas concernées. [...] Le dépôt s'effectue sur l'outil de téléservice « Rivage ». Thématique : Lutte contre les pressions des activités économiques hors agriculture (réduction des pollutions, économies d'eau et eaux pluviales). Dispositifs : Études ; Travaux d'économie d'eau et de réduction des prélèvements. »
  - taux (réduction des prélèvements existants) : https://aides-redevances.eau-loire-bretagne.fr/home/aides/fiches-dispositif-12e-programme/qua/qua1-etudes-et-travaux-de-reduction-des-prelevements-existants.html (2026-09-22) · « QUA_1 Études et travaux de réduction des prélèvements existants. L'objectif de ce dispositif est de promouvoir une démarche globale de sobriété hydrique, essentielle face à la diminution de la disponibilité en eau, en incitant tous les usagers à adopter des solutions durables et collectives. Taux d'aide 50 %. Le taux d'aide est un taux maximum. Il peut être limité par l'encadrement européen des aides publiques en tenant compte des zones d'aide à finalité régionales. »
  - description (deux branches), mesures, eligibilite (bénéficiaire) : https://aides-redevances.eau-loire-bretagne.fr/files/live/sites/aides-redevances/files/Aides-12prog/Fiches-actions/QUA_1.pdf (2026-09-22) · « QUA_1 - Accélérer les économies d'eau et réduire les prélèvements. Version n°1, applicable au 1er janvier 2025 (CA du 14 novembre 2024). Ce dispositif d'aide vise prioritairement à réduire les prélèvements : par des actions de réduction des besoins en eau afin d'abaisser sa dépendance et s'engager dans une démarche de sobriété hydrique (changement de process ou de pratiques, matériel plus économe en eau, toilettes sèches, etc.) ; par des actions de réduction des prélèvements existants via de la récupération d'eau de pluie, du recyclage d'eau de process, de la réutilisation des eaux usées traitées, etc. dans le cadre d'une approche globale d'économie d'eau. Les dispositifs aidés sont : Études et travaux de réduction des besoins en eau auprès des collectivités et des activités économiques ; Études et travaux de réduction des prélèvements existants auprès des collectivités et activités économiques ; Actions d'animation et communication [...] Bénéficiaire : Public ou privé hors activité économique agricole et hors délégataire de service public. »
  - description (dépenses éligibles dont études préalables), plafond (eaux non conventionnelles), mesures (comptage) : https://aides-redevances.eau-loire-bretagne.fr/files/live/sites/aides-redevances/files/Aides-12prog/Fiches-actions/QUA_1.pdf (2026-09-22) · « Études et travaux de réduction des besoins en eau auprès des collectivités et des activités économiques non agricoles : Coût des études préalables ou du diagnostic réalisés par un prestataire externe. Coûts des travaux ainsi que la maitrise d'oeuvre, l'assistance à maitrise d'ouvrage et les équipements dédiés à la réduction des besoins en eau y compris matériel de comptage. Études et travaux de réduction des prélèvements existants auprès des collectivités et activités économiques non agricoles : Coût des études de réduction des prélèvements et des études préalables aux travaux (études d'acceptabilité du milieu récepteur, études diagnostics, étude de faisabilité et d'aide à la décision, etc.) réalisées par un prestataire externe. Coût des travaux de traitement, d'équipement de suivi et comptage (hors main d'oeuvre interne), de stockage nécessaire à l'utilisation (ou la réutilisation) des eaux non conventionnelles (eau de pluie, eau de process, eaux usées traitées...) dans la limite d'un coût plafond de 60 €/m3 d'eau substituée annuellement. Coût de la mise en place de la télérelève de compteurs pour les plus gros consommateurs : s'il est nécessaire de changer le compteur, la dépense retenue porte sur le surcoût lié à l'enregistrement automatique et la télétransmission des consommations. À défaut de chiffrage de ce surcoût, 50% du coût du compteur intelligent est pris en compte. »
  - eligibilite, infos_complementaires (étude préalable, comptage, REUT, bilan à un an, priorisation) : https://aides-redevances.eau-loire-bretagne.fr/files/live/sites/aides-redevances/files/Aides-12prog/Fiches-actions/QUA_1.pdf (2026-09-22) · « Sont exclus les projets dans le cadre de la création ou d'un transfert d'établissement et dans les bâtiments neufs. [...] Les travaux doivent avoir fait l'objet d'une étude préalable ou d'un diagnostic faisant état d'une réflexion globale sur la réduction potentielle des besoins et des prélèvements en eau détaillant l'objectif de réduction en eau visé (en volume et en ratio de consommation d'eau par tonne de produits finis). Les travaux doivent inclure les moyens nécessaires au contrôle et au suivi des performances relatives à la réduction des prélèvements en eau et notamment le comptage. [...] Les projets de réutilisation des eaux usées traitées doivent faire l'objet d'une étude d'impact environnemental pour démontrer l'impact positif sur la (les) masse(s) d'eau. [...] La priorité est donnée aux projets les plus efficients (en euros par mètre cube d'eau économisée) et sur les territoires classés en zone de répartition des eaux (ZRE). [...] Pour tous les travaux : fourniture d'un bilan global des réductions des besoins ou des prélèvements en eau (en volume et en ratio de consommation d'eau) réalisé un an après la réception des travaux démontrant la conformité avec les objectifs fixés. Pour les projets de réutilisation des eaux usées traitées, ce bilan devra détailler les volumes d'eau réutilisés et les usages qui en sont faits. Pour les projets de réutilisation des eaux usées traitées, l'étude d'impact environnemental du projet doit s'appuyer sur le guide de préconisations de l'agence de l'eau. »
  - type, eligibilite (dépôt avant démarrage), infos_complementaires (premier acte juridique) : https://aides-redevances.eau-loire-bretagne.fr/files/live/mounts/midas/Aides/12e%20programme/R%c3%a8gles%20g%c3%a9n%c3%a9rales%20d%e2%80%99attri (2026-09-22) · « Règles générales d'attribution et de versement des aides du 12e programme d'intervention de l'agence de l'eau Loire-Bretagne. Délibération n° 2024-102 du 14 novembre 2024. Date d'effet : 1er janvier 2025. [...] L'agence de l'eau attribue des aides sous forme de subvention (par application de taux ou de forfait) ou d'avance remboursable. [...] La demande d'aide formelle et complète doit être déposée avant le démarrage du projet ; à défaut elle est irrecevable. Le premier acte juridique de démarrage du projet est celui qui rend irréversible sa réalisation (notification d'un marché ou d'un bon de commande, pour le cas général, l'attestation du bénéficiaire en cas de réalisation en régie). [...] Les prestations dont le bénéficiaire aurait besoin pour assurer la faisabilité du projet (acquisitions de terrains, études, marché de maîtrise d'oeuvre, sondage de sols, assistance à maitrise d'ouvrage [...]) ne constituent pas un démarrage du projet. [...] En aucun cas, l'accusé de réception du dépôt de la demande d'aide ne vaut engagement d'attribution d'une aide de l'agence de l'eau. »
  - taux (dispositif IND_1, autre ligne d'aide) : https://aides-redevances.eau-loire-bretagne.fr/home/aides/fiches-dispositif-12e-programme/ind/ind1-etudes-de-reduction-des-pollutions-et-des-pressions-et-etud.html (2026-09-22) · « IND_1 Études de réduction des pollutions et des pressions et études préalables aux travaux. Taux d'aide 50 %. Le taux d'aide est un taux maximum, il peut être limité par l'encadrement européen des aides publiques. Votre demande d'aide financière doit être déposée avant tout engagement juridique ou début d'exécution. »
  - infos_complementaires (dépôt sur Rivage, contact délégation) : https://aides-redevances.eau-loire-bretagne.fr/home/aides/lessentiel-des-aides---12e-programme/aides-mode-demploi.html (2026-09-22) · « Avant de déposer une demande d'aide, prenez contact avec votre délégation ! Avec ces cinq délégations territoriales, l'agence de l'eau se tient aux côtés des acteurs locaux sur l'ensemble du bassin Loire-Bretagne. [...] À partir du 10 janvier 2025, le dépôt des demandes d'aide s'effectue sur « Rivage » le nouvel outil de téléservice. »

### AIDE_LAI_008 · Économiser et recycler l'eau des activités industrielles et de l'artisanat (agence de l'eau Adour-Garonne, programme Eau 2025-2030)

subvention · secteurs ['industrie_laitiere'] · départements national · agences ['AEAG'] · statut brouillon

Financeur : Agence de l'eau Adour-Garonne · Subvention, de 30 % à 80 % selon la nature de l'opération et le statut du bénéficiaire, fourchette annoncée sur le portail public Aides-territoires. Une avance récupérable est également mobilisable. Le détail des taux par type d'opération n'est pas confirmable en ligne et doit être demandé à l'agence. · plafond ?

Dispositif du programme Eau 2025-2030 de l'agence de l'eau Adour-Garonne, rattaché à la ligne « Lutte contre les pressions des activités économiques hors agriculture (réduction des pollutions, économies d'eau et eaux pluviales) ». L'agence encourage les entreprises à économiser l'eau, à développer des solutions de recyclage dans leurs activités et à installer des systèmes en circuit fermé pour limiter les prélèvements. Elle soutient les études de connaissance des enjeux quantitatifs des prélèvements intégrant les impacts du changement climatique, et finance les projets de réutilisation des eaux non conventionnelles comme les eaux usées traitées ou les eaux de pluie. Les projets types cités sont les démarches prospectives et diagnostics et les études avant travaux, les travaux d'efficience et d'économie d'eau (mise en circuit fermé, collecte et recyclage des eaux pluviales) et les travaux de transfert de prélèvements vers des ressources moins sensibles.

Éligibilité : Personnes publiques ou privées exerçant une activité économique à caractère industriel, commercial et artisanal ou en lien avec de telles activités, hors secteur agricole et élevage sauf aquaculture. Les projets doivent permettre une économie de prélèvement d'eau d'au moins 10 % du volume total annuel moyen prélevé dès lors que celui-ci est supérieur à 5 000 m3, ou une économie supérieure à 500 000 m3.

- Mesures : ACT_AGR_002, ACT_LAI_003, ACT_LAI_004, ACT_LAI_006
- **avertissement** : Les taux détaillés par type d'opération sont à confirmer auprès de l'agence avant tout montage financier. Le site de l'agence, eau-grandsudouest.fr, présente une chaîne de certificat incomplète et n'est pas consultable de façon fiable selon les navigateurs : seule la fourchette de 30 % à 80 % publiée sur le portail public Aides-territoires a pu être vérifiée.
- **avertissement** : Le seuil d'accès écarte les petits ateliers : le projet doit économiser au moins 10 % du volume annuel moyen prélevé, et encore faut-il que ce volume dépasse 5 000 m3 par an. En dessous, aucune économie ne rend le dossier éligible à ce dispositif.
- **info** : Le chargé d'intervention industries de l'agence pour l'agroalimentaire est Marc Pinel, 05 61 36 82 19, marc.pinel@eau-adour-garonne.fr. C'est le bon interlocuteur pour faire préciser les taux et l'éligibilité d'un site laitier.
- **info** : Le dispositif est ouvert du 1er janvier 2025 au 31 décembre 2030 et la demande se dépose sur la plateforme Rivage de l'agence.
- **ressource** : Fiche du dispositif sur le portail public Aides-territoires (ANCT) (https://aides-territoires.beta.gouv.fr/aides/collecter-et-traiter-les-eaux-usees-et-les-eaux-pluviales-2/)
- **ressource** : Plateforme de dépôt des demandes d'aide Rivage de l'agence de l'eau Adour-Garonne (https://rivage.eau-adour-garonne.fr/appli/)
- Sources :
  - nom, description, mesures : https://aides-territoires.beta.gouv.fr/aides/collecter-et-traiter-les-eaux-usees-et-les-eaux-pluviales-2/ (2026-09-22) · « Economiser et recycler l'eau des activités industrielles et de l'artisanat. Nom initial de l'aide : « Lutte contre les pressions des activités économiques hors agriculture (réduction des pollutions, économies d'eau et eaux pluviales) ». L'Agence de l'eau encourage les entreprises à économiser l'eau, à développer des solutions de recyclage dans leurs activités et à installer des systèmes en circuit fermé pour limiter les prélèvements en eau. [...] Elle soutient également des études de connaissance des enjeux quantitatifs des prélèvements intégrant les impacts du changement climatique sur la ressource en eau. Enfin, l'Agence finance des projets de réutilisation des eaux non conventionnelles comme les eaux usées traitées, eaux de pluie ou eaux de piscine. [...] Exemples de projets réalisables : Démarches prospectives et diagnostics, études avant travaux ; Travaux d'efficience et économie d'eau (mise en circuit fermé, collecte et recyclage des eaux pluviales...) ; Travaux de transfert de prélèvements vers des ressources moins sensibles »
  - eligibilite, infos_complementaires (seuils) : https://aides-territoires.beta.gouv.fr/aides/collecter-et-traiter-les-eaux-usees-et-les-eaux-pluviales-2/ (2026-09-22) · « Les bénéficiaires sont des personnes publiques ou privées exerçant une activité économique à caractère industriel, commercial et artisanal ou en lien avec de telles activités (hors secteur agricole et élevage sauf aquaculture). Les projets devront permettre une économie de prélèvement d'eau d'au moins 10% du volume total annuel moyen prélevé dès lors que celui-ci est supérieur à 5 000 m3 ou une économie supérieure à 500 000 m3. »
  - taux, type, dates du dispositif : https://aides-territoires.beta.gouv.fr/aides/collecter-et-traiter-les-eaux-usees-et-les-eaux-pluviales-2/ (2026-09-22) · « Porteur d'aide : Agence de l'eau Adour-Garonne. Subvention (min : 30% - max : 80%). Avance récupérable. Calendrier : Du 1 janvier 2025 au 31 décembre 2030. Zone géographique couverte par l'aide : Adour-Garonne. Dernière mise à jour : 3 septembre 2026. »
  - infos_complementaires (contact, dépôt) : https://aides-territoires.beta.gouv.fr/aides/collecter-et-traiter-les-eaux-usees-et-les-eaux-pluviales-2/ (2026-09-22) · « Secteurs d'activités : Agro-Alimentaires / Golf / Activités commerciales : Marc PINEL - Chargé d'intervention industries Tel direct : 05 61 36 82 19 - marc.pinel@eau-adour-garonne.fr. Candidater : https://rivage.eau-adour-garonne.fr/appli/ »

### AIDE_LAI_009 · ECO3, sobriété en eau des activités industrielles et économiques (agence de l'eau Rhône Méditerranée Corse, 12e programme)

subvention · secteurs ['industrie_laitiere'] · départements national · agences ['AERMC'] · statut brouillon

Financeur : Agence de l'eau Rhône Méditerranée Corse · Subvention, à des taux maximaux. En cadre individuel, jusqu'à 40 % pour les études comme pour les travaux d'économie d'eau portant sur plus de 2 000 m3 par an, et jusqu'à 50 % pour la recherche, le développement et l'innovation sur des dispositifs d'économies d'eau. Ces deux taux sont majorés en fonction de la taille de l'entreprise : +10 % pour les moyennes entreprises, +20 % pour les petites entreprises. · plafond Pour les travaux, l'assiette est plafonnée à 40 € par m3 économisé par an.

Fiche aide ECO3 du 12e programme de l'agence de l'eau Rhône Méditerranée Corse, version 1 adoptée par le conseil d'administration du 19 décembre 2024 (délibération 2024-38). Elle finance les études, état des lieux et diagnostics sur site des consommations d'eau et études préalables aux travaux, les actions de réduction des pertes en eau (réduction des fuites sur les réseaux, gestion de la pression), la mise en oeuvre de technologies économes en eau (changement de process, recyclage, régulation, modernisation des réseaux et des équipements, dispositifs de pilotage, télégestion et sectorisation incluant des dispositifs hydro-économes et des compteurs), la mise en oeuvre de technologie pour traiter l'eau usée en vue d'une réutilisation, d'un recyclage ou d'un réemploi sur le site industriel en lien avec des économies d'eau, les dispositifs de récupération des eaux pluviales, ainsi que les projets de recherche, de développement ou d'innovation portant sur des dispositifs d'économie d'eau.

Éligibilité : Acteurs économiques non agricoles (industries, sociétés, entreprises, coopératives) et organismes de recherche, sur tous les territoires des bassins Rhône-Méditerranée et de Corse. Les opérations doivent se traduire par une diminution effective des prélèvements dans le milieu au point de prélèvement ou sur le réseau d'eau potable. En cadre individuel, l'économie visée doit dépasser 2 000 m3 par an ; en deçà, le projet n'est aidé que dans le cadre de démarches collectives de branche ou de filière, via un appel à projets. La demande d'aide doit être formellement transmise à l'agence avant l'engagement du projet, sous peine de rejet.

- Mesures : ACT_AGR_002, ACT_LAI_003, ACT_LAI_004, ACT_LAI_006
- **avertissement** : Sous 2 000 m3 d'économie par an, un atelier sort du guichet individuel : les actions d'économie d'eau inférieures à ce seuil ne sont aidées que dans le cadre de démarches collectives de branche ou de filière, via un appel à projets. Pour une petite fromagerie, la voie d'accès passe donc par une opération portée par la filière ou le territoire.
- **avertissement** : Poser des compteurs divisionnaires n'est pas finançable en tant que tel sur ce bassin : les dispositifs de comptage seuls, sans lien avec un projet d'étude ou de travaux, figurent parmi les dépenses non éligibles. Les compteurs ne sont pris en charge que comme composante d'un projet plus large de pilotage, de télégestion ou de sectorisation. À l'inverse, l'aide aux travaux est conditionnée à l'existence d'un comptage des prélèvements, ou au dépôt simultané d'une demande d'aide pour l'installer, afin de démontrer à terme l'atteinte de l'objectif d'économie annoncé.
- **avertissement** : La demande d'aide doit être formellement transmise à l'agence avant l'engagement du projet. Le non-respect de cette disposition entraîne le rejet de la demande, sauf accord écrit préalable de l'agence pour engager les travaux, opération inscrite au plan d'action d'un contrat signé avec l'agence, ou actions préalables nécessaires à la préparation du dossier ou à la définition des travaux.
- **avertissement** : Le renouvellement des ouvrages à l'identique n'est pas éligible. L'opération doit se traduire par une diminution effective des prélèvements au point de prélèvement ou sur le réseau d'eau potable.
- **info** : La fiche ECO3 écrit la majoration de taille sous la forme « +10 % » et « +20 % » sans préciser s'il s'agit de points de taux ou d'une majoration proportionnelle. Faites confirmer le calcul par l'agence avant d'arrêter un prévisionnel.
- **info** : Le taux de 50 % pour la recherche et le développement suppose un lien avec des industriels des bassins Rhône-Méditerranée et Corse. Si le projet est porté par le fournisseur de la solution, l'aide est conditionnée à une participation financière de ces industriels d'au moins 10 % du montant global du projet. S'il est porté par un organisme de recherche, elle est conditionnée à l'association d'un ou plusieurs industriels des bassins.
- **info** : Quatre types d'opérations relèvent d'autres fiches aides que ECO3 et ne sont pas couverts ici : les actions d'économie d'eau en cadre groupé dans le cadre d'un appel à projets, les projets de substitution, la réutilisation des eaux usées traitées lorsqu'elle profite à des acteurs extérieurs au site, et les têtes de réseau.
- **info** : Les aides sont attribuées sous forme de subventions. Une partie ou la totalité peut être convertie en avance remboursable à la demande du bénéficiaire, mais ces avances ne sont accordées qu'aux personnes morales de droit public : une entreprise privée n'y a pas accès.
- **info** : Au solde de l'aide, l'agence demande la publicité de son soutien pour tout projet, et la fourniture du rapport d'étude pour les études.
- **ressource** : Fiche aide ECO3, sobriété en eau des activités industrielles et économiques (délibération 2024-38) (https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/eco3-sobriete-industriels.pdf)
- **ressource** : Conditions générales d'attribution et de versement des aides du 12e programme (délibération 2024-77) (https://www.eaurmc.fr/upload/docs/application/pdf/2025-02/conditions-generales.pdf)
- **ressource** : Les aides du 12e programme de l'agence de l'eau Rhône Méditerranée Corse (https://www.eaurmc.fr/jcms/pro_127118/fr/les-aides-du-12e-programme)
- Sources :
  - nom, taux, plafond, eligibilite : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/eco3-sobriete-industriels.pdf (2026-09-22) · « ECO3 - Sobriété en eau des activités industrielles et économiques. Version 1 adoptée par le conseil d'administration du 19 décembre 2024, Délibération 2024-38. TYPES D'ACTIONS / TAUX MAXIMUM. Dans un cadre individuel : études et travaux d'économie d'eau supérieure à 2 000 m3/an : 40 % *. Recherche, développement, innovation pour des dispositifs d'économies d'eau : 50 % *. * Majoration en fonction de la taille de l'entreprise : +10 % pour les moyennes entreprises, +20% pour les petites entreprises. [...] Bénéficiaires éligibles : Acteurs économiques non agricoles (industries, sociétés, entreprises, coopératives...) ; Organismes de recherche. Territoires éligibles : Tous les territoires des bassins Rhône Méditerranée et de Corse. [...] Pour les travaux, l'assiette est plafonnée à hauteur de 40 €/m3 économisé/an. »
  - description, mesures : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/eco3-sobriete-industriels.pdf (2026-09-22) · « Actions et dépenses éligibles : Études : état des lieux et diagnostics sur site des consommations d'eau, études préalables aux travaux. Actions de réduction des pertes en eau : réduction des fuites sur les réseaux, gestion de la pression. Mise en oeuvre de technologies économes en eau : changement de process, recyclage, régulation, modernisation des réseaux et des équipements, dispositifs de pilotage, télégestion et sectorisation incluant des dispositifs hydro-économes et des compteurs. Mise en oeuvre de technologie pour traiter l'eau usée pour une réutilisation, recyclage, réemploi sur le site industriel en lien avec des économies d'eau. Dispositifs de récupération des eaux pluviales. Projets de recherche, développement ou innovation pour des dispositifs d'économie d'eau. »
  - eligibilite, infos_complementaires (comptage non éligible seul, seuil, renouvellement) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/eco3-sobriete-industriels.pdf (2026-09-22) · « Actions et dépenses non éligibles : Dispositifs de comptage seuls (sans lien avec un projet d'étude ou de travaux) ; Renouvellement des ouvrages à l'identique. Conditions d'aides : Les opérations d'économies d'eau doivent se traduire par une diminution effective des prélèvements dans le milieu au point de prélèvement ou sur le réseau d'eau potable. Pour les travaux, les aides sont conditionnées à l'existence de dispositifs de comptage des prélèvements ou à la présentation simultanée d'une demande d'aide pour l'installation d'un tel dispositif, permettant de démontrer à terme l'atteinte de l'objectif d'économie annoncé. Les actions d'économie d'eau inférieures à 2 000 m3/an sont aidées uniquement dans le cadre de démarches collectives de branche ou de filière, via un appel à projets. »
  - infos_complementaires (conditions R&D, autres fiches aides, conditions de solde) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/eco3-sobriete-industriels.pdf (2026-09-22) · « Les projets R&D doivent être en lien avec des industriels situés sur les bassins Rhône Méditerranée et Corse : En cas de portage du projet par le fournisseur de la solution, l'aide est conditionnée à une participation financière des industriels des bassins Rhône Méditerranée et Corse impliqués dans l'étude, et ce à hauteur minimale de 10% du montant global du projet ; En cas de portage du projet par un organisme de recherche, l'aide est conditionnée à l'association d'un ou plusieurs industriels situés sur les bassins Rhône Méditerranée et Corse. [...] Types d'actions relevant d'autres fiches aides : Actions d'économie d'eau dans un cadre groupé, dans le cadre d'un appel à projets : se référer à la fiche relative aux opérations sectorielles ; Projets de substitution ; Réutilisation des eaux usées traitées (dans le cas de réutilisation par des acteurs extérieurs au site) ; Têtes de réseau : se référer à la fiche relative à la gouvernance locale de l'eau et aux têtes de réseau. [...] Conditions de solde de l'aide. Pour tout projet : Publicité des aides de l'agence [...] Pour les études : Fourniture du rapport d'étude. »
  - type, eligibilite (dépôt avant engagement), infos_complementaires (avances remboursables) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-02/conditions-generales.pdf (2026-09-22) · « Conditions générales d'attribution et de versement des aides. Version 1 adoptée par le conseil d'administration du 19 décembre 2024, Délibération 2024-77. Les aides sont attribuées sous forme de subventions, soit proportionnelles à l'assiette retenue pour le projet, soit forfaitaires pour les interventions prévues sous cette forme. La totalité ou une partie de l'aide prévue sous forme de subvention peut être convertie en avance remboursable à la demande du bénéficiaire. [...] Une demande d'aide doit être formellement transmise à l'agence avant l'engagement du projet considéré. Le non-respect de cette disposition entraîne le rejet de la demande d'aide, sauf dans les cas suivants : accord écrit préalable de l'agence pour engager les travaux avant le dépôt formel de la demande ; opérations inscrites dans le plan d'action d'un contrat signé avec l'agence [...] ; actions préalables, nécessaires à la préparation du dossier de demande d'aide, ou à la définition des travaux pour les aides relatives à des travaux [...] Les avances remboursables sont accordées uniquement aux personnes morales de droit public. »
  - description (programme en vigueur) : https://www.eaurmc.fr/jcms/pro_127118/fr/les-aides-du-12e-programme (2026-09-22) · « Les aides du 12e programme. Le programme d'action Sauvons l'eau ! s'étale sur 6 ans, avec 50 % des aides du programme consacrées à l'adaptation des territoires face aux effets du changement climatique. »

