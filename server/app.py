# app.py
#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, make_response, jsonify, abort
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from flask_bcrypt import Bcrypt
import logging


# Local imports
from config import app, db, api

from models import User, Favorite

class Users(Resource):
    def get(self):
        user = [user.to_dict() for user in User.query.all()]
        return make_response(jsonify(user), 200)

api.add_resource(Users, '/users')

class Login(Resource):
    def post(self):
        request_json = request.get_json()
        email = request_json.get('email')
        password = request_json.get('password')

        check_user = User.query.filter(User.email == email).first()

        if check_user and check_user.authenticate(password):
            session['user_id'] = check_user.id
            response_data = {
                'message': 'Login successful',
                'user': check_user.to_dict()
            }
            return make_response(response_data, 200)
        
        return {'error': 'Unauthorized'}, 401
                
api.add_resource(Login, '/login')

class Signup(Resource):
    def post(self):
        request_json = request.get_json()
        fname = request_json.get('fname')
        lname = request_json.get('lname')
        email = request_json.get('email')
        password = request_json.get('password')

        new_user = User(
            fname=fname,
            lname=lname,
            email=email
        )

        new_user.password_hash = password

        try:
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            return make_response(new_user.to_dict(), 200)
        
        except Exception as e:
            print(e)
            return make_response({'error': 'Unprocessable Entity'}, 404)
        
api.add_resource(Signup, '/signup')

if __name__ == '__main__':
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.WARNING)

    app.run(port=5555, debug=True)


# somehow POST favorites to user's profile (both)

# GET request to the external API (Henry)
# PATCH user's password (Henry)

# DELETE request for un-favoriting job (Christian)
# DELETE request for log out (Christian)
# GET request for individual favorites (Christian)