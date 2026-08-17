const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))

// Routes: 
const authRoute = require('./routes/auth.route');
const courseRoute = require('./routes/course.route');
const enrollmentRoute = require('./routes/enrollment.route');
const materialRoute = require('./routes/material.route');

app.use('/api/auth', authRoute);
app.use('/api/course', courseRoute);
app.use('/api/enrollments', enrollmentRoute);
app.use('/api/material',materialRoute);

module.exports = app;