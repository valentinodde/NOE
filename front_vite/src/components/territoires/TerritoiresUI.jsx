// Briques d'interface de la page Vision territoriale : tuile chiffrée,
// barre de répartition, activités dépendantes de l'eau.

import { useState } from 'react';
import { fmtGrand, fmtPct } from '../../utils/territoiresIndicateurs';

export function Carte({ className = '', children }) {
  return (
    <section className={`bg-surface-lowest rounded-2xl ${className}`} style={{ boxShadow: '0 0 40px rgba(0,10,67,0.06)' }}>
      {children}
    </section>
  );
}

export function Etiquette({ children }) {
  return <p className="text-[0.75rem] font-semibold text-on-surface-var">{children}</p>;
}

// Tuile : un libellé, la valeur actuelle et la valeur 2050.
// `defavorable` : la valeur 2050 aggrave la situation (couleur ambre).
export function Tuile({ label, detail, actuel, futur, defavorable, aide }) {
  return (
    <div className="bg-surface-low rounded-xl px-4 py-3 flex flex-col gap-2">
      <div className="flex items-start gap-2 justify-between">
        <p className="text-[0.75rem] font-semibold text-on-surface leading-snug">{label}</p>
        {aide}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-[0.6875rem] text-on-surface-var">Aujourd'hui</p>
          <p className="text-[1.25rem] font-bold text-primary leading-tight tabular-nums">{actuel}</p>
        </div>
        {futur != null && (
          <div>
            <p className="text-[0.6875rem] text-on-surface-var">En 2050</p>
            <p className="text-[1.25rem] font-bold leading-tight tabular-nums" style={{ color: defavorable ? '#964900' : '#000a43' }}>
              {futur}
            </p>
          </div>
        )}
      </div>
      {detail && <p className="text-[0.6875rem] text-on-surface-var leading-snug">{detail}</p>}
    </div>
  );
}

// Barre empilée à 100 %, segments séparés de 2 px. `segments` :
// [{ cle, label, couleur, valeur, texte }]. Le survol d'un segment affiche
// son texte sous les barres (via onSurvol).
export function BarreEmpilee({ label, segments, onSurvol, actif }) {
  const total = segments.reduce((s, x) => s + (x.valeur || 0), 0);
  return (
    <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-2">
      <span className="text-[0.75rem] text-on-surface-var tabular-nums">{label}</span>
      <div className="flex h-4 gap-[2px] rounded-[4px] overflow-hidden bg-surface-high" onMouseLeave={() => onSurvol?.(null)}>
        {total > 0 && segments.filter((s) => s.valeur > 0).map((s) => (
          <span
            key={s.cle}
            className="h-full transition-opacity"
            style={{
              width: `${(s.valeur / total) * 100}%`,
              minWidth: 2,
              background: s.couleur,
              opacity: actif != null && actif !== s.cle ? 0.35 : 1,
            }}
            onMouseEnter={() => onSurvol?.(s.cle)}
            title={s.texte}
          />
        ))}
      </div>
    </div>
  );
}

export function LegendeCouleurs({ elements }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1">
      {elements.map((e) => (
        <span key={e.label} className="flex items-center gap-1.5 text-[0.6875rem] text-on-surface-var">
          <span className="w-2.5 h-2.5 rounded-[3px] shrink-0" style={{ background: e.couleur }} />
          {e.label}
        </span>
      ))}
    </div>
  );
}

// Sélecteur à deux ou trois options (mode switcher du design system)
export function Bascule({ options, actif, onChange, label }) {
  return (
    <div className="flex rounded-xl overflow-hidden shrink-0" style={{ border: '1px solid #e0e2eb' }} role="group" aria-label={label}>
      {options.map((o, i) => (
        <button
          key={o.cle}
          type="button"
          onClick={() => onChange(o.cle)}
          aria-pressed={actif === o.cle}
          className="px-2.5 py-1 text-[0.6875rem] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary-container"
          style={{
            background: actif === o.cle ? '#000a43' : '#ffffff',
            color: actif === o.cle ? '#ffffff' : '#44474f',
            borderRight: i < options.length - 1 ? '1px solid #e0e2eb' : 'none',
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

// ─── Activités dépendantes de l'eau ───────────────────────────────────────────

const DEPENDANCE = {
  3: { label: 'Forte', style: { background: 'rgba(150,73,0,0.12)', color: '#964900' } },
  2: { label: 'Significative', style: { background: '#e8eaf3', color: '#44474f' } },
};

export function Dependance({ score }) {
  const d = DEPENDANCE[score];
  if (!d) return null;
  return (
    <span className="text-[0.625rem] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap" style={d.style}>
      {d.label}
    </span>
  );
}

// `activite` : réponse de /territoires/activite
export function ActiviteDependante({ activite, chargement, erreur, nombre = 6 }) {
  const [tout, setTout] = useState(false);
  if (erreur) return <p className="text-[0.75rem] text-on-surface-var">Activité économique indisponible.</p>;
  if (chargement || !activite) return <p className="text-[0.75rem] text-on-surface-var">Chargement de l'activité…</p>;
  if (!activite.emplois) return <p className="text-[0.75rem] text-on-surface-var">Aucun emploi salarié recensé.</p>;

  const secteurs = tout ? activite.secteurs : activite.secteurs.slice(0, nombre);
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        <Chiffre label="Emplois salariés" valeur={fmtGrand(activite.emplois)} />
        <Chiffre label="Dépendance forte" valeur={fmtPct(activite.forte / activite.emplois)} detail={fmtGrand(activite.forte)} />
        <Chiffre label="Significative" valeur={fmtPct(activite.significative / activite.emplois)} detail={fmtGrand(activite.significative)} />
      </div>
      {secteurs.length > 0 && (
        <div className="flex flex-col">
          <p className="text-[0.6875rem] text-on-surface-var mb-1">Activités dépendantes qui emploient le plus</p>
          <ul className="flex flex-col divide-y divide-surface-high">
            {secteurs.map((s) => (
              <li key={s.naf} className="py-1.5 grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 items-center">
                <span className="text-[0.75rem] text-on-surface leading-snug truncate" title={`${s.naf} ${s.libelle ?? ''}`}>
                  {s.libelle ?? s.naf}
                </span>
                <span className="text-[0.75rem] font-semibold text-primary tabular-nums text-right">{fmtGrand(s.emplois)}</span>
                <span className="text-[0.625rem] text-on-surface-var font-mono">{s.naf}</span>
                <span className="justify-self-end"><Dependance score={s.score} /></span>
              </li>
            ))}
          </ul>
          {activite.secteurs.length > nombre && (
            <button
              type="button"
              onClick={() => setTout((t) => !t)}
              className="self-start mt-1 text-[0.6875rem] font-medium text-primary-container hover:underline"
            >
              {tout ? 'Afficher moins' : `Afficher les ${activite.secteurs.length} activités`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function Chiffre({ label, valeur, detail }) {
  return (
    <div className="bg-surface-low rounded-lg px-3 py-2">
      <p className="text-[0.6875rem] text-on-surface-var leading-tight">{label}</p>
      <p className="text-[1rem] font-bold text-primary leading-tight mt-1 tabular-nums">{valeur}</p>
      {detail && <p className="text-[0.625rem] text-on-surface-var tabular-nums">{detail} emplois</p>}
    </div>
  );
}
