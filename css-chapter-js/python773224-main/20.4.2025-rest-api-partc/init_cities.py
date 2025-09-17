from models.city_model import CityModel

def init_cities():
    # Create the table first
    CityModel.create_table()
    
    # Add initial cities
    cities = ['Tel-Aviv', 'Jerusalem', 'Haifa']
    for city_name in cities:
        CityModel.create(city_name)
        print(f"Added city: {city_name}")

if __name__ == '__main__':
    init_cities() 