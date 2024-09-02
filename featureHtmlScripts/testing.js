import { newPwStrength } from "./newStrengthCalc.js";
import { passwordEncoder } from "../scripts/encoder.js";
import { getColorFromStrength } from "../utilities/getColorFromStrength.js";
import { thinkWords, thinker } from "../utilities/thinker.js";

document.addEventListener("DOMContentLoaded", () => {


  

  const startBrute = document.getElementById("startBrute");
  const stopBrute = document.getElementById("stopBrute");
  const excaliburBtn = document.getElementById("excaliburBtn");
  const excaliburIcon = document.getElementById("basic-addon2");
  const mojoIcon = document.getElementById("basic-addon1");
  const why = document.getElementById("why");
  const bruteInput = document.getElementById("userPwdInput");
  const strengthInput = document.getElementById("strengthInput");


  
  // ============= stuff ===== 
  let interval; // to stop the thinker function
  const baseUrl = "https://kgg8gggo0c08oc8wcw0oco00.coolify.machma.app/"; //  base url for api calls





  // ==========   brute force
  
  startBrute.addEventListener("click", (e) => {
    e.preventDefault();
    const statsBody = document.getElementById("statsBody");

    
    const tableWrapper = document.getElementById("tableWrapper"); // probably not needed anymore
    if(statsBody.childElementCount === 2){
      tableWrapper.classList.add("border-bottom");

    }


    // thinker starts directly after button press

    startBrute.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;
    startBrute.disabled = true;

    interval = setInterval(() => {
      thinker(startBrute);
    }, 2000);

    // =============================


    //  Api call to start brute force and get the result

    callBruteForce();
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
        console.log("Brute force process stopped");
      })
      .catch((error) => {
        console.error("Stop brute force process:", error);
      });
  });




  // Icons switch for password visiblity, for  mojo and e
  // probably refactor it

  mojoIcon.addEventListener("click", () => {
    const input = document.getElementById("userPwdInput");
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
    const input = document.getElementById("strengthInput");
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
    const pwd = document.getElementById("userPwdInput");
    const [encodedPwd, key] = passwordEncoder(pwd.value); // encode the password
    const urlPara = `${baseUrl}bruteforce${bruteType}?pwd=${encodeURIComponent(
      encodedPwd
    )}&key=${key}`;

    pwd.value = "";

    let result = [pwd.value, "--", "--", "--"];

    fetch(urlPara)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        result = data;
      })
      .catch((error) => {
        console.error("fetch data:", error);
      })
      .finally(() => {
        clearInterval(interval);  // stop the thinker
        updateAttempts(result);   // update the table
        startBrute.disabled = false;
        startBrute.innerHTML = "Start";
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
    const bar = document.getElementById("progressBar");
    const strengthInput = document.getElementById("strengthInput");
    const value = strengthInput.value;
    strengthInput.value =""


   //  ==   thinker function 
     
    excaliburBtn.innerHTML = `   
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;
    excaliburBtn.disabled = true;

    interval = setInterval(() => {
      thinker(excaliburBtn);
    }, 2000);



    // ==   passwordStrength function call

    try {
      const { result, points } = await newPwStrength(value);
      bar.style.width = `${result}%`;
      bar.style.backgroundColor = getColorFromStrength(result);
      why.innerText = result === 100 ? "Dein Passwort ist sicher! Keine weiteren Anpassungen erforderlich." 
                                     : "Schau dir diese Tipps an, um dein Passwort zu verbessern.";

      if (result !== 100) {
        why.style.textDecoration="underline";
      }else{
        why.style.textDecoration="none";
        why.style.pointerEvents = "none"
      }
      
      showSuggestions(points); // show suggestions for password improvement
    } catch (error) {
      console.log(error);
    } finally {
      why.classList.remove("d-none"); 
      clearInterval(interval);
      excaliburBtn.disabled = false;
      excaliburBtn.innerHTML = "Testen!";
    }
  });


/**
 * Shows suggestions for password improvement based on the result of the password strength calculation
 * @param {Object} points - an object with the result of the password strength calculation
 * @property {boolean} value - the result of the check
 * @property {string} textTrue - the text to show when the result is true
 * @property {string} textFalse - the text to show when the result is false
 */

  const showSuggestions = (points) => {
    const sugg = document.getElementById("suggestions");
    const succ = document.getElementById("success");
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

                        // ======= KeyPress ===========

bruteInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    startBrute.click();
  }
});

strengthInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    excaliburBtn.click();
  }
});


});
