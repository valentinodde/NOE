// ─── NAF sector metadata ──────────────────────────────────────────────────────

export const NAF_SECTORS = {
  A: { icon: '🌾', label: 'Agriculture, sylviculture et pêche' },
  B: { icon: '⛏️', label: 'Industries extractives' },
  C: { icon: '🏭', label: 'Industrie manufacturière' },
  D: { icon: '⚡', label: "Production et distribution d'énergie" },
  E: { icon: '💧', label: 'Eau, assainissement, déchets' },
  F: { icon: '🏗️', label: 'Construction' },
  G: { icon: '🛒', label: "Commerce, réparation d'automobiles" },
  H: { icon: '🚚', label: 'Transports et entreposage' },
  I: { icon: '🍽️', label: 'Hébergement et restauration' },
  J: { icon: '💻', label: 'Information et communication' },
  K: { icon: '💰', label: "Activités financières et d'assurance" },
  L: { icon: '🏘️', label: 'Activités immobilières' },
  M: { icon: '🔬', label: 'Activités spécialisées, scientifiques et techniques' },
  N: { icon: '📋', label: 'Activités de services administratifs' },
  O: { icon: '🏛️', label: 'Administration publique' },
  P: { icon: '🎓', label: 'Enseignement' },
  Q: { icon: '🏥', label: 'Santé humaine et action sociale' },
  R: { icon: '🎭', label: 'Arts, spectacles et activités récréatives' },
  S: { icon: '🛠️', label: 'Autres activités de services' },
};

// ─── Employee count brackets (INSEE codes) ───────────────────────────────────

export const EFFECTIFS = {
  '00': '0 salarié',   '01': '1 à 2',       '02': '3 à 5',       '03': '6 à 9',
  '11': '10 à 19',     '12': '20 à 49',      '21': '50 à 99',     '22': '100 à 199',
  '31': '200 à 249',   '32': '250 à 499',    '41': '500 à 999',
  '42': '1 000 à 1 999', '51': '2 000 à 4 999', '52': '5 000 à 9 999', '53': '≥ 10 000',
};

// ─── NAF code → section letter ────────────────────────────────────────────────

export function getNAFSection(nafCode) {
  if (!nafCode) return 'M';
  const num = parseInt(nafCode, 10);
  if (num <= 3)   return 'A';
  if (num <= 9)   return 'B';
  if (num <= 33)  return 'C';
  if (num === 35) return 'D';
  if (num <= 39)  return 'E';
  if (num <= 43)  return 'F';
  if (num <= 47)  return 'G';
  if (num <= 53)  return 'H';
  if (num <= 56)  return 'I';
  if (num <= 63)  return 'J';
  if (num <= 66)  return 'K';
  if (num === 68) return 'L';
  if (num <= 75)  return 'M';
  if (num <= 82)  return 'N';
  if (num === 84) return 'O';
  if (num === 85) return 'P';
  if (num <= 88)  return 'Q';
  if (num <= 93)  return 'R';
  if (num <= 96)  return 'S';
  return 'M';
}

// ─── Sector description (one sentence, shown in the header) ──────────────────

export function getSectorDescription(section) {
  const desc = {
    A: "Production végétale, élevage, sylviculture et pêche. Dépendance directe aux ressources naturelles et au cycle de l'eau.",
    B: "Extraction de minerais, hydrocarbures et autres ressources du sous-sol. Forte consommation d'eau industrielle.",
    C: "Fabrication de produits manufacturés. Consommation d'eau variable selon les process (refroidissement, nettoyage, transformation).",
    D: "Production, transport et distribution d'électricité, de gaz et de vapeur. Refroidissement des centrales thermiques.",
    E: "Captage, traitement, distribution d'eau potable, collecte et traitement des eaux usées.",
    F: "Travaux de construction, génie civil. Risque lié à l'imperméabilisation des sols et aux inondations.",
    G: "Vente et réparation de véhicules, commerce de gros et de détail. Dépendance indirecte à la logistique.",
    H: "Transport de voyageurs et de marchandises. Vulnérabilité aux épisodes climatiques extrêmes.",
    I: "Hôtellerie et restauration. Dépendance directe à l'eau pour les usages alimentaires et sanitaires.",
    J: "Édition, audiovisuel, télécommunications, informatique. Consommation d'eau pour refroidissement des data centers.",
    K: "Banques, assurances, gestion de fonds. Exposition indirecte via les actifs financés et le risque de transition.",
    L: "Activités d'achat, vente et location de biens immobiliers. Vulnérabilité aux risques physiques (inondation, RGA).",
    M: "Conseil, expertise, recherche et développement. Faible dépendance opérationnelle directe à l'eau.",
    N: "Location, services aux entreprises, ressources humaines, sécurité. Consommation d'eau modérée.",
    O: "Services publics d'administration, défense, sécurité sociale.",
    P: 'Établissements scolaires et universitaires.',
    Q: "Hôpitaux, cliniques, établissements médico-sociaux. Usage critique de l'eau pour les soins.",
    R: 'Activités culturelles, sportives et récréatives.',
    S: 'Coiffure, soins corporels, blanchisserie et autres services à la personne.',
  };
  return desc[section] || 'Activité économique diverse. Analyse sectorielle à personnaliser.';
}

// ─── Sector vulnerability analysis (derived from NAF code) ───────────────────
// Returns: { quantite, qualite, chaineValeur }
// chaineValeur: { Amont, Direct, Aval } → { quantite, qualite } → [[label, niveau], ...]

export function getSectorVulnerability(nafCode) {
  const s = getNAFSection(nafCode);

  const db = {
    C: {
      quantite: { dependance: 'Élevée', risque: 'Modéré à élevé', tendance: '↑ En hausse', detail: 'Eau industrielle, refroidissement, nettoyage' },
      qualite: { sensibilite: 'Forte', contraintes: 'ICPE, normes de rejet (DCE)' },
      chaineValeur: {
        Amont: {
          quantite: [['Eau process fournisseurs', 'modere'], ['Disponibilité ressource', 'eleve']],
          qualite:  [['Qualité entrants', 'modere'], ['Normes fournisseurs', 'faible']],
        },
        Direct: {
          quantite: [['Eau de process', 'eleve'], ['Refroidissement', 'modere']],
          qualite:  [['Rejets industriels', 'eleve'], ['Conformité ICPE', 'modere']],
        },
        Aval: {
          quantite: [['Logistique clients', 'faible'], ['Usage final', 'faible']],
          qualite:  [['Qualité produits', 'faible'], ['Impact écosystèmes', 'modere']],
        },
      },
    },
    A: {
      quantite: { dependance: 'Très élevée', risque: 'Élevé', tendance: '↑↑ Critique', detail: 'Irrigation, abreuvement, transformation agro-alimentaire' },
      qualite: { sensibilite: 'Très forte', contraintes: 'Nitrates, pesticides, Directive Cadre Eau' },
      chaineValeur: {
        Amont: {
          quantite: [['Disponibilité nappe', 'eleve'], ['Précipitations', 'eleve']],
          qualite:  [['Qualité nappe phréatique', 'modere'], ['Pollution amont', 'faible']],
        },
        Direct: {
          quantite: [['Irrigation cultures', 'eleve'], ['Abreuvement bétail', 'modere']],
          qualite:  [['Nitrates / pesticides', 'eleve'], ['Érosion des sols', 'modere']],
        },
        Aval: {
          quantite: [['Transport produits', 'faible'], ['Marchés aval', 'faible']],
          qualite:  [['Normes sanitaires', 'modere'], ['Image filière', 'faible']],
        },
      },
    },
    K: {
      quantite: { dependance: 'Faible', risque: 'Faible', tendance: '→ Stable', detail: "Dépendance indirecte via les actifs du portefeuille" },
      qualite: { sensibilite: 'Modérée', contraintes: 'CSRD, taxonomie verte, devoir de vigilance' },
      chaineValeur: {
        Amont: {
          quantite: [['Actifs exposés eau', 'modere'], ['Fournisseurs IT', 'faible']],
          qualite:  [['Données ESG fournisseurs', 'faible'], ['Risque réputationnel', 'faible']],
        },
        Direct: {
          quantite: [['Refroidissement data centers', 'faible'], ['Usage bureautique', 'faible']],
          qualite:  [['Reporting CSRD', 'modere'], ['Taxonomie verte', 'modere']],
        },
        Aval: {
          quantite: [['Portefeuille clients exposés', 'modere'], ['Risque crédit eau', 'modere']],
          qualite:  [['Stranded assets', 'modere'], ['Risque systémique', 'faible']],
        },
      },
    },
    E: {
      quantite: { dependance: 'Très élevée', risque: 'Critique', tendance: '↑↑ Critique', detail: 'Ressource centrale pour le service rendu' },
      qualite: { sensibilite: 'Très forte', contraintes: 'DCE, Directive eau potable, limites de rejet STEP' },
      chaineValeur: {
        Amont: {
          quantite: [["Disponibilité nappe / rivière", 'eleve'], ["Débit d'étiage", 'eleve']],
          qualite:  [['Qualité brute captage', 'eleve'], ['Pollutions diffuses', 'modere']],
        },
        Direct: {
          quantite: [['Production eau potable', 'eleve'], ['Assainissement collectif', 'eleve']],
          qualite:  [['Qualité eau distribuée', 'eleve'], ['Rejets STEP conformes', 'eleve']],
        },
        Aval: {
          quantite: [['Continuité service usagers', 'eleve'], ['Restrictions usage', 'modere']],
          qualite:  [['Milieu récepteur', 'modere'], ['Plaintes usagers', 'faible']],
        },
      },
    },
    Q: {
      quantite: { dependance: 'Élevée', risque: 'Élevé', tendance: '↑ En hausse', detail: 'Usage critique pour les soins, stérilisation, alimentation' },
      qualite: { sensibilite: 'Très forte', contraintes: 'Eau PPI, normes légionelles, rejets pharmaceutiques' },
      chaineValeur: {
        Amont: {
          quantite: [['Alimentation réseau AEP', 'eleve'], ['Stockage tampon', 'modere']],
          qualite:  [["Qualité eau d'alimentation", 'eleve'], ['Traitement eau PPI', 'modere']],
        },
        Direct: {
          quantite: [['Soins et hygiène', 'eleve'], ['Cuisine / restauration', 'modere']],
          qualite:  [['Prévention légionelles', 'eleve'], ['Rejets pharmaceutiques', 'modere']],
        },
        Aval: {
          quantite: [['Continuité soins', 'eleve'], ['Risque rupture service', 'modere']],
          qualite:  [['Impact milieu récepteur', 'modere'], ['Conformité IOTA', 'faible']],
        },
      },
    },
  };

  return db[s] || {
    quantite: { dependance: 'Modérée', risque: 'Modéré', tendance: '→ À évaluer', detail: "Analyse à affiner selon les activités spécifiques de l'établissement" },
    qualite: { sensibilite: 'Modérée', contraintes: 'Réglementation sectorielle applicable' },
    chaineValeur: {
      Amont: {
        quantite: [['Ressources en eau', 'modere'], ['Dépendances fournisseurs', 'faible']],
        qualite:  [['Qualité ressource amont', 'faible'], ['Normes fournisseurs', 'faible']],
      },
      Direct: {
        quantite: [['Usage direct eau', 'modere'], ['Effluents process', 'faible']],
        qualite:  [['Conformité rejets', 'modere'], ['Qualité process', 'faible']],
      },
      Aval: {
        quantite: [['Impact clients', 'faible'], ['Logistique aval', 'faible']],
        qualite:  [['Qualité produits', 'faible'], ['Normes secteur', 'faible']],
      },
    },
  };
}
