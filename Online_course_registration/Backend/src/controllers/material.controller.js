require('dotenv').config();
const materialModel = require('../models/material.model');
const cloudStorage = require('../config/cloudStorage');
const streamifier = require('streamifier');

async function uploadMaterialController(req, res) {
  const { description, title, order, courseId } = req.body;
  const user = req.user;

  const stream = cloudinary.uploader.upload_stream(
    { folder: 'course-materials', resource_type: 'auto' },

    async (error, result) => {
      if (error) return res.status(500).json({ message: 'Upload failed' });

      try {
        const fileType = req.file.mimetype.startsWith('video') ? 'video' : 'pdf';
        const material = await materialModel.create({
          title: title,
          description: description,
          course: courseId,
          url: result.secure_url,
          type: result.resource_type,
          createdBy: user.id,
          filesize: req.file.size,
          filename: req.file.originalname,
          order: order
        });

      }catch(err){
        console.log(err);
        res.status(400).json({
          Message:"Failed to save material",
          err:'Error:'+err.message
        })
      }
      res.status(200).json({ message: 'Uploaded successfully', material });
    }
  );

  streamifier.createReadStream(req.file.buffer).pipe(stream);
}