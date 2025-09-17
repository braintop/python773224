# class תבנית 
class Person:
    #phase 1 - contsructor 
    def __init__(self,firstname, lastname, age ):
        self.firstname = firstname 
        self.lastname = lastname 
        self.age  = age 
    #functions 
    def display(self):
        print("hi❤😍🤦‍♂️💖")
        print(f"My name is {self.firstname} {self.lastname} and i am {self.age} years old")

    def increment_age(self):
        self.age+=1 

    def write_file(self):
        try:
            with open(self.firstname + ".txt", "w") as file:
                file.write(f"{self.firstname} {self.lastname} {str(self.age)}")
        except Exception as err:
            print(err)

    #magic function 
    def __str__(self):
        return f"firstname:{self.firstname} , lastname:{self.lastname}, age:{self.age}"

    def is_young(self):
        return self.age < 3

    @property
    def is_old(self):
        return self.age >= 18




