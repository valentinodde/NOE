import { useState, useMemo, useEffect } from 'react';

import questionnaireData from '../../questionnaires/agriculture.json';
import { createSiretStorage } from '../../utils/siretStorage';

const QUESTIONNAIRES = [questionnaireData];
const SKIP_VALUE = '__skip__';

// ─── Seuils (conservés pour export vers d'autres tabs) ────────────────────
export const MATURITY_THRESHOLDS = [
  { min: 0,    max: 0.33, level: 'novice',        label: 'Novice',        color: 'text-amber-700',   bg: 'bg-amber-50',   border: 'border-amber-200',  dot: 'bg-amber-400' },
  { min: 0.33, max: 0.66, level: 'intermediaire', label: 'Intermédiaire', color: 'text-blue-700',    bg: 'bg-blue-50',    border: 'border-blue-200',   dot: 'bg-blue-400' },
  { min: 0.66, max: 1.01, level: 'avance',        label: 'Avancé',        color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200',dot: 'bg-emerald-400' },
];

export const CONCERN_THRESHOLDS = [
  { min: 0,    max: 0.33, level: 'faible', label: 'Faible concernement', color: 'text-slate-600',  bg: 'bg-slate-50',  border: 'border-slate-200' },
  { min: 0.33, max: 0.66, level: 'moyen',  label: 'Concerné',            color: 'text-violet-700', bg: 'bg-violet-50', border: 'border-violet-200' },
  { min: 0.66, max: 1.01, level: 'eleve',  label: 'Très motivé',         color: 'text-primary',    bg: 'bg-primary/5', border: 'border-primary/20' },
];

// ─── Utilitaires ─────────────────────────────────────────────────────────
export function getLevel(ratio, thresholds) {
  return thresholds.find(t => ratio >= t.min && ratio < t.max) ?? thresholds[0];
}

export function evaluateCondition(condition, answers) {
  if (!condition) return true;
  if (condition.operator === 'and') return condition.rules.every(r => evaluateCondition(r, answers));
  if (condition.operator === 'or')  return condition.rules.some(r => evaluateCondition(r, answers));
  const answer = answers[condition.questionId];
  if (answer === undefined) return false;
  switch (condition.operator) {
    case 'eq':  return answer === condition.value;
    case 'neq': return answer !== condition.value;
    case 'in':  return condition.value.includes(answer);
    case 'nin': return !condition.value.includes(answer);
    default:    return true;
  }
}

// Returns true when a question has a valid real answer (not skip, not empty)
export function isQuestionAnswered(question, answer) {
  if (answer === undefined || answer === null || answer === SKIP_VALUE) return false;
  switch (question?.type) {
    case 'multi_choice': return Array.isArray(answer) && answer.length > 0;
    case 'numeric':      return typeof answer === 'string' && answer.trim() !== '';
    default:             return true; // single_choice: any truthy value
  }
}

export function computeScores(questions, answers) {
  const visible  = questions.filter(q => evaluateCondition(q.condition, answers));
  const answered = visible.filter(q => isQuestionAnswered(q, answers[q.id]));

  if (answered.length === 0) return null;

  let maturityTotal = 0;
  let concernTotal  = 0;
  const topicCounts = {};
  const maxPerQ = 3;

  answered.forEach(q => {
    const ans = answers[q.id];

    if (q.type === 'multi_choice') {
      // Sum scores of selected options, capped at maxPerQ
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

// ─── LocalStorage ────────────────────────────────────────────────────────
const storage = createSiretStorage('maturite_data');

function loadData(siret) {
  const data = storage.load(siret);
  return { answers: data?.answers ?? {}, scores: data?.scores ?? null };
}

function persistData(siret, answers, scores) {
  storage.persist(siret, { answers, scores });
}

// ─── MetroLine ───────────────────────────────────────────────────────────
function MetroLine({ questions, answers, currentIndex, onNavigate }) {
  const n = questions.length;
  if (n === 0) return null;

  return (
    <div className="select-none px-1">
      <div className="relative flex items-center justify-between">

        {/* ── Full gray rail (behind everything) ── */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-border rounded-full pointer-events-none"
          style={{ left: 14, right: 14 }}
        />

        {/* ── Colored progress rail (answered segments) ── */}
        {currentIndex > 0 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-primary/40 rounded-full pointer-events-none transition-all duration-300"
            style={{
              left: 14,
              // reaches center of the currentIndex dot
              width: `calc(${(currentIndex / (n - 1)) * 100}% - 28px + ${(currentIndex / (n - 1)) * 28}px)`,
            }}
          />
        )}

        {/* ── Dots ── */}
        {questions.map((q, i) => {
          const answered  = answers[q.id] !== undefined;
          const skipped   = answers[q.id] === SKIP_VALUE;
          const isCurrent = i === currentIndex;

          let cls = '';
          let inner = null;

          if (isCurrent) {
            cls = 'bg-primary border-primary text-white ring-2 ring-primary/25 ring-offset-1 scale-125 shadow-md z-20';
            inner = <span className="text-[0.5rem] font-bold">{i + 1}</span>;
          } else if (skipped) {
            cls = 'bg-surface-low border-slate-300 text-slate-400 hover:border-primary/40 z-10';
            inner = <span className="text-[0.6rem] leading-none">−</span>;
          } else if (answered) {
            cls = 'bg-emerald-400 border-emerald-500 text-white hover:bg-emerald-500 z-10';
            inner = (
              <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            );
          } else {
            cls = 'bg-surface border-border text-on-surface-var/40 hover:border-primary/40 hover:bg-primary/5 z-10';
            inner = <span className="text-[0.5rem]">{i + 1}</span>;
          }

          return (
            <button
              key={q.id}
              onClick={() => onNavigate(i)}
              title={`Question ${i + 1}`}
              className={`relative w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 cursor-pointer ${cls}`}
            >
              {inner}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── SingleChoiceCard ────────────────────────────────────────────────────
function SingleChoiceCard({ question, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      {question.options.map(opt => {
        const isSelected = value === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onChange(isSelected ? undefined : opt.id)}
            className={`w-full text-left px-4 py-3 rounded-xl border text-[0.875rem] leading-snug transition-all duration-150
              ${isSelected
                ? 'bg-primary/10 border-primary/50 text-primary font-medium shadow-sm'
                : 'bg-surface border-border text-on-surface-var hover:border-primary/30 hover:bg-primary/4 hover:text-on-surface'
              }`}
          >
            <span className={`inline-block w-4 h-4 rounded-full border-2 mr-3 flex-shrink-0 align-middle transition-all
              ${isSelected ? 'border-primary bg-primary' : 'border-border'}`}
            />
            {opt.text}
          </button>
        );
      })}
    </div>
  );
}

// ─── MultiChoiceCard ─────────────────────────────────────────────────────
function MultiChoiceCard({ question, value, onChange }) {
  const selected = Array.isArray(value) ? value : [];

  const toggle = (optId) => {
    const next = selected.includes(optId)
      ? selected.filter(id => id !== optId)
      : [...selected, optId];
    onChange(next.length > 0 ? next : undefined);
  };

  return (
    <div className="flex flex-col gap-2">
      {question.options.map(opt => {
        const isSelected = selected.includes(opt.id);
        return (
          <button
            key={opt.id}
            onClick={() => toggle(opt.id)}
            className={`w-full text-left px-4 py-3 rounded-xl border text-[0.875rem] leading-snug transition-all duration-150
              ${isSelected
                ? 'bg-primary/10 border-primary/50 text-primary font-medium shadow-sm'
                : 'bg-surface border-border text-on-surface-var hover:border-primary/30 hover:bg-primary/4 hover:text-on-surface'
              }`}
          >
            {/* Square checkbox indicator */}
            <span className={`inline-flex w-4 h-4 rounded border-2 mr-3 flex-shrink-0 align-middle items-center justify-center transition-all
              ${isSelected ? 'border-primary bg-primary' : 'border-border'}`}
            >
              {isSelected && (
                <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
            {opt.text}
          </button>
        );
      })}
    </div>
  );
}

// ─── NumericCard ──────────────────────────────────────────────────────────
function NumericCard({ question, value, onChange }) {
  const cfg = question.input;
  const strVal = typeof value === 'string' ? value : '';

  const handleChange = (e) => {
    let v = e.target.value;
    if (cfg.integer_only) v = v.replace(/[^0-9]/g, '');
    onChange(v === '' ? undefined : v);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <input
          type="text"
          inputMode={cfg.integer_only ? 'numeric' : 'decimal'}
          placeholder={cfg.placeholder ?? ''}
          value={strVal}
          onChange={handleChange}
          className="flex-1 px-4 py-3 rounded-xl border border-border bg-surface text-on-surface text-[0.875rem] outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
        />
        {cfg.unit && (
          <span className="text-[0.875rem] text-on-surface-var font-medium flex-shrink-0 pr-1">
            {cfg.unit}
          </span>
        )}
      </div>
      {(cfg.min !== undefined || cfg.max !== undefined) && (
        <p className="text-[0.75rem] text-on-surface-var/60 pl-1">
          {cfg.min !== undefined && cfg.max !== undefined
            ? `Entre ${cfg.min.toLocaleString('fr')} et ${cfg.max.toLocaleString('fr')}`
            : cfg.min !== undefined ? `Minimum ${cfg.min.toLocaleString('fr')}`
            : `Maximum ${cfg.max.toLocaleString('fr')}`}
        </p>
      )}
    </div>
  );
}

// ─── QuestionCard (dispatcher) ────────────────────────────────────────────
function QuestionCard({ question, value, onChange }) {
  if (question.type === 'multi_choice') return <MultiChoiceCard question={question} value={value} onChange={onChange} />;
  if (question.type === 'numeric')      return <NumericCard      question={question} value={value} onChange={onChange} />;
  return <SingleChoiceCard question={question} value={value} onChange={onChange} />;
}

// ─── Composant principal ──────────────────────────────────────────────────
export default function TabMaturite({ entreprise }) {
  const siret   = entreprise?.siret;
  const nafCode = entreprise?.activiteprincipaleetablissement;

  const questionnaire = useMemo(() =>
    QUESTIONNAIRES.find(q => q.naf_codes.includes(nafCode)) ?? QUESTIONNAIRES[0],
    [nafCode]
  );

  // Answers — initialized from localStorage (discarded if siret doesn't match)
  const [answers, setAnswers] = useState(() => loadData(siret).answers);

  // Force-show quiz even when complete (review mode)
  const [reviewing, setReviewing] = useState(false);

  // Current question index
  const [currentIndex, setCurrentIndex] = useState(() => {
    // Start on the first unanswered question
    const { answers: saved } = loadData(siret);
    const qs = questionnaire.questions.filter(q => evaluateCondition(q.condition, saved));
    const firstUnanswered = qs.findIndex(q => saved[q.id] === undefined);
    return firstUnanswered >= 0 ? firstUnanswered : 0;
  });

  // Persist answers + computed scores on every answer change
  useEffect(() => {
    const scores = computeScores(questionnaire.questions, answers);
    persistData(siret, answers, scores);
  }, [siret, answers, questionnaire.questions]);

  // Visible questions (re-evaluated after each answer for conditional logic)
  const visibleQuestions = useMemo(() =>
    questionnaire.questions.filter(q => evaluateCondition(q.condition, answers)),
    [questionnaire, answers]
  );

  // Clamp index if questions disappear
  useEffect(() => {
    if (visibleQuestions.length > 0 && currentIndex >= visibleQuestions.length) {
      setCurrentIndex(visibleQuestions.length - 1);
    }
  }, [visibleQuestions.length, currentIndex]);

  const totalVisible  = visibleQuestions.length;
  const totalAnswered = visibleQuestions.filter(q => {
    const a = answers[q.id];
    return a === SKIP_VALUE || isQuestionAnswered(q, a);
  }).length;
  const isComplete = totalAnswered === totalVisible && totalVisible > 0;

  const currentQuestion = visibleQuestions[currentIndex];
  const currentValue    = currentQuestion ? answers[currentQuestion.id] : undefined;
  const isSkipped       = currentValue === SKIP_VALUE;
  const isAnswered      = isSkipped || (currentQuestion ? isQuestionAnswered(currentQuestion, currentValue) : false);

  const handleAnswer = (qId, val) => setAnswers(prev => ({ ...prev, [qId]: val }));

  const handleNext = () => {
    if (currentIndex < visibleQuestions.length - 1) setCurrentIndex(i => i + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(i => i - 1);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentIndex(0);
    setReviewing(false);
    storage.clear();
  };

  const handleSkipAndNext = () => {
    if (!currentQuestion) return;
    handleAnswer(currentQuestion.id, SKIP_VALUE);
    if (currentIndex < visibleQuestions.length - 1) setCurrentIndex(i => i + 1);
  };

  // Theme label for current question
  const currentTheme = currentQuestion
    ? questionnaire.themes.find(t => t.id === currentQuestion.theme)
    : null;

  return (
    <div className="flex flex-col gap-5 max-w-2xl mx-auto">

      {/* ── En-tête ───────────────────────────────────────────────────── */}
      <div className="rounded-2xl bg-surface-low border border-border p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <p className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest">
              Évaluation maturité eau
            </p>
            <p className="text-[1rem] font-bold text-on-surface leading-snug">
              {questionnaire.sector_label}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[0.75rem] text-on-surface-var tabular-nums">
              {totalAnswered}/{totalVisible}
            </span>
            {totalAnswered > 0 && (
              <button
                onClick={handleReset}
                className="text-[0.75rem] text-on-surface-var hover:text-red-600 transition-colors px-3 py-1.5 rounded-lg border border-border hover:border-red-200 hover:bg-red-50"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>

        {/* Metro progress line */}
        <MetroLine
          questions={visibleQuestions}
          answers={answers}
          currentIndex={currentIndex}
          onNavigate={setCurrentIndex}
        />
      </div>

      {/* ── Question ou completion ─────────────────────────────────── */}
      {isComplete && !reviewing ? (
        /* Completion state */
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-emerald-600 text-xl">
            ✓
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[1rem] font-bold text-emerald-900">Questionnaire complété</p>
            <p className="text-[0.875rem] text-emerald-700 leading-relaxed max-w-sm">
              Toutes les questions ont été renseignées. Les résultats sont disponibles dans l'onglet Synthèse.
            </p>
          </div>
          <button
            onClick={() => { setReviewing(true); setCurrentIndex(0); }}
            className="text-[0.8125rem] text-emerald-700 hover:text-emerald-900 transition-colors underline underline-offset-2"
          >
            Revoir les réponses
          </button>
        </div>
      ) : currentQuestion ? (
        /* Question active */
        <div className="rounded-2xl bg-surface-low border border-border overflow-hidden">

          {/* Question header */}
          <div className="px-6 pt-6 pb-4 border-b border-border/60 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {currentTheme && (
                <span className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest">
                  {currentTheme.label}
                </span>
              )}
              <span className="text-[0.6875rem] text-on-surface-var/50 ml-auto tabular-nums">
                {currentIndex + 1} / {totalVisible}
              </span>
            </div>
            <p className="text-[1rem] font-semibold text-on-surface leading-snug">
              {currentQuestion.text}
            </p>
          </div>

          {/* Options */}
          <div className="px-6 py-5">
            <QuestionCard
              question={currentQuestion}
              value={isSkipped ? undefined : currentValue}
              onChange={val => handleAnswer(currentQuestion.id, val)}
            />
          </div>

          {/* Actions */}
          <div className="px-6 pb-6 flex items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="text-[0.8125rem] text-on-surface-var hover:text-on-surface transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Précédent
            </button>

            {(() => {
              const isLast = currentIndex === visibleQuestions.length - 1;
              const firstUnanswered = visibleQuestions.findIndex(q => answers[q.id] === undefined);

              if (!isAnswered) {
                // No answer → "Je ne sais pas" skips and advances
                return (
                  <button
                    onClick={handleSkipAndNext}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface text-on-surface-var text-[0.875rem] font-medium transition-all hover:border-primary/30 hover:text-on-surface hover:bg-primary/4"
                  >
                    Je ne sais pas
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                      <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                );
              }

              // Answer selected (real or skip) → Suivant / Terminer
              const handleAction = isLast
                ? (firstUnanswered >= 0
                    ? () => setCurrentIndex(firstUnanswered)
                    : () => setReviewing(false))
                : handleNext;
              const label = isLast
                ? (firstUnanswered >= 0 ? 'Question manquante' : 'Terminer')
                : 'Suivant';

              return (
                <button
                  onClick={handleAction}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-[0.875rem] font-semibold transition-all hover:opacity-90 shadow-sm"
                >
                  {label}
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              );
            })()}
          </div>
        </div>
      ) : null}
    </div>
  );
}
