const express = require('express');
const app = express();
const authRoute = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))

app.use('/api/auth', authRoute);

module.exports = app;