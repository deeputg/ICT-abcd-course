var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    bookId:{type:String},
    bookName:{type:String},
    bookPrice:{type:Number}
});

module.exports=mongoose.model("BooksDB",BookSchema)