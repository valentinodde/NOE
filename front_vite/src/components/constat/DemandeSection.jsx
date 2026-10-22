// Chapitre 2 : la demande en eau du territoire. Répartition actuelle des
// prélèvements par usage, puis leur évolution d'ici 2030 et 2050.

import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { analyseDemande, fmtNombre, fmtSigne, mecanismesDemande, millions } from '../../utils/constatMessages';
import { BadgeFictif, Chapitre, InfoSurvol, InfobulleGraphique, Surligne, Vide } from './ConstatUI';
import CartesOnglets, { BoutonFermer } from './Onglets';

export default function DemandeSection({ territoire: t }) {
  const demande = analyseDemande(t);
  const mecanismes = mecanismesDemande(t, demande);
  // Usage dont l'explication est dépliée sous les cartes « Et demain ? »
  const [explique, setExplique] = useState(null);

  return (
    <Chapitre
      id="chapitre-demande"
      numero="2"
      surtitre="La demande en eau"
      titre={demande ? (
        <>{demande.titreCle.debut} <Surligne ton={demande.titreCle.ton}>{demande.titreCle.cle}</Surligne></>
      ) : 'La demande en eau du territoire'}
      accroche="L'eau du bassin est indispensable à toutes les activités du territoire : irriguer les cultures, produire, alimenter les habitants en eau potable."
    >
      {demande ? (
        <div className="flex flex-col gap-7">
          <p className="text-[0.875rem] text-on-surface leading-relaxed">{demande.texte}</p>

          <div id="demande-aujourdhui" className="flex flex-col gap-4 scroll-mt-20 min-[1440px]:scroll-mt-6">
            <h3 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>Aujourd'hui</h3>
            <Repartition demande={demande} />
          </div>

          <div id="demande-demain" className="flex flex-col gap-4 pt-7 border-t border-surface-high scroll-mt-20 min-[1440px]:scroll-mt-6">
            <h3 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>Et demain ?</h3>
            <CartesOnglets
              elements={demande.usages}
              ouvert={explique}
              onChanger={setExplique}
              titre="Comprendre cette évolution"
              rendreCarte={(u) => <ContenuUsage usage={u} />}
              rendrePanneau={(u, fermer) => (
                <ContenuEvolution usage={u} mecanisme={mecanismes[u.cle]} onFermer={fermer} />
              )}
            />
          </div>
        </div>
      ) : (
        <Vide
          message={!t?.prelevements?.actuel
            ? 'Données de prélèvements indisponibles pour ce bassin.'
            : t.prelevements.actuel.total_mm3 > 0
              ? "Les prélèvements d'eau déclarés dans ce bassin sont négligeables, moins de 50 000 m³ par an (base nationale BNPE, 2019-2023)."
              : "Aucun prélèvement d'eau n'est déclaré dans ce bassin (base nationale BNPE, 2019-2023)."}
        />
      )}
    </Chapitre>
  );
}

// ─── Anneau de répartition actuelle ──────────────────────────────────────────

function Repartition({ demande }) {
  const donnees = demande.usages.filter((u) => u.actuel > 0);

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-8">
      <div className="relative w-[220px] h-[220px] shrink-0 self-center">
        {/* Total au centre, placé avant le graphique pour que l'infobulle passe au-dessus */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[1.5rem] font-bold text-primary leading-none tabular-nums">
            {fmtNombre(demande.totActuel, 1)}
          </span>
          <span className="text-[0.6875rem] text-on-surface-var mt-1">{millions(demande.totActuel)} de m³ / an</span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={donnees}
              dataKey="actuel"
              nameKey="label"
              innerRadius={72}
              outerRadius={106}
              paddingAngle={2}
              stroke="#ffffff"
              strokeWidth={2}
              startAngle={90}
              endAngle={-270}
              isAnimationActive={false}
            >
              {donnees.map((u) => <Cell key={u.cle} fill={u.couleur} />)}
            </Pie>
            <Tooltip
              wrapperStyle={{ zIndex: 10 }}
              content={({ active, payload }) => active && payload?.length ? (
                <InfobulleGraphique
                  titre={payload[0].payload.label}
                  lignes={[
                    { label: 'Volume', valeur: `${fmtNombre(payload[0].payload.actuel, 2)} Mm³` },
                    { label: 'Part', valeur: `${payload[0].payload.part} %` },
                  ]}
                />
              ) : null}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <ul className="flex flex-col flex-1 min-w-0 divide-y divide-surface-high">
        {demande.usages.map((u) => <LigneRepartition key={u.cle} usage={u} />)}
      </ul>
    </div>
  );
}

// Un usage dans la légende : part, volume et explication au survol
function LigneRepartition({ usage: u }) {
  return (
    <li className="py-3">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full shrink-0" style={{ background: u.couleur }} />
        <span className="text-[0.875rem] font-semibold text-on-surface whitespace-nowrap">{u.label}</span>
        <InfoSurvol texte={u.role} large />
        <span className="ml-auto flex items-baseline gap-3 tabular-nums whitespace-nowrap">
          <span className="text-[0.75rem] text-on-surface-var">{fmtNombre(u.actuel, 2)} Mm³</span>
          <span className="text-[1.125rem] font-bold text-primary w-12 text-right">{u.part} %</span>
        </span>
      </div>
    </li>
  );
}

// ─── Évolution d'un usage ────────────────────────────────────────────────────

// Contenu d'une carte « Et demain ? » (le bouton et l'onglet sont gérés par
// CartesOnglets). Même en-tête que les maillons de la chaîne de valeur : le
// nom de l'usage sur un bandeau bleu foncé (marges négatives pour couvrir
// l'intérieur de la carte, coins arrondis assortis).
function ContenuUsage({ usage: u }) {
  return (
    <>
      <span
        className="-mx-4 -mt-4 px-4 py-3 rounded-t-[10px] flex items-center gap-2"
        style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
      >
        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: u.couleur, boxShadow: '0 0 0 2px rgba(255,255,255,0.85)' }} />
        <span className="text-[1rem] font-bold text-white">{u.label}</span>
      </span>

      {u.d2050 != null && (
        <span className="leading-none">
          <span className="text-[1.75rem] font-bold tabular-nums" style={{ color: couleurEvolution(u.d2050) }}>
            {fmtSigne(u.d2050)}
          </span>
          <span className="text-[0.8125rem] text-on-surface-var ml-2">d'ici 2050</span>
        </span>
      )}
    </>
  );
}

// Hausse des prélèvements en ambre, baisse ou stabilité en marine
function couleurEvolution(v) {
  return v != null && v > 0 ? '#964900' : '#000a43';
}

// Contenu du panneau « Comprendre cette évolution »
function ContenuEvolution({ usage: u, mecanisme, onFermer }) {
  const colonnes = mecanisme?.facteurs.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <>
      <div className="flex items-start gap-3">
        <div className="flex-1 flex flex-col gap-1.5">
          {mecanisme && (
            <h4 className="text-[1.25rem] font-extrabold text-primary leading-[1.35]" style={{ letterSpacing: '-0.015em' }}>
              {mecanisme.synthese.debut}{' '}
              <Surligne ton={mecanisme.synthese.ton}>{mecanisme.synthese.cle}</Surligne>
            </h4>
          )}
        </div>
        <BoutonFermer onClick={onFermer} />
      </div>

      {mecanisme ? (
        <ul className={`grid grid-cols-1 ${colonnes} gap-3`}>
          {mecanisme.facteurs.map((f) => <Facteur key={f.titre} facteur={f} />)}
        </ul>
      ) : (
        <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">{u.aide}</p>
      )}

      <BilanBassin usage={u} />
    </>
  );
}

// Sur le bassin : ce qui a déjà été observé, puis la projection. Le passé
// donne un ordre de grandeur à la projection (pas pour l'agriculture, voir
// analyseDemande).
function BilanBassin({ usage: u }) {
  const h = u.historique;
  if (u.d2050 == null && !h) return null;

  return (
    <div className="border-t border-surface-high pt-4 flex flex-col gap-2.5">
      <p className="text-[0.8125rem] font-semibold text-on-surface">Sur votre bassin</p>
      <div className="flex flex-wrap items-stretch gap-2">
        {h && (
          <>
            <ChiffreBilan
              valeur={fmtSigne(h.evolution_pct)}
              couleur={couleurEvolution(h.evolution_pct)}
              label="déjà observé"
              detail={`de ${h.periode_debut.slice(0, 4)} à ${h.periode_fin.slice(-4)}`}
            />
            <span className="hidden sm:flex items-center text-on-surface-var" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18"><path d="M3 9h11M10 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </>
        )}
        {u.d2050 != null && (
          <ChiffreBilan
            valeur={fmtSigne(u.d2050)}
            couleur={couleurEvolution(u.d2050)}
            label="projeté"
            detail="d'aujourd'hui à 2050"
          />
        )}
      </div>
    </div>
  );
}

function ChiffreBilan({ valeur, couleur, label, detail }) {
  return (
    <div className="bg-surface-low rounded-xl px-4 py-3 flex items-baseline gap-2.5">
      <span className="text-[1.375rem] font-bold leading-none tabular-nums" style={{ color: couleur }}>{valeur}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[0.8125rem] font-semibold text-on-surface">{label}</span>
        <span className="text-[0.6875rem] text-on-surface-var tabular-nums">{detail}</span>
      </span>
    </div>
  );
}

// Sens d'un facteur sur la demande
const SENS = {
  hausse: { fleche: '↑', label: 'Fait monter la demande', fond: 'rgba(254,133,31,0.14)', texte: '#964900' },
  baisse: { fleche: '↓', label: 'Fait baisser la demande', fond: 'rgba(5,27,113,0.07)', texte: '#051b71' },
  evolution: { fleche: '↕', label: 'Évolution', fond: '#e8eaf3', texte: '#44474f' },
};

function Facteur({ facteur: f }) {
  const sens = SENS[f.sens] ?? SENS.evolution;
  return (
    <li className="bg-surface-low rounded-xl p-4 flex flex-col gap-2">
      <span
        className="inline-flex w-fit items-center gap-1.5 text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full"
        style={{ background: sens.fond, color: sens.texte }}
      >
        <span aria-hidden="true" className="font-bold">{sens.fleche}</span>
        {sens.label}
      </span>
      <p className="text-[0.875rem] font-semibold text-on-surface leading-snug">{f.titre}</p>
      <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">{f.texte}</p>
      {f.donnee && (
        <div className="mt-auto bg-white rounded-lg px-3 py-2.5 flex flex-col gap-1.5">
          <div className="flex items-start justify-between gap-2">
            <p className="text-[0.75rem] font-medium text-on-surface-var leading-snug">{f.donnee.label}</p>
            {f.donnee.fictif && <BadgeFictif court />}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {f.donnee.valeurs.map((v) => (
              <p key={v.label ?? v.valeur} className="leading-tight">
                {v.label && <span className="block text-[0.6875rem] text-on-surface-var">{v.label}</span>}
                <span className="text-[1.125rem] font-bold text-primary tabular-nums">{v.valeur}</span>
                {v.detail && <span className="text-[0.75rem] text-on-surface-var ml-2 tabular-nums">{v.detail}</span>}
              </p>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}
