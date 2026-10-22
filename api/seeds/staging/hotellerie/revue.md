# Revue du référentiel : Hôtellerie

Document assemblé automatiquement depuis le staging. Tout est en statut brouillon tant que la promotion n'a pas eu lieu.

## Périmètre

- Secteur : `hotellerie` (Hôtellerie)
- Codes NAF (1) : 55.10Z

## Profil eau du secteur

# Profil eau du secteur : hôtellerie

Note de profil, étape 2 du skill `nouveau-secteur`. Statut : brouillon, à valider par un consultant.
Date de rédaction : 2026-09-24.

| Champ | Valeur |
|---|---|
| `sector_id` | `hotellerie` |
| Libellé | Hôtellerie |
| Préfixe des mesures | `HOT` (`ACT_HOT_001` et suivants) |
| Codes NAF | 55.10Z seul (36 797 établissements, dont 16 135 employeurs) |

Cette note prolonge `00_perimetre.md` et ne la contredit pas. Elle couvre l'hôtel urbain sans
restaurant comme l'hôtel de station avec piscine, spa et jardin, et les villages de vacances avec
service de chambre quotidien, en signalant ce qui change d'un profil à l'autre.

Avertissement de méthode : la seule quantification nationale récente est l'étude de la Direction
générale des Entreprises (DGE) de 2024 sur l'eau dans le tourisme. Les ratios par poste viennent
d'un guide d'EPTB, des critères de l'Écolabel européen et de textes réglementaires. Les valeurs que
ces sources ne donnent pas sont au conditionnel avec la mention « à confirmer ».

## 1. Usages de l'eau, du plus gros au plus petit

**Ordre de grandeur global.** Un hôtel prélève 240 litres par personne et par nuitée en 1 à
3 étoiles et 323 litres en 4 et 5 étoiles, et les hôtels représentent 56 millions de m3 par an, soit
28,4 % des prélèvements de l'hébergement touristique
[DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf).
Exprimé par chambre louée et par jour, l'écart par gamme est plus marqué : 150 à 200 litres en
1 et 2 étoiles, 300 à 350 litres en 3 étoiles, 500 à 600 litres en 4 étoiles, selon les équipements
présents (restaurant, bar, blanchisserie, piscine, spa)
[SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf).
La filière le résume elle-même : plus l'établissement monte en gamme, plus ses prélèvements
augmentent, du fait des services associés
[DGE, 2025](https://www.entreprises.gouv.fr/files/files/presse/2025/410%20-%20DP%20-%20Plan%20eau%20-%20Engagement%20du%20secteur%20du%20tourisme%20pour%20pr%C3%A9server%20l%E2%80%99eau.pdf).

**1. Les chambres : douches, WC, lavabos.** C'est le premier poste : les consommations des chambres
représentent en moyenne 80 % de la consommation totale d'un hôtel, les toilettes constituant le
deuxième poste des chambres [SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf).
Une pomme de douche classique débite 15 à 20 litres par minute, une ancienne chasse à simple
commande environ 10 litres (même source). Le bain pèse lourd là où il est proposé : une douche rapide
consomme 35 à 60 litres, un bain au moins 150 litres
[Eaufrance, 2023](https://www.services.eaufrance.fr/economie-d-eau).

**2. Le nettoyage des chambres et des sanitaires.** L'étude DGE attribue environ 40 à 45 % de l'eau
des hôtels au nettoyage des chambres et des sanitaires
[DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf).
Ce découpage ne se superpose pas à celui du SMEGREG (qui compte tout ce qui se passe dans la
chambre) : les deux chiffres ne s'additionnent pas, ils disent la même chose, à savoir que la chambre
et son entretien quotidien font l'essentiel du volume.

**3. Le linge.** Draps et serviettes sont lavés sur place ou confiés à une blanchisserie. Dans ce
second cas, l'eau quitte le compteur de l'hôtel mais pas le bilan : une laveuse-essoreuse consomme
25 à 30 litres par kg de linge, un tunnel de lavage de blanchisserie industrielle peut descendre sous
8 litres par kg [Agence de l'eau Seine-Normandie, 2004](https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/03-Blanchisserie/bibliographie/Livret_Blanchisseries%20AE%20seine%20normandie.pdf).
La part du linge dans la consommation d'un hôtel n'a pas été trouvée dans une source publique
(à confirmer).

**4. La restauration.** Un couvert de restauration traditionnelle représente 46,9 litres d'eau,
contre 8,2 litres en restauration rapide
[DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf).
Ce ratio porte sur la restauration en général, pas sur le restaurant d'hôtel en particulier.

**5. La piscine et le spa.** Quand ils existent, ils changent l'ordre de grandeur : un village de
vacances ou une résidence avec espace aquatique prélève 439 litres par nuitée (même source). Dans un
espace aquatique, le lavage des filtres pèse 40 à 50 % de l'eau, les douches et sanitaires 18 à 35 %,
le renouvellement des bassins 17 à 20 %, l'évaporation et les éclaboussures 8 à 10 %, le nettoyage
et l'arrosage 3 à 6 % ; un remplissage de piscine individuelle représente 50 à 80 m3 (même source).

**6. Les espaces verts.** Aucune donnée propre à l'hôtellerie n'a été trouvée. À titre d'ordre de
grandeur, l'étude DGE retient jusqu'à 3 m3 par m2 arrosé et par an pour les jardins des sites
culturels (même source), valeur à ne pas transposer telle quelle à un jardin d'hôtel (à confirmer).

**7. La climatisation par tour aéroréfrigérante**, sur les établissements qui en sont équipés, et
les fuites, poste diffus mais réel sur un parc de centaines de points d'eau : un robinet qui fuit peut
gaspiller jusqu'à 120 litres par jour, une chasse défectueuse 600 litres
[Eaufrance, 2023](https://www.services.eaufrance.fr/economie-d-eau). Le volume d'appoint des tours
en hôtellerie n'a pas été chiffré (à confirmer).

## 2. Sources d'approvisionnement

Le réseau public d'eau potable serait la source quasi exclusive des hôtels, pour une raison
simple : l'essentiel des usages (douche, lavabo, cuisine) exige une eau destinée à la consommation
humaine (à confirmer, aucune statistique publique de répartition par source n'a été trouvée pour ce
secteur). Le réseau lui-même peut reposer sur une ressource fragile : en Gironde, 97 % de l'eau
potable est prélevée dans des nappes souterraines profondes qui se renouvellent lentement
[SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf).
Un puits ou un forage reste envisageable pour l'arrosage, mais ces travaux sont soumis à
réglementation (même source).

Les eaux non conventionnelles restent marginales et ponctuelles : un 5 étoiles breton arrose son parc
à l'eau de pluie et réemploie l'eau de lavage ou de cuisson pour les sols et les aromatiques
[DGE, 2025](https://www.entreprises.gouv.fr/files/files/presse/2025/410%20-%20DP%20-%20Plan%20eau%20-%20Engagement%20du%20secteur%20du%20tourisme%20pour%20pr%C3%A9server%20l%E2%80%99eau.pdf).
Quand le linge est externalisé, l'hôtel dépend aussi de la ressource de son blanchisseur, qui peut
être différente : dans le bassin Seine-Normandie, les blanchisseries industrielles s'alimentaient à
55 % par forage, 42 % par le réseau public et 3 % en eau de surface
[Agence de l'eau Seine-Normandie, 2004](https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/03-Blanchisserie/bibliographie/Livret_Blanchisseries%20AE%20seine%20normandie.pdf).

## 3. Dépendances critiques

**La chambre ne se vend pas sans eau.** Douche et WC sont le produit lui-même : une coupure du réseau
ne réduit pas l'activité, elle l'arrête (à confirmer par un retour d'expérience documenté). En
revanche, un arrêté sécheresse ne touche pas ce cœur d'usage : l'alimentation en eau potable pour la
santé et la salubrité n'est pas limitée, sauf arrêté municipal spécifique
[Préfecture des Yvelines, 2026](https://regleau.s3.gra.perf.cloud.ovh.net/arrete-restriction/37738/9a93b3d7-d15c-456a-9c1b-d083f21f2b18/SE_ACA_VRAA_AP_78-2026-08-14-00001_20260811_AP_%20ALERTE_RENF_A_V_V3.pdf).

**Ce qu'un arrêté sécheresse arrête vraiment.** Ce sont les services annexes, ceux qui font la
gamme. Dans l'arrêté des Yvelines d'août 2026, pris comme exemple (chaque département a son
arrêté-cadre), les mesures qui touchent un hôtel sont les suivantes (même source) :

- arrosage des pelouses, massifs et espaces verts interdit de 11 h à 18 h en alerte, puis interdit
  en alerte renforcée et en crise, sauf arbres et arbustes plantés depuis moins de deux ans ;
- remplissage des piscines à usage collectif autorisé en alerte, interdit en alerte renforcée sauf
  remise à niveau, premier remplissage ou raison sanitaire, interdit en crise sauf remise à niveau ou
  raison sanitaire ;
- nettoyage des terrasses et surfaces imperméabilisées interdit dès l'alerte, sauf par une entreprise
  de nettoyage professionnel ;
- fontaines d'ornement en circuit ouvert interdites dès l'alerte.

La piscine d'hôtel relève bien de cette catégorie « à usage collectif » : piscine publique ou privée,
ouverte à un groupe défini de personnes, non destinée à un usage familial (même source).

**La saisonnalité fait coïncider le pic et la pénurie.** Dans les zones touristiques, la demande en
eau peut doubler en période estivale, au moment même où la ressource est la plus fragile
[DGE, 2025](https://www.entreprises.gouv.fr/files/files/presse/2025/410%20-%20DP%20-%20Plan%20eau%20-%20Engagement%20du%20secteur%20du%20tourisme%20pour%20pr%C3%A9server%20l%E2%80%99eau.pdf).
Le Morbihan l'a vécu : sécheresses et difficultés du réseau d'eau potable en période estivale et
d'étiage, avec conflits d'usages entre tourisme et agroalimentaire
[CCI Morbihan, 2022](https://www.club-ecodeau.fr/wp-content/uploads/2022/11/CCI-Morbihan.pdf).
En montagne, deuxième et troisième départements du secteur, le décalage est inverse mais tout aussi
serré : la demande des stations s'accroît en hiver, quand les cours d'eau sont à l'étiage
[SDES, 2019](https://www.statistiques.developpement-durable.gouv.fr/leau-dans-les-stations-de-ski-une-ressource-sous-pression).

**Une coupure prolongée a un coût sanitaire.** Après une coupure d'eau de plus d'une semaine ou des
travaux, tout le réseau d'eau chaude doit être purgé
[ARS Île-de-France, 2024](https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf).

## 4. Risques et contraintes réglementaires

**Légionelles dans l'eau chaude sanitaire : la contrainte qui borne les leviers.** Les hôtels et
résidences de tourisme sont explicitement visés par la surveillance des légionelles
[arrêté du 1er février 2010, Légifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021795143).
En pratique, il faut relever chaque mois une température d'au moins 55 °C en sortie de production et
50 °C en retour de boucle, analyser chaque année les légionelles (moins de 1 000 UFC par litre aux
points d'usage à risque), tenir un carnet sanitaire, détartrer mousseurs et douchettes au moins tous
les six mois, et faire couler l'eau chaque semaine dans les chambres inoccupées
[ARS Île-de-France, 2024](https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf).
Trois conséquences pour le plan d'action :

1. On n'abaisse pas la température de l'eau chaude pour économiser, et les purges des chambres vides
   sont une consommation incompressible.
2. Un mousseur ou une douchette économe n'est acceptable que s'il entre dans le programme de
   détartrage et de désinfection.
3. Supprimer les points d'eau et bras morts peu utilisés sert les deux objectifs à la fois : l'ARS le
   recommande (même source), l'étude DGE aussi pour économiser l'eau
   [DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf).

Le contrôle n'est pas théorique : sur les hébergements touristiques inspectés en Île-de-France en
2023 et 2024, la quasi-totalité ont reçu des injonctions ou des prescriptions
[ARS Île-de-France, 2024](https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf).

**Piscines : un renouvellement d'eau imposé.** Depuis le 1er janvier 2022, une piscine d'hôtel doit
renouveler chaque jour d'ouverture au moins 30 litres d'eau non recyclée par baigneur, enregistrer
ces renouvellements sur un compteur dédié, vidanger complètement les bassins au moins une fois par
an et tenir un carnet sanitaire [UMIH du Gers, 2021](https://umih32.fr/circulaire/75-21-eaux-de-piscine-modification-de-la-reglementation/),
[arrêté du 26 mai 2021, Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043535330).
Le levier ne porte donc pas sur ce renouvellement, mais sur l'évaporation et surtout le lavage des
filtres, premier poste de l'espace aquatique.

**Tours aéroréfrigérantes.** Les installations de refroidissement évaporatif relèvent de la rubrique
ICPE 2921 : enregistrement à partir de 3 000 kW de puissance thermique évacuée, déclaration avec
contrôle en dessous [AIDA, Ineris](https://aida.ineris.fr/reglementation/2921-refroidissement-evaporatif-dispersion-deau-flux-dair-genere-ventilation).
Ce serait souvent le seul point par lequel un hôtel entre dans le régime ICPE (à confirmer).

**Eaux non conventionnelles dans le bâtiment : un cadre récent.** Depuis le 1er septembre 2024, le
décret du 12 juillet 2024 et son arrêté remplacent l'arrêté du 21 août 2008 sur l'eau de pluie
[ARS Centre-Val de Loire](https://www.centre-val-de-loire.ars.sante.fr/usage-domestique-deaux-impropres-la-consommation-humaine),
[décret n° 2024-796, Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049962670).
Les eaux brutes, dont l'eau de pluie, peuvent servir au lavage des sols intérieurs et du linge, aux
chasses d'eau, au nettoyage extérieur et à l'arrosage ; les eaux grises et les eaux de piscine sont
limitées aux chasses d'eau, au nettoyage extérieur, aux fontaines non potables et à l'arrosage ;
l'installation relève d'une simple déclaration au préfet, certains usages d'eaux brutes en étant
même dispensés
[Plateforme des bonnes pratiques pour l'eau du grand Sud-Ouest, 2024](https://bonnespratiques-eau.fr/2024/07/18/textes-du-12-juillet-2024-relatifs-utilisations-deaux-impropres-a-la-consommation-humaine/).
Les établissements sensibles (écoles, établissements de santé, maisons de retraite) ont un régime
plus strict [ARS Centre-Val de Loire](https://www.centre-val-de-loire.ars.sante.fr/usage-domestique-deaux-impropres-la-consommation-humaine) ;
la liste citée par l'ARS ne mentionne pas les hôtels, mais leur statut d'établissement recevant du
public mériterait une lecture ligne à ligne du décret avant tout projet (à confirmer). Pour les
usages non domestiques de l'eau de pluie, le décret n° 2023-835 les ouvre sans procédure
d'autorisation [Légifrance, 2023](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048007367).

**Rejets.** Les eaux usées d'un hôtel sont assimilées à des usages domestiques : l'hôtellerie figure
dans la liste réglementaire de ces activités
[arrêté du 21 décembre 2007, annexe I, Légifrance](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000020125683).
Le linge externalisé déplace la charge polluante chez le blanchisseur, dont les effluents sont
chauds, basiques et chargés en phosphore
[Agence de l'eau Seine-Normandie, 2004](https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/03-Blanchisserie/bibliographie/Livret_Blanchisseries%20AE%20seine%20normandie.pdf).

**Labels, qui ne sont pas des obligations mais fixent les références.** L'Écolabel européen
hébergement touristique impose un débit moyen des robinets et douches de salle de bains d'au plus
8,5 litres par minute, des chasses d'eau effectives d'au plus 4,5 litres pour toute installation
nouvelle, l'absence de chasse continue dans les urinoirs, un changement des draps et serviettes moins
fréquent que quotidien et un suivi de la consommation d'eau par nuitée ; ses critères optionnels
visent 7 litres par minute pour les douches et 6 pour les robinets, le sous-comptage, la couverture
des piscines et l'eau de pluie ou les eaux grises
[Commission européenne, JRC, 2023](https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf).
La Clef Verte, développée en France par Teragir, comporte aussi un volet eau
[La Clef Verte](https://www.laclefverte.org/le-label/les-criteres-du-label-clef-verte) ; ses seuils
n'ont pas été vérifiés dans la grille 2026 (à confirmer). La filière, enfin, s'est engagée en 2023 à
réduire de 10 % sa consommation d'eau d'ici 2030
[UMIH, 2023](https://www.umih.fr/medias/contributions/plan-de-sobriete-eau-charte-dengagements.html).

## 5. Leviers connus, par catégorie du plan d'action

Quinze leviers au total. Quatre mesures transversales existantes seront réutilisées telles quelles
et ne sont pas reprises ici : compteur par usage (`ACT_AGR_001`), audit eau (`ACT_AGR_002`), plan de
gestion de l'eau et anticipation des restrictions (`ACT_AGR_009`), démarche collective
(`ACT_AGR_010`). Les leviers marqués « fusionnable » sont les premiers candidats au regroupement.

Un repère global pour calibrer l'ambition : le programme ECOD'O de la CCI du Morbihan a fait
économiser à 27 entreprises industrielles et touristiques près de 10 % de leur consommation en un an,
quatorze d'entre elles améliorant leur indicateur (m3 par tonne, litres par nuitée), et le Belambra
de Guidel y a combiné suivi régulier des consommations et équipements hydro-économes
[CCI Morbihan, 2022](https://www.club-ecodeau.fr/wp-content/uploads/2022/11/CCI-Morbihan.pdf).
Le guide du SMEGREG affiche un objectif de 30 % par l'addition des gestes, du matériel et de la
sensibilisation [SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf).

### Sensibiliser et former (`sensibiliser_former`)

**L1. Former le personnel d'étage et de maintenance au repérage des fuites.** Former quelques
personnes (employés de chambres, techniciens, jardiniers, cuisiniers) aux vérifications du réseau et
des équipements, avec contrôles réguliers et comptes rendus
[SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf).
Le personnel d'étage passe chaque jour dans chaque salle de bains ; or une chasse défectueuse peut
perdre 600 litres par jour [Eaufrance, 2023](https://www.services.eaufrance.fr/economie-d-eau).
Concerne tous les hôtels, y compris les plus petits. Titre proposé : « Former le personnel d'étage
au repérage et au signalement des fuites ».

**L2. Informer les clients des gestes économes et de la politique de linge.** Affichage en chambre,
charte, message de réception. C'est déjà une pratique répandue : 94 % des hôtels interrogés disent
sensibiliser leur clientèle
[DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf),
ce qui en fait un faible discriminant. Effet en volume non chiffré (à confirmer). Fusionnable avec L9.
Titre proposé : « Informer les clients des gestes économes en chambre ».

### Suivre, comprendre et maîtriser ses consommations (`suivre_comprendre_maitriser`)

**L3. Suivre un ratio de litres par nuitée, par usage.** Relever le compteur chaque mois, installer
des compteurs divisionnaires, demander la télérelève au service d'eau
[SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf),
et exprimer le résultat en litres par nuitée, indicateur que l'Écolabel rend obligatoire
[Commission européenne, JRC, 2023](https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf).
Le ratio de référence (240 ou 323 litres selon la gamme) permet à l'hôtelier de se situer
[DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf).
Concerne tous les hôtels ; le sous-comptage (piscine, blanchisserie, cuisine, arrosage) vise ceux qui
ont ces postes. Fusionnable avec la transversale compteur par usage, dont il serait la déclinaison
sectorielle. Titre proposé : « Suivre la consommation d'eau par nuitée et par usage ».

**L4. Chasser les fuites et contrôler la robinetterie chaque année.** Identifier les points de fuite
possibles (vannes, raccords, robinets, douches, chasses, piscine) et faire un diagnostic annuel de la
robinetterie [SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf) ;
un robinet qui fuit peut perdre 120 litres par jour [Eaufrance, 2023](https://www.services.eaufrance.fr/economie-d-eau).
L'Écolabel impose une maintenance préventive annuelle des équipements d'eau avec registre des fuites
[Commission européenne, JRC, 2023](https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf).
L'entretien semestriel imposé par le risque légionelles offre le créneau
[ARS Île-de-France, 2024](https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf).
Fusionnable avec L1. Titre proposé : « Contrôler chaque année la robinetterie et les chasses d'eau ».

### Améliorer l'efficacité hydrique de ses équipements (`ameliorer_efficacite_hydrique`)

**L5. Équiper les chambres de douchettes et mousseurs économes, et réduire la pression.** Un mousseur
limite le robinet à 6 litres par minute au lieu de 12 ; une douchette économe descend à 8 à 10 litres
par minute contre 15 à 20, soit jusqu'à 50 % d'économie sans perte de confort, avec un retour sur
investissement de moins de six mois ; au-delà de 3 bars, un réducteur de pression fait économiser,
et à 6 bars il est indispensable [SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf).
Les mousseurs réduisent le débit de 30 à 50 % [Eaufrance, 2023](https://www.services.eaufrance.fr/economie-d-eau).
Le poste visé est le premier de l'hôtel. Limite : l'équipement doit être détartré et désinfecté au
moins tous les six mois [ARS Île-de-France, 2024](https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf).
Concerne tous les hôtels. Titre proposé : « Équiper les chambres de douchettes et mousseurs économes ».

**L6. Remplacer les chasses anciennes par des chasses à double commande.** Passer d'environ 10 litres
par chasse à un réservoir de 3 à 6 litres ou à double touche permet jusqu'à 50 % d'économie sur ce
poste [SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf).
Référence de l'Écolabel pour une installation neuve : 4,5 litres effectifs au plus
[Commission européenne, JRC, 2023](https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf).
Concerne les établissements au parc sanitaire ancien. Fusionnable avec L5. Titre proposé :
« Remplacer les chasses d'eau anciennes par des chasses à double commande ».

**L7. Choisir des lave-linge et lave-vaisselle économes, ou un blanchisseur équipé.** Au
renouvellement, un matériel économe peut faire gagner jusqu'à 50 % par rapport à un équipement
classique [SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf).
Repères pour les machines professionnelles : 7 litres par kg de linge au plus selon l'Écolabel
[Commission européenne, JRC, 2023](https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf),
contre 25 à 30 litres pour une laveuse-essoreuse classique
[Agence de l'eau Seine-Normandie, 2004](https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/03-Blanchisserie/bibliographie/Livret_Blanchisseries%20AE%20seine%20normandie.pdf).
Concerne les hôtels avec blanchisserie intégrée ou restaurant ; pour le linge externalisé, le
levier devient un critère d'achat du prestataire. Titre proposé : « Choisir des lave-linge et
lave-vaisselle professionnels économes en eau ».

**L8. Couvrir la piscine et optimiser le lavage des filtres.** Couvrir les bassins limite
l'évaporation [DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf),
qui pèse 8 à 10 % de l'eau d'un espace aquatique, quand le lavage des filtres en pèse 40 à 50 %
(même source). L'Écolabel demande de couvrir la nuit les bassins chauffés
[Commission européenne, JRC, 2023](https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf).
Le gain sur le lavage des filtres n'a pas été chiffré par une source publique (à confirmer), et le
renouvellement de 30 litres par baigneur reste dû. Concerne les hôtels avec piscine ou spa. Titre
proposé : « Couvrir la piscine et optimiser le lavage des filtres ».

### Changer ses process ou pratiques (`changer_process_pratiques`)

**L9. Changer draps et serviettes à la demande plutôt que chaque jour.** L'Écolabel en fait un
critère obligatoire : changement moins fréquent que quotidien, sauf demande du client ou obligation
[Commission européenne, JRC, 2023](https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf) ;
le SMEGREG propose de garder serviettes et draps une journée supplémentaire
[SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf).
Le levier agit sur le linge et sur le temps de ménage, donc aussi sur le poste nettoyage. Aucune
source publique ne chiffre le gain en eau (à confirmer). Concerne tous les hôtels ; en haut de gamme,
l'arbitrage avec la promesse client est à faire explicitement. Titre proposé : « Changer draps et
serviettes à la demande plutôt que chaque jour ».

**L10. Adapter les espaces verts au climat local et arroser au goutte-à-goutte.** Choisir les plantes
selon le climat plutôt que selon d'hypothétiques attentes des clients, arroser par tuyaux
microporeux [DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf),
planter des arbres d'ombrage [DGE, 2025](https://www.entreprises.gouv.fr/files/files/presse/2025/410%20-%20DP%20-%20Plan%20eau%20-%20Engagement%20du%20secteur%20du%20tourisme%20pour%20pr%C3%A9server%20l%E2%80%99eau.pdf).
L'intérêt tient surtout à la dépendance : l'arrosage des espaces verts est interdit dès l'alerte
renforcée [Préfecture des Yvelines, 2026](https://regleau.s3.gra.perf.cloud.ovh.net/arrete-restriction/37738/9a93b3d7-d15c-456a-9c1b-d083f21f2b18/SE_ACA_VRAA_AP_78-2026-08-14-00001_20260811_AP_%20ALERTE_RENF_A_V_V3.pdf),
et un jardin qui ne survit pas sans arrosage estival est un actif exposé au premier été sec.
Concerne les hôtels avec jardin et les villages de vacances. Titre proposé : « Adapter les espaces
verts au climat local et arroser au goutte-à-goutte ».

**L11. Supprimer les points d'eau peu utilisés et limiter les usages superflus.** Centraliser les
points d'eau, supprimer les points annexes, réduire l'usage des baignoires et des fontaines
[DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf) ;
l'ARS recommande de supprimer les bras morts
[ARS Île-de-France, 2024](https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf).
Concerne surtout les établissements anciens ou agrandis par étapes. Fusionnable avec L5. Titre
proposé : « Supprimer les points d'eau et bras morts peu utilisés ».

### Valoriser ou réutiliser les eaux non conventionnelles (`valoriser_reut_eaux_non_conventionnelles`)

**L12. Récupérer l'eau de pluie pour l'arrosage et les chasses d'eau.** Désormais possible pour
les chasses, le lavage des sols et du linge et l'arrosage, sur déclaration au préfet, voire sans
formalité pour certains usages
[Plateforme des bonnes pratiques pour l'eau du grand Sud-Ouest, 2024](https://bonnespratiques-eau.fr/2024/07/18/textes-du-12-juillet-2024-relatifs-utilisations-deaux-impropres-a-la-consommation-humaine/).
Un camping morbihannais combinant réducteur de pression et sanitaires alimentés à l'eau de pluie
économise environ 440 000 litres par an [CCI Morbihan, 2022](https://www.club-ecodeau.fr/wp-content/uploads/2022/11/CCI-Morbihan.pdf).
Réserve : pour les espaces verts seuls, l'intérêt global reste limité
[SMEGREG, 2019](https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf).
Concerne les établissements avec toiture exploitable et jardin ou réseau séparable. Ce levier doit
devenir la mesure transversale annoncée par la note de périmètre, et non une mesure `HOT`. Titre
proposé : « Récupérer l'eau de pluie pour l'arrosage et les chasses d'eau ».

**L13. Réutiliser l'eau de lavage des filtres de piscine.** Récupérer l'eau de lavage des filtres pour
traitement et réutilisation [DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf),
les eaux de piscine étant admises pour les chasses, le nettoyage extérieur et l'arrosage
[Plateforme des bonnes pratiques pour l'eau du grand Sud-Ouest, 2024](https://bonnespratiques-eau.fr/2024/07/18/textes-du-12-juillet-2024-relatifs-utilisations-deaux-impropres-a-la-consommation-humaine/).
Retour d'expérience en camping, faute d'exemple hôtelier documenté : le traitement des eaux de rinçage
des filtres fait économiser près de 60 m3 par jour sur la saison
[DGE, 2025](https://www.entreprises.gouv.fr/files/files/presse/2025/410%20-%20DP%20-%20Plan%20eau%20-%20Engagement%20du%20secteur%20du%20tourisme%20pour%20pr%C3%A9server%20l%E2%80%99eau.pdf).
La réutilisation des eaux grises des chambres suit le même régime mais reste au stade pilote (même
source, projet de la FNRT). Concerne les hôtels et villages de vacances avec piscine. Titre proposé :
« Réutiliser l'eau de lavage des filtres de piscine pour l'arrosage ».

### Agir sur ses rejets et la qualité de l'eau (`agir_rejets_qualite`)

**L14. Doser automatiquement lessives et désinfectants.** L'Écolabel valorise un dosage automatique
des détergents selon la dureté de l'eau et un dosage optimisé du chlore des piscines
[Commission européenne, JRC, 2023](https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf).
L'effet sur l'eau est indirect et non chiffré, et les rejets de l'hôtel sont assimilés domestiques
[arrêté du 21 décembre 2007, annexe I, Légifrance](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000020125683).
Non recommandé comme mesure : la catégorie peut rester vide, comme la note de périmètre l'avait
anticipé. Titre proposé si retenu : « Doser automatiquement lessives et produits de piscine ».

### Agir sur le grand cycle de l'eau (`agir_grand_cycle`)

**L15. Désimperméabiliser parkings et allées.** L'Écolabel valorise les surfaces non
imperméabilisées, l'imperméabilisation gênant l'infiltration de la pluie
[Commission européenne, JRC, 2023](https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf) ;
un hôtel breton a aménagé ses voiries en matériaux perméables
[DGE, 2025](https://www.entreprises.gouv.fr/files/files/presse/2025/410%20-%20DP%20-%20Plan%20eau%20-%20Engagement%20du%20secteur%20du%20tourisme%20pour%20pr%C3%A9server%20l%E2%80%99eau.pdf).
Effet non chiffré. La catégorie est déjà couverte par la transversale démarche collective, que le
plan de sobriété de la filière appuie : intégration des entreprises aux instances locales de gestion
de l'eau, référent eau (même source). Titre proposé si retenu : « Désimperméabiliser les parkings
et allées de l'établissement ».

## 6. Codes limites au sein du périmètre

Le périmètre ne compte qu'un code, 55.10Z, mais quatre profils s'y écartent assez pour peser sur le
questionnaire.

**Les villages de vacances avec service de chambre.** Ils sont dans 55.10Z mais ressemblent, par
l'eau, davantage à l'hôtellerie de plein air : 439 litres par nuitée avec espace aquatique, contre
240 à 323 pour un hôtel
[DGE, 2024](https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf),
restauration collective, grands espaces verts. Les leviers piscine (L8, L13) et espaces verts (L10)
y deviennent centraux, et les restrictions de remplissage et d'arrosage les touchent en premier.

**L'hôtel urbain sans restaurant ni piscine**, cas fréquent à Paris, premier département du secteur
(4 391 établissements). Ni piscine, ni jardin, linge souvent externalisé (à confirmer) : le profil se
réduit aux chambres, au nettoyage et au suivi. Le questionnaire doit offrir des options « sans objet »
sur la piscine, les espaces verts et la blanchisserie, et retirer les mesures correspondantes, faute
de quoi ce profil fera chuter son score sur des sujets qui ne le concernent pas.

**L'hôtel de station de montagne** (Savoie, Haute-Savoie). Sa tension est hivernale, pic de
fréquentation et étiage coïncidant en hiver
[SDES, 2019](https://www.statistiques.developpement-durable.gouv.fr/leau-dans-les-stations-de-ski-une-ressource-sous-pression),
alors que les arrêtés sécheresse sont surtout estivaux. Spa et piscine intérieure y seraient
fréquents (à confirmer). La question sur l'anticipation des restrictions doit pouvoir se lire en
saison d'hiver comme d'été.

**Les très petits hôtels.** Sur 36 797 établissements, 20 662 ne déclarent pas de salarié (d'après
les comptes de la note de périmètre). Pour eux, les leviers de gestes et de petit matériel (L1, L5,
L9) compteraient plus que le sous-comptage ou la réutilisation ; leurs effets relatifs n'ont pas été
chiffrés (à confirmer).

## 7. Sources

| Organisme | Titre | Année | URL |
|---|---|---|---|
| DGE, ministère de l'Économie | Gestion de l'eau dans le secteur du tourisme, analyse et synthèse | 2024 | https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf |
| Ministère chargé du Tourisme, DGE | Dossier de presse : Plan eau, engagement du secteur du tourisme pour préserver l'eau | 2025 | https://www.entreprises.gouv.fr/files/files/presse/2025/410%20-%20DP%20-%20Plan%20eau%20-%20Engagement%20du%20secteur%20du%20tourisme%20pour%20pr%C3%A9server%20l%E2%80%99eau.pdf |
| SMEGREG (EPTB Nappes profondes de Gironde), avec l'agence de l'eau Adour-Garonne | Guide pratique des économies d'eau, hôtels et résidences de tourisme | 2019 | https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf |
| CCI du Morbihan (fiche des Trophées FNCCR) | Programme ECOD'O | 2022 | https://www.club-ecodeau.fr/wp-content/uploads/2022/11/CCI-Morbihan.pdf |
| Commission européenne, JRC | User Manual: EU Ecolabel criteria for Tourist accommodation (décision 2017/175) | 2023 | https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf |
| Eaufrance, observatoire Sispea | Économie d'eau | 2023 | https://www.services.eaufrance.fr/economie-d-eau |
| ARS Île-de-France | Les légionelles, prévenir et maîtriser les risques, à destination des établissements touristiques | 2024 | https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf |
| Légifrance | Arrêté du 1er février 2010 relatif à la surveillance des légionelles dans les installations d'eau chaude sanitaire | 2010, modifié 2022 | https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021795143 |
| Légifrance | Arrêté du 26 mai 2021 modifiant l'arrêté du 7 avril 1981 relatif aux dispositions techniques applicables aux piscines | 2021 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043535330 |
| UMIH du Gers | Circulaire 75.21, eaux de piscine : modification de la réglementation | 2021 | https://umih32.fr/circulaire/75-21-eaux-de-piscine-modification-de-la-reglementation/ |
| Préfecture des Yvelines, DDT | Arrêté n° 78-2026-08-14-00001 de limitation provisoire des usages de l'eau | 2026 | https://regleau.s3.gra.perf.cloud.ovh.net/arrete-restriction/37738/9a93b3d7-d15c-456a-9c1b-d083f21f2b18/SE_ACA_VRAA_AP_78-2026-08-14-00001_20260811_AP_%20ALERTE_RENF_A_V_V3.pdf |
| SDES, ministère de la Transition écologique | L'eau dans les stations de ski : une ressource sous pression | 2019 | https://www.statistiques.developpement-durable.gouv.fr/leau-dans-les-stations-de-ski-une-ressource-sous-pression |
| Légifrance | Décret n° 2024-796 du 12 juillet 2024 relatif à des utilisations d'eaux impropres à la consommation humaine | 2024 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049962670 |
| ARS Centre-Val de Loire | Usage domestique d'eaux impropres à la consommation humaine | sans date | https://www.centre-val-de-loire.ars.sante.fr/usage-domestique-deaux-impropres-la-consommation-humaine |
| Plateforme des bonnes pratiques pour l'eau du grand Sud-Ouest (préfet de bassin Adour-Garonne, agences de l'eau, régions) | Textes du 12 juillet 2024 relatifs à des utilisations d'eaux impropres à la consommation humaine | 2024 | https://bonnespratiques-eau.fr/2024/07/18/textes-du-12-juillet-2024-relatifs-utilisations-deaux-impropres-a-la-consommation-humaine/ |
| Légifrance | Décret n° 2023-835 du 29 août 2023 relatif aux usages et conditions d'utilisation des eaux de pluie et des eaux usées traitées | 2023 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048007367 |
| AIDA, Ineris | Rubrique ICPE 2921, refroidissement évaporatif | en vigueur | https://aida.ineris.fr/reglementation/2921-refroidissement-evaporatif-dispersion-deau-flux-dair-genere-ventilation |
| Légifrance | Arrêté du 21 décembre 2007, annexe I (activités à usages de l'eau assimilables domestiques) | en vigueur | https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000020125683 |
| Agence de l'eau Seine-Normandie | L'eau et l'industrie, livret n° 1 : les blanchisseries industrielles du bassin Seine-Normandie | 2004 | https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/03-Blanchisserie/bibliographie/Livret_Blanchisseries%20AE%20seine%20normandie.pdf |
| UMIH | Plan de sobriété eau : charte d'engagements | 2023 | https://www.umih.fr/medias/contributions/plan-de-sobriete-eau-charte-dengagements.html |
| La Clef Verte (Teragir, FEE) | Les critères du label Clef Verte | 2026 | https://www.laclefverte.org/le-label/les-criteres-du-label-clef-verte |

Note sur les liens : le manuel JRC reprend le texte des critères de la décision (UE) 2017/175, dont
la version EUR-Lex (https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32017D0175) ne s'est
pas affichée lors de la vérification. Le guide du SMEGREG est daté d'août 2019 dans son colophon,
bien qu'hébergé dans un dossier 2023. Le livret de l'agence Seine-Normandie est ancien (2004) : ses
ratios par kg de linge décrivent le parc d'alors et servent d'ordre de grandeur. Le texte complet du
décret n° 2024-796 n'a pas été relu directement ; son contenu est rapporté d'après l'ARS
Centre-Val de Loire et la plateforme des services de l'État du bassin Adour-Garonne.

### Ce qui n'a pas pu être sourcé

Restent au conditionnel : la part des sources d'approvisionnement (réseau, forage) propre aux
hôtels ; la part du linge dans la consommation d'un hôtel et le gain en eau d'une politique de
changement du linge à la demande ; le gain chiffré d'une optimisation du lavage des filtres de
piscine ; la consommation d'arrosage d'un jardin d'hôtel ; le volume d'appoint des tours
aéroréfrigérantes en hôtellerie ; les seuils eau de la grille Clef Verte 2026. Un chiffre souvent
repris par la presse professionnelle (10 millions de m3 par an pour le linge hôtelier français) a
été écarté, faute d'origine autre qu'un cabinet de conseil. De même, le gain de 30 % attribué à
l'Écolabel dans certaines pages de l'ADEME n'a pas été retrouvé dans la publication ADEME d'origine.

## Questions

### 1. Quels usages de l'eau votre établissement a-t-il en plus des chambres ? (plusieurs réponses possibles)

`hot_q01` · multi_choice · Connaissance & mesure · classe `usage_eau`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Restaurant ou cuisine de production | `restaurant` | 0 | 0 |  |
| Blanchisserie sur place | `blanchisserie` | 0 | 0 |  |
| Piscine, spa ou bassin | `piscine` | 0 | 0 |  |
| Jardin ou espaces verts arrosés | `espaces_verts` | 0 | 0 |  |
| Aucun : uniquement des chambres | `chambres_seules` | 0 | 0 |  |

### 2. Comment suivez-vous aujourd'hui la consommation d'eau de votre établissement ?

`hot_q02` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Je m'en remets à la facture du service d'eau | `facture` | 0 | 0 | comptage |
| Je relève le compteur général de temps en temps | `releve_occasionnel` | 1 | 1 | comptage |
| Je relève chaque mois et suis un ratio par nuitée | `ratio_general` | 2 | 2 |  |
| Ratio par nuitée et sous-compteurs par usage | `sous_compteurs` | 3 | 3 |  |

### 3. Avez-vous fait réaliser un diagnostic eau (audit) de votre établissement ?

`hot_q03` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, jamais | `jamais` | 0 | 0 | audit |
| Non, mais nous l'envisageons | `envisage` | 0 | 2 | audit |
| Oui, il y a plus de cinq ans | `ancien` | 1 | 1 | audit |
| Oui, depuis moins de cinq ans, avec un plan d'actions | `recent` | 3 | 3 |  |

### 4. Quels équipements économes équipent les salles de bains de vos chambres ?

`hot_q04` · single_choice · Chambres & linge

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Robinetterie et chasses d'origine, sans équipement économe | `origine` | 0 | 0 | equipements |
| Quelques chambres équipées, ou seulement des mousseurs | `partiel` | 1 | 2 | equipements |
| Douchettes, mousseurs et chasses économes partout | `toutes_chambres` | 2 | 2 |  |
| Tout est équipé et les débits sont contrôlés chaque année | `toutes_controlees` | 3 | 3 |  |

### 5. Comment les fuites dans les chambres (chasse qui coule, robinet qui goutte) sont-elles repérées ?

`hot_q05` · single_choice · Chambres & linge

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Quand un client ou un employé s'en plaint | `signalement_client` | 0 | 0 | fuites |
| Le personnel d'étage a pour consigne orale de les signaler | `consigne_orale` | 1 | 1 | fuites |
| Fiche de signalement suivie, réparation rapide | `fiche_signalement` | 2 | 2 |  |
| Signalement suivi et contrôle annuel de la robinetterie | `controle_annuel` | 3 | 3 |  |

### 6. À quelle fréquence changez-vous draps et serviettes pendant un séjour ?

`hot_q06` · single_choice · Chambres & linge

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Chaque jour, pour tous les clients | `chaque_jour` | 0 | 0 | linge |
| Le client peut refuser, mais ce n'est pas toujours respecté | `refus_non_suivi` | 1 | 2 | linge |
| Seulement à la demande du client, consigne respectée | `a_la_demande` | 2 | 2 |  |
| À la demande, et nous suivons le linge lavé par nuitée | `a_la_demande_suivi` | 3 | 3 |  |

### 7. Comment choisissez-vous vos lave-linge et lave-vaisselle professionnels ?

`hot_q07` · single_choice · Chambres & linge

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Au prix ou à la marque, sans regarder l'eau consommée | `sans_critere_eau` | 0 | 0 | equipements |
| L'eau consommée par cycle ou par kilo est un critère d'achat | `critere_eau` | 2 | 2 |  |
| Critère d'achat, avec dosage automatique des lessives | `critere_et_dosage` | 3 | 3 |  |
| Pas de machine : linge et vaisselle confiés à l'extérieur | `sans_machine` | 2 | 2 |  |

### 8. Comment limitez-vous l'eau consommée par votre piscine ou votre spa ?

`hot_q08` · single_choice · Piscine & extérieurs

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Pas de mesure particulière, filtres lavés à heure fixe | `aucune_mesure` | 0 | 0 | piscine |
| Bassins couverts la nuit, filtres lavés à heure fixe | `couverture` | 1 | 1 | piscine |
| Couverture et lavage des filtres selon leur encrassement | `lavage_optimise` | 2 | 2 |  |
| Lavage optimisé et eau de lavage des filtres réutilisée | `recyclage` | 3 | 3 |  |
| Nous n'avons ni piscine ni spa | `sans_piscine` | 2 | 2 |  |

### 9. Comment entretenez-vous vos espaces verts ?

`hot_q09` · single_choice · Piscine & extérieurs

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Plantations classiques, arrosage au jet ou par aspersion | `arrosage_classique` | 0 | 0 | exterieurs |
| Plantes adaptées au climat et goutte-à-goutte | `jardin_sobre` | 2 | 2 |  |
| Plantes adaptées, goutte-à-goutte et eau de pluie récupérée | `jardin_sobre_pluie` | 3 | 3 |  |
| Nous n'avons pas d'espace vert arrosé | `sans_jardin` | 2 | 2 |  |

### 10. Savez-vous ce que vous devrez réduire ou arrêter en cas d'arrêté sécheresse ?

`hot_q10` · single_choice · Gouvernance & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Nous n'avons jamais regardé la question | `jamais_regarde` | 0 | 0 | anticipation |
| Nous suivons les alertes, sans rien avoir prévu | `informe` | 1 | 2 | anticipation |
| Des consignes existent pour chaque niveau d'alerte | `consignes` | 2 | 2 |  |
| Un plan écrit, connu des équipes, révisé chaque année | `plan_formalise` | 3 | 3 |  |

### 11. Participez-vous à une démarche collective sur l'eau dans votre territoire ?

`hot_q11` · single_choice · Gouvernance & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non | `non` | 0 | 0 |  |
| Nous en connaissons une, sans y participer | `informe` | 1 | 2 | collectif |
| Oui, nous y participons | `participe` | 2 | 2 |  |
| Oui, nous y tenons un rôle actif (animation, pilote) | `moteur` | 3 | 3 |  |

## Filtres du plan d'action

| Filtre | Règle | Type | Effet | Priorité | Mesures |
|---|---|---|---|---|---|
| `f_suivi_facture` | Consommation suivie à la facture ou par relevés occasionnels : suivre un ratio mensuel en litres par nuitée | answer | add | 1 | ACT_HOT_007 |
| `f_sans_sous_compteur` | Relevés occasionnels ou ratio mensuel sans sous-compteur : passer au comptage divisionnaire (eau chaude, piscine, cuisine, arrosage) | answer | add | 1 | ACT_AGR_001 |
| `f_chambres_seules` | Établissement sans aucun usage en dehors des chambres : pas de poste à isoler, retirer le compteur par usage | class | remove | 2 | ACT_AGR_001 |
| `f_pas_audit` | Pas d'audit, audit seulement envisagé ou de plus de cinq ans : recommander le diagnostic | answer | add | 1 | ACT_AGR_002 |
| `f_audit_inconnu` | Question de l'audit laissée sans réponse : ne pas savoir est le motif même de recommander le diagnostic | answer | add | 1 | ACT_AGR_002 |
| `f_sdb_non_equipees` | Salles de bains d'origine ou partiellement équipées : équiper toutes les chambres en hydro-économes | answer | add | 1 | ACT_HOT_001 |
| `f_fuites_subies` | Fuites connues seulement par plainte ou consigne orale : former l'étage et organiser le signalement | answer | add | 1 | ACT_HOT_002 |
| `f_linge_quotidien` | Linge changé chaque jour, ou choix du client mal respecté : passer au linge à la demande | answer | add | 1 | ACT_HOT_003 |
| `f_machines_sans_critere` | Machines choisies sans critère de consommation d'eau : en faire un critère au prochain renouvellement | answer | add | 1 | ACT_HOT_004 |
| `f_sans_machine` | Linge et vaisselle entièrement externalisés : pas de machine à choisir, retirer la mesure | answer | remove | 2 | ACT_HOT_004 |
| `f_piscine_non_optimisee` | Piscine sans mesure ou seulement couverte : optimiser et recycler le lavage des filtres | answer | add | 1 | ACT_HOT_005 |
| `f_sans_piscine` | Ni piscine ni spa : retirer la mesure piscine | answer | remove | 2 | ACT_HOT_005 |
| `f_arrosage_classique` | Plantations classiques arrosées au jet ou par aspersion : adapter le jardin au climat | answer | add | 1 | ACT_HOT_006 |
| `f_jardin_sans_pluie` | Jardin arrosé sans eau de pluie récupérée : proposer la récupération des eaux de toiture | answer | add | 1 | ACT_AGR_006 |
| `f_sans_jardin` | Pas d'espace vert arrosé : retirer le jardin sobre et l'eau de pluie, dont l'usage aux seules chasses d'eau suppose un double réseau rarement justifié | answer | remove | 2 | ACT_HOT_006, ACT_AGR_006 |
| `f_restrictions_non_anticipees` | Exposition aux arrêtés sécheresse jamais regardée, suivie sans rien prévoir, ou seulement des consignes : formaliser un plan de gestion écrit, pour toutes les saisons | answer | add | 1 | ACT_AGR_009 |
| `f_hors_collectif` | Une démarche collective de territoire est connue mais l'établissement n'y participe pas : proposer d'y entrer | answer | add | 1 | ACT_AGR_010 |

## Mesures

### ACT_AGR_001 · Installer un compteur divisionnaire par usage

*Compteur par usage* · suivre_comprendre_maitriser · secteurs tous · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "faible"} · statut publie

Poser des compteurs distincts sur les grands usages du site plutôt qu'un seul compteur général en entrée. Vous savez alors quel poste consomme quoi, vous repérez les dérives dès qu'elles apparaissent et vous détectez les fuites sans attendre la facture.

- **ressource** : Guide comptage ADEME (https://librairie.ademe.fr)

### ACT_AGR_002 · Réaliser un audit eau complet de votre site

*Audit eau* · suivre_comprendre_maitriser · secteurs tous · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut publie

Faire réaliser par un intervenant extérieur un diagnostic des usages, des volumes et des pertes, atelier par atelier. Vous en ressortez avec un plan d'action chiffré et hiérarchisé, souvent exigé pour accéder aux aides des agences de l'eau.

- **ressource** : Chambre d'agriculture : diagnostics eau (exploitations agricoles) (https://chambres-agriculture.fr)
- **ressource** : Aide FranceAgriMer (exploitations agricoles) (https://franceagrimer.fr)

### ACT_AGR_006 · Mettre en place un système de récupération des eaux pluviales

*Récupération d'eau de pluie* · valoriser_reut_eaux_non_conventionnelles · secteurs tous · impact 2 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "faible", "humain": "faible"} · statut publie

Récupérer les eaux de toiture dans une cuve pour les usages qui n'exigent pas d'eau potable : arrosage, chasses d'eau, nettoyage des sols et des extérieurs, et en exploitation agricole abreuvement ou irrigation d'appoint. Vous réduisez la part d'eau du réseau ou du forage et gardez une réserve utilisable pendant les restrictions.

- **ressource** : Aide équipement : Région / ADEME (https://ademe.fr)
- **avertissement** : Depuis le 1er septembre 2024, l'usage de l'eau de pluie dans un bâtiment (chasses, lavage des sols et du linge) relève d'une déclaration au préfet, certains usages en étant dispensés. (https://bonnespratiques-eau.fr/2024/07/18/textes-du-12-juillet-2024-relatifs-utilisations-deaux-impropres-a-la-consommation-humaine/)
- Sources :
  - infos_complementaires : https://bonnespratiques-eau.fr/2024/07/18/textes-du-12-juillet-2024-relatifs-utilisations-deaux-impropres-a-la-consommation-humaine/ (sans date) · « Eaux brutes, dont l'eau de pluie : lavage des sols et du linge, chasses d'eau, arrosage, sur déclaration. »

### ACT_AGR_009 · Formaliser un plan de gestion de l'eau et anticiper les restrictions

*Plan de gestion de l'eau* · sensibiliser_former · secteurs tous · impact 1 · facilité 2 · court_terme · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut publie

Élaborer un document interne qui cartographie les usages, les sources et les risques réglementaires (arrêtés sécheresse, zones de répartition des eaux), et qui définit pour chaque niveau d'alerte les actions de réduction à déclencher. Vous décidez à froid ce que vous réduirez, au lieu d'improviser le jour de la restriction.

- **ressource** : Outil ZRE : Agences de l'eau (https://eaufrance.fr)

### ACT_AGR_010 · Participer à une démarche collective de gestion de l'eau

*Démarche collective* · agir_grand_cycle · secteurs tous · impact 2 · facilité 2 · court_terme · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut publie

S'engager dans une démarche territoriale de partage de la ressource : projet de territoire pour la gestion de l'eau (PTGE), contrat de nappe, commission locale de l'eau d'un SAGE, association syndicale. Vous pesez sur les arbitrages locaux au lieu de les subir.

- **ressource** : PTGE : Ministère de la transition écologique (https://ecologie.gouv.fr)

### ACT_HOT_001 · Équiper les chambres de douchettes, mousseurs et chasses économes

*Équipements hydro-économes* · ameliorer_efficacite_hydrique · secteurs ['hotellerie'] · impact 3 · facilité 3 · immediat · effort {"capex": "moyen", "opex": "faible", "humain": "faible"} · statut brouillon

Poser des mousseurs et des douchettes à débit limité, remplacer les chasses anciennes par des chasses à double commande et supprimer les points d'eau peu utilisés. Vous réduisez le premier poste d'eau de l'hôtel, la salle de bains, sans perte de confort pour le client.

- **info** : Une douchette économe descend à 8 à 10 litres par minute contre 15 à 20 pour une pomme classique, avec un retour sur investissement de moins de six mois. Au-delà de 3 bars de pression, un réducteur fait aussi économiser. (https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf)
- **avertissement** : Mousseurs et douchettes doivent entrer dans le programme de prévention des légionelles : détartrage et désinfection au moins tous les six mois. On ne baisse jamais la température de l'eau chaude pour économiser. (https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf)
- **info** : Supprimer les bras morts et les points d'eau rarement utilisés sert deux fois : moins d'eau stagnante pour le risque légionelles, moins de purges à faire. (https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf)
- **ressource** : Critères de l'Écolabel européen hébergement touristique (débits et chasses de référence) (https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf)
- Sources :
  - description : https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf (sans date) · « Les consommations des chambres représentent en moyenne 80 % de la consommation totale d'un hôtel ; chasse à double commande jusqu'à 50 % d'économie. »
  - description : https://www.services.eaufrance.fr/economie-d-eau (sans date) · « Les mousseurs réduisent le débit de 30 à 50 %. »
  - infos_complementaires : https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf (sans date) · « Détartrer mousseurs et douchettes au moins tous les six mois ; supprimer les bras morts. »

### ACT_HOT_002 · Former le personnel d'étage et de maintenance au repérage des fuites

*Chasse aux fuites* · sensibiliser_former · secteurs ['hotellerie'] · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut brouillon

Apprendre aux équipes d'étage à repérer une chasse qui coule ou un robinet qui goutte, organiser le signalement à la maintenance et contrôler la robinetterie chaque année. Une fuite repérée le jour même au lieu du relevé trimestriel pèse vite sur un parc de dizaines de salles de bains.

- **info** : Une chasse défectueuse peut perdre 600 litres par jour, un robinet qui fuit jusqu'à 120 litres. (https://www.services.eaufrance.fr/economie-d-eau)
- **info** : L'entretien semestriel des douchettes imposé par la prévention des légionelles est le bon créneau pour le contrôle de la robinetterie. (https://www.iledefrance.ars.sante.fr/system/files/2024-05/Plaquette-l%C3%A9gionellose-destination-%C3%A9tablissements-touristiques-A5.pdf)
- **ressource** : Guide pratique des économies d'eau pour les hôtels (SMEGREG) (https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf)
- Sources :
  - description : https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf (sans date) · « Former quelques personnes (employés de chambres, techniciens) aux vérifications du réseau ; diagnostic annuel de la robinetterie. »
  - infos_complementaires : https://www.services.eaufrance.fr/economie-d-eau (sans date) · « Une chasse défectueuse peut gaspiller 600 litres par jour, un robinet qui fuit 120 litres. »

### ACT_HOT_003 · Changer draps et serviettes à la demande plutôt que chaque jour

*Linge à la demande* · changer_process_pratiques · secteurs ['hotellerie'] · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "faible"} · statut brouillon

Proposer au client de garder draps et serviettes plus d'une nuit, l'expliquer en chambre et à la réception, et former les équipes d'étage à respecter son choix. Vous réduisez à la fois le volume de linge lavé et le temps de ménage, que le linge soit lavé sur place ou chez un blanchisseur.

- **info** : Le changement moins fréquent que quotidien, sauf demande du client, est un critère obligatoire de l'Écolabel européen hébergement touristique. (https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf)
- **info** : 94 % des hôtels interrogés disent déjà sensibiliser leur clientèle : l'enjeu est moins l'affichage que le respect du choix du client par les équipes. (https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf)
- Sources :
  - description : https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf (sans date) · « Draps et serviettes changés moins souvent que chaque jour, sauf demande du client. »
  - description : https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf (sans date) · « Garder serviettes et draps une journée supplémentaire. »
  - infos_complementaires : https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf (sans date) · « 94 % des hôtels sensibilisent leur clientèle. »

### ACT_HOT_004 · Choisir des lave-linge et lave-vaisselle professionnels économes en eau

*Lavage économe* · ameliorer_efficacite_hydrique · secteurs ['hotellerie'] · impact 2 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "faible", "humain": "faible"} · statut brouillon

Au renouvellement, retenir des lave-linge et lave-vaisselle professionnels à faible consommation par kilo ou par cycle, avec dosage automatique des lessives. Pour un linge confié à un blanchisseur, faire de sa consommation d'eau un critère d'achat.

- **info** : Repère de l'Écolabel : 7 litres par kilo de linge au plus pour une machine professionnelle, contre 25 à 30 litres pour une laveuse-essoreuse classique. (https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf)
- **info** : Le dosage automatique des lessives selon la dureté de l'eau évite les surdosages qui imposent des rinçages supplémentaires et limite la charge des eaux usées. (https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf)
- Sources :
  - description : https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf (sans date) · « Un matériel économe peut faire gagner jusqu'à 50 % par rapport à un équipement classique. »
  - infos_complementaires : https://www.graie.org/graie/graiedoc/doc_telech/biblio_hors_graie/racc-biblio/cisalb2010fiches/03-Blanchisserie/bibliographie/Livret_Blanchisseries%20AE%20seine%20normandie.pdf (sans date) · « Une laveuse-essoreuse consomme 25 à 30 litres par kg de linge. »
  - infos_complementaires : https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf (sans date) · « 7 litres par kg de linge ; dosage automatique des détergents. »

### ACT_HOT_005 · Couvrir la piscine, optimiser et recycler l'eau de lavage des filtres

*Piscine économe* · ameliorer_efficacite_hydrique · secteurs ['hotellerie'] · impact 2 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "faible", "humain": "moyen"} · statut brouillon

Couvrir les bassins la nuit, déclencher le lavage des filtres sur mesure de colmatage plutôt qu'à heure fixe, doser le chlore automatiquement et réutiliser l'eau de lavage pour l'arrosage ou les chasses. Le lavage des filtres pèse 40 à 50 % de l'eau d'un espace aquatique : c'est lui qu'on vise.

- **avertissement** : Le renouvellement d'au moins 30 litres d'eau par baigneur et par jour, enregistré sur un compteur dédié, et la vidange annuelle restent obligatoires : le levier ne porte pas sur eux. (https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043535330)
- **info** : Les eaux de piscine peuvent servir aux chasses d'eau, au nettoyage extérieur et à l'arrosage, sur simple déclaration au préfet depuis les textes du 12 juillet 2024. (https://bonnespratiques-eau.fr/2024/07/18/textes-du-12-juillet-2024-relatifs-utilisations-deaux-impropres-a-la-consommation-humaine/)
- **retour_experience** : Dans un camping, le traitement et la réutilisation des eaux de rinçage des filtres fait économiser près de 60 m3 par jour pendant la saison. (https://www.entreprises.gouv.fr/files/files/presse/2025/410%20-%20DP%20-%20Plan%20eau%20-%20Engagement%20du%20secteur%20du%20tourisme%20pour%20pr%C3%A9server%20l%E2%80%99eau.pdf)
- **info** : Un arrêté sécheresse peut interdire le remplissage des piscines collectives dès l'alerte renforcée, sauf remise à niveau ou raison sanitaire. (https://regleau.s3.gra.perf.cloud.ovh.net/arrete-restriction/37738/9a93b3d7-d15c-456a-9c1b-d083f21f2b18/SE_ACA_VRAA_AP_78-2026-08-14-00001_20260811_AP_%20ALERTE_RENF_A_V_V3.pdf)
- Sources :
  - description : https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf (sans date) · « Lavage des filtres 40 à 50 % de l'eau d'un espace aquatique ; couvrir les bassins ; récupérer l'eau de lavage des filtres. »
  - description : https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf (sans date) · « Couvrir la nuit les bassins chauffés ; dosage optimisé du chlore. »
  - infos_complementaires : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043535330 (sans date) · « 30 litres par baigneur, compteur dédié, vidange annuelle. »

### ACT_HOT_006 · Adapter les espaces verts au climat local et arroser au goutte-à-goutte

*Espaces verts sobres* · changer_process_pratiques · secteurs ['hotellerie'] · impact 2 · facilité 2 · moyen_terme · effort {"capex": "moyen", "opex": "faible", "humain": "moyen"} · statut brouillon

Remplacer les plantations gourmandes par des essences adaptées au climat, passer l'arrosage au goutte-à-goutte ou au tuyau microporeux et planter des arbres d'ombrage. Le jardin reste présentable pendant les restrictions, qui interdisent l'arrosage des espaces verts dès l'alerte renforcée.

- **avertissement** : L'arrosage des pelouses et massifs est typiquement limité dès l'alerte puis interdit en alerte renforcée, hors arbres plantés depuis moins de deux ans. Chaque département a son arrêté-cadre. (https://regleau.s3.gra.perf.cloud.ovh.net/arrete-restriction/37738/9a93b3d7-d15c-456a-9c1b-d083f21f2b18/SE_ACA_VRAA_AP_78-2026-08-14-00001_20260811_AP_%20ALERTE_RENF_A_V_V3.pdf)
- **retour_experience** : Un hôtel 5 étoiles breton arrose son parc à l'eau de pluie et réemploie ses eaux de lavage pour les aromatiques. (https://www.entreprises.gouv.fr/files/files/presse/2025/410%20-%20DP%20-%20Plan%20eau%20-%20Engagement%20du%20secteur%20du%20tourisme%20pour%20pr%C3%A9server%20l%E2%80%99eau.pdf)
- Sources :
  - description : https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf (sans date) · « Choisir les plantes selon le climat ; arroser par tuyaux microporeux. »
  - description : https://www.entreprises.gouv.fr/files/files/presse/2025/410%20-%20DP%20-%20Plan%20eau%20-%20Engagement%20du%20secteur%20du%20tourisme%20pour%20pr%C3%A9server%20l%E2%80%99eau.pdf (sans date) · « Planter des arbres d'ombrage. »
  - infos_complementaires : https://regleau.s3.gra.perf.cloud.ovh.net/arrete-restriction/37738/9a93b3d7-d15c-456a-9c1b-d083f21f2b18/SE_ACA_VRAA_AP_78-2026-08-14-00001_20260811_AP_%20ALERTE_RENF_A_V_V3.pdf (sans date) · « Arrosage des espaces verts interdit en alerte renforcée et en crise. »

### ACT_HOT_007 · Suivre la consommation d'eau en litres par nuitée chaque mois

*Ratio litres par nuitée* · suivre_comprendre_maitriser · secteurs ['hotellerie'] · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "faible"} · statut brouillon

Relever le compteur chaque mois, rapporter le volume au nombre de nuitées et comparer le résultat aux repères de votre gamme. Vous voyez une dérive ou une fuite en quelques semaines et vous mesurez l'effet de chaque action engagée.

- **info** : Repères nationaux : 240 litres par nuitée en hôtel 1 à 3 étoiles, 323 litres en 4 et 5 étoiles, 439 litres en village de vacances avec espace aquatique. (https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf)
- **retour_experience** : Programme ECOD'O de la CCI du Morbihan : 27 entreprises industrielles et touristiques, dont un village de vacances, ont économisé près de 10 % de leur consommation en un an en suivant un indicateur comme les litres par nuitée. (https://www.club-ecodeau.fr/wp-content/uploads/2022/11/CCI-Morbihan.pdf)
- **info** : Le suivi de la consommation par nuitée est un critère obligatoire de l'Écolabel européen hébergement touristique. (https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2025-06/TAS_JRC133332_FINAL_0.pdf)
- Sources :
  - description : https://www.jeconomiseleau.org/wp-content/uploads/2023/03/Guide-Hotelier.pdf (sans date) · « Relever le compteur chaque mois, demander la télérelève. »
  - infos_complementaires : https://www.entreprises.gouv.fr/files/files/Publications/2024/Etudes/synthese-etude-gestion-eau.pdf (sans date) · « 240 litres par nuitée (1 à 3 étoiles), 323 litres (4 et 5 étoiles), 439 litres avec espace aquatique. »
  - infos_complementaires : https://www.club-ecodeau.fr/wp-content/uploads/2022/11/CCI-Morbihan.pdf (sans date) · « 27 entreprises, près de 10 % d'économie en un an. »

## Simulation

# Simulation du référentiel "Hôtellerie" (hotellerie)

Source : staging + publié · 11 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 7 personas

### Alertes (0)

Aucune.

### Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 1, médiane 5, max 10
- Plans vides : 0 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

### Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 79 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 70 % |
| ACT_HOT_003 | Linge à la demande | changer_process_pratiques | 48 % |
| ACT_HOT_002 | Chasse aux fuites | sensibiliser_former | 47 % |
| ACT_HOT_007 | Ratio litres par nuitée | suivre_comprendre_maitriser | 44 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 43 % |
| ACT_HOT_001 | Équipements hydro-économes | ameliorer_efficacite_hydrique | 41 % |
| ACT_HOT_005 | Piscine économe | ameliorer_efficacite_hydrique | 40 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 29 % |
| ACT_HOT_004 | Lavage économe | ameliorer_efficacite_hydrique | 25 % |
| ACT_HOT_006 | Espaces verts sobres | changer_process_pratiques | 22 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 22 % |

### Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 9 % | | faible | 4 % |
| intermediaire | 86 % | | moyen | 85 % |
| avance | 6 % | | eleve | 12 % |

### Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_facture | answer | add | 44 % |
| f_sans_sous_compteur | answer | add | 44 % |
| f_chambres_seules | class | remove | 36 % |
| f_pas_audit | answer | add | 67 % |
| f_audit_inconnu | answer | add | 12 % |
| f_sdb_non_equipees | answer | add | 41 % |
| f_fuites_subies | answer | add | 47 % |
| f_linge_quotidien | answer | add | 48 % |
| f_machines_sans_critere | answer | add | 25 % |
| f_sans_machine | answer | remove | 27 % |
| f_piscine_non_optimisee | answer | add | 40 % |
| f_sans_piscine | answer | remove | 18 % |
| f_arrosage_classique | answer | add | 22 % |
| f_jardin_sans_pluie | answer | add | 43 % |
| f_sans_jardin | answer | remove | 20 % |
| f_restrictions_non_anticipees | answer | add | 70 % |
| f_hors_collectif | answer | add | 22 % |

### Personas

### Hôtel indépendant 2 étoiles, rien de formalisé (hotel_novice)

Hôtel familial de 35 chambres en zone littorale, restaurant et petite blanchisserie sur place, jardin arrosé au jet l'été. Robinetterie d'origine, linge changé chaque jour, fuites découvertes par les clients, machines achetées au prix. Aucun suivi autre que la facture, jamais d'audit, restrictions jamais regardées, pas de piscine.

Maturité 6 % (novice) · concernement 6 % · axes : equipements, comptage, audit, fuites, linge, exterieurs, anticipation

- Équipements hydro-économes (ACT_HOT_001, immediat)
- Ratio litres par nuitée (ACT_HOT_007, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Chasse aux fuites (ACT_HOT_002, immediat)
- Linge à la demande (ACT_HOT_003, immediat)
- Lavage économe (ACT_HOT_004, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Espaces verts sobres (ACT_HOT_006, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Hôtel 4 étoiles équipé, en réflexion sur la suite (hotel_equipe)

Hôtel de 90 chambres avec piscine extérieure et restaurant. Toutes les salles de bains ont été équipées en hydro-économes lors de la rénovation, fiche de signalement des fuites suivie, linge à la demande, machines choisies sur leur consommation. Relevé mensuel avec ratio par nuitée mais sans sous-compteur, audit de plus de cinq ans, piscine couverte la nuit mais filtres lavés à heure fixe, jardin déjà en goutte-à-goutte. Suit les alertes sécheresse sans plan.

Maturité 48 % (intermediaire) · concernement 55 % · axes : audit, piscine, anticipation, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Piscine économe (ACT_HOT_005, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Hôtel urbain sans piscine, jardin ni machines (hotel_urbain_chambres_seules)

Hôtel de 50 chambres en centre-ville, petit-déjeuner livré en plateaux préparés à l'extérieur, linge entièrement confié à une blanchisserie. Ni piscine, ni spa, ni espace vert. Relève le compteur de temps en temps, quelques chambres équipées de mousseurs, consigne orale sur les fuites, linge changé chaque jour. Jamais d'audit, jamais regardé les restrictions.

Maturité 27 % (novice) · concernement 30 % · axes : comptage, audit, equipements, fuites, linge, anticipation

- Équipements hydro-économes (ACT_HOT_001, immediat)
- Ratio litres par nuitée (ACT_HOT_007, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Chasse aux fuites (ACT_HOT_002, immediat)
- Linge à la demande (ACT_HOT_003, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Hôtel écolabellisé, pratiques pilotées (hotel_avance)

Hôtel de 120 chambres titulaire de l'Écolabel européen, piscine et jardin. Sous-compteurs par usage et ratio par nuitée, audit récent, toutes les salles de bains équipées et contrôlées, linge à la demande suivi, machines économes avec dosage automatique, eau de lavage des filtres réutilisée, jardin sobre à l'eau de pluie, plan sécheresse écrit, pilote d'une démarche de territoire.

Maturité 91 % (avance) · concernement 91 % · axes : aucun

Plan vide.

### Réceptionniste qui répond pour la direction (hotel_ne_sait_pas)

Réceptionniste d'un hôtel de 40 chambres, qui remplit le questionnaire à la place de la direction. Sait seulement que la consommation est suivie à la facture et que l'hôtel n'a pas de piscine ; ne connaît ni l'équipement des chambres, ni les pratiques de linge, ni les démarches engagées.

Maturité 33 % (intermediaire) · concernement 33 % · axes : comptage

- Ratio litres par nuitée (ACT_HOT_007, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Village de vacances saisonnier avec espace aquatique (village_vacances)

Village de vacances de 150 logements avec service de chambre quotidien, ouvert d'avril à octobre en zone méditerranéenne. Espace aquatique sans mesure particulière, vastes espaces verts arrosés par aspersion, restauration collective et blanchisserie intégrées avec des machines renouvelées sur critère eau. Mousseurs dans une partie des logements, linge laissé au choix du client mais consigne mal suivie, relevés de compteur occasionnels, audit envisagé. Informé des arrêtés sécheresse, participe à une démarche de l'office de tourisme.

Maturité 27 % (novice) · concernement 42 % · axes : comptage, audit, equipements, fuites, linge, piscine, exterieurs, anticipation

- Équipements hydro-économes (ACT_HOT_001, immediat)
- Ratio litres par nuitée (ACT_HOT_007, immediat)
- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Chasse aux fuites (ACT_HOT_002, immediat)
- Linge à la demande (ACT_HOT_003, immediat)
- Piscine économe (ACT_HOT_005, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Espaces verts sobres (ACT_HOT_006, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Hôtel de station avec spa, tension hivernale (hotel_montagne_spa)

Hôtel 4 étoiles de 60 chambres en station de ski, ouvert l'hiver et l'été, spa avec bassin intérieur non couvert. Salles de bains toutes équipées, linge à la demande, fiche de signalement des fuites. Ratio mensuel sans sous-compteur, pas d'audit, pas de jardin arrosé. A des consignes pour les restrictions d'été mais rien pour l'étiage hivernal ; pas de démarche collective.

Maturité 42 % (intermediaire) · concernement 42 % · axes : audit, piscine

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Piscine économe (ACT_HOT_005, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

## Couverture par les solutions

# Couverture des mesures : hotellerie (seeds + staging)

12 mesures visibles · 2 sans prestataire · 8 sans aide · 2 sans rien

| Mesure | Catégorie | Prestataires liés | Aides liées |
|---|---|---|---|
| ACT_AGR_009 Plan de gestion de l'eau | Sensibiliser et former | aucun | aucune |
| ACT_HOT_002 Chasse aux fuites | Sensibiliser et former | FHOR [formation] | aucune |
| ACT_AGR_001 Compteur par usage | Suivre, comprendre et maîtriser ses consommations | Odalie (groupe Saur) [materiel] | Financement d'équipements pour des économies d'eau (Fonds mutualisé départemental de revitalisation de l'Oise, CCI Oise) |
| ACT_AGR_002 Audit eau | Suivre, comprendre et maîtriser ses consommations | EcoTechniques [conseil_etude], CCI de région Bretagne (programme ECODO PRO) [conseil_etude] | Financement d'équipements pour des économies d'eau (Fonds mutualisé départemental de revitalisation de l'Oise, CCI Oise), ECODO PRO, accompagnement subventionné aux économies d'eau (CCI de Bretagne), Ressourc'Eau, programme de gestion durable de l'eau (CCI Pays de la Loire et agence de l'eau Loire-Bretagne), Diag Eco-Flux, diagnostic des flux énergie, eau, matières et déchets (ADEME et Bpifrance) |
| ACT_HOT_007 Ratio litres par nuitée | Suivre, comprendre et maîtriser ses consommations | FairMoove Solutions (ex-Betterfly Tourism) [conseil_etude], Osmozis [materiel], Odalie (groupe Saur) [materiel] | aucune |
| ACT_HOT_001 Équipements hydro-économes | Améliorer l'efficacité hydrique de ses équipements | EcoTechniques [conseil_etude+travaux+materiel], Delabie [materiel], Les Robinets Presto [materiel] | Soutien à l'hébergement touristique (Région Sud), CAP Tourisme, aide aux projets d'hébergements touristiques (Région Centre-Val de Loire), Pays de la Loire AGIR Tourisme (Région Pays de la Loire), Financement d'équipements pour des économies d'eau (Fonds mutualisé départemental de revitalisation de l'Oise, CCI Oise) |
| ACT_HOT_004 Lavage économe | Améliorer l'efficacité hydrique de ses équipements | Danube International (Onnera Laundry France) [materiel], Winterhalter France [materiel] | aucune |
| ACT_HOT_005 Piscine économe | Améliorer l'efficacité hydrique de ses équipements | Syclope Electronique [materiel], Ocene (Ocène Industrie) [materiel] | aucune |
| ACT_HOT_003 Linge à la demande | Changer ses process ou pratiques | Hôtel Vert [conseil_etude] | aucune |
| ACT_HOT_006 Espaces verts sobres | Changer ses process ou pratiques | idverde [conseil_etude+travaux], Sénariz [travaux] | aucune |
| ACT_AGR_006 Récupération d'eau de pluie | Valoriser ou réutiliser les eaux non conventionnelles | EcoRecup (récupération eaux pluviales) [conseil_etude+travaux], idverde [conseil_etude+travaux] | Prêt Vert BPI : Transition écologique, Soutien à l'hébergement touristique (Région Sud), Pass Transformation Écologique (Région Occitanie), Financement d'équipements pour des économies d'eau (Fonds mutualisé départemental de revitalisation de l'Oise, CCI Oise) |
| ACT_AGR_010 Démarche collective | Agir sur le grand cycle de l'eau | aucun | aucune |

### Fiches à rédiger

- prestataire pour ACT_AGR_009 (Plan de gestion de l'eau, Sensibiliser et former)
- prestataire pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)
- aide pour ACT_AGR_009 (Plan de gestion de l'eau, Sensibiliser et former)
- aide pour ACT_HOT_002 (Chasse aux fuites, Sensibiliser et former)
- aide pour ACT_HOT_007 (Ratio litres par nuitée, Suivre, comprendre et maîtriser ses consommations)
- aide pour ACT_HOT_004 (Lavage économe, Améliorer l'efficacité hydrique de ses équipements)
- aide pour ACT_HOT_005 (Piscine économe, Améliorer l'efficacité hydrique de ses équipements)
- aide pour ACT_HOT_003 (Linge à la demande, Changer ses process ou pratiques)
- aide pour ACT_HOT_006 (Espaces verts sobres, Changer ses process ou pratiques)
- aide pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)

### Fiches sans lien vers une mesure du secteur (visibles seulement par repli de catégorie)

- aide AIDE_HOT_009
- aide AIDE_LAI_002
- aide AIDE_LAI_004

## Prestataires

### PREST_HOT_001 · EcoTechniques

equipementier · secteurs ['hotellerie'] · départements national · statut brouillon

Entreprise de Longvic (Côte-d'Or) spécialisée depuis 1996 dans l'économie d'eau, qui conçoit et fabrique en France des régulateurs de débit, douchettes et autres économiseurs, et cite des hôtels parmi ses références (hôtels B&B, Accor, Hôtel Clarine, Hôtel Daunou). Elle réalise un audit sur site qui inventorie tous les points d'eau et mesure débits et pressions, fait poser les dispositifs par ses propres techniciens puis suit les consommations pour vérifier les économies. L'audit initial est gratuit et sans engagement, et l'entreprise s'engage par écrit sur le niveau d'économies quand l'installation lui est confiée.

- Mesures : ACT_HOT_001 [conseil_etude+travaux+materiel], ACT_AGR_002 [conseil_etude]
- site_internet : https://eco-techniques.fr/
- tel : 03 80 52 99 75
- mail : contact@eco-techniques.fr
- adresse : 7 Bis Boulevard Eiffel, 21600 Longvic
- Sources :
  - siret, adresse, type : https://recherche-entreprises.api.gouv.fr/search?q=ECO%20TECHNIQUES&departement=21 (2026-09-24) · « ECO-TECHNIQUES, siret 40767775600048, siège, 7 B BOULEVARD EIFFEL 21600 LONGVIC, activité 28.14Z, état administratif A »
  - contacts : https://eco-techniques.fr/contact/ (2026-09-24) · « 7 Bis Boulevard Eiffel, 21600 Longvic. 03 80 52 99 75. contact@eco-techniques.fr »
  - description, secteurs : https://eco-techniques.fr/references/ (2026-09-24) · « Hôtellerie & tourisme : Hôtels B&B, Hôtel Méridien Caraïbes, Hôtel Ambassador (75), Hôtel Clarine (21), Hôtel Daunou (75), CroisiEurope »
  - description, secteurs : https://eco-techniques.fr/a-propos/ (2026-09-24) · « Depuis 1996 [...] Hôtellerie & tourisme : Accor, B&B, Méridien Caraïbes, CroisiEurope. Nos dispositifs français à 98% sont certifiés et garantis 10 ans »
  - description, expertises, departements, mesures (ACT_AGR_002, ACT_HOT_001 conseil_etude), type : https://eco-techniques.fr/audit-diagnostic-deconomie-deau/ (2026-09-24) · « réalise des audits gratuits pour collectivités et entreprises en Bourgogne-Franche-Comté et partout en France [...] inventorier 100 % des points d'eau (robinets, douches, sanitaires…). Débits, pressions et usages sont mesurés [...] rapport clair et chiffré [...] L'audit initial est 100 % gratuit et sans engagement. [...] nous nous engageons par écrit sur le niveau d'économies d'eau prévu dans le diagnostic [...] conçus et fabriqués en France »
  - expertises, mesures (ACT_HOT_001 materiel) : https://eco-techniques.fr/dispositifs-hydro-economes/ (2026-09-24) · « conçoit depuis plus de 25 ans des régulateurs, douchettes et aérateurs fiables, 98 % français [...] Nous proposons aussi des solutions comme les limiteurs de chasse d'eau ou les mousseurs adaptés aux faibles pressions. »
  - expertises, mesures (ACT_HOT_001 travaux), description : https://eco-techniques.fr/installation-suivi/ (2026-09-24) · « L'installation est réalisée directement par l'équipe EcoTechniques. Aucun sous-traitant [...] Habitués à équiper tous types de bâtiments [...] publics, hôtels, campings, industries [...] Relevés réguliers des compteurs, comparaison avant/après »

### PREST_HOT_002 · Delabie

equipementier · secteurs ['hotellerie'] · départements national · statut brouillon

Entreprise familiale qui fabrique de la robinetterie et des appareils sanitaires pour les lieux recevant du public, avec son siège social et son site de production à Friville-Escarbotin (Somme) ; le groupe a aussi acquis en 2012 une fonderie au Portugal. Pour un hôtel, elle fournit des pommeaux de douche à débit régulé de 6 l/min, des chasses directes à double touche 3 l/6 l et de la robinetterie temporisée, et présente une réalisation au Mama Shelter de Lille : robinets de lavabo temporisés dans les sanitaires des parties communes et installations sanitaires spécifiques dans les chambres pour personnes à mobilité réduite. Un service conseil répond par téléphone, un service devis par téléphone ou par formulaire, et le site propose un calcul des mètres cubes d'eau économisés.

- Mesures : ACT_HOT_001 [materiel]
- site_internet : https://www.delabie.fr/
- tel : 03 65 17 00 25
- adresse : 18 rue du Maréchal Foch, 80130 Friville-Escarbotin
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Delabie&departement=80 (2026-09-24) · « DELABIE, SIRET 61568008900013, siège, 18 RUE DU MARECHAL FOCH 80130 FRIVILLE-ESCARBOTIN, activite_principale 28.14Z (NAF 2025 : 28.14Y), état administratif A »
  - contacts, type, description (site de production en France), departements : https://www.delabie.fr/contact (2026-09-24) · « DELABIE FRANCE 18, rue du Maréchal Foch 80130 Friville FRANCE [...] DEVIS Obtenez un chiffrage précis pour votre projet Tél. 03 22 60 22 71 Compléter notre formulaire CONSEIL Discutez de votre projet avec nos experts Tél. 03 65 17 00 25 [...] SIÈGE SOCIAL ET SITE DE PRODUCTION 18, rue du Maréchal Foch 80130 Friville FRANCE [...] DELABIE exporte dans plus de 90 pays depuis son usine en France »
  - type, description (assemblage en France) : https://www.delabie.fr/le-groupe/rejoignez-nous/nos-metiers/les-ateliers-d-assemblage (2026-09-24) · « Sur notre site de Friville Escarbotin (Picardie Maritime), nous comptons 8 équipes dédiées à la prise en charge des composants et à leur contrôle qualité, à l'assemblage de nos produits et à leur expédition vers nos clients. »
  - description (entreprise familiale) : https://www.delabie.fr/le-groupe/rejoignez-nous/mieux-connaitre-delabie/delabie-presentee-par-l-un-de-ses-gerants-luc-delabie (2026-09-24) · « Entreprise 100 % familiale, DELABIE bénéficie de la grande stabilité de son actionnariat. Depuis l'origine, quatre générations ont dirigé l'entreprise »
  - description (fonderie au Portugal) : https://www.delabie.fr/le-groupe/a-propos-de-nous/notre-histoire (2026-09-24) · « 2012 Acquisition d'une fonderie au Portugal »
  - description, secteurs (référence hôtelière) : https://www.delabie.fr/le-groupe/delabie-dans-le-monde/nos-realisations/hotellerie-restauration/hotel-mama-shelter-lille-france (2026-09-24) · « le Mama Shelter de Lille dispose dans les sanitaires des parties communes de robinetteries et équipements sanitaires modernes notamment des robinetteries de lavabo temporisées DELABIE TEMPOMIX 3. Certaines chambres conçues pour accueillir des personnes à mobilité réduite ont également des installations sanitaires spécifiques DELABIE. »
  - secteurs (offre hôtelière), description : https://www.delabie.fr/nos-services/notre-expertise/nos-inspirations/hotel9 (2026-09-24) · « Nos inspirations DELABIE - Hôtel [...] Nos équipes vous accompagnent pour trouver la solution adaptée à votre établissement, que ce soit en construction ou en rénovation. Calculez facilement le nombre de m3 d'eau économisés avec nos robinetteries »
  - expertises, mesures (douche à débit limité) : https://www.delabie.fr/nos-produits/robinetterie-pour-lieux-publics/robinet-de-douche-automatique/709000-pommeau-de-douche-round (2026-09-24) · « Pommeau de douche ROUND Réf. 709000 Pommeau de douche fixe : Pour arrivée d'eau encastrée. Débit 6 l/min à 3 bar. Régulation automatique du débit. »
  - expertises, mesures (chasse double commande) : https://www.delabie.fr/le-groupe/trends-le-mag/in-the-air/a-tempo (2026-09-24) · « Plaques de commande pour robinetterie temporisée TEMPOFLUX 3 WC : Plaque double touche 3l/6l en métal chromé - référence 763040 Plaque double touche 3l/6l en Inox brossé - référence 763000 »
  - expertises, mesures (chasse à volume adapté) : https://www.delabie.fr/nos-produits/robinetterie-pour-lieux-publics/chasse-d-eau-directe-sans-reservoir/464056-plaque-de-commande-tempomatic-bicommande-pour-wc (2026-09-24) · « adaptation du volume de chasse en fonction de l'usage - 3 l présence courte, 6 l présence longue - (ajustable 2 l/4 l ou 5 l/9 l) »

### PREST_HOT_003 · Les Robinets Presto

equipementier · secteurs ['hotellerie'] · départements national · statut brouillon

Fabricant français de robinetterie pour les lieux recevant du public, siège à Montrouge et site de production à Saint-Georges-de-Didonne (17110), avec un second site au Portugal. Pour les hôtels, il fournit des robinets de lavabo temporisés à débit réduit (1,9 ou 3 l/min), des robinetteries de douche temporisées (6, 8 ou 10 l/min), de la robinetterie électronique sans contact et des robinets de chasse directe à double volume réglable, et cite des références comme l'Hôtel Bedford et l'Hôtel Disneyland à Paris. Les produits se vendent par un réseau de distributeurs professionnels ; pour un chantier de plus de 3 000 euros HT en prix public, le chiffrage se demande par mail au service dédié, en indiquant l'installateur.

- Mesures : ACT_HOT_001 [materiel]
- site_internet : https://presto.fr/
- tel : 01 46 12 34 56
- mail : serviceclient@presto-group.com
- adresse : 7 rue Racine, 92120 Montrouge
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Les%20Robinets%20Presto&departement=92 (2026-09-24) · « SA LES ROBINETS PRESTO, SIRET 54209143400010, siège, 7 RUE RACINE 92120 MONTROUGE, NAF 28.14Z, état administratif A »
  - contacts, description (chiffrage chantier) : https://presto.fr/fr/contact/ (2026-09-24) · « Tél. : +33 (0)1 46 12 34 56 [...] Email : serviceclient@presto-group.com ; Pour établir un chiffrage chantier dont le montant total en prix public est supérieur à 3 000€ HT, veuillez envoyer vos demandes de prix par mail en indiquant : [...] Le nom de l'installateur »
  - type, description (fabrication en France) : https://presto.fr/fr/entreprise/organisation/ (2026-09-24) · « Tous les produits PRESTO sont fabriqués à Saint George-de-Didonne et au Portugal. Avec notre siège social situé à Montrouge, nous employons 220 salariés en France. »
  - type, description (fabricant) : https://presto.fr/fr/entreprise/charte-dindustriel/ (2026-09-24) · « PRESTO conçoit et fabrique depuis 100 ans des solutions de robinetteries pour les lieux qui reçoivent du public [...] Fabrication en France et au Portugal »
  - description, expertises, mesures, secteurs : https://presto.fr/fr/projet/hotellerie/ (2026-09-24) · « Les robinets temporisés limitent durablement la consommation d'eau [...] Robinetterie électronique sans contact, détection infrarouge ; Chasse directe à double volume ajustable indépendamment ; Hôtel Bedford, Paris ; Hôtel DisneyLand, Paris ; Le Pas Sage, Royan ; site de production 4 rue Lavoisier, 17110 Saint Georges de Didonne »
  - mesures, description (lavabo débit réduit) : https://presto.fr/fr/robinetteries/robinet-temporise-neo/ (2026-09-24) · « Robinet temporisé NEO, NEO DUO, NEO Sensor ; Débit : 1,9 l/min ou 3 l/min ; Double temporisation assurant une consommation d'eau optimale pour les différents usages »
  - mesures, description (douche) : https://presto.fr/fr/robinetteries/prestotem2/ (2026-09-24) · « Prestotem® | Découvrez notre robinetterie de douche ; Débit : 6 l/min, 8 l/min ou 10 l/min »
  - mesures, expertises (chasse double volume) : https://presto.fr/fr/robinetteries/p1000xldva/ (2026-09-24) · « Double volume d'eau ajustable et système S ; Version économique : grand volume ajustable de 3 à 5 litres et petit volume de 1,5 à 3 litres »
  - departements, description (distribution) : https://presto.fr/fr/store-locator/ (2026-09-24) · « Retrouvez nos produits en distribution professionnelle. Carte de 1 375 points de vente (données de la carte, comptage du rédacteur) dont les codes postaux couvrent les départements 01 à 95, par exemple SIDER LILLE, 59520 Marquette-lez-Lille ; WSL33, 33000 Bordeaux ; SIDER RENNES, 35135 Chantepie ; SIDER LYON, 69120 Vaulx-en-Velin »

### PREST_HOT_005 · FairMoove Solutions (ex-Betterfly Tourism)

bureau_etudes · secteurs ['hotellerie'] · départements national · statut brouillon

Société de conseil nantaise spécialisée dans le tourisme, issue de Betterfly Tourism (entrée dans le groupe FairMoove en 2023). Pour les hôtels, elle édite FairScore, une notation environnementale par nuitée fondée sur les standards de l'ADEME et la base Empreinte, dont l'un des quatre indicateurs est la consommation d'eau, propose un accompagnement avec visite terrain et plan d'action sur l'énergie, l'eau et les achats, et forme le personnel par son organisme certifié Qualiopi, dont la formation de 3 h 30 du critère 237 du classement hôtelier sur les économies d'eau. Prestations payantes : la formation du critère 237 est affichée à 650 euros HT par session, dans l'établissement ou en visioconférence, avec prise en charge OPCO possible.

- Mesures : ACT_HOT_007 [conseil_etude]
- site_internet : https://www.fairmoove-solutions.com/
- tel : +33 (0)2 40 74 69 24
- mail : contact.web@fairmoove-solutions.com
- adresse : 28 rue de Strasbourg, 44000 Nantes
- linkedin : https://www.linkedin.com/company/fairmoove-solutions
- Sources :
  - siret, adresse, type : https://recherche-entreprises.api.gouv.fr/search?q=FairMoove%20Solutions&departement=44 (2026-09-24) · « FAIRMOOVE SOLUTIONS, siret 53356378900049, siège, 28 RUE DE STRASBOURG 44000 NANTES, activité 70.22Z, état administratif A »
  - contacts : https://www.fairmoove-solutions.com/contact (2026-09-24) · « Par téléphone +33 (0)2 40 74 69 24. Par email contact.web@fairmoove-solutions.com [lien LinkedIn linkedin.com/company/fairmoove-solutions en pied de page] »
  - nom, description : https://www.fairmoove-solutions.com/qui-sommes-nous (2026-09-24) · « Betterfly Tourism devient FairMoove Solutions [...] En 2023, Jean-Pierre Nadir, fondateur de FairMoove [...] fait entrer Betterfly Tourism dans le groupe FairMoove »
  - description, expertises, secteurs, mesures (ACT_HOT_007 conseil_etude) : https://www.fairmoove-solutions.com/fairscore (2026-09-24) · « 4 indicateurs clés pour une mesure précise (par nuitée) - Impact carbone - Consommation d’eau - Épuisement des ressources énergétiques [...] Un référentiel officiel : Basé sur les standards de l’ADEME et la base de données Empreinte® (ex-IMPACTS®) [...] Collecte des données : rassemblement d'informations sur vos consommations (énergie, eau, déchets, services, etc.) »
  - description, expertises : https://www.fairmoove-solutions.com/conseil-rse-hospitality (2026-09-24) · « Une visite terrain de votre établissement [...] Un plan d'action ciblé sur les principaux leviers : actions à engager sur l'énergie, l'eau, les consommables, les achats ou les pratiques internes [...] Eau : réduire vos consommations d'eau sans dégrader l'expérience client ni l'exploitation. »
  - description, expertises, categories : https://www.fairmoove-solutions.com/academy (2026-09-24) · « FORMATION 3H30 Formation du personnel à la gestion économe de l'énergie, aux mesures d'économie d'eau et à la gestion des déchets (N°237) Financement Prise en charges OPCO possible [...] L'Académie Betterfly Tourism x FairMoove Solutions est un organisme de formation certifié Qualiopi [...] Écogestion responsable de l'eau dans les hébergements touristiques »
  - description, departements, categories : https://directus.fairmoove-solutions.com/assets/cd0fb7a8-8de6-4b20-82a2-62ab7a1360cb (2026-09-24) · « Formation du personnel à la gestion économe de l'énergie, aux mesures d'économie d'eau et à la gestion des déchets (N°237). 3H30. En présentiel dans votre établissement OU à distance en visioconférence. 650 € HT par session [...] Savoir comment réduire les consommations d'eau, d'énergie et la quantité de déchets dans un établissement hôtelier. Destinée à tout collaborateur travaillant dans le secteur de l'hôtellerie. »
  - departements : https://landing.fairmoove-solutions.com/ (2026-09-24) · « L'Académie Digitale | Formation E-Learning Hôtellerie [...] 19 langues [...] La gestion de la ressource en eau [...] une utilisation raisonnée et efficace de l'eau au quotidien »

### PREST_HOT_006 · FHOR

organisme_formation · secteurs ['hotellerie'] · départements national · statut brouillon

Organisme de formation bordelais certifié Qualiopi, constitué en entreprise individuelle et spécialisé dans l'hôtellerie et la restauration. Il dispense la formation aux écogestes exigée du personnel par le classement hôtelier, qui couvre l'eau, l'énergie et les déchets, avec une partie « Maîtriser la consommation d'eau » (état des lieux, bonnes pratiques à adopter), en 4 heures en visioconférence pour 1 à 10 participants, le programme et le format pouvant être adaptés. Le tarif indicatif affiché est de 650 euros, sur devis, avec une prise en charge possible par votre OPCO ; l'organisme intervient en France et dans les pays francophones.

- Mesures : ACT_HOT_002 [formation]
- site_internet : https://www.fhor.fr/
- tel : 05 81 04 83 83
- tel : 05 47 29 27 70
- mail : contact@fhor.fr
- adresse : 5 rue Fénelon, 33000 Bordeaux
- Sources :
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=981435415&departement=33 (2026-09-24) · « siren 981435415, siret 98143541500014, siège, nom et adresse [NON-DIFFUSIBLE], nature juridique 1000, activité 85.59A, état administratif A »
  - siret, type, description (entreprise individuelle), contacts (tel 05 47 29 27 70, mail, adresse) : https://www.fhor.fr/mentions-legales/ (2026-09-24) · « Propriétaire du site : FHOR, Contact : contact[@]fhor.fr, 0547292770, Adresse : 5 rue Fénelon, 33000 Bordeaux. Identification de l'entreprise : EI FHOR, SIREN : 981.435.415 »
  - contacts : https://www.fhor.fr/contact/ (2026-09-24) · « Contactez-Nous 05 81 04 83 83 contact[@]fhor.fr 5 rue Fénelon 33000 Bordeaux [...] (pied de page) 05 47 29 27 70 contact[@]fhor.fr 5 rue Fénelon, 33000 Bordeaux »
  - type, description, departements : https://www.fhor.fr/nous-connaitre/ (2026-09-24) · « FHOR est certifié Qualiopi [...] Restaurateurs et hôteliers, nous vous accompagnons pour la création et le développement de vos établissements. Nous intervenons en France et dans les pays francophones. »
  - description, expertises, mesures (ACT_HOT_002 formation) : https://www.fhor.fr/service/ecogestes-en-hotellerie-formation/ (2026-09-24) · « Ecogestes : eau, énergie, déchets (Classement hôtelier) 650 € [...] Identifier les sources de gaspillage et les leviers d'économie d'eau et d'énergie [...] 3) Maîtriser la consommation d'eau : Etat des lieux, Bonnes pratiques à adopter [...] Durée 4 heures. Format Distanciel (visioconférence). Public cible L'ensemble du personnel de l'établissement [...] 1 à 10 participants par session [...] prise en charge par votre OPCO »
  - mesures (ACT_HOT_002 formation, contexte : article général de FHOR sur le contenu attendu de la formation écogestes, pas le programme) : https://www.fhor.fr/hotellerie/formation-classement-hotelier-ecogestes-et-handicap/ (2026-09-24) · « Gestion de l'eau : Sensibiliser à la consommation d'eau (robinets, douches, toilettes), à la détection des fuites et à l'utilisation de systèmes économes en eau. »

### PREST_HOT_007 · Hôtel Vert

bureau_etudes · secteurs ['hotellerie'] · départements national · statut brouillon

Équipe lyonnaise de consultants RSE spécialisés dans les hébergements touristiques, qui intervient sur toute la France. Elle réalise une analyse des pratiques de l'établissement, accompagne l'obtention de la Clef Verte en fournissant les éléments de preuve critère par critère (dont l'affichage proposant le changement des draps et serviettes uniquement à la demande) et forme le personnel aux écogestes exigés par le classement hôtelier, dont les mesures d'économie d'eau. La formation en formule intra ou inter est affichée à 650 euros HT la session de 3h30, et des modèles d'affichage et éléments de preuve sont téléchargeables gratuitement sur le site.

- Mesures : ACT_HOT_003 [conseil_etude]
- site_internet : https://www.hotelvert.com/
- tel : 09 72 01 01 74
- mail : contact@hotelvert.com
- adresse : 129, Tour Part-Dieu, rue de Servient, 69003 Lyon
- linkedin : https://www.linkedin.com/company/h%C3%B4tel-vert-d%C3%A9veloppement-durable-et-rse/
- Sources :
  - contacts (site, téléphone, adresse), departements : https://www.hotelvert.com/contact/ (2026-09-24) · « Adresse 129, Tour Part-Dieu Rue de Servient 69003 Lyon. Contact +33 09 72 01 01 74 [...] Formations et consulting sur toute la France »
  - contacts (mail) : https://www.hotelvert.com/wp-json/wp/v2/pages/27 (2026-09-24) · « Contenu de la page Contact servi par le site en JSON, adresse non masquée : +33 09 72 01 01 74 contact@hotelvert.com »
  - type, description, expertises (diagnostic RSE, Clef Verte) : https://www.hotelvert.com/consulting-rse/ (2026-09-24) · « Nous sommes une équipe de consultants RSE spécialisés dans le secteur hôtelier [...] Analyse de la Situation Actuelle : Notre équipe effectue une évaluation approfondie de vos pratiques actuelles [...] Obtention d'écolabel : Nous nous occupons des éléments de preuve pour que vous puissiez profitez pleinement de votre écolabel. »
  - description, expertises, mesures (ACT_HOT_003 conseil_etude) : https://www.hotelvert.com/hotel-vert/labellisation-classement-hotelier/label-la-clef-verte/ (2026-09-24) · « Hôtel Vert vous aide pour vos éléments de preuve [...] À chaque critère, un article avec des éléments de preuve téléchargeables et gratuits [...] 19) Un affichage indique aux clients qu'ils ont la possibilité de faire nettoyer leurs draps et serviettes uniquement sur demande. »
  - description, expertises, mesures (ACT_HOT_003 conseil_etude) : https://www.hotelvert.com/la-reutilisation-des-draps-et-serviettes/ (2026-09-24) · « Que ce soit en version papier ou en version numérique (TV ou QR code), vous vous devez de sensibiliser vos clients à la réutilisation des draps et serviettes à l'intérieur de la chambre. [...] Exemple signalisation pour la réutilisation des serviettes à imprimer »
  - description, expertises (formation écogestes, tarif) : https://www.hotelvert.com/formation-developpement-durable/ (2026-09-24) · « Répondez au critère obligatoire 237 du classement hôtelier [...] formation du personnel à la gestion économe de l'énergie, aux mesures d'économie d'eau et à la gestion des déchets. [...] INTRA OU INTER Idéal pour les TPE ou + de 50 salariés € 650 HT pour une session de 3h30 [...] Formations sur toute la France »
  - siret (non trouvé) : https://recherche-entreprises.api.gouv.fr/search?q=Hotel%20Vert&departement=69 (2026-09-24) · « Aucun résultat au nom de Hôtel Vert dans le Rhône (seul résultat : CENTRE DE CONSEIL ET DE SERVICE, Nantes) ; la page mentions légales du site ne contient aucune identification de l'éditeur, et aucune page du site ni la page LinkedIn ne donnent de raison sociale ou de SIRET. »

### PREST_HOT_008 · Danube International (Onnera Laundry France)

installateur · secteurs ['hotellerie'] · départements national · statut brouillon

Société de Lamotte-Beuvron (Loir-et-Cher), immatriculée sous le nom Onnera Laundry France et présentée sur son site sous la marque Danube, qui propose aux hôtels des laveuses frontales de 11 à 120 kg et cite l'hôtel 1770 Le Factory (Le Pontet) parmi ses réalisations. Pour l'eau, elle commercialise les bacs AQUABAC, qui récupèrent l'eau de rinçage pour la réinjecter dans un lavage suivant (jusqu'à 70 % d'économie d'eau annoncée par l'entreprise), et assure un service après-vente en ligne ou sur site. Le site dit concevoir et fabriquer ses machines, la commune la présente comme constructeur et son code d'activité est industriel (28.94Z), mais le lieu de fabrication n'est publié nulle part : faute de mention explicite d'une production en France, la fiche la classe en installateur.

- Mesures : ACT_HOT_004 [materiel]
- site_internet : https://www.danube-international.com/
- tel : 02 54 88 05 76
- mail : info@danube-international.com
- adresse : 3 rue Léonard de Vinci, Parc d'activités de Sologne, 41600 Lamotte-Beuvron
- Sources :
  - siret, adresse, nom, description (code d'activité 28.94Z) : https://recherche-entreprises.api.gouv.fr/search?q=ONNERA%20LAUNDRY%20FRANCE&departement=41 (2026-09-24) · « ONNERA LAUNDRY FRANCE, siret 34222275900058, siège, PARC ACTIVITES DE SOLOGNE 3 RUE LEONARD DE VINCI 41600 LAMOTTE-BEUVRON, activité 28.94Z, état administratif A »
  - nom, contacts, description, expertises, departements, type : https://www.danube-international.com/entreprise/ (2026-09-24) · « Chez Danube, nous concevons et fabriquons des machines pour la blanchisserie hospitalière depuis 1984. [...] Nous sommes un fournisseur mondial de machines qui propose des solutions complètes pour votre blanchisserie. [...] Notre équipe technique offre un support après-vente professionnel en ligne ou sur site chaque fois que nécessaire. [...] ONNERA LAUNDRY FRANCE, 3 rue Léonard de Vinci, Parc d'activités de Sologne, 41600 Lamotte Beuvron, France. (+33)2 54 88 05 76. info@danube-international.com »
  - secteurs, description, expertises, mesures (ACT_HOT_004 materiel) : https://www.danube-international.com/secteurs/hotellerie-restauration/ (2026-09-24) · « la conception et la fabrication d'équipements et de solutions de blanchisserie innovants pour les hôtels et restaurants. [...] Laveuses frontales WED de 11 à 120 kg [...] Bacs de récupération d'eau pour économiser jusqu'à 70 % d'eau. »
  - description, expertises, mesures (ACT_HOT_004 materiel) : https://www.danube-international.com/machinerie/machine-laver-aquabac/ (2026-09-24) · « Les réservoirs de récupération d'eau AQUABAC ont été conçus pour se connecter facilement aux machines à laver DANUBE équipées du contrôle ET2 et d'une double vidange. Ils permettent la récupération de l'eau de rinçage, pour être réutilisée pour les lavages suivants [...] Jusqu'à 70 % d'économie d'eau »
  - description, departements, secteurs : https://www.danube-international.com/projets/hotel-1770-le-factory/ (2026-09-24) · « Voici l'hôtel 4 étoiles 1770 et son restaurant Le Factory, situé à Le Pontet-Avignon. Ce très bel établissement a choisi d'équiper sa blanchisserie avec du matériel Danube. »
  - contacts, secteurs, description (constructeur) : https://www.lamotte-beuvron.fr/commerces-artisans/danube-international/ (2026-09-24) · « Constructeur de matériel de blanchisserie industriel : laveuses essoreuses, sécheuses repasseuses, séchoirs rotatifs pour le secteur hôtelier, hospitalier, industriel et laveries automatiques. 02 54 88 05 76 »
  - type (lieu de fabrication non publié) : https://www.danube-international.com/visite-a-lusine/ (2026-09-24) · « Visite à l'usine, 6 mai 2019 : Nous avons eu le plaisir d'accueillir à l'usine les 2 et 3 mai derniers notre distributeur indonésien PT Mega Pratama Medicalindo (l'article ne dit pas où se trouve l'usine) »

### PREST_HOT_009 · Winterhalter France

installateur · secteurs ['hotellerie'] · départements national · statut brouillon

Filiale française, créée en 1987 et installée à Chaponost (Rhône), du fabricant allemand Winterhalter, dont les machines sont produites en Allemagne et en Suisse : elle ne fabrique pas en France. Elle distribue la marque auprès d'un réseau national d'installateurs et de professionnels de la cuisine, et propose aux hôtels des lave-vaisselle frontaux, à capot, lave-ustensiles et à avancement automatique (2,2 litres d'eau de rinçage par cycle annoncés pour la gamme à capot PT, avec doseur de produit de rinçage intégré), les produits lessiviels, la location de machines et des forfaits d'entretien avec intervention de techniciens sur site ; la pose des machines par la filiale elle-même n'est pas décrite. Prestations payantes, à l'achat, à la location ou sous forfait d'entretien.

- Mesures : ACT_HOT_004 [materiel]
- site_internet : https://www.winterhalter.com/fr-fr/
- tel : +33 4 81 76 76 00
- adresse : 46 route de Brignais, 69630 Chaponost
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Winterhalter%20France&departement=69 (2026-09-24) · « WINTERHALTER FRANCE SAS, siret 34314790600055, siège, 46 ROUTE DE BRIGNAIS 69630 CHAPONOST, etat_administratif A »
  - type, description, departements : https://www.winterhalter.com/fr-fr/a-propos/ (2026-09-24) · « La fabrication est toujours allemande et suisse [...] une maison-mère à Meckenbeuren (Allemagne) et des filiales et partenaires partout à travers le monde. [...] Créée en 1987, Winterhalter France est située à Chaponost, près de Lyon. [...] La filiale représente et distribue la marque Winterhalter auprès d'un réseau national d'installateurs et de professionnels de la cuisine. [...] Winterhalter France emploie plus de 90 commerciaux, techniciens et administratifs, à travers tout le pays. »
  - description, expertises, mesures : https://www.winterhalter.com/fr-fr/secteurs/hotellerie/ (2026-09-24) · « SOLUTIONS DE LAVAGE POUR HÔTELS [...] Grâce à des technologies avancées, ces machines réduisent également la consommation d'eau et d'énergie, vous permettant de réaliser des économies tout en contribuant à la protection de l'environnement. (menu de la page : Location de lave-vaisselle professionnels, Technologie de dosage) »
  - description, mesures : https://www.winterhalter.com/fr-fr/produits/lave-vaisselle-a-capot/gamme-pt/ (2026-09-24) · « son système de lavage performant utilise seulement 2,2 litres d'eau de rinçage par cycle tout en garantissant des résultats de lavage irréprochables. [...] Un doseur de produit de rinçage intégré fait partie des équipements de série : il garantit un dosage précis et économe pour un résultat de lavage et de séchage parfait. »
  - expertises, description : https://www.winterhalter.com/fr-fr/services/ (2026-09-24) · « nos techniciens interviennent sur site dans les meilleurs délais ; Nos forfaits d'entretien vous garantissent une plus grande sécurité »
  - contacts : https://www.winterhalter.com/fr-fr/contact/ (2026-09-24) · « Winterhalter France SAS, 46 route de Brignais, 69630 Chaponost, France. +33 481 76 76 00 »

### PREST_HOT_010 · Syclope Electronique

equipementier · secteurs ['hotellerie'] · départements national · statut brouillon

PME d'une trentaine de salariés installée à Sauvagnon, près de Pau, qui fabrique dans son usine des équipements d'analyse et de régulation pour le traitement de l'eau, avec une gamme dédiée aux piscines d'hôtels, de campings et aux spas. Pour ces bassins, elle fournit la régulation automatique du chlore et du pH, des pompes doseuses, la production de chlore par électrolyse de sel, la supervision à distance et l'unité d'ultrafiltration UFPOOL, fabriquée en France, qui recycle l'eau de lavage des filtres pour un nouveau lavage ou pour la réinjecter dans le bassin. Son bureau d'études réalise des études de faisabilité et de besoins et élabore des cahiers des charges, et son service après-vente répare le matériel ; la pose n'est pas décrite sur son site. Ses technico-commerciaux couvrent la France par grandes zones.

- Mesures : ACT_HOT_005 [materiel]
- site_internet : https://www.syclope.fr/
- tel : 05 59 33 70 36
- mail : syclope@syclope.fr
- adresse : Rue du Bruscos, 64230 Sauvagnon
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Syclope%20Electronique&departement=64 (2026-09-24) · « SYCLOPE ELECTRONIQUE, siret 38361200900035, siège, AEROPOLE PAU PYRENEES RUE DU BRUSCOS 64230 SAUVAGNON, activité 26.51B, état administratif A »
  - contacts, departements : https://www.syclope.fr/contact-coordonnees/ (2026-09-24) · « Rue du Bruscos, 64230 Sauvagnon [...] France. +33 (0)5 59 33 70 36. syclope@syclope.fr. Zones des commerciaux : SUD-OUEST, NORD-IDF, NORD-OUEST, NORD-EST, SUD-EST »
  - type, description : https://www.syclope.fr/societe/ (2026-09-24) · « SYCLOPE Electronique est une PME d'une trentaine de salariés basée près de Pau. Fabricant français, nous produisons dans notre usine des équipements d'analyses et régulations pour le traitement de l'eau. [...] Soutien technique et commercial dans vos réponses aux appels d'offres, Etudes de faisabilité et de besoins, Élaboration cahier des charges [...] l'objectif premier de notre SAV est de réparer »
  - description, expertises, secteurs, mesures (ACT_HOT_005 materiel) : https://www.syclope.fr/secteurs-dactivites/eaux-de-loisirs/hotels-campings-spas/ (2026-09-24) · « SYCLOPE propose des solutions de traitement d'eau adaptées aussi bien aux piscines d'hôtels et de campings [...] Pompes doseuses électromagnétiques, à moteur, péristaltiques [...] Production de chlore liquide sur site par électrolyse de sel [...] analyser et contrôler le chlore et le pH [...] suivi en temps réel et à distance »
  - description, expertises, mesures (ACT_HOT_005 materiel) : https://www.syclope.fr/produit/unite-ultrafiltration/ (2026-09-24) · « Les unités d'ultrafiltration UFPOOL, fabriquées en France [...] recyclage de l'eau de lavage des filtres des piscines [...] Réutilisation de l'eau recyclée lors de nouvelles phases de lavage des filtres ou à réinjecter dans l'eau des bassins »

### PREST_HOT_011 · Ocene (Ocène Industrie)

installateur · secteurs ['hotellerie'] · départements national · statut brouillon

Société bretonne de traitement de l'eau, d'hygiène et d'environnement, créée en 1976 et filiale du groupe Keralia. Elle a conçu EKOSWIM, un système qui collecte l'eau de lavage des filtres de piscine, la traite par filtration ou ultrafiltration et la stocke pour la réutiliser dans les sanitaires, l'arrosage des espaces verts ou le bac tampon du parc aquatique, avec suivi des économies et un pilotage à distance que la page marque d'un astérisque sans en préciser la portée ; son offre cible les campings et l'hôtellerie de plein air, et ni le lieu de fabrication d'EKOSWIM ni sa pose par Ocene ne sont publiés. Pour ses clients industriels, le site présente aussi un bureau d'études, le montage sur site, la mise en service et des contrats de maintenance, avec des techniciens qui interviennent en France et à l'étranger ; l'accès se fait sur demande de devis.

- Mesures : ACT_HOT_005 [materiel]
- site_internet : https://www.ocene-industrie.fr/
- tel : 02 99 98 55 03
- adresse : 2 avenue de Monthorin, CS 92002, 35420 Louvigné-du-Désert
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=OCENE&departement=35 (2026-09-24) · « OCENE, siren 313125791, siret 31312579100027, siège, AVENUE DE MONTHORIN 35420 LOUVIGNE-DU-DESERT, activité 46.69B, état administratif A »
  - siret : https://www.ocene-industrie.fr/mentions-legales/ (2026-09-24) · « OCENE - 2 avenue de Monthorin - 35420 Louvigné-du-Désert - Tél. : 02 99 98 55 03 SAS au capital de 3 000 000 € - SIRET 31312579100027 »
  - contacts, description (demande de devis) : https://www.ocene-industrie.fr/contact/ (2026-09-24) · « Siège social 2 Avenue de Monthorin - CS 92002 - 35420 Louvigné-du-Désert [...] Tél. + 33 (0)2 99 98 55 03 [...] Objet Demande de contact Information Équipement Demande de Devis Contact Services »
  - description (création, groupe) : https://www.ocene-industrie.fr/qui-sommes-nous/ (2026-09-24) · « Depuis sa création en 1976, OCENE [...] Au fil de son histoire, OCENE a intégré différents métiers : le traitement de l'eau, l'hygiène, l'environnement. [...] Implanté historiquement en Bretagne [...] croissance en France et à l'Export. [...] Président du groupe KERALIA »
  - description, expertises, mesures (ACT_HOT_005 materiel), type (conçu par OCENE) : https://www.ocene-industrie.fr/metiers/traitement-de-l-eau/eau-recyclee-reuse-recyclage-industrie/146-ekoswim-recyclage-des-eaux-de-lavage-des-filtres-de-piscine.html (2026-09-24) · « EKOSWIM® est le système de recyclage des eaux de lavage des filtres de piscine développé et conçu par OCENE. [...] Une fois traitée, elle peut être réutilisée pour l'arrosage des espaces verts, les sanitaires, ou être renvoyée vers le bac tampon afin d'alimenter votre parc aquatique. [...] Pilotage à distance* avec suivi des économies [...] Module filtration / Module ultrafiltration [...] en fonction des besoins de votre camping. [...] *Le volume d'eau mentionné a été calculé sur la base de trois cycles de nettoyage pendant la période estivale d'une piscine de 2 000 m². »
  - description (hôtellerie de plein air), categories : https://www.ocene-industrie.fr/metiers/traitement-de-l-eau/eau-recyclee-reuse-recyclage-industrie/reuse-eaux-de-filtration-piscine/ (2026-09-24) · « les hôtelleries de plein air se tourne de plus en plus vers la réutilisation des eaux (REUT ou REUSE). OCENE a développé une solution économique et écologique de traitement d'eau : EKOSWIM®. Elle a pour but de recycler l'eau de lavage des filtres de piscine et de la réutiliser [...] tels que les sanitaires, l'arrosage, les piscines, bassins... »
  - description (hôtellerie de plein air) : https://www.ocene-industrie.fr/activites/hotellerie-de-plein-air/ (2026-09-24) · « pour limiter la surconsommation d'eau, l'une des solutions est la réutilisation des eaux de lavage des filtres de piscine (REUT). Plutôt que de rejeter ces eaux dans les égouts, ce système permet de collecter les eaux usées, de les traiter et les réutiliser pour l'arrosage des espaces verts ou encore l'alimentation des WC. »
  - type, description (services), departements : https://www.ocene-industrie.fr/services/ (2026-09-24) · « Nos services pour l'industrie [...] ÉTUDE ET CONCEPTION Nos chargés d'affaires et ingénieurs du Bureau d'études [...] interviennent à toutes les étapes de votre projet : Fabrication, Contrôle et essai, Montage sur site, Mise en service et Formation. [...] nos équipes interviennent sur site, en France et à l'étranger [...] CONTRATS DE MAINTENANCE »
  - logo_url : https://www.ocene-industrie.fr/contact/ (2026-09-24) · « <img src="/images/logo/logo-ocene.svg" alt="Ocène"/> »

### PREST_HOT_014 · idverde

installateur · secteurs ['hotellerie'] · départements national · statut brouillon

Entreprise d'aménagement et d'entretien des espaces paysagers, siège à Courbevoie, organisée en 24 territoires et une centaine de sites de production en France, dont le métier arrosage et fontainerie conçoit, installe et entretient des systèmes d'arrosage. Pour les espaces verts, elle propose une analyse agronomique et hydrique des plantations, l'arrosage localisé au goutte-à-goutte piloté selon la météo et l'humidité des sols, ainsi que le stockage et la réutilisation des eaux pluviales ; son site a présenté l'aménagement des espaces verts d'une résidence Pierre et Vacances Premium à Touques/Deauville (arrosage automatique, paillage, entretien pendant un an), référence qui ne figure plus sur le site actuel. Prestations sur devis, sa plaquette eau propose un audit gratuit des besoins en arrosage.

- Mesures : ACT_HOT_006 [conseil_etude+travaux], ACT_AGR_006 [conseil_etude+travaux]
- site_internet : https://idverde.fr/
- mail : siege@idverde.com
- adresse : 25 quai du Président Paul Doumer, 92400 Courbevoie
- Sources :
  - siret, adresse, type : https://recherche-entreprises.api.gouv.fr/search?q=idverde&departement=92 (2026-09-24) · « IDVERDE, siret 33960966101806, siège, IMMEUBLE WORKSTATION 25 QUAI DU PRESIDENT PAUL DOUMER 92400 COURBEVOIE, activité 81.30Z, état administratif A, 118 établissements ouverts »
  - contacts (mail, adresse), departements, description, expertises, mesures (ACT_HOT_006 conseil_etude, travaux ; ACT_AGR_006 conseil_etude, travaux) : https://idverde.fr/wp-content/uploads/sites/4/2026/09/idverde-Plaquette-technique-gestion-eau-SEPT2026_WEB2-1.pdf (2026-09-24) · « Analyse agronomique et hydrique des plantations. Adaptation aux sols, aux expositions et aux essences végétales. [...] Micro-irrigation et goutte-à-goutte : solutions assurant une distribution ciblée de l'eau favorisant les économies. Systèmes d'irrigation connectés : pilotage à distance avec ajustement automatique des apports en fonction des conditions météorologiques et de l'humidité des sols. [...] Contactez-nous pour un audit gratuit de vos besoins en arrosage ! [...] Simulations hydrique et financière du site [...] Stockage des eaux pluviales en ouvrages enterrés ou aériens : conception et mise en œuvre [...] Mise en œuvre : réalisation par des équipes spécialisées [...] Suivi & Maintenance [...] 24 territoires autonomes sur toute la France, 100 sites de production [...] Siège Social 25 quai du Président Paul Doumer 92 400 Courbevoie siege@idverde.com »
  - description, expertises, mesures (ACT_HOT_006 travaux) : https://idverde.fr/irrigation-jeux-deau/ (2026-09-24) · « Une prestation complète couvrant la conception et l'installation de systèmes d'irrigation et de jeux d'eau. [...] L'enjeu est d'optimiser la consommation d'eau tout en garantissant fiabilité, durabilité et facilité d'entretien. »
  - description (aménagement et entretien des espaces paysagers) : https://idverde.fr/idverde-fr/a-propos/ (2026-09-24) · « idverde est le leader européen de l'aménagement et de l'entretien des espaces paysagers, avec un ancrage historique en France. Nous allions expertise locale et dimension européenne pour concevoir, réaliser et entretenir des espaces de vie plus durables. »
  - expertises (Entretien des espaces verts) : https://idverde.fr/entretien-des-espaces-verts/ (2026-09-24) · « Des prestations d'entretien complètes. Une gamme complète de services pour assurer le soin continu des espaces verts dans des environnements variés. Cela comprend l'entretien de la végétation, les soins saisonniers et les interventions qui permettent aux espaces de rester sains, sûrs et accueillants. »
  - description, secteurs (référence hébergement touristique) : https://web.archive.org/web/20260607195406/https://idverde.fr/nos-projets/amenagement-et-entretien-espaces-verts/ (2026-09-24) · « Hôtellerie-Restauration [...] Pierres et Vacances DEAUVILLE. Résidence « Premium » de Pierres et Vacances sur TOUQUES/DEAUVILLE (14). Mise en place de substrat adapté [...] Réalisation d'un arrosage automatique. [...] Plantation d'arbustes et vivaces, mise en place de paillage [...] Entretien des espaces verts pendant 1 an. (copie archivée du 7 juin 2026 de la page idverde.fr, qui redirige aujourd'hui vers /realisations/ sans ce projet ; aucune page idverde.fr en ligne ne cite d'hôtel ou de résidence de tourisme au 24 septembre 2026) »

### PREST_HOT_015 · Sénariz

installateur · secteurs ['hotellerie'] · départements ['75', '77', '78', '91', '92', '93', '94', '95'] · statut brouillon

Entreprise de paysage basée à Plaisir (Yvelines) qui conçoit, crée et entretient les jardins, terrasses et rooftops d'hôtels à Paris et en Île-de-France depuis plus de 20 ans (références : Hôtel Madame Rêve, terrasse de l'hôtel Citizen M à Paris). Elle installe des systèmes d'arrosage automatique, dont le goutte-à-goutte, conçus et posés par un spécialiste interne, propose la gestion centralisée de l'arrosage avec sondes mesurant les besoins en eau, et pratique le paillage des massifs. Prestations sur devis.

- Mesures : ACT_HOT_006 [travaux]
- site_internet : https://www.senariz.fr/
- tel : 01 30 54 03 83
- mail : senariz@orange.fr
- adresse : 1625 rue de la Boissière, 78370 Plaisir
- Sources :
  - siret, adresse, type : https://recherche-entreprises.api.gouv.fr/search?q=Senariz&departement=78 (2026-09-24) · « SENARIZ, siret 43125957100013, siège, 1625 RUE DE LA BOISSIERE 78370 PLAISIR, activité 81.30Z, état administratif A »
  - contacts : https://www.senariz.fr/contact/ (2026-09-24) · « Sénariz Paris 1625 rue de la Boissière, 78370, Plaisir FRANCE senariz@orange.fr 01 30 54 03 83 [...] Un projet ? Une question ? Un devis ? »
  - departements, description : https://www.senariz.fr/ (2026-09-24) · « Sénariz, localisé à Plaisir, dans les Yvelines, intervient en Ile-de-France et, suivant les projets, partout en France. »
  - description, secteurs, expertises, departements : https://www.senariz.fr/jardiniers-paysagistes-pour-hotels-a-paris-et-en-ile-de-france/ (2026-09-24) · « Spécialisée dans la conception paysagère et l'entretien de jardin à Paris et en Ile-de-France, l'entreprise Sénariz accompagne depuis plus de 20 ans les hôteliers, les restaurateurs et tous les professionnels de l'accueil dans la création et l'entretien des jardins et des espaces verts de leur établissement. »
  - description (références hôtelières) : https://www.senariz.fr/hotel-de-la-poste-madame-reve-paris-01/ (2026-09-24) · « Création paysagère et entretien Hôtel de La Poste Madame Rêve, à Paris 01. [...] 500m2 de rooftop et 1000m2 d'espaces végétalisés sur trois niveaux »
  - description (références hôtelières) : https://www.senariz.fr/entretien-terrasse-hotel-citizen-m-paris-75/ (2026-09-24) · « Entretien de la terrasse de l'Hôtel Citizen, un établissement de 151 chambres situé à proximité immédiate des Champs-Élysées. »
  - expertises, mesures (ACT_HOT_006 travaux), description : https://www.senariz.fr/entretien/ (2026-09-24) · « Arrosage en goutte à goutte pour un système discret, programmé en fonction des besoins de chaque variété et économe en eau. Pour la conception et la mise en place de ces systèmes, nous disposons en interne d'un spécialiste dédié [...] La gestion centralisée de l'arrosage. L'utilisation de sondes pour mesurer en temps réel les besoins en eau. [...] Le paillage des massifs »
  - mesures (ACT_HOT_006) : https://www.senariz.fr/lentreprise/nos-engagements/notre-vision-rse/ (2026-09-24) · « Nous proposons systématiquement à nos clients des systèmes d'éclairage et d'arrosage économes. »

### PREST_HOT_017 · Osmozis

installateur · secteurs ['hotellerie'] · départements national · statut brouillon

Société par actions simplifiée de Clapiers (Hérault), opérateur de réseaux Wifi et de services connectés pour l'hébergement touristique (campings, hôtels, villages vacances), qui inclut dans son offre de gestion de l'énergie pour hôtels des objets connectés qu'elle a développés et qui s'intègrent aux compteurs d'eau existants. Ces objets permettent de visualiser les consommations à distance, de détecter fuites et surconsommations et de couper l'eau à distance en cas d'anomalie ; selon des articles de son blog de 2023 (offre alors nommée OsmoWater), le personnel est alerté par SMS ou courriel et la consommation des différents équipements de l'hôtel peut être suivie. Prestation sur devis ; la page d'offre ne précise ni qui pose les objets ni où ils sont fabriqués, et indique qu'après leur installation ses équipes assurent le paramétrage et la formation à l'outil.

- Mesures : ACT_HOT_007 [materiel]
- site_internet : https://www.osmozis.com/
- tel : 04 67 58 40 83
- mail : sales@osmozis.com
- adresse : 7 avenue de l'Europe, 34830 Clapiers
- Sources :
  - siret, adresse, description (forme juridique) : https://recherche-entreprises.api.gouv.fr/search?q=Osmozis&departement=34 (2026-09-24) · « OSMOZIS, siret 48515641800058, siège, 7 AVENUE DE L'EUROPE 34830 CLAPIERS, nature juridique 5710 (SAS), activité 61.20Z, état administratif A »
  - siret : https://www.osmozis.com/mentions-legales/ (2026-09-24) · « 7, Avenue de l'Europe, 34 830 Clapiers [...] SIRET : 485 156 418 00058 »
  - contacts : https://www.osmozis.com/assistance/ (2026-09-24) · « 7, avenue de l'Europe 34830 Clapiers, France. +33(0)4 67 58 40 83. sales@osmozis.com »
  - description, expertises, mesures (ACT_HOT_007 materiel), type : https://www.osmozis.com/nos-solutions/solution_gestion_energie/ (2026-09-24) · « Nous avons également développé des objets connectés qui s'intègrent aux compteurs d'eau et d'électricité : Visualisation à distance des consommations ; Détection de fuites ou de surconsommations ; Coupure à distance en cas d'anomalie. [...] Après l'installation des objets connectés, nos équipes procèdent au paramétrage et à la formation. [...] Devis gratuit »
  - description, secteurs : https://www.osmozis.com/nos-secteurs/hotellerie/ (2026-09-24) · « Nos solutions pour les hôtels : Wifi Network, TV & Streaming, Affichage dynamique, VoIP, Caméra, Alerte sonore, Energy Management solution »
  - description (suivi par équipement, présentation de 2023), secteurs : https://www.osmozis.com/blog/hotellerie-hpa-consommation-deau-moyenne-postes-a-optimiser/ (2026-09-24) · « Article publié le 1 août 2023 : Suivre en temps réel la consommation d'eau des différents équipements de votre hôtel ; Être averti en cas de fuite ou de consommation excessive d'eau ; Couper ou activer l'eau à distance »
  - description (alerte SMS ou courriel, présentation de 2023), secteurs : https://www.osmozis.com/blog/alerte-fuite-deau-hotel-hpa-le-bon-reflexe-pour-faire-des-economies-deau/ (2026-09-24) · « Article publié le 31 mars 2023 : si notre dispositif identifie une surconsommation d'eau, le personnel de l'hôtel ou du camping reçoit une alerte par sms ou par email »
  - departements : https://www.osmozis.com/nos-references/ (2026-09-24) · « Environ 2600 sites équipés en Europe [...] Répartis en France, Espagne, Italie, Pays Bas, Allemagne »

### PREST_HOT_018 · Odalie (groupe Saur)

installateur · secteurs ['hotellerie'] · départements national · statut brouillon

Filiale de Saur, installée au siège du groupe à Issy-les-Moulineaux, qui propose aux bâtiments, hôtels compris, des solutions de suivi et de réutilisation de l'eau. Pour le suivi, son offre Mira fournit des sous-compteurs connectés à brancher sans travaux et un réseau de télérelève, puis un tableau de bord qui détaille les consommations par pièce, par bâtiment ou par site, avec alertes de fuite en temps réel et rapports automatisés ; elle propose aussi Aquapod, une unité de traitement des eaux grises pour les chasses d'eau, l'arrosage et le nettoyage extérieur. Offre commerciale, sur contact avec un responsable commercial régional.

- Mesures : ACT_HOT_007 [materiel], ACT_AGR_001 [materiel]
- site_internet : https://odalie.eu/
- adresse : 11 Chemin de Bretagne, 92130 Issy-les-Moulineaux
- linkedin : https://fr.linkedin.com/company/odalie
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Saur&departement=92 (2026-09-24) · « SAUR, siren 339379984, siret 33937998405975, siège, 11 CHEMIN DE BRETAGNE 92130 ISSY-LES-MOULINEAUX, activité 36.00Z, état administratif A »
  - siret (absence d'entité Odalie propre au groupe Saur) : https://recherche-entreprises.api.gouv.fr/search?q=Odalie&departement=92 (2026-09-24) · « Recherche « Odalie » dans le 92 : aucun résultat. Recherche « Odalie Saur » : aucun résultat. Recherche « Odalie » sans département : aucune entité à l'adresse de Saur. »
  - siret : https://odalie.eu/mentions-legales/ (2026-09-24) · « Société Saur, société par actions simplifiée [...] 339 379 984 RCS Nanterre [...] 11, Chemin de Bretagne, 92130 Issy Les Moulineaux »
  - contacts, description : https://odalie.eu/contact/ (2026-09-24) · « SAUR - Odalie, 11 Chemin de Bretagne, 92130 Issy Les Moulineaux. Responsables commerciaux par région (HDF & IDF, Nord-Ouest, Nouvelle-Aquitaine, Occitanie, PACA, AURA). LinkedIn : fr.linkedin.com/company/odalie »
  - departements, description (filiale de Saur) : https://odalie.eu/ (2026-09-24) · « Odalie est une filiale de Saur [...] accompagne les acteurs du bâtiment dans leur transition hydrique [...] une présence nationale [...] des équipes présentes partout en France »
  - secteurs, description, expertises, mesures (ACT_HOT_007 materiel), categories : https://odalie.eu/vos-projets/vos-projets-hotellerie/ (2026-09-24) · « Mira, suivi des consommations : Détectez les fuites et les surconsommations en temps réel. Suivez vos consommations depuis un tableau de bord personnalisé. Paramétrez vos rapports automatisés et votre budget prévisionnel. Aquapod : réutilisation des eaux grises [...] chasses d'eau, irrigation, nettoyage extérieur »
  - expertises, mesures (ACT_AGR_001 materiel, ACT_HOT_007 materiel), description, type : https://odalie.eu/nos-solutions/mira/ (2026-09-24) · « 01 Cartographie. Mise en place de l'infrastructure de collecte des données : Digitalisation du plan de comptage, Installation de sous compteurs, Mise en place du réseau de télérelève. [...] Installation sans travaux dans tout type de bâtiment [...] vue détaillée de vos consommations : par pièce, par bâtiment, ou par site entier. [...] Hôtellerie »
  - expertises, categories, description : https://odalie.eu/nos-solutions/aquapod/ (2026-09-24) · « La récupération des eaux de salles de bains et des piscines [...] pour les usages non destinés à la consommation humaine, à savoir les chasses d'eau, l'arrosage des espaces verts et le nettoyage des espaces extérieurs [...] hôtels ou campings [...] Fabriqué en France »

### PREST_HOT_019 · CCI de région Bretagne (programme ECODO PRO)

chambre_consulaire · secteurs ['hotellerie'] · départements ['22', '29', '35', '56'] · statut brouillon

Chambre de commerce et d'industrie de région Bretagne, qui porte le programme régional d'économies d'eau ECODO PRO, animé par Bretagne Compétitivité, association de développement économique pilotée par les CCI bretonnes. Un conseiller (Bretagne Compétitivité ou CCI) réalise un état des lieux avec diagnostic et recommandations personnalisées, vous accompagne sur la réglementation, les financements et les solutions techniques, et vous aide à élaborer un plan d'actions ; le programme organise aussi des ateliers inter-entreprises et des webinaires, et publie une fiche de pratiques hydro-économes dédiée aux hôtels. Réservé aux entreprises bretonnes, sur candidature, pour 1 à 4 jours d'accompagnement avec un reste à charge de 90 à 240 € HT par jour selon l'effectif.

- Mesures : ACT_AGR_002 [conseil_etude]
- site_internet : https://www.bretagne-competitivite.fr/ecodopro/
- mail : ecodo@bretagne-competitivite.fr
- tel : 02 99 25 41 70
- adresse : 1A rue Louis Braille, 35136 Saint-Jacques-de-la-Lande
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=chambre%20de%20commerce%20et%20d%27industrie%20de%20region%20Bretagne&departement=35 (2026-09-24) · « CHAMBRE DE COMMERCE ET D'INDUSTRIE DE REGION BRETAGNE (CCIR), siren 183500040, siret 18350004000310, siège, 1 A RUE LOUIS BRAILLE 35136 SAINT-JACQUES-DE-LA-LANDE, nature juridique 7381, état administratif A »
  - type, description, expertises, mesures (ACT_AGR_002), categories (sensibiliser_former : ateliers inter-entreprises, webinaires), contacts (site, mail, tel) : https://www.bretagne-competitivite.fr/ecodopro/ (2026-09-24) · « Un état des lieux avec un diagnostic et des recommandations personnalisées à mettre en place. Un accompagnement individuel spécifique : réglementation, financements, solutions techniques…. Des accompagnements collectifs pour monter en compétence (ateliers inter-entreprises, webinaires). […] De 1 à 4 jours selon la nature des projets. […] 90 € HT / jour d'accompagnement (- de 50 salariés) 180 € HT / jour d'accompagnement (50 à 250 salariés) 240 € HT / jour d'accompagnement (+ de 250 salariés) Accompagnements réservés aux entreprises bretonnes […] Bénéficiez de l'accompagnement d'ECODO PRO par l'un de nos conseillers (Bretagne Compétitive / CCI) […] ECODO PRO, le programme de la CCI de Bretagne, animé par Bretagne Compétitivité. […] ecodo@bretagne-competitivite.fr […] +33(0)2 99 25 41 70 »
  - description (Bretagne Compétitivité), contacts (adresse, tel) : https://www.bretagne-competitivite.fr/contactez-nous/ (2026-09-24) · « 1A Rue Louis Braille (CCI Bretagne), 35136 Saint-Jacques-de-la-Lande. +33(0)2 99 25 41 70. Bretagne Compétitivité, est une association loi 1901 de développement économique, pilotée par un directoire de 8 élus désignés par les CCI territoriales et par la CCI de région. »
  - departements, mesures (ACT_AGR_002), description (plan d'actions) : https://www.bretagne-economique.com/actualites/ecodopro-programme-danticipation-pour-securiser-lapprovisionnement-en-eau/ (2026-09-24) · « […] programme Ecodo'Pro, initié par la préfecture du Morbihan en 2019, déployé depuis régionalement par le réseau des CCI bretonnes […] la cartographie des process et des solutions hydroéconomes et enfin, l'élaboration d'un plan d'actions potentiellement financées […] Solliciter le conseiller CCI référent Ecodo'Pro de votre département […] Côtes d'Armor (22) Finistère (29) Ille-et-vilaine (35) Morbihan (56). (Maude Duval, le 22 juillet 2026) »
  - description (fiche hôtels) : https://www.bretagne-competitivite.fr/wp-content/uploads/2025/06/ECODO-Fiche-BP_Hotels.pdf (2026-09-24) · « ÉCOD'O, un programme d'actions pour économiser l'eau dans les entreprises. Pratiques hydro-économes hôtels. 7 recommandations pour réduire vos consommations d'eau. Contact : chargé de mission transition écologique, CCI Côtes d'Armor. »

## Aides

### AIDE_HOT_001 · Soutien à l'hébergement touristique (Région Sud)

subvention · secteurs ['hotellerie'] · départements ['04', '05', '06', '13', '83', '84'] · agences toutes · statut brouillon

Financeur : Région Provence-Alpes-Côte d'Azur (Région Sud) · 50 % des dépenses éligibles · plafond 100 000 € de subvention, pour un minimum de 15 000 € de dépenses éligibles

Subvention d'investissement de la Région Sud aux hébergements touristiques qui engagent des travaux favorisant une meilleure performance environnementale. Sont éligibles les travaux spécifiques ayant trait à la gestion environnementale et à la réduction des consommations de fluides. Le même dispositif finance aussi l'accessibilité, le logement des saisonniers et, à d'autres conditions, la montée en gamme.

Éligibilité : Établissements recevant du public situés en Provence-Alpes-Côte d'Azur, dont l'hôtellerie traditionnelle indépendante, l'hôtellerie de plein air, les gîtes de groupe et les villages et centres de vacances. Sont exclus les chambres d'hôte, les meublés de tourisme, les gîtes ruraux et les particuliers.

- Mesures : ACT_HOT_001, ACT_AGR_006
- **avertissement** : Le dossier doit être déposé sur la plateforme régionale avant le démarrage des travaux et aménagements liés au projet.
- **avertissement** : Le montant minimum des dépenses éligibles est de 15 000 €. Par déduction (la Région ne le dit pas), un achat isolé de petits équipements hydro-économes risque de ne pas atteindre ce seuil : mieux vaut l'intégrer à un programme de travaux plus large.
- **info** : Une prime Développement Durable de 5 000 € (subvention inférieure à 50 000 €) ou 10 000 € (subvention supérieure à 50 000 €) peut s'ajouter sur justification de l'obtention ou du renouvellement d'un label environnemental (Clef verte, Ecolabel européen, Green Globe, certifications AFNOR, normes ISO, etc.). Elle est versée au solde du dossier.
- **info** : Les dossiers se déposent toute l'année et sont instruits par ordre d'arrivée. La Région recommande un échange préalable avec ses services pour vérifier l'éligibilité : 0 805 805 145 (appel gratuit, du lundi au vendredi) ou relationentrepriseusager@maregionsud.fr.
- **ressource** : Page du dispositif sur le site de la Région Sud (https://www.maregionsud.fr/vos-aides/detail/soutien-a-lhebergement-touristique)
- **ressource** : Dépôt de la demande sur la plateforme d'aides en ligne de la Région Sud (https://aidesenligne.maregionsud.fr/aides/#/crsud/connecte/F_S_I_SOUTHEB/depot/simple)
- Sources :
  - taux, plafond (taux retenu) : https://www.maregionsud.fr/vos-aides/detail/soutien-a-lhebergement-touristique (2026-09-24) · « L'aide régionale prend la forme d'une subvention d'investissement plafonnée à 100 000 euros correspondant à 50% du montant total des dépenses éligibles. Le montant minimum des dépenses éligibles est fixé à 15 000 euros »
  - taux (divergence, non retenu) : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/soutien-hebergement-touristique (2026-09-24) · « Jusqu'à 60% des dépenses éligibles, dans un maximum de 100 000 € (la page de la Région, financeur, indique 50 % : c'est ce taux qui est retenu) »
  - description : https://www.maregionsud.fr/vos-aides/detail/soutien-a-lhebergement-touristique (2026-09-24) · « Sont éligibles, les travaux spécifiques ayant trait à : La gestion environnementale et la réduction des consommations de fluides ainsi que les équipements pour l'accueil des clientèles vélo touristiques »
  - mesures : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/soutien-hebergement-touristique (2026-09-24) · « Quelques projets liés : [...] économiseur d'eau [...] eau de pluie (étiquettes de Mission Transition Écologique ; la page de la Région ne cite que « la réduction des consommations de fluides », sans nommer l'eau) »
  - eligibilite : https://www.maregionsud.fr/vos-aides/detail/soutien-a-lhebergement-touristique (2026-09-24) · « Sont éligibles les Etablissements Recevant du Public à savoir : L'hôtellerie traditionnelle indépendante, L'hôtellerie de plein air, Les gîtes de groupe [...] Sont exclues : Les chambres d'hôte, Les meublés de tourisme, Les gîtes ruraux, Les particuliers »
  - departements : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/soutien-hebergement-touristique (2026-09-24) · « Secteur géographique : Provence-Alpes-Côte d'Azur »
  - infos_complementaires : https://www.maregionsud.fr/vos-aides/detail/soutien-a-lhebergement-touristique (2026-09-24) · « Les dossiers de demande doivent être transmis de manière dématérialisée sur la plateforme régionale avant le démarrage des travaux et aménagements liés au projet. [...] Les dossiers peuvent être déposés tout au long de l'année. Leur analyse sera faite chronologiquement, par ordre d'arrivée. »
  - infos_complementaires : https://www.maregionsud.fr/vos-aides/detail/soutien-a-lhebergement-touristique (2026-09-24) · « Prime de 5 000 euros pour les projets bénéficiant d'un montant de subvention inférieur à 50 000 euros. Prime de 10 000 euros pour les projets bénéficiant d'un montant de subvention supérieur à 50 000 euros. Cette prime est versée au moment du solde du dossier »
  - infos_complementaires : https://www.maregionsud.fr/vos-aides/detail/soutien-a-lhebergement-touristique (2026-09-24) · « Permanence téléphonique du lundi au vendredi de 8h30 à 12h00 et de 13h30 à 17h00 au 0 805 805 145 (services et appels gratuits) ou par courriel à relationentrepriseusager@maregionsud.fr »

### AIDE_HOT_002 · CAP Tourisme, aide aux projets d'hébergements touristiques (Région Centre-Val de Loire)

subvention · secteurs ['hotellerie'] · départements ['18', '28', '36', '37', '41', '45'] · agences toutes · statut brouillon

Financeur : Région Centre-Val de Loire · 20 % du coût éligible pour les travaux relevant d'une démarche écoresponsable · plafond 20 000 € pour les travaux relevant d'une démarche écoresponsable ; bonification forfaitaire de 7 000 € pour l'adhésion à un écolabel dans le cadre du projet

Subvention régionale aux projets de création, rénovation, modernisation ou extension d'hébergements touristiques. Parmi ses postes, le volet « démarche écoresponsable » finance les travaux préconisés par une étude ou un diagnostic environnemental, sur des thèmes qui incluent l'économie d'eau, la biodiversité et l'adaptation au changement climatique. Le même dispositif aide aussi les travaux structurels et les travaux d'amélioration énergétique.

Éligibilité : TPE et PME exerçant en Centre-Val de Loire et immatriculées au Registre national des entreprises (RNE), hors régime fiscal de la micro-entreprise, pour un hôtel ou un hôtel-restaurant classé après les travaux. Sont exclus les hôtels appartenant à une chaîne intégrée ou à un groupe propriétaire-exploitant de plus de 5 établissements.

- Mesures : ACT_HOT_001
- **info** : La Région ne cite pas d'équipement précis : le lien avec les équipements hydro-économes repose sur le thème « économie d'eau » du volet écoresponsable. Seuls sont éligibles les travaux que le diagnostic environnemental préconise.
- **avertissement** : Le diagnostic environnemental préalable est obligatoire et n'est pas financé par le dispositif. Seuls les travaux mentionnés dans son compte-rendu sont éligibles, et vous devez adresser à la Région la liste des actions que vous vous engagez à réaliser dans un délai de 5 ans.
- **avertissement** : Aucun devis ne doit être signé et aucun acompte versé avant le dépôt du dossier sur le portail AIDEN : tout engagement antérieur rend la demande inéligible. Les devis doivent dater de moins de 6 mois et ne pas être signés.
- **avertissement** : Les équipements non fixes (petits équipements, mobilier, etc.) et les dépenses d'entretien courant sont exclus des dépenses éligibles.
- **info** : La démarche commence par un contact avec la chargée ou le chargé de mission Économie de proximité/Tourisme de la Maison de Région de votre département, puis une fiche-contact, un entretien avec la Direction du Tourisme et enfin le dépôt sur le portail AIDEN. Délai de traitement moyen indiqué par la Région : 2 à 3 mois.
- **info** : Un même bénéficiaire ne peut obtenir qu'une aide de ce dispositif en trois ans, et l'aide n'est pas cumulable avec une autre aide régionale sur les mêmes dépenses. Les hôtels de plus de 30 chambres sont examinés en priorité au titre du programme FEDER.
- **ressource** : Page du dispositif dans le guide des aides de la Région, avec les coordonnées des référents par département (https://www.centre-valdeloire.fr/le-guide-des-aides-de-la-region-centre-val-de-loire/aide-aux-projets-dhebergements-touristiques)
- **ressource** : Présentation synthétique du dispositif CAP Tourisme 2026 (PDF) (https://www.centre-valdeloire.fr/sites/default/files/media/document/2026-06/PRESENTATION%20SYNTHETIQUE%20DISPOSITIF%20CAP%20TOURISME_HEBERGEMENT%20TOURISTIQUE%202026_v2.pdf)
- **ressource** : Fiche-contact de présentation du projet 2026 (Word) (https://www.centre-valdeloire.fr/sites/default/files/media/document/2026-06/FICHE-CONTACT%20PRESENTATION%20PROJET%20D%27HEBERGEMENT%20TOURISTIQUE%202026_v2.docx)
- Sources :
  - taux, plafond : https://www.centre-valdeloire.fr/le-guide-des-aides-de-la-region-centre-val-de-loire/aide-aux-projets-dhebergements-touristiques (2026-09-24) · « Travaux relatifs à une démarche écoresponsable (hors travaux d'amélioration thermique et énergétique des bâtiments), préconisés par une étude ou un diagnostic environnemental (non pris en charge par le CAP « Tourisme ») : subvention, plafonnée à 20 000 €, taux de 20 % du coût éligible. Bonification forfaitaire de 7 000 € accordée pour l'adhésion à un écolabel dans le cadre du projet d'hébergement touristique. »
  - description, mesures, infos_complementaires (lien par thème) : https://www.centre-valdeloire.fr/le-guide-des-aides-de-la-region-centre-val-de-loire/aide-aux-projets-dhebergements-touristiques (2026-09-24) · « L'aide aux travaux écoresponsables préconisés par un diagnostic environnemental (non pris en charge par le CAP « Tourisme ») : restauration durable, déchets, biodiversité, économie d'eau, adaptation au changement climatique, etc. »
  - infos_complementaires (travaux du compte-rendu, engagement à 5 ans) : https://www.centre-valdeloire.fr/sites/default/files/media/document/2026-06/PRESENTATION%20SYNTHETIQUE%20DISPOSITIF%20CAP%20TOURISME_HEBERGEMENT%20TOURISTIQUE%202026_v2.pdf (2026-09-24) · « L’étude ou le diagnostic devra comprendre la liste des actions potentielles préconisées, ainsi que la liste des actions que le chef d’entreprise s’engage à réaliser dans un délai de 5 ans et seront à adresser à la Région. ; Sont éligibles : Les travaux/investissements mentionnés dans le compte -rendu du diagnostic/étude environnementale. (texte extrait avec pypdf, pages 3 et 5) »
  - eligibilite (TPE/PME, activité en région, RNE, hôtellerie classée) : https://www.centre-valdeloire.fr/le-guide-des-aides-de-la-region-centre-val-de-loire/aide-aux-projets-dhebergements-touristiques (2026-09-24) · « TPE/PME* quel que soit son statut, à l'exception des entreprises relevant du régime fiscal de la micro-entreprise ; Le bénéficiaire de l'aide régionale doit exercer son activité en Région Centre-Val de Loire et, pour les entreprises et assimilées, être immatriculé au Registre National des Entreprises (RNE). ; Hôtellerie classée* ; * Classée/Labellisée : après travaux de création/rénovation/modernisation/extension/développement »
  - eligibilite (exclusion des chaînes et groupes) : https://www.centre-valdeloire.fr/sites/default/files/media/document/2026-06/PRESENTATION%20SYNTHETIQUE%20DISPOSITIF%20CAP%20TOURISME_HEBERGEMENT%20TOURISTIQUE%202026_v2.pdf (2026-09-24) · « Sont exclus du dispositif CAP « Tourisme » : ▪ Les établissements -Hôtellerie, Hôtellerie-Restaurant, Hôtellerie de plein air - appartenant à une chaîne intégrée ou à un groupe propriétaire-exploitant de plus de 5 établissements (texte extrait avec pypdf, page 2) »
  - infos_complementaires (dépôt avant engagement, devis) : https://www.centre-valdeloire.fr/le-guide-des-aides-de-la-region-centre-val-de-loire/aide-aux-projets-dhebergements-touristiques (2026-09-24) · « L'aide régionale doit être sollicitée avant tout démarrage du projet (signature de devis, versement d'acompte aux entreprises qui réalisent les travaux, démarrage des travaux, etc.) sous peine d'inéligibilité de la demande. ; Le dépôt doit impérativement précéder tout engagement financier et/ou démarrage des travaux (devis de moins de 6 mois, non signés, etc.) »
  - infos_complementaires (exclusions de dépenses) : https://www.centre-valdeloire.fr/sites/default/files/media/document/2026-06/PRESENTATION%20SYNTHETIQUE%20DISPOSITIF%20CAP%20TOURISME_HEBERGEMENT%20TOURISTIQUE%202026_v2.pdf (2026-09-24) · « Sont exclus des dépenses éligibles : ▪ Les dépenses à caractère obligatoire issues d’une contrainte législative ou réglementaire ainsi que les dépenses d’entretien courant, [...] ▪ Les équipements non fixes (petits équipements, mobilier, literie, penderie, télévision, décoration…), (texte extrait avec pypdf, page 5) »
  - infos_complementaires (démarche, délai) : https://www.centre-valdeloire.fr/le-guide-des-aides-de-la-region-centre-val-de-loire/aide-aux-projets-dhebergements-touristiques (2026-09-24) · « Étape 1 : Prise de contact avec la Maison de Région Centre-Val de Loire (MRCVL) ; Étape 2 : Entretien avec la Direction du Tourisme (Siège Régional) ; Étape 3 : Dépôt de la demande d'aide financière sur le Portail AIDEN ; Délai de traitement moyen : environ 2 à 3 mois »
  - infos_complementaires (cumul, FEDER) : https://www.centre-valdeloire.fr/le-guide-des-aides-de-la-region-centre-val-de-loire/aide-aux-projets-dhebergements-touristiques (2026-09-24) · « elle n'est pas cumulable avec une autre aide régionale sur les mêmes dépenses ; Les demandes de financement des projets d'hébergements comportant plus de 30 chambres (hôtellerie) [...] seront prioritairement examinées dans le cadre du programme FEDER »
  - infos_complementaires (une aide en trois ans) : https://www.centre-valdeloire.fr/sites/default/files/media/document/2026-06/PRESENTATION%20SYNTHETIQUE%20DISPOSITIF%20CAP%20TOURISME_HEBERGEMENT%20TOURISTIQUE%202026_v2.pdf (2026-09-24) · « Les aides régionales ne présentent aucun caractère d’automaticité. Un même bénéficiaire ne peut se voir octroyer qu’une seule aide dans le cadre de ce dispositif dans un délai de trois ans. (texte extrait avec pypdf, page 5) »
  - departements : https://www.centre-valdeloire.fr/le-guide-des-aides-de-la-region-centre-val-de-loire/aide-aux-projets-dhebergements-touristiques (2026-09-24) · « Le bénéficiaire de l'aide régionale doit exercer son activité en Région Centre-Val de Loire ; il existe une MRCVL par département »

### AIDE_HOT_003 · Pays de la Loire AGIR Tourisme (Région Pays de la Loire)

pret · secteurs ['hotellerie'] · départements ['44', '49', '53', '72', '85'] · agences toutes · statut brouillon

Financeur : Région Pays de la Loire · Prêt à 2,4 % TEG sur 24 à 120 mois. Pour un projet de nature à réduire de manière substantielle les consommations en eau, prêt à 1,2 % TEG possible, et subvention possible liée à un prêt régional. Le niveau des taux peut faire l'objet d'une révision. · plafond Prêt à partir de 5 000 €, limité au montant des prêts bancaires obtenus. Hôtels de Nantes, Angers et Le Mans : prêt de 100 000 € au maximum. Plancher de dépenses éligibles : 30 000 € pour l'hôtellerie.

Soutien régional « sur-mesure » aux projets touristiques de création, d'extension ou de modernisation engagés dans une démarche concrète de transition écologique, prioritairement sous forme de prêts. Un projet par essence « transition écologique », comme des équipements d'économies d'eau et d'énergie, bénéficie d'un soutien optimisé. Un projet de nature à réduire de manière substantielle les consommations en eau peut bénéficier d'un prêt à 1,2 % TEG et d'une subvention liée, après instruction : l'aide n'est jamais attribuée automatiquement.

Éligibilité : Hôtels et résidences hôtelières des Pays de la Loire classés 2 étoiles minimum (normes 2022, au plus tard 12 mois après la fin des travaux), de 6 chambres au minimum, portés par une TPE, une PME ou une ETI inscrite au RCS, propriétaire du fonds de commerce de l'établissement et organisée sous forme sociétaire « dans un délai minimal de 2 ans » (forme associative possible à défaut). L'hôtellerie « économique » 0 ou 1 étoile n'est pas éligible.

- Mesures : ACT_HOT_001
- **avertissement** : Le dossier complet doit être déposé sur le portail des aides avant l'engagement des dépenses, et le règlement précise que les investissements ne peuvent être engagés avant l'accord de la Région.
- **info** : Le plancher de dépenses éligibles est de 30 000 € pour l'hôtellerie : des équipements hydro-économes (mousseurs, douchettes, chasses) se financent en pratique au sein d'un projet de rénovation ou de modernisation plus large atteignant ce montant.
- **info** : Une étude de faisabilité économique est demandée pour tous les projets, et un diagnostic environnemental est obligatoire au-delà de 500 000 € d'investissement. Une étude confiée à un cabinet extérieur peut être subventionnée à 30 % (15 000 € au maximum) par le dispositif « Pays de la Loire Conseil ».
- **info** : Le soutien n'est pas cumulable avec un autre dispositif régional sur la même assiette d'investissements. Les soutiens sont priorisés pour les hôtels situés en secteur rural ou littoral.
- **ressource** : Page du dispositif sur le site de la Région (https://www.paysdelaloire.fr/les-aides/pays-de-la-loire-agir-tourisme)
- **ressource** : Règlement d'intervention AGIR Tourisme 2025 (https://www.paysdelaloire.fr/sites/default/files/aides/2ae4eace-0470-11ee-baf5-23743e123976/subvention%2Cpret_ri-2025-agir-tourisme_2ae4eace_ri.pdf)
- **ressource** : Déposer une demande sur le portail des aides de la Région (https://les-aides.paysdelaloire.fr/aides/#/prod/connecte/F_AGIR_TOURISME/depot/simple)
- Sources :
  - taux, type : https://www.paysdelaloire.fr/les-aides/pays-de-la-loire-agir-tourisme (2026-09-24) · « Bénéficiaires privés : soutien prioritaire par prêts à 2,4% TEG, durées de 24 à 120 mois [...] Soutiens possibles pour les projets [...] proposant un projet de nature à réduire de manière substantielle les consommations en eau [...] Prêt à 1,2% TEG [...] Subvention : liée à un prêt régional »
  - taux, description : https://www.paysdelaloire.fr/sites/default/files/aides/2ae4eace-0470-11ee-baf5-23743e123976/subvention%2Cpret_ri-2025-agir-tourisme_2ae4eace_ri.pdf (2026-09-24) · « NB : le niveau des taux peut faire l'objet d'une révision. [...] La conformité du projet aux critères d'éligibilité et de sélection n'entraîne pas l'attribution automatique de l'aide sollicitée. »
  - plafond : https://www.paysdelaloire.fr/sites/default/files/aides/2ae4eace-0470-11ee-baf5-23743e123976/subvention%2Cpret_ri-2025-agir-tourisme_2ae4eace_ri.pdf (2026-09-24) · « Montants des prêts régionaux : variables selon les besoins (à partir de 5 000 € [...]) ; Les montants des soutiens régionaux ne peuvent dépasser les montants de prêts bancaires obtenus ; Le soutien des projets hôteliers des grandes métropoles régionales (Nantes, Angers et Le Mans), sera limité à des prêts d'un montant maximum de 100 000 € »
  - plafond, infos_complementaires : https://www.paysdelaloire.fr/les-aides/pays-de-la-loire-agir-tourisme (2026-09-24) · « Planchers des dépenses éligibles : Hôtellerie, HPA, Gastronomie d'excellence, Centres de vacances, Tourisme équestre, Agritourisme et œnotourisme. 30 000 € »
  - description, mesures, categories, infos_complementaires : https://www.paysdelaloire.fr/sites/default/files/aides/2ae4eace-0470-11ee-baf5-23743e123976/subvention%2Cpret_ri-2025-agir-tourisme_2ae4eace_ri.pdf (2026-09-24) · « Projet par essence « transition écologique » (ex : isolation thermique, équipements d'économies d'eau et d'énergie…) : soutien optimisé »
  - description : https://www.paysdelaloire.fr/les-aides/pays-de-la-loire-agir-tourisme (2026-09-24) · « Sont visé des projets de création, d'extension, de modernisation ou de toute autre innovation, portés par les acteurs du tourisme et présentant un engagement dans une démarche concrète de transition écologique. »
  - eligibilite : https://www.paysdelaloire.fr/sites/default/files/aides/2ae4eace-0470-11ee-baf5-23743e123976/subvention%2Cpret_ri-2025-agir-tourisme_2ae4eace_ri.pdf (2026-09-24) · « hôtels et résidences hôtelières classés (niveau de classement 2 étoiles minimum, normes 2022, sous 12 mois maximum après la fin des travaux) de 6 chambres au minimum [...] Ne sont pas éligibles les projets relatifs à l'hôtellerie « économique » 0/1 étoile. [...] TPE, PME au sens de la définition européenne [...] ou ETI »
  - eligibilite : https://www.paysdelaloire.fr/sites/default/files/aides/2ae4eace-0470-11ee-baf5-23743e123976/subvention%2Cpret_ri-2025-agir-tourisme_2ae4eace_ri.pdf (2026-09-24) · « inscrite au Registre du Commerce et des Sociétés, propriétaire du fonds de commerce de l'établissement concerné par le projet, organisée sous une forme sociétaire dans un délai minimal de 2 ans. [...] possibilité d'organisation sous forme associative (si l'entreprise n'est pas constituée sous forme sociétaire) »
  - departements : https://www.paysdelaloire.fr/sites/default/files/aides/2ae4eace-0470-11ee-baf5-23743e123976/subvention%2Cpret_flyer2025_2ae4eace_annexe-2.pdf (2026-09-24) · « CONTACT tourisme@paysdelaloire.fr pour le 44-53-72 : 02 28 20 51 41 pour le 49-85 : 02 28 20 59 51 »
  - infos_complementaires : https://www.paysdelaloire.fr/les-aides/pays-de-la-loire-agir-tourisme (2026-09-24) · « Le dossier complet de demande d'aide doit être déposé sur ce portail des aides avant l'engagement des dépenses. [...] Subvention « Pays de la Loire - Conseil » si expertise extérieure (30% / 15 k€ max) »
  - infos_complementaires : https://www.paysdelaloire.fr/sites/default/files/aides/2ae4eace-0470-11ee-baf5-23743e123976/subvention%2Cpret_ri-2025-agir-tourisme_2ae4eace_ri.pdf (2026-09-24) · « Les investissements liés aux projets présentés ne peuvent être engagés avant accord de la Région [...] Cette étude est obligatoire pour les projets supérieurs à 500 000 € [...] Une exclusion de cumul de soutien par ce dispositif et un autre dispositif régional sur la même assiette d'investissements [...] Les soutiens régionaux seront priorisés pour les projets en secteur rural ou littoral »

### AIDE_HOT_004 · Pass Transformation Écologique (Région Occitanie)

subvention · secteurs ['hotellerie'] · départements ['09', '11', '12', '30', '31', '32', '34', '46', '48', '65', '66', '81', '82'] · agences toutes · statut brouillon

Financeur : Région Occitanie / Pyrénées-Méditerranée · 35 % des dépenses éligibles · plafond Subvention plafonnée à 8 000 €, pour une assiette éligible d'au moins 5 000 € ; chaque dépense doit atteindre 1 000 € HT

Subvention d'investissement de la Région Occitanie pour les petites entreprises qui engagent des travaux d'amélioration écologique : gestion de l'eau et des déchets, sobriété énergétique, chaleur et froid renouvelables, digitalisation. Côté eau, la liste des dépenses éligibles cite les systèmes de récupération des eaux de pluie et les systèmes de réutilisation des eaux usées. Les entreprises du tourisme ont en plus accès aux dépenses de végétalisation et de désimperméabilisation des sols. Seul le matériel neuf ou d'occasion garanti au moins 6 mois et immobilisable est retenu, dans un programme d'investissement de 12 mois au plus.

Éligibilité : Entreprises touristiques inscrites au RCS (hors auto-entrepreneurs) d'au moins un salarié et de moins de 50 salariés, ayant un premier bilan sur 12 mois, avec siège ou établissement en Occitanie, hors territoires des Métropoles et hors zones d'activités ou commerciales. Les hôtels doivent être classés au moins 2 étoiles : sont exclus les hôtels non classés ou classés 1 étoile, et les hôtels appartenant à des chaînes intégrées ou franchisés.

- Mesures : ACT_AGR_006
- **avertissement** : La demande doit être déposée sur la plateforme « Mes aides en ligne » avant tout commencement d'exécution de l'opération. L'aide n'est pas automatique : chaque demande passe une expertise technique et dépend des crédits disponibles.
- **avertissement** : Chaque dépense doit atteindre 1 000 € HT et être immobilisable : les petits équipements achetés à l'unité ne sont pas retenus, pas plus que le crédit-bail. Un seul Pass Transformation Écologique est accordé tous les 3 ans, et il n'est pas cumulable avec le dispositif économie de proximité.
- **info** : Le dossier est préparé avec un conseiller de l'agence régionale Ad'Occ, qui remet une fiche de qualification à joindre. Pour les dépenses liées à l'eau, vous devez fournir un document justifiant les économies d'eau attendues chaque année en m3. Pièces propres à l'hébergement : attestation de classement à 2 étoiles au minimum, et résultat de l'autodiagnostic Impact score.
- **info** : Pour les seules entreprises du tourisme, la fiche du dispositif cite aussi les dépenses de végétalisation et de désimperméabilisation des sols ; elle ne cite ni l'arrosage au goutte-à-goutte ni le choix des essences.
- **info** : La fiche du dispositif mise à jour en juin 2026 fixe le taux à 35 % et le plafond à 8 000 € pour une assiette minimale de 5 000 €. Des pages plus anciennes reprennent la version précédente de la fiche (taux de 50 %, plafond de 10 000 €, assiette minimale de 10 000 €) : fiez-vous à la fiche en vigueur.
- **ressource** : Page du dispositif sur le site de la Région Occitanie (renseignements au 3010, appel gratuit) (https://www.laregion.fr/Pass-Transformation-Ecologique)
- **ressource** : Fiche détaillée du dispositif sur le Hub Entreprendre Occitanie (https://hubentreprendre.laregion.fr/financement/pass-transformation-ecologique)
- **ressource** : Fiche du dispositif en PDF (mise à jour 06/2026) : dépenses éligibles, exclusions et pièces justificatives (https://api.hubentreprendre.laregion.fr/fichiers-dispositifs/ea70243c-22c7-4afe-a37d-09f8a8ff46be)
- Sources :
  - taux, plafond : https://api.hubentreprendre.laregion.fr/fichiers-dispositifs/ea70243c-22c7-4afe-a37d-09f8a8ff46be (2026-09-24) · « Mise à jour : 06/2026 [...] Taux d'intervention : 35% des dépenses éligibles. Montant : subvention plafonnée à 8 000 € avec une assiette éligible min. de 5 000 € »
  - description, mesures (ACT_AGR_006) : https://api.hubentreprendre.laregion.fr/fichiers-dispositifs/ea70243c-22c7-4afe-a37d-09f8a8ff46be (2026-09-24) · « Economie circulaire et gestion des déchets : • Système de récupération des eaux de pluie • Système de réutilisation des eaux usées »
  - description, infos_complementaires (végétalisation) : https://api.hubentreprendre.laregion.fr/fichiers-dispositifs/ea70243c-22c7-4afe-a37d-09f8a8ff46be (2026-09-24) · « Dépenses éligibles complémentaires uniquement pour les entreprises relevant du tourisme : Dépenses de végétalisation et des-imperméabilisation des sols »
  - description, plafond, infos_complementaires : https://api.hubentreprendre.laregion.fr/fichiers-dispositifs/ea70243c-22c7-4afe-a37d-09f8a8ff46be (2026-09-24) · « Les dépenses éligibles sont constituées des dépenses d'investissement en matériel neuf et/ou d'occasion, garantis 6 mois min. avec un montant minimal unitaire de chaque dépense de 1000 € HT. [...] programme d'investissement de 12 mois max. »
  - eligibilite : https://api.hubentreprendre.laregion.fr/fichiers-dispositifs/ea70243c-22c7-4afe-a37d-09f8a8ff46be (2026-09-24) · « les entreprises touristiques (hors auto-entrepreneurs) enregistrées au Registre du Commerce et des Sociétés dans les secteurs de l'hébergement [...] sont exclus : les hôtels et l'hôtellerie de plein air non classés ou classés 1 étoile au dépôt du dossier, les hôtels appartenant à des chaines intégrées et franchisés [...] les activités situées dans des Zones d'activités et/ou zones commerciales sont également exclues. »
  - eligibilite : https://www.laregion.fr/Pass-Transformation-Ecologique (2026-09-24) · « Entreprises immatriculées et disposant d'un 1er bilan d'activité sur au moins 12 mois, avec au moins un salarié et moins de 50 salariés [...] Les territoires des Métropoles ne sont pas éligibles à ce dispositif. »
  - departements : https://www.laregion.fr/Pass-Transformation-Ecologique (2026-09-24) · « Les entreprises doivent avoir leur siège ou l'établissement concerné sur le territoire Occitanie. »
  - departements : https://api.hubentreprendre.laregion.fr/dispositifs/slug/pass-transformation-ecologique (2026-09-24) · « "operator":{"name":"Région Occitanie Montpellier" [...] "territories":[{"label":"11","departments":"Aude"},{"label":"12","departments":"Aveyron"},{"label":"30","departments":"Gard"},{"label":"31","departments":"Haute-Garonne"},{"label":"32","departments":"Gers"},{"label":"46","departments":"Lot"},{"label":"48","departments":"Lozère"},{"label":"66","departments":"Pyrénées-Orientales"},{"label":"81","departments":"Tarn"},{"label":"82","departments":"Tarn-et-Garonne"},{"label":"65","departments":"Hautes-Pyrénées"},{"label":"09","departments":"Ariège"},{"label":"34","departments":"Hérault"}] (champs id et dates omis) »
  - departements : https://www.laregion.fr/Profil-geographique-et-administratif-du-territoire (2026-09-24) · « Ces derniers sont au nombre de 13 : Ariège, Aude, Aveyron, Gard, Haute-Garonne, Gers, Hérault, Lot, Lozère, Hautes-Pyrénées, Pyrénées-Orientales, Tarn et Tarn-et-Garonne (par ordre alphabétique). »
  - infos_complementaires (avertissements) : https://api.hubentreprendre.laregion.fr/fichiers-dispositifs/ea70243c-22c7-4afe-a37d-09f8a8ff46be (2026-09-24) · « attribution non automatique de l'aide. Un seul Pass Transformation écologique tous les 3 ans. [...] non cumulable avec le dispositif économie de proximité. [...] Sont exclues : le portage de l'opération en crédit-bail et toutes dépenses non immobilisables comptablement. [...] la demande de financement (date de dépôt sur la plateforme dématérialisée « Mes aides en ligne ») devra être antérieure au commencement d'exécution de l'opération. »
  - infos_complementaires (démarche) : https://api.hubentreprendre.laregion.fr/fichiers-dispositifs/ea70243c-22c7-4afe-a37d-09f8a8ff46be (2026-09-24) · « Pour les dépenses liées à la gestion de l'eau, un document devra être transmis justifiant des économies d'eau attendues annuellement en m3 [...] Pour les entreprises d'hébergement touristique : l'attestation de classement à minimum 2 étoiles [...] Le porteur de projet devra être accompagné par un conseiller de l'agence de développement économique de la Région Ad'Occ »
  - infos_complementaires (ancienne version) : https://api.hubentreprendre.laregion.fr/fichiers-dispositifs/735fce67-0154-4e5a-8796-bcfa49102599 (2026-09-24) · « Le PASS Transformation écologique prend la forme d'une subvention d'investissement proportionnelle avec un taux d'intervention de 50% des dépenses éligibles. La subvention Région est plafonnée à 10 000 € sur un programme de dépenses de 12 mois maximum avec une assiette éligible minimale de 10 000 €. »
  - infos_complementaires (ressource, 3010) : https://www.laregion.fr/Pass-Transformation-Ecologique (2026-09-24) · « Composez le 3010 pour contacter la Région Occitanie / Pyrénées-Méditerranée (service et appel gratuits) »

### AIDE_HOT_006 · Financement d'équipements pour des économies d'eau (Fonds mutualisé départemental de revitalisation de l'Oise, CCI Oise)

subvention · secteurs ['hotellerie'] · départements ['60'] · agences toutes · statut brouillon

Financeur : Fonds mutualisé départemental de revitalisation de l'Oise (Préfecture de l'Oise), fonds généraliste géré par la CCI de l'Oise · Jusqu'à 70 % des dépenses éligibles, après un diagnostic eau subventionné 600 € HT · plafond Divergence entre sources : 15 000 € HT d'aide selon la plaquette 2024-2027 de la CCI Oise, 5 000 € HT selon la fiche du dispositif mise à jour le 7 août 2026 (2 lignes d'aide au plus, 700 € HT d'investissement minimum)

Aide en deux étapes du fonds généraliste géré par la CCI de l'Oise. D'abord un diagnostic eau réalisé par un conseiller de la CCI, qui identifie les axes d'amélioration, construit le plan d'actions et prépare le dossier présenté au comité d'engagement. Ensuite une subvention aux équipements des locaux professionnels, par lignes : petits équipements (mousseurs et réducteurs sous 7 L/min, mitigeurs thermostatiques, pommeaux de douche économes sous 8 L/min, boutons poussoirs, chasses d'eau double flux, compteur divisionnaire), étude d'économie d'eau par un cabinet expert, rénovation du réseau (détection et réparation des fuites), gestion des eaux de pluie (récupérateur, usage pour les WC, douches ou machines à laver) et procédés ou équipements moins consommateurs.

Éligibilité : TPE dont l'établissement est situé dans l'Oise et qui disposent de locaux professionnels, hors micro-entrepreneurs et entreprises de prestation intellectuelle. Critère de taille divergent selon les sources : moins de 30 salariés ou moins de 3,5 M€ de chiffre d'affaires selon la plaquette 2024-2027, moins de 30 salariés et moins de 3,5 M€ selon la fiche du dispositif mise à jour en août 2026. Le diagnostic préalable avec un conseiller de la CCI est obligatoire.

- Mesures : ACT_HOT_001, ACT_AGR_001, ACT_AGR_002, ACT_AGR_006
- **avertissement** : Le projet ne doit être éligible à aucune autre aide existante (Région, ADEME, État), et les équipements ne doivent pas avoir été financés par un autre programme régional ou national au cours des deux dernières années.
- **avertissement** : Le plafond d'aide diffère selon les documents de la CCI : 15 000 € HT dans la plaquette 2024-2027, 5 000 € HT dans la fiche détaillée du dispositif mise à jour en août 2026, avec des plafonds par ligne (1 000 € HT pour les petits équipements, 2 000 € HT pour l'étude d'économie d'eau, 3 000 € HT pour la rénovation du réseau, 2 000 € HT pour les eaux de pluie, 5 000 € pour les procédés ou équipements moins consommateurs). Faites confirmer le montant par votre conseiller avant de chiffrer le projet.
- **avertissement** : Le critère de taille diffère lui aussi : la plaquette 2024-2027 vise les TPE de moins de 30 salariés ou de moins de 3,5 M€ de chiffre d'affaires, la fiche détaillée exige moins de 30 salariés et moins de 3,5 M€. Un hôtel qui ne remplit qu'une des deux conditions doit faire confirmer son éligibilité par la CCI.
- **info** : La demande se fait par mail à revitalisation@cci-oise.fr ou au 03 44 79 80 97. Un conseiller de la CCI réalise le diagnostic, aide à monter le dossier et le présente au comité d'engagement composé des services de l'État. L'installation des petits équipements par vos soins est admise.
- **ressource** : Page du Fonds mutualisé départemental de revitalisation de l'Oise sur le site des CCI Hauts-de-France (https://hautsdefrance.cci.fr/solutions/fonds-mutualise-revitalisation-oise/)
- **ressource** : Fiche détaillée du dispositif (lignes d'aide et conditions) sur les-aides.fr, portail des CCI (https://les-aides.fr/aide/cYSP3w/cci-oise/financement-d-equipements-pour-des-economies-d-eau.html)
- **ressource** : Plaquette du fonds généraliste 2024-2027 (CCI Oise) (https://hautsdefrance.cci.fr/content/uploads/sites/6/2022/12/depliant-fmdro-1052024-8.pdf)
- Sources :
  - financeur, departements, periode : https://hautsdefrance.cci.fr/solutions/fonds-mutualise-revitalisation-oise/ (2026-09-24) · « La Préfecture de l'Oise et la CCI Oise ont renouvelé, pour la période 2024-2027, la convention de gestion du Fonds Mutualisé Départemental de Revitalisation de l'Oise (FMDRO). [...] aides aux TPE, PME ( commerce, industrie, services, artisanat, agriculture) sur l'ensemble du département. [...] Financement d'équipement pour des économies d'eau »
  - infos_complementaires (démarche) : https://hautsdefrance.cci.fr/solutions/fonds-mutualise-revitalisation-oise/ (2026-09-24) · « Pour déposer un dossier pour le Fonds Généraliste, prenez contact par mail : revitalisation@cci-oise.fr Selon l'action, un.e conseiller.ère CCI vous accompagnera pour la réalisation du diagnostic, le montage du dossier et le présentera lors du comité d'engagement composé par les services de l'Etat. [...] 03 44 79 80 97 »
  - taux, plafond (15 000 €), eligibilite (TPE, critère « ou ») : https://hautsdefrance.cci.fr/content/uploads/sites/6/2022/12/depliant-fmdro-1052024-8.pdf (2026-09-24) · « A6 : Financement d'équipement pour des économies d'eau [...] L'aide correspondra à 70% du montant et ne peut dépasser 15 000€ HT pour des équipements de locaux professionnels uniquement. Un diagnostic est à réaliser au préalable par un conseiller CCI. S'adresse aux TPE de moins de 30 salariés ou moins de 3.5 millions de CA. »
  - taux, plafond (5 000 €, lignes, minimum) : https://les-aides.fr/aide/cYSP3w/cci-oise/financement-d-equipements-pour-des-economies-d-eau.html (2026-09-24) · « Etape 1 : l'aide prend la forme d'une subvention de 600 € HT par diagnostic réalisé. Étape 2 : [...] (2 lignes d'aides maximum) et correspondra au maximum à 70% du montant total, dans la limite de 5 000 € HT. [...] Le montant minimum d'investissement devra être de 700 € HT. »
  - description, mesures : https://les-aides.fr/aide/cYSP3w/cci-oise/financement-d-equipements-pour-des-economies-d-eau.html (2026-09-24) · « Les petits équipements d'économie d'eau, 1 000 € HT de subvention maximum (auto installation permise) : les mousseurs/réducteurs, le débit devra être < à 7L/min [...] le pommeau de douche économe, le débit devra être < à 8L/min [...] la chasse d'eau double flux, le compteur divisionnaire d'eau [...] La rénovation du réseau d'eau, 3 000 € HT [...] La gestion des eaux de pluie, 2 000 € HT : le récupérateur d'eau de pluie [...] l'installation pour utilisation des eaux de pluie (WC, douches, machine à laver, double réseau, …) »
  - mesures (ACT_AGR_002), description : https://les-aides.fr/aide/cYSP3w/cci-oise/financement-d-equipements-pour-des-economies-d-eau.html (2026-09-24) · « Étape 1 : un diagnostic Eau de l'entreprise afin de construire un plan d'action pour le maintien et le développement de l'activité : identification des axes d'amélioration, plan d'actions, accompagnement à la mise en place des mesures, identification des financements mobilisables »
  - eligibilite (critère « et »), infos_complementaires (non-cumul) : https://les-aides.fr/aide/cYSP3w/cci-oise/financement-d-equipements-pour-des-economies-d-eau.html (2026-09-24) · « ne pas faire l'objet d'un financement de ces équipements dans un autre programme régional ou national pendant les 2 dernières années. [...] les travaux devront être effectués dans un établissement situé dans l'Oise, le projet ne devra pas être éligible à d'autres aides existantes (Région, ADEME, Etat...) [...] ne pas être en régime micro-entrepreneur, disposer de locaux professionnels, ne pas être une entreprise de prestation à caractère intellectuel, pour les structures de moins de 30 salariés et moins de 3,5 M de CA. »
  - statut du site les-aides.fr : https://les-aides.fr/mentions_legales (2026-09-24) · « Ce site est édité par la Chambre de commerce et d'industrie Hauts-de-France »
  - infos_complementaires (plafonds des lignes étude et procédés), description : https://les-aides.fr/aide/cYSP3w/cci-oise/financement-d-equipements-pour-des-economies-d-eau.html (2026-09-24) · « L'étude pour économie d'eau dans l'entreprise, 2 000 € HT de subvention maximum [...] L'économie d'eau pour les procédés/équipement moins consommateurs, 5 000 € de subvention maximum [...] les mitigeurs thermostatiques, le pommeau de douche économe, le débit devra être < à 8L/min après installation »

### AIDE_HOT_007 · ECODO PRO, accompagnement subventionné aux économies d'eau (CCI de Bretagne)

accompagnement · secteurs ['hotellerie'] · départements ['22', '29', '35', '56'] · agences toutes · statut brouillon

Financeur : CCI de Bretagne et partenaires du programme ECODO PRO, animé par Bretagne Compétitivité · Reste à charge de 90 € HT par jour d'accompagnement (moins de 50 salariés), 180 € HT (50 à 250 salariés), 240 € HT (plus de 250 salariés), le reste étant soutenu financièrement par les partenaires du programme · plafond Accompagnement de 1 à 4 jours selon la nature du projet

Programme régional d'accompagnement qui aide les entreprises bretonnes à sécuriser leur approvisionnement en eau par des pratiques hydro-économes. Il comprend un état des lieux avec un diagnostic et des recommandations personnalisées, un accompagnement individuel (réglementation, financements, solutions techniques) et des accompagnements collectifs (ateliers inter-entreprises, webinaires). L'accompagnement est réalisé par un conseiller de Bretagne Compétitivité ou d'une CCI.

Éligibilité : Entreprises bretonnes de tous secteurs, tourisme compris (industrie, tourisme, bâtiment, services). Les accompagnements sont réservés aux entreprises bretonnes.

- Mesures : ACT_AGR_002
- **info** : La candidature se fait en remplissant le formulaire de l'appel à manifestation d'intérêt sur la page du programme. Pour toute question, vous pouvez écrire à ecodo@bretagne-competitivite.fr.
- **info** : La grille de reste à charge est celle publiée par Bretagne Compétitivité sur la page du programme au 24 septembre 2026. Elle peut évoluer d'un appel à candidatures à l'autre : vérifiez-la au moment de candidater.
- **info** : Le reste à charge porte sur les jours d'accompagnement. La page du programme renvoie vers les aides financières existantes : les aides de l'agence de l'eau Loire-Bretagne et le Pass transition de la Région Bretagne. La fiche pratique pour les hôtels cite les subventions de l'agence de l'eau Loire-Bretagne pour les investissements importants permettant des économies d'eau.
- **retour_experience** : Selon le programme, plus de 350 entreprises bretonnes ont été accompagnées en 5 ans, avec en moyenne 13 % d'économie d'eau par entreprise accompagnée.
- **ressource** : Page du programme ECODO PRO sur le site de Bretagne Compétitivité (https://www.bretagne-competitivite.fr/ecodopro/)
- **ressource** : Formulaire de candidature (appel à manifestation d'intérêt) (https://forms.office.com/Pages/ResponsePage.aspx?id=0BXJUzhqikSPHOkE2RgTKzgp2nU6JiRGrWSgn97UbKFUQzlJUlpZSU44V1hSNkhRWVQ0MDg0TUI2TS4u)
- **ressource** : Fiche pratique « Hydro-économies pour les hôtels » : 7 recommandations et témoignages d'hôtels bretons (https://www.bretagne-competitivite.fr/wp-content/uploads/2025/06/ECODO-Fiche-BP_Hotels.pdf)
- **ressource** : Guide ECODO PRO « Pratiques hydro-économes piscines » : 7 recommandations pour les piscines collectives (https://www.bretagne-competitivite.fr/wp-content/uploads/2026/03/Kit-piscine-2026.pdf)
- Sources :
  - taux, type, financeur : https://www.bretagne-competitivite.fr/ecodopro/ (2026-09-24) · « Le programme est soutenu financièrement par les partenaires d'ECODO PRO, afin que le reste à charge pour les entreprises, soit le moins coûteux possible : 90 € HT / jour d'accompagnement (- de 50 salariés) 180 € HT / jour d'accompagnement (50 à 250 salariés) 240 € HT / jour d'accompagnement (+ de 250 salariés) »
  - infos_complementaires : https://www.bretagne-competitivite.fr/ecodopro/ (2026-09-24) · « Coût : Le programme est soutenu financièrement par les partenaires d'ECODO PRO, afin que le reste à charge pour les entreprises, soit le moins coûteux possible : 90 € HT / jour d'accompagnement (- de 50 salariés) »
  - plafond : https://www.bretagne-competitivite.fr/ecodopro/ (2026-09-24) · « Durée de l'accompagnement : > De 1 à 4 jours selon la nature des projets. »
  - financeur, description : https://www.bretagne-competitivite.fr/ecodopro/ (2026-09-24) · « Les partenaires régionaux d'ECODO PRO, le programme de la CCI de Bretagne, animé par Bretagne Compétitivité [...] Bénéficiez de l'accompagnement d'ECODO PRO par l'un de nos conseillers (Bretagne Compétitive / CCI) »
  - description, mesures, categories : https://www.bretagne-competitivite.fr/ecodopro/ (2026-09-24) · « ECODO PRO, programme d'accompagnement qui permet aux entreprises bretonnes de sécuriser leur approvisionnement en eau grâce à la mise en place de pratiques hydro-économes. [...] Un état des lieux avec un diagnostic et des recommandations personnalisées à mettre en place. Un accompagnement individuel spécifique : réglementation, financements, solutions techniques…. Des accompagnements collectifs pour monter en compétence (ateliers inter-entreprises, webinaires). »
  - eligibilite, departements : https://www.bretagne-competitivite.fr/ecodopro/ (2026-09-24) · « Ce programme est à destination de toutes les entreprises bretonnes (industrie, tourisme, bâtiment, de services …) [...] Accompagnements réservés aux entreprises bretonnes »
  - infos_complementaires : https://www.bretagne-competitivite.fr/ecodopro/ (2026-09-24) · « en complétant le formulaire de l'appel à manifestation d'intérêt : Je souhaite bénéficier de l'accompagnement [...] mailto:ecodo@bretagne-competitivite.fr [...] Entreprises, découvrez les aides financières existantes : Aides financières de l'Agence de l'Eau Loire Bretagne, Pass transition de la région bretagne »
  - infos_complementaires : https://www.bretagne-competitivite.fr/ecodopro/ (2026-09-24) · « + de 350 entreprises bretonnes accompagnées depuis 5 ans. En moyenne, une entreprise accompagnée par le programme, réalise 13% d'économie d'eau. »
  - infos_complementaires : https://www.bretagne-competitivite.fr/wp-content/uploads/2025/06/ECODO-Fiche-BP_Hotels.pdf (2026-09-24) · « PRATIQUES HYDRO-ÉCONOMES HÔTELS. 7 RECOMMANDATIONS POUR RÉDUIRE VOS CONSOMMATIONS D'EAU [...] LES FINANCEMENTS : Investissements importants permettant des économies d'eau : Subventions de l'Agence de l'Eau Loire Bretagne »
  - infos_complementaires : https://www.bretagne-competitivite.fr/wp-content/uploads/2026/03/Kit-piscine-2026.pdf (2026-09-24) · « PRATIQUES HYDRO-ÉCONOMES PISCINES O PRO 7 recommandations [...] Les périodes de forte activité des piscines collectives coïncident généralement avec les périodes de sécheresse. »

### AIDE_HOT_008 · Ressourc'Eau, programme de gestion durable de l'eau (CCI Pays de la Loire et agence de l'eau Loire-Bretagne)

accompagnement · secteurs tous · départements ['44', '49', '53', '72', '85'] · agences toutes · statut brouillon

Financeur : CCI des Pays de la Loire, agence de l'eau Loire-Bretagne et FEDER · Reste à charge de 30 % du coût de l'accompagnement pour l'entreprise · plafond Accompagnement de 2 250 à 3 750 € HT selon la durée (3 à 5 jours), soit 675 à 1 125 € HT à la charge de l'entreprise

Accompagnement individuel de 3 à 5 jours par un conseiller eau de la CCI, cofinancé par la CCI des Pays de la Loire et l'agence de l'eau Loire-Bretagne avec le soutien du FEDER. Le parcours comprend un rendez-vous pré-visite, une visite technique du site, l'analyse des données de consommation et la restitution d'un rapport avec une analyse détaillée de la gestion de l'eau et un plan d'action priorisé à court, moyen et long terme. Le conseiller appuie ensuite la mise en œuvre des actions et fait un point de suivi après 6 mois ou un an.

Éligibilité : Entreprises implantées en Pays de la Loire pour qui l'eau constitue un enjeu de fonctionnement, un facteur de risque ou un levier de compétitivité, et qui veulent mettre en œuvre des actions concrètes à court ou moyen terme. Les candidatures sont sélectionnées par un jury ; la plaquette du programme et Mission Transition Écologique ciblent les entreprises consommant entre 10 000 et 100 000 m3 d'eau par an.

- Mesures : ACT_AGR_002
- **avertissement** : La plaquette du programme (avril 2025) et la fiche Mission Transition Écologique réservent l'accompagnement aux entreprises qui consomment entre 10 000 et 100 000 m3 d'eau par an. L'appel à candidatures 2026 ne reprend pas ce seuil dans ses critères de sélection et indique que « c'est la pertinence de votre projet et l'urgence d'agir qui priment ». Si votre consommation est inférieure à 10 000 m3 par an, faites confirmer la recevabilité de votre candidature par la CCI avant de la déposer.
- **info** : L'accompagnement n'est pas automatique : il passe par un appel à candidatures. L'appel 2026, publié le 30 janvier 2026, prévoit qu'un jury retienne une soixantaine d'entreprises. Mission Transition Écologique indique un dispositif disponible jusqu'au 31/12/2027 (information lue le 2026-09-24).
- **info** : Pour une question ou un devis, écrivez à l'équipe Ressourc'Eau : ressourceau@paysdelaloire.cci.fr. La CCI propose aussi un Flash Diag Eau gratuit pour évaluer en quelques minutes la maturité de votre entreprise sur l'eau avant de candidater.
- **ressource** : Page du programme Ressourc'Eau sur le site de la CCI Pays de la Loire (https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/entreprise/transition-ecologique/programme-ressourceau)
- **ressource** : Appel à candidatures Ressourc'Eau 2026 : critères de sélection, coût et déroulé (https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/actualites/appel-candidatures-ressourceau)
- **ressource** : Formulaire de candidature au programme Ressourc'Eau (https://s1.sphinxonline.net/surveyserver/s/CCI-Nantes-StNazaire/Ressourc_Eau/questionnaire.htm)
- Sources :
  - taux, plafond : https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/actualites/appel-candidatures-ressourceau (2026-09-24) · « Seul un reste à charge de 30% est demandé aux entreprises, variable selon la durée de l'accompagnement : Durée 3 jours : 2 250 € HT, soit 675 € HT [...] Durée 5 jours : 3 750 € HT, soit 1 125 € HT »
  - plafond, financeur : https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/entreprise/transition-ecologique/programme-ressourceau (2026-09-24) · « 3 à 5 jours, selon votre besoin. Tarif de l'offre 675 à 1125 € HT. Prise en charge CCI, AELB et FEDER selon éligibilité. [...] *Programme cofinancé par la CCI des Pays de la Loire et l'Agence de l'Eau Loire-Bretagne, avec le soutien du FEDER. »
  - description, mesures : https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/entreprise/transition-ecologique/programme-ressourceau (2026-09-24) · « Nos conseillers CCI experts sur l'eau vous proposent : Une analyse détaillée de votre gestion de l'eau. Un plan d'action priorisé et personnalisé à court, moyen et long terme. Un appui à la mise en place des actions identifiées. Un échange après 6 mois/1 an pour suivre les actions engagées. »
  - description : https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/actualites/appel-candidatures-ressourceau (2026-09-24) · « parcours d'accompagnement de 3 à 5 jours incluant un rendez-vous pré-visite, une visite technique sur votre site, l'analyse des données et la restitution du plan d'action. »
  - eligibilite, departements : https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/actualites/appel-candidatures-ressourceau (2026-09-24) · « Critères de sélection : Entreprises implantées en Pays de la Loire. Objectif de sécuriser son modèle économique face aux enjeux de l'eau. Volonté de mettre en œuvre des actions concrètes à court/moyen terme. [...] Nouveauté 2026 : Que vous soyez une PME en croissance ou un site industriel majeur, c'est la pertinence de votre projet et l'urgence d'agir qui priment. »
  - eligibilite, departements : https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/entreprise/transition-ecologique/programme-ressourceau (2026-09-24) · « Notre programme s'adresse à toutes les entreprises des Pays de la Loire pour qui l'eau constitue un enjeu de fonctionnement, un facteur de risque ou un levier de compétitivité. »
  - eligibilite, infos_complementaires : https://www.paysdelaloire.cci.fr/sites/default/files/files/plaquette_ressourc_eau.pdf (2026-09-24) · « POUR QUI ? Les entreprises basées en Pays de la Loire qui consomment entre 10 000 et 100 000 m3 d'eau par an. [...] ©CCI Pays de la Loire | Création graphique : Agence Duo | Avril 2025 »
  - eligibilite, secteurs, infos_complementaires : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/ressourc-eau (2026-09-24) · « Toutes tailles, Éligible aux micro-entreprises, Pays de la Loire, Tous secteurs d'activité [...] Ce dispositif vise les entreprises basées en Pays de la Loire qui consomment entre 10 000 et 100 000 m3 d'eau par an. [...] Disponible jusqu'au 31/12/2027 »
  - infos_complementaires : https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/actualites/appel-candidatures-ressourceau (2026-09-24) · « 30.01.2026 [...] lancent l'appel à candidatures 2026 du programme Ressourc'Eau. [...] Une soixantaine d'entreprises sera sélectionnée [...] Le jury sélectionne les 60 entreprises retenues. [...] Évaluez gratuitement la maturité de votre entreprise sur la gestion de l'eau et identifiez vos premières pistes de progrès grâce à notre Flash Diag Eau »
  - infos_complementaires : https://www.paysdelaloire.cci.fr/nantes-saint-nazaire/entreprise/transition-ecologique/programme-ressourceau (2026-09-24) · « Contactez un conseiller CCI Ressourc'Eau ressourceau@paysdelaloire.cci.fr [...] en répondant à l'appel à candidature »

### AIDE_HOT_009 · Prise en charge des formations des salariés, branche Hôtels, cafés, restaurants (AKTO)

accompagnement · secteurs ['hotellerie'] · départements national · agences toutes · statut brouillon

Financeur : AKTO (opérateur de compétences) · Coûts pédagogiques entièrement pris en charge sur Espace Formation ; hors catalogue, forfaits horaires ou journaliers plafonnés · plafond Hors Espace Formation : 2 000 € par an (moins de 11 salariés), 3 000 € (11 à 25 salariés), 6 000 € (26 à 49 salariés) de coûts pédagogiques. À partir de 50 salariés : 80 % de la contribution conventionnelle de l'entreprise

AKTO finance la formation des salariés des hôtels, cafés et restaurants selon les règles fixées par la branche. Sur Espace Formation, la plateforme des formations collectives sélectionnées par la branche, les coûts pédagogiques sont entièrement pris en charge. Ce catalogue comprend une thématique « Responsabilité environnementale » avec des formations courtes « La Responsabilité Environnementale dans le secteur HCR » qui visent l'adoption des éco-gestes, dont la réduction de la consommation d'eau, poste par poste (chambres, buanderie, nettoyage, cuisine, bar).

Éligibilité : Entreprises de la branche Hôtels, cafés, restaurants, de toutes tailles, micro-entreprises comprises. Les formations doivent répondre aux enjeux et priorités de la branche et être réalisées par un organisme déclaré et certifié Qualiopi.

- **avertissement** : Une formation hors catalogue n'est prise en charge que si sa thématique ne figure pas sur Espace Formation. La responsabilité environnementale y figurant, vérifiez d'abord le catalogue avant de commander une formation aux éco-gestes à un autre organisme.
- **avertissement** : Le financement est accordé sous réserve des fonds disponibles et de la réalisation des actions. La rémunération des salariés formés n'est pas prise en charge, sauf en activité partielle (forfait de 14 € par heure).
- **info** : En septembre 2026, Espace Formation proposait pour la branche plusieurs sessions de 4 heures intitulées « La Responsabilité Environnementale dans le secteur HCR », ouvertes à tous les salariés (étage, maintenance, blanchisserie, cuisine, salle). Leurs objectifs : adopter les éco-gestes pour réduire la consommation d'eau et d'électricité, identifier les postes gros consommateurs d'eau et d'énergie et installer des routines au poste. Aucune ne traite spécifiquement de la détection des fuites ni du changement du linge à la demande.
- **info** : Pour les entreprises de 50 salariés et plus, les formations suivies sur Espace Formation bénéficient de tarifs négociés mais sont déduites du budget annuel, égal à 80 % de la contribution conventionnelle de 0,2 % de la masse salariale.
- **ressource** : Règles de prise en charge 2026 de la branche Hôtels, cafés, restaurants (https://www.akto.fr/regles-de-prise-en-charge-hotels-cafes-restaurants/)
- **ressource** : Catalogue Espace Formation (choisir le secteur Hôtels, cafés, restaurants) (https://espaceformation.akto.fr/)
- Sources :
  - taux, description : https://www.akto.fr/regles-de-prise-en-charge-hotels-cafes-restaurants/ (2026-09-24) · « Sur Espace Formation, AKTO prend en charge la totalité des coûts de formation. Espace Formation est la plateforme rassemblant l'offre de formations collectives sélectionnées par la branche Hôtels, Cafés, Restaurants. [...] Les coûts pédagogiques sont entièrement pris en charge »
  - plafond, taux : https://www.akto.fr/regles-de-prise-en-charge-hotels-cafes-restaurants/ (2026-09-24) · « Entreprises de moins de 11 salariés : Budget annuel (coûts pédagogiques) : plafond annuel de 2 000 € [...] Entreprises de 11 à 25 salariés : [...] plafond annuel de 3 000 € [...] Entreprises de 26 à 49 salariés : [...] plafond annuel de 6 000 € [...] 1000€/jour au réel plafonné [...] Présentiel : 25€/heure au réel plafonné »
  - plafond, infos_complementaires : https://www.akto.fr/regles-de-prise-en-charge-hotels-cafes-restaurants/ (2026-09-24) · « Budget annuel (coûts pédagogiques + frais annexes) : plafond annuel correspondant à 80% du montant de votre contribution conventionnelle [...] Collecte (0,2%) en 2026 [...] Vous bénéficiez des tarifs négociés dans le marché des Actions Collectives. Ces actions de formation seront déduites de votre budget annuel. »
  - eligibilite, infos_complementaires : https://www.akto.fr/regles-de-prise-en-charge-hotels-cafes-restaurants/ (2026-09-24) · « AKTO assure le financement des actions de formation réalisées selon les modalités figurant sur l'accord de prise en charge, sous réserve des fonds disponibles et de réalisation des actions. Les financements sont orientés vers les formations répondant aux enjeux et priorités de la branche Hôtels, Cafés, Restaurants ou liées à ses métiers. Pour être financées, les actions de formation (hors formation interne) doivent impérativement être réalisées par un organisme de formation détenteur d'un numéro de déclaration d'activité valide et disposant de la certification QUALIOPI »
  - infos_complementaires : https://www.akto.fr/regles-de-prise-en-charge-hotels-cafes-restaurants/ (2026-09-24) · « La rémunération n'est pas prise en charge. [...] Cas particulier en cas d'activité partielle : [...] La rémunération est prise en charge dans la limite d'un forfait de 14 € par heure par salarié formé. [...] Seules les formations dont les thématiques ne figurent pas sur Espace Formation peuvent être prises en charge au titre du plan de développement des compétences. »
  - description, eligibilite : https://www.akto.fr/besoin-competences-catalogue-espace-formation/ (2026-09-24) · « Formations propres à la branche Hôtels, Cafés, Restaurants : sécurité alimentaire, cuisine, techniques professionnelles, traiteur- snacking, relation client, permis de former, management, responsabilité environnementale, santé-sécurité. »
  - eligibilite : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/formations-akto (2026-09-24) · « Coût restant à charge Gratuit pour les entreprises de moins de 50 salariés [...] Taille de l'entreprise Toutes tailles Éligible aux micro-entreprises [...] Entreprises des secteurs [...] des hôtels, des cafétérias, des restaurants »
  - description, infos_complementaires : https://espaceformation.akto.fr/rest/trainings/203315 (2026-09-24) · « LA RESPONSABILITÉ ENVIRONNEMENTALE DANS LE SECTEUR HCR [durée 4 h, thématique Responsabilité environnementale, Action co HCR 2025_020] Adopter les éco gestes (réduire la consommation d'eau, d'électricité, lutter contre le gaspillage..). [...] Identifier les postes énergivores et hydrovore en HCR (froid, cuisson, buanderie, nettoyage, chambres, bar) [...] Public : Tous salariés HCR (cuisine/production, salle/PDJ/room-service, bar, hébergement/housekeeping, maintenance/blanchisserie, back-office). »
  - infos_complementaires : https://espaceformation.akto.fr/rest/trainings/203273 (2026-09-24) · « La Responsabilité Environnementale dans le secteur HCR [durée 4 h] Adopter les éco-gestes (réduire la consommation d'eau, d'électricité, lutter contre le gaspillage..) [...] Présentation des éco-gestes adaptés à chaque poste (cuisine, salle, chambre, réception). »

