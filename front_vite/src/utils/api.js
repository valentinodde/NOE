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
