require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const userModel=require('../models/user.model');

async function userRegisterController(req,res){
  const {username,email,password}=req.body;
  
  const isUserAlreadyExist=await userModel.findOne({
    username:username
  })
  if(isUserAlreadyExist){
    return res.status(409).json({
      Message:"Username already exist"
    })
  }

  const isEmailAlreadyExist = await userModel.findOne({
    email:email
  })
  if(isEmailAlreadyExist){
    return res.status(409).json({
      Message:"Email already exist"
    })
  }

  const hash = bcrypt.hash(password,10);
  const user = await userModel.create({
    username,
    email,
    password:hash
  },{
    timestamps:true
  })

  const token = jwt.sign({
    id:user._id,
    username:user.username,
    email:user.email
  },process.env.JWT_SECRET,{expiresIn:'1d'})

  res.cookie("JWT_TOKEN",token)

  res.status(201).json({
    Message:"User created successfully"
  })
}

async function userLoginController(req,res){
  const {username,password}=req.body;
  
  const isUserExist=await userModel.findOne({
    $or:[
      {username:username},
      {email:username}
    ]
  })
  if(!isUserExist){
    return res.status(404).json({
      Message:"User not found"
    })
  }

  const isPasswordCorrect = await bcrypt.compare(password,isUserExist.password);
  if(!isPasswordCorrect){
    return res.status(401).json({
      Message:"Password incorrect"
    })
  }

  const token = jwt.sign({
    id:isUserExist._id,
    username:isUserExist.username,
    email:isUserExist.email
  },process.env.JWT_SECRET,{expiresIn:'1d'})

  res.cookie("JWT_TOKEN",token);
  res.status(200).json({
    Message:"User logged in successfully"
  })

}

module.exports={
  userRegisterController,
  userLoginController
}