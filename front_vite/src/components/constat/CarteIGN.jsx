// Carte MapLibre du bassin versant sur fond IGN restylé (voir styleCarte.js).
// MapLibre est chargé à la demande pour ne pas alourdir le premier affichage.
// `marqueurs` doit garder la même identité entre deux rendus (useMemo côté
// appelant), sans quoi la carte est recréée.
//
// Marqueurs de type 'point' (numérotés, cliquables) : `actif` désigne celui
// mis en avant, `onClicPoint(id)` et `onSurvolPoint(id | null)` remontent les
// interactions, et `onProjection` reçoit à chaque mouvement de la carte une
// fonction qui convertit [lon, lat] en pixels, pour y accrocher un élément.
// `superposition` est rendu dans un calque placé sous les marqueurs (un trait
// de liaison passe ainsi sous les étiquettes). `zonesReservees(largeur,
// hauteur)` renvoie les rectangles couverts par des panneaux posés sur la
// carte : les étiquettes sont placées pour les éviter, et s'éviter entre elles.

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ATTRIBUTION, chargerStyle } from './styleCarte';
import { anneauxExterieurs } from './outils';

function emprise(anneaux) {
  const pts = anneaux.flat();
  if (!pts.length) return null;
  const lons = pts.map((p) => p[0]);
  const lats = pts.map((p) => p[1]);
  return [[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]];
}

// Le monde entier troué par le bassin, pour estomper l'extérieur
function masque(anneaux) {
  const monde = [[-180, -85], [180, -85], [180, 85], [-180, 85], [-180, -85]];
  return { type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [monde, ...anneaux] } };
}

// Décalage de l'étiquette de l'établissement par rapport au point, en pixels
const RENVOI = { dx: 72, dy: 44 };
// Rayon du numéro d'un point et écart entre le numéro et son étiquette
const RAYON_POINT = 13;
const ECART_POINT = 6;

// ─── Placement des étiquettes sans chevauchement ────────────────────────────

// Rectangles [gauche, haut, droite, bas] en pixels du conteneur. Les largeurs
// de texte sont estimées d'après le nombre de caractères.
const largeurTexte = (texte, parCaractere) => (texte ? texte.length * parCaractere + 20 : 0);

function boitePoint(x, y, label, cote) {
  const l = largeurTexte(label, 6.6);
  const r = RAYON_POINT;
  return cote === 'gauche'
    ? [x - r - (l ? ECART_POINT + l : 0), y - r, x + r, y + r]
    : [x - r, y - r, x + r + (l ? ECART_POINT + l : 0), y + r];
}

function boitesEtablissement(x, y, label, cote, vertical) {
  const l = largeurTexte(label, 7.2);
  const dx = cote === 'gauche' ? -RENVOI.dx : RENVOI.dx;
  const dy = vertical === 'bas' ? RENVOI.dy : -RENVOI.dy;
  const lx = x + dx;
  const etiquette = cote === 'gauche' ? [lx - l, y + dy - 13, lx, y + dy + 13] : [lx, y + dy - 13, lx + l, y + dy + 13];
  // Le point, l'étiquette et le milieu du trait de renvoi
  return [[x - 14, y - 14, x + 14, y + 14], etiquette, [x + dx / 2 - 6, y + dy / 2 - 6, x + dx / 2 + 6, y + dy / 2 + 6]];
}

const aire = (a, b) => Math.max(0, Math.min(a[2], b[2]) - Math.max(a[0], b[0]))
  * Math.max(0, Math.min(a[3], b[3]) - Math.max(a[1], b[1]));

// Coût d'une boîte : recouvrements avec les boîtes déjà posées, et partie
// hors de la carte (comptée double)
function cout(boite, occupees, largeur, hauteur) {
  const dedans = aire(boite, [0, 0, largeur, hauteur]);
  const totale = (boite[2] - boite[0]) * (boite[3] - boite[1]);
  return occupees.reduce((s, o) => s + aire(boite, o), 0) + 2 * (totale - dedans);
}

// ─── Éléments des marqueurs ──────────────────────────────────────────────────

function elementEtablissement(m, cote, vertical) {
  const el = document.createElement('div');
  const dx = cote === 'gauche' ? -RENVOI.dx : RENVOI.dx;
  const dy = vertical === 'bas' ? RENVOI.dy : -RENVOI.dy;
  el.className = 'noe-etab';
  el.innerHTML = `<svg class="noe-etab-trait" aria-hidden="true"><line x1="0" y1="0" x2="${dx}" y2="${dy}" /></svg>`
    + '<span class="noe-repere"><span class="noe-repere-halo"></span><span class="noe-repere-point"></span></span>';
  const label = document.createElement('span');
  label.className = `noe-marqueur-label noe-etab-label noe-etab-label-${cote}`;
  label.style.left = `calc(50% + ${dx}px)`;
  label.style.top = `calc(50% + ${dy}px)`;
  label.textContent = m.label;
  el.appendChild(label);
  return el;
}

// Point numéroté : un bouton, sélectionnable à la souris comme au clavier.
// `cote` : côté de l'étiquette par rapport au numéro.
function elementPoint(m, cote) {
  const bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.className = `noe-point${cote === 'gauche' ? ' noe-point-gauche' : ''}`;
  bouton.setAttribute('aria-label', m.description ?? m.label ?? '');
  bouton.style.setProperty('--noe-point', m.couleur ?? '#0097d6');
  bouton.innerHTML = '<span class="noe-point-num"></span>';
  bouton.firstChild.textContent = m.numero ?? '';
  if (m.label) {
    const label = document.createElement('span');
    label.className = 'noe-point-label';
    label.textContent = m.label;
    bouton.appendChild(label);
  }
  return bouton;
}

function elementStation(m) {
  const el = document.createElement('div');
  el.className = 'noe-marqueur';
  el.innerHTML = '<span class="noe-station-point"></span>';
  const label = document.createElement('span');
  label.className = 'noe-station-label';
  label.textContent = m.label;
  el.appendChild(label);
  return el;
}

export default function CarteIGN({
  bassin,
  marqueurs = [],
  marges = 32,
  voile = 0.16,
  controles = true,
  positionControles = 'top-right',
  className = '',
  actif = null,
  onClicPoint,
  onSurvolPoint,
  onProjection,
  zonesReservees,
  superposition = null,
}) {
  const conteneur = useRef(null);
  const points = useRef(new Map());
  const [calque, setCalque] = useState(null);
  // Les rappels changent à chaque rendu : on garde le dernier sans recréer la carte
  const rappels = useRef({});
  useEffect(() => {
    rappels.current = { onClicPoint, onSurvolPoint, onProjection, zonesReservees };
  });
  const [erreur, setErreur] = useState(false);
  const geojson = bassin?.geojson;

  const actifRef = useRef(actif);
  useEffect(() => {
    actifRef.current = actif;
    for (const [id, el] of points.current) el.toggleAttribute('data-actif', id === actif);
  }, [actif]);

  useEffect(() => {
    if (!conteneur.current || !geojson) return undefined;
    let carte = null;
    let annule = false;
    const anneaux = anneauxExterieurs(geojson);
    // Cadrage : le bassin et tous les marqueurs (un établissement ou un point
    // peut se trouver dans une partie du bassin absente du contour affiché)
    const bornes = emprise([...anneaux, marqueurs.filter((m) => m.lon != null && m.lat != null).map((m) => [m.lon, m.lat])]);

    Promise.all([import('maplibre-gl'), chargerStyle()])
      .then(([{ default: maplibregl }, style]) => {
        if (annule) return;
        carte = new maplibregl.Map({
          container: conteneur.current,
          style,
          bounds: bornes ?? undefined,
          fitBoundsOptions: { padding: marges },
          attributionControl: false,
          scrollZoom: false,
          dragRotate: false,
          pitchWithRotate: false,
          touchPitch: false,
        });
        carte.touchZoomRotate.disableRotation();
        if (controles) carte.addControl(new maplibregl.NavigationControl({ showCompass: false }), positionControles);
        carte.addControl(new maplibregl.AttributionControl({ compact: true, customAttribution: ATTRIBUTION }), 'bottom-right');

        // Calque des superpositions : avant les marqueurs, donc dessous
        const div = document.createElement('div');
        div.className = 'noe-calque';
        carte.getCanvasContainer().appendChild(div);
        setCalque(div);

        const projeter = () => {
          const { clientWidth: largeur, clientHeight: hauteur } = carte.getContainer();
          rappels.current.onProjection?.({ projeter: (lon, lat) => carte.project([lon, lat]), largeur, hauteur });
        };
        carte.on('move', projeter);
        carte.on('resize', projeter);
        // Sans attendre le style : la projection ne dépend que de la vue
        projeter();

        carte.on('load', () => {
          projeter();
          carte.addSource('noe-masque', { type: 'geojson', data: masque(anneaux) });
          carte.addSource('noe-bassin', { type: 'geojson', data: geojson });
          if (voile) {
            // Teinte bleu marine hors du bassin : le bassin ressort, la carte gagne en profondeur
            carte.addLayer({ id: 'noe-masque', type: 'fill', source: 'noe-masque', paint: { 'fill-color': '#051b71', 'fill-opacity': voile } });
          }
          carte.addLayer({ id: 'noe-bassin-fond', type: 'fill', source: 'noe-bassin', paint: { 'fill-color': '#0097d6', 'fill-opacity': 0.05 } });
          carte.addLayer({ id: 'noe-bassin-halo', type: 'line', source: 'noe-bassin', paint: { 'line-color': '#ffffff', 'line-width': 3.5, 'line-opacity': 0.7 } });
          carte.addLayer({ id: 'noe-bassin-contour', type: 'line', source: 'noe-bassin', paint: { 'line-color': '#051b71', 'line-width': 2 } });
        });

        // Placement : les points d'abord, dans l'ordre reçu, puis l'établissement.
        // Chaque étiquette prend le côté qui recouvre le moins ce qui est déjà
        // posé (panneaux réservés compris) et déborde le moins de la carte.
        const { clientWidth: largeur, clientHeight: hauteur } = carte.getContainer();
        const occupees = [...(rappels.current.zonesReservees?.(largeur, hauteur) ?? [])];
        // Le point de l'établissement est réservé d'emblée : les étiquettes des
        // points de calcul l'évitent aussi
        for (const m of marqueurs) {
          if (m.type !== 'etablissement') continue;
          const { x, y } = carte.project([m.lon, m.lat]);
          occupees.push([x - 14, y - 14, x + 14, y + 14]);
        }
        const centreLon = bornes ? (bornes[0][0] + bornes[1][0]) / 2 : 0;
        const ordre = [...marqueurs].sort((a, b) => (a.type === 'point' ? 0 : 1) - (b.type === 'point' ? 0 : 1));

        for (const m of ordre) {
          const { x, y } = carte.project([m.lon, m.lat]);

          if (m.type === 'point') {
            const cote = ['droite', 'gauche']
              .map((c) => ({ c, k: cout(boitePoint(x, y, m.label, c), occupees, largeur, hauteur) }))
              .sort((a, b) => a.k - b.k)[0].c;
            occupees.push(boitePoint(x, y, m.label, cote));
            const el = elementPoint(m, cote);
            el.toggleAttribute('data-actif', m.id === actifRef.current);
            el.addEventListener('click', () => rappels.current.onClicPoint?.(m.id));
            el.addEventListener('mouseenter', () => rappels.current.onSurvolPoint?.(m.id));
            el.addEventListener('mouseleave', () => rappels.current.onSurvolPoint?.(null));
            el.addEventListener('focus', () => rappels.current.onSurvolPoint?.(m.id));
            el.addEventListener('blur', () => rappels.current.onSurvolPoint?.(null));
            points.current.set(m.id, el);
            // Ancré du côté du numéro, décalé de son rayon pour centrer celui-ci
            new maplibregl.Marker({
              element: el,
              anchor: cote === 'gauche' ? 'right' : 'left',
              offset: [cote === 'gauche' ? RAYON_POINT : -RAYON_POINT, 0],
            })
              .setLngLat([m.lon, m.lat])
              .addTo(carte);
            continue;
          }

          if (m.type === 'etablissement') {
            // Côté préféré : vers l'extérieur du bassin, l'étiquette au-dessus
            const prefere = m.lon < centreLon ? 'gauche' : 'droite';
            const autre = prefere === 'gauche' ? 'droite' : 'gauche';
            const candidats = [[prefere, 'haut'], [autre, 'haut'], [prefere, 'bas'], [autre, 'bas']];
            const [cote, vertical] = candidats
              .map(([c, v], rang) => ({
                c, v, k: boitesEtablissement(x, y, m.label, c, v).reduce((s, b) => s + cout(b, occupees, largeur, hauteur), 0) + rang,
              }))
              .sort((a, b) => a.k - b.k)
              .map(({ c, v }) => [c, v])[0];
            occupees.push(...boitesEtablissement(x, y, m.label, cote, vertical));
            new maplibregl.Marker({ element: elementEtablissement(m, cote, vertical), anchor: 'center' })
              .setLngLat([m.lon, m.lat])
              .addTo(carte);
            continue;
          }

          // Station : ancrée à gauche, décalée du rayon du point pour centrer celui-ci
          new maplibregl.Marker({ element: elementStation(m), anchor: 'left', offset: [-7, 0] })
            .setLngLat([m.lon, m.lat])
            .addTo(carte);
        }
      })
      .catch(() => { if (!annule) setErreur(true); });

    const elements = points.current;
    return () => {
      annule = true;
      elements.clear();
      setCalque(null);
      carte?.remove();
    };
  }, [geojson, marqueurs, marges, voile, controles, positionControles]);

  if (!geojson || erreur) {
    return (
      <div className={`bg-surface-low flex items-center justify-center ${className}`}>
        <p className="text-[0.8125rem] text-on-surface-var">Carte indisponible.</p>
      </div>
    );
  }

  return (
    <>
      <div ref={conteneur} className={`bg-surface-low ${className}`} />
      {calque && superposition && createPortal(superposition, calque)}
    </>
  );
}
