// Sommaire dynamique de l'onglet Constat. À partir de 1 440 px : une colonne
// collée dans la marge gauche, avec un trait qui se remplit au fil de la
// lecture et les parties du chapitre en cours. En dessous : une barre collée
// en haut, qui affiche le chapitre en cours et déplie la liste au clic.

import { useEffect, useRef, useState } from 'react';
import { ouvrirPartie } from './outils';

// Hauteur de lecture : un chapitre devient « en cours » quand son haut passe
// au-dessus de cette ligne (en px depuis le haut de la fenêtre).
const LIGNE_LECTURE = 160;

function allerA(id, decalage) {
  const el = document.getElementById(id);
  if (!el) return;
  ouvrirPartie(id);
  const doux = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - decalage, behavior: doux ? 'smooth' : 'auto' });
}

// Dernier élément dont le haut a franchi la ligne de lecture
function enCours(ids) {
  let actif = null;
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= LIGNE_LECTURE) actif = id;
  }
  return actif;
}

function useSuiviLecture(chapitres, conteneur) {
  const [etat, setEtat] = useState({ chapitre: chapitres[0]?.id, partie: null, progression: 0 });

  useEffect(() => {
    let image = null;
    const mesurer = () => {
      image = null;
      const chapitre = enCours(chapitres.map((c) => c.id)) ?? chapitres[0]?.id;
      const parties = chapitres.find((c) => c.id === chapitre)?.parties ?? [];
      const partie = enCours(parties.map((p) => p.id));
      let progression = 0;
      const boite = conteneur.current?.getBoundingClientRect();
      if (boite && boite.height > 0) {
        progression = Math.min(1, Math.max(0, (LIGNE_LECTURE - boite.top) / (boite.height - window.innerHeight + LIGNE_LECTURE)));
      }
      setEtat((e) => (e.chapitre === chapitre && e.partie === partie && Math.abs(e.progression - progression) < 0.002
        ? e
        : { chapitre, partie, progression }));
    };
    const planifier = () => { if (!image) image = requestAnimationFrame(mesurer); };
    mesurer();
    window.addEventListener('scroll', planifier, { passive: true });
    window.addEventListener('resize', planifier);
    return () => {
      window.removeEventListener('scroll', planifier);
      window.removeEventListener('resize', planifier);
      if (image) cancelAnimationFrame(image);
    };
  }, [chapitres, conteneur]);

  return etat;
}

export default function SommaireConstat({ chapitres, conteneur }) {
  const { chapitre, partie, progression } = useSuiviLecture(chapitres, conteneur);
  return (
    <>
      <SommaireColonne chapitres={chapitres} chapitre={chapitre} partie={partie} progression={progression} />
      <SommaireBarre chapitres={chapitres} chapitre={chapitre} progression={progression} />
    </>
  );
}

function Libelle({ c }) {
  return (
    <>
      {c.numero && <span className="tabular-nums mr-1.5 opacity-60">{c.numero}</span>}
      {c.label}
    </>
  );
}

// ─── Grand écran : colonne dans la marge gauche ─────────────────────────────

function SommaireColonne({ chapitres, chapitre, partie, progression }) {
  return (
    <aside className="hidden min-[1440px]:block absolute right-full top-0 bottom-0 mr-6 w-44" aria-label="Sommaire">
      <div className="sticky top-6 flex flex-col gap-3">
        <p className="text-[0.8125rem] font-semibold text-on-surface pl-4">Sommaire</p>
        <div className="relative pl-4">
          {/* Trait de progression : fond gris, remplissage marine */}
          <span className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full bg-surface-highest" aria-hidden="true" />
          <span
            className="absolute left-0 top-1 w-[2px] rounded-full transition-[height] duration-150"
            style={{ height: `calc(${progression * 100}% - ${progression * 8}px)`, background: '#051b71' }}
            aria-hidden="true"
          />
          <ol className="flex flex-col gap-1">
            {chapitres.map((c) => {
              const actif = c.id === chapitre;
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => allerA(c.id, 24)}
                    aria-current={actif ? 'location' : undefined}
                    className={`w-full text-left text-[0.8125rem] leading-snug py-1 transition-colors focus-visible:outline-2 focus-visible:outline-primary-container rounded ${actif ? 'font-bold text-primary' : 'text-on-surface-var hover:text-primary'}`}
                  >
                    <Libelle c={c} />
                  </button>
                  {actif && c.parties.length > 0 && (
                    <ul className="flex flex-col gap-0.5 mt-0.5 mb-1.5 ml-3">
                      {c.parties.map((p) => (
                        <li key={p.id}>
                          <button
                            type="button"
                            onClick={() => allerA(p.id, 24)}
                            className={`w-full text-left text-[0.75rem] leading-snug py-0.5 transition-colors focus-visible:outline-2 focus-visible:outline-primary-container rounded ${p.id === partie ? 'font-semibold text-primary' : 'text-on-surface-var hover:text-primary'}`}
                          >
                            {p.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </aside>
  );
}

// ─── Écran plus étroit : barre collée en haut ───────────────────────────────

function SommaireBarre({ chapitres, chapitre, progression }) {
  const [ouvert, setOuvert] = useState(false);
  const zone = useRef(null);
  const courant = chapitres.find((c) => c.id === chapitre) ?? chapitres[0];

  // Fermeture au clic en dehors
  useEffect(() => {
    if (!ouvert) return undefined;
    const fermer = (e) => { if (!zone.current?.contains(e.target)) setOuvert(false); };
    document.addEventListener('pointerdown', fermer);
    return () => document.removeEventListener('pointerdown', fermer);
  }, [ouvert]);

  return (
    <div ref={zone} className="min-[1440px]:hidden sticky top-2 z-40">
      <div className="relative rounded-xl bg-white/95 backdrop-blur overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(0,10,67,0.10)' }}>
        <button
          type="button"
          onClick={() => setOuvert((o) => !o)}
          aria-expanded={ouvert}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-left focus-visible:outline-2 focus-visible:outline-primary-container"
        >
          <span className="text-[0.75rem] text-on-surface-var shrink-0">Sommaire</span>
          <span className="flex-1 min-w-0 truncate text-[0.8125rem] font-bold text-primary"><Libelle c={courant} /></span>
          <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0 text-on-surface-var transition-transform" style={{ transform: ouvert ? 'rotate(180deg)' : 'none' }}>
            <path d="M4 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="block h-[2px] bg-surface-high" aria-hidden="true">
          <span className="block h-full transition-[width] duration-150" style={{ width: `${progression * 100}%`, background: '#051b71' }} />
        </span>
        {ouvert && (
          <ol className="noe-deplier flex flex-col py-1.5 border-t border-surface-high">
            {chapitres.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => { setOuvert(false); allerA(c.id, 80); }}
                  className={`w-full text-left px-4 py-2 text-[0.8125rem] transition-colors hover:bg-surface-low focus-visible:outline-2 focus-visible:outline-primary-container ${c.id === chapitre ? 'font-bold text-primary' : 'text-on-surface'}`}
                >
                  <Libelle c={c} />
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
