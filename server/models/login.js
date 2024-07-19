const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
});

module.exports = mongoose.model('Login', LoginSchema);
