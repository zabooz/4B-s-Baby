import { generateUser } from "./newUserGenerator.js";
import { generateQuizResult } from "./userPsyTest.js";
import { copyButton } from "../scripts/copybutton.js";
import { genderbend } from "./genderbender.js";
import { myArraysObj } from "../data/deutschGenerator.data.js";
import { convertToGerman } from "./tableParser.js";
import { thinker, thinkWords } from "../utilities/thinker.js";
const userGenBtn = document.getElementById("userGeneratorBtn");
const aiUserGenBtn = document.getElementById("aiUserGenBtn");
const userAiToggle = document.getElementById("germanAiToggle");

window.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("germanAiToggle");
  toggle.dispatchEvent(new Event("change")); // Trigger the change event to set initial state
});
let interval;

userGenBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const adjective1 = document.getElementById("adjective1").value;
  const adjective2 = document.getElementById("adjective2").value;
  const selectedNoun = document.getElementById("noun").value;
  const userOutput = generateUser(adjective1, adjective2, selectedNoun);
  const germanUserOutput = [...userOutput]; // Create a copy of the array to avoid mutation
  const newUserOutput = convertToGerman(germanUserOutput, myArraysObj);
  updateAttempts(newUserOutput, "statsBody");
});

aiUserGenBtn.addEventListener("click", async function () {
  const adjective1 = document.getElementById("adjective1").value;
  const adjective2 = document.getElementById("adjective2").value;
  const selectedNoun = document.getElementById("noun").value;
  const userOutput = generateUser(adjective1, adjective2, selectedNoun);

  aiUserGenBtn.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;

  aiUserGenBtn.disabled = true;

  let interval;
  interval = setInterval(() => {
    thinker(aiUserGenBtn);
  }, 2000);

  try {
    const gender = await genderbend(userOutput);
    const germanUserOutput = [...userOutput]; // Create a copy of the array to avoid mutation

    const newUserOutput = convertToGerman(germanUserOutput, myArraysObj);
    for (let i = 0; i < 3; i++) {
      newUserOutput[0] = gender[i];
      updateAttempts(newUserOutput, "statsBody");
    }
  } catch (error) {
    console.error("Error fetching AI response:", error);
  } finally {
    clearInterval(interval);
    aiUserGenBtn.innerHTML = "Senden";
    aiUserGenBtn.disabled = false;
  }
});

userAiToggle.addEventListener("change", function () {
  if (this.checked) {
    // Toggle is active
    userGenBtn.classList.add("d-none");
    userGenBtn.disabled = true; // Disable button

    aiUserGenBtn.classList.remove("d-none");
    aiUserGenBtn.disabled = false; // Enable button
  } else {
    // Toggle is inactive
    userGenBtn.classList.remove("d-none");
    userGenBtn.disabled = false; // Enable button

    aiUserGenBtn.classList.add("d-none");
    aiUserGenBtn.disabled = true; // Disable button
  }
});

function updateAttempts(result, table) {
 
  const dataArr = result.filter((x) => x !== "");
  console.log(dataArr);
  const tBody = document.getElementById(table);
  const tr = document.createElement("tr");

  const rowCount = tBody.rows.length + 1;
  const id = "username" + "_" + rowCount + "_" + table;
  
  for (let i = 0; i < 2; i++) {
    const td = document.createElement("td");
    
    if(i === 0){
      td.textContent = dataArr[i];
    }else{

      for(let j = 1; j < dataArr.length; j++){
        td.textContent  += dataArr[j] + "/"
      }
    }
  
    if(td.textContent.endsWith("/")) td.textContent = td.textContent.slice(0, -1);

    td.id = id;
    tr.appendChild(td);
  }
  let rows = Array.from(tBody.getElementsByTagName("tr"));
  tBody.innerHTML = "";
  tBody.append(tr, ...rows);
  
  const username = document.getElementById(id);
  username.append(copyButton(id));
}

const quizBtn = document.getElementById("submitButton");

quizBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let testResult;

  for (let i = 0; i < 5; i++) {
    const quizOutput = generateQuizResult();
    const newQuizOutput = convertToGerman(quizOutput, myArraysObj);
    console.log(newQuizOutput)
    testResult = newQuizOutput[0];
    // updateAttempts(newQuizOutput, "statsBody1");
  }
  const captionH = document.getElementById("captionH");
  const captionP = document.getElementById("captionP");

  captionH.innerText = "Dein neuer Username"
  captionP.innerText = testResult;
  // Hide the submit button
  quizBtn.style.display = "none";

  // Create a reset button
  const resetBtn = document.createElement("button");
  resetBtn.id = "resetButton";
  resetBtn.classList.add("btn", "btn-primary", "mb-4");
  resetBtn.textContent = "Reset Quiz";
  resetBtn.style.display = "inline-block"; // Ensure it's visible
  quizBtn.parentNode.appendChild(resetBtn);

  // Add event listener to the reset button
  resetBtn.addEventListener("click", function () {
    resetQuiz(captionH,captionP);
  });
});

function resetQuiz(captionH,captionP) {
  // Uncheck all radio buttons
  const checkboxes = document.querySelectorAll('input[type="radio"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  captionH.innerText = "Vielen Dank für deine Teilnahme!";
  captionP.innerText =
    "Bitte klick auf den Button, um deine Antworten zu senden.";
  // Reset the carousel to the first slide
  const carousel = new bootstrap.Carousel(
    document.getElementById("questionCarousel")
  );
  carousel.to(0); // Move to the first slide (index 0)

  // Hide the "prev" button in the carousel and enable "next" button
  document.getElementById("prevBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "";

  // Show the submit button again
  quizBtn.style.display = "inline-block";

  // Remove the reset button
  const resetBtn = document.getElementById("resetButton");
  resetBtn.remove();


  console.log("Quiz has been reset.");
}

const carousel = document.querySelectorAll("#prevBtn,#nextBtn");

const arrowBtn = () => {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const active = document.querySelector(".active");
  if (active.getAttribute("aria-label") === "Slide 2") {
    prevBtn.style.display = "block";
  } else if (active.getAttribute("aria-label") === "Slide 6") {
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
};

carousel.forEach((btn) => btn.addEventListener("click", arrowBtn));

