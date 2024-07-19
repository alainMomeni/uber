const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    profilePhoto: String,
    restaurantPhoto: String,
    restaurantName: String,
    category: String,
    city: String,
    neighborhood: String,
    openingTime: String,
    closingTime: String,
    phoneNumber: String,
    email: String,
    description: String,
    password: String,
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
