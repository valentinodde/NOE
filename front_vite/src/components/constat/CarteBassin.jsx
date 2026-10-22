// Carte d'ouverture de l'onglet Constat : le bassin versant en grand sur fond
// IGN, le nom du bassin en haut à gauche et les températures en bandeau posé
// sur la carte (sous la carte sur mobile, pour ne pas la masquer).

import { useMemo, useState } from 'react';
import {
  HORIZON_LABELS, PERIODE_REFERENCE, SCENARIO, analyseTemperature, fmtNombre, fmtSigne,
} from '../../utils/constatMessages';
import CarteIGN from './CarteIGN';
import { InfoSurvol } from './ConstatUI';

const AIDE_BASSIN = "Un bassin versant est le territoire dont toutes les eaux (pluie, ruissellement, nappes) convergent vers un même cours d'eau. C'est l'échelle à laquelle se partage la ressource entre tous ses usagers."

// Marges de cadrage : laissent la place au cartouche du nom et au bandeau
const MARGES_LARGE = { top: 70, bottom: 150, left: 48, right: 64 };
const MARGES_ETROIT = { top: 130, bottom: 24, left: 24, right: 24 };

export default function CarteBassin({ territoire: t, entreprise: e }) {
  const bassin = t?.bassin;
  const temperature = analyseTemperature(t);
  const [marges] = useState(() => (window.matchMedia('(min-width: 640px)').matches ? MARGES_LARGE : MARGES_ETROIT));

  const lat = e?.latitude;
  const lon = e?.longitude;
  const marqueurs = useMemo(
    () => (lat && lon ? [{ type: 'etablissement', lon, lat, label: 'Votre établissement' }] : []),
    [lat, lon],
  );

  return (
    <section
      id="chapitre-bassin"
      className="bg-surface-lowest rounded-2xl overflow-hidden scroll-mt-20 min-[1440px]:scroll-mt-6"
      style={{ boxShadow: '0 0 40px rgba(0,10,67,0.08)' }}
    >
      <div className="relative">
        <CarteIGN bassin={bassin} marqueurs={marqueurs} marges={marges} className="h-[420px] sm:h-[560px]" />

        {/* Nom du bassin */}
        <div
          className="absolute top-4 left-4 z-10 max-w-[calc(100%-5rem)] sm:max-w-sm rounded-xl px-4 py-3 bg-white/95 backdrop-blur"
          style={{ boxShadow: '0 4px 24px rgba(0,10,67,0.12)' }}
        >
          <div className="flex items-center gap-2">
            <p className="text-[0.75rem] font-semibold text-on-surface-var">
              Votre bassin versant
            </p>
            <InfoSurvol texte={AIDE_BASSIN} large alignement="gauche" />
          </div>
          <p className="text-[1.125rem] font-bold text-primary leading-snug mt-0.5" style={{ letterSpacing: '-0.01em' }}>
            {bassin?.nom ?? 'Bassin non renseigné'}
          </p>
          <div className="flex flex-col gap-0.5 mt-1 text-[0.75rem] text-on-surface-var">
            {bassin?.cours_eau_principal && (
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-[2px] rounded-full shrink-0" style={{ background: '#3b9fd4' }} />
                <span>
                  Cours d'eau principal : <strong className="font-semibold text-on-surface">{bassin.cours_eau_principal}</strong>
                </span>
              </span>
            )}
            {bassin?.surface_km2 && (
              <span className="italic">
                {fmtNombre(bassin.surface_km2)} km²
                {bassin.region_hydrographique && `, ${bassin.region_hydrographique}`}
              </span>
            )}
          </div>
        </div>

        {/* Bandeau température : posé sur la carte à partir de 640 px */}
        {temperature && (
          <div className="sm:absolute sm:bottom-4 sm:left-4 sm:right-16 z-10">
            <BandeauTemperature temperature={temperature} />
          </div>
        )}
      </div>
    </section>
  );
}

function BandeauTemperature({ temperature }) {
  const aideReference = (
    `La période de référence ${PERIODE_REFERENCE} est la moyenne climatique sur laquelle s'appuient les projections françaises (DRIAS, Explore2) : `
    + 'elle sert de point de comparaison pour mesurer le réchauffement déjà observé et à venir. '
    + `Les valeurs 2030 et 2050 sont des projections selon le scénario ${SCENARIO} du GIEC, `
    + "celui d'émissions de gaz à effet de serre élevées, sans politique climatique supplémentaire."
  );
  const cases = [
    {
      label: `Aujourd'hui (${HORIZON_LABELS.actuel})`,
      valeur: `${fmtNombre(temperature.actuel, 1)}\u00a0°C`,
      detail: temperature.ecarts.actuel != null ? `${fmtSigne(temperature.ecarts.actuel, '°C', 1)} vs ${PERIODE_REFERENCE}` : null,
    },
    { label: '2030', valeur: fmtSigne(temperature.ecarts['2030'], '°C', 1), accent: true },
    { label: '2050', valeur: fmtSigne(temperature.ecarts['2050'], '°C', 1), accent: true },
  ];

  return (
    <div
      className="bg-white/95 backdrop-blur sm:rounded-xl px-5 py-4 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-6 gap-y-3 items-center"
      style={{ boxShadow: '0 4px 24px rgba(0,10,67,0.12)' }}
    >
      <div>
        <div className="flex items-center gap-2">
          <p className="text-[0.75rem] font-semibold text-on-surface-var">
            Température moyenne annuelle
          </p>
          <InfoSurvol texte={aideReference} large position="haut" alignement="gauche" />
        </div>
        {temperature.reference != null && (
          <p className="text-[0.75rem] text-on-surface-var mt-0.5">
            Écarts à la période {PERIODE_REFERENCE} ({fmtNombre(temperature.reference, 1)}&nbsp;°C)
          </p>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {cases.map((c) => (
          <div key={c.label} className="bg-surface-low rounded-lg px-3 py-2">
            <p className="text-[0.625rem] text-on-surface-var uppercase tracking-widest">{c.label}</p>
            <p
              className="text-[1.125rem] sm:text-[1.25rem] font-bold leading-none mt-1 tabular-nums"
              style={{ color: c.accent ? '#964900' : '#000a43' }}
            >
              {c.valeur}
            </p>
            {c.detail && <p className="text-[0.625rem] text-on-surface-var mt-1 tabular-nums">{c.detail}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
