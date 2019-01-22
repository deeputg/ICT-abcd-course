x=True
y=False

print('x and y is ',x and y)
print('x or y is ',x or y)
print('not x is ',not x)

#identity operations
x1 = 5
x2 = 5
y1 = 'Hello'
y2 = 'Hello'

print(x1 is not x2)#False
print(y1 is y2)#True

#Menmbership operations
x=1
y=10
list1 = [1,2,3,4]
if(x in list1):
    print("x is in list")
else:
    print("x is not in list")

if(y not in list1):
    print('y is not in list')
else:
    print('y is in list')