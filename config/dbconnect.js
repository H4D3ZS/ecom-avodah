const {default : mongoose} = require("mongoose");
// Database Connection From Serverside To Server To Mongoose
const dbConnect = () => {
    
    try{
const conn = mongoose.connect(process.env.MONGODB_URL);
     console.log("Database Connection Success")
    }
    catch(error){
       console.log("Database Error");
    }
}
module.exports = dbConnect;