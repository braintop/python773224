class CityModel:
    def __init__(self, id=None, name=None, population=None, country=None):
        self.id = id
        self.name = name
        self.population = population
        self.country = country

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'population': self.population,
            'country': self.country
        }

    @staticmethod
    def from_dict(data):
        return CityModel(
            id=data.get('id'),
            name=data.get('name'),
            population=data.get('population'),
            country=data.get('country')
        ) 