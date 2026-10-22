"""
Outils en ligne de commande pour la rédaction des fiches du référentiel
(mesures, prestataires, aides). Pensés pour être appelés par un agent depuis
bash : chaque sous-commande écrit un résultat lisible (JSON ou texte) et rend
un code de sortie explicite (0 ok, 1 problème trouvé, 2 mauvais usage).

    conda run -n noe-env python api/outils_fiches.py lister-mesures hotellerie [--staging]
    conda run -n noe-env python api/outils_fiches.py rechercher-entreprise --nom "Chambre d'agriculture" --dept 79
    conda run -n noe-env python api/outils_fiches.py verifier-url https://... https://...
    conda run -n noe-env python api/outils_fiches.py verifier-fiche fiche.json [--staging <secteur>]
    conda run -n noe-env python api/outils_fiches.py logo PREST_TRA_001 https://site.fr/logo.svg
    conda run -n noe-env python api/outils_fiches.py naf 10.51C [--voisins groupe] [--notes]
    conda run -n noe-env python api/outils_fiches.py naf 10.5
    conda run -n noe-env python api/outils_fiches.py naf --chercher lait

`naf` lit la nomenclature NAF rév. 2 du skill nouveau-secteur (libellés et
notes explicatives INSEE) et indique pour chaque code le questionnaire qui le
couvre déjà, publié ou en staging.

`verifier-fiche` accepte une fiche seule ou une liste, de n'importe quel type
(le type est déduit du préfixe de l'id : ACT_, PREST_, AIDE_), et la contrôle
dans le contexte des seeds publiés plus, si demandé, du staging du secteur.

`logo` dépose le logo dans le dossier Cloudinary `Noe assets/logos` sous l'id
de la fiche (CLOUDINARY_URL dans api/.env) et renvoie l'URL à mettre dans
`logo_url`. Un nouveau dépôt pour le même id remplace l'ancien.
"""

import argparse
import glob
import io
import json
import os
import sys
import time
import unicodedata

import requests

import referentiel_verif as V
from ingest_referentiel import SEEDS, charger_seeds, dossier_staging


API_URL = "https://recherche-entreprises.api.gouv.fr/search"
API_PAUSE = 0.16   # limite publique : 7 appels par seconde
USER_AGENT = "noe-outils-fiches (hydros-consulting)"


def sortie(obj):
    print(json.dumps(obj, ensure_ascii=False, indent=2))


def contexte(staging_secteur):
    staging = dossier_staging(staging_secteur) if staging_secteur else None
    if staging and not os.path.isdir(staging):
        print(f"Dossier de staging introuvable : {staging}", file=sys.stderr)
        sys.exit(2)
    return charger_seeds(staging)


# ─── lister-mesures ───────────────────────────────────────────────────────

def lister_mesures(args):
    categories, questionnaires, actions, _, _ = contexte(args.secteur if args.staging else None)
    secteurs = {q["sector_id"] for q in questionnaires}
    if args.secteur not in secteurs:
        print(f"Secteur inconnu '{args.secteur}'. Connus : {sorted(secteurs)}", file=sys.stderr)
        sys.exit(2)
    libelles = {c["id"]: c["label"] for c in categories}
    visibles = [a for a in actions if not a.get("secteurs") or args.secteur in a["secteurs"]]
    sortie([
        {
            "id":          a["id"],
            "titre_court": a.get("titre_court") or a["titre"],
            "titre":       a["titre"],
            "categorie":   a["categorie"],
            "categorie_label": libelles.get(a["categorie"]),
            "transversale": not a.get("secteurs"),
            "description": a["description"],
        }
        for a in visibles
    ])


# ─── rechercher-entreprise ────────────────────────────────────────────────

def appeler_api(params, essais=3):
    session = requests.Session()
    session.headers["User-Agent"] = USER_AGENT
    for tentative in range(essais):
        try:
            r = session.get(API_URL, params=params, timeout=20)
        except requests.RequestException:
            time.sleep(2 * (tentative + 1))
            continue
        if r.status_code == 200:
            time.sleep(API_PAUSE)
            return r.json()
        if r.status_code == 429 or r.status_code >= 500:
            time.sleep(3 * (tentative + 1))
            continue
        return {"results": [], "erreur": f"HTTP {r.status_code}"}
    return None


def resume_resultat(r, dept):
    siege = r.get("siege") or {}
    etabs = r.get("matching_etablissements") or []
    etab = next((e for e in etabs if e.get("departement") == dept), None) if dept else None
    e = etab or siege
    return {
        "nom_complet":        r.get("nom_complet"),
        "siren":              r.get("siren"),
        "siret":              e.get("siret"),
        "etablissement":      "dans le departement demande" if etab else "siege",
        "adresse":            e.get("adresse"),
        "departement":        e.get("departement") or (e.get("code_postal") or "")[:2] or None,
        "nature_juridique":   r.get("nature_juridique"),
        "activite_principale": e.get("activite_principale") or r.get("activite_principale"),
        "etat_administratif": e.get("etat_administratif") or r.get("etat_administratif"),
        "nombre_etablissements_ouverts": r.get("nombre_etablissements_ouverts"),
    }


def rechercher_entreprise(args):
    params = {"q": args.nom, "per_page": args.max}
    if args.dept:
        params["departement"] = args.dept
    data = appeler_api(params)
    if data is None:
        print("API Recherche d'entreprises injoignable", file=sys.stderr)
        sys.exit(1)
    resultats = [resume_resultat(r, args.dept) for r in data.get("results") or []]
    sortie({
        "requete":   {"nom": args.nom, "departement": args.dept},
        "source":    f"{API_URL}?q={requests.utils.quote(args.nom)}"
                     + (f"&departement={args.dept}" if args.dept else ""),
        "resultats": resultats,
        "erreur":    data.get("erreur"),
    })
    sys.exit(0 if resultats else 1)


# ─── verifier-url ─────────────────────────────────────────────────────────

def verifier_url(args):
    session = requests.Session()
    session.headers["User-Agent"] = "Mozilla/5.0 (compatible; noe-outils-fiches)"
    resultats = []
    for url in args.urls:
        statut, final, erreur = None, None, None
        try:
            r = session.head(url, timeout=15, allow_redirects=True)
            if r.status_code >= 400 or r.status_code == 405:
                r = session.get(url, timeout=20, allow_redirects=True, stream=True)
            statut, final = r.status_code, r.url
        except requests.RequestException as e:
            erreur = type(e).__name__
        ok = statut is not None and statut < 400
        resultats.append({"url": url, "ok": ok, "statut": statut, "url_finale": final, "erreur": erreur})
    sortie(resultats)
    sys.exit(0 if all(r["ok"] for r in resultats) else 1)


# ─── logo ─────────────────────────────────────────────────────────────────

DOSSIER_LOGOS = "Noe assets/logos"


def logo(args):
    """Dépose le logo d'une fiche sur Cloudinary, sous l'id de la fiche, en PNG
    de 256 px de haut au plus. Un nouveau dépôt pour le même id remplace l'ancien."""
    from dotenv import load_dotenv
    load_dotenv(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env"))
    if not os.environ.get("CLOUDINARY_URL"):
        print("CLOUDINARY_URL absent de api/.env", file=sys.stderr)
        sys.exit(2)
    # Import après load_dotenv : le SDK lit CLOUDINARY_URL à l'import
    import cloudinary.uploader

    if os.path.isfile(args.source):
        with open(args.source, "rb") as fh:
            contenu = fh.read()
    else:
        try:
            r = requests.get(args.source, timeout=20,
                             headers={"User-Agent": "Mozilla/5.0 (compatible; noe-outils-fiches)"})
            r.raise_for_status()
        except requests.RequestException as e:
            sortie({"ok": False, "source": args.source, "erreur": f"téléchargement : {type(e).__name__}"})
            sys.exit(1)
        if r.headers.get("Content-Type", "").startswith("text/html"):
            sortie({"ok": False, "source": args.source, "erreur": "la source est une page HTML, pas une image"})
            sys.exit(1)
        contenu = r.content

    try:
        res = cloudinary.uploader.upload(
            io.BytesIO(contenu), folder=DOSSIER_LOGOS, public_id=args.id,
            overwrite=True, invalidate=True, format="png",
            transformation=[{"height": 256, "crop": "limit"}],
        )
    except Exception as e:
        sortie({"ok": False, "source": args.source, "erreur": f"Cloudinary : {e}"})
        sys.exit(1)
    sortie({"ok": True, "id": args.id, "source": args.source, "logo_url": res["secure_url"],
            "largeur": res.get("width"), "hauteur": res.get("height")})


# ─── verifier-fiche ───────────────────────────────────────────────────────

def type_de(fiche):
    ident = str(fiche.get("id", ""))
    if ident.startswith("ACT_"):   return "mesure"
    if ident.startswith("PREST_"): return "prestataire"
    if ident.startswith("AIDE_"):  return "aide"
    return None


def verifier_fiche(args):
    with open(args.fichier, encoding="utf-8") as f:
        contenu = json.load(f)
    fiches = contenu if isinstance(contenu, list) else [contenu]

    categories, questionnaires, actions, _, _ = contexte(args.staging)
    ids_categories = {c["id"] for c in categories}
    ids_secteurs   = {q["sector_id"] for q in questionnaires}
    ids_actions    = {a["id"] for a in actions}
    secteurs_par_action = {a["id"]: set(a.get("secteurs", [])) for a in actions}

    rapport, bloquant = [], False
    for fiche in fiches:
        t = args.type or type_de(fiche)
        if t == "mesure":
            e, w = V.verifier_mesure(fiche, ids_categories, ids_secteurs)
        elif t == "prestataire":
            e, w = V.verifier_prestataire(fiche, ids_categories, ids_secteurs, ids_actions, secteurs_par_action)
        elif t == "aide":
            e, w = V.verifier_aide(fiche, ids_categories, ids_secteurs, ids_actions, secteurs_par_action)
        else:
            e, w = [f"fiche {fiche.get('id')} : type indeterminable (prefixe ACT_, PREST_ ou AIDE_ attendu)"], []
        bloquant = bloquant or bool(e)
        rapport.append({"id": fiche.get("id"), "type": t, "erreurs": e, "avertissements": w})

    sortie(rapport)
    sys.exit(1 if bloquant else 0)


# ─── naf ──────────────────────────────────────────────────────────────────

NOMENCLATURE_NAF = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                                ".claude", "skills", "nouveau-secteur", "nomenclature_naf.json")


def sans_accents(t):
    return unicodedata.normalize("NFKD", t).encode("ascii", "ignore").decode().lower()


def couverture_naf():
    """Code NAF vers questionnaire qui le couvre, seeds publiés et tous les staging."""
    fichiers = glob.glob(os.path.join(SEEDS, "questionnaire_*.json"))
    fichiers += glob.glob(os.path.join(SEEDS, "staging", "*", "questionnaire_*.json"))
    couverts = {}
    for chemin in fichiers:
        with open(chemin, encoding="utf-8") as f:
            q = json.load(f)
        origine = q["sector_id"] + (" (staging)" if os.sep + "staging" + os.sep in chemin else "")
        for code in q.get("naf_codes", []):
            couverts.setdefault(code, []).append(origine)
    return couverts


def naf(args):
    if not os.path.exists(NOMENCLATURE_NAF):
        print("Nomenclature absente : lancer api/construire_nomenclature_naf.py", file=sys.stderr)
        sys.exit(2)
    with open(NOMENCLATURE_NAF, encoding="utf-8") as f:
        d = json.load(f)
    couverts = couverture_naf()

    def fiche(sc, notes=True):
        r = {"code": sc["code"], "libelle": sc["libelle"], "couvert_par": couverts.get(sc["code"], [])}
        if notes:
            r.update({k: sc[k] for k in ("comprend", "comprend_aussi", "ne_comprend_pas") if sc[k]})
        return r

    def hierarchie(sc):
        return {
            "section":  f"{sc['section']} : {d['sections'][sc['section']]}",
            "division": f"{sc['division']} : {d['divisions'][sc['division']]}",
            "groupe":   f"{sc['groupe']} : {d['groupes'][sc['groupe']]}",
            "classe":   f"{sc['classe']} : {d['classes'][sc['classe']]}",
        }

    if args.chercher:
        mots = [sans_accents(m) for m in args.chercher]
        trouves = []
        for sc in d["sous_classes"]:
            corpus = sans_accents(" ".join([sc["libelle"], d["classes"][sc["classe"]], *sc["comprend"], *sc["comprend_aussi"]]))
            if all(m in corpus for m in mots):
                trouves.append({**fiche(sc, notes=False), "division": hierarchie(sc)["division"]})
        sortie({"recherche": args.chercher, "resultats": trouves})
        sys.exit(0 if trouves else 1)

    if not args.code:
        print("Donner un code (10.51C), un préfixe (10, 10.5, 10.51) ou --chercher", file=sys.stderr)
        sys.exit(2)
    code = args.code.upper()
    exact = next((sc for sc in d["sous_classes"] if sc["code"] == code), None)
    if exact:
        voisins = [sc for sc in d["sous_classes"] if sc[args.voisins] == exact[args.voisins] and sc is not exact]
        sortie({
            **fiche(exact),
            **hierarchie(exact),
            f"voisins_meme_{args.voisins}": [fiche(sc, notes=args.notes) for sc in voisins],
            "source": d["source"],
        })
        return
    sous = [sc for sc in d["sous_classes"] if sc["code"].startswith(code)]
    if not sous:
        print(f"Aucune sous-classe NAF ne commence par '{code}'", file=sys.stderr)
        sys.exit(1)
    sortie({"prefixe": code, "sous_classes": [{**fiche(sc, notes=args.notes), "classe": hierarchie(sc)["classe"]} for sc in sous]})


# ─── main ─────────────────────────────────────────────────────────────────

def main():
    p = argparse.ArgumentParser(description="Outils de rédaction des fiches du référentiel")
    sub = p.add_subparsers(dest="commande", required=True)

    s = sub.add_parser("lister-mesures", help="catalogue des mesures visibles par un secteur")
    s.add_argument("secteur")
    s.add_argument("--staging", action="store_true", help="inclure api/seeds/staging/<secteur>/")
    s.set_defaults(fn=lister_mesures)

    s = sub.add_parser("rechercher-entreprise", help="API Recherche d'entreprises (SIRENE)")
    s.add_argument("--nom", required=True)
    s.add_argument("--dept", help="code departement, ex. 79")
    s.add_argument("--max", type=int, default=5)
    s.set_defaults(fn=rechercher_entreprise)

    s = sub.add_parser("verifier-url", help="teste que des URL repondent")
    s.add_argument("urls", nargs="+")
    s.set_defaults(fn=verifier_url)

    s = sub.add_parser("logo", help="depose le logo d'une fiche sur Cloudinary, renvoie logo_url")
    s.add_argument("id", help="id de la fiche, sert de nom de fichier (PREST_TRA_001)")
    s.add_argument("source", help="URL de l'image sur le site de la structure, ou chemin local")
    s.set_defaults(fn=logo)

    s = sub.add_parser("verifier-fiche", help="controle une fiche JSON (ou une liste)")
    s.add_argument("fichier")
    s.add_argument("--type", choices=["mesure", "prestataire", "aide"])
    s.add_argument("--staging", metavar="SECTEUR", help="contexte : seeds + staging de ce secteur")
    s.set_defaults(fn=verifier_fiche)

    s = sub.add_parser("naf", help="nomenclature NAF rév. 2 : code, voisins, couverture, recherche")
    s.add_argument("code", nargs="?", help="sous-classe (10.51C) ou préfixe (10, 10.5, 10.51)")
    s.add_argument("--voisins", choices=["classe", "groupe", "division", "section"], default="division",
                   help="périmètre des voisins d'une sous-classe (défaut : division)")
    s.add_argument("--notes", action="store_true", help="notes explicatives des voisins aussi")
    s.add_argument("--chercher", nargs="+", metavar="MOT", help="mots présents dans le libellé ou les notes")
    s.set_defaults(fn=naf)

    args = p.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
