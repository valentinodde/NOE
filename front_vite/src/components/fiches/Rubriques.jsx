// Rubriques et petits éléments communs aux panneaux de la page Fiches
// solutions (fiche prestataire ou aide, mesure) : sources, relecture,
// fichiers, tuiles, texte copiable.

import { useState } from 'react';
import { fmtDate, hote, VERDICTS } from '../../utils/fichesExplorateur';
import { Badge, Rubrique } from './FichesUI';

const CIEL_TEXTE = '#00628c';

const PROVENANCES = {
  seeds:   'Seeds publiés',
  staging: 'Staging',
  fiche:   'Fiche unitaire',
};

// ─── Sources ──────────────────────────────────────────────────────────────────

export function Sources({ sources }) {
  return (
    <Rubrique titre="Sources" compte={sources?.length ?? 0}>
      {!sources?.length ? (
        <p className="text-[0.75rem] text-on-surface-var">Aucune source citée.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {sources.map((s, i) => (
            <li key={i} className="rounded-lg bg-surface-low px-3 py-2 flex flex-col gap-1">
              <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-[0.6875rem] font-semibold text-on-surface">{s.champ}</span>
                {s.url && (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[0.6875rem] text-primary-container hover:underline break-all" title={s.url}>
                    {hote(s.url)}
                  </a>
                )}
                {s.date && <span className="text-[0.625rem] text-on-surface-var">{fmtDate(s.date)}</span>}
              </span>
              {s.extrait && <span className="text-[0.75rem] text-on-surface-var leading-relaxed">« {s.extrait} »</span>}
            </li>
          ))}
        </ul>
      )}
    </Rubrique>
  );
}

// ─── Relecture : verdict du contrôleur et contrôles du référentiel ────────────

// `verdictAttendu` : les mesures ne passent pas par le contrôleur de fiche
export function Relecture({ edition, verdictAttendu = true }) {
  const [ouvert, setOuvert] = useState(false);
  const { verdict, erreurs, avertissements } = edition;

  return (
    <Rubrique titre="Relecture">
      {erreurs.length === 0 && avertissements.length === 0 ? (
        <p className="text-[0.75rem] text-on-surface-var">Contrôles du référentiel passés sans alerte.</p>
      ) : (
        <ul className="flex flex-col gap-1">
          {erreurs.map(e => <Alerte key={e} ton="rouge" texte={e} />)}
          {avertissements.map(w => <Alerte key={w} ton="jaune" texte={w} />)}
        </ul>
      )}

      {verdict ? (
        <div className="rounded-lg bg-surface-low px-3 py-2.5 flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[0.75rem] font-semibold text-on-surface">Verdict du contrôleur</span>
            {verdict.etat && <Badge ton={VERDICTS[verdict.etat].ton}>{VERDICTS[verdict.etat].label}</Badge>}
          </div>
          {verdict.libelle && verdict.libelle !== VERDICTS[verdict.etat]?.label.toLowerCase() && (
            <p className="text-[0.75rem] text-on-surface-var">{verdict.libelle}</p>
          )}
          {verdict.sources && <p className="text-[0.75rem] text-on-surface-var">Sources : {verdict.sources}</p>}
          <button
            type="button"
            onClick={() => setOuvert(o => !o)}
            aria-expanded={ouvert}
            className="self-start text-[0.6875rem] font-medium text-primary-container hover:underline"
          >
            {ouvert ? 'Masquer le verdict complet' : 'Lire le verdict complet'}
          </button>
          {ouvert && (
            <pre className="whitespace-pre-wrap break-words font-sans text-[0.75rem] text-on-surface leading-relaxed bg-white rounded-lg px-3 py-2.5 max-h-96 overflow-y-auto">
              {verdict.texte}
            </pre>
          )}
        </div>
      ) : verdictAttendu && (
        <p className="text-[0.75rem] text-on-surface-var">Pas de verdict du contrôleur pour cette fiche.</p>
      )}
    </Rubrique>
  );
}

function Alerte({ ton, texte }) {
  return (
    <li className="flex items-start gap-2 text-[0.75rem] leading-snug rounded-lg px-2.5 py-1.5" style={{ background: ton === 'rouge' ? '#fdecec' : '#fef7e0', color: ton === 'rouge' ? '#b42318' : '#8a5a00' }}>
      <span aria-hidden="true">{ton === 'rouge' ? '✕' : '!'}</span>
      <span>{texte}</span>
    </li>
  );
}

// ─── Fichiers où vit la fiche ─────────────────────────────────────────────────

export function Fichiers({ versions }) {
  return (
    <Rubrique titre="Fichiers" compte={versions.length}>
      <ul className="flex flex-col gap-1.5">
        {versions.map(v => (
          <li key={v.fichier} className="flex flex-col gap-0.5">
            <span className="flex flex-wrap items-center gap-1.5">
              <span className="text-[0.6875rem] font-semibold text-on-surface">{PROVENANCES[v.provenance]}</span>
              <span className="text-[0.6875rem] text-on-surface-var">
                {[v.statut, fmtDate(v.date_maj)].filter(Boolean).join(', ')}
              </span>
              {!v.identique && <Badge ton="ambre">Contenu différent</Badge>}
            </span>
            <Copiable texte={v.fichier} className="text-[0.6875rem] font-mono break-all" />
          </li>
        ))}
      </ul>
      <p className="text-[0.6875rem] text-on-surface-var">
        La version affichée est la plus récente. Le statut seul ne compte pas comme une différence, il change à la promotion.
      </p>
    </Rubrique>
  );
}

// ─── Petits éléments ──────────────────────────────────────────────────────────

export function Terme({ children }) {
  return <dt className="text-[0.75rem] font-semibold text-on-surface-var pt-px">{children}</dt>;
}

export function Tuile({ label, children }) {
  return (
    <div className="bg-surface-low rounded-lg px-3.5 py-2.5 flex flex-col gap-1">
      <span className="text-[0.6875rem] font-semibold text-on-surface-var">{label}</span>
      <span className="text-[0.8125rem] text-on-surface leading-relaxed">{children}</span>
    </div>
  );
}

export function ListeRepliable({ elements, nombre = 6 }) {
  const [tout, setTout] = useState(false);
  const visibles = tout ? elements : elements.slice(0, nombre);
  return (
    <span>
      {visibles.join(', ')}
      {elements.length > nombre && (
        <button type="button" onClick={() => setTout(t => !t)} className="ml-1.5 text-[0.75rem] font-medium text-primary-container hover:underline">
          {tout ? 'moins' : `et ${elements.length - nombre} autres`}
        </button>
      )}
    </span>
  );
}

// Texte qui se copie au clic (identifiant, chemin de fichier)
export function Copiable({ texte, className = '' }) {
  const [copie, setCopie] = useState(false);
  function copier() {
    navigator.clipboard?.writeText(texte).then(() => {
      setCopie(true);
      setTimeout(() => setCopie(false), 1200);
    }).catch(() => {});
  }
  return (
    <button type="button" onClick={copier} title="Copier" className={`text-left text-on-surface-var hover:text-primary transition-colors ${className}`}>
      {texte}
      <span className="ml-1.5 font-sans text-[0.625rem] font-medium" style={{ color: CIEL_TEXTE }} aria-live="polite">{copie ? 'copié' : ''}</span>
    </button>
  );
}
