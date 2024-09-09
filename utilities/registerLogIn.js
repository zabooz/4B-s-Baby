
const baseUrl = 'https://bruteforce.coolify.machma.app';
// const baseUrl = "http://localhost:3000";


export const register = async (username,password,email) => {
  console.log(234)
  try {
    const response = await fetch(`${baseUrl}/register`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password,email})
    });
  
    const result = await response.json();
  
    if (response.ok) {
      alert('Registrierung erfolgreich!');
    } else {
      alert('Registrierung fehlgeschlagen: ' + result.message);
    }
  } catch (error) {
    console.error('Fehler bei der Registrierung:', error);
    alert('Fehler bei der Registrierung. Bitte versuche es später noch einmal.');
  }

}  

export const login = (username, password) => {
  fetch(`${baseUrl}/login`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(data => {
        throw new Error(data.message || 'Login fehlgeschlagen');
      });
    }
    return response.json(); 
  })
  .then(data => {
    if (data.token) {
      localStorage.setItem('passwordplayground', data.token);
      console.log('Token erfolgreich gespeichert!');
      location.reload();
    } else {
      alert('Login fehlgeschlagen: ' + data.message);
    }
  })
  .catch(error => {
    console.error('Fehler beim Login:', error);
    alert('Fehler beim Login.' + error.message);
  });
};

export function fetchUserData(token,id) {
  fetch(`${baseUrl}/user`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(data => {

    const span = document.createElement("span")
    span.textContent = data.username
    document.getElementById("profileName").appendChild(span)

  })
  .catch(error => {
    console.error('Fehler beim Abrufen der Benutzerdaten:', error);
    localStorage.removeItem('authToken'); // Token löschen, wenn es ungültig ist
  });
}

export const logoutFunc = () => {
  localStorage.removeItem('passwordplayground');
  location.reload();
}




export const deleteUser = async () => {
  try {
    const token = localStorage.getItem('passwordplayground');
    
    const response = await fetch(`${baseUrl}/deleteUser`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();
    console.log(data)
    if (response.ok) {
      alert('Benutzer erfolgreich gelöscht');
      localStorage.removeItem("passwordplayground");
        window.location.reload();
    } else {
      
    }
  } catch (error) {
    console.error('Fehler beim Löschen des Benutzers:', error);
   
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
  export const addDynamicValidation = (email,confirmEmail,password,confirmPassword,registerForm) => {

  
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
      register(username, password, email);
    }
  });
  
};

