const mongoose = require('mongoose');
const courseSchema=new mongoose.Schema({
  title:{
    type:String,
    required:[true,"Title for the course is required"]
  },
  description:{
    type:String
  },
  instructor:{
    type:String,
    required:[true,"Instructore required"]
  },
  schedule:{
    type:String,
    required:[true,"Schedule of the course is required"]
  },
  credits:{
    type:String,
    default:"0"
  },
  capacity:{
    type:Number,
    required:[true,"capacity of the course required"]
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:[true,"User id required for the course creation"]
  }
})

const courseModel=mongoose.model('courses',courseSchema);
module.exports=courseModel;