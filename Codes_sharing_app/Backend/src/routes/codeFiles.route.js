require('dotenv').config();
const express = require('express');
const codeFilesRoute=express.Router();
const mongoose=require('mongoose');
const codeFilesController=require('../controllers/codesFiles.controller');

/* 
@route: POST /api/snippet/:id
@description: to get the value and save file in the database
*/
codeFilesRoute.post('/save/:snippetId',codeFilesController.saveFileController);

module.exports=codeFilesRoute;