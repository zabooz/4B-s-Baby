

export const configNav = {
  targetId: "nav",

  home: {
    link: "../index.html",
  },
  testing: {
    text: `CHECKE<span>deine Sicherheit</span>`,
    link: "../featureHtmls/testing.html",
  },
  userGen: {
    text: `ERFINDE<span>deinen Online-Namen</span>`,
    link: "../featureHtmls/userGenerating.html",
  },
  pwGen: {
    text: `ERSTELLE<span>dein Passwort</span>`,
    link: "../featureHtmls/pwGenerating.html",
  },
  oldDesign: {
    link: "../oldDesign/index.html",
    text: "Legacy Design",
  },
  logo: {
    text: "Password Playground",
    link: "../img/logo/logo.svg",
  },
  tools: {
    text: `Tools <span>verwenden</span>`,
    clippy: "Clippy",
    aiAssistant: "AI-Assistent",
  },

  learnMore: {
    text: `Erfahre <span>mehr...</span>`,
  },

  aboutUs: {
    link: "../aboutUs/aboutUs.html",
    text: "Über uns",
  },
  project: {
    link: "../aboutUs/project.html",
    text: "Projekt",
  },

};

export const configNavIndex = {
  targetId: "nav",

  home: {
    link: "./index.html",
  },
  testing: {
    text: `CHECKE<span>deine Sicherheit</span>`,
    link: "./featureHtmls/testing.html",
  },
  userGen: {
    text: `ERFINDE<span>deinen Online-Namen</span>`,
    link: "./featureHtmls/userGenerating.html",
  },
  pwGen: {
    text: `ERSTELLE<span>dein Passwort</span>`,
    link: "./featureHtmls/pwGenerating.html",
  },
  oldDesign: {
    link: "./oldDesign/index.html",
    text: "Legacy Design",
  },
  logo: {
    text: "Password Playground",
    link: "./img/logo/logo.svg",
  },
  tools: {
    text: `Tools <span>verwenden</span>`,
    clippy: "Clippy",
    aiAssistant: "AI-Assistent",
  },

  learnMore: {
    text: `Erfahre <span>mehr...</span>`,
  },
  aboutUs: {
    link: "./aboutUs/aboutUs.html",
    text: "Über uns",
  },
  project: {
    link: "./aboutUs/project.html",
    text: "Projekt",
  },
};

const createNavBar = (configNav) => {
  const navBar = `
<nav class="navbar navbar-expand-lg nav-custom p-0 text-black box-shadow">
  <div>
    <a href="${configNav.home.link}" class="d-flex align-items-center" style="text-decoration: none;">
      <img src="${configNav.logo.link}" alt="logo" />
      <p class="navbar-brand mb-0 ms-3"><span class="notranslate">${configNav.logo.text}</span></p>
    </a>
  </div>

  <button class="navbar-toggler ms-auto me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav d-flex justify-content-end align-items-lg-center w-100">
      <li class="nav-item mx-2">
        <a class="nav-link" href="${configNav.pwGen.link}">${configNav.pwGen.text}</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link" href="${configNav.testing.link}">${configNav.testing.text}</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link" href="${configNav.userGen.link}">${configNav.userGen.text}</a>
      </li>
      <li class="nav-item">
        <div class="dropdown position-relative">
          <a class="nav-link mx-2" type="button" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Toggle navigation">
            ${configNav.tools.text}
          </a>
          <ul class="dropdown-menu position-absolute p-2">
            <li class="nav-item">
              <a class="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#clippy" role="button" aria-controls="clippy">Clipboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Ai-Assistant</a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item mx-2">
        <div class="dropdown position-relative">
          <a class="nav-link" type="button" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Toggle navigation">
            ${configNav.learnMore.text}
          </a>
          <ul class="dropdown-menu position-absolute p-2">
            <li class="nav-item">
              <a class="nav-link" href="${configNav.oldDesign.link}">${configNav.oldDesign.text}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${configNav.project.link}">${configNav.project.text}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${configNav.aboutUs.link}">${configNav.aboutUs.text}</a>
            </li>
          </ul>
        </div>
      </li>
      <li id="loginItem" class="nav-item mx-2 ">
      <img  src="../img/icons/login.svg"   type="button" data-bs-toggle="modal" data-bs-target="#login"></img>
      </li>
        <li id="profile" class="nav-item mx-2 ">
        <div class="dropdown position-relative">
          <a  id="profileName" class="nav-link" type="button" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Toggle navigation">Hallo!</a>
          <ul class="dropdown-menu position-absolute p-2">
          <li class="nav-item">
          <a class="nav-link" href="#">Settings</a>
          </li>
          <li class="nav-item">
          <a id="logout" class="nav-link" href="#">Logout</a>
          </li>
          <li class="nav-item">
          <a id="deleteAccount" class="nav-link" href="#">Lösch Dich</a>
          </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>


  `;
  return navBar;
};

export const createNav = (config) => {
  document.querySelector(config.targetId).innerHTML = createNavBar(config);









};

