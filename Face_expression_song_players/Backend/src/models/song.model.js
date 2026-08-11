const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Song url required"]
  },
  posterUrl: {
    type: String,
    required: [true, "Song poster url required"]
  },
  title: {
    type: String,
    required: [true, "Title required"]
  }
})

const songModel = mongoose.model('songs', songSchema);

module.exports = songModel;