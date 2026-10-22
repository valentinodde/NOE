# Périmètre du secteur : hôtellerie

Note de périmètre, étape 1 du skill `nouveau-secteur`. Code NAF de départ : **55.10Z**.
Statut : brouillon. Périmètre validé le 2026-09-24 (55.10Z seul).

## 1. Résolution du code de départ

Source : nomenclature NAF rév. 2 embarquée dans le skill (`outils_fiches.py naf`), notes
explicatives INSEE. Comptes d'établissements : table `insee_entreprises`.

| Niveau | Code | Libellé INSEE |
|---|---|---|
| Section | I | Hébergement et restauration |
| Division | 55 | Hébergement |
| Groupe | 55.1 | Hôtels et hébergement similaire |
| Classe | 55.10 | Hôtels et hébergement similaire |
| Sous-classe | **55.10Z** | **Hôtels et hébergement similaire** |

Contenu de 55.10Z selon l'INSEE : hébergement meublé en chambres ou suites pour des
séjours de courte durée, avec **obligatoirement un service quotidien des lits et de
nettoyage de la chambre**. L'offre peut comprendre repas et boissons, blanchisserie,
piscine, salle de sport, salles de séminaire. Comprend aussi les centres et villages de
vacances avec service de chambre quotidien. Ne comprend pas la location de logements
meublés pour un usage durable (division 68).

**Aucun questionnaire existant ne couvre 55.10Z** (publiés : `agriculture`, division 01 ;
`industrie_laitiere`, groupe 10.5 ; staging : `industrie_laitiere`, `industrie_viande`,
division 10). Aucun voisin de la division 55 n'est couvert non plus.

## 2. Identité du secteur

| Champ | Valeur |
|---|---|
| `sector_id` | `hotellerie` |
| `sector_label` | Hôtellerie |
| Préfixe des mesures | `HOT`, soit `ACT_HOT_001` et suivants |
| Préfixe des questions | `hot_q01` et suivants |
| Préfixe des fiches | `PREST_HOT_NNN`, `AIDE_HOT_NNN` |

Vérifié : aucune mesure `ACT_HOT_*` ni aucun `sector_id` `hotellerie` dans `api/seeds/`
et le staging (préfixes existants : `AGR`, `LAI`, `VIA`).

## 3. Codes NAF retenus

**55.10Z seul**, soit 36 797 établissements en base, dont 16 135 déclarent des salariés.
Premiers départements : Paris (4 391), Savoie (1 917), Haute-Savoie (1 688),
Alpes-Maritimes (1 371), Bouches-du-Rhône (1 282).

Ce que ces établissements partagent, et qui fonde le questionnaire :

1. **Les chambres sont le premier poste d'eau** : douches, bains, chasses d'eau,
   lavabos, remis à disposition chaque jour. D'où des leviers d'équipement (réducteurs
   de débit, chasses économes, détection de fuites) sur un parc de points d'eau nombreux
   et identiques.
2. **Le linge est lavé chaque jour**, sur place ou par une blanchisserie extérieure,
   et le changement quotidien des draps et serviettes est un levier de pratique et de
   communication avec le client.
3. **Des postes secondaires présents ou non selon l'établissement** : restauration,
   piscine et spa, espaces verts, climatisation par tours aéroréfrigérantes. Le
   questionnaire les inventoriera en entrée et retirera les mesures correspondantes aux
   établissements qui n'en ont pas (filtres `remove`).
4. **Une forte saisonnalité** dans les zones touristiques, qui fait coïncider pic de
   fréquentation et arrêtés sécheresse (littoral, montagne l'été).
5. **Des apporteurs de solutions communs** : bureaux d'études en efficacité hydrique du
   bâtiment, installateurs plomberie et génie climatique, fabricants d'équipements
   hydro-économes, labels environnementaux de l'hébergement. À confirmer à l'étape 5.

## 4. Codes limites écartés

| Code | Libellé INSEE | Établissements (dont employeurs) | Raison |
|---|---|---|---|
| 55.20Z | Hébergement touristique et autre hébergement de courte durée | 89 955 (4 784) | Résidences de tourisme, gîtes, appartements de vacances, auberges de jeunesse, **sans service de chambre quotidien**. Population dominée par des loueurs individuels (95 % sans salarié), pour qui les questions de compteur par usage, de blanchisserie ou de pilotage n'ont pas de sens. Le linge et le ménage sont à la charge du client ou faits en fin de séjour. Candidat à un futur secteur. |
| 55.30Z | Terrains de camping et parcs pour caravanes | 6 964 (3 442) | Profil proche sur la piscine et les espaces verts, mais le poste principal est le bloc sanitaire collectif, souvent avec forage propre et assainissement autonome, sur de grandes emprises arrosées. Leviers et prestataires propres (hôtellerie de plein air). Dans le doute, le guide dit de séparer. Candidat à un futur secteur `hotellerie_plein_air`. |
| 55.90Z | Autres hébergements | 1 631 (330) | Résidences d'étudiants, internats, foyers de travailleurs : hébergement durable, gestion publique ou associative, ni piscine ni restauration touristique. |
| 56.10A | Restauration traditionnelle | 137 512 | Beaucoup d'hôtels ont un restaurant, mais un restaurant sans hébergement n'a ni chambres ni linge. Le poste cuisine sera traité ici comme usage secondaire de l'hôtel. |
| 96.01A, 96.01B | Blanchisserie-teinturerie de gros et de détail | 782 et 13 355 | Prestataire de l'hôtellerie (candidat comme apporteur de solutions), pas le secteur lui-même. |
| 96.04Z | Entretien corporel | 29 505 | Contient les spas et la thalassothérapie autonomes. Un hôtel avec spa reste en 55.10Z et y sera interrogé sur son espace aquatique. |
| 68.20A | Location de logements | 910 794 | Exclu par la note INSEE de 55.10Z (usage durable). |

**Le cas des villages de vacances.** Ceux qui assurent un service de chambre quotidien
sont en 55.10Z ; les autres en 55.20Z. Les premiers ont souvent piscine, restauration
collective et grands espaces verts : l'inventaire d'entrée doit leur permettre de s'y
retrouver.

## 5. Couverture des catégories du plan d'action

Les sept catégories sont fixes. Poids attendu pour l'hôtellerie :

- `ameliorer_efficacite_hydrique` est centrale : équipements hydro-économes en chambre,
  lave-linge et lave-vaisselle, piscine (filtration, lavage des filtres).
- `sensibiliser_former` a un double public, le personnel d'étage et les clients
  (réutilisation du linge, affichage).
- `suivre_comprendre_maitriser` : comptage par usage et ratio litres par nuitée, et
  détection des fuites sur un grand nombre de points d'eau.
- `valoriser_reut_eaux_non_conventionnelles` : eau de pluie pour l'arrosage et les
  sanitaires, eaux grises ; bornée par la réglementation sanitaire.
- `agir_grand_cycle` : démarche collective de territoire (transversale), aménagement
  des espaces extérieurs.
- `agir_rejets_qualite` : faible poids. Les rejets sont assimilés domestiques et vont
  au réseau d'assainissement. Seules pistes : vidange des piscines, graisses de cuisine.
  Pourra rester vide si le profil eau ne fait pas émerger de levier sourcé ; l'exclusion
  sera alors écrite ici.

## 6. Demande d'évolution des seeds publiés : eau de pluie transversale

Le guide (section 4.1) range la récupération d'eau de pluie parmi les mesures transversales,
mais elle n'existe qu'en version agricole : `ACT_AGR_006`, `secteurs: ["agriculture"]`,
description agricole (« eaux de toitures de bâtiments agricoles... abreuvement »). Le profil
eau de l'hôtellerie (levier L12) en fait un levier du secteur. Plutôt que d'en créer une
seconde version, qui ferait voir deux mesures d'eau de pluie à l'agriculture, la demande
est de **basculer `ACT_AGR_006` en transversale**.

Mise en œuvre sans toucher `api/seeds/` : une copie de `actions_agriculture.json` est
placée dans ce staging, où elle remplace la version publiée pour la vérification et la
simulation. Elle ne diffère de l'original que sur `ACT_AGR_006` :

| Champ | Avant | Après |
|---|---|---|
| `secteurs` | `["agriculture"]` | `[]` |
| `description` | eaux de toitures de bâtiments agricoles, usages non alimentaires | usages sans eau potable (arrosage, chasses, nettoyage), l'abreuvement et l'irrigation gardés comme exemple agricole |
| `infos_complementaires` | une ressource | plus un avertissement sur la déclaration au préfet (textes du 12 juillet 2024) |
| `sources` | aucune | la source de cet avertissement |
| `date_maj` | 2026-09-22 | 2026-09-24 |

**Attention à la promotion** : `promouvoir_staging.py` copiera ce fichier sur
`api/seeds/actions_agriculture.json`. Si le fichier publié a changé entre-temps, il faut
reporter la modification à la main plutôt que promouvoir cette copie.

Effet de bord : la mesure devient visible pour `industrie_laitiere`, qui ne la cite dans
aucun filtre (avertissement « mesures transversales jamais citées »). Elle n'y sera donc
jamais proposée tant que le questionnaire laitier n'est pas modifié ; à traiter dans ce
secteur.

L'ancienne ressource « Aide équipement : Région / ADEME » de `ACT_AGR_006` est une aide
financière, ce que le guide (section 4.3) exclut des infos complémentaires. Laissée en
place pour limiter la modification ; à retirer lors d'une révision de l'agriculture.

### Seconde demande : ressources de l'audit eau

`ACT_AGR_002` (audit eau, transversale) affiche des ressources propres au monde agricole
(chambre d'agriculture, FranceAgriMer), relevées par le juge des personas comme hors sujet
pour un hôtelier. Demande : les remplacer par des ressources neutres ou les compléter. Non
appliquée dans ce staging, pour ne pas étendre la surcharge de `actions_agriculture.json`
au-delà de l'eau de pluie ; à trancher par le relecteur.

## 7. Erreur de vérification attendue à l'étape 3

`ingest_referentiel.py --verifier --staging hotellerie` renvoie à l'étape 3 sept erreurs
« mesure ACT_HOT_00N : secteurs inconnus ['hotellerie'] ». C'est l'effet de l'ordre des
étapes : la liste des secteurs valides vient des questionnaires, et
`questionnaire_hotellerie.json` n'existe pas encore. Rien d'autre n'est signalé pour les
mesures `ACT_HOT_*`. Ces erreurs doivent disparaître à l'étape 4.

## 8. Catégorie sans mesure

`agir_rejets_qualite` reste vide pour l'hôtellerie. Les rejets d'un hôtel sont assimilés
domestiques (arrêté du 21 décembre 2007, annexe I) et vont au réseau d'assainissement ;
le seul levier trouvé, le dosage automatique des lessives et du chlore, a un effet
indirect non chiffré. Décision du 2026-09-24 : ce levier est intégré aux mesures
`ACT_HOT_004` (lessives) et `ACT_HOT_005` (chlore de piscine) plutôt que d'en faire une
mesure à part.
