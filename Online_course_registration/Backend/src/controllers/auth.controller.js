require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const redis = require('../config/cache');

async function userRegisterController(req, res) {
  const { username, email, password, role } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    username: username
  })
  if (isUserAlreadyExist) {
    return res.status(409).json({
      Message: "Username already exist"
    })
  }

  const isEmailAlreadyExist = await userModel.findOne({
    email: email
  })
  if (isEmailAlreadyExist) {
    return res.status(409).json({
      Message: "Email already exist"
    })
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    password: hash,
    role
  })

  const token = jwt.sign({
    id: user._id,
    username: user.username,
    email: user.email
  }, process.env.JWT_SECRET, { expiresIn: '1d' })

  res.cookie("JWT_TOKEN", token)

  res.status(201).json({
    Message: "User created successfully",
    user
  })
}

async function userLoginController(req, res) {
  const { username, password } = req.body;

  const isUserExist = await userModel.findOne({
    $or: [
      { username: username },
      { email: username }
    ]
  })
  if (!isUserExist) {
    return res.status(404).json({
      Message: "User not found"
    })
  }

  const isPasswordCorrect = await bcrypt.compare(password, isUserExist.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({
      Message: "Password incorrect"
    })
  }

  const token = jwt.sign({
    id: isUserExist._id,
    username: isUserExist.username,
    email: isUserExist.email
  }, process.env.JWT_SECRET, { expiresIn: '1d' })

  res.cookie("JWT_TOKEN", token);
  res.status(200).json({
    Message: "User logged in successfully"
  })

}

async function userGetMeController(req, res) {
  const user = await userModel.findById(req.user.id).select('-password');

  return res.status(200).json({
    Message: "User data fetched successfully",
    user
  })
}

async function userLogoutController(req, res) {
  const { JWT_TOKEN } = req.cookies;

  if (!JWT_TOKEN) {
    return res.status(401).json({
      Message: "Token not found"
    })
  }

  const decoded = jwt.decode(JWT_TOKEN);

  const currentTimeStamp = Math.floor(Date.now() / 1000);
  const remainingTime = decoded.exp - currentTimeStamp;

  const redisResponse = await redis.set(JWT_TOKEN, Date.now().toString(), "EX", remainingTime);

  res.clearCookie('JWT_TOKEN');
  res.status(200).json({
    Message: "User logged out successfully"
  })
}

module.exports = {
  userRegisterController,
  userLoginController,
  userGetMeController,
  userLogoutController
}