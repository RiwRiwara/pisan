from . import defaultAPI
from flask import  jsonify, render_template, request, session, redirect, url_for, send_file
import json
from Backend.db import db

@defaultAPI.route('/testapi', methods=['GET'])
def api_entry():
    collection_names = db.list_collection_names()
    response = {
        'data': "API Running",
        'collection_names': collection_names
    }
    return jsonify(response)
