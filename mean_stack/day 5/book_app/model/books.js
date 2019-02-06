var mongoose = require("mongoose");
var schema = mongoose.Schema;

var bookSchema = new schema({
    bookId:{type:String},
    bookName:{type:String},
    bookAuthor:{type:String},
    bookPublisher:{type:String},
    bookPrice:{type:Number},
    bookCover:{type:String},
    bookCount:{type:Number}
})

module.exports=mongoose.model("app_book",bookSchema);
