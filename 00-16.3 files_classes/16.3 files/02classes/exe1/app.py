from book import Book
from ramcol import Ramcol 
b1 = Book("Endi", "Erik", "Sergi", 39)
b2 = Book("Compi", "David", "pub1", 54)
b3 = Book("Phoni", "Yosef", "Sergi", 490)

b1.display()
b2.display()
b3.display()
print(b1.vat())
print(b2.vat())
print(b3.vat())

r1 = Ramcol("m1", "red", 10, "rrrr")
r1.display() 
r1.write_file()