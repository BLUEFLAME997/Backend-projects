const express = require('express');
const app = express();
const authRoute = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const codeFilesRoute=require('./routes/codeFiles.route')


/* 
Middlewares: 
*/
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: true
}))

/* 
Application routes: 
*/
app.use('/api/auth', authRoute);
app.use('/api/snippet',codeFilesRoute);

module.exports = app;