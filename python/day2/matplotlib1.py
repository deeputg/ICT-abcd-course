import matplotlib.pyplot as pltObj

x1=[1,2,3]
y1=[2,4,1]

x2=[1,2,3]
y2=[4,1,3]

pltObj.plot(x1,y1,label="line 1")
pltObj.plot(x2,y2,label="line 2")

pltObj.xlabel("x axis")
pltObj.ylabel("y axis")

pltObj.legend()
pltObj.show()