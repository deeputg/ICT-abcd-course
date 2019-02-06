var express =require("express");
var mongoose = require('mongoose');
var bodyparser = require("body-parser");
var expressFileUpload = require("express-fileupload")

var book = require("./model/Book");
var app = express();

app.use(bodyparser.urlencoded({extended:true}))

var db = "mongodb://127.0.0.1:27017/mymongodb";

app.set('view engine', 'ejs');
app.use(expressFileUpload())

app.get("/",function(req,res){
    res.render("home")
})
app.get("/add",function(req,res){
    res.render("addBook")
})
app.post("/add",function(req,res){
    
    //mongoose.connect(db)//will work fine
    mongoose.connect(db,function(err){
    if(err)
    console.log("data");

    var b1 = new book();
    b1.bookId = req.body.bookId;
    b1.bookName = req.body.bookName;
    b1.bookPrice = req.body.bookPrice;
    b1.save(function(err){
        if(err){
            res.send("err")
        }
        else
        res.send("data inserted")
    });
})
})

app.get("/delete",function(req,res){
    res.render("deleteBook")
})
app.post("/delete",function(req,res){
    mongoose.connect(db,function(err){
        if(err)
        console.log(err);
    
    book.deleteOne({bookId:"a001"},function(err,result){
        if(err){
            res.send("error deleting"+err);
        }
        else{
            res.send("data deleted succesfully")
        }
       
    })
})

})
app.get("/view",function(req,res){
    mongoose.connect(db,function(err){
        if(err)
        console.log(err);
        book.find({},function(err,result){
            if(err){
                res.send("error deleting"+err);
            }
            else{
                res.render("viewBooks",{data:result})
            }
        })
    })
})
app.post("/view",function(req,res){
    mongoose.connect(db,function(err){
        if(err)
        console.log(err);
        book.find({bookId:req.body.bookId},function(err,result){
            if(err){
                res.send("error deleting"+err);
            }
            else{
                res.render("viewBooks",{data:result})
            }
        })
    })
})
app.get("/update",function(req,res){
    mongoose.connect(db,function(err){
        if(err)
        console.log(err);
        book.findOne({bookId:"a001"},function(err,result){
            if(err){
                res.send("error deleting"+err);
            }
            else{
                result.bookName="jhghgh";
                result.bookPrice=900;
                result.save();
                res.send("updated")
            }
        })
    })
})
app.post("/fileUpload",function(req,res){
    let sampleFile = req.files.sampleFile;
    sampleFile.mv(__dirname+"/images/abc"+req.body.sampleFile+".jpg",function(err){
        if(err)
        res.send("file upload failed")
        else
        res.send("file upload successful")
    })
})
app.get("/login",function(req,res){
    res.render("login")
})
app.post("/login",function(req,res){
    let name =req.body.name;
    res.render("homeLogin",{name:name})
})
app.listen(8000,function(req,res){
    console.log("Server started succesfully");
})