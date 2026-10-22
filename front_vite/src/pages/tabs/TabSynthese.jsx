// Onglet Plan d'action : le score de maturité et les axes prioritaires, puis
// le plan d'action (les trois mesures par où commencer, et toutes les mesures
// regroupées par catégorie). Même habillage que l'onglet Constat.

import { useEffect, useMemo, useRef, useState } from 'react';

import { createSiretStorage } from '../../utils/siretStorage';
import { buildActionPlan }    from '../../utils/actionPanEngine';
import { fichesLieesA, roleLabels } from '../../utils/solutionsMatching';
import Logo                 from '../../components/Logo';
import InfosComplementaires from '../../components/InfosComplementaires';
import { Chapitre, InfoSurvol, Surligne } from '../../components/constat/ConstatUI';
import {
  cleanAnswers,
  computeScores,
  getLevel,
  MATURITY_THRESHOLDS,
} from '../../utils/questionnaireScoring';

const maturiteStorage = createSiretStorage('maturite_data_v2');

const DEGRADE = 'linear-gradient(135deg, #000a43 0%, #051b71 100%)';

// Accents de la charte : l'orange pour les priorités et l'impact fort, le
// bleu clair pour le temps (horizons) et les en-têtes de thème. Les textes
// prennent la teinte foncée de chaque couleur pour rester lisibles.
const ORANGE = { plein: '#dc6409', clair: '#fe851f', fond: 'rgba(254,133,31,0.14)', texte: '#964900' };
const CIEL   = { plein: '#0097d6', fond: 'rgba(0,151,214,0.10)', voile: 'rgba(0,151,214,0.06)', texte: '#00628c' };

// Nombre de mesures mises en avant dans « Par où commencer »
const NB_PRIORITES = 3;

const HORIZONS = {
  immediat:    'Immédiat',
  court_terme: 'Court terme',
  moyen_terme: 'Moyen terme',
};
const ORDRE_HORIZONS = Object.keys(HORIZONS);

const NIVEAUX_EFFORT = {
  faible:    { points: 1, label: 'Faible' },
  moyen:     { points: 2, label: 'Moyen' },
  important: { points: 3, label: 'Important' },
};

const IMPACTS = { 1: 'Modéré', 2: 'Moyen', 3: 'Fort' };

const AIDE_MATURITE =
  "Ce score mesure où en sont vos pratiques de gestion de l'eau. Chaque réponse rapporte de 0 à 3 points selon la pratique décrite. " +
  "Le score est la part des points obtenus sur les questions auxquelles vous avez répondu (les réponses « je ne sais pas » ne comptent pas). " +
  'Premiers pas jusqu\'à 33 %, En progression jusqu\'à 66 %, Engagé au-delà.';

function allerA(cible) {
  const el = document.getElementById(cible);
  if (!el) return;
  const doux = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'start' });
}

// ═══════════════════════════════════════════════════════════════════════════
// Composant principal
// ═══════════════════════════════════════════════════════════════════════════

export default function TabSynthese({ entreprise, referentiel, solutions, onAllerMaturite, onVoirFiche }) {
  const siret = entreprise?.siret;

  const {
    questions,
    actions,
    categories,
    action_plan_config: planConfig,
    topics_labels:      topicsLabels,
  } = referentiel;

  const prestataires = solutions?.prestataires ?? [];

  const { scores, answeredCount, totalCount, answers } = useMemo(() => {
    const stored = maturiteStorage.load(siret);
    if (stored?.answers && Object.keys(stored.answers).length > 0) {
      const sc = stored.scores ?? computeScores(questions, stored.answers);
      return {
        scores:        sc,
        answers:       cleanAnswers(stored.answers),
        answeredCount: sc?.answeredCount ?? 0,
        totalCount:    sc?.totalCount    ?? questions.length,
      };
    }
    return { scores: null, answers: {}, answeredCount: 0, totalCount: questions.length };
  }, [siret, questions]);

  const actionPlan = useMemo(() => {
    if (!scores) return [];
    const maturityLevel = getLevel(scores.maturityRatio, MATURITY_THRESHOLDS).level;
    return buildActionPlan({
      answers,
      constructor: planConfig,
      measures:    actions,
      scores:      { ...scores, maturityLevel },
      questions,
    });
  }, [scores, answers, planConfig, actions, questions]);

  if (!scores) return <QuestionnaireVide onAllerMaturite={onAllerMaturite} />;

  return (
    <div className="flex flex-col gap-8">
      <Chapitre
        id="chapitre-maturite"
        numero="1"
        surtitre="Votre maturité"
        titre={<>Où en êtes-vous face aux <Surligne ton="eau">enjeux de l'eau</Surligne> ?</>}
        accroche="Un aperçu de vos pratiques, d'après vos réponses au questionnaire de maturité."
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3">
            <ScoreMaturite
              ratio={scores.maturityRatio}
              repondues={answeredCount}
              total={totalCount}
              onAllerMaturite={onAllerMaturite}
            />
          </div>
          {scores.topics?.length > 0 && (
            <div className="md:col-span-2">
              <AxesPrioritaires topics={scores.topics} libelles={topicsLabels} />
            </div>
          )}
        </div>
      </Chapitre>

      <PlanAction plan={actionPlan} categories={categories} prestataires={prestataires} onVoirFiche={onVoirFiche} />
    </div>
  );
}

// ─── Questionnaire non renseigné ──────────────────────────────────────────────

function QuestionnaireVide({ onAllerMaturite }) {
  return (
    <div
      className="bg-surface-lowest rounded-2xl px-6 sm:px-8 py-8 flex flex-col sm:flex-row sm:items-center gap-5"
      style={{ boxShadow: '0 0 40px rgba(0,10,67,0.06)' }}
    >
      <div className="flex-1">
        <p className="text-[1.125rem] font-extrabold text-primary" style={{ letterSpacing: '-0.015em' }}>
          Votre plan d'action se construit à partir de vos réponses
        </p>
        <p className="text-[0.875rem] text-on-surface-var leading-relaxed mt-1">
          Répondez au questionnaire de maturité pour obtenir votre score et les mesures adaptées à votre site.
        </p>
      </div>
      {onAllerMaturite && <BoutonPrincipal onClick={onAllerMaturite}>Évaluer ma maturité</BoutonPrincipal>}
    </div>
  );
}

function BoutonPrincipal({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[0.875rem] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
      style={{ background: DEGRADE }}
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// ─── Score de maturité ────────────────────────────────────────────────────────

function ScoreMaturite({ ratio, repondues, total, onAllerMaturite }) {
  const niveau = getLevel(ratio, MATURITY_THRESHOLDS);
  const pct = Math.round(ratio * 100);
  const partiel = repondues < total;

  return (
    <div className="bg-surface-low rounded-xl px-5 py-5 flex flex-col gap-4 h-full">
      <div className="flex items-center gap-2">
        <p className="text-[0.8125rem] text-on-surface-var">Score de maturité</p>
        <InfoSurvol texte={AIDE_MATURITE} large alignement="gauche" />
      </div>

      <div className="flex items-end gap-3 flex-wrap">
        <span className="text-[2.5rem] font-black text-primary tabular-nums leading-none" style={{ letterSpacing: '-0.02em' }}>
          {pct}<span className="text-[1.25rem] font-bold ml-0.5">%</span>
        </span>
        <span className="text-[1.125rem] font-bold text-primary leading-none mb-1">{niveau.label}</span>
      </div>

      <EchelleMaturite pct={pct} actif={niveau.level} />

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
        <p className="text-[0.75rem] text-on-surface-var tabular-nums">
          {repondues} question{repondues > 1 ? 's' : ''} renseignée{repondues > 1 ? 's' : ''} sur {total}.
          {partiel && ' Complétez le questionnaire pour affiner ce score.'}
        </p>
        {partiel && onAllerMaturite && (
          <button
            type="button"
            onClick={onAllerMaturite}
            className="text-[0.75rem] font-semibold text-primary underline underline-offset-2 hover:opacity-80"
          >
            Reprendre le questionnaire
          </button>
        )}
      </div>
    </div>
  );
}

// Barre continue découpée en trois zones (les seuils de maturité), remplie
// jusqu'au score. Le libellé de la zone atteinte est en gras.
function EchelleMaturite({ pct, actif }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-2.5 rounded-full overflow-hidden" style={{ background: '#e0e2eb' }} aria-hidden="true">
        <div className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-500" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${CIEL.plein} 0%, #051b71 100%)` }} />
        {MATURITY_THRESHOLDS.slice(1).map(s => (
          <span key={s.level} className="absolute inset-y-0 w-0.5 bg-surface-low" style={{ left: `${s.min * 100}%` }} />
        ))}
      </div>
      <div className="grid grid-cols-3">
        {MATURITY_THRESHOLDS.map((s, i) => (
          <span
            key={s.level}
            className={`text-[0.6875rem] ${i === 1 ? 'text-center' : i === 2 ? 'text-right' : ''} ${s.level === actif ? 'font-bold text-primary' : 'text-on-surface-var'}`}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Axes prioritaires ────────────────────────────────────────────────────────

function AxesPrioritaires({ topics, libelles }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h3 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>
          Vos axes prioritaires
        </h3>
        <p className="text-[0.8125rem] text-on-surface-var mt-1">
          Les thèmes qui reviennent le plus dans vos réponses.
        </p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {topics.map(t => (
          <li key={t} className="text-[0.8125rem] font-medium rounded-lg px-3 py-1.5" style={{ background: CIEL.fond, color: CIEL.texte }}>
            {libelles?.[t] ?? t}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Plan d'action
// ═══════════════════════════════════════════════════════════════════════════

function PlanAction({ plan, categories, prestataires, onVoirFiche }) {
  const [ouvertes, setOuvertes] = useState(() => new Set());

  // Le plan arrive trié par pertinence (impact × facilité, puis horizon)
  const priorites = plan.slice(0, NB_PRIORITES);

  const libelleCategorie = Object.fromEntries(categories.map(c => [c.id, c.label]));

  // Catégories qui ont au moins une mesure, dans l'ordre du référentiel.
  // Dans une catégorie : horizon d'abord, puis pertinence.
  const themes = categories
    .map(cat => ({
      cat,
      mesures: plan
        .filter(m => m.categorie === cat.id)
        .sort((a, b) => {
          const h = ORDRE_HORIZONS.indexOf(a.horizon) - ORDRE_HORIZONS.indexOf(b.horizon);
          return h !== 0 ? h : (b.relevanceScore ?? 0) - (a.relevanceScore ?? 0);
        }),
    }))
    .filter(t => t.mesures.length > 0);

  const basculer = id => setOuvertes(prev => {
    const suivant = new Set(prev);
    if (suivant.has(id)) suivant.delete(id); else suivant.add(id);
    return suivant;
  });

  // Depuis « Par où commencer » : déplie la mesure dans la liste et y descend
  const montrer = id => {
    setOuvertes(prev => new Set(prev).add(id));
    requestAnimationFrame(() => allerA(`mesure-${id}`));
  };

  const n = plan.length;

  return (
    <Chapitre
      id="chapitre-plan"
      numero="2"
      surtitre="Votre plan d'action"
      titre={n > 0
        ? <>{n} mesure{n > 1 ? 's' : ''} <Surligne ton="eau">adaptée{n > 1 ? 's' : ''} à votre site</Surligne></>
        : <>Votre <Surligne ton="eau">plan d'action</Surligne></>}
      accroche="Les mesures retenues d'après vos réponses, classées selon leur impact sur l'eau et leur facilité de mise en œuvre."
    >
      {n === 0 ? (
        <div className="bg-surface-low rounded-xl px-6 py-8 text-center">
          <p className="text-[0.875rem] text-on-surface-var">
            Aucune mesure ne ressort de vos réponses pour l'instant. Complétez le questionnaire pour affiner le plan.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <section className="flex flex-col gap-4" aria-labelledby="plan-priorites">
            <div>
              <h3 id="plan-priorites" className="text-[1.125rem] sm:text-[1.25rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.015em' }}>
                Par où <Surligne ton="alerte">commencer</Surligne>
              </h3>
              <p className="text-[0.8125rem] text-on-surface-var mt-1">
                Les mesures au meilleur rapport entre impact et facilité.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {priorites.map((m, i) => (
                <CartePriorite
                  key={m.id}
                  mesure={m}
                  rang={i + 1}
                  categorie={libelleCategorie[m.categorie]}
                  onClick={() => montrer(m.id)}
                />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4" aria-labelledby="plan-themes">
            <div>
              <h3 id="plan-themes" className="text-[1.125rem] sm:text-[1.25rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.015em' }}>
                Toutes les mesures, par thème
              </h3>
              <p className="text-[0.8125rem] text-on-surface-var mt-1">
                Cliquez sur une mesure pour voir son détail et qui peut vous accompagner.
              </p>
            </div>
            <LigneMetro themes={themes} ouvertes={ouvertes} onBasculer={basculer} prestataires={prestataires} onVoirFiche={onVoirFiche} />
          </section>
        </div>
      )}
    </Chapitre>
  );
}

// ─── Étiquettes ───────────────────────────────────────────────────────────────

// `ton` : 'horizon' (bleu clair, avec une horloge), 'fort' (orange), sinon neutre
function Etiquette({ ton, children }) {
  const style =
    ton === 'horizon' ? { background: CIEL.fond, color: CIEL.texte } :
    ton === 'fort'    ? { background: ORANGE.fond, color: ORANGE.texte } :
                        { background: '#e8eaf3', color: '#44474f' };
  return (
    <span className="inline-flex items-center gap-1 text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap tabular-nums" style={style}>
      {ton === 'horizon' && (
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="4.75" stroke="currentColor" strokeWidth="1.4" />
          <path d="M6 3.5V6l1.75 1.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )}
      {children}
    </span>
  );
}

function EtiquetteHorizon({ horizon }) {
  return <Etiquette ton="horizon">{HORIZONS[horizon] ?? HORIZONS.moyen_terme}</Etiquette>;
}

function EtiquetteImpact({ impact }) {
  const label = IMPACTS[impact] ?? IMPACTS[1];
  return <Etiquette ton={impact === 3 ? 'fort' : undefined}>Impact {label.toLowerCase()}</Etiquette>;
}

// ─── Carte « Par où commencer » ──────────────────────────────────────────────

function CartePriorite({ mesure: m, rang, categorie, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left bg-surface-low rounded-xl overflow-hidden flex flex-col transition-colors hover:bg-surface-high focus-visible:outline-2 focus-visible:outline-primary-container"
    >
      <div className="relative h-28 w-full overflow-hidden" style={{ background: DEGRADE }}>
        {m.image && (
          <img src={m.image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        )}
        <RangPriorite rang={rang} className="absolute top-3 left-3" ombre />
      </div>
      <span className="h-1 w-full shrink-0" style={{ background: ORANGE.clair }} aria-hidden="true" />
      <div className="px-4 py-3.5 flex flex-col gap-2 flex-1">
        <span className="text-[0.6875rem] text-on-surface-var leading-snug">{categorie}</span>
        <span className="text-[0.875rem] font-semibold text-on-surface leading-snug flex-1">{m.titre}</span>
        <span className="flex flex-wrap gap-1.5">
          <EtiquetteHorizon horizon={m.horizon} />
          <EtiquetteImpact impact={m.impact_eau} />
        </span>
      </div>
    </button>
  );
}

// Numéro orange des mesures « Par où commencer »
function RangPriorite({ rang, className = '', ombre }) {
  return (
    <span
      className={`w-8 h-8 text-[0.875rem] rounded-full flex items-center justify-center font-black text-white shrink-0 ${className}`}
      style={{ background: ORANGE.plein, boxShadow: ombre ? '0 2px 8px rgba(0,10,67,0.25)' : undefined }}
      aria-label={`Priorité ${rang}`}
    >
      {rang}
    </span>
  );
}

// ─── Thème : une catégorie et ses mesures ────────────────────────────────────

// Un cadre par thème : en-tête bleu nuit (comme le bandeau des chapitres),
// puis la liste des mesures. La description de la catégorie passe dans le
// « ? ». Pas d'overflow-hidden sur le cadre, qui couperait l'infobulle :
// l'en-tête déborde d'un pixel pour recouvrir la bordure du cadre.
function Theme({ categorie, mesures, ouvertes, onBasculer, prestataires, onVoirFiche }) {
  return (
    <div id={`theme-${categorie.id}`} className="rounded-2xl bg-white scroll-mt-20 min-[1440px]:scroll-mt-6" style={{ border: '1px solid #e0e2eb' }}>
      <div
        className="flex items-center gap-3 px-5 py-2 min-h-11 -mx-px -mt-px rounded-t-2xl"
        style={{ background: DEGRADE }}
      >
        <div className="flex-1 min-w-0 flex items-center gap-2">
          <h4 className="text-[0.9375rem] font-bold text-white leading-snug" style={{ letterSpacing: '-0.01em' }}>
            {categorie.label}
          </h4>
          {categorie.description && <InfoSurvol texte={categorie.description} large clair />}
        </div>
      </div>
      <ul className="flex flex-col gap-2 p-3 sm:p-4">
        {mesures.map(m => (
          <LigneMesure
            key={m.id}
            mesure={m}
            ouverte={ouvertes.has(m.id)}
            onBasculer={() => onBasculer(m.id)}
            prestataires={fichesLieesA(prestataires, m.id)}
            onVoirFiche={onVoirFiche}
          />
        ))}
      </ul>
    </div>
  );
}

// ─── Ligne de métro ──────────────────────────────────────────────────────────

// Les thèmes comme les stations d'une ligne : un rail vertical à gauche, une
// station numérotée en face de l'en-tête de chaque thème. Le rail se remplit
// à mesure que la page défile (jusqu'au milieu de l'écran, puis jusqu'en bas
// en fin de page) et les stations
// atteintes passent en bleu nuit.
// Les positions sont mesurées après rendu (offsetTop des thèmes dans le
// conteneur) et recalculées au défilement, au redimensionnement et quand une
// mesure se déplie (ResizeObserver).

const CENTRE_EN_TETE = 22; // moitié de la hauteur de l'en-tête d'un thème (44 px)
const AXE_RAIL = 20;       // abscisse du rail dans la colonne de gauche (40 px)

function LigneMetro({ themes, ouvertes, onBasculer, prestataires, onVoirFiche }) {
  const conteneur = useRef(null);
  const blocs = useRef([]);
  const [rail, setRail] = useState({ positions: [], progres: -1 });

  useEffect(() => {
    const el = conteneur.current;
    if (!el) return undefined;
    let image = 0;

    const mesurer = () => {
      image = 0;
      const positions = blocs.current
        .slice(0, themes.length)
        .map(b => (b ? b.offsetTop + CENTRE_EN_TETE : 0));
      // Repère au milieu de l'écran, qui glisse jusqu'au bas de l'écran sur la
      // dernière demi-hauteur de défilement : en bout de page, tout ce qui est
      // visible est atteint, y compris la dernière station.
      const hauteur = window.innerHeight;
      const reste = document.documentElement.scrollHeight - (window.scrollY + hauteur);
      const fin = Math.min(1, Math.max(0, 1 - reste / (hauteur * 0.5)));
      const progres = Math.round(hauteur * (0.5 + 0.5 * fin) - el.getBoundingClientRect().top);
      setRail(prev =>
        prev.progres === progres && prev.positions.join() === positions.join() ? prev : { positions, progres }
      );
    };
    const demander = () => { if (!image) image = requestAnimationFrame(mesurer); };

    demander();
    window.addEventListener('scroll', demander, { passive: true });
    window.addEventListener('resize', demander);
    const observateur = new ResizeObserver(demander);
    observateur.observe(el);
    return () => {
      cancelAnimationFrame(image);
      window.removeEventListener('scroll', demander);
      window.removeEventListener('resize', demander);
      observateur.disconnect();
    };
  }, [themes.length]);

  const { positions, progres } = rail;
  const debut = positions[0] ?? 0;
  const longueur = positions.length > 1 ? positions[positions.length - 1] - debut : 0;
  const rempli = Math.max(0, Math.min(longueur, progres - debut));

  return (
    <div ref={conteneur} className="relative flex flex-col gap-6 mt-2 pl-10 sm:pl-12">
      {longueur > 0 && (
        <>
          <span
            className="absolute w-1 rounded-full"
            style={{ left: AXE_RAIL - 2, top: debut, height: longueur, background: '#e0e2eb' }}
            aria-hidden="true"
          />
          <span
            className="absolute w-1 rounded-full transition-[height] duration-150 ease-out"
            style={{ left: AXE_RAIL - 2, top: debut, height: rempli, background: CIEL.plein }}
            aria-hidden="true"
          />
        </>
      )}

      {themes.map(({ cat, mesures }, i) => (
        <div key={cat.id} ref={b => { blocs.current[i] = b; }} className="relative">
          <Station
            numero={i + 1}
            atteinte={positions[i] != null && progres >= positions[i]}
          />
          <Theme
            categorie={cat}
            mesures={mesures}
            ouvertes={ouvertes}
            onBasculer={onBasculer}
            prestataires={prestataires}
            onVoirFiche={onVoirFiche}
          />
        </div>
      ))}
    </div>
  );
}

// Station : rond numéroté sur le rail, cerclé de bleu clair, plein de bleu
// nuit une fois atteint. Placée dans la colonne de gauche (padding du
// conteneur), centrée sur l'axe du rail et sur l'en-tête du thème.
function Station({ numero, atteinte }) {
  return (
    <span
      className="absolute w-7 h-7 rounded-full flex items-center justify-center text-[0.75rem] font-black transition-colors duration-300 -left-10 sm:-left-12"
      style={{
        top: CENTRE_EN_TETE - 14,
        marginLeft: AXE_RAIL - 14,
        background: atteinte ? '#051b71' : '#ffffff',
        color: atteinte ? '#ffffff' : CIEL.texte,
        border: `3px solid ${atteinte ? '#051b71' : CIEL.plein}`,
        boxShadow: '0 0 0 3px #ffffff',
      }}
      aria-hidden="true"
    >
      {numero}
    </span>
  );
}

// ─── Mesure : ligne compacte dépliable ───────────────────────────────────────

// Dépliée, la mesure passe sur fond blanc, cerclée de bleu nuit, avec un
// en-tête voilé de bleu clair : elle se détache des lignes fermées.
function LigneMesure({ mesure: m, ouverte, onBasculer, prestataires, onVoirFiche }) {
  const panneau = `mesure-detail-${m.id}`;

  return (
    <li
      id={`mesure-${m.id}`}
      className={`rounded-xl overflow-hidden scroll-mt-20 min-[1440px]:scroll-mt-6 transition-shadow duration-300 ${ouverte ? 'bg-white' : 'bg-surface-low'}`}
      style={ouverte ? { boxShadow: '0 0 0 2px #051b71, 0 8px 24px rgba(0,10,67,0.10)' } : undefined}
    >
      <button
        type="button"
        onClick={onBasculer}
        aria-expanded={ouverte}
        aria-controls={panneau}
        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary-container ${ouverte ? '' : 'hover:bg-surface-high'}`}
        style={ouverte ? { background: CIEL.fond } : undefined}
      >
        <span className={`flex-1 min-w-0 text-[0.875rem] font-semibold leading-snug ${ouverte ? 'text-primary' : 'text-on-surface'}`}>{m.titre}</span>
        <EtiquetteHorizon horizon={m.horizon} />
        <svg
          className="shrink-0 text-on-surface-var transition-transform duration-300"
          style={{ transform: ouverte ? 'rotate(180deg)' : 'none' }}
          width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id={panneau}
        inert={!ouverte}
        style={{ display: 'grid', gridTemplateRows: ouverte ? '1fr' : '0fr', transition: 'grid-template-rows 0.3s ease' }}
      >
        <div className="overflow-hidden">
          <DetailMesure mesure={m} prestataires={prestataires} onVoirFiche={onVoirFiche} />
        </div>
      </div>
    </li>
  );
}

function DetailMesure({ mesure: m, prestataires, onVoirFiche }) {
  return (
    <div className="px-4 pb-4 pt-4 flex flex-col gap-4">
      <div className={`grid grid-cols-1 gap-4 ${m.image ? 'sm:grid-cols-3' : ''}`}>
        {m.image && (
          <img src={m.image} alt="" loading="lazy" className="w-full h-32 sm:h-full max-h-40 object-cover rounded-lg" />
        )}
        <p className={`text-[0.8125rem] text-on-surface-var leading-relaxed ${m.image ? 'sm:col-span-2' : ''}`}>
          {m.description}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Effort label="Impact sur l'eau" points={m.impact_eau ?? 1} valeur={IMPACTS[m.impact_eau] ?? IMPACTS[1]} couleur={ORANGE.clair} />
        <Effort label="Investissement" niveau={m.effort?.capex} />
        <Effort label="Fonctionnement" niveau={m.effort?.opex} />
        <Effort label="Temps des équipes" niveau={m.effort?.humain} />
      </div>

      {prestataires.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-[0.8125rem] font-semibold text-on-surface">Qui peut vous accompagner</p>
          <div className="flex flex-wrap gap-2">
            {prestataires.map(p => {
              const roles = roleLabels(p.roles);
              const contenu = (
                <>
                  <Logo url={p.logo_url} nom={p.nom} size={20} />
                  {p.nom}
                  {roles.length > 0 && <span className="text-on-surface-var">({roles.join(', ')})</span>}
                </>
              );
              const cls = 'inline-flex items-center gap-1.5 pl-1 pr-2.5 py-0.5 rounded-full bg-white text-[0.75rem] text-on-surface';
              return onVoirFiche ? (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onVoirFiche(p.id)}
                  className={`${cls} transition-colors hover:bg-surface-high focus-visible:outline-2 focus-visible:outline-primary-container`}
                  style={{ border: '1px solid #e0e2eb' }}
                  title={p.description}
                >
                  {contenu}
                </button>
              ) : (
                <span key={p.id} className={cls} style={{ border: '1px solid #e0e2eb' }} title={p.description}>
                  {contenu}
                </span>
              );
            })}
          </div>
          <p className="text-[0.6875rem] text-on-surface-var">
            {onVoirFiche
              ? 'Cliquez sur un acteur pour voir sa fiche et ses coordonnées dans Comment avancer.'
              : "Leurs coordonnées sont dans l'onglet Comment avancer."}
          </p>
        </div>
      )}

      <InfosComplementaires infos={m.infos_complementaires} />
    </div>
  );
}

// Petite tuile : libellé, puis trois points remplis selon le niveau. Orange
// pour l'impact (plus il y en a, mieux c'est), bleu nuit pour les coûts.
function Effort({ label, niveau, points, valeur, couleur = '#051b71' }) {
  const meta = NIVEAUX_EFFORT[niveau];
  const n = points ?? meta?.points ?? 0;
  const texte = valeur ?? meta?.label ?? 'Non renseigné';
  return (
    <div className="bg-surface-low rounded-lg px-3 py-2.5 flex flex-col gap-1.5">
      <span className="text-[0.6875rem] text-on-surface-var">{label}</span>
      <span className="flex items-center gap-2">
        <span className="flex gap-0.5" aria-hidden="true">
          {[1, 2, 3].map(i => (
            <span key={i} className="w-2 h-2 rounded-full" style={{ background: i <= n ? couleur : '#e0e2eb' }} />
          ))}
        </span>
        <span className="text-[0.75rem] font-semibold text-on-surface">{texte}</span>
      </span>
    </div>
  );
}
