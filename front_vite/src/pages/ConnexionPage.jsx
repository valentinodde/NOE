import { useRef, useState } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { demanderCode, verifierCode } from '../utils/api';
import { retourSur, useAuth } from '../utils/authContext';
import baieAuthie from '../assets/connexion-baie-authie.jpg';

// ─── Champ de saisie ──────────────────────────────────────────────────────────

function Champ({ id, label, aide, erreur, style, className = '', ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.8125rem] font-medium text-on-surface">
        {label}
      </label>
      <input
        id={id}
        className={`noe-connexion-champ w-full bg-surface-lowest rounded-xl px-4 py-3.5 text-on-surface text-base outline-none ${className}`}
        style={style}
        aria-invalid={erreur ? true : undefined}
        aria-describedby={erreur || aide ? `${id}-aide` : undefined}
        {...props}
      />
      {erreur ? (
        <p id={`${id}-aide`} className="text-[0.8125rem] text-secondary">{erreur}</p>
      ) : aide ? (
        <p id={`${id}-aide`} className="text-[0.75rem] text-on-surface-var" style={{ opacity: 0.7 }}>{aide}</p>
      ) : null}
    </div>
  );
}

function BoutonPrincipal({ children, ...props }) {
  return (
    <button
      type="submit"
      className="noe-connexion-bouton w-full text-white font-semibold py-3.5 rounded-xl text-[0.9375rem] disabled:opacity-30 disabled:cursor-not-allowed"
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
      className="text-[0.8125rem] font-medium text-on-surface-var hover:text-primary transition-colors disabled:opacity-40 rounded"
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── Panneau visuel ───────────────────────────────────────────────────────────

const ATOUTS = [
  {
    titre: 'Le territoire',
    texte: 'Sécheresses passées, arrêtés de restriction et état de la ressource autour du site.',
  },
  {
    titre: '2025, 2030, 2050',
    texte: 'La vulnérabilité du site à trois horizons, selon les projections climatiques.',
  },
  {
    titre: "Le plan d'action",
    texte: 'Des mesures propres au secteur, avec les prestataires et les aides mobilisables.',
  },
];

// Les cercles du logo, en ondes qui s'ouvrent une fois au chargement
function Ondes() {
  return (
    <svg
      className="noe-connexion-ondes absolute pointer-events-none"
      viewBox="0 0 800 800"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="onde-externe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7c3b0" />
          <stop offset="0.55" stopColor="#e3a3c0" />
          <stop offset="1" stopColor="#bfe9f3" />
        </linearGradient>
        <linearGradient id="onde-mediane" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b08ac0" />
          <stop offset="1" stopColor="#e88fbf" />
        </linearGradient>
      </defs>
      <circle className="noe-onde noe-onde-1" cx="400" cy="400" r="120" fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle className="noe-onde noe-onde-2" cx="400" cy="400" r="215" fill="none" stroke="url(#onde-mediane)" strokeOpacity="0.38" strokeWidth="26" />
      <circle className="noe-onde noe-onde-3" cx="400" cy="400" r="330" fill="none" stroke="url(#onde-externe)" strokeOpacity="0.5" strokeWidth="5" />
    </svg>
  );
}

function PanneauVisuel() {
  return (
    <aside className="noe-connexion-visuel relative overflow-hidden text-white lg:w-[56%] lg:min-h-screen">
      <img
        src={baieAuthie}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '58% 50%', filter: 'grayscale(0.35) contrast(1.12)' }}
        fetchPriority="high"
      />
      {/* Voile bichrome aux couleurs du logo, puis assombrissement du bas pour le texte */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(150deg, #9e1872 0%, #6b2d6f 38%, #1c1660 72%, #000a43 100%)',
          mixBlendMode: 'multiply',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(0,10,67,0) 35%, rgba(0,10,67,0.55) 70%, rgba(0,10,67,0.88) 100%)' }}
      />

      <Ondes />

      <div className="relative h-full flex flex-col justify-end px-6 pt-28 pb-8 sm:px-12 lg:px-14 lg:pb-12">
        <h2
          className="font-bold leading-[1.15] text-[1.875rem] sm:text-[2.5rem] lg:text-[3.25rem]"
          style={{ letterSpacing: '-0.025em' }}
        >
          Les enjeux eau de <br className="hidden sm:block" />
          <span className="noe-connexion-surligne">chaque établissement</span>
        </h2>

        <ul className="hidden lg:grid grid-cols-3 gap-8 mt-14">
          {ATOUTS.map(a => (
            <li key={a.titre} className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.28)' }}>
              <p className="font-semibold text-[0.9375rem] mb-1.5">{a.titre}</p>
              <p className="text-[0.8125rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {a.texte}
              </p>
            </li>
          ))}
        </ul>

      </div>

      {/* Crédit exigé par la licence CC BY-SA */}
      <p className="noe-connexion-credit absolute bottom-2 right-3 text-[0.625rem]">
        Baie d'Authie, Hauts-de-France. Photo{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Aerial_image_of_Baie_d%27Authie_(view_from_the_southwest).jpg" target="_blank" rel="noopener noreferrer">
          Carsten Steger
        </a>
        ,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr" target="_blank" rel="noopener noreferrer">
          CC BY-SA 4.0
        </a>
      </p>
    </aside>
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
    <div className="min-h-screen bg-surface flex flex-col lg:flex-row">
      <PanneauVisuel />

      <main className="flex-1 flex flex-col px-6 py-8 sm:px-12 lg:px-16 lg:py-10">
        <img src="/logo.png" alt="Noé by Hydros" className="h-16 lg:h-20 w-auto self-start -ml-2" />

        <div className="flex-1 flex items-center py-12">
          <div className="w-full max-w-sm">
            <h1
              className="text-[2rem] font-bold text-primary leading-tight mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              {etape === 'email' ? 'Connexion' : 'Vérifiez vos mails'}
            </h1>
            <p className="text-on-surface-var text-[0.9375rem] leading-relaxed mb-10">
              {etape === 'email'
                ? "Saisissez votre adresse professionnelle. Nous vous envoyons un code d'accès, sans mot de passe."
                : <>Si votre organisation a accès à Noé, un code à 6 chiffres vient d'être envoyé à <strong className="text-on-surface font-semibold">{email}</strong>. Il est valable 10 minutes.</>}
            </p>

            {etape === 'email' ? (
              <form onSubmit={envoyerCode} className="flex flex-col gap-6">
                <Champ
                  id="email"
                  label="Adresse mail professionnelle"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  placeholder="prenom.nom@entreprise.fr"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setErreur(null); }}
                  erreur={erreur}
                />

                <BoutonPrincipal disabled={!email.trim() || envoi}>
                  {envoi ? 'Envoi en cours…' : 'Recevoir un code'}
                </BoutonPrincipal>
              </form>
            ) : (
              <form onSubmit={e => { e.preventDefault(); valider(code); }} className="flex flex-col gap-6">
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
                  className="text-center"
                  style={{ fontSize: '1.5rem', letterSpacing: '0.5em', fontWeight: 600, fontVariantNumeric: 'tabular-nums', paddingLeft: '1.5em' }}
                />

                <BoutonPrincipal disabled={code.length !== 6 || envoi}>
                  {envoi ? 'Vérification…' : 'Se connecter'}
                </BoutonPrincipal>

                <div className="flex items-center justify-between">
                  <BoutonTexte onClick={changerAdresse} disabled={envoi}>Changer d'adresse</BoutonTexte>
                  <BoutonTexte onClick={() => envoyerCode()} disabled={envoi}>Renvoyer un code</BoutonTexte>
                </div>

                {contact && (
                  <p
                    className="text-[0.8125rem] text-on-surface-var leading-relaxed mt-2 pt-6"
                    style={{ borderTop: '1px solid #e8eaf3' }}
                  >
                    Rien reçu après quelques minutes ? Votre organisation n'a peut-être pas encore accès à Noé.
                    Pour le demander, écrivez à{' '}
                    <a href={`mailto:${contact}?subject=Accès à Noé`} className="text-primary font-medium underline">
                      {contact}
                    </a>.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <p className="text-[0.75rem] text-on-surface-var" style={{ opacity: 0.6 }}>
          Noé est conçu par{' '}
          <a href="https://hydros-consulting.com" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 hover:text-primary">
            Hydros Consulting
          </a>
          , conseil en gestion de l'eau.
        </p>
      </main>
    </div>
  );
}
