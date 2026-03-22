const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:[true,"Username required"],
    unique:[true,"With this username user already exist"]
  },
  email:{
    type:String,
    required:[true,"Email required"],
    unique:[true,"With this email user already exist"]
  },
  password:{
    type:String,
    required:[true,"Password required"]
  }
})

const userModel=mongoose.model('users',userSchema);
module.exports=userModel;