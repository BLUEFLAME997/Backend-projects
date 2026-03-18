require('dotenv').config();
const express = require('express');
const authRoute = express.Router();
const authController=require('../controllers/auth.controller');
const identifyUser=require('../middleware/auth.middleware');

authRoute.post('/register',authController.registerController);

authRoute.post('/login',authController.loginController);

authRoute.get('/get-me',identifyUser,authController.getMeController);

module.exports = authRoute;