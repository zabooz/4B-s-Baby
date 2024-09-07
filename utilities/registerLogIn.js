
const baseUrl = 'https://bruteforce.coolify.machma.app';



export const register = async (username,password) => {
  
  try {
    const response = await fetch(`${baseUrl}/register`, { // Lokale Server-URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
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
  fetch(`${baseUrl}/login`, { // Lokale Server-URL
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
    return response.json(); // Erfolgreiche Antwort in JSON umwandeln
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
    
    document.getElementById(id).innerHTML = `<span>Eingeloggt als</span><span>  ${data.username}</span>`;
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
