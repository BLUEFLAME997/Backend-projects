import express from 'express';
import { registerValidator, loginValidator } from '../validation/auth.validator.js';
import { userRegisterController } from '../controllers/auth.controller.js';
import { verifyEmail } from '../controllers/auth.controller.js';
import { userLoginController } from '../controllers/auth.controller.js';

const authRouter = express.Router();

/* 
@route: POST /api/auth/register
@description : To register the user in the application
*/
authRouter.post('/register', registerValidator, userRegisterController);
/* 
@route: GET /api/auth/verify-email
@description: To verify the clients details through token 
*/
authRouter.get('/verify-email', verifyEmail);
/* 
@route: POST /api/auth/login
@description: To login a user and return jwt token
*/
authRouter.post('/login', loginValidator, userLoginController);

export default authRouter;