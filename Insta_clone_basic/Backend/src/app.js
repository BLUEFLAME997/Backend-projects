const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser())

const authRoute = require('./routes/auth.route');
const postRoute = require('./routes/post.route');
const userRoute=require('./routes/user.route');

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/users',userRoute);

module.exports = app;