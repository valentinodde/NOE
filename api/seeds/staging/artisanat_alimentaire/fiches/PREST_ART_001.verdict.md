# Verdict du contrôleur : PREST_ART_001 (CMA de région Auvergne-Rhône-Alpes)

Premier passage, 2026-10-15.

Aucun champ contredit. Les liens ACT_AGR_009 et ACT_ART_001 ne s'appuient sur aucune source explicite.

| Champ | Valeur dans la fiche | Verdict | Justification |
|---|---|---|---|
| nom | Chambre de métiers et de l'artisanat de région Auvergne-Rhône-Alpes | confirmé | API Recherche d'entreprises, raison sociale. |
| type | chambre_consulaire | confirmé | Nature juridique 7381 (organisme consulaire). |
| siret | 13002795600015 | confirmé | API : siège, état A. |
| departements | 12 départements d'Auvergne-Rhône-Alpes | confirmé | « La CMA est présente dans chaque département en Auvergne-Rhône-Alpes. » Codes saisis par la convention région vers départements. |
| expertises : diagnostic eau sur site | | confirmé | Catalogue : « réalisé en 4 heures maximum [...] sur le site de l'entreprise ». |
| expertises : plan d'actions d'économies d'eau | | confirmé | Catalogue : « plan d'action avec des solutions visant à réduire d'au moins 20% vos consommations ». |
| expertises : guide des bonnes pratiques métiers de bouche | | confirmé | Article métiers de bouche : guide avec les agences Loire-Bretagne et RMC, « gestes simples, matériel hydro-économe ». |
| expertises : suivi à un an | | confirmé | Catalogue : « suivi à 1 an ». |
| contacts (site, 3006, adresse) | | confirmés | Pages CMA, API. |
| mesures : ACT_AGR_002 [conseil_etude] | | confirmé | Catalogue : diagnostic de la consommation par poste, état des lieux et plan d'actions. |
| mesures : ACT_AGR_009 [conseil_etude] | | introuvable | Seule accroche : « optimiser votre consommation et anticiper les futures restrictions », phrase d'intention. Le livrable décrit est un plan d'économies d'au moins 20 %, pas un plan de gestion par niveau d'alerte. |
| mesures : ACT_ART_001 [conseil_etude] | | introuvable | Un guide de « gestes simples » et l'analyse des « pratiques quotidiennes », mais aucune formation ou sensibilisation des salariés ou apprentis. |
| categories | suivre_comprendre_maitriser, sensibiliser_former, ameliorer_efficacite_hydrique | à revoir | `sensibiliser_former` ne tient qu'aux deux liens introuvables. |
| description | | confirmé | 4 heures, consommation par poste, 20 %, suivi téléphonique à un an, « 0€ TTC », « entièrement financé par votre CMA et l'agence de l'eau ». |

SOURCES : 6 citées, 6 accessibles

VERDICT : incomplet

Champs à corriger ou à sourcer, par ordre d'importance :
1. Lien ACT_AGR_009 : source d'un accompagnement à un plan de gestion ou d'anticipation des restrictions par niveau d'alerte, sinon retrait.
2. Lien ACT_ART_001 : source d'une formation ou sensibilisation du personnel (catalogue CMA AURA), sinon retrait. Le guide « gestes simples » pourrait servir de ressource dans les infos complémentaires de la mesure.
3. Catégorie `sensibiliser_former` : à retirer si les deux liens tombent.
4. departements (mineur) : aucune source n'énumère les codes ; la gratuité du diagnostic dans la partie Adour-Garonne de la région (Cantal) n'est pas établie.

## Second passage du rédacteur, 2026-10-15

Aucune page CMA AURA ne décrit un plan de gestion par niveau d'alerte ni une formation du personnel
aux gestes économes : liens ACT_AGR_009 et ACT_ART_001 retirés, catégorie `sensibiliser_former`
retirée. Reste ACT_AGR_002 [conseil_etude], confirmé au premier contrôle. `verifier-fiche` : 0 erreur.

Statut retenu : conforme après retrait des deux liens introuvables (tous les champs restants avaient
été confirmés ; pas de second contrôle).

Ressource trouvée : guide CMA AURA « Métiers de bouche, le guide pour réduire la consommation d'eau »
(janvier 2026), https://www.cma-auvergnerhonealpes.fr/nos-publications/metiers-de-bouche-le-guide-pour-reduire-la-consommation-deau/
(PDF : https://www.cma-auvergnerhonealpes.fr/app/uploads/2026/02/guide-economie-deau-metiers-de-bouche.pdf),
candidat aux infos complémentaires d'ACT_ART_001.
