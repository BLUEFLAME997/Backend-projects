require('dotenv').config();
const postModel = require('../models/post.model');
const ImageKit = require('@imagekit/nodejs')
const { toFile } = require('@imagekit/nodejs');
const likeModel = require('../models/like.model');

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res) {
  const { caption } = req.body;

  const file = await imageKit.files.upload({
    file: await toFile(req.file.buffer, 'file'),
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
    file,
    post
  })
}

async function getPostController(req, res) {
  const posts = await postModel.find({
    user: req.user.id
  })
  res.status(200).json({
    Message: "Posts fetched successfully",
    posts
  })
}

async function getPostDetailController(req, res) {
  const { postId } = req.params;

  const userid = req.user.id;
  const post = await postModel.findById({ _id: postId });
  if (!post) {
    return res.status(404).json({
      Message: "Post not found"
    })
  }

  const postUser = post.user;

  if (userid !== postUser.toString()) {
    return res.status(403).json({
      Message: "Invalid user request ,unable to access this post"
    })
  }

  res.status(200).json({
    Message: "Post details fetched successfully",
    post
  })
}

async function likePostController(req, res) {
  const userName = req.user.userName;
  const postId = req.params.postId;

  const isPostExist = await postModel.findById({
    _id: postId
  })

  if (!isPostExist) {
    return res.status(404).json({
      Message: "Post does not exists"
    })
  }

  const isLikePostExists = await likeModel.findOne({
    post: postId,
    user: userName
  })

  if (isLikePostExists) {
    return res.status(400).json({
      Message: "You cannot like a liked post"
    })
  }

  const likePost = await likeModel.create({
    post: postId,
    user: userName
  })

  res.status(201).json({
    Message: "Post liked successfully",
    likePost
  })
}

async function getFeedController(req, res) {
  const posts=await postModel.find().populate({
    path:'user',
    select:'-password'
  });

  res.status(200).json({
    Message:"Posts fetched successfully",
    posts
  })
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailController,
  likePostController,
  getFeedController
}