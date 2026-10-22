import { useState, useMemo, useEffect } from 'react';

import { createSiretStorage } from '../../utils/siretStorage';
// Le scoring vit dans un util sans React, partagé avec la Synthèse, l'onglet
// Avancer et le script de simulation du référentiel.
import {
  SKIP_VALUE,
  evaluateCondition,
  isQuestionAnswered,
  computeScores,
} from '../../utils/questionnaireScoring';

// ─── LocalStorage ────────────────────────────────────────────────────────
// Suffixe _v2 depuis le passage aux ids d'options sémantiques : les réponses
// enregistrées sous les anciens ids (a, b, c) seraient scorées de travers.
const storage = createSiretStorage('maturite_data_v2');

function loadData(siret) {
  const data = storage.load(siret);
  return { answers: data?.answers ?? {}, scores: data?.scores ?? null };
}

function persistData(siret, answers, scores) {
  storage.persist(siret, { answers, scores });
}

// Charte commune aux onglets : dégradé de marque, ombre des cartes, bleu ciel
// pour ce qui est fait (repris de la Synthèse). Les cartes ont en plus un
// filet bleu marine léger, pour détacher le questionnaire du fond de page.
const DEGRADE = 'linear-gradient(135deg, #000a43 0%, #051b71 100%)';
const OMBRE   = '0 0 0 1px rgba(5,27,113,0.22), 0 0 40px rgba(0,10,67,0.06)';

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
            className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-tertiary/50 rounded-full pointer-events-none transition-all duration-300"
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
            cls = 'bg-primary-container border-primary-container text-white ring-2 ring-primary-container/20 ring-offset-1 scale-125 shadow-md z-20';
            inner = <span className="text-[0.5rem] font-bold">{i + 1}</span>;
          } else if (skipped) {
            cls = 'bg-surface-low border-slate-300 text-slate-400 hover:border-primary/40 z-10';
            inner = <span className="text-[0.6rem] leading-none">−</span>;
          } else if (answered) {
            cls = 'bg-tertiary border-tertiary text-white hover:opacity-85 z-10';
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
                ? 'bg-primary-container/[0.06] border-primary-container/60 text-primary font-semibold'
                : 'bg-surface-low border-transparent text-on-surface hover:bg-surface-high'
              }`}
          >
            <span className={`inline-block w-4 h-4 rounded-full border-2 mr-3 flex-shrink-0 align-middle transition-all
              ${isSelected ? 'border-primary-container bg-primary-container' : 'border-on-surface-var/30 bg-white'}`}
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
                ? 'bg-primary-container/[0.06] border-primary-container/60 text-primary font-semibold'
                : 'bg-surface-low border-transparent text-on-surface hover:bg-surface-high'
              }`}
          >
            {/* Square checkbox indicator */}
            <span className={`inline-flex w-4 h-4 rounded border-2 mr-3 flex-shrink-0 align-middle items-center justify-center transition-all
              ${isSelected ? 'border-primary-container bg-primary-container' : 'border-on-surface-var/30 bg-white'}`}
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
          className="flex-1 px-4 py-3 rounded-xl border border-transparent bg-surface-low text-on-surface text-[0.875rem] outline-none focus:bg-white focus:border-primary-container/50 focus:ring-2 focus:ring-primary-container/10 transition-all"
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
export default function TabMaturite({ entreprise, referentiel, onAllerPlan }) {
  const siret = entreprise?.siret;

  // Le référentiel est servi par l'API selon le code NAF, et garanti non nul
  // par le ReferentielGate de CompanyPage.
  const questionnaire = referentiel;

  // Answers: initialized from localStorage (discarded if siret doesn't match)
  const [answers, setAnswers] = useState(() => loadData(siret).answers);

  // Écran de fin : affiché à l'ouverture si tout est déjà renseigné, puis
  // seulement au clic sur « Terminer » (pas dès la dernière réponse, pour
  // laisser cocher plusieurs options à la dernière question)
  const [recap, setRecap] = useState(() => {
    const { answers: saved } = loadData(siret);
    const qs = questionnaire.questions.filter(q => evaluateCondition(q.condition, saved));
    return qs.length > 0 && qs.every(q => saved[q.id] === SKIP_VALUE || isQuestionAnswered(q, saved[q.id]));
  });

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
    setRecap(false);
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
      <div className="rounded-2xl bg-surface-lowest p-6 flex flex-col gap-5" style={{ boxShadow: OMBRE }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-[1.125rem] sm:text-[1.25rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.015em' }}>
              {questionnaire.sector_label}
            </h2>
            <p className="text-[0.8125rem] text-on-surface-var tabular-nums">
              {totalAnswered} question{totalAnswered > 1 ? 's' : ''} renseignée{totalAnswered > 1 ? 's' : ''} sur {totalVisible}
            </p>
          </div>
          {totalAnswered > 0 && (
            <button
              onClick={handleReset}
              className="shrink-0 text-[0.75rem] text-on-surface-var hover:text-red-600 transition-colors px-3 py-1.5 rounded-lg bg-surface-low hover:bg-red-50"
            >
              Réinitialiser
            </button>
          )}
        </div>

        {/* Metro progress line */}
        <MetroLine
          questions={visibleQuestions}
          answers={answers}
          currentIndex={currentIndex}
          onNavigate={i => { setRecap(false); setCurrentIndex(i); }}
        />
      </div>

      {/* ── Question ou écran de fin ─────────────────────────────────── */}
      {isComplete && recap ? (
        <div className="rounded-2xl bg-surface-lowest px-6 sm:px-8 py-8 flex flex-col items-center gap-5 text-center" style={{ boxShadow: OMBRE }}>
          <span className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: DEGRADE }} aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.5 10.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="flex flex-col gap-1">
            <p className="text-[1.125rem] font-extrabold text-primary" style={{ letterSpacing: '-0.015em' }}>
              Questionnaire terminé
            </p>
            <p className="text-[0.875rem] text-on-surface-var leading-relaxed max-w-sm">
              Vos réponses sont enregistrées. Votre score de maturité et les mesures adaptées à votre site vous attendent.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {onAllerPlan && (
              <button
                type="button"
                onClick={onAllerPlan}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[0.875rem] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
                style={{ background: DEGRADE }}
              >
                Voir mon plan d'action
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            <button
              type="button"
              onClick={() => { setRecap(false); setCurrentIndex(0); }}
              className="rounded-xl px-4 py-3 text-[0.8125rem] font-medium text-on-surface-var hover:text-primary hover:bg-surface-low transition-colors"
            >
              Revoir les réponses
            </button>
          </div>
        </div>
      ) : currentQuestion ? (
        /* Question active */
        <div className="rounded-2xl bg-surface-lowest overflow-hidden" style={{ boxShadow: OMBRE }}>

          {/* Question header */}
          <div className="px-6 pt-6 pb-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              {currentTheme && (
                <span className="text-[0.6875rem] font-semibold px-2.5 py-1 rounded-full bg-surface-high text-on-surface-var">
                  {currentTheme.label}
                </span>
              )}
              <span className="text-[0.75rem] text-on-surface-var/60 ml-auto tabular-nums">
                {currentIndex + 1} / {totalVisible}
              </span>
            </div>
            <p className="text-[1.0625rem] sm:text-[1.125rem] font-bold text-primary leading-snug" style={{ letterSpacing: '-0.01em' }}>
              {currentQuestion.text}
            </p>
          </div>

          {/* Options */}
          <div className="px-6 pb-5">
            <QuestionCard
              question={currentQuestion}
              value={isSkipped ? undefined : currentValue}
              onChange={val => handleAnswer(currentQuestion.id, val)}
            />
          </div>

          {/* Actions */}
          <div className="px-6 py-4 flex items-center justify-between gap-3 border-t border-surface-high">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="text-[0.8125rem] text-on-surface-var hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-low text-on-surface-var text-[0.875rem] font-medium transition-colors hover:bg-surface-high hover:text-primary"
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
                    : () => setRecap(true))
                : handleNext;
              const label = isLast
                ? (firstUnanswered >= 0 ? 'Question manquante' : 'Terminer')
                : 'Suivant';

              return (
                <button
                  onClick={handleAction}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[0.875rem] font-semibold transition-opacity hover:opacity-90"
                  style={{ background: DEGRADE }}
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
