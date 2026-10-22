# Verdict du contrôleur : PREST_FRL_001 (FEMIA Industrie), premier passage

Contrôle du 2026-09-25, agent `controleur-fiche`.

| Champ | Verdict | Justification |
|---|---|---|
| nom | confirmé | page contact, siège Rueil-Malmaison |
| type (equipementier) | confirmé | « la fabrication est lancée sur notre site de production, au cœur des Hauts-de-France » ; NAF 28.93Z |
| siret 33334484400092 | confirmé | siège actif, 2 établissements ouverts |
| departements [] (national) | confirmé | 55 pays, clients en France (Bonduelle, Eureden, Greenyard, William Saurin) |
| expertises (4) | confirmé | tambours et épierreurs, laveur qui « recycle l'eau dans un tambour épurateur », blancheurs-refroidisseurs, rénovation |
| mesures ACT_FRL_003 materiel | confirmé avec réserve | « faible consommation d'eau du fait de son recyclage et de la filtration en continu » ; séparateur à air ; régulation du débit non mentionnée |
| mesures ACT_FRL_005 materiel | introuvable | la page blanchiment ne cite que « filtration de l'eau » ; ni recyclage, ni épluchage, ni pelage |
| contacts (2 tel, 2 adresses, site) | confirmé | page contact |
| description, Bonduelle et McCain | confirmé par une autre source | présents sur la page international, pas sur la page histoire citée ; McCain pour la Nouvelle-Zélande |
| description, tambours « sans eau » | introuvable | justifié pour le séparateur à air seulement |
| autres éléments de la description | confirmé | |

SOURCES : 7 citées, 7 accessibles

VERDICT : incomplet

À corriger ou sourcer :
1. Lien ACT_FRL_005 : sourcer un recyclage de l'eau des blancheurs ou un épluchage économe, sinon retirer le lien.
2. Rattacher « Bonduelle, McCain » à la page international et corriger l'extrait de la page histoire.
3. « sans eau » : limiter au séparateur à air.
4. Réserve mineure sur ACT_FRL_003 : la régulation du débit n'est pas couverte.

## Second passage (2026-09-25), après correction

Le rédacteur a retiré le lien ACT_FRL_005 et la catégorie changer_process_pratiques, limité « sans eau »
au séparateur à air et ajouté la page international. Tous les champs confirmés, sauf :

| Champ | Verdict | Justification |
|---|---|---|
| description, « il cite Bonduelle et McCain parmi les industriels accompagnés » (page histoire) | introuvable | trois lectures de la page histoire, chronologie de 1962 à 1975, ni Bonduelle ni McCain ; seuls appuis : logos de la page international (Bonduelle pour la France, McCain pour la Nouvelle-Zélande) |

**Désaccord à trancher à la revue** : le rédacteur affirme avoir retrouvé la phrase « Nous avons su
accompagner des grands noms de l'industrie agroalimentaire comme Bonduelle ou McCain » sous l'année 1970
dans le HTML de la page histoire ; le contrôleur ne la voit pas dans le texte rendu. Vérifier à la main
sur https://www.femia.fr/a-propos-de-nous/lhistoire-de-femia/.

Points mineurs : ajouter à l'extrait nettoyage la phrase sur le bureau d'études ; SIRET du site de
Hallennes non établi (la fiche porte celui du siège).

SOURCES : 7 citées, 7 accessibles

VERDICT : incomplet (second passage, verdict conservé pour la revue)

## Vérification de l'orchestrateur (2026-09-25)

Page histoire téléchargée (HTTP 200, 152 ko) : le texte « 1970 : une croissance rapide [...] Nous avons su
accompagner des grands noms de l'industrie agroalimentaire comme Bonduelle ou McCain. » est présent dans
le HTML, dans un bloc de chronologie (carrousel) que la lecture du contrôleur n'a pas restitué. Le seul
point « introuvable » du second passage est donc levé ; le verdict du contrôleur est conservé tel quel,
comme le veut la règle, avec cette note pour le relecteur.
