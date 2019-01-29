var express = require('express');
const app = express();//calling the variable express

app.listen(8000,function(req,res){
    console.log("server started listeing to port 8000");
});
