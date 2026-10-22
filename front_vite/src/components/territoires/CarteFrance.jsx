// Carte des bassins versants de France métropolitaine (page Vision
// territoriale), sur le fond IGN restylé de l'onglet Constat.
//
// La géométrie est chargée une fois : changer d'indicateur, d'horizon ou de
// territoire ne fait que mettre à jour l'état de chaque bassin (feature-state
// MapLibre), sans recharger la source. Les bassins passent sous les noms de
// lieux du fond, qui restent lisibles.
//
// `couleurs` : Map id → couleur. `membres` : Set des bassins du territoire
// (les autres sont estompés), null pour tous. `surbrillance` : Set des
// bassins mis en avant depuis la légende, null sinon. `cadrage` : emprise
// [[o, s], [e, n]] à afficher, recadrée à chaque nouvelle valeur.
// `rendreInfobulle(id)` : contenu de l'infobulle au survol.

import { useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ATTRIBUTION, chargerStyle } from '../constat/styleCarte';
import { SANS_DONNEE } from '../../utils/territoiresIndicateurs';

const SOURCE = 'noe-bassins';
const FRANCE = [[-5.2, 41.3], [9.6, 51.15]];

// Opacité d'un bassin : estompé hors du territoire, ou hors de la classe
// survolée dans la légende
const opacite = (pleine) => [
  'case',
  ['boolean', ['feature-state', 'hors'], false], 0.1,
  ['boolean', ['feature-state', 'attenue'], false], 0.22,
  pleine,
];

function etat(carte, id, valeurs) {
  carte.setFeatureState({ source: SOURCE, id }, valeurs);
}

export default function CarteFrance({
  geojson,
  couleurs,
  membres = null,
  surbrillance = null,
  selection = null,
  cadrage = null,
  onSelection,
  rendreInfobulle,
  className = '',
  children,
}) {
  const conteneur = useRef(null);
  const carteRef = useRef(null);
  const [prete, setPrete] = useState(false);
  const [erreur, setErreur] = useState(false);
  const [survol, setSurvol] = useState(null); // { id, x, y }
  const rappels = useRef({});
  useEffect(() => {
    rappels.current = { onSelection };
  });

  // ─── Création de la carte, une fois par jeu de données ──────────────────────
  useEffect(() => {
    if (!conteneur.current || !geojson) return undefined;
    let carte = null;
    let annule = false;
    let survole = null;

    Promise.all([import('maplibre-gl'), chargerStyle()])
      .then(([{ default: maplibregl }, style]) => {
        if (annule) return;
        carte = new maplibregl.Map({
          container: conteneur.current,
          style,
          bounds: FRANCE,
          fitBoundsOptions: { padding: 24 },
          minZoom: 4,
          maxZoom: 12,
          attributionControl: false,
          dragRotate: false,
          pitchWithRotate: false,
          touchPitch: false,
        });
        carte.touchZoomRotate.disableRotation();
        carte.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
        carte.addControl(new maplibregl.AttributionControl({ compact: true, customAttribution: ATTRIBUTION }), 'bottom-right');

        carte.on('load', () => {
          if (annule) return;
          carte.addSource(SOURCE, { type: 'geojson', data: geojson, promoteId: 'id' });
          // Sous le premier calque de texte du fond : les noms restent au-dessus
          const avant = carte.getStyle().layers.find((l) => l.type === 'symbol')?.id;

          carte.addLayer({
            id: 'noe-bassins-fond',
            type: 'fill',
            source: SOURCE,
            paint: {
              'fill-color': ['coalesce', ['feature-state', 'couleur'], SANS_DONNEE],
              // Plus transparent en zoomant : le relief et les noms du fond
              // reprennent le dessus à l'échelle d'un bassin
              'fill-opacity': ['interpolate', ['linear'], ['zoom'],
                6, opacite(0.85),
                9, opacite(0.55),
              ],
            },
          }, avant);
          carte.addLayer({
            id: 'noe-bassins-contour',
            type: 'line',
            source: SOURCE,
            paint: {
              'line-color': '#ffffff',
              'line-width': ['interpolate', ['linear'], ['zoom'], 5, 0.35, 9, 1.2],
              'line-opacity': ['case', ['boolean', ['feature-state', 'hors'], false], 0.3, 0.9],
            },
          }, avant);
          carte.addLayer({
            id: 'noe-bassins-survol',
            type: 'line',
            source: SOURCE,
            paint: {
              'line-color': '#000a43',
              'line-width': 1.5,
              'line-opacity': ['case', ['boolean', ['feature-state', 'survol'], false], 0.9, 0],
            },
          });
          carte.addLayer({
            id: 'noe-bassins-selection-halo',
            type: 'line',
            source: SOURCE,
            paint: {
              'line-color': '#ffffff',
              'line-width': 5,
              'line-opacity': ['case', ['boolean', ['feature-state', 'selection'], false], 0.9, 0],
            },
          });
          carte.addLayer({
            id: 'noe-bassins-selection',
            type: 'line',
            source: SOURCE,
            paint: {
              'line-color': '#000a43',
              'line-width': 2.5,
              'line-opacity': ['case', ['boolean', ['feature-state', 'selection'], false], 1, 0],
            },
          });
          setPrete(true);
        });

        carte.on('mousemove', 'noe-bassins-fond', (e) => {
          const id = e.features?.[0]?.id ?? e.features?.[0]?.properties?.id;
          if (id == null) return;
          if (survole !== id) {
            if (survole != null) etat(carte, survole, { survol: false });
            etat(carte, id, { survol: true });
            survole = id;
          }
          carte.getCanvas().style.cursor = 'pointer';
          setSurvol({ id, x: e.point.x, y: e.point.y, largeur: carte.getContainer().clientWidth });
        });
        carte.on('mouseleave', 'noe-bassins-fond', () => {
          if (survole != null) etat(carte, survole, { survol: false });
          survole = null;
          carte.getCanvas().style.cursor = '';
          setSurvol(null);
        });
        carte.on('click', (e) => {
          const f = carte.queryRenderedFeatures(e.point, { layers: ['noe-bassins-fond'] })[0];
          rappels.current.onSelection?.(f ? (f.id ?? f.properties.id) : null);
        });

        carteRef.current = carte;
      })
      .catch(() => { if (!annule) setErreur(true); });

    return () => {
      annule = true;
      carteRef.current = null;
      setPrete(false);
      carte?.remove();
    };
  }, [geojson]);

  // ─── États des bassins ──────────────────────────────────────────────────────
  useEffect(() => {
    const carte = carteRef.current;
    if (!prete || !carte || !couleurs) return;
    for (const [id, couleur] of couleurs) etat(carte, id, { couleur });
  }, [prete, couleurs]);

  useEffect(() => {
    const carte = carteRef.current;
    if (!prete || !carte) return;
    for (const f of geojson.features) etat(carte, f.id, { hors: membres ? !membres.has(f.id) : false });
  }, [prete, geojson, membres]);

  useEffect(() => {
    const carte = carteRef.current;
    if (!prete || !carte) return;
    for (const f of geojson.features) etat(carte, f.id, { attenue: surbrillance ? !surbrillance.has(f.id) : false });
  }, [prete, geojson, surbrillance]);

  useEffect(() => {
    const carte = carteRef.current;
    if (!prete || !carte || selection == null) return undefined;
    etat(carte, selection, { selection: true });
    return () => {
      if (carteRef.current) etat(carte, selection, { selection: false });
    };
  }, [prete, selection]);

  const cleCadrage = cadrage ? cadrage.flat().join(',') : null;
  useEffect(() => {
    const carte = carteRef.current;
    if (!prete || !carte || !cadrage) return;
    carte.fitBounds(cadrage, { padding: 60, maxZoom: 8, duration: 700 });
    // cadrage est recréé à chaque rendu : seule sa valeur compte
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prete, cleCadrage]);

  if (erreur) {
    return (
      <div className={`bg-surface-low flex items-center justify-center ${className}`}>
        <p className="text-[0.8125rem] text-on-surface-var">Carte indisponible.</p>
      </div>
    );
  }

  const infobulle = survol && rendreInfobulle?.(survol.id);
  // Près du bord droit, l'infobulle passe à gauche du curseur
  const aGauche = survol && survol.x > survol.largeur - 280;

  return (
    <div className={`relative ${className}`}>
      {/* La feuille de style MapLibre impose position: relative au conteneur
          de la carte : on le dimensionne en hauteur et largeur pleines */}
      <div ref={conteneur} className="h-full w-full bg-surface-low" />
      {!prete && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-[0.8125rem] text-on-surface-var">Chargement de la carte…</p>
        </div>
      )}
      {infobulle && (
        <div
          className="absolute z-20 pointer-events-none bg-white rounded-[10px] px-3 py-2 w-max max-w-[260px]"
          style={{
            left: aGauche ? survol.x - 14 : survol.x + 14,
            top: survol.y + 14,
            transform: aGauche ? 'translateX(-100%)' : undefined,
            border: '1px solid #e0e2eb',
            boxShadow: '0 4px 16px rgba(0,10,67,0.12)',
          }}
        >
          {infobulle}
        </div>
      )}
      {children}
    </div>
  );
}
