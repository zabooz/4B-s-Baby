import { fetchText } from "../utilities/fetchText.js";


const createHero = (content) => {

    return `
    <div  id="jumbotron" class="d-flex flex-column align-items-center">
        
    <div class="w-100 d-flex justify-content-center align-items-center flex-column mt-5 pt-2">
    <div class="d-flex  w-75 justify-content-between ">
    <img  id="PPIcon"src="./img/landingPage/PPicon.png" class="ms-2">
    
    <img id="padlockPic" src="./img/landingPage/padlock.svg" class"img-fluid" >
    </div>
    <p id="" class="lead w-75 text-center pb-3 text-lg-start border-bottom border-5 border-dark fw-semibold ">${content.lead}</p>
    
    </div>
    <div  class="w-75  d-flex justify-content-center  flex-column"> 
    <p class="w-75 mt-3 fw-semibold">
    ${content.p}
    </p>
    <p class=" w-75 fw-semibold mt-3  fs-4 text-decoration-underline">
    ${content.p2}
    </p>
    </div>
    <a href="#spanScroll" id="test" class="mt-4">
    <img id="arrow" src="./img/landingPage/arrow-pointing.svg"
    </a>
    </div>
    `;
}

export const heroText = (id,text,path) => {
  

    fetchText(path).then(data => {

        const content = data[text]
        const target = document.querySelector(id)

        target.innerHTML = createHero(content)




    })
    
  
}