const mongoose = require('mongoose');
const materialSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courses',
    required: [true, "Course id required"]
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, "Admin id required"]
  },
  url: {
    type: String,
    required: [true, 'URL required'],
    unique: [true, 'URL should be unique']
  },
  filename: {
    type: String
  },
  filesize: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    enum: ['video', 'pdf']
  },
  description: {
    type: String,
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Title required'],
    trim: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const materialModel = mongoose.model('materials', materialSchema);
module.exports = materialModel;