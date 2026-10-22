import { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { fetchSectorsList, patchSector } from '../utils/api';

// ─── Constants ────────────────────────────────────────────────────────────────

const SCORE_COLORS = {
  0: { bg: '#f1f3fc', text: '#6b7280', border: '#d1d5db' },
  1: { bg: '#dcfce7', text: '#16a34a', border: '#86efac' },
  2: { bg: '#fef9c3', text: '#a16207', border: '#fde047' },
  3: { bg: '#fee2e2', text: '#dc2626', border: '#fca5a5' },
};

const SORT_OPTIONS = [
  { value: 'naf',          label: 'Code NAF' },
  { value: 'ecart_desc',   label: 'Écart |manuel − CDP| ↓' },
  { value: 'manual_desc',  label: 'Score manuel ↓' },
  { value: 'manual_asc',   label: 'Score manuel ↑' },
  { value: 'cdp_desc',     label: 'Score CDP ↓' },
  { value: 'final_desc',   label: 'Score final ↓' },
  { value: 'final_asc',    label: 'Score final ↑' },
  { value: 'status',       label: 'Statut (à vérifier en premier)' },
];

const STATUS_FILTERS = [
  { value: 'all',      label: 'Tous' },
  { value: 'to_check', label: 'À vérifier' },
  { value: 'reviewed', label: 'Révisés' },
  { value: 'pending',  label: 'Non révisés' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getOpsQty(s) {
  const manual = s.operations?.quantity?.manual_score ?? null;
  const cdp    = s.operations?.quantity?.cdp_score    ?? null;
  const final  = s.operations?.quantity?.final_score  ?? null;
  const ecart  = manual !== null && cdp !== null ? manual - cdp : null;
  return { manual, cdp, final, ecart };
}

function statusWeight(s) {
  if (s.to_check)  return 0;
  if (!s.reviewed) return 1;
  return 2;
}

function ecartColor(ecart) {
  if (ecart === null) return '#9ca3af';
  if (ecart === 0)  return '#16a34a';
  if (Math.abs(ecart) === 1) return '#a16207';
  return '#dc2626';
}

function ecartLabel(ecart) {
  if (ecart === null) return '-';
  if (ecart === 0)  return '=';
  return ecart > 0 ? `+${ecart}` : `${ecart}`;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ScoreChip({ value, muted = false }) {
  if (value === null || value === undefined) {
    return <span className="text-xs text-on-surface-var">-</span>;
  }
  const c = SCORE_COLORS[value];
  return (
    <span
      className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold"
      style={{
        background: muted ? '#f5f6fc' : c.bg,
        color: muted ? '#9ca3af' : c.text,
        border: `1.5px solid ${muted ? '#e0e2eb' : c.border}`,
        opacity: muted ? 0.85 : 1,
      }}
    >
      {value}
    </span>
  );
}

function EcartBadge({ ecart }) {
  const color = ecartColor(ecart);
  const label = ecartLabel(ecart);
  const abs   = ecart !== null ? Math.abs(ecart) : 0;
  return (
    <span
      className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold"
      style={{
        background: ecart === 0 ? '#f0fdf4' : abs >= 2 ? '#fef2f2' : '#fffbeb',
        color,
        border: `1.5px solid ${ecart === 0 ? '#86efac' : abs >= 2 ? '#fca5a5' : '#fcd34d'}`,
      }}
    >
      {label}
    </span>
  );
}

function StatusBadge({ reviewed, toCheck }) {
  if (toCheck) {
    return (
      <span className="px-2 py-0.5 rounded-full text-[0.6875rem] font-medium" style={{ background: '#fff7ed', color: '#c2410c', border: '1px solid #fdba74' }}>
        À vérifier
      </span>
    );
  }
  if (reviewed) {
    return (
      <span className="px-2 py-0.5 rounded-full text-[0.6875rem] font-medium" style={{ background: '#f0fdf4', color: '#15803d', border: '1px solid #86efac' }}>
        Révisé
      </span>
    );
  }
  return (
    <span className="px-2 py-0.5 rounded-full text-[0.6875rem] font-medium" style={{ background: '#f1f3fc', color: '#6b7280', border: '1px solid #e0e2eb' }}>
      Non révisé
    </span>
  );
}

// ─── Inline editors ───────────────────────────────────────────────────────────

function InlineFinalScore({ sectorId, value, updateLocal }) {
  const [pending, setPending] = useState(false);

  async function pick(e, n) {
    e.stopPropagation();
    if (n === value || pending) return;
    const prev = value;
    updateLocal(sectorId, s => ({
      ...s,
      operations: { ...s.operations, quantity: { ...s.operations?.quantity, final_score: n } },
    }));
    setPending(true);
    try {
      await patchSector(sectorId, { operations: { quantity: { final_score: n } } });
    } catch {
      updateLocal(sectorId, s => ({
        ...s,
        operations: { ...s.operations, quantity: { ...s.operations?.quantity, final_score: prev } },
      }));
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex gap-1 justify-center" onClick={e => e.stopPropagation()}>
      {[0, 1, 2, 3].map(n => {
        const active = value === n;
        const c = SCORE_COLORS[n];
        return (
          <button
            key={n}
            onClick={e => pick(e, n)}
            disabled={pending}
            className="w-7 h-7 rounded-lg text-xs font-bold transition-all disabled:opacity-40"
            style={active
              ? { background: c.bg, color: c.text, border: `1.5px solid ${c.border}` }
              : { background: '#f1f3fc', color: '#c4c8d8', border: '1.5px solid transparent' }}
          >
            {n}
          </button>
        );
      })}
    </div>
  );
}

function InlineReviewedToggle({ sectorId, reviewed, toCheck, updateLocal }) {
  const [pending, setPending] = useState(false);

  async function toggle(e) {
    e.stopPropagation();
    if (pending) return;
    const next = !reviewed;
    updateLocal(sectorId, s => ({ ...s, reviewed: next }));
    setPending(true);
    try {
      await patchSector(sectorId, { reviewed: next });
    } catch {
      updateLocal(sectorId, s => ({ ...s, reviewed: reviewed }));
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-1" onClick={e => e.stopPropagation()}>
      {toCheck && (
        <span className="px-2 py-0.5 rounded-full text-[0.6875rem] font-medium"
          style={{ background: '#fff7ed', color: '#c2410c', border: '1px solid #fdba74' }}>
          À vérifier
        </span>
      )}
      <button
        onClick={toggle}
        disabled={pending}
        className="px-2 py-0.5 rounded-full text-[0.6875rem] font-medium transition-all disabled:opacity-40"
        style={reviewed
          ? { background: '#f0fdf4', color: '#15803d', border: '1px solid #86efac' }
          : { background: '#f1f3fc', color: '#6b7280', border: '1px solid #e0e2eb' }}
      >
        {reviewed ? '✓ Révisé' : '○ Non révisé'}
      </button>
    </div>
  );
}

// ─── Stats bar ────────────────────────────────────────────────────────────────

function StatsBar({ sectors }) {
  const withData = sectors.filter(s => s.operations?.quantity?.manual_score != null && s.operations?.quantity?.cdp_score != null);
  const agree    = withData.filter(s => s.operations.quantity.manual_score === s.operations.quantity.cdp_score).length;
  const disagree = withData.length - agree;
  const manualAvg = withData.length
    ? (withData.reduce((sum, s) => sum + s.operations.quantity.manual_score, 0) / withData.length).toFixed(1)
    : '-';
  const cdpAvg = withData.length
    ? (withData.reduce((sum, s) => sum + s.operations.quantity.cdp_score, 0) / withData.length).toFixed(1)
    : '-';

  return (
    <div className="grid grid-cols-4 gap-3 mb-6">
      {[
        { label: 'Secteurs analysés', value: sectors.length, sub: 'total' },
        { label: 'Score manuel moy.', value: manualAvg, sub: '/ 3' },
        { label: 'Score CDP moy.',    value: cdpAvg,    sub: '/ 3' },
        { label: 'En désaccord',      value: disagree,  sub: `sur ${withData.length}`, warn: disagree > 0 },
      ].map(({ label, value, sub, warn }) => (
        <div
          key={label}
          className="rounded-2xl px-5 py-4"
          style={{ background: '#fff', boxShadow: '0 1px 12px rgba(0,10,67,0.05)' }}
        >
          <div className="text-xs text-on-surface-var mb-1">{label}</div>
          <div className="flex items-baseline gap-1">
            <span
              className="text-2xl font-bold"
              style={{ color: warn ? '#dc2626' : '#000a43' }}
            >
              {value}
            </span>
            <span className="text-xs text-on-surface-var">{sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function SectorsListPage() {
  const navigate = useNavigate();
  const [sectors, setSectors]           = useState([]);
  const [loading, setLoading]           = useState(true);
  const [search, setSearch]             = useState('');
  const [sortBy, setSortBy]             = useState('ecart_desc');
  const [statusFilter, setStatusFilter] = useState('all');

  const updateLocal = useCallback((sectorId, updater) => {
    setSectors(prev => prev.map(s => s._id === sectorId ? updater(s) : s));
  }, []);

  useEffect(() => {
    fetchSectorsList()
      .then(setSectors)
      .finally(() => setLoading(false));
  }, []);

  const counts = useMemo(() => ({
    all:      sectors.length,
    to_check: sectors.filter(s => s.to_check).length,
    reviewed: sectors.filter(s => s.reviewed && !s.to_check).length,
    pending:  sectors.filter(s => !s.reviewed && !s.to_check).length,
  }), [sectors]);

  const filtered = useMemo(() => {
    let list = [...sectors];

    if (statusFilter === 'to_check') list = list.filter(s => s.to_check);
    else if (statusFilter === 'reviewed') list = list.filter(s => s.reviewed && !s.to_check);
    else if (statusFilter === 'pending')  list = list.filter(s => !s.reviewed && !s.to_check);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(s =>
        s.label?.toLowerCase().includes(q) ||
        s.naf_code?.toLowerCase().includes(q) ||
        s._id?.toLowerCase().includes(q)
      );
    }

    list.sort((a, b) => {
      const sa = getOpsQty(a);
      const sb = getOpsQty(b);
      switch (sortBy) {
        case 'naf':         return (a.naf_code ?? '').localeCompare(b.naf_code ?? '');
        case 'ecart_desc':  return Math.abs(sb.ecart ?? 0) - Math.abs(sa.ecart ?? 0);
        case 'manual_desc': return (sb.manual ?? 0) - (sa.manual ?? 0);
        case 'manual_asc':  return (sa.manual ?? 0) - (sb.manual ?? 0);
        case 'cdp_desc':    return (sb.cdp ?? 0) - (sa.cdp ?? 0);
        case 'final_desc':  return (sb.final ?? -1) - (sa.final ?? -1);
        case 'final_asc':   return (sa.final ?? -1) - (sb.final ?? -1);
        case 'status':      return statusWeight(a) - statusWeight(b);
        default:            return 0;
      }
    });

    return list;
  }, [sectors, search, sortBy, statusFilter]);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-1">Référentiel sectoriel</h1>
          <p className="text-sm text-on-surface-var">
            Comparaison des scores <strong>opérations / quantité</strong>, manuel vs CDP
          </p>
        </div>

        {/* Stats */}
        {!loading && <StatsBar sectors={sectors} />}

        {/* Controls */}
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <input
            type="text"
            placeholder="Rechercher par code NAF ou intitulé…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl border text-sm"
            style={{ borderColor: '#e0e2eb', background: '#fff', minWidth: 280 }}
          />
          <div className="flex items-center gap-2">
            <span className="text-xs text-on-surface-var">Trier par</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl border text-sm"
              style={{ borderColor: '#e0e2eb', background: '#fff' }}
            >
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <div className="ml-auto text-xs text-on-surface-var">
            {filtered.length} secteur{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Status tabs */}
        <div className="flex border-b border-surface-high mb-0">
          {STATUS_FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setStatusFilter(f.value)}
              className={[
                'px-5 py-2.5 text-sm font-medium transition-colors rounded-t-lg',
                statusFilter === f.value
                  ? 'text-primary bg-surface-low border-b-2'
                  : 'text-on-surface-var hover:text-on-surface hover:bg-surface-low',
              ].join(' ')}
              style={statusFilter === f.value
                ? { borderColor: '#051b71', marginBottom: -1 }
                : { marginBottom: -1 }}
            >
              {f.label}
              <span className="ml-1.5 text-xs opacity-60">({counts[f.value]})</span>
            </button>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-24 text-on-surface-var text-sm">Chargement…</div>
        ) : (
          <div
            className="bg-surface-lowest rounded-b-2xl rounded-tr-2xl overflow-hidden"
            style={{ boxShadow: '0 2px 20px rgba(0,10,67,0.06)' }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#eef0f8' }}>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-var uppercase tracking-wider w-24">
                    Code NAF
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-on-surface-var uppercase tracking-wider">
                    Secteur
                  </th>
                  {/* Score block header */}
                  <th
                    className="text-center px-2 py-3 text-xs font-semibold text-on-surface-var uppercase tracking-wider"
                    colSpan={4}
                    style={{ borderLeft: '1px solid #dde0ec' }}
                  >
                    Opérations / Quantité
                  </th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-on-surface-var uppercase tracking-wider">
                    Statut
                  </th>
                </tr>
                <tr style={{ background: '#f5f6fc', borderBottom: '1px solid #e0e2eb' }}>
                  <th /><th />
                  <th className="text-center pb-2 pt-1 text-[0.6875rem] text-on-surface-var font-semibold" style={{ borderLeft: '1px solid #dde0ec' }}>
                    Manuel
                  </th>
                  <th className="text-center pb-2 pt-1 text-[0.6875rem] text-on-surface-var font-normal opacity-70">
                    CDP
                  </th>
                  <th className="text-center pb-2 pt-1 text-[0.6875rem] text-on-surface-var font-semibold">
                    Écart
                  </th>
                  <th className="text-center pb-2 pt-1 text-[0.6875rem] text-on-surface-var font-semibold" style={{ borderLeft: '1px solid #dde0ec' }}>
                    Final
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {filtered.map(s => {
                  const { manual, cdp, final, ecart } = getOpsQty(s);
                  return (
                    <tr
                      key={s._id}
                      onClick={(e) => {
                        if (e.target.closest('button')) return;
                        navigate(`/sectors/${s._id}`, { state: { orderedIds: filtered.map(x => x._id) } });
                      }}
                      className="border-t cursor-pointer hover:bg-surface-low transition-colors"
                      style={{ borderColor: '#eef0f8' }}
                    >
                      <td className="px-4 py-3 font-mono text-xs text-on-surface-var whitespace-nowrap">
                        {s.naf_code}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="line-clamp-2 text-on-surface text-sm leading-snug"
                          title={s.label}
                        >
                          {s.label}
                        </span>
                      </td>
                      {/* Manuel */}
                      <td className="px-4 py-3 text-center" style={{ borderLeft: '1px solid #eef0f8' }}>
                        <ScoreChip value={manual} />
                      </td>
                      {/* CDP */}
                      <td className="px-4 py-3 text-center">
                        <ScoreChip value={cdp} muted />
                      </td>
                      {/* Écart */}
                      <td className="px-4 py-3 text-center">
                        <EcartBadge ecart={ecart} />
                      </td>
                      {/* Final: inline editor */}
                      <td className="px-3 py-3 text-center" style={{ borderLeft: '1px solid #eef0f8' }}>
                        <InlineFinalScore sectorId={s._id} value={final} updateLocal={updateLocal} />
                      </td>
                      {/* Statut: inline reviewed toggle */}
                      <td className="px-4 py-3 text-center">
                        <InlineReviewedToggle sectorId={s._id} reviewed={s.reviewed} toCheck={s.to_check} updateLocal={updateLocal} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-on-surface-var text-sm">
                Aucun secteur ne correspond à ces critères.
              </div>
            )}
          </div>
        )}

        {/* Legend */}
        {!loading && (
          <div className="mt-4 flex items-center gap-5 flex-wrap">
            <span className="text-xs text-on-surface-var font-medium">Écart (manuel − CDP) :</span>
            {[
              { label: '= 0, accord', ecart: 0 },
              { label: '±1, léger', ecart: 1 },
              { label: '±2 ou ±3, fort', ecart: 2 },
            ].map(({ label, ecart }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs text-on-surface-var">
                <EcartBadge ecart={ecart} />
                {label}
              </span>
            ))}
            <span className="ml-4 text-xs text-on-surface-var">
              Score <span className="font-medium">Manuel</span> = évaluation hydros ·
              Score <span className="font-medium opacity-60">CDP</span> = données CDP
            </span>
          </div>
        )}
      </main>
    </div>
  );
}
