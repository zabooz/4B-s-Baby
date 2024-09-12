import { dataKrakenTakes } from "./dataKraken.js";
import { data } from "../data/data.js";

const baseUrl = data.baseUrl;

export const register = async ({
  username,
  password,
  email,
  visits,
  generated_passwords,
  tested_passwords,
  generated_usernames,
  avatar,
}) => {
  console.log(234);
  try {
    const response = await fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        visits,
        generated_passwords,
        tested_passwords,
        generated_usernames,
        avatar
      }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Registrierung erfolgreich!");
    } else {
      alert("Registrierung fehlgeschlagen: " + result.message);
    }
  } catch (error) {
    console.error("Fehler bei der Registrierung:", error);
    alert(
      "Fehler bei der Registrierung. Bitte versuche es später noch einmal."
    );
  }
};

export const login = (username, password) => {
  fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw new Error(data.message || "Login fehlgeschlagen");
        });
      }

      return response.json();
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("passwordplayground", data.token);
        dataKrakenTakes({ col: "visits" });
        fetchUserData();
      } else {
        alert("Login fehlgeschlagen: " + data.message);
      }
    })
    .catch((error) => {
      console.error("Fehler beim Login:", error);
      alert("Fehler beim Login." + error.message);
    });
};

export function fetchUserData() {


  fetch(`${baseUrl}/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("passwordplayground")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.username) {
        loginFunc(data.username, data.avatar);
      } else {
        logoutFunc();
      }
    })
    .catch((error) => {
      localStorage.removeItem("passwordplayground");
      console.error("Fehler beim Abrufen der Benutzerdaten:", error);
    });
}

export const logoutFunc = () => {
  localStorage.removeItem("passwordplayground");

  const loginItem = document.getElementById("loginItem");
  const profile = document.getElementById("profile");
  loginItem.classList.remove("d-none");
  profile.classList.add("d-none");
};

const loginFunc = (username, avatar) => {
  const loginItem = document.getElementById("loginItem");
  const profile = document.getElementById("profile");
  const profilePictureNav = document.getElementById("profilePictureNav");
  loginItem.classList.add("d-none");
  profile.classList.remove("d-none");
  profilePictureNav.src = avatar;
  const span = document.createElement("span");
  span.textContent = username;
  document.getElementById("profileName").appendChild(span);
};

export const deleteUser = async () => {
  try {
  

    const response = await fetch(`${baseUrl}/deleteUser`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("passwordplayground")}`,
      },
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
      alert("Benutzer erfolgreich gelöscht");
      localStorage.removeItem("passwordplayground");
      window.location.reload();
    } else {
    }
  } catch (error) {
    console.error("Fehler beim Löschen des Benutzers:", error);
  }
};

// ======================   VALdiation   ======================

export const validateRegisterForm = () => {
  const email = document.getElementById("validationDefault02");
  const confirmEmail = document.getElementById("validationDefault03");
  const password = document.getElementById("validationDefault05");
  const confirmPassword = document.getElementById("validationDefault04");

  let isValid = true;

  // Überprüfung, ob E-Mail-Adressen übereinstimmen
  if (email.value !== confirmEmail.value) {
    confirmEmail.setCustomValidity("E-Mail-Adressen stimmen nicht überein.");
    confirmEmail.classList.add("is-invalid");
    isValid = false;
  } else {
    confirmEmail.setCustomValidity("");
    confirmEmail.classList.remove("is-invalid");
    confirmEmail.classList.add("is-valid");
  }

  // Überprüfung, ob Passwörter übereinstimmen
  if (password.value !== confirmPassword.value || password.value === "") {
    confirmPassword.setCustomValidity("Passwörter stimmen nicht überein.");
    confirmPassword.classList.add("is-invalid");
    isValid = false;
  } else {
    confirmPassword.setCustomValidity("");
    confirmPassword.classList.remove("is-invalid");
    confirmPassword.classList.add("is-valid");
  }

  return isValid;
};

// Dynamische Überprüfung der Eingabefelder während des Tippens
export const addDynamicValidation = (
  email,
  confirmEmail,
  password,
  confirmPassword,
  registerForm
) => {
  // Überprüfung der E-Mail Felder während der Eingabe
  email.addEventListener("input", () => validateRegisterForm());
  confirmEmail.addEventListener("input", () => validateRegisterForm());

  // Überprüfung der Passwort Felder während der Eingabe
  password.addEventListener("input", () => validateRegisterForm());
  confirmPassword.addEventListener("input", () => validateRegisterForm());

  // Event-Listener für Formular-Validierung
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Rufe die Validierungsfunktion auf
    if (validateRegisterForm()) {
      const username = document.getElementById("validationDefault01").value;
      const email = document.getElementById("validationDefault02").value;
      const password = document.getElementById("validationDefault05").value;

      // Führe den Registrierungsvorgang durch, wenn die Validierung erfolgreich war
      register({
        username,
        password,
        email,
        visits: 0,
        generated_passwords: 0,
        tested_passwords: 0,
        generated_usernames: 0,
        avatar: "../img/profilePics/defaultProfile.jpeg",
      });
    }
  });




  
};
