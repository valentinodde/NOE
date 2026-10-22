# Verdict de contrôle : PREST_LAI_002 (Cniel)

Contrôle en contexte vierge, lecture seule, contre les seules sources citées par la fiche.
Date : 2026-09-22.

`SOURCES : 8 citées, 7 accessibles` (le PDF AQUAREL répond mais son texte n'est pas
extractible par le contrôleur)

`VERDICT : incomplet`

## Contrôle champ par champ

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| `nom` | Cniel (Centre national interprofessionnel de l'économie laitière) | confirmé | cniel.com et API Recherche d'entreprises. |
| `type` | `association` | confirmé | cniel.com : « est l'association qui regroupe les organisations représentant les producteurs de lait de vache » ; nature juridique INSEE 9220. |
| `siret` | 30081795400062 | confirmé | API : 42 rue de Châteaudun, 75009 Paris. |
| `departements` | `[]` (national) | confirmé | Structure nationale, 8 Criel en région, aucune liste de départements. |
| `secteurs` | `["industrie_laitiere"]` | confirmé | Interprofession de la filière laitière. |
| `contacts` site, tél, adresse | | confirmé | Page contacter-le-cniel, libellés identiques. |
| `expertises` Veille scientifique et technologique | | confirmé | « les professionnels de la filière laitière reçoivent tous les mois une synthèse de l'actualité scientifique et technologique ». |
| `expertises` Portail documentaire laitier | | confirmé | cniel-infos.com : « le portail documentaire de référence de la filière laitière française ». |
| `expertises` Références de filière sur l'eau | | confirmé par source de repli | franceterredelait : AQUAREL « a audité une soixantaine de sites industriels laitiers ». La source principale citée (PDF Actalia) n'a pas pu être lue. |
| `expertises` Réutilisation des eaux issues du lait | | confirmé comme thème, non comme prestation | La source décrit l'objet du programme, pas un service rendu. |
| `description` initiative et cofinancement d'AQUAREL avec deux agences | | introuvable | Seul le PDF illisible est cité. Aucune autre source ne mentionne l'initiative, le cofinancement ni les deux agences. |
| `description` portage réglementaire auprès des pouvoirs publics | | introuvable | franceterredelait évoque des obstacles réglementaires mais n'attribue aucun portage. |
| `description` accès par les publications et la veille | | confirmé | cniel-infos.com. |
| `categories` | `valoriser_reut_eaux_non_conventionnelles` | introuvable | Repose sur la même justification AQUAREL, non lisible. |
| `mesures` ACT_LAI_006, `conseil_etude` | | introuvable | Voir ci-dessous. |

## Le point soumis au contrôleur : le lien unique de la fiche ne tient pas

`ACT_LAI_006` demande à un site de réutiliser ses condensats et perméats après déclaration
au préfet, avec analyses et intégration au plan de maîtrise sanitaire. Le rôle
`conseil_etude` engage le référentiel à dire qu'une entreprise peut se tourner vers cette
structure pour être conseillée sur ce geste.

Les sources établissent trois choses seulement : le Cniel a porté un programme de filière,
ce programme a audité une soixantaine de sites, et le Cniel s'est engagé en 2017 à
accompagner la mise en oeuvre des recommandations sous cinq ans. Aucune ne décrit une offre
adressée à un site, ni un point d'entrée pour la solliciter, ni une réalisation postérieure
à cet engagement, dont l'échéance est passée. La seule source qui porte l'engagement est de
surcroît éditée par le Cniel lui-même.

La fiche se contredit d'ailleurs elle-même : sa description précise « il produit des
références collectives pour les sites de transformation plutôt qu'un accompagnement
individuel » et « l'accès se fait par ses publications ». Financer une étude de filière et
en accompagner collectivement la mise en oeuvre relève de la production de références, pas
d'une prestation de conseil au sens du référentiel.

Le lien doit être retiré, ou la valeur de la fiche portée par ses publications, via une
ressource sur la mesure plutôt que par un lien prestataire.

## Champs à corriger ou à sourcer, par ordre d'importance

1. `mesures` ACT_LAI_006 avec le rôle `conseil_etude` : à retirer, sauf production d'une
   source décrivant une prestation accessible à un site laitier.
2. `categories` : tombe avec le lien ci-dessus s'il est retiré, et n'est de toute façon pas
   lisible dans la source citée.
3. `description`, initiative et cofinancement d'AQUAREL : citer une source lisible.
4. `description`, portage réglementaire : à sourcer ou à supprimer.
5. `description`, volet traitement des effluents : à sourcer ou à supprimer.
6. Les deux expertises sur l'eau : rattacher explicitement à franceterredelait, seule source
   lisible sur ce point.
7. Extrait de la source franceterredelait : la mention des mentions légales n'est pas
   vérifiable sur la page récupérée.
