// Régions et départements de France métropolitaine (codes INSEE), pour le
// choix du territoire de la page Vision territoriale. Les bassins versants
// couvrent la métropole seulement.

export const DEPARTEMENTS = {
  '01': 'Ain', '02': 'Aisne', '03': 'Allier', '04': 'Alpes-de-Haute-Provence', '05': 'Hautes-Alpes',
  '06': 'Alpes-Maritimes', '07': 'Ardèche', '08': 'Ardennes', '09': 'Ariège', '10': 'Aube',
  '11': 'Aude', '12': 'Aveyron', '13': 'Bouches-du-Rhône', '14': 'Calvados', '15': 'Cantal',
  '16': 'Charente', '17': 'Charente-Maritime', '18': 'Cher', '19': 'Corrèze', '2A': 'Corse-du-Sud',
  '2B': 'Haute-Corse', '21': "Côte-d'Or", '22': "Côtes-d'Armor", '23': 'Creuse', '24': 'Dordogne',
  '25': 'Doubs', '26': 'Drôme', '27': 'Eure', '28': 'Eure-et-Loir', '29': 'Finistère',
  '30': 'Gard', '31': 'Haute-Garonne', '32': 'Gers', '33': 'Gironde', '34': 'Hérault',
  '35': 'Ille-et-Vilaine', '36': 'Indre', '37': 'Indre-et-Loire', '38': 'Isère', '39': 'Jura',
  '40': 'Landes', '41': 'Loir-et-Cher', '42': 'Loire', '43': 'Haute-Loire', '44': 'Loire-Atlantique',
  '45': 'Loiret', '46': 'Lot', '47': 'Lot-et-Garonne', '48': 'Lozère', '49': 'Maine-et-Loire',
  '50': 'Manche', '51': 'Marne', '52': 'Haute-Marne', '53': 'Mayenne', '54': 'Meurthe-et-Moselle',
  '55': 'Meuse', '56': 'Morbihan', '57': 'Moselle', '58': 'Nièvre', '59': 'Nord',
  '60': 'Oise', '61': 'Orne', '62': 'Pas-de-Calais', '63': 'Puy-de-Dôme', '64': 'Pyrénées-Atlantiques',
  '65': 'Hautes-Pyrénées', '66': 'Pyrénées-Orientales', '67': 'Bas-Rhin', '68': 'Haut-Rhin', '69': 'Rhône',
  '70': 'Haute-Saône', '71': 'Saône-et-Loire', '72': 'Sarthe', '73': 'Savoie', '74': 'Haute-Savoie',
  '75': 'Paris', '76': 'Seine-Maritime', '77': 'Seine-et-Marne', '78': 'Yvelines', '79': 'Deux-Sèvres',
  '80': 'Somme', '81': 'Tarn', '82': 'Tarn-et-Garonne', '83': 'Var', '84': 'Vaucluse',
  '85': 'Vendée', '86': 'Vienne', '87': 'Haute-Vienne', '88': 'Vosges', '89': 'Yonne',
  '90': 'Territoire de Belfort', '91': 'Essonne', '92': 'Hauts-de-Seine', '93': 'Seine-Saint-Denis',
  '94': 'Val-de-Marne', '95': "Val-d'Oise",
};

export const REGIONS = [
  { code: '84', nom: 'Auvergne-Rhône-Alpes', deps: ['01', '03', '07', '15', '26', '38', '42', '43', '63', '69', '73', '74'] },
  { code: '27', nom: 'Bourgogne-Franche-Comté', deps: ['21', '25', '39', '58', '70', '71', '89', '90'] },
  { code: '53', nom: 'Bretagne', deps: ['22', '29', '35', '56'] },
  { code: '24', nom: 'Centre-Val de Loire', deps: ['18', '28', '36', '37', '41', '45'] },
  { code: '94', nom: 'Corse', deps: ['2A', '2B'] },
  { code: '44', nom: 'Grand Est', deps: ['08', '10', '51', '52', '54', '55', '57', '67', '68', '88'] },
  { code: '32', nom: 'Hauts-de-France', deps: ['02', '59', '60', '62', '80'] },
  { code: '11', nom: 'Île-de-France', deps: ['75', '77', '78', '91', '92', '93', '94', '95'] },
  { code: '28', nom: 'Normandie', deps: ['14', '27', '50', '61', '76'] },
  { code: '75', nom: 'Nouvelle-Aquitaine', deps: ['16', '17', '19', '23', '24', '33', '40', '47', '64', '79', '86', '87'] },
  { code: '76', nom: 'Occitanie', deps: ['09', '11', '12', '30', '31', '32', '34', '46', '48', '65', '66', '81', '82'] },
  { code: '52', nom: 'Pays de la Loire', deps: ['44', '49', '53', '72', '85'] },
  { code: '93', nom: "Provence-Alpes-Côte d'Azur", deps: ['04', '05', '06', '13', '83', '84'] },
];

const REGIONS_PAR_CODE = Object.fromEntries(REGIONS.map((r) => [r.code, r]));

export const FRANCE = 'fr';

// Territoire décrit par une clé d'URL : 'fr', 'reg-84' ou 'dep-26'
export function territoireDe(cle) {
  const [type, code] = (cle ?? FRANCE).split('-');
  if (type === 'reg' && REGIONS_PAR_CODE[code]) {
    const r = REGIONS_PAR_CODE[code];
    return { cle, type: 'region', nom: r.nom, deps: r.deps };
  }
  if (type === 'dep' && DEPARTEMENTS[code]) {
    return { cle, type: 'departement', nom: `${DEPARTEMENTS[code]} (${code})`, deps: [code] };
  }
  return { cle: FRANCE, type: 'france', nom: 'France métropolitaine', deps: null };
}

// Un bassin appartient au territoire s'il en touche un département
export function dansTerritoire(territoire, bassin) {
  if (!territoire.deps) return true;
  return bassin.deps?.some((d) => territoire.deps.includes(d)) ?? false;
}

export function nomsDepartements(codes = []) {
  return codes.map((c) => DEPARTEMENTS[c] ?? c);
}
