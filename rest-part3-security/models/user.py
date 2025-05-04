from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3

class User(UserMixin):
    def __init__(self, id, username, password_hash):
        self.id = id
        self.username = username
        self.password_hash = password_hash

    @staticmethod
    def create_table():
        conn = sqlite3.connect('mydb.db')
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL
            )
        ''')
        conn.commit()
        conn.close()

    @staticmethod
    def get_by_id(user_id):
        conn = sqlite3.connect('mydb.db')
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))
        user_data = cursor.fetchone()
        conn.close()
        
        if user_data:
            return User(id=user_data[0], username=user_data[1], password_hash=user_data[2])
        return None

    @staticmethod
    def get_by_username(username):
        conn = sqlite3.connect('mydb.db')
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
        user_data = cursor.fetchone()
        conn.close()
        
        if user_data:
            return User(id=user_data[0], username=user_data[1], password_hash=user_data[2])
        return None

    @staticmethod
    def create_user(username, password):
        password_hash = generate_password_hash(password)
        conn = sqlite3.connect('mydb.db')
        cursor = conn.cursor()
        try:
            cursor.execute(
                'INSERT INTO users (username, password_hash) VALUES (?, ?)',
                (username, password_hash)
            )
            conn.commit()
            user_id = cursor.lastrowid
            conn.close()
            return User(id=user_id, username=username, password_hash=password_hash)
        except sqlite3.IntegrityError:
            conn.close()
            return None

    def check_password(self, password):
        return check_password_hash(self.password_hash, password) 