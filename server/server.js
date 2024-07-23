import { config } from "dotenv";
import express from "express";
import axios from "axios";
import cors from "cors";

import { bruteForceSimple } from "./serverScripts/bruteSimple.js";
import { bruteForceLibrary } from "./serverScripts/bruteLibrary.js";
import { passwordDecoder } from "../scripts/encoder.js";


config();

const app = express(); // Create an Express application
const port = process.env.PORT || 3000; // Set the port from the environment variable or default to 3000
const dropboxFileUrl = process.env.DROPBOX_FILE_URL; // Set the Dropbox file URL from the environment variable

app.use(cors());

let passwordList;

async function loadPasswordList() {
  try {
    const response = await axios.get(dropboxFileUrl, {
      responseType: "text",
    });
    passwordList = response.data.split("\n").filter((line) => line !== "");
    console.log("data loaded");
    console.log(passwordList)
  } catch (error) {
    console.error("dropbbox fail", error);
  }
}

loadPasswordList();


app.get("/", (req, res) => {
  res.send("hello world");
});


let currentProcess = null

app.get("/bruteForceSimple", async (req, res) => {
  const key = req.query.key;
  const password = req.query.pwd || "abc";
  const decodedPwd = passwordDecoder(password, key);
  if (currentProcess) {
    return res.status(400).send('Ein Prozess läuft bereits.');
  }

  currentProcess = bruteForceSimple(decodedPwd)

  currentProcess.promise.then(result => {
    res.send(result)
    currentProcess = null
  }).catch(error => {
    console.error(error)
    res.status(500).send('error occured during brute force process')
    currentProcess = null
  })


});

app.get("/bruteForceLibrary", async (req, res) => {
  const key = req.query.key;
  const password = req.query.pwd
  const decodedPwd = passwordDecoder(password, key);
  console.log("PWD:", password, "decoded:", decodedPwd);
  try {
    const result = await bruteForceLibrary(decodedPwd, passwordList);
    res.send(result);
    console.log(result);
  } catch (error) {
    if (!passwordList) console.error("data not loaded");
    console.error("Ah shit, here we go again");
    res.status(500).send("error");
  }
});


app.get("/stopBruteForce", (req,res) => {
    if(currentProcess){
      currentProcess.abort()
      currentProcess = null
      res.send('process stopped')
      console.log('brute force stopped')
    }else{
      res.status(400).send('no process running')
    }
})
// Start the server and log the URL to the console
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
