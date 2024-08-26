import { fetchText } from "../utilities/fetchText.js";


const createHero = (content) => {

    return `
    <div class="jumbotron p-1  p-md-5  mb-2 mb-md-4 d-flex flex-column align-items-center heroText align-items-lg-start">
        <h1 class="display-5  fw-semibold my-4 text-center">${content.h1}</h1>
        <p class="lead w-75 w-lg-100 text-center text-lg-start">
          ${content.lead}
        </p>
        
        <p class=" w-75 w-lg-50">
        ${content.p}
        </p>
        <p class=" w-75 w-lg-50">
        ${content.p2}
        </p>
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