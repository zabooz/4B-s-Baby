import { fetchText } from "../utilities/fetchText.js";
import { observer } from "../utilities/bounce.js";

const createHero = (content) => {
  return `
  <div id="jumbotron" class="d-flex w-100 flex-column gap-4 align-items-center  ">
      
      <div class="container-fluid d-flex justify-content-center flex-column pt-2">
          <div id="logoContainer" class=" justify-content-center mt-5  ">
              <div class="d-flex justify-content-center">
                <div class="mt-auto mb-5">
                  <div class="montserrat-font "><span id="logoFirstLetter">P</span>assword</div>
                  <div class="montserrat-font">Playground</div>
                </div>
                <div class="w-25 ">
                <img id="padlockPic" src="./img/landingPage/padlock.svg" class="img-fluid ">
                </div>
                </div>
          </div>
          <div  class=" container-fluid d-flex justify-content-center ">
              <p id="leadText" class="lead  fs-1  text-center text-md-center fs-3 pb-2 ps-0 border-bottom border-2 border-dark fw-semibold">${content.lead}</p>
          </div>
      </div>
      <div class="container-fluid d-flex flex-column justify-content-center align-items-center "> 
          <p  class=" text-center text-lg-start">${content.p}</p>
          <p class=" text-center text-lg-start">${content.p2}</p>
      </div>
      
      <a href="#spanScroll" id="test" class="mt-auto">
          <img id="arrow" src="./img/landingPage/arrow-pointing.svg" class="img-fluid mb-4 ">
      </a>
  </div>
  `;
}

const removeBounceClass = () => {
  const elements = document.querySelectorAll(".bounceScroll");
    console.log(elements)
  elements.forEach((el) => {
    if (el.classList.contains("bounce")) {
      el.classList.remove("bounce");
    }
  });

    observer()

};

export const heroText = (id,text,path) => {
  

    fetchText(path).then(data => {

        const content = data[text]
        const target = document.querySelector(id)

        target.innerHTML = createHero(content)

        
            document.getElementById("test").addEventListener("click", () => {
                removeBounceClass()
            })

  


    })
    
  
}

