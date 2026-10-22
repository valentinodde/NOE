"""
Couverture des mesures d'un secteur par les prestataires et les aides.

Pour chaque mesure visible par le secteur, compte les prestataires et les
aides qui lui sont explicitement liés (champ `mesures` des fiches), dans les
seeds publiés plus le staging du secteur. Liste ce qui n'a rien : c'est la
commande de fiches à rédiger.

Lit les fichiers, pas la base, pour fonctionner avant toute ingestion.

    conda run -n noe-env python api/rapport_couverture.py hotellerie
    conda run -n noe-env python api/rapport_couverture.py industrie_agro --staging [--json rapport.json]

Code de sortie 1 si au moins une mesure n'a ni prestataire ni aide.
"""

import argparse
import json
import os
import sys
from collections import defaultdict

from ingest_referentiel import charger_seeds, dossier_staging
from referentiel_verif import liens_mesures


def main():
    p = argparse.ArgumentParser()
    p.add_argument("secteur")
    p.add_argument("--staging", action="store_true")
    p.add_argument("--json", metavar="FICHIER")
    args = p.parse_args()

    staging = dossier_staging(args.secteur) if args.staging else None
    if staging and not os.path.isdir(staging):
        print(f"Dossier de staging introuvable : {staging}", file=sys.stderr)
        sys.exit(2)

    categories, questionnaires, actions, prestataires, aides = charger_seeds(staging)
    if args.secteur not in {q["sector_id"] for q in questionnaires}:
        print(f"Secteur inconnu '{args.secteur}'", file=sys.stderr)
        sys.exit(2)

    libelles = {c["id"]: c["label"] for c in categories}
    ordre_cat = {c["id"]: c["ordre"] for c in categories}
    visibles = [a for a in actions if not a.get("secteurs") or args.secteur in a["secteurs"]]

    def concerne(fiche):
        return not fiche.get("secteurs") or args.secteur in fiche["secteurs"]

    presta_par_mesure, aide_par_mesure = defaultdict(list), defaultdict(list)
    for pr in prestataires:
        if not concerne(pr):
            continue
        for m, roles in liens_mesures(pr):
            presta_par_mesure[m].append({"id": pr["id"], "nom": pr["nom"], "roles": roles,
                                         "statut": pr.get("statut", "brouillon"),
                                         "local": bool(pr.get("departements"))})
    for ai in aides:
        if not concerne(ai):
            continue
        for m, _ in liens_mesures(ai):
            aide_par_mesure[m].append({"id": ai["id"], "nom": ai["nom"],
                                       "statut": ai.get("statut", "brouillon")})

    lignes = []
    for a in sorted(visibles, key=lambda x: (ordre_cat.get(x["categorie"], 99), x["id"])):
        lignes.append({
            "id":           a["id"],
            "titre_court":  a.get("titre_court") or a["titre"],
            "categorie":    a["categorie"],
            "transversale": not a.get("secteurs"),
            "prestataires": presta_par_mesure.get(a["id"], []),
            "aides":        aide_par_mesure.get(a["id"], []),
        })

    sans_presta = [l for l in lignes if not l["prestataires"]]
    sans_aide   = [l for l in lignes if not l["aides"]]
    sans_rien   = [l for l in lignes if not l["prestataires"] and not l["aides"]]

    # Prestataires et aides du secteur qui ne sont lies a aucune mesure : ils
    # n'apparaissent que par repli de categorie.
    ids_visibles = {a["id"] for a in visibles}
    presta_sans_lien = [pr["id"] for pr in prestataires if concerne(pr)
                        and not any(m in ids_visibles for m, _ in liens_mesures(pr))]
    aides_sans_lien = [ai["id"] for ai in aides if concerne(ai)
                       and not any(m in ids_visibles for m, _ in liens_mesures(ai))]

    out = []
    out.append(f"# Couverture des mesures : {args.secteur}"
               + (" (seeds + staging)" if staging else " (seeds publiés)"))
    out.append("")
    out.append(f"{len(lignes)} mesures visibles · {len(sans_presta)} sans prestataire · "
               f"{len(sans_aide)} sans aide · {len(sans_rien)} sans rien")
    out.append("")
    out.append("| Mesure | Catégorie | Prestataires liés | Aides liées |")
    out.append("|---|---|---|---|")
    for l in lignes:
        ps = ", ".join(f"{p['nom']} [{'+'.join(p['roles']) or 'sans role'}]" for p in l["prestataires"]) or "aucun"
        ai = ", ".join(a["nom"] for a in l["aides"]) or "aucune"
        out.append(f"| {l['id']} {l['titre_court']} | {libelles.get(l['categorie'], l['categorie'])} | {ps} | {ai} |")
    out.append("")

    out.append("## Fiches à rédiger")
    out.append("")
    if not sans_presta and not sans_aide:
        out.append("Toutes les mesures ont au moins un prestataire et une aide.")
    for l in sans_presta:
        out.append(f"- prestataire pour {l['id']} ({l['titre_court']}, {libelles.get(l['categorie'])})")
    for l in sans_aide:
        out.append(f"- aide pour {l['id']} ({l['titre_court']}, {libelles.get(l['categorie'])})")
    out.append("")

    if presta_sans_lien or aides_sans_lien:
        out.append("## Fiches sans lien vers une mesure du secteur (visibles seulement par repli de catégorie)")
        out.append("")
        for i in presta_sans_lien: out.append(f"- prestataire {i}")
        for i in aides_sans_lien:  out.append(f"- aide {i}")
        out.append("")

    print("\n".join(out))

    if args.json:
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump({
                "secteur": args.secteur, "staging": bool(staging),
                "mesures": lignes,
                "sans_prestataire": [l["id"] for l in sans_presta],
                "sans_aide":        [l["id"] for l in sans_aide],
                "prestataires_sans_lien": presta_sans_lien,
                "aides_sans_lien": aides_sans_lien,
            }, f, ensure_ascii=False, indent=2)

    sys.exit(1 if sans_rien else 0)


if __name__ == "__main__":
    main()
