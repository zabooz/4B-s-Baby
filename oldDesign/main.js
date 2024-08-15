import { passwordConverter } from "../scripts/passwordConverter.js";
import { generateUser } from "../scripts/userGenerator.js";
import { pictureToString } from "../scripts/picturePwd.js";
import { passwordEncoder } from "../scripts/encoder.js";
import { passwordStrength } from "../scripts/passwordStrengthCalc.js";
import { generatePassword } from "../scripts/passwordGenerator.js";
import { copyButton } from "../scripts/copybutton.js";
import {
  translatePage,
  initTranslation,
  translations,
} from "../scripts/translations.js";
import { changeTheme } from "../scripts/themeSelect.js";
import { chaos } from "../scripts/chaos.js";
import { tooltip } from "../scripts/tooltip.js";
import { updateRecentInputs } from "../scripts/inputList.js";

document.addEventListener("DOMContentLoaded", async () => {
  await initTranslation();
});

tooltip();

const convertBtn = document.getElementById("convertBtn");
const startBrute = document.getElementById("startBrute");
const stopBrute = document.getElementById("stopBrute");
const userPwdInput = document.getElementById("userPwdInput");
const picConBtn = document.getElementById("pictureConvertBtn");
const userGenBtn = document.getElementById("userGeneratorBtn");
const calcStrengthBtn = document.getElementById("calcStrengthBtn");
const uploadFile = document.getElementById("uploadFile");
const rdmPwdBtn = document.getElementById("rdmPwdBtn");
const chaosBtn = document.getElementById("chaos");

const scrollBtns = document.querySelectorAll(".scrollBtn");
const languageBtns = document.querySelectorAll(".languageContentBtn");
const themeBtns = document.querySelectorAll(".themeContentBtn");
const burgerBtn = document.getElementById("burgerBtn");
const burgerContent = document.getElementById("burgerContent");

chaosBtn.addEventListener("click", () => {
  chaos();
});

scrollBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

languageBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const selectedLanguage = e.target.value;
    translatePage(translations, selectedLanguage);
    tooltip();
  });
});

themeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tooltip();
    const selectedTheme = e.target.id;
    if (selectedTheme === "serious") {
      changeTheme("./serious.style.css", "/img/Security-Logo-Teal.png");
    } else if (selectedTheme === "matrix") {
      changeTheme("./matrix.style.css", "/img/non_animated_monkey.png");
    }
  });
});

rdmPwdBtn.addEventListener("click", function () {
  const textId = "generatedPassword";
  const pwLength = document.getElementById("pwLength").value;
  const generatedPassword = generatePassword(pwLength);
  updateRecentInputs(generatedPassword, textId);
});

userGenBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const textId = "user-output";
  const adjective1 = document.getElementById("adjective1").value;
  const adjective2 = document.getElementById("adjective2").value;
  const selectedNoun = document.getElementById("noun").value;
  const userOutput = generateUser(adjective1, adjective2, selectedNoun);
  updateRecentInputs(userOutput, textId);
});

burgerBtn.addEventListener("click", function () {
  burgerContent.classList.toggle("active");
  burgerBtn.textContent = burgerBtn.textContent === "☰" ? "X" : "☰";
});

calcStrengthBtn.addEventListener("click", async () => {
  const value = document.getElementById("strengthInput").value;
  const calcSpinner = document.getElementById("calcSpinner");
  const bar = document.getElementById("strengthBarDiv");
  bar.style.visibility = "hidden";
  calcSpinner.classList.add("lds-dual-ring");

  try {
    await passwordStrength(value);
  } catch (error) {
    console.log(error);
  } finally {
    bar.style.visibility = "visible";
    calcSpinner.classList.remove("lds-dual-ring");
  }
});
convertBtn.addEventListener("click", function () {
  const textId = "newPassword";
  const textElement = document.getElementById(textId);

  const selectedConverter = document.getElementById("converterSelect").value;
  const passwordInput = document.getElementById("passwordInput");
  const newPassword = passwordConverter(passwordInput.value, selectedConverter);
  textElement.innerText = `Your new Rune: ${newPassword}`;
  textElement.append(copyButton(textId));
  // passwordInput.value = "";
});

passwordInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    convertBtn.click();
  }
});

userPwdInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    fetchData();

    const tds = document.querySelectorAll("#statOutput td");
    tds.forEach((td) => {
      td.innerHTML = "";
      const spinner = document.createElement("div");

      spinner.className = "lds-dual-ring";

      td.append(spinner);
    });
  }
});

let timer;

startBrute.addEventListener("click", (e) => {
  e.preventDefault();
  const tds = document.querySelectorAll("#statOutput td");
  const pwd = document.getElementById("userPwdInput").value;

  tds.forEach((td, i) => {
    td.innerHTML = "";
    const spinner = document.createElement("div");
    spinner.className = "lds-dual-ring";

    if (timer) {
      clearInterval(timer);
    }

    let seconds = 0;
    timer = setInterval(() => {
      seconds++;
      tds[tds.length - 1].innerHTML = seconds + " s";
    }, 1000);

    if (i !== tds.length - 1 && i !== 0) {
      td.append(spinner);
    } else if (i === 0) {
      td.append(pwd);
    }
  });

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
      console.log("Brute force process stopped");
    })
    .catch((error) => {
      console.error("Stop brute force process:", error);
    });
});

picConBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const textId = "picResult";
  const textElement = document.getElementById(textId);

  try {
    const result = await pictureToString();
    textElement.innerText = `Your Password: ${result}`;
    textElement.append(copyButton(textId));
  } catch (error) {
    console.log(error);
  }
});

uploadFile.addEventListener("change", () => {
  const label = document.getElementById("uploadLabel");
  label.textContent = "Picture Uploaded!";
});

const fetchData = (signal) => {
  const bruteType = document.querySelector("#bruteMode").value;
  const url = "http://localhost:3001/";
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
      clearInterval(timer);
      updateAttempts(result);
    });
};

function updateAttempts(result) {
  const dataArr = result;

  const tds = document.querySelectorAll("#statOutput td");

  dataArr.forEach((item, index) => {
    tds[index].textContent = item;
  });
}
