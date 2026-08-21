import userModel from "../model/user.model.js";

export async function userRegisterController(req,res){
  const {username,email,password} = req.body;
  
  const isUserAlreadyExist = await userModel.findOne({
    $or:[
      {username},
      {email}
    ]
  })
  if(isUserAlreadyExist){
    return res.status(400).json({
      Message:"User with this email or username already exist",
      success:false,
      err:"User already exist"
    })
  }

  const user = await userModel.create({
    username,
    email,
    password
  })

}