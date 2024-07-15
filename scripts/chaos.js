
const initialStyles = [];



const all = document.querySelectorAll('.allDiv *');

export const chaos = () => {
    
  
    all.forEach((element,index) => {

        if (!initialStyles[index]) {
            initialStyles[index] = {
                backgroundColor: element.style.backgroundColor,
                fontSize: element.style.fontSize
            };
        }

        const arr = ['green', 'blue', 'red', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black', 'white'];
        const arr2 = [5,4,3,2,1];

        const rdm = Math.floor(Math.random() * arr.length);
        const rdm2 = Math.floor(Math.random() * arr2.length);
        element.style.backgroundColor = arr[rdm];
        element.style.fontSize = `${rdm2}rem`;

    });
}
export const reset = () => {
   
    
        all.forEach((element,index) => {
            if(element.style.backgroundColor && element.style.fontSize){
                element.style.backgroundColor = initialStyles[index].backgroundColor;
                element.style.fontSize = initialStyles[index].fontSize;
            }
        });
     
   
}