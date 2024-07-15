

export const chaos = () => {
    
    const all = document.querySelectorAll('.allDiv *');
    
    all.forEach(element => {

        const arr = ['green', 'blue', 'red', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black', 'white'];
        const arr2 = [5,4,3,2,1];

        const rdm = Math.floor(Math.random() * arr.length);
        const rdm2 = Math.floor(Math.random() * arr2.length);
        element.style.backgroundColor = arr[rdm];
        element.style.fontSize = `${rdm2}rem`;

    });
}
