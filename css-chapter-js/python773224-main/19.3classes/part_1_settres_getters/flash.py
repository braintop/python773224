class Flashlight:
    #Class attribute
    counter = 0

    #Constructor
    def __init__(self, color, length, power, battery):
        self.color = color
        self.length = length
        self.power = power
        self.battery = battery
        Flashlight.counter += 1

    #Functions
    def power_on(self):
        return "POWER ON!"
    
    def power_off(self):
        return "POWER OFF!"
    
    def replace_battery(self):
        return "BATTERY REPLACED!"
    
    def display(self):
        print(f"Color: {self.color}\nLength: {self.__length}\nPower: {self.__power}\nBattery: {self.battery}")
    
    #Magic Funtion _str_
    def __str__(self):
        return f"Color: {self.color}\nLength: {self.__length}\nPower: {self.__power}\nBattery: {self.battery}"

    # Getter for attribute "length"
    @property
    def length(self):
        return self.__length
    
    # Setter for attribute "length"
    @length.setter
    def length(self, length):
        if not isinstance(length, int):
            raise ValueError("Invalid length.")
        self.__length = length


    # Getter for attribute "power"
    @property
    def power(self):
        return self.__power
    
    # Setter for attribute "power"
    @power.setter
    def power(self, power):
        if not isinstance(power, int):
            raise ValueError("Invalid power")
        self.__power = power