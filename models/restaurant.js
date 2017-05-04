var mongoose = require('mongoose')
var Schema = mongoose.Schema

var restaurantSchema = new Schema({
  name:String,
  owner:String,
  address:String,
  open_status:Boolean
})

var Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant