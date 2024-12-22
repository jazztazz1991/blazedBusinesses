const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file
const config = {
  mongoURI: process.env.MONGODB_URI,
  jwtSecret: process.env.SESSION_SECRET,
  jwtExpiration: "1h",
  // Add other configuration variables as needed
};

module.exports = config;
