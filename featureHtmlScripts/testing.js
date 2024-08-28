import { newPwStrength } from "./newStrengthCalc.js";
import { passwordEncoder } from "../scripts/encoder.js";
import { getColorFromStrength } from "../utilities/getColorFromStrength.js";
import { thinkWords,thinker } from "../utilities/thinker.js";



document.addEventListener("DOMContentLoaded", () => {
  const startBrute = document.getElementById("startBrute");
  const stopBrute = document.getElementById("stopBrute");
  const calcStrengthBtn = document.getElementById("calcStrengthBtn");
  const baseUrl = "https://kgg8gggo0c08oc8wcw0oco00.coolify.machma.app/";
  let interval;

  startBrute.addEventListener("click", (e) => {
    e.preventDefault();

    startBrute.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;
    startBrute.disabled = true;

    interval = setInterval(() => {
      thinker(startBrute)
    },2000);
    fetchData();
  });



  stopBrute.addEventListener("click", () => {
    const url = `${baseUrl}stopBruteForce`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request to stop brute force process failed");
        }
        startBrute.innerHTML = "Start";
        startBrute.disabled = false;
        console.log("Brute force process stopped");
      })
      .catch((error) => {
        console.error("Stop brute force process:", error);
      });
  });

  const fetchData = () => {
    const bruteType = document.querySelector("#bruteMode").value;

 
    const pwd = document.getElementById("userPwdInput");
    const [encodedPwd, key] = passwordEncoder(pwd.value);
    const urlPara = `${baseUrl}bruteforce${bruteType}?pwd=${encodeURIComponent(
      encodedPwd
    )}&key=${key}`;

    pwd.value = "";

    let result = [pwd.value, "--", "--", "--"];
    console.log(urlPara)
    fetch(urlPara)
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
        startBrute.innerHTML = "Start";
      });
  };

  function updateAttempts(result) {
    const dataArr = result;

    const tBody = document.querySelector("#statsBody");

    const tr = document.createElement("tr");


    dataArr.forEach((item) => {
      const td = document.createElement("td");
      td.textContent = item;
      tr.appendChild(td);
    });

    tBody.append(tr);
  }

  calcStrengthBtn.addEventListener("click", async () => {
    const bar = document.getElementById("progressBar");

    console.log(234);
    const value = document.getElementById("strengthInput").value;
    try {
      const { result, points } = await newPwStrength(value);
      bar.style.width = `${result}%`;
      bar.style.backgroundColor = getColorFromStrength(result);
      showSuggestions(points);
    } catch (error) {
      console.log(error);
    }
  });

  const showSuggestions = (points) => {
    const sugg = document.getElementById("suggestions");
    const succ = document.getElementById("success");
    sugg.innerHTML = "";
    succ.innerHTML = "";
    for (const key in points) {
      const li = document.createElement("li");
      li.className = "list-group-item";

      if (points[key].value === true) {
        li.style.color = "blue";
        li.textContent = "- " + points[key].text;
        succ.append(li);
      } else {
        li.style.color = "red";
        li.textContent = "- " + points[key].text;
        sugg.append(li);
      }
    }
  };
});
