# Verdicts des contrôleurs : brasserie et boissons sans alcool

Étape 6 du skill `nouveau-secteur`, agents `controleur-fiche`, 2026-10-15. Synthèse reconstituée
après la promotion : les fichiers `fiches/*.verdict.md` du staging n'ont pas été archivés par
`promouvoir_staging.py` (seules les notes Markdown du premier niveau le sont). Les messages
complets des contrôleurs sont dans la session du 2026-10-15.

Toutes les fiches ont été publiées le 2026-10-15 (`--publier-tout`), réserves comprises.

## Verdict final par fiche

| Fiche | 1er passage | Verdict final | Ce qui reste à reprendre |
|---|---|---|---|
| PREST_BOI_001 IFBM | incomplet | incomplet | Couverture nationale non sourcée ; libellé d'expertise « Conception d'un équipement CIP » (module de formation, pas une prestation) ; forme juridique association (9220). Seul lien : ACT_BOI_003 formation. |
| PREST_BOI_002 Elodys International | incomplet | incomplet | Couverture nationale non sourcée ; lien ACT_BOI_001 fragile (plan de mesurage, pas de ratio par hectolitre). |
| PREST_BOI_003 BrewFactory | à corriger | conforme | Type `installateur` (fabricant sans lieu de production établi). SIRET du siège et non de l'atelier du MIN de Rouen ; mail décodé d'une protection anti-spam. |
| PREST_BOI_004 ETA | incomplet | incomplet | « Matériel vendu sur devis » non sourcé ; le lien ACT_BOI_003 ne repose que sur un compartiment d'eau réutilisée. |
| PREST_BOI_005 Christeyns France | à corriger | **à corriger** | Type passé à `solution_numerique` (Insite-CIP) contesté ; `departements` réduit à ["44"] sans source, donc fiche invisible dans le Nord ; expertise « Formation à l'hygiène alimentaire » contredite (aucun cours en France). |
| PREST_BOI_006 Newasys | conforme | conforme | SIRET de Strane Innovation déduit du pied de page (mentions légales en 404) ; lien ACT_BOI_001 moins précis. |
| PREST_BOI_007 INGETECH Solutions | conforme | conforme | Lien ACT_BOI_007 partiel (prétraitement, pas de collecte des coproduits). |
| PREST_BOI_008 Clauger | à corriger | conforme | Passé à `equipementier` (page N-PAC Air Dual : « Fabrication française ») ; ajouter cette page à la source du champ `type`. |
| PREST_BOI_009 EWK France | à corriger | incomplet | Libellé « commerce de gros » du NAF 46.69B non sourcé ; couverture nationale par déduction. |
| PREST_BOI_010 Eloy Water France | à corriger | incomplet | Mail info@eloywater.fr illisible sur la page (la brochure donne info@eloywater.com) ; libellé « intermédiaire du commerce » non sourcé. Rôle `travaux` retiré. |
| PREST_BOI_011 ATB France | à corriger | conforme | Rôle `travaux` avec réserve (pose par partenaires régionaux) ; « succursale » plutôt que « filiale ». |
| PREST_BOI_012 Géonord | conforme | conforme | Lien ACT_BOI_008 par analogie (captages publics, aucun minéralier). |
| PREST_BOI_013 Solagro | incomplet | incomplet | Couverture nationale non sourcée ; statut SCIC 2026 à dater et SIRET à vérifier après transformation. |
| PREST_BOI_014 Antea Group | conforme | conforme | Le PDF Cilaos (référence minéralier) n'a pas pu être relu par le contrôleur. |
| PREST_BOI_015 CCI de région Hauts-de-France | conforme | conforme | Contact nominatif qui datera. |
| PREST_BOI_016 Ecopal | incomplet | incomplet | Départements 59 et 62 non sourcés (l'association revendique toute la région) ; aucun lien ACT_AGR_010 (pas d'action collective eau documentée). |
| PREST_BOI_017 Chambre d'agriculture du Nord-Pas de Calais | incomplet | incomplet | **Lien ACT_BOI_008 introuvable** (seulement les PSE de l'agence sur captages publics) ; description qui élargit le périmètre (« captages prioritaires » au lieu de « ultra prioritaires dont le CARE est approuvé »). Sans ce lien, la fiche ne porte aucune mesure. |
| AIDE_BOI_001 Parcours brasseries artisanales Grand Est | à corriger | conforme | Liens ACT_BOI_005, 006, 007 partiels ; dernière session close le 30 octobre 2026 : fiche à revoir après le 6 novembre 2026. |
| AIDE_BOI_002 Booster transition écologique (CCI HdF) | incomplet | incomplet | Seul lien (ACT_AGR_002) discutable : diagnostic multithème d'une demi-journée. |
| AIDE_BOI_004 AEAP eaux non conventionnelles | conforme | conforme | Type `subvention` alors que les travaux combinent subvention et avance remboursable. Seul lien : ACT_AGR_006. |
| AIDE_BOI_005 AMI captages CARE (AEAP) | à corriger | conforme | Type `accompagnement` ; liens ACT_AGR_010 et ACT_BOI_008 avec réserve (qualité de l'eau, captages publics) ; appel clos le 2 novembre 2026. |

AIDE_BOI_003 (Booster Transformation Rev3) : abandonnée par le rédacteur, la page du dispositif ne
relie pas le conseil financé à l'eau.

## Décision de méthode sur le type de prestataire

Le contrôleur appliquait la définition du vocabulaire (`installateur` = ne fabrique pas). Le
coordinateur a fait appliquer la section 8.1 du guide : `equipementier` seulement si une source
établit la production en France ; une entreprise qui se dit fabricant sans lieu de production
établi, ou une filiale d'un groupe étranger, prend `installateur` et la description le dit. Ce
point mérite d'être écrit dans le vocabulaire de `referentiel_verif.py` ou dans la consigne du
contrôleur, pour qu'il ne soit plus relevé comme contradiction.
