import { useMemo } from 'react';

import questionnaireData from '../../questionnaires/agriculture.json';
import actionsData       from '../../questionnaires/actions_agriculture.json';
import constructorData   from '../../questionnaires/action_plan_constructor_agriculture.json';
import prestatairesData  from '../../questionnaires/prestataires_agriculture.json';
import aidesData         from '../../questionnaires/aides_agriculture.json';
import { createSiretStorage } from '../../utils/siretStorage';
import { buildActionPlan }    from '../../utils/actionPanEngine';
import {
  computeScores,
  getLevel,
  MATURITY_THRESHOLDS,
} from './TabMaturite';

const maturiteStorage = createSiretStorage('maturite_data');

// ─── Type labels ───────────────────────────────────────────────────────────
const PRESTATAIRE_TYPE_META = {
  bureau_etudes:         { label: "Bureau d'études",       color: '#2563eb', bg: 'rgba(37,99,235,0.08)',   border: 'rgba(37,99,235,0.20)'   },
  chambre_consulaire:    { label: 'Chambre consulaire',    color: '#059669', bg: 'rgba(5,150,105,0.08)',   border: 'rgba(5,150,105,0.20)'   },
  organisme_technique:   { label: 'Organisme technique',   color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.20)'  },
  syndicat_professionnel:{ label: 'Structure collective',  color: '#0891b2', bg: 'rgba(8,145,178,0.08)',  border: 'rgba(8,145,178,0.20)'   },
  organisme_formation:   { label: 'Organisme de formation',color: '#d97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.20)'  },
};

const AIDE_TYPE_META = {
  subvention:     { label: 'Subvention',       color: '#059669', bg: 'rgba(5,150,105,0.08)',   border: 'rgba(5,150,105,0.20)'   },
  pret:           { label: 'Prêt bonifié',     color: '#2563eb', bg: 'rgba(37,99,235,0.08)',   border: 'rgba(37,99,235,0.20)'   },
  credit_impot:   { label: "Crédit d'impôt",  color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.20)'  },
  accompagnement: { label: 'Accompagnement',   color: '#d97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.20)'  },
};

const TERRITOIRE_META = {
  national: { label: 'National', icon: '🇫🇷' },
  regional: { label: 'Régional', icon: '🗺️'  },
  local:    { label: 'Local',    icon: '📍'   },
};

// ─── CSS animations ────────────────────────────────────────────────────────
function AnimationStyles() {
  return (
    <style>{`
      @keyframes fade-up {
        from { opacity: 0; transform: translateY(12px); }
        to   { opacity: 1; transform: translateY(0);    }
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

function SectionHeader({ icon, title, count, countLabel }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6 pl-1">
      <div className="flex items-center gap-3">
        <span className="w-1 h-5 rounded-full bg-tertiary shrink-0" />
        <h2 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>
          {icon} {title}
        </h2>
      </div>
      {count !== undefined && (
        <span className="text-[0.75rem] tabular-nums text-on-surface-var">
          {count} {countLabel}
        </span>
      )}
    </div>
  );
}

function TypeBadge({ meta }) {
  if (!meta) return null;
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-semibold flex-shrink-0"
      style={{ background: meta.bg, border: `1px solid ${meta.border}`, color: meta.color }}
    >
      {meta.label}
    </span>
  );
}

function ExpertiseChip({ label }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-border bg-surface-low text-[0.75rem] text-on-surface-var">
      {label}
    </span>
  );
}

function ExternalLink({ url, label }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[0.75rem] text-primary font-medium hover:underline"
    >
      <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="none">
        <path
          d="M5 2H2.5A.5.5 0 0 0 2 2.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V7M7 2h3v3M10 2 5.5 6.5"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
      {label}
    </a>
  );
}

// ─── Prestataire card ──────────────────────────────────────────────────────
function PrestataireCard({ item, index }) {
  const typeMeta = PRESTATAIRE_TYPE_META[item.type];
  const terrMeta = TERRITOIRE_META[item.territoire];

  return (
    <div
      className="bg-surface-low rounded-xl px-5 py-4 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-px"
      style={{
        boxShadow: '0 0 20px rgba(0,10,67,0.04)',
        animation: `fade-up 0.35s ease-out ${0.05 + index * 0.06}s both`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <span className="text-[1.25rem] flex-shrink-0">{item.icon}</span>
          <p className="text-[0.9375rem] font-semibold text-on-surface leading-snug">
            {item.nom}
          </p>
        </div>
        <TypeBadge meta={typeMeta} />
      </div>

      {/* Description */}
      <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">
        {item.description}
      </p>

      {/* Expertises */}
      {item.expertises?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.expertises.map(e => (
            <ExpertiseChip key={e} label={e} />
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/50">
        {terrMeta && (
          <span className="text-[0.75rem] text-on-surface-var/70">
            {terrMeta.icon} {terrMeta.label}
          </span>
        )}
        <ExternalLink url={item.url} label={item.url_label} />
      </div>
    </div>
  );
}

// ─── Aide card ─────────────────────────────────────────────────────────────
function AideCard({ item, index }) {
  const typeMeta = AIDE_TYPE_META[item.type];

  return (
    <div
      className="bg-surface-low rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-px"
      style={{
        boxShadow: '0 0 20px rgba(0,10,67,0.04)',
        animation: `fade-up 0.35s ease-out ${0.05 + index * 0.06}s both`,
        borderLeft: typeMeta ? `4px solid ${typeMeta.color}40` : undefined,
      }}
    >
      {/* Header */}
      <div className="px-5 py-4 flex items-start justify-between gap-3 border-b border-border/50">
        <div className="flex items-start gap-2.5 flex-1 min-w-0">
          <span className="text-[1.125rem] flex-shrink-0 mt-0.5">{item.financeur_icon}</span>
          <div className="min-w-0">
            <p className="text-[0.9375rem] font-semibold text-on-surface leading-snug">
              {item.nom}
            </p>
            <p className="text-[0.75rem] text-on-surface-var mt-0.5">{item.financeur}</p>
          </div>
        </div>
        <TypeBadge meta={typeMeta} />
      </div>

      <div className="px-5 py-4 flex flex-col gap-3">
        {/* Amount / rate */}
        <div className="flex gap-4">
          {item.taux && (
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-on-surface-var">Taux / Montant</span>
              <span className="text-[0.9375rem] font-bold text-on-surface">{item.taux}</span>
            </div>
          )}
          {item.plafond && (
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-on-surface-var">Plafond</span>
              <span className="text-[0.9375rem] font-bold text-on-surface">{item.plafond}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">
          {item.description}
        </p>

        {/* Eligibilite */}
        {item.eligibilite && (
          <div className="rounded-lg bg-surface-lowest px-3.5 py-2.5 border border-border/60">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-widest text-on-surface-var mb-1">
              Éligibilité
            </p>
            <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">
              {item.eligibilite}
            </p>
          </div>
        )}

        {/* Link */}
        <div className="flex justify-end pt-0.5">
          <ExternalLink url={item.url} label={item.url_label} />
        </div>
      </div>
    </div>
  );
}

// ─── Empty state ───────────────────────────────────────────────────────────
function EmptyState() {
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
        Complétez l'onglet <strong>Maturité</strong> pour voir les prestataires et
        les aides adaptés à votre plan d'action.
      </p>
    </div>
  );
}

// ─── Info banner ───────────────────────────────────────────────────────────
function InfoBanner({ activeCategories }) {
  return (
    <div
      className="rounded-2xl px-6 py-4 flex items-start gap-4"
      style={{
        background: 'rgba(0,10,67,0.04)',
        border: '1.5px solid rgba(0,10,67,0.10)',
      }}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-surface-lowest"
        style={{ border: '1.5px solid rgba(0,10,67,0.12)', boxShadow: '0 2px 8px rgba(0,10,67,0.07)' }}
      >
        <svg width="13" height="16" viewBox="0 0 16 19" fill="none" className="text-primary" style={{ opacity: 0.7 }}>
          <path d="M8 0C8 0 1 8.2 1 12.5a7 7 0 0 0 14 0C15 8.2 8 0 8 0z" fill="currentColor" />
        </svg>
      </div>
      <div>
        <p className="text-[0.9375rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>
          Ressources personnalisées selon votre plan d'action
        </p>
        <p className="text-[0.8125rem] text-on-surface-var mt-1 leading-relaxed">
          Les prestataires et aides ci-dessous ont été sélectionnés en fonction des{' '}
          <strong>{activeCategories} catégorie{activeCategories > 1 ? 's' : ''} d'action</strong> identifiées dans votre profil.
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Composant principal
// ═══════════════════════════════════════════════════════════════════════════

export default function TabAvancer({ entreprise }) {
  const siret = entreprise?.siret;

  const { scores, answers } = useMemo(() => {
    const stored = maturiteStorage.load(siret);
    if (stored?.answers && Object.keys(stored.answers).length > 0) {
      const sc = stored.scores ?? computeScores(questionnaireData.questions, stored.answers);
      return { scores: sc, answers: stored.answers };
    }
    return { scores: null, answers: {} };
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

  // ── Catégories actives (qui ont au moins une action dans le plan) ─────
  const activeCategories = useMemo(
    () => [...new Set(actionPlan.map(a => a.categorie))],
    [actionPlan]
  );

  // ── Filtrage prestataires & aides ─────────────────────────────────────
  const relevantPrestataires = useMemo(
    () => prestatairesData.filter(p =>
      p.categories.some(c => activeCategories.includes(c))
    ),
    [activeCategories]
  );

  const relevantAides = useMemo(
    () => aidesData.filter(a =>
      a.categories.some(c => activeCategories.includes(c))
    ),
    [activeCategories]
  );

  if (!scores) return <EmptyState />;

  return (
    <div className="flex flex-col gap-8">
      <AnimationStyles />

      {/* ── Bandeau intro ───────────────────────────────────────────────── */}
      <InfoBanner activeCategories={activeCategories.length} />

      {/* ── Prestataires ────────────────────────────────────────────────── */}
      <SectionCard>
        <SectionHeader
          icon="🏢"
          title="Apporteurs de solutions"
          count={relevantPrestataires.length}
          countLabel={`prestataire${relevantPrestataires.length > 1 ? 's' : ''} identifié${relevantPrestataires.length > 1 ? 's' : ''}`}
        />

        {relevantPrestataires.length === 0 ? (
          <p className="text-[0.875rem] text-on-surface-var italic">
            Aucun prestataire identifié pour les catégories d'action de votre profil.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relevantPrestataires.map((p, i) => (
              <PrestataireCard key={p.id} item={p} index={i} />
            ))}
          </div>
        )}
      </SectionCard>

      {/* ── Aides & financements ────────────────────────────────────────── */}
      <SectionCard>
        <SectionHeader
          icon="💶"
          title="Aides & financements"
          count={relevantAides.length}
          countLabel={`dispositif${relevantAides.length > 1 ? 's' : ''} identifié${relevantAides.length > 1 ? 's' : ''}`}
        />

        {relevantAides.length === 0 ? (
          <p className="text-[0.875rem] text-on-surface-var italic">
            Aucune aide identifiée pour les catégories d'action de votre profil.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {relevantAides.map((a, i) => (
              <AideCard key={a.id} item={a} index={i} />
            ))}
          </div>
        )}
      </SectionCard>
    </div>
  );
}
