// Fiches solutions : explorateur des mesures, des prestataires et des aides
// du référentiel, sans passer par une page entreprise.
//
// Les fiches sont lues dans les fichiers (seeds publiés et staging), pas en
// base : on y voit le travail en cours, avec le verdict du contrôleur et les
// contrôles du référentiel. Liste filtrable à gauche, fiche à droite. Une
// mesure et ses solutions liées s'ouvrent l'une depuis l'autre.
// L'état de la page vit dans l'URL : une vue se partage par son lien.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ListeFiches from '../components/fiches/ListeFiches';
import PanneauFiche from '../components/fiches/PanneauFiche';
import PanneauMesure from '../components/fiches/PanneauMesure';
import { Bascule, Carte } from '../components/territoires/TerritoiresUI';
import { fetchFiches } from '../utils/api';
import { TYPE_AIDE, TYPE_PRESTATAIRE } from '../utils/solutionsMatching';
import {
  AGENCES, COMPTEURS, ETATS, FILTRES_PAR_ONGLET, HORIZONS, ONGLETS, TOUS_FILTRES,
  avecSolutions, etatsDe, filtrer, nomDepartement, territoiresUtilises, trier, trisDe,
} from '../utils/fichesExplorateur';

export default function FichesPage() {
  const [params, setParams] = useSearchParams();
  const [donnees, setDonnees] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [chargement, setChargement] = useState(true);
  const panneau = useRef(null);

  // ─── État de la page (URL) ──────────────────────────────────────────────────
  const onglet = ['mesures', 'aides'].includes(params.get('onglet')) ? params.get('onglet') : 'prestataires';
  const mesures = onglet === 'mesures';
  // Seuls les filtres de l'onglet s'appliquent, les autres restent dans l'URL
  const filtres = useMemo(
    () => Object.fromEntries(FILTRES_PAR_ONGLET[onglet].map(k => [k, params.get(k) ?? ''])),
    [params, onglet],
  );
  const tri = params.get('tri') ?? 'nom';
  const selection = params.get('fiche');

  const maj = useCallback((changements) => {
    setParams((prev) => {
      const suivant = new URLSearchParams(prev);
      for (const [k, v] of Object.entries(changements)) {
        if (v == null || v === '') suivant.delete(k);
        else suivant.set(k, v);
      }
      return suivant;
    }, { replace: true });
  }, [setParams]);

  // ─── Données ────────────────────────────────────────────────────────────────
  const lire = useCallback(() => fetchFiches()
    .then((d) => { setDonnees(d); setErreur(null); })
    .catch((e) => setErreur(e.message))
    .finally(() => setChargement(false)), []);

  useEffect(() => { lire(); }, [lire]);

  function charger() {
    setChargement(true);
    lire();
  }

  const referentiel = useMemo(() => ({
    categoriesParId: Object.fromEntries((donnees?.categories ?? []).map(c => [c.id, c])),
    secteursParId: Object.fromEntries((donnees?.secteurs ?? []).map(s => [s.id, s.label])),
    mesures: Object.fromEntries((donnees?.mesures ?? []).map(m => [m.id, m])),
  }), [donnees]);

  const toutes = useMemo(() => {
    if (!donnees) return [];
    return mesures ? avecSolutions(donnees.mesures, donnees.prestataires, donnees.aides) : donnees[onglet];
  }, [donnees, onglet, mesures]);
  const filtrees = useMemo(() => trier(filtrer(toutes, filtres), tri), [toutes, filtres, tri]);
  // Les compteurs d'état portent sur les autres filtres, pas sur l'état lui-même
  const sansEtat = useMemo(() => filtrer(toutes, filtres, { sauf: 'etat' }), [toutes, filtres]);
  const territoires = useMemo(() => territoiresUtilises(toutes), [toutes]);
  const types = onglet === 'aides' ? TYPE_AIDE : TYPE_PRESTATAIRE;

  const fiche = selection ? toutes.find(f => f.id === selection) ?? null : null;
  const mesureFiltre = filtres.mesure ? referentiel.mesures[filtres.mesure] : null;
  const nbFiltres = Object.values(filtres).filter(Boolean).length;

  // ─── Actions ────────────────────────────────────────────────────────────────
  function changerOnglet(cle) {
    // Le type et la fiche n'ont pas de sens d'un onglet à l'autre
    maj({ onglet: cle === 'prestataires' ? null : cle, type: null, fiche: null });
  }

  // Ouvre une fiche d'un autre onglet (mesure liée, apporteur ou aide liés)
  function ouvrir(cible, id) {
    maj({ onglet: cible === 'prestataires' ? null : cible, fiche: id, ...(cible === onglet ? {} : { type: null }) });
  }

  // Liste les apporteurs ou les aides liés à la mesure ouverte
  function filtrerSurMesure(cible) {
    maj({ onglet: cible === 'prestataires' ? null : cible, mesure: selection, fiche: null, type: null, etat: null });
  }

  function choisirFiche(id) {
    maj({ fiche: id === selection ? null : id });
    if (id !== selection && window.matchMedia('(max-width: 1023px)').matches) {
      setTimeout(() => panneau.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-5">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-primary mb-1">Fiches solutions</h1>
            <p className="text-sm text-on-surface-var max-w-3xl">
              Les mesures du plan d'action, les apporteurs de solutions et les aides du référentiel, publiés ou encore en
              staging. Filtrez la liste, puis cliquez sur une fiche pour afficher son contenu, ses liens, ses sources et sa relecture.
            </p>
          </div>
          <button
            type="button"
            onClick={charger}
            disabled={chargement}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-[0.8125rem] font-medium text-primary bg-white transition-colors hover:bg-surface-low disabled:opacity-50"
            style={{ border: '1px solid #e0e2eb' }}
            title="Relire les fichiers des seeds et du staging"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={chargement ? 'animate-spin' : ''}>
              <path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 2.5v3h-3" />
            </svg>
            Recharger
          </button>
        </header>

        {/* Filtres */}
        <Carte className="px-4 py-3 flex flex-wrap items-end gap-x-5 gap-y-3">
          <Champ label="Fiches">
            <div className="h-[38px] flex items-center">
              <Bascule
                label="Fiches"
                options={ONGLETS.map(o => ({ cle: o.cle, label: `${o.label} (${donnees?.[o.cle]?.length ?? 0})` }))}
                actif={onglet}
                onChange={changerOnglet}
              />
            </div>
          </Champ>
          <Champ label="Rechercher">
            <input
              type="search"
              aria-label="Rechercher"
              placeholder="Nom, identifiant, SIRET, mot de la description…"
              value={filtres.q}
              onChange={e => maj({ q: e.target.value })}
              className="px-3 py-2 rounded-xl border text-sm bg-white w-full sm:w-[280px]"
              style={{ borderColor: '#e0e2eb' }}
            />
          </Champ>
          <span className="hidden xl:block w-px h-9 bg-surface-high" aria-hidden="true" />
          <Champ label="Secteur">
            <Menu label="Secteur" valeur={filtres.secteur} onChange={v => maj({ secteur: v })} largeur="sm:w-[190px]">
              <option value="">Tous les secteurs</option>
              <option value="transversal">Transversales</option>
              {(donnees?.secteurs ?? []).map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
            </Menu>
          </Champ>
          <Champ label="Catégorie">
            <Menu label="Catégorie" valeur={filtres.categorie} onChange={v => maj({ categorie: v })} largeur="sm:w-[220px]">
              <option value="">Toutes les catégories</option>
              {(donnees?.categories ?? []).map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
            </Menu>
          </Champ>
          {mesures ? (
            <Champ label="Horizon">
              <Menu label="Horizon" valeur={filtres.horizon} onChange={v => maj({ horizon: v })} largeur="sm:w-[160px]">
                <option value="">Tous les horizons</option>
                {Object.entries(HORIZONS).map(([cle, label]) => <option key={cle} value={cle}>{label}</option>)}
              </Menu>
            </Champ>
          ) : (
            <Champ label="Type">
              <Menu label="Type" valeur={filtres.type} onChange={v => maj({ type: v })} largeur="sm:w-[180px]">
                <option value="">Tous les types</option>
                {Object.entries(types).map(([cle, label]) => <option key={cle} value={cle}>{label}</option>)}
              </Menu>
            </Champ>
          )}
          {!mesures && <Champ label="Territoire">
            <Menu label="Territoire" valeur={filtres.territoire} onChange={v => maj({ territoire: v })} largeur="sm:w-[190px]">
              <option value="">Tous les territoires</option>
              <option value="national">Nationales</option>
              <option value="local">Locales</option>
              {territoires.agences.length > 0 && (
                <optgroup label="Agences de l'eau">
                  {territoires.agences.map(a => <option key={a} value={`ag-${a}`}>{AGENCES[a] ?? a}</option>)}
                </optgroup>
              )}
              {territoires.departements.length > 0 && (
                <optgroup label="Départements cités">
                  {territoires.departements.map(d => <option key={d} value={`dep-${d}`}>{d} {nomDepartement(d)}</option>)}
                </optgroup>
              )}
            </Menu>
          </Champ>}
          <Champ label="État">
            <Menu label="État" valeur={filtres.etat} onChange={v => maj({ etat: v })} largeur="sm:w-[190px]">
              <option value="">Tous les états</option>
              {etatsDe(onglet).map(e => <option key={e.cle} value={e.cle}>{e.label}</option>)}
            </Menu>
          </Champ>
          {nbFiltres > 0 && (
            <button
              type="button"
              onClick={() => maj(Object.fromEntries(TOUS_FILTRES.map(k => [k, null])))}
              className="h-[38px] text-[0.75rem] font-medium text-primary-container hover:underline"
            >
              Effacer les filtres
            </button>
          )}
        </Carte>

        {/* Compteurs par état : un clic filtre la liste */}
        {donnees && (
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-2">
            {COMPTEURS[onglet].map(cle => {
              const etat = ETATS.find(e => e.cle === cle);
              const n = sansEtat.filter(etat.test).length;
              const actif = filtres.etat === cle;
              return (
                <button
                  key={cle}
                  type="button"
                  onClick={() => maj({ etat: actif ? null : cle })}
                  aria-pressed={actif}
                  className={`rounded-xl px-3.5 py-2.5 text-left transition-colors ${actif ? 'bg-primary-container' : 'bg-surface-lowest hover:bg-surface-low'}`}
                  style={actif ? undefined : { boxShadow: '0 0 24px rgba(0,10,67,0.05)' }}
                >
                  <span className={`block text-[1.25rem] font-bold leading-tight tabular-nums ${actif ? 'text-white' : n ? 'text-primary' : 'text-on-surface-var'}`}>{n}</span>
                  <span className={`block text-[0.6875rem] leading-snug ${actif ? 'text-white/80' : 'text-on-surface-var'}`}>{etat.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {erreur ? (
          <Carte className="p-10 text-center">
            <p className="text-sm text-on-surface-var">Impossible de charger les fiches ({erreur}).</p>
          </Carte>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] gap-5 items-start">
            <Carte className="p-4 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-[0.8125rem] text-on-surface-var">
                  <strong className="text-primary tabular-nums">{filtrees.length}</strong> {mesures ? 'mesure' : 'fiche'}{filtrees.length > 1 ? 's' : ''}
                  {filtrees.length !== toutes.length && <> sur {toutes.length}</>}
                </p>
                {filtres.mesure && (
                  <span className="inline-flex items-center gap-1.5 rounded-full pl-3 pr-1 py-0.5 text-[0.75rem]" style={{ background: 'rgba(0,151,214,0.10)', color: '#00628c' }}>
                    <span className="truncate max-w-[20rem]">
                      Liées à {mesureFiltre ? mesureFiltre.titre_court ?? mesureFiltre.titre : filtres.mesure}
                    </span>
                    <button
                      type="button"
                      onClick={() => maj({ mesure: null })}
                      aria-label="Retirer le filtre sur la mesure"
                      className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-white/70"
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true"><path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                    </button>
                  </span>
                )}
                <label className="ml-auto flex items-center gap-2 text-[0.75rem] text-on-surface-var">
                  Trier par
                  <select
                    value={tri}
                    onChange={e => maj({ tri: e.target.value === 'nom' ? null : e.target.value })}
                    className="px-2.5 py-1.5 rounded-lg border text-[0.75rem] bg-white"
                    style={{ borderColor: '#e0e2eb' }}
                  >
                    {trisDe(onglet).map(t => <option key={t.cle} value={t.cle}>{t.label}</option>)}
                  </select>
                </label>
              </div>
              {!donnees ? (
                <p className="text-sm text-on-surface-var py-16 text-center">Chargement des fiches…</p>
              ) : (
                <ListeFiches
                  fiches={filtrees}
                  onglet={onglet}
                  selection={selection}
                  onSelection={choisirFiche}
                  secteursParId={referentiel.secteursParId}
                  categoriesParId={referentiel.categoriesParId}
                />
              )}
            </Carte>

            <div ref={panneau} className="scroll-mt-4 lg:sticky lg:top-4">
              {/* Clé sur la fiche : le panneau repart en haut à chaque ouverture */}
              <Carte key={selection ?? 'vide'} className="p-5 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
                {fiche && mesures ? (
                  <PanneauMesure
                    mesure={fiche}
                    referentiel={referentiel}
                    onOuvrir={ouvrir}
                    onFiltrer={filtrerSurMesure}
                    onFermer={() => maj({ fiche: null })}
                  />
                ) : fiche ? (
                  <PanneauFiche
                    fiche={fiche}
                    onglet={onglet}
                    referentiel={referentiel}
                    onOuvrir={ouvrir}
                    onFermer={() => maj({ fiche: null })}
                  />
                ) : (
                  <div className="py-12 text-center flex flex-col gap-2 items-center">
                    <p className="text-[0.9375rem] font-semibold text-primary">Aucune fiche ouverte</p>
                    <p className="text-[0.8125rem] text-on-surface-var max-w-xs">
                      Cliquez sur une fiche de la liste pour afficher son contenu et sa relecture.
                    </p>
                  </div>
                )}
              </Carte>
            </div>
          </div>
        )}

        <p className="text-[0.6875rem] text-on-surface-var leading-relaxed max-w-4xl">
          Fiches lues dans api/seeds (publiées) et api/seeds/staging (fichiers de secteur et fiches unitaires). Quand une fiche
          existe à plusieurs endroits, la version la plus récente est affichée. Seules les fiches publiées des seeds sont servies
          aux pages entreprise, après ingestion. Les déclencheurs d'une mesure viennent des filtres des questionnaires, staging
          compris.
        </p>
      </main>
    </div>
  );
}

// Même habillage que les filtres de la Vision territoriale
function Champ({ label, children }) {
  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto">
      <span className="text-[0.75rem] font-semibold text-on-surface-var" aria-hidden="true">{label}</span>
      {children}
    </div>
  );
}

function Menu({ label, valeur, onChange, largeur, children }) {
  return (
    <select
      aria-label={label}
      value={valeur}
      onChange={e => onChange(e.target.value)}
      className={`px-3 py-2 rounded-xl border text-sm bg-white w-full ${largeur}`}
      style={{ borderColor: valeur ? '#051b71' : '#e0e2eb' }}
    >
      {children}
    </select>
  );
}
