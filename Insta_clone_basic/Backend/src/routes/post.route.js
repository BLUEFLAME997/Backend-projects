require('dotenv').config();
const express = require('express');
const postRoute = express.Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require('../middleware/auth.middleware');
const indentifyUser = require('../middleware/auth.middleware');

postRoute.post('/', upload.single('image'), indentifyUser, postController.createPostController);
postRoute.get('/', identifyUser, postController.getPostController);
postRoute.get('/details/:postId', identifyUser, postController.getPostDetailController);
postRoute.post('/like/:postId',indentifyUser,postController.likePostController)

module.exports = postRoute;