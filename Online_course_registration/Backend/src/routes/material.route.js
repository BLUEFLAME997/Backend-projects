const express = require('express');
const materialRoute = express.Router();
const materialController = require('../controllers/material.controller');
const identifyUser = require('../middleware/auth.middleware');

/* 
@route: POST /api/material/upload
@description: To upload a material in the server
*/
materialRoute.post('/upload', identifyUser, materialController.uploadMaterialController);
/* 
@route: PATCH /api/material/update
@description: To update a field of the existing material
*/
materialRoute.patch('/update', identifyUser, materialController.updateMaterialController);
/* 
@route: GET /api/material/get-material
@description: To get the details about a specific material
*/
materialRoute.get('/get-material', identifyUser, materialController.getMaterialController);
/* 
@route: delete /api/material/delete
@description: To delete a specific material
*/
materialRoute.delete('/delete', identifyUser, materialController.deleteMaterialController);

module.exports = materialController;