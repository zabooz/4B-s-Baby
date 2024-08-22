import { storedUser,storedPw,storedClippy,copyButton } from "../scripts/copybutton.js";

const createClipBoard = () => {

    let pw = "";
    let user ="";
    for(let i = 0; i < storedUser.length; i++) {
        const clip = "user" + i;
        user += `<p id="${clip}" class="d-flex justify-content-between" >${storedUser[i]}</p>`;
     
    }
    for (let i = 0; i < storedPw.length; i++) {
      const clip = "pw" + i;
      pw += `<p id="${clip}" class="d-flex justify-content-between" >${storedPw[i]}</p>`;

    }

    return `

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">ClipBoard</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex justify-content-evenly">
        <div class="d-flex flex-column align-items-left">
        <h3 class="text-decoration-underline ">Passwörter</h3>
        ${pw}
        </div>
        <div>
        <h3 class="text-decoration-underline ">Usernames</h3>
        ${user}
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
}

export const clipBoard =  (id) => {
    const target = document.querySelector(id);
    target.innerHTML =  createClipBoard();
    

      for (let i = 0; i < storedUser.length; i++) {
        const elementId = "user" + i;


        const clip = document.getElementById(elementId);
        if (clip) {
          const copyBtn = copyButton(elementId);
          copyBtn.setAttribute("data-bs-dismiss", "modal");
          clip.append(copyBtn);
        }
      }

      for (let i = 0; i < storedPw.length; i++) {
        const elementId = "pw" + i;

        const clip = document.getElementById(elementId);
        if (clip) {
          const copyBtn = copyButton(elementId);
          copyBtn.setAttribute("data-bs-dismiss", "modal");
          clip.append(copyBtn);
        }
      }

}
