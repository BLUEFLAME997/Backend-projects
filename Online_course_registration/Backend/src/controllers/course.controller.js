const mongoose = require('mongoose');
const courseModel = require('../models/course.model');

async function createCourseController(req, res) {
  const { title, description, instructor, schedule, credits, capacity } = req.body;
  const user = req.user;
  const userId = user.id;

  const isCourseTitleAndCreatorExist = await courseModel.findOne({
    $and: [
      { title: title },
      { createdBy: userId }
    ]
  })
  if (isCourseTitleAndCreatorExist) {
    return res.status(409).json({
      Message: "Course with title already exist by the creator",
      isCourseTitleAndCreatorExist
    })
  }

  const course = await courseModel.create({
    title,
    description,
    instructor,
    schedule,
    credits,
    capacity,
    createdBy: userId
  })

  res.status(201).json({
    Message: "Course created successfully",
    course
  })
}

async function getCourseController(req, res) {
  const page = Number(req.params.page) || 1;
  const limit = Number(req.params.limit) || 10;
  const search = req.params.search;
  const instructor = req.params.instructor;
  const credits = req.params.credits;

  let filter = {};
  if (search && search.trim() !== "") {
    filter.title = { $regex: search, $options: 'i' }
  }

  if (instructor && instructor.trim() !== "") {
    filter.instructor = instructor
  }

  if (credits && credits.trim() !== "") {
    filter.credits = Number(credits);
  }

  const skip = (page - 1) * (limit);

  const allCourses = await courseModel
    .find(filter)
    .skip(skip)
    .limit(limit)
    .select("title instructor schedule capacity enrolledCount")
    .sort({ createdAt: -1 });

  const totalCourses = await courseModel.find(filter);

  res.status(200).json({
    Message: "Course fetched successfully",
    success: true,
    page,
    limit,
    totalCourses,
    totalPages: Math.ceil(totalCourses / limit),
    data: allCourses
  })
}

async function getCourseDetailController(req, res) {
  const { courseId } = req.params;
  const courseDetail = await courseModel.findOne({
    _id: courseId
  })

  if (!courseDetail) {
    return res.status(404).json({
      Message: "Course not found",
      courseId
    })
  }

  res.status(200).json({
    Message: "Course detail fetched successfully",
    courseDetail
  })
}

async function updateCourseController(req, res) {
  const { courseId } = req.params;
  const { description, instructor, schedule, capacity } = req.body;

  const isCourseExist = await courseModel.findOne({
    _id: courseId
  })
  if (!courseId) {
    return res.status(404).json({
      Message: "Course not found for update"
    })
  }

  if (isNaN(Number(capacity))) {
    return res.status(400).json({
      Message: "Capacity should be a number",
      capacity
    })
  }

  const courseCapacityValue = Number(capacity);

  if (courseCapacityValue < isCourseExist.enrolledCount) {
    return res.status(400).json({
      Message: "Capacity cannot be less than enrolled students"
    })
  }

  const updatedCourse = await courseModel.updateOne({
    _id: courseId
  }, {
    $set: {
      description: description,
      instructor: instructor,
      schedule: schedule,
      capacity: courseCapacityValue
    }
  })

  res.status(200).json({
    Message: "Course found",
    isCourseExist
  })
}

async function updateCourseEnrollCountController(req, res) {
  const { courseId } = req.params;

  const isCourseExist = await courseModel.findOne({
    _id: courseId
  })
  if (!isCourseExist) {
    return res.status(404).json({
      Message: "Course not found"
    })
  }

  const count = isCourseExist.enrolledCount+1;

  const updateEnrollCount = await courseModel.updateOne({
    _id:courseId
  },{
    $set:{
      enrolledCount:count
    }
  })

  res.status(200).json({
    Message:"EnrollCount updated successfully",
    updateEnrollCount
  })
}

module.exports = {
  createCourseController,
  getCourseController,
  getCourseDetailController,
  updateCourseController,
  updateCourseEnrollCountController
}