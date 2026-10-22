/**
 * questionnaireScoring.js
 *
 * Scoring du questionnaire de maturité, sans dépendance à React : partagé par
 * les onglets Maturité, Synthèse et Avancer, et par le script de simulation
 * (front_vite/scripts/simuler_referentiel.mjs) qui fait tourner le vrai moteur
 * sur des profils synthétiques.
 *
 * Entrées :
 *   - questions : questions du référentiel (GET /questionnaire/<naf>)
 *   - answers   : { [questionId]: string | string[] | '__skip__' }
 */

// Valeur stockée quand l'utilisateur répond "je ne sais pas".
export const SKIP_VALUE = '__skip__';

// Une question rapporte au plus 3 points de maturité et 3 de concernement.
export const MAX_SCORE_PER_QUESTION = 3;

// ─── Seuils ──────────────────────────────────────────────────────────────
// Les `level` sont aussi le vocabulaire des filtres de type "maturity" dans
// action_plan_config : ne pas renommer sans mettre à jour les seeds.
export const MATURITY_THRESHOLDS = [
  { min: 0,    max: 0.33, level: 'novice',        label: 'Premiers pas',   color: 'text-amber-700',   bg: 'bg-amber-50',   border: 'border-amber-200',  dot: 'bg-amber-400' },
  { min: 0.33, max: 0.66, level: 'intermediaire', label: 'En progression', color: 'text-blue-700',    bg: 'bg-blue-50',    border: 'border-blue-200',   dot: 'bg-blue-400' },
  { min: 0.66, max: 1.01, level: 'avance',        label: 'Engagé',         color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200',dot: 'bg-emerald-400' },
];

export const CONCERN_THRESHOLDS = [
  { min: 0,    max: 0.33, level: 'faible', label: 'Faible concernement', color: 'text-slate-600',  bg: 'bg-slate-50',  border: 'border-slate-200' },
  { min: 0.33, max: 0.66, level: 'moyen',  label: 'Concerné',            color: 'text-violet-700', bg: 'bg-violet-50', border: 'border-violet-200' },
  { min: 0.66, max: 1.01, level: 'eleve',  label: 'Très motivé',         color: 'text-primary',    bg: 'bg-primary/5', border: 'border-primary/20' },
];

export function getLevel(ratio, thresholds) {
  return thresholds.find(t => ratio >= t.min && ratio < t.max) ?? thresholds[0];
}

// ─── Réponses ────────────────────────────────────────────────────────────

// Réponses exploitables par le scoring et le plan d'action : une question
// sautée ("je ne sais pas") est traitée comme non répondue, sinon les
// opérateurs de différence (neq, nin, not_includes) la prendraient pour une
// vraie réponse.
export function cleanAnswers(answers) {
  return Object.fromEntries(
    Object.entries(answers ?? {}).filter(([, v]) => v !== SKIP_VALUE)
  );
}

export function evaluateCondition(condition, answers) {
  if (!condition) return true;
  if (condition.operator === 'and') return condition.rules.every(r => evaluateCondition(r, answers));
  if (condition.operator === 'or')  return condition.rules.some(r => evaluateCondition(r, answers));
  const answer = answers[condition.questionId];
  if (answer === undefined || answer === SKIP_VALUE) return false;
  switch (condition.operator) {
    case 'eq':  return answer === condition.value;
    case 'neq': return answer !== condition.value;
    case 'in':  return condition.value.includes(answer);
    case 'nin': return !condition.value.includes(answer);
    default:    return true;
  }
}

// Vrai quand la question a une vraie réponse (ni sautée, ni vide).
export function isQuestionAnswered(question, answer) {
  if (answer === undefined || answer === null || answer === SKIP_VALUE) return false;
  switch (question?.type) {
    case 'multi_choice': return Array.isArray(answer) && answer.length > 0;
    case 'numeric':      return typeof answer === 'string' && answer.trim() !== '';
    default:             return true; // single_choice : toute valeur non vide
  }
}

// ─── Scoring ─────────────────────────────────────────────────────────────

/**
 * Ratios de maturité et de concernement (0 à 1) sur les questions répondues,
 * et topics des réponses, triés par fréquence. null si rien n'est répondu.
 */
export function computeScores(questions, answers) {
  const visible  = questions.filter(q => evaluateCondition(q.condition, answers));
  const answered = visible.filter(q => isQuestionAnswered(q, answers[q.id]));

  if (answered.length === 0) return null;

  let maturityTotal = 0;
  let concernTotal  = 0;
  const topicCounts = {};
  const maxPerQ = MAX_SCORE_PER_QUESTION;

  answered.forEach(q => {
    const ans = answers[q.id];

    if (q.type === 'multi_choice') {
      // Somme des options cochées, plafonnée à maxPerQ
      const selected = q.options.filter(o => ans.includes(o.id));
      const m = Math.min(maxPerQ, selected.reduce((s, o) => s + o.maturity_score, 0));
      const c = Math.min(maxPerQ, selected.reduce((s, o) => s + o.concern_score,  0));
      maturityTotal += m;
      concernTotal  += c;
      selected.forEach(o => o.topics.forEach(t => { topicCounts[t] = (topicCounts[t] || 0) + 1; }));

    } else if (q.type === 'numeric') {
      const score = q.scoring.if_filled;
      maturityTotal += score.maturity_score;
      concernTotal  += score.concern_score;
      score.topics.forEach(t => { topicCounts[t] = (topicCounts[t] || 0) + 1; });

    } else {
      // single_choice
      const opt = q.options.find(o => o.id === ans);
      if (!opt) return;
      maturityTotal += opt.maturity_score;
      concernTotal  += opt.concern_score;
      opt.topics.forEach(t => { topicCounts[t] = (topicCounts[t] || 0) + 1; });
    }
  });

  const maxMaturity = answered.length * maxPerQ;
  const maxConcern  = answered.length * maxPerQ;

  return {
    maturityRatio:  maxMaturity > 0 ? maturityTotal / maxMaturity : 0,
    concernRatio:   maxConcern  > 0 ? concernTotal  / maxConcern  : 0,
    topics: Object.entries(topicCounts).sort((a, b) => b[1] - a[1]).map(([t]) => t),
    answeredCount: answered.length,
    totalCount: visible.length,
  };
}
