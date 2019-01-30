var express = require("express");
var router =express.Router();

router.get("/",function(req,res){
    res.render("books")
})
router.get("/new",function(req,res){
    res.render("addBooks");
})

module.exports=router;