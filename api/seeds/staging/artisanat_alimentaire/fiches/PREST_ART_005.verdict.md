# Verdict du contrôleur : PREST_ART_005 (Odréo)

Premier passage, 2026-10-15.

Erreur bloquante : le type `installateur` est contredit par les sources. Rôle sur ACT_ART_002 et 20
départements confirmés. Pertinence pour les commerces alimentaires non démontrée.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Odréo | contredit (mineur) | Toutes les sources écrivent « ODREO », sans accent (SIRENE, site, logo). |
| type | installateur | contredit | « Conseils et mise en relation avec des spécialistes de la réparation après intervention » ; six prestations, toutes de recherche de fuite ; NAF 71.20B (analyses, essais et inspections techniques) ; la description dit « Elle ne répare pas elle-même ». Profil `organisme_technique` ou `bureau_etudes`. |
| siret | 91241457000016 | confirmé | API : siège, état A, créée le 2022-04-08. |
| departements | 12 AURA + 8 BFC | confirmé | « Notre équipe intervient dans les régions Rhône-Alpes-Auvergne et Bourgogne-Franche-Comté ». Déclaration régionale, entreprise de 1 à 2 salariés. |
| categories | suivre_comprendre_maitriser | confirmé | Catégorie d'ACT_ART_002. |
| secteurs | artisanat_alimentaire | introuvable | Clientèle professionnelle attestée (« vos locaux à Lyon »), mais la seule preuve « commerces » est un article de blog générique (12/03/2026) qui ne nomme pas l'entreprise ; « Nos Clients » : particuliers, assureurs, entreprises du bâtiment, syndics, piscinistes. |
| expertises (non destructive, réseau enterré, inspection vidéo, rapport) | | confirmées | Accueil, pages intérieur et réseaux enterrés. |
| mesures : ACT_ART_002 [conseil_etude] | | confirmé | « votre compteur crédite en l'absence d'utilisation de vos points d'eau. Nous intervenons pour localiser précisément l'emplacement de la fuite » ; « recommandations pour les réparations nécessaires ». Pas de `travaux`. |
| contacts | | confirmés | Accueil, SIRENE (le site dit « située à Lyon », siège à Montrottier). |
| description | | confirmée | Accueil et pages citées. |

Pas de contradiction trouvée entre détection seule et réparation dans les sources citées : tous les
passages vont dans le sens détection puis orientation vers un réparateur.

SOURCES : 7 citées (6 URL distinctes), 7 accessibles

VERDICT : à corriger

Champs à corriger ou à sourcer, par ordre d'importance :
1. `type` : remplacer `installateur` par `organisme_technique` ou `bureau_etudes`.
2. `secteurs` : source où l'entreprise dit intervenir pour des commerces ou des métiers de bouche, ou
   rattachement assumé sur « locaux professionnels ».
3. `nom` : « ODREO » ou « Odreo ».
4. Remarque : couverture de 20 départements sur simple déclaration régionale.

## Second contrôle, 2026-10-15 (après second passage : type `bureau_etudes`, nom « ODREO »)

Tous les champs confirmés, aucun contredit ni introuvable. SOURCES : 8 citées (5 URL distinctes),
accessibles.

VERDICT : conforme

Remarques : `secteurs` repose sur une clientèle professionnelle générique, sans mention du secteur
alimentaire (la description le dit) ; `bureau_etudes` est une classification interne tirée du NAF
71.20B et de l'absence de travaux.
