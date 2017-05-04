var ObjectId = require('mongodb').ObjectId
var Restaurant = require('../models/restaurant')
const methods = {}

methods.getAllRestaurants = function(req,res){
  Restaurant.find(function(err,Restaurant){
    if(err){
      console.log(err);
    }
    else{
      res.send(Restaurant)
    }
  })
}

methods.insertRestaurant = function(req,res){
  var restaurantInput = new Restaurant({
    name:req.body.name,
    owner:req.body.owner,
    address:req.body.address,
    open_status:req.body.openstatus
  })
  restaurantInput.save(function(err, restaurantInput){
    if(err){
      return console.log(err);
    }
    else{
      res.send(restaurantInput)
    }
  })
}

methods.findOne = function(req,res){
  Restaurant.findById(req.params.id,function(err, result){
    if(!err){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

methods.deleteRestaurant = function(req,res){
  Restaurant.findByIdAndRemove(req.params.id,function(err, result){
    if(!err){
      res.send('berhasil hapus data')
    }else{
      res.send(err)
    }
  })
}

methods.updateRestaurant = function(req,res){
  let updateRestaurant = {
    name:req.body.name,
    owner:req.body.owner,
    address:req.body.address,
    open_status:req.body.openstatus
  }

  Restaurant.findByIdAndUpdate(req.params.id, updateRestaurant, {new:true}, function(err, result){
    if(!err){
      res.send('berhasil update data')
    }else{
      res.send(err)
    }
  })
}

module.exports = methods