
const express = require("express");
const app = express();

app.use(express.json());

//    route are import here..
const foodItem = require("./router/fooodItemRoute");
const meal = require('./router/mealRoute')
const user = require('./router/userRouter')

app.use("/api/v1", foodItem);
app.use("/api/v1", meal);
app.use("/api/v1", user);



module.exports = app;
