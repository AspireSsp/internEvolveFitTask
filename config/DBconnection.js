const mongoose = require("mongoose");
 
const connectDB = async () =>{
        console.log(process.env.PORT)
        mongoose.connect(process.env.mongoURL, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        }).then((data)=>{
            console.log(`connnected to mongoDB : ${data.connection.host}`);
        }).catch(() => {
            console.log('Connection to database failed!')
        })
    
}




module.exports = connectDB;    