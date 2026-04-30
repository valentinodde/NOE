// Vite expose les variables d'env via import.meta.env (préfixe VITE_)
const API_URL = import.meta.env.VITE_API_URL;

export async function fetchEntreprise(siret) {
  const response = await fetch(`${API_URL}/siret/${siret}`);
  if (!response.ok) {
    const error = new Error(`Entreprise non trouvée (${response.status})`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export async function fetchTerritoire(codeBassin) {
  const response = await fetch(`${API_URL}/territoire/${codeBassin}`);
  if (!response.ok) {
    const error = new Error(`Territoire non trouvé (${response.status})`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export async function fetchSectorsList() {
  const response = await fetch(`${API_URL}/sectors`);
  if (!response.ok) throw new Error(`Erreur ${response.status}`);
  return response.json();
}

export async function fetchSector(sectorId) {
  const response = await fetch(`${API_URL}/sectors/${encodeURIComponent(sectorId)}`);
  if (!response.ok) throw new Error(`Secteur non trouvé (${response.status})`);
  return response.json();
}

export async function patchSector(sectorId, updates) {
  const response = await fetch(`${API_URL}/sectors/${encodeURIComponent(sectorId)}`, {
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
