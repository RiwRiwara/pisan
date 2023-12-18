from flask import Flask, render_template, request, jsonify, session
from flask_cors import CORS
from Backend.api.Default import defaultAPI
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)
app.template_folder = 'Frontend/templates'
app.static_folder = 'Frontend/static'
app.secret_key = os.getenv("PRIVATE_KEY")

app.register_blueprint(defaultAPI, url_prefix='/')

if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host=os.getenv('HOST'), port=int(os.getenv('PORT')), debug=True)
