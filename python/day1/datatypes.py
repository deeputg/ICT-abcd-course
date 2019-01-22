x=200000000000000000000000000000000000000000000000000000+1
print(type(x))

#list
colors = ['red','green','blue']
print(colors)

#list with different types a elements
collection = ['a','b',3,'123']
print(collection)

#nested list
nestedList = ["firstContent",[2,3,4],["abc","cd"]]
print(nestedList)

print(nestedList[1][1])
print(nestedList[2][0])
print(nestedList[0][0])
print(nestedList[0])
nestedList[0]="changedFirstContent"
print(nestedList[0])

#tuple
tupleName =('a','b',5,4.5)
print(tupleName)
print(tupleName[0])
#tupleName[0]=1 #this will not work throws an error

##Dictionary
print("Dictionary examples")
#empty dictionary
myDict = {}

myDict = {1:'apple',2:'ball'}
print(myDict[1])
print(myDict)

#dictionary with mixed keys
myNextDict = {'name':'deepu',5:6}
print(myNextDict['name'],myNextDict[5])

#dictionary using dict()
myDict2 = dict({1:'apple',2:'second'})#dict usage number 1
myDict4 = dict([(1,'apple'),(2,'second')])
myDict3 = {1:'apple',2:'second'}
print(myDict2)
print(myDict4)
print(myDict3)

print(myDict2[1])
print(myDict2.get(1))



