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



module.exports=authRoute