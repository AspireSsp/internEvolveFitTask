const User = require("../models/user");

//  create User -->
exports.createUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

///   update user meal Plan -->
exports.updateUserMeal = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    // console.log(user.mealPlan[0].meals)
    const uaerMeal = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { mealPlan: req.body } },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    res.status(200).json({
      success: true,
      uaerMeal,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
