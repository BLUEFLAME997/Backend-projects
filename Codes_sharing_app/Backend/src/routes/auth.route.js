const express=require('express');
const authRoute=express.Router();
const authController=require('../controllers/auth.controller');

/* 
@route: POST /api/auth/register
@description: create a new user in db 
*/
authRoute.post('/register',authController.userRegisterController);

/* 
@route: POST /api/auth/login
@description: to login a existing user
*/
authRoute.post('/login',authController.userLoginController);

/* 
@route: GET /api/auth/get-me
@description: to verify the user token 
*/
authRoute.get('/get-me',authController.userVerifyController);

module.exports=authRoute