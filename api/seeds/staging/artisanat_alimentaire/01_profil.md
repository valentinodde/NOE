# Profil eau du secteur : artisanat alimentaire

Note de profil, étape 2 du skill `nouveau-secteur`. Statut : brouillon, à valider par un consultant.
Date de rédaction : 2026-10-15.

| Champ | Valeur |
|---|---|
| `sector_id` | `artisanat_alimentaire` |
| Libellé | Artisanat alimentaire |
| Préfixe des mesures | `ART` (`ACT_ART_001` et suivants) |
| Codes NAF | 10.13B, 10.71C, 10.71D (54 333 établissements, neuf sur dix de moins de dix salariés) |

Cette note prolonge `00_perimetre.md`. Elle distingue partout deux sous-populations, que le
questionnaire séparera par une question d'entrée : **(C) charcuterie** (10.13B : saumurage, cuisson des
jambons et pâtés, fumage, refroidissement des produits cuits, souvent une activité traiteur) et
**(B) boulangerie-pâtisserie** (10.71C et 10.71D : pétrissage, buée du four, refroidisseur d'eau, plonge,
froid et pousse contrôlée). Un usage propre à une seule sous-population porte sa lettre.

Avertissement de méthode : aucune source acceptée ne donne la consommation annuelle d'une boulangerie
ou d'une charcuterie artisanale en m3. Les seuls ordres de grandeur trouvés sont un ratio régional ancien
pour la charcuterie-salaison et des données de recette pour le pain. Les ratios de l'industrie de la
viande (`staging/industrie_viande/01_profil.md`) n'ont volontairement pas été transposés. Tout ce qui
n'est pas sourcé est au conditionnel avec la mention « à confirmer », et la fin de la note liste ce qui
manque.

## 1. Usages de l'eau, du plus gros au plus petit

L'ordre ci-dessous est une proposition de conception : aucune source ne ventile la consommation d'un
laboratoire artisanal par poste (à confirmer par les diagnostics CMA, voir levier L3).

**1. Le nettoyage du laboratoire et la plonge (C et B).** Chaque jour de production : sols, plans de
travail, bacs, ustensiles, moules, cuves, pétrins et batteurs, à la main ou au lave-batterie. Dans les
petits ateliers agroalimentaires, le nettoyage est présenté comme « le point crucial » de la maîtrise des
consommations, avec des séquences longues (prélavage, nettoyage, rinçage, désinfection, rinçage final)
[EPLEFPA du Tarn, plateforme GH2O, 2009](https://reseau-eau.educagri.fr/files/fichierRessource1_Gest_eau_effluents_Rodez_08_12_09.pdf).
C'est aussi la source des eaux grasses : les guides de la profession demandent de refroidir les eaux de
cuisson, de retirer les graisses solidifiées et d'enlever les restes avant lavage
[CGAD, 2023](https://www.cgad.fr/app/uploads/2023/06/guide-transition-ecologique-CGAD-avril-2023.pdf).
La charcuterie, plus grasse et souvent doublée d'une cuisine traiteur, pèserait davantage sur ce poste
que la boulangerie (à confirmer).

**2. L'eau ingrédient et l'eau de cuisson, qui diffèrent selon la sous-population.**
- (B) Pétrissage et buée. L'eau entre dans la pâte : un protocole de baguette de tradition utilise
  660 g d'eau pour 1 kg de farine, avec une température de pâte visée à 21 ou 22 °C qui oblige à
  refroidir l'eau, puis un coup de buée à l'enfournement
  [INRA, 2007](https://icmpg.hub.inrae.fr/Media/activite-fr/seminaires/cr-sem-2006-07/sem-fev-07-baguettes.pdf).
  Les sept boulangeries diagnostiquées pour l'INBP panifiaient de 300 à 1 400 quintaux de farine par an
  [INBP, 2007](https://www.inbp.com/wp-content/uploads/2020/03/2007-01-supplement-technique-inbp-boulangerie-patisserie-energie.pdf) :
  au taux d'hydratation précédent, l'eau incorporée dans le pain représenterait de l'ordre de 20 à 90 m3
  par an (calcul de la note à partir des deux sources, à confirmer). Ce volume est incompressible : il
  part dans le produit, pas à l'égout.
- (C) Saumure et cuisson. L'eau de la saumure doit être potable, les eaux de puits calcaires étant à
  éviter, et la cuisson du jambon se fait « en conditions humides, eau en marmite ou vapeur en four »
  [CNCT et IFIP, 2025](https://ifip.asso.fr/app/uploads/2025/04/faqjamboncuit_20250319.pdf). La même
  source décrit un refroidissement à l'air (une heure à température ambiante puis chambre froide) et non
  à l'eau courante. Une enquête auprès de très petites entreprises de Midi-Pyrénées donnait 8 litres
  d'eau par kilogramme de produit fini en charcuterie-salaison (EPLEFPA du Tarn, 2009, même source,
  citant l'ARPE) : c'est le seul ratio trouvé, ancien et régional, et rien ne dit qu'il vaut pour un
  charcutier de boutique (à confirmer).

**3. Le froid et le traitement de l'eau.** (B) Le refroidisseur d'eau de coulage peut consommer à lui
seul plus d'électricité que le pétrin, la diviseuse et la façonneuse réunis
[CNBPF et AG2R La Mondiale, 2024](https://boulangerie.org/wp-content/uploads/Guide_RSE_boulangerie-artisanale_web.pdf) :
c'est d'abord un poste d'énergie, mais s'il est refroidi par eau perdue, ou si les groupes des chambres
froides et des armoires de pousse le sont, il devient aussi un poste d'eau (part des équipements à eau
perdue dans le parc artisanal inconnue, à confirmer). (B surtout) Le traitement de l'eau : l'osmose
inverse, parfois présentée aux boulangers comme la solution idéale, ne restitue qu'environ 0,7 litre
pour 1 litre entré, d'où une surconsommation (INBP, 2007, même source). L'humidification des chambres
de pousse serait un petit poste supplémentaire (à confirmer). (C) Cellules de refroidissement et
chambres froides, avec la même question sur le mode de condensation.

**4. Les sanitaires, le lave-mains, la boutique et souvent le logement.** Petits postes en volume, mais
c'est là que se logent les fuites : un goutte-à-goutte gaspille jusqu'à 43 800 litres par an, un mince
filet d'eau 130 000 litres, une chasse d'eau qui fuit 220 000 litres, soit 188, 559 et 946 euros TTC au
prix moyen de 4,30 euros le m3 (CGAD, 2023, même source). L'hypothèse d'un compteur unique pour le
laboratoire, la boutique et le logement de l'artisan n'a trouvé aucune source (à confirmer) : si elle se
vérifie, elle empêche de distinguer ces usages sans sous-compteur.

## 2. Sources d'approvisionnement

Le réseau public d'eau potable est la source quasi exclusive, pour une raison réglementaire : l'hygiène
alimentaire impose un approvisionnement suffisant en eau potable, utilisée chaque fois qu'il faut éviter
la contamination des denrées, et toute eau non potable doit circuler dans un réseau séparé, sans
raccordement ni reflux possible vers l'eau potable
[Union européenne, règlement (CE) n° 852/2004, 2004](https://legislation.gov.uk/cy/eur/2004/852/annex/II/chapter/VII/adopted?view=plain).
Aucune statistique de branche sur la part réseau, forage ou puits n'a été trouvée. La mise en garde de
la CNCT et de l'IFIP contre les eaux de puits pour les saumures laisse penser que quelques charcutiers
ruraux en disposent (CNCT et IFIP, 2025, même source, à confirmer).

L'eau de pluie et le recyclage sont marginaux. La confédération du commerce alimentaire de détail juge
la réutilisation d'eau usée ou l'utilisation d'eau de pluie « quasi impossible » dans les entreprises
alimentaires, sauf pour les chasses d'eau et le lave-linge sous règles sanitaires strictes (CGAD, 2023,
même source). Le régime des eaux de pluie pour usages non domestiques exclut les usages alimentaires et
l'intérieur des établissements recevant du public pendant leurs heures d'ouverture, ce qui vise la
boutique
[AIDA, décret n° 2023-835, 2023](https://aida.ineris.fr/reglementation/decret-ndeg-2023-835-290823-relatif-usages-conditions-dutilisation-eaux-pluie-eaux).

## 3. Dépendances critiques

**Sans eau potable, le laboratoire s'arrête.** Lave-mains, nettoyage, saumure, pétrissage : aucun de ces
usages n'a de substitut autorisé (règlement 852/2004, même source). Le risque n'est pas théorique : en
2022, plus de 700 communes ont été privées d'eau potable
[Assemblée nationale, 2023](https://questions.assemblee-nationale.fr/dyn/16/questions/QANR5L16QG633.pdf).
Comment un artisan peut continuer à produire dans une commune ravitaillée par citernes ou bouteilles n'a
pas été documenté (à confirmer avec la DDPP et le service d'eau).

**Ce que change un arrêté sécheresse pour un artisan raccordé au réseau.** Les restrictions s'appliquent
par usage. Le guide national de 2023 interdit dès l'alerte le nettoyage des façades, trottoirs et
surfaces imperméabilisées, sauf par une collectivité ou une entreprise de nettoyage professionnel,
encadre le lavage des véhicules, et au niveau crise n'autorise plus que les usages prioritaires : santé,
sécurité civile, eau potable, salubrité
[Ministère de la Transition écologique, 2023](https://www.territoire-de-belfort.gouv.fr/contenu/telechargement/30720/251659/file/MM23087_Synthese_usages%20eau%20secheresse_BATweb.pdf).
Concrètement, l'artisan est touché sur le lavage de sa devanture, de son trottoir et de son véhicule de
livraison, pas sur sa production : aucune des dix mesures du guide ne vise la fabrication alimentaire
(même source). La qualification de la production alimentaire au niveau crise relève de l'arrêté-cadre de
chaque département (à vérifier). L'arrêté sur les restrictions des installations classées ne concerne
pas ce secteur : il vise les installations en autorisation ou enregistrement prélevant plus de
10 000 m3 par an
[AIDA, arrêté du 30 juin 2023](https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement).

**Différences entre sous-populations (raisonnement de conception, à confirmer).** (B) La boulangerie
produit chaque nuit pour vendre le matin : une coupure, même de quelques heures, se traduit
immédiatement par une perte de vente, et l'eau de pétrissage ne se reporte pas. (C) La charcuterie a un
peu plus de marge, parce qu'une partie des fabrications se décale de quelques jours, mais une cuisson
et son refroidissement ne s'interrompent pas. Dans les deux cas, un équipement de froid refroidi par
eau s'arrêterait avec l'eau, au risque de perdre le stock.

## 4. Risques et contraintes réglementaires

**Eau au contact des denrées.** Eau potable obligatoire et réseau séparé pour toute eau non potable
(règlement 852/2004, même source). Depuis 2024, la réutilisation d'eau dans les entreprises alimentaires
relève d'une déclaration ou d'une autorisation préfectorale selon la nature de l'eau, et l'exploitant
doit en démontrer la maîtrise dans son plan de maîtrise sanitaire
[Ministère de l'Agriculture, 2024](https://agriculture.gouv.fr/sobriete-en-eau-le-gouvernement-se-felicite-de-la-publication-du-decret-relatif-aux-eaux).
Pour une entreprise de une à dix personnes, cette démarche paraît hors de portée (à confirmer).

**Rejets au réseau : un statut qui dépend de la collectivité.** Tout déversement d'eaux usées autres que
domestiques dans le réseau public doit être préalablement autorisé par le maire ou le président de
l'intercommunalité. L'autorisation fixe sa durée, les caractéristiques des eaux et leur surveillance, et
un silence de quatre mois vaut refus
[Légifrance, code de la santé publique, article L1331-10](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000023245101).
Les établissements dont les eaux usées sont « assimilables à un usage domestique » ont au contraire un
droit au raccordement, mais la collectivité peut leur imposer des prescriptions techniques selon les
risques de l'activité
[Légifrance, code de la santé publique, article L1331-7-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029737268).
La liste nationale des activités assimilées cite le commerce de détail et la restauration, y compris
les plats à emporter, mais pas nommément la fabrication artisanale de pain ou de charcuterie
[AIDA, arrêté du 21 décembre 2007](https://aida.ineris.fr/reglementation/arrete-211207-relatif-modalites-detablissement-redevances-pollution-leau).
Les lectures locales divergent donc :
- la CMA Grand Est considère les métiers de bouche comme assimilés domestiques, sans autorisation à
  demander, mais avec obligation de signaler le raccordement, et note que de plus en plus de règlements
  d'assainissement imposent un bac à graisses
  [CMA Grand Est (CNIDEP), 2021](https://cma-grandest.fr/wp-content/uploads/2021/12/F217-Graisses-me%CC%81tiers-de-bouche.pdf) ;
- Paris range les charcutiers et traiteurs parmi les assimilés domestiques mais exige une déclaration et
  une autorisation de déversement préalable, avec contrat d'entretien du séparateur à graisses
  [Ville de Paris, 2026](https://www.paris.fr/pages/evacuation-des-eaux-usees-non-domestiques-3547) ;
- Grand Poitiers impose un prétraitement à tous les métiers de bouche après étude diagnostique, un
  entretien au moins trois fois par an pour un bac classique et quotidien pour un bac sous évier, par
  une entreprise agréée, interdit les additifs qui diluent les graisses, et peut doubler la redevance
  d'assainissement en cas de branchement non conforme
  [Grand Poitiers, 2021](https://www.grandpoitiers.fr/fileadmin/M%C3%A9dias_par_groupes_de_contributeurs/Economie_emploi_et_entreprises/04-eau_biodiversit%C3%A9/GP_rejet_eau_annexe_preco_tec_m%C3%A9tiers_de_bouche.pdf).

Dans tous les cas, il est interdit de rejeter au réseau un liquide susceptible de le boucher ou de
perturber la station d'épuration, et les huiles de friture partent par un prestataire (CGAD, 2023, même
source). Les graisses animales figées colmatent et corrodent les canalisations (CMA Grand Est, 2021,
même source) : l'enjeu est plus fort en (C) qu'en (B).

**Installations classées.** La préparation de produits d'origine animale relève de la rubrique 2221 au
delà de 500 kg de produits entrants par jour
[AIDA, rubrique 2221](https://aida.ineris.fr/reglementation/2221-preparation-conservation-produits-alimentaires-dorigine-animale) :
la plupart des charcutiers de boutique resteraient sous ce seuil, mais les 277 établissements de 10.13B
de dix salariés et plus (note de périmètre) pourraient le franchir (à confirmer). La situation des
boulangeries au regard des rubriques ICPE n'a pas été vérifiée (à confirmer).

## 5. Leviers connus, par catégorie du plan d'action

Douze leviers. Trois recoupent des mesures transversales attendues (audit, eau de pluie, démarche
collective) et seront réutilisés tels quels à l'étape 3. La mesure transversale d'anticipation des
restrictions et des coupures sera aussi à relier à la section 3. Les investissements ne sont presque
jamais chiffrés par les sources retenues : quand rien n'est indiqué, c'est qu'aucun chiffre n'a été
trouvé.

### Sensibiliser et former (`sensibiliser_former`)

**L1. Former l'équipe aux gestes économes au laboratoire et à la plonge.** Ne pas laisser couler,
remplir un bac plutôt que rincer sous le robinet, signaler les fuites, afficher les éco-gestes, comme le
recommandent la confédération du commerce alimentaire (CGAD, 2023, même source) et celle de la
boulangerie (CNBPF et AG2R La Mondiale, 2024, même source). Effet attendu : dans les petits ateliers
agroalimentaires, 15 à 40 % du volume d'eau serait « facilement économisable » (EPLEFPA du Tarn, 2009,
même source). Pour : C et B, apprentis compris. Investissement : temps interne. Titre proposé :
« Former l'équipe aux gestes économes en eau au laboratoire ».

### Suivre, comprendre et maîtriser ses consommations (`suivre_comprendre_maitriser`)

**L2. Relever son compteur et traquer les fuites.** Relevé le soir puis le matin sans aucun puisage pour
détecter une fuite
[Agence de l'eau Artois-Picardie, 2021](https://www.eau-artois-picardie.fr/eco-gestes-comment-economiser-leau),
relevé hebdomadaire noté, détecteur de fuite (CGAD, 2023, même source), sous-compteur pour séparer le
laboratoire du logement si le compteur est commun (à confirmer). Effet : les fuites chiffrées en
section 1, de 188 à 946 euros par an chacune (CGAD, 2023, même source). Le charcutier peut se comparer
au repère de 8 litres par kilogramme (EPLEFPA du Tarn, 2009, même source). Pour : C et B.
Investissement d'un sous-compteur non chiffré. Titre proposé : « Relever son compteur chaque semaine et
réparer les fuites sans délai ».

**L3. Faire réaliser un diagnostic eau par la chambre de métiers (transversal, audit).** Visite de quatre
heures au plus sur le site, diagnostic par poste et plan d'actions visant au moins 20 % d'économie, avec
suivi à un an
[CMA Auvergne-Rhône-Alpes, 2024](https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/),
gratuit grâce aux agences de l'eau Rhône Méditerranée Corse et Loire-Bretagne, les métiers de bouche
étant explicitement visés
[CMA Auvergne-Rhône-Alpes, 2025](https://www.cma-auvergnerhonealpes.fr/actualites/reduisez-vos-factures-deau-avec-la-cma/).
Le guide de la boulangerie recommande ce diagnostic des flux comme première étape (CNBPF et AG2R La
Mondiale, 2024, même source). Pour : C et B. Investissement : 0 euro en Auvergne-Rhône-Alpes, la
disponibilité dans les autres régions étant à confirmer. Titre proposé : « Faire réaliser un diagnostic
eau du laboratoire par sa chambre de métiers ».

### Améliorer l'efficacité hydrique de ses équipements (`ameliorer_efficacite_hydrique`)

**L4. Équiper les points d'eau.** Mousseurs sur les robinets, douchette de prélavage à gâchette à la
plonge, chasses d'eau à double commande d'au plus 6 litres (CGAD, 2023, même source). Un mousseur
réduit le débit de 30 à 50 % sans perte de pression (Agence de l'eau Artois-Picardie, 2021, même
source, et [Eaufrance, sans date](https://www.services.eaufrance.fr/economie-d-eau)). Pour : C et B,
premier geste pour les plus petites entreprises. Investissement non chiffré par une source acceptée,
réputé faible (à confirmer). Titre proposé : « Équiper robinets et plonge de réducteurs de débit ».

**L5. Supprimer le refroidissement à eau perdue.** Vérifier si le refroidisseur d'eau, les groupes des
chambres froides, des armoires de pousse ou des cellules sont condensés par eau du réseau rejetée à
l'égout, et passer à une condensation à air ou à une boucle fermée lors du renouvellement. Le principe
est déjà une règle pour les ateliers de produits animaux soumis à enregistrement : « La réfrigération en
circuit ouvert est interdite »
[AIDA, arrêté du 23 mars 2012](https://aida.ineris.fr/reglementation/arrete-230312-relatif-prescriptions-generales-applicables-installations-relevant).
Aucun gain n'a été trouvé pour un équipement artisanal, et la fréquence de ces installations dans le
secteur est inconnue (à confirmer). Pour : B (refroidisseur, pousse) et C (cellules). Investissement
non chiffré. Titre proposé : « Remplacer les équipements de froid refroidis à eau perdue ».

**L6. Limiter l'osmose inverse aux usages qui l'exigent.** Faire vérifier la dureté de l'eau auprès du
distributeur, préférer un adoucisseur pour l'eau chaude et la buée si l'eau est dure, et ne pas traiter
par osmose toute l'eau du fournil, l'osmoseur rejetant environ 30 % de l'eau entrée (INBP, 2007, même
source). Effet chiffré sur la facture non trouvé. Pour : B surtout. Titre proposé : « Limiter le
traitement par osmose inverse aux usages qui l'exigent ».

### Changer ses process ou pratiques (`changer_process_pratiques`)

**L7. Nettoyer à sec avant tout lavage.** Racler les graisses et les restes, balayer ou aspirer la
farine, vider les siphons de sol dans la poubelle avant de laver (Grand Poitiers, 2021, même source),
laisser figer les eaux de cuisson et retirer les graisses avant l'évier (CGAD, 2023, même source). Le
guide de la boulangerie recommande déjà un aspirateur adapté aux poussières de farine pour la santé des
salariés (CNBPF et AG2R La Mondiale, 2024, même source). Effet : moins d'eau de lavage et moins de
graisses au bac, gain non chiffré. Pour : C (graisses) et B (farine). Titre proposé : « Passer au
nettoyage à sec avant tout lavage à l'eau ».

**L8. Refroidir les produits cuits sans eau courante.** Ne pas refroidir jambons, pâtés ou bouillons sous
un filet d'eau : la méthode décrite par la profession est une courte phase à l'air puis la chambre
froide ou une armoire de refroidissement rapide, avec un objectif de 10 °C à cœur en 10 heures (CNCT et
IFIP, 2025, même source). La fréquence du refroidissement à l'eau courante chez les artisans n'est pas
documentée (à confirmer), donc le levier ne vaut que si la pratique existe. Pour : C. Investissement :
nul si la chambre froide suffit, celui d'une cellule sinon (non chiffré). Titre proposé : « Refroidir
les produits cuits en chambre froide plutôt qu'à l'eau courante ».

### Valoriser ou réutiliser les eaux non conventionnelles (`valoriser_reut_eaux_non_conventionnelles`)

**L9. Récupérer l'eau de pluie pour les usages sans contact alimentaire (transversal).** Cuve pour le
lavage du véhicule de livraison ou des extérieurs, éventuellement les chasses d'eau hors de l'espace de
vente. Le champ est étroit : usages alimentaires exclus, intérieur de la boutique exclu pendant les
heures d'ouverture (AIDA, décret n° 2023-835, même source), réutilisation « quasi impossible » dans
une entreprise alimentaire (CGAD, 2023, même source), et peu de toiture en centre-ville (à confirmer).
Gain non chiffré. Pour : artisans disposant d'une toiture et d'un véhicule, plutôt en zone rurale.
Titre proposé : « Récupérer l'eau de pluie pour les usages extérieurs ».

### Agir sur ses rejets et la qualité de l'eau (`agir_rejets_qualite`)

**L10. Installer et entretenir un séparateur à graisses adapté.** Faire dimensionner le bac par le
conseiller environnement de la CMA, qui étudie aussi les aides à l'investissement (CMA Grand Est, 2021,
même source), signer un contrat de vidange, tenir le planning d'entretien, sans additif ni biocide
(Grand Poitiers, 2021, même source). Effet : protège le branchement et le réseau du colmatage, évite
les pénalités du règlement d'assainissement. Pour : C en priorité, B selon le règlement local. Coût
d'achat et de vidange non chiffré par une source acceptée (à confirmer). Titre proposé : « Installer et
entretenir un séparateur à graisses adapté au laboratoire ».

**L11. Déclarer son rejet et régulariser l'autorisation de déversement.** Se renseigner auprès du
service d'assainissement sur son statut (assimilé domestique ou non), déclarer le raccordement,
demander l'autorisation ou signer la convention quand le règlement l'exige (articles L1331-7-1 et
L1331-10, mêmes sources, et Ville de Paris, 2026, même source), confier huiles et produits usagés à un
collecteur, doser les produits d'entretien et préférer des produits écolabellisés (CGAD, 2023, même
source). Effet : conformité, pas d'économie d'eau. Pour : C et B. Investissement : démarche
administrative. Titre proposé : « Déclarer son rejet et obtenir l'autorisation de déversement ».

### Agir sur le grand cycle de l'eau (`agir_grand_cycle`)

**L12. Rejoindre une démarche collective de territoire (transversal).** Éco-défis des chambres de
métiers (une boulangerie vendéenne citée par la profession a reçu deux fois le trophée éco-défi de sa
CMA, CNBPF et AG2R La Mondiale, 2024, même source), opérations portées par une CMA et une agence de
l'eau (CMA Auvergne-Rhône-Alpes, 2025, même source), relais des campagnes d'économie d'eau auprès de la
clientèle. Effet indirect, non chiffré. Pour : C et B. Titre proposé : « Rejoindre une démarche
collective d'économie d'eau de sa chambre de métiers ».

## 6. Codes limites au sein du périmètre

**10.13B, charcuterie (3 076 établissements).** Code le plus hétérogène : beaucoup d'entreprises sont
charcutiers-traiteurs, avec une cuisine, des légumes à laver et une plonge proches de la restauration,
ce qui renforce L1, L7 et L10. Les 274 établissements de 10 à 49 salariés et les 3 de 50 et plus (note
de périmètre) s'approchent de l'atelier semi-industriel : rubrique 2221 possible, salaisons sèches,
fumoir, et des ratios qui relèveraient plutôt de `industrie_viande` (à confirmer cas par cas).

**10.71C, boulangerie et boulangerie-pâtisserie (41 764 établissements).** Profil central de (B). Deux
écarts : les points de vente qui ajoutent snacking ou restauration sur place, plus proches de la
restauration pour la plonge, et les 25 sites de 50 salariés et plus (note de périmètre), qui sortent du
modèle « un laboratoire, une boutique ».

**10.71D, pâtisserie (9 493 établissements).** Peu ou pas de pétrissage de pain ni de buée, donc un poste
« eau ingrédient » faible et un refroidisseur d'eau moins fréquent (à confirmer). En revanche, plonge
abondante (crèmes, chocolat, moules) et froid important. L5 et L6 y sont moins pertinents, L1, L4 et L7
davantage. Les pâtissiers-traiteurs et glaciers s'approchent de 10.13B pour les rejets gras.

## 7. Sources

| Organisme | Titre | Année | URL |
|---|---|---|---|
| CGAD | Transition écologique dans les métiers de bouche | 2023 | https://www.cgad.fr/app/uploads/2023/06/guide-transition-ecologique-CGAD-avril-2023.pdf |
| CNBPF et AG2R La Mondiale | Guide des bonnes pratiques RSE à destination des artisans boulangers-pâtissiers | 2024 | https://boulangerie.org/wp-content/uploads/Guide_RSE_boulangerie-artisanale_web.pdf |
| INBP | Supplément technique n° 88, spécial énergie | 2007 | https://www.inbp.com/wp-content/uploads/2020/03/2007-01-supplement-technique-inbp-boulangerie-patisserie-energie.pdf |
| INRA | Séminaire de gastronomie moléculaire n° 62, la qualité de l'eau | 2007 | https://icmpg.hub.inrae.fr/Media/activite-fr/seminaires/cr-sem-2006-07/sem-fev-07-baguettes.pdf |
| CNCT et IFIP | Groupe de travail jambon cuit, foire aux questions | 2025 | https://ifip.asso.fr/app/uploads/2025/04/faqjamboncuit_20250319.pdf |
| EPLEFPA du Tarn, plateforme technologique GH2O | Ateliers technologiques de transformation : gestion de l'eau et des effluents | 2009 | https://reseau-eau.educagri.fr/files/fichierRessource1_Gest_eau_effluents_Rodez_08_12_09.pdf |
| CMA Grand Est (CNIDEP) | Les graisses dans les métiers de bouche | 2021 | https://cma-grandest.fr/wp-content/uploads/2021/12/F217-Graisses-me%CC%81tiers-de-bouche.pdf |
| CMA Auvergne-Rhône-Alpes | Réaliser le bilan de vos consommations d'eau | 2024 | https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/ |
| CMA Auvergne-Rhône-Alpes | Réduisez vos factures d'eau avec la CMA | 2025 | https://www.cma-auvergnerhonealpes.fr/actualites/reduisez-vos-factures-deau-avec-la-cma/ |
| Agence de l'eau Artois-Picardie | Éco-gestes : comment économiser l'eau ? | 2021 | https://www.eau-artois-picardie.fr/eco-gestes-comment-economiser-leau |
| Eaufrance (services) | Comment économiser son eau | sans date | https://www.services.eaufrance.fr/economie-d-eau |
| Ministère de la Transition écologique (relayé par la préfecture du Territoire de Belfort) | Synthèse : mise en œuvre des mesures de restriction des usages de l'eau en période de sécheresse | 2023 | https://www.territoire-de-belfort.gouv.fr/contenu/telechargement/30720/251659/file/MM23087_Synthese_usages%20eau%20secheresse_BATweb.pdf |
| Assemblée nationale | Question au Gouvernement n° 633, anticipation de la sécheresse | 2023 | https://questions.assemblee-nationale.fr/dyn/16/questions/QANR5L16QG633.pdf |
| AIDA, Ineris | Arrêté du 30 juin 2023, restrictions sécheresse des ICPE | 2023 | https://aida.ineris.fr/reglementation/arrete-300623-relatif-mesures-restriction-periode-secheresse-portant-prelevement |
| Union européenne (texte adopté, legislation.gov.uk) | Règlement (CE) n° 852/2004, annexe II, chapitre VII, alimentation en eau | 2004 | https://legislation.gov.uk/cy/eur/2004/852/annex/II/chapter/VII/adopted?view=plain |
| Ministère de l'Agriculture | Publication du décret relatif aux eaux réutilisées dans les entreprises alimentaires | 2024 | https://agriculture.gouv.fr/sobriete-en-eau-le-gouvernement-se-felicite-de-la-publication-du-decret-relatif-aux-eaux |
| AIDA, Ineris | Décret n° 2023-835 du 29 août 2023, eaux de pluie et eaux usées traitées | 2023 | https://aida.ineris.fr/reglementation/decret-ndeg-2023-835-290823-relatif-usages-conditions-dutilisation-eaux-pluie-eaux |
| Légifrance | Code de la santé publique, article L1331-10 | en vigueur | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000023245101 |
| Légifrance | Code de la santé publique, article L1331-7-1 | en vigueur | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029737268 |
| AIDA, Ineris | Arrêté du 21 décembre 2007, annexe I, activités assimilables à un usage domestique | en vigueur | https://aida.ineris.fr/reglementation/arrete-211207-relatif-modalites-detablissement-redevances-pollution-leau |
| AIDA, Ineris | Rubrique ICPE 2221 | en vigueur | https://aida.ineris.fr/reglementation/2221-preparation-conservation-produits-alimentaires-dorigine-animale |
| AIDA, Ineris | Arrêté du 23 mars 2012, rubrique 2221 en enregistrement (article 26) | 2012 | https://aida.ineris.fr/reglementation/arrete-230312-relatif-prescriptions-generales-applicables-installations-relevant |
| Ville de Paris (service d'assainissement) | Évacuation des eaux usées non domestiques | 2026 | https://www.paris.fr/pages/evacuation-des-eaux-usees-non-domestiques-3547 |
| Grand Poitiers (service d'assainissement) | Métiers de bouche, annexe : prescriptions techniques | 2021 | https://www.grandpoitiers.fr/fileadmin/M%C3%A9dias_par_groupes_de_contributeurs/Economie_emploi_et_entreprises/04-eau_biodiversit%C3%A9/GP_rejet_eau_annexe_preco_tec_m%C3%A9tiers_de_bouche.pdf |

Note sur les sources : les deux règlements d'assainissement locaux (Paris, Grand Poitiers) sont cités
comme exemples de prescriptions, pas comme règle générale. Le ratio de 8 litres par kilogramme vient
d'une enquête de l'ARPE Midi-Pyrénées reprise dans une présentation de l'enseignement agricole public,
l'enquête d'origine n'a pas été lue. Les pages du CNIDEP (CMA Grand Est) sur la consommation d'eau des
entreprises artisanales et le recueil des aides de l'agence Rhône Méditerranée Corse n'ont pas pu être
lus pendant la rédaction et ne sont pas cités. Une plaquette d'association de commerçants donnant une
consommation annuelle par type de commerce a été écartée (source non retenue par le guide).

### Ce qui n'a pas pu être sourcé

1. La consommation annuelle d'une boulangerie, d'une pâtisserie ou d'une charcuterie artisanale (m3 par
   an, litres par jour), et sa répartition entre nettoyage, produit, froid et sanitaires.
2. Un ratio récent et national pour la charcuterie de boutique (seul le 8 litres par kilogramme régional
   de 2009 existe) et tout ratio de consommation totale par quintal de farine pour la boulangerie.
3. La part des équipements de froid et des refroidisseurs d'eau condensés par eau perdue, et le gain de
   leur remplacement, ainsi que l'existence du refroidissement des produits cuits à l'eau courante chez
   les charcutiers.
4. Le coût d'achat, de pose et de vidange d'un séparateur à graisses, et le coût des équipements
   hydro-économes (mousseurs, douchettes).
5. La part des artisans alimentés par un puits ou un forage, et l'hypothèse du compteur unique
   laboratoire, boutique et logement.
6. Le statut ICPE des boulangeries, et la lecture départementale des arrêtés-cadres sécheresse pour la
   fabrication alimentaire au niveau crise.
