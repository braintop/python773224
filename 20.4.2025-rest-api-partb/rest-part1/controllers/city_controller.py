from flask import jsonify, request
from models.city_model import CityModel

class CityController:
    @staticmethod
    def create_city():
        data = request.get_json()
        if not data or 'name' not in data:
            return jsonify({'error': 'Name is required'}), 400
        
        result = CityModel.create(data['name'])
        return jsonify(result)

    @staticmethod
    def get_cities():
        cities = CityModel.get_all()
        return jsonify({'cities': cities})

    @staticmethod
    def delete_city(city_id):
        result = CityModel.delete(city_id)
        if result is None:
            return jsonify({'error': 'City not found'}), 404
        return jsonify(result) 