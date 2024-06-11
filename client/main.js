import {generatePassword} from './scripts/passwordGenerator.js'
import {passwordConverter} from './scripts/passwordConverter.js'
import {bruteForceHybrid} from './scripts/bruteHybrid.js'

const convertButton = document.getElementById('convertButton')
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn')

convertButton.addEventListener('click', function() {
    const selectedConverter = document.getElementById('converterSelect').value;
    const passwordInput = document.getElementById('passwordInput').value
    const newPassword = passwordConverter(passwordInput, selectedConverter)
    document.getElementById('newPassword').innerText = newPassword
})

startBtn.addEventListener('click',()=> {
    const bruteType = document.querySelector('input[name="bruteType"]:checked').value
    const url = "http://localhost:3001/"
    const pwd = document.getElementById('userPwd')
    const urlPara =`${url}bruteforce${bruteType}?pwd=${encodeURIComponent(pwd.value)}`


    changeImg();
  

    
    
    let result;
    
    fetch(urlPara)
        .then(response => {

            if(!response.ok){
                throw new Error('I fucked up again')
            }

            return response.json()

        })
        .then(data => {
          result = data;
          pwd.value = ''
          console.log(data);
        })
        .catch(error => {
            console.error('Yeah nnonononono',error)
        })

})


function changeImg(){
    const img = document.getElementById("monkey");
    if(img.src[img.src.length-1] !== 'f'){
  
        img.src = "../img/animated_monkey.gif";
    }else{
        img.src = "../img/non_animated_monkey.png";
    }
}

