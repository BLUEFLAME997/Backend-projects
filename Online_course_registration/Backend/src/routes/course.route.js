const express = require('express');
const courseRoute = express.Router();
const identifyUser = require('../middleware/auth.middleware');
const courseController = require('../controllers/course.controller');
const courseMiddleware = require('../middleware/course.middleware');

/* 
@route: POST /api/course/create-course
@description: To create a course by taking data from the user
*/
courseRoute.post('/create-course', identifyUser, courseMiddleware.validateCreateCourse, courseController.createCourseController);
/* 
@route: GET /api/course/get-courses
@description: To get the courses on page limit basis (pagination)
*/
courseRoute.get('/get-courses', identifyUser, courseController.getCourseController);
/* 
@route: GET /api/course/:id
@description: To get details of a particular course
*/
courseRoute.get('/:courseId',identifyUser,courseController.getCourseDetailController);

module.exports = courseRoute;