
import { passwordConverter } from "./passwordConverter"

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
            

            for(let i = 0; i<password.length;i++ ){

                if(i%2 === 0){
                    password[i] = passwordConverter(password[i],"leetAdvanced")
                }


            }
            
            
            
            document.getElementById('picResult').textContent += ' ' + password
            return base64String
        }


        reader.readAsDataURL(file)
    }

}