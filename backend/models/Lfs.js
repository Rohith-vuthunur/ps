const mongoose = require('mongoose');

const lfsschema = new mongoose.Schema({
    eventname: {
        type: String, 
        required: true,
        trim: true
    },
    eventtype: {
        type: String,
        required: true,
        trim: true
    },
    eventfootfall: { 
        type: Number,  // Changed from String to Number
        required: true,
        min: 1  // Ensuring footfall is a positive number
    },
    date: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true,
        trim: true
    },
    description: {
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
    phone: {
        type: String,  // Changed from Number to String
        required: true,
        unique: true,
        trim: true,
        match: [/^\d{10}$/, "Phone number must be exactly 10 digits"] // Ensuring a 10-digit phone number
    }
});

const Lfs = mongoose.model('Lfs', lfsschema);
module.exports = Lfs;
