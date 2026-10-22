// Style « Noé » des cartes de l'onglet Constat, dérivé du Plan IGN vectoriel
// (Géoplateforme, gratuit et sans clé). On garde l'eau, la végétation, les
// grands axes et les noms de lieux, on retire le reste, et on ajoute
// l'ombrage du relief (raster IGN) sous les couches vectorielles.

const STYLE_IGN = 'https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/standard.json';

const wmts = (couche, style = 'normal') =>
  'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0'
  + `&LAYER=${couche}&STYLE=${style}&TILEMATRIXSET=PM&FORMAT=image/png`
  + '&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}';

export const ATTRIBUTION = '© <a href="https://geoservices.ign.fr/" target="_blank" rel="noopener noreferrer">IGN Géoplateforme</a>';

const FOND = '#f6f7fb';
const EAU_LIGNE = '#74b6df';
const EAU_SURFACE = '#b5dcf0';
const EAU_TEXTE = '#0b6e9e';
const ROUTE_BORD = '#d6dbe6';
const ROUTE_CENTRE = '#fbfbfe';
const TEXTE = '#3d4250';

// Couches IGN retirées, par préfixe de couche source
const RETIREES = /^(bati_|parcellaire|ferre|oro_|toponyme_bati|toponyme_routier|toponyme_ocs|toponyme_oro|toponyme_limite|routier_ponc|routier_chemin|routier_liaison|routier_surf|limite_|hydro_ponc|hydro_reseau_sou)/;

// Seuls les grands axes restent, pour se repérer
const ROUTES_GARDEES = /AUTOROU_(PEAGE|LIBRE)|PRINCIPALE_[1-4]|BRET_PRINCIPALE/;

const RELIEF = {
  id: 'noe-relief',
  type: 'raster',
  source: 'noe-relief',
  paint: { 'raster-opacity': 0.4 },
};

// Emprise couverte par l'ombrage IGN (métropole et Corse) : hors de
// cette zone ou sous le zoom 6, le serveur répond 400.
const EMPRISE_IGN = [-6, 41, 10.5, 51.5];

const SOURCES_RASTER = {
  'noe-relief': {
    type: 'raster',
    tiles: [wmts('ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW', 'estompage_grayscale')],
    tileSize: 256,
    bounds: EMPRISE_IGN,
    minzoom: 6,
    maxzoom: 15,
  },
};

function restyler(style) {
  const couches = [];

  for (const couche of style.layers) {
    const source = couche['source-layer'] ?? '';
    if (RETIREES.test(source)) continue;

    const c = { ...couche, paint: { ...(couche.paint ?? {}) } };

    if (c.type === 'background') c.paint['background-color'] = FOND;

    if (source.startsWith('routier_route')) {
      const filtre = JSON.stringify(c.filter ?? '');
      if (!ROUTES_GARDEES.test(filtre) || c.id.includes('axe')) continue;
      c.paint['line-color'] = c.id.includes('extérieur') ? ROUTE_BORD : ROUTE_CENTRE;
    }

    if (source.startsWith('ocs_') && c.type === 'fill') c.paint['fill-opacity'] = 0.45;
    if (source === 'hydro_surf' && c.type === 'fill') c.paint['fill-color'] = EAU_SURFACE;
    if (source.startsWith('hydro_reseau') && c.type === 'line') c.paint['line-color'] = EAU_LIGNE;
    if (source.startsWith('toponyme_hydro') && c.type === 'symbol') c.paint['text-color'] = EAU_TEXTE;
    if (source === 'toponyme_localite_ponc' && c.type === 'symbol') {
      c.paint['text-color'] = TEXTE;
      c.paint['text-halo-color'] = '#ffffff';
    }

    couches.push(c);
  }

  // Relief juste au-dessus du fond
  couches.splice(1, 0, RELIEF);

  return { ...style, sources: { ...style.sources, ...SOURCES_RASTER }, layers: couches };
}

// Repli si le style IGN ne répond pas : fond uni et relief
const STYLE_REPLI = {
  version: 8,
  sources: SOURCES_RASTER,
  layers: [{ id: 'fond', type: 'background', paint: { 'background-color': FOND } }, RELIEF],
};

let chargement = null;

export function chargerStyle() {
  if (!chargement) {
    chargement = fetch(STYLE_IGN)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`Style IGN ${r.status}`))))
      .then(restyler)
      .catch(() => {
        chargement = null; // nouvel essai au prochain affichage
        return STYLE_REPLI;
      });
  }
  return chargement;
}
