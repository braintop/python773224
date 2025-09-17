import os 
try:
    x = int(input("enter a number"))
    y = int(input("enter a number"))
    soulution = x + y
    dir_name = "solution"
    if not os.path.exists(dir_name):
        os.makedirs(dir_name)
    with  open("./solution/sol.txt", "w") as file:
        file.write(f"{x} + {y} = {soulution}")
except Exception as err:
    print(err)
