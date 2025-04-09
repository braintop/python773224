from flask import Flask, request, jsonify
from city_model import CityModel
from city_controller import CityController

app = Flask(__name__)

# Initialize the database
CityController.init_db()

@app.route('/')
def hello_world():
    return 'Hello World'

# Create a new city
@app.route('/cities', methods=['POST'])
def create_city():
    data = request.get_json()
    city = CityModel.from_dict(data)
    CityController.save(city)
    return jsonify(city.to_dict()), 201

# Get all cities
@app.route('/cities', methods=['GET'])
def get_cities():
    cities = CityController.get_all()
    return jsonify([city.to_dict() for city in cities])

# Get city by ID
@app.route('/cities/<int:city_id>', methods=['GET'])
def get_city(city_id):
    city = CityController.get_by_id(city_id)
    if city is None:
        return jsonify({'error': 'City not found'}), 404
    return jsonify(city.to_dict())

# Update city
@app.route('/cities/<int:city_id>', methods=['PUT'])
def update_city(city_id):
    city = CityController.get_by_id(city_id)
    if city is None:
        return jsonify({'error': 'City not found'}), 404
    
    data = request.get_json()
    if 'name' in data:
        city.name = data['name']
    if 'population' in data:
        city.population = data['population']
    if 'country' in data:
        city.country = data['country']
    
    CityController.save(city)
    return jsonify(city.to_dict())

# Delete city
@app.route('/cities/<int:city_id>', methods=['DELETE'])
def delete_city(city_id):
    city = CityController.get_by_id(city_id)
    if city is None:
        return jsonify({'error': 'City not found'}), 404
    
    if CityController.delete(city):
        return '', 204
    return jsonify({'error': 'Failed to delete city'}), 500

if __name__ == '__main__':
    app.run(debug=True) 