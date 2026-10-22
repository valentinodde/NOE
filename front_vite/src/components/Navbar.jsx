import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/authContext';

export default function Navbar() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const { utilisateur, deconnecter } = useAuth();
  const onSectors = location.pathname.startsWith('/sectors');
  const onFiches = location.pathname.startsWith('/fiches');
  const onAdmin = location.pathname.startsWith('/admin');

  async function seDeconnecter() {
    await deconnecter();
    navigate('/connexion', { replace: true });
  }

  return (
    <nav
      className="px-8 py-4 flex items-center justify-between"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #ede6ff',
        boxShadow: '0 1px 24px 0 rgba(134,59,255,0.07)',
      }}
    >
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-3.5 group"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        {/* Logo image */}
        <img
          src="/logo.png"
          alt="NOÉ by HYDROS"
          className="h-9 w-auto transition-opacity duration-200 group-hover:opacity-80"
        />

        {/* Tagline */}
        <span
          className="hidden sm:inline"
          style={{ fontSize: '0.6875rem', color: '#9b8ab8', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 400 }}
        >
          Analyse des Risques Eau
        </span>
      </button>

      {utilisateur && (
        <div className="flex items-center gap-4">
          {/* Outils internes, réservés aux admins */}
          {utilisateur.admin && (
            <div className="hidden sm:flex items-center gap-4">
              <LienNav actif={onSectors} onClick={() => navigate('/sectors')}>Référentiel sectoriel</LienNav>
              <LienNav actif={onFiches} onClick={() => navigate('/fiches')}>Fiches solutions</LienNav>
              <LienNav actif={onAdmin} onClick={() => navigate('/admin')}>Administration</LienNav>
              <span className="w-px h-4" style={{ background: '#ede6ff' }} />
            </div>
          )}

          <span className="hidden sm:inline text-xs" style={{ color: '#9b8ab8' }} title={utilisateur.organisation?.nom}>
            {utilisateur.email}
          </span>
          <LienNav onClick={seDeconnecter}>Déconnexion</LienNav>
        </div>
      )}
    </nav>
  );
}

function LienNav({ actif = false, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="text-xs font-medium transition-colors"
      style={{
        color: actif ? '#000a43' : '#9b8ab8',
        paddingBottom: 2,
        background: 'none',
        border: 'none',
        borderBottom: actif ? '1.5px solid #000a43' : '1.5px solid transparent',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
