const postModel=require('../models/post.model');

async function createPostController(req,res){
  console.log(req.body);
  console.log(req.file);
  res.send("post data fetched")
}

module.exports={
  createPostController
}