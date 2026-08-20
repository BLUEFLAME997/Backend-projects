import { validationResult, body } from "express-validator";

function validator(req,res,next) {
  const error = validationResult(req);
  
  if(error.isEmpty()){
    return next();
  }

  res.status(400).json({
    Message:"Invalid credentials",
    error:error.array()
  })

}

export const registerValidator = [
  
  body('username')
      .notEmpty().withMessage('Username cannnot be empty')
      .isString().withMessage('Username should be a valid String'),
  body('email')
      .trim()
      .notEmpty().withMessage("Email cannot be empty")
      .isEmail().withMessage('email should be a valid email address'),

  body('password')
      .isLength({min:6,max:15}).withMessage('Password should be in between 6 - 15 characters'),
  
      validator
]