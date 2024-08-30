import { fetchText } from "../utilities/fetchText.js";


const createQuote = (content) => {


    return `
  <div class="container my-5  bg-transparent ">
    <div class="row p-0 p-md-0 mx-0 -mx-md-5 d-flex justify-content-center align-items-center bg-transparent ">
    
        <div class=" m-0 p-0 bg-transparent">
          <div class="card-body p-0  bg-transparent d-flex flex-column ">
            <i class="fas fa-quote-left fa-2x mb-4"></i>
            <p class="lead text-center w-100 fst-italic">${content.zitat}</p>
            
            <hr>
            <div class="d-flex ">
              <p class="mb-0  w-100 text-center text-md-end text-right fw-semibold fs-4">${content.person}</p>
            </div>

          </div>
        </div>

      
    </div>
  </div>

`
}

export const quote = (id,text,quote,path) => {

    fetchText(path).then(data => {

        const content = data[text]
        const target = document.querySelector(id)

        target.innerHTML = createQuote(content[quote])
    })
    
  
}