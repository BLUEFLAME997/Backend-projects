import express from 'express';
import { registerValidator } from '../validation/auth.validator.js';
import { userRegisterController } from '../controllers/auth.controller.js';

const authRouter =  express.Router();

authRouter.post('/register',registerValidator,userRegisterController);

export default authRouter;