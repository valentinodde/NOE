/**
 * Infos complémentaires d'une mesure ou d'une aide : liste de
 * { type, texte, lien?, lien_label? } au vocabulaire fermé (validé à
 * l'ingestion). Les encadrés (info, avertissement, retour d'expérience)
 * s'affichent d'abord, les ressources en liste de liens en dessous.
 */

const BLOC_META = {
  info:              { icon: 'ℹ️', cls: 'bg-blue-50 border-blue-200 text-blue-900' },
  avertissement:     { icon: '⚠️', cls: 'bg-amber-50 border-amber-200 text-amber-900' },
  retour_experience: { icon: '💬', cls: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
};

function LienIcon() {
  return (
    <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="none">
      <path d="M5 2H2.5A.5.5 0 0 0 2 2.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V7M7 2h3v3M10 2 5.5 6.5"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function InfosComplementaires({ infos }) {
  if (!infos?.length) return null;

  const blocs      = infos.filter(i => BLOC_META[i.type]);
  const ressources = infos.filter(i => i.type === 'ressource' && i.lien);

  return (
    <div className="flex flex-col gap-2 pt-3" style={{ borderTop: '1px solid #e0e2eb' }}>
      {blocs.map((i, idx) => {
        const meta = BLOC_META[i.type];
        return (
          <div
            key={idx}
            className={`rounded-lg border px-3.5 py-2.5 text-[0.8125rem] leading-relaxed flex gap-2 ${meta.cls}`}
          >
            <span className="flex-shrink-0" aria-hidden="true">{meta.icon}</span>
            <span>
              {i.texte}
              {i.lien && (
                <>
                  {' '}
                  <a
                    href={i.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium underline underline-offset-2"
                  >
                    {i.lien_label ?? 'En savoir plus'}
                    <LienIcon />
                  </a>
                </>
              )}
            </span>
          </div>
        );
      })}

      {ressources.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          {ressources.map((r, idx) => (
            <a
              key={idx}
              href={r.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.75rem] text-primary hover:underline"
            >
              <LienIcon />
              {r.texte}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
