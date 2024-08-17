import { generateUser } from "/featureHtmlScripts/newUserGenerator.js";
import { generateQuizResult } from "/featureHtmlScripts/userPsyTest.js";

const userGenBtn = document.getElementById("userGeneratorBtn");

userGenBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const adjective1 = document.getElementById("adjective1").value;
  const adjective2 = document.getElementById("adjective2").value;
  const selectedNoun = document.getElementById("noun").value;
  const userOutput = generateUser(adjective1, adjective2, selectedNoun);

  updateAttempts(userOutput, "#statsBody");
});

function updateAttempts(result, table) {
  const dataArr = result;

  const tBody = document.querySelector(table);

  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.textContent = tBody.rows.length + 1;

  tr.appendChild(td);

  dataArr.forEach((item) => {
    const td = document.createElement("td");
    td.textContent = item;
    tr.appendChild(td);
  });

        for(let i = 0; i<dataArr.length;i++){

            const td = document.createElement("td")
            console.log(dataArr)
            if(i=== dataArr.length -2 ){

                if(dataArr[i] && dataArr[i+1]){
                    td.textContent = dataArr[i] +" / "+ dataArr[i+1]
                }else if(dataArr[i]){
                    td.textContent = dataArr[i]
                }else{
                    td.textContent = dataArr[i+1]
                }
                tr.appendChild(td)
                break;

            }

            td.textContent = dataArr[i]
            tr.appendChild(td)
        }

const userGenSubmitBtn = document.getElementById("submitButton");

userGenSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const quizOutput = generateQuizResult();

  updateAttempts(quizOutput, "#statsBody1");
});
