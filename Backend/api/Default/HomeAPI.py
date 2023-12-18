from . import defaultAPI
from flask import  jsonify, render_template, request, session, redirect, url_for, send_file, send_from_directory
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
    # if 'IsUserLoggedIn' not in session:
    #     session['IsUserLoggedIn'] = False

    # if session['IsUserLoggedIn']:
    #     return redirect(url_for('defaultAPI.page', page='home'))

    return render_template('seo.html')
    # return render_template('index.html', IsUserLoggedIn=session['IsUserLoggedIn'], UserType=session.get('UserType', None), pageData=None)


@defaultAPI.route('/view_session')
def view_session():
    session_data = dict(session)
    return jsonify(session_data)

@defaultAPI.route('/signin', methods=['POST'])
def user_signin():
    try:
        if request.is_json:
            user_credentials = request.json
            phone = user_credentials.get('phone')
            password = user_credentials.get('password')
        else:
            phone = request.form.get('phone')
            password = request.form.get('password')
            print(request.form)

        user = db.user.find_one({"phone": phone})

        if user:
            if user['password'] == password:
                user['_id'] = str(user['_id'])
                user.pop("password", None)
                session['IsUserLoggedIn'] = True
                if db.user.find_one({"phone": phone})['role']:
                    session['UserType'] = db.user.find_one({"phone": phone})['role']
                else:
                    session['UserType'] = "customer"
                session['phone'] = phone
                
                if request.is_json:
                    return jsonify({"message": "User signed in successfully", "user_data": user}), 200
                else:
                    return redirect(url_for('defaultAPI.index'))
            else:
                # return jsonify({"message": "Invalid phone or password"}), 401
                return redirect(url_for('defaultAPI.index', error="Invalid phone or password"))
        else:
            # return jsonify({"message": "User account not found"}), 404
            return redirect(url_for('defaultAPI.index', error="User account not found"))

    except Exception as e:
        return jsonify({"message": str(e)}), 500

@defaultAPI.route('/logout')
def logout():
    session.pop('isUserLoggedIn', None)
    session.pop('IsUserLoggedIn', None)
    session.pop('phone', None)
    session.pop('UserType', None)
    return redirect(url_for('defaultAPI.index'))


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
    if page == 'home':
        pageData ={
            'title': 'Home'
        }
    try:
        return render_template(page + '.html', IsUserLoggedIn=session['IsUserLoggedIn'], UserType=session.get('UserType', None), pageData=pageData)
    except:
        return render_template('404.html', IsUserLoggedIn=session['IsUserLoggedIn'], UserType=session.get('UserType', None), pageData=pageData)


@defaultAPI.route('/css/<path:filename>')
def send_css(filename):
    print(filename)
    return send_from_directory('css', filename)
