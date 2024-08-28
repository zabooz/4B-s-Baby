import { storedClippy, copyButton } from "../scripts/copybutton.js";

const createClipBoard = () => {
  let pw = "";
  let user = "";
  for (let i = 0; i < storedClippy.length; i++) {
    const clip = `${storedClippy[i].type}` + i;
    const value = storedClippy[i].value;

    if (storedClippy[i].type === "password") {
      pw += `<p id="${clip}" class="d-flex justify-content-between" >${value}</p>`;
    } else {
      user += `<p id="${clip}" class="d-flex justify-content-between" >${value}</p>`;
    }
  }

  return `

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Clippy</h1>
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
};

export const clipBoard = (id) => {
  const target = document.querySelector(id);
  target.innerHTML = createClipBoard();

  for (let i = 0; i < storedClippy.length; i++) {
    const elementId = storedClippy[i].type + i;

    const clip = document.getElementById(elementId);
    const copyBtn = copyButton(elementId);
    const delBtn = deleteBtn(elementId);
    copyBtn.setAttribute("data-bs-dismiss", "modal");
    clip.append(copyBtn, delBtn);
  }
};

const deleteBtn = (id) => {
  const btn = document.createElement("button");
  const i = document.createElement("i");
  btn.style.border = "none";
  btn.style.backgroundColor = "white";
  btn.id = "btn" + id;
  i.className = "fa-regular fa-trash-can";
  btn.append(i);

  btn.addEventListener("click", () => {
    const element = document.getElementById(id);
    console.log(element.innerText, element.textContent);
    storedClippy.forEach((obj, index) => {
      if (element.textContent.includes(obj.value))
        storedClippy.splice(index, 1);
    });

    sessionStorage.setItem("clippy", JSON.stringify(storedClippy));

    element.remove();
  });

  return btn;
};
