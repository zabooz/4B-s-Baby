export const copyButton = (textId) => {

    const button = document.createElement('button')
    button.className = 'copyButton'
    
    const confirmBubble = document.createElement('div')
    confirmBubble.className = 'confirmBubble'
    confirmBubble.innerText = 'Copied!'



    const img = document.createElement('img')

    const boolean = document.getElementById('themeStylesheet').getAttribute('href').includes('serious')


    if(boolean){
        img.src = "../img/copyToClipBoard.png"
    }else{
        img.src = "../img/copyToClipBoard2.png"
    }

    button.append(img, confirmBubble)
    const textElement = document.getElementById(textId)
    
    const index = textElement.innerText.lastIndexOf(' ') 
    const text = textElement.innerText.slice(index)

    button.addEventListener('click',() => {
        navigator.clipboard.writeText(text)

        confirmBubble.classList.add('fadeIn')
        setTimeout(() => {
            confirmBubble.classList.remove('fadeIn')
        }, 2000);
    })

    return button
    

}