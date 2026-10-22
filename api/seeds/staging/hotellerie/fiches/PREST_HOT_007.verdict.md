# Verdict : PREST_HOT_007 (Hôtel Vert)

Agent `controleur-fiche`, premier passage, 2026-09-24.

Confirmés : nom commercial, type `bureau_etudes`, couverture nationale, quatre expertises, lien ACT_HOT_003 [conseil_etude] (indirect, via le critère 19 de la Clef Verte et un article gratuit), site, téléphone, adresse, LinkedIn, tarif de formation, ressources gratuites.

- **siret null : introuvable.** Ni raison sociale, ni SIRET, ni numéro d'organisme de formation dans les sources, malgré le logo Qualiopi. Rapprochement avec AIDORESTO non sourcé.
- **mail : introuvable** (masqué par Cloudflare).
- **description, « consulting sur devis » : introuvable.**

SOURCES : 6 citées, 6 accessibles

VERDICT : incomplet

1. SIRET : une source reliant la marque à une entité juridique (mentions légales, CGV, certificat Qualiopi, LinkedIn), puis vérification ; sans cela la fiche ne remplit pas le critère d'éligibilité du guide (8.1).
2. Lien ACT_HOT_003 : indirect, à garder en tête.
3. « Consulting sur devis » : sourcer ou retirer.
4. Mail : source lisible ou retrait.
5. Tarif : préciser « formule INTRA ».

## Second passage, 2026-09-24

Correction appliquée : mail sourcé par la page contact en JSON (wp-json), « consulting sur devis » retiré, tarif « intra ou inter ». Tous les champs confirmés sauf le SIRET.

- **siret null : introuvable.** L'entreprise n'est pas prouvée active en France (guide 8.1). Piste non sourcée : AIDORESTO (SIRET 89534079200012, même adresse, organisme de formation), à vérifier à la main sur data.inpi.fr (marque).
- Description : « hébergements touristiques » à remplacer par « secteur hôtelier » ; expertise « Affichage linge à la demande » repose sur un modèle gratuit ; formule gratuite pour moins de 50 salariés non mentionnée.

VERDICT : incomplet (définitif, signalé à la revue)

À trancher : publier sans SIRET, relier à AIDORESTO après vérification, ou retirer. Si retirée, ACT_HOT_003 (linge à la demande) n'a plus aucune entreprise privée.
