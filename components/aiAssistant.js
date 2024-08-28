
import { aiApiCall } from "../utilities/aiApiCall.js";
import {thinker,thinkWords} from "../utilities/thinker.js"
const configAi = {
    sysContent: `Du bist ein Internet Security Bot und stellst dich als Ernesto Sanchez vor. Du gibst kurze knackige und wenn es geht mit einer Brise humor gewürzten antworten. du antwortest immer in der sprache in der mit dir gesprochen wird`,

};

const aiImgSrc = "../img/quickNav/ai.webp";



const aiAssistant = () => {
  return `

<div class="offcanvas offcanvas-start bg-ai-custom  border-custom" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header d-flex justify-content-end">
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <h5 class="offcanvas-title  mt-3 mx-3 fs-3  fw-semibold d-flex justify-content-evenly gap-2 p-2  rounded text-decoration-underline"  id="offcanvasExampleLabel"><img src="${aiImgSrc}" alt="ai"/>  Security Bot </h5>
  <div class="offcanvas-body">
  <div class="langBot d-flex">
  </div>
<div class="form-floating">
  <textarea id="question" class="form-control my-5 " placeholder="Leave a comment here" id="floatingTextarea"></textarea>
</div>
    <button id="submitQ" type="button" class="btn btn-primary"> Senden</button>
    <p id="aiAnswer" class=" mt-4 p-2"><p>
  </div>
</div>
    
    `;
};


export const createAssistant = (target) => {
  
  document.querySelector(target).innerHTML += aiAssistant();
  const submitQ = document.getElementById("submitQ")

  submitQ.addEventListener("click", async() => {
    
      const ele = document.getElementById("aiAnswer")
      const question = document.getElementById("question").value
      const sysContent = configAi.sysContent
      let interval;

    submitQ.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;
    
    submitQ.disabled = true;


      interval = setInterval(()=> {
        thinker(submitQ)
      },2000)


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


}