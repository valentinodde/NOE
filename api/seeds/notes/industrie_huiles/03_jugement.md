# Jugement des personas : huiles et corps gras

Étape 4 du skill `nouveau-secteur`. Agent `juge-personas`, contexte vierge : il lit le
rapport de simulation, la bibliothèque et les personas, jamais la table de discrimination.

## Passage 1 (2026-09-27), sur `rapport_simulation_passage1.md`

**Verdict du juge : à revoir**, cinq personas avec une mesure indue.

Constats par persona, résumés fidèlement :

| Persona | Mesure indue | Mesure manquante | Ordre des trois premières |
|---|---|---|---|
| moulin_novice | ACT_AGR_006 (eau potable obligatoire au moulin) | aucune | non : margines d'abord (non-conformité), puis audit, nettoyage |
| raffinerie_equipee | ACT_AGR_006 (négligeable sur 250 000 m3) | aucune | non : audit, eaux réutilisées, plan de gestion |
| huilerie_pression_froid | ACT_AGR_001 (150 m3, un seul usage) | aucune | non : audit, plan de gestion, eau de pluie |
| site_avance | aucune | aucune | sans objet (plan vide défendable) |
| moulin_ne_sait_pas | aucune | aucune | acceptable |
| fondoir_contraint | ACT_AGR_006 (négligeable sur 120 000 m3) | aucune | non : audit, eaux réutilisées, plan de gestion |
| moulin_cooperatif_deux_phases | ACT_AGR_006 (eau potable obligatoire) | aucune | oui |
| margarinerie_tout_reseau | aucune (eau de pluie défendable, tout réseau) | aucune | non : audit, refroidissement en boucle, nettoyage |

Défauts d'ensemble relevés par le juge, par importance :
1. Le concernement reproduit la maturité au lieu de mesurer l'exposition.
2. L'eau de pluie est proposée aux moulins et aux gros préleveurs.
3. Ne rien savoir donnait une maturité plus haute (33 %) que répondre « rien en place » (12 à 21 %).
4. Les mesures réglementaires ou à fort impact (margines, refroidissement) sont classées trop bas.
5. Réutilisation et plan de gestion arrivent en fin de plan chez les ICPE de plus de 10 000 m3.
6. Compteur par usage proposé à une très petite structure.

### Réponses et corrections

| Défaut | Décision |
|---|---|
| 2. Eau de pluie | **Corrigé.** `f_pluie_moulin` (retrait pour `moulin_olive`) et `f_pluie_gros_site` (retrait à 100 000 m3 par an ou plus). |
| 6. Compteur, très petit site | **Corrigé.** `f_petit_site_compteur` : retrait sous 500 m3 par an. |
| 3. « Je ne sais pas » | **Corrigé.** Le volume annuel (`hui_q04`) vaut désormais 1 et non 2 : le persona passe de 33 % à 17 % (novice), en dessous des novices qui répondent. |
| 1. Concernement | **Désaccord documenté.** Le guide (5.4) définit le concernement comme ce que l'entreprise perçoit et veut, pas son exposition, qui est mesurée par ailleurs dans l'application (scores de vulnérabilité, historique des restrictions). Les deux scores sont égaux sauf sur les options du type « envisagé » ; c'est le comportement voulu et commun à tous les secteurs. |
| 4 et 5. Ordre | **Désaccord documenté, limite du moteur.** Le tri est `impact_eau × facilite` puis horizon, identique pour toutes les entreprises (`actionPanEngine.js`) : il met les gestes rapides en tête par construction. Remonter les margines ou le refroidissement demanderait de changer des notes validées à l'étape 3 contre la grille du guide (4.2), ce qui fausserait le tri de tous les autres profils. Un bonus de priorité pour les mesures de mise en conformité serait une évolution du moteur, signalée au relecteur. |

Effet sur la simulation (graine 1) : zéro alerte, médiane 3 mesures, novice 19 %,
intermédiaire 77 %, avancé 5 %. Un plan vide sur 200 (1 %) : un profil incohérent de
trituration à 139 m3 par an, bien équipé partout, dont le compteur et la réutilisation
sont écartés par les seuils de volume. Jugé acceptable.

## Passage 2 (2026-09-27), après corrections

**Verdict du juge : à revoir**, une seule mesure indue (huilerie_pression_froid) ; l'ordre
des trois premières mesures ne convient pas pour quatre personas, « à cause du tri ».

| Persona | Mesure indue | Mesure manquante | Ordre |
|---|---|---|---|
| moulin_novice | aucune | aucune | non (tri) : margines, nettoyage, audit |
| raffinerie_equipee | aucune | aucune | pas tout à fait (tri) : audit, plan de gestion, nettoyage |
| huilerie_pression_froid | ACT_AGR_002 (audit externe plus cher que la facture sur 150 m3) | aucune | convient sans l'audit |
| site_avance | aucune | aucune | sans objet |
| moulin_ne_sait_pas | aucune | aucune | acceptable (audit avant compteur serait mieux, départage du tri) |
| fondoir_contraint | aucune | aucune | non (tri) : audit, eaux réutilisées, plan de gestion |
| moulin_cooperatif_deux_phases | aucune | aucune | oui |
| margarinerie_tout_reseau | aucune | aucune | non (tri) : audit, refroidissement, nettoyage |

Le juge note que « les filtres font correctement leur travail d'exclusion » et que « le
défaut principal est dans l'ordre ».

### Réponses

- **Audit sur un site de 150 m3 : corrigé** après le passage 2, sans troisième passage
  (le skill en limite le nombre à deux). `f_petit_site_audit` retire ACT_AGR_002 sous
  500 m3 par an. Pour qu'un petit site qui ne sait rien garde ses mesures d'entrée,
  `f_suivi_inconnu` et `f_audit_inconnu` passent en priorité 3, au-dessus des retraits
  de volume. Plan obtenu pour huilerie_pression_froid : eau de pluie, démarche
  collective, plan de gestion. Simulation : zéro alerte.
- **Ordre (quatre personas) : désaccord maintenu, à trancher par le relecteur.** Le tri
  `impact_eau × facilite` est global. Les leviers en cause sont notés selon la grille
  validée à l'étape 3 : ACT_HUI_002 refroidissement 3 × 1, ACT_HUI_006 margines 2 × 2,
  ACT_HUI_007 effluents 2 × 1, ACT_AGR_009 plan de gestion 1 × 2 (mesure transversale
  publiée, non modifiable ici). Deux voies possibles, hors de cette session : un bonus
  de tri pour les mesures de mise en conformité réglementaire (évolution du moteur,
  valable pour tous les secteurs), ou une révision des notes contre la grille du guide.
- **Décanteur deux phases à 3 %, avancé à 5 %, 1 % de plans vides** : écarts
  structurels, justifiés dans `02_discrimination.md`, section 4.
- Décision au point d'arrêt : questionnaire validé le 2026-09-27 ; désaccord sur le tri documenté pour la revue, pas de révision des notes.
