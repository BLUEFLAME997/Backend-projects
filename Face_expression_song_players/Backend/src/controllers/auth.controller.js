const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

// User registration controller:
async function userRegistrationController(req, res) {
  const { userName, email, password } = req.body;
  const isUserExist = await userModel.findOne({
    $or: [
      { userName: userName },
      { email: email }
    ]
  })
  if (isUserExist) {
    return res.status(400).json({
      Message: "user already exist"
    })
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    userName,
    email,
    password: encryptedPassword
  })

  const token = jwt.sign({
    id: user._id,
    email: user.email,
    userName: user.userName
  }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  })

  res.cookie("Token", token);

  res.status(201).json({
    Message: "User created successfully",
    user
  })
}

async function userLoginController(req,res){
  const {userName,password}=req.body;
  const isUserExist = await userModel.findOne({
    $or:[
      {userName},
      {email}
    ]
  })
  if(!isUserExist){
    return res.status(401).json({
      Message:"Invalid credentials"
    })
  }

  const encryptedPassword = await bcrypt.hash(password,10);

  const user = await userModel.findOne({
    userName:userName,
    password:encryptedPassword
  })
  if(!user){
    return res.status(401).json({
      Message:"Incorrect credentials"
    })
  }

  const token = jwt.sign({
    id:user._id,
    userName:user.userName,
    email:user.email
  },process.env.JWT_SECRET,{
    expiresIn:"1d"
  })
  
  res.cookie("Token",token);
  res.status(200).json({
    Message:"User logged in successfully",
    user
  })
}

module.exports = {
  userRegistrationController,
  userLoginController
}