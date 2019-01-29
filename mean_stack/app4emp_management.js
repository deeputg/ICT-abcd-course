var express = require('express');
const app = express();

app.listen("8000",function(req,res){
    console.log("server started");
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/homeEmployee.html");
})
app.get("/home/employee",function(req,res){
    res.sendfile("./employee.html");//sendfile is a deprecated function it may not be available in future
})
app.get("/home/employee/newemp",function(req,res){
    res.sendfile("./newemp.html")
    console.log(__dirname)
})
app.get("/home/employee/delemp",function(req,res){
    res.sendfile("./delemp.html")
})

app.get("/home/product",function(req,res){
    res.sendfile("./product.html")
})
app.get("/home/product/newprod",function(req,res){
    res.sendfile("newprod.html");
})
app.get("/home/product/delprod",function(req,res){
    res.sendfile("newprod.html");
})