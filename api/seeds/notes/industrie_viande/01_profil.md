# Profil eau du secteur : industrie de la viande et des produits de la mer

Note de profil, étape 2 du skill `nouveau-secteur`. Statut : brouillon, à valider par un consultant.
Date de rédaction : 2026-09-24.

| Champ | Valeur |
|---|---|
| `sector_id` | `industrie_viande` |
| Libellé | Industrie de la viande et des produits de la mer |
| Préfixe des mesures | `VIA` (`ACT_VIA_001` et suivants) |
| Codes NAF | 10.11Z, 10.12Z, 10.13A, 10.20Z (5 370 établissements) |

Cette note prolonge `00_perimetre.md` et ne la contredit pas. Elle distingue trois sous-populations,
que le questionnaire séparera par une question d'entrée : **(A) abattage** (boucherie et volaille),
**(T) transformation de viande sans abattage** (découpe, salaisons, charcuterie industrielle,
cuisson), **(M) produits de la mer** (filetage, décongélation, cuisson des crustacés, fumage,
conserve, farines).

Avertissement de méthode : les ratios publics sont nombreux et réglementaires pour l'abattage, rares
pour la transformation, quasi absents pour les produits de la mer. Les valeurs non sourcées sont au
conditionnel avec la mention « à confirmer », et la fin de la note liste ce qui manque.

## 1. Usages de l'eau, du plus gros au plus petit

**1. Le nettoyage et la désinfection.** C'est le premier poste dans les trois sous-populations. Dans
les industries alimentaires, le nettoyage représente environ 43 % de l'eau utilisée, contre 33 % pour
le process, et peut atteindre 80 à 85 % dans certaines entreprises
[ARIA Auvergne-Rhône-Alpes, 2024](https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/).
À la différence de la laiterie, il se fait surtout à la main, au jet, sur des surfaces ouvertes (sols,
murs, convoyeurs, crochets, bacs), chaque jour en fin de production. S'y ajoute la désinfection des
couteaux en cours d'activité : la méthode de référence, l'immersion dans l'eau à 82 °C, entraîne des
dépenses d'eau et d'énergie élevées du fait des lavabos à débordement
[ADIV, 2016](https://www.adiv.fr/desinfection-couteaux-alternatives-a-maitriser/).
La part exacte du nettoyage dans un abattoir ou un atelier de découpe français n'a pas été trouvée
(à confirmer).

**2. Le process, qui diffère selon la sous-population.**
- (A) Abattage : échaudage des porcs et des volailles, douchage et lavage des carcasses, lavage des
  abats et boyauderie, lavage des camions et des bouveries. Une étude sur huit abattoirs-découpes de
  porcs mesure 355 litres par porc de 90 kg de carcasse
  [IFIP, 2010](https://ifip.asso.fr/documentations/32763-consommation-deau-et-denergie-en-abattoir-decoupe-de-porcs-caracterisation-des-situations-actuelles-dans-8-outils/),
  soit environ 3,9 litres par kilogramme. Tous abattoirs confondus, la consommation moyenne est passée
  de 5 à 4,4 m3 par tonne équivalent carcasse entre 1995 et 2010
  [Interbev, sans date](https://www.interbev.fr/enjeux-societaux/environnement-territoires/economiser-les-ressources/).
  La volaille est la plus consommatrice : la réglementation admet 10 litres par kilogramme de carcasse
  quand la réfrigération se fait par immersion, contre 6 litres sinon
  [arrêté du 30 avril 2004, AIDA](https://aida.ineris.fr/reglementation/arrete-300404-relatif-prescriptions-generales-applicables-installations-classees),
  et le niveau de rejet de référence est de 6,3 m3 par tonne de carcasses de poulets, contre 3,5 pour
  les porcs et 3,9 pour les bovins
  [arrêté du 31 mars 2025, AIDA](https://aida.ineris.fr/reglementation/arrete-310325-relatif-prescriptions-generales-applicables-installations-relevant).
- (T) Transformation : cuisson (jambons, pâtés, boudins), saumurage, refroidissement des produits
  cuits, décongélation des matières premières, lavage des bacs et des moules. Un fabricant de
  charcuterie de 18 000 tonnes par an consommait 13 litres d'eau par kilogramme de produit fini en
  2015, pour 200 000 m3 par an
  [Agence de l'eau Loire-Bretagne, 2023](https://www.eau-loire-bretagne.fr/sites/aides-redevances/home/retours-dexperiences/bahier--des-actions-deconomie-deau-1.html).
  C'est un cas, pas une moyenne de branche : aucun ratio consolidé n'a été trouvé (à confirmer).
- (M) Produits de la mer : décongélation, lavage et filetage, fabrication de glace, saumurage,
  cuisson et refroidissement des crustacés, conserve. La décongélation y est décrite depuis longtemps
  comme l'étape de la chaîne du froid la plus négligée, faite avec des moyens improvisés à l'air et à
  l'eau [Ifremer, 1980](https://archimer.ifremer.fr/doc/00189/30062/). Aucun ratio français récent
  en m3 par tonne n'a été trouvé (à confirmer).

**3. Le froid.** Ressuage des carcasses, chambres froides, surgélation, glace, refroidissement des
produits cuits. Il consomme de l'eau par les condenseurs et les tours aéroréfrigérantes : chez le
charcutier cité plus haut, le remplacement des tours par des condenseurs adiabatiques a réduit de
90 % l'eau de ce poste (Agence de l'eau Loire-Bretagne, 2023, même source).

**4. Les utilités et l'extérieur** : chaufferie et vapeur (échaudage, cuisson, autoclaves), lavage
des camions, des cages et caisses de transport, des quais. **5. L'eau sanitaire** du personnel,
importante dans ces ateliers à forte main-d'œuvre (lave-mains, bottes, tabliers), dernier poste en
volume.

## 2. Sources d'approvisionnement

Le réseau public d'eau potable domine, parce que l'eau au contact des denrées doit être potable :
jusqu'en 2024, le code de la santé publique n'admettait que l'eau destinée à la consommation humaine
dans les process alimentaires
[Assemblée nationale, 2024](https://questions.assemblee-nationale.fr/q16/16-12522QE.htm).
Les gros sites doubleraient ce réseau par des forages traités sur place (à confirmer, aucune
statistique de branche trouvée) ; en enregistrement au titre de la rubrique 2221, le volume prélevé
par forage reste inférieur à 200 000 m3 par an
[arrêté du 23 mars 2012, AIDA](https://aida.ineris.fr/reglementation/arrete-230312-relatif-prescriptions-generales-applicables-installations-relevant).

Les produits de la mer ont une source propre : l'**eau de mer propre**, admise pour la manipulation
et le lavage des produits de la pêche et pour la glace, à condition de démontrer l'absence de risque
[Union du mareyage, guide de bonnes pratiques d'hygiène](https://www.mareyeurs.org/site_GBPH/alimentation_en_fluides_eau_.html).
Son emploi suppose un arrêté préfectoral d'autorisation, un réseau séparé et signalé, sans
interconnexion avec le réseau d'eau potable, et la preuve de son innocuité incombe à l'exploitant
[code de la santé publique, article R1322-73, Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000042286068/).
L'eau non potable ne sert qu'aux usages sans contact (circuits de réfrigération, incendie), dans des
canalisations distinctes (Union du mareyage, même source). Eau de pluie et recyclage restent
marginaux, mais le cadre s'est ouvert en 2024 et 2025 (voir section 4).

## 3. Dépendances critiques

**(A) L'abattoir ne peut pas s'arrêter proprement.** Les animaux arrivent vivants selon un planning
fixé avec les éleveurs ; les abreuver en bouverie est une obligation de protection animale, et le
nettoyage complet des salles conditionne la reprise du lendemain. Une restriction sévère se
traduirait donc par un report d'abattage qui remonte aussitôt dans les élevages, surtout en volaille
où les bandes sont calées (raisonnement de conception, à confirmer avec la profession). En cas de
crise zoosanitaire, le préfet peut porter les niveaux de rejet autorisés jusqu'au double
[arrêté du 31 mars 2025, AIDA](https://aida.ineris.fr/reglementation/arrete-310325-relatif-prescriptions-generales-applicables-installations-relevant).

**(T) La transformation a plus de marge.** Une partie des matières premières se stocke congelée, ce
qui permet de décaler une production ; en revanche la cuisson et le refroidissement des produits cuits
ne se font pas à moitié, et le froid s'arrête avant le process si la tour aéroréfrigérante manque
d'appoint (à confirmer par l'audit du site).

**(M) Le poisson frais impose son rythme.** Il arrive avec les débarques et doit être travaillé et
glacé immédiatement. Les sites sont littoraux, souvent alimentés par des réseaux sous tension l'été
(hypothèse à confirmer localement). L'eau de mer propre, quand elle est autorisée, réduit cette
dépendance au réseau.

**Ce que change un arrêté sécheresse.** Les installations classées en autorisation ou en
enregistrement qui prélèvent plus de 10 000 m3 par an doivent réduire leur prélèvement de 5 % en
alerte, 10 % en alerte renforcée et 25 % en crise, au plus tard trois jours après le déclenchement
[arrêté du 30 juin 2023, AIDA](https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement).
Sont exclus notamment l'abreuvement et la santé animale, la « transformation agroalimentaire en flux
poussé » de matières premières périssables à l'état frais, les exploitants ayant réduit leur
prélèvement d'au moins 20 % depuis 2018, ceux qui utilisent au moins 20 % d'eaux réutilisées et les
installations autorisées ou enregistrées depuis 2023 (même source). Le texte ne cite pas les
abattoirs : leur rattachement au flux poussé, évident pour le poisson frais, se discute pour
l'abattage d'animaux vivants et pour la charcuterie travaillant des matières congelées. C'est une
lecture à faire valider par l'inspection avant la crise, pas pendant. Les sites déclarés ou sous le
seuil relèvent des arrêtés préfectoraux, dont les limitations de lavage (véhicules, surfaces) les
touchent directement (à vérifier dans l'arrêté-cadre de chaque département).

## 4. Risques et contraintes réglementaires

**Statut ICPE.**
- Abattage, rubrique 2210 : déclaration de 500 kg à 5 tonnes de carcasses par jour, autorisation
  au-delà [AIDA, rubrique 2210](https://aida.ineris.fr/reglementation/2210-abattage-danimaux-a-lexclusion-activites-classees-titre-rubrique-3641).
  Le texte des sites déclarés plafonne la consommation à 6 litres par kilogramme de carcasse (10 avec
  réfrigération par immersion), impose un totalisateur sur les prélèvements, la collecte séparée du
  sang et un prétraitement avec dégrillage à 6 mm au plus
  [arrêté du 30 avril 2004, AIDA](https://aida.ineris.fr/reglementation/arrete-300404-relatif-prescriptions-generales-applicables-installations-classees).
- Abattoirs de plus de 50 tonnes de carcasses par jour, rubrique 3641 (directive IED) : l'arrêté du
  31 mars 2025 transpose les conclusions MTD européennes de 2023
  [AIDA, décision 2023/2749](https://aida.ineris.fr/reglementation/decision-ndeg-20232749-111223-etablissant-conclusions-meilleures-techniques).
  Il reprend le plafond de 6 litres par kilogramme, fixe des niveaux de rejet spécifique en moyenne
  annuelle (bovins 3,9 m3 par tonne de carcasses, 5,25 avec les activités de transformation ; porcins
  3,5 ; poulets 6,3, soit 0,013 m3 par poulet), et impose un plan de gestion de l'eau avec audit au
  moins annuel. Il s'applique aux sites existants à partir de décembre 2027
  [arrêté du 31 mars 2025, AIDA](https://aida.ineris.fr/reglementation/arrete-310325-relatif-prescriptions-generales-applicables-installations-relevant).
- Transformation et produits de la mer, rubrique 2221 (découpage, cuisson, appertisation,
  congélation, salage, saurage, enfumage) : déclaration avec contrôle de 500 kg à 4 tonnes de
  produits entrants par jour, enregistrement au-delà
  [AIDA, rubrique 2221](https://aida.ineris.fr/reglementation/2221-preparation-conservation-produits-alimentaires-dorigine-animale).
  En enregistrement, la réfrigération en circuit ouvert est interdite, les sols sont nettoyés à sec
  par raclage avant lavage, et le débit spécifique d'effluents est plafonné à 6 m3 par tonne de
  produit entrant (10 avec refroidissement évaporatif)
  [arrêté du 23 mars 2012, AIDA](https://aida.ineris.fr/reglementation/arrete-230312-relatif-prescriptions-generales-applicables-installations-relevant).
- Au-delà de 75 tonnes de produits finis par jour à partir de matières animales, rubrique 3642
  [AIDA, rubrique 3642](https://aida.ineris.fr/reglementation/3642-traitement-transformation-matieres-premieres-vue-fabrication-produits) :
  les MTD agroalimentaires y prévoient, pour le poisson, l'évidage et le dégraissage par aspiration et
  le transport à sec des viscères, peaux et filets
  [arrêté du 27 février 2020, AIDA](https://aida.ineris.fr/reglementation/arrete-270220-relatif-meilleures-techniques-disponibles-mtd-applicables-a-certaines).
  Les usines de farines de poisson relèveraient des rubriques des sous-produits animaux (à confirmer).

**Rejets et redevance.** Les effluents sont chargés en sang, graisses et protéines, salés en plus
pour les saumures et le poisson. Pour un rejet au réseau collectif, les valeurs limites des abattoirs
déclarés sont de 600 mg/l de MES, 2 000 mg/l de DCO et 800 mg/l de DBO5 (arrêté du 30 avril 2004,
même source). La redevance pour pollution d'origine non domestique est assise sur les flux rejetés,
diminués de la pollution éliminée par épuration
[code de l'environnement, Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074220/LEGISCTA000006195228/),
[Agence de l'eau Seine-Normandie](https://www.eau-seine-normandie.fr/les-redevances/redevance-pollution-de-l-eau-d-origine-non-domestique) :
chaque litre de sang ou de saumure détourné de l'égout se lit deux fois, en traitement et en redevance.

**Réutilisation : ce que le droit permet.** Le décret n° 2024-33 a créé trois catégories : eaux
recyclées issues des matières premières, eaux de processus recyclées, eaux usées traitées recyclées
[Légifrance, 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414), complété par le
décret n° 2024-769 [Légifrance, 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908702)
et l'arrêté du 8 juillet 2024, qui fixe les exigences selon l'usage (contact direct, indirect, sans
contact) [Légifrance, 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908820). Les deux
premières catégories relèvent d'une déclaration, les eaux usées traitées d'une autorisation
préfectorale, avec dans tous les cas une intégration au plan de maîtrise sanitaire
[ministère de l'Agriculture, 2024](https://agriculture.gouv.fr/sobriete-en-eau-le-gouvernement-se-felicite-de-la-publication-du-decret-relatif-aux-eaux),
qui annonce 15 à 80 % d'économie d'eau potable selon les industries (même source). Dans la viande, la
matière première ne libère pas d'eau récupérable comme le lait : la réutilisation porte sur les eaux de
processus (refroidissement, derniers rinçages) et sur la sortie de station. Enfin, le décret
n° 2025-239 ouvre aux ICPE des eaux impropres à la consommation pour le lavage des sols intérieurs et
des surfaces extérieures
[AIDA, 2025](https://aida.ineris.fr/reglementation/decret-ndeg-2025-239-140325-relatif-a-lutilisation-deaux-impropres-a-consommation) ;
le lavage des véhicules n'y figure pas explicitement.

## 5. Leviers connus, par catégorie du plan d'action

Treize leviers. Quatre mesures transversales attendues (compteur par usage, audit eau, plan de gestion
et anticipation des restrictions, démarche collective) seront réutilisées telles quelles à l'étape 3
et ne sont pas reprises ; les leviers marqués « fusionnable » sont les premiers candidats au
regroupement pour tenir la cible de six à douze mesures.

### Sensibiliser et former (`sensibiliser_former`)

**L1. Former les équipes au nettoyage économe.** Raclage et ramassage à sec avant lavage, pistolets à
gâchette, arrêt des jets en continu, consignes par salle. Le levier vise le premier poste, le
nettoyage pesant 43 % de l'eau des IAA (ARIA Auvergne-Rhône-Alpes, 2024, même source), et le raclage
à sec avant lavage est déjà une obligation en enregistrement 2221 (arrêté du 23 mars 2012, même
source). Sous-populations : A, T, M. Titre proposé : « Former les équipes au nettoyage économe en eau ».

### Suivre, comprendre et maîtriser ses consommations (`suivre_comprendre_maitriser`)

**L2. Suivre un ratio d'eau par kilogramme de carcasse ou de produit fini, par atelier.** Sous-compteurs
sur l'échaudage, la boyauderie, la cuisson, la glace, le lavage des bacs et des camions. Le ratio a un
repère réglementaire en abattage (6 litres par kilogramme, arrêté du 30 avril 2004, même source) et
sert à démontrer une réduction de 20 % depuis 2018, cas d'exclusion de l'arrêté sécheresse (AIDA,
2023, même source). Le charcutier cité est passé de 13 à 10 litres par kilogramme, compteurs à relève
automatique compris, et économise 24 000 m3 par an (Agence de l'eau Loire-Bretagne, 2023, même
source). Sous-populations : A, T, M. Titre proposé : « Suivre le ratio d'eau par kilo produit, atelier
par atelier ».

### Améliorer l'efficacité hydrique de ses équipements (`ameliorer_efficacite_hydrique`)

**L3. Remplacer les stérilisateurs à couteaux à débordement.** Immersion à 75 °C pendant 15 secondes
ou 70 °C pendant 30 secondes, ou aspersion à 65 à 75 °C, d'efficacité équivalente au 82 °C selon un
protocole agréé par la DGAL ; l'aspersion rend possible une réduction des consommations d'eau
[IFIP, Idele et ADIV, 2013](https://ifip.asso.fr/actualites/nettoyage-et-desinfection-des-couteaux-quelles-methodes-alternatives/).
Gain chiffré non trouvé (à confirmer). Sous-populations : A, T (découpe). Titre proposé : « Remplacer
les stérilisateurs à couteaux à débordement ».

**L4. Fermer les circuits de refroidissement et supprimer les tours ouvertes.** Boucles fermées sur
les machines de conditionnement et les refroidisseurs de produits cuits, condenseurs adiabatiques à la
place des tours : 90 % d'eau en moins sur ce poste chez le charcutier cité (Agence de l'eau
Loire-Bretagne, 2023, même source), 25 % d'eau en moins sur le site en six ans avec l'ensemble du
programme [Les agences de l'eau, 2023](https://www.lesagencesdeleau.fr/ressources/comment-une-grande-usine-agro-alimentaire-peut-elle-economiser-leau).
Sous-populations : T et M surtout (cuisson), A pour le froid. Titre proposé : « Fermer les circuits de
refroidissement et remplacer les tours ouvertes ».

**L5. Laver bacs, caisses et crochets en machine à recyclage.** Laveuse automatique où l'eau de
rinçage d'un bac sert au prélavage du suivant : 90 % d'économie sur ce poste (Agence de l'eau
Loire-Bretagne, 2023, même source). Sous-populations : A, T, M. Fusionnable avec L8. Titre proposé :
« Laver bacs et caisses en machine à recyclage des rinçages ».

### Changer ses process ou pratiques (`changer_process_pratiques`)

**L6. Passer au nettoyage et au transport à sec des déchets.** Raclage, aspiration, convoyeurs pour
viscères, peaux, graisses et parures au lieu du transport hydraulique vers la grille. C'est une MTD
explicite pour le poisson (évidage par aspiration, transport à sec, arrêté du 27 février 2020, même
source) et une technique de nettoyage à sec retenue pour les grands abattoirs (arrêté du 31 mars 2025,
même source). Gain chiffré non trouvé (à confirmer). Sous-populations : M d'abord, A. Titre proposé :
« Supprimer le transport hydraulique des déchets et viscères ».

**L7. Décongeler sans eau courante.** Chambre de décongélation à air, recyclage de l'eau de
décongélation plutôt qu'immersion à eau perdue. Le levier est plausible mais son effet n'a pas pu être
sourcé (à confirmer : l'étude Ifremer de 1980 citée plus haut constate le défaut sans chiffrer
l'économie). Sous-populations : M, T. Titre proposé : « Décongeler les matières premières sans eau
courante ».

### Valoriser ou réutiliser les eaux non conventionnelles (`valoriser_reut_eaux_non_conventionnelles`)

**L8. Réutiliser les eaux de refroidissement et les derniers rinçages pour les usages sans contact.**
Prélavage, lavage des quais, des camions, des cages, préparation des réactifs, après filtration ; ce
sont des eaux de processus recyclées, sous régime déclaratif (décret n° 2024-33, même source). En
Bretagne, les entreprises agroalimentaires qui recyclent économisent en moyenne 60 000 m3 par an
[CCI Bretagne, Bretagne Économique, 2025](https://www.bretagne-economique.com/actualites/en-bretagne-les-industries-agro-ont-baisse-de-15-leur-consommation-deau/).
Sous-populations : A, T, M. Titre proposé : « Réutiliser les eaux de refroidissement et de rinçage
sans contact ».

**L9. Réutiliser les eaux usées traitées de la station du site.** Pour les abattoirs et gros ateliers
équipés d'une station : ultrafiltration, osmose, désinfection, sous autorisation préfectorale.
L'agence Loire-Bretagne annonce 30 à 90 % de réduction de consommation par la REUT en circuit interne
[Agence de l'eau Loire-Bretagne, 2024](https://agence.eau-loire-bretagne.fr/home/bassin-loire-bretagne/nos-dossiers-enjeux-et-actions/sobriete-en-eau-consommons-autrement/entreprises-et-industriels--quelles-actions-pour-la-sobriete.html) ;
en Bretagne, les filières lait, viande et légumes pourraient réduire leurs prélèvements de 20 à 25 %
et 45 % des entreprises agroalimentaires ont un projet de réutilisation
[Région Bretagne, Bretagne Circulaire, 2024](https://www.bretagnecirculaire.org/articles/h/les-industries-agroalimentaires-bretonnes-lancent-le-cap-vers-la-reut.html).
Sous-populations : A surtout, gros T. Titre proposé : « Recycler les eaux usées traitées de la
station du site ».

**L10. Utiliser l'eau de mer propre pour le lavage et la glace.** Pour les sites littoraux :
pompage, traitement, réseau séparé, arrêté préfectoral (code de la santé publique, article R1322-73,
même source). Effet chiffré non trouvé (à confirmer). Sous-population : M. Titre proposé :
« Utiliser l'eau de mer propre pour le lavage et la glace ».

### Agir sur ses rejets et la qualité de l'eau (`agir_rejets_qualite`)

**L11. Collecter à part le sang, les saumures et les coproduits.** Gouttière et cuve de saignée,
récupération des saumures usées et des jus de cuisson, bacs de rétention : la collecte séparée du sang
est une obligation (arrêtés du 30 avril 2004 et du 31 mars 2025, mêmes sources) et réduit l'assiette
de la redevance pollution (Légifrance, même source). La part du sang dans la charge polluante d'un
abattoir n'a pas été trouvée dans une source acceptée (à confirmer). Un valorisateur de coproduits de
la mer de Le Portel a obtenu l'aide de l'agence pour réduire sa pollution à la source et sa
consommation d'eau de 54 000 m3 par an
[Agence de l'eau Artois-Picardie, 2023](https://www.eau-artois-picardie.fr/mi-annee-2023-lagence-de-leau-deja-investi-398-millions-deuros-pour-ameliorer-la-qualite-de-leau-et).
Sous-populations : A (sang), T et M (saumures, jus). Titre proposé : « Collecter à part le sang, les
saumures et les jus de cuisson ».

**L12. Fiabiliser le prétraitement et la convention de rejet.** Dégrillage, tamisage, dégraissage,
flottation, bassin tampon, autosurveillance, convention de déversement à jour ; le prétraitement avec
dégrillage est obligatoire dès la déclaration (arrêté du 30 avril 2004, même source ; arrêté du
23 mars 2012, même source). Sous-populations : A, T, M. Titre proposé : « Fiabiliser le prétraitement
des effluents et la convention de rejet ».

### Agir sur le grand cycle de l'eau (`agir_grand_cycle`)

**L13. Faire reconnaître ses contraintes dans les instances locales de l'eau.** Comité sécheresse,
commission locale de l'eau, service d'eau potable, inspection : documenter les volumes incompressibles
(nettoyage sanitaire, abreuvement), les efforts réalisés et la lecture de l'exclusion « flux poussé »
de l'arrêté sécheresse (AIDA, 2023, même source). Sous-populations : A et M surtout. Fusionnable avec
la mesure transversale de démarche collective. Titre proposé : « Faire valoir les besoins du site dans
les instances locales de l'eau ».

## 6. Codes limites au sein du périmètre

**10.12Z, volaille (538 établissements).** Ratio le plus élevé (6,3 m3 de rejet par tonne de
carcasses contre 3,5 pour le porc, arrêté du 31 mars 2025, même source), réfrigération par immersion
possible (plafond de 10 litres par kilogramme), échaudage et plumaison à l'eau. Les leviers restent
ceux de l'abattage, avec un poids plus fort de L2 et L9.

**10.13A, préparations à base de viande (1 037 établissements).** Pas d'abattage, donc ni sang ni
échaudage : L3 et la partie sang de L11 ne s'appliquent qu'aux ateliers de découpe. Le profil est
dominé par la cuisson, le refroidissement, la décongélation et le lavage des bacs (cas Bahier), ce qui
rapproche ce code de la future famille des plats préparés. Le foie gras ajoute un abattage de palmipèdes
sur certains sites, à traiter comme la volaille.

**10.20Z, produits de la mer (751 établissements).** Le plus éloigné : eau de mer propre, glace,
effluents salés, sites littoraux, activités très variées (filetage, fumage, conserve, cuisson de
crustacés). Les usines de farines et huiles de poisson s'en écartent encore davantage (évaporation,
condensats, régime sous-produits animaux, à confirmer) et mériteraient une option « sans objet » sur
plusieurs questions.

**10.11Z, viande de boucherie (3 044 établissements).** Code mixte : abattoirs et nombreux ateliers de
découpe sans abattage (répartition non sourcée, à confirmer). La question d'entrée sur la
sous-population est indispensable, sinon un atelier de découpe recevra les mesures d'échaudage et de
sang.

## 7. Sources

| Organisme | Titre | Année | URL |
|---|---|---|---|
| AIDA, Ineris | Rubrique ICPE 2210, abattage d'animaux | en vigueur | https://aida.ineris.fr/reglementation/2210-abattage-danimaux-a-lexclusion-activites-classees-titre-rubrique-3641 |
| AIDA, Ineris | Arrêté du 30 avril 2004, prescriptions générales, rubrique 2210 en déclaration | 2004 | https://aida.ineris.fr/reglementation/arrete-300404-relatif-prescriptions-generales-applicables-installations-classees |
| AIDA, Ineris | Arrêté du 31 mars 2025, prescriptions générales, rubrique 3641 | 2025 | https://aida.ineris.fr/reglementation/arrete-310325-relatif-prescriptions-generales-applicables-installations-relevant |
| AIDA, Ineris (Commission européenne) | Décision 2023/2749, conclusions MTD abattoirs et sous-produits animaux | 2023 | https://aida.ineris.fr/reglementation/decision-ndeg-20232749-111223-etablissant-conclusions-meilleures-techniques |
| AIDA, Ineris | Rubrique ICPE 2221, produits alimentaires d'origine animale | en vigueur | https://aida.ineris.fr/reglementation/2221-preparation-conservation-produits-alimentaires-dorigine-animale |
| AIDA, Ineris | Arrêté du 23 mars 2012, rubrique 2221 en enregistrement | 2012 | https://aida.ineris.fr/reglementation/arrete-230312-relatif-prescriptions-generales-applicables-installations-relevant |
| AIDA, Ineris | Rubrique ICPE 3642 | en vigueur | https://aida.ineris.fr/reglementation/3642-traitement-transformation-matieres-premieres-vue-fabrication-produits |
| AIDA, Ineris | Arrêté du 27 février 2020, MTD de l'agroalimentaire (3642, 3643, 3710) | 2020 | https://aida.ineris.fr/reglementation/arrete-270220-relatif-meilleures-techniques-disponibles-mtd-applicables-a-certaines |
| AIDA, Ineris | Arrêté du 30 juin 2023, restrictions sécheresse des ICPE | 2023 | https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement |
| AIDA, Ineris | Décret n° 2025-239, eaux impropres à la consommation dans les ICPE | 2025 | https://aida.ineris.fr/reglementation/decret-ndeg-2025-239-140325-relatif-a-lutilisation-deaux-impropres-a-consommation |
| IFIP | Consommation d'eau et d'énergie en abattoir-découpe de porcs, huit outils | 2010 | https://ifip.asso.fr/documentations/32763-consommation-deau-et-denergie-en-abattoir-decoupe-de-porcs-caracterisation-des-situations-actuelles-dans-8-outils/ |
| IFIP, Idele, ADIV | Nettoyage et désinfection des couteaux : quelles méthodes alternatives ? | 2013 | https://ifip.asso.fr/actualites/nettoyage-et-desinfection-des-couteaux-quelles-methodes-alternatives/ |
| ADIV | Désinfection des couteaux : des alternatives à maîtriser | 2016 | https://www.adiv.fr/desinfection-couteaux-alternatives-a-maitriser/ |
| Interbev | Économiser les ressources | sans date | https://www.interbev.fr/enjeux-societaux/environnement-territoires/economiser-les-ressources/ |
| Ifremer | Décongélation industrielle du poisson (thèse, Han Ching) | 1980 | https://archimer.ifremer.fr/doc/00189/30062/ |
| ARIA Auvergne-Rhône-Alpes | Des solutions pour réduire les tensions sur l'eau dans l'agroalimentaire | 2024 | https://ariaaura.fr/des-solutions-pour-reduire-les-tensions-sur-leau-dans-lagroalimentaire/ |
| CCI Bretagne (Bretagne Économique), données ABEA | En Bretagne, les industries agro ont baissé de 15 % leur consommation d'eau | 2025 | https://www.bretagne-economique.com/actualites/en-bretagne-les-industries-agro-ont-baisse-de-15-leur-consommation-deau/ |
| Région Bretagne (Bretagne Circulaire) | Les industries agroalimentaires bretonnes lancent le cap vers la REUT | 2024 | https://www.bretagnecirculaire.org/articles/h/les-industries-agroalimentaires-bretonnes-lancent-le-cap-vers-la-reut.html |
| Agence de l'eau Loire-Bretagne | BAHIER : des actions d'économie d'eau | 2023 | https://www.eau-loire-bretagne.fr/sites/aides-redevances/home/retours-dexperiences/bahier--des-actions-deconomie-deau-1.html |
| Agence de l'eau Loire-Bretagne | Entreprises et industriels : quelles actions pour la sobriété | 2024 | https://agence.eau-loire-bretagne.fr/home/bassin-loire-bretagne/nos-dossiers-enjeux-et-actions/sobriete-en-eau-consommons-autrement/entreprises-et-industriels--quelles-actions-pour-la-sobriete.html |
| Les agences de l'eau | Comment une grande usine agroalimentaire peut-elle économiser l'eau ? | 2023 | https://www.lesagencesdeleau.fr/ressources/comment-une-grande-usine-agro-alimentaire-peut-elle-economiser-leau |
| Agence de l'eau Artois-Picardie | Bilan à mi-année 2023 des aides (cas COPALIS) | 2023 | https://www.eau-artois-picardie.fr/mi-annee-2023-lagence-de-leau-deja-investi-398-millions-deuros-pour-ameliorer-la-qualite-de-leau-et |
| Union du mareyage français | Guide de bonnes pratiques d'hygiène, alimentation en fluides (eau) | sans date | https://www.mareyeurs.org/site_GBPH/alimentation_en_fluides_eau_.html |
| Légifrance | Code de la santé publique, article R1322-73, eau de mer propre | en vigueur | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000042286068/ |
| Légifrance | Décret n° 2024-33 du 24 janvier 2024, eaux réutilisées dans le secteur alimentaire | 2024 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049010414 |
| Légifrance | Décret n° 2024-769 du 8 juillet 2024 | 2024 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908702 |
| Légifrance | Arrêté du 8 juillet 2024, eaux réutilisées dans le secteur alimentaire | 2024 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049908820 |
| Ministère de l'Agriculture | Publication du décret relatif aux eaux réutilisées dans les entreprises alimentaires | 2024 | https://agriculture.gouv.fr/sobriete-en-eau-le-gouvernement-se-felicite-de-la-publication-du-decret-relatif-aux-eaux |
| Assemblée nationale | Question écrite n° 12522 et réponse ministérielle | 2024 | https://questions.assemblee-nationale.fr/q16/16-12522QE.htm |
| Légifrance | Code de l'environnement, articles L213-10-1 à L213-10-3 | en vigueur | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074220/LEGISCTA000006195228/ |
| Agence de l'eau Seine-Normandie | Redevance pollution de l'eau d'origine non domestique | 2025 | https://www.eau-seine-normandie.fr/les-redevances/redevance-pollution-de-l-eau-d-origine-non-domestique |

Note sur les liens : les conclusions MTD de 2023 sont citées par leur transposition française
(arrêté du 31 mars 2025), EUR-Lex et le BREF complet (plus de 10 Mo) n'ayant pas pu être lus
directement. Les documents PDF de l'ADEME, de l'ABEA et du plan de sobriété hydrique n'ont pas pu être
extraits pendant la rédaction et ne sont pas cités.

### Ce qui n'a pas pu être sourcé

1. Tout ratio français de consommation en m3 par tonne pour les produits de la mer (filetage,
   décongélation, glace, conserve, farines).
2. Un ratio de branche pour la transformation de viande (10.13A) : seul le cas Bahier est chiffré.
3. La part du nettoyage dans un abattoir ou un atelier de découpe, et la part du sang dans la charge
   polluante.
4. Les gains chiffrés des alternatives au stérilisateur à 82 °C, du transport à sec, de la
   décongélation sans eau courante et de l'eau de mer propre.
5. La part des sites alimentés par forage, et la répartition des 10.11Z entre abattoirs et ateliers de
   découpe.
6. L'applicabilité de l'exclusion « flux poussé » de l'arrêté sécheresse aux abattoirs et à la
   charcuterie, qui relève d'une lecture de l'inspection.
