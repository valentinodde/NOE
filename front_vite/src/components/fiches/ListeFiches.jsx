// Liste des fiches filtrées : une ligne par fiche, cliquable, la fiche
// choisie cerclée de bleu nuit. Le détail s'ouvre dans le panneau de droite.

import Logo from '../Logo';
import { TYPE_AIDE, TYPE_PRESTATAIRE } from '../../utils/solutionsMatching';
import { EFFETS, HORIZONS, libelleTerritoire, nbLiens, nomDe } from '../../utils/fichesExplorateur';
import { Badge, BadgesEdition, PictoCategorie } from './FichesUI';

export default function ListeFiches({ fiches, onglet, selection, onSelection, secteursParId, categoriesParId }) {
  if (!fiches.length) {
    return <p className="text-sm text-on-surface-var py-16 text-center">Aucune fiche ne correspond à ces filtres.</p>;
  }
  return (
    <ul className="flex flex-col gap-1.5">
      {fiches.map(f => (
        <LigneFiche
          key={f.id}
          fiche={f}
          onglet={onglet}
          active={f.id === selection}
          onClick={() => onSelection(f.id)}
          secteursParId={secteursParId}
          categoriesParId={categoriesParId}
        />
      ))}
    </ul>
  );
}

function LigneFiche({ fiche: f, onglet, active, onClick, secteursParId, categoriesParId }) {
  const aide = onglet === 'aides';
  const mesure = onglet === 'mesures';
  const categorie = mesure ? categoriesParId[f.categorie] : null;
  const sousTitre = mesure
    ? [categorie?.label ?? f.categorie, HORIZONS[f.horizon] ?? f.horizon].filter(Boolean).join(', ')
    : [(aide ? TYPE_AIDE : TYPE_PRESTATAIRE)[f.type] ?? f.type, aide ? f.financeur : null, libelleTerritoire(f)].filter(Boolean).join(', ');
  const secteurs = (f.secteurs ?? []).map(s => secteursParId[s] ?? s);
  const n = nbLiens(f);
  const unite = mesure ? 'solution' : 'mesure';
  const jamaisProposee = mesure && !f.declencheurs?.some(d => EFFETS[d.effet]?.positif);

  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        aria-current={active ? 'true' : undefined}
        className={`w-full grid grid-cols-[auto_minmax(0,1fr)] md:grid-cols-[auto_minmax(0,1fr)_minmax(0,11rem)_4.5rem] items-center gap-x-3 gap-y-1.5 px-3.5 py-2.5 rounded-xl text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary-container ${active ? 'bg-white' : 'bg-surface-low hover:bg-surface-high'}`}
        style={active ? { boxShadow: '0 0 0 2px #051b71, 0 8px 24px rgba(0,10,67,0.10)' } : undefined}
      >
        {mesure
          ? <PictoCategorie couleur={categorie?.couleur} size={34} />
          : <Logo url={f.logo_url} nom={aide ? f.financeur ?? f.nom : f.nom} size={34} />}

        <span className="min-w-0 flex flex-col gap-1">
          <span className="flex items-baseline gap-2 min-w-0">
            <span className={`text-[0.875rem] font-semibold leading-snug truncate ${active ? 'text-primary' : 'text-on-surface'}`} title={mesure ? f.titre : undefined}>{nomDe(f)}</span>
            <span className="text-[0.625rem] font-mono text-on-surface-var shrink-0">{f.id}</span>
          </span>
          <span className="text-[0.75rem] text-on-surface-var leading-snug truncate">{sousTitre}</span>
          <span className="flex flex-wrap gap-1">
            <BadgesEdition fiche={f} />
            {jamaisProposee && <Badge ton="rouge" title="Aucun questionnaire ne l'ajoute au plan d'action">Jamais proposée</Badge>}
          </span>
        </span>

        <span className="hidden md:flex flex-wrap gap-1 justify-end">
          {secteurs.length === 0 ? (
            <span className="text-[0.6875rem] text-on-surface-var italic">Transversal</span>
          ) : secteurs.slice(0, 3).map(s => (
            <span key={s} title={s} className="text-[0.6875rem] text-on-surface-var rounded-full bg-white px-2 py-0.5 truncate max-w-full" style={{ border: '1px solid #e0e2eb' }}>{s}</span>
          ))}
          {secteurs.length > 3 && <span className="text-[0.6875rem] text-on-surface-var">+{secteurs.length - 3}</span>}
        </span>

        <span className="hidden md:flex flex-col items-end">
          <span className={`text-[1rem] font-bold tabular-nums leading-none ${n ? 'text-primary' : 'text-on-surface-var'}`}>{n}</span>
          <span className="text-[0.625rem] text-on-surface-var">{unite}{n > 1 ? 's' : ''}</span>
        </span>
      </button>
    </li>
  );
}
