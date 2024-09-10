
import { observer } from "./utilities/bounce.js";
import {createPasswordGeneratingHTML} from "./content/passwordGenerating.js";
import { createLandingPageHTML } from "./content/landingPage.js";
import { createTestingPasswordHTML } from "./content/passwordTesting.js";
import { createUserGeneratingHTML } from "./content/userGenerating.js";
import { createSettingsHtml } from "./content/settings.js";
import { createAboutUs } from "./content/aboutUs.js";
import { createProjectHtml } from "./content/project.js";

const project = document.getElementById("project");
const pwGeneratingContent = document.getElementById("pwGenerating");
const landingPage = document.getElementById("landingPage"); 
const passwordTesting = document.getElementById("passwordTesting");
const userGenerating = document.getElementById("usernameGenerator");
const settings = document.getElementById("settings");
const aboutUs = document.getElementById("aboutUs");

document.addEventListener("DOMContentLoaded", () => {
  const content = sessionStorage.getItem("content")
  const styleSheet = sessionStorage.getItem("styleSheet")

  if(content){
    document.getElementById("contentBox").innerHTML = content
    document.getElementById("contentStyle").setAttribute("href", styleSheet);
  }
})


const contentBox =  document.getElementById("contentBox");
const style = document.getElementById("contentStyle");
pwGeneratingContent.addEventListener("click", () => {
  createPasswordGeneratingHTML(contentBox,style)
})
landingPage.addEventListener("click", () => {
  createLandingPageHTML(contentBox,style)
})

passwordTesting.addEventListener("click", () => {
  createTestingPasswordHTML(contentBox,style)
})

userGenerating.addEventListener("click", () => {
  createUserGeneratingHTML(contentBox,style)
})

settings.addEventListener("click", () => {
  createSettingsHtml()
})

aboutUs.addEventListener("click", () => {
  createAboutUs()
})

project.addEventListener("click", () => {
  createProjectHtml() 
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


