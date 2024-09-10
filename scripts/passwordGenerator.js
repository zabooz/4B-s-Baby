import { rndNumInLen } from "./encoder.js";

// Durstenfeld shuffle.
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Generates a password with user-defined length.
export function generatePassword(length) {
  const lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numberArray = "0123456789".split("");
  const symbolArray = "!@#$%^&*()-_+=[]{},.<>?/|\\:\";`'".split("");
  const arrays = [lowerCaseArray, upperCaseArray, numberArray, symbolArray];

  // Ensure that all types of characters are used at least once if length allows
  let generatedPassword = [];

  // Add one character from each array if there is space
  arrays.forEach((array) => {
    if (length > 0) {
      generatedPassword.push(array[rndNumInLen(array)]);
      length--;
    }
  });

  // Fill remaining length with random characters from the available arrays
  while (length > 0) {
    const randomArray = arrays[rndNumInLen(arrays)];
    generatedPassword.push(randomArray[rndNumInLen(randomArray)]);
    length--;
  }

  // Shuffle the final password to ensure randomness
  return shuffleArray(generatedPassword).join("");
}
