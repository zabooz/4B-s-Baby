import { fetchText } from "/utilities/fetchText.js";


const createQuote = (content) => {


    return `
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center ">
      <div class="">

        <div class="card">
          <div class="card-body p-4">
            <i class="fas fa-quote-left fa-2x mb-4"></i>
            <p class="lead">${content.zitat}</p>
            <hr>
            <div class="d-flex">
              <p class="mb-0">${content.person}</p>
            </div>

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