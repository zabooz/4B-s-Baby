

import { newPwStrength } from "./newStrengthCalc.js";
import { passwordEncoder } from "/scripts/encoder.js";
import { getColorFromStrength } from "/utilities/getColorFromStrength.js";
const startBrute = document.getElementById("startBrute");
const stopBrute = document.getElementById("stopBrute");
const calcStrengthBtn = document.getElementById("calcStrengthBtn");


const arr = [
    "denken",
    "rechnen",
    "überlegen",
    "analysieren",
    "planen",
    "abstrahieren",
    "interpretieren",
    "kalkulieren",
    "schätzen",
    "bewerten",
    "kombinieren",
    "spekulieren",
    "ermitteln",
    "nachdenken",
    "ableiten",
    "schlussfolgern",
    "reflektieren",
    "synthesieren"
]

let interval;

startBrute.addEventListener("click", (e) => {
    e.preventDefault();

    startBrute.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${arr[0]}</span>
    `
    startBrute.disabled = true

    const thinker = () => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const verb = arr[randomIndex]
        startBrute.innerHTML = `
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">${verb}</span>`
    }

    interval = setInterval(thinker,3000)
    fetchData();
  });







stopBrute.addEventListener("click", () => {
    // const url = "https://e6f7-85-31-21-51.ngrok-free.app/stopBruteForce";
    const url = "http://localhost:3001/stopBruteForce";
  
    fetch(url, { method: "GET", headers: { "ngrok-skip-browser-warning": true } })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request to stop brute force process failed");
        }
        startBrute.innerHTML = "Start"
        startBrute.disabled = false;
        console.log("Brute force process stopped");
      })
      .catch((error) => {
        console.error("Stop brute force process:", error);
      });
  });



const fetchData = () => {
    const bruteType = document.querySelector("#bruteMode").value;
    const url="http://localhost:3001/"
    // const url = "https://e6f7-85-31-21-51.ngrok-free.app/";
  
    const pwd = document.getElementById("userPwdInput");
    const [encodedPwd, key] = passwordEncoder(pwd.value);
    const urlPara = `${url}bruteforce${bruteType}?pwd=${encodeURIComponent(
      encodedPwd
    )}&key=${key}`;
    
    pwd.value = "";
  
    let result = [pwd.value, "--", "--", "--"];
  
    fetch(urlPara, {
      method: "GET",
      headers: { "ngrok-skip-browser-warning": true },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
  
        return response.json();
      })
      .then((data) => {
        result = data;
      })
      .catch((error) => {
        console.error("fetch data:", error);
      })
      .finally(() => {
        clearInterval(interval);
        updateAttempts(result);
        startBrute.disabled = false;
        startBrute.innerHTML = "Start"

      });
  };




  function updateAttempts(result) {
    const dataArr = result;
    console.log(dataArr)
    const tBody = document.querySelector("#statsBody")

    const tr =  document.createElement("tr")
    const td = document.createElement("td")

    td.textContent =  tBody.rows.length + 1;

    tr.appendChild(td)

        dataArr.forEach((item) => {
            const td = document.createElement("td")
            td.textContent = item
            tr.appendChild(td)
        }); 

    tBody.append(tr)

  }

  calcStrengthBtn.addEventListener("click", async () => {

    const bar = document.getElementById("progressBar")


    const value = document.getElementById("strengthInput").value;
    try {
       const {result,points} = await newPwStrength(value);
        bar.style.width = `${result}%`
        bar.style.backgroundColor = getColorFromStrength(result)
        showSuggestions(points)
    } catch (error) {
      console.log(error);
    } 
  });


  const showSuggestions = (points) => {

    const sugg = document.getElementById("suggestions")
    const succ = document.getElementById("success")
    sugg.innerHTML = ""
    succ.innerHTML = ""
    for(const key in points){

        const li = document.createElement('li')
        li.className = "list-group-item"

        if(points[key].value === true){
            li.style.color = "blue"
            li.textContent = "- " + points[key].text
            succ.append(li)
        }else{
            li.style.color = "red"
            li.textContent = "- " + points[key].text
            sugg.append(li)
        }


    }







  }