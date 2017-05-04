var express = require('express');
var api = require('../controllers/restaurantController')
var router = express.Router();

router.get('/', api.getAllRestaurants)
router.post('/', api.insertRestaurant)
router.delete('/:id', api.deleteRestaurant)
router.put('/:id', api.updateRestaurant)

module.exports = router