# app.py
#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, make_response, jsonify, abort
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from flask_bcrypt import Bcrypt
import requests

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

class Logout(Resource):
    def delete(self):
        session['user_id'] = None 
        response = make_response('',204)
        return response
    
api.add_resource(Logout, '/logout')

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

class GeoLocation(Resource):
    def get(self):

        url = "https://ip-geo-location.p.rapidapi.com/ip/check"
        querystring = {
            "format":"json"
            }
        headers = {
            "X-RapidAPI-Key": "87a13bb857msh6d480686553cc77p1415cajsn5fd5ebf1bbd6",
            "X-RapidAPI-Host": "ip-geo-location.p.rapidapi.com"
        }

        try:
            response = requests.get(url, querystring, headers=headers)

            if response.status_code == 200:
                data = response.json()
                return make_response(jsonify(data), 200)
            else:
                return make_response({'error': 'API request failed'}, 500)
        except requests.exceptions.RequestException as e:
            return make_response({'error': str(e)}, 500)

api.add_resource(GeoLocation, '/location')

class Jobs(Resource):
    def get(self):

        url = 'https://jsearch.p.rapidapi.com/search?'
        headers = {
            'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
            'Content-Type': 'application/json'
        }
        params = {
            'query': 'Python developer in Texas, USA',
            'radius': '500',
            'page': 3,
            'num_pages': 20
        }

        try:
            response = requests.get(url, headers=headers, params=params)

            if response.status_code == 200:
                data = response.json()
                return make_response(jsonify(data), 200)
            else:
                return make_response({'error': 'API request failed'}, 500)
        except requests.exceptions.RequestException as e:
            return make_response({'error': str(e)}, 500)

api.add_resource(Jobs, '/jobs')

class Favorites(Resource):
    def post(self):
        request_json = request.get_json()
        employer_logo = request_json.get('employer_logo')
        job_title = request_json.get('job_title')
        employer_name = request_json.get('employer_name')
        job_city = request_json.get('job_city')
        job_state = request_json.get('job_state')
        job_min_salary = request_json.get('job_min_salary')
        job_max_salary = request_json.get('job_max_salary')
        job_employment_type = request_json.get('job_employment_type')
        job_apply_link = request_json.get('job_apply_link')
        job_description = request_json.get('job_description')
        job_qualifications = request_json.get('job_qualifications')
        job_responsibilities = request_json.get('job_responsibilities')
        job_benefits = request_json.get('job_benefits')
        user_id = request_json.get('user_id')

        new_favorite = Favorite(
            employer_logo=employer_logo,
            job_title = job_title,
            employer_name = employer_name,
            job_city = job_city,
            job_state = job_state,
            job_min_salary = job_min_salary,
            job_max_salary = job_max_salary,
            job_employment_type = job_employment_type,
            job_apply_link = job_apply_link,
            job_description = job_description,
            job_qualifications = job_qualifications,
            job_responsibilities = job_responsibilities,
            job_benefits = job_benefits,
            user_id = user_id
        )

        try: 
            db.session.add(new_favorite)
            db.session.commit()
            return make_response(new_favorite.to_dict(), 200)
        
        except Exception as e:
            print(e)
            return make_response({'error': 'Unprocessable Entity'}, 404)
        
    def get(self):
        favorites = [favorites.to_dict() for favorites in Favorite.query.all()]
        return make_response(jsonify(favorites), 200)

api.add_resource(Favorites, '/favorites')

if __name__ == '__main__':
    app.run(port=5000, debug=True)



# PATCH user's password (Henry)

# DELETE request for un-favoriting job (Christian)
