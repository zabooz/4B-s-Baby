



require('dotenv').config(); // Load environment variables from a .env file into process.env
const express = require('express'); // Import the Express framework
const axios = require('axios'); // Import Axios, a library for making HTTP requests
const cors = require('cors'); // Import CORS middleware
const bruteForceSimple = require('../client/scripts/bruteSimple.cjs');
const bruteForceLibrary = require('../client/scripts/bruteLibrary.cjs')
const passwordDecoder = require('../client/scripts/encoder.cjs')
const app = express(); // Create an Express application
const port = process.env.PORT || 3000; // Set the port from the environment variable or default to 3000
const dropboxFileUrl = process.env.DROPBOX_FILE_URL; // Set the Dropbox file URL from the environment variable

app.use(cors());

let passwordList

let requests = {}
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

app.get('/', (req, res) => {
  res.send('hello world');
});


app.get('/bruteForceSimple', async(req,res) => {

    const key = req.query.key
    const password = req.query.pwd || 'abc'
    const decodedPwd = passwordDecoder(password, key)
    const maxLength = 16; 
    const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:",.<>?/`~';

    const requestId = req.query.requestId

    requests[requestId] = true


  try{
    const result = await bruteForceSimple(decodedPwd,charset,maxLength, () => requests[requestId])
    res.send(result)

  }catch(error){
    console.log(error)
  }


})


app.get('/bruteForceLibrary',async(req,res) => {
  
  const password = req.query.pwd || 'abc'
  const decodedPwd = passwordDecoder(password)

  try {
    
    const result = await bruteForceLibrary(decodedPwd,passwordList)
    res.send(result)
    console.log(result)
      }catch(error){
        if(!passwordList) console.error('data not loaded')
        console.error('Ah shit, here we go again')
        res.status(500).send('error')
      }
        
        
})
app.get('/bruteForceHybrid',async (req,res) => {
    const key = req.query.key
    const password = req.query.pwd || 'abc'
    const decodedPwd = passwordDecoder(password, key)

    res.send('Not there yet')
})     



app.get('/stopbruteforce',(req,res) => {

    const requestId = req.query.requestId
    requests[requestId] = false
})



// Start the server and log the URL to the console
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});