from flask import jsonify, request
from models.user_model import UserModel

class UserController:
    @staticmethod
    def create_user():
        data = request.get_json()
        print(data)
        fields = ['first_name','last_name', 'email', 'password', 'city_id', 'salary', 'is_admin']
        for key in fields:
            if key not in data:
                return jsonify({'error':"Missing required fields : " + key}), 400
        result = UserModel.create(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            password=data['password'],
            salary=data['salary'],
            city_id=data['city_id'],
            is_admin=data['is_admin'],
        )
        return jsonify(result), 201  

    @staticmethod
    def get_all_users():
        users = UserModel.get_all() 
        return jsonify(users)        

    @staticmethod
    def get_user(user_id):
        user = UserModel.get_user(user_id)
        if user is None:
            return jsonify({'error': "user not found"}), 404 
        return jsonify(user), 200

    @staticmethod
    def update_user(user_id):
        data = request.get_json() 
        if not data:
            return jsonify({'error':'no data provided'})
        result = UserModel.update(user_id, data)
        if result is None:
            return jsonify({'error':'User not found'})
        return jsonify(result), 201 
    
    @staticmethod 
    def delete_user(user_id):
        result = UserModel.delete(user_id)
        if result is None:
            return jsonify({"error": "User not found"}), 404 
        return jsonify(result), 201 