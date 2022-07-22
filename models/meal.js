const mongoose = require("mongoose");

var timeOfDay = ["Breakfast","Lunch","Evening Snack","Dinner"];
const mealSchema = new mongoose.Schema({
    category:{
        type:String,
        enum:timeOfDay,
    },
    name:{
        type:String,
        required:[true,"Please Enter The Name"],  
    },
    foodItems:[
        {
            items:{
                type: mongoose.Schema.ObjectId,
                ref:"foodItem",
            },
            quantity:{
                type: Number,
            }
        }
    ]
});

module.exports= mongoose.model("meal", mealSchema);