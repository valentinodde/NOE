
from dotenv import load_dotenv
import os
import io
from datetime import datetime
import pandas as pd


import psycopg2
from psycopg2.extras import execute_values
import math


load_dotenv()
# tz = pytz.timezone("Europe/Paris")
# utc_tz = pytz.timezone("UTC")


host = os.getenv("DB_PG_HOST")
user = os.getenv("DB_PG_USERNAME")
password = os.getenv("DB_PG_PASSWORD")
port = os.getenv("DB_PG_PORT")
name = os.getenv("DB_PG_NAME")


# Construction de l'URL de connexion
DATABASE_URL = f"postgresql://{user}:{password}@{host}:{port}/{name}"


def get_conn():
    conn = psycopg2.connect(
        host=host,
        dbname=name,
        user=user,
        password=password,
        port=port
    )
    return conn



def load_entreprise_data_by_departments(departments):
    conn = get_conn()
    query = """
        SELECT *
        FROM insee_entreprises
        WHERE departement = ANY(%s)
    """

    # Chargement avec pandas
    df = pd.read_sql(query, conn, params=(departments,))
    conn.close()

    return df

def load_entreprise_data_by_siret(siret):
    conn = get_conn()
    query = """
        SELECT *
        FROM insee_entreprises
        WHERE siret = '%s'
    """

    # Chargement avec pandas
    js = pd.read_sql(query, conn, params=(siret,)).to_dict(orient='records')
    conn.close()

    return js