import { copyButton } from "../scripts/copybutton.js";

export function convertToGerman(germanUserOutput, myArraysObj) {
  for (let i = 1; i < 4; i++) {
    for (const [key, value] of Object.entries(myArraysObj)) {
      if (germanUserOutput[i] === key) {
        // Check if the word in germanUserOutput matches the key
        germanUserOutput[i] = value; // Replace with the corresponding value from myArraysObj
        break;
      }
    }
  }
  return germanUserOutput;
}

// Helper function to get elements by ID pattern
function getElementsByIdPattern(prefix, count) {
  return Array.from({ length: count }, (_, i) =>
    document.getElementById(`${prefix}${i}`)
  );
}

// Generalized function to shift rows for any table
export function shiftTableRows(column1Prefix, column2Prefix, rowPrefix, count) {
  const elements = {
    column1: getElementsByIdPattern(column1Prefix, count),
    column2: getElementsByIdPattern(column2Prefix, count),
  };

  for (let i = elements.column1.length - 1; i > 0; i--) {
    const prevColumn1Element = elements.column1[i - 1];
    if (prevColumn1Element.innerText !== "") {
      // Shift text content
      elements.column1[i].innerText = prevColumn1Element.innerText;
      elements.column2[i].innerText = elements.column2[i - 1].innerText;

      // Replace copy button
      elements.column1[i].querySelector("button")?.remove();
      elements.column1[i].append(copyButton(`${column1Prefix}${i}`));

      // Show row
      document.getElementById(`${rowPrefix}${i}`).style.display = "";
    }
  }
}
