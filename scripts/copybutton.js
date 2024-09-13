import { refreshList,addButtons }from "../components/clipBoard.js";

export let storedClippy = JSON.parse(sessionStorage.getItem("clippy")) || [];

export const copyButton = (textId) => {
  const button = document.createElement("button");
  button.className = "copyButton";

  const confirmBubble = document.createElement("div");
  confirmBubble.className = "confirmBubble";
  confirmBubble.innerText = "Kopiert!";

  const img = document.createElement("img");

  // Determine the correct image based on theme
  if (document.getElementById("themeStylesheet")) {
    const boolean = document
      .getElementById("themeStylesheet")
      .getAttribute("href")
      .includes("serious");

    img.src = boolean
      ? "/img/copyToClipBoard.png"
      : "/img/copyToClipBoard2.png";
    button.append(img, confirmBubble);
  } else {
    const i = document.createElement("img");
    i.src = "../img/icons/clipboard-12-regular_.png";
    i.style.width = "20px";
    i.style.height = "20px";
    i.style.marginBottom = "5px";
    button.append(i, confirmBubble);
  }

  button.addEventListener("click", () => {
      const textElement = document.querySelector(`#${textId} span`).textContent;

    // console.log(textElement,document.getElementById(textId))

    const clippyQuickNav = document.getElementById("clippyNav");

    if (clippyQuickNav) {
      clippyQuickNav.classList.add("noticeMeSenpai");

      setTimeout(() => {
        clippyQuickNav.classList.remove("noticeMeSenpai");
      }, 3000);
    }

    if (textElement) {
   

      let text = textElement.trim();

      navigator.clipboard.writeText(text).then(() => {
        confirmBubble.classList.add("fadeIn");
        setTimeout(() => {
          confirmBubble.classList.remove("fadeIn");
        }, 2000);
      });
      const type = textId.toLowerCase().includes("username")
        ? "username"
        : "password";

      const textObj = { type: type, value: text };

      const updatetClippy = Array.from(
        new Map(
          [...storedClippy, textObj].map((obj) => [obj.value, obj])
        ).values()
      );

      storedClippy = updatetClippy;
      sessionStorage.setItem("clippy", JSON.stringify(updatetClippy));

      refreshList()
      addButtons()

    } else {
      console.warn(`Element with ID ${textId} not found.`);
    }
  });

  return button;
};
