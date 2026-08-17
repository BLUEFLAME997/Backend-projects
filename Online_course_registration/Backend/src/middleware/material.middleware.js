const userModel = require('../models/user.model');
const courseModel = require('../models/course.model');

async function checkCreator(req, res, next) {
  const { courseId } = req.params;
  const user = req.user;

  const checkIfCourseCreator = await courseModel.findOne({
    _id: courseId,
    createdBy: user.id
  })
  if (!checkIfCourseCreator) {
    return res.status(403).json({
      Message: "You are not authorized to modify this course"
    })
  }

  next();
}

module.exports = checkCreator;
