# Verdict du contrôleur : PREST_ART_002 (Chefneux Assainissement)

Premier passage, 2026-10-15.

Verdict : incomplet. Aucun champ contredit ; l'adresse mail n'est confirmée par aucune source citée.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Chefneux Assainissement | confirmé | Mentions légales : « Raison sociale : CHEFNEUX ASSAINISSEMENT ». SIRENE donne « THIERRY CHEFNEUX ASSAINISSEMENT » ; le site emploie la forme courte. |
| type | installateur | confirmé (classement) | Page bac-graisse : « Pompage des graisses et des boues. Nettoyage haute pression du bac. » Entreprise de travaux d'entretien, ne fabrique pas. Aucune pose décrite, ce que la description reconnaît. |
| siret | 33100471300037 | confirmé | Mentions légales : « SIRET : 331 004 713 00037 ». API Recherche d'entreprises : siège 33100471300037, état A. |
| departements | 01, 38, 42, 69 | confirmé | Page bac-graisse : « Rhône (69), Isère (38), Loire (42) et Ain (01) ». |
| expertises : vidange de bacs à graisse | idem | confirmé | « Pompage des graisses et des boues », « certificat de vidange ». |
| expertises : contrat d'entretien | idem | confirmé | « Contrat bac à graisse : de mensuel à trimestriel, incluant vidange, nettoyage et vérification de l'écoulement ». |
| expertises : contrôle du séparateur | idem | confirmé | « Contrôle de l'état du séparateur et vérification des entrées et sorties ». |
| expertises : bordereau de suivi des déchets | idem | confirmé | « Bordereau de suivi des déchets (BSD), certificat de vidange, rapport d'intervention détaillé ». |
| mesures : ACT_ART_006 [travaux] | travaux | confirmé | La source décrit vidange, nettoyage et contrat d'entretien ; le dimensionnement et la pose ne sont pas couverts. |
| contact site_internet | https://www.chefneux.com/ | confirmé | L'URL répond. |
| contact tel | 04 78 73 02 65 | confirmé | Page bac-graisse et mentions légales. |
| contact mail | contact@chefneux.com | introuvable | Masquée par « /cdn-cgi/l/email-protection » sur les pages citées ; décodée par le rédacteur depuis le code de la page, non vérifiable. |
| contact adresse | ZAC du Baconnet, 57 allée des Érables, 69700 Montagny | confirmé | Mentions légales et SIRENE. |
| description | Montagny, agréé vidangeur, boulangeries et charcuteries, contrat mensuel à trimestriel, pas de pose | confirmé | Mentions légales (agrément 2020-NS-069-0001) et page bac-graisse. |
| categories | agir_rejets_qualite | confirmé | Cohérent avec la prestation et ACT_ART_006. |
| secteurs | artisanat_alimentaire | confirmé | Cible de la page bac-graisse. |
| logo_url | Cloudinary PREST_ART_002.png | non contrôlé | Hors champs factuels. |

SOURCES : 6 citées (4 URL distinctes), toutes accessibles.

VERDICT : incomplet

Champs à corriger ou à sourcer, par ordre d'importance :
1. `contacts` mail : source où l'adresse apparaît en clair, ou retirer le contact.
2. ACT_ART_006 [travaux] : confirmé pour l'entretien ; la partie « installer et dimensionner » n'est pas couverte par ce prestataire (la description le dit).
3. `type` installateur : acceptable, l'entreprise est un vidangeur et non un poseur.
4. `nom` : forme courte conforme au site, pas d'action.

## Second contrôle, 2026-10-15 (après retrait du contact mail)

18 champs confirmés, aucun contredit ni introuvable. SOURCES : 6 citées (4 URL distinctes), accessibles.

VERDICT : conforme

Réserves de forme, sans correction obligatoire :
1. Le lien ACT_ART_006 ne couvre que l'entretien (vidange, contrat) ; la pose et le dimensionnement
   du séparateur demandent un autre prestataire.
2. Type `installateur` : l'activité sourcée est l'entretien, pas l'installation ; pas de type plus
   proche dans le vocabulaire.
3. L'expertise « Bordereau de suivi des déchets » désigne un document remis (libellé).
4. L'agrément vidangeur 2020-NS-069-0001 vise l'assainissement non collectif.
