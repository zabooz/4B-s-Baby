import { passwordConverter } from './scripts/passwordConverter.js'
import { generateUser } from './scripts/userGenerator.js'
import { pictureToString } from './scripts/picturePwd.js';
import { passwordEncoder } from './scripts/encoder.js';
import { passwordStrength } from './scripts/passwordStrengthCalc.js';
import { generatePassword } from './scripts/passwordGenerator.js';



const convertButton = document.getElementById('convertButton');
const startBrute= document.getElementById('startBrute');
const stopBtn = document.getElementById('stopBtn');
const userPwd = document.getElementById('userPwd');
const picConBtn = document.getElementById('pictureConvert')
const startGen = document.getElementById('startGen');
const strengthCalcBtn = document.getElementById('testStartBtn')
const uploadFile = document.getElementById('uploadFile');
const startPwGen = document.getElementById('startPwGen');
let requestId;

startPwGen.addEventListener('click', function() {
  let pwLength = document.getElementById('pwLength').value;
  const generatedPassword = generatePassword(pwLength);
  document.getElementById('generatedPassword').innerText = `Your password: ${generatedPassword}`
});

startGen.addEventListener('click', function() {
  let adjective1 = document.getElementById('adjective1').value;
  let adjective2 = document.getElementById('adjective2').value;
  let selectedNoun = document.getElementById('noun').value;
  const userOutput = generateUser(adjective1, adjective2, selectedNoun);
  document.getElementById('newUser').innerText = `Username: ${userOutput}`
});

strengthCalcBtn.addEventListener('click', () => {

  const value = document.getElementById('strengthInput').value
  passwordStrength(value)


})
convertButton.addEventListener('click', function() {
  const selectedConverter = document.getElementById('converterSelect').value;
  const passwordInput = document.getElementById('passwordInput');
  const newPassword = passwordConverter(passwordInput.value, selectedConverter);
  document.getElementById('newPassword').innerText = `Your new Rune: ${newPassword}`
  passwordInput.value = "";
});

passwordInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault(); 
      convertButton.click(); 
  }
});

userPwd.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    fetchData();
    
    }
});
startBrute.addEventListener("click", () => {
  fetchData();
});

picConBtn.addEventListener('click',pictureToString)

uploadFile.addEventListener('change',() => {

    const label = document.getElementById('uploadLabel')
    label.textContent ='Picture Uploaded!'
})


stopBtn.addEventListener('click',() => {
  fetch(`http://localhost:3001/stopbruteforce?requestId=${requestId}`).then(response => console.log(response))
  
  
  })
        
        
  const fetchData = () => {

    requestId = Date.now()


    const bruteType = document.querySelector(
      '#bruteMode'
      ).value;
      const url = "http://localhost:3001/";
      const pwd = document.getElementById("userPwd");
      const [encodedPwd, key] = passwordEncoder(pwd.value);
      const urlPara = `${url}bruteforce${bruteType}?pwd=${encodeURIComponent(
        encodedPwd
        )}&requestId=${requestId}&key=${key}`;
        

  pwd.value = "";
  
  let result;

  fetch(urlPara)
    .then((response) => {
      if (!response.ok) {
        throw new Error("I fucked up again");
      }

      return response.json();
    })
    .then((data) => {
      result = data;
      updateAttempts(result);


    })
    .catch((error) => {
      console.error("Yeah nnonononono", error);
    });
}




function updateAttempts(result){

    const dataArr = result
    const stats = document.getElementById('statsBody')
    const tr = document.getElementById('statOutput')

    tr.innerHTML =''
    dataArr.forEach(item => {

      const td = document.createElement('td')
      td.textContent = item

      tr.appendChild(td)
    })
    stats.append(tr)

}
