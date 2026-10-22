# Verdict : PREST_HOT_018 (Odalie, groupe Saur)

Agent `controleur-fiche`, premier passage, 2026-09-24.

Confirmés : nom, type `installateur` avec réserve (« Installation de sous compteurs, Mise en place du réseau de télérelève » ; Aquapod « Fabriqué en France » ferait pencher vers `equipementier`), SIRET 33937998405975 avec réserve (siège de Saur, rattachement d'Odalie non établi), couverture nationale avec réserve (six zones commerciales), quatre expertises, secteur, catégories, liens ACT_HOT_007 [materiel] et ACT_AGR_001 [materiel], contacts.

- **ACT_AGR_001, rôle `travaux` : contredit.** « Installation sans travaux », « aucun chantier », « un simple branchement ».
- **description, « Marque du groupe Saur » : contredit.** Page d'accueil : « Odalie, filiale de Saur ».

SOURCES : 7 citées, 7 accessibles

VERDICT : à corriger

1. Retirer `travaux` sur ACT_AGR_001.
2. SIRET et rattachement : chercher « Odalie » dans l'API ; aligner « marque » ou « filiale » sur la source.
3. Type : `equipementier` si une source établit qu'Odalie conçoit et fait fabriquer, sinon `installateur`. Arbitrage.
4. Couverture : `[]` acceptable avec réserve.
5. Information : Aquapod (eau de piscine vers chasses et arrosage) n'est lié à aucune mesure.

## Second passage, 2026-09-24

Correction appliquée : rôle `travaux` retiré, « filiale de Saur », recherche « Odalie » dans l'API (aucune entité), SIRET de Saur conservé. Tous les champs confirmés.

VERDICT : conforme

Points à trancher à la revue : type `installateur` ou `equipementier` (Aquapod « fabriqué en France », non lié à une mesure) ; SAUR BUILDING WATER SOLUTIONS (93114927200011) à la même adresse, non reliée à Odalie par une source ; extrait de la deuxième source cite deux recherches sans URL ; lien possible Aquapod vers ACT_HOT_005, non sourcé.
