// Filtres, états et tris de la page Fiches solutions (explorateur des fiches
// prestataires, aides et mesures, publiées ou en staging). Sans React.

import { DEPARTEMENTS } from './territoiresFrance';

export const ONGLETS = [
  { cle: 'mesures',      label: 'Mesures' },
  { cle: 'prestataires', label: 'Apporteurs de solutions' },
  { cle: 'aides',        label: 'Aides' },
];

// Filtres proposés dans chaque onglet (les autres paramètres d'URL sont ignorés)
export const FILTRES_PAR_ONGLET = {
  mesures:      ['q', 'secteur', 'categorie', 'horizon', 'etat'],
  prestataires: ['q', 'secteur', 'categorie', 'type', 'territoire', 'etat', 'mesure'],
  aides:        ['q', 'secteur', 'categorie', 'type', 'territoire', 'etat', 'mesure'],
};
export const TOUS_FILTRES = [...new Set(Object.values(FILTRES_PAR_ONGLET).flat())];

export const AGENCES = {
  AEAP:  'Artois-Picardie',
  AERM:  'Rhin-Meuse',
  AESN:  'Seine-Normandie',
  AELB:  'Loire-Bretagne',
  AEAG:  'Adour-Garonne',
  AERMC: 'Rhône-Méditerranée-Corse',
};

const DOM = { 971: 'Guadeloupe', 972: 'Martinique', 973: 'Guyane', 974: 'La Réunion', 976: 'Mayotte' };

export function nomDepartement(code) {
  return DEPARTEMENTS[code] ?? DOM[code] ?? code;
}

// ─── Vocabulaire des mesures (HORIZONS et NIVEAUX_EFFORT de referentiel_verif) ─

export const HORIZONS = {
  immediat:    'Immédiat',
  court_terme: 'Court terme',
  moyen_terme: 'Moyen terme',
};

export const NIVEAUX_EFFORT = {
  faible:    { points: 1, label: 'Faible' },
  moyen:     { points: 2, label: 'Moyen' },
  important: { points: 3, label: 'Important' },
};

export const NOTES = { 1: 'Faible', 2: 'Moyen', 3: 'Fort' };

// Effet d'un déclencheur du plan d'action sur la mesure
export const EFFETS = {
  toujours: { label: 'Toujours proposée', positif: true },
  add:      { label: 'Ajoutée si', positif: true },
  remove:   { label: 'Retirée si', positif: false },
  jamais:   { label: 'Jamais proposée', positif: false },
};

// ─── États de rédaction ───────────────────────────────────────────────────────
// Une fiche est dans les seeds publiés (statut publie ou brouillon), ou
// seulement dans le staging. Le verdict vient du contrôleur de fiche, les
// contrôles de api/referentiel_verif.py. `onglets` : états propres à certains
// onglets (tous sinon).

// Verdict du contrôleur de fiche (première ligne VERDICT du .verdict.md)
export const VERDICTS = {
  conforme:   { ton: 'vert',  label: 'Conforme' },
  incomplet:  { ton: 'jaune', label: 'Incomplet' },
  a_corriger: { ton: 'rouge', label: 'À corriger' },
};

const FICHES = ['prestataires', 'aides'];

export const ETATS = [
  { cle: 'publie',       label: 'Publiées',             test: f => f.edition.dans_seeds && f.statut === 'publie' },
  { cle: 'brouillon',    label: 'Brouillons',           test: f => f.statut === 'brouillon' },
  { cle: 'hors_seeds',   label: 'Seulement en staging', test: f => !f.edition.dans_seeds },
  { cle: 'modifiee',     label: 'Modifiées en staging', test: f => f.edition.modifiee },
  { cle: 'a_corriger',   label: 'Verdict à corriger',   test: f => f.edition.verdict?.etat === 'a_corriger', onglets: FICHES },
  { cle: 'incomplet',    label: 'Verdict incomplet',    test: f => f.edition.verdict?.etat === 'incomplet', onglets: FICHES },
  { cle: 'conforme',     label: 'Verdict conforme',     test: f => f.edition.verdict?.etat === 'conforme', onglets: FICHES },
  { cle: 'sans_verdict', label: 'Sans verdict',         test: f => !f.edition.verdict, onglets: FICHES },
  { cle: 'non_proposee', label: 'Jamais ajoutées au plan', test: f => !f.declencheurs?.some(d => EFFETS[d.effet]?.positif), onglets: ['mesures'] },
  { cle: 'sans_prestataire', label: 'Sans apporteur lié', test: f => !f.solutions?.prestataires.length, onglets: ['mesures'] },
  { cle: 'sans_aide',    label: 'Sans aide liée',       test: f => !f.solutions?.aides.length, onglets: ['mesures'] },
  { cle: 'controles',    label: 'Alertes de contrôle',  test: f => f.edition.erreurs.length > 0 || f.edition.avertissements.length > 0 },
  { cle: 'sans_source',  label: 'Sans source',          test: f => !f.sources?.length },
];

export function etatsDe(onglet) {
  return ETATS.filter(e => !e.onglets || e.onglets.includes(onglet));
}

// Les compteurs affichés au-dessus de la liste (un clic filtre)
export const COMPTEURS = {
  mesures:      ['publie', 'brouillon', 'hors_seeds', 'modifiee', 'non_proposee', 'sans_prestataire', 'sans_aide', 'controles'],
  prestataires: ['publie', 'brouillon', 'hors_seeds', 'modifiee', 'a_corriger', 'incomplet', 'controles', 'sans_source'],
  aides:        ['publie', 'brouillon', 'hors_seeds', 'modifiee', 'a_corriger', 'incomplet', 'controles', 'sans_source'],
};

export function trisDe(onglet) {
  return [
    { cle: 'nom',    label: onglet === 'mesures' ? 'Titre' : 'Nom' },
    { cle: 'id',     label: 'Identifiant' },
    { cle: 'date',   label: 'Mise à jour récente' },
    { cle: 'liens',  label: onglet === 'mesures' ? 'Nombre de solutions liées' : 'Nombre de mesures liées' },
  ];
}

// ─── Lecture d'une fiche ──────────────────────────────────────────────────────

export function nomDe(fiche) {
  return fiche.nom ?? fiche.titre_court ?? fiche.titre ?? fiche.id;
}

export function idsMesures(fiche) {
  return (fiche.mesures ?? []).map(m => (typeof m === 'string' ? m : m.id));
}

export function liensMesures(fiche) {
  return (fiche.mesures ?? []).map(m => (typeof m === 'string' ? { id: m, roles: [] } : { id: m.id, roles: m.roles ?? [] }));
}

// Nombre de liens d'une ligne : mesures liées pour une fiche, solutions
// (apporteurs et aides) pour une mesure
export function nbLiens(fiche) {
  return fiche.solutions
    ? fiche.solutions.prestataires.length + fiche.solutions.aides.length
    : idsMesures(fiche).length;
}

/**
 * Ajoute à chaque mesure `solutions` : les prestataires et les aides qui lui
 * sont explicitement liés, chacun avec les rôles du lien.
 */
export function avecSolutions(mesures, prestataires, aides) {
  const index = new Map(mesures.map(m => [m.id, { prestataires: [], aides: [] }]));
  for (const [cle, fiches] of [['prestataires', prestataires], ['aides', aides]]) {
    for (const fiche of fiches) {
      for (const { id, roles } of liensMesures(fiche)) index.get(id)?.[cle].push({ fiche, roles });
    }
  }
  return mesures.map(m => ({ ...m, solutions: index.get(m.id) }));
}

export function libelleTerritoire(fiche) {
  const deps = fiche.departements ?? [];
  const agences = fiche.agences ?? [];
  const parts = [];
  if (deps.length === 0) parts.push('National');
  else if (deps.length <= 2) parts.push(deps.map(d => `${d} ${nomDepartement(d)}`).join(', '));
  else parts.push(`${deps.length} départements`);
  if (agences.length) parts.push(agences.length === 1 ? `agence ${AGENCES[agences[0]] ?? agences[0]}` : `${agences.length} agences`);
  return parts.join(', ');
}

function normaliser(texte) {
  return (texte ?? '').toString().normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

function texteRecherche(fiche) {
  return normaliser([
    fiche.id, fiche.nom, fiche.titre, fiche.titre_court, fiche.financeur, fiche.siret, fiche.description, fiche.eligibilite,
    ...(fiche.expertises ?? []),
  ].join(' '));
}

export function fmtDate(iso) {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00`);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function hote(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch { return url; }
}

// ─── Filtrage ─────────────────────────────────────────────────────────────────
// `filtres` : { q, secteur, categorie, type, horizon, territoire, etat, mesure },
// valeurs vides ignorées. `territoire` : 'national', 'local', 'dep-XX' ou
// 'ag-CODE'. Une mesure a une seule `categorie`, une fiche une liste.

export function filtrer(fiches, filtres, { sauf } = {}) {
  const q = normaliser(filtres.q).trim();
  const actif = cle => cle !== sauf && filtres[cle];
  const etat = actif('etat') ? ETATS.find(e => e.cle === filtres.etat) : null;

  return fiches.filter(f => {
    if (q && !q.split(/\s+/).every(mot => texteRecherche(f).includes(mot))) return false;
    if (actif('secteur')) {
      const secteurs = f.secteurs ?? [];
      if (filtres.secteur === 'transversal' ? secteurs.length > 0 : !secteurs.includes(filtres.secteur)) return false;
    }
    if (actif('categorie') && !(f.categories ?? [f.categorie]).includes(filtres.categorie)) return false;
    if (actif('type') && f.type !== filtres.type) return false;
    if (actif('horizon') && f.horizon !== filtres.horizon) return false;
    if (actif('territoire')) {
      const t = filtres.territoire;
      const deps = f.departements ?? [];
      if (t === 'national' && deps.length > 0) return false;
      if (t === 'local' && deps.length === 0) return false;
      if (t.startsWith('dep-') && !deps.includes(t.slice(4))) return false;
      if (t.startsWith('ag-') && !(f.agences ?? []).includes(t.slice(3))) return false;
    }
    if (etat && !etat.test(f)) return false;
    if (actif('mesure') && !idsMesures(f).includes(filtres.mesure)) return false;
    return true;
  });
}

export function trier(fiches, tri) {
  const liste = [...fiches];
  const parNom = (a, b) => nomDe(a).localeCompare(nomDe(b), 'fr');
  switch (tri) {
    case 'id':    return liste.sort((a, b) => a.id.localeCompare(b.id));
    case 'date':  return liste.sort((a, b) => (b.date_maj ?? '').localeCompare(a.date_maj ?? '') || parNom(a, b));
    case 'liens': return liste.sort((a, b) => nbLiens(b) - nbLiens(a) || parNom(a, b));
    default:      return liste.sort(parNom);
  }
}

// Départements et agences effectivement utilisés, pour le menu Territoire
export function territoiresUtilises(fiches) {
  const deps = new Set();
  const agences = new Set();
  for (const f of fiches) {
    (f.departements ?? []).forEach(d => deps.add(d));
    (f.agences ?? []).forEach(a => agences.add(a));
  }
  return {
    departements: [...deps].sort((a, b) => a.localeCompare(b, 'fr', { numeric: true })),
    agences: [...agences].sort(),
  };
}
