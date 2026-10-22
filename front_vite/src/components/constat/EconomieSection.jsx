// Chapitre 4 : les enjeux économiques de l'eau. Deux colonnes : ce que coûte
// l'eau (prix, évolution, coût caché) et ce que coûte son manque (rappel des
// restrictions, impacts concrets pour la grande famille de secteur de
// l'établissement, déduite de son code NAF).

import { useEffect, useState } from 'react';
import { fetchRestrictionsHistorique } from '../../utils/api';
import {
  COUT_CACHE, IMPACTS_GENERIQUES, familleSecteur, fmtNombre, projectionRestrictions, syntheseRestrictions,
} from '../../utils/constatMessages';
import { Chapitre, InfoSurvol, Surligne } from './ConstatUI';

const ICONES_COUT = {
  energie: <path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8L9 1.5Z" />,
  traitement: <path d="M2.5 3h11L9.5 8.5v5L6.5 12V8.5L2.5 3Z" />,
  rejets: <path d="M8 2v7M4.5 6 8 9.5 11.5 6M2.5 13.5h11" />,
  pertes: <path d="M8 2c2 2.6 3.2 4.4 3.2 5.9a3.2 3.2 0 0 1-6.4 0C4.8 6.4 6 4.6 8 2ZM4 14h1.5M7.25 14h1.5M10.5 14H12" />,
};

export default function EconomieSection({ territoire: t, entreprise }) {
  return (
    <Chapitre
      id="chapitre-economie"
      numero="4"
      surtitre="Les enjeux économiques de l'eau"
      titre={<>L'eau a un prix, <Surligne ton="alerte">son manque aussi</Surligne></>}
      accroche="Pour une entreprise, l'eau pèse deux fois : par ce qu'elle coûte quand on l'utilise, et par ce que coûte son absence quand elle vient à manquer."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 lg:divide-x lg:divide-surface-high">
        <div id="economie-cout" className="lg:pr-8 scroll-mt-20 min-[1440px]:scroll-mt-6">
          <CoutEau territoire={t} />
        </div>
        <div id="economie-manque" className="lg:pl-8 scroll-mt-20 min-[1440px]:scroll-mt-6">
          <CoutManque territoire={t} entreprise={entreprise} />
        </div>
      </div>
    </Chapitre>
  );
}

function TitreColonne({ numero, children }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[0.9375rem] font-black text-white shrink-0"
        style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
      >
        {numero}
      </span>
      <h3 className="text-[1.125rem] sm:text-[1.25rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.015em' }}>
        {children}
      </h3>
    </div>
  );
}

// ─── Le coût de l'eau ────────────────────────────────────────────────────────

const AIDE_PRELEVEMENT = "Si vous prélevez vous-même (forage, rivière), vous payez une redevance de prélèvement à l'agence de l'eau.";
const AIDE_PRIX = `Prix du service d'eau potable et d'assainissement sur le territoire. ${AIDE_PRELEVEMENT}`;
const AIDE_PRIX_NON_COLLECTIF = (
  "Prix du service d'eau potable sur le territoire, où l'assainissement est surtout non collectif "
  + `(installations individuelles, à la charge de chacun). ${AIDE_PRELEVEMENT}`
);

function CoutEau({ territoire: t }) {
  const evo = t?.water_price?.evolution;
  const rep = t?.water_price?.current_repartition;
  const actuel = evo?.['2024'];
  // Sans assainissement collectif, le prix ne couvre que l'eau potable
  const nonCollectif = t?.water_price?.assainissement === 'non collectif';

  return (
    <div className="flex flex-col gap-6">
      <TitreColonne numero="1">Le coût de l'eau</TitreColonne>

      {actuel != null ? (
        <div className="flex flex-col gap-3">
          <p className="text-[0.9375rem] font-bold text-primary">Prix de l'eau dans votre territoire</p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-8">
            <div className="flex-1 bg-surface-low rounded-xl px-4 py-3 flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5">
                <p className="text-[0.75rem] text-on-surface-var">
                  {nonCollectif ? "Prix moyen de l'eau potable en 2024" : "Prix moyen de l'eau en 2024"}
                </p>
                <InfoSurvol texte={nonCollectif ? AIDE_PRIX_NON_COLLECTIF : AIDE_PRIX} large alignement="gauche" />
              </div>
              <p className="leading-none">
                <span className="text-[2rem] font-black text-primary tabular-nums">{fmtNombre(actuel, 2)}</span>
                <span className="text-[0.875rem] font-medium text-on-surface-var ml-1">€/m³</span>
              </p>
              {rep?.water_production != null && rep?.wastewater != null && (
                <p className="text-[0.75rem] text-on-surface-var tabular-nums">
                  Dont {`${fmtNombre(rep.water_production, 2)}\u00a0€`} pour l'eau potable et {`${fmtNombre(rep.wastewater, 2)}\u00a0€`} pour l'assainissement.
                </p>
              )}
            </div>
            <BarresPrix evo={evo} />
          </div>
        </div>
      ) : (
        <p className="text-[0.8125rem] text-on-surface-var">Prix de l'eau indisponible pour ce territoire.</p>
      )}

      <div className="flex flex-col gap-3 pt-5 border-t border-surface-high">
        <p className="text-[0.9375rem] font-bold text-primary">Le coût caché de l'eau</p>
        <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">
          La facture ne dit pas tout. Chaque mètre cube utilisé entraîne d'autres coûts, qui s'ajoutent à son prix.
        </p>
        <ul className="grid grid-cols-2 gap-2">
          {COUT_CACHE.map((c, i) => (
            <li key={c.cle} className="bg-surface-low rounded-xl px-3 py-2.5 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-white" style={{ color: '#051b71' }}>
                <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {ICONES_COUT[c.cle]}
                </svg>
              </span>
              <span className="min-w-0 flex-1 text-[0.8125rem] font-semibold text-on-surface leading-snug">{c.titre}</span>
              <InfoSurvol texte={c.texte} alignement={i % 2 ? 'droite' : 'gauche'} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Trois barres pour voir la hausse d'un coup d'œil : 2024 en marine, les
// projections en orange, du plus clair au plus foncé.
const BARRES_PRIX = [
  { h: '2024', couleur: '#051b71' },
  { h: '2030', couleur: 'rgba(220,100,9,0.55)' },
  { h: '2050', couleur: '#dc6409' },
];

function BarresPrix({ evo }) {
  const barres = BARRES_PRIX.filter((b) => evo[b.h] != null);
  const max = Math.max(...barres.map((b) => evo[b.h]));
  return (
    <div className="flex items-end gap-3 shrink-0" role="img" aria-label={barres.map((b) => `${b.h} : ${fmtNombre(evo[b.h], 2)} €/m³`).join(', ')}>
      {barres.map((b) => (
        <div key={b.h} className="flex flex-col items-center gap-1.5 w-12">
          <span className="text-[0.75rem] font-bold text-primary tabular-nums">{fmtNombre(evo[b.h], 2)}</span>
          <span className="w-9 rounded-t-md" style={{ height: `${Math.round((evo[b.h] / max) * 84)}px`, background: b.couleur }} />
          <span className="text-[0.6875rem] text-on-surface-var tabular-nums">{b.h}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Le coût du manque d'eau ─────────────────────────────────────────────────

const AIDE_PROJECTION = (
  "Moyenne de votre commune, augmentée de l'évolution projetée sur votre bassin pour les eaux superficielles "
  + "(jours au niveau alerte ou plus), à pratiques préfectorales constantes. La fourchette reprend l'écart entre "
  + 'les cinq modèles climatiques.'
);

function CoutManque({ territoire: t, entreprise }) {
  const commune = entreprise?.codecommuneetablissement;
  const famille = familleSecteur(entreprise?.activiteprincipaleetablissement);
  const impacts = famille?.impacts ?? IMPACTS_GENERIQUES;
  const [historique, setHistorique] = useState(null);

  useEffect(() => {
    if (!commune) return undefined;
    let annule = false;
    fetchRestrictionsHistorique(commune)
      .then((h) => { if (!annule) setHistorique(h); })
      .catch(() => {});
    return () => { annule = true; };
  }, [commune]);

  const synthese = syntheseRestrictions(historique);
  // Projection 2050 : écart du bassin appliqué à la moyenne communale
  const projection = projectionRestrictions(t, synthese?.moyenneJours);
  const jours2050 = projection?.jours ?? null;

  const allerAuStress = (e) => {
    const el = document.getElementById('chapitre-stress');
    if (!el) return;
    e.preventDefault();
    const doux = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'start' });
  };

  return (
    <div className="flex flex-col gap-6">
      <TitreColonne numero="2">Le coût du manque d'eau</TitreColonne>

      <div className="flex flex-col gap-3">
        {synthese && synthese.nbTouchees > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-low rounded-xl px-4 py-3">
                <p className="text-[0.75rem] text-on-surface-var">Aujourd'hui</p>
                <p className="leading-none mt-1.5">
                  <span className="text-[1.75rem] font-black text-primary tabular-nums">{synthese.moyenneJours}</span>
                  <span className="text-[0.8125rem] text-on-surface-var ml-1">jours / an</span>
                </p>
                <p className="text-[0.6875rem] text-on-surface-var mt-1.5">Moyenne {synthese.debut}-{synthese.fin} sur votre commune</p>
              </div>
              {jours2050 != null && (
                <div className="bg-surface-low rounded-xl px-4 py-3">
                  <p className="text-[0.75rem] text-on-surface-var">En 2050</p>
                  <p className="leading-none mt-1.5">
                    <span className="text-[1.75rem] font-black tabular-nums" style={{ color: jours2050 > synthese.moyenneJours ? '#964900' : '#000a43' }}>
                      {jours2050}
                    </span>
                    <span className="text-[0.8125rem] text-on-surface-var ml-1">jours / an</span>
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    <span className="text-[0.6875rem] text-on-surface-var">
                      {projection.fourchette && projection.fourchette[0] !== projection.fourchette[1]
                        ? `Projection, entre ${projection.fourchette[0]} et ${projection.fourchette[1]} jours`
                        : 'Projection'}
                    </span>
                    <InfoSurvol texte={AIDE_PROJECTION} large position="haut" />
                  </div>
                </div>
              )}
            </div>
            {jours2050 != null && jours2050 > synthese.moyenneJours && (
              <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">
                Les restrictions deviendraient plus fréquentes et plus longues, avec un impact direct sur les usages de l'eau.
              </p>
            )}
          </>
        ) : (
          <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">
            Votre commune a connu peu de restrictions ces dernières années, mais le manque d'eau reste un risque à anticiper.
          </p>
        )}
        <a
          href="#chapitre-stress"
          onClick={allerAuStress}
          className="w-fit text-[0.8125rem] font-semibold text-primary underline decoration-surface-highest underline-offset-4 hover:decoration-primary transition-colors"
        >
          Voir le détail des arrêtés sécheresse
        </a>
      </div>

      <div className="flex flex-col gap-3 pt-5 border-t border-surface-high">
        <p className="text-[0.9375rem] font-bold text-primary">
          {famille ? `Ce que ça peut coûter pour ${famille.label}` : 'Ce que ça peut coûter à votre activité'}
        </p>
        <ul className="flex flex-col gap-2">
          {impacts.map((impact) => (
            <li key={impact.titre} className="bg-surface-low rounded-xl px-3.5 py-2.5 flex items-center gap-2.5">
              <span className="min-w-0 flex-1 text-[0.8125rem] font-semibold text-on-surface leading-snug">{impact.titre}</span>
              <InfoSurvol texte={impact.texte} large alignement="droite" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
