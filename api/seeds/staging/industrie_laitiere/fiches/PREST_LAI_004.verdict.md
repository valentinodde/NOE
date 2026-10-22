# Verdict de contrôle : PREST_LAI_004 (Institut de l'Élevage)

Contrôle en contexte vierge, lecture seule, contre les seules sources citées par la fiche.
Date : 2026-09-22.

`SOURCES : 8 citées, 8 accessibles`

`VERDICT : à corriger`

## Point préalable : le blocage anti-robot n'a pas eu lieu

Le rédacteur signalait que `idele.fr` était protégé par un dispositif anti-robot servant une
page de vérification vide. **Ce blocage ne s'est pas produit au contrôle.** Les huit URL,
dont six sur `idele.fr` et `formations.idele.fr`, ont renvoyé leur contenu réel et
exploitable. Aucun champ de ce rapport n'est donc classé introuvable pour cause technique :
tous les verdicts portent sur ce que les sources disent ou ne disent pas.

## Contrôle champ par champ

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| `nom` | Institut de l'Élevage (Idele) | confirmé | Mentions légales. |
| `type` | `organisme_technique` | confirmé | « qualification d'Institut technique attribuée par le ministère en charge de l'Agriculture », membre du réseau ACTA. |
| `siret` | 30298415800022 | confirmé | Mentions légales et API Recherche d'entreprises. |
| `departements` | `[]` (national) | confirmé | « localisée sur l'ensemble des territoires d'élevage », 330 personnes, 30 établissements ouverts. |
| `expertises[0]` Effluents de fromagerie fermière | | confirmé | Dossier et ouvrage consacrés au sujet. |
| `expertises[1]` Valorisation du lactosérum | | confirmé | « inventorier et analyser les possibilités de valorisation du lactosérum ». |
| `expertises[2]` Formations filières lait et élevage | | confirmé | « près de 200 formations sur tous les thèmes de l'élevage des bovins, ovins et caprins ». |
| `expertises[3]` Analyses de produits laitiers | | confirmé | Page laboratoire. |
| `contacts` site_internet | https://idele.fr | confirmé | Domaine de toutes les pages citées. |
| `contacts` mail | philippe.dumonthier@idele.fr | **contredit** | La même page désigne un autre canal pour ce type de demande : « Valérie Hardit : 06 88 38 25 90 » et un formulaire de demande de devis. L'adresse retenue n'apparaît qu'en repli, « pour toute autre question ». Contact général des mentions légales : idele.webmestre@idele.fr. |
| `contacts` adresse | 149 rue de Bercy, 75595 Paris Cedex 12 | confirmé | Mentions légales. |
| `mesures` ACT_LAI_007, `conseil_etude` | | **introuvable** | Les sources établissent une publication (dossier du 16/01/2013, ouvrage du 28/10/2004), pas une prestation. |
| `mesures` ACT_LAI_008, `conseil_etude` | | **introuvable** | Même constat. L'ouvrage « décrit, analyse et compare » des filières : c'est un contenu, pas un rôle d'intervenant. |
| `description` auteur du dossier de référence | | **contredit** | La source liste des co-auteurs d'un autre organisme : « Jean-Luc Ménard, Jean-Yves Blanchin, Aurore Charpiot (Chambre d'Agriculture Jura) ». Idele est co-auteur. « De référence » n'est le mot d'aucune source. |
| `description` modules ouverts aux IAA | | confirmé | Formation 244, public « Industries agro-alimentaires », programme « nettoyage et désinfection ». Réserve : « Aucune session programmée ». |
| `description` laboratoire de Villers-Bocage | | confirmé | « produits carnés, laitiers et fourrages ». |
| `description` public des formations | | confirmé | « amont et aval des filières d'élevage ». |
| `description` « ses prestations d'étude » | | introuvable | Aucune source citée ne décrit une offre d'étude. |
| `description` accès par le formulaire de contact | | confirmé | Formulaire de devis, mais incohérent avec le contact mail nominatif retenu. |
| `categories` | `agir_rejets_qualite` | confirmé | Cohérent avec l'objet des deux publications. |

## Les deux points soumis au contrôleur

**Publier un dossier ne suffit pas à établir un rôle `conseil_etude`.** Le champ `mesures`
avec ses `roles` répond à « qui j'appelle pour cette mesure, et il fait quoi ». Un rôle
suppose un intervenant mobilisable. Ici les sources n'établissent que la mise à disposition
gratuite de documents datés de 2004 et 2013. L'utilisateur qui verrait cette fiche sous
ACT_LAI_008 contacterait un institut qui n'a, d'après ces sources, aucune offre
correspondante, et tomberait sur un mail de laboratoire d'analyses. La bonne place de cette
ressource est un `infos_complementaires` de type `ressource` porté par les deux mesures.

Deux réserves aggravantes. L'ancienneté d'abord : 13 et 22 ans, sur des filières techniques
et un « point sur la réglementation en vigueur » qui date de 2013. Le périmètre ensuite :
les deux publications visent explicitement l'échelle fermière **contre** l'échelle
industrielle (« les solutions techniques pour gérer ces produits à l'échelle industrielle ne
sont pas adaptées à la taille des ateliers fermiers »), alors que la fiche est rattachée au
secteur `industrie_laitiere`.

**Le contact ne correspond pas au canal désigné.** La source désigne clairement une personne
nommée avec son numéro et un formulaire de devis comme contact des prestations ; l'adresse
retenue est donnée en repli. S'y ajoutent deux défauts : cette page concerne le laboratoire
d'analyses, sans rapport avec les mesures portées par la fiche, et une adresse nominative
est fragile.

**Point de méthode.** L'extrait cité pour la source du dossier s'arrête juste avant les
trois co-auteurs de la Chambre d'Agriculture du Jura. L'extrait est littéralement exact mais
tronqué à l'endroit précis qui nuance l'attribution.

## Champs à corriger ou à sourcer, par ordre d'importance

1. `mesures` ACT_LAI_007 et ACT_LAI_008, rôle `conseil_etude` : non établi. Retirer les deux
   liens, ou apporter une source montrant une prestation réellement proposée. Basculer la
   ressource documentaire en `infos_complementaires` de type `ressource`.
2. `contacts` mail : remplacer par le canal désigné par la source, ou par le contact
   institutionnel des mentions légales.
3. Périmètre secteur : si les liens sont conservés, borner la fiche aux ateliers de
   transformation à la ferme, les sources excluant la transposition industrielle.
4. `description`, auteur du dossier : écrire « co-auteur, avec la Chambre d'Agriculture du
   Jura » et retirer « de référence ». Compléter l'extrait tronqué.
5. `description`, « prestations d'étude » : non sourcé.
6. Ancienneté des sources métier : mentionner les dates (2004, 2013), la partie
   réglementaire étant probablement caduque.
7. Formation 244 : « Aucune session programmée » au jour du contrôle.
