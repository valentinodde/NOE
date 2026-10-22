import { createContext, useContext } from 'react';

// { utilisateur, chargement, connecter(utilisateur), deconnecter() }
// utilisateur : { email, admin, organisation: { id, nom } } ou null
export const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

/** Chemin de retour après connexion : interne au site uniquement. */
export function retourSur(valeur) {
  return valeur && valeur.startsWith('/') && !valeur.startsWith('//') ? valeur : '/';
}
