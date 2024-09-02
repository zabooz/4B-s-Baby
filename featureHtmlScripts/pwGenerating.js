import { pictureToString } from "../scripts/picturePwd.js";
import { copyButton } from "../scripts/copybutton.js";
import { tripleConverter } from "./tripleLeetConverter.js";
import { generatePassword } from "../scripts/passwordGenerator.js";
const uploadFile = document.getElementById("uploadFile");
const picConBtn = document.getElementById("pictureConvertBtn");
const leetBtn = document.getElementById("convertBtn");
const rdmPwdBtn = document.getElementById("rdmPwdBtn");
const pwInputField = document.getElementById("passwordInput");
const glyphRangeSlider = document.getElementById("pwLength");
const previewCon = document.getElementById("previewContainer");



let picturePath;


glyphRangeSlider.addEventListener("input", () => {
  const pwLengthValue = document.getElementById("pwLengthValue");
  pwLengthValue.textContent = glyphRangeSlider.value;
});

previewCon.addEventListener("click", () => {
  uploadFile.click()
})

uploadFile.addEventListener("change", () => {

  picConBtn.disabled = false;
  const label = document.getElementById("uploadLabel");
  const preview = document.getElementById("previewImage");

  const input = document.getElementById("uploadFile");
  const file = input.files[0];

  const validTypes = ["image/jpeg", "image/png", "image/webp", "image/bmp"];

  if (!validTypes.includes(file.type)) {
    alert("Only image files are allowed.");
    return;
  }

  label.textContent = "Hochgeladen!";
  if (preview) {
    const reader = new FileReader();

    reader.onload = function (e) {

      picturePath = e.target.result;
      preview.src = picturePath
   
    };

    reader.readAsDataURL(file);
  } else {
    preview.src = "/img/confusion.jpeg"; // Verstecke das Bild, wenn keine Datei ausgewählt ist
  }
});

picConBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const tbody = document.getElementById("statsBodyPicGen");
  const row = document.createElement("tr");

  const tdPic = document.createElement("td");  
  const tdPw = document.createElement("td");

  const rowCount = tbody.rows.length + 1;

  const pwId = `pasword${rowCount}`
  const picId = `pic${rowCount}`

  tdPic.id = picId
  tdPic.classList.add("tablePics");
  tdPic.innerHTML = `<img src="${picturePath}" id="${picId}" alt="runeTranslator" class="imgTable img-fluid">`;
  tdPw.id = pwId
  tdPw.className ="d-flex justify-content-between w-100"
  
  
  row.append(tdPw,tdPic);
  tbody.appendChild(row);
  const pic = document.getElementById(picId);
  try {
    const result = await pictureToString();

    const span = document.createElement("span");
    span.innerText = `${result}`;
    span.classList.add("w-100")

    tdPw.append(copyButton(pwId),span);
    pic.src = picturePath

  } catch (error) {
    console.error(error);
  } finally{
    picConBtn.disabled = true
  }
});

pwInputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents the default action (if any)
    document.getElementById("convertBtn").click(); // Trigger button click
  }
});

leetBtn.addEventListener("click", function () {
  document.getElementById("statsBody2").style.display = "";
  const passwordInput = document.getElementById("passwordInput").value;
  const newPasswordArray = tripleConverter(passwordInput);
  if (passwordInput) {
    for (let i = 0; i < newPasswordArray.length; i++) {
      const result = document.getElementById("leetResult" + i);
      const span = document.createElement("span");

      span.innerText = `${newPasswordArray[i]}`;
      span.classList.add("w-100")
      result.innerHTML=""
      result.append(copyButton("leetResult" + i), span);
    }
    const body = document.getElementById("statsBody2");
    body.style.display = "";
  }
});

rdmPwdBtn.addEventListener("click", function () {
  // Create an array of password elements
  const passwordElements = [
    document.getElementById("generatedPassword0"),
    document.getElementById("generatedPassword1"),
    document.getElementById("generatedPassword2"),
  ];
  const lengthElements = [
    document.getElementById("generatedPasswordLength0"),
    document.getElementById("generatedPasswordLength1"),
    document.getElementById("generatedPasswordLength2"),
  ];

  // Function to shift passwords down the array
  function shiftRow() {
    for (let i = passwordElements.length - 1; i > 0; i--) {
      if (passwordElements[i - 1].innerText !== "") {
        passwordElements[i].innerText = passwordElements[i - 1].innerText;
        lengthElements[i].innerText = lengthElements[i - 1].innerText;
        // Remove old copy button and add a new one
        passwordElements[i].querySelector("button")?.remove();
        passwordElements[i].append(copyButton(`generatedPassword${i}`));
        document.getElementById("generatedPasswordRow" + i).style.display = "";
      }
    }
  }

  // Call the function to shift passwords
  shiftRow();

  // Generate a new password and update the first element
  const pwLength = document.getElementById("pwLength").value;
  document.getElementById("generatedPasswordLength0").innerText = pwLength;
  const generatedPassword = generatePassword(pwLength);

  const span = document.createElement("span");
  passwordElements[0].querySelector("button")?.remove();
  span.innerText = `${generatedPassword}`;
 
  passwordElements[0].innerHTML = "";
  passwordElements[0].append(copyButton("generatedPassword0"), span);
  document.getElementById("generatedPasswordRow0").style.display = "";


});
