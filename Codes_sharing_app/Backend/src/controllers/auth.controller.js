require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');
const bcrypt = require('bcrypt');

async function userRegisterController(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    username
  })

  if (isUserAlreadyExist) {
    return res.status(409).json({
      Message: "Username already exist"
    })
  }

  const isEmailAlreadyExist = await userModel.findOne({
    email
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
    password: hash
  })

  const token = jwt.sign({
    username: username,
    email: email,
    id: user._id
  }, process.env.JWT_SECRET)

  res.cookie('JWT_TOKEN', token);

  res.status(201).json({
    Message: "User created successfuly"
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
      Message: "Invalid password"
    })
  }

  const token = jwt.sign({
    id: isUserExist._id,
    username: isUserExist.username,
    email: isUserExist.email
  }, process.env.JWT_SECRET)

  res.cookie("JWT_TOKEN", token);
  res.status(200).json({
    Message: "Logged in successfully",
    isUserExist
  })

}

async function userVerifyController(req, res) {
  const token = req.cookies.JWT_TOKEN;
  if (!token) {
    return res.status(404).json({
      Message: "Token not found"
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    throw err
  }

  const user = req.user

  res.status(200).json({
    Message: "User is authorized",
    user
  })
}

module.exports = {
  userRegisterController,
  userLoginController,
  userVerifyController
}