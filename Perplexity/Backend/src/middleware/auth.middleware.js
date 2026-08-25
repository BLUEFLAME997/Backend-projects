import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

export function authUser(req,res,next){
  
  const {Perplexity_Token} = req.cookies;
  if(!Perplexity_Token){
    return res.status(401).json({
      Message:"Unauthorized",
      sucess:false,
      err:"No token provided"
    })
  }

  try{
    
    const decoded = jwt.verify(Perplexity_Token,process.env.JWT_SECRET);
    req.user = decoded;
    next();

  }catch(err){
    return res.status(401).json({
      Message:"Unauthrorized",
      success:false,
      err:"Invalid token"
    })
  }
}