from flask import Flask
from models.city_model import CityModel
from routes.city_routes import city_bp

app = Flask(__name__)

# Register the blueprint
app.register_blueprint(city_bp)

# Create the database table
CityModel.create_table()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 