# Verdict du contrôleur : PREST_FRL_002 (Hubert Process), premier passage

Contrôle du 2026-09-25, agent `controleur-fiche`.

| Champ | Verdict | Justification |
|---|---|---|
| nom | confirmé | API Recherche d'entreprises : « HUBERT PROCESS » |
| type (equipementier) | confirmé | notre-societe : « Nous réalisons l'étude et la fabrication de vos produits dans nos bureaux et ateliers » ; NAF 28.93Z |
| siret 34088523500036 | confirmé | API : siège, état « A » |
| departements [] (national) | introuvable | aucune zone d'intervention ; seulement « Situé à Laval, nous sommes positionné au coeur du Grand Ouest » |
| secteurs | confirmé | « Nous équipons des usines spécialisées dans la préparation de fruits et légumes de 4ème gamme et 1ère gamme » |
| categories | confirmé | cohérent avec ACT_FRL_003 |
| expertises (4) | confirmé | pages maraichage et laveur-de-legumes |
| description, lavage sur mesure 1re gamme | confirmé | |
| description, dessablage, lavage, rinçage, tri optique, séchage | confirmé | |
| description, contrôle du débit et taux de salissure | confirmé | avantages-machines-consommation-deau |
| description, pas de laveuses de légumes racines | confirmé avec nuance | la même page annonce des laveurs polyvalents 4e gamme « pour des légumes racines » |
| description, bureau d'études, mise en route, formation | confirmé | |
| mesures ACT_FRL_003 materiel | confirmé partiellement | régulation du débit explicite ; aucun déterrage à sec (dessablage et épierrage en bac) |
| contacts (site, tel, mail, adresse) | confirmé | page contact, adresse identique à l'API |

SOURCES : 7 citées, 7 accessibles

VERDICT : incomplet

À sourcer ou corriger :
1. `departements` : couverture nationale non sourcée ; sourcer des interventions dans toute la France ou limiter au Grand Ouest.
2. Lien ACT_FRL_003 : couvre la régulation du débit, pas le déterrage à sec ; ne pas présenter l'entreprise comme fournisseur de déterrage.
3. Phrase sur les légumes racines : formulation plus prudente ou seconde source.

## Second passage (2026-09-25), après correction

Le rédacteur a limité `departements` à 22, 29, 35, 56, 44, 49, 53, 72, 85 et reformulé la description
(régulation du débit, dessablage dans l'eau, pas de déterrage à sec, légumes racines).

| Champ | Verdict | Justification |
|---|---|---|
| departements | introuvable sauf 44 et 53 | « au coeur du Grand Ouest », « déplacements dans le Nord-Ouest de la France lors des mises en route » ; 44 : producteurs nantais, offre d'emploi « dans le 44 ou le 53 » ; 53 : siège ; aucun autre département nommé |
| mesures ACT_FRL_003 materiel | confirmé avec réserve | régulation du débit seulement |
| description et autres champs | confirmé | |

Remarque : la page consommation d'eau cite des « solutions de filtration de l'eau » en vue d'une
réutilisation, piste pour ACT_FRL_006 à sourcer plus précisément.

SOURCES : 9 citées, 9 accessibles

VERDICT : incomplet (second passage, verdict conservé pour la revue)

Si la liste est réduite à 44 et 53, la fiche ne sort plus pour le département de test 56.
