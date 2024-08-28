import { newPwStrength } from "./newStrengthCalc.js";
import { passwordEncoder } from "../scripts/encoder.js";
import { getColorFromStrength } from "../utilities/getColorFromStrength.js";
import { thinkWords, thinker } from "../utilities/thinker.js";

document.addEventListener("DOMContentLoaded", () => {
  const startBrute = document.getElementById("startBrute");
  const stopBrute = document.getElementById("stopBrute");
  const calcStrengthBtn = document.getElementById("calcStrengthBtn");
  const baseUrl = "https://kgg8gggo0c08oc8wcw0oco00.coolify.machma.app/";
  const icon2 = document.getElementById("basic-addon2");
  const icon = document.getElementById("basic-addon1");
  const why = document.getElementById("why");
  let interval;

  startBrute.addEventListener("click", (e) => {
    e.preventDefault();

    startBrute.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;
    startBrute.disabled = true;

    interval = setInterval(() => {
      thinker(startBrute);
    }, 2000);
    fetchData();
  });

  stopBrute.addEventListener("click", () => {
    const url = `${baseUrl}stopBruteForce`;
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

  icon.addEventListener("click", () => {
    const input = document.getElementById("userPwdInput");
    const icon = document.getElementById("togglePassword");
    if (input.type === "password") {
      input.type = "text";
      icon.className = "bi bi-eye-slash";
    } else {
      input.type = "password";
      icon.className = "bi bi-eye";
    }
  });
  icon2.addEventListener("click", () => {
    const input = document.getElementById("strengthInput");
    const icon2 = document.getElementById("togglePassword2");
    if (input.type === "password") {
      input.type = "text";
      icon2.className = "bi bi-eye-slash";
    } else {
      input.type = "password";
      icon2.className = "bi bi-eye";
    }
  });

  let excValue;

  why.addEventListener("click", () => {
    const question = document.getElementById("question");
    const submitQ = document.getElementById("submitQ");
    question.innerHTML =
      "wie kann ich dieses passwort verbessern?:  " + excValue;

    submitQ.click();
  });
  const fetchData = () => {
    const bruteType = document.querySelector(
      'input[name="bruteMode"]:checked'
    ).id;
    const pwd = document.getElementById("userPwdInput");
    const [encodedPwd, key] = passwordEncoder(pwd.value);
    const urlPara = `${baseUrl}bruteforce${bruteType}?pwd=${encodeURIComponent(
      encodedPwd
    )}&key=${key}`;

    pwd.value = "";

    let result = [pwd.value, "--", "--", "--"];

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

    const stars = "******";

    const icon = document.createElement("i");
    icon.className = "bi bi-eye-slash";

    const rowCount = tBody.rows.length;

    const hideArr = [stars, dataArr[0]];

    icon.addEventListener("click", () => {
      const target = document.getElementById(`td${rowCount}`);
      if (target.textContent === stars) {
        target.textContent = dataArr[0];
        icon.className = "bi bi-eye";
        target.append(icon);
      } else {
        target.textContent = stars;
        icon.className = "bi bi-eye-slash";
        target.append(icon);
      }
    });

    dataArr.forEach((item, index) => {
      const td = document.createElement("td");

      if (index === 0) {
        td.textContent = hideArr[0];
        td.id = `td${rowCount}`;
        td.classList.add(
          "d-flex",
          "justify-content-between",
          "align-items-center"
        );
        td.append(icon);
        console.log(icon);
      } else {
        td.textContent = item;
      }
      tr.appendChild(td);
    });

    let rows = Array.from(tBody.getElementsByTagName("tr"));
    tBody.innerHTML = "";
    tBody.append(tr, ...rows);
  }

  calcStrengthBtn.addEventListener("click", async () => {
    const bar = document.getElementById("progressBar");

    const value = document.getElementById("strengthInput").value;
    excValue = value;
    calcStrengthBtn.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;
    calcStrengthBtn.disabled = true;

    interval = setInterval(() => {
      thinker(calcStrengthBtn);
    }, 2000);

    try {
      const { result, points } = await newPwStrength(value);
      
      bar.style.width = `${result}%`;
      bar.style.backgroundColor = getColorFromStrength(result);
      showSuggestions(points);
    } catch (error) {
      console.log(error);
    } finally {
      why.classList.remove("d-none");
      clearInterval(interval);
      calcStrengthBtn.disabled = false;
      calcStrengthBtn.innerHTML = "Testen!";
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
        li.style.color = "green";
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
