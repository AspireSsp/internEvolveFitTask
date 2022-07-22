const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter The Name"],
        
    },
    calorieRequirement:{
        type:Number,
        required:[true,"Please Enter The calorieRequirement"],
    },
    mealPlan:[
        {
            date:{
                type:Date,
            },
            meals:[
                {
                    meal:{
                        type: mongoose.Schema.ObjectId,
                        ref:"meal",
                    }
                }
            ]
        }
    ]
});

module.exports= mongoose.model("user", userSchema);