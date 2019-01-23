class employee:
    name="Deepu"
    age="25"
    bp = 100000
    hra = 50000
    da = 60/100 * bp

    def calculateSal(self):
        return self.bp+self.hra+self.da

empObj = employee()
print("sal of "+empObj.name+" is "+str(empObj.calculateSal()))