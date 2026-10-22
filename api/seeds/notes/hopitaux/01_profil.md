# Profil eau du secteur : hôpitaux et cliniques

Note de profil, étape 2 du skill `nouveau-secteur`. Statut : brouillon, à valider par un consultant.
Date de rédaction : 2026-10-15.

| Champ | Valeur |
|---|---|
| `sector_id` | `hopitaux` |
| Libellé | Hôpitaux et cliniques |
| Préfixe des mesures | `HOP` (`ACT_HOP_001` et suivants) |
| Codes NAF | 86.10Z seul (1 940 établissements, dont 1 157 employeurs, d'après `00_perimetre.md`) |
| Département de test | 13 (Bouches-du-Rhône, bassin Rhône-Méditerranée-Corse) |

Cette note prolonge `00_perimetre.md` et confirme ses cinq pistes (bâtiment occupé jour et nuit,
légionelles, postes techniques présents ou non, continuité vitale, rejets spécifiques), avec deux
nuances : les leviers de robinetterie sont plus contraints qu'en hôtellerie par l'hygiène
hospitalière, et la réutilisation des rejets d'osmose, pourtant le levier le plus propre au secteur,
n'a pas encore de cadre réglementaire.

Avertissement de méthode : il n'existe pas de référentiel national publié de la consommation d'eau
hospitalière par poste. Les ordres de grandeur viennent d'une fiche du ministère (programme PHARE,
qui cite l'ANAP), des travaux du réseau des CPias (centres d'appui pour la prévention des infections
associées aux soins), d'un document de crise de la DGS et du site pilote SIPIBEL suivi par l'agence de
l'eau Rhône-Méditerranée-Corse. Plusieurs chiffres de ces sources sont eux-mêmes des reprises : leur
origine première est signalée quand elle est connue.

## 1. Usages de l'eau, du plus gros au plus petit

**Ordre de grandeur global.** Dans le secteur de la santé, la consommation est estimée entre 400 et
1 200 litres par lit et par jour, contre 150 litres par personne et par jour à domicile
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf), chiffre
repris d'une webconférence de l'ANAP de 2023. Le réseau des CPias retient une moyenne de 750 litres par
lit et par jour à l'hôpital, soit 375 m3 par jour pour un CHU type de 500 lits, et situe l'ensemble des
établissements de santé entre 1,3 et 1,8 % de la consommation française d'eau potable
[Réseau des CPias, 2025](https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf).
Mesure réelle sur un site récent : le Centre hospitalier Alpes Léman (450 lits, ouvert en 2012) rejette
environ 120 m3 d'eaux usées par jour
[GRAIE et agence de l'eau RMC, SIPIBEL, 2014](https://www.graie.org/Sipibel/publications/sipibel-presentation-effluentsmedicaments.pdf),
soit de l'ordre de 270 litres par lit et par jour (calcul de la présente note, sur le rejet et non sur
la consommation). L'écart d'un facteur trois entre sources tient à la taille, au plateau technique et à
l'âge du bâtiment.

**Répartition pour un CHU type de 500 lits** [Réseau des CPias, 2025](https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf) :
technique du bâtiment et autres usages 44 %, hospitalisation et soins 40 %, blanchisserie 9 %, cuisine
et plonge 7 %. Les postes se classent ainsi :

1. **Technique du bâtiment, réseaux et pertes.** Le poste regroupe chauffage, climatisation,
   arrosage, process et fuites, sans détail publié. Les fuites y pèsent lourd : 5 à 25 % de la
   consommation d'un CHU (même source). Le réseau des CPias rapporte, d'après des audits présentés par
   l'association d'ingénieurs IMRE, que 15 à 25 % de l'eau achetée reste perdue ou non affectée avant
   la mise en place d'une gestion technique centralisée, avec des ruptures de canalisations enterrées
   que personne ne voit [Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf)
   (chiffre de seconde main, à confirmer). Les tours aéroréfrigérantes en font partie quand
   l'établissement en possède, leur volume d'appoint n'a pas été chiffré (à confirmer).
2. **Hospitalisation et soins.** Douches et toilettes des patients, lave-mains, lave-bassins, purges.
   Repères par acte : une douche ou un bain 40 à 150 litres, une toilette complète au lit 20 à
   50 litres, un lavage des mains 1 à 2 litres [Réseau des CPias, 2025](https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf).
   Le parc de lave-bassins du CH de Haguenau consommait à lui seul 2 000 m3 par an
   [Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf).
   Le volume des purges anti-légionelles n'a pas été chiffré dans une source publique (à confirmer).
3. **Hémodialyse, quand elle existe.** C'est l'acte le plus consommateur : 500 à 600 litres par séance
   [Réseau des CPias, 2025](https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf),
   382 litres selon le guide de la Société francophone de néphrologie, dialyse et transplantation,
   soit 60 000 litres par patient et par an
   [OMEDIT Grand Est, ARS, 2023](https://www.omedit-grand-est.ars.sante.fr/media/117604/download).
   Une partie de l'eau entrante est rejetée par l'osmose inverse sans servir au soin. La part rejetée
   n'a pas été trouvée dans une source de la liste acceptée (à confirmer).
4. **Blanchisserie intégrée** : 5 à 20 litres par kg de linge, **stérilisation** : 60 à 120 litres par
   cycle, **restauration** : 10 à 20 litres par repas
   [Réseau des CPias, 2025](https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf).
   La blanchisserie et la cuisine sont souvent externalisées : l'eau sort alors du compteur de
   l'établissement mais pas de sa dépendance (part des établissements concernés à confirmer).
5. **Laboratoire, imagerie, entretien des locaux, espaces verts, balnéothérapie.** Postes secondaires,
   non chiffrés en volume. Le laboratoire consomme de l'eau purifiée pour les automates et la
   stérilisation des milieux [Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf).

## 2. Sources d'approvisionnement

Le réseau public d'eau potable serait la source quasi exclusive (à confirmer, aucune statistique de
répartition par source n'a été trouvée) : l'essentiel des usages exige une eau destinée à la
consommation humaine, parfois traitée en plus sur place (eau pour dialyse, eau pour soins). La DGS
demande à chaque établissement de connaître ses fournisseurs d'eau primaire et secondaire, et
recommande, quand c'est possible, deux arrivées distinctes sur le réseau public, idéalement alimentées
par des ressources différentes [DGS, 2023](https://centre-val-de-loire.ars.sante.fr/media/122414/download?inline=).
Le schéma type des réseaux hospitaliers repris par les CPias prévoit un forage ou puits privé pour
certains usages de process [Réseau des CPias, 2025](https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf),
cas dont la fréquence n'est pas connue.

Les eaux non conventionnelles restent marginales et pilotes : le CH Alpes Léman récupère l'eau de pluie
[GRAIE et agence de l'eau RMC, SIPIBEL, 2014](https://www.graie.org/Sipibel/publications/sipibel-presentation-effluentsmedicaments.pdf),
un centre de dialyse lyonnais (AURAL) réutilise 1 200 m3 par an d'eau de rejet d'osmose pour les
sanitaires des bâtiments [OMEDIT Grand Est, ARS, 2023](https://www.omedit-grand-est.ars.sante.fr/media/117604/download).
À Marseille, l'hôpital de la Conception (AP-HM) consommerait environ 45 000 m3 par an pour ses
dialyses, dont une partie rejetée avant usage, et une étude de faisabilité de réutilisation pour
l'arrosage a été lancée en 2025 [Made in Marseille, 2025](https://madeinmarseille.net/actualite/marseille/174000-eaux-dialyses-aphm-espaces-verts-voirie/)
(source de presse, chiffres à confirmer auprès de l'AP-HM).

## 3. Dépendances critiques

**Un hôpital s'arrête en quelques heures sans eau.** Une interruption de l'eau potable affecte le
fonctionnement d'un établissement de santé en l'espace de quelques heures. Les activités essentielles à
préserver sont la néphrologie et la dialyse, la néonatalogie, la stérilisation et la sécurité incendie
[DGS, 2023](https://centre-val-de-loire.ars.sante.fr/media/122414/download?inline=). La grille de la
DGS distingue (même source) :

- Les usages qu'on peut suspendre : arrosage, lavage des véhicules, entretien extérieur.
- Les usages à substituer : toilette des patients, alimentation, nettoyage du linge et des surfaces.
- Les usages qui s'arrêtent : stérilisation, laveurs-désinfecteurs, laboratoire et hémodialyse, avec
  déprogrammation ou transfert des patients sous plan blanc.
- Le risque à la remise en eau : la coupure dégrade la qualité de l'eau du réseau intérieur et impose
  purges, désinfection et contrôles.

Les systèmes d'air médical refroidis à l'eau et l'extinction automatique peuvent aussi être perdus
(même source). Une coupure électrique sur les pompes en amont ou sur les pompes de relevage des eaux
usées produit les mêmes effets.

**Un arrêté sécheresse touche peu le cœur d'activité, mais pas les usages annexes.** Les
établissements de santé (hôpitaux, cliniques, maternités, centres de dialyse) appartiennent au
groupe 1 des usagers prioritaires, à préserver au maximum des ruptures [DGS, 2023](https://centre-val-de-loire.ars.sante.fr/media/122414/download?inline=).
Dans les Bouches-du-Rhône, l'alimentation en eau potable pour la santé et la salubrité n'est pas
limitée, sauf arrêté municipal, mais l'arrosage des espaces verts est interdit de 9 h à 19 h dès
l'alerte puis totalement en alerte renforcée, le nettoyage des surfaces imperméabilisées est réservé
aux professionnels, et tout usage non cité dans les tableaux est interdit dès l'alerte
[Préfecture des Bouches-du-Rhône, 2022](https://www.bouches-du-rhone.gouv.fr/contenu/telechargement/51023/372853/file/Restrictions%20pour%20les%20entreprises.pdf).
Les activités commerciales doivent y réduire leurs prélèvements de 20 % en alerte et de 40 % en alerte
renforcée (même source) : l'application de cette règle à un établissement de santé, et plus encore à
une clinique privée, n'est pas tranchée par le document (à confirmer auprès de la DDTM 13, d'autant que
l'arrêté-cadre départemental a été révisé en 2025).

**Retour d'expérience de pénurie.** À Mayotte en 2023, les deux retenues collinaires qui fournissent
environ 80 % de l'eau de l'île étaient au plus bas, et les coupures ont commencé dès le début de
l'année. Santé publique France a renforcé la surveillance des passages aux urgences du centre
hospitalier de Mamoudzou, et la réserve sanitaire y a déployé 230 professionnels en maternité et 57 aux
urgences [Santé publique France, 2023](https://www.santepubliquefrance.fr/les-actualites/crise-de-leau-potable-a-mayotte-un-dispositif-renforce-face-a-la-situation-exceptionnelle).
Aucun retour d'expérience documenté sur un établissement de métropole pendant les étés 2022 et 2023 n'a
été trouvé (à confirmer).

## 4. Risques et contraintes réglementaires

**Légionelles : la contrainte qui borne presque tous les leviers.** L'arrêté du 1er février 2010,
modifié au 1er janvier 2023, impose aux établissements de santé un relevé de la température de l'eau
chaude une fois par jour (ou en continu) en sortie de production et sur chaque retour de boucle, une
fois par semaine aux points d'usage à risque, et une analyse de légionelles au moins une fois par an. La
concentration doit rester sous 1 000 UFC par litre aux points d'usage à risque, et sous le seuil de
détection aux points accessibles à des patients particulièrement vulnérables
[arrêté du 1er février 2010, Légifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021795143).
Les points d'eau non utilisés doivent être purgés toutes les 48 heures (circulaire DGS du 21 décembre
2010), mais une purge de plus d'une minute est inutile dans la plupart des cas, et un bras mort doit
contenir moins de 3 litres sur moins de 8 mètres [Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf).
Une évaluation des risques des réseaux intérieurs d'eau potable est à réaliser avant le 1er janvier
2029 par un professionnel qualifié (même source). Conséquences pour le plan d'action :

1. Les réducteurs de débit sont classés comme un « faux pas » par les CPias, à cause du risque de
   stagnation (même source), et les mousseurs, aérateurs et déclenchements optiques favorisent le
   risque infectieux selon la fiche ministérielle, qui leur préfère les brise-jets et les commandes au
   genou, au pied ou au coude [DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf).
   Les leviers de petit matériel de l'hôtellerie ne se transposent donc pas tels quels.
2. On ne baisse pas la température de l'eau chaude pour économiser.
3. Le gisement propre au secteur est la purge juste : bien dimensionnée, ciblée sur les points
   réellement inutilisés, et rendue inutile par la suppression des bras morts.

**Tours aéroréfrigérantes.** Les installations de refroidissement évaporatif relèvent de la rubrique
ICPE 2921 [AIDA, Ineris](https://aida.ineris.fr/reglementation/2921-refroidissement-evaporatif-dispersion-deau-flux-dair-genere-ventilation).
En crise, la DGS recommande d'isoler les tours non prioritaires et d'augmenter les cycles de
concentration des autres [DGS, 2023](https://centre-val-de-loire.ars.sante.fr/media/122414/download?inline=).

**Rejets.** Le déversement d'eaux usées autres que domestiques dans le réseau public doit être
autorisé par le maire ou le président de la collectivité compétente, en application de l'article
L1331-10 du code de la santé publique
[Nîmes Métropole, extrait du code de la santé publique](https://www.nimes-metropole.fr/fileadmin/mediatheque/Dossier-commun/Documentations/publications/Eau-et-assainissement/Extrait_Code_Sante_Publique.pdf),
et les modalités sont fixées par une convention de déversement
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf). Aucune
réglementation n'oblige un établissement de santé à traiter lui-même ses effluents
[FHF, 2009](https://www.fhf.fr/developpement-durable-archive/gestion-de-leau-lhopital) (source ancienne,
à confirmer). Le site pilote SIPIBEL nuance l'idée reçue : plus de 95 % des rejets de paracétamol,
diclofénac, aspirine et ibuprofène viennent du réseau urbain, l'hôpital ne rejetant que 120 m3 par jour
contre 4 000 pour la ville, mais les médicaments propres à l'hôpital (antibiotique ciprofloxacine) et le
gadolinium de l'imagerie y sont plus concentrés [GRAIE et agence de l'eau RMC, SIPIBEL, 2014](https://www.graie.org/Sipibel/publications/sipibel-presentation-effluentsmedicaments.pdf).
Les produits de contraste iodés n'ont pas été chiffrés par une source française de la liste (à
confirmer). En médecine nucléaire, les effluents radioactifs sont stockés en cuves de décroissance avant
rejet, l'iode 131 (période de 8 jours) fixant la durée de stockage, en application de la décision ASN
n° 2008-DC-0095 [Polyclinique La Ligne Bleue, plan publié par l'ASN, 2020](https://reglementation-controle.asnr.fr/content/download/170056/file/Plan_gestion_dechets_effluents.pdf).

**Eaux non conventionnelles : un régime plus strict pour les établissements sensibles.** Depuis le
décret n° 2024-796 et l'arrêté du 12 juillet 2024, les établissements recevant des personnes malades
ou convalescentes relèvent du régime des établissements recevant du public sensible. Les eaux impropres
restent interdites pour l'alimentation et l'hygiène corporelle, l'eau de pluie ou de puits pour le
lavage du linge demande une déclaration au préfet, les eaux grises et les eaux de piscine une
autorisation préalable du préfet instruite par l'ARS, et l'équipe opérationnelle d'hygiène doit être
informée de toute installation [ARS PACA, 2025](https://www.paca.ars.sante.fr/reutilisation-des-eaux-usees-traitees).
Le lavage des sols à l'eau de pluie ne demande aucune procédure
[Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf).
Les rejets d'osmose inverse de la dialyse et de la stérilisation, les rejets des adoucisseurs et les
condensats des groupes froids ne sont pas encore définis réglementairement, des échanges étant en cours
entre le ministère et le secteur (même source). Ils relèvent pour l'heure de l'expérimentation prévue
par le décret de 2024, sur manifestation d'intérêt auprès de la DGS [ARS PACA, 2025](https://www.paca.ars.sante.fr/reutilisation-des-eaux-usees-traitees).

**Cadre d'objectif.** Le plan eau du 30 mars 2023 vise une baisse de 10 % de l'eau prélevée d'ici 2030
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf).

## 5. Leviers connus, par catégorie du plan d'action

Dix-sept leviers. Quatre mesures transversales existantes seront réutilisées telles quelles et ne
sont pas reprises ici : compteur par usage (`ACT_AGR_001`), audit eau (`ACT_AGR_002`), plan de gestion
de l'eau et anticipation des restrictions (`ACT_AGR_009`), démarche collective (`ACT_AGR_010`). Les
leviers marqués « fusionnable » sont les premiers candidats au regroupement pour tenir la cible de six à
douze mesures.

### Sensibiliser et former (`sensibiliser_former`)

**L1. Former les soignants et les agents de bionettoyage aux purges justes et au signalement des
fuites.** Faire couler chaque jour les points d'eau lors du bionettoyage, purger toutes les 48 heures
les points peu utilisés, mesurer le temps d'arrivée de l'eau chaude stabilisée plutôt que purger
longtemps [Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf).
Le programme PHARE fait du nombre de personnes sensibilisées et de la présence d'un référent eau des
indicateurs de suivi [DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf).
Gain non chiffré (à confirmer). Tous établissements avec hébergement. Titre proposé : « Former les
équipes aux purges utiles et au signalement des fuites ».

**L2. Intégrer au plan blanc un protocole de rupture d'approvisionnement en eau.** Exigé par la DGS :
besoins par service en situation normale et dégradée, activités critiques, stocks d'eau en bouteille
pour 72 heures au moins, contrats de secours (citerne, unité mobile de traitement), mesures d'épargne
graduées, exercices et retour d'expérience [DGS, 2023](https://centre-val-de-loire.ars.sante.fr/media/122414/download?inline=).
Effet : sécurisation plutôt qu'économie. Tous établissements, HAD comprise pour la continuité des soins
à domicile (à confirmer). Déclinaison sectorielle de `ACT_AGR_009`, fusionnable avec elle. Titre
proposé : « Intégrer au plan blanc un protocole de rupture d'alimentation en eau ».

### Suivre, comprendre et maîtriser ses consommations (`suivre_comprendre_maitriser`)

**L3. Sous-compter par bâtiment et par usage, et suivre un ratio en m3 par lit.** L'audit avec
sous-compteurs est la première recommandation du ministère pour connaître la répartition par poste
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf), et les
CPias le placent en tête des actions [Réseau des CPias, 2025](https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf).
Retour d'expérience : après la pose de 28 compteurs pour détecter les fuites, le CHRU de Lille a réduit
sa facture d'eau de 166 600 euros par an par rapport à 2005 [FHF, 2009](https://www.fhf.fr/developpement-durable-archive/gestion-de-leau-lhopital).
Le ratio de 400 à 1 200 litres par lit et par jour sert de repère
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf).
Établissements de taille moyenne et grands sites. Déclinaison de `ACT_AGR_001` et `ACT_AGR_002`.
Titre proposé : « Suivre la consommation par bâtiment et par usage, en m3 par lit ».

**L4. Rechercher les fuites sur les réseaux enterrés et dans les locaux techniques.** Les fuites
représentent 5 à 25 % de la consommation d'un CHU [Réseau des CPias, 2025](https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf),
souvent sur des canalisations enterrées sous des sols bétonnés, des robinets de locaux techniques et
des réservoirs [Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf).
La réduction de pression est aussi citée comme moyen de limiter les fuites
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf).
Sites anciens et étendus. Fusionnable avec L3. Titre proposé : « Rechercher et réparer les fuites des
réseaux enterrés et des locaux techniques ».

### Améliorer l'efficacité hydrique de ses équipements (`ameliorer_efficacite_hydrique`)

**L5. Choisir une robinetterie et des chasses économes validées par l'équipe d'hygiène.** Brise-jets,
commandes au genou, au pied ou au coude, chasses sans réservoir ou à double commande, douches à débit
adapté, plutôt que mousseurs, aérateurs et déclenchement optique
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf). Tout
dispositif réduisant le débit doit être évalué avec les services techniques, en raison du risque de
stagnation [Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf).
Gain en établissement de santé non chiffré (à confirmer). Tous établissements avec hébergement, au
renouvellement. Titre proposé : « Équiper les sanitaires de robinetterie et chasses économes validées
par l'hygiène ».

**L6. Moderniser le traitement d'eau de dialyse.** Bi-osmoseurs et générateurs récents réduisent la
consommation [DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf).
Retour d'expérience publié : le remplacement d'un système de traitement d'eau a divisé par deux la
consommation par séance, passée d'environ 600 à moins de 300 litres
[OMEDIT Grand Est, ARS, 2023](https://www.omedit-grand-est.ars.sante.fr/media/117604/download)
(d'après Bendine et al., 2020). Établissements avec unité d'hémodialyse. Levier à fort effet sur le
premier poste quand il existe. Titre proposé : « Moderniser le traitement d'eau de l'unité de dialyse ».

**L7. Exiger des équipements de blanchisserie et de stérilisation économes en eau.** Demander aux
fournisseurs la consommation en litres par kg de linge et en litres par unité d'œuvre de stérilisation,
privilégier tunnels de lavage et recyclage [DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf).
Retour d'expérience : le changement du tunnel de lavage de la blanchisserie du CHU de Nice a économisé
5 000 m3 d'eau en un an [FHF, 2009](https://www.fhf.fr/developpement-durable-archive/gestion-de-leau-lhopital).
Établissements avec blanchisserie ou stérilisation intégrée, sinon critère d'achat de la prestation.
Titre proposé : « Choisir des équipements de blanchisserie et de stérilisation économes en eau ».

**L8. Réduire l'appoint des tours aéroréfrigérantes.** Augmenter les cycles de concentration, isoler les
tours non indispensables [DGS, 2023](https://centre-val-de-loire.ars.sante.fr/media/122414/download?inline=).
Gain non chiffré (à confirmer), et toute modification du traitement de l'eau de la tour doit respecter
la rubrique ICPE 2921. Établissements équipés. Titre proposé : « Optimiser les cycles de concentration
des tours aéroréfrigérantes ».

### Changer ses process ou pratiques (`changer_process_pratiques`)

**L9. Supprimer les bras morts et les points d'eau inutilisés.** Chaque point supprimé est une purge en
moins et un risque légionelle en moins, un bras mort devant rester sous 3 litres et 8 mètres
[Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf).
Le nombre de points d'eau et de douches figure parmi les indicateurs du ministère
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf). Gain non
chiffré (à confirmer). Établissements anciens ou agrandis par étapes. Titre proposé : « Supprimer les
bras morts et les points d'eau inutilisés ».

**L10. Remplacer les lave-bassins par des sacs de recueil gélifiants.** Au CH de Haguenau, le parc de
lave-bassins consommait 2 000 m3 d'eau par an, et la gestion des excreta en sac reste dans la chambre,
ce que l'équipe juge meilleur pour l'hygiène [Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf).
Contrepartie : des déchets plastiques, dont le bilan reste discuté (même source). Services de médecine
et de soins de suite. Titre proposé : « Remplacer les lave-bassins par des sacs de recueil à usage
unique ».

**L11. Passer au bionettoyage à la microfibre ou à la vapeur.** Le ministère recommande les bandeaux
microfibres compatibles avec un lavage sans détergent, les monobrosses et le nettoyeur vapeur
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf). Le CH Alpes
Léman l'a fait dans sa politique de réduction de l'eau et des détergents
[GRAIE et agence de l'eau RMC, SIPIBEL, 2014](https://www.graie.org/Sipibel/publications/sipibel-presentation-effluentsmedicaments.pdf).
Gain en eau non chiffré (à confirmer), effet surtout sur les rejets. Tous établissements. Titre
proposé : « Passer au bionettoyage à la microfibre ou à la vapeur ».

**L12. Adapter les espaces verts au climat et arroser au goutte-à-goutte.** Espèces adaptées au climat
sec, paillage, arrosage au sol ou supprimé, détecteurs de pluie
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf). L'intérêt
tient à la dépendance : dans les Bouches-du-Rhône, l'arrosage est interdit en journée dès l'alerte
[Préfecture des Bouches-du-Rhône, 2022](https://www.bouches-du-rhone.gouv.fr/contenu/telechargement/51023/372853/file/Restrictions%20pour%20les%20entreprises.pdf).
Établissements avec parc (psychiatrie, soins de suite, hôpitaux pavillonnaires). Titre proposé :
« Adapter les espaces verts au climat et arroser au goutte-à-goutte ».

### Valoriser ou réutiliser les eaux non conventionnelles (`valoriser_reut_eaux_non_conventionnelles`)

**L13. Récupérer les rejets d'osmose inverse pour des usages non sanitaires.** L'eau de rejet des
osmoseurs peut servir aux espaces verts, au nettoyage, aux sanitaires ou aux buanderies si les circuits
sont séparés du réseau d'eau potable [DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf).
Retour d'expérience : 1 200 m3 par an réutilisés pour les sanitaires par le centre AURAL à Lyon
[OMEDIT Grand Est, ARS, 2023](https://www.omedit-grand-est.ars.sante.fr/media/117604/download).
Avertissement : ces eaux ne sont pas encore définies réglementairement
[Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf),
le projet passe par l'expérimentation déclarée à la DGS [ARS PACA, 2025](https://www.paca.ars.sante.fr/reutilisation-des-eaux-usees-traitees).
Établissements avec dialyse ou stérilisation à osmose. Titre proposé : « Réutiliser les rejets
d'osmose de la dialyse et de la stérilisation ».

**L14. Récupérer l'eau de pluie pour l'arrosage et le lavage des sols.** Sans procédure pour le lavage
des sols [Réseau des CPias, 2026](https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf),
sur déclaration pour le linge en établissement sensible [ARS PACA, 2025](https://www.paca.ars.sante.fr/reutilisation-des-eaux-usees-traitees),
recommandé par le ministère pour l'arrosage et le lavage des véhicules
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf). Gain non
chiffré en établissement de santé (à confirmer). Sites avec toiture exploitable et usages séparables.
Doit être la mesure transversale de récupération d'eau de pluie (voir l'hôtellerie), pas une mesure
`HOP`. Titre proposé : « Récupérer l'eau de pluie pour l'arrosage et le lavage des sols ».

### Agir sur ses rejets et la qualité de l'eau (`agir_rejets_qualite`)

**L15. Caractériser ses effluents et formaliser l'autorisation de déversement.** Recenser les sources
d'effluents, les analyser, remonter à la source en cas d'anomalie
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf), et
disposer de l'autorisation prévue par l'article L1331-10
[Nîmes Métropole, extrait du code de la santé publique](https://www.nimes-metropole.fr/fileadmin/mediatheque/Dossier-commun/Documentations/publications/Eau-et-assainissement/Extrait_Code_Sante_Publique.pdf).
Au CH Alpes Léman, la caractérisation préalable a fourni les valeurs de référence de la convention de
déversement [GRAIE et agence de l'eau RMC, SIPIBEL, 2014](https://www.graie.org/Sipibel/publications/sipibel-presentation-effluentsmedicaments.pdf).
Établissements de court séjour avec plateau technique. Titre proposé : « Caractériser ses effluents et
formaliser la convention de déversement ».

**L16. Réduire à la source les rejets de médicaments et de produits d'entretien.** Choisir les
molécules et excipients les moins persistants à efficacité égale, interdire le rejet des médicaments à
l'évier, régler les centrales de dilution, recourir aux procédés sans chimie
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf). Effet non
chiffré, mais l'hôpital est la source principale des antibiotiques hospitaliers et du gadolinium dans
ses effluents [GRAIE et agence de l'eau RMC, SIPIBEL, 2014](https://www.graie.org/Sipibel/publications/sipibel-presentation-effluentsmedicaments.pdf).
Fusionnable avec L15. Titre proposé : « Réduire à la source les rejets de médicaments et de
désinfectants ».

### Agir sur le grand cycle de l'eau (`agir_grand_cycle`)

**L17. Gérer les eaux pluviales à la parcelle et désimperméabiliser.** Séparer eaux pluviales et eaux
usées, faciliter l'infiltration et le stockage de l'eau dans le sol des espaces verts
[DGOS, programme PHARE, 2024](https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf). Effet non
chiffré. La catégorie est déjà couverte par la transversale démarche collective (`ACT_AGR_010`), qui
trouve un appui concret dans le département de test : l'agence de l'eau Rhône-Méditerranée-Corse a
retenu EnvirobatBDM, dans le cadre d'un appel à manifestation d'intérêt, pour accompagner les
établissements de santé de la région Sud sur l'eau et les micropolluants, avec l'ARS PACA et le réseau
des conseillers en transition énergétique et écologique en santé, qui suit près de 650 établissements
sanitaires et médico-sociaux [EnvirobatBDM, 2026](https://envirobatbdm.eu/sites/default/files/2026-05/2026_EvBDM_Conseiller-CTEES_V2.pdf).
L'agence finance aussi des opérations collectives par branche, dotées de 10 millions d'euros en 2025
[agence de l'eau RMC, 2025](https://www.eaurmc.fr/upload/docs/application/pdf/2025-07/20250701-cp-ami-operations_groupees.pdf)
(éligibilité d'une fédération hospitalière à confirmer). Titre proposé si retenu : « Gérer les eaux
pluviales à la parcelle et désimperméabiliser le site ».

## 6. Codes limites au sein du périmètre

Le périmètre ne compte qu'un code, mais 86.10Z recouvre des profils d'eau très différents, que
l'inventaire d'entrée du questionnaire devra séparer.

**L'hospitalisation à domicile.** Elle n'a ni hébergement ni plateau technique (note de périmètre) : ni
purges, ni dialyse, ni blanchisserie. Seuls le plan de continuité (L2) et le suivi des consommations de
ses locaux la concernent. C'est le persona « sans l'usage principal ».

**Le court séjour avec plateau technique (CHU, centres hospitaliers, cliniques MCO).** Toutes les
dépendances s'y cumulent : dialyse, stérilisation, imagerie et médecine nucléaire, tours
aéroréfrigérantes, rejets. Les leviers L6, L7, L8, L13, L15 et L16 n'ont de sens que pour eux.

**Psychiatrie et soins de suite.** Hébergement long, peu ou pas de plateau technique, souvent un parc
arboré (à confirmer) : le profil se rapproche de l'EHPAD écarté, avec les sanitaires, les purges et les
espaces verts (L1, L5, L9, L10, L12) comme leviers principaux. Une balnéothérapie y est parfois
présente, sans chiffre de consommation trouvé (à confirmer).

**Les centres de dialyse autonomes** classés en 86.10Z, s'il en existe (à confirmer) : un poste
dominant, le traitement d'eau, et une dépendance totale à la continuité. Leur plan se réduit à L2, L3,
L6 et L13.

**Les hôpitaux thermaux** : leur eau thermale relève d'une autorisation propre (note de périmètre), hors
du champ des leviers ci-dessus.

## 7. Sources

| Organisme | Titre | Année | URL |
|---|---|---|---|
| DGOS, ministère de la Santé (programme PHARE), hébergé par l'ARS PACA | Fiche achats responsables « Eau » (cite ANAP, webconférence gestion de l'eau, 2023) | 2024 | https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf |
| DGS, bureau de la préparation aux crises | Risque de restriction ou de rupture d'approvisionnement en eau potable dans les établissements de santé | 2023 | https://centre-val-de-loire.ars.sante.fr/media/122414/download?inline= |
| Réseau national des CPias (P. Carenco, CPias PACA, AP-HM, CHU de Nice) | La consommation d'eau en établissements de santé, webinaire « Usage raisonné de l'eau » | 2025 | https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf |
| Réseau national des CPias (groupe interCPias transition écologique) | Foire aux questions « Usage raisonné de l'eau », validée le 20 février 2026 | 2026 | https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf |
| OMEDIT Grand Est (ARS Grand Est) | Impact environnemental de la dialyse et guide des bonnes pratiques de la dialyse verte (SFNDT), plénière du 5 décembre 2023 | 2023 | https://www.omedit-grand-est.ars.sante.fr/media/117604/download |
| GRAIE, avec l'agence de l'eau RMC, l'ARS et les ministères | SIPIBEL, site pilote de Bellecombe : présentation et premiers résultats | 2014 | https://www.graie.org/Sipibel/publications/sipibel-presentation-effluentsmedicaments.pdf |
| Légifrance | Arrêté du 1er février 2010 relatif à la surveillance des légionelles (version en vigueur au 1er janvier 2023) | 2010, modifié 2022 | https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021795143 |
| ARS PACA | Usage domestique d'eaux impropres à la consommation humaine | 2025 | https://www.paca.ars.sante.fr/reutilisation-des-eaux-usees-traitees |
| Préfecture des Bouches-du-Rhône | Sécheresse : les mesures de restriction pour les entreprises | 2022 | https://www.bouches-du-rhone.gouv.fr/contenu/telechargement/51023/372853/file/Restrictions%20pour%20les%20entreprises.pdf |
| Santé publique France | Crise de l'eau potable à Mayotte : un dispositif renforcé face à la situation exceptionnelle | 2023 | https://www.santepubliquefrance.fr/les-actualites/crise-de-leau-potable-a-mayotte-un-dispositif-renforce-face-a-la-situation-exceptionnelle |
| FHF (reprise d'Hospimedia) | Gestion de l'eau à l'hôpital | 2009 | https://www.fhf.fr/developpement-durable-archive/gestion-de-leau-lhopital |
| Nîmes Métropole | Extrait du code de la santé publique (article L1331-10) | sans date | https://www.nimes-metropole.fr/fileadmin/mediatheque/Dossier-commun/Documentations/publications/Eau-et-assainissement/Extrait_Code_Sante_Publique.pdf |
| AIDA, Ineris | Rubrique ICPE 2921, refroidissement évaporatif | en vigueur | https://aida.ineris.fr/reglementation/2921-refroidissement-evaporatif-dispersion-deau-flux-dair-genere-ventilation |
| Polyclinique La Ligne Bleue, document publié par l'ASN | Plan de gestion des déchets et effluents radioactifs du service de médecine nucléaire | 2020 | https://reglementation-controle.asnr.fr/content/download/170056/file/Plan_gestion_dechets_effluents.pdf |
| Agence de l'eau Rhône-Méditerranée-Corse | Communiqué : AMI pour des projets collectifs d'économies d'eau ou de réduction des rejets de substances dangereuses | 2025 | https://www.eaurmc.fr/upload/docs/application/pdf/2025-07/20250701-cp-ami-operations_groupees.pdf |
| EnvirobatBDM (lauréat de l'AMI de l'agence de l'eau RMC) | Offre CTEES sobriété hydrique et micropolluants, Provence-Alpes-Côte d'Azur | 2026 | https://envirobatbdm.eu/sites/default/files/2026-05/2026_EvBDM_Conseiller-CTEES_V2.pdf |
| Made in Marseille (presse, hors liste des sources acceptées) | Eaux de dialyse de l'AP-HM : étude de réutilisation | 2025 | https://madeinmarseille.net/actualite/marseille/174000-eaux-dialyses-aphm-espaces-verts-voirie/ |

Note sur les liens : la fiche PHARE est un document de la DGOS hébergé sur le site de l'ARS PACA. Le
document de la DGS est hébergé par l'ARS Centre-Val de Loire (la même version est diffusée par la
préfecture de la Gironde). Les chiffres de la présentation des CPias (750 litres par lit, répartition
du CHU type, litres par acte) citent ADEME, ANAP, OFB et Eaufrance sans renvoi précis : ils sont
retenus comme ordres de grandeur et doivent être recoupés avec la publication ANAP d'origine, non
trouvée en ligne. Le chiffre de 382 litres par séance vient du guide de la dialyse verte de la SFNDT,
lu au travers de la présentation de l'OMEDIT. L'article de la FHF date de 2009 : ses retours
d'expérience (Lille, Nice) décrivent le parc d'alors. La fiche de restrictions des Bouches-du-Rhône
date de 2022, l'arrêté-cadre ayant été révisé en 2025 (n° 60-2025), à relire avant de bâtir la question
sur les restrictions. Le texte intégral du décret n° 2024-796 n'a pas été relu, son contenu est rapporté
d'après l'ARS PACA et le réseau des CPias.

### Ce qui n'a pas pu être sourcé

Restent au conditionnel : la part des sources d'approvisionnement propres aux hôpitaux (réseau, forage),
le volume des purges anti-légionelles, le volume d'appoint des tours aéroréfrigérantes hospitalières, la
part de l'eau rejetée par l'osmose inverse en dialyse (le chiffre de 30 % circule, mais dans des sources
hors liste), les volumes de la stérilisation à l'échelle d'un établissement, le gain chiffré de la
robinetterie adaptée à l'hôpital, la part des établissements qui externalisent blanchisserie et
restauration, les produits de contraste iodés dans les effluents (seules des sources étrangères ont été
trouvées), un retour d'expérience de restriction en métropole (étés 2022 et 2023), et l'éligibilité des
établissements de santé aux restrictions de 20 et 40 % pour les activités économiques dans les
Bouches-du-Rhône. Un retour d'expérience du CHU de Poitiers (économies de l'ordre d'un tiers) a été
écarté : la page du CHU était inaccessible et aucune source tierce ne le confirme. Les seuils de rejet
des cuves de décroissance fixés par la décision ASN n'ont pas été relus dans le texte et ne sont pas
cités.
