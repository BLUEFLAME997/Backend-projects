const mongoose = require('mongoose');
const  userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"Username required"],
    unique:[true,"Username already exist"]
  },
  email:{
    type:String,
    required:[true,"Email required"],
    unique:[true,"Email required"]
  },
  password:{
    type:String,
    required:[true,"Password required"]
  }
})

const userModel=mongoose.model("users",userSchema);
module.exports=userModel;