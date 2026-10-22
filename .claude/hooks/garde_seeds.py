#!/usr/bin/env python3
"""
Hook PreToolUse (Write, Edit) : interdit l'écriture directe dans les seeds
publiés du référentiel. Tout fichier JSON sous api/seeds/ est protégé, sauf
le staging (api/seeds/staging/...) et les personas (api/seeds/personas/...).

Les seeds publiés ne changent que par api/promouvoir_staging.py, lancé par un
humain. Code de sortie 2 = appel bloqué, message sur stderr.
"""

import json
import os
import sys


def main():
    try:
        entree = json.load(sys.stdin)
    except Exception:
        return 0  # entrée illisible : on ne bloque pas, le flux normal décide

    chemin = (entree.get("tool_input") or {}).get("file_path") or ""
    if not chemin:
        return 0

    normalise = os.path.normpath(chemin).replace(os.sep, "/")
    if "/api/seeds/" not in normalise or not normalise.endswith(".json"):
        return 0
    if "/api/seeds/staging/" in normalise or "/api/seeds/personas/" in normalise:
        return 0

    print(
        f"Écriture refusée : {chemin} est un seed publié du référentiel. "
        "Travaille dans api/seeds/staging/<secteur>/ ; la promotion vers api/seeds/ "
        "passe par api/promouvoir_staging.py, lancé par un humain.",
        file=sys.stderr,
    )
    return 2


if __name__ == "__main__":
    sys.exit(main())
