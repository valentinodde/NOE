// Vision territoriale : les 1 140 bassins versants de France métropolitaine
// sur une carte, un indicateur à la fois, aujourd'hui, en 2030 et en 2050.
//
// Trois niveaux de lecture : la carte (où ça se passe), le panneau de droite
// (la synthèse du territoire choisi, ou la fiche du bassin cliqué) et le
// classement des bassins sous la carte (lequel est le plus exposé).
// L'état de la page vit dans l'URL : une vue se partage par son lien.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CarteFrance from '../components/territoires/CarteFrance';
import ClassementBassins from '../components/territoires/ClassementBassins';
import LegendeCarte from '../components/territoires/LegendeCarte';
import PanneauBassin from '../components/territoires/PanneauBassin';
import PanneauTerritoire from '../components/territoires/PanneauTerritoire';
import RechercheTerritoire from '../components/territoires/RechercheTerritoire';
import { Bascule, Carte } from '../components/territoires/TerritoiresUI';
import { SelecteurHorizon } from '../components/constat/ConstatUI';
import { fetchActiviteTerritoire, fetchCarteBassins } from '../utils/api';
import { nomsDepartements, DEPARTEMENTS, FRANCE, REGIONS, dansTerritoire, territoireDe } from '../utils/territoiresFrance';
import {
  GROUPES, INDICATEURS, classeDe, couleurDe, emprise, horizonValide, libelleHorizon, repartition, resoudreIndicateur,
} from '../utils/territoiresIndicateurs';

const FRANCE_EMPRISE = [[-5.2, 41.3], [9.6, 51.15]];
const DEPARTEMENTS_TRIES = Object.entries(DEPARTEMENTS).sort(([a], [b]) => a.localeCompare(b));

export default function TerritoiresPage() {
  const [params, setParams] = useSearchParams();
  const [donnees, setDonnees] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [cadrage, setCadrage] = useState(null);
  const [classeSurvolee, setClasseSurvolee] = useState(null);
  const haut = useRef(null);

  // ─── État de la page (URL) ──────────────────────────────────────────────────
  const cleTerritoire = params.get('territoire');
  const territoire = useMemo(() => territoireDe(cleTerritoire), [cleTerritoire]);
  const [cleIndicateur, usage, mesure] = [params.get('indicateur'), params.get('usage'), params.get('mesure')];
  const indicateur = useMemo(
    () => resoudreIndicateur(cleIndicateur, { usage: usage ?? undefined, mesure: mesure ?? undefined }),
    [cleIndicateur, usage, mesure],
  );
  const horizon = horizonValide(indicateur, params.get('horizon') ?? 'actuel');
  const selection = params.get('bassin');

  const maj = useCallback((changements) => {
    setParams((prev) => {
      const suivant = new URLSearchParams(prev);
      for (const [k, v] of Object.entries(changements)) {
        if (v == null || (k === 'territoire' && v === FRANCE)) suivant.delete(k);
        else suivant.set(k, v);
      }
      return suivant;
    }, { replace: true });
  }, [setParams]);

  // ─── Données ────────────────────────────────────────────────────────────────
  // Au chargement, la carte se cadre sur le bassin ou le territoire de l'URL
  const urlInitiale = useRef({ territoire, selection });
  useEffect(() => {
    fetchCarteBassins()
      .then((d) => {
        setDonnees(d);
        const { territoire: t, selection: id } = urlInitiale.current;
        const liste = d.features.map((f) => f.properties);
        const p = id ? liste.find((x) => x.id === id) : null;
        if (p) setCadrage(emprise([p]));
        else if (t.deps) setCadrage(emprise(liste.filter((x) => dansTerritoire(t, x))));
      })
      .catch((e) => setErreur(e.message));
  }, []);

  const bassins = useMemo(() => donnees?.features.map((f) => f.properties) ?? [], [donnees]);
  const parId = useMemo(() => new Map(bassins.map((p) => [p.id, p])), [bassins]);
  const bassinsTerritoire = useMemo(() => bassins.filter((p) => dansTerritoire(territoire, p)), [bassins, territoire]);
  const membres = useMemo(
    () => (territoire.deps ? new Set(bassinsTerritoire.map((p) => p.id)) : null),
    [territoire.deps, bassinsTerritoire],
  );
  const bassin = selection ? parId.get(selection) ?? null : null;

  const couleurs = useMemo(
    () => new Map(bassins.map((p) => [p.id, couleurDe(indicateur, p, horizon)])),
    [bassins, indicateur, horizon],
  );
  const repart = useMemo(() => repartition(indicateur, bassinsTerritoire, horizon), [indicateur, bassinsTerritoire, horizon]);

  // Classe survolée dans la légende : ses bassins restent vifs, les autres s'estompent
  const surbrillance = useMemo(() => {
    if (classeSurvolee == null) return null;
    return new Set(bassinsTerritoire
      .filter((p) => {
        const c = classeDe(indicateur, p, horizon);
        return classeSurvolee === 'sans' ? !c : c?.index === classeSurvolee;
      })
      .map((p) => p.id));
  }, [classeSurvolee, bassinsTerritoire, indicateur, horizon]);

  // ─── Activité économique du panneau (territoire ou bassin) ──────────────────
  const idsActivite = useMemo(() => {
    if (bassin) return [bassin.id];
    return territoire.deps ? bassinsTerritoire.map((p) => p.id) : [];
  }, [bassin, territoire.deps, bassinsTerritoire]);
  const cleActivite = idsActivite.join(',');
  const [activite, setActivite] = useState({ cle: null, activite: null, erreur: false });

  useEffect(() => {
    if (!bassins.length) return undefined;
    const controleur = new AbortController();
    fetchActiviteTerritoire(cleActivite ? cleActivite.split(',') : [], { signal: controleur.signal, limit: bassin ? 8 : 12 })
      .then((a) => setActivite({ cle: cleActivite, activite: a, erreur: false }))
      .catch((e) => { if (e.name !== 'AbortError') setActivite({ cle: cleActivite, activite: null, erreur: true }); });
    return () => controleur.abort();
  }, [bassins.length, cleActivite, bassin]);

  const etatActivite = {
    activite: activite.cle === cleActivite ? activite.activite : null,
    chargement: activite.cle !== cleActivite,
    erreur: activite.cle === cleActivite && activite.erreur,
  };

  // ─── Actions ────────────────────────────────────────────────────────────────
  function changerTerritoire(cle) {
    const t = territoireDe(cle);
    maj({ territoire: t.cle, bassin: null });
    setCadrage(t.deps ? emprise(bassins.filter((p) => dansTerritoire(t, p))) : FRANCE_EMPRISE);
  }

  // Choix depuis la recherche ou le classement : on cadre sur le bassin, et on
  // repasse à la France entière s'il sort du territoire
  function allerAuBassin(id) {
    const p = parId.get(id);
    if (!p) return;
    maj({ bassin: id, ...(dansTerritoire(territoire, p) ? {} : { territoire: FRANCE }) });
    setCadrage(emprise([p]));
    haut.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Un changement d'indicateur remet ses réglages à leur valeur par défaut,
  // sauf ceux passés explicitement (lignes des chiffres clés du panneau)
  function changerIndicateur(cle, reglages = {}) {
    const suivant = resoudreIndicateur(cle, reglages);
    maj({ indicateur: cle, usage: reglages.usage ?? null, mesure: reglages.mesure ?? null, horizon: horizonValide(suivant, horizon) });
  }

  function changerReglage(cle, valeur) {
    const actuels = Object.fromEntries((indicateur.reglages ?? []).map((r) => [r.cle, r.valeur]));
    const suivant = resoudreIndicateur(indicateur.cle, { ...actuels, [cle]: valeur });
    maj({ [cle]: valeur, horizon: horizonValide(suivant, horizon) });
  }

  const rendreInfobulle = useCallback((id) => {
    const p = parId.get(id);
    if (!p) return null;
    const v = indicateur.valeur(p, horizon);
    const c = classeDe(indicateur, p, horizon);
    return (
      <>
        <p className="text-[0.8125rem] font-semibold text-primary leading-snug">{p.nom}</p>
        <p className="text-[0.6875rem] text-on-surface-var">{nomsDepartements(p.deps).join(', ')}</p>
        <p className="flex items-center gap-1.5 mt-1.5 text-[0.75rem] text-on-surface">
          <span className="w-2.5 h-2.5 rounded-[3px] shrink-0" style={{ background: c?.couleur ?? '#d5d8e2' }} />
          <span>
            {libelleHorizon(indicateur, horizon)} : <strong className="font-semibold tabular-nums">{v != null ? indicateur.format(v) : 'non calculé'}</strong>
            {c && indicateur.type === 'classes' && <span className="text-on-surface-var"> ({c.label.toLowerCase()})</span>}
          </span>
        </p>
      </>
    );
  }, [parId, indicateur, horizon]);

  const legende = (
    <LegendeCarte
      indicateur={indicateur}
      horizon={horizon}
      repartition={repart}
      classeActive={classeSurvolee}
      onSurvolClasse={setClasseSurvolee}
    />
  );

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-5">
        <header ref={haut} className="scroll-mt-4">
          <h1 className="text-2xl font-bold text-primary mb-1">Vision territoriale</h1>
          <p className="text-sm text-on-surface-var max-w-3xl">
            La situation de l'eau dans les {bassins.length ? bassins.length.toLocaleString('fr-FR') : '1 140'} bassins versants de
            France métropolitaine, aujourd'hui et projetée en 2030 et 2050. Choisissez un territoire et un indicateur, puis cliquez
            sur un bassin pour afficher sa fiche.
          </p>
        </header>

        {/* Filtres : une seule ligne au-dessus de la carte */}
        <Carte className="px-4 py-3 flex flex-wrap items-end gap-x-5 gap-y-3">
          <Champ label="Territoire">
            <select
              aria-label="Territoire"
              value={territoire.cle}
              onChange={(e) => changerTerritoire(e.target.value)}
              className="px-3 py-2 rounded-xl border text-sm bg-white w-full sm:w-[240px]"
              style={{ borderColor: '#e0e2eb' }}
            >
              <option value={FRANCE}>France métropolitaine</option>
              <optgroup label="Régions">
                {REGIONS.map((r) => <option key={r.code} value={`reg-${r.code}`}>{r.nom}</option>)}
              </optgroup>
              <optgroup label="Départements">
                {DEPARTEMENTS_TRIES.map(([code, nom]) => <option key={code} value={`dep-${code}`}>{code} {nom}</option>)}
              </optgroup>
            </select>
          </Champ>
          <Champ label="Rechercher">
            <RechercheTerritoire bassins={bassins} onChoix={allerAuBassin} />
          </Champ>
          <span className="hidden lg:block w-px h-9 bg-surface-high" aria-hidden="true" />
          <Champ label="Indicateur">
            <select
              aria-label="Indicateur"
              value={indicateur.cle}
              onChange={(e) => changerIndicateur(e.target.value)}
              className="px-3 py-2 rounded-xl border text-sm bg-white w-full sm:w-[280px]"
              style={{ borderColor: '#e0e2eb' }}
            >
              {GROUPES.map((g) => (
                <optgroup key={g.cle} label={g.label}>
                  {INDICATEURS.filter((i) => i.groupe === g.cle).map((i) => <option key={i.cle} value={i.cle}>{i.labelMenu ?? i.label}</option>)}
                </optgroup>
              ))}
            </select>
          </Champ>
          {indicateur.reglages?.map((r) => (
            <Champ key={r.cle} label={r.label}>
              <div className="min-h-[38px] flex items-center">
                <Bascule label={r.label} options={r.choix} actif={r.valeur} onChange={(v) => changerReglage(r.cle, v)} />
              </div>
            </Champ>
          ))}
          <Champ label="Horizon">
            {/* Même hauteur que les listes déroulantes, pour aligner les libellés */}
            <div className="h-[38px] flex items-center">
              {indicateur.horizons.length > 1 ? (
                <SelecteurHorizon actif={horizon} onChange={(h) => maj({ horizon: h })} horizons={indicateur.horizons} />
              ) : (
                <p className="text-sm text-on-surface-var">{libelleHorizon(indicateur, horizon)}</p>
              )}
            </div>
          </Champ>
        </Carte>

        {erreur ? (
          <Carte className="p-10 text-center">
            <p className="text-sm text-on-surface-var">Impossible de charger les bassins versants ({erreur}).</p>
          </Carte>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-5 items-start">
            <Carte className="overflow-hidden">
              <CarteFrance
                geojson={donnees}
                couleurs={couleurs}
                membres={membres}
                surbrillance={surbrillance}
                selection={selection}
                cadrage={cadrage}
                onSelection={(id) => maj({ bassin: id })}
                rendreInfobulle={rendreInfobulle}
                className="h-[460px] sm:h-[600px] lg:h-[720px]"
              >
                {donnees && <div className="hidden sm:block absolute bottom-4 left-4 z-10">{legende}</div>}
              </CarteFrance>
              {donnees && <div className="sm:hidden p-3 bg-surface-low">{legende}</div>}
            </Carte>

            <Carte className="p-5 lg:max-h-[720px] lg:overflow-y-auto">
              {!donnees ? (
                <p className="text-sm text-on-surface-var py-10 text-center">Chargement des bassins…</p>
              ) : bassin ? (
                <PanneauBassin
                  key={bassin.id}
                  bassin={bassin}
                  territoire={territoire}
                  indicateur={indicateur}
                  onIndicateur={changerIndicateur}
                  onFermer={() => maj({ bassin: null })}
                  activite={etatActivite}
                />
              ) : (
                <PanneauTerritoire key={territoire.cle} territoire={territoire} bassins={bassinsTerritoire} activite={etatActivite} />
              )}
            </Carte>
          </div>
        )}

        {donnees && (
          <ClassementBassins
            key={`${territoire.cle}-${indicateur.cle}-${usage}-${mesure}`}
            indicateur={indicateur}
            horizon={horizon}
            bassins={bassinsTerritoire}
            territoire={territoire}
            selection={selection}
            onSelection={allerAuBassin}
          />
        )}

        <p className="text-[0.6875rem] text-on-surface-var leading-relaxed max-w-4xl">
          Sources : débits et bilans hydrologiques simulés par cinq modèles climatiques (scénario RCP 8.5, référence 1976-2005),
          prélèvements BNPE 2019-2023, arrêtés sécheresse VigiEau 2012-2025, établissements INSEE Sirene et référentiel sectoriel Noé.
          Un bassin est rattaché à chaque département dont il contient au moins une commune.
        </p>
      </main>
    </div>
  );
}

// Pas de <label> englobant : il transmettrait le clic sur son texte au
// premier bouton du sélecteur d'horizon. Chaque champ porte son aria-label.
function Champ({ label, children }) {
  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto">
      <span className="text-[0.75rem] font-semibold text-on-surface-var" aria-hidden="true">{label}</span>
      {children}
    </div>
  );
}
