username = input("Enter the username : ")
password = input("Enter the password")
print(username)
print(password)

fileObj = open("login.txt","r")
usernameFromFile = fileObj.readline()
passwordFromFile = fileObj.readline()
usernameFromFile=usernameFromFile.rstrip("\n")
print(usernameFromFile)
print(passwordFromFile)



if username==usernameFromFile and password==passwordFromFile:
    print("Successfully loged in")
else:
    print("Unsuccessful login")