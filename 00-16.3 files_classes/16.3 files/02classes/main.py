from person import Person # Person is class = תבנית 

p1 = Person(12, "Arik","Edomi") # p1 is object 
p1.increment_age()
print(p1) 
p1.write_file()
# print(p1.age)
# print(p1.firstname)
# print(p1.lastname)
p1.display()
p2 = Person(14, "jumpi","kiril") # p2 is object 
p2.write_file()
# print(p2)
# print(p2.age)
# print(p2.firstname)
# print(p2.lastname)
p2.display()

print(p2.is_old ) # property 
print(p2.is_young() ) # function () 
