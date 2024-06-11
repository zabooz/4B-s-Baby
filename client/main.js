import {generatePassword} from './scripts/passwordGenerator.js'
import {passwordConverter} from './scripts/passwordConverter.js'


const convertButton = document.getElementById('convertButton')
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn')

convertButton.addEventListener('click', function() {
    const selectedConverter = document.getElementById('converterSelect').value;
    const passwordInput = document.getElementById('passwordInput').value
    const newPassword = passwordConverter(passwordInput, selectedConverter)
    document.getElementById('newPassword').innerText = newPassword
})

startBtn.addEventListener('click',(e)=> {
  fetchData();
  changeImg(e);
})


stopBtn.addEventListener('click',(e) => {
    changeImg(e)

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





function changeImg(e){
    const img = document.getElementById("monkey");
    img.src =
      e.target.id === "startBtn"
        ? "../img/animated_monkey.gif"
        : "../img/non_animated_monkey.png";
}


function updateAttempts(result){

    const [pwd,time,closeEnough,count,mode] = result
    const stats = document.getElementById('stats')

    const para = document.createElement('p')
     para.innerHTML = `${pwd}  ${count}  ${closeEnough.length}  ${mode}  ${time}`

    stats.append(para)



}

