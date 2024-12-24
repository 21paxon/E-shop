const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }, // Added unique constraint for email
    password: { type: String, required: true },
    role: { type: String, default: 'customer' } // Default role is 'customer'
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);