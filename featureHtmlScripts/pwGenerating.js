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
let count = 0;
const updatedPicMagArr = [];
picMagicBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const tbody = document.getElementById("statsBodyPicGen");
  const row = document.createElement("tr");
  tbody.innerHTML = "";

  // let pictureMagicArray =                                          // for later maybe
  //   JSON.parse(sessionStorage.getItem("pictureMagicArray")) || []; 

  
  const pwId = `pasword${updatedPicMagArr.length}`;
  const picId = `pic${updatedPicMagArr.length}`;

  const tdPic = document.createElement("td");
  tdPic.id = picId;
  tdPic.classList.add("tablePics");

  // Assuming picturePath is defined somewhere earlier in your code
  tdPic.innerHTML = `<img src="${picturePath}" id="${picId}" alt="your Picture" class="imgTable " style="width:2rem">`;

  const tdPw = document.createElement("td");
  tdPw.id = pwId;
  tdPw.classList.add("d-flex","p-0","align-items-center","gap-2"); 
  const tdLeft = document.createElement("td");
  const tdRight = document.createElement("td");

  tdLeft.innerHTML = ` <img src="../img/icons/arrow.svg" data-side="left" class="magicArrows" style="transform: rotate(180deg);margin-top:-0.15rem;width:2rem" alt="Arrow Left">`;
  tdRight.innerHTML = `<img src="../img/icons/arrow.svg" id="arrowRight" class="magicArrows" data-side="right" style="margin-top:-0.15rem;width:2rem" alt="Arrow Right">`;

  row.append(tdLeft, tdPw, tdPic, tdRight);
  tbody.appendChild(row);

  let count = updatedPicMagArr.length;
  updatedPicMagArr.push(row); 
  document.querySelectorAll(".magicArrows").forEach((arrow) => {
    arrow.addEventListener("click", () => {
      tbody.innerHTML = "";

      if (arrow.dataset.side === "left") {
        count = (count - 1 + updatedPicMagArr.length) % updatedPicMagArr.length;
      } else {
        count = (count + 1) % updatedPicMagArr.length;
      }

      tbody.append(updatedPicMagArr[count]); 
    });
  });

  try {
    const result = await pictureToString(file);

    const spanPwd = document.createElement("span"); 
    const pic = document.getElementById(picId);
    spanPwd.innerText = `${result}`;
    spanPwd.classList.add("w-100");
    tdPw.append(copyButton(pwId), spanPwd);
    pic.src = picturePath; 
    picMagicBtn.disabled = true;
    
    // sessionStorage.setItem(
    //   "pictureMagicArray",             //later maybe
    //   JSON.stringify(updatedPicMagArr)
    // );

    console.log(updatedPicMagArr);
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

  document.querySelector("#statsBody2 tr").style.display = "";

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


  const tdLeft = document.createElement("td")
  const tdRight = document.createElement("td")

  tdLeft.innerHTML = ` <img src="../img/icons/arrow.svg" data-side="left" class="letArrows" style="transform: rotate(180deg);margin-top:-0.15rem;width:2rem" alt="Arrow Left">`

  tdRight.innerHTML = `<img src="../img/icons/arrow.svg" id="arrowRight" class="leetArrows" data-side="right" style="margin-top:-0.15rem;width:2rem" alt="Arrow Right">`

  const row = document.querySelector("#statsBody2 tr")

  const versionText = `<span id="versionText" >${versionArray[0]}</span>`; 
  const versionTd = document.getElementById("leetVersion")
  versionTd.innerHTML =versionText

  row.prepend(tdLeft)
  row.append(tdRight)


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
