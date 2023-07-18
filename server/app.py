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

class UserByID(Resource):
    def get(self, id):
        user = User.query.filter_by(id=id).first()
        if user:
            return make_response(user.to_dict(), 200)
        elif User.query.count() == 0:
            message = '<h1>Sorry, there are no registered users yet.</h1>'
            return make_response(message, 404)
        else:
            return make_response({"error": "No User found"}, 404)

    def patch(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            return make_response({"error": "User not found"}, 404)
        new_fname = request.json.get('fname')
        new_lname = request.json.get('lname')
        new_password = request.json.get('_password_hash')
        new_email = request.json.get('email')

        if new_fname:
            user.fname = new_fname
        
        if new_lname:
            user.lname = new_lname

        if new_password:
            user.password_hash = new_password
        
        if new_email:
            user.email = new_email

        db.session.commit()
        return make_response(user.to_dict(), 200)
    
    def delete(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            return make_response({"error": "User not found"}, 404)
        # need to delete favorited jobs when user is deleted here
        db.session.delete(user)
        db.session.commit()
        return make_response({"message":"User successfully deleted"}, 200)
    
api.add_resource(UserByID, '/users/<int:id>')

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

class CheckSession(Resource):
    def get(self):
        user_id = session.get('user_id')

        if not user_id:
            return {'error': 'Unauthorized'}, 401
        
        current_user = User.query.filter(User.id == user_id).first()
        return current_user.to_dict(), 200

api.add_resource(CheckSession, '/check_session')

class Logout(Resource):
    def delete(self):
        if session.get('user_id'):
            session['user_id'] = None
            return {'message': 'Successfully logged out'}, 204
        return {'error': '401 Unauthorized'}, 401

api.add_resource(Logout, '/logout')

if __name__ == '__main__':
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.WARNING)

    app.run(port=5555, debug=True)


# somehow POST favorites to user's profile (both)

# GET request to the external API (Henry)
# PATCH user's password (Henry) - done

# DELETE request for un-favoriting job (Christian)
# DELETE request for log out (Christian) - done
# GET request for individual favorites (Christian)