// Vite expose les variables d'env via import.meta.env (préfixe VITE_)
const API_URL = import.meta.env.VITE_API_URL;

/**
 * Tous les appels à l'API passent par ici : le cookie de session part avec
 * chaque requête, et une session expirée ou révoquée (401) renvoie vers la
 * page de connexion, qui ramènera ensuite à la page en cours.
 */
function requete(chemin, options = {}) {
  return fetch(`${API_URL}${chemin}`, { ...options, credentials: 'include' }).then(reponse => {
    if (reponse.status === 401 && !window.location.pathname.startsWith('/connexion')) {
      const retour = window.location.pathname + window.location.search;
      window.location.assign(`/connexion?retour=${encodeURIComponent(retour)}`);
    }
    return reponse;
  });
}

async function json(reponse) {
  const data = await reponse.json().catch(() => ({}));
  if (!reponse.ok) {
    const error = new Error(data.message || data.error || `Erreur ${reponse.status}`);
    error.status = reponse.status;
    error.data = data;
    throw error;
  }
  return data;
}

const corpsJson = (methode, corps) => ({
  method: methode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(corps),
});

// ─── Connexion ────────────────────────────────────────────────────────────────

/** Utilisateur connecté, ou null sans session valide (pas de redirection). */
export async function fetchMoi() {
  const reponse = await fetch(`${API_URL}/auth/moi`, { credentials: 'include' });
  if (reponse.status === 401) return null;
  return json(reponse);
}

export async function demanderCode(email) {
  return json(await requete('/auth/demander-code', corpsJson('POST', { email })));
}

export async function verifierCode(email, code) {
  return json(await requete('/auth/verifier-code', corpsJson('POST', { email, code })));
}

export async function deconnecter() {
  return json(await requete('/auth/deconnexion', { method: 'POST' }));
}

// ─── Console d'admin ──────────────────────────────────────────────────────────

export async function fetchOrganisations() {
  return json(await requete('/admin/organisations'));
}

export async function creerOrganisation(organisation) {
  return json(await requete('/admin/organisations', corpsJson('POST', organisation)));
}

export async function modifierOrganisation(id, champs) {
  return json(await requete(`/admin/organisations/${id}`, corpsJson('PATCH', champs)));
}

export async function supprimerOrganisation(id) {
  return json(await requete(`/admin/organisations/${id}`, { method: 'DELETE' }));
}

export async function fetchUtilisateurs() {
  return json(await requete('/admin/utilisateurs'));
}

export async function modifierUtilisateur(email, champs) {
  return json(await requete(`/admin/utilisateurs/${encodeURIComponent(email)}`, corpsJson('PATCH', champs)));
}

export async function revoquerSessions(email) {
  return json(await requete(`/admin/utilisateurs/${encodeURIComponent(email)}/revoquer`, { method: 'POST' }));
}

// ─── Données ──────────────────────────────────────────────────────────────────

export async function fetchEntreprise(siret) {
  const response = await requete(`/siret/${siret}`);
  if (!response.ok) {
    const error = new Error(`Entreprise non trouvée (${response.status})`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export async function fetchTerritoire(codeBassin) {
  const response = await requete(`/territoire/${codeBassin}`);
  if (!response.ok) {
    const error = new Error(`Territoire non trouvé (${response.status})`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export async function fetchEtablissement(siret) {
  const response = await requete(`/etablissement/${siret}`);
  if (!response.ok) {
    const error = new Error(`Établissement non trouvé (${response.status})`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export async function fetchSectorsList() {
  const response = await requete(`/sectors`);
  if (!response.ok) throw new Error(`Erreur ${response.status}`);
  return response.json();
}

export async function fetchSector(sectorId) {
  const response = await requete(`/sectors/${encodeURIComponent(sectorId)}`);
  if (!response.ok) throw new Error(`Secteur non trouvé (${response.status})`);
  return response.json();
}

export async function fetchInstitutionalActors(lat, lon, type = null) {
  const params = new URLSearchParams({ lat, lon });
  if (type) params.set('type', type);
  const response = await requete(`/institutional-actors?${params}`);
  if (!response.ok) throw new Error(`Erreur ${response.status}`);
  return response.json();
}

/**
 * Restrictions sécheresse en vigueur (API VigiEau, via le backend).
 * `profil` : 'entreprise' | 'exploitation' | ... Si omis, il est déduit du code NAF.
 */
export async function fetchVigieauZones({ lat, lon, commune, profil, naf }) {
  const params = new URLSearchParams({ lat, lon });
  if (commune) params.set('commune', commune);
  if (profil) params.set('profil', profil);
  if (naf) params.set('naf', naf);

  const response = await requete(`/vigieau/zones?${params}`);
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `Erreur ${response.status}`);
  }
  return response.json();
}

/**
 * Historique annuel des restrictions sécheresse de la commune : nombre de jours
 * passés à chaque niveau de gravité, par ressource (eaux superficielles / souterraines).
 */
export async function fetchRestrictionsHistorique(codeCommune) {
  const response = await requete(`/restrictions/historique/${encodeURIComponent(codeCommune)}`);
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `Erreur ${response.status}`);
  }
  return response.json();
}

/**
 * Retours d'expérience : aides des agences de l'eau accordées à des bénéficiaires
 * du même secteur (NAF) ou engagés dans le même type d'action.
 * `categories` : catégories du plan d'action, utilisées en repli quand le secteur
 * ne suffit pas.
 */
export async function fetchAidesExemples({ naf, lat, lon, dept, siren, categories = [], limit = 6 }) {
  const params = new URLSearchParams({ naf, limit });
  if (lat != null) params.set('lat', lat);
  if (lon != null) params.set('lon', lon);
  if (dept) params.set('dept', dept);
  if (siren) params.set('siren', siren);
  if (categories.length) params.set('categories', categories.join(','));

  const response = await requete(`/aides/exemples?${params}`);
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `Erreur ${response.status}`);
  }
  return response.json();
}

/**
 * Contours simplifiés des six bassins des agences de l'eau, pour le fond de
 * carte des retours d'expérience. Ils ne changent pas : une seule requête par
 * session.
 */
let contoursAgences = null;
export function fetchContoursAgences() {
  if (!contoursAgences) {
    contoursAgences = requete(`/agences-eau/contours`)
      .then(r => { if (!r.ok) throw new Error(`Erreur ${r.status}`); return r.json(); })
      .catch(err => { contoursAgences = null; throw err; });
  }
  return contoursAgences;
}

/**
 * Référentiel du questionnaire pour un code NAF : questions, catégories du plan
 * d'action, bibliothèque de mesures, configuration du constructeur et prestataires.
 * Renvoie null si aucun questionnaire ne couvre ce secteur.
 */
export async function fetchQuestionnaire(naf) {
  const response = await requete(`/questionnaire/${encodeURIComponent(naf)}`);
  if (response.status === 404) return null;
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `Erreur ${response.status}`);
  }
  return response.json();
}

/**
 * Prestataires et aides visibles pour le secteur (code NAF), le département
 * et l'agence de l'eau (résolue depuis le point) de l'établissement, chacun
 * avec les mesures auxquelles il est lié.
 * null si aucun questionnaire ne couvre ce code NAF.
 */
export async function fetchSolutions(naf, { dept, lat, lon } = {}) {
  const params = new URLSearchParams({ naf });
  if (dept) params.set('dept', dept);
  if (lat != null && lon != null) {
    params.set('lat', lat);
    params.set('lon', lon);
  }
  const response = await requete(`/solutions?${params}`);
  if (response.status === 404) return null;
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `Erreur ${response.status}`);
  }
  return response.json();
}

export async function patchSector(sectorId, updates) {
  const response = await requete(`/sectors/${encodeURIComponent(sectorId)}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `Erreur ${response.status}`);
  }
  return response.json();
}

// ─── Vision territoriale ──────────────────────────────────────────────────────

/**
 * Les bassins versants de métropole : contours simplifiés et indicateurs par
 * horizon (FeatureCollection, environ 600 ko compressés). Une seule requête
 * par session.
 */
let carteBassins = null;
export function fetchCarteBassins() {
  if (!carteBassins) {
    carteBassins = requete(`/territoires/bassins`)
      .then(r => { if (!r.ok) throw new Error(`Erreur ${r.status}`); return r.json(); })
      .catch(err => { carteBassins = null; throw err; });
  }
  return carteBassins;
}

/** Communes dont le nom (ou le code INSEE) commence par `q`, avec leur bassin. */
export async function fetchCommunes(q, { signal } = {}) {
  const response = await requete(`/territoires/communes?${new URLSearchParams({ q })}`, { signal });
  if (!response.ok) throw new Error(`Erreur ${response.status}`);
  return response.json();
}

/**
 * Emplois estimés et activités dépendantes de l'eau d'un ensemble de bassins
 * (tous si `bassins` est vide).
 */
export async function fetchActiviteTerritoire(bassins = [], { signal, limit = 8 } = {}) {
  const params = new URLSearchParams({ limit });
  if (bassins.length) params.set('bassins', bassins.join(','));
  const response = await requete(`/territoires/activite?${params}`, { signal });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `Erreur ${response.status}`);
  }
  return response.json();
}

// ─── Explorateur des fiches ───────────────────────────────────────────────────

/**
 * Toutes les fiches prestataires et aides, publiées ou en staging, avec leur
 * provenance, leur verdict et leurs contrôles. Relu à chaque appel : une fiche
 * corrigée dans les seeds apparaît au rechargement.
 */
export async function fetchFiches() {
  const response = await requete(`/fiches`);
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `Erreur ${response.status}`);
  }
  return response.json();
}
