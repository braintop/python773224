import os 
try:
    firstname = input("enter first name:")
    lastname = input("enter  lastname:")
    email = input("enter email:")
    phone = input("enter phone:")
    dir_name = "data"
    if not os.path.exists(dir_name):
        os.makedirs(dir_name)
    with  open("./data/details.txt", "w") as file:
        file.write(firstname + "\n")
        file.write(lastname + "\n")
        file.write(email + "\n")
        file.write(phone + "\n")
except Exception as err:
    print(err)
