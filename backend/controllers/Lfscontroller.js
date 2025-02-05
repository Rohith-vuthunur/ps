const Lfs = require('../models/Lfs.js'); // Importing the model

// Create and save a new event
const createEvent = async (req, res) => {
    try {
        const { eventname, eventtype, eventfootfall, date, venue, description, email, phone } = req.body;

        // Validation checks
        if (!eventname || !eventtype || !eventfootfall || !date || !venue || !description || !email || !phone) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({ error: "Phone number must be exactly 10 digits" });
        }

        if (isNaN(eventfootfall) || eventfootfall <= 0) {
            return res.status(400).json({ error: "Event footfall must be a positive number" });
        }

        // Check if event already exists with the same email or phone
        const existingEvent = await Lfs.findOne({ $or: [{ email }, { phone }] });
        if (existingEvent) {
            return res.status(409).json({ error: "An event with this email or phone already exists" });
        }

        // Save to MongoDB
        const newEvent = new Lfs({
            eventname,
            eventtype,
            eventfootfall,
            date,
            venue,
            description,
            email,
            phone
        });

        await newEvent.save();
        res.status(201).json({ message: "Event saved successfully", event: newEvent });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { createEvent };
