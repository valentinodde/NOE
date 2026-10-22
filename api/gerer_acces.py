"""
Amorçage et dépannage des accès à Noé, sans passer par la console d'admin
(qui exige déjà d'être admin).

    conda run -n noe-env python api/gerer_acces.py organisation "Hydros Consulting" hydros-consulting.com
    conda run -n noe-env python api/gerer_acces.py admin valentin.odde@hydros-consulting.com
    conda run -n noe-env python api/gerer_acces.py lister

`organisation` crée l'organisation, ou remplace ses domaines si le nom existe déjà.
`admin` passe l'adresse admin (l'utilisateur est créé s'il ne s'est jamais connecté).
"""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import auth_processor as AUTH


def main(args):
    AUTH.creer_tables()
    commande = args[0] if args else "lister"

    if commande == "organisation" and len(args) >= 3:
        nom, domaines = args[1], args[2:]
        existante = next((o for o in AUTH.lister_organisations() if o["nom"].lower() == nom.lower()), None)
        if existante:
            AUTH.modifier_organisation(existante["id"], {"domaines": domaines, "actif": True})
            print(f"{nom} : domaines remplacés par {', '.join(domaines)}")
        else:
            AUTH.creer_organisation(nom, domaines)
            print(f"{nom} créée avec {', '.join(domaines)}")

    elif commande == "admin" and len(args) == 2:
        print(f"{AUTH.definir_admin(args[1])} est admin")

    elif commande == "lister":
        for o in AUTH.lister_organisations():
            etat = "" if o["actif"] else " (désactivée)"
            print(f"{o['nom']}{etat} : {', '.join(o['domaines'])}, {o['nb_utilisateurs']} utilisateur(s)")
        admins = [u["email"] for u in AUTH.lister_utilisateurs() if u["admin"]]
        print(f"Admins : {', '.join(admins) or 'aucun'}")

    else:
        print(__doc__)
        return 1
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main(sys.argv[1:]))
    except AUTH.ErreurAcces as e:
        print(e.message)
        sys.exit(1)
