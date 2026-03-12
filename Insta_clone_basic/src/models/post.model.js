const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
  caption:{
    type:String,
    default:""
  },
  imgUrl:{
    type:String,
    required:[true,"Image url required for post creation"]
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:[true,"User id required for post creation"]
  }
})