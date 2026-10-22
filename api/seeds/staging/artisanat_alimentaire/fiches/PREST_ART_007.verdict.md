# Verdict du contrôleur : PREST_ART_007 (Pharaon)

Premier passage, 2026-10-15. 7 URL citées ouvertes, aucune autre source.

Aucun champ contredit. Couverture nationale non sourcée ; type `installateur` fragile au regard du
guide (section 8.1).

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom, siret | Pharaon, 32129060300034 | confirmés | Mentions légales ; API : siège, état A, NAF 46.69C, 20 à 49 salariés. |
| type | installateur | introuvable (fragile) | Le guide n'admet un distributeur en `installateur` que s'il pose le matériel. L'installation « clés en main » citée vise les systèmes d'aspiration sur mesure, pas l'aspirateur mobile à farine, vendu sur devis et expédié. Rien ne justifie `equipementier` (« 100 % fait en France » ne vise que le reconditionné). |
| exclusion des revendeurs en ligne | | pas d'exclusion selon les sources | Bureau d'études, SAV avec visites préventives, location, 20 à 49 salariés ; vente en ligne des seuls consommables. La condition « à défaut de fabricant français » n'est pas vérifiable par les sources citées. |
| departements | [] (national) | introuvable | « Leader [...] pour les industries en France » est un positionnement commercial ; aucune zone d'intervention ni livraison dans le 69 établie. |
| expertises (aspirateur à farine, location, pièces et SAV) | | confirmées | Pages c60, qui-sommes-nous, fiche produit. |
| mesures : ACT_ART_005 [materiel] | | confirmé, avec réserve | « Aspirer la farine » ; la page parle santé et hygiène, jamais d'eau ; ne couvre que la farine (boulangerie, pâtisserie), pas les graisses de la charcuterie. |
| contacts | | confirmés | Mentions légales. |
| description : distributeur, fabricant non dit | | introuvable en partie | « Distributeur » est déduit du NAF ; le site présente l'aspirateur « de Pharaon » et un bureau d'études. |
| description : LEMPA, subvention, accessoires, location, SAV | | confirmés | Fiche produit, accueil. |
| description : « vente sur devis ou en ligne » | | confirmé en partie | En ligne : seulement les sacs. |
| logo_url | SVG pharaon.fr | accessible | Copie Cloudinary non vérifiée. |

SOURCES : 7 citées, 7 accessibles

VERDICT : incomplet

Champs à corriger ou à sourcer, par ordre d'importance :
1. `departements` : citer une page (CGV, livraison, réseau commercial) établissant une livraison ou
   une intervention dans toute la France, sinon restreindre.
2. `type` : sourcer une installation ou une mise en service de l'aspirateur à farine, ou écrire que
   l'installation ne porte que sur les projets clés en main. L'absence de fabricant français est une
   décision humaine.
3. ACT_ART_005 : aucune source ne relie l'aspirateur à une économie d'eau ; le lien ne couvre que la
   farine.
4. Description : présenter « distributeur » comme une déduction du code NAF ; « en ligne » ne vaut que
   pour les consommables.

## Second contrôle, 2026-10-15 (après second passage du rédacteur)

9 sources citées, 9 accessibles. Aucun champ contredit. Type `installateur` confirmé avec réserve
(projets clés en main avec installation, mise en service et formation ; « procédés de fabrication
responsables » sans dire si l'entreprise fabrique). Lien ACT_ART_005 [materiel] confirmé ; l'argument
eau vient de la mesure, pas de Pharaon.

VERDICT : incomplet (définitif, second passage épuisé)

Restent :
1. `departements` [] : livraison « à l'adresse indiquée sur l'ARC », TVA « 20 % en France, hors
   exportation et CEE » ; aucune source n'affirme une couverture nationale pour la vente sur devis,
   l'installation et le SAV.
2. `type` : vérifier que « procédés de fabrication responsables » n'appelle pas `equipementier`.
3. Description : « seuls » les consommables en ligne n'est pas écrit ; « aucun lieu de fabrication »
   tait la mention de procédés de fabrication.
