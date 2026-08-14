const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth.route');
const courseRoute = require('./routes/course.route');
const enrollmentRoute = require('./routes/enrollment.route');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))

// Routes: 
app.use('/api/auth', authRoute);
app.use('/api/course', courseRoute);
app.use('/api/enrollments', enrollmentRoute);

module.exports = app;