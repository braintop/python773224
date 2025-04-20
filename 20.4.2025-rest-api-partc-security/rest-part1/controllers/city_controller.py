from flask import jsonify, request
from models.city import City

class CityController:
    @staticmethod
    def create_city():
        data = request.get_json()
        if not data or 'name' not in data:
            return jsonify({'error': 'Name is required'}), 400
        
        result = City.create(data['name'])
        return jsonify(result)

    @staticmethod
    def get_cities():
        cities = City.get_all()
        return jsonify({'cities': cities})

    @staticmethod
    def delete_city(city_id):
        result = City.delete(city_id)
        if result is None:
            return jsonify({'error': 'City not found'}), 404
        return jsonify(result) 