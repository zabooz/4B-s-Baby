import { fetchText } from "../utilities/fetchText.js";


const createHero = (content) => {

    return `
    <div class="jumbotron p-5 mb-5 d-flex flex-column align-items-center align-items-lg-start">
        <h1 class="display-5 fw-semibold my-4 text-center">${content.h1}</h1>
        <p class="lead fw-semibold text-center">
          ${content.lead}
        </p>
        <hr class="my-4 hr-custom w-100" />
        <p class="fw-semibold w-100 w-lg-50">
        ${content.p}
        </p>
        <p class="fw-semibold w-100 w-lg-50">
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