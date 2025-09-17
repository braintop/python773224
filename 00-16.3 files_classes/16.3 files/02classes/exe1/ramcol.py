class Ramcol:
    def __init__(self, manufacturer, color, volume, model):
        self.manufacturer = manufacturer
        self.color = color 
        self.volume = volume
        self.model = model 

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
    def brand(self):
        return f"{self.manufacturer} {self.model}"

