# Revue du référentiel : Huiles et corps gras

Document assemblé automatiquement depuis le staging. Tout est en statut brouillon tant que la promotion n'a pas eu lieu.

## Périmètre

- Secteur : `industrie_huiles` (Huiles et corps gras)
- Codes NAF (3) : 10.41A, 10.41B, 10.42Z

## Profil eau du secteur

# Profil eau du secteur : huiles et corps gras

Note de profil, étape 2 du skill `nouveau-secteur`. Statut : brouillon, à valider par un consultant.
Date de rédaction : 2026-09-27.

| Champ | Valeur |
|---|---|
| `sector_id` | `industrie_huiles` |
| Libellé | Huiles et corps gras |
| Préfixe des mesures | `HUI` (`ACT_HUI_001` et suivants) |
| Codes NAF | 10.41A (298), 10.41B (121), 10.42Z (9), soit 428 établissements |

Cette note prolonge `00_perimetre.md`. Elle traite à chaque section les trois populations arbitrées :
**(a)** moulins à huile d'olive et huileries artisanales de pression à froid, cas central ;
**(b)** trituration, raffinage industriels et margarinerie ; **(c)** fonte de graisses animales et
huiles de poisson. Avertissement de méthode : les ratios publics d'eau par tonne sont rares pour ce
secteur, surtout pour (a) et (c). Ce qui n'a pas pu être sourcé est écrit au conditionnel avec la
mention « à confirmer » et récapitulé en fin de note.

## 1. Usages de l'eau, du plus gros poste au plus petit

**(a) Moulins et huileries artisanales.** Au moulin, les olives sont lavées, broyées puis malaxées
[Chambre d'agriculture PACA, 2012](https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494).
L'eau sert d'abord au **lavage des olives**, puis, selon le procédé, à la **dilution de la pâte**
avant séparation, et enfin au **nettoyage** des équipements, avant, pendant et après la campagne.
L'eau utilisée pour la trituration et pour le nettoyage des équipements doit être potable
[France Olive, 2025](https://www.franceolive.fr/images/medias/2026/08/25/guide-des-bonnes-pratiques-hygiene-pour-elaboration-de-huile-olive-vierge-maj-2025.pdf).
Le procédé détermine tout. En super-presse, 100 kg d'olives reçoivent 30 kg d'eau et produisent
70 kg de margines ; la presse traditionnelle produit 0,4 à 0,5 m3 de margines par tonne d'olives et
le système continu jusqu'à 2 m3 par tonne (Boari et al., 1984, cité par
[Hamdi, ORSTOM et Université de Provence, 1991](https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf)).
Le système continu décrit est le décanteur trois phases, qui dilue la pâte ; les décanteurs « deux
phases » et « deux phases et demie » permettent de « substantielles économies d'eau » et rejettent
des grignons pâteux à 60 à 70 % d'humidité, contre 50 à 55 % en trois phases et 40 à 45 % en presse
[Chambre d'agriculture PACA, 2012](https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494).
Le volume d'eau ajouté par un décanteur trois phases actuel et le volume résiduel d'eau de lavage en
deux phases n'ont pas pu être chiffrés par une source acceptée (à confirmer). Pour la **pression à
froid** de graines et fruits secs (noix, colza, tournesol), le procédé se limite à une pression
simple et une filtration, sans auxiliaire technologique
[ITERG, 2025](https://iterg.com/wp-content/uploads/2025/10/Fiches-informations-fr-2.pdf) : l'eau n'y
servirait qu'au nettoyage et aux sanitaires (à confirmer).

**(b) Trituration, raffinage, margarinerie.** Trois postes dominent. Le **refroidissement** d'abord :
à Dieppe, l'usine Saipol prélève puis restitue à l'Arques 780 000 m3 d'eau de refroidissement par an
dans sa configuration projetée, pour 1 200 000 m3 autorisés
[SAIPOL, dossier ICPE publié par la DREAL Normandie, 2020](https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf).
Il assure la condensation de l'hexane après extraction et désolvantation
[BARPI, 2018](https://www.aria.developpement-durable.gouv.fr/wp-content/uploads/2018/11/La-fabrication-des-huiles-v%C3%A9g%C3%A9tales-VP-Vpublicfinale-2.pdf)
et celle des buées de la désodorisation, qui injecte de la vapeur dans l'huile à 180 à 240 °C sous
vide poussé [ITERG, 2025](https://iterg.com/wp-content/uploads/2025/10/Fiches-informations-fr-2.pdf).
Vient ensuite la **vapeur** : cuisson des graines vers 100 °C, désolvantation
[BARPI, 2018](https://www.aria.developpement-durable.gouv.fr/wp-content/uploads/2018/11/La-fabrication-des-huiles-v%C3%A9g%C3%A9tales-VP-Vpublicfinale-2.pdf),
désodorisation et production de vide auxiliaire
[conclusions MTD FDM, 2019](https://www.legislation.gov.uk/eudn/2019/2031/annex). Puis l'**eau de
procédé** du raffinage : dégommage à l'eau avec environ 3 % d'eau à 80 °C, lavages à l'eau après
neutralisation [ITERG, 2025](https://iterg.com/wp-content/uploads/2025/10/Fiches-informations-fr-2.pdf).
Le **nettoyage** complète le tableau ; dans l'agroalimentaire breton, il pèse 43 % de l'eau utilisée
contre 33 % pour le process, et jusqu'à 80 à 85 % dans certaines entreprises
[ARIA AURA, 2024](https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/),
proportion probablement plus proche de la margarinerie (10.42Z) que de la trituration (à confirmer).
Les niveaux de rejet spécifique d'eaux usées associés aux MTD, hors eaux de refroidissement rejetées
séparément, vont de 0,15 à 0,75 m3 par tonne d'huile pour la trituration et le raffinage intégrés de
colza et tournesol, 0,8 à 1,9 pour le soja et 0,15 à 0,9 pour le raffinage seul
[conclusions MTD FDM, 2019](https://www.legislation.gov.uk/eudn/2019/2031/annex).

**(c) Fonte de graisses animales, huiles de poisson.** L'eau vient surtout de la matière première :
les sous-produits contiennent plus de 70 % d'humidité, leur déshydratation par cuisson génère des
effluents importants, traités en station interne, et la vapeur est recyclée pour alimenter les
sécheurs [Sénat, 2001](https://www.senat.fr/rap/r00-321-1/r00-321-16.html). La référence
réglementaire de rejet spécifique est de 1,55 m3 par tonne de matières premières pour la
transformation de sous-produits animaux et la fonte des graisses, 1,25 m3 par tonne pour les farines
et huiles de poisson [arrêté du 3 juillet 2025, AIDA](https://aida.ineris.fr/reglementation/arrete-030725-relatif-prescriptions-generales-applicables-installations-relevant).
Le nettoyage des aires et des véhicules, la chaudière et le lavage des gaz odorants compléteraient
les prélèvements (à confirmer).

## 2. Sources d'approvisionnement

**(a)** Le réseau public domine vraisemblablement, du fait de l'obligation de potabilité
[France Olive, 2025](https://www.franceolive.fr/images/medias/2026/08/25/guide-des-bonnes-pratiques-hygiene-pour-elaboration-de-huile-olive-vierge-maj-2025.pdf) ;
la part de moulins sur forage traité n'est pas documentée (à confirmer). **(b)** Les grands sites
combinent réseau et eau de surface : à Dieppe, 700 000 m3 par an de réseau public dans l'état projeté
(hausse liée à un nouvel atelier protéines), l'Arques pour le refroidissement et pour l'eau d'incendie
[SAIPOL, 2020](https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf).
La réutilisation d'eaux usées traitées apparaît : à Sète, le projet de l'agglomération doit substituer
jusqu'à 350 000 m3 d'eau potable par an aux besoins de l'usine Saipol
[Sète agglopôle, s. d.](https://www.agglopole.fr/reutiliser-leau-pour-preserver-lavenir/).
**(c)** Répartition non documentée (à confirmer).

## 3. Dépendances critiques

**(a) Une campagne courte et une matière périssable.** La maturation des olives a lieu en novembre et
décembre [France Olive, 2025](https://www.franceolive.fr/images/medias/2026/08/25/guide-des-bonnes-pratiques-hygiene-pour-elaboration-de-huile-olive-vierge-maj-2025.pdf) ;
la campagne s'étendrait jusqu'en février (à confirmer). Un moulin privé d'eau pendant la campagne ne
pourrait pas reporter la trituration des olives récoltées. Il travaille hors de l'étiage estival, mais
des restrictions peuvent persister à l'automne dans les départements méditerranéens (à vérifier
commune par commune avec l'historique des restrictions de Noé). La dépendance la plus forte serait en
amont : la récolte apportée au moulin dépend de l'eau disponible pour les oliveraies (à confirmer, hors
du périmètre de ce questionnaire).

**(b) Le refroidissement est une barrière de sécurité.** À Grand-Couronne en 2017, l'arrêt de la
vapeur a interrompu la condensation de l'hexane faute de refroidissement ; de l'hexane a été détecté
dans les égouts et l'usine était encore à l'arrêt deux jours plus tard
[BARPI, 2018](https://www.aria.developpement-durable.gouv.fr/wp-content/uploads/2018/11/La-fabrication-des-huiles-v%C3%A9g%C3%A9tales-VP-Vpublicfinale-2.pdf).
Une baisse du débit d'eau de refroidissement imposée en étiage touche donc la sécurité avant la
production. L'arrêté sécheresse ICPE impose aux installations autorisées ou enregistrées prélevant
plus de 10 000 m3 par an une réduction de 5 % en alerte, 10 % en alerte renforcée et 25 % en crise,
avec des exclusions pour la transformation en flux poussé de matières premières périssables fraîches,
pour les sites ayant réduit leurs prélèvements d'au moins 20 % depuis 2018 ou utilisant au moins 20 %
d'eaux réutilisées [arrêté du 30 juin 2023, AIDA](https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement).
Les graines stockées en silo n'étant pas des matières fraîches, la trituration ne devrait pas
bénéficier du flux poussé (à faire confirmer par l'inspection).

**(c) Un flux imposé.** Un fondoir traite des sous-produits qui se dégradent vite ; son arrêt se
reporterait sur les abattoirs qui les lui confient (à confirmer). Son éligibilité à l'exclusion « flux
poussé » est à faire confirmer par l'inspection.

## 4. Risques et contraintes réglementaires

**Statut ICPE.** La rubrique 2240 soumet à autorisation l'extraction par solvant inflammable ; les
autres installations relèvent de la déclaration à partir de 200 kg/j et de l'enregistrement au-delà
de 10 t/j, ou de 20 t/j pour une activité saisonnière de 90 jours par an au plus
[AIDA, rubrique 2240](https://aida.ineris.fr/reglementation/2240-extraction-traitement-huiles-corps-gras-dorigine-animale-vegetale).
Pour les moulins, le plan d'épandage des margines et grignons est exigé au titre des ICPE au-delà de
200 kg d'olives par jour [Chambre d'agriculture PACA, 2012](https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494).
En déclaration, les circuits de refroidissement ouverts sont interdits au-delà de 10 m3/j, et
l'épandage suppose étude préalable, plan et cahier d'épandage, sous plafonds (azote total inférieur à
10 t/an, volume inférieur à 500 000 m3/an, DBO5 inférieure à 5 t/an)
[arrêté du 5 décembre 2016, annexe I, points 5.2 et 5.8, AIDA](https://aida.ineris.fr/reglementation/arrete-051216-relatif-prescriptions-applicables-a-certaines-installations-classees).
En enregistrement, la réfrigération en circuit ouvert est interdite, le prélèvement ne peut se faire
en zone de répartition des eaux, le totalisateur est relevé chaque jour au-delà de 100 m3/j et les
hydrocarbures totaux rejetés sont limités à 10 mg/L
[arrêté du 24 avril 2017, art. 27, 28 et 37, AIDA](https://aida.ineris.fr/reglementation/arrete-240417-relatif-prescriptions-generales-applicables-installations-relevant).
Les grands sites relèvent de la rubrique 3642 et des conclusions MTD agroalimentaires, dont la valeur
de DCO pour les oléagineux est de 200 mg/L
[SAIPOL, 2020](https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf).
Les fondoirs de plus de 10 t/j relèvent de l'autorisation au titre de la rubrique 3650
[AIDA, rubrique 3650](https://aida.ineris.fr/reglementation/3650-elimination-recyclage-carcasses-dechets-animaux),
avec des valeurs limites de rejet de 100 mg/L de DCO et 25 mg/L d'azote global, et des MTD
applicables aux installations existantes au 18 décembre 2027
[arrêté du 3 juillet 2025, AIDA](https://aida.ineris.fr/reglementation/arrete-030725-relatif-prescriptions-generales-applicables-installations-relevant).

**Margines : charge et filières.** La pollution par tonne d'olives est de 45 à 55 kg de DBO5 quel que
soit le procédé (Balice, 1982), et les margines, composées d'environ 90 % d'eau à pH 4 à 6, peuvent
dépasser 100 g/L de DCO ; des margines du Gard analysées en 1987 atteignaient 73,6 g/L
[Hamdi, 1991](https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf). Le
décanteur deux phases économise l'eau mais reporte la charge dans des grignons humides. En
Provence-Alpes-Côte d'Azur, le gisement annuel est d'environ 9 000 t de grignons et 2 500 t de
margines, l'épandage direct est la filière la plus utilisée, les grignons et margines co-compostés
deviennent conformes à la norme NF U 44-051 et utilisables sans plan d'épandage, et l'agence de l'eau
Rhône Méditerranée Corse exerce un contrôle assorti d'incitations financières
[Chambre d'agriculture PACA, 2012](https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494).
Les bassins d'évaporation, fréquents en Grèce, restent rares en France (surfaces nécessaires, odeurs
de fermentation) [Le Verge et Bories, INRA, 2004](https://hal.inrae.fr/hal-02682878). Les rejets
relèvent de la redevance pour pollution d'origine non domestique
[code de l'environnement, Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074220/LEGISCTA000006188366/).

**Effluents industriels et pollutions accidentelles.** La neutralisation produit des pâtes et des
eaux de lavage à prétraiter avant rejet
[ITERG, 2025](https://iterg.com/wp-content/uploads/2025/10/Fiches-informations-fr-2.pdf). Le retour
d'expérience cumule les pertes vers les milieux : 25 000 L d'huile d'olive vers le réseau pluvial puis
un canal à Maussane-les-Alpilles (1992), 60 m3 d'hexane envoyés vers la station d'épuration à Sète
(2014), des pâtes de neutralisation rejetées en Seine à Grand-Couronne
[BARPI, 2018](https://www.aria.developpement-durable.gouv.fr/wp-content/uploads/2018/11/La-fabrication-des-huiles-v%C3%A9g%C3%A9tales-VP-Vpublicfinale-2.pdf).

**Réutilisation.** Le décret n° 2024-33 encadre les eaux réutilisées dans les entreprises du secteur
alimentaire [Légifrance, 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414). Au
moulin, une réutilisation intensive de l'eau de lavage peut concentrer les résidus phytosanitaires,
risque maîtrisé par un renouvellement périodique et une douche finale à l'eau propre
[France Olive, 2025](https://www.franceolive.fr/images/medias/2026/08/25/guide-des-bonnes-pratiques-hygiene-pour-elaboration-de-huile-olive-vierge-maj-2025.pdf).

## 5. Leviers connus, par catégorie du plan d'action

Onze leviers. Les mesures transversales (compteur par usage ACT_AGR_001, audit eau ACT_AGR_002, eau
de pluie ACT_AGR_006, plan de gestion et anticipation des restrictions ACT_AGR_009, démarche
collective ACT_AGR_010) seraient réutilisées telles quelles et ne sont pas reprises ici. Onze leviers
plus cinq transversales dépassent la cible de l'étape 3 : L10 est fusionnable avec L9, L11 avec
ACT_AGR_010.

### Sensibiliser et former (`sensibiliser_former`)

**L1. Former les équipes aux réglages et consignes économes en eau** (a, b, c). Au moulin : dosage de
l'eau, renouvellement de l'eau de lavage, nettoyage à sec en fin de journée ; en usine : purges,
consignes de confinement et conduite à tenir en cas de perte de refroidissement. La sensibilisation du
personnel est la première exigence de l'arrêté sécheresse ICPE au niveau de vigilance
[AIDA, 2023](https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement).
Effet indirect, non chiffré. Titre proposé : « Former les équipes aux réglages et consignes économes
en eau ».

### Suivre, comprendre et maîtriser ses consommations (`suivre_comprendre_maitriser`)

**L2. Suivre l'eau et les effluents par tonne traitée** (a, b, c). Au moulin, m3 de margines par
tonne d'olives comparés aux 0,4 à 2 m3/t de la littérature
[Hamdi, 1991](https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf), avec
les analyses de grignons et margines et la recherche de résidus d'huile dans les effluents proposées
par le laboratoire de France Olive
[France Olive, 2026](https://www.franceolive.fr/images/medias/2026/06/11/memento-du-moulinier-de-france-olive-2026.pdf).
En usine, m3 par tonne d'huile face aux niveaux MTD de 0,15 à 1,9 m3/t
[conclusions MTD FDM, 2019](https://www.legislation.gov.uk/eudn/2019/2031/annex) ; au fondoir, face
aux 1,55 m3/t [AIDA, 2025](https://aida.ineris.fr/reglementation/arrete-030725-relatif-prescriptions-generales-applicables-installations-relevant).
Ce ratio sert aussi à prouver la réduction de 20 % qui exclut de l'arrêté sécheresse. Titre proposé :
« Suivre le ratio d'eau et d'effluent par tonne traitée ».

### Améliorer l'efficacité hydrique de ses équipements (`ameliorer_efficacite_hydrique`)

**L3. Passer le refroidissement en circuit fermé** (b, c). Condensation de l'hexane, désodorisation,
vide et utilités en boucle fermée ou aéroréfrigérée. Obligatoire en enregistrement 2240 et au-delà de
10 m3/j en déclaration (voir section 4) ; à Dieppe, la baisse du besoin en eau de refroidissement
figure parmi les mesures de réduction, pour un prélèvement de 780 000 m3/an contre 1 200 000 autorisés
[SAIPOL, 2020](https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf).
Remplacer des condenseurs barométriques à eau perdue par des condenseurs en boucle fermée serait le
geste type en raffinerie (à confirmer, aucune source acceptée trouvée). Titre proposé : « Passer le
refroidissement des condenseurs en circuit fermé ».

**L4. Recycler l'eau de lavage des olives avec renouvellement maîtrisé** (a). Laveuse en
recirculation, renouvellement périodique et douche finale à l'eau propre, pratique compatible avec le
guide d'hygiène [France Olive, 2025](https://www.franceolive.fr/images/medias/2026/08/25/guide-des-bonnes-pratiques-hygiene-pour-elaboration-de-huile-olive-vierge-maj-2025.pdf).
Économie non chiffrée (à confirmer). Titre proposé : « Recycler l'eau de lavage des olives avec
douche finale ».

### Changer ses process ou pratiques (`changer_process_pratiques`)

**L5. Passer au décanteur deux phases** (a). Supprime l'eau de dilution et les margines séparées, au
prix de grignons à 60 à 70 % d'humidité ; en 2012, 45 % des moulins de la région en étaient équipés
(deux phases ou deux phases et demie), un peu plus d'un tiers en trois phases et moins de 20 % en
presse [Chambre d'agriculture PACA, 2012](https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494).
C'est le levier majeur du cas central, mais la charge polluante par tonne d'olives ne change pas
[Hamdi, 1991](https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf) : il
doit être couplé à L8. Titre proposé : « Passer au décanteur deux phases pour supprimer l'eau de
dilution ».

**L6. Nettoyer à sec avant de rincer et optimiser le nettoyage en place** (a, b, c). Raclage des
canalisations et nettoyage à sec avant rinçage, haute pression, mousse basse pression, optimisation
du nettoyage en place : techniques retenues par la MTD 7
[conclusions MTD FDM, 2019](https://www.legislation.gov.uk/eudn/2019/2031/annex), et citées parmi
les mesures de réduction à Dieppe
[SAIPOL, 2020](https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf).
Le nettoyage pèse 43 % de l'eau en agroalimentaire
[ARIA AURA, 2024](https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/).
Surtout pertinent en margarinerie et au moulin. Titre proposé : « Nettoyer à sec avant de rincer les
équipements ».

### Valoriser ou réutiliser les eaux non conventionnelles (`valoriser_reut_eaux_non_conventionnelles`)

**L7. Réutiliser eaux usées traitées, eaux de procédé et condensats** (b, c). Exemples : jusqu'à
350 000 m3/an d'eau potable remplacés par des eaux usées traitées pour Saipol Sète
[Sète agglopôle, s. d.](https://www.agglopole.fr/reutiliser-leau-pour-preserver-lavenir/), essais de
recyclage de 39 000 m3/an d'eau de lavage des tourteaux à Dieppe
[SAIPOL, 2020](https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf),
vapeur de cuisson recyclée vers les sécheurs au fondoir
[Sénat, 2001](https://www.senat.fr/rap/r00-321-1/r00-321-16.html). La réutilisation des condensats
comme eau d'appoint pour les usages sans contact serait possible (à confirmer). Cadre : MTD 7
(réutilisation sauf contrainte d'hygiène) et décret n° 2024-33
[Légifrance, 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414). Titre proposé :
« Réutiliser les eaux traitées et les condensats pour les usages sans contact ».

### Agir sur ses rejets et la qualité de l'eau (`agir_rejets_qualite`)

**L8. Organiser une filière encadrée pour les margines et grignons** (a). Mesure dédiée du cas
central. Épandage sous plan d'épandage (dès 200 kg d'olives par jour), co-compostage avec des déchets
verts qui dispense de plan d'épandage (ratio de 3 pour 1 avec des grignons deux phases, 7 pour 1 avec
des margines), en tenant compte de la richesse en potasse (10 t/ha de grignons deux phases apportent
95 kg de K2O) [Chambre d'agriculture PACA, 2012](https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494),
[arrêté du 5 décembre 2016, AIDA](https://aida.ineris.fr/reglementation/arrete-051216-relatif-prescriptions-applicables-a-certaines-installations-classees).
Une dose indicative de 30 m3 de margines par hectare et par an vient de travaux espagnols (Fiestas Ros
de Ursinos, 1986, cité par [Hamdi, 1991](https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf)),
à valider avec la chambre d'agriculture. Le bassin d'évaporation reste une option marginale en France
[Le Verge et Bories, INRA, 2004](https://hal.inrae.fr/hal-02682878). France Olive tient un service
effluents et un guide d'élimination des sous-produits sur demande
[France Olive, 2026](https://www.franceolive.fr/images/medias/2026/06/11/memento-du-moulinier-de-france-olive-2026.pdf).
Titre proposé : « Organiser une filière encadrée pour les margines et les grignons ».

**L9. Séparer et prétraiter les effluents gras, acides et chargés** (b, c). Séparation gravitaire eau
et hexane puis distillation de la phase aqueuse à 80 à 95 °C (MTD 32)
[conclusions MTD FDM, 2019](https://www.legislation.gov.uk/eudn/2019/2031/annex), prétraitement des
pâtes et eaux de lavage de neutralisation, station biologique ; à Dieppe, la station avec
méthanisation épure plus de 98 % de la DCO et rejette 125 mg/L
[SAIPOL, 2020](https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf).
Au fondoir, l'enjeu porte sur l'azote et la DCO des condensats (voir section 4). Titre proposé :
« Séparer et prétraiter les effluents gras et acides ».

**L10. Confiner les déversements d'huile et les eaux d'extinction** (a, b, c). Rétentions étanches,
obturation des réseaux pluviaux, capacité de confinement des eaux d'extinction, au vu des pertes
d'huile et d'hexane vers canal, station et Seine recensées par le
[BARPI, 2018](https://www.aria.developpement-durable.gouv.fr/wp-content/uploads/2018/11/La-fabrication-des-huiles-v%C3%A9g%C3%A9tales-VP-Vpublicfinale-2.pdf),
qui cite aussi un sinistre ayant produit 450 m3 d'eaux d'extinction. Fusionnable avec L9. Titre
proposé : « Confiner les déversements d'huile et les eaux d'extinction ».

### Agir sur le grand cycle de l'eau (`agir_grand_cycle`)

**L11. Mutualiser sous-produits et eaux avec le territoire** (a, b). Filières collectives de
compostage des grignons avec les oléiculteurs utilisateurs (à confirmer, aucun exemple sourcé),
partenariat de réutilisation avec la collectivité comme à Sète, où l'agence de l'eau Rhône
Méditerranée Corse apporte 10 M€ au programme de réutilisation
[Sète agglopôle, s. d.](https://www.agglopole.fr/aux-eaux-blanches-chaque-goutte-compte/),
participation aux instances locales de l'eau. Fusionnable avec ACT_AGR_010. Titre proposé :
« Mutualiser la gestion des sous-produits et des eaux avec le territoire ».

## 6. Codes limites au sein du périmètre

**10.41A (298 établissements)** réunit les trois populations : moulins, triturateurs et fondoirs.
Ce code est hétérogène par construction ; la question de profil prévue au périmètre est
indispensable, faute de quoi un moulin recevrait les mesures de refroidissement et un fondoir celles
des margines. Les fondoirs et producteurs d'huile de poisson y ont le profil le plus divergent
(effluents azotés, odeurs, flux imposé).

**10.41B (121)** : raffinage, parfois sans trituration ni hexane, avec ses propres niveaux MTD de
0,15 à 0,9 m3/t [conclusions MTD FDM, 2019](https://www.legislation.gov.uk/eudn/2019/2031/annex).
Profil (b) sans la trituration ; L3, L6, L9 restent centraux, L5 et L8 sont sans objet.

**10.42Z (9)** : la margarinerie s'écarte le plus. Émulsion avec phase aqueuse, pasteurisation,
refroidissement et cristallisation, nettoyage en place : un profil plus proche de l'industrie laitière
que de la trituration, sans margines (à confirmer, aucune source publique spécifique). Effectif
marginal, maintenu dans le périmètre avec les options « sans objet ».

## 7. Sources

| Organisme | Titre | Année | URL |
|---|---|---|---|
| Chambre d'agriculture PACA | Fiche n° 23, Grignons d'olives et compost | 2012 | https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494 |
| France Olive | Guide des bonnes pratiques d'hygiène pour l'élaboration de l'huile d'olive vierge | 2025 | https://www.franceolive.fr/images/medias/2026/08/25/guide-des-bonnes-pratiques-hygiene-pour-elaboration-de-huile-olive-vierge-maj-2025.pdf |
| France Olive | Mémento du moulinier | 2026 | https://www.franceolive.fr/images/medias/2026/06/11/memento-du-moulinier-de-france-olive-2026.pdf |
| ORSTOM (IRD) et Université de Provence | Hamdi M., thèse de doctorat sur le traitement des margines | 1991 | https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf |
| INRA | Le Verge S., Bories A., Les bassins d'évaporation naturelle des margines, Le Nouvel Olivier | 2004 | https://hal.inrae.fr/hal-02682878 |
| ITERG | Fiche information n° 2, La technologie des corps gras | 2025 | https://iterg.com/wp-content/uploads/2025/10/Fiches-informations-fr-2.pdf |
| Ministère de la transition écologique, BARPI | La fabrication des huiles végétales : une activité à risques | 2018 | https://www.aria.developpement-durable.gouv.fr/wp-content/uploads/2018/11/La-fabrication-des-huiles-v%C3%A9g%C3%A9tales-VP-Vpublicfinale-2.pdf |
| Commission européenne | Décision d'exécution (UE) 2019/2031, conclusions MTD industries agroalimentaire et laitière | 2019 | https://www.legislation.gov.uk/eudn/2019/2031/annex |
| AIDA, Ineris | Rubrique ICPE 2240 | en vigueur | https://aida.ineris.fr/reglementation/2240-extraction-traitement-huiles-corps-gras-dorigine-animale-vegetale |
| AIDA, Ineris | Arrêté du 24 avril 2017, enregistrement 2240 | 2017 | https://aida.ineris.fr/reglementation/arrete-240417-relatif-prescriptions-generales-applicables-installations-relevant |
| AIDA, Ineris | Arrêté du 5 décembre 2016, installations soumises à déclaration | 2016 | https://aida.ineris.fr/reglementation/arrete-051216-relatif-prescriptions-applicables-a-certaines-installations-classees |
| AIDA, Ineris | Rubrique ICPE 3650 | en vigueur | https://aida.ineris.fr/reglementation/3650-elimination-recyclage-carcasses-dechets-animaux |
| AIDA, Ineris | Arrêté du 3 juillet 2025, rubriques 3650 et 3710 | 2025 | https://aida.ineris.fr/reglementation/arrete-030725-relatif-prescriptions-generales-applicables-installations-relevant |
| AIDA, Ineris | Arrêté du 30 juin 2023, restrictions sécheresse des ICPE | 2023 | https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement |
| DREAL Normandie (dossier SAIPOL) | Note de présentation non technique, SAIPOL Dieppe | 2020 | https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf |
| Sète agglopôle méditerranée | Réutiliser l'eau pour préserver l'avenir | non datée | https://www.agglopole.fr/reutiliser-leau-pour-preserver-lavenir/ |
| Sète agglopôle méditerranée | Aux Eaux-Blanches, chaque goutte compte | non datée | https://www.agglopole.fr/aux-eaux-blanches-chaque-goutte-compte/ |
| Sénat | Farines : l'alimentation animale au cœur de la sécurité sanitaire, tome 1 | 2001 | https://www.senat.fr/rap/r00-321-1/r00-321-16.html |
| ARIA Auvergne-Rhône-Alpes | Des solutions pour réduire les tensions sur l'eau dans l'agroalimentaire | 2024 | https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/ |
| Légifrance | Décret n° 2024-33 du 24 janvier 2024 relatif aux eaux réutilisées dans les entreprises du secteur alimentaire | 2024 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414 |
| Légifrance | Code de l'environnement, redevances des agences de l'eau | en vigueur | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074220/LEGISCTA000006188366/ |

Notes sur les sources : les anciennes pages et guides AFIDOL (afidol.org) redirigent vers
franceolive.fr et ne sont plus accessibles, dont le guide de gestion des sous-produits et la page sur
la redevance ; la page HAL de Le Verge et Bories n'a été lue que par son résumé ; les références
citées par Hamdi (Boari 1984, Balice 1982, Fiestas Ros de Ursinos 1986) sont de seconde main, et le
titre exact de la thèse reste à relever. La fiche PACA date de 2012 : la répartition des procédés a
pu évoluer.

### Ce qui n'a pas pu être sourcé

Volume d'eau ajouté par un décanteur trois phases actuel, volume d'eau de lavage des olives et
économie de son recyclage ; usages d'eau de la pression à froid ; fin de campagne en février ;
ratio d'eau propre à la margarinerie ; sources et volumes d'eau des fondoirs et de leurs laveurs de
gaz ; économie du passage des condenseurs barométriques en boucle fermée ; filières collectives de
compostage ; conditions d'exonération de redevance des moulins qui compostent ; éligibilité des
moulins, triturateurs et fondoirs à l'exclusion « flux poussé » de l'arrêté sécheresse.

## Questions

### 1. Quelle est l'activité principale de votre site de production ?

`hui_q01` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Moulin à huile d'olive | `moulin_olive` | 0 | 0 |  |
| Huilerie par pression à froid (noix, colza, lin...) | `pression_froid` | 0 | 0 |  |
| Trituration, raffinage ou fabrication de margarine | `trituration_raffinage` | 0 | 0 |  |
| Fonte de graisses animales ou huile de poisson | `fonte_animale` | 0 | 0 |  |

### 2. Comment suivez-vous aujourd'hui la consommation d'eau de votre site ?

`hui_q02` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Pas de compteur, je m'en remets à la facture | `aucun_compteur` | 0 | 0 | comptage |
| Un compteur général, relevé de temps en temps | `compteur_general` | 1 | 1 | comptage |
| Des compteurs par poste ou par atelier, relevés | `par_poste` | 2 | 2 |  |
| Des compteurs par poste et un ratio par tonne traitée | `ratio_tonne` | 3 | 3 |  |

### 3. D'où provient l'eau que vous utilisez sur le site ? (plusieurs réponses possibles)

`hui_q03` · multi_choice · Connaissance & mesure · classe `source_eau`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Réseau public d'eau potable | `aep` | 0 | 0 | sources_alternatives |
| Forage ou captage d'eau souterraine | `forage` | 0 | 1 |  |
| Captage d'eau de surface (rivière, canal) | `surface` | 0 | 1 |  |
| Eau de pluie récupérée | `pluie` | 1 | 2 |  |
| Eaux recyclées sur le site ou eaux usées traitées | `eaux_reutilisees` | 3 | 3 |  |

### 4. Quelle est votre consommation d'eau annuelle, tous usages confondus ?

`hui_q04` · numeric · Connaissance & mesure

- Saisie en m³/an, de 0 à 10000000 · si renseignée : maturité 1, concernement 1, topics []

### 5. Avez-vous réalisé un audit eau ou un diagnostic de vos consommations ?

`hui_q05` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, jamais | `jamais` | 0 | 0 | audit |
| On y a réfléchi mais pas encore fait | `envisage` | 0 | 2 | audit |
| Oui, il y a plus de cinq ans | `ancien` | 1 | 2 | audit |
| Oui, il y a moins de trois ans | `recent` | 3 | 3 |  |

### 6. Comment nettoyez-vous vos équipements et vos sols en fin de journée ou de campagne ?

`hui_q06` · single_choice · Procédés & nettoyage

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Au jet d'eau, sans raclage préalable | `jet_sans_raclage` | 0 | 0 | nettoyage |
| Raclage à sec sur certains postes, puis jet | `raclage_partiel` | 1 | 1 | nettoyage |
| Raclage à sec partout, puis rinçage haute pression | `raclage_systematique` | 2 | 2 |  |
| Consignes écrites par équipement, eau suivie | `consignes_suivies` | 3 | 3 |  |

### 7. Comment l'eau de votre laveuse à olives est-elle gérée pendant la campagne ?

`hui_q07` · single_choice · Procédés & nettoyage · condition : `{"questionId": "hui_q01", "operator": "eq", "value": "moulin_olive"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Elle coule en continu pendant le lavage | `eau_courante` | 0 | 0 | eau_moulin |
| Bac rempli puis vidé chaque jour, sans recyclage | `vidange_journaliere` | 1 | 1 | eau_moulin |
| Eau recyclée, renouvelée, avec douche finale propre | `recirculation_douche` | 3 | 3 |  |
| Pas de lavage, effeuillage à sec seulement | `sans_lavage` | 2 | 2 |  |

### 8. Avec quel procédé séparez-vous l'huile de la pâte d'olive au moulin ?

`hui_q08` · single_choice · Procédés & nettoyage · condition : `{"questionId": "hui_q01", "operator": "eq", "value": "moulin_olive"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Décanteur trois phases, avec eau ajoutée | `trois_phases` | 0 | 0 | eau_moulin |
| Presse traditionnelle (scourtins) | `presse` | 2 | 2 |  |
| Décanteur deux phases et demie | `deux_phases_et_demie` | 2 | 2 |  |
| Décanteur deux phases, sans eau de dilution | `deux_phases` | 3 | 3 |  |

### 9. Que deviennent vos margines et vos grignons en fin de campagne ?

`hui_q09` · single_choice · Réutilisation & rejets · condition : `{"questionId": "hui_q01", "operator": "eq", "value": "moulin_olive"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Rejetés au réseau, au fossé ou stockés sans suite | `rejet_reseau_milieu` | 0 | 0 | margines |
| Épandus chez un voisin, sans plan d'épandage | `sans_plan` | 1 | 1 | margines |
| Épandus selon un plan d'épandage à jour | `plan_epandage` | 2 | 2 |  |
| Compostés ou valorisés par une filière dédiée | `compost_valorisation` | 3 | 3 |  |

### 10. Comment refroidissez-vous vos condenseurs (hexane, désodorisation, buées) ?

`hui_q10` · single_choice · Procédés & nettoyage · condition : `{"questionId": "hui_q01", "operator": "in", "value": ["trituration_raffinage", "fonte_animale"]}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Eau prélevée puis rejetée, sans recirculation | `eau_perdue` | 0 | 0 | refroidissement |
| En partie en eau perdue, en partie en boucle | `mixte` | 1 | 1 | refroidissement |
| Boucle fermée avec tour ou aéroréfrigérant | `circuit_ferme` | 3 | 3 |  |
| Pas de refroidissement à eau sur le site | `sans_eau` | 2 | 2 |  |

### 11. Réutilisez-vous des condensats ou des eaux traitées pour d'autres usages ?

`hui_q11` · single_choice · Réutilisation & rejets · condition : `{"questionId": "hui_q01", "operator": "in", "value": ["trituration_raffinage", "fonte_animale"]}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non | `non` | 0 | 0 | sources_alternatives |
| On y a réfléchi mais pas encore fait | `envisage` | 0 | 2 | sources_alternatives |
| Ponctuellement, sans organisation ni déclaration | `ponctuel` | 1 | 1 | sources_alternatives |
| Oui, de façon organisée et déclarée | `organise_declare` | 3 | 3 |  |

### 12. Comment vos effluents gras et acides sont-ils traités avant d'être rejetés ?

`hui_q12` · single_choice · Réutilisation & rejets · condition : `{"questionId": "hui_q01", "operator": "in", "value": ["trituration_raffinage", "fonte_animale"]}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Aucun traitement, rejet direct au réseau | `aucun_traitement` | 0 | 0 | effluents |
| Un séparateur à graisses, sans autre traitement | `separateur_seul` | 1 | 1 | effluents |
| Prétraitement et convention de rejet à jour | `pretraitement_convention` | 2 | 2 |  |
| Station sur site, rétentions et réseaux obturables | `station_confinement` | 3 | 3 |  |

### 13. Avez-vous analysé votre exposition aux restrictions d'eau en période de sécheresse ?

`hui_q13` · single_choice · Gouvernance & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, ce n'est pas un sujet que j'ai regardé | `non_analyse` | 0 | 0 | risque_reglementaire |
| Je suis informé, sans analyse formelle | `informe` | 1 | 2 | risque_reglementaire |
| Oui, je sais ce qui s'arrêterait et dans quel ordre | `evalue` | 2 | 2 |  |
| Oui, et un plan écrit dit quoi réduire à chaque niveau | `plan_formalise` | 3 | 3 |  |

### 14. Participez-vous à une démarche collective sur l'eau à l'échelle du territoire ?

`hui_q14` · single_choice · Gouvernance & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, aucune | `non` | 0 | 0 | collectif |
| J'en ai entendu parler, sans y prendre part | `informe` | 1 | 1 | collectif |
| Oui, je participe aux réunions | `participe` | 2 | 2 |  |
| Oui, et j'y porte des engagements chiffrés | `pilote` | 3 | 3 |  |

## Filtres du plan d'action

| Filtre | Règle | Type | Effet | Priorité | Mesures |
|---|---|---|---|---|---|
| `f_suivi_absent` | Pas de compteur ou compteur général seul : recommander le comptage par poste | answer | add | 1 | ACT_AGR_001 |
| `f_suivi_inconnu` | Mode de suivi de l'eau inconnu : ne pas savoir est le motif même de poser des compteurs | answer | add | 3 | ACT_AGR_001 |
| `f_sans_pluie` | Aucune eau de pluie récupérée : proposer la récupération pour les usages sans contact avec l'huile | class | add | 1 | ACT_AGR_006 |
| `f_pluie_moulin` | Moulin à huile d'olive : l'eau potable est obligatoire pour le lavage, la trituration et le nettoyage, l'eau de pluie ne servirait qu'aux abords | answer | remove | 2 | ACT_AGR_006 |
| `f_pluie_gros_site` | Site de 100 000 m3 par an ou plus : l'eau de pluie récupérable est négligeable devant les volumes, les leviers sont le refroidissement et la réutilisation | numeric | remove | 2 | ACT_AGR_006 |
| `f_petit_site_compteur` | Moins de 500 m3 par an : un seul usage réel, relever le compteur général suffit, pas de compteurs divisionnaires | numeric | remove | 2 | ACT_AGR_001 |
| `f_petit_site_audit` | Moins de 500 m3 par an : un audit externe coûterait plus que la facture d'eau, ne pas le proposer à un site qui répond | numeric | remove | 2 | ACT_AGR_002 |
| `f_conso_icpe` | Consommation annuelle de 10 000 m3 ou plus, seuil de l'arrêté sécheresse ICPE du 30 juin 2023 : un plan de gestion écrit devient nécessaire | numeric | add | 1 | ACT_AGR_009 |
| `f_volume_faible_reut` | Sous 10 000 m3 par an, l'étude et la procédure préfectorale d'une réutilisation ne s'amortissent pas : écarter la mesure | numeric | remove | 2 | ACT_HUI_005 |
| `f_pas_audit` | Pas d'audit, audit seulement envisagé ou de plus de cinq ans : recommander le diagnostic | answer | add | 1 | ACT_AGR_002 |
| `f_audit_inconnu` | Question de l'audit laissée sans réponse : ne pas savoir est le motif même de recommander le diagnostic | answer | add | 3 | ACT_AGR_002 |
| `f_nettoyage_au_jet` | Nettoyage au jet sans raclage, ou raclage partiel : recommander le nettoyage à sec préalable et des consignes | answer | add | 1 | ACT_HUI_004 |
| `f_lavage_olives_ouvert` | Laveuse à olives en eau courante ou vidée chaque jour sans recyclage : recommander la recirculation avec douche finale | answer | add | 1 | ACT_HUI_001 |
| `f_trois_phases` | Décanteur trois phases qui dilue la pâte : proposer le passage au deux phases | answer | add | 1 | ACT_HUI_003 |
| `f_margines_hors_filiere` | Margines et grignons rejetés, stockés sans suite ou épandus sans plan : organiser une filière encadrée | answer | add | 1 | ACT_HUI_006 |
| `f_refroidissement_ouvert` | Condenseurs refroidis tout ou partie en eau perdue : recommander la boucle fermée | answer | add | 1 | ACT_HUI_002 |
| `f_pas_de_reut` | Aucune réutilisation organisée des condensats ou eaux traitées : proposer la réutilisation pour les usages sans contact | answer | add | 1 | ACT_HUI_005 |
| `f_effluents_fragiles` | Effluents rejetés sans traitement ou avec un simple séparateur à graisses : séparer, prétraiter et confiner | answer | add | 1 | ACT_HUI_007 |
| `f_risque_non_analyse` | Exposition aux restrictions non analysée ou connue sans formalisation : recommander le plan de gestion | answer | add | 1 | ACT_AGR_009 |
| `f_plan_deja_formalise` | Plan de gestion de l'eau déjà écrit : ne pas le proposer, même au-dessus du seuil de 10 000 m3 | answer | remove | 2 | ACT_AGR_009 |
| `f_hors_collectif` | Hors de toute démarche collective de territoire : proposer d'y entrer | answer | add | 1 | ACT_AGR_010 |

## Mesures

### ACT_HUI_001 · Recycler l'eau de lavage des olives avec une douche finale à l'eau propre

*Lavage des olives en boucle* · ameliorer_efficacite_hydrique · secteurs ['industrie_huiles'] · impact 2 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "faible", "humain": "faible"} · statut brouillon

Faire tourner l'eau de la laveuse en circuit avec un renouvellement périodique, et terminer le lavage des olives par une douche à l'eau potable. Vous réduisez le premier prélèvement du moulin sans risque sanitaire, à condition de renouveler l'eau avant qu'elle ne concentre terre et résidus.

- **avertissement** : L'eau utilisée pour la trituration et le nettoyage doit être potable, et une réutilisation intensive de l'eau de lavage peut concentrer les résidus de traitements phytosanitaires : le guide d'hygiène de la filière demande un renouvellement périodique et une douche finale à l'eau propre. (https://www.franceolive.fr/images/medias/2026/08/25/guide-des-bonnes-pratiques-hygiene-pour-elaboration-de-huile-olive-vierge-maj-2025.pdf)
- Sources :
  - description : https://www.franceolive.fr/images/medias/2026/08/25/guide-des-bonnes-pratiques-hygiene-pour-elaboration-de-huile-olive-vierge-maj-2025.pdf (2025-01-01) · « Réutilisation de l'eau de lavage possible avec renouvellement périodique et douche finale à l'eau propre ; eau potable pour la trituration et le nettoyage. »

### ACT_HUI_002 · Passer le refroidissement des condenseurs en circuit fermé

*Refroidissement en boucle* · ameliorer_efficacite_hydrique · secteurs ['industrie_huiles'] · impact 3 · facilité 1 · moyen_terme · effort {"capex": "important", "opex": "faible", "humain": "moyen"} · statut brouillon

Remplacer l'eau perdue des condenseurs (hexane, désodorisation, vide) et des buées de cuisson par une boucle fermée avec tour ou aéroréfrigérant. C'est le premier poste d'eau d'une usine de trituration ou d'un fondoir, et un circuit fermé rend le site bien moins dépendant du débit de la rivière en étiage.

- **avertissement** : La réfrigération en circuit ouvert est interdite aux installations 2240 soumises à enregistrement, et au-delà de 10 m3 par jour pour celles soumises à déclaration. (https://aida.ineris.fr/reglementation/arrete-240417-relatif-prescriptions-generales-applicables-installations-relevant)
- **retour_experience** : À Dieppe, l'usine de trituration Saipol inscrit la baisse de son besoin en eau de refroidissement parmi ses mesures de réduction, pour un prélèvement projeté de 780 000 m3 par an contre 1 200 000 m3 autorisés. (https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf)
- **info** : Une tour aéroréfrigérante relève de la rubrique ICPE 2921 et impose une surveillance des légionelles. Un aéroréfrigérant sec évite cette obligation mais perd en efficacité par forte chaleur. (https://aida.ineris.fr/inspection-icpe/air/prevention-legionnellose/tours-aerorefrigerantes)
- Sources :
  - infos_complementaires : https://aida.ineris.fr/reglementation/arrete-240417-relatif-prescriptions-generales-applicables-installations-relevant (sans date) · « Enregistrement 2240 : la réfrigération en circuit ouvert est interdite. »
  - infos_complementaires : https://aida.ineris.fr/reglementation/arrete-051216-relatif-prescriptions-applicables-a-certaines-installations-classees (sans date) · « Déclaration : circuits de refroidissement ouverts interdits au-delà de 10 m3/j. »
  - description : https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf (2020-01-01) · « 780 000 m3/an d'eau de refroidissement prélevée puis restituée à l'Arques, 1 200 000 m3 autorisés ; baisse du besoin en refroidissement parmi les mesures. »
  - infos_complementaires : https://aida.ineris.fr/inspection-icpe/air/prevention-legionnellose/tours-aerorefrigerantes (sans date) · « Tours aéroréfrigérantes, rubrique 2921, prévention de la légionellose. »

### ACT_HUI_003 · Passer au décanteur deux phases pour supprimer l'eau de dilution

*Décanteur deux phases* · changer_process_pratiques · secteurs ['industrie_huiles'] · impact 3 · facilité 1 · moyen_terme · effort {"capex": "important", "opex": "faible", "humain": "moyen"} · statut brouillon

Remplacer le décanteur trois phases, qui dilue la pâte d'olive avec de l'eau ajoutée, par un décanteur deux phases qui sépare l'huile sans dilution. Vous supprimez l'eau de process et les margines séparées, au prix de grignons plus humides qu'il faut ensuite épandre ou composter.

- **info** : Un système continu trois phases peut produire jusqu'à 2 m3 de margines par tonne d'olives, contre 0,4 à 0,5 m3 en presse traditionnelle. (https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf)
- **info** : En 2012, 45 % des moulins de Provence-Alpes-Côte d'Azur travaillaient déjà en deux phases ou deux phases et demie. Les grignons sortent alors à 60 à 70 % d'humidité, contre 50 à 55 % en trois phases. (https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494)
- **avertissement** : La charge polluante par tonne d'olives ne change pas : elle passe des margines aux grignons. Le passage en deux phases se prépare donc avec la filière d'épandage ou de compostage des grignons. (https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf)
- Sources :
  - infos_complementaires : https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf (1991-01-01) · « 0,4 à 0,5 m3 de margines par tonne en presse, jusqu'à 2 m3/t en système continu ; 45 à 55 kg DBO5 par tonne d'olives quel que soit le procédé. »
  - infos_complementaires : https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494 (2012-01-01) · « 45 % des moulins en deux phases ou deux phases et demie ; grignons à 60 à 70 % d'humidité contre 50 à 55 % en trois phases ; substantielles économies d'eau. »

### ACT_HUI_004 · Nettoyer à sec avant de rincer et fixer des consignes de nettoyage

*Nettoyage à sec d'abord* · changer_process_pratiques · secteurs ['industrie_huiles'] · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut brouillon

Racler et récupérer les résidus d'huile et de pâte avant tout rinçage, puis rincer au jet haute pression ou à la mousse selon des consignes écrites pour chaque équipement. Vous réduisez à la fois l'eau de nettoyage et la charge grasse envoyée aux effluents, sans investissement lourd.

- **info** : Le nettoyage à sec préalable, le jet haute pression, la mousse et l'optimisation du nettoyage en place figurent parmi les meilleures techniques disponibles de l'agroalimentaire pour réduire la consommation d'eau. (https://www.legislation.gov.uk/eudn/2019/2031/annex)
- **info** : Dans l'agroalimentaire breton, le nettoyage représente 43 % de l'eau utilisée contre 33 % pour le process, et jusqu'à 80 à 85 % dans certaines entreprises. (https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/)
- Sources :
  - infos_complementaires : https://www.legislation.gov.uk/eudn/2019/2031/annex (2019-11-12) · « MTD 7 : nettoyage à sec, haute pression, mousse, optimisation du nettoyage en place. »
  - infos_complementaires : https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/ (2024-01-01) · « Nettoyage 43 % de l'eau utilisée, process 33 %, jusqu'à 80 à 85 % dans certaines entreprises. »

### ACT_HUI_005 · Réutiliser les eaux traitées et les condensats pour les usages sans contact

*Eaux réutilisées* · valoriser_reut_eaux_non_conventionnelles · secteurs ['industrie_huiles'] · impact 2 · facilité 2 · moyen_terme · effort {"capex": "moyen", "opex": "moyen", "humain": "moyen"} · statut brouillon

Faire traiter vos eaux de procédé, vos condensats ou les eaux usées de la station voisine pour alimenter les usages sans contact avec l'huile : chaudière, refroidissement, lavage des sols et des camions. Vous remplacez de l'eau potable ou prélevée par une eau déjà disponible, levier adapté aux usines et aux fondoirs.

- **avertissement** : La réutilisation d'eaux dans une entreprise du secteur alimentaire est encadrée par le décret n° 2024-33 : l'usage visé, la qualité exigée et la procédure préfectorale se vérifient avant les travaux. (https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414)
- **retour_experience** : À Sète, le programme de réutilisation de l'agglomération doit substituer jusqu'à 350 000 m3 d'eau potable par an aux besoins de l'usine Saipol. (https://www.agglopole.fr/reutiliser-leau-pour-preserver-lavenir/)
- **retour_experience** : À Dieppe, Saipol a mené des essais de recyclage de 39 000 m3 par an d'eau de lavage des tourteaux. (https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf)
- Sources :
  - infos_complementaires : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414 (2024-01-24) · « Décret relatif aux eaux réutilisées dans les entreprises du secteur alimentaire. »
  - infos_complementaires : https://www.agglopole.fr/reutiliser-leau-pour-preserver-lavenir/ (sans date) · « Jusqu'à 350 000 m3/an d'eau potable substitués pour l'usine Saipol. »
  - infos_complementaires : https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf (2020-01-01) · « Essais de recyclage de 39 000 m3/an d'eau de lavage des tourteaux. »
  - description : https://www.senat.fr/rap/r00-321-1/r00-321-16.html (2001-01-01) · « Au fondoir, la vapeur de cuisson est recyclée pour alimenter les sécheurs. »

### ACT_HUI_006 · Organiser une filière encadrée pour les margines et les grignons

*Filière margines et grignons* · agir_rejets_qualite · secteurs ['industrie_huiles'] · impact 2 · facilité 2 · court_terme · effort {"capex": "faible", "opex": "moyen", "humain": "moyen"} · statut brouillon

Établir un plan d'épandage des margines et des grignons avec des agriculteurs voisins, ou les confier à une plateforme de co-compostage avec des déchets verts. Vous sécurisez l'évacuation de l'effluent le plus chargé du moulin, sans rejet au réseau ni au milieu, et vous restez en règle dès 200 kg d'olives par jour.

- **avertissement** : Au-delà de 200 kg d'olives par jour, le moulin est une installation classée et doit disposer d'un plan d'épandage de ses margines et grignons, avec étude préalable et cahier d'épandage. (https://aida.ineris.fr/reglementation/arrete-051216-relatif-prescriptions-applicables-a-certaines-installations-classees)
- **info** : Les margines portent 45 à 55 kg de DBO5 par tonne d'olives traitées et peuvent dépasser 100 g/L de DCO, soit plusieurs centaines de fois une eau usée domestique. (https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf)
- **info** : Co-compostés avec des déchets verts (environ 3 volumes pour 1 de grignons deux phases, 7 pour 1 de margines), grignons et margines donnent un compost conforme à la norme NF U 44-051, utilisable sans plan d'épandage. (https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494)
- **ressource** : Mémento du moulinier, service effluents de France Olive (https://www.franceolive.fr/images/medias/2026/06/11/memento-du-moulinier-de-france-olive-2026.pdf)
- Sources :
  - infos_complementaires : https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=207494 (2012-01-01) · « Plan d'épandage exigé au-delà de 200 kg d'olives par jour ; co-compostage conforme NF U 44-051 ; ratios 3 pour 1 et 7 pour 1. »
  - infos_complementaires : https://aida.ineris.fr/reglementation/arrete-051216-relatif-prescriptions-applicables-a-certaines-installations-classees (sans date) · « Annexe I, point 5.8 : étude préalable, plan et cahier d'épandage. »
  - infos_complementaires : https://horizon.documentation.ird.fr/exl-doc/pleins_textes/doc34-01/34545.pdf (1991-01-01) · « 45 à 55 kg de DBO5 par tonne d'olives ; DCO des margines pouvant dépasser 100 g/L. »
  - infos_complementaires : https://www.franceolive.fr/images/medias/2026/06/11/memento-du-moulinier-de-france-olive-2026.pdf (2026-01-01) · « Service effluents, analyses de grignons et margines, guide d'élimination des sous-produits. »

### ACT_HUI_007 · Séparer, prétraiter et confiner les effluents gras et acides du site

*Effluents gras prétraités* · agir_rejets_qualite · secteurs ['industrie_huiles'] · impact 2 · facilité 1 · moyen_terme · effort {"capex": "important", "opex": "moyen", "humain": "moyen"} · statut brouillon

Séparer à la source les eaux huileuses, les eaux acides de neutralisation et les condensats chargés, les prétraiter avant rejet, et équiper le site de rétentions et d'obturateurs de réseau. Vous tenez les valeurs limites de rejet, réduisez la redevance pollution et évitez qu'une fuite d'huile ou d'hexane n'atteigne le milieu.

- **avertissement** : Une installation 2240 soumise à enregistrement ne peut rejeter plus de 10 mg/L d'hydrocarbures totaux. (https://aida.ineris.fr/reglementation/arrete-240417-relatif-prescriptions-generales-applicables-installations-relevant)
- **retour_experience** : À Dieppe, la station d'épuration de Saipol avec méthanisation élimine plus de 98 % de la DCO et rejette 125 mg/L. (https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf)
- **retour_experience** : Le retour d'expérience des accidents recense 25 000 L d'huile d'olive partis au pluvial puis dans un canal (1992) et 60 m3 d'hexane envoyés vers une station d'épuration (2014). (https://www.aria.developpement-durable.gouv.fr/wp-content/uploads/2018/11/La-fabrication-des-huiles-v%C3%A9g%C3%A9tales-VP-Vpublicfinale-2.pdf)
- Sources :
  - infos_complementaires : https://aida.ineris.fr/reglementation/arrete-240417-relatif-prescriptions-generales-applicables-installations-relevant (sans date) · « Hydrocarbures totaux rejetés limités à 10 mg/L. »
  - infos_complementaires : https://www.normandie.developpement-durable.gouv.fr/IMG/pdf/a1482_20_119_saipol_dieppe_v3.1_note_de_presentation_non_technique.pdf (2020-01-01) · « Station avec méthanisation, plus de 98 % de la DCO épurée, rejet à 125 mg/L. »
  - infos_complementaires : https://www.aria.developpement-durable.gouv.fr/wp-content/uploads/2018/11/La-fabrication-des-huiles-v%C3%A9g%C3%A9tales-VP-Vpublicfinale-2.pdf (2018-11-01) · « 25 000 L d'huile d'olive vers le pluvial à Maussane-les-Alpilles (1992), 60 m3 d'hexane vers la station à Sète (2014). »
  - description : https://www.legislation.gov.uk/eudn/2019/2031/annex (2019-11-12) · « MTD 32 : séparation gravitaire eau et hexane puis distillation de la phase aqueuse. »

## Simulation

# Simulation du référentiel "Huiles et corps gras" (industrie_huiles)

Source : staging + publié · 14 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 8 personas

### Alertes (0)

Aucune.

### Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 0, médiane 3, max 8
- Plans vides : 1 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

### Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 57 % |
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 53 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 42 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 41 % |
| ACT_HUI_004 | Nettoyage à sec d'abord | changer_process_pratiques | 41 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 32 % |
| ACT_HUI_007 | Effluents gras prétraités | agir_rejets_qualite | 18 % |
| ACT_HUI_002 | Refroidissement en boucle | ameliorer_efficacite_hydrique | 17 % |
| ACT_HUI_001 | Lavage des olives en boucle | ameliorer_efficacite_hydrique | 14 % |
| ACT_HUI_005 | Eaux réutilisées | valoriser_reut_eaux_non_conventionnelles | 11 % |
| ACT_HUI_006 | Filière margines et grignons | agir_rejets_qualite | 11 % |
| ACT_HUI_003 | Décanteur deux phases | changer_process_pratiques | 3 % |

### Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 19 % | | faible | 7 % |
| intermediaire | 77 % | | moyen | 86 % |
| avance | 5 % | | eleve | 8 % |

### Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_absent | answer | add | 43 % |
| f_suivi_inconnu | answer | add | 14 % |
| f_sans_pluie | class | add | 57 % |
| f_pluie_moulin | answer | remove | 23 % |
| f_pluie_gros_site | numeric | remove | 27 % |
| f_petit_site_compteur | numeric | remove | 35 % |
| f_petit_site_audit | numeric | remove | 35 % |
| f_conso_icpe | numeric | add | 37 % |
| f_volume_faible_reut | numeric | remove | 54 % |
| f_pas_audit | answer | add | 69 % |
| f_audit_inconnu | answer | add | 8 % |
| f_nettoyage_au_jet | answer | add | 41 % |
| f_lavage_olives_ouvert | answer | add | 14 % |
| f_trois_phases | answer | add | 3 % |
| f_margines_hors_filiere | answer | add | 11 % |
| f_refroidissement_ouvert | answer | add | 17 % |
| f_pas_de_reut | answer | add | 25 % |
| f_effluents_fragiles | answer | add | 18 % |
| f_risque_non_analyse | answer | add | 43 % |
| f_plan_deja_formalise | answer | remove | 22 % |
| f_hors_collectif | answer | add | 42 % |

### Questions conditionnelles

- hui_q07 : visible pour 23 % des profils
- hui_q08 : visible pour 23 % des profils
- hui_q09 : visible pour 23 % des profils
- hui_q10 : visible pour 38 % des profils
- hui_q11 : visible pour 38 % des profils
- hui_q12 : visible pour 38 % des profils

### Personas

### Moulin à huile d'olive, rien de formalisé (moulin_novice)

Moulin familial de trois personnes dans le Var, 900 m³ d'eau du réseau par an concentrés sur la campagne d'hiver. Laveuse à olives en eau courante, décanteur trois phases, margines épandues chez un voisin sans plan d'épandage, nettoyage au jet. Un compteur général jamais relevé, aucun audit, restrictions et démarches locales jamais regardées.

Maturité 9 % (novice) · concernement 9 % · axes : eau_moulin, comptage, sources_alternatives, audit, nettoyage, margines, risque_reglementaire, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage à sec d'abord (ACT_HUI_004, immediat)
- Lavage des olives en boucle (ACT_HUI_001, court_terme)
- Filière margines et grignons (ACT_HUI_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Décanteur deux phases (ACT_HUI_003, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Usine de trituration et raffinage équipée, en réflexion (raffinerie_equipee)

Site de trituration de colza et de raffinage de 80 salariés, 250 000 m³ par an entre réseau public et prise en rivière. Condenseurs en boucle fermée sur tours, prétraitement des effluents avec convention de rejet à jour, compteurs par atelier. Raclage à sec sur une partie des postes seulement, réutilisation des condensats envisagée sans suite, audit de plus de cinq ans, informé des restrictions sans analyse formelle.

Maturité 36 % (intermediaire) · concernement 52 % · axes : sources_alternatives, audit, nettoyage, risque_reglementaire, collectif

- Audit eau (ACT_AGR_002, immediat)
- Nettoyage à sec d'abord (ACT_HUI_004, immediat)
- Démarche collective (ACT_AGR_010, court_terme)
- Eaux réutilisées (ACT_HUI_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Huilerie de noix par pression à froid, sans eau de process (huilerie_pression_froid)

Huilerie artisanale de deux personnes en Dordogne, pression à froid de noix et de noisettes, 150 m³ d'eau du réseau par an pour le nettoyage et les sanitaires. Pas de lavage de matière première, pas de refroidissement ni d'effluent de process. Raclage à sec systématique, compteur général, jamais d'audit, restrictions non regardées.

Maturité 17 % (novice) · concernement 17 % · axes : comptage, sources_alternatives, audit, risque_reglementaire, collectif

- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Site de trituration avancé, tout est en place (site_avance)

Grand site de trituration et de raffinage, 400 000 m³ par an entre forage, eau de pluie et eaux usées traitées de la collectivité. Compteurs par poste et ratio par tonne suivis, audit récent, consignes de nettoyage écrites, condenseurs en boucle fermée, réutilisation déclarée des condensats, station sur site avec rétentions. Plan de restriction écrit, engagements chiffrés dans le contrat de nappe.

Maturité 85 % (avance) · concernement 85 % · axes : aucun

Plan vide.

### Moulin, réponses de la secrétaire qui ne sait presque rien (moulin_ne_sait_pas)

La comptable d'un moulin coopératif répond à la place du responsable de production. Elle sait que le site est un moulin à huile d'olive et que la facture d'eau tourne autour de 3 000 m³ par an, et ne connaît rien d'autre : compteurs, procédé, margines, audit, restrictions.

Maturité 17 % (novice) · concernement 17 % · axes : aucun

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Fondoir sous autorisation, conforme mais sans rien au-delà (fondoir_contraint)

Fondoir de graisses animales de 40 salariés, soumis à autorisation, 120 000 m³ par an entre forage et prise en rivière. Refroidissement en boucle fermée et station d'épuration avec rétentions, comme l'exige l'arrêté, compteurs par atelier, raclage systématique. Aucune réutilisation des condensats, audit de plus de cinq ans, sait ce qui s'arrêterait en crise sans plan écrit, hors de toute démarche collective.

Maturité 42 % (intermediaire) · concernement 52 % · axes : audit, sources_alternatives, collectif

- Audit eau (ACT_AGR_002, immediat)
- Démarche collective (ACT_AGR_010, court_terme)
- Eaux réutilisées (ACT_HUI_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Moulin coopératif saisonnier déjà en deux phases (moulin_cooperatif_deux_phases)

Moulin coopératif des Alpilles, 2 500 m³ du réseau par an sur trois mois de campagne, décanteur deux phases, laveuse en recirculation avec douche finale, grignons épandus selon un plan à jour. Un compteur général, raclage à sec sur certains postes seulement, audit envisagé, informé des restrictions, participe aux réunions du contrat de rivière.

Maturité 42 % (intermediaire) · concernement 52 % · axes : comptage, sources_alternatives, audit, nettoyage, risque_reglementaire

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage à sec d'abord (ACT_HUI_004, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Margarinerie tout réseau, refroidissement à l'eau perdue (margarinerie_tout_reseau)

Margarinerie de 30 salariés alimentée uniquement par le réseau public, 60 000 m³ par an. Refroidissement de la cristallisation en partie à l'eau perdue, séparateur à graisses seul avant le réseau communal, aucune réutilisation. Compteur général, jamais d'audit, raclage partiel, restrictions non analysées.

Maturité 15 % (novice) · concernement 15 % · axes : sources_alternatives, comptage, audit, nettoyage, refroidissement, effluents, risque_reglementaire, collectif

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Nettoyage à sec d'abord (ACT_HUI_004, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Démarche collective (ACT_AGR_010, court_terme)
- Eaux réutilisées (ACT_HUI_005, moyen_terme)
- Refroidissement en boucle (ACT_HUI_002, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Effluents gras prétraités (ACT_HUI_007, moyen_terme)

## Couverture par les solutions

# Couverture des mesures : industrie_huiles (seeds + staging)

12 mesures visibles · 3 sans prestataire · 7 sans aide · 3 sans rien

| Mesure | Catégorie | Prestataires liés | Aides liées |
|---|---|---|---|
| ACT_AGR_009 Plan de gestion de l'eau | Sensibiliser et former | aucun | aucune |
| ACT_AGR_001 Compteur par usage | Suivre, comprendre et maîtriser ses consommations | OID Consultants [conseil_etude+materiel] | aucune |
| ACT_AGR_002 Audit eau | Suivre, comprendre et maîtriser ses consommations | CRITT Agroalimentaire Sud (Provence-Alpes-Côte d'Azur) [conseil_etude], OID Consultants [conseil_etude], GreenFlex [conseil_etude] | Ressourc'Eau, programme de gestion durable de l'eau (CCI Pays de la Loire et agence de l'eau Loire-Bretagne), CEDRE Premiers pas (Région Sud), Diag Eco-Flux, diagnostic des flux énergie, eau, matières et déchets (ADEME et Bpifrance) |
| ACT_HUI_001 Lavage des olives en boucle | Améliorer l'efficacité hydrique de ses équipements | Alfa Laval France & North West Africa [materiel] | CEDRE Investissement (Région Sud) |
| ACT_HUI_002 Refroidissement en boucle | Améliorer l'efficacité hydrique de ses équipements | Alfa Laval France & North West Africa [materiel], GEA Process Engineering [materiel] | CEDRE Investissement (Région Sud) |
| ACT_HUI_003 Décanteur deux phases | Changer ses process ou pratiques | Alfa Laval France & North West Africa [materiel] | aucune |
| ACT_HUI_004 Nettoyage à sec d'abord | Changer ses process ou pratiques | aucun | aucune |
| ACT_AGR_006 Récupération d'eau de pluie | Valoriser ou réutiliser les eaux non conventionnelles | EcoRecup (récupération eaux pluviales) [conseil_etude+travaux], GreenFlex [conseil_etude] | Prêt Vert BPI : Transition écologique |
| ACT_HUI_005 Eaux réutilisées | Valoriser ou réutiliser les eaux non conventionnelles | John Cockerill Proserpol [conseil_etude+travaux], GreenFlex [conseil_etude] | DECARB FLASH 2025-2027 (ADEME, France 2030) |
| ACT_HUI_006 Filière margines et grignons | Agir sur ses rejets et la qualité de l'eau | France Olive (Association française interprofessionnelle de l'olive) [conseil_etude] | aucune |
| ACT_HUI_007 Effluents gras prétraités | Agir sur ses rejets et la qualité de l'eau | Alfa Laval France & North West Africa [materiel], John Cockerill Proserpol [conseil_etude+travaux], SIMOP France [materiel], Delho [materiel], CRITT Agroalimentaire Sud (Provence-Alpes-Côte d'Azur) [conseil_etude] | aucune |
| ACT_AGR_010 Démarche collective | Agir sur le grand cycle de l'eau | aucun | aucune |

### Fiches à rédiger

- prestataire pour ACT_AGR_009 (Plan de gestion de l'eau, Sensibiliser et former)
- prestataire pour ACT_HUI_004 (Nettoyage à sec d'abord, Changer ses process ou pratiques)
- prestataire pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)
- aide pour ACT_AGR_009 (Plan de gestion de l'eau, Sensibiliser et former)
- aide pour ACT_AGR_001 (Compteur par usage, Suivre, comprendre et maîtriser ses consommations)
- aide pour ACT_HUI_003 (Décanteur deux phases, Changer ses process ou pratiques)
- aide pour ACT_HUI_004 (Nettoyage à sec d'abord, Changer ses process ou pratiques)
- aide pour ACT_HUI_006 (Filière margines et grignons, Agir sur ses rejets et la qualité de l'eau)
- aide pour ACT_HUI_007 (Effluents gras prétraités, Agir sur ses rejets et la qualité de l'eau)
- aide pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)

### Fiches sans lien vers une mesure du secteur (visibles seulement par repli de catégorie)

- prestataire PREST_HUI_002
- prestataire PREST_HUI_003
- prestataire PREST_HUI_009
- aide AIDE_HUI_003
- aide AIDE_LAI_002
- aide AIDE_LAI_004

## Prestataires

### PREST_HUI_001 · Alfa Laval France & North West Africa

installateur · secteurs ['industrie_huiles'] · départements national · statut brouillon

Filiale commerciale française, basée à Saint-Priest, du groupe suédois Alfa Laval ; aucune source consultée n'indique de fabrication en France. Pour les moulins, son site français présente des laveuses à olives dont l'eau est recyclée après décantation avec une douche d'eau propre, et des décanteurs deux phases qui ne produisent pas d'eaux noires ; sa brochure française (2014) et le site américain du groupe présentent aussi l'unité BlueVap, qui traite les margines avant rejet en station d'épuration en les séparant en eau claire et en concentré. Pour les raffineries d'huiles, les systèmes de vide et d'utilités sont présentés sur le site américain du groupe : vide à eau glacée ou à condensation par glace, tour de refroidissement en option, pour réduire l'eau consommée, sans mention explicite de circuit fermé ni de condenseurs d'hexane. L'accès se fait par formulaire de contact sur le site.

- Mesures : ACT_HUI_001 [materiel], ACT_HUI_003 [materiel], ACT_HUI_002 [materiel], ACT_HUI_007 [materiel]
- site_internet : https://www.alfalaval.fr
- adresse : Immeuble Ilena Park, 117 allée des Parcs, 69800 Saint-Priest
- Sources :
  - siret, adresse, type : https://recherche-entreprises.api.gouv.fr/search?q=Alfa%20Laval%20France&departement=69 (2026-09-27) · « ALFA LAVAL FRANCE & NORTH WEST AFRICA SAS, siret 78826245900175, siège, IMMEUBLE ILENA PARK 117 ALLEE DES PARCS 69800 SAINT-PRIEST, activité 46.69B, état A »
  - expertises, mesures (ACT_HUI_003), description, site_internet : https://www.alfalaval.fr/produits/solutions-de-process/solutions-pour-huile-dolive/equipements-pour-la-fabrication-d-huile-d-olive/ (2026-09-27) · « La nouvelle centrifugeuse à deux phases Alfa Laval Sigma 6 [...] consomme beaucoup moins d'eau et d'énergie que les décanteurs triphasés et ne produit pas d'eaux noires »
  - expertises, mesures (ACT_HUI_001) : https://www.alfalaval.fr/produits/solutions-de-process/solutions-pour-huile-dolive/laveuses/ (2026-09-27) · « L'eau de lavage est recyclée après la décantation, et l'eau propre est constamment mélangée dans des proportions prédéfinies. L'eau propre correspondant généralement à 10% du poids des olives est constamment alimentée par la douche de rinçage sur l'écran vibrant. »
  - expertises, mesures (ACT_HUI_007), description : https://www.alfalaval.fr/globalassets/documents/local/france/industries/food-and-water/alfa-laval---solutions-de-production-dhuile-dolive-fr.pdf (2026-09-27) · « PFT00531FR 1404. L'installation compacte BlueVap pré-assemblée transforme les margines en 80% d'eau de process claire qui peut sans risque être rejetée dans la station d'épuration locale, et 20% de concentré [...] BlueVap réduit la charge polluante (DCO) de 99%. Alfa Laval et Atmosphera sont des marques déposées, propriété d'Alfa Laval Corporate AB, Suède. »
  - expertises, mesures (ACT_HUI_007), description : https://www.alfalaval.us/industries/food-dairy-and-beverage/food-processing/fat-and-oil-processing/olive-oil-processing/waste-handling/ (2026-09-27) · « Page actuelle du groupe sur BlueVap : turns waste water from olive processing in to clear water that sewage plants will accept, and a concentrate that can be mixed with husk for disposal ; can process as much as 2,500 litres of waste water hourly »
  - expertises, mesures (ACT_HUI_002), description : https://www.alfalaval.us/products/process-solutions/vegetable-oil-solutions/utility-process-systems/ (2026-09-27) · « Optimized vacuum systems (e.g., chilled water or ice condensation), including Alfa Laval heat exchangers. Optional cooling tower supply [...] we develop tailored solutions that lower energy costs, reduce water usage, and minimize emissions »

### PREST_HUI_002 · OleaTech (OleaShop.fr)

installateur · secteurs ['industrie_huiles'] · départements national · statut brouillon

Équipe spécialisée dans l'extraction d'huile d'olive, installée à Roquemaure (Gard), qui vend sous l'enseigne OleaShop.fr des moulins et des équipements de moulin, dont la gamme MiniOlive du fabricant Kocamaz (Izmir), et en assure le service après-vente en France. Pour les moulins, elle réalise l'installation et la mise en route des lignes d'extraction, l'entretien et la révision, des études d'optimisation sur site en saison (contrôle de chaque équipement, analyses, rapport) et l'accompagnement de projets de création ou d'extension de moulin. Elle forme les mouliniers sur leur lieu de production ou lors d'une formation générale de deux jours organisée chaque année ; les prestations sont sur devis, par formulaire, courriel, téléphone ou WhatsApp.

- site_internet : https://www.oleashop.fr
- site_internet : https://www.oleatech.fr
- mail : oleatechfrance@gmail.com
- tel : 06 10 21 59 98
- adresse : ZI de l'Aspre, avenue de l'Aspre, 30150 Roquemaure
- linkedin : https://linkedin.com/company/oleatech-france
- Sources :
  - expertises, description, mail : https://www.oleashop.fr/nos-services (2026-09-27) · « Entretien & révision [...] Installation & assistance au démarrage : Bénéficiez d'une installation professionnelle de vos moulins et d'une assistance pour un démarrage rapide et serein de votre production. Formation & conseils techniques : Maîtrisez la conduite d'une ligne d'extraction d'huile [...] Vous pouvez également nous joindre facilement par WhatsApp ou par e-mail. »
  - adresse, description : https://www.oleashop.fr/ (2026-09-27) · « OleaShop.fr propose également des services d'installation et de maintenance pour votre équipement. [...] OleaShop Zi de l'aspre , Avenue de L'aspre 30150 ROQUEMAURE, France »
  - description, type, expertises (service après-vente et mise en route par OleaTech du matériel vendu par OleaShop) : https://www.oleashop.fr/product/21774505/moulin-miniolive-50-pro (2026-09-27) · « Une Prestation d'assitance à la mise en route par notre équipe OleaTech vous sera proposée (Mise en route , formation sur la conduite, les réglages , l'entretien). [...] Le Service aprés vente sera assuré par notre equipe OleaTech en France »
  - type, description (Kocamaz, fabricant établi à Izmir) : https://www.kocamaz.com.tr/zeytinyagi/en/urun-miniolive-400-boutique-olive-oil-machine/48 (2026-09-27) · « Miniolive 400 Boutique Olive Oil Machine - Kocamaz Makina İTOB OSB 10011 Sokak No: 10 Tekeli - Menderes / İZMİR +90 (0232) 853 74 00 »
  - expertises, description : https://www.oleatech.fr/Conseil.b.htm (2026-09-27) · « Nous vous proposons de réaliser une étude complète de votre système d'extraction. Nous venons pendant la saison pour réaliser un contrôle complet de chaque équipement. [...] Prise d'échantillons et analyses seront réalisées sur place. »
  - description : https://www.oleatech.fr/Projet.f.htm (2026-09-27) · « Nos services : Définir un cahier des charges, consulter les fournisseurs, travailler l'implantation et le périmètre nécessaire, suivre votre projet, superviser le chantier... Conseil en sélection & implantation machines »
  - expertises, description : https://www.oleatech.fr/Formation.c.htm (2026-09-27) · « Nous fixons ensemble votre besoin puis une date, et nous intervenons sur votre lieu de production. Nous organisons chaque année une formation générale dédiée aux Mouliniers sur 2 jours. »
  - departements, tel, mail : https://www.oleatech.fr/Contact.d.htm (2026-09-27) · « Notre domaine d'intervention: la France & l'Afrique du Nord [...] Contactez-nous par Téléphone (lien tel:+33610215998) [...] (lien mailto:oleatechfrance@gmail.com) »
  - linkedin : https://www.oleashop.fr/sur-les-reseaux (2026-09-27) · « lien https://linkedin.com/company/oleatech-france »
  - siret (non retenu : lien avec le site non établi) : https://recherche-entreprises.api.gouv.fr/search?q=OLEATECH (2026-09-27) · « OLEATECH, siret 99949569000011, siège, 14 RUE DE LA ROUSSIERE 69970 CHAPONNAY, activité 70.22Z, état A »
  - siret (non retenu : aucun établissement OLEATECH dans le Gard) : https://recherche-entreprises.api.gouv.fr/search?q=OLEATECH&departement=30 (2026-09-27) · « {"results":[],"total_results":0} »
  - siret (non retenu : aucune entreprise OLEASHOP) : https://recherche-entreprises.api.gouv.fr/search?q=OLEASHOP (2026-09-27) · « {"results":[],"total_results":0} »

### PREST_HUI_003 · Biotechna (groupe Eaux de Marseille)

installateur · secteurs ['industrie_huiles'] · départements ['13'] · statut brouillon

Filiale du groupe des Eaux de Marseille, exploitant de plateforme de compostage (NAF 38.21Z) : elle exploite à Ensuès-la-Redonne une installation classée autorisée pour 30 000 t de boues de station d'épuration urbaine, 25 000 t de déchets verts et 5 000 t de biodéchets par an ; le type « installateur » est provisoire, aucune valeur du vocabulaire ne correspondant à un exploitant de site de traitement de déchets. Elle mélange les boues aux déchets verts pour produire un compost destiné à l'agriculture ; aucune source actuelle n'indique qu'elle accepte des grignons ou des margines de moulin, à vérifier directement avec elle. En 2007, une plateforme de compostage de Salon-de-Provence exploitée par Biotechna a accueilli l'essai France Olive de co-compostage de grignons et de déchets verts, et la société a eu un établissement de Salon-de-Provence fermé en 2011 ; l'arrêté préfectoral du 19 novembre 2025 prescrit un suivi des odeurs « jusqu'à l'arrêt des activités de compostage ».

- site_internet : https://www.eauxdemarseille.fr/nos-metiers/valorisation-boues-epuration/
- adresse : Quartier Pas de la Fos, CD 9, chemin de l'Aiguille, 13820 Ensuès-la-Redonne
- Sources :
  - siret, contacts (adresse), departements, description (NAF 38.21Z) : https://recherche-entreprises.api.gouv.fr/search?q=32653268600051 (2026-09-27) · « 32653268600051, QUARTIER PAS DE LA FOS CD 9 CHE DE L AIGUILLE 13820 ENSUES-LA-REDONNE, etat_administratif A, activite 38.21Z »
  - description (établissement de Salon-de-Provence fermé en 2011) : https://recherche-entreprises.api.gouv.fr/search?q=32653268600036 (2026-09-27) · « 32653268600036, ENTRAGES 13300 SALON-DE-PROVENCE, etat_administratif F, date_fermeture 2011-05-31 »
  - description, contacts (site_internet) : https://www.eauxdemarseille.fr/nos-metiers/valorisation-boues-epuration/ (2026-09-27) · « Cette filiale spécialisée située à Ensuès-la-Redonne, réduit les boues produites par les stations d'épuration en les mélangeant à des déchets verts pour ensuite les réutiliser à des fins agricoles. »
  - description (tonnages autorisés, suivi des odeurs jusqu'à l'arrêt des activités), expertises : https://www.georisques.gouv.fr/webappReport/ws/installations/document/Tn6pmAWB6QxJeEkPUa26Xn5owRle4AKQ (2026-09-27) · « Arrêté n°2025-248-PC du 19 novembre 2025 : boues de station d'épuration urbaine 30 000 t, déchets verts 25 000 t, biodéchets 5 000 t ; 2794-1 broyage de déchets végétaux ; poursuite du suivi de l'observatoire des odeurs en concertation avec les riverains et les maires des communes associées jusqu'à l'arrêt des activités de compostage »
  - departements, expertises : https://georisques.gouv.fr/api/v1/installations_classees?siret=32653268600051 (2026-09-27) · « BIOTECHNA, 9 CHE DE L AIGUILLE, 13820 Ensues-la-Redonne, etatActivite En exploitation avec titre, regime Autorisation, rubriques 2780 (traitement aérobie de déchets non dangereux), 2794 (broyage de déchets verts), 3532 »
  - description (essai France Olive 2007 à Salon-de-Provence), copie archivée de https://afidol.org/oleiculteur/olea-2020/compostage-des-residus-de-trituration/ : http://web.archive.org/web/20260418033317/https://afidol.org/oleiculteur/olea-2020/compostage-des-residus-de-trituration/ (2026-09-27) · « les mélanges de grignons et de déchets verts ont été réalisés les 6, 7 et 8 novembre 2007 sur la plateforme de compostage de Salon-de-Provence exploitée par la société Biotechna (filiale du Groupe des Eaux de Marseille) »
  - description (essai France Olive 2007 à Salon-de-Provence), URL d'origine de la page archivée, redirigée aujourd'hui vers https://www.franceolive.fr/ : https://afidol.org/oleiculteur/olea-2020/compostage-des-residus-de-trituration/ (2026-09-27) · « la plateforme de compostage de Salon-de-Provence exploitée par la société Biotechna (filiale du Groupe des Eaux de Marseille) a été retenue pour la mise en œuvre du compostage (texte lu sur la copie archivée du 18/04/2026) »

### PREST_HUI_004 · France Olive (Association française interprofessionnelle de l'olive)

association · secteurs ['industrie_huiles'] · départements national · statut brouillon

Interprofession nationale de la filière oléicole, section olive de Terres Univia, qui regroupe la production, la transformation et la commercialisation des olives et des huiles d'olive. Pour les moulins, son pôle process et qualité apporte un appui technique (hygiène, HACCP, matériel) et un conseil sur le traitement des effluents au regard de la loi sur l'eau ; les analyses de laboratoire, dont la teneur en huile des grignons et des margines, sont réalisées et facturées par sa filiale France Olive Process, SAS distincte de l'association (SIRET 93788743800011), et sa journée technique annuelle Techno'Huile a accueilli en 2026 une conférence sur la gestion des effluents. Les conseils techniques sont accessibles gratuitement aux opérateurs de la filière, financés par la cotisation volontaire étendue ; les analyses sont payantes selon le formulaire tarifé du laboratoire.

- Mesures : ACT_HUI_006 [conseil_etude]
- site_internet : https://www.franceolive.fr
- tel : 04 42 23 01 92
- mail : contact@franceolive.fr
- adresse : Maison des Agriculteurs, 22 avenue Henri Pontier, 13626 Aix-en-Provence
- Sources :
  - siret, type, description (filiale France Olive Process) : https://recherche-entreprises.api.gouv.fr/search?q=France%20Olive&departement=13 (2026-09-27) · « ASSOCIATION FRANCAISE INTERPROFESSIONNELLE DE L'OLIVE (FRANCE OLIVE), siret 43402717300013, siège, MAISON DES AGRICULTEURS 22 AVENUE HENRI PONTIER 13100 AIX-EN-PROVENCE, nature juridique 9220, état administratif A. FRANCE OLIVE PROCESS, siret 93788743800011, siège, 22 AVENUE HENRI PONTIER 13100 AIX-EN-PROVENCE, nature juridique 5710, activité 74.90B, état administratif A »
  - contacts : https://www.franceolive.fr/images/medias/2026/06/11/memento-du-moulinier-de-france-olive-2026.pdf (2026-09-27) · « France Olive - Association française interprofessionnelle de l'olive, Maison des Agriculteurs, 22 avenue Henri Pontier 13626 Aix-en-Provence. Tél. 04 42 23 01 92 - Mail contact@franceolive.fr, www.franceolive.fr »
  - departements, description : https://www.franceolive.fr/categorie/france-olive-et-filiere/role-et-missions (2026-09-27) · « France Olive est l'interprofession française dédiée à la filière oléicole. [...] C'est la section spécialisée « olive » de Terres Univia. [...] Transformation : contrôle de la qualité, valorisation et traitement des co-produits issus des moulins à huile, [...] assistance aux professionnels (formations, assistance techniques, etc…) »
  - mesures (ACT_HUI_006 conseil_etude), expertises, description : https://www.franceolive.fr/images/medias/2026/06/11/memento-du-moulinier-de-france-olive-2026.pdf (2026-09-27) · « Traitement des effluents. En fonction du type de moulin et de sa capacité, il existe des solutions adaptées aux différents effluents pour répondre aux obligations réglementaires vis à vis de la loi sur l'eau (géré par l'Agence de l'eau). [...] Grâce aux CVE, producteurs, transformateurs et metteurs en marché ont accès gratuitement à différents services (conseils techniques, assistance process, qualité, étiquetage...) »
  - expertises, description : https://www.franceolive.fr/categorie/qualite-des-produits/laboratoire-oleicole-francais (2026-09-27) · « France Olive Process, laboratoire agréé COI, accrédité COFRAC & certifié Qualiopi [...] Laboratoire d'extraction. De septembre à décembre, avant et pendant la récolte, optimisez votre production avec nos analyses sur : [...] Teneur en huile des résidus (grignons, margines). Pour connaître les tarifs, les modalités, les délais, téléchargez le formulaire »
  - expertises, description : https://www.franceolive.fr/categorie/transformation-olives-et-huile-d-olive/techno-huile (2026-09-27) · « Le rendez-vous annuel des professionnels de l'huile d'olive. Chaque année, les mouliniers et metteurs en marché sont conviés [...] Techno'Huile-Techn'Olive 2026 [...] Gestion des effluents en filière oléicole par Philippe BLIN [...] APAVE »
  - description : https://www.franceolive.fr/images/medias/2026/07/24/tkh-tko-2026-pblin-icpeetrejets.pdf (2026-09-27) · « Journée filière oléicole, 04 juin 2026. Gestion des effluents en filière oléicole. Intervenant Apave : Philippe BLIN, Chef d'Agence Conseil Occitanie. »

### PREST_HUI_005 · John Cockerill Proserpol

installateur · secteurs ['industrie_huiles'] · départements national · statut brouillon

Filiale française du groupe belge John Cockerill (siège à Seraing), spécialiste des procédés de traitement et de recyclage des effluents liquides industriels, avec un siège social à Thionville (57) et un établissement à Meylan (38). Elle conçoit, fournit et met en service des stations de traitement des effluents industriels : en 2015, celle de l'usine de trituration et de raffinage Saipol du Mériot (10) (cassage acide et aéroflottation, biologie, finition), qui ramène la DCO de 50 000 à moins de 100 mg/L ; fin 2024, elle a été retenue pour une station zéro rejet sur un site de traitement de surface à Brulon (72), annoncée à 97 % d'eau économisée. Elle affiche aussi la réutilisation des eaux usées traitées en agroalimentaire. Ses références publiées sont situées dans plusieurs régions (Le Mériot, Jarrie, Brulon, Calais), mais aucune zone d'intervention n'est publiée.

- Mesures : ACT_HUI_007 [conseil_etude+travaux], ACT_HUI_005 [conseil_etude+travaux]
- site_internet : https://johncockerill.com/fr/industry/traitement-des-eaux/
- tel : 01 30 45 90 20
- adresse : Route de Volkrange, 57100 Thionville
- Sources :
  - siret, contacts, description : https://recherche-entreprises.api.gouv.fr/search?q=John%20Cockerill%20Proserpol&departement=57 (2026-09-27) · « JOHN COCKERILL PROSERPOL, siret 30231665800111, siège, BEUVANGE SOUS SAI ROUTE DE VOLKRANGE 57100 THIONVILLE, activité 71.12B, état administratif A »
  - contacts, description : https://recherche-entreprises.api.gouv.fr/search?q=302316658 (2026-09-27) · « 30231665800079 45 CHEMIN DU VIEUX CHENE 38240 MEYLAN, état A ; 30231665800087 LES MIROIRS 38 BOULEVARD PAUL CEZANNE 78280 GUYANCOURT, état F (fermé) »
  - contacts : https://johncockerill.com/fr/industry/traitement-des-eaux/ (2026-09-27) · « John Cockerill Proserpol 38 Boulevard Paul Cézanne - CS60731 [...] Les Miroirs Guyancourt Cedex France +33 (0)1 30 45 90 20 +33 (0)1 30 45 90 50 (proserpol.com redirige vers cette page) »
  - description : https://johncockerill.com/fr/presse-et-actualites/actualites/avec-proserpol-cmi-investit-dans-le-traitement-de-leau/ (2026-09-27) · « CMI a racheté le 28 décembre 2011 le Groupe français Proserpol, spécialiste des procédés de traitement et de recyclage des effluents liquides industriels »
  - description : https://johncockerill.com/en/press-and-news/news/john-cockerills-green-electricity-headquarters-is-self-sufficient-in-energy/ (2026-09-27) · « John Cockerill's headquarters at Seraing (Belgium), where it has been located since 1817, are energetically self-sufficient. »
  - mesures, expertises, description : https://www.franceenvironnement.com/realisation/traitement-des-effluents-huileux-de-trituration-et-de-fabrication-du-diester (2026-09-27) · « Réalisé par John Cockerill Proserpol. L'usine Saipol du Mériot (10) a pour activité principale la trituration de graines oléagineuses, le raffinage d'huiles végétales et la production de diester. [...] Dégraissage par cassage acide et aéroflottation [...] DCO : Entrée: 50 000 mg/l | Rejet après traitement : < 100 mg/l »
  - mesures, expertises, description : https://www.franceenvironnement.com/entreprise/proserpol--st-quentin-yvelines-cdx-400031313 (2026-09-27) · « John Cockerill Proserpol, situé à Guyancourt, conçoit des solutions pour le traitement des effluents et des boues d'épuration. Spécialisé dans le traitement par bio-réacteur à membranes (MBR Process), l'entreprise gère [...] les traitements d'effluents huileux liés à la trituration et au diester. »
  - mesures, expertises : https://johncockerill.com/fr/industry/traitement-des-eaux/eaux-usees-industrielles/ (2026-09-27) · « préparation des eaux de process, épuration des eaux résiduaires, réutilisation des eaux usées et valorisation des effluents liquides ou solides [...] (agroalimentaire, pharmacie, mines... [...] Flottation et déshuilage pour l'élimination des matières légères. »
  - mesures, description : https://www.franceenvironnement.com/realisation/rehabilitation-eaux-usees-industrielles-circuit-ferme (2026-09-27) · « Réhabilitation des eaux usées industrielles en circuit fermé [...] filtration membranaire [...] Recyclage jusqu'à 80% des eaux usées »
  - mesures, description, departements : https://johncockerill.com/en/press-and-news/news/multilaque-traitement-rejet-zero/ (2026-09-27) · « As part of the capacity expansion of its plant in Brulon (72, France) [...] Multilaque has once again called on the expertise of John Cockerill Proserpol, an expert in the treatment of water and industrial effluents, to equip its new production lines with a zero discharge treatment plant. [...] will eliminate effluent discharge, save up to 97% in water consumption »
  - mesures, description, departements : https://johncockerill.com/en/press-and-news/news/john-cockerill-receives-acceptance-for-three-new-effluent-treatment-plants-at-the-framatome-jarrie-site/ (2026-09-27) · « John Cockerill Proserpol was responsible for the design, supply, installation and commissioning of the effluent treatment equipment [...] the Framatome plant in Jarrie, France »
  - departements : https://johncockerill.com/en/press-and-news/news/interor-entrusts-john-cockerill-with-the-improvement-of-its-effluent-treatment-station/ (2026-09-27) · « INTEROR [...] entrusted John Cockerill with the construction of a tertiary treatment installation [...] Calais site »

### PREST_HUI_006 · SIMOP France

equipementier · secteurs ['industrie_huiles'] · départements national · statut brouillon

Fabricant normand d'équipements de traitement des eaux, qui produit dans deux usines de la Manche et de la Somme. Sa gamme de séparateurs de graisses (polyéthylène, PRV jusqu'à la taille 100, inox pour effluents chauds) est présentée pour les graisses et huiles animales et végétales des eaux ménagères et des métiers de bouche ; sa seule réalisation agroalimentaire publiée est un atelier de pâtisserie, aucune n'est citée en huilerie, et le site ne présente ces appareils ni pour les eaux acides de neutralisation ni pour l'hexane. Il fabrique aussi des débourbeurs, des séparateurs d'hydrocarbures pour les eaux de ruissellement et des bacs de rétention, vendus sur devis par son service commercial ou via un réseau de points de vente et d'installateurs partenaires.

- Mesures : ACT_HUI_007 [materiel]
- site_internet : https://www.simop.fr
- tel : 02 33 95 88 00
- mail : simop@simop.fr
- adresse : 10 rue Richedoux, 50480 Sainte-Mère-Église
- linkedin : https://fr.linkedin.com/company/simop
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=SIMOP&departement=50 (2026-09-27) · « SIMOP FRANCE, siret 75404070700012, siège, 10 RUE DE RICHEDOUX 50480 SAINTE-MERE-EGLISE, activité de l'unité légale 22.23Z (activité déclarée du siège 22.29A), état administratif A (l'ancien siret 30497164100085 de SIMOP est fermé) »
  - contacts : https://www.simop.fr/l-fc/applications/industrie/agro-alimentaire-agriculture/agro-alimentaire-et-agriculture-166 (2026-09-27) · « Appelez nous au 02 33 95 88 00 ou bien effectuez une demande de renseignements en ligne et un expert vous contactera. [...] Simop France SAS, 10, rue Richedoux, 50480 Sainte-Mère-Eglise. Mail masqué par Cloudflare dans le pied de page : data-cfemail="e3908a8e8c93a3908a8e8c93cd8591" (clé e3, chaque octet suivant XOR e3), décodé en simop@simop.fr »
  - secteurs, mesures, expertises : https://www.simop.fr/l-fc/applications/industrie/agro-alimentaire-agriculture/agro-alimentaire-et-agriculture-166 (2026-09-27) · « Traitement des eaux usées, gestion des graisses, stockage et récupération des eaux pluviales, régulation, traitement des eaux de ruissellement ou contrôle des réseaux : SIMOP propose des solutions adaptées aux contraintes spécifiques de ces secteurs. De l'exploitation agricole au site de transformation agroalimentaire [...] Débourbeur en polyéthylène »
  - mesures, expertises, description : https://www.simop.fr/l-ft/solutions/eaux-usees/traitement-des-graisses/separateur-de-graisses/separateur-de-graisses-43 (2026-09-27) · « Un séparateur de graisses est un appareil destiné à séparer et stocker les matières solides, les graisses et les huiles d'origine animale et végétale contenues dans les eaux ménagères. [...] Matériaux : PRV (2), INOX (4), Polyéthylène (5) »
  - mesures, secteurs, description : https://www.simop.fr/solutions/nos-realisations (2026-09-27) · « Traitement des eaux usées d'un site agroalimentaire : BIOXYMOP MAX et séparateur de graisses. Un atelier de pâtisserie à Alpiet s'est équipé d'une Bioxymop MAX 30 équivalents habitants et d'un séparateur de graisses taille 3. »
  - description : https://www.simop.fr/solutions/a-eaux-usees-5/a400-pretraitement-des-graisses-et-fecules-76/a4200-separateurs-graisses-fecules-p-r-v-standards-405/6632-separateur-de-graisses-prv-taille-25-a-100-1932 (2026-09-27) · « Séparateur de graisses PRV Taille 25 à 100 [...] graisses et les huiles d'origine animale et végétale contenues dans les eaux ménagères [...] Taille : 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100. Matériaux : PRV. Norme et certification : NF »
  - description : https://www.simop.fr/solutions/a-eaux-usees-5/a400-pretraitement-des-graisses-et-fecules-76/a4400-separateurs-graisses-fecules-inox-standards-407/bixat-separateurs-de-graisses-inox-acc-totale-2540 (2026-09-27) · « Taille : 1, 2, 4, 5, 6, 8, 10. Matériaux : INOX [...] Le + utilisateur : Résistantce à la corosion. Supporte les effluents chauds »
  - description : https://www.simop.fr/l-mm/solutions/eaux-usees/reglementation/traitement-des-graisses/traitement-des-graisses-213 (2026-09-27) · « Les professionnels des métiers de bouche sont donc contraints de s'équiper de systèmes de traitements adaptés à leur activité. [...] Les séparateurs de graisses sont régis par la norme 1825. »
  - mesures : https://www.simop.fr/l-mm/solutions/eaux-usees/traitement-des-graisses/traitement-des-graisses-41 (2026-09-27) · « Les séparateurs de graisses sont des équipements destinés à traiter les eaux susceptibles d'être polluées par des graisses animales et/ou végétales avant d'être rejetées dans le réseau ou dans le milieu naturel. »
  - expertises : https://www.simop.fr/l-ft/solutions/eaux-pluviales/traitement-eaux-de-ruissellement/separateur-hydrocarbures/separateur-d-hydrocarbures-59 (2026-09-27) · « Les eaux de ruissellement, lors de leurs parcours sur les surfaces imperméabilisées se chargent, en polluant tels que les hydrocarbures [...] Séparateurs d'hydrocarbures CE (acier), 1,5 à 50L/s, débourbeur V100 »
  - expertises : https://www.simop.fr/l-ft/solutions/securite-stockage-environnement/retention/bac/bac-255 (2026-09-27) · « Bac de rétention [...] Bacs de rétention rectangulaires [...] Polyéthylène »
  - type, description : https://www.simop.fr/a-propos (2026-09-27) · « Spécialiste du traitement des eaux depuis 1975, SIMOP conçoit, fabrique et commercialise des solutions pour l'environnement. [...] SIMOP compte trois sites en France métropolitaine : le siège social basé à Sainte-Mère-Eglise (Manche, Normandie), deux usines implantées au Ham (Manche) et à Montdidier (Somme). »
  - departements, description : https://www.simop.fr/outils/installateur-partenaire/devenir-installateur-partenaire (2026-09-27) · « Le réseau partenaire SIMOP, ce sont des entreprises à travers toute la France [...] la disponibilité de nos produits dans plus de 2500 points de vente sur toute la France »

### PREST_HUI_007 · Delho

equipementier · secteurs ['industrie_huiles'] · départements national · statut brouillon

Entreprise girondine qui conçoit des équipements inox de prétraitement des eaux usées grasses, fabriqués par un atelier de tôlerie de la région bordelaise. Pour les industriels agroalimentaires, dont les huileries, elle propose des bacs séparateurs de graisses et un dégrilleur-débourbeur-régulateur de débit (DD-R) posé hors-sol sur le réseau, sans pompe ni électronique. Diagnostic technique et devis gratuits sur demande, matériel ensuite vendu.

- Mesures : ACT_HUI_007 [materiel]
- site_internet : https://delho.fr
- tel : 06 31 23 00 83
- mail : contact@delho.fr
- adresse : 9 rue de la Praya, 33950 Lège-Cap-Ferret
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Delho&departement=33 (2026-09-27) · « DELHO, siret 80763728500022, siège, PARC D'ENTREPRISE 9 RUE DE LA PRAYA 33950 LEGE-CAP-FERRET, activité 71.12B, état administratif A »
  - contacts : https://delho.fr/contact/ (2026-09-27) · « 06.31.23.00.83 contact@delho.fr 9 Rue de la Praya 33950 Lège - Cap Ferret »
  - mesures, expertises, description : https://delho.fr/pretraitement-eaux-laboratoires-agroalimentaires/ (2026-09-27) · « Les secteurs particulièrement concernés par ces problématiques sont notamment : [...] Les huileries et ateliers de transformation végétale ou animale [...] Le DELHO DD-R, dégrilleur-débourbeur-régulateur de débit [...] s'installe hors-sol directement sur le réseau et ne nécessite aucun pompage »
  - departements : https://delho.fr/pretraitement-eaux-laboratoires-agroalimentaires/ (2026-09-27) · « Des centaines d'acteurs de la filière agroalimentaire nous font déjà confiance, en France et dans les pays francophones limitrophes. »
  - type, description : https://delho.fr/fabrication-bac-graisse/ (2026-09-27) · « DELHO fait fabriquer ses produits à proximité de son siège social dans la région bordelaise [...] C'est dans un atelier spécialisé dans le domaine de la tôlerie fine industrielle [...] que sont réalisés les bacs à graisses DELHO. »
  - description : https://delho.fr/pretraitement-eaux-laboratoires-agroalimentaires/ (2026-09-27) · « Contactez dès maintenant l'équipe DELHO pour bénéficier d'un diagnostic technique gratuit [...] Demander un devis gratuit »

### PREST_HUI_008 · GEA Process Engineering

installateur · secteurs ['industrie_huiles'] · départements national · statut brouillon

Société installée à Montigny-le-Bretonneux, dont l'activité déclarée est l'installation de machines et équipements mécaniques ; la page France du groupe GEA (maison mère GEA Group AG, Düsseldorf, Allemagne) place son site principal à la même adresse et publie l'index égalité d'une entité « Process Engineering », mais aucune source consultée ne rattache explicitement ce SIRET à l'offre décrite ici. Pour les raffineries d'huiles, GEA propose pour la désodorisation un vide à condensation sèche (la vapeur est condensée en glace), en usine neuve ou en modernisation, qui n'utilise que 0,1 % de l'eau d'un vide humide à éjecteurs et condenseurs. Ce n'est pas la boucle fermée avec tour ou aéroréfrigérant de la mesure, mais une autre technique qui supprime presque toute l'eau perdue du vide : sur l'exemple de la brochure, 0,8 m3/h d'eau au condenseur frigorifique contre 17 + 2 m3/h en vide humide. La brochure est éditée par GEA Wiegand (Ettlingen, Allemagne), contact indiqué pour ce produit ; demande de devis par le formulaire du site.

- Mesures : ACT_HUI_002 [materiel]
- site_internet : https://www.gea.com/fr/products/vacuum-systems/vacuum-systems/dry-condensing-vacuum-systems/
- adresse : 4 rue Jean-Pierre Timbaud, 78180 Montigny-le-Bretonneux
- Sources :
  - siret, adresse, description (activité) : https://recherche-entreprises.api.gouv.fr/search?q=GEA%20Process%20Engineering&departement=78 (2026-09-27) · « GEA PROCESS ENGINEERING, SIRET 42085622100015, siège, 4 RUE JEAN-PIERRE TIMBAUD 78180 MONTIGNY-LE-BRETONNEUX, NAF 33.20B, état administratif A »
  - description (lien avec le groupe GEA en France) : https://www.gea.com/fr/france/ (2026-09-27) · « GEA FRANCE, Notre emplacement principal, 4 rue Jean-Pierre Timbaud - B.P. 80, 78185 Montigny le Bretonneux [...] GEA France - INDEX ÉGALITÉ HOMME-FEMME 2025 : WESTFALIA SEPARATOR, FOOD SOLUTIONS, PROCESS ENGINEERING »
  - contacts (site_internet), description, expertises, mesures : https://www.gea.com/fr/products/vacuum-systems/vacuum-systems/dry-condensing-vacuum-systems/ (2026-09-27) · « La désodorisation de l'huile est un processus en aval clé de la transformation des huiles alimentaires [...] n'utilise que 10 à 20 % de l'énergie et 0,1 % de l'eau nécessaires avec les systèmes [...] Nos systèmes peuvent être utilisés pour moderniser une installation existante »
  - description, mesures : https://www.gea.com/en/products/vacuum-systems/vacuum-systems/dry-condensing-vacuum-systems/ (2026-09-27) · « Oil deodorization is a key downstream process in edible oil manufacture [...] just 0.1% of the water required by conventional 'wet' vacuum systems. Our systems can be retrofit into an existing plant »
  - description (vide humide contre condensation sèche, éditeur GEA Wiegand), mesures : https://www.gea.com/en/assets/170680/ (2026-09-27) · « Cooling water 17 m3/h [...] Cooling water 2 m3/h [vide humide] ; Refrigerant condenser Water 0.8 m3/h [...] © GEA Wiegand GmbH [...] GEA Wiegand, Am Hardtwald 1, 76275 Ettlingen, Germany »
  - description (groupe allemand) : https://www.gea.com/fr/legal/imprint-and-website-terms-of-use/ (2026-09-27) · « GEA Group Aktiengesellschaft (hereinafter referred to as GEA Group), a corporation incorporated under the laws of Germany, having its principle office in Düsseldorf, Germany. »

### PREST_HUI_009 · ITERG

organisme_technique · secteurs ['industrie_huiles'] · départements national · statut brouillon

Centre technique industriel (CTI) des industries de corps gras et produits apparentés, basé à Canéjan (Gironde) et financé en partie par les cotisations interprofessionnelles de la filière des huiles et protéines végétales. Son unité Environnement réalise sur devis des diagnostics sur site industriel (bilan GES, diagnostics Bpifrance / ADEME « Décarbon'Action »), des analyses de cycle de vie et un accompagnement à l'optimisation des consommations d'énergie, d'eau et de matières premières ; elle a participé au projet de recherche ANR MINIMEAU (2018-2021) sur la minimisation des consommations d'eau en industrie agroalimentaire. La veille réglementaire environnement, qui couvre l'eau et les ICPE, est réservée aux adhérents.

- site_internet : https://iterg.com
- tel : 05 56 36 00 44
- mail : iterg@iterg.com
- adresse : 11 rue Gaspard Monge, ZA Pessac-Canéjan, CS 20428, 33612 Canéjan Cedex
- Sources :
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=ITERG&departement=33 (2026-09-27) · « ITERG, siret 77566488100122, siège, PARC INDUS BERSOL II 11 RUE GASPARD MONGE 33610 CANEJAN, activité 72.19Z, état administratif A »
  - nom, type, description, departements : https://iterg.com/a-propos/ (2026-09-27) · « ITERG est le Centre Technique Industriel (CTI) des industries de corps gras et produits apparentés [...] Basé à Canéjan [...] ITERG reçoit des cotisations interprofessionnelles (CVO) de la filière des huiles et protéines végétales. »
  - contacts : https://iterg.com/environnement-et-ecoconception/ (2026-09-27) · « Contact 11 Rue Gaspard Monge ZA Pessac-Canéjan CS 20428, 33612 Canéjan CEDEX Tél. : 05 56 36 00 44 iterg@iterg.com »
  - description, expertises, categories : https://iterg.com/environnement-et-ecoconception/ (2026-09-27) · « Réduire l'impact sur l'environnement de vos procédés : Optimisez vos consommations d'énergie, d'eau et de matières premières [...] Diagnostics sur site industriel [...] Réalisation de diagnostics BPIfrance/ ADEME « Décarbon'Action ». [...] Objet* Devis Demande de renseignements »
  - description, expertises : https://iterg.com/environnement-et-ecoconception/ (2026-09-27) · « Minimisation des consommations d'eau. ITERG est associé au projet ANR MINIMEAU pour la minimisation des consommations d'eau dans les IAA, par le développement d'une approche intégrée associant empreinte eau et pinch massique. »
  - description : https://minimeau.fr/ (2026-09-27) · « Ce projet d'une durée de 4 ans (2018-2021) associe des partenaires académiques [...] plusieurs centres techniques (CTCPA, ITERG, ACTALIA, IFV) »
  - description, expertises : https://iterg.com/environnement-et-ecoconception/ (2026-09-27) · « Veille réglementaire environnement. Elle sélectionne et commente les lois, décrets et arrêtés [...] Les domaines couverts sont : les ICPE, l'énergie [...] les émissions de GES, l'eau, les déchets »
  - description : https://iterg.com/audit-conseil/ (2026-09-27) · « ITERG propose des produits documentaires réguliers dans le cadre de l'Adhésion. [...] Alertes réglementaires et bulletin de veille réglementaire environnement »

### PREST_HUI_010 · CRITT Agroalimentaire Sud (Provence-Alpes-Côte d'Azur)

organisme_technique · secteurs ['industrie_huiles'] · départements ['04', '05', '06', '13', '83', '84'] · statut brouillon

Centre régional d'innovation et de transfert de technologies de l'industrie agroalimentaire de Provence-Alpes-Côte d'Azur, basé à Avignon. Son pôle environnement réalise des diagnostics eau sur site (collecte des données, visite, entretiens avec la production et la maintenance) suivis d'un rapport qui analyse les flux d'effluents, chiffre leur coût et propose des pistes d'amélioration, et il aide à rechercher des financements et à monter les dossiers d'aides. Le diagnostic est une prestation payante, à tarif préférentiel pour les adhérents du réseau Food'in Provence-Alpes-Côte d'Azur ; la sensibilisation du personnel qui peut le prolonger est facturée à part et peut être prise en charge par l'OPCO.

- Mesures : ACT_AGR_002 [conseil_etude], ACT_HUI_007 [conseil_etude]
- site_internet : https://critt-iaa-paca.com
- tel : 04 90 31 55 08
- mail : critt@critt-iaa-paca.com
- adresse : Bâtiment Food'in Provence-Alpes-Côte d'Azur, 885 Chemin de la Forêt, 84140 Avignon
- Sources :
  - contacts : https://critt-iaa-paca.com/environnement/ (2026-09-27) · « CRITT Agroalimentaire PACA, Bâtiment Food'in Provence-Alpes-Côte d'Azur, 885 Chemin de la Forêt, 84140 Avignon. Tel: 04 90 31 55 08. Mail : critt@critt-iaa-paca.com »
  - contacts (capture archivée de la même page) : https://web.archive.org/web/20260312222552/https://critt-iaa-paca.com/environnement/ (2026-09-27) · « CRITT Agroalimentaire PACA, Bâtiment Food'in Provence-Alpes-Côte d'Azur, 885 Chemin de la Forêt, 84140 Avignon. Tel: 04 90 31 55 08. Mail : critt@critt-iaa-paca.com »
  - expertises, categories, mesures (ACT_AGR_002, ACT_HUI_007), description : https://critt-iaa-paca.com/environnement/ (2026-09-27) · « Economie d'eau et traitement des effluents ; Pré-diagnostics eau/énergie/déchets/éco-conception ; Recherches de financements / Montage de dossiers de demandes d'aides ; Veille réglementaire et technique »
  - expertises, categories, mesures (ACT_AGR_002, ACT_HUI_007), description (capture archivée de la même page) : https://web.archive.org/web/20260312222552/https://critt-iaa-paca.com/environnement/ (2026-09-27) · « Economie d'eau et traitement des effluents ; Pré-diagnostics eau/énergie/déchets/éco-conception ; Recherches de financements / Montage de dossiers de demandes d'aides ; Veille réglementaire et technique »
  - mesures (ACT_AGR_002, ACT_HUI_007), description : https://critt-iaa-paca.com/wp-content/uploads/files/Environnement/Diagnostic%20%26%20Accompagnement%20-%20Eau.pdf (2026-09-27) · « Objectifs : Mieux connaître les usages et le devenir de l'eau dans son entreprise ; Réduire ses consommations ; Réduire les coûts de ses effluents. Intervention sur site : collecte des données, visite des locaux, entretien avec le personnel (production, maintenance...). Rapport de synthèse : une analyse des flux des effluents, un point sur le coût des effluents, des propositions de pistes d'amélioration, des contacts pour le traitement des effluents ou co-produits. Sensibilisation du personnel non intégrée dans le coût du diagnostic, peut être prise en charge par votre OPCO. »
  - mesures (ACT_AGR_002, ACT_HUI_007), description (capture archivée de la même page) : https://web.archive.org/web/20230415053237/https://critt-iaa-paca.com/wp-content/uploads/files/Environnement/Diagnostic%20%26%20Accompagnement%20-%20Eau.pdf (2026-09-27) · « Objectifs : Mieux connaître les usages et le devenir de l'eau dans son entreprise ; Réduire ses consommations ; Réduire les coûts de ses effluents. Intervention sur site : collecte des données, visite des locaux, entretien avec le personnel (production, maintenance...). Rapport de synthèse : une analyse des flux des effluents, un point sur le coût des effluents, des propositions de pistes d'amélioration, des contacts pour le traitement des effluents ou co-produits. Sensibilisation du personnel non intégrée dans le coût du diagnostic, peut être prise en charge par votre OPCO. »
  - mesures (ACT_HUI_007) : https://critt-iaa-paca.com/support-individuel/diagnostic-conseil-accompagnement/ (2026-09-27) · « Chaque année, le CRITT accompagne plus de 100 entreprises, sur des projets tels que : [...] le traitement des effluents »
  - mesures (ACT_HUI_007) (capture archivée de la même page) : https://web.archive.org/web/20260211070031/https://critt-iaa-paca.com/support-individuel/diagnostic-conseil-accompagnement/ (2026-09-27) · « Chaque année, le CRITT accompagne plus de 100 entreprises, sur des projets tels que : [...] le traitement des effluents »
  - departements, description : https://critt-iaa-paca.com/presentation-du-critt-agroalimentaire/ (2026-09-27) · « le CRITT Agroalimentaire Provence-Alpes-Côte d'Azur est l'outil d'innovation et de transfert de technologies spécialisé de l'industrie agroalimentaire régionale [...] aider les entreprises régionales à être durablement performantes »
  - departements, description (capture archivée de la même page) : https://web.archive.org/web/20260214195952/https://critt-iaa-paca.com/presentation-du-critt-agroalimentaire/ (2026-09-27) · « le CRITT Agroalimentaire Provence-Alpes-Côte d'Azur est l'outil d'innovation et de transfert de technologies spécialisé de l'industrie agroalimentaire régionale [...] aider les entreprises régionales à être durablement performantes »
  - type, description (accès, adhésion) : https://critt-iaa-paca.com/adherer-au-critt-agroalimentaire/ (2026-09-27) · « En région Sud l'adhésion au réseau Food'in Provence-Alpes-Côte d'Azur permet d'adhérer simultanément à l'ARIA Sud, au Critt (le centre technique) et à l'IFRIA SUD PACA. Des services à tarifs préférentiels (-30% environ) pour : [...] Un accompagnement personnalisé de vos projets »
  - type, description (accès, adhésion) (capture archivée de la même page) : https://web.archive.org/web/20260312222650/https://critt-iaa-paca.com/adherer-au-critt-agroalimentaire/ (2026-09-27) · « En région Sud l'adhésion au réseau Food'in Provence-Alpes-Côte d'Azur permet d'adhérer simultanément à l'ARIA Sud, au Critt (le centre technique) et à l'IFRIA SUD PACA. Des services à tarifs préférentiels (-30% environ) pour : [...] Un accompagnement personnalisé de vos projets »
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=CRITT%20agroalimentaire&departement=84 (2026-09-27) · « CENTRE REG INNOV TRANSFERT TECHNO AGROALIMENTAIRE SUD PROVENCE ALPES COTE D AZUR (CRITT AGRO ALIM SUD), siret 37763131200057, siège, 885 CHEMIN DE LA FORET 84000 AVIGNON, état administratif A »

### PREST_HUI_011 · OID Consultants

bureau_etudes · secteurs ['industrie_huiles'] · départements national · statut brouillon

Cabinet de conseil lyonnais en performance environnementale et énergétique des sites industriels, indépendant des fournisseurs de matériel. Il conçoit des plans de comptage (choix des points de mesure, fourniture du matériel, télérelève radio, WIFI ou filaire, y compris des consommations d'eau froide ou chaude et des effluents, pose par des partenaires agréés) et réalise des diagnostics multi-flux qui couvrent l'eau avec un plan d'action, notamment dans le cadre du Diag Eco-Flux de Bpifrance, financé à 50 % par l'ADEME. L'offre est construite sur demande après prise de contact par téléphone, courriel ou rendez-vous.

- Mesures : ACT_AGR_001 [conseil_etude+materiel], ACT_AGR_002 [conseil_etude]
- site_internet : https://oid-consultants.com/
- tel : 04 82 53 42 40
- mail : contact@oid-consultants.com
- adresse : 6c Cours Bayard, 69002 Lyon
- linkedin : https://www.linkedin.com/company/oid-consultants/
- Sources :
  - siret, adresse, type : https://recherche-entreprises.api.gouv.fr/search?q=OID%20Consultants&departement=69 (2026-09-27) · « OID CONSULTANTS, siret 53227788600042, siège, 6 C COURS BAYARD 69002 LYON, activité 70.22Z, état A »
  - contacts (tel, mail, adresse) : https://oid-consultants.com/contact/ (2026-09-27) · « Nos bureaux à Lyon. Adresse 6c Cours Bayard 69002 Lyon. Téléphone 04 82 53 42 40. Email contact@oid-consultants.com »
  - expertises, mesures (ACT_AGR_001 conseil_etude, materiel), description, contacts (linkedin) : https://oid-consultants.com/plan-de-comptage-collecte-de-donnees/ (2026-09-27) · « OID est indépendant de tout fournisseur de matériel [...] nous vous proposerons des solutions de télérelève radio sur batterie (pas de temps 5 ou 10 minutes) ou WIFI/filaire [...] nous relevons des consommations électriques, de gaz, de vapeur, de frigories, d'eau froide/chaude, d'effluents. Quels que soient vos objectifs et enjeux, nous vous proposerons le matériel adapté. OID s'occupe également de la pose via son réseau de partenaires agréés »
  - expertises, mesures (ACT_AGR_002), description : https://oid-consultants.com/multi-flux/ (2026-09-27) · « Nous faisons notamment partie des bureaux de conseils mandatés par la BPI pour réaliser des Diag Eco Flux [...] Ces diagnostics, financés à hauteur de 50% par l'ADEME, abordent 4 flux : l'énergie, les déchets, la matière et l'eau. [...] Les actions mises en avant portent sur la réduction des consommations et le traitement des eaux usées, pouvant parfois mener à un passage en circuit fermé. »
  - mesures (ACT_AGR_001, ACT_AGR_002), references : https://oid-consultants.com/references-et-temoignages/ (2026-09-27) · « Fertinagro France : Déploiement d'un plan de comptage énergétique en 2018. ETS. R. FILLIERE : OID est venu auditer notre usine en 2021 à l'occasion d'un DiagEcoFlux [...] identifier des leviers d'économies sur l'énergie, l'eau et les déchets [...] a fourni un plan d'action chiffré et priorisé »
  - departements (national) : https://oid-consultants.com/adn-et-valeurs/ (2026-09-27) · « Nous restons à ce jour référent national sur les flux énergie - déchets - matière et eau. »
  - references : https://oid-consultants.com/pilotage-du-chauffage-sur-site-industriel-la-pastillerie-de-vichy-reduit-sa-consommation-de-gaz-de-15-et-poursuit-ses-actions-de-decarbonation/ (2026-09-27) · « Pilotage du chauffage sur site industriel : la Pastillerie de Vichy réduit sa consommation de gaz de 15% [...] La collaboration entre OID et la Pastillerie Vichy a démarré il y a 10 ans. »

### PREST_HUI_012 · GreenFlex

bureau_etudes · secteurs ['industrie_huiles'] · départements national · statut brouillon

Société de conseil et d'ingénierie en énergie et environnement, aujourd'hui rattachée au groupe Oteis, avec des bureaux dans neuf villes françaises dont Lille, Lyon et Aix-en-Provence. Son offre efficacité hydrique commence par un état des lieux des consommations et des usages d'eau, puis une feuille de route et des études de faisabilité, notamment pour réutiliser les eaux usées traitées ou récupérer les eaux de pluie, et peut aller jusqu'à la réalisation en assistance à maîtrise d'ouvrage ou en clé en main. Dans le secteur, elle a renouvelé en clé en main les installations de refroidissement du process de l'usine Lesieur de Coudekerque-Branche, projet présenté sous l'angle énergie. Contact par le formulaire du site.

- Mesures : ACT_AGR_002 [conseil_etude], ACT_HUI_005 [conseil_etude], ACT_AGR_006 [conseil_etude]
- site_internet : https://www.greenflex.com/offres/multi-expertises/efficacite-hydrique/
- tel : 01 40 22 14 60
- mail : contact@greenflex.com
- adresse : 7-11 boulevard Haussmann, 75009 Paris
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=GreenFlex&departement=75 (2026-09-27) · « GREENFLEX (ETHICITY - BECITIZEN - EVEIO), siret 51184084500149, siège, 7-11 7 BOULEVARD HAUSSMANN 75009 PARIS, activité 70.22Z, état administratif A »
  - contacts, description : https://www.greenflex.com/mentions-legales/ (2026-09-27) · « R.C.S. Paris 511 840 845 [...] 7-11 boulevard Haussmann [...] 75009 Paris [...] Téléphone : +33 (0)1 40 22 14 60 [...] E-mail : contact@greenflex.com [...] La Société qui a créé ce site internet appartient au groupe Oteis. »
  - departements, description : https://www.greenflex.com/qui-sommes-nous/ (2026-09-27) · « Notre présence en Europe et en France : GreenFlex Paris, Strasbourg, Lille, Rennes, Nantes, Bordeaux, Toulouse, Aix-en-Provence (13290), Lyon »
  - mesures, expertises, description, contacts : https://www.greenflex.com/offres/multi-expertises/efficacite-hydrique/ (2026-09-27) · « GreenFlex vous aide à réduire vos consommations et à réutiliser vos eaux usées. [...] Soyez plus autonome en réutilisant vos eaux usées traitées, en récupérant vos eaux de pluie [...] Nous réalisons un état des lieux de vos consommations et de vos usages actuels [...] nous élaborons une feuille de route opérationnelle et d'investissements. [...] Nos équipes analysent la faisabilité technique, économique et juridique des projets identifiés. [...] nous agissons en tant que contractant général, des études de faisabilité et de conception à la réception des travaux »
  - expertises, description : https://www.greenflex.com/projets/references/renouvellement-installations-froid-revalorisation-chaleur-fatale-lesieur/ (2026-09-27) · « l'usine historique du Groupe Lesieur est celle de Coudekerque-Branche, près de Dunkerque [...] Renouvellement des installations de refroidissement du process [...] les études de conception, la fourniture et la réalisation des travaux ainsi que la valorisation des Certificats d'Economies d'Energie »

## Aides

### AIDE_HUI_001 · CEDRE Premiers pas (Région Sud)

subvention · secteurs ['industrie_huiles'] · départements ['04', '05', '06', '13', '83', '84'] · agences toutes · statut brouillon

Financeur : Région Provence-Alpes-Côte d'Azur (Région Sud) · Forfait de 3 000 €, sur une facture de conseil d'au moins 3 750 € HT · plafond 3 000 € par structure, une seule fois

Subvention forfaitaire de la Région Sud qui réduit le coût d'une prestation de conseil en transition écologique réalisée par un accompagnateur-expert référencé par la Région. La Région cite parmi les premières actions visées la réduction des consommations d'eau. Les prestations éligibles comprennent notamment l'adaptation à la raréfaction des ressources (utilisation économe des ressources) et l'adaptation aux conséquences du changement climatique. Les investissements repérés pendant l'accompagnement peuvent ensuite être soutenus par CEDRE Investissement.

Éligibilité : Entreprises inscrites au RNE et associations à activité marchande dont le siège social ou l'établissement se situe en Provence-Alpes-Côte d'Azur, avec un chiffre d'affaires de 2 millions d'euros au plus, éligibles au régime de minimis et n'ayant pas déjà bénéficié d'un accompagnement de même nature ou d'un dispositif de la gamme CEDRE. Le secteur de l'agriculture, de la sylviculture et de la pêche est exclu, ainsi que les bureaux d'études et cabinets de conseil spécialisés en RSE, transition écologique ou développement durable.

- Mesures : ACT_AGR_002
- **avertissement** : L'aide se demande après la prestation, sur présentation d'une facture de moins de 6 mois, d'au moins 3 750 € HT, intégralement acquittée à un expert référencé par la Région. Une prestation confiée à un consultant absent de la liste régionale n'est pas éligible.
- **avertissement** : Le secteur de l'agriculture, de la sylviculture et de la pêche est exclu du dispositif. Vérifiez votre éligibilité auprès de la Région avant d'engager la prestation : 0 805 805 145 (appel gratuit, du lundi au vendredi).
- **info** : La demande se dépose en ligne sur la plateforme régionale, toute l'année, et les dossiers sont instruits par ordre d'arrivée. Pièces demandées : extrait RNE, derniers comptes, facture de l'expert, synthèse de l'accompagnement et de son calendrier, attestation de minimis, RIB. La Région recommande un échange préalable avec ses services : 0 805 805 145 (appel gratuit, du lundi au vendredi) ou relationentrepriseusager@maregionsud.fr.
- **info** : À l'issue de l'accompagnement, CEDRE Investissement peut attribuer une subvention forfaitaire de 7 000 € pour réaliser des investissements identifiés pendant le parcours, avec des dépenses éligibles d'au moins 10 000 € HT.
- **ressource** : Page du dispositif sur le site de la Région Sud (https://www.maregionsud.fr/vos-aides/detail/cedre-premiers-pas)
- **ressource** : Liste 2026 des accompagnateurs-experts référencés pour la prestation « Adaptation aux conséquences du changement climatique », dont plusieurs affichent une compétence ressource en eau (https://www.maregionsud.fr/fileadmin/user_upload/1-FICHIERS/2-DOCUMENTS/Economie-Emploi/8-Adaptation_aux_consequences_du_changement_climatique_2026.pdf)
- **ressource** : Dépôt de la demande sur la plateforme d'aides en ligne de la Région Sud (https://aidesenligne.maregionsud.fr/aides/#/crsud/connecte/F_CEDRE_1ERPAS/depot/simple)
- Sources :
  - taux, plafond : https://www.maregionsud.fr/vos-aides/detail/cedre-premiers-pas (2026-09-27) · « L'aide régionale prend la forme d'une subvention forfaitaire de 3 000 euros, sur présentation d'une facture de moins de 6 mois, d'un montant minimum de 3 750 euros HT, intégralement acquittée à un expert référencé par la Région »
  - plafond (une seule fois) : https://www.maregionsud.fr/vos-aides/detail/cedre-premiers-pas (2026-09-27) · « Le demandeur ne peut prétendre à cette aide qu'une seule fois. »
  - description, mesures (ACT_AGR_002) : https://www.maregionsud.fr/vos-aides/detail/cedre-premiers-pas (2026-09-27) · « vous souhaitez concrétiser de premières actions de transition écologique (réduction de vos consommation d'eau, d'énergie, de matières premières [...]) ? Avec CEDRE Premiers pas, accédez à une prestation de conseil à un coût réduit avec l'appui d'un accompagnateur-expert retenu par la Région Sud. »
  - description, mesures (ACT_AGR_002) : https://www.maregionsud.fr/vos-aides/detail/cedre-premiers-pas (2026-09-27) · « Réduction de l'impact environnemental des produits et services de l'entreprise et l'adaptation à la raréfaction des ressources (écoconception, [...] utilisation économe des ressources, [...]) »
  - description : https://www.maregionsud.fr/vos-aides/detail/cedre-premiers-pas (2026-09-27) · « Adaptation aux conséquences du changement climatique et à la raréfaction des ressources (déploiement de solutions innovantes et/ou alternatives, changement/évolution des pratiques et procédés de production, actions de prévention des risques, etc.). »
  - mesures (experts eau référencés) : https://www.maregionsud.fr/fileadmin/user_upload/1-FICHIERS/2-DOCUMENTS/Economie-Emploi/8-Adaptation_aux_consequences_du_changement_climatique_2026.pdf (2026-09-27) · « Scilog accompagne les entreprises et collectivités dans leur transition écologique. Par la sensibilisation, les bilans carbone et la baisse du besoin en eau ; Ecovia : Biodiversité, Ressource en eau »
  - eligibilite, departements : https://www.maregionsud.fr/vos-aides/detail/cedre-premiers-pas (2026-09-27) · « Réalisant un chiffre d'affaires inférieur ou égal à 2 millions d'euros (SIREN) ; Dont le siège social ou l'établissement se situe en Provence-Alpes-Côte d'Azur ; Eligibles au régime de minimis »
  - eligibilite (exclusions) : https://www.maregionsud.fr/vos-aides/detail/cedre-premiers-pas (2026-09-27) · « Sont exclus : Les bureaux d'étude et cabinets de conseil spécialisés dans la RSE [...], la transition écologique ou le développement durable ; Le secteur de l'agriculture, de la sylviculture et de la pêche »
  - infos_complementaires (démarche) : https://www.maregionsud.fr/vos-aides/detail/cedre-premiers-pas (2026-09-27) · « Les dossiers peuvent être déposés tout au long de l'année. Leur analyse sera faite chronologiquement, par ordre d'arrivée. Un échange préalable auprès des services de la Région Sud est fortement recommandé ; 0 805 805 145 (services et appels gratuits) ou par courriel à relationentrepriseusager@maregionsud.fr »
  - infos_complementaires (CEDRE Investissement) : https://www.maregionsud.fr/vos-aides/detail/cedre-premiers-pas (2026-09-27) · « A l'issue, avec CEDRE Investissement, une subvention forfaitaire de 7 000 euros pourra être attribuée aux structures accompagnées [...] Ces projets devront présenter des dépenses éligibles d'un montant minimum de 10 000 HT. »

### AIDE_HUI_002 · CEDRE Investissement (Région Sud)

subvention · secteurs ['industrie_huiles'] · départements ['04', '05', '06', '13', '83', '84'] · agences toutes · statut brouillon

Financeur : Région Sud Provence-Alpes-Côte d'Azur · Forfait de 7 000 € (volet Premiers pas) ; jusqu'à 70 % des dépenses éligibles (volet Ambition) · plafond Volet Premiers pas : 7 000 € pour au moins 10 000 € HT de dépenses éligibles. Volet Ambition : subvention comprise entre 10 000 et 100 000 €

Subvention régionale aux investissements durables engagés à la suite d'un accompagnement CEDRE Premiers pas ou CEDRE Ambition, en cohérence avec le plan d'actions défini pendant cet accompagnement. Parmi les dépenses citées en exemple par la Région figurent les logiciels et travaux permettant la réalisation d'économies d'eau, les équipements économes en ressources et les études préalables à des investissements.

Éligibilité : Entreprises inscrites au RNE ou associations à activité marchande, dont le siège ou l'établissement est en Provence-Alpes-Côte d'Azur, déjà accompagnées par CEDRE Premiers pas (chiffre d'affaires jusqu'à 2 millions d'euros) ou CEDRE Ambition (PME de moins de 250 personnes, plus de 2 ans d'existence ou un bilan), et éligibles au régime de minimis.

- Mesures : ACT_HUI_001, ACT_HUI_002
- **avertissement** : L'aide est réservée aux structures déjà accompagnées par CEDRE Premiers pas ou CEDRE Ambition : l'investissement doit être cohérent avec les préconisations de cet accompagnement, justifiées par un descriptif du projet (Premiers pas) ou par le rapport de l'accompagnateur-expert (Ambition).
- **avertissement** : Sont notamment exclus l'équipement informatique, les abonnements mensuels pour des licences, les acquisitions par crédit-bail, les travaux d'extension ou de construction de bâtiments, et les dépenses pouvant déjà bénéficier d'un autre financement de la Région. Les travaux d'aménagement ne sont retenus que s'ils favorisent explicitement les économies d'énergie ou d'eau, avec des précisions sur les économies attendues.
- **info** : Le dossier se dépose en ligne sur la plateforme régionale tout au long de l'année et il est analysé par ordre d'arrivée. La Région recommande fortement un échange préalable avec ses services pour vérifier l'éligibilité : permanence téléphonique gratuite au 0 805 805 145, du lundi au vendredi.
- **info** : Le matériel d'occasion est éligible s'il est acheté au prix du marché de l'occasion, sur présentation d'une attestation d'achat accompagnée de la facture initiale.
- **ressource** : Page du dispositif sur le site de la Région Sud (https://www.maregionsud.fr/vos-aides/detail/cedre-investissement)
- **ressource** : Dépôt de la demande sur la plateforme des aides en ligne de la Région Sud (https://aidesenligne.maregionsud.fr/aides/#/crsud/connecte/F_S_I_CEDREINV/depot/simple)
- Sources :
  - description, eligibilite (condition d'accompagnement CEDRE) : https://www.maregionsud.fr/vos-aides/detail/cedre-investissement (2026-09-27) · « vous avez bénéficié du dispositif CEDRE Premiers pas ou CEDRE Ambition et vous portez, suite à cet accompagnement, un projet d'investissement prenant en compte les enjeux de la transition écologique (page mise à jour le 17 avril 2026) »
  - taux, plafond (volet Premiers pas) : https://www.maregionsud.fr/vos-aides/detail/cedre-investissement (2026-09-27) · « subvention forfaitaire d'investissement de 7 000 euros pour un montant minimum des dépenses éligibles de 10 000 euros HT »
  - taux, plafond (volet Ambition) : https://www.maregionsud.fr/vos-aides/detail/cedre-investissement (2026-09-27) · « subvention d'investissement comprise entre 10 000 et 100 000 euros avec un taux d'intervention maximum de 70% du montant total des dépenses éligibles »
  - description, mesures (ACT_HUI_001, ACT_HUI_002), categories : https://www.maregionsud.fr/vos-aides/detail/cedre-investissement (2026-09-27) · « A titre d'exemple (non exhaustif) : Les équipements économes en ressources [...] Les logiciels et travaux permettant la réalisation d'économies d'eau ; Les études préalables à des investissements »
  - eligibilite : https://www.maregionsud.fr/vos-aides/detail/cedre-investissement (2026-09-27) · « Dont le siège social ou l'établissement se situe en Provence-Alpes-Côte d'Azur ; Eligibles au régime de minimis ; [Premiers pas] chiffre d'affaires inférieur ou égal à 2 millions d'euros ; [Ambition] effectif inférieur à 250 personnes [...] De plus de 2 ans d'existence ou présentant au moins un bilan »
  - departements (Provence-Alpes-Côte d'Azur, région 93) : https://geo.api.gouv.fr/regions/93/departements (2026-09-27) · « Alpes-de-Haute-Provence 04, Hautes-Alpes 05, Alpes-Maritimes 06, Bouches-du-Rhône 13, Var 83, Vaucluse 84 (codeRegion 93) »
  - infos_complementaires (accompagnement préalable, pièces) : https://www.maregionsud.fr/vos-aides/detail/cedre-investissement (2026-09-27) · « Le rapport d'expert précisant dans quelle mesure l'investissement est en lien avec le plan d'actions défini avec l'accompagnateur-expert lors de l'accompagnement CEDRE Ambition »
  - infos_complementaires (exclusions) : https://www.maregionsud.fr/vos-aides/detail/cedre-investissement (2026-09-27) · « Sont exclus : [...] Les travaux d'aménagement sauf ceux favorisant explicitement les économies d'énergie ou d'eau avec des précisions sur les économies attendues [...] Les acquisitions effectuées par crédit-bail ; L'équipement informatique ; Les abonnements mensuels pour des licences »
  - infos_complementaires (démarche, contact, matériel d'occasion) : https://www.maregionsud.fr/vos-aides/detail/cedre-investissement (2026-09-27) · « Les dossiers peuvent être déposés tout au long de l'année. Leur analyse sera faite chronologiquement, par ordre d'arrivée. [...] Un échange préalable auprès des services de la Région Sud est fortement recommandé [...] 0 805 805 145 (services et appels gratuits) ; Le matériel d'occasion est également éligible s'il est au prix du marché de l'occasion et sur présentation d'une attestation d'achat accompagnée de la facture initiale. »
  - infos_complementaires (lien de dépôt) : https://www.maregionsud.fr/vos-aides/detail/cedre-investissement (2026-09-27) · « Bouton « Je fais ma demande » : https://aidesenligne.maregionsud.fr/aides/#/crsud/connecte/F_S_I_CEDREINV/depot/simple »

### AIDE_HUI_003 · Sud Prêt Climat (Région Sud et Bpifrance)

pret · secteurs ['industrie_huiles'] · départements ['04', '05', '06', '13', '83', '84'] · agences toutes · statut brouillon

Financeur : Région Sud Provence-Alpes-Côte d'Azur, instruit par Bpifrance · Prêt à taux préférentiel, qui ne peut être inférieur à 0,20 % · plafond De 10 000 à 300 000 €, avec un cofinancement obligatoire à raison de 1 pour 1

Prêt régional à taux préférentiel, sans garantie personnelle ni sûreté réelle, sur 5 ans (dont 1 an de différé d'amortissement en capital) ou 7 ans (dont 2 ans de différé). Il finance les projets qui renforcent au moins une priorité du Plan Climat de la Région, parmi lesquelles les économies d'eau et la prévention et le contrôle des pollutions. La page cite comme éligibles les besoins en fonds de roulement liés à la transition, les investissements immatériels et les coûts de mise aux normes (environnement, sécurité).

Éligibilité : PME au sens européen (moins de 250 personnes, chiffre d'affaires inférieur à 50 M€ ou total bilan inférieur à 43 M€), de plus de 3 ans ou pouvant fournir deux bilans couvrant au moins 24 mois, exerçant l'essentiel de leur activité en Région Sud ou s'y installant, financièrement saines et éligibles au régime de minimis. Sont exclues notamment les entreprises individuelles, les autoentrepreneurs, les SCI et les secteurs agricole, forestier et de la pêche (NAF A01, A02, A03).

- **avertissement** : La page se contredit sur les équipements : l'introduction annonce le financement des « investissements matériels et immatériels nécessaires à leur transition énergétique et écologique », mais la liste des dépenses exclut « Les investissements immobiliers et mobiliers » et ne cite comme éligibles que le fonds de roulement, les investissements immatériels et les coûts de mise aux normes. Avant de compter sur ce prêt pour acheter un équipement, faites confirmer son éligibilité par la Région ou par Bpifrance.
- **avertissement** : Le cofinancement est obligatoire et ne peut pas être une aide directe. Au-dessus de 50 000 €, il doit porter sur le même programme d'investissement, réalisé depuis moins de 6 mois, et le prêt ne peut dépasser vos fonds propres et quasi-fonds propres. Jusqu'à 50 000 €, un endettement bancaire d'au moins 3 ans et d'un encours au moins égal à 50 % du prêt est exigé.
- **info** : La demande se fait en ligne sur la plateforme de Bpifrance, qui constitue et instruit le dossier ; les dossiers se déposent toute l'année et sont analysés par ordre d'arrivée. Jusqu'à 50 000 €, le plan d'actions est allégé mais l'Autodiag Climatomètre de Bpifrance est obligatoire. Un échange préalable avec les services de la Région est fortement recommandé (0 805 805 145, appel gratuit).
- **ressource** : Page du dispositif sur le site de la Région Sud (https://www.maregionsud.fr/vos-aides/detail/sud-pret-climat)
- Sources :
  - nom, financeur, description, date de mise à jour : https://www.maregionsud.fr/vos-aides/detail/sud-pret-climat (2026-09-27) · « Mis à jour le 21 janvier 2026. Avec SUD Prêt Climat, et en partenariat avec Bpifrance, la Région Sud entend donc répondre au besoin des PME de financer à faible coût, les investissements matériels et immatériels nécessaires à leur transition énergétique et écologique »
  - type, taux, plafond : https://www.maregionsud.fr/vos-aides/detail/sud-pret-climat (2026-09-27) · « L'aide régionale prend la forme d'un prêt à taux préférentiel compris entre 10 000 et 300 000 euros octroyé à des conditions plus favorables que les conditions du marché et ne pouvant être inférieur à 0,20%. [...] un partenariat financier est obligatoire à raison de 1 pour 1 »
  - description (durée, garanties) : https://www.maregionsud.fr/vos-aides/detail/sud-pret-climat (2026-09-27) · « 5 ans dont un différé d’amortissement en capital de 1 an. 7 ans dont un différé d’amortissement en capital de 2 ans. [...] aucune garantie personnelle ou sûreté réelle n’est exigée. »
  - eligibilite : https://www.maregionsud.fr/vos-aides/detail/sud-pret-climat (2026-09-27) · « De plus de 3 ans ou en capacité de fournir deux bilans couvrant une durée minimum de 24 mois. Quelle que soit leur forme juridique (à l'exclusion des entreprises individuelles et des SCI). [...] Le secteur agricole ayant un code NAF section A01 [...] ou A02 [...] Le secteur de la pêche et de l’aquaculture ayant un code NAF section A03 »
  - departements : https://www.maregionsud.fr/vos-aides/detail/sud-pret-climat (2026-09-27) · « Exerçant l'essentiel de leur activité sur le territoire régional ou s'y installant. »
  - categories : https://www.maregionsud.fr/vos-aides/detail/sud-pret-climat (2026-09-27) · « Les économies d’eau. [...] La prévention et le contrôle des pollutions. [...] Sont éligibles : [...] Les investissements immatériels, les coûts de mise aux normes (environnement, sécurité), de recrutement, de formation »
  - infos_complementaires (contradiction sur les équipements) : https://www.maregionsud.fr/vos-aides/detail/sud-pret-climat (2026-09-27) · « Sont exclus : [...] Les investissements immobiliers et mobiliers, les acquisitions de titres ou de fonds de commerce. »
  - infos_complementaires (cofinancement, démarche) : https://www.maregionsud.fr/vos-aides/detail/sud-pret-climat (2026-09-27) · « Le cofinancement est obligatoire et doit porter sur le même programme d'investissement réalisé depuis moins de 6 mois [...] Les dossiers peuvent être déposés tout au long de l’année. Leur analyse sera faite chronologiquement, par ordre d’arrivée. Un échange préalable auprès des services de la Région Sud est fortement recommandé »

### AIDE_HUI_004 · DECARB FLASH 2025-2027 (ADEME, France 2030)

subvention · secteurs ['industrie_huiles'] · départements national · agences toutes · statut brouillon

Financeur : ADEME, Agence de la transition écologique · Selon la nature du projet · plafond ?

Appel à projets national de l'ADEME qui finance la décarbonation des activités industrielles en agissant sur la baisse de la consommation énergétique des procédés de production, l'électrification des équipements industriels et l'isolation thermique des bâtiments. Seules les opérations de la liste du dispositif sont éligibles. C'est une aide énergie et climat, pas une aide à l'eau : pour un site de trituration, de raffinage ou un fondoir, son intérêt côté eau tient à l'opération « Installation de lignes de retours condensats sur les circuits vapeur », qui permet de renvoyer les condensats à la chaufferie au lieu de les perdre. Le refroidissement en circuit fermé ne figure pas dans la liste.

Éligibilité : Sites industriels de PME, ainsi que sites industriels de grandes entreprises non soumis à la directive EU-ETS, en France et dans les territoires d'outre-mer. Le coût total des opérations doit être compris entre 100 k€ (25 k€ en Corse et Outre-mer) et 3 M€. Un audit énergétique de moins de 4 ans ou une étude d'opportunité d'évolution du mix énergétique (programme PACTE Industrie) doit avoir été réalisé. Les activités agricoles sont exclues, sauf celles relevant de l'industrie agro-alimentaire.

- Mesures : ACT_HUI_005
- **avertissement** : L'investissement ne doit pas avoir été réalisé au moment du dépôt de la demande. Une réunion de pré-dépôt avec l'ADEME doit être organisée au moins un mois avant le dépôt du dossier, sur la base de la trame de présentation mise à disposition par l'ADEME (contact : decarb.flash@ademe.fr).
- **avertissement** : Sans audit énergétique de moins de 4 ans ou étude d'opportunité PACTE Industrie, le projet n'est pas éligible : prévoyez cet audit avant de monter le dossier.
- **info** : Le dispositif est ouvert jusqu'au 15/02/2027. Le dossier se dépose en ligne sur la plateforme de l'ADEME, après création d'un compte ADEME. La liste des opérations éligibles peut évoluer : vérifiez celle en vigueur dans les documents de l'ADEME avant de monter le dossier.
- **ressource** : Page du dispositif sur le site de l'ADEME (cahier des charges, liste des actions éligibles, contacts en région) (https://agirpourlatransition.ademe.fr/entreprises/aides-financieres/catalogue/aap/decarb-flash-2025-2027)
- **ressource** : Fiche du dispositif sur la plateforme Transition écologique des entreprises, avec la liste des opérations éligibles (https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/decarb-flash-2025-2027)
- Sources :
  - financeur, taux, eligibilite, description : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/decarb-flash-2025-2027 (2026-09-27) · « Financez la décarbonation de vos activités industrielles grâce à cet appel à projet, en agissant sur : La baisse de la consommation énergétique dans les procédés de production ; L'électrification des équipements industriels ; L'isolation thermique de vos bâtiments. [...] Montant du financement Selon la nature du projet. Contact ADEME, Agence de la transition écologique »
  - eligibilite : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/decarb-flash-2025-2027 (2026-09-27) · « France et territoires d'outre-mer. [...] les activités agricoles (sauf celles relevant de l'industrie agro-alimentaire) [...] Le coût total des opérations doit être compris entre 100 k€ (25 k€ en Corse et Outre-mer) et 3 M€. L'appel à projet concerne les sites industriels appartenant à des PME, ainsi qu'à ceux appartenant à des Grandes Entreprises (non soumises à la directive EU-ETS). »
  - mesures, description : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/decarb-flash-2025-2027 (2026-09-27) · « Les projets éligibles sont les suivants : [...] Installation de purgeurs vapeur sur les circuits vapeur ; Installation de lignes de retours condensats sur les circuits vapeur ; Installation de lignes de retours sur les circuits des NEP [...] »
  - infos_complementaires : https://mission-transition-ecologique.beta.gouv.fr/aides-entreprise/decarb-flash-2025-2027 (2026-09-27) · « Contactez l'ADEME pour planifier une réunion de pré-dépôt du dossier (au moins un mois avant la date limite de dépôt). [...] Créez un compte ADEME pour pouvoir déposer votre dossier. [...] À ce stade, votre investissement ne doit pas avoir été réalisé ! [...] Date de fin de l'aide Disponible jusqu'au 15/02/2027 »
  - type, nom, eligibilite : https://www.invest-in-nord-franche-comte.fr/fr/newsletter-adnfc/decarb-flash2025-2027/ (2026-09-27) · « L'Appel à Projets DECARB-FLASH, qui s'inscrit dans le cadre de France 2030, est reconduit jusqu'au 15 février 2027. [...] DECARB-FLASH est octroyé sous forme de subvention [...] Un audit énergétique de moins de 4 ans ou une étude d'opportunité d'évolution du mix énergétique (programme PACTE Industrie) devront être réalisés »
  - infos_complementaires : https://www.invest-in-nord-franche-comte.fr/fr/newsletter-adnfc/decarb-flash2025-2027/ (2026-09-27) · « Une réunion de pré-dépôt doit être organisé en une présentation par le porteur du projet à l'adresse suivante : decarb.flash@ademe.fr. Cette présentation doit s'appuyer sur la « trame de présentation de dossier en pré-dépôt », disponible sur la plateforme ADEME AGIR et doit se dérouler 1 mois au minimum avant le dépôt du dossier. »
  - nom : https://www.savoie.gouv.fr/Actions-de-l-Etat/Entreprises-innovez-avec-France-2030/Les-appels-a-candidature-et-appels-a-projet-en-cours (2026-09-27) · « Entreprises : innovez avec France 2030 > Les appels à candidature et appels à projet en cours [...] DECARB FLASH 2025-2027 - du 10 avril 2025 au 15 février 2027 : Pour accompagner des petits projets de décarbonation de sites industriels, dont le coût est compris entre 100 K€ et 3 M€ »

