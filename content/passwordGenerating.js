import { pictureToString } from "../scripts/picturePwd.js";
import { copyButton } from "../scripts/copybutton.js";
import { tripleConverter } from "../featureHtmlScripts/tripleLeetConverter.js";
import { generatePassword } from "../scripts/passwordGenerator.js";
import { dataKraken } from "../utilities/dataKraken.js";
import { generateEzPw } from "../featureHtmlScripts/pwSandbox.js";

const createPWContent = () => {
  return `
            
    <main class="w-100 mt-5" id="mainPwGen">
      <section class="row row-cols-1 row-cols-lg-3 g-5 mx-auto px-md-5">
        <!-- ================= Rune Translator ================= -->

        <div class="col">
          <div class="card p-3 mx-auto">
            <div class="imageContainer">
              <img
                class="card-img-top"
                src="../img/pwGen/runeTranslator.jpeg"
                alt="runeTranslator"
              />
              <div class="h1Con">
                <h1>Rune Translator</h1>
              </div>
            </div>
            <div
              class="card-body d-flex flex-column align-items-center p-0 mt-4"
            >
              <p class="mb-5">
                <span
                  class="text-custom fw-bold text-decoration-underline"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasLeetSpeak"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  Leetspeak</span
                >
                ersetzt die Buchstaben und Zeichen deine Passwortes mit anderen
                Zeichen, so dass du besser vor Angriffen geschützt bist. Probier
                aus, welche Variante - von einfach bis stark verändert - du
                bevorzugst.
              </p>

              <div
                class="d-flex flex-column w-100"
                style="margin-bottom: 2.5rem"
              >
                <input
                  type="text"
                  id="leetInput"
                  class="form-control mt-3"
                  placeholder="Gib ein Passwort ein"
                  required
                  minlength="1"
                  maxlength="12"
                />
                <p class="ps-3 mt-1">* Maximal 12 Zeichen</p>
              </div>

              <table class="stats table mt-auto" id="stats2">
                <thead class="border-bottom">
                  <tr>
                    <th></th>
                    <th scope="col" class="text-center py-2">Passwort</th>
                    <th scope="col" class="text-center">Stärke</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="statsBody2" class="text-center border-top">
                  <tr style="display: none">
                    <td>
                      <img
                        src="../img/icons/arrow.svg"
                        data-side="left"
                        class="leetArrows"
                        style="transform: rotate(180deg); margin-top: -0.15rem"
                        alt="Arrow Left"
                      />
                    </td>
                    <td
                      id="leetResult0"
                      class="d-flex justify-content-between w-100"
                    ></td>
                    <td id="leetVersion"></td>
                    <td>
                      <img
                        src="../img/icons/arrow.svg"
                        id="arrowRight"
                        class="leetArrows"
                        data-side="right"
                        style="margin-top: -0.15rem"
                        alt="Arrow Right"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                id="leetBtn"
                class="btn btn-primary w-100 mb-2"
                disabled="true"
              >
                Los geht's
              </button>
            </div>
          </div>
        </div>

        <!-- ================= Picture Magic ================= -->

        <div class="col">
          <div class="card p-3 mx-auto" id="magic">
            <div class="imageContainer">
              <img
                class="card-img-top"
                src="../img/pwGen/pictureMagic.jpeg"
                alt="runeTranslator"
              />
              <div class="h1Con">
                <h1>Picture Magic</h1>
              </div>
            </div>
            <div
              class="card-body d-flex flex-column align-items-center justify-content-evenly p-0 mt-4"
            >
              <p>
                Lade einfach ein Foto hoch, und unsere App verwandelt es in ein
                sicheres Passwort.
              </p>
              <div
                class="imageContainer d-flex mt-3 justify-content-center"
                id="previewContainer"
              >
                <img
                  id="previewImage"
                  src="../img/pwGen/upload.jpeg"
                  alt="runeTranslator"
                  class="border img-fluid"
                />
                <div class="labelCon">
                  <label id="uploadLabel" for="uploadFile"
                    >Foto hochladen!
                  </label>
                </div>
              </div>

              <div style="display: none">
                <div class="d-flex flex-column w-100">
                  <form action="#" class="w-100">
                    <input
                      type="file"
                      value="value"
                      id="uploadFile"
                      accept=".jpg, .jpeg, .png, .webp, .bmp"
                      name="uploadFile"
                    />
                  </form>
                </div>
              </div>
              <table
                class="table mt-auto"
                style="margin-bottom: 1.15rem"
                id="statsPicGen"
              >
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col" class="text-center">Passwort</th>
                    <th scope="col" class="text-center">Bild</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="statsBodyPicGen" class="text-center"></tbody>
              </table>
              <button
                id="pictureMagicBtn"
                type="button"
                class="btn btn-primary mb-2 w-100"
                disabled="true"
              >
                Los geht's
              </button>
            </div>
          </div>
        </div>

        <!-- ================= Glyph Sourcery ================= -->

        <div class="col">
          <div class="card p-3 mx-auto">
            <div class="imageContainer">
              <img
                class="card-img-top"
                src="../img/pwGen/glyphSorcery.jpeg"
                alt="runeTranslator"
              />
              <div class="h1Con">
                <h1>Glyph Sorcery</h1>
              </div>
            </div>
            <div
              class="card-body d-flex flex-column align-items-center p-0 mt-4"
            >
              <p class="mb-4">
                Je länger dein Passwort ist, desto sicherer ist es. Mit Glyph
                Sourcery kannst du dir schnell und unkompliziert ein Passwort in
                deiner gewünschten Länge erstellen, die den Richtlinien für
                sichere Passwörter entsprechen.
              </p>

              <div
                class="d-flex flex-column gap-3 w-100"
              >
                <p class="mx-auto mb-0 fs-5">
                  Passwortlänge: <span id="sliderValue">9</span>
                </p>
                <input
                  type="range"
                  id="sliderSorcery"
                  min="2"
                  max="16"
                  value="9"
                  steps="1"
                />
              </div>
                              <div class="d-flex justify-content-evenly my-4 w-100">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="languageSelect"
                      id="deutsch"
                      checked
                    />
                    <label class="form-check-label" for="deutsch">
                      Deutsch
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="languageSelect"
                      id="english"
                      
                    />
                    <label class="form-check-label" for="english">
                      Englisch
                    </label>
                  </div>
                </div>
              <table class="table mt-auto" id="statsPwGen">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col" class="text-center">Passwort</th>
                    <th scope="col" class="text-center">Länge</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="statsBodyPwGen" class="text-center">
                   
                </tbody>
              </table>
              <button
                id="rdmPwdBtn"
                class="btn btn-primary w-100 mt-auto mb-2"
              >
                Los geht's
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
            
`;
};

export const createPasswordGeneratingContent = () => {
  sessionStorage.setItem("content", createPWContent());
  document.getElementById("contentBox").innerHTML = createPWContent();

  const uploadFile = document.getElementById("uploadFile");
  const picMagicBtn = document.getElementById("pictureMagicBtn");
  const leetBtn = document.getElementById("leetBtn");
  const rdmPwdBtn = document.getElementById("rdmPwdBtn");
  const glyphRangeSlider = document.getElementById("sliderSorcery");
  const uploadContainer = document.querySelector(".labelCon");
  const leetInputField = document.getElementById("leetInput");

  let picturePath;
  let file;

  const pictureRowsArr = []; // variable  to save row dom elements
  let glyphRowsArr = []; // variable  to save row dom elements
  let runeRowsArr = []; // variable to save row data

  let pictureMagicArray =
    JSON.parse(sessionStorage.getItem("pictureMagicArray")) || []; // variable to save row data
  let runeTranslatorArray =
    JSON.parse(sessionStorage.getItem("runeTranslatorArray")) || []; // variable to save RunePwd
  let storedGlyphArray =
    JSON.parse(sessionStorage.getItem("storedGlyphArray")) || []; // variable to save GlyphPwd
  const token = localStorage.getItem("passwordplayground") || null;

  // ==========================================================

  //               PICTURE MAGIC

  // =========================================================

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

  picMagicBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const pwId = `pasword${pictureRowsArr.length}`;
    const picId = `pic${pictureRowsArr.length}`;

    const data = {
      pwId: pwId,
      catchId: picId,
      catch: picturePath,
      password: null,
      app: "pictureMagic",
    };

    try {
      const result = await pictureToString(file);

      data.password = result;
      pictureMagicArray.push(data);

      storeAndSwitch(
        pictureRowsArr,
        pictureMagicArray,
        "pictureMagicArray",
        "statsBodyPicGen"
      );
      picMagicBtn.disabled = true;
      if (token) dataKraken({ token, col: "generatedPasswords" });
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

    runeTranslatorArray = [];

    if (token) dataKraken({ token, col: "generatedPasswords" });

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

    storeAndSwitch(
      runeRowsArr,
      runeTranslatorArray,
      "runeTranslatorArray",
      "statsBody2"
    );
  });

  // ================================================================

  //                  Glyph Sorcery

  // ================================================================

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
    const pwId = `password${glyphRowsArr.length}`;
    const lengthId = `length${glyphRowsArr.length}`;
    const app = "glyphSorcery";
    const data = {
      pwId: pwId,
      catchId: lengthId,
      catch: length,
      password: password,
      app: app,
    };

    if (token) dataKraken({ token, col: "generatedPasswords" });
    storedGlyphArray.push(data);
    storeAndSwitch(
      glyphRowsArr,
      storedGlyphArray,
      "storedGlyphArray",
      "statsBodyPwGen"
    );
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
  const storeAndSwitch = (DOMElementArr, storageArr, storageName, target) => {
    const tbody = document.getElementById(target);
    tbody.innerHTML = "";

    sessionStorage.setItem(storageName, JSON.stringify(storageArr));

    DOMElementArr = [];
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
    storeAndSwitch(
      glyphRowsArr,
      storedGlyphArray,
      "storedGlyphArray",
      "statsBodyPwGen"
    );
  }
  if (pictureMagicArray.length > 0) {
    storeAndSwitch(
      pictureRowsArr,
      pictureMagicArray,
      "pictureMagicArray",
      "statsBodyPicGen"
    );
  }
  if (runeTranslatorArray.length > 0) {
    storeAndSwitch(
      runeRowsArr,
      runeTranslatorArray,
      "runeTranslatorArray",
      "statsBody2"
    );
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
