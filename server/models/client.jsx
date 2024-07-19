const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    profilePhoto: String,
    lastName: String,
    firstName: String,
    phoneNumber: String,
    email: String,
    password: String,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
