const mongoose = require("mongoose");

var Units = ["ml", "liter", "kg", "g", "item"];
const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter The Name"],
        
    },
    calories:{
        type:Number,     
    },
    protein:{
        type:Number,
        required:[true,"Please Enter Protein value"],
            
    },
    carb:{
        type:Number,
        required:[true,"Please Enter Carb value"],
    },
    fat:{
        type:Number,
        required:[true,"Please Enter FAt value"],
    },
    acceptedUnits:{
        type:String,
        enum:Units,
        default:Units[3],
    },
    itemWeight:{
        type:Number,
        required:[true,"Please Enter itemWeight"],
    },
});

module.exports= mongoose.model("foodItems", foodSchema);