import {generatePassword} from './scripts/passwordGenerator.js'
import {passwordConverter} from './scripts/passwordConverter.js'


const convertButton = document.getElementById('convertButton')
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn')
const monkeyImg = document.getElementById("monkeyAnimated");
const selectedConverter = document.getElementById('converterSelect')
const passwordInput = document.getElementById('passwordInput')

convertButton.addEventListener('click', function() {
    const newPassword = passwordConverter(passwordInput.value, selectedConverter.value)
    document.getElementById('newPassword').innerText = newPassword
})

startBtn.addEventListener('click',(e)=> {
  fetchData();
  monkeyImg.src = "../img/animated_monkey.gif";
  })
  
  
  stopBtn.addEventListener('click',(e) => {
    monkeyImg.src = "../img/monkeyCircle.jpg";
    fetch("http://localhost:3001/stopbruteforce").then(response => console.log(response))
    

})


const fetchData = () => {
        const bruteType = document.querySelector(
          '#bruteMode'
        ).value;
        console.log(bruteType)
        const url = "http://localhost:3001/";
        const pwd = document.getElementById("userPwd");
        const urlPara = `${url}bruteforce${bruteType}?pwd=${encodeURIComponent(
          pwd.value
        )}`;

        pwd.value = "";
        
        console.log(urlPara)
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
            monkeyImg.src = "../img/monkeyCircle.jpg";

          })
          .catch((error) => {
            console.error("Yeah nnonononono", error);
          });
}




function updateAttempts(result){

    const dataArr = result
    const stats = document.getElementById('stats')
    const div = document.createElement('div')
    div.className='statsHeading'
    dataArr.forEach(item => {

      const para = document.createElement('p')
      para.textContent = item

      div.appendChild(para)
    })

    stats.append(div)

}
