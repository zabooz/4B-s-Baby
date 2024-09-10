
import { loadOffCanvas } from "../components/offCanvas.js";
import {createQuickNav} from "../components/quickNav.js";
import { passwordGeneratingScripts } from "../contentScripts/passwordGeneratingScripts.js";
const createPwContent = () => {



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
                style="margin-bottom: 3.4rem"
              >
                <p class="mx-auto mb-0 fs-5">
                  Passwortlänge: <span id="sliderValue">6</span>
                </p>
                <input
                  type="range"
                  id="sliderSorcery"
                  min="6"
                  max="24"
                  value="6"
                  steps="1"
                />
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
                disabled="true"
              >
                Los geht's
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="quickNav"></div>
    <div class="canvas"></div>      
`;

}


export const createPasswordGeneratingHTML =(contentBox,style)=>{

  const styleSheet = "./styles/passwordGenerating.css"
  style.setAttribute("href", styleSheet);
  sessionStorage.setItem("content","createPasswordGeneratingHTML")

  if(sessionStorage.getItem("passwordGenerating")){
    contentBox.innerHTML = sessionStorage.getItem("passwordGenerating")
  }else{
    contentBox.innerHTML = createPwContent();
    loadOffCanvas(".canvas", "leetSpeak", "../data/text.json");
    createQuickNav(".quickNav");
    sessionStorage.setItem("passwordGenerating",contentBox.innerHTML)
  } 


  passwordGeneratingScripts()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
} 
