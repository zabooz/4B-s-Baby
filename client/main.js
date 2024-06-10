import {generatePassword} from './scripts/passwordGenerator.js'
import {passwordConverter} from './scripts/passwordConverter.js'
import {bruteForceSimple} from './scripts/bruteSimple.js'
import {bruteForceLibrary} from './scripts/bruteLibrary.js'
import {bruteForceHybrid} from './scripts/bruteHybrid.js'

const convertButton = document.getElementById('convertButton')
    
convertButton.addEventListener('click', function() {
    const selectedConverter = document.getElementById('converterSelect').value;
    const passwordInput = document.getElementById('passwordInput').value

passwordConverter(passwordInput, selectedConverter)
})