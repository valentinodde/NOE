/* Vulnerability levels mapped to the design system palette:
   - low   → tertiary (hydro-blue), environmental, informational
   - medium → secondary-light (orange-amber), caution
   - high   → secondary (deep orange), critical, immediate attention */
export const VULNERABILITY_CONFIG = {
  low: {
    label: 'Faible',
    bg: 'rgba(0, 151, 214, 0.10)',
    color: '#001421',
    dot: '#0097d6',
  },
  medium: {
    label: 'Modéré',
    bg: 'rgba(254, 133, 31, 0.12)',
    color: '#964900',
    dot: '#fe851f',
  },
  high: {
    label: 'Élevé',
    bg: 'rgba(150, 73, 0, 0.12)',
    color: '#964900',
    dot: '#964900',
  },
};

export function getVulnerabilityConfig(level) {
  return VULNERABILITY_CONFIG[level] || VULNERABILITY_CONFIG.low;
}

export function formatScore(score) {
  if (score == null) return '-';
  return Number(score).toFixed(1);
}

export function getCategorieJuridiqueLabel(code) {
  const categories = {
    1000: 'Entrepreneur individuel',
    5710: 'SAS',
    5720: 'SASU',
    5498: 'SARL',
    5308: 'SA',
    6540: 'Société civile',
    9220: 'Association',
  };
  return categories[code] || `Cat. ${code}`;
}

// --- Risk level -> visual styles ---

export function getRiskColors(niveau) {
  const n = niveau?.toLowerCase();
  if (n === 'tres_faible')             return { bar: '#86efac', bg: '#f0fdf4', text: '#166534' };
  if (n === 'faible')                  return { bar: '#22c55e', bg: '#dcfce7', text: '#166534' };
  if (n === 'modere' || n === 'modéré') return { bar: '#f59e0b', bg: '#fef3c7', text: '#92400e' };
  if (n === 'eleve'  || n === 'élevé')  return { bar: '#f97316', bg: '#ffedd5', text: '#9a3412' };
  if (n === 'fort'   || n === 'critique') return { bar: '#ef4444', bg: '#fee2e2', text: '#991b1b' };
  return { bar: '#94a3b8', bg: '#f1f5f9', text: '#475569' };
}

// Couleur selon la place dans un barème, quel que soit son nombre de niveaux :
// du vert (bas de l'échelle) au rouge (haut), en passant par le jaune au
// deuxième niveau. `rang` négatif : gris.
const COULEURS_RANG = [
  getRiskColors('faible'),
  { bar: '#facc15', bg: '#fef9c3', text: '#a16207' },
  getRiskColors('modere'),
  getRiskColors('eleve'),
  getRiskColors('critique'),
];

export function getRankColors(rang, nbNiveaux) {
  if (rang == null || rang < 0) return getRiskColors(null);
  return COULEURS_RANG[Math.round((rang / Math.max(1, nbNiveaux - 1)) * 4)] ?? getRiskColors(null);
}

export function getRiskLabel(niveau) {
  return (
    { faible: 'Faible', modere: 'Modéré', eleve: 'Élevé', fort: 'Fort', critique: 'Critique' }[
      niveau?.toLowerCase()
    ] || niveau || '-'
  );
}

export function getBadgeStyle(niveau) {
  const n = niveau?.toLowerCase();
  if (n === 'faible')                   return { background: '#dcfce7', color: '#166534' };
  if (n === 'modere')                   return { background: '#fef3c7', color: '#92400e' };
  if (n === 'eleve')                    return { background: '#ffedd5', color: '#9a3412' };
  if (n === 'fort' || n === 'critique') return { background: '#fee2e2', color: '#991b1b' };
  return { background: '#f1f5f9', color: '#475569' };
}

// ─── Water stress → color / label ────────────────────────────────────────────

export function getStressColor(ratio, seuils) {
  const s = seuils || {};
  if (ratio >= (s.critique ?? 0.8)) return '#ef4444';
  if (ratio >= (s.eleve   ?? 0.6)) return '#f97316';
  if (ratio >= (s.modere  ?? 0.4)) return '#f59e0b';
  return '#22c55e';
}

export function getStressLabel(ratio, seuils) {
  const s = seuils || {};
  if (ratio >= (s.critique ?? 0.8)) return 'Critique';
  if (ratio >= (s.eleve   ?? 0.6)) return 'Élevé';
  if (ratio >= (s.modere  ?? 0.4)) return 'Modéré';
  if (ratio >= (s.faible  ?? 0.2)) return 'Faible';
  return 'Très faible';
}
