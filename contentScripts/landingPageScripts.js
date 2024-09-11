


export const landingPageScripts = (scrollBtnId,scrollTargetId,contentBox,style) => {

    const scrollBtn = document.getElementById(scrollBtnId)
    scrollBtn.addEventListener("click", () => {
        scrollToElement(scrollTargetId);
      });

     
    const btn =  document.querySelectorAll("button[data-function]")
    
    btn.forEach((button) => {
        const funcName = button.dataset.function
        button.addEventListener("click", () => {
          window[funcName](contentBox,style)
        }
        
      )}
)}



function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',  // Sanftes Scrollen
        block: 'start',      // Scrollt das Element zum oberen Rand des sichtbaren Bereichs
        inline: 'nearest'    // Scrollt horizontal zum nächsten sichtbaren Bereich
      });
    } else {
      console.error('Element not found:', elementId);
    }
  }