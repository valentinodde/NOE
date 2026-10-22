// Outils de tracé, sans React : lissage de deux séries mensuelles et zones
// d'écart entre elles. Les courbes et les zones sont tracées en segments
// droits sur une série densifiée, pour que les remplissages épousent
// exactement les courbes, croisements compris.

// Pentes de Fritsch-Carlson : interpolation cubique monotone, sans
// dépassement (une courbe de pluie ne doit pas inventer de pic).
function pentes(y) {
  const n = y.length;
  const d = y.slice(1).map((v, i) => v - y[i]);
  const m = new Array(n);
  m[0] = d[0];
  m[n - 1] = d[n - 2];
  for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  for (let i = 0; i < n - 1; i++) {
    if (d[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
    const a = m[i] / d[i];
    const b = m[i + 1] / d[i];
    const s = a * a + b * b;
    if (s > 9) {
      const t = 3 / Math.sqrt(s);
      m[i] = t * a * d[i];
      m[i + 1] = t * b * d[i];
    }
  }
  return m;
}

function interpoler(y, m, x) {
  const i = Math.min(Math.floor(x), y.length - 2);
  const t = x - i;
  const h00 = 2 * t ** 3 - 3 * t ** 2 + 1;
  const h10 = t ** 3 - 2 * t ** 2 + t;
  const h01 = -2 * t ** 3 + 3 * t ** 2;
  const h11 = t ** 3 - t ** 2;
  return h00 * y[i] + h10 * m[i] + h01 * y[i + 1] + h11 * m[i + 1];
}

/**
 * Densifie deux séries (a = référence, b = projection) et renvoie des points
 * { x, a, b, deficit: [bas, haut], surplus: [bas, haut] }. `deficit` couvre
 * l'écart quand b passe sous a, `surplus` quand b passe au-dessus ; l'autre
 * zone est réduite à une épaisseur nulle. Les points de croisement sont
 * insérés pour que les deux zones se referment au bon endroit.
 */
export function ecartDensifie(a, b, pas = 10) {
  const ma = pentes(a);
  const mb = pentes(b);
  const brut = [];
  for (let k = 0; k <= (a.length - 1) * pas; k++) {
    const x = k / pas;
    brut.push({ x, a: interpoler(a, ma, x), b: interpoler(b, mb, x) });
  }

  const points = [];
  brut.forEach((p, k) => {
    const prec = brut[k - 1];
    if (prec) {
      const e0 = prec.b - prec.a;
      const e1 = p.b - p.a;
      if (e0 * e1 < 0) {
        const t = e0 / (e0 - e1);
        const x = prec.x + t * (p.x - prec.x);
        const y = prec.a + t * (p.a - prec.a);
        points.push({ x, a: y, b: y });
      }
    }
    points.push(p);
  });

  return points.map((p) => ({
    ...p,
    deficit: p.b < p.a ? [p.b, p.a] : [p.a, p.a],
    surplus: p.b > p.a ? [p.a, p.b] : [p.a, p.a],
  }));
}

// ─── Périodes sous un seuil, au jour près ────────────────────────────────────

const JOURS_AN = 365;
const MILIEU_MOIS = (i) => (i + 0.5) * (JOURS_AN / 12);

/**
 * Jours de l'année où une série mensuelle passe sous `seuil`. Chaque valeur
 * est placée au milieu de son mois, et l'on interpole linéairement entre deux
 * mois voisins, décembre rejoignant janvier (une période peut chevaucher le
 * nouvel an). Renvoie un tableau de 365 booléens.
 */
export function joursSousSeuil(serie, seuil) {
  const jours = new Array(JOURS_AN);
  for (let d = 0; d < JOURS_AN; d++) {
    const t = d + 0.5;
    let i = Math.floor(t / (JOURS_AN / 12) - 0.5);
    if (i < 0) i = 11;
    const j = (i + 1) % 12;
    let debut = MILIEU_MOIS(i);
    let fin = MILIEU_MOIS(j);
    let x = t;
    if (fin < debut) fin += JOURS_AN;
    if (x < debut) x += JOURS_AN;
    const v = serie[i] + ((x - debut) / (fin - debut)) * (serie[j] - serie[i]);
    jours[d] = v < seuil;
  }
  return jours;
}

/**
 * Suites de jours consécutifs où `jours[d]` est vrai, sous la forme
 * { debut, duree } (debut de 0 à 364). Une suite qui passe le 31 décembre est
 * fusionnée avec celle du 1er janvier : son début est alors en fin d'année.
 */
export function periodes(jours) {
  const n = jours.length;
  if (jours.every(Boolean)) return [{ debut: 0, duree: n }];
  const suites = [];
  let d = 0;
  while (d < n) {
    if (!jours[d]) { d++; continue; }
    const debut = d;
    while (d < n && jours[d]) d++;
    suites.push({ debut, duree: d - debut });
  }
  if (suites.length > 1 && jours[0] && jours[n - 1]) {
    const premiere = suites.shift();
    suites[suites.length - 1].duree += premiere.duree;
  }
  return suites;
}
