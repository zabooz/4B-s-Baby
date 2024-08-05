
export const tooltip = () => {
  const bruteDescription = document.querySelectorAll('.bruteDescription');
  bruteDescription.forEach(description => {
      description.addEventListener("mouseover", () => {
          const styleSheet = document.styleSheets[0];
   
          styleSheet.insertRule(`#${description.id}::after { content: attr(data-tooltip); display: block; }`, styleSheet.cssRules.length);
      });

      description.addEventListener("mouseout", () => {
          const styleSheet = document.styleSheets[0];
          for (let i = 0; i < styleSheet.cssRules.length; i++) {
              if (styleSheet.cssRules[i].selectorText === `#${description.id}::after`) {
                  styleSheet.deleteRule(i);
                  break;
              }
          }
      });
  });
}

