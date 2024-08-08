const mongoose  = require("mongoose");
const Schema = mongoose.Schema

const newSchema = new Schema ({
    title : String , 
    body : String , 
    Numberoflike : Number ,
})

const Article = mongoose.model("Article" , newSchema) 

module.exports = Article ;