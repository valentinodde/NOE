"""
Accès à Noé : connexion par code à usage unique envoyé par mail.

Seules les adresses dont le domaine appartient à une organisation active
(table organisations_domaines) reçoivent un code. Le code (6 chiffres,
10 minutes, 5 essais) est stocké haché avec une clé serveur. Une fois vérifié,
il ouvre une session de 30 jours, portée par un cookie HttpOnly dont seul le
haché est en base. Une session n'est valable que tant que l'organisation du
domaine reste active : désactiver une organisation coupe ses accès.

Pas d'énumération des domaines autorisés : la demande de code reçoit la même
réponse, dans le même temps, que le domaine soit connu ou non. Toutes les
demandes sont comptées dans tentatives_acces et les plafonds s'appliquent sans
regarder le domaine. L'envoi part en tâche de fond. La vérification d'un code
répond le même message qu'il soit faux, expiré ou inexistant.

Les tables sont créées au démarrage de l'API (creer_tables, idempotent).
Amorçage de la première organisation et du premier admin : api/gerer_acces.py.
"""

import hashlib
import hmac
import os
import re
import secrets
import threading
import time
import traceback
from contextlib import contextmanager
from datetime import datetime, timedelta

import requests
from psycopg2.extras import RealDictCursor

import DB_processor as DBP


DUREE_CODE = timedelta(minutes=10)
DUREE_SESSION = timedelta(days=30)
ESSAIS_PAR_CODE = 5

# Plafonds des demandes de code. Ils comptent les demandes, que le domaine soit
# autorisé ou non, pour ne rien révéler. Une demande refusée par un plafond
# ne compte que pour celui de l'IP.
DELAI_ENTRE_DEMANDES = timedelta(seconds=60)          # par adresse
DEMANDES_PAR_ADRESSE = [(3, timedelta(minutes=15)), (10, timedelta(days=1))]
DEMANDES_PAR_DOMAINE = (30, timedelta(hours=1))
DEMANDES_PAR_IP = (20, timedelta(hours=1))
# Codes réellement envoyés sur 24 h, sous le quota Mailjet. Une alerte part
# vers AUTH_CONTACT la première fois qu'il est atteint dans la journée.
PLAFOND_ENVOIS_JOUR = int(os.getenv("AUTH_PLAFOND_JOUR", "150"))
# Une adresse dont 3 codes ont été épuisés (5 essais faux) en 24 h ne reçoit
# plus de code pendant 24 h, sans que la réponse change.
CODES_EPUISES_AVANT_BLOCAGE = 3
# Une session vérifiée en base reste en cache ce nombre de secondes : une
# révocation faite par un autre processus prend effet au plus après ce délai.
CACHE_SESSION = 60

COOKIE = "noe_session"
EXPEDITEUR = os.getenv("AUTH_EXPEDITEUR", "acces@noe.hydros-consulting.com")
CONTACT = os.getenv("AUTH_CONTACT", "valentin.odde@hydros-consulting.com")

_SECRET = os.getenv("AUTH_SECRET")

# Messageries grand public : jamais autorisées comme domaine d'organisation
DOMAINES_PUBLICS = {
    "gmail.com", "googlemail.com", "yahoo.fr", "yahoo.com", "hotmail.fr",
    "hotmail.com", "outlook.fr", "outlook.com", "live.fr", "live.com",
    "msn.com", "icloud.com", "me.com", "orange.fr", "wanadoo.fr", "free.fr",
    "sfr.fr", "neuf.fr", "laposte.net", "bbox.fr", "numericable.fr",
    "aol.com", "gmx.fr", "gmx.com", "protonmail.com", "proton.me",
}

RE_EMAIL = re.compile(r"^[a-z0-9._%+'-]+@([a-z0-9-]+(\.[a-z0-9-]+)+)$")
RE_DOMAINE = re.compile(r"^[a-z0-9-]+(\.[a-z0-9-]+)+$")

DDL = """
CREATE TABLE IF NOT EXISTS organisations (
    id            serial PRIMARY KEY,
    nom           text NOT NULL,
    actif         boolean NOT NULL DEFAULT true,
    notes         text NOT NULL DEFAULT '',
    date_creation timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS organisations_domaines (
    domaine         text PRIMARY KEY,
    organisation_id integer NOT NULL REFERENCES organisations(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS utilisateurs (
    email              text PRIMARY KEY,
    admin              boolean NOT NULL DEFAULT false,
    premiere_connexion timestamptz,
    derniere_connexion timestamptz,
    nb_connexions      integer NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS codes_acces (
    id         serial PRIMARY KEY,
    email      text NOT NULL,
    code_hash  text NOT NULL,
    ip         text,
    cree_le    timestamptz NOT NULL DEFAULT now(),
    expire_le  timestamptz NOT NULL,
    tentatives integer NOT NULL DEFAULT 0,
    utilise    boolean NOT NULL DEFAULT false
);
CREATE INDEX IF NOT EXISTS codes_acces_email ON codes_acces (email, cree_le);
CREATE INDEX IF NOT EXISTS codes_acces_ip ON codes_acces (ip, cree_le);
CREATE TABLE IF NOT EXISTS tentatives_acces (
    id       serial PRIMARY KEY,
    email    text NOT NULL,
    domaine  text NOT NULL,
    ip       text,
    resultat text NOT NULL,   -- envoye, inconnu, bloque, limite, plafond
    cree_le  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS tentatives_acces_email ON tentatives_acces (email, cree_le);
CREATE INDEX IF NOT EXISTS tentatives_acces_domaine ON tentatives_acces (domaine, cree_le);
CREATE INDEX IF NOT EXISTS tentatives_acces_ip ON tentatives_acces (ip, cree_le);
CREATE TABLE IF NOT EXISTS sessions (
    jeton_hash        text PRIMARY KEY,
    email             text NOT NULL REFERENCES utilisateurs(email) ON DELETE CASCADE,
    cree_le           timestamptz NOT NULL DEFAULT now(),
    expire_le         timestamptz NOT NULL,
    derniere_activite timestamptz,
    ip                text,
    user_agent        text
);
CREATE INDEX IF NOT EXISTS sessions_email ON sessions (email);
"""


class ErreurAcces(Exception):
    """Refus présentable à l'utilisateur : code machine, message, statut HTTP."""

    def __init__(self, code, message, statut=400, **details):
        super().__init__(message)
        self.code, self.message, self.statut, self.details = code, message, statut, details

    def json(self):
        return {"error": self.code, "message": self.message, **self.details}


@contextmanager
def _curseur():
    conn = DBP.get_conn()
    try:
        with conn, conn.cursor(cursor_factory=RealDictCursor) as cur:
            yield cur
    finally:
        conn.close()


def creer_tables():
    with _curseur() as cur:
        cur.execute(DDL)


def _hash_code(email, code):
    global _SECRET
    if not _SECRET:
        # Sans clé fixe, les codes en cours ne survivent pas à un redémarrage
        print("AUTH_SECRET absent : clé aléatoire pour ce processus", flush=True)
        _SECRET = secrets.token_hex(32)
    return hmac.new(_SECRET.encode(), f"{email}:{code}".encode(), hashlib.sha256).hexdigest()


def _hash_jeton(jeton):
    return hashlib.sha256(jeton.encode()).hexdigest()


def _iso(valeur):
    return valeur.isoformat() if isinstance(valeur, datetime) else valeur


def normaliser_email(email):
    email = (email or "").strip().lower()
    return email if RE_EMAIL.match(email) else None


def normaliser_domaine(domaine):
    domaine = (domaine or "").strip().lower().lstrip("@")
    if not RE_DOMAINE.match(domaine):
        raise ErreurAcces("domaine_invalide", f"« {domaine} » n'est pas un nom de domaine valide.")
    if domaine in DOMAINES_PUBLICS:
        raise ErreurAcces("domaine_public", f"{domaine} est une messagerie grand public. Il ne peut pas identifier une organisation.")
    return domaine


def _organisation_active(cur, email):
    cur.execute(
        """SELECT o.id, o.nom FROM organisations_domaines d
           JOIN organisations o ON o.id = d.organisation_id AND o.actif
           WHERE d.domaine = split_part(%s, '@', 2)""",
        (email,),
    )
    return cur.fetchone()


# ─── Connexion ────────────────────────────────────────────────────────────────

TROP_DE_DEMANDES = "Trop de demandes. Réessayez dans quelques minutes."
CODE_REFUSE = "Code incorrect ou expiré. Vérifiez le dernier code reçu, ou demandez-en un nouveau."


def _compter(cur, colonne, valeur, fenetre, toutes=False):
    """Demandes de `colonne` = `valeur` sur la fenêtre (hors refus par plafond, sauf `toutes`)."""
    cur.execute(
        f"""SELECT count(*) AS n FROM tentatives_acces
            WHERE {colonne} = %s AND cree_le > now() - %s {'' if toutes else "AND resultat <> 'limite'"}""",
        (valeur, fenetre),
    )
    return cur.fetchone()["n"]


def _plafond_atteint(cur, adresse, domaine, ip):
    """Refus à opposer à la demande, ou None. Ne dépend jamais du domaine autorisé ou non."""
    cur.execute(
        """SELECT extract(epoch FROM (max(cree_le) + %s - now())) AS reste FROM tentatives_acces
           WHERE email = %s AND resultat <> 'limite'""",
        (DELAI_ENTRE_DEMANDES, adresse),
    )
    reste = cur.fetchone()["reste"]
    if reste and reste > 0:
        secondes = int(reste) + 1
        return ErreurAcces(
            "trop_tot", f"Patientez {secondes} secondes avant de redemander un code.", 429, attente=secondes,
        )

    plafonds = [("email", adresse, n, f) for n, f in DEMANDES_PAR_ADRESSE]
    plafonds.append(("domaine", domaine, *DEMANDES_PAR_DOMAINE))
    if any(_compter(cur, col, val, fenetre) >= n for col, val, n, fenetre in plafonds):
        return ErreurAcces("trop_de_demandes", TROP_DE_DEMANDES, 429)
    if ip and _compter(cur, "ip", ip, DEMANDES_PAR_IP[1], toutes=True) >= DEMANDES_PAR_IP[0]:
        return ErreurAcces("trop_de_demandes", TROP_DE_DEMANDES, 429)
    return None


def _adresse_bloquee(cur, adresse):
    cur.execute(
        """SELECT count(*) AS n FROM codes_acces
           WHERE email = %s AND tentatives >= %s AND cree_le > now() - interval '1 day'""",
        (adresse, ESSAIS_PAR_CODE),
    )
    return cur.fetchone()["n"] >= CODES_EPUISES_AVANT_BLOCAGE


def _envoyer_en_fond(id_code, adresse, code, envoyer):
    """Envoi hors de la requête : la réponse ne dépend pas de l'existence du domaine."""
    try:
        envoyer(adresse, code)
    except Exception:
        traceback.print_exc()
        with _curseur() as cur:
            cur.execute("DELETE FROM codes_acces WHERE id = %s", (id_code,))
        return
    # Seul le dernier code envoyé reste valable
    with _curseur() as cur:
        cur.execute(
            "UPDATE codes_acces SET utilise = true WHERE email = %s AND id < %s AND NOT utilise",
            (adresse, id_code),
        )


def demander_code(email, ip, envoyer, alerter=None):
    """
    Enregistre la demande et, si le domaine est autorisé et l'adresse non
    bloquée, crée un code transmis en tâche de fond par `envoyer(email, code)`.
    La réponse est la même dans tous les cas, sauf plafond atteint (429).
    `alerter(message)` prévient l'équipe quand le plafond global est atteint.
    """
    adresse = normaliser_email(email)
    if not adresse:
        raise ErreurAcces("adresse_invalide", "Cette adresse mail n'est pas valide.")
    domaine = adresse.split("@", 1)[1]
    refus, a_envoyer, alerte = None, None, False

    with _curseur() as cur:
        # Ménage : codes de plus d'un jour, sessions expirées, tentatives de plus de deux jours
        cur.execute("DELETE FROM codes_acces WHERE cree_le < now() - interval '1 day'")
        cur.execute("DELETE FROM sessions WHERE expire_le < now()")
        cur.execute("DELETE FROM tentatives_acces WHERE cree_le < now() - interval '2 days'")

        refus = _plafond_atteint(cur, adresse, domaine, ip)
        if not refus:
            cur.execute(
                "SELECT count(*) FILTER (WHERE resultat = 'envoye') AS envoyes, "
                "count(*) FILTER (WHERE resultat = 'plafond') AS alertes "
                "FROM tentatives_acces WHERE cree_le > now() - interval '1 day'"
            )
            jour = cur.fetchone()
            if jour["envoyes"] >= PLAFOND_ENVOIS_JOUR:
                refus = ErreurAcces("service_sature", TROP_DE_DEMANDES, 429)
                alerte = jour["alertes"] == 0

        if refus:
            resultat = "plafond" if refus.code == "service_sature" else "limite"
        elif not _organisation_active(cur, adresse):
            resultat = "inconnu"
        elif _adresse_bloquee(cur, adresse):
            resultat = "bloque"
        else:
            resultat = "envoye"
            code = f"{secrets.randbelow(10**6):06d}"
            cur.execute(
                """INSERT INTO codes_acces (email, code_hash, ip, expire_le)
                   VALUES (%s, %s, %s, now() + %s) RETURNING id""",
                (adresse, _hash_code(adresse, code), ip, DUREE_CODE),
            )
            a_envoyer = (cur.fetchone()["id"], adresse, code, envoyer)

        cur.execute(
            "INSERT INTO tentatives_acces (email, domaine, ip, resultat) VALUES (%s, %s, %s, %s)",
            (adresse, domaine, ip, resultat),
        )

    if alerte and alerter:
        threading.Thread(
            target=alerter,
            args=(f"Plafond de {PLAFOND_ENVOIS_JOUR} codes d'accès Noé envoyés en 24 h atteint. "
                  "Les nouvelles demandes sont refusées jusqu'à ce que le compteur redescende.",),
            daemon=True,
        ).start()
    if refus:
        raise refus
    if a_envoyer:
        threading.Thread(target=_envoyer_en_fond, args=a_envoyer, daemon=True).start()
    return {"email": adresse, "validite_minutes": int(DUREE_CODE.total_seconds() // 60), "contact": CONTACT}


def verifier_code(email, code, ip=None, user_agent=None):
    """Vérifie le dernier code de `email`. Renvoie (jeton de session, utilisateur)."""
    adresse = normaliser_email(email)
    code = re.sub(r"\D", "", code or "")
    refus = None

    with _curseur() as cur:
        cur.execute(
            """SELECT id, code_hash, tentatives FROM codes_acces
               WHERE email = %s AND NOT utilise AND expire_le > now()
               ORDER BY id DESC LIMIT 1 FOR UPDATE""",
            (adresse,),
        )
        ligne = cur.fetchone() if adresse else None

        # Même refus que le code soit faux, expiré ou inexistant : un code
        # inexistant trahirait une adresse dont le domaine n'est pas autorisé
        code_refuse = ErreurAcces("code_invalide", CODE_REFUSE, 401)
        if not ligne:
            refus = code_refuse
        elif not hmac.compare_digest(ligne["code_hash"], _hash_code(adresse, code)):
            tentatives = ligne["tentatives"] + 1
            cur.execute(
                "UPDATE codes_acces SET tentatives = %s, utilise = %s WHERE id = %s",
                (tentatives, tentatives >= ESSAIS_PAR_CODE, ligne["id"]),
            )
            refus = code_refuse
        else:
            cur.execute("UPDATE codes_acces SET utilise = true WHERE id = %s", (ligne["id"],))
            organisation = _organisation_active(cur, adresse)
            if not organisation:
                refus = ErreurAcces("organisation_inconnue", "Votre organisation n'a pas encore accès à Noé.", 403, contact=CONTACT)
            else:
                cur.execute(
                    """INSERT INTO utilisateurs (email, premiere_connexion, derniere_connexion, nb_connexions)
                       VALUES (%s, now(), now(), 1)
                       ON CONFLICT (email) DO UPDATE SET
                           premiere_connexion = coalesce(utilisateurs.premiere_connexion, now()),
                           derniere_connexion = now(),
                           nb_connexions = utilisateurs.nb_connexions + 1
                       RETURNING admin""",
                    (adresse,),
                )
                admin = cur.fetchone()["admin"]
                jeton = secrets.token_urlsafe(32)
                cur.execute(
                    """INSERT INTO sessions (jeton_hash, email, expire_le, derniere_activite, ip, user_agent)
                       VALUES (%s, %s, now() + %s, now(), %s, %s)""",
                    (_hash_jeton(jeton), adresse, DUREE_SESSION, ip, (user_agent or "")[:300]),
                )

    if refus:
        raise refus
    return jeton, {"email": adresse, "admin": admin, "organisation": dict(organisation)}


_cache = {}


def utilisateur_de_la_session(jeton):
    """Utilisateur de la session `jeton`, ou None si elle est absente, expirée ou révoquée."""
    if not jeton:
        return None
    cle = _hash_jeton(jeton)
    trouve = _cache.get(cle)
    if trouve and time.monotonic() - trouve[0] < CACHE_SESSION:
        return trouve[1]

    with _curseur() as cur:
        cur.execute(
            """WITH s AS (
                   UPDATE sessions SET derniere_activite = now()
                   WHERE jeton_hash = %s AND expire_le > now()
                   RETURNING email
               )
               SELECT u.email, u.admin, o.id AS organisation_id, o.nom AS organisation_nom
               FROM s JOIN utilisateurs u USING (email)
               JOIN organisations_domaines d ON d.domaine = split_part(u.email, '@', 2)
               JOIN organisations o ON o.id = d.organisation_id AND o.actif""",
            (cle,),
        )
        ligne = cur.fetchone()

    utilisateur = ligne and {
        "email": ligne["email"],
        "admin": ligne["admin"],
        "organisation": {"id": ligne["organisation_id"], "nom": ligne["organisation_nom"]},
    }
    if utilisateur:
        _cache[cle] = (time.monotonic(), utilisateur)
    else:
        _cache.pop(cle, None)
    return utilisateur


def fermer_session(jeton):
    if not jeton:
        return
    cle = _hash_jeton(jeton)
    _cache.pop(cle, None)
    with _curseur() as cur:
        cur.execute("DELETE FROM sessions WHERE jeton_hash = %s", (cle,))


# ─── Envoi du code ────────────────────────────────────────────────────────────

def envoyer_code_console(email, code):
    """En local : pas de mail, le code s'affiche dans la console de l'API."""
    print(f"\n  Code d'accès Noé pour {email} : {code}\n", flush=True)


def alerte_console(message):
    print(f"\n  ALERTE accès Noé : {message}\n", flush=True)


def _mailjet(destinataire, objet, texte, html=None, custom_id="noe-acces"):
    cle, secret = os.getenv("MAILJET_API_KEY"), os.getenv("MAILJET_API_SECRET")
    if not (cle and secret):
        raise RuntimeError("MAILJET_API_KEY et MAILJET_API_SECRET manquants")
    message = {
        "From": {"Email": EXPEDITEUR, "Name": "Noé by Hydros"},
        "To": [{"Email": destinataire}],
        "ReplyTo": {"Email": CONTACT},
        "Subject": objet,
        "TextPart": texte,
        "CustomID": custom_id,
    }
    if html:
        message["HTMLPart"] = html
    reponse = requests.post(
        "https://api.mailjet.com/v3.1/send",
        auth=(cle.strip(), secret.strip()),
        json={"Messages": [message]},
        timeout=15,
    )
    if reponse.status_code != 200 or reponse.json()["Messages"][0].get("Status") != "success":
        raise RuntimeError(f"Mailjet a refusé l'envoi ({reponse.status_code}) : {reponse.text[:300]}")


def alerte_mailjet(message):
    try:
        _mailjet(CONTACT, "Alerte Noé : plafond des codes d'accès atteint", message, custom_id="noe-alerte")
    except Exception:
        traceback.print_exc()
    alerte_console(message)


def envoyer_code_mailjet(email, code):
    minutes = int(DUREE_CODE.total_seconds() // 60)

    texte = (
        "Bonjour,\n\n"
        f"Voici votre code d'accès à Noé : {code}\n\n"
        f"Il est valable {minutes} minutes et ne sert qu'une fois. "
        "Si vous n'avez pas demandé ce code, ignorez ce message.\n\n"
        "L'équipe Hydros Consulting\n"
    )
    html = f"""\
<div style="font-family:Inter,Arial,sans-serif;background:#f9f9ff;padding:32px 16px">
  <div style="max-width:440px;margin:0 auto;background:#ffffff;border-radius:16px;padding:32px">
    <p style="margin:0 0 4px;font-size:13px;color:#44474f">Noé by Hydros</p>
    <h1 style="margin:0 0 20px;font-size:22px;color:#000a43;letter-spacing:-0.02em">Votre code d'accès</h1>
    <p style="margin:0 0 20px;font-size:14px;color:#181c22;line-height:1.6">Saisissez ce code sur la page de connexion de Noé.</p>
    <p style="margin:0 0 20px;padding:16px;background:#f1f3fc;border-radius:12px;text-align:center;font-size:30px;font-weight:700;letter-spacing:0.3em;color:#000a43">{code}</p>
    <p style="margin:0;font-size:13px;color:#44474f;line-height:1.6">Il est valable {minutes} minutes et ne sert qu'une fois. Si vous n'avez pas demandé ce code, ignorez ce message.</p>
  </div>
</div>"""

    _mailjet(email, f"Votre code d'accès Noé : {code}", texte, html, custom_id="noe-code-acces")


# ─── Console d'admin ──────────────────────────────────────────────────────────

def _vider_cache():
    """Après un changement de droits, les sessions sont revérifiées en base."""
    _cache.clear()


def lister_organisations():
    with _curseur() as cur:
        cur.execute(
            """SELECT o.id, o.nom, o.actif, o.notes, o.date_creation,
                      coalesce(array_agg(d.domaine ORDER BY d.domaine) FILTER (WHERE d.domaine IS NOT NULL), '{}') AS domaines,
                      (SELECT count(*) FROM utilisateurs u JOIN organisations_domaines d2
                         ON d2.domaine = split_part(u.email, '@', 2) WHERE d2.organisation_id = o.id) AS nb_utilisateurs
               FROM organisations o
               LEFT JOIN organisations_domaines d ON d.organisation_id = o.id
               GROUP BY o.id ORDER BY lower(o.nom)"""
        )
        return [{**l, "date_creation": _iso(l["date_creation"])} for l in cur.fetchall()]


def _ecrire_domaines(cur, organisation_id, domaines):
    domaines = sorted({normaliser_domaine(d) for d in domaines if d and d.strip()})
    if not domaines:
        raise ErreurAcces("domaines_vides", "Une organisation a besoin d'au moins un domaine.")
    cur.execute(
        """SELECT d.domaine, o.nom FROM organisations_domaines d JOIN organisations o ON o.id = d.organisation_id
           WHERE d.domaine = ANY(%s) AND d.organisation_id <> %s""",
        (domaines, organisation_id),
    )
    pris = cur.fetchone()
    if pris:
        raise ErreurAcces("domaine_pris", f"Le domaine {pris['domaine']} appartient déjà à {pris['nom']}.", 409)
    cur.execute("DELETE FROM organisations_domaines WHERE organisation_id = %s", (organisation_id,))
    cur.executemany(
        "INSERT INTO organisations_domaines (domaine, organisation_id) VALUES (%s, %s)",
        [(d, organisation_id) for d in domaines],
    )


def creer_organisation(nom, domaines, notes="", actif=True):
    nom = (nom or "").strip()
    if not nom:
        raise ErreurAcces("nom_vide", "Le nom de l'organisation est obligatoire.")
    with _curseur() as cur:
        cur.execute(
            "INSERT INTO organisations (nom, notes, actif) VALUES (%s, %s, %s) RETURNING id",
            (nom, (notes or "").strip(), bool(actif)),
        )
        organisation_id = cur.fetchone()["id"]
        _ecrire_domaines(cur, organisation_id, domaines)
    _vider_cache()
    return organisation_id


def modifier_organisation(organisation_id, champs):
    with _curseur() as cur:
        cur.execute("SELECT id FROM organisations WHERE id = %s FOR UPDATE", (organisation_id,))
        if not cur.fetchone():
            raise ErreurAcces("introuvable", "Organisation introuvable.", 404)
        if "nom" in champs:
            nom = (champs["nom"] or "").strip()
            if not nom:
                raise ErreurAcces("nom_vide", "Le nom de l'organisation est obligatoire.")
            cur.execute("UPDATE organisations SET nom = %s WHERE id = %s", (nom, organisation_id))
        if "notes" in champs:
            cur.execute("UPDATE organisations SET notes = %s WHERE id = %s", ((champs["notes"] or "").strip(), organisation_id))
        if "actif" in champs:
            cur.execute("UPDATE organisations SET actif = %s WHERE id = %s", (bool(champs["actif"]), organisation_id))
        if "domaines" in champs:
            _ecrire_domaines(cur, organisation_id, champs["domaines"])
    _vider_cache()


def supprimer_organisation(organisation_id):
    with _curseur() as cur:
        cur.execute("DELETE FROM organisations WHERE id = %s", (organisation_id,))
        if cur.rowcount == 0:
            raise ErreurAcces("introuvable", "Organisation introuvable.", 404)
    _vider_cache()


def lister_utilisateurs():
    with _curseur() as cur:
        cur.execute(
            """SELECT u.email, u.admin, u.premiere_connexion, u.derniere_connexion, u.nb_connexions,
                      o.id AS organisation_id, o.nom AS organisation, o.actif AS organisation_active,
                      (SELECT count(*) FROM sessions s WHERE s.email = u.email AND s.expire_le > now()) AS sessions_actives,
                      (SELECT max(s.derniere_activite) FROM sessions s WHERE s.email = u.email) AS derniere_activite
               FROM utilisateurs u
               LEFT JOIN organisations_domaines d ON d.domaine = split_part(u.email, '@', 2)
               LEFT JOIN organisations o ON o.id = d.organisation_id
               ORDER BY coalesce((SELECT max(s.derniere_activite) FROM sessions s WHERE s.email = u.email),
                                 u.derniere_connexion) DESC NULLS LAST"""
        )
        return [
            {k: _iso(v) for k, v in l.items()}
            for l in cur.fetchall()
        ]


def modifier_admin(email, admin):
    with _curseur() as cur:
        cur.execute("UPDATE utilisateurs SET admin = %s WHERE email = %s", (bool(admin), email))
        if cur.rowcount == 0:
            raise ErreurAcces("introuvable", "Utilisateur introuvable.", 404)
    _vider_cache()


def revoquer_sessions(email):
    with _curseur() as cur:
        cur.execute("DELETE FROM sessions WHERE email = %s", (email,))
        n = cur.rowcount
    _vider_cache()
    return n


def definir_admin(email):
    """Amorçage (gerer_acces.py) : crée l'utilisateur au besoin et le passe admin."""
    adresse = normaliser_email(email)
    if not adresse:
        raise ErreurAcces("adresse_invalide", "Cette adresse mail n'est pas valide.")
    with _curseur() as cur:
        cur.execute(
            """INSERT INTO utilisateurs (email, admin) VALUES (%s, true)
               ON CONFLICT (email) DO UPDATE SET admin = true""",
            (adresse,),
        )
    return adresse
