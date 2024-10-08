export const configFooter = {
  companyName: "TGOC",
  companyText:
    "TGOC is a creative agency that brings a splash of fun to the world of digital solutions. We specialize in innovative design, development, and marketing strategies that make your brand stand out. Join us on our journey to add a little extra flavor to the digital space.",
  socialMedia: [
    { name: "facebook", link: "https://www.facebook.com" },
    { name: "twitter", link: "https://www.twitter.com" },
    { name: "google", link: "https://www.google.com" },
    { name: "instagram", link: "https://www.instagram.com" },
    { name: "linkedIn", link: "https://www.linkedin.com" },
    { name: "gitHub", link: "https://www.github.com" },
  ],
  platforms: [
    {
      name: "half baked backend",
      link: "https://github.com/Zappls/TSP-Project",
    },
    { name: "Tic Tac Toe", link: "https://github.com/zabooz/tictactoe" },
    { name: "Weather Widget", link: "https://github.com/zabooz/weatherWidget" },
    { name: "Cv", link: "https://github.com/zabooz/codingschool-myCV" },
  ],
  placeholders: [
    { name: "Surprise 1", link: "https://www.pointerpointer.com/" },
    { name: "Surprise 2", link: "https://www.cat-bounce.com/" },
    { name: "Surprise 3", link: "http://www.staggeringbeauty.com/" },
    { name: "Surprise 4", link: "http://www.rrrgggbbb.com/" },
  ],
  contact: {
    address: "Crossroads 3, The Barrens, Kalimdor",
    email: "hello@passwordplayground.com",
    phone: "+1 555-123-4567",
    fax: "+1 555-987-6543",
  },
};

export const iconsIndex = {
  facebook: "./img/footer/facebook-1-solid.svg",
  twitter: "./img/footer/twitter.svg",
  google: "./img/footer/google.svg",
  instagram: "./img/footer/instagram.svg",
  linkedIn: "./img/footer/linkedin-box.svg",
  gitHub: "./img/footer/github.svg",
};

export const iconsFeatures = {
  facebook: "../img/footer/facebook-1-solid.svg",
  twitter: "../img/footer/twitter.svg",
  google: "../img/footer/google.svg",
  instagram: "../img/footer/instagram.svg",
  linkedIn: "../img/footer/linkedin-box.svg",
  gitHub: "../img/footer/github.svg",
};

const footer = (configFooter, icons) => {
  return `

        <div class="d-flex justify-content-center flex-column">
        <hr class="my-4   w-100 mt-5 self-algin-center" />
        
        <section class="d-flex justify-content-center justify-content-lg-evenly  mt-5 text-black">
            <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
            <div>
                ${configFooter.socialMedia
                  .map(
                    (social) => `
                    <a href="${social.link}" aria-label="${
                      social.name
                    }" class="me-4 text-reset">
                        <img src="${
                          icons[social.name]
                        }" style="width:1.5rem"></img>
                    </a>
                `
                  )
                  .join("")}
            </div>
            <div id="google_translate_element"></div>
        </section>
        <section class="text-black">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h5 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>${
                              configFooter.companyName
                            }
                        </h5>
                        <p>
                            ${configFooter.companyText}
                        </p>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                        ${configFooter.platforms
                          .map(
                            (platform) => `
                            <p>
                                <a href="${platform.link}" aria-label="${platform.name}" class="text-reset">${platform.name}</a>
                            </p>
                        `
                          )
                          .join("")}
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i class="fas fa-home me-3"></i> ${
                          configFooter.contact.address
                        }</p>
                        <p><i class="fas fa-envelope me-3"></i> ${
                          configFooter.contact.email
                        }</p>
                        <p><i class="fas fa-phone me-3"></i> ${
                          configFooter.contact.phone
                        }</p>
                        <p><i class="fas fa-print me-3"></i> ${
                          configFooter.contact.fax
                        }</p>
                    </div>

                </div>
            </div>
        </section>
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="https://mdbootstrap.com/"  aria-label="MDBootstrap.com" >MDBootstrap.com</a>
            <a class="text-reset fw-bold mx-5" href="../legalStuff/impressum.html" aria-label="Impressum" >Impressum</a>
            <a class="text-reset fw-bold mx-5" href="../legalStuff/datenschutz.html" aria-label="Impressum" >Datenschutz</a>
        </div>
        
        </div>

        `;
};

export const createFooter = (configFooter, icons) => {
  document.querySelector("footer").innerHTML = footer(configFooter, icons);
};
