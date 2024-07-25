
const initialStyles = [];



const all = document.querySelectorAll('.allDiv *');

export const chaos = () => {
    
  
    all.forEach((element) => {

        console.log(element.tagName)
        if(element.tagName === "P"){
            element.classList.add('chaos')
        }else{
            element.classList.add('wabbling-text')
        }
    
    
    });
}
export const reset = () => {
   
    
        all.forEach((element) => {
            if(element.tagName === "P"){
                element.classList.remove('chaos')
            }else{
                element.classList.remove('wabbling-text')
            }
        });
     
   
}