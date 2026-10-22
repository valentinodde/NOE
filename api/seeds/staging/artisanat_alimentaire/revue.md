# Revue du référentiel : Artisanat alimentaire

Document assemblé automatiquement depuis le staging. Tout est en statut brouillon tant que la promotion n'a pas eu lieu.

## Périmètre

- Secteur : `artisanat_alimentaire` (Artisanat alimentaire)
- Codes NAF (3) : 10.13B, 10.71C, 10.71D

## Profil eau du secteur

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

## Questions

### 1. Comment suivez-vous aujourd'hui la consommation d'eau de votre entreprise ?

`art_q01` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Je m'en remets à la facture du service d'eau | `facture` | 0 | 0 | comptage |
| Je relève le compteur de temps en temps | `releve_occasionnel` | 1 | 1 | comptage |
| Je relève le compteur chaque semaine et je compare | `releve_hebdo` | 2 | 2 |  |
| Relevé chaque semaine et contrôle des fuites le soir et le matin | `releve_et_fuites` | 3 | 3 |  |

### 2. Votre compteur d'eau dessert-il aussi votre logement ou un autre local ?

`art_q02` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Oui, un seul compteur pour l'entreprise et le logement | `compteur_partage` | 1 | 1 | comptage |
| Non, il ne dessert que l'entreprise | `compteur_propre` | 2 | 2 |  |
| Oui, mais le laboratoire a son propre sous-compteur | `sous_compteur_labo` | 3 | 3 |  |

### 3. Avez-vous fait réaliser un diagnostic eau de votre laboratoire, par exemple par votre chambre de métiers ?

`art_q03` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, jamais | `jamais` | 0 | 0 | audit |
| Non, mais nous l'envisageons | `envisage` | 0 | 2 | audit |
| Oui, il y a plus de cinq ans | `ancien` | 1 | 1 | audit |
| Oui, depuis moins de cinq ans, et nous avons suivi ses conseils | `recent` | 3 | 3 |  |

### 4. Avant de laver sols, plans de travail et ustensiles, que retirez-vous à sec ?

`art_q04` · single_choice · Laboratoire & nettoyage

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Rien : nous lavons directement au jet ou à grande eau | `jet_direct` | 0 | 0 | nettoyage |
| Nous raclons ou aspirons quand nous y pensons | `parfois` | 1 | 1 | nettoyage |
| Graisses raclées, farine aspirée et siphons vidés à chaque fois | `systematique` | 2 | 2 |  |
| Systématique, avec une consigne affichée et suivie par tous | `systematique_consigne` | 3 | 3 |  |

### 5. Comment l'équipe lave-t-elle bacs, moules et ustensiles à la plonge ?

`art_q05` · single_choice · Laboratoire & nettoyage

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Sous l'eau courante, robinet ouvert pendant le lavage | `eau_courante` | 0 | 0 | gestes |
| Chacun fait à sa façon, rien n'a été expliqué | `variable` | 1 | 1 | gestes |
| Dans un bac rempli, les gestes sont montrés aux nouveaux | `bac` | 2 | 2 |  |
| Au bac ou au lave-batterie, gestes montrés à tous et rappelés | `bac_forme` | 3 | 3 |  |

### 6. Vos robinets et votre plonge sont-ils équipés pour limiter le débit d'eau ?

`art_q06` · single_choice · Laboratoire & nettoyage

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, robinetterie d'origine | `aucun` | 0 | 0 | equipements |
| Quelques mousseurs, pas de douchette à gâchette à la plonge | `partiel` | 1 | 2 | equipements |
| Mousseurs partout et douchette de prélavage à gâchette | `complet` | 2 | 2 |  |
| Tout est équipé et les débits sont vérifiés chaque année | `complet_controle` | 3 | 3 |  |

### 7. Vos équipements de froid ou votre refroidisseur d'eau sont-ils refroidis par de l'eau rejetée à l'égout ?

`art_q07` · single_choice · Laboratoire & nettoyage

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Oui, au moins un équipement fonctionne à eau perdue | `eau_perdue` | 0 | 1 | froid |
| Nous ne l'avons jamais vérifié | `jamais_verifie` | 0 | 0 | froid |
| Non, vérifié : tout est refroidi par air ou en boucle fermée | `sans_eau_perdue` | 3 | 3 |  |

### 8. Les eaux de votre laboratoire passent-elles par un séparateur à graisses ?

`art_q08` · single_choice · Eaux usées

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, pas de séparateur à graisses | `aucun` | 0 | 0 | rejets |
| Oui, vidé quand il déborde ou sent mauvais | `sans_entretien` | 1 | 1 | rejets |
| Non, le service d'assainissement ne l'exige pas pour notre activité | `non_exige` | 2 | 2 |  |
| Oui, avec un contrat de vidange régulier | `contrat` | 2 | 2 |  |
| Oui, contrat de vidange et planning d'entretien tenu à jour | `contrat_suivi` | 3 | 3 |  |

### 9. Avez-vous fait le point avec le service d'assainissement sur le rejet de vos eaux usées ?

`art_q09` · single_choice · Eaux usées

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, je ne sais pas ce que le règlement demande | `jamais` | 0 | 0 | rejets |
| Je me suis renseigné, la démarche reste à faire | `renseigne` | 1 | 2 | rejets |
| Oui, le service m'a confirmé qu'aucune autorisation n'est exigée | `pas_exige` | 3 | 3 |  |
| Oui, autorisation ou convention de déversement obtenue | `autorisation` | 3 | 3 |  |

### 10. Lavez-vous un véhicule de livraison ou une cour, un quai, une devanture ?

`art_q10` · single_choice · Usages extérieurs

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Oui, à l'eau du réseau | `reseau` | 0 | 0 | exterieurs |
| Oui, mais le véhicule passe en station de lavage | `station` | 2 | 2 |  |
| Oui, avec de l'eau de pluie récupérée | `eau_pluie` | 3 | 3 |  |
| Non, ni véhicule ni surface extérieure à laver | `non_concerne` | 2 | 2 |  |

### 11. Savez-vous comment vous continueriez à produire en cas de coupure d'eau ou de restrictions ?

`art_q11` · single_choice · Gouvernance & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Nous n'y avons jamais pensé | `jamais_pense` | 0 | 0 | anticipation |
| Nous suivons les alertes de la commune, sans rien avoir prévu | `informe` | 1 | 2 | anticipation |
| Nous savons ce que nous arrêterions et qui prévenir | `consignes` | 2 | 2 |  |
| Un plan écrit, connu de l'équipe, avec le contact du service d'eau | `plan_ecrit` | 3 | 3 |  |

### 12. Participez-vous à une démarche collective sur l'eau, comme les éco-défis de votre chambre de métiers ?

`art_q12` · single_choice · Gouvernance & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non | `non` | 0 | 0 |  |
| Nous en connaissons une, sans y participer | `informe` | 1 | 2 | collectif |
| Oui, nous y participons | `participe` | 2 | 2 |  |
| Oui, nous y tenons un rôle actif (témoignage, animation) | `moteur` | 3 | 3 |  |

## Filtres du plan d'action

| Filtre | Règle | Type | Effet | Priorité | Mesures |
|---|---|---|---|---|---|
| `f_suivi_facture` | Consommation suivie à la facture ou par relevés occasionnels : relever chaque semaine et traquer les fuites | answer | add | 1 | ACT_ART_002 |
| `f_compteur_partage` | Compteur commun à l'entreprise et au logement : poser un sous-compteur sur le laboratoire pour suivre la production seule | answer | add | 1 | ACT_AGR_001 |
| `f_pas_audit` | Pas de diagnostic, diagnostic seulement envisagé ou de plus de cinq ans : recommander le diagnostic | answer | add | 1 | ACT_AGR_002 |
| `f_audit_inconnu` | Question du diagnostic laissée sans réponse : ne pas savoir est le motif même de le recommander | answer | add | 1 | ACT_AGR_002 |
| `f_lavage_direct` | Lavage direct à l'eau, ou raclage et aspiration occasionnels : nettoyer à sec avant tout lavage | answer | add | 1 | ACT_ART_005 |
| `f_plonge_eau_courante` | Plonge sous l'eau courante ou gestes jamais expliqués : former l'équipe aux gestes économes | answer | add | 1 | ACT_ART_001 |
| `f_points_eau_non_equipes` | Robinetterie d'origine ou équipement partiel : poser mousseurs et douchette à gâchette | answer | add | 1 | ACT_ART_003 |
| `f_froid_eau_perdue` | Équipement de froid à eau perdue, ou jamais vérifié : faire vérifier par le frigoriste et remplacer | answer | add | 1 | ACT_ART_004 |
| `f_sans_separateur` | Pas de séparateur, ou séparateur vidé seulement quand il déborde : installer un séparateur adapté et organiser son entretien | answer | add | 1 | ACT_ART_006 |
| `f_rejet_non_declare` | Statut du rejet inconnu ou démarche non faite : se renseigner et obtenir l'autorisation si elle est exigée | answer | add | 1 | ACT_ART_007 |
| `f_reglement_inconnu` | Règlement d'assainissement jamais consulté : savoir d'abord si un séparateur est exigé, retirer le séparateur au profit de la démarche auprès du service | answer | remove | 2 | ACT_ART_006 |
| `f_exterieurs_reseau` | Véhicule ou surfaces extérieures lavés à l'eau du réseau : récupérer l'eau de pluie pour ces usages | answer | add | 1 | ACT_AGR_006 |
| `f_anticipation` | Coupure d'eau ou restrictions jamais envisagées, ou seulement suivies : préparer un plan de gestion de l'eau | answer | add | 1 | ACT_AGR_009 |
| `f_demarche_connue` | Démarche collective connue sans y participer : la rejoindre | answer | add | 1 | ACT_AGR_010 |

## Mesures

### ACT_ART_001 · Former l'équipe aux gestes économes en eau au laboratoire

*Gestes économes* · sensibiliser_former · secteurs ['artisanat_alimentaire'] · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut brouillon

Montrer à chacun, apprentis compris, les gestes qui comptent : fermer le robinet entre deux rinçages, laver dans un bac plutôt que sous l'eau courante, signaler toute fuite. Ces gestes ne coûtent rien et agissent sur le nettoyage et la plonge, premier poste d'eau du laboratoire.

- **info** : Dans les petits ateliers de transformation, 15 à 40 % du volume d'eau serait facilement économisable, le nettoyage étant le point crucial de la maîtrise des consommations. (https://reseau-eau.educagri.fr/files/fichierRessource1_Gest_eau_effluents_Rodez_08_12_09.pdf)
- **ressource** : Métiers de bouche : le guide pour réduire la consommation d'eau (CMA Auvergne-Rhône-Alpes, 2026) (https://www.cma-auvergnerhonealpes.fr/nos-publications/metiers-de-bouche-le-guide-pour-reduire-la-consommation-deau/)
- **ressource** : Guide de la transition écologique dans les métiers de bouche (CGAD) (https://www.cgad.fr/app/uploads/2023/06/guide-transition-ecologique-CGAD-avril-2023.pdf)
- **ressource** : Guide des bonnes pratiques RSE des artisans boulangers-pâtissiers (CNBPF) (https://boulangerie.org/wp-content/uploads/Guide_RSE_boulangerie-artisanale_web.pdf)
- Sources :
  - description : https://www.cgad.fr/app/uploads/2023/06/guide-transition-ecologique-CGAD-avril-2023.pdf (2023-01-01) · « Éco-gestes recommandés aux métiers de bouche : ne pas laisser couler l'eau, signaler les fuites, afficher les bonnes pratiques. »
  - infos_complementaires : https://reseau-eau.educagri.fr/files/fichierRessource1_Gest_eau_effluents_Rodez_08_12_09.pdf (2009-01-01) · « 15 à 40 % du volume d'eau facilement économisable dans les petits ateliers agroalimentaires ; le nettoyage, point crucial. »

### ACT_ART_002 · Relever son compteur chaque semaine et réparer les fuites sans délai

*Relevés et fuites* · suivre_comprendre_maitriser · secteurs ['artisanat_alimentaire'] · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "faible"} · statut brouillon

Noter l'index du compteur chaque semaine, et le relever un soir puis le lendemain matin sans aucun puisage pour vérifier qu'il ne tourne pas. Une fuite repérée tôt est réparée avant de peser sur la facture : un robinet qui goutte ou une chasse qui fuit coûte des centaines d'euros par an.

- **info** : Un goutte-à-goutte perd jusqu'à 43 800 litres par an, un mince filet d'eau 130 000 litres et une chasse d'eau qui fuit 220 000 litres, soit environ 190, 560 et 950 euros au prix moyen de 4,30 euros le m³. (https://www.cgad.fr/app/uploads/2023/06/guide-transition-ecologique-CGAD-avril-2023.pdf)
- **info** : Si le compteur dessert aussi la boutique ou votre logement, un sous-compteur sur le laboratoire permet de suivre la production seule (voir la mesure compteur par usage).
- Sources :
  - description : https://www.eau-artois-picardie.fr/eco-gestes-comment-economiser-leau (2021-01-01) · « Relever le compteur le soir et le matin sans avoir puisé d'eau : s'il a tourné, il y a une fuite. »
  - infos_complementaires : https://www.cgad.fr/app/uploads/2023/06/guide-transition-ecologique-CGAD-avril-2023.pdf (2023-01-01) · « Goutte-à-goutte 43 800 L/an (188 € TTC), mince filet 130 000 L/an (559 €), chasse d'eau qui fuit 220 000 L/an (946 €), au prix moyen de 4,30 €/m³. »

### ACT_ART_003 · Équiper robinets et plonge de réducteurs de débit

*Réducteurs de débit* · ameliorer_efficacite_hydrique · secteurs ['artisanat_alimentaire'] · impact 2 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "faible"} · statut brouillon

Poser des mousseurs sur les robinets et une douchette de prélavage à gâchette à la plonge, et passer les chasses d'eau en double commande. Pour un investissement modeste, vous réduisez le débit de chaque point d'eau sans perte de pression ni changement d'habitude.

- **info** : Un mousseur réduit le débit d'un robinet de 30 à 50 %, sans perte de pression ressentie. (https://www.services.eaufrance.fr/economie-d-eau)
- **info** : Les métiers de bouche sont invités à choisir des chasses d'eau à double commande de 6 litres au plus. (https://www.cgad.fr/app/uploads/2023/06/guide-transition-ecologique-CGAD-avril-2023.pdf)
- Sources :
  - description : https://www.cgad.fr/app/uploads/2023/06/guide-transition-ecologique-CGAD-avril-2023.pdf (2023-01-01) · « Mousseurs sur les robinets, douchette de prélavage, chasses d'eau double commande d'au plus 6 litres. »
  - description : https://www.services.eaufrance.fr/economie-d-eau (sans date) · « Les mousseurs réduisent le débit de 30 à 50 %. »

### ACT_ART_004 · Remplacer les équipements de froid refroidis à eau perdue

*Froid sans eau perdue* · ameliorer_efficacite_hydrique · secteurs ['artisanat_alimentaire'] · impact 3 · facilité 2 · moyen_terme · effort {"capex": "moyen", "opex": "faible", "humain": "faible"} · statut brouillon

Faire vérifier par votre frigoriste si le refroidisseur d'eau, les chambres froides, les armoires de pousse ou la cellule sont refroidis par de l'eau du réseau rejetée à l'égout, et les passer à l'air ou en boucle fermée. Là où cette installation existe, elle consomme de l'eau en continu, jour et nuit.

- **info** : Pour les ateliers de produits d'origine animale soumis à enregistrement, la réfrigération en circuit ouvert est déjà interdite : c'est la règle de bonne pratique à suivre, même en dessous de ces seuils. (https://aida.ineris.fr/reglementation/arrete-230312-relatif-prescriptions-generales-applicables-installations-relevant)
- **info** : Le refroidisseur d'eau de coulage peut consommer à lui seul plus d'électricité que le pétrin, la diviseuse et la façonneuse réunis : son remplacement se pense aussi pour la facture d'énergie. (https://boulangerie.org/wp-content/uploads/Guide_RSE_boulangerie-artisanale_web.pdf)
- Sources :
  - description : https://aida.ineris.fr/reglementation/arrete-230312-relatif-prescriptions-generales-applicables-installations-relevant (2012-03-23) · « Article 26 : la réfrigération en circuit ouvert est interdite. »
  - infos_complementaires : https://boulangerie.org/wp-content/uploads/Guide_RSE_boulangerie-artisanale_web.pdf (2024-01-01) · « Le refroidisseur d'eau peut consommer plus d'électricité que le pétrin, la diviseuse et la façonneuse réunis. »

### ACT_ART_005 · Passer au nettoyage à sec avant tout lavage à l'eau

*Nettoyage à sec d'abord* · changer_process_pratiques · secteurs ['artisanat_alimentaire'] · impact 3 · facilité 3 · immediat · effort {"capex": "faible", "opex": "faible", "humain": "faible"} · statut brouillon

Racler graisses et restes, aspirer la farine, laisser figer les eaux de cuisson et vider les paniers des siphons dans la poubelle avant de laver. Vous utilisez moins d'eau pour nettoyer, et moins de graisses partent vers le séparateur et le réseau.

- **info** : Les graisses animales figées colmatent et corrodent les canalisations : les retirer à sec protège aussi votre branchement. (https://cma-grandest.fr/wp-content/uploads/2021/12/F217-Graisses-me%CC%81tiers-de-bouche.pdf)
- **info** : En boulangerie, un aspirateur adapté aux poussières de farine remplace le balai et le jet d'eau, et protège la santé des salariés. (https://boulangerie.org/wp-content/uploads/Guide_RSE_boulangerie-artisanale_web.pdf)
- Sources :
  - description : https://www.cgad.fr/app/uploads/2023/06/guide-transition-ecologique-CGAD-avril-2023.pdf (2023-01-01) · « Refroidir les eaux de cuisson, retirer les graisses solidifiées, enlever les restes avant lavage. »
  - description : https://www.grandpoitiers.fr/fileadmin/M%C3%A9dias_par_groupes_de_contributeurs/Economie_emploi_et_entreprises/04-eau_biodiversit%C3%A9/GP_rejet_eau_annexe_preco_tec_m%C3%A9tiers_de_bouche.pdf (2021-01-01) · « Vider les siphons de sol dans la poubelle avant lavage. »
  - infos_complementaires : https://cma-grandest.fr/wp-content/uploads/2021/12/F217-Graisses-me%CC%81tiers-de-bouche.pdf (2021-01-01) · « Les graisses figées colmatent et corrodent les canalisations. »

### ACT_ART_006 · Installer et entretenir un séparateur à graisses adapté au laboratoire

*Séparateur à graisses* · agir_rejets_qualite · secteurs ['artisanat_alimentaire'] · impact 2 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "moyen", "humain": "faible"} · statut brouillon

Faire dimensionner un séparateur à graisses pour les eaux du laboratoire et de la plonge, puis signer un contrat de vidange et tenir un planning d'entretien. Vous protégez votre branchement du colmatage et vous évitez les pénalités prévues par le règlement d'assainissement.

- **info** : Le conseiller environnement de votre chambre de métiers peut dimensionner le bac et étudier les aides à l'investissement. (https://cma-grandest.fr/wp-content/uploads/2021/12/F217-Graisses-me%CC%81tiers-de-bouche.pdf)
- **avertissement** : Certaines collectivités imposent une vidange par une entreprise agréée au moins trois fois par an, interdisent les additifs qui dissolvent les graisses et peuvent doubler la redevance en cas de branchement non conforme. Lisez le règlement d'assainissement de votre commune. (https://www.grandpoitiers.fr/fileadmin/M%C3%A9dias_par_groupes_de_contributeurs/Economie_emploi_et_entreprises/04-eau_biodiversit%C3%A9/GP_rejet_eau_annexe_preco_tec_m%C3%A9tiers_de_bouche.pdf)
- Sources :
  - description : https://cma-grandest.fr/wp-content/uploads/2021/12/F217-Graisses-me%CC%81tiers-de-bouche.pdf (2021-01-01) · « De plus en plus de règlements d'assainissement imposent un bac à graisses aux métiers de bouche ; le conseiller environnement CMA dimensionne et étudie les aides. »
  - infos_complementaires : https://www.grandpoitiers.fr/fileadmin/M%C3%A9dias_par_groupes_de_contributeurs/Economie_emploi_et_entreprises/04-eau_biodiversit%C3%A9/GP_rejet_eau_annexe_preco_tec_m%C3%A9tiers_de_bouche.pdf (2021-01-01) · « Entretien au moins trois fois par an par une entreprise agréée, additifs interdits, redevance doublée en cas de non-conformité. »

### ACT_ART_007 · Déclarer son rejet et obtenir l'autorisation de déversement

*Autorisation de déversement* · agir_rejets_qualite · secteurs ['artisanat_alimentaire'] · impact 1 · facilité 3 · court_terme · effort {"capex": "faible", "opex": "faible", "humain": "moyen"} · statut brouillon

Demander au service d'assainissement si vos eaux usées sont assimilées à des eaux domestiques, déclarer votre raccordement et obtenir l'autorisation ou la convention de déversement si le règlement l'exige. Vous êtes en règle avant un contrôle, une vente du fonds ou des travaux.

- **avertissement** : Un rejet d'eaux usées autres que domestiques doit être autorisé avant tout déversement. Sans réponse de la collectivité dans les quatre mois, la demande est réputée refusée. (https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000023245101)
- **info** : Le statut varie d'une commune à l'autre : certaines considèrent les métiers de bouche comme assimilés domestiques sans autorisation, d'autres, comme Paris, exigent une autorisation et un contrat d'entretien du séparateur. (https://www.paris.fr/pages/evacuation-des-eaux-usees-non-domestiques-3547)
- Sources :
  - description : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029737268 (sans date) · « Article L1331-7-1 : droit au raccordement des eaux assimilées domestiques, prescriptions techniques possibles. »
  - infos_complementaires : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000023245101 (sans date) · « Article L1331-10 : autorisation préalable, silence de quatre mois vaut refus. »
  - infos_complementaires : https://cma-grandest.fr/wp-content/uploads/2021/12/F217-Graisses-me%CC%81tiers-de-bouche.pdf (2021-01-01) · « Métiers de bouche considérés comme assimilés domestiques, sans autorisation à demander. »
  - infos_complementaires : https://www.paris.fr/pages/evacuation-des-eaux-usees-non-domestiques-3547 (sans date) · « Charcutiers et traiteurs : déclaration et autorisation de déversement préalable, contrat d'entretien du séparateur. »

## Simulation

# Simulation du référentiel "Artisanat alimentaire" (artisanat_alimentaire)

Source : staging + publié · 12 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 6 personas

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
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 76 % |
| ACT_ART_004 | Froid sans eau perdue | ameliorer_efficacite_hydrique | 58 % |
| ACT_ART_005 | Nettoyage à sec d'abord | changer_process_pratiques | 50 % |
| ACT_ART_001 | Gestes économes | sensibiliser_former | 47 % |
| ACT_ART_007 | Autorisation de déversement | agir_rejets_qualite | 47 % |
| ACT_ART_002 | Relevés et fuites | suivre_comprendre_maitriser | 46 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 42 % |
| ACT_ART_003 | Réducteurs de débit | ameliorer_efficacite_hydrique | 41 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 29 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 25 % |
| ACT_ART_006 | Séparateur à graisses | agir_rejets_qualite | 24 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 19 % |

### Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 8 % | | faible | 1 % |
| intermediaire | 80 % | | moyen | 80 % |
| avance | 13 % | | eleve | 19 % |

### Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_facture | answer | add | 46 % |
| f_compteur_partage | answer | add | 29 % |
| f_pas_audit | answer | add | 65 % |
| f_audit_inconnu | answer | add | 11 % |
| f_lavage_direct | answer | add | 50 % |
| f_plonge_eau_courante | answer | add | 47 % |
| f_points_eau_non_equipes | answer | add | 41 % |
| f_froid_eau_perdue | answer | add | 58 % |
| f_sans_separateur | answer | add | 34 % |
| f_rejet_non_declare | answer | add | 47 % |
| f_reglement_inconnu | answer | remove | 26 % |
| f_exterieurs_reseau | answer | add | 19 % |
| f_anticipation | answer | add | 42 % |
| f_demarche_connue | answer | add | 25 % |

### Personas

### Boulangerie de village, rien de formalisé (boulanger_novice)

Boulangerie-pâtisserie de village, le couple et quatre salariés, logement au-dessus du fournil sur le même compteur. Lavage au jet sans raclage, plonge sous l'eau courante, robinetterie d'origine, refroidisseur d'eau et chambres froides jamais vérifiés, pas de séparateur à graisses, aucune démarche auprès du service d'assainissement. Camionnette de tournée lavée au tuyau dans la cour. Suit sa consommation à la facture, jamais de diagnostic, n'a jamais pensé à une coupure d'eau.

Maturité 3 % (novice) · concernement 3 % · axes : comptage, rejets, audit, nettoyage, gestes, equipements, froid, exterieurs, anticipation

- Nettoyage à sec d'abord (ACT_ART_005, immediat)
- Relevés et fuites (ACT_ART_002, immediat)
- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Gestes économes (ACT_ART_001, immediat)
- Réducteurs de débit (ACT_ART_003, immediat)
- Froid sans eau perdue (ACT_ART_004, moyen_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Autorisation de déversement (ACT_ART_007, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Charcutier-traiteur équipé, en réflexion sur la suite (charcutier_equipe)

Charcutier-traiteur de huit salariés en bourg. A refait son laboratoire il y a trois ans : mousseurs et douchette à gâchette, froid entièrement à air, séparateur à graisses avec contrat de vidange, raclage systématique et plonge au bac. Relève son compteur chaque semaine, diagnostic CMA vieux de six ans. Sait qu'une autorisation de déversement pourrait être exigée sans avoir fait la démarche. Suit les alertes de la mairie sans plan, connaît l'éco-défi de sa CMA sans y participer.

Maturité 58 % (intermediaire) · concernement 67 % · axes : audit, rejets, anticipation, collectif

- Audit eau (ACT_AGR_002, immediat)
- Démarche collective (ACT_AGR_010, court_terme)
- Autorisation de déversement (ACT_ART_007, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Pâtisserie de centre-ville, sans graisses ni extérieurs (patissier_centre_ville)

Pâtissier de centre-ville, trois salariés, laboratoire en rez-de-chaussée d'immeuble avec compteur propre. Pas de véhicule ni de cour, froid entièrement à air vérifié à l'installation, service d'assainissement qui n'exige ni séparateur ni autorisation pour son activité. Relève le compteur de temps en temps, quelques mousseurs, raclage quand on y pense, chacun lave à sa façon. Jamais de diagnostic, jamais pensé à une coupure d'eau.

Maturité 44 % (intermediaire) · concernement 47 % · axes : comptage, audit, nettoyage, gestes, equipements, anticipation

- Nettoyage à sec d'abord (ACT_ART_005, immediat)
- Relevés et fuites (ACT_ART_002, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Gestes économes (ACT_ART_001, immediat)
- Réducteurs de débit (ACT_ART_003, immediat)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Boulangerie lauréate d'un éco-défi, pratiques pilotées (artisan_avance)

Boulangerie-pâtisserie de douze salariés, deux fois lauréate de l'éco-défi de sa CMA. Sous-compteur sur le laboratoire, relevé hebdomadaire et contrôle des fuites, diagnostic CMA de moins de deux ans suivi, nettoyage à sec affiché et suivi, plonge au lave-batterie, débits vérifiés chaque année, froid à air, séparateur entretenu sous contrat, convention de déversement signée, camionnette lavée à l'eau de pluie, plan écrit en cas de coupure, témoigne aux réunions de la CMA.

Maturité 100 % (avance) · concernement 100 % · axes : aucun

Plan vide.

### Vendeuse qui répond pour l'artisan (vendeuse_ne_sait_pas)

Vendeuse d'une boulangerie qui remplit le questionnaire pendant que le patron est au fournil. Sait seulement que l'eau est suivie à la facture ; ne connaît ni les équipements du laboratoire, ni le séparateur, ni les démarches engagées.

Maturité 0 % (novice) · concernement 0 % · axes : comptage

- Relevés et fuites (ACT_ART_002, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Charcuterie urbaine en règle sur ses rejets, rien au-delà (charcuterie_urbaine_conforme)

Charcuterie de 25 salariés dans une grande ville, avec autorisation de déversement et séparateur entretenu sous contrat parce que le règlement d'assainissement l'impose. Raclage systématique et plonge au bac, robinets équipés, mais une vieille cellule de refroidissement à eau perdue. Relève le compteur de temps en temps, jamais de diagnostic, sait quoi arrêter en cas de coupure. Camion de livraison lavé dans la cour à l'eau du réseau.

Maturité 47 % (intermediaire) · concernement 50 % · axes : comptage, audit, froid, exterieurs

- Relevés et fuites (ACT_ART_002, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Froid sans eau perdue (ACT_ART_004, moyen_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)

## Couverture par les solutions

# Couverture des mesures : artisanat_alimentaire (seeds + staging)

12 mesures visibles · 3 sans prestataire · 6 sans aide · 2 sans rien

| Mesure | Catégorie | Prestataires liés | Aides liées |
|---|---|---|---|
| ACT_AGR_009 Plan de gestion de l'eau | Sensibiliser et former | Hydros [conseil_etude], Atelier Compte-Gouttes (Hydros) [formation] | aucune |
| ACT_ART_001 Gestes économes | Sensibiliser et former | aucun | Prise en charge des formations des salariés par Opco EP (plan de développement des compétences des entreprises de moins de 50 salariés et catalogue Sélexion) |
| ACT_AGR_001 Compteur par usage | Suivre, comprendre et maîtriser ses consommations | Willie [materiel+conseil_etude] | aucune |
| ACT_AGR_002 Audit eau | Suivre, comprendre et maîtriser ses consommations | Chambre de métiers et de l'artisanat de région Auvergne-Rhône-Alpes [conseil_etude], Hydros [conseil_etude] | Diagnostic eau gratuit des artisans (CMA Auvergne-Rhône-Alpes, agences de l'eau Rhône Méditerranée Corse et Loire-Bretagne), Ressourc'Eau, programme de gestion durable de l'eau (CCI Pays de la Loire et agence de l'eau Loire-Bretagne), Diag Eco-Flux, diagnostic des flux énergie, eau, matières et déchets (ADEME et Bpifrance) |
| ACT_ART_002 Relevés et fuites | Suivre, comprendre et maîtriser ses consommations | ODREO [conseil_etude] | aucune |
| ACT_ART_003 Réducteurs de débit | Améliorer l'efficacité hydrique de ses équipements | Delabie [materiel], Les Robinets Presto [materiel] | IND2, opérations groupées sectorielles (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_ART_004 Froid sans eau perdue | Améliorer l'efficacité hydrique de ses équipements | Sorema [materiel] | Prêt Vert BPI : Transition écologique, IND2, opérations groupées sectorielles (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_ART_005 Nettoyage à sec d'abord | Changer ses process ou pratiques | Pharaon [materiel] | Subvention Prévention « Poussières de farine » (Assurance Maladie, risques professionnels) |
| ACT_AGR_006 Récupération d'eau de pluie | Valoriser ou réutiliser les eaux non conventionnelles | EcoRecup (récupération eaux pluviales) [conseil_etude+travaux], Fontaine Ingénierie [conseil_etude+formation] | Prêt Vert BPI : Transition écologique, IND2, opérations groupées sectorielles (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_ART_006 Séparateur à graisses | Agir sur ses rejets et la qualité de l'eau | Chefneux Assainissement [travaux], SIMOP France [materiel], Delho [materiel+conseil_etude] | aucune |
| ACT_ART_007 Autorisation de déversement | Agir sur ses rejets et la qualité de l'eau | aucun | aucune |
| ACT_AGR_010 Démarche collective | Agir sur le grand cycle de l'eau | aucun | aucune |

### Fiches à rédiger

- prestataire pour ACT_ART_001 (Gestes économes, Sensibiliser et former)
- prestataire pour ACT_ART_007 (Autorisation de déversement, Agir sur ses rejets et la qualité de l'eau)
- prestataire pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)
- aide pour ACT_AGR_009 (Plan de gestion de l'eau, Sensibiliser et former)
- aide pour ACT_AGR_001 (Compteur par usage, Suivre, comprendre et maîtriser ses consommations)
- aide pour ACT_ART_002 (Relevés et fuites, Suivre, comprendre et maîtriser ses consommations)
- aide pour ACT_ART_006 (Séparateur à graisses, Agir sur ses rejets et la qualité de l'eau)
- aide pour ACT_ART_007 (Autorisation de déversement, Agir sur ses rejets et la qualité de l'eau)
- aide pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)

### Fiches sans lien vers une mesure du secteur (visibles seulement par repli de catégorie)

- prestataire PREST_TRA_002
- aide AIDE_LAI_002
- aide AIDE_LAI_004

## Prestataires

### PREST_ART_001 · Chambre de métiers et de l'artisanat de région Auvergne-Rhône-Alpes

chambre_consulaire · secteurs ['artisanat_alimentaire'] · départements ['01', '03', '07', '15', '26', '38', '42', '43', '63', '69', '73', '74'] · statut brouillon

Établissement public consulaire des artisans, présent dans chaque département de la région Auvergne-Rhône-Alpes. Un conseiller de la CMA réalise sur place un diagnostic eau de 4 heures au plus : consommation par poste (production, nettoyage, sanitaires), équipements, pratiques quotidiennes et fuites, puis remet un plan d'actions visant au moins 20 % d'économies, avec un suivi téléphonique à un an. Le diagnostic est gratuit (0 € TTC), pris en charge par la CMA et l'agence de l'eau, et se réserve sur le catalogue en ligne ou auprès d'un conseiller.

- Mesures : ACT_AGR_002 [conseil_etude]
- site_internet : https://www.cma-auvergnerhonealpes.fr/
- tel : 3006
- adresse : 10 rue Paul Montrochet, 69002 Lyon
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Chambre%20de%20m%C3%A9tiers%20et%20de%20l%27artisanat%20de%20r%C3%A9gion%20Auvergne-Rh%C3%B4ne-Alpes&departement=69 (2026-10-15) · « CHAMBRE DE METIERS ET DE L'ARTISANAT DE REGION AUVERGNE-RHONE-ALPES (CMAR), siret 13002795600015, siège, 10 RUE PAUL MONTROCHET 69002 LYON, état A »
  - description, expertises, mesures (ACT_AGR_002) : https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/ (2026-10-15) · « Diagnostic, 4 heures, Individuel, 0€ TTC. Réalisation d'un diagnostic pour évaluer votre consommation par poste. Etablissement d'un plan d'action avec des solutions visant à réduire d'au moins 20% vos consommations. Le diagnostic fait l'objet d'un suivi à 1 an »
  - description : https://www.cma-auvergnerhonealpes.fr/actualites/reduisez-vos-factures-deau-avec-la-cma/ (2026-10-15) · « la CMA Auvergne-Rhône-Alpes et l'Agence de l'eau Rhône Méditerranée Corse [...] vous accompagnent, artisans, pour optimiser votre consommation et anticiper les futures restrictions. [...] Salons de coiffure, métiers de bouche, brasseries [...] le diagnostic est pris en charge par votre CMA et votre agence de l'eau. »
  - description, expertises, categories : https://www.cma-auvergnerhonealpes.fr/actualites/metiers-de-bouche-comment-reduire-vos-factures-deau/ (2026-10-15) · « Restaurant, boulangerie, boucherie [...] Un conseiller CMA se déplace dans votre établissement [...] Il analyse : Vos postes de consommation (production, nettoyage, sanitaires…) Vos équipements [...] douchette à faible débit [...] un guide dédié aux métiers de bouche »
  - departements, contacts (tel) : https://www.cma-auvergnerhonealpes.fr/nous-contacter/ (2026-10-15) · « Appeler le 3006. La CMA est présente dans chaque département en Auvergne-Rhône-Alpes. »
  - logo_url : https://www-img.cma-auvergnerhonealpes.fr/gravity:sm/rs:auto:180:180/app/uploads/2024/06/cropped-favicon.png (2026-10-15) · « apple-touch-icon du site cma-auvergnerhonealpes.fr, 180 x 180 »

### PREST_ART_002 · Chefneux Assainissement

installateur · secteurs ['artisanat_alimentaire'] · départements ['01', '38', '42', '69'] · statut brouillon

Entreprise d'assainissement installée à Montagny (Rhône), agréée vidangeur, qui intervient dans le Rhône, l'Isère, la Loire et l'Ain. Pour les boulangeries, pâtisseries, boucheries et charcuteries, elle vidange les bacs à graisse (pompage des graisses et des boues, nettoyage haute pression, contrôle du séparateur) et remet à chaque passage un bordereau de suivi des déchets, un certificat de vidange et un rapport d'intervention. Intervention sur devis ou dans le cadre d'un contrat d'entretien mensuel à trimestriel, son site ne présente pas de pose de bacs neufs.

- Mesures : ACT_ART_006 [travaux]
- site_internet : https://www.chefneux.com/
- tel : 04 78 73 02 65
- adresse : ZAC du Baconnet, 57 allée des Érables, 69700 Montagny
- Sources :
  - description, expertises, mesures, categories : https://www.chefneux.com/services/bac-graisse (2026-10-15) · « Pompage intégral des graisses et boues. Nettoyage haute pression du bac. Contrôle de l'état du séparateur. [...] Bordereau de suivi des déchets (BSD). Certificat de vidange. Rapport d'intervention détaillé. [...] Contrats disponibles pour [...] Mensuel à trimestriel »
  - secteurs : https://www.chefneux.com/services/bac-graisse (2026-10-15) · « Qui est concerné ? Restaurants et brasseries [...] Boulangeries et pâtisseries [...] Boucheries et charcuteries »
  - departements, contacts : https://www.chefneux.com/services/bac-graisse (2026-10-15) · « Rhône (69) Isère (38) Loire (42) Ain (01). Contact 04 78 73 02 65, ZAC du Baconnet 57 Allée des Érables 69700 Montagny »
  - siret, description : https://www.chefneux.com/mentions-legales (2026-10-15) · « Propriétaire du site : CHEFNEUX ASSAINISSEMENT [...] SIRET : 331 004 713 00037 [...] N° d'agrément vidangeur : 2020-NS-069-0001 »
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Thierry%20Chefneux%20Assainissement&departement=69 (2026-10-15) · « THIERRY CHEFNEUX ASSAINISSEMENT, siret 33100471300037, siège, ZAC DU BACONNET 57 ALLEE DES ERABLES 69700 MONTAGNY, activité 37.00Z, état administratif A »
  - logo_url : https://www.chefneux.com/apple-touch-icon.png (2026-10-15) · « apple-touch-icon 180 x 180 déclarée dans l'en-tête du site »

### PREST_ART_003 · Sorema

equipementier · secteurs ['artisanat_alimentaire'] · départements national · statut brouillon

Constructeur de matériel de boulangerie installé en Maine-et-Loire, qui conçoit et fabrique en France des refroidisseurs d'eau, des doseurs d'eau et des condenseurs de buée de four pour la boulangerie artisanale et industrielle. Ses refroidisseurs d'eau AGD (110 à 250 litres par heure) ont un compresseur avec condenseur à air, et les fiches techniques de sa gamme Ecologic au propane R290 (Premium, Optimum, Optimax, Continu'O) indiquent un débit d'air au condenseur. Tarif sur demande, contrat d'entretien et service après-vente proposés par le constructeur. La couverture nationale de la fiche vaut pour la vente de matériel, assurée par ses commerciaux de terrain et ses distributeurs : la zone d'intervention de son service après-vente n'est pas publiée.

- Mesures : ACT_ART_004 [materiel]
- site_internet : https://www.sorema.com/
- tel : 02 41 62 30 29
- mail : info@sorema.com
- adresse : 2 rue de l'Aujardière, 49280 Saint-Christophe-du-Bois
- Sources :
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=Sorema&departement=49 (2026-10-15) · « SOREMA, siret 34032792300041, siège, ZONE D'ACTIVITE DU PARC 5 RUE DE L'AUJARDIERE 49280 SAINT-CHRISTOPHE-DU-BOIS, NAF 28.25Z, état A »
  - contacts : https://www.sorema.com/contact/ (2026-10-15) · « Vous pouvez également nous écrire à info@sorema.com SOREMA 2 rue de l'Aujardière 49280 Saint-Christophe-du-Bois Tél : +33 (0)2 41 62 30 29 »
  - description, expertises, secteurs : https://www.sorema.com/materiel-boulangerie/ (2026-10-15) · « Spécialiste du matériel de boulangerie et fabricant de refroidisseurs d'eau et doseurs d'eau, SOREMA continue de faire évoluer ses solutions de maîtrise de température pour la boulangerie artisanale et la boulangerie industrielle »
  - type (fabrication en France) : https://www.sorema.com/presentation-et-historique-de-lentreprise-sorema/ (2026-10-15) · « 1957 Monsieur MAGNERON lance la fabrication du premier refroidisseur d'eau destiné à la boulangerie [...] 2023 Inauguration d'un nouveau site de production à Saint-Christophe-du-Bois pour accroître la capacité de production »
  - type (fabrication en France) : https://www.sorema.com/premium-260/ (2026-10-15) · « Refroidisseur d'eau PREMIUM 260 Ecologic [...] Gaz R290 [...] FABRIQUÉ À CHOLET »
  - description, expertises (entretien) : https://www.sorema.com/la-maintenance/ (2026-10-15) · « Un contrat d'entretien précise les modalités des interventions, en relation avec la législation. Un SAV performant SOREMA assure un service après-vente adapté sur tous les types d'installation et toutes marques »
  - description, mesures (ACT_ART_004) : https://www.sorema.com/wp-content/uploads/2020/07/BOULANGERIE-INDUSTRIELLE-SOREMA-2020.pdf (2026-10-15) · « Système autonome de refroidissement d'eau alimentaire à +0,5°C. [...] Compresseur frigorifique R452A avec condenseur à air - ventilateur hélicoïde. [...] AGD 110 P 110 [...] AGD 250 P 250 R452A (documentation liée depuis la page Refroidisseur d'eau AGD 110 à 250 P) »
  - description, mesures (ACT_ART_004) : https://www.sorema.com/refroidisseur-agd-110-a-250-p-2/ (2026-10-15) · « Refroidisseur d'eau AGD 110 à 250 P [...] Téléchargez la doc Boulangerie industrielle »
  - description, secteurs : https://www.sorema.com/gamme/materiel-de-boulangerie/refroidisseurs-deau-sorema/ (2026-10-15) · « Refroidisseur d'eau AGD 110 à 250 P 110 à 250 L/h Capacités semi-industrielles de 110 à 250 litres d'eau / heure. »
  - description (débit d'air au condenseur, Premium) : https://www.sorema.com/wp-content/uploads/2026/09/PREMIUM-ECO-FR-26-SOREMA.pdf (2026-10-15) · « PRÉMIUM 260 ECOLOGIC Gaz R290 [...] Débit d'air condenseur 340 m3/ heure »
  - description (débit d'air au condenseur, Optimum) : https://www.sorema.com/wp-content/uploads/2026/09/OPTIMUM-FR-ECO-20-SOREMA-1.pdf (2026-10-15) · « OPTIMUM 360 ECOLOGIC Gaz R290 [...] Débit d'air condenseur 540 m3 / h »
  - description (débit d'air au condenseur, Optimax) : https://www.sorema.com/wp-content/uploads/2026/09/OPTIMAX-FR-ECO-20-SOREMA.pdf (2026-10-15) · « OPTIMAX 400 ECO OPTIMAX 600 ECO OPTIMAX 900 ECO Gaz R290 [...] Débit d'air condenseur 540 m3/ heure 1230 m3/ heure 1330 m3/ heure »
  - description (débit d'air au condenseur, Continu'O) : https://www.sorema.com/wp-content/uploads/2026/09/CONTINUO-ECO-FR-20-SOREMA.pdf (2026-10-15) · « CONTINU'O 400 ECO CONTINU'O 600 ECO CONTINU'O 900 ECO Gaz R290 [...] Débit d'air condenseur 540 m³ / heure 1 150 m³ / heure 1 300 m³ / heure »
  - description (tarif sur demande) : https://www.sorema.com/premium-260/ (2026-10-15) · « Téléchargez la doc commerciale PREMIUM Une question, besoin d'un tarif CONTACTEZ-NOUS »
  - expertises (condenseur de buée sans eau) : https://www.sorema.com/gamme/materiel-de-boulangerie/condenseurs-a-buee-de-four-sorema/ (2026-10-15) · « Buée'no Ecologic Econome en énergie et sans consommation d'eau. »
  - departements, description (vente par commerciaux et distributeurs), type : https://www.sorema.com/nos-forces-2/ (2026-10-15) · « De nombreuses boulangeries ont fait le choix de SOREMA en matériel de boulangerie et plus de 25.000 refroidisseurs ont déjà été vendus dans le monde. [...] Ses commerciaux de terrain remontent les informations d'échanges avec ses clients distributeurs. [...] Une fabrication française SOREMA dispose d'un atelier à Cholet »
  - logo_url : https://www.sorema.com/wp-content/themes/theme_sorema_2023/favicon.ico (2026-10-15) · « favicon du site sorema.com (symbole drapeau au flocon), 32 x 32 »

### PREST_ART_005 · ODREO

bureau_etudes · secteurs ['artisanat_alimentaire'] · départements ['01', '03', '07', '15', '26', '38', '42', '43', '63', '69', '73', '74', '21', '25', '39', '58', '70', '71', '89', '90'] · statut brouillon

Entreprise de recherche de fuites d'eau basée dans le Rhône, qui intervient auprès des particuliers et des professionnels en Auvergne-Rhône-Alpes et en Bourgogne-Franche-Comté. Quand votre compteur tourne alors qu'aucun point d'eau n'est utilisé, elle localise la fuite sans casser (écoute acoustique, gaz traceur, caméra thermique, inspection vidéo des canalisations) sur les réseaux intérieurs comme sur les canalisations enterrées, puis remet un rapport détaillé. Elle ne répare pas elle-même : elle conseille et oriente vers des entreprises de réparation. Intervention sur devis, du lundi au vendredi. Aucune référence dans le commerce alimentaire n'est publiée sur son site.

- Mesures : ACT_ART_002 [conseil_etude]
- site_internet : https://odreo.fr/
- tel : 06 75 58 73 27
- mail : contact@odreo.fr
- adresse : 322 Grande Rue, 69770 Montrottier
- Sources :
  - siret, contacts (adresse) : https://recherche-entreprises.api.gouv.fr/search?q=Odreo&departement=69 (2026-10-15) · « ODREO, siret 91241457000016, siège, 322 GRANDE RUE 69770 MONTROTTIER, activité 71.20B, état administratif A »
  - contacts (site, tel, mail), departements, description : https://odreo.fr/ (2026-10-15) · « Recherche de fuites pour les particuliers et les professionnels. La mobilité de notre équipe nous permet d'intervenir à Lyon, dans les régions Rhône-Alpes-Auvergne et Bourgogne-Franche-Comté. Téléphone 06 75 58 73 27. Email contact@odreo.fr »
  - description, expertises : https://odreo.fr/ (2026-10-15) · « Conseils et mise en relation avec des spécialistes de la réparation après intervention. Devis en 24h, rendez-vous planifié dans les 48h après validation du devis, rapport détaillé 48h après intervention. ODREO intervient du Lundi au Vendredi de 8h à 18h »
  - mesures, expertises : https://odreo.fr/recherche-de-fuite-reseaux-enterres-exterieurs/ (2026-10-15) · « Vous avez reçu une facture anormalement élevée, votre compteur crédite en l'absence d'utilisation de vos points d'eau. Nous intervenons pour localiser précisément l'emplacement de la fuite d'eau sur votre terrain à l'aide de matériels électro-acoustiques, de matériels de repérage de réseau, techniques de gaz traceur »
  - mesures, expertises : https://odreo.fr/recherche-de-fuite-interieur-lyon/ (2026-10-15) · « Vous subissez une fuite intérieure dans votre logement ou vos locaux à Lyon ? Des contrôles exhaustifs de l'ensemble des réseaux sous pression (eau potable, chauffage), des réseaux gravitaires (EU/EV/EP) et des appareils à effet d'eau permettent d'identifier, sans destruction, l'origine de la fuite. »
  - secteurs : https://odreo.fr/ (2026-10-15) · « Recherche de fuites pour les particuliers et les professionnels. Nos Clients : Particuliers, Assureurs & Experts en assurance, Entreprises et Professionnels du bâtiment, Syndics et Administrateurs de biens, Piscinistes »
  - secteurs : https://odreo.fr/recherche-de-fuite-interieur-lyon/ (2026-10-15) · « Vous subissez une fuite intérieure dans votre logement ou vos locaux à Lyon ? ODREO vous assure un service fiable et efficace, minimisant ainsi les interruptions dans votre quotidien ou votre activité professionnelle. »
  - logo_url : https://odreo.fr/wp-content/uploads/2024/11/logo-Ordeo.png (2026-10-15) · « Logo complet en couleur (trois gouttes et nom ODREO), l'icône carrée du site coupe le nom »

### PREST_ART_007 · Pharaon

installateur · secteurs ['artisanat_alimentaire'] · départements national · statut brouillon

Entreprise du Nord qui commercialise des aspirateurs industriels et professionnels depuis 1972, avec un bureau d'études intégré qui conçoit des systèmes d'aspiration sur mesure, installés et mis en service clés en main. Son code NAF est celui du commerce de gros et son site n'indique aucun lieu de fabrication, ce qui en fait vraisemblablement un distributeur. Pour la boulangerie et la pâtisserie artisanales, elle vend sur devis un aspirateur à farine (MTL202ACD EPI) fourni avec des kits de nettoyage du four et de l'atelier, présenté comme reconnu par le LEMPA à faible émission de poussière et éligible à une subvention de prévention des risques professionnels. Location longue durée, pièces détachées et service après-vente, seuls les consommables et accessoires se commandant en ligne.

- Mesures : ACT_ART_005 [materiel]
- site_internet : https://www.pharaon.fr/
- mail : pharaon@pharaon.fr
- tel : 03 27 09 11 11
- adresse : 1 rue des 9 Bonniers, PAE Sars et Rosières, 59178 Brillon
- Sources :
  - siret : https://recherche-entreprises.api.gouv.fr/search?q=Pharaon&departement=59 (2026-10-15) · « PHARAON, siret 32129060300034, siège, PAE SARS ET ROSIERES RUE DES 9 BONNIERS 59178 BRILLON, activite_principale 46.69C, etat_administratif A »
  - siret, contacts : https://www.pharaon.fr/mentions-legales-s2 (2026-10-15) · « Raison sociale : PHARAON SIRET : 32129060300034. Contact pharaon@pharaon.fr (+33)3 27 09 11 11 1 rue des 9 Bonniers PAE Sars et Rosières 59178 Brillon »
  - type, description, expertises : https://www.pharaon.fr/qui-sommes-nous-s11 (2026-10-15) · « Pharaon commercialise une large gamme d'aspirateurs industriels et professionnels [...] Grâce à notre bureau d'étude intégré, Pharaon met son expérience et son savoir-faire au service de la conception de solutions sur mesure [...] Nous assurons la réalisation des projets clés-en-main, assurant l'installation du matériel, la formation de vos équipes et la mise en service des équipements. [...] la fourniture de pièces détachées [...] location de matériel de courtes ou de longues durées »
  - description, expertises, mesures : https://www.pharaon.fr/aspirateur-industriel-mtl202acd-epi-pour-boulangerie-p157 (2026-10-15) · « Demande de prix [...] Disponible à la location longue durée. À la suite du test réalisé par le LEMPA, l'aspirateur industriel MTL202ACD EPI est reconnu comme matériel « à faible émission de poussière ». [...] éligible à une subvention dans le cadre de la prévention des risques professionnels. Accessoires fournis : Kit accessoires de nettoyage four »
  - mesures, expertises : https://www.pharaon.fr/aspirateur-farine-c60 (2026-10-15) · « l'utilisation de soufflettes ou de brosses pour éliminer la farine remettrait les poussières en suspension dans l'air [...] L'aspirateur MTL202ACD EPI est la solution idéale et recommandée pour éliminer les poussières de farine dans les boulangeries artisanales. »
  - description : https://www.pharaon.fr/ (2026-10-15) · « Commandez dès maintenant vos accessoires Best-Sellers en ligne ! [...] Commandez vos sacs en ligne ! Gamme Kerstar et Longopac. Reconnu par le LEMPA comme équipement à faible émission de farine. Deux kits accessoires inclus pour le nettoyage du four et de l'atelier »
  - departements : https://www.pharaon.fr/livraison-s1 (2026-10-15) · « Pour les commandes effectuées sur le site internet www.pharaon.fr, l'adresse de livraison sera indiquée par le Client lui-même. »
  - departements : https://www.pharaon.fr/conditions-generales-de-vente-s15 (2026-10-15) · « Les prix sont exprimés en euros, hors taxes (HT), et seront majorés du taux de TVA applicable (20 % en France, hors exportation et CEE). [...] Les livraisons sont effectuées à l'adresse indiquée sur l'ARC. »
  - logo_url : https://www.pharaon.fr/img/logo-1727871970.svg (2026-10-15) · « Logo du site pharaon.fr (en-tête), version couleur »

### PREST_HOT_002 · Delabie

equipementier · secteurs ['hotellerie', 'artisanat_alimentaire'] · départements national · statut publie

Entreprise familiale qui fabrique de la robinetterie et des appareils sanitaires pour les lieux recevant du public, avec son siège social et son site de production à Friville-Escarbotin (Somme) ; le groupe a aussi acquis en 2012 une fonderie au Portugal. Pour un hôtel, elle fournit des pommeaux de douche à débit régulé de 6 l/min, des chasses directes à double touche 3 l/6 l et de la robinetterie temporisée, et présente une réalisation au Mama Shelter de Lille : robinets de lavabo temporisés dans les sanitaires des parties communes et installations sanitaires spécifiques dans les chambres pour personnes à mobilité réduite. Un service conseil répond par téléphone, un service devis par téléphone ou par formulaire, et le site propose un calcul des mètres cubes d'eau économisés.

- Mesures : ACT_HOT_001 [materiel], ACT_ART_003 [materiel]
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
  - mesures : https://www.delabie.fr/ftp/documents/fre-FR/nos-services/nos-catalogues/robinetterie-cuisines-professionnelles.pdf (2026-10-15) · « Catalogue robinetterie cuisines professionnelles : douchettes de prélavage à 9 ou 10 l/min (vu en résultat de recherche, non ouvert). »

### PREST_HOT_003 · Les Robinets Presto

equipementier · secteurs ['hotellerie', 'artisanat_alimentaire'] · départements national · statut publie

Fabricant français de robinetterie pour les lieux recevant du public, siège à Montrouge et site de production à Saint-Georges-de-Didonne (17110), avec un second site au Portugal. Pour les hôtels, il fournit des robinets de lavabo temporisés à débit réduit (1,9 ou 3 l/min), des robinetteries de douche temporisées (6, 8 ou 10 l/min), de la robinetterie électronique sans contact et des robinets de chasse directe à double volume réglable, et cite des références comme l'Hôtel Bedford et l'Hôtel Disneyland à Paris. Les produits se vendent par un réseau de distributeurs professionnels ; pour un chantier de plus de 3 000 euros HT en prix public, le chiffrage se demande par mail au service dédié, en indiquant l'installateur.

- Mesures : ACT_HOT_001 [materiel], ACT_ART_003 [materiel]
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
  - mesures : https://www.batiweb.com/actualites/publi-redactionnels/presto-chef-la-nouvelle-generation-de-robinets-grande-cuisine-36885 (2026-10-15) · « Gamme PRESTO CHEF pour cuisine professionnelle, douchette de prélavage régulée (vu en résultat de recherche ; page officielle presto.fr à trouver). »

### PREST_HUI_006 · SIMOP France

equipementier · secteurs ['industrie_huiles', 'artisanat_alimentaire'] · départements national · statut publie

Fabricant normand d'équipements de traitement des eaux, qui produit dans deux usines de la Manche et de la Somme. Sa gamme de séparateurs de graisses (polyéthylène, PRV jusqu'à la taille 100, inox pour effluents chauds) est présentée pour les graisses et huiles animales et végétales des eaux ménagères et des métiers de bouche ; sa seule réalisation agroalimentaire publiée est un atelier de pâtisserie, aucune n'est citée en huilerie, et le site ne présente ces appareils ni pour les eaux acides de neutralisation ni pour l'hexane. Il fabrique aussi des débourbeurs, des séparateurs d'hydrocarbures pour les eaux de ruissellement et des bacs de rétention, vendus sur devis par son service commercial ou via un réseau de points de vente et d'installateurs partenaires.

- Mesures : ACT_HUI_007 [materiel], ACT_ART_006 [materiel]
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
  - mesures : https://www.simop.fr/l-fc/applications/industrie/agro-alimentaire-agriculture/agro-alimentaire-et-agriculture-166 (2026-10-15) · « Rubriques « Boulangerie » et « Boucherie - charcuterie » parmi les applications agroalimentaires des séparateurs à graisses. »

### PREST_HUI_007 · Delho

equipementier · secteurs ['industrie_huiles', 'artisanat_alimentaire'] · départements national · statut publie

Entreprise girondine qui conçoit des équipements inox de prétraitement des eaux usées grasses, fabriqués par un atelier de tôlerie de la région bordelaise. Pour les industriels agroalimentaires, dont les huileries, elle propose des bacs séparateurs de graisses et un dégrilleur-débourbeur-régulateur de débit (DD-R) posé hors-sol sur le réseau, sans pompe ni électronique. Diagnostic technique et devis gratuits sur demande, matériel ensuite vendu.

- Mesures : ACT_HUI_007 [materiel], ACT_ART_006 [materiel+conseil_etude]
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
  - mesures : https://delho.fr/ (2026-10-15) · « « Restaurateurs, traiteurs, charcutiers, pâtissiers » ; « boulangers, pâtissiers, charcutiers, traiteurs » ; diagnostic technique gratuit. »
  - mesures : https://delho.fr/bac-a-graisses-sous-plonge-delho-gt-m/ (2026-10-15) · « Bac à graisses sous plonge. »

## Aides

### AIDE_AGR_004 · Prêt Vert BPI : Transition écologique

pret · secteurs tous · départements national · agences toutes · statut publie

Financeur : Bpifrance · Taux bonifié · plafond 100 000 €

Prêt sans garantie à taux réduit pour financer des projets de transition écologique, incluant la sobriété hydrique, le stockage d'eau et la modernisation des systèmes d'irrigation.

Éligibilité : PME et ETI de moins de 250 salariés, projet clairement identifié avec impact environnemental mesurable.

- Mesures : ACT_AGR_004, ACT_AGR_005, ACT_AGR_006, ACT_ART_004
- **ressource** : Bpifrance : Prêt Vert (https://bpifrance.fr)
- Sources :
  - aucune source

### AIDE_ART_001 · Subvention Prévention « Poussières de farine » (Assurance Maladie, risques professionnels)

subvention · secteurs ['artisanat_alimentaire'] · départements national · agences toutes · statut brouillon

Financeur : Assurance Maladie, risques professionnels (versée par la Carsat, la Cramif, la CGSS ou la CSS de votre région) · 70 % du montant HT des équipements · plafond Subvention minimale de 500 € (soit 715 € HT d'investissement). Plafond d'investissement subventionnable de 25 000 € HT sur la période 2023-2028 (ce n'est pas un montant maximal de subvention)

Aide de santé au travail, pas une aide eau : elle finance des équipements qui réduisent l'exposition des salariés aux poussières de farine (rhinites, asthme professionnel, dermatites). Parmi les équipements éligibles figurent les aspirateurs de boulangerie et pâtisserie adaptés aux poussières de farine et leurs accessoires, ainsi que les pétrins et batteurs-mélangeurs à capot plein, les diviseuses à faible émission et les farineurs. Dans Noé, elle est rattachée au nettoyage à sec parce que l'aspirateur de fournil permet de retirer la farine sans eau avant de laver.

Éligibilité : Entreprises et associations qui emploient entre 1 et 49 salariés (effectif national), cotisent au régime général comme employeur et sont à jour de leurs cotisations, en métropole et dans les DOM. L'employeur doit adhérer à un service de prévention et de santé au travail, avoir réalisé son document unique d'évaluation des risques (mis à jour depuis moins d'un an, sauf pour les entreprises de moins de 11 salariés) et ne pas avoir de contrat de prévention en cours ou dans les deux années précédentes.

- Mesures : ACT_ART_005
- **avertissement** : Réservée aux entreprises qui ont au moins un salarié : un artisan qui travaille seul, sans salarié, n'y a pas droit.
- **avertissement** : L'aspirateur doit être neuf, acheté en propre (pas de crédit-bail, de leasing ni de location longue durée) et conforme au cahier des charges : classe M ou H, conçu pour les poussières de farine combustibles, filtres et accessoires antistatiques. Le devis ou la facture doit mentionner la conformité au cahier des charges, et la même dépense ne doit pas être subventionnée par un autre financeur public.
- **info** : Le budget est limité et les demandes sont traitées par ordre d'arrivée : l'Assurance Maladie conseille la demande sur réservation, faite sur devis avant l'achat, plutôt que la demande directe après facture. La demande se fait en ligne sur net-entreprises.fr, rubrique Votre entreprise > Demander une subvention.
- **info** : Les conditions d'attribution indiquent que la subvention est en vigueur depuis le 1er septembre 2025, et le cahier des charges publié sur ameli.fr est daté d'octobre 2026 (lecture du 15 octobre 2026). Seuls les investissements de l'année en cours sont financés.
- **ressource** : Page de la subvention sur ameli.fr (https://www.ameli.fr/entreprise/sante-travail/prevention/aides-financieres/subventions-1-50-salaries/subventions-risques-chimiques/poussieres-de-farine)
- **ressource** : Cahier des charges des équipements éligibles, dont l'aspirateur de boulangerie et pâtisserie (https://www.ameli.fr/sites/default/files/Documents/Annexe%204%20-%20Cahier%20des%20charges%20-%20poussi%C3%A8res%20farines%20-%20octobre%202026.pdf)
- **ressource** : Dépôt de la demande sur net-entreprises.fr (https://www.net-entreprises.fr/)
- Sources :
  - description, mesures : https://www.ameli.fr/entreprise/sante-travail/prevention/aides-financieres/subventions-1-50-salaries/subventions-risques-chimiques/poussieres-de-farine (2026-10-15) · « La subvention permet de financer des équipements à faible émission de farine : pétrins à capot plein ; batteurs-mélangeurs à capot plein ; diviseuses à faible émission de farine [...] ; aspirateurs de boulangerie / pâtisserie adapté aux poussières de farine et ses accessoires ; farineurs manuel ou automatique. »
  - taux, plafond : https://www.ameli.fr/entreprise/sante-travail/prevention/aides-financieres/subventions-1-50-salaries/subventions-risques-chimiques/poussieres-de-farine (2026-10-15) · « 70 % du montant HT des sommes engagées pour les équipements, Le montant minimum de subvention est de 500 €. [...] (soit un investissement minimum de 715 € HT), à hauteur de 25 000 € HT maximum sur la période 2023-2028. »
  - eligibilite : https://www.ameli.fr/entreprise/sante-travail/prevention/aides-financieres/subventions-1-50-salaries/subventions-risques-chimiques/poussieres-de-farine (2026-10-15) · « La subvention s'adresse à toutes les entreprises de 1 à 49 salariés, quel que soit leur secteur d'activité. [...] adhérer à un service de santé au travail ; [...] ne pas bénéficier d'un contrat de prévention en cours, ni en avoir bénéficié aux cours des deux années précédant la demande »
  - eligibilite, financeur, departements : https://www.ameli.fr/sites/default/files/Documents/Conditions%20d%27attribution_poussieres_farine_202610%20et%20annexe1.pdf (2026-10-15) · « sociétés et associations (les organismes de la fonction publique sont exclus), implantées sur l'ensemble du territoire, en France Métropolitaine et dans les DOM, cotisant au régime général de la Sécurité Sociale en tant qu'employeur, avec un effectif national compris entre 1 et 49 salariés (selon le SIREN). Versées par les caisses régionales (Carsat, Cramif ou CGSS/CSS). »
  - eligibilite (document unique) : https://www.ameli.fr/sites/default/files/Documents/Conditions%20d%27attribution_poussieres_farine_202610%20et%20annexe1.pdf (2026-10-15) · « avoir réalisé et mis à jour son document unique d'évaluation des risques (DUER) depuis moins de 1 an (les entreprises de moins de 11 salariés sont exonérées de cette obligation de mise à jour annuelle) »
  - infos_complementaires (salariés) : https://www.ameli.fr/sites/default/files/Documents/Conditions%20d%27attribution_poussieres_farine_202610%20et%20annexe1.pdf (2026-10-15) · « Le terme « Entreprise » employé dans ce document s'entend par toute entité économique employant des salariés (y compris les associations). »
  - infos_complementaires (conditions d'achat, cumul, ouverture) : https://www.ameli.fr/sites/default/files/Documents/Conditions%20d%27attribution_poussieres_farine_202610%20et%20annexe1.pdf (2026-10-15) · « Cette subvention est en vigueur au 1er septembre 2025. [...] les investissements de l'année en cours, des équipements neufs [...] (pas de financement possible par crédit-bail, leasing ou sous la forme d'une location de longue durée) [...] ne sollicitera pas une subvention auprès d'un autre opérateur public pour le même investissement. »
  - infos_complementaires (démarche) : https://www.ameli.fr/sites/default/files/Documents/Conditions%20d%27attribution_poussieres_farine_202610%20et%20annexe1.pdf (2026-10-15) · « Les budgets annuels étant limités, une règle privilégiant les demandes selon l'ordre chronologique d'arrivée est appliquée, il est donc fortement conseillé d'opter pour la réservation en ligne. »
  - infos_complementaires (cahier des charges de l'aspirateur) : https://www.ameli.fr/sites/default/files/Documents/Annexe%204%20-%20Cahier%20des%20charges%20-%20poussi%C3%A8res%20farines%20-%20octobre%202026.pdf (2026-10-15) · « Version Octobre 2026. L'aspirateur doit être : destiné à l'aspiration de poussières de farine, de classe M (ou H) suivant la norme NF EN 60335-2-69 : 2012, [...] conçu pour l'aspiration de poussières combustibles, équipé de filtres et d'accessoires (flexible, canne...) antistatiques »
  - logo_url : https://www.ameli.fr/apple-touch-icon.png (2026-10-15) · « Icône carrée du site ameli.fr (57 x 57 px) »

### AIDE_ART_002 · IND2, opérations groupées sectorielles (agence de l'eau Rhône Méditerranée Corse, 12e programme)

subvention · secteurs ['artisanat_alimentaire'] · départements national · agences ['AERMC'] · statut brouillon

Financeur : Agence de l'eau Rhône Méditerranée Corse · Taux maximum pour les travaux : de 40 à 70 % selon la taille de l'entreprise, jusqu'à 70 % pour une petite ou moyenne entreprise aidée au titre du règlement de minimis. Le taux réel est fixé pour chaque opération avec l'agence. · plafond Pas de plafond par entreprise publié. L'AMI 2025 limite l'aide aux investissements à 1 M€ par opération groupée, pour l'ensemble des entreprises qu'elle accompagne, montant qui peut être complété pendant les 3 ans de l'opération selon les crédits disponibles.

Fiche aide IND2 du 12e programme de l'agence de l'eau Rhône Méditerranée Corse (délibération 2024-59). Quand l'économie d'eau possible est inférieure à 2 000 m3 par an et par site, ce qui devrait être le cas de la plupart des laboratoires artisanaux (estimation, la source ne le dit pas), l'agence n'aide pas l'entreprise seule : elle passe par une opération groupée, portée à l'échelle d'une branche ou d'une filière par une fédération, un syndicat professionnel, une chambre consulaire ou une association. Le porteur anime l'opération, réalise ou suit les diagnostics sur site, conseille les entreprises et les accompagne dans le dépôt de leur demande d'aide. Les entreprises volontaires sont ensuite aidées pour leurs travaux d'économie d'eau : réduction des fuites sur les réseaux, technologies économes (changement de process, recyclage, modernisation des équipements, dispositifs hydro-économes), réutilisation de l'eau sur le site et récupération des eaux pluviales. La fiche couvre aussi la réduction des micropolluants dispersés, mais pas celle des macropolluants (matières en suspension, DCO, DBO5, COT, azote, phosphore, chlorures).

Éligibilité : Entreprises non agricoles situées sur les bassins Rhône-Méditerranée et de Corse, accompagnées dans une opération groupée sectorielle retenue par l'agence. Un artisan ne dépose pas seul : il faut que son métier et son territoire soient couverts par une opération en cours, portée par sa chambre de métiers, une fédération ou une association.

- Mesures : ACT_ART_003, ACT_ART_004, ACT_AGR_006
- **avertissement** : Les projets déjà engagés sont exclus, et la demande d'aide doit être transmise à l'agence avant l'engagement des travaux, faute de quoi elle est rejetée. Ne commandez rien avant que le porteur de l'opération vous ait accompagné dans le dépôt de votre demande.
- **avertissement** : Ne sont pas aidés : la pose de compteurs et de vannes de sectorisation, les outils fixes de détection de fuite et les outils de pilotage ou de télégestion installés seuls, le renouvellement à l'identique, la réduction des macropolluants (matières en suspension, DCO, DBO5, COT, azote, phosphore, chlorures), les projets liés à une création ou à un accroissement d'activité, et, pour les activités artisanales, les travaux qui ont reçu un avis négatif du centre de référence du métier. Les graisses relevant de la pollution organique, un séparateur à graisses n'entre pas, selon notre lecture, dans ce dispositif.
- **avertissement** : Le coût prévisionnel du projet présenté dans la demande d'aide doit dépasser 5 000 € pour les actions des opérations groupées sectorielles. Un petit achat isolé, quelques mousseurs par exemple, n'atteint pas ce seuil : regroupez vos travaux d'économie d'eau dans un même projet.
- **info** : L'agence peut ne retenir qu'une partie des dépenses d'un projet qui présente un double enjeu, économique et environnemental, ou dont les coûts liés à la protection de l'environnement ne sont pas individualisables. Cela peut concerner le remplacement d'un équipement de froid refroidi à eau perdue, qui sert aussi la production : seule une partie de la dépense serait alors retenue.
- **info** : Situation au 15 octobre 2026 : l'appel à manifestation d'intérêt de 2025 est clos. Ses 19 lauréats ont été publiés en mars 2026, parmi lesquels la chambre de métiers et de l'artisanat Auvergne-Rhône-Alpes et la CCI Auvergne-Rhône-Alpes (sobriété en eau, multisectoriel), la CCI Bourgogne-Franche-Comté (secteurs dont l'agroalimentaire et le tourisme), un groupement CCI, CMA et AREA en Occitanie (sobriété en eau, agroalimentaire), ces quatre opérations étant limitées à la partie de leur région située sur le bassin Rhône-Méditerranée, et un groupement CCI et CRITT agroalimentaire en Provence-Alpes-Côte d'Azur (sobriété en eau, agroalimentaire). Les demandes d'aide pour les travaux se déposent sur le portail de l'agence jusqu'au 31 décembre 2028. Le règlement annonce d'autres appels courant 2026 ou 2027, en fonction de la dynamique des deux premières vagues. Demandez à votre chambre de métiers si votre métier entre dans son opération.
- **info** : Au-delà de 2 000 m3 d'économie d'eau par an sur un site, l'agence accompagne l'entreprise de manière individuelle, hors opération groupée.
- **info** : L'aide est accordée en priorité au titre du règlement de minimis, avec des taux maximum de 70 % des travaux pour une petite ou moyenne entreprise et de 40 % pour une grande. Si votre plafond de minimis est déjà atteint, elle passe par le régime d'aides à la protection de l'environnement, à un taux maximum de 40 à 60 % selon la taille. Le règlement précise qu'en cas de renouvellement le taux est divisé par deux : la phrase figure dans la case du régime exempté, et rien ne dit si elle vaut aussi en de minimis. Faites-le préciser par le porteur de l'opération.
- **ressource** : Conditions générales d'attribution et de versement des aides du 12e programme (délibération 2024-77) (https://www.eaurmc.fr/upload/docs/application/pdf/2025-02/conditions-generales.pdf)
- **ressource** : Fiche aide IND2, opérations groupées sectorielles (délibération 2024-59) (https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf)
- **ressource** : Bilan de l'appel à manifestation d'intérêt sur le site de l'agence (https://www.eaurmc.fr/jcms/pro_131706/fr/bilan-de-l-ami-operations-groupees-sectorielles-reduction-des-emissions-dispersees-de-micropolluants-et/ou-realisation-d-economies-d-eau)
- **ressource** : Liste des lauréats (mars 2026) (https://www.eaurmc.fr/upload/docs/application/pdf/2026-03/liste_des_laureats_ami_sectoriel.pdf)
- **ressource** : Règlement de l'appel à manifestation d'intérêt (modifié le 7 novembre 2025) (https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf)
- Sources :
  - nom, description : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf (2026-10-15) · « Version 1 adoptée par le conseil d'administration du 19 décembre 2024. Délibération 2024-59. IND2 - Opérations groupées sectorielles. TYPE D'ACTIONS : Réductions des émissions dispersées de micropolluants, à l'échelle d'une branche ou d'une filière professionnelle. Économies d'eau, à l'échelle d'une branche ou d'une filière professionnelle. »
  - taux : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf (2026-10-15) · « Dans le cadre d'appel(s) à projets [...] Travaux visant à réduire les émissions dispersées de micropolluants et/ou les consommations d'eau, à l'échelle d'une branche ou d'une filière professionnelle : 40 à 70%* [...] *Selon la taille de l'entreprise »
  - taux, infos_complementaires (de minimis, régime exempté, renouvellement) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « Les taux d'aide maximum sont les suivants : [...] Elles sont accordées prioritairement au titre du règlement de minimis. Si ce n'est pas possible (plafond des aides de minimis déjà atteint par l'entreprise par exemple), l'aide sera attribuée au titre du régime cadre exempté de notification n°SA.111726 [...] Travaux aidés au titre du règlement de minimis : 40% pour les grandes entreprises, 70% pour les petites et moyennes entreprises. Travaux aidés au titre du régime exempté : 40 % à 60% en fonction de la taille de l'entreprise. En cas de renouvellement, le taux d'aide est divisé par deux. »
  - plafond (1 M€ par opération, complément possible pendant 3 ans) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « Chaque opération est accompagnée dans les limites suivantes : un financement de missions d'animation correspondant à 2 ETP par an maximum ; un financement des investissements jusqu'à concurrence d'1 M€ d'aide au total (montant d'aide pouvant être complété au cours des 3 ans de l'opération, sous réserve de disponibilité financière [...]). »
  - description, eligibilite, infos_complementaires (seuil de 2 000 m3, porteurs) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « Lorsque [...] l'économie d'eau potentielle est supérieure à 2000 m3/an sur un site donné, l'agence accompagne les maitres d'ouvrage de manière individuelle. Lorsque [...] l'économie d'eau potentielle est inférieure à 2000 m3/an par site, l'agence accompagne les projets sous forme d'opérations groupées [...] en ciblant prioritairement les petites et moyennes entreprises industrielles et artisanales. [...] les fédérations et syndicats de professionnels ; les chambres consulaires ; les associations... »
  - eligibilite, description (bénéficiaires, territoire, animation) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf (2026-10-15) · « BÉNÉFICIAIRES ÉLIGIBLES [...] Pour les travaux : acteurs économiques non agricoles (industries, sociétés, entreprises...). TERRITOIRES ÉLIGIBLES : Tous les territoires des bassins Rhône-Méditerranée et de Corse. [...] Animation par la structure porteuse de l'opération groupée sectorielle et par les partenaires associés. Cela inclut les missions nécessaires pour réaliser ou suivre des études (état des lieux, diagnostics sur site...), pour conseiller les entreprises et les accompagner dans le dépôt de leur demande d'aide. »
  - description, mesures (ACT_ART_003 : dispositifs hydro-économes ; ACT_ART_004 : changement de process, recyclage, modernisation des équipements ; ACT_AGR_006 : récupération des eaux pluviales) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf (2026-10-15) · « Travaux d'économies d'eau : Actions de réduction des pertes en eau : réduction des fuites sur les réseaux, gestion de la pression. Mise en œuvre de technologies économes en eau : changement de process, recyclage, régulation, modernisation des réseaux et des équipements, dispositifs de pilotage, télégestion et sectorisation incluant des dispositifs hydro-économes et des compteurs. Mise en œuvre de technologie pour traiter l'eau usée pour une réutilisation, recyclage, réemploi sur le site industriel en lien avec des économies d'eau. Dispositifs de récupération des eaux pluviales. »
  - infos_complementaires (dépenses non éligibles) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf (2026-10-15) · « ACTIONS ET DÉPENSES NON ÉLIGIBLES [...] Pose de compteurs et vannes de sectorisation, outils fixes de détection de fuite, outils de pilotage/télégestion seuls. Projets en lien avec des pollutions nouvelles (création ou accroissement d'activité). [...] Renouvellement à l'identique. [...] Pour les activités artisanales, les travaux ayant fait l'objet d'un avis négatif du ou des centres de référence du secteur d'activité concerné. »
  - description, infos_complementaires (macropolluants, projets engagés) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « La réduction des macropolluants (MES, DCO, DBO5, COT, azote, phosphore, chlorures...) et la réduction des pollutions de l'air et des sols n'entrent pas dans le champ de l'appel à manifestation d'intérêt. [...] Sont exclus de l'appel à manifestation d'intérêt : les projets déjà engagés ; les projets qui concernent des bâtiments neufs ou en lien avec des activités nouvelles (création ou accroissement d'activité) ; les projets de réduction des rejets de macropolluants ; [...] le renouvellement à l'identique »
  - infos_complementaires (calendrier, dépôt des demandes de travaux, futurs AMI) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « l'appel à manifestation d'intérêt comporte deux vagues de sélection en 2025. De plus, d'autre(s) appel(s) à manifestation d'intérêt seront engagés par l'agence courant 2026 ou 2027 en fonction de la dynamique des deux premières vagues. [...] Date limite de dépôt de la lettre d'intention : 5 septembre 2025 / 5 novembre 2025 [...] Dépôt des demandes d'aides de travaux sur le portail de l'agence : Jusqu'au 31 décembre 2028 »
  - infos_complementaires (statut 2026 : AMI clos, 19 lauréats) : https://www.eaurmc.fr/jcms/pro_131706/fr/bilan-de-l-ami-operations-groupees-sectorielles-reduction-des-emissions-dispersees-de-micropolluants-et/ou-realisation-d-economies-d-eau (2026-10-15) · « Bilan de l'AMI "Opérations groupées sectorielles [...]" L'appel à manifestation d'intérêt de l'agence de l'eau était doté d'une enveloppe de 20 M€. [...] 19 lauréats vont pouvoir bénéficier des aides de l'agence de l'eau. [...] 2 opérations en Bourgogne-Franche-Comté, 3 en Auvergne-Rhône-Alpes, 4 en Provence-Alpes-Côte d'Azur, 4 en Occitanie et 6 à une échelle supra-régionale. [...] Pour les entreprises : les travaux liés à la réduction des micropolluants et les travaux liés à la sobriété en eau : jusqu'à 40% pour les grandes entreprises et jusqu'à 70% pour les petites et moyennes entreprises. »
  - infos_complementaires (lauréats CMA, CCI et groupements agroalimentaires) : https://www.eaurmc.fr/upload/docs/application/pdf/2026-03/liste_des_laureats_ami_sectoriel.pdf (2026-10-15) · « mars 2026. Appel à manifestation d'intérêt : opérations groupées sectorielles. Lauréats. [...] Chambre de métiers et de l'artisanat (CMA) AURA, AURA*, Sobriété en eau, Multisectoriel. Chambre de commerce et d'industrie (CCI) AURA, AURA*, Sobriété en eau, Réduction des micropolluants dispersés, Multisectoriel. [...] Chambre de commerce et d'industrie (CCI) BFC, BFC*, Sobriété en eau, Réduction des micropolluants dispersés, Traitement de surface, horlogerie, mécanique industrielle, Agroalimentaire, Tourisme. [...] Réseau des chambres de commerce et d'industrie (CCI) PACA / Centre régional d'innovation et de transfert de technologies agroalimentaires (CRITT agroalimentaire) PACA, PACA, Sobriété en eau, Agroalimentaire. [...] Chambre de commerce et d'industrie (CCI) Occitanie / Chambre de métiers et de l'artisanat (CMA) Occitanie / Association régionale des entreprises alimentaires (AREA) Occitanie, Occitanie*, Sobriété en eau, Agroalimentaire. [...] *limité à la partie de la région située sur le bassin Rhône Méditerranée »
  - type, infos_complementaires (dépôt avant engagement) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-02/conditions-generales.pdf (2026-10-15) · « Délibération 2024-77. Conditions générales d'attribution et de versement des aides. [...] Une demande d'aide doit être formellement transmise à l'agence avant l'engagement du projet considéré. Le non-respect de cette disposition entraîne le rejet de la demande d'aide, sauf dans les cas suivants : accord écrit préalable de l'agence pour engager les travaux avant le dépôt formel de la demande ; [...] »
  - infos_complementaires (plancher de 5 000 €) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-02/conditions-generales.pdf (2026-10-15) · « Montant minimum du projet. Le coût prévisionnel du projet présenté dans la demande d'aide doit être supérieur à 10 000 €. Dans les cas suivants, le coût prévisionnel minimal est limité à 5 000 € : [...] actions des opérations groupées sectorielles ; »
  - infos_complementaires (prise en compte partielle, ACT_ART_004) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « L'agence se réserve le droit de ne retenir qu'une partie des dépenses de l'opération proposée dans les cas suivants : projet présentant un double enjeu (économique et environnemental, sanitaire et environnemental...) ; projet dont les coûts liés à la protection de l'environnement ne sont pas individualisables. »
  - taux (taux maximum, fixés par opération en phase 2) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « À l'issue du jury de sélection débute une phase 2 de rencontre et d'échanges entre le porteur du projet sélectionné et l'agence de l'eau. Cette phase permet d'affiner le projet, de définir précisément les modalités d'aide (actions retenues, taux d'aide et organisation administrative). »
  - logo_url : https://www.eaurmc.fr/upload/docs/image/png/2023-10/logo_ae_aout2020_web.png (2026-10-15) · « Logo de l'agence de l'eau Rhône Méditerranée Corse, page d'accueil de eaurmc.fr »

### AIDE_ART_003 · Diagnostic eau gratuit des artisans (CMA Auvergne-Rhône-Alpes, agences de l'eau Rhône Méditerranée Corse et Loire-Bretagne)

accompagnement · secteurs ['artisanat_alimentaire'] · départements ['01', '03', '07', '15', '26', '38', '42', '43', '63', '69', '73', '74'] · agences toutes · statut brouillon

Financeur : Agence de l'eau Rhône Méditerranée Corse et agence de l'eau Loire-Bretagne, avec la CMA Auvergne-Rhône-Alpes · Entièrement pris en charge : 0 € TTC pour l'entreprise · plafond Un diagnostic de 4 heures maximum sur site, rendu et suivi à un an par téléphone

Un conseiller de la CMA se déplace dans votre entreprise pour faire le bilan de vos consommations d'eau : postes d'usage (production, nettoyage, sanitaires), équipements, pratiques quotidiennes, fuites éventuelles et coût de l'eau. Il évalue la consommation par poste, puis vous présente un plan d'action visant à réduire d'au moins 20 % vos consommations, avec les économies et les aides disponibles. Un suivi à un an fait le point sur ce qui a été engagé. Le diagnostic a été conçu avec les agences de l'eau Rhône Méditerranée Corse et Loire-Bretagne, qui le prennent en charge avec la CMA.

Éligibilité : Artisans et chefs d'entreprise artisanale d'Auvergne-Rhône-Alpes, sans prérequis. La CMA cite les métiers de bouche (boulangerie, boucherie, traiteur) parmi les activités visées.

- Mesures : ACT_AGR_002
- **info** : La réservation se fait depuis la fiche du catalogue de la CMA (bouton « Je réserve »). Vous pouvez aussi demander à être rappelé gratuitement par un conseiller CMA, du lundi au vendredi de 8h30 à 16h30, ou vous adresser à l'agence CMA de votre département.
- **info** : Le livrable est un état des lieux et un plan d'actions. Le rendu du diagnostic et le suivi à un an se font lors de rendez-vous téléphoniques.
- **info** : La fiche du catalogue consultée le 15 octobre 2026 est datée du 28 octobre 2024 et ne mentionne pas de date de fin du dispositif : vérifiez sa disponibilité au moment de réserver.
- **ressource** : Fiche « Réaliser le bilan de vos consommations d'eau » du catalogue de la CMA Auvergne-Rhône-Alpes (https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/)
- **ressource** : Article de la CMA « Métiers de bouche : comment réduire vos factures d'eau ? » (https://www.cma-auvergnerhonealpes.fr/actualites/metiers-de-bouche-comment-reduire-vos-factures-deau/)
- **ressource** : Guide de la CMA pour réduire la consommation d'eau dans les métiers de bouche, conçu avec les agences de l'eau Loire-Bretagne et Rhône Méditerranée Corse (https://www.cma-auvergnerhonealpes.fr/app/uploads/2026/02/guide-economie-deau-metiers-de-bouche.pdf)
- Sources :
  - taux, plafond, type : https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/ (2026-10-15) · « Diagnostic 4 heures Individuel 0€ TTC [...] Le diagnostic est réalisé en 4 heures maximum et est réalisé sur le site de l'entreprise. Le rendu du diagnostic et le suivi à 1 an seront effectués lors de rendez-vous téléphoniques »
  - description, mesures, categories : https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/ (2026-10-15) · « Visite sur site de l'entreprise portant sur les consommations, les postes d'usage de l'eau, les équipements consommateurs, le coût de vos consommations [...] Réalisation d'un diagnostic pour évaluer votre consommation par poste. Etablissement d'un plan d'action avec des solutions visant à réduire d'au moins 20% vos consommations et dégager des économies et aides disponibles [...] Le diagnostic fait l'objet d'un suivi à 1 an »
  - financeur : https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/ (2026-10-15) · « En partenariat avec : [logos de l'agence de l'eau Rhône Méditerranée Corse et de l'agence de l'eau Loire-Bretagne] »
  - financeur, taux : https://www.cma-auvergnerhonealpes.fr/actualites/reduisez-vos-factures-deau-avec-la-cma/ (2026-10-15) · « Un programme pour aider les artisans a été imaginé en partenariat avec deux agences de l'eau : Rhône Méditerranée Corse et Loire- Bretagne. [...] Le diagnostic est entièrement pris en charge par votre CMA et votre agence de l'eau. »
  - eligibilite : https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/ (2026-10-15) · « Pour qui ? Artisan, chef d'entreprise. Prérequis : Aucun »
  - eligibilite, description : https://www.cma-auvergnerhonealpes.fr/actualites/metiers-de-bouche-comment-reduire-vos-factures-deau/ (2026-10-15) · « Restaurant, boulangerie, boucherie, poissonnerie, traiteur… [...] Un conseiller CMA se déplace dans votre établissement [...] Il analyse : Vos postes de consommation (production, nettoyage, sanitaires…) Vos équipements [...] Vos pratiques quotidiennes. Les éventuelles pertes ou fuites invisibles. Ce diagnostic, accessible à tous les artisans, est entièrement financé par votre CMA et l'agence de l'eau. »
  - departements : https://www.cma-auvergnerhonealpes.fr/cma/ (2026-10-15) · « Avec 24 agences réparties dans toute la région [...] CMA Ain, CMA Allier, CMA Ardèche, CMA Cantal, CMA Drôme, CMA Haute-Loire, CMA Haute-Savoie, CMA Isère, CMA Loire, CMA Lyon-Rhone, CMA Puy-de-Dôme, CMA Savoie »
  - infos_complementaires : https://www.cma-auvergnerhonealpes.fr/catalogue/realiser-le-bilan-de-vos-consommations-deau/ (2026-10-15) · « Je réserve [...] Livrables liés au produit : Diagnostic constitué d'un état des lieux et d'un plan d'actions [...] Mise à jour le 28 octobre 2024. Besoin d'être rappelé par un conseiller ? [...] du lundi au vendredi, de 8h30 à 16h30. Rappel gratuit »
  - infos_complementaires : https://www.cma-auvergnerhonealpes.fr/actualites/metiers-de-bouche-comment-reduire-vos-factures-deau/ (2026-10-15) · « la CMA Auvergne-Rhône-Alpes vous propose un guide dédié aux métiers de bouche, conçu avec les agences de l'eau Loire-Bretagne et Rhône-Méditerranée-Corse. [...] Je découvre le guide »
  - logo_url : https://www.eaurmc.fr/upload/docs/image/png/2023-10/logo_ae_aout2020_web.png (2026-10-15) · « Logo de l'agence de l'eau Rhône Méditerranée Corse, pris sur eaurmc.fr »

### AIDE_ART_005 · Prise en charge des formations des salariés par Opco EP (plan de développement des compétences des entreprises de moins de 50 salariés et catalogue Sélexion)

subvention · secteurs ['artisanat_alimentaire'] · départements national · agences toutes · statut brouillon

Financeur : Opco EP, opérateur de compétences des entreprises de proximité · Plan de développement des compétences : coûts pédagogiques pris en charge selon le barème horaire et la durée maximale fixés par votre branche (en boulangerie, thème « Transition écologique et énergétique » : 40 € HT/h, 14 h au plus). Catalogue Sélexion : 100 % des coûts pédagogiques pour les entreprises de moins de 50 salariés · plafond Plafond par entreprise pour 2026, fixé par la branche : boulangerie 3 500 € HT (moins de 50 salariés) ; charcuterie de détail 3 500 € HT (moins de 11 salariés) ou 7 000 € HT (11 à 49 salariés) ; pâtisserie 2 000 € HT (moins de 11 salariés) ou 3 000 € HT (11 à 49 salariés). Dans la limite des fonds disponibles

Opco EP finance, sur les critères définis par chaque branche professionnelle, les actions de formation que l'employeur prévoit pour ses salariés dans son plan de développement des compétences. Les trois branches de l'artisanat alimentaire visées relèvent d'Opco EP : boulangerie-pâtisserie artisanale, charcuterie de détail et pâtisserie. Chaque branche publie une plaquette 2026 qui liste les thèmes finançables, le coût horaire retenu et la durée maximale ; celle de la boulangerie comporte un thème « Transition écologique et énergétique ». En complément, le catalogue Sélexion propose des formations de proximité sélectionnées par Opco EP, financées à 100 % pour les entreprises de moins de 50 salariés, dont une thématique « Transition écologique & énergétique ». Les pages consultées ne citent pas de formation consacrée à l'eau.

Éligibilité : Entreprises de moins de 50 salariés relevant du champ d'Opco EP, dont celles des conventions collectives de la boulangerie-pâtisserie artisanale (IDCC 0843), de la charcuterie de détail (IDCC 0953) et de la pâtisserie (IDCC 1267). La formation bénéficie aux salariés et doit être dispensée par un organisme certifié Qualiopi.

- Mesures : ACT_ART_001
- **avertissement** : La demande de prise en charge d'une formation qui se déroule dans l'année doit parvenir à Opco EP au plus tard le 30 novembre de cette année : une demande déposée l'année suivante est refusée. Pour être sûr d'avoir la réponse avant le départ en formation, déposez-la au moins un mois avant le début de l'action. (https://www.opcoep.fr/ressources/centre-ressources/juridique/conditions-generales-gestion-controle-opcoep.pdf)
- **avertissement** : Opco EP ne finance que les formations dispensées par un organisme certifié Qualiopi. Vérifiez la certification de l'organisme avant de signer le devis. (https://www.opcoep.fr/ressources/centre-ressources/juridique/conditions-generales-gestion-controle-opcoep.pdf)
- **avertissement** : Un intitulé de formation absent de la plaquette de votre branche n'est pas financé, pas plus que la formation en situation de travail (AFEST) ; en boulangerie et en charcuterie de détail, la formation à distance est aussi exclue. Une action de moins de 140 heures doit tenir sur trois mois au plus, avec des dates précises, sinon la demande est refusée. Les demandes sont servies dans la limite des fonds disponibles, et les critères peuvent évoluer avant l'accord du dossier.
- **info** : Pour une formation aux gestes économes en eau, le catalogue Sélexion propose « Mettre en œuvre les Eco-gestes » (thématique « Transition écologique et énergétique », 7 heures, ouverte aux salariés de toutes les branches d'Opco EP). Ce n'est pas une formation propre aux métiers de bouche, et l'eau n'y est qu'un thème parmi d'autres (énergie, déchets, transports) : le programme de l'organisme RH Reflex prévoit des « techniques pour réduire la consommation d'eau », celui d'Impuls'ions cite l'eau parmi ses thématiques. Hors Sélexion, rattacher une formation sur l'eau au thème « Transition écologique et énergétique » de la plaquette boulangerie est une piste à valider avec votre conseiller Opco EP ; les plaquettes 2026 de la charcuterie de détail et de la pâtisserie ne comportent pas de thème environnemental. (https://acces-formation.opcoep.fr/formation/mettre-en-%C5%93uvre-les-eco-gestes-4645)
- **info** : Une actualité Opco EP du 20 février 2026 annonce une enveloppe « Entreprises, soutien à la formation » pour les entreprises de moins de 50 salariés qui n'ont pas eu recours à un financement formation depuis le 1er janvier 2023 : formations réalisées entre le 1er janvier et le 31 décembre 2026, demande déposée au plus tard le 30 novembre 2026, prise en charge sous réserve de fonds disponibles. Votre conseiller Opco EP vous accompagne jusqu'au dépôt de la demande ; contactez-le pour un rendez-vous préalable. (https://www.opcoep.fr/actualites/opco-ep-soutient-et-favorise-l-acces-a-la-formation-des-petites-entreprises)
- **info** : La demande se dépose sur l'espace « Mes services en ligne » d'Opco EP. Les formations Sélexion se réservent directement en ligne sur le catalogue, après création d'un compte.
- **ressource** : Critères de financement 2026 de la branche Boulangerie (https://www.opcoep.fr/criteres-de-financement?branche=208)
- **ressource** : Critères de financement 2026 de la branche Charcuterie de détail (https://www.opcoep.fr/criteres-de-financement?branche=202)
- **ressource** : Critères de financement 2026 de la branche Pâtisserie (https://www.opcoep.fr/criteres-de-financement?branche=177)
- **ressource** : Présentation du catalogue Sélexion sur le site d'Opco EP (https://www.opcoep.fr/entreprise/offre-de-services/selexion)
- **ressource** : Espace « Mes services en ligne » pour déposer une demande de financement (https://messervicesenligne.opcoep.fr/)
- Sources :
  - eligibilite (rattachement des branches, IDCC) : https://www.opcoep.fr/branches-professionnelles (2026-10-15) · « IDCC 0843 Boulangerie-pâtisserie (entreprises artisanales) [...] IDCC 0953 Charcuterie de détail [...] IDCC 1267 Pâtisserie »
  - description, eligibilite : https://www.opcoep.fr/entreprise/former-mes-salaries (2026-10-15) · « Opco EP peut prendre en charge, selon les critères de financement en vigueur dans votre secteur d'activité, les actions prévues dans le plan de développement des compétences des entreprises de moins de 50 salariés. »
  - taux, plafond, description, infos_complementaires, mesures (ACT_ART_001) : https://www.opcoep.fr/criteres-de-financement?branche=208 (2026-10-15) · « Critères de financement par dispositifs applicables en 2026 [...] Mise à jour : 01/10/2026 [...] Le plan de développement des compétences regroupe l'ensemble des actions de formation à l'initiative de l'employeur au bénéfice de ses salariés. [...] Plafonds de financement entreprise : Moins de 50 salariés : 3 500 € HT [...] Pas de financement : Formation en distanciel, Action de formation en situation de travail (AFEST), Intitulés de formation non mentionnés dans la plaquette [...] Transition écologique et énergétique, Durée maximale de prise en charge : 14 h, Coût pédagogique : 40 € HT/h »
  - plafond, infos_complementaires : https://www.opcoep.fr/criteres-de-financement?branche=202 (2026-10-15) · « Plafonds de financement entreprise : 3 500 € HT pour les entreprises de moins de 11 salariés, 7 000 € HT pour les entreprises de 11 à 49 salariés. Pas de financement : Formations en distanciel, Action de formation en situation de travail (AFEST), Intitulés de formation non mentionnés dans la plaquette. »
  - plafond, infos_complementaires : https://www.opcoep.fr/criteres-de-financement?branche=177 (2026-10-15) · « Les actions formation de moins de 140 heures ne peuvent s'étaler sur une période supérieure à 3 mois et les dates de formation précises doivent être renseignées. [...] Pas de financement : Action de formation en situation de travail (AFEST), Intitulés de formation non mentionnés dans la plaquette. Plafond de financement entreprise : 2 000 € HT pour les entreprises de moins de 11 salariés, 3 000 € HT pour les entreprises de 11 à 49 salariés »
  - plafond, infos_complementaires (fonds disponibles) : https://www.opcoep.fr/criteres-de-financement?branche=208 (2026-10-15) · « Compte tenu du budget PDC-50 contraint, les critères de financement peuvent évoluer entre la demande de financement et l'approbation du dossier par les services d'Opco EP. [...] Toutes les demandes de prise en charge se font dans la limite des fonds disponibles. »
  - taux, description, infos_complementaires (Sélexion), mesures (ACT_ART_001) : https://www.opcoep.fr/entreprise/offre-de-services/selexion (2026-10-15) · « Pour qui ? Tous les salariés des entreprises de moins de 50 salariés relevant du champ d'intervention d'Opco EP. Quelles formations ? Un catalogue de 36 formations couvrant 6 thématiques principales : [...] Transition écologique & énergétique [...] En 2026, les formations sont financées à 100% pour les entreprises de moins de 50 salariés. [...] Quelles démarches ? Directement depuis selexion.opcoep.fr [...] Créez votre compte ou connectez-vous [...] Inscrivez vos salariés en ligne »
  - infos_complementaires (date limite, délai d'un mois) : https://www.opcoep.fr/ressources/centre-ressources/juridique/conditions-generales-gestion-controle-opcoep.pdf (2026-10-15) · « Conditions générales de gestion et de contrôle 2026 [...] au moins un mois avant la date de début de l'action de formation, si l'entreprise souhaite une garantie de réponse [...] toute demande de prise en charge d'action se déroulant sur l'année N, doit parvenir à Opco EP au plus tard le 30 novembre de l'année N [...] Toute demande de prise en charge d'une action comportant des dates de réalisation l'année N sera refusée en N+1 »
  - eligibilite, infos_complementaires (Qualiopi) : https://www.opcoep.fr/ressources/centre-ressources/juridique/conditions-generales-gestion-controle-opcoep.pdf (2026-10-15) · « À compter du 1er janvier 2022, les prestataires d'actions concourant au développement des compétences financés par des fonds publics ou mutualisés de la formation professionnelle doivent être détenteurs de la certification Qualiopi »
  - infos_complementaires (Entreprises, soutien à la formation) : https://www.opcoep.fr/actualites/opco-ep-soutient-et-favorise-l-acces-a-la-formation-des-petites-entreprises (2026-10-15) · « 20/02/2026 [...] « Entreprises - Soutien à la formation » est mobilisable par les entreprises qui n'ont pas eu recours à un financement formation depuis le 1er janvier 2023. [...] Opco EP prend en charge, sous réserve de fonds disponibles, les formations prévues dans le Plan de Développement des Compétences de votre entreprise [...] Les formations doivent être dispensées par un prestataire de formation externe, référencé Qualiopi. Les actions de formation doivent être réalisées entre le 01/01/2026 et le 31/12/2026. La date limite de dépôt de votre demande est fixée au 30/11/2026. Votre conseiller Opco EP vous accompagne de l'identification de votre besoin en formation jusqu'au dépôt de votre demande de financement. Contactez-le dès maintenant pour un rendez-vous préalable. »
  - infos_complementaires (démarche) : https://www.opcoep.fr/ (2026-10-15) · « Demander un financement et suivre mon activité formation et alternance (lien vers https://messervicesenligne.opcoep.fr/) [...] Entreprise de moins de 50 salariés : Consulter Sélexion, le catalogue de formations sélectionnées par Opco EP »
  - mesures (ACT_ART_001), infos_complementaires : https://acces-formation.opcoep.fr/formation/mettre-en-%C5%93uvre-les-eco-gestes-4645 (2026-10-15) · « Transition écologique et énergétique. Mettre en œuvre les Eco-gestes. OBJECTIFS : Identifier les écogestes pertinents pour la pratique professionnelle, les intégrer dans le quotidien, être en mesure d'en apprécier les effets, les promouvoir en interne. Public concerné : Les collaborateurs d'entreprises relevant d'Opco EP. »
  - mesures (ACT_ART_001), infos_complementaires : https://acces-formation.opcoep.fr/file.get?path=doc/programmes/selexion/teepresentiel/rhreflex/selexion_norm_rhreflex_mettreenoeuvrelesecogestes.pdf (2026-10-15) · « Intitulé du module : Mettre en œuvre les Eco-gestes [...] Gestion de l'eau : Techniques pour réduire la consommation d'eau. [...] Public visé : Sont concernées les salariés des 54 branches professionnelles et l'interprofession relevant du champ de Opco EP [...] Durée de formation en heures et en jours : 7 heures / 1 jour »
  - infos_complementaires : https://acces-formation.opcoep.fr/file.get?path=doc/programmes/selexion/teepresentiel/impulsions/selexion_aura_impulsions_mettreenoeuvrelesecogestes.pdf (2026-10-15) · « Panorama des éco-gestes mobilisables : Travail sur plusieurs thématiques : énergies, eau, déchets, transports, bidoversité. »
  - logo_url : https://www.opcoep.fr/themes/opcoep_theme/favicon-180px.png (2026-10-15) · « apple-touch-icon 180x180 déclaré dans l'en-tête des pages de opcoep.fr »

