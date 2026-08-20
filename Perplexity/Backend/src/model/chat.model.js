import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:[true,"User id required"]
  },
  title:{
    type:String,
    required:[true,"Chat title required"],
    trim:true,
    default:"New Chat"
  }
},{
  timestamps:true
})

const chatModel = mongoose.model('chats',chatSchema);
export default chatModel;