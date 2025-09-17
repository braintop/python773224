from flask import Flask, jsonify, request 
import sqlite3 
app = Flask(__name__)

def get_db_connetcion():
    return sqlite3.connect("mydb.db")


def create_table_cities():
    # Connect to SQLite database
    with get_db_connetcion() as connection:
        print("Connected to database mydb")
        cursor = connection.cursor()
        #create table cities 
        sql = '''create table if not exists cities
                (city_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name Text not null)
            '''
        cursor.execute(sql)
        cursor.close()
        print("Database and table created successfully")

def create_table_users():
    with get_db_connetcion() as connection:
        print("Connected to database mydb")
        cursor = connection.cursor()
        sql = '''create table if not exists users
                (user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT not null,
                email TEXT not null unique,
                age INTEGER)
            '''
        cursor.execute(sql)
        cursor.close()
        print("Users table created successfully")

create_table_cities()
create_table_users()

@app.route('/')
def home():
    return jsonify({
        'message': 'Welcome to the Flask server!',
        'status': 'success'
    })

@app.route('/cities', methods=['POST'])
def create_city():
    data = request.get_json()
    print(data)
    with get_db_connetcion() as connection:
        print("Connected to database mydb")
        cursor = connection.cursor()
        sql = 'insert into cities (name) values(?)'  
        cursor.execute(    sql ,  (data['name'],)   )
        city_id = cursor.lastrowid
        connection.commit()# save 
        cursor.close()
    return jsonify({
        'id':city_id,
        'name':data['name']
    })

@app.route('/cities', methods=['GET'])
def get_cities():
    with get_db_connetcion() as connection:
        print("Connected to database mydb")
        cursor = connection.cursor()
        sql = 'SELECT * FROM CITIES'  
        cursor.execute(sql)
        cities = cursor.fetchall()  
        cursor.close()
        return jsonify({'cities': [dict(id=city[0], name=city[1]) for city in cities]})       

# Delete city
@app.route('/cities/<int:city_id>', methods=['DELETE'])
def delete_city(city_id):
    conn = get_db_connetcion()
    
    # Check if city exists
    city = conn.execute('SELECT * FROM cities WHERE city_id = ?', (city_id,)).fetchone()
    if city is None:
        conn.close()
        return jsonify({'error': 'City not found'}), 404
    
    conn.execute('DELETE FROM cities WHERE city_id = ?', (city_id,))
    conn.commit()
    conn.close()
 
    return jsonify({'message': f"{city_id} row deleted"})

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    with get_db_connetcion() as connection:
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM users WHERE user_id = ?', (user_id,))
        user = cursor.fetchone()
        cursor.close()
        
        if user is None:
            return jsonify({'error': 'User not found'}), 404
            
        return jsonify({
            'user_id': user[0],
            'name': user[1],
            'email': user[2],
            'age': user[3]
        })

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    
    with get_db_connetcion() as connection:
        cursor = connection.cursor()
        
        # Check if user exists
        cursor.execute('SELECT * FROM users WHERE user_id = ?', (user_id,))
        if cursor.fetchone() is None:
            cursor.close()
            return jsonify({'error': 'User not found'}), 404
            
        # Update user
        update_fields = []
        values = []
        
        if 'name' in data:
            update_fields.append('name = ?')
            values.append(data['name'])
        if 'email' in data:
            update_fields.append('email = ?')
            values.append(data['email'])
        if 'age' in data:
            update_fields.append('age = ?')
            values.append(data['age'])
            
        if not update_fields:
            cursor.close()
            return jsonify({'error': 'No fields to update'}), 400
            
        values.append(user_id)
        sql = f'UPDATE users SET {", ".join(update_fields)} WHERE user_id = ?'
        cursor.execute(sql, values)
        connection.commit()
        cursor.close()
        
        return jsonify({'message': 'User updated successfully'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 
