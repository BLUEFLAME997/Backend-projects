const express = require('express');
const songRoute = express.Router();
const upload = require('../middleware/upload.middleware')
const  songController = require('../controllers/song.controller');

// Post : /api/songs/upload
// Description: To upload a song or store new song on the database
songRoute.post('/upload',upload.single('song'),songController.uploadSongController);

module.exports=songRoute;