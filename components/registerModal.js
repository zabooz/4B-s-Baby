import {
  register,
  login,
  logoutFunc,
  deleteUser,
  fetchUserData,
  addDynamicValidation,
} from "../utilities/registerLogIn.js";

const modalLogin = () => {
  return `
<div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <button type="button" class="btn-close ms-auto p-2" data-bs-dismiss="modal" aria-label="Close"></button>
    <div id="logReg" class="d-flex justify-content-evenly border-bottom">
      <div class="modal-header border-0 w-25">
        <h1   class="modal-title fs-5" id="loginH1">Login</h1>
        </div>
        <div   class="modal-header border-0 w-25">
        <h1 class="modal-title fs-5 text-muted " id="registerH1">Register</h1>

        </div>
        
        </div>
<div id="loginBody" class="modal-body ">
  <form id="loginForm"  class="row  g-3 d-flex flex-column align-items-center">

  <div class="col-7">
    <label for="loginUsername" class="form-label">Username</label>
    <div class="input-group">

      <input type="text" class="form-control" id="loginUsername" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
    <div class="col-7">
    <label for="loginPassword" class="form-label">Passwort</label>
    <div class="input-group">
      <input type="password" class="form-control" id="loginPassword" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>

  <div class="col-12 d-flex justify-content-center">
    <button class="btn btn-primary w-50" data-bs-dismiss="modal" type="submit">Login</button>
  </div>
</form>
</div>




<div id="registerBody" class="modal-body d-none">
  <form  id="registerForm" class="row  g-3 d-flex align-items-center">

  <div class="col-6 me-3">
    <label for="validation01" class="form-label">Username</label>
    <div class="input-group">

      <input type="text" class="form-control" id="validationDefault01" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="col-6">
    <label for="validationDefault02" class="form-label">E-Mail</label>
    <div class="input-group">
      <input type="email" class="form-control" id="validationDefault02" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
    <div class="col-6">
    <label for="validationDefault03" class="form-label">Confirm E-Mail</label>
    <div class="input-group">
      <input type="email" class="form-control" id="validationDefault03" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="col-6">
  <label for="validationDefault05" class="form-label">Passwort</label>
  <div class="input-group">
  <input type="password" class="form-control" id="validationDefault05" aria-describedby="inputGroupPrepend2" required>
  </div>
  </div>
  <div class="col-6">
  <label for="validationDefault04" class="form-label"> Confirm Passwort</label>
  <div class="input-group">
    <input type="password" class="form-control" id="validationDefault04" aria-describedby="inputGroupPrepend2" required>
  </div>
</div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12 d-flex justify-content-center">
    <button class="btn btn-primary w-50"  data-bs-dismiss="modal" type="submit">Register</button>
  </div>
</form>
      </div>

    </div>
  </div>
</div>`;
};
export const createLogin = (id) => {
  document.getElementById(id).innerHTML += modalLogin();

  const titles = document.querySelectorAll(".modal-title");

  titles.forEach((title) => {
    title.addEventListener("click", () => {
      if (title.id === "loginH1") {
        title.classList.remove("text-muted");
        document.getElementById("registerH1").classList.add("text-muted");
        document.getElementById("loginBody").classList.remove("d-none");
        document.getElementById("registerBody").classList.add("d-none");
      } else if (title.id === "registerH1") {
        title.classList.remove("text-muted");
        document.getElementById("loginH1").classList.add("text-muted");
        document.getElementById("loginBody").classList.add("d-none");
        document.getElementById("registerBody").classList.remove("d-none");
      }
    });
  });

  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    login(username, password);
  });

  document.addEventListener("DOMContentLoaded", () => {
    fetchUserData();
  });

  const logout = document.getElementById("logout");
  logout.addEventListener("click", logoutFunc);

  const deleteAccount = document.getElementById("deleteAccount");
  deleteAccount.addEventListener("click", (e) => {
    deleteUser();
  });

  // Rufe dynamische Validierung auf, wenn das Modal geladen wird

  const email = document.getElementById("validationDefault02");
  const confirmEmail = document.getElementById("validationDefault03");
  const password = document.getElementById("validationDefault05");
  const confirmPassword = document.getElementById("validationDefault04");
  const registerForm = document.getElementById("registerForm");

  addDynamicValidation(
    email,
    confirmEmail,
    password,
    confirmPassword,
    registerForm
  );
};
