var express = require("express");
var empRouter = require('./Routes/EmpRouter')
var prdRouter = require('./Routes/PrdRouter')
const app = express();
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home")
})
app.use('/employee',empRouter);
app.use("/product",prdRouter)

app.listen(8000,function(req,res){
    console.log("server started succesfully")
})