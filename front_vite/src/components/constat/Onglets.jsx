// Cartes en onglets : une rangée de cartes cliquables et, sous la rangée, le
// panneau de la carte ouverte. La carte ouverte perd sa bordure basse et
// descend jusqu'au panneau, dont elle recouvre le bord haut : les deux
// contours se rejoignent comme un onglet, avec un arrondi en creux à la
// jonction. Sur mobile, le panneau se place juste sous sa carte (ordre 2i + 1).

import { useId } from 'react';

const COLONNES = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' };
const ETENDUE = { 2: 'md:col-span-2', 3: 'md:col-span-3', 4: 'md:col-span-4' };

/**
 * elements     : [{ cle, ... }]
 * ouvert       : clé de l'élément ouvert, ou null
 * onChanger    : (cle | null) => void
 * rendreCarte  : (element, estOuvert) => contenu de la carte
 * rendrePanneau: (element, fermer) => contenu du panneau
 * titre        : libellé d'aide au survol d'une carte fermée
 * fleches      : flèches entre les cartes (enchaînement amont → aval)
 */
export default function CartesOnglets({ elements, ouvert, onChanger, rendreCarte, rendrePanneau, titre, fleches = false }) {
  const idPanneau = useId();
  const n = elements.length;
  const position = elements.findIndex((e) => e.cle === ouvert);
  const elementOuvert = position >= 0 ? elements[position] : null;
  const fermer = () => onChanger(null);

  // Angle droit du côté où la carte ouverte touche le bord
  const angles = position === 0 ? 'md:rounded-tr-xl' : position === n - 1 ? 'md:rounded-tl-xl' : 'md:rounded-t-xl';

  return (
    <div className={`grid grid-cols-1 ${COLONNES[n] ?? 'md:grid-cols-3'} ${fleches ? 'md:gap-x-8' : 'md:gap-x-3'}`}>
      {elements.map((e, i) => {
        const estOuvert = e.cle === ouvert;
        return (
          <button
            key={e.cle}
            type="button"
            onClick={() => onChanger(estOuvert ? null : e.cle)}
            aria-expanded={estOuvert}
            aria-controls={idPanneau}
            title={estOuvert ? "Masquer le détail" : titre}
            className={[
              'group relative text-left rounded-xl px-4 pt-4 pb-2 flex flex-col gap-3 transition-colors border-2 order-[var(--ordre)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container',
              estOuvert
                ? 'bg-white border-[#051b71] border-b-0 rounded-b-none pb-3 -mb-[2px] z-10 shadow-[0_1px_0_0_#ffffff]'
                : `bg-surface-low hover:bg-surface-high border-transparent mb-3 ${ouvert != null ? '' : 'md:mb-0'}`,
            ].join(' ')}
            style={{ '--ordre': 2 * i }}
          >
            {rendreCarte(e, estOuvert)}

            <span className={`self-center mt-auto transition-colors ${estOuvert ? 'text-primary' : 'text-on-surface-var group-hover:text-primary'}`}>
              <Chevron ouvert={estOuvert} />
            </span>

            {fleches && i < n - 1 && (
              <span className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-[26px] text-on-surface-var/60" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18"><path d="M7 4.5 11.5 9 7 13.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            )}

            {estOuvert && i > 0 && <Jonction cote="gauche" />}
            {estOuvert && i < n - 1 && <Jonction cote="droite" />}
          </button>
        );
      })}

      {elementOuvert && (
        <div
          id={idPanneau}
          className={`noe-deplier ${ETENDUE[n] ?? 'md:col-span-3'} order-[var(--ordre)] md:order-[99] mb-3 md:mb-0 rounded-xl rounded-t-none ${angles} border-2 border-[#051b71] px-5 py-5 flex flex-col gap-4 bg-white`}
          style={{ '--ordre': 2 * position + 1 }}
        >
          {rendrePanneau(elementOuvert, fermer)}
        </div>
      )}
    </div>
  );
}

// Chevron fin en V, qui pivote quand le panneau est ouvert
function Chevron({ ouvert }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
      className="transition-transform duration-200 motion-reduce:transition-none"
      style={{ transform: ouvert ? 'rotate(180deg)' : 'none' }}
    >
      <path d="M4 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Bouton de fermeture en croix, pour l'en-tête des panneaux
export function BoutonFermer({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Fermer le détail"
      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-on-surface-var hover:text-primary hover:bg-surface-low transition-colors focus-visible:outline-2 focus-visible:outline-primary-container"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

// Arrondi en creux entre le bord vertical de la carte ouverte (2 px) et le
// bord haut du panneau (2 px), rayon 12 px. Le SVG fait 16 × 16 px et déborde
// de 2 px vers l'intérieur blanc de la carte : le bord du masque ne tombe
// jamais sur un trait marine, ce qui évite un liseré anti-aliasé aux zooms
// intermédiaires. Repères (côté droit) : trait de la carte centré en x = 3,
// trait du panneau centré en y = 14 (le SVG descend 1 px sous la carte, qui
// recouvre elle-même le panneau de 2 px). Le trait déborde de 2 px au-delà du
// masque, en haut et au bout, pour recouvrir le pixel partiel de ses bords.
function Jonction({ cote }) {
  const droite = cote === 'droite';
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      overflow="visible"
      aria-hidden="true"
      className={`hidden md:block absolute -bottom-px pointer-events-none ${droite ? '-right-[14px]' : '-left-[14px]'}`}
    >
      {/* Masque : le coin droit du trait de la carte et le début du trait du panneau */}
      <rect x={droite ? 0 : 1} y="0" width="15" height="16" fill="#ffffff" />
      <path
        d={droite ? 'M3 -2 V2 A12 12 0 0 0 15 14 H18' : 'M13 -2 V2 A12 12 0 0 1 1 14 H-2'}
        fill="none"
        stroke="#051b71"
        strokeWidth="2"
      />
    </svg>
  );
}
