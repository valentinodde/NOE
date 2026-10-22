"""
Explorateur des fiches prestataires, aides et mesures (page /fiches du front).

Lit directement les fichiers, pas la base : la page sert à relire le travail
en cours, y compris ce qui n'est pas encore ingéré. Trois provenances :

- les seeds publiés, api/seeds/prestataires_*.json, aides_*.json et actions_*.json ;
- les fichiers de secteur du staging, api/seeds/staging/<secteur>/*.json ;
- les fiches unitaires du staging, api/seeds/staging/<secteur>/fiches/<ID>.json,
  avec le verdict du contrôleur à côté (<ID>.verdict.md).

Une même fiche peut vivre à plusieurs endroits. La version affichée est la plus
récente (date_maj), à date égale celle du staging, fiche unitaire d'abord.
Chaque fiche porte `edition` : ses versions, si elle diffère de la version
publiée, le verdict du contrôleur et les contrôles de referentiel_verif.
Chaque mesure porte en plus `declencheurs` : les filtres des questionnaires
qui l'ajoutent au plan d'action ou l'en retirent.

Les fichiers sont relus à chaque appel (une centaine de petits JSON) : une
correction se voit en rechargeant la page, sans redémarrer l'API.
"""

import glob
import json
import os
import re

import referentiel_verif as V

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SEEDS = os.path.join(RACINE, "api", "seeds")
STAGING = os.path.join(SEEDS, "staging")

# À date égale, la version la plus avancée dans le circuit de rédaction gagne
PRIORITE = {"fiche": 2, "staging": 1, "seeds": 0}

VERDICT_RE = re.compile(r"^VERDICT\s*:\s*(.+)$", re.MULTILINE)
SOURCES_RE = re.compile(r"^SOURCES\s*:\s*(.+)$", re.MULTILINE)
# Les messages de referentiel_verif commencent par « prestataire <id> : »,
# « aide <id> : » ou « mesure <id> : »
LIBELLE_RE = re.compile(r"^(prestataire|aide|mesure) \S+ : ")


def _lire(chemin):
    with open(chemin, encoding="utf-8") as f:
        return json.load(f)


def _relatif(chemin):
    """Chemin depuis la racine du dépôt, tel qu'on l'ouvre dans l'éditeur."""
    return os.path.relpath(chemin, RACINE)


def _secteurs_staging():
    return sorted(d for d in os.listdir(STAGING) if os.path.isdir(os.path.join(STAGING, d)))


def _fichiers(motif, staging=True):
    """(provenance, secteur de staging, chemin) des fichiers de secteur."""
    sortie = [("seeds", None, f) for f in sorted(glob.glob(os.path.join(SEEDS, motif)))]
    for s in _secteurs_staging() if staging else []:
        sortie += [("staging", s, f) for f in sorted(glob.glob(os.path.join(STAGING, s, motif)))]
    return sortie


def _par_id(motif, staging=True):
    """Union par id des éléments de tous les fichiers du motif, le staging l'emportant."""
    elements = {}
    for _, _, chemin in _fichiers(motif, staging):
        contenu = _lire(chemin)
        for e in contenu if isinstance(contenu, list) else [contenu]:
            elements[e.get("id") or e.get("sector_id")] = e
    return elements


def _verdict(chemin):
    if not os.path.exists(chemin):
        return None
    with open(chemin, encoding="utf-8") as f:
        texte = f.read()
    ligne = VERDICT_RE.search(texte)
    sources = SOURCES_RE.search(texte)
    libelle = ligne.group(1).strip() if ligne else None
    if not libelle:
        etat = None
    elif libelle.startswith("conforme"):
        etat = "conforme"
    elif libelle.startswith("incomplet"):
        etat = "incomplet"
    else:
        etat = "a_corriger"
    return {
        "etat": etat,
        "libelle": libelle,
        "sources": sources.group(1).strip() if sources else None,
        "texte": texte,
        "fichier": _relatif(chemin),
    }


def _collecter(prefixe_fichier, prefixe_id):
    """Toutes les versions de chaque fiche : {id: [version, ...]}."""
    versions = {}

    def ajouter(fiche, provenance, secteur, chemin):
        if not isinstance(fiche, dict) or not fiche.get("id"):
            return
        versions.setdefault(fiche["id"], []).append({
            "fiche": fiche,
            "provenance": provenance,
            "secteur_staging": secteur,
            "fichier": _relatif(chemin),
            "statut": V.statut_de(fiche),
            "date_maj": fiche.get("date_maj"),
        })

    for provenance, secteur, chemin in _fichiers(f"{prefixe_fichier}_*.json"):
        for fiche in _lire(chemin):
            ajouter(fiche, provenance, secteur, chemin)

    for s in _secteurs_staging():
        for chemin in sorted(glob.glob(os.path.join(STAGING, s, "fiches", f"{prefixe_id}_*.json"))):
            contenu = _lire(chemin)
            for fiche in contenu if isinstance(contenu, list) else [contenu]:
                ajouter(fiche, "fiche", s, chemin)

    return versions


def _contenu(version):
    return {k: v for k, v in version["fiche"].items() if k != "statut"}


def _assembler(versions, verifier, contexte):
    fiches = []
    for ident, vs in versions.items():
        vs.sort(key=lambda v: (v["date_maj"] or "", PRIORITE[v["provenance"]]), reverse=True)
        publiee = next((v for v in vs if v["provenance"] == "seeds"), None)
        # Une copie de staging qui ne diffère de la version publiée que par le
        # statut (changé à la promotion) n'est pas une modification
        retenue = publiee if publiee and _contenu(publiee) == _contenu(vs[0]) else vs[0]

        verdict = None
        for v in vs:
            if v["provenance"] == "fiche":
                chemin = os.path.splitext(os.path.join(RACINE, v["fichier"]))[0]
                verdict = _verdict(chemin + ".verdict.md")
                if verdict:
                    break

        erreurs, avertissements = verifier(retenue["fiche"], *contexte)

        fiches.append({
            **retenue["fiche"],
            "statut": retenue["statut"],
            "edition": {
                "provenance": retenue["provenance"],
                "fichier": retenue["fichier"],
                "dans_seeds": publiee is not None,
                "statut_seeds": publiee["statut"] if publiee else None,
                "modifiee": publiee is not None and retenue is not publiee,
                "versions": [{k: v[k] for k in ("provenance", "secteur_staging", "fichier", "statut", "date_maj")}
                             | {"identique": _contenu(v) == _contenu(retenue)} for v in vs],
                "verdict": verdict,
                "erreurs": [LIBELLE_RE.sub("", e) for e in erreurs],
                "avertissements": [LIBELLE_RE.sub("", w) for w in avertissements],
            },
        })
    return sorted(fiches, key=lambda f: f["id"])


def _questionnaires():
    """
    Questionnaire de chaque secteur, le staging l'emportant, avec son fichier.
    Une copie de staging identique à la version publiée (restée après la
    promotion) ne compte pas : le fichier publié est cité.
    """
    sortie = {}
    for _, _, chemin in _fichiers("questionnaire_*.json"):
        q = _lire(chemin)
        if q["sector_id"] in sortie and sortie[q["sector_id"]][0] == q:
            continue
        sortie[q["sector_id"]] = (q, _relatif(chemin))
    return sortie


def _declencheurs(questionnaires):
    """
    {id de mesure: [déclencheur]} : ce qui fait entrer une mesure dans le plan
    d'action d'un secteur (always_include, filtre add) ou l'en fait sortir
    (never_include, filtre remove).
    """
    sortie = {}
    for secteur, (q, fichier) in questionnaires.items():
        config = q.get("action_plan_config") or {}
        base = {"questionnaire": secteur, "fichier": fichier}
        for m in config.get("always_include", []):
            sortie.setdefault(m, []).append(base | {"effet": "toujours"})
        for m in config.get("never_include", []):
            sortie.setdefault(m, []).append(base | {"effet": "jamais"})
        for f in config.get("filters", []):
            for m in f.get("measures", []):
                sortie.setdefault(m, []).append(base | {
                    "effet": f.get("effect"),
                    "filtre": f.get("id"),
                    "description": f.get("description"),
                    "type": f.get("type"),
                    "priorite": f.get("priority"),
                })
    return sortie


def load_fiches():
    categories = _lire(os.path.join(SEEDS, "categories.json"))
    questionnaires = _questionnaires()
    actions = _par_id("actions_*.json")

    contexte = (
        {c["id"] for c in categories},
        set(questionnaires),
        set(actions),
        {i: set(a.get("secteurs", [])) for i, a in actions.items()},
    )

    mesures = _assembler(
        _collecter("actions", "ACT"),
        lambda a, ids_categories, ids_secteurs, *_: V.verifier_mesure(a, ids_categories, ids_secteurs),
        contexte,
    )
    declencheurs = _declencheurs(questionnaires)
    for m in mesures:
        m["declencheurs"] = declencheurs.get(m["id"], [])

    return {
        "categories": [
            {k: c.get(k) for k in ("id", "label", "icone", "couleur", "ordre")}
            for c in sorted(categories, key=lambda c: c.get("ordre", 0))
        ],
        "secteurs": sorted(
            ({"id": i, "label": q.get("sector_label", i)} for i, (q, _) in questionnaires.items()),
            key=lambda s: s["label"],
        ),
        "mesures": mesures,
        "prestataires": _assembler(_collecter("prestataires", "PREST"), V.verifier_prestataire, contexte),
        "aides": _assembler(_collecter("aides", "AIDE"), V.verifier_aide, contexte),
    }
