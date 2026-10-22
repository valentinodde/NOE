// Offre 3 : les débits des cours d'eau. Chiffres clés à la sortie du bassin,
// puis la carte des points de calcul (exutoire, entrée, affluents) : chaque
// point est numéroté, coloré et étiqueté selon la baisse de son débit
// d'étiage. Le point choisi ouvre une fiche posée sur la carte, reliée à lui
// par un trait, avec son débit mois par mois. Un encadré en bas de la carte
// donne sa période de basses eaux, aujourd'hui et en 2050. Sur mobile,
// l'encadré et la fiche passent sous la carte.

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  Area, CartesianGrid, ComposedChart, Line, ReferenceArea, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { HORIZON_LABELS, MOIS_COURTS, MOIS_LONGS, fmtDebit, fmtPart, fmtSigne, pct } from '../../utils/constatMessages';
import { ecartDensifie, joursSousSeuil, periodes } from '../../utils/courbes';
import CarteIGN from './CarteIGN';
import { InfoSurvol, InfobulleGraphique, Legende, Message, Surligne } from './ConstatUI';
import { BoutonFermer } from './Onglets';
import { AXE } from './outils';

const COULEUR_2025 = '#0097d6';
const COULEUR_2050 = '#051b71';
const DEFICIT = 'rgba(239,68,68,0.25)';
const SURPLUS = 'rgba(34,197,94,0.32)';
const ORANGE = '#dc6409';

export const AIDE_ETIAGE = (
  "L'étiage est la période où une rivière est au plus bas, en général à la fin de l'été. Le débit d'étiage "
  + "retenu ici est le QMNA : le débit moyen du mois le plus sec de l'année. C'est lui qui fixe l'eau "
  + 'disponible pour les usages et les milieux quand les besoins sont les plus forts. Débits naturels simulés, '
  + "sans barrages, soutien d'étiage ni prélèvements."
);

const AIDE_SEVERE = (
  "Nombre de jours par an où la rivière descend sous un seuil bas, celui que son débit minimal sur 10 jours "
  + "n'atteint qu'une année sur cinq entre 1995 et 2024. Ces épisodes déclenchent souvent les arrêtés sécheresse."
);

// Couleur d'un point selon la baisse du débit d'étiage d'ici 2050. Teintes
// foncées pour garder le numéro blanc lisible.
const PALIERS = [
  { max: -15, couleur: '#b54708', label: 'Forte baisse (15 % ou plus)' },
  { max: -5, couleur: '#dc6409', label: 'Baisse modérée (5 à 15 %)' },
  { max: Infinity, couleur: '#0b6e9e', label: 'Évolution faible' },
];
function couleurEvolution(evolution) {
  if (evolution == null) return '#94a3b8';
  return PALIERS.find((p) => evolution <= p.max).couleur;
}

// Distance d'un point à un segment, en pixels
function distanceSegment(p, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1)));
  return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
}

function useLarge() {
  const requete = '(min-width: 640px)';
  const [large, setLarge] = useState(() => window.matchMedia(requete).matches);
  useEffect(() => {
    const mq = window.matchMedia(requete);
    const changer = () => setLarge(mq.matches);
    mq.addEventListener('change', changer);
    return () => mq.removeEventListener('change', changer);
  }, []);
  return large;
}

// ─── Partie complète ─────────────────────────────────────────────────────────

// `repliable`, `icone` : la partie en volet, comme les autres parties de l'offre
export default function DebitsCarte({ debits, bassin, entreprise, repliable, icone }) {
  const exutoire = debits.points.find((p) => p.type === 'exutoire');
  return (
    <Message
      id="offre-debits"
      numero="3"
      titre={debits.titre}
      texte={debits.chapeau}
      alerte={debits.alerte}
      messageCle={debits.messageCle}
      repliable={repliable}
      icone={icone}
      chiffre={debits.evolution != null && {
        valeur: fmtSigne(debits.evolution), legende: "de débit d'étiage d'ici 2050", defavorable: debits.evolution < 0,
      }}
      pleineLargeur={debits.points.length > 0 && (
        <CarteDebits points={debits.points} bassin={bassin} entreprise={entreprise} />
      )}
    >
      <ChiffresCles evolution={debits.evolution} exutoire={exutoire} />
    </Message>
  );
}

function ChiffresCles({ evolution, exutoire }) {
  const j = exutoire?.joursEtiage;
  const f = exutoire?.fourchette;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {evolution != null && (
        <div className="bg-surface-low rounded-xl px-4 py-4 flex flex-col gap-1.5">
          <p className="text-[0.75rem] text-on-surface-var flex items-center gap-1.5">
            Débit d'étiage {exutoire ? 'à la sortie du bassin' : 'du bassin'}
            <InfoSurvol texte={AIDE_ETIAGE} large alignement="gauche" />
          </p>
          <p className="leading-none">
            <span className="text-[1.75rem] font-black tabular-nums" style={{ color: evolution < 0 ? '#964900' : '#000a43' }}>
              {fmtSigne(evolution)}
            </span>
            <span className="text-[0.8125rem] text-on-surface-var ml-1.5">d'ici 2050</span>
          </p>
          {f && f[0] !== f[1] && (
            <p className="text-[0.6875rem] text-on-surface-var tabular-nums">Selon les modèles, de {fmtSigne(f[0])} à {fmtSigne(f[1])}</p>
          )}
        </div>
      )}
      {j?.actuel != null && j?.['2050'] != null && (
        <div className="bg-surface-low rounded-xl px-4 py-4 flex flex-col gap-1.5">
          <p className="text-[0.75rem] text-on-surface-var flex items-center gap-1.5">
            Jours d'étiage sévère par an
            <InfoSurvol texte={AIDE_SEVERE} large alignement="gauche" />
          </p>
          <p className="leading-none tabular-nums">
            <span className="text-[1.75rem] font-black text-primary">{j.actuel}</span>
            <span className="text-[1rem] text-on-surface-var mx-1.5">→</span>
            <span className="text-[1.75rem] font-black" style={{ color: j['2050'] > j.actuel ? '#964900' : '#000a43' }}>{j['2050']}</span>
            <span className="text-[0.8125rem] text-on-surface-var ml-1.5">jours</span>
          </p>
          <p className="text-[0.6875rem] text-on-surface-var">Aujourd'hui puis en 2050, à la sortie du bassin</p>
        </div>
      )}
    </div>
  );
}

// ─── Carte, encadré des basses eaux et fiche du point choisi ────────────────

const MARGE = 16;
const LARGEUR_FICHE = 340;
// La carte grandit si la fiche et l'encadré des basses eaux ne tiennent pas
const HAUTEUR_CARTE = 600;
// Hauteur estimée de l'encadré, pour le cadrage et le placement des étiquettes
// (la hauteur réelle, mesurée, sert à dimensionner la carte)
const HAUTEUR_ENCADRE = 132;

function CarteDebits({ points, bassin, entreprise }) {
  const large = useLarge();
  const [actif, setActif] = useState(points[0]?.id ?? null);
  const [survol, setSurvol] = useState(null);
  const [vue, setVue] = useState(null);
  const fiche = useRef(null);
  const [hauteurFiche, setHauteurFiche] = useState(0);
  const encadreRef = useRef(null);
  const [hauteurEncadre, setHauteurEncadre] = useState(HAUTEUR_ENCADRE);

  const lat = entreprise?.latitude;
  const lon = entreprise?.longitude;
  const marqueurs = useMemo(() => [
    ...(lat && lon ? [{ type: 'etablissement', lon, lat, label: 'Votre établissement' }] : []),
    ...points
      .filter((p) => p.lat != null && p.lon != null)
      .map((p) => ({
        type: 'point',
        id: p.id,
        numero: p.numero,
        lon: p.lon,
        lat: p.lat,
        couleur: couleurEvolution(p.evolution),
        label: p.evolution != null ? fmtSigne(p.evolution) : null,
        description: `${p.nom}${p.evolution != null ? `, débit d'étiage ${fmtSigne(p.evolution)} d'ici 2050` : ''}`,
      })),
  ], [points, lat, lon]);

  const point = points.find((p) => p.id === actif) ?? null;

  // Sur grand écran, le bassin tient dans la partie libre : à gauche de la
  // fiche, au-dessus de l'encadré, à droite du zoom
  const marges = useMemo(
    () => (large
      ? { top: 32, bottom: HAUTEUR_ENCADRE + 2 * MARGE + 16, left: 64, right: LARGEUR_FICHE + 3 * MARGE }
      : 24),
    [large],
  );
  // Zones couvertes par les panneaux, que les étiquettes évitent
  const zonesReservees = useMemo(
    () => (large
      ? (l, h) => [
        [l - MARGE - LARGEUR_FICHE, 0, l, h],
        [0, h - MARGE - HAUTEUR_ENCADRE, l, h],
        [0, 0, 52, 90],
      ]
      : undefined),
    [large],
  );

  // Hauteur de la fiche, pour accrocher le trait et agrandir la carte
  useLayoutEffect(() => {
    if (!fiche.current) return undefined;
    const observateur = new ResizeObserver(([e]) => setHauteurFiche(e.contentRect.height));
    observateur.observe(fiche.current);
    return () => observateur.disconnect();
  }, [point, large]);

  useLayoutEffect(() => {
    if (!encadreRef.current) return undefined;
    const observateur = new ResizeObserver(([e]) => setHauteurEncadre(e.contentRect.height));
    observateur.observe(encadreRef.current);
    return () => observateur.disconnect();
  }, [point, large]);

  // Trait du point au bord de la fiche, sous les marqueurs. Son arrivée sur
  // la fiche glisse si le trait droit passerait sur un autre marqueur.
  let trait = null;
  if (large && point && vue && point.lat != null) {
    const { x, y } = vue.projeter(point.lon, point.lat);
    const bord = vue.largeur - MARGE - LARGEUR_FICHE;
    const haut = MARGE + 24;
    const bas = MARGE + Math.max(hauteurFiche - 24, 24);
    const borne = (v) => Math.min(Math.max(v, haut), bas);
    const obstacles = [
      ...(lat && lon ? [vue.projeter(lon, lat)] : []),
      ...points.filter((q) => q.id !== point.id && q.lat != null).map((q) => vue.projeter(q.lon, q.lat)),
    ];
    const libre = (y2) => obstacles.every((o) => distanceSegment(o, { x, y }, { x: bord, y: y2 }) >= 20);
    const candidats = [0, 40, -40, 80, -80, 140, -140, 220].map((d) => borne(y + d));
    const y2 = candidats.find(libre) ?? candidats[0];
    const visible = x >= 0 && x < bord && y >= 0 && y <= vue.hauteur;
    if (visible) trait = { x1: x, y1: y, x2: bord, y2 };
  }

  const contenuFiche = point && (
    <FichePoint point={point} couleur={couleurEvolution(point.evolution)} onFermer={() => setActif(null)} />
  );
  const encadre = point?.mensuel && point.debitMoyen != null && <BassesEaux point={point} />;

  return (
    <div className="flex flex-col gap-3">
      {/* Points sous forme d'onglets : même sélection que sur la carte */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Points de calcul des débits">
        {points.map((p) => {
          const choisi = p.id === actif;
          return (
            <button
              key={p.id}
              type="button"
              aria-pressed={choisi}
              onClick={() => setActif(choisi ? null : p.id)}
              onMouseEnter={() => setSurvol(p.id)}
              onMouseLeave={() => setSurvol(null)}
              onFocus={() => setSurvol(p.id)}
              onBlur={() => setSurvol(null)}
              className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1 text-[0.8125rem] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-primary-container"
              style={{ background: choisi ? '#000a43' : '#f1f3fc', color: choisi ? '#ffffff' : '#181c22' }}
            >
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[0.6875rem] font-extrabold text-white shrink-0"
                style={{ background: couleurEvolution(p.evolution), boxShadow: choisi ? '0 0 0 2px #ffffff' : 'none' }}
              >
                {p.numero}
              </span>
              {p.nom}
            </button>
          );
        })}
      </div>

      <div
        className="relative rounded-xl overflow-hidden"
        style={large ? { height: Math.max(HAUTEUR_CARTE, hauteurFiche + (encadre ? hauteurEncadre + MARGE : 0) + 2 * MARGE) } : undefined}
      >
        <CarteIGN
          bassin={bassin}
          marqueurs={marqueurs}
          controles
          positionControles="top-left"
          marges={marges}
          zonesReservees={zonesReservees}
          className={large ? 'h-full' : 'h-[320px]'}
          actif={survol ?? actif}
          onClicPoint={(id) => setActif((a) => (a === id ? null : id))}
          onSurvolPoint={setSurvol}
          onProjection={setVue}
          superposition={trait && (
            <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
              <line {...trait} stroke="#000a43" strokeWidth="1.5" strokeDasharray="4 3" />
              <circle cx={trait.x2} cy={trait.y2} r="3" fill="#000a43" />
            </svg>
          )}
        />

        {large && point && (
          <div
            ref={fiche}
            className="absolute z-10 bg-white/95 backdrop-blur rounded-xl"
            style={{ top: MARGE, right: MARGE, width: LARGEUR_FICHE, boxShadow: '0 4px 24px rgba(0,10,67,0.16)' }}
          >
            {contenuFiche}
          </div>
        )}

        {large && encadre && (
          <div
            ref={encadreRef}
            className="absolute z-10 bg-white/95 backdrop-blur rounded-xl"
            style={{ left: MARGE, right: MARGE, bottom: MARGE, boxShadow: '0 4px 24px rgba(0,10,67,0.12)' }}
          >
            {encadre}
          </div>
        )}

        {large && !point && (
          <p className="absolute z-10 top-4 right-4 bg-white/95 rounded-lg px-3 py-2 text-[0.75rem] text-on-surface-var" style={{ boxShadow: '0 2px 8px rgba(0,10,67,0.1)' }}>
            Cliquez sur un point pour voir le détail de ses débits.
          </p>
        )}
      </div>

      {!large && encadre && <div className="bg-surface-low rounded-xl">{encadre}</div>}
      {!large && point && <div ref={fiche} className="bg-surface-low rounded-xl">{contenuFiche}</div>}

      <Legende elements={PALIERS.map((p) => ({ label: p.label, couleur: p.couleur, zone: true }))} />
    </div>
  );
}

// ─── Fiche d'un point ────────────────────────────────────────────────────────

function FichePoint({ point: p, couleur, onFermer }) {
  // Mises en garde, regroupées derrière le triangle à côté du nom
  const avertissements = [
    p.influence && 'Le débit réel est modifié par des barrages ou des prélèvements : les valeurs affichées sont des débits naturels simulés.',
    p.partEtranger >= 0.5 && "Le débit de ce point vient surtout de l'étranger (débits observés à la frontière).",
    p.partEtranger > 0 && p.partEtranger < 0.5 && `${fmtPart(p.partEtranger)} du débit vient de l'étranger.`,
  ].filter(Boolean);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center gap-3">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-[0.75rem] font-extrabold text-white shrink-0"
          style={{ background: couleur }}
        >
          {p.numero}
        </span>
        <h4 className="flex-1 min-w-0 flex items-center gap-2 text-[1.0625rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.01em' }}>
          <span className="min-w-0">{p.nom}</span>
          {avertissements.length > 0 && (
            <InfoSurvol texte={avertissements.join(' ')} avertissement large alignement="gauche" />
          )}
        </h4>
        <BoutonFermer onClick={onFermer} />
      </div>

      {p.mensuel ? <CourbeMensuelle point={p} /> : <BarresEtiage point={p} />}
    </div>
  );
}

// ─── Débit mois par mois, avec la baisse au mois le plus bas ────────────────

// Graduation de l'axe : précision adaptée aux petits ruisseaux
function fmtAxe(v) {
  const decimales = v < 0.1 ? 3 : v < 1 ? 2 : v < 10 ? 1 : 0;
  return v.toLocaleString('fr-FR', { maximumFractionDigits: decimales });
}

// Été et début d'automne (juin à octobre), surlignés sur le graphique
const PERIODE_ETE = { debut: 5, fin: 9 };
const SEUIL_ETIAGE = 5;         // en %, en deçà le débit d'étiage « évolue peu »

// Conclusion du graphique : l'évolution du débit d'étiage, même chiffre que sur la carte
function conclusionDebit(p) {
  const e = p.evolution;
  if (e == null) return null;
  if (e <= -SEUIL_ETIAGE) {
    return { ton: 'alerte', texte: <>En 2050, le cours d'eau sera <Surligne ton="alerte">plus bas en été et en automne</Surligne>, avec {fmtSigne(e)} sur son débit d'étiage.</> };
  }
  if (e >= SEUIL_ETIAGE) {
    return { ton: 'eau', texte: <>En 2050, le débit d'étiage du cours d'eau serait <Surligne ton="eau">un peu plus soutenu</Surligne>, avec {fmtSigne(e)}.</> };
  }
  return { ton: 'eau', texte: <>En 2050, le débit d'étiage du cours d'eau <Surligne ton="eau">évoluerait peu</Surligne> ({fmtSigne(e)}).</> };
}

// Phrase de conclusion d'un visuel : en gras, avec un filet de couleur à gauche
function Conclusion({ ton, children }) {
  return (
    <div className="flex gap-2.5 items-stretch">
      <span className="w-[3px] rounded-full shrink-0" style={{ background: ton === 'alerte' ? ORANGE : COULEUR_2050 }} />
      <p className="text-[0.875rem] font-semibold text-primary leading-relaxed">{children}</p>
    </div>
  );
}

function CourbeMensuelle({ point: p }) {
  const serie = p.mensuel;
  const donnees = useMemo(() => ecartDensifie(serie.actuel, serie.futur), [serie]);
  const conclusion = conclusionDebit(p);

  return (
    <div className="flex flex-col gap-2.5">
      <h5 className="text-[0.9375rem] font-bold text-primary leading-snug">Débit au fil de l'année : actuel vs 2050</h5>
      <Legende
        elements={[
          { label: HORIZON_LABELS.actuel, couleur: COULEUR_2025 },
          { label: '2050', couleur: COULEUR_2050 },
          ...(p.seuilSevere != null ? [{ label: "Seuil d'étiage sévère", couleur: ORANGE, tirets: true }] : []),
        ]}
      />
      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={donnees} margin={{ top: 8, right: 6, left: -8, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#e8eaf3" />
          <ReferenceArea
            x1={PERIODE_ETE.debut - 0.5}
            x2={PERIODE_ETE.fin + 0.5}
            fill="rgba(254,133,31,0.10)"
            ifOverflow="hidden"
          />
          <XAxis
            dataKey="x"
            type="number"
            domain={[0, 11]}
            ticks={MOIS_COURTS.map((_, i) => i)}
            tickFormatter={(i) => INITIALES[i]}
            tick={AXE}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <YAxis tick={AXE} axisLine={false} tickLine={false} width={44} tickFormatter={fmtAxe} />
          {/* Seuil des jours d'étiage sévère : un débit journalier, souvent
              franchi quelques jours alors que les moyennes du mois restent au-dessus */}
          {p.seuilSevere != null && (
            <ReferenceLine y={p.seuilSevere} stroke={ORANGE} strokeWidth={1.5} strokeDasharray="5 4" ifOverflow="extendDomain" />
          )}
          <Tooltip
            cursor={{ stroke: '#94a3b8', strokeDasharray: '3 3' }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const i = Math.round(payload[0].payload.x);
              return (
                <InfobulleGraphique
                  titre={MOIS_LONGS[i]}
                  lignes={[
                    { label: HORIZON_LABELS.actuel, couleur: COULEUR_2025, valeur: fmtDebit(serie.actuel[i]) },
                    { label: '2050', couleur: COULEUR_2050, valeur: fmtDebit(serie.futur[i]) },
                    { label: 'Écart', valeur: fmtSigne(pct(serie.futur[i], serie.actuel[i])) },
                  ]}
                />
              );
            }}
          />
          <Area type="linear" dataKey="deficit" stroke="none" fill={DEFICIT} isAnimationActive={false} activeDot={false} />
          <Area type="linear" dataKey="surplus" stroke="none" fill={SURPLUS} isAnimationActive={false} activeDot={false} />
          <Line type="linear" dataKey="a" stroke={COULEUR_2025} strokeWidth={2} dot={false} activeDot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="b" stroke={COULEUR_2050} strokeWidth={2} dot={false} activeDot={false} isAnimationActive={false} />
        </ComposedChart>
      </ResponsiveContainer>
      {conclusion && <Conclusion ton={conclusion.ton}>{conclusion.texte}</Conclusion>}
    </div>
  );
}

// ─── Repli : débit d'étiage par horizon, avec la fourchette des modèles ─────

const BARRES = [
  { h: 'actuel', couleur: COULEUR_2025, cleFourchette: null },
  { h: '2030', couleur: 'rgba(5,27,113,0.55)', cleFourchette: '2030' },
  { h: '2050', couleur: COULEUR_2050, cleFourchette: '2050' },
];

function BarresEtiage({ point: p }) {
  const q = p.qmnaHorizons;
  if (q?.actuel == null) return null;

  // Fourchette des modèles : évolution min et max appliquées au débit actuel
  const f = { '2030': p.fourchette2030 ?? null, '2050': p.fourchette ?? null };
  const barres = BARRES.filter((b) => q[b.h] != null).map((b) => {
    const ff = b.cleFourchette ? f[b.cleFourchette] : null;
    return {
      ...b,
      valeur: q[b.h],
      bas: ff ? q.actuel * (1 + ff[0] / 100) : null,
      haut: ff ? q.actuel * (1 + ff[1] / 100) : null,
    };
  });
  const max = Math.max(...barres.map((b) => Math.max(b.valeur, b.haut ?? 0))) * 1.08;
  const H = 72;
  const y = (v) => H - (v / max) * H;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-end justify-around gap-2" role="img" aria-label={barres.map((b) => `${HORIZON_LABELS[b.h]} : ${fmtDebit(b.valeur)}`).join(', ')}>
        {barres.map((b) => (
          <div key={b.h} className="flex flex-col items-center gap-1 w-16">
            <span className="text-[0.6875rem] font-bold text-primary tabular-nums whitespace-nowrap">{fmtDebit(b.valeur)}</span>
            <svg width="40" height={H} aria-hidden="true" className="overflow-visible">
              <rect x="6" y={y(b.valeur)} width="28" height={H - y(b.valeur)} rx="4" fill={b.couleur} />
              {b.bas != null && b.haut != null && Math.abs(b.haut - b.bas) > 0 && (
                <g stroke="#dc6409" strokeWidth="1.5">
                  <line x1="20" x2="20" y1={y(b.haut)} y2={y(b.bas)} />
                  <line x1="15" x2="25" y1={y(b.haut)} y2={y(b.haut)} />
                  <line x1="15" x2="25" y1={y(b.bas)} y2={y(b.bas)} />
                </g>
              )}
            </svg>
            <span className="text-[0.6875rem] text-on-surface-var tabular-nums">{HORIZON_LABELS[b.h]}</span>
          </div>
        ))}
      </div>
      <p className="text-[0.6875rem] text-on-surface-var leading-relaxed">
        En trait orange, l'écart entre les cinq modèles climatiques.
      </p>
    </div>
  );
}

// ─── Période de basses eaux, aujourd'hui et en 2050 ─────────────────────────

// Basses eaux : la période où le débit passe sous le débit moyen annuel
// actuel (définition classique), au jour près sur la courbe interpolée. Le
// seuil reste celui d'aujourd'hui en 2050, pour comparer les durées.
const INITIALES = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const SEUIL_BASSES_EAUX = 7;    // en jours
const COULEUR_BASSES_EAUX = '#0097d6';

// Segments à dessiner pour une suite de jours, coupée en deux si elle passe le 31 décembre
function segments({ debut, duree }) {
  const fin = debut + duree;
  return fin <= 365 ? [[debut, duree]] : [[debut, 365 - debut], [0, fin - 365]];
}

function BassesEaux({ point: p }) {
  const aujourdhui = joursSousSeuil(p.mensuel.actuel, p.debitMoyen);
  const demain = joursSousSeuil(p.mensuel.futur, p.debitMoyen);
  const lignes = [
    { h: 'actuel', jours: aujourdhui },
    { h: '2050', jours: demain },
  ].map((l) => ({ ...l, total: l.jours.filter(Boolean).length, suites: periodes(l.jours) }));
  const ecart = lignes[1].total - lignes[0].total;
  // Écart net à partir d'une semaine, sinon durée à peu près inchangée
  const conclusion = ecart >= SEUIL_BASSES_EAUX
    ? { ton: 'alerte', texte: <>En 2050, le cours d'eau restera <Surligne ton="alerte">bas plus longtemps</Surligne>, avec {ecart} jours de plus sous son débit moyen.</> }
    : ecart <= -SEUIL_BASSES_EAUX
      ? { ton: 'eau', texte: <>En 2050, le cours d'eau resterait <Surligne ton="eau">bas moins longtemps</Surligne>, avec {-ecart} jours de moins sous son débit moyen.</> }
      : { ton: 'eau', texte: <>En 2050, la période de basses eaux durerait <Surligne ton="eau">à peu près autant</Surligne> qu'aujourd'hui.</> };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-x-8 gap-y-4 items-center px-5 py-4">
      <div className="flex flex-col gap-2 min-w-0">
        <p className="text-[0.875rem] font-bold text-primary flex items-center gap-1.5">
          Période de basses eaux
          <span className="font-normal text-on-surface-var">· {p.nom}</span>
          <InfoSurvol
            texte={`Nombre de jours par an où le débit passe sous son débit moyen annuel actuel (${fmtDebit(p.debitMoyen)}), estimé à partir des débits mensuels.`}
            large
            alignement="gauche"
          />
        </p>
        {lignes.map((l) => (
          <div key={l.h} className="flex items-center gap-3">
            <span className="text-[0.6875rem] text-on-surface-var w-8 shrink-0 tabular-nums">{HORIZON_LABELS[l.h]}</span>
            <div className="relative flex-1 h-3 rounded-full bg-surface-high overflow-hidden" aria-hidden="true">
              {l.suites.flatMap(segments).map(([d, n]) => (
                <span key={d} className="absolute inset-y-0" style={{ left: `${(d / 365) * 100}%`, width: `${(n / 365) * 100}%`, background: COULEUR_BASSES_EAUX }} />
              ))}
            </div>
            <span className="text-[0.8125rem] font-bold text-primary tabular-nums w-[5.5rem] text-right shrink-0 whitespace-nowrap">
              {l.total} j
              {l.h === '2050' && ecart !== 0 && (
                <span className="ml-1.5 text-[0.75rem]" style={{ color: ecart > 0 ? '#964900' : '#051b71' }}>{fmtSigne(ecart, 'j')}</span>
              )}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-3" aria-hidden="true">
          <span className="w-8 shrink-0" />
          <div className="flex-1 grid grid-cols-12 text-[0.5625rem] text-on-surface-var text-center">
            {INITIALES.map((m, i) => <span key={i}>{m}</span>)}
          </div>
          <span className="w-[5.5rem] shrink-0" />
        </div>
      </div>
      <Conclusion ton={conclusion.ton}>{conclusion.texte}</Conclusion>
    </div>
  );
}

