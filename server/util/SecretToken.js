// Import the dotenv library to load environment variables from a .env file
require("dotenv").config();

// Import the jsonwebtoken library
const jwt = require("jsonwebtoken");

// Define a function to create a secret token
module.exports.createSecretToken = (id) => {
  // Use jwt.sign to create a JWT token
  // Provide the payload (in this case, { id })
  // Use the secret key from the environment variable TOKEN_KEY
  // Set an expiration time for the token (e.g., 3 days)
return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60, // 3 days in seconds
});
};