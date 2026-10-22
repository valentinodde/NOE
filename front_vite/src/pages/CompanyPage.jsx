import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ParcoursEtapes from '../components/ParcoursEtapes';
import { fetchEtablissement, fetchQuestionnaire, fetchSolutions } from '../utils/api';
import { getCategorieJuridiqueLabel, getRankColors } from '../utils/riskHelpers';
import { baremeStress } from '../utils/constatMessages';
import { NAF_SECTORS, EFFECTIFS, getNAFSection, getSectorDescription } from '../utils/sectorAnalysis';
import { InfoSurvol } from '../components/constat/ConstatUI';
import TabConstat  from './tabs/TabConstat';
import TabMaturite from './tabs/TabMaturite';
import TabAvancer  from './tabs/TabAvancer';
import TabSynthese from './tabs/TabSynthese';

// Dépendance du secteur, du plus faible au plus fort niveau
const RISK_QUANTITY = ['low', 'medium', 'high', 'very_high'];
const RISK_QUANTITY_FR = {
  very_high: 'Très élevée',
  high:      'Élevée',
  medium:    'Modérée',
  low:       'Faible',
};

// Textes au survol des deux indicateurs du cartouche
const AIDE_STRESS = (
  "On compare l'eau prélevée dans le bassin à l'eau disponible, dans les rivières en été et dans les nappes. "
  + 'La situation la plus tendue donne le niveau.'
);
const AIDE_DEPENDANCE = (
  "Ce niveau dépend de votre secteur d'activité (code NAF). Il dit combien l'eau compte, en général, pour ce métier."
);

// Icônes au trait, 16 × 16, même dessin que les en-têtes de l'onglet Constat
const ICONE_RIVIERE = (
  <path d="M1.75 5.5c1.05 0 1.55-.9 3.1-.9s2.05.9 3.15.9 1.6-.9 3.15-.9 2.05.9 3.1.9M1.75 10.5c1.05 0 1.55-.9 3.1-.9s2.05.9 3.15.9 1.6-.9 3.15-.9 2.05.9 3.1.9" />
);
const ICONE_GOUTTE = (
  <path d="M8 1.75c2.1 2.7 3.4 4.6 3.4 6.2a3.4 3.4 0 0 1-6.8 0c0-1.6 1.3-3.5 3.4-6.2Z" />
);

// ─── Tab definitions ──────────────────────────────────────────────────────────

const TABS = [
  {
    id: 'constat',
    label: 'Constat',
    titre: "Le constat : l'eau sur votre territoire",
    intro: "La ressource en eau de votre bassin, son évolution avec le changement climatique, et ce qu'elle implique pour votre activité.",
  },
  {
    id: 'maturite',
    label: 'Évaluer sa maturité',
    titre: 'Évaluer votre maturité',
    intro: "Quelques questions sur vos pratiques pour mesurer où vous en êtes face aux enjeux de l'eau.",
  },
  {
    id: 'synthese',
    label: "Plan d'action",
    titre: "Votre synthèse et votre plan d'action",
    intro: 'Les mesures les plus adaptées à votre situation, classées par impact et facilité de mise en œuvre.',
  },
  {
    id: 'avancer',
    label: 'Comment avancer',
    titre: 'Comment avancer',
    intro: "Les apporteurs de solutions, les aides et les retours d'expérience pour mettre en œuvre votre plan d'action.",
  },
];

// ─── Main page ────────────────────────────────────────────────────────────────

export default function CompanyPage() {
  const { siret } = useParams();
  const navigate  = useNavigate();

  const [entreprise, setEntreprise] = useState(null);
  const [bassin,     setBassin]     = useState(null);
  const [secteur,    setSecteur]    = useState(null);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);
  const [activeTab, setActiveTab]   = useState('constat');
  // Fiche à déplier dans Comment avancer, quand on y arrive depuis le plan
  const [ficheCible, setFicheCible] = useState(null);

  // Référentiel questionnaire, servi par l'API selon le code NAF
  const [referentiel, setReferentiel]   = useState(null);
  const [refLoading, setRefLoading]     = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setBassin(null);
    setSecteur(null);

    fetchEtablissement(siret)
      .then(({ entreprise: ent, bassin: b, secteur: s }) => {
        setEntreprise(ent);
        setBassin(b);
        setSecteur(s);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [siret]);

  // Prestataires et aides, filtrés par secteur et département côté API
  const [solutions, setSolutions]             = useState(null);
  const [solutionsLoading, setSolutionsLoading] = useState(true);

  const naf  = entreprise?.activiteprincipaleetablissement;
  const dept = entreprise?.departement;
  const lat  = entreprise?.latitude;
  const lon  = entreprise?.longitude;

  useEffect(() => {
    if (!naf) return;
    setRefLoading(true);
    setReferentiel(null);

    fetchQuestionnaire(naf)
      .then(setReferentiel)
      .catch(() => setReferentiel(null))
      .finally(() => setRefLoading(false));
  }, [naf]);

  useEffect(() => {
    if (!naf) return;
    setSolutionsLoading(true);
    setSolutions(null);

    fetchSolutions(naf, { dept, lat, lon })
      .then(setSolutions)
      .catch(() => setSolutions(null))
      .finally(() => setSolutionsLoading(false));
  }, [naf, dept, lat, lon]);

  if (loading) return <LoadingView />;
  if (error)   return <ErrorView siret={siret} onBack={() => navigate('/')} />;

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10 flex flex-col gap-8">
        <Section1Header entreprise={entreprise} bassin={bassin} secteur={secteur} />

        {/* Parcours en étapes : la navigation entre onglets, au niveau de la page */}
        <ParcoursEtapes
          etapes={TABS}
          active={activeTab}
          onChange={id => { setFicheCible(null); setActiveTab(id); }}
        />

        {/* Tab content */}
        <div>
          {activeTab === 'constat'  && (
            <TabConstat
              territoire={bassin}
              entreprise={entreprise}
              secteur={secteur}
              onAllerMaturite={() => {
                setActiveTab('maturite');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeTab === 'maturite' && (
            <ReferentielGate loading={refLoading} referentiel={referentiel} naf={naf}>
              <TabMaturite
                entreprise={entreprise}
                referentiel={referentiel}
                onAllerPlan={() => {
                  setActiveTab('synthese');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </ReferentielGate>
          )}

          {activeTab === 'synthese' && (
            <ReferentielGate loading={refLoading} referentiel={referentiel} naf={naf}>
              <TabSynthese
                entreprise={entreprise}
                referentiel={referentiel}
                solutions={solutions}
                onAllerMaturite={() => {
                  setActiveTab('maturite');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onVoirFiche={id => {
                  setFicheCible(id);
                  setActiveTab('avancer');
                }}
              />
            </ReferentielGate>
          )}

          {/* Pas de garde : les acteurs institutionnels ne dépendent pas du référentiel */}
          {activeTab === 'avancer' && (
            <TabAvancer
              entreprise={entreprise}
              referentiel={referentiel}
              refLoading={refLoading}
              solutions={solutions}
              solutionsLoading={solutionsLoading}
              ficheCible={ficheCible}
              onAllerMaturite={() => {
                setActiveTab('maturite');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}

// ─── Garde de référentiel ─────────────────────────────────────────────────────
// Les onglets Maturité et Synthèse n'ont rien à afficher tant que le
// questionnaire du secteur n'est pas chargé, ou si aucun ne couvre ce code NAF.

function ReferentielGate({ loading, referentiel, naf, children }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center gap-3 py-16">
        <div
          className="w-5 h-5 rounded-full border-2 animate-spin"
          style={{ borderColor: '#051b71', borderTopColor: 'transparent' }}
        />
        <span className="text-[0.875rem] text-on-surface-var">Chargement du questionnaire…</span>
      </div>
    );
  }

  if (!referentiel) {
    return (
      <div
        className="rounded-2xl bg-surface-lowest p-10 flex flex-col items-center gap-3 text-center"
        style={{ boxShadow: '0 0 40px rgba(0,10,67,0.06)' }}
      >
        <div className="w-10 h-10 rounded-full bg-surface-low border border-border flex items-center justify-center text-on-surface-var text-lg">
          ◎
        </div>
        <p className="text-[0.9375rem] font-semibold text-on-surface">
          Secteur non couvert
        </p>
        <p className="text-[0.875rem] text-on-surface-var max-w-sm leading-relaxed">
          Aucun questionnaire de maturité n'est encore disponible pour le code NAF{' '}
          <span className="font-mono font-semibold text-on-surface">{naf || '-'}</span>.
          Les onglets Constat et Comment avancer restent accessibles.
        </p>
      </div>
    );
  }

  return children;
}

// ─── Section 1: Company header ────────────────────────────────────────────────

function Section1Header({ entreprise: e, bassin, secteur }) {
  const nafCode = e?.activiteprincipaleetablissement;
  const section = getNAFSection(nafCode);
  const sector  = NAF_SECTORS[section] || { icon: '🏢', label: "Secteur d'activité" };

  // Stress hydrique (depuis les données du bassin)
  const sh          = bassin?.stress_hydrique;
  const classe      = sh?.classe?.actuel;
  const bareme      = baremeStress(sh);
  const stressLabel = classe ? bareme.libelles[classe] ?? null : null;
  const stressRang   = bareme.classes.indexOf(classe);

  // Dépendance sectorielle à l'eau (depuis le secteur API)
  const dependanceRang  = RISK_QUANTITY.indexOf(secteur?.water_risk?.quantity);

  // Label et description du secteur (API en priorité, fallback local)
  const sectorLabel       = secteur?.label ?? sector.label;
  const sectorDescription = secteur?.description ?? getSectorDescription(section);

  const nomEntreprise =
    e?.denominationunitelegale ||
    [e?.prenom1unitelegale, e?.nomunitelegale].filter(Boolean).join(' ') ||
    '-';

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
            <p className="text-[0.875rem] text-on-surface-var mt-1">{adresse || '-'}</p>
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
                  : '-'
              }
            />
            <InfoItem label="Effectif"    value={effectifLabel ? `${effectifLabel} sal.` : '-'} />
            <InfoItem label="Département" value={e?.departement || '-'} />
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
              <p className="text-[1.25rem] font-bold text-primary font-mono">{nafCode || '-'}</p>
            </div>
          </div>
          <div>
            <p className="text-[0.875rem] font-semibold text-on-surface">{sectorLabel}</p>
            <p className="text-[0.8125rem] text-on-surface-var mt-1.5 leading-relaxed">
              {sectorDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Footer: water stress & dependency */}
      <div className="border-t border-surface-high px-8 py-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <IndicateurEau
          icone={ICONE_RIVIERE}
          label="Stress hydrique du territoire"
          valeur={stressLabel}
          rang={stressRang}
          nbNiveaux={bareme.classes.length}
          detail={AIDE_STRESS}
        />
        <IndicateurEau
          icone={ICONE_GOUTTE}
          label="Dépendance à l'eau de l'activité"
          valeur={RISK_QUANTITY_FR[RISK_QUANTITY[dependanceRang]]}
          rang={dependanceRang}
          nbNiveaux={RISK_QUANTITY.length}
          detail={AIDE_DEPENDANCE}
        />
      </div>
    </div>
  );
}

// ─── UI atoms ─────────────────────────────────────────────────────────────────

// Tuile du pied de cartouche : icône, puis le niveau écrit en couleur au-dessus
// d'une jauge remplie jusqu'à ce niveau, précision au survol. `rang` négatif :
// pas de donnée, gris.
function IndicateurEau({ icone, label, valeur, rang, nbNiveaux, detail }) {
  const c = getRankColors(rang, nbNiveaux);
  const connu = rang >= 0;
  const remplissage = connu ? ((rang + 1) / nbNiveaux) * 100 : 0;
  return (
    <div className="flex gap-4">
      <span
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: c.bg, color: c.bar }}
      >
        <svg width="22" height="22" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {icone}
        </svg>
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="text-[0.75rem] text-on-surface-var">{label}</p>
          {detail && <InfoSurvol texte={detail} large alignement="gauche" />}
        </div>
        <p className="text-[0.9375rem] font-bold mt-0.5" style={{ color: c.text }}>
          {connu ? valeur : 'Non renseigné'}
        </p>
        <div className="w-40 max-w-full h-1.5 rounded-full bg-surface-high mt-1.5 overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${remplissage}%`, background: c.bar }} />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-[0.6875rem] text-on-surface-var uppercase tracking-widest mb-0.5">{label}</p>
      <p className="text-[0.875rem] font-semibold text-on-surface">{value ?? '-'}</p>
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
