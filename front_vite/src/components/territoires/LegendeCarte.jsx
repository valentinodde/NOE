// Légende de la carte, qui sert aussi de répartition : chaque classe porte le
// nombre de bassins du territoire qui y tombent, et son survol met ces
// bassins en avant sur la carte.

import { InfoSurvol } from '../constat/ConstatUI';
import { libelleHorizon } from '../../utils/territoiresIndicateurs';

export default function LegendeCarte({ indicateur, horizon, repartition, classeActive, onSurvolClasse }) {
  // Ordre de lecture : la classe la plus défavorable en haut. Les classes
  // sont rangées par valeur croissante : on les retourne quand le pire est
  // en haut de l'échelle. Les catégories sans ordre (usage) restent telles quelles.
  const classes = repartition.classes.map((c, i) => ({ ...c, cle: i }));
  const lignes = [
    ...(indicateur.pire === 'haut' ? classes.reverse() : classes),
    ...(repartition.sansDonnee.bassins ? [{ ...repartition.sansDonnee, cle: 'sans' }] : []),
  ];
  const max = Math.max(1, ...lignes.map((l) => l.bassins));

  return (
    <div
      className="bg-white/95 backdrop-blur rounded-xl px-4 py-3 w-full sm:w-[290px]"
      style={{ boxShadow: '0 4px 24px rgba(0,10,67,0.12)' }}
      onMouseLeave={() => onSurvolClasse(null)}
    >
      <div className="flex items-start gap-2 justify-between">
        <div>
          <p className="text-[0.8125rem] font-semibold text-primary leading-snug">
            {indicateur.titre}
            <span className="font-normal text-on-surface-var">, {libelleHorizon(indicateur, horizon)}</span>
          </p>
          {indicateur.sousTitre && <p className="text-[0.6875rem] text-on-surface-var leading-snug mt-0.5">{indicateur.sousTitre}</p>}
        </div>
        {indicateur.aide && <InfoSurvol texte={indicateur.aide} large position="haut" alignement="droite" />}
      </div>

      <ul className="flex flex-col mt-2">
        {lignes.map((l) => (
          <li key={l.cle}>
            <button
              type="button"
              onMouseEnter={() => onSurvolClasse(l.cle)}
              onFocus={() => onSurvolClasse(l.cle)}
              onBlur={() => onSurvolClasse(null)}
              className="w-full grid grid-cols-[12px_minmax(0,1fr)_56px_28px] items-center gap-2 py-[3px] rounded-md text-left transition-colors hover:bg-surface-low focus-visible:outline-2 focus-visible:outline-primary-container"
              style={{ opacity: classeActive != null && classeActive !== l.cle ? 0.5 : 1 }}
              aria-label={`${l.label} : ${l.bassins} bassin${l.bassins > 1 ? 's' : ''}`}
            >
              <span className="w-3 h-3 rounded-[3px]" style={{ background: l.couleur }} />
              <span className="text-[0.75rem] text-on-surface leading-tight">{insecable(l.label)}</span>
              <span className="h-1.5 rounded-full bg-surface-high overflow-hidden">
                <span className="block h-full rounded-full" style={{ width: `${(l.bassins / max) * 100}%`, background: '#44474f', opacity: 0.55 }} />
              </span>
              <span className="text-[0.6875rem] text-on-surface-var tabular-nums text-right">{l.bassins}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="text-[0.625rem] text-on-surface-var mt-1.5">Nombre de bassins du territoire par classe. Survolez une classe pour la repérer.</p>
    </div>
  );
}

// Une unité ne passe jamais seule à la ligne (« 20 % », « 2,5 °C »)
function insecable(texte) {
  return texte.replace(/ (%|°C|€|mm|jours)/g, '\u00a0$1');
}
