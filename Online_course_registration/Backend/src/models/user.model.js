const mongoose = require('mongoose');
const  userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"Username required"]
  },
  email:{
    type:String,
    required:[true,"Email required"],
    unique:[true,"Email required"]
  },
  password:{
    type:String,
    required:[true,"Password required"]
  },
  role:{
    type:String,
    required:[true,"Role of a user is required"]
  }
})

const userModel=mongoose.model("users",userSchema);
module.exports=userModel;