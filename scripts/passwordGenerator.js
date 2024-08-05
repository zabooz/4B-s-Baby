import { rndNumInLen } from './encoder.js';


//Durstenfeld shuffle. 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//Generates a password with user defined length.
export function generatePassword (length) {

  const lowerCaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperCaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbolArray = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "{",
    "}",
    "[",
    "]",
    "|",
    "\\",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
  ];
  const parentArray = [lowerCaseArray, upperCaseArray, numberArray, symbolArray];

  // Shuffle the parent array
  const shuffledArrays = shuffleArray([...parentArray]);
  let generatedPassword = "";

  // Ensure each array is used at least once
  for (let i = 0; i < 4; i++) {
    const randomIndex = rndNumInLen(shuffledArrays[i]);
    generatedPassword += shuffledArrays[i][randomIndex];
  }

  // If the length is greater than 4, add additional random elements
  while (generatedPassword.length < length) {
    const randomArrayIndex = rndNumInLen(shuffledArrays);
    const randomIndex = rndNumInLen(shuffledArrays[randomArrayIndex]);
    generatedPassword += shuffledArrays[randomArrayIndex][randomIndex];
  }

  // Convert the generatedPassword string to an array to shuffle it, then back to a string
  generatedPassword = shuffleArray(generatedPassword.split("")).join("");

  return generatedPassword;
}


