require('dotenv').config();
const express = require('express');
const codeFilesRoute=express.Router();
const codeFilesController=require('../controllers/codesFiles.controller');
const indentifyUser=require('../middleware/auth.middleware');
const identifyUser = require('../middleware/auth.middleware');

/* 
@route: POST /api/snippet/save
@description: Save file in the database on the basis of user request and given data
*/
codeFilesRoute.post('/save',identifyUser,codeFilesController.saveFileController);
/* 
@route: POST /api/snippet/update/:snippetId
@description: To update the code snippet give by the user
*/
codeFilesRoute.post('/update/:snippetId',indentifyUser,codeFilesController.updateFileController);
/* 
@route: GET /api/snippet/file
@description: To get the file data throught the snippet ID
*/
codeFilesRoute.get('/file/:snippetId',identifyUser,codeFilesController.getFilename);

module.exports=codeFilesRoute;