


require('dotenv').config(); // Load environment variables from a .env file into process.env
const express = require('express'); // Import the Express framework
const axios = require('axios'); // Import Axios, a library for making HTTP requests
const fs = require('fs'); // Import the File System module from Node.js
const path = require('path'); // Import the Path module from Node.js
const cors = require('cors'); // Import CORS middleware
const bruteForceSimple = require('../client/scripts/bruteSimple.cjs');
const bruteForceLibrary = require('../client/scripts/bruteLibrary.cjs')
const app = express(); // Create an Express application
const port = process.env.PORT || 3000; // Set the port from the environment variable or default to 3000
const dropboxFileUrl = process.env.DROPBOX_FILE_URL; // Set the Dropbox file URL from the environment variable


let passwordList

async function loadPasswordList(){

    try{
      const response = await axios.get(dropboxFileUrl, {
        responseType: "text",
      });
      passwordList = response.data
        .split("\n")
        .filter((line) => line !== "");
        console.log('data loaded')

      
    }catch(error){
      console.error('dropbbox fail',error)
      response.status(500).send('dropbox failure')
    }

}

loadPasswordList()



app.use(cors()); // Enable CORS for all routes

// Define a route for the root URL "/"
app.get('/', (req, res) => {
  res.send('hello world');
});



app.get('/bruteForceSimple', async(req,res) => {

    const password = req.query.pwd || 'abcd'
    const maxLength = 16; 
    const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:",.<>?/`~';

    const result = bruteForceSimple(password,charset,maxLength)

    res.send(result)

})


app.get('/bruteForceLibrary',async(req,res) => {
  
  const password = req.query.pwd || 'abc'

  try {
    
    const result = await bruteForceLibrary(password,passwordList)
    res.send(result)
    console.log(result)
      }catch(error){
        console.error('Ah shit, here we go again')
        res.status(500).send('error')
      }
        
        
})
app.get('/bruteForceHybrid',async (req,res) => {
    const password = req.query.pwd || 'abc'
})      
// Start the server and log the URL to the console
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});