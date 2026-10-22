# Jugement des personas : hôpitaux et cliniques

Étape 4 du skill `nouveau-secteur`. Message final de l'agent `juge-personas`, recopié tel quel.

## Premier passage (2026-10-15)

Verdict : **à revoir** (3 personas avec une mesure indue ou manquante : hop_had, hop_gros_dialyseur, hop_contraint_reglementaire).

| Persona | Mesure indue | Mesure manquante | Ordre |
|---|---|---|---|
| hop_novice | aucune | aucune | acceptable ; audit avant le compteur, plan de gestion de l'eau à remonter dans les cinq premières |
| hop_equipe | aucune | aucune | non : Audit, Plan de gestion de l'eau, Rejets d'osmose, puis démarche collective |
| hop_had | Démarche collective (une structure de bureaux n'a pas de poids dans un PTGE ou une CLE) | aucune | non : plan de gestion seul |
| hop_avance | aucune | aucune | sans objet (plan vide attendu) |
| hop_ne_sait_pas | aucune | aucune | acceptable ; audit avant compteur |
| hop_psychiatrie_pavillonnaire | aucune | aucune | non : Recherche de fuites, Bras morts et purges, Audit |
| hop_gros_dialyseur | aucune (eau de pluie mal placée) | Compteur par usage (consommation par séance inconnue) | non : Compteur, Traitement d'eau de dialyse, Rejets d'osmose, Audit, eau de pluie en dernier |
| hop_contraint_reglementaire | Effluents hospitaliers (caractériser et formaliser la convention, ce qu'elle fait déjà par obligation) | aucune | acceptable ; Audit, Fuites, Compteur |
| hop_incoherent | aucune | aucune | acceptable |

Vue d'ensemble du juge :
- La démarche collective sort trop souvent (46 %), jusque dans le plan de l'HAD.
- Le plan de gestion de l'eau finit toujours en queue de plan ; son libellé transversal (arrêtés sécheresse) parle mal du besoin hospitalier (protocole de rupture du plan blanc).
- Les mesures à faible facilité (dialyse, rejets d'osmose) passent derrière l'eau de pluie même quand elles visent le premier poste.
- Aucune mesure jamais proposée, répartition des niveaux crédible, plans vides à surveiller.

Corrections apportées après ce passage : voir `02_discrimination.md`, section « Corrections après le premier passage du juge ».

## Second passage (2026-10-15)

Verdict : **acceptable** (1 persona avec une mesure indue ou manquante : hop_incoherent).

| Persona | Mesure indue | Mesure manquante | Ordre |
|---|---|---|---|
| hop_novice | aucune | aucune | oui, mais plan de gestion de l'eau à placer juste après l'audit |
| hop_equipe | aucune | aucune | non : Audit, Plan de gestion de l'eau, Rejets d'osmose |
| hop_had | aucune | aucune | oui, une seule mesure, la bonne |
| hop_avance | aucune | aucune | sans objet, plan vide cohérent |
| hop_ne_sait_pas | aucune | aucune | oui |
| hop_psychiatrie_pavillonnaire | aucune | aucune dans la bibliothèque (espaces verts serait un réflexe sur 20 hectares, absent de la bibliothèque) | non : Fuites, Bras morts et purges, Compteur |
| hop_gros_dialyseur | aucune | aucune | non : Compteur, Traitement d'eau de dialyse, Audit |
| hop_contraint_reglementaire | aucune (la réduction à la source va au-delà de l'obligation) | aucune | oui |
| hop_incoherent | Compteur par usage (déclare une télérelève) | aucune | non : Fuites, Dialyse, Robinetterie |

Vue d'ensemble du juge :
- Aucune mesure toujours ou jamais proposée. L'eau de pluie sort dans 5 plans de personas sur 9 (presque tous les hôpitaux sont « tout réseau »), souvent devant des leviers propres au secteur.
- Le plan de gestion de l'eau (continuité) finit toujours en queue de plan.
- 41 % des profils aléatoires ne voient pas les questions de bâtiment, ce qui surreprésente l'HAD et explique l'essentiel des 18 % de plans vides.
- Répartition des niveaux crédible.

## Désaccords documentés (deux passages atteints)

1. **hop_incoherent, compteur par usage.** Il vient de `f_dialyse_ancienne` (« eau par séance inconnue »), que le persona déclare en même temps qu'une télérelève. La contradiction est dans les réponses, et c'est ce que ce persona teste : le plan reste cohérent avec chaque réponse prise isolément. Pas de correction.
2. **Ordre des plans.** Toutes les remarques d'ordre tiennent au tri impact × facilité, non réglable par secteur : plan de gestion de l'eau (1 × 2) en queue, dialyse (3 × 1) derrière l'eau de pluie (2 × 2). Proposition au relecteur : noter ACT_AGR_009 à 2 en impact (« sécurisation d'une source » dans la grille du guide), ce qui la ferait remonter dans tous les secteurs. Hors périmètre de ce staging.
3. **Espaces verts.** Le levier L12 du profil a été écarté à l'étape 2 pour tenir douze mesures. Le juge le relève pour la psychiatrie pavillonnaire. À reconsidérer si une mesure transversale d'adaptation des espaces verts est créée (l'hôtellerie a ACT_HOT_006, sectorielle).
