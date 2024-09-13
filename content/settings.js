import { settingsScripts } from "../contentScripts/settingsScript.js";

const profilePics = [
  "../img/profilePics/profile.jpeg",
  "../img/profilePics/profile2.jpeg",
  "../img/profilePics/profile3.jpeg",
  "../img/profilePics/profile4.jpeg",
  "../img/profilePics/profile5.jpeg",
  "../img/profilePics/profile6.jpeg",
  "../img/profilePics/profile7.jpeg",
  "../img/profilePics/profile8.jpeg",
  "../img/profilePics/profile9.jpeg",
  "../img/profilePics/profile10.jpeg",
  "../img/profilePics/profile11.jpeg",
  "../img/profilePics/profile12.jpeg",
  "../img/profilePics/profile13.jpeg",
  "../img/profilePics/profile14.jpeg",
  "../img/profilePics/profile15.jpeg",
  "../img/profilePics/profile16.jpeg",
  "../img/profilePics/profile17.jpeg",
  "../img/profilePics/profile18.jpeg",
  "../img/profilePics/profile19.jpeg",
  "../img/profilePics/profile20.jpeg",
  "../img/profilePics/profile21.jpeg",
  "../img/profilePics/profile22.jpeg",
  "../img/profilePics/profile23.jpeg",
  "../img/profilePics/profile24.jpeg",
];

const createSettings = () => {
  let htmlContent = "";
  let rowContent = "";

  profilePics.forEach((pic, index) => {
    rowContent += `<div class="col img "><img src="${pic}" class="border border-3" alt="Profile Picture" style="width: 3rem;" id="avatar"></div>`;

    if ((index + 1) % 5 === 0) {
      htmlContent += `<div class="row g-2 mb-2">${rowContent}</div>`;
      rowContent = "";
    }
  });

  if (rowContent !== "") {
    htmlContent += `<div class="row">${rowContent}</div>`;
  }

  return `    <main class="m-4">
        
      
        <h2 class="pt-5">Settings</h2>  

        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item bg-light  mt-5" role="presentation">
              <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Overview</a>
            </li>
            <li class="nav-item bg-light mt-5 " role="presentation">
              <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profileTab" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
            </li>
        </ul>
        
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade active show " id="home" role="tabpanel" aria-labelledby="home-tab">
            <ul class="list-group overview ">
                <li class="list-group-item ">Benutzername: <span data-key="username"></span></li>
                <li class="list-group-item ">Besuche: <span data-key="visits"></span></li>
                <li class="list-group-item ">Geteste Passwörter: <span data-key="tested_passwords"></span></li>
                <li class="list-group-item ">Generierte Passwörter: <span data-key="generated_passwords"></span></li>
                <li class="list-group-item ">Generierte Benutzernamen: <span data-key="generated_usernames"></span></li>
                
                </ul>
                </div>
                <div class="tab-pane fade " id="profileTab" role="tabpanel" aria-labelledby="profile-tab">
                <ul class="list-group profile">
                <li class="list-group-item">Benutzername:<span  data-key="username"> </span> <a id="changeUsername" href="#"> ändern</a></li>
                <li class="list-group-item ">E-mail: <span data-key="email"></span><a id="changeEmail"  href="#"> ändern</a> </li>
                <li class="list-group-item">Passwort  <a id="changePassword" href="#" > ändern</a></li>
                <li class="list-group-item">Avatar
                <a  data-bs-toggle="offcanvas" href="#profilePicsChoosery" role="button" aria-controls="profilePicsChoosery">
                ändern </a></li>
                <li class="list-group-item"><a id="deleteAccount"  href="#">Account löschen</a></li>
                
            </ul>
          </div>
          <div class="tab-pane fade" id="leaderBoard" role="tabpanel" aria-labelledby="contact-tab">
              <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col" data-key="place">#</th>
                    <th scope="col" data-key="username">Name</th>
                    <th scope="col" data-key="visits">Visits</th>
                    <th scope="col" data-key="tested_passwords">Tested Passwords</th>
                    <th scope="col" data-key="generated_passwords">Generated Passwords</th>
                    <th scope="col" data-key="generated_usernames">Generated Usernames</th>
                  </tr>
                </thead>
                <tbody id="leaderBoardTable">
                </tbody>
              </table>

          </div>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="profilePicsChoosery" aria-labelledby="profilePicsChooseryLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="profilePicsChooseryLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="container">
      ${htmlContent}
  </div>


  <button id="chooseProfilePic" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#profilePicsChoosery" aria-controls="profilePicsChoosery">
    Bestätige
  </button>
  </div>

</div

    </main>`;
};

export const createSettingsHTML = (contentBox, style) => {
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
  settingsScripts();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
