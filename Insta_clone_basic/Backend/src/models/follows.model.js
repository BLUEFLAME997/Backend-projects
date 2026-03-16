const mongoose=require('mongoose');
const followSchema=new mongoose.Schema({
  follower:{
    type:String,
    required:[true,"Follower is required"]
  },
  following:{
    type:String,
    required:[true,"Following is required"]
  },
  status:{
    type:String,
    default:'pending',
    enum:{
      values:['pending','accepted','rejected'],
      message:'status can only be pending, accepted and rejected'
    }
  }
},{
  timestamps:true
})

followSchema.index({follower:1,following:1},{unique:true});

const followModel=mongoose.model('follow',followSchema);
module.exports=followModel;