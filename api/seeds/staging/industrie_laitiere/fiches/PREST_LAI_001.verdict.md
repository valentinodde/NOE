# Verdict de contrôle : PREST_LAI_001 (Actalia)

Contrôle en contexte vierge, lecture seule, contre les seules sources citées par la fiche.
Date : 2026-09-22.

`SOURCES : 12 citées, 12 accessibles` (la synthèse AQUAREL en PDF répond en HTTP 200 mais
son texte n'est pas extractible avec les outils du contrôleur : elle n'a donc pu appuyer
aucun champ)

`VERDICT : incomplet`

## Contrôle champ par champ

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| `nom` | Actalia | confirmé | actalia.eu : « ACTALIA est labellisé Institut Technique Agro-Industriel ». |
| `type` | `organisme_technique` | confirmé | « Centre technique expert agroalimentaire », label ITAI. |
| `siret` | 32534654200153 | confirmé | API Recherche d'entreprises : SIREN 325346542, siège 310 rue Popielujko, 50000 Saint-Lô. Une seconde ACTALIA existe (SIREN 491640835, Mantes-la-Jolie) : c'est bien la bonne qui est retenue. |
| `departements` | `[]` (national) | introuvable | Aucune source citée n'énonce une couverture nationale. La page contact servie ne contient que « Cliquez sur la carte pour découvrir nos localisations » : la liste de treize implantations de l'extrait n'est pas reproductible (carte JavaScript). L'API parle de 11 établissements ouverts. |
| `expertises[0]` Eaux issues du lait | | confirmé | Page AQUAREL : « valoriser sur site les eaux issues du lait (perméats d'osmose inverse et condensats d'évapo-concentrateurs) ». |
| `expertises[1]` Traitement des effluents laitiers | | confirmé | Page AQUAREL et page environnement : « les travaux menés au niveau de la gestion des effluents de l'industrie laitière ». |
| `expertises[2]` Traitement et valorisation du lactosérum | | confirmé | Pôle Produits laitiers, prestations. |
| `expertises[3]` Validation des procédures de nettoyage | | confirmé | Pôle Contrôle et qualité : « Validation du plan de nettoyage ». |
| `contacts` site, mail, tél, linkedin | | confirmé | Pages contact et nous-retrouver. |
| `contacts` adresse | 310 rue Popielujko, 50000 Saint-Lô | confirmé | Mais par l'API Recherche d'entreprises, pas par la source déclarée. Rattachement de source à corriger. |
| `description` label ITAI, 22 collaborateurs, 4 sites | | confirmé | Repris mot pour mot des pages citées. |
| `description` « industriels comme artisanaux ou fermiers » | | introuvable | La page prestations servie ne restitue pas cette segmentation. Non contredite, non retrouvée. |
| `description` « il a mené pour le Cniel le projet AQUAREL » | | introuvable | La page AQUAREL dit seulement : « Lancé en 2015 par l'interprofession laitière (CNIEL) et soutenu financièrement par les agences de l'eau Loire-Bretagne et Seine-Normandie ». Elle ne nomme aucun maître d'oeuvre. Héberger et publier les livrables n'est pas la même affirmation. |
| `description` prestations « confidentielles, personnalisées, encadrées par des CGV » | | introuvable | La formule figure sur la page d'un seul pôle. La page CGV ne lie pas les CGV à ces prestations. |
| `mesures` ACT_LAI_001, `conseil_etude` et `formation` | Nettoyage économe | introuvable | Voir l'analyse ci-dessous. |
| `mesures` ACT_LAI_003, `conseil_etude` | Optimisation de la NEP | introuvable | Seule la synthèse AQUAREL porte la NEP (« Optimiser l'exploitation des unités NEP »), et c'est le PDF non exploitable. Aucune page de prestation citée ne mentionne la NEP sous l'angle de l'eau. |
| `mesures` ACT_LAI_005, `conseil_etude` | Concentration du lactosérum | confirmé | « Traitement et valorisation du lactosérum » et « Ingénierie de procédés » ; AQUAREL porte explicitement sur les perméats d'osmose inverse et condensats d'évapo-concentrateurs. |
| `mesures` ACT_LAI_006, `conseil_etude` | Eaux issues du lait | confirmé | AQUAREL : « mettre en évidence les technologies permettant de traiter et de valoriser sur site les eaux issues du lait ». |
| `mesures` ACT_LAI_007, `conseil_etude` | Lactosérum hors effluents | confirmé | « Traitement et valorisation du lactosérum » et page environnement sur la gestion des effluents. |
| `mesures` ACT_LAI_008, `conseil_etude` | Traitement des effluents | confirmé | Page environnement, et fiches techniques AQUAREL sur les technologies de traitement des effluents. |
| `categories` | 5 catégories | confirmé par cohérence | Elles reprennent les catégories des six mesures liées. `sensibiliser_former` ne tient que par ACT_LAI_001, non sourcé. |
| `secteurs` | `["industrie_laitiere"]` | confirmé | Restriction plus étroite que la source (« nous intervenons dans tous les domaines agro-alimentaires »), mais c'est un choix de périmètre, pas une contradiction. |

## Les deux points soumis au contrôleur

**La combinaison de deux sources pour ACT_LAI_001 ne tient pas.** Les deux sources sont
vraies séparément, mais aucune ne porte l'affirmation, et leur rapprochement produit une
conclusion qui n'est nulle part écrite. Le pôle Sécurité des aliments propose bien « Audit
et formation sur site », mais l'objet en est l'efficacité microbicide : le critère est
sanitaire, pas hydrique. Rien n'indique que cette formation traite des volumes d'eau, des
pistolets à gâchette ou du prénettoyage à sec. La synthèse AQUAREL est un document écrit,
pas une prestation de formation. Les deux appartiennent de surcroît à deux pôles distincts.

La seule pièce qui s'en approche est « Les formations sur-mesure intra-entreprise » du pôle
Produits laitiers : elle établit une capacité à construire une formation à la demande, pas
que l'eau du nettoyage en soit le sujet.

**Une même source peut porter ACT_LAI_005 et ACT_LAI_007, et c'est le cas ici.**
« Traitement et valorisation du lactosérum » n'est pas une formule vague rattrapée deux
fois : elle recouvre deux gestes distincts, la concentration sur site pour récupérer l'eau
et la valorisation qui détourne le lactosérum du réseau d'effluents. Le test est de savoir
si la prestation décrite couvre chacune des deux dépenses prise isolément, et elle le fait.
S'y ajoute pour ACT_LAI_007 un appui propre, la page environnement. Aucune objection.

## Champs à corriger ou à sourcer, par ordre d'importance

1. `mesures` ACT_LAI_001, rôle `formation` : inférence non citée, à retirer ou à étayer par
   une page de formation portant explicitement sur l'économie d'eau au nettoyage.
2. `mesures` ACT_LAI_003 : le seul appui est le PDF AQUAREL non exploitable, à confirmer par
   une source lisible.
3. `mesures` ACT_LAI_001, rôle `conseil_etude` : même dépendance, même réserve.
4. `description`, « il a mené pour le Cniel le projet AQUAREL » : la source citée n'attribue
   le pilotage à personne. Reformuler ou citer une source qui nomme le maître d'oeuvre.
5. `departements` vide (national) : à sourcer.
6. Extrait de la source contact : il attribue à la page une adresse et treize implantations
   qu'elle ne rend pas en texte, et le nombre contredit les 11 établissements de l'API citée
   dans la même fiche.
7. `contacts` adresse : rattacher au bon champ de source.
8. `description`, prestations confidentielles et CGV : vrai pour un pôle, généralisé à tort.
9. `description`, « industriels comme artisanaux ou fermiers » : non retrouvé.
