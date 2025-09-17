class Product():
    def __init__(self, name, description, price):
        self.name = name 
        self.description = description 
        self.price = price 
    
    def display(self):
        print(f"name:{self.name} , description:{self.description} , price {self.price}")
    
    def __str__(self):
        return super().__str__() + f"name:{self.name} , description:{self.description} , price {self.price}"


# if we can say : b is a than we can make inheritnce 
# food is product 
# ball is product 
# room is not hotel. room is inside hotel  

class Food(Product):
    def __init__(self, name, description, price, taste):
        super().__init__(name, description, price) 
        self.taste = taste 
    
    def display(self):
        print("***")

    def f(self):
        super().display() # calling display from Product 
        self.display()  # calling current display (Food)
        print(self.name)
    
    #override 
    def __str__(self):
        return super().__str__() +  " taste:" + self.taste
    

