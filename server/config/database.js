const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://alainmomeni01:5Ew0Ko8TVI2rjmCa@cluster0.nti049d.mongodb.net/uber');
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Could not connect to MongoDB Atlas', err);
    process.exit(1);
  }
};

module.exports = connectDB;