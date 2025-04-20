from flask import jsonify, request
from models.user import User

class UserController:
    @staticmethod
    def create_user():
        data = request.get_json()
        if not data or not all(k in data for k in ['first_name', 'last_name', 'email', 'password', 'city_id', 'salary']):
            return jsonify({'error': 'Missing required fields'}), 400
        
        result = User.create(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            password=data['password'],
            city_id=data['city_id'],
            salary=data['salary'],
            is_admin=data.get('is_admin', False)
        )
        
        if result is None:
            return jsonify({'error': 'Email already exists'}), 400
        return jsonify(result), 201

    @staticmethod
    def get_all_users():
        users = User.get_all()
        return jsonify({'users': users})

    @staticmethod
    def get_user(user_id):
        user = User.get_by_id(user_id)
        if user is None:
            return jsonify({'error': 'User not found'}), 404
        return jsonify(user)

    @staticmethod
    def update_user(user_id):
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        result = User.update(user_id, **data)
        if result is None:
            return jsonify({'error': 'User not found or update failed'}), 404
        return jsonify(result)

    @staticmethod
    def delete_user(user_id):
        result = User.delete(user_id)
        if result is None:
            return jsonify({'error': 'User not found'}), 404
        return jsonify(result) 