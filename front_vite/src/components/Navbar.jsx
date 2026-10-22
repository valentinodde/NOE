import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const onSectors = location.pathname.startsWith('/sectors');
  const onTerritoires = location.pathname.startsWith('/territoires');
  const onFiches = location.pathname.startsWith('/fiches');

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
          style={{ fontSize: '0.6875rem', color: '#9b8ab8', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 400 }}
        >
          Analyse des Risques Eau
        </span>
      </button>

      <div className="hidden sm:flex items-center gap-4">
        {/* Territoires link */}
        <button
          onClick={() => navigate('/territoires')}
          className="text-xs font-medium transition-colors"
          style={{
            color: onTerritoires ? '#000a43' : '#9b8ab8',
            paddingBottom: 2,
            background: 'none',
            border: 'none',
            borderBottom: onTerritoires ? '1.5px solid #000a43' : '1.5px solid transparent',
            cursor: 'pointer',
          }}
        >
          Vision territoriale
        </button>

        {/* Sectors link */}
        <button
          onClick={() => navigate('/sectors')}
          className="text-xs font-medium transition-colors"
          style={{
            color: onSectors ? '#000a43' : '#9b8ab8',
            paddingBottom: 2,
            background: 'none',
            border: 'none',
            borderBottom: onSectors ? '1.5px solid #000a43' : '1.5px solid transparent',
            cursor: 'pointer',
          }}
        >
          Référentiel sectoriel
        </button>

        {/* Fiches link */}
        <button
          onClick={() => navigate('/fiches')}
          className="text-xs font-medium transition-colors"
          style={{
            color: onFiches ? '#000a43' : '#9b8ab8',
            paddingBottom: 2,
            background: 'none',
            border: 'none',
            borderBottom: onFiches ? '1.5px solid #000a43' : '1.5px solid transparent',
            cursor: 'pointer',
          }}
        >
          Fiches solutions
        </button>
      </div>
    </nav>
  );
}
