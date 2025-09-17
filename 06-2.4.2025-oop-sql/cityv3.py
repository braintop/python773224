import sqlite3
class City:
    db_name = "mydb.db"
    
    @staticmethod
    def get_db_connetcion():
        return sqlite3.connect(City.db_name)

    @staticmethod
    def create_table_cities():
        # Connect to SQLite database
        with City.get_db_connetcion() as connection:
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
    
    @staticmethod
    def insert(name):
        # Remove MySQL comment since we're using SQLite
        with City.get_db_connetcion() as connection:
            print("Connected to database mydb")
            cursor = connection.cursor()
            sql = 'insert into cities (name) values(?)'  
            cursor.execute(     sql ,  (name,)   )
            connection.commit()# save 
            cursor.close()
    
    @staticmethod
    def select_by_id(id):
        # Remove MySQL comment since we're using SQLite
        if not isinstance(id, int) or id <=0:
            raise ValueError("id must be positive integer")
        
        with City.get_db_connetcion() as connection:
            sql = 'select * from cities where city_id = ?'  
            cursor.execute(     sql,  (id,)   )
            city = cursor.fetchone()
            cursor.close()
            return city 
    
    @staticmethod
    def delete_by_id(id):
        # Remove MySQL comment since we're using SQLite
        with City.get_db_connetcion() as connection:
            print("Connected to database mydb")
            cursor = connection.cursor()
            sql = 'delete  from cities where city_id = ?'  
            cursor.execute(     sql,  (id,)   )
            connection.commit() # save 
            cursor.close()
    
    @staticmethod
    def update_by_id(id, new_name):
        # Remove MySQL comment since we're using SQLite
        with City.get_db_connetcion() as connection:
            print("Connected to database mydb")
            cursor = connection.cursor()
            sql = 'update cities set name = ? where city_id = ?'  
            cursor.execute(     sql,  (new_name,id,)   )
            connection.commit() # save 
            cursor.close()
# יתרון - אני לא צריך ליצור מופע של הקלאס 
City.create_table_cities()
City.insert("tel-aviv")
