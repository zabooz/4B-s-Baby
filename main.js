import { passwordConverter } from "./scripts/passwordConverter.js";
import { generateUser } from "./scripts/userGenerator.js";
import { pictureToString } from "./scripts/picturePwd.js";
import { passwordEncoder } from "./scripts/encoder.js";
import { passwordStrength } from "./scripts/passwordStrengthCalc.js";
import { generatePassword } from "./scripts/passwordGenerator.js";
import { copyButton } from "./scripts/copybutton.js";



const convertBtn = document.getElementById("convertBtn");
const startBrute = document.getElementById("startBrute");
const stopBrute = document.getElementById("stopBrute");
const userPwdInput = document.getElementById("userPwdInput");
const picConBtn = document.getElementById("pictureConvertBtn");
const userGenBtn = document.getElementById("userGeneratorBtn");
const calcStrengthBtn = document.getElementById("calcStrengthBtn");
const uploadFile = document.getElementById("uploadFile");
const rdmPwdBtn = document.getElementById("rdmPwdBtn");

document.getElementById('toggleSwitch').addEventListener('change', function() {
  var themeStylesheet = document.getElementById('themeStylesheet');
  var logo = document.getElementById('logo');
  if(this.checked) {
      themeStylesheet.href = "./style.css"; // Switch to style2.css
      logo.src = './img/non_animated_monkey.png'
  } else {
      themeStylesheet.href = './serious.style.css'; // Switch to style1.css
      logo.src = './img/Security-Logo-Teal.png'
  }
});


rdmPwdBtn.addEventListener("click", function () {
  const textId = "generatedPassword";
  const textElement = document.getElementById(textId);

  const pwLength = document.getElementById("pwLength").value;
  const generatedPassword = generatePassword(pwLength);
  textElement.innerText = `Your password: ${generatedPassword}`;
  textElement.append(copyButton(textId));
});

userGenBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const textId = "newUser";
  const textElement = document.getElementById(textId);
  const adjective1 = document.getElementById("adjective1").value;
  const adjective2 = document.getElementById("adjective2").value;
  const selectedNoun = document.getElementById("noun").value;
  const userOutput = generateUser(adjective1, adjective2, selectedNoun);
  textElement.innerText = `Username: ${userOutput}`;
  textElement.append(copyButton(textId));
});

calcStrengthBtn.addEventListener("click", async () => {
  const value = document.getElementById("strengthInput").value;
  const calcSpinner = document.getElementById("calcSpinner");
  calcSpinner.classList.add("lds-dual-ring");

  try {
    const { result, count } = await passwordStrength(value);

    document.getElementById(
      "strengthResult"
    ).textContent = `Result: ${result} (${count.toFixed()})`;

    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
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
  passwordInput.value = "";
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

startBrute.addEventListener("click", () => {
  const tds = document.querySelectorAll("#statOutput td");

  tds.forEach((td) => {
    td.innerHTML = "";
    const spinner = document.createElement("div");
    
    spinner.className = "lds-dual-ring";
    
    td.append(spinner);
  });
  
  
  
  
  fetchData();
});
stopBrute.addEventListener("click", () => {
  fetch("http://localhost:3001/stopBruteForce")
    .then(response => {
      if (!response.ok) {
        throw new Error("Request to stop brute force process failed");
      }
      console.log('Brute force process stopped');
    })
    .catch(error => {
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
    console.log(result);
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
  const pwd = document.getElementById("userPwdInput");
  const [encodedPwd, key] = passwordEncoder(pwd.value);
  const urlPara = `${url}bruteforce${bruteType}?pwd=${encodeURIComponent(
    encodedPwd
  )}&key=${key}`;

  pwd.value = "";

  let result =[pwd.value,'--','--','--']

  fetch(urlPara)
    .then((response) => {
      if (!response.ok) {
        throw new Error("I fucked up again");
      }

      return response.json();
    })
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      console.error("fetch data:", error);
    }).finally( () => {
  
      updateAttempts(result);
    })
};

function updateAttempts(result) {
  const dataArr = result;

  const tds = document.querySelectorAll("#statOutput td");

  dataArr.forEach((item, index) => {
    tds[index].textContent = item;
  });
}
