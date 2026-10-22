// Panneau de synthèse d'un territoire (France, région ou département) :
// chiffres clés aujourd'hui et en 2050, répartition des bassins par niveau
// de stress, activités dépendantes de l'eau qui y emploient le plus.

import { useMemo, useState } from 'react';
import { HORIZONS, HORIZON_LABELS, LIBELLES_CLASSE, fmtNombre } from '../../utils/constatMessages';
import { INDICATEURS_PAR_CLE, fmtGrand, fmtPct, repartition, syntheseTerritoire } from '../../utils/territoiresIndicateurs';
import { InfoSurvol } from '../constat/ConstatUI';
import { ActiviteDependante, Bascule, BarreEmpilee, Etiquette, LegendeCouleurs, Tuile } from './TerritoiresUI';

const STRESS = INDICATEURS_PAR_CLE.stress;

const AIDE_EMPLOIS = (
  "Emplois salariés des activités notées 3 sur 3 pour leur dépendance à la quantité d'eau dans le référentiel sectoriel, "
  + 'situés dans un bassin en stress très fort ou critique en 2050. Estimés au milieu de la tranche d\'effectif INSEE de chaque établissement.'
);

export default function PanneauTerritoire({ territoire, bassins, activite }) {
  const s = useMemo(() => syntheseTerritoire(bassins), [bassins]);
  const [mesure, setMesure] = useState('population');
  const [survol, setSurvol] = useState(null);

  const barres = useMemo(() => HORIZONS.map((h) => {
    const r = repartition(STRESS, bassins, h);
    return {
      h,
      segments: [...r.classes.map((c, i) => ({ ...c, cle: i })), { ...r.sansDonnee, cle: 'sans' }].map((c) => ({
        cle: c.cle,
        label: c.label,
        couleur: c.couleur,
        valeur: c[mesure === 'population' ? 'population' : 'bassins'],
        texte: `${c.label} en ${HORIZON_LABELS[h]} : ${c.bassins} bassin${c.bassins > 1 ? 's' : ''}, ${fmtGrand(c.population)} habitants`,
      })),
    };
  }), [bassins, mesure]);

  const texteSurvol = survol
    ? barres.find((b) => b.h === survol.h)?.segments.find((x) => x.cle === survol.cle)?.texte
    : null;

  return (
    <div className="flex flex-col gap-6">
      <header>
        <Etiquette>Territoire</Etiquette>
        <h2 className="text-[1.25rem] font-bold text-primary leading-snug mt-0.5" style={{ letterSpacing: '-0.01em' }}>
          {territoire.nom}
        </h2>
        <p className="text-[0.75rem] text-on-surface-var mt-1">
          {fmtNombre(s.bassins)} bassins versants · {fmtGrand(s.population)} habitants · {fmtNombre(Math.round(s.surface))} km²
        </p>
      </header>

      <div className="flex flex-col gap-2.5">
        <Tuile
          label="Habitants dans un bassin en stress très fort ou critique"
          actuel={fmtPct(s.stress.actuel.part)}
          futur={fmtPct(s.stress['2050'].part)}
          defavorable={(s.stress['2050'].part ?? 0) > (s.stress.actuel.part ?? 0)}
          detail={`${s.stress.actuel.bassins} bassins aujourd'hui, ${s.stress['2050'].bassins} en 2050`}
        />
        <Tuile
          label="Jours de restriction sécheresse par an"
          actuel={s.restrictions.actuel != null ? fmtNombre(s.restrictions.actuel) : '-'}
          futur={s.restrictions['2050'] != null ? fmtNombre(s.restrictions['2050']) : '-'}
          defavorable={(s.restrictions['2050'] ?? 0) > (s.restrictions.actuel ?? 0)}
          detail="Moyenne vécue par un habitant, eaux superficielles, niveau alerte ou plus"
        />
        {s.emplois.forte > 0 && (
          <div className="bg-surface-low rounded-xl px-4 py-3 flex flex-col gap-1">
            <div className="flex items-start gap-2 justify-between">
              <p className="text-[0.75rem] font-semibold text-on-surface leading-snug">
                Emplois très dépendants de l'eau dans un bassin en stress très fort ou critique en 2050
              </p>
              <InfoSurvol texte={AIDE_EMPLOIS} large alignement="droite" />
            </div>
            <p className="text-[1.25rem] font-bold leading-tight tabular-nums" style={{ color: '#964900' }}>
              {fmtGrand(s.emplois.forteEnStress2050)}
            </p>
            <p className="text-[0.6875rem] text-on-surface-var">
              Soit {fmtPct(s.emplois.part)} des {fmtGrand(s.emplois.forte)} emplois très dépendants de l'eau du territoire
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="text-[0.875rem] font-semibold text-on-surface">Niveau de stress hydrique</h3>
          <Bascule
            label="Mesure"
            actif={mesure}
            onChange={setMesure}
            options={[{ cle: 'population', label: 'Habitants' }, { cle: 'bassins', label: 'Bassins' }]}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          {barres.map((b) => (
            <BarreEmpilee
              key={b.h}
              label={HORIZON_LABELS[b.h]}
              segments={b.segments}
              actif={survol?.cle ?? null}
              onSurvol={(cle) => setSurvol(cle == null ? null : { cle, h: b.h })}
            />
          ))}
        </div>
        <p className="text-[0.6875rem] text-on-surface-var min-h-[1rem]" aria-live="polite">
          {texteSurvol ?? `Part ${mesure === 'population' ? 'des habitants' : 'des bassins'} du territoire par niveau.`}
        </p>
        <LegendeCouleurs elements={STRESS.classes.map((c) => ({ label: LIBELLES_CLASSE[c.cle], couleur: c.couleur })).reverse()} />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-[0.875rem] font-semibold text-on-surface">Activité économique et dépendance à l'eau</h3>
        <ActiviteDependante {...activite} />
      </div>

      <p className="text-[0.75rem] text-on-surface-var bg-surface-low rounded-xl px-4 py-3">
        Cliquez sur un bassin de la carte pour afficher sa fiche.
      </p>
    </div>
  );
}
