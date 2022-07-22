const express = require('express');
const { createFoodItems, getAllFoodItem } = require('../controller/foodItemController');

const router = express.Router();


router.route("/create/new/fooditem").post(createFoodItems)
router.route("/get/fooditems").get(getAllFoodItem);


module.exports = router; 