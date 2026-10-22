// Indicateurs de la page Vision territoriale, sans React.
// Chaque indicateur se lit sur la carte des bassins versants avec des classes
// fixes, identiques d'un horizon à l'autre : passer de 2025 à 2050 montre
// donc un vrai changement, pas une échelle recalée.
//
// Couleurs (validées pour une carte, où deux classes quelconques peuvent se
// toucher) : une rampe orange pour les aléas (plus foncé = plus défavorable),
// une rampe bleue pour les grandeurs descriptives, une échelle divergente
// orange / gris / bleu pour les évolutions qui peuvent aller dans les deux sens.

import { CLASSES_STRESS, HORIZON_LABELS, LIBELLES_CLASSE, STRESS_FORT, USAGES, fmtNombre, fmtSigne } from './constatMessages';

// « 12,3 millions », « 45 200 », « 850 »
export function fmtGrand(n) {
  if (n == null) return '-';
  if (Math.abs(n) >= 1e6) {
    const m = n / 1e6;
    return `${fmtNombre(m, m < 10 ? 1 : 0)}\u00a0million${m >= 2 ? 's' : ''}`;
  }
  if (Math.abs(n) >= 1000) return fmtNombre(Math.round(n / 100) * 100);
  return fmtNombre(Math.round(n));
}

export function fmtPct(fraction) {
  if (fraction == null) return '-';
  const v = fraction * 100;
  return `${fmtNombre(v, v > 0 && v < 10 ? 1 : 0)}\u00a0%`;
}


export const RAMPE_ALERTE = ['#fde6cf', '#f6ad72', '#e97f3a', '#c55712', '#7f3305'];
export const RAMPE_EAU = ['#cde2fb', '#86b6ef', '#3987e5', '#1c5cab', '#0d366b'];
export const DIVERGENTE = ['#c55712', '#f6ad72', '#e6e5e1', '#86b6ef', '#2a78d6'];
export const SANS_DONNEE = '#d5d8e2';

// Sous ce nombre d'emplois, la part des emplois dépendants d'un bassin ne
// veut rien dire (deux ou trois établissements suffisent à la faire varier)
export const EMPLOIS_MINIMUM = 200;

// Classe d'une valeur numérique : seuils croissants, une classe de plus que
// de seuils. La valeur égale au seuil tombe dans la classe supérieure.
function indexClasse(valeur, seuils) {
  let i = 0;
  while (i < seuils.length && valeur >= seuils[i]) i += 1;
  return i;
}

const valeurDe = (cle) => (p, h) => p.v?.[cle]?.[h] ?? null;

function partEmploisForte(p) {
  const a = p.activite;
  if (!a?.emplois || a.emplois < EMPLOIS_MINIMUM) return null;
  return (a.forte / a.emplois) * 100;
}

export const GROUPES = [
  { cle: 'tension', label: 'Tension sur la ressource' },
  { cle: 'ressource', label: 'Ressource en eau' },
  { cle: 'climat', label: 'Climat' },
  { cle: 'usages', label: 'Usages et prix' },
  { cle: 'economie', label: 'Activité économique' },
];

// ─── Prélèvements : un indicateur à deux réglages (usage et mesure) ──────────

export const USAGES_PRELEVEMENTS = [
  { cle: 'total', label: 'Tous usages', qualificatif: 'tous usages' },
  { cle: 'agriculture', label: 'Agriculture', qualificatif: "de l'agriculture" },
  { cle: 'aep', label: 'Eau potable', qualificatif: "pour l'eau potable" },
  { cle: 'industrie', label: 'Industrie', qualificatif: "de l'industrie" },
];

export const MESURES_PRELEVEMENTS = [
  { cle: 'volume', label: 'Volume' },
  { cle: 'part', label: 'Part de la ressource' },
  { cle: 'evolution', label: 'Évolution' },
];

// Sous ce volume (Mm³/an), un usage est négligeable dans le bassin : pas
// d'évolution calculée (même seuil que l'onglet Constat)
const SEUIL_PRELEVEMENTS_MM3 = 0.05;

// Volume prélevé en Mm³ pour un usage, ou pour tous
function volumePreleve(p, h, usage) {
  const v = p.x?.prelevements_mm3?.[h];
  if (!v) return null;
  if (usage !== 'total') return v[usage] ?? null;
  return USAGES.reduce((s, u) => s + (v[u.cle] ?? 0), 0);
}

const MESURES = {
  volume: {
    label: 'Prélèvements',
    titre: (u) => `Prélèvements ${u.qualificatif}`,
    sousTitre: "Volume prélevé dans l'année rapporté à la surface du bassin",
    horizons: ['actuel', '2030', '2050'],
    valeur: (u) => (p, h) => {
      const v = volumePreleve(p, h, u.cle);
      return v == null || !p.surface ? null : (v / p.surface) * 1000;
    },
    seuils: [2, 5, 15, 40],
    classes: ['Moins de 2 mm', '2 à 5 mm', '5 à 15 mm', '15 à 40 mm', '40 mm et plus'].map((label, i) => ({ label, couleur: RAMPE_EAU[i] })),
    format: (v) => `${fmtNombre(v, v < 10 ? 1 : 0)}\u00a0mm`,
    aide: "Volume prélevé dans l'année divisé par la surface du bassin : 10 mm, c'est 10 000 m³ par km². Cette intensité se compare d'un bassin à l'autre, quelle que soit sa taille. Aujourd'hui : moyenne des volumes déclarés de 2019 à 2023 (BNPE).",
  },
  part: {
    label: 'Part de la ressource prélevée',
    titre: (u) => `Part de la ressource prélevée, ${u.cle === 'total' ? 'tous usages' : u.label.toLowerCase()}`,
    sousTitre: "Prélèvements de l'année rapportés à l'eau produite par le bassin",
    horizons: ['actuel', '2030', '2050'],
    valeur: (u) => (p, h) => {
      const v = volumePreleve(p, h, u.cle);
      const produite = p.v?.disponibilite?.[h];
      if (v == null || !produite || !p.surface) return null;
      return (v / ((produite * p.surface) / 1000)) * 100;
    },
    seuils: [2, 5, 10, 20],
    classes: ['Moins de 2 %', '2 à 5 %', '5 à 10 %', '10 à 20 %', '20 % et plus'].map((label, i) => ({ label, couleur: RAMPE_ALERTE[i] })),
    format: (v) => (v > 100 ? '>\u00a0100\u00a0%' : `${fmtNombre(v, v < 10 ? 1 : 0)}\u00a0%`),
    aide: "Volume prélevé dans l'année divisé par l'eau que produit le bassin lui-même (ruissellement et infiltration). Les rivières venues de l'amont ne sont pas comptées : un bassin traversé par un grand fleuve peut dépasser 100 % sans manquer d'eau. Le stress hydrique, lui, les intègre.",
  },
  evolution: {
    label: 'Évolution des prélèvements',
    titre: (u) => `Évolution des prélèvements ${u.qualificatif}`,
    sousTitre: "Par rapport aux prélèvements d'aujourd'hui",
    horizons: ['2030', '2050'],
    valeur: (u) => (p, h) => {
      const avant = volumePreleve(p, 'actuel', u.cle);
      const apres = volumePreleve(p, h, u.cle);
      if (avant == null || apres == null || avant < SEUIL_PRELEVEMENTS_MM3) return null;
      return ((apres - avant) / avant) * 100;
    },
    // L'agriculture augmente partout (médiane +46 % en 2050) : sur l'échelle
    // commune, presque tous ses bassins tomberaient dans la dernière classe.
    // Elle a sa propre échelle, en hausse seulement.
    seuils: (u) => (u.cle === 'agriculture' ? [20, 40, 70, 100] : [-10, -2, 2, 20]),
    classes: (u) => (u.cle === 'agriculture'
      ? ['Hausse de moins de 20 % ou baisse', 'Hausse de 20 à 40 %', 'Hausse de 40 à 70 %', 'Hausse de 70 à 100 %', 'Plus que doublés']
        .map((label, i) => ({ label, couleur: RAMPE_ALERTE[i] }))
      : ['Baisse de plus de 10 %', 'Baisse de 2 à 10 %', 'Stable (moins de 2 %)', 'Hausse de 2 à 20 %', 'Hausse de plus de 20 %']
        .map((label, i) => ({ label, couleur: DIVERGENTE[4 - i] }))),
    libelleSansDonnee: 'Prélèvements négligeables',
    format: (v) => fmtSigne(v),
    aide: "Prélèvements projetés en 2030 et 2050, comparés à la moyenne déclarée de 2019 à 2023 (BNPE). La hausse agricole traduit des besoins d'irrigation plus forts avec des étés plus chauds et plus secs. Pour l'industrie, la projection est une baisse quasi uniforme (environ 20 % d'ici 2050) : elle ne distingue pas les territoires.",
  },
};

// Indicateur complet pour un usage et une mesure. `reglages` décrit les
// sélecteurs affichés dans la barre de filtres, avec leur valeur courante.
export function indicateurPrelevements({ usage = 'total', mesure = 'volume' } = {}) {
  const u = USAGES_PRELEVEMENTS.find((x) => x.cle === usage) ?? USAGES_PRELEVEMENTS[0];
  const m = MESURES[mesure] ? mesure : 'volume';
  const def = MESURES[m];
  return {
    cle: 'prelevements',
    groupe: 'usages',
    label: def.label,
    labelMenu: 'Prélèvements',
    titre: def.titre(u),
    sousTitre: def.sousTitre,
    type: 'classes',
    horizons: def.horizons,
    valeur: def.valeur(u),
    seuils: typeof def.seuils === 'function' ? def.seuils(u) : def.seuils,
    classes: typeof def.classes === 'function' ? def.classes(u) : def.classes,
    libelleSansDonnee: def.libelleSansDonnee,
    format: def.format,
    pire: 'haut',
    aide: def.aide,
    unite: m === 'volume' ? 'mm' : 'pts',
    reglages: [
      { cle: 'mesure', label: 'Mesure', choix: MESURES_PRELEVEMENTS, valeur: m },
      { cle: 'usage', label: 'Usage', choix: USAGES_PRELEVEMENTS, valeur: u.cle },
    ],
  };
}

const INDICATEUR_PRELEVEMENTS_DEFAUT = indicateurPrelevements();

// `classes` : une entrée par classe, de la plus favorable à la plus
// défavorable pour les aléas. `pire` : sens du classement des bassins
// ('haut' : les valeurs hautes d'abord).
export const INDICATEURS = [
  {
    cle: 'stress',
    groupe: 'tension',
    label: 'Stress hydrique',
    titre: 'Niveau de stress hydrique',
    type: 'categories',
    horizons: ['actuel', '2030', '2050'],
    valeur: valeurDe('stress'),
    classes: CLASSES_STRESS.map((c, i) => ({ cle: c, label: LIBELLES_CLASSE[c], couleur: RAMPE_ALERTE[i] })),
    format: (v) => LIBELLES_CLASSE[v] ?? '-',
    pire: 'haut',
    rang: (v) => CLASSES_STRESS.indexOf(v),
    aide: "Compare l'eau consommée à l'eau disponible : dans les rivières en août (amont compris), et dans les nappes sur l'année. Le plus sévère des deux donne le niveau du bassin.",
  },
  {
    cle: 'restrictions',
    groupe: 'tension',
    label: 'Restrictions sécheresse',
    titre: "Jours d'arrêté sécheresse par an",
    sousTitre: 'Eaux superficielles, niveau alerte ou plus',
    type: 'classes',
    horizons: ['actuel', '2030', '2050'],
    valeur: valeurDe('restrictions'),
    seuils: [20, 40, 60, 90],
    classes: [
      { label: 'Moins de 20 jours' },
      { label: '20 à 40 jours' },
      { label: '40 à 60 jours' },
      { label: '60 à 90 jours' },
      { label: '90 jours et plus' },
    ].map((c, i) => ({ ...c, couleur: RAMPE_ALERTE[i] })),
    format: (v) => `${fmtNombre(v)}\u00a0j/an`,
    pire: 'haut',
    aide: "En 2025 : moyenne des arrêtés VigiEau observés de 2012 à 2025. En 2030 et 2050 : projection d'après les débits simulés par cinq modèles climatiques, à règles préfectorales inchangées.",
  },
  {
    cle: 'disponibilite',
    groupe: 'ressource',
    label: 'Ressource disponible',
    titre: 'Eau produite par le bassin',
    sousTitre: "Ruissellement et infiltration, en mm par an, sans les apports de l'amont",
    type: 'classes',
    horizons: ['actuel', '2030', '2050'],
    valeur: valeurDe('disponibilite'),
    seuils: [200, 300, 450, 700],
    classes: [
      { label: 'Moins de 200 mm' },
      { label: '200 à 300 mm' },
      { label: '300 à 450 mm' },
      { label: '450 à 700 mm' },
      { label: '700 mm et plus' },
    ].map((c, i) => ({ ...c, couleur: RAMPE_EAU[i] })),
    format: (v) => `${fmtNombre(v)}\u00a0mm/an`,
    pire: 'bas',
    aide: "La part de la pluie qui ne repart pas par évaporation : elle ruisselle vers les rivières ou s'infiltre vers les nappes. 300 mm par an, c'est 300 000 m³ par km². Les rivières venues de l'amont s'y ajoutent : un bassin traversé par un grand fleuve dispose de plus d'eau que ce chiffre.",
  },
  {
    cle: 'etiage',
    groupe: 'ressource',
    label: "Débit d'étiage des rivières",
    titre: "Évolution du débit d'étiage",
    sousTitre: 'Débit mensuel le plus bas (QMNA), par rapport à 1976-2005',
    type: 'classes',
    horizons: ['2030', '2050'],
    valeur: valeurDe('etiage'),
    seuils: [-20, -15, -10, -5],
    classes: [
      { label: 'Baisse de plus de 20 %' },
      { label: 'Baisse de 15 à 20 %' },
      { label: 'Baisse de 10 à 15 %' },
      { label: 'Baisse de 5 à 10 %' },
      { label: 'Baisse de moins de 5 % ou hausse' },
    ].map((c, i) => ({ ...c, couleur: RAMPE_ALERTE[4 - i] })),
    format: (v) => fmtSigne(v),
    pire: 'bas',
    aide: "Débit naturel simulé, sans barrages ni prélèvements. C'est le débit des rivières au plus bas de l'année, en général à la fin de l'été, quand les usages sont les plus forts.",
  },
  {
    cle: 'recharge',
    groupe: 'ressource',
    label: 'Recharge des nappes',
    titre: 'Évolution de la recharge des nappes',
    sousTitre: 'Pluie infiltrée chaque année, par rapport à 1976-2005',
    type: 'classes',
    horizons: ['actuel', '2030', '2050'],
    valeur: valeurDe('recharge'),
    seuils: [-10, -3, 3, 10],
    classes: [
      { label: 'Baisse de plus de 10 %' },
      { label: 'Baisse de 3 à 10 %' },
      { label: 'Stable (moins de 3 %)' },
      { label: 'Hausse de 3 à 10 %' },
      { label: 'Hausse de plus de 10 %' },
    ].map((c, i) => ({ ...c, couleur: DIVERGENTE[i] })),
    format: (v) => fmtSigne(v),
    pire: 'bas',
    aide: "Part de la pluie qui s'infiltre jusqu'aux nappes. Plus chaude, l'atmosphère reprend davantage d'eau par évaporation, même quand le cumul de pluie varie peu.",
  },
  {
    cle: 'sols_secs',
    groupe: 'climat',
    label: 'Jours de sols secs',
    titre: 'Jours de sols secs par an',
    type: 'classes',
    horizons: ['actuel', '2030', '2050'],
    valeur: valeurDe('sols_secs'),
    seuils: [60, 90, 120, 150],
    classes: [
      { label: 'Moins de 60 jours' },
      { label: '60 à 90 jours' },
      { label: '90 à 120 jours' },
      { label: '120 à 150 jours' },
      { label: '150 jours et plus' },
    ].map((c, i) => ({ ...c, couleur: RAMPE_ALERTE[i] })),
    format: (v) => `${fmtNombre(v)}\u00a0j/an`,
    pire: 'haut',
    aide: "Nombre de jours par an où le sol du bassin est sec. Un sol sec infiltre mal la pluie, et il annonce des besoins d'irrigation plus forts.",
  },
  {
    cle: 'temperature',
    groupe: 'climat',
    label: 'Réchauffement',
    titre: 'Écart de température moyenne',
    sousTitre: 'Par rapport à 1976-2005, scénario RCP 8.5',
    type: 'classes',
    horizons: ['actuel', '2030', '2050'],
    valeur: valeurDe('temperature'),
    seuils: [1, 1.5, 2, 2.5],
    classes: [
      { label: 'Moins de +1 °C' },
      { label: '+1 à +1,5 °C' },
      { label: '+1,5 à +2 °C' },
      { label: '+2 à +2,5 °C' },
      { label: '+2,5 °C et plus' },
    ].map((c, i) => ({ ...c, couleur: RAMPE_ALERTE[i] })),
    format: (v) => fmtSigne(v, '°C', 1),
    pire: 'haut',
    aide: 'Température moyenne annuelle du bassin, moyenne de cinq modèles climatiques.',
  },
  {
    cle: 'pluie_ete',
    groupe: 'climat',
    label: "Pluies d'été",
    titre: "Évolution des pluies d'été",
    sousTitre: "Cumul de l'été, par rapport à 1976-2005",
    type: 'classes',
    horizons: ['actuel', '2030', '2050'],
    valeur: valeurDe('pluie_ete'),
    seuils: [-20, -15, -10, -5],
    classes: [
      { label: 'Baisse de plus de 20 %' },
      { label: 'Baisse de 15 à 20 %' },
      { label: 'Baisse de 10 à 15 %' },
      { label: 'Baisse de 5 à 10 %' },
      { label: 'Baisse de moins de 5 %' },
    ].map((c, i) => ({ ...c, couleur: RAMPE_ALERTE[4 - i] })),
    format: (v) => fmtSigne(v),
    pire: 'bas',
    aide: "Les pluies d'été baissent sur tout le territoire. Ce sont elles qui soutiennent les rivières et limitent l'irrigation au moment où la demande est la plus forte.",
  },
  INDICATEUR_PRELEVEMENTS_DEFAUT,
  {
    cle: 'usage',
    groupe: 'usages',
    label: 'Usage dominant',
    titre: 'Premier usage préleveur',
    type: 'categories',
    horizons: ['actuel', '2030', '2050'],
    valeur: valeurDe('usage'),
    classes: USAGES.map((u) => ({ cle: u.cle, label: u.label, couleur: u.couleur })),
    libelleSansDonnee: 'Prélèvements négligeables',
    format: (v) => USAGES.find((u) => u.cle === v)?.label ?? '-',
    aide: "L'usage qui prélève le plus d'eau dans le bassin sur l'année. En été, la part de l'agriculture est souvent bien plus forte que sur l'année.",
  },
  {
    cle: 'prix',
    groupe: 'usages',
    label: "Prix de l'eau",
    titre: "Prix de l'eau",
    sousTitre: 'TTC au m³, assainissement compris, pour 120 m³ par an',
    type: 'classes',
    horizons: ['actuel', '2030', '2050'],
    libellesHorizons: { actuel: '2024' },
    valeur: valeurDe('prix'),
    seuils: [4, 5, 6, 7.5],
    classes: [
      { label: 'Moins de 4 €' },
      { label: '4 à 5 €' },
      { label: '5 à 6 €' },
      { label: '6 à 7,5 €' },
      { label: '7,5 € et plus' },
    ].map((c, i) => ({ ...c, couleur: RAMPE_EAU[i] })),
    format: (v) => `${fmtNombre(v, 2)}\u00a0€/m³`,
    pire: 'haut',
    aide: 'Prix de 2024, projeté en 2030 et 2050 en euros courants.',
  },
  {
    cle: 'emplois',
    groupe: 'economie',
    label: "Emplois très dépendants de l'eau",
    titre: "Part des emplois très dépendants de l'eau",
    sousTitre: 'Emplois salariés estimés, activités de dépendance forte',
    type: 'classes',
    horizons: ['actuel'],
    libellesHorizons: { actuel: "Aujourd'hui" },
    valeur: (p) => partEmploisForte(p),
    seuils: [3, 6, 10, 20],
    classes: [
      { label: 'Moins de 3 %' },
      { label: '3 à 6 %' },
      { label: '6 à 10 %' },
      { label: '10 à 20 %' },
      { label: '20 % et plus' },
    ].map((c, i) => ({ ...c, couleur: RAMPE_EAU[i] })),
    libelleSansDonnee: `Moins de ${EMPLOIS_MINIMUM} emplois`,
    format: (v) => `${fmtNombre(v, v < 10 ? 1 : 0)}\u00a0%`,
    pire: 'haut',
    aide: "Activités notées 3 sur 3 pour leur dépendance à la quantité d'eau dans le référentiel sectoriel (hôpitaux, pharmacie, agroalimentaire, sidérurgie...). Emplois estimés au milieu de la tranche d'effectif INSEE de chaque établissement.",
  },
];

export const INDICATEURS_PAR_CLE = Object.fromEntries(INDICATEURS.map((i) => [i.cle, i]));

// Indicateur décrit par l'URL : sa clé et, s'il en a, ses réglages
export function resoudreIndicateur(cle, reglages = {}) {
  if (cle === 'prelevements') return indicateurPrelevements(reglages);
  return INDICATEURS_PAR_CLE[cle] ?? INDICATEURS_PAR_CLE.stress;
}

export function libelleHorizon(indicateur, h) {
  return indicateur.libellesHorizons?.[h] ?? HORIZON_LABELS[h];
}

// Horizon affichable pour un indicateur : celui demandé s'il existe, sinon
// le plus proche dans le temps (2050 de préférence au futur)
export function horizonValide(indicateur, h) {
  if (indicateur.horizons.includes(h)) return h;
  return h === 'actuel' ? indicateur.horizons[0] : indicateur.horizons[indicateur.horizons.length - 1];
}

// Classe d'un bassin : { index, couleur, label } ou null sans donnée
export function classeDe(indicateur, p, h) {
  const v = indicateur.valeur(p, h);
  if (v == null) return null;
  const index = indicateur.type === 'categories'
    ? indicateur.classes.findIndex((c) => c.cle === v)
    : indexClasse(v, indicateur.seuils);
  if (index < 0) return null;
  return { index, ...indicateur.classes[index] };
}

export function couleurDe(indicateur, p, h) {
  return classeDe(indicateur, p, h)?.couleur ?? SANS_DONNEE;
}

// Valeur comparable pour trier, la pire en premier ; null en dernier
export function cleTri(indicateur, p, h) {
  const v = indicateur.valeur(p, h);
  if (v == null) return null;
  const n = indicateur.rang ? indicateur.rang(v) : v;
  return indicateur.pire === 'bas' ? -n : n;
}

// ─── Synthèse d'un territoire ─────────────────────────────────────────────────

const somme = (liste, f) => liste.reduce((s, x) => s + (f(x) ?? 0), 0);

// Nombre de bassins et population par classe, pour la légende et les barres
export function repartition(indicateur, bassins, h) {
  const classes = indicateur.classes.map((c) => ({ ...c, bassins: 0, population: 0 }));
  const sansDonnee = { label: indicateur.libelleSansDonnee ?? 'Non calculé', couleur: SANS_DONNEE, bassins: 0, population: 0 };
  for (const p of bassins) {
    const c = classeDe(indicateur, p, h);
    const cible = c ? classes[c.index] : sansDonnee;
    cible.bassins += 1;
    cible.population += p.population ?? 0;
  }
  return { classes, sansDonnee };
}

// Chiffres clés d'un ensemble de bassins, aux horizons actuel et 2050
export function syntheseTerritoire(bassins) {
  const population = somme(bassins, (p) => p.population);
  const surface = somme(bassins, (p) => p.surface);

  const enStress = (h) => bassins.filter((p) => STRESS_FORT.includes(p.v?.stress?.[h]));
  const stress = Object.fromEntries(['actuel', '2050'].map((h) => {
    const liste = enStress(h);
    const pop = somme(liste, (p) => p.population);
    return [h, { bassins: liste.length, population: pop, part: population ? pop / population : null }];
  }));

  // Jours de restriction : moyenne pondérée par la population (un habitant,
  // un salarié vit la restriction de son bassin)
  const restrictions = Object.fromEntries(['actuel', '2050'].map((h) => {
    const avec = bassins.filter((p) => p.v?.restrictions?.[h] != null && p.population);
    const poids = somme(avec, (p) => p.population);
    return [h, poids ? somme(avec, (p) => p.v.restrictions[h] * p.population) / poids : null];
  }));

  const emplois = somme(bassins, (p) => p.activite?.emplois);
  const forte = somme(bassins, (p) => p.activite?.forte);
  const forteEnStress = somme(enStress('2050'), (p) => p.activite?.forte);

  return {
    bassins: bassins.length,
    population,
    surface,
    stress,
    restrictions,
    emplois: { total: emplois, forte, forteEnStress2050: forteEnStress, part: forte ? forteEnStress / forte : null },
  };
}

// Emprise [[ouest, sud], [est, nord]] d'un ensemble de bassins
export function emprise(bassins) {
  if (!bassins.length) return null;
  let [o, s, e, n] = [180, 90, -180, -90];
  for (const p of bassins) {
    const [x1, y1, x2, y2] = p.bbox;
    o = Math.min(o, x1); s = Math.min(s, y1); e = Math.max(e, x2); n = Math.max(n, y2);
  }
  return [[o, s], [e, n]];
}
