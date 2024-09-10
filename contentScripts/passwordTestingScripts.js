import { newPwStrength } from "../featureHtmlScripts/newStrengthCalc.js"
import { passwordEncoder } from "../scripts/encoder.js";
import { getColorFromStrength } from "../utilities/getColorFromStrength.js";
import { thinkWords, thinker} from "../utilities/thinker.js";
import { newTester } from "../components/newTester.js";
import { dataKrakenTakes } from "../utilities/dataKraken.js";
import {data} from "../data/data.js"

export const  passwordTestingScripts = (id) => {

    const baseUrl = data.baseUrl

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
            if(token) dataKrakenTakes({ token,col:"testedPasswords"})
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
          
    
          
    
          if(token) dataKrakenTakes({ token,col:"testedPasswords"})
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