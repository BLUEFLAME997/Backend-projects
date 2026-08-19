require('dotenv').config();
const materialModel = require('../models/material.model');
const cloudStorage = require('../config/cloudStorage');
const streamifier = require('streamifier');
const courseModel = require('../models/course.model');

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

      } catch (err) {
        console.log(err);
        res.status(400).json({
          Message: "Failed to save material",
          err: 'Error:' + err.message
        })
      }
      res.status(200).json({
        message: 'Uploaded successfully',
        material
      });
    }
  );

  streamifier.createReadStream(req.file.buffer).pipe(stream);
}

async function updateMaterialController(req, res) {
  const { courseId, materialId } = req.body;

  const isCourseMaterialExist = await materialModel.findOne({
    course: courseId,
    _id: materialId
  })
  if (!isCourseMaterialExist) {
    return res.status(404).json({
      Message: "No material found to update"
    })
  }

  if (req.body.title !== undefined) {
    isCourseMaterialExist.title = req.body.title;
  }
  if (req.body.description !== undefined) {
    isCourseMaterialExist.description = req.body.description;
  }
  if (req.body.order !== undefined) {
    isCourseMaterialExist.order = req.body.order
  }
  if (req.file) {
    try {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'course-materials', resource_type: 'auto' },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

      const fileType = req.file.mimetype.startsWith('video') ? 'video' : 'pdf';

      isCourseMaterialExist.url = result.secure_url;
      isCourseMaterialExist.type = fileType;
      isCourseMaterialExist.filesize = req.file.size;
      isCourseMaterialExist.filename = req.file.originalname;

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'File upload failed' });
    }
  }

  await isCourseMaterialExist.save();

  res.status(200).json({
    Message: "Material updated successfully",
    material: isCourseMaterialExist
  })
}

async function getMaterialController(req, res) {
  const { materialId } = req.params;

  try {
    const isMaterialExist = await materialModel.findById(materialId);
    if (!isMaterialExist) {
      return res.status(404).json({
        Message: "Material not found"
      })
    }

    res.status(200).json({
      Message: "Material data fetched successfully",
      Material: isMaterialExist
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      Message: "Invalid material id"
    })
  }

}

async function deleteMaterialController(req, res) {
  const { materialId } = req.params;

  try {
    const deleteMaterial = await materialModel.findByIdAndDelete(materialId);

    if (!deleteMaterial) {
      return res.status(404).json({
        Message: "No material to delete"
      })
    }

    res.status(200).json({
      Message: "Material deleted successfully"
    })

  } catch (err) {
    console.log(err);
    res.status(400).json({
      Message: "Invalid material id"
    })
  }
}

module.exports = {
  uploadMaterialController,
  updateMaterialController,
  getMaterialController,
  deleteMaterialController
}