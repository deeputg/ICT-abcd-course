var express = require("express");
var bodyparser = require("body-parser")//new line
var mongodb = require("mongodb")//install mongodb first
var mongoClient = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/mymongodb";
const app = express();
app.use(bodyparser.urlencoded({extended:true}))//new line
app.set("view engine","ejs")
app.get("/",function(req,res){
    res.render("home");
})
app.post("/insert",function(req,res){
    mongoClient.connect(url,function(err,database){
        if(err){
            res.send("database connection failed");
        }
        var dtb=database.db("mymongodb");
        var collections = dtb.collection("employees");
        //var collection = databse.db('mymongodb').collection("employees")//similor to abouw 2 lines
        var query = {empId:req.body.empId,empName:req.body.empName,dept:req.body.dept,sal:req.body.sal,loc:req.body.loc};
        console.log(query)
        collections.insert(query,function(error,result){
            if(error){
                res.send("Error whire insertonss")
            }
            else{
                res.send(result)
            }
        })
    });
})
app.listen(8000,function(req,res){
    console.log("Server started listenig")
})