const { default: mongoose } = require('mongoose');
const fileModel=require('../model/files.model');

async function saveFileController(req,res){
  const {snippetId}=req.params;
  const {fileName,language,userId,codeSnippet,isPublic}=req.body;
  const isCodeSnippetAlreadyExist = await fileModel.findOne({
    snippetId
  })

  if(isCodeSnippetAlreadyExist){
    return res.status(409).json({
      Message:"Code snippet already exist"
    })
  }

  const isFileNameAlreadyExist=await fileModel.findOne({
    fileName
  })

  if(isFileNameAlreadyExist){
    return res.status(409).json({
      Message:"Filename already exist"
    })
  }

  const codeFile = await fileModel.create({
    snippetId,
    fileName,
    language,
    userId,
    codeSnippet,
    isPublic
  })

  res.status(201).json({
    Message:"File saved successfully",
    codeFile
  })
}

async function updateFileController(req,res){
  const user=req.user;
  const id=user.id;
  const {snippetId}=req.params;
  const {fileName,codeSnippet,language,isPublic}=req.body;

  const isSnippetExist = await fileModel.findOne({
    snippetId
  })
  if(!isSnippetExist){
    return res.status(404).json({
      Message:"Snippet not found"
    })
  }

  const isUserValidForUpdate=await fileModel.findOne({
    snippetId,
    userId:user.id
  })

  console.log(snippetId,id, typeof id);
  console.log(isUserValidForUpdate)

  if(!isUserValidForUpdate){
    return res.status(400).json({
      Message:"User not valid to change this file"
    })
  }

  const updated = await fileModel.updateOne(
    {snippetId:snippetId},
    {$set:{
      codeSnippet:codeSnippet
    }}
  )

  res.status(200).json({
    Message:"Update successfull",
    updated
  })
}

module.exports={
  saveFileController,
  updateFileController
}