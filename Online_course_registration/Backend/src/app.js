const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth.route');
const courseRoute = require('./routes/course.route');
const enrollmentRoute = require('./routes/enrollment.route');

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/course', courseRoute);
app.use('/api/enrollments', enrollmentRoute);

module.exports = app;