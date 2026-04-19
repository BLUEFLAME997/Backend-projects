const mongoose = require('mongoose');
const courseSchema=new mongoose.Schema({
  title:{
    type:String,
    required:[true,"Title for the course is required"],
    trim:true,
    minlength:[3,"Title must be at least 3 characters"]
  },
  description:{
    type:String
  },
  instructor:{
    type:String,
    required:[true,"Instructore required"],
    trim:true,
    minlength:[1,"Instructure must be at least 1 character"]
  },
  schedule:{
    type:String,
    required:[true,"Schedule of the course is required"],
    trim:true
  },
  credits:{
    type:Number,
    default:0,
    min: [0, "Credits cannot be negative"],
  },
  capacity:{
    type:Number,
    required:[true,"capacity of the course required"],
    min: [1 , "Enrolled count cannot be negative"]
  },
  enrolledCount:{
    type:Number,
    default:0
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:[true,"User id required for the course creation"]
  }
})

const courseModel=mongoose.model('courses',courseSchema);
module.exports=courseModel;