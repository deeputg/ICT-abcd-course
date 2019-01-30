var express = require('express');
var bodyparser = require("body-parser");
const app = express()   
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")

//setting up json variable look like it is taken from a db
var books = [{bookId:1,bookName:"A game of thrones",author:"George RRM",price:1110},{bookId:2,bookName:"A game of thrones",author:"George RRM",price:1110},{bookId:3,bookName:"ice and fire",author:"George RRM",price:1120}]


app.listen(8000,function(req,res){
    console.log("server started")
})
app.get("/",function(req,res){
    res.render("home",{data:books})
})