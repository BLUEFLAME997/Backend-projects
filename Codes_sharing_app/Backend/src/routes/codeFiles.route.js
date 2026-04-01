require('dotenv').config();
const express = require('express');
const codeFilesRoute=express.Router();
const codeFilesController=require('../controllers/codesFiles.controller');
const indentifyUser=require('../middleware/auth.middleware');

/* 
@route: POST /api/snippet/save/:snippetId
@description: To get the value and save file in the database
*/
codeFilesRoute.post('/save/:snippetId',codeFilesController.saveFileController);
/* 
@route: POST /api/snippet/update/:snippetId
@description: To update the code snippet give by the user
*/
codeFilesRoute.post('/update/:snippetId',indentifyUser,codeFilesController.updateFileController);

module.exports=codeFilesRoute;