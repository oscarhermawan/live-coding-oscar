var mongoose = require('mongoose')
var Schema = mongoose.Schema

var foodSchema = new Schema({
  name:String,
  price:String,
  expired_date:{
    type:Date,
    default: Date.now
  }
})

var Food = mongoose.model('Food', foodSchema)

module.exports = Food