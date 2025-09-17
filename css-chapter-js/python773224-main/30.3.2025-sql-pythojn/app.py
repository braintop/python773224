import sqlite3  # Add SQLite import

def print_cities_v1():
    # Connect to SQLite database
    connection = sqlite3.connect('mydb.db')
    print("Connected to database")

    cursor = connection.cursor()
    
    sql = "select * from cities"

    cursor.execute(sql)
    cities = cursor.fetchall() 
    print(cities)

    for city in cities:
        print(city)
  
    cursor.close() 
    connection.close()

def create_table_cities():
    # Connect to SQLite database
    connection = sqlite3.connect('mydb_v2.db')
    print("Connected to database mydb_v2")

    cursor = connection.cursor()
    #create table cities 
    sql = '''create table if not exists cities
             (id INTEGER PRIMARY KEY AUTOINCREMENT,
             name Text not null)
          '''
    cursor.execute(sql)
    cursor.close()
    connection.close() 
    print("Database and table created successfully")


def insert_city(name):
    # Remove MySQL comment since we're using SQLite
    connection = sqlite3.connect('mydb_v2.db')
    print("Connected to database mydb_v2")

    cursor = connection.cursor()
    sql = 'insert into cities (name) values(?)'  
    cursor.execute(     sql,  (name,)   )
    connection.commit()# save 
    cursor.close()
    connection.close()


def insert_many_cities(names):
    # Remove MySQL comment since we're using SQLite
    connection = sqlite3.connect('mydb_v2.db')
    print("Connected to database mydb_v2")

    cursor = connection.cursor()
    sql = 'insert into cities (name) values(?)'  
    cursor.executemany(     sql,  names   ) # מצפה לקבל רשימה 
    connection.commit()# save 
    cursor.close()
    connection.close()


# for i in range(3):
#     city = input("enter city name") 
#     insert_city(city)
def select_city_by_id(id):
    # Remove MySQL comment since we're using SQLite
    connection = sqlite3.connect('mydb_v2.db')
    print("Connected to database mydb_v2")
    cursor = connection.cursor()
    sql = 'select * from cities where id = ?'  
    cursor.execute(     sql,  (id,)   )
    city = cursor.fetchone()
    cursor.close()
    connection.close()
    return city 


def delete_city_by_id(id):
    # Remove MySQL comment since we're using SQLite
    connection = sqlite3.connect('mydb_v2.db')
    print("Connected to database mydb_v2")
    cursor = connection.cursor()
    sql = 'delete  from cities where id = ?'  
    cursor.execute(     sql,  (id,)   )
    connection.commit() # save 
    cursor.close()
    connection.close()

def update_city_by_id(id, new_name):
    # Remove MySQL comment since we're using SQLite
    connection = sqlite3.connect('mydb_v2.db')
    print("Connected to database mydb_v2")
    cursor = connection.cursor()
    sql = 'update cities set name = ? where id = ?'  
    cursor.execute(     sql,  (new_name,id,)   )
    connection.commit() # save 
    cursor.close()
    connection.close()

 

samples_city = [
    ('ny',),
    ('london',),
    ('tokyo',),
    ('paris',),
]
#insert_many_cities(samples_city)
# current_city  = select_city_by_id(5)
# print(current_city)
# delete_city_by_id(5)
#update_city_by_id(4, "boolon")
