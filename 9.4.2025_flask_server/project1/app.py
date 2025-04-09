from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Initialize database
def init_db():
    conn = sqlite3.connect('cities.db')
    conn.execute('''
        CREATE TABLE IF NOT EXISTS cities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            population INTEGER,
            country TEXT
        )
    ''')
    conn.commit()
    conn.close()

# Initialize the database
init_db()

@app.route('/')
def hello_world():
    return 'Hello World'

# Create a new city
@app.route('/cities', methods=['POST'])
def create_city():
    data = request.get_json()
    conn = sqlite3.connect('cities.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO cities (name, population, country)
        VALUES (?, ?, ?)
    ''', (data['name'], data.get('population'), data.get('country')))
    
    conn.commit()
    city_id = cursor.lastrowid
    conn.close()
    
    return jsonify({
        'id': city_id,
        'name': data['name'],
        'population': data.get('population'),
        'country': data.get('country')
    }), 201

# Get all cities
@app.route('/cities', methods=['GET'])
def get_cities():
    conn = sqlite3.connect('cities.db')
    conn.row_factory = sqlite3.Row
    cities = conn.execute('SELECT * FROM cities').fetchall()
    conn.close()
    
    return jsonify([dict(city) for city in cities])

# Get city by ID
@app.route('/cities/<int:city_id>', methods=['GET'])
def get_city(city_id):
    conn = sqlite3.connect('cities.db')
    conn.row_factory = sqlite3.Row
    city = conn.execute('SELECT * FROM cities WHERE id = ?', (city_id,)).fetchone()
    conn.close()
    
    if city is None:
        return jsonify({'error': 'City not found'}), 404
    
    return jsonify(dict(city))

# Update city
@app.route('/cities/<int:city_id>', methods=['PUT'])
def update_city(city_id):
    data = request.get_json()
    conn = sqlite3.connect('cities.db')
    
    # Check if city exists
    city = conn.execute('SELECT * FROM cities WHERE id = ?', (city_id,)).fetchone()
    if city is None:
        conn.close()
        return jsonify({'error': 'City not found'}), 404
    
    # Build update query dynamically based on provided fields
    update_fields = []
    values = []
    if 'name' in data:
        update_fields.append('name = ?')
        values.append(data['name'])
    if 'population' in data:
        update_fields.append('population = ?')
        values.append(data['population'])
    if 'country' in data:
        update_fields.append('country = ?')
        values.append(data['country'])
    
    if not update_fields:
        conn.close()
        return jsonify({'error': 'No fields to update'}), 400
    
    values.append(city_id)
    query = f'UPDATE cities SET {", ".join(update_fields)} WHERE id = ?'
    
    conn.execute(query, values)
    conn.commit()
    
    # Get updated city
    conn.row_factory = sqlite3.Row
    updated_city = conn.execute('SELECT * FROM cities WHERE id = ?', (city_id,)).fetchone()
    conn.close()
    
    return jsonify(dict(updated_city))

# Delete city
@app.route('/cities/<int:city_id>', methods=['DELETE'])
def delete_city(city_id):
    conn = sqlite3.connect('cities.db')
    
    # Check if city exists
    city = conn.execute('SELECT * FROM cities WHERE id = ?', (city_id,)).fetchone()
    if city is None:
        conn.close()
        return jsonify({'error': 'City not found'}), 404
    
    conn.execute('DELETE FROM cities WHERE id = ?', (city_id,))
    conn.commit()
    conn.close()
    
    return '', 204

if __name__ == '__main__':
    app.run(debug=True) 