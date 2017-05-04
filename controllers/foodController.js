var ObjectId = require('mongodb').ObjectId
var Food = require('../models/food')
const methods = {}

// SHOW ALL FOODS
methods.getAllFoods = function(req,res){
  Food.find(function(err,Food){
    if(err){
      console.log(err);
    }
    else{
      res.send(Food)
    }
  })
}// SHOW ALL FOODS


//INSERT FOOD
methods.insertFood = function(req,res){
  var foodInput = new Food({
    name:req.body.name,
    price:req.body.price
  })
  foodInput.save(function(err, foodInput){
    if(err){
      return console.log(err);
    }
    else{
      res.send(foodInput)
    }
  })
}//INSERT FOOD

//FIND ONE
methods.findOne = function(req,res){
  Food.findById(req.params.id,function(err, result){
    if(!err){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}//FIND ONE

//DELETE FOODS
methods.deleteFood = function(req,res){
  Food.findByIdAndRemove(req.params.id,function(err, result){
    if(!err){
      res.send('berhasil hapus data')
    }else{
      res.send(err)
    }
  })
}//DELETE FOODS



module.exports = methods