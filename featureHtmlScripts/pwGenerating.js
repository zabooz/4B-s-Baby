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

let pictureMagicArray = JSON.parse(sessionStorage.getItem("pictureMagicArray")) || [];
const updatedPicMagArr = []


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

  const previewCon = document.getElementById("previewContainer")
  const previewImg = document.getElementById("previewImage")

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

  const reader = new FileReader();
  reader.onload = function (e) {
    picturePath = e.target.result;
    previewCon.classList.add("scale")
    setTimeout(()=> {
      previewImg.src =picturePath
      label.textContent = "Hochgeladen!";
    },1000)
    setTimeout(()=> {
      previewCon.classList.remove("scale")
      },2000)

   
    };

    reader.readAsDataURL(file);




});

picMagicBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const tbody = document.getElementById("statsBodyPicGen");
  const row = document.createElement("tr");
  tbody.innerHTML = "";

  const pwId = `pasword${updatedPicMagArr.length}`
  const picId = `pic${updatedPicMagArr.length}`

  const tdPic = document.createElement("td");  
  tdPic.id = picId
  tdPic.classList.add("tablePics");
 

  tdPic.innerHTML =  `<img src="${picturePath}" id="${picId}" alt="your Picture" class="imgTable " style="width:2rem">`  ;
  
  const tdPw = document.createElement("td");
  tdPw.id = pwId


  
  row.append(tdPw,tdPic);
  tbody.appendChild(row);
  
  
  try {
    const result = await pictureToString(file);
    
    const spanPwd = document.createElement("spanPwd");
    const pic = document.getElementById(picId);
    spanPwd.innerText = `${result}`;
    spanPwd.classList.add("w-100")
    tdPw.append(copyButton(pwId),spanPwd);
    pic.src = picturePath
    picMagicBtn.disabled = true
    updatedPicMagArr.push(row)
    sessionStorage.setItem("pictureMagicArray", JSON.stringify(updatedPicMagArr));

    console.log(updatedPicMagArr)
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
  leetInputField.value = ""
  const newPasswordArray = tripleConverter(leetInput);
  const versionArray = ["Einfach","Mittel","Stark"]
  console.log(newPasswordArray)
  const td = document.getElementById("leetResult0");
  const spanPwd = document.createElement("spanPw");
  spanPwd.innerText = `${newPasswordArray[0]}`;
  spanPwd.id = "leetPwd"
  spanPwd.classList.add("w-100")
  td.innerHTML=""
  td.append(copyButton("leetResult0"), spanPwd);






const arrowLeft = `<img src="../img/icons/arrow.svg" data-side="left" class="leetArrows" style="transform: rotate(180deg);margin-top:-0.15rem;width:2rem" alt="Arrow Left">`;
const versionText = `<span id="versionText" >${versionArray[0]}</span>`; 
const arrowRight = `<img src="../img/icons/arrow.svg" id="arrowRight" class="leetArrows" data-side="right" style="margin-top:-0.15rem;width:2rem" alt="Arrow Right">`;

  const versionTd = document.getElementById("leetVersion")
  versionTd.innerHTML = arrowLeft + versionText  + arrowRight 

  let count = 0

  document.querySelectorAll(".leetArrows").forEach(arrow => {

      arrow.addEventListener("click", () => {
        const versionText = document.getElementById("versionText")
        const spanPwd = document.getElementById("leetPwd")
 
        if(arrow.dataset.side === "left"){
          count = (count - 1 + versionArray.length) % versionArray.length;
        }else{
          count = (count + 1) % versionArray.length;
        }
        spanPwd.innerText =`${newPasswordArray[count]}`
        versionText.innerText =`${versionArray[count]}`
        
      })
  })
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

  const spanPwd = document.createElement("spanPwd");
  passwordElements[0].querySelector("button")?.remove();
  spanPwd.innerText = `${generatedPassword}`;
 
  passwordElements[0].innerHTML = "";
  passwordElements[0].append(copyButton("generatedPassword0"), spanPwd);
  document.getElementById("generatedPasswordRow0").style.display = "";


});
