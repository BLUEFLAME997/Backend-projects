const express = require('express');
const app = express();
const authRoute = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const postRoute = require('./routes/post.route');

app.use(express.json());
app.use(cookieParser())
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

module.exports = app;