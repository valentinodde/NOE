# Verdict du contrôleur : PREST_FRL_012 (Veolia Water STI), premier passage

Contrôle du 2026-09-25, agent `controleur-fiche`.

| Champ | Verdict | Justification |
|---|---|---|
| nom (Veolia Water Technologies (Veolia Water STI)) | introuvable en partie | « Veolia Water STI » confirmé (SIREN 353385719) ; « Veolia Water Technologies » désigne l'éditeur du site, Veolia Water Solutions & Technologies (SIREN 414986216) |
| type (installateur) | introuvable | « conception et réalisation » ; activité 28.29B (fabrication) ; Thanium est son propre procédé |
| siret 35338571900433 | confirmé | siège actif |
| departements [] (national) | confirmé | « en France et en Belgique » |
| expertises (3) | confirmé | station de Pineuilh, méthanisation UASB, eau de process |
| description | confirmé | 50 m3/j, 720 kg DCO, novembre 2017 |
| mesures ACT_FRL_008 conseil_etude, travaux | confirmé | « la conception et la réalisation d'une station de traitement des effluents » |
| contact tel 01 45 11 55 55 | introuvable pour cette entité | numéro de l'éditeur (SIREN 414986216) |
| contact adresse | confirmé | API |

SOURCES : 4 citées, 4 accessibles

VERDICT : incomplet

À corriger :
1. `type` : trancher entre `equipementier` et `installateur` avec une source explicite.
2. Téléphone : sourcer celui de Veolia Water STI ou le retirer.
3. `nom` : s'aligner sur l'entité du SIRET, Veolia Water STI, ou sourcer le lien entre les deux noms.

## Second passage (2026-09-25), après correction

Nom aligné sur « Veolia Water STI », téléphone retiré, type gardé `installateur` avec justification
(page certifications : sélection des partenaires, contrôle des travaux, mise en service). Champs confirmés,
sauf :

| Champ | Verdict | Justification |
|---|---|---|
| type (installateur) | contredit, indice indirect | la source citée donne le NAF 28.29B (fabrication) ; la phrase « aucune source consultée n'établit qu'elle fabrique » ne tient pas |
| description, « Filiale de Veolia Water Technologies » | introuvable en partie | les pages disent « Notre filiale » et « groupe Veolia », sans nommer Veolia Water Technologies |
| description, « Pineuilh (33) » | mineur | département absent de la source |
| mesures ACT_FRL_008 conseil_etude, travaux | confirmé | volet tamisage, bassin tampon et traitement seulement, rien sur l'amidon ni les pulpes |

SOURCES : 4 citées, 4 accessibles

VERDICT : à corriger (second passage, verdict conservé pour la revue)
