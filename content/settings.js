
import { settingsScripts } from "../contentScripts/settingsScript.js";
const createSettings = () => {
    return `    <main>
        
      
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Overview</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profileTab" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#leaderBoard" role="tab" aria-controls="contact" aria-selected="false">Leaderboard</a>
            </li>
        </ul>
        
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade active show " id="home" role="tabpanel" aria-labelledby="home-tab">
            <ul class="list-group overview ">
                <li class="list-group-item ">Benutzername: <span id="username"></span></li>
                <li class="list-group-item">E-mail: <span id="email"></span> </li>
                <li class="list-group-item">Besuche: <span id="visits"></span></li>
                <li class="list-group-item">Geteste Passwörter: <span id="testedPasswords"></span></li>
                <li class="list-group-item">Generierte Passwörter: <span id="generatedPasswords"></span></li>
                <li class="list-group-item">Generierte Benutzernamen: <span id="generatedUsernames"></span></li>

              </ul>
          </div>
          <div class="tab-pane fade " id="profileTab" role="tabpanel" aria-labelledby="profile-tab">
              <ul class="list-group profile">
                  <li class="list-group-item">Benutzernamen ändern: <span id="changeUsername"> Klick</span></li>
                  <li class="list-group-item">Passwort ändern: <span id="changePassword"> Klick</span></li>
                <li class="list-group-item">Avatar ändern <img src="../img/profilePics/profile.jpeg" alt="" style="width: 2rem;" id="avatar"></li>
            </ul>
          </div>
          <div class="tab-pane fade" id="leaderBoard" role="tabpanel" aria-labelledby="contact-tab">
            <ul class="list-group ">
                <li class="list-group-item ">Benutzername: <span id="overviewUsername"></span></li>
                <li class="list-group-item">E-mail: <span id="overviewEmail"></span> </li>
                <li class="list-group-item">Besuche: <span id="overviewVisits"></span></li>
                <li class="list-group-item">Geteste Passwörter: <span id="overviewPasswords"></span></li>
                <li class="list-group-item">Generierte Passwörter: <span id="overviewGeneratedPasswords"></span></li>
                <li class="list-group-item">Generierte Benutzernamen: <span id="overviewGeneratedUsernames"></span></li>
              </ul>
          </div>
        </div>
        

    </main>`
}


export const  createSettingsHTML = (contentBox,style) => {
    
  const styleSheet = "../styles/settings.css";
  style.setAttribute("href", styleSheet);
  sessionStorage.setItem("content", "createSettingsHTML");
   contentBox.innerHTML = createSettings();
  // if(sessionStorage.getItem("settings")){
  //   contentBox.innerHTML = sessionStorage.getItem("settings");
  // }else{
  //   contentBox.innerHTML = createSettings();
  //   sessionStorage.setItem("settings", contentBox.innerHTML);
  // }
  settingsScripts()


window.scrollTo({
  top: 0,
  behavior: 'smooth'
});

}