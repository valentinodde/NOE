# Verdict : AIDE_HOT_004 (Pass Transformation Écologique, Occitanie)

Agent `controleur-fiche`, premier passage, 2026-09-24.

PDF lus depuis leurs copies locales (fiche 06/2026 et ancienne fiche).

Confirmés : nom, financeur, type, taux 35 %, plafond 8 000 € et assiette 5 000 €, 1 000 € HT par dépense, thématiques, eau de pluie et réutilisation des eaux usées, végétalisation réservée au tourisme, conditions sur le matériel, éligibilité (tourisme, RCS, 1 à 49 salariés, Occitanie hors métropoles, hors zones d'activités, hôtels 2 étoiles hors chaînes et franchises), agences vides, lien ACT_AGR_006, avertissements, démarche Ad'Occ, ancienne version, page et PDF.

- **ACT_HOT_006 : introuvable.** Seule la végétalisation et la désimperméabilisation sont citées ; rien sur l'arrosage ni les essences.
- **description, « étanchéité des réseaux » côté eau : introuvable.** Le PDF la range en sobriété énergétique ; l'extrait fusionne deux rubriques avec « [...] ».
- **departements : liste introuvable** dans l'API citée (périmètre Occitanie confirmé par laregion.fr).
- Info 5 : omet le taux de 50 % de l'ancienne version.
- Ressource HubEntreprendre : page non lisible (JavaScript).

SOURCES : 4 citées, 4 accessibles

VERDICT : incomplet

1. Retirer ACT_HOT_006 (et revoir la catégorie qui n'en dépend).
2. Retirer « étanchéité des réseaux » côté eau et corriger l'extrait.
3. Départements : source qui les énumère, ou corriger l'extrait.
4. Info 5 : ajouter l'ancien taux de 50 %.
5. Mineur : ressource HubEntreprendre.

## Second passage, 2026-09-24

Correction appliquée : ACT_HOT_006 et sa catégorie retirés, « étanchéité des réseaux » retirée, départements sourcés par la page Profil de laregion.fr, ancien taux de 50 % ajouté. Confirmés : tous les champs de fond ; seul lien ACT_AGR_006.

- **infos_complementaires[2] : contredit (portée).** L'Impact score est exigé de tout demandeur, pas seulement de l'hébergement.
- Ressource HubEntreprendre : non vérifiable, et le dispositif sur le Hub pointe encore vers l'ancienne fiche (50 %, 10 000 €).
- Extrait de la source API slug (`territories`) non reproductible ; le champ `departements` tient par laregion.fr.

VERDICT : à corriger (définitif, signalé à la revue)

Corrections d'une ligne à faire à la revue : Impact score pour tout demandeur ; avertir que la fiche jointe sur le Hub peut être l'ancienne ; retirer l'extrait API non reproductible.
