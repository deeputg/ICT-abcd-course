class Vehicle:
    type="Sedan"
    YoM = 2016
    milege = 17
class Bus(Vehicle):
    type="coach"
    milege=5
busObj = Bus
print(busObj.type)
print(busObj.YoM)