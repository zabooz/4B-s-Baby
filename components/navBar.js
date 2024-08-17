const configNav = {

  targetId: "nav",

  home: {
    link: "../index.html",
  },
  testing: {
    text: "Password Testing",
    link: "../featureHtmls/testing.html",
  },
  userGen: {
    text: "User Generator",
    link: "../featureHtmls/userGenerating.html",
  },
  pwGen: {
    text: "Password Generator",
    link: "../featureHtmls/pwGenerating.html",
  },
  logo: {
    text: "Password Playground",
    link: "/img/animated_monkey.gif",
  },
};

createNavBar = (configNav) => {
  const navBar = `
    <nav class="navbar navbar-expand-lg nav-custom fw-semibold text-black">
      <div>
        <a href="${configNav.home.link}" class="d-flex align-items-center" style="text-decoration: none;">
          <img src="${configNav.logo.link}" alt="logo" />
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
            <a class="nav-link" href="/oldDesign/index.html">Old Design</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Language
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">English</a></li>
              <li><a class="dropdown-item" href="#">French</a></li>
              <li><a class="dropdown-item" href="#">German</a></li>
              <li><a class="dropdown-item" href="#">Spanish</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  `;
  return navBar;
};

document.querySelector(configNav.targetId).innerHTML = createNavBar(configNav);
