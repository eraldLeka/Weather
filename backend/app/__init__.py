from flask import Flask
from dotenv import load_dotenv
import os
from flask_cors import CORS

load_dotenv()  # ngarkon .env në mjedis

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY", "default")

    from .routes import main
    app.register_blueprint(main)

    return app
