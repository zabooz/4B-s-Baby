export const configNav = {
  targetId: "nav",

  home: {
    link: "../index.html",
  },
  testing: {
    text: "Check Password",
    link: "../featureHtmls/testing.html",
  },
  userGen: {
    text: "Find your Name",
    link: "../featureHtmls/userGenerating.html",
  },
  pwGen: {
    text: "Make Password",
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
};

export const configNavIndex = {
  targetId: "nav",

  home: {
    link: "./index.html",
  },
  testing: {
    text: "Check Password",
    link: "./featureHtmls/testing.html",
  },
  userGen: {
    text: "Find your Name",
    link: "./featureHtmls/userGenerating.html",
  },
  pwGen: {
    text: "Make Password",
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
};

const createNavBar = (configNav) => {
  const navBar = `
    <nav class="navbar navbar-expand-md nav-custom fw-semibold text-black">
      <div>
        <a href="${configNav.home.link}" class="d-flex align-items-center" style="text-decoration: none;">
          <img src="${configNav.logo.link}" alt="logo" class="d-none d-sm-block" />
          <p class="navbar-brand mb-0 ms-3">${configNav.logo.text}</p>
        </a>
      </div>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto d-flex justify-content-end px-5 w-100">
          <li class="nav-item">
            <a class="nav-link" href="${configNav.testing.link}">${configNav.testing.text}</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="${configNav.pwGen.link}">${configNav.pwGen.text}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${configNav.userGen.link}">${configNav.userGen.text}</a>
          </li>
            <li class="nav-item">
            <a class="nav-link text-danger" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" >Clippy</a>
          </li>
            <li class="nav-item">
            <a class="nav-link text-danger" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Ai Assistant</a>
          </li>
            </li>
            <li class="nav-item">
            <a class="nav-link text-success" href="${configNav.oldDesign.link}">${configNav.oldDesign.text}</a>
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
