# Cibles de fiches : industrie laitière

Étape 5 du skill `nouveau-secteur`. Statut : brouillon, en attente de validation.
Date : 2026-09-22.

Le rapport de couverture est sans appel : **les douze mesures visibles du secteur n'ont ni
prestataire ni aide**. Les sept prestataires et les sept aides existants portent
`secteurs: ["agriculture"]` et restent donc invisibles pour une entreprise laitière, y
compris ceux qui sont rattachés aux quatre mesures devenues transversales.

Ce document propose quatorze cibles : neuf prestataires et cinq aides. Chacune porte l'id
qui lui est attribué et la liste des mesures qu'elle couvre. Les URL sont des points de
départ officiels, à confirmer par les agents rédacteurs.

## Choix d'échelle : tout national

**Décision prise au point d'arrêt de l'étape 5 : aucune fiche territoriale.** Les douze
cibles retenues sont toutes nationales, ce qui est cohérent avec un secteur de 2 651
établissements répartis sur tout le territoire et structuré par des organismes de branche.

Deux cibles ancrées dans le Doubs et le Jura avaient été proposées pour éprouver le filtre
départemental, les chambres d'agriculture de ces deux départements et une aide régionale de
Bourgogne Franche Comté. Elles sont retirées. Conséquences à connaître :

1. **Le filtre départemental de `GET /solutions` ne sera pas exercé par ce secteur.** Toutes
   les fiches sortiront quel que soit le département de l'établissement. Le filtre reste
   testé par le questionnaire agriculture.
2. La démarche collective perdait son second prestataire avec les chambres d'agriculture.
   Une cible nationale la remplace, les agences de l'eau, qui animent la gestion concertée
   de bassin et instruisent les autorisations de rejet.
3. Les mesures qui perdaient l'aide régionale gardent chacune au moins une autre aide.

Le territoire reste un angle mort à couvrir plus tard : une fiche par agence de l'eau, ou
des fiches de bureaux d'études régionaux, seraient le prolongement naturel de ce
référentiel.

## Prestataires

| Id | Structure | Type | Échelle | Mesures couvertes |
|---|---|---|---|---|
| PREST_LAI_001 | ACTALIA | organisme_technique | nationale | ACT_AGR_002, ACT_LAI_001, ACT_LAI_003, ACT_LAI_005, ACT_LAI_006, ACT_LAI_008 |
| PREST_LAI_002 | CNIEL, interprofession laitière | syndicat_professionnel | nationale | ACT_AGR_009, ACT_AGR_010, ACT_LAI_002, ACT_LAI_006, ACT_LAI_007 |
| PREST_LAI_003 | Réseau des ENIL | organisme_formation | nationale | ACT_LAI_001, ACT_LAI_002, ACT_LAI_003 |
| PREST_LAI_004 | Institut de l'Élevage (Idele) | organisme_technique | nationale | ACT_LAI_007, ACT_LAI_008 |
| PREST_LAI_005 | ADEME | agence_publique | nationale | ACT_AGR_001, ACT_AGR_002, ACT_LAI_004 |
| PREST_LAI_006 | Réseau des CCI | chambre_consulaire | nationale | ACT_AGR_001, ACT_AGR_002, ACT_AGR_009 |
| PREST_LAI_007 | Cemafroid | organisme_technique | nationale | ACT_LAI_004 |
| PREST_LAI_008 | INRAE, unité STLO (Rennes) | organisme_technique | nationale | ACT_LAI_005, ACT_LAI_006 |
| PREST_LAI_009 | Les agences de l'eau | agence_publique | nationale | ACT_AGR_001, ACT_AGR_010, ACT_LAI_008 |

### Pourquoi chacune

**PREST_LAI_001, ACTALIA.** Institut technique agroalimentaire, pôle produits laitiers.
C'est le porteur du projet AQUAREL, la seule étude française publique consacrée à la
réutilisation des eaux issues du lait, menée avec le CNIEL et financée par deux agences de
l'eau. Aucune autre structure ne porte aussi directement les mesures sur les condensats, la
NEP et les effluents lactés. Rôles attendus : conseil et étude, formation.
Point de départ : https://www.actalia.eu

**PREST_LAI_002, CNIEL.** Interprofession nationale de la filière laitière, cofinanceur
d'AQUAREL. Porte les sujets collectifs et de filière : repères de consommation, plan de
gestion, représentation dans les instances de l'eau. Rôle attendu : conseil et étude.
Point de départ : https://www.cniel.com

**PREST_LAI_003, réseau des ENIL.** Les écoles nationales d'industrie laitière (Mamirolle,
Poligny, Aurillac, Surgères, La Roche-sur-Foron) forment les opérateurs et les responsables
de production de la filière, et disposent d'ateliers technologiques. C'est la structure la
mieux placée pour la formation au nettoyage économe et au suivi de ratios. Rôle attendu :
formation. À vérifier : l'existence d'un portail commun au réseau, sinon retenir une école
et en faire une fiche départementale.
Point de départ : https://www.enil.fr

**PREST_LAI_004, Institut de l'Élevage.** Auteur du dossier de référence sur les effluents
de fromagerie fermière, seule source française consultée qui traite les filières de
traitement adaptées aux petits ateliers. Complète ACTALIA par le bas du spectre de taille.
Rôles attendus : conseil et étude, formation.
Point de départ : https://idele.fr

**PREST_LAI_005, ADEME.** Opérateur public de la transition, porte les diagnostics, le
comptage et les sujets d'efficacité énergétique et frigorifique, où le froid et l'eau se
rejoignent. Rôles attendus : conseil et étude, financement.
Point de départ : https://www.ademe.fr

**PREST_LAI_006, réseau des CCI.** Point d'entrée consulaire des entreprises industrielles,
opérateur de diagnostics et de programmes d'accompagnement. Utile surtout aux PME sans
service environnement. Rôle attendu : conseil et étude.
Point de départ : https://www.cci.fr

**PREST_LAI_007, Cemafroid.** Organisme technique du froid alimentaire. Seule mesure qu'il
porte, mais c'est la seule cible identifiée capable de dire à un site s'il peut passer en
condenseurs secs ou adiabatiques sans casser sa chaîne du froid. Rôles attendus : conseil
et étude, formation.
Point de départ : https://www.cemafroid.fr

**PREST_LAI_008, INRAE unité STLO.** Unité de recherche Science et Technologie du Lait et
de l'Œuf, référence française sur les procédés membranaires appliqués au lait et au
lactosérum. Porte les deux mesures les plus techniques du référentiel. À vérifier : dans
quelle mesure l'unité intervient auprès d'entreprises, ou seulement en recherche
partenariale ; si l'accès direct n'existe pas, la fiche se justifie comme ressource et non
comme prestataire, et il faudra lui substituer un bureau d'études membranes.
Point de départ : https://www6.rennes.inrae.fr/stlo

**PREST_LAI_009, les agences de l'eau.** Remplace la cible territoriale retirée. Les six
agences ne font pas que financer : elles animent la gestion concertée de bassin, instruisent
les autorisations de déversement et assoient la redevance pollution. Ce sont donc bien des
interlocuteurs de conseil, distincts du dispositif d'aide décrit en AIDE_LAI_001. À
vérifier par le rédacteur : si une fiche unique se justifie, ou s'il faut six fiches avec
le champ `agences` renseigné. Rôles attendus : conseil et étude, financement.
Point de départ : https://www.lesagencesdeleau.fr

## Aides

| Id | Dispositif | Type | Échelle | Mesures couvertes |
|---|---|---|---|---|
| AIDE_LAI_001 | Aides des agences de l'eau aux économies d'eau et à la réutilisation dans l'industrie | subvention | nationale, toutes agences | ACT_AGR_001, ACT_AGR_002, ACT_LAI_003, ACT_LAI_004, ACT_LAI_006, ACT_LAI_008 |
| AIDE_LAI_002 | ADEME, valorisation des coproduits et économie circulaire | subvention | nationale | ACT_LAI_005, ACT_LAI_007 |
| AIDE_LAI_003 | ADEME, aide au diagnostic et à l'étude | subvention | nationale | ACT_AGR_002, ACT_AGR_009 |
| AIDE_LAI_004 | Bpifrance, prêt vert et financement de la décarbonation | pret | nationale | ACT_LAI_004, ACT_LAI_005 |

### Pourquoi chacune

**AIDE_LAI_001.** C'est le dispositif central du secteur : les six agences de l'eau
financent les économies d'eau et la réutilisation dans l'industrie au titre de leur
programme d'intervention. Point de vigilance pour le rédacteur : les taux, les plafonds et
les conditions diffèrent d'une agence à l'autre, et le champ `agences` devra peut-être être
renseigné plutôt que laissé vide si un programme ne couvre pas le même périmètre partout.
Vérifier le programme en cours et sa date de fin.
Point de départ : https://www.lesagencesdeleau.fr

**AIDE_LAI_002.** La valorisation du lactosérum et la concentration sur site relèvent de
l'économie circulaire et, quand elle passe par la méthanisation, des dispositifs de l'ADEME.
Vérifier l'intitulé exact du dispositif en vigueur, les appels à projets ayant changé de nom
plusieurs fois.
Point de départ : https://www.ademe.fr

**AIDE_LAI_003.** Les aides au diagnostic sont le premier étage, et elles conditionnent
souvent l'accès aux aides à l'investissement. À vérifier : si le dispositif est réservé à
certaines tailles d'entreprise.
Point de départ : https://www.ademe.fr

**AIDE_LAI_004.** Les deux mesures les plus lourdes du référentiel (fermeture des circuits
de froid, concentration du lactosérum) supposent un financement d'investissement que la
subvention seule ne couvre pas. À vérifier : si le prêt vert cible bien l'eau ou seulement
l'énergie et le carbone. Si ce n'est que l'énergie, la fiche reste pertinente pour le froid
et devra être limitée à ACT_LAI_004.
Point de départ : https://www.bpifrance.fr

**AIDE_LAI_005 est retirée.** C'était la cible territoriale de test, une aide régionale à
l'investissement des industries agroalimentaires. Le choix d'un référentiel entièrement
national la rend sans objet. Les aides régionales restent le complément naturel de ce
catalogue, à traiter région par région dans un chantier ultérieur.

## Couverture obtenue

Douze fiches : neuf prestataires, trois aides restantes plus AIDE_LAI_004, soit quatre
aides.

| Mesure | Prestataires | Aides |
|---|---|---|
| ACT_AGR_001 Compteur par usage | 005, 006, 009 | 001 |
| ACT_AGR_002 Audit eau | 001, 005, 006 | 001, 003 |
| ACT_AGR_009 Plan de gestion de l'eau | 002, 006 | 003 |
| ACT_AGR_010 Démarche collective | 002, 009 | aucune |
| ACT_LAI_001 Nettoyage économe | 001, 003 | aucune |
| ACT_LAI_002 Ratio eau sur lait | 002, 003 | aucune |
| ACT_LAI_003 Optimisation de la NEP | 001, 003 | 001 |
| ACT_LAI_004 Circuits de froid fermés | 005, 007 | 001, 004 |
| ACT_LAI_005 Concentration du lactosérum | 001, 008 | 002, 004 |
| ACT_LAI_006 Eaux issues du lait | 001, 002, 008 | 001 |
| ACT_LAI_007 Lactosérum hors effluents | 002, 004 | 002 |
| ACT_LAI_008 Traitement des effluents | 001, 004, 009 | 001 |

L'objectif de deux prestataires par mesure est atteint partout, y compris après le retrait
des deux cibles territoriales.

**Trois mesures restent sans aide**, et c'est assumé : la démarche collective, le nettoyage
économe et le suivi d'un ratio ne demandent pas d'investissement. Ce sont du temps interne,
de la consigne et de la formation. Les financer relèverait au mieux d'une aide à la
formation, hors du champ des dispositifs eau. Si le relecteur veut les couvrir, la piste
serait un OPCO de branche (OCAPIAT pour l'agroalimentaire) pour la formation, ce qui
ajouterait une quinzième fiche.

## Découpage de l'étape 6

**Décision prise au point d'arrêt : un premier lot de cinq fiches**, les plus certaines et
les mieux documentées, pour juger la qualité de sortie des agents avant d'engager les sept
autres.

Lot 1 : PREST_LAI_001 (ACTALIA), PREST_LAI_002 (CNIEL), PREST_LAI_004 (Institut de
l'Élevage), AIDE_LAI_001 (aides des agences de l'eau), AIDE_LAI_003 (aide ADEME au
diagnostic).

Lot 2, après validation : PREST_LAI_003 (ENIL), PREST_LAI_005 (ADEME), PREST_LAI_006 (CCI),
PREST_LAI_007 (Cemafroid), PREST_LAI_008 (INRAE STLO), PREST_LAI_009 (agences de l'eau),
AIDE_LAI_002 (ADEME économie circulaire), AIDE_LAI_004 (Bpifrance).
