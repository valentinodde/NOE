# Modèle de fiche aide

Ce document montre ce qu'est une bonne fiche de dispositif d'aide et comment elle se sourçe. Le schéma et les vocabulaires sont dans `api/referentiel_verif.py`.

Les taux, plafonds et dates de l'exemple sont **illustratifs** : ils montrent la forme. Un chiffre qu'on n'a pas lu sur la page du financeur ne s'écrit pas.

## Ce qui fait une bonne fiche

1. **Un dispositif précis, pas une famille.** « Aide à l'investissement des agences de l'eau » n'est pas une aide : chaque agence a son programme, ses taux et ses règles. La fiche porte sur un dispositif nommé, d'un financeur nommé, avec sa page de référence. Un dispositif décliné par bassin donne une fiche par agence, rattachée via `agences`.
2. **Le rattachement territorial est celui du financeur.** Agence de l'eau : `agences`, `departements: []`. Région : la liste de ses départements. Dispositif national : les deux listes vides. Les deux filtres se cumulent.
3. **`taux` et `plafond` sont des textes courts et honnêtes.** « 40 % des dépenses éligibles », « 30 000 € par exploitation », « Variable selon le programme ». Si la page donne une fourchette, on donne la fourchette. Si elle ne dit rien, `null`.
4. **`eligibilite` dit qui peut demander, en une ou deux phrases**, en reprenant les critères de la page (taille, statut, zone, engagement). Ce n'est pas le lieu de la démarche.
5. **Les infos complémentaires portent la démarche et les pièges.** Un `avertissement` pour ce qui fait perdre l'aide (travaux commencés avant dépôt, cumul interdit), une `info` pour la démarche (guichet, calendrier des appels à projets, pièces), une `ressource` vers la page officielle et vers le formulaire s'il existe.
6. **Le lien vers les mesures est explicite.** Une aide est liée à une mesure quand ses dépenses éligibles couvrent cette mesure. Une aide « transition écologique » très large se lie aux mesures qu'elle cite dans ses exemples de dépenses, pas à toutes.
7. **Chaque chiffre a sa source**, avec l'extrait où on l'a lu, et la date, parce que les programmes changent chaque année.

## Exemple commenté

```json
{
  "id": "AIDE_AGR_011",
  "nom": "Aide aux économies d'eau en irrigation (programme Loire-Bretagne)",
  "financeur": "Agence de l'eau Loire-Bretagne",
  "logo_url": null,
  "type": "subvention",
  "taux": "Jusqu'à 50 % des dépenses éligibles",
  "plafond": "Selon le projet, dans la limite du plafond de dépenses du programme",
  "description": "Subvention aux exploitations qui remplacent un matériel d'irrigation par un système plus économe ou s'équipent pour piloter les apports : goutte-à-goutte, aspersion basse pression, sondes et outils d'aide à la décision. L'aide s'inscrit dans les projets de territoire pour la gestion de l'eau du bassin.",
  "eligibilite": "Exploitations agricoles du bassin Loire-Bretagne situées dans un territoire couvert par un PTGE ou une démarche collective reconnue par l'agence. Dossier porté individuellement ou par une structure collective.",
  "categories": ["ameliorer_efficacite_hydrique"],
  "secteurs": ["agriculture"],
  "departements": [],
  "agences": ["AELB"],
  "mesures": ["ACT_AGR_003", "ACT_AGR_004"],
  "infos_complementaires": [
    {
      "type": "avertissement",
      "texte": "Aucune dépense ne doit être engagée avant l'accusé de réception du dossier par l'agence : un devis signé avant cette date rend le projet inéligible."
    },
    {
      "type": "info",
      "texte": "Le dossier se dépose sur le portail de l'agence, en général dans le cadre d'un appel à projets annuel relayé par la chambre d'agriculture ou la structure collective du territoire."
    },
    {
      "type": "ressource",
      "texte": "Page du dispositif sur le site de l'agence",
      "lien": "https://aides-redevances.eau-loire-bretagne.fr/home/aides/economies-deau-en-agriculture.html"
    }
  ],
  "statut": "brouillon",
  "sources": [
    {
      "champ": "taux, eligibilite, description",
      "url": "https://aides-redevances.eau-loire-bretagne.fr/home/aides/economies-deau-en-agriculture.html",
      "date": "2026-09-22",
      "extrait": "Taux d'aide jusqu'à 50 % pour les investissements d'économie d'eau en irrigation dans les territoires engagés dans un PTGE"
    }
  ],
  "date_maj": "2026-09-22"
}
```

Ce qu'il faut voir dans cet exemple :

- Le **nom** porte le programme et le financeur, pour que deux fiches d'agences différentes ne se confondent pas dans l'onglet.
- Le **plafond** ne donne pas un montant que la source ne donne pas. Écrire « 30 000 € » parce que c'est un ordre de grandeur courant serait une erreur de fond.
- Le **rattachement** est par agence, pas par département : un exploitant de la Vienne, à cheval sur deux bassins, verra la fiche selon son point exact, ce que le département ne sait pas faire.
- Les **mesures liées** sont le pilotage et l'irrigation localisée, parce que la description du dispositif cite ces dépenses. Pas la retenue, qui relève d'un autre dispositif.
- L'**avertissement** est celui qui fait réellement perdre l'aide. Il vaut plus que trois paragraphes de description.
- Le **logo** est celui du financeur, pris sur son site et déposé avec `api/outils_fiches.py logo <ID> <url>` (rangé sur Cloudinary sous l'id de la fiche). Il reste `null` ici parce que l'exemple n'en dépose pas, une vraie fiche en a un.

## Erreurs fréquentes

- Une fiche par grand financeur (« Agences de l'eau », « Région ») au lieu d'une fiche par dispositif.
- Un taux recopié d'une année précédente ou d'un autre bassin. Toujours la page du programme en cours, avec la date de lecture.
- Une aide nationale saisie avec des départements pour « faire local ».
- Une fiche liée à des mesures qu'elle ne finance pas parce qu'elles sont dans la même catégorie.
- Des dates de fenêtre d'appel à projets écrites dans la description : elles sont périmées dès l'année suivante. Les mettre dans une `info` datée, ou ne pas les mettre.
