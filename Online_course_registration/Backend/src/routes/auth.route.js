const express = require('express');
const authRoute=express.Router();
const authController=require('../controllers/auth.controller');

/* 
@route: POST /api/auth/register
@description: To get the values from the users and create a new user in database (register)
*/
authRoute.post('/register',authController.userRegisterController);
/* 
@route: POST /api/auth/login
@description: To login the user in the application
*/
authRoute.post('/login',authController.userLoginController);

module.exports=authRoute