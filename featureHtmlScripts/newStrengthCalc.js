import { aiApiCall } from "/utilities/aiApiCall.js";

const sonderzeichen = [
  "!", "@", "#", "$", "%", "^", "§", "&", "*", "(", ")", "-", "_", "=",
  "+", "[", "]", "{", "}", ";", ":", '"', "'", "<", ">", ",", ".", "?", "/"
];
const kleinbuchstaben = "abcdefghijklmnopqrstuvwxyz".split("");
const grossbuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const zahlen = "0123456789".split("");

export async function newPwStrength(pwd) {
  let result = 0;
  
  const sysContent ="you can only answer with one word, it should be yes or no. does this password contains a word either in german,english,france or spain?"


  const points = {
    pointForNumber: {
      value: false,
      text: "Includes at least one number."
    },
    pointForSLetter: {
      value: false,
      text: "Includes at least one lowercase letter."
    },
    pointForBLetter: {
      value: false,
      text: "Includes at least one uppercase letter."
    },
    pointForSigns: {
      value: false,
      text: "Includes at least one special character."
    },
    noSequence: {
      value: false,
      text: "No sequences of three consecutive characters."
    },
    noRepeat: {
      value: false,
      text: "No repeating characters."
    },
    pointForLength: {
      value: pwd.length >= 12,
      text: "Password length is at least 12 characters."
    },
    hasNoWord: {
      value: false,
      text: "Does contain common words."
    },
  };
  
  if (sonderzeichen.some(z => pwd.includes(z))) {
    points.pointForSigns.value = true;
  }
  if (kleinbuchstaben.some(z => pwd.includes(z))) {
    points.pointForSLetter.value = true;
  }
  if (grossbuchstaben.some(z => pwd.includes(z))) {
    points.pointForBLetter.value = true;
  }
  if (zahlen.some(z => pwd.includes(z))) {
    points.pointForNumber.value = true;
  }

  // Überprüfe auf Wiederholungen und Sequenzen
  pwd = pwd.toLowerCase();
  for (let i = 0; i < pwd.length - 2; i++) {
    const charCodeOne = pwd.charCodeAt(i);
    const charCodeTwo = pwd.charCodeAt(i + 1);
    const charCodeThree = pwd.charCodeAt(i + 2);
    
    if (!(charCodeOne === charCodeTwo && charCodeTwo === charCodeThree)) {
      points.noRepeat.value = true;
    }
    
    if (!sonderzeichen.some(z => pwd[i] === z)) {
      if (!(charCodeOne + 1 === charCodeTwo && charCodeTwo + 1 === charCodeThree)) {
        points.noSequence.value = true;
      }
    }


    if (!sonderzeichen.some(z => pwd[i] === z)) {
      if (!(charCodeOne -1  === charCodeTwo && charCodeTwo -1 === charCodeThree)) {
        points.noSequence.value = true;
      }
    }
  }


  try {
    console.log(pwd,sysContent)
    const response = await aiApiCall(pwd,sysContent);
    points.hasNoWord.value = !response.includes("Yes");
    console.log(points.hasNoWord.value)
  } catch (error) {
    console.error('API call error:', error);
    points.hasNoWord.value = false;
  }


  for (const key in points) {
    if (points[key].value === true) {
      result += 12.5;
    }
  }

  return {result,points}
}

