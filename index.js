var express = require("express")
var app = express()
app.set("view engine", "hbs")
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/recipes')
var db = mongoose.connection;

app.get('/', function(req, res){
  
})

app.listen(3030, function(){
  console.log("Listening localhost:3030");
})
