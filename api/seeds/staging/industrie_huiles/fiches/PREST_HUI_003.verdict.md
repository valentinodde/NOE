# Verdict : PREST_HUI_003 (Biotechna), passage 1

Agent `controleur-fiche`, 2026-09-27. Sources : 6 citées, 5 accessibles (archive web.archive.org illisible par l'outil).

**VERDICT : à corriger**

Confirmés : nom, SIRET 32653268600051 actif, département 13, expertises (compostage de
boues, déchets verts, biodéchets ; broyage), adresse, capacités autorisées (arrêté
2025-248-PC). Absence de lien de mesure justifiée : rien ne dit que le site accepte
grignons ou margines.

À corriger ou à sourcer :
1. **`type` installateur : contredit.** Exploitant d'un site de traitement de déchets (NAF 38.21Z). Aucune valeur du vocabulaire fermé ne convient : décision humaine (nouveau type dans `referentiel_verif.py`) ou choix de la moins mauvaise valeur, justifié.
2. « Arrêt à venir des activités de compostage » : surinterprétation ; l'arrêté dit seulement « jusqu'à l'arrêt des activités de compostage ».
3. Essai 2007 à Salon : invérifiable par l'outil ; vérification humaine de l'archive, ou retrait.
4. Lien entre l'établissement fermé 32653268600036 (NAF 38.11Z, collecte) et la plateforme de 2007 : déduction.
5. Contact : page de la maison mère sans coordonnées.

**Utilité** : sans mesure ni catégorie, la fiche n'est jamais affichée (`solutionsMatching.js`). Recommandation du contrôleur : ne pas promouvoir, garder en note, sauf confirmation écrite que Biotechna accepte les grignons.

## Passage 2 (après correction), verdict final

**VERDICT : incomplet** (conservé pour la revue). Corrections du passage 1 faites (formule exacte de l'arrêté, établissement de 2011 non assimilé à la plateforme de 2007). Restent :
1. Type `installateur` inexact, marqué provisoire : décision humaine (nouveau type dans `referentiel_verif.py` ou moins mauvaise valeur).
2. La mention « type provisoire » est dans `description`, champ affiché à l'utilisateur : à retirer à la promotion.
3. Essai France Olive 2007 : invérifiable par l'outil (archive), vérification humaine ou retrait.
4. Contact : page de la maison mère sans coordonnées.
5. **Ni mesure ni catégorie : jamais affichée. Recommandation : ne pas promouvoir** sans confirmation écrite que Biotechna accepte les grignons ou margines.
