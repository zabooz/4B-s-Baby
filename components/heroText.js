import { fetchText } from "../utilities/fetchText.js";
import { observer } from "../utilities/bounce.js";

const createHero = (content) => {
  return `
  <div id="jumbotron" class="d-flex w-100 flex-column gap-4 align-items-center p-3">
      
      <div class="container-fluid row d-flex justify-content-center flex-column pt-2">
          <div id="logoContainer" class="row col-12 b justify-content-center justify-content-sm-center  justify-content-lg-start justify-content-sm-start gap-5 mb-5">
              <div class="col-10 col-xxl-3 col-sm-8 col-lg-4  col-xl-3 col-md-4  text-center text-md-start">
                  <img id="PPIcon" src="./img/landingPage/PPicon.png" class="img-fluid ">
              </div>
              <div class="col-12 col-xxl-2 col-xl-2 col-lg-3 col-md-3 pt-xxl-5 pt-xl-1 text-center text-lg-start d-none d-lg-block">
                  <img id="padlockPic" src="./img/landingPage/padlock.svg" class="img-fluid">
              </div>
          </div>
          <div  class=" container-fluid d-flex justify-content-center justify-content-lg-start">
              <p id="leadText" class="lead  fs-1  text-center text-md-center fs-3 pb-2 ps-0 border-bottom border-2 border-dark fw-semibold">${content.lead}</p>
          </div>
      </div>
      
      <div class="container-fluid d-flex flex-column justify-content-center align-items-center align-items-lg-start mt-xxl-2 ms-sm-3"> 
          <p  class=" heroText col-12 col-xxl-5 col-xl-5 col-lg-5 fs-4 col-md-7  text-center text-lg-start">${content.p}</p>
          <p class=" heroText col-12 col-xxl-5 col-xl-5 fs-4 mt-3 col-lg-5 col-md-7  text-center text-lg-start">${content.p2}</p>
      </div>
      
      <a href="#spanScroll" id="test" class="mt-auto">
          <img id="arrow" src="./img/landingPage/arrow-pointing.svg" class="img-fluid me-lg-5 ">
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

