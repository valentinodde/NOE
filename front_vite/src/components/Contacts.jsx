/**
 * Contacts d'un prestataire : liens cliquables (site, LinkedIn, mail,
 * téléphone) et adresse en texte. Vocabulaire fermé : site_internet, mail,
 * tel, adresse, linkedin.
 */

function hostname(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch { return url; }
}

const ICONES_CONTACT = {
  site_internet: <><circle cx="8" cy="8" r="6" /><path d="M2 8h12M8 2c1.8 1.8 2.6 3.8 2.6 6S9.8 12.2 8 14C6.2 12.2 5.4 10.2 5.4 8S6.2 3.8 8 2z" /></>,
  linkedin:      <><rect x="2" y="2" width="12" height="12" rx="2" /><path d="M5 7v4M5 5v.01M8 11V7M8 9a2 2 0 0 1 4 0v2" /></>,
  mail:          <><rect x="2" y="3.5" width="12" height="9" rx="1.5" /><path d="M2.5 4.5 8 9l5.5-4.5" /></>,
  tel:           <path d="M5.5 2.5 3 3c-.5 4.8 5.2 10.5 10 10l.5-2.5-2.8-1.2-1.4 1.4C7.6 9.9 6.1 8.4 5.3 6.7l1.4-1.4z" />,
  adresse:       <><path d="M8 14s4.5-4.2 4.5-7.5a4.5 4.5 0 0 0-9 0C3.5 9.8 8 14 8 14z" /><circle cx="8" cy="6.5" r="1.5" /></>,
};

// `sansFilet` : pas de filet de séparation au-dessus (rubrique déjà titrée)
export default function Contacts({ contacts, sansFilet }) {
  if (!contacts?.length) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${sansFilet ? '' : 'pt-3'}`} style={sansFilet ? undefined : { borderTop: '1px solid #e0e2eb' }}>
      {contacts.map((c, i) => <Contact key={i} {...c} />)}
    </div>
  );
}

export function Contact({ type, value }) {
  const icone = ICONES_CONTACT[type];
  if (!icone) return null;

  const contenu = (
    <>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
        {icone}
      </svg>
      <span className="min-w-0 break-words">
        {type === 'site_internet' ? hostname(value) : type === 'linkedin' ? 'LinkedIn' : value}
      </span>
    </>
  );
  const cls = 'inline-flex items-center gap-1.5 rounded-lg bg-surface-low px-2.5 py-1.5 text-[0.75rem]';

  if (type === 'adresse') return <span className={`${cls} text-on-surface-var`}>{contenu}</span>;

  const href =
    type === 'mail' ? `mailto:${value}` :
    type === 'tel'  ? `tel:${value.replace(/\s/g, '')}` :
                      value;
  const externe = type === 'site_internet' || type === 'linkedin';

  return (
    <a
      href={href}
      {...(externe ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${cls} font-medium text-primary transition-colors hover:bg-surface-high`}
    >
      {contenu}
    </a>
  );
}
