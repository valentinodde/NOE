# Verdict du contrôleur : PREST_ART_004 (Lyon Froid Cuisines)

Premier passage, 2026-10-15.

Aucun champ contredit. Point bloquant : le lien vers ACT_ART_004, non justifié par les sources.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Lyon Froid Cuisines | confirmé | API Recherche d'entreprises : « LYON FROID CUISINES, SIREN 894904648 ». |
| type | installateur | confirmé | Accueil : « s'occupe de l'installation, la maintenance, et le dépannage des équipements professionnels ». Pas de fabrication. |
| siret | 89490464800025 | confirmé | API : siège ZI de Taffignon, Chaponost, état A. Les mentions légales affichent encore 89490464800017 (Brignais), fermé depuis le 26/03/2024 ; la fiche retient le bon numéro. |
| departements | 12 départements d'Auvergne-Rhône-Alpes | confirmé | Accueil : « en région Auvergne Rhône-Alpes » ; le site dit aussi « implantés sur le département du Rhône ». |
| expertises : chambres froides | idem | confirmé | /froid-commercial/ : « nous installons tout type de chambre froide et de vitrine ». |
| expertises : chambres de pousse | idem | confirmé | /froid-commercial/ : « nous vous fournissons des chambres de pousse ». |
| expertises : renouvellement du matériel réfrigéré | idem | confirmé | /froid-commercial/ : installation, aménagement et maintenance pour le renouveler. |
| expertises : maintenance et dépannage | idem | confirmé | Accueil : « 7j/7 et 24h/24 ». |
| contacts (site, tel, mail, adresse, linkedin) | idem | confirmés | Mentions légales, accueil, API. |
| mesures : ACT_ART_004 [travaux] | Remplacer les équipements de froid refroidis à eau perdue | introuvable | Les sources montrent l'installation et le renouvellement de froid, jamais la prestation propre à la mesure (diagnostic d'un refroidissement à eau perdue, passage à l'air ou en boucle fermée, refroidisseur d'eau). Aucune phrase sur l'eau, l'énergie ou l'environnement. |
| description : métiers servis, matériel, dépannage | idem | confirmé | Accueil et /froid-commercial/. |
| description : « Prestations payantes sur demande » | idem | introuvable | Aucune source ne parle de tarification ni de devis. |
| logo_url | Cloudinary, favicon 115 px | sans objet | Résolution faible, à vérifier visuellement. |

SOURCES : 5 citées, 5 accessibles

VERDICT : incomplet

Champs à corriger ou à sourcer, par ordre d'importance :
1. Lien ACT_ART_004 [travaux] : source explicite (page de prestation, fiche produit, référence chantier) ou retrait du lien. La catégorie `ameliorer_efficacite_hydrique` repose sur la même base.
2. Description, « Prestations payantes sur demande » : à sourcer ou à retirer.
3. SIRET : s'appuyer sur l'API seule, pas sur les mentions légales (ancien SIRET fermé).
4. « Armoires réfrigérées » et « cellules de refroidissement » : sourcées par l'accueil seulement, non bloquant.

## Second passage du rédacteur, 2026-10-15

Aucune mention de condensation à air, d'eau perdue, de refroidisseur d'eau ni de boucle fermée sur les
9 pages du site (seuls des « refroidisseurs de bouteilles »). Lien ACT_ART_004 retiré, `categories`
vidé ; « Prestations payantes sur demande » remplacé par « Interventions sur demande de devis »
(sourcé) ; SIRET sourcé par l'API seule. `verifier-fiche` : 0 erreur.

**Décision** : la fiche n'a plus aucune mesure du secteur. Elle n'est pas assemblée dans
`prestataires_artisanat_alimentaire.json`, comme PREST_ART_006. Pas de second contrôle.
