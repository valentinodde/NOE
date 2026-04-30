import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON as GeoJSONLayer, Marker, Popup, useMap } from 'react-leaflet';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, ReferenceArea,
  ComposedChart, Area, Customized,
} from 'recharts';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { getStressColor, getStressLabel } from '../utils/riskHelpers';

// Fix Leaflet default icon (Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// ─── Mock data — structured by horizon, replace with real API data ────────────

const MOCK_STRESS = {
  seuils: { faible: 0.2, modere: 0.4, eleve: 0.6, critique: 0.8 },
  actuel: {
    ratio: 0.52,
    phrase: "Les prélèvements représentent plus de la moitié des ressources disponibles lors des périodes d'étiage estival.",
  },
  '2030': {
    ratio: 0.65,
    phrase: "La hausse des températures accentue l'évapotranspiration et réduit la recharge des nappes. Des tensions estivales sont attendues.",
  },
  '2050': {
    ratio: 0.82,
    phrase: "La ressource en eau sera sous forte pression. Des adaptations significatives des usages seront nécessaires.",
  },
};

// Température : delta vs période de référence 1976–2005
const MOCK_TEMPERATURE = {
  actuel: null,
  '2030': 1.2,
  '2050': 2.4,
};

// Indicateurs climatiques clés par horizon
const MOCK_INDICATORS = {
  actuel: { precip_estivales_mm: 185, jours_sols_secs: 42, debit_etiage_pct: null },
  '2030': { precip_estivales_mm: 162, jours_sols_secs: 58, debit_etiage_pct: -18 },
  '2050': { precip_estivales_mm: 138, jours_sols_secs: 79, debit_etiage_pct: -35 },
};

const MOCK_CYCLE_EAU = {
  actuel: { precipitations_mm: 850, evapotranspiration_pct: 62, infiltration_pct: 22, ruissellement_pct: 16 },
  '2030': { precipitations_mm: 800, evapotranspiration_pct: 67, infiltration_pct: 20, ruissellement_pct: 13 },
  '2050': { precipitations_mm: 740, evapotranspiration_pct: 73, infiltration_pct: 17, ruissellement_pct: 10 },
};

const MOCK_PRELEVEMENTS = {
  actuel: { total_mm3: 145, agriculture: 68, aep: 22, industrie: 10 },
  '2030': { total_mm3: 158, agriculture: 71, aep: 21, industrie: 8  },
  '2050': { total_mm3: 172, agriculture: 74, aep: 19, industrie: 7  },
};

const MOIS_LABELS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];

// Décomposition mensuelle de l'eau (mm/mois) — évaporation croît en été
const MOCK_EAU_DECOMP = {
  actuel: {
    evaporation:   [38, 34, 34, 36, 36, 32, 27, 30, 33, 34, 36, 38],
    infiltration:  [26, 23, 21, 16, 12,  6,  3,  4, 11, 19, 25, 27],
    ruissellement: [19, 17, 14, 10,  6,  2,  1,  1,  7, 14, 18, 19],
  },
  '2030': {
    evaporation:   [40, 36, 37, 39, 40, 36, 31, 35, 38, 37, 38, 40],
    infiltration:  [23, 20, 18, 14, 10,  4,  2,  2,  9, 16, 22, 24],
    ruissellement: [16, 14, 11,  7,  4,  1,  0,  1,  5, 11, 15, 16],
  },
  '2050': {
    evaporation:   [42, 38, 40, 42, 43, 40, 35, 38, 41, 40, 41, 42],
    infiltration:  [20, 17, 14, 11,  7,  3,  1,  1,  7, 13, 18, 20],
    ruissellement: [13, 11,  8,  5,  2,  0,  0,  0,  3,  8, 12, 13],
  },
};

// Décomposition mensuelle des prélèvements (Mm³/mois) — pic agricole en été
const MOCK_PRELEV_DECOMP = {
  actuel: {
    agriculture: [1.2, 1.2, 2.8, 6.0, 10.4, 15.0, 17.2, 16.2,  7.8, 3.6, 1.4, 1.4],
    aep:         [3.9, 3.9, 4.0, 4.8,  4.5,  4.4,  4.4,  4.4,  3.4, 3.6, 4.6, 4.6],
    industrie:   [0.9, 0.9, 1.2, 1.2,  1.1,  0.6,  0.4,  0.4,  0.8, 0.8, 1.1, 1.1],
  },
  '2030': {
    agriculture: [1.3, 1.3, 3.0, 6.5, 11.4, 16.6, 18.9, 17.8,  8.5, 3.9, 1.5, 1.5],
    aep:         [4.0, 4.0, 4.1, 5.0,  4.6,  4.5,  4.6,  4.5,  3.5, 3.7, 4.7, 4.7],
    industrie:   [0.7, 0.7, 1.0, 1.0,  0.9,  0.5,  0.3,  0.3,  0.7, 0.7, 0.9, 0.9],
  },
  '2050': {
    agriculture: [1.5, 1.5, 3.3, 7.1, 12.4, 18.1, 20.6, 19.4,  9.3, 4.3, 1.6, 1.6],
    aep:         [4.1, 4.1, 4.2, 5.1,  4.7,  4.6,  4.7,  4.6,  3.6, 3.8, 4.8, 4.8],
    industrie:   [0.5, 0.5, 0.8, 0.8,  0.7,  0.4,  0.3,  0.3,  0.5, 0.6, 0.7, 0.7],
  },
};

const PRELEVEMENT_DETAILS = {
  agriculture: {
    icon: '🌾', label: 'Agriculture',
    color: '#22c55e', colorBg: 'rgba(34,197,94,0.10)',
    text: "L'irrigation agricole est le principal usage de l'eau du territoire, concentrée en période estivale. Les cultures céréalières et maraîchères représentent la majorité des prélèvements.",
  },
  aep: {
    icon: '🚰', label: 'Alimentation en eau potable',
    color: '#0097d6', colorBg: 'rgba(0,151,214,0.10)',
    text: "Les prélèvements pour l'eau potable alimentent les réseaux des communes du bassin versant. Relativement stables au fil de l'année, ils sont sensibles à la croissance démographique.",
  },
  industrie: {
    icon: '🏭', label: 'Industrie',
    color: '#64748b', colorBg: 'rgba(100,116,139,0.10)',
    text: "Les prélèvements industriels concernent principalement les processus de refroidissement et de fabrication. Les gains d'efficacité technologique tendent à réduire leur part au fil du temps.",
  },
};

// Design-system colors (from index.css @theme)
const SURFACE_LOW     = '#f1f3fc';
const SURFACE_HIGH    = '#e8eaf3';
const SURFACE_HIGHEST = '#e0e2eb';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pctDelta(current, reference) {
  if (!reference) return null;
  return Math.round(((current - reference) / Math.abs(reference)) * 100);
}

function fmtDelta(val, unit = '%') {
  if (val == null) return null;
  const sign = val > 0 ? '+' : '';
  return `${sign}${val}${unit}`;
}

// ─── Leaflet sub-component ────────────────────────────────────────────────────

function FitBoundsToGeoJSON({ geojson }) {
  const map = useMap();
  useEffect(() => {
    if (!geojson) return;
    const layer = L.geoJSON(geojson);
    const bounds = layer.getBounds();
    if (bounds.isValid()) map.fitBounds(bounds, { padding: [25, 25] });
  }, [map, geojson]);
  return null;
}

// ─── Mini stress gauge (solid fill, color by level) ──────────────────────────

function MiniStressGauge({ ratio, seuils, active }) {
  const color   = getStressColor(ratio, seuils);
  const maxVal  = (seuils?.critique ?? 0.8) * 10;
  const pct     = Math.min(Math.round(ratio / maxVal * 100), 100);
  return (
    <div
      className="relative h-2.5 rounded-full overflow-hidden"
      style={{ background: active ? SURFACE_HIGHEST : '#d4d7e8' }}
    >
      <div
        className="absolute top-0 left-0 h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, background: color, opacity: active ? 1 : 0.5 }}
      />
    </div>
  );
}

// ─── Delta badge ──────────────────────────────────────────────────────────────

function DeltaBadge({ text, bad }) {
  if (!text) return null;
  return (
    <span
      className="text-[0.625rem] font-bold px-1.5 py-0.5 rounded-full shrink-0"
      style={{
        background: bad ? 'rgba(239,68,68,0.10)' : 'rgba(34,197,94,0.10)',
        color: bad ? '#ef4444' : '#22c55e',
      }}
    >
      {text}
    </span>
  );
}

// ─── Indicateur card ──────────────────────────────────────────────────────────

function IndicateurCard({ icon, label, main, mainUnit, mainColor, sub, badge }) {
  return (
    <div
      className="rounded-xl p-3 flex flex-col gap-2"
      style={{ background: '#fff', boxShadow: '0 1px 3px rgba(0,0,20,0.06)' }}
    >
      <div className="flex items-start justify-between gap-1">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-[0.9375rem] shrink-0">{icon}</span>
          <p className="text-[0.5625rem] text-on-surface-var uppercase tracking-widest leading-tight">
            {label}
          </p>
        </div>
        {badge && <DeltaBadge text={badge.text} bad={badge.bad} />}
      </div>

      {main != null ? (
        <p
          className="text-[1.125rem] font-bold leading-none"
          style={{ color: mainColor ?? '#000a43' }}
        >
          {main}
          {mainUnit && (
            <span className="text-[0.6875rem] font-medium text-on-surface-var ml-0.5">
              {mainUnit}
            </span>
          )}
        </p>
      ) : (
        <p className="text-[0.75rem] font-medium text-on-surface-var italic leading-snug">
          Référence
        </p>
      )}

      {sub && (
        <p className="text-[0.5625rem] text-on-surface-var leading-tight">{sub}</p>
      )}
    </div>
  );
}

// ─── Indicateurs row (4 cards) ────────────────────────────────────────────────

function IndicateursRow({ horizon, projClimat }) {
  const mockInd = MOCK_INDICATORS[horizon];
  const ind = {
    precip_estivales_mm: projClimat?.precip_estivales_mm?.[horizon] ?? mockInd.precip_estivales_mm,
    jours_sols_secs:     projClimat?.jours_sols_secs?.[horizon]     ?? mockInd.jours_sols_secs,
    debit_etiage_pct:    projClimat?.debit_etiage_pct?.[horizon]    ?? mockInd.debit_etiage_pct,
  };
  const rawTemp   = projClimat?.temperature_delta_c?.[horizon] ?? MOCK_TEMPERATURE[horizon];
  const tempDelta = rawTemp != null ? Number(rawTemp) : null;
  const isRef    = horizon === 'actuel';
  const refInd   = {
    precip_estivales_mm: projClimat?.precip_estivales_mm?.actuel ?? MOCK_INDICATORS.actuel.precip_estivales_mm,
    jours_sols_secs:     projClimat?.jours_sols_secs?.actuel     ?? MOCK_INDICATORS.actuel.jours_sols_secs,
  };

  const precipDelta = isRef ? null : pctDelta(ind.precip_estivales_mm, refInd.precip_estivales_mm);
  const joursDelta  = isRef ? null : pctDelta(ind.jours_sols_secs,     refInd.jours_sols_secs);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {/* Température */}
      <IndicateurCard
        icon="🌡️"
        label="Température"
        main={
          isRef ? null
          : tempDelta != null ? (tempDelta > 0 ? `+${tempDelta.toFixed(1)}` : tempDelta.toFixed(1))
          : null
        }
        mainUnit={isRef ? null : '°C'}
        mainColor={
          !isRef && tempDelta != null
            ? tempDelta >= 2 ? '#ef4444' : '#f97316'
            : undefined
        }
        sub={isRef ? 'Période de référence 1976–2005' : 'vs réf. 1976–2005'}
        badge={null}
      />

      {/* Précipitations estivales */}
      <IndicateurCard
        icon="🌧️"
        label="Précip. estivales"
        main={ind.precip_estivales_mm}
        mainUnit="mm"
        sub={isRef ? 'Cumul juin–août — référence' : 'Cumul juin–août'}
        badge={
          !isRef && precipDelta != null
            ? { text: fmtDelta(precipDelta), bad: precipDelta < 0 }
            : null
        }
      />

      {/* Jours avec sols secs */}
      <IndicateurCard
        icon="🏜️"
        label="Jours sols secs"
        main={ind.jours_sols_secs}
        mainUnit="j"
        sub={isRef ? 'Indice SWI < 0,1 — référence' : 'Indice SWI < 0,1'}
        badge={
          !isRef && joursDelta != null
            ? { text: fmtDelta(joursDelta), bad: joursDelta > 0 }
            : null
        }
      />

      {/* Débit d'étiage */}
      <IndicateurCard
        icon="🌊"
        label="Débit d'étiage"
        main={isRef ? null : ind.debit_etiage_pct}
        mainUnit={isRef ? null : '%'}
        mainColor={!isRef && ind.debit_etiage_pct != null && ind.debit_etiage_pct < 0 ? '#ef4444' : undefined}
        sub="QMNA5 vs période de référence"
        badge={null}
      />
    </div>
  );
}

// ─── Bloc 2 — Disponibilité en eau (3 accordéons) ────────────────────────────

function WaterCycleFlow({ cycleEau, horizon, precip, projClimat }) {
  const [openEfficaces, setOpenEfficaces] = useState(false);
  const [openEstivales, setOpenEstivales] = useState(false);

  const data = cycleEau?.[horizon] ?? MOCK_CYCLE_EAU[horizon];

  const {
    precipitations_mm: mm,
    evapotranspiration_pct: evapo,
    infiltration_pct: infil,
    ruissellement_pct: ruis,
  } = data;

  const evapoMm     = Math.round(mm * evapo / 100);
  const infilMm     = Math.round(mm * infil / 100);
  const ruisMm      = Math.round(mm * ruis  / 100);
  const efficacesMm = infilMm + ruisMm;
  const availPct    = Math.round(infil + ruis);
  const estivalesMm = projClimat?.precip_estivales_mm?.[horizon] ?? MOCK_INDICATORS[horizon].precip_estivales_mm;

  const isRef        = horizon === 'actuel';
  const refCycle     = cycleEau?.actuel ?? MOCK_CYCLE_EAU.actuel;
  const refEfficaces = Math.round(
    refCycle.precipitations_mm * (refCycle.infiltration_pct + refCycle.ruissellement_pct) / 100
  );
  const estivalesRef = projClimat?.precip_estivales_mm?.actuel ?? MOCK_INDICATORS.actuel.precip_estivales_mm;

  const annuellesDelta = isRef ? null : pctDelta(mm, refCycle.precipitations_mm);
  const efficacesDelta = isRef ? null : pctDelta(efficacesMm, refEfficaces);
  const estivalesDelta = isRef ? null : pctDelta(estivalesMm, estivalesRef);

  // Monthly chart: show projected line for selected horizon if data exists, else fall back to 2050
  const projKey = horizon === 'actuel' ? null
    : precip?.[horizon] ? horizon
    : precip?.['2050']  ? '2050'
    : null;
  const precipChartData = precip?.mois?.map((mois, i) => {
    const row = { mois, Actuel: precip.actuel?.[i] };
    if (projKey) row[projKey] = precip[projKey]?.[i];
    return row;
  }) ?? [];

  const rawBands = [
    { key: 'evapo', label: 'Évaporation',   pct: Math.round(evapo), mmVal: evapoMm, color: '#fb923c', bg: 'rgba(251,146,60,0.10)', border: 'rgba(251,146,60,0.25)', icon: '☀️', note: 'Part non disponible' },
    { key: 'infil', label: 'Infiltration',  pct: Math.round(infil), mmVal: infilMm, color: '#8b5cf6', bg: 'rgba(139,92,246,0.10)', border: 'rgba(139,92,246,0.25)', icon: '💧', note: 'Recharge des nappes' },
    { key: 'ruis',  label: 'Ruissellement', pct: Math.round(ruis),  mmVal: ruisMm,  color: '#0097d6', bg: 'rgba(0,151,214,0.10)', border: 'rgba(0,151,214,0.25)', icon: '🌊', note: 'Eaux de surface' },
  ];
  const bandTotal = rawBands.reduce((s, b) => s + b.pct, 0);
  const bands = rawBands.map(b => ({ ...b, width: Math.round(b.pct / bandTotal * 100) }));

  // Shared header button renderer (not a React component — avoids remount issues)
  const headerStyle = (isOpen) => ({
    background: 'rgba(5,27,113,0.06)',
    border: '1px solid rgba(5,27,113,0.12)',
    borderBottomLeftRadius:  isOpen ? 0 : 12,
    borderBottomRightRadius: isOpen ? 0 : 12,
    borderBottom: isOpen ? 'none' : undefined,
  });

  const panelStyle = {
    background: 'rgba(5,27,113,0.03)',
    border: '1px solid rgba(5,27,113,0.12)',
    borderTop: 'none',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  };

  const renderHeader = (icon, label, value, unit, delta, isOpen, onToggle) => (
    <button
      onClick={onToggle}
      className="w-full px-4 py-3 flex items-center justify-between text-left transition-colors"
      style={headerStyle(isOpen)}
    >
      <div className="flex flex-col gap-1.5">
        <p className="text-[0.6rem] uppercase tracking-widest text-on-surface-var">
          {icon} {label}
        </p>
        <div className="flex items-end gap-2">
          <p className="text-[1.375rem] font-bold text-primary leading-none">
            {value}
            <span className="text-[0.8125rem] font-medium text-on-surface-var ml-1">{unit}</span>
          </p>
          {delta != null && (
            <DeltaBadge text={fmtDelta(delta)} bad={delta < 0} />
          )}
        </div>
        {!isRef && delta != null && (
          <p className="text-[0.5625rem] text-on-surface-var">vs période actuelle</p>
        )}
      </div>
      <span className="text-on-surface-var text-xs ml-3 shrink-0 mt-1">
        {isOpen ? '▲' : '▼'}
      </span>
    </button>
  );

  return (
    <div className="flex flex-col gap-3">

      {/* ── 1. Précipitations annuelles (indicateur) ── */}
      <div
        className="rounded-xl p-3"
        style={{ background: 'rgba(5,27,113,0.06)', border: '1px solid rgba(5,27,113,0.12)' }}
      >
        <p className="text-[0.6rem] uppercase tracking-widest text-on-surface-var mb-2">
          🌧️ Précipitations annuelles
        </p>
        <div className="flex items-end justify-between gap-2">
          <p className="text-[1.375rem] font-bold text-primary leading-none">
            {mm}
            <span className="text-[0.8125rem] font-medium text-on-surface-var ml-1">mm/an</span>
          </p>
          {annuellesDelta != null && (
            <DeltaBadge text={fmtDelta(annuellesDelta)} bad={annuellesDelta < 0} />
          )}
        </div>
        {!isRef && annuellesDelta != null && (
          <p className="text-[0.5625rem] text-on-surface-var mt-1">vs période actuelle</p>
        )}
      </div>

      {/* ── 2. Précipitations efficaces ── */}
      <div>
        {renderHeader('💧', 'Précipitations efficaces (eau disponible)', efficacesMm, 'mm/an', efficacesDelta, openEfficaces, () => setOpenEfficaces(v => !v))}
        {openEfficaces && (
          <div className="px-4 py-4 flex flex-col gap-4" style={panelStyle}>
            {/* Intro phrase */}
            <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
              L'eau des précipitations qui arrivent sur votre territoire se comporte de{' '}
              <strong className="text-on-surface">3 manières</strong>.
            </p>
            {/* Flow band */}
            <div className="flex rounded-lg overflow-hidden h-7">
              {bands.map(({ key, pct, width, color, label }) => (
                <div
                  key={key}
                  className="flex items-center justify-center transition-all duration-500"
                  style={{ width: `${width}%`, background: color }}
                  title={`${label} : ${pct}%`}
                >
                  <span className="text-white text-[0.625rem] font-bold select-none">{pct}%</span>
                </div>
              ))}
            </div>
            {/* Destination cards — evapo alone + bordered frame for efficaces */}
            <div className="flex gap-2 items-stretch mt-1">
              {/* Évaporation card */}
              {(() => {
                const b = bands[0];
                return (
                  <div
                    key={b.key}
                    className="flex-1 rounded-xl p-3 flex flex-col items-center text-center"
                    style={{ background: b.bg, border: `1px solid ${b.border}` }}
                  >
                    <span className="text-base mb-1">{b.icon}</span>
                    <p className="text-[0.6rem] font-semibold leading-tight mb-2 uppercase tracking-wide" style={{ color: b.color }}>{b.label}</p>
                    <p className="text-[1.0625rem] font-bold leading-none" style={{ color: b.color }}>{b.mmVal}</p>
                    <p className="text-[0.5625rem] text-on-surface-var mb-1.5">mm/an</p>
                    <span className="text-[0.625rem] font-semibold px-2 py-0.5 rounded-full" style={{ background: b.color + '20', color: b.color }}>{b.pct}%</span>
                    <p className="text-[0.5625rem] text-on-surface-var mt-1.5">{b.note}</p>
                  </div>
                );
              })()}
              {/* Précipitations efficaces: bordered group */}
              <div
                className="flex-[2] relative rounded-xl pt-5 pb-2 px-2"
                style={{ border: '2px dashed rgba(5,27,113,0.22)' }}
              >
                <span
                  className="absolute top-0 left-3 -translate-y-1/2 px-2 text-[0.5625rem] font-semibold uppercase tracking-widest"
                  style={{ background: 'rgba(5,27,113,0.03)', color: '#051b71' }}
                >
                  Précipitations efficaces
                </span>
                <div className="flex gap-2 h-full">
                  {bands.slice(1).map((b) => (
                    <div
                      key={b.key}
                      className="flex-1 rounded-xl p-3 flex flex-col items-center text-center"
                      style={{ background: b.bg, border: `1px solid ${b.border}` }}
                    >
                      <span className="text-base mb-1">{b.icon}</span>
                      <p className="text-[0.6rem] font-semibold leading-tight mb-2 uppercase tracking-wide" style={{ color: b.color }}>{b.label}</p>
                      <p className="text-[1.0625rem] font-bold leading-none" style={{ color: b.color }}>{b.mmVal}</p>
                      <p className="text-[0.5625rem] text-on-surface-var mb-1.5">mm/an</p>
                      <span className="text-[0.625rem] font-semibold px-2 py-0.5 rounded-full" style={{ background: b.color + '20', color: b.color }}>{b.pct}%</span>
                      <p className="text-[0.5625rem] text-on-surface-var mt-1.5">{b.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Key message */}
            <div className="rounded-xl p-3 flex items-start gap-2" style={{ background: 'rgba(5,27,113,0.05)', border: '1px solid rgba(5,27,113,0.10)' }}>
              <span className="text-sm shrink-0 mt-0.5">💡</span>
              <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
                <strong className="text-on-surface font-semibold">
                  L'eau disponible représente {availPct}% des précipitations
                </strong>
                {' '}({efficacesMm} mm/an) — la part non évaporée, alimentant nappes et cours d'eau.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── 3. Précipitations estivales ── */}
      <div>
        {renderHeader('☀️', 'Précipitations estivales (juin–août)', estivalesMm, 'mm', estivalesDelta, openEstivales, () => setOpenEstivales(v => !v))}
        {openEstivales && (
          <div className="px-4 py-4 flex flex-col gap-4" style={panelStyle}>
            <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
              L'eau est <strong className="text-on-surface">inégalement disponible au cours de l'année</strong>.
              La saison estivale cumule les contraintes : précipitations faibles, évapotranspiration élevée
              et demande en eau maximale. C'est sur cette période que les conflits d'usage sont les plus
              probables et que le risque de stress hydrique est le plus fort.
            </p>
            {precip && precipChartData.length > 0 && (
              <>
                <p className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest">
                  Précipitations mensuelles
                  {projKey ? ` — Actuel vs ${projKey}` : ' — Actuel'}
                </p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={precipChartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e2eb" />
                    <XAxis dataKey="mois" tick={{ fontSize: 11, fill: '#44474f' }} />
                    <YAxis unit=" mm" tick={{ fontSize: 10, fill: '#44474f' }} width={48} />
                    <Tooltip formatter={(v, name) => [`${v} mm`, name]} />
                    <Legend />
                    {/* Red zone for summer (Jun–Aug) */}
                    {precip.mois?.length >= 8 && (
                      <ReferenceArea
                        x1={precip.mois[5]}
                        x2={precip.mois[7]}
                        fill="rgba(239,68,68,0.08)"
                        stroke="rgba(239,68,68,0.20)"
                        strokeWidth={1}
                      />
                    )}
                    <Line type="monotone" dataKey="Actuel" stroke="#0097d6" strokeWidth={2} dot={false} />
                    {projKey && (
                      <Line type="monotone" dataKey={projKey} stroke="#f97316" strokeWidth={2} strokeDasharray="5 3" dot={false} />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </>
            )}
          </div>
        )}
      </div>

    </div>
  );
}

// ─── Bloc 3 — Prélèvements (donut) ───────────────────────────────────────────

function WithdrawalsDonut({ data, refData, horizon }) {
  const [selected, setSelected] = useState(null);

  const isRef = horizon === 'actuel';

  // Total delta
  const totalDelta = isRef ? null : pctDelta(data.total_mm3, refData.total_mm3);

  // Sector deltas (absolute Mm³ comparison)
  const sectorDeltas = {};
  ['agriculture', 'aep', 'industrie'].forEach((k) => {
    sectorDeltas[k] = isRef ? null : pctDelta(data[k], refData[k]);
  });

  // Convert absolute Mm³ to percentages for display
  const total    = data.total_mm3;
  const agriPct  = Math.round(data.agriculture / total * 100);
  const aepPct   = Math.round(data.aep / total * 100);
  const indusPct = 100 - agriPct - aepPct;

  const chartData = [
    { key: 'agriculture', value: agriPct,  ...PRELEVEMENT_DETAILS.agriculture },
    { key: 'aep',         value: aepPct,   ...PRELEVEMENT_DETAILS.aep         },
    { key: 'industrie',   value: indusPct, ...PRELEVEMENT_DETAILS.industrie   },
  ].map((d) => ({
    ...d,
    fill:        d.color,
    opacity:     selected && selected !== d.key ? 0.25 : 1,
    stroke:      selected === d.key ? '#051b71' : 'transparent',
    strokeWidth: selected === d.key ? 2 : 0,
  }));

  const selectedDetail = selected ? PRELEVEMENT_DETAILS[selected] : null;

  return (
    <div className="flex flex-col gap-4">
      {/* Prélèvements totaux header */}
      <div
        className="rounded-xl p-3"
        style={{ background: 'rgba(5,27,113,0.06)', border: '1px solid rgba(5,27,113,0.12)' }}
      >
        <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-var mb-2">
          💧 Prélèvements totaux
        </p>
        <div className="flex items-end justify-between gap-2">
          <p className="text-[1.5rem] font-bold text-primary leading-none">
            {data.total_mm3}
            <span className="text-[0.875rem] font-medium text-on-surface-var ml-1">Mm³/an</span>
          </p>
          {!isRef && totalDelta != null && (
            <DeltaBadge text={fmtDelta(totalDelta)} bad={totalDelta > 0} />
          )}
        </div>
        {!isRef && (
          <p className="text-[0.5625rem] text-on-surface-var mt-1">vs période actuelle</p>
        )}
      </div>

      {/* Donut */}
      <div style={{ height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={74}
              paddingAngle={3}
              dataKey="value"
              onClick={(entry) =>
                setSelected(selected === entry.key ? null : entry.key)
              }
            />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const d = payload[0].payload;
                return (
                  <div style={{ background: '#fff', border: '1px solid #e0e2eb', borderRadius: 8, padding: '6px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <span style={{ color: d.color, fontSize: 13, fontWeight: 600 }}>
                      {d.icon} {d.label} — {d.value}%
                    </span>
                  </div>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend with sector deltas */}
      <div className="flex flex-col gap-1.5">
        {chartData.map((d) => {
          const sd = sectorDeltas[d.key];
          return (
            <button
              key={d.key}
              onClick={() => setSelected(selected === d.key ? null : d.key)}
              className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg transition-all duration-150"
              style={{
                background: selected === d.key ? d.colorBg : 'transparent',
                border: selected === d.key ? `1px solid ${d.color}35` : '1px solid transparent',
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: d.color }} />
              <span className="text-[0.8125rem] text-on-surface flex-1">{d.label}</span>
              <span className="text-[0.8125rem] font-bold mr-1.5" style={{ color: d.color }}>
                {d.value}%
              </span>
              {!isRef && sd != null && (
                <DeltaBadge text={fmtDelta(sd)} bad={sd > 0} />
              )}
            </button>
          );
        })}
      </div>

      {/* Detail panel on click */}
      {selectedDetail && (
        <div
          className="rounded-xl p-4 flex items-start gap-3"
          style={{ background: selectedDetail.colorBg, border: `1px solid ${selectedDetail.color}30` }}
        >
          <span className="text-xl shrink-0">{selectedDetail.icon}</span>
          <div>
            <p className="text-[0.8125rem] font-semibold text-on-surface mb-1">{selectedDetail.label}</p>
            <p className="text-[0.75rem] text-on-surface-var leading-relaxed">{selectedDetail.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Flèches d'annotation estivale ───────────────────────────────────────────

function SummerArrow({ x, yFrom, yTo, color, label }) {
  if (Math.abs(yTo - yFrom) < 8) return null;
  const mid  = (yFrom + yTo) / 2;
  const down = yTo > yFrom; // SVG: y increases downward → down = decrease in value
  const hs   = 5;
  const lw   = Math.max(36, label.length * 7 + 10);
  return (
    <g>
      {/* tick at reference point */}
      <line x1={x - 5} y1={yFrom} x2={x + 5} y2={yFrom} stroke={color} strokeWidth={1.2} opacity={0.5} />
      {/* dashed vertical line */}
      <line
        x1={x} y1={down ? yFrom + 3 : yFrom - 3}
        x2={x} y2={down ? yTo - hs * 1.6 - 1 : yTo + hs * 1.6 + 1}
        stroke={color} strokeWidth={1.5} strokeDasharray="3 2" opacity={0.72}
      />
      {/* arrowhead */}
      {down
        ? <polygon points={`${x},${yTo} ${x - hs},${yTo - hs * 1.6} ${x + hs},${yTo - hs * 1.6}`} fill={color} opacity={0.85} />
        : <polygon points={`${x},${yTo} ${x - hs},${yTo + hs * 1.6} ${x + hs},${yTo + hs * 1.6}`} fill={color} opacity={0.85} />
      }
      {/* label badge */}
      <rect x={x + 7} y={mid - 9} width={lw} height={18} rx={9} fill={color + '22'} stroke={color} strokeWidth={0.8} />
      <text x={x + 7 + lw / 2} y={mid + 4} textAnchor="middle" fill={color} fontSize={9} fontWeight="bold" fontFamily="Inter, sans-serif">
        {label}
      </text>
    </g>
  );
}

function SummerArrowsLayer({ formattedGraphicalItems, mode, isCroise, isProjection, chartData }) {
  if (!isProjection || !formattedGraphicalItems?.length || !chartData?.length) return null;

  const getPoints = (key) =>
    formattedGraphicalItems.find(i => i.props?.dataKey === key)?.props?.points;

  const deltaPct = (curr, ref) =>
    ref != null && ref !== 0 ? Math.round((curr - ref) / Math.abs(ref) * 100) : null;
  const fmt = (v) => v == null ? null : (v > 0 ? `+${v}%` : `${v}%`);

  const julIdx = 6; // juillet — pic estival

  if (isCroise) {
    const dispPts = getPoints('Eau disponible');
    const prevPts = getPoints('Prélèvements');
    const eauRPts = getPoints('Eau actuelle');
    const preRPts = getPoints('Prél. actuels');
    if (!dispPts?.[julIdx] || !eauRPts?.[julIdx]) return null;

    const eauLabel  = fmt(deltaPct(chartData[julIdx]['Eau disponible'], chartData[julIdx]['Eau actuelle']));
    const prevLabel = fmt(deltaPct(chartData[julIdx]['Prélèvements'],   chartData[julIdx]['Prél. actuels']));

    return (
      <g>
        {eauLabel && (
          <SummerArrow
            x={dispPts[julIdx].x - 22}
            yFrom={eauRPts[julIdx].y}
            yTo={dispPts[julIdx].y}
            color="#0097d6"
            label={eauLabel}
          />
        )}
        {prevLabel && prevPts?.[julIdx] && preRPts?.[julIdx] && (
          <SummerArrow
            x={prevPts[julIdx].x + 10}
            yFrom={preRPts[julIdx].y}
            yTo={prevPts[julIdx].y}
            color="#f97316"
            label={prevLabel}
          />
        )}
      </g>
    );
  }

  // modes eau / prelev : flèche sur le total (référence → sommet du stack)
  const topKey = mode === 'eau' ? 'Ruissellement' : 'Industrie';
  const topPts = getPoints(topKey);
  const refPts = getPoints('Actuel');
  if (!topPts?.[julIdx] || !refPts?.[julIdx]) return null;

  const totalCurr = Object.keys(chartData[julIdx])
    .filter(k => k !== 'mois' && k !== 'Actuel')
    .reduce((s, k) => s + (chartData[julIdx][k] || 0), 0);
  const label = fmt(deltaPct(totalCurr, chartData[julIdx]['Actuel']));
  if (!label) return null;

  return (
    <SummerArrow
      x={topPts[julIdx].x + 10}
      yFrom={refPts[julIdx].y}
      yTo={topPts[julIdx].y}
      color={mode === 'eau' ? '#0097d6' : '#22c55e'}
      label={label}
    />
  );
}

// ─── Graphe de synthèse mensuelle décomposée ─────────────────────────────────

const EAU_SERIES = [
  { key: 'Évaporation',   gradId: 'sg-ev', color: '#fb923c', note: 'Part non disponible' },
  { key: 'Infiltration',  gradId: 'sg-in', color: '#8b5cf6', note: 'Recharge des nappes' },
  { key: 'Ruissellement', gradId: 'sg-ru', color: '#0097d6', note: 'Eaux de surface'     },
];
const PRELEV_SERIES = [
  { key: 'Agriculture', gradId: 'sg-ag', color: '#22c55e', note: 'Irrigation'   },
  { key: 'Eau potable', gradId: 'sg-ae', color: '#0097d6', note: 'AEP'          },
  { key: 'Industrie',   gradId: 'sg-id', color: '#64748b', note: 'Procédés ind.' },
];

function SyntheseChart({ eauDecomp, prelevDecomp }) {
  const [mode,   setMode]   = useState('croise');
  const [chartH, setChartH] = useState('actuel');

  const isProjection = chartH !== 'actuel';
  const isCroise     = mode === 'croise';

  // ── Helpers
  const sumEau  = (d, i) => d.evaporation[i]  + d.infiltration[i]  + d.ruissellement[i];
  const sumPrev = (d, i) => +((d.agriculture[i] + d.aep[i] + d.industrie[i]).toFixed(1));

  // ── Data for stacked modes (eau / prelev)
  const series  = mode === 'eau' ? EAU_SERIES : PRELEV_SERIES;
  const unit    = mode === 'eau' ? 'mm'       : 'Mm³';
  const eau     = eauDecomp    ?? MOCK_EAU_DECOMP;
  const prev    = prelevDecomp ?? MOCK_PRELEV_DECOMP;
  const rawData = mode === 'eau' ? eau        : prev;
  const rawRef  = mode === 'eau' ? eau.actuel : prev.actuel;

  // ── Data for croisé mode
  const cd  = eau[chartH];
  const cpd = prev[chartH];
  const cdr = eau.actuel;
  const cpr = prev.actuel;

  // ── Chart data
  const chartData = MOIS_LABELS.map((mois, i) => {
    if (isCroise) {
      const row = {
        mois,
        'Eau disponible': sumEau(cd, i),
        'Prélèvements':   sumPrev(cpd, i),
      };
      if (isProjection) {
        row['Eau actuelle']  = sumEau(cdr, i);
        row['Prél. actuels'] = sumPrev(cpr, i);
      }
      return row;
    }
    const d = rawData[chartH];
    const row = { mois };
    if (mode === 'eau') {
      row['Évaporation']   = d.evaporation[i];
      row['Infiltration']  = d.infiltration[i];
      row['Ruissellement'] = d.ruissellement[i];
    } else {
      row['Agriculture'] = d.agriculture[i];
      row['Eau potable'] = d.aep[i];
      row['Industrie']   = d.industrie[i];
    }
    if (isProjection) {
      row['Actuel'] = mode === 'eau'
        ? sumEau(rawRef, i)
        : sumPrev(rawRef, i);
    }
    return row;
  });

  // ── Y-axis domains
  let yMax = 0, yMaxEau = 0, yMaxPrev = 0;
  if (isCroise) {
    yMaxEau  = Math.ceil(Math.max(...MOIS_LABELS.map((_, i) => sumEau(cd, i)))  / 10) * 10;
    yMaxPrev = Math.ceil(Math.max(...MOIS_LABELS.map((_, i) => sumPrev(cpd, i))) / 5) * 5;
  } else {
    const maxVal = Math.max(...MOIS_LABELS.map((_, i) => {
      const d = rawData[chartH];
      return mode === 'eau'
        ? d.evaporation[i] + d.infiltration[i] + d.ruissellement[i]
        : d.agriculture[i] + d.aep[i] + d.industrie[i];
    }));
    yMax = mode === 'eau' ? Math.ceil(maxVal / 10) * 10 : Math.ceil(maxVal / 5) * 5;
  }

  const hColor = { actuel: '#000a43', '2030': '#f59e0b', '2050': '#ef4444' };
  const MODES = [
    { k: 'croise', icon: '⚖️', label: 'Vision croisée offre / demande' },
    { k: 'eau',    icon: '💧', label: "Comprendre l'eau disponible"     },
    { k: 'prelev', icon: '📊', label: 'Comprendre les prélèvements'     },
  ];

  return (
    <div className="rounded-xl p-5" style={{ background: '#fff', boxShadow: '0 1px 4px rgba(0,0,20,0.05)' }}>

      {/* ── Top bar : title + mode buttons ── */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <p className="text-[0.75rem] font-semibold text-on-surface-var uppercase tracking-widest">
            Synthèse mensuelle
          </p>
          <p className="text-[0.6875rem] text-on-surface-var mt-0.5">
            Décomposition au cours de l'année
          </p>
        </div>
        <div className="flex rounded-xl overflow-hidden shrink-0" style={{ border: '1px solid #e0e2eb' }}>
          {MODES.map(({ k, icon, label }, idx) => (
            <button
              key={k}
              onClick={() => setMode(k)}
              className="px-3 py-1.5 text-[0.6875rem] font-medium transition-all"
              style={{
                background:  mode === k ? '#000a43' : '#fff',
                color:       mode === k ? '#fff'    : '#44474f',
                borderRight: idx < MODES.length - 1 ? '1px solid #e0e2eb' : 'none',
              }}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Horizon selector ── */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-[0.5625rem] font-semibold uppercase tracking-widest text-on-surface-var shrink-0">
          Vision évolutive :
        </span>
        <div className="flex gap-1.5">
          {['actuel', '2030', '2050'].map((h) => {
            const active = chartH === h;
            const c = hColor[h];
            return (
              <button
                key={h}
                onClick={() => setChartH(h)}
                className="px-3 py-1 rounded-full text-[0.6875rem] font-semibold transition-all"
                style={{
                  background: active ? c + '18' : 'transparent',
                  color:      active ? c        : '#44474f',
                  border:    `1px solid ${active ? c + '50' : '#e0e2eb'}`,
                }}
              >
                {h === 'actuel' ? 'Actuel' : h}
              </button>
            );
          })}
        </div>
        {isProjection && (
          <span className="text-[0.5625rem] text-on-surface-var italic">
            {isCroise
              ? '— les deux courbes actuelles affichées en pointillés'
              : '— total actuel affiché en pointillés'}
          </span>
        )}
      </div>

      {/* ── Legend + chart ── */}
      <div className="flex gap-4">

        {/* ── Left legend ── */}
        <div className="flex flex-col justify-center gap-3 shrink-0 pr-1">
          {isCroise ? (
            <>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: '#0097d6cc' }} />
                  <span className="text-[0.6875rem] font-medium text-on-surface whitespace-nowrap">Eau disponible</span>
                </div>
                <span className="text-[0.5625rem] text-on-surface-var pl-5 whitespace-nowrap">Axe gauche · mm/mois</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: '#f97316cc' }} />
                  <span className="text-[0.6875rem] font-medium text-on-surface whitespace-nowrap">Prélèvements</span>
                </div>
                <span className="text-[0.5625rem] text-on-surface-var pl-5 whitespace-nowrap">Axe droit · Mm³/mois</span>
              </div>
              {isProjection && (
                <div className="flex flex-col gap-2 mt-1 pt-2.5" style={{ borderTop: '1px solid #e8eaf3' }}>
                  <div className="flex items-center gap-1.5">
                    <svg width="18" height="10" style={{ flexShrink: 0 }}>
                      <line x1="0" y1="5" x2="18" y2="5" stroke="#0097d6" strokeWidth="2" strokeDasharray="4 2" opacity="0.55" />
                    </svg>
                    <span className="text-[0.5625rem] text-on-surface-var whitespace-nowrap">Eau actuelle (mm)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg width="18" height="10" style={{ flexShrink: 0 }}>
                      <line x1="0" y1="5" x2="18" y2="5" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" opacity="0.55" />
                    </svg>
                    <span className="text-[0.5625rem] text-on-surface-var whitespace-nowrap">Prél. actuels (Mm³)</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {series.map(({ key, color, note }) => (
                <div key={key} className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: color + 'cc' }} />
                    <span className="text-[0.6875rem] font-medium text-on-surface whitespace-nowrap">{key}</span>
                  </div>
                  <span className="text-[0.5625rem] text-on-surface-var pl-5 whitespace-nowrap">{note}</span>
                </div>
              ))}
              {isProjection && (
                <div className="flex flex-col gap-0.5 mt-1 pt-2.5" style={{ borderTop: '1px solid #e8eaf3' }}>
                  <div className="flex items-center gap-2">
                    <svg width="18" height="10" style={{ flexShrink: 0 }}>
                      <line x1="0" y1="5" x2="18" y2="5" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
                    </svg>
                    <span className="text-[0.6875rem] font-medium text-on-surface-var whitespace-nowrap">Actuel</span>
                  </div>
                  <span className="text-[0.5625rem] text-on-surface-var pl-5">Total de référence</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* ── Chart ── */}
        <ResponsiveContainer width="100%" height={230}>
          <ComposedChart data={chartData} margin={{ top: 8, right: isCroise ? 4 : 12, left: 0, bottom: 4 }}>
            <defs>
              {/* Stacked eau */}
              <linearGradient id="sg-ev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#fb923c" stopOpacity={0.80} />
                <stop offset="100%" stopColor="#fb923c" stopOpacity={0.35} />
              </linearGradient>
              <linearGradient id="sg-in" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#8b5cf6" stopOpacity={0.80} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.35} />
              </linearGradient>
              <linearGradient id="sg-ru" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#0097d6" stopOpacity={0.80} />
                <stop offset="100%" stopColor="#0097d6" stopOpacity={0.35} />
              </linearGradient>
              {/* Stacked prelev */}
              <linearGradient id="sg-ag" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#22c55e" stopOpacity={0.80} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0.35} />
              </linearGradient>
              <linearGradient id="sg-ae" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#0097d6" stopOpacity={0.80} />
                <stop offset="100%" stopColor="#0097d6" stopOpacity={0.35} />
              </linearGradient>
              <linearGradient id="sg-id" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#64748b" stopOpacity={0.80} />
                <stop offset="100%" stopColor="#64748b" stopOpacity={0.35} />
              </linearGradient>
              {/* Croisé */}
              <linearGradient id="sg-cd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"   stopColor="#0097d6" stopOpacity={0.28} />
                <stop offset="95%"  stopColor="#0097d6" stopOpacity={0.03} />
              </linearGradient>
              <linearGradient id="sg-cp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"   stopColor="#f97316" stopOpacity={0.18} />
                <stop offset="95%"  stopColor="#f97316" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e8eaf3" />
            <XAxis dataKey="mois" tick={{ fontSize: 11, fill: '#44474f' }} axisLine={false} tickLine={false} />

            {/* ── Y-axis: dual for croisé, single for stacked ── */}
            {isCroise ? (
              <>
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  domain={[0, yMaxEau]}
                  tickCount={6}
                  unit=" mm"
                  tick={{ fontSize: 10, fill: '#0097d6' }}
                  width={50}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[0, yMaxPrev]}
                  tickCount={6}
                  unit=" Mm³"
                  tick={{ fontSize: 10, fill: '#f97316' }}
                  width={56}
                  axisLine={false}
                  tickLine={false}
                />
              </>
            ) : (
              <YAxis
                domain={[0, yMax]}
                tickCount={6}
                unit={` ${unit}`}
                tick={{ fontSize: 10, fill: '#44474f' }}
                width={52}
                axisLine={false}
                tickLine={false}
              />
            )}

            {/* ── Tooltip ── */}
            <Tooltip
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;
                if (isCroise) {
                  const eau  = payload.find(p => p.dataKey === 'Eau disponible');
                  const prev = payload.find(p => p.dataKey === 'Prélèvements');
                  const eauR = payload.find(p => p.dataKey === 'Eau actuelle');
                  const preR = payload.find(p => p.dataKey === 'Prél. actuels');
                  return (
                    <div style={{ background: '#fff', border: '1px solid #e0e2eb', borderRadius: 10, padding: '8px 12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', minWidth: 178 }}>
                      <p style={{ fontSize: 12, fontWeight: 700, color: '#181c22', marginBottom: 6 }}>{label}</p>
                      {eau  && <p style={{ fontSize: 12, color: '#0097d6', marginBottom: 2 }}>💧 Disponible : <strong>{eau.value} mm</strong></p>}
                      {prev && <p style={{ fontSize: 12, color: '#f97316', marginBottom: isProjection ? 4 : 0 }}>📊 Prélèvements : <strong>{prev.value} Mm³</strong></p>}
                      {isProjection && (eauR || preR) && (
                        <div style={{ marginTop: 4, paddingTop: 4, borderTop: '1px solid #e8eaf3' }}>
                          {eauR && <p style={{ fontSize: 11, color: '#94a3b8', marginBottom: 1 }}>Eau actuelle : {eauR.value} mm</p>}
                          {preR && <p style={{ fontSize: 11, color: '#94a3b8' }}>Prél. actuels : {preR.value} Mm³</p>}
                        </div>
                      )}
                    </div>
                  );
                }
                const items = payload.filter(p => p.dataKey !== 'Actuel').slice().reverse();
                const ref   = payload.find(p  => p.dataKey === 'Actuel');
                const total = items.reduce((s, p) => s + (p.value || 0), 0);
                const fmt   = (v) => (typeof v === 'number' && !Number.isInteger(v)) ? v.toFixed(1) : v;
                return (
                  <div style={{ background: '#fff', border: '1px solid #e0e2eb', borderRadius: 10, padding: '8px 12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', minWidth: 170 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#181c22', marginBottom: 6 }}>{label}</p>
                    {items.map(p => (
                      <p key={p.dataKey} style={{ fontSize: 12, color: p.color ?? p.fill, marginBottom: 2 }}>
                        {p.dataKey} : <strong>{fmt(p.value)} {unit}</strong>
                      </p>
                    ))}
                    <p style={{ fontSize: 11, marginTop: 4, paddingTop: 4, borderTop: '1px solid #e8eaf3', color: '#181c22', fontWeight: 600 }}>
                      Total : {fmt(total)} {unit}
                    </p>
                    {ref && <p style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>Réf. actuel : {fmt(ref.value)} {unit}</p>}
                  </div>
                );
              }}
            />

            {/* Summer zone */}
            <ReferenceArea
              {...(isCroise ? { yAxisId: 'left' } : {})}
              x1="Jun" x2="Aoû"
              fill="rgba(239,68,68,0.06)"
              stroke="rgba(239,68,68,0.16)"
              strokeWidth={1}
            />

            {/* ── Series ── */}
            {isCroise ? (
              <>
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="Eau disponible"
                  stroke="#0097d6"
                  strokeWidth={2.5}
                  fill="url(#sg-cd)"
                  dot={false}
                  activeDot={{ r: 4, fill: '#0097d6', stroke: '#fff', strokeWidth: 2 }}
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="Prélèvements"
                  stroke="#f97316"
                  strokeWidth={2}
                  strokeDasharray="6 3"
                  fill="url(#sg-cp)"
                  dot={false}
                  activeDot={{ r: 4, fill: '#f97316', stroke: '#fff', strokeWidth: 2 }}
                />
                {isProjection && (
                  <>
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="Eau actuelle"
                      stroke="#0097d6"
                      strokeWidth={1.5}
                      strokeDasharray="5 3"
                      dot={false}
                      opacity={0.45}
                      activeDot={{ r: 3, fill: '#0097d6', stroke: '#fff', strokeWidth: 1.5 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="Prél. actuels"
                      stroke="#f97316"
                      strokeWidth={1.5}
                      strokeDasharray="5 3"
                      dot={false}
                      opacity={0.45}
                      activeDot={{ r: 3, fill: '#f97316', stroke: '#fff', strokeWidth: 1.5 }}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                {series.map(({ key, gradId, color }) => (
                  <Area
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stackId="stack"
                    stroke={color}
                    strokeWidth={0.5}
                    fill={`url(#${gradId})`}
                    dot={false}
                    activeDot={{ r: 3, fill: color, stroke: '#fff', strokeWidth: 1.5 }}
                  />
                ))}
                {isProjection && (
                  <Line
                    type="monotone"
                    dataKey="Actuel"
                    stroke="#94a3b8"
                    strokeWidth={1.5}
                    strokeDasharray="5 3"
                    dot={false}
                    activeDot={{ r: 3, fill: '#94a3b8', stroke: '#fff', strokeWidth: 1.5 }}
                    opacity={0.8}
                  />
                )}
              </>
            )}

            {/* ── Annotations flèches estivales ── */}
            <Customized
              component={
                <SummerArrowsLayer
                  mode={mode}
                  isCroise={isCroise}
                  isProjection={isProjection}
                  chartData={chartData}
                />
              }
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* ── Commentaire contextuel selon le mode ── */}
      {mode === 'eau' && (
        <div
          className="mt-4 rounded-xl p-3 flex items-start gap-2.5"
          style={{ background: 'rgba(251,146,60,0.07)', border: '1px solid rgba(251,146,60,0.20)' }}
        >
          <span className="text-sm shrink-0 mt-0.5">☀️</span>
          <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
            <strong className="text-on-surface">L'évaporation augmente significativement en période estivale</strong>
            {' '}sous l'effet des températures plus élevées. Elle absorbe une part croissante des précipitations,
            réduisant d'autant l'eau disponible pour l'infiltration et le ruissellement — précisément au moment
            où la demande en eau est à son pic.
          </p>
        </div>
      )}

      {mode === 'prelev' && (
        <div
          className="mt-4 rounded-xl p-3 flex items-start gap-2.5"
          style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.22)' }}
        >
          <span className="text-sm shrink-0 mt-0.5">🌾</span>
          <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
            <strong className="text-on-surface">L'irrigation agricole est le moteur du pic estival des prélèvements</strong>
            {' '}— quasiment absente en hiver, elle monte en charge dès le printemps pour atteindre son maximum
            en juillet-août. Ce pic compense directement le déficit de précipitations estivales : l'eau prélevée
            se substitue à ce que la pluie ne fournit plus.
          </p>
        </div>
      )}

      {mode === 'croise' && (
        <div
          className="mt-4 rounded-xl p-3 flex items-start gap-2.5"
          style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.20)' }}
        >
          <span className="text-sm shrink-0 mt-0.5">⚖️</span>
          <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
            <strong className="text-on-surface">Le cœur du stress hydrique est visible ici</strong>
            {' '}— en été, la courbe de l'eau disponible chute au moment précis où celle des prélèvements
            culmine. L'écart entre offre et demande est maximal en juillet-août. Passez sur les horizons{' '}
            <strong className="text-on-surface">2030 et 2050</strong> pour visualiser comment le changement
            climatique aggrave cet écart : la courbe bleue s'abaisse pendant que la courbe orange monte.
          </p>
        </div>
      )}

    </div>
  );
}

// ─── Local atom ───────────────────────────────────────────────────────────────

function MetaRow({ label, value }) {
  return (
    <div className="flex items-start gap-1.5 flex-wrap">
      <span className="text-[0.8125rem] text-on-surface-var shrink-0">{label} :</span>
      <span className="text-[0.8125rem] font-semibold text-on-surface">{value ?? '—'}</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TerritorySection({ territoire: t, entreprise: e }) {
  const [horizon, setHorizon] = useState('actuel');
  const [bassineOpen, setBassineOpen] = useState(false);

  const bassin = t?.bassin;
  const stress = t?.stress_hydrique;
  const precip = t?.precipitations_mensuelles_mm;

  const stressSeuils  = stress?.seuils ?? MOCK_STRESS.seuils;
  const stressRatio   = stress?.ratio_stress?.[horizon] ?? MOCK_STRESS[horizon].ratio;
  const stressColor   = getStressColor(stressRatio, stressSeuils);

  if (!t) {
    return (
      <div className="bg-surface-low rounded-xl px-6 py-8 text-center">
        <p className="text-[0.875rem] text-on-surface-var">
          Les données territoriales ne sont pas disponibles pour cet établissement.
        </p>
      </div>
    );
  }

  const HORIZONS = [
    { h: 'actuel', label: 'Actuel' },
    { h: '2030',   label: '2030'   },
    { h: '2050',   label: '2050'   },
  ];

  return (
    <div className="flex flex-col gap-5">

      {/* ── Bassin versant (ne pas modifier) ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-3 rounded-xl overflow-hidden" style={{ height: 300 }}>
          <MapContainer
            center={[bassin?.centroid?.lat ?? 46, bassin?.centroid?.lon ?? 2]}
            zoom={9}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {bassin?.geojson && (
              <>
                <GeoJSONLayer
                  data={bassin.geojson}
                  style={{ color: '#051b71', weight: 2, fillColor: '#0097d6', fillOpacity: 0.12 }}
                />
                <FitBoundsToGeoJSON geojson={bassin.geojson} />
              </>
            )}
            {e?.latitude && e?.longitude && (
              <Marker position={[e.latitude, e.longitude]}>
                <Popup>
                  <span className="text-[0.8125rem]">{e.denominationunitelegale || e.siret}</span>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>

        <div className="md:col-span-2 flex flex-col gap-3">
          <div className="bg-surface-low rounded-xl p-5 flex flex-col gap-3 flex-1">
            <p className="text-[0.75rem] font-semibold text-on-surface-var uppercase tracking-widest">
              Bassin versant
            </p>
            <p className="text-[1rem] font-bold text-primary leading-snug">{bassin?.nom}</p>
            <div className="flex flex-col gap-2">
              <MetaRow label="Cours d'eau principal" value={bassin?.cours_eau_principal} />
              <MetaRow label="Région hydrographique" value={bassin?.region_hydrographique} />
              <MetaRow
                label="Surface du bassin"
                value={bassin?.surface_km2 ? `${bassin.surface_km2.toLocaleString('fr-FR')} km²` : '—'}
              />
            </div>
          </div>

          <div className="bg-surface-low rounded-xl overflow-hidden">
            <button
              onClick={() => setBassineOpen(!bassineOpen)}
              className="w-full px-4 py-3 flex items-center justify-between text-left"
            >
              <span className="text-[0.8125rem] font-semibold text-on-surface">
                Qu'est-ce qu'un bassin versant ?
              </span>
              <span className="text-on-surface-var text-sm ml-2">{bassineOpen ? '▲' : '▼'}</span>
            </button>
            {bassineOpen && (
              <div className="px-4 pb-4 text-[0.8125rem] text-on-surface-var leading-relaxed">
                Un bassin versant est un territoire géographique drainé par un cours d'eau et ses
                affluents. Toute l'eau qui y tombe (pluie, neige) converge vers un même exutoire.
                C'est l'unité de base pour comprendre la disponibilité en eau et les risques
                hydrologiques d'un territoire.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Bloc principal : onglets + contenu ───────────────────────────────── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 0 32px rgba(0,10,67,0.06)' }}
      >
        {/* Section title */}
        <div className="px-5 pt-4 pb-2" style={{ background: SURFACE_HIGH }}>
          <p className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest">
            Projections climatiques
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex" style={{ background: SURFACE_HIGH }}>
          {HORIZONS.map(({ h, label }, idx) => {
            const isActive  = horizon === h;
            const ratio     = stress?.ratio_stress?.[h] ?? MOCK_STRESS[h].ratio;
            const color     = getStressColor(ratio, stressSeuils);
            const rawTemp   = t?.projections_climatiques?.temperature_delta_c?.[h]
              ?? MOCK_TEMPERATURE[h];
            const tempDelta = rawTemp != null ? Number(rawTemp) : null;

            return (
              <button
                key={h}
                onClick={() => setHorizon(h)}
                className="flex-1 px-4 pt-3 pb-3 flex flex-col gap-2 text-left transition-all duration-200"
                style={{
                  background: isActive ? SURFACE_LOW : 'transparent',
                  borderTop: `3px solid ${isActive ? color : 'transparent'}`,
                  borderRight: idx < 2 ? `1px solid ${SURFACE_HIGHEST}` : 'none',
                  marginBottom: isActive ? -1 : 0,
                  zIndex: isActive ? 1 : 0,
                  position: 'relative',
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[0.875rem] font-bold leading-none"
                    style={{ color: isActive ? '#181c22' : '#44474f' }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-[0.6875rem] font-semibold leading-none"
                    style={{
                      color: tempDelta == null
                        ? (isActive ? '#44474f' : '#94a3b8')
                        : (isActive ? '#f97316' : '#f9731688'),
                    }}
                  >
                    {tempDelta == null ? 'Référence' : `+${tempDelta.toFixed(1)}°C`}
                  </span>
                </div>
                <span
                  className="text-[0.5625rem] uppercase tracking-wider"
                  style={{ color: isActive ? '#44474f' : '#94a3b8' }}
                >
                  Stress hydrique
                </span>
                <MiniStressGauge ratio={ratio} seuils={stressSeuils} active={isActive} />
                <span
                  className="text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full inline-block w-fit"
                  style={{
                    background: isActive ? color + '22' : color + '10',
                    color: isActive ? color : color + 'aa',
                  }}
                >
                  {getStressLabel(ratio, stressSeuils)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content area */}
        <div className="p-5 flex flex-col gap-5" style={{ background: SURFACE_LOW }}>

          {/* Phrase d'interprétation */}
          <p className="text-[0.8125rem] text-on-surface-var italic leading-relaxed">
            {MOCK_STRESS[horizon].phrase}
          </p>

          {/* Indicateurs clés */}
          <IndicateursRow
            horizon={horizon}
            projClimat={t?.projections_climatiques}
          />

          {/* Explication stress hydrique → bridge vers les deux blocs */}
          <div
            className="rounded-xl p-4 flex flex-col gap-3"
            style={{ background: 'rgba(5,27,113,0.05)', border: '1px solid rgba(5,27,113,0.10)' }}
          >
            <p className="text-[0.8125rem] font-semibold text-on-surface">
              Comprendre le stress hydrique du territoire
            </p>
            <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
              Le stress hydrique mesure la pression exercée sur la ressource : il exprime le{' '}
              <strong className="text-on-surface">rapport entre les prélèvements et l'eau naturellement disponible</strong>.
              Plus ce ratio est élevé, plus la ressource est sous tension. Les deux blocs ci-dessous
              détaillent chacune de ces deux composantes.
            </p>
            {/* Visual equation */}
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-[0.75rem] font-semibold px-2.5 py-1 rounded-lg"
                style={{ background: 'rgba(0,151,214,0.10)', color: '#0097d6' }}
              >
                💧 Eau disponible
              </span>
              <span className="text-[0.75rem] text-on-surface-var font-medium">→</span>
              <span
                className="text-[0.75rem] font-bold px-2.5 py-1 rounded-lg"
                style={{ background: stressColor + '22', color: stressColor }}
              >
                Ratio {stressRatio.toFixed(1)}
              </span>
              <span className="text-[0.75rem] text-on-surface-var font-medium">←</span>
              <span
                className="text-[0.75rem] font-semibold px-2.5 py-1 rounded-lg"
                style={{ background: 'rgba(34,197,94,0.10)', color: '#22c55e' }}
              >
                📊 Prélèvements
              </span>
            </div>
          </div>

          {/* Two sub-blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-5" style={{ background: '#fff', boxShadow: '0 1px 4px rgba(0,0,20,0.05)' }}>
              <p className="text-[0.75rem] font-semibold text-on-surface-var uppercase tracking-widest mb-4">
                Disponibilité en eau
              </p>
              <WaterCycleFlow cycleEau={t?.cycle_eau} horizon={horizon} precip={precip} projClimat={t?.projections_climatiques} />
            </div>

            <div className="rounded-xl p-5" style={{ background: '#fff', boxShadow: '0 1px 4px rgba(0,0,20,0.05)' }}>
              <p className="text-[0.75rem] font-semibold text-on-surface-var uppercase tracking-widest mb-4">
                Prélèvements
              </p>
              <WithdrawalsDonut key={horizon} data={t?.prelevements?.[horizon] ?? MOCK_PRELEVEMENTS[horizon]} refData={t?.prelevements?.actuel ?? MOCK_PRELEVEMENTS.actuel} horizon={horizon} />
            </div>
          </div>

          {/* ── Graphe de synthèse ── */}
          <SyntheseChart eauDecomp={t?.decomposition_mensuelle_eau_mm} prelevDecomp={t?.decomposition_mensuelle_prelevements_mm3} />
        </div>
      </div>

    </div>
  );
}
