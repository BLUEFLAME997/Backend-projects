const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/auth.controller');

// POST: /api/register
// Description: To register user in the DB
authRouter.post('/register', authController.userRegistrationController);

// POST: /api/login
// Description: To login user in the application
authRouter.post('/login', authController.userLoginController);

module.exports = authRouter;