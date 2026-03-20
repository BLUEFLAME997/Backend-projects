require('dotenv').config();
const express = require('express');
const postRoute = express.Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require('../middleware/auth.middleware');

/* 
@route POST /api/posts/
@description to create post
*/
postRoute.post('/', upload.single('image'), identifyUser, postController.createPostController);

/* 
@route GET /api/posts/
@description to get all the posts
*/
postRoute.get('/', identifyUser, postController.getPostController);

/* 
@route GET /api/posts/details/:postId
@description to get post details
*/
postRoute.get('/details/:postId', identifyUser, postController.getPostDetailController);

/* 
@route POST /api/posts/like/:postId
@description like a post with the id provided in the request params
*/
postRoute.post('/like/:postId',identifyUser,postController.likePostController)

/* 
@route POST /api/posts/feed
@description get all the post created in the DB
@access private
*/
postRoute.get('/feed',identifyUser,postController.getFeedController)

module.exports = postRoute;