"""
Construit la nomenclature NAF rév. 2 (732 sous-classes) avec libellés des cinq
niveaux et notes explicatives INSEE (comprend, comprend aussi, ne comprend
pas), pour le skill nouveau-secteur.

Sources : la liste officielle des codes (naf2008_5_niveaux.xls) et la page de
chaque sous-classe sur insee.fr/fr/metadonnees/nafr2. La nomenclature ne bouge
pas d'une année sur l'autre : à relancer seulement si l'INSEE la révise.

    conda run -n noe-env python api/construire_nomenclature_naf.py

Écrit dans .claude/skills/nouveau-secteur/ :
- nomenclature_naf.json : lu par `outils_fiches.py naf`
- nomenclature_naf.md   : la même chose en texte, pour une recherche par Grep
"""

import io
import json
import os
import re
import sys
import time

import pandas as pd
import requests
from bs4 import BeautifulSoup


RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOSSIER_SKILL = os.path.join(RACINE, ".claude", "skills", "nouveau-secteur")
URL_LISTE = "https://www.insee.fr/fr/statistiques/fichier/2120875/naf2008_5_niveaux.xls"
URL_PAGE = "https://www.insee.fr/fr/metadonnees/nafr2/sousClasse/{}"
PAUSE = 0.25
USER_AGENT = "noe-nomenclature-naf (hydros-consulting)"

BLOCS = {"comprend": "comprend", "comprend-aussi": "comprend_aussi", "comprend-pas": "ne_comprend_pas"}


def texte(noeud):
    return re.sub(r"\s+", " ", noeud.get_text(" ")).replace(" )", ")").replace("( ", "(").strip()


def items(bloc):
    """Puces d'un bloc, les sous-puces préfixées d'un tiret."""
    lignes = []
    for p in bloc.find_all("p"):
        t = texte(p)
        if not t:
            continue
        profondeur = len(p.find_parents("ul"))
        lignes.append(("- " * max(0, profondeur - 1)) + t)
    return lignes


def lire_page(session, code):
    for tentative in range(3):
        try:
            r = session.get(URL_PAGE.format(code), timeout=30)
            if r.status_code == 200:
                return r.text
        except requests.RequestException:
            pass
        time.sleep(3 * (tentative + 1))
    raise RuntimeError(f"page INSEE illisible pour {code}")


def analyser(html):
    soup = BeautifulSoup(html, "html.parser")
    niveaux = {}
    for a in soup.select("ol.fil-ariane-nomenclature li a"):
        m = re.match(r"(Section|Division|Groupe|Classe) (\S+) : (.+)", texte(a))
        if m:
            niveaux[m.group(1).lower()] = (m.group(2), m.group(3))
    titre = texte(soup.select_one("h2.titre-principal"))
    libelle = titre.split(" : ", 1)[1]
    notes = {cle: [] for cle in BLOCS.values()}
    for classe_css, cle in BLOCS.items():
        bloc = soup.select_one(f"#contenu div.{classe_css}")
        if bloc:
            notes[cle] = items(bloc)
    return libelle, niveaux, notes


def main():
    session = requests.Session()
    session.headers["User-Agent"] = USER_AGENT
    liste = pd.read_excel(io.BytesIO(session.get(URL_LISTE, timeout=30).content), dtype=str)
    codes = [c.strip() for c in liste["NIV5"].dropna()]
    print(f"{len(codes)} sous-classes", file=sys.stderr)

    sections, divisions, groupes, classes, sous_classes = {}, {}, {}, {}, []
    for i, code in enumerate(codes, 1):
        libelle, niveaux, notes = analyser(lire_page(session, code))
        for nom, dico in (("section", sections), ("division", divisions), ("groupe", groupes), ("classe", classes)):
            c, l = niveaux[nom]
            dico[c] = l
        sous_classes.append({
            "code": code,
            "libelle": libelle,
            "section": niveaux["section"][0],
            "division": niveaux["division"][0],
            "groupe": niveaux["groupe"][0],
            "classe": niveaux["classe"][0],
            **notes,
        })
        if i % 50 == 0:
            print(f"  {i}/{len(codes)}", file=sys.stderr)
        time.sleep(PAUSE)

    donnees = {
        "source": "INSEE, nomenclature NAF rév. 2 (2008), https://www.insee.fr/fr/information/2120875",
        "date_extraction": time.strftime("%Y-%m-%d"),
        "sections": sections, "divisions": divisions, "groupes": groupes, "classes": classes,
        "sous_classes": sous_classes,
    }
    with open(os.path.join(DOSSIER_SKILL, "nomenclature_naf.json"), "w", encoding="utf-8") as f:
        json.dump(donnees, f, ensure_ascii=False, indent=1)
    with open(os.path.join(DOSSIER_SKILL, "nomenclature_naf.md"), "w", encoding="utf-8") as f:
        f.write(markdown(donnees))
    print("ok", file=sys.stderr)


def markdown(d):
    lignes = [
        "# Nomenclature NAF rév. 2",
        "",
        f"Source : {d['source']}, extraction du {d['date_extraction']}. "
        "Généré par `api/construire_nomenclature_naf.py`, ne pas modifier à la main.",
        "",
        "Une ligne `###` par sous-classe, précédée de sa hiérarchie. "
        "Chercher un code (`10.51C`), un groupe (`Groupe 10.5`) ou un mot du libellé ou des notes.",
        "",
    ]
    courant = {}
    for sc in d["sous_classes"]:
        for niveau, titre, dico in (("section", "#", d["sections"]), ("division", "## Division", d["divisions"])):
            if courant.get(niveau) != sc[niveau]:
                courant[niveau] = sc[niveau]
                prefixe = "# Section" if niveau == "section" else titre
                lignes += [f"{prefixe} {sc[niveau]} : {dico[sc[niveau]]}", ""]
        if courant.get("groupe") != sc["groupe"]:
            courant["groupe"] = sc["groupe"]
            lignes += [f"Groupe {sc['groupe']} : {d['groupes'][sc['groupe']]}", ""]
        if courant.get("classe") != sc["classe"]:
            courant["classe"] = sc["classe"]
            lignes += [f"Classe {sc['classe']} : {d['classes'][sc['classe']]}", ""]
        lignes.append(f"### {sc['code']} : {sc['libelle']}")
        for cle, titre in (("comprend", "Comprend"), ("comprend_aussi", "Comprend aussi"), ("ne_comprend_pas", "Ne comprend pas")):
            if sc[cle]:
                lignes.append(f"{titre} :")
                lignes += [f"  - {t}" if not t.startswith("- ") else f"    {t}" for t in sc[cle]]
        lignes.append("")
    return "\n".join(lignes)


if __name__ == "__main__":
    main()
