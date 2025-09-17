import sqlite3

class Worker:

    db_name="mydb.db"

    @staticmethod
    def get_db_connetcion():
        return sqlite3.connect(Worker.db_name)

    @staticmethod
    def create_table_workers():
        with Worker.get_db_connetcion() as connection:
            print("Connected to database")
            cursor = connection.cursor()
            cursor.execute('''
            CREATE TABLE if not exists  workers (
            worker_id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            salary NUMERIC NOT NULL,
            city_id INTEGER,
            FOREIGN KEY (city_id) REFERENCES cities(id)
        )
        ''')
            cursor.close()
            print("Workers table  created successfully")

    @staticmethod
    def insert_worker(first_name,last_name, salary, city_id):
        # Remove MySQL comment since we're using SQLite
        with Worker.get_db_connetcion() as connection:
            print("Connected to database mydb_v2")
            cursor = connection.cursor()
            sql = 'insert into workers (first_name,last_name, salary, city_id) values(?, ? ,?,?)'  
            cursor.execute(     sql,  (first_name,last_name,salary,city_id,)   )
            connection.commit()# save 
            cursor.close()
    
    @staticmethod
    def select_person_by_id(id):
        # Remove MySQL comment since we're using SQLite
        with Worker.get_db_connetcion() as connection:
            print("Connected to database mydb_v2")
            cursor = connection.cursor()
            sql = '''select first_name, last_name, salary, name
            from workers
            inner join cities on workers.city_id = cities.id
            where workers.worker_id = ? 
            '''  
            cursor.execute(     sql,  (id,)   )
            worker = cursor.fetchone() 
            connection.commit()# save 
            cursor.close()
            return worker 

    @staticmethod
    def delete_person_by_id(id):
        # Remove MySQL comment since we're using SQLite
        with Worker.get_db_connetcion() as connection:
            print("Connected to database mydb_v2")
            cursor = connection.cursor()
            sql = '''delete 
            from workers
            where workers.worker_id = ? 
            '''  
            cursor.execute(     sql,  (id,)   )
            worker = cursor.fetchone() 
            connection.commit()# save 
            cursor.close()
            
    @staticmethod
    def select_person_above_salary(n):
        # Remove MySQL comment since we're using SQLite
        with Worker.get_db_connetcion() as connection:
            print("Connected to database mydb_v2")
            cursor = connection.cursor()
            sql = '''select first_name, last_name, salary, name
            from workers
            inner join cities on workers.city_id = cities.id
            where workers.salary > ? 
            '''  
            cursor.execute(     sql,  (n,)   )
            worker = cursor.fetchall() 
            connection.commit()# save 
            cursor.close()
            return worker 

    @staticmethod
    def select_person_between_min_max_v1(min, max):
        # Remove MySQL comment since we're using SQLite
        with Worker.get_db_connetcion() as connection:
            print("Connected to database mydb_v2")
            cursor = connection.cursor()
            sql = '''select first_name, last_name, salary, name
            from workers
            inner join cities on workers.city_id = cities.id
            where workers.salary > ? and workers.salary < ? 
            '''  
            cursor.execute(     sql,  (min,max, )   )
            worker = cursor.fetchall() 
            connection.commit()# save 
            cursor.close()
            return worker 

    @staticmethod
    def select_person_between_min_max_v2(min, max):
        # Remove MySQL comment since we're using SQLite
        with Worker.get_db_connetcion() as connection:
            print("Connected to database mydb_v2")
            cursor = connection.cursor()
            sql = '''select first_name, last_name, salary, name
            from workers
            inner join cities on workers.city_id = cities.id
            where workers.salary between ? and ? 
            '''  
            cursor.execute(     sql,  (min,max, )   )
            worker = cursor.fetchall() 
            connection.commit()# save 
            cursor.close()
            return worker 
