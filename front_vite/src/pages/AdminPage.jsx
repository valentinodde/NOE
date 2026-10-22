// Console d'admin : organisations autorisées (par domaine d'adresse mail) et
// utilisateurs de Noé. Réservée aux admins, côté front comme côté API.

import { useCallback, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import {
  creerOrganisation, fetchOrganisations, fetchUtilisateurs, modifierOrganisation,
  modifierUtilisateur, revoquerSessions, supprimerOrganisation,
} from '../utils/api';
import { useAuth } from '../utils/authContext';

const lireTout = () => Promise.all([fetchOrganisations(), fetchUtilisateurs()]);

const lireDomaines = texte => texte.split(/[\s,;]+/).map(d => d.trim()).filter(Boolean);

const FORMAT_DATE = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'medium', timeStyle: 'short' });
const date = valeur => (valeur ? FORMAT_DATE.format(new Date(valeur)) : 'Jamais');

// ─── Briques ──────────────────────────────────────────────────────────────────

function Section({ titre, description, children }) {
  return (
    <section className="bg-surface-low rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
      <div>
        <h2 className="text-lg font-bold text-primary" style={{ letterSpacing: '-0.01em' }}>{titre}</h2>
        {description && <p className="text-[0.8125rem] text-on-surface-var mt-1 max-w-3xl">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function Erreur({ message, onFermer }) {
  if (!message) return null;
  return (
    <div
      className="rounded-xl p-3 flex items-start justify-between gap-3 text-[0.8125rem] text-on-surface"
      style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.18)' }}
      role="alert"
    >
      <span>{message}</span>
      <button onClick={onFermer} className="text-on-surface-var hover:text-on-surface" aria-label="Fermer">×</button>
    </div>
  );
}

function Saisie({ className = '', ...props }) {
  return (
    <input
      className={`bg-surface-lowest rounded-xl px-3 py-2.5 text-[0.875rem] text-on-surface outline-none focus:ring-2 focus:ring-[#051b71]/20 ${className}`}
      {...props}
    />
  );
}

function Bouton({ variante = 'principal', className = '', children, ...props }) {
  const styles = {
    principal: 'text-white font-semibold px-4 py-2.5 hover:opacity-80',
    secondaire: 'bg-surface-high text-on-surface font-medium px-3 py-2 hover:bg-surface-highest',
    danger: 'text-[#b91c1c] font-medium px-3 py-2 hover:bg-[rgba(239,68,68,0.08)]',
  };
  return (
    <button
      className={`rounded-xl text-[0.8125rem] transition disabled:opacity-30 disabled:cursor-not-allowed whitespace-nowrap ${styles[variante]} ${className}`}
      style={variante === 'principal' ? { background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' } : undefined}
      {...props}
    >
      {children}
    </button>
  );
}

function Pastille({ actif, children }) {
  const couleur = actif ? '#15803d' : '#64748b';
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.75rem] font-semibold whitespace-nowrap"
      style={{ color: couleur, background: actif ? 'rgba(34,197,94,0.10)' : 'rgba(148,163,184,0.15)' }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: couleur }} />
      {children}
    </span>
  );
}

function Tableau({ colonnes, children }) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ boxShadow: '0 1px 4px rgba(0,0,20,0.05)' }}>
      <table className="w-full text-left" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr className="bg-surface-high">
            {colonnes.map(c => (
              <th
                key={c}
                className="px-4 py-3 text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest whitespace-nowrap"
                style={{ borderBottom: '1px solid #e0e2eb' }}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

const ligne = 'bg-surface-lowest align-top';
const cellule = 'px-4 py-3.5 text-[0.875rem] text-on-surface';
const celluleSecondaire = 'px-4 py-3.5 text-[0.8125rem] text-on-surface-var';
const bordure = { borderBottom: '1px solid #e8eaf3' };

// ─── Organisations ────────────────────────────────────────────────────────────

function FormulaireOrganisation({ initial, onValider, onAnnuler, libelle }) {
  const [nom, setNom] = useState(initial?.nom ?? '');
  const [domaines, setDomaines] = useState((initial?.domaines ?? []).join(', '));
  const [notes, setNotes] = useState(initial?.notes ?? '');
  const [envoi, setEnvoi] = useState(false);

  async function valider(e) {
    e.preventDefault();
    setEnvoi(true);
    const ok = await onValider({ nom, domaines: lireDomaines(domaines), notes });
    setEnvoi(false);
    if (ok && !initial) { setNom(''); setDomaines(''); setNotes(''); }
  }

  return (
    <form onSubmit={valider} className="grid gap-3 sm:grid-cols-[1fr_1.2fr_1.2fr_auto] items-start">
      <Saisie placeholder="Nom de l'organisation" value={nom} onChange={e => setNom(e.target.value)} aria-label="Nom" />
      <div className="flex flex-col gap-1">
        <Saisie placeholder="entreprise.fr, groupe.com" value={domaines} onChange={e => setDomaines(e.target.value)} aria-label="Domaines" />
        <span className="text-[0.6875rem] text-on-surface-var pl-1">Séparés par une virgule. Pas de messagerie grand public.</span>
      </div>
      <Saisie placeholder="Notes (contrat, interlocuteur…)" value={notes} onChange={e => setNotes(e.target.value)} aria-label="Notes" />
      <div className="flex gap-2">
        <Bouton type="submit" disabled={envoi || !nom.trim() || !lireDomaines(domaines).length}>{libelle}</Bouton>
        {onAnnuler && <Bouton type="button" variante="secondaire" onClick={onAnnuler}>Annuler</Bouton>}
      </div>
    </form>
  );
}

function Organisations({ organisations, recharger }) {
  const [erreur, setErreur] = useState(null);
  const [enEdition, setEnEdition] = useState(null);

  const agir = useCallback(async action => {
    setErreur(null);
    try {
      await action();
      await recharger();
      return true;
    } catch (err) {
      setErreur(err.message);
      return false;
    }
  }, [recharger]);

  return (
    <Section
      titre="Organisations autorisées"
      description="Toute adresse dont le domaine figure ici peut demander un code d'accès. Désactiver une organisation coupe immédiatement les sessions de ses utilisateurs."
    >
      <FormulaireOrganisation libelle="Ajouter" onValider={champs => agir(() => creerOrganisation(champs))} />
      <Erreur message={erreur} onFermer={() => setErreur(null)} />

      <Tableau colonnes={['Organisation', 'Domaines', 'Utilisateurs', 'État', '']}>
        {organisations.map(o => enEdition === o.id ? (
          <tr key={o.id} className={ligne} style={bordure}>
            <td colSpan={5} className="px-4 py-4">
              <FormulaireOrganisation
                initial={o}
                libelle="Enregistrer"
                onAnnuler={() => setEnEdition(null)}
                onValider={async champs => {
                  const ok = await agir(() => modifierOrganisation(o.id, champs));
                  if (ok) setEnEdition(null);
                  return ok;
                }}
              />
            </td>
          </tr>
        ) : (
          <tr key={o.id} className={ligne} style={bordure}>
            <td className={cellule}>
              <div className="font-semibold">{o.nom}</div>
              {o.notes && <div className="text-[0.75rem] text-on-surface-var mt-0.5 max-w-xs">{o.notes}</div>}
            </td>
            <td className={celluleSecondaire}>
              <div className="flex flex-wrap gap-1.5">
                {o.domaines.map(d => (
                  <span key={d} className="bg-surface-high rounded-lg px-2 py-0.5 text-[0.75rem] text-on-surface">{d}</span>
                ))}
              </div>
            </td>
            <td className={celluleSecondaire}>{o.nb_utilisateurs}</td>
            <td className={celluleSecondaire}><Pastille actif={o.actif}>{o.actif ? 'Active' : 'Désactivée'}</Pastille></td>
            <td className="px-4 py-2.5">
              <div className="flex justify-end gap-1">
                <Bouton variante="secondaire" onClick={() => setEnEdition(o.id)}>Modifier</Bouton>
                <Bouton variante="secondaire" onClick={() => agir(() => modifierOrganisation(o.id, { actif: !o.actif }))}>
                  {o.actif ? 'Désactiver' : 'Réactiver'}
                </Bouton>
                <Bouton
                  variante="danger"
                  onClick={() => window.confirm(`Supprimer ${o.nom} ? Ses utilisateurs perdront leur accès.`)
                    && agir(() => supprimerOrganisation(o.id))}
                >
                  Supprimer
                </Bouton>
              </div>
            </td>
          </tr>
        ))}
        {!organisations.length && (
          <tr className={ligne}><td colSpan={5} className={celluleSecondaire}>Aucune organisation.</td></tr>
        )}
      </Tableau>
    </Section>
  );
}

// ─── Utilisateurs ─────────────────────────────────────────────────────────────

function Utilisateurs({ utilisateurs, recharger }) {
  const { utilisateur: moi } = useAuth();
  const [erreur, setErreur] = useState(null);

  async function agir(action) {
    setErreur(null);
    try {
      await action();
      await recharger();
    } catch (err) {
      setErreur(err.message);
    }
  }

  return (
    <Section
      titre="Utilisateurs"
      description="Chaque personne apparaît après sa première connexion. Une session dure 30 jours. Fermer les sessions oblige à redemander un code."
    >
      <Erreur message={erreur} onFermer={() => setErreur(null)} />

      <Tableau colonnes={['Adresse', 'Organisation', 'Première connexion', 'Dernière activité', 'Connexions', 'Admin', 'Sessions']}>
        {utilisateurs.map(u => (
          <tr key={u.email} className={ligne} style={bordure}>
            <td className={`${cellule} font-medium`}>{u.email}</td>
            <td className={celluleSecondaire}>
              {u.organisation
                ? <>{u.organisation}{!u.organisation_active && <span className="block text-[0.75rem]">désactivée</span>}</>
                : <span className="text-[0.75rem]">Domaine non autorisé</span>}
            </td>
            <td className={`${celluleSecondaire} whitespace-nowrap`}>{date(u.premiere_connexion)}</td>
            <td className={`${celluleSecondaire} whitespace-nowrap`}>{date(u.derniere_activite || u.derniere_connexion)}</td>
            <td className={celluleSecondaire}>{u.nb_connexions}</td>
            <td className={celluleSecondaire}>
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#051b71] cursor-pointer disabled:cursor-not-allowed"
                checked={u.admin}
                disabled={u.email === moi?.email}
                title={u.email === moi?.email ? 'Vous ne pouvez pas retirer vos propres droits' : undefined}
                onChange={e => agir(() => modifierUtilisateur(u.email, { admin: e.target.checked }))}
                aria-label={`Admin : ${u.email}`}
              />
            </td>
            <td className="px-4 py-2.5">
              <div className="flex items-center justify-end gap-3">
                <span className="text-[0.8125rem] text-on-surface-var whitespace-nowrap">{u.sessions_actives} active{u.sessions_actives > 1 ? 's' : ''}</span>
                <Bouton
                  variante="secondaire"
                  disabled={!u.sessions_actives}
                  onClick={() => window.confirm(`Fermer les sessions de ${u.email} ?`) && agir(() => revoquerSessions(u.email))}
                >
                  Fermer
                </Bouton>
              </div>
            </td>
          </tr>
        ))}
        {!utilisateurs.length && (
          <tr className={ligne}><td colSpan={7} className={celluleSecondaire}>Personne ne s'est encore connecté.</td></tr>
        )}
      </Tableau>
    </Section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [organisations, setOrganisations] = useState(null);
  const [utilisateurs, setUtilisateurs] = useState(null);
  const [erreur, setErreur] = useState(null);

  const recharger = useCallback(() => lireTout().then(([orgs, users]) => {
    setOrganisations(orgs);
    setUtilisateurs(users);
  }), []);

  useEffect(() => {
    lireTout()
      .then(([orgs, users]) => {
        setOrganisations(orgs);
        setUtilisateurs(users);
      })
      .catch(err => setErreur(err.message));
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-bold text-primary mb-1">Administration</h1>
          <p className="text-sm text-on-surface-var max-w-3xl">
            Les organisations qui ont accès à Noé et les personnes qui s'y connectent.
          </p>
        </div>

        {erreur && <Erreur message={erreur} onFermer={() => setErreur(null)} />}

        {organisations && utilisateurs ? (
          <>
            <Organisations organisations={organisations} recharger={recharger} />
            <Utilisateurs utilisateurs={utilisateurs} recharger={recharger} />
          </>
        ) : !erreur && (
          <p className="text-sm text-on-surface-var py-16 text-center">Chargement…</p>
        )}
      </main>
    </div>
  );
}
