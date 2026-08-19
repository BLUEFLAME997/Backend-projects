const express = require('express');
const materialRoute = express.Router();
const materialController = require('../controllers/material.controller');
const identifyUser = require('../middleware/auth.middleware');
const checkCreator = require('../middleware/material.middleware');

/* 
@route: POST /api/material/upload
@description: To upload a material in the server
*/
materialRoute.post('/upload', identifyUser, checkCreator, materialController.uploadMaterialController);
/* 
@route: PATCH /api/material/update
@description: To update a field of the existing material
*/
materialRoute.patch('/update', identifyUser, checkCreator, materialController.updateMaterialController);
/* 
@route: GET /api/material/get-material:materialId
@description: To get the details about a specific material
*/
materialRoute.get('/get-material/:materialId', identifyUser, materialController.getMaterialController);
/* 
@route: delete /api/material/delete
@description: To delete a specific material
*/
materialRoute.delete('/delete', identifyUser, checkCreator, materialController.deleteMaterialController);

module.exports = materialRoute;