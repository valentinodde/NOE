import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { fetchEntreprise, fetchTerritoire } from '../utils/api';
import { getCategorieJuridiqueLabel, getStressLabel, getStressColor } from '../utils/riskHelpers';
import { NAF_SECTORS, EFFECTIFS, getNAFSection, getSectorDescription, getSectorVulnerability } from '../utils/sectorAnalysis';
import TabConstat  from './tabs/TabConstat';
import TabMaturite from './tabs/TabMaturite';
import TabAvancer  from './tabs/TabAvancer';
import TabSynthese from './tabs/TabSynthese';

// ─── Tab definitions ──────────────────────────────────────────────────────────

const TABS = [
  { id: 'constat',  label: 'Constat & enjeux territoriaux' },
  { id: 'maturite', label: 'Évaluer sa maturité' },
  { id: 'synthese', label: 'Synthèse & plan d\'action' },
  { id: 'avancer',  label: 'Comment avancer' },
];

// ─── Main page ────────────────────────────────────────────────────────────────

export default function CompanyPage() {
  const { siret } = useParams();
  const navigate  = useNavigate();

  const [entreprise, setEntreprise] = useState(null);
  const [territoire, setTerritoire] = useState(null);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);
  const [activeTab, setActiveTab]   = useState('constat');

  useEffect(() => {
    setLoading(true);
    setError(null);
    setTerritoire(null);

    fetchEntreprise(siret)
      .then((ent) => {
        setEntreprise(ent);
        if (ent.code_bassin) {
          return fetchTerritoire(ent.code_bassin).then(setTerritoire).catch(() => null);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [siret]);

  if (loading) return <LoadingView />;
  if (error)   return <ErrorView siret={siret} onBack={() => navigate('/')} />;

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10 flex flex-col gap-8">
        <Section1Header entreprise={entreprise} territoire={territoire} />

        {/* Tab bar */}
        <div className="border-b border-surface-high">
          <nav className="-mb-px flex gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'px-5 py-3 text-[0.875rem] font-medium rounded-t-lg transition-colors whitespace-nowrap',
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary bg-surface-low'
                    : 'text-on-surface-var hover:text-on-surface hover:bg-surface-low',
                ].join(' ')}
                style={activeTab === tab.id ? { borderColor: '#051b71' } : undefined}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab content */}
        <div>
          {activeTab === 'constat'  && <TabConstat  territoire={territoire} entreprise={entreprise} />}
          {activeTab === 'maturite' && <TabMaturite entreprise={entreprise} />}
          {activeTab === 'avancer'  && <TabAvancer  entreprise={entreprise} />}
          {activeTab === 'synthese' && <TabSynthese entreprise={entreprise} />}
        </div>
      </main>
    </div>
  );
}

// ─── Section 1: Company header ────────────────────────────────────────────────

function Section1Header({ entreprise: e, territoire }) {
  const nafCode = e?.activiteprincipaleetablissement;
  const section = getNAFSection(nafCode);
  const sector  = NAF_SECTORS[section] || { icon: '🏢', label: "Secteur d'activité" };

  // Stress hydrique
  const sh       = territoire?.stress_hydrique;
  const ratio    = sh?.ratio_stress?.actuel;
  const seuils   = sh?.seuils;
  const stressLabel = ratio != null ? getStressLabel(ratio, seuils) : null;
  const stressColor = ratio != null ? getStressColor(ratio, seuils) : '#94a3b8';

  // Dépendance sectorielle à l'eau
  const vulnSector = getSectorVulnerability(nafCode);
  const dependance = vulnSector?.quantite?.dependance ?? '—';

  const nomEntreprise =
    e?.denominationunitelegale ||
    [e?.prenom1unitelegale, e?.nomunitelegale].filter(Boolean).join(' ') ||
    '—';

  const adresse = [
    e?.ligne_adresse_1,
    e?.ligne_adresse_2,
    `${e?.codepostaletablissement || ''} ${e?.libellecommuneetablissement || ''}`.trim(),
  ]
    .filter(Boolean)
    .join(', ')
    .replace(/,\s*,/g, ',')
    .trim();

  const effectifLabel = EFFECTIFS[e?.trancheeffectifsetablissement];

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 48px rgba(0,10,67,0.06)' }}>
      <div className="bg-surface-highest px-8 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {e?.etablissementsiege && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
            >
              ★ Siège social
            </span>
          )}
        </div>
        <p className="text-[0.6875rem] text-on-surface-var font-mono tracking-wide">SIRET {e?.siret}</p>
      </div>

      <div className="px-8 py-7 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: identity */}
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-bold text-primary tracking-tight leading-tight">{nomEntreprise}</h1>
            <p className="text-[0.875rem] text-on-surface-var mt-1">{adresse || '—'}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <InfoItem label="Forme juridique" value={getCategorieJuridiqueLabel(e?.categoriejuridiqueunitelegale)} />
            <InfoItem
              label="Date de création"
              value={
                e?.datecreationetablissement
                  ? new Date(e.datecreationetablissement).toLocaleDateString('fr-FR', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })
                  : '—'
              }
            />
            <InfoItem label="Effectif"    value={effectifLabel ? `${effectifLabel} sal.` : '—'} />
            <InfoItem label="Département" value={e?.departement || '—'} />
            <InfoItem label="SIREN"       value={e?.siren} />
            <InfoItem label="Commune"     value={e?.libellecommuneetablissement} />
          </div>
        </div>

        {/* Right: NAF sector */}
        <div className="flex flex-col gap-4 p-5 bg-surface-high rounded-xl">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-surface-highest flex items-center justify-center text-2xl shrink-0">
              {sector.icon}
            </div>
            <div>
              <p className="text-[0.6875rem] text-on-surface-var uppercase tracking-widest mb-1">Code NAF / APE</p>
              <p className="text-[1.25rem] font-bold text-primary font-mono">{nafCode || '—'}</p>
            </div>
          </div>
          <div>
            <p className="text-[0.875rem] font-semibold text-on-surface">{sector.label}</p>
            <p className="text-[0.8125rem] text-on-surface-var mt-1.5 leading-relaxed">
              {getSectorDescription(section)}
            </p>
          </div>
        </div>
      </div>

      {/* Footer: water stress & dependency */}
      <div className="border-t border-surface-high px-8 py-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <WaterIndicator
          icon="🌊"
          label="Stress hydrique du territoire"
          value={stressLabel ?? '—'}
          color={stressColor}
          subtitle={ratio != null ? `Ratio prélèvements / ressource : ${ratio.toFixed(2)}` : null}
        />
        <WaterIndicator
          icon="💧"
          label="Dépendance à l'eau de l'activité"
          value={dependance}
          color={getDependanceColor(dependance)}
          subtitle={vulnSector?.quantite?.detail ?? null}
        />
      </div>
    </div>
  );
}

// ─── UI atoms ─────────────────────────────────────────────────────────────────

function getDependanceColor(dep) {
  const d = dep?.toLowerCase() ?? '';
  if (d.includes('très élevée') || d.includes('critique')) return '#ef4444';
  if (d.includes('élevée'))  return '#f97316';
  if (d.includes('modérée') || d.includes('évaluer'))      return '#f59e0b';
  return '#22c55e';
}

function WaterIndicator({ icon, label, value, color, subtitle }) {
  const bgColor = color + '1a'; // ~10% opacity version of the color
  return (
    <div className="flex items-start gap-3">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0 mt-0.5"
        style={{ background: color + '18' }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[0.6875rem] text-on-surface-var uppercase tracking-widest mb-1">{label}</p>
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.8125rem] font-semibold"
          style={{ background: bgColor, color }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
          {value}
        </span>
        {subtitle && (
          <p className="text-[0.75rem] text-on-surface-var mt-1 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-[0.6875rem] text-on-surface-var uppercase tracking-widest mb-0.5">{label}</p>
      <p className="text-[0.875rem] font-semibold text-on-surface">{value ?? '—'}</p>
    </div>
  );
}

// ─── Loading / Error states ───────────────────────────────────────────────────

function LoadingView() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-10 h-10 rounded-full border-4 animate-spin"
            style={{ borderColor: '#051b71', borderTopColor: 'transparent' }}
          />
          <span className="text-[0.875rem] font-medium text-on-surface-var">Chargement du profil…</span>
        </div>
      </main>
    </div>
  );
}

function ErrorView({ siret, onBack }) {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div
          className="bg-surface-low rounded-2xl p-10 max-w-md w-full text-center"
          style={{ boxShadow: '0 0 48px rgba(0,10,67,0.04)' }}
        >
          <div className="w-12 h-12 rounded-2xl bg-surface-high flex items-center justify-center mx-auto mb-5 text-2xl">
            🔍
          </div>
          <h2 className="text-[1.1rem] font-semibold text-on-surface mb-2">Établissement non trouvé</h2>
          <p className="text-[0.875rem] text-on-surface-var mb-8 leading-relaxed">
            Aucune donnée disponible pour le SIRET{' '}
            <span className="font-mono font-semibold text-on-surface">{siret}</span>.
          </p>
          <button
            onClick={onBack}
            className="text-white font-semibold px-6 py-3 rounded-xl transition-opacity hover:opacity-80 text-[0.875rem]"
            style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
          >
            ← Nouvelle recherche
          </button>
        </div>
      </main>
    </div>
  );
}
