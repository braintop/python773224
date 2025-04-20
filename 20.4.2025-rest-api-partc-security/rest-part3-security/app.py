from flask import Flask
from flask_login import LoginManager
from models.city import City
from models.user import User
from routes.city_routes import city_bp
from routes.auth_routes import auth_bp

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Change this to a secure secret key in production

# Initialize LoginManager
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'auth.login'

@login_manager.user_loader
def load_user(user_id):
    return User.get_by_id(user_id)

# Register the blueprints
app.register_blueprint(city_bp)
app.register_blueprint(auth_bp)

# Create the database tables
City.create_table()
User.create_table()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 