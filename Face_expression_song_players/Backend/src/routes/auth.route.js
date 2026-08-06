const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/auth.controller');
const identifyUser = require('../middleware/identifyUser');

// POST: /api/register
// Description: To register user in the DB
authRouter.post('/register', authController.userRegistrationController);

// POST: /api/login
// Description: To login user in the application
authRouter.post('/login', authController.userLoginController);

// GET: /api/get-me
// Description: To get the user details
authRouter.get('/get-me',identifyUser.identifyUser,authController.getMeController);

// GET: /api/logout
// Description: To logout the user from the application
authRouter.get('/logout',authController.userLogoutController);

module.exports = authRouter;