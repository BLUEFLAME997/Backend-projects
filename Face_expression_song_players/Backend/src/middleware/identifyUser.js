require('dotenv').config();
const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const blackListModel = require('../models/blacklist.model');

async function identifyUser(req,res,next) {
  
  const Token = req.cookies.Token;

  if(!Token){
    return res.status(401).json({
      Message:"Token not provided"
    })
  }

  const isTokenBlackListed = await blackListModel.findOne({
    Token
  })

  if(isTokenBlackListed){
    return res.status(401).json({
      Messsage:"Invalid Token"
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

  next();
}

module.exports = {identifyUser};