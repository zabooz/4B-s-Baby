import { copyButton } from "/scripts/copybutton.js"
export let clipArr = []

const createClipBoard = () => {
  
    
    let p = ""

    


    for(let i = 0; i < clipArr.length;i++){

        const clip = "clip" + i
        
        p += `<p id="${clip}" >${clipArr[i]}</p>`

    }


    return `
      
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="clipBoardBtn">
  Clippy
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">ClipBoard</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${p}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    
    
    
    `




}

export const clipBoard = (id) => {


    const target = document.querySelector(id)

    clipArr = [...new Set(clipArr)]
    target.innerHTML = createClipBoard()

    for(let i = 0; i < clipArr.length;i++){
            const id  =  "clip" + i
            const clip = document.getElementById(id)
            const copyBtn = copyButton(id);
            copyBtn.setAttribute("data-bs-dismiss", "modal");
            clip.append(copyBtn)
    }

}