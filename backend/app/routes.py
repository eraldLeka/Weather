from flask import Blueprint, jsonify, request
from .weather_api import get_weather

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return jsonify({"message": "Welcome to the Weather API!"}), 200

@main.route('/health')
def health_check():
    return jsonify({"status": "ok"}), 200

@main.route('/weather')
def weather():
    city = request.args.get('city')
    if not city:
        return jsonify({"error": "Parametri 'city' mungon në kërkesë"}), 400

    weather_data = get_weather(city)

    if "error" in weather_data:
        return jsonify(weather_data), 502

    return jsonify(weather_data), 200
