// Briques d'interface de l'onglet Constat : chapitres, messages clés,
// sélecteur d'horizon, pastilles, légende et infobulle de graphique.

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HORIZONS, HORIZON_LABELS } from '../../utils/constatMessages';
import { EVENEMENT_OUVRIR, ouvrirPartie } from './outils';

// ─── Surlignage (repris du kakemono) ─────────────────────────────────────────

// `ton` : 'eau' (marine) pour la ressource, 'alerte' (orange) pour le climat
// et les dégradations. Texte blanc dans les deux cas, comme sur le kakemono.
// L'orange est plus foncé que celui de l'application (#fe851f) pour que le
// blanc reste lisible sur les titres (contraste 3,6:1 au lieu de 2,4:1).
const TONS = {
  eau: { background: '#051b71', color: '#ffffff' },
  alerte: { background: '#dc6409', color: '#ffffff' },
};

export function Surligne({ ton = 'eau', className = '', children }) {
  return (
    <span
      className={`px-[0.18em] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] ${className}`}
      style={TONS[ton]}
    >
      {children}
    </span>
  );
}

// ─── Chapitre ─────────────────────────────────────────────────────────────────

export function Chapitre({ id, numero, surtitre, titre, accroche, children }) {
  return (
    <section
      id={id}
      className="bg-surface-lowest rounded-2xl overflow-hidden scroll-mt-20 min-[1440px]:scroll-mt-6"
      style={{ boxShadow: '0 0 40px rgba(0,10,67,0.06)' }}
    >
      {/* Bandeau : dégradé de marque de l'application (#000a43 vers #051b71),
          le bleu de l'étiquette « Votre établissement » */}
      <div
        className="flex items-center gap-3.5 px-7 py-4"
        style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
      >
        {numero != null && (
          <>
            <span className="text-[0.875rem] font-black tabular-nums text-white/55 tracking-wide">
              {String(numero).padStart(2, '0')}
            </span>
            <span className="w-px h-4 bg-white/25 shrink-0" aria-hidden="true" />
          </>
        )}
        <p className="text-[0.8125rem] font-bold uppercase tracking-[0.14em] text-white">{surtitre}</p>
      </div>

      <div className="p-7 flex flex-col gap-7">
        <header className="flex flex-col gap-3">
          <h2 className="text-[1.5rem] sm:text-[1.875rem] font-black uppercase text-primary leading-[1.2]" style={{ letterSpacing: '-0.02em' }}>
            {titre}
          </h2>
          {accroche && (
            <div className="flex gap-3 items-stretch">
              <span className="w-1 rounded-full bg-tertiary shrink-0" />
              <p className="text-[0.875rem] text-on-surface-var leading-relaxed">{accroche}</p>
            </div>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

// ─── Partie d'un chapitre ────────────────────────────────────────────────────

// Grand numéro rond et titre sur toute la largeur, puis texte à gauche,
// visuel à droite, et le message clé en dessous. Les parties se séparent par
// un filet (voir `Parties`), sans trait qui les relierait entre elles.
// `texte` : une chaîne (paragraphe) ou un élément déjà mis en forme.
// `pleineLargeur` : visuel sur toute la largeur, entre la grille et le message clé.
// `repliable` : la partie devient un volet (voir `MessageRepliable`), avec
// `icone` et `chiffre` dans son en-tête.
export function Message({ id, numero, titre, texte, alerte, badge, messageCle, pleineLargeur, repliable, icone, chiffre, children }) {
  if (repliable) {
    return (
      <MessageRepliable
        id={id} titre={titre} texte={texte} alerte={alerte} badge={badge} messageCle={messageCle}
        pleineLargeur={pleineLargeur} icone={icone} chiffre={chiffre}
      >
        {children}
      </MessageRepliable>
    );
  }
  return (
    <div id={id} className="flex flex-col gap-5 py-10 first:pt-0 last:pb-0 scroll-mt-20 min-[1440px]:scroll-mt-6">
      <div className="flex items-start gap-4">
        <span
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[0.9375rem] font-black text-white shrink-0"
          style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
        >
          {numero}
        </span>
        <div className="flex flex-col gap-2 min-h-9 sm:min-h-10 justify-center">
          <h3 className="text-[1.125rem] sm:text-[1.25rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.015em' }}>
            {titre}
          </h3>
          {badge}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2 flex flex-col gap-3">
          {typeof texte === 'string'
            ? <p className="text-[0.875rem] text-on-surface-var leading-relaxed">{texte}</p>
            : texte}
        </div>
        <div className="md:col-span-3 min-w-0">{children}</div>
      </div>
      {pleineLargeur}
      {messageCle && <MessageCle alerte={alerte}>{messageCle}</MessageCle>}
    </div>
  );
}

// Conteneur des parties d'un chapitre, séparées par un filet, ou empilées en
// volets espacés avec `repliables`
export function Parties({ repliables, children }) {
  if (repliables) return <div className="flex flex-col gap-3">{children}</div>;
  return <div className="flex flex-col divide-y divide-surface-high">{children}</div>;
}

// ─── Partie repliable ────────────────────────────────────────────────────────

function mouvementReduit() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// En-tête toujours visible : icône, titre, message clé et chiffre clé. Le
// texte et les visuels se déplient en dessous. Ils ne sont montés qu'à la
// première ouverture, ce qui allège la page (graphiques, carte).
function MessageRepliable({ id, titre, texte, alerte, badge, messageCle, pleineLargeur, icone, chiffre, children }) {
  const [ouvert, setOuvert] = useState(false);
  const [monte, setMonte] = useState(false);
  // Ouverture terminée : le contenu peut déborder (infobulles des graphiques)
  const [deplie, setDeplie] = useState(false);

  const basculer = (valeur) => {
    if (valeur) setMonte(true);
    setDeplie(valeur && mouvementReduit());
    setOuvert(valeur);
  };

  useEffect(() => {
    const surOuvrir = (e) => { if (e.detail === id) basculer(true); };
    window.addEventListener(EVENEMENT_OUVRIR, surOuvrir);
    return () => window.removeEventListener(EVENEMENT_OUVRIR, surOuvrir);
  }, [id]);

  const accent = alerte ? '#dc6409' : '#051b71';
  const { fort, suite } = typeof messageCle === 'string' ? { fort: messageCle, suite: '' } : (messageCle ?? {});
  const contenu = `${id}-contenu`;

  return (
    <div
      id={id}
      className="relative rounded-2xl scroll-mt-20 min-[1440px]:scroll-mt-6 transition-[background-color,box-shadow] duration-200"
      style={{
        background: ouvert ? '#ffffff' : '#f1f3fc',
        boxShadow: ouvert ? '0 0 0 1px #e0e2eb, 0 8px 28px rgba(0,10,67,0.07)' : '0 0 0 1px transparent',
      }}
    >
      <span className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full" style={{ background: accent }} aria-hidden="true" />

      <h3>
        <button
          type="button"
          onClick={() => basculer(!ouvert)}
          aria-expanded={ouvert}
          aria-controls={contenu}
          className="group w-full flex items-center gap-4 pl-6 pr-4 sm:pr-5 py-4 sm:py-5 text-left rounded-2xl focus-visible:outline-2 focus-visible:outline-primary-container"
        >
          <span
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white [&_svg]:w-5 [&_svg]:h-5"
            style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
            aria-hidden="true"
          >
            {icone}
          </span>

          <span className="flex-1 min-w-0 flex flex-col gap-1">
            <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="text-[1.0625rem] sm:text-[1.125rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.015em' }}>
                {titre}
              </span>
              {badge}
              {chiffre && (
                <span className="sm:hidden"><Pastille defavorable={chiffre.defavorable}>{chiffre.valeur}</Pastille></span>
              )}
            </span>
            {fort && (
              <span className="text-[0.8125rem] leading-relaxed text-on-surface-var">
                <strong className="font-semibold" style={{ color: '#000a43' }}>{fort}</strong>
                {suite}
              </span>
            )}
          </span>

          {chiffre && (
            <span className="hidden sm:flex flex-col items-end gap-0.5 shrink-0 pl-2 max-w-[180px]">
              <span className="text-[1.375rem] font-black leading-none tabular-nums" style={{ color: chiffre.defavorable ? '#964900' : '#000a43' }}>
                {chiffre.valeur}
              </span>
              <span className="text-[0.6875rem] text-on-surface-var text-right leading-snug">{chiffre.legende}</span>
            </span>
          )}

          <span
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-surface-high"
            style={{ background: ouvert ? '#e8eaf3' : '#ffffff', color: '#051b71' }}
            aria-hidden="true"
          >
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform duration-300 motion-reduce:transition-none ${ouvert ? 'rotate-180' : ''}`}
            >
              <path d="m3.5 5.25 3.5 3.5 3.5-3.5" />
            </svg>
          </span>
        </button>
      </h3>

      {/* Hauteur animée par la grille (0fr vers 1fr) */}
      <div
        id={contenu}
        role="region"
        aria-label={titre}
        className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: ouvert ? '1fr' : '0fr' }}
        onTransitionEnd={(e) => { if (e.target === e.currentTarget && ouvert) setDeplie(true); }}
        inert={!ouvert}
      >
        <div className={`min-h-0 ${deplie ? 'overflow-visible' : 'overflow-hidden'}`}>
          {monte && (
            <div className="flex flex-col gap-5 px-6 pb-6 pt-1">
              <div className="h-px bg-surface-high" aria-hidden="true" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="md:col-span-2 flex flex-col gap-3">
                  {typeof texte === 'string'
                    ? <p className="text-[0.875rem] text-on-surface-var leading-relaxed">{texte}</p>
                    : texte}
                </div>
                <div className="md:col-span-3 min-w-0">{children}</div>
              </div>
              {pleineLargeur}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Sommaire d'un chapitre ──────────────────────────────────────────────────

// Entrées côte à côte, sans ordre de lecture imposé. Chacune renvoie à sa
// partie (`cible` : id de l'élément).
const COLONNES_SOMMAIRE = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2 xl:grid-cols-4',
  5: 'md:grid-cols-3 xl:grid-cols-5',
};

export function Sommaire({ titre, entrees }) {
  const aller = (e, cible) => {
    const el = document.getElementById(cible);
    if (!el) return;
    e.preventDefault();
    ouvrirPartie(cible);
    const doux = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: doux ? 'smooth' : 'auto', block: 'start' });
  };

  return (
    <nav aria-label={titre} className="flex flex-col gap-2.5">
      <p className="text-[0.875rem] font-semibold text-on-surface">{titre}</p>
      <div className={`grid grid-cols-1 gap-2 ${COLONNES_SOMMAIRE[entrees.length] ?? 'md:grid-cols-3'}`}>
        {entrees.map((entree, i) => (
          <a
            key={entree.cible}
            href={`#${entree.cible}`}
            onClick={(e) => aller(e, entree.cible)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 bg-surface-low hover:bg-surface-high transition-colors focus-visible:outline-2 focus-visible:outline-primary-container"
          >
            <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-white" style={{ color: '#051b71' }}>
              {entree.icone}
            </span>
            <span className="text-[0.8125rem] font-semibold text-primary leading-snug">
              <span className="text-on-surface-var font-bold mr-1.5 tabular-nums">{i + 1}.</span>
              {entree.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}

// Conclusion d'un message : étiquette « À retenir », première proposition en
// gras, suite en texte courant, fin trait de couleur à gauche.
// `children` : { fort, suite } ou une chaîne.
export function MessageCle({ alerte, children }) {
  const couleur = alerte ? '#964900' : '#051b71';
  const { fort, suite } = typeof children === 'string' ? { fort: children, suite: '' } : children;
  return (
    <div className="flex gap-3 items-stretch">
      <span className="w-[3px] rounded-full shrink-0" style={{ background: alerte ? '#dc6409' : '#051b71' }} />
      <p className="text-[1rem] leading-[1.6] text-on-surface">
        <span className="block text-[0.6875rem] font-extrabold uppercase tracking-widest mb-0.5" style={{ color: couleur }}>
          À retenir
        </span>
        <strong className="font-bold" style={{ color: '#000a43' }}>{fort}</strong>
        {suite}
      </p>
    </div>
  );
}

// ─── Ligne de chiffre clé : icône, libellé, avant → après, pastille ─────────

// Avec `onActiver`, la ligne est un bouton relié à un visuel (survol, focus,
// clic) ; sans, c'est une simple ligne d'information.
export function LigneChiffre({ icone, label, detail, avant, apres, pastille, defavorable, actif, onActiver, onDesactiver }) {
  const contenu = (
    <>
      <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-white" style={{ color: '#051b71' }}>
        {icone}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-[0.8125rem] font-semibold text-on-surface">{label}</span>
        {detail && <span className="block text-[0.6875rem] text-on-surface-var">{detail}</span>}
      </span>
      <span className="text-[0.75rem] text-on-surface-var tabular-nums whitespace-nowrap">
        {avant} → <strong className="font-semibold text-on-surface">{apres}</strong>
      </span>
      {pastille && <Pastille defavorable={defavorable}>{pastille}</Pastille>}
    </>
  );
  const classe = 'w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left';

  if (!onActiver) {
    return <div className={classe} style={{ background: '#f1f3fc' }}>{contenu}</div>;
  }
  return (
    <button
      type="button"
      onMouseEnter={onActiver}
      onMouseLeave={onDesactiver}
      onFocus={onActiver}
      onBlur={onDesactiver}
      onClick={actif ? onDesactiver : onActiver}
      aria-pressed={actif}
      className={`${classe} transition-colors focus-visible:outline-2 focus-visible:outline-primary-container`}
      style={{ background: actif ? 'rgba(5,27,113,0.07)' : '#f1f3fc' }}
    >
      {contenu}
    </button>
  );
}

// ─── Sélecteur d'horizon (mode switcher du design system) ───────────────────

export function SelecteurHorizon({ actif, onChange, horizons = HORIZONS }) {
  return (
    <div className="flex rounded-xl overflow-hidden shrink-0" style={{ border: '1px solid #e0e2eb' }} role="group" aria-label="Horizon">
      {horizons.map((h, i) => (
        <button
          key={h}
          type="button"
          onClick={() => onChange(h)}
          aria-pressed={actif === h}
          className="px-3 py-1.5 text-[0.6875rem] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary-container"
          style={{
            background: actif === h ? '#000a43' : '#ffffff',
            color: actif === h ? '#ffffff' : '#44474f',
            borderRight: i < horizons.length - 1 ? '1px solid #e0e2eb' : 'none',
          }}
        >
          {HORIZON_LABELS[h]}
        </button>
      ))}
    </div>
  );
}

// ─── Infobulle au survol (?) ─────────────────────────────────────────────────

// Petit « ? » qui affiche un texte au survol, et au toucher sur mobile (le
// « ? » prend alors le focus). L'infobulle est rendue au niveau de la page,
// au premier plan : elle n'est ni coupée ni masquée par les cadres voisins
// (panneaux posés sur une carte, blocs qui coupent leur débordement).
// `focusable` : à désactiver quand le « ? » est dans un bouton, qui ne peut
// pas contenir d'élément interactif ; le texte reste lu avec le bouton.
// `clair` : version pour fond foncé. `position` : 'bas' ou 'haut'.
// `alignement` : 'centre', 'gauche' ou 'droite' (bord de l'infobulle aligné
// sur le « ? »). `large` : pour les textes de plusieurs phrases.
const MARGE_ECRAN = 8;

// `avertissement` : triangle ambre au lieu du « ? », pour des mises en garde.
export function InfoSurvol({ texte, clair, focusable = true, position = 'bas', alignement = 'centre', large, avertissement }) {
  const declencheur = useRef(null);
  const bulle = useRef(null);
  const [ancre, setAncre] = useState(null);

  const ouvrir = () => setAncre(declencheur.current?.getBoundingClientRect() ?? null);
  const fermer = () => setAncre(null);

  // Au défilement, la position ne suit plus : on referme
  useEffect(() => {
    if (!ancre) return undefined;
    window.addEventListener('scroll', fermer, true);
    window.addEventListener('resize', fermer);
    return () => {
      window.removeEventListener('scroll', fermer, true);
      window.removeEventListener('resize', fermer);
    };
  }, [ancre]);

  // Placement une fois la bulle mesurée, sans sortir de l'écran
  useLayoutEffect(() => {
    const el = bulle.current;
    if (!ancre || !el) return;
    const { width, height } = el.getBoundingClientRect();
    let left = alignement === 'gauche' ? ancre.left - MARGE_ECRAN
      : alignement === 'droite' ? ancre.right + MARGE_ECRAN - width
        : ancre.left + ancre.width / 2 - width / 2;
    left = Math.min(Math.max(left, MARGE_ECRAN), window.innerWidth - width - MARGE_ECRAN);
    let top = position === 'haut' ? ancre.top - height - 8 : ancre.bottom + 8;
    if (top < MARGE_ECRAN) top = ancre.bottom + 8;
    if (top + height > window.innerHeight - MARGE_ECRAN) top = ancre.top - height - 8;
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
    el.style.visibility = 'visible';
  }, [ancre, alignement, position]);

  return (
    <span
      ref={declencheur}
      className="relative inline-flex shrink-0 outline-none rounded-full focus-visible:outline-2 focus-visible:outline-primary-container"
      tabIndex={focusable ? 0 : undefined}
      aria-label={focusable ? texte : undefined}
      onMouseEnter={ouvrir}
      onMouseLeave={fermer}
      onFocus={ouvrir}
      onBlur={fermer}
    >
      {avertissement ? (
        <svg width="18" height="18" viewBox="0 0 18 18" className="cursor-help" aria-hidden="true">
          <path d="M9 2.2 16.2 15H1.8L9 2.2Z" fill="rgba(254,133,31,0.18)" stroke="#dc6409" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M9 7v3.6" stroke="#964900" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="9" cy="12.8" r="0.95" fill="#964900" />
        </svg>
      ) : (
        <span
          className="w-4 h-4 rounded-full flex items-center justify-center text-[0.625rem] font-bold cursor-help"
          style={clair ? { background: 'rgba(255,255,255,0.18)', color: '#ffffff' } : { background: '#e0e2eb', color: '#44474f' }}
          aria-hidden="true"
        >
          ?
        </span>
      )}
      {!focusable && <span className="sr-only">{texte}</span>}
      {ancre && createPortal(
        <span
          ref={bulle}
          role="tooltip"
          aria-hidden="true"
          className={[
            'pointer-events-none fixed z-[1000] rounded-[10px] bg-white px-3 py-2 text-[0.75rem] font-medium leading-relaxed text-primary text-left normal-case tracking-normal',
            large ? 'w-[min(340px,80vw)]' : 'w-max max-w-[240px]',
          ].join(' ')}
          style={{ left: 0, top: 0, visibility: 'hidden', border: '1px solid #e0e2eb', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
        >
          {texte}
        </span>,
        document.body,
      )}
    </span>
  );
}

// ─── Pastille d'évolution ─────────────────────────────────────────────────────

// `defavorable` : l'évolution aggrave la situation (ambre), sinon neutre.
export function Pastille({ children, defavorable }) {
  return (
    <span
      className="text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap tabular-nums"
      style={{
        background: defavorable ? 'rgba(254,133,31,0.14)' : '#e8eaf3',
        color: defavorable ? '#964900' : '#44474f',
      }}
    >
      {children}
    </span>
  );
}

// Badge « données illustratives » pour les blocs encore sans source
// `court` : version compacte, pour une donnée isolée
export function BadgeFictif({ court }) {
  return (
    <span
      className={`inline-flex w-fit shrink-0 whitespace-nowrap items-center gap-1.5 font-semibold rounded-full ${court ? 'text-[0.625rem] px-2 py-0.5' : 'text-[0.6875rem] px-2.5 py-1'}`}
      style={{ background: 'rgba(254,133,31,0.14)', color: '#964900' }}
    >
      {court ? 'Donnée fictive' : "Données fictives, en cours d'intégration"}
    </span>
  );
}

// ─── Infobulle de graphique ──────────────────────────────────────────────────

export function InfobulleGraphique({ titre, lignes }) {
  return (
    <div
      className="bg-white rounded-[10px] px-3 py-2 min-w-[170px]"
      style={{ border: '1px solid #e0e2eb', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
    >
      <p className="text-[0.75rem] font-bold text-on-surface mb-1.5">{titre}</p>
      {lignes.map((l) => (
        <div key={l.label} className="flex items-center justify-between gap-4 text-[0.75rem] mb-0.5">
          <span className="flex items-center gap-1.5 text-on-surface-var">
            {l.couleur && <span className="w-2 h-2 rounded-full shrink-0" style={{ background: l.couleur }} />}
            {l.label}
          </span>
          <span className="font-semibold text-on-surface tabular-nums">{l.valeur}</span>
        </div>
      ))}
    </div>
  );
}

// Légende en ligne, au-dessus des graphiques
export function Legende({ elements }) {
  return (
    <div className="flex flex-wrap gap-4">
      {elements.map((e) => (
        <span key={e.label} className="flex items-center gap-2 text-[0.75rem] text-on-surface-var">
          {e.tirets ? (
            <svg width="18" height="4" aria-hidden="true">
              <line x1="0" y1="2" x2="18" y2="2" stroke={e.couleur} strokeWidth="2" strokeDasharray="4 3" />
            </svg>
          ) : e.zone ? (
            <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: e.couleur }} />
          ) : (
            <span className="w-[18px] h-[2px] rounded-full shrink-0" style={{ background: e.couleur }} />
          )}
          {e.label}
        </span>
      ))}
    </div>
  );
}

export function Vide({ message }) {
  return (
    <div className="bg-surface-low rounded-xl px-6 py-8 text-center">
      <p className="text-[0.875rem] text-on-surface-var">{message}</p>
    </div>
  );
}
