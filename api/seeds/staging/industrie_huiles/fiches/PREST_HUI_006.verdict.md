# Verdict : PREST_HUI_006 (SIMOP France), passage 1

Agent `controleur-fiche`, 2026-09-27. Sources : 9 citées (8 URL), 8 accessibles.

**VERDICT : incomplet**

Confirmés : nom, SIRET 75404070700012 actif, type equipementier (« conçoit, fabrique et
commercialise », usines au Ham et à Montdidier), couverture nationale, expertises,
téléphone, adresse, LinkedIn.

À corriger ou à sourcer, par ordre d'importance :
1. **Lien ACT_HUI_007 (materiel), confirmé avec réserve** : la gamme vise eaux ménagères et métiers de bouche ; rien sur l'huilerie, les eaux acides, l'hexane ni les obturateurs. À juger par un humain, ou trouver une gamme industrielle sourcée.
2. **Mail simop@simop.fr, introuvable** : protégé par Cloudflare, décodage non vérifiable ; citer la chaîne `data-cfemail` ou une source en clair.
3. **Description** : les séparateurs d'hydrocarbures et bacs de rétention ne sont pas rattachés à l'agroalimentaire par la page agroalimentaire ; reformuler.
4. Extrait SIRET : activité 22.23Z et non 22.29A (ancienne société).
5. `secteurs` : rattachement fondé sur la seule page agroalimentaire générique.

## Passage 2 (après correction), verdict final

**VERDICT du contrôleur : incomplet**, sur le seul mail (chaîne `data-cfemail` citée non visible par son outil) ; tous les autres champs sont confirmés et les corrections du passage 1 faites.

**Vérification de l'orchestrateur (2026-09-27), sans retouche de la fiche** : le code source
brut des pages simop.fr (agroalimentaire, à propos, accueil) contient bien une adresse
protégée par Cloudflare. La clé change à chaque chargement, d'où une chaîne différente de
celle citée ; les trois chaînes lues se décodent toutes en `simop@simop.fr`. Le mail est
donc exact ; seul l'extrait cité n'est pas reproductible tel quel.

Reste à juger en revue : le lien ACT_HUI_007 (materiel) partiel. Gamme orientée eaux grasses domestiques et métiers de bouche, plus les rétentions ; rien sur les eaux acides, l'hexane ni les obturateurs ; aucune référence en huilerie.
