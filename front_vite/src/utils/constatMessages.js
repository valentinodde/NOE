// Calculs et formulations de l'onglet Constat, sans React.
// Chaque message clé est choisi par des seuils appliqués aux données du
// bassin : une même phrase ne doit jamais être fausse sur un territoire
// (exemple : « il pleut plus sur l'année » là où le cumul annuel baisse).

export const HORIZONS = ['actuel', '2030', '2050'];

// Période de référence et scénario des projections climatiques des bassins
export const PERIODE_REFERENCE = '1976-2005';
export const SCENARIO = 'RCP 8.5';

// La situation « actuelle » des données s'affiche sous l'étiquette 2025.
export const HORIZON_LABELS = { actuel: '2025', '2030': '2030', '2050': '2050' };

export const MOIS_COURTS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
export const MOIS_LONGS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

// Seuils de formulation, en % d'évolution entre 2025 et 2050
const SEUIL_PLUIE_ETE = 5;
const SEUIL_PLUIE_AN = 2;
const SEUIL_JOURS_SECS = 5;     // en jours
const SEUIL_DEMANDE = 3;
// Sous ce volume (Mm³/an), les prélèvements du bassin sont négligeables : même
// seuil que les fiches pour ne pas calculer d'évolution.
export const SEUIL_PRELEVEMENTS_MM3 = 0.05;

// ─── Formatage ────────────────────────────────────────────────────────────────

export function pct(valeur, reference) {
  if (valeur == null || !reference) return null;
  return Math.round(((valeur - reference) / Math.abs(reference)) * 100);
}

// Signe moins typographique (U+2212), espace insécable avant l'unité
export function fmtSigne(valeur, unite = '%', decimales = 0) {
  if (valeur == null) return '-';
  const abs = Math.abs(valeur).toLocaleString('fr-FR', {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });
  const signe = valeur > 0 ? '+' : valeur < 0 ? '−' : '';
  return `${signe}${abs}\u00a0${unite}`;
}

export function fmtNombre(valeur, decimales = 0) {
  if (valeur == null) return '-';
  return valeur.toLocaleString('fr-FR', {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });
}

// Fraction affichée en pourcentage. Au-delà de 1, le ratio n'a plus de sens
// lisible (jusqu'à plusieurs milliers de %) : l'affichage est plafonné.
export function fmtPart(fraction) {
  if (fraction == null) return '-';
  if (fraction > 1) return '>\u00a0100\u00a0%';
  if (fraction > 0 && fraction < 0.01) return '<\u00a01\u00a0%';
  return `${Math.round(fraction * 100)}\u00a0%`;
}

// Débit en m³/s, avec une précision adaptée à son ordre de grandeur
export function fmtDebit(valeur) {
  if (valeur == null) return '-';
  const decimales = valeur < 0.1 ? 3 : valeur < 1 ? 2 : valeur < 10 ? 1 : 0;
  return `${fmtNombre(valeur, decimales)}\u00a0m³/s`;
}

// « 1,8 million », « 2,4 millions » : le pluriel commence à 2
export const millions = (v) => (Math.abs(v) < 2 ? 'million' : 'millions');

const somme = (liste) => liste.reduce((s, v) => s + (v ?? 0), 0);

// ─── Température ──────────────────────────────────────────────────────────────

// Écarts calculés par rapport à la période de référence du jeu de données.
export function analyseTemperature(t) {
  const temp = t?.projections_climatiques?.mean_temperature;
  const deltas = t?.projections_climatiques?.temperature_delta_c;
  if (!temp || temp.actuel == null) return null;

  // Calculé depuis les températures affichées pour rester cohérent avec elles,
  // l'écart fourni par le jeu de données ne sert qu'en repli.
  const ecart = (h) => {
    if (temp[h] != null && temp.ref != null) return Math.round((temp[h] - temp.ref) * 10) / 10;
    return deltas?.[h] ?? null;
  };

  return {
    reference: temp.ref,
    actuel: temp.actuel,
    ecarts: { actuel: ecart('actuel'), '2030': ecart('2030'), '2050': ecart('2050') },
  };
}

// ─── Offre 1 : pluies au fil de l'année ──────────────────────────────────────

// Périodes mises en avant à côté du graphique. `bandes` : intervalles à
// surligner sur l'axe des mois (0 = janvier), une demi-case de part et d'autre.
const PERIODES_PLUIE = [
  { cle: 'ete', label: 'Été', detail: 'juin à août', mois: [5, 6, 7], bandes: [[4.5, 7.5]] },
  { cle: 'annee', label: "Sur l'année", detail: 'cumul annuel', mois: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], bandes: [[0, 11]] },
];

// Les cumuls sont recalculés depuis les pluies mensuelles, pour rester
// cohérents avec la courbe affichée.
export function analysePluie(t) {
  const m = t?.precipitations_mensuelles_mm;
  if (m?.actuel?.length !== 12 || m?.['2050']?.length !== 12) return null;

  const periodes = PERIODES_PLUIE.map((p) => {
    const actuel = somme(p.mois.map((i) => m.actuel[i]));
    const futur = somme(p.mois.map((i) => m['2050'][i]));
    return { ...p, actuel, futur, delta: pct(futur, actuel) };
  });
  const [ete, annee] = periodes;

  const eteBaisse = ete.delta <= -SEUIL_PLUIE_ETE;
  const eteHausse = ete.delta >= SEUIL_PLUIE_ETE;
  const anHausse = annee.delta >= SEUIL_PLUIE_AN;
  const anBaisse = annee.delta <= -SEUIL_PLUIE_AN;

  const titre = eteBaisse
    ? 'Moins de pluie en été'
    : eteHausse
      ? 'Un peu plus de pluie en été'
      : "Des pluies d'été qui évoluent peu";

  let chapeau;
  if (eteBaisse) {
    chapeau = anHausse
      ? "D'ici 2050, il pleut davantage sur l'année, mais moins en été : la pluie se déplace vers l'hiver."
      : anBaisse
        ? (ete.delta < annee.delta
          ? "D'ici 2050, il pleut moins sur l'année, et c'est l'été qui perd le plus."
          : "D'ici 2050, il pleut moins sur l'année, en été comme aux autres saisons.")
        : "D'ici 2050, il pleut autant sur l'année, mais la pluie se déplace de l'été vers le reste de l'année.";
  } else {
    chapeau = anHausse
      ? "D'ici 2050, il pleut un peu plus sur l'année, sans baisse marquée en été."
      : anBaisse
        ? "D'ici 2050, le cumul annuel baisse, mais les pluies d'été se maintiennent."
        : "D'ici 2050, les pluies évoluent peu, sur l'année comme en été.";
  }

  // Message clé : `fort` est surligné, `suite` reste en texte courant
  const messageCle = eteBaisse
    ? { fort: "Moins d'eau disponible en été", suite: ', au moment où les besoins sont les plus forts.' }
    : { fort: "Les pluies d'été se maintiennent", suite: ", mais la chaleur augmente l'évaporation : la ressource estivale reste sous pression." };

  return {
    titre,
    chapeau,
    messageCle,
    periodes,
    actuel: m.actuel,
    futur: m['2050'],
    alerte: eteBaisse,
  };
}

// ─── Offre 2 : sols secs ──────────────────────────────────────────────────────

// Le ruissellement et l'infiltration annuels du modèle baissent dans la
// plupart des bassins (il pleut moins au total) : ils ne sont pas affichés en
// chiffres. Le message clé décrit le mécanisme, qui se joue à chaque averse.
export function analyseSols(t) {
  const j = t?.projections_climatiques?.jours_sols_secs;
  if (j?.actuel == null || j?.['2050'] == null) return null;

  const d = j['2050'] - j.actuel;
  const asseche = d >= SEUIL_JOURS_SECS;
  const titre = asseche
    ? 'Des sols plus souvent secs'
    : d <= -SEUIL_JOURS_SECS
      ? 'Des sols moins souvent secs'
      : "Des sols aussi souvent secs qu'aujourd'hui";

  const chapeau = asseche
    ? 'Le changement de régime des précipitations favorise les longues périodes sans pluie, notamment en été, ce qui assèche les sols.'
    : d <= -SEUIL_JOURS_SECS
      ? "D'ici 2050, les sols du bassin seraient un peu moins souvent secs qu'aujourd'hui."
      : "D'ici 2050, les sols du bassin resteraient secs à peu près aussi souvent qu'aujourd'hui.";

  const messageCle = asseche
    ? { fort: 'Un sol sec infiltre moins bien la pluie', suite: " : elle ruisselle davantage, ce qui favorise les inondations, au lieu de s'infiltrer et de recharger les nappes." }
    : { fort: 'Un sol sec infiltre mal la pluie', suite: " : même si les sols ne s'assèchent pas davantage ici, elle ruisselle alors, favorise les inondations et recharge moins les nappes." };

  return { titre, chapeau, messageCle, jours: j, delta: d, alerte: asseche };
}

// ─── Offre 3 : débits des cours d'eau ───────────────────────────────────────

// Débits naturels simulés (sans barrages, soutien d'étiage ni prélèvements).
// Un point d'entrée qui porte le nom de l'exutoire est le même cours d'eau,
// avec des chiffres quasi identiques : il n'est pas repris.
const TYPES_POINT = { exutoire: 'Sortie du bassin', entree: "Entrée dans le bassin", affluent: 'Affluent' };
const SEUIL_DEBIT = 5;          // en % d'évolution du QMNA

// Série de 12 mois aux horizons actuel, 2030 et 2050 (sinon null)
function serieMensuelle(m) {
  if (m?.actuel?.length !== 12 || m?.['2050']?.length !== 12) return null;
  return { actuel: m.actuel, v2030: m['2030']?.length === 12 ? m['2030'] : null, futur: m['2050'] };
}

export function analyseDebits(t) {
  const tous = t?.cours_eau ?? [];
  const nomExutoire = tous.find((c) => c.type === 'exutoire')?.nom;
  const points = tous
    .filter((c) => !(c.type === 'entree' && c.nom === nomExutoire))
    .map((c, i) => {
      const qmna = c.qmna_m3s?.actuel ?? null;
      const moyen = c.debit_moyen_m3s?.actuel ?? null;
      const m = c.debit_mensuel_m3s;
      return {
        id: `${c.type}-${i}`,
        numero: i + 1,
        nom: c.nom,
        type: c.type,
        typeLabel: TYPES_POINT[c.type] ?? c.type,
        lat: c.lat,
        lon: c.lon,
        qmna,
        qmnaHorizons: c.qmna_m3s ?? null,
        debitMoyen: moyen,
        // Part du débit moyen qui reste au mois le plus sec
        partEte: qmna != null && moyen ? qmna / moyen : null,
        evolution: c.evolution_qmna_pct?.['2050'] ?? null,
        evolution2030: c.evolution_qmna_pct?.['2030'] ?? null,
        fourchette: c.evolution_qmna_pct_fourchette?.['2050'] ?? null,
        fourchette2030: c.evolution_qmna_pct_fourchette?.['2030'] ?? null,
        joursEtiage: c.jours_etiage_severe ?? null,
        influence: !!c.debit_influence,
        presume: c.confiance === 'présumé',
        partEtranger: c.part_apport_etranger ?? 0,
        // Débit moyen de chaque mois (la fiche porte aussi une année sèche,
        // `debit_mensuel_annee_seche_m3s`, non affichée)
        mensuel: serieMensuelle(m),
        // PLACEHOLDER : seuil des jours d'étiage sévère (quantile 20 % du VCN10
        // annuel 1995-2024, `seuil_alerte_m3s` du modèle hydro), à exporter
        // dans les fiches sous `seuil_etiage_severe_m3s`
        seuilSevere: c.seuil_etiage_severe_m3s ?? null,
      };
    });

  // Évolution retenue : l'exutoire, sinon l'évolution locale du bassin
  const exutoire = points.find((p) => p.type === 'exutoire');
  const evolution = exutoire?.evolution ?? t?.projections_climatiques?.debit_etiage_pct?.['2050'] ?? null;
  if (evolution == null && !points.length) return null;

  const baisse = evolution != null && evolution <= -SEUIL_DEBIT;
  const titre = baisse
    ? "Des cours d'eau plus bas en été"
    : evolution != null && evolution >= SEUIL_DEBIT
      ? "Des débits d'été un peu plus soutenus"
      : "Des débits d'été qui évoluent peu";

  const ou = exutoire ? `à la sortie du bassin (${exutoire.nom})` : 'sur le bassin';
  const chapeau = evolution == null
    ? "Le débit d'été des rivières dépend de la pluie et de l'eau que les sols ont laissée s'infiltrer vers les nappes."
    : `Le débit d'été des rivières dépend de la pluie et de l'eau que les sols ont laissée s'infiltrer vers les nappes. D'ici 2050, le débit d'étiage (le plus bas de l'année) ${evolution < 0 ? `baisserait de ${Math.abs(evolution)}\u00a0%` : `évoluerait de ${fmtSigne(evolution)}`} ${ou}.`;

  const messageCle = baisse
    ? { fort: 'Des étiages plus bas et plus longs', suite: " : c'est en été, au moment où les besoins sont les plus forts, que les rivières ont le moins d'eau à partager." }
    : { fort: "Un débit d'étiage qui se maintient", suite: ", mais les besoins d'été augmentent avec la chaleur : la marge de la ressource se réduit quand même." };

  return { titre, chapeau, messageCle, points, evolution, alerte: baisse };
}

// ─── Offre 4 : nappes ────────────────────────────────────────────────────────

const MILIEUX = {
  poreux: 'poreux (sables, graviers, craie)',
  fissuré: 'fissuré (roches dures fracturées)',
  karstique: 'karstique (calcaires creusés de conduits)',
};
const SEUIL_RECHARGE = 3;       // en % d'évolution entre 2025 et 2050

export function analyseNappes(t) {
  const n = t?.nappes;
  const r = n?.recharge_mm;
  if (r?.actuel == null || r?.['2050'] == null) return null;

  const delta = pct(r['2050'], r.actuel);
  const baisse = delta <= -SEUIL_RECHARGE;
  const titre = baisse
    ? 'Des nappes moins rechargées'
    : delta >= SEUIL_RECHARGE
      ? 'Des nappes un peu mieux rechargées'
      : 'Une recharge des nappes stable';

  const partEte = n.part_debit_nappes_ete?.actuel;
  const milieu = MILIEUX[n.milieu_dominant] ?? null;
  const phrases = [];
  if (milieu) phrases.push(`Les nappes du bassin sont surtout en milieu ${milieu}.`);
  if (partEte != null) {
    phrases.push(`En été, ${fmtPart(partEte)} du débit des rivières à la sortie du bassin vient des nappes.`);
  }
  phrases.push(baisse
    ? `D'ici 2050, la pluie qui s'infiltre jusqu'aux nappes baisserait de ${Math.abs(delta)}\u00a0%.`
    : delta >= SEUIL_RECHARGE
      ? `D'ici 2050, la pluie qui s'infiltre jusqu'aux nappes augmenterait légèrement (${fmtSigne(delta)}), surtout en hiver.`
      : `D'ici 2050, la pluie qui s'infiltre jusqu'aux nappes évoluerait peu (${fmtSigne(delta)}).`);

  // Pression actuelle sur les nappes : prélèvements souterrains / recharge
  const pression = t?.stress_hydrique?.pression_nappes?.actuel ?? null;

  // PLACEHOLDER : message clé à valider. La recharge annuelle stable masque
  // souvent une recharge d'hiver plus concentrée et des étés plus longs.
  const messageCle = baisse
    ? { fort: 'Des réserves moins bien remplies', suite: " : les nappes soutiennent moins les rivières en été et se reconstituent plus lentement après une sécheresse." }
    : { fort: "Les nappes restent la réserve d'été du bassin", suite: " : ce qui y est prélevé ne soutient plus les rivières au moment où elles en ont le plus besoin." };

  return {
    titre,
    texte: phrases.join(' '),
    messageCle,
    aquifere: n.aquifere_principal ?? null,
    recharge: r,
    rechargeHiver: n.recharge_hiver_mm ?? null,
    pression,
    alerte: baisse || (pression != null && pression >= (t.stress_hydrique?.seuils?.tres_fort ?? 0.15)),
  };
}

// ─── Offre 5 : neige et glaciers (bassins concernés seulement) ──────────────

// `concerne` part de 5 mm de neige moyenne : trop peu pour peser sur les
// débits. PLACEHOLDER : seuil d'affichage à valider (20 mm ou glaciers).
const SEUIL_NEIGE_MM = 20;

export function analyseNeige(t) {
  const g = t?.neige_glaciers;
  const stock = g?.neige_moyenne_mm;
  if (!g?.concerne || stock?.actuel == null || stock?.['2050'] == null) return null;
  if (stock.actuel < SEUIL_NEIGE_MM && !(g.glaciers_km2 > 0)) return null;
  const m = g.neige_mensuelle_mm;
  const delta = pct(stock['2050'], stock.actuel);
  const phrases = [
    delta < 0
      ? `D'ici 2050, le stock moyen de neige du bassin baisserait de ${Math.abs(delta)} %. La fonte arrive plus tôt au printemps et soutient moins les débits en été.`
      : `D'ici 2050, le stock moyen de neige du bassin évoluerait peu (${fmtSigne(delta)}).`,
  ];
  if (g.glaciers_km2 > 0) {
    phrases.push(`Le bassin compte ${g.n_glaciers} glacier${g.n_glaciers > 1 ? 's' : ''} (${fmtNombre(g.glaciers_km2, 1)} km² vers 2003), dont la fonte soutient aujourd'hui les rivières en fin d'été.`);
  }
  return {
    titre: delta < 0 ? 'Moins de neige pour soutenir les rivières' : 'Un manteau neigeux qui se maintient',
    texte: phrases.join(' '),
    // PLACEHOLDER : message clé à valider, en particulier pour les bassins à glaciers
    messageCle: { fort: "Un réservoir d'eau qui fond", suite: " : la neige et les glaciers stockent l'eau de l'hiver et la rendent en été. Ce soutien diminue." },
    mensuel: m?.actuel?.length === 12 && m?.['2050']?.length === 12 ? { actuel: m.actuel, futur: m['2050'] } : null,
    delta,
    alerte: delta < 0,
  };
}

// ─── Stress hydrique : rivières et nappes ────────────────────────────────────

// `classe` du bassin = la plus sévère entre le stress des rivières en août
// (`ratio_stress`) et la pression sur les nappes (`pression_nappes`).
// Échelle par défaut, la même que celle des fiches (`libelles`, `niveau` 1 à 5)
export const CLASSES_STRESS = ['faible', 'moyen', 'fort', 'tres_fort', 'critique'];
export const LIBELLES_CLASSE = {
  faible: 'Faible', moyen: 'Moyen', fort: 'Fort', tres_fort: 'Très fort', critique: 'Critique',
};
// Classes comptées comme « forte tension » (synthèses, vision territoriale)
export const STRESS_FORT = ['tres_fort', 'critique'];

// Barème du bassin, du niveau le plus bas au plus haut : libellés et seuils de
// la fiche, CLASSES_STRESS si elle n'en porte pas.
export function baremeStress(sh) {
  const seuils = sh?.seuils ?? {};
  if (!sh?.libelles) return { classes: CLASSES_STRESS, libelles: LIBELLES_CLASSE, seuils };
  const paliers = Object.keys(seuils).sort((a, b) => seuils[a] - seuils[b]);
  const base = Object.keys(sh.libelles).filter((c) => !paliers.includes(c));
  return { classes: [...base, ...paliers], libelles: sh.libelles, seuils };
}

// Classe d'une mesure : le plus haut seuil atteint, sinon le niveau de base
function classeDe(valeur, { classes, seuils }) {
  if (valeur == null || !Object.keys(seuils).length) return null;
  let classe = classes[0];
  for (const c of classes) if (seuils[c] != null && valeur >= seuils[c]) classe = c;
  return classe;
}

export function analyseStress(t) {
  const sh = t?.stress_hydrique;
  if (!sh?.classe) return null;
  const bareme = baremeStress(sh);

  const horizons = HORIZONS.map((h) => {
    const rivieres = sh.ratio_stress?.[h] ?? null;
    const nappes = sh.pression_nappes?.[h] ?? null;
    const classe = sh.classe[h] ?? null;
    // Ce qui fixe la classe : les rivières en priorité si les deux l'atteignent
    const source = classe == null ? null
      : classeDe(rivieres, bareme) === classe ? 'rivieres'
        : classeDe(nappes, bareme) === classe ? 'nappes' : null;
    return {
      h, classe, rivieres, nappes, source,
      rang: bareme.classes.indexOf(classe),
      libelle: bareme.libelles[classe] ?? null,
    };
  });

  return { horizons, nbClasses: bareme.classes.length };
}

// ─── Demande ──────────────────────────────────────────────────────────────────

export const USAGES = [
  { cle: 'agriculture', label: 'Agriculture', couleur: '#16a34a',
    role: "L'irrigation des cultures représente l'essentiel des volumes (environ 90 %). Le reste sert à l'abreuvement du bétail et à d'autres usages : lavage, refroidissement…",
    aide: "Des étés plus chauds et plus secs augmentent les besoins d'irrigation des cultures, concentrés sur la période où la ressource est la plus basse." },
  { cle: 'industrie', label: 'Industrie', couleur: '#7c3aed',
    role: "Refroidissement, nettoyage (notamment dans l'agroalimentaire), eau de process (cuisson, eau incorporée au produit…) et fluide de transfert pour la chaleur, la vapeur ou les réseaux de froid.",
    aide: "L'activité industrielle du territoire et les gains d'efficacité des procédés (recyclage de l'eau, refroidissement en circuit fermé)." },
  { cle: 'aep', label: 'Eau potable', couleur: '#0097d6',
    role: "Alimentation des foyers et des collectivités. La plupart des entreprises sont aussi raccordées au réseau d'eau potable : leur consommation est comptée ici.",
    aide: "La population desservie, les consommations par habitant (plus fortes lors des épisodes de chaleur) et l'état des réseaux de distribution." },
];

export function analyseDemande(t) {
  const p = t?.prelevements;
  if (!p?.actuel) return null;

  const total = (h) => p[h]?.total_mm3 ?? somme(USAGES.map((u) => p[h]?.[u.cle]));
  const totActuel = total('actuel');
  // Bassin sans prélèvement notable (bande côtière, petit bassin sans habitant)
  if (!totActuel || totActuel < SEUIL_PRELEVEMENTS_MM3) return null;
  const tot2050 = total('2050');
  const dTot = pct(tot2050, totActuel);

  // Évolution passée (BNPE, moyennes 2012-2014 puis 2021-2023). Pas pour
  // l'agriculture : l'irrigation varie trop d'une année à l'autre avec la météo.
  const passe = t?.historique_prelevements?.evolution ?? {};

  const usages = USAGES.map((u) => {
    const actuel = p.actuel[u.cle] ?? 0;
    const h = u.cle !== 'agriculture' ? passe[u.cle] : null;
    return {
      historique: h?.evolution_pct != null ? h : null,
      ...u,
      actuel,
      v2030: p['2030']?.[u.cle] ?? null,
      v2050: p['2050']?.[u.cle] ?? null,
      part: totActuel ? Math.round((actuel / totActuel) * 100) : null,
      d2030: pct(p['2030']?.[u.cle], actuel),
      d2050: pct(p['2050']?.[u.cle], actuel),
    };
  });

  const titre = dTot >= SEUIL_DEMANDE
    ? 'Une demande en eau qui augmente'
    : dTot <= -SEUIL_DEMANDE
      ? 'Une demande en eau qui recule'
      : 'Une demande en eau stable';
  // Même titre découpé pour le surlignage : `cle` est la partie mise en avant
  const titreCle = {
    debut: 'Une demande en eau',
    cle: dTot >= SEUIL_DEMANDE ? 'qui augmente' : dTot <= -SEUIL_DEMANDE ? 'qui recule' : 'stable',
    ton: dTot >= SEUIL_DEMANDE ? 'alerte' : 'eau',
  };

  const principal = [...usages].sort((a, b) => b.actuel - a.actuel)[0];
  const phrases = [
    `Aujourd'hui, ${fmtNombre(totActuel, 1)} ${millions(totActuel)} de m³ sont prélevés chaque année dans le bassin, dont ${principal.part} % pour ${principal.cle === 'aep' ? "l'eau potable" : principal.cle === 'agriculture' ? "l'agriculture" : "l'industrie"}.`,
  ];

  if (tot2050 != null) {
    // Usage qui pèse le plus dans l'évolution, dans le sens de l'évolution
    const moteur = [...usages]
      .filter((u) => u.v2050 != null)
      .sort((a, b) => Math.abs(b.v2050 - b.actuel) - Math.abs(a.v2050 - a.actuel))[0];
    const portePar = moteur && Math.sign(moteur.v2050 - moteur.actuel) === Math.sign(tot2050 - totActuel)
      ? `, sous l'effet de ${moteur.cle === 'aep' ? "l'eau potable" : moteur.cle === 'agriculture' ? "l'agriculture" : "l'industrie"}`
      : '';
    phrases.push(Math.abs(dTot) < SEUIL_DEMANDE
      ? `En 2050, les prélèvements resteraient proches de ce niveau (${fmtSigne(dTot)}).`
      : `En 2050, ils atteindraient ${fmtNombre(tot2050, 1)} ${millions(tot2050)} de m³ (${fmtSigne(dTot)})${portePar}.`);
  }

  return { titre, titreCle, texte: phrases.join(' '), usages, totActuel, tot2050, dTot, alerte: dTot >= SEUIL_DEMANDE };
}

// ─── Demande : mécanismes de l'évolution par usage ──────────────────────────

// Contenu des panneaux « Comprendre cette évolution ». Chaque facteur porte
// son sens ('hausse', 'baisse' ou 'evolution' quand il dépend du territoire)
// et, le cas échéant, une donnée. La synthèse est découpée pour le surlignage :
// `cle` est mis en avant avec le ton `ton`. Les données `fictif` sont des valeurs
// d'exemple, en attendant le branchement des vraies sources (projections de
// population).
export function mecanismesDemande(t, demande) {
  if (!demande) return {};
  const sens = (u) => {
    const d = demande.usages.find((x) => x.cle === u)?.d2050;
    return d == null ? null : d >= SEUIL_DEMANDE ? 'hausse' : d <= -SEUIL_DEMANDE ? 'baisse' : 'stable';
  };

  const pluie = analysePluie(t);
  const ete = pluie?.periodes.find((p) => p.cle === 'ete');
  const temperature = analyseTemperature(t);
  const besoin = t?.projections_climatiques?.besoin_irrigation_mm;
  const dBesoin = pct(besoin?.['2050'], besoin?.actuel);
  const valeursBassin = [
    ete && { label: "Pluies d'été", valeur: fmtSigne(ete.delta) },
    temperature?.ecarts['2050'] != null && { label: 'Température', valeur: fmtSigne(temperature.ecarts['2050'], '°C', 1) },
    dBesoin != null && { label: "Besoin d'irrigation des cultures", valeur: fmtSigne(dBesoin) },
  ].filter(Boolean);
  const eteBaisse = ete && ete.delta <= -SEUIL_PLUIE_ETE;

  // Surface irriguée du département majoritaire, recensements 2010 et 2020
  const sau = t?.sau_irriguee?.departement;
  const sauHausse = sau?.evolution_pct != null && sau.evolution_pct > 0;
  const donneeSau = sau?.irriguee_2010_ha != null && sau?.irriguee_2020_ha != null ? {
    label: `Surface agricole irriguée${sau.nom ? ` (${sau.nom})` : ' du département'}, 2010 → 2020`,
    valeurs: [{
      valeur: fmtSigne(sau.evolution_pct, '%', Math.abs(sau.evolution_pct) < 10 ? 1 : 0),
      detail: `${fmtNombre(sau.irriguee_2010_ha)} → ${fmtNombre(sau.irriguee_2020_ha)} ha`,
    }],
  } : null;

  const agri = sens('agriculture');
  const indus = sens('industrie');

  return {
    agriculture: {
      synthese: sau && !sauHausse
        ? (agri === 'hausse'
          ? { debut: 'Des effets contraires, et au final', cle: 'une demande qui augmente', ton: 'alerte' }
          : { debut: 'Des effets contraires, et une demande', cle: agri === 'baisse' ? 'en recul ici' : 'à peu près stable ici', ton: 'eau' })
        : agri === 'hausse'
          ? { debut: 'Deux effets qui se combinent et', cle: 'poussent la demande à la hausse', ton: 'alerte' }
          : { debut: 'Deux effets qui poussent à la hausse, mais une demande', cle: agri === 'baisse' ? 'en recul ici' : 'à peu près stable ici', ton: 'eau' },
      facteurs: [
        {
          sens: sau && !sauHausse ? 'baisse' : 'hausse',
          titre: sau && !sauHausse ? 'Des surfaces irriguées en recul ici' : 'Des surfaces irriguées en hausse',
          texte: sau && !sauHausse
            ? "En France, de plus en plus de surfaces agricoles sont irriguées pour sécuriser les rendements, mais elles ont reculé dans votre département entre 2010 et 2020."
            : "De plus en plus de surfaces agricoles sont irriguées, notamment pour sécuriser les rendements face aux sécheresses.",
          donnee: donneeSau,
        },
        {
          sens: 'hausse',
          titre: "Un besoin d'irrigation qui augmente",
          texte: eteBaisse
            ? "Il pleut moins en été, et les plantes ont besoin de plus d'eau : avec la chaleur, l'évapotranspiration augmente."
            : "Les pluies d'été évoluent peu, mais les plantes ont besoin de plus d'eau : avec la chaleur, l'évapotranspiration augmente.",
          donnee: valeursBassin.length ? { label: "Sur votre bassin d'ici 2050", valeurs: valeursBassin } : null,
        },
      ],
    },
    industrie: {
      synthese: indus === 'baisse'
        ? { debut: 'Une tendance', cle: 'plutôt à la baisse', ton: 'eau' }
        : indus === 'hausse'
          ? { debut: 'Une tendance générale à la baisse, mais', cle: 'une hausse sur ce bassin', ton: 'alerte' }
          : { debut: 'Une tendance générale à la baisse,', cle: 'ici plutôt stable', ton: 'eau' },
      facteurs: [
        {
          sens: 'baisse',
          titre: "Moins d'activité industrielle",
          texte: "Le recul de certaines activités industrielles réduit les volumes prélevés.",
        },
        {
          sens: 'baisse',
          titre: 'Des actions de sobriété',
          texte: "Les industriels réduisent leurs consommations : recyclage de l'eau, circuits fermés, chasse aux fuites. Les premières actions sont les plus efficaces. Les gains suivants sont plus difficiles à obtenir, et la baisse tend à ralentir.",
        },
      ],
    },
    aep: {
      synthese: { debut: 'Plusieurs effets qui jouent', cle: 'dans des sens différents', ton: 'eau' },
      facteurs: [
        {
          sens: 'evolution',
          titre: "L'évolution de la population",
          texte: "Le nombre d'habitants à desservir évolue avec la démographie du territoire.",
          donnee: {
            label: "Population du territoire d'ici 2050",
            valeurs: [{ valeur: '+6 %' }],
            fictif: true,
          },
        },
        {
          sens: 'baisse',
          titre: 'Le renouvellement des canalisations',
          texte: "Remplacer les réseaux anciens et lutter contre les fuites réduit les volumes prélevés pour une même consommation.",
        },
        {
          sens: 'baisse',
          titre: 'Les actions des acteurs publics et des entreprises',
          texte: "Sensibilisation, équipements économes, tarification : les collectivités et les entreprises raccordées agissent aussi sur la demande.",
        },
      ],
    },
  };
}

// ─── Économie : coût caché de l'eau ─────────────────────────────────────────

// Ce que la facture ne montre pas. Texte pédagogique, sans chiffre : le poids
// de chaque poste dépend trop de l'activité pour donner un multiplicateur.
export const COUT_CACHE = [
  { cle: 'energie', titre: 'Énergie', texte: "Pomper, chauffer, refroidir ou mettre sous pression l'eau consomme de l'électricité ou du gaz." },
  { cle: 'traitement', titre: 'Traitement avant usage', texte: "Adoucissement, filtration, désinfection : l'eau doit souvent être préparée avant d'entrer dans le procédé." },
  { cle: 'rejets', titre: 'Rejets', texte: "Les eaux usées sont traitées sur place ou facturées par le service d'assainissement, avec des redevances de pollution." },
  { cle: 'pertes', titre: 'Pertes', texte: "Fuites, rinçages trop longs, eau non récupérée : chaque mètre cube perdu a été payé, pompé et souvent traité." },
];

// ─── Économie : impacts du manque d'eau ─────────────────────────────────────

// Impacts par grande famille de secteur, choisie d'après le code NAF de
// l'établissement. Contenu rédigé à partir des usages types de chaque
// famille, à relire et à sourcer. `IMPACTS_GENERIQUES` sert de repli quand le
// code NAF est absent.
export const IMPACTS_GENERIQUES = [
  { titre: 'Une activité ralentie', texte: "Les arrêtés sécheresse peuvent limiter vos usages de l'eau, jusqu'à réduire ou décaler la production." },
  { titre: 'Des coûts supplémentaires', texte: "Eau à acheter ou à transporter, matières premières plus chères, solutions de secours : le manque d'eau se paie." },
  { titre: 'Des partenaires touchés', texte: "Fournisseurs, clients, territoire : même si votre site n'est pas restreint, votre activité dépend d'acteurs qui peuvent manquer d'eau." },
];

const FAMILLES = {
  cultures: {
    label: 'les cultures',
    impacts: [
      { titre: 'Des rendements en baisse', texte: "Une sécheresse au moment de la floraison ou du remplissage des grains réduit directement la récolte." },
      { titre: 'Une irrigation limitée aux pires moments', texte: "Les arrêtés sécheresse restreignent l'irrigation en plein été, justement quand les cultures en ont le plus besoin." },
      { titre: 'Une qualité dégradée', texte: "Calibre, teneur en protéines ou en sucre : le manque d'eau peut déclasser une récolte et baisser son prix de vente." },
    ],
  },
  elevage: {
    label: "l'élevage",
    impacts: [
      { titre: 'Des fourrages à acheter', texte: "Moins d'herbe et de maïs fourrager, c'est du fourrage à acheter, souvent au prix fort les années sèches." },
      { titre: "L'abreuvement à sécuriser", texte: "Quand les points d'eau s'assèchent, il faut transporter l'eau jusqu'aux animaux." },
      { titre: 'Des animaux moins productifs', texte: "Avec la chaleur et le manque d'eau, la production de lait et la croissance des animaux ralentissent." },
    ],
  },
  agroalimentaire: {
    label: "l'agroalimentaire",
    impacts: [
      { titre: 'Une production ralentie', texte: "En alerte renforcée ou en crise, les prélèvements peuvent être réduits, ce qui oblige à décaler ou réduire la production." },
      { titre: 'Des matières premières plus rares', texte: "Les récoltes touchées par la sécheresse se traduisent par des volumes plus faibles et des prix plus élevés." },
      { titre: 'Des rejets plus contraints', texte: "Quand la rivière est basse, elle dilue moins les rejets : les exigences sur les effluents peuvent se durcir." },
    ],
  },
  industrie: {
    label: "l'industrie",
    impacts: [
      { titre: 'Des prélèvements à réduire', texte: "Les arrêtés sécheresse peuvent imposer aux sites industriels de réduire leurs prélèvements, jusqu'à ralentir la production." },
      { titre: 'Un refroidissement moins efficace', texte: "Une eau plus chaude refroidit moins bien : il faut plus d'eau ou plus d'énergie pour le même résultat." },
      { titre: 'Des fournisseurs touchés', texte: "Un fournisseur à l'arrêt ou une matière première plus chère peut peser sur votre activité, même si votre site n'est pas restreint." },
    ],
  },
  tourisme: {
    label: "le tourisme et l'hébergement",
    impacts: [
      { titre: 'Des usages restreints', texte: "Arrosage, remplissage des piscines, lavage : les arrêtés visent d'abord ces usages, en pleine saison touristique." },
      { titre: 'Une fréquentation fragilisée', texte: "Rivières à sec, plans d'eau fermés, canicule : l'attractivité du territoire peut en souffrir." },
      { titre: 'Une eau potable sous tension', texte: "En été, la population augmente au moment où la ressource est au plus bas, ce qui expose davantage aux restrictions." },
    ],
  },
  construction: {
    label: 'la construction',
    impacts: [
      { titre: 'Des chantiers contraints', texte: "Lavage du matériel, arrosage contre la poussière, fabrication du béton : ces usages peuvent être limités par arrêté." },
      { titre: 'Des sols qui bougent', texte: "Les sécheresses répétées font travailler les sols argileux, avec des fissures et des sinistres sur les bâtiments." },
      { titre: 'Des délais allongés', texte: "Un chantier qui attend une autorisation ou de l'eau, c'est un planning qui glisse et des coûts qui augmentent." },
    ],
  },
  services: {
    label: 'les commerces et services',
    impacts: [
      { titre: 'Des usages du quotidien restreints', texte: "Lavage des véhicules, arrosage des espaces verts, nettoyage extérieur : ces usages sont les premiers limités." },
      { titre: 'Le confort en été', texte: "Les systèmes de rafraîchissement qui utilisent de l'eau peuvent être concernés, alors que les canicules se multiplient." },
      { titre: 'Des clients et fournisseurs touchés', texte: "Même peu consommatrice, une entreprise dépend d'un territoire et de partenaires qui peuvent manquer d'eau." },
    ],
  },
};

// Famille d'après le code NAF (ex. « 01.11Z ») : division sur deux chiffres,
// puis groupe pour distinguer cultures et élevage. Sans code NAF : null.
export function familleSecteur(naf) {
  const code = (naf ?? '').replace(/[^0-9.]/g, '');
  if (!code) return null;
  const division = parseInt(code.slice(0, 2), 10);
  const groupe = code.slice(0, 4);
  let cle = 'services';
  if (division === 1) cle = ['01.4', '01.5'].includes(groupe) ? 'elevage' : 'cultures';
  else if (division === 10 || division === 11) cle = 'agroalimentaire';
  else if (division >= 5 && division <= 35) cle = 'industrie';
  else if (division >= 41 && division <= 43) cle = 'construction';
  else if (division === 55 || division === 56 || division === 93) cle = 'tourisme';
  return { cle, ...FAMILLES[cle] };
}

// ─── Activité : dépendance à l'eau et exposition ─────────────────────────────

// Niveaux de dépendance des fiches secteur (final_score 0 à 3, impact_level
// low à very_high), au féminin : « une dépendance élevée ».
export const NIVEAUX_DEPENDANCE = ['faible', 'modere', 'eleve', 'critique'];
export const LIBELLES_DEPENDANCE = { faible: 'Faible', modere: 'Modérée', eleve: 'Élevée', critique: 'Critique' };
const IMPACT_NIVEAU = { low: 'faible', medium: 'modere', high: 'eleve', very_high: 'critique' };

function dimension(d) {
  return {
    niveau: NIVEAUX_DEPENDANCE[Math.min(Math.max(d?.final_score ?? 0, 0), 3)],
    description: d?.description ?? '',
    items: (d?.items ?? []).map((it) => ({
      titre: it.title,
      niveau: IMPACT_NIVEAU[it.impact_level] ?? 'faible',
      note: it.note ?? null,
    })),
  };
}

export function analyseActivite(secteur, t) {
  if (!secteur) return null;

  const maillons = [
    { cle: 'amont', label: 'Vos fournisseurs', aide: "Les enjeux liés à l'eau pour vos fournisseurs", source: secteur.upstream },
    { cle: 'activite', label: 'Votre activité', aide: "Les enjeux liés à l'eau pour votre activité directe", source: secteur.operations },
    { cle: 'aval', label: 'Vos débouchés', aide: "Les enjeux liés à l'eau en aval de votre chaîne de valeur", source: secteur.downstream },
  ].map(({ source, ...m }) => ({
    ...m,
    phrase: source?.sentence ?? '',
    quantite: dimension(source?.quantity),
    qualite: dimension(source?.quality),
  }));

  // Usages : liste séparée par des virgules, une étiquette par usage
  const usages = (secteur.insights?.usage_sentence ?? '')
    .split(',')
    .map((u) => u.trim())
    .filter(Boolean)
    .map((u) => u.charAt(0).toUpperCase() + u.slice(1));

  // Exposition : dépendance de l'activité directe (quantité) × tension du bassin
  // Tension du bassin : la `classe` de stress hydrique actuelle (rivières en
  // août et nappes), sur le barème de la fiche
  const dependance = maillons[1].quantite.niveau;
  const tension = t?.stress_hydrique?.classe?.actuel ?? null;
  const bareme = baremeStress(t?.stress_hydrique);
  const forte = dependance === 'eleve' || dependance === 'critique';
  const tendu = STRESS_FORT.includes(tension);
  const sousTension = tension === 'fort';

  let synthese = null;
  if (tension) {
    const debut = forte ? "Une activité très dépendante de l'eau, sur un bassin" : "Une activité peu dépendante de l'eau, sur un bassin";
    synthese = tendu
      ? { debut, cle: 'sous forte tension', ton: 'alerte' }
      : sousTension
        ? { debut, cle: 'déjà sous tension', ton: forte ? 'alerte' : 'eau' }
        : { debut, cle: "peu tendu aujourd'hui", ton: 'eau' };
  }

  return {
    maillons, usages, dependance, tension, synthese,
    echelleTension: bareme.classes,
    libelleTension: bareme.libelles[tension] ?? null,
    alerte: forte && (tendu || sousTension),
  };
}

// ─── Stress hydrique mois par mois ───────────────────────────────────────────

// `stress_hydrique.mensuel` : le calcul d'août étendu aux 12 mois, même
// méthode (consommation du bassin et de l'amont / débit naturel à l'exutoire
// moins le débit réservé). Août retombe donc sur `ratio_stress`. Un ratio
// null signale un mois où le débit ne dépasse pas le débit réservé.
export function analyseMensuelle(t) {
  const m = t?.stress_hydrique?.mensuel;
  const r = m?.ratio_stress;
  if (r?.actuel?.length !== 12 || r?.['2050']?.length !== 12) return null;

  const disponible = (h, i) => {
    const d = m.debit_naturel_exutoire?.[h]?.[i];
    const res = m.debit_reserve?.[h]?.[i];
    return d != null && res != null ? d - res : null;
  };
  const serie = MOIS_COURTS.map((mois, i) => ({
    i,
    mois,
    actuel: r.actuel[i],
    futur: r['2050'][i],
    consoActuel: m.consommation_amont_comprise?.actuel?.[i] ?? null,
    consoFutur: m.consommation_amont_comprise?.['2050']?.[i] ?? null,
    dispoActuel: disponible('actuel', i),
    dispoFutur: disponible('2050', i),
  }));

  const pic = (cle) => serie.reduce((max, s) => ((s[cle] ?? -1) > (max[cle] ?? -1) ? s : max), serie[0]);
  const picActuel = pic('actuel');
  const pic2050 = pic('futur');

  // Titre : le mois où l'on consomme le plus et celui où il y a le moins d'eau
  const picConso = pic('consoActuel');
  const creux = serie.reduce((min, s) => ((s.dispoActuel ?? Infinity) < (min.dispoActuel ?? Infinity) ? s : min), serie[0]);
  const titre = picConso.i === creux.i
    ? `Une question de temporalité : en ${MOIS_LONGS[picConso.i]}, pic de consommation et creux de disponibilité`
    : `Une question de temporalité : pic de consommation en ${MOIS_LONGS[picConso.i]}, creux de disponibilité en ${MOIS_LONGS[creux.i]}`;

  // Sous-titre : ce que 2050 change à l'été (juin à septembre)
  const ETE = [5, 6, 7, 8];
  const total = (cle) => somme(ETE.map((i) => serie[i][cle] ?? 0));
  const plusConso = total('consoFutur') > total('consoActuel');
  const moinsDispo = total('dispoFutur') < total('dispoActuel');
  const effets = [plusConso && 'plus de prélèvements en été', moinsDispo && (plusConso ? "moins d'eau disponible" : "moins d'eau disponible en été")].filter(Boolean);
  const sousTitre = effets.length
    ? `Avec les effets du changement climatique, ce déséquilibre estival va s'accroître : ${effets.join(' et ')}.`
    : "D'ici 2050, ce déséquilibre estival évoluerait peu sur ce bassin.";

  // Une phrase : la part consommée au mois le plus tendu, aujourd'hui et en 2050
  const quand = ETE.includes(picActuel.i) ? "Au plus fort de l'été" : 'Au mois le plus tendu';
  const a = picActuel.actuel;
  const f = pic2050.futur;
  const texte = a > 1
    ? `${quand}, la consommation dépasse déjà l'eau disponible.`
    : f != null && f > 1
      ? `${quand}, ${fmtPart(a)} de l'eau disponible est consommée aujourd'hui. En 2050, la consommation la dépasserait.`
      : `${quand}, ${fmtPart(a)} de l'eau disponible est consommée aujourd'hui${f != null ? `, ${fmtPart(f)} en 2050` : ''}.`;

  return { serie, picActuel, pic2050, titre, sousTitre, texte };
}

// ─── Arrêtés sécheresse : projection ────────────────────────────────────────

// La moyenne communale (tous niveaux, depuis 2016, ressource la plus touchée)
// et la projection du bassin (alerte ou plus, eaux superficielles, 2012-2025)
// ne se comparent pas directement : on applique à la commune l'écart projeté
// sur le bassin entre aujourd'hui et l'horizon.
export function projectionRestrictions(t, moyenneCommune, horizon = '2050') {
  const p = t?.arretes_secheresse?.projection_eaux_superficielles;
  if (moyenneCommune == null || p?.actuel == null || p?.[horizon] == null) return null;
  const ecart = p[horizon] - p.actuel;
  const borne = (v) => Math.min(365, Math.max(0, Math.round(v)));
  const f = t.arretes_secheresse.fourchette_eaux_superficielles?.[horizon];
  return {
    jours: borne(moyenneCommune + ecart),
    ecart,
    fourchette: f ? f.map((v) => borne(moyenneCommune + v - p.actuel)) : null,
  };
}

// ─── Arrêtés sécheresse : synthèse de l'historique ───────────────────────────

// Retient la ressource la plus touchée (eaux superficielles ou souterraines).
export function syntheseRestrictions(historique) {
  if (!historique?.concerne || !historique.ressources?.length) return null;

  const ressource = [...historique.ressources]
    .sort((a, b) => somme(b.points.map((p) => p.total)) - somme(a.points.map((p) => p.total)))[0];
  const points = ressource.points;
  if (!points.length) return null;

  const touchees = points.filter((p) => p.total > 0);
  const pire = [...points].sort((a, b) => b.total - a.total)[0];
  const niveauMax = (p) => {
    for (const code of ['crise', 'alerte_renforcee', 'alerte', 'vigilance']) if (p[code] > 0) return code;
    return 'pas_restriction';
  };

  return {
    ressource,
    nbAnnees: points.length,
    nbTouchees: touchees.length,
    moyenneJours: Math.round(somme(points.map((p) => p.total)) / points.length),
    pire,
    anneesCrise: points.filter((p) => p.crise > 0).length,
    barres: points.map((p) => ({ annee: p.annee, total: p.total, niveau: niveauMax(p) })),
    debut: historique.annee_debut,
    fin: historique.annee_fin,
  };
}
