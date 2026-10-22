// Niveaux de gravité des restrictions sécheresse (VigiEau), partagés par
// DroughtRestrictions et le résumé de l'onglet Constat.

// `color` sert aux pastilles et aux textes, il doit rester lisible sur fond clair.
// `fill` sert aux aplats (barres, heatmap, légende) : cette rampe doit s'assombrir
// strictement du niveau le plus faible au plus fort, sans quoi l'oeil lit une
// vigilance comme plus grave qu'une alerte.
export const NIVEAUX = {
  pas_restriction:  { label: 'Pas de restriction', color: '#64748b', fill: '#e8eaf3', bg: '#f1f5f9' },
  vigilance:        { label: 'Vigilance',          color: '#ca8a04', fill: '#fcd34d', bg: '#fef9c3' },
  alerte:           { label: 'Alerte',             color: '#d97706', fill: '#f59e0b', bg: '#fef3c7' },
  alerte_renforcee: { label: 'Alerte renforcée',   color: '#ea580c', fill: '#ea580c', bg: '#ffedd5' },
  crise:            { label: 'Crise',              color: '#dc2626', fill: '#dc2626', bg: '#fee2e2' },
};

const NIVEAU_DEFAUT = { label: 'Niveau inconnu', color: '#64748b', fill: '#e8eaf3', bg: '#f1f5f9' };

export const getNiveau = (code) => NIVEAUX[code] || NIVEAU_DEFAUT;
