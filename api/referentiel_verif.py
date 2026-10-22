"""
Contrôles du référentiel questionnaire / plan d'action.

Regroupe les vocabulaires fermés et toutes les vérifications appliquées aux
seeds avant écriture : références croisées, formats, cycle de vie, et logique
du questionnaire (filtres, conditions, couverture des mesures). Utilisé par
ingest_referentiel.py, et prévu pour être appelé fiche par fiche par les
outils de rédaction.

Les fonctions retournent des listes de messages : `erreurs` bloque
l'ingestion, `avertissements` est affiché seulement.
"""

import re


# ─── Vocabulaires ─────────────────────────────────────────────────────────

# Codes département acceptés dans les seeds : métropole (avec la Corse) et
# les cinq départements d'outre-mer. Même format que insee_entreprises.departement.
DEPARTEMENTS = (
    {f"{i:02d}" for i in range(1, 96)} - {"20"}
    | {"2A", "2B", "971", "972", "973", "974", "976"}
)

# Codes des six agences de l'eau, tels que portés par institutional_actors.data.code
AGENCES = {"AEAP", "AERM", "AESN", "AELB", "AEAG", "AERMC"}

TYPES_PRESTATAIRE = {
    "chambre_consulaire", "bureau_etudes", "organisme_technique", "organisme_formation",
    "cooperative", "syndicat_professionnel", "collectivite", "agence_publique",
    "equipementier", "installateur", "solution_numerique", "association",
}

TYPES_AIDE = {"subvention", "pret", "credit_impot", "accompagnement"}

# Entrées de infos_complementaires (mesures et aides)
TYPES_INFO = {"info", "avertissement", "retour_experience", "ressource"}

# Entrées de contacts (prestataires)
TYPES_CONTACT = {"site_internet", "mail", "tel", "adresse", "linkedin"}

# Ce qu'un prestataire fait pour une mesure donnée
ROLES = {"conseil_etude", "travaux", "materiel", "formation", "financement"}

# Cycle de vie d'une fiche : seul `publie` est servi au front.
STATUTS = {"brouillon", "publie"}
STATUT_PAR_DEFAUT = "brouillon"

HORIZONS = {"immediat", "court_terme", "moyen_terme"}
NIVEAUX_EFFORT = {"faible", "moyen", "important"}

# Vocabulaire du moteur front (actionPanEngine.js et questionnaireScoring.js).
TYPES_QUESTION = {"single_choice", "multi_choice", "numeric"}
NIVEAUX_MATURITE = {"novice", "intermediaire", "avance"}
TYPES_FILTRE = {"answer", "class", "numeric", "maturity"}
EFFETS_FILTRE = {"add", "remove"}
OPS_ANSWER   = {"eq", "neq", "in", "nin", "includes", "not_includes", "answered", "not_answered"}
OPS_CLASS    = {"includes", "not_includes", "eq", "all_of"}
OPS_NUMERIC  = {"gt", "lt", "gte", "lte"}
OPS_MATURITY = {"eq", "neq", "in", "nin"}
OPS_CONDITION = {"eq", "neq", "in", "nin"}
SCORE_MAX = 3

SIRET_RE = re.compile(r"^\d{14}$")
DATE_RE  = re.compile(r"^\d{4}-\d{2}-\d{2}$")


# ─── Aides à la lecture ───────────────────────────────────────────────────

def liens_mesures(fiche):
    """
    Normalise le champ `mesures` d'une fiche en [(action_id, roles)].
    Accepte une chaîne ("ACT_AGR_001") ou un objet ({"id": ..., "roles": [...]}).
    """
    liens = []
    for m in fiche.get("mesures", []):
        if isinstance(m, str):
            liens.append((m, []))
        else:
            liens.append((m["id"], list(m.get("roles", []))))
    return liens


def statut_de(fiche):
    return fiche.get("statut") or STATUT_PAR_DEFAUT


def mesures_visibles(actions, sector_id):
    """Mesures qu'un secteur peut citer : sectorisées pour lui ou transversales."""
    return {a["id"] for a in actions if not a.get("secteurs") or sector_id in a["secteurs"]}


# ─── Contrôles de champs ──────────────────────────────────────────────────

def verifier_infos(libelle, infos):
    erreurs = []
    for i, info in enumerate(infos):
        if info.get("type") not in TYPES_INFO:
            erreurs.append(f"{libelle} : info #{i + 1} de type inconnu '{info.get('type')}'")
        if not info.get("texte"):
            erreurs.append(f"{libelle} : info #{i + 1} sans texte")
        lien = info.get("lien")
        if lien and not lien.startswith("http"):
            erreurs.append(f"{libelle} : info #{i + 1} avec un lien invalide '{lien}'")
    return erreurs


def verifier_contacts(libelle, contacts):
    erreurs = []
    for i, c in enumerate(contacts):
        t, v = c.get("type"), c.get("value")
        if t not in TYPES_CONTACT:
            erreurs.append(f"{libelle} : contact #{i + 1} de type inconnu '{t}'")
        if not v:
            erreurs.append(f"{libelle} : contact #{i + 1} sans valeur")
        elif t in ("site_internet", "linkedin") and not v.startswith("http"):
            erreurs.append(f"{libelle} : contact #{i + 1} n'est pas une URL '{v}'")
        elif t == "mail" and "@" not in v:
            erreurs.append(f"{libelle} : contact #{i + 1} n'est pas un mail '{v}'")
    return erreurs


def verifier_cycle_de_vie(libelle, fiche, sources_attendues):
    """
    statut, sources et date_maj. Retourne (erreurs, avertissements).
    `sources_attendues` : une fiche publiée sans aucune source est signalée.
    """
    erreurs, avertissements = [], []

    statut = statut_de(fiche)
    if statut not in STATUTS:
        erreurs.append(f"{libelle} : statut inconnu '{statut}'")

    date_maj = fiche.get("date_maj")
    if date_maj and not DATE_RE.match(str(date_maj)):
        erreurs.append(f"{libelle} : date_maj invalide '{date_maj}' (attendu AAAA-MM-JJ)")

    sources = fiche.get("sources", [])
    for i, s in enumerate(sources):
        if not s.get("champ"):
            erreurs.append(f"{libelle} : source #{i + 1} sans champ")
        if not str(s.get("url", "")).startswith("http"):
            erreurs.append(f"{libelle} : source #{i + 1} sans URL valide")
        if s.get("date") and not DATE_RE.match(str(s["date"])):
            erreurs.append(f"{libelle} : source #{i + 1} avec une date invalide '{s['date']}'")

    if sources_attendues and statut == "publie" and not sources:
        avertissements.append(f"{libelle} : publiee sans aucune source")

    return erreurs, avertissements


def verifier_fiche(libelle, fiche, ids_categories, ids_secteurs, ids_actions, secteurs_par_action):
    """
    Contrôles communs aux prestataires et aux aides : catégories, secteurs,
    départements, infos complémentaires, mesures liées et cycle de vie.
    Retourne (erreurs, avertissements).
    """
    erreurs, avertissements = [], []

    inconnues = set(fiche.get("categories", [])) - ids_categories
    if inconnues:
        erreurs.append(f"{libelle} : categories inconnues {sorted(inconnues)}")

    inconnus = set(fiche.get("secteurs", [])) - ids_secteurs
    if inconnus:
        erreurs.append(f"{libelle} : secteurs inconnus {sorted(inconnus)}")

    invalides = set(fiche.get("departements", [])) - DEPARTEMENTS
    if invalides:
        erreurs.append(f"{libelle} : codes departement invalides {sorted(invalides)}")

    erreurs.extend(verifier_infos(libelle, fiche.get("infos_complementaires", [])))

    e, w = verifier_cycle_de_vie(libelle, fiche, sources_attendues=True)
    erreurs.extend(e)
    avertissements.extend(w)

    liens = liens_mesures(fiche)
    manquantes = {m for m, _ in liens} - ids_actions
    if manquantes:
        erreurs.append(f"{libelle} : mesures inexistantes {sorted(manquantes)}")
    if len({m for m, _ in liens}) != len(liens):
        erreurs.append(f"{libelle} : mesure liee plusieurs fois")
    for m, roles in liens:
        inconnus = set(roles) - ROLES
        if inconnus:
            erreurs.append(f"{libelle} : roles inconnus sur {m} {sorted(inconnus)}")

    # Une fiche sectorisée liée à une mesure d'un autre secteur ne sera jamais
    # affichée avec elle : incohérence de contenu, pas une erreur bloquante.
    secteurs_fiche = set(fiche.get("secteurs", []))
    if secteurs_fiche:
        for m, _ in liens:
            secteurs_mesure = secteurs_par_action.get(m, set())
            if secteurs_mesure and not (secteurs_mesure & secteurs_fiche):
                avertissements.append(
                    f"{libelle} : liee a {m} (secteurs {sorted(secteurs_mesure)}) "
                    f"hors de ses secteurs {sorted(secteurs_fiche)}"
                )

    return erreurs, avertissements


def verifier_prestataire(p, ids_categories, ids_secteurs, ids_actions, secteurs_par_action):
    libelle = f"prestataire {p['id']}"
    erreurs, avertissements = verifier_fiche(libelle, p, ids_categories, ids_secteurs,
                                             ids_actions, secteurs_par_action)
    if p.get("type") not in TYPES_PRESTATAIRE:
        erreurs.append(f"{libelle} : type inconnu '{p.get('type')}'")
    if p.get("siret") and not SIRET_RE.match(str(p["siret"])):
        erreurs.append(f"{libelle} : siret invalide '{p['siret']}'")
    erreurs.extend(verifier_contacts(libelle, p.get("contacts", [])))
    return erreurs, avertissements


def verifier_aide(aide, ids_categories, ids_secteurs, ids_actions, secteurs_par_action):
    libelle = f"aide {aide['id']}"
    erreurs, avertissements = verifier_fiche(libelle, aide, ids_categories, ids_secteurs,
                                             ids_actions, secteurs_par_action)
    if aide.get("type") not in TYPES_AIDE:
        erreurs.append(f"{libelle} : type inconnu '{aide.get('type')}'")
    inconnues = set(aide.get("agences", [])) - AGENCES
    if inconnues:
        erreurs.append(f"{libelle} : agences inconnues {sorted(inconnues)}")
    return erreurs, avertissements


def verifier_mesure(a, ids_categories, ids_secteurs):
    libelle = f"mesure {a['id']}"
    erreurs, avertissements = [], []

    if a.get("categorie") not in ids_categories:
        erreurs.append(f"{libelle} : categorie inconnue '{a.get('categorie')}'")
    inconnus = set(a.get("secteurs", [])) - ids_secteurs
    if inconnus:
        erreurs.append(f"{libelle} : secteurs inconnus {sorted(inconnus)}")
    if a.get("horizon") not in HORIZONS:
        erreurs.append(f"{libelle} : horizon inconnu '{a.get('horizon')}'")
    for champ in ("impact_eau", "facilite"):
        v = a.get(champ)
        if not isinstance(v, int) or not 1 <= v <= 3:
            erreurs.append(f"{libelle} : {champ} doit etre un entier de 1 a 3")
    for poste, niveau in a.get("effort", {}).items():
        if niveau not in NIVEAUX_EFFORT:
            erreurs.append(f"{libelle} : effort {poste} inconnu '{niveau}'")
    if not a.get("titre_court"):
        avertissements.append(f"{libelle} : sans titre_court (le titre complet sera utilise)")

    erreurs.extend(verifier_infos(libelle, a.get("infos_complementaires", [])))
    e, w = verifier_cycle_de_vie(libelle, a, sources_attendues=False)
    erreurs.extend(e)
    avertissements.extend(w)
    return erreurs, avertissements


# ─── Logique du questionnaire ─────────────────────────────────────────────

def _valeurs(v):
    return v if isinstance(v, list) else [v]


def _verifier_condition(libelle, condition, options_par_question):
    """Condition d'affichage d'une question : and/or récursifs ou test simple."""
    erreurs = []
    if not condition:
        return erreurs
    op = condition.get("operator")
    if op in ("and", "or"):
        for r in condition.get("rules", []):
            erreurs.extend(_verifier_condition(libelle, r, options_par_question))
        return erreurs
    qid = condition.get("questionId")
    if qid not in options_par_question:
        erreurs.append(f"{libelle} : condition sur une question inconnue '{qid}'")
        return erreurs
    if op not in OPS_CONDITION:
        erreurs.append(f"{libelle} : operateur de condition inconnu '{op}'")
        return erreurs
    inconnues = set(_valeurs(condition.get("value"))) - options_par_question[qid]
    if inconnues:
        erreurs.append(f"{libelle} : condition sur des options inconnues de {qid} {sorted(inconnues)}")
    return erreurs


def _verifier_question(prefixe, question, topics):
    erreurs = []
    libelle = f"{prefixe}/{question['id']}"
    qtype = question.get("type")

    if qtype not in TYPES_QUESTION:
        erreurs.append(f"{libelle} : type inconnu '{qtype}'")
        return erreurs
    if not question.get("text"):
        erreurs.append(f"{libelle} : sans texte")

    def verifier_scores(cible, obj):
        for champ in ("maturity_score", "concern_score"):
            v = obj.get(champ)
            if not isinstance(v, int) or not 0 <= v <= SCORE_MAX:
                erreurs.append(f"{cible} : {champ} doit etre un entier de 0 a {SCORE_MAX}")
        inconnus = set(obj.get("topics", [])) - topics
        if inconnus:
            erreurs.append(f"{cible} : topics hors vocabulaire {sorted(inconnus)}")

    if qtype == "numeric":
        if not isinstance(question.get("input"), dict):
            erreurs.append(f"{libelle} : question numerique sans bloc input")
        if_filled = (question.get("scoring") or {}).get("if_filled")
        if not isinstance(if_filled, dict):
            erreurs.append(f"{libelle} : question numerique sans scoring.if_filled")
        else:
            verifier_scores(libelle, if_filled)
        if question.get("options"):
            erreurs.append(f"{libelle} : question numerique avec des options")
        return erreurs

    options = question.get("options", [])
    if len(options) < 2:
        erreurs.append(f"{libelle} : moins de deux options")
    ids = [o.get("id") for o in options]
    if len(set(ids)) != len(ids):
        erreurs.append(f"{libelle} : ids d'option en double")
    for o in options:
        if not o.get("text"):
            erreurs.append(f"{libelle}/{o.get('id')} : option sans texte")
        verifier_scores(f"{libelle}/{o.get('id')}", o)
    return erreurs


def _verifier_filtre(prefixe, f, questions_par_id, options_par_question, classes, visibles):
    erreurs = []
    libelle = f"{prefixe}/filtre {f.get('id')}"
    ftype, op = f.get("type"), f.get("operator")

    if ftype not in TYPES_FILTRE:
        erreurs.append(f"{libelle} : type inconnu '{ftype}'")
        return erreurs
    if f.get("effect") not in EFFETS_FILTRE:
        erreurs.append(f"{libelle} : effet inconnu '{f.get('effect')}'")
    if not isinstance(f.get("priority", 0), int):
        erreurs.append(f"{libelle} : priority doit etre un entier")

    mesures = set(f.get("measures", []))
    if not mesures:
        erreurs.append(f"{libelle} : aucune mesure")
    hors_secteur = mesures - visibles
    if hors_secteur:
        erreurs.append(f"{libelle} : mesures inexistantes ou d'un autre secteur {sorted(hors_secteur)}")

    if ftype == "answer":
        qid = f.get("questionId")
        if qid not in questions_par_id:
            erreurs.append(f"{libelle} : question inconnue '{qid}'")
            return erreurs
        if op not in OPS_ANSWER:
            erreurs.append(f"{libelle} : operateur inconnu '{op}' pour un filtre answer")
        elif op in ("answered", "not_answered"):
            pass
        elif questions_par_id[qid].get("type") == "numeric":
            erreurs.append(f"{libelle} : compare les options d'une question numerique, "
                           f"utiliser un filtre numeric")
        else:
            attendu_liste = op in ("in", "nin")
            if attendu_liste != isinstance(f.get("value"), list):
                erreurs.append(f"{libelle} : operateur {op} attend "
                               f"{'une liste' if attendu_liste else 'une valeur simple'}")
            inconnues = set(_valeurs(f.get("value"))) - options_par_question[qid]
            if inconnues:
                erreurs.append(f"{libelle} : options inconnues de {qid} {sorted(inconnues)}")

    elif ftype == "class":
        cls = f.get("class")
        if cls not in classes:
            erreurs.append(f"{libelle} : classe inconnue '{cls}'")
            return erreurs
        if op not in OPS_CLASS:
            erreurs.append(f"{libelle} : operateur inconnu '{op}' pour un filtre class")
        else:
            if (op == "all_of") != isinstance(f.get("value"), list):
                erreurs.append(f"{libelle} : operateur {op} attend "
                               f"{'une liste' if op == 'all_of' else 'une valeur simple'}")
            inconnues = set(_valeurs(f.get("value"))) - classes[cls]
            if inconnues:
                erreurs.append(f"{libelle} : options inconnues de la classe {cls} {sorted(inconnues)}")

    elif ftype == "numeric":
        qid = f.get("questionId")
        if qid not in questions_par_id:
            erreurs.append(f"{libelle} : question inconnue '{qid}'")
        elif questions_par_id[qid].get("type") != "numeric":
            erreurs.append(f"{libelle} : {qid} n'est pas une question numerique")
        if op not in OPS_NUMERIC:
            erreurs.append(f"{libelle} : operateur inconnu '{op}' pour un filtre numeric")
        if not isinstance(f.get("value"), (int, float)):
            erreurs.append(f"{libelle} : la valeur doit etre un nombre")

    elif ftype == "maturity":
        if op not in OPS_MATURITY:
            erreurs.append(f"{libelle} : operateur inconnu '{op}' pour un filtre maturity")
        if (op in ("in", "nin")) != isinstance(f.get("value"), list):
            erreurs.append(f"{libelle} : operateur {op} attend "
                           f"{'une liste' if op in ('in', 'nin') else 'une valeur simple'}")
        inconnus = set(_valeurs(f.get("value"))) - NIVEAUX_MATURITE
        if inconnus:
            erreurs.append(f"{libelle} : niveaux de maturite inconnus {sorted(inconnus)}")

    return erreurs


def verifier_questionnaire(q, actions):
    """
    Cohérence interne d'un questionnaire et de son constructeur de plan
    d'action, contre la bibliothèque de mesures. Retourne (erreurs, avertissements).
    """
    erreurs, avertissements = [], []
    prefixe = q["sector_id"]
    topics = set(q.get("topics_labels", {}))
    questions = q.get("questions", [])

    if not q.get("naf_codes"):
        erreurs.append(f"{prefixe} : aucun code NAF")
    if not questions:
        erreurs.append(f"{prefixe} : aucune question")
        return erreurs, avertissements

    ids = [question["id"] for question in questions]
    if len(set(ids)) != len(ids):
        erreurs.append(f"{prefixe} : ids de question en double")
    ordres = [question.get("order") for question in questions]
    if len(set(ordres)) != len(ordres):
        erreurs.append(f"{prefixe} : ordres de question en double")

    themes = {t["id"] for t in q.get("themes", [])}
    questions_par_id = {question["id"]: question for question in questions}
    options_par_question = {
        question["id"]: {o["id"] for o in question.get("options", [])} for question in questions
    }
    classes = {}
    for question in questions:
        if question.get("class"):
            classes.setdefault(question["class"], set()).update(options_par_question[question["id"]])

    for question in questions:
        erreurs.extend(_verifier_question(prefixe, question, topics))
        if question.get("theme") and question["theme"] not in themes:
            erreurs.append(f"{prefixe}/{question['id']} : theme inconnu '{question['theme']}'")
        erreurs.extend(_verifier_condition(f"{prefixe}/{question['id']}",
                                           question.get("condition"), options_par_question))

    config = q.get("action_plan_config", {})
    visibles = mesures_visibles(actions, prefixe)
    filtres = config.get("filters", [])

    ids_filtres = [f.get("id") for f in filtres]
    if len(set(ids_filtres)) != len(ids_filtres):
        erreurs.append(f"{prefixe} : ids de filtre en double")
    for f in filtres:
        erreurs.extend(_verifier_filtre(prefixe, f, questions_par_id, options_par_question,
                                        classes, visibles))
    for champ in ("always_include", "never_include"):
        hors = set(config.get(champ, [])) - visibles
        if hors:
            erreurs.append(f"{prefixe}/{champ} : mesures inexistantes ou d'un autre secteur {sorted(hors)}")

    # Couverture : une mesure propre au secteur que rien ne declenche est une
    # erreur de conception ; une transversale non citee est seulement signalee.
    citees = {m for f in filtres for m in f.get("measures", [])} | set(config.get("always_include", []))
    propres = {a["id"] for a in actions if prefixe in a.get("secteurs", [])}
    for m in sorted(propres - citees):
        erreurs.append(f"{prefixe} : mesure {m} propre au secteur mais jamais citee par un filtre")
    transversales_non_citees = (visibles - propres) - citees
    if transversales_non_citees:
        avertissements.append(f"{prefixe} : mesures transversales jamais citees "
                              f"{sorted(transversales_non_citees)}")

    # Une question qui n'alimente aucun filtre et ne porte aucun topic ne
    # sert qu'au score : a verifier, pas interdit.
    alimentent = set()
    for f in filtres:
        if f.get("questionId"):
            alimentent.add(f["questionId"])
        if f.get("type") == "class":
            alimentent.update(qq["id"] for qq in questions if qq.get("class") == f.get("class"))
    for question in questions:
        porte_topics = any(o.get("topics") for o in question.get("options", [])) or bool(
            ((question.get("scoring") or {}).get("if_filled") or {}).get("topics")
        )
        if question["id"] not in alimentent and not porte_topics:
            avertissements.append(f"{prefixe}/{question['id']} : n'alimente aucun filtre et ne porte "
                                  f"aucun topic (n'agit que sur le score)")

    return erreurs, avertissements


# ─── Point d'entrée ───────────────────────────────────────────────────────

def verifier(categories, questionnaires, actions, prestataires, aides):
    """
    Tous les contrôles sur l'ensemble des seeds. Retourne (erreurs, avertissements).
    """
    erreurs, avertissements = [], []
    ids_categories = {c["id"] for c in categories}
    ids_actions    = {a["id"] for a in actions}
    ids_secteurs   = {q["sector_id"] for q in questionnaires}
    secteurs_par_action = {a["id"]: set(a.get("secteurs", [])) for a in actions}

    if len(ids_actions) != len(actions):
        erreurs.append("ids de mesures en double dans les seeds actions_*.json")
    if len(ids_secteurs) != len(questionnaires):
        erreurs.append("sector_id en double dans les seeds questionnaire_*.json")
    for nom, fiches in (("prestataires", prestataires), ("aides", aides)):
        if len({f["id"] for f in fiches}) != len(fiches):
            erreurs.append(f"ids en double dans les seeds {nom}_*.json")

    # Un code NAF ne doit appartenir qu'à un seul questionnaire, sinon la
    # résolution par NAF devient arbitraire.
    naf_vus = {}
    for q in questionnaires:
        for naf in q.get("naf_codes", []):
            if naf in naf_vus and naf_vus[naf] != q["sector_id"]:
                erreurs.append(f"code NAF {naf} present dans {naf_vus[naf]} et {q['sector_id']}")
            naf_vus[naf] = q["sector_id"]

    for a in actions:
        e, w = verifier_mesure(a, ids_categories, ids_secteurs)
        erreurs.extend(e); avertissements.extend(w)

    for p in prestataires:
        e, w = verifier_prestataire(p, ids_categories, ids_secteurs, ids_actions, secteurs_par_action)
        erreurs.extend(e); avertissements.extend(w)

    for aide in aides:
        e, w = verifier_aide(aide, ids_categories, ids_secteurs, ids_actions, secteurs_par_action)
        erreurs.extend(e); avertissements.extend(w)

    for q in questionnaires:
        e, w = verifier_questionnaire(q, actions)
        erreurs.extend(e); avertissements.extend(w)

    sans_mesure = ids_categories - {a["categorie"] for a in actions}
    if sans_mesure:
        avertissements.append(f"categories sans aucune mesure {sorted(sans_mesure)}")

    return erreurs, avertissements
