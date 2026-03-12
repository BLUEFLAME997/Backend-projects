require('dotenv').config();
const express=require('express');
const postRoute=express.Router();
const postController=require('../controllers/post.controller');

postRoute.post('/',postController.createPostController);

module.exports=postRoute;