const { default: mongoose } = require('mongoose');
const fileModel = require('../model/files.model');
const { nanoid } = require('nanoid');

async function getNewSnippetId() {
  let exist = true;
  let snippet = null;
  let id = null;

  while (exist) {
    id = nanoid(10);
    snippet = await fileModel.findOne({
      snippetId: id
    })

    if (!snippet) {
      exist = false;
    }
  }
  return id
}

async function saveFileController(req, res) {
  const user = req.user;
  const userId = user.id;
  const { fileName, language, codeSnippet, isPublic } = req.body;
  const snippetId = await getNewSnippetId();

  const isCodeSnippetAlreadyExist = await fileModel.findOne({
    snippetId
  })

  if (isCodeSnippetAlreadyExist) {
    return res.status(409).json({
      Message: "Snippet ID already exist"
    })
  }

  const isFileNameAlreadyExist = await fileModel.findOne({
    fileName,
    userId
  })

  if (isFileNameAlreadyExist) {
    return res.status(409).json({
      Message: "Filename already exist"
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
    Message: "File saved successfully",
    codeFile
  })
}

async function updateFileController(req, res) {
  const user = req.user;
  const id = user.id;
  const { snippetId } = req.params;
  const { fileName, codeSnippet, language, isPublic } = req.body;

  const isSnippetExist = await fileModel.findOne({
    snippetId
  })
  if (!isSnippetExist) {
    return res.status(404).json({
      Message: "Snippet not found"
    })
  }

  const objectId = new mongoose.Types.ObjectId(id);

  const isUserValidForUpdate = await fileModel.findOne({
    snippetId,
    userId: objectId
  })

  if (!isUserValidForUpdate) {
    return res.status(400).json({
      Message: "User not valid to change this file"
    })
  }

  const updated = await fileModel.updateOne(
    { snippetId: snippetId },
    {
      $set: {
        language: language,
        codeSnippet: codeSnippet,
        isPublic: isPublic
      }
    }
  )

  const file = await fileModel.findOne({
    snippetId: snippetId
  })

  res.status(200).json({
    Message: "Update successfull",
    file
  })
}

async function getFilename(req, res) {
  const { snippetId } = req.params;
  const file = await fileModel.findOne({
    snippetId: snippetId
  })
  if (!file) {
    return res.status(404).json({
      Message: "Invalid snippetId , file not found"
    })
  }

  res.status(200).json({
    Message: "File fetched successfully",
    file
  })
}

async function getAllUserSnippet(req, res) {
  const user = req.user;
  const id = user.id
  
  const allFiles = await fileModel.find({
    userId:id
  })

  res.status(200).json({
    Message:"All snippets fetched successfully",
    allFiles
  })
}

module.exports = {
  saveFileController,
  updateFileController,
  getFilename,
  getAllUserSnippet
}