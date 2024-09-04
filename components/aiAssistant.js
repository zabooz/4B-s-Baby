import { aiApiCall } from "../utilities/aiApiCall.js";
import { thinker, thinkWords } from "../utilities/thinker.js";
const configAi = {
  sysContent: `Du bist ein Internet Security Bot und stellst dich als Ernesto Sanchez vor. Du gibst kurze knackige und wenn es geht mit einer Brise humor gewürzten antworten. du antwortest immer in der sprache in der mit dir gesprochen wird`,
};


const imgSrc = "../img/icons/_sanchez.jpeg";

const aiAssistant = () => {
  return `

<div class="offcanvas  sanchez offcanvas-start bg-ai-custom  " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="imgCon">
  <img src="${imgSrc}">
  </div>
  <h5 class="offcanvas-title"  id="offcanvasExampleLabel">Sanchez Bot </h5>
  <div class="offcanvas-body">
  <div class="langBot d-flex">
  </div>
  <textarea id="question" class="form-control my-3" placeholder="Hy, ich benatworte Fragen über Sicherheit im Internet!" ></textarea>
    <button id="submitQ" type="button" class="btn btn-primary"> Senden</button>
    <p id="aiAnswer" class=" mt-4 p-2"><p>
  </div>
</div>
    
    `;
};

export const createAssistant = (target) => {
  document.querySelector(target).innerHTML += aiAssistant();
  const submitQ = document.getElementById("submitQ");
  const question = document.getElementById("question");
  question.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the default action (if any)
      submitQ.click(); // Trigger button click
    }
  });
  submitQ.addEventListener("click", async () => {
    const ele = document.getElementById("aiAnswer");
    const question = document.getElementById("question").value;
    const sysContent = configAi.sysContent;
    let interval;

    submitQ.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;

    submitQ.disabled = true;

    interval = setInterval(() => {
      thinker(submitQ);
    }, 2000);

    try {
      const answer = await aiApiCall(question, sysContent);
      ele.innerHTML = answer;
    } catch (error) {
      console.error("Error fetching AI response:", error);
      ele.innerHTML = "Es gab ein Problem bei der Anfrage.";
    } finally {
      clearInterval(interval);
      submitQ.innerHTML = "Senden";
      submitQ.disabled = false;
    }
  });
};
