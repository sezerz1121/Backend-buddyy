import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
         
          "name": String,
          "email": String,
          "picture":String,
         
       
});

const User = mongoose.model("user", userSchema);

export default User;