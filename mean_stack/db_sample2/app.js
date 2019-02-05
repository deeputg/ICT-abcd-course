var express = require("express");
var bodyparser = require("body-parser")
var mongodb = require("mongodb")//install mongodb first
var mongoClient = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/mymongodb";
const app = express();
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.get("/",function(req,res){
    res.render("home");
})
app.get("/add",function(req,res){
    res.render("addEmp");
})
app.get("/delete",function(req,res){
    mongoClient.connect(url,function(err,database){
        if(err){
            console.log("Database connection error "+err)
        }
        else{
            var dtb=database.db("mymongodb");
            var collections = dtb.collection("employees");
            collections.find().toArray(function(err,data1){
                if(err){
                    res.send("no data");
                }
                else{
                    console.log(data1);
                    res.render("deleteEmp",{data:data1});
                }
            })
        }
    })
})
app.post("/delete",function(req,res){
    mongoClient.connect(url,function(err,database){
        if(err){
            res.send("database connection failed");
        }
        var dtb=database.db("mymongodb");
        var collections = dtb.collection("employees");
        //var collection = databse.db('mymongodb').collection("employees")//similor to abouw 2 lines
        var condition = {empId:parseInt(req.body.empId)};
        console.log(condition)
        collections.remove(condition,function(error,result){
            if(error){
                res.send("Error whire insertonss")
            }
            else{
                res.send(result)
            }
        })
    });
})
app.get("/view",function(req,res){
    mongoClient.connect(url,function(err,database){
        if(err){
            console.log("Database connection error "+err)
        }
        else{
            var dtb=database.db("mymongodb");
            var collections = dtb.collection("employees");
            collections.find().toArray(function(err,data1){
                if(err){
                    res.send("no data");
                }
                else{
                    console.log(data1);
                    res.render("empView",{data:data1});
                }
            })
        }
    })
    
})
app.get("/edit",function(req,res){
    mongoClient.connect(url,function(err,database){
        if(err){
            console.log("Database connection error "+err)
        }
        else{
            var dtb=database.db("mymongodb");
            var collections = dtb.collection("employees");
            collections.find().toArray(function(err,data1){
                if(err){
                    res.send("no data");
                }
                else{
                    console.log(data1);
                    res.render("editEmp",{data:data1});
                }
            })
        }
    })
})
app.post("/edit",function(req,res){
    mongoClient.connect(url,function(err,database){
        if(err){
            res.send("database connection failed");
        }
        var dtb=database.db("mymongodb");
        var collections = dtb.collection("employees");
        //var collection = databse.db('mymongodb').collection("employees")//similor to abouw 2 lines
        var condition = {empId:parseInt(req.body.empId)};
        console.log(condition)
        collections.find(condition).toArray(function(error,result){
            console.log(result)
            if(error){
                res.send("Error while insertonss")
            }
            else{
                res.render("updatePage",{data:result})
            }
        })
    });
})
app.post("/update",function(req,res){
    mongoClient.connect(url,function(err,database){
        if(err){
            res.send("database connection failed");
        }
        var dtb=database.db("mymongodb");
        var collections = dtb.collection("employees");
        //var collection = databse.db('mymongodb').collection("employees")//similor to abouw 2 lines
        var query = {empName:req.body.empName,dept:req.body.dept,sal:parseInt(req.body.sal),loc:req.body.loc};
        var condition = {empId:parseInt(req.body.empId )}
        console.log(condition)
        collections.update(condition,{$set:query},function(error,result){
            console.log(result)
            if(error){
                res.send("Error while insertonss")
            }
            else{
                res.redirect("/edit")
            }
        })
    });
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