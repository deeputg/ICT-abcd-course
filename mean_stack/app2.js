var express = require("express");
const app2 = express();

app2.get("/",function(req,res){
    res.send("<h1>welcome to server</h1>")
})
app2.get("/employee",function(req,res){
    res.send('Welcome to the employee page')
})

app2.listen(8000,function(req,res){
console.log("started listening in 8000");
});