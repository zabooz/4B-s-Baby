


export const landingPageScripts = (scrollBtnId,scrollTargetId) => {

    const scrollBtn = document.getElementById(scrollBtnId)
    scrollBtn.addEventListener("click", () => {
        scrollToElement(scrollTargetId);
      });
}



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