const files=require('../model/files.model');

async function saveFileController(req,res){
  const {snippetId}=req.params;
  const {fileName,language,userId,codeSnippet,isPublic}=req.body;
  const isCodeSnippetAlreadyExist = await files.findOne({
    snippetId
  })

  if(isCodeSnippetAlreadyExist){
    return res.status(409).json({
      Message:"Code snippet already exist"
    })
  }

  const isFileNameAlreadyExist=await files.findOne({
    fileName
  })

  if(isFileNameAlreadyExist){
    const fileUpdate=await files.updateOne({
      snippetId
    },{
      $set:{
        codeSnippet:codeSnippet
      }
    })

    return res.status(200).json({
      Message:"Code snippet updated successfully",
      fileUpdate
    })
  }

  const codeFile = await files.create({
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

module.exports={
  saveFileController
}