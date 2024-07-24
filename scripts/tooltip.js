
export const tooltip = () => {

    const bruteDescription = document.querySelectorAll('.bruteDescription');
    
    
    bruteDescription.forEach(description => {
      description.addEventListener("mouseover", () => {
        const  styleSheet  = document.styleSheets[0];
        styleSheet.insertRule(`#${description.id}::after { content: attr(data-tooltip);display: block; }`, styleSheet.cssRules.length);
      })
    })
}

