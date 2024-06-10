import {generatePassword} from './scripts/passwordGenerator.js'
import {passwordConverter} from './scripts/passwordConverter.js'
import {bruteForceLibrary} from './scripts/bruteLibrary.js'
import {bruteForceHybrid} from './scripts/bruteHybrid.js'

const convertButton = document.getElementById('convertButton')
const startBtn = document.getElementById('startBtn') 

convertButton.addEventListener('click', function() {
    const selectedConverter = document.getElementById('converterSelect').value;
    const passwordInput = document.getElementById('passwordInput').value
    const newPassword = passwordConverter(passwordInput, selectedConverter)
    document.getElementById('newPassword').innerText = newPassword
})

startBtn.addEventListener('click',()=> {
    
    const url = "http://localhost:3001/bruteForce"
    const pwd = document.getElementById('userPwd')
    const urlPara =`${url}?pwd=${encodeURIComponent(pwd.value)}`

    const img = document.getElementById('monkey')

    img.src = "../img/animated_monkey.gif"


    let result;
    pwd.textContent=''

    fetch(urlPara)
        .then(response => {

            if(!response.ok){
                throw new Error('I fucked up again')
            }

            return response.json()

        })
        .then(data => {
            result = data
            console.log(data)
        })
        .catch(error => {
            console.error('sdkghskjdgh',error)
        })




})

