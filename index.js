
import { observer } from "./utilities/bounce.js";
import {createPasswordGeneratingContent} from "./content/passwordGenerating.js";
import { createLandingPage } from "./content/landingPage.js";
import { createTestingPasswords } from "./content/passwordTesting.js";
import { createUserGeneratingSite } from "./content/userGenerating.js";
const pwGeneratingContent = document.getElementById("pwGenerating");



const landingPage = document.getElementById("landingPage"); 
const passwordTesting = document.getElementById("passwordTesting");
const userGenerating = document.getElementById("usernameGenerator");



pwGeneratingContent.addEventListener("click", () => {
  createPasswordGeneratingContent()
})
landingPage.addEventListener("click", () => {
  createLandingPage()
})

passwordTesting.addEventListener("click", () => {
  createTestingPasswords()
})

userGenerating.addEventListener("click", () => {
  createUserGeneratingSite()
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


