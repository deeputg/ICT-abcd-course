var express = require("express");
var bodyParser = require("body-parser")
var mongoose = require("mongoose");
var expressFileUpload = require("express-fileupload")

var bookModel = require("./model/books");
var db = "mongodb://127.0.0.1:27017/mymongodb";

var app = express();

mongoose.connect(db,function(err){
    if(err)console.log("Unable to connect");
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(expressFileUpload())
app.set("view engine","ejs");

app.get("/",function(req,res){
    bookModel.find({},function(error,result){
        if(result)
        res.render("home",{data:result});
        else
        console.log(err)
    })
    
})
app.get("/insert",function(req,res){
    res.render("bookInsert");    
})
app.post("/insert",function(req,res){
    let bookCover1 = req.files.bookCover;
    bookCover1.mv(__dirname+"/images/"+bookCover1.name,function(err){
        if(err)
        console.log("file upload errpr")
    })

    var b1 = new bookModel();
    b1.bookId = req.body.bookId;
    b1.bookName = req.body.bookName;
    b1.bookPrice = req.body.bookPrice;
    b1.bookAuthor = req.body.booAuthor;
    b1.bookCount = req.body.bookCount;
    b1.bookPublisher = req.body.bookPublisher;
    b1.bookCover=bookCover1.name;
    b1.save(function(err){
        if(err){
            res.send("err")
        }
        else
        res.redirect("/")
    });
})

app.listen(8000,function(req,res){
    console.log("Server started!")
})