var express = require('express');
const app = express();

app.listen("8000",function(req,res){
    console.log('started')
})
app.get("/login",function(req,res){
    res.sendfile("./login.html")
})
app.get("/",function(req,res){
    res.sendfile("./home.html")
})