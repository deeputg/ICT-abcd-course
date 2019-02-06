var express = require('express');
var router = express.Router();
var mongodb = require("mongodb")//install mongodb first
var mongoClient = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Book');
});
router.get('/model', function(req, res, next) {
    res.send('respond with a Book');
  });
router.get("/add",function(req,res){
    res.render("addBook")
})
router.post("/add",function(req,res){
    mongoClient.connect(url,function(err,database){
        if(err){
            res.send("database connection failed");
        }
        var dtb=database.db("mymongodb");
        var collections = dtb.collection("books");
        //var collection = databse.db('mymongodb').collection("employees")//similor to abouw 2 lines
        var query = {bookId:req.body.bookId,bookName:req.body.name,author:req.body.author,publisher:req.body.publisher,price:req.body.price};
        console.log(query)
        collections.insert(query,function(error,result){
            if(error){
                res.send("Error whire insertonss")
            }
            else{
                descCollection = dtb.collection("booksDescription");
                var query = {bookId:req.body.bookId,cover:req.body.coverImage,loc:req.body.loc};
                console.log(query)
                descCollection.insert(query,function(error1,result){
                    if(error1)
                    res.send("discription add error")
                    else
                    res.redirect("/")
                })
            }
        })
    });
})
module.exports = router;
