# static property belong to class (תבנית ) not to object 
# @staticmethod function that belong to class and not to object 

class Car:
    counter = 0   
    #constructor - בנאי 
    def __init__(self, model, color, price):
        self.model = model 
        self.color = color 
        self.price = price  # private 
        Car.counter += 1  
        
    #phase 2 - functions 
    def display(self):
        print(f"💡{self.model} {self.color} {self.__price}💡")
    
   
    def __str__(self):
        return f"model:{self.model},color:{self.color}, price:{self.__price}"

    #phase 3 - getters 
    @property
    def model(self):
        return self.__model 

    @model.setter
    def model(self, value):
        models = ["subaru", "mercedes", "bmw"] 
        if value not in models:
            raise ValueError("model not found")
        self.__model = value  

    @property
    def price(self):
        return self.__price 

    #phase 4 - setters 
    @price.setter
    def price(self, value):
        if value<=0:
            raise ValueError("Price has to be positive")
        else:
            self.__price = value 
    
    @staticmethod 
    def show_counter():
        print(f"💡{Car.counter}💡")
    



# car1 = Car("subaru", "brown", 100)
# print(car1)
# car2 = Car("bmw", "brown", 200)

# print(Car.counter)
# Car.show_counter()
