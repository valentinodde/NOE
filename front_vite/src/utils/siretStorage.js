/**
 * Factory qui crée un helper localStorage scopé à un SIRET.
 *
 * Les données sont stockées sous `key` avec la forme :
 *   { siret: "...", ...data }
 *
 * Si le SIRET stocké ne correspond pas au SIRET courant, l'entrée est ignorée
 * (évite les collisions entre deux entreprises différentes).
 *
 * Usage :
 *   const storage = createSiretStorage('maturite_data');
 *   storage.load(siret)            // → data | null
 *   storage.persist(siret, data)   // void
 *   storage.clear()                // void
 */
export function createSiretStorage(key) {
  return {
    /** Retourne les données stockées, ou null si absent / SIRET différent. */
    load(siret) {
      if (!siret) return null;
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (parsed.siret !== siret) return null;
        const { siret: _omit, ...data } = parsed;
        return data;
      } catch { return null; }
    },

    /** Persiste les données avec le SIRET associé. */
    persist(siret, data) {
      if (!siret) return;
      try { localStorage.setItem(key, JSON.stringify({ siret, ...data })); }
      catch {}
    },

    /** Supprime l'entrée. */
    clear() {
      try { localStorage.removeItem(key); }
      catch {}
    },
  };
}
