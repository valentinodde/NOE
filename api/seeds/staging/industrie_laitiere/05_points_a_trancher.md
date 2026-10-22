# Points à trancher par le relecteur : industrie laitière

Étape 7 du skill `nouveau-secteur`. Ce document accompagne `revue.md`, qui assemble tout le
staging. Date : 2026-09-22.

État général : vérificateur sans erreur, simulation sans alerte et code de sortie 0,
12 mesures visibles, 18 fiches, les sept catégories du plan d'action couvertes.

## 1. Deux mesures n'ont ni prestataire ni aide

`ACT_AGR_009` (formaliser un plan de gestion de l'eau) et `ACT_LAI_002` (suivre le ratio
d'eau par litre de lait traité). C'est cohérent : écrire un document interne et suivre un
indicateur ne s'achètent pas. Aucune des structures documentées ne vend cela.

**À trancher** : accepter ces deux mesures sans fiche, ou chercher une couverture du côté de
la formation professionnelle. La piste identifiée est l'OPCO de la branche agroalimentaire.
Le réseau des CCI a été exploré pour `ACT_AGR_009` et aucune source ne décrit un plan de
gestion de l'eau avec actions par niveau d'alerte.

## 2. Trois fiches ne portent aucun lien vers une mesure

| Fiche | Cause | Recommandation du contrôleur |
|---|---|---|
| PREST_LAI_004, Institut de l'Élevage | Publie un dossier de référence de 2013 mais ne vend aucune prestation sur les effluents ni le lactosérum. L'accompagnement des producteurs est assuré par un réseau de techniciens appartenant à d'autres structures. | Garder comme ressource documentaire |
| PREST_LAI_005, ADEME | Aucun dispositif de l'ADEME ne couvre l'eau pour une entreprise privée. Le seul dispositif touchant l'eau, le Diag Éco-Flux, est opéré et financé par Bpifrance. | **Ne pas publier.** Créer plutôt une fiche Bpifrance |
| PREST_LAI_007, Cemafroid | L'eau est absente de toutes ses pages. La liste officielle des organismes agréés sur la rubrique ICPE 2921 ne le mentionne pas. | **Ne pas publier**, ou la retirer du lot |

Ces trois fiches sont en `brouillon`. Elles ne remonteraient que par repli de catégorie,
c'est-à-dire précisément dans les situations de pénurie où l'utilisateur a le plus besoin
d'un contact utile. PREST_LAI_007 porte `categories: []` et n'apparaîtra donc jamais, ce qui
est la conséquence assumée d'une cible qui ne porte rien.

Leur valeur est de documenter une recherche faite, pour éviter qu'un prochain chantier ne
reparte sur les mêmes pistes. Si elles ne sont pas publiées, leur contenu a sa place dans
`api/seeds/notes/industrie_laitiere/`.

## 3. Deux cibles à créer, nommées par les rédacteurs

Pour `ACT_LAI_004` (fermer les circuits de refroidissement), qui n'a aujourd'hui **aucun
prestataire** : un ensemblier ou un bureau d'études frigorifique industriel, pour les rôles
de conseil, de travaux et de fourniture sur le passage en boucle fermée ou en condenseur
sec ; et, pour le volet réglementaire des tours encore en service, un organisme agréé sur la
rubrique 2921, la liste officielle du ministère en nommant six.

Pour `ACT_LAI_006` (valoriser les eaux issues du lait), si l'on veut un second prestataire à
côté d'ACTALIA : un équipementier ou un bureau d'études en procédés membranaires.

## 4. Le champ `secteurs` et la duplication à venir

Cinq fiches sont transversales (`secteurs: []`) : les deux dispositifs Bpifrance et ADEME
nationaux, ouverts à tous les secteurs d'activité.

Les six fiches d'agences de l'eau restent sur `["industrie_laitiere"]`, et c'est volontaire :
leurs sources excluent explicitement l'agricole (« acteurs économiques non agricoles »,
« hors secteur agricole et élevage sauf aquaculture », « hors activité économique
agricole »). Les passer en transversal les afficherait à des exploitants qui n'y ont pas
droit.

**Conséquence à anticiper** : il faudra dupliquer ces six fiches à l'ouverture de chaque
nouveau secteur industriel, ou introduire un mécanisme d'exclusion sectorielle dans le
modèle, du type `secteurs_exclus`. C'est le même problème que celui résolu ce matin pour les
quatre mesures transversales, mais côté fiches.

## 5. Un champ silencieusement perdu à l'ingestion

`PREST_LAI_004` et `PREST_LAI_007` portent des `infos_complementaires`. **La table
`prestataires` n'a pas cette colonne**, contrairement à `actions` et `aides`, ce qui est
conforme au CLAUDE.md mais que le vérificateur ne contrôle pas : `verifier_fiche` valide le
format de ces entrées sans regarder le type de fiche.

Résultat : ces fiches passent les contrôles au vert et perdront leur contenu à l'ingestion,
sans avertissement. **À trancher** : soit le vérificateur refuse ce champ sur un prestataire,
soit la colonne est ajoutée. Le choix n'est pas neutre, ces deux fiches n'ayant plus que
cela à offrir.

## 6. Deux faiblesses du dispositif de contrôle

**`verifier-url` atteste une joignabilité, pas un contenu.** L'outil se présente avec un
User-Agent de navigateur et n'ouvre la réponse qu'en flux, sans la lire. Des domaines qui
renvoient 403 à tout lecteur, comme celui de l'ADEME ou celui des CCI, passent donc le
contrôle automatique. Une fiche peut être déclarée sans erreur alors que ses sources sont
illisibles. Deux contrôleurs l'ont établi indépendamment, l'un en lisant le code de
`api/outils_fiches.py`.

**Les agents rédacteurs et contrôleurs n'ont pas le même outillage.** Le rédacteur dispose de
Bash et peut extraire le texte d'un PDF ; le contrôleur n'a que Read et WebFetch. Un
contrôleur conclura donc systématiquement à l'illisibilité d'une source au format PDF, quelle
qu'elle soit. C'est arrivé deux fois dans ce chantier, dont une où le PDF avait bel et bien
une couche texte.

## 7. Une anomalie à régler par un courriel

Le site de l'ANFOPEIL se contredit sur le stage n°46 : la page produit affiche un programme
d'analyse du cycle de vie, celui des stages n°47 et n°48, quand le catalogue donne un
programme de nettoyage et désinfection. La contre-épreuve sur les trois stages de station
d'épuration montre que l'anomalie est isolée.

Les deux liens qui en dépendaient (`ACT_LAI_001` et `ACT_LAI_003`) ont été retirés plutôt que
tranchés silencieusement. La contradiction est conservée dans la fiche comme point de
vérification. **Un courriel à `accueil@anfopeil-enil.fr` la règle**, et ces deux liens
peuvent alors être rétablis.

## 8. Alertes de conception assumées

**La distribution des niveaux sur profils aléatoires** : 3 % de novices et 2 % de
concernement faible, contre une cible de 5 % dans le guide. L'argumentaire complet est dans
`02_discrimination.md`. En deux mots : trois questions portent une réponse d'exclusion notée
au niveau moyen, par application du principe consistant à ne pas confondre la taille et la
maturité, et le tirage uniforme combine ces exclusions de façon incohérente. Le test qui
compte, celui des personas, parcourt bien toute l'échelle, de 14 % à 97 %.

**Le seuil de 5 000 m3 sous lequel l'audit eau n'était plus proposé** a été introduit sur la
recommandation des deux juges, puis retiré sur arbitrage humain. L'audit sort donc pour 79 %
des profils. Le filtre est reconstituable en une ligne si la question revient sur des
réponses réelles.

## 9. Trois demandes d'évolution du moteur

Consignées dans `03_jugement.md`, toutes hors du périmètre d'un référentiel sectoriel :

1. **Synthèse** : prévoir un affichage de reconnaissance quand le plan d'action est vide. Le
   persona du site exemplaire reçoit aujourd'hui une page blanche après douze questions.
2. **`actionPanEngine.js`** : pondérer le tri du plan par les axes prioritaires du profil.
   Le tri global place les eaux issues du lait en troisième position pour un site de poudres
   dont c'est pourtant le premier gisement.
3. **`questionnaireScoring.js`** : tenir compte du taux de réponse dans le niveau affiché.
   Un profil qui saute onze questions sur douze est aujourd'hui noté sur la seule à laquelle
   il a répondu, et s'affiche « intermédiaire ».

## 10. Une action en attente sur les seeds publiés

Le basculement des quatre mesures transversales a été appliqué dans
`api/seeds/actions_agriculture.json` (diff de 34 lignes, sauvegarde dans le scratchpad de la
session), mais **l'ingestion en base n'a pas été relancée**. Tant qu'elle ne l'est pas,
l'application sert les anciennes descriptions.

```bash
conda run -n noe-env python api/ingest_referentiel.py
```
