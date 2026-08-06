require('dotenv').config();
const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function identifyUser(req,res,next) {
  
  const Token = req.cookies.Token;

  if(!Token){
    return res.status(401).json({
      Message:"Token not provided"
    })
  }

  let decoded = null;
  try{
    decoded = jwt.verify(Token,
      process.env.JWT_SECRET
    )
  }catch(err){
    return res.status(401).json({
      Message:"Invalid token"
    })
  }

  req.user=decoded;
  console.log(req.user);

  next();
}

module.exports = {identifyUser};