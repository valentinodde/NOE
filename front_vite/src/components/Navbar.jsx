import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

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

      {/* Accent pill — decorative brand touch */}
      <div
        className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full"
        style={{ background: 'linear-gradient(90deg, #f3eeff 0%, #e8f7ff 100%)', border: '1px solid #ddd6f8' }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: 'linear-gradient(135deg, #863bff, #47bfff)' }}
        />
        <span style={{ fontSize: '0.6875rem', color: '#7e14ff', fontWeight: 500, letterSpacing: '0.04em' }}>
          Water Risk Intelligence
        </span>
      </div>
    </nav>
  );
}
