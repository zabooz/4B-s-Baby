import {generatePassword} from './scripts/passwordGenerator.js'
import {passwordConverter} from './scripts/passwordConverter.js'


const convertButton = document.getElementById('convertButton')
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn')
const img = document.getElementById("monkey");

convertButton.addEventListener('click', function() {
    const selectedConverter = document.getElementById('converterSelect').value;
    const passwordInput = document.getElementById('passwordInput').value
    const newPassword = passwordConverter(passwordInput, selectedConverter)
    document.getElementById('newPassword').innerText = newPassword
})

startBtn.addEventListener('click',(e)=> {
  fetchData();
  img.src = "../img/animated_monkey.gif";
  })
  
  
  stopBtn.addEventListener('click',(e) => {
    changeImg(e)
    img.src = "../img/non_animated_monkey.png";
    fetch("http://localhost:3001/stopbruteforce").then(response => console.log(response))
    

})


const fetchData = () => {
        const bruteType = document.querySelector(
          'input[name="bruteType"]:checked'
        ).value;
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
            img.src = "../img/non_animated_monkey.png";

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
