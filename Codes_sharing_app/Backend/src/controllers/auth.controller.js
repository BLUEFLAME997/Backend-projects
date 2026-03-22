const express = require('express');
const jwt = require('jsonwebtoken');
const userModel=require('../model/user.model');
const bcrypt=require('bcrypt');

async function userRegisterController(req, res) {
  const {username,email,password}=req.body;

  const isUserAlreadyExist=await userModel.findOne({
    username
  })

  if(isUserAlreadyExist){
    return res.status(409).json({
      Message:"Username already exist"
    })
  }

  const isEmailAlreadyExist=await userModel.findOne({
    email
  })
  if(isEmailAlreadyExist){
    return res.status(409).json({
      Message:"Email already exist"
    })
  }

  const hash=await bcrypt.hash(password,10);
  
  const user=await userModel.create({
    username,
    email,
    password:hash
  })

  const token=jwt.sign({
    username:username,
    email:email,
    id:user._id
  },process.env.JWT_SECRET)

  res.cookie('JWT_TOKEN',token);

  res.status(201).json({
    Message:"User created successfuly"
  })
}

module.exports={
  userRegisterController
}