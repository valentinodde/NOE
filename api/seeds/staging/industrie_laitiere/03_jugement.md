# Jugement des personas : industrie laitière

Étape 4 du skill `nouveau-secteur`, point 5. Deux passages de l'agent `juge-personas`,
le maximum prévu. Le juge n'a vu que le rapport de simulation, la bibliothèque de mesures
et le profil eau : ni la table de discrimination, ni les filtres, ni le raisonnement du
rédacteur. Date : 2026-09-22.

Les deux verdicts sont « à revoir ». Ce document dit ce qui a été corrigé et, pour le
reste, où passe le désaccord.

## Premier passage

**Verdict : à revoir.** Trois personas sur huit avec une mesure indue ou manquante,
plus un défaut d'ordre marqué.

| Critique | Suite donnée |
|---|---|
| L'optimisation de la NEP est proposée à une fromagerie et à un glacier qui lavent au jet à la main, alors que la mesure suppose un nettoyage en place automatisé. | **Corrigé.** `f_nep_perfectible` ne vise plus que la NEP réglée au temps, et `f_sans_nep` retire la mesure aux ateliers en lavage manuel. |
| La concentration du lactosérum, qui suppose une osmose inverse ou un évaporateur, est proposée à une fromagerie de sept salariés consommant 3 000 m3 par an. | **Corrigé.** `f_volume_insuffisant` la retire sous 10 000 m3 par an. La mesure est passée de 52 % à 25 % des profils. |
| L'assistante qui saute la question de l'audit ne reçoit pas l'audit, alors que son ignorance est précisément le motif de le recommander. | **Corrigé.** `f_audit_inconnu` utilise l'opérateur `not_answered`, prévu par le moteur pour ce cas. |
| Sur le site de poudres, les eaux issues du lait, premier gisement du site, n'arrivent qu'en cinquième position. | **Corrigé.** La facilité de la mesure passe de 1 à 2 : la réutilisation des eaux issues de la matière première relève de la déclaration au préfet, non de l'autorisation, ce que la note 1 laissait croire. |

## Second passage

**Verdict : à revoir.** Trois personas avec une mesure indue ou manquante, cinq avec un
ordre à corriger. Les critiques du premier passage ne reviennent pas : elles étaient bien
levées.

### Corrigé

| Critique | Suite donnée |
|---|---|
| L'audit eau externe sort pour 79 % des profils, sans condition de taille. Sur un glacier de 1 200 m3 par an, le diagnostic coûte une part importante de ce qu'il ferait économiser. | **Corrigé, puis annulé par arbitrage humain.** Voir ci-dessous. |
| Le ratio eau sur lait, immédiat et sans investissement, arrive en cinquième position chez la laiterie équipée et en troisième chez le site classé. | **Corrigé.** Son impact était noté 1 alors que le compteur par usage, dont il est le prolongement direct et qui relève du même mécanisme, est noté 2. Incohérence interne, corrigée à 2. Le ratio ouvre désormais le plan de cinq personas sur huit. |
| On propose au site classé d'installer une concentration de lactosérum sans lui proposer de valoriser l'eau qui en sortira : sans ce second volet, le gain eau disparaît et il ne reste que l'économie de transport. | **Corrigé autrement que par un filtre.** Le filtre ne peut pas proposer la valorisation à un site qui n'a pas encore l'équipement. Un avertissement a été ajouté à la mesure de concentration : l'eau séparée n'est pas réutilisable d'office, sa réutilisation relève de la déclaration au préfet et du plan de maîtrise sanitaire, et les deux volets doivent être portés par le même projet. |

### Désaccords assumés

**Le plan vide du site avancé.** Le juge relève qu'un site de 280 000 m3 ayant répondu aux
douze questions reçoit un écran vide, et propose de lui servir le ratio eau sur lait. Ce
serait une mesure indue : ce persona a répondu qu'il suit déjà un ratio rapporté au lait
traité, information dont le juge ne disposait pas, ne voyant que les descriptions. Le juge
reconnaît d'ailleurs que « le plan vide est logiquement correct ».

Le problème est réel mais il n'est pas dans le référentiel : une entreprise qui fait déjà
tout ce que la bibliothèque propose doit recevoir une reconnaissance explicite, pas une
page vide. **C'est une évolution d'interface à porter côté Synthèse**, pas un filtre à
ajouter. Consigné comme tel pour la revue.

**L'ordre sur le site de poudres.** Le juge veut les eaux issues du lait en première
position, avant l'optimisation de la NEP, au motif que les condensats perdus pèsent
plusieurs ordres de grandeur de plus qu'un réglage de NEP déjà propre. Il a raison sur le
fond. Mais le tri du plan d'action est global : impact multiplié par facilité, puis
horizon. Les deux mesures sont à égalité de score (3 × 2), et l'horizon départage en
faveur de la NEP, qui est à court terme quand la valorisation est à moyen terme.

Forcer l'ordre supposerait soit de fausser une note, soit de déclarer à court terme un
projet qui demande une déclaration préfectorale, un traitement et une intégration au plan
de maîtrise sanitaire. Ni l'un ni l'autre n'est honnête. **La vraie réponse est une
évolution du moteur de tri** : pondérer le classement par les axes prioritaires du profil,
de sorte qu'une mesure qui répond à un axe identifié remonte. Le site de poudres a
précisément `eaux_du_lait` parmi ses axes. À remonter comme demande d'évolution de
`actionPanEngine.js`, hors périmètre de ce secteur.

**La répartition des niveaux.** Le juge confirme que la concentration à 83 %
d'intermédiaires est « pour l'essentiel un artefact du tirage », mais estime que le
glacier et l'assistante, tous deux à 33 %, seraient dits novices par un conseiller.

Sur le glacier, c'est la conséquence assumée du principe 1 de la table de discrimination :
ne pas pénaliser une entreprise parce qu'elle n'a pas de lactosérum. L'alternative
consisterait à noter 0 les réponses d'exclusion, donc à dire à un glacier qu'il est mauvais
parce qu'il fait des sorbets.

Sur l'assistante, le juge touche un vrai défaut, mais qui n'est pas dans ce questionnaire :
le moteur retire les réponses « je ne sais pas » avant de calculer le score, si bien qu'un
profil qui saute onze questions sur douze est noté sur la seule question à laquelle il a
répondu. Afficher « intermédiaire » à quelqu'un qui ne sait rien est trompeur. **Demande
d'évolution du moteur de scoring** : pondérer le niveau par le taux de réponse, ou ne pas
afficher de niveau en dessous d'un seuil de complétude. Consigné pour la revue.

**L'audit eau pour les petites structures : le juge n'a pas été suivi.** Les deux juges
ont trouvé l'audit eau externe disproportionné sur de petits volumes, le second relevant
qu'il sortait pour 79 % des profils sans aucune condition de taille. Un filtre
`f_audit_petit_site` avait été ajouté, qui l'écartait sous 5 000 m3 par an et ramenait la
mesure à 44 %.

**Ce filtre a été retiré à la demande du relecteur**, au point d'arrêt de l'étape 4. Le
seuil de 5 000 m3 était un choix de conception sans source, et priver une petite
fromagerie ou un glacier du diagnostic a été jugé plus coûteux que de voir l'audit sortir
souvent. L'audit est donc de nouveau proposé à tous, à 79 % des profils, ce qui reste sous
la limite de 90 % fixée par le guide.

Le désaccord avec le juge est donc tranché en sa défaveur, en connaissance de cause. Si la
question revient sur des réponses réelles, le filtre est reconstituable en une ligne : un
filtre numérique `lt` sur `lait_q03` avec un `remove` de `ACT_AGR_002` en priorité 2.

## Résultat après corrections

- Vérificateur : aucune erreur.
- Simulation : aucune alerte, code de sortie 0.
- 22 filtres, tous déclenchés.
- Fréquence des mesures comprise entre 25 % et 79 %, contre 31 % à 100 % avant le premier
  jugement. La plus fréquente reste l'audit eau, maintenu sans condition de taille par
  arbitrage humain.
- Mesures par plan : minimum 2, médiane 6, maximum 11. Aucun plan vide sur profils
  aléatoires.
- Les huit personas parcourent l'échelle de 14 % à 97 % de maturité.

## Ce qui part à la revue humaine

Trois demandes d'évolution, toutes hors du périmètre d'un référentiel sectoriel :

1. **Synthèse** : prévoir un affichage de reconnaissance quand le plan d'action est vide.
2. **`actionPanEngine.js`** : pondérer le tri du plan par les axes prioritaires du profil.
3. **`questionnaireScoring.js`** : tenir compte du taux de réponse dans le niveau affiché,
   ou masquer le niveau sous un seuil de complétude.
