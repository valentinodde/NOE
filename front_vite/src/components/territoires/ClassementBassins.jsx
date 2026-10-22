// Classement des bassins du territoire pour l'indicateur et l'horizon de la
// carte, le plus défavorable en premier. Sert aussi de vue tableau de la
// carte (lecture au clavier, sans couleur).

import { useMemo, useState } from 'react';
import { fmtSigne } from '../../utils/constatMessages';
import { INDICATEURS_PAR_CLE, classeDe, cleTri, fmtGrand, libelleHorizon } from '../../utils/territoiresIndicateurs';
import { nomsDepartements } from '../../utils/territoiresFrance';
import { Carte } from './TerritoiresUI';

const NOMBRE = 10;
const STRESS = INDICATEURS_PAR_CLE.stress;

export default function ClassementBassins({ indicateur, horizon, bassins, territoire, selection, onSelection }) {
  const [tout, setTout] = useState(false);

  // Bassins sans valeur à la fin ; l'usage dominant n'a pas d'ordre, il se
  // trie par population
  const classes = useMemo(() => {
    const avecCle = bassins.map((p) => ({
      p,
      k: indicateur.pire ? cleTri(indicateur, p, horizon) : (indicateur.valeur(p, horizon) != null ? p.population ?? 0 : null),
    }));
    return avecCle
      .sort((a, b) => (a.k == null) - (b.k == null) || (b.k ?? 0) - (a.k ?? 0) || (b.p.population ?? 0) - (a.p.population ?? 0))
      .map((x) => x.p);
  }, [bassins, indicateur, horizon]);

  const evolution = indicateur.type === 'classes' && horizon !== 'actuel' && indicateur.horizons.includes('actuel');
  const lignes = tout ? classes : classes.slice(0, NOMBRE);
  const titreTri = indicateur.pire ? 'classés du plus exposé au moins exposé' : 'classés par population';

  return (
    <Carte className="p-5 sm:p-6 flex flex-col gap-4">
      <header className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-[1.125rem] font-bold text-primary leading-snug" style={{ letterSpacing: '-0.01em' }}>
            Les bassins de {territoire.type === 'france' ? 'France métropolitaine' : territoire.nom}
          </h2>
          <p className="text-[0.8125rem] text-on-surface-var mt-0.5">
            {indicateur.titre}, {libelleHorizon(indicateur, horizon)} : {classes.length} bassins {titreTri}.
          </p>
        </div>
      </header>

      <div className="overflow-x-auto -mx-5 sm:mx-0">
        <table className="w-full text-[0.8125rem] min-w-[640px]">
          <thead>
            <tr className="text-[0.75rem] text-on-surface-var text-left">
              <th className="font-normal px-3 py-2 w-10 text-right">Rang</th>
              <th className="font-normal px-3 py-2">Bassin versant</th>
              <th className="font-normal px-3 py-2 text-right">Habitants</th>
              <th className="font-normal px-3 py-2">{indicateur.label}</th>
              {evolution && <th className="font-normal px-3 py-2 text-right">Écart à aujourd'hui</th>}
              {indicateur.cle !== 'stress' && <th className="font-normal px-3 py-2">Stress 2050</th>}
            </tr>
          </thead>
          <tbody>
            {lignes.map((p, i) => {
              const v = indicateur.valeur(p, horizon);
              const c = classeDe(indicateur, p, horizon);
              const avant = evolution ? indicateur.valeur(p, 'actuel') : null;
              const stress = classeDe(STRESS, p, '2050');
              const actif = selection === p.id;
              return (
                <tr
                  key={p.id}
                  onClick={() => onSelection(p.id)}
                  className="border-t border-surface-high cursor-pointer transition-colors hover:bg-surface-low"
                  style={{ background: actif ? '#e8eaf3' : undefined }}
                >
                  <td className="px-3 py-2 text-right tabular-nums text-on-surface-var">{i + 1}</td>
                  <td className="px-3 py-2">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); onSelection(p.id); }}
                      className="text-left text-on-surface font-medium leading-snug hover:underline focus-visible:outline-2 focus-visible:outline-primary-container rounded"
                    >
                      {p.nom}
                    </button>
                    <p className="text-[0.6875rem] text-on-surface-var">{nomsDepartements(p.deps).join(', ')}</p>
                  </td>
                  <td className="px-3 py-2 text-right tabular-nums text-on-surface-var">{fmtGrand(p.population)}</td>
                  <td className="px-3 py-2">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-[3px] shrink-0" style={{ background: c?.couleur ?? '#d5d8e2' }} />
                      <span className="tabular-nums text-on-surface whitespace-nowrap">{v != null ? indicateur.format(v) : 'Non calculé'}</span>
                    </span>
                  </td>
                  {evolution && (
                    <td className="px-3 py-2 text-right tabular-nums text-on-surface-var whitespace-nowrap">
                      {v != null && avant != null ? fmtEcart(indicateur, v - avant) : '-'}
                    </td>
                  )}
                  {indicateur.cle !== 'stress' && (
                    <td className="px-3 py-2">
                      <span className="flex items-center gap-2 text-on-surface-var">
                        <span className="w-3 h-3 rounded-[3px] shrink-0" style={{ background: stress?.couleur ?? '#d5d8e2' }} />
                        {stress?.label ?? 'Non calculé'}
                      </span>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {classes.length > NOMBRE && (
        <button
          type="button"
          onClick={() => setTout((t) => !t)}
          className="self-start px-4 py-2 rounded-xl text-[0.8125rem] font-medium text-primary bg-surface-low hover:bg-surface-high transition-colors focus-visible:outline-2 focus-visible:outline-primary-container"
        >
          {tout ? `Afficher les ${NOMBRE} premiers` : `Afficher les ${classes.length} bassins`}
        </button>
      )}
    </Carte>
  );
}

// Écart en unité de l'indicateur : points de % pour les évolutions, jours,
// degrés, euros, millimètres pour les grandeurs
function fmtEcart(indicateur, d) {
  switch (indicateur.cle) {
    case 'restrictions':
    case 'sols_secs': return fmtSigne(Math.round(d), 'j');
    case 'temperature': return fmtSigne(d, '°C', 1);
    case 'prix': return fmtSigne(d, '€', 2);
    case 'disponibilite': return fmtSigne(Math.round(d), 'mm');
    case 'prelevements': return indicateur.unite === 'mm' ? fmtSigne(d, 'mm', Math.abs(d) < 10 ? 1 : 0) : fmtSigne(d, 'pts', Math.abs(d) < 10 ? 1 : 0);
    default: return fmtSigne(d, 'pts');
  }
}
