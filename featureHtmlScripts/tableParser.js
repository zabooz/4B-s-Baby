
export function convertToGerman(germanUserOutput, myArraysObj) {
    for (let i = 1; i < 4; i++) {
    for (const [key, value] of Object.entries(myArraysObj)) {
    if (germanUserOutput[i] === key) {// Check if the word in germanUserOutput matches the key
      germanUserOutput[i] = value; // Replace with the corresponding value from myArraysObj
      break;
    }
  }
} return germanUserOutput;
};
