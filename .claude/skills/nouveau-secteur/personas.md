# Personas de calibrage

Les personas sont des profils types dont on connaît à l'avance le plan d'action raisonnable. Ils servent deux fois : dans la simulation (`scripts/simuler_referentiel.mjs`), qui affiche le plan obtenu par chacun, et dans le jugement (agent `juge-personas`), qui dit si ce plan est celui qu'un conseiller aurait donné.

Pour chaque secteur, instancier au moins les cinq premiers archétypes ci-dessous dans `api/seeds/personas/<secteur>.json`. L'exemple complet est `api/seeds/personas/hotellerie.json`.

## Format

```json
[
  {
    "id": "slug_court",
    "nom": "Libellé affiché dans le rapport",
    "description": "Deux ou trois phrases : l'entreprise, ses usages de l'eau, où elle en est. Ce texte est lu par le juge, il doit suffire à deviner le bon plan.",
    "answers": {
      "<question_id>": "<option_id>",
      "<multi_choice_id>": ["<option_id>", "<option_id>"],
      "<numeric_id>": "12000",
      "<question_sautee>": "__skip__"
    }
  }
]
```

Une réponse `"__skip__"` vaut « je ne sais pas ». Une question absente de `answers` est traitée comme non affichée.

## Archétypes

Les cinq obligatoires :

1. **Le novice concerné.** Fait l'usage principal du secteur avec les pratiques les plus courantes, n'a rien mesuré ni formalisé, mais répond à tout. Attendu : niveau novice, plan le plus fourni du jeu (sept à dix mesures), avec les mesures de connaissance en tête.
2. **L'équipé en réflexion.** A investi dans le geste technique principal (matériel efficace, pilotage) mais n'a ni audit récent ni plan formalisé ; concernement élevé. Attendu : intermédiaire, plan de quatre à six mesures sans les mesures d'équipement qu'il a déjà.
3. **Le non concerné par l'usage principal.** N'a pas l'usage qui structure le questionnaire (pas d'irrigation, pas de process humide, pas de refroidissement) mais reste une entreprise du secteur. Attendu : aucune mesure de cet usage dans le plan, ce qui teste les filtres `remove`. Le niveau peut être novice sans que ce soit un problème.
4. **L'avancé.** Répond au maximum partout. Attendu : niveau avancé, plan de zéro à trois mesures, uniquement collectives ou d'amélioration continue. S'il reçoit plus, un filtre ajoute sans condition de niveau.
5. **Le « je ne sais pas ».** Une personne qui répond pour le dirigeant, saute presque tout et ne connaît qu'un ou deux faits. Attendu : une ou deux mesures d'entrée (audit, comptage), jamais zéro, jamais un plan complet. Teste le traitement des non-réponses.

Selon le secteur, ajouter :

6. **Le gros consommateur.** Volume au-dessus du seuil du filtre numérique, sinon profil moyen. Teste le seuil et les mesures collectives ou de territoire.
7. **Le tout réseau.** Une seule source d'eau, le réseau public, et une dépendance forte. Teste les filtres de classe sur les sources et la mesure de diversification.
8. **Le contraint réglementaire.** Site classé, effluents, ou zone de répartition des eaux, déjà en conformité mais rien au-delà. Teste que le plan ne lui propose pas ce qu'il fait déjà par obligation.
9. **Le multi-sites ou saisonnier.** Activité concentrée sur une saison ou répartie entre plusieurs sites, usages difficiles à mesurer. Teste les questions de connaissance et de comptage.
10. **L'incohérent.** Réponses contradictoires (télérelève mais aucun compteur, capteurs connectés mais irrigation à vue). Le questionnaire ne doit pas planter ni produire un plan absurde ; sert aussi à repérer les questions qui se recoupent.

## Ce que le juge regarde

Pour chaque persona, le rapport de simulation donne le score, le niveau, les axes prioritaires et le plan ordonné. Le juge répond, persona par persona, à trois questions et rien d'autre :

- Ce plan contient-il une mesure qu'un conseiller n'aurait jamais proposée à cette entreprise ? Laquelle, et pourquoi.
- Manque-t-il une mesure de la bibliothèque qu'un conseiller aurait proposée en premier ? Laquelle.
- L'ordre des trois premières mesures est-il celui par lequel commencer ?

Un persona dont le plan est jugé absurde renvoie à la table de discrimination, pas au persona.
