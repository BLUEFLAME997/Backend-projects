require('dotenv').config();
const postModel=require('../models/post.model');
const ImageKit=require('@imagekit/nodejs')
const {toFile}=require('@imagekit/nodejs')
const jwt=require('jsonwebtoken');

const imageKit=new ImageKit({
  privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req,res){
  const {caption}=req.body;
  const token=req.cookies.JWT_TOKEN;
  if(!token){
    return res.status(401).json({
      Message:"Token not provided, unauthorized access"
    })
  }

  const decoded=jwt.verify(token,process.env.JWT_SECRET)
  if(!decoded){
    return res.status(401).json({
      Message:"Unauthorized access"
    })
  }
  console.log(decoded);
  const file=await imageKit.files.upload({
    file:await toFile(Buffer.from(req.file.buffer),'file'),
    fileName:'Test'
  })

  const post = await postModel.create({
    caption:caption,
    imgUrl:file.url,
    user:decoded.id
  })
  res.status(200).json({
    message:"ok",
    file
  })
}

module.exports={
  createPostController
}