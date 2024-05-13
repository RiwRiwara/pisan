from . import mobileAPI
from flask import  jsonify, render_template, request, session, redirect, url_for, send_file, send_from_directory
import json
from Backend.db import db

@mobileAPI.route('/test', methods=['GET'])
def api_entry():
    collection_names = db.list_collection_names()
    response = {
        'data': "API Running",
        'collection_names': collection_names
    }
    return jsonify(response)

