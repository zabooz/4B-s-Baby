export const copyButton = (textId) => {

    const button = document.createElement('button')
    button.className = 'copyButton'
    
    const img = document.createElement('img')

    const boolean = document.getElementById('themeStylesheet').getAttribute('href').includes('serious')


    if(boolean){
        img.src = "/img/copyToClipBoard.png"
    }else{
        img.src = "/img/copyToClipBoard2.png"
    }

    button.append(img)
    const textElement = document.getElementById(textId)
    const index = textElement.innerText.lastIndexOf(' ') 
    const text = textElement.innerText.slice(index)

    button.addEventListener('click',() => {
        navigator.clipboard.writeText(text)
    })

    return button
    

}