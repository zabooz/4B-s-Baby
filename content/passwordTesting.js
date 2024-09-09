import { newPwStrength } from "../featureHtmlScripts/newStrengthCalc.js"
import { passwordEncoder } from "../scripts/encoder.js";
import { getColorFromStrength } from "../utilities/getColorFromStrength.js";
import { thinkWords, thinker} from "../utilities/thinker.js";
import { newTester } from "../components/newTester.js";
import { dataKraken } from "../utilities/dataKraken.js";



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
                    ><i class="bi bi-eye" id="togglePassword"></i
                  ></span>
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
                    disabled="true"
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
                  <span class="input-group-text" id="basic-addon2"
                    ><i class="bi bi-eye" id="togglePassword2"></i
                  ></span>
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
                  disabled="true"
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
    
    
    `
}



export const createTestingPasswords = () => {


sessionStorage.setItem("content", createPasswordTesting())

document.getElementById('contentBox').innerHTML = createPasswordTesting()



// const baseUrl = "https://bruteforce.coolify.machma.app"
const baseUrl = "http://localhost:3000";

const token = localStorage.getItem("passwordplayground") || null;




  
  

  const startBrute = document.getElementById("startBrute");
  const stopBrute = document.getElementById("stopBrute");
  const excaliburBtn = document.getElementById("excaliburBtn");
  const excaliburIcon = document.getElementById("basic-addon2");
  const excaliburInput = document.getElementById("excaliburInput")
  const bruteForceInput = document.getElementById("bruteForceInput");
  const mojoIcon = document.getElementById("basic-addon1");
  const why = document.getElementById("why");
  const bruteResults = document.getElementById("bruteResultsBtn");
  const switchNerdStats = document.getElementById("switchNerdStats");


  // ============= stuff ===== 
  let bruteThinkerInterval; // to stop the thinker function
  let excaliburThinkerInterval;



  let isBruteActive = sessionStorage.getItem("isBruteActive") || "false"
 

  
  
  
  // ===============================================================

  //               BRUTE FORCE

  // =================================================================



  //  checks if brute force is already  active

  if(isBruteActive === "true"){
    const radioCheckSimple = document.getElementById("simple");
    radioCheckSimple.checked = true;

  startBrute.innerHTML = `
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">${thinkWords[0]}</span>
  `;
  startBrute.disabled = true;
  stopBrute.disabled = false
  stopBrute.style.backgroundColor = "#626568";
  bruteThinkerInterval = setInterval(() => {
  thinker(startBrute);
  }, 2000);
  }
  




  startBrute.addEventListener("click", (e) => {
   
    e.preventDefault();
    stopBrute.style.backgroundColor = "#626568";
    if(isBruteActive === "false"){
      const statsBody = document.getElementById("statsBody");

      const tableWrapper = document.getElementById("tableWrapper"); // probably not needed anymore
      if(statsBody.childElementCount === 2){
        tableWrapper.classList.add("border-bottom");
      }

      
      sessionStorage.setItem("isBruteActive", "true");

    // thinker starts directly after button press
      startBrute.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;
    startBrute.disabled = true;

    bruteThinkerInterval = setInterval(() => {
      thinker(startBrute);
    }, 2000);
    // =============================
    
    isBruteActive =  sessionStorage.getItem("isBruteActive");
 
    
    callBruteForce();
  }

});



  // ======== Api call end brute force and get the result


  

  stopBrute.addEventListener("click", () => {
    const  stopKey = sessionStorage.getItem("stopKey");
    stopBrute.style.backgroundColor = "#ced4da"
    const url = `${baseUrl}/stopBruteForce?key=${stopKey}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request to stop brute force process failed");
        }
        startBrute.innerHTML = "Start";
        startBrute.disabled = false;
        isBruteActive = "false";
        sessionStorage.setItem("isBruteActive", isBruteActive);

        clearInterval(bruteThinkerInterval);
      })
      .catch((error) => {
        console.error("Stop brute force process:", error);
      });
  });




  // Icons switch for password visiblity, for  mojo and e
  // probably refactor it

  mojoIcon.addEventListener("click", () => {
    const input = document.getElementById("bruteForceInput");
    const icon = document.getElementById("togglePassword");
    if (input.type === "password") {
      input.type = "text";
      icon.className = "bi bi-eye-slash";
    } else {
      input.type = "password";
      icon.className = "bi bi-eye";
    }
  });
  excaliburIcon.addEventListener("click", () => {
    const input = document.getElementById("excaliburInput");
    const icon = document.getElementById("togglePassword2");
    if (input.type === "password") {
      input.type = "text";
      icon.className = "bi bi-eye-slash";
    } else {
      input.type = "password";
      icon.className = "bi bi-eye";
    }
  });


  // api call for brute force

  const callBruteForce = () => {
    const bruteType = document.querySelector(
      'input[name="bruteMode"]:checked'
    ).id;

    const password = bruteForceInput.value
    
    


    const [encodedPwd, key] = passwordEncoder(password);

    sessionStorage.setItem("stopKey", encodedPwd);

    const urlPara = `${baseUrl}/bruteforce${bruteType}?pwd=${encodeURIComponent(
      encodedPwd
    )}&key=${key}`;
 
    bruteForceInput.value = "";

    let result = [password.value, "--", "--", "--"];

    fetch(urlPara)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        isBruteActive = "false";
        sessionStorage.setItem("isBruteActive", isBruteActive);
        result = data;

      })
      .catch((error) => {
        console.error("fetch data:", error);
      })
      .finally(() => {
        clearInterval(bruteThinkerInterval);  // stop the thinker
        updateAttempts(result);   // update the table
        startBrute.disabled = true;
        startBrute.innerHTML = "Nochmal?";
        stopBrute.style.backgroundColor = "#ced4da"
        bruteResults.classList.remove("invisible");
        if(token) dataKraken({ token,col:"testedPasswords"})
      });
  };



  // update the table

  function updateAttempts(result) {
    const dataArr = result;
    const tBody = document.querySelector("#statsBody");
    const displayBrute  = document.getElementById("displayBrute");
    const tr = document.createElement("tr");

    const stars = "******";

    const mojoIcon = document.createElement("i");
    mojoIcon.className = "bi bi-eye";

    const rowCount = tBody.rows.length;

    const hideArr = [stars, dataArr[0]];



      // add icon to the table and add functionality to it

    mojoIcon.addEventListener("click", () => {
      const target = document.getElementById(`td${rowCount}`);
      if (target.textContent === stars) {
        target.textContent = dataArr[0];
        mojoIcon.className = "bi bi-eye-slash mb-1";
        target.append(mojoIcon);
      } else {
        target.textContent = stars;
        mojoIcon.className = "bi bi-eye mb-1";
        target.append(mojoIcon);
      }
    });

    const mojoIconDisplay = document.createElement("i");
    mojoIconDisplay.className = "bi bi-eye";

    mojoIconDisplay.addEventListener("click", () => {
      const target = document.getElementById(`displayResult`);
      if (target.textContent === stars) {
        target.textContent = dataArr[0];
        mojoIconDisplay.className = "bi bi-eye-slash mb-1";
        target.append(mojoIconDisplay);
      } else {
        target.textContent = stars;
        mojoIconDisplay.className = "bi bi-eye mb-1";
        target.append(mojoIconDisplay);
      }
    });


    dataArr.forEach((item, index) => {
      const td = document.createElement("td");
      
      if (index === 0) {
        td.textContent = hideArr[0];
        td.id = `td${rowCount}`
        td.append(mojoIcon);
      } else {
        td.textContent = item;
      }
      tr.appendChild(td);
    });

    
    let rows = Array.from(tBody.getElementsByTagName("tr"));
    tBody.innerHTML = "";
    tBody.append(tr, ...rows);

    const displayTr = tBody.firstChild.cloneNode(true)
    displayTr.firstChild.setAttribute("id","displayResult")
    displayTr.firstChild.innerHTML = ""
    displayTr.firstChild.textContent = stars
    displayTr.firstChild.append(mojoIconDisplay)
    console.log(displayTr)
    displayBrute.innerHTML =""
    displayBrute.append(displayTr)

  }

// ====================================================0

//                  EXCALIBUR 


// ===================================================0





  excaliburBtn.addEventListener("click", async () => {
    excaliburBtn.innerHTML = `   
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;
    const bar = document.getElementById("progressBar");
    const password = excaliburInput.value;


    
    excaliburInput.value =""

     newTester (password)

   //  ==   thinker function 
     
    excaliburBtn.disabled = true;
   
    bar.style.backgroundColor = "#ced4da";
    const barAni = setInterval(() => {
    const rdm = Math.floor(Math.random()*75) +1
    bar.style.width = `${rdm}%` 

  },600)


  excaliburThinkerInterval = setInterval(() => {
    thinker(excaliburBtn);
  }, 2000);




    let result;
    try {

      result = await newPwStrength(password);
    

      why.innerText = result.result === 100 
        ? "Dein Passwort ist sicher! Keine weiteren Anpassungen erforderlich." 
        : "Schau dir diese Tipps an, um dein Passwort zu verbessern.";
    
      showSuggestions(result.points,password);
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
  
        setTimeout(() => {
          bar.style.width = `${result.result}%`;
          bar.style.backgroundColor = getColorFromStrength(result.result);
          
          why.style.textDecoration = result.result !== 100 ? "underline" : "none";
          why.style.pointerEvents = result.result === 100 ? "none" : "auto";
        }, 100);
      }
      
      // Bereinige Intervalle und setze den Button zurück
      why.classList.remove("invisible");
      clearInterval(barAni);
      clearInterval(excaliburThinkerInterval);
      excaliburBtn.disabled = true;
      excaliburBtn.innerHTML = "Nochmal?";
      

      

      if(token) dataKraken({ token,col:"testedPasswords"})
    }
})   


/**
 * Shows suggestions for password improvement based on the result of the password strength calculation
 * @param {Object} points - an object with the result of the password strength calculation
 * @property {boolean} value - the result of the check
 * @property {string} textTrue - the text to show when the result is true
 * @property {string} textFalse - the text to show when the result is false
 */

  const showSuggestions = (points,pwd) => {



    const sugg = document.getElementById("suggestions");
    const succ = document.getElementById("success");
    const excaliburPwd = document.getElementById("excaliburPassword")
    excaliburPwd.classList.add("w-50","d-flex","justify-content-between");

    const stars = "******"
    const eyeIcon = document.createElement("i");
    eyeIcon.className = "bi bi-eye";
    eyeIcon.addEventListener("click", () => {
      
      if (excaliburPwd.textContent === stars) {
        excaliburPwd.innerHTML = `<span class="w-75 text-center">"${pwd}"</span>`
        eyeIcon.className = "bi bi-eye-slash";
        excaliburPwd.append(eyeIcon);
      } else {
        excaliburPwd.innerHTML = `<span class="w-75 text-center">${stars}</span>`
        excaliburPwd.append(eyeIcon);
        eyeIcon.className = "bi bi-eye";
      }

    })

    excaliburPwd.innerHTML = `<span class="w-75 text-center">${stars}</span>`
    excaliburPwd.append(eyeIcon)
    sugg.innerHTML = "";
    succ.innerHTML = "";
    for (const key in points) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.style.height ="65px"

      if (points[key].value === true) {
        li.style.color = "green";
        li.textContent = "- " + points[key].textTrue;
        succ.append(li);
      } else {

        li.style.color = "red";
        li.textContent = "- " + points[key].textFalse;
        sugg.append(li);
      }
    }
  };

                        // ======= KeyPress btn-disables ===========

bruteForceInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    startBrute.click();
  }
});

excaliburInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    excaliburBtn.click();
  }
});


excaliburInput.addEventListener("input", () =>{

  excaliburBtn.disabled = excaliburInput.value.length > 0 ? false : true;
  

})

bruteForceInput.addEventListener("input", () =>{
  if(isBruteActive === "false") startBrute.disabled = bruteForceInput.value.length > 0 ? false : true;
  
})


switchNerdStats.addEventListener("click", () => {
  nerdStats.classList.toggle("d-none");
  const tipps = document.getElementById("tipps");
  tipps.classList.toggle("d-none");


 switchNerdStats.textContent = switchNerdStats.textContent === "Mehr!" ? "Weniger!" : "Mehr!";


})

}