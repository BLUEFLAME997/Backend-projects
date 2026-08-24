import express from 'express';
import { registerValidator } from '../validation/auth.validator.js';
import { userRegisterController } from '../controllers/auth.controller.js';
import { verifyEmail } from '../controllers/auth.controller.js';

const authRouter =  express.Router();

/* 
@route: POST /api/auth/register
@description : To register the user in the application
*/
authRouter.post('/register',registerValidator,userRegisterController);
/* 
@route: GET /api/auth/verify-email
@description: To verify the clients details through token 
*/
authRouter.get('/verify-email',verifyEmail);

export default authRouter;