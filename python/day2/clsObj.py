class car:
    model = "Sedan"
    country = "india"
    def __init__(self,model,color):
        self.model=model
        self.color=color

#creating an object for car class
toyotaCar = car("innova","white")
fordCar = car("escort","red")

print(toyotaCar.model)
print(toyotaCar.country)