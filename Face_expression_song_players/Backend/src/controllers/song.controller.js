const songModel = require('../models/song.model');
const id3 = require('node-id3');
const storageService = require('../services/storage.service');

async function uploadSongController(req, res) {

  const {mood} = req.body;
  
  const songBuffer = req.file.buffer;
  const tags = id3.read(songBuffer);

  const songFile = await storageService.uploadFile({
    buffer:songBuffer,
    filename:tags.title + ".mp3",
    folder:"/cohort/moodify/songs"
  })

  const posterFile = await storageService.uploadFile({
    buffer:tags.image.imageBuffer,
    filename:tags.title + ".jpeg",
    folder:"/cohort/moodify/posters"
  })

  const song = await songModel.create({
    title:tags.title,
    url:songFile.url,
    posterUrl:posterFile.url,
    mood:mood
  })

  res.status(201).json({
    message:"Song uploaded successfully",
    song
  })

}

module.exports = { uploadSongController }