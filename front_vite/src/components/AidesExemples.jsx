import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { fetchAidesExemples, fetchContoursAgences } from '../utils/api';
import { Chapitre, Surligne, Vide } from './constat/ConstatUI';

// Retours d'expérience : aides réellement accordées par les agences de l'eau à
// des bénéficiaires comparables. Une phrase repère, puis la carte des bassins
// à côté de la liste des exemples, et le nuage des montants. Survoler un
// exemple le fait ressortir dans les trois vues.

// ─── Couleurs ────────────────────────────────────────────────────────────────

// Deux natures de dossier, deux teintes de la charte (palette validée : écart
// suffisant y compris pour les daltoniens). Le bleu nuit reste réservé à
// l'établissement et à son bassin.
const NATURES = {
  etude:   { label: 'Études et accompagnement', couleur: '#0097d6' },
  travaux: { label: 'Travaux et équipements',   couleur: '#dc6409' },
};
const NUIT = '#051b71';
const CIEL = { fond: 'rgba(0,151,214,0.10)', texte: '#00628c' };

const NB_EXEMPLES = 20;

const AGENCE_LABELS = {
  AEAP:  'Artois-Picardie',
  AERM:  'Rhin-Meuse',
  AESN:  'Seine-Normandie',
  AELB:  'Loire-Bretagne',
  AEAG:  'Adour-Garonne',
  AERMC: 'Rhône-Méditerranée-Corse',
};

const formatEuros = (v) =>
  v == null ? null : new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(v);

function lieu(ex) {
  const dept = [ex.dept_nom, ex.dept_num ? `(${ex.dept_num})` : null].filter(Boolean).join(' ');
  return [ex.commune, dept].filter(Boolean).join(', ');
}

// ─── Composant principal ─────────────────────────────────────────────────────

/**
 * `categories` : catégories actives du plan d'action, optionnelles (repli du
 * backend quand le secteur ne suffit pas).
 */
export default function AidesExemples({ entreprise, categories = [], numero }) {
  const naf   = entreprise?.activiteprincipaleetablissement;
  const lat   = entreprise?.latitude;
  const lon   = entreprise?.longitude;
  const dept  = entreprise?.departement;
  // Le SIREN écarte des exemples les aides obtenues par l'entreprise elle-même
  const siren = entreprise?.siren;

  const [data,     setData]     = useState(null);
  const [contours, setContours] = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);
  // Exemple survolé, et la vue d'où vient le survol (la liste ne défile que
  // si le survol vient d'ailleurs)
  const [survol, setSurvol] = useState(null);

  const categoriesKey = categories.join(',');

  useEffect(() => {
    if (!naf) { setLoading(false); return; }

    let annule = false;
    setLoading(true);
    setError(null);

    fetchAidesExemples({ naf, lat, lon, dept, siren, categories, limit: NB_EXEMPLES })
      .then((res) => { if (!annule) setData(res); })
      .catch((err) => { if (!annule) setError(err); })
      .finally(() => { if (!annule) setLoading(false); });

    return () => { annule = true; };
    // categoriesKey remplace le tableau pour éviter une requête à chaque rendu.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [naf, lat, lon, dept, siren, categoriesKey]);

  // Sans contours, la carte est simplement omise
  useEffect(() => {
    let annule = false;
    fetchContoursAgences().then(c => { if (!annule) setContours(c); }).catch(() => {});
    return () => { annule = true; };
  }, []);

  const exemples = data?.exemples ?? [];
  const agence = data?.agence;

  const stats = data?.stats?.secteur_agence?.nb_beneficiaires >= 3
    ? { ...data.stats.secteur_agence, perimetre: 'votre activité' }
    : data?.stats?.division_agence?.nb_beneficiaires >= 3
      ? { ...data.stats.division_agence, perimetre: 'votre secteur' }
      : null;

  const survoler = (id, source) => setSurvol(id == null ? null : { id, source });

  return (
    <Chapitre
      id="chapitre-exemples"
      numero={numero}
      surtitre="Retours d'expérience"
      titre={<>Ils l'ont <Surligne ton="alerte">déjà fait</Surligne></>}
      accroche="Des aides réellement accordées par les agences de l'eau entre 2019 et 2024 à des entreprises proches de la vôtre, par leur activité ou par le type de projet."
    >
      {loading ? (
        <Chargement message="Recherche d'aides accordées à des entreprises comparables…" />
      ) : error ? (
        <Vide message={`Exemples indisponibles pour le moment (${error.message}).`} />
      ) : !naf ? (
        <Vide message="Code d'activité de l'établissement inconnu. Impossible de chercher des exemples comparables." />
      ) : exemples.length === 0 ? (
        <Vide message="Aucune aide comparable dans les données publiées par les agences de l'eau (2019-2024)." />
      ) : (
        <div className="flex flex-col gap-8" data-cadre-infobulles>
          {stats && <PhraseRepere stats={stats} agence={agence} />}

          <div className="flex flex-col gap-3">
            <Legende agence={agence} avecCarte={!!contours} />
            <div className={`grid grid-cols-1 gap-5 ${contours ? 'md:grid-cols-12' : ''}`}>
              {contours && (
                <div className="md:col-span-5">
                  <CarteBassins
                    contours={contours}
                    exemples={exemples}
                    agence={agence?.code}
                    site={lat && lon ? [lon, lat] : null}
                    survol={survol?.id}
                    onSurvol={id => survoler(id, 'carte')}
                  />
                </div>
              )}
              <div className={contours ? 'md:col-span-7 relative' : ''}>
                <ListeExemples
                  calee={!!contours}
                  exemples={exemples}
                  agence={agence?.code}
                  survol={survol}
                  onSurvol={id => survoler(id, 'liste')}
                />
              </div>
            </div>
          </div>

          <NuageMontants exemples={exemples} survol={survol?.id} onSurvol={id => survoler(id, 'nuage')} />

          <Footnote agence={agence} />
        </div>
      )}
    </Chapitre>
  );
}

// ─── Phrase repère ───────────────────────────────────────────────────────────

function PhraseRepere({ stats, agence }) {
  const n = stats.nb_beneficiaires;
  return (
    <p
      className="rounded-xl px-5 py-4 text-[1rem] sm:text-[1.0625rem] font-semibold text-primary leading-relaxed"
      style={{ background: CIEL.fond }}
    >
      Entre {stats.annee_min} et {stats.annee_max}, {AGENCE_LABELS[agence?.code] ? `l'agence de l'eau ${AGENCE_LABELS[agence.code]}` : "votre agence de l'eau"} a
      aidé <strong className="font-extrabold">{n.toLocaleString('fr-FR')} entreprise{n > 1 ? 's' : ''}</strong> de {stats.perimetre},
      pour une aide médiane de <strong className="font-extrabold tabular-nums">{formatEuros(stats.mediane_aide)}</strong>.
    </p>
  );
}

// ─── Légende ─────────────────────────────────────────────────────────────────

function Legende({ agence, avecCarte }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.75rem] text-on-surface-var">
      {Object.entries(NATURES).map(([cle, n]) => (
        <li key={cle} className="inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: n.couleur }} aria-hidden="true" />
          {n.label}
        </li>
      ))}
      {avecCarte && (
        <>
          <li className="inline-flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-white" style={{ border: `3px solid ${NUIT}` }} aria-hidden="true" />
            Votre site
          </li>
          {agence && (
            <li className="inline-flex items-center gap-1.5">
              <span className="w-3.5 h-2.5 rounded-sm" style={{ background: 'rgba(5,27,113,0.14)', border: `1px solid ${NUIT}` }} aria-hidden="true" />
              Votre bassin ({AGENCE_LABELS[agence.code] ?? agence.nom})
            </li>
          )}
        </>
      )}
    </ul>
  );
}

// ─── Carte des bassins ───────────────────────────────────────────────────────

// Projection équirectangulaire corrigée de la latitude moyenne de la France
// métropolitaine : suffisante à cette échelle, et sans dépendance.
const COS_LAT = Math.cos((46.5 * Math.PI) / 180);
const LARGEUR = 400;
const MARGE = 8;

function useProjection(contours) {
  return useMemo(() => {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    contours.forEach(c => {
      const polygones = c.geojson.type === 'Polygon' ? [c.geojson.coordinates] : c.geojson.coordinates;
      polygones.flat(2).forEach(([lo, la]) => {
        const x = lo * COS_LAT, y = -la;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      });
    });
    const echelle = (LARGEUR - 2 * MARGE) / (maxX - minX);
    const hauteur = Math.round((maxY - minY) * echelle + 2 * MARGE);
    const point = ([lo, la]) => [MARGE + (lo * COS_LAT - minX) * echelle, MARGE + (-la - minY) * echelle];

    const chemins = contours.map(c => {
      const polygones = c.geojson.type === 'Polygon' ? [c.geojson.coordinates] : c.geojson.coordinates;
      const d = polygones.map(poly => poly.map(anneau =>
        anneau.map((p, i) => {
          const [x, y] = point(p);
          return `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
        }).join('') + 'Z'
      ).join('')).join('');
      return { code: c.code, nom: c.nom, d };
    });

    return { chemins, point, hauteur };
  }, [contours]);
}

function CarteBassins({ contours, exemples, agence, site, survol, onSurvol }) {
  const { chemins, point, hauteur } = useProjection(contours);

  // Plusieurs aides dans la même commune : on les écarte un peu en cercle
  // autour du centre pour qu'elles restent toutes survolables.
  const points = useMemo(() => {
    const parCommune = new Map();
    exemples.filter(e => e.latitude != null && e.longitude != null).forEach(e => {
      const cle = `${e.latitude.toFixed(3)},${e.longitude.toFixed(3)}`;
      if (!parCommune.has(cle)) parCommune.set(cle, []);
      parCommune.get(cle).push(e);
    });
    return [...parCommune.values()].flatMap(groupe => groupe.map((e, i) => {
      const [x, y] = point([e.longitude, e.latitude]);
      if (groupe.length === 1) return { e, x, y };
      const angle = (2 * Math.PI * i) / groupe.length;
      return { e, x: x + 7 * Math.cos(angle), y: y + 7 * Math.sin(angle) };
    }));
  }, [exemples, point]);

  const actif = points.find(p => p.e.id === survol);
  const pointSite = site ? point(site) : null;

  return (
    <div className="relative rounded-xl bg-surface-low p-3" onMouseLeave={() => onSurvol(null)}>
      <svg viewBox={`0 0 ${LARGEUR} ${hauteur}`} className="block w-full h-auto" role="img" aria-label="Carte des bassins des agences de l'eau et des aides citées en exemple">
        {chemins.map(c => (
          <path
            key={c.code}
            d={c.d}
            fill={c.code === agence ? 'rgba(5,27,113,0.14)' : '#e3e6ef'}
            stroke={c.code === agence ? NUIT : '#ffffff'}
            strokeWidth={c.code === agence ? 1.4 : 1.6}
            strokeLinejoin="round"
          >
            <title>{c.nom}</title>
          </path>
        ))}

        {pointSite && (
          <circle cx={pointSite[0]} cy={pointSite[1]} r="7.5" fill="#ffffff" stroke={NUIT} strokeWidth="3.5">
            <title>Votre site</title>
          </circle>
        )}

        {points.map(({ e, x, y }) => {
          const enAvant = survol === e.id;
          return (
            <g key={e.id} opacity={survol != null && !enAvant ? 0.35 : 1}>
              <circle cx={x} cy={y} r={enAvant ? 7 : 5} fill={NATURES[e.nature]?.couleur ?? NATURES.travaux.couleur} stroke="#ffffff" strokeWidth="2" />
              {/* Zone de survol plus large que le point */}
              <circle
                cx={x} cy={y} r="11" fill="transparent"
                onMouseEnter={() => onSurvol(e.id)}
                style={{ cursor: 'pointer' }}
              />
            </g>
          );
        })}

        {/* Le point survolé repasse au premier plan */}
        {actif && (
          <circle
            cx={actif.x} cy={actif.y} r="7"
            fill={NATURES[actif.e.nature]?.couleur ?? NATURES.travaux.couleur}
            stroke="#ffffff" strokeWidth="2" pointerEvents="none"
          />
        )}
      </svg>

      {actif && (
        <Infobulle
          exemple={actif.e}
          style={{
            // Le SVG occupe le cadre moins son padding de 12 px de chaque côté
            left: `calc(12px + (100% - 24px) * ${(actif.x / LARGEUR).toFixed(4)})`,
            top:  `calc(12px + (100% - 24px) * ${(actif.y / hauteur).toFixed(4)})`,
          }}
          gauche={actif.x > LARGEUR / 2}
        />
      )}
    </div>
  );
}

// Infobulle commune à la carte et au nuage : bénéficiaire, lieu, montant
// L'infobulle est recalée horizontalement pour ne jamais sortir du contenu
// du chapitre (dont le cadre arrondi coupe ce qui dépasse).
function Infobulle({ exemple: e, style, gauche, dessus }) {
  const bulle = useRef(null);
  useLayoutEffect(() => {
    const el = bulle.current;
    const cadre = el?.closest('[data-cadre-infobulles]');
    if (!el || !cadre) return;
    el.style.marginLeft = '0px';
    const b = el.getBoundingClientRect();
    const c = cadre.getBoundingClientRect();
    const decalage = b.left < c.left ? c.left - b.left : b.right > c.right ? c.right - b.right : 0;
    el.style.marginLeft = `${decalage}px`;
  }, [e.id, style.left, style.top, gauche]);

  return (
    <div
      ref={bulle}
      className="pointer-events-none absolute z-20 w-max max-w-[240px] rounded-[10px] bg-white px-3 py-2 text-[0.75rem] leading-snug"
      style={{
        ...style,
        border: '1px solid #e0e2eb',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        transform: `translate(${gauche ? 'calc(-100% - 12px)' : '12px'}, ${dessus ? 'calc(-100% - 10px)' : '-50%'})`,
      }}
      role="tooltip"
    >
      <p className="font-semibold text-primary">{e.beneficiaire}</p>
      <p className="text-on-surface-var">{[lieu(e), e.annee].filter(Boolean).join(', ')}</p>
      <p className="mt-1 font-bold text-on-surface tabular-nums">{formatEuros(e.montant_aide)}</p>
    </div>
  );
}

// ─── Liste des exemples ──────────────────────────────────────────────────────

// `calee` : à côté de la carte, la liste prend exactement sa hauteur et défile
function ListeExemples({ exemples, agence, survol, onSurvol, calee }) {
  const zone = useRef(null);
  const bassin  = exemples.filter(e => e.agence === agence);
  const ailleurs = exemples.filter(e => e.agence !== agence);

  // Survol venu de la carte ou du nuage : amener la ligne dans la zone
  // visible de la liste, sans faire défiler la page.
  useEffect(() => {
    if (!survol || survol.source === 'liste' || !zone.current) return;
    const ligne = zone.current.querySelector(`[data-exemple="${survol.id}"]`);
    if (!ligne) return;
    const z = zone.current;
    // La zone est positionnée : offsetTop des lignes s'y rapporte directement
    const haut = ligne.offsetTop;
    if (haut < z.scrollTop || haut + ligne.offsetHeight > z.scrollTop + z.clientHeight) {
      z.scrollTo({ top: haut - z.clientHeight / 2 + ligne.offsetHeight / 2, behavior: 'smooth' });
    }
  }, [survol]);

  return (
    <div
      ref={zone}
      className={`relative max-h-[420px] overflow-y-auto rounded-xl pr-1 ${calee ? 'md:absolute md:inset-0 md:max-h-none' : 'md:max-h-[520px]'}`}
      onMouseLeave={() => onSurvol(null)}
    >
      <div className="flex flex-col gap-5">
        {bassin.length > 0 && (
          <BlocListe titre={agence ? `Dans votre bassin (${AGENCE_LABELS[agence] ?? agence})` : 'Dans votre bassin'} exemples={bassin} survol={survol?.id} onSurvol={onSurvol} />
        )}
        {ailleurs.length > 0 && (
          <BlocListe
            titre="Ailleurs en France"
            note="Chaque agence a ses propres règles d'aide. Ces montants ne se comparent pas aux vôtres."
            exemples={ailleurs}
            survol={survol?.id}
            onSurvol={onSurvol}
          />
        )}
      </div>
    </div>
  );
}

function BlocListe({ titre, note, exemples, survol, onSurvol }) {
  return (
    <section className="flex flex-col gap-2">
      <div className="sticky top-0 z-10 bg-white pb-1">
        <h3 className="text-[0.9375rem] font-bold text-primary leading-snug">
          {titre} <span className="font-normal text-on-surface-var tabular-nums">· {exemples.length}</span>
        </h3>
        {note && <p className="text-[0.75rem] text-on-surface-var mt-0.5">{note}</p>}
      </div>
      <ul className="flex flex-col gap-1.5">
        {exemples.map(e => (
          <LigneExemple key={e.id} exemple={e} actif={survol === e.id} onSurvol={onSurvol} />
        ))}
      </ul>
    </section>
  );
}

function LigneExemple({ exemple: e, actif, onSurvol }) {
  const nature = NATURES[e.nature] ?? NATURES.travaux;
  return (
    <li
      data-exemple={e.id}
      tabIndex={0}
      onMouseEnter={() => onSurvol(e.id)}
      onFocus={() => onSurvol(e.id)}
      onBlur={() => onSurvol(null)}
      className={`rounded-lg px-3.5 py-2.5 flex gap-3 transition-colors outline-none focus-visible:outline-2 focus-visible:outline-primary-container ${actif ? 'bg-white' : 'bg-surface-low'}`}
      style={actif ? { boxShadow: `inset 0 0 0 2px ${NUIT}` } : undefined}
    >
      <span className="mt-1.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ background: nature.couleur }} title={nature.label} />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <p className={`text-[0.8125rem] font-semibold leading-snug ${e.anonymise ? 'italic text-on-surface-var' : 'text-on-surface'}`}>
            {e.beneficiaire}
          </p>
          <span className="shrink-0 text-[0.875rem] font-bold text-primary tabular-nums">{formatEuros(e.montant_aide)}</span>
        </div>
        <p className="text-[0.8125rem] text-on-surface-var leading-snug mt-0.5">{e.objet}</p>
        <p className="text-[0.6875rem] text-on-surface-var/80 mt-1">
          {[e.naf_label, lieu(e), e.annee].filter(Boolean).join(' · ')}
        </p>
      </div>
    </li>
  );
}

// ─── Nuage des montants ──────────────────────────────────────────────────────

// Échelle logarithmique : de 1 000 € à des millions, une échelle linéaire
// écraserait tous les petits dossiers contre l'axe.
function NuageMontants({ exemples, survol, onSurvol }) {
  // Largeur de l'axe, pour empiler les points qui se toucheraient
  const axe = useRef(null);
  const [largeur, setLargeur] = useState(600);
  useEffect(() => {
    if (!axe.current) return undefined;
    const obs = new ResizeObserver(([entree]) => setLargeur(entree.contentRect.width || 600));
    obs.observe(axe.current);
    return () => obs.disconnect();
  }, []);

  const montants = exemples.map(e => e.montant_aide).filter(v => v > 0);
  if (montants.length === 0) return null;

  const bas  = Math.floor(Math.log10(Math.min(...montants)));
  const haut = Math.ceil(Math.log10(Math.max(...montants)));
  const etendue = Math.max(1, haut - bas);
  const position = v => ((Math.log10(v) - bas) / etendue) * 100;
  const graduations = Array.from({ length: etendue + 1 }, (_, i) => 10 ** (bas + i));

  return (
    <section className="flex flex-col gap-3" aria-labelledby="nuage-montants">
      <div>
        <h3 id="nuage-montants" className="text-[1.125rem] sm:text-[1.25rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.015em' }}>
          Les montants accordés
        </h3>
        <p className="text-[0.8125rem] text-on-surface-var mt-1">
          Chaque point est une aide. Les points s'empilent quand plusieurs aides ont un montant proche.
          Chaque graduation multiplie le montant par dix.
        </p>
      </div>

      <div className="rounded-xl bg-surface-low px-4 sm:px-5 pt-4 pb-3" onMouseLeave={() => onSurvol(null)}>
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-4">
          {Object.entries(NATURES).map(([cle, n]) => (
            <RangeeNuage
              key={cle}
              label={n.label}
              couleur={n.couleur}
              exemples={exemples.filter(e => (e.nature ?? 'travaux') === cle && e.montant_aide > 0)}
              position={position}
              ecart={(12 / largeur) * 100}
              survol={survol}
              onSurvol={onSurvol}
            />
          ))}
          <span className="hidden sm:block" />
          <div ref={axe} className="relative h-5 mt-1 mx-2 sm:mx-0" style={{ borderTop: '1px solid #d4d7e2' }}>
            {graduations.map(g => (
              <span
                key={g}
                className="absolute top-1 -translate-x-1/2 text-[0.6875rem] text-on-surface-var tabular-nums whitespace-nowrap"
                style={{ left: `${position(g)}%` }}
              >
                {g >= 1e6 ? `${g / 1e6} M€` : g >= 1e3 ? `${g / 1e3} k€` : `${g} €`}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Une rangée par nature, en points empilés : une aide dont le montant tombe
// trop près de la précédente (moins de `ecart` %, la largeur d'un point) se
// pose au-dessus d'elle. La hauteur d'une pile indique donc combien d'aides
// ont un montant voisin, rien d'autre.
const PAS = 13;  // écart vertical entre deux points d'une pile (px)
const SOL = 9;   // hauteur du premier point au-dessus de la ligne de base (px)

function RangeeNuage({ label, couleur, exemples, position, ecart, survol, onSurvol }) {
  const piles = [];
  const places = [...exemples]
    .sort((a, b) => a.montant_aide - b.montant_aide)
    .map(e => {
      const x = position(e.montant_aide);
      const pile = piles[piles.length - 1];
      if (pile && x - pile.x < ecart) {
        pile.n += 1;
        return { e, x: pile.x, niveau: pile.n - 1 };
      }
      piles.push({ x, n: 1 });
      return { e, x, niveau: 0 };
    });
  const hauteur = Math.max(36, SOL + (Math.max(0, ...places.map(p => p.niveau)) + 1) * PAS + 6);
  const bas = niveau => SOL + niveau * PAS;

  const actif = places.find(p => p.e.id === survol);

  return (
    <>
      <span className="sm:self-end sm:pb-1 text-[0.75rem] font-semibold text-on-surface-var sm:max-w-[9rem] leading-snug">{label}</span>
      <div className="relative mx-2 sm:mx-0" style={{ height: hauteur }}>
        <span className="absolute inset-x-0 bottom-0 h-px" style={{ background: '#e0e2eb' }} aria-hidden="true" />
        {places.map(({ e, x, niveau }) => {
          const enAvant = survol === e.id;
          return (
            <button
              key={e.id}
              type="button"
              aria-label={`${e.beneficiaire}, ${formatEuros(e.montant_aide)}`}
              onMouseEnter={() => onSurvol(e.id)}
              onFocus={() => onSurvol(e.id)}
              onBlur={() => onSurvol(null)}
              className="absolute -translate-x-1/2 translate-y-1/2 w-[13px] h-[13px] flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-primary-container"
              style={{ left: `${x}%`, bottom: bas(niveau), opacity: survol != null && !enAvant ? 0.35 : 1, zIndex: enAvant ? 2 : 1 }}
            >
              <span
                className="block shrink-0 rounded-full transition-[width,height] duration-150"
                style={{ width: enAvant ? 14 : 10, height: enAvant ? 14 : 10, background: couleur, boxShadow: '0 0 0 2px #ffffff' }}
              />
            </button>
          );
        })}
        {actif && (
          <Infobulle
            exemple={actif.e}
            style={{ left: `${actif.x}%`, top: hauteur - bas(actif.niveau) }}
            gauche={actif.x > 60}
            dessus
          />
        )}
      </div>
    </>
  );
}

// ─── Pied de chapitre ────────────────────────────────────────────────────────

function Footnote({ agence }) {
  return (
    <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
      Source : données ouvertes des six agences de l'eau, aides engagées entre 2019 et 2024.
      Chaque agence a ses propres programmes et ses propres règles de publication. Les montants
      ne se comparent donc qu'au sein d'une même agence{agence?.nom ? ` (la vôtre : ${agence.nom})` : ''}.
      Le secteur des bénéficiaires est rapproché du répertoire Sirene. Les points sont placés au
      centre de la commune du bénéficiaire. Les exploitants et entrepreneurs en nom propre sont
      anonymisés. La nature du dossier (étude ou travaux) est déduite de son intitulé.
    </p>
  );
}

function Chargement({ message }) {
  return (
    <div className="flex items-center gap-2.5 text-[0.875rem] text-on-surface-var">
      <span
        className="w-4 h-4 rounded-full border-2 animate-spin shrink-0"
        style={{ borderColor: '#051b71', borderTopColor: 'transparent' }}
        aria-hidden="true"
      />
      {message}
    </div>
  );
}
