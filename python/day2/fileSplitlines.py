fileObj = open('sample.txt')
content = fileObj.read()
content = content.splitlines()
for i in content:
    print(i)
    print(len(i))
