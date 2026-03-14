require('dotenv').config();
const postModel = require('../models/post.model');
const ImageKit = require('@imagekit/nodejs')
const { toFile } = require('@imagekit/nodejs')
const jwt = require('jsonwebtoken');
const { post } = require('../routes/post.route');
const authMiddleware=require('../middleware/auth.middleware');

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res) {
  const { caption } = req.body;
  const token = req.cookies.JWT_TOKEN;
  if (!token) {
    return res.status(401).json({
      Message: "Token not provided, unauthorized access"
    })
  }
  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      Message: "Unauthorized access"
    })
  }

  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: 'Test',
    folder: 'insta-all-posts'
  })

  const post = await postModel.create({
    caption: caption,
    imgUrl: file.url,
    user: decoded.id
  })
  res.status(200).json({
    message: "ok",
    file
  })
}

async function getPostController(req,res) {
  const token=req.cookies.JWT_TOKEN;
  if(!token){
    return res.status(404).json({
      Message:"Token not found"
    })
  }
  let decoded=null;
  try{
    decoded=jwt.verify(token,process.env.JWT_SECRET);
  }catch(err){
    return res.status(401).json({
      Message:"Unauthorized access"
    })
  }
  const posts=await postModel.find({
    user:decoded.id
  })
  res.status(200).json({
    Message:"Posts fetched successfully",
    posts
  })
}

async function getPostDetailController(req,res) {
  const {postId}=req.params;
  const token = req.cookies.JWT_TOKEN;
  if(!token){
    return res.status(404).json({
      Message:"Token not found"
    })
  }
  let decoded=null;
  try{
    decoded=jwt.verify(token,process.env.JWT_SECRET);
  }catch(err){
    return res.status(401).json({
      Message:"Unauthorized access"
    })
  }
  const userid=decoded.id;
  const post=await postModel.findById({_id:postId});
  if(!post){
    return res.status(404).json({
      Message:"Post not found"
    })
  }
  const postUser=post.user;
  console.log(userid,postUser)
  if(userid!==postUser.toString()){
    return res.status(403).json({
      Message:"Invalid user request ,unable to access this post"
    })
  }

  res.status(200).json({
    Message:"Post details fetched successfully",
    post
  })
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailController
}