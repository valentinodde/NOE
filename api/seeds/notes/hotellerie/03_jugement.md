# Jugement des personas : hôtellerie

Étape 4 du skill `nouveau-secteur`. Agent `juge-personas`, contexte vierge.

## Premier passage (2026-09-24)

### Hôtel indépendant 2 étoiles, rien de formalisé (hotel_novice)
1. **Mesure indue** : Démarche collective (ACT_AGR_010). Un hôtel familial de 35 chambres, qui ne relève même pas son compteur, n'a pas sa place dans un PTGE ou une commission locale de l'eau.
2. **Mesure manquante** : aucune.
3. **Ordre** : non. Ratio litres par nuitée (relevé mensuel gratuit, point de départ), puis Équipements hydro-économes, puis Chasse aux fuites, l'audit ensuite. Le ratio est aujourd'hui 9e sur 10.

### Hôtel 4 étoiles équipé, en réflexion sur la suite (hotel_equipe)
1. **Mesure indue** : aucune.
2. **Mesure manquante** : aucune.
3. **Ordre** : oui dans l'ensemble ; Piscine économe pourrait remonter en tête (seul gros poste encore ouvert).

### Hôtel urbain sans piscine, jardin ni machines (hotel_urbain_chambres_seules)
1. **Mesure indue** : Démarche collective (ACT_AGR_010) : un hôtel de centre-ville sur réseau public ne siège pas dans une instance de gestion de la ressource. Plan de gestion de l'eau jugé faible aussi (un arrêté ne touche pas le cœur d'usage d'un hôtel sans jardin ni piscine).
2. **Mesure manquante** : aucune ; les filtres qui retirent piscine, extérieurs et lavage fonctionnent.
3. **Ordre** : non. Ratio litres par nuitée, Équipements hydro-économes, Chasse aux fuites.

### Hôtel écolabellisé, pratiques pilotées (hotel_avance)
1. **Mesure indue** : aucune. 2. **Mesure manquante** : aucune. 3. **Ordre** : sans objet, plan vide conforme.

### Réceptionniste qui répond pour la direction (hotel_ne_sait_pas)
1. **Mesure indue** : aucune. 2. **Mesure manquante** : aucune. 3. **Ordre** : oui, Audit eau puis Ratio, deux mesures d'entrée.

### Village de vacances saisonnier avec espace aquatique (village_vacances)
1. **Mesure indue** : aucune.
2. **Mesure manquante** : Compteur par usage (ACT_AGR_001) : espace aquatique, aspersion, blanchisserie, restauration, relevés occasionnels, profil le plus consommateur (439 litres par nuitée).
3. **Ordre** : non. Audit eau, Piscine économe, Équipements hydro-économes, Espaces verts sobres juste après ; la récupération d'eau de pluie passe derrière (cuve vide l'été en Méditerranée).

### Hôtel de station avec spa, tension hivernale (hotel_montagne_spa)
1. **Mesure indue** : aucune (démarche collective défendable en station).
2. **Mesure manquante** : Plan de gestion de l'eau (ACT_AGR_009) : le trou est justement « rien pour l'étiage hivernal », et la mesure sort parce que des consignes d'été existent.
3. **Ordre** : non. Piscine économe, Plan de gestion (étendu à l'hiver), Audit eau.

### Vue d'ensemble
- Démarche collective (49 %) sort dès qu'on ne participe à rien, quels que soient la taille et le niveau : trop souvent pour un secteur de petits établissements sur réseau public.
- Audit eau (80 %) frôle le « toujours » ; ses ressources affichées (chambre d'agriculture, FranceAgriMer) paraîtront hors sujet à un hôtelier.
- Ratio litres par nuitée finit toujours en fin de plan alors que c'est la première marche gratuite.
- Niveaux crédibles sur profils aléatoires ; mais le réceptionniste qui ne sait presque rien (33 %, intermédiaire) passe devant l'hôtel urbain qui répond honnêtement (30 %, novice).
- Le concernement reprend presque exactement la maturité chez tous les personas.

VERDICT : à revoir, 4 personas avec une mesure indue ou manquante.

## Suites données au premier passage

| Remarque | Décision |
|---|---|
| Démarche collective indue (novice, urbain) | **Corrigé** : `f_hors_collectif` ne vise plus que `informe` (connaît une démarche sans y participer). « Non » ne déclenche plus rien. |
| Ratio par nuitée en fin de plan | **Corrigé** : `ACT_HOT_007` passe de impact 1 à 2, par cohérence avec la transversale compteur par usage (impact 2), dont le mécanisme est le même (détecter dérives et fuites). |
| Compteur par usage manquant (village) | **Corrigé** : `f_sans_sous_compteur` vise `releve_occasionnel` et `ratio_general`. `facture` ne reçoit que le ratio, pour que le persona « je ne sais pas » reste à deux mesures. |
| Plan de gestion manquant (montagne) | **Corrigé** : `f_restrictions_non_anticipees` vise aussi `consignes` (consignes informelles, à formaliser en plan écrit couvrant toutes les saisons). |
| Plan de gestion faible pour l'hôtel urbain | **Maintenu** : le persona n'a jamais regardé les restrictions ; le plan couvre aussi le nettoyage des extérieurs et la communication client en crise. |
| Piscine économe trop bas pour le village | **Désaccord documenté** : impact 2 selon la grille (la piscine n'est pas le premier poste d'un hôtel). Le tri ne peut pas dépendre du profil. |
| Eau de pluie devant les espaces verts (village) | **Désaccord documenté** : tri par horizon à score égal (court terme avant moyen terme). |
| Ressources agricoles de l'audit | **Demande d'évolution** notée dans `00_perimetre.md` : neutraliser les ressources de `ACT_AGR_002` (seeds publiés). |
| Réceptionniste mieux noté que l'hôtel urbain | **Limite du moteur** : le score porte sur les questions répondues. Hors du périmètre de ce référentiel. |
| Concernement égal à la maturité | **Noté** : les options divergentes existent (envisage, partiel, refus non suivi, informé) ; les personas ont choisi des réponses franches. |

## Second passage (2026-09-24)

- **hotel_novice** : aucune mesure indue ni manquante ; ordre validé (Équipements hydro-économes, Ratio litres par nuitée, Audit eau).
- **hotel_equipe** : aucune ; ordre validé.
- **hotel_urbain_chambres_seules** : **Compteur par usage (ACT_AGR_001) indu** : ni piscine, ni jardin, ni restaurant, ni blanchisserie, donc aucun usage à isoler. Ordre souhaité : Ratio, Équipements hydro-économes, Chasse aux fuites.
- **hotel_avance** : plan vide, cohérent.
- **hotel_ne_sait_pas** : Ratio puis Audit, les deux bonnes mesures d'entrée.
- **village_vacances** : aucune mesure indue ni manquante ; ordre contesté (Piscine économe 7e, Espaces verts sobres 9e alors qu'ils dominent le profil).
- **hotel_montagne_spa** : aucune en tête de plan ; Démarche collective absente alors que l'axe « collectif » est affiché prioritaire.

Vue d'ensemble du juge : audit (80 %) et plan de gestion (68 %) fréquents mais défendables ; axe « collectif » affiché sans mesure en face pour trois personas ; mesures des gros postes secondaires classées derrière les mesures de chambre ; 8 % de novices jugé peu crédible pour un secteur dont la moitié des établissements n'a aucun salarié ; réceptionniste mieux notée que l'hôtel urbain.

VERDICT : à revoir, 1 persona (hotel_urbain_chambres_seules).

## Suites données au second passage, et désaccords documentés

| Remarque | Décision |
|---|---|
| Axe « collectif » sans mesure en face | **Corrigé** : l'option `non` de hot_q10 ne porte plus le topic `collectif`, qui ne remonte plus que pour `informe`, seule option qui déclenche la mesure. Simulation rejouée : zéro alerte. |
| Compteur par usage indu pour l'hôtel urbain | **Désaccord documenté.** Le retirer suppose un filtre « ni machine, ni piscine, ni jardin », soit une conjonction de trois réponses, que le moteur de filtres n'exprime pas (un filtre porte sur une question ou une classe). Une question d'inventaire à choix multiple l'aurait permis mais a été écartée (voir `02_discrimination.md`, principe 2). Le compteur reste défendable sur la production d'eau chaude, qui isole la part douches et lavabos du reste (nettoyage, petit-déjeuner). À reprendre si le moteur accepte un jour des filtres composés. |
| Piscine et espaces verts classés loin pour le village | **Désaccord maintenu** : le tri impact × facilité est global et ne dépend pas du profil ; la piscine n'est pas le premier poste d'un hôtel (grille : impact 2). |
| 8 % de novices peu crédible | **Maintenu, déjà justifié** dans `02_discrimination.md` : les options « sans objet » à 2 sont voulues. Les profils aléatoires tirent les options uniformément et ne représentent pas la population réelle ; le persona novice est bien novice. |
| Réceptionniste mieux notée que l'hôtel urbain | **Limite du moteur**, déjà notée au premier passage. |

## Décision au point d'arrêt de l'étape 4 (2026-09-24)

Le désaccord sur le compteur par usage de l'hôtel urbain a été tranché par le propriétaire :
**ajout d'une question d'inventaire** (hot_q01, choix multiple, classe `usage_eau`) et d'un
filtre `f_chambres_seules` qui retire ACT_AGR_001 aux établissements qui n'ont que des
chambres. Les questions suivantes sont renumérotées de hot_q02 à hot_q11 (rien n'était
publié). Simulation rejouée : zéro alerte ; l'hôtel urbain reçoit désormais Équipements
hydro-économes, Ratio, Audit, Fuites, Linge à la demande, Plan de gestion. Pas de troisième
passage du juge (deux au plus, selon le skill).
