from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_assets import Environment, Bundle

app = Flask(__name__)
assets = Environment(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/user.db'
db = SQLAlchemy(app)

from app.routes import routes