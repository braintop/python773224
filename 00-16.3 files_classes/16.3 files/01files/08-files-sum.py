try:
    x = int(input("enter a number"))
    y = int(input("enter a number"))
    soulution = x + y
    with  open("example.txt", "w") as file:
        file.write(f"{x} + {y} = {soulution}")
except Exception as err:
    print(err)
