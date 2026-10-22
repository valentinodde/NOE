// Chapitre 1 : l'offre en eau. Messages clés : pluies d'été, sols secs,
// débits des cours d'eau, nappes, et neige pour les bassins concernés.

import { useMemo, useState } from 'react';
import {
  ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceArea, ResponsiveContainer,
} from 'recharts';
import {
  HORIZON_LABELS, MOIS_COURTS, MOIS_LONGS, analyseDebits, analyseNappes, analyseNeige, analysePluie, analyseSols,
  fmtNombre, fmtPart, fmtSigne, pct,
} from '../../utils/constatMessages';
import { ecartDensifie } from '../../utils/courbes';
import {
  Chapitre, InfobulleGraphique, Legende, LigneChiffre, Message, Parties, Pastille, Surligne, Vide,
} from './ConstatUI';
import { AXE } from './outils';
import DebitsCarte from './DebitsCarte';

const COULEUR_2025 = '#0097d6';
const COULEUR_2050 = '#051b71';
const DEFICIT = 'rgba(239,68,68,0.25)';
const SURPLUS = 'rgba(34,197,94,0.32)';

export default function OffreSection({ territoire: t, entreprise }) {
  const pluie = analysePluie(t);
  const sols = analyseSols(t);
  const debits = analyseDebits(t);
  const nappes = analyseNappes(t);
  const neige = analyseNeige(t);

  return (
    <Chapitre
      id="chapitre-offre"
      numero="1"
      surtitre="L'offre en eau"
      titre={<>L'eau et le climat de votre territoire : un sujet de <Surligne ton="eau">disponibilité</Surligne></>}
      accroche="Le changement climatique ne fait pas seulement monter les températures : il modifie le moment où l'eau arrive et la part qui reste disponible pour les milieux et les usages."
    >
      {/* Chaque partie est un volet : titre, message clé et chiffre clé
          visibles d'emblée, texte et visuels au dépliage */}
      <Parties repliables>
        {pluie ? (
          <BlocPluie pluie={pluie} />
        ) : (
          <Vide message="Projections de précipitations indisponibles pour ce bassin." />
        )}

        {sols ? (
          <BlocSols sols={sols} />
        ) : (
          <Vide message="Projections d'humidité des sols indisponibles pour ce bassin." />
        )}

        {debits ? (
          <DebitsCarte debits={debits} bassin={t?.bassin} entreprise={entreprise} repliable icone={ICONES.riviere} />
        ) : (
          <div id="offre-debits"><Vide message="Ce bassin n'est pas couvert par le modèle des débits (bande côtière, île ou canal)." /></div>
        )}

        {nappes ? (
          <BlocNappes nappes={nappes} />
        ) : (
          <div id="offre-nappes"><Vide message="Données sur les nappes indisponibles pour ce bassin." /></div>
        )}

        {neige && <BlocNeige neige={neige} />}
      </Parties>
    </Chapitre>
  );
}

// ─── 1. Pluies au fil de l'année, actuel contre 2050 ─────────────────────────

const ICONES = {
  ete: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1" />
    </svg>
  ),
  annee: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="12" height="11" rx="2" />
      <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" />
    </svg>
  ),
  // Sol craquelé
  sol: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 6.5h13M3 6.5l2 3-1.5 2.5M8 6.5 7 9.5l2 2-1 3M12.5 6.5l-1.5 3 2 3" />
    </svg>
  ),
  // Nappe : couches du sous-sol et goutte
  nappe: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 9.5h13M1.5 13h13M8 1.5c1.3 1.7 2 2.8 2 3.8a2 2 0 0 1-4 0c0-1 .7-2.1 2-3.8Z" />
    </svg>
  ),
  // Flocon
  neige: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M8 1.5v13M2.4 4.75l11.2 6.5M2.4 11.25l11.2-6.5M6.3 2.6 8 4l1.7-1.4M6.3 13.4 8 12l1.7 1.4" />
    </svg>
  ),
  // Cours d'eau
  riviere: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M1.5 5c1.6-1.2 3.3-1.2 4.9 0s3.3 1.2 4.9 0 2.4-.9 3.2-.6M1.5 9c1.6-1.2 3.3-1.2 4.9 0s3.3 1.2 4.9 0 2.4-.9 3.2-.6M1.5 13c1.6-1.2 3.3-1.2 4.9 0s3.3 1.2 4.9 0 2.4-.9 3.2-.6" />
    </svg>
  ),
};

function BlocPluie({ pluie }) {
  // Période surlignée sur le graphique : l'été par défaut, sinon celle survolée
  const [survol, setSurvol] = useState(null);
  const active = pluie.periodes.find((p) => p.cle === (survol ?? 'ete'));
  const ete = pluie.periodes.find((p) => p.cle === 'ete');

  const texte = (
    <div className="flex flex-col gap-3">
      <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">{pluie.chapeau}</p>
      <ul className="flex flex-col gap-1.5" aria-label="Évolution des pluies par période, de 2025 à 2050">
        {pluie.periodes.map((p) => (
          <li key={p.cle}>
            <LigneChiffre
              icone={ICONES[p.cle]}
              label={p.label}
              detail={p.detail}
              avant={fmtNombre(p.actuel)}
              apres={`${fmtNombre(p.futur)} mm`}
              pastille={fmtSigne(p.delta)}
              defavorable={p.delta < 0}
              actif={active.cle === p.cle}
              onActiver={() => setSurvol(p.cle)}
              onDesactiver={() => setSurvol(null)}
            />
          </li>
        ))}
      </ul>
      <p className="text-[0.6875rem] text-on-surface-var">Survolez une période pour la repérer sur le graphique.</p>
    </div>
  );

  return (
    <Message
      id="offre-pluie" titre={pluie.titre} texte={texte} alerte={pluie.alerte} messageCle={pluie.messageCle}
      repliable icone={ICONES.ete}
      chiffre={{ valeur: fmtSigne(ete.delta), legende: "de pluie en été d'ici 2050", defavorable: ete.delta < 0 }}
    >
      <GraphiquePluie pluie={pluie} active={active} />
    </Message>
  );
}

// Points des mois réels sur les courbes densifiées
function pointMois(couleur) {
  return function Point({ cx, cy, payload, index }) {
    if (!Number.isInteger(payload.x)) return <g key={index} />;
    return <circle key={index} cx={cx} cy={cy} r={2.5} fill={couleur} stroke="#ffffff" strokeWidth={1} />;
  };
}

const POINT_2025 = pointMois(COULEUR_2025);
const POINT_2050 = pointMois(COULEUR_2050);

function GraphiquePluie({ pluie, active }) {
  const donnees = useMemo(() => ecartDensifie(pluie.actuel, pluie.futur), [pluie.actuel, pluie.futur]);

  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-[0.875rem] font-semibold text-on-surface">
        Précipitations au cours de l'année : actuel vs 2050
      </h4>
      <Legende
        elements={[
          { label: `Actuel (${HORIZON_LABELS.actuel})`, couleur: COULEUR_2025 },
          { label: '2050', couleur: COULEUR_2050 },
          { label: 'Moins de pluie en 2050', couleur: DEFICIT, zone: true },
          { label: 'Plus de pluie en 2050', couleur: SURPLUS, zone: true },
        ]}
      />
      <ResponsiveContainer width="100%" height={250}>
        <ComposedChart data={donnees} margin={{ top: 22, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#e8eaf3" />
          {active.bandes.map(([x1, x2], i) => (
            <ReferenceArea
              key={`${active.cle}-${x1}`}
              x1={x1}
              x2={x2}
              fill="rgba(5,27,113,0.06)"
              ifOverflow="hidden"
              label={i === 0 ? {
                value: `${active.label} : ${fmtSigne(active.delta)}`,
                position: 'insideTop',
                offset: -18,
                fill: '#000a43',
                fontSize: 11,
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
              } : undefined}
            />
          ))}
          <XAxis
            dataKey="x"
            type="number"
            domain={[0, 11]}
            ticks={MOIS_COURTS.map((_, i) => i)}
            tickFormatter={(i) => MOIS_COURTS[i]}
            tick={AXE}
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
            minTickGap={4}
          />
          <YAxis tick={AXE} axisLine={false} tickLine={false} unit=" mm" width={62} />
          <Tooltip
            cursor={{ stroke: '#94a3b8', strokeDasharray: '3 3' }}
            content={({ active: survol, payload }) => {
              if (!survol || !payload?.length) return null;
              const i = Math.round(payload[0].payload.x);
              const ecart = pluie.futur[i] - pluie.actuel[i];
              return (
                <InfobulleGraphique
                  titre={MOIS_LONGS[i]}
                  lignes={[
                    { label: `Actuel (${HORIZON_LABELS.actuel})`, couleur: COULEUR_2025, valeur: `${pluie.actuel[i]} mm` },
                    { label: '2050', couleur: COULEUR_2050, valeur: `${pluie.futur[i]} mm` },
                    { label: 'Écart', valeur: fmtSigne(ecart, 'mm') },
                  ]}
                />
              );
            }}
          />
          <Area type="linear" dataKey="deficit" stroke="none" fill={DEFICIT} isAnimationActive={false} activeDot={false} />
          <Area type="linear" dataKey="surplus" stroke="none" fill={SURPLUS} isAnimationActive={false} activeDot={false} />
          <Line type="linear" dataKey="a" stroke={COULEUR_2025} strokeWidth={2} dot={POINT_2025} activeDot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="b" stroke={COULEUR_2050} strokeWidth={2} dot={POINT_2050} activeDot={false} isAnimationActive={false} />
        </ComposedChart>
      </ResponsiveContainer>
      <p className="text-[0.75rem] text-on-surface-var">Cumul mensuel de précipitations sur le bassin, en millimètres.</p>
    </div>
  );
}

// ─── 2. Jours de sol sec ─────────────────────────────────────────────────────

function BlocSols({ sols }) {
  return (
    <Message
      id="offre-sols" titre={sols.titre} texte={sols.chapeau} alerte={sols.alerte} messageCle={sols.messageCle}
      repliable icone={ICONES.sol}
      chiffre={{ valeur: fmtSigne(sols.delta, 'j'), legende: "de sol sec par an d'ici 2050", defavorable: sols.delta > 0 }}
    >
      <JoursSecs jours={sols.jours} />
    </Message>
  );
}

function JoursSecs({ jours }) {
  const cases = [
    { h: 'actuel', label: "Aujourd'hui" },
    { h: '2030', label: '2030' },
    { h: '2050', label: '2050' },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {cases.map(({ h, label }) => {
          const valeur = jours[h];
          const ecart = h !== 'actuel' && valeur != null && jours.actuel != null ? valeur - jours.actuel : null;
          return (
            <div key={h} className="bg-surface-low rounded-xl px-4 py-4 flex flex-col gap-2">
              <p className="text-[0.6875rem] text-on-surface-var uppercase tracking-widest">{label}</p>
              <p className="leading-none">
                <span className="text-[1.5rem] font-bold text-primary tabular-nums">{valeur ?? '-'}</span>
                <span className="text-[0.8125rem] font-medium text-on-surface-var ml-1">jours</span>
              </p>
              {/* L'année en une barre : la part des jours où le sol est sec */}
              <div className="h-2 rounded-full bg-surface-highest overflow-hidden" aria-hidden="true">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${Math.min(100, ((valeur ?? 0) / 365) * 100)}%`, background: '#fe851f' }}
                />
              </div>
              {ecart != null && (
                <span className="w-fit"><Pastille defavorable={ecart > 0}>{fmtSigne(ecart, 'jours')}</Pastille></span>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-[0.75rem] text-on-surface-var">Nombre de jours par an où le sol est sec. La barre représente la part de l'année.</p>
    </div>
  );
}

// ─── 4. Nappes ───────────────────────────────────────────────────────────────

function BlocNappes({ nappes: n }) {
  const cases = [
    { h: 'actuel', label: "Aujourd'hui" },
    { h: '2030', label: '2030' },
    { h: '2050', label: '2050' },
  ];

  const evolution = pct(n.recharge['2050'], n.recharge.actuel);

  return (
    <Message
      id="offre-nappes" titre={n.titre} texte={n.texte} alerte={n.alerte} messageCle={n.messageCle}
      repliable icone={ICONES.nappe}
      chiffre={evolution != null && { valeur: fmtSigne(evolution), legende: "de recharge d'ici 2050", defavorable: evolution < 0 }}
    >
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cases.map(({ h, label }) => {
            const valeur = n.recharge[h];
            const ecart = h !== 'actuel' ? pct(valeur, n.recharge.actuel) : null;
            return (
              <div key={h} className="bg-surface-low rounded-xl px-4 py-4 flex flex-col gap-2">
                <p className="text-[0.6875rem] text-on-surface-var uppercase tracking-widest">{label}</p>
                <p className="leading-none">
                  <span className="text-[1.5rem] font-bold text-primary tabular-nums">{valeur ?? '-'}</span>
                  <span className="text-[0.8125rem] font-medium text-on-surface-var ml-1">mm / an</span>
                </p>
                {n.rechargeHiver?.[h] != null && (
                  <p className="text-[0.6875rem] text-on-surface-var tabular-nums">dont {n.rechargeHiver[h]} mm d'octobre à mars</p>
                )}
                {ecart != null && (
                  <span className="w-fit"><Pastille defavorable={ecart < 0}>{fmtSigne(ecart)}</Pastille></span>
                )}
              </div>
            );
          })}
        </div>
        <p className="text-[0.75rem] text-on-surface-var">Recharge des nappes : pluie qui s'infiltre sous les racines, en millimètres par an.</p>

        {(n.aquifere?.nom || n.pression != null) && (
          <dl className="bg-surface-low rounded-xl px-4 py-3 flex flex-col gap-1.5 text-[0.8125rem]">
            {n.aquifere?.nom && (
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-on-surface-var">Principale nappe :</dt>
                <dd className="font-semibold text-on-surface">
                  {n.aquifere.nom}
                  {n.aquifere.part_bassin != null && (
                    <span className="font-normal text-on-surface-var"> ({fmtPart(n.aquifere.part_bassin)} du bassin)</span>
                  )}
                </dd>
              </div>
            )}
            {n.pression != null && (
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-on-surface-var">Prélèvements dans les nappes :</dt>
                <dd className="font-semibold text-on-surface tabular-nums">{fmtPart(n.pression)} de la recharge annuelle</dd>
              </div>
            )}
          </dl>
        )}
      </div>
    </Message>
  );
}

// ─── 5. Neige et glaciers ────────────────────────────────────────────────────

function BlocNeige({ neige }) {
  const donnees = neige.mensuel
    ? MOIS_COURTS.map((mois, i) => ({ mois, actuel: neige.mensuel.actuel[i], futur: neige.mensuel.futur[i] }))
    : null;

  return (
    <Message
      id="offre-neige" titre={neige.titre} texte={neige.texte} alerte={neige.alerte} messageCle={neige.messageCle}
      repliable icone={ICONES.neige}
      chiffre={{ valeur: fmtSigne(neige.delta), legende: "de neige d'ici 2050", defavorable: neige.delta < 0 }}
    >
      {donnees ? (
        <div className="flex flex-col gap-3">
          <h4 className="text-[0.875rem] font-semibold text-on-surface">Neige au sol au cours de l'année : actuel vs 2050</h4>
          <Legende
            elements={[
              { label: `Actuel (${HORIZON_LABELS.actuel})`, couleur: COULEUR_2025 },
              { label: '2050', couleur: COULEUR_2050 },
            ]}
          />
          <ResponsiveContainer width="100%" height={220}>
            <ComposedChart data={donnees} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#e8eaf3" />
              <XAxis dataKey="mois" tick={AXE} axisLine={false} tickLine={false} interval="preserveStartEnd" minTickGap={4} />
              <YAxis tick={AXE} axisLine={false} tickLine={false} unit=" mm" width={62} />
              <Tooltip
                cursor={{ stroke: '#94a3b8', strokeDasharray: '3 3' }}
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
                  const d = payload[0].payload;
                  return (
                    <InfobulleGraphique
                      titre={MOIS_LONGS[MOIS_COURTS.indexOf(label)] ?? label}
                      lignes={[
                        { label: `Actuel (${HORIZON_LABELS.actuel})`, couleur: COULEUR_2025, valeur: `${fmtNombre(d.actuel)} mm` },
                        { label: '2050', couleur: COULEUR_2050, valeur: `${fmtNombre(d.futur)} mm` },
                      ]}
                    />
                  );
                }}
              />
              <Line type="monotone" dataKey="actuel" stroke={COULEUR_2025} strokeWidth={2} dot={false} isAnimationActive={false} />
              <Line type="monotone" dataKey="futur" stroke={COULEUR_2050} strokeWidth={2} dot={false} isAnimationActive={false} />
            </ComposedChart>
          </ResponsiveContainer>
          <p className="text-[0.75rem] text-on-surface-var">Équivalent en eau du manteau neigeux moyen sur le bassin, en millimètres.</p>
        </div>
      ) : (
        <Vide message="Détail mensuel de la neige indisponible pour ce bassin." />
      )}
    </Message>
  );
}
