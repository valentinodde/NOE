from flask import Flask, request, jsonify
from flask_cors import CORS

import pandas as pd

import DB_processor as DBP
import uuid
import json

import sys, os


import traceback

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'application/json'

df_data = pd.read_excel('test_data.xlsx')   
    
@app.route('/home', methods=['GET'])
def get_all_buildings():
    return jsonify({"app":"Noé Project"})

@app.route('/siret/<string:entreprise_id>', methods=['GET'])
def get_entreprise_info(entreprise_id):
    entreprise_id = int(entreprise_id)
    entreprise_info = DBP.load_entreprise_data_by_siret(entreprise_id)[0]
    entreprise_info['code_bassin'] = 'X123'  # Ajout du code bassin pour l'exemple
    # entreprise_info = df_data[df_data['siret'] == entreprise_id].to_dict(orient='records')
    if not entreprise_info:
        return jsonify({"error": "Entreprise not found"}), 404
    return jsonify(entreprise_info)


@app.route('/territoire/<string:bassin_id>', methods=['GET'])
def get_territoire_info(bassin_id):
    test_json = json.load(open('territoire_example.json'))
    return jsonify(test_json)

@app.route('/questionnaire/<string:naf>', methods=['GET'])
def get_questionnaire(naf):
    test_json = json.load(open('/db_schemas/api_response_example.json'))
    return jsonify(test_json["_example_response"])


if __name__ == '__main__':
    app.run(debug=True)