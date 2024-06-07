require('dotenv').config(); // Load environment variables from a .env file into process.env
const express = require('express'); // Import the Express framework
const axios = require('axios'); // Import Axios, a library for making HTTP requests
const fs = require('fs'); // Import the File System module from Node.js
const path = require('path'); // Import the Path module from Node.js
const cors = require('cors'); // Import CORS middleware

const app = express(); // Create an Express application
const port = process.env.PORT || 3000; // Set the port from the environment variable or default to 3000
const dropboxFileUrl = process.env.DROPBOX_FILE_URL; // Set the Dropbox file URL from the environment variable

app.use(cors()); // Enable CORS for all routes

// Define a route for the root URL "/"
app.get('/', (req, res) => {
  res.send('hello world'); // Send "hello world" as a response
});

// Define a route for "/password"
app.get('/password', async (req, res) => {
  try {
    // Make an HTTP GET request to the Dropbox URL and expect a text response
    const response = await axios.get(dropboxFileUrl, {
      responseType: 'text'
    });

    // Convert the file content to a JSON array
    const lines = response.data.split('\n').filter(line => line.trim() !== ''); // Split the file content into lines and remove empty lines
    const jsonContent = { lines }; // Convert the array to a JSON object

    const jsonFilePath = path.join(__dirname, '../data/rockYou.json'); // Set the path for saving the JSON file
    fs.writeFile(jsonFilePath, JSON.stringify(jsonContent, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err); // Log an error if writing the JSON file fails
        res.status(500).send('Error writing JSON file'); // Send an error status and message as a response
      } else {
        console.log('Password has been saved to data/rockYou.json'); // Log message indicating the JSON file has been saved
        res.send('Password has been saved to data/rockYou.json'); // Send a confirmation message as a response
      }
    });
  } catch (error) {
    console.error('Error fetching file:', error); // Log an error if the HTTP request fails
    res.status(500).send('Error fetching file'); // Send an error status and message as a response
  }
});

// Start the server and log the URL to the console
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
