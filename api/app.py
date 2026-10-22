from flask import Flask, Response, request, jsonify, g
from flask_cors import CORS

import pandas as pd

import DB_processor as DBP
import DBM_processor as DBM
import vigieau_processor as VGE
import territoires_processor as TER
import fiches_processor as FIC
import auth_processor as AUTH
import gzip
import uuid
import json

import sys, os


import traceback

# `python app.py` : développement local (codes d'accès affichés dans la console,
# cookie sans Secure). Sous gunicorn : production. En local, le front passe par
# le proxy /api de Vite (vite.config.js) : même origine, pas de CORS.
LOCAL = __name__ == '__main__'

app = Flask(__name__)

# Le cookie de session part avec les requêtes du front : CORS limité à ses origines
ORIGINES = [o.strip() for o in os.getenv('FRONT_ORIGINS', 'https://noe.hydros-consulting.com').split(',') if o.strip()]
cors = CORS(app, origins=ORIGINES, supports_credentials=True)

df_data = pd.read_excel('test_data.xlsx')   

# La carte de la page Vision territoriale (mise de côté, lien retiré du header)
# n'est plus préchauffée au démarrage : elle se calcule au premier appel.

try:
    AUTH.creer_tables()
except Exception:
    traceback.print_exc()


# ─── Contrôle d'accès ─────────────────────────────────────────────────────────

ROUTES_PUBLIQUES = {'/home', '/auth/demander-code', '/auth/verifier-code', '/auth/deconnexion'}


def route_admin():
    """Outils internes : console d'accès, explorateur des fiches, éditeur des secteurs."""
    chemin = request.path
    return chemin.startswith('/admin/') or chemin == '/fiches' or chemin.startswith('/sectors')


@app.before_request
def controler_acces():
    # Les requêtes préliminaires CORS ne portent jamais le cookie
    if request.method == 'OPTIONS':
        return None
    # Toute requête qui modifie quelque chose doit être en JSON : un formulaire
    # ou un appel « simple » venu d'un autre site (même d'un sous-domaine
    # hydros-consulting.com, qui reçoit le cookie) ne peut pas l'envoyer sans
    # passer par la vérification CORS
    if request.method in ('POST', 'PUT', 'PATCH', 'DELETE') and not request.is_json:
        return jsonify({"error": "json_requis"}), 415
    if request.path in ROUTES_PUBLIQUES:
        return None
    try:
        utilisateur = AUTH.utilisateur_de_la_session(request.cookies.get(AUTH.COOKIE))
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "authentification_indisponible"}), 503
    if not utilisateur:
        return jsonify({"error": "non_connecte"}), 401
    if route_admin() and not utilisateur['admin']:
        return jsonify({"error": "reserve_admin"}), 403
    g.utilisateur = utilisateur
    return None


@app.after_request
def entetes_securite(reponse):
    reponse.headers['X-Content-Type-Options'] = 'nosniff'
    reponse.headers['X-Frame-Options'] = 'DENY'
    reponse.headers['Referrer-Policy'] = 'no-referrer'
    if not LOCAL:
        reponse.headers['Strict-Transport-Security'] = 'max-age=31536000'
    return reponse


@app.errorhandler(AUTH.ErreurAcces)
def erreur_acces(e):
    return jsonify(e.json()), e.statut


def ip_client():
    # Le routeur Scalingo ajoute l'adresse réelle en dernier dans X-Forwarded-For
    transmis = request.headers.get('X-Forwarded-For', '')
    return transmis.split(',')[-1].strip() if transmis else request.remote_addr


@app.route('/auth/demander-code', methods=['POST'])
def demander_code():
    corps = request.get_json(silent=True) or {}
    return jsonify(AUTH.demander_code(
        corps.get('email'), ip_client(),
        envoyer=AUTH.envoyer_code_console if LOCAL else AUTH.envoyer_code_mailjet,
        alerter=AUTH.alerte_console if LOCAL else AUTH.alerte_mailjet,
    ))


@app.route('/auth/verifier-code', methods=['POST'])
def verifier_code():
    corps = request.get_json(silent=True) or {}
    jeton, utilisateur = AUTH.verifier_code(
        corps.get('email'), corps.get('code'),
        ip=ip_client(), user_agent=request.headers.get('User-Agent'),
    )
    reponse = jsonify(utilisateur)
    reponse.set_cookie(
        AUTH.COOKIE, jeton,
        max_age=int(AUTH.DUREE_SESSION.total_seconds()),
        httponly=True, secure=not LOCAL, samesite='Lax', path='/',
    )
    return reponse


@app.route('/auth/moi', methods=['GET'])
def moi():
    return jsonify(g.utilisateur)


@app.route('/auth/deconnexion', methods=['POST'])
def deconnexion():
    AUTH.fermer_session(request.cookies.get(AUTH.COOKIE))
    reponse = jsonify({"ok": True})
    reponse.delete_cookie(AUTH.COOKIE, path='/', httponly=True, secure=not LOCAL, samesite='Lax')
    return reponse


# ─── Console d'admin ──────────────────────────────────────────────────────────

@app.route('/admin/organisations', methods=['GET'])
def admin_organisations():
    return jsonify(AUTH.lister_organisations())


@app.route('/admin/organisations', methods=['POST'])
def admin_creer_organisation():
    corps = request.get_json(silent=True) or {}
    organisation_id = AUTH.creer_organisation(
        corps.get('nom'), corps.get('domaines') or [], corps.get('notes'), corps.get('actif', True),
    )
    return jsonify({"id": organisation_id}), 201


@app.route('/admin/organisations/<int:organisation_id>', methods=['PATCH'])
def admin_modifier_organisation(organisation_id):
    corps = request.get_json(silent=True) or {}
    AUTH.modifier_organisation(organisation_id, {k: corps[k] for k in ('nom', 'domaines', 'notes', 'actif') if k in corps})
    return jsonify({"ok": True})


@app.route('/admin/organisations/<int:organisation_id>', methods=['DELETE'])
def admin_supprimer_organisation(organisation_id):
    AUTH.supprimer_organisation(organisation_id)
    return jsonify({"ok": True})


@app.route('/admin/utilisateurs', methods=['GET'])
def admin_utilisateurs():
    return jsonify(AUTH.lister_utilisateurs())


@app.route('/admin/utilisateurs/<string:email>', methods=['PATCH'])
def admin_modifier_utilisateur(email):
    corps = request.get_json(silent=True) or {}
    if 'admin' in corps:
        if email == g.utilisateur['email'] and not corps['admin']:
            return jsonify({"error": "auto_retrait", "message": "Vous ne pouvez pas retirer vos propres droits d'admin."}), 400
        AUTH.modifier_admin(email, corps['admin'])
    return jsonify({"ok": True})


@app.route('/admin/utilisateurs/<string:email>/revoquer', methods=['POST'])
def admin_revoquer(email):
    return jsonify({"sessions_fermees": AUTH.revoquer_sessions(email)})


# ─── Données ──────────────────────────────────────────────────────────────────

@app.route('/home', methods=['GET'])
def get_all_buildings():
    return jsonify({"app":"Noé Project"})

@app.route('/siret/<string:entreprise_id>', methods=['GET'])
def get_entreprise_info(entreprise_id):
    entreprise_id = int(entreprise_id)
    entreprise_info = DBP.load_entreprise_data_by_siret(entreprise_id)[0]
    entreprise_info['code_bassin'] = 'b_2'  # Ajout du code bassin pour l'exemple
    # entreprise_info = df_data[df_data['siret'] == entreprise_id].to_dict(orient='records')
    if not entreprise_info:
        return jsonify({"error": "Entreprise not found"}), 404
    return jsonify(entreprise_info)


@app.route('/territoire/<string:bassin_id>', methods=['GET'])
def get_territoire_info(bassin_id):
    bassin_info = DBP.load_bassin_data(bassin_id)
    if not bassin_info:
        return jsonify({"error": "Bassin not found"}), 404
    return jsonify(bassin_info)


@app.route('/sectors', methods=['GET'])
def get_sectors_list():
    sectors = DBM.load_sectors_list()
    return jsonify(sectors)


@app.route('/sectors/<string:sector_id>', methods=['GET'])
def get_sector(sector_id):
    sector = DBM.load_sector_by_id(sector_id)
    if not sector:
        return jsonify({"error": "Sector not found"}), 404
    return jsonify(sector)


@app.route('/sectors/<string:sector_id>', methods=['PATCH'])
def update_sector(sector_id):
    body = request.get_json()
    if not body:
        return jsonify({"error": "Empty body"}), 400

    updates = DBM.flatten_updates(body)

    invalid = [k for k in updates if k not in DBM.SECTOR_ALLOWED_PATHS]
    if invalid:
        return jsonify({"error": "Forbidden fields", "fields": invalid}), 400

    matched = DBM.update_sector(sector_id, updates)
    if not matched:
        return jsonify({"error": "Sector not found"}), 404

    return jsonify({"updated": list(updates.keys())})


@app.route('/etablissement/<string:siret>', methods=['GET'])
def get_full_etablissement(siret):
    result = DBP.load_full_data_by_siret(siret)
    if not result:
        return jsonify({"error": "Établissement not found"}), 404
    return jsonify(result)


@app.route('/institutional-actors', methods=['GET'])
def get_institutional_actors():
    lat = request.args.get('lat', type=float)
    lon = request.args.get('lon', type=float)
    actor_type = request.args.get('type', default=None)

    if lat is None or lon is None:
        return jsonify({"error": "Paramètres 'lat' et 'lon' requis"}), 400

    actors = DBP.load_institutional_actors_by_point(lat, lon, actor_type)
    return jsonify([{**a['data'], 'geojson': a['geojson']} for a in actors])


@app.route('/vigieau/zones', methods=['GET'])
def get_vigieau_zones():
    """Restrictions sécheresse en vigueur (API VigiEau) au point de l'établissement."""
    lat = request.args.get('lat', type=float)
    lon = request.args.get('lon', type=float)
    commune = request.args.get('commune', default=None)
    profil = request.args.get('profil', default=None)
    naf = request.args.get('naf', default=None)

    if lat is None or lon is None:
        return jsonify({"error": "Paramètres 'lat' et 'lon' requis"}), 400

    try:
        return jsonify(VGE.load_restrictions(lat, lon, commune=commune, profil=profil, naf_code=naf))
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "API VigiEau indisponible"}), 502


@app.route('/restrictions/historique/<string:code_commune>', methods=['GET'])
def get_restrictions_historique(code_commune):
    """Historique annuel des restrictions sécheresse de la commune (jours par niveau)."""
    annee_debut = request.args.get('depuis', type=int)
    try:
        return jsonify(DBP.load_restrictions_history(code_commune, annee_debut=annee_debut))
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "Historique indisponible"}), 500


@app.route('/aides/exemples', methods=['GET'])
def get_aides_exemples():
    """
    Retours d'expérience : aides des agences de l'eau accordées à des
    bénéficiaires du même secteur (NAF) ou engagés dans le même type d'action.
    Paramètres : naf (requis), lat, lon (agence de l'eau), dept, categories
    (liste séparée par des virgules), limit, siren (les aides de l'entreprise
    elle-même sont renvoyées à part).
    """
    naf = request.args.get('naf')
    if not naf:
        return jsonify({"error": "Paramètre 'naf' requis"}), 400

    categories = [c for c in request.args.get('categories', '').split(',') if c]
    limit = min(request.args.get('limit', default=6, type=int), 24)

    try:
        return jsonify(DBP.load_aides_exemples(
            naf,
            lat=request.args.get('lat', type=float),
            lon=request.args.get('lon', type=float),
            dept=request.args.get('dept'),
            categories=categories,
            limit=limit,
            siren=request.args.get('siren'),
        ))
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "Exemples d'aides indisponibles"}), 500


@app.route('/agences-eau/contours', methods=['GET'])
def get_contours_agences():
    """Contours simplifiés des six bassins des agences de l'eau (fond de carte)."""
    try:
        return jsonify(DBP.load_contours_agences())
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "Contours indisponibles"}), 500


@app.route('/territoires/bassins', methods=['GET'])
def get_carte_bassins():
    """
    Page Vision territoriale : les bassins versants de métropole (contours
    simplifiés) avec leurs indicateurs par horizon. Calculé une fois par
    processus et servi compressé (environ 2 Mo de JSON).
    """
    try:
        corps = TER.carte_bassins_gzip()
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "Carte des bassins indisponible"}), 500

    if 'gzip' in request.headers.get('Accept-Encoding', ''):
        reponse = Response(corps, mimetype='application/json')
        reponse.headers['Content-Encoding'] = 'gzip'
        reponse.headers['Vary'] = 'Accept-Encoding'
    else:
        reponse = Response(gzip.decompress(corps), mimetype='application/json')
    reponse.headers['Cache-Control'] = 'public, max-age=3600'
    return reponse


@app.route('/territoires/communes', methods=['GET'])
def get_communes_territoire():
    """Recherche de commune (nom ou code INSEE), avec le bassin qui la contient."""
    try:
        return jsonify(TER.rechercher_communes(request.args.get('q', '')))
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "Recherche indisponible"}), 500


@app.route('/territoires/activite', methods=['GET'])
def get_activite_territoire():
    """
    Emplois estimés et activités dépendantes de l'eau d'un ensemble de bassins
    (paramètre bassins, identifiants séparés par des virgules ; tous si absent).
    """
    bassins = [b for b in request.args.get('bassins', '').split(',') if b]
    try:
        return jsonify(TER.load_activite(bassins or None, limite=request.args.get('limit', default=8, type=int)))
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "Activité indisponible"}), 500


@app.route('/questionnaire/<string:naf>', methods=['GET'])
def get_questionnaire(naf):
    """
    Référentiel de secteur pour un code NAF : questionnaire, questions,
    catégories, mesures visibles par le secteur et configuration du plan
    d'action. 404 si aucun questionnaire ne couvre ce code NAF.
    """
    try:
        referentiel = DBP.load_referentiel_by_naf(naf)
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "Référentiel indisponible"}), 500

    if not referentiel:
        return jsonify({"error": "Aucun questionnaire pour ce code NAF", "naf": naf}), 404

    return jsonify(referentiel)


@app.route('/solutions', methods=['GET'])
def get_solutions():
    """
    Prestataires et aides pour un secteur (naf, requis), un département (dept)
    et une agence de l'eau (résolue depuis lat/lon), chacun avec les mesures
    auxquelles il est lié. Sans dept, seules les fiches nationales sortent ;
    sans lat/lon, seules les aides valables dans toutes les agences.
    404 si aucun questionnaire ne couvre ce code NAF.
    """
    naf = request.args.get('naf')
    if not naf:
        return jsonify({"error": "Paramètre 'naf' requis"}), 400

    try:
        solutions = DBP.load_solutions(
            naf,
            dept=request.args.get('dept'),
            lat=request.args.get('lat', type=float),
            lon=request.args.get('lon', type=float),
        )
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "Solutions indisponibles"}), 500

    if not solutions:
        return jsonify({"error": "Aucun questionnaire pour ce code NAF", "naf": naf}), 404

    return jsonify(solutions)


@app.route('/fiches', methods=['GET'])
def get_fiches():
    """
    Toutes les fiches prestataires et aides, lues dans les seeds publiés et le
    staging (page d'exploration /fiches), avec catégories, secteurs et mesures
    pour les libellés. Chaque fiche porte `edition` : provenance, versions,
    verdict du contrôleur et contrôles du référentiel.
    """
    try:
        return jsonify(FIC.load_fiches())
    except Exception:
        traceback.print_exc()
        return jsonify({"error": "Fiches indisponibles"}), 500


if __name__ == '__main__':
    app.run(debug=True, port=int(os.getenv('PORT', 5000)))