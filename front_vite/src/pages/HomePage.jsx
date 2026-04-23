import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const [siret, setSiret] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value.replace(/\D/g, '').slice(0, 14);
    setSiret(value);
    if (error) setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (siret.length !== 14) {
      setError('Le SIRET doit contenir exactement 14 chiffres.');
      return;
    }
    navigate(`/etablissement/${siret}`);
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">

          {/* Hero — asymmetric left padding for editorial feel */}
          <div className="mb-12 pl-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[0.6875rem] font-medium tracking-widest uppercase"
              style={{ background: 'rgba(0,10,67,0.06)', color: '#000a43' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block" />
              Water Risk Intelligence
            </div>
            <h1
              className="text-[2.5rem] font-bold text-primary leading-tight mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              Analyse des<br />Risques Eau
            </h1>
            <p className="text-on-surface-var text-[0.875rem] leading-relaxed">
              Identifiez les enjeux liés à l'eau pour<br />les établissements de vos clients.
            </p>
          </div>

          {/* Search card — tonal layering, no border */}
          <div
            className="bg-surface-low rounded-2xl p-8"
            style={{ boxShadow: '0 0 48px rgba(0,10,67,0.04)' }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="siret"
                  className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest"
                >
                  Numéro SIRET
                </label>
                {/* Background-only input: 2px bottom bar appears on focus */}
                <input
                  id="siret"
                  type="text"
                  inputMode="numeric"
                  placeholder="Ex : 93754421100017"
                  value={siret}
                  onChange={handleChange}
                  className="w-full bg-surface-high rounded-xl px-4 py-3.5 text-on-surface text-base outline-none"
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: '2px solid transparent',
                    transition: 'border-bottom-color 0.18s, background-color 0.18s',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderBottomColor = '#000a43';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderBottomColor = 'transparent';
                    e.currentTarget.style.backgroundColor = '';
                  }}
                />
                {error ? (
                  <p className="text-[0.75rem] text-secondary">{error}</p>
                ) : (
                  <p className="text-[0.6875rem] text-on-surface-var" style={{ opacity: 0.5 }}>
                    {siret.length}/14 chiffres
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={siret.length === 0}
                className="w-full text-white font-semibold py-3.5 rounded-xl transition-opacity disabled:opacity-30 text-[0.875rem] tracking-wide"
                style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
              >
                Analyser l'établissement →
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
