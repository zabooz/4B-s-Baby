import { copyButton } from "./copybutton.js";

const recentUserGens = [];
const recentPwdGens = [];
let recentInputs;

export function updateRecentInputs(newInput, textId) {
  if (textId === "user-output") {
    recentInputs = recentUserGens;
  }
  if (textId === "generatedPassword") {
    recentInputs = recentPwdGens;
  }

  recentInputs.unshift(newInput);

  if (recentInputs.length > 4) {
    recentInputs.pop();
  }

  displayRecentInputs(textId);
}

function displayRecentInputs(textId) {
  for (let i = 0; i < recentInputs.length; i++) {
    const element = document.getElementById(textId + i);
    if (element) {
      element.innerText = recentInputs[i];
      element.appendChild(copyButton(textId + i));
    }
  }
}
