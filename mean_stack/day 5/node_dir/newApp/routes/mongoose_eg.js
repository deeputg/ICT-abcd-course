var express = require('express');
var mongoose = require('mongoose')
var router = express.Router();

var db = "mongodb://127.0.0.1:27017/mymongodb";
//mongoose.connect(db)//will work fine
mongoose.connect(db,function(err){
    console.loge(err);
})

var book = require("../model/Book")
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render("booksMongooseHome");
});
router.post("/insert",function(req,res){
    var b1 = new book();
    b1.bookId = "a001";
    b1.bookName = "Welcome to Node";
    b1.bookPrice = 1000;
    b1.save;
})

module.exports = router;
