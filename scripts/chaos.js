
const initialStyles = [];



const all = document.querySelectorAll('.allDiv *');

export const chaos = () => {
    
  
    all.forEach((element) => {

        
        if(element.tagName === "P"){
            element.classList.add('chaos')
        }else if(element.tagName ==="IMG"){
            element.classList.add("scale")
        }
        else{
            element.classList.add('wabbling-text')
        }
    
    
    });
}
export const reset = () => {
   
    
        all.forEach((element) => {
            if(element.tagName === "P"){
                element.classList.remove('chaos')
            }else if(element.tagName ==="IMG"){
                element.classList.remove("scale")
            }else{
                element.classList.remove('wabbling-text')
            }
        });
     
   
}