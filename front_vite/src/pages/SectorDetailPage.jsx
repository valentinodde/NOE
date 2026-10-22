import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { fetchSector, fetchSectorsList, patchSector } from '../utils/api';

// ─── Constants ────────────────────────────────────────────────────────────────

const SCORE_COLORS = {
  0: { bg: '#f1f3fc', text: '#6b7280', border: '#d1d5db' },
  1: { bg: '#dcfce7', text: '#16a34a', border: '#86efac' },
  2: { bg: '#fef9c3', text: '#a16207', border: '#fde047' },
  3: { bg: '#fee2e2', text: '#dc2626', border: '#fca5a5' },
};

const LEVEL_COLORS = {
  low:       { bg: '#f0fdf4', text: '#16a34a', border: '#86efac' },
  medium:    { bg: '#fffbeb', text: '#b45309', border: '#fcd34d' },
  high:      { bg: '#fff7ed', text: '#c2410c', border: '#fdba74' },
  very_high: { bg: '#fef2f2', text: '#dc2626', border: '#fca5a5' },
};

const LEVELS = [
  { value: 'low',       label: 'Faible' },
  { value: 'medium',    label: 'Moyen' },
  { value: 'high',      label: 'Élevé' },
  { value: 'very_high', label: 'Très élevé' },
];

// ─── Atomic components ────────────────────────────────────────────────────────

function ScoreChip({ value, size = 'md' }) {
  const c   = SCORE_COLORS[value ?? 0];
  const dim = size === 'lg' ? '2.75rem' : size === 'sm' ? '1.625rem' : '2.125rem';
  const fs  = size === 'lg' ? '1.125rem' : size === 'sm' ? '0.6875rem' : '0.875rem';
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-bold shrink-0"
      style={{ width: dim, height: dim, fontSize: fs, background: c.bg, color: c.text, border: `1.5px solid ${c.border}` }}
    >
      {value ?? '-'}
    </span>
  );
}

function ScoreSelector({ value, onChange, disabled = false }) {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2, 3].map(n => {
        const active = value === n;
        const c = SCORE_COLORS[n];
        return (
          <button
            key={n}
            onClick={() => !disabled && onChange(n)}
            disabled={disabled}
            className="w-11 h-11 rounded-xl text-base font-bold transition-all disabled:cursor-not-allowed"
            style={active ? {
              background: c.bg, color: c.text,
              border: `2px solid ${c.border}`,
              boxShadow: `0 0 0 3px ${c.bg}90`,
            } : {
              background: '#f1f3fc', color: '#9ca3af',
              border: '2px solid transparent',
            }}
          >
            {n}
          </button>
        );
      })}
    </div>
  );
}

function LevelSelector({ value, onChange }) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {LEVELS.map(l => {
        const active = value === l.value;
        const c = LEVEL_COLORS[l.value] ?? {};
        return (
          <button key={l.value} onClick={() => onChange(l.value)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={active
              ? { background: c.bg, color: c.text, border: `1.5px solid ${c.border}` }
              : { background: '#f1f3fc', color: '#6b7280', border: '1.5px solid transparent' }}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}

function CdpComment({ comment }) {
  const [open, setOpen] = useState(true);
  if (!comment) return null;
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 text-xs font-medium transition-colors"
        style={{ color: open ? '#000a43' : '#6b7280' }}
      >
        <span
          className="inline-block transition-transform duration-200"
          style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▶
        </span>
        Commentaire CDP
      </button>
      {open && (
        <div
          className="mt-2 px-4 py-3 rounded-xl text-xs leading-relaxed whitespace-pre-wrap"
          style={{ background: '#eef0f8', color: '#44474f', borderLeft: '3px solid #c7cbdf' }}
        >
          {comment}
        </div>
      )}
    </div>
  );
}

// ─── Score matrix ─────────────────────────────────────────────────────────────

function EcartBadge({ ecart }) {
  if (ecart === null || ecart === undefined) return <span className="text-xs text-on-surface-var">-</span>;
  const abs   = Math.abs(ecart);
  const label = ecart === 0 ? '=' : ecart > 0 ? `+${ecart}` : `${ecart}`;
  const style = ecart === 0
    ? { color: '#16a34a', bg: '#f0fdf4', border: '#86efac' }
    : abs >= 2
    ? { color: '#dc2626', bg: '#fef2f2', border: '#fca5a5' }
    : { color: '#b45309', bg: '#fffbeb', border: '#fcd34d' };
  return (
    <span
      className="inline-flex items-center justify-center w-10 h-8 rounded-lg text-sm font-bold"
      style={{ background: style.bg, color: style.color, border: `1.5px solid ${style.border}` }}
    >
      {label}
    </span>
  );
}

function ScoreMatrix({ draft, onFinalQtyChange, onFinalQltChange }) {
  const manualQty = draft.ops_quantity_manual_score;
  const manualQlt = draft.ops_quality_manual_score;
  const cdpQty    = draft.ops_quantity_cdp_score;
  const cdpQlt    = draft.ops_quality_cdp_score;
  const finalQty  = draft.ops_quantity_final_score;
  const finalQlt  = draft.ops_quality_final_score;
  const ecartQty  = cdpQty != null ? manualQty - cdpQty : null;
  const ecartQlt  = cdpQlt != null ? manualQlt - cdpQlt : null;

  const rows = [
    {
      key: 'manual', label: 'Manuel', sub: 'évaluation interne',
      qty: <ScoreChip value={manualQty} size="lg" />,
      qlt: <ScoreChip value={manualQlt} size="lg" />,
    },
    {
      key: 'cdp', label: 'CDP', sub: 'données externes',
      qty: <ScoreChip value={cdpQty} size="lg" />,
      qlt: <ScoreChip value={cdpQlt} size="lg" />,
    },
    {
      key: 'ecart', label: 'Écart', sub: 'manuel − CDP',
      qty: <EcartBadge ecart={ecartQty} />,
      qlt: <EcartBadge ecart={ecartQlt} />,
    },
    {
      key: 'final', label: 'Final', sub: 'score décidé · modifiable',
      qty: <ScoreSelector value={finalQty} onChange={onFinalQtyChange} />,
      qlt: <ScoreSelector value={finalQlt} onChange={onFinalQltChange} />,
      highlight: true,
    },
  ];

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: '#fff', boxShadow: '0 1px 12px rgba(0,10,67,0.06)' }}
    >
      {/* Column headers */}
      <div className="grid grid-cols-[10rem_1fr_1fr] border-b" style={{ background: '#eef0f8', borderColor: '#e0e2eb' }}>
        <div className="px-5 py-3" />
        <div className="px-5 py-3 text-xs font-semibold text-on-surface-var uppercase tracking-wider text-center">
          Quantité
        </div>
        <div className="px-5 py-3 text-xs font-semibold text-on-surface-var uppercase tracking-wider text-center border-l" style={{ borderColor: '#e0e2eb' }}>
          Qualité
        </div>
      </div>

      {rows.map(({ key, label, sub, qty, qlt, highlight }) => (
        <div
          key={key}
          className="grid grid-cols-[10rem_1fr_1fr] border-b last:border-b-0 items-center"
          style={{
            borderColor: '#f1f3fc',
            background: highlight ? '#fafbff' : 'transparent',
          }}
        >
          {/* Row label */}
          <div className="px-5 py-4 flex flex-col gap-0.5">
            <span
              className="text-sm font-semibold"
              style={{ color: highlight ? '#000a43' : '#374151' }}
            >
              {label}
            </span>
            <span className="text-[0.625rem] text-on-surface-var">{sub}</span>
          </div>
          {/* Qty cell */}
          <div className="px-5 py-4 flex justify-center items-center">
            {qty}
          </div>
          {/* Qlt cell */}
          <div className="px-5 py-4 flex justify-center items-center border-l" style={{ borderColor: '#f1f3fc' }}>
            {qlt}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Draft helpers ────────────────────────────────────────────────────────────

function initDraft(sector) {
  if (!sector) return null;
  return {
    label:       sector.label       ?? '',
    description: sector.description ?? '',
    reviewed:    sector.reviewed    ?? false,
    to_check:    sector.to_check    ?? false,
    water_risk_quantity: sector.water_risk?.quantity ?? 'medium',
    water_risk_quality:  sector.water_risk?.quality  ?? 'medium',

    ops_sentence:            sector.operations?.sentence              ?? '',
    ops_quantity_level:      sector.operations?.quantity?.level       ?? 'medium',
    ops_quantity_description:sector.operations?.quantity?.description ?? '',
    ops_quantity_final_score:sector.operations?.quantity?.final_score ?? 0,
    ops_quantity_manual_score:sector.operations?.quantity?.manual_score ?? 0,
    ops_quantity_cdp_score:  sector.operations?.quantity?.cdp_score,
    ops_quantity_cdp_comment:sector.operations?.quantity?.cdp_comment ?? '',

    ops_quality_level:      sector.operations?.quality?.level        ?? 'medium',
    ops_quality_description:sector.operations?.quality?.description  ?? '',
    ops_quality_final_score:sector.operations?.quality?.final_score  ?? 0,
    ops_quality_manual_score:sector.operations?.quality?.manual_score ?? 0,
    ops_quality_cdp_score:  sector.operations?.quality?.cdp_score,
    ops_quality_cdp_comment:sector.operations?.quality?.cdp_comment  ?? '',
  };
}

function buildPatchBody(draft) {
  return {
    label:       draft.label,
    description: draft.description,
    reviewed:    draft.reviewed,
    to_check:    draft.to_check,
    water_risk: {
      quantity: draft.water_risk_quantity,
      quality:  draft.water_risk_quality,
    },
    operations: {
      sentence: draft.ops_sentence,
      quantity: {
        level:       draft.ops_quantity_level,
        description: draft.ops_quantity_description,
        final_score: draft.ops_quantity_final_score,
      },
      quality: {
        level:       draft.ops_quality_level,
        description: draft.ops_quality_description,
        final_score: draft.ops_quality_final_score,
      },
    },
  };
}

// ─── Dimension card (Quantité or Qualité) ─────────────────────────────────────

function DimCard({ title, draft, descKey, cdpCommentKey, set }) {
  return (
    <div
      className="flex flex-col gap-5 p-5 rounded-2xl"
      style={{ background: '#f7f8fd' }}
    >
      <div className="text-sm font-semibold text-on-surface">{title}</div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-on-surface-var">Description</span>
        <textarea
          value={draft[descKey]}
          onChange={e => set(descKey, e.target.value)}
          rows={5}
          className="w-full px-3 py-2 rounded-xl border text-xs resize-none"
          style={{ borderColor: '#e0e2eb', background: '#fff', lineHeight: 1.65 }}
        />
      </div>

      {/* CDP comment */}
      <CdpComment comment={draft[cdpCommentKey]} />
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function SectorDetailPage() {
  const { id }      = useParams();
  const navigate    = useNavigate();
  const location    = useLocation();

  const [sector, setSector]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const [draft, setDraft]     = useState(null);
  const [isDirty, setIsDirty] = useState(false);
  const [saving, setSaving]   = useState(false);
  const [saveOk, setSaveOk]   = useState(false);
  const [allIds, setAllIds]   = useState(location.state?.orderedIds ?? []);

  useEffect(() => {
    if (location.state?.orderedIds) return;
    fetchSectorsList()
      .then(list => {
        const sorted = [...list].sort((a, b) => (a.naf_code ?? '').localeCompare(b.naf_code ?? ''));
        setAllIds(sorted.map(s => s._id));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setSaveOk(false);
    fetchSector(id)
      .then(data => {
        setSector(data);
        setDraft(initDraft(data));
        setIsDirty(false);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  const set = useCallback((key, value) => {
    setDraft(d => {
      const next = { ...d, [key]: value };
      if (key !== 'reviewed' && key !== 'to_check') next.reviewed = true;
      return next;
    });
    setIsDirty(true);
    setSaveOk(false);
  }, []);

  async function save() {
    setSaving(true);
    try {
      await patchSector(id, buildPatchBody(draft));
      setIsDirty(false);
      setSaveOk(true);
      setTimeout(() => setSaveOk(false), 3000);
    } catch (e) {
      alert(`Erreur lors de la sauvegarde : ${e.message}`);
    } finally {
      setSaving(false);
    }
  }

  function goTo(targetId) {
    if (!targetId) return;
    if (isDirty && !window.confirm('Des modifications non sauvegardées seront perdues. Continuer ?')) return;
    navigate(`/sectors/${targetId}`, { state: { orderedIds: allIds } });
  }

  function goBack() {
    if (isDirty && !window.confirm('Des modifications non sauvegardées seront perdues. Continuer ?')) return;
    navigate('/sectors');
  }

  const currentIndex = allIds.indexOf(id);
  const prevId = currentIndex > 0                   ? allIds[currentIndex - 1] : null;
  const nextId = currentIndex < allIds.length - 1   ? allIds[currentIndex + 1] : null;

  // ─── Loading / error ──────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar />
        <div className="flex items-center justify-center py-32 text-on-surface-var text-sm">
          Chargement…
        </div>
      </div>
    );
  }

  if (error || !draft) {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <p className="text-on-surface-var text-sm">Secteur introuvable.</p>
          <button onClick={() => navigate('/sectors')} className="text-sm text-primary underline">
            ← Retour au référentiel
          </button>
        </div>
      </div>
    );
  }

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-5">

        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button onClick={goBack} className="text-xs text-on-surface-var hover:text-on-surface transition-colors shrink-0">
              ← Référentiel
            </button>
            <span className="font-mono text-xs px-2 py-0.5 rounded-md shrink-0" style={{ background: '#e8eaf3', color: '#000a43' }}>
              {sector.naf_code}
            </span>
            <h1 className="text-sm font-semibold text-on-surface truncate flex-1" title={sector.label}>
              {sector.label}
            </h1>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => goTo(prevId)} disabled={!prevId}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-30"
              style={{ background: '#f1f3fc', color: '#000a43' }}
            >
              ← Préc.
            </button>
            {currentIndex >= 0 && (
              <span className="text-xs text-on-surface-var tabular-nums whitespace-nowrap">
                {currentIndex + 1} / {allIds.length}
              </span>
            )}
            <button
              onClick={() => goTo(nextId)} disabled={!nextId}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-30"
              style={{ background: '#f1f3fc', color: '#000a43' }}
            >
              Suiv. →
            </button>
          </div>
        </div>

        {/* ── Actions bar ── */}
        <div
          className="flex items-center gap-3 flex-wrap px-5 py-3 rounded-2xl"
          style={{ background: '#fff', boxShadow: '0 1px 12px rgba(0,10,67,0.06)' }}
        >
          <button
            onClick={() => set('reviewed', !draft.reviewed)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
            style={draft.reviewed
              ? { background: '#f0fdf4', color: '#16a34a', border: '1.5px solid #86efac' }
              : { background: '#f1f3fc', color: '#6b7280', border: '1.5px solid #e5e7eb' }}
          >
            <span>{draft.reviewed ? '✓' : '○'}</span> Révisé
          </button>

          <button
            onClick={() => set('to_check', !draft.to_check)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
            style={draft.to_check
              ? { background: '#fff7ed', color: '#c2410c', border: '1.5px solid #fdba74' }
              : { background: '#f1f3fc', color: '#6b7280', border: '1.5px solid #e5e7eb' }}
          >
            <span>⚑</span> À vérifier
          </button>

          <div className="flex-1" />

          {isDirty && (
            <span className="text-xs flex items-center gap-1.5" style={{ color: '#b45309' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#f59e0b' }} />
              Modifications non sauvegardées
            </span>
          )}
          {saveOk && !isDirty && (
            <span className="text-xs flex items-center gap-1.5" style={{ color: '#16a34a' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#22c55e' }} />
              Sauvegardé
            </span>
          )}

          <button
            onClick={save} disabled={saving || !isDirty}
            className="px-5 py-2 rounded-xl text-sm font-semibold transition-all disabled:opacity-40"
            style={{ background: isDirty ? '#000a43' : '#e8eaf3', color: isDirty ? '#fff' : '#44474f' }}
          >
            {saving ? 'Sauvegarde…' : 'Sauvegarder'}
          </button>
        </div>

        {/* ── General info ── */}
        <div
          className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: '#fff', boxShadow: '0 1px 12px rgba(0,10,67,0.06)' }}
        >
          <div className="text-xs font-semibold text-on-surface-var uppercase tracking-wider">
            Informations générales
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-on-surface-var">Intitulé</label>
              <input
                value={draft.label}
                onChange={e => set('label', e.target.value)}
                className="w-full px-3 py-2 rounded-xl border text-sm"
                style={{ borderColor: '#e0e2eb', background: '#fafbff' }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-on-surface-var">Risque eau global</label>
              <div className="flex gap-3 items-center">
                <span className="text-xs text-on-surface-var">Qté</span>
                <select
                  value={draft.water_risk_quantity}
                  onChange={e => set('water_risk_quantity', e.target.value)}
                  className="flex-1 px-2 py-1.5 rounded-lg border text-xs"
                  style={{ borderColor: '#e0e2eb', background: '#fafbff' }}
                >
                  {LEVELS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
                </select>
                <span className="text-xs text-on-surface-var">Qlt</span>
                <select
                  value={draft.water_risk_quality}
                  onChange={e => set('water_risk_quality', e.target.value)}
                  className="flex-1 px-2 py-1.5 rounded-lg border text-xs"
                  style={{ borderColor: '#e0e2eb', background: '#fafbff' }}
                >
                  {LEVELS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-on-surface-var">Description générale</label>
            <textarea
              value={draft.description}
              onChange={e => set('description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-xl border text-sm resize-none"
              style={{ borderColor: '#e0e2eb', background: '#fafbff' }}
            />
          </div>
        </div>

        {/* ── Score matrix ── */}
        <div>
          <div className="text-xs font-semibold text-on-surface-var uppercase tracking-wider mb-3 px-1">
            Opérations directes / scores
          </div>
          <ScoreMatrix
            draft={draft}
            onFinalQtyChange={v => set('ops_quantity_final_score', v)}
            onFinalQltChange={v => set('ops_quality_final_score', v)}
          />
        </div>

        {/* ── Phrase de synthèse ── */}
        <div
          className="rounded-2xl p-5"
          style={{ background: '#fff', boxShadow: '0 1px 12px rgba(0,10,67,0.06)' }}
        >
          <label className="text-xs font-semibold text-on-surface-var uppercase tracking-wider block mb-2">
            Phrase de synthèse / Opérations
          </label>
          <textarea
            value={draft.ops_sentence}
            onChange={e => set('ops_sentence', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 rounded-xl border text-sm resize-none"
            style={{ borderColor: '#e0e2eb', background: '#fafbff' }}
          />
        </div>

        {/* ── Quantité & Qualité cards ── */}
        <div>
          <div className="text-xs font-semibold text-on-surface-var uppercase tracking-wider mb-3 px-1">
            Détail par enjeu
          </div>
          <div className="grid grid-cols-2 gap-4">
            <DimCard
              title="Quantité"
              draft={draft}
              descKey="ops_quantity_description"
              cdpCommentKey="ops_quantity_cdp_comment"
              set={set}
            />
            <DimCard
              title="Qualité"
              draft={draft}
              descKey="ops_quality_description"
              cdpCommentKey="ops_quality_cdp_comment"
              set={set}
            />
          </div>
        </div>

        {/* ── Bottom nav ── */}
        <div className="flex justify-between items-center pb-8">
          <div className="flex gap-2">
            <button
              onClick={() => goTo(prevId)} disabled={!prevId}
              className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors disabled:opacity-30"
              style={{ background: '#f1f3fc', color: '#000a43' }}
            >
              ← Secteur précédent
            </button>
            <button
              onClick={() => goTo(nextId)} disabled={!nextId}
              className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors disabled:opacity-30"
              style={{ background: '#f1f3fc', color: '#000a43' }}
            >
              Secteur suivant →
            </button>
          </div>

          <button
            onClick={save} disabled={saving || !isDirty}
            className="px-8 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40"
            style={{ background: isDirty ? '#000a43' : '#e8eaf3', color: isDirty ? '#fff' : '#44474f' }}
          >
            {saving ? 'Sauvegarde en cours…' : isDirty ? 'Sauvegarder les modifications' : 'Aucune modification'}
          </button>
        </div>

      </main>
    </div>
  );
}
