import { reset } from "./chaos.js";

export function changeTheme(theme, logo) {
  const burgerBtn = document.getElementById("burgerBtn");
  const burgerContent = document.getElementById("burgerContent");
  burgerContent.classList.remove("active");
  burgerBtn.textContent = "☰";
  reset();
  document.getElementById("themeStylesheet").setAttribute("href", theme);
  document.getElementById("logo").setAttribute("src", logo);
  document.getElementById("logoFooter").setAttribute("src", logo);
  const copyButtons = document.querySelectorAll(".copyButton img");
  copyButtons.forEach((img) => {
    if (theme.includes("serious")) {
      img.src = "/img/copyToClipBoard.png";
    } else {
      img.src = "/img/copyToClipBoard2.png";
    }
  });
}
