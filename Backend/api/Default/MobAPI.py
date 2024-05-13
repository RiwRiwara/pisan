from . import mobileAPI
from flask import  jsonify, render_template, request, session, redirect, url_for, send_file, send_from_directory
import json
import json
from bson import ObjectId
from bson import json_util
from Backend.db import db
import time

class Item:
    def __init__(self,_id, name, sale, brand, img, link1, link2, link3, link4, category, link1img, link2img, link3img, link4img, description,views):
        self._id = _id
        self.name = name
        self.sale = sale
        self.brand = brand
        self.img = img
        self.link1 = link1
        self.link2 = link2
        self.link3 = link3
        self.link4 = link4
        self.category = category
        self.link1img = link1img
        self.link2img = link2img
        self.link3img = link3img
        self.link4img = link4img
        self.description = description
        self.views = views
    def to_dict(self):
        return {
            '_id': str(self._id),
            'name': self.name,
            'sale': self.sale,
            'brand': self.brand,
            'img': self.img,
            'link1': self.link1,
            'link2': self.link2,
            'link3': self.link3,
            'link4': self.link4,
            'category': self.category,
            'link1img': self.link1img,
            'link2img': self.link2img,
            'link3img': self.link3img,
            'link4img': self.link4img,
            'description': self.description,
            'views': self.views
        }
        

@mobileAPI.route('/test', methods=['GET'])
def api_entry():
    collection_names = db.list_collection_names()
    response = {
        'data': "API Running",
        'collection_names': collection_names,
        'message': 'API is running successfully!'
    }
    return jsonify(response)

@mobileAPI.route('/page/<page>')
def page(page):
    return renderPage(page)
def renderPage(page):
    timestamp = int(time.time())
    items = []  
    if page == 'addItem':
        for item in db.items.find():
            item['_id'] = str(item['_id'])
            items.append(item)

    return render_template(page + '.html', data=items, timestamp=timestamp) 


        

@mobileAPI.route('/getItems', methods=['GET'])
def getAllItems():
    query_params = {}
    
    # Get all query parameters
    category = request.args.get('category')
    sale = request.args.get('sale')
    brand = request.args.get('brand')
    name = request.args.get('name')

    # Construct the query based on provided parameters
    if category:
        query_params['category'] = category
    if sale:
        query_params['sale'] = sale
    if brand:
        query_params['brand'] = brand
    if name:
        query_params['name'] = name

    items = []
    if query_params:
        for item in db.items.find(query_params):
            item['_id'] = str(item['_id'])
            items.append(item)
    else:
        for item in db.items.find():
            item['_id'] = str(item['_id'])
            items.append(item)
    return jsonify(items)



@mobileAPI.route('/getItem/<id>', methods=['GET'])
def getItem(id):
    item = db.items.find_one({"_id": ObjectId(id)})
    if item:
        item['_id'] = str(item['_id'])  
        return jsonify(item)
    else:
        return jsonify({"error": "Item not found"}), 404


@mobileAPI.route('/deleteItem/<id>', methods=['DELETE'])
def deleteItem(id):
    db.items.delete_one({"_id": ObjectId(id)})
    return jsonify({"message": "Item deleted successfully"}), 200



@mobileAPI.route('/insertItem', methods=['POST'])
def insertItem():
    try:
        if request.is_json:
            item = request.json
            db.items.insert_one(item)
            return jsonify({"message": "Item inserted successfully"}), 200
        else:
            return jsonify({"message": "Request data must be in JSON format"}), 415
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
    
@mobileAPI.route('/updateItem/<id>', methods=['POST'])
def updateItem(id):
    try:
        if request.is_json:
            data = request.json
            data.pop('_id', None)
            
            db.items.update_one({"_id": ObjectId(id)}, {"$set": data})
            return jsonify({"message": "Item updated successfully"}), 200
        else:
            return jsonify({"message": "Request data must be in JSON format"}), 415
    except Exception as e:
        return jsonify({"message": str(e)}), 500




# # update a views of an item to 0
# @mobileAPI.route('/updateViews', methods=['GET'])
# def updateViews() :
#     try:
#         db.items.update_many({}, {"$set": {"views": 0}})
#         return jsonify({"message": "Views updated successfully"}), 200
#     except Exception as e:
#         return jsonify({"message": str(e)}), 500
    