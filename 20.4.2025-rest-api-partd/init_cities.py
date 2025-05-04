from models.city import City

def init_cities():
    # Create the table first
    City.create_table()
    
    # Add initial cities
    cities = ['Tel Aviv', 'Jerusalem', 'Haifa']
    for city_name in cities:
        City.create(city_name)
        print(f"Added city: {city_name}")

if __name__ == '__main__':
    init_cities() 