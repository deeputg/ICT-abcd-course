def printMe(str):
    print(str)
    return

printMe("First time")
printMe("Second time")
printMe("third time")

#######

def mathMe(num1,num2):
    sum = num1+num2
    dif = num1-num2
    mul = num1*num2
    return (sum,dif,mul)

num1=int(input("Enter the first number "))
num2=int(input("Enter the second number"))
result = mathMe(num1,num2)
print(result)
print(type(result))