import { useRef, useState } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { demanderCode, verifierCode } from '../utils/api';
import { retourSur, useAuth } from '../utils/authContext';

// ─── Champ de saisie (même habillage que la recherche SIRET) ──────────────────

function Champ({ id, label, aide, erreur, style, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest"
      >
        {label}
      </label>
      <input
        id={id}
        className="w-full bg-surface-high rounded-xl px-4 py-3.5 text-on-surface text-base outline-none"
        style={{
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: '2px solid transparent',
          transition: 'border-bottom-color 0.18s, background-color 0.18s',
          ...style,
        }}
        onFocus={e => {
          e.currentTarget.style.borderBottomColor = '#000a43';
          e.currentTarget.style.backgroundColor = '#ffffff';
        }}
        onBlur={e => {
          e.currentTarget.style.borderBottomColor = 'transparent';
          e.currentTarget.style.backgroundColor = '';
        }}
        {...props}
      />
      {erreur ? (
        <p className="text-[0.75rem] text-secondary">{erreur}</p>
      ) : aide ? (
        <p className="text-[0.6875rem] text-on-surface-var" style={{ opacity: 0.6 }}>{aide}</p>
      ) : null}
    </div>
  );
}

function BoutonPrincipal({ children, ...props }) {
  return (
    <button
      type="submit"
      className="w-full text-white font-semibold py-3.5 rounded-xl transition-opacity hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed text-[0.875rem] tracking-wide"
      style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
      {...props}
    >
      {children}
    </button>
  );
}

function BoutonTexte({ children, ...props }) {
  return (
    <button
      type="button"
      className="text-[0.8125rem] font-medium text-on-surface-var hover:text-on-surface transition-colors disabled:opacity-40"
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConnexionPage() {
  const { utilisateur, chargement, connecter } = useAuth();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const retour = retourSur(params.get('retour'));

  const [etape, setEtape] = useState('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState(null);
  const [contact, setContact] = useState(null);
  const [renvoye, setRenvoye] = useState(false);
  const champCode = useRef(null);

  if (chargement) return <div className="min-h-screen bg-surface" />;
  if (utilisateur) return <Navigate to={retour} replace />;

  async function envoyerCode(e) {
    e?.preventDefault();
    setEnvoi(true);
    setErreur(null);
    try {
      // Même réponse que l'organisation ait accès ou non (pas d'énumération)
      const reponse = await demanderCode(email);
      setEmail(reponse.email);
      setContact(reponse.contact);
      setRenvoye(etape === 'code');
      setEtape('code');
      setCode('');
      setTimeout(() => champCode.current?.focus(), 0);
    } catch (err) {
      setErreur(err.message);
    } finally {
      setEnvoi(false);
    }
  }

  async function valider(valeur) {
    if (envoi || valeur.length !== 6) return;
    setEnvoi(true);
    setErreur(null);
    try {
      connecter(await verifierCode(email, valeur));
      navigate(retour, { replace: true });
    } catch (err) {
      setErreur(err.message);
      setCode('');
      champCode.current?.focus();
    } finally {
      setEnvoi(false);
    }
  }

  function saisirCode(e) {
    const valeur = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(valeur);
    if (erreur) setErreur(null);
    if (valeur.length === 6) valider(valeur);
  }

  function changerAdresse() {
    setEtape('email');
    setCode('');
    setErreur(null);
    setRenvoye(false);
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">

          <div className="mb-12 pl-2">
            <h1
              className="text-[2.5rem] font-bold text-primary leading-tight mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              Analyse des<br />Risques Eau
            </h1>
            <p className="text-on-surface-var text-[0.875rem] leading-relaxed">
              {etape === 'email'
                ? <>Connectez-vous avec votre adresse professionnelle.<br />Nous vous envoyons un code d'accès.</>
                : <>Si votre organisation a accès à Noé, un code à 6 chiffres vient d'être envoyé à <strong className="text-on-surface font-semibold">{email}</strong>. Il est valable 10 minutes.</>}
            </p>
          </div>

          <div
            className="bg-surface-low rounded-2xl p-8"
            style={{ boxShadow: '0 0 48px rgba(0,10,67,0.04)' }}
          >
            {etape === 'email' ? (
              <form onSubmit={envoyerCode} className="flex flex-col gap-5">
                <Champ
                  id="email"
                  label="Adresse mail"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  placeholder="prenom.nom@entreprise.fr"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setErreur(null); }}
                  erreur={erreur}
                />

                <BoutonPrincipal disabled={!email.trim() || envoi}>
                  {envoi ? 'Envoi en cours…' : "Recevoir un code d'accès →"}
                </BoutonPrincipal>
              </form>
            ) : (
              <form onSubmit={e => { e.preventDefault(); valider(code); }} className="flex flex-col gap-5">
                <Champ
                  id="code"
                  ref={champCode}
                  label="Code d'accès"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  autoFocus
                  placeholder="000000"
                  value={code}
                  onChange={saisirCode}
                  erreur={erreur}
                  aide={renvoye ? "Un nouveau code vient d'être envoyé. Seul le dernier reçu est valable." : 'Pensez à vérifier vos courriers indésirables.'}
                  style={{ letterSpacing: '0.4em', fontWeight: 600 }}
                />

                {contact && (
                  <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
                    Rien reçu après quelques minutes ? Votre organisation n'a peut-être pas encore accès à Noé.
                    Pour le demander, écrivez à{' '}
                    <a href={`mailto:${contact}?subject=Accès à Noé`} className="text-primary font-medium underline">
                      {contact}
                    </a>.
                  </p>
                )}

                <BoutonPrincipal disabled={code.length !== 6 || envoi}>
                  {envoi ? 'Vérification…' : 'Se connecter →'}
                </BoutonPrincipal>

                <div className="flex items-center justify-between">
                  <BoutonTexte onClick={changerAdresse} disabled={envoi}>Changer d'adresse</BoutonTexte>
                  <BoutonTexte onClick={() => envoyerCode()} disabled={envoi}>Renvoyer un code</BoutonTexte>
                </div>
              </form>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
