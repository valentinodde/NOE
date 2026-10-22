// Panneau de droite de la page Fiches solutions : la fiche telle qu'elle est
// écrite (contenu, rattachements, mesures liées, sources), puis ce qui sert à
// la relire (verdict du contrôleur, contrôles, fichiers où elle se trouve).

import Logo from '../Logo';
import Contacts from '../Contacts';
import InfosComplementaires from '../InfosComplementaires';
import { roleLabels, TYPE_AIDE, TYPE_PRESTATAIRE } from '../../utils/solutionsMatching';
import { AGENCES, fmtDate, liensMesures, nomDepartement } from '../../utils/fichesExplorateur';
import { Badge, BadgesEdition, PastilleCouleur, Rubrique } from './FichesUI';
import { Copiable, Fichiers, ListeRepliable, Relecture, Sources, Terme, Tuile } from './Rubriques';

const CIEL = { plein: '#0097d6', fond: 'rgba(0,151,214,0.10)', texte: '#00628c' };

export default function PanneauFiche({ fiche: f, onglet, referentiel, onOuvrir, onFermer }) {
  const aide = onglet === 'aides';
  const type = (aide ? TYPE_AIDE : TYPE_PRESTATAIRE)[f.type] ?? f.type;

  return (
    <div className="flex flex-col gap-4">
      {/* En-tête */}
      <div className="flex items-start gap-3">
        <Logo url={f.logo_url} nom={aide ? f.financeur ?? f.nom : f.nom} size={48} />
        <div className="flex-1 min-w-0">
          <h2 className="text-[1.125rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.01em' }}>{f.nom}</h2>
          <p className="text-[0.75rem] text-on-surface-var leading-snug mt-0.5">
            {[type, aide ? f.financeur : null].filter(Boolean).join(', ')}
          </p>
          <p className="mt-1"><Copiable texte={f.id} className="text-[0.6875rem] font-mono" /></p>
        </div>
        <button
          type="button"
          onClick={onFermer}
          aria-label="Fermer la fiche"
          className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-var hover:bg-surface-low hover:text-primary transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <BadgesEdition fiche={f} controles={false} />
        {f.date_maj && <Badge>Mise à jour le {fmtDate(f.date_maj)}</Badge>}
      </div>

      {/* Contenu */}
      {aide && (f.taux || f.plafond) && (
        <div className={`grid grid-cols-1 gap-2 ${f.taux && f.plafond ? 'sm:grid-cols-2' : ''}`}>
          {f.taux    && <Tuile label="Taux ou montant">{f.taux}</Tuile>}
          {f.plafond && <Tuile label="Plafond">{f.plafond}</Tuile>}
        </div>
      )}

      {f.description
        ? <p className="text-[0.8125rem] text-on-surface leading-relaxed">{f.description}</p>
        : <p className="text-[0.8125rem] text-on-surface-var italic">Pas de description.</p>}

      {f.expertises?.length > 0 && (
        <ul className="flex flex-wrap gap-1.5">
          {f.expertises.map(e => (
            <li key={e} className="text-[0.75rem] text-on-surface-var rounded-full bg-surface-low px-2.5 py-1">{e}</li>
          ))}
        </ul>
      )}

      {aide && f.eligibilite && <Tuile label="Qui peut en bénéficier">{f.eligibilite}</Tuile>}

      <Rubrique titre="Rattachement">
        <dl className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-3 gap-y-2 text-[0.8125rem]">
          <Terme>Secteurs</Terme>
          <dd className="text-on-surface">
            {f.secteurs?.length
              ? f.secteurs.map(s => referentiel.secteursParId[s] ?? s).join(', ')
              : <span className="text-on-surface-var">Transversal, visible pour tous les secteurs</span>}
          </dd>

          <Terme>Départements</Terme>
          <dd className="text-on-surface">
            {f.departements?.length
              ? <ListeRepliable elements={f.departements.map(d => `${d} ${nomDepartement(d)}`)} />
              : <span className="text-on-surface-var">National</span>}
          </dd>

          {aide && (
            <>
              <Terme>Agences</Terme>
              <dd className="text-on-surface">
                {f.agences?.length
                  ? f.agences.map(a => AGENCES[a] ?? a).join(', ')
                  : <span className="text-on-surface-var">Toutes les agences</span>}
              </dd>
            </>
          )}

          <Terme>Catégories</Terme>
          <dd className="flex flex-col gap-1">
            {f.categories?.length ? f.categories.map(c => {
              const cat = referentiel.categoriesParId[c];
              return (
                <span key={c} className="flex items-center gap-1.5 text-on-surface leading-snug">
                  <PastilleCouleur couleur={cat?.couleur} />
                  {cat?.label ?? c}
                </span>
              );
            }) : <span className="text-on-surface-var">Aucune</span>}
          </dd>

          {!aide && (
            <>
              <Terme>SIRET</Terme>
              <dd>
                {f.siret ? (
                  <a
                    href={`https://annuaire-entreprises.data.gouv.fr/etablissement/${f.siret}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.75rem] text-primary-container hover:underline"
                  >
                    {f.siret}
                  </a>
                ) : <span className="text-on-surface-var">Non renseigné</span>}
              </dd>
            </>
          )}
        </dl>
      </Rubrique>

      <MesuresLiees fiche={f} mesures={referentiel.mesures} categoriesParId={referentiel.categoriesParId} onOuvrir={id => onOuvrir('mesures', id)} />

      {f.contacts?.length > 0 && (
        <Rubrique titre="Contacts">
          <Contacts contacts={f.contacts} sansFilet />
        </Rubrique>
      )}

      {/* Les infos complémentaires portent leur propre filet de séparation */}
      <InfosComplementaires infos={f.infos_complementaires} />

      <Sources sources={f.sources} />
      <Relecture edition={f.edition} />
      <Fichiers versions={f.edition.versions} />
    </div>
  );
}

// ─── Mesures liées ────────────────────────────────────────────────────────────

function MesuresLiees({ fiche, mesures, categoriesParId, onOuvrir }) {
  const liens = liensMesures(fiche);
  return (
    <Rubrique titre="Mesures liées" compte={liens.length}>
      {liens.length === 0 ? (
        <p className="text-[0.75rem] text-on-surface-var">
          Aucun lien explicite. La fiche n'est proposée qu'en repli, par catégorie.
        </p>
      ) : (
        <>
          <ul className="flex flex-col gap-1.5">
            {liens.map(({ id, roles }) => {
              const m = mesures[id];
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onOuvrir(id)}
                    disabled={!m}
                    title="Ouvrir la mesure"
                    className="w-full text-left rounded-lg px-3 py-2 flex flex-col gap-1 transition-shadow enabled:hover:shadow-[0_0_0_1.5px_#0097d6]"
                    style={{ background: CIEL.fond }}
                  >
                    <span className="flex items-start gap-2">
                      <span className="mt-1.5"><PastilleCouleur couleur={categoriesParId[m?.categorie]?.couleur} /></span>
                      <span className="flex-1 min-w-0 text-[0.8125rem] font-medium text-primary leading-snug">
                        {m ? m.titre_court ?? m.titre : 'Mesure introuvable'}
                      </span>
                    </span>
                    <span className="flex flex-wrap items-center gap-1.5 pl-4">
                      <span className="text-[0.625rem] font-mono text-on-surface-var">{id}</span>
                      {m?.statut === 'brouillon' && <Badge>Mesure en brouillon</Badge>}
                      {!m && <Badge ton="rouge">Absente du référentiel</Badge>}
                      {roleLabels(roles).map(r => (
                        <span key={r} className="text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full bg-white whitespace-nowrap" style={{ color: CIEL.texte }}>
                          {r}
                        </span>
                      ))}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="text-[0.6875rem] text-on-surface-var">Un clic ouvre la mesure, avec toutes les solutions qui lui sont liées.</p>
        </>
      )}
    </Rubrique>
  );
}
