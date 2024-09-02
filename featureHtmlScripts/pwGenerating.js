import { pictureToString } from "../scripts/picturePwd.js";
import { copyButton } from "../scripts/copybutton.js";
import { tripleConverter } from "./tripleLeetConverter.js";
import { generatePassword } from "../scripts/passwordGenerator.js";

const uploadFile = document.getElementById("uploadFile");
const picMagicBtn = document.getElementById("pictureMagicBtn");
const leetBtn = document.getElementById("leetBtn");
const rdmPwdBtn = document.getElementById("rdmPwdBtn");
const glyphRangeSlider = document.getElementById("sliderSorcery");
const previewCon = document.getElementById("previewContainer");
const leetInputField = document.getElementById("leetInput");





glyphRangeSlider.addEventListener("input", () => {

  const sliderValue  = glyphRangeSlider.value

  const sliderValueDisplay = document.getElementById("sliderValue");
  sliderValueDisplay.textContent = sliderValue

  rdmPwdBtn.disabled = sliderValue > 5 ? false : true

});

previewCon.addEventListener("click", () => {
  uploadFile.click()
})



// shared variables between upload and converter
let picturePath;
let file;

//  ==============================

uploadFile.addEventListener("input", () => {

  picMagicBtn.disabled = false;
  const label = document.getElementById("uploadLabel");
  const preview = document.getElementById("previewImage");

  const input = document.getElementById("uploadFile");

  if(input.files[0]) file = input.files[0]

  const validTypes = ["image/jpeg", "image/png", "image/webp", "image/bmp"];
  if(file === undefined){
    return
  }
  else if(!validTypes.includes(file.type)) {
    alert("Only image files are allowed.");
    return;
  }

  label.textContent = "Hochgeladen!";
    const reader = new FileReader();
    reader.onload = function (e) {
      picturePath = e.target.result;
      preview.src = picturePath
   
    };

    reader.readAsDataURL(file);

});

picMagicBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const tbody = document.getElementById("statsBodyPicGen");
  const row = document.createElement("tr");

  const rowCount = tbody.rows.length + 1;
  const pwId = `pasword${rowCount}`
  const picId = `pic${rowCount}`

  const tdPic = document.createElement("td");  
  tdPic.id = picId
  tdPic.classList.add("tablePics");
  tdPic.innerHTML = `<img src="${picturePath}" id="${picId}" alt="runeTranslator" class="imgTable img-fluid">`;
  
  const tdPw = document.createElement("td");
  tdPw.id = pwId
  tdPw.className ="d-flex justify-content-between w-100"

  row.append(tdPw,tdPic);
  tbody.appendChild(row);

  
  try {
    const result = await pictureToString(file);

    const span = document.createElement("span");
    const pic = document.getElementById(picId);
    span.innerText = `${result}`;
    span.classList.add("w-100")
    tdPw.append(copyButton(pwId),span);
    pic.src = picturePath
    picMagicBtn.disabled = true

  } catch (error) {
    console.error(error);
  }

});

leetInputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents the default action (if any)
    leetBtn.click(); // Trigger button click
  }
});

leetInputField.addEventListener("input",()=> {
  leetBtn.disabled =  leetInputField.value.length > 0 ? false : true
})


leetBtn.addEventListener("click", function () {
  document.getElementById("statsBody2").style.display = "";
  const leetInput = leetInputField.value;
  const newPasswordArray = tripleConverter(leetInput);

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

});

rdmPwdBtn.addEventListener("click", function () {
  // Create an array of password elements
  const passwordElements = document.querySelectorAll(".rdmPassword")
  const passwordLength = document.querySelectorAll(".rdmPasswordLength") 

  // Function to shift passwords down the array
  function shiftRow() {
    for (let i = passwordElements.length - 1; i > 0; i--) {
      if (passwordElements[i - 1].innerText !== "") {
        passwordElements[i].innerText = passwordElements[i - 1].innerText;
        passwordLength[i].innerText = passwordLength[i - 1].innerText;
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
  const pwLength = glyphRangeSlider.value;
  document.getElementById("generatedPasswordLength0").innerText = pwLength;
  const generatedPassword = generatePassword(pwLength);

  const span = document.createElement("span");
  passwordElements[0].querySelector("button")?.remove();
  span.innerText = `${generatedPassword}`;
 
  passwordElements[0].innerHTML = "";
  passwordElements[0].append(copyButton("generatedPassword0"), span);
  document.getElementById("generatedPasswordRow0").style.display = "";


});
