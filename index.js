
import { observer } from "./utilities/bounce.js";

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

