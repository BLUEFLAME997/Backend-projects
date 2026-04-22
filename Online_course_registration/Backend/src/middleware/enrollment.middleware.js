const userModel=require('../models/user.model');
const courseModel=require('../models/course.model');

async function checkAdmin(req,res,next){
  const userId=req.user.id;
  const {courseId}=req.params;

  const isAdmin=await userModel.findOne({
    _id:userId,
    role:"admin"
  })
  if(!isAdmin){
    return res.status(401).json({
      Message:"Not an admin"
    })
  }

  const isCourseExist = await courseModel.findOne({
    _id:courseId
  })
  if(!isCourseExist){
    return res.status(404).json({
      Message:"Course not found"
    })
  }

  const isCreator = await courseModel.findOne({
    _id:courseId,
    createdBy:userId
  })
  if(!isCreator){
    return res.status(401).json({
      Message:"Only creator can access this course"
    })
  }

  next();
}

module.exports={
  checkAdmin
}