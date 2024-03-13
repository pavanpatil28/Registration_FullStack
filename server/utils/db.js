const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URI = "mongodb+srv://pavan_patil_28:pavan123@cluster0.edriepo.mongodb.net/mern_Server?retryWrites=true&w=majority";

const connectDb = async() => {
    try{
        await mongoose.connect(URI);
        console.log("connection successfull to Database");
    }
    catch(error){
        console.error("database connection failed");  
        process.exit(0);
    }
};

module.exports = connectDb;