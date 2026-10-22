"""
Assemble le document de revue d'un secteur en staging : tout ce qu'un relecteur
doit voir, dans un seul fichier Markdown, `api/seeds/staging/<secteur>/revue.md`.

Contenu, dans l'ordre : périmètre, note de profil (01_profil.md si présente),
questions avec options et barèmes, filtres, mesures, rapport de simulation
(rapport_simulation.md si présent), rapport de couverture (rapport_couverture.md
si présent), fiches prestataires et aides avec leurs sources.

    conda run -n noe-env python api/revue_staging.py industrie_agro
"""

import argparse
import json
import os
import sys

from ingest_referentiel import dossier_staging, lire_motif
from referentiel_verif import liens_mesures


def lire_si_present(chemin):
    if os.path.isfile(chemin):
        with open(chemin, encoding="utf-8") as f:
            return f.read().strip()
    return None


def fiches_secteur(motif, staging, secteur):
    """Les fiches du staging du secteur (pas les seeds publiés)."""
    fiches = []
    for nom, contenu in lire_motif(motif, staging):
        if os.path.isfile(os.path.join(staging, nom)):
            fiches.extend(contenu)
    return [f for f in fiches if not f.get("secteurs") or secteur in f["secteurs"]]


def bloc_sources(fiche):
    lignes = []
    for s in fiche.get("sources", []):
        extrait = f" · « {s['extrait']} »" if s.get("extrait") else ""
        lignes.append(f"  - {s.get('champ')} : {s.get('url')} ({s.get('date', 'sans date')}){extrait}")
    return lignes or ["  - aucune source"]


def main():
    p = argparse.ArgumentParser()
    p.add_argument("secteur")
    args = p.parse_args()

    staging = dossier_staging(args.secteur)
    if not os.path.isdir(staging):
        print(f"Dossier de staging introuvable : {staging}", file=sys.stderr)
        sys.exit(2)

    questionnaires = [q for _, q in lire_motif("questionnaire_*.json", staging)]
    q = next((x for x in questionnaires if x["sector_id"] == args.secteur), None)
    actions = fiches_secteur("actions_*.json", staging, args.secteur)
    prestataires = fiches_secteur("prestataires_*.json", staging, args.secteur)
    aides = fiches_secteur("aides_*.json", staging, args.secteur)

    out = []
    w = out.append
    w(f"# Revue du référentiel : {q['sector_label'] if q else args.secteur}")
    w("")
    w("Document assemblé automatiquement depuis le staging. Tout est en statut brouillon "
      "tant que la promotion n'a pas eu lieu.")
    w("")

    if q:
        w("## Périmètre")
        w("")
        w(f"- Secteur : `{q['sector_id']}` ({q['sector_label']})")
        w(f"- Codes NAF ({len(q.get('naf_codes', []))}) : {', '.join(q.get('naf_codes', []))}")
        w("")

    profil = lire_si_present(os.path.join(staging, "01_profil.md"))
    if profil:
        w("## Profil eau du secteur")
        w("")
        w(profil)
        w("")

    if q:
        w("## Questions")
        w("")
        themes = {t["id"]: t["label"] for t in q.get("themes", [])}
        for question in sorted(q["questions"], key=lambda x: x["order"]):
            cond = f" · condition : `{json.dumps(question['condition'], ensure_ascii=False)}`" if question.get("condition") else ""
            w(f"### {question['order']}. {question['text']}")
            w("")
            w(f"`{question['id']}` · {question['type']} · {themes.get(question.get('theme'), question.get('theme'))}"
              + (f" · classe `{question['class']}`" if question.get("class") else "") + cond)
            w("")
            if question["type"] == "numeric":
                inp = question.get("input", {})
                sc = (question.get("scoring") or {}).get("if_filled", {})
                w(f"- Saisie en {inp.get('unit', '?')}, de {inp.get('min')} à {inp.get('max')} · "
                  f"si renseignée : maturité {sc.get('maturity_score')}, concernement {sc.get('concern_score')}, "
                  f"topics {sc.get('topics', [])}")
            else:
                w("| Option | id | Maturité | Concernement | Topics |")
                w("|---|---|---|---|---|")
                for o in question.get("options", []):
                    w(f"| {o['text']} | `{o['id']}` | {o['maturity_score']} | {o['concern_score']} | {', '.join(o.get('topics', [])) or ''} |")
            w("")

        w("## Filtres du plan d'action")
        w("")
        config = q.get("action_plan_config", {})
        w("| Filtre | Règle | Type | Effet | Priorité | Mesures |")
        w("|---|---|---|---|---|---|")
        for f in config.get("filters", []):
            w(f"| `{f['id']}` | {f.get('description', '')} | {f['type']} | {f['effect']} | {f.get('priority', 0)} | {', '.join(f.get('measures', []))} |")
        if config.get("always_include"):
            w(f"\nToujours incluses : {', '.join(config['always_include'])}")
        if config.get("never_include"):
            w(f"\nJamais incluses : {', '.join(config['never_include'])}")
        w("")

    if actions:
        w("## Mesures")
        w("")
        for a in actions:
            w(f"### {a['id']} · {a['titre']}")
            w("")
            w(f"*{a.get('titre_court', '')}* · {a['categorie']} · secteurs {a.get('secteurs') or 'tous'} · "
              f"impact {a['impact_eau']} · facilité {a['facilite']} · {a['horizon']} · "
              f"effort {json.dumps(a.get('effort', {}), ensure_ascii=False)} · statut {a.get('statut', 'brouillon')}")
            w("")
            w(a["description"])
            w("")
            for i in a.get("infos_complementaires", []):
                lien = f" ({i['lien']})" if i.get("lien") else ""
                w(f"- **{i['type']}** : {i['texte']}{lien}")
            if a.get("sources"):
                w("- Sources :")
                out.extend(bloc_sources(a))
            w("")

    simulation = lire_si_present(os.path.join(staging, "rapport_simulation.md"))
    if simulation:
        w("## Simulation")
        w("")
        w(simulation.replace("\n# ", "\n### ").replace("\n## ", "\n### "))
        w("")

    couverture = lire_si_present(os.path.join(staging, "rapport_couverture.md"))
    if couverture:
        w("## Couverture par les solutions")
        w("")
        w(couverture.replace("\n# ", "\n### ").replace("\n## ", "\n### "))
        w("")

    for titre, fiches in (("Prestataires", prestataires), ("Aides", aides)):
        if not fiches:
            continue
        w(f"## {titre}")
        w("")
        for f in fiches:
            w(f"### {f['id']} · {f['nom']}")
            w("")
            meta = [f.get("type"), f"secteurs {f.get('secteurs') or 'tous'}",
                    f"départements {f.get('departements') or 'national'}"]
            if "agences" in f:
                meta.append(f"agences {f.get('agences') or 'toutes'}")
            meta.append(f"statut {f.get('statut', 'brouillon')}")
            w(" · ".join(str(m) for m in meta))
            w("")
            if f.get("financeur"):
                w(f"Financeur : {f['financeur']} · {f.get('taux') or '?'} · plafond {f.get('plafond') or '?'}")
                w("")
            w(f.get("description", ""))
            w("")
            if f.get("eligibilite"):
                w(f"Éligibilité : {f['eligibilite']}")
                w("")
            liens = liens_mesures(f)
            if liens:
                w("- Mesures : " + ", ".join(f"{m}" + (f" [{'+'.join(r)}]" if r else "") for m, r in liens))
            for c in f.get("contacts", []):
                w(f"- {c['type']} : {c['value']}")
            for i in f.get("infos_complementaires", []):
                lien = f" ({i['lien']})" if i.get("lien") else ""
                w(f"- **{i['type']}** : {i['texte']}{lien}")
            w("- Sources :")
            out.extend(bloc_sources(f))
            w("")

    chemin = os.path.join(staging, "revue.md")
    with open(chemin, "w", encoding="utf-8") as f:
        f.write("\n".join(out) + "\n")
    print(f"Revue écrite : {chemin} ({len(out)} lignes)")


if __name__ == "__main__":
    main()
