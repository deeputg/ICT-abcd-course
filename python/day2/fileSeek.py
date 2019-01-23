fileObj = open('sample.txt')
print(fileObj.read())
print("_____________")
fileObj.seek(0)#0 indicates the start of the file
print(fileObj.read())
