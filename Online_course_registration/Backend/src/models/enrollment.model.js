const mongoose = require('mongoose');
const enrollmentSchema=new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    required:[true,"User id required"],
    ref:'users'
  },
  course:{
    type:mongoose.Schema.Types.ObjectId,
    required:[true,"Course id required"],
    ref:'courses'
  },
  status:{
    type:String,
    enum:['active','completed','dropped'],
    default:'active'
  },
  progress:{
    type:Number,
    min:0,
    max:100,
    default:0
  },
  enrolledAt:{
    type:Date,
    default:Date.now
  },
  completedAt:{
    type:Date,
  },
  lastAccessedAt:{
    type:Date
  }
},{
  timestamps:true
})

const enrollmentModel=mongoose.model('enrollments',enrollmentSchema);
module.exports=enrollmentModel;