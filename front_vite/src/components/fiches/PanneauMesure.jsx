// Panneau de droite de la page Fiches solutions pour une mesure : son contenu,
// quand le plan d'action la propose (filtres des questionnaires), les
// apporteurs et les aides qui lui sont liés, puis sa relecture.

import Logo from '../Logo';
import InfosComplementaires from '../InfosComplementaires';
import { roleLabels, TYPE_AIDE, TYPE_PRESTATAIRE } from '../../utils/solutionsMatching';
import { EFFETS, HORIZONS, NIVEAUX_EFFORT, NOTES, fmtDate } from '../../utils/fichesExplorateur';
import { Badge, BadgesEdition, BadgeStatut, PastilleCouleur, PictoCategorie, Rubrique } from './FichesUI';
import { Copiable, Fichiers, Relecture, Sources, Terme } from './Rubriques';

const CIEL = { fond: 'rgba(0,151,214,0.10)', texte: '#00628c' };
const ORANGE = '#fe851f';

export default function PanneauMesure({ mesure: m, referentiel, onOuvrir, onFiltrer, onFermer }) {
  const categorie = referentiel.categoriesParId[m.categorie];

  return (
    <div className="flex flex-col gap-4">
      {/* En-tête */}
      <div className="flex items-start gap-3">
        <PictoCategorie couleur={categorie?.couleur} size={48} />
        <div className="flex-1 min-w-0">
          <h2 className="text-[1.125rem] font-extrabold text-primary leading-snug" style={{ letterSpacing: '-0.01em' }}>
            {m.titre_court ?? m.titre}
          </h2>
          {m.titre_court && <p className="text-[0.8125rem] text-on-surface leading-snug mt-0.5">{m.titre}</p>}
          <p className="mt-1"><Copiable texte={m.id} className="text-[0.6875rem] font-mono" /></p>
        </div>
        <BoutonFermer onClick={onFermer} />
      </div>
      <div className="flex flex-wrap gap-1.5">
        <BadgesEdition fiche={m} controles={false} />
        {m.horizon && <Badge ton="bleu">{HORIZONS[m.horizon] ?? m.horizon}</Badge>}
        {m.date_maj && <Badge>Mise à jour le {fmtDate(m.date_maj)}</Badge>}
      </div>

      {/* Contenu */}
      {m.image && <img src={m.image} alt="" loading="lazy" className="w-full max-h-44 object-cover rounded-lg" />}
      {m.description
        ? <p className="text-[0.8125rem] text-on-surface leading-relaxed">{m.description}</p>
        : <p className="text-[0.8125rem] text-on-surface-var italic">Pas de description.</p>}

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          <Note label="Impact sur l'eau" points={m.impact_eau} texte={NOTES[m.impact_eau]} couleur={ORANGE} />
          <Note label="Facilité" points={m.facilite} texte={NOTES[m.facilite]} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[['capex', 'Investissement'], ['opex', 'Fonctionnement'], ['humain', 'Temps des équipes']].map(([cle, label]) => {
            const niveau = NIVEAUX_EFFORT[m.effort?.[cle]];
            return <Note key={cle} label={label} points={niveau?.points} texte={niveau?.label} />;
          })}
        </div>
      </div>

      <Rubrique titre="Rattachement">
        <dl className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-3 gap-y-2 text-[0.8125rem]">
          <Terme>Secteurs</Terme>
          <dd className="text-on-surface">
            {m.secteurs?.length
              ? m.secteurs.map(s => referentiel.secteursParId[s] ?? s).join(', ')
              : <span className="text-on-surface-var">Transversale, visible pour tous les secteurs</span>}
          </dd>
          <Terme>Catégorie</Terme>
          <dd className="flex items-center gap-1.5 text-on-surface leading-snug">
            <PastilleCouleur couleur={categorie?.couleur} />
            {categorie?.label ?? m.categorie}
          </dd>
        </dl>
      </Rubrique>

      <Declencheurs declencheurs={m.declencheurs} secteursParId={referentiel.secteursParId} />

      <SolutionsLiees
        titre="Apporteurs liés"
        liens={m.solutions.prestataires}
        types={TYPE_PRESTATAIRE}
        vide="Aucun apporteur n'est lié à cette mesure. Le plan d'action se rabattra sur ceux de la même catégorie."
        onOuvrir={id => onOuvrir('prestataires', id)}
        onFiltrer={() => onFiltrer('prestataires')}
      />
      <SolutionsLiees
        titre="Aides liées"
        liens={m.solutions.aides}
        types={TYPE_AIDE}
        aides
        vide="Aucune aide n'est liée à cette mesure. Le plan d'action se rabattra sur celles de la même catégorie."
        onOuvrir={id => onOuvrir('aides', id)}
        onFiltrer={() => onFiltrer('aides')}
      />

      {/* Les infos complémentaires portent leur propre filet de séparation */}
      <InfosComplementaires infos={m.infos_complementaires} />

      <Sources sources={m.sources} />
      <Relecture edition={m.edition} verdictAttendu={false} />
      <Fichiers versions={m.edition.versions} />
    </div>
  );
}

// ─── Quand le plan d'action propose la mesure ─────────────────────────────────

function Declencheurs({ declencheurs, secteursParId }) {
  const parQuestionnaire = new Map();
  for (const d of declencheurs ?? []) {
    if (!parQuestionnaire.has(d.questionnaire)) parQuestionnaire.set(d.questionnaire, []);
    parQuestionnaire.get(d.questionnaire).push(d);
  }
  const proposee = (declencheurs ?? []).some(d => EFFETS[d.effet]?.positif);

  return (
    <Rubrique titre="Quand elle est proposée">
      {!proposee && (
        <p className="text-[0.75rem] leading-snug rounded-lg px-2.5 py-1.5" style={{ background: '#fdecec', color: '#b42318' }}>
          Aucun questionnaire ne l'ajoute au plan d'action. Elle n'apparaîtra chez aucune entreprise.
        </p>
      )}
      {[...parQuestionnaire.entries()].map(([secteur, liste]) => (
        <div key={secteur} className="flex flex-col gap-1.5">
          <p className="flex flex-wrap items-center gap-1.5 text-[0.75rem] font-semibold text-on-surface">
            {secteursParId[secteur] ?? secteur}
            {liste[0].fichier.includes('/staging/') && <Badge ton="ambre" title={liste[0].fichier}>Questionnaire en staging</Badge>}
          </p>
          <ul className="flex flex-col gap-1">
            {liste.map((d, i) => {
              const effet = EFFETS[d.effet] ?? { label: d.effet, positif: true };
              return (
                <li
                  key={`${d.filtre ?? d.effet}-${i}`}
                  className="rounded-lg px-3 py-2 flex flex-col gap-0.5 bg-surface-low"
                  style={{ borderLeft: `3px solid ${effet.positif ? '#0097d6' : '#c4c8d8'}` }}
                >
                  <span className="text-[0.75rem] text-on-surface leading-snug">
                    <span className="font-semibold">{effet.label}</span>
                    {d.description && <> {d.description}</>}
                  </span>
                  {d.filtre && (
                    <span className="text-[0.625rem] font-mono text-on-surface-var">
                      {d.filtre}{d.priorite != null && `, priorité ${d.priorite}`}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </Rubrique>
  );
}

// ─── Apporteurs ou aides liés ─────────────────────────────────────────────────

function SolutionsLiees({ titre, liens, types, aides, vide, onOuvrir, onFiltrer }) {
  return (
    <Rubrique
      titre={titre}
      compte={liens.length}
      action={liens.length > 0 && (
        <button type="button" onClick={onFiltrer} className="text-[0.6875rem] font-medium text-primary-container hover:underline">
          Voir dans la liste
        </button>
      )}
    >
      {liens.length === 0 ? (
        <p className="text-[0.75rem] text-on-surface-var">{vide}</p>
      ) : (
        <ul className="flex flex-col gap-1.5">
          {liens.map(({ fiche: f, roles }) => (
            <li key={f.id}>
              <button
                type="button"
                onClick={() => onOuvrir(f.id)}
                title="Ouvrir la fiche"
                className="w-full text-left rounded-lg px-3 py-2 flex items-start gap-2.5 bg-surface-low transition-colors hover:bg-surface-high"
              >
                <Logo url={f.logo_url} nom={aides ? f.financeur ?? f.nom : f.nom} size={28} />
                <span className="flex-1 min-w-0 flex flex-col gap-1">
                  <span className="text-[0.8125rem] font-medium text-primary leading-snug">{f.nom}</span>
                  <span className="text-[0.6875rem] text-on-surface-var leading-snug">
                    {[types[f.type] ?? f.type, aides ? f.financeur : null].filter(Boolean).join(', ')}
                  </span>
                  <span className="flex flex-wrap items-center gap-1">
                    <BadgeStatut fiche={f} />
                    {roleLabels(roles).map(r => (
                      <span key={r} className="text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap" style={{ background: CIEL.fond, color: CIEL.texte }}>
                        {r}
                      </span>
                    ))}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Rubrique>
  );
}

// ─── Petits éléments ──────────────────────────────────────────────────────────

function Note({ label, points = 0, texte, couleur = '#051b71' }) {
  return (
    <div className="bg-surface-low rounded-lg px-3 py-2.5 flex flex-col gap-1.5">
      <span className="text-[0.6875rem] text-on-surface-var leading-tight">{label}</span>
      <span className="flex items-center gap-2">
        <span className="flex gap-0.5" aria-hidden="true">
          {[1, 2, 3].map(i => (
            <span key={i} className="w-2 h-2 rounded-full" style={{ background: i <= points ? couleur : '#e0e2eb' }} />
          ))}
        </span>
        <span className="text-[0.75rem] font-semibold text-on-surface">{texte ?? 'Non renseigné'}</span>
      </span>
    </div>
  );
}

function BoutonFermer({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Fermer la mesure"
      className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-var hover:bg-surface-low hover:text-primary transition-colors"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </button>
  );
}
