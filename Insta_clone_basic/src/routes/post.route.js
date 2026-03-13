require('dotenv').config();
const express=require('express');
const postRoute=express.Router();
const postController=require('../controllers/post.controller');
const multer=require('multer');
const upload=multer({storage:multer.memoryStorage()})

postRoute.post('/',upload.single('image'),postController.createPostController);

module.exports=postRoute;