const config = {
  testing: {
    text: "Password Testing",
    link: "#",
  },
  userGen: {
    text: "User Generator",
    link: "#",
  },
  pwGen: {
    text: "Password Generator",
    link: "#",
  },
  logo: {
    text: "Mayo Monkeys",
    link: "./img/animated_monkey.gif",
  },
};

createNavBar = (config) => {
  const navBar = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="d-flex align-items-center">
    <img src=${config.logo.link} />
    <p class="navbar-brand mb-0 ms-3" href="#">${config.logo.text}</p>
    </div>
  <button class="navbar-toggler ms-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent" >
    <ul class="navbar-nav ms-auto d-flex justify-content-end px-5 w-100 ">
      <li class="nav-item">
        <a class="nav-link" href=${config.testing.link}>${config.testing.text}</a>
      </li>
            <li class="nav-item">
        <a class="nav-link" href=${config.userGen.link}>${config.userGen.text}</a>
      </li>      <li class="nav-item">
        <a class="nav-link" href=${config.pwGen.link}>${config.pwGen.text}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./oldDesign/index.html">Old Design</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Language
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">English</a>
          <a class="dropdown-item" href="#">German</a>
          <a class="dropdown-item" href="#">Spain</a>
          <a class="dropdown-item" href="#">France</a>
        </div>
      </li>
    </ul>
  </div>

</nav>
    `;

  return navBar;
};

document.querySelector("header").innerHTML = createNavBar(config);
