// Chapitre 5 : votre activité. La synthèse d'exposition (dépendance du
// secteur × tension du bassin), les usages de l'eau du secteur, la chaîne de
// valeur en onglets (fournisseurs, activité, débouchés), puis le passage à
// l'évaluation de la maturité.

import { useState } from 'react';
import { getRankColors, getRiskColors } from '../../utils/riskHelpers';
import {
  LIBELLES_DEPENDANCE, NIVEAUX_DEPENDANCE, analyseActivite,
} from '../../utils/constatMessages';
import { Chapitre, InfoSurvol, Surligne, Vide } from './ConstatUI';
import CartesOnglets, { BoutonFermer } from './Onglets';

const ACCROCHE_DEFAUT = "Selon le secteur, l'eau intervient de façon directe (procédés, irrigation, nettoyage) ou indirecte (matières premières, fournisseurs).";

export default function ActiviteSection({ territoire: t, secteur, onAllerMaturite }) {
  const activite = analyseActivite(secteur, t);
  const [ouvert, setOuvert] = useState('activite');

  return (
    <Chapitre
      id="chapitre-activite"
      numero="5"
      surtitre="Votre activité"
      titre={<>Dans ce contexte, qu'en est-il pour <Surligne ton="eau">votre activité</Surligne> ?</>}
      accroche={secteur?.description ?? ACCROCHE_DEFAUT}
    >
      {activite ? (
        <div className="flex flex-col gap-10">
          <div id="activite-exposition" className="scroll-mt-20 min-[1440px]:scroll-mt-6">
            <Exposition activite={activite} />
          </div>

          {activite.usages.length > 0 && (
            <div id="activite-usages" className="flex flex-col gap-3 scroll-mt-20 min-[1440px]:scroll-mt-6">
              <h3 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>
                À quoi sert l'eau dans votre secteur
              </h3>
              <ul className="flex flex-wrap gap-2">
                {activite.usages.map((u) => (
                  <li key={u} className="text-[0.8125rem] text-on-surface bg-surface-low rounded-lg px-3 py-1.5">{u}</li>
                ))}
              </ul>
            </div>
          )}

          <div id="activite-chaine" className="flex flex-col gap-4 scroll-mt-20 min-[1440px]:scroll-mt-6">
            <div>
              <h3 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>
                Votre dépendance à l'eau, de vos fournisseurs à vos débouchés
              </h3>
              <p className="text-[0.8125rem] text-on-surface-var mt-1">
                Pour chaque maillon, le besoin en eau (quantité) et le risque de pollution (qualité).
              </p>
            </div>
            <CartesOnglets
              elements={activite.maillons}
              ouvert={ouvert}
              onChanger={setOuvert}
              titre="Voir le détail"
              fleches
              rendreCarte={(m) => <ContenuMaillon maillon={m} />}
              rendrePanneau={(m, fermer) => <DetailMaillon maillon={m} onFermer={fermer} />}
            />
          </div>

          {onAllerMaturite && <EtapeSuivante onClick={onAllerMaturite} />}
        </div>
      ) : (
        <Vide message="Les données de ce secteur d'activité ne sont pas encore disponibles." />
      )}
    </Chapitre>
  );
}

// ─── Synthèse : dépendance × tension ─────────────────────────────────────────

function Exposition({ activite: a }) {
  return (
    <div className="flex flex-col gap-5">
      {a.synthese && (
        <h3 className="text-[1.125rem] sm:text-[1.25rem] font-extrabold text-primary leading-[1.4]" style={{ letterSpacing: '-0.015em' }}>
          {a.synthese.debut} <Surligne ton={a.synthese.ton}>{a.synthese.cle}</Surligne>
        </h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Jauge
          titre="Dépendance de votre activité à l'eau"
          niveau={a.dependance}
          echelle={NIVEAUX_DEPENDANCE}
          libelle={LIBELLES_DEPENDANCE[a.dependance]}
          couleur={getRiskColors(a.dependance).bar}
          legende="D'après les usages types de votre secteur."
        />
        {a.tension && (
          <Jauge
            titre="Tension sur votre bassin"
            niveau={a.tension}
            echelle={a.echelleTension}
            libelle={a.libelleTension}
            couleur={getRankColors(a.echelleTension.indexOf(a.tension), a.echelleTension.length).bar}
            legende="Stress hydrique du bassin aujourd'hui : rivières en août et nappes, le plus sévère des deux."
          />
        )}
      </div>
    </div>
  );
}

// Jauge à segments : remplie jusqu'au niveau, couleur du niveau
function Jauge({ titre, niveau, echelle, libelle, couleur, legende }) {
  const rang = echelle.indexOf(niveau);
  return (
    <div className="bg-surface-low rounded-xl px-4 py-4 flex flex-col gap-2.5">
      <p className="text-[0.8125rem] text-on-surface-var">{titre}</p>
      <p className="text-[1.125rem] font-bold text-primary leading-none">{libelle}</p>
      <div className="flex gap-1" aria-hidden="true">
        {echelle.map((n, i) => (
          <span key={n} className="flex-1 h-2 rounded-full" style={{ background: i <= rang ? couleur : '#e0e2eb' }} />
        ))}
      </div>
      <p className="text-[0.6875rem] text-on-surface-var leading-relaxed">{legende}</p>
    </div>
  );
}

// ─── Chaîne de valeur ────────────────────────────────────────────────────────

function Niveau({ niveau, grand }) {
  const c = getRiskColors(niveau);
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-semibold whitespace-nowrap ${grand ? 'w-[5.5rem] text-[0.75rem] py-1' : 'w-[4.75rem] text-[0.6875rem] py-0.5'}`}
      style={{ background: c.bg, color: c.text, border: `1px solid ${c.bar}99` }}
    >
      {LIBELLES_DEPENDANCE[niveau]}
    </span>
  );
}

// Le nom du maillon sur un bandeau bleu foncé en haut de la carte (marges
// négatives pour couvrir l'intérieur de la carte, coins arrondis assortis)
function ContenuMaillon({ maillon: m }) {
  return (
    <>
      <span
        className="-mx-4 -mt-4 px-4 py-3 rounded-t-[10px] flex items-center gap-2"
        style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
      >
        <span className="text-[1rem] font-bold text-white">{m.label}</span>
        <InfoSurvol texte={m.aide} clair focusable={false} />
      </span>
      <span className="flex flex-col gap-1.5">
        <span className="flex items-center justify-between gap-2">
          <span className="text-[0.8125rem] text-on-surface">Quantité</span>
          <Niveau niveau={m.quantite.niveau} grand />
        </span>
        <span className="flex items-center justify-between gap-2">
          <span className="text-[0.8125rem] text-on-surface">Qualité</span>
          <Niveau niveau={m.qualite.niveau} grand />
        </span>
      </span>
    </>
  );
}

function DetailMaillon({ maillon: m, onFermer }) {
  return (
    <>
      <div className="flex items-start gap-3">
        <p className="flex-1 text-[0.875rem] text-on-surface leading-relaxed">{m.phrase}</p>
        <BoutonFermer onClick={onFermer} />
      </div>
      {/* Les deux blocs prennent la même hauteur (étirement de la grille) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Dimension type="quantite" dim={m.quantite} />
        <Dimension type="qualite" dim={m.qualite} />
      </div>
    </>
  );
}

const DIMENSIONS = {
  quantite: {
    titre: 'Quantité',
    couleur: '#0097d6',
    sousTitre: 'Le besoin en eau',
    liste: 'Principaux usages',
    icone: <path d="M8 1.75c2.1 2.7 3.4 4.6 3.4 6.2a3.4 3.4 0 0 1-6.8 0c0-1.6 1.3-3.5 3.4-6.2Z" />,
  },
  qualite: {
    titre: 'Qualité',
    couleur: '#051b71',
    sousTitre: 'Le risque de pollution',
    liste: 'Principales sources de pollution',
    icone: <path d="M6 1.75h4M6.75 1.75v4.5L3 12.6a1.1 1.1 0 0 0 .95 1.65h8.1A1.1 1.1 0 0 0 13 12.6L9.25 6.25v-4.5M4.6 10h6.8" />,
  },
};

// Les éléments les plus critiques d'abord
const RANG = { critique: 0, eleve: 1, modere: 2, faible: 3 };

function Dimension({ type, dim }) {
  const d = DIMENSIONS[type];
  const items = [...dim.items].sort((a, b) => RANG[a.niveau] - RANG[b.niveau]);
  return (
    <div className="flex flex-col h-full">
      {/* En-tête clair (#e8eaf3, un cran plus foncé que le corps) : le bleu
          marine reste réservé au chapitre et aux cartes de la chaîne */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-t-xl bg-surface-high">
        <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-white" style={{ color: d.couleur }}>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {d.icone}
          </svg>
        </span>
        <p className="flex-1 flex items-center gap-2">
          <span className="text-[0.9375rem] font-bold text-primary">{d.titre}</span>
          <InfoSurvol texte={d.sousTitre} />
        </p>
        <Niveau niveau={dim.niveau} grand />
      </div>

      <div className="flex-1 bg-surface-low rounded-b-xl p-4 flex flex-col gap-2">
        {items.length > 0 ? (
          <>
            <p className="text-[0.75rem] font-semibold text-on-surface-var">{d.liste}</p>
            <ul className="flex flex-col gap-1.5">
              {items.map((it) => (
                <li key={it.titre} className="bg-white rounded-lg px-3 py-2.5 flex flex-col gap-1">
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-[0.8125rem] font-semibold text-on-surface leading-snug">{it.titre}</span>
                    <Niveau niveau={it.niveau} />
                  </span>
                  {it.note && <span className="text-[0.75rem] text-on-surface-var leading-relaxed">{it.note}</span>}
                </li>
              ))}
            </ul>
          </>
        ) : (
          dim.description && <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">{dim.description}</p>
        )}
      </div>
    </div>
  );
}

// ─── Étape suivante ──────────────────────────────────────────────────────────

function EtapeSuivante({ onClick }) {
  return (
    <div className="rounded-xl px-5 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4" style={{ background: 'rgba(5,27,113,0.05)' }}>
      <div className="flex-1">
        <p className="text-[1rem] font-bold text-primary">Et votre entreprise, où en est-elle ?</p>
        <p className="text-[0.8125rem] text-on-surface-var leading-relaxed mt-0.5">
          Quelques questions pour évaluer votre maturité face à ces enjeux et construire votre plan d'action.
        </p>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[0.875rem] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
        style={{ background: 'linear-gradient(135deg, #000a43 0%, #051b71 100%)' }}
      >
        Évaluer ma maturité
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
