/**
 * solutionsMatching.js
 *
 * Apparie les fiches servies par GET /solutions (prestataires ou aides, déjà
 * filtrées par secteur, département et agence côté API) aux mesures du plan
 * d'action.
 *
 * Chaque fiche porte `mesures` : [{ id, roles }], les liens explicites vers
 * les mesures. Pour chaque mesure du plan :
 *   1. les fiches explicitement liées à la mesure sont retenues ;
 *   2. s'il n'y en a aucune dans le territoire, on retombe sur les fiches de la
 *      catégorie de la mesure. Avec `repliTransversales: false`, les fiches
 *      transversales (secteurs vide) sont exclues de ce repli.
 *
 * Chaque fiche retenue reçoit `couverture` : la liste des mesures qu'elle
 * couvre, avec l'origine du rapprochement ('lien' ou 'categorie') et les rôles
 * du lien (ce que la fiche fait pour cette mesure).
 */

export const ROLE_LABELS = {
  conseil_etude: 'Conseil et étude',
  travaux:       'Travaux',
  materiel:      'Matériel',
  formation:     'Formation',
  financement:   'Financement',
};

// Types de prestataire et d'aide (vocabulaires fermés, TYPES_PRESTATAIRE et
// TYPES_AIDE dans api/referentiel_verif.py)
export const TYPE_PRESTATAIRE = {
  chambre_consulaire:     'Chambre consulaire',
  bureau_etudes:          "Bureau d'études",
  organisme_technique:    'Organisme technique',
  organisme_formation:    'Organisme de formation',
  cooperative:            'Coopérative',
  syndicat_professionnel: 'Syndicat professionnel',
  collectivite:           'Collectivité',
  agence_publique:        'Agence publique',
  equipementier:          'Équipementier',
  installateur:           'Installateur',
  solution_numerique:     'Solution numérique',
  association:            'Association',
};

export const TYPE_AIDE = {
  subvention:     'Subvention',
  pret:           'Prêt bonifié',
  credit_impot:   "Crédit d'impôt",
  accompagnement: 'Accompagnement',
};

export function roleLabels(roles) {
  return (roles ?? []).map(r => ROLE_LABELS[r] ?? r);
}

function lienVers(fiche, actionId) {
  return fiche.mesures?.find(m => m.id === actionId);
}

export function matchSolutions(fiches, actionPlan, { repliTransversales = true } = {}) {
  const retenues = new Map();
  // Une fiche transversale (secteurs vide) est visible par tous les secteurs :
  // en repli de catégorie, elle remonterait sur des mesures d'autres métiers
  // que le sien. Sans repli, elle ne sort que par ses liens explicites.
  const enRepli = f => repliTransversales || f.secteurs?.length > 0;

  const ajouter = (fiche, mesure, via, roles = []) => {
    if (!retenues.has(fiche.id)) retenues.set(fiche.id, { ...fiche, couverture: [] });
    retenues.get(fiche.id).couverture.push({ mesure, via, roles });
  };

  for (const mesure of actionPlan) {
    const liees = fiches.filter(f => lienVers(f, mesure.id));
    if (liees.length > 0) {
      liees.forEach(f => ajouter(f, mesure, 'lien', lienVers(f, mesure.id).roles));
      continue;
    }
    fiches
      .filter(f => enRepli(f) && f.categories?.includes(mesure.categorie))
      .forEach(f => ajouter(f, mesure, 'categorie'));
  }

  // Liens explicites d'abord, puis nombre de mesures couvertes, puis les
  // fiches locales avant les nationales.
  const nbLiens = f => f.couverture.filter(c => c.via === 'lien').length;
  return [...retenues.values()].sort((a, b) => {
    if (nbLiens(b) !== nbLiens(a)) return nbLiens(b) - nbLiens(a);
    if (b.couverture.length !== a.couverture.length) return b.couverture.length - a.couverture.length;
    return estLocale(b) - estLocale(a);
  });
}

/**
 * Fiches explicitement liées à une mesure, chacune enrichie des rôles du lien,
 * pour l'affichage sur la carte de la mesure.
 */
export function fichesLieesA(fiches, actionId) {
  return (fiches ?? [])
    .map(f => ({ fiche: f, lien: lienVers(f, actionId) }))
    .filter(({ lien }) => lien)
    .map(({ fiche, lien }) => ({ ...fiche, roles: lien.roles ?? [] }));
}

export function estLocale(fiche) {
  return fiche.departements?.length > 0 ? 1 : 0;
}

/**
 * Libellé de couverture territoriale. L'API ayant déjà filtré sur le
 * département de l'établissement, une fiche non nationale le couvre forcément.
 */
export function territoireLabel(fiche) {
  return estLocale(fiche)
    ? { label: 'Dans votre département', icon: '📍' }
    : { label: 'National', icon: '🇫🇷' };
}
