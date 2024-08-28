import {
  storedClippy,
  copyButton,
} from "../scripts/copybutton.js";


const imgSrc = "../img/quickNav/clippy.jpeg";

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
<div class="offcanvas offcanvas-start bg-ai-custom w-custom  border-custom" tabindex="-1" id="clippy" aria-labelledby="offcanvasExampleLabel">
<div class="offcanvas-header d-flex justify-content-end">
<button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<h5 class="offcanvas-title  mt-3 mx-3 fs-3  fw-semibold d-flex justify-content-evenly gap-2 p-2  rounded text-decoration-underline"  id="offcanvasExampleLabel"><img src="${imgSrc}" alt="ai"/>  Clippy </h5>
    <div class="offcanvas-body d-flex  flex-column align-items-center ">
      <div class="d-flex w-100 justify-content-evenly gap-5 px-2 mb-5">
        <div class="d-flex flex-column align-items-left ">
        <h3 class="text-decoration-underline ">Passwörter</h3>
        ${pw}
        </div>
        <div>
        <h3 class="text-decoration-underline ">Usernames</h3>
        ${user}
        </div>
        </div>
        <button class="btn btn-primary btn-lg w-50 ms-auto mt-5" >Alles löschen</button>
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

  const btn = document.createElement("button")
  const i = document.createElement("i");
  btn.style.border = "none";
  btn.style.backgroundColor = "white"
  btn.id="btn" + id
  i.className = "fa fa-trash";
  btn.append(i)
  
  btn.addEventListener("click", () => {
    
    const element = document.getElementById(id)
    console.log(element.innerText,element.textContent)
    storedClippy.forEach((obj,index) => {
      if ((element.textContent.includes(obj.value)))  storedClippy.splice(index, 1);
    })
 
    sessionStorage.setItem("clippy", JSON.stringify(storedClippy));
 
    element.remove()
  })

  return btn

}