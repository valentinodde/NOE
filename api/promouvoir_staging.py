"""
Promotion d'un secteur du staging vers les seeds publiés.

    conda run -n noe-env python api/promouvoir_staging.py <secteur> [--publier ID ...] [--publier-tout] [--garder-staging]

Étapes, dans l'ordre, chacune bloquante :
  1. contrôles sur seeds publiés + staging (aucune écriture si une erreur subsiste) ;
  2. copie des fichiers JSON du staging vers api/seeds/ (même nom = remplacement) ;
  3. passage en statut `publie` des ids listés (ou de tout le secteur avec --publier-tout) ;
  4. nouveaux contrôles sur les seeds résultants ;
  5. ingestion en base ;
  6. archivage des notes (Markdown) dans api/seeds/notes/<secteur>/ et suppression du staging.

Sans --publier ni --publier-tout, les fiches restent en brouillon : elles sont
en base mais invisibles du front. Aucun commit git : c'est un geste humain.
"""

import argparse
import glob
import json
import os
import shutil
import subprocess
import sys

from ingest_referentiel import SEEDS, charger_seeds, dossier_staging
from referentiel_verif import verifier


MOTIFS = ("questionnaire_*.json", "actions_*.json", "prestataires_*.json", "aides_*.json")


def controler(staging, etape):
    seeds = charger_seeds(staging)
    erreurs, avertissements = verifier(*seeds)
    for w in avertissements:
        print(f"  avertissement : {w}")
    if erreurs:
        print(f"\n{etape} : {len(erreurs)} erreur(s), promotion annulée :")
        for e in erreurs:
            print(f"  - {e}")
        sys.exit(1)
    print(f"{etape} : contrôles passés.")


def main():
    p = argparse.ArgumentParser()
    p.add_argument("secteur")
    p.add_argument("--publier", nargs="*", default=[], metavar="ID",
                   help="ids de mesures, prestataires ou aides à passer en statut publie")
    p.add_argument("--publier-tout", action="store_true",
                   help="publie toutes les fiches des fichiers promus")
    p.add_argument("--garder-staging", action="store_true")
    args = p.parse_args()

    staging = dossier_staging(args.secteur)
    if not os.path.isdir(staging):
        print(f"Dossier de staging introuvable : {staging}")
        sys.exit(2)

    fichiers = [f for motif in MOTIFS for f in sorted(glob.glob(os.path.join(staging, motif)))]
    if not fichiers:
        print("Aucun fichier JSON de référentiel dans le staging.")
        sys.exit(2)

    # 1. Contrôles avant tout mouvement
    controler(staging, "Avant promotion")

    # 2. Copie vers les seeds
    for f in fichiers:
        cible = os.path.join(SEEDS, os.path.basename(f))
        shutil.copyfile(f, cible)
        print(f"  copié : {os.path.basename(f)}")

    # 3. Statuts
    a_publier = set(args.publier)
    if a_publier or args.publier_tout:
        publies, introuvables = [], set(a_publier)
        for f in fichiers:
            if os.path.basename(f).startswith("questionnaire_"):
                continue
            cible = os.path.join(SEEDS, os.path.basename(f))
            with open(cible, encoding="utf-8") as fh:
                fiches = json.load(fh)
            for fiche in fiches:
                if args.publier_tout or fiche.get("id") in a_publier:
                    fiche["statut"] = "publie"
                    publies.append(fiche["id"])
                    introuvables.discard(fiche.get("id"))
            with open(cible, "w", encoding="utf-8") as fh:
                json.dump(fiches, fh, ensure_ascii=False, indent=2)
                fh.write("\n")
        print(f"  publiées : {len(publies)} fiche(s)")
        if introuvables:
            print(f"  ids non trouvés dans les fichiers promus : {sorted(introuvables)}")

    # 4. Contrôles sur le résultat
    controler(None, "Après promotion")

    # 5. Ingestion
    script = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ingest_referentiel.py")
    r = subprocess.run([sys.executable, script], cwd=os.path.dirname(script))
    if r.returncode != 0:
        print("Ingestion en échec : les seeds sont promus mais la base n'est pas à jour.")
        sys.exit(1)

    # 6. Archivage des notes et nettoyage
    notes = os.path.join(SEEDS, "notes", args.secteur)
    os.makedirs(notes, exist_ok=True)
    for f in glob.glob(os.path.join(staging, "*.md")):
        shutil.copyfile(f, os.path.join(notes, os.path.basename(f)))
    if not args.garder_staging:
        shutil.rmtree(staging)
        print(f"Staging supprimé, notes archivées dans {notes}")
    else:
        print(f"Staging conservé, notes copiées dans {notes}")


if __name__ == "__main__":
    main()
