try:
    lines = []
    with open("./data/pages/page1.txt", 'r') as file:
        for line in file:
            currentline = line.strip() 
            lines.append(currentline)
        print(lines)

except Exception as err:
    print(err)

