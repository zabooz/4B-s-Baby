import { fetchText } from "../utilities/fetchText.js";
import { observer } from "../utilities/bounce.js";

const createHero = (content) => {

    return `
    <div  id="jumbotron" class="d-flex flex-column gap-2 align-items-center">
        
    <div class="w-100 d-flex justify-content-center  flex-column pt-2">
    <div  id="logoContainer"  class="d-flex justify-content-lg-start justify-content-center gap-5 mb-5 me-5">
    <div class="w-50 pt-5">
    <img  id="PPIcon"src="./img/landingPage/PPicon.png" class="px-5 img-fluid">
    </div>
    <div class="w-25 pt-5">
    <img id="padlockPic" src="./img/landingPage/padlock.svg" class"img-fluid d-none mx-5 my-auto" >
    </div>
    </div>
    <div class="d-flex">
    <p  class="lead   text-center pb-2 fs-2 ms-5 text-lg-start border-bottom border-2 border-dark fw-semibold ">${content.lead}</p>
    </div>
    </div>
    <div  class="w-75 d-flex me-auto ms-4 flex-column"> 
    <p class="w-50 fs-4 ms-4">
    ${content.p}
    </p>
    <p class=" w-50  mt-3 ms-4 fs-4 ">
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

