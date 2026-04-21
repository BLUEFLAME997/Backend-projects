const express = require('express');
const enrollmentRoute = express.Router();
const enrollmentModel = require('../models/enrollment.model');
const enrollmentController = require('../controllers/enrollment.controller');
const identifyUser = require('../middleware/auth.middleware');

/* 
@route: POST /api/enrollments/:courseId
@description: To create a enrollment document of the user for the course
*/
enrollmentRoute.post('/:courseId', identifyUser, enrollmentController.enrollmentController);

module.exports = enrollmentRoute