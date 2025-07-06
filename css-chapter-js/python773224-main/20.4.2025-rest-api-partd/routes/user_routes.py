from flask import Blueprint
from controllers.user_controller import UserController

user_bp = Blueprint('users', __name__)

@user_bp.route('/users', methods=['POST'])
def create_user():
    return UserController.create_user()

@user_bp.route('/users', methods=['GET'])
def get_all_users():
    return UserController.get_all_users()

@user_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    return UserController.get_user(user_id)

@user_bp.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    return UserController.update_user(user_id)

@user_bp.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    return UserController.delete_user(user_id)

@user_bp.route('/register', methods=['POST'])
def register():
    return UserController.create_user()

@user_bp.route('/login', methods=['POST'])
def login():
    return UserController.login_user() 