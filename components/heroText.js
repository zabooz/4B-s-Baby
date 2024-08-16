import { fetchText } from "/utilities/fetchText.js";


const createHero = (content) => {

    return `
    <div class="jumbotron p-3">
        <h1 class="display-5 fw-semibold my-4">${content.h1}</h1>
        <p class="lead fw-semibold">
          ${content.lead}
        </p>
        <hr class="my-4" />
        <p>
        ${content.p}
        </p>
        ${content.p2}
      </div>
    `;
}
export const heroText = (id,text) => {
  

    fetchText().then(data => {

        const content = data[text]
        const target = document.querySelector(id)

        target.innerHTML = createHero(content)




    })
    
  
}