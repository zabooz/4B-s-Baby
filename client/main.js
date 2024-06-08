import {generatePassword} from './scripts/passwordGenerator.js'
import {passwordConverter} from './scripts/passwordConverter.js'
import {bruteForceSimple} from './scripts/bruteSimple.js'
import {bruteForceLibrary} from './scripts/bruteLibrary.js'
import {bruteForceHybrid} from './scripts/bruteHybrid.js'



const testPwd = 'abcde'

async function checkPassword(testPwd){
    const result = await bruteForceLibrary(testPwd)
    console.log(result)
}


checkPassword(testPwd)