const express = require('express');
const enrollmentRoute = express.Router();
const enrollmentModel = require('../models/enrollment.model');
const enrollmentController = require('../controllers/enrollment.controller');
const identifyUser = require('../middleware/auth.middleware');
const enrollmentMiddleware = require('../middleware/enrollment.middleware');

/* 
@route: POST /api/enrollments/:courseId
@description: To create a enrollment document of the user for the course
*/
enrollmentRoute.post('/:courseId', identifyUser, enrollmentController.enrollmentController);
/* 
@route: GET /api/enrollments/my-courses
@description: To get all the enrolled courses of the user
*/
enrollmentRoute.get('/my-courses',identifyUser,enrollmentController.getEnrolledCoursesController);
/* 
@route: GET /api/enrollments/course/:courseId
@description: To get total number of students in a particular course
*/
enrollmentRoute.get('/course/:courseId',identifyUser,enrollmentMiddleware.checkAdmin,enrollmentController.getCourseStudentsController);
/* 
@route: DELETE /api/enrollments/course/:courseId\
@description: To delete the enrollment of the specified course
*/
enrollmentRoute.delete('/course/:courseId',identifyUser,enrollmentController.unEnrollmentController);

module.exports = enrollmentRoute