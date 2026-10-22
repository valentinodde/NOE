# Modèle de fiche prestataire

Ce document montre ce qu'est une bonne fiche d'apporteur de solutions et comment elle se sourçe. Le schéma complet et les vocabulaires sont dans `api/referentiel_verif.py` ; ce qui suit porte sur la qualité de rédaction.

Les valeurs de contact, de SIRET et de couverture de l'exemple sont **illustratives** : elles montrent la forme, elles ne sont pas à recopier. Une vraie fiche n'a que des valeurs lues sur une source citée.

## Ce qui fait une bonne fiche

1. **Elle répond à « qui appelle-t-on pour cette mesure, et il fait quoi ».** Le lien `mesures` avec ses `roles` est le coeur de la fiche. Une fiche sans aucun lien n'apparaît que par repli de catégorie, c'est-à-dire presque au hasard.
2. **La description dit ce que la structure fait concrètement pour une entreprise du secteur**, en trois phrases : qui elle est, ce qu'elle réalise (les prestations, pas les valeurs), comment on y accède (gratuit, payant, sur adhésion, sur rendez-vous). Pas de texte promotionnel repris du site.
3. **Les expertises sont des prestations nommées**, deux à cinq mots chacune, quatre au plus, que l'entreprise reconnaît (« Diagnostic eau d'exploitation », pas « Expertise environnementale globale »).
4. **La couverture territoriale est vraie.** `departements: []` signifie national et ne se met que pour une structure qui intervient réellement partout. Une chambre départementale liste son département ; une antenne régionale liste ses départements. Un réseau national à antennes départementales donne une fiche par antenne quand les contacts diffèrent, sinon une fiche nationale.
5. **Chaque fait a sa source.** Contacts, SIRET, départements, prestations : une entrée `sources` par champ ou groupe de champs, avec l'URL de la page où on l'a lu et la date. Un champ introuvable reste `null`. On ne complète pas de mémoire.
6. **Le type est le bon.** Chambre consulaire, bureau d'études, organisme technique (instituts, centres techniques), organisme de formation, coopérative, syndicat professionnel, collectivité (syndicat mixte, EPTB), agence publique (ADEME, agence de l'eau), équipementier (fabricant), installateur (entreprise de travaux ou intégrateur qui ne fabrique pas), solution numérique (capteurs et plateforme de suivi, de télérelève ou d'alerte que le client exploite lui-même, sans condition de fabrication en France), association. En cas de double nature, choisir ce qu'elle est juridiquement.
7. **Pour une entreprise privée**, la fiche prouve trois choses, chacune avec sa source : qu'elle est active en France (SIRET lu avec `rechercher-entreprise`, établissement ouvert), qu'elle a travaillé pour le secteur ou affiche une prestation qui le cite (page références, cas client), et, pour un équipementier, qu'elle fabrique en France (page usine, site de production). La description reste factuelle : ce qu'elle fait pour ce secteur, sans reprendre les arguments commerciaux du site. Les choix de cibles suivent la section 8.1 du guide de conception.

## Exemple commenté

```json
{
  "id": "PREST_AGR_011",
  "nom": "Chambre d'agriculture des Deux-Sèvres",
  "type": "chambre_consulaire",
  "logo_url": null,
  "siret": null,
  "description": "Établissement public consulaire au service des exploitants du département. Son pôle eau et irrigation réalise des diagnostics de consommation, accompagne le pilotage de l'irrigation par bilan hydrique et suit les dossiers de retenues de substitution avec la coopérative de l'eau locale. Premier rendez-vous gratuit, prestations ensuite facturées ou prises en charge par des programmes régionaux.",
  "expertises": [
    "Diagnostic eau d'exploitation",
    "Pilotage de l'irrigation",
    "Dossiers retenues de substitution",
    "Conseil réglementaire sécheresse"
  ],
  "categories": [
    "suivre_comprendre_maitriser",
    "ameliorer_efficacite_hydrique",
    "agir_grand_cycle"
  ],
  "secteurs": ["agriculture"],
  "departements": ["79"],
  "mesures": [
    { "id": "ACT_AGR_002", "roles": ["conseil_etude"] },
    { "id": "ACT_AGR_003", "roles": ["conseil_etude", "formation"] },
    { "id": "ACT_AGR_005", "roles": ["conseil_etude"] },
    { "id": "ACT_AGR_010", "roles": ["conseil_etude"] }
  ],
  "contacts": [
    { "type": "site_internet", "value": "https://deux-sevres.chambre-agriculture.fr" },
    { "type": "tel", "value": "05 49 77 15 15" },
    { "type": "adresse", "value": "Les Ruralies, CS 80004, 79231 Prahecq Cedex" }
  ],
  "statut": "brouillon",
  "sources": [
    {
      "champ": "contacts",
      "url": "https://deux-sevres.chambre-agriculture.fr/nous-contacter/",
      "date": "2026-09-22",
      "extrait": "Les Ruralies, CS 80004, 79231 PRAHECQ Cedex. Tél. 05 49 77 15 15"
    },
    {
      "champ": "expertises, mesures",
      "url": "https://deux-sevres.chambre-agriculture.fr/irrigation-eau/",
      "date": "2026-09-22",
      "extrait": "Diagnostic irrigation, conseil au pilotage par bilan hydrique, accompagnement des projets de stockage"
    }
  ],
  "date_maj": "2026-09-22"
}
```

Ce qu'il faut voir dans cet exemple :

- Les **rôles** distinguent ce que la chambre fait vraiment : elle conseille et forme au pilotage, elle instruit un dossier de retenue mais ne la construit pas (pas de rôle `travaux`), elle ne finance rien (pas de rôle `financement`).
- Le lien vers ACT_AGR_005 (retenue) est présent parce que la page source parle d'accompagnement des projets de stockage. Sans cette phrase, pas de lien.
- Les **catégories** sont celles des mesures liées, plus éventuellement celles où la structure agit sans mesure précise. Elles ne servent qu'au repli.
- `siret` et `logo_url` sont `null` faute d'avoir été lus sur une source. On ne devine pas un SIRET ; on le lit sur l'API Recherche d'entreprises (`api/outils_fiches.py rechercher-entreprise`) et on cite cette recherche en source.
- Le logo se cherche pour chaque fiche. On prend l'image sur le site de la structure, de préférence le symbole carré (le cadre d'affichage est un carré de 40 px sur fond blanc, donc ni logo en longueur ni version blanche), et on la dépose avec `api/outils_fiches.py logo <ID> <url>`. Le fichier est rangé sur Cloudinary (`Noe assets/logos/<ID>.png`) et l'URL renvoyée va dans `logo_url`, avec l'image d'origine en source. On ne pointe jamais directement vers le site de la structure : le lien casse à la prochaine refonte.
- Deux sources suffisent quand deux pages couvrent les champs. Le champ `champ` liste ce que la source justifie.

## Erreurs fréquentes

- Une fiche « Chambre d'agriculture » nationale avec `departements: []` alors que les prestations, les contacts et les programmes sont départementaux. C'est la fiche générique actuelle, à remplacer par des fiches départementales au fil des besoins.
- Un bureau d'études lié à toutes les mesures de sa catégorie « parce qu'il pourrait ». Le lien dit qu'il l'a fait ou l'affiche comme prestation.
- Un distributeur d'une marque étrangère saisi en `equipementier` comme s'il fabriquait. Sans source sur la fabrication en France, c'est un `installateur` (s'il pose) et la description le dit.
- Une entreprise radiée ou un établissement fermé : toujours vérifier `etat_administratif` avant d'écrire la fiche.
- Une agence de l'eau ou l'ADEME en prestataire parce qu'elle « accompagne » : si elle verse de l'argent, c'est une fiche aide.
- Des expertises recopiées du menu du site (« Nos services », « Innovation »).
- Un numéro de téléphone d'un annuaire tiers. Contacts uniquement depuis le site de la structure ou un annuaire public officiel.
- Le rôle `financement` sur une structure qui aide à monter un dossier : monter le dossier est `conseil_etude` ; `financement` est réservé à qui verse l'argent.
