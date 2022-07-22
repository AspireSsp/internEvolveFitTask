const express = require('express');
const { createUser, updateUserMeal } = require('../controller/userController');

const router = express.Router();


router.route("/create/new/user").post(createUser)
router.route("/update/user/meal/:id").patch(updateUserMeal)


module.exports = router; 