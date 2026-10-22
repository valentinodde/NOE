# Verdict de contrôle : AIDE_LAI_002 (ADEME, installations de méthanisation)

Contrôle en contexte vierge, lecture seule. Date : 2026-09-22.

`SOURCES : 5 citées (4 URL distinctes), 4 accessibles`

`VERDICT : à corriger`

La fiche a été corrigée après ce contrôle : voir la note de correction en fin de document.

## Le défaut principal : une aide affichée là où elle n'existe pas

Le dispositif n'est pas proposé en Bretagne, en Grand Est ni en Provence-Alpes-Côte d'Azur
en 2026. Le rédacteur l'avait constaté et traité par un simple avertissement, en laissant
`departements` vide.

**C'est insuffisant.** Dans ce référentiel, une liste vide vaut national : la fiche remonte
telle quelle pour une fromagerie finistérienne, et l'avertissement n'arrive qu'après, dans
le corps de la fiche, une fois l'espoir donné. Or la Bretagne est la première région
laitière française.

## Une contradiction entre les deux sources sur le bénéficiaire

La page Aides-territoires 2026 liste comme bénéficiaires « Commune, Intercommunalité, Pays,
Département, Établissement public dont services de l'État, Entreprise publique locale »,
c'est-à-dire **aucune entreprise privée**. Mission Transition écologique annonce au contraire
« Tous secteurs d'activité » et « Toutes tailles », micro-entreprises comprises.

C'est décisif : si l'aide ne visait que les personnes publiques, cette fiche n'aurait rien à
faire dans un référentiel destiné à des laiteries.

Le champ `eligibilite` annonçait par ailleurs les collectivités comme bénéficiaires alors
qu'une source les exclut, « qui disposent d'un dispositif spécifique », et affirmait
l'exclusion des particuliers, qu'aucune source ne portait.

## Deux millésimes mélangés

Les montants retenus, 45 euros par mégawattheure PCS et 700 000 euros, viennent de la page
2026. Mais l'exclusion liée au crédit d'impôt et la liste des pièces du dossier viennent
d'une autre page, qui publie 40 euros et 600 000 euros, donc un millésime antérieur, sans
qu'aucune date n'y figure.

Le rédacteur a eu raison de ne pas reprendre ces montants, mais il en reprenait les règles
sans le signaler.

Même problème sur la cogénération : le seuil de 500 kilowatts électriques figure sur Mission
Transition, mais la liste 2026 ne mentionne que l'injection et les stations d'épuration
urbaines, et ne publie de forfait que pour l'injection. **Une fromagerie qui viserait une
cogénération n'a, dans les sources citées, aucun montant 2026.**

## Qui perçoit l'aide, question laissée ouverte

Le contrôleur a interrogé les deux pages spécifiquement sur le maître d'ouvrage, le
propriétaire de l'installation et le percepteur de l'aide : aucune ne dit quoi que ce soit.
L'avertissement du rédacteur reste donc une inférence, prudente mais non sourcée. Le point
compte : une fromagerie qui envoie son lactosérum vers une unité appartenant à un tiers ne
touche rien.

## Ce qui est confirmé

Le dispositif est bien ouvert, du 1er janvier au 31 décembre 2026. Le nom, le financeur, le
type, le taux de 45 euros par mégawattheure PCS, le plafond de 700 000 euros, l'obligation
d'étude de faisabilité préalable et la règle de non-commencement de l'opération sont exacts.

## Correction appliquée après ce contrôle

Le rédacteur a repris la fiche : `departements` porte désormais 81 codes, excluant
explicitement la Bretagne, le Grand Est et Provence-Alpes-Côte d'Azur, avec l'outre-mer dans
sa version la plus restrictive. La question du bénéficiaire a été tranchée en faveur des
entreprises privées, sur la base d'une source reproduisant textuellement la page du financeur
et concordant avec deux autres portails, la liste de personnes publiques d'Aides-territoires
étant analysée comme un artefact de cette plateforme destinée aux collectivités. La clôture
du 31 décembre 2026 est portée dans la description et dans un avertissement, l'inférence sur
le maître d'ouvrage est reformulée comme telle, et un avertissement dédié signale qu'aucun
montant 2026 n'existe pour la cogénération.

**Point à regarder à la revue** : la source retenue pour trancher la question du bénéficiaire
est un portail privé qui reproduit la page du financeur. C'était le seul moyen de citer cette
phrase sans passer par une URL en erreur 403. À valider ou à remplacer avant publication.
