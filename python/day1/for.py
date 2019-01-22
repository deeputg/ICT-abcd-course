nums = [1,2,3,4]
#print(range(3))
for i in range(len(nums)):
    print(i," ",nums[i])
else:
    print("No items left")

# break
for value in "Deepu":
    if value=="p":
        break
    print(value)
print('the end')

#continue
for value in "Deepu":
    if value=="p":
        continue
    print(value)
print('the end')

