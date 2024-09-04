import { newPwStrength } from "./newStrengthCalc.js";
import { passwordEncoder } from "../scripts/encoder.js";
import { getColorFromStrength } from "../utilities/getColorFromStrength.js";
import { thinkWords, thinker} from "../utilities/thinker.js";

document.addEventListener("DOMContentLoaded", () => {


  

  const startBrute = document.getElementById("startBrute");
  const stopBrute = document.getElementById("stopBrute");
  const excaliburBtn = document.getElementById("excaliburBtn");
  const excaliburIcon = document.getElementById("basic-addon2");
  const excaliburInput = document.getElementById("excaliburInput")
  const bruteForceInput = document.getElementById("bruteForceInput");
  const mojoIcon = document.getElementById("basic-addon1");
  const why = document.getElementById("why");



  
  // ============= stuff ===== 
  let bruteThinkerInterval; // to stop the thinker function
  let excaliburThinkerInterval;
  const baseUrl = "https://kgg8gggo0c08oc8wcw0oco00.coolify.machma.app/"; //  base url for api calls

  let isBruteActive = sessionStorage.getItem("isBruteActive") ? JSON.parse(sessionStorage.getItem("isBruteActive")) : false;


  
  
  
  
  
  // ===============================================================

  //               BRUTE FORCE

  // =================================================================




  //  checks if brute force is already  active

  if(isBruteActive){
    const radioCheckSimple = document.getElementById("simple");
    radioCheckSimple.checked = true;

  startBrute.innerHTML = `
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">${thinkWords[0]}</span>
  `;
  startBrute.disabled = true;

  bruteThinkerInterval = setInterval(() => {
  thinker(startBrute);
  }, 2000);
  }
  




  startBrute.addEventListener("click", (e) => {
    e.preventDefault();
    
    
    
    if(isBruteActive === false){
      const statsBody = document.getElementById("statsBody");
      
      

      // to get border bottom when scrollbar appears

      const tableWrapper = document.getElementById("tableWrapper"); // probably not needed anymore
      if(statsBody.childElementCount === 2){
        tableWrapper.classList.add("border-bottom");
      }


      // setting brute status in sessionstore

      isBruteActive = true;
      sessionStorage.setItem("isBruteActive", isBruteActive);

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
    
    
    
    
    callBruteForce();
  }

});



  // ======== Api call end brute force and get the result

  stopBrute.addEventListener("click", () => {
    const url = `${baseUrl}stopBruteForce`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request to stop brute force process failed");
        }
        startBrute.innerHTML = "Start";
        startBrute.disabled = false;
        isBruteActive = false;
        sessionStorage.setItem("isBruteActive", isBruteActive);
        console.log("Brute force process stopped");
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





  // for V2 security bot stuff ============================
  // let excValue;

  // why.addEventListener("click", () => {
  //   const question = document.getElementById("question");
  //   const submitQ = document.getElementById("submitQ");
  //   question.innerHTML =
  //     "wie kann ich dieses passwort verbessern?:  " + excValue;

  //   submitQ.click();
  // });



  //========================================================



  // api call for brute force

  const callBruteForce = () => {
    const bruteType = document.querySelector(
      'input[name="bruteMode"]:checked'
    ).id;
    const pwd = bruteForceInput.value
    const [encodedPwd, key] = passwordEncoder(pwd); // encode the password
    const urlPara = `${baseUrl}bruteforce${bruteType}?pwd=${encodeURIComponent(
      encodedPwd
    )}&key=${key}`;

    bruteForceInput.value = "";

    let result = [pwd.value, "--", "--", "--"];

    fetch(urlPara)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        isBruteActive = false;
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
      });
  };



  // update the table

  function updateAttempts(result) {
    const dataArr = result;
    const tBody = document.querySelector("#statsBody");
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

    dataArr.forEach((item, index) => {
      const td = document.createElement("td");

      if (index === 0) {
        td.textContent = hideArr[0];
        td.id = `td${rowCount}`
        td.classList.add("d-flex","justify-content-between","align-items-center");
        td.append(mojoIcon);
      } else {
        td.textContent = item;
      }
      tr.appendChild(td);
    });

    let rows = Array.from(tBody.getElementsByTagName("tr"));
    tBody.innerHTML = "";
    tBody.append(tr, ...rows);
  }

  excaliburBtn.addEventListener("click", async () => {
    excaliburBtn.innerHTML = `   
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;
    const bar = document.getElementById("progressBar");
    const value = excaliburInput.value;
    excaliburInput.value =""


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



    // ==   passwordStrength function call
    let result;
    try {
      // Asynchrone Operation ausführen
      result = await newPwStrength(value);
    
      // Anzeige der Ergebnisse basierend auf dem Resultat
      why.innerText = result.result === 100 
        ? "Dein Passwort ist sicher! Keine weiteren Anpassungen erforderlich." 
        : "Schau dir diese Tipps an, um dein Passwort zu verbessern.";
    
      showSuggestions(result.points,value);
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        // Ändere das Styling der Statusanzeige nach einer Verzögerung
        setTimeout(() => {
          bar.style.width = `${result.result}%`;
          bar.style.backgroundColor = getColorFromStrength(result.result);
          
          why.style.textDecoration = result.result !== 100 ? "underline" : "none";
          why.style.pointerEvents = result.result === 100 ? "none" : "auto";
        }, 100);
      }
      
      // Bereinige Intervalle und setze den Button zurück
      why.classList.remove("d-none");
      clearInterval(barAni);
      clearInterval(excaliburThinkerInterval);
      console.log(result.result)
      excaliburBtn.disabled = true;
      excaliburBtn.innerHTML = "Nochmal?";
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
    excaliburPwd.innerText = `"${pwd}"`
    sugg.innerHTML = "";
    succ.innerHTML = "";
    for (const key in points) {
      const li = document.createElement("li");
      li.className = "list-group-item";

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

  if(!isBruteActive) startBrute.disabled = bruteForceInput.value.length > 0 ? false : true;
  
})



});
