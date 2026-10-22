# Verdict du contrôleur : PREST_FRL_010 (BWT France), premier passage

Contrôle du 2026-09-25, agent `controleur-fiche`.

| Champ | Verdict | Justification |
|---|---|---|
| nom | confirmé | « Dénomination sociale : BWT France SAS » |
| type (installateur) | contredit | « Outre la fabrication et l'installation des matériels » ; « la conception d'un d'osmoseur BWT SIGMA sur mesure » ; code APE 2829B ; `installateur` est réservé à qui ne fabrique pas |
| siret 56211061900342 | confirmé | API et mentions légales |
| departements [] (national) | confirmé | « 7 agences régionales maillent le territoire métropolitain » ; autres DROM non attestés (mineur) |
| secteurs | confirmé | conserverie d'aucy Le Faouët |
| categories | confirmé | « potabilisation complète de ces eaux épurées en vue de leur réutilisation » |
| expertises (4) | confirmé | osmoseurs sur mesure, réutilisation des eaux épurées, maintenance, aide au dossier (une seule référence) |
| contacts (site, tel, adresse) | confirmé | mentions légales et API |
| mesures ACT_FRL_006 materiel, travaux, conseil_etude | confirmé | fabrication, installation, conception |
| pertinence du lien ACT_FRL_006 | confirmé avec réserve | réutilisation d'eaux de station par osmose (autorisation préfectorale), pas la cascade des rinçages ; la mesure cite ce même cas en « pour aller plus loin » |
| extrait de la source API | inexact | l'extrait dit 37.00Z, l'API renvoie 28.29B |

SOURCES : 8 citées, 8 accessibles

VERDICT : à corriger

À corriger :
1. `type` : `equipementier`.
2. Extrait de la source API : activité 28.29B.
3. Lien ACT_FRL_006 : à valider par le relecteur.
4. DROM hors Réunion non attestés (mineur).

## Second passage (2026-09-25), après correction

Type passé à `equipementier` (« BWT conçoit, fabrique et met en œuvre »), extrait de la source API corrigé
(28.29B pour l'unité légale, 37.00Z pour l'établissement siège), description précisant la réutilisation
d'eaux usées traitées. Tous les champs confirmés, sauf :

| Champ | Verdict | Justification |
|---|---|---|
| expertise « Montage du dossier d'aide » | introuvable | la source dit « aidé [...] quant aux aspects administratifs et financiers », une seule référence |
| description, aide « de l'Agence de l'eau Loire-Bretagne » | introuvable en partie | le lien entre l'accompagnement de BWT et l'aide de l'agence est déduit |
| description, « depuis son siège de Saint-Denis » | nuance | Saint-Denis est présenté comme service export |
| mesures ACT_FRL_006 travaux | confirmé avec réserve de périmètre | l'installation documentée réutilise des eaux de STEP par osmose, pas une cascade de rinçages |

Volumes réutilisés chez d'aucy divergents selon les sources (80 000, 100 000, 45 000 m3) : aucun n'est repris.

SOURCES : 10 citées, 10 accessibles

VERDICT : incomplet (second passage, verdict conservé pour la revue)

À trancher : rattacher la réutilisation d'eaux usées traitées à ACT_FRL_006 ou créer une mesure dédiée.
