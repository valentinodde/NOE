// Parcours en étapes de la fiche établissement : les quatre onglets présentés
// comme les étapes numérotées d'une démarche, dans un bloc séparé du contenu,
// suivis du titre de l'étape en cours. Marque que la navigation se fait au
// niveau de la page et non d'une carte.

export default function ParcoursEtapes({ etapes, active, onChange }) {
  const rang = etapes.findIndex((e) => e.id === active);
  const etape = etapes[rang];

  return (
    <div className="flex flex-col gap-6">
      <nav
        aria-label="Étapes de l'analyse"
        className="bg-surface-lowest rounded-2xl px-4 sm:px-6 py-5"
        style={{ boxShadow: '0 0 40px rgba(0,10,67,0.06)' }}
      >
        <ol className="grid grid-cols-4">
          {etapes.map((e, i) => {
            const estActive = i === rang;
            return (
              <li key={e.id} className="relative flex flex-col items-center">
                {/* Trait vers l'étape suivante, entre les centres des pastilles */}
                {i < etapes.length - 1 && (
                  <span className="absolute top-[18px] left-1/2 w-full h-[2px] bg-surface-highest" aria-hidden="true" />
                )}
                <button
                  type="button"
                  onClick={() => onChange(e.id)}
                  aria-current={estActive ? 'step' : undefined}
                  className="group relative flex flex-col items-center gap-2 px-1 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-container"
                >
                  <span
                    className={[
                      'w-9 h-9 rounded-full flex items-center justify-center text-[0.875rem] font-black transition-colors',
                      estActive ? 'text-white' : 'bg-surface-low text-on-surface-var group-hover:bg-surface-high group-hover:text-primary',
                    ].join(' ')}
                    style={estActive ? { background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)', boxShadow: '0 0 0 4px rgba(5,27,113,0.12)' } : { boxShadow: '0 0 0 4px #ffffff' }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`text-center text-[0.75rem] sm:text-[0.8125rem] leading-snug ${estActive ? 'font-bold text-primary' : 'font-medium text-on-surface-var group-hover:text-primary'}`}
                  >
                    {e.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {etape && (
        <header className="flex flex-col gap-1 px-1">
          <p className="text-[0.8125rem] font-semibold text-tertiary">Étape {rang + 1} sur {etapes.length}</p>
          <h1 className="text-[1.5rem] sm:text-[1.75rem] font-extrabold text-primary leading-tight" style={{ letterSpacing: '-0.02em' }}>
            {etape.titre}
          </h1>
          {etape.intro && <p className="text-[0.875rem] text-on-surface-var leading-relaxed mt-1">{etape.intro}</p>}
        </header>
      )}
    </div>
  );
}
