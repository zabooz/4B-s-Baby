import { storedClippy, copyButton } from "../scripts/copybutton.js";

const createClipBoard = () => {
  const imgSrc = "../img/quickNav/copyCat1.jpeg";

  return `
<div class="offcanvas offcanvas-start border-0  " tabindex="-1" id="clippy" aria-labelledby="offcanvasExampleLabel">
<div class="offcanvas-header bg-header p-0">
<button type="button" class="btn-close m-2 ms-auto " data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="bg-header d-flex flex-column  ">
<img loading="lazy" src=${imgSrc}>
<h5 class="offcanvas-title montserrat-font-clippy  p-3 pb-4  d-flex justify-content-evenly"  id="clippy">  CLIPBOARD </h5>
</div>
    <div class="offcanvas-body p-0 border-0 d-flex  flex-column ">
      <div class="clippyNav d-flex ">
       <div id="passwordListBtn" class="nav-item-clippy ">
       Passwörter
       </div>
       <div id="userListBtn" class="nav-item-clippy ">
       Usernamen
       </div>
      </div>
      <ol id="passwordList" class="list-group list-group-flush  d-flex flex-column align-items-center mt-5" data-type="list" data-list="password">
        
      </ol>
      <ol id="userList" class="list-group list-group-flush d-flex flex-column align-items-center mt-5 d-none" data-type="list" data-list="username" >
       
      </ol>
      
        <button class="btn  btn-primary btn-lg border-0 w-50 mx-auto mb-5 mt-auto" id="deleteAll">Alles löschen</button>
  </div>
</div>`;
};

export const clipBoard = (id) => {
  const target = document.querySelector(id);
  target.innerHTML = createClipBoard();
  refreshList();
  addButtons();

  const deleteAllBtn = document.getElementById("deleteAll");

  deleteAllBtn.addEventListener("click", () => {
    deleteAll();
  });

  const passwordListBtn = document.getElementById("passwordListBtn");
  const userListBtn = document.getElementById("userListBtn");
  const userList = document.getElementById("userList");
  const passwordList = document.getElementById("passwordList");

  passwordListBtn.addEventListener("mouseover", () => {
    passwordListBtn.style.backgroundColor = "#ea6854";
    passwordListBtn.style.zIndex = "2";

    userList.classList.add("d-none");
    userList.classList.remove("d-flex");
    passwordList.classList.remove("d-none");
    passwordList.classList.add("d-flex");

    userListBtn.style.backgroundColor = "#ea6854c5";
    userListBtn.style.zIndex = "3";
  });

  userListBtn.addEventListener("mouseover", () => {
    passwordListBtn.style.backgroundColor = "#ea6854c5";
    passwordListBtn.style.zIndex = "2";

    userList.classList.add("d-flex");
    userList.classList.remove("d-none");
    passwordList.classList.add("d-none");
    passwordList.classList.remove("d-flex");

    userListBtn.style.backgroundColor = "#ea6854";
    userListBtn.style.zIndex = "3";
  });
};

const deleteBtn = (id) => {
  const btn = document.createElement("button");

  const i = document.createElement("img");
  i.src = "../img/icons/trash_.png";
  i.style.width = "20px";
  i.style.height = "20px";
  i.style.marginBottom = "5px";

  btn.style.border = "none";
  btn.style.backgroundColor = "transparent";
  btn.id = "btn" + id;

  btn.append(i);

  btn.addEventListener("click", () => {
    const element = document.getElementById(id);

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
  const lists = document.querySelectorAll('[data-type="list"]');

  lists.forEach((list) => {
    if (!list.classList.contains("d-none")) {
      list.innerHTML = "";
      const type = list.getAttribute("data-list");
      for (let i = storedClippy.length - 1; i >= 0; i--) {
        if (type.includes(storedClippy[i].type)) {
          storedClippy.splice(i, 1);
        }
      }
    }
  });

  sessionStorage.setItem("clippy", JSON.stringify(storedClippy));
};

export const refreshList = () => {
  let pw = "";
  let user = "";
  for (let i = 0; i < storedClippy.length; i++) {
    const clip = `${storedClippy[i].type}` + i;
    const value = storedClippy[i].value;
    if (storedClippy[i].type === "password") {
      pw += `<li id="${clip}" class=" w-75 d-flex my-2 justify-content-between" ><span>${value}</span></li>`;
    } else {
      user += `<li id="${clip}" class=" w-75 my-2 d-flex justify-content-between" ><span>${value}</span></li>`;
    }
  }

  document.getElementById("passwordList").innerHTML = pw;
  document.getElementById("userList").innerHTML = user;
};

export const addButtons = () => {
  for (let i = 0; i < storedClippy.length; i++) {
    const elementId = storedClippy[i].type + i;
    const clip = document.getElementById(elementId);
    const copyBtn = copyButton(elementId);
    const delBtn = deleteBtn(elementId);

    const btnBox = document.createElement("div");
    btnBox.classList.add("btnBox");
    btnBox.append(copyBtn, delBtn);
    clip.append(btnBox);
  }
};
