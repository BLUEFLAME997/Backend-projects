require('dotenv').config();
const express = require('express');
const postRoute = express.Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() })

postRoute.post('/', upload.single('image'), postController.createPostController);
postRoute.get('/',postController.getPostController);
postRoute.get('/details/:postId',postController.getPostDetailController);

module.exports = postRoute;