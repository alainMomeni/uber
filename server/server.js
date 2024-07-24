const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const session = require('express-session');
const passport = require('passport');
require('./config/passportConfig');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the assets directory
app.use('/assets', express.static(path.join(__dirname, '../src/assets')));

// Sessions for Passport.js
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));
app.use(passport.initialize());
app.use(passport.session());

// Connect to database
connectDB();

// Routes
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});







