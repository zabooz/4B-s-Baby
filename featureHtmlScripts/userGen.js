import { generateUser } from "./newUserGenerator.js";
import { generateQuizResult } from "./userPsyTest.js";
import { copyButton } from "../scripts/copybutton.js";

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
  
  const rowCount = tBody.rows.length + 1;
  const id = +(rowCount.toString() + 1)
  td.textContent = rowCount

  tr.appendChild(td);


        for(let i = 0; i<dataArr.length;i++){

            const td = document.createElement("td")
 
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

            if(i === 0) td.id = id;


            td.innerText = dataArr[i]
            tr.appendChild(td)
            
          }
          tBody.append(tr)
          const username = document.getElementById(id)
          username.append(copyButton(id))   
        }
const userGenSubmitBtn = document.getElementById("submitButton");

userGenSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const quizOutput = generateQuizResult();

  updateAttempts(quizOutput, "#statsBody1");
});


const carousel = document.querySelectorAll("#prevBtn,#nextBtn")

const arrowBtn = () => {
  
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const active = document.querySelector(".active")
  console.log(235)
  if (active.getAttribute("aria-label")==="Slide 2") {
    
    prevBtn.style.display = "block";

  } else if (active.getAttribute("aria-label") === "Slide 6") {
    
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
};

carousel.forEach(btn => btn.addEventListener("click",arrowBtn))