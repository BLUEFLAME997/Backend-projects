const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors=require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials:true,
  origin:'http://localhost:5173'
}))

const authRoute = require('./routes/auth.route');
const postRoute = require('./routes/post.route');
const userRoute=require('./routes/user.route');

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/users',userRoute);

module.exports = app;