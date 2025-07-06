from flask import Blueprint, jsonify
from controllers.city_controller import CityController

city_bp = Blueprint('city', __name__)

@city_bp.route('/')
def home():
    return jsonify({
        'message': 'Welcome to the Flask server!',
        'status': 'success'
    })

@city_bp.route('/cities', methods=['POST'])
def create_city():
    return CityController.create_city()

@city_bp.route('/cities', methods=['GET'])
def get_cities():
    return CityController.get_cities()

@city_bp.route('/cities/<int:city_id>', methods=['DELETE'])
def delete_city(city_id):
    return CityController.delete_city(city_id) 