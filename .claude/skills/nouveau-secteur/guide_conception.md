# Guide de conception d'un référentiel sectoriel

Ce guide dit comment construire le questionnaire de maturité eau d'un secteur, sa bibliothèque de mesures et les filtres qui relient les deux. Il s'adresse à celui qui rédige (personne ou agent) et à celui qui relit. Le questionnaire agriculture (`api/seeds/questionnaire_agriculture.json`, `actions_agriculture.json`) est l'exemple de référence : en cas de doute sur une forme, faire comme lui.

Version 1, base de travail. Les seuils chiffrés sont des ordres de grandeur à ajuster après les premières sessions.

## 1. Principes

1. **Une question existe pour discriminer des mesures.** Avant d'écrire une question, on sait quelles mesures sa réponse ajoute ou retire du plan d'action. Une question qui ne change rien au plan ne sert qu'au score : c'est permis, mais rare et justifié.
2. **On construit dans cet ordre** : profil eau du secteur, périmètre NAF, mesures, questions, filtres, calibrage. Jamais les questions d'abord.
3. **Les sept catégories du plan d'action sont fixes** (`api/seeds/categories.json`). On n'en crée pas, on n'en renomme pas. Une catégorie peut rester vide pour un secteur si elle n'a pas de sens pour lui.
4. **Transversal avant sectoriel.** Une mesure qui vaut pour tous les secteurs (compter, auditer, planifier, agir collectivement) existe une fois avec `secteurs: []`. On ne la réécrit pas avec un vocabulaire sectoriel : on la réutilise telle quelle et on adapte la question qui la déclenche.
5. **Sobriété.** Huit à douze questions, six à douze mesures. Un questionnaire que l'on abandonne à la question 15 ne produit aucun plan d'action.
6. **Aucun fait sans source** dans le profil eau et dans les infos complémentaires des mesures. Le reste (barèmes, filtres, seuils) est un choix de conception, assumé et expliqué dans la description du filtre.
7. **Conventions d'écriture** : vouvoiement, pas de jargon sans explication entre parenthèses, pas de tirets longs ni demi-cadratins (virgule, deux-points ou parenthèses), accents corrects, pas de majuscules d'emphase.

## 2. Périmètre du secteur

- `sector_id` : un slug court en minuscules sans accent, stable dans le temps (`agriculture`, `industrie_agro`, `hotellerie`). Il sert de préfixe partout (`ACT_IAA_001`, `iaa_q01`).
- `sector_label` : le libellé affiché, au singulier, sans article (« Industries agroalimentaires »).
- `naf_codes` : la liste complète des codes NAF couverts, au format INSEE avec le point (`10.51C`). Un code ne peut appartenir qu'à un seul questionnaire.

**Regrouper ou séparer ?** Deux activités vont dans le même questionnaire si elles partagent les mêmes postes de consommation d'eau et les mêmes leviers. Une laiterie et une brasserie partagent le nettoyage en place, le refroidissement et les effluents chargés : même questionnaire. Une laiterie et une exploitation laitière ne partagent presque rien : deux questionnaires. Quand on hésite, on sépare, car fusionner plus tard est facile et scinder des réponses stockées ne l'est pas.

Lister explicitement les **codes limites** écartés et pourquoi, dans la note de périmètre.

Les libellés et les notes explicatives de chaque code sont dans `nomenclature_naf.md` (même dossier) et via `api/outils_fiches.py naf`. Juger un voisin sur ses notes (« comprend », « ne comprend pas ») plutôt que sur son seul libellé : deux libellés proches peuvent recouvrir des procédés très différents.

## 3. Profil eau du secteur

Une note de deux à quatre pages, `01_profil.md` dans le staging, qui répond dans l'ordre :

1. **Usages de l'eau** : à quoi sert l'eau dans ce secteur, du plus gros poste au plus petit (process, nettoyage, refroidissement, sanitaire, irrigation, abreuvement...). Ordres de grandeur quand ils existent.
2. **Sources d'approvisionnement** habituelles (réseau, forage, surface, pluie, recyclage) et leur part typique.
3. **Dépendances critiques** : ce qui s'arrête quand l'eau manque ou quand un arrêté sécheresse tombe.
4. **Risques et contraintes réglementaires** propres au secteur (ICPE, rejets, restrictions, normes sanitaires qui limitent la réutilisation).
5. **Leviers connus**, classés par catégorie du plan d'action, avec pour chacun l'ordre de grandeur d'économie quand une source le donne.
6. **Sources** : URL, organisme, année. Sources acceptées : ADEME, agences de l'eau, ministères, instituts techniques et centres techniques de branche, chambres consulaires, CCI, guides de fédérations professionnelles. Pas de site commercial d'équipementier pour un chiffre d'économie.

Chaque affirmation chiffrée porte sa source en fin de phrase. Une affirmation sans source est formulée au conditionnel ou retirée.

## 4. Bibliothèque de mesures

Un levier validé du profil devient une mesure. Format d'une mesure (voir `actions_hotellerie.json` pour un exemple complet) :

| Champ | Règle |
|---|---|
| `id` | `ACT_<SECT>_NNN`, préfixe de trois lettres majuscules propre au secteur, numéro à trois chiffres. Jamais réattribué. |
| `titre` | Verbe à l'infinitif, 40 à 80 caractères, dit ce que l'entreprise fait (« Convertir vers un système d'irrigation localisée »). |
| `titre_court` | Deux à quatre mots, sans verbe, pour les chips (« Irrigation localisée »). |
| `description` | Deux phrases. La première dit concrètement quoi faire, la seconde l'effet attendu et pour qui c'est pertinent. 200 à 350 caractères. |
| `categorie` | Une des sept catégories. Choisir selon le mécanisme de la mesure, pas selon son objectif : un compteur est « suivre » même s'il sert à économiser. |
| `secteurs` | `[]` si la mesure vaut pour tous, sinon la liste des `sector_id`. |
| `effort` | `capex`, `opex`, `humain`, chacun `faible`, `moyen` ou `important`. Grille en 4.2. |
| `impact_eau` | 1 à 3. Grille en 4.2. |
| `facilite` | 1 à 3. Grille en 4.2. Sert au tri, pas affiché. |
| `horizon` | `immediat` (moins de 3 mois), `court_terme` (moins d'un an), `moyen_terme` (au-delà). |
| `image` | URL d'une image libre de droits, paysage, sans texte. `null` si aucune. |
| `infos_complementaires` | Voir 4.3. |
| `statut`, `sources`, `date_maj` | `brouillon` tant que non validé. Les sources reprennent celles du profil qui justifient la mesure. |

### 4.1 Combien, lesquelles

- Six à douze mesures visibles par secteur, transversales comprises.
- Les mesures transversales candidates à la réutilisation, à vérifier dans `actions_*.json` avec `secteurs: []` : compteur par usage, audit eau, plan de gestion de l'eau et anticipation des restrictions, démarche collective de territoire, récupération d'eau de pluie. Si l'une manque encore en transversal, la créer transversale plutôt que sectorielle, et adapter les mesures agricoles existantes si besoin.
- Une mesure sectorielle décrit un geste que seul ce secteur fait (nettoyage en place optimisé, recyclage des eaux de rinçage, changement de variétés). Si l'on peut retirer le mot du secteur de la description sans la fausser, c'est une transversale.
- Chaque catégorie devrait avoir au moins une mesure, sauf raison écrite dans la note de périmètre (par exemple « rejets et qualité » pour un secteur sans effluent).

### 4.2 Grilles de notation

**Impact eau** (sur la consommation ou la dépendance de l'entreprise) :
- 1 : effet indirect ou marginal (connaissance, organisation, formation).
- 2 : effet mesurable sur un poste (moins de 20 % du poste, ou sécurisation d'une source).
- 3 : effet majeur sur le premier poste de consommation, ou changement de dépendance.

**Facilité** :
- 1 : investissement lourd, autorisation administrative, ou changement de modèle de production.
- 2 : investissement moyen ou réorganisation, sans autorisation.
- 3 : décision interne, mise en oeuvre en quelques semaines.

**Effort** : `capex` (investissement initial), `opex` (coût récurrent), `humain` (temps interne et compétences). `faible` : négligeable au regard du chiffre d'affaires d'une PME du secteur ; `important` : nécessite un financement ou un recrutement.

Le tri du plan d'action est `impact_eau × facilite`, puis horizon. Les mesures notées 3 et 3 sortent en tête : il ne doit y en avoir qu'une ou deux, sinon la grille ne discrimine plus.

### 4.3 Infos complémentaires

Liste d'objets `{type, texte, lien?, lien_label?}` :
- `avertissement` : ce qui peut bloquer ou coûter cher si on l'ignore (autorisation loi sur l'eau, norme sanitaire, dossier à déposer avant travaux). Une phrase, factuelle, sourcée.
- `info` : contexte utile qui ne tient pas dans la description (ordre de grandeur, prérequis, durée).
- `retour_experience` : un cas réel, nommé ou anonymisé, avec le résultat obtenu et sa source.
- `ressource` : un lien vers un guide, un outil ou un dispositif. `texte` est le libellé du lien.

Zéro à quatre entrées par mesure. Pas de ressource de type aide financière ici : les aides ont leur propre table et leur lien vers la mesure.

## 5. Questions

### 5.1 Structure du questionnaire

- Huit à douze questions, dans l'ordre des thèmes : **connaissance et mesure**, **pratiques** (le coeur sectoriel), **réutilisation et sources**, **gouvernance et anticipation**. Les thèmes sont déclarés dans `themes` et un thème vide est retiré.
- La première question est toujours facile et factuelle (compteur, sources d'eau). La dernière porte sur l'anticipation ou l'adaptation, ce qui ouvre sur le plan d'action.
- `order` est un entier continu à partir de 1. `id` suit `<sect>_qNN` ; les variantes d'une même question prennent une lettre (`agri_q01b`).

### 5.2 Types de question

| Type | Quand | Contraintes |
|---|---|---|
| `single_choice` | Le cas général : un niveau de pratique. | Trois ou quatre options, ordonnées de la moins mûre à la plus mûre. |
| `multi_choice` | Un inventaire (sources d'eau, usages présents). | Porte une `class` (ex. `source_eau`) pour que les filtres de type `class` puissent tester la présence d'une option. Scores additionnés et plafonnés à 3. |
| `numeric` | Un volume ou une part, quand un seuil déclenche une mesure. | Bloc `input` (unité, min, max, `integer_only`, placeholder réaliste) et `scoring.if_filled`. Pas d'options. |

### 5.3 Rédaction

- Texte de question : une phrase, 60 à 120 caractères, vouvoiement, qui se répond sans réfléchir plus de dix secondes. Ajouter « (plusieurs réponses possibles) » aux multi-choix.
- Options : 20 à 70 caractères, concrètes, sans jugement (« Non » plutôt que « Non, jamais pensé »). Une option « Je n'irrigue pas », « Sans objet » quand une partie du secteur n'est pas concernée : elle porte un score de maturité moyen (2), pas 0, car ne pas consommer n'est pas une faiblesse.
- `id` d'option : un mot ou deux en snake_case qui dit la réponse (`sans_releve`, `goutte_a_goutte`), jamais `a`, `b`, `c`. Les ids sont la clé des filtres et des réponses stockées : ne jamais les renommer après publication.

### 5.4 Barèmes

Par option, deux scores entiers de 0 à 3 :

**Maturité** (ce que l'entreprise fait) :
- 0 : rien, ou ne sait pas.
- 1 : quelque chose existe mais informel, irrégulier, ancien.
- 2 : pratique structurée et régulière.
- 3 : pratique pilotée, instrumentée ou formalisée, avec suivi.

**Concernement** (ce que l'entreprise perçoit et veut) :
- 0 : le sujet n'est pas regardé.
- 1 : conscience sans action.
- 2 : intention ou premiers pas.
- 3 : engagement.

Les deux scores sont souvent égaux ; ils divergent sur les réponses du type « on y a réfléchi mais pas encore fait » (maturité 0, concernement 2) et c'est précisément ce qui rend le concernement utile. Chaque question doit offrir au moins une option à 0 et une à 3 en maturité, sinon le niveau « avancé » devient inatteignable.

**Topics** : uniquement sur les options faibles (maturité 0 ou 1). Un topic nomme la faiblesse (`comptage`, `stockage`), pas la question. Le vocabulaire est `topics_labels`, avec un libellé affichable (« Comptage et mesure »). Six à dix topics par questionnaire. Ils deviennent les « axes prioritaires » de la Synthèse, triés par fréquence : deux questions qui partagent un topic le font remonter.

### 5.5 Conditions d'affichage

`condition` masque une question selon une réponse précédente (`{questionId, operator, value}`, opérateurs `eq`, `neq`, `in`, `nin`, combinables par `and` et `or`). À utiliser avec parcimonie : une question masquée ne compte pas dans le score, et les réponses sautées font perdre le fil. Une condition ne peut viser qu'une question d'ordre inférieur.

## 6. Filtres du plan d'action

On part de la **table de discrimination**, écrite avant les filtres, dans `02_discrimination.md` du staging :

| Question | Option(s) | Mesures ajoutées | Mesures retirées |
|---|---|---|---|
| iaa_q03 | `manuel`, `partiel` | ACT_IAA_004 | |
| iaa_q02 | `aucun_process` | | ACT_IAA_004, ACT_IAA_005 |

Chaque ligne devient un filtre. Format et règles :

- `id` : `f_<sujet>` en snake_case, unique. `description` : une phrase qui dit la règle en français (« Pas d'audit ou audit ancien : recommander le diagnostic »). C'est elle que lira le relecteur.
- `type: answer` pour une question, `class` pour un inventaire (opérateurs `includes`, `not_includes`, `all_of`), `numeric` pour un seuil (`gt`, `gte`, `lt`, `lte`, valeur justifiée dans la description), `maturity` pour le niveau global (`in` sur `novice`, `intermediaire`, `avance`).
- `effect: add` est le cas normal. `remove` sert à l'exclusion structurelle (l'entreprise n'a pas l'usage : pas d'irrigation, pas de process humide) et prend une `priority` supérieure (2) pour l'emporter sur les ajouts (1). À égalité, le moteur fait gagner `remove`.
- Une question sans réponse ne déclenche aucun filtre, sauf `not_answered`. Ne pas écrire de filtre `neq` en pensant qu'il couvrira les non-réponses.
- `always_include` : les mesures proposées à tout le monde ; à éviter, sauf l'audit pour un secteur où il est le point d'entrée obligé. `never_include` : vide en général.
- Chaque mesure propre au secteur doit être citée par au moins un filtre (le vérificateur le bloque). Chaque mesure transversale visible devrait l'être aussi (avertissement).

## 7. Calibrage

Après chaque modification :

```bash
conda run -n noe-env python api/ingest_referentiel.py --verifier --staging <secteur>
cd front_vite && node scripts/simuler_referentiel.mjs <secteur> --staging
```

Cibles de la simulation sur profils aléatoires (à affiner) :

| Indicateur | Cible |
|---|---|
| Mesures par plan, médiane | 3 à 7 |
| Plans vides | 0 % |
| Mesure la plus fréquente | sous 90 %, sauf mesure d'entrée assumée |
| Mesure la moins fréquente | au-dessus de 10 % |
| Niveaux de maturité | les trois atteints, aucun sous 5 % |
| Filtres | tous déclenchés, chacun au-dessus de 5 % |

Les profils aléatoires tirent les options uniformément, donc ils sur-représentent le niveau intermédiaire : un questionnaire bien calibré donne quand même 10 % ou plus de novices et d'avancés. Si ce n'est pas le cas, les barèmes sont trop plats (trop d'options à 1 et 2).

Puis les **personas** (`api/seeds/personas/<secteur>.json`, voir `personas.md`) : pour chacun, le plan obtenu doit être celui qu'un conseiller donnerait. Le persona « sans l'usage principal » ne doit recevoir aucune mesure de cet usage ; le persona « avancé » doit en recevoir au plus deux ou trois ; le persona « je ne sais pas » doit en recevoir une ou deux, pas zéro et pas dix.

## 8. Lien avec les solutions et les aides

Les liens vers les prestataires et les aides se saisissent **côté fiche** (`mesures` avec `roles`), jamais côté mesure. Ce guide ne les écrit pas, mais la bibliothèque doit les rendre possibles : une mesure trop vague (« Améliorer la gestion de l'eau ») ne peut être portée par personne. Test : pour chaque mesure, on doit pouvoir nommer le type de prestataire qui la réalise (`conseil_etude`, `travaux`, `materiel`, `formation`) et le type d'aide qui la finance. Si l'on ne peut pas, la mesure est à reformuler ou à scinder.

À la fin de la construction, `api/rapport_couverture.py` liste les mesures sans prestataire ni aide : c'est la commande de fiches à passer.

### 8.1 Choisir les apporteurs de solutions

L'entreprise qui lit son plan d'action cherche **qui peut faire le travail** : le bureau d'études qui fera le diagnostic, l'installateur qui posera les compteurs ou la boucle de recyclage, le fabricant de l'équipement. Les acteurs institutionnels sont déjà connus d'elle et renvoient souvent vers ces mêmes entreprises. La liste des prestataires est donc d'abord une liste d'entreprises privées.

**Qui chercher, par ordre de priorité**

1. **Bureaux d'études et cabinets de conseil** spécialisés eau ou procédés du secteur (`bureau_etudes`), pour les rôles `conseil_etude` et souvent `formation`.
2. **Installateurs et entreprises de travaux** (`installateur`) : traitement de l'eau, réseaux, intégration de procédés, maintenance. Rôle `travaux`.
3. **Fabricants français** (`equipementier`) : l'équipement est conçu et produit en France, ce qu'une source doit dire (site de production, mention « fabriqué en France », page usine). Rôle `materiel`. Un distributeur ou une filiale commerciale d'un groupe étranger n'est retenu qu'à défaut de fabricant français, avec le type `installateur` s'il pose le matériel, et la description le dit.
4. **Acteurs institutionnels locaux**, au plus un par mesure : CCI, chambre d'agriculture ou CMA **du département de test**, quand ils réalisent eux-mêmes un diagnostic, un accompagnement ou une formation. Une page qui ne fait que renvoyer vers d'autres ne suffit pas.

Les agences de l'eau, l'ADEME, les régions et les ministères financent : ils vont dans les **aides**, pas dans les prestataires, sauf accompagnement technique qu'ils délivrent eux-mêmes. Les instituts et centres techniques (`organisme_technique`) sont retenus quand ils font réellement de la prestation pour une entreprise (essai, audit payant), pas pour leurs publications.

**Ce qui qualifie une entreprise**

- Elle est **active en France** : SIRET d'un établissement ouvert, lu avec `outils_fiches.py rechercher-entreprise` (`etat_administratif` à `A`).
- Elle a une **preuve de pertinence pour le secteur** : référence client, cas d'usage ou page de prestation qui cite le secteur ou un procédé du secteur (pour une laiterie : NEP, eaux blanches, lactosérum, concentrats). Un généraliste du traitement de l'eau sans référence dans la filière passe après un spécialiste qui en a.
- Elle **intervient là où est l'établissement** : national, ou régional couvrant le département de test.
- Pas de plateforme de mise en relation, d'annuaire, de place de marché ni de revendeur en ligne.

**Équilibre de la liste**

- Au moins deux entreprises privées par mesure sectorielle, idéalement de rôles différents (une qui étudie, une qui installe ou fabrique).
- Jamais une seule entreprise pour une mesure : l'outil ne doit pas ressembler à une recommandation commerciale.
- Sur l'ensemble du secteur, les institutionnels ne dépassent pas un tiers des prestataires.
- Mélanger PME et grands groupes ; une PME régionale spécialisée vaut mieux qu'une grande marque sans référence dans le secteur.

## 9. Liste de contrôle avant validation

- [ ] Note de profil sourcée, périmètre NAF validé, codes limites listés.
- [ ] Six à douze mesures, transversales réutilisées, chaque catégorie couverte ou exclusion justifiée.
- [ ] Une ou deux mesures au plus notées 3 en impact et 3 en facilité.
- [ ] Huit à douze questions, chaque question discrimine au moins une mesure ou porte un topic.
- [ ] Chaque question offre une option à 0 et une à 3 en maturité.
- [ ] Ids d'options sémantiques, jamais `a`, `b`, `c`.
- [ ] Table de discrimination écrite, filtres dérivés d'elle, descriptions en français.
- [ ] Vérificateur sans erreur, simulation sans alerte, indicateurs dans les cibles.
- [ ] Cinq personas au moins, plans relus et jugés sensés.
- [ ] Tout en `statut: brouillon` avec `date_maj`, dans le staging, jamais dans `api/seeds/`.
