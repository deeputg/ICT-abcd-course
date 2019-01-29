var express = require("express");
var bodyparser = require("body-parser")
const app = express();

app.use(bodyparser.urlencoded({extended:true}))

app.listen(8000,function(req,res){
    console.log("server started")
})
app.get("/login",function(req,res){
    res.sendFile(__dirname+"/templates/login.html")
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/templates/home.html")
})
app.post("/",function(req,res){
    console.log(req.body.username);
    if(req.body.username=="deepu" && req.body.pass=="123"){
        res.sendFile(__dirname+"/templates/home.html")
    }
    else{
        res.redirect("/login");
    }
    
})
app.post("/register",function(req,res){
    res.send("Name = "+req.body.name+"<br/>Email = "+req.body.email+"<br>username = "+req.body.username+"<br>password = "+req.body.pass)
})