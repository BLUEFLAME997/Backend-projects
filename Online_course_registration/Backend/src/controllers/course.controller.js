const mongoose = require('mongoose');
const courseModel = require('../models/course.model');

async function createCourseController(req, res) {
  const { title, description, instructor, schedule, credits, capacity } = req.body;
  const user = req.user;
  const userId = user.id;

  const isCourseTitleAndCreatorExist=await courseModel.findOne({
    $and:[
      {title:title},
      {createdBy:userId}
    ]
  })
  if(isCourseTitleAndCreatorExist){
    return res.status(409).json({
      Message:"Course with title already exist by the creator",
      isCourseTitleAndCreatorExist
    })
  }

  const course=await courseModel.create({
    title,
    description,
    instructor,
    schedule,
    credits,
    capacity,
    createdBy:userId
  })

  res.status(201).json({
    Message: "Course created successfully",
    course
  })
}

module.exports = {
  createCourseController
}