class student:
    def __init__(self,name,age,cgpa):
        self.name=name
        self.age=age
        self.cgpa=cgpa

studObj = student("Deepu",25,7.4)
print(studObj.name)

stud1Obj = student("sarath",22,2.4)
print(stud1Obj.name)
print(stud1Obj.cgpa)

print(studObj.cgpa)