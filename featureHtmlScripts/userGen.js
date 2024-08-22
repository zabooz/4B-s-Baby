import { generateUser } from "./newUserGenerator.js";
import { generateQuizResult } from "./userPsyTest.js";
import { copyButton } from "../scripts/copybutton.js";
import { genderbend } from "./genderbender.js";

const userGenBtn = document.getElementById("userGeneratorBtn");
const adjective1 = document.getElementById("adjective1").value;
const adjective2 = document.getElementById("adjective2").value;
const selectedNoun = document.getElementById("noun").value;
const userOutput = generateUser(adjective1, adjective2, selectedNoun);

userGenBtn.addEventListener("click", function (e) {
  e.preventDefault();
  updateAttempts(userOutput, "statsBody");
});

const aiUserGenBtn = document.getElementById("aiUserGenBtn")

aiUserGenBtn.addEventListener("click", function () {
  const result = genderbend(userOutput);
  console.log(result);
})
function updateAttempts(result, table) {
  const dataArr = result;

  const tBody = document.getElementById(table);
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  const rowCount = tBody.rows.length + 1;
  const id = table + "_" + rowCount;
  td.textContent = rowCount;

  tr.appendChild(td);

  for (let i = 0; i < dataArr.length; i++) {
    const td = document.createElement("td");

    if (i === dataArr.length - 2) {
      if (dataArr[i] && dataArr[i + 1]) {
        td.textContent = dataArr[i] + " / " + dataArr[i + 1];
      } else if (dataArr[i]) {
        td.textContent = dataArr[i];
      } else {
        td.textContent = dataArr[i + 1];
      }
      tr.appendChild(td);
      break;
    }

    if (i === 0) td.id = id;

    td.innerText = dataArr[i];
    tr.appendChild(td);
  }
  tBody.append(tr);
  const username = document.getElementById(id);
  username.append(copyButton(id));
  console.log(id);
}

const userGenSubmitBtn = document.getElementById("submitButton");

userGenSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  for (let i = 0; i < 5; i++) {
    const quizOutput = generateQuizResult();
    updateAttempts(quizOutput, "statsBody1");
  }

  // Hide the submit button
  userGenSubmitBtn.style.display = "none";

  // Create a reset button
  const resetBtn = document.createElement("button");
  resetBtn.id = "resetButton";
  resetBtn.classList.add("btn", "btn-primary", "mb-4");
  resetBtn.textContent = "Reset Quiz";
  resetBtn.style.display = "inline-block"; // Ensure it's visible
  userGenSubmitBtn.parentNode.appendChild(resetBtn);

  // Add event listener to the reset button
  resetBtn.addEventListener("click", function () {
    resetQuiz();
  });
});

function resetQuiz() {
  // Uncheck all radio buttons
  const checkboxes = document.querySelectorAll('input[type="radio"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Reset the carousel to the first slide
  const carousel = new bootstrap.Carousel(
    document.getElementById("questionCarousel")
  );
  carousel.to(0); // Move to the first slide (index 0)

  // Hide the "prev" button in the carousel and enable "next" button
  document.getElementById("prevBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "";

  // Show the submit button again
  userGenSubmitBtn.style.display = "inline-block";

  // Remove the reset button
  const resetBtn = document.getElementById("resetButton");
  resetBtn.remove();
  const tableBody = document.getElementById("statsBody1");
  tableBody.innerHTML = "";

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
