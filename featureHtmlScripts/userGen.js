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
        };

const userGenSubmitBtn = document.getElementById("submitButton");

userGenSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < 5; i++){
    const quizOutput = generateQuizResult();

      updateAttempts(quizOutput, "#statsBody1")

   replaceLastSlide();
  };
});


export function replaceLastSlide() {
  // Find the last carousel item
  const lastSlide = document.querySelector(
    ".carousel-inner .carousel-item:last-child"
  );

  // Replace the content of the last slide with the new content
  lastSlide.outerHTML = newSlideContent;

  // Optionally, you can move to the last slide after replacing it
  const carousel = document.querySelector("#questionCarousel");
  const bootstrapCarousel = new bootstrap.Carousel(carousel);
  bootstrapCarousel.to(5); // Moves to the last slide


  const restBtn = document.getElementById("restartButton")


  restBtn.addEventListener("click",() => {

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

    prevBtn.style.display = "none";
    nextBtn.style.display = "block";

    bootstrapCarousel.to(0)

  })

};

const newSlideContent = `
<div class="carousel-item active">
  <img src="../img/psyTest/thankyou.jpg" class="d-block w-100" alt="Thank You">
  <div class="carousel-caption d-flex flex-column gap-4 align-items-center">
    <h5>Vielen Dank für Ihre Teilnahme!</h5>
    <p>Ihre Antworten wurden erfolgreich gesendet.</p>
    <button class="btn btn-primary mb-4" id="restartButton">Restart</button>
  </div>
</div>`;

const carousel = document.querySelectorAll("#prevBtn,#nextBtn")

const arrowBtn = () => {
  
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const active = document.querySelector(".active")
  if (active.getAttribute("aria-label")==="Slide 2") {
    prevBtn.style.display = "block"
  } else if (active.getAttribute("aria-label") === "Slide 6") {
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
};

carousel.forEach(btn => btn.addEventListener("click",arrowBtn))

