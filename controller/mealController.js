const Meal = require("../models/meal");

//  create meal -->
exports.createMeal = async (req, res, next) => {
  console.log(req.body);
  try {
    const meal = await Meal.create(req.body);
    res.status(201).json({
      success: true,
      meal,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

///    update meals -->
exports.updateMeal = async (req, res) => {
  console.log("hi sanjay");
  try {
    let meal = await Meal.findById(req.params.id);
    // console.log(meal);
    if (!meal) {
      return res.status(404).json({
        success: false,
        message: "meal not found",
      });
    }

    meal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      meal,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
