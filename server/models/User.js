const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  typeUser: String,
  profilePhoto: String,
  restaurantPhoto: String,
  firstName: String,
  lastName: String,
  restaurantName: String,
  category: String,
  city: String,
  neighborhood: String,
  openingTime: String,
  closingTime: String,
  phoneNumber: String,
  email: { type: String, unique: true },
  description: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);


