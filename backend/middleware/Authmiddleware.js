const jwt = require('jsonwebtoken');

const SECRET_KEY = "your_secret_key"; // Use environment variable instead

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization'); // Get token from request headers

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No Token Provided." });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY); // Verify token
        req.user = decoded; // Store user details in request
        next(); // Move to the next middleware
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports = authMiddleware;
