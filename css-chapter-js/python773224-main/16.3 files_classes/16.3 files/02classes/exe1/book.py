class Book:
    def __init__(self, title, author, publisher, price):
        self.title = title 
        self.author = author 
        self.publisher = publisher 
        self.price =price 
    
    def display(self):
        print(f"{self.title}💖{self.author}🌞{self.publisher}🌛{self.price}🌹🎂")

    def vat(self):
        return 0.18*self.price 
    


    

    