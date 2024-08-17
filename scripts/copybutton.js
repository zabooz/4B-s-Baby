import { clipBoard } from "/components/clipBoard.js";


export let storedArr = JSON.parse(sessionStorage.getItem("clipArr")) || [];

export const copyButton = (textId) => {
  const button = document.createElement("button");
  button.className = "copyButton";

  const confirmBubble = document.createElement("div");
  confirmBubble.className = "confirmBubble";
  confirmBubble.innerText = "Copied!";

  const img = document.createElement("img");

  if (document.getElementById("themeStylesheet")) {
    const boolean = document
      .getElementById("themeStylesheet")
      .getAttribute("href")
      .includes("serious");

    if (boolean) {
      img.src = "/img/copyToClipBoard.png";
    } else {
      img.src = "/img/copyToClipBoard2.png";
    }
    button.append(img, confirmBubble);
  } else {
    const text = "Kopiert!";
    const i = document.createElement("i");
    i.className = "fa-regular fa-clipboard";
    button.append(i, confirmBubble);
  }

  const textElement = document.getElementById(textId);
  let text;

  if (textElement.innerText.includes(" ")) {
    const index = textElement.innerText.lastIndexOf(" ");
    text = textElement.innerText.slice(index + 1);
  } else {
    text = textElement.innerText;
  }

  button.addEventListener("click", () => {
    navigator.clipboard.writeText(text);
    

    storedArr.push(text);
    storedArr = [...new Set(storedArr)];
    sessionStorage.setItem('clipArr', JSON.stringify(storedArr));
    
    clipBoard(".clipBoard");

    confirmBubble.classList.add("fadeIn");
    setTimeout(() => {
      confirmBubble.classList.remove("fadeIn");
    }, 2000);
  });

  return button;
};
