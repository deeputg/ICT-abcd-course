var express = require("express")
var router = express.Router();

router.get("/",function(req,res){
    res.render("prdHome")
})
router.get("/scanner",function(req,res){
    res.render("scanner")
})
router.get("/scanner/new",function(req,res){
    res.render("scannerAdd")
})
router.get("/scanner/edit",function(req,res){
    res.render("scannerEdit")
})
router.get("/scanner/view",function(req,res){
    res.render("scannerView")
})
module.exports=router