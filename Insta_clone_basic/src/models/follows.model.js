const mongoose=require('mongoose');
const followSchema=new mongoose.Schema({
  follower:{
    type:String,
    required:[true,"Follower is required"]
  },
  following:{
    type:String,
    required:[true,"Following is required"]
  }
},{
  timestamps:true
})

followSchema.index({follower:1,following:1},{unique:true});

const followModel=mongoose.model('follow',followSchema);
module.exports=followModel;