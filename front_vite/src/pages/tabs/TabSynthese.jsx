import { useMemo, useState } from 'react';

import questionnaireData  from '../../questionnaires/agriculture.json';
import actionsData        from '../../questionnaires/actions_agriculture.json';
import constructorData    from '../../questionnaires/action_plan_constructor_agriculture.json';
import { createSiretStorage } from '../../utils/siretStorage';
import { buildActionPlan }    from '../../utils/actionPanEngine';
import {
  computeScores,
  getLevel,
  MATURITY_THRESHOLDS,
  CONCERN_THRESHOLDS,
} from './TabMaturite';

const maturiteStorage = createSiretStorage('maturite_data');

// ─── Catégories canoniques ─────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: 'sensibiliser_former',
    label: 'Sensibiliser et former',
    icon: '🎓',
    description: "Développer la culture eau au sein de votre organisation, former les équipes aux bonnes pratiques et ancrer des comportements durables à tous les niveaux.",
    accentColor: '#f59e0b',
  },
  {
    id: 'suivre_comprendre_maitriser',
    label: "Suivre, comprendre et maîtriser ses consommations",
    icon: '📊',
    description: "Sans mesure, pas de gestion. Mettre en place des outils de comptage et d'audit permet d'identifier les postes de surconsommation, de détecter les fuites et de suivre ses progrès dans le temps.",
    accentColor: '#3b82f6',
  },
  {
    id: 'ameliorer_efficacite_hydrique',
    label: "Améliorer l'efficacité hydrique de ses équipements",
    icon: '⚙️',
    description: "Réduire la quantité d'eau nécessaire à chaque usage en modernisant les équipements, en optimisant le pilotage de l'irrigation et en limitant les pertes à la source.",
    accentColor: '#06b6d4',
  },
  {
    id: 'changer_process_pratiques',
    label: 'Changer ses process ou pratiques',
    icon: '🔄',
    description: "Adapter en profondeur les méthodes de production pour réduire structurellement la dépendance à l'eau : évolution des cultures, rotations, pratiques agro-écologiques.",
    accentColor: '#10b981',
  },
  {
    id: 'valoriser_reut_eaux_non_conventionnelles',
    label: 'Valoriser ou réutiliser les eaux non conventionnelles',
    icon: '♻️',
    description: "Mobiliser des sources alternatives — eaux pluviales récupérées, eaux de process recyclées, stockage hivernal — pour diminuer les prélèvements sur la ressource naturelle en période de stress.",
    accentColor: '#8b5cf6',
  },
  {
    id: 'agir_rejets_qualite',
    label: "Agir sur ses rejets et la qualité de l'eau",
    icon: '🧪',
    description: "Réduire l'impact des rejets sur les milieux aquatiques : traitement des effluents, limitation des intrants, préservation des zones tampons pour contribuer à la qualité des eaux locales.",
    accentColor: '#ef4444',
  },
  {
    id: 'agir_grand_cycle',
    label: "Agir sur le grand cycle de l'eau",
    icon: '🤝',
    description: "S'engager dans des démarches collectives et territoriales (PTGE, ASA, contrats de nappes) pour peser sur la gouvernance de l'eau à l'échelle du bassin versant.",
    accentColor: '#64748b',
  },
];

// ─── Horizon meta ─────────────────────────────────────────────────────────
const HORIZON_META = {
  immediat:    { label: 'Immédiat',    color: '#059669', bg: 'rgba(5,150,105,0.08)',   border: 'rgba(5,150,105,0.25)'   },
  court_terme: { label: 'Court terme', color: '#2563eb', bg: 'rgba(37,99,235,0.08)',  border: 'rgba(37,99,235,0.25)'   },
  moyen_terme: { label: 'Moyen terme', color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.25)'  },
};

const HORIZON_ORDER = ['immediat', 'court_terme', 'moyen_terme'];

// ─── Effort dot ───────────────────────────────────────────────────────────
const EFFORT_DOTS = {
  faible:    { dots: 1, color: '#22c55e', label: 'Faible'    },
  moyen:     { dots: 2, color: '#f59e0b', label: 'Moyen'     },
  important: { dots: 3, color: '#ef4444', label: 'Important' },
};

// ─── CSS keyframes ────────────────────────────────────────────────────────
function AnimationStyles() {
  return (
    <style>{`
      @keyframes ripple-expand {
        0%   { transform: scale(1);   opacity: 0.55; }
        100% { transform: scale(3.4); opacity: 0;    }
      }
      @keyframes node-breathe {
        0%, 100% { transform: scale(1);    }
        50%       { transform: scale(1.07); }
      }
      @keyframes fade-right {
        from { opacity: 0; transform: translateX(16px); }
        to   { opacity: 1; transform: translateX(0);    }
      }
      @keyframes drop-bounce {
        0%   { transform: translateY(-12px) scale(0.82); opacity: 0; }
        55%  { transform: translateY(4px)   scale(1.10); opacity: 1; }
        75%  { transform: translateY(-3px)  scale(0.97); opacity: 1; }
        100% { transform: translateY(0)     scale(1);    opacity: 1; }
      }
      @keyframes line-grow {
        from { transform: scaleY(0); }
        to   { transform: scaleY(1); }
      }
      @keyframes dash-flow {
        from { background-position: 0 0; }
        to   { background-position: 0 11px; }
      }
    `}</style>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Atoms
// ═══════════════════════════════════════════════════════════════════════════

function SectionCard({ children }) {
  return (
    <section
      className="bg-surface-lowest rounded-2xl p-7"
      style={{ boxShadow: '0 0 40px rgba(0,10,67,0.06)' }}
    >
      {children}
    </section>
  );
}


function ScoreBar({ ratio, color }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-surface-high overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${Math.round(ratio * 100)}%`, backgroundColor: color }}
      />
    </div>
  );
}

function ScoreCard({ title, ratio, level, barColor, icon }) {
  const pct = Math.round(ratio * 100);
  return (
    <div
      className="bg-surface-low rounded-xl px-5 py-4 flex flex-col gap-3"
      style={{ boxShadow: '0 0 24px rgba(0,10,67,0.04)' }}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest">
          {title}
        </p>
        <span className="text-[0.875rem]">{icon}</span>
      </div>
      <div className="flex items-end gap-2.5">
        <span className={`text-[1.75rem] font-bold tabular-nums leading-none ${level.color}`}>
          {pct}%
        </span>
        <span className={`text-[0.8125rem] font-semibold mb-0.5 ${level.color}`}>
          {level.label}
        </span>
      </div>
      <ScoreBar ratio={ratio} color={barColor} />
    </div>
  );
}

function TopicChip({ label, isPrimary }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[0.8125rem] font-medium transition-colors
        ${isPrimary
          ? 'bg-primary/8 border-primary/25 text-primary'
          : 'bg-surface-low border-border text-on-surface-var'}`}
    >
      {isPrimary && (
        <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="none">
          <path d="M6 1v4.5L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )}
      {label}
    </span>
  );
}

function EffortRow({ label, value }) {
  const meta = EFFORT_DOTS[value] ?? { dots: 0, color: '#94a3b8', label: '—' };
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[0.75rem] text-on-surface-var">{label}</span>
      <div className="flex items-center gap-1.5">
        <div className="flex gap-0.5">
          {[1, 2, 3].map(i => (
            <span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: i <= meta.dots ? meta.color : '#e2e8f0' }}
            />
          ))}
        </div>
        <span className="text-[0.6875rem] text-on-surface-var/70 w-14 text-right">{meta.label}</span>
      </div>
    </div>
  );
}

function ActionCard({ action, rank, accentColor }) {
  const horizonMeta = HORIZON_META[action.horizon] ?? HORIZON_META.moyen_terme;

  return (
    <div
      className="bg-surface-low rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-px"
      style={{
        boxShadow: '0 0 24px rgba(0,10,67,0.04)',
        borderLeft: `4px solid ${accentColor}30`,
      }}
    >
      {action.image && (
        <div className="relative w-full overflow-hidden" style={{ height: 140 }}>
          <img
            src={action.image}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.88) saturate(0.9)' }}
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, transparent 40%, ${accentColor}22 100%)`,
            }}
          />
        </div>
      )}
      <div className="px-5 py-4 flex items-start justify-between gap-3 border-b border-border/50">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full text-[0.6875rem] font-bold flex items-center justify-center mt-0.5"
            style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
          >
            {rank}
          </span>
          <p className="text-[0.875rem] font-semibold text-on-surface leading-snug pt-0.5">
            {action.titre}
          </p>
        </div>
        <span
          className="flex-shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[0.6875rem] font-semibold"
          style={{
            background: horizonMeta.bg,
            border: `1px solid ${horizonMeta.border}`,
            color: horizonMeta.color,
          }}
        >
          {horizonMeta.label}
        </span>
      </div>

      <div className="px-5 py-4 flex flex-col gap-4">
        <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">
          {action.description}
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
          <EffortRow label="Investissement"      value={action.effort?.capex} />
          <EffortRow label="Impact eau"
            value={action.impact_eau === 3 ? 'important' : action.impact_eau === 2 ? 'moyen' : 'faible'}
          />
          <EffortRow label="Fonctionnement"      value={action.effort?.opex} />
          <EffortRow label="Ressources humaines" value={action.effort?.humain} />
        </div>
        {action.ressources?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
            {action.ressources.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.75rem] text-primary hover:underline"
              >
                <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                  <path d="M5 2H2.5A.5.5 0 0 0 2 2.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V7M7 2h3v3M10 2 5.5 6.5"
                    stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {r.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Journey components
// ═══════════════════════════════════════════════════════════════════════════

// ─── Water-ripple marker ──────────────────────────────────────────────────
function RippleMarker({ color, icon, delayBase = 0 }) {
  return (
    /* overflow-hidden clips the rings at the 52px boundary — no bleed into adjacent sections */
    <div
      className="relative flex items-center justify-center flex-shrink-0"
      style={{ width: 52, height: 52}}
    >
      {/* 3 rings — start at 14px, scale to ~3.5× = 49px, contained within 52px */}
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 20, height: 20,
            top: '50%', left: '50%',
            marginTop: -10, marginLeft: -10,
            border: `1.5px solid ${color}`,
            animation: 'ripple-expand 3s ease-out infinite',
            animationDelay: `${delayBase + i * 0.85}s`,
          }}
        />
      ))}
      {/* Center icon node */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full"
        style={{
          width: 34, height: 34,
          background: `${color}14`,
          // border: `2px solid ${color}55`,
          boxShadow: `0 0 0 3px ${color}07`,
          animation: 'node-breathe 3.5s ease-in-out infinite',
          animationDelay: `${delayBase + 0.3}s`,
          fontSize: '0.95rem',
          lineHeight: 1,
        }}
      >
        {icon}
      </div>
    </div>
  );
}

// ─── Dashed segment between two markers ───────────────────────────────────
function DashedSegment({ height = 36, animDelay = 0 }) {
  return (
    <div
      style={{
        width: 2,
        height,
        background: `repeating-linear-gradient(
          to bottom,
          rgba(0,10,67,0.18) 0px,
          rgba(0,10,67,0.18) 5px,
          transparent 5px,
          transparent 11px
        )`,
        backgroundSize: '2px 11px',
        transformOrigin: 'top',
        animation: `line-grow 0.45s ease-out ${animDelay}s both, dash-flow 0.7s linear infinite`,
      }}
    />
  );
}

// ─── One step in the journey ──────────────────────────────────────────────
function JourneyStop({ category, actions, startRank, isLast, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const sorted = [...actions].sort((a, b) => {
    const hA = HORIZON_ORDER.indexOf(a.horizon);
    const hB = HORIZON_ORDER.indexOf(b.horizon);
    if (hA !== hB) return hA - hB;
    return (b.relevanceScore ?? 0) - (a.relevanceScore ?? 0);
  });

  return (
    <div className="flex gap-6 items-stretch">
      {/* Left column: ripple marker + growing connector line */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 52 }}>
        <RippleMarker color={category.accentColor} icon={category.icon} delayBase={index * 0.45} />
        {!isLast && (
          <div
            className="flex-1 mt-1"
            style={{
              width: 2,
              minHeight: 48,
              background: `repeating-linear-gradient(
                to bottom,
                rgba(0,10,67,0.18) 0px,
                rgba(0,10,67,0.18) 5px,
                transparent 5px,
                transparent 11px
              )`,
              backgroundSize: '2px 11px',
              animation: 'dash-flow 0.7s linear infinite',
            }}
          />
        )}
      </div>

      {/* Right column: section card + action cards */}
      <div
        className="flex-1 min-w-0"
        style={{
          paddingBottom: isLast ? '0.5rem' : '3rem',
          animation: `fade-right 0.45s ease-out ${0.08 + index * 0.07}s both`,
        }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: `${category.accentColor}05`,
            border: `1px solid ${category.accentColor}18`,
          }}
        >
          {/* Header — cliquable si mesures, statique sinon */}
          {actions.length === 0 ? (
            <div className="px-5 py-4 flex items-center justify-between gap-3">
              <h2
                className="text-[1rem] font-semibold text-on-surface-var/60"
                style={{ letterSpacing: '-0.01em' }}
              >
                {category.label}
              </h2>
              <span className="text-[0.8125rem] italic text-on-surface-var/45 flex-shrink-0">
                Pas de mesures pertinentes dans votre cas
              </span>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsOpen(o => !o)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 transition-colors hover:bg-black/[0.02]"
            >
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2
                  className="text-[1rem] font-semibold text-primary"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {category.label}
                </h2>
                <span
                  className="text-[0.6875rem] font-bold px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${category.accentColor}18`,
                    color: category.accentColor,
                  }}
                >
                  {actions.length} action{actions.length > 1 ? 's' : ''}
                </span>
              </div>
              {/* Chevron */}
              <svg
                className="flex-shrink-0 text-on-surface-var transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                width="16" height="16" viewBox="0 0 16 16" fill="none"
              >
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          {/* Collapsible body — only rendered when there are actions */}
          <div
            style={{
              display: actions.length === 0 ? 'none' : 'grid',
              gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.3s ease',
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <div className="px-5 pb-5 flex flex-col gap-4">
                {/* Description */}
                <p className="text-[0.8125rem] text-on-surface-var leading-relaxed max-w-2xl">
                  {category.description}
                </p>

                {/* Colored divider */}
                <div
                  className="h-px"
                  style={{
                    background: `linear-gradient(to right, ${category.accentColor}50, ${category.accentColor}10, transparent)`,
                  }}
                />

                {/* Action cards */}
                <div className="flex flex-col gap-3">
                  {sorted.map((action, i) => (
                    <ActionCard
                      key={action.id}
                      action={action}
                      rank={startRank + i}
                      accentColor={category.accentColor}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Journey header card (full-width encadré) ─────────────────────────────
function JourneyHeader({ actions }) {
  const counts = Object.fromEntries(
    HORIZON_ORDER.map(h => [h, actions.filter(a => a.horizon === h).length])
  );

  return (
    <div
      className="rounded-2xl px-6 py-5"
      style={{
        background: 'rgba(0,10,67,0.055)',
        border: '1.5px solid rgba(0,10,67,0.14)',
        animation: 'fade-right 0.4s ease-out 0.1s both',
      }}
    >
      {/* Top row: drop icon + title */}
      <div className="flex items-center gap-3 mb-2.5">
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full bg-surface-lowest"
          style={{
            width: 36, height: 36,
            border: '1.5px solid rgba(0,10,67,0.14)',
            boxShadow: '0 2px 8px rgba(0,10,67,0.08)',
            animation: 'drop-bounce 0.65s cubic-bezier(0.34,1.56,0.64,1) both',
          }}
        >
          <svg width="13" height="16" viewBox="0 0 16 19" fill="none" className="text-primary" style={{ opacity: 0.72 }}>
            <path d="M8 0C8 0 1 8.2 1 12.5a7 7 0 0 0 14 0C15 8.2 8 0 8 0z" fill="currentColor" />
          </svg>
        </div>
        <h2
          className="text-[1.0625rem] font-bold text-primary"
          style={{ letterSpacing: '-0.015em' }}
        >
          Plan d'action personnalisé
        </h2>
      </div>

      {/* Bottom row: action count + horizon badges */}
      <div className="flex items-center gap-2.5 flex-wrap pl-0.5">
        <span className="text-[0.8125rem] text-on-surface-var">
          <span className="font-semibold text-on-surface">
            {actions.length} action{actions.length > 1 ? 's' : ''}
          </span>
          {' '}identifiée{actions.length > 1 ? 's' : ''} selon votre profil
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {HORIZON_ORDER.map(h => {
            if (!counts[h]) return null;
            const m = HORIZON_META[h];
            return (
              <span
                key={h}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-semibold"
                style={{ background: m.bg, border: `1px solid ${m.border}`, color: m.color }}
              >
                {counts[h]} {m.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Composant principal
// ═══════════════════════════════════════════════════════════════════════════

export default function TabSynthese({ entreprise }) {
  const siret = entreprise?.siret;

  const { scores, answeredCount, totalCount, answers } = useMemo(() => {
    const stored = maturiteStorage.load(siret);
    if (stored?.answers && Object.keys(stored.answers).length > 0) {
      const sc = stored.scores ?? computeScores(questionnaireData.questions, stored.answers);
      return {
        scores:        sc,
        answers:       stored.answers,
        answeredCount: sc?.answeredCount ?? 0,
        totalCount:    sc?.totalCount    ?? questionnaireData.questions.length,
      };
    }
    return { scores: null, answers: {}, answeredCount: 0, totalCount: questionnaireData.questions.length };
  }, [siret]);

  const actionPlan = useMemo(() => {
    if (!scores) return [];
    const maturityLevel = getLevel(scores.maturityRatio, MATURITY_THRESHOLDS).level;
    return buildActionPlan({
      answers,
      constructor: constructorData,
      measures:    actionsData,
      scores:      { ...scores, maturityLevel },
      questions:   questionnaireData.questions,
    });
  }, [scores, answers]);

  // ── Non renseigné ─────────────────────────────────────────────────────
  if (!scores) {
    return (
      <div
        className="rounded-2xl bg-surface-lowest p-10 flex flex-col items-center gap-3 text-center"
        style={{ boxShadow: '0 0 40px rgba(0,10,67,0.06)' }}
      >
        <div className="w-10 h-10 rounded-full bg-surface-low border border-border flex items-center justify-center text-on-surface-var text-lg">
          ◎
        </div>
        <p className="text-[0.9375rem] font-semibold text-on-surface">
          Questionnaire non renseigné
        </p>
        <p className="text-[0.875rem] text-on-surface-var max-w-xs leading-relaxed">
          Complétez l'onglet <strong>Maturité</strong> pour voir les résultats et votre plan d'action ici.
        </p>
      </div>
    );
  }

  const maturityLevel = getLevel(scores.maturityRatio, MATURITY_THRESHOLDS);
  const concernLevel  = getLevel(scores.concernRatio,  CONCERN_THRESHOLDS);
  const isPartial     = answeredCount < totalCount;

  // Pre-compute start ranks — all categories always shown
  const actionsByCategory = Object.fromEntries(
    CATEGORIES.map(cat => [cat.id, actionPlan.filter(a => a.categorie === cat.id)])
  );

  let rankCounter = 1;
  const stopsData = CATEGORIES.map(cat => {
    const catActions = actionsByCategory[cat.id] ?? [];
    const startRank  = rankCounter;
    rankCounter += catActions.length;
    return { cat, catActions, startRank };
  });

  return (
    <div className="flex flex-col gap-10">
      <AnimationStyles />

      {/* ── Profil de maturité ────────────────────────────────────────── */}
      <SectionCard>
        <div className="flex items-center justify-between gap-4 mb-5 pl-1">
          <div className="flex items-center gap-3">
            <span className="w-1 h-5 rounded-full bg-tertiary shrink-0" />
            <h2 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>
              Profil de maturité eau
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[0.75rem] tabular-nums text-on-surface-var">
              {answeredCount}/{totalCount} questions
            </span>
            {isPartial && (
              <span className="text-[0.6875rem] px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-medium">
                En cours
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <ScoreCard
            title="Maturité"
            ratio={scores.maturityRatio}
            level={maturityLevel}
            barColor={
              maturityLevel.level === 'avance'        ? '#34d399' :
              maturityLevel.level === 'intermediaire' ? '#60a5fa' : '#fbbf24'
            }
            icon="🌱"
          />
          <ScoreCard
            title="Concernement"
            ratio={scores.concernRatio}
            level={concernLevel}
            barColor={
              concernLevel.level === 'eleve' ? '#6366f1' :
              concernLevel.level === 'moyen' ? '#a78bfa' : '#94a3b8'
            }
            icon="💧"
          />
        </div>

        {scores.topics?.length > 0 && (
          <>
            <p className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest mb-3 pl-1">
              Axes prioritaires identifiés
            </p>
            <div className="flex flex-wrap gap-2">
              {scores.topics.map((t, i) => (
                <TopicChip
                  key={t}
                  label={questionnaireData.topics_labels[t] ?? t}
                  isPrimary={i === 0}
                />
              ))}
            </div>
          </>
        )}
      </SectionCard>

      {/* ── Plan d'action — journey layout ────────────────────────────── */}
      <div
        className="bg-surface-lowest rounded-2xl px-7 pt-7 pb-4"
        style={{ boxShadow: '0 0 40px rgba(0,10,67,0.06)' }}
      >
        {/* Header card — full width, darker encadré */}
        <JourneyHeader actions={actionPlan} />

        {/* Connector: dashed line from header down to first stop
            aligned with the RippleMarker center (26px = half of 52px left-col) */}
        <div style={{ paddingLeft: 25, marginTop: 4, marginBottom: 4 }}>
          <DashedSegment height={28} animDelay={0.3} />
        </div>

        {/* Journey stops — all categories, always */}
        {stopsData.map(({ cat, catActions, startRank }, idx) => (
          <JourneyStop
            key={cat.id}
            category={cat}
            actions={catActions}
            startRank={startRank}
            isLast={idx === stopsData.length - 1}
            index={idx}
          />
        ))}
      </div>

    </div>
  );
}
