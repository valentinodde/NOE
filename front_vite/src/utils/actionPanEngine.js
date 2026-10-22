/**
 * actionPlanEngine.js
 * 
 * Prend en entrée :
 *   - answers        : { [questionId]: string | string[] | number }
 *   - constructor    : action_plan_config du referentiel (GET /questionnaire/<naf>)
 *   - measures       : bibliothèque de mesures du referentiel
 *   - scores         : { maturityLevel, concernLevel, topics[] }  (sortie du scoring questionnaire)
 *   - questions      : questionnaire complet (pour résoudre les classes)
 * 
 * Retourne : MeasureResult[]  triées par score de pertinence décroissant
 */

// ─── Évaluation d'un filtre ───────────────────────────────────────────────
// Exporté pour le script de simulation (scripts/simuler_referentiel.mjs), qui
// compte les déclenchements de chaque filtre sur des profils synthétiques.

export function evaluateFilter(filter, { answers, scores, questions }) {
  switch (filter.type) {

    case 'answer': {
      const answer = answers[filter.questionId];
      return evaluateOperator(filter.operator, answer, filter.value);
    }

    case 'class': {
      // Trouver toutes les questions de cette class dans le questionnaire
      const classQuestions = questions.filter(q => q.class === filter.class);
      // Collecter toutes les réponses pour ces questions
      const classAnswers = classQuestions
        .map(q => answers[q.id])
        .filter(a => a !== undefined)
        .flat(); // aplatir pour les multi_choice

      if (classAnswers.length === 0) return false;

      switch (filter.operator) {
        case 'includes':     return classAnswers.includes(filter.value);
        case 'not_includes': return !classAnswers.includes(filter.value);
        case 'eq':           return classAnswers.some(a => a === filter.value);
        case 'all_of':       return Array.isArray(filter.value)
                               && filter.value.every(v => classAnswers.includes(v));
        default: return false;
      }
    }

    case 'maturity': {
      return evaluateOperator(filter.operator, scores?.maturityLevel, filter.value);
    }

    case 'numeric': {
      const answer = answers[filter.questionId];
      if (answer === undefined || answer === null || answer === '') return false;
      const num = Number(answer);
      if (isNaN(num)) return false;
      switch (filter.operator) {
        case 'gt':  return num >  filter.value;
        case 'lt':  return num <  filter.value;
        case 'gte': return num >= filter.value;
        case 'lte': return num <= filter.value;
        default: return false;
      }
    }

    default:
      console.warn(`[actionPlanEngine] type de filtre inconnu : ${filter.type}`);
      return false;
  }
}

function isUnanswered(answer) {
  return answer === undefined || answer === null || answer === ''
    || (Array.isArray(answer) && answer.length === 0);
}

function evaluateOperator(operator, answer, value) {
  // Une question sans réponse ne déclenche aucun filtre, sauf not_answered :
  // sinon les opérateurs de différence (neq, nin, not_includes) la prendraient
  // pour une réponse qui ne correspond pas.
  if (isUnanswered(answer)) return operator === 'not_answered';

  // answer peut être un tableau (multi_choice) ou un scalaire
  const isArray = Array.isArray(answer);

  switch (operator) {
    case 'eq':
      return isArray ? answer.length === 1 && answer[0] === value : answer === value;
    case 'neq':
      return isArray ? !answer.includes(value) : answer !== value;
    case 'in':
      return Array.isArray(value) && (isArray ? answer.some(a => value.includes(a)) : value.includes(answer));
    case 'nin':
      return Array.isArray(value) && (isArray ? !answer.some(a => value.includes(a)) : !value.includes(answer));
    case 'includes':
      return isArray ? answer.includes(value) : answer === value;
    case 'not_includes':
      return isArray ? !answer.includes(value) : answer !== value;
    case 'answered':     return true;
    case 'not_answered': return false;
    default: return false;
  }
}

// ─── Moteur principal ─────────────────────────────────────────────────────

/**
 * @param {Object} answers        - réponses du questionnaire
 * @param {Object} constructor    - action_plan_config du referentiel
 * @param {Array}  measures       - bibliothèque de mesures du referentiel
 * @param {Object} scores         - { maturityLevel, concernLevel, topics }
 * @param {Array}  questions      - questions du questionnaire (pour résoudre les classes)
 * @returns {Array}               - mesures filtrées et enrichies, triées par pertinence
 */
export function buildActionPlan({ answers, constructor, measures, scores, questions }) {
  const measuresById = Object.fromEntries(measures.map(m => [m.id, m]));

  // 1. Partir du socle always_include
  const included = new Set(constructor.always_include ?? []);
  const excluded = new Set(constructor.never_include ?? []);

  // 2. Appliquer les filtres, triés par priorité décroissante
  const sortedFilters = [...(constructor.filters ?? [])]
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

  // Collecter les décisions de chaque filtre avec leur priorité
  // Structure : { [measureId]: { effect, priority }[] }
  const decisions = {};

  for (const filter of sortedFilters) {
    const matched = evaluateFilter(filter, { answers, scores, questions });
    if (!matched) continue;

    for (const mId of filter.measures) {
      if (!decisions[mId]) decisions[mId] = [];
      decisions[mId].push({ effect: filter.effect, priority: filter.priority ?? 0 });
    }
  }

  // 3. Résoudre les conflits : pour chaque mesure, la décision de plus haute priorité l'emporte
  //    En cas d'égalité, "remove" gagne sur "add" (principe de précaution)
  for (const [mId, mDecisions] of Object.entries(decisions)) {
    const maxPriority = Math.max(...mDecisions.map(d => d.priority));
    const topDecisions = mDecisions.filter(d => d.priority === maxPriority);
    const finalEffect = topDecisions.some(d => d.effect === 'remove') ? 'remove' : 'add';

    if (finalEffect === 'add')    included.add(mId);
    if (finalEffect === 'remove') excluded.add(mId);
  }

  // 4. Appliquer la blacklist absolue (never_include écrase tout)
  for (const mId of excluded) included.delete(mId);

  // 5. Résoudre les mesures et calculer un score de pertinence
  const result = [];

  for (const mId of included) {
    const measure = measuresById[mId];
    if (!measure) {
      console.warn(`[actionPlanEngine] mesure introuvable : ${mId}`);
      continue;
    }

    // Score de pertinence = impact_eau × facilite (quick wins en premier)
    const relevanceScore = (measure.impact_eau ?? 1) * (measure.facilite ?? 1);

    result.push({ ...measure, relevanceScore });
  }

  // 6. Trier : pertinence décroissante, puis par horizon (immediat < court_terme < moyen_terme)
  const HORIZON_ORDER = { immediat: 0, court_terme: 1, moyen_terme: 2 };

  result.sort((a, b) => {
    if (b.relevanceScore !== a.relevanceScore) return b.relevanceScore - a.relevanceScore;
    return (HORIZON_ORDER[a.horizon] ?? 99) - (HORIZON_ORDER[b.horizon] ?? 99);
  });

  return result;
}