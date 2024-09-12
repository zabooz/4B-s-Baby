import { observer } from "./utilities/bounce.js";

import { createPasswordGeneratingHTML } from "./content/passwordGenerating.js";
import { createLandingPageHTML } from "./content/landingPage.js";
import { createTestingPasswordHTML } from "./content/passwordTesting.js";
import { createUserGeneratingHTML } from "./content/userGenerating.js";
import { createSettingsHTML } from "./content/settings.js";
import { createAboutUsHTML } from "./content/aboutUs.js";
import { createProjectHTML } from "./content/project.js";
import { createLeaderBoardHTML } from "./content/leaderBoard.js";

const functionMap = {
  createPasswordGeneratingHTML,
  createLandingPageHTML,
  createTestingPasswordHTML,
  createUserGeneratingHTML,
  createSettingsHTML,
  createAboutUsHTML,
  createProjectHTML,
  createLeaderBoardHTML
};

Object.keys(functionMap).forEach((funcName) => {
  window[funcName] = functionMap[funcName];
});

const contentBox = document.getElementById("contentBox");
const style = document.getElementById("contentStyle");

document.addEventListener("DOMContentLoaded", () => {
  const content = sessionStorage.getItem("content");
  content
    ? window[content](contentBox, style)
    : createLandingPageHTML(contentBox, style);

  eventBinding();
});
export const eventBinding = () => {
  const contentLoader = document.querySelectorAll("a[data-function]");
  contentLoader.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const functionName = button.getAttribute("data-function");
      if (typeof window[functionName] === "function") {
        window[functionName](contentBox, style);
      }
    });
  });
};
