import { fetchText } from "../utilities/fetchText.js";
import { observer } from "../utilities/bounce.js";

const createHero = (content) => {

    return `
    <div  id="jumbotron" class="d-flex flex-column align-items-center">
        
    <div class="w-100 d-flex justify-content-center align-items-center flex-column pt-2">
    <div class="d-flex  w-75 justify-content-lg-between justify-content-center ">
    <img  id="PPIcon"src="./img/landingPage/PPicon.png" class="ms-2">
    
    <img id="padlockPic" src="./img/landingPage/padlock.svg" class"img-fluid d-none" >
    </div>
    <p id="" class="lead w-75 text-center pb-3 text-lg-start border-bottom border-2 border-dark fw-semibold ">${content.lead}</p>
    
    </div>
    <div  class="w-75  d-flex justify-content-center  flex-column"> 
    <p class="w-75 mt-3 fw-semibold">
    ${content.p}
    </p>
    <p class=" w-75 fw-semibold mt-3  fs-4 text-decoration-underline">
    ${content.p2}
    </p>
    </div>
    <a href="#spanScroll" id="test" class="mt-4" >
    <img id="arrow" src="./img/landingPage/arrow-pointing.svg"
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

