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
    url_acess = f"mongodb+srv://{config['username']}:{config['password']}@{config['base_name']}.mongodb.net/?appName=noe-hydros&retryWrites=true&w=majority"
    client = pymongo.MongoClient(url_acess, tlsCAFile=certifi.where())
    return client



# read db functions

def load_sector(sector_id):
    client = get_client()
    db = client["noe_db"]
    collection = db["sectors"]
    sector_data = collection.find_one({"sector_id": sector_id})
    return sector_data

def load_bassin(bassin_id):
    client = get_client()
    db = client["noe_db"]
    collection = db["bassins"]
    bassin_data = collection.find_one({"_id": bassin_id})
    return bassin_data


SECTOR_ALLOWED_PATHS = {
    "to_check", "reviewed", "label", "description",
    "water_risk.quantity", "water_risk.quality",
    "upstream.sentence",
    "upstream.quantity.level", "upstream.quantity.description", "upstream.quantity.final_score",
    "upstream.quality.level", "upstream.quality.description", "upstream.quality.final_score",
    "operations.sentence",
    "operations.quantity.level", "operations.quantity.description", "operations.quantity.final_score",
    "operations.quality.level", "operations.quality.description", "operations.quality.final_score",
    "downstream.sentence",
    "downstream.quantity.level", "downstream.quantity.description", "downstream.quantity.final_score",
    "downstream.quality.level", "downstream.quality.description", "downstream.quality.final_score",
}

def flatten_updates(d, prefix=""):
    items = {}
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            items.update(flatten_updates(v, key))
        else:
            items[key] = v
    return items


def update_sector(sector_id, updates):
    client = get_client()
    db = client["noe_db"]
    collection = db["sectors"]
    result = collection.update_one({"_id": sector_id}, {"$set": updates})
    return result.matched_count


def load_sector_by_id(sector_id):
    client = get_client()
    db = client["noe_db"]
    collection = db["sectors"]
    return collection.find_one({"_id": sector_id})


def load_sectors_list():
    client = get_client()
    db = client["noe_db"]
    collection = db["sectors"]
    projection = {
        "_id": 1,
        "naf_code": 1,
        "label": 1,
        "water_risk.quantity": 1,
        "operations.quantity.final_score": 1,
        "operations.cdp.quantity_score": 1,
        "to_check": 1,
        "reviewed": 1,
    }
    sectors = list(collection.find({}, projection))
    return sectors