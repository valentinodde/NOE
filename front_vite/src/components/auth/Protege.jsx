import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../utils/authContext';

/**
 * Page réservée aux utilisateurs connectés (aux admins avec `admin`).
 * L'API applique les mêmes règles : cette garde évite seulement d'afficher
 * une page vide avant la redirection.
 */
export default function Protege({ admin = false, children }) {
  const { utilisateur, chargement } = useAuth();
  const location = useLocation();

  if (chargement) return <div className="min-h-screen bg-surface" />;

  if (!utilisateur) {
    const retour = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/connexion?retour=${retour}`} replace />;
  }

  if (admin && !utilisateur.admin) return <Navigate to="/" replace />;

  return children;
}
