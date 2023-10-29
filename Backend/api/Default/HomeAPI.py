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


@defaultAPI.route('/')
def index():
    if 'IsUserLoggedIn' not in session:
        session['IsUserLoggedIn'] = False

    if session['IsUserLoggedIn']:
        return redirect(url_for('defaultAPI.page', page='menu'))

    return render_template('index.html', IsUserLoggedIn=session['IsUserLoggedIn'], UserType=session.get('UserType', None), pageData=None)


@defaultAPI.route('/view_session')
def view_session():
    session_data = dict(session)
    return jsonify(session_data)

@defaultAPI.route('/page/<page>')
def page(page):
    if 'IsUserLoggedIn' not in session:
        session['IsUserLoggedIn'] = False
    if 'UserType' not in session:
        session['UserType'] = "user"

    if not session['IsUserLoggedIn'] and page not in ['login', 'signup']:
        return redirect(url_for('defaultAPI.index'))
    if session['IsUserLoggedIn'] and page in ['login', 'signup']:
        return redirect(url_for('defaultAPI.index'))
    if session['UserType'] == 'user' and page in ['admin']:
        return redirect(url_for('defaultAPI.index'))

    return renderPage(page, request.args)

def renderPage(page, args):
    pageData = {}
    return render_template(page + '.html', IsUserLoggedIn=session['IsUserLoggedIn'], UserType=session.get('UserType', None), pageData=pageData)
