myFileObject = open('sample.txt')
content = myFileObject.read()
myFileObject.close()
print(content)