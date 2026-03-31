require('dotenv').config();
const jwt = require('jsonwebtoken');

async function identifyUser(req,res){
  const token = req.cookies.JWT_TOKEN;
  if(!token){
    return res.status(404).json({
      Message:"Token not found"
    })
  }
  const decoded=null;
  try{
    decoded=jwt.verify(toekn,process.env.JWT_SECRET);
  }catch(err){
    return res.status(401).json({
      Message:"Unauthorized access"
    })
  }
  req.user=decoded;
  next();
}