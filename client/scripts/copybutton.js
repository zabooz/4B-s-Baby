export const copyButton = (textId) => {

    const button = document.createElement('button')
    button.className = 'copyButton'
    
    const img = document.createElement('img')
    img.src = "/img/copyToClipBoard.png"

    button.append(img)

    const textElement = document.getElementById(textId)
    const index = textElement.innerText.indexOf(':') + 2
    const text = textElement.innerText.slice(index)

    button.addEventListener('click',() => {
        navigator.clipboard.writeText(text)
    })

    return button
    

}