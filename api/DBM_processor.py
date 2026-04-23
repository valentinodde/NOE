import pymongo
from pymongo import ReplaceOne
import os
import datetime
from dotenv import load_dotenv
import certifi
import uuid
from bson import Binary, UuidRepresentation

load_dotenv()


config = {
    'username': os.environ['DB_MG_USERNAME'],
    'password': os.environ['DB_MG_PASSWORD'],
    'base_name': os.environ['DB_MG_BASE_NAME']
}


def get_client():
    url_acess = f"mongodb+srv://{config['username']}:{config['password']}@{config['base_name']}.mongodb.net/?retryWrites=true&w=majority"
    client = pymongo.MongoClient(url_acess, tlsCAFile=certifi.where())
    return client