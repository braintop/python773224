try:
    lines = []
    with open("example.txt", 'r') as file:
        for line in file:
            currentline = line.strip() 
            lines.append(currentline)
        print(lines)

except Exception as err:
    print(err)

