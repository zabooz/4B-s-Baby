import { passwordConverter } from './scripts/passwordConverter.js'
import { generateUser } from './scripts/userGenerator.js'
import { pictureToString } from './scripts/picturePwd.js';
import { passwordEncoder } from './scripts/encoder.js';
import { passwordStrength } from './scripts/passwordStrengthCalc.js';
import { generatePassword } from './scripts/passwordGenerator.js';
import { copyButton } from './scripts/copybutton.js';



const convertBtn = document.getElementById('convertBtn');
const startBrute= document.getElementById('startBrute');
const stopBrute = document.getElementById('stopBrute');
const userPwdInput = document.getElementById('userPwdInput');
const picConBtn = document.getElementById('pictureConvertBtn')
const userGenBtn = document.getElementById('userGeneratorBtn');
const CalcStrengthBtn = document.getElementById('CalcStrengthBtn')
const uploadFile = document.getElementById('uploadFile');
const rdmPwdBtn = document.getElementById('rdmPwdBtn');


rdmPwdBtn.addEventListener('click', function() {

  const textId = 'generatedPassword'
  const textElement = document.getElementById(textId)

  const pwLength = document.getElementById('pwLength').value;
  const generatedPassword = generatePassword(pwLength);
  textElement.innerText = `Your password: ${generatedPassword}`
  textElement.append(copyButton(textId))
});

userGenBtn.addEventListener('click', function(e) {
  e.preventDefault()
  const textId = 'newUser'
  const textElement = document.getElementById(textId)
  const adjective1 = document.getElementById('adjective1').value;
  const adjective2 = document.getElementById('adjective2').value;
  const selectedNoun = document.getElementById('noun').value;
  const userOutput = generateUser(adjective1, adjective2, selectedNoun);
  textElement.innerText = `Username: ${userOutput}`
  textElement.append(copyButton(textId))
});

CalcStrengthBtn.addEventListener('click', () => {
  const value = document.getElementById('strengthInput').value
  passwordStrength(value)


})
convertBtn.addEventListener('click', function() {

  const textId = 'newPassword'
  const textElement = document.getElementById(textId)

  const selectedConverter = document.getElementById('converterSelect').value;
  const passwordInput = document.getElementById('passwordInput');
  const newPassword = passwordConverter(passwordInput.value, selectedConverter);
  textElement.innerText = `Your new Rune: ${newPassword}`
  textElement.append(copyButton(textId))
  passwordInput.value = "";
});

passwordInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault(); 
      convertBtn.click(); 
  }
});

userPwdInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    fetchData();
    
    }
});
startBrute.addEventListener("click", () => {
  fetchData();
});

picConBtn.addEventListener('click', async(e) => {
  e.preventDefault()
  const textId = "picResult"
  const textElement = document.getElementById(textId)

  
  try{
    const result  = await pictureToString()
    textElement.innerText = `Your Password: ${result}`
    textElement.append(copyButton(textId))
    console.log(result)
  }catch(error){
    console.log(error)
  }


})

uploadFile.addEventListener('change',() => {
    
    const label = document.getElementById('uploadLabel')
    label.textContent ='Picture Uploaded!'
})

 let requestId

stopBrute.addEventListener('click',() => {
  fetch(`http://localhost:3001/stopbruteforce?requestId=${requestId}`).then(response => console.log(response))
  
  
  })
        
        
  const fetchData = () => {

    requestId = Date.now()


    const bruteType = document.querySelector(
      '#bruteMode'
      ).value;
      const url = "http://localhost:3001/";
      const pwd = document.getElementById("userPwdInput");
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
