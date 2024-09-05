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

// ==========================================================

//               PICTURE MAGIC

// =========================================================

// shared variables between upload and converter functions

let picturePath;
let file;
const pictureRowsArr = []; // variable  to save row dom elements
let pictureMagicArray =
  JSON.parse(sessionStorage.getItem("pictureMagicArray")) || []; // variable to save row data
let runeTranslatorArray =
  JSON.parse(sessionStorage.getItem("runeTranslatorArray")) || []; // variable to save RunePwd

//  click anywhere in the preview container to upload

previewCon.addEventListener("click", () => {
  uploadFile.click();
});

//

uploadFile.addEventListener("input", () => {
  picMagicBtn.disabled = false;
  const label = document.getElementById("uploadLabel");
  const previewCon = document.getElementById("previewContainer");
  const previewImg = document.getElementById("previewImage");
  const input = document.getElementById("uploadFile");

  // check if file is valid & and handle if user abort upload

  if (input.files[0]) file = input.files[0];

  const validTypes = ["image/jpeg", "image/png", "image/webp", "image/bmp"];

  if (file === undefined) {
    return;
  } else if (!validTypes.includes(file.type)) {
    alert("Only image files are allowed.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    picturePath = e.target.result;

    //  upload effect
    previewCon.classList.add("scale");
    setTimeout(() => {
      previewImg.src = picturePath;
      label.textContent = "Hochgeladen!";
    }, 1000);
    setTimeout(() => {
      previewCon.classList.remove("scale");
    }, 2000);
  };

  reader.readAsDataURL(file);
});

/**
 * pictureSelector
 *
 * This function takes an array of objects with the properties {picId, pwId, password, picturePath},
 * and creates a table row for each object in the array. The row contains a copy button with the
 * password, and an image with the given picturePath. The function also adds event listeners to
 * the arrows in the table row, so that when the user clicks on the left or right arrow, the
 * table row is replaced with the previous or next row in the array, respectively.
 *
 * @param {Array} pictureMagicArray - the array of objects to be rendered as table rows
 */
const pictureSelector = (pictureMagicArray) => {
  const tbody = document.getElementById("statsBodyPicGen");
  tbody.innerHTML = "";

  sessionStorage.setItem(
    "pictureMagicArray",
    JSON.stringify(pictureMagicArray)
  );

  // generate rows from data array

  for (let i = 0; i < pictureMagicArray.length; i++) {
    const item = pictureMagicArray[i];

    const picId = `pic${item.picId}`;
    const pwId = `pasword${item.pwId}`;
    const tdPw = document.createElement("td");
    const tdPic = document.createElement("td");
    const tdLeft = document.createElement("td");
    const tdRight = document.createElement("td");
    const spanPwd = document.createElement("span");

    spanPwd.innerText = `${item.password}`;
    spanPwd.classList.add("w-100", "pwdSpan");
    tdPw.append(copyButton(pwId), spanPwd);
    tdLeft.innerHTML = `<img src="../img/icons/arrow.svg" data-side="left" class="magicArrows d-none" style="transform: rotate(180deg); margin-top: -0.15rem; width: 2rem" alt="Arrow Left">`;
    tdRight.innerHTML = `<img src="../img/icons/arrow.svg" id="arrowRight" class="magicArrows d-none" data-side="right" style="margin-top: -0.15rem; width: 2rem" alt="Arrow Right">`;
    tdPic.id = picId;
    tdPic.classList.add("tablePics");
    tdPic.innerHTML = `<img src="${item.picturePath}" id="${picId}" alt="Your Picture" class="imgTable" style="width:2rem">`;
    tdPw.id = pwId;
    tdPw.classList.add("d-flex", "p-0", "align-items-center", "gap-2");

    const tr = document.createElement("tr");
    tr.append(tdLeft, tdPw, tdPic, tdRight);

    pictureRowsArr.push(tr);
  }

  // add switch arrows to rows when more than 1 row
  let count = pictureRowsArr.length;

  if (count > 1) {
    pictureRowsArr.forEach((element) => {
      const arrows = element.querySelectorAll(".magicArrows");
      arrows.forEach((arrow) => {
        arrow.classList.remove("d-none");
        arrow.addEventListener("click", () => {
          tbody.innerHTML = "";
          if (arrow.dataset.side === "left") {
            count = (count - 1 + pictureRowsArr.length) % pictureRowsArr.length;
          } else {
            count = (count + 1) % pictureRowsArr.length;
          }
          tbody.append(pictureRowsArr[count]);
        });
      });
    });
  }

  tbody.append(pictureRowsArr[pictureRowsArr.length - 1]);
};

//  check if data is in session storage and render it

if (pictureMagicArray.length > 0) {
  pictureSelector(pictureMagicArray);
}

picMagicBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const pwId = `pasword${pictureRowsArr.length}`;
  const picId = `pic${pictureRowsArr.length}`;

  const data = {
    pwId: pwId,
    picId: picId,
    picturePath: picturePath,
    password: null,
  };

  try {
    const result = await pictureToString(file);

    data.password = result;
    pictureMagicArray.push(data);

    pictureSelector(pictureMagicArray);
    picMagicBtn.disabled = true;
  } catch (error) {
    console.error(error);
  }
});

//  ===============================================================

//                           RUNE TRANSLATOR

//  ==============================================================


leetBtn.addEventListener("click", function () {

  const leetInput = leetInputField.value;
  const newPasswordArray = tripleConverter(leetInput);
 
  sessionStorage.setItem(
    "runeTranslatorArray",
    JSON.stringify(newPasswordArray)
  );
  runeSelector();

});

leetInputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); //
    leetBtn.click();
  }
});

//  toggle btn disable state

leetInputField.addEventListener("input", () => {
  leetBtn.disabled = leetInputField.value.length > 0 ? false : true;
});
/**
 * Gets the current runeTranslatorArray from session storage and
 * displays the first element of the array in the page.
 * Also sets up a click event listener on the leetArrow elements
 * to cycle through the array and update the displayed value.
 */
const runeSelector = () => {
  runeTranslatorArray = JSON.parse(
    sessionStorage.getItem("runeTranslatorArray")
  );

  document.querySelector("#statsBody2 tr").style.display = "";

  const td = document.getElementById("leetResult0");
  td.innerHTML = "";
  const versionArray = ["Einfach", "Mittel", "Stark"];

  const spanPwd = document.createElement("span");
  spanPwd.innerText = `${runeTranslatorArray[0]}`;
  spanPwd.id = "leetPwd";
  spanPwd.classList.add("w-100");

  td.append(copyButton("leetResult0"), spanPwd);

  let count = 0;

  const versionText = `<span id="versionText" >${versionArray[0]}</span>`;
  const versionTd = document.getElementById("leetVersion");
  versionTd.innerHTML = versionText;

  
  document.querySelectorAll(".leetArrows").forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const versionText = document.getElementById("versionText");
      const spanPwd = document.getElementById("leetPwd");
      spanPwd.classList.add("pwdSpan");
      if (arrow.dataset.side === "left") {
        count = (count - 1 + versionArray.length) % versionArray.length;
      } else {
        count = (count + 1) % versionArray.length;
      }
      spanPwd.innerText = `${runeTranslatorArray[count]}`;
      versionText.innerText = `${versionArray[count]}`;
    });
  });

  const body = document.getElementById("statsBody2");
  body.style.display = "";
};

if (runeTranslatorArray.length > 0) {
  runeSelector();
}

// ================================================================

//                  Glyph Sorcery

// ================================================================

glyphRangeSlider.addEventListener("input", () => {
  const sliderValue = glyphRangeSlider.value;
  const sliderValueDisplay = document.getElementById("sliderValue");
  sliderValueDisplay.textContent = sliderValue;
  rdmPwdBtn.disabled = sliderValue > 5 ? false : true;
});

rdmPwdBtn.addEventListener("click", function () {
  // Create an array of password elements
  const passwordElements = document.querySelectorAll(".rdmPassword");

  // Generate a new password and update the first element
  const pwLength = glyphRangeSlider.value;
  document.getElementById("generatedPasswordLength0").innerText = pwLength;
  const generatedPassword = generatePassword(pwLength);

  const spanPwd = document.createElement("span");
  spanPwd.classList.add("pwdSpan");
  passwordElements[0].querySelector("button")?.remove();
  spanPwd.innerText = `${generatedPassword}`;

  passwordElements[0].innerHTML = "";
  passwordElements[0].append(copyButton("generatedPassword0"), spanPwd);
  document.getElementById("generatedPasswordRow0").style.display = "";
});
