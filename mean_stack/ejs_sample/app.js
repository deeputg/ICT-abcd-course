var express = require('express');
var bodyparser = require("body-parser");
var uf = require("./user_defined")
const app = express()   
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
var books = [{bookId:1,bookName:"A game of thrones",author:"George RRM",price:1110},{bookId:2,bookName:"A game of thrones",author:"George RRM",price:1110},{bookId:3,bookName:"ice and fire",author:"George RRM",price:1120}]


app.listen(8000,function(req,res){
    console.log("server started")
})

app.get("/login",function(req,res){
    res.render("login")
    uf.myweb();
    console.log(uf.myvar)

})
app.post("/login1",function(req,res){
    res.render("home",{username:req.body.username})
})
app.post("/signup",function(req,res){
    data = {name:req.body.name,email:req.body.email,username:req.body.username,pass:req.body.pass}
    res.render("signup_success",data)
})