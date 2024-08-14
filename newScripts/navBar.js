const config = {
  home: {
    link: "/index.html",
  },
  testing: {
    text: "Password Testing",
    link: "/featureHtmls/testing.html",
  },
  userGen: {
    text: "User Generator",
    link: "/featureHtmls/userGenerating.html",
  },
  pwGen: {
    text: "Password Generator",
    link: "/featureHtmls/pwGenerating.html",
  },
  logo: {
    text: "Mayo Monkeys",
    link: "/img/animated_monkey.gif",
  },
};

createNavBar = (config) => {
  const navBar = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <a href="${config.home.link}" class="d-flex align-items-center" style="text-decoration: none;">
          <img src="${config.logo.link}" alt="logo" />
          <p class="navbar-brand mb-0 ms-3">${config.logo.text}</p>
        </a>
      </div>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto d-flex justify-content-end px-5 w-100">
          <li class="nav-item">
            <a class="nav-link" href="${config.testing.link}">${config.testing.text}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${config.userGen.link}">${config.userGen.text}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${config.pwGen.link}">${config.pwGen.text}</a>
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

document.querySelector("#navBar").innerHTML = createNavBar(config);
