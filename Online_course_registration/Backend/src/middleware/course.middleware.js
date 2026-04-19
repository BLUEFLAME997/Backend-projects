const mongoose = require('mongoose');
const courseModel = require('../models/course.model');

async function validateCreateCourse(req, res, next) {
  const { title, description, instructor, schedule, credits, capacity } = req.body;

  if (!title || title.trim() === "" || title.trim().length < 3) {
    return res.status(400).json({
      Message: "Title is too short"
    })
  }
  if (!instructor || instructor.trim() === "" || instructor.length < 1) {
    return res.status(400).json({
      Message: "Instructor name is too short"
    })
  }
  if (!schedule || schedule.trim() === "") {
    return res.status(400).json({
      Message: "Schedule cannot be empty"
    })
  }
  if (credits === undefined) {
    return res.status(400).json({
      Message: "Credits cannot be empty or undefined"
    })
  }
  if (credits !== undefined && isNaN(Number(credits))) {
    return res.status(400).json({
      Message: "Credits must be a number"
    })
  }
  if (capacity === undefined || isNaN(Number(capacity))) {
    return res.status(400).json({
      Message: "Capacity must be a valid number"
    });
  }
  if (Number(capacity) < 1) {
    return res.status(400).json({
      Message: "Capacity cannot be 0 or negative"
    })
  }

  next();
}

module.exports = {
  validateCreateCourse
}