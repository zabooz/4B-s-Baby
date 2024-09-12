// script.js
export function failPopUp(inputElementId, buttonId, msg) {
  // Find the input element and button element by their IDs
  const inputElement = document.getElementById(inputElementId);
  const buttonElement = document.getElementById(buttonId);

  // Check if the input or button element exists in the DOM
  if (!inputElement || !buttonElement) {
    console.error(
      `Input element with ID "${inputElementId}" or button with ID "${buttonId}" not found.`
    );
    return;
  }

  // Determine if the input provided by the user is considered "empty"
  let isEmpty = false;
  if (inputElement.type === "file") {
    isEmpty = inputElement.files.length === 0; // Check if no file is selected
  } else {
    isEmpty = !inputElement.value.trim(); // Check if the value is an empty string or contains only whitespace
  }

  // Display the fail bubble if the input is empty
  if (isEmpty) {
    // Create the popup element
    const failBubble = document.createElement("div");
    failBubble.className = "failBubble";
    failBubble.innerText = msg;

    // Append the popup to the body
    document.body.appendChild(failBubble);

    // Position the popup above the button
    const buttonRect = buttonElement.getBoundingClientRect();
    failBubble.style.position = "absolute";
    failBubble.style.top = `${buttonRect.top - 52}px`; // 10px above the button
    failBubble.style.left = `${buttonRect.left}px`;

    // Show the popup
    failBubble.style.display = "block";

    // Hide the popup after 3 seconds
    setTimeout(function () {
      failBubble.style.display = "none";
      document.body.removeChild(failBubble); // Remove the popup from the DOM
    }, 3000);
    return false;
  } else {
    console.log("Input exists. No failBubble necessary.");
    return true;
  }
}
