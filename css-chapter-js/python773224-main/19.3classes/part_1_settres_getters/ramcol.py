class Ramcol:
    counter = 0 
    def __init__(self, manufacturer, color, volume, model):
        self.manufacturer = manufacturer
        self.color = color 
        self.volume = volume
        self.model = model 
        Ramcol.counter+=1

    def on(self):
        print("💡") 
    
    def off(self):
        print("off")
    
    def voice(self):
        print("voiccccceeeeeee")

    def display(self):
        print(f"{self.manufacturer} {self.color} {str(self.volume)} {self.model} ")
    
    def __str__(self):
        return f"{self.manufacturer} {self.color} {self.volume} {self.model} "

    def write_file(self):
        try:
            with open(self.manufacturer + ".txt", "w") as file:
                file.write(f"{self.manufacturer} {str(self.volume)} {self.color} {self.model}")
        except Exception as err:
            print(err)
    
    @property 
    def volume(self):
        return self.__volume 

    @volume.setter
    def volume(self, value):
        if value <0 or value > 100:
            raise ValueError("value has to be between 0 - 100")
        self.__volume = value 
    @property 
    def brand(self):
        return f"{self.manufacturer} {self.model}"
        
    @staticmethod
    def show_counter():
        print(Ramcol.counter)
    