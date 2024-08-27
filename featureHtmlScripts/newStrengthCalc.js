import { aiApiCall } from "../utilities/aiApiCall.js";

const sonderzeichen = [
  "!", "@", "#", "$", "%", "^", "§", "&", "*", "(", ")", "-", "_", "=",
  "+", "[", "]", "{", "}", ";", ":", '"', "'", "<", ">", ",", ".", "?", "/"
];
const kleinbuchstaben = "abcdefghijklmnopqrstuvwxyz".split("");
const grossbuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const zahlen = "0123456789".split("");

export async function newPwStrength(pwd) {
  let result = 0;
  
  const sysContent ="you can only answer with one word, it should be yes or no. does this password contains a word, either in german,english,france or spanish?"




  const points = {
    pointForNumber: {
      value: false,
      text:"Enthält mindestens eine Ziffer."
    },
    pointForSLetter: {
      value: false,
      text: "Enthält mindestens einen Kleinbuchstaben."
    },
    pointForBLetter: {
      value: false,
      text: "Enthält mindestens einen Großbuchstaben."
    },
    pointForSigns: {
      value: false,
      text: "Enthält mindestens ein Sonderzeichen."
    },
    noSequence: {
      value: false,
      text: "Hat keine aufeinander folgende Zeichen."
    },
    noRepeat: {
      value: false,
      text: "Keine wiederholenden Zeichen."
    },
    pointForLength: {
      value: pwd.length >= 12,
      text: "Passwort besteht aus mindestens 12 Zeichen."
    },
    hasNoWord: {
      value: false,
      text: "Enthält keine geläufiges Wort"
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
    const response = await aiApiCall(pwd,sysContent);
    points.hasNoWord.value = !response.toLowerCase().includes("yes");
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

