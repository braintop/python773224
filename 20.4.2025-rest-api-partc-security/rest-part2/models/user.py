import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

class User:
    @staticmethod
    def get_db_connection():
        return sqlite3.connect("mydb.db")

    @staticmethod
    def create_table():
        with User.get_db_connection() as connection:
            cursor = connection.cursor()
            sql = '''create table if not exists users
                    (user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    first_name TEXT not null,
                    last_name TEXT not null,
                    email TEXT not null unique,
                    password TEXT not null,
                    city_id INTEGER not null,
                    salary REAL not null,
                    is_admin INTEGER default 0,
                    FOREIGN KEY (city_id) REFERENCES cities(city_id))
                '''
            cursor.execute(sql)
            cursor.close()

    @staticmethod
    def create(first_name, last_name, email, password, city_id, salary, is_admin=False):
        with User.get_db_connection() as connection:
            cursor = connection.cursor()
            try:
                sql = '''insert into users 
                        (first_name, last_name, email, password, city_id, salary, is_admin)
                        values(?, ?, ?, ?, ?, ?, ?)'''
                cursor.execute(sql, (first_name, last_name, email, 
                                   generate_password_hash(password), 
                                   city_id, salary, 1 if is_admin else 0))
                user_id = cursor.lastrowid
                connection.commit()
                cursor.close()
                return {
                    'user_id': user_id,
                    'first_name': first_name,
                    'last_name': last_name,
                    'email': email,
                    'city_id': city_id,
                    'salary': salary,
                    'is_admin': is_admin
                }
            except sqlite3.IntegrityError:
                cursor.close()
                return None

    @staticmethod
    def get_all():
        with User.get_db_connection() as connection:
            cursor = connection.cursor()
            sql = 'SELECT * FROM users'
            cursor.execute(sql)
            users = cursor.fetchall()
            cursor.close()
            return [dict(
                user_id=user[0],
                first_name=user[1],
                last_name=user[2],
                email=user[3],
                city_id=user[5],
                salary=user[6],
                is_admin=bool(user[7])
            ) for user in users]

    @staticmethod
    def get_by_id(user_id):
        with User.get_db_connection() as connection:
            cursor = connection.cursor()
            sql = 'SELECT * FROM users WHERE user_id = ?'
            cursor.execute(sql, (user_id,))
            user = cursor.fetchone()
            cursor.close()
            if user:
                return dict(
                    user_id=user[0],
                    first_name=user[1],
                    last_name=user[2],
                    email=user[3],
                    city_id=user[5],
                    salary=user[6],
                    is_admin=bool(user[7])
                )
            return None

    @staticmethod
    def update(user_id, **kwargs):
        with User.get_db_connection() as connection:
            cursor = connection.cursor()
            try:
                # Check if user exists
                cursor.execute('SELECT * FROM users WHERE user_id = ?', (user_id,))
                if not cursor.fetchone():
                    cursor.close()
                    return None

                # Build update query
                update_fields = []
                values = []
                for key, value in kwargs.items():
                    if key == 'password':
                        value = generate_password_hash(value)
                    elif key == 'is_admin':
                        value = 1 if value else 0
                    update_fields.append(f"{key} = ?")
                    values.append(value)
                
                if not update_fields:
                    cursor.close()
                    return None

                sql = f"UPDATE users SET {', '.join(update_fields)} WHERE user_id = ?"
                values.append(user_id)
                cursor.execute(sql, values)
                connection.commit()
                cursor.close()
                return {'message': f"User {user_id} updated successfully"}
            except sqlite3.IntegrityError:
                cursor.close()
                return None

    @staticmethod
    def delete(user_id):
        with User.get_db_connection() as connection:
            cursor = connection.cursor()
            # Check if user exists
            cursor.execute('SELECT * FROM users WHERE user_id = ?', (user_id,))
            user = cursor.fetchone()
            if user is None:
                cursor.close()
                return None
            
            cursor.execute('DELETE FROM users WHERE user_id = ?', (user_id,))
            connection.commit()
            cursor.close()
            return {'message': f"User {user_id} deleted successfully"} 