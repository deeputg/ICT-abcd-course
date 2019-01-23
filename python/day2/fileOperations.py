##Opening file in "w"-write mode (creates file if not exist) and write a line
# fileObj = open("file1.txt","w")
# fileObj.write("first line in file1.txt\n")
# fileObj.close()

##Open a file in "a" append mode to append to the file.
fileObj = open("file1.txt","a")
fileObj.write("second line")
fileObj.close()