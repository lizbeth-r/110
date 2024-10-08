from flask import Flask, request
import json
from config import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.get("/")
def home():
    return "hello from flask"

@app.get("/about")
def about():
    me = {"name":"Lizbeth Ramirez"}
    return json.dumps(me)

@app.get("/footer")#i know that this is a section not a page
def footer():
    pageName = {"pageName":"organika"}
    return json.dumps(pageName)
# please create an API to footer that contains the name of the page (organika)

products = []

def fix_id(obj):
    obj["_id"]= str(obj["_id"])
    return obj


@app.get("/api/products")    
def read_all_products():
    min_price = request.args.get('min', default=0, type=float)
    max_price = request.args.get('max', default=float('inf'), type=float)
    cursor = db.catalog.find({"price": {"$gte": min_price, "$lte": max_price}})
    catalog = []
    for prod in cursor:
        catalog.append(fix_id(prod))

    return json.dumps(catalog)


@app.post("/api/products")
def save_product():
    item = request.get_json()    
    db.catalog.insert_one(item)
    return json.dumps(fix_id(item))


@app.put("/api/products/<int:index>")
def update_products(index):
    update_item = request.get_json()
    if 0<=index<len(products):
        products[index]=update_item
        return json.dumps(update_item)
    else:
        return "That index does not exist"
    
@app.get("/api/coupons")
def get_coupons():
    cursor = db.coupons.find({})
    coupons = []
    for cp in cursor:
        coupons.append(fix_id(cp))

    return json.dumps(coupons)

@app.post("/api/coupons")
def save_coupons():
    item = request.get_json()    
    db.coupons.insert_one(item)
    return json.dumps(fix_id(item))

@app.get("/api/catalog")
def read_products():
    cursor = db.catalog.find({})
    catalog = []
    for prod in cursor:
        catalog.append(fix_id(prod))

    return json.dumps(catalog)

@app.post("/api/catalog")
def save_products():
    item = request.get_json()    
    db.catalog.insert_one(item)
    return json.dumps(fix_id(item))
    
@app.get("/api/catalog/<category>")
def read_category(category):
    cursor = db.catalog.find({"category": category})
    catalog = []
    for prod in cursor:
        catalog.append(fix_id(prod))
    return catalog 


app.run(debug=True)