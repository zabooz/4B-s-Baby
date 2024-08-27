import { pictureToString } from "../scripts/picturePwd.js";
import { copyButton } from "../scripts/copybutton.js";
import { tripleConverter } from "./tripleLeetConverter.js";
import { generatePassword } from "../scripts/passwordGenerator.js";
const uploadFile = document.getElementById("uploadFile");
const picConBtn = document.getElementById("pictureConvertBtn");
const leetBtn = document.getElementById("convertBtn");
const rdmPwdBtn = document.getElementById("rdmPwdBtn");

uploadFile.addEventListener("change", () => {
  const label = document.getElementById("uploadLabel");
  const preview = document.getElementById("previewImage");
  const input = document.getElementById("uploadFile");
  const file = input.files[0];
  label.textContent = "Picture Uploaded!";
  if (preview) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(file);
  } else {
    preview.src = "/img/confusion.jpeg"; // Verstecke das Bild, wenn keine Datei ausgewählt ist
  }
});

picConBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const textId = "picResult";
  const textElement = document.getElementById(textId);

  try {
    const result = await pictureToString();
    textElement.innerText = `${result}`;
    textElement.append(copyButton(textId));
  } catch (error) {
    console.log(error);
  }
});

leetBtn.addEventListener("click", function () {
  const passwordInput = document.getElementById("passwordInput").value;
  const newPasswordArray = tripleConverter(passwordInput);

  if (passwordInput) {
    for (let i = 0; i < newPasswordArray.length; i++) {

      
      const result = document.getElementById("leetResult" + i)

      result.innerHTML = newPasswordArray[i];
      result.append(copyButton("leetResult" + i));
      

    }
    const body = document.getElementById("statsBody2");
    body.style.display = "";
  }
});

rdmPwdBtn.addEventListener("click", function () {
  const textId = "generatedPassword";
  const textElement = document.getElementById(textId);

  const pwLength = document.getElementById("pwLength").value;
  const generatedPassword = generatePassword(pwLength);
  textElement.innerText = `${generatedPassword}`;
  textElement.append(copyButton(textId));
});
