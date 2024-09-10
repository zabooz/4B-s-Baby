
import { observer } from "./utilities/bounce.js";

import { createPasswordGeneratingHTML } from "./content/passwordGenerating.js";
import { createLandingPageHTML } from "./content/landingPage.js";
import { createTestingPasswordHTML } from "./content/passwordTesting.js";
import { createUserGeneratingHTML } from "./content/userGenerating.js";
import { createSettingsHtml } from "./content/settings.js";
import { createAboutUsHTML } from "./content/aboutUs.js";
import { createProjectHTML } from "./content/project.js";

const functionMap = {
  createPasswordGeneratingHTML,
  createLandingPageHTML,
  createTestingPasswordHTML,
  createUserGeneratingHTML,
  createSettingsHtml,
  createAboutUsHTML,
  createProjectHTML,
};

Object.keys(functionMap).forEach((funcName) => {
  window[funcName] = functionMap[funcName];
});

const contentLoader = document.querySelectorAll("a[data-function]");
const contentBox = document.getElementById("contentBox");
const style = document.getElementById("contentStyle");

contentLoader.forEach(button => {
  button.addEventListener("click" , () => {
    const functionName = button.getAttribute("data-function")
    if(typeof window[functionName] === "function"){
      window[functionName](contentBox,style)
    }
})

document.addEventListener("DOMContentLoaded", () => {
  const content = sessionStorage.getItem("content")
  const styleSheet = sessionStorage.getItem("styleSheet")

  if(content){
    document.getElementById("contentBox").innerHTML = content
    document.getElementById("contentStyle").setAttribute("href", styleSheet);
  }else{
    window.createLandingPageHTML(contentBox,style)
  }
})
})


/**
 * bounce effect when scroll-into-view is called with arrow on landing page
 * Removes the "bounce" class from all elements with the class "bounceScroll"
 * and calls the observer function again to re-check all elements.
 */

const removeBounceClass = () => {
  const elements = document.querySelectorAll(".bounceScroll");
  elements.forEach((el) => {
    if (el.classList.contains("bounce")) {
      el.classList.remove("bounce");
    }
  });

    observer()

};

export const heroText = () => {
    document.getElementById("test").addEventListener("click", () => {
      removeBounceClass()
  })
}


