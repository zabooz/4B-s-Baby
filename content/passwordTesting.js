import { loadOffCanvas } from "../components/offCanvas.js";
import {
  createQuickNav,
  configQuickNavFeature,
} from "../components/quickNav.js";
import { passwordTestingScripts } from "../contentScripts/passwordTestingScripts.js";
const createPasswordTesting = () => {
  return `
    
    <main class="d-flex justify-content-center" id="mainTesting">
      <section class="row row-cols-1 row-cols-lg-2 g-5 mx-0 mx-md-5">
        <div class="col">
          <div id="bruteForceApp" class="card p-4 mx-auto">
            <div class="imageContainer">
              <img
                class="card-img-top"
                src="../img/testing/mojo.png"
                alt="mojo"
              />
              <div class="h1Con">
                <h1>Mojo</h1>
              </div>
            </div>
            <div class="card-body">
              <p class="mt-2 mb-4">
                Wählen Sie einen Modus, um Ihr Passwort gegen
                Brute-Force-Angriffe zu testen. Im
                <span
                  class="text-custom fw-bold text-decoration-underline"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasSimpleBrute"
                  role="button"
                  aria-controls="offcanvasSimple"
                  aria-label="BruteForce"
                >
                  einfachen Modus
                </span>
                werden alle möglichen Zeichenkombinationen durchprobiert. Der
                <span
                  class="text-custom fw-bold text-decoration-underline"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasLibraryBrute"
                  role="button"
                  aria-controls="offcanvasLibrary"
                  aria-label="BruteForce-stop"
                >
                  Listen-Modus
                </span>
                prüft bekannte Passwörter.
              </p>

              <div id="bruteInput" class="mx-auto w-100">
                <div class="input-group mb-3 w-100 mx-auto">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Gib ein Passwort ein"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="bruteForceInput"
                  />
                  <span class="input-group-text" id="basic-addon1"
                    >
                    
                    <img id="togglePassword" src="../img/icons/eye.svg" alt="eye">

            
                    
                    
                    </span>
                </div>

                <div class="d-flex justify-content-evenly my-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="bruteMode"
                      id="simple"
                    />
                    <label class="form-check-label" for="simple">
                      Einfach
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="bruteMode"
                      id="library"
                      checked
                    />
                    <label class="form-check-label" for="library">
                      Listen
                    </label>
                  </div>
                </div>

                <div
                  id="bruteBtns"
                  class="d-flex w-100 flex-column gap-4 align-items-center flex-sm-row"
                >
                  <button
                    class="btn btn-primary w-100 startBtn"
                    type="button"
                    id="startBrute"
                  >
                    Los geht's!
                  </button>
                  <button id="stopBrute" class="btn w-100 mx-auto">Stop</button>
                </div>
              </div>
              <table class="w-100 mt-2">
                <thead >
                  <tr>
                    <th>Passwort</th>
                    <th>Versuche</th>
                    <th>Modus</th>
                    <th>Zeit</th>
                  </tr>
                </thead>
                <tbody id="displayBrute">

                </tbody>
              </table>
              <a
                type="button"
                id="bruteResultsBtn"
                class="p-2 pt-3 w-100 text-center invisible"
                data-bs-toggle="modal"
                data-bs-target="#bruteResults"
              >
                Alle Ergebnisse!
              </a>
            </div>
          </div>
        </div>

        <!-- ============= Excalibur ================== -->

        <div class="col">
          <div class="card p-4 mx-auto" id="passwordStrengthCalc">
            <div class="imageContainer">
              <img
                class="card-img-top"
                src="../img/testing/excalibur.png"
                alt="Excalibur"
              />
              <div class="h1Con">
                <h1>Excalibur</h1>
              </div>
            </div>
            <div class="card-body">
              <p class="mt-2 mb-4">
                Excalibur ist ein Tool, dass die Stärke deines Passworts
                überprüft. Es bewertet dabei Faktoren wie Länge, Komplexität und
                Vorhersehbarkeit und gibt dir eine umfassende Bewertung deiner
                Passwortsicherheit.
              </p>
              <div id="passwordCalc " class="w-100 d-flex flex-column">
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Gib ein Passwort ein"
                    aria-label="Username"
                    aria-describedby="basic-addon2"
                    id="excaliburInput"
                  />
                  <span class="input-group-text" id="basic-addon2">
                  <img src="../img/icons/eye-slash.svg" alt="eye-slash" id="togglePassword2">
                  </span>
                </div>
                <div id="strengthBarDiv" class="mt-3">
                  <div
                    class="progress flex-grow-1"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      id="progressBar"
                      class="progress-bar"
                      style="width: 1%; background-color: red"
                    ></div>
                  </div>
                </div>

                <p class="w-100 mb-0 d-flex justify-content-between">
                  <span><b>Schwach</b></span>
                  <span><b>Stark</b></span>
                </p>
                <button
                  id="excaliburBtn"
                  class="btn btn-primary mx-auto w-50 mt-3"
                >
                  Los geht's!
                </button>
              </div>

              <a
                class="p-2 d-flex justify-content-center w-100 invisible"
                id="why"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#passwordTipps"
                aria-controls="offcanvasExample"
              >
              Das is ein langer langer langer langer langer Test texxt
             </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- ================= Footer &  Modals & Clipboard ================= -->

    <footer></footer>

    <div class="clipBoard"></div>
    <div
      class="modal fade"
      id="passwordTipps"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex flex-column w-100">
            <div class="d-flex w-100 justify-content-between">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Tipps & Tricks
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <p id="excaliburPassword" class="fs-5"></p>
          </div>
          <div class="modal-body">
            <div id="tipps" class="container d-flex flex-column flex-lg-row g-2 ">
              <ul class="list-group-flush list-group" id="success"></ul>
              <ul class="list-group-flush list-group" id="suggestions"></ul>
            </div>
            <div id="nerdStats"  class="d-none">

              <div class="accordion" id="nerdStatsAcc">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Base Stats
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#nerdStatsAcc">
                    <div id="baseStats" class="accordion-body">

                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      CrackTime
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#nerdStatsAcc">
                    <div id="crackTime" class="accordion-body">

                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Sequence
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#nerdStatsAcc">
                    <div id="sequence" class="accordion-body">

                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Feedback
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#nerdStatsAcc">
                    <div id="feedback" class="accordion-body">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
            type="button"
            class="btn btn-secondary"
            id="switchNerdStats"
          >Mehr!</button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Verstanden!
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="bruteResults"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="bruteResultsdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header t">
            <h1 class="modal-title fs-5" id="bruteResultsdropLabel">
              Bruteforce Results
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div
              id="tableWrapper"
              class="tableWrapper w-100 w-md-75 "
            >
            
              <table class="table w-100 mt-4" id="stats">
                <thead>
                  <tr>
                    <th scope="col" role="columnheader">Passwort</th>
                    <th scope="col" role="columnheader">Versuche</th>
                    <th scope="col" role="columnheader">Modus</th>
                    <th scope="col" role="columnheader" id="lastTh">Zeit</th>
                  </tr>
                </thead>
                <tbody id="statsBody"></tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="modal"></div>
    <div class="quickNav"></div>
    <div class="canvas"></div>
    `;
};

export const createTestingPasswordHTML = (contentBox, style) => {
  // const content = createPasswordTesting();
  const styleSheet = "./styles/passwordTesting.css";
  style.setAttribute("href", styleSheet);
  sessionStorage.setItem("content", "createTestingPasswordHTML");

  if (sessionStorage.getItem("passwordTesting")) {
    contentBox.innerHTML = sessionStorage.getItem("passwordTesting");
  } else {
    contentBox.innerHTML = createPasswordTesting();
    createQuickNav(".quickNav");
    loadOffCanvas(".canvas", "liste", "../data/text.json");
    loadOffCanvas(".canvas", "simple", "../data/text.json");
    sessionStorage.setItem("passwordTesting", contentBox.innerHTML);
  }
  const scriptUrls = [
    "https://cdn.jsdelivr.net/npm/@zxcvbn-ts/core@2.0.0/dist/zxcvbn-ts.js",
    "https://cdn.jsdelivr.net/npm/@zxcvbn-ts/language-common@2.0.0/dist/zxcvbn-ts.js",
    "https://cdn.jsdelivr.net/npm/@zxcvbn-ts/language-en@2.0.0/dist/zxcvbn-ts.js",
  ];

  scriptUrls.forEach((url) => {
    const script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
  });

  passwordTestingScripts();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
