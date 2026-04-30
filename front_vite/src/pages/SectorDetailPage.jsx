import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const SECTIONS = [
  { key: 'upstream',    label: 'Amont',      emoji: '⬆' },
  { key: 'operations',  label: 'Opérations', emoji: '⚙' },
  { key: 'downstream',  label: 'Aval',       emoji: '⬇' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ScoreChip({ value, size = 'sm' }) {
  const c = SCORE_COLORS[value ?? 0];
  const dim = size === 'lg' ? '2.5rem' : '1.75rem';
  const fs  = size === 'lg' ? '1rem' : '0.75rem';
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-bold"
      style={{ width: dim, height: dim, fontSize: fs, background: c.bg, color: c.text, border: `1.5px solid ${c.border}` }}
    >
      {value ?? '—'}
    </span>
  );
}

function ScoreSelector({ value, onChange }) {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2, 3].map(n => {
        const active = value === n;
        const c = SCORE_COLORS[n];
        return (
          <button
            key={n}
            onClick={() => onChange(n)}
            className="w-10 h-10 rounded-xl text-sm font-bold transition-all"
            style={active ? {
              background: c.bg,
              color: c.text,
              border: `2px solid ${c.border}`,
              boxShadow: `0 0 0 3px ${c.bg}80`,
            } : {
              background: '#f1f3fc',
              color: '#9ca3af',
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
          <button
            key={l.value}
            onClick={() => onChange(l.value)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={active ? {
              background: c.bg,
              color: c.text,
              border: `1.5px solid ${c.border}`,
            } : {
              background: '#f1f3fc',
              color: '#6b7280',
              border: '1.5px solid transparent',
            }}
          >
            {l.label}
          </button>
        );
      })}
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

    upstream_sentence:             sector.upstream?.sentence                 ?? '',
    upstream_quantity_level:       sector.upstream?.quantity?.level          ?? 'medium',
    upstream_quantity_description: sector.upstream?.quantity?.description    ?? '',
    upstream_quantity_final_score: sector.upstream?.quantity?.final_score    ?? 0,
    upstream_quantity_manual_score: sector.upstream?.quantity?.manual_score  ?? 0,
    upstream_quantity_cdp_score:   sector.upstream?.quantity?.cdp_score,
    upstream_quality_level:        sector.upstream?.quality?.level           ?? 'medium',
    upstream_quality_description:  sector.upstream?.quality?.description     ?? '',
    upstream_quality_final_score:  sector.upstream?.quality?.final_score     ?? 0,
    upstream_quality_manual_score: sector.upstream?.quality?.manual_score    ?? 0,
    upstream_quality_cdp_score:    sector.upstream?.quality?.cdp_score,

    operations_sentence:             sector.operations?.sentence              ?? '',
    operations_quantity_level:       sector.operations?.quantity?.level       ?? 'medium',
    operations_quantity_description: sector.operations?.quantity?.description ?? '',
    operations_quantity_final_score: sector.operations?.quantity?.final_score ?? 0,
    operations_quantity_manual_score: sector.operations?.quantity?.manual_score ?? 0,
    operations_quantity_cdp_score:   sector.operations?.quantity?.cdp_score,
    operations_quality_level:        sector.operations?.quality?.level        ?? 'medium',
    operations_quality_description:  sector.operations?.quality?.description  ?? '',
    operations_quality_final_score:  sector.operations?.quality?.final_score  ?? 0,
    operations_quality_manual_score: sector.operations?.quality?.manual_score ?? 0,
    operations_quality_cdp_score:    sector.operations?.quality?.cdp_score,

    downstream_sentence:             sector.downstream?.sentence              ?? '',
    downstream_quantity_level:       sector.downstream?.quantity?.level       ?? 'medium',
    downstream_quantity_description: sector.downstream?.quantity?.description ?? '',
    downstream_quantity_final_score: sector.downstream?.quantity?.final_score ?? 0,
    downstream_quantity_manual_score: sector.downstream?.quantity?.manual_score ?? 0,
    downstream_quantity_cdp_score:   sector.downstream?.quantity?.cdp_score,
    downstream_quality_level:        sector.downstream?.quality?.level        ?? 'medium',
    downstream_quality_description:  sector.downstream?.quality?.description  ?? '',
    downstream_quality_final_score:  sector.downstream?.quality?.final_score  ?? 0,
    downstream_quality_manual_score: sector.downstream?.quality?.manual_score ?? 0,
    downstream_quality_cdp_score:    sector.downstream?.quality?.cdp_score,
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
    upstream: {
      sentence: draft.upstream_sentence,
      quantity: {
        level:        draft.upstream_quantity_level,
        description:  draft.upstream_quantity_description,
        final_score:  draft.upstream_quantity_final_score,
        manual_score: draft.upstream_quantity_manual_score,
      },
      quality: {
        level:        draft.upstream_quality_level,
        description:  draft.upstream_quality_description,
        final_score:  draft.upstream_quality_final_score,
        manual_score: draft.upstream_quality_manual_score,
      },
    },
    operations: {
      sentence: draft.operations_sentence,
      quantity: {
        level:        draft.operations_quantity_level,
        description:  draft.operations_quantity_description,
        final_score:  draft.operations_quantity_final_score,
        manual_score: draft.operations_quantity_manual_score,
      },
      quality: {
        level:        draft.operations_quality_level,
        description:  draft.operations_quality_description,
        final_score:  draft.operations_quality_final_score,
        manual_score: draft.operations_quality_manual_score,
      },
    },
    downstream: {
      sentence: draft.downstream_sentence,
      quantity: {
        level:        draft.downstream_quantity_level,
        description:  draft.downstream_quantity_description,
        final_score:  draft.downstream_quantity_final_score,
        manual_score: draft.downstream_quantity_manual_score,
      },
      quality: {
        level:        draft.downstream_quality_level,
        description:  draft.downstream_quality_description,
        final_score:  draft.downstream_quality_final_score,
        manual_score: draft.downstream_quality_manual_score,
      },
    },
  };
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function SectorDetailPage() {
  const { id }   = useParams();
  const navigate = useNavigate();

  const [sector, setSector]     = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [draft, setDraft]       = useState(null);
  const [isDirty, setIsDirty]   = useState(false);
  const [saving, setSaving]     = useState(false);
  const [saveOk, setSaveOk]     = useState(false);
  const [activeTab, setActiveTab] = useState('operations');
  const [allIds, setAllIds]     = useState([]);

  // Fetch sorted ID list for prev / next
  useEffect(() => {
    fetchSectorsList()
      .then(list => {
        const sorted = [...list].sort((a, b) => (a.naf_code ?? '').localeCompare(b.naf_code ?? ''));
        setAllIds(sorted.map(s => s._id));
      })
      .catch(() => {});
  }, []);

  // Fetch sector detail when ID changes
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
    setDraft(d => ({ ...d, [key]: value }));
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
    navigate(`/sectors/${targetId}`);
  }

  function goBack() {
    if (isDirty && !window.confirm('Des modifications non sauvegardées seront perdues. Continuer ?')) return;
    navigate('/sectors');
  }

  const currentIndex = allIds.indexOf(id);
  const prevId = currentIndex > 0              ? allIds[currentIndex - 1] : null;
  const nextId = currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : null;

  // ─── Loading / error states ─────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar />
        <div className="flex items-center justify-center py-32 text-on-surface-var text-sm">
          Chargement du secteur…
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
      <main className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-5">

        {/* ── Header row ── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button
              onClick={goBack}
              className="text-xs text-on-surface-var hover:text-on-surface transition-colors shrink-0"
            >
              ← Référentiel
            </button>
            <span
              className="font-mono text-xs px-2 py-0.5 rounded-md shrink-0"
              style={{ background: '#e8eaf3', color: '#000a43' }}
            >
              {sector.naf_code}
            </span>
            <h1
              className="text-sm font-semibold text-on-surface truncate flex-1"
              title={sector.label}
            >
              {sector.label}
            </h1>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => goTo(prevId)}
              disabled={!prevId}
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
              onClick={() => goTo(nextId)}
              disabled={!nextId}
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
          {/* Reviewed toggle */}
          <button
            onClick={() => set('reviewed', !draft.reviewed)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
            style={draft.reviewed ? {
              background: '#f0fdf4', color: '#16a34a', border: '1.5px solid #86efac',
            } : {
              background: '#f1f3fc', color: '#6b7280', border: '1.5px solid #e5e7eb',
            }}
          >
            <span style={{ fontSize: '1rem' }}>{draft.reviewed ? '✓' : '○'}</span>
            Révisé
          </button>

          {/* To-check toggle */}
          <button
            onClick={() => set('to_check', !draft.to_check)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
            style={draft.to_check ? {
              background: '#fff7ed', color: '#c2410c', border: '1.5px solid #fdba74',
            } : {
              background: '#f1f3fc', color: '#6b7280', border: '1.5px solid #e5e7eb',
            }}
          >
            <span>⚑</span>
            À vérifier
          </button>

          <div className="flex-1" />

          {/* Unsaved indicator */}
          {isDirty && (
            <span className="text-xs flex items-center gap-1.5" style={{ color: '#b45309' }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#f59e0b' }} />
              Modifications non sauvegardées
            </span>
          )}
          {saveOk && !isDirty && (
            <span className="text-xs flex items-center gap-1.5" style={{ color: '#16a34a' }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
              Sauvegardé
            </span>
          )}

          <button
            onClick={save}
            disabled={saving || !isDirty}
            className="px-5 py-2 rounded-xl text-sm font-semibold transition-all disabled:opacity-40"
            style={{
              background: isDirty ? '#000a43' : '#e8eaf3',
              color: isDirty ? '#fff' : '#44474f',
            }}
          >
            {saving ? 'Sauvegarde…' : 'Sauvegarder'}
          </button>
        </div>

        {/* ── Score overview ── */}
        <div
          className="rounded-2xl p-4"
          style={{ background: '#fff', boxShadow: '0 1px 12px rgba(0,10,67,0.06)' }}
        >
          <div className="text-xs font-semibold text-on-surface-var uppercase tracking-wider mb-3">
            Scores — vue d'ensemble
          </div>
          <div className="grid grid-cols-3 gap-0 divide-x divide-surface-high">
            {SECTIONS.map(({ key, label }) => {
              const qtyScore = draft[`${key}_quantity_manual_score`];
              const qltScore = draft[`${key}_quality_manual_score`];
              const qtyCdp   = draft[`${key}_quantity_cdp_score`];
              const total    = qtyScore + qltScore;
              return (
                <div key={key} className="px-4 flex flex-col gap-2">
                  <div className="text-xs font-semibold text-on-surface-var">{label}</div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-0.5">
                      <ScoreChip value={qtyScore} />
                      <span className="text-[0.5625rem] text-on-surface-var">Qté</span>
                      {qtyCdp != null && (
                        <span
                          className="text-[0.5rem] font-medium mt-0.5"
                          style={{ color: qtyScore === qtyCdp ? '#9ca3af' : '#c2410c' }}
                        >
                          CDP:{qtyCdp}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <ScoreChip value={qltScore} />
                      <span className="text-[0.5625rem] text-on-surface-var">Qlt</span>
                    </div>
                    <div className="ml-auto text-right">
                      <span className="text-xl font-bold text-primary">{total}</span>
                      <span className="text-xs text-on-surface-var">/6</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── General info ── */}
        <div
          className="rounded-2xl p-6 flex flex-col gap-5"
          style={{ background: '#fff', boxShadow: '0 1px 12px rgba(0,10,67,0.06)' }}
        >
          <div className="text-xs font-semibold text-on-surface-var uppercase tracking-wider">
            Informations générales
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-on-surface-var">Intitulé du secteur</label>
            <input
              value={draft.label}
              onChange={e => set('label', e.target.value)}
              className="w-full px-3 py-2 rounded-xl border text-sm"
              style={{ borderColor: '#e0e2eb', background: '#fafbff' }}
            />
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

          <div>
            <div className="text-xs text-on-surface-var mb-3">Risque eau global</div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium text-on-surface">Quantité</span>
                <LevelSelector value={draft.water_risk_quantity} onChange={v => set('water_risk_quantity', v)} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium text-on-surface">Qualité</span>
                <LevelSelector value={draft.water_risk_quality} onChange={v => set('water_risk_quality', v)} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Section tabs (Amont / Opérations / Aval) ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: '#fff', boxShadow: '0 1px 12px rgba(0,10,67,0.06)' }}
        >
          {/* Tab bar */}
          <div className="flex border-b border-surface-high">
            {SECTIONS.map(({ key, label }) => {
              const qtyScore = draft[`${key}_quantity_manual_score`];
              const qltScore = draft[`${key}_quality_manual_score`];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className="flex-1 py-3 text-sm font-medium transition-colors flex flex-col items-center gap-1.5"
                  style={isActive ? {
                    color: '#000a43',
                    background: '#f5f6fc',
                    borderBottom: '2px solid #051b71',
                  } : {
                    color: '#6b7280',
                  }}
                >
                  <span>{label}</span>
                  <div className="flex gap-1.5">
                    <ScoreChip value={qtyScore} />
                    <ScoreChip value={qltScore} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          {SECTIONS.map(({ key, label }) =>
            activeTab !== key ? null : (
              <div key={key} className="p-6 flex flex-col gap-6">

                {/* Synthesis sentence */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-on-surface-var uppercase tracking-wider">
                    Phrase de synthèse — {label}
                  </label>
                  <textarea
                    value={draft[`${key}_sentence`]}
                    onChange={e => set(`${key}_sentence`, e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 rounded-xl border text-sm resize-none"
                    style={{ borderColor: '#e0e2eb', background: '#fafbff' }}
                  />
                </div>

                {/* Quantity / Quality grid */}
                <div className="grid grid-cols-2 gap-4">
                  {['quantity', 'quality'].map(dim => {
                    const dimLabel    = dim === 'quantity' ? 'Quantité' : 'Qualité';
                    const levelKey    = `${key}_${dim}_level`;
                    const manualKey   = `${key}_${dim}_manual_score`;
                    const finalKey    = `${key}_${dim}_final_score`;
                    const descKey     = `${key}_${dim}_description`;
                    const cdpVal      = draft[`${key}_${dim}_cdp_score`];
                    const manualVal   = draft[manualKey];
                    const ecart       = cdpVal != null ? manualVal - cdpVal : null;
                    const ecartColor  = ecart === 0 ? '#16a34a' : Math.abs(ecart ?? 0) >= 2 ? '#dc2626' : '#b45309';
                    const ecartLabel  = ecart === null ? null : ecart === 0 ? 'Accord CDP' : ecart > 0 ? `+${ecart} vs CDP` : `${ecart} vs CDP`;

                    return (
                      <div
                        key={dim}
                        className="flex flex-col gap-4 p-5 rounded-2xl"
                        style={{ background: '#f7f8fd' }}
                      >
                        {/* Column header */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-on-surface">{dimLabel}</span>
                          {ecartLabel && (
                            <span
                              className="text-xs font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                color: ecartColor,
                                background: ecart === 0 ? '#f0fdf4' : Math.abs(ecart) >= 2 ? '#fef2f2' : '#fffbeb',
                              }}
                            >
                              {ecartLabel}
                            </span>
                          )}
                        </div>

                        {/* CDP reference (read-only) */}
                        {cdpVal != null && (
                          <div
                            className="flex items-center justify-between px-3 py-2 rounded-xl"
                            style={{ background: '#eef0f8' }}
                          >
                            <span className="text-xs text-on-surface-var">Score CDP (référence)</span>
                            <ScoreChip value={cdpVal} size="lg" />
                          </div>
                        )}

                        {/* Manual score */}
                        <div className="flex flex-col gap-2">
                          <span className="text-xs text-on-surface-var font-medium">Score manuel</span>
                          <ScoreSelector value={draft[manualKey]} onChange={v => {
                            set(manualKey, v);
                            set(finalKey, v);
                          }} />
                        </div>

                        {/* Level */}
                        <div className="flex flex-col gap-2">
                          <span className="text-xs text-on-surface-var">Niveau qualitatif</span>
                          <LevelSelector value={draft[levelKey]} onChange={v => set(levelKey, v)} />
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-2">
                          <span className="text-xs text-on-surface-var">Description</span>
                          <textarea
                            value={draft[descKey]}
                            onChange={e => set(descKey, e.target.value)}
                            rows={5}
                            className="w-full px-3 py-2 rounded-xl border text-xs resize-none"
                            style={{ borderColor: '#e0e2eb', background: '#fff', lineHeight: 1.6 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>

        {/* ── Bottom save ── */}
        <div className="flex justify-between items-center pb-8">
          <div className="flex gap-2">
            <button
              onClick={() => goTo(prevId)}
              disabled={!prevId}
              className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors disabled:opacity-30"
              style={{ background: '#f1f3fc', color: '#000a43' }}
            >
              ← Secteur précédent
            </button>
            <button
              onClick={() => goTo(nextId)}
              disabled={!nextId}
              className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors disabled:opacity-30"
              style={{ background: '#f1f3fc', color: '#000a43' }}
            >
              Secteur suivant →
            </button>
          </div>

          <button
            onClick={save}
            disabled={saving || !isDirty}
            className="px-8 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40"
            style={{
              background: isDirty ? '#000a43' : '#e8eaf3',
              color: isDirty ? '#fff' : '#44474f',
            }}
          >
            {saving ? 'Sauvegarde en cours…' : isDirty ? 'Sauvegarder les modifications' : 'Aucune modification'}
          </button>
        </div>
      </main>
    </div>
  );
}
