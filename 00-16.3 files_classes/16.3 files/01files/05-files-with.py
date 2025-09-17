try:
    with open("example.txt", 'a') as file:
        file.write("i love england\n")
except Exception as err:
    print(err)

