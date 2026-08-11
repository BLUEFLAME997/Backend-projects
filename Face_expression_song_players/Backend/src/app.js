require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}));

// Routes:
const authRoute = require('./routes/auth.route')
const songRoute = require('./routes/song.route');

app.use('/api/auth',authRoute);
app.use('/api/songs',songRoute);

module.exports=app