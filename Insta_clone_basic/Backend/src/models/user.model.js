const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  userName:{
    type:String,
    unique:[true,"User already exists"],
    required:[true,"User name required"]
  },
  email:{
    type:String,
    unique:[true,"Email already exists"],
    required:[true,"Email required"]
  },
  password:{
    type:String,
    required:[true,"Password required"],
    // select:false //here now mongoose will not read this field from anywhere or for anyone
  },
  bio:String,
  profileImage:{
    type:String,
    default:"https://ik.imagekit.io/djhzv5vfq/insta-all-posts/default_image2.jpg?updatedAt=1774101247186"
  }
})

const userModel=mongoose.model("users",userSchema);
module.exports=userModel;