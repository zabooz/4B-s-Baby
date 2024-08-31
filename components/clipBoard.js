import { storedClippy, copyButton } from "../scripts/copybutton.js";

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
<div class="offcanvas offcanvas-start border-0  " tabindex="-1" id="clippy" aria-labelledby="offcanvasExampleLabel">
<div class="offcanvas-header p-0 justify-content-end">
</div>
<div class="bg-header d-flex flex-column  ">
<button type="button" class="btn-close m-2 ms-auto " data-bs-dismiss="offcanvas" aria-label="Close"></button>
<hp class="offcanvas-title montserrat-font p-3  d-flex justify-content-evenly"  id="offcanvasExampleLabel">  CLIPBOARD </h5>
</div>
    <div class="offcanvas-body d-flex  flex-column align-items-center ">
        
        <button class="btn btn-primary btn-lg w-50 ms-auto my-auto" id="deleteAll">Alles löschen</button>
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

  const deleteAllBtn = document.getElementById("deleteAll");

  deleteAllBtn.addEventListener("click", () => {
    deleteAll();
  });
};

const deleteBtn = (id) => {
  const btn = document.createElement("button");
  const i = document.createElement("i");
  btn.style.border = "none";
  btn.style.backgroundColor = "transparent";
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

const deleteAll = () => {
  storedClippy.splice(0, storedClippy.length);
  sessionStorage.setItem("clippy", JSON.stringify(storedClippy));
  const target = document.querySelectorAll(".list");
  target.forEach((element) => {
    element.innerHTML = "";
  });
};
