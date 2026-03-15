require('dotenv').config();
const postModel = require('../models/post.model');
const ImageKit = require('@imagekit/nodejs')
const { toFile } = require('@imagekit/nodejs');

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res) {
  const { caption } = req.body;

  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: 'Test',
    folder: 'insta-all-posts'
  })

  const post = await postModel.create({
    caption: caption,
    imgUrl: file.url,
    user: req.user.id
  })
  
  res.status(200).json({
    message: "ok",
    file
  })
}

async function getPostController(req,res) {
  const posts=await postModel.find({
    user:req.user.id
  })
  res.status(200).json({
    Message:"Posts fetched successfully",
    posts
  })
}

async function getPostDetailController(req,res) {
  const {postId}=req.params;

  const userid=req.user.id;
  const post=await postModel.findById({_id:postId});
  if(!post){
    return res.status(404).json({
      Message:"Post not found"
    })
  }

  const postUser=post.user;

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