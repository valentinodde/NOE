// Recherche d'une commune (côté API, nom ou code INSEE) ou d'un bassin (par
// son nom ou son cours d'eau, sur les bassins déjà chargés). Le choix
// remonte l'identifiant du bassin : celui qui contient la commune.

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { fetchCommunes } from '../../utils/api';
import { DEPARTEMENTS } from '../../utils/territoiresFrance';

const sansAccents = (t) => (t ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export default function RechercheTerritoire({ bassins, onChoix }) {
  const [texte, setTexte] = useState('');
  const [communes, setCommunes] = useState([]);
  const [ouvert, setOuvert] = useState(false);
  const [actif, setActif] = useState(0);
  const idListe = useId();
  const boite = useRef(null);

  const cle = sansAccents(texte.trim());

  useEffect(() => {
    if (cle.length < 2) return undefined;
    const controleur = new AbortController();
    const minuterie = setTimeout(() => {
      fetchCommunes(cle, { signal: controleur.signal }).then(setCommunes).catch(() => {});
    }, 200);
    return () => { clearTimeout(minuterie); controleur.abort(); };
  }, [cle]);

  const resultats = useMemo(() => {
    if (cle.length < 2) return [];
    const parBassin = bassins
      .filter((p) => sansAccents(p.nom).includes(cle) || sansAccents(p.cours_eau).includes(cle))
      .slice(0, 4)
      .map((p) => ({ cle: `b-${p.id}`, bassin: p.id, titre: p.nom, detail: 'Bassin versant' }));
    const parCommune = communes.map((c) => ({
      cle: `c-${c.code}`,
      bassin: c.bassin_id,
      titre: c.nom,
      detail: `Commune · ${DEPARTEMENTS[c.dep] ?? c.dep} (${c.dep})`,
    }));
    return [...parCommune, ...parBassin].slice(0, 10);
  }, [cle, bassins, communes]);

  useEffect(() => {
    const fermer = (e) => { if (!boite.current?.contains(e.target)) setOuvert(false); };
    document.addEventListener('mousedown', fermer);
    return () => document.removeEventListener('mousedown', fermer);
  }, []);

  function choisir(r) {
    if (!r) return;
    onChoix(r.bassin);
    setTexte(r.titre);
    setOuvert(false);
  }

  function clavier(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setOuvert(true); setActif((i) => Math.min(i + 1, resultats.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActif((i) => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); choisir(resultats[actif]); }
    else if (e.key === 'Escape') setOuvert(false);
  }

  const visible = ouvert && resultats.length > 0;

  return (
    <div ref={boite} className="relative w-full sm:w-[280px]">
      <input
        type="search"
        role="combobox"
        aria-expanded={visible}
        aria-controls={idListe}
        aria-label="Rechercher une commune ou un bassin versant"
        aria-autocomplete="list"
        aria-activedescendant={visible ? `${idListe}-${actif}` : undefined}
        placeholder="Commune ou bassin versant"
        value={texte}
        onChange={(e) => { setTexte(e.target.value); setOuvert(true); setActif(0); }}
        onFocus={() => setOuvert(true)}
        onKeyDown={clavier}
        className="w-full px-3 py-2 rounded-xl border text-sm bg-white focus:outline-none focus:border-primary-container"
        style={{ borderColor: '#e0e2eb' }}
      />
      {visible && (
        <ul
          id={idListe}
          role="listbox"
          className="absolute z-40 mt-1 w-full bg-white rounded-xl py-1 max-h-[320px] overflow-y-auto"
          style={{ border: '1px solid #e0e2eb', boxShadow: '0 8px 24px rgba(0,10,67,0.12)' }}
        >
          {resultats.map((r, i) => (
            <li
              key={r.cle}
              id={`${idListe}-${i}`}
              role="option"
              aria-selected={i === actif}
              onMouseDown={(e) => { e.preventDefault(); choisir(r); }}
              onMouseEnter={() => setActif(i)}
              className="px-3 py-1.5 cursor-pointer"
              style={{ background: i === actif ? '#f1f3fc' : undefined }}
            >
              <p className="text-[0.8125rem] text-on-surface leading-snug">{r.titre}</p>
              <p className="text-[0.6875rem] text-on-surface-var">{r.detail}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
