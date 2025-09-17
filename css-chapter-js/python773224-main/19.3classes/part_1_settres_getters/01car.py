# מה ההבדל בין קלאסס לאוביקט 
# object is instance (מופע) of class Car 
# Car is class 
class Car:
    #constructor - בנאי 
    def __init__(self, model, color, price):
        self.model = model 
        self.color = color 
        self.price = price  # private 
        
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
    



while True:
    try:
        price = int(input("enter price > 0 "))
        car1 = Car("subaru1", "brown", price)
        print(car1)
        break 
    except Exception as err:
        print(err)

print("----------------------------FINISH---------------------------------------") 
    