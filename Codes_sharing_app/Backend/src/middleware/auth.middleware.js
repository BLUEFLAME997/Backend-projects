require('dotenv').config();
const jwt = require('jsonwebtoken');

async function identifyUser(req,res,next){
  const token = req.cookies.JWT_TOKEN;
  if(!token){
    return res.status(404).json({
      Message:"Token not found"
    })
  }
  let decoded=null;
  try{
    decoded=jwt.verify(token,process.env.JWT_SECRET);
  }catch(err){
    return res.status(401).json({
      Message:"Unauthorized access"
    })
  }
  req.user=decoded;
  next();
}

module.exports=identifyUser;