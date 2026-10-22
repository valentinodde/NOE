# Jugement des personas : élevage d'herbivores

Étape 4 du skill `nouveau-secteur`, agent `juge-personas`. Date : 2026-10-15.

## Passage 1

Message final du juge, reproduit tel quel.

Quatre personas sur neuf ont un problème. Deux sont nets : l'audit eau proposé aux équidés en plein air et l'eau de la laiterie proposée au chevrier sans prérefroidisseur. Deux sont plus discutables : le sous-comptage proposé à l'allaitant, et le sous-comptage absent pour l'ICPE.

### laitier_novice (Élevage laitier de 60 vaches, rien de formalisé)

1. **Mesure indue** : aucune.
2. **Mesure manquante** : aucune. La démarche collective est absente, mais ne pas la proposer à un novice se défend.
3. **Ordre** : non. Pour un novice, la connaissance doit venir avant le premier geste technique, d'autant que le vieux puits doit légalement avoir un compteur. Ordre proposé : Sous-comptage par usage, Audit eau, Lavage de la traite.

### laitier_robot_equipe (Élevage laitier robotisé équipé)

1. **Mesure indue** : aucune. L'eau de pluie est pertinente, l'élevage dépendant d'un forage unique, et l'abreuvement au pâturage se justifie par les génisses abreuvées à la tonne.
2. **Mesure manquante** : aucune. Le plan sécheresse aurait sa place, l'éleveur n'ayant qu'un forage, sans plan écrit ni marge de fourrage, mais pas en tête du plan.
3. **Ordre** : oui (Audit eau, Récupération d'eau de pluie, Abreuvement au pâturage). Réserve : le système fourrager, qui est son vrai point faible (stock sans marge), arrive en dernier.

### allaitant_sans_traite (Naisseur allaitant de 80 charolaises)

1. **Mesure indue** : Sous-comptage par usage. Un naisseur n'a qu'un seul poste compté, l'abreuvoir du bâtiment. Le reste de l'eau vient du ruisseau et des sources. Sous-compter « par usage » n'a pas d'objet : relever régulièrement le compteur et le lire la nuit suffit, et l'audit couvre déjà le besoin de connaissance.
2. **Mesure manquante** : aucune. Aucune mesure de traite n'apparaît, le retrait fonctionne.
3. **Ordre** : non. Son risque, ce sont les sources qui tarissent et les bêtes qui boivent au ruisseau. Ordre proposé : Abreuvement au pâturage, Plan sécheresse, Berges protégées. L'audit vient ensuite.

### laitier_avance (GAEC laitier engagé, tout en place)

1. **Mesure indue** : aucune (plan vide).
2. **Mesure manquante** : aucune.
3. **Ordre** : sans objet. Le plan vide est conforme à ce qu'on attend d'un élevage avancé.

### ne_sait_pas (Conjointe qui répond pour l'exploitant)

1. **Mesure indue** : aucune.
2. **Mesure manquante** : aucune.
3. **Ordre** : oui. Deux mesures d'entrée (Sous-comptage par usage, Audit eau), comme attendu.

### equides_plein_air (Chevaux de selle en plein air)

1. **Mesure indue** : Audit eau. L'élevage n'a ni bâtiment, ni réseau, ni compteur, et les chevaux boivent au ruisseau. Un audit « usage par usage » avec schéma du réseau et recherche de fuites n'a rien à examiner. Il ressort pourtant en tête du plan.
2. **Mesure manquante** : aucune.
3. **Ordre** : non. Ordre proposé : Abreuvement au pâturage, Berges protégées (les chevaux entrent dans le cours d'eau), Plan sécheresse. Le système fourrager vient ensuite.

### engraisseur_tout_reseau (400 jeunes bovins, tout réseau)

1. **Mesure indue** : aucune. Le système fourrager ne convient qu'en partie, puisqu'il n'y a pas de pâturage, mais le stock de sécurité et le sorgho à la place du maïs le concernent bien.
2. **Mesure manquante** : aucune.
3. **Ordre** : non. Le plan sécheresse arrive en dernier, alors que 400 bovins dépendent entièrement du réseau et qu'il n'existe aucune solution de secours en cas de coupure. Ordre proposé : Audit eau, Récupération d'eau de pluie (diversification), Plan sécheresse. Les abreuvoirs viennent ensuite.

### laitier_icpe_conforme (250 vaches, enregistrement ICPE, ZRE)

1. **Mesure indue** : aucune. Ni eaux blanches, ni berges, ni démarche collective, ni plan sécheresse : le plan ne lui propose rien de ce qu'il fait déjà.
2. **Mesure manquante** : Sous-comptage par usage. Un élevage de 250 vaches en zone de répartition des eaux, avec un seul compteur sur le forage et un lavage contrôlé une fois par an, devrait séparer l'abreuvement du bloc traite pour suivre ses gains.
3. **Ordre** : à ajuster. Avec 250 vaches, l'eau du prérefroidisseur envoyée à l'égout représente le plus gros gisement (plusieurs milliers de m³ par an). Ordre proposé : Lavage de la traite, Eau de la laiterie réutilisée, Sous-comptage par usage.

### chevrier_fromager (80 chèvres, fromagerie fermière)

1. **Mesure indue** : Eau de la laiterie réutilisée. La description précise qu'il n'a pas de prérefroidisseur, or l'essentiel de la mesure repose sur la récupération de l'eau du prérefroidisseur. Pour une petite salle de traite caprine, les derniers rinçages ne justifient pas la mesure à eux seuls.
2. **Mesure manquante** : aucune dans la bibliothèque. Le poste fromagerie n'est couvert par aucune mesure. Dans ce plan, c'est l'audit qui en tient lieu.
3. **Ordre** : non. Les eaux de lavage partent au fossé, c'est-à-dire un rejet direct au milieu, mais les Eaux blanches et vertes arrivent en dernier. Ordre proposé : Audit eau (qui couvre la fromagerie), Eaux blanches et vertes, Lavage de la traite.

### Vue d'ensemble

- **Audit eau sort trop souvent** (76 %). Il est proposé même à des élevages sans aucun réseau (équidés en plein air).
- **Système fourrager et plan sécheresse arrivent presque toujours en fin de plan.** Pourtant, le profil eau désigne la sécheresse fourragère et le tarissement des points d'eau comme le premier risque du secteur.
- **Fréquences des autres mesures** : aucune n'est toujours ni jamais proposée. Berges (25 %) et eaux blanches (27 %) ont des fréquences cohérentes avec la part d'élevages concernés.
- **Les plans du novice laitier et du chevrier sont identiques, mesure pour mesure.** Le questionnaire distingue mal un laitier bovin équipé d'un prérefroidisseur d'une petite structure caprine fromagère.
- **Répartition des niveaux** (14 % novice, 75 % intermédiaire, 12 % avancé) : crédible sur des réponses aléatoires. Sur le terrain, on attendrait davantage de novices, la plupart des élevages n'ayant qu'un compteur général et aucun diagnostic.

VERDICT : à revoir (4 personas avec une mesure indue ou manquante : allaitant_sans_traite, equides_plein_air, laitier_icpe_conforme, chevrier_fromager)

## Corrections entre les deux passages

Voir `02_discrimination.md`, section « Corrections après le passage 1 du juge » : sous-comptage
réservé aux élevages qui traient et ajouté au compteur unique relevé chaque mois, ni audit ni
sous-comptage sans bâtiment, eau de la laiterie seulement si le prérefroidisseur existe.

## Passage 2

Message final du juge, reproduit tel quel. Le message de lancement précisait que le classement
suit une règle fixe (impact × facilité, puis horizon) commune à tous les secteurs.

Aucun persona n'a de mesure indue ou manquante. Il y a des problèmes d'ordre chez cinq personas. Ils viennent tous de la règle de classement (impact × facilité, puis horizon).

### laitier_novice
1. **Mesure indue** : aucune.
2. **Mesure manquante** : aucune. La démarche collective est retirée parce que l'exploitant est novice, ce qui est cohérent.
3. **Ordre** : non. Ce persona doit commencer par les mesures de connaissance. Par ailleurs, l'eau du prérefroidisseur part à l'égout, ce qui en fait le plus gros gisement de l'exploitation, et elle n'arrive qu'en 5e position. Je propose : Audit eau, Lavage de la traite, Eau de la laiterie réutilisée.

### laitier_robot_equipe
1. **Mesure indue** : aucune. L'abreuvement au pâturage se justifie par les génisses abreuvées à la tonne.
2. **Mesure manquante** : aucune. Le plan sécheresse aurait pu figurer (forage seul, pas de plan écrit), mais pas en tête.
3. **Ordre** : acceptable. Le diagnostic a plus de cinq ans, il est logique de le refaire d'abord. L'eau de pluie vient ensuite, comme seconde ressource à côté du forage.

### allaitant_sans_traite
1. **Mesure indue** : aucune.
2. **Mesure manquante** : aucune.
3. **Ordre** : non. Le risque principal de cet élevage est au pré : sources qui tarissent et vaches qui boivent dans le ruisseau. Un audit « usage par usage » a peu de prise quand l'abreuvement est presque le seul poste, et les abreuvoirs du bâtiment passent après. Je propose : Abreuvement au pâturage, Plan sécheresse, Berges protégées.

### laitier_avance
1. **Mesure indue** : aucune (plan vide).
2. **Mesure manquante** : aucune. Un plan vide est conforme à l'attendu (zéro à trois mesures).
3. **Ordre** : sans objet.

### ne_sait_pas
1. **Mesure indue** : aucune.
2. **Mesure manquante** : aucune. Deux mesures d'entrée, c'est l'attendu.
3. **Ordre** : acceptable. Mettre l'audit avant le sous-comptage serait un peu plus naturel, mais l'écart est sans conséquence.

### equides_plein_air
1. **Mesure indue** : aucune. Sans bâtiment ni compteur, l'absence d'audit, de sous-comptage et d'eau de pluie est juste.
2. **Mesure manquante** : aucune.
3. **Ordre** : à ajuster. Les berges vont de pair avec l'abreuvement au pré, puisque les juments boivent au ruisseau. Le plan sécheresse, peu coûteux, comprend déjà le bilan fourrager. Il vaut mieux commencer par ces mesures que par la refonte du système fourrager, qui est à moyen terme. Je propose : Abreuvement au pâturage, Berges protégées, Plan sécheresse.

### engraisseur_tout_reseau
1. **Mesure indue** : aucune. Le système fourrager se défend malgré l'absence de pâturage (stocks sans marge, sorgho à la place du maïs).
2. **Mesure manquante** : aucune. L'eau de pluie fait office de diversification de la ressource.
3. **Ordre** : non. L'éleveur relève déjà son compteur et vérifie la nuit, donc l'audit n'est pas le premier geste. Il sait aussi qu'il n'a aucun secours en cas de coupure, et le plan sécheresse est relégué en dernière position. Je propose : Abreuvoirs entretenus, Récupération d'eau de pluie, Plan sécheresse.

### laitier_icpe_conforme
1. **Mesure indue** : aucune. Les eaux blanches, l'audit et la démarche collective, déjà couverts, sont bien absents.
2. **Mesure manquante** : aucune.
3. **Ordre** : non. Avec 250 vaches, le prérefroidisseur envoie à l'égout de l'ordre de 7 à 15 m³ d'eau propre par jour, en zone de répartition des eaux. C'est la première mesure à proposer, alors qu'elle est 4e. Je propose : Eau de la laiterie réutilisée, Lavage de la traite, Sous-comptage par usage.

### chevrier_fromager
1. **Mesure indue** : aucune.
2. **Mesure manquante** : aucune. L'eau de la laiterie réutilisée est absente, ce qui est juste puisqu'il n'y a pas de prérefroidisseur.
3. **Ordre** : non. Les eaux de lavage partent au fossé, c'est un rejet direct au milieu, et un conseiller le traite d'emblée. Or les eaux blanches et vertes arrivent en 9e et dernière position. Je propose : Eaux blanches et vertes, Lavage de la traite, Audit eau.

### Vue d'ensemble
- Fréquences : aucune mesure ne sort toujours ou jamais (de 16 % à 59 %). Les 16 % de « Eau de la laiterie réutilisée » s'expliquent : il faut une traite et un prérefroidisseur dont l'eau est perdue.
- Ordre : les deux mesures de rejets (berges, eaux blanches) et la réutilisation du prérefroidisseur finissent toujours en bas du plan, même quand la situation en fait l'urgence (rejet au fossé, animaux dans le ruisseau, eau du prérefroidisseur à l'égout).
- Formulation : un éleveur lira dans les fiches transversales Sous-comptage et Eau de pluie des usages industriels (cuisine, blanchisserie, chasses d'eau), mais pas l'abreuvement.
- Niveaux : sur les profils aléatoires, la répartition est de 14 % novice, 75 % intermédiaire et 12 % avancé. Elle est plausible, mais la population réelle d'éleveurs serait sans doute plus novice. Chez les personas (cinq novices, trois intermédiaires, un avancé), elle est crédible.

VERDICT : acceptable, 0 persona avec une mesure indue ou manquante.

## Suite donnée

Deux passages atteints (limite du skill). Les remarques d'ordre restantes relèvent de la règle
de tri commune, documentées dans `02_discrimination.md` (« Désaccords sur l'ordre ») et
reportées à la revue. La remarque de formulation rejoint la demande d'évolution
d'ACT_AGR_006 (`00_perimetre.md`, section 6) et s'étend à ACT_AGR_001.
