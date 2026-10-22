# Revue du référentiel : Hôpitaux et cliniques

Document assemblé automatiquement depuis le staging. Tout est en statut brouillon tant que la promotion n'a pas eu lieu.

## Périmètre

- Secteur : `hopitaux` (Hôpitaux et cliniques)
- Codes NAF (1) : 86.10Z

## Profil eau du secteur

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

## Questions

### 1. Quel type d'activité votre établissement accueille-t-il sur son site ?

`hop_q01` · single_choice · Connaissance & mesure

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Pas de lits sur site (hospitalisation à domicile, siège) | `sans_hebergement` | 0 | 0 |  |
| Hospitalisation sans bloc ni imagerie (soins de suite, psychiatrie) | `hebergement_seul` | 0 | 0 |  |
| Hospitalisation avec blocs, imagerie ou urgences | `plateau_technique` | 0 | 0 |  |

### 2. Comment suivez-vous la consommation d'eau de l'établissement ?

`hop_q02` · single_choice · Connaissance & mesure · condition : `{"questionId": "hop_q01", "operator": "neq", "value": "sans_hebergement"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Par la facture uniquement | `facture` | 0 | 0 | comptage |
| Relevé régulier du compteur général | `releve_general` | 1 | 1 | comptage |
| Sous-compteurs par bâtiment ou par usage, relevés | `sous_compteurs` | 2 | 2 |  |
| Télérelève ou GTC, avec alertes de surconsommation | `telereleve` | 3 | 3 |  |

### 3. Avez-vous fait réaliser un audit ou un diagnostic eau de votre établissement ?

`hop_q03` · single_choice · Connaissance & mesure · condition : `{"questionId": "hop_q01", "operator": "neq", "value": "sans_hebergement"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, jamais | `jamais` | 0 | 0 | audit |
| On y a réfléchi mais pas encore fait | `envisage` | 0 | 2 | audit |
| Oui, il y a plus de 5 ans | `ancien` | 1 | 2 | audit |
| Oui, récemment (moins de 3 ans) | `recent` | 3 | 3 |  |

### 4. Comment les fuites des réseaux enterrés et des locaux techniques sont-elles recherchées ?

`hop_q04` · single_choice · Connaissance & mesure · condition : `{"questionId": "hop_q01", "operator": "neq", "value": "sans_hebergement"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Elles ne sont pas recherchées, on répare ce qui se voit | `non_recherchees` | 0 | 0 | fuites |
| On réagit quand la facture augmente | `ecarts_facture` | 1 | 1 | fuites |
| Une campagne de recherche a déjà été menée | `campagne_ponctuelle` | 2 | 2 |  |
| Recherche régulière ou suivi des débits de nuit | `recherche_reguliere` | 3 | 3 |  |

### 5. Comment gérez-vous les points d'eau peu utilisés et leurs purges anti-légionelles ?

`hop_q05` · single_choice · Réseaux & équipements · condition : `{"questionId": "hop_q01", "operator": "neq", "value": "sans_hebergement"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Pas de protocole, purges au cas par cas | `sans_protocole` | 0 | 0 | legionelles |
| Purges longues sur tous les points, sans recensement | `purges_systematiques` | 1 | 1 | legionelles |
| Points peu utilisés recensés et purgés selon un protocole | `points_recenses` | 2 | 2 |  |
| Bras morts supprimés, purges ajustées et tracées | `bras_morts_supprimes` | 3 | 3 |  |

### 6. Quels équipements économes équipent vos chambres et vos lave-mains ?

`hop_q06` · single_choice · Réseaux & équipements · condition : `{"questionId": "hop_q01", "operator": "neq", "value": "sans_hebergement"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Équipements d'origine, sans critère d'économie | `origine` | 0 | 0 | equipements |
| Réducteurs de débit ou mousseurs posés largement | `reducteurs_debit` | 1 | 2 | equipements |
| Critère d'économie au renouvellement, au cas par cas | `au_renouvellement` | 2 | 2 |  |
| Programme de renouvellement validé par l'équipe d'hygiène | `programme_valide` | 3 | 3 |  |

### 7. Pratiquez-vous l'hémodialyse sur le site, et où en est son traitement d'eau ?

`hop_q07` · single_choice · Réseaux & équipements · condition : `{"questionId": "hop_q01", "operator": "neq", "value": "sans_hebergement"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Oui, traitement d'eau ancien ou eau par séance inconnue | `traitement_ancien` | 0 | 0 | dialyse |
| Oui, traitement récent, rejets d'osmose non réutilisés | `traitement_recent` | 2 | 2 | dialyse |
| Oui, traitement récent et rejets d'osmose réutilisés | `rejets_reutilises` | 3 | 3 |  |
| Pas d'hémodialyse sur le site | `sans_dialyse` | 2 | 2 |  |

### 8. Comment l'eau compte-t-elle dans vos choix de blanchisserie et de stérilisation ?

`hop_q08` · single_choice · Réseaux & équipements · condition : `{"questionId": "hop_q01", "operator": "neq", "value": "sans_hebergement"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Elle n'entre ni dans les achats ni dans le marché | `sans_critere` | 0 | 0 | equipements |
| Consommation par kilo ou par cycle exigée à l'achat | `critere_achat` | 2 | 2 |  |
| Équipements économes en place (tunnel, recyclage) | `equipements_economes` | 3 | 3 |  |
| Ni blanchisserie ni stérilisation, sur site ou en prestation | `sans_objet` | 2 | 2 |  |

### 9. Utilisez-vous une autre eau que celle du réseau pour l'arrosage, le nettoyage ou les chasses ?

`hop_q09` · single_choice · Autres eaux & rejets · condition : `{"questionId": "hop_q01", "operator": "neq", "value": "sans_hebergement"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, tout vient du réseau d'eau potable | `reseau_seul` | 0 | 0 | autres_eaux |
| Un projet est étudié, pas encore réalisé | `projet_etudie` | 0 | 2 | autres_eaux |
| Oui, de l'eau de pluie pour l'arrosage ou le nettoyage | `eau_pluie` | 2 | 2 |  |
| Oui, plusieurs eaux (pluie, rejets d'osmose, forage) | `plusieurs_sources` | 3 | 3 |  |

### 10. Où en êtes-vous de la connaissance et de la maîtrise de vos effluents ?

`hop_q10` · single_choice · Autres eaux & rejets · condition : `{"questionId": "hop_q01", "operator": "eq", "value": "plateau_technique"}`

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Ils n'ont jamais été caractérisés | `non_caracterises` | 0 | 0 | rejets |
| Autorisation de déversement, sans analyse récente | `autorisation_seule` | 1 | 1 | rejets |
| Convention de déversement et analyses régulières | `convention_suivie` | 2 | 2 |  |
| Analyses suivies et réduction à la source engagée | `reduction_source` | 3 | 3 |  |

### 11. Votre plan blanc prévoit-il une rupture d'approvisionnement en eau ?

`hop_q11` · single_choice · Continuité & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non, ce risque n'y est pas traité | `non_traite` | 0 | 0 | continuite |
| Le risque est connu, sans procédure écrite | `connu_sans_procedure` | 1 | 2 | continuite |
| Oui, procédure écrite (besoins par service, stocks, citerne) | `procedure_ecrite` | 2 | 2 |  |
| Oui, procédure écrite et exercée régulièrement | `procedure_exercee` | 3 | 3 |  |

### 12. Participez-vous à une démarche collective sur l'eau dans votre territoire ?

`hop_q12` · single_choice · Continuité & anticipation

| Option | id | Maturité | Concernement | Topics |
|---|---|---|---|---|
| Non | `non` | 0 | 0 | territoire |
| Je connais les démarches locales sans y participer | `informe` | 1 | 2 | territoire |
| Oui, l'établissement y participe | `participe` | 2 | 3 |  |
| Oui, l'établissement porte ou anime une démarche | `porteur` | 3 | 3 |  |

## Filtres du plan d'action

| Filtre | Règle | Type | Effet | Priorité | Mesures |
|---|---|---|---|---|---|
| `f_suivi_global` | Suivi par la facture ou le seul compteur général : recommander les sous-compteurs par usage | answer | add | 1 | ACT_AGR_001 |
| `f_pas_audit` | Pas d'audit, audit seulement envisagé ou de plus de 5 ans : recommander l'audit eau | answer | add | 1 | ACT_AGR_002 |
| `f_audit_inconnu` | Ne sait pas si un audit a été fait : l'audit est la porte d'entrée | answer | add | 1 | ACT_AGR_002 |
| `f_fuites_non_recherchees` | Fuites jamais recherchées ou repérées à la facture : recommander une campagne de recherche | answer | add | 1 | ACT_HOP_002 |
| `f_purges_non_maitrisees` | Purges sans protocole ou sans recensement des points : supprimer les bras morts et ajuster les purges | answer | add | 1 | ACT_HOP_001 |
| `f_robinetterie` | Robinetterie d'origine ou réducteurs de débit déconseillés : robinetterie validée par l'hygiène | answer | add | 1 | ACT_HOP_003 |
| `f_dialyse_ancienne` | Traitement d'eau de dialyse ancien ou eau par séance inconnue : compter l'eau de la dialyse, moderniser le traitement et réutiliser ses rejets | answer | add | 1 | ACT_AGR_001, ACT_HOP_004, ACT_HOP_006 |
| `f_osmose_rejetee` | Traitement récent mais rejets d'osmose perdus : étudier leur réutilisation | answer | add | 1 | ACT_HOP_006 |
| `f_sans_dialyse` | Pas d'hémodialyse : retirer la modernisation du traitement d'eau de dialyse | answer | remove | 2 | ACT_HOP_004 |
| `f_blanchisserie_sans_critere` | L'eau n'entre pas dans les choix de blanchisserie et de stérilisation : en faire un critère | answer | add | 1 | ACT_HOP_005 |
| `f_sans_blanchisserie` | Ni blanchisserie ni stérilisation : retirer la mesure correspondante | answer | remove | 2 | ACT_HOP_005 |
| `f_reseau_seul` | Tout vient du réseau ou projet seulement étudié : recommander la récupération d'eau de pluie | answer | add | 1 | ACT_AGR_006 |
| `f_effluents` | Aucune réduction à la source engagée, quel que soit le niveau de conformité : réduire les rejets de médicaments et de désinfectants | answer | add | 1 | ACT_HOP_007 |
| `f_continuite` | Rupture d'eau absente du plan blanc ou sans procédure écrite : formaliser le plan de gestion de l'eau | answer | add | 1 | ACT_AGR_009 |
| `f_collectif` | Connaît les démarches locales sans y participer : proposer d'en rejoindre une | answer | add | 1 | ACT_AGR_010 |
| `f_avance_collectif` | Établissement avancé : la démarche collective est l'étape suivante | maturity | add | 1 | ACT_AGR_010 |
| `f_deja_collectif` | Participe déjà à une démarche collective : ne pas la reproposer | answer | remove | 2 | ACT_AGR_010 |
| `f_sans_hebergement` | Pas de lits sur site (hospitalisation à domicile, siège) : retirer toutes les mesures de bâtiment et d'équipement, et la démarche collective où une structure de bureaux ne pèse pas | answer | remove | 2 | ACT_AGR_001, ACT_AGR_002, ACT_AGR_006, ACT_HOP_001, ACT_HOP_002, ACT_HOP_003, ACT_HOP_004, ACT_HOP_005, ACT_HOP_006, ACT_HOP_007, ACT_AGR_010 |

## Mesures

### ACT_HOP_001 · Supprimer les bras morts et ajuster les purges anti-légionelles

*Bras morts et purges* · changer_process_pratiques · secteurs ['hopitaux'] · impact 2 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "faible", "humain": "moyen"} · statut brouillon

Recenser les points d'eau peu ou pas utilisés, supprimer les bras morts et les points inutiles, et limiter les purges aux points restants à la durée utile, mesurée par le temps d'arrivée de l'eau chaude. Vous réduisez l'eau perdue en purges tout en diminuant le risque de légionellose.

- **avertissement** : Ne jamais baisser la température de l'eau chaude pour économiser : l'arrêté du 1er février 2010 impose aux établissements de santé un suivi quotidien des températures en production et sur chaque retour de boucle. (https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021795143)
- **info** : Selon le réseau des CPias, une purge de plus d'une minute est inutile dans la plupart des cas, et un bras mort doit contenir moins de 3 litres sur moins de 8 mètres. (https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf)
- **info** : Une évaluation des risques des réseaux intérieurs d'eau potable est à réaliser avant le 1er janvier 2029 par un professionnel qualifié : c'est le moment de recenser les bras morts. (https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf)
- Sources :
  - description : https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf (2026-02-20) · « Purger toutes les 48 heures les points peu utilisés, mesurer le temps d'arrivée de l'eau chaude stabilisée plutôt que purger longtemps, bras mort de moins de 3 litres sur moins de 8 mètres. »
  - description : https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf (sans date) · « Le nombre de points d'eau et de douches figure parmi les indicateurs de suivi (DGOS, programme PHARE). »
  - infos_complementaires : https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021795143 (sans date) · « Relevé de la température de l'eau chaude une fois par jour en sortie de production et sur chaque retour de boucle. »

### ACT_HOP_002 · Rechercher et réparer les fuites des réseaux enterrés et techniques

*Recherche de fuites* · suivre_comprendre_maitriser · secteurs ['hopitaux'] · impact 3 · facilité 2 · court_terme · effort {"capex": "moyen", "opex": "faible", "humain": "faible"} · statut brouillon

Faire réaliser une campagne de recherche de fuites sur les canalisations enterrées, les vides sanitaires et les locaux techniques, puis réparer et réduire la pression là où elle est excessive. Sur un site hospitalier étendu ou ancien, c'est souvent le premier gisement d'économie, invisible sans recherche active.

- **info** : Les fuites représentent 5 à 25 % de la consommation d'un CHU, souvent sur des canalisations enterrées sous des sols bétonnés. (https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf)
- **retour_experience** : Le CHRU de Lille a posé 28 compteurs pour repérer ses fuites et a réduit sa facture d'eau de 166 600 euros par an par rapport à 2005. (https://www.fhf.fr/developpement-durable-archive/gestion-de-leau-lhopital)
- Sources :
  - description : https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf (2026-02-20) · « Fuites sur des canalisations enterrées sous des sols bétonnés, des robinets de locaux techniques et des réservoirs. »
  - description : https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf (sans date) · « La réduction de pression limite les fuites (DGOS, programme PHARE). »
  - infos_complementaires : https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf (sans date) · « Fuites : 5 à 25 % de la consommation d'un CHU. »
  - infos_complementaires : https://www.fhf.fr/developpement-durable-archive/gestion-de-leau-lhopital (sans date) · « CHRU de Lille : 28 compteurs, facture d'eau réduite de 166 600 euros par an par rapport à 2005. »

### ACT_HOP_003 · Équiper les sanitaires d'une robinetterie économe validée par l'hygiène

*Robinetterie adaptée* · ameliorer_efficacite_hydrique · secteurs ['hopitaux'] · impact 2 · facilité 2 · moyen_terme · effort {"capex": "moyen", "opex": "faible", "humain": "faible"} · statut brouillon

Au renouvellement, choisir avec l'équipe d'hygiène des brise-jets, des commandes au genou, au pied ou au coude, des chasses à double commande et des douches à débit adapté. Vous baissez la consommation des chambres et des lave-mains sans créer de zones de stagnation propices aux légionelles.

- **avertissement** : Les réducteurs de débit sont classés comme un faux pas par le réseau des CPias, à cause du risque de stagnation : tout dispositif qui réduit le débit est à évaluer avec les services techniques et l'équipe d'hygiène. (https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf)
- **info** : La fiche achats du ministère déconseille les mousseurs, les aérateurs et le déclenchement optique, qui favorisent le risque infectieux. (https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf)
- Sources :
  - description : https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf (sans date) · « Brise-jets, commandes au genou, au pied ou au coude, chasses sans réservoir ou à double commande, douches à débit adapté, plutôt que mousseurs, aérateurs et déclenchement optique. »
  - infos_complementaires : https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf (2026-02-20) · « Réducteurs de débit : faux pas, risque de stagnation. »

### ACT_HOP_004 · Moderniser le traitement d'eau de l'unité d'hémodialyse

*Traitement d'eau de dialyse* · ameliorer_efficacite_hydrique · secteurs ['hopitaux'] · impact 3 · facilité 1 · moyen_terme · effort {"capex": "important", "opex": "faible", "humain": "moyen"} · statut brouillon

Remplacer les osmoseurs et générateurs anciens par des équipements récents à meilleur taux de conversion, et suivre la consommation d'eau par séance. Pour un établissement qui dialyse, c'est l'acte le plus consommateur, et l'effet peut aller jusqu'à diviser par deux l'eau par séance.

- **info** : Une séance d'hémodialyse consomme 382 litres selon le guide de la dialyse verte de la Société francophone de néphrologie, soit environ 60 000 litres par patient et par an. (https://www.omedit-grand-est.ars.sante.fr/media/117604/download)
- **retour_experience** : Le remplacement d'un système de traitement d'eau a fait passer la consommation d'environ 600 à moins de 300 litres par séance (Bendine et al., 2020). (https://www.omedit-grand-est.ars.sante.fr/media/117604/download)
- Sources :
  - description : https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf (sans date) · « Bi-osmoseurs et générateurs récents réduisent la consommation (DGOS, programme PHARE). »
  - description : https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf (sans date) · « Hémodialyse : 500 à 600 litres par séance, acte le plus consommateur. »
  - infos_complementaires : https://www.omedit-grand-est.ars.sante.fr/media/117604/download (2023-12-05) · « 382 litres par séance (guide SFNDT), 60 000 litres par patient et par an, passage d'environ 600 à moins de 300 litres par séance après remplacement du traitement d'eau. »

### ACT_HOP_005 · Choisir des équipements de blanchisserie et de stérilisation économes en eau

*Blanchisserie et stérilisation* · ameliorer_efficacite_hydrique · secteurs ['hopitaux'] · impact 2 · facilité 2 · moyen_terme · effort {"capex": "important", "opex": "faible", "humain": "faible"} · statut brouillon

Exiger des fournisseurs la consommation en litres par kilo de linge et par cycle de stérilisation, et privilégier tunnels de lavage et recyclage des eaux de rinçage. Le levier vaut aussi pour une blanchisserie externalisée, en faisant de l'eau un critère du marché.

- **info** : Ordres de grandeur : 5 à 20 litres par kilo de linge en blanchisserie, 60 à 120 litres par cycle de stérilisation. (https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf)
- **retour_experience** : Le changement du tunnel de lavage de la blanchisserie du CHU de Nice a économisé 5 000 m³ d'eau en un an. (https://www.fhf.fr/developpement-durable-archive/gestion-de-leau-lhopital)
- Sources :
  - description : https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf (sans date) · « Demander aux fournisseurs la consommation en litres par kg de linge et par unité d'œuvre de stérilisation, privilégier tunnels de lavage et recyclage. »
  - infos_complementaires : https://www.preventioninfection.fr/wp-content/uploads/2025/06/Philippe-Carenco.pdf (sans date) · « Blanchisserie : 5 à 20 litres par kg de linge. Stérilisation : 60 à 120 litres par cycle. »
  - infos_complementaires : https://www.fhf.fr/developpement-durable-archive/gestion-de-leau-lhopital (sans date) · « CHU de Nice : changement du tunnel de lavage, 5 000 m³ d'eau économisés en un an. »

### ACT_HOP_006 · Réutiliser les rejets d'osmose de la dialyse et de la stérilisation

*Réutilisation des rejets d'osmose* · valoriser_reut_eaux_non_conventionnelles · secteurs ['hopitaux'] · impact 2 · facilité 1 · moyen_terme · effort {"capex": "moyen", "opex": "faible", "humain": "moyen"} · statut brouillon

Collecter l'eau rejetée par les osmoseurs, propre mais non utilisée pour le soin, dans un circuit séparé du réseau d'eau potable, pour l'arrosage, le nettoyage ou les chasses d'eau. Vous récupérez une eau déjà payée, pertinente pour les établissements qui dialysent ou produisent de l'eau osmosée.

- **avertissement** : Les rejets d'osmose ne sont pas encore définis par la réglementation sur les eaux impropres à la consommation humaine : un projet passe par l'expérimentation prévue par le décret de 2024, sur manifestation d'intérêt auprès de la DGS, et l'équipe d'hygiène doit en être informée. (https://www.paca.ars.sante.fr/reutilisation-des-eaux-usees-traitees)
- **retour_experience** : Le centre de dialyse AURAL, à Lyon, réutilise 1 200 m³ par an d'eau de rejet d'osmose pour les sanitaires de ses bâtiments. (https://www.omedit-grand-est.ars.sante.fr/media/117604/download)
- Sources :
  - description : https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf (sans date) · « L'eau de rejet des osmoseurs peut servir aux espaces verts, au nettoyage, aux sanitaires ou aux buanderies si les circuits sont séparés du réseau d'eau potable. »
  - infos_complementaires : https://cpias-occitanie.fr/wp-content/uploads/2026/02/FAQ-eau-V2-20022026.pdf (2026-02-20) · « Rejets d'osmose inverse de la dialyse et de la stérilisation : pas encore définis réglementairement. »
  - infos_complementaires : https://www.paca.ars.sante.fr/reutilisation-des-eaux-usees-traitees (sans date) · « Expérimentation prévue par le décret de 2024, sur manifestation d'intérêt auprès de la DGS. L'équipe opérationnelle d'hygiène doit être informée de toute installation. »
  - infos_complementaires : https://www.omedit-grand-est.ars.sante.fr/media/117604/download (2023-12-05) · « AURAL Lyon : 1 200 m³ par an d'eau de rejet d'osmose réutilisés pour les sanitaires. »

### ACT_HOP_007 · Réduire à la source les rejets de médicaments et de désinfectants

*Rejets réduits à la source* · agir_rejets_qualite · secteurs ['hopitaux'] · impact 1 · facilité 2 · court_terme · effort {"capex": "faible", "opex": "moyen", "humain": "moyen"} · statut brouillon

Au-delà de l'autorisation de déversement, agir sur ce qui part à l'égout : pas de médicament à l'évier, centrales de dilution réglées, molécules moins persistantes à efficacité égale, en s'appuyant sur l'analyse des effluents par bâtiment. Pertinent surtout pour le court séjour, principale source des antibiotiques et du gadolinium de ses effluents.

- **avertissement** : Le déversement d'eaux usées autres que domestiques dans le réseau public doit être autorisé par la collectivité qui gère l'assainissement (article L1331-10 du code de la santé publique). (https://www.nimes-metropole.fr/fileadmin/mediatheque/Dossier-commun/Documentations/publications/Eau-et-assainissement/Extrait_Code_Sante_Publique.pdf)
- **retour_experience** : Au centre hospitalier Alpes Léman, suivi par le site pilote SIPIBEL, la caractérisation des effluents a fourni les valeurs de référence de la convention de déversement. L'hôpital y est la source principale de la ciprofloxacine (antibiotique) et du gadolinium (imagerie) retrouvés dans les eaux usées. (https://www.graie.org/Sipibel/publications/sipibel-presentation-effluentsmedicaments.pdf)
- Sources :
  - description : https://www.paca.ars.sante.fr/system/files/2024-07/EauVF.pdf (sans date) · « Recenser les sources d'effluents et les analyser, molécules et excipients les moins persistants à efficacité égale, interdire le rejet des médicaments à l'évier, régler les centrales de dilution. »
  - infos_complementaires : https://www.nimes-metropole.fr/fileadmin/mediatheque/Dossier-commun/Documentations/publications/Eau-et-assainissement/Extrait_Code_Sante_Publique.pdf (sans date) · « Article L1331-10 : tout déversement d'eaux usées autres que domestiques dans le réseau public doit être préalablement autorisé. »
  - infos_complementaires : https://www.graie.org/Sipibel/publications/sipibel-presentation-effluentsmedicaments.pdf (sans date) · « Caractérisation préalable ayant fourni les valeurs de référence de la convention. Ciprofloxacine et gadolinium plus concentrés dans l'effluent hospitalier. »
  - description : https://www.graie.org/Sipibel/publications/sipibel-presentation-effluentsmedicaments.pdf (sans date) · « L'hôpital est la source principale de la ciprofloxacine et du gadolinium dans ses effluents. »

## Simulation

# Simulation du référentiel "Hôpitaux et cliniques" (hopitaux)

Source : staging + publié · 12 questions · 12 mesures visibles · 200 profils aléatoires (graine 1) · 9 personas

### Alertes (1)

- plans vides : 18 % des profils

### Plans d'action

- Profils évalués : 200 (0 sans aucune réponse exploitable)
- Mesures par plan : min 0, médiane 3, max 10
- Plans vides : 18 % · plans complets : 0 %
- Profils avec un conflit add/remove de même priorité : 0 % (résolu par remove)

### Fréquence de chaque mesure

| Mesure | Titre | Catégorie | Fréquence |
|---|---|---|---|
| ACT_AGR_002 | Audit eau | suivre_comprendre_maitriser | 57 % |
| ACT_AGR_009 | Plan de gestion de l'eau | sensibiliser_former | 41 % |
| ACT_AGR_001 | Compteur par usage | suivre_comprendre_maitriser | 36 % |
| ACT_HOP_002 | Recherche de fuites | suivre_comprendre_maitriser | 26 % |
| ACT_AGR_006 | Récupération d'eau de pluie | valoriser_reut_eaux_non_conventionnelles | 26 % |
| ACT_HOP_001 | Bras morts et purges | changer_process_pratiques | 25 % |
| ACT_HOP_003 | Robinetterie adaptée | ameliorer_efficacite_hydrique | 25 % |
| ACT_HOP_006 | Réutilisation des rejets d'osmose | valoriser_reut_eaux_non_conventionnelles | 25 % |
| ACT_HOP_007 | Rejets réduits à la source | agir_rejets_qualite | 18 % |
| ACT_HOP_005 | Blanchisserie et stérilisation | ameliorer_efficacite_hydrique | 16 % |
| ACT_AGR_010 | Démarche collective | agir_grand_cycle | 16 % |
| ACT_HOP_004 | Traitement d'eau de dialyse | ameliorer_efficacite_hydrique | 13 % |

### Niveaux atteints

| Maturité | Profils | | Concernement | Profils |
|---|---|---|---|---|
| novice | 24 % | | faible | 10 % |
| intermediaire | 67 % | | moyen | 72 % |
| avance | 10 % | | eleve | 18 % |

### Filtres

| Filtre | Type | Effet | Déclenché |
|---|---|---|---|
| f_suivi_global | answer | add | 31 % |
| f_pas_audit | answer | add | 41 % |
| f_audit_inconnu | answer | add | 46 % |
| f_fuites_non_recherchees | answer | add | 26 % |
| f_purges_non_maitrisees | answer | add | 25 % |
| f_robinetterie | answer | add | 25 % |
| f_dialyse_ancienne | answer | add | 13 % |
| f_osmose_rejetee | answer | add | 12 % |
| f_sans_dialyse | answer | remove | 16 % |
| f_blanchisserie_sans_critere | answer | add | 16 % |
| f_sans_blanchisserie | answer | remove | 11 % |
| f_reseau_seul | answer | add | 26 % |
| f_effluents | answer | add | 18 % |
| f_continuite | answer | add | 41 % |
| f_collectif | answer | add | 23 % |
| f_avance_collectif | maturity | add | 10 % |
| f_deja_collectif | answer | remove | 44 % |
| f_sans_hebergement | answer | remove | 31 % |

### Questions conditionnelles

- hop_q02 : visible pour 59 % des profils
- hop_q03 : visible pour 59 % des profils
- hop_q04 : visible pour 59 % des profils
- hop_q05 : visible pour 59 % des profils
- hop_q06 : visible pour 59 % des profils
- hop_q07 : visible pour 59 % des profils
- hop_q08 : visible pour 59 % des profils
- hop_q09 : visible pour 59 % des profils
- hop_q10 : visible pour 25 % des profils

### Personas

### Centre hospitalier de 300 lits, rien de formalisé (hop_novice)

Centre hospitalier public de 300 lits avec urgences, blocs et imagerie, sans unité d'hémodialyse. Blanchisserie et stérilisation sur place, machines achetées sans regarder l'eau. Seule la facture d'eau est suivie, jamais d'audit, les fuites ne sont pas recherchées, les purges anti-légionelles se font au cas par cas, robinetterie d'origine, tout vient du réseau. Les effluents n'ont jamais été caractérisés, le plan blanc ne prévoit pas de coupure d'eau, aucune démarche de territoire.

Maturité 6 % (novice) · concernement 6 % · axes : equipements, comptage, audit, fuites, legionelles, autres_eaux, rejets, continuite, territoire

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Recherche de fuites (ACT_HOP_002, court_terme)
- Bras morts et purges (ACT_HOP_001, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Robinetterie adaptée (ACT_HOP_003, moyen_terme)
- Blanchisserie et stérilisation (ACT_HOP_005, moyen_terme)
- Rejets réduits à la source (ACT_HOP_007, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### Clinique MCO équipée, en réflexion sur la suite (hop_equipe)

Clinique privée de court séjour (180 lits) avec une unité d'hémodialyse dont le traitement d'eau a été remplacé il y a deux ans, mais dont les rejets d'osmose partent à l'égout. Sous-compteurs par bâtiment, campagne de recherche de fuites déjà menée, bras morts supprimés et purges tracées, robinetterie renouvelée avec l'équipe d'hygiène, critère d'eau dans le marché de blanchisserie, eau de pluie pour l'arrosage, convention de déversement suivie. Audit de plus de cinq ans, risque de coupure connu sans procédure écrite, connaît les démarches locales sans y participer.

Maturité 58 % (intermediaire) · concernement 67 % · axes : audit, dialyse, continuite, territoire

- Audit eau (ACT_AGR_002, immediat)
- Démarche collective (ACT_AGR_010, court_terme)
- Rejets réduits à la source (ACT_HOP_007, court_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)
- Réutilisation des rejets d'osmose (ACT_HOP_006, moyen_terme)

### Hospitalisation à domicile, sans lits sur site (hop_had)

Structure d'hospitalisation à domicile qui coordonne les soins de 80 patients depuis des bureaux. Aucun lit, aucun plateau technique, aucune blanchisserie sur site. La continuité des soins en cas de coupure d'eau chez les patients est connue comme un risque, sans procédure écrite. Aucune démarche de territoire.

Maturité 11 % (novice) · concernement 22 % · axes : continuite, territoire

- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### CHU exemplaire, démarche eau pilotée (hop_avance)

CHU de 1 200 lits avec dialyse, blanchisserie industrielle et stérilisation centrale. Télérelève et alertes de surconsommation, audit de moins de trois ans, recherche régulière des fuites, bras morts supprimés, robinetterie validée par l'hygiène, traitement d'eau de dialyse récent dont les rejets d'osmose sont réutilisés, tunnel de lavage à recyclage, plusieurs eaux non potables utilisées, réduction des rejets à la source engagée. Plan blanc avec procédure de coupure d'eau exercée chaque année, et le CHU anime une démarche territoriale sur l'eau.

Maturité 92 % (avance) · concernement 92 % · axes : aucun

Plan vide.

### Assistante de direction qui répond pour le directeur (hop_ne_sait_pas)

Une assistante de direction d'un centre hospitalier de 200 lits avec urgences remplit le questionnaire. Elle sait que l'établissement a un plateau technique et que la consommation d'eau n'est suivie que sur la facture. Elle ne sait rien du reste et répond « je ne sais pas » à toutes les autres questions.

Maturité 0 % (novice) · concernement 0 % · axes : comptage

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)

### Hôpital psychiatrique pavillonnaire avec parc (hop_psychiatrie_pavillonnaire)

Établissement public de santé mentale de 250 lits répartis dans quinze pavillons anciens sur un parc arboré de 20 hectares, sans bloc, sans imagerie lourde, sans dialyse. Blanchisserie confiée à un groupement hospitalier sans critère d'eau dans le marché. Relevé mensuel du compteur général, audit envisagé, des écarts de facture font réagir sans recherche de fuites, purges longues sur tous les points, réducteurs de débit posés dans les chambres il y a trois ans, tout vient du réseau. Plan blanc sans volet eau, aucune démarche de territoire.

Maturité 18 % (novice) · concernement 27 % · axes : equipements, comptage, audit, fuites, legionelles, autres_eaux, continuite, territoire

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Recherche de fuites (ACT_HOP_002, court_terme)
- Bras morts et purges (ACT_HOP_001, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Robinetterie adaptée (ACT_HOP_003, moyen_terme)
- Blanchisserie et stérilisation (ACT_HOP_005, moyen_terme)
- Plan de gestion de l'eau (ACT_AGR_009, court_terme)

### CHU avec grande unité de dialyse vieillissante (hop_gros_dialyseur)

CHU de 900 lits, gros consommateur, avec un centre d'hémodialyse de 40 postes dont l'osmoseur a quinze ans et dont personne ne connaît la consommation par séance. Sous-compteurs par bâtiment relevés chaque mois, audit de plus de cinq ans, une campagne de recherche de fuites a eu lieu, points peu utilisés recensés et purgés selon un protocole, critère d'économie au renouvellement de la robinetterie, critère d'eau exigé à l'achat pour la stérilisation. Projet d'eau de pluie étudié, convention de déversement suivie, procédure écrite de coupure d'eau, participe au contrat de nappe local.

Maturité 47 % (intermediaire) · concernement 58 % · axes : audit, dialyse, autres_eaux

- Audit eau (ACT_AGR_002, immediat)
- Compteur par usage (ACT_AGR_001, immediat)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Traitement d'eau de dialyse (ACT_HOP_004, moyen_terme)
- Rejets réduits à la source (ACT_HOP_007, court_terme)
- Réutilisation des rejets d'osmose (ACT_HOP_006, moyen_terme)

### Clinique en conformité, rien au-delà (hop_contraint_reglementaire)

Clinique chirurgicale de 120 lits avec imagerie et médecine nucléaire, sans dialyse. Elle fait ce que la réglementation impose : autorisation de déversement en règle, suivi des légionelles et purges selon un protocole sur les points recensés, mais rien au-delà. Relevé régulier du compteur général, jamais d'audit, fuites traitées quand la facture augmente, robinetterie d'origine, stérilisation sur place sans critère d'eau, réseau seul. Le plan blanc traite la coupure d'eau par une procédure écrite, aucune démarche de territoire.

Maturité 25 % (novice) · concernement 25 % · axes : equipements, comptage, audit, fuites, autres_eaux, rejets, territoire

- Compteur par usage (ACT_AGR_001, immediat)
- Audit eau (ACT_AGR_002, immediat)
- Recherche de fuites (ACT_HOP_002, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Robinetterie adaptée (ACT_HOP_003, moyen_terme)
- Blanchisserie et stérilisation (ACT_HOP_005, moyen_terme)
- Rejets réduits à la source (ACT_HOP_007, court_terme)

### Réponses contradictoires (hop_incoherent)

Hôpital local de 90 lits de soins de suite, sans plateau technique. Déclare une télérelève avec alertes mais ne recherche jamais les fuites, des bras morts supprimés mais une robinetterie d'origine, une unité de dialyse au traitement ancien alors qu'il n'a pas de plateau technique, et ni blanchisserie ni stérilisation. Audit récent, tout vient du réseau, procédure de coupure d'eau exercée, participe à une démarche collective.

Maturité 48 % (intermediaire) · concernement 52 % · axes : fuites, equipements, dialyse, autres_eaux

- Compteur par usage (ACT_AGR_001, immediat)
- Recherche de fuites (ACT_HOP_002, court_terme)
- Récupération d'eau de pluie (ACT_AGR_006, court_terme)
- Robinetterie adaptée (ACT_HOP_003, moyen_terme)
- Traitement d'eau de dialyse (ACT_HOP_004, moyen_terme)
- Réutilisation des rejets d'osmose (ACT_HOP_006, moyen_terme)

## Couverture par les solutions

# Couverture des mesures : hopitaux (seeds + staging)

12 mesures visibles · 2 sans prestataire · 4 sans aide · 1 sans rien

| Mesure | Catégorie | Prestataires liés | Aides liées |
|---|---|---|---|
| ACT_AGR_009 Plan de gestion de l'eau | Sensibiliser et former | Hydros [conseil_etude], Atelier Compte-Gouttes (Hydros) [formation] | aucune |
| ACT_AGR_001 Compteur par usage | Suivre, comprendre et maîtriser ses consommations | Adeunis [materiel], Ubigreen [materiel], Willie [materiel+conseil_etude] | aucune |
| ACT_AGR_002 Audit eau | Suivre, comprendre et maîtriser ses consommations | OFIS, Office d'ingénierie sanitaire (Veolia Ingénierie sanitaire) [conseil_etude], EnvirobatBDM [conseil_etude], Hydros [conseil_etude] | IND2, opérations groupées sectorielles « Établissements de santé et médico-sociaux » (agence de l'eau Rhône Méditerranée Corse, 12e programme), Gestion et préservation de la ressource en eau (Région Sud), Ressourc'Eau, programme de gestion durable de l'eau (CCI Pays de la Loire et agence de l'eau Loire-Bretagne), Diag Eco-Flux, diagnostic des flux énergie, eau, matières et déchets (ADEME et Bpifrance) |
| ACT_HOP_002 Recherche de fuites | Suivre, comprendre et maîtriser ses consommations | Société des Eaux de Marseille [conseil_etude], SADE, Compagnie générale de travaux hydrauliques [conseil_etude+travaux] | IND2, opérations groupées sectorielles « Établissements de santé et médico-sociaux » (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_HOP_003 Robinetterie adaptée | Améliorer l'efficacité hydrique de ses équipements | aucun | IND2, opérations groupées sectorielles « Établissements de santé et médico-sociaux » (agence de l'eau Rhône Méditerranée Corse, 12e programme), Gestion et préservation de la ressource en eau (Région Sud) |
| ACT_HOP_004 Traitement d'eau de dialyse | Améliorer l'efficacité hydrique de ses équipements | Hemotech [conseil_etude+travaux+materiel+formation], Fresenius Medical Care France [materiel+travaux] | IND2, opérations groupées sectorielles « Établissements de santé et médico-sociaux » (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_HOP_005 Blanchisserie et stérilisation | Améliorer l'efficacité hydrique de ses équipements | EnveneO Conseil [conseil_etude], JENSEN France [materiel+travaux], Ecolab [materiel], Matachana France [materiel] | IND2, opérations groupées sectorielles « Établissements de santé et médico-sociaux » (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_HOP_001 Bras morts et purges | Changer ses process ou pratiques | OFIS, Office d'ingénierie sanitaire (Veolia Ingénierie sanitaire) [conseil_etude] | aucune |
| ACT_AGR_006 Récupération d'eau de pluie | Valoriser ou réutiliser les eaux non conventionnelles | EcoRecup (récupération eaux pluviales) [conseil_etude+travaux], Fontaine Ingénierie [conseil_etude+formation] | Prêt Vert BPI : Transition écologique, IND2, opérations groupées sectorielles « Établissements de santé et médico-sociaux » (agence de l'eau Rhône Méditerranée Corse, 12e programme), PLUV, gestion intégrée des eaux pluviales en zone urbaine (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_HOP_006 Réutilisation des rejets d'osmose | Valoriser ou réutiliser les eaux non conventionnelles | Société des Eaux de Marseille [conseil_etude] | IND2, opérations groupées sectorielles « Établissements de santé et médico-sociaux » (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_HOP_007 Rejets réduits à la source | Agir sur ses rejets et la qualité de l'eau | Sanivap (groupe Oxy'Pharm) [materiel], EnvirobatBDM [conseil_etude] | IND2, opérations groupées sectorielles « Établissements de santé et médico-sociaux » (agence de l'eau Rhône Méditerranée Corse, 12e programme) |
| ACT_AGR_010 Démarche collective | Agir sur le grand cycle de l'eau | aucun | aucune |

### Fiches à rédiger

- prestataire pour ACT_HOP_003 (Robinetterie adaptée, Améliorer l'efficacité hydrique de ses équipements)
- prestataire pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)
- aide pour ACT_AGR_009 (Plan de gestion de l'eau, Sensibiliser et former)
- aide pour ACT_AGR_001 (Compteur par usage, Suivre, comprendre et maîtriser ses consommations)
- aide pour ACT_HOP_001 (Bras morts et purges, Changer ses process ou pratiques)
- aide pour ACT_AGR_010 (Démarche collective, Agir sur le grand cycle de l'eau)

### Fiches sans lien vers une mesure du secteur (visibles seulement par repli de catégorie)

- prestataire PREST_HOP_002
- prestataire PREST_HOP_003
- prestataire PREST_TRA_002
- aide AIDE_LAI_002
- aide AIDE_LAI_004

## Prestataires

### PREST_HOP_001 · OFIS, Office d'ingénierie sanitaire (Veolia Ingénierie sanitaire)

bureau_etudes · secteurs ['hopitaux'] · départements national · statut brouillon

Bureau d'études qui exerce sous le nom « Ingénierie sanitaire » de Veolia, certifié QB24 par le CSTB pour l'analyse des risques et le diagnostic sanitaire et technique des réseaux d'eau dans le bâtiment, établissements de santé compris, et présent sur tout le territoire national via six agences. Il évalue les risques des réseaux d'eau intérieurs en repérant les facteurs qui dégradent la qualité de l'eau, comme les bras morts, cartographie et diagnostique les réseaux pour la maîtrise du risque légionelle, et réalise des audits d'économies d'eau. Des hôpitaux lui ont confié par marché public un diagnostic des réseaux d'eau sanitaire pour la maîtrise du risque légionelle (CHU de Saint-Étienne), un audit-diagnostic des réseaux d'eau chaude et d'eau froide (GHT Vosges) et la cartographie des usages de l'eau (CHR Metz-Thionville). C'est aussi un organisme de formation certifié Qualiopi.

- Mesures : ACT_HOP_001 [conseil_etude], ACT_AGR_002 [conseil_etude]
- site_internet : https://assainissement-et-maintenance.veolia.fr/entreprises/besoins/ingenierie-sanitaire
- adresse : Parc du Golf, bâtiment 19, avenue Gautier de la Lauzière, 13080 Aix-en-Provence
- Sources :
  - siret, type, contacts (adresse) : https://recherche-entreprises.api.gouv.fr/search?q=office%20d%20ingenierie%20sanitaire&limite_matching_etablissements=20 (2026-10-15) · « OFFICE D INGENIERIE SANITAIRE (OFIS), siren 421025875, activité 71.12B, état administratif A, siège 42102587500186 21 RUE LA BOETIE 75008 PARIS ; établissement 42102587500152 PARC DU GOLF BAT 19 AV J R G GAUTIER DE LA LAUZIERE 13080 AIX-EN-PROVENCE, état A ; dirigeants : FOURNY Dorothée, Directeur Général ; complements : est_organisme_formation true, est_qualiopi true, liste_id_organisme_formation [11751140192] »
  - nom, contacts (site_internet), departements, description, expertises : https://assainissement-et-maintenance.veolia.fr/entreprises/besoins/ingenierie-sanitaire (2026-10-15) · « Depuis 1995, l'expertise Ingénierie sanitaire de Veolia est utile aux établissements tertiaires, de santé [...] Dorothée Fourny, Directrice générale Ingénierie sanitaire [...] La certification QB24 délivrée par le Centre scientifique et technique du bâtiment (CSTB) couvre [...] L'analyse des risques des réseaux d'eau dans le bâtiment ; Le diagnostic sanitaire et technique des réseaux d'eau dans le bâtiment [...] (ERP, hôtel, établissement de santé, etc.) [...] L'Ingénierie sanitaire de Veolia est un organisme de formation déclaré auprès de la préfecture de la Région Ile-de-France sous le n°11 75 1140 192. Une couverture nationale. Nos experts en ingénierie sanitaire interviennent sur tout le territoire national via six agences »
  - description, expertises, mesures (ACT_HOP_001 conseil_etude) : https://assainissement-et-maintenance.veolia.fr/entreprises/besoins/ingenierie-sanitaire/evaluation-risques-des-reseaux-eau (2026-10-15) · « Santé et médico-social : hôpitaux, cliniques, Ehpad. [...] 2. Identification des événements dangereux. Nos experts détectent les facteurs critiques susceptibles de dégrader la qualité sanitaire de l'eau (bras morts, températures inadaptées, matériaux vétustes, etc.). [...] 4. Plan de remédiation et surveillance. Nous proposons des mesures correctives concrètes »
  - description, expertises, mesures (ACT_HOP_001 conseil_etude) : https://assainissement-et-maintenance.veolia.fr/entreprises/besoins/ingenierie-sanitaire/maitrise-du-risque-legionelle (2026-10-15) · « 1. Connaître et diagnostiquer ses réseaux. La première étape consiste à réaliser une cartographie précise de vos réseaux. Nous effectuons des pré-diagnostics et des diagnostics techniques et sanitaires complets pour évaluer les risques de prolifération. [...] Certification CSTB : Veolia est certifiée QB24 »
  - description, expertises, mesures (ACT_AGR_002 conseil_etude) : https://assainissement-et-maintenance.veolia.fr/entreprises/besoins/ingenierie-sanitaire/economies-deau-maitrisez-vos-consommations-avec-lexpertise-veolia (2026-10-15) · « Réduisez votre facture et préservez la ressource avec l'audit économies d'eau de Veolia. Un diagnostic complet et un plan d'action chiffré pour vos sites. [...] 3. Diagnostic technique approfondi [...] inventaire des équipements et la mesure précise des débits et des pressions [...] 5. Élaboration du plan d'action »
  - mesures (ACT_AGR_002 conseil_etude) : https://assainissement-et-maintenance.veolia.fr/conseils/performance-et-economies-d-eau-en-environnement-hospitalier (2026-10-15) · « Centre hospitalier Santa Chiara (via Siram, filiale de Veolia) [...] 6 bâtiments hospitaliers audités intégralement. Plus de 50 mesures de débit et de pression effectuées [...] LA SOLUTION : un audit technique pour optimiser les consommations [...] définition d'un plan d'actions priorisé incluant une analyse financière (CAPEX/OPEX) »
  - description, mesures (ACT_HOP_001 conseil_etude) : https://tabular-api.data.gouv.fr/api/resources/22847056-61df-452d-837d-8b8ceadbfc52/data/?uid__exact=2642003040001420222022S2623500_71321300 (2026-10-15) · « acheteur_nom: CENTRE HOSPITALIER UNIVERSITAIRE, acheteur_commune_nom: Saint-Étienne, acheteur_departement_code: 42, titulaire_nom: OFFICE D INGENIERIE SANITAIRE, objet: MISSION DE DIAGNOSTIC, EXPERTISE TECHNIQUE ET HYDRAULIQUE DES RESEAUX D'EAU SANITAIRE POUR LA MAITRISE DU RISQUE LEGIONELLE, dateNotification: 2022-10-27 »
  - description : https://tabular-api.data.gouv.fr/api/resources/22847056-61df-452d-837d-8b8ceadbfc52/data/?uid__exact=2000294450010925-1089333_71321300 (2026-10-15) · « acheteur_nom: CENTRE HOSPITALIER INTERCOMMUNAL EMILE DURKHEIM, titulaire_nom: OFFICE D INGENIERIE SANITAIRE, objet: Réalisation d'un audit, diagnostic des réseaux de distribution d'Eau Chaude Sanitaire (ECS) et d'Eau Froide (EF) pour différents sites du GHT Vosges et ses annexes, dateNotification: 2025-02-25 »
  - description, mesures (ACT_AGR_002 conseil_etude) : https://tabular-api.data.gouv.fr/api/resources/22847056-61df-452d-837d-8b8ceadbfc52/data/?uid__exact=2657028030051020250000000445_71354100 (2026-10-15) · « acheteur_nom: CENTRE HOSPITAL REGION METZ THIONVILLE, titulaire_id: 42102587500186, titulaire_nom: OFFICE D INGENIERIE SANITAIRE, objet: Cartographie des usages de l'eau dans les établissements du CHR METZ-THIONVILLE, dateNotification: 2025-12-09 »
  - logo_url : https://assainissement-et-maintenance.veolia.fr/apple-icon.png (2026-10-15) · « apple-touch-icon 180 x 180 px (symbole Veolia) déclaré dans <link rel="apple-touch-icon"> de la page Ingénierie sanitaire »

### PREST_HOP_002 · Aquafluence

bureau_etudes · secteurs ['hopitaux'] · départements national · statut brouillon

Bureau d'études en plomberie sanitaire basé à Massy, avec une agence à Surgères, certifié QB24 par le CSTB pour le diagnostic des risques sanitaires des réseaux d'eau du bâtiment. Son audit légionelles et Pseudomonas relève les réseaux de distribution, recense les défauts de conception, d'équipement, de fonctionnement et de maintenance, modélise l'hydraulique des réseaux bouclés et livre un plan d'action. Il a diagnostiqué les réseaux d'eau de centres hospitaliers de l'Oise (Beauvais, Clermont, Noyon, Méru) en appui de l'ARS Hauts-de-France lors de leur inspection, ainsi que ceux de cliniques, et réalise l'analyse des risques EDCH, obligatoire avant le 1er janvier 2029 pour les établissements de santé qui consomment plus de 10 m³ par jour et alimentent plus de 50 personnes. Il propose aussi des formations au risque légionelles certifiées Qualiopi, en session à Malakoff ou dans vos locaux.

- site_internet : https://www.aquafluence.fr/
- tel : 01 60 13 09 69
- mail : administration@aquafluence.fr
- adresse : 8 rue René Cassin, 91300 Massy
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Aquafluence&departement=91 (2026-10-15) · « AQUAFLUENCE, siret 48416655800052, siège, 1ER ETAGE 8 RUE RENE CASSIN 91300 MASSY, activite_principale 71.12B, etat_administratif A »
  - contacts : https://www.aquafluence.fr/nous-contacter (2026-10-15) · « Aquafluence Île-de-France, 8 rue René Cassin, 91300 - Massy, 01 60 13 09 69. Véronique Kersten, Secrétariat - administration : administration@aquafluence.fr. Aquafluence Atlantique, Rue Théodore Tournat, 17700 - Surgères »
  - expertises, description : https://www.aquafluence.fr/nos-études-légionelles-et-pseudomonas (2026-10-15) · « L'audit a pour objectif d'identifier toutes les causes de développement de germes pathogènes (Legionella, Pseudomonas) : causes liées à la conception (ex. mauvais dimensionnement, absence de bouclage ou à l'inverse mise en place d'un nombre excessif de bouclage), causes liées à la maintenance (ex. défaut d'entretien des terminaux). Relevé détaillé des réseaux de distribution avec identification exhaustive des défauts. Modélisation et étude hydraulique du fonctionnement des réseaux bouclés. Proposition de plan d'action pour corriger les défauts. Sanitaires (hôpitaux publics et privés) »
  - description : https://www.aquafluence.fr/nos-références (2026-10-15) · « ARS Haut-de-France, DT de l'Oise : diagnostic des réseaux d'eau intérieurs de 7 sites hospitaliers dont CH de Beauvais, CH de Clermont, CH de Noyon, Clinique du Parc de Beauvais, CH de Méru sur Oise. Clinique de Champagne, Troyes : diagnostic de la production et du réseau d'eau chaude sanitaire, modélisation du réseau, plan d'action. Hôpital Louis Constant Fleming, Saint Martin. Clinique Mas de Rochet, Castelnau-le-Lez. EHPAD Les Opalines, Le Pradet (83) »
  - departements : https://www.aquafluence.fr/nos-références (2026-10-15) · « Choix éditorial faute de zone d'intervention publiée : la page références montre des interventions dans de nombreuses régions, dont l'Oise (CH de Beauvais, Clermont, Noyon, Méru), Troyes, Castelnau-le-Lez, Le Pradet (83), Valence (26), Vingt Hanaps (61), Wattignies (59), Paris, Strasbourg et Saint-Martin, d'où departements vide (national). »
  - expertises, description : https://www.aquafluence.fr/analysedesrisquessanitaires (2026-10-15) · « Aquafluence réalise l'analyse des risques relative aux installations intérieures de distribution d'eau destinée à la consommation humaine (EDCH), exigée par l'arrêté du 30 décembre 2022. Établissements concernés : les établissements de santé [...] ET Consommant plus de 10 m3 en moyenne par jour et alimentant plus de 50 personnes. Au plus tard le 1er janvier 2029 »
  - expertises : https://www.aquafluence.fr/nos-équilibrages-ecs (2026-10-15) · « Optimiser le confort des utilisateurs par une meilleure répartition de température et limiter ainsi le temps d'attente au niveau des différents points d'usage. Limiter le risque de développement de légionelles par un respect des températures minimales fixées par la règlementation (50°C en réseau) »
  - expertises, description : https://www.aquafluence.fr/nos-formations-légionelles-généralités (2026-10-15) · « AQLEG 1 - Gestion du risque lié aux légionelles dans les réseaux d'eau chaude sanitaire. 500 € HT. Bureaux&Co, 32 rue Guy Moquet, 92240 MALAKOFF. Possibilité de formation en INTRA (dans vos locaux) : nous consulter. Aquafluence Île-de-France a obtenu la certification Qualiopi »
  - description : https://www.aquafluence.fr/_files/ugd/bc02ec_d0bd8df0a13944ce883ab76ff711ae43.pdf (2026-10-15) · « QB - Réseaux d'eau dans le bâtiment (QB24), N° 25_02_QB24_CSTB_007, titulaire AQUAFLUENCE, 8 rue René Cassin, 91300 Massy. Diagnostics des risques sanitaires et désordres techniques dans les réseaux d'eau sanitaire dans le bâtiment. Date de décision : 16/09/2025 »
  - description : https://www.aquafluence.fr/_files/ugd/bc02ec_a362331f2af34672ab278cbdee9337bb.pdf (2026-10-15) · « I.Cert atteste que AQUAFLUENCE, 8 RUE RENE CASSIN, 1ER ETAGE MASSY 91300, SIREN 484166558, est titulaire de la certification Qualiopi. Actions de formation (AF). Validité 04/04/2026 au 03/04/2029 »
  - logo_url : https://static.wixstatic.com/media/bc02ec_3b9f7cc479e348e2b11683ef5bf82d33%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/bc02ec_3b9f7cc479e348e2b11683ef5bf82d33%7Emv2.png (2026-10-15) · « apple-touch-icon du site aquafluence.fr, 180 x 180, même symbole que le logo carré de la page d'accueil »

### PREST_HOP_003 · Provence Maintenance Services (VINCI Facilities)

installateur · secteurs ['hopitaux'] · départements ['13'] · statut brouillon

Entreprise de maintenance des bâtiments installée à Aix-en-Provence, qui exerce sous la marque VINCI Facilities, marque dédiée au facility management et à la maintenance multitechnique. Pour l'Assistance publique des hôpitaux de Marseille, elle est titulaire depuis janvier 2021 d'un marché de 48 mois (6 millions d'euros) de conduite, entretien et maintenance des installations d'eau sanitaire à l'intérieur des bâtiments hospitaliers, qui porte sur la conduite, la maintenance et le suivi des installations de distribution d'eau, de traitement d'eau et d'eau chaude sanitaire, avec une obligation de résultats en disponibilité et en sûreté de fonctionnement. Ses références publiques sont des marchés publics dans les Bouches-du-Rhône, dont l'exploitation, la conduite et la maintenance des installations électriques de l'hôpital d'instruction des armées Laveran à Marseille.

- site_internet : https://www.vinci-facilities.com/
- tel : 04 42 90 55 80
- adresse : 685 rue Georges Claude, 13100 Aix-en-Provence
- Sources :
  - siret, adresse, nom : https://recherche-entreprises.api.gouv.fr/search?q=Provence%20Maintenance%20Services&departement=13 (2026-10-15) · « PROVENCE MAINTENANCE SERVICES (VINCI FACILITIES), siret 43389978800072, siège, 685 RUE GEORGES CLAUDE 13100 AIX-EN-PROVENCE, activité 43.22B, etat_administratif A »
  - description (AP-HM), expertises, departements, secteurs : https://tabular-api.data.gouv.fr/api/resources/22847056-61df-452d-837d-8b8ceadbfc52/data/?uid__exact=26130008100484201977_71800000 (2026-10-15) · « DECP consolidées : acheteur CENTRE HOSPITALIER REGIONAL DE MARSEILLE (ASSISTANCE PUBLIQUE-HOPITAUX MARSEILLE), titulaire PROVENCE MAINTENANCE SERVICES (VINCI FACILITIES) (43389978800072), objet « Conduite, entretien et maintenance des installations d'eau sanitaire à l'intérieur des bâtiments hospitaliers », montant 6000000, dureeMois 48, dateNotification 2021-01-07, lieuExecution 13005 »
  - description (marché AP-HM, nature et montant) : https://tabular-api.data.gouv.fr/api/resources/22847056-61df-452d-837d-8b8ceadbfc52/data/?uid__exact=26130008100484201976_71800000 (2026-10-15) · « DECP consolidées : même acheteur et même objet, nature Marché, montant 600000, dureeMois 48, dateNotification 2021-01-01, offresRecues 6 »
  - description (périmètre du marché AP-HM) : https://ted.europa.eu/fr/notice/476224-2020/html (2026-10-15) · « Intitulé : Conduite, entretien et maintenance des installations d'eau sanitaire à l'intérieur des bâtiments hospitaliers. Description succincte : Prestations de conduite, de maintenance et suivi des installations de distribution d'eau, de traitement d'eau et eau chaude sanitaire de l'Assistance publique des hôpitaux de Marseille. Il s'agit d'un marché de services à obligation de résultats en termes de disponibilité et de sûreté de fonctionnement. Acheteur : APHM. Numéro de référence : 200018/Jo »
  - description (marchés publics dans les Bouches-du-Rhône), expertises, departements : https://tabular-api.data.gouv.fr/api/resources/22847056-61df-452d-837d-8b8ceadbfc52/data/?titulaire_id__exact=43389978800072&page_size=50 (2026-10-15) · « 17 marchés du titulaire 43389978800072, dont CCI Aix-Marseille-Provence « prestations d'exploitation et de maintenance multi technique des installations », CAF des Bouches-du-Rhône « Maintenance des installations électriques », lieux d'exécution dans le 13 »
  - contacts (tel), description (HIA Laveran) : https://ted.europa.eu/fr/notice/691357-2022/html (2026-10-15) · « Lot nº : 3 Intitulé : prestations d'exploitation, de conduite et de maintenance des installations électriques au profit de l'hia Laveran de Marseille. Nom officiel : vinci Facilities - société Provence Maintenance Service Adresse postale : 685, rue Georges Claude Ville : Aix-en-Provence Téléphone : +33 442905580 Adresse internet : http://www.vinci-facilities.com »
  - contacts (site_internet) : https://ted.europa.eu/fr/notice/133957-2021/html (2026-10-15) · « Section V, nom et adresse du titulaire : Vinci Facilities ù Provence Maintenance Services, 685 rue Georges-Claude, Aix-en-Provence. Internet address: https://www.vinci-facilities.com/ »
  - description (marque VINCI Facilities) : https://www.vinci-facilities.com/ (2026-10-15) · « VINCI Facilities est la marque dédiée au facility management et à la maintenance multitechnique »
  - logo_url : https://www.vinci-facilities.com/app/themes/ve-uas-marques/resources/assets/images/favicons/apple-touch-icon.png (2026-10-15) · « Icône carrée du site (apple-touch-icon, 180 x 180), symbole rouge de VINCI Facilities »

### PREST_HOP_004 · Société des Eaux de Marseille

bureau_etudes · secteurs ['hopitaux'] · départements national · statut brouillon

Exploitant des réseaux d'eau de la région marseillaise (plus de 5 000 km gérés pour des collectivités), la Société des Eaux de Marseille intervient ici en étude et diagnostic pour les établissements, dont les hôpitaux : recherche de fuites sur réseaux publics ou privés (corrélateurs acoustiques, sectorisation, compteurs connectés) avec rapport de diagnostic et actions correctives, et prévention du risque légionelles sur les réseaux d'eau chaude sanitaire, retenue par l'AP-HM. En 2025, elle a mené avec la Société du Canal de Provence l'étude de réutilisation des eaux de dialyse de l'hôpital de la Conception (AP-HM) : caractérisation du gisement (23 000 m³ par an potentiellement réutilisables), analyses dont les médicaments, et scénarios d'usage chiffrés pour les rejets des osmoseurs. Ancrée en région marseillaise, elle annonce intervenir sans contrainte géographique. Demande par téléphone, par mail ou par formulaire de rappel sur son site.

- Mesures : ACT_HOP_002 [conseil_etude], ACT_HOP_006 [conseil_etude]
- site_internet : https://www.eauxdemarseille.fr
- tel : 0 969 39 41 51
- mail : communication@eauxdemarseille.fr
- adresse : 78 boulevard Lazer, 13010 Marseille
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Soci%C3%A9t%C3%A9%20des%20Eaux%20de%20Marseille&departement=13 (2026-10-15) · « SOCIETE DES EAUX DE MARSEILLE (S.E.M.), siret 05780615000488, siège, 78 BOULEVARD LAZER 13010 MARSEILLE, etat_administratif A »
  - expertises, mesures (ACT_HOP_002), description : https://www.eauxdemarseille.fr/nos-offres/recherche-et-detection-de-fuites/ (2026-10-15) · « Syndics, copropriétés, particuliers, collectivités, régies, industries, centres commerciaux, hôpitaux … tous font appel à nos spécialistes en recherche de fuites. Étude et diagnostic pour la diminution des pertes (identification des anomalies, interprétation des résultats, rapport de diagnostic et proposition d'actions correctives). »
  - contacts : https://www.eauxdemarseille.fr/nos-offres/recherche-et-detection-de-fuites/ (2026-10-15) · « Par téléphone 0 969 39 41 51 (Appel non surtaxé). Par mail (mailto:communication@eauxdemarseille.fr). Laissez vos coordonnées, un expert va vous rappeler. »
  - departements : https://www.eauxdemarseille.fr/nos-offres/recherche-et-detection-de-fuites/ (2026-10-15) · « Un expert ou une équipe qui interviennent sans contrainte géographique et d'horaire, sur tous types de sites : industriels, entreprises, particuliers, communes et communautés de communes avec la compétence Eau potable. (Aucune limite de zone publiée : departements vide, choix éditorial.) »
  - type, description : https://www.eauxdemarseille.fr/nos-offres/recherche-et-detection-de-fuites/ (2026-10-15) · « La recherche de fuites est un des métiers phares de la Société des Eaux de Marseille qui gère plus de 5 000 km de réseaux d'eaux pour le compte de collectivités. Étude et diagnostic pour la diminution des pertes (identification des anomalies, interprétation des résultats, rapport de diagnostic et proposition d'actions correctives). »
  - expertises, description : https://www.eauxdemarseille.fr/nos-offres/maitrise-des-risques-sanitaires/ (2026-10-15) · « Son offre de service permet de lutter contre la prolifération des légionelles dans les réseaux d'eau chaude sanitaire pour tous les établissements recevant du public, notamment dans le secteur hospitalier. Pour leur sécurité sanitaire, l'Assistance Publique-Hôpitaux de Marseille ainsi que l'hôpital Européen ont choisi la Société des Eaux de Marseille. »
  - expertises, mesures (ACT_HOP_006), description : https://www.reset-bfc.fr/fileadmin/mediatheque_reset/actualites/20251113-3eme_rencontre_regionale/20251113_presentation_recuperation_eau_dialyse.pdf (2026-10-15) · « Étude de la réutilisation des eaux issues de la dialyse, Hôpital de la Conception. Prestataire : Société des Eaux de Marseille (SEM) et le canal de Provence (SCP). 23 000 m3/an potentiellement réutilisable. Osmoseur/adoucisseur : pour réutiliser ces eaux, il faudrait mettre en place un système de traitement simple de 10 m3/h. »
  - logo_url : https://www.eauxdemarseille.fr/app/uploads/2022/12/cropped-favicon-eaux-de-marseille-144x144-v5-180x180.png (2026-10-15) · « apple-touch-icon du site eauxdemarseille.fr, 180 x 180 »

### PREST_HOP_005 · SADE, Compagnie générale de travaux hydrauliques

installateur · secteurs ['hopitaux'] · départements national · statut brouillon

Entreprise de travaux publics spécialisée dans la construction et la remise en état des réseaux d'eau, filiale du groupe NGE depuis mars 2024 (auparavant Veolia), organisée en huit directions régionales. Elle pose, renouvelle et répare les canalisations d'eau potable et d'assainissement, y compris sur site hospitalier : en 2024, l'AP-HP lui a confié la réhabilitation du collecteur d'assainissement et le renouvellement des canalisations d'eau potable du site Tenon (marché de 699 518 euros), un renouvellement et non une campagne de recherche de fuites. L'offre d'interventions sur fuites (diagnostic des canalisations, recherche et localisation, réparations planifiées ou urgentes 24 heures sur 24) est publiée par sa direction Île-de-France, et la présence dans les Bouches-du-Rhône passe par la direction Sud (agence à Marseille, antenne à Meyreuil), sans établissement SADE ouvert dans ce département au registre Sirene.

- Mesures : ACT_HOP_002 [conseil_etude+travaux]
- site_internet : https://www.sade-cgth.fr/
- tel : 01 53 75 99 11
- adresse : 23-25 avenue du Docteur Lannelongue, 75014 Paris
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=SADE%20compagnie%20generale%20de%20travaux%20hydrauliques&departement=13 (2026-10-15) · « SADE - COMPAGNIE GENERALE DE TRAVAUX HYDRAULIQUES, siret 56207750302584, siège, 23-25 AV DU DOCTEUR LANNELONGUE 75014 PARIS 14, etat_administratif A, 72 établissements ouverts »
  - description (aucun établissement ouvert dans le 13) : https://recherche-entreprises.api.gouv.fr/search?q=SADE%20COMPAGNIE%20GENERALE%20DE%20TRAVAUX%20HYDRAULIQUES&departement=13&per_page=3 (2026-10-15) · « SADE - COMPAGNIE GENERALE DE TRAVAUX HYDRAULIQUES, établissement correspondant dans le 13 : 56207750302287, 11 boulevard de la Grande Thumine 13100 Aix-en-Provence, état F, fermé le 2005-03-16. SADERTELEC (792602278), 251 boulevard Mireille Lauze 13010 Marseille, état A »
  - contacts (tel, adresse), departements : https://www.sade-cgth.fr/france/ (2026-10-15) · « SADE 23-25 av. du Docteur Lannelongue 75014 Paris Tél : 01 53 75 99 11. Directions Régionales : DR Centre-Est, DR Grand Est, DR Hauts-de-France, DR Ile-de-France, DR Normandie, DR Ouest, DR Sud, DR Sud-Ouest »
  - departements : https://www.sade-cgth.fr/chiffres-cles/ (2026-10-15) · « 100 sites en France »
  - description (présence dans le 13), expertises : https://www.sade-cgth.fr/dr-sud/ (2026-10-15) · « Agence de Marseille 251, boulevard Mireille Lauze 13395 Marseille Tél : 04 91 80 85 57. Antenne de Meyreuil Chemin du Sarret 13590 Meyreuil. La Direction Régionale Sud propose des solutions spécifiques pour la réhabilitation des réseaux par la technique de l'éclatement »
  - mesures, expertises, description : https://tabular-api.data.gouv.fr/api/resources/22847056-61df-452d-837d-8b8ceadbfc52/data/?uid__exact=267500452005242539453_45232410 (2026-10-15) · « DECP consolidées : acheteur ASSISTANCE PUBLIQUE HOPITAUX DE PARIS, titulaire SADE - COMPAGNIE GENERALE DE TRAVAUX HYDRAULIQUES (56207750300125), objet « Réhabilitation du collecteur visitable d'assainissement et renouvellement des canalisations d'eau potable, Site Tenon », montant 699518, type Travaux, notifié le 2024-08-07 »
  - mesures, expertises, description : https://www.sade-cgth.fr/dr-ile-de-france/interventions-sur-fuites/ (2026-10-15) · « Effectuer le diagnostic de l'état des canalisations et branchements. Rechercher et localiser les fuites. Réaliser les interventions planifiées ou des réparations urgentes. Mettre en place des moyens d'intervention 24/24 et 7/7 »
  - expertises : https://www.sade-cgth.fr/eau/eau-potable/ (2026-10-15) · « Eau potable : Canalisations et branchements. Assainissement : Canalisations »
  - description (groupe NGE) : https://echanges.dila.gouv.fr/OPENDATA/AMF/BWR/2024/03/FCBWR155433_20240304.pdf (2026-10-15) · « Veolia annonce la finalisation de l'acquisition par NGE, groupe indépendant de travaux publics, de SADE-CGTH, sa filiale à 100 % spécialisée dans la construction et la remise en état des réseaux d'eau (communiqué du 4 mars 2024) »
  - logo_url : https://www.sade-cgth.fr/wp-content/uploads/2021/01/cropped-favicon_sade-270x270.jpg (2026-10-15) · « Icône carrée du site (msapplication-TileImage, 270 x 270) »

### PREST_HOP_006 · Adeunis

equipementier · secteurs ['hopitaux'] · départements national · statut brouillon

Fabricant de capteurs sans fil (LoRaWAN, Sigfox, cellulaires) installé à Crolles, en Isère. Adeunis ne vend pas le compteur divisionnaire lui-même mais le capteur de télérelève qui l'équipe : son capteur PULSE se branche sur la sortie à impulsions d'un compteur d'eau pour en remonter l'index, surveiller le débit par seuils et déclencher une alarme en cas de fuite. Au CHU de Clermont-Ferrand, ces capteurs relèvent les compteurs d'eau et transmettent les données, via un concentrateur, au système de gestion énergétique. Achat auprès des distributeurs de la marque, ou contact direct avec l'équipe commerciale à défaut de distributeur proche.

- Mesures : ACT_AGR_001 [materiel]
- site_internet : https://www.adeunis.com/
- tel : 04 76 92 01 62
- mail : sales@adeunis.com
- adresse : 283 rue Louis Néel, Parc technologique Pré Roux, 38920 Crolles
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Adeunis&departement=38 (2026-10-15) · « ADEUNIS, siret 43019049600025, siège, PARC TECHNOLOGIQUE PRE ROUX 283 RUE LOUIS NEEL 38920 CROLLES, activite_principale 26.30Z, etat_administratif A »
  - type : https://echanges.dila.gouv.fr/OPENDATA/AMF/ACT/2023/09/FCACT066115_20230918.pdf (2026-10-15) · « Les capteurs cellulaires Adeunis, conçus et fabriqués sur le sol français, utilisent ainsi le module radio nRF9160 de Nordic. Adeunis compte 30 collaborateurs sur 1 site unique en France (près de Grenoble). »
  - type : https://www.adeunis.com/societe-iot/ (2026-10-15) · « Savoir-faire industriel : + de 5 millions de produits vendus, Industrialisation de +100 produits, Production en grandes séries »
  - mesures (ACT_AGR_001), expertises, description : https://www.adeunis.com/cas-client-iot-energie-hopital/ (2026-10-15) · « CHU de Clermont-Ferrand : surveiller et optimiser ses consommations (eau, électricité, température...). PULSE : permettre de remonter des indices de compteur d'eau et surveiller les consommations. Le concentrateur met à disposition, via BacNet, du système de gestion énergétique les données collectées. »
  - mesures (ACT_AGR_001), expertises, description : https://www.adeunis.com/produit/pulse-compteur-iot/ (2026-10-15) · « Ce capteur sans fil est conçu pour se connecter facilement aux compteurs d'électricité, d'eau ou thermique. Détection de fraude et de fuite. Surveillance de débit d'un compteur. Déclencher une alarme lorsque le débit dépasse un seuil (haut/bas), lorsqu'une fuite est détectée. »
  - expertises : https://www.adeunis.com/produit/water-leak-cable-detection-deau/ (2026-10-15) · « WATER LEAK CABLE : détecter une fuite d'eau au sol, autour d'un objet ou d'un équipement. Position du capteur : autour d'un élément, le long d'un mur, autour d'un tuyau. »
  - contacts : https://www.adeunis.com/contact/ (2026-10-15) · « 283 Rue Louis Néel, 38920 Crolles, France. Réception / Administration : +33 (0) 4 76 92 01 62. Commerce : sales@adeunis.com »
  - departements, description : https://www.adeunis.com/revendeurs/ (2026-10-15) · « Sélectionnez parmi la liste de pays celui dans lequel vous souhaitez rechercher un distributeur. Si vous ne trouvez pas de distributeur proche de chez vous, n'hésitez pas à nous contacter. »
  - logo_url : https://www.adeunis-bourse.com/images/template/adeunis-logo-touch-icon.png (2026-10-15) · « apple-touch-icon du site investisseurs adeunis-bourse.com, symbole en couleur, 192 x 192 »

### PREST_HOP_007 · Ubigreen

solution_numerique · secteurs ['hopitaux'] · départements national · statut brouillon

Éditeur basé à Labège (31) d'une plateforme en ligne de suivi des consommations multi-fluides (électricité, gaz, chaleur, eau), utilisée par l'AP-HP depuis 2018 sur 38 hôpitaux. Ubigreen ne fournit pas le compteur : elle fournit des modules de télérelève qui se raccordent aux compteurs et sous-compteurs d'eau existants dotés d'une sortie à impulsions, centralise leurs relevés et envoie par courriel ou SMS des alertes sur les consommations d'eau inhabituelles. L'établissement exploite lui-même la plateforme, le premier contact se fait sur rendez-vous avec un expert de l'éditeur.

- Mesures : ACT_AGR_001 [materiel]
- site_internet : https://www.ubigreen.com/
- mail : sales@ubigreen.com
- tel : 04 42 84 10 35
- tel : 05 61 80 70 67
- adresse : 1000 L'Occitane, 31670 Labège
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Ubigreen&departement=31 (2026-10-15) · « UBIGREEN, siret 78891923100076, siège, 1000 L'OCCITANE 31670 LABEGE, etat_administratif A »
  - adresse, contacts (tel du siège) : https://www.ubigreen.com/mentions-legales/ (2026-10-15) · « UBIGREEN SAS [...] RCS 788 919 231 Siège social : 1000 L'Occitane, 31670 Labège - Tél. : +33 (0)5 61 80 70 67 »
  - contacts (mail, tel) : https://www.ubigreen.com/contactez-nous/ (2026-10-15) · « Contact commercial sales@ubigreen.com 04 42 84 10 35 »
  - description, expertises, secteurs (référence hospitalière, eau suivie, prise de rendez-vous) : https://www.ubigreen.com/management-energetique-sante/ (2026-10-15) · « Depuis 2018, l'Assistance Publique, Hôpitaux de Paris (AP-HP) s'appuie sur Ubigreen pour maîtriser, piloter et analyser ses consommations multi-fluides (électricité, gaz, chauffage urbain, biomasse, eau) [...] sur 38 hôpitaux répartis en 6 GHU [...] Prendre RDV avec un de nos experts »
  - expertises, mesures (ACT_AGR_001) : https://www.ubigreen.com/management-energetique-sante/ (2026-10-15) · « Télérelève et sous-comptage : des données fiables, site par site et poste par poste (blocs, blanchisserie, ECS…), pour cibler les bons leviers. Alertes sur dérives : dépassement de seuil, consommation d'eau inhabituelle, compteur muet, donnée incohérente : alertes par email ou SMS. »
  - description, expertises, mesures (ACT_AGR_001) : https://www.ubigreen.com/capteurs-energie/ (2026-10-15) · « Capteur d'eau : mesurez votre consommation d'eau [...]. Blue Pulse est une solution de télérelève et d'optimisation des réseaux d'eau compatible avec la plupart des compteurs disposant d'un émetteur d'impulsions (intégré ou couplé au compteur) »
  - description (pas de fourniture du compteur), expertises, mesures (ACT_AGR_001) : https://www.ubigreen.com/smartmetering-telerelever-consommations-usage/ (2026-10-15) · « Faut-il remplacer les compteurs existants ? Pas nécessairement. Ubigreen s'intègre aux équipements et compteurs existants et peut les compléter avec des capteurs, dispositifs de télérelève ou passerelles [...] Le sous-comptage permet de mesurer séparément la consommation d'une zone, d'un usage ou d'un équipement. »
  - departements (plateforme en ligne) : https://www.ubigreen.com/energy-management/ (2026-10-15) · « La plateforme est accessible en ligne, sans installation d'un logiciel sur chaque poste utilisateur. [...] permet de suivre plusieurs fluides, notamment l'électricité, le gaz, l'eau et les énergies thermiques »
  - logo_url : https://www.ubigreen.com/wp-content/uploads/2023/01/cropped-MicrosoftTeams-image-2-300x300.png (2026-10-15) · « apple-touch-icon du site ubigreen.com, symbole carré en couleur »

### PREST_HOP_008 · Hemotech

installateur · secteurs ['hopitaux'] · départements national · statut brouillon

Distributeur de produits pour l'hémodialyse basé à Ramonville-Saint-Agne, membre de Pollet Medical Group, dont le bureau d'études traitement d'eau a fêté son 100e projet de traitement d'eau pour dialyse. Il dimensionne, installe, met en service et maintient les systèmes de traitement d'eau des unités de dialyse, de l'autodialyse à la réhabilitation de CHU de plus de 40 postes, avec phasage et systèmes provisoires pendant les travaux, et forme les utilisateurs et les techniciens. Il ne fabrique pas les osmoseurs, produits en Allemagne par HERCO Wassertechnik et distribués en France par Hemotech, et l'offre s'établit après étude du site ou passe par la centrale d'achat UGAP.

- Mesures : ACT_HOP_004 [conseil_etude+travaux+materiel+formation]
- site_internet : https://hemotech.fr/
- tel : 05 61 75 27 27
- mail : info@hemotech.fr
- adresse : 19 avenue de l'Europe, CS 62270, 31522 Ramonville-Saint-Agne Cedex
- linkedin : https://fr.linkedin.com/company/hemotech
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Hemotech&departement=31 (2026-10-15) · « HEMOTECH, SIRET 34821460200024, siège, CS 62270 19 AVENUE DE L'EUROPE 31520 RAMONVILLE-SAINT-AGNE, état administratif A »
  - description, expertises, mesures : https://hemotech.fr/bureau-detudes-traitement-deau/ (2026-10-15) · « Elle intègre le dimensionnement de systèmes de traitement d'eau pour la dialyse, l'installation, la mise en service et la maintenance associée. [...] L'assurance d'une continuité de service avec des phasages et des systèmes provisoires pendant l'installation. [...] La formation et assistance aux utilisateurs. »
  - description, mesures : https://hemotech.fr/bureau-detudes-traitement-deau/ (2026-10-15) · « Nous intervenons sur des grandes structures : création de clinique, réhabilitation de CHU (plus de 40 postes de dialyse), comme sur des petites entités telles les autodialyses. [...] Formation utilisateurs & techniciens »
  - description, type, mesures : https://hemotech.fr/bureau-detudes-traitement-deau/ (2026-10-15) · « Osmoseur. Dispositif médical destiné au traitement des eaux pour dialyse. [...] Fabriqué en Allemagne par HERCO Wassertechnik GmbH. Distribué en France par HEMOTECH SAS. »
  - description : https://hemotech.fr/bureau-detudes-traitement-deau/ (2026-10-15) · « une étude du site en amont de l'étude et anticipation des contraintes [...] Le référencement de nos systèmes de traitement d'eau par la centrale d'achat UGAP facilite les démarches des ingénieurs biomédicaux. »
  - description, departements : https://hemotech.fr/le-100eme/ (2026-10-15) · « Nous sommes fiers de fêter notre 100ème projet de traitement d'eau pour dialyse. [...] une offre complète dédiée à la dialyse, déployée sur toute la France métropolitaine et les DROM-COM. »
  - contacts : https://hemotech.fr/bureau-detudes-traitement-deau/ (2026-10-15) · « Hemotech Toulouse 19 avenue de l'Europe CS 62270 31522 Ramonville St Agne Cedex Tel : 05 61 75 27 27 [...] info@hemotech.fr »
  - contacts : https://hemotech.fr/ (2026-10-15) · « Lien LinkedIn du site : https://fr.linkedin.com/company/hemotech »
  - logo_url : https://hemotech.fr/wp-content/uploads/2021/03/cropped-favicon-192x192.png (2026-10-15) · « Icône du site hemotech.fr (192 x 192 px) »

### PREST_HOP_009 · Fresenius Medical Care France

installateur · secteurs ['hopitaux'] · départements national · statut brouillon

Filiale française du groupe allemand Fresenius Medical Care, fournisseur de produits de dialyse. Son site de production de L'Arbresle fabrique des dialyseurs et des concentrés, aucune page consultée ne situe la fabrication de ses systèmes de traitement d'eau, d'où le type installateur retenu pour cette activité de fourniture et de pose. Elle est l'un des deux titulaires, avec Vantive SAS, du marché UniHA 2024-2028 des centrales de traitement d'eau d'hémodialyse, qui couvre la fourniture (composants de boucle, osmoseurs, tuyauterie), l'installation, la mise en service, la qualification, la maintenance et la formation, et annonce des économies d'eau avec certains osmoseurs adaptant le débit à la demande. Les établissements publics adhérents d'UniHA y accèdent par la centrale d'achat, en offre complète ou à la carte.

- Mesures : ACT_HOP_004 [materiel+travaux]
- site_internet : https://freseniusmedicalcare.com/fr-fr/
- tel : 01 49 84 78 00
- mail : info.france@freseniusmedicalcare.com
- adresse : Parc Médicis, 47 avenue des Pépinières, 94832 Fresnes Cedex
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Fresenius%20Medical%20Care%20France&departement=94 (2026-10-15) · « FRESENIUS MEDICAL CARE FRANCE, siret 65202528900099, siège, 47 AVENUE DES PEPINIERES 94260 FRESNES, etat_administratif A »
  - contacts : https://freseniusmedicalcare.com/fr-fr/contact/ (2026-10-15) · « Parc Médicis, 47 avenue des Pépinières, 94832 Fresnes Cedex. Tél. : +33 (0)1 49 84 78 00 »
  - description (groupe), contacts (mail) : https://freseniusmedicalcare.com/fr-fr/mentions-legales/ (2026-10-15) · « Publié par : Fresenius Medical Care AG & Co. KGaA, Représenté par son partenaire général Fresenius Medical Care Management AG, Hof an der Saale [...] Immatriculée au Registre du Commerce et des Sociétés de Créteil, sous le numéro B 652 025 289. Email : info.france@freseniusmedicalcare.com (lien mailto identique) »
  - description (activité) : https://freseniusmedicalcare.com/fr-fr/a-propos-de-nous/fresenius-medical-care-en-france/ (2026-10-15) · « le principal fournisseur de produits de dialyse, comme les générateurs de dialyse ou les dialyseurs »
  - description (site de L'Arbresle, type) : https://freseniusmedicalcare.com/fr-fr/a-propos-de-nous/smad-production-site/ (2026-10-15) · « Productions du site : concentrés secs bi_b_ag 4008 et 5008, concentré acide Granudial, plus de 30 millions de dialyseurs fabriqués tous les ans, fibres en polysulfone, composants plastiques ; aucun système de traitement d'eau cité »
  - description, expertises, mesures, categories : https://www.uniha.org/marche/traitement-deau-dialyse-m-2937 (2026-10-15) · « Centrale de traitement d'eau pour service d'hémodialyse et d'hémodiafiltration : fourniture, installation, mise en service et maintenance [...] composants de la boucle, osmoseurs, tuyauterie ainsi que les prestations de qualifications, la maintenance, la formation, les travaux et les prestations de bureau d'étude [...] Economie sur les consommations en eau avec certains osmoseurs adaptant le débit à la demande [...] Les fournisseurs titulaires des lots FRESENIUS MEDICAL CARE FRANCE VANTIVE SAS. Début de marché 24 janvier 2024, Fin de marché 23 janvier 2028 [...] Osmoseurs très efficients permettant des rejets et une perte en eau minimum. Offre complète ou à la carte. Moyens d'accès : Centrale d'achats »
  - departements, description (accès UniHA) : https://www.uniha.org/qui-sommes-nous/uniha-union-hopitaux-achats (2026-10-15) · « UniHA est le groupement national de référence pour la mutualisation des achats des hôpitaux publics. »
  - logo_url : https://freseniusmedicalcare.com/content/experience-fragments/fresenius-medical-care/fr/fr/site/header/master/_jcr_content/root/freseniuscontainer_c/image.coreimg.svg/1744275039691/fmc-logo.svg (2026-10-15) · « Logo du bandeau du site freseniusmedicalcare.com/fr-fr (l'icône carrée du site n'existe qu'en 16 px) »

### PREST_HOP_010 · EnveneO Conseil

bureau_etudes · secteurs ['hopitaux'] · départements national · statut brouillon

Cabinet de conseil indépendant spécialisé dans les procédés de blanchisserie, basé dans l'Essonne, qui intervient en France et en Europe. Il réalise des diagnostics des process (traitement d'eau, lavage et séchage, vapeur) avec bilans eau, vapeur et énergie et plan d'actions chiffré, et assure l'assistance à maîtrise d'ouvrage des projets de blanchisserie (faisabilité, rédaction du CCTP, analyse des offres, suivi de chantier). Son intervention se limite à la blanchisserie : le site ne mentionne ni la stérilisation ni le recyclage des eaux de rinçage, et la mission menée pour la blanchisserie hospitalière du CHU de Nantes a un résultat publié qui porte sur le gaz, pas sur l'eau. Il propose aussi des formations sur mesure aux process et équipements, dispensées par l'organisme ITENOR. Prise de contact directe pour échanger sur les besoins ou planifier un diagnostic.

- Mesures : ACT_HOP_005 [conseil_etude]
- site_internet : https://www.enveneo.fr/
- tel : 06 86 26 59 18
- mail : jpasquet@enveneo.fr
- adresse : 17 square du Tertre, 91070 Bondoufle
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=EnveneO%20Conseil (2026-10-15) · « ENVENEO CONSEIL, siret 91047429500011, siège, 17 SQUARE DU TERTRE 91070 BONDOUFLE, activité 71.12B, état administratif A »
  - contacts, departements, description : https://www.enveneo.fr/contact/ (2026-10-15) · « Adresse 17 square du Tertre, 91 070 BONDOUFLE. Téléphone 06 86 26 59 18. Email jpasquet@enveneo.fr. Zone d'intervention France et Europe. Contactez-nous pour échanger sur vos besoins ou planifier un diagnostic. »
  - description : https://www.enveneo.fr/ (2026-10-15) · « expert reconnu du process de blanchisserie et de la gestion de l'eau et de l'énergie depuis plus de 25 ans. [...] Le CHU de Nantes a engagé une démarche ambitieuse de réduction de ses consommations en gaz fossile sur sa blanchisserie hospitalière »
  - description, expertises, mesures (conseil_etude) : https://www.enveneo.fr/diagnostic/ (2026-10-15) · « EnveneO Conseil réalise des diagnostics complets des performances de vos process (traitement d'eau, traitement des rejets, process lavage et séchage, production de vapeur,...) [...] Bilans eau / vapeur / énergie [...] séchoirs, calandres, tunnels, chaufferie, échangeurs, production d'eau de process. »
  - description, expertises, mesures (conseil_etude) : https://www.enveneo.fr/assistance-a-maitrise-douvrage/ (2026-10-15) · « EnveneO Conseil intervient en AMO spécialisé, garantissant la cohérence technique et énergétique du projet à chaque étape. [...] Rédaction du CCTP »
  - expertises, description : https://www.enveneo.fr/formation/ (2026-10-15) · « EnveneO Conseil propose des formations sur mesure, centrées sur vos équipements et votre réalité d'exploitation. [...] Gestion de l'eau et de l'énergie. Les formations sont dispensées via la société ITENOR organisme de formation certifié QUALIOPI. »
  - logo_url : https://www.enveneo.fr/wp-content/uploads/2025/10/cropped-favicon-180x180.png (2026-10-15) · « apple-touch-icon du site enveneo.fr, symbole goutte 180 x 180 »

### PREST_HOP_011 · JENSEN France

installateur · secteurs ['hopitaux'] · départements national · statut brouillon

Filiale française du groupe international JENSEN, d'origine danoise, spécialiste des équipements de blanchisserie industrielle, basée à Épône (Yvelines). Elle fournit et installe en France les tunnels de lavage, presses et calandres conçus et fabriqués par les usines du groupe, et assure le service et les pièces détachées. Elle a équipé les blanchisseries du CHU de Besançon (tunnel UniQ et presse) et du centre hospitalier de Cambrai (tunnel de 12 modules), retenue sur appel d'offres, en achat ou en location avec option d'achat.

- Mesures : ACT_HOP_005 [materiel+travaux]
- site_internet : https://www.jensen-group.com/fr
- mail : info-fr@jensen-group.com
- tel : +33 1 39 29 76 04
- adresse : Avenue de la Mauldre, CS20605, ZA de la Couronne des Prés, 78680 Épône
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=JENSEN%20France&departement=78 (2026-10-15) · « JENSEN FRANCE S.A.S., siret 63200026100057, siège, ZA DE LA COURONNE DES PRES AVENUE DE LA MAULDRE 78680 EPONE, activité 46.69C, etat_administratif A »
  - contacts, departements : https://www.jensen-group.com/fr/contact/FR (2026-10-15) · « Sales: JENSEN FRANCE S.A.S., Avenue de la Mauldre CS20605 Z.A. de la Couronne des Prés, FR-78680 Epône (Paris), info-fr@jensen-group.com, +33 1 39 29 76 04. Service: service-fr@jensen-group.com. Spares: stock-fr@jensen-group.com »
  - description, type : https://www.jensen-group.com/fr/jensen-votre-partenaire (2026-10-15) · « Le groupe JENSEN est capable de planifier, développer, fabriquer, installer et entretenir tout équipement. Les usines des régions commerciales développent, produisent et livrent une gamme complète de produits JENSEN aux clients, grâce à un réseau mondial de centres de vente et de service »
  - description : https://www.jensen-group.com/fr/jensen-votre-partenaire/historique (2026-10-15) · « Le groupe JENSEN trouve son origine dans une société de services et de fabrication, fondée en 1937 à Bornholm, une île danoise de la Mer baltique »
  - description, expertises, mesures : https://www.entretien-textile.fr/index.php/actualite/blanchisseries-industrielles-hospitalieres/le-chu-de-besancon-retient-jensen-pour-son-train-de-lavage (2026-10-15) · « C'est Jensen qui a emporté l'offre comprenant un tunnel Uniq 11 modules de 50 kg et une presse de 40 bars. L'installation s'est faite avec professionnalisme sur trois jours, courant mai. La consommation d'eau et d'énergie correspond bien à la baisse attendue. »
  - description, expertises, mesures : https://www.entretien-textile.fr/actualite/fournisseurs/un-nouveau-tunnel-de-lavage-au-ch-de-cambrai (2026-10-15) · « Ce tunnel de 12 modules de 35 kg vient en remplacement d'un tunnel Arista installé en 2005. Le tunnel a été acquis sous la forme d'une AOL, une location avec option d'achat à cinq ans. Nous devrions également gagner en consommation d'eau et d'énergie. Une calandre alpha de Jensen. »
  - expertises, mesures : https://www.jensen-group.com/fr/products/washroom-technology/washing/tunnel-de-lavage-uniq-de-jensen (2026-10-15) · « Consommation d'eau de seulement 1,6 l/kg confirmée pour la version BlueEdition. Une consommation d'eau minimale grâce à un processus de rinçage breveté et un concept exceptionnel de récupération de l'eau. »
  - expertises : https://www.jensen-group.com/fr/sante (2026-10-15) · « Le programme de lavage idéal pour les hôpitaux et les maisons de repos. Presse d'extraction d'eau SEPPlus. Une faible consommation d'énergie, d'eau et de produits chimiques »
  - logo_url : https://www.jensen-group.com/_assets/2755d902211d761c5a1a13cf6afcffc9/Images/favicon.ico (2026-10-15) · « Favicon du site jensen-group.com, symbole J carré, 48 x 48 px »

### PREST_HOP_012 · Ecolab

equipementier · secteurs ['hopitaux'] · départements national · statut brouillon

Ecolab SNC, basée à Bagneux (Hauts-de-Seine), est l'entité française du groupe américain Ecolab, dont le siège mondial est à Saint Paul (Minnesota). Pour les blanchisseries, elle fournit des produits lessiviels avec matériel de dosage et des systèmes de réutilisation de l'eau des tunnels de lavage propres à la marque. Le groupe déclare trois sites de fabrication en France sans préciser ce qui y est produit, et rien n'indique que ces systèmes y soient fabriqués. À la blanchisserie hospitalière du GCS Santalys (La Garde, Var), son système Water Optimizer Ultimate, installé en avril 2024 sur deux tunnels, filtre l'eau de lavage et la réinjecte dans le circuit : le tunnel 1 est passé de 3,2 à 1,8 litre par kilo de linge et le tunnel 2 de 5,8 à 3,2 litres, et une autre évaluation, présentée par le CTTN, chiffre l'économie à environ 11 700 m³ par an. Elle répond aux appels d'offres des hôpitaux, par exemple pour la fourniture de produits lessiviels avec matériel de dosage à la blanchisserie du centre hospitalier de la Côte basque.

- Mesures : ACT_HOP_005 [materiel]
- site_internet : https://fr-fr.ecolab.com/locations/ecolab-france-paris
- mail : Textile.France@ecolab.com
- tel : 01 49 69 67 44
- adresse : 10 avenue Aristide Briand, 92220 Bagneux
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Ecolab&departement=92 (2026-10-15) · « ECOLAB SNC, siren 381743335, siret 38174333500220, siège, 10 AVENUE ARISTIDE BRIAND 92220 BAGNEUX, activité 46.75Z, etat_administratif A »
  - contacts, description, expertises : https://www.boamp.fr/telechargements/FILES/PDF/2024/04/24-40342.pdf (2026-10-15) · « Avis d'attribution n° 24-40342, acheteur Centre hospitalier de la côte basque : La fourniture de produits lessiviels avec mise à disposition de matériel de dosage pour une blanchisserie hospitalière. Lauréat ECOLAB SNC, 38174333500220, 10 avenue aristide briand, Bagneux, Textile.France@ecolab.com, 0149696744 »
  - description : https://www.ecolab.com/en-us/about/locations/ecolab-global-headquarters (2026-10-15) · « Ecolab Global Headquarters, 1 Ecolab Place, St. Paul, MN 55102-2233 »
  - description, expertises, mesures : https://achat-logistique.info/logistique/blanchisseries-la-reutilisation-des-eaux-petit-eldorado/ (2026-10-15) · « La blanchisserie du GCS Santalys, implantée à La Garde dans le Var : chute impressionnante depuis l'installation d'un système Water Optimizer Ultimate (WOU) d'Ecolab en avril 2024. Le dispositif filtre l'eau de lavage et la réinjecte dans le circuit. La consommation atteignait 3,2 litres par kilo entre janvier et mars pour le tunnel 1, elle a décru à 1,8 litre entre mai et décembre. Celle du second tunnel est passée de 5,8 à 3,2 litres dans le même temps. »
  - description, mesures : https://achat-logistique.info/logistique/blanchisserie-wou-la-solution-qui-fait-gagner-des-sous/ (2026-10-15) · « Le système WOU pour « Water optimizer ultimate » a permis de réduire de 44% la consommation d'eau. 11.700 m3 d'eau ont été économisés par an. Les résultats ont été présentés par le CTTN, Institut de recherche sur l'entretien et le nettoyage »
  - expertises : https://www.ecolab.com/offerings/aquamiser (2026-10-15) · « Designed specifically for tunnel washers. Filters solids and lint from the selected wastewater. Manages reuse water at both the front and back of the tunnel. »
  - contacts, description : https://fr-fr.ecolab.com/locations/ecolab-france-paris (2026-10-15) · « Ecolab SNC, 10 Avenue Aristide Briand 92220 BAGNEUX, France. Ecolab est un leader mondial dans le domaine des solutions et services liés à l'eau, à l'hygiène et à la prévention des infections »
  - departements, description, type : https://fr-fr.ecolab.com/news/2026/06/choose-france-summit (2026-10-15) · « Présente en France depuis plus de 40 ans. L'entreprise dispose de 3 sites de fabrication, 2 de centres de R&D, et de 4 bureaux en France, emploie près de 2 000 collaborateurs au niveau national. Ecolab snc, 10 avenue Aristide Briand, 92 220 BAGNEUX. Choix éditorial pour departements vide (national) : implantation nationale déclarée et marchés hospitaliers attestés hors du siège (64 par l'avis BOAMP, 83 à Santalys), aucune page ne détaille une zone d'intervention. »
  - logo_url : https://www.ecolab.com/favicon.ico (2026-10-15) · « Favicon du site ecolab.com, symbole étoile bleu, 256 x 256 px »

### PREST_HOP_013 · Matachana France

installateur · secteurs ['hopitaux'] · départements national · statut brouillon

Matachana France SA, établie à Créteil, est la filiale française du groupe espagnol Matachana (siège à Castelldefels, près de Barcelone), qui conçoit et fabrique des équipements de stérilisation hospitalière. Elle fournit aux services de stérilisation des laveurs-désinfecteurs et des cabines de lavage (gamme MAT LD), dont la cabine MAT LD2000 annoncée avec récupération de l'eau du dernier rinçage, et le service technique du groupe assure l'entretien des équipements en France. Au CHU de Rennes, le passage à des laveurs-désinfecteurs Matachana a fait baisser la consommation moyenne de 225 à 124,5 L d'eau par cycle, soit environ 1 550 m³ économisés par an sur les laveurs et 2 150 m³ sur les lave-cabines (poster SF2S 2024).

- Mesures : ACT_HOP_005 [materiel]
- site_internet : https://www.matachana.com/fr/
- tel : 01 41 94 17 80
- adresse : ZAC Europarc, 5 allée des Saules, 94043 Créteil
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=Matachana%20France&departement=94 (2026-10-15) · « MATACHANA FRANCE SA, siret 34172237900045, siège, EUROPARC 5 ALLEE DES SAULES 94000 CRETEIL, activité 33.20D, etat_administratif A »
  - contacts : https://www.matachana.com/fr/service-clientele/ (2026-10-15) · « MATACHANA FRANCE. Zac Europarc 5 Allée des Saules, 94043 Créteil, France. Tel. +33 01 41 94 17 80 »
  - description (groupe espagnol, filiale France) : https://www.matachana.com/fr/matachana-group/ (2026-10-15) · « Carrer Copèrnic, 8 08860 Castelldefels | Barcelona. La conception, fabrication, commercialisation [...] par le biais de bureaux en Espagne, Allemagne, France, Argentine et Indonésie. »
  - expertises, description : https://www.matachana.com/fr/healthcare/ (2026-10-15) · « Healthcare (CSSD) : stérilisateurs à vapeur (Miniclaves, S100, SC500, S1000, S2000), laveurs-désinfecteurs (MAT LD60/90 à LD1000), cabines de lavage et thermodésinfection (LD2000) »
  - mesures (ACT_HOP_005), description : https://www.matachana.com/fr/mat-ld2000/ (2026-10-15) · « Réduction de la consommation d'énergie, d'eau et de produits chimiques. Jusqu'à 60% de moins. Efficacité améliorée. Récupération jusqu'à 90% de l'eau du dernier rinçage. »
  - expertises (maintenance), departements, description : https://www.matachana.com/fr/support-et-services/ (2026-10-15) · « le vaste réseau de succursales du SAV NATIONAL en Espagne, en France, en Allemagne [...] nous proposons un soutien technique direct aux clients et aux hôpitaux »
  - mesures (ACT_HOP_005), description (référence hospitalière) : https://www.sf2s-sterilisation.fr/wp-content/uploads/2024/11/PO-53.pdf (2026-10-15) · « Pharmacie usage intérieur CHU Rennes, secteur stérilisation. Comparaison 2021/2023 des consommations d'eau [...] sur les laveurs Matachana (nouveaux) et Steelco (anciens). Consommation moyenne : 225L eau/cycle (2021), 124,5L eau/cycle (2023). Economie d'eau : laveur-désinfecteurs 1 554 m3, laves cabines 2 146 m3. »
  - logo_url : https://www.matachana.com/wp-content/uploads/2020/12/cropped-fabicon-192x192.png (2026-10-15) · « icône du site matachana.com (rel=icon 192 x 192, même image que l'apple-touch-icon), symbole bleu foncé »

### PREST_HOP_014 · Sanivap (groupe Oxy'Pharm)

equipementier · secteurs ['hopitaux'] · départements national · statut brouillon

Fabricant de générateurs de vapeur pour le bionettoyage et la désinfection des surfaces, conçus et fabriqués à Lozanne (Rhône), dispositifs médicaux de classe IIa conformes à la norme NF T72-110. En établissement de santé, la vapeur réduit l'usage des produits chimiques : la clinique Saint-Augustin de Bordeaux l'emploie pour son bionettoyage, et une présentation du CPias consacrée au dispositif Sanivap rapporte qu'au CH de Compiègne-Noyon, où l'achat de neuf nettoyeurs vapeur a été subventionné à 25 % par l'agence de l'eau, la vapeur remplace le détergent-désinfectant pour l'entretien des incubateurs. Les appareils s'achètent avec une formation des agents incluse et obligatoire, et la fiche technique de 2019 mentionne un service après-vente et des contrats de maintenance. Le même retour de Compiègne-Noyon nuance le bilan : formation approfondie et accompagnement initial indispensables, échec dans les chambres de sortie des patients en précautions complémentaires faute d'appropriation, et réservoirs d'eau des appareils tous trouvés contaminés, d'où une vidange régulière à prévoir.

- Mesures : ACT_HOP_007 [materiel]
- site_internet : https://www.oxypharm.net/sanivap-bionettoyage/
- mail : info@sanivap.fr
- tel : 04 37 22 55 55
- adresse : 391 rue Louis Arnal, ZAC des Prés Secs, 69380 Lozanne
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=39956733800062 (2026-10-15) · « SANIVAP, siret 39956733800062, ZAC DES PRES SECS 391 RUE LOUIS ARNAL 69380 LOZANNE, activite_principale 28.29B, etat_administratif A (siège 39956733800054 à Champigny-sur-Marne, actif) »
  - type, description (fabrication en France, Lozanne, groupe), expertises : https://careers.sanivap.fr (2026-10-15) · « Conçus et fabriqués 100 % en France, les équipements SANIVAP bénéficient du label Origine France Garantie. Basée à Lozanne, près de Lyon, Sanivap est spécialisée dans la conception et la fabrication de générateurs vapeur dédiés au nettoyage et à la désinfection des surfaces. »
  - description (classe IIa, NF T72-110, formation incluse et obligatoire), expertises, contacts (site_internet) : https://www.oxypharm.net/sanivap-bionettoyage/ (2026-10-15) · « Les appareils Sanivap sont des dispositifs médicaux de la Classe IIa. Organisme notifié GMED 0459. Pour toute acquisition de nos appareils, la formation à l'utilisation de nos dispositifs et aux bonnes pratiques du bionettoyage est inclue et obligatoire. »
  - description (service après-vente, contrats de maintenance), expertises, departements : https://frenchhealthcare.fr/wp-content/uploads/2025/04/FT-SP400-Juillet-2019.pdf (2026-10-15) · « Le dispositif SP400 assure le bionettoyage des surfaces au quotidien : locaux, mobilier, équipements, dispositifs médicaux. SAV assuré par SANIVAP et réseau national agréé. Possibilité de contrats de maintenance. CE Dispositif Médical, ISO 13485 : 2016 (logo Origine France Garantie en en-tête) »
  - contacts (mail, tel, adresse) : https://www.oxypharm.net/wp-content/uploads/2022/08/doc_sanivap_v2.pdf (2026-10-15) · « 391 rue Louis Arnal, ZAC des Prés Secs, 69380 Lozanne, France, www.oxypharm.net, info@sanivap.fr, +33 4 37 22 55 55. Établissements de santé, hôpitaux, cliniques, EHPAD. Fabrication 100 % française »
  - mesures (ACT_HOP_007 materiel), description (CH Compiègne-Noyon : incubateurs, subvention agence de l'eau, limites) : https://www.cpias.chu-lille.fr/wp-content/uploads/sites/15/2023/10/231017-Dr-Boris-JOLIBOIS-Topo_Sanivap.pdf (2026-10-15) · « Titre du fichier : Topo_Sanivap. Achat de 9 nettoyeurs vapeur. Subvention Agence de l'eau (25%). Incubateurs : en remplacement de l'utilisation de Détergent-Désinfectant. Limites : nécessité d'une formation approfondie et d'un accompagnement initial des utilisateurs. Chambres de sortie, patients en précautions complémentaires : Echec, pas d'appropriation. 100% des réservoirs contaminés, 25% des chaudières contaminés, vapeur 100% conforme. »
  - mesures (ACT_HOP_007 materiel), description (clinique Saint-Augustin) : https://www.elsan.care/fr/presse/la-clinique-saint-augustin-de-bordeaux-le-bio-nettoyage-cest-sans-chimie (2026-10-15) · « le dispositif vapeur de Sanivap ; la réduction notable d'utilisation de produits chimiques (communiqué du 15/03/2022) »
  - logo_url : https://www.oxypharm.net/wp-content/uploads/2021/10/logo_sanivap_XL.png (2026-10-15) · « Logo Sanivap (335 x 100 px) de la page Sanivap du site du groupe Oxy'Pharm, faute de site sanivap.fr en service »

### PREST_HOP_015 · EnvirobatBDM

association · secteurs ['hopitaux'] · départements ['04', '05', '06', '13', '83', '84'] · statut brouillon

Association basée à Marseille, centre de ressources régional du bâtiment durable en Provence-Alpes-Côte d'Azur. Le projet régional « sobriété en eau et réduction des micropolluants » des établissements sanitaires et médico-sociaux, lauréat de l'appel à manifestation d'intérêt « opérations groupées sectorielles » de l'agence de l'eau Rhône Méditerranée Corse, est porté par l'ARS PACA et, d'après l'offre d'emploi publiée par l'association, animé par EnvirobatBDM avec un cofinancement de l'ARS PACA et de la Région Sud. Le dispositif est en cours de mise en place : l'association a annoncé en 2026 le recrutement d'un conseiller chargé de réaliser des diagnostics et des accompagnements individuels pour réduire les consommations d'eau et les micropolluants issus des activités, puis d'aider les établissements les plus avancés à déposer leurs demandes d'aide aux travaux auprès de l'agence de l'eau. Contactez l'association pour savoir si l'accompagnement est ouvert à votre établissement.

- Mesures : ACT_AGR_002 [conseil_etude], ACT_HOP_007 [conseil_etude]
- site_internet : https://envirobatbdm.eu/
- mail : contact@envirobatbdm.eu
- tel : 04 95 04 30 44
- adresse : Résidence Le Phocéen, 32 rue de Crimée, 13003 Marseille
- linkedin : https://www.linkedin.com/company/envirobatbdm/
- Sources :
  - siret, adresse : https://recherche-entreprises.api.gouv.fr/search?q=48051220100033 (2026-10-15) · « ENVIROBAT-BDM, siret 48051220100033, siège, LE PHOCEEN BAT. C 32 RUE DE CRIMEE 13003 MARSEILLE, nature juridique 9220, état administratif A »
  - contacts : https://envirobatbdm.eu/contact (2026-10-15) · « contact@envirobatbdm.eu. Tel : 04 95 043 044. Résidence Le Phocéen 32 rue de Crimée 13003 Marseille. Lien Linkedin : https://www.linkedin.com/company/envirobatbdm/ »
  - description, expertises, mesures, departements : https://envirobatbdm.eu/sites/default/files/2026-05/2026_EvBDM_Conseiller-CTEES_V2.pdf (2026-10-15) · « Offre d'emploi : Conseiller·ère en transition énergétique et écologique en santé (CTEES) [...] EnvirobatBDM a été retenu pour mobiliser, informer et accompagner les établissements de santé de la région Sud dans la réduction de leurs consommations d'eau, des micropolluants issus de leurs activités [...] Réaliser des diagnostics et accompagnements individuels dans les établissements sanitaires et médico-sociaux de la région PACA. Identifier les établissements les plus matures et les accompagner dans le dépôt de demandes d'aide aux travaux auprès de l'Agence de l'eau RMC. [...] Contrat : CDD 18 MOIS. Prise de fonction : dès que possible. »
  - description : https://envirobatbdm.eu/sites/default/files/2026-05/2026_EvBDM_Conseiller-CTEES_V2.pdf (2026-10-15) · « EnvirobatBDM est le centre de ressources régional dédié au bâtiment durable en Provence-Alpes-Côte d'Azur. [...] Le projet est co-financé par l'ARS PACA et la région Sud, et se déroule en coordination étroite avec le réseau régional des Conseillers Transition Énergétique et Écologique en Santé (CTEES) »
  - description (porteur du projet), departements : https://www.eaurmc.fr/upload/docs/application/pdf/2026-03/liste_des_laureats_ami_sectoriel.pdf (2026-10-15) · « Agence régionale de santé (ARS) PACA | PACA | Sobriété en eau, Réduction des micropolluants dispersés | Établissements de santé et médico-sociaux »
  - logo_url : https://envirobatbdm.eu/sites/default/files/favicon.ico (2026-10-15) · « Icône carrée 200 x 200 du site (symbole bdm en couleur) »

## Aides

### AIDE_HOP_001 · IND2, opérations groupées sectorielles « Établissements de santé et médico-sociaux » (agence de l'eau Rhône Méditerranée Corse, 12e programme)

subvention · secteurs ['hopitaux'] · départements ['04', '05', '06', '13', '83', '84', '01', '03', '07', '15', '26', '38', '42', '43', '63', '69', '73', '74', '09', '11', '12', '30', '31', '32', '34', '46', '48', '65', '66', '81', '82', '21', '25', '39', '58', '70', '71', '89', '90'] · agences ['AERMC'] · statut brouillon

Financeur : Agence de l'eau Rhône Méditerranée Corse · Taux maximum des travaux : 70 % pour une petite ou moyenne entreprise et 40 % pour une grande entreprise au titre du règlement de minimis, 40 à 60 % selon la taille au titre du régime exempté. Le taux réel est fixé pour chaque opération avec l'agence. Le taux applicable à un hôpital public est à confirmer auprès du porteur de l'opération. · plafond Pas de plafond par établissement publié. L'aide aux investissements est limitée à 1 M€ par opération groupée, pour l'ensemble des établissements accompagnés. Ce montant peut être complété pendant les 3 ans de l'opération si la première enveloppe de 1 M€ est engagée, sous réserve des crédits disponibles.

Quand l'économie d'eau possible sur un site est inférieure à 2 000 m3 par an, ou quand ses rejets de micropolluants sont dispersés, l'agence de l'eau Rhône Méditerranée Corse n'aide pas l'établissement seul : elle passe par une opération groupée, portée à l'échelle d'une filière. Pour les établissements de santé et médico-sociaux, quatre opérations figurent dans la liste des lauréats publiée en mars 2026, sur la sobriété en eau et la réduction des micropolluants dispersés. Le porteur de l'opération réalise ou suit les diagnostics sur site, conseille les établissements et les accompagne dans le dépôt de leur demande d'aide. Les établissements volontaires sont ensuite aidés pour leurs travaux : réduction des fuites et gestion de la pression, technologies économes en eau (changement de process, recyclage, modernisation des réseaux et des équipements, dispositifs hydro-économes), traitement de l'eau pour une réutilisation sur le site, récupération des eaux pluviales, et réduction à la source ou épuration des micropolluants.

Éligibilité : Pour les travaux, la fiche IND2 vise les acteurs économiques non agricoles des bassins Rhône-Méditerranée et de Corse, et le dossier passe par une opération groupée retenue. Le secteur « Établissements de santé et médico-sociaux » en compte quatre, en Provence-Alpes-Côte d'Azur, en Auvergne-Rhône-Alpes, en Occitanie et en Bourgogne-Franche-Comté (pour ces trois dernières, partie de la région située sur le bassin Rhône-Méditerranée). La place d'un hôpital public et celle d'une clinique privée dans ces opérations sont à confirmer auprès du porteur.

- Mesures : ACT_AGR_002, ACT_HOP_002, ACT_HOP_003, ACT_HOP_004, ACT_HOP_005, ACT_AGR_006, ACT_HOP_006, ACT_HOP_007
- **avertissement** : Les projets déjà engagés sont exclus, et la demande d'aide doit être transmise à l'agence avant l'engagement des travaux. Les exceptions sont un accord écrit préalable de l'agence et les actions préalables nécessaires à la préparation du dossier ou à la définition des travaux. Ne signez aucun devis de travaux avant que le porteur de l'opération vous ait accompagné dans le dépôt de votre demande.
- **avertissement** : Ne sont pas aidés : les projets qui concernent des bâtiments neufs ou une création ou un accroissement d'activité, le renouvellement à l'identique, la pose de compteurs et de vannes de sectorisation, les outils fixes de détection de fuite et les outils de pilotage ou de télégestion installés seuls, les campagnes d'analyses seules, la réduction de la pollution domestique, le traitement des eaux pluviales des zones de stationnement et des voies de circulation, et les travaux déjà aidés au cours des dix dernières années. Un compteur divisionnaire n'est donc pas financé s'il n'accompagne pas des travaux d'économie d'eau.
- **avertissement** : Pour les micropolluants, seuls les travaux sont aidés : technologie propre qui réduit les rejets à la source, dispositif d'épuration ou autre investissement qui réduit les rejets. Les changements de pratiques (ne plus jeter de médicament à l'évier, régler les centrales de dilution, changer de molécule) ne sont pas des dépenses aidées en eux-mêmes, et une campagne d'analyses des effluents n'est aidée que si elle s'intègre à une étude plus globale.
- **avertissement** : Le coût prévisionnel du projet présenté dans la demande d'aide doit dépasser 5 000 € pour les actions des opérations groupées sectorielles. Regroupez vos travaux dans un même projet.
- **info** : L'aide est accordée en priorité au titre du règlement de minimis (70 % maximum pour une petite ou moyenne entreprise, 40 % pour une grande). Si ce n'est pas possible, par exemple parce que le plafond de minimis est atteint, elle passe par le régime d'aides à la protection de l'environnement, à un taux de 40 à 60 % selon la taille. Le règlement ajoute qu'en cas de renouvellement le taux est divisé par deux, phrase placée dans la case du régime exempté. Faites préciser par le porteur le taux qui s'applique à votre établissement.
- **info** : L'agence peut ne retenir qu'une partie des dépenses d'un projet à double enjeu, sanitaire et environnemental ou économique et environnemental, ou dont les coûts liés à la protection de l'environnement ne sont pas individualisables. Si votre projet porte sur un équipement qui sert aussi le soin, un osmoseur de dialyse ou un équipement de stérilisation par exemple, vérifiez avec le porteur de l'opération quelle part de la dépense serait retenue.
- **info** : Situation au 15 octobre 2026 : l'appel à manifestation d'intérêt de 2025 est clos. Ses lauréats ont été publiés en mars 2026. Pour les établissements de santé et médico-sociaux, les porteurs sont l'ARS Provence-Alpes-Côte d'Azur, l'ARS Auvergne-Rhône-Alpes, Envirobat Occitanie et Pôle énergie Bourgogne-Franche-Comté. Les demandes d'aide pour les travaux se déposent sur le portail de l'agence jusqu'au 31 décembre 2028. Le règlement annonce d'autres appels courant 2026 ou 2027, selon la dynamique des deux premières vagues.
- **info** : En Provence-Alpes-Côte d'Azur, EnvirobatBDM indique avoir été retenu dans le cadre de cet appel pour accompagner les établissements de santé de la région Sud, projet cofinancé par l'ARS PACA et la Région Sud. En Occitanie, Envirobat Occitanie accompagne les établissements situés sur le bassin Rhône-Méditerranée, avec un cofinancement de l'ARS Occitanie. Les deux structures prévoient des diagnostics dans les établissements et un appui au dépôt des demandes d'aide auprès de l'agence.
- **info** : Au-delà de 2 000 m3 d'économie d'eau par an sur un site, l'agence accompagne l'établissement de manière individuelle, hors opération groupée.
- **ressource** : Bilan de l'appel à manifestation d'intérêt sur le site de l'agence (https://www.eaurmc.fr/jcms/pro_131706/fr/ami-operations-groupees-sectorielles-reduction-des-emissions-dispersees-de-micropolluants-et/ou-realisation-d-economies-d-eau)
- **ressource** : Liste des lauréats (mars 2026) (https://www.eaurmc.fr/upload/docs/application/pdf/2026-03/liste_des_laureats_ami_sectoriel.pdf)
- **ressource** : Fiche aide IND2, opérations groupées sectorielles (délibération 2024-59) (https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf)
- **ressource** : Règlement de l'appel à manifestation d'intérêt (modifié le 7 novembre 2025) (https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf)
- **ressource** : Conditions générales d'attribution et de versement des aides du 12e programme (délibération 2024-77) (https://www.eaurmc.fr/upload/docs/application/pdf/2025-02/conditions-generales.pdf)
- Sources :
  - nom, type, description (objectifs et types d'actions) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf (2026-10-15) · « Version 1 adoptée par le conseil d'administration du 19 décembre 2024. Délibération 2024-59. IND2 - Opérations groupées sectorielles. TYPE D'ACTIONS : Réductions des émissions dispersées de micropolluants, à l'échelle d'une branche ou d'une filière professionnelle. Économies d'eau, à l'échelle d'une branche ou d'une filière professionnelle. »
  - taux (40 à 70 % selon la taille) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf (2026-10-15) · « TAUX MAXIMUM [...] Travaux visant à réduire les émissions dispersées de micropolluants et/ou les consommations d'eau, à l'échelle d'une branche ou d'une filière professionnelle : 40 à 70%* [...] *Selon la taille de l'entreprise »
  - taux, infos_complementaires (de minimis, régime exempté, renouvellement) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « Elles sont accordées prioritairement au titre du règlement de minimis. Si ce n'est pas possible (plafond des aides de minimis déjà atteint par l'entreprise par exemple), l'aide sera attribuée au titre du régime cadre exempté de notification n°SA.111726 [...] Travaux aidés au titre du règlement de minimis : 40% pour les grandes entreprises, 70% pour les petites et moyennes entreprises. Travaux aidés au titre du régime exempté : 40 % à 60% en fonction de la taille de l'entreprise. En cas de renouvellement, le taux d'aide est divisé par deux. »
  - taux (fixé par opération) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « À l'issue du jury de sélection débute une phase 2 de rencontre et d'échanges entre le porteur du projet sélectionné et l'agence de l'eau. Cette phase permet d'affiner le projet, de définir précisément les modalités d'aide (actions retenues, taux d'aide et organisation administrative). »
  - plafond (1 M€ par opération, complément si la première enveloppe est engagée) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « Chaque opération est accompagnée dans les limites suivantes : un financement de missions d'animation correspondant à 2 ETP par an maximum ; un financement des investissements jusqu'à concurrence d'1 M€ d'aide au total (montant d'aide pouvant être complété au cours des 3 ans de l'opération, sous réserve de disponibilité financière de l'appel à manifestation d'intérêt, si la première enveloppe d'1M€ est engagée). »
  - description, infos_complementaires (seuil de 2 000 m3, voie individuelle) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « Lorsque les rejets de micropolluants sont significatifs en un point donné ou lorsque l'économie d'eau potentielle est supérieure à 2000 m3/an sur un site donné, l'agence accompagne les maitres d'ouvrage de manière individuelle. Lorsque les rejets de micropolluants sont dispersés ou lorsque l'économie d'eau potentielle est inférieure à 2000 m3/an par site, l'agence accompagne les projets sous forme d'opérations groupées »
  - eligibilite, description (bénéficiaires des travaux, territoire, rôle du porteur), mesures (ACT_AGR_002 : diagnostics sur site) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf (2026-10-15) · « BÉNÉFICIAIRES ÉLIGIBLES [...] Pour les travaux : acteurs économiques non agricoles (industries, sociétés, entreprises...). TERRITOIRES ÉLIGIBLES : Tous les territoires des bassins Rhône-Méditerranée et de Corse. [...] Animation par la structure porteuse de l'opération groupée sectorielle et par les partenaires associés. Cela inclut les missions nécessaires pour réaliser ou suivre des études (état des lieux, diagnostics sur site...), pour conseiller les entreprises et les accompagner dans le dépôt de leur demande d'aide. »
  - description, mesures (ACT_HOP_002 : fuites et pression ; ACT_HOP_003 : dispositifs hydro-économes ; ACT_HOP_004 et ACT_HOP_005 : changement de process, recyclage, modernisation des équipements ; ACT_HOP_006 : réutilisation sur le site ; ACT_AGR_006 : eaux pluviales ; ACT_HOP_007 : réduction à la source et épuration des micropolluants) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf (2026-10-15) · « Travaux de réduction des pollutions par les micropolluants, notamment : Réduction à la source (mise en place de technologie propre) ; Mise en place de dispositifs d'épuration ; [...] Toute autre mesure permettant de réduire les rejets. Travaux d'économies d'eau : Actions de réduction des pertes en eau : réduction des fuites sur les réseaux, gestion de la pression. Mise en œuvre de technologies économes en eau : changement de process, recyclage, régulation, modernisation des réseaux et des équipements, dispositifs de pilotage, télégestion et sectorisation incluant des dispositifs hydro-économes et des compteurs. Mise en œuvre de technologie pour traiter l'eau usée pour une réutilisation, recyclage, réemploi sur le site industriel en lien avec des économies d'eau. Dispositifs de récupération des eaux pluviales. »
  - infos_complementaires (dépenses non éligibles, travaux seuls aidés pour les micropolluants) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/ind2-operations-sectorielles.pdf (2026-10-15) · « ACTIONS ET DÉPENSES NON ÉLIGIBLES : Campagnes d'analyses seules (non intégrées à une étude plus globale). [...] Pose de compteurs et vannes de sectorisation, outils fixes de détection de fuite, outils de pilotage/télégestion seuls. Projets en lien avec des pollutions nouvelles (création ou accroissement d'activité). [...] Projets visant à réduire la pollution domestique des entreprises. Renouvellement à l'identique. Traitement des eaux pluviales issues des zones de stationnement et voies de circulation. [...] Travaux de réduction des pollutions par les micropolluants, notamment : Réduction à la source (mise en place de technologie propre) ; Mise en place de dispositifs d'épuration ; [...] Toute autre mesure permettant de réduire les rejets. »
  - infos_complementaires (projets engagés, bâtiments neufs, prise en compte partielle) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « Sont exclus de l'appel à manifestation d'intérêt : les projets déjà engagés ; les projets qui concernent des bâtiments neufs ou en lien avec des activités nouvelles (création ou accroissement d'activité) ; [...] le renouvellement à l'identique [...] L'agence se réserve le droit de ne retenir qu'une partie des dépenses de l'opération proposée dans les cas suivants : projet présentant un double enjeu (économique et environnemental, sanitaire et environnemental...) ; projet dont les coûts liés à la protection de l'environnement ne sont pas individualisables. »
  - infos_complementaires (calendrier, dépôt des demandes de travaux, futurs appels) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-06/reglement_ami_operations_sectorielles.pdf (2026-10-15) · « l'appel à manifestation d'intérêt comporte deux vagues de sélection en 2025. De plus, d'autre(s) appel(s) à manifestation d'intérêt seront engagés par l'agence courant 2026 ou 2027 en fonction de la dynamique des deux premières vagues. [...] Dépôt des demandes d'aides de travaux sur le portail de l'agence : Jusqu'au 31 décembre 2028 »
  - infos_complementaires (dépôt avant engagement et exceptions, plancher de 5 000 €, travaux aidés depuis dix ans), eligibilite (activités de soins) : https://www.eaurmc.fr/upload/docs/application/pdf/2025-02/conditions-generales.pdf (2026-10-15) · « Une demande d'aide doit être formellement transmise à l'agence avant l'engagement du projet considéré. Le non-respect de cette disposition entraîne le rejet de la demande d'aide, sauf dans les cas suivants : accord écrit préalable de l'agence pour engager les travaux avant le dépôt formel de la demande ; [...] actions préalables, nécessaires à la préparation du dossier de demande d'aide, ou à la définition des travaux pour les aides relatives à des travaux [...] Le coût prévisionnel minimal est limité à 5 000 € : [...] actions des opérations groupées sectorielles [...] les dépenses pour des travaux ayant déjà bénéficiés d'une aide au cours des dix dernières années ne sont pas éligibles. [...] pour les activités économiques (agricoles, piscicoles et aquacoles, industrielles, touristiques, de soins, d'hydroélectricité...) remplissant l'ensemble des critères d'aides d'Etat [...] les aides de l'agence s'adossent aux règlements et régimes cadre en vigueur »
  - infos_complementaires (AMI clos, lauréats) : https://www.eaurmc.fr/jcms/pro_131706/fr/ami-operations-groupees-sectorielles-reduction-des-emissions-dispersees-de-micropolluants-et/ou-realisation-d-economies-d-eau (2026-10-15) · « Bilan de l'AMI "Opérations groupées sectorielles [...]" [...] 19 lauréats vont pouvoir bénéficier des aides de l'agence de l'eau. [...] Secteurs d'activité : santé, mécanique, bâtiment, [...] Pour les entreprises : les travaux liés à la réduction des micropolluants et les travaux liés à la sobriété en eau : jusqu'à 40% pour les grandes entreprises et jusqu'à 70% pour les petites et moyennes entreprises. »
  - departements, eligibilite, description, infos_complementaires (quatre porteurs santé, limite au bassin Rhône-Méditerranée) : https://www.eaurmc.fr/upload/docs/application/pdf/2026-03/liste_des_laureats_ami_sectoriel.pdf (2026-10-15) · « mars 2026. Appel à manifestation d'intérêt : opérations groupées sectorielles. Lauréats. [...] Pôle énergie BFC, BFC*, Sobriété en eau, Réduction des micropolluants dispersés, Établissements de santé et médico-sociaux [...] Agence régionale de santé (ARS) AURA, AURA*, Sobriété en eau, Réduction des micropolluants dispersés, Établissements de santé et médico-sociaux [...] Agence régionale de santé (ARS) PACA, PACA, Sobriété en eau, Réduction des micropolluants dispersés, Établissements de santé et médico-sociaux [...] Envirobat Occitanie, Occitanie*, Sobriété en eau, Réduction des micropolluants dispersés, Établissements de santé et médico-sociaux [...] *limité à la partie de la région située sur le bassin Rhône Méditerranée »
  - infos_complementaires (EnvirobatBDM en Provence-Alpes-Côte d'Azur) : https://envirobatbdm.eu/sites/default/files/2026-05/2026_EvBDM_Conseiller-CTEES_V2.pdf (2026-10-15) · « Dans le cadre de l'Appel à Manifestation d'Intérêt de l'Agence de l'Eau Rhône Méditerranée Corse, EnvirobatBDM a été retenu pour mobiliser, informer et accompagner les établissements de santé de la région Sud [...] Le projet est co-financé par l'ARS PACA et la région Sud [...] Réaliser des diagnostics et accompagnements individuels dans les établissements sanitaires et médico-sociaux de la région PACA. Identifier les établissements les plus matures et les accompagner dans le dépôt de demandes d'aide aux travaux auprès de l'Agence de l'eau RMC. »
  - infos_complementaires (Envirobat Occitanie) : https://www.envirobat-oc.fr/sites/default/files/2026-03/offre-d-emploi_charge-e-de-mission-eausante.pdf (2026-10-15) · « Le poste est à pourvoir dans le cadre d'un Appel à manifestation d'intérêt de l'agence de l'eau Rhône Méditerranée Corse (AG RMC), pour lequel Envirobat Occitanie a été retenu pour mobiliser, informer, accompagner les établissements de santé et médico-sociaux d'Occitanie situés sur le bassin versant Rhône Méditerranée Corse à réaliser des actions et des travaux de réduction de leurs consommations d'eau et de micropolluants dispersés [...] Il est co-financé par l'ARS Occitanie [...] Réaliser des accompagnement individuels/ diagnostics scorés auprès des établissements [...] Accompagner administrativement les établissements dans le dépôt des demandes d'aide et des demandes de solde auprès de l'AG RMC »
  - logo_url : https://www.eaurmc.fr/upload/docs/image/png/2023-10/logo_ae_aout2020_web.png (2026-10-15) · « Logo de l'agence de l'eau Rhône Méditerranée Corse, en-tête du site eaurmc.fr »

### AIDE_HOP_002 · PLUV, gestion intégrée des eaux pluviales en zone urbaine (agence de l'eau Rhône Méditerranée Corse, 12e programme)

subvention · secteurs ['hopitaux'] · départements national · agences ['AERMC'] · statut brouillon

Financeur : Agence de l'eau Rhône Méditerranée Corse · Acteur économique (la fiche cite les établissements de soins) : 40 % au maximum, majoré de 10 % pour une moyenne entreprise et de 20 % pour une petite. Autres acteurs : 50 %. Collectivités et établissements publics : 50 %, 70 % en zonage de solidarité. · plafond Assiette plafonnée à 50 € HT par m² de surface déconnectée du réseau.

Fiche aide PLUV du 12e programme de l'agence de l'eau Rhône Méditerranée Corse (version 2, délibération 2025-43 du 10 décembre 2025). L'agence finance les études avant-projet et les travaux qui déconnectent les eaux de pluie courantes du réseau d'assainissement pour les infiltrer ou les récupérer : ouvrages d'infiltration, désimperméabilisation des sols associée, végétalisation, revêtements perméables, reprofilage des pentes vers l'espace infiltrant, toitures végétalisées stockantes. Une cuve de récupération pour réutiliser l'eau de pluie peut entrer dans le projet, à condition d'être reliée par une surverse à un ouvrage d'infiltration.

Éligibilité : Acteurs économiques non agricoles (la fiche cite les établissements de soins), établissements publics, associations et collectivités des bassins Rhône-Méditerranée et de Corse, pour un site existant. La déconnexion d'un réseau unitaire est éligible partout. Celle d'un réseau séparatif pluvial l'est si le projet déconnecte plus de 2 000 m², ou, pour une collectivité ou un établissement public, en zonage de solidarité, au PAOT ou dans un contrat eau et climat.

- Mesures : ACT_AGR_006
- **avertissement** : La demande d'aide doit être transmise à l'agence avant l'engagement du projet, faute de quoi elle est rejetée, sauf accord écrit préalable de l'agence. Les études nécessaires à la préparation du dossier ou à la définition des travaux peuvent précéder la demande. Ne signez aucun devis de travaux avant le dépôt.
- **avertissement** : Une cuve de récupération seule n'est pas aidée : un ouvrage de stockage pour réutiliser l'eau de pluie n'est éligible que s'il est prévu une surverse vers un ouvrage d'infiltration, et selon la pertinence du projet pour la gestion quantitative de la ressource. L'arrosage par eau de pluie n'est aidé que pour les espaces verts créés dans le projet, et un arrosage par eau potable ou eau brute ne l'est jamais.
- **avertissement** : Si vos eaux pluviales partent dans un réseau séparatif pluvial, et non dans un réseau unitaire, le projet n'est éligible pour un acteur économique que s'il déconnecte plus de 2 000 m² de surface imperméable. Ne sont pas aidés : les projets d'urbanisation nouvelle, la pose ou la réfection d'un revêtement imperméable, même pour reprofiler les pentes vers l'ouvrage d'infiltration, et les ouvrages utilisant des pneus.
- **avertissement** : Le coût prévisionnel du projet doit dépasser 10 000 €. Les dépenses liées à un accroissement de l'activité et les travaux déjà aidés au cours des dix dernières années ne sont pas éligibles.
- **info** : La fiche range les établissements de soins parmi les acteurs économiques (taux de base de 40 %) et cite par ailleurs les établissements publics (taux de 50 %, 70 % en zonage de solidarité) avec des exemples tirés de l'enseignement. Pour un hôpital public, faites confirmer par l'agence la catégorie retenue avant de bâtir votre plan de financement. Pour les activités économiques, l'aide est accordée dans le respect de l'encadrement européen des aides d'État.
- **info** : L'agence demande des ouvrages réalisés dans les règles de l'art (fascicule 70-II), incite à suivre la charte qualité eaux pluviales de l'ASTEE et invite à privilégier les solutions fondées sur la nature et les ouvrages surfaciques. L'aide est soldée sur présentation du procès-verbal de réception des ouvrages.
- **ressource** : Fiche aide PLUV, gestion intégrée des eaux pluviales en zone urbaine (version 2, délibération 2025-43) (https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf)
- **ressource** : Conditions générales d'attribution et de versement des aides du 12e programme (délibération 2024-77) (https://www.eaurmc.fr/upload/docs/application/pdf/2025-02/conditions-generales.pdf)
- Sources :
  - taux : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf (2026-10-15) · « Acteurs économiques : déconnexion des réseaux et infiltration des eaux pluviales [...] 40%* [...] Autres acteurs [...] 50% [...] * Majoration en fonction de la taille de l'entreprise : +10% pour les moyennes entreprises, +20% pour les petites entreprises. »
  - taux : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf (2026-10-15) · « Collectivités et établissements publics : déconnexion d'un réseau unitaire et infiltration des eaux pluviales > En zonage de solidarité 70% > Hors zonage de solidarité 50% »
  - plafond : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf (2026-10-15) · « L'assiette de l'aide est calculée à partir des dépenses éligibles, auxquelles est appliqué un coût plafond de 50 € HT/m² de surface déconnectée du réseau. »
  - eligibilite : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf (2026-10-15) · « BÉNÉFICIAIRES ÉLIGIBLES [...] Etablissements publics (écoles, collèges, lycées, universités…) ; Acteurs économiques non agricoles (industries, commerces, bailleurs sociaux, établissements de soins…) ; Associations »
  - eligibilite, agences : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf (2026-10-15) · « Pour les actions de déconnexion d'un réseau unitaire : Tous les territoires des bassins Rhône-Méditerranée et de Corse. Pour les actions de déconnexion d'un réseau séparatif : Territoires du zonage de solidarité du programme ; Tous les territoires [...] pour les actions inscrites au PAOT ou dans un contrat Eau et Climat ou pour des projets déconnectant une surface > 2 000 m². »
  - description, mesures : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf (2026-10-15) · « Etudes avant-projet et travaux contribuant à l'objectif de déconnexion des pluies courantes pour infiltration ou récupération des eaux pluviales [...] Création d'ouvrages de stockage pour la réutilisation des eaux pluviales, s'il est prévu une surverse vers un ouvrage d'infiltration »
  - description : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf (2026-10-15) · « Version 2 adoptée par le conseil d'administration du 10 décembre 2025 - Délibération 2025-43 »
  - infos_complementaires : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf (2026-10-15) · « Systèmes d'arrosage des espaces verts créés dans le projet par de l'eau de pluie récupérée [...] ACTIONS ET DÉPENSES NON ÉLIGIBLES : Projets concernant de l'urbanisation nouvelle. Pose ou réfection d'un revêtement imperméable [...] Ouvrages de stockage ou d'infiltration utilisant des pneus (PUNR). Systèmes d'arrosage par eau potable ou eau brute. »
  - infos_complementaires : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf (2026-10-15) · « Conditions spécifiques pour les autres activités : Les aides aux projets de déconnexion de réseaux séparatifs sont éligibles s'ils permettent de déconnecter une surface > 2000 m2. Les aides aux projets portés par des activités économiques sont accordées dans le respect de l'encadrement européen des aides d'Etat. »
  - infos_complementaires : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/pluv-gestion-pluvial.pdf (2026-10-15) · « réalisés dans les règles de l'art [...] (application du fascicule 70-II). L'agence incite également à l'utilisation de la charte qualité eaux pluviales de l'ASTEE. Les maîtres d'ouvrage sont invités à privilégier les solutions fondées sur la nature (SFN) et les ouvrages surfaciques [...] Vérification du procès-verbal de réception des ouvrages. »
  - infos_complementaires : https://www.eaurmc.fr/upload/docs/application/pdf/2025-02/conditions-generales.pdf (2026-10-15) · « Une demande d'aide doit être formellement transmise à l'agence avant l'engagement du projet considéré. Le non-respect de cette disposition entraîne le rejet de la demande d'aide, sauf [...] accord écrit préalable de l'agence [...] actions préalables, nécessaires à la préparation du dossier de demande d'aide, ou à la définition des travaux »
  - infos_complementaires : https://www.eaurmc.fr/upload/docs/application/pdf/2025-02/conditions-generales.pdf (2026-10-15) · « Le coût prévisionnel du projet présenté dans la demande d'aide doit être supérieur à 10 000 €. [...] les dépenses résultant d'un accroissement de l'activité économique [...] ne sont pas éligibles ; [...] les dépenses pour des travaux ayant déjà bénéficiés d'une aide au cours des dix dernières années ne sont pas éligibles. »
  - taux, eligibilite : https://www.eaurmc.fr/upload/docs/application/pdf/2025-01/recueil-fiches.pdf (2026-10-15) · « PLUV - Gestion intégrée des eaux pluviales en zone urbaine [...] Version 2 adoptée par le conseil d'administration du 10 décembre 2025 [...] Acteurs économiques non agricoles (industries, commerces, bailleurs sociaux, établissements de soins…) »
  - logo_url : https://www.eaurmc.fr/upload/docs/image/png/2023-10/logo_ae_aout2020_web.png (2026-10-15) · « Logo de l'agence de l'eau Rhône Méditerranée Corse, pris sur la page d'accueil de eaurmc.fr »

### AIDE_HOP_003 · Gestion et préservation de la ressource en eau (Région Sud)

subvention · secteurs ['hopitaux'] · départements ['04', '05', '06', '13', '83', '84'] · agences toutes · statut brouillon

Financeur : Région Provence-Alpes-Côte d'Azur (Région Sud) · Taux maximal de 30 % · plafond ?

Subvention de la Région Sud aux actions de gestion durable et raisonnée de la ressource en eau, dont l'accompagnement des territoires vers la sobriété des prélèvements et des consommations. Parmi les actions soutenues figurent les audits de bâtiments publics pour définir des mesures de bonne gestion des consommations d'eau, et l'achat et l'installation de petits équipements hydro-économes dans les bâtiments publics. Le dispositif finance aussi des réseaux de suivi, des études de ressource et de pollution et des actions de valorisation et de sensibilisation sur leurs résultats.

Éligibilité : Structures publiques gestionnaires de milieu aquatique, collectivités et leurs groupements, départements, autres établissements publics, associations et organismes de recherche.

- Mesures : ACT_AGR_002, ACT_HOP_003
- **avertissement** : La page de la Région ne cite ni les hôpitaux ni les cliniques. L'audit comme l'achat d'équipements hydro-économes ne sont éligibles que dans des bâtiments publics : un établissement privé, même associatif, n'est pas couvert par ces deux dépenses sur la foi de la page. Pour un établissement public, l'éligibilité est aussi à confirmer auprès de la Région avant de monter le dossier.
- **avertissement** : La page parle de « petits équipements hydro-économes » sans en donner la liste : ni les brise-jets, ni les commandes au genou, au pied ou au coude, ni les chasses à double commande n'y sont nommés. Faites confirmer par la Région que les équipements retenus avec votre équipe d'hygiène entrent dans cette catégorie.
- **info** : Les actions réalisées en régie ne sont pas éligibles, sauf pour les bénéficiaires autres que les collectivités territoriales et leurs groupements, dans la limite d'un plafond de dépenses de 400 € par jour.
- **info** : La demande se fait en ligne depuis la page du dispositif (bouton « Je fais ma demande »), et son suivi sur la plateforme d'aides en ligne de la Région. Les conditions détaillées relèvent du cadre d'intervention régional « Gestion de la ressource en eau ».
- **ressource** : Page du dispositif sur le site de la Région Sud (https://www.maregionsud.fr/vos-aides/detail/gestion-et-preservation-de-la-ressource-en-eau)
- Sources :
  - taux : https://www.maregionsud.fr/vos-aides/detail/gestion-et-preservation-de-la-ressource-en-eau (2026-10-15) · « Quelle est la nature de l'aide ? Subvention à un taux maximal de 30%. (page mise à jour le 22 janvier 2026) »
  - eligibilite : https://www.maregionsud.fr/vos-aides/detail/gestion-et-preservation-de-la-ressource-en-eau (2026-10-15) · « Pour qui ? Structures publiques gestionnaires de milieu aquatique ; collectivités et leurs groupements ; départements ; autres établissements publics ; associations ; organismes de recherche. »
  - description : https://www.maregionsud.fr/vos-aides/detail/gestion-et-preservation-de-la-ressource-en-eau (2026-10-15) · « Il s'agit d'accompagner la mise en œuvre d'actions en faveur de la gestion durable et raisonnée des ressources en eau à l'échelle des bassins versants [...] en accompagnant les territoires vers une sobriété de prélèvements et de consommations d'eau »
  - mesures (ACT_AGR_002), categories : https://www.maregionsud.fr/vos-aides/detail/gestion-et-preservation-de-la-ressource-en-eau (2026-10-15) · « audits de bâtiments publics pour la définition de mesures de bonne gestion des consommations d'eau »
  - mesures (ACT_HOP_003), categories : https://www.maregionsud.fr/vos-aides/detail/gestion-et-preservation-de-la-ressource-en-eau (2026-10-15) · « achat et installation de petits équipements hydro-économes dans les bâtiments publics »
  - infos_complementaires (régie, démarche) : https://www.maregionsud.fr/vos-aides/detail/gestion-et-preservation-de-la-ressource-en-eau (2026-10-15) · « Les actions réalisées en régie ne sont pas éligibles, sauf pour les bénéficiaires autres que les collectivités territoriales et leurs groupements, et dans la limite d'un montant plafond de dépenses de 400 €/jour. Pour les conditions d'éligibilité, se référer aux dispositifs. »
  - departements (Provence-Alpes-Côte d'Azur, région 93) : https://geo.api.gouv.fr/regions/93/departements (2026-10-15) · « Alpes-de-Haute-Provence 04, Hautes-Alpes 05, Alpes-Maritimes 06, Bouches-du-Rhône 13, Var 83, Vaucluse 84 (codeRegion 93) »
  - logo_url : https://www.maregionsud.fr/typo3conf/ext/e_magineurs/region_sud/Resources/Public/Images/Logo.svg (2026-10-15) · « Logo de l'en-tête du site maregionsud.fr (le favicon du site ne fait que 16 px, pas d'icône carrée haute définition) »
  - infos_complementaires (cadre d'intervention non consultable) : https://aides-territoires.beta.gouv.fr/aides/gestion-et-preservation-de-la-ressource-en-eau-1/ (2026-10-15) · « Les actions éligibles aux aides de la Région s'inscrivent dans le cadre d'intervention « Gestion de la ressource en eau » [...] Pour les conditions d'éligibilité, se référer aux dispositifs. (aucun lien vers le cadre d'intervention ; le PDF du cadre sur maregionsud.fr renvoie une erreur 404 le 2026-10-15) »

