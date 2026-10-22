// Chapitre 3 : le croisement entre offre et demande. Indicateur de stress
// hydrique du bassin, le même calcul mois par mois, puis la conséquence
// concrète : les arrêtés de restriction sécheresse.

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceArea, ResponsiveContainer,
} from 'recharts';
import { getRankColors } from '../../utils/riskHelpers';
import {
  HORIZON_LABELS, MOIS_COURTS, analyseMensuelle, analyseStress, fmtPart,
} from '../../utils/constatMessages';
import { Chapitre, InfoSurvol, Legende, Surligne, Vide } from './ConstatUI';
import { AXE } from './outils';
import RestrictionsResume from './RestrictionsResume';

// Offre et demande ; aujourd'hui en trait plein, 2050 en pointillés
const COULEUR_OFFRE = '#0097d6';
const COULEUR_DEMANDE = '#f97316';
// Une seule échelle quand le maximum de la consommation atteint cette part du
// maximum de l'offre sur l'année : sinon sa courbe serait écrasée contre zéro
const SEUIL_ECHELLE_UNIQUE = 0.15;

export default function StressSection({ territoire: t, entreprise }) {
  const mensuel = analyseMensuelle(t);
  const stress = analyseStress(t);

  return (
    <Chapitre
      id="chapitre-stress"
      numero="3"
      surtitre="Le croisement offre et demande"
      titre={<>Le <Surligne ton="alerte">stress hydrique</Surligne> : quand les besoins rattrapent la ressource</>}
      accroche="Le stress hydrique compare l'eau consommée à l'eau disponible, dans les rivières en août et dans les nappes sur l'année. Il se joue surtout en été, quand la ressource est au plus bas et les besoins au plus haut."
    >
      <div id="stress-indicateur" className="scroll-mt-20 min-[1440px]:scroll-mt-6">
        {stress ? <IndicateurStress stress={stress} /> : <Vide message="Stress hydrique non calculé pour ce bassin." />}
      </div>

      <div id="stress-annee" className="flex flex-col gap-4 pt-7 border-t border-surface-high scroll-mt-20 min-[1440px]:scroll-mt-6">
        {mensuel ? (
          <>
            <div>
              <h3 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>{mensuel.titre}</h3>
              <p className="text-[0.8125rem] text-on-surface-var mt-1">{mensuel.sousTitre}</p>
            </div>
            <GraphiqueMensuel mensuel={mensuel} />
          </>
        ) : (
          <>
            <h3 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>Le stress hydrique mois par mois</h3>
            <Vide message="Détail mensuel indisponible pour ce bassin." />
          </>
        )}
      </div>

      <div id="stress-restrictions" className="flex flex-col gap-3 pt-7 border-t border-surface-high scroll-mt-20 min-[1440px]:scroll-mt-6">
        <h3 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>
          La conséquence concrète : les arrêtés sécheresse
        </h3>
        {/* Définition et niveaux, délimités par un trait comme l'accroche du chapitre */}
        <RestrictionsResume
          entreprise={entreprise}
          definition={(
            <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">
              Dans chaque département, des seuils sont fixés à l'avance sur le débit des rivières et le niveau des
              nappes. Quand l'un d'eux est franchi, le préfet prend un arrêté sécheresse qui limite les usages de
              l'eau, sur une zone et pour une durée données. Il existe quatre niveaux.
            </p>
          )}
        />
      </div>
    </Chapitre>
  );
}

// ─── Indicateur de stress hydrique : classe, rivières et nappes ─────────────

const AIDE_STRESS = (
  "Deux mesures, la plus sévère donne le niveau du bassin. Rivières : l'eau consommée en août dans le bassin et en amont, "
  + "rapportée au débit naturel d'août à la sortie du bassin (amont compris), moins le débit à laisser à la rivière. "
  + "Nappes : les prélèvements souterrains de l'année, rapportés à ce que la pluie y infiltre."
);

function IndicateurStress({ stress }) {
  if (!stress) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <p className="text-[0.875rem] font-semibold text-on-surface">Stress hydrique du bassin</p>
        <InfoSurvol texte={AIDE_STRESS} large alignement="gauche" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {stress.horizons.map((s) => <CarteStress key={s.h} s={s} nbClasses={stress.nbClasses} />)}
      </div>
    </div>
  );
}

// Une carte par horizon : niveau et jauge. Le détail des deux mesures
// (rivières, nappes) s'affiche au survol ou au focus de la carte.
function CarteStress({ s, nbClasses }) {
  const { bar, text } = getRankColors(s.rang, nbClasses);
  const { rang } = s;
  const idDetail = `stress-detail-${s.h}`;

  return (
    <div
      tabIndex={0}
      aria-describedby={idDetail}
      className="group relative bg-surface-low rounded-xl px-4 py-4 flex flex-col gap-3 cursor-default transition-colors hover:bg-surface-high focus-visible:outline-2 focus-visible:outline-primary-container"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1.5">
          <p className="text-[0.75rem] font-semibold text-on-surface-var">
            {s.h === 'actuel' ? "Aujourd'hui" : HORIZON_LABELS[s.h]}
          </p>
          <p className="text-[1.25rem] font-extrabold leading-none" style={{ color: text }}>
            {s.libelle ?? '-'}
          </p>
        </div>
        {/* Signale le détail au survol */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-on-surface-var opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true">
          <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8 7.2v3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="8" cy="5.1" r="0.8" fill="currentColor" />
        </svg>
      </div>

      {/* Position sur l'échelle des cinq niveaux, de très faible à critique */}
      <div
        className="flex gap-1"
        role="img"
        aria-label={rang >= 0 ? `Niveau ${rang + 1} sur ${nbClasses}` : 'Niveau non calculé'}
      >
        {Array.from({ length: nbClasses }, (_, i) => (
          <span key={i} className="flex-1 h-1.5 rounded-full" style={{ background: i <= rang ? bar : '#e0e2eb' }} />
        ))}
      </div>

      <div
        id={idDetail}
        role="tooltip"
        className="pointer-events-none absolute left-0 right-0 top-full mt-2 z-20 rounded-xl bg-white px-3.5 py-3 flex flex-col gap-2.5 opacity-0 invisible translate-y-1 transition-[opacity,transform] duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:visible group-focus-visible:translate-y-0 motion-reduce:transition-none"
        style={{ border: '1px solid #e0e2eb', boxShadow: '0 8px 24px rgba(0,10,67,0.12)' }}
      >
        <p className="text-[0.75rem] text-on-surface-var leading-snug">
          Part de l'eau disponible déjà prélevée. Le niveau retient la plus forte des deux.
        </p>
        <div className="flex flex-wrap gap-1.5">
          <EtiquetteStress label="Rivières en août" valeur={s.rivieres} retenue={s.source === 'rivieres'} />
          <EtiquetteStress label="Nappes" valeur={s.nappes} retenue={s.source === 'nappes'} />
        </div>
      </div>
    </div>
  );
}

// Une mesure du stress. Celle qui fixe le niveau du bassin est mise en avant.
function EtiquetteStress({ label, valeur, retenue }) {
  return (
    <span
      className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.75rem] whitespace-nowrap"
      style={retenue ? { background: '#000a43', color: '#ffffff' } : { background: '#f1f3fc', color: '#44474f' }}
    >
      {label}
      <strong className="font-bold tabular-nums">{valeur == null ? 'non calculé' : fmtPart(valeur)}</strong>
    </span>
  );
}

// ─── Stress hydrique mois par mois : offre et demande ────────────────────────

const STYLE_AXE_GAUCHE = { ...AXE, fill: '#006c9a' };
const STYLE_AXE_DROITE = { ...AXE, fill: '#c2410c' };

// Graduations : jusqu'à deux décimales pour les petites échelles (0,25)
function fmtGraduation(v) {
  return v.toLocaleString('fr-FR', { maximumFractionDigits: v < 1 ? 2 : 1 });
}

// Mois où les deux horizons d'une paire de courbes s'écartent le plus (en
// relatif), parmi les mois où la courbe n'est pas collée à zéro
function moisEtiquette(donnees, cleA, cleF, exclu) {
  const max = Math.max(...donnees.map((d) => Math.max(d[cleA] ?? 0, d[cleF] ?? 0)));
  let meilleur = null;
  let ecartMax = -1;
  donnees.forEach((d, i) => {
    const a = d[cleA] ?? 0;
    const f = d[cleF] ?? 0;
    const haut = Math.max(a, f);
    // Pas aux extrémités (étiquette coupée) ni sur une courbe proche de zéro
    if (i === 0 || i === 11 || i === exclu || haut < 0.15 * max) return;
    const ecart = Math.abs(a - f) / haut;
    if (ecart > ecartMax) { ecartMax = ecart; meilleur = i; }
  });
  return meilleur ?? 6;
}

// Étiquette posée sur un point de la courbe, au-dessus ou en dessous, avec un
// liseré blanc pour rester lisible quand elle passe sur une autre courbe
function etiquetteCourbe(mois, texte, couleur, dessus) {
  return function Etiquette({ x, y, index }) {
    if (index !== mois || x == null || y == null) return null;
    return (
      <text
        x={x}
        y={dessus ? y - 8 : y + 15}
        textAnchor="middle"
        fontSize={10.5}
        fontWeight={700}
        fontFamily="Inter, sans-serif"
        fill={couleur}
        stroke="#ffffff"
        strokeWidth={3}
        paintOrder="stroke"
      >
        {texte}
      </text>
    );
  };
}

function GraphiqueMensuel({ mensuel }) {
  const { serie, picActuel } = mensuel;
  // Offre négative (débit sous le débit réservé) ramenée à zéro
  const donnees = serie.map((d, i) => ({
    ...d,
    x: i,
    offreA: d.dispoActuel != null ? Math.max(0, d.dispoActuel) : null,
    offreF: d.dispoFutur != null ? Math.max(0, d.dispoFutur) : null,
  }));
  const offreMax = Math.max(...donnees.flatMap((d) => [d.offreA ?? 0, d.offreF ?? 0]));
  const consoMax = Math.max(...serie.flatMap((d) => [d.consoActuel ?? 0, d.consoFutur ?? 0]));
  const deuxEchelles = offreMax > 0 && consoMax < SEUIL_ECHELLE_UNIQUE * offreMax;
  const axeDemande = deuxEchelles ? 'demande' : 'offre';

  // Mois où poser « Actuel » et « 2050 » sur chaque paire de courbes, sans
  // tomber sur le même mois pour l'offre et la demande
  const moisConso = moisEtiquette(donnees, 'consoActuel', 'consoFutur');
  const moisOffre = moisEtiquette(donnees, 'offreA', 'offreF', moisConso);
  const etiquettes = (cleA, cleF, mois, couleur) => {
    const d = donnees[mois];
    const actuelDessus = (d[cleA] ?? 0) >= (d[cleF] ?? 0);
    return {
      [cleA]: etiquetteCourbe(mois, 'Actuel', couleur, actuelDessus),
      [cleF]: etiquetteCourbe(mois, '2050', couleur, !actuelDessus),
    };
  };
  const labels = {
    ...etiquettes('offreA', 'offreF', moisOffre, '#006c9a'),
    ...etiquettes('consoActuel', 'consoFutur', moisConso, '#c2410c'),
  };

  return (
    <div className="flex flex-col gap-3">
      <Legende
        elements={[
          { label: 'Eau disponible (rivières, amont compris)', couleur: COULEUR_OFFRE },
          { label: 'Eau consommée (bassin et amont)', couleur: COULEUR_DEMANDE },
        ]}
      />

      {/* Titre de chaque échelle, dans la couleur de sa courbe */}
      <div className="flex justify-between text-[0.6875rem] font-semibold -mb-2">
        <span style={{ color: deuxEchelles ? '#006c9a' : '#44474f' }}>
          {deuxEchelles ? 'Eau disponible, Mm³ par mois' : 'Mm³ par mois'}
        </span>
        {deuxEchelles && <span style={{ color: '#c2410c' }}>Eau consommée, Mm³ par mois</span>}
      </div>

      <ResponsiveContainer width="100%" height={270}>
        <LineChart data={donnees} margin={{ top: 22, right: 4, left: 4, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#e8eaf3" />
          <ReferenceArea yAxisId="offre" x1={picActuel.i - 0.5} x2={picActuel.i + 0.5} fill="rgba(254,133,31,0.10)" ifOverflow="hidden" />
          <XAxis
            dataKey="x"
            type="number"
            domain={[-0.5, 11.5]}
            ticks={MOIS_COURTS.map((_, i) => i)}
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={({ x, y, payload }) => (
              <text
                x={x} y={y + 12} textAnchor="middle"
                fontSize={11} fontFamily="Inter, sans-serif"
                fill={payload.value === picActuel.i ? '#000a43' : '#44474f'}
                fontWeight={payload.value === picActuel.i ? 700 : 400}
              >
                {MOIS_COURTS[payload.value]}
              </text>
            )}
          />
          <YAxis
            yAxisId="offre"
            tick={deuxEchelles ? STYLE_AXE_GAUCHE : AXE}
            axisLine={false}
            tickLine={false}
            width={52}
            tickFormatter={fmtGraduation}
          />
          {deuxEchelles && (
            <YAxis
              yAxisId="demande"
              orientation="right"
              tick={STYLE_AXE_DROITE}
              axisLine={false}
              tickLine={false}
              width={44}
              tickFormatter={fmtGraduation}
            />
          )}
          <Line yAxisId="offre" type="monotone" dataKey="offreA" label={labels.offreA} stroke={COULEUR_OFFRE} strokeWidth={2.25} dot={false} isAnimationActive={false} />
          <Line yAxisId="offre" type="monotone" dataKey="offreF" label={labels.offreF} stroke={COULEUR_OFFRE} strokeWidth={2} strokeDasharray="5 4" dot={false} isAnimationActive={false} />
          <Line yAxisId={axeDemande} type="monotone" dataKey="consoActuel" label={labels.consoActuel} stroke={COULEUR_DEMANDE} strokeWidth={2.25} dot={false} isAnimationActive={false} />
          <Line yAxisId={axeDemande} type="monotone" dataKey="consoFutur" label={labels.consoFutur} stroke={COULEUR_DEMANDE} strokeWidth={2} strokeDasharray="5 4" dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>

      {deuxEchelles && (
        <p className="flex items-center gap-2 text-[0.75rem] text-on-surface-var">
          <svg width="16" height="16" viewBox="0 0 18 18" className="shrink-0" aria-hidden="true">
            <path d="M9 2.2 16.2 15H1.8L9 2.2Z" fill="rgba(254,133,31,0.18)" stroke="#dc6409" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M9 7v3.6" stroke="#964900" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="9" cy="12.8" r="0.95" fill="#964900" />
          </svg>
          Échelles différentes : eau disponible à gauche, eau consommée à droite.
        </p>
      )}
      <p className="text-[0.875rem] text-on-surface leading-relaxed">{mensuel.texte}</p>
    </div>
  );
}
