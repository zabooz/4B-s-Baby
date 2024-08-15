import { generateUser } from "/featureHtmlScripts/newUserGenerator.js";




const userGenBtn = document.getElementById("userGeneratorBtn");

userGenBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const adjective1 = document.getElementById("adjective1").value;
    const adjective2 = document.getElementById("adjective2").value;
    const selectedNoun = document.getElementById("noun").value;
    const userOutput = generateUser(adjective1, adjective2, selectedNoun);

    updateAttempts(userOutput)

  });

function updateAttempts(result) {
    const dataArr = result;
    
    const tBody = document.querySelector("#statsBody")

    const tr =  document.createElement("tr")
    const td = document.createElement("td")

    td.textContent =  tBody.rows.length + 1;

    tr.appendChild(td)

        dataArr.forEach((item) => {
            const td = document.createElement("td")
            td.textContent = item
            tr.appendChild(td)
        }); 

    tBody.append(tr)

    }

