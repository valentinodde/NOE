# Verdict de contrôle : AIDE_LAI_007 (agence de l'eau Loire-Bretagne)

Contrôle en contexte vierge, lecture seule. Date : 2026-09-22.

`SOURCES : 6 citées (3 URL distinctes), 6 accessibles`

`VERDICT : à corriger`

## Le champ contredit, et il coûte vingt points à une entreprise

Le champ `taux` affirme que les études préalables aux travaux relèvent du dispositif IND_1,
donc à 50 %. **La fiche action QUA_1 dit le contraire**, dans ses dépenses éligibles :
« Coût des études de réduction des prélèvements **et des études préalables aux travaux**
(études d'acceptabilité du milieu récepteur, études diagnostics, étude de faisabilité et
d'aide à la décision, etc.) réalisées par un prestataire externe. »

Ces études sont donc éligibles au titre de QUA_1, à 70 %. Et la description de la fiche
l'écrit déjà correctement : la fiche se contredit d'un champ à l'autre, et la version
fausse est celle qui oriente vers le taux le plus bas.

## Une branche de taux manquante

Le document distingue deux lignes : « Études et travaux de réduction des besoins en eau »,
classée Maximal, et « Études et travaux de réduction des prélèvements existants », classée
Prioritaire. Seule la première est chiffrée dans la fiche.

Or c'est la seconde qui porte la réutilisation, le recyclage d'eau de process et la
récupération d'eau de pluie, donc le lien vers les eaux issues du lait, et c'est elle que
plafonne la règle des 60 euros par mètre cube substitué. Un lecteur appliquera 70 % à un
projet de réutilisation, à tort.

## Une omission qui masque une rétroactivité

Le plafond du 1er janvier 2027 s'applique, selon la source, « à toutes les décisions d'aides
prises **sur les demandes déjà déposées et à venir** ». La fiche omet le premier membre,
qui est précisément ce qui expose un dossier déposé en 2026.

## Ce qui est confirmé

Les deux plafonds de 60 euros sont bien **deux règles distinctes** et non une seule lue deux
fois : l'une plafonne le coût retenu des travaux d'eaux non conventionnelles au mètre cube
substitué, l'autre plafonne à partir de 2027 toutes les décisions d'aide sur travaux de
réduction des besoins au mètre cube économisé.

La décision du conseil d'administration du 12 mars 2026, qui peut conduire à la mise en
suspens de dispositifs ou à un plafond d'aide, est citée exactement, date comprise.

Le comptage est bien à la fois dépense éligible et obligation imposée aux travaux, ce que
seule la fiche action au format PDF établit, la page web ne le mentionnant pas. C'est ce qui
fonde le rattachement de cette aide à la mesure d'installation de compteurs.

Conditions d'éligibilité, exclusions (création, transfert, bâtiments neufs), obligation
d'étude préalable avec objectif en volume et en ratio par tonne de produits finis, bilan à
un an, guide de préconisations pour la réutilisation, prise en compte de 50 % du coût d'un
compteur intelligent à défaut de chiffrage du surcoût : tout est confirmé.

## Corrections, par ordre d'importance

1. Supprimer ou requalifier la clause renvoyant les études préalables vers IND_1.
2. Chiffrer la branche « réduction des prélèvements existants », ou dire explicitement que
   les 70 % ne valent que pour la réduction des besoins en eau.
3. Ajouter « sur les demandes déjà déposées et à venir » au plafond de 2027.
4. `type` « subvention » n'apparaît dans aucune source citée.
5. « Un devis signé avant le dépôt rend le projet inéligible » est une glose non sourcée.
6. « Sur le bassin Loire-Bretagne » dans `eligibilite` n'est dans aucune source et fait
   doublon avec le champ `agences`.
7. Le lien vers les circuits de froid ne repose que sur le libellé générique « matériel plus
   économe en eau », sans mention du refroidissement.
8. `secteurs` restreint au laitier un dispositif ouvert à toutes les activités économiques
   non agricoles.
