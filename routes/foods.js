var express = require('express');
var api = require('../controllers/foodController')
var router = express.Router();

router.get('/', api.getAllFoods)
router.post('/', api.insertFood)
router.delete('/:id', api.deleteFood)
router.put('/:id', api.updateFood)

module.exports = router