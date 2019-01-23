## importing matplotlib. pyplot into pit object
import matplotlib.pyplot as pit
##x axis values
x=[1,2,3]
##y axis values
y=[2,4,1]
## plotting the points
pit.plot(x,y)
## naming the x axix
pit.xlabel("x axis")
## naming the y axis
pit.ylabel("y axis")
## setting a title to graph
pit.title("my first graph")
## call show() function to show the plot
pit.show()