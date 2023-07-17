# app.py
#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, make_response, jsonify, abort
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

# Local imports
from config import app, db, api

from models import User, Favorite

if __name__ == '__main__':
    app.run(port=5555, debug=True)