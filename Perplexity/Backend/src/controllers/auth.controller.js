import dotenv from 'dotenv';
dotenv.config();

import userModel from "../model/user.model.js";
import { sendEmail } from "../services/mail.service.js";
import jwt from 'jsonwebtoken';

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

  const emailVerificationToken = jwt.sign({
    email: user.email
  }, process.env.JWT_SECRET);

  await sendEmail({
    to: email,
    subject: "Welcome to perplexity",
    html: `
  <p>Hi ${username},</p>
  <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
  <p>Please verify your email address by clicking the link below:</p>
  <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>
  <p>If you did not create an account, please ignore this email.</p>
  <p>Best regards,<br>The Perplexity Team</p>
`
  })

  res.status(201).json({
    Message: "User registered successfully",
    success: true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email
    }
  })
}

export async function verifyEmail(req, res) {
  const { token } = req.query;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const isUserExist = await userModel.findOne({ email: decoded.email });
  if (!isUserExist) {
    return res.status(400).json({
      Message: "Invalid token",
      success: false,
      err: "User not found"
    })
  }

  isUserExist.verified = true;
  await isUserExist.save();

  const html = `
  <h1>Email verified successfully!</h1>
  <p>Your email has beed verified. You can now log in to your account.</p>
  <a href="http://localhost:3000/login">Go to login</a>
  `

  res.send(html);
}