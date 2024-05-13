from . import mobileAPI
from flask import  jsonify, render_template, request, session, redirect, url_for, send_file, send_from_directory
import json
import json
from bson import ObjectId
from bson import json_util
from Backend.db import db


@mobileAPI.route('/test', methods=['GET'])
def api_entry():
    collection_names = db.list_collection_names()
    response = {
        'data': "API Running",
        'collection_names': collection_names
    }
    return jsonify(response)

@mobileAPI.route('/page/<page>')
def page(page):
    return renderPage(page)

def renderPage(page):
    pageData = {}
    items = []  
    
    if page == 'addItem':
        for item in db.items.find():
            item_obj = Item(item['_id'], item['name'], item['sale'], item['brand'], item['img'], item['link1'], item['link2'],  item['link3'],  item['link4'], item['category'])
            items.append(item_obj.to_dict())

    return render_template(page + '.html', data=items) 



class Item:
    def __init__(self,_id, name, sale, brand, img, link1, link2, link3, link4, category):
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
            'category': self.category
        }
        
        
@mobileAPI.route('/getItems', methods=['GET'])
def getAllItems():
    items = []
    for item in db.items.find():
        item_obj = Item(item['_id'], item['name'], item['sale'], item['brand'], item['img'], item['link1'], item['link2'],  item['link3'],  item['link4'], item['category'])
        items.append(item_obj.to_dict())
    return jsonify(items)


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