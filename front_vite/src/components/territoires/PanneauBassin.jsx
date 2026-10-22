// Fiche d'un bassin versant : stress hydrique aux trois horizons, chiffres
// clés aujourd'hui et en 2050 (chaque ligne affiche l'indicateur sur la
// carte), prélèvements par usage et activités dépendantes de l'eau.

import { HORIZONS, HORIZON_LABELS, USAGES, fmtNombre, fmtSigne } from '../../utils/constatMessages';
import { INDICATEURS_PAR_CLE, classeDe, fmtGrand, libelleHorizon, resoudreIndicateur } from '../../utils/territoiresIndicateurs';
import { nomsDepartements } from '../../utils/territoiresFrance';
import { ActiviteDependante, BarreEmpilee, Etiquette, LegendeCouleurs } from './TerritoiresUI';

const STRESS = INDICATEURS_PAR_CLE.stress;

// Lignes du tableau des chiffres clés, dans l'ordre de lecture : la
// ressource, ce qu'on en prélève, la tension qui en résulte, puis le climat.
// `reglages` : ceux appliqués à la carte au clic.
const LIGNES = [
  { cle: 'disponibilite' },
  { cle: 'prelevements', reglages: { mesure: 'volume' } },
  { cle: 'prelevements', reglages: { mesure: 'part' } },
  { cle: 'restrictions' },
  { cle: 'etiage' },
  { cle: 'recharge' },
  { cle: 'sols_secs' },
  { cle: 'pluie_ete' },
  { cle: 'temperature' },
  { cle: 'prix' },
];

// Les lignes de prélèvements suivent l'usage choisi sur la carte
function lignesPour(indicateur) {
  const usage = indicateur.reglages?.find((r) => r.cle === 'usage');
  return LIGNES.map((l) => {
    const reglages = l.reglages && usage ? { ...l.reglages, usage: usage.valeur } : l.reglages;
    const ind = resoudreIndicateur(l.cle, reglages);
    const suffixe = usage && l.reglages && usage.valeur !== 'total'
      ? ` (${usage.choix.find((c) => c.cle === usage.valeur).label.toLowerCase()})`
      : '';
    return { ...l, reglages, id: `${l.cle}-${l.reglages?.mesure ?? ''}`, ind, label: `${ind.label}${suffixe}` };
  });
}

// La ligne active : même indicateur, et même mesure pour les prélèvements
// (quel que soit l'usage choisi sur la carte)
function ligneActive(ligne, indicateur) {
  if (ligne.cle !== indicateur.cle) return false;
  const mesure = indicateur.reglages?.find((r) => r.cle === 'mesure')?.valeur;
  return !ligne.reglages?.mesure || ligne.reglages.mesure === mesure;
}

const SEUIL_PRELEVEMENTS_MM3 = 0.05;

export default function PanneauBassin({ bassin: p, territoire, indicateur, onIndicateur, onFermer, activite }) {
  const deps = nomsDepartements(p.deps);
  const x = p.x ?? {};

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <button
          type="button"
          onClick={onFermer}
          className="self-start text-[0.75rem] font-medium text-primary-container hover:underline focus-visible:outline-2 focus-visible:outline-primary-container rounded"
        >
          ‹ Retour à {territoire.nom}
        </button>
        <Etiquette>Bassin versant</Etiquette>
        <h2 className="text-[1.25rem] font-bold text-primary leading-snug" style={{ letterSpacing: '-0.01em' }}>
          {p.nom}
        </h2>
        <div className="flex flex-col gap-0.5 text-[0.75rem] text-on-surface-var">
          {p.cours_eau && (
            <span>Cours d'eau principal : <strong className="font-semibold text-on-surface">{p.cours_eau}</strong></span>
          )}
          <span>{deps.join(', ')}</span>
          <span className="tabular-nums">
            {fmtNombre(p.surface)} km² · {fmtGrand(p.population)} habitants
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-2">
        <h3 className="text-[0.875rem] font-semibold text-on-surface">Stress hydrique</h3>
        <div className="grid grid-cols-3 gap-2">
          {HORIZONS.map((h) => {
            const c = classeDe(STRESS, p, h);
            return (
              <div key={h} className="bg-surface-low rounded-lg px-3 py-2" style={{ borderTop: `3px solid ${c?.couleur ?? '#d5d8e2'}` }}>
                <p className="text-[0.6875rem] text-on-surface-var">{HORIZON_LABELS[h]}</p>
                <p className="text-[0.875rem] font-bold text-primary leading-tight mt-0.5">{c?.label ?? 'Non calculé'}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[0.875rem] font-semibold text-on-surface">Chiffres clés</h3>
          <p className="text-[0.6875rem] text-on-surface-var">Cliquez pour voir sur la carte</p>
        </div>
        <table className="w-full text-[0.75rem]">
          <thead>
            <tr className="text-on-surface-var">
              <th className="text-left font-normal pb-1">Indicateur</th>
              <th className="text-right font-normal pb-1 w-[78px]">Aujourd'hui</th>
              <th className="text-right font-normal pb-1 w-[78px]">2050</th>
            </tr>
          </thead>
          <tbody>
            {lignesPour(indicateur).map((l) => (
              <LigneChiffre
                key={l.id}
                ind={l.ind}
                label={l.label}
                bassin={p}
                actif={ligneActive(l, indicateur)}
                onClick={() => onIndicateur(l.cle, l.reglages)}
              />
            ))}
          </tbody>
        </table>
        {(x.restrictions_souterraines != null || x.pire_annee) && (
          <p className="text-[0.6875rem] text-on-surface-var leading-relaxed">
            {x.restrictions_souterraines != null && `Restrictions sur les eaux souterraines : ${fmtNombre(x.restrictions_souterraines)} jours par an en moyenne depuis 2012. `}
            {x.pire_annee?.annee && `Année la plus restreinte pour les rivières : ${x.pire_annee.annee}, avec ${fmtNombre(x.pire_annee.jours)} jours.`}
          </p>
        )}
      </div>

      <Prelevements prelevements={x.prelevements_mm3} historique={x.prelevements_historique} />

      <div className="flex flex-col gap-3">
        <h3 className="text-[0.875rem] font-semibold text-on-surface">Activité économique et dépendance à l'eau</h3>
        <ActiviteDependante {...activite} />
      </div>
    </div>
  );
}

function LigneChiffre({ ind, label: libelle, bassin, actif, onClick }) {
  const avant = ind.horizons.includes('actuel') ? ind.valeur(bassin, 'actuel') : null;
  const apres = ind.valeur(bassin, '2050');
  const pire = apres != null && avant != null && (ind.pire === 'bas' ? apres < avant : apres > avant);
  const label = ind.horizons.includes('actuel') ? libelle : `${libelle} (vs 1976-2005)`;
  return (
    <tr
      className="cursor-pointer transition-colors hover:bg-surface-low"
      style={{ background: actif ? '#e8eaf3' : undefined }}
      onClick={onClick}
    >
      <td className="py-1.5 pl-2 rounded-l-lg">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          aria-pressed={actif}
          className="text-left text-on-surface leading-snug focus-visible:outline-2 focus-visible:outline-primary-container rounded"
          style={{ fontWeight: actif ? 600 : 400 }}
        >
          {label}
        </button>
      </td>
      <td className="py-1.5 text-right tabular-nums text-on-surface-var whitespace-nowrap">
        {avant != null ? ind.format(avant) : '-'}
      </td>
      <td
        className="py-1.5 pr-2 text-right tabular-nums font-semibold whitespace-nowrap rounded-r-lg"
        style={{ color: pire ? '#964900' : '#000a43' }}
      >
        {apres != null ? ind.format(apres) : '-'}
      </td>
    </tr>
  );
}

function Prelevements({ prelevements, historique }) {
  const total = (h) => USAGES.reduce((s, u) => s + (prelevements?.[h]?.[u.cle] ?? 0), 0);
  if (!prelevements?.actuel) return null;
  if (total('actuel') < SEUIL_PRELEVEMENTS_MM3) {
    return (
      <div className="flex flex-col gap-1">
        <h3 className="text-[0.875rem] font-semibold text-on-surface">Prélèvements par usage</h3>
        <p className="text-[0.75rem] text-on-surface-var">Prélèvements négligeables dans ce bassin.</p>
      </div>
    );
  }

  const horizons = ['actuel', '2050'].filter((h) => prelevements[h]);
  const fmt = (v) => `${fmtNombre(v, v < 1 ? 2 : 1)}\u00a0Mm³`;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-[0.875rem] font-semibold text-on-surface">Prélèvements par usage</h3>
        <p className="text-[0.6875rem] text-on-surface-var tabular-nums">
          {horizons.map((h) => `${libelleHorizon(INDICATEURS_PAR_CLE.prelevements, h)} : ${fmt(total(h))}`).join(' · ')}
        </p>
      </div>
      {horizons.map((h) => (
        <BarreEmpilee
          key={h}
          label={HORIZON_LABELS[h]}
          segments={USAGES.map((u) => ({
            cle: u.cle,
            label: u.label,
            couleur: u.couleur,
            valeur: prelevements[h][u.cle] ?? 0,
            texte: `${u.label} : ${fmt(prelevements[h][u.cle] ?? 0)}`,
          }))}
        />
      ))}
      <LegendeCouleurs elements={USAGES.map((u) => ({ label: u.label, couleur: u.couleur }))} />
      <Tendance historique={historique} />
    </div>
  );
}

// Évolution observée des volumes déclarés (BNPE), par usage
function Tendance({ historique }) {
  const usages = USAGES.filter((u) => historique?.[u.cle]?.evolution_pct != null);
  if (!usages.length) return null;
  const { periode_debut: debut, periode_fin: fin } = historique[usages[0].cle];
  return (
    <div className="bg-surface-low rounded-lg px-3 py-2 mt-1">
      <p className="text-[0.6875rem] text-on-surface-var">
        Évolution observée{debut && fin ? ` entre ${debut} et ${fin}` : ''}
      </p>
      <div className="grid grid-cols-3 gap-2 mt-1">
        {usages.map((u) => (
          <div key={u.cle}>
            <p className="text-[0.6875rem] text-on-surface flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-[2px] shrink-0" style={{ background: u.couleur }} />
              {u.label}
            </p>
            <p className="text-[0.875rem] font-bold text-primary tabular-nums">{fmtSigne(historique[u.cle].evolution_pct)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
