const configFooter = {
  companyName: "Mayo Monkeys",
  companyText:
    "Mayo Monkeys is a creative agency that brings a splash of fun to the world of digital solutions. We specialize in innovative design, development, and marketing strategies that make your brand stand out. Join us on our journey to add a little extra flavor to the digital space.",
  socialMedia: [
    { name: "Facebook", link: "https://www.facebook.com" },
    { name: "Twitter", link: "https://www.twitter.com" },
    { name: "Google", link: "https://www.google.com" },
    { name: "Instagram", link: "https://www.instagram.com" },
    { name: "LinkedIn", link: "https://www.linkedin.com" },
    { name: "GitHub", link: "https://www.github.com" },
  ],
  platforms: [
    { name: "Angular", link: "https://angular.io" },
    { name: "React", link: "https://reactjs.org" },
    { name: "Vue", link: "https://vuejs.org" },
    { name: "Laravel", link: "https://laravel.com" },
  ],
  placeholders: [
    { name: "Surprise 1", link: "https://www.pointerpointer.com/" },
    { name: "Surprise 2", link: "https://www.cat-bounce.com/" },
    { name: "Surprise 3", link: "http://www.staggeringbeauty.com/" },
    { name: "Surprise 4", link: "http://www.rrrgggbbb.com/" },
  ],
  contact: {
    address: "1234 Elm Street, Springfield, USA",
    email: "info@example.com",
    phone: "+1 555-123-4567",
    fax: "+1 555-987-6543",
  },
};

const createFooter = (configFooter) => {
  return `
        <hr class="my-4 hr-custom w-100 mt-5 self-algin-center" />
        <section class="d-flex justify-content-center justify-content-lg-between p-4 mt-5 text-black">
            <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
            <div>
                ${configFooter.socialMedia
                  .map(
                    (social) => `
                    <a href="${social.link}" class="me-4 text-reset">
                        <i class="fab fa-${social.name.toLowerCase()}"></i>
                    </a>
                `
                  )
                  .join("")}
            </div>
        </section>
        <section class="text-black">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>${configFooter.companyName}
                        </h6>
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
                                <a href="${platform.link}" class="text-reset">${platform.name}</a>
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
            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>`;
};

document.querySelector("footer").innerHTML = createFooter(configFooter);
