// Version courte des restrictions sécheresse : un bandeau sur la situation
// du moment, puis la moyenne des dernières années à côté d'une barre par année.
// Le détail complet (zones, arrêtés, calendrier mensuel) se déplie à la demande.

import { useEffect, useId, useState } from 'react';
import { fetchRestrictionsHistorique, fetchVigieauZones } from '../../utils/api';
import { syntheseRestrictions } from '../../utils/constatMessages';
import DroughtRestrictions from '../DroughtRestrictions';
import { NIVEAUX, getNiveau } from '../../utils/niveauxSecheresse';

const ECHELLE = ['vigilance', 'alerte', 'alerte_renforcee', 'crise'];

// Ce que chaque niveau implique, d'après le guide national de mise en œuvre
// des restrictions (ministère de la Transition écologique, 2026, annexe 3)
const EXPLICATIONS = {
  vigilance: "Pas encore de restriction : appel à économiser l'eau.",
  alerte: 'Premières restrictions : arrosage, lavage, prélèvements limités.',
  alerte_renforcee: "Restrictions plus fortes : les prélèvements peuvent être réduits de moitié.",
  crise: 'Seuls les usages prioritaires restent permis : eau potable, santé, sécurité.',
};

const URL_VIGIEAU = 'https://vigieau.gouv.fr';

// La ressource dite simplement : où l'eau est prélevée
const RESSOURCES = {
  SUP: 'les prélèvements en rivière',
  SOU: 'les prélèvements en nappe',
  AEP: "l'eau potable",
};
const RESSOURCES_COURT = { SUP: 'rivières', SOU: 'nappes', AEP: 'eau potable' };

// `definition` : texte d'explication, réuni avec les quatre niveaux sous un
// même trait vertical
export default function RestrictionsResume({ entreprise, definition }) {
  const lat = entreprise?.latitude;
  const lon = entreprise?.longitude;
  const commune = entreprise?.codecommuneetablissement;
  const naf = entreprise?.activiteprincipaleetablissement;

  // Le résultat garde la clé de la requête qui l'a produit : tant qu'elle
  // diffère de la clé courante, on est en cours de chargement.
  const cle = [lat, lon, commune, naf].join('|');
  const [resultat, setResultat] = useState(null);
  const [detail, setDetail] = useState(false);
  const idDetail = useId();

  useEffect(() => {
    let annule = false;

    const requetes = [
      lat != null && lon != null
        ? fetchVigieauZones({ lat, lon, commune, naf }).catch(() => null)
        : Promise.resolve(null),
      commune ? fetchRestrictionsHistorique(commune).catch(() => null) : Promise.resolve(null),
    ];

    Promise.all(requetes).then(([zones, histo]) => {
      if (!annule) setResultat({ cle: [lat, lon, commune, naf].join('|'), zones, histo });
    });

    return () => { annule = true; };
  }, [lat, lon, commune, naf]);

  const charge = resultat?.cle === cle;
  const zones = charge ? resultat.zones : null;

  const explication = (
    <div className="flex gap-3 items-stretch">
      <span className="w-1 rounded-full bg-tertiary shrink-0" aria-hidden="true" />
      <div className="flex-1 min-w-0 flex flex-col gap-3">
        {definition}
        <Niveaux actuel={zones?.concerne ? zones.niveau_max : null} />
      </div>
    </div>
  );

  if (!charge) {
    return (
      <div className="flex flex-col gap-3">
        {explication}
        <p className="text-[0.8125rem] text-on-surface-var">Consultation des arrêtés sécheresse…</p>
      </div>
    );
  }

  const synthese = syntheseRestrictions(resultat.histo);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        {explication}
        <EnCeMoment zones={zones} />
      </div>
      {synthese ? <Historique synthese={synthese} /> : (
        <p className="text-[0.8125rem] text-on-surface-var">Pas d'historique de restrictions pour cette commune.</p>
      )}

      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={() => setDetail((d) => !d)}
          aria-expanded={detail}
          aria-controls={idDetail}
          className="group self-start flex items-center gap-2 text-[0.8125rem] font-semibold text-primary pl-4 pr-3 py-2 rounded-xl bg-surface-low hover:bg-surface-high transition-colors focus-visible:outline-2 focus-visible:outline-primary-container"
        >
          {detail ? 'Masquer le détail des arrêtés' : 'Voir le détail des arrêtés et les usages restreints'}
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform duration-300 motion-reduce:transition-none ${detail ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path d="m3.5 5.25 3.5 3.5 3.5-3.5" />
          </svg>
        </button>

        {detail && (
          <div id={idDetail}>
            <DroughtRestrictions entreprise={entreprise} />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Les quatre niveaux, expliqués en une ligne ──────────────────────────────

// Le niveau en vigueur aujourd'hui est teinté de sa couleur
function Niveaux({ actuel }) {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2" aria-label="Les niveaux d'un arrêté sécheresse, du moins au plus grave">
      {ECHELLE.map((c) => {
        const n = NIVEAUX[c];
        const enCours = c === actuel;
        return (
          <li
            key={c}
            aria-current={enCours ? 'true' : undefined}
            className="rounded-xl px-3.5 py-3 flex flex-col gap-1"
            style={{ background: enCours ? n.bg : '#f1f3fc' }}
          >
            <span className="flex items-center gap-2 text-[0.8125rem] font-bold" style={{ color: enCours ? n.color : '#000a43' }}>
              <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: n.fill }} aria-hidden="true" />
              {n.label}
            </span>
            <span className="text-[0.75rem] text-on-surface-var leading-snug">{EXPLICATIONS[c]}</span>
          </li>
        );
      })}
    </ol>
  );
}

// ─── En ce moment : bandeau sur toute la largeur ─────────────────────────────

function dateCourte(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  const options = { day: 'numeric', month: 'long', timeZone: 'UTC' };
  if (d.getUTCFullYear() !== new Date().getFullYear()) options.year = 'numeric';
  return d.toLocaleDateString('fr-FR', options);
}

function EnCeMoment({ zones }) {
  const code = zones?.concerne ? zones.niveau_max : null;
  const enVigueur = code != null && code !== 'pas_restriction';
  const niveau = enVigueur ? getNiveau(code) : null;
  // La zone qui porte le niveau le plus sévère
  const zone = enVigueur
    ? [...(zones.zones ?? [])].sort((a, b) => (b.niveau_rang ?? 0) - (a.niveau_rang ?? 0))[0]
    : null;
  const fin = dateCourte(zone?.arrete?.date_fin);
  const precision = zone ? [zone.nom, RESSOURCES_COURT[zone.type]].filter(Boolean).join(', ') : '';

  const couleur = zones == null ? '#94a3b8' : enVigueur ? niveau.color : '#16a34a';
  const fond = zones == null ? '#f1f3fc' : enVigueur ? niveau.bg : '#f0fdf4';

  return (
    <div className="rounded-xl px-3 py-2 flex flex-wrap items-center gap-x-3 gap-y-1.5" style={{ background: fond }}>
      <span className="flex items-center gap-2 shrink-0 rounded-full bg-white pl-2.5 pr-3 py-0.5 text-[0.75rem] font-bold" style={{ color: couleur }}>
        <span className="relative flex w-2 h-2" aria-hidden="true">
          {enVigueur && <span className="absolute inset-0 rounded-full opacity-60 motion-safe:animate-ping" style={{ background: couleur }} />}
          <span className="relative w-2 h-2 rounded-full" style={{ background: couleur }} />
        </span>
        En ce moment dans votre territoire
      </span>
      <p className="text-[0.8125rem] text-on-surface leading-snug min-w-0">
        {zones == null ? (
          'Situation du jour indisponible.'
        ) : enVigueur ? (
          <>
            <strong className="font-extrabold" style={{ color: niveau.color }}>{niveau.label}</strong>
            {precision && <span className="text-on-surface-var">{` (${precision})`}</span>}
            {fin && <span className="text-on-surface-var">{`, jusqu'au ${fin}`}</span>}
          </>
        ) : (
          <strong className="font-semibold">Aucune restriction d'eau</strong>
        )}
      </p>
      <a
        href={zones?.source?.url ?? URL_VIGIEAU}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto shrink-0 flex items-center gap-1 text-[0.75rem] font-semibold text-primary underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-primary-container rounded"
      >
        Source : VigiEau
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4.5 2.5h5v5M9.5 2.5 3 9" />
        </svg>
        <span className="sr-only">(nouvel onglet)</span>
      </a>
    </div>
  );
}

// ─── Les dernières années : la moyenne, à côté d'une barre par année ─────────

function Historique({ synthese: s }) {
  const ressource = RESSOURCES[s.ressource.code] ?? s.ressource.label?.toLowerCase();
  const max = Math.max(...s.barres.map((b) => b.total), 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] gap-4 md:gap-6 items-stretch">
      <div className="bg-surface-low rounded-xl px-5 py-5 flex flex-col justify-center gap-2">
        <p className="leading-none tabular-nums">
          <span className="text-[2.25rem] font-black text-primary">{s.moyenneJours}</span>
          <span className="text-[1.125rem] font-bold text-on-surface-var"> jours</span>
        </p>
        <p className="text-[0.8125rem] text-on-surface leading-snug">
          de restriction par an en moyenne, de {s.debut} à {s.fin}
        </p>
        <p className="text-[0.6875rem] text-on-surface-var leading-snug">
          Dans votre commune, pour {ressource}, la ressource la plus souvent restreinte.
        </p>
      </div>

      <div className="flex flex-col gap-2 min-w-0">
        <p className="text-[0.75rem] font-semibold text-on-surface">Jours de restriction, année par année</p>
        <ul
          className="flex items-end gap-1 sm:gap-2 h-24 mt-3"
          aria-label="Jours de restriction par année, couleur du niveau le plus sévère atteint"
        >
          {s.barres.map((b) => (
            <li key={b.annee} className="flex-1 h-full flex items-end justify-center">
              {/* Hauteur proportionnelle à l'année la plus touchée, nombre posé au-dessus */}
              <span
                className="relative w-full max-w-[28px] rounded-t-md"
                aria-hidden="true"
                title={`${b.annee} : ${b.total} jours, niveau maximal ${getNiveau(b.niveau).label.toLowerCase()}`}
                style={{
                  height: b.total ? `${Math.max(4, (b.total / max) * 100)}%` : '2px',
                  background: getNiveau(b.niveau).fill,
                }}
              >
                {b.total > 0 && (
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-[0.625rem] font-semibold text-on-surface-var tabular-nums">
                    {b.total}
                  </span>
                )}
              </span>
              <span className="sr-only">{`${b.annee} : ${b.total} jours, niveau maximal ${getNiveau(b.niveau).label.toLowerCase()}`}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-1 sm:gap-2" aria-hidden="true">
          {s.barres.map((b) => (
            <span key={b.annee} className="flex-1 text-center text-[0.625rem] text-on-surface-var tabular-nums">
              <span className="hidden lg:inline">{b.annee}</span>
              <span className="lg:hidden">{String(b.annee).slice(2)}</span>
            </span>
          ))}
        </div>
        <p className="text-[0.6875rem] text-on-surface-var mt-1">La couleur indique le niveau le plus grave atteint dans l'année.</p>
      </div>
    </div>
  );
}
