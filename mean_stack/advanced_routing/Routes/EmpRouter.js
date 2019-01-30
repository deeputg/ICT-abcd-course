var express = require("express")
var router = express.Router();
router.get("/",function(req,res){
    res.render('empHome');
})
router.get("/new",function(req,res){
    res.render('empNew');
})
router.get("/new/permanent",function(req,res){
    res.render('empNewPer');
})
router.get("/new/temp",function(req,res){
    res.render('empNewTemp');
})
module.exports=router