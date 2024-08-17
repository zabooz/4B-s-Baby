import { fetchText } from "../utilities/fetchText.js";


const createOffCanvas = (content) => {


    return `
          <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id=${content.canvas}
        aria-labelledby="${content}"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="${content}">
            ${content.header}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div >
            <p>${content.p}</p>
            <p>${content.p2}</p>
            <p>${content.p3}</p>
            <p>${content.p4}</p>
            <p>${content.p5}</p>
            </script>
          </div>
        </div>
      </div>`
}

export const loadOffCanvas  = (id,text) => {
    
    fetchText().then(data => {

        const content =  data[text]
        const target = document.querySelector(id)

        target.innerHTML += createOffCanvas(content)

    });



}

