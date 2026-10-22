# Jugement des personas : brasserie et boissons sans alcool

Étape 4 du skill `nouveau-secteur`, agent `juge-personas`. Date : 2026-10-15.

## Premier passage

Message final du juge, reproduit tel quel.

J'ai relu les plans des 9 personas du secteur industrie_boissons. Trois personas reçoivent une mesure indue, aucun ne manque d'une mesure de la bibliothèque, et l'ordre des trois premières mesures est à revoir pour six d'entre eux.

**Brasserie régionale, rien de formalisé (brasserie_novice)**
1. Mesure indue : aucune.
2. Mesure manquante : aucune.
3. Ordre : non. Commencez par Audit eau, Ratio eau par hectolitre, Nettoyage manuel économe. Le ratio ne coûte rien et se calcule avec le compteur général, il n'a rien à faire en septième position. Le compteur par usage vient après l'audit, qui dira sur quels postes le poser.

**Brasserie industrielle équipée, sans plan (brasserie_equipee)**
1. Mesure indue : aucune.
2. Mesure manquante : aucune.
3. Ordre : non. Commencez par Plan de gestion de l'eau, Ratio eau par hectolitre, Audit eau. À 60 000 m³ et 150 000 hl, la procédure sécheresse est une obligation réglementaire. Les relevés mensuels sont déjà là, il ne manque que leur rapport à la production. La Démarche collective, en deuxième position, passe avant ce qui est obligatoire et gratuit : elle doit venir après le Refroidissement économe.

**Embouteilleur d'eau de source, sans brassage (eau_de_source)**
1. Mesure indue : Nettoyage manuel économe. Le site nettoie ses lignes par NEP, alors que cette mesure vise explicitement les ateliers qui nettoient encore au tuyau. Elle passe ici devant l'Optimisation de la NEP.
2. Mesure manquante : aucune.
3. Ordre : non. Commencez par Optimisation de la NEP, Démarche collective, Protection de l'impluvium. Pour un embouteilleur, la ressource est le produit lui-même : l'impluvium et la place au SAGE (qu'il suit déjà sans y siéger) ne peuvent pas venir en dernier.

**Brasserie exemplaire (brasserie_avancee)**
1. Mesure indue : aucune.
2. Mesure manquante : aucune.
3. Ordre : sans objet, le plan est vide, ce qui est conforme au profil.

**Assistante qui répond pour le gérant (ne_sait_pas)**
1. Mesure indue : aucune.
2. Mesure manquante : aucune.
3. Ordre : oui. Deux mesures d'entrée, comme attendu. Pour une microbrasserie, l'audit pourrait toutefois passer devant le compteur.

**Malterie, gros consommateur sur forage (malterie)**
1. Mesure indue : aucune. Dans « Levures, drêches et rejets », seul le prétraitement des eaux de trempe la concerne, mais sur le fond la mesure est justifiée.
2. Mesure manquante : aucune.
3. Ordre : non. Commencez par Ratio eau par hectolitre (ici en m³ par tonne de malt, face à un plafond autorisé), Audit eau, Refroidissement économe (tours sans suivi des purges). La Démarche collective vient ensuite.

**Limonaderie tout réseau (limonaderie_reseau)**
1. Mesure indue : Nettoyage manuel économe. Le site a une NEP, et ce qui lui manque, ce sont des consignes, pas la moyenne pression. La mesure passe ici devant l'Optimisation de la NEP, qui est le vrai levier.
2. Mesure manquante : aucune.
3. Ordre : non. Commencez par Audit eau, Optimisation de la NEP, Refroidissement économe. Un refroidissement à l'eau perdue est souvent le premier poste d'un petit site. Il ne peut pas rester en huitième position.

**Microbrasserie artisanale (microbrasserie)**
1. Mesure indue : Plan de gestion de l'eau. Pour deux personnes et 150 m³ par an sur le réseau, un conseiller ne proposerait pas un document de gestion qui cartographie les risques réglementaires (y compris les zones de répartition des eaux). Les consignes sécheresse incluses dans le Nettoyage manuel économe suffisent.
2. Mesure manquante : aucune.
3. Ordre : non. Commencez par Eau du refroidisseur de moût (une cuve et une pompe, environ un quart de la consommation dans le cas documenté), Nettoyage manuel économe, Audit eau (le diagnostic de la CMA Grand Est, financé à 100 %, couvre les brasseries de 150 à 10 000 hl). Le compteur, en tête du plan, vient après.

**Réponses contradictoires (reponses_incoherentes)**
1. Mesure indue : aucune. La source d'embouteillage cochée par erreur ne fait pas sortir la Protection de l'impluvium.
2. Mesure manquante : aucune.
3. Ordre : oui.

**Vue d'ensemble**
- Le Nettoyage manuel économe sort trop souvent (58 %), plus de deux fois plus que le nettoyage au tuyau (22 %), et il arrive chez des sites équipés de NEP. L'Optimisation de la NEP, levier des sites industriels, ne sort que dans 18 % des profils.
- La Récupération d'eau de pluie ne sort jamais (0 %), y compris pour les sites tout réseau qui lavent leurs sols.
- La malterie n'a aucune mesure sur la trempe, son poste dominant (90 % de l'eau industrielle).
- Les niveaux sont très resserrés (88 % intermédiaire) pour un secteur où 89 % des brasseries ont moins de 10 salariés. Le profil « je ne sais pas » (33 %, intermédiaire) passe devant le microbrasseur qui a tout renseigné (31 %, novice).
- Le concernement paraît suivre la maturité plutôt que l'exposition : 11 % pour la brasserie novice à 4 000 m³ avec tunnel et tour, 97 % pour l'exemplaire. Ce n'est pas crédible.

VERDICT : à revoir, 3 personas avec une mesure indue ou manquante (eau_de_source, limonaderie_reseau, microbrasserie)

## Corrections après le premier passage

Voir `02_discrimination.md`, section « Corrections après le premier passage du juge » : retrait
du nettoyage manuel pour les sites en NEP, retrait du plan de gestion sous 1 000 m³ par an,
ratio relevé à 2 en impact.

## Second passage

Message final du juge, reproduit tel quel (liste des fichiers relus omise).

**Brasserie régionale, rien de formalisé (brasserie_novice)**
1. Mesure indue : Aucune. Le plan de neuf mesures correspond bien à ce qu'elle décrit (tunnel en appoint continu, tour non suivie, nettoyage au tuyau, eau du moût et levures à l'égout).
2. Mesure manquante : Aucune.
3. Ordre : Oui. Les trois mesures de connaissance en tête sont le bon départ. On pourrait commencer par le Ratio eau par hectolitre, faisable tout de suite avec la facture et le compteur général, mais ce n'est pas une faute.

**Brasserie industrielle équipée, sans plan (brasserie_equipee)**
1. Mesure indue : Aucune. Aucune mesure ne porte sur ce qu'elle possède déjà (NEP pilotée, pasteurisation flash, récupération de l'eau du moût).
2. Mesure manquante : Aucune.
3. Ordre : Non. Elle prélève 60 000 m³ par an, donc plus de 10 000 m³, et doit avoir une procédure sécheresse écrite si elle est classée en enregistrement ou en autorisation. Elle est « informée sans plan » : le Plan de gestion de l'eau devrait arriver juste après l'audit, pas en dernier. La Démarche collective ne mérite pas la troisième place. Ordre proposé : Ratio eau par hectolitre, Audit eau, Plan de gestion de l'eau.

**Embouteilleur d'eau de source, sans brassage (eau_de_source)**
1. Mesure indue : Aucune. Aucune mesure de brassage, de pasteurisation ou de coproduits ne sort, et la Protection de l'impluvium est bien là. Le Plan de gestion de l'eau reste défendable même si les risques ont été évalués : l'exemption nationale n'empêche pas les arrêtés locaux.
2. Mesure manquante : Aucune.
3. Ordre : Oui. Ratio, Audit, puis Optimisation de la NEP, son principal levier de process.

**Brasserie exemplaire (brasserie_avancee)**
1. Mesure indue : Aucune. Son plan est vide.
2. Mesure manquante : Aucune.
3. Ordre : Sans objet.

**Assistante qui répond pour le gérant (ne_sait_pas)**
1. Mesure indue : Aucune.
2. Mesure manquante : Aucune. Deux mesures d'entrée, ni zéro ni un plan complet : c'est le comportement attendu.
3. Ordre : Oui.

**Malterie, gros consommateur sur forage (malterie)**
1. Mesure indue : Aucune sur le fond. Le prétraitement des eaux de trempe, rejetées sans traitement, est justifié. En revanche, le titre « Levures, drêches et rejets » parle de deux coproduits qu'une malterie n'a pas.
2. Mesure manquante : Aucune dans la bibliothèque. Notez que la trempe, environ 90 % de son eau, n'est visée par aucune mesure : son plan ne touche pas son poste principal.
3. Ordre : Non. Ses risques sécheresse sont déjà évalués. Après le ratio et l'audit, le levier concret est le refroidissement : ses tours aéroréfrigérantes (TAR) n'ont aucun suivi des purges. La Démarche collective peut venir ensuite. Ordre proposé : Ratio eau par hectolitre, Audit eau, Refroidissement économe.

**Limonaderie tout réseau (limonaderie_reseau)**
1. Mesure indue : Refroidissement économe. Elle refroidit à l'eau perdue et n'a pas de tour, alors que la mesure parle de réduire les purges des tours aéroréfrigérantes. « Levures, drêches et rejets » est aussi mal ciblé, puisqu'elle n'a ni levures ni drêches : seule la partie sur les sirops déclassés et les lavages s'applique.
2. Mesure manquante : Aucune. Le passage de l'eau perdue en circuit fermé est ce qu'un conseiller lui proposerait, mais cette mesure n'existe pas dans la bibliothèque.
3. Ordre : Oui. Compteur par usage, Ratio, Audit : sur un seul compteur général, c'est le bon départ.

**Microbrasserie artisanale (microbrasserie)**
1. Mesure indue : Aucune. Le compteur se justifie puisqu'elle n'a pas de compteur propre. L'audit se justifie aussi : le diagnostic financé par la CMA Grand Est couvre les brasseries de 150 à 10 000 hl, et elle en fait 300.
2. Mesure manquante : Aucune.
3. Ordre : Non. Pour 150 m³ par an, les leviers connus d'une microbrasserie sont immédiats et presque gratuits : l'eau du refroidisseur de moût représente environ 24 % de sa consommation, et le nettoyage peut passer en moyenne pression. Ils devraient passer avant un compteur et un audit. Ordre proposé : Eau du refroidisseur de moût, Nettoyage manuel économe, Compteur par usage.

**Réponses contradictoires (reponses_incoherentes)**
1. Mesure indue : Aucune. L'impluvium ne sort pas malgré la source cochée par erreur, et l'eau du moût n'est pas reproposée.
2. Mesure manquante : Aucune.
3. Ordre : Oui. Le plan est court et cohérent, pas absurde.

**Vue d'ensemble**
- La Récupération d'eau de pluie (ACT_AGR_006) n'est jamais proposée (0 %), même aux sites tout réseau : l'alerte de la simulation reste ouverte.
- L'Audit eau sort très souvent (79 %), tandis que l'Optimisation de la NEP reste rare (18 %) alors que c'est le levier de tout site équipé de NEP.
- La Démarche collective passe devant les leviers hydriques (troisième rang chez la brasserie équipée et la malterie), et le Plan de gestion de l'eau finit dernier même quand il est une obligation réglementaire.
- Les niveaux sont très resserrés : 88 % d'intermédiaires, 8 % de novices, 5 % d'avancés. C'est peu crédible pour un secteur où 89 % des brasseries ont moins de 10 salariés et formalisent peu : on attendrait plus de novices.

VERDICT : à revoir, 1 persona avec une mesure indue ou manquante (limonaderie_reseau). S'y ajoutent l'ordre à reprendre pour trois personas (brasserie_equipee, malterie, microbrasserie) et l'alerte ACT_AGR_006.

## Suite donnée au second passage, désaccords documentés

Deux passages au plus : il n'y aura pas de troisième passage.

- **Limonaderie, refroidissement indu : corrigé par la formulation.** Le filtre était juste
  (eau perdue), la mesure ne nommait que les tours. ACT_BOI_005 devient « Fermer le circuit de
  refroidissement et réduire les purges des tours » et couvre l'eau perdue, ce que le juge
  appelait la mesure manquante. ACT_BOI_007 devient « Coproduits et rejets », avec les eaux de
  trempe dans la description, pour la malterie et la limonaderie.
- **Ordre (brasserie équipée, malterie, microbrasserie) : désaccord maintenu.** Le tri est
  global (impact × facilité, puis horizon). La démarche collective (2 × 2) passe devant le
  refroidissement (3 × 1) et le plan de gestion (1 × 2, transversale publiée qu'on ne note pas
  ici). Pour la microbrasserie, l'eau du moût (2 × 3, court terme) suit le compteur et l'audit
  (2 × 3, immédiat) : écart d'horizon seulement. Corriger ces cas exigerait un tri par
  persona que le moteur n'a pas, à verser au chantier du moteur.
- **Fréquence de l'audit (79 %) et de la NEP (18 %).** L'audit sort pour toute réponse autre
  que « récent », comme dans les autres secteurs. La NEP ne sort que pour les sites qui en
  ont une à durée fixe, une option sur quatre : c'est voulu.
- **Niveaux resserrés.** Déjà assumé dans `02_discrimination.md` ; les profils aléatoires
  tirent uniformément et ne reflètent pas la population réelle.
- **Eau de pluie.** Alerte justifiée dans `02_discrimination.md`, choix validé à l'étape 2.
