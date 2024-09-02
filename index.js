
import { observer } from "./utilities/bounce.js";


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

