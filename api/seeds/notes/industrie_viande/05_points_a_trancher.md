# Points à trancher avant publication : industrie de la viande et des produits de la mer

Étape 7 du skill `nouveau-secteur`. À lire avec `revue.md` (contenu complet) et les verdicts
de `fiches/*.verdict.md`. Date : 2026-09-24.

## En dix lignes

1. Neuf fiches sur 27 ne sont pas conformes (une « à corriger », huit « incomplètes ») : liste en section 1.
2. Deux défauts ont été introduits par les consignes de correction de l'orchestrateur : AIDE_VIA_004 (débourbeurs-déshuileurs) et AIDE_VIA_002 (exemple du sang). À corriger en priorité.
3. Trois fiches ne seront jamais ou presque jamais appariées : PREST_VIA_015 Essor, AIDE_VIA_008 FEAMPA (sans mesure ni catégorie), PREST_VIA_001 Hypred (catégorie sans prestation sourcée). Retirer ou relier.
4. Trois sites bloquent les outils (equans.fr, kersia-group.com, bretagne.bzh) : Axima, Hypred et le PASS IAA Bretagne demandent une relecture humaine dans un navigateur.
5. La copie modifiée de `aides_industrie_laitiere.json` dans ce staging ouvre six aides d'agence au secteur : sa promotion écrase le fichier publié ; le staging `industrie_laitiere` en contient une autre copie, plus ancienne.
6. Désaccords du juge non résolus : ordre du plan de gestion (ACT_AGR_009, transversale notée 1 × 2) et absence de critère de conformité dans le tri du moteur ; ratio par kilo gardé à impact 1 par décision.
7. Écarts assumés : 3 % de profils avancés (cible 5 %), treize mesures visibles (cible 12, la treizième imposée par la bascule transversale d'ACT_AGR_006), saurisserie à onze mesures.
8. Couverture faible : aucun prestataire pour le compteur par usage, le plan de gestion et la démarche collective ; le nettoyage économe n'a qu'un fabricant au lien faible (REGELAV).
9. Aucune mesure propre aux produits de la mer ; L9 (réutilisation d'eaux usées traitées) et L10 (eau de mer propre) restent en réserve.
10. Aucune mesure agricole de plus n'est proposée en transversal ; ACT_AGR_006 l'est devenue pendant la session (publication hôtellerie de 15 h 17), le questionnaire laitier ne la cite toujours pas (avertissement du vérificateur).

## 1. Fiches non conformes

| Fiche | Verdict | À faire |
|---|---|---|
| PREST_VIA_007 Axima | à corriger | « réalisé en 2008 » contredit (unité en service depuis septembre 2007) ; retirer « commercial » et « tarifs non publiés » ; une source récente sur l'offre adiabatique renforcerait le lien. |
| PREST_VIA_001 Hypred | incomplet | Pages Kersia illisibles par les outils ; plus de lien ni de couverture nationale. Relire kersia-group.com dans un navigateur ou retirer la fiche. |
| PREST_VIA_006 CM2A | incomplet | Lien transport à sec déduit (pompe à vide sans mention d'eau), même déduction acceptée pour Couédic Madoré et Termet : trancher pour les trois. Couverture nationale déduite. |
| PREST_VIA_013 Energiency | incomplet | Éditeur de logiciel typé bureau_etudes faute de type adapté ; ratio d'eau par kilo non démontré (seulement pour l'énergie). |
| AIDE_VIA_002 AERM pollution | incomplet | Retirer l'exemple du sang de l'info n° 2 (déduction introduite par l'orchestrateur) ; décider du lien ACT_VIA_007. |
| AIDE_VIA_004 AELB IND_1 | incomplet | Rattacher l'exclusion des débourbeurs-déshuileurs aux eaux pluviales, pas au prétraitement (erreur introduite par l'orchestrateur) ; séparer exclusions générales et pluviales ; retirer « présenté seul, risque d'être refusé ». |
| AIDE_VIA_005 AEAG pollution | incomplet | « subvention » non écrit dans la source ; préciser que la convention de déversement n'est pas finançable ; rétablir « (site orphelin, fermé ou en post-exploitation) ». |
| AIDE_VIA_010 PASS IAA Bretagne | incomplet | Aucune source lisible (bretagne.bzh en 403, archive refusée) ; ouvrir la page 2026 dans un navigateur, confirmer éligibilité, plafond et exclusion des produits de la mer. |
| AIDE_VIA_003, 006, 007, 009 et 12 autres | conforme | Réserves non bloquantes dans chaque verdict. |

## 2. Cohérence des liens entre fiches

- **Collecte du sang (ACT_VIA_007) et aides d'agence** : la collecte séparée du sang est obligatoire en abattoir ; les aides pollution financent ce qui va au-delà des normes. Les six aides la citent par « réduction à la source » ou « technologies propres » ; Adour-Garonne l'a retirée. Uniformiser, et ajouter un avertissement commun.
- **Transport à sec (ACT_VIA_005)** : Couédic Madoré, CM2A et Termet ; aucun ne parle d'économie d'eau. Les contrôleurs n'ont pas jugé pareil (conforme pour deux, incomplet pour CM2A).
- **`secteurs: ["industrie_viande"]`** sur des aides et prestataires qui visent toute l'industrie (aides d'agence, ADRIA, Ecofilae) : candidats à un rattachement élargi quand d'autres secteurs agroalimentaires existeront.

## 3. Textes sources extraits par l'orchestrateur

`fiches/textes_sources/` contient trois extractions pdfplumber de PDF que WebFetch ne lisait
pas (dossier ICPE du Faou, fiche pollutions Adour-Garonne, 12e programme Seine-Normandie).
Elles ont servi aux seconds contrôles ; elles ne sont pas des sources à publier.

## 4. Promotion

Rien n'est promu. Commande, après relecture :

```bash
conda run -n noe-env python api/promouvoir_staging.py industrie_viande --publier-tout
```

ou `--publier <ids>` pour ne publier que les fiches conformes.
