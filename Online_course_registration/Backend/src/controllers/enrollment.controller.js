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
    user:userId,
    course:courseId
  })
  if(isAlreadyEnrolled){
    return res.status(409).json({
      Message:"User is already enrolled in the course",
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

module.exports = {
  enrollmentController
}