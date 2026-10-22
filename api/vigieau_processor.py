"""
Connecteur à l'API VigiEau (https://api.vigieau.gouv.fr/api).

Expose les restrictions sécheresse en vigueur sur le point géographique d'un
établissement : niveau de gravité par type de ressource (eaux superficielles,
souterraines, eau potable), arrêtés préfectoraux associés (PDF) et usages
restreints pour le profil de l'utilisateur.

Documentation : https://api.vigieau.beta.gouv.fr/swagger
"""

import time
import requests


VIGIEAU_BASE_URL = "https://api.vigieau.gouv.fr/api"
VIGIEAU_SITE_URL = "https://vigieau.gouv.fr"

REQUEST_TIMEOUT = 8  # secondes

# Les arrêtés changent au plus une fois par jour : un cache mémoire court
# évite de solliciter l'API à chaque affichage de fiche.
CACHE_TTL = 3600  # secondes
_cache = {}

# Profils supportés par VigiEau (filtrent la liste des usages retournés)
PROFILS = {
    "particulier":  "Particulier",
    "entreprise":   "Entreprise",
    "exploitation": "Exploitation agricole",
    "collectivite": "Collectivité",
}

# Types de zone d'alerte
TYPES_ZONE = {
    "SUP": "Eaux superficielles",
    "SOU": "Eaux souterraines",
    "AEP": "Eau potable",
}

# Niveaux de gravité, du plus faible au plus fort
NIVEAUX = [
    ("pas_restriction",  "Pas de restriction"),
    ("vigilance",        "Vigilance"),
    ("alerte",           "Alerte"),
    ("alerte_renforcee", "Alerte renforcée"),
    ("crise",            "Crise"),
]
NIVEAU_LABELS = dict(NIVEAUX)
NIVEAU_RANG = {code: i for i, (code, _) in enumerate(NIVEAUX)}


def default_profil(naf_code):
    """
    Profil VigiEau par défaut déduit de la grande catégorie du code NAF.

    Section A de la NAF (divisions 01 à 03 : agriculture, sylviculture, pêche)
    -> 'exploitation'. Tout le reste -> 'entreprise'.
    L'utilisateur peut surcharger ce choix depuis l'interface.
    """
    if not naf_code:
        return "entreprise"

    division = str(naf_code).replace(".", "").replace(" ", "")[:2]
    if division in ("01", "02", "03"):
        return "exploitation"
    return "entreprise"


def _normalize_arrete(arrete):
    if not arrete:
        return None
    return {
        "id":              arrete.get("id"),
        "date_debut":      arrete.get("dateDebutValidite"),
        "date_fin":        arrete.get("dateFinValidite"),
        "url_restriction": arrete.get("cheminFichier"),
        "url_cadre":       arrete.get("cheminFichierArreteCadre"),
    }


def _normalize_zone(zone):
    niveau = zone.get("niveauGravite") or "pas_restriction"
    type_zone = zone.get("type")

    usages = [
        {
            "nom":         u.get("nom"),
            "thematique":  u.get("thematique"),
            "description": u.get("description"),
        }
        for u in (zone.get("usages") or [])
    ]

    return {
        "id":            zone.get("id"),
        "type":          type_zone,
        "type_label":    TYPES_ZONE.get(type_zone, type_zone),
        "nom":           zone.get("nom"),
        "code":          zone.get("code"),
        "departement":   zone.get("departement"),
        "niveau":        niveau,
        "niveau_label":  NIVEAU_LABELS.get(niveau, niveau),
        "niveau_rang":   NIVEAU_RANG.get(niveau, 0),
        "arrete":        _normalize_arrete(zone.get("arrete")),
        "usages":        usages,
    }


def _get_zones_raw(lat, lon, commune=None, profil="entreprise"):
    """Appel HTTP à VigiEau, avec cache mémoire."""
    key = (round(lat, 5), round(lon, 5), commune, profil)
    cached = _cache.get(key)
    if cached and (time.time() - cached[0]) < CACHE_TTL:
        return cached[1]

    params = {"lat": lat, "lon": lon, "profil": profil}
    if commune:
        params["commune"] = commune

    response = requests.get(
        f"{VIGIEAU_BASE_URL}/zones",
        params=params,
        timeout=REQUEST_TIMEOUT,
        headers={"Accept": "application/json"},
    )
    response.raise_for_status()
    data = response.json()

    if not isinstance(data, list):
        data = []

    _cache[key] = (time.time(), data)
    return data


def load_restrictions(lat, lon, commune=None, profil=None, naf_code=None):
    """
    Retourne les restrictions sécheresse en vigueur au point (lat, lon).

    Une zone par type de ressource : si VigiEau en renvoie plusieurs pour un
    même type, on retient la première (comportement à affiner plus tard).
    """
    if profil not in PROFILS:
        profil = default_profil(naf_code)

    raw_zones = _get_zones_raw(lat, lon, commune=commune, profil=profil)

    zones = []
    seen_types = set()
    for zone in raw_zones:
        type_zone = zone.get("type")
        if type_zone in seen_types:
            continue
        seen_types.add(type_zone)
        zones.append(_normalize_zone(zone))

    # Ordre d'affichage stable : superficielles, souterraines, eau potable
    ordre = list(TYPES_ZONE.keys())
    zones.sort(key=lambda z: ordre.index(z["type"]) if z["type"] in ordre else len(ordre))

    niveau_max = max(zones, key=lambda z: z["niveau_rang"])["niveau"] if zones else None

    return {
        "profil":           profil,
        "profil_label":     PROFILS[profil],
        "profils_possibles": [{"code": c, "label": l} for c, l in PROFILS.items()],
        "concerne":         bool(zones),
        "niveau_max":       niveau_max,
        "niveau_max_label": NIVEAU_LABELS.get(niveau_max) if niveau_max else None,
        "zones":            zones,
        "source": {
            "nom": "VigiEau (Ministère de la Transition écologique)",
            "url": VIGIEAU_SITE_URL,
        },
    }
