import { aiApiCall } from "/utilities/aiApiCall.js";


const aiAssistant = () => {
  return `
        <button class="btn btn-primary" id="aiAssistant" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Security Ai
</button>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Security Bot</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <p>Frag mich dinge<p>
<div class="form-floating">
  <textarea id="question" class="form-control mb-4" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
</div>
    <button id="submitQ" type="button" class="btn btn-primary"> Senden</button>
    <p id="aiAnswer"><p>
  </div>
</div>
    
    `;
};




document.querySelector("main").innerHTML += aiAssistant();
document.getElementById("submitQ").addEventListener("click", async() => {

    const ele = document.getElementById("aiAnswer")
    const question = document.getElementById("question").value
    const sysContent = "you a internetSecurity Bot"
    const answer =  await aiApiCall(question,sysContent)


    ele.innerHTML = answer

})
