import userModel from "../model/user.model.js";
import { sendEmail } from "../services/mail.service.js";

export async function userRegisterController(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  })
  if (isUserAlreadyExist) {
    return res.status(400).json({
      Message: "User with this email or username already exist",
      success: false,
      err: "User already exist"
    })
  }

  const user = await userModel.create({
    username,
    email,
    password
  })

  await sendEmail({
    to: email,
    subject: "Welcome to perplexity",
    html: `<h1>Welcome ${username}! 👋</h1>
        <p>Your account has been successfully created.</p>
        `
  })

}