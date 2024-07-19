const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    profilePhoto: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: { type: String, unique: true },
    password: String,
});

module.exports = mongoose.model('Client', ClientSchema);

