var express = require("express")
var mongoose = require('mongoose')
var schema = require("./db/schema.js")
var app = express()
app.set("view engine", "hbs")
mongoose.connect('mongodb://localhost/recipes')
var db = mongoose.connection;
var Recipe = mongoose.model("Recipe");
// var stuff = Recipe.find({})
app.get('/', function(req, res){
  Recipe.find({}, function(err, recipes){
    res.json(recipes)
  })
})

app.listen(3030, function(){
  console.log("Listening localhost:3030");
})


// console.log("thing");
// res.send("<h1>"+stuff+"</h1>");
