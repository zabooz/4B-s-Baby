
export function pictureToString(){
    
    const input = document.getElementById('uploadFile')
    const file = input.files[0]


    if(file){
        const reader = new FileReader()


        reader.onloadend = function(){
            
            const base64String = reader.result.replace('data','').replace(/^.+,/, '')
            
            const pwdLength = 12

            const key = base64String.charCodeAt(pwdLength)
            
            let password = ''

            let index = 0

            while(password.length < pwdLength){
                index = (index + key) % base64String.length
                const char = base64String[index]
                password += char

            }
            


            
            
            console.log(password,password.length,key)
            document.getElementById('picResult').textContent += ' ' + password
            return base64String
        }


        reader.readAsDataURL(file)
    }

}