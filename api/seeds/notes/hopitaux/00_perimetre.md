# Périmètre du secteur : hôpitaux et cliniques

Note de périmètre, étape 1 du skill `nouveau-secteur`. Code NAF de départ : **86.10Z**.
Statut : brouillon. Périmètre validé le 2026-10-15 (86.10Z seul, EHPAD écartés).

## 1. Résolution du code de départ

Source : nomenclature NAF rév. 2 embarquée dans le skill (`outils_fiches.py naf`), notes
explicatives INSEE. Comptes d'établissements : table `bassins_activite` (agrégat de
`insee_entreprises`).

| Niveau | Code | Libellé INSEE |
|---|---|---|
| Section | Q | Santé humaine et action sociale |
| Division | 86 | Activités pour la santé humaine |
| Groupe | 86.1 | Activités hospitalières |
| Classe | 86.10 | Activités hospitalières |
| Sous-classe | **86.10Z** | **Activités hospitalières** |

Contenu de 86.10Z selon l'INSEE : hospitalisation de court ou long séjour, diagnostic et
soins des hôpitaux et cliniques, **publics ou privés**, généraux (hôpitaux locaux,
régionaux, universitaires, militaires, thermaux, pénitentiaires) ou spécialisés
(psychiatrie, maladies infectieuses, maternités). Le code couvre l'ensemble des services
de l'établissement : laboratoires et installations techniques (radiologie, anesthésie),
urgences, blocs opératoires, pharmacie, **hébergement et restauration**. Comprend aussi
les blocs opératoires mobiles et l'**hospitalisation à domicile** (HAD).

Ne comprend pas : la médecine ambulatoire et les consultants privés (86.2), la pratique
dentaire (86.23Z), les ambulances (86.90A), les laboratoires d'analyses médicales
(86.90B), les activités vétérinaires (75.00Z).

**Aucun questionnaire existant ne couvre 86.10Z**, ni aucun code des divisions 86 et 87
(publiés et staging vérifiés).

## 2. Identité du secteur

| Champ | Valeur proposée |
|---|---|
| `sector_id` | `hopitaux` |
| `sector_label` | Hôpitaux et cliniques |
| Préfixe des mesures | `HOP`, soit `ACT_HOP_001` et suivants |
| Préfixe des questions | `hop_q01` et suivants |
| Préfixe des fiches | `PREST_HOP_NNN`, `AIDE_HOP_NNN` |

Vérifié : aucune mesure `ACT_HOP_*` dans `api/seeds/` ni dans le staging (préfixes
existants : `AGR`, `ART`, `FRL`, `HOT`, `HUI`, `LAI`, `VIA`, `VIN`).

Le libellé est au pluriel, comme « Vins et spiritueux » : « Activités hospitalières »
(libellé INSEE) parle moins à un directeur d'établissement que « Hôpitaux et cliniques ».

## 3. Codes NAF retenus

**86.10Z seul**, soit 1 940 établissements en base, dont 1 157 déclarent des salariés,
pour environ 154 000 emplois salariés estimés. La population est très concentrée sur de
gros sites : 601 établissements de plus de 100 salariés. Premiers départements : Paris
(139), Bouches-du-Rhône (119), Haute-Garonne (73), Hauts-de-Seine (72), Rhône (70),
Nord (69).

Ce que ces établissements partagent, et qui fonde le questionnaire (à confirmer par le
profil eau de l'étape 2) :

1. **Un bâtiment occupé jour et nuit, toute l'année**, avec un grand nombre de points
   d'eau sanitaires (chambres, toilettes, lave-mains) et une consommation qui ne baisse
   pas en été, au moment des restrictions.
2. **La prévention de la légionellose** dans les réseaux d'eau chaude, obligation
   réglementaire forte en établissement de santé, qui impose des purges et des
   températures et pèse sur la consommation. Levier propre au secteur : réduire les
   bras morts et piloter les purges sans dégrader la sécurité sanitaire.
3. **Des postes techniques présents ou non selon l'établissement** : stérilisation,
   blanchisserie intégrée, restauration, dialyse (production d'eau osmosée), imagerie
   et blocs (refroidissement), tours aéroréfrigérantes de climatisation. Le
   questionnaire les inventoriera en entrée et retirera les mesures correspondantes aux
   établissements qui n'en ont pas (filtres `remove`).
4. **Une continuité d'approvisionnement vitale** : un hôpital ne peut pas s'arrêter
   quand l'eau manque. Plans de continuité, réserves, ressource de secours : levier
   d'anticipation plus fort que dans les autres secteurs.
5. **Des rejets spécifiques** (résidus médicamenteux, produits de contraste, désinfectants),
   soumis à une autorisation de déversement dans le réseau public, ce qui donne du
   contenu à la catégorie `agir_rejets_qualite`.

**Le cas de l'hospitalisation à domicile.** Une structure d'HAD est en 86.10Z mais n'a
que des bureaux : elle sera le persona « sans l'usage principal ». L'inventaire d'entrée
doit lui permettre de dire qu'elle n'a ni hébergement ni plateau technique, et ne
recevoir que des mesures de gouvernance.

**Le cas des hôpitaux thermaux.** Rares, et leur eau thermale relève d'une autorisation
propre. Ils seront traités comme les autres établissements, sans question dédiée.

## 4. Codes limites écartés

| Code | Libellé INSEE | Établissements (dont employeurs) | Raison |
|---|---|---|---|
| 87.10A | Hébergement médicalisé pour personnes âgées (EHPAD) | 1 891 (1 520) | **Le voisin le plus proche.** Partage les sanitaires, la légionellose, la cuisine et la blanchisserie, mais n'a ni bloc, ni stérilisation, ni imagerie, ni dialyse, ni rejets hospitaliers, et pas de médecin à demeure. Ses leviers et ses apporteurs sont ceux du bâtiment d'hébergement. Le guide dit de séparer dans le doute : candidat à un futur secteur `hebergement_medicalise` (avec 87.10B, 87.10C), qui pourra réutiliser une partie des mesures définies ici. Fusion possible si le relecteur le préfère (voir la question de validation). |
| 87.10B, 87.10C | Hébergement médicalisé pour enfants et adultes handicapés | 5 et 28 | Même raison que 87.10A, effectifs négligeables en base. |
| 87.30A | Hébergement social pour personnes âgées | 1 535 (624) | Résidences sans soins médicaux ou avec soins limités : profil d'hébergement collectif, pas d'hôpital. |
| 86.22A | Radiodiagnostic et radiothérapie | 7 840 (672) | Cabinets et centres d'imagerie autonomes : un poste (refroidissement des appareils) parmi ceux de l'hôpital, sans hébergement ni restauration. Trop petit pour porter un questionnaire de ce type. |
| 86.22B | Activités chirurgicales | 7 691 (1 664) | Exercice des chirurgiens (personnes physiques ou sociétés d'exercice), pas des établissements : leur activité se déroule dans les blocs des établissements 86.10Z. |
| 86.21Z, 86.22C, 86.23Z, 86.90D, 86.90E | Médecins, dentistes, infirmiers, rééducateurs | plus de 200 000 | Cabinets : usages domestiques et petits équipements (autoclave de cabinet, fauteuil dentaire). Exclus par la note INSEE (86.2). |
| 86.90B | Laboratoires d'analyses médicales | 6 802 (3 513) | Exclu par la note INSEE. Eau de laboratoire (eau purifiée, lavage de verrerie) sans hébergement. Candidat éventuel à un secteur « laboratoires » avec 71.20B et 72.1. |
| 86.90A, 86.90C, 86.90F | Ambulances, banques d'organes, santé non classée ailleurs | | Pas d'usage d'eau structurant. |
| 96.04Z | Entretien corporel (stations thermales, spas) | 28 118 (1 914) | Les stations thermales non hospitalières y sont classées. Usage de l'eau thermale et des bassins sans rapport avec l'hôpital. |
| 96.01A | Blanchisserie-teinturerie de gros | | Prestataire de nombreux hôpitaux (blanchisserie externalisée), candidat comme apporteur de solutions, pas le secteur lui-même. |

## 5. Couverture des catégories du plan d'action

Les sept catégories sont fixes. Poids attendu pour les hôpitaux (à confirmer à l'étape 2) :

- `suivre_comprendre_maitriser` : comptage par bâtiment et par usage sur des sites
  étendus, détection des fuites sur des réseaux anciens, audit eau.
- `ameliorer_efficacite_hydrique` : robinetterie et chasses économes compatibles avec
  l'hygiène hospitalière, équipements de stérilisation et de blanchisserie,
  refroidissement en circuit fermé des équipements techniques.
- `changer_process_pratiques` : gestion des purges anti-légionelles et du bouclage
  d'eau chaude, entretien des locaux (bionettoyage à la vapeur ou en microfibre).
- `valoriser_reut_eaux_non_conventionnelles` : eau de pluie pour les espaces verts et
  certains usages techniques, réutilisation des rejets d'osmose inverse (dialyse,
  stérilisation). Fortement bornée par la réglementation sanitaire.
- `sensibiliser_former` : plan de continuité en cas de pénurie et de restriction,
  formation des équipes techniques et d'hygiène.
- `agir_rejets_qualite` : autorisation de déversement, réduction des rejets de
  médicaments et de produits de contraste à la source.
- `agir_grand_cycle` : démarche collective de territoire (transversale), désimperméabilisation
  des parkings et espaces extérieurs.

## 6. Département de test

**Proposé : 13 (Bouches-du-Rhône).** Deuxième département du secteur en nombre
d'établissements (119), après Paris, dans le bassin Rhône-Méditerranée-Corse, régulièrement
touché par des arrêtés sécheresse, ce qui donne un cas d'usage plus parlant que Paris pour
l'anticipation des restrictions. Servira au choix des prestataires locaux à l'étape 5.

## 7. Mesures transversales réutilisées et demandes d'évolution

Réutilisées telles quelles, sans copie ni modification : `ACT_AGR_001` (compteur par
usage), `ACT_AGR_002` (audit eau), `ACT_AGR_006` (eau de pluie), `ACT_AGR_009` (plan de
gestion de l'eau, qui porte pour l'hôpital le protocole de rupture d'approvisionnement du
plan blanc, levier L2 du profil), `ACT_AGR_010` (démarche collective).

Demandes d'évolution, non appliquées (les seeds publiés ne sont pas modifiés) :

1. **Recherche de fuites en transversal.** `ACT_HOP_002` passe le test du guide (section
   4.1) : sans le mot « hospitalier », la description reste vraie. Aucune transversale ne
   la couvre (`ACT_HOT_002` est une formation du personnel d'hôtel au repérage).
   Elle est gardée sectorielle pour ne pas créer une mesure visible par tous les
   secteurs sans filtre qui la cite. À basculer en `secteurs: []` lors d'une passe sur
   les transversales.
2. **Ressources de l'audit eau.** `ACT_AGR_002` affiche des ressources agricoles
   (chambre d'agriculture, FranceAgriMer), déjà signalées par l'hôtellerie. Elles seront
   hors sujet pour un hôpital.
3. **Plan de gestion et rupture d'approvisionnement.** La description de `ACT_AGR_009`
   parle de niveaux d'alerte sécheresse. Pour un hôpital, usager prioritaire, le risque
   est la rupture (DGS, 2023). Ajouter une phrase sur la rupture d'alimentation la
   rendrait juste pour tous les secteurs.

## 8. Erreur de vérification attendue à l'étape 3

`ingest_referentiel.py --verifier --staging hopitaux` renvoie sept erreurs « mesure
ACT_HOP_00N : secteurs inconnus ['hopitaux'] » tant que `questionnaire_hopitaux.json`
n'existe pas. Rien d'autre n'est signalé pour les mesures `ACT_HOP_*`.

## 9. Couverture des catégories

Toutes les catégories ont au moins une mesure visible : `agir_grand_cycle` par
`ACT_AGR_010` seule. Leviers du profil écartés pour tenir douze mesures (décision du
2026-10-15) : tours aéroréfrigérantes (L8), lave-bassins (L10), bionettoyage (L11),
espaces verts (L12), eaux pluviales à la parcelle (L17).
