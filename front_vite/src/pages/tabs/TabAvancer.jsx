// Onglet Comment avancer : trois chapitres, les apporteurs de solutions, les
// aides et accompagnements (l'agence de l'eau en tête), puis les aides
// accordées à des entreprises comparables. Même habillage que les onglets
// Constat et Plan d'action, avec le sommaire latéral du Constat.

import { useEffect, useId, useMemo, useRef, useState } from 'react';

import { fetchInstitutionalActors } from '../../utils/api';
import AidesExemples from '../../components/AidesExemples';
import { createSiretStorage } from '../../utils/siretStorage';
import { buildActionPlan }    from '../../utils/actionPanEngine';
import { matchSolutions, roleLabels, estLocale, TYPE_PRESTATAIRE, TYPE_AIDE } from '../../utils/solutionsMatching';
import Logo                 from '../../components/Logo';
import Contacts             from '../../components/Contacts';
import SommaireConstat      from '../../components/constat/SommaireConstat';
import InfosComplementaires from '../../components/InfosComplementaires';
import { Chapitre, InfoSurvol, Surligne, Vide } from '../../components/constat/ConstatUI';
import {
  cleanAnswers,
  computeScores,
  getLevel,
  MATURITY_THRESHOLDS,
} from '../../utils/questionnaireScoring';

const maturiteStorage = createSiretStorage('maturite_data_v2');

const DEGRADE = 'linear-gradient(135deg, #000a43 0%, #051b71 100%)';
const CIEL    = { plein: '#0097d6', fond: 'rgba(0,151,214,0.10)', texte: '#00628c' };

// Mesures mises en avant dans « Par où commencer » (onglet Plan d'action)
const NB_PRIORITES = 3;

// ─── Familles d'acteurs ──────────────────────────────────────────────────────
// Les types de prestataire (vocabulaire fermé, TYPES_PRESTATAIRE dans
// api/referentiel_verif.py) regroupés selon le besoin de l'entreprise. Tout
// type absent d'une famille tombe dans « Autres acteurs ».

const FAMILLES_PRESTATAIRE = [
  {
    id: 'conseil', label: 'Conseil et expertise',
    description: 'Pour faire un diagnostic, étudier et dimensionner vos projets.',
    types: ['bureau_etudes', 'organisme_technique', 'chambre_consulaire'],
  },
  {
    id: 'materiel', label: 'Matériel et travaux',
    description: 'Pour équiper votre site et réaliser les travaux.',
    types: ['equipementier', 'installateur', 'solution_numerique'],
  },
  {
    id: 'filieres', label: 'Filières et réseaux',
    description: 'Pour avancer avec les acteurs de votre profession.',
    types: ['cooperative', 'syndicat_professionnel', 'association'],
  },
  {
    id: 'formation', label: 'Formation',
    description: 'Pour former vos équipes.',
    types: ['organisme_formation'],
  },
  {
    id: 'publics', label: 'Acteurs publics',
    description: "Pour les démarches à l'échelle du territoire.",
    types: ['collectivite', 'agence_publique'],
  },
];

// Types d'aide (TYPES_AIDE dans api/referentiel_verif.py)
const FAMILLES_AIDE = [
  { id: 'subvention',     label: 'Subventions',      description: 'Une part du coût de vos études ou de vos travaux prise en charge.', types: ['subvention'] },
  { id: 'pret',           label: 'Prêts bonifiés',   description: 'Des prêts à taux réduit pour financer vos investissements.',        types: ['pret'] },
  { id: 'credit_impot',   label: "Crédits d'impôt",  description: 'Une partie de vos dépenses déduite de votre impôt.',                types: ['credit_impot'] },
  { id: 'accompagnement', label: 'Accompagnements',  description: 'Du temps de conseil ou un appui technique, souvent gratuit.',       types: ['accompagnement'] },
];

function grouper(fiches, familles) {
  const groupes = familles.map(f => ({ ...f, fiches: fiches.filter(x => f.types.includes(x.type)) }));
  const connus = new Set(familles.flatMap(f => f.types));
  const autres = fiches.filter(x => !connus.has(x.type));
  if (autres.length) groupes.push({ id: 'autres', label: 'Autres acteurs', fiches: autres });
  return groupes.filter(g => g.fiches.length > 0);
}

// Fiche liée explicitement à au moins une mesure du plan
const estLiee = f => f.couverture.some(c => c.via === 'lien');

// Meilleur rang de priorité parmi les mesures liées (Infinity si aucune)
const meilleurRang = f => Math.min(...f.couverture.filter(c => c.via === 'lien' && c.rang).map(c => c.rang), Infinity);

// Les fiches appariées au plan, réparties entre familles (liens explicites)
// et « même domaine » (rapprochement par catégorie). Chaque mesure couverte
// porte son rang de priorité, et les fiches qui couvrent une priorité passent
// en tête de leur famille (tri stable : l'ordre de pertinence est conservé).
function repartir(fiches, familles, rangs) {
  const annotees = fiches
    .map(f => ({ ...f, couverture: f.couverture.map(c => ({ ...c, rang: rangs[c.mesure.id] })) }))
    .sort((a, b) => meilleurRang(a) - meilleurRang(b) || 0);
  return {
    groupes: grouper(annotees.filter(estLiee), familles),
    domaine: annotees.filter(f => !estLiee(f)),
    total:   annotees.length,
  };
}

function allerA(cible) {
  const el = document.getElementById(cible);
  if (!el) return;
  const doux = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'start' });
}

// ═══════════════════════════════════════════════════════════════════════════
// Composant principal
// ═══════════════════════════════════════════════════════════════════════════

export default function TabAvancer({
  entreprise, referentiel, refLoading, solutions, solutionsLoading, onAllerMaturite, ficheCible,
}) {
  const siret = entreprise?.siret;

  const [actors, setActors]               = useState([]);
  const [actorsLoading, setActorsLoading] = useState(true);

  // Fiches dépliées. Venue du plan d'action, la fiche visée est déjà ouverte.
  const [ouvertes, setOuvertes] = useState(() => new Set(ficheCible ? [ficheCible] : []));

  useEffect(() => {
    const lat = entreprise?.latitude;
    const lon = entreprise?.longitude;
    if (!lat || !lon) { setActorsLoading(false); return; }
    fetchInstitutionalActors(lat, lon)
      .then(setActors)
      .catch(() => setActors([]))
      .finally(() => setActorsLoading(false));
  }, [entreprise?.latitude, entreprise?.longitude]);

  const { scores, answers } = useMemo(() => {
    if (!referentiel) return { scores: null, answers: {} };
    const stored = maturiteStorage.load(siret);
    if (stored?.answers && Object.keys(stored.answers).length > 0) {
      const sc = stored.scores ?? computeScores(referentiel.questions, stored.answers);
      return { scores: sc, answers: cleanAnswers(stored.answers) };
    }
    return { scores: null, answers: {} };
  }, [siret, referentiel]);

  const actionPlan = useMemo(() => {
    if (!scores || !referentiel) return [];
    const maturityLevel = getLevel(scores.maturityRatio, MATURITY_THRESHOLDS).level;
    return buildActionPlan({
      answers,
      constructor: referentiel.action_plan_config,
      measures:    referentiel.actions,
      scores:      { ...scores, maturityLevel },
      questions:   referentiel.questions,
    });
  }, [scores, answers, referentiel]);

  // Catégories actives du plan : repli des retours d'expérience
  const activeCategories = useMemo(
    () => [...new Set(actionPlan.map(a => a.categorie))],
    [actionPlan]
  );

  // Rang des mesures « Par où commencer » : le plan arrive trié par pertinence
  const rangs = useMemo(
    () => Object.fromEntries(actionPlan.slice(0, NB_PRIORITES).map((m, i) => [m.id, i + 1])),
    [actionPlan]
  );

  // Les fiches arrivent déjà filtrées par secteur et territoire (API). Ici on
  // ne garde que celles rattachées à une mesure du plan. Les prestataires
  // transversaux ne sortent que par leurs liens explicites. Les aides
  // transversales gardent le repli tant qu'elles ne sont pas toutes liées.
  const prestataires = useMemo(
    () => repartir(matchSolutions(solutions?.prestataires ?? [], actionPlan, { repliTransversales: false }), FAMILLES_PRESTATAIRE, rangs),
    [solutions, actionPlan, rangs]
  );
  const aides = useMemo(
    () => repartir(matchSolutions(solutions?.aides ?? [], actionPlan), FAMILLES_AIDE, rangs),
    [solutions, actionPlan, rangs]
  );

  const chargement = refLoading || (referentiel && scores && solutionsLoading);
  const avecPlan   = !chargement && referentiel && scores;

  // Venue du plan d'action : descendre jusqu'à la fiche une fois affichée
  const cibleAtteinte = useRef(false);
  useEffect(() => {
    if (!ficheCible || !avecPlan || cibleAtteinte.current) return;
    cibleAtteinte.current = true;
    requestAnimationFrame(() => allerA(`fiche-${ficheCible}`));
  }, [ficheCible, avecPlan]);

  const basculer = id => setOuvertes(prev => {
    const suivant = new Set(prev);
    if (suivant.has(id)) suivant.delete(id); else suivant.add(id);
    return suivant;
  });

  const departement = entreprise?.departement;

  // Numéros des chapitres affichés. Sans plan d'action, le chapitre des aides
  // ne montre que l'agence de l'eau, et disparaît s'il n'y en a pas.
  const avecAides = !chargement && (avecPlan || actorsLoading || actors.length > 0);
  const numeros = {};
  let n = 0;
  if (avecPlan)  numeros.apporteurs = ++n;
  if (avecAides) numeros.aides = ++n;
  numeros.exemples = ++n;

  // Sommaire latéral : les chapitres affichés, et leurs familles comme parties
  const conteneur = useRef(null);
  const parties = (prefixe, { groupes, domaine }, autres) => [
    ...groupes.map(g => ({ id: `${prefixe}-${g.id}`, label: g.label })),
    ...(domaine.length ? [{ id: `${prefixe}-domaine`, label: autres }] : []),
  ];
  const deux = i => String(i).padStart(2, '0');
  const chapitres = useMemo(() => [
    ...(numeros.apporteurs ? [{
      id: 'chapitre-apporteurs', numero: deux(numeros.apporteurs), label: 'Apporteurs de solutions',
      parties: parties('apporteurs', prestataires, 'Même domaine'),
    }] : []),
    ...(numeros.aides ? [{
      id: 'chapitre-aides', numero: deux(numeros.aides), label: 'Aides et accompagnements',
      parties: [
        ...(actors.length ? [{ id: 'aides-agence', label: "Votre agence de l'eau" }] : []),
        ...(avecPlan ? parties('aides', aides, 'Même domaine') : []),
      ],
    }] : []),
    { id: 'chapitre-exemples', numero: deux(numeros.exemples), label: 'Retours d\'expérience', parties: [] },
  ], [numeros.apporteurs, numeros.aides, numeros.exemples, prestataires, aides, actors.length, avecPlan]);

  return (
    <div ref={conteneur} className="relative flex flex-col gap-8">
      {!chargement && <SommaireConstat chapitres={chapitres} conteneur={conteneur} />}

      {chargement ? (
        <Chargement message={refLoading ? 'Chargement du questionnaire…' : 'Chargement des prestataires et des aides…'} />
      ) : !referentiel ? (
        <Invitation
          titre="Pas encore de plan d'action pour votre secteur"
          texte={<>Aucun questionnaire de maturité ne couvre encore le code NAF <span className="font-mono font-semibold text-on-surface">{entreprise?.activiteprincipaleetablissement || '-'}</span>. Les apporteurs de solutions et les aides se choisissent d'après ce plan.</>}
        />
      ) : !scores ? (
        <Invitation
          titre="Vos apporteurs et vos aides se choisissent d'après votre plan d'action"
          texte="Répondez au questionnaire de maturité pour voir les acteurs et les dispositifs qui couvrent les mesures adaptées à votre site."
          action={onAllerMaturite && <BoutonPrincipal onClick={onAllerMaturite}>Évaluer ma maturité</BoutonPrincipal>}
        />
      ) : (
        <ChapitreApporteurs
          numero={numeros.apporteurs}
          fiches={prestataires}
          departement={departement}
          ouvertes={ouvertes}
          onBasculer={basculer}
        />
      )}

      {avecAides && (
        <ChapitreAides
          numero={numeros.aides}
          fiches={avecPlan ? aides : null}
          actors={actors}
          actorsLoading={actorsLoading}
          entreprise={entreprise}
          departement={departement}
          ouvertes={ouvertes}
          onBasculer={basculer}
        />
      )}

      {/* Affiché même sans questionnaire : la proximité sectorielle suffit,
          les catégories du plan d'action ne servent qu'en repli. */}
      <AidesExemples entreprise={entreprise} categories={activeCategories} numero={numeros.exemples} />
    </div>
  );
}

// ─── États d'attente ─────────────────────────────────────────────────────────

function Chargement({ message }) {
  return (
    <div className="flex items-center justify-center gap-3 py-10">
      <span
        className="w-4 h-4 rounded-full border-2 animate-spin"
        style={{ borderColor: '#051b71', borderTopColor: 'transparent' }}
        aria-hidden="true"
      />
      <span className="text-[0.875rem] text-on-surface-var">{message}</span>
    </div>
  );
}

function Invitation({ titre, texte, action }) {
  return (
    <div
      className="bg-surface-lowest rounded-2xl px-6 sm:px-8 py-8 flex flex-col sm:flex-row sm:items-center gap-5"
      style={{ boxShadow: '0 0 40px rgba(0,10,67,0.06)' }}
    >
      <div className="flex-1">
        <p className="text-[1.125rem] font-extrabold text-primary" style={{ letterSpacing: '-0.015em' }}>{titre}</p>
        <p className="text-[0.875rem] text-on-surface-var leading-relaxed mt-1">{texte}</p>
      </div>
      {action}
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

function perimetre(departement) {
  return departement
    ? <>dans le département <strong className="text-on-surface">{departement}</strong> ou à l'échelle nationale</>
    : <>à l'échelle nationale (département de l'établissement inconnu)</>;
}

// ═══════════════════════════════════════════════════════════════════════════
// Chapitre 1 : apporteurs de solutions
// ═══════════════════════════════════════════════════════════════════════════

function ChapitreApporteurs({ numero, fiches: { groupes, domaine, total }, departement, ouvertes, onBasculer }) {
  const n = groupes.reduce((s, g) => s + g.fiches.length, 0);

  return (
    <Chapitre
      id="chapitre-apporteurs"
      numero={numero}
      surtitre="Apporteurs de solutions"
      titre={n > 0
        ? <>{n} acteur{n > 1 ? 's' : ''} pour <Surligne ton="eau">vous accompagner</Surligne></>
        : <>Qui peut <Surligne ton="eau">vous accompagner</Surligne></>}
      accroche={<>Les prestataires qui interviennent sur les mesures de votre plan d'action, {perimetre(departement)}.</>}
    >
      {total === 0 ? (
        <Vide message="Aucun prestataire référencé pour les mesures de votre plan dans votre territoire." />
      ) : (
        <div className="flex flex-col gap-10">
          {groupes.map(g => (
            <Groupe key={g.id} id={`apporteurs-${g.id}`} groupe={g}>
              {g.fiches.map(f => (
                <LignePrestataire key={f.id} fiche={f} ouverte={ouvertes.has(f.id)} onBasculer={() => onBasculer(f.id)} />
              ))}
            </Groupe>
          ))}
          {domaine.length > 0 && (
            <MemeDomaine
              id="apporteurs-domaine"
              texte="Ils ne sont pas rattachés à vos mesures, mais travaillent sur les mêmes thèmes dans votre territoire."
            >
              {domaine.map(f => (
                <LignePrestataire key={f.id} fiche={f} ouverte={ouvertes.has(f.id)} onBasculer={() => onBasculer(f.id)} />
              ))}
            </MemeDomaine>
          )}
        </div>
      )}
    </Chapitre>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Chapitre 2 : aides et accompagnements
// ═══════════════════════════════════════════════════════════════════════════

// `fiches` vaut null sans plan d'action : le chapitre ne montre alors que
// l'agence de l'eau (le parent ne l'affiche pas s'il n'y en a pas).
function ChapitreAides({ numero, fiches, actors, actorsLoading, entreprise, departement, ouvertes, onBasculer }) {
  const { groupes = [], domaine = [], total = 0 } = fiches ?? {};

  return (
    <Chapitre
      id="chapitre-aides"
      numero={numero}
      surtitre="Aides et accompagnements"
      titre={fiches
        ? <>Financer <Surligne ton="eau">votre plan d'action</Surligne></>
        : <>Financer <Surligne ton="eau">vos projets</Surligne></>}
      accroche={fiches
        ? <>Votre agence de l'eau, puis les dispositifs qui couvrent les mesures de votre plan, {perimetre(departement)}.</>
        : "Votre agence de l'eau, premier interlocuteur pour financer un projet lié à l'eau."}
    >
      <div className="flex flex-col gap-10">
        {actorsLoading ? (
          <Chargement message="Recherche de votre agence de l'eau…" />
        ) : actors.length > 0 && (
          <div id="aides-agence" className="flex flex-col gap-3 scroll-mt-20 min-[1440px]:scroll-mt-6">
            {actors.map((a, i) => (
              <BandeauAgence key={i} actor={a} lat={entreprise?.latitude} lon={entreprise?.longitude} />
            ))}
          </div>
        )}

        {fiches && (total === 0 ? (
          <Vide message="Aucune aide référencée pour les mesures de votre plan dans votre territoire." />
        ) : (
          <>
            {groupes.map(g => (
              <Groupe key={g.id} id={`aides-${g.id}`} groupe={g}>
                {g.fiches.map(f => (
                  <LigneAide key={f.id} fiche={f} ouverte={ouvertes.has(f.id)} onBasculer={() => onBasculer(f.id)} />
                ))}
              </Groupe>
            ))}
            {domaine.length > 0 && (
              <MemeDomaine
                id="aides-domaine"
                titre="Autres dispositifs du même domaine"
                texte="Ils ne visent pas vos mesures en particulier, mais financent des projets sur les mêmes thèmes."
              >
                {domaine.map(f => (
                  <LigneAide key={f.id} fiche={f} ouverte={ouvertes.has(f.id)} onBasculer={() => onBasculer(f.id)} />
                ))}
              </MemeDomaine>
            )}
          </>
        ))}
      </div>
    </Chapitre>
  );
}

// ─── Agence de l'eau ─────────────────────────────────────────────────────────

function BandeauAgence({ actor, lat, lon }) {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col sm:flex-row" style={{ border: '1px solid #e0e2eb' }}>
      <div className="flex-1 min-w-0 px-5 py-5 flex flex-col gap-3" style={{ background: CIEL.fond }}>
        <div className="flex items-center gap-3">
          {actor.logo ? (
            <span className="shrink-0 flex items-center justify-center rounded-lg bg-white p-1.5" style={{ width: 72, height: 40 }}>
              <img src={actor.logo} alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
            </span>
          ) : (
            <Logo nom={actor.nom} size={40} />
          )}
          <div className="min-w-0">
            <p className="text-[0.75rem] font-semibold" style={{ color: CIEL.texte }}>Votre agence de l'eau</p>
            <p className="text-[1.0625rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.01em' }}>{actor.nom}</p>
          </div>
        </div>
        <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">
          Principal financeur public des projets liés à l'eau dans votre bassin. Contactez-la tôt pour vérifier
          que votre projet est éligible et connaître les taux d'aide en vigueur.
        </p>
        {actor.site_internet && (
          <a
            href={actor.site_internet}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-[0.75rem] font-semibold text-primary transition-colors hover:bg-surface-high"
            style={{ border: '1px solid #e0e2eb' }}
          >
            Visiter le site
            <IconeLienExterne />
          </a>
        )}
      </div>
      {actor.geojson && (
        <div className="shrink-0 flex items-center justify-center bg-white px-4 py-4 sm:w-[200px]" style={{ borderLeft: '1px solid #e0e2eb' }}>
          <div style={{ width: 160, height: 120 }}>
            <ContourBassin geojson={actor.geojson} lat={lat} lon={lon} />
          </div>
        </div>
      )}
    </div>
  );
}

// Contour du bassin de l'agence, projeté dans un cadre fixe, avec le point de
// l'établissement.
const W = 220, H = 160, PAD = 10;

function projeter(geojson) {
  if (!geojson || geojson.type !== 'MultiPolygon') return null;

  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
  geojson.coordinates.flat(2).forEach(([lon, lat]) => {
    if (lon < minLon) minLon = lon;
    if (lon > maxLon) maxLon = lon;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  });

  const rangeX = maxLon - minLon || 1;
  const rangeY = maxLat - minLat || 1;
  const scale  = Math.min((W - 2 * PAD) / rangeX, (H - 2 * PAD) / rangeY);
  const ox     = PAD + ((W - 2 * PAD) - rangeX * scale) / 2;
  const oy     = PAD + ((H - 2 * PAD) - rangeY * scale) / 2;

  const point = ([lon, lat]) => [ox + (lon - minLon) * scale, oy + (maxLat - lat) * scale];

  const chemins = geojson.coordinates.map(polygone =>
    polygone.map(anneau =>
      anneau.map((c, i) => {
        const [x, y] = point(c);
        return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
      }).join(' ') + ' Z'
    ).join(' ')
  );

  return { chemins, point };
}

function ContourBassin({ geojson, lat, lon }) {
  const projection = useMemo(() => projeter(geojson), [geojson]);
  const degrade = useId();
  if (!projection) return null;

  const { chemins, point } = projection;
  const site = lat && lon ? point([lon, lat]) : null;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: 'block', overflow: 'visible' }} aria-hidden="true">
      <defs>
        <linearGradient id={degrade} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#051b71" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#051b71" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      {chemins.map((d, i) => (
        <path key={i} d={d} fill={`url(#${degrade})`} stroke="rgba(5,27,113,0.5)" strokeWidth="1.2" strokeLinejoin="round" />
      ))}
      {site && (
        <g>
          <circle cx={site[0]} cy={site[1]} r="7" fill="rgba(0,151,214,0.25)" />
          <circle cx={site[0]} cy={site[1]} r="3.5" fill="#051b71" stroke="#ffffff" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Groupes et lignes
// ═══════════════════════════════════════════════════════════════════════════

function Groupe({ id, groupe, children }) {
  return (
    <section id={id} className="flex flex-col gap-3 scroll-mt-20 min-[1440px]:scroll-mt-6" aria-labelledby={`${id}-titre`}>
      <div className="flex items-center gap-2">
        <h3 id={`${id}-titre`} className="text-[1.125rem] sm:text-[1.25rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.015em' }}>
          {groupe.label}
        </h3>
        {groupe.description && <InfoSurvol texte={groupe.description} alignement="gauche" />}
      </div>
      <ul className="flex flex-col gap-2">{children}</ul>
    </section>
  );
}

// Sous-groupe discret : fiches rapprochées par catégorie, sans lien explicite
// avec une mesure du plan.
function MemeDomaine({ id, titre = 'Autres acteurs du même domaine', texte, children }) {
  return (
    <section id={id} className="flex flex-col gap-3 pt-8 scroll-mt-20 min-[1440px]:scroll-mt-6" style={{ borderTop: '1px solid #e0e2eb' }}>
      <div>
        <h3 className="text-[1rem] font-bold text-on-surface leading-snug">{titre}</h3>
        <p className="text-[0.8125rem] text-on-surface-var mt-1">{texte}</p>
      </div>
      <ul className="flex flex-col gap-2">{children}</ul>
    </section>
  );
}

// Ligne compacte dépliable, même comportement que les mesures du plan
// d'action : fond blanc cerclé de bleu nuit une fois ouverte.
function LigneFiche({ fiche, ouverte, onBasculer, logo, sousTitre, children }) {
  const panneau = `fiche-detail-${fiche.id}`;
  const nbMesures = fiche.couverture.filter(c => c.via === 'lien').length;

  return (
    <li
      id={`fiche-${fiche.id}`}
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
        <Logo url={fiche.logo_url} nom={logo} size={32} />
        <span className="flex-1 min-w-0 flex flex-col">
          <span className={`text-[0.875rem] font-semibold leading-snug ${ouverte ? 'text-primary' : 'text-on-surface'}`}>{fiche.nom}</span>
          <span className="text-[0.75rem] text-on-surface-var leading-snug">{sousTitre}</span>
        </span>
        {nbMesures > 0 && (
          <span
            className="hidden sm:inline-flex items-center text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap tabular-nums"
            style={{ background: CIEL.fond, color: CIEL.texte }}
          >
            {nbMesures} mesure{nbMesures > 1 ? 's' : ''} du plan
          </span>
        )}
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
          <div className="px-4 pb-4 pt-4 flex flex-col gap-4">{children}</div>
        </div>
      </div>
    </li>
  );
}

function LignePrestataire({ fiche: f, ouverte, onBasculer }) {
  return (
    <LigneFiche
      fiche={f}
      ouverte={ouverte}
      onBasculer={onBasculer}
      logo={f.nom}
      sousTitre={[TYPE_PRESTATAIRE[f.type] ?? f.type, estLocale(f) ? 'Dans votre département' : 'National'].join(', ')}
    >
      <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">{f.description}</p>

      {f.expertises?.length > 0 && (
        <ul className="flex flex-wrap gap-1.5">
          {f.expertises.map(e => (
            <li key={e} className="text-[0.75rem] text-on-surface-var rounded-full bg-surface-low px-2.5 py-1">{e}</li>
          ))}
        </ul>
      )}

      <AideSur couverture={f.couverture} titre="Il peut vous aider sur" />
      <Contacts contacts={f.contacts} />
    </LigneFiche>
  );
}

function LigneAide({ fiche: f, ouverte, onBasculer }) {
  const territoire = [
    TYPE_AIDE[f.type] ?? f.type,
    f.financeur,
    estLocale(f) ? 'Dans votre département' : null,
  ].filter(Boolean).join(', ');

  return (
    <LigneFiche fiche={f} ouverte={ouverte} onBasculer={onBasculer} logo={f.financeur} sousTitre={territoire}>
      {(f.taux || f.plafond) && (
        <div className={`grid grid-cols-1 gap-2 ${f.taux && f.plafond ? 'sm:grid-cols-2' : ''}`}>
          {f.taux    && <Tuile label="Taux ou montant">{f.taux}</Tuile>}
          {f.plafond && <Tuile label="Plafond">{f.plafond}</Tuile>}
        </div>
      )}

      <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">{f.description}</p>

      {f.eligibilite && <Tuile label="Qui peut en bénéficier">{f.eligibilite}</Tuile>}

      <AideSur couverture={f.couverture} titre="Elle peut vous aider sur" />
      <InfosComplementaires infos={f.infos_complementaires} />
    </LigneFiche>
  );
}

function Tuile({ label, children }) {
  return (
    <div className="bg-surface-low rounded-lg px-3.5 py-2.5 flex flex-col gap-1">
      <span className="text-[0.6875rem] font-semibold text-on-surface-var">{label}</span>
      <span className="text-[0.8125rem] text-on-surface leading-relaxed">{children}</span>
    </div>
  );
}

// Les mesures du plan couvertes par la fiche, avec ce qu'elle y apporte.
// Sans lien explicite, les mesures du même domaine sont citées à part.
function AideSur({ couverture, titre }) {
  const liens   = couverture.filter(c => c.via === 'lien');
  const domaine = couverture.filter(c => c.via !== 'lien');

  return (
    <div className="flex flex-col gap-2">
      {liens.length > 0 && (
        <>
          <p className="text-[0.8125rem] font-semibold text-on-surface">{titre}</p>
          <ul className="flex flex-col gap-1.5">
            {liens.map(({ mesure, roles }) => (
              <li key={mesure.id} className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg px-3 py-2" style={{ background: CIEL.fond }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: CIEL.plein }} aria-hidden="true" />
                <span className="flex-1 min-w-0 text-[0.8125rem] font-medium text-primary leading-snug">{mesure.titre}</span>
                {roleLabels(roles).map(r => (
                  <span key={r} className="text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full bg-white whitespace-nowrap" style={{ color: CIEL.texte }}>
                    {r}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </>
      )}
      {domaine.length > 0 && (
        <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
          Même domaine que {domaine.length > 1 ? 'vos mesures' : 'votre mesure'} : {domaine.map(c => c.mesure.titre_court ?? c.mesure.titre).join(', ')}.
        </p>
      )}
    </div>
  );
}

function IconeLienExterne() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M4 1.5H2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V6M5.5 1.5H8.5v3M8.5 1.5 4 6"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
