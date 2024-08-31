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

function getElementsByIdPattern(prefix, count) {
  return Array.from({ length: count }, (_, i) =>
    document.getElementById(`${prefix}${i}`)
  );
}

export function shiftTableRows(
  usernamePrefix,
  arrayPrefix,
  rowPrefix,
  maxRows
) {
  for (let i = maxRows - 1; i > 0; i--) {
    const prevArrayText = document.getElementById(
      `${arrayPrefix}${i - 1}`
    ).innerText;
    const prevUsernameText = document.getElementById(
      `${usernamePrefix}${i - 1}`
    ).innerText;

    // Set the content of the current row with the text from the previous row
    document.getElementById(`${arrayPrefix}${i}`).innerText = prevArrayText;
    document.getElementById(`${usernamePrefix}${i}`).innerText =
      prevUsernameText;

    // Manage the visibility of the current rows
    if (prevArrayText || prevUsernameText) {
      // Show only if there is content
      document.getElementById(`${rowPrefix}${i * 2}`).style.display =
        "table-row";
      document.getElementById(`${rowPrefix}${i * 2 + 1}`).style.display =
        "table-row";
    } else {
      // Hide empty rows
      document.getElementById(`${rowPrefix}${i * 2}`).style.display = "none";
      document.getElementById(`${rowPrefix}${i * 2 + 1}`).style.display =
        "none";
    }

    // Update the username cell content
    const usernameCell = document.getElementById(`${usernamePrefix}${i}`);
    usernameCell.innerHTML = ""; // Clear existing content

    const contentContainer = document.createElement("div");
    contentContainer.className = "table-cell-content"; // Use flexbox styling

    const textContainer = document.createElement("span");
    textContainer.innerText = prevUsernameText; // Set the copied text from the previous row

    contentContainer.appendChild(textContainer);

    // Add the copy button only if there is text to copy
    if (prevUsernameText.trim() !== "") {
      contentContainer.appendChild(copyButton(`${usernamePrefix}${i}`));
    }

    usernameCell.appendChild(contentContainer);
  }

  // Clear the current row (the first set) for new data
  document.getElementById(`${arrayPrefix}0`).innerText = "";
  document.getElementById(`${usernamePrefix}0`).innerText = "";
  document.getElementById(`${rowPrefix}0`).style.display = "table-row";
  document.getElementById(`${rowPrefix}1`).style.display = "table-row";

  // Corrected setup for the first row
  const usernameCellFirstRow = document.getElementById(`${usernamePrefix}0`);
  usernameCellFirstRow.innerHTML = "";

  const contentContainerFirstRow = document.createElement("div");
  contentContainerFirstRow.className = "table-cell-content";

  const textContainerFirstRow = document.createElement("span");
  textContainerFirstRow.innerText = document.getElementById(
    `${usernamePrefix}0`
  ).innerText;

  contentContainerFirstRow.appendChild(textContainerFirstRow);

  // Add the copy button only if there is text to copy
  if (textContainerFirstRow.innerText.trim() !== "") {
    contentContainerFirstRow.appendChild(copyButton("statsBodyUsername0"));
  }

  usernameCellFirstRow.appendChild(contentContainerFirstRow);
}
