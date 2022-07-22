const FoodItems = require("../models/foodItem");
const ApiFeatures = require("../utils/ApiFeatures");

//  create foodItems -->
exports.createFoodItems = async (req, res) => {
  console.log(req.body);
  try {
    const item = await FoodItems.create(req.body);
    res.status(201).json({
      success: true,
      item,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

//   get all foodItem
exports.getAllFoodItem = async (req, res) => {
  try {
    const numOfDiffItems = 5;
    const apiFeature = new ApiFeatures(FoodItems.find(), req.query)
      .filter()
      .differentItem(numOfDiffItems);

    const foodItems = await apiFeature.query;
    // console.log(foodItems);
    res.status(201).json({
      success: true,
      foodItems,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};
