const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    restaurantPhoto: String,
    restaurantName: String,
    category: String,
    city: String,
    neighborhood: String,
    openingTime: String,
    closingTime: String,
    phoneNumber: String,
    email: { type: String, unique: true },
    password: String,
    description: String,
});

module.exports = mongoose.model('Vendor', VendorSchema);

