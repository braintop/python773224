try:
    with open("example.txt", 'r') as file:
        currentline = file.readline()
        currentline= currentline.strip()
        print(currentline)
        currentline = file.readline() 
        currentline= currentline.strip()
        print(currentline)
except Exception as err:
    print(err)

