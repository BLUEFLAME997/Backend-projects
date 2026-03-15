const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const crypto = require('crypto');
const bcrypt=require('bcryptjs')

async function registerController(req, res){
  const { userName, email, password, bio, profileImage } = req.body;
  const isUserAlreadyExists = await userModel.findOne({
    $or: [
      { userName },
      { email }
    ]
  })

  if (isUserAlreadyExists) {
    return res.status(409).json({
      "Message": "User already exists"
    })
  }

  const hash = await bcrypt.hash(password,10)
  const user = await userModel.create({
    userName,
    email,
    password:hash,
    bio,
    profileImage
  })

  const token = jwt.sign({
    id: user._id,
    userName:user.userName
  }, process.env.JWT_SECRET, { expiresIn: "1d" })

  res.cookie("JWT_TOKEN", token);
  res.status(200).json({
    Message: "User created successfully",
    user: {
      userName: user.userName,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage
    }
  })
}

async function loginController(req, res){
  const { userName, email, password } = req.body;
  const isUserexists = await userModel.findOne({
    $or: [
      { userName: userName },
      { email: email }
    ]
  })

  if (!isUserexists) {
    return res.status(404).json({
      Message: "User not found"
    })
  }

  const isPasswordCorrect = await bcrypt.compare(password,isUserexists.password);
  
  if (!isPasswordCorrect) {
    return res.status(401).json({
      Message: "Inavalid password"
    })
  }

  const token = jwt.sign({
    id: isUserexists._id,
    userName:isUserexists.userName
  }, process.env.JWT_SECRET, { expiresIn: "1d" })
  
  res.cookie("JWT_TOKEN", token);
  res.status(200).json({
    Message: "Logged in successfully"
  })
}

module.exports={
  registerController,
  loginController
}