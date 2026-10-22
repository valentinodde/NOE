# Verdicts des fiches : élevage d'herbivores

Étape 6 du skill `nouveau-secteur`. Date : 2026-10-15. Récapitulatif des verdicts de l'agent
`controleur-fiche`, écrit ici parce que la promotion n'archive pas `fiches/*.verdict.md`. Le
verdict détaillé de chaque fiche est dans `fiches/<ID>.verdict.md` (dernier passage seulement).

Toutes les fiches non conformes au premier contrôle sont retournées une fois au rédacteur, sauf
Cérience (blocage des robots, un second passage n'y pouvait rien). Les fiches encore non
conformes après ce second passage gardent leur verdict, sans retouche (règle du skill).

## Bilan

25 fiches : **11 conformes**, **5 à corriger**, **9 incomplètes**. Vérificateur sans erreur sur
`prestataires_elevage_herbivores.json` (15) et `aides_elevage_herbivores.json` (10).

## Prestataires

| Id | Structure | Type | Mesures liées | Verdict final | Ce qui reste |
|---|---|---|---|---|---|
| PREST_HRB_001 | Serap Industries | equipementier | HRB_005 | conforme | Couvre le prérefroidisseur, pas le stockage des eaux de fin de lavage. |
| PREST_HRB_002 | DeLaval France | installateur | HRB_002, HRB_005 | à corriger | Type contesté (le contrôleur lit un fabricant, le guide demande `installateur` pour la filiale d'un groupe étranger) ; couverture nationale non sourcée ; prérefroidisseur sourcé par une brochure belge ; libellé « DeLaval France » absent des sources. |
| PREST_HRB_003 | Groupe Lacta-Traite | installateur | aucune | conforme | Aucune source ne montre le réglage du lavage : la fiche ne sortira dans aucun plan. Piste : offre d'emploi de plombier qui cite abreuvoirs et réseaux d'eau (ACT_HRB_001 travaux), jugée trop faible. |
| PREST_HRB_004 | Chambre d'agriculture de Normandie | chambre_consulaire | HRB_002 | à corriger | « Siège régional à Caen » contredit (siège SIRENE à Hérouville-Saint-Clair) ; « établissement public consulaire » non sourcé. Certi'Traite vise la conformité et la qualité du lait, pas l'eau. |
| PREST_HRB_005 | Aquatiris | installateur | HRB_006 | incomplet | 81 des 83 départements sans page citée une à une (14 et 50 prouvés) ; eaux blanches seulement, pas les eaux vertes ; « réseau de franchisés » non sourcé. |
| PREST_HRB_006 | Alistep (INEAUTEC) | installateur | HRB_006 | incomplet | Site servi en http avec certificat invalide : illisible par les outils de contrôle, aucune autre source. Type (fabricant ou non) à trancher par lecture humaine. |
| PREST_HRB_007 | La Buvette | equipementier | HRB_001, HRB_003, HRB_007 | conforme | Lien HRB_001 le plus faible (abreuvoirs et robinetterie, pas de fuites ni de vannes). |
| PREST_HRB_008 | Lacmé | equipementier | HRB_007 | incomplet | Aucune page Lacmé ne parle de cours d'eau ni de berge : le lien repose sur l'usage de la clôture. Sans lui, la fiche n'a plus de rattachement. |
| PREST_HRB_009 | Premier Tech Eau et Environnement | equipementier | HRB_001, HRB_003, AGR_006 | incomplet | Couverture nationale non sourcée, tout le reste confirmé. Gamme Calona documentée par une plaquette de 2020, à confirmer auprès du fabricant. |
| PREST_HRB_010 | CTH (Centre technique d'hygiène) | equipementier | aucune | conforme | Traitement de l'eau d'abreuvement, sans mesure correspondante : ne sortira dans aucun plan. |
| PREST_HRB_011 | RAGT Semences | equipementier | HRB_004 | à corriger | Couverture métropolitaine seulement (fiche nationale) ; « guides techniques sur ces implantations » et « conseils sur le choix des semences » à reformuler ; PDF Géorisques illisible. |
| PREST_HRB_012 | Cérience | equipementier | HRB_004 | incomplet | Site bloqué aux robots, sources en copies web.archive.org que le contrôleur ne lit pas. Non renvoyé au rédacteur. |
| PREST_HRB_013 | PâtureSens | bureau_etudes | HRB_004, HRB_003 | conforme | Couverture partielle des deux mesures (pâturage, pas sécheresse ni réserve). Départements 14 et 59 déduits. |
| PREST_HRB_014 | ESPACE Basse-Normandie | association | HRB_007 | incomplet | « Pompes de prairie » non attribuées à ESPACE. SIRET corrigé par le rédacteur (43806321600032, titulaire des marchés) ; homonyme à Cahagnes. |
| PREST_HRB_015 | PNR des Marais du Cotentin et du Bessin | collectivite | AGR_010 | conforme | Programme « Élevage & Marais » orienté zones humides et qualité, pas volumes. |

## Aides

| Id | Dispositif | Mesures liées | Verdict final | Ce qui reste |
|---|---|---|---|---|
| AIDE_HRB_001 | AESN, sobriété en eau des agriculteurs | AGR_006, AGR_001 | conforme | Lien AGR_001 sur « systèmes de mesure », contexte surtout irrigation. Dépôts AESN suspendus jusqu'à mi-janvier 2027 (info datée). |
| AIDE_HRB_002 | AESN, transition agricole pour l'eau (chapitre C) | HRB_004 | à corriger | « Sans pourcentage publié » contredit : jusqu'à 80 % pour prairies et haies dans le volet sobriété. Lien partiel (matériel d'herbe, MAEC, PSE). |
| AIDE_HRB_003 | Programmes de rivière du Cotentin | HRB_007, HRB_003 | incomplet | Phrase « pas de réserve de secours ni de canalisations » non sourcée, introduite au second passage sur ma consigne : à retirer. |
| AIDE_HRB_004 | Département de la Manche, petits investissements | HRB_004 | conforme | Majoration « zones à contraintes naturelles » tirée du cadre européen cité par le règlement ; règlement de 2021 peut-être remplacé (régime SA.107520 dans le formulaire 2025). |
| AIDE_HRB_005 | Département de la Manche, filière équine | HRB_003 | conforme | Réservée à la filière équine mais visible de tout le secteur ; ouverture 2026 non confirmée par une annonce datée. |
| AIDE_HRB_006 | Région Normandie, entreprises équines de demain | AGR_006 | à corriger | Plafond 150 000 € (Conseil des chevaux, extrait Région) contre 300 000 € (les-aides.fr) : à trancher sur le PDF officiel. Région illisible par outil (403). |
| AIDE_HRB_007 | Région Normandie, NAI | HRB_003, HRB_007, AGR_006 | incomplet | Le premier contrôleur a lu le PDF du webinaire et confirmé les trois liens ; le second n'a pas pu le lire. Écart CUMA priorité 4 (140 000 ou 150 000 €). |
| AIDE_HRB_008 | MAEC autonomie fourragère | HRB_004 | conforme | Montants niveaux 1 et 2 vérifiés sur une notice chacun ; synthèse xlsx non lue. |
| AIDE_HRB_009 | AERMC, ECO2 sobriété en eau de l'agriculture | AGR_006 | conforme | Incertain si l'eau de pluie substituée au réseau public remplit la condition de baisse des prélèvements. |
| AIDE_HRB_010 | Région Auvergne-Rhône-Alpes, eau en élevage | HRB_003, AGR_006, AGR_001 | incomplet | Seuil des petits ruminants attribué à la page Région illisible ; question : les-aides.fr est-il une source acceptée ? |

## Points transverses pour la revue

- **Sites illisibles par outil** (anti-robot, 403, certificat, JavaScript) : normandie.fr,
  auvergnerhonealpes.fr, cerience.fr, alistep.com, delaval.com. Les contrôleurs ne lisent pas non
  plus web.archive.org. Une relecture humaine dans un navigateur lèverait la plupart des
  « incomplet ».
- **Contrôleurs non reproductibles sur les PDF** : le même PDF (NAI) a été lu par un contrôleur et
  pas par le suivant.
- **`infos_complementaires` des prestataires** : la table `prestataires` n'a pas de colonne pour
  ce champ (signalé par le rédacteur de PREST_HRB_004) ; le retour d'expérience de l'EARL de la
  Landerie ne sera pas servi.
- **Types d'aide** : `subvention` couvre mal les MAEC et PSE (paiements contractuels) ; seul
  `accompagnement` convient aux travaux en maîtrise d'ouvrage publique (AIDE_HRB_003).
