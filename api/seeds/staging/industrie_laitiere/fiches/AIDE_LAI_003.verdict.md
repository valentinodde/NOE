# Verdict de contrôle : AIDE_LAI_003 (Diag Éco-Flux)

Contrôle en contexte vierge, lecture seule, contre les seules sources citées par la fiche.
Date : 2026-09-22.

`SOURCES : 6 entrées citant 2 URL distinctes, 1 URL accessible sur 2`

`VERDICT : à corriger`

## Point préalable : la source principale est inaccessible

`https://www.bpifrance.fr/catalogue-offres/diagnostic-eco-flux` renvoie **HTTP 403** (trois
tentatives, dont une sur l'hôte `diag.bpifrance.fr` qui répond mais ne rend qu'un titre,
page en JavaScript sans contenu). Or cette URL porte 4 des 6 entrées de `sources` et la
quasi-totalité des chiffres. Seul `mission-transition-ecologique.beta.gouv.fr` est
vérifiable, et **il contredit la durée retenue**.

## Contrôle champ par champ

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| `description`, durée | « 7 jours d'intervention répartis sur 10 mois » | **contredit** | Mission Transition : « 6 à 8 jours de prestation répartis sur 15 à 18 mois ». Le chiffre de 10 mois vient de l'extrait Bpifrance, source non accessible. |
| `infos_complementaires` #3, durée | même valeur | **contredit** | Même contradiction, reprise une deuxième fois. |
| `nom` | Diag Éco-Flux, diagnostic énergie, eau, matières et déchets | confirmé (partiel) | « Analysez vos flux d'énergie, d'eau, de matières premières et de déchets ». La mention ADEME n'est pas explicite sur la page accessible. |
| `financeur` | ADEME et Bpifrance | introuvable (partiel) | Bpifrance confirmé comme opérateur. L'attribution de la subvention à l'ADEME n'apparaît que dans l'extrait non vérifiable. |
| `type` | `accompagnement` | confirmé | « 3 000 € HT après subvention de 50% », prestation réalisée par « l'expert, consultant indépendant agréé ». Aucun versement à l'entreprise. Réserve : la page classe l'aide en « étude ». |
| `taux` | 50 % | confirmé (partiel) | Les 50 % sont confirmés, l'attribution à l'ADEME ne l'est pas. |
| `plafond` | reste à charge de 3 000 € HT par site | confirmé | La page raisonne bien par site. |
| `eligibilite` | 20 à 250 salariés, France et DROM-COM, 1 an d'existence, micro-entreprises exclues | confirmé | Textes identiques. La formulation « PME et ETI » vient de la source 403. |
| `departements` | `[]` | confirmé | « France et territoires d'outre-mer ». |
| `agences` | `[]` | confirmé | Dispositif national hors agences de l'eau. |
| `mesures` ACT_AGR_002 | audit eau complet du site | confirmé (partiel) | L'eau est bien un flux analysé, pas un affichage. Mais aucune source accessible ne décrit un traitement approfondi du poste eau : sur 6 à 8 jours partagés entre quatre flux, « audit eau complet » n'est pas soutenu. |
| `description`, déroulé en 5 étapes et plan d'action chiffré | | introuvable | Ne figure que dans l'extrait 403. |
| `description`, « méthode élaborée avec l'ADEME » | | introuvable | Non vérifiable. |
| `infos_complementaires` #1, seuil de taille | | confirmé | Texte identique. |
| `infos_complementaires` #2, l'eau est un des quatre flux | | confirmé | Texte identique. |
| `infos_complementaires` #3, CEE PACTE Entreprises | | introuvable | N'apparaît que dans l'extrait 403. |
| `infos_complementaires` #4, démarche par SIRET | | confirmé | Texte identique. |
| `infos_complementaires` #5, #6, liens Bpifrance | | introuvable | 403 et page vide. |
| `infos_complementaires` #7, lien Mission Transition | | confirmé | Page accessible. |

## Les trois points soumis au contrôleur

**Le périmètre.** L'eau est bien un flux analysé, la source accessible l'énonce dans la
phrase de tête du dispositif. Mais rien ne décrit une analyse du poste eau allant au-delà de
l'inventaire des pertes, et le budget de six à huit jours est partagé entre quatre flux. Le
lien vers `ACT_AGR_002` « audit eau complet » est donc surévalué : soit rattacher la fiche à
une mesure de diagnostic multi-flux, soit conserver le lien en reformulant l'avertissement
pour dire que le dispositif ne remplace pas un audit eau dédié. L'avertissement présent va
dans ce sens, mais le libellé de la mesure liée dit l'inverse.

**Les conditions chiffrées.** Seuil de taille et reste à charge sont confirmés. La durée
diverge : Mission Transition, portail d'État accessible, dit « 6 à 8 jours de prestation
répartis sur 15 à 18 mois » ; l'extrait attribué à Bpifrance dit « 7 jours homme
d'intervention sur 10 mois », et cette page est inaccessible. Le rédacteur a retenu un
chiffre non vérifiable contre le seul chiffre vérifiable, et l'affirme deux fois.

**Le type d'aide.** Le mécanisme est confirmé : l'entreprise ne reçoit pas de versement,
elle bénéficie d'une prestation dont elle paie 3 000 € HT après une subvention de 50 %.
`accompagnement` est justifié plutôt que `subvention`.

## Champs à corriger ou à sourcer, par ordre d'importance

1. Durée de la prestation, dans la description et dans l'info complémentaire : contredite
   par la seule source vérifiable. Rendre la page Bpifrance consultable par un extrait daté
   opposable, sinon aligner sur Mission Transition.
2. Source principale inaccessible : elle porte le taux, le plafond, l'éligibilité, le déroulé
   et le rattachement CEE. Tant qu'elle n'est pas vérifiable, la fiche repose sur une source
   unique et ne devrait pas passer en `publie`.
3. Lien vers ACT_AGR_002 : à requalifier ou à assortir d'une formulation qui ne laisse pas
   croire à un audit eau complet.
4. Part ADEME du financement et du taux : à sourcer sur une page ADEME.
5. Mention CEE PACTE Entreprises : à sourcer.
6. Deux ressources sur trois pointent vers des pages non exploitables au contrôle.
7. Hors champ factuel : `secteurs` vaut `["industrie_laitiere"]` alors que la source dit
   « Tous secteurs d'activité ». Selon la convention des seeds, une liste vide correspondrait
   mieux au dispositif réel.
