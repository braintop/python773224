import sqlite3

class City:
    @staticmethod
    def get_db_connection():
        return sqlite3.connect("mydb.db")

    @staticmethod
    def create_table():
        with City.get_db_connection() as connection:
            cursor = connection.cursor()
            sql = '''create table if not exists cities
                    (city_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name Text not null)
                '''
            cursor.execute(sql)
            cursor.close()

    @staticmethod
    def create(name):
        with City.get_db_connection() as connection:
            cursor = connection.cursor()
            sql = 'insert into cities (name) values(?)'
            cursor.execute(sql, (name,))
            city_id = cursor.lastrowid
            connection.commit()
            cursor.close()
            return {'id': city_id, 'name': name}

    @staticmethod
    def get_all():
        with City.get_db_connection() as connection:
            cursor = connection.cursor()
            sql = 'SELECT * FROM CITIES'
            cursor.execute(sql)
            cities = cursor.fetchall()
            cursor.close()
            return [dict(id=city[0], name=city[1]) for city in cities]

    @staticmethod
    def delete(city_id):
        with City.get_db_connection() as connection:
            cursor = connection.cursor()
            # Check if city exists
            cursor.execute('SELECT * FROM cities WHERE city_id = ?', (city_id,))
            city = cursor.fetchone()
            if city is None:
                cursor.close()
                return None
            
            cursor.execute('DELETE FROM cities WHERE city_id = ?', (city_id,))
            connection.commit()
            cursor.close()
            return {'message': f"{city_id} row deleted"} 