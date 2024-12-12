import { pictureToString } from "../scripts/picturePwd.js";
import { copyButton } from "../scripts/copybutton.js";
import { tripleConverter } from "../featureHtmlScripts/tripleLeetConverter.js";
import { generateEzPw } from "../featureHtmlScripts/pwSandbox.js";
import { dataKrakenTakes } from "../utilities/dataKraken.js";
import { failPopUp } from "../scripts/failMsg.js";
import { indexedDB } from "../utilities/indexedDB.js";
export const passwordGeneratingScripts = () => {
  const uploadFile = document.getElementById("uploadFile");
  const picMagicBtn = document.getElementById("pictureMagicBtn");
  const leetBtn = document.getElementById("leetBtn");
  const rdmPwdBtn = document.getElementById("rdmPwdBtn");
  const glyphRangeSlider = document.getElementById("sliderSorcery");
  const uploadContainer = document.querySelector(".labelCon");
  const leetInputField = document.getElementById("leetInput");

  // ==========================================================

  //               PICTURE MAGIC

  // =========================================================
  let picturePath;
  let pictureFile;
  let pictureMagicArray = indexedDB("pictureMagic", false, false, true);

  uploadContainer.addEventListener("click", () => {
    uploadFile.click();
  });

  uploadFile.addEventListener("input", () => {
    picMagicBtn.disabled = false;
    const label = document.getElementById("uploadLabel");
    const previewCon = document.getElementById("previewContainer");
    const previewImg = document.getElementById("previewImage");
    const input = document.getElementById("uploadFile");

    // check if file is valid & and handle if user abort upload

    if (input.files[0]) pictureFile = input.files[0];

    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/bmp"];

    if (pictureFile === undefined) {
      return;
    } else if (!validTypes.includes(pictureFile.type)) {
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
    //  upload effect

    reader.readAsDataURL(pictureFile);
  });

  picMagicBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const pwId = `password_${pictureMagicArray.length}`;
    const picId = `pic${pictureMagicArray.length}`;

    failPopUp("uploadFile", "pictureMagicBtn", "Lad zuerst ein Bild hoch!");
    const data = {
      pwId: pwId,
      catchId: picId,
      catch: picturePath,
      password: null,
      app: "pictureMagic",
    };

    try {
      const result = await pictureToString(pictureFile);

      data.password = result;

      const pictureMagicArray = await indexedDB(
        "pictureMagic",
        data,
        false,
        true
      );

      storeAndSwitch(pictureMagicArray, "indexedDb", "statsBodyPicGen");
      dataKrakenTakes({ col: "generated_passwords" });
    } catch (error) {
      console.error(error);
    }
  });
  //  ===============================================================

  //                           RUNE TRANSLATOR

  //  ==============================================================

  let runeTranslatorArray =
    JSON.parse(sessionStorage.getItem("runeTranslatorArray")) || [];

  leetBtn.addEventListener("click", function () {
    const leetInput = leetInputField.value;
    failPopUp("leetInput", "leetBtn", "Gib zuerst ein Passwort ein!");
    const newPasswordArray = tripleConverter(leetInput);

    runeTranslatorArray = [];

    dataKrakenTakes({ col: "generated_passwords" });

    for (let i = 0; i < newPasswordArray.length; i++) {
      const pwId = `runeTranslator${i}`;
      const catchId = `runeCatch${i}`;
      const versionArray = ["Einfach", "Mittel", "Stark"];
      const data = {
        pwId: pwId,
        catchId: catchId,
        catch: versionArray[i],
        password: newPasswordArray[i],
        app: "runeTranslator",
      };

      runeTranslatorArray.push(data);
    }

    sessionStorage.setItem(
      "runeTranslatorArray",
      JSON.stringify(newPasswordArray)
    );

    storeAndSwitch(runeTranslatorArray, "runeTranslatorArray", "statsBody2");
  });

  // ================================================================

  //                  Glyph Sorcery

  // ================================================================

  let storedGlyphArray =
    JSON.parse(sessionStorage.getItem("storedGlyphArray")) || [];

  glyphRangeSlider.addEventListener("input", () => {
    const sliderValue = glyphRangeSlider.value;
    const sliderValueDisplay = document.getElementById("sliderValue");
    sliderValueDisplay.textContent = sliderValue;
  });

  rdmPwdBtn.addEventListener("click", function () {
    const selectedLanguage = document.querySelector(
      'input[name="languageSelect"]:checked'
    );
    const length = Number(glyphRangeSlider.value);
    let password = generateEzPw(length, selectedLanguage.id);

    const pwId = `password${storedGlyphArray.length}`;
    const lengthId = `length${storedGlyphArray.length}`;
    const app = "glyphSorcery";
    const data = {
      pwId: pwId,
      catchId: lengthId,
      catch: length,
      password: password,
      app: app,
    };

    dataKrakenTakes({ col: "generated_passwords" });
    storedGlyphArray.push(data);
    storeAndSwitch(storedGlyphArray, "storedGlyphArray", "statsBodyPwGen");
  });

  /**
   * Clears the table body, stores the data array in session storage
   * and generates a new table body from the data array. If the array
   * has more than one element, adds switch arrows to the table rows.
   *
   * @param {HTMLElement[]} DOMElementArr - The array of DOM elements to be cleared and refilled.
   * @param {Object[]} storageArr - The array of objects to be stored in session storage.
   * @param {string} storageName - The key for session storage.
   * @param {string} target - The id of the table body to be cleared and refilled.
   */
  const storeAndSwitch = (storageArr, storageName, target) => {
    const tbody = document.getElementById(target);
    tbody.innerHTML = "";

    if (storageName !== "indexedDb")
      sessionStorage.setItem(storageName, JSON.stringify(storageArr));

    const DOMElementArr = [];
    // generate rows from data array

    for (let i = 0; i < storageArr.length; i++) {
      const item = storageArr[i];

      const tdPw = document.createElement("td");
      const pwId = `${item.app}${item.pwId}`;

      const tdCatch = document.createElement("td");
      const catchId = `pic${item.catchId}`;

      const tdLeft = document.createElement("td");
      const tdRight = document.createElement("td");

      const spanPwd = document.createElement("span");

      spanPwd.innerText = `${item.password}`;
      tdPw.append(copyButton(pwId), spanPwd);
      spanPwd.classList.add("w-100", "pwdSpan");

      tdLeft.innerHTML = `<img src="../img/icons/arrow.svg" data-side="left" class="${item.app} d-none" style="transform: rotate(180deg); margin-top: -0.15rem; width: 2rem" alt="Arrow Left">`;
      tdRight.innerHTML = `<img src="../img/icons/arrow.svg" id="arrowRight" class="${item.app} d-none" data-side="right" style="margin-top: -0.15rem; width: 2rem" alt="Arrow Right">`;

      tdCatch.id = catchId;
      tdCatch.classList.add("tablePics");

      if (item.app === "pictureMagic") {
        tdCatch.innerHTML = `<img src="${item.catch}" id="${catchId}" alt="Your Picture" class="imgTable" style="width:2rem">`;
      } else {
        tdCatch.innerHTML = `<span>${item.catch}</span>`;
      }
      tdPw.id = pwId;
      tdPw.classList.add("d-flex", "p-0", "align-items-center", "gap-2");
      const tr = document.createElement("tr");
      tr.append(tdLeft, tdPw, tdCatch, tdRight);

      DOMElementArr.push(tr);
    }

    // add switch arrows to rows when more than 1 row
    let count = DOMElementArr.length;

    if (count > 1) {
      DOMElementArr.forEach((element) => {
        const arrows = element.querySelectorAll(`.${storageArr[0].app}`);
        arrows.forEach((arrow) => {
          arrow.classList.remove("d-none");
          arrow.addEventListener("click", () => {
            tbody.innerHTML = "";
            if (arrow.dataset.side === "left") {
              count = (count - 1 + DOMElementArr.length) % DOMElementArr.length;
            } else {
              count = (count + 1) % DOMElementArr.length;
            }
            tbody.append(DOMElementArr[count]);
          });
        });
      });
    }

    tbody.append(DOMElementArr[DOMElementArr.length - 1]);
  };

  if (storedGlyphArray.length > 0) {
    storeAndSwitch(storedGlyphArray, "storedGlyphArray", "statsBodyPwGen");
  }
  if (pictureMagicArray.length > 0) {
    storeAndSwitch(pictureMagicArray, "pictureMagicArray", "statsBodyPicGen");
  }
  if (runeTranslatorArray.length > 0) {
    storeAndSwitch(runeTranslatorArray, "runeTranslatorArray", "statsBody2");
  }
  leetInputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); //
      leetBtn.click();
    }
  });

  leetInputField.addEventListener("input", () => {
    leetBtn.disabled = leetInputField.value.length > 0 ? false : true;
  });
};
