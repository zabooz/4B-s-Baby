import { fetchText } from "../utilities/fetchText.js";


const createHero = (content) => {

    return `
    <div  id="jumbotron" class="d-flex flex-column align-items-center">
        
    <div class="w-100 d-flex justify-content-center align-items-center flex-column ">
    <div class="d-flex  w-75  ">
    <h1 class="display-5  fw-semibold my-4 ">${content.h1}</h1>
    <img src="./img/safepassword.jpg" class="">
    </div>
    <p class="lead w-75 text-center text-lg-start border-bottom pb-0 ">${content.lead}</p>
    
    </div>
    <div  class="w-75 border d-flex justify-content-center  flex-column "> 
    <p class=" w-50">
    ${content.p}
    </p>
    <p class=" w-75 w-lg-50">
    ${content.p2}
    </p>
    </div>
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