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

create_table_cities()

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
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 
