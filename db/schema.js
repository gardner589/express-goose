var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipes')

var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});
db.once('open', function() {
  console.log("database has been connected!");
});
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var IngredientSchema = new Schema({
  name: String,
});

var RecipeSchema = new Schema({
  title: String,
  ingredients:[IngredientSchema]
});

var Recipe = mongoose.model("Recipe", RecipeSchema);
var Ingredient = mongoose.model("Ingredient", IngredientSchema);

var omlette = new Recipe({title: "omlette"})
var eggs = new Ingredient({name: "Eggs"})
var cheese = new Ingredient({name: "Queso"})

omlette.ingredients.push(eggs)
omlette.ingredients.push(cheese)

omlette.save(function(err, recipe){
  if(err){
    console.log(err);
  }
  else{
    console.log(recipe);
  }
})

module.exports = Recipe;

// {type: Schema.ObjectId, ref: "Recipe"}
// console.log(omlette.ingredients);
