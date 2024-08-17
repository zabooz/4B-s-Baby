import { fetchText } from "../utilities/fetchText.js";


const createQuote = (content) => {


    return `
  <div class="container my-5 sectionDiv bg-transparent">
    <div class="row p-4 d-flex justify-content-center align-items-center bg-transparent ">
    
        <div class=" m-0 p-0 bg-transparent">
          <div class="card-body p-4 bg-transparent d-flex flex-column ">
            <i class="fas fa-quote-left fa-2x mb-4"></i>
            <p class="lead fw-semibold">${content.zitat}</p>
            <i class="fas fa-quote-left fa-2x mb-4 ms-auto "></i>
            <hr>
            <div class="d-flex ">
              <p class="mb-0 fw-semibold fs-4">${content.person}</p>
            </div>

          </div>
        </div>

      
    </div>
  </div>

`
}

export const quote = (id,text,quote) => {
  
    fetchText().then(data => {

        const content = data[text]
        const target = document.querySelector(id)

        target.innerHTML = createQuote(content[quote])
    })
    
  
}