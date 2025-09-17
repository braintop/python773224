from animals import * 
m0 = Monkey("mimi", "bans", 10)

l1 = Lion("lili", "meet")
e1 = Elephant("lili", "pilpel", 10)
m1 = Monkey("mimi", "bans", 30)

animals = [m0,l1, e1, m1]
print(animals)
for a in animals:
    print(a,end=" ")
    a.make_sound()
    print()

print("======================")
powers = 0 
for a in animals:
    if isinstance(a, Monkey):
        powers += a.power()
print(powers)