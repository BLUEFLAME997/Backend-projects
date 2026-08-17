const express = require('express');
const authRoute = express.Router();
const authController = require('../controllers/auth.controller');
const identifyUser = require('../middleware/auth.middleware');

/* 
@route: POST /api/auth/register
@description: To get the values from the users and create a new user in database (register)
*/
authRoute.post('/register', authController.userRegisterController);
/* 
@route: POST /api/auth/login
@description: To login the user in the application
*/
authRoute.post('/login', authController.userLoginController);
/* 
@route: GET /api/auth/get-me
@description: To get the user details
*/
authRoute.get('/get-me', identifyUser, authController.userGetMeController);
/* 
@route: GET /api/auth/logout
@desciption: To logout user from the application
*/
authRoute.get('/logout', identifyUser, authController.userLogoutController);

module.exports = authRoute