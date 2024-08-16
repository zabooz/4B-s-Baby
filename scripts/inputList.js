import { copyButton } from "./copybutton.js";

const recentInputs = [];

export function updateRecentInputs(newInput) {
  recentInputs.unshift(newInput);


  if (recentInputs.length > 4) {
    recentInputs.pop();
  }

  displayRecentInputs();
}

function displayRecentInputs() {

  if (recentInputs.length > 0) {
    document.getElementById("input-output0").innerText = recentInputs[0];
    document.getElementById("input-output0").appendChild(copyButton("input-output0"))
  if (recentInputs.length > 1) {
    document.getElementById("input-output1").innerText = recentInputs[1];
    document
    .getElementById("input-output1")
    .appendChild(copyButton("input-output1"));

  }
  if (recentInputs.length > 2) {
    document.getElementById("input-output2").innerText = recentInputs[2];
    document
      .getElementById("input-output2")
      .appendChild(copyButton("input-output2"));
  }
  if (recentInputs.length > 3) {
    document.getElementById("input-output3").innerText = recentInputs[3];
    document
      .getElementById("input-output3")
      .appendChild(copyButton("input-output3"));  
    }};
}