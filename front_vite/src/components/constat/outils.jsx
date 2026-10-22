// Outils sans composant de l'onglet Constat : le style des axes de graphique,
// la géométrie du bassin et l'ouverture des parties repliables.

export const AXE = { fontSize: 11, fill: '#44474f', fontFamily: 'Inter, sans-serif' };

// Anneaux extérieurs du bassin (Polygon ou MultiPolygon), en [lon, lat]
export function anneauxExterieurs(geojson) {
  const g = geojson?.geometry ?? geojson;
  if (g?.type === 'Polygon') return [g.coordinates[0]];
  if (g?.type === 'MultiPolygon') return g.coordinates.map((p) => p[0]);
  return [];
}

// Les liens des sommaires ouvrent la partie visée avant d'y défiler
export const EVENEMENT_OUVRIR = 'constat:ouvrir';

export function ouvrirPartie(id) {
  window.dispatchEvent(new CustomEvent(EVENEMENT_OUVRIR, { detail: id }));
}
