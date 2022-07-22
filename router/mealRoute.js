const express = require('express');
const { createMeal, updateMeal } = require('../controller/mealController');

const router = express.Router();


router.route("/create/new/meal").post(createMeal);
router.route("/update/meal/:id").patch(updateMeal);


module.exports = router; 