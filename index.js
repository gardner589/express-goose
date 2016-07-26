var express = require("express")
var mongoose = require('mongoose')
var app = express()
app.set("view engine", "hbs")
mongoose.connect('mongodb://localhost/recipes')
var db = mongoose.connection;

app.get('/', function(req, res){
  var recps = db.recipes.find();
  res.send("<h1>recps</h1>");
})

app.listen(3030, function(){
  console.log("Listening localhost:3030");
})
