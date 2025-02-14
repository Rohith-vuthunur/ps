// const Lts = require('../models/Lts.js'); 
// const createOrganization = async (req, res) => {
//     try {
//         const { orgname, industry, email, description, phone, price, requirements, event } = req.body;

        
//         if (!orgname || !industry || !email || !description || !phone || !price || !requirements || !event) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         if (!/^\S+@\S+\.\S+$/.test(email)) {
//             return res.status(400).json({ error: "Invalid email format" });
//         }

//         if (!/^\d{10}$/.test(phone)) {
//             return res.status(400).json({ error: "Phone number must be exactly 10 digits" });
//         }

//         if (isNaN(price) || price < 0) {
//             return res.status(400).json({ error: "Price must be a non-negative number" });
//         }

        
//         const existingOrg = await Lts.findOne({ $or: [{ email }, { phone }] });
//         if (existingOrg) {
//             return res.status(409).json({ error: "An organization with this email or phone already exists" });
//         }

        
//         const newOrg = new Lts({
//             orgname,
//             industry,
//             email,
//             description,
//             phone,
//             price,
//             requirements,
//             event
//         });

//         await newOrg.save();
//         res.status(201).json({ message: "Organization saved successfully", organization: newOrg });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// module.exports = { createOrganization };
const Lts = require('../models/Lts.js'); 

// Function to create a new organization
const createOrganization = async (req, res) => {
    try {
        console.log(req.body)
        const { orgname, industry, email, description, phone, price, requirements, event,imgurl } = req.body;

        if (!orgname || !industry || !email || !description || !phone || !price || !requirements || !event||!imgurl) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({ error: "Phone number must be exactly 10 digits" });
        }

        if (isNaN(price) || price < 0) {
            return res.status(400).json({ error: "Price must be a non-negative number" });
        }

        const existingOrg = await Lts.findOne({ $or: [{ email }, { phone }] });
        if (existingOrg) {
            return res.status(409).json({ error: "An organization with this email or phone already exists" });
        }

        const newOrg = new Lts({
            orgname,
            industry,
            email,
            description,
            phone,
            price,
            requirements,
            event,
            imgurl,
        });

        await newOrg.save();
        res.status(201).json({ message: "Organization saved successfully", organization: newOrg });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getOrganizations = async (req, res) => {
    try {
        const organizations = await Lts.find(); // Fetch all organizations
        res.status(200).json(organizations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { createOrganization, getOrganizations };

