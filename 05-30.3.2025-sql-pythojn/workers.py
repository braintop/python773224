import sqlite3  # Add SQLite import



def create_table_workers():

    connection = sqlite3.connect('mydb_v2.db')
    print("Connected to database")
    cursor = connection.cursor()
    cursor.execute('''
   CREATE TABLE if not exists  workers (
       worker_id INTEGER PRIMARY KEY AUTOINCREMENT,
       first_name TEXT NOT NULL,
       last_name TEXT NOT NULL,
       salary NUMERIC NOT NULL,
       city_id INTEGER,
       FOREIGN KEY (city_id) REFERENCES city(id)
   )
''')

    cursor.close()
    connection.close() 
    print("Workers table  created successfully")

def test():
    connection = sqlite3.connect('mydb_v2.db')
    print("Connected to database")
    cursor = connection.cursor()
    sql = "select*from workers"
    cursor.execute(sql)
    workers = cursor.fetchall() 
    print(workers)
    cursor.close()
    connection.close() 

def insert_worker(first_name,last_name, salary, city_id):
    # Remove MySQL comment since we're using SQLite
    connection = sqlite3.connect('mydb_v2.db')
    print("Connected to database mydb_v2")
    cursor = connection.cursor()
    sql = 'insert into workers (first_name,last_name, salary, city_id) values(?, ? ,?,?)'  
    cursor.execute(     sql,  (first_name,last_name,salary,city_id,)   )
    connection.commit()# save 
    cursor.close()
    connection.close()

#create_table_workers() 
def select_person_by_id(id):
    # Remove MySQL comment since we're using SQLite
    connection = sqlite3.connect('mydb_v2.db')
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
    connection.close()
    return worker 

#insert_worker('oren','davidid', 100, 2) 

worker = select_person_by_id(1)
print(worker)