# Contrôle de AIDE_HOP_001 (IND2, opérations groupées « Établissements de santé et médico-sociaux », AERMC), premier passage

Message final de l'agent `controleur-fiche`, 2026-10-15 (tableau résumé). Sept PDF lus depuis leurs copies téléchargées, une page HTML lue directement.

Confirmés : nom, financeur, type subvention, taux (de minimis 70 % PME et 40 % grande entreprise ; régime exempté 40 à 60 % ; taux fixé par opération ; mise en garde sur l'hôpital public fondée), plafond (1 M€ par opération, complétable), éligibilité (acteurs économiques non agricoles, quatre opérations santé, limite au bassin RM pour AURA, Occitanie, BFC), seuil de 2 000 m³, rôle du porteur, liste des travaux, départements (complets au niveau régional, limite au bassin portée par `agences`), agences AERMC, liens ACT_AGR_002, ACT_HOP_002, 003, 004, 005, 006, ACT_AGR_006, infos 1 à 4 et 6 à 13.

Confirmé avec réserve : ACT_HOP_007 (« réduction à la source », « toute autre mesure permettant de réduire les rejets » visent des travaux ; campagnes d'analyses seules non éligibles).

Introuvable : info n° 5, exemple « renouvellement d'un osmoseur de dialyse ou d'un équipement de stérilisation ».

SOURCES : 8 citées, 8 accessibles

VERDICT : incomplet

1. Info n° 5 : sourcer l'exemple, le présenter comme hypothèse à vérifier avec le porteur, ou le retirer.
2. ACT_HOP_007 : préciser que seuls les investissements sont aidés.
3. Description : « publiées en mars 2026 » au lieu de « retenues en mars 2026 ».
4. Plafond : le complément au-delà de 1 M€ suppose la première enveloppe engagée.
5. Départements : la limite au bassin repose sur `agences: ["AERMC"]`.
6. Facultatif : exception des CG pour les actions préalables à la préparation du dossier.
7. Facultatif : exclusion du traitement des eaux pluviales des parkings et voies.

# Second passage (après correction)

Message final de l'agent `controleur-fiche`, 2026-10-15 (tableau résumé).

Tous les champs confirmés : nom, financeur, type, taux (de minimis, régime exempté, fixé par opération), plafond (1 M€ par opération, complément si la première enveloppe est engagée), seuil de 2 000 m³, quatre opérations publiées en mars 2026, rôle du porteur, travaux aidés, éligibilité et limite au bassin, départements (quatre régions), agence, liens ACT_AGR_002, ACT_HOP_002 à 007, ACT_AGR_006, quatorze infos complémentaires, logo.

SOURCES : 8 citées, 8 accessibles

VERDICT : conforme

Vigilance facultative :
1. `departements` : les quatre régions entières ; la limite au bassin RM ne tient que par `agences` (l'explorateur /fiches affichera la fiche pour des départements hors bassin).
2. Info 1 : « Parmi les exceptions » plutôt que « Les exceptions sont » (5 exceptions dans les conditions générales).
3. Info 7 : « clos » déduit des dates ; la page affiche encore un bouton de candidature.
4. ACT_HOP_005 (blanchisserie externalisée) et ACT_AGR_002 (diagnostic financé au porteur) : portée réelle plus étroite que la mesure.
