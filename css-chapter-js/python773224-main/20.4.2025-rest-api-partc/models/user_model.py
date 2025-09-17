import sqlite3 

class UserModel:
    @staticmethod
    def get_db_connection():
        return sqlite3.connect("mydb.db")
    
    @staticmethod
    def create_table():
        with UserModel.get_db_connection() as connection:
            cursor = connection.cursor() 
            sql = ''' create table if not exists users
            (user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT not null, 
                last_name TEXT not null, 
                email TEXT not null, 
                password TEXT not null, 
                city_id INTEGER not null, 
                salary REAL not null, 
                is_admin INTEGER default 0,
                FOREIGN KEY (city_id) REFERENCES cities(city_id))
            '''
            cursor.execute(sql)
            cursor.close() 


    @staticmethod
    def create(first_name, last_name, email, password, city_id, salary, is_admin = 0 ):
        with UserModel.get_db_connection() as connection:
            cursor = connection.cursor() 
            sql = '''insert into users(first_name, last_name, email, password, city_id, salary, is_admin)
            values(?,?,?,?,?,?,?)
            '''
            cursor.execute(sql, (first_name, last_name, email, password, city_id, salary, is_admin,))
            user_id = cursor.lastrowid 
            connection.commit() 
            cursor.close() 
            return{
                'user_id':user_id,
                'first_name':first_name,
                'last_name':last_name,
                'email':email,
                'city_id':city_id,
                'salary':salary, 
                'is_admin':is_admin
            }
    @staticmethod
    def get_all():
        with UserModel.get_db_connection() as connection:
            cursor = connection.cursor() 
            sql = "select*from users"
            cursor.execute(sql)
            users = cursor.fetchall()
            cursor.close()
            return [
                dict(user_id = user[0],
                first_name=user[1],
                last_name = user[2],
                email = user[3],
                city_id = user[4],
                salary = user[5],
                is_admin = user[6],
                password = user[7]
                ) for user in users] 

    @staticmethod
    def get_user(user_id):
        with UserModel.get_db_connection() as connection:
            cursor = connection.cursor()
            sql = "select * from users where user_id = ? "
            cursor.execute(sql, (user_id,))
            user = cursor.fetchone() 
            cursor.close() 
            if user:
                return dict(
                user_id = user[0],
                first_name=user[1],
                last_name = user[2],
                email = user[3],
                city_id = user[4],
                salary = user[5],
                is_admin = user[6],
                password = user[7]
            )
            return None 


    @staticmethod
    def update(user_id, data):
        with UserModel.get_db_connection() as connection:
            cursor = connection.cursor() 
            sql =  'select * from users where user_id =?'
            cursor.execute(sql,(user_id, ) )
            if not cursor.fetchone():
                cursor.close() 
                return None
            pair = "" 
            for key, value in data.items(): # kwargs.items() = {'first_name':"dd","password":"1234567"}
                pair += key + "=" + "'"  + value + "'" + "," # firstname = "dd", "password=1234567"
            pair = pair[:-1]
            print(pair)
            sql = f"update users set {pair} where user_id = ?"
            print(sql)
            cursor.execute(sql, (user_id,))
            connection.commit() 
            cursor.close() 
            return {'message': f"user {user_id} updated successfully"}

    @staticmethod
    def delete(user_id):
        with UserModel.get_db_connection() as connection:
            cursor = connection.cursor() 
            sql =  'select * from users where user_id =?'
            cursor.execute(sql,(user_id, ) )
            if not cursor.fetchone():
                cursor.close() 
                return None
            sql = "delete from users where user_id = ?"
            cursor.execute(sql, (user_id, ))
            connection.commit() 
            cursor.close() 
            return {'message' : f"user {user_id} deleted successfully"}