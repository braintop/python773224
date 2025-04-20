from flask import Flask
from models.city import City
from models.user import User
from routes.city_routes import city_bp
from routes.user_routes import user_bp

app = Flask(__name__)

# Register the blueprints
app.register_blueprint(city_bp)
app.register_blueprint(user_bp)

# Create the database tables
City.create_table()
User.create_table()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 