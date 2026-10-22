# Verdict : PREST_HOT_003 (Les Robinets Presto)

Agent `controleur-fiche`, premier passage, 2026-09-24.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Les Robinets Presto | confirmé | API Recherche d'entreprises : « SA LES ROBINETS PRESTO » |
| type | equipementier | confirmé | charte-dindustriel : « PRESTO conçoit et fabrique depuis 100 ans des solutions de robinetteries pour les lieux qui reçoivent du public » ; organisation : « Tous les produits PRESTO sont fabriqués à Saint George-de-Didonne et au Portugal » |
| siret | 54209143400010 | confirmé | API : siège 7 rue Racine 92120 Montrouge, actif |
| departements | [] (national) | introuvable | store-locator : « Retrouvez nos produits en distribution professionnelle », sans zone couverte |
| secteurs | hotellerie | confirmé | page projet/hotellerie, références Hôtel Bedford, Hôtel Disneyland, Le Pas Sage |
| categories | ameliorer_efficacite_hydrique | confirmé | catégorie de ACT_HOT_001 |
| expertises | Robinetterie temporisée ; Robinetterie électronique sans contact ; Chasse directe double volume | confirmé | page hôtellerie |
| mesures | ACT_HOT_001 [materiel] | confirmé | chasse double volume P1000 XL DVA, robinets temporisés ; rien sur mousseurs ni douchettes à débit limité |
| contacts | site, tel, mail, adresse | confirmé | page contact et API |
| description | fabricant, sites, références, distribution | confirmé | sauf « Charente-Maritime » (déduit du code postal 17110) et service de chiffrage réservé aux chantiers de plus de 3 000 € HT, non précisé |

SOURCES : 6 citées, 6 accessibles

VERDICT : incomplet

Champs à corriger ou à sourcer, par ordre d'importance :
1. `departements: []` : aucune source ne montre une couverture nationale.
2. `mesures` ACT_HOT_001 : aucune source ne couvre les mousseurs ni les douchettes à débit limité.
3. Description : « Charente-Maritime » absent des sources ; seuil de 3 000 € HT du service de chiffrage non mentionné.

## Second passage, 2026-09-24

Correction appliquée : trois fiches produit (lavabo NEO 1,9 ou 3 l/min, douche Prestotem 2 à 6, 8 ou 10 l/min, chasse P1000 XL DVA), code postal, seuil de 3 000 € HT, réseau de distributeurs. Tous les champs confirmés sauf la couverture.

- **departements [] : introuvable.** Le comptage de 1 375 distributeurs vient de données de carte chargées en JavaScript, invisibles sur l'URL citée.
- Nuance : fabrication en France et au Portugal, sans précision par gamme.

VERDICT : incomplet (définitif, signalé à la revue)

À trancher : accepter la couverture nationale d'un fabricant distribué en réseau professionnel, ou citer l'URL directe des données de la carte.
