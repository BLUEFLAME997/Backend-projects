const express = require('express');
const courseRoute=express.Router();
const identifyUser=require('../middleware/auth.middleware');
const courseController=require('../controllers/course.controller');

/* 
@route: POST /api/course/create-course
@description: To create a course by taking data from the user
*/
courseRoute.post('/create-course',identifyUser,courseController.createCourseController);

module.exports=courseRoute;