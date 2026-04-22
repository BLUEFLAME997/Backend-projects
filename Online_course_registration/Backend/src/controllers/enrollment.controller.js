const courseModel = require('../models/course.model');
const enrollmentModel = require('../models/enrollment.model');
const userModel = require('../models/user.model');

async function enrollmentController(req, res) {
  const { courseId } = req.params;
  const user = req.user;
  const userId = user.id;

  const isCourseExist = await courseModel.findOne({
    _id: courseId
  })
  if (!isCourseExist) {
    return res.status(404).json({
      Message: "Course does not exist"
    })
  }

  const isAlreadyEnrolled = await enrollmentModel.findOne({
    user: userId,
    course: courseId
  })
  if (isAlreadyEnrolled) {
    return res.status(409).json({
      Message: "User is already enrolled in the course",
      isCourseExist
    })
  }

  const isAdmin = await userModel.findOne({
    _id: userId,
    role: "admin"
  })

  if (isAdmin) {
    if (isCourseExist.createdBy.toString() === userId) {
      return res.status(403).json({
        Message: "Admin cannot enroll in its own course",
        userId
      })
    }
  }

  const courseEnrolled = await enrollmentModel.create({
    user: userId,
    course: courseId
  })

  res.status(200).json({
    Message: "Enrolled successfully",
    courseEnrolled
  })
}

async function getEnrolledCoursesController(req, res) {
  try {
    const userId = req.user.id;
    const getMyCourses = await enrollmentModel.find({
      user: userId
    }).populate('course')

    res.status(200).json({
      Message: "Courses fetched successfully",
      getMyCourses
    })
  } catch (err) {
    res.status(500).json({
      Message: "server error",
      Error: err.message
    })
  }
}

async function getCourseStudentsController(req, res) {
  const {courseId}=req.params;
  const courseStudents = await enrollmentModel.countDocuments({
    course:courseId
  })
  res.status(200).json({
    Message:"Students fetched successfully",
    courseStudents
  })
}

async function unEnrollmentController(req,res){
  const {courseId}=req.params;
  const userId = req.user.id;

  const isCourseExist=await courseModel.findOne({
    _id:courseId
  })
  if(!isCourseExist){
    return res.status(404).json({
      Message:"Course not found"
    })
  }

  const isEnrollmentExist = await enrollmentModel.findOne({
    user:userId,
    course:courseId
  })
  if(!isEnrollmentExist){
    return res.status(404).json({
      Message:"Enrollment not fouond"
    })
  }

  const enrollmentId = isEnrollmentExist._id;
  const enrollmentDelete = await enrollmentModel.deleteOne({
    _id:enrollmentId
  })

  res.status(200).json({
    Message:"Enrollment deleted successfully"
  })
}

async function checkEnrollmentController(req,res){
  const {courseId} =req.params;
  const userId = req.user.id;

  const isEnrolled=await enrollmentModel.findOne({
    user:userId,
    course:courseId
  })
  if(!isEnrolled){
    return res.status(404).json({
      Message:"Enrollment not found",
      Enrolled:false
    })
  }

  res.status(200).json({
    Message:"User is Enrolled",
    Enrolled:true
  })
}

module.exports = {
  enrollmentController,
  getEnrolledCoursesController,
  getCourseStudentsController,
  unEnrollmentController,
  checkEnrollmentController
}