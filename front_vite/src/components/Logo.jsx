import { useState } from 'react';

/**
 * Logo d'un prestataire ou d'un financeur, dans un cadre à taille fixe.
 * Sans URL, ou si l'image ne charge pas, on affiche les initiales du nom :
 * une fiche sans logo ne doit jamais laisser un trou dans la carte.
 */
export default function Logo({ url, nom, size = 40 }) {
  // On mémorise l'URL en échec plutôt qu'un booléen : un changement d'URL
  // retente le chargement sans effet de synchronisation.
  const [brokenUrl, setBrokenUrl] = useState(null);
  const broken = url && brokenUrl === url;

  const initiales = (nom ?? '')
    .split(/\s+/)
    .filter(w => /^[A-Za-zÀ-ÿ]/.test(w))
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');

  const frame = {
    width: size,
    height: size,
    border: '1px solid rgba(0,10,67,0.08)',
  };

  if (!url || broken) {
    return (
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/8 text-primary font-bold select-none"
        style={{ ...frame, fontSize: size * 0.34 }}
        aria-hidden="true"
      >
        {initiales || '?'}
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 flex items-center justify-center rounded-lg bg-white p-1" style={frame}>
      <img
        src={url}
        alt={nom ?? ''}
        onError={() => setBrokenUrl(url)}
        className="max-w-full max-h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}
