const app = require('./app')
const dotenv = require('dotenv');
const connectDB = require('./config/DBconnection');
const PORT = process.env.PORT || 5000;


// configuring the port
dotenv.config({path:'config/config.env'});
// database connection
connectDB()




app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port  ${PORT}`);
});


