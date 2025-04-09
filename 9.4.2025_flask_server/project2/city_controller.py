import sqlite3
from city_model import CityModel

class CityController: # Data Access Object
    @staticmethod
    def get_db_connection():
        conn = sqlite3.connect('cities.db')
        conn.row_factory = sqlite3.Row
        return conn

    @staticmethod
    def init_db():
        conn = CityController.get_db_connection()
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

    @staticmethod
    def save(city):
        conn = CityController.get_db_connection()
        cursor = conn.cursor()
        
        if city.id is None:  # New city
            cursor.execute('''
                INSERT INTO cities (name, population, country)
                VALUES (?, ?, ?)
            ''', (city.name, city.population, city.country))
            city.id = cursor.lastrowid
        else:  # Update existing city
            cursor.execute('''
                UPDATE cities 
                SET name = ?, population = ?, country = ?
                WHERE id = ?
            ''', (city.name, city.population, city.country, city.id))
        
        conn.commit()
        conn.close()
        return city

    @staticmethod
    def get_all():
        conn = CityController.get_db_connection()
        cities = conn.execute('SELECT * FROM cities').fetchall()
        conn.close()
        return [City.from_dict(dict(city)) for city in cities]

    @staticmethod
    def get_by_id(city_id):
        conn = CityController.get_db_connection()
        city = conn.execute('SELECT * FROM cities WHERE id = ?', (city_id,)).fetchone()
        conn.close()
        
        if city is None:
            return None
        return City.from_dict(dict(city))

    @staticmethod
    def delete(city):
        if city.id is None:
            return False
        
        conn = CityController.get_db_connection()
        conn.execute('DELETE FROM cities WHERE id = ?', (city.id,))
        conn.commit()
        conn.close()
        return True 