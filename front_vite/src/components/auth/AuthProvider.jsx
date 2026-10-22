import { useCallback, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../../utils/authContext';
import { deconnecter as deconnecterApi, fetchMoi } from '../../utils/api';

export default function AuthProvider({ children }) {
  const [utilisateur, setUtilisateur] = useState(null);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    fetchMoi()
      .then(setUtilisateur)
      .catch(() => setUtilisateur(null))
      .finally(() => setChargement(false));
  }, []);

  const deconnecter = useCallback(async () => {
    await deconnecterApi().catch(() => {});
    setUtilisateur(null);
  }, []);

  const valeur = useMemo(
    () => ({ utilisateur, chargement, connecter: setUtilisateur, deconnecter }),
    [utilisateur, chargement, deconnecter],
  );

  return <AuthContext.Provider value={valeur}>{children}</AuthContext.Provider>;
}
