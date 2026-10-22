// Briques d'interface de la page Fiches solutions : pastilles d'état de
// rédaction, titres de rubrique du panneau.

import { VERDICTS } from '../../utils/fichesExplorateur';

const TONS = {
  bleu:  { background: 'rgba(0,151,214,0.10)', color: '#00628c' },
  gris:  { background: '#e8eaf3', color: '#44474f' },
  ambre: { background: 'rgba(150,73,0,0.12)', color: '#964900' },
  vert:  { background: '#ecfdf3', color: '#15803d' },
  jaune: { background: '#fef7e0', color: '#8a5a00' },
  rouge: { background: '#fdecec', color: '#b42318' },
};

export function Badge({ ton = 'gris', title, children }) {
  return (
    <span
      className="inline-flex items-center gap-1 text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
      style={TONS[ton]}
      title={title}
    >
      {children}
    </span>
  );
}

export function BadgeStatut({ fiche }) {
  const { dans_seeds, provenance, fichier } = fiche.edition;
  if (!dans_seeds) {
    return <Badge ton="ambre" title={`Seulement dans ${fichier}`}>{provenance === 'fiche' ? 'Fiche en staging' : 'En staging'}</Badge>;
  }
  return fiche.statut === 'publie'
    ? <Badge ton="bleu" title="Dans les seeds publiés, servie par l'API après ingestion">Publiée</Badge>
    : <Badge ton="gris" title="Dans les seeds publiés, pas servie par l'API">Brouillon</Badge>;
}

export function BadgeVerdict({ verdict }) {
  if (!verdict?.etat) return null;
  const v = VERDICTS[verdict.etat];
  return <Badge ton={v.ton} title={`Verdict du contrôleur : ${verdict.libelle}`}>{v.label}</Badge>;
}

// Pastilles d'une fiche : statut, modification en staging, verdict et contrôles
export function BadgesEdition({ fiche, controles = true }) {
  const { modifiee, verdict, erreurs, avertissements } = fiche.edition;
  return (
    <>
      <BadgeStatut fiche={fiche} />
      {modifiee && <Badge ton="ambre" title="Une version plus récente attend dans le staging">Modifiée</Badge>}
      <BadgeVerdict verdict={verdict} />
      {controles && erreurs.length > 0 && (
        <Badge ton="rouge" title={erreurs.join('\n')}>{erreurs.length} erreur{erreurs.length > 1 ? 's' : ''}</Badge>
      )}
      {controles && avertissements.length > 0 && (
        <Badge ton="jaune" title={avertissements.join('\n')}>{avertissements.length} alerte{avertissements.length > 1 ? 's' : ''}</Badge>
      )}
    </>
  );
}

export function Rubrique({ titre, compte, children, action }) {
  return (
    <section className="flex flex-col gap-2.5 pt-4" style={{ borderTop: '1px solid #e0e2eb' }}>
      <div className="flex items-center gap-2 justify-between">
        <h3 className="text-[0.875rem] font-bold text-primary">
          {titre}
          {compte != null && <span className="ml-1.5 text-[0.75rem] font-medium text-on-surface-var tabular-nums">{compte}</span>}
        </h3>
        {action}
      </div>
      {children}
    </section>
  );
}

export function PastilleCouleur({ couleur }) {
  return <span className="w-2 h-2 rounded-full shrink-0" style={{ background: couleur ?? '#c4c8d8' }} aria-hidden="true" />;
}

// Pictogramme d'une mesure : un carré teinté de la couleur de sa catégorie
export function PictoCategorie({ couleur = '#c4c8d8', size = 34 }) {
  return (
    <span
      className="shrink-0 rounded-lg flex items-center justify-center"
      style={{ width: size, height: size, background: `${couleur}22`, border: `1px solid ${couleur}55` }}
      aria-hidden="true"
    >
      <span className="rounded-full" style={{ width: size * 0.3, height: size * 0.3, background: couleur }} />
    </span>
  );
}
