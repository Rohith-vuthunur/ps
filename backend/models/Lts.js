const mongoose = require('mongoose');

const ltsschema = new mongoose.Schema({
    orgname: {
        type: String, 
        required: true,
        trim: true
    },
    industry: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'] // Email validation
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,  // Changed from Number to String
        required: true,
        unique: true,
        trim: true,
        match: [/^\d{10}$/, "Phone number must be exactly 10 digits"] // Ensuring a 10-digit phone number
    },
    price: { 
        type: Number, 
        required: true,
        min: 0 // Prevent negative prices
    },
    requirements: {
        type: String,
        required: true,
        trim: true
    },
    event: {
        type: String,
        required: true,
        trim: true
    }
});

const Lts = mongoose.model('Lts', ltsschema);
module.exports = Lts;
